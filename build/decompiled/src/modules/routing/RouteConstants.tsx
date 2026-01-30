// modules/routing/RouteConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7896: for (var _fun7896_ip = 0;;) switch (_fun7896_ip) {
        case 0:
            var9 = require;
            var2 = exports;
            var10 = dependencyMap;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = 0;
            var3 = var10[var0];
            var0 = undefined;
            var3 = var9.bind(var0)(var3);
            var16 = var3.CONFERENCE_MODE_ENABLED;
            var3 = 1;
            var3 = var10[var3];
            var3 = var9.bind(var0)(var3);
            var3 = var3.GlobalDiscoveryAppsSections;
            var _closure1_slot0 = var3;
            var3 = 2;
            var3 = var10[var3];
            var3 = var9.bind(var0)(var3);
            var3 = var3.ApplicationDirectoryProfileSections;
            var _closure1_slot1 = var3;
            var3 = new Array(4);
            var7 = '@me';
            var3[0] = var7;
            var6 = '@favorites';
            var3[1] = var6;
            var4 = '@guilds-empty-nux';
            var3[2] = var4;
            var5 = '@inbox';
            var3[3] = var5;
            var11 = var1.Object;
            var8 = var11.freeze;
            var1 = {
                'INDEX': '/',
                'APP': '/app',
                'APP_WITH_INVITE_AND_GUILD_ONBOARDING': null,
                'APP_WITH_GIFT_CODE': null,
                'ACTIVITY': '/activity',
                'ACTIVITIES': '/activities',
                'ACTIVITIES_HAPPENING_NOW': '/activities/happening-now',
                'ACTIVITY_DETAILS': null,
                'APPLICATION_LIBRARY': '/library',
                'APPLICATION_LIBRARY_INVENTORY': '/library/inventory'
            };
            var13 = function(arg0) { // Original name: APP_WITH_INVITE_AND_GUILD_ONBOARDING, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/app/invite-with-guild-onboarding/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.APP_WITH_INVITE_AND_GUILD_ONBOARDING = var13;
            var13 = function(arg0) { // Original name: APP_WITH_GIFT_CODE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/app/gifts/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.APP_WITH_GIFT_CODE = var13;
            var13 = function(arg0) { // Original name: ACTIVITY_DETAILS, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/activities/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.ACTIVITY_DETAILS = var13;
            var13 = function(arg0, arg1) { // Original name: APPLICATION_LIBRARY_ACTION, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '/library/';
                var2 = arg0;
                var1 = '/';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1.APPLICATION_LIBRARY_ACTION = var13;
            var13 = '/library/settings';
            var1.APPLICATION_LIBRARY_SETTINGS = var13;
            var13 = '/store';
            var1.APPLICATION_STORE = var13;
            var14 = function(arg0, arg1) { // Original name: APPLICATION_STORE_LISTING_SKU, environment: var12
                _fun7901: for (var _fun7901_ip = 0;;) switch (_fun7901_ip) {
                    case 0:
                        var2 = arg1;
                        var0 = null;
                        var0 = var0 != var2;
                        var3 = '';
                        if (!var0) {
                            _fun7901_ip = 38;
                            continue _fun7901
                        }
                    case 16:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '/';
                        var3 = var1.bind(var0)(var2);
                    case 38:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '/store/skus/';
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                        return var0;
                }
            };
            var1.APPLICATION_STORE_LISTING_SKU = var14;
            var14 = function(arg0, arg1) { // Original name: APPLICATION_STORE_LISTING_APPLICATION, environment: var12
                _fun7902: for (var _fun7902_ip = 0;;) switch (_fun7902_ip) {
                    case 0:
                        var2 = arg1;
                        var0 = null;
                        var0 = var0 != var2;
                        var3 = '';
                        if (!var0) {
                            _fun7902_ip = 38;
                            continue _fun7902
                        }
                    case 16:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '/';
                        var3 = var1.bind(var0)(var2);
                    case 38:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '/store/applications/';
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                        return var0;
                }
            };
            var1.APPLICATION_STORE_LISTING_APPLICATION = var14;
            var14 = '/billing';
            var1.BILLING_PREFIX = var14;
            var14 = '/billing/login/handoff';
            var1.BILLING_LOGIN_HANDOFF = var14;
            var14 = '/billing/premium/subscribe';
            var1.BILLING_PREMIUM_SUBSCRIBE = var14;
            var14 = '/billing/payment-sources/create';
            var1.BILLING_PAYMENT_SOURCES_CREATE = var14;
            var14 = '/billing/premium/switch-plan';
            var1.BILLING_PREMIUM_SWITCH_PLAN = var14;
            var14 = '/billing/guild-subscriptions/purchase';
            var1.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE = var14;
            var14 = '/billing/payments';
            var1.BILLING_PAYMENTS = var14;
            var14 = function(arg0) { // Original name: BILLING_PROMOTION_REDEMPTION, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/billing/promotions/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.BILLING_PROMOTION_REDEMPTION = var14;
            var14 = '/billing/promotions';
            var1.BILLING_PROMOTION_REDEMPTION_GENERIC = var14;
            var14 = function(arg0, arg1) { // Original name: BILLING_PROMOTION_DIRECT_FULFILLMENT_REDEMPTION, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '/billing/partner-promotions/';
                var2 = arg0;
                var1 = '/';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1.BILLING_PROMOTION_DIRECT_FULFILLMENT_REDEMPTION = var14;
            var14 = '/notifications';
            var1.NOTIFICATIONS = var14;
            var14 = '/channels/@me';
            var1.FRIENDS = var14;
            var1.ME = var14;
            var14 = '/message-requests';
            var1.MESSAGE_REQUESTS = var14;
            var14 = function(arg0, arg1, arg2) { // Original name: CHANNEL, environment: var12
                _fun7905: for (var _fun7905_ip = 0;;) switch (_fun7905_ip) {
                    case 0:
                        var3 = arg0;
                        var7 = arg1;
                        var5 = arg2;
                        var1 = null;
                        if (!(var1 != var7)) {
                            _fun7905_ip = 59;
                            continue _fun7905
                        }
                    case 15:
                        var6 = var3;
                        if (var3) {
                            _fun7905_ip = 27;
                            continue _fun7905
                        }
                    case 21:
                        var6 = '@me';
                    case 27:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var4 = var0.concat;
                        var2 = '/channels/';
                        var0 = '/';
                        var4 = var4.bind(var2)(var6, var0, var7);
                        _fun7905_ip = 92;
                        continue _fun7905;
                    case 59:
                        if (var3) {
                            _fun7905_ip = 68;
                            continue _fun7905
                        }
                    case 62:
                        var3 = '@me';
                    case 68:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var0 = '/channels/';
                        var4 = var2.bind(var0)(var3);
                    case 92:
                        var0 = var4;
                        if (!(var1 != var5)) {
                            _fun7905_ip = 127;
                            continue _fun7905
                        }
                    case 99:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var2 = '';
                        var1 = '/';
                        var0 = var3.bind(var2)(var4, var1, var5);
                    case 127:
                        return var0;
                }
            };
            var1.CHANNEL = var14;
            var14 = function(arg0, arg1, arg2, arg3) { // Original name: CHANNEL_THREAD_VIEW, environment: var12
                _fun7906: for (var _fun7906_ip = 0;;) switch (_fun7906_ip) {
                    case 0:
                        var5 = arg3;
                        var1 = global;
                        var0 = var1.HermesInternal;
                        var8 = var0.concat;
                        var14 = '/channels/';
                        var13 = arg0;
                        var4 = '/';
                        var11 = arg1;
                        var10 = '/threads/';
                        var9 = arg2;
                        var12 = var4;
                        var3 = var14[var8](var13, var12, var11, var10, var9, var8);
                        var2 = null;
                        var0 = var3;
                        if (!(var2 != var5)) {
                            _fun7906_ip = 79;
                            continue _fun7906
                        }
                    case 57:
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = '';
                        var0 = var2.bind(var1)(var3, var4, var5);
                    case 79:
                        return var0;
                }
            };
            var1.CHANNEL_THREAD_VIEW = var14;
            var14 = function(arg0, arg1, arg2) { // Original name: VOICE_CHAT_CHANNEL_PARTIAL, environment: var12
                _fun7907: for (var _fun7907_ip = 0;;) switch (_fun7907_ip) {
                    case 0:
                        var5 = arg2;
                        var1 = global;
                        var0 = var1.HermesInternal;
                        var6 = var0.concat;
                        var3 = '/voice/';
                        var2 = arg0;
                        var4 = '/';
                        var0 = arg1;
                        var3 = var6.bind(var3)(var2, var4, var0);
                        var2 = null;
                        var0 = var3;
                        if (!(var2 != var5)) {
                            _fun7907_ip = 70;
                            continue _fun7907
                        }
                    case 48:
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = '';
                        var0 = var2.bind(var1)(var3, var4, var5);
                    case 70:
                        return var0;
                }
            };
            var1.VOICE_CHAT_CHANNEL_PARTIAL = var14;
            var14 = '/login';
            var1.LOGIN = var14;
            var15 = '/login/handoff';
            var1.LOGIN_HANDOFF = var15;
            var15 = '/login/one-time';
            var1.LOGIN_ONE_TIME = var15;
            var15 = '/register';
            var1.REGISTER = var15;
            if (!var16) {
                _fun7896_ip = 483;
                continue _fun7896
            }
        case 480:
            var14 = var15;
        case 483:
            var1.DEFAULT_LOGGED_OUT = var14;
            var14 = function(arg0) { // Original name: INVITE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/invite/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.INVITE = var14;
            var14 = function(arg0) { // Original name: INVITE_LOGIN, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/invite/';
                var1 = arg0;
                var0 = '/login';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.INVITE_LOGIN = var14;
            var14 = function(arg0) { // Original name: INVITE_REGISTER, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/invite/';
                var1 = arg0;
                var0 = '/register';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.INVITE_REGISTER = var14;
            var14 = function(arg0) { // Original name: INVITE_PROXY, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/invite-proxy/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.INVITE_PROXY = var14;
            var14 = function(arg0) { // Original name: GUILD_TEMPLATE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/template/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.GUILD_TEMPLATE = var14;
            var14 = function(arg0) { // Original name: GUILD_TEMPLATE_LOGIN, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/template/';
                var1 = arg0;
                var0 = '/login';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.GUILD_TEMPLATE_LOGIN = var14;
            var14 = function(arg0) { // Original name: GIFT_CODE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/gifts/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.GIFT_CODE = var14;
            var14 = function(arg0) { // Original name: GIFT_CODE_LOGIN, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/gifts/';
                var1 = arg0;
                var0 = '/login';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.GIFT_CODE_LOGIN = var14;
            var14 = function(arg0, arg1) { // Original name: WELCOME, environment: var12
                _fun7916: for (var _fun7916_ip = 0;;) switch (_fun7916_ip) {
                    case 0:
                        var1 = arg0;
                        var5 = arg1;
                        var2 = null;
                        if (!(var2 == var5)) {
                            _fun7916_ip = 54;
                            continue _fun7916
                        }
                    case 12:
                        var0 = var2 != var1;
                        var4 = '@me';
                        if (!var0) {
                            _fun7916_ip = 28;
                            continue _fun7916
                        }
                    case 25:
                        var4 = var1;
                    case 28:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var0 = '/welcome/';
                        var0 = var3.bind(var0)(var4);
                        _fun7916_ip = 100;
                        continue _fun7916;
                    case 54:
                        var2 = var2 != var1;
                        var4 = '@me';
                        if (!var2) {
                            _fun7916_ip = 70;
                            continue _fun7916
                        }
                    case 67:
                        var4 = var1;
                    case 70:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var2 = '/welcome/';
                        var1 = '/';
                        var0 = var3.bind(var2)(var4, var1, var5);
                    case 100:
                        return var0;
                }
            };
            var1.WELCOME = var14;
            var14 = '/verify';
            var1.VERIFY = var14;
            var14 = '/verify-request';
            var1.VERIFY_REQUEST = var14;
            var14 = '/reset';
            var1.RESET = var14;
            var14 = '/apps';
            var1.APPS = var14;
            var14 = '/activate';
            var1.ACTIVATE = var14;
            var14 = '/activate/handoff';
            var1.ACTIVATE_HANDOFF = var14;
            var14 = function(arg0) { // Original name: CONNECTION_LINK, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/connections/';
                var1 = arg0;
                var0 = '/link';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.CONNECTION_LINK = var14;
            var14 = function(arg0) { // Original name: CONNECTION_LINK_AUTHORIZE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/connections/';
                var1 = arg0;
                var0 = '/link-authorize';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.CONNECTION_LINK_AUTHORIZE = var14;
            var14 = function(arg0) { // Original name: CONNECTIONS_SUCCESS, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/connections/';
                var1 = arg0;
                var0 = '/success';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.CONNECTIONS_SUCCESS = var14;
            var14 = function(arg0) { // Original name: CONNECTIONS_ERROR, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/connections/';
                var1 = arg0;
                var0 = '/error';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.CONNECTIONS_ERROR = var14;
            var14 = function(arg0) { // Original name: CONNECTIONS, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/connections/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.CONNECTIONS = var14;
            var14 = function(arg0) { // Original name: CONNECTIONS_AUTHORIZE_CONTINUE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/connections/';
                var1 = arg0;
                var0 = '/authorize-continue';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.CONNECTIONS_AUTHORIZE_CONTINUE = var14;
            var14 = '/connect/authorize';
            var1.CONNECT_AUTHORIZE = var14;
            var14 = '/oauth2/authorize';
            var1.OAUTH2_AUTHORIZE = var14;
            var14 = '/oauth2/authorized';
            var1.OAUTH2_AUTHORIZED = var14;
            var14 = '/oauth2/error';
            var1.OAUTH2_ERROR = var14;
            var14 = function(arg0, arg1) { // Original name: SETTINGS, environment: var12
                _fun7923: for (var _fun7923_ip = 0;;) switch (_fun7923_ip) {
                    case 0:
                        var2 = arg1;
                        var0 = null;
                        var0 = var0 != var2;
                        var3 = '';
                        if (!var0) {
                            _fun7923_ip = 38;
                            continue _fun7923
                        }
                    case 16:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '/';
                        var3 = var1.bind(var0)(var2);
                    case 38:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '/settings/';
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                        return var0;
                }
            };
            var1.SETTINGS = var14;
            var14 = '/snowsgiving';
            var1.SNOWSGIVING = var14;
            var14 = function(arg0, arg1) { // Original name: PLAYGROUND, environment: var12
                _fun7924: for (var _fun7924_ip = 0;;) switch (_fun7924_ip) {
                    case 0:
                        var7 = arg0;
                        var5 = arg1;
                        var6 = null;
                        var1 = var6 != var7;
                        var3 = '/playground';
                        var0 = var3;
                        if (!var1) {
                            _fun7924_ip = 80;
                            continue _fun7924
                        }
                    case 24:
                        var2 = global;
                        var1 = var2.HermesInternal;
                        var1 = var1.concat;
                        var4 = '/';
                        var1 = var1.bind(var4)(var7);
                        var3 = var3 + var1;
                        var1 = var3;
                        if (!(var6 != var5)) {
                            _fun7924_ip = 77;
                            continue _fun7924
                        }
                    case 57:
                        var2 = var2.HermesInternal;
                        var2 = var2.concat;
                        var2 = var2.bind(var4)(var5);
                        var1 = var3 + var2;
                    case 77:
                        var0 = var1;
                    case 80:
                        return var0;
                }
            };
            var1.PLAYGROUND = var14;
            var14 = function(arg0) { // Original name: CHANGELOGS, environment: var12
                _fun7925: for (var _fun7925_ip = 0;;) switch (_fun7925_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        var1 = '';
                        if (!var0) {
                            _fun7925_ip = 38;
                            continue _fun7925
                        }
                    case 16:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var0 = '/';
                        var1 = var2.bind(var0)(var3);
                    case 38:
                        var0 = '/settings/changelogs';
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var1.CHANGELOGS = var14;
            var14 = function(arg0) { // Original name: USERS, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/users/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.USERS = var14;
            var14 = '/guilds/create';
            var1.GUILD_CREATE = var14;
            var14 = '/disable-email-notifications';
            var1.DISABLE_EMAIL_NOTIFICATIONS = var14;
            var14 = '/disable-server-highlight-notifications';
            var1.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS = var14;
            var14 = function(arg0) { // Original name: USER_GUILD_NOTIFICATION_SETTINGS, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/guilds/';
                var1 = arg0;
                var0 = '/notification-settings';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.USER_GUILD_NOTIFICATION_SETTINGS = var14;
            var14 = '/authorize-ip';
            var1.AUTHORIZE_IP = var14;
            var14 = '/reject-ip';
            var1.REJECT_IP = var14;
            var14 = '/reject-mfa';
            var1.REJECT_MFA = var14;
            var14 = '/authorize-payment';
            var1.AUTHORIZE_PAYMENT = var14;
            var14 = '/handoff';
            var1.HANDOFF = var14;
            var14 = '/domain-migration';
            var1.DOMAIN_MIGRATION = var14;
            var14 = '/connections/xbox/intro';
            var1.XBOX_EDU = var14;
            var14 = '/connections/xbox/pin';
            var1.XBOX_PIN = var14;
            var14 = '/download-qr-code';
            var1.DOWNLOAD_QR_CODE_REDIRECT = var14;
            var14 = '/billing/popup-bridge/callback';
            var1.BILLING_POPUP_BRIDGE_CALLBACK = var14;
            var14 = '/oauth2/allowlist/accept';
            var1.OAUTH2_WHITELIST_ACCEPT = var14;
            var14 = '/guild-discovery';
            var1.GUILD_DISCOVERY = var14;
            var14 = '/discovery';
            var1.GLOBAL_DISCOVERY = var14;
            var14 = '/discovery/quests';
            var1.QUEST_HOME = var14;
            var14 = '/quest-home';
            var1.QUEST_HOME_V2 = var14;
            var14 = '/discovery/servers';
            var1.GLOBAL_DISCOVERY_SERVERS = var14;
            var14 = '/discovery/applications';
            var1.GLOBAL_DISCOVERY_APPS = var14;
            var14 = function(arg0) { // Original name: GLOBAL_DISCOVERY_APPS_CATEGORY, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/discovery/applications/categories/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.GLOBAL_DISCOVERY_APPS_CATEGORY = var14;
            var14 = function(arg0) { // Original name: GLOBAL_DISCOVERY_APPS_PROFILE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/discovery/applications/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.GLOBAL_DISCOVERY_APPS_PROFILE = var14;
            var14 = function(arg0, arg1) { // Original name: GLOBAL_DISCOVERY_APPS_PROFILE_SECTION, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '/discovery/applications/';
                var2 = arg0;
                var1 = '/';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION = var14;
            var14 = function(arg0, arg1) { // Original name: GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU, environment: var12
                var0 = _closure1_slot0;
                var8 = var0.STORE;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var11 = '/discovery/applications/';
                var10 = arg0;
                var1 = '/';
                var6 = arg1;
                var9 = var1;
                var7 = var1;
                var0 = var11[var4](var10, var9, var8, var7, var6, var5);
                return var0;
            };
            var1.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU = var14;
            var14 = '/discovery/applications/search';
            var1.GLOBAL_DISCOVERY_APPS_SEARCH = var14;
            var14 = function(arg0) { // Original name: GUILD_MEMBER_VERIFICATION, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/member-verification/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.GUILD_MEMBER_VERIFICATION = var14;
            var14 = function(arg0, arg1) { // Original name: GUILD_MEMBER_VERIFICATION_FOR_HUB, environment: var12
                _fun7933: for (var _fun7933_ip = 0;;) switch (_fun7933_ip) {
                    case 0:
                        var2 = arg1;
                        var0 = null;
                        var0 = var0 != var2;
                        var3 = '';
                        if (!var0) {
                            _fun7933_ip = 38;
                            continue _fun7933
                        }
                    case 16:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '/';
                        var3 = var1.bind(var0)(var2);
                    case 38:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '/member-verification-for-hub/';
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                        return var0;
                }
            };
            var1.GUILD_MEMBER_VERIFICATION_FOR_HUB = var14;
            var14 = '/popout';
            var1.POPOUT_WINDOW = var14;
            var14 = function(arg0, arg1) { // Original name: UPCOMING_STAGES, environment: var12
                _fun7934: for (var _fun7934_ip = 0;;) switch (_fun7934_ip) {
                    case 0:
                        var2 = arg1;
                        var0 = null;
                        var0 = var0 != var2;
                        var3 = '';
                        if (!var0) {
                            _fun7934_ip = 38;
                            continue _fun7934
                        }
                    case 16:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '/';
                        var3 = var1.bind(var0)(var2);
                    case 38:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '/guild-stages/';
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                        return var0;
                }
            };
            var1.UPCOMING_STAGES = var14;
            var14 = '/verify-hub-email';
            var1.VERIFY_HUB_EMAIL = var14;
            var14 = '/open-app-from-email';
            var1.OPEN_APP_FROM_EMAIL = var14;
            var14 = '/billing/premium/manage';
            var1.BILLING_MANAGE_SUBSCRIPTION = var14;
            var14 = function(arg0, arg1) { // Original name: BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK, environment: var12
                _fun7935: for (var _fun7935_ip = 0;;) switch (_fun7935_ip) {
                    case 0:
                        var2 = arg1;
                        var0 = null;
                        var0 = var0 != var2;
                        var3 = '';
                        if (!var0) {
                            _fun7935_ip = 40;
                            continue _fun7935
                        }
                    case 16:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '&load_id=';
                        var3 = var1.bind(var0)(var2);
                    case 40:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '/billing/premium/manage?deep_link_type=';
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                        return var0;
                }
            };
            var1.BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK = var14;
            var14 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: BILLING_STANDALONE_CHECKOUT_PAGE, environment: var12
                _fun7936: for (var _fun7936_ip = 0;;) switch (_fun7936_ip) {
                    case 0:
                        var5 = arg3;
                        var4 = arg4;
                        var2 = arg5;
                        var0 = null;
                        var1 = var0 != var5;
                        var9 = '';
                        var8 = var9;
                        if (!var1) {
                            _fun7936_ip = 49;
                            continue _fun7936
                        }
                    case 25:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = '&payment_method_type=';
                        var8 = var3.bind(var1)(var5);
                    case 49:
                        var1 = var0 != var4;
                        var7 = var9;
                        if (!var1) {
                            _fun7936_ip = 83;
                            continue _fun7936
                        }
                    case 59:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = '&deep_link_type=';
                        var7 = var3.bind(var1)(var4);
                    case 83:
                        var0 = var0 != var2;
                        if (!var0) {
                            _fun7936_ip = 114;
                            continue _fun7936
                        }
                    case 90:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '&use_preset_offer=';
                        var9 = var1.bind(var0)(var2);
                    case 114:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var6 = var0.concat;
                        var18 = '/billing/premium/subscribe?plan_id=';
                        var17 = arg0;
                        var16 = '&gift=';
                        var15 = arg1;
                        var14 = '&load_id=';
                        var13 = arg2;
                        var12 = var8;
                        var11 = var7;
                        var10 = var9;
                        var0 = var18[var6](var17, var16, var15, var14, var13, var12, var11, var10, var9);
                        return var0;
                }
            };
            var1.BILLING_STANDALONE_CHECKOUT_PAGE = var14;
            var14 = function(arg0, arg1, arg2) { // Original name: BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE, environment: var12
                _fun7937: for (var _fun7937_ip = 0;;) switch (_fun7937_ip) {
                    case 0:
                        var6 = arg1;
                        var2 = arg2;
                        var0 = null;
                        var1 = var0 != var6;
                        var4 = '';
                        var3 = var4;
                        if (!var1) {
                            _fun7937_ip = 46;
                            continue _fun7937
                        }
                    case 22:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var1 = '&deep_link_type=';
                        var3 = var5.bind(var1)(var6);
                    case 46:
                        var0 = var0 != var2;
                        if (!var0) {
                            _fun7937_ip = 77;
                            continue _fun7937
                        }
                    case 53:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '&load_id=';
                        var4 = var1.bind(var0)(var2);
                    case 77:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '/billing/guild-subscriptions/purchase?guild_id=';
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3, var4);
                        return var0;
                }
            };
            var1.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE = var14;
            var14 = function(arg0) { // Original name: GUILD_BOOSTING_MARKETING, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/guilds/';
                var1 = arg0;
                var0 = '/premium-guild-subscriptions';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.GUILD_BOOSTING_MARKETING = var14;
            var14 = function(arg0, arg1, arg2) { // Original name: GUILD_SETTINGS, environment: var12
                _fun7939: for (var _fun7939_ip = 0;;) switch (_fun7939_ip) {
                    case 0:
                        var3 = arg1;
                        var5 = arg2;
                        var2 = null;
                        var0 = var2 != var3;
                        var4 = '';
                        var8 = var4;
                        if (!var0) {
                            _fun7939_ip = 44;
                            continue _fun7939
                        }
                    case 22:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '/';
                        var8 = var1.bind(var0)(var3);
                    case 44:
                        var1 = global;
                        var0 = var1.HermesInternal;
                        var7 = var0.concat;
                        var6 = '/guilds/';
                        var3 = arg0;
                        var0 = '/settings';
                        var3 = var7.bind(var6)(var3, var0, var8);
                        var0 = var3;
                        if (!(var2 != var5)) {
                            _fun7939_ip = 108;
                            continue _fun7939
                        }
                    case 86:
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = '/';
                        var0 = var2.bind(var4)(var3, var1, var5);
                    case 108:
                        return var0;
                }
            };
            var1.GUILD_SETTINGS = var14;
            var14 = function(arg0, arg1, arg2) { // Original name: PICK_GUILD_SETTINGS, environment: var12
                _fun7940: for (var _fun7940_ip = 0;;) switch (_fun7940_ip) {
                    case 0:
                        var6 = arg0;
                        var7 = arg1;
                        var5 = arg2;
                        var0 = null;
                        var1 = var0 != var6;
                        var3 = '';
                        var2 = var3;
                        if (!var1) {
                            _fun7940_ip = 47;
                            continue _fun7940
                        }
                    case 25:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var1 = '/';
                        var2 = var4.bind(var1)(var6);
                    case 47:
                        var1 = '/guilds/settings';
                        var6 = var1 + var2;
                        var2 = var6;
                        if (!(var0 != var7)) {
                            _fun7940_ip = 88;
                            continue _fun7940
                        }
                    case 64:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var1 = '/';
                        var2 = var4.bind(var3)(var6, var1, var7);
                    case 88:
                        var0 = var0 != var5;
                        var1 = var3;
                        if (!var0) {
                            _fun7940_ip = 122;
                            continue _fun7940
                        }
                    case 98:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var4 = var0.concat;
                        var0 = '?feature=';
                        var1 = var4.bind(var0)(var5);
                    case 122:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var0 = var0.concat;
                        var0 = var0.bind(var3)(var2, var1);
                        return var0;
                }
            };
            var1.PICK_GUILD_SETTINGS = var14;
            var14 = function(arg0, arg1, arg2) { // Original name: GUILD_EVENT_DETAILS, environment: var12
                _fun7941: for (var _fun7941_ip = 0;;) switch (_fun7941_ip) {
                    case 0:
                        var4 = arg2;
                        var2 = global;
                        var0 = var2.HermesInternal;
                        var6 = var0.concat;
                        var5 = '/events/';
                        var1 = arg0;
                        var3 = '/';
                        var0 = arg1;
                        var1 = var6.bind(var5)(var1, var3, var0);
                        var0 = null;
                        var5 = var0 != var4;
                        var0 = '';
                        if (!var5) {
                            _fun7941_ip = 68;
                            continue _fun7941
                        }
                    case 52:
                        var2 = var2.HermesInternal;
                        var2 = var2.concat;
                        var0 = var2.bind(var3)(var4);
                    case 68:
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var1.GUILD_EVENT_DETAILS = var14;
            var14 = function(arg0) { // Original name: FEATURE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/feature/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.FEATURE = var14;
            var14 = function(arg0, arg1) { // Original name: GUILD_FEATURE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '/feature/';
                var2 = arg0;
                var1 = '/';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1.GUILD_FEATURE = var14;
            var14 = function(arg0, arg1) { // Original name: GUILD_JOIN_REQUEST, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '/guilds/';
                var2 = arg0;
                var1 = '/requests/';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1.GUILD_JOIN_REQUEST = var14;
            var14 = '/mweb-handoff';
            var1.MOBILE_WEB_HANDOFF = var14;
            var14 = '/application-directory';
            var1.APPLICATION_DIRECTORY = var14;
            var14 = function(arg0) { // Original name: APPLICATION_DIRECTORY_PROFILE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/application-directory/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.APPLICATION_DIRECTORY_PROFILE = var14;
            var14 = function(arg0, arg1) { // Original name: APPLICATION_DIRECTORY_PROFILE_SECTION, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '/application-directory/';
                var2 = arg0;
                var1 = '/';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1.APPLICATION_DIRECTORY_PROFILE_SECTION = var14;
            var14 = function(arg0, arg1) { // Original name: APPLICATION_DIRECTORY_PROFILE_STORE_SKU, environment: var12
                var0 = _closure1_slot1;
                var8 = var0.STORE;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var11 = '/application-directory/';
                var10 = arg0;
                var1 = '/';
                var6 = arg1;
                var9 = var1;
                var7 = var1;
                var0 = var11[var4](var10, var9, var8, var7, var6, var5);
                return var0;
            };
            var1.APPLICATION_DIRECTORY_PROFILE_STORE_SKU = var14;
            var14 = '/application-directory/search';
            var1.APPLICATION_DIRECTORY_SEARCH = var14;
            var14 = '/family-center';
            var1.FAMILY_CENTER = var14;
            var14 = function(arg0) { // Original name: SERVER_SHOP, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/channels/';
                var1 = arg0;
                var0 = '/shop';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.SERVER_SHOP = var14;
            var14 = function(arg0, arg1, arg2, arg3) { // Original name: CHANNELS_GAME_SHOP, environment: var12
                _fun7949: for (var _fun7949_ip = 0;;) switch (_fun7949_ip) {
                    case 0:
                        var0 = arg1;
                        var7 = arg2;
                        var5 = arg3;
                        var2 = global;
                        var1 = var2.HermesInternal;
                        var6 = var1.concat;
                        var4 = '/channels/';
                        var3 = arg0;
                        var1 = '/game-shop';
                        var1 = var6.bind(var4)(var3, var1);
                        var6 = null;
                        var4 = var6 != var0;
                        var3 = 0;
                        if (!var4) {
                            _fun7949_ip = 57;
                            continue _fun7949
                        }
                    case 54:
                        var3 = var0;
                    case 57:
                        var0 = var2.HermesInternal;
                        var0 = var0.concat;
                        var4 = '/';
                        var0 = var0.bind(var4)(var3);
                        var3 = var1 + var0;
                        var0 = var3;
                        if (!(var6 != var7)) {
                            _fun7949_ip = 138;
                            continue _fun7949
                        }
                    case 88:
                        var1 = var2.HermesInternal;
                        var1 = var1.concat;
                        var1 = var1.bind(var4)(var7);
                        var3 = var3 + var1;
                        var1 = var3;
                        if (!(var6 != var5)) {
                            _fun7949_ip = 135;
                            continue _fun7949
                        }
                    case 115:
                        var2 = var2.HermesInternal;
                        var2 = var2.concat;
                        var2 = var2.bind(var4)(var5);
                        var1 = var3 + var2;
                    case 135:
                        var0 = var1;
                    case 138:
                        return var0;
                }
            };
            var1.CHANNELS_GAME_SHOP = var14;
            var14 = function(arg0, arg1, arg2) { // Original name: GAME_SHOP, environment: var12
                _fun7950: for (var _fun7950_ip = 0;;) switch (_fun7950_ip) {
                    case 0:
                        var7 = arg1;
                        var5 = arg2;
                        var2 = global;
                        var0 = var2.HermesInternal;
                        var3 = var0.concat;
                        var1 = '/game-shop/';
                        var0 = arg0;
                        var3 = var3.bind(var1)(var0);
                        var6 = null;
                        var0 = var3;
                        if (!(var6 != var7)) {
                            _fun7950_ip = 96;
                            continue _fun7950
                        }
                    case 42:
                        var1 = var2.HermesInternal;
                        var1 = var1.concat;
                        var4 = '/';
                        var1 = var1.bind(var4)(var7);
                        var3 = var3 + var1;
                        var1 = var3;
                        if (!(var6 != var5)) {
                            _fun7950_ip = 93;
                            continue _fun7950
                        }
                    case 73:
                        var2 = var2.HermesInternal;
                        var2 = var2.concat;
                        var2 = var2.bind(var4)(var5);
                        var1 = var3 + var2;
                    case 93:
                        var0 = var1;
                    case 96:
                        return var0;
                }
            };
            var1.GAME_SHOP = var14;
            var14 = function(arg0, arg1) { // Original name: GUILD_PRODUCT, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '/channels/';
                var2 = arg0;
                var1 = '/shop/';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1.GUILD_PRODUCT = var14;
            var14 = '/report';
            var1.REPORT = var14;
            var14 = '/report-review';
            var1.REPORT_SECOND_LOOK = var14;
            var14 = '/shop';
            var1.COLLECTIBLES_SHOP = var14;
            var14 = function(arg0) { // Original name: COLLECTIBLES_SHOP_WITH_TAB, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/shop?tab=';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.COLLECTIBLES_SHOP_WITH_TAB = var14;
            var14 = function(arg0) { // Original name: COLLECTIBLES_SHOP_PRODUCT_DETAIL, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/shop/product/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.COLLECTIBLES_SHOP_PRODUCT_DETAIL = var14;
            var1.NITRO_HOME = var13;
            var13 = '/account-standing';
            var1.ACCOUNT_STANDING = var13;
            var13 = function(arg0) { // Original name: CHANNEL_SUMMARIES, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/channels/';
                var1 = arg0;
                var0 = '/summaries';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.CHANNEL_SUMMARIES = var13;
            var13 = function(arg0, arg1) { // Original name: CHANNEL_SUMMARY, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '/channels/';
                var2 = arg0;
                var1 = '/summaries/';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1.CHANNEL_SUMMARY = var13;
            var13 = '/users/@me/summaries';
            var1.USER_SUMMARIES = var13;
            var13 = function(arg0) { // Original name: QUESTS, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/quests/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.QUESTS = var13;
            var13 = function(arg0) { // Original name: ACCOUNT_REVERT, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/wasntme/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.ACCOUNT_REVERT = var13;
            var13 = function(arg0) { // Original name: POWERUP_STORE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '/channels/';
                var1 = arg0;
                var0 = '/boosts';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.POWERUP_STORE = var13;
            var13 = '/conference-mode';
            var1.CONFERENCE_MODE = var13;
            var13 = function(arg0, arg1) { // Original name: CONFERENCE_MODE_VOICE, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '/conference-mode/voice/';
                var2 = arg0;
                var1 = '/';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1.CONFERENCE_MODE_VOICE = var13;
            var13 = function(arg0) { // Original name: QUEST_PREVIEW, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/quest-preview/';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.QUEST_PREVIEW = var13;
            var12 = function(arg0) { // Original name: QUEST_PREVIEW_TOOL_2, environment: var12
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '/quest-home?tab=preview_tool&quest_id=';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.QUEST_PREVIEW_TOOL_2 = var12;
            var12 = '/icymi';
            var1.ICYMI = var12;
            var12 = var8.bind(var11)(var1);
            var1 = 3;
            var1 = var10[var1];
            var11 = var9.bind(var0)(var1);
            var8 = var11.wrapPaths;
            var1 = [':', '?', '@'];
            var1 = var8.bind(var11)(var12, var1);
            var8 = 4;
            var8 = var10[var8];
            var10 = var9.bind(var0)(var8);
            var9 = var10.fileFinishedImporting;
            var8 = 'modules/routing/RouteConstants.tsx';
            var8 = var9.bind(var10)(var8);
            var2.ME = var7;
            var2.FAVORITES = var6;
            var2.NOTIFICATIONS_INBOX = var5;
            var2.EMPTY_NUX_SERVER = var4;
            var2.PSEUDO_GUILD_IDS = var3;
            var2.Routes = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [662, 663, 664, 485, 2]);