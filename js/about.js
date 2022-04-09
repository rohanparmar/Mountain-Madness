function switchLantern(lanternNum) {
  let lanternOn = document.getElementById(`lantern-on${lanternNum}`);
  let lanternOff = document.getElementById(`lantern-off${lanternNum}`);
  lanternOn.classList.toggle("hidden");
  lanternOff.classList.toggle("hidden");
}
let sakura;

let aboutTree = document.getElementById("about-tree");
aboutTree.addEventListener("mouseover", () => {
  console.log("mouseover sakura");
  sakura = new Sakura("about-tree-div");
});

aboutTree.addEventListener("mouseout", () => {
  //   sakura.stop(true);
  setTimeout(() => {
    sakura.stop(true);
  }, 20000);
  setTimeout(() => {
    sakura.stop();
  }, 30000);
});
