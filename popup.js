document.addEventListener('DOMContentLoaded', function() {
    const closeTabsButton = document.getElementById('closeTabsButton');

    closeTabsButton.addEventListener('click', function() {
      console.log("click")
      chrome.runtime.sendMessage({ action: 'closeTabs', keywordList: 'keywordList' });
    });
  });
  