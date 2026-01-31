// modules/video_backgrounds/VideoFilterImageError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun66397: for (var _fun66397_ip = 0;;) switch (_fun66397_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun66397_ip = 76;
                continue _fun66397;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'BINARY_TYPE_MAX_SIZE';
    var3.ASSET_SIZE = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'asset';
    var3.ASSET = var6;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.V8APIError;
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0, arg1() {
            _fun66401: for (var _fun66401_ip = 0;;) switch (_fun66401_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var3, var2);
                    var10 = new Array(3);
                    var0 = arg0;
                    var10[0] = var0;
                    var0 = arg1;
                    var10[1] = var0;
                    var8 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var6 = 5;
                    var4 = var0[var6];
                    var4 = var8.bind(var5)(var4);
                    var7 = var4.intl;
                    var4 = var7.string;
                    var0 = var0[var6];
                    var0 = var8.bind(var5)(var0);
                    var0 = var0.t;
                    var0 = var0.Mt8yDB;
                    var0 = var4.bind(var7)(var0);
                    var10[2] = var0;
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var5)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun66401_ip = 141;
                        continue _fun66401
                    }
                case 128:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var3, var10);
                    _fun66401_ip = 175;
                    continue _fun66401;
                case 141:
                    var4 = global;
                    var8 = var4.Reflect;
                    var7 = var8.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var5)(var3);
                    var4 = var4.constructor;
                    var0 = var7.bind(var8)(var9, var10, var4);
                case 175:
                    var0 = var2.bind(var5)(var3, var0);
                    var3 = var0.getFieldErrors;
                    var2 = _closure1_slot8;
                    var2 = var2.ASSET;
                    var7 = var3.bind(var0)(var2);
                    var4 = null;
                    var2 = var4 != var7;
                    if (!var2) {
                        _fun66401_ip = 245;
                        continue _fun66401
                    }
                case 211:
                    var3 = 0;
                    var3 = var7[var3];
                    var7 = var4 == var3;
                    var4 = undefined;
                    if (var7) {
                        _fun66401_ip = 231;
                        continue _fun66401
                    }
                case 226:
                    var4 = var3.code;
                case 231:
                    var3 = _closure1_slot7;
                    var3 = var3.ASSET_SIZE;
                    var2 = var4 === var3;
                case 245:
                    if (!var2) {
                        _fun66401_ip = 308;
                        continue _fun66401
                    }
                case 248:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var2 = var1[var6];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.mrlScX;
                    var1 = var2.bind(var3)(var1);
                    var0.message = var1;
                case 308:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_backgrounds/VideoFilterImageError.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1234, 507, 2]);