export default function reportComponentClicked(user_id) {
    fetch('/api/componentClick', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: user_id,
            received_at: Date.now()
        })
    }).then(resp => console.log(resp.status))
}