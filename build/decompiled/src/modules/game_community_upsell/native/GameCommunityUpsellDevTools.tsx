// modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun86409: for (var _fun86409_ip = 0;;) switch (_fun86409_ip) {
            case 0:
                var0 = _closure1_slot13;
                if (var0) {
                    _fun86409_ip = 43;
                    continue _fun86409
                }
            case 10:
                var0 = true;
                _closure1_slot13 = var0;
                var0 = global;
                var3 = var0.setTimeout;
                var2 = undefined;
                var1 = function() { // Environment: var0
                    var1 = false;
                    _closure1_slot13 = var1;
                    var2 = _closure1_slot12;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = 0;
                var0 = var3.bind(var2)(var1, var0);
            case 43:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun86412: for (var _fun86412_ip = 0;;) switch (_fun86412_ip) {
            case 0:
                var0 = global;
                var0 = var0.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var6 = var1;
                var0 = new var6[var0](var5);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var1.toLocaleTimeString;
                var4 = var0.bind(var1)();
                var3 = _closure1_slot11;
                var2 = var3.push;
                var1 = {};
                var1.timestamp = var4;
                var4 = arg0;
                var1.message = var4;
                var4 = arg1;
                var1.data = var4;
                var1 = var2.bind(var3)(var1);
                var1 = _closure1_slot11;
                var2 = var1.length;
                var1 = 50;
                if (!(var2 > var1)) {
                    _fun86412_ip = 116;
                    continue _fun86412
                }
            case 92:
                var3 = _closure1_slot11;
                var2 = var3.slice;
                var1 = -50;
                var1 = var2.bind(var3)(var1);
                _closure1_slot11 = var1;
            case 116:
                var1 = _closure1_slot15;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var11.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var12 = 1;
    var4 = var6[var12];
    var1 = arg3;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot5 = var4;
    var1 = var1.ScrollView;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot8 = var4;
    var1 = var1.jsxs;
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var6[var1];
    var7 = var11.bind(var0)(var1);
    var1 = var7.prototype;
    var4 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var16 = 'GameCommunityUpsell';
    var17 = var4;
    var1 = new var17[var7](var16, var15);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot10 = var1;
    var1 = new Array(0);
    var _closure1_slot11 = var1;
    var1 = new Array(0);
    var _closure1_slot12 = var1;
    var1 = false;
    var _closure1_slot13 = var1;
    var1 = {};
    var4 = function arg0, arg1() {
        var3 = arg0;
        var2 = arg1;
        var4 = _closure1_slot10;
        var1 = var4.log;
        var1 = var1.bind(var4)(var3, var2);
        var1 = _closure1_slot16;
        var0 = undefined;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var1.log = var4;
    var4 = function arg0, arg1() {
        var4 = arg0;
        var3 = arg1;
        var2 = _closure1_slot10;
        var1 = var2.error;
        var1 = var1.bind(var2)(var4, var3);
        var2 = _closure1_slot16;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'ERROR: ';
        var1 = var1.bind(var0)(var4);
        var0 = undefined;
        var1 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var1.error = var4;
    var4 = function arg0, arg1() {
        var4 = arg0;
        var3 = arg1;
        var2 = _closure1_slot10;
        var1 = var2.warn;
        var1 = var1.bind(var2)(var4, var3);
        var2 = _closure1_slot16;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'WARN: ';
        var1 = var1.bind(var0)(var4);
        var0 = undefined;
        var1 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var1.warn = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var9.flex = var12;
    var4.container = var9;
    var9 = {};
    var9.flex = var12;
    var4.scrollView = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.paddingHorizontal = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.paddingTop = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.paddingBottom = var12;
    var4.section = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.paddingHorizontal = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.paddingVertical = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var4.detailsContainer = var9;
    var9 = {
        'fontSize': 12,
        'lineHeight': 16,
        'color': null,
        'fontFamily': 'ggmono-400-normal'
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_STRONG;
    var9.color = var12;
    var4.detailText = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_CRITICAL;
    var9.color = var12;
    var4.errorText = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_POSITIVE;
    var9.color = var12;
    var4.successText = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_WARNING;
    var9.color = var12;
    var4.warningText = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.paddingHorizontal = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.paddingVertical = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var12;
    var4.logContainer = var9;
    var9 = {
        'fontSize': 11,
        'lineHeight': 14,
        'color': null,
        'fontFamily': 'ggmono-400-normal',
        'marginBottom': 4
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9.color = var10;
    var4.logEntry = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        _fun86416: for (var _fun86416_ip = 0;;) switch (_fun86416_ip) {
            case 0:
                var0 = _closure1_slot14;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var _closure2_slot0 = var14;
                var4 = _closure1_slot4;
                var1 = var4.useState;
                var0 = new Array(0);
                var0 = var1.bind(var4)(var0);
                var2 = _closure1_slot3;
                var1 = 2;
                var0 = var2.bind(var3)(var0, var1);
                var10 = 0;
                var27 = var0[var10];
                var21 = 1;
                var0 = var0[var21];
                var _closure2_slot1 = var0;
                var5 = var4.useState;
                var0 = true;
                var0 = var5.bind(var4)(var0);
                var0 = var2.bind(var3)(var0, var1);
                var8 = var0[var10];
                var0 = var0[var21];
                var _closure2_slot2 = var0;
                var5 = var4.useState;
                var0 = new Array(0);
                var0 = var5.bind(var4)(var0);
                var0 = var2.bind(var3)(var0, var1);
                var35 = var0[var10];
                var0 = var0[var21];
                var _closure2_slot3 = var0;
                var5 = var4.useState;
                var0 = _closure1_slot11;
                var0 = var5.bind(var4)(var0);
                var0 = var2.bind(var3)(var0, var1);
                var15 = var0[var10];
                var0 = var0[var21];
                var _closure2_slot4 = var0;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var0 = var5[var1];
                var12 = var2.bind(var3)(var0);
                var11 = var12.useStateFromStores;
                var0 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var0;
                var6 = function() { // Environment: var13
                    var1 = _closure1_slot7;
                    var0 = var1.isDebugMode;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var32 = var11.bind(var12)(var7, var6);
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.useStateFromStores;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var13
                    var1 = _closure1_slot7;
                    var0 = var1.getShownGameIds;
                    var0 = var0.bind(var1)();
                    var0 = var0.size;
                    return var0;
                };
                var36 = var2.bind(var5)(var1, var0);
                var2 = var4.useEffect;
                var1 = function() { // Environment: var13
                    var3 = function() {
                        var2 = _closure2_slot4;
                        var5 = _closure1_slot11;
                        var1 = new Array(0);
                        var4 = 0;
                        var6 = var1;
                        var0 = arraySpread(var6, var5, var4);
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot0 = var3;
                    var2 = _closure1_slot12;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot12;
                        var2 = var3.filter;
                        var0 = function(arg0) { // Environment: var0
                            var1 = _closure3_slot0;
                            var0 = arg0;
                            var0 = var0 !== var1;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        _closure1_slot12 = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var2 = var4.useCallback;
                var1 = function() { // Environment: var13
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.detectInstalledGamesWithDiagnostics;
                    var3 = var1.bind(var2)();
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        var3 = _closure2_slot1;
                        var0 = undefined;
                        var2 = arg0;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot2;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var22 = var2.bind(var4)(var1, var0);
                var _closure2_slot5 = var22;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var22;
                var0 = function() { // Environment: var13
                    _fun86425: for (var _fun86425_ip = 0;;) switch (_fun86425_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 10;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.isAndroid;
                            var3 = var3.bind(var4)();
                            if (var3) {
                                _fun86425_ip = 104;
                                continue _fun86425
                            }
                        case 49:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 11;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var4 = var2.SUPPORTED_GAMES;
                            var3 = var4.flatMap;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var0 = var0.iosUrlSchemes;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)(var2);
                        case 104:
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = var4.useCallback;
                var1 = function() { // Environment: var13
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.forceShowUpsell;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var31 = var2.bind(var4)(var1, var0);
                var2 = var4.useCallback;
                var1 = function() { // Environment: var13
                    var2 = _closure1_slot7;
                    var1 = var2.resetState;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.invalidateInstalledGamesCache;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var30 = var2.bind(var4)(var1, var0);
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var13
                    var2 = _closure1_slot7;
                    var1 = var2.setDebugMode;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = new Array(0);
                var23 = var2.bind(var4)(var1, var0);
                var2 = var4.useCallback;
                var1 = function() { // Environment: var13
                    var1 = new Array(0);
                    _closure1_slot11 = var1;
                    var1 = _closure1_slot15;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = new Array(0);
                var24 = var2.bind(var4)(var1, var0);
                var1 = var27.filter;
                var0 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.isInstalled;
                    return var0;
                };
                var0 = var1.bind(var27)(var0);
                var34 = var0.length;
                var26 = 'Checking...';
                if (var8) {
                    _fun86416_ip = 506;
                    continue _fun86416
                }
            case 439:
                var1 = var34 > var10;
                var0 = 'No supported games detected';
                if (!var1) {
                    _fun86416_ip = 503;
                    continue _fun86416
                }
            case 452:
                var6 = 's';
                if (!(var21 === var34)) {
                    _fun86416_ip = 464;
                    continue _fun86416
                }
            case 460:
                var6 = '';
            case 464:
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var43 = '';
                var41 = ' game';
                var39 = ' detected';
                var42 = var34;
                var40 = var6;
                var0 = var43[var5](var42, var41, var40, var39, var38);
            case 503:
                var26 = var0;
            case 506:
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var14.container;
                var0.style = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var14.scrollView;
                var4.style = var7;
                var7 = {};
                var11 = var14.section;
                var7.style = var11;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var16 = 14;
                var11 = var19[var16];
                var11 = var20.bind(var3)(var11);
                var12 = var11.TableRowGroup;
                var11 = {};
                var17 = 'Game Community Upsell';
                var11.title = var17;
                var18 = 15;
                var17 = var19[var18];
                var17 = var20.bind(var3)(var17);
                var25 = var17.TableRow;
                var17 = {
                    'label': 'Installed Games',
                    'subLabel': null,
                    'disabled': true
                };
                var17.subLabel = var26;
                var25 = var2.bind(var3)(var25, var17);
                var17 = new Array(6);
                var17[0] = var25;
                var19 = var19[var18];
                var19 = var20.bind(var3)(var19);
                var20 = var19.TableRow;
                var19 = {
                    'label': 'Games Shown to User',
                    'subLabel': null,
                    'disabled': true
                };
                var33 = 's';
                if (!(var21 === var36)) {
                    _fun86416_ip = 687;
                    continue _fun86416
                }
            case 683:
                var33 = '';
            case 687:
                var25 = global;
                var21 = var25.HermesInternal;
                var29 = var21.concat;
                var28 = '';
                var41 = ' game';
                var39 = ' already shown';
                var43 = var28;
                var42 = var36;
                var40 = var33;
                var21 = var43[var29](var42, var41, var40, var39, var38);
                var19.subLabel = var21;
                var19 = var2.bind(var3)(var20, var19);
                var17[1] = var19;
                var21 = _closure1_slot8;
                var29 = _closure1_slot0;
                var26 = _closure1_slot2;
                var19 = 16;
                var19 = var26[var19];
                var19 = var29.bind(var3)(var19);
                var20 = var19.TableSwitchRow;
                var19 = {
                    'label': 'Debug Mode',
                    'subLabel': 'Bypasses single-use check to allow repeated testing'
                };
                var19.value = var32;
                var19.onValueChange = var23;
                var19 = var21.bind(var3)(var20, var19);
                var17[2] = var19;
                var19 = var26[var18];
                var19 = var29.bind(var3)(var19);
                var20 = var19.TableRow;
                var19 = {
                    'label': 'Re-run Detection',
                    'subLabel': 'Check for installed games again'
                };
                var19.onPress = var22;
                var23 = 17;
                var22 = var26[var23];
                var22 = var29.bind(var3)(var22);
                var32 = var22.RefreshIcon;
                var22 = {};
                var22 = var21.bind(var3)(var32, var22);
                var19.icon = var22;
                var22 = 18;
                var32 = var26[var22];
                var32 = var29.bind(var3)(var32);
                var33 = var32.TableRowArrow;
                var32 = {};
                var32 = var21.bind(var3)(var33, var32);
                var19.trailing = var32;
                var19 = var21.bind(var3)(var20, var19);
                var17[3] = var19;
                var19 = var26[var18];
                var19 = var29.bind(var3)(var19);
                var20 = var19.TableRow;
                var19 = {
                    'label': 'Force Show Upsell',
                    'subLabel': 'Bypasses all checks and shows the upsell immediately with the highest priority detected game'
                };
                var19.onPress = var31;
                var31 = 19;
                var31 = var26[var31];
                var31 = var29.bind(var3)(var31);
                var32 = var31.PlayIcon;
                var31 = {};
                var31 = var21.bind(var3)(var32, var31);
                var19.icon = var31;
                var31 = var26[var22];
                var31 = var29.bind(var3)(var31);
                var32 = var31.TableRowArrow;
                var31 = {};
                var31 = var21.bind(var3)(var32, var31);
                var19.trailing = var31;
                var19 = var21.bind(var3)(var20, var19);
                var17[4] = var19;
                var19 = var26[var18];
                var19 = var29.bind(var3)(var19);
                var20 = var19.TableRow;
                var19 = {
                    'label': 'Reset Shown Games',
                    'subLabel': 'Clear the list of games that have been shown to this user'
                };
                var19.onPress = var30;
                var30 = var26[var23];
                var30 = var29.bind(var3)(var30);
                var31 = var30.RefreshIcon;
                var30 = {};
                var30 = var21.bind(var3)(var31, var30);
                var19.icon = var30;
                var26 = var26[var22];
                var26 = var29.bind(var3)(var26);
                var29 = var26.TableRowArrow;
                var26 = {};
                var26 = var21.bind(var3)(var29, var26);
                var19.trailing = var26;
                var19 = var21.bind(var3)(var20, var19);
                var17[5] = var19;
                var11.children = var17;
                var11 = var6.bind(var3)(var12, var11);
                var7.children = var11;
                var11 = var2.bind(var3)(var1, var7);
                var7 = new Array(6);
                var7[0] = var11;
                var11 = !var8;
                if (!var11) {
                    _fun86416_ip = 1459;
                    continue _fun86416
                }
            case 1148:
                var19 = _closure1_slot8;
                var17 = _closure1_slot5;
                var12 = {};
                var20 = var14.section;
                var12.style = var20;
                var26 = _closure1_slot9;
                var32 = _closure1_slot0;
                var33 = _closure1_slot2;
                var20 = var33[var16];
                var20 = var32.bind(var3)(var20);
                var21 = var20.TableRowGroup;
                var20 = {};
                var29 = 'Detection Details';
                var20.title = var29;
                var29 = var33[var18];
                var29 = var32.bind(var3)(var29);
                var30 = var29.TableRow;
                var29 = {
                    'label': 'Platform',
                    'subLabel': null,
                    'disabled': true
                };
                var31 = 10;
                var31 = var33[var31];
                var32 = var32.bind(var3)(var31);
                var31 = var32.isAndroid;
                var32 = var31.bind(var32)();
                var31 = 'iOS';
                if (!var32) {
                    _fun86416_ip = 1272;
                    continue _fun86416
                }
            case 1266:
                var31 = 'Android';
            case 1272:
                var29.subLabel = var31;
                var30 = var19.bind(var3)(var30, var29);
                var29 = new Array(3);
                var29[0] = var30;
                var32 = _closure1_slot8;
                var31 = _closure1_slot0;
                var30 = _closure1_slot2;
                var33 = var30[var18];
                var33 = var31.bind(var3)(var33);
                var36 = var33.TableRow;
                var33 = {
                    'label': 'Total Games Configured',
                    'subLabel': null,
                    'disabled': true
                };
                var38 = var25.String;
                var37 = 11;
                var37 = var30[var37];
                var37 = var31.bind(var3)(var37);
                var37 = var37.SUPPORTED_GAMES;
                var37 = var37.length;
                var37 = var38.bind(var3)(var37);
                var33.subLabel = var37;
                var33 = var32.bind(var3)(var36, var33);
                var29[1] = var33;
                var30 = var30[var18];
                var30 = var31.bind(var3)(var30);
                var31 = var30.TableRow;
                var30 = {
                    'label': 'Games Detected',
                    'subLabel': null,
                    'disabled': true
                };
                var33 = var25.String;
                var33 = var33.bind(var3)(var34);
                var30.subLabel = var33;
                var30 = var32.bind(var3)(var31, var30);
                var29[2] = var30;
                var20.children = var29;
                var20 = var26.bind(var3)(var21, var20);
                var12.children = var20;
                var11 = var19.bind(var3)(var17, var12);
            case 1459:
                var7[1] = var11;
                var11 = !var8;
                if (!var11) {
                    _fun86416_ip = 1478;
                    continue _fun86416
                }
            case 1469:
                var12 = var27.length;
                var11 = var12 > var10;
            case 1478:
                if (!var11) {
                    _fun86416_ip = 1649;
                    continue _fun86416
                }
            case 1484:
                var19 = _closure1_slot9;
                var17 = _closure1_slot5;
                var12 = {};
                var20 = var14.section;
                var12.style = var20;
                var26 = _closure1_slot8;
                var21 = _closure1_slot0;
                var33 = _closure1_slot2;
                var20 = 13;
                var20 = var33[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-xs/normal',
                    'style': null,
                    'children': 'Detailed Results:'
                };
                var30 = var14.detailText;
                var29 = new Array(2);
                var29[0] = var30;
                var30 = {};
                var32 = _closure1_slot1;
                var31 = 7;
                var31 = var33[var31];
                var31 = var32.bind(var3)(var31);
                var31 = var31.spacing;
                var31 = var31.PX_8;
                var30.paddingBottom = var31;
                var29[1] = var30;
                var20.style = var29;
                var21 = var26.bind(var3)(var21, var20);
                var20 = new Array(2);
                var20[0] = var21;
                var26 = var27.map;
                var21 = function(arg0) { // Environment: var13
                    _fun86432: for (var _fun86432_ip = 0;;) switch (_fun86432_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.game;
                            var15 = var1.isInstalled;
                            var13 = var1.overridden;
                            var8 = var1.schemeResults;
                            var1 = _closure2_slot0;
                            if (var15) {
                                _fun86432_ip = 45;
                                continue _fun86432
                            }
                        case 37:
                            var14 = var1.warningText;
                            _fun86432_ip = 51;
                            continue _fun86432;
                        case 45:
                            var14 = var1.successText;
                        case 51:
                            var4 = _closure1_slot9;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var9 = _closure2_slot0;
                            var1 = var9.detailsContainer;
                            var2.style = var1;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var12 = 13;
                            var5 = var1[var12];
                            var1 = undefined;
                            var5 = var7.bind(var1)(var5);
                            var7 = var5.Text;
                            var5 = {};
                            var11 = 'text-xs/normal';
                            var5.variant = var11;
                            var16 = var9.detailText;
                            var9 = new Array(2);
                            var9[0] = var16;
                            var9[1] = var14;
                            var5.style = var9;
                            var14 = var0.name;
                            var9 = new Array(4);
                            var9[0] = var14;
                            var14 = ' - ';
                            var9[1] = var14;
                            var14 = 'NOT INSTALLED';
                            if (!var15) {
                                _fun86432_ip = 175;
                                continue _fun86432
                            }
                        case 171:
                            var14 = 'INSTALLED';
                        case 175:
                            var9[2] = var14;
                            if (!var13) {
                                _fun86432_ip = 188;
                                continue _fun86432
                            }
                        case 182:
                            var13 = ' (DEBUG OVERRIDE)';
                        case 188:
                            var9[3] = var13;
                            var5.children = var9;
                            var7 = var4.bind(var1)(var7, var5);
                            var5 = new Array(5);
                            var5[0] = var7;
                            var9 = _closure1_slot9;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var13 = var6[var12];
                            var13 = var7.bind(var1)(var13);
                            var14 = var13.Text;
                            var13 = {};
                            var13.variant = var11;
                            var10 = _closure2_slot0;
                            var15 = var10.detailText;
                            var13.style = var15;
                            var16 = var0.id;
                            var15 = ['ID: '];
                            var15[1] = var16;
                            var13.children = var15;
                            var13 = var9.bind(var1)(var14, var13);
                            var5[1] = var13;
                            var13 = var6[var12];
                            var13 = var7.bind(var1)(var13);
                            var14 = var13.Text;
                            var13 = {};
                            var13.variant = var11;
                            var15 = var10.detailText;
                            var13.style = var15;
                            var16 = var0.guildName;
                            var15 = ['Guild: '];
                            var15[1] = var16;
                            var16 = ' (';
                            var15[2] = var16;
                            var16 = var0.guildId;
                            var15[3] = var16;
                            var16 = ')';
                            var15[4] = var16;
                            var13.children = var15;
                            var13 = var9.bind(var1)(var14, var13);
                            var5[2] = var13;
                            var6 = var6[var12];
                            var6 = var7.bind(var1)(var6);
                            var7 = var6.Text;
                            var6 = {};
                            var6.variant = var11;
                            var10 = var10.detailText;
                            var6.style = var10;
                            var10 = ['\n', 'Scheme Checks:'];
                            var6.children = var10;
                            var6 = var9.bind(var1)(var7, var6);
                            var5[3] = var6;
                            var7 = var8.map;
                            var6 = function(arg0) { // Environment: var6
                                _fun86433: for (var _fun86433_ip = 0;;) switch (_fun86433_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = var0.scheme;
                                        var1 = var0.isInstalled;
                                        var11 = var0.error;
                                        var0 = null;
                                        var6 = var0 !== var11;
                                        var15 = 'ERROR';
                                        if (var6) {
                                            _fun86433_ip = 51;
                                            continue _fun86433
                                        }
                                    case 33:
                                        var0 = 'NOT FOUND';
                                        if (!var1) {
                                            _fun86433_ip = 48;
                                            continue _fun86433
                                        }
                                    case 42:
                                        var0 = 'FOUND';
                                    case 48:
                                        var15 = var0;
                                    case 51:
                                        var0 = _closure2_slot0;
                                        if (var6) {
                                            _fun86433_ip = 80;
                                            continue _fun86433
                                        }
                                    case 61:
                                        if (var1) {
                                            _fun86433_ip = 72;
                                            continue _fun86433
                                        }
                                    case 64:
                                        var16 = var0.warningText;
                                        _fun86433_ip = 78;
                                        continue _fun86433;
                                    case 72:
                                        var16 = var0.successText;
                                    case 78:
                                        _fun86433_ip = 86;
                                        continue _fun86433;
                                    case 80:
                                        var16 = var0.errorText;
                                    case 86:
                                        var3 = _closure1_slot9;
                                        var9 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var13 = 13;
                                        var0 = var8[var13];
                                        var2 = undefined;
                                        var0 = var9.bind(var2)(var0);
                                        var1 = var0.Text;
                                        var0 = {};
                                        var12 = 'text-xs/normal';
                                        var0.variant = var12;
                                        var5 = _closure2_slot0;
                                        var5 = var5.detailText;
                                        var0.style = var5;
                                        var5 = ['  ', '• '];
                                        var5[2] = var4;
                                        var14 = ':';
                                        var5[3] = var14;
                                        var14 = ' ';
                                        var5[4] = var14;
                                        var14 = _closure1_slot8;
                                        var8 = var8[var13];
                                        var8 = var9.bind(var2)(var8);
                                        var9 = var8.Text;
                                        var8 = {};
                                        var8.variant = var12;
                                        var8.style = var16;
                                        var8.children = var15;
                                        var8 = var14.bind(var2)(var9, var8);
                                        var5[5] = var8;
                                        if (!var6) {
                                            _fun86433_ip = 293;
                                            continue _fun86433
                                        }
                                    case 223:
                                        var9 = _closure1_slot9;
                                        var8 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var7 = var7[var13];
                                        var7 = var8.bind(var2)(var7);
                                        var8 = var7.Text;
                                        var7 = {};
                                        var7.variant = var12;
                                        var10 = _closure2_slot0;
                                        var10 = var10.errorText;
                                        var7.style = var10;
                                        var10 = [' ', '- '];
                                        var10[2] = var11;
                                        var7.children = var10;
                                        var6 = var9.bind(var2)(var8, var7);
                                    case 293:
                                        var5[6] = var6;
                                        var0.children = var5;
                                        var0 = var3.bind(var2)(var1, var0, var4);
                                        return var0;
                                }
                            };
                            var6 = var7.bind(var8)(var6);
                            var5[4] = var6;
                            var2.children = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var21 = var26.bind(var27)(var21);
                var20[1] = var21;
                var12.children = var20;
                var11 = var19.bind(var3)(var17, var12);
            case 1649:
                var7[2] = var11;
                var8 = !var8;
                if (!var8) {
                    _fun86416_ip = 1692;
                    continue _fun86416
                }
            case 1659:
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 10;
                var11 = var17[var11];
                var12 = var12.bind(var3)(var11);
                var11 = var12.isAndroid;
                var11 = var11.bind(var12)();
                var8 = !var11;
            case 1692:
                if (!var8) {
                    _fun86416_ip = 1704;
                    continue _fun86416
                }
            case 1695:
                var11 = var35.length;
                var8 = var11 > var10;
            case 1704:
                if (!var8) {
                    _fun86416_ip = 2044;
                    continue _fun86416
                }
            case 1710:
                var17 = _closure1_slot9;
                var12 = _closure1_slot5;
                var11 = {};
                var19 = var14.section;
                var11.style = var19;
                var29 = _closure1_slot8;
                var27 = _closure1_slot0;
                var34 = _closure1_slot2;
                var26 = 13;
                var19 = var34[var26];
                var19 = var27.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'variant': 'text-xs/normal',
                    'style': null,
                    'children': 'Info.plist Validation:'
                };
                var30 = var14.detailText;
                var21 = new Array(2);
                var21[0] = var30;
                var30 = {};
                var33 = _closure1_slot1;
                var32 = 7;
                var31 = var34[var32];
                var31 = var33.bind(var3)(var31);
                var31 = var31.spacing;
                var31 = var31.PX_8;
                var30.paddingBottom = var31;
                var21[1] = var30;
                var19.style = var21;
                var20 = var29.bind(var3)(var20, var19);
                var19 = new Array(2);
                var19[0] = var20;
                var20 = {};
                var21 = var14.detailsContainer;
                var20.style = var21;
                var21 = var34[var26];
                var21 = var27.bind(var3)(var21);
                var30 = var21.Text;
                var21 = {
                    'variant': 'text-xs/normal',
                    'style': null,
                    'children': 'Expected LSApplicationQueriesSchemes:'
                };
                var31 = var14.detailText;
                var21.style = var31;
                var30 = var29.bind(var3)(var30, var21);
                var21 = new Array(3);
                var21[0] = var30;
                var31 = var35.map;
                var30 = function(arg0) { // Environment: var13
                    var4 = arg0;
                    var3 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {};
                    var5 = 'text-xs/normal';
                    var0.variant = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.detailText;
                    var0.style = var5;
                    var5 = ['  ', '• '];
                    var5[2] = var4;
                    var0.children = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var30 = var31.bind(var35)(var30);
                var21[1] = var30;
                var26 = var34[var26];
                var26 = var27.bind(var3)(var26);
                var27 = var26.Text;
                var26 = {
                    'variant': 'text-xs/normal',
                    'style': null,
                    'children': 'Check discord_ios/iOS/Info.plist to verify these schemes are present.'
                };
                var31 = var14.detailText;
                var30 = new Array(2);
                var30[0] = var31;
                var31 = {};
                var32 = var34[var32];
                var32 = var33.bind(var3)(var32);
                var32 = var32.spacing;
                var32 = var32.PX_8;
                var31.paddingTop = var32;
                var30[1] = var31;
                var26.style = var30;
                var26 = var29.bind(var3)(var27, var26);
                var21[2] = var26;
                var20.children = var21;
                var20 = var17.bind(var3)(var12, var20);
                var19[1] = var20;
                var11.children = var19;
                var8 = var17.bind(var3)(var12, var11);
            case 2044:
                var7[3] = var8;
                var12 = _closure1_slot8;
                var11 = _closure1_slot5;
                var8 = {};
                var17 = var14.section;
                var8.style = var17;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = var20[var16];
                var16 = var21.bind(var3)(var16);
                var17 = var16.TableRowGroup;
                var16 = {};
                var19 = 'Debug Logs';
                var16.title = var19;
                var18 = var20[var18];
                var18 = var21.bind(var3)(var18);
                var19 = var18.TableRow;
                var18 = {};
                var26 = 'Clear Logs';
                var18.label = var26;
                var27 = var15.length;
                var25 = var25.HermesInternal;
                var26 = var25.concat;
                var25 = ' log entries';
                var25 = var26.bind(var28)(var27, var25);
                var18.subLabel = var25;
                var18.onPress = var24;
                var23 = var20[var23];
                var23 = var21.bind(var3)(var23);
                var24 = var23.RefreshIcon;
                var23 = {};
                var23 = var12.bind(var3)(var24, var23);
                var18.icon = var23;
                var20 = var20[var22];
                var20 = var21.bind(var3)(var20);
                var21 = var20.TableRowArrow;
                var20 = {};
                var20 = var12.bind(var3)(var21, var20);
                var18.trailing = var20;
                var18 = var12.bind(var3)(var19, var18);
                var16.children = var18;
                var16 = var12.bind(var3)(var17, var16);
                var8.children = var16;
                var8 = var12.bind(var3)(var11, var8);
                var7[4] = var8;
                var8 = var15.length;
                var8 = var8 > var10;
                if (!var8) {
                    _fun86416_ip = 2331;
                    continue _fun86416
                }
            case 2263:
                var11 = _closure1_slot8;
                var10 = _closure1_slot5;
                var9 = {};
                var12 = var14.section;
                var9.style = var12;
                var12 = {};
                var14 = var14.logContainer;
                var12.style = var14;
                var14 = var15.map;
                var13 = function(arg0, arg1) { // Environment: var13
                    _fun86435: for (var _fun86435_ip = 0;;) switch (_fun86435_ip) {
                        case 0:
                            var7 = arg0;
                            var4 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.Text;
                            var1 = {};
                            var0 = 'text-xs/normal';
                            var1.variant = var0;
                            var0 = _closure2_slot0;
                            var0 = var0.logEntry;
                            var1.style = var0;
                            var5 = var7.timestamp;
                            var0 = ['['];
                            var0[1] = var5;
                            var5 = '] ';
                            var0[2] = var5;
                            var5 = var7.message;
                            var0[3] = var5;
                            var6 = var7.data;
                            var5 = null;
                            var5 = var5 != var6;
                            if (!var5) {
                                _fun86435_ip = 165;
                                continue _fun86435
                            }
                        case 119:
                            var6 = global;
                            var9 = var6.JSON;
                            var8 = var9.stringify;
                            var7 = var7.data;
                            var8 = var8.bind(var9)(var7);
                            var6 = var6.HermesInternal;
                            var7 = var6.concat;
                            var6 = ' ';
                            var5 = var7.bind(var6)(var8);
                        case 165:
                            var0[4] = var5;
                            var1.children = var0;
                            var0 = arg1;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var13 = var14.bind(var15)(var13);
                var12.children = var13;
                var12 = var11.bind(var3)(var10, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 2331:
                var7[5] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.debugLogger = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 11165, 33, 3, 1297, 671, 566, 11166, 478, 11167, 11168, 3941, 5363, 4898, 5416, 10765, 4906, 5871, 2]);