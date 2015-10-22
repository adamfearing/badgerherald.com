<?php 
/**
 * Functions to allow editors to
 * control post and page layout.
 * 
 * Currently, this enables video
 * functionality.
 *
 * @since v0.4
 */


/**
 * Register taxonomy for layout options.
 * 
 * @since v0.4
 */
function _exa_register_layout_taxonomy() {

	$labels = array(
		'name'                       => _x( 'Layout', 'Taxonomy General Name', 'exa' ),
		'singular_name'              => _x( 'Layout', 'Taxonomy Singular Name', 'exa' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => false,
		'show_ui'                    => true, // turn of to disable admin ui. that's it!
		'show_admin_column'          => false,
		'show_in_nav_menus'          => false,
		'show_tagcloud'              => false,
		'query_var'                  => 'exa_layout',
	);
	register_taxonomy( 'exa_layout', array( 'post' ), $args );

}
add_action( 'init', '_exa_register_layout_taxonomy', 0 );

/**
 * Returns video link for the passed in post.
 * Currently the top link in the post.
 * 
 * @since v0.4
 */
function exa_video_link($post = null) {

	$post = get_post($post);

	/* Get the first youtube link within the post */

	$firstWord = preg_split('/\s+/', $post->post_content);

	if(_exa_is_youtube_link($firstWord[0])) {
		return $firstWord[0];
	} else {
		return null;
	}

}

/**
 * Returns true if the given link is a youtube embed.
 * 
 * @since v0.4
 */
function _exa_is_youtube_link($link) {

	// @see http://stackoverflow.com/a/13476188

	$rx = array(	
			'#http://((m|www)\.)?youtube\.com/watch.*#i',
			'#https://((m|www)\.)?youtube\.com/watch.*#i',
			'#http://((m|www)\.)?youtube\.com/playlist.*#i',
			'#https://((m|www)\.)?youtube\.com/playlist.*#i',
			'#http://youtu\.be/.*#i',
			'#https://youtu\.be/.*#i'
		);
	
	foreach($rx as $r) {
		if(preg_match($r, $link, $matches))
			return true;
	}

	return false;

}

?>
