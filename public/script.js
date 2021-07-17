const socket = io("/");
const videoGrid = document.getElementById("video-grid");
const chatParticipants=document.getElementById("chat_participants");
const myVideo = document.createElement("video");
const showChat = document.querySelector("#showChat");
const backBtn = document.querySelector(".header__back");

var html = VIDEO_ID
  var ifrm = document.createElement("iframe");
  html.split(",").forEach(element => {
  ifrm.setAttribute("src", element);
  ifrm.style.width = "100%";
  ifrm.style.height = "100%";
  videoGrid.appendChild(ifrm);
 });

const inviteButton = document.querySelector("#inviteButton");

inviteButton.addEventListener("click", (e) => {
  prompt(
    "Copy this link and send it to people you want to meet with",
    window.location.href
  );
});
