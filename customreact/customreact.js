function customRender(reactElement, contanier) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.taget);

  contanier.appendChild(domElement)
}

const reactElement = {
  type: "a",
  props: {
    href: "https://forex.com",
    taget: "_blank",
  },
  children: "Clicke me To Visit",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
