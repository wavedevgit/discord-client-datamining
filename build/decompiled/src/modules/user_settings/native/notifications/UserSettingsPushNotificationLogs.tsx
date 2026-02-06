// modules/user_settings/native/notifications/UserSettingsPushNotificationLogs.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var3 = var5[var12];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 7;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var8.flex = var12;
    var3.wrap = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var3.list = var8;
    var8 = {
        'padding': null,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.padding = var12;
    var12 = 'center';
    var3.searchWrap = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var8.marginLeft = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var8.borderRadius = var13;
    var13 = 8;
    var14 = var5[var13];
    var14 = var4.bind(var0)(var14);
    var14 = var14.InputHeights;
    var14 = var14.MD;
    var8.height = var14;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.InputHeights;
    var13 = var13.MD;
    var8.width = var13;
    var8.justifyContent = var12;
    var8.alignItems = var12;
    var3.shareButton = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.paddingBottom = var10;
    var3.log = var8;
    var8 = {};
    var9 = var9.CODE_BOLD;
    var8.fontFamily = var9;
    var3.code = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/notifications/UserSettingsPushNotificationLogs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot5;
        var1 = var4.useState;
        var0 = function() { // Environment: var8
            _fun86174: for (var _fun86174_ip = 0;;) switch (_fun86174_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var3 = var0.Storage;
                    var2 = var3.get;
                    var1 = 'push-notification-logs-query';
                    var0 = '';
                    var1 = var2.bind(var3)(var1, var0);
                    var2 = null;
                    var2 = var2 != var1;
                    if (!var2) {
                        _fun86174_ip = 64;
                        continue _fun86174
                    }
                case 61:
                    var0 = var1;
                case 64:
                    return var0;
            }
        };
        var0 = var1.bind(var4)(var0);
        var7 = _closure1_slot4;
        var3 = undefined;
        var6 = 2;
        var0 = var7.bind(var3)(var0, var6);
        var5 = 0;
        var13 = var0[var5];
        var _closure2_slot0 = var13;
        var2 = 1;
        var15 = var0[var2];
        var1 = var4.useState;
        var0 = new Array(0);
        var0 = var1.bind(var4)(var0);
        var1 = var7.bind(var3)(var0, var6);
        var0 = var1[var5];
        var _closure2_slot1 = var0;
        var1 = var1[var2];
        var _closure2_slot2 = var1;
        var9 = var4.useState;
        var1 = new Array(0);
        var1 = var9.bind(var4)(var1);
        var1 = var7.bind(var3)(var1, var6);
        var9 = var1[var5];
        var1 = var1[var2];
        var _closure2_slot3 = var1;
        var5 = var4.useEffect;
        var2 = function() { // Environment: var8
            var1 = function() {
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun86178: for (var _fun86178_ip = 0;;) switch (_fun86178_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun86178_ip = 64;
                                    continue _fun86178
                                }
                            case 7:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var1 = var2[var1];
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 40);
                            case 38:
                                return var1;
                            case 40:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun86178_ip = 61;
                                    continue _fun86178
                                }
                            case 46:
                                var3 = _closure2_slot2;
                                var3 = var3.bind(var2)(var1);
                                return var2;
                            case 61:
                                return var1;
                            case 64:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                _closure3_slot0 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot0 = var1;
            var1 = function() {
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = !var1;
            return var0;
        };
        var1 = new Array(0);
        var1 = var5.bind(var4)(var2, var1);
        var2 = var4.useEffect;
        var1 = new Array(2);
        var1[0] = var0;
        var1[1] = var13;
        var0 = function() { // Environment: var8
            _fun86180: for (var _fun86180_ip = 0;;) switch (_fun86180_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var1 = '';
                    if (!(var1 === var3)) {
                        _fun86180_ip = 84;
                        continue _fun86180
                    }
                case 17:
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.Storage;
                    var4 = var5.set;
                    var3 = _closure2_slot0;
                    var2 = 'push-notification-logs-query';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                case 84:
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        _fun86181: for (var _fun86181_ip = 0;;) switch (_fun86181_ip) {
                            case 0:
                            case 2: // try_start_0
                                var1 = global;
                                var5 = var1.RegExp;
                                var3 = _closure2_slot0;
                                var1 = var5.prototype;
                                var4 = Object.create(var1, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var6 = 'i';
                                var8 = var4;
                                var7 = var3;
                                var1 = new var8[var5](var7, var6, var5);
                                var1 = var1 instanceof Object ? var1 : var4;
                                var _closure4_slot0 = var1;
                                var1 = _closure2_slot3;
                                var4 = _closure2_slot1;
                                var2 = var4.filter;
                                var0 = function(arg0) { // Environment: var0
                                    _fun86182: for (var _fun86182_ip = 0;;) switch (_fun86182_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var4 = var1.type;
                                            var2 = var4.match;
                                            var0 = _closure4_slot0;
                                            var0 = var2.bind(var4)(var0);
                                            var2 = null;
                                            var0 = var2 != var0;
                                            if (var0) {
                                                _fun86182_ip = 59;
                                                continue _fun86182
                                            }
                                        case 35:
                                            var6 = var1.title;
                                            var5 = var6.match;
                                            var4 = _closure4_slot0;
                                            var4 = var5.bind(var6)(var4);
                                            var0 = var2 != var4;
                                        case 59:
                                            if (var0) {
                                                _fun86182_ip = 95;
                                                continue _fun86182
                                            }
                                        case 62:
                                            var5 = var1.content;
                                            var4 = var2 == var5;
                                            var1 = undefined;
                                            if (var4) {
                                                _fun86182_ip = 91;
                                                continue _fun86182
                                            }
                                        case 76:
                                            var4 = var5.match;
                                            var3 = _closure4_slot0;
                                            var1 = var4.bind(var5)(var3);
                                        case 91:
                                            var0 = var2 != var1;
                                        case 95:
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var4)(var0);
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 9;
                                var0 = var4[var0];
                                var0 = var1.bind(var2)(var0);
                                var2 = var0.Storage;
                                var1 = var2.set;
                                var0 = 'push-notification-logs-query';
                                var0 = var1.bind(var2)(var0, var3);
                            case 126: // try_end0
                                _fun86181_ip = 130;
                                continue _fun86181;
                            case 128: // catch_target0
                                CatchBlockStart(arg_register = 0);
                            case 130:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 300;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var0 = _closure1_slot9;
        var10 = var0.bind(var3)();
        var _closure2_slot4 = var10;
        var2 = _closure1_slot8;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var10.wrap;
        var0.style = var4;
        var4 = {};
        var5 = var10.searchWrap;
        var4.style = var5;
        var7 = _closure1_slot7;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 11;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var12 = var5.SearchField;
        var5 = {
            'size': 'md',
            'placeholder': 'Filter (regex)'
        };
        var5.onChange = var15;
        var5.defaultValue = var13;
        var12 = var7.bind(var3)(var12, var5);
        var5 = new Array(2);
        var5[0] = var12;
        var12 = 12;
        var12 = var11[var12];
        var12 = var6.bind(var3)(var12);
        var13 = var12.PressableOpacity;
        var12 = {};
        var15 = var10.shareButton;
        var12.style = var15;
        var15 = 13;
        var16 = var11[var15];
        var16 = var6.bind(var3)(var16);
        var17 = var16.intl;
        var16 = var17.string;
        var15 = var11[var15];
        var15 = var6.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.leICvh;
        var15 = var16.bind(var17)(var15);
        var12.accessibilityLabel = var15;
        var15 = _closure1_slot3;
        var14 = function*() { // Environment: var8
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun86185: for (var _fun86185_ip = 0;;) switch (_fun86185_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86185_ip = 120;
                            continue _fun86185
                        }
                    case 7:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 40);
                    case 38:
                        return var1;
                    case 40:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun86185_ip = 117;
                            continue _fun86185
                        }
                    case 46:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 14;
                        var4 = var8[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.showShareActionSheet;
                        var4 = {};
                        var7 = _closure1_slot1;
                        var3 = 15;
                        var3 = var8[var3];
                        var7 = var7.bind(var2)(var3);
                        var3 = false;
                        var3 = var7.bind(var2)(var1, var3);
                        var4.message = var3;
                        var3 = 'push-notification-logs';
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 117:
                        return var1;
                    case 120:
                        return var0;
                }
            };
            return var0;
        };
        var14 = var15.bind(var3)(var14);
        var12.onPress = var14;
        var14 = 16;
        var14 = var11[var14];
        var14 = var6.bind(var3)(var14);
        var15 = var14.ShareIcon;
        var14 = {};
        var14 = var7.bind(var3)(var15, var14);
        var12.children = var14;
        var12 = var7.bind(var3)(var13, var12);
        var5[1] = var12;
        var4.children = var5;
        var5 = var2.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 17;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.FlashList;
        var5 = {};
        var10 = var10.list;
        var5.contentContainerStyle = var10;
        var5.data = var9;
        var8 = function arg0() {
            _fun86186: for (var _fun86186_ip = 0;;) switch (_fun86186_ip) {
                case 0:
                    var0 = arg0;
                    var9 = var0.item;
                    var4 = var0.index;
                    var0 = var9.silent;
                    var12 = '';
                    if (!var0) {
                        _fun86186_ip = 32;
                        continue _fun86186
                    }
                case 26:
                    var12 = '~silent~ ';
                case 32:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var11 = _closure2_slot4;
                    var5 = var11.log;
                    var1.style = var5;
                    var7 = _closure1_slot7;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 18;
                    var5 = var13[var8];
                    var0 = undefined;
                    var5 = var10.bind(var0)(var5);
                    var6 = var5.Text;
                    var5 = {};
                    var14 = var11.code;
                    var5.style = var14;
                    var14 = 'text-xs/normal';
                    var5.variant = var14;
                    var14 = global;
                    var16 = var14.Date;
                    var19 = var9.receivedTimestamp;
                    var15 = var16.prototype;
                    var15 = Object.create(var15, {
                        constructor: {
                            value: var16
                        }
                    });
                    var20 = var15;
                    var14 = new var20[var16](var19, var18);
                    var15 = var14 instanceof Object ? var14 : var15;
                    var14 = var15.toISOString;
                    var14 = var14.bind(var15)();
                    var5.children = var14;
                    var6 = var7.bind(var0)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = var13[var8];
                    var6 = var10.bind(var0)(var6);
                    var7 = var6.Text;
                    var6 = {};
                    var14 = var11.code;
                    var6.style = var14;
                    var14 = 'text-sm/normal';
                    var6.variant = var14;
                    var8 = var13[var8];
                    var8 = var10.bind(var0)(var8);
                    var10 = var8.Text;
                    var8 = {
                        'style': null,
                        'variant': 'text-sm/normal',
                        'color': 'text-brand'
                    };
                    var11 = var11.code;
                    var8.style = var11;
                    var11 = new Array(5);
                    var11[0] = var12;
                    var12 = '[';
                    var11[1] = var12;
                    var12 = var9.type;
                    var11[2] = var12;
                    var12 = ']';
                    var11[3] = var12;
                    var12 = ' ';
                    var11[4] = var12;
                    var8.children = var11;
                    var10 = var3.bind(var0)(var10, var8);
                    var8 = new Array(4);
                    var8[0] = var10;
                    var10 = var9.title;
                    var8[1] = var10;
                    var10 = ' - ';
                    var8[2] = var10;
                    var9 = var9.content;
                    var8[3] = var9;
                    var6.children = var8;
                    var6 = var3.bind(var0)(var7, var6);
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var5.renderItem = var8;
        var8 = 54;
        var5.estimatedItemSize = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 660, 33, 1297, 671, 5401, 587, 8855, 7037, 4905, 1234, 8299, 8856, 9219, 5761, 3943, 2]);