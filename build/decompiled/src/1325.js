// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var2.MessageType = var0;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1, arg2() {
            _fun14890: for (var _fun14890_ip = 0;;) switch (_fun14890_ip) {
                case 0:
                    var6 = arg1;
                    var3 = arg2;
                    var2 = this;
                    var5 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = 16;
                    var2.defaultCheckDepth = var4;
                    var4 = arg0;
                    var2.typeName = var4;
                    var5 = var6.map;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 2;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.normalizeFieldInfo;
                    var4 = var5.bind(var6)(var4);
                    var2.fields = var4;
                    var4 = null;
                    if (!(var4 == var3)) {
                        _fun14890_ip = 99;
                        continue _fun14890
                    }
                case 97:
                    var3 = {};
                case 99:
                    var2.options = var3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 3;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.ReflectionTypeCheck;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var11 = var5;
                    var10 = var2;
                    var1 = new var11[var1](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var2.refTypeCheck = var1;
                    var1 = 4;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.ReflectionJsonReader;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var11 = var5;
                    var10 = var2;
                    var1 = new var11[var1](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var2.refJsonReader = var1;
                    var1 = 5;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.ReflectionJsonWriter;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var11 = var5;
                    var10 = var2;
                    var1 = new var11[var1](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var2.refJsonWriter = var1;
                    var1 = 6;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.ReflectionBinaryReader;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var11 = var5;
                    var10 = var2;
                    var1 = new var11[var1](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var2.refBinReader = var1;
                    var1 = 7;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.ReflectionBinaryWriter;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var11 = var3;
                    var10 = var2;
                    var1 = new var11[var1](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.refBinWriter = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'create';
        var0.key = var1;
        var1 = function arg0() {
            _fun14891: for (var _fun14891_ip = 0;;) switch (_fun14891_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 8;
                    var0 = var5[var0];
                    var5 = undefined;
                    var2 = var2.bind(var5)(var0);
                    var0 = var2.reflectionCreate;
                    var0 = var0.bind(var2)(var3);
                    if (!(var5 !== var4)) {
                        _fun14891_ip = 79;
                        continue _fun14891
                    }
                case 46:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 9;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 79:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(16);
        var1[0] = var0;
        var0 = {};
        var5 = 'clone';
        var0.key = var5;
        var5 = function arg0() {
            var4 = this;
            var0 = var4.create;
            var0 = var0.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.reflectionMergePartial;
            var1 = arg0;
            var1 = var2.bind(var3)(var4, var0, var1);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'equals';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.reflectionEquals;
            var2 = this;
            var1 = arg0;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'is';
        var0.key = var5;
        var5 = function arg0() {
            _fun14894: for (var _fun14894_ip = 0;;) switch (_fun14894_ip) {
                case 0:
                    var0 = this;
                    var4 = undefined;
                    var2 = undefined;
                    var3 = arguments.length;
                    var1 = 1;
                    if (!(var3 > var1)) {
                        _fun14894_ip = 25;
                        continue _fun14894
                    }
                case 17:
                    var3 = arguments[var1];
                    if (!(var4 === var3)) {
                        _fun14894_ip = 33;
                        continue _fun14894
                    }
                case 25:
                    var4 = var0.defaultCheckDepth;
                    _fun14894_ip = 37;
                    continue _fun14894;
                case 33:
                    var4 = arguments[var1];
                case 37:
                    var3 = var0.refTypeCheck;
                    var2 = var3.is;
                    var1 = arg0;
                    var0 = false;
                    var0 = var2.bind(var3)(var1, var4, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'isAssignable';
        var0.key = var5;
        var5 = function arg0() {
            _fun14895: for (var _fun14895_ip = 0;;) switch (_fun14895_ip) {
                case 0:
                    var0 = this;
                    var4 = undefined;
                    var2 = undefined;
                    var3 = arguments.length;
                    var1 = 1;
                    if (!(var3 > var1)) {
                        _fun14895_ip = 25;
                        continue _fun14895
                    }
                case 17:
                    var3 = arguments[var1];
                    if (!(var4 === var3)) {
                        _fun14895_ip = 33;
                        continue _fun14895
                    }
                case 25:
                    var4 = var0.defaultCheckDepth;
                    _fun14895_ip = 37;
                    continue _fun14895;
                case 33:
                    var4 = arguments[var1];
                case 37:
                    var3 = var0.refTypeCheck;
                    var2 = var3.is;
                    var1 = arg0;
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var4, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'mergePartial';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.reflectionMergePartial;
            var3 = this;
            var2 = arg0;
            var1 = arg1;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'fromBinary';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = arg0;
            var4 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.binaryReadOptions;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var4.internalBinaryRead;
            var1 = var3.readerFactory;
            var1 = var1.bind(var3)(var0);
            var0 = var0.byteLength;
            var0 = var2.bind(var4)(var1, var0, var3);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'fromJson';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = this;
            var2 = var3.internalJsonRead;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var1);
            var1 = var4.jsonReadOptions;
            var0 = arg1;
            var1 = var1.bind(var4)(var0);
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'fromJsonString';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = this;
            var0 = global;
            var2 = var0.JSON;
            var1 = var2.parse;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var1 = var3.fromJson;
            var0 = arg1;
            var0 = var1.bind(var3)(var2, var0);
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'toJson';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = this;
            var2 = var3.internalJsonWrite;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var1);
            var1 = var4.jsonWriteOptions;
            var0 = arg1;
            var1 = var1.bind(var4)(var0);
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'toJsonString';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun14901: for (var _fun14901_ip = 0;;) switch (_fun14901_ip) {
                case 0:
                    var0 = arg1;
                    var3 = this;
                    var2 = var3.toJson;
                    var1 = arg0;
                    var4 = var2.bind(var3)(var1, var0);
                    var1 = global;
                    var3 = var1.JSON;
                    var2 = var3.stringify;
                    var1 = null;
                    var7 = var1 == var0;
                    var6 = undefined;
                    var5 = undefined;
                    if (var7) {
                        _fun14901_ip = 54;
                        continue _fun14901
                    }
                case 48:
                    var5 = var0.prettySpaces;
                case 54:
                    var0 = 0;
                    if (!(var1 !== var5)) {
                        _fun14901_ip = 69;
                        continue _fun14901
                    }
                case 60:
                    var0 = 0;
                    if (!(var6 !== var5)) {
                        _fun14901_ip = 69;
                        continue _fun14901
                    }
                case 66:
                    var0 = var5;
                case 69:
                    var0 = var2.bind(var3)(var4, var1, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'toBinary';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var4 = this;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.binaryWriteOptions;
            var0 = arg1;
            var3 = var1.bind(var2)(var0);
            var2 = var4.internalBinaryWrite;
            var0 = var3.writerFactory;
            var1 = var0.bind(var3)();
            var0 = arg0;
            var1 = var2.bind(var4)(var0, var1, var3);
            var0 = var1.finish;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'internalJsonRead';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun14903: for (var _fun14903_ip = 0;;) switch (_fun14903_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg2;
                    var1 = this;
                    var2 = null;
                    if (!(var2 !== var4)) {
                        _fun14903_ip = 84;
                        continue _fun14903
                    }
                case 15:
                    var5 = 'object';
                    var3 = typeof var4;
                    if (!(var5 === var3)) {
                        _fun14903_ip = 84;
                        continue _fun14903
                    }
                case 26:
                    var3 = global;
                    var5 = var3.Array;
                    var3 = var5.isArray;
                    var3 = var3.bind(var5)(var4);
                    if (var3) {
                        _fun14903_ip = 84;
                        continue _fun14903
                    }
                case 47:
                    if (!(var2 == var0)) {
                        _fun14903_ip = 60;
                        continue _fun14903
                    }
                case 51:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 60:
                    var5 = var1.refJsonReader;
                    var3 = var5.read;
                    var2 = arg1;
                    var2 = var3.bind(var5)(var4, var0, var2);
                    return var0;
                case 84:
                    var0 = global;
                    var2 = var0.Error;
                    var6 = var1.typeName;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var1 = var3.typeofJsonValue;
                    var8 = var1.bind(var3)(var4);
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var11 = 'Unable to parse message ';
                    var9 = ' from JSON ';
                    var7 = '.';
                    var10 = var6;
                    var10 = var11[var4](var10, var9, var8, var7, var6);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'internalJsonWrite';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            var3 = var0.refJsonWriter;
            var2 = var3.write;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'internalBinaryWrite';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var0 = arg1;
            var1 = this;
            var4 = var1.refBinWriter;
            var3 = var4.write;
            var2 = arg0;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var0, var1);
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'internalBinaryRead';
        var0.key = var5;
        var4 = function arg0, arg1, arg2, arg3() {
            _fun14906: for (var _fun14906_ip = 0;;) switch (_fun14906_ip) {
                case 0:
                    var0 = arg3;
                    var1 = this;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun14906_ip = 21;
                        continue _fun14906
                    }
                case 12:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 21:
                    var5 = var1.refBinReader;
                    var4 = var5.read;
                    var9 = arg0;
                    var7 = arg2;
                    var6 = arg1;
                    var10 = var5;
                    var8 = var0;
                    var1 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var0.value = var4;
        var1[15] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.MessageType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1326, 1328, 1330, 1332, 1333, 1335, 1336, 1337, 1338, 1318, 1323, 1321, 1314]);