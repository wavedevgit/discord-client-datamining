// modules/devtools/dev_settings/DevSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = function() {
        _fun36975: for (var _fun36975_ip = 0;;) switch (_fun36975_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun36975_ip = 74;
                continue _fun36975;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var11 = 0;
    var1 = var7[var11];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var10 = 1;
    var1 = var7[var10];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var9 = 2;
    var1 = var7[var9];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var5 = 3;
    var1 = var7[var5];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var3 = 4;
    var1 = var7[var3];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var4 = {};
    var4.MESSAGING = var11;
    var1 = 'MESSAGING';
    var4[var11] = var1;
    var4.OVERLAYS = var10;
    var1 = 'OVERLAYS';
    var4[var10] = var1;
    var4.PREMIUM = var9;
    var1 = 'PREMIUM';
    var4[var9] = var1;
    var4.REPORTING = var5;
    var1 = 'REPORTING';
    var4[var5] = var1;
    var4.APP_COLLECTIONS = var3;
    var1 = 'APP_COLLECTIONS';
    var4[var3] = var1;
    var9 = 5;
    var4.SHOP = var9;
    var1 = 'SHOP';
    var4[var9] = var1;
    var5 = 6;
    var4.LIBDISCORE = var5;
    var1 = 'LIBDISCORE';
    var4[var5] = var1;
    var3 = {};
    var10 = var4.REPORTING;
    var1 = 'Reporting Toggles';
    var3[var10] = var1;
    var10 = var4.OVERLAYS;
    var1 = 'Dev Overlays';
    var3[var10] = var1;
    var10 = var4.MESSAGING;
    var1 = 'Messaging Toggles';
    var3[var10] = var1;
    var10 = var4.APP_COLLECTIONS;
    var1 = 'App Collections Toggles';
    var3[var10] = var1;
    var10 = var4.PREMIUM;
    var1 = 'Premium Toggles';
    var3[var10] = var1;
    var10 = var4.SHOP;
    var1 = 'Shop Toggles';
    var3[var10] = var1;
    var10 = var4.LIBDISCORE;
    var1 = 'Libdiscore Toggles';
    var3[var10] = var1;
    var1 = {};
    var10 = {};
    var11 = 'Blur view overrides for designers to test with';
    var10.label = var11;
    var11 = var4.OVERLAYS;
    var10.category = var11;
    var1.visual_effect_view_overrides = var10;
    var10 = {};
    var11 = 'Force explicit content obscure blur effect on for message media and embeds';
    var10.label = var11;
    var11 = var4.OVERLAYS;
    var10.category = var11;
    var1.obscure_blur_effect_explicit_content_enabled = var10;
    var10 = {};
    var11 = 'Force gore content obscure blur effect on for message media and embeds';
    var10.label = var11;
    var11 = var4.OVERLAYS;
    var10.category = var11;
    var1.obscure_blur_effect_gore_content_enabled = var10;
    var10 = {};
    var11 = 'Force self harm content obscure blur effect on for message media and embeds';
    var10.label = var11;
    var11 = var4.OVERLAYS;
    var10.category = var11;
    var1.obscure_blur_effect_self_harm_content_enabled = var10;
    var10 = {};
    var11 = 'Ignore pending scan on explicit media';
    var10.label = var11;
    var11 = var4.OVERLAYS;
    var10.category = var11;
    var1.explicit_media_redaction_ignore_pending_scan = var10;
    var10 = {};
    var11 = 'Enable analytics debugger view';
    var10.label = var11;
    var11 = var4.OVERLAYS;
    var10.category = var11;
    var1.analytics_debugger = var10;
    var10 = {};
    var11 = 'Enable idle status indicator';
    var10.label = var11;
    var11 = var4.OVERLAYS;
    var10.category = var11;
    var1.idle_status_indicator = var10;
    var10 = {};
    var11 = 'Uploads: Fail 50% of uploads with 500 status after a 1 second delay';
    var10.label = var11;
    var11 = var4.MESSAGING;
    var10.category = var11;
    var1.upload_fail_50 = var10;
    var10 = {};
    var11 = 'Send: Fail with 500 status';
    var10.label = var11;
    var11 = var4.MESSAGING;
    var10.category = var11;
    var1.send_fail_100 = var10;
    var10 = {};
    var11 = 'Enable all new premium roadblocks';
    var10.label = var11;
    var11 = var4.PREMIUM;
    var10.category = var11;
    var1.premium_roadblocks = var10;
    var10 = {};
    var11 = 'Enable staff only test iar menu options';
    var10.label = var11;
    var11 = var4.REPORTING;
    var10.category = var11;
    var1.iar_testing = var10;
    var10 = {};
    var11 = 'Enable to skip calling the API to skip submitting actual IAR reports';
    var10.label = var11;
    var11 = var4.REPORTING;
    var10.category = var11;
    var1.iar_skip_api_report_submit = var10;
    var10 = {};
    var11 = 'Show IAR report sub type labels';
    var10.label = var11;
    var11 = var4.REPORTING;
    var10.category = var11;
    var1.iar_show_report_sub_type_labels = var10;
    var10 = {};
    var11 = "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.";
    var10.label = var11;
    var11 = var4.APP_COLLECTIONS;
    var10.category = var11;
    var1.only_show_preview_app_collections = var10;
    var10 = {};
    var11 = 'Disable application collections cache so that you can see updates to collections immediately.';
    var10.label = var11;
    var11 = var4.APP_COLLECTIONS;
    var10.category = var11;
    var1.disable_app_collections_cache = var10;
    var10 = {};
    var11 = 'Show debug log overlay in collectibles shop';
    var10.label = var11;
    var11 = var4.SHOP;
    var10.category = var11;
    var1.shop_show_debug_overlay = var10;
    var10 = {};
    var11 = 'Bypass Google SKU sync in collectibles shop';
    var10.label = var11;
    var11 = var4.SHOP;
    var10.category = var11;
    var1.bypass_google_sku_sync = var10;
    var10 = {};
    var11 = 'Enable verbose telemetry logging for libdiscore';
    var10.label = var11;
    var11 = var4.LIBDISCORE;
    var10.category = var11;
    var1.libdiscore_verbose_telemetry_logging = var10;
    var _closure1_slot5 = var1;
    var10 = {};
    var _closure1_slot6 = var10;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var10 = var9.DeviceSettingsStore;
    var9 = function(arg0) { // Environment: var6
        var3 = function() {
            _fun36979: for (var _fun36979_ip = 0;;) switch (_fun36979_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun36979_ip = 69;
                        continue _fun36979
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun36979_ip = 105;
                    continue _fun36979;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getUserAgnosticState';
        var4.key = var0;
        var0 = function() {
            var0 = {};
            var1 = _closure1_slot6;
            var0.toggleStates = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'initialize';
        var4.key = var6;
        var6 = function arg0() {
            _fun36981: for (var _fun36981_ip = 0;;) switch (_fun36981_ip) {
                case 0:
                    var9 = arg0;
                    var7 = _closure1_slot5;
                    var0 = undefined;
                    var2 = null;
                    var1 = undefined;
                    for (var3 in var7)
                        case 24: {
                            case 33: var13 = var3;
                            var10 = var2 == var9;
                            var11 = undefined;
                            if (var10) {
                                _fun36981_ip = 70;
                                continue _fun36981
                            }
                            case 45: var12 = var9.toggleStates;
                            var10 = var2 == var12;
                            var1 = var12;
                            var11 = undefined;
                            if (var10) {
                                _fun36981_ip = 70;
                                continue _fun36981
                            }
                            case 63: var11 = var12[var13];
                            var1 = var12;
                            case 70: var12 = var2 != var11;
                            var10 = var1;
                            if (!var12) {
                                _fun36981_ip = 83;
                                continue _fun36981
                            }
                            case 80: var12 = var11;
                            case 83: var1 = var10;
                            if (!var12) {
                                _fun36981_ip = 24;
                                continue _fun36981
                            }
                            case 89: var11 = _closure1_slot6;
                            var11[var13] = var12;
                            var1 = var10;
                            _fun36981_ip = 24;
                            continue _fun36981;
                        }
                case 102:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'get';
        var4.key = var6;
        var6 = function arg0() {
            _fun36982: for (var _fun36982_ip = 0;;) switch (_fun36982_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun36982_ip = 26;
                        continue _fun36982
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'enabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'allByCategory';
        var4.key = var6;
        var5 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.entries;
            var1 = _closure1_slot5;
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                _fun36985: for (var _fun36985_ip = 0;;) switch (_fun36985_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var0 = var3().value;
                        var0 = var1;
                        var5 = undefined;
                        var2 = var0 === var5;
                        var0 = undefined;
                        if (var2) {
                            _fun36985_ip = 49;
                            continue _fun36985
                        }
                    case 24:
                        var4 = var3().value;
                        var3 = var1;
                        var3 = var3 === var5;
                        var0 = undefined;
                        var2 = var3;
                        if (var3) {
                            _fun36985_ip = 49;
                            continue _fun36985
                        }
                    case 43:
                        var0 = var4;
                        var2 = var3;
                    case 49:
                        if (var2) {
                            _fun36985_ip = 55;
                            continue _fun36985
                        }
                    case 52:
                        var1.return();
                    case 55:
                        var1 = var0.category;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun36986: for (var _fun36986_ip = 0;;) switch (_fun36986_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = var4[Symbol.iterator];
                        var4 = var0().next;
                        var1 = var4().value;
                        var2 = var0;
                        var6 = undefined;
                        var2 = var2 === var6;
                        var3 = undefined;
                        if (var2) {
                            _fun36986_ip = 27;
                            continue _fun36986
                        }
                    case 24:
                        var3 = var1;
                    case 27:
                        var1 = undefined;
                        if (var2) {
                            _fun36986_ip = 57;
                            continue _fun36986
                        }
                    case 32:
                        var5 = var4().value;
                        var4 = var0;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var2 = var4;
                        if (var4) {
                            _fun36986_ip = 57;
                            continue _fun36986
                        }
                    case 51:
                        var1 = var5;
                        var2 = var4;
                    case 57:
                        if (var2) {
                            _fun36986_ip = 63;
                            continue _fun36986
                        }
                    case 60:
                        var0.return();
                    case 63:
                        var0 = new Array(3);
                        var0[0] = var3;
                        var2 = _closure1_slot6;
                        var3 = var2[var3];
                        var2 = null;
                        var2 = var2 != var3;
                        if (!var2) {
                            _fun36986_ip = 94;
                            continue _fun36986
                        }
                    case 91:
                        var2 = var3;
                    case 94:
                        var0[1] = var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var9.bind(var0)(var10);
    var10 = 'DevToolsDevSettingsStore';
    var9.displayName = var10;
    var9.persistKey = var10;
    var5 = var7[var5];
    var14 = var8.bind(var0)(var5);
    var5 = {};
    var6 = function arg0() {
        _fun36987: for (var _fun36987_ip = 0;;) switch (_fun36987_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.value;
                var1 = false;
                if (!(var1 === var2)) {
                    _fun36987_ip = 33;
                    continue _fun36987
                }
            case 14:
                var2 = _closure1_slot6;
                var1 = var0.toggle;
                var1 = delete var2[var1];
                _fun36987_ip = 55;
                continue _fun36987;
            case 33:
                var2 = _closure1_slot6;
                var1 = var0.toggle;
                var0 = var0.value;
                var2[var1] = var0;
            case 55:
                var0 = undefined;
                return var0;
        }
    };
    var5.DEV_TOOLS_DEV_SETTING_SET = var6;
    var6 = var9.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var9
        }
    });
    var15 = var6;
    var13 = var5;
    var5 = new var15[var9](var14, var13, var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 7;
    var7 = var7[var6];
    var6 = arg1;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/devtools/dev_settings/DevSettingsStore.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.DevSettingsCategory = var4;
    var2.CATEGORY_LABELS = var3;
    var2.toggles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);