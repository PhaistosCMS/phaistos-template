module.exports = {
	name: 'Phaistos Theme',
	fontPreloads: [
		'https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_fKDp.woff2'
	],
	components: [
		{
			name: 'post',
			src: 'post.html'
		},
		{
			name: 'relatedPost',
			src: 'related-post.html'
		}
	],
	pages: [{
		type: 'home',
		props: [
			{
				name: 'nextPageLabel',
				viewName: 'Next page label',
				type: 'text'	
			}
		]
	}]
};