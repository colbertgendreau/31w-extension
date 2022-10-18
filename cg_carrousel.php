<?php

/**
 * package Carrousel
 * version 1.0.0
 */
/*
Plugin Name: CG_carrousel
*/

// filemtime()  // retourne en milliseconde le temps de la dernière sauvegarde
// plugin_dir_path() // retourne le chemin du répertoire du plugin
// __FILE__ // le fichier en train de s'exécuter
// wp_enqueue_style() // Intègre le link:css dans la page
// wp_enqueue_script() // intègre le script dans la page
// wp_enqueue_scripts() // le hook

function cgc_enqueue() {

    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style("cgc_style_carrousel", 
                    plugin_dir_url(__FILE__) . "style.css",
                    array(),
                    $version_css,
                    false);

    wp_enqueue_script("cgc_js_carrousel", 
                    plugin_dir_url(__FILE__) . "js/carrousel.js",
                    array(),
                    $version_js,
                    true);
}

add_action('wp_enqueue_scripts', 'cgc_enqueue');

function genere_boite() {

    $contenu = "
                <button class='btn_modale'>boite modale</button>
                <div class='carrousel'>
                    <button class='btn_fermer'>X</button>
                    <figure class='carrousel_figure'></figure>
                    <form class='carrousel_form'></form>
                </div>
                ";


    return $contenu;
}
add_shortcode('cg_carrousel', 'genere_boite');
