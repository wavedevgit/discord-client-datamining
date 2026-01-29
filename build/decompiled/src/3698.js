// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = require;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = 'workletsModuleProxy';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() { // Original name: NativeWorklets, environment: var1
            _fun33110: for (var _fun33110_ip = 0;;) switch (_fun33110_ip) {
                case 0:
                    var3 = this;
                    var4 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3, var1);
                    var1 = global;
                    var6 = var1.Object;
                    var5 = var6.defineProperty;
                    var4 = _closure1_slot6;
                    var1 = {};
                    var7 = true;
                    var1.writable = var7;
                    var1.value = var2;
                    var1 = var5.bind(var6)(var3, var4, var1);
                    var1 = _closure1_slot0;
                    var1 = var1.__workletsModuleProxy;
                    if (!(var2 === var1)) {
                        _fun33110_ip = 164;
                        continue _fun33110
                    }
                case 76:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var5 = 4;
                    var5 = var1[var5];
                    var6 = var4.bind(var2)(var5);
                    var5 = var6.getValueUnpackerCode;
                    var5 = var5.bind(var6)();
                    var6 = 5;
                    var1 = var1[var6];
                    var1 = var4.bind(var2)(var1);
                    var4 = var1.WorkletsTurboModule;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun33110_ip = 164;
                        continue _fun33110
                    }
                case 130:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var4.bind(var2)(var1);
                    var4 = var1.WorkletsTurboModule;
                    var1 = var4.installTurboModule;
                    var1 = var1.bind(var4)(var5);
                case 164:
                    var1 = _closure1_slot0;
                    var1 = var1.__workletsModuleProxy;
                    if (!(var2 !== var1)) {
                        _fun33110_ip = 208;
                        continue _fun33110
                    }
                case 178:
                    var1 = _closure1_slot5;
                    var4 = _closure1_slot6;
                    var3 = var1.bind(var2)(var3, var4);
                    var1 = _closure1_slot0;
                    var1 = var1.__workletsModuleProxy;
                    var3[var4] = var1;
                    return var2;
                case 208:
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var0 = var3[var0];
                    var0 = var1.bind(var2)(var0);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = "Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'makeShareableClone';
        var0.key = var4;
        var1 = function(arg0, arg1, arg2) { // Original name: makeShareableClone, environment: var1
            var3 = _closure1_slot5;
            var1 = _closure1_slot6;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var4 = var0[var1];
            var3 = var4.makeShareableClone;
            var2 = arg0;
            var1 = arg1;
            var0 = arg2;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot7 = var3;
    var1 = function() { // Original name: createNativeWorkletsModule, environment: var1
        var0 = _closure1_slot7;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var2 = var1;
        var0 = new var2[var0](var1);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.createNativeWorkletsModule = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 99, 100, 3699, 3700, 3689]);