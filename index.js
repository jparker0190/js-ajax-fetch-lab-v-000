function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(repo).then(res => res.json()).then(json => console.log(json));
}

function getToken() {
  return 360651b86551d7d9526bdddabfc185cec438cb66
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
