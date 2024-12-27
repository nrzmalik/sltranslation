window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function createGoogleTranslateWidget() {
    const translateDiv = document.createElement('div');
    translateDiv.id = 'google_translate_element';

    // Find the target div with class "slide-window-slide-container"
    const targetDiv = document.querySelector('.slide-window-slide-container');

    // Insert the translateDiv before the targetDiv
    targetDiv.parentNode.insertBefore(translateDiv, targetDiv);

    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script1);

    if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
            }, 'google_translate_element');
        }
    }
}

//Append CSS

function addCssToHead(cssRules) {
    // Create a style element
    var styleElement = document.createElement('style');

    // Set the style element's content with the provided CSS rules
    styleElement.textContent = cssRules;

    // Append the style element to the head of the document
    document.head.appendChild(styleElement);
}

// Example usage:
var css = `
    iframe[id=":1.container"] {
        display: none !important;
    }
    body {
        top: 0 !important;
    }
    .goog-logo-link {
        display: none !important;
    }
    .goog-te-gadget {
        color: transparent !important;
    }
    .VIpgJd-ZVi9od-l4eHX-hSRGPd {
        display: none;
    }
    #goog-gt-tt #goog-gt-vt {
        display: none !important;
    }
    .VIpgJd-ZVi9od-aZ2wEe-wOHMyf.VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc {
        display: none !important;
    }
`;

// Call the function to create the Google Translate widget
if (!document.getElementById('google_translate_element')) {
    // If not available, execute the createGoogleTranslateWidget() function
    addCssToHead(css);
    createGoogleTranslateWidget();
}

}

};
