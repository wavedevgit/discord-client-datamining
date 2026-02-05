// modules/profile_effects/native/ProfileEffectLayer.android.tsx
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StyleSheet;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun56945: for (var _fun56945_ip = 0;;) switch (_fun56945_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.layerConfig;
                var9 = var0.animate;
                var _closure2_slot0 = var9;
                var11 = var0.width;
                var5 = var0.accessibilityLabel;
                var4 = var0.onLoad;
                var14 = _closure1_slot2;
                var2 = var14.useRef;
                var0 = null;
                var7 = var2.bind(var14)(var0);
                var10 = _closure1_slot0;
                var13 = _closure1_slot1;
                var0 = 3;
                var2 = var13[var0];
                var3 = undefined;
                var8 = var10.bind(var3)(var2);
                var2 = var8.useAPNGPlayerControls;
                var15 = var2.bind(var8)(var7);
                var _closure2_slot1 = var15;
                var8 = var14.useEffect;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var15;
                var1 = function() { // Environment: var1
                    _fun56946: for (var _fun56946_ip = 0;;) switch (_fun56946_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            if (var0) {
                                _fun56946_ip = 26;
                                continue _fun56946
                            }
                        case 14:
                            var0 = var1.stop;
                            var0 = var0.bind(var1)();
                            _fun56946_ip = 49;
                            continue _fun56946;
                        case 26:
                            var2 = var1.seek;
                            var0 = 0;
                            var0 = var2.bind(var1)(var0);
                            var0 = var1.play;
                            var0 = var0.bind(var1)();
                        case 49:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var8.bind(var14)(var1, var2);
                var2 = _closure1_slot4;
                var0 = var13[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.APNGPlayer;
                var0 = {};
                var0.ref = var7;
                var7 = var12.src;
                var0.url = var7;
                var7 = false;
                var0.autoplay = var7;
                var6 = _closure1_slot3;
                var7 = var6.absoluteFill;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var8 = 'absolute';
                var7.position = var8;
                var7.width = var11;
                var8 = 4;
                var8 = var13[var8];
                var10 = var10.bind(var3)(var8);
                var8 = var10.calculateProfileEffectHeight;
                var8 = var8.bind(var10)(var12, var11);
                var7.height = var8;
                var8 = 0;
                if (!var9) {
                    _fun56945_ip = 231;
                    continue _fun56945
                }
            case 228:
                var8 = 1;
            case 231:
                var7.opacity = var8;
                var6[1] = var7;
                var0.style = var6;
                var0.ariaLabel = var5;
                var0.onLoad = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_effects/native/ProfileEffectLayer.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 6933, 6930, 2]);