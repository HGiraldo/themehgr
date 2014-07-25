<?php

/**
 * Implements hook_preprocess_HOOK().
 * Size set using CSS
 */
function sub_bootstrap_preprocess_textfield(&$vars) {
  $vars['element']['#size'] = NULL;
  // Agreagar Placeholders.
  if (!isset($vars['element']['#attributes']['placeholder']) && isset($vars['element']['#title'])) {
    $vars['element']['#attributes']['placeholder'] = $vars['element']['#title'];
  }
}

/**
 * Implements hook_preprocess_HOOK().
 * Size set using CSS
 */
function sub_bootstrap_preprocess_password(&$vars) {
  $vars['element']['#size'] = NULL;
}

/**
 * Implements hook_process_HOOK().
 */
function sub_bootstrap_preprocess_select(&$vars) {
  if ($vars['element']['#required'] == TRUE && isset($vars['element']['#options'][''])) {
    $vars['element']['#options'][''] = '- ' . $vars['element']['#title'] . ' -';
  }
}

/**
 * Implements hook_process_HOOK().
 */
function sub_bootstrap_preprocess_webform_email(&$vars) {
  if (!isset($vars['element']['#attributes']['placeholder']) && isset($vars['element']['#title'])) {
    $vars['element']['#attributes']['placeholder'] = $vars['element']['#title'];
  }
}

/**
 * Implements hook_process_HOOK().
 */
function sub_bootstrap_preprocess_textarea(&$vars) {
  // Agreagar Placeholders.
  if (!isset($vars['element']['#attributes']['placeholder']) && isset($vars['element']['#title'])) {
    $vars['element']['#attributes']['placeholder'] = $vars['element']['#title'];
  }
}

/**
 * Implements hook_preprocess_HOOK().
 * Size set using CSS
 */
function sub_bootstrap_preprocess_file(&$vars) {
  $vars['element']['#size'] = NULL;
}
/**
 * Implements theme_HOOK().
 */
function sub_bootstrap_select($vars) {
  $original = theme_select($vars);
  $classes = 'sub_bootstrap-select-wrapper';
  $classes .= isset($vars['element']['#disabled']) && $vars['element']['#disabled'] ? ' sub_bootstrap-select-disabled' : '';
  return '<span class="' . $classes . '">' . $original . '</span>';
}
/**
 * Implements theme_HOOK().
 */
function sub_bootstrap_file($vars) {
  $original = theme_file($vars);

  return '<span class="sub_bootstrap-file-wrapper">' . $original . '</span>';
}
/**
* Implements theme_HOOK()
*/
function sub_bootstrap_menu_link(array $variables) {
  // Add menu-item class to li
  $variables['element']['#attributes']['class'][] = 'menu-item';
  $variables['element']['#attributes']['class'][] = 'link-' . drupal_html_class($variables['element']['#title']);
  return theme_menu_link($variables);
}



/**
 * Implements THEME_image_style().
 */
function sub_bootstrap_image_style($variables) {
  // Determine the dimensions of the styled image.
  $dimensions = array(
    'width' => $variables['width'],
    'height' => $variables['height'],
  );

  image_style_transform_dimensions($variables['style_name'], $dimensions);

  $variables['width'] = $dimensions['width'];
  $variables['height'] = $dimensions['height'];

  $variables['attributes'] = array(
    'class' => array(
      $variables['style_name'],
      'img-responsive',
    ),
  );

  // Determine the url for the styled image.
  $variables['path'] = image_style_url($variables['style_name'], $variables['path']);
  return theme('image', $variables);
}
