import Head from 'next/head'
import Layout from '../components/layout'

import {
  GrowthBook, GrowthBookProvider
} from '@growthbook/growthbook-react'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

import MyABTest from '../components/myABTest'
import React, { useState, useEffect } from 'react'

import reportExperimentViewed from '../events/reportExperimentViewed'
import reportComponentClicked from '../events/reportComponentClicked'

export default function Home() {
  const [growthbook, setGrowthbook] = useState(undefined)

  useEffect(() => {
    FingerprintJS.load().then(
      fp => fp.get()
    ).then(
      result => result.visitorId
    ).then(
      userId => new GrowthBook({
        user: {
          id: `${userId}`,
        },
        trackingCallback: (experiment, result) => reportExperimentViewed(userId, experiment.key, result.variationId),
      })
    ).then(gb => setGrowthbook(gb))
  }, [])

  return (
    <Layout>
      <Head>
        <title>Teste A/B</title>
      </Head>
      {growthbook ? (
        <GrowthBookProvider growthbook={growthbook}>
          <div onClick={() => reportComponentClicked(growthbook.context.user.id)}>  
            <MyABTest />
          </div>
        </GrowthBookProvider>
      ) : null}
    </Layout>
  )
}