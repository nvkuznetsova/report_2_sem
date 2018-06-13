<?php
  /*
  Plugin name: Kuznetsova footer plugin
  */
add_action('wp_footer', function($content) {
  $data = json_decode(file_get_contents('https://kodaktor.ru/j/wplink'));
  echo $content.'<div class="site-content-contain"><div id="content" class="site-content"><div class="wrap"><div style="padding: 10px 0 40px 0;">
  <a href="'.$data -> {'alink'} -> {'href'}.'" target="'.$data -> {'alink'} -> {'target'}.'">'.$data -> {'alink'} -> {'textContent'}.'</a></div></div></div></div>';
});
?>
