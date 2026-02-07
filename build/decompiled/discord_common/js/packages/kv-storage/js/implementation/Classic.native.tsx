// ../discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun18536: for (var _fun18536_ip = 0;;) switch (_fun18536_ip) {
        case 0:
            var3 = global;
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var6 = global;
            var8 = var6.Object;
            var7 = var8.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var1 = var1.NativeModules;
            var8 = var3.__KvStorage;
            var7 = null;
            if (!(var7 == var8)) {
                _fun18536_ip = 289;
                continue _fun18536
            }
        case 78:
            var8 = var1.KvStorage;
            if (!(var7 != var8)) {
                _fun18536_ip = 255;
                continue _fun18536
            }
        case 91:
            var8 = var1.KvStorage;
            var9 = var8.activate;
            var8 = var6.Function;
            var8 = var9 instanceof var8;
            if (var8) {
                _fun18536_ip = 150;
                continue _fun18536
            }
        case 116:
            var10 = var6.Error;
            var8 = var10.prototype;
            var9 = Object.create(var8, {
                constructor: {
                    value: var10
                }
            });
            var13 = "couldn't start the storage subsystem: native module exists, but jsi might not be available?";
            var14 = var9;
            var8 = new var14[var10](var13, var12);
            var8 = var8 instanceof Object ? var8 : var9;
            throw var8;
        case 150:
            var8 = var1.KvStorage;
            var1 = var8.activate;
            var1 = var1.bind(var8)();
            if (var1) {
                _fun18536_ip = 203;
                continue _fun18536
            }
        case 169:
            var9 = var6.Error;
            var1 = var9.prototype;
            var8 = Object.create(var1, {
                constructor: {
                    value: var9
                }
            });
            var13 = "couldn't start the storage subsystem: activation failed.";
            var14 = var8;
            var1 = new var14[var9](var13, var12);
            var1 = var1 instanceof Object ? var1 : var8;
            throw var1;
        case 203:
            var1 = var3.__KvStorage;
            if (!(var7 != var1)) {
                _fun18536_ip = 221;
                continue _fun18536
            }
        case 213:
            var1 = var3.__KvStorage;
            _fun18536_ip = 295;
            continue _fun18536;
        case 221:
            var9 = var6.Error;
            var7 = var9.prototype;
            var8 = Object.create(var7, {
                constructor: {
                    value: var9
                }
            });
            var13 = "couldn't start the storage subsystem: subsystem missing after activation.";
            var14 = var8;
            var7 = new var14[var9](var13, var12);
            var7 = var7 instanceof Object ? var7 : var8;
            throw var7;
        case 255:
            var8 = var6.Error;
            var6 = var8.prototype;
            var7 = Object.create(var6, {
                constructor: {
                    value: var8
                }
            });
            var13 = "couldn't find the native kv_storage module.";
            var14 = var7;
            var6 = new var14[var8](var13, var12);
            var6 = var6 instanceof Object ? var6 : var7;
            throw var6;
        case 289:
            var1 = var3.__KvStorage;
        case 295:
            var3 = 1;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = '../discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx';
            var3 = var4.bind(var5)(var3);
            var2.KV_RAW = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 2]);