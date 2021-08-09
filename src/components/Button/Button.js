import jss from 'jss';
import preset from 'jss-preset-default'
import styles from './syles';

jss.setup(preset());
const {
    classes
} = jss.createStyleSheet(styles).attach();

function Button(text) {
    const node = document.createElement('div');
    node.classList.add(classes.button);
    node.innerText = text;
    return node;
}

export default Button;