
function getComponent() {
    const element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return import('lodash')
        .then(({ default: _ }) => {
            const element = document.createElement('div');

            element.innerHTML = _.join(['Hello', 'webpack'], ' ');

            return element;
            return element;
        })
        .catch((error) => 'An error occurred while loading the component');
}

document.body.appendChild(component());
getComponent().then((component) => {
    document.body.appendChild(component);
});