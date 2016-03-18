<?php 


global $OnCampus;
global $block;
if(!$block) {
	$block = new Block('article-display');
	$block->default_args(
		array('layout' => 'standard')
		);
}

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<?php 
$args = array();
$args['center'] = (exa_layout()=='feature');

exa_block('headline',$args);
?>

<div class="block article-display-block showcase-block <?php echo $block->args['layout']; ?>">
	<div class="wrapper">
		<main class="article-content">
			<div class="meta">

				<?php /* Mug: */ ?>
				<div class="mug-box">
					<?php exa_mug(get_the_author_meta('ID'),'small-thumbnail') ?>
				</div>
				
				<?php /* Byline: */ ?>
				<span class="byline">
					by <a class="author-link" href="<?php exa_the_author_link() ?>" title="<?php echo exa_properize(get_the_author()); ?> Profile">
						   <?php the_author() ?>
					   </a>
				</span> &middot; <span class="meta-time"><?php the_time("M j, Y") ?></span>

				<a class="facebook-button" target="_blank" href="<?php echo exa_facebook_link(); ?>">Share</a>
				<a class="tweet-button" target="_blank" href="<?php echo exa_tweet_link(); ?>">Tweet</a>

			</div>

			<?php 

			if (exa_hero_style() == "standard" && exa_hero_media() != "none") :		
			?>				
			<div class="hero">
			
				<?php the_post_thumbnail('image-post-size'); ?>
				<?php exa_hero_caption(); ?>
	
				<div class="clearfix"></div>
				
			</div>
			
			<?php 
			endif; 
			?>

			<section class="article-text">

				<?php the_content(); ?>

			</section>

		</main>

		<?php if($block->args['layout'] == 'standard') : ?>
		<aside class="sidebar">

			<div class="ad sidebar-thing">
				<?php $OnCampus->place_ad(array('desktop'=>'upper-sidekick')); ?>
			</div>

			<div class="popular-posts sidebar-thing">
				<?php the_widget( "Popular_Post_Widget"); ?>
			</div>
	
			<div class="ad sidebar-thing">
				<?php $OnCampus->place_ad(array('desktop'=>'lower-sidekick')); ?>
			</div>
		
		</aside>
	
		<?php endif; ?>

		<div class="clearfix"></div>

		

	</div><!-- .wrapper -->

</div><!-- .block -->

</article><!-- #post-xx -->

<?php 

exa_block('footnotes');