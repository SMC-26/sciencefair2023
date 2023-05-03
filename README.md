
# ![alt text](https://raw.githubusercontent.com/SMC-26/sciencefair2023/deployment/x-assets/img/smc-logo.png "PSHS-SMC Campus Logo") Science Fair 2023 Website
## Project Rubrics
### Project Proper (40 Pts Total)
| Criteria   | Above Standard (5pts) | Meets Standard (4pts)| Below Standard (3pts)| Non Standard (2pts) |
|  :---:     |   :---:   |   :---:   |   :---:   |   :---:   |
| Simplicity (5pts) | Content is simple and design is easy to understand | Content is on point | Web page is somewhat busy | Web page is too busy |
| Navigation (5pts) | content is presented in a clear manner that is easy to follow; readers can get around your page with ease; there are no blind links   |   content is presented in a clear manner that is easy to follow; navigation is fine; not intuitive   | content is somewhat confusing and difficult to follow; site is somewhat difficult to navigate; too much textual information |   content is confusing and difficult to follow; site is difficult to navigate; not intuitive; large images that take long to load   |
|  Layout (5pts)    |   Page layout is creative and effective;Layout effects and extends the ideas and content   |   Page layout is interesting and appropriate for content; Layout is appropriate for the content   |   Page layout may be ‘busy’ or unimaginative; Unreflective use of a template   |   Layout of pages is confusing, or cluttered or dull; Layout does not reflect ideas and content, but seems arbitrary   |
| Functionality (5pts)  |  Functionality intrigues target audience and enhances purpose; Simple and powerful navigation structures make navigation feel intuitive; All functionality, works properly; Creative use of interactivity enhances purpose of the site  |  Functionality is appropriate for target audience and accomplishes the purpose; Simple navigation structures make site quite easy for user; Appropriate use of interactivity for the purpose of the site  |  Navigation structures may be awkward or difficult to use; Some elements of functionality may not work as intended, or may not meet the needs of the target audience  |  User becomes lost in navigating on or between pages; Problems with functionality frustrate the user  |
|  Audience and Theme (5pts)     |  tone of language appropriate for audience; use of graphics and colors is aligned with the audience and theme; audience and theme are well defined  |  tone of language is mostly appropriate; use of graphics and colors is mostly aligned to the audience and theme  |  audience and theme are not defined or poorly defined through confusing use of tone and language  |  use of graphics and/ or colors is not appropriate for audience and theme  | 
| Responsiveness (5pts)    |   The page works on mobile phones and tablets as well as in computers with additional mobile accessibility features  |  The page works fine on mobile phones and tablets  |  The page works on mobiles phones and tablets with some issues  |  The page has responsiveness issues that needs to be addressed  |


link to home page: https://smc-26.github.io/sciencefair2023/
## Add a Group Folder
1. Get invited into the [SMC-26](https://github.com/SMC-26) GitHub Organization. Consult your CS3 teacher or your section representative on how to get invited.
2. Create or upload your group's research folder inside the [sciencefair2023](https://github.com/SMC-26/sciencefair2023/) repository. It should be named in SectionName-GroupNumber format. For example: `Unobtainium-420`.
3. Insert your web page files in your group's folder. Make sure to name it `index.html` otherwise you might encounter some issues.
## Adding the Website Navbar
**Edit: the files and file links are modified to simplify the process.**
To promote a uniform experience across all of the research pages published through this repository, a universal navigation bar will be mandatory to maintain seamless acess throughout the whole site. In order to make this work for your group's webpage, follow these instructions:

1. As the navigation bar is dependent on the use of Bootstrap for it to work properly, you need to import both the CSS and Javascript Files. For the Bootstrap CSS and Javascript, insert the code below inside your web page's `<head>`. The Bootstrap base Javascript code and Navbar function has been combined into one for ease of use:
```md
<link href="https://smc-26.github.io/sciencefair2023/bootstrap.css" rel="stylesheet">
<script src="https://smc-26.github.io/sciencefair2023/bootstrap.js"></script>
```
2. Lastly, in your HTML file, insert the Javascript Function call to add the navigation bar. The ideal place to insert the code would be just below the opening `<body>` element.
```md
<script>addNavbar()</script>
```
### In summary...
The file structure with these modifications should look like this:
```md
<!DOCTYPE html>
<html>
  <head>
      ...
      <link href="https://smc-26.github.io/sciencefair2023/bootstrap.css" rel="stylesheet">
      <script src="https://smc-26.github.io/sciencefair2023/bootstrap.js"></script>
      ...
  </head>
  <body>
      <script>addNavbar()</script>
      ...
  </body>
</html>
```
A project with a working navbar is shown [here.](https://smc-26.github.io/sciencefair2023/Lithium-3/)

### Broken Navbar (Conflicts)

If you are sure you did all the steps correctly, yet the navigation bar (or even the page) is broken, it means that there is a CSS/JS property call conflict. Most Bootstrap template website files contain customized or personalized versions of the CSS and/or Javascript files. So if this happens look for these things that might cause the problem:
1. There is a pre-existing navigation bar in the web page.
If there is a pre-existing navbar in your template, kindly remove it.
2. The properties/functions of the page has modified CSS and/or Javascript files.
Please do not import the bootstrap CSS from the guide above if you are already using Bootstrap for your template. If you think the Javascript messes up your layout, the code to add the Navigation bar will be posted below so you can add it to your own Javascript files.
```md
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
      // Count the number of URLs in list.
      var Groups = RedirectURLs.urls.length;
      // Randomize number and get the corresponding index for the URL in list.

      var rndIndex = Math.floor((Math.random() * Groups));

      var gotoUrl = RedirectURLs.urls[rndIndex].url
      // Perform redirection.
      if (window.location.search == "?debug") {
          // Debug mode: If user supplies a ?debug querystring,
          // then only show the redirect URL, but don't actually redirect.
          document.write("Redirect URL: " + gotoUrl);
      } else {
          // Redirect the user to the new URL.
          document.location = gotoUrl;
      }
  }
```
3. Both


Work in Progress...
