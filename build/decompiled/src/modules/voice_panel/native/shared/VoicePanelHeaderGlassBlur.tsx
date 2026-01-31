// modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var _closure1_slot3 = var8;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0
    };
    var3.blur = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0
    };
    var10 = var8.hairlineWidth;
    var10 = -var10;
    var9.bottom = var10;
    var10 = var8.hairlineWidth;
    var9.height = var10;
    var3.strokeContainer = var9;
    var9 = {
        'height': null,
        'opacity': 0.15,
        'backgroundColor': 'white'
    };
    var10 = var8.hairlineWidth;
    var9.height = var10;
    var3.stroke = var9;
    var9 = {
        'height': null,
        'opacity': 0.8,
        'backgroundColor': 'black'
    };
    var10 = var8.hairlineWidth;
    var9.height = var10;
    var3.strokeAlt = var9;
    var9 = {
        'height': null,
        'opacity': 0.2,
        'backgroundColor': 'black'
    };
    var10 = var8.hairlineWidth;
    var9.height = var10;
    var3.strokeAltLight = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.isAndroid;
    var3 = var3.bind(var7)();
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}';
    var3.code = var7;
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = 'function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}';
    var3.code = var7;
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun90942: for (var _fun90942_ip = 0;;) switch (_fun90942_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.shown;
                var _closure2_slot0 = var5;
                var9 = var1.blurStyle;
                var11 = var1.style;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 4;
                var2 = var8[var1];
                var3 = undefined;
                var6 = var10.bind(var3)(var2);
                var4 = var6.useAnimatedStyle;
                var2 = function() {
                    _fun90943: for (var _fun90943_ip = 0;;) switch (_fun90943_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot0;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 0;
                            if (!var2) {
                                _fun90943_ip = 49;
                                continue _fun90943
                            }
                        case 23:
                            var3 = _closure1_slot7;
                            var2 = 1;
                            if (!var3) {
                                _fun90943_ip = 46;
                                continue _fun90943
                            }
                        case 36:
                            var2 = 0.7;
                        case 46:
                            var1 = var2;
                        case 49:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var7 = {};
                var7.shown = var5;
                var12 = _closure1_slot7;
                var7.IS_ANDROID = var12;
                var2.__closure = var7;
                var7 = 3451055086565.0;
                var2.__workletHash = var7;
                var7 = _closure1_slot8;
                var2.__initData = var7;
                var6 = var4.bind(var6)(var2);
                var1 = var8[var1];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useAnimatedProps;
                var0 = function() {
                    _fun90944: for (var _fun90944_ip = 0;;) switch (_fun90944_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.withSpring;
                            var4 = _closure2_slot0;
                            var1 = var4.get;
                            var4 = var1.bind(var4)();
                            var1 = 0;
                            if (!var4) {
                                _fun90944_ip = 63;
                                continue _fun90944
                            }
                        case 53:
                            var1 = 0.3;
                        case 63:
                            var1 = var2.bind(var3)(var1);
                            var0.blurAmount = var1;
                            return var0;
                    }
                };
                var4 = {};
                var7 = 5;
                var7 = var8[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.withSpring;
                var4.withSpring = var7;
                var4.shown = var5;
                var0.__closure = var4;
                var4 = 5642055202507.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot9;
                var0.__initData = var4;
                var7 = var1.bind(var2)(var0);
                var5 = _closure1_slot1;
                var0 = 6;
                var0 = var8[var0];
                var0 = var5.bind(var3)(var0);
                var15 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var0 = 7;
                var0 = var8[var0];
                var1 = var5.bind(var3)(var0);
                var0 = {};
                var4 = _closure1_slot6;
                var12 = var4.blur;
                var4 = new Array(3);
                var4[0] = var12;
                var4[1] = var11;
                var4[2] = var6;
                var0.style = var4;
                var6 = _closure1_slot4;
                var4 = 8;
                var4 = var8[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var11 = 'ultra-thin';
                var4.blurStyle = var11;
                var16 = 9;
                var8 = var8[var16];
                var10 = var10.bind(var3)(var8);
                var8 = var10.isThemeDark;
                var10 = var8.bind(var10)(var15);
                var8 = 'light';
                if (!var10) {
                    _fun90942_ip = 335;
                    continue _fun90942
                }
            case 331:
                var8 = 'dark';
            case 335:
                var4.blurTheme = var8;
                var8 = _closure1_slot3;
                var10 = var8.absoluteFillObject;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var4.style = var8;
                var4.animatedProps = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 10;
                var5 = var12[var9];
                var6 = var10.bind(var3)(var5);
                var5 = {};
                var17 = _closure1_slot6;
                var8 = var17.strokeContainer;
                var5.style = var8;
                var11 = _closure1_slot4;
                var8 = var12[var9];
                var14 = var10.bind(var3)(var8);
                var8 = {};
                var17 = var17.stroke;
                var8.style = var17;
                var14 = var11.bind(var3)(var14, var8);
                var8 = new Array(2);
                var8[0] = var14;
                var9 = var12[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var14 = _closure1_slot0;
                var12 = var12[var16];
                var14 = var14.bind(var3)(var12);
                var12 = var14.isThemeDark;
                var12 = var12.bind(var14)(var15);
                var13 = _closure1_slot6;
                if (var12) {
                    _fun90942_ip = 514;
                    continue _fun90942
                }
            case 506:
                var12 = var13.strokeAltLight;
                _fun90942_ip = 520;
                continue _fun90942;
            case 514:
                var12 = var13.strokeAlt;
            case 520:
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 3679, 4040, 3205, 6420, 4031, 3165, 6419, 2]);