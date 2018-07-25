// ==UserScript==
// @name         make_matrix_great_again
// @namespace    CodersUnderground
// @version      0.0.1
// @description  fix matrix styles in browser to make it actually useable
// @author       Shawak
// @match        *://matrix.heldscal.la/*
// @downloadURL  https://github.com/Shawak/matrix-style-fix/matrix-style-fix.user.js
// @updateURL    https://github.com/Shawak/matrix-style-fix/matrix-style-fix.user.js
// @grant        GM_addStyle
// ==/UserScript==

var css = `

/* max width sized chat */
.mx_RoomView_messageListWrapper,
.mx_MessageComposer_wrapper,
.mx_RoomView_statusAreaBox,
.mx_RoomHeader_wrapper,
.mx_RoomView_auxPanel {
  max-width: 100%;
}

/* move user icons away from scrollbar */
.mx_RoomView_messageListWrapper {
  padding-right: 15px;
}

/* smaller xyz is typing box */
.mx_RoomView_statusAreaBox {
  min-height: 30px;
}
.mx_RoomStatusBar_typingBar {
  line-height: 30px;
  height: 30px
}
.mx_RoomStatusBar {
  min-height: 0px;
}
.mx_RoomStatusBar_indicator {
  margin-top: 0;
}

/* TODO: add before img */
.mx_RoomStatusBar_typingBar::after {
  content: "..."
}

/* increase input field size */
.public-DraftEditor-content {
  position: relative;
  padding: 20px 10px;
}

/* fix input field placeholder position */
.public-DraftEditorPlaceholder-root {
  padding: 20px 10px;
}

/* remove height from markdown icon */
.mx_MessageComposer_input_markdownIndicator {
  position:absolute;
  left:0px;
  top:0px;
}

/* transparent avatar backgrounds */
.mx_BaseAvatar.mx_BaseAvatar_image {
  background-color: rgba(0, 0, 0, 0);
}

/* font size in chat */
.mx_MTextBody.mx_EventTile_content {
  font-size: 15px;
}

/* emoji size in chat */
.mx_emojione {
  font-size: 36px;
}

`;

GM_addStyle(css);

(function() {

  // automaticly scoll to bottom of chat on page load, this is very ugly atm but the element doesn't exist on document load state so yeah
  var checkExist = setInterval(function() {
    var e = document.getElementsByClassName("mx_RoomStatusBar_scrollDownIndicator");
    if (e.length > 0) {
      e[0].click();
      clearInterval(checkExist);
    }
  }, 50);

})();