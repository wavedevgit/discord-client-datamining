// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = metroImportAll;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function(arg0) { // Original name: createPublicRootInstance, environment: var0
        _fun3382: for (var _fun3382_ip = 0;;) switch (_fun3382_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.enableAccessToHostTreeInFabric;
                var2 = var0.bind(var2)();
                var3 = null;
                var0 = null;
                if (!var2) {
                    _fun3382_ip = 91;
                    continue _fun3382
                }
            case 42:
                var2 = _closure1_slot3;
                if (!(var3 == var2)) {
                    _fun3382_ip = 73;
                    continue _fun3382
                }
            case 50:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 0;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var _closure1_slot3 = var2;
            case 73:
                var3 = _closure1_slot3;
                var2 = var3.createReactNativeDocument;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
            case 91:
                return var0;
        }
    };
    var1.createPublicRootInstance = var2;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: createPublicInstance, environment: var0
        _fun3383: for (var _fun3383_ip = 0;;) switch (_fun3383_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var7 = undefined;
                var2 = var2.bind(var7)(var0);
                var0 = var2.enableAccessToHostTreeInFabric;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun3383_ip = 121;
                    continue _fun3383
                }
            case 47:
                var2 = _closure1_slot4;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun3383_ip = 86;
                    continue _fun3383
                }
            case 57:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var0 = var2.bind(var7)(var0);
                var0 = var0.default;
                var _closure1_slot4 = var0;
            case 86:
                var0 = _closure1_slot4;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var13 = var2;
                var12 = var6;
                var11 = var5;
                var10 = var4;
                var0 = new var13[var0](var12, var11, var10, var9);
                var0 = var0 instanceof Object ? var0 : var2;
                _fun3383_ip = 196;
                continue _fun3383;
            case 121:
                var3 = _closure1_slot5;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun3383_ip = 160;
                    continue _fun3383
                }
            case 131:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 1;
                var2 = var8[var2];
                var2 = var3.bind(var7)(var2);
                var2 = var2.default;
                var _closure1_slot5 = var2;
            case 160:
                var3 = _closure1_slot5;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var9 = arg3;
                var13 = var2;
                var12 = var6;
                var11 = var5;
                var10 = var4;
                var1 = new var13[var3](var12, var11, var10, var9, var8);
                var0 = var1 instanceof Object ? var1 : var2;
            case 196:
                return var0;
        }
    };
    var1.createPublicInstance = var2;
    var2 = function(arg0, arg1) { // Original name: createPublicTextInstance, environment: var0
        _fun3384: for (var _fun3384_ip = 0;;) switch (_fun3384_ip) {
            case 0:
                var2 = _closure1_slot6;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun3384_ip = 44;
                    continue _fun3384
                }
            case 13:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                var _closure1_slot6 = var1;
            case 44:
                var3 = _closure1_slot6;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = arg0;
                var4 = arg1;
                var6 = var1;
                var0 = new var6[var3](var5, var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var1.createPublicTextInstance = var2;
    var2 = function(arg0) { // Original name: getNativeTagFromPublicInstance, environment: var0
        var0 = arg0;
        var0 = var0.__nativeTag;
        return var0;
    };
    var1.getNativeTagFromPublicInstance = var2;
    var2 = function(arg0) { // Original name: getNodeFromPublicInstance, environment: var0
        _fun3386: for (var _fun3386_ip = 0;;) switch (_fun3386_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.__internalInstanceHandle;
                var4 = null;
                var2 = var4 == var0;
                var0 = null;
                if (var2) {
                    _fun3386_ip = 78;
                    continue _fun3386
                }
            case 20:
                var3 = _closure1_slot7;
                if (!(var4 == var3)) {
                    _fun3386_ip = 57;
                    continue _fun3386
                }
            case 31:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var _closure1_slot7 = var3;
            case 57:
                var3 = _closure1_slot7;
                var2 = var3.getNodeFromInternalInstanceHandle;
                var1 = var1.__internalInstanceHandle;
                var0 = var2.bind(var3)(var1);
            case 78:
                return var0;
        }
    };
    var1.getNodeFromPublicInstance = var2;
    var0 = function(arg0) { // Original name: getInternalInstanceHandleFromPublicInstance, environment: var0
        _fun3387: for (var _fun3387_ip = 0;;) switch (_fun3387_ip) {
            case 0:
                var1 = arg0;
                var2 = var1._internalInstanceHandle;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun3387_ip = 23;
                    continue _fun3387
                }
            case 15:
                var0 = var1.__internalInstanceHandle;
                _fun3387_ip = 29;
                continue _fun3387;
            case 23:
                var0 = var1._internalInstanceHandle;
            case 29:
                return var0;
        }
    };
    var1.getInternalInstanceHandleFromPublicInstance = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [141, 142, 272, 149, 79, 117]);