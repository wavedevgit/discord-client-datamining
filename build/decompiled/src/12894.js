// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0() {
        _fun98893: for (var _fun98893_ip = 0;;) switch (_fun98893_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.exception;
                var0 = undefined;
                if (!var2) {
                    _fun98893_ip = 47;
                    continue _fun98893
                }
            case 14:
                var2 = var1.exception;
                var2 = var2.values;
                var0 = undefined;
                if (!var2) {
                    _fun98893_ip = 47;
                    continue _fun98893
                }
            case 30:
                var1 = var1.exception;
                var2 = var1.values;
                var1 = 0;
                var0 = var2[var1];
            case 47:
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var2 = function arg0() {
        _fun98894: for (var _fun98894_ip = 0;;) switch (_fun98894_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.parseInt;
                if (var3) {
                    _fun98894_ip = 18;
                    continue _fun98894
                }
            case 14:
                var3 = '';
            case 18:
                var1 = undefined;
                var0 = 10;
                var0 = var2.bind(var1)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
    var _closure1_slot2 = var2;
    var2 = function arg0, arg1() {
        _fun98895: for (var _fun98895_ip = 0;;) switch (_fun98895_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var0 = undefined;
                var4 = undefined;
                var5 = arguments.length;
                var3 = 2;
                var5 = var5 > var3;
                var8 = 5;
                var7 = var8;
                if (!var5) {
                    _fun98895_ip = 46;
                    continue _fun98895
                }
            case 31:
                var5 = arguments[var3];
                var7 = var8;
                if (!(var0 !== var5)) {
                    _fun98895_ip = 46;
                    continue _fun98895
                }
            case 42:
                var7 = arguments[var3];
            case 46:
                var3 = var2.lineno;
                if (!(var0 !== var3)) {
                    _fun98895_ip = 311;
                    continue _fun98895
                }
            case 59:
                var11 = var6.length;
                var4 = global;
                var9 = var4.Math;
                var5 = var9.max;
                var13 = var4.Math;
                var12 = var13.min;
                var8 = 1;
                var10 = var11 - var8;
                var3 = var2.lineno;
                var3 = var3 - var8;
                var3 = var12.bind(var13)(var10, var3);
                var13 = 0;
                var3 = var5.bind(var9)(var3, var13);
                var9 = var6.slice;
                var12 = var4.Math;
                var10 = var12.max;
                var5 = var3 - var7;
                var5 = var10.bind(var12)(var13, var5);
                var10 = var9.bind(var6)(var5, var3);
                var9 = var10.map;
                var5 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.snipLine;
                    var1 = arg0;
                    var0 = 0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var9.bind(var10)(var5);
                var2.pre_context = var5;
                var10 = var4.Math;
                var9 = var10.min;
                var5 = var11 - var8;
                var5 = var9.bind(var10)(var5, var3);
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var8];
                var12 = var10.bind(var0)(var9);
                var10 = var12.snipLine;
                var9 = var6[var5];
                var5 = var2.colno;
                if (var5) {
                    _fun98895_ip = 236;
                    continue _fun98895
                }
            case 234:
                var5 = 0;
            case 236:
                var5 = var10.bind(var12)(var9, var5);
                var2.context_line = var5;
                var5 = var6.slice;
                var10 = var4.Math;
                var9 = var10.min;
                var4 = var3 + var8;
                var4 = var9.bind(var10)(var4, var11);
                var3 = var3 + var8;
                var3 = var3 + var7;
                var4 = var5.bind(var6)(var4, var3);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.snipLine;
                    var1 = arg0;
                    var0 = 0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var2.post_context = var1;
            case 311:
                return var0;
        }
    };
    var1.addContextToFrame = var2;
    var2 = function arg0, arg1() {
        _fun98898: for (var _fun98898_ip = 0;;) switch (_fun98898_ip) {
            case 0:
                var2 = arg1;
                var3 = _closure1_slot3;
                var0 = undefined;
                var1 = arg0;
                var1 = var3.bind(var0)(var1);
                if (!var1) {
                    _fun98898_ip = 135;
                    continue _fun98898
                }
            case 23:
                var3 = var1.mechanism;
                var4 = global;
                var8 = var4.Object;
                var7 = var8.assign;
                var12 = {};
                var11 = {
                    'type': 'generic',
                    'handled': true
                };
                var13 = var8;
                var10 = var3;
                var9 = var2;
                var5 = var13[var7](var12, var11, var10, var9, var8);
                var1.mechanism = var5;
                if (!var2) {
                    _fun98898_ip = 135;
                    continue _fun98898
                }
            case 76:
                var5 = 'data';
                var5 = var5 in var2;
                if (!var5) {
                    _fun98898_ip = 135;
                    continue _fun98898
                }
            case 87:
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = var3;
                if (!var4) {
                    _fun98898_ip = 109;
                    continue _fun98898
                }
            case 104:
                var4 = var3.data;
            case 109:
                var3 = var2.data;
                var2 = {};
                var2 = var5.bind(var6)(var2, var4, var3);
                var1 = var1.mechanism;
                var1.data = var2;
            case 135:
                return var0;
        }
    };
    var1.addExceptionMechanism = var2;
    var2 = function arg0, arg1, arg2() {
        _fun98899: for (var _fun98899_ip = 0;;) switch (_fun98899_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var0 = var3.exception;
                if (var0) {
                    _fun98899_ip = 20;
                    continue _fun98899
                }
            case 18:
                var0 = {};
            case 20:
                var3.exception = var0;
                var4 = var0.values;
                if (var4) {
                    _fun98899_ip = 38;
                    continue _fun98899
                }
            case 34:
                var4 = new Array(0);
            case 38:
                var0.values = var4;
                var3 = 0;
                var0 = var4[var3];
                if (var0) {
                    _fun98899_ip = 55;
                    continue _fun98899
                }
            case 53:
                var0 = {};
            case 55:
                var4[var3] = var0;
                var3 = var0.value;
                if (var3) {
                    _fun98899_ip = 80;
                    continue _fun98899
                }
            case 67:
                if (var2) {
                    _fun98899_ip = 74;
                    continue _fun98899
                }
            case 70:
                var2 = '';
            case 74:
                var0.value = var2;
            case 80:
                var2 = var0.type;
                if (var2) {
                    _fun98899_ip = 101;
                    continue _fun98899
                }
            case 88:
                if (var1) {
                    _fun98899_ip = 95;
                    continue _fun98899
                }
            case 91:
                var1 = 'Error';
            case 95:
                var0.type = var1;
            case 101:
                var0 = undefined;
                return var0;
        }
    };
    var1.addExceptionTypeValue = var2;
    var2 = function arg0() {
        _fun98900: for (var _fun98900_ip = 0;;) switch (_fun98900_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var2);
                var0 = var2;
                if (var1) {
                    _fun98900_ip = 38;
                    continue _fun98900
                }
            case 27:
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 38:
                return var0;
        }
    };
    var1.arrayify = var2;
    var2 = function arg0() {
        _fun98901: for (var _fun98901_ip = 0;;) switch (_fun98901_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                if (!var1) {
                    _fun98901_ip = 21;
                    continue _fun98901
                }
            case 9:
                var1 = var0;
                var1 = var1.__sentry_captured__;
                if (var1) {
                    _fun98901_ip = 76;
                    continue _fun98901
                }
            case 21: // try_start_0
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.addNonEnumerableProperty;
                var2 = var0;
                var1 = '__sentry_captured__';
                var0 = true;
                var0 = var3.bind(var4)(var2, var1, var0);
            case 68: // try_end0
                _fun98901_ip = 72;
                continue _fun98901;
            case 70: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 72:
                var0 = false;
                return var0;
            case 76:
                var0 = true;
                return var0;
        }
    };
    var1.checkOrSetAlreadyCaught = var2;
    var2 = function arg0() {
        _fun98902: for (var _fun98902_ip = 0;;) switch (_fun98902_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.message;
                var4 = var3.event_id;
                if (var0) {
                    _fun98902_ip = 142;
                    continue _fun98902
                }
            case 20:
                var2 = _closure1_slot3;
                var1 = undefined;
                var3 = var2.bind(var1)(var3);
                if (var3) {
                    _fun98902_ip = 51;
                    continue _fun98902
                }
            case 37:
                var1 = var4;
                if (var4) {
                    _fun98902_ip = 49;
                    continue _fun98902
                }
            case 43:
                var1 = '<unknown>';
            case 49:
                _fun98902_ip = 140;
                continue _fun98902;
            case 51:
                var2 = var3.type;
                if (!var2) {
                    _fun98902_ip = 67;
                    continue _fun98902
                }
            case 59:
                var2 = var3.value;
                if (var2) {
                    _fun98902_ip = 97;
                    continue _fun98902
                }
            case 67:
                var2 = var3.type;
                if (var2) {
                    _fun98902_ip = 80;
                    continue _fun98902
                }
            case 75:
                var2 = var3.value;
            case 80:
                if (var2) {
                    _fun98902_ip = 86;
                    continue _fun98902
                }
            case 83:
                var2 = var4;
            case 86:
                if (var2) {
                    _fun98902_ip = 95;
                    continue _fun98902
                }
            case 89:
                var2 = '<unknown>';
            case 95:
                _fun98902_ip = 137;
                continue _fun98902;
            case 97:
                var7 = var3.type;
                var6 = var3.value;
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var4 = '';
                var3 = ': ';
                var2 = var5.bind(var4)(var7, var3, var6);
            case 137:
                var1 = var2;
            case 140:
                return var1;
            case 142:
                return var0;
        }
    };
    var1.getEventDescription = var2;
    var2 = function arg0() {
        _fun98903: for (var _fun98903_ip = 0;;) switch (_fun98903_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.match;
                var1 = _closure1_slot2;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun98903_ip = 28;
                    continue _fun98903
                }
            case 24:
                var2 = new Array(0);
            case 28:
                var3 = _closure1_slot4;
                var0 = 1;
                var0 = var2[var0];
                var1 = undefined;
                var7 = var3.bind(var1)(var0);
                var0 = 2;
                var0 = var2[var0];
                var6 = var3.bind(var1)(var0);
                var0 = 3;
                var0 = var2[var0];
                var3 = var3.bind(var1)(var0);
                var0 = {};
                var4 = 5;
                var4 = var2[var4];
                var0.buildmetadata = var4;
                var4 = global;
                var5 = var4.isNaN;
                var8 = var5.bind(var1)(var7);
                var5 = undefined;
                if (var8) {
                    _fun98903_ip = 105;
                    continue _fun98903
                }
            case 102:
                var5 = var7;
            case 105:
                var0.major = var5;
                var5 = var4.isNaN;
                var7 = var5.bind(var1)(var6);
                var5 = undefined;
                if (var7) {
                    _fun98903_ip = 129;
                    continue _fun98903
                }
            case 126:
                var5 = var6;
            case 129:
                var0.minor = var5;
                var4 = var4.isNaN;
                var4 = var4.bind(var1)(var3);
                var1 = undefined;
                if (var4) {
                    _fun98903_ip = 153;
                    continue _fun98903
                }
            case 150:
                var1 = var3;
            case 153:
                var0.patch = var1;
                var1 = 4;
                var1 = var2[var1];
                var0.prerelease = var1;
                return var0;
        }
    };
    var1.parseSemver = var2;
    var0 = function() {
        _fun98904: for (var _fun98904_ip = 0;;) switch (_fun98904_ip) {
            case 0:
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 0;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.GLOBAL_OBJ;
                var4 = var3.crypto;
                var2 = var4;
                if (var4) {
                    _fun98904_ip = 52;
                    continue _fun98904
                }
            case 46:
                var2 = var3.msCrypto;
            case 52:
                var1 = var2;
                var _closure2_slot0 = var2;
                var2 = function() {
                    var0 = global;
                    var1 = var0.Math;
                    var0 = var1.random;
                    var1 = var0.bind(var1)();
                    var0 = 16;
                    var0 = var0 * var1;
                    return var0;
                };
                var _closure2_slot1 = var2;
            case 70: // try_start_0
                var2 = var1;
                if (!var2) {
                    _fun98904_ip = 88;
                    continue _fun98904
                }
            case 76:
                var2 = var1;
                var2 = var2.randomUUID;
                if (var2) {
                    _fun98904_ip = 122;
                    continue _fun98904
                }
            case 88:
                var3 = var1;
                var2 = var3;
                if (!var3) {
                    _fun98904_ip = 106;
                    continue _fun98904
                }
            case 97:
                var3 = var1;
                var2 = var3.getRandomValues;
            case 106:
                if (!var2) {
                    _fun98904_ip = 120;
                    continue _fun98904
                }
            case 109:
                var2 = function() {
                    var0 = global;
                    var2 = var0.Uint8Array;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 1;
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var1 = var0 instanceof Object ? var0 : var1;
                    var2 = _closure2_slot0;
                    var0 = var2.getRandomValues;
                    var0 = var0.bind(var2)(var1);
                    var0 = 0;
                    var0 = var1[var0];
                    return var0;
                };
                _closure2_slot1 = var2;
            case 120: // try_end0
                _fun98904_ip = 168;
                continue _fun98904;
            case 122: // try_start_1
                var2 = var1;
                var1 = var2.randomUUID;
                var4 = var1.bind(var2)();
                var3 = var4.replace;
                var2 = /-/g;
                var1 = '';
                var1 = var3.bind(var4)(var2, var1);
            case 164: // try_end1
                return var1;
            case 166: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
            case 168:
                var3 = '10000000100040008000100000000000';
                var2 = var3.replace;
                var1 = /[018]/g;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var0 = 15;
                    var2 = var0 & var2;
                    var0 = 4;
                    var0 = var1 / var0;
                    var0 = var2 >> var0;
                    var2 = var1 ^ var0;
                    var1 = var2.toString;
                    var0 = 16;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.uuid4 = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12875, 12872, 12884]);