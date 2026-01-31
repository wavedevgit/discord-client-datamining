// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var2.jsonReadOptions = var0;
    var2.jsonWriteOptions = var0;
    var2.mergeJsonOptions = var0;
    var4 = false;
    var3 = {
        'emitDefaultValues': false,
        'enumAsInteger': false,
        'useProtoFieldName': false,
        'prettySpaces': 0
    };
    var _closure1_slot1 = var3;
    var3 = {};
    var3.ignoreUnknownFields = var4;
    var _closure1_slot2 = var3;
    var3 = function(arg0) { // Original name: jsonReadOptions, environment: var1
        _fun14883: for (var _fun14883_ip = 0;;) switch (_fun14883_ip) {
            case 0:
                var4 = arg0;
                if (var4) {
                    _fun14883_ip = 15;
                    continue _fun14883
                }
            case 6:
                var0 = _closure1_slot2;
                _fun14883_ip = 60;
                continue _fun14883;
            case 15:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var7 = var1.Object;
                var6 = var7.assign;
                var5 = _closure1_slot2;
                var1 = {};
                var1 = var6.bind(var7)(var1, var5);
                var0 = var2.bind(var3)(var1, var4);
            case 60:
                return var0;
        }
    };
    var2.jsonReadOptions = var3;
    var3 = function(arg0) { // Original name: jsonWriteOptions, environment: var1
        _fun14884: for (var _fun14884_ip = 0;;) switch (_fun14884_ip) {
            case 0:
                var4 = arg0;
                if (var4) {
                    _fun14884_ip = 15;
                    continue _fun14884
                }
            case 6:
                var0 = _closure1_slot1;
                _fun14884_ip = 60;
                continue _fun14884;
            case 15:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var7 = var1.Object;
                var6 = var7.assign;
                var5 = _closure1_slot1;
                var1 = {};
                var1 = var6.bind(var7)(var1, var5);
                var0 = var2.bind(var3)(var1, var4);
            case 60:
                return var0;
        }
    };
    var2.jsonWriteOptions = var3;
    var1 = function(arg0, arg1) { // Original name: mergeJsonOptions, environment: var1
        _fun14885: for (var _fun14885_ip = 0;;) switch (_fun14885_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var0 = global;
                var2 = var0.Object;
                var1 = var2.assign;
                var4 = var0.Object;
                var3 = var4.assign;
                var0 = {};
                var0 = var3.bind(var4)(var0, var9);
                var0 = var1.bind(var2)(var0, var8);
                var4 = new Array(0);
                var3 = var4.concat;
                var5 = _closure1_slot0;
                var7 = null;
                var10 = var7 == var9;
                var6 = undefined;
                var2 = undefined;
                if (var10) {
                    _fun14885_ip = 79;
                    continue _fun14885
                }
            case 73:
                var2 = var9.typeRegistry;
            case 79:
                if (!(var7 !== var2)) {
                    _fun14885_ip = 87;
                    continue _fun14885
                }
            case 83:
                if (!(var6 === var2)) {
                    _fun14885_ip = 91;
                    continue _fun14885
                }
            case 87:
                var2 = new Array(0);
            case 91:
                var2 = var5.bind(var6)(var2);
                var5 = _closure1_slot0;
                var9 = var7 == var8;
                var1 = undefined;
                if (var9) {
                    _fun14885_ip = 115;
                    continue _fun14885
                }
            case 109:
                var1 = var8.typeRegistry;
            case 115:
                if (!(var7 !== var1)) {
                    _fun14885_ip = 123;
                    continue _fun14885
                }
            case 119:
                if (!(var6 === var1)) {
                    _fun14885_ip = 127;
                    continue _fun14885
                }
            case 123:
                var1 = new Array(0);
            case 127:
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
                var0.typeRegistry = var1;
                return var0;
        }
    };
    var2.mergeJsonOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65]);