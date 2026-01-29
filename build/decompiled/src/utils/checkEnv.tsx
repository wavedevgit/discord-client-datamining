// utils/checkEnv.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun1101: for (var _fun1101_ip = 0;;) switch (_fun1101_ip) {
        case 0:
            var0 = global;
            var1 = global;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var4 = null;
            if (!(var4 == var2)) {
                _fun1101_ip = 37;
                continue _fun1101
            }
        case 23:
            var3 = var1.window;
            var2 = {};
            var3.GLOBAL_ENV = var2;
        case 37:
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.API_VERSION;
            var2 = var4 != var2;
            if (var2) {
                _fun1101_ip = 84;
                continue _fun1101
            }
        case 62:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.API_ENDPOINT;
            var2 = var4 != var3;
        case 84:
            if (var2) {
                _fun1101_ip = 109;
                continue _fun1101
            }
        case 87:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.GATEWAY_ENDPOINT;
            var2 = var4 != var3;
        case 109:
            if (var2) {
                _fun1101_ip = 134;
                continue _fun1101
            }
        case 112:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.WEBAPP_ENDPOINT;
            var2 = var4 != var3;
        case 134:
            if (var2) {
                _fun1101_ip = 159;
                continue _fun1101
            }
        case 137:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.CDN_HOST;
            var2 = var4 != var3;
        case 159:
            if (var2) {
                _fun1101_ip = 184;
                continue _fun1101
            }
        case 162:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.ASSET_ENDPOINT;
            var2 = var4 != var3;
        case 184:
            if (var2) {
                _fun1101_ip = 209;
                continue _fun1101
            }
        case 187:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.MEDIA_PROXY_ENDPOINT;
            var2 = var4 != var3;
        case 209:
            if (var2) {
                _fun1101_ip = 234;
                continue _fun1101
            }
        case 212:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.IMAGE_PROXY_ENDPOINTS;
            var2 = var4 != var3;
        case 234:
            if (var2) {
                _fun1101_ip = 259;
                continue _fun1101
            }
        case 237:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.WIDGET_ENDPOINT;
            var2 = var4 != var3;
        case 259:
            if (var2) {
                _fun1101_ip = 284;
                continue _fun1101
            }
        case 262:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.INVITE_HOST;
            var2 = var4 != var3;
        case 284:
            if (var2) {
                _fun1101_ip = 309;
                continue _fun1101
            }
        case 287:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.GUILD_TEMPLATE_HOST;
            var2 = var4 != var3;
        case 309:
            if (var2) {
                _fun1101_ip = 334;
                continue _fun1101
            }
        case 312:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.GIFT_CODE_HOST;
            var2 = var4 != var3;
        case 334:
            if (var2) {
                _fun1101_ip = 359;
                continue _fun1101
            }
        case 337:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.RELEASE_CHANNEL;
            var2 = var4 != var3;
        case 359:
            if (var2) {
                _fun1101_ip = 384;
                continue _fun1101
            }
        case 362:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.DEVELOPERS_ENDPOINT;
            var2 = var4 != var3;
        case 384:
            if (var2) {
                _fun1101_ip = 409;
                continue _fun1101
            }
        case 387:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.MARKETING_ENDPOINT;
            var2 = var4 != var3;
        case 409:
            if (var2) {
                _fun1101_ip = 434;
                continue _fun1101
            }
        case 412:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.NETWORKING_ENDPOINT;
            var2 = var4 != var3;
        case 434:
            if (var2) {
                _fun1101_ip = 459;
                continue _fun1101
            }
        case 437:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.BRAINTREE_KEY;
            var2 = var4 != var3;
        case 459:
            if (var2) {
                _fun1101_ip = 484;
                continue _fun1101
            }
        case 462:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.STRIPE_KEY;
            var2 = var4 != var3;
        case 484:
            if (var2) {
                _fun1101_ip = 509;
                continue _fun1101
            }
        case 487:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.ADYEN_KEY;
            var2 = var4 != var3;
        case 509:
            if (var2) {
                _fun1101_ip = 534;
                continue _fun1101
            }
        case 512:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.PROJECT_ENV;
            var2 = var4 != var3;
        case 534:
            if (var2) {
                _fun1101_ip = 559;
                continue _fun1101
            }
        case 537:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.REMOTE_AUTH_ENDPOINT;
            var2 = var4 != var3;
        case 559:
            if (var2) {
                _fun1101_ip = 584;
                continue _fun1101
            }
        case 562:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.RTC_LATENCY_ENDPOINT;
            var2 = var4 != var3;
        case 584:
            if (var2) {
                _fun1101_ip = 609;
                continue _fun1101
            }
        case 587:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.ACTIVITY_APPLICATION_HOST;
            var2 = var4 != var3;
        case 609:
            if (var2) {
                _fun1101_ip = 634;
                continue _fun1101
            }
        case 612:
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.PUBLIC_PATH;
            var2 = var4 != var3;
        case 634:
            if (var2) {
                _fun1101_ip = 655;
                continue _fun1101
            }
        case 637:
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.MUX_ENV_KEY;
        case 655:
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = '//discord.com/api';
            var3.API_ENDPOINT = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 9;
            var3.API_VERSION = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 'wss://gateway.discord.gg';
            var3.GATEWAY_ENDPOINT = var2;
            var2 = var0.window;
            var2 = var2.GLOBAL_ENV;
            var3 = '//discord.com';
            var2.WEBAPP_ENDPOINT = var3;
            var2 = var0.window;
            var4 = var2.GLOBAL_ENV;
            var2 = 'cdn.discordapp.com';
            var4.CDN_HOST = var2;
            var2 = var0.window;
            var2 = var2.GLOBAL_ENV;
            var2.ASSET_ENDPOINT = var3;
            var2 = var0.window;
            var4 = var2.GLOBAL_ENV;
            var2 = '//media.discordapp.net';
            var4.MEDIA_PROXY_ENDPOINT = var2;
            var2 = var0.window;
            var4 = var2.GLOBAL_ENV;
            var2 = '//images-ext-1.discordapp.net,//images-ext-2.discordapp.net';
            var4.IMAGE_PROXY_ENDPOINTS = var2;
            var2 = var0.window;
            var4 = var2.GLOBAL_ENV;
            var2 = '//discord.com/widget';
            var4.WIDGET_ENDPOINT = var2;
            var2 = var0.window;
            var4 = var2.GLOBAL_ENV;
            var2 = 'discord.gg';
            var4.INVITE_HOST = var2;
            var2 = var0.window;
            var4 = var2.GLOBAL_ENV;
            var2 = 'discord.new';
            var4.GUILD_TEMPLATE_HOST = var2;
            var2 = var0.window;
            var4 = var2.GLOBAL_ENV;
            var2 = 'discord.gift';
            var4.GIFT_CODE_HOST = var2;
            var2 = var0.window;
            var4 = var2.GLOBAL_ENV;
            var2 = 'alpha';
            var4.RELEASE_CHANNEL = var2;
            var2 = var0.window;
            var2 = var2.GLOBAL_ENV;
            var2.DEVELOPERS_ENDPOINT = var3;
            var2 = var0.window;
            var2 = var2.GLOBAL_ENV;
            var2.MARKETING_ENDPOINT = var3;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = '//router.discordapp.net';
            var3.NETWORKING_ENDPOINT = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 'production_ktzp8hfp_49pp2rp4phym7387';
            var3.BRAINTREE_KEY = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 'pk_live_CUQtlpQUF0vufWpnpUmQvcdi';
            var3.STRIPE_KEY = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 'live_E3OQ33V6GVGTXOVQZEAFQJ6DJIDVG6SY';
            var3.ADYEN_KEY = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 'production';
            var3.PROJECT_ENV = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 'wss://remote-auth-gateway.discord.gg';
            var3.REMOTE_AUTH_ENDPOINT = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = {};
            var3.SENTRY_TAGS = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 'https://discordapp.com';
            var3.MIGRATION_SOURCE_ORIGIN = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 'https://discord.com';
            var3.MIGRATION_DESTINATION_ORIGIN = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = '//latency.discord.media/rtc';
            var3.RTC_LATENCY_ENDPOINT = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = 'discordsays.com';
            var3.ACTIVITY_APPLICATION_HOST = var2;
            var2 = var0.window;
            var3 = var2.GLOBAL_ENV;
            var2 = '/assets/';
            var3.PUBLIC_PATH = var2;
            var2 = var0.window;
            var2 = var2.GLOBAL_ENV;
            var1 = var1.process;
            var1 = var1.env;
            var1 = var1.DEV_SESSION_KEY;
            var2.DEV_SESSION_KEY = var1;
            var0 = var0.window;
            var1 = var0.GLOBAL_ENV;
            var0 = '1qd16mdmdjasipqg3irobln4u';
            var1.MUX_ENV_KEY = var0;
            var1 = dependencyMap;
            var0 = 0;
            var2 = var1[var0];
            var1 = require;
            var0 = undefined;
            var3 = var1.bind(var0)(var2);
            var2 = var3.fileFinishedImporting;
            var1 = 'utils/checkEnv.tsx';
            var1 = var2.bind(var3)(var1);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);