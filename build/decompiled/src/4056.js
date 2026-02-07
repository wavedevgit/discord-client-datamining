// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var0 = ['children', 'headerConfig', 'activityState', 'shouldFreeze', 'stackPresentation', 'sheetAllowedDetents', 'contentStyle', 'style', 'screenId', 'unstable_sheetFooter'];
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
    var6 = var1.StyleSheet;
    var _closure1_slot6 = var6;
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
        _fun37472: for (var _fun37472_ip = 0;;) switch (_fun37472_ip) {
            case 0:
                var5 = arg0;
                var19 = var5.children;
                var13 = var5.headerConfig;
                var _closure2_slot0 = var13;
                var15 = var5.activityState;
                var14 = var5.shouldFreeze;
                var12 = var5.stackPresentation;
                var0 = var5.sheetAllowedDetents;
                var6 = var5.contentStyle;
                var10 = var5.style;
                var1 = var5.screenId;
                var _closure2_slot1 = var1;
                var22 = var5.unstable_sheetFooter;
                var4 = _closure1_slot4;
                var2 = _closure1_slot3;
                var3 = undefined;
                var7 = var4.bind(var3)(var5, var2);
                var5 = _closure1_slot5;
                var2 = var5.useRef;
                var11 = null;
                var2 = var2.bind(var5)(var11);
                var _closure2_slot2 = var2;
                var4 = var5.useContext;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.RNSScreensRefContext;
                var2 = var4.bind(var5)(var2);
                var _closure2_slot3 = var2;
                var8 = var5.useImperativeHandle;
                var4 = arg1;
                var2 = function() { // Environment: var16
                    var0 = _closure2_slot2;
                    var0 = var0.current;
                    return var0;
                };
                var2 = var8.bind(var5)(var4, var2);
                var4 = var5.useRef;
                var8 = var11 == var13;
                var2 = undefined;
                if (var8) {
                    _fun37472_ip = 195;
                    continue _fun37472
                }
            case 189:
                var2 = var13.hidden;
            case 195:
                var2 = var4.bind(var5)(var2);
                var _closure2_slot4 = var2;
                var8 = _closure1_slot5;
                var5 = var8.useEffect;
                var4 = var11 == var13;
                var2 = undefined;
                if (var4) {
                    _fun37472_ip = 228;
                    continue _fun37472
                }
            case 222:
                var2 = var13.hidden;
            case 228:
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var12;
                var2 = function() { // Environment: var16
                    _fun37474: for (var _fun37474_ip = 0;;) switch (_fun37474_ip) {
                        case 0:
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
                            var4 = _closure2_slot0;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if (var4) {
                                _fun37474_ip = 71;
                                continue _fun37474
                            }
                        case 61:
                            var3 = _closure2_slot0;
                            var1 = var3.hidden;
                        case 71:
                            var2.current = var1;
                            return var0;
                    }
                };
                var2 = var5.bind(var8)(var2, var4);
                var9 = _closure1_slot9;
                var8 = _closure1_slot8;
                var5 = {};
                var18 = _closure1_slot7;
                var4 = _closure1_slot1;
                var17 = _closure1_slot2;
                var2 = 6;
                var2 = var17[var2];
                var17 = var4.bind(var3)(var2);
                var4 = {};
                var2 = 'formSheet';
                var2 = var2 === var12;
                if (!var2) {
                    _fun37472_ip = 312;
                    continue _fun37472
                }
            case 300:
                var20 = 'fitToContents';
                var21 = null;
                if (!(var20 !== var0)) {
                    _fun37472_ip = 321;
                    continue _fun37472
                }
            case 312:
                var20 = _closure1_slot10;
                var21 = var20.container;
            case 321:
                var20 = new Array(2);
                var20[0] = var21;
                var20[1] = var6;
                var4.style = var20;
                var21 = var11 != var12;
                var20 = 'push';
                if (!var21) {
                    _fun37472_ip = 351;
                    continue _fun37472
                }
            case 348:
                var20 = var12;
            case 351:
                var4.stackPresentation = var20;
                var4.children = var19;
                var4 = var18.bind(var3)(var17, var4);
                var17 = new Array(3);
                var17[0] = var4;
                var20 = _closure1_slot7;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var4 = 7;
                var4 = var19[var4];
                var4 = var18.bind(var3)(var4);
                var19 = var4.ScreenStackHeaderConfig;
                var4 = global;
                var23 = var4.Object;
                var21 = var23.assign;
                var18 = {};
                var18 = var21.bind(var23)(var18, var13);
                var18 = var20.bind(var3)(var19, var18);
                var17[1] = var18;
                var18 = var2;
                if (!var18) {
                    _fun37472_ip = 444;
                    continue _fun37472
                }
            case 441:
                var18 = var22;
            case 444:
                if (!var18) {
                    _fun37472_ip = 493;
                    continue _fun37472
                }
            case 447:
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
            case 493:
                var17[2] = var18;
                var5.children = var17;
                var8 = var9.bind(var3)(var8, var5);
                var9 = undefined;
                if (!var2) {
                    _fun37472_ip = 555;
                    continue _fun37472
                }
            case 512:
                var9 = undefined;
                if (!var6) {
                    _fun37472_ip = 555;
                    continue _fun37472
                }
            case 517:
                var5 = _closure1_slot6;
                var2 = var5.flatten;
                var6 = var2.bind(var5)(var6);
                var2 = {};
                var17 = var11 == var6;
                var5 = undefined;
                if (var17) {
                    _fun37472_ip = 548;
                    continue _fun37472
                }
            case 543:
                var5 = var6.backgroundColor;
            case 548:
                var2.backgroundColor = var5;
                var9 = var2;
            case 555:
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
                var16 = function arg0() {
                    _fun37475: for (var _fun37475_ip = 0;;) switch (_fun37475_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot2;
                            var1.current = var4;
                            var1 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 === var1)) {
                                _fun37475_ip = 52;
                                continue _fun37475
                            }
                        case 26:
                            var1 = global;
                            var5 = var1.console;
                            var3 = var5.warn;
                            var1 = 'Looks like RNSScreensRefContext is missing. Make sure the ScreenStack component is wrapped in it';
                            var1 = var3.bind(var5)(var1);
                            _fun37475_ip = 89;
                            continue _fun37475;
                        case 52:
                            var1 = _closure2_slot3;
                            var1 = var1.current;
                            if (!(var2 !== var4)) {
                                _fun37475_ip = 81;
                                continue _fun37475
                            }
                        case 65:
                            var3 = _closure2_slot1;
                            var2 = {};
                            var2.current = var4;
                            var1[var3] = var2;
                            _fun37475_ip = 89;
                            continue _fun37475;
                        case 81:
                            var0 = _closure2_slot1;
                            var0 = delete var1[var0];
                        case 89:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.ref = var16;
                var4.activityState = var15;
                var4.shouldFreeze = var14;
                var4.stackPresentation = var12;
                var14 = var11 == var13;
                var12 = undefined;
                if (var14) {
                    _fun37472_ip = 645;
                    continue _fun37472
                }
            case 639:
                var12 = var13.largeTitle;
            case 645:
                var11 = var11 != var12;
                if (!var11) {
                    _fun37472_ip = 655;
                    continue _fun37472
                }
            case 652:
                var11 = var12;
            case 655:
                var4.hasLargeHeader = var11;
                var4.sheetAllowedDetents = var0;
                var0 = new Array(2);
                var0[0] = var10;
                var0[1] = var9;
                var4.style = var0;
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
    var3.absolute = var7;
    var3 = var5.bind(var6)(var3);
    var _closure1_slot10 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 4054, 4053, 4057, 4044, 4060, 4034]);