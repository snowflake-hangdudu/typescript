class Snake {
  head: HTMLElement;

  // 蛇身体
  bodies: HTMLCollection;
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div")! as HTMLElement;
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {
    this.head.style.left = value + "px";
  }

  set Y(value) {
    this.head.style.top = value + "px";
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;
