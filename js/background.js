//유튜브 링크(수익성x)
const links = 
["https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1", 
"https://www.youtube.com/embed/CfPxlb8-ZQ0?autoplay=1&mute=1", 
"https://www.youtube.com/embed/kgx4WGK0oNU?autoplay=1&mute=1",
"https://www.youtube.com/embed/Dx5qFachd3A?autoplay=1&mute=1", 
"https://www.youtube.com/embed/QK2mtWjtyDU?autoplay=1&mute=1",
"https://www.youtube.com/embed/mgBFGwsmdOQ?autoplay=1&mute=1",
"https://www.youtube.com/embed/ky86t1iZyS0?autoplay=1&mute=1",
"https://www.youtube.com/embed/as0MnTrvLos?autoplay=1&mute=1"
];
//플레이리스트 링크 랜덤출력
const chosenMusic = links[Math.floor(Math.random() * links.length)];

//src에 링크 입력하여 삽입준비
const att = document.createAttribute("src");
att.value= `${chosenMusic}`;

//페이지 로딩시 iframe태그에 자동삽입, 백그라운드에 유튜브영상 재생
const iframe = document.getElementsByTagName("iframe")[0];
iframe.setAttributeNode(att);
console.log(iframe);












// function startMusic(event){
//     document.createAttribute(chosenMusic);
// }

// const ytMusic = document.getElementsById("ytMusicPlayer");

// console.log(ytMusic)
// console.log()