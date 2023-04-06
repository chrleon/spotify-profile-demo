const clientID = "4e840da70350489d9cbe280deca11218"
const code = undefined

if (!code) {
  redirectToAuthCodeFlow(clientId)
} else {
  const accessToken = await getAccessToken
  const profile = await fetchProfile(accessToken)
  populateUI(profile)
}

async function redirectToAuthCodeFlow(clientId:string) {
  // todo: redirect to Spotify authorization page
}

