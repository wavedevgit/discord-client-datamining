// modules/virtual_currency/native/OrbLottieAnimation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var6 = metroImportAll;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.forwardRef;
    var7 = var6.useRef;
    var _closure1_slot3 = var7;
    var6 = var6.useEffect;
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot5 = var6;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun75623: for (var _fun75623_ip = 0;;) switch (_fun75623_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.animationType;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 2;
                var1 = var7[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var1);
                var1 = var6.useTheme;
                var6 = var1.bind(var6)();
                var1 = 3;
                var1 = var7[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.isThemeLight;
                var1 = var1.bind(var4)(var6);
                var6 = _closure1_slot3;
                var4 = null;
                var6 = var6.bind(var3)(var4);
                var _closure2_slot1 = var6;
                var9 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = function() { // Environment: var2
                    _fun75624: for (var _fun75624_ip = 0;;) switch (_fun75624_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 !== var2)) {
                                _fun75624_ip = 36;
                                continue _fun75624
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            if (!(var0 != var1)) {
                                _fun75624_ip = 36;
                                continue _fun75624
                            }
                        case 26:
                            var0 = var1.play;
                            var0 = var0.bind(var1)();
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var9.bind(var3)(var7, var8);
                var9 = _closure1_slot2;
                var8 = var9.useImperativeHandle;
                var7 = arg1;
                var2 = function() { // Environment: var2
                    var0 = {};
                    var1 = function() {
                        _fun75626: for (var _fun75626_ip = 0;;) switch (_fun75626_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun75626_ip = 33;
                                    continue _fun75626
                                }
                            case 23:
                                var1 = var2.play;
                                var0 = var1.bind(var2)();
                            case 33:
                                return var0;
                        }
                    };
                    var0.play = var1;
                    return var0;
                };
                var2 = var8.bind(var9)(var7, var2);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                if (var1) {
                    _fun75623_ip = 170;
                    continue _fun75623
                }
            case 150:
                var1 = 5;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var2 = var1.SpendEarnOrbsLottie;
                _fun75623_ip = 188;
                continue _fun75623;
            case 170:
                var1 = 4;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var2 = var1.SpendEarnOrbsLightThemeLottie;
            case 188:
                var1 = _closure1_slot5;
                var0 = {
                    'ref': null,
                    'size': 'custom',
                    'width': 60,
                    'height': 60,
                    'opacity': 0.8,
                    'animation': null,
                    'useLottieDefaultColors': true
                };
                var0.ref = var6;
                var6 = var4 != var5;
                var4 = 'spend';
                if (!var6) {
                    _fun75623_ip = 228;
                    continue _fun75623
                }
            case 225:
                var4 = var5;
            case 228:
                var0.animation = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'OrbsLottieAnimation';
    var1.displayName = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/native/OrbLottieAnimation.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.OrbLottieAnimation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3246, 3206, 9554, 9556, 2]);