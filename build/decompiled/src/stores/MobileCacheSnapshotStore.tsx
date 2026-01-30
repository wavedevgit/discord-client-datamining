// stores/MobileCacheSnapshotStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun13380: for (var _fun13380_ip = 0;;) switch (_fun13380_ip) {
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
            case 70: // try_end0
                _fun13380_ip = 74;
                continue _fun13380;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Store;
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0, arg1) { // Original name: MobileCacheSnapshotStore, environment: var0
            _fun13384: for (var _fun13384_ip = 0;;) switch (_fun13384_ip) {
                case 0:
                    var3 = arg0;
                    var10 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var10, var1);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 5;
                    var0 = var7[var0];
                    var0 = var6.bind(var5)(var0);
                    var15 = new Array(3);
                    var15[0] = var0;
                    var0 = {};
                    var18 = var0;
                    var17 = var3;
                    var2 = copyDataProperties(var18, var17);
                    var2 = function() { // Original name: CLEAR_CACHES, environment: var4
                        var1 = _closure3_slot0;
                        var0 = var1.clear;
                        var0 = var0.bind(var1)();
                        var0 = false;
                        return var0;
                    };
                    var8 = 'CLEAR_CACHES';
                    var0[var8] = var2;
                    var9 = function() { // Original name: WRITE_CACHES, environment: var4
                        var1 = _closure3_slot0;
                        var0 = var1.save;
                        var0 = var0.bind(var1)();
                        var0 = false;
                        return var0;
                    };
                    var2 = 'WRITE_CACHES';
                    var0[var2] = var9;
                    var15[1] = var0;
                    var0 = arg1;
                    var15[2] = var0;
                    var0 = _closure1_slot6;
                    var14 = var0.bind(var5)(var1);
                    var9 = _closure1_slot5;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun13384_ip = 146;
                        continue _fun13384
                    }
                case 133:
                    var0 = var14.apply;
                    var0 = var0.bind(var14)(var10, var15);
                    _fun13384_ip = 180;
                    continue _fun13384;
                case 146:
                    var12 = global;
                    var13 = var12.Reflect;
                    var12 = var13.construct;
                    var11 = _closure1_slot6;
                    var11 = var11.bind(var5)(var10);
                    var11 = var11.constructor;
                    var0 = var12.bind(var13)(var14, var15, var11);
                case 180:
                    var0 = var9.bind(var5)(var10, var0);
                    var _closure3_slot0 = var0;
                    var4 = 6;
                    var9 = var7[var4];
                    var11 = var6.bind(var5)(var9);
                    var9 = var0.getClass;
                    var9 = var9.bind(var0)();
                    var10 = var9.displayName;
                    var9 = null;
                    var10 = var9 != var10;
                    var9 = 'Snapshot stores need a display name';
                    var9 = var11.bind(var5)(var10, var9);
                    var9 = var7[var4];
                    var10 = var6.bind(var5)(var9);
                    var8 = var8 in var3;
                    var9 = !var8;
                    var8 = "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action";
                    var8 = var10.bind(var5)(var9, var8);
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var2 = var2 in var3;
                    var3 = !var2;
                    var2 = "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action";
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = var1.allStores;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'persistKey';
        var5.key = var1;
        var1 = function() { // Original name: get, environment: var0
            var1 = this;
            var0 = var1.getClass;
            var0 = var0.bind(var1)();
            var3 = var0.displayName;
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = '';
            var0 = '-snapshot';
            var0 = var2.bind(var1)(var3, var0);
            return var0;
        };
        var5.get = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var6 = 'clear';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.Storage;
            var2 = var3.remove;
            var1 = this;
            var1 = var1.persistKey;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'save';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            var5 = this;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var4 = var1.Storage;
            var3 = var4.set;
            var2 = var5.persistKey;
            var1 = var5.takeSnapshot;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'readSnapshot';
        var5.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var0
            _fun13390: for (var _fun13390_ip = 0;;) switch (_fun13390_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.Storage;
                    var1 = var2.get;
                    var0 = this;
                    var0 = var0.persistKey;
                    var1 = var1.bind(var2)(var0);
                    var4 = null;
                    var2 = var4 == var1;
                    var0 = null;
                    if (var2) {
                        _fun13390_ip = 81;
                        continue _fun13390
                    }
                case 61:
                    var3 = var1.version;
                    var2 = arg0;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun13390_ip = 81;
                        continue _fun13390
                    }
                case 76:
                    var0 = var1.data;
                case 81:
                    return var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'getClass';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            var0 = this;
            var0 = var0.constructor;
            return var0;
        };
        var5.value = var6;
        var1[4] = var5;
        var5 = {};
        var6 = 'clearAll';
        var5.key = var6;
        var0 = function() { // Original name: value, environment: var0
            var0 = _closure2_slot0;
            var2 = var0.allStores;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = new Array(0);
    var1.allStores = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/MobileCacheSnapshotStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 806, 44, 587, 566, 2]);