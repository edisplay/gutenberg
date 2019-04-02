/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

import {
	InnerBlocks,
} from '@wordpress/block-editor';

class NavigationMenu extends Component {
	render() {
		return (
			<div className="wp-block-navigation-menu">
				<InnerBlocks
					template={ [
						[ 'core/navigation-menu-item', { label: 'Home' } ],
						[ 'core/navigation-menu-item', { label: 'Cakes' } ],
						[ 'core/navigation-menu-item', { label: 'About' } ],
					] }
				/>
			</div>
		);
	}
}

export default NavigationMenu;
