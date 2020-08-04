import Detail from './lib/Detail.jsx'
import LikeButton from './lib/LikeButton.js'

export {
  Detail,
  LikeButton
}

window.renderDetail = (containerId, path) => {
  ReactDOM.render(
    <Detail path={path} />,
    document.getElementById(containerId),
  );
  // unregister(); service worker
};

window.unmountDetail = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};


window.renderLikeButton = (containerId, path) => {
  ReactDOM.render(
    <LikeButton path={path} />,
    document.getElementById(containerId),
  );
};

window.unmountLikeButton = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
