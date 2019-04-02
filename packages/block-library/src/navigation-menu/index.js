/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import edit from './edit';

export const name = 'core/navigation-menu';

export const settings = {
	title: __( 'Navigation Menu (Experimental)' ),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><Path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" /><Path d="M0 0h24v24H0z" fill="none" /></SVG>,

	category: 'layout',

	description: __( 'A navigation meny for your website.' ),

	keywords: [ __( 'menu' ), __( 'navigation' ), __( 'links' ) ],

	supports: {
		align: [ 'wide', 'full' ],
		anchor: true,
		html: false,
	},

	attributes: {},

	edit,

	save() {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
};
