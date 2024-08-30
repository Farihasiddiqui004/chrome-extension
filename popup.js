const btn = document.getElementById("clickBtn");
btn.addEventListener('click', ()=>{
    let queryOPtions = { active: true, currentWindow: true };

    chrome.tabs.query(queryOptions,(tabs) => {
      console.log(tabs[0].id);
      chrome.tabs.sendMessage(
        tabs[0].id,
        { task: 'microsoft' },
        function (response) {
          console.log(response.status);
        }
      );
    });
  });