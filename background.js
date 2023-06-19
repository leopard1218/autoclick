chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'closeTabs') {
    const keywordList = request.keywordList;

    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        if (tab.url?.startsWith("chrome://")) return undefined;
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            console.log(document.querySelector('.red-pill-button'))
            return document.body.innerHTML;
          }
        }, function(result) {
          // console.log(result[0].result)
          // console.log($('.red-pill-button'))
          // const submitButton = document.querySelector('div.form-submit-wrapper button.red-pill-button');
          // console.log(submitButton)
          // if (result[0].result) {
          //   result[0].result.click();
          // }
          // const contentText = result[0].result.toLowerCase();

        });
      });
    });
  }
});
