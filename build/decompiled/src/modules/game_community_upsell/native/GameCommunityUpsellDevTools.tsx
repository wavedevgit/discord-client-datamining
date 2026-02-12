// modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun85894: for (var _fun85894_ip = 0;;) switch (_fun85894_ip) {
            case 0:
                var0 = _closure1_slot13;
                if (var0) {
                    _fun85894_ip = 43;
                    continue _fun85894
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
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun85897: for (var _fun85897_ip = 0;;) switch (_fun85897_ip) {
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
                    _fun85897_ip = 116;
                    continue _fun85897
                }
            case 92:
                var3 = _closure1_slot11;
                var2 = var3.slice;
                var1 = -50;
                var1 = var2.bind(var3)(var1);
                _closure1_slot11 = var1;
            case 116:
                var1 = _closure1_slot23;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot24 = var0;
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
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var13 = 1;
    var4 = var6[var13];
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
    var1 = var12.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.jsx;
    var _closure1_slot8 = var8;
    var1 = var1.jsxs;
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var6[var1];
    var7 = var12.bind(var0)(var1);
    var1 = var7.prototype;
    var4 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var17 = 'GameCommunityUpsell';
    var18 = var4;
    var1 = new var18[var7](var17, var16);
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
        var1 = _closure1_slot24;
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
        var2 = _closure1_slot24;
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
        var2 = _closure1_slot24;
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
    var9 = var5.bind(var0)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 7;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var14;
    var10.flex = var13;
    var4.container = var10;
    var10 = {};
    var10.flex = var13;
    var4.scrollView = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.paddingHorizontal = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.paddingTop = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10.paddingBottom = var13;
    var4.section = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.paddingHorizontal = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10.paddingVertical = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var13;
    var4.detailsContainer = var10;
    var10 = {
        'fontSize': 12,
        'lineHeight': 16,
        'color': null,
        'fontFamily': 'ggmono-400-normal'
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_STRONG;
    var10.color = var13;
    var4.detailText = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_FEEDBACK_CRITICAL;
    var10.color = var13;
    var4.errorText = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_FEEDBACK_POSITIVE;
    var10.color = var13;
    var4.successText = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_FEEDBACK_WARNING;
    var10.color = var13;
    var4.warningText = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.paddingHorizontal = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10.paddingVertical = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var10.backgroundColor = var13;
    var4.logContainer = var10;
    var10 = {
        'fontSize': 11,
        'lineHeight': 14,
        'color': null,
        'fontFamily': 'ggmono-400-normal',
        'marginBottom': 4
    };
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var10.color = var11;
    var4.logEntry = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var7 = 8;
    var4 = var6[var7];
    var4 = var5.bind(var0)(var4);
    var9 = var4.RefreshIcon;
    var4 = {};
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot15 = var4;
    var4 = 9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var10 = var9.TableRowArrow;
    var9 = {};
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot16 = var9;
    var9 = 10;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var10 = var9.PlayIcon;
    var9 = {};
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot17 = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var10 = var9.TableRowArrow;
    var9 = {};
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot18 = var9;
    var9 = var6[var7];
    var9 = var5.bind(var0)(var9);
    var10 = var9.RefreshIcon;
    var9 = {};
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot19 = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var10 = var9.TableRowArrow;
    var9 = {};
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot20 = var9;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var9 = var7.RefreshIcon;
    var7 = {};
    var7 = var8.bind(var0)(var9, var7);
    var _closure1_slot21 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.TableRowArrow;
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot22 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        _fun85901: for (var _fun85901_ip = 0;;) switch (_fun85901_ip) {
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
                var26 = var0[var10];
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
                var33 = var0[var10];
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
                var1 = 11;
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
                var34 = var11.bind(var12)(var7, var6);
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
                    var1 = 12;
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
                var30 = var2.bind(var4)(var1, var0);
                var _closure2_slot5 = var30;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var30;
                var0 = function() { // Environment: var13
                    _fun85910: for (var _fun85910_ip = 0;;) switch (_fun85910_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 13;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.isAndroid;
                            var3 = var3.bind(var4)();
                            if (var3) {
                                _fun85910_ip = 104;
                                continue _fun85910
                            }
                        case 49:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 14;
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
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.forceShowUpsell;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var29 = var2.bind(var4)(var1, var0);
                var2 = var4.useCallback;
                var1 = function() { // Environment: var13
                    var2 = _closure1_slot7;
                    var1 = var2.resetState;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.invalidateInstalledGamesCache;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var25 = var2.bind(var4)(var1, var0);
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
                var31 = var2.bind(var4)(var1, var0);
                var2 = var4.useCallback;
                var1 = function() { // Environment: var13
                    var1 = new Array(0);
                    _closure1_slot11 = var1;
                    var1 = _closure1_slot23;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = new Array(0);
                var20 = var2.bind(var4)(var1, var0);
                var1 = var26.filter;
                var0 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.isInstalled;
                    return var0;
                };
                var0 = var1.bind(var26)(var0);
                var32 = var0.length;
                var24 = 'Checking...';
                if (var8) {
                    _fun85901_ip = 506;
                    continue _fun85901
                }
            case 439:
                var1 = var32 > var10;
                var0 = 'No supported games detected';
                if (!var1) {
                    _fun85901_ip = 503;
                    continue _fun85901
                }
            case 452:
                var6 = 's';
                if (!(var21 === var32)) {
                    _fun85901_ip = 464;
                    continue _fun85901
                }
            case 460:
                var6 = '';
            case 464:
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var41 = '';
                var39 = ' game';
                var37 = ' detected';
                var40 = var32;
                var38 = var6;
                var0 = var41[var5](var40, var39, var38, var37, var36);
            case 503:
                var24 = var0;
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
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var16 = 17;
                var11 = var18[var16];
                var11 = var19.bind(var3)(var11);
                var12 = var11.TableRowGroup;
                var11 = {};
                var17 = 'Game Community Upsell';
                var11.title = var17;
                var22 = 18;
                var17 = var18[var22];
                var17 = var19.bind(var3)(var17);
                var23 = var17.TableRow;
                var17 = {
                    'label': 'Installed Games',
                    'subLabel': null,
                    'disabled': true
                };
                var17.subLabel = var24;
                var23 = var2.bind(var3)(var23, var17);
                var17 = new Array(6);
                var17[0] = var23;
                var18 = var18[var22];
                var18 = var19.bind(var3)(var18);
                var19 = var18.TableRow;
                var18 = {
                    'label': 'Games Shown to User',
                    'subLabel': null,
                    'disabled': true
                };
                var35 = 's';
                if (!(var21 === var36)) {
                    _fun85901_ip = 687;
                    continue _fun85901
                }
            case 683:
                var35 = '';
            case 687:
                var21 = global;
                var23 = var21.HermesInternal;
                var28 = var23.concat;
                var24 = '';
                var39 = ' game';
                var37 = ' already shown';
                var41 = var24;
                var40 = var36;
                var38 = var35;
                var23 = var41[var28](var40, var39, var38, var37, var36);
                var18.subLabel = var23;
                var18 = var2.bind(var3)(var19, var18);
                var17[1] = var18;
                var23 = _closure1_slot8;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var27 = 19;
                var27 = var18[var27];
                var27 = var19.bind(var3)(var27);
                var28 = var27.TableSwitchRow;
                var27 = {
                    'label': 'Debug Mode',
                    'subLabel': 'Bypasses single-use check to allow repeated testing'
                };
                var27.value = var34;
                var27.onValueChange = var31;
                var27 = var23.bind(var3)(var28, var27);
                var17[2] = var27;
                var27 = var18[var22];
                var27 = var19.bind(var3)(var27);
                var28 = var27.TableRow;
                var27 = {
                    'label': 'Re-run Detection',
                    'subLabel': 'Check for installed games again'
                };
                var27.onPress = var30;
                var30 = _closure1_slot15;
                var27.icon = var30;
                var30 = _closure1_slot16;
                var27.trailing = var30;
                var27 = var23.bind(var3)(var28, var27);
                var17[3] = var27;
                var27 = var18[var22];
                var27 = var19.bind(var3)(var27);
                var28 = var27.TableRow;
                var27 = {
                    'label': 'Force Show Upsell',
                    'subLabel': 'Bypasses all checks and shows the upsell immediately with the highest priority detected game'
                };
                var27.onPress = var29;
                var29 = _closure1_slot17;
                var27.icon = var29;
                var29 = _closure1_slot18;
                var27.trailing = var29;
                var27 = var23.bind(var3)(var28, var27);
                var17[4] = var27;
                var18 = var18[var22];
                var18 = var19.bind(var3)(var18);
                var19 = var18.TableRow;
                var18 = {
                    'label': 'Reset Shown Games',
                    'subLabel': 'Clear the list of games that have been shown to this user'
                };
                var18.onPress = var25;
                var25 = _closure1_slot19;
                var18.icon = var25;
                var25 = _closure1_slot20;
                var18.trailing = var25;
                var18 = var23.bind(var3)(var19, var18);
                var17[5] = var18;
                var11.children = var17;
                var11 = var6.bind(var3)(var12, var11);
                var7.children = var11;
                var11 = var2.bind(var3)(var1, var7);
                var7 = new Array(6);
                var7[0] = var11;
                var11 = !var8;
                if (!var11) {
                    _fun85901_ip = 1336;
                    continue _fun85901
                }
            case 1025:
                var18 = _closure1_slot8;
                var17 = _closure1_slot5;
                var12 = {};
                var19 = var14.section;
                var12.style = var19;
                var25 = _closure1_slot9;
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var19 = var31[var16];
                var19 = var30.bind(var3)(var19);
                var23 = var19.TableRowGroup;
                var19 = {};
                var27 = 'Detection Details';
                var19.title = var27;
                var27 = var31[var22];
                var27 = var30.bind(var3)(var27);
                var28 = var27.TableRow;
                var27 = {
                    'label': 'Platform',
                    'subLabel': null,
                    'disabled': true
                };
                var29 = 13;
                var29 = var31[var29];
                var30 = var30.bind(var3)(var29);
                var29 = var30.isAndroid;
                var30 = var29.bind(var30)();
                var29 = 'iOS';
                if (!var30) {
                    _fun85901_ip = 1149;
                    continue _fun85901
                }
            case 1143:
                var29 = 'Android';
            case 1149:
                var27.subLabel = var29;
                var28 = var18.bind(var3)(var28, var27);
                var27 = new Array(3);
                var27[0] = var28;
                var30 = _closure1_slot8;
                var29 = _closure1_slot0;
                var28 = _closure1_slot2;
                var31 = var28[var22];
                var31 = var29.bind(var3)(var31);
                var34 = var31.TableRow;
                var31 = {
                    'label': 'Total Games Configured',
                    'subLabel': null,
                    'disabled': true
                };
                var36 = var21.String;
                var35 = 14;
                var35 = var28[var35];
                var35 = var29.bind(var3)(var35);
                var35 = var35.SUPPORTED_GAMES;
                var35 = var35.length;
                var35 = var36.bind(var3)(var35);
                var31.subLabel = var35;
                var31 = var30.bind(var3)(var34, var31);
                var27[1] = var31;
                var28 = var28[var22];
                var28 = var29.bind(var3)(var28);
                var29 = var28.TableRow;
                var28 = {
                    'label': 'Games Detected',
                    'subLabel': null,
                    'disabled': true
                };
                var31 = var21.String;
                var31 = var31.bind(var3)(var32);
                var28.subLabel = var31;
                var28 = var30.bind(var3)(var29, var28);
                var27[2] = var28;
                var19.children = var27;
                var19 = var25.bind(var3)(var23, var19);
                var12.children = var19;
                var11 = var18.bind(var3)(var17, var12);
            case 1336:
                var7[1] = var11;
                var11 = !var8;
                if (!var11) {
                    _fun85901_ip = 1355;
                    continue _fun85901
                }
            case 1346:
                var12 = var26.length;
                var11 = var12 > var10;
            case 1355:
                if (!var11) {
                    _fun85901_ip = 1526;
                    continue _fun85901
                }
            case 1361:
                var18 = _closure1_slot9;
                var17 = _closure1_slot5;
                var12 = {};
                var19 = var14.section;
                var12.style = var19;
                var25 = _closure1_slot8;
                var23 = _closure1_slot0;
                var31 = _closure1_slot2;
                var19 = 16;
                var19 = var31[var19];
                var19 = var23.bind(var3)(var19);
                var23 = var19.Text;
                var19 = {
                    'variant': 'text-xs/normal',
                    'style': null,
                    'children': 'Detailed Results:'
                };
                var28 = var14.detailText;
                var27 = new Array(2);
                var27[0] = var28;
                var28 = {};
                var30 = _closure1_slot1;
                var29 = 7;
                var29 = var31[var29];
                var29 = var30.bind(var3)(var29);
                var29 = var29.spacing;
                var29 = var29.PX_8;
                var28.paddingBottom = var29;
                var27[1] = var28;
                var19.style = var27;
                var23 = var25.bind(var3)(var23, var19);
                var19 = new Array(2);
                var19[0] = var23;
                var25 = var26.map;
                var23 = function(arg0) { // Environment: var13
                    _fun85917: for (var _fun85917_ip = 0;;) switch (_fun85917_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.game;
                            var15 = var1.isInstalled;
                            var13 = var1.overridden;
                            var8 = var1.schemeResults;
                            var1 = _closure2_slot0;
                            if (var15) {
                                _fun85917_ip = 45;
                                continue _fun85917
                            }
                        case 37:
                            var14 = var1.warningText;
                            _fun85917_ip = 51;
                            continue _fun85917;
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
                            var12 = 16;
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
                                _fun85917_ip = 175;
                                continue _fun85917
                            }
                        case 171:
                            var14 = 'INSTALLED';
                        case 175:
                            var9[2] = var14;
                            if (!var13) {
                                _fun85917_ip = 188;
                                continue _fun85917
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
                                _fun85918: for (var _fun85918_ip = 0;;) switch (_fun85918_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = var0.scheme;
                                        var1 = var0.isInstalled;
                                        var11 = var0.error;
                                        var0 = null;
                                        var6 = var0 !== var11;
                                        var15 = 'ERROR';
                                        if (var6) {
                                            _fun85918_ip = 51;
                                            continue _fun85918
                                        }
                                    case 33:
                                        var0 = 'NOT FOUND';
                                        if (!var1) {
                                            _fun85918_ip = 48;
                                            continue _fun85918
                                        }
                                    case 42:
                                        var0 = 'FOUND';
                                    case 48:
                                        var15 = var0;
                                    case 51:
                                        var0 = _closure2_slot0;
                                        if (var6) {
                                            _fun85918_ip = 80;
                                            continue _fun85918
                                        }
                                    case 61:
                                        if (var1) {
                                            _fun85918_ip = 72;
                                            continue _fun85918
                                        }
                                    case 64:
                                        var16 = var0.warningText;
                                        _fun85918_ip = 78;
                                        continue _fun85918;
                                    case 72:
                                        var16 = var0.successText;
                                    case 78:
                                        _fun85918_ip = 86;
                                        continue _fun85918;
                                    case 80:
                                        var16 = var0.errorText;
                                    case 86:
                                        var3 = _closure1_slot9;
                                        var9 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var13 = 16;
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
                                            _fun85918_ip = 293;
                                            continue _fun85918
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
                var23 = var25.bind(var26)(var23);
                var19[1] = var23;
                var12.children = var19;
                var11 = var18.bind(var3)(var17, var12);
            case 1526:
                var7[2] = var11;
                var8 = !var8;
                if (!var8) {
                    _fun85901_ip = 1569;
                    continue _fun85901
                }
            case 1536:
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 13;
                var11 = var17[var11];
                var12 = var12.bind(var3)(var11);
                var11 = var12.isAndroid;
                var11 = var11.bind(var12)();
                var8 = !var11;
            case 1569:
                if (!var8) {
                    _fun85901_ip = 1581;
                    continue _fun85901
                }
            case 1572:
                var11 = var33.length;
                var8 = var11 > var10;
            case 1581:
                if (!var8) {
                    _fun85901_ip = 1921;
                    continue _fun85901
                }
            case 1587:
                var17 = _closure1_slot9;
                var12 = _closure1_slot5;
                var11 = {};
                var18 = var14.section;
                var11.style = var18;
                var27 = _closure1_slot8;
                var26 = _closure1_slot0;
                var32 = _closure1_slot2;
                var25 = 16;
                var18 = var32[var25];
                var18 = var26.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'text-xs/normal',
                    'style': null,
                    'children': 'Info.plist Validation:'
                };
                var28 = var14.detailText;
                var23 = new Array(2);
                var23[0] = var28;
                var28 = {};
                var31 = _closure1_slot1;
                var30 = 7;
                var29 = var32[var30];
                var29 = var31.bind(var3)(var29);
                var29 = var29.spacing;
                var29 = var29.PX_8;
                var28.paddingBottom = var29;
                var23[1] = var28;
                var18.style = var23;
                var19 = var27.bind(var3)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var19 = {};
                var23 = var14.detailsContainer;
                var19.style = var23;
                var23 = var32[var25];
                var23 = var26.bind(var3)(var23);
                var28 = var23.Text;
                var23 = {
                    'variant': 'text-xs/normal',
                    'style': null,
                    'children': 'Expected LSApplicationQueriesSchemes:'
                };
                var29 = var14.detailText;
                var23.style = var29;
                var28 = var27.bind(var3)(var28, var23);
                var23 = new Array(3);
                var23[0] = var28;
                var29 = var33.map;
                var28 = function(arg0) { // Environment: var13
                    var4 = arg0;
                    var3 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 16;
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
                var28 = var29.bind(var33)(var28);
                var23[1] = var28;
                var25 = var32[var25];
                var25 = var26.bind(var3)(var25);
                var26 = var25.Text;
                var25 = {
                    'variant': 'text-xs/normal',
                    'style': null,
                    'children': 'Check discord_ios/iOS/Info.plist to verify these schemes are present.'
                };
                var29 = var14.detailText;
                var28 = new Array(2);
                var28[0] = var29;
                var29 = {};
                var30 = var32[var30];
                var30 = var31.bind(var3)(var30);
                var30 = var30.spacing;
                var30 = var30.PX_8;
                var29.paddingTop = var30;
                var28[1] = var29;
                var25.style = var28;
                var25 = var27.bind(var3)(var26, var25);
                var23[2] = var25;
                var19.children = var23;
                var19 = var17.bind(var3)(var12, var19);
                var18[1] = var19;
                var11.children = var18;
                var8 = var17.bind(var3)(var12, var11);
            case 1921:
                var7[3] = var8;
                var12 = _closure1_slot8;
                var11 = _closure1_slot5;
                var8 = {};
                var17 = var14.section;
                var8.style = var17;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var16 = var18[var16];
                var16 = var19.bind(var3)(var16);
                var17 = var16.TableRowGroup;
                var16 = {};
                var23 = 'Debug Logs';
                var16.title = var23;
                var18 = var18[var22];
                var18 = var19.bind(var3)(var18);
                var19 = var18.TableRow;
                var18 = {};
                var22 = 'Clear Logs';
                var18.label = var22;
                var23 = var15.length;
                var21 = var21.HermesInternal;
                var22 = var21.concat;
                var21 = ' log entries';
                var21 = var22.bind(var24)(var23, var21);
                var18.subLabel = var21;
                var18.onPress = var20;
                var20 = _closure1_slot21;
                var18.icon = var20;
                var20 = _closure1_slot22;
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
                    _fun85901_ip = 2170;
                    continue _fun85901
                }
            case 2102:
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
                    _fun85920: for (var _fun85920_ip = 0;;) switch (_fun85920_ip) {
                        case 0:
                            var7 = arg0;
                            var4 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 16;
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
                                _fun85920_ip = 165;
                                continue _fun85920
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
            case 2170:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 11044, 33, 3, 1297, 671, 10613, 4884, 5948, 566, 11045, 478, 11046, 11047, 3938, 5343, 4876, 5344, 2]);