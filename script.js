
const groups = [
  {
    image: "EMMA_post.png",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupA"
  },
  {
    image: "img/Lil_Miquela_post.png",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupB"
  },
  {
    image: "img/Pata_the_Andean_Fox_post.png",
    link: "https://forms.gle/gGcV2TnfZ9Zan1tw7?entry.267493217=GroupC"
  }
];
const randomGroup = groups[Math.floor(Math.random() * groups.length)];
const container = document.getElementById('imageContainer');
const img = document.createElement('img');
img.src = randomGroup.image;
img.alt = "點我開始問卷";
img.onclick = () => {
  window.location.href = randomGroup.link;
};
container.appendChild(img);
