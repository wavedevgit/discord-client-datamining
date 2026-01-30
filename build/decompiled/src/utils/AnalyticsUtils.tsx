// utils/AnalyticsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8469: for (var _fun8469_ip = 0;;) switch (_fun8469_ip) {
        case 0:
            var13 = require;
            var18 = metroImportDefault;
            var3 = metroImportAll;
            var2 = exports;
            var4 = dependencyMap;
            var _closure1_slot0 = var13;
            var _closure1_slot1 = var18;
            var _closure1_slot2 = var3;
            var _closure1_slot3 = var4;
            var7 = function(arg0) { // Original name: expandLocation, environment: var1
                _fun8470: for (var _fun8470_ip = 0;;) switch (_fun8470_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = 'string';
                        var0 = typeof var2;
                        if (!(var1 !== var0)) {
                            _fun8470_ip = 71;
                            continue _fun8470
                        }
                    case 14:
                        var0 = {};
                        var1 = var2.page;
                        var0.location = var1;
                        var1 = var2.page;
                        var0.location_page = var1;
                        var1 = var2.section;
                        var0.location_section = var1;
                        var1 = var2.object;
                        var0.location_object = var1;
                        var1 = var2.objectType;
                        var0.location_object_type = var1;
                        _fun8470_ip = 80;
                        continue _fun8470;
                    case 71:
                        var1 = {};
                        var1.location = var2;
                        var0 = var1;
                    case 80:
                        return var0;
                }
            };
            var _closure1_slot24 = var7;
            var0 = function(arg0) { // Original name: expandSource, environment: var1
                _fun8471: for (var _fun8471_ip = 0;;) switch (_fun8471_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = 'string';
                        var0 = typeof var2;
                        if (!(var1 !== var0)) {
                            _fun8471_ip = 72;
                            continue _fun8471
                        }
                    case 14:
                        var0 = {};
                        var1 = var2.page;
                        var0.source_page = var1;
                        var1 = var2.section;
                        var0.source_section = var1;
                        var1 = var2.object;
                        var0.source_object = var1;
                        var1 = var2.objectType;
                        var0.source_object_type = var1;
                        var1 = var2.promotionId;
                        var0.source_promotion_id = var1;
                        _fun8471_ip = 81;
                        continue _fun8471;
                    case 72:
                        var1 = {};
                        var1.source = var2;
                        var0 = var1;
                    case 81:
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var6 = function(arg0) { // Original name: expandEventProperties, environment: var1
                _fun8472: for (var _fun8472_ip = 0;;) switch (_fun8472_ip) {
                    case 0:
                        var7 = arg0;
                        var5 = null;
                        if (!(var5 == var7)) {
                            _fun8472_ip = 13;
                            continue _fun8472
                        }
                    case 11:
                        var7 = {};
                    case 13:
                        var _closure2_slot0 = var7;
                        var0 = var7.location;
                        var8 = var7;
                        if (!(var5 != var0)) {
                            _fun8472_ip = 85;
                            continue _fun8472
                        }
                    case 29:
                        var4 = var7.location;
                        var6 = _closure1_slot6;
                        var0 = _closure1_slot4;
                        var3 = undefined;
                        var13 = var6.bind(var3)(var7, var0);
                        var0 = {};
                        var14 = var0;
                        var6 = copyDataProperties(var14, var13);
                        var2 = _closure1_slot24;
                        var13 = var2.bind(var3)(var4);
                        var14 = var0;
                        var2 = copyDataProperties(var14, var13);
                        _closure2_slot0 = var0;
                        var8 = var0;
                    case 85:
                        var2 = var8.source;
                        var0 = var8;
                        if (!(var5 != var2)) {
                            _fun8472_ip = 153;
                            continue _fun8472
                        }
                    case 97:
                        var6 = var8.source;
                        var7 = _closure1_slot6;
                        var2 = _closure1_slot5;
                        var4 = undefined;
                        var13 = var7.bind(var4)(var8, var2);
                        var2 = {};
                        var14 = var2;
                        var7 = copyDataProperties(var14, var13);
                        var3 = _closure1_slot25;
                        var13 = var3.bind(var4)(var6);
                        var14 = var2;
                        var3 = copyDataProperties(var14, var13);
                        _closure2_slot0 = var2;
                        var0 = var2;
                    case 153:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var4 = 12;
                        var3 = var8[var4];
                        var6 = undefined;
                        var9 = var7.bind(var6)(var3);
                        var3 = var9.getCurrentCPUUsagePercent;
                        var3 = var3.bind(var9)();
                        var0.client_performance_cpu = var3;
                        var3 = var8[var4];
                        var9 = var7.bind(var6)(var3);
                        var3 = var9.getCurrentMemoryUsageKB;
                        var3 = var3.bind(var9)();
                        var0.client_performance_memory = var3;
                        var3 = var8[var4];
                        var9 = var7.bind(var6)(var3);
                        var3 = var9.getCPUCoreCount;
                        var3 = var3.bind(var9)();
                        var0.cpu_core_count = var3;
                        var3 = _closure1_slot19;
                        var3 = var3.bind(var6)();
                        var0.accessibility_features = var3;
                        var9 = _closure1_slot0;
                        var3 = 13;
                        var3 = var8[var3];
                        var3 = var9.bind(var6)(var3);
                        var3 = var3.intl;
                        var3 = var3.currentLocale;
                        var0.rendered_locale = var3;
                        var3 = global;
                        var11 = var3.Math;
                        var10 = var11.floor;
                        var12 = var3.performance;
                        var9 = var12.now;
                        var12 = var9.bind(var12)();
                        var9 = _closure1_slot16;
                        var12 = var12 - var9;
                        var9 = _closure1_slot15;
                        var9 = var12 / var9;
                        var9 = var10.bind(var11)(var9);
                        var0.uptime_app = var9;
                        var4 = var8[var4];
                        var6 = var7.bind(var6)(var4);
                        var4 = var6.getProcessUptime;
                        var6 = var4.bind(var6)();
                        if (!(var5 != var6)) {
                            _fun8472_ip = 393;
                            continue _fun8472
                        }
                    case 370:
                        var4 = var3.Math;
                        var3 = var4.floor;
                        var3 = var3.bind(var4)(var6);
                        var0.uptime_process_renderer = var3;
                    case 393:
                        var3 = _closure1_slot14;
                        var7 = var3.utmSource;
                        var6 = var3.utmMedium;
                        var4 = var3.utmCampaign;
                        var3 = var3.utmContent;
                        var8 = var0.utm_source;
                        if (!(var5 != var8)) {
                            _fun8472_ip = 434;
                            continue _fun8472
                        }
                    case 431:
                        var7 = var8;
                    case 434:
                        var0.utm_source = var7;
                        var7 = var0.utm_medium;
                        if (!(var5 != var7)) {
                            _fun8472_ip = 453;
                            continue _fun8472
                        }
                    case 450:
                        var6 = var7;
                    case 453:
                        var0.utm_medium = var6;
                        var6 = var0.utm_campaign;
                        if (!(var5 != var6)) {
                            _fun8472_ip = 472;
                            continue _fun8472
                        }
                    case 469:
                        var4 = var6;
                    case 472:
                        var0.utm_campaign = var4;
                        var4 = var0.utm_content;
                        if (!(var5 != var4)) {
                            _fun8472_ip = 491;
                            continue _fun8472
                        }
                    case 488:
                        var3 = var4;
                    case 491:
                        var0.utm_content = var3;
                        var3 = _closure1_slot17;
                        var0.launch_signature = var3;
                        var3 = _closure1_slot18;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var _closure1_slot26 = var6;
            var5 = function(arg0, arg1) { // Original name: debugLogEvent, environment: var1
                _fun8474: for (var _fun8474_ip = 0;;) switch (_fun8474_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = arguments[2];
                        var0 = undefined;
                        if (!(var1 === var0)) {
                            _fun8474_ip = 14;
                            continue _fun8474
                        }
                    case 12:
                        var1 = false;
                    case 14:
                        var3 = _closure1_slot9;
                        var3 = var3.isLoggingAnalyticsEvents;
                        var3 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var2 = 14;
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.report;
                        var2 = 'Analytics';
                        if (var1) {
                            _fun8474_ip = 70;
                            continue _fun8474
                        }
                    case 62:
                        var1 = var3.bind(var4)(var2, var5);
                        _fun8474_ip = 80;
                        continue _fun8474;
                    case 70:
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var5, var1);
                    case 80:
                        return var0;
                }
            };
            var _closure1_slot27 = var5;
            var0 = ['location'];
            var _closure1_slot4 = var0;
            var0 = ['source'];
            var _closure1_slot5 = var0;
            var8 = global;
            var11 = var8.Object;
            var10 = var11.defineProperty;
            var9 = {};
            var0 = true;
            var9.value = var0;
            var0 = '__esModule';
            var0 = var10.bind(var11)(var2, var0, var9);
            var0 = 0;
            var9 = var4[var0];
            var0 = undefined;
            var9 = var18.bind(var0)(var9);
            var _closure1_slot6 = var9;
            var9 = 1;
            var9 = var4[var9];
            var12 = var3.bind(var0)(var9);
            var9 = 2;
            var9 = var4[var9];
            var9 = var13.bind(var0)(var9);
            var10 = var9.setDebugTrackedData;
            var _closure1_slot7 = var10;
            var9 = var9.getLocation;
            var _closure1_slot8 = var9;
            var9 = 3;
            var9 = var4[var9];
            var9 = var18.bind(var0)(var9);
            var _closure1_slot9 = var9;
            var9 = 4;
            var9 = var4[var9];
            var9 = var13.bind(var0)(var9);
            var11 = var9.AnalyticEvents;
            var10 = var9.AnalyticsObjectTypes;
            var _closure1_slot10 = var10;
            var9 = var9.AnalyticsSections;
            var _closure1_slot11 = var9;
            var9 = 5;
            var9 = var4[var9];
            var9 = var13.bind(var0)(var9);
            var9 = var9.AccessibilityFeatureFlags;
            var _closure1_slot12 = var9;
            var9 = 6;
            var9 = var4[var9];
            var9 = var13.bind(var0)(var9);
            var9 = var9.ApplicationTypes;
            var _closure1_slot13 = var9;
            var10 = var12.createContext;
            var9 = {};
            var14 = {};
            var9.location = var14;
            var10 = var10.bind(var12)(var9);
            var9 = {};
            var _closure1_slot14 = var9;
            var17 = 1000;
            var _closure1_slot15 = var17;
            var9 = var8.performance;
            var8 = var9.now;
            var8 = var8.bind(var9)();
            var _closure1_slot16 = var8;
            var8 = 7;
            var9 = var4[var8];
            var12 = var13.bind(var0)(var9);
            var9 = var12.isLibdiscoreInitialized;
            var12 = var9.bind(var12)();
            var9 = null;
            if (!var12) {
                _fun8469_ip = 410;
                continue _fun8469
            }
        case 368:
            var8 = var4[var8];
            var14 = var13.bind(var0)(var8);
            var12 = var14.generateLaunchSignature;
            var8 = 8;
            var8 = var4[var8];
            var15 = var13.bind(var0)(var8);
            var8 = var15.getGlobalObject;
            var8 = var8.bind(var15)();
            var9 = var12.bind(var14)(var8);
        case 410:
            var _closure1_slot17 = var9;
            var12 = 9;
            var8 = var4[var12];
            var15 = var3.bind(var0)(var8);
            var14 = var15.extendSuperProperties;
            var8 = {};
            var8.launch_signature = var9;
            var8 = var14.bind(var15)(var8);
            var8 = new Array(0);
            var _closure1_slot18 = var8;
            var8 = {};
            var15 = var11.APP_OPENED;
            var14 = {};
            var22 = 300000;
            var14.throttlePeriod = var22;
            var16 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var16;
            var8[var15] = var14;
            var15 = var11.APP_BACKGROUND;
            var14 = {};
            var23 = 120000;
            var14.throttlePeriod = var23;
            var16 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var16;
            var8[var15] = var14;
            var15 = var11.ACK_MESSAGES;
            var14 = function(arg0) { // Environment: var1
                _fun8477: for (var _fun8477_ip = 0;;) switch (_fun8477_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.location_object_type;
                        var0 = _closure1_slot10;
                        var1 = var0.ACK_MANUAL;
                        var0 = undefined;
                        if (!(var2 !== var1)) {
                            _fun8477_ip = 56;
                            continue _fun8477
                        }
                    case 28:
                        var1 = {};
                        var2 = 900000;
                        var1.throttlePeriod = var2;
                        var2 = function(arg0) { // Original name: throttleKeys, environment: var2
                            var1 = arg0;
                            var2 = var1.guild_id;
                            var0 = new Array(3);
                            var0[0] = var2;
                            var2 = var1.channel_id;
                            var0[1] = var2;
                            var1 = var1.location_section;
                            var0[2] = var1;
                            return var0;
                        };
                        var1.throttleKeys = var2;
                        var0 = var1;
                    case 56:
                        return var0;
                }
            };
            var8[var15] = var14;
            var16 = var11.GUILD_VIEWED;
            var14 = {};
            var15 = 900000;
            var14.throttlePeriod = var15;
            var19 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.guild_id;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.is_pending;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var19;
            var8[var16] = var14;
            var16 = var11.FRIENDS_LIST_CLICKED;
            var14 = {};
            var14.throttlePeriod = var15;
            var19 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.tab_opened;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var19;
            var8[var16] = var14;
            var16 = var11.FRIENDS_LIST_VIEWED;
            var14 = {};
            var14.throttlePeriod = var15;
            var19 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.tab_opened;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var19;
            var8[var16] = var14;
            var16 = var11.NOW_PLAYING_CARD_HOVERED;
            var14 = {};
            var14.throttlePeriod = var15;
            var19 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.tab_opened;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var19;
            var8[var16] = var14;
            var16 = var11.START_SPEAKING;
            var14 = {};
            var14.throttlePeriod = var15;
            var19 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.server;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var19;
            var8[var16] = var14;
            var16 = var11.START_LISTENING;
            var14 = {};
            var14.throttlePeriod = var15;
            var19 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.server;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var19;
            var8[var16] = var14;
            var16 = var11.ACTIVITY_UPDATED;
            var14 = {
                'throttlePeriod': 60000,
                'throttleKeys': null,
                'deduplicate': true
            };
            var19 = 60000;
            var20 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.application_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var20;
            var8[var16] = var14;
            var16 = var11.CHANNEL_OPENED;
            var14 = {};
            var14.throttlePeriod = var15;
            var20 = function(arg0) { // Original name: throttleKeys, environment: var1
                _fun8486: for (var _fun8486_ip = 0;;) switch (_fun8486_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = var2.channel_static_route;
                        var1 = null;
                        if (!(var1 == var0)) {
                            _fun8486_ip = 139;
                            continue _fun8486
                        }
                    case 18:
                        var0 = var2.location;
                        if (!(var1 != var0)) {
                            _fun8486_ip = 77;
                            continue _fun8486
                        }
                    case 27:
                        var3 = var2.location;
                        var1 = var3.startsWith;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var0 = 10;
                        var4 = var4[var0];
                        var0 = undefined;
                        var0 = var5.bind(var0)(var4);
                        var0 = var0.FREQUENT_FRIENDS_ROW;
                        var0 = var1.bind(var3)(var0);
                        if (var0) {
                            _fun8486_ip = 102;
                            continue _fun8486
                        }
                    case 77:
                        var1 = var2.channel_id;
                        var0 = new Array(2);
                        var0[0] = var1;
                        var1 = var2.channel_view;
                        var0[1] = var1;
                        _fun8486_ip = 137;
                        continue _fun8486;
                    case 102:
                        var3 = var2.channel_id;
                        var1 = new Array(3);
                        var1[0] = var3;
                        var3 = var2.channel_view;
                        var1[1] = var3;
                        var3 = var2.location;
                        var1[2] = var3;
                        var0 = var1;
                    case 137:
                        _fun8486_ip = 175;
                        continue _fun8486;
                    case 139:
                        var3 = var2.guild_id;
                        var1 = new Array(3);
                        var1[0] = var3;
                        var3 = var2.channel_static_route;
                        var1[1] = var3;
                        var2 = var2.channel_view;
                        var1[2] = var2;
                        var0 = var1;
                    case 175:
                        return var0;
                }
            };
            var14.throttleKeys = var20;
            var8[var16] = var14;
            var16 = var11.TEXT_IN_VOICE_OPENED;
            var14 = {};
            var20 = 86400000;
            var14.throttlePeriod = var20;
            var21 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.channel_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.NOTIFICATION_VIEWED;
            var14 = {};
            var14.throttlePeriod = var15;
            var21 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.notif_type;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.MEMBER_LIST_VIEWED;
            var14 = {};
            var14.throttlePeriod = var15;
            var21 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.channel_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.DM_LIST_VIEWED;
            var14 = {};
            var14.throttlePeriod = var15;
            var21 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.channel_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.NAV_DRAWER_OPENED;
            var14 = {};
            var14.throttlePeriod = var15;
            var21 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.KEYBOARD_SHORTCUT_USED;
            var14 = {};
            var14.throttlePeriod = var23;
            var21 = function(arg0) { // Original name: throttleKeys, environment: var1
                _fun8492: for (var _fun8492_ip = 0;;) switch (_fun8492_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.shortcut_name;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var2 = var1.location_object;
                        var0[1] = var2;
                        var2 = var1.source_class_list;
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun8492_ip = 43;
                            continue _fun8492
                        }
                    case 39:
                        var2 = new Array(0);
                    case 43:
                        var3 = 2;
                        var5 = var0;
                        var4 = var2;
                        var1 = arraySpread(var5, var4, var3);
                        return var0;
                }
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.QUICKSWITCHER_OPENED;
            var14 = {};
            var21 = 10000;
            var14.throttlePeriod = var21;
            var24 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var24;
            var8[var16] = var14;
            var16 = var11.CHAT_INPUT_COMPONENT_VIEWED;
            var14 = {};
            var14.throttlePeriod = var15;
            var24 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.type;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var24;
            var8[var16] = var14;
            var16 = var11.ROLE_PAGE_VIEWED;
            var14 = {};
            var14.throttlePeriod = var23;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.role_id;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.tab_opened;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.VIDEO_INPUT_INITIALIZED;
            var14 = {};
            var14.throttlePeriod = var22;
            var23 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.AUDIO_INPUT_INITIALIZED;
            var14 = {};
            var14.throttlePeriod = var22;
            var23 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.HUB_ONBOARDING_CAROUSEL_SCROLLED;
            var14 = {};
            var14.throttlePeriod = var15;
            var23 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.HUB_STUDENT_PROMPT_CLICKED;
            var14 = {};
            var14.throttlePeriod = var15;
            var23 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.RPC_SERVER_ERROR_CAUGHT;
            var14 = {};
            var14.throttlePeriod = var20;
            var23 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.RPC_COMMAND_SENT;
            var14 = {
                'throttlePeriod': 86400000,
                'throttleKeys': null,
                'throttlePercent': 0.001
            };
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.application_id;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.command;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.RPC_SUBSCRIPTION_REQUESTED;
            var14 = {
                'throttlePeriod': 86400000,
                'throttleKeys': null,
                'throttlePercent': 0.001
            };
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.application_id;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.event;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.ACTIVITY_HANDSHAKE;
            var14 = {};
            var14.throttlePeriod = var20;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.application_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.CHANNEL_BANNER_VIEWED;
            var14 = {};
            var14.throttlePeriod = var20;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.banner_type;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.channel_id;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.PREMIUM_UPSELL_VIEWED;
            var14 = {};
            var14.throttlePeriod = var19;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.type;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.FORUM_CHANNEL_SEARCHED;
            var14 = {};
            var14.throttlePeriod = var19;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.guild_id;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.channel_id;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.FORUM_CHANNEL_SCROLLED;
            var14 = {};
            var14.throttlePeriod = var15;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.guild_id;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.channel_id;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED;
            var14 = {};
            var14.throttlePeriod = var19;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.user_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.MEDIA_VIEWER_SESSION_COMPLETED;
            var14 = {};
            var14.throttlePeriod = var19;
            var23 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.SUMMARIES_UNREAD_BAR_VIEWED;
            var14 = {};
            var14.throttlePeriod = var22;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.channel_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.ACTIVITY_CARDS_VIEWED;
            var14 = {};
            var14.throttlePeriod = var15;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.context;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.guild_id;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.GUILD_TOOLTIP_SHOWN;
            var14 = {};
            var14.throttlePeriod = var15;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.guild_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.ACK_COMMUNITY_MESSAGES;
            var14 = {};
            var14.throttlePeriod = var15;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.channel_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.REDESIGN_NAV_BAR_CLICKED;
            var14 = {};
            var14.throttlePeriod = var15;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.tab;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.CHANNEL_LIST_END_REACHED;
            var14 = {};
            var14.throttlePeriod = var15;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.guild_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED;
            var14 = {};
            var14.throttlePeriod = var19;
            var19 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.guild_id;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.channel_id;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var19;
            var8[var16] = var14;
            var16 = var11.LIVE_ACTIVITY_SETTINGS_UPDATED;
            var14 = {};
            var19 = 3600000;
            var14.throttlePeriod = var19;
            var23 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.MEDIA_INPUT_VOLUME_CHANGED;
            var14 = {};
            var14.throttlePeriod = var22;
            var23 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.location_stack;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var23;
            var8[var16] = var14;
            var16 = var11.MEDIA_OUTPUT_VOLUME_CHANGED;
            var14 = {};
            var14.throttlePeriod = var22;
            var22 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.location_stack;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var22;
            var8[var16] = var14;
            var16 = var11.APP_DMS_QUICK_LAUNCHER_IMPRESSION;
            var14 = {};
            var14.throttlePeriod = var15;
            var22 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.channel_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var22;
            var8[var16] = var14;
            var16 = var11.USER_VOICE_ACTIVITY_VIEWED;
            var14 = {
                'throttlePeriod': 300000,
                'throttleKeys': null,
                'deduplicate': true
            };
            var22 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.activity_user_id;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.surface;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var22;
            var8[var16] = var14;
            var16 = var11.PARTY_VOICE_ACTIVITY_VIEWED;
            var14 = {
                'throttlePeriod': 300000,
                'throttleKeys': null,
                'deduplicate': true
            };
            var22 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.voice_channel_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var22;
            var8[var16] = var14;
            var16 = var11.MEMBER_LIST_SWIPE_PEEK;
            var14 = {};
            var14.throttlePeriod = var17;
            var22 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.channel_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var22;
            var8[var16] = var14;
            var16 = var11.REDACTABLE_MESSAGE_LOADED;
            var14 = {};
            var14.throttlePeriod = var15;
            var22 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.channel_id;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.message_id;
                var0[1] = var1;
                return var0;
            };
            var14.throttleKeys = var22;
            var8[var16] = var14;
            var16 = var11.OPEN_MODAL;
            var14 = function(arg0) { // Environment: var1
                _fun8525: for (var _fun8525_ip = 0;;) switch (_fun8525_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.type;
                        var0 = _closure1_slot11;
                        var1 = var0.MEDIA_VIEWER;
                        var0 = undefined;
                        if (!(var2 === var1)) {
                            _fun8525_ip = 55;
                            continue _fun8525
                        }
                    case 27:
                        var1 = {};
                        var2 = 60000;
                        var1.throttlePeriod = var2;
                        var2 = function(arg0) { // Original name: throttleKeys, environment: var2
                            var0 = arg0;
                            var1 = var0.type;
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                        };
                        var1.throttleKeys = var2;
                        var0 = var1;
                    case 55:
                        return var0;
                }
            };
            var8[var16] = var14;
            var16 = var11.MODERATOR_QUEUE_ACTION;
            var14 = {};
            var14.throttlePeriod = var21;
            var21 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.guild_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.NOTIFICATION_PERMISSION_STATUS;
            var14 = {};
            var21 = 43200000;
            var14.throttlePeriod = var21;
            var21 = function(arg0) { // Original name: throttleKeys, environment: var1
                var1 = arg0;
                var2 = var1.os_enabled;
                var0 = new Array(4);
                var0[0] = var2;
                var2 = var1.notification_authorization_status;
                var0[1] = var2;
                var2 = var1.foreground_app_enabled;
                var0[2] = var2;
                var1 = var1.background_app_enabled;
                var0[3] = var1;
                return var0;
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.SEARCH_BAR_VIEWED;
            var14 = {};
            var14.throttlePeriod = var19;
            var21 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.search_type;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.AD_IDENTIFIER_FETCHED;
            var14 = {};
            var14.throttlePeriod = var20;
            var21 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var21;
            var8[var16] = var14;
            var16 = var11.ACTIVITY_PANEL_SDK_LINK_VIEWED;
            var14 = {};
            var14.throttlePeriod = var20;
            var20 = function(arg0) { // Original name: throttleKeys, environment: var1
                var0 = arg0;
                var1 = var0.application_id;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var14.throttleKeys = var20;
            var8[var16] = var14;
            var16 = var11.LIBDISCORE_SLOW_TIMERS;
            var14 = {};
            var14.throttlePeriod = var19;
            var20 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var20;
            var8[var16] = var14;
            var16 = var11.DEBUG_MISSING_STRING;
            var14 = {};
            var14.throttlePeriod = var19;
            var19 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var19;
            var8[var16] = var14;
            var16 = var11.VIDEO_STREAM_ZOOM_CHANGED;
            var14 = {};
            var14.throttlePeriod = var17;
            var17 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var14.throttleKeys = var17;
            var8[var16] = var14;
            var14 = var11.CACHE_STATS_RECORDED;
            var11 = {};
            var11.throttlePeriod = var15;
            var15 = function() { // Original name: throttleKeys, environment: var1
                var0 = new Array(0);
                return var0;
            };
            var11.throttleKeys = var15;
            var8[var14] = var11;
            var11 = function() { // Original name: getAccessibilityFeatures, environment: var1
                var0 = _closure1_slot12;
                var0 = var0.NONE;
                return var0;
            };
            var _closure1_slot19 = var11;
            var11 = var4[var12];
            var15 = var13.bind(var0)(var11);
            var14 = var15.trackMaker;
            var11 = {};
            var11.analyticEventConfigs = var8;
            var17 = 11;
            var16 = var4[var17];
            var16 = var18.bind(var0)(var16);
            var11.dispatcher = var16;
            var16 = 'TRACK';
            var11.TRACK_ACTION_NAME = var16;
            var11 = var14.bind(var15)(var11);
            var _closure1_slot20 = var11;
            var11 = false;
            var _closure1_slot21 = var11;
            var11 = {};
            var _closure1_slot22 = var11;
            var11 = var4[var12];
            var15 = var13.bind(var0)(var11);
            var14 = var15.trackMaker;
            var11 = {};
            var11.analyticEventConfigs = var8;
            var17 = var4[var17];
            var17 = var18.bind(var0)(var17);
            var11.dispatcher = var17;
            var11.TRACK_ACTION_NAME = var16;
            var11 = var14.bind(var15)(var11);
            var _closure1_slot23 = var11;
            var11 = {};
            var14 = var4[var12];
            var26 = var3.bind(var0)(var14);
            var27 = var11;
            var14 = copyDataProperties(var27, var26);
            var12 = var4[var12];
            var12 = var13.bind(var0)(var12);
            var14 = var12.getCampaignParams;
            var12 = 'getCampaignParams';
            var11[var12] = var14;
            var14 = function(arg0) { // Original name: setSystemAccessibilityFeatures, environment: var1
                var0 = arg0;
                _closure1_slot19 = var0;
                var0 = undefined;
                return var0;
            };
            var12 = 'setSystemAccessibilityFeatures';
            var11[var12] = var14;
            var12 = 'expandEventProperties';
            var11[var12] = var6;
            var14 = function(arg0, arg1) { // Original name: track, environment: var1
                _fun8538: for (var _fun8538_ip = 0;;) switch (_fun8538_ip) {
                    case 0:
                        var5 = arg0;
                        var3 = arg1;
                        var6 = arguments[2];
                        var4 = undefined;
                        if (!(var6 === var4)) {
                            _fun8538_ip = 17;
                            continue _fun8538
                        }
                    case 15:
                        var6 = {};
                    case 17:
                        var0 = global;
                        var1 = var0.String;
                        var8 = var1.bind(var4)(var5);
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var2 = 15;
                        var2 = var9[var2];
                        var2 = var7.bind(var4)(var2);
                        var7 = var2.IGNORE_ANALYTICS_BREADCRUMB_EVENTS;
                        var2 = var7.includes;
                        var2 = var2.bind(var7)(var8);
                        if (var2) {
                            _fun8538_ip = 138;
                            continue _fun8538
                        }
                    case 72:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var2 = 16;
                        var2 = var9[var2];
                        var9 = var7.bind(var4)(var2);
                        var7 = var9.addBreadcrumb;
                        var2 = {};
                        var10 = 'analytics';
                        var2.category = var10;
                        var10 = var0.HermesInternal;
                        var11 = var10.concat;
                        var10 = '';
                        var10 = var11.bind(var10)(var8);
                        var2.message = var10;
                        var2 = var7.bind(var9)(var2);
                    case 138:
                        var2 = _closure1_slot21;
                        if (!var2) {
                            _fun8538_ip = 210;
                            continue _fun8538
                        }
                    case 145:
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun8538_ip = 210;
                            continue _fun8538
                        }
                    case 151:
                        var9 = var0.Array;
                        var7 = var9.isArray;
                        var2 = _closure1_slot22;
                        var2 = var2[var5];
                        var7 = var7.bind(var9)(var2);
                        var2 = _closure1_slot22;
                        if (var7) {
                            _fun8538_ip = 196;
                            continue _fun8538
                        }
                    case 182:
                        var7 = new Array(1);
                        var7[0] = var3;
                        var2[var5] = var7;
                        _fun8538_ip = 210;
                        continue _fun8538;
                    case 196:
                        var7 = var2[var5];
                        var2 = var7.push;
                        var2 = var2.bind(var7)(var3);
                    case 210:
                        var7 = var6.throttlePercent;
                        var2 = null;
                        if (!(var2 != var7)) {
                            _fun8538_ip = 248;
                            continue _fun8538
                        }
                    case 222:
                        var7 = var0.Math;
                        var2 = var7.random;
                        var7 = var2.bind(var7)();
                        var2 = var6.throttlePercent;
                        if (!(!(var7 > var2))) {
                            _fun8538_ip = 311;
                            continue _fun8538
                        }
                    case 248:
                        var2 = _closure1_slot26;
                        var3 = var2.bind(var4)(var3);
                        var7 = _closure1_slot27;
                        var2 = var6.logEventProperties;
                        var2 = var7.bind(var4)(var8, var3, var2);
                        var2 = _closure1_slot20;
                        var1 = {};
                        var7 = var6.flush;
                        var1.flush = var7;
                        var6 = var6.fingerprint;
                        var1.fingerprint = var6;
                        var1 = var2.bind(var4)(var5, var3, var1);
                        return var1;
                    case 311:
                        var1 = var0.Promise;
                        var0 = var1.resolve;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var12 = 'track';
            var11[var12] = var14;
            var12 = 18;
            var12 = var4[var12];
            var14 = var13.bind(var0)(var12);
            var13 = var14.fileFinishedImporting;
            var12 = 'utils/AnalyticsUtils.tsx';
            var12 = var13.bind(var14)(var12);
            var2.default = var11;
            var2.AnalyticsContext = var10;
            var2.launchSignature = var9;
            var9 = function(arg0) { // Original name: addExtraAnalyticsDecorator, environment: var1
                var2 = _closure1_slot18;
                var1 = var2.push;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var2.addExtraAnalyticsDecorator = var9;
            var2.AnalyticEventConfigs = var8;
            var2.expandLocation = var7;
            var7 = function(arg0) { // Original name: setUTMContext, environment: var1
                var0 = arg0;
                _closure1_slot14 = var0;
                return var0;
            };
            var2.setUTMContext = var7;
            var2.expandEventProperties = var6;
            var2.debugLogEvent = var5;
            var5 = function() { // Original name: startRecordingAnalyticsEvents, environment: var1
                var0 = true;
                _closure1_slot21 = var0;
                var0 = undefined;
                return var0;
            };
            var2.startRecordingAnalyticsEvents = var5;
            var5 = function() { // Original name: stopRecordingAnalyticsEvents, environment: var1
                var0 = false;
                _closure1_slot21 = var0;
                var0 = undefined;
                return var0;
            };
            var2.stopRecordingAnalyticsEvents = var5;
            var5 = function() { // Original name: getAnalyticsEventsRecording, environment: var1
                var0 = _closure1_slot22;
                return var0;
            };
            var2.getAnalyticsEventsRecording = var5;
            var5 = function() { // Original name: clearAnalyticsEventsRecording, environment: var1
                var0 = global;
                var2 = var0.Object;
                var1 = var2.keys;
                var0 = _closure1_slot22;
                var2 = var1.bind(var2)(var0);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure1_slot22;
                    var0 = arg0;
                    var0 = delete var1[var0];
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var2.clearAnalyticsEventsRecording = var5;
            var5 = function(arg0) { // Original name: isGameApplicationType, environment: var1
                _fun8546: for (var _fun8546_ip = 0;;) switch (_fun8546_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure1_slot13;
                        var0 = var0.GAME;
                        var0 = var2 === var0;
                        if (var0) {
                            _fun8546_ip = 37;
                            continue _fun8546
                        }
                    case 23:
                        var1 = _closure1_slot13;
                        var1 = var1.DEPRECATED_GAME;
                        var0 = var2 === var1;
                    case 37:
                        return var0;
                }
            };
            var2.isGameApplicationType = var5;
            var5 = function(arg0, arg1) { // Original name: trackNetworkAction, environment: var1
                var3 = arg0;
                var6 = arg1;
                var4 = _closure1_slot26;
                var2 = {};
                var5 = _closure1_slot8;
                var0 = undefined;
                var5 = var5.bind(var0)();
                var2.location = var5;
                var9 = var2;
                var8 = var6;
                var5 = copyDataProperties(var9, var8);
                var2 = var4.bind(var0)(var2);
                var5 = _closure1_slot7;
                var4 = {};
                var7 = 'action';
                var4.type = var7;
                var9 = var4;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var4 = var5.bind(var0)(var3, var4);
                var4 = _closure1_slot27;
                var4 = var4.bind(var0)(var3, var2);
                var1 = _closure1_slot23;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
            };
            var2.trackNetworkAction = var5;
            var1 = function() { // Original name: getNewAnalyticsLoadId, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.v4;
                var0 = var0.bind(var1)();
                return var0;
            };
            var2.getNewAnalyticsLoadId = var1;
            var1 = 19;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var2.AnalyticsSchema = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 796, 803, 660, 12651, 3444, 4082, 12652, 481, 5540, 806, 12241, 1234, 12, 12649, 1207, 491, 2, 12653]);