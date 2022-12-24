window.alert('拡張機能始動!!');

function rm_imp(){
  var activities = document.getElementsByClassName('css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws');
  for (let i=0;i<activities.length;i++){
    var imp = activities[i]['childNodes'][0]

    while (imp.firstChild) {
      imp.removeChild(imp.firstChild);
    }
  }
}

const mutationObserver = new MutationObserver(rm_imp)
const config = {
  childList: true,
  subtree: true
}
mutationObserver.observe(
  document,
  config
)
