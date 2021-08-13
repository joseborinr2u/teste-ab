export default function reportExperimentViewed(user_id, experiment_id, variation_id) {
    fetch('/api/experimentViewed', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user_id,
          anonymous_id: `anon${user_id}`,
          received_at: Date.now(),
          experiment_id: experiment_id,
          variation_id: variation_id,
          url: window.location.toString(),
          user_agent: navigator.userAgent.toString()
        })          
    }).then(resp => console.log(resp.status))
}