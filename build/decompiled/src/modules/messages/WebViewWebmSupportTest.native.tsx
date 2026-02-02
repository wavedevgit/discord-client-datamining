// modules/messages/WebViewWebmSupportTest.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/WebViewWebmSupportTest.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun36503: for (var _fun36503_ip = 0;;) switch (_fun36503_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var1 = var1[var3];
                var7 = undefined;
                var2 = var2.bind(var7)(var1);
                var1 = var2.isIOS;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun36503_ip = 41;
                    continue _fun36503
                }
            case 37:
                var1 = false;
                return var1;
            case 41:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 1;
                var0 = var0[var5];
                var1 = var1.bind(var7)(var0);
                var0 = var1.getSocName;
                var4 = var0.bind(var1)();
                var0 = null;
                var0 = var0 == var4;
                if (var0) {
                    _fun36503_ip = 100;
                    continue _fun36503
                }
            case 80:
                var2 = var4.startsWith;
                var1 = 'ARM64_';
                var1 = var2.bind(var4)(var1);
                var0 = !var1;
            case 100:
                if (var0) {
                    _fun36503_ip = 231;
                    continue _fun36503
                }
            case 106:
                var2 = var4.substring;
                var1 = 6;
                var4 = var2.bind(var4)(var1);
                var2 = var4[var3];
                var1 = 'T';
                var1 = var1 !== var2;
                if (!var1) {
                    _fun36503_ip = 147;
                    continue _fun36503
                }
            case 135:
                var6 = var4[var3];
                var2 = 'S';
                var1 = var2 !== var6;
            case 147:
                if (var1) {
                    _fun36503_ip = 228;
                    continue _fun36503
                }
            case 150:
                var2 = var4.substring;
                var6 = var2.bind(var4)(var5);
                var4 = var6[var3];
                var2 = '7';
                var2 = var2 !== var4;
                if (!var2) {
                    _fun36503_ip = 225;
                    continue _fun36503
                }
            case 178:
                var4 = var6[var3];
                var3 = '8';
                var3 = var3 !== var4;
                if (var3) {
                    _fun36503_ip = 222;
                    continue _fun36503
                }
            case 195:
                var4 = global;
                var5 = var4.parseInt;
                var4 = 10;
                var5 = var5.bind(var7)(var6, var4);
                var4 = 8101;
                var3 = var5 >= var4;
            case 222:
                var2 = var3;
            case 225:
                var1 = var2;
            case 228:
                var0 = var1;
            case 231:
                return var0;
        }
    };
    var2.isIOSWithWebM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 1309, 2]);