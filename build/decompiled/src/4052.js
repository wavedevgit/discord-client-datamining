// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var0 = ['children', 'headerConfig', 'activityState', 'shouldFreeze', 'stackPresentation', 'sheetAllowedDetents', 'contentStyle', 'style', 'screenId', 'onHeaderHeightChange', 'unstable_sheetFooter'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var8 = 1;
    var5 = var7[var8];
    var1 = metroImportAll;
    var5 = var1.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var1 = 2;
    var1 = var7[var1];
    var1 = var3.bind(var0)(var1);
    var6 = var1.Platform;
    var _closure1_slot6 = var6;
    var6 = var1.StyleSheet;
    var1 = 3;
    var1 = var7[var1];
    var1 = var3.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot7 = var3;
    var3 = var1.Fragment;
    var _closure1_slot8 = var3;
    var1 = var1.jsxs;
    var _closure1_slot9 = var1;
    var3 = var5.forwardRef;
    var1 = function arg0, arg1() {
        _fun37529: for (var _fun37529_ip = 0;;) switch (_fun37529_ip) {
            case 0:
                var6 = arg0;
                var19 = var6.children;
                var13 = var6.headerConfig;
                var16 = var6.activityState;
                var15 = var6.shouldFreeze;
                var2 = var6.stackPresentation;
                var9 = var6.sheetAllowedDetents;
                var24 = var6.contentStyle;
                var10 = var6.style;
                var14 = var6.screenId;
                var _closure2_slot0 = var14;
                var0 = var6.onHeaderHeightChange;
                var22 = var6.unstable_sheetFooter;
                var5 = _closure1_slot4;
                var4 = _closure1_slot3;
                var3 = undefined;
                var7 = var5.bind(var3)(var6, var4);
                var8 = _closure1_slot5;
                var4 = var8.useRef;
                var11 = null;
                var4 = var4.bind(var8)(var11);
                var _closure2_slot1 = var4;
                var5 = var8.useContext;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 4;
                var4 = var12[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.RNSScreensRefContext;
                var4 = var5.bind(var8)(var4);
                var _closure2_slot2 = var4;
                var6 = var8.useImperativeHandle;
                var5 = arg1;
                var4 = function() { // Environment: var17
                    var0 = _closure2_slot1;
                    var0 = var0.current;
                    return var0;
                };
                var4 = var6.bind(var8)(var5, var4);
                var4 = var11 != var2;
                var12 = 'push';
                if (!var4) {
                    _fun37529_ip = 189;
                    continue _fun37529
                }
            case 186:
                var12 = var2;
            case 189:
                var2 = var11 == var13;
                var4 = undefined;
                if (var2) {
                    _fun37529_ip = 204;
                    continue _fun37529
                }
            case 198:
                var4 = var13.hidden;
            case 204:
                var2 = var11 != var4;
                if (!var2) {
                    _fun37529_ip = 214;
                    continue _fun37529
                }
            case 211:
                var2 = var4;
            case 214:
                var _closure2_slot3 = var2;
                var6 = _closure1_slot5;
                var4 = var6.useRef;
                var4 = var4.bind(var6)(var2);
                var _closure2_slot4 = var4;
                var5 = var6.useEffect;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var12;
                var2 = function() { // Environment: var17
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = false;
                    var1 = "Dynamically changing header's visibility in modals will result in remounting the screen and losing all local state.";
                    var1 = var3.bind(var0)(var2, var1);
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot3;
                    var2.current = var1;
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var4);
                var4 = var11 == var7;
                var2 = undefined;
                if (var4) {
                    _fun37529_ip = 279;
                    continue _fun37529
                }
            case 273:
                var2 = var7.scrollEdgeEffects;
            case 279:
                var5 = var3 === var2;
                if (var5) {
                    _fun37529_ip = 326;
                    continue _fun37529
                }
            case 286:
                var2 = global;
                var6 = var2.Object;
                var4 = var6.values;
                var2 = var7.scrollEdgeEffects;
                var6 = var4.bind(var6)(var2);
                var4 = var6.some;
                var2 = function(arg0) { // Environment: var17
                    var1 = 'hidden';
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var5 = var4.bind(var6)(var2);
            case 326:
                var4 = var11 == var13;
                var2 = undefined;
                if (var4) {
                    _fun37529_ip = 341;
                    continue _fun37529
                }
            case 335:
                var2 = var13.blurEffect;
            case 341:
                var2 = var3 !== var2;
                if (!var2) {
                    _fun37529_ip = 362;
                    continue _fun37529
                }
            case 348:
                var6 = var13.blurEffect;
                var4 = 'none';
                var2 = var4 !== var6;
            case 362:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 5;
                var4 = var8[var4];
                var4 = var6.bind(var3)(var4);
                if (!var5) {
                    _fun37529_ip = 388;
                    continue _fun37529
                }
            case 385:
                var5 = var2;
            case 388:
                if (!var5) {
                    _fun37529_ip = 393;
                    continue _fun37529
                }
            case 391:
                var5 = false;
            case 393:
                var2 = '[RNScreens] Using both `blurEffect` and `scrollEdgeEffects` simultaneously may cause overlapping effects.';
                var2 = var4.bind(var3)(var5, var2);
                var2 = _closure1_slot6;
                var2 = var2.constants;
                var2 = var2.reactNativeVersion;
                var2 = var2.minor;
                var18 = 'formSheet';
                if (!(var18 === var12)) {
                    _fun37529_ip = 470;
                    continue _fun37529
                }
            case 437:
                var2 = 'fitToContents';
                if (!(var2 !== var9)) {
                    _fun37529_ip = 458;
                    continue _fun37529
                }
            case 447:
                var2 = _closure1_slot10;
                var23 = var2.container;
                _fun37529_ip = 479;
                continue _fun37529;
            case 458:
                var2 = _closure1_slot10;
                var23 = var2.absoluteWithNoBottom;
                _fun37529_ip = 479;
                continue _fun37529;
            case 470:
                var2 = _closure1_slot10;
                var23 = var2.container;
            case 479:
                var6 = _closure1_slot9;
                var5 = _closure1_slot8;
                var2 = {};
                var21 = _closure1_slot7;
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var4 = 6;
                var4 = var20[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var4.contentStyle = var24;
                var4.style = var23;
                var4.stackPresentation = var12;
                var4.children = var19;
                var4 = var21.bind(var3)(var8, var4);
                var8 = new Array(3);
                var8[0] = var4;
                var19 = _closure1_slot0;
                var4 = 7;
                var4 = var20[var4];
                var4 = var19.bind(var3)(var4);
                var20 = var4.ScreenStackHeaderConfig;
                var4 = global;
                var24 = var4.Object;
                var23 = var24.assign;
                var19 = {};
                var19 = var23.bind(var24)(var19, var13);
                var19 = var21.bind(var3)(var20, var19);
                var8[1] = var19;
                var18 = var18 === var12;
                if (!var18) {
                    _fun37529_ip = 610;
                    continue _fun37529
                }
            case 607:
                var18 = var22;
            case 610:
                if (!var18) {
                    _fun37529_ip = 659;
                    continue _fun37529
                }
            case 613:
                var21 = _closure1_slot7;
                var20 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 8;
                var19 = var23[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.FooterComponent;
                var19 = {};
                var22 = var22.bind(var3)();
                var19.children = var22;
                var18 = var21.bind(var3)(var20, var19);
            case 659:
                var8[2] = var18;
                var2.children = var8;
                var8 = var6.bind(var3)(var5, var2);
                var2 = _closure1_slot7;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {
                    'ref': null,
                    'enabled': true,
                    'isNativeStack': true
                };
                var17 = function arg0() {
                    _fun37533: for (var _fun37533_ip = 0;;) switch (_fun37533_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot1;
                            var1.current = var4;
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 === var1)) {
                                _fun37533_ip = 52;
                                continue _fun37533
                            }
                        case 26:
                            var1 = global;
                            var5 = var1.console;
                            var3 = var5.warn;
                            var1 = 'Looks like RNSScreensRefContext is missing. Make sure the ScreenStack component is wrapped in it';
                            var1 = var3.bind(var5)(var1);
                            _fun37533_ip = 89;
                            continue _fun37533;
                        case 52:
                            var1 = _closure2_slot2;
                            var1 = var1.current;
                            if (!(var2 !== var4)) {
                                _fun37533_ip = 81;
                                continue _fun37533
                            }
                        case 65:
                            var3 = _closure2_slot0;
                            var2 = {};
                            var2.current = var4;
                            var1[var3] = var2;
                            _fun37533_ip = 89;
                            continue _fun37533;
                        case 81:
                            var0 = _closure2_slot0;
                            var0 = delete var1[var0];
                        case 89:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.ref = var17;
                var4.activityState = var16;
                var4.shouldFreeze = var15;
                var4.screenId = var14;
                var4.stackPresentation = var12;
                var14 = var11 == var13;
                var12 = undefined;
                if (var14) {
                    _fun37529_ip = 768;
                    continue _fun37529
                }
            case 762:
                var12 = var13.largeTitle;
            case 768:
                var11 = var11 != var12;
                if (!var11) {
                    _fun37529_ip = 778;
                    continue _fun37529
                }
            case 775:
                var11 = var12;
            case 778:
                var4.hasLargeHeader = var11;
                var4.sheetAllowedDetents = var9;
                var9 = new Array(2);
                var9[0] = var10;
                var9[1] = var3;
                var4.style = var9;
                var4.onHeaderHeightChange = var0;
                var0 = {};
                var0.children = var8;
                var0 = var5.bind(var6)(var4, var7, var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var5)(var1);
    var5 = var6.create;
    var3 = {};
    var7 = {};
    var7.flex = var8;
    var3.container = var7;
    var7 = {
        'position': 'absolute',
        'top': 0,
        'start': 0,
        'end': 0
    };
    var3.absoluteWithNoBottom = var7;
    var3 = var5.bind(var6)(var3);
    var _closure1_slot10 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 4050, 4049, 4053, 4040, 4056, 4030]);