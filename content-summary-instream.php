<?php
/**
 * The default template for displaying content. Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

<?php ?>
<article id="post-<?php the_ID(); ?>" <?php post_class("stream-post instream-stream-post"); ?>>
	<a class="summary-post-link" href="<?php the_permalink(); ?>" rel="bookmark">
		
		

		<?php //if ( has_post_thumbnail() && ! post_password_required() ) : $full_width = true; ?>
			
			<div class="entry-thumbnail">
				<?php the_post_thumbnail(); ?>
			</div>

		<?php // endif; ?>
        <header class="entry-header">
		
		<span class="topic"><?php echo exa_topic( $post->ID ); ?></span>
	</header><!-- .entry-header -->
		<h2 class="entry-title">
			<?php the_title(); ?>
		</h2>
		<div class="clearfix"></div>

		<div class="entry-summary <?php if(!$full_width) { echo "entry-summary-full"; } ?>">
					<p> <span class="summary-time-stamp"><?php echo exa_human_time_diff(get_the_time('U')) ?> ago &middot; </span><?php echo get_the_excerpt(); ?></p>
		</div><!-- .entry-summary -->

	</a>

	<div class="clearfix"></div>

	<?php if(hrld_related_has_posts()) : ?>
    <!--
	<div class="related-posts related-posts-<?php hrld_related_post_count() ?>-count">
		
		<header class="related-header">
			<h3><?php hrld_related_topic($post); ?></h3>
		</header>
		<div class="related-post-articles">
		<?php 
			$related_posts = hrld_related_post_ids($post);
			foreach($related_posts as $related_post) : ?>
			
				<a class="related-post" href="<?php echo get_permalink($related_post); ?>">
					<div>
						<?php
							$thumb = wp_get_attachment_image_src( get_post_thumbnail_id($related_post), 'small-thumbnail' );
							$url = $thumb['0'];
						?>
						<img class="thumbnail" src="<?php echo $url ?>" />
						<span class="related-post-type"><?php echo get_post_type($related_post); ?></span>
						<?php echo get_the_title($related_post); ?>
						<span class="excerpt-more">...</span>
					</div>
				</a>

			<?php endforeach; ?>
		</div>
		<div class="clearfix"></div>

	</div>
    -->
	<?php endif; // has related posts ?>


</article><!-- #post -->
