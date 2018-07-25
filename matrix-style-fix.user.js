// ==UserScript==
// @name         make_matrix_great_again
// @namespace    CodersUnderground
// @version      0.0.5
// @description  fix matrix styles in browser to make it actually useable
// @author       Shawak
// @match        *://matrix.heldscal.la/*
// @downloadURL  https://github.com/Shawak/matrix-style-fix/matrix-style-fix.user.js
// @updateURL    https://github.com/Shawak/matrix-style-fix/matrix-style-fix.user.js
// @grant        GM_addStyle
// ==/UserScript==

var css = `

/* background color */
.mx_MatrixChat_middlePanel,
.mx_LeftPanel,
.mx_RightPanel,
.mx_RightPanel_headerButtonGroup,
.mx_RoomSubList_label,
.mx_RoomDropTarget_container,
.mx_RoomTile,
.mx_TagPanel,
.mx_RoomHeader_rightRow,
.mx_RoomList,
.matrixchat,
.mx_MImageBody,
.mx_EventTile_line,
.mx_RoomView_statusAreaBox {
  background-color: #1d1f21 !important;
}

/* max width sized chat */
.mx_RoomView_messageListWrapper,
.mx_MessageComposer_wrapper,
.mx_RoomView_statusAreaBox,
.mx_RoomHeader_wrapper,
.mx_RoomView_auxPanel,
.mx_TopUnreadMessagesBar {
  max-width: 100%;
}

/* rust highlighting */
.language-rust span {
  filter: invert(100%);
}
.language-rust .hljs-title {
  color: #b3deef;
}
.language-rust .hljs-keyword {
  color: #73cef4;
}
.language-rust .hjls-string {
  color: #d3b987;
}
.language-rust .hjls-comment {
  color: #666666;
}
.language-rust .hljs-number {
  color: #ffc24b;
}

/* move user icons away from scrollbar */
.mx_RoomView_messageListWrapper {
  padding-right: 15px;
}

/* smaller xyz is typing box */
.mx_RoomView_statusAreaBox {
  min-height: 32px; /* height of typingBar+2px for line above */
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

/* make placeholder color darker */
.public-DraftEditorPlaceholder-root {
  color: rgb(80, 80, 80);
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