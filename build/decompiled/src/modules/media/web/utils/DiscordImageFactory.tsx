// modules/media/web/utils/DiscordImageFactory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot3;
        var3 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'create';
        var0.key = var2;
        var1 = function arg0() {
            _fun37825: for (var _fun37825_ip = 0;;) switch (_fun37825_ip) {
                case 0:
                    var3 = arg0;
                    var0 = global;
                    var4 = var0.Uint8Array;
                    var5 = var0.Math;
                    var2 = var5.min;
                    var1 = var3.byteLength;
                    var0 = 64;
                    var7 = var2.bind(var5)(var0, var1);
                    var0 = var4.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = 0;
                    var10 = var1;
                    var9 = var3;
                    var0 = new var10[var4](var9, var8, var7, var6);
                    var5 = var0 instanceof Object ? var0 : var1;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 2;
                    var0 = var4[var0];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var0);
                    var0 = var2.detectFile;
                    var2 = var0.bind(var2)(var5);
                    var0 = null;
                    var6 = var0 == var2;
                    var5 = undefined;
                    if (var6) {
                        _fun37825_ip = 115;
                        continue _fun37825
                    }
                case 109:
                    var5 = var2.mimeType;
                case 115:
                    var2 = 'image/png';
                    var0 = null;
                    if (!(var2 === var5)) {
                        _fun37825_ip = 163;
                        continue _fun37825
                    }
                case 127:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 3;
                    var1 = var5[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.DiscordImagePng;
                    var1 = var2.create;
                    var0 = var1.bind(var2)(var3);
                case 163:
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media/web/utils/DiscordImageFactory.tsx';
    var3 = var4.bind(var5)(var3);
    var2.DiscordImageFactory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4135, 4162, 2]);