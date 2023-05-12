async function addNavbar() {
    const resp = await fetch("https://smc-26.github.io/sciencefair2023/navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
  }
  function redirect() {
        var RedirectURLs = {
          "urls" : [
            { "url" : "https://smc-26.github.io/sciencefair2023/Barium-1/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Barium-2/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Barium-3/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Barium-4/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Barium-5/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Lithium-1/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Lithium-2/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Lithium-3/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Lithium-4/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Lithium-5/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Calcium-1/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Calcium-2/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Calcium-3/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Calcium-4/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Calcium-5/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Sodium-1/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Sodium-2/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Sodium-3/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Sodium-4/" },
            { "url" : "https://smc-26.github.io/sciencefair2023/Sodium-5/" }
          ]
        }
        var Groups = RedirectURLs.urls.length;
  
        var rndIndex = Math.floor((Math.random() * Groups));
  
        var gotoUrl = RedirectURLs.urls[rndIndex].url

        if (window.location.search == "?debug") {
            document.write("Redirect URL: " + gotoUrl);
        } else {
            document.location = gotoUrl;
        }
    }