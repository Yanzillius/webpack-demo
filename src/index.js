import './styles/app.scss';
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

class Tabs {
  constructor(
    wrapperId,
  ) {
    this.wrapperNode = document.getElementById(wrapperId);
    this.initTabs();
    this.wrapperNode.addEventListener('click', (e) => this.handleWrapperClick(e));
  }

  get tabsControlsNodesArray() {
    return Array.from(this.wrapperNode.getElementsByClassName('tabs_controls')[0].childNodes)
      .filter(item => item.className ? item.className.includes('tab_button') : false);
  }

  get tabsContentNodesArray() {
    return Array.from(this.wrapperNode.getElementsByClassName('tabs_content')[0].childNodes)
      .filter(item => item.className ? item.className.includes('tab') : false);
  }

  initTabs() {
    this.tabsControlsNodesArray[0].classList.add('active');
    this.tabsContentNodesArray[0].classList.add('active');
  }

  setActiveTab(tabId) {
    [
      ...this.tabsControlsNodesArray,
      ...this.tabsContentNodesArray
    ].forEach(item => {
      item.classList.remove('active')
      if (item.getAttribute('data-table-id') === tabId) {
        item.classList.add('active');
      }
    });;
  }

  handleWrapperClick({ target }) {
    if (this.tabsControlsNodesArray.includes(target)) {
      const tabId = target.getAttribute('data-table-id');
      this.setActiveTab(tabId);
    }
  }
}

document.body.appendChild(Button('text'))
document.body.appendChild(Text('Lorem ipsum dolor sit amet consectetur adipisicing elit.'))

new Tabs("tabs");