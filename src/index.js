import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import WebFont from 'webfontloader';

WebFont.load({
	google: {
		families: ['Roboto+Slab:300,400,700']
	}
});

ReactDOM.render(<Home />, document.getElementById('root'));
module.hot.accept();
