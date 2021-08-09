import jss from 'jss';
import preset from 'jss-preset-default'
import styles from './syles';

jss.setup(preset());
const {
    classes
} = jss.createStyleSheet(styles).attach();

function Text(text) {
    const node = document.createElement('div');
    node.classList.add(classes.text);
    node.innerText = text;
    return node;
}

export default Text;