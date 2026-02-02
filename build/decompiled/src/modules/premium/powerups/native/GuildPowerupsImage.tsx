// modules/premium/powerups/native/GuildPowerupsImage.tsx
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '75%',
        'height': '100%',
        'alignSelf': 'center',
        'resizeMode': 'contain'
    };
    var3.image = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsImage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102425: for (var _fun102425_ip = 0;;) switch (_fun102425_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.imageUrl;
                var2 = var0.isAnimated;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun102425_ip = 23;
                    continue _fun102425
                }
            case 21:
                var2 = true;
            case 23:
                var7 = var0.style;
                var0 = _closure1_slot5;
                var5 = var0.bind(var4)();
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 3;
                var0 = var9[var0];
                var11 = var8.bind(var4)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var0 = var10.bind(var11)(var3, var0);
                var3 = 4;
                var3 = var9[var3];
                var8 = var8.bind(var4)(var3);
                var3 = var8.isAndroid;
                var3 = var3.bind(var8)();
                if (!var3) {
                    _fun102425_ip = 182;
                    continue _fun102425
                }
            case 116:
                if (!var2) {
                    _fun102425_ip = 182;
                    continue _fun102425
                }
            case 119:
                if (var0) {
                    _fun102425_ip = 182;
                    continue _fun102425
                }
            case 122:
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var9 = var5.image;
                var8 = new Array(2);
                var8[0] = var9;
                var8[1] = var7;
                var0.style = var8;
                var0.url = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun102425_ip = 246;
                continue _fun102425;
            case 182:
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 6;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = var5.image;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var7;
                var1.style = var5;
                var5 = {};
                var5.uri = var6;
                var1.source = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 246:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 33, 1297, 566, 479, 5716, 4669, 2]);