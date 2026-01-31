// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function() {
        _fun2207: for (var _fun2207_ip = 0;;) switch (_fun2207_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun2207_ip = 38;
                    continue _fun2207
                }
            case 13:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var _closure1_slot2 = var1;
            case 38:
                var0 = _closure1_slot2;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var3 = function arg0() {
        var1 = _closure1_slot3;
        var0 = arg0;
        var0 = var0[var1];
        return var0;
    };
    var _closure1_slot6 = var3;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var6 = var4.Symbol;
    var0 = undefined;
    var5 = 'internalInstanceHandle';
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = var4.Symbol;
    var4 = 'ownerDocument';
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var2.getInstanceHandle = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot3;
        var1 = arg1;
        var0 = arg0;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var2.setInstanceHandle = var3;
    var3 = function arg0() {
        _fun2210: for (var _fun2210_ip = 0;;) switch (_fun2210_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = arg0;
                var1 = var0[var1];
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun2210_ip = 26;
                    continue _fun2210
                }
            case 23:
                var0 = var1;
            case 26:
                return var0;
        }
    };
    var2.getOwnerDocument = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot4;
        var1 = arg1;
        var0 = arg0;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var2.setOwnerDocument = var3;
    var3 = function arg0() {
        _fun2212: for (var _fun2212_ip = 0;;) switch (_fun2212_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 1;
                var0 = var0[var5];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.isReactNativeDocumentInstanceHandle;
                var0 = var0.bind(var1)(var3);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                if (var0) {
                    _fun2212_ip = 127;
                    continue _fun2212
                }
            case 50:
                var8 = 2;
                var0 = var1[var8];
                var7 = var2.bind(var4)(var0);
                var0 = var7.isReactNativeDocumentElementInstanceHandle;
                var0 = var0.bind(var7)(var3);
                if (var0) {
                    _fun2212_ip = 97;
                    continue _fun2212
                }
            case 76:
                var0 = _closure1_slot5;
                var7 = var0.bind(var4)();
                var0 = var7.getPublicInstanceFromInternalInstanceHandle;
                var0 = var0.bind(var7)(var3);
                _fun2212_ip = 125;
                continue _fun2212;
            case 97:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var7 = var7.bind(var4)(var6);
                var6 = var7.getPublicInstanceFromReactNativeDocumentElementInstanceHandle;
                var0 = var6.bind(var7)(var3);
            case 125:
                _fun2212_ip = 147;
                continue _fun2212;
            case 127:
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getPublicInstanceFromReactNativeDocumentInstanceHandle;
                var0 = var1.bind(var2)(var3);
            case 147:
                return var0;
        }
    };
    var2.getPublicInstanceFromInstanceHandle = var3;
    var3 = function arg0() {
        _fun2213: for (var _fun2213_ip = 0;;) switch (_fun2213_ip) {
            case 0:
                var1 = _closure1_slot6;
                var4 = undefined;
                var0 = arg0;
                var3 = var1.bind(var4)(var0);
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 1;
                var0 = var0[var5];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isReactNativeDocumentInstanceHandle;
                var0 = var0.bind(var1)(var3);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                if (var0) {
                    _fun2213_ip = 136;
                    continue _fun2213
                }
            case 59:
                var8 = 2;
                var0 = var1[var8];
                var7 = var2.bind(var4)(var0);
                var0 = var7.isReactNativeDocumentElementInstanceHandle;
                var0 = var0.bind(var7)(var3);
                if (var0) {
                    _fun2213_ip = 106;
                    continue _fun2213
                }
            case 85:
                var0 = _closure1_slot5;
                var7 = var0.bind(var4)();
                var0 = var7.getNodeFromInternalInstanceHandle;
                var0 = var0.bind(var7)(var3);
                _fun2213_ip = 134;
                continue _fun2213;
            case 106:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var7 = var7.bind(var4)(var6);
                var6 = var7.getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle;
                var0 = var6.bind(var7)(var3);
            case 134:
                _fun2213_ip = 156;
                continue _fun2213;
            case 136:
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getNativeNodeReferenceFromReactNativeDocumentInstanceHandle;
                var0 = var1.bind(var2)(var3);
            case 156:
                return var0;
        }
    };
    var2.getNativeNodeReference = var3;
    var3 = function arg0() {
        _fun2214: for (var _fun2214_ip = 0;;) switch (_fun2214_ip) {
            case 0:
                var2 = _closure1_slot6;
                var4 = undefined;
                var0 = arg0;
                var3 = var2.bind(var4)(var0);
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 2;
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isReactNativeDocumentElementInstanceHandle;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun2214_ip = 72;
                    continue _fun2214
                }
            case 51:
                var0 = _closure1_slot5;
                var2 = var0.bind(var4)();
                var0 = var2.getNodeFromInternalInstanceHandle;
                var0 = var0.bind(var2)(var3);
                _fun2214_ip = 100;
                continue _fun2214;
            case 72:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle;
                var0 = var1.bind(var2)(var3);
            case 100:
                return var0;
        }
    };
    var2.getNativeElementReference = var3;
    var1 = function arg0() {
        var3 = _closure1_slot6;
        var1 = undefined;
        var2 = arg0;
        var2 = var3.bind(var1)(var2);
        var0 = _closure1_slot5;
        var1 = var0.bind(var1)();
        var0 = var1.getNodeFromInternalInstanceHandle;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var2.getNativeTextReference = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [117, 136, 137]);