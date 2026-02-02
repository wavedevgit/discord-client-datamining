// modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var8 = var5[var3];
    var7 = metroImportAll;
    var0 = undefined;
    var7 = var7.bind(var0)(var8);
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRef;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {
            'backgroundColor': null,
            'width': 40,
            'height': 40,
            'borderRadius': null,
            'marginHorizontal': 4,
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 4;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
        var1.backgroundColor = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.radii;
        var2 = var2.round;
        var1.borderRadius = var2;
        var0.container = var1;
        var1 = {
            'width': 30,
            'height': 30
        };
        var0.animation = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90397: for (var _fun90397_ip = 0;;) switch (_fun90397_ip) {
            case 0:
                var8 = arg0;
                var17 = var8.active;
                var19 = var8.style;
                var18 = var8.activeStyle;
                var16 = var8.disabled;
                var15 = var8.accessibilityState;
                var9 = var8.channelId;
                var13 = var8.animationDataUrl;
                var10 = var8.onAnimationFinished;
                var11 = var8.loop;
                var0 = _closure1_slot7;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var0 = null;
                var14 = var2.bind(var3)(var0);
                var _closure2_slot0 = var14;
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 5;
                var2 = var0[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var5 = var5.bind(var6)(var4, var2);
                var _closure2_slot1 = var5;
                var6 = _closure1_slot3;
                var4 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun90399: for (var _fun90399_ip = 0;;) switch (_fun90399_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun90399_ip = 139;
                                continue _fun90399
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var0);
                            var0 = var3.isIOS;
                            var0 = var0.bind(var3)();
                            if (!var0) {
                                _fun90399_ip = 95;
                                continue _fun90399
                            }
                        case 51:
                            var0 = _closure2_slot0;
                            var5 = null;
                            var0 = var5 == var0;
                            var3 = undefined;
                            if (var0) {
                                _fun90399_ip = 82;
                                continue _fun90399
                            }
                        case 66:
                            var4 = _closure2_slot0;
                            var4 = var4.current;
                            var0 = var5 == var4;
                            var3 = var4;
                        case 82:
                            if (var0) {
                                _fun90399_ip = 95;
                                continue _fun90399
                            }
                        case 85:
                            var0 = var3.reset;
                            var0 = var0.bind(var3)();
                        case 95:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var0 = var3 == var0;
                            var1 = undefined;
                            if (var0) {
                                _fun90399_ip = 126;
                                continue _fun90399
                            }
                        case 110:
                            var2 = _closure2_slot0;
                            var2 = var2.current;
                            var0 = var3 == var2;
                            var1 = var2;
                        case 126:
                            if (var0) {
                                _fun90399_ip = 139;
                                continue _fun90399
                            }
                        case 129:
                            var0 = var1.play;
                            var0 = var0.bind(var1)();
                        case 139:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var9 = 7;
                var0 = var0[var9];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = undefined;
                if (var5) {
                    _fun90397_ip = 227;
                    continue _fun90397
                }
            case 204:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var4 = var5.FadeOut;
            case 227:
                var0.exiting = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 8;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var20 = var12.container;
                var9 = new Array(3);
                var9[0] = var20;
                var9[1] = var19;
                if (!var17) {
                    _fun90397_ip = 287;
                    continue _fun90397
                }
            case 284:
                var17 = !var16;
            case 287:
                if (!var17) {
                    _fun90397_ip = 293;
                    continue _fun90397
                }
            case 290:
                var17 = var18;
            case 293:
                var9[2] = var17;
                var4.style = var9;
                var9 = 'button';
                var4.accessibilityRole = var9;
                var9 = {};
                var9.disabled = var16;
                var22 = var9;
                var21 = var15;
                var15 = copyDataProperties(var22, var21);
                var4.accessibilityState = var9;
                var22 = var4;
                var21 = var8;
                var8 = copyDataProperties(var22, var21);
                var9 = _closure1_slot6;
                var8 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = 9;
                var7 = var15[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.ref = var14;
                var12 = var12.animation;
                var7.style = var12;
                var12 = {};
                var12.uri = var13;
                var7.source = var12;
                var7.loop = var11;
                var11 = false;
                var7.autoPlay = var11;
                var7.onAnimationFinish = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = 'children';
                var4[var7] = var8;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PremiumAnimatedGiftButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 33, 1297, 671, 566, 478, 3681, 4867, 6563, 2]);