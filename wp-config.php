<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'QY!HfxFJnNfQ^e5XCBx3QVk]POI]~I{wVh~_1g|.sxuM$R;(Z+-f_OIG9?<itF3z' );
define( 'SECURE_AUTH_KEY',  'd%2_J*;Al;fTX7}]=u[*KQ&>HJKMI?D}^at-gKN98V( 9}og~xBibckPb=pE!vSs' );
define( 'LOGGED_IN_KEY',    '7)YfwNQdxw<85MoPB7*tr[?n,6du&X~^ArOH<BQ #>bF<pB#jxuIm/ehmh1Z6=J7' );
define( 'NONCE_KEY',        'LPE.vC0O55`)Sr73oK|Qf`cuWGlEC|nP|](|GY&?4EU=62XnX1cK?k7<{G]8CyU9' );
define( 'AUTH_SALT',        'y~rl~ ^+OW}/ (<!D-!H[S)C`|$|Y]VwqxWwO$ 6i15|DAhE,6?DPj}M>wg|dL}_' );
define( 'SECURE_AUTH_SALT', '@Oe?YfrHUJ(((qC/YuMx|DY-;?6#=Ei1qtCPr6pYParAE,#(J[z<S7pmbVO5|v1R' );
define( 'LOGGED_IN_SALT',   'hZeJ,r{?ncSk@lt2tp*h/Q+2;kynO*/ZCbOAA$G5OJYTo3-A$tMZY|fqj(?R.[rz' );
define( 'NONCE_SALT',       '}0frk&O0$;[6V:)d2AzL3d]vh{-aE]WbT9=zFGgvYEA<8d`]YO2|T?*qhM:^}F7]' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
