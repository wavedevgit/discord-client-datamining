// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var3 = function arg0, arg1() {
        _fun10704: for (var _fun10704_ip = 0;;) switch (_fun10704_ip) {
            case 0:
                var4 = arg1;
                var3 = _closure1_slot6;
                var2 = undefined;
                var0 = arg0;
                var3 = var3.bind(var2)(var0, var4);
                var0 = {};
                var5 = _closure1_slot8;
                var5 = var5.bind(var2)(var4);
                var0.type = var5;
                var1 = _closure1_slot9;
                var1 = var1.bind(var2)(var4);
                var0.value = var1;
                var1 = var3.length;
                if (!var1) {
                    _fun10704_ip = 70;
                    continue _fun10704
                }
            case 57:
                var1 = {};
                var1.frames = var3;
                var0.stacktrace = var1;
            case 70:
                var1 = var0.type;
                var1 = var2 === var1;
                if (!var1) {
                    _fun10704_ip = 95;
                    continue _fun10704
                }
            case 82:
                var3 = var0.value;
                var2 = '';
                var1 = var2 === var3;
            case 95:
                if (!var1) {
                    _fun10704_ip = 110;
                    continue _fun10704
                }
            case 98:
                var1 = 'Unrecoverable error caught';
                var0.value = var1;
            case 110:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun10705: for (var _fun10705_ip = 0;;) switch (_fun10705_ip) {
            case 0:
                var6 = arg0;
                var12 = arg1;
                var9 = arg2;
                var13 = arg3;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var8 = 0;
                var0 = var0[var8];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = var1.getClient;
                var1 = var0.bind(var1)();
                var0 = null;
                var0 = var0 == var1;
                var7 = undefined;
                if (var0) {
                    _fun10705_ip = 73;
                    continue _fun10705
                }
            case 57:
                var0 = var1.getOptions;
                var0 = var0.bind(var1)();
                var7 = var0.normalizeDepth;
            case 73:
                var15 = var12;
                var2 = global;
                var1 = undefined;
                var4 = undefined;
                for (var10 in var15)
                    case 90: {
                        var4 = undefined;
                        case 101: var0 = var10;
                        var17 = var2.Object;
                        var17 = var17.prototype;
                        var18 = var17.hasOwnProperty;
                        var17 = var18.call;
                        var17 = var17.bind(var18)(var12, var0);
                        if (!var17) {
                            _fun10705_ip = 90;
                            continue _fun10705
                        }
                        case 135: var17 = var12[var0];
                        var0 = var2.Error;
                        var0 = var17 instanceof var0;
                        var1 = var17;
                        var4 = var1;
                        if (!var0) {
                            _fun10705_ip = 90;
                            continue _fun10705
                        }
                    }
            case 158:
                var1 = {};
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var2 = var2.bind(var5)(var0);
                var0 = var2.normalizeToSize;
                var0 = var0.bind(var2)(var12, var7);
                var1.__serialized__ = var0;
                var0 = {};
                var2 = {};
                if (var4) {
                    _fun10705_ip = 360;
                    continue _fun10705
                }
            case 204:
                var10 = {};
                var11 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var8];
                var11 = var11.bind(var5)(var7);
                var7 = var11.isEvent;
                var7 = var7.bind(var11)(var12);
                if (var7) {
                    _fun10705_ip = 252;
                    continue _fun10705
                }
            case 237:
                var7 = 'Error';
                if (!var13) {
                    _fun10705_ip = 250;
                    continue _fun10705
                }
            case 244:
                var7 = 'UnhandledRejection';
            case 250:
                _fun10705_ip = 262;
                continue _fun10705;
            case 252:
                var11 = var12.constructor;
                var7 = var11.name;
            case 262:
                var10.type = var7;
                var11 = _closure1_slot12;
                var7 = {};
                var7.isUnhandledRejection = var13;
                var7 = var11.bind(var5)(var12, var7);
                var10.value = var7;
                var7 = new Array(1);
                var7[0] = var10;
                var2.values = var7;
                var0.exception = var2;
                var0.extra = var1;
                if (!var9) {
                    _fun10705_ip = 358;
                    continue _fun10705
                }
            case 312:
                var7 = _closure1_slot6;
                var9 = var7.bind(var5)(var6, var9);
                var7 = var9.length;
                if (!var7) {
                    _fun10705_ip = 358;
                    continue _fun10705
                }
            case 330:
                var7 = var0.exception;
                var7 = var7.values;
                var8 = var7[var8];
                var7 = {};
                var7.frames = var9;
                var8.stacktrace = var7;
            case 358:
                return var0;
            case 360:
                var3 = _closure1_slot3;
                var4 = var3.bind(var5)(var6, var4);
                var3 = new Array(1);
                var3[0] = var4;
                var2.values = var3;
                var0.exception = var2;
                var0.extra = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        var0 = {};
        var1 = {};
        var5 = _closure1_slot3;
        var4 = undefined;
        var3 = arg0;
        var2 = arg1;
        var3 = var5.bind(var4)(var3, var2);
        var2 = new Array(1);
        var2[0] = var3;
        var1.values = var2;
        var0.exception = var1;
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun10707: for (var _fun10707_ip = 0;;) switch (_fun10707_ip) {
            case 0:
                var6 = arg1;
                var3 = arg0;
                var4 = undefined;
                var2 = undefined;
                var1 = undefined;
                var0 = undefined;
                var5 = var6.stacktrace;
                if (var5) {
                    _fun10707_ip = 29;
                    continue _fun10707
                }
            case 23:
                var5 = var6.stack;
            case 29:
                if (var5) {
                    _fun10707_ip = 36;
                    continue _fun10707
                }
            case 32:
                var5 = '';
            case 36:
                var2 = var5;
                var7 = 0;
                if (!var6) {
                    _fun10707_ip = 74;
                    continue _fun10707
                }
            case 44:
                var10 = _closure1_slot2;
                var9 = var10.test;
                var8 = var6.message;
                var8 = var9.bind(var10)(var8);
                var7 = 0;
                if (!var8) {
                    _fun10707_ip = 74;
                    continue _fun10707
                }
            case 71:
                var7 = 1;
            case 74:
                var1 = var7;
                var7 = var6.framesToPop;
                var8 = 'number';
                var7 = typeof var7;
                var5 = 0;
                if (!(var8 === var7)) {
                    _fun10707_ip = 102;
                    continue _fun10707
                }
            case 96:
                var5 = var6.framesToPop;
            case 102:
                var0 = var5;
            case 105: // try_start_0
                var0 = var3.bind(var4)(var2, var1, var0);
            case 112: // try_end0
                return var0;
            case 114: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun10708: for (var _fun10708_ip = 0;;) switch (_fun10708_ip) {
            case 0:
                var1 = global;
                var0 = var1.WebAssembly;
                var2 = 'undefined';
                var0 = typeof var0;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun10708_ip = 40;
                    continue _fun10708
                }
            case 22:
                var2 = var1.WebAssembly;
                var3 = var2.Exception;
                var2 = undefined;
                var0 = var2 !== var3;
            case 40:
                if (!var0) {
                    _fun10708_ip = 62;
                    continue _fun10708
                }
            case 43:
                var1 = var1.WebAssembly;
                var2 = var1.Exception;
                var1 = arg0;
                var0 = var1 instanceof var2;
            case 62:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun10709: for (var _fun10709_ip = 0;;) switch (_fun10709_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 == var2;
                var4 = undefined;
                var3 = undefined;
                if (var0) {
                    _fun10709_ip = 21;
                    continue _fun10709
                }
            case 16:
                var3 = var2.name;
            case 21:
                var0 = var3;
                if (var3) {
                    _fun10709_ip = 128;
                    continue _fun10709
                }
            case 27:
                var1 = _closure1_slot7;
                var1 = var1.bind(var4)(var2);
                var0 = var3;
                if (!var1) {
                    _fun10709_ip = 128;
                    continue _fun10709
                }
            case 45:
                var3 = var2.message;
                var4 = 'WebAssembly.Exception';
                var1 = var4;
                if (!var3) {
                    _fun10709_ip = 125;
                    continue _fun10709
                }
            case 62:
                var3 = global;
                var6 = var3.Array;
                var5 = var6.isArray;
                var3 = var2.message;
                var3 = var5.bind(var6)(var3);
                var1 = var4;
                if (!var3) {
                    _fun10709_ip = 125;
                    continue _fun10709
                }
            case 91:
                var3 = var2.message;
                var5 = var3.length;
                var3 = 2;
                var3 = var3 == var5;
                var1 = var4;
                if (!var3) {
                    _fun10709_ip = 125;
                    continue _fun10709
                }
            case 114:
                var3 = var2.message;
                var2 = 0;
                var1 = var3[var2];
            case 125:
                var0 = var1;
            case 128:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var2 = function arg0() {
        _fun10710: for (var _fun10710_ip = 0;;) switch (_fun10710_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 == var2;
                var1 = undefined;
                var3 = undefined;
                if (var0) {
                    _fun10710_ip = 21;
                    continue _fun10710
                }
            case 16:
                var3 = var2.message;
            case 21:
                var0 = _closure1_slot7;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun10710_ip = 95;
                    continue _fun10710
                }
            case 36:
                var0 = 'No error message';
                if (!var3) {
                    _fun10710_ip = 93;
                    continue _fun10710
                }
            case 45:
                var4 = var3.error;
                var1 = var3;
                if (!var4) {
                    _fun10710_ip = 90;
                    continue _fun10710
                }
            case 56:
                var4 = var3.error;
                var4 = var4.message;
                var5 = 'string';
                var4 = typeof var4;
                var1 = var3;
                if (!(var5 === var4)) {
                    _fun10710_ip = 90;
                    continue _fun10710
                }
            case 80:
                var3 = var3.error;
                var1 = var3.message;
            case 90:
                var0 = var1;
            case 93:
                _fun10710_ip = 168;
                continue _fun10710;
            case 95:
                var1 = global;
                var4 = var1.Array;
                var3 = var4.isArray;
                var1 = var2.message;
                var3 = var3.bind(var4)(var1);
                var4 = 'wasm exception';
                var1 = var4;
                if (!var3) {
                    _fun10710_ip = 165;
                    continue _fun10710
                }
            case 130:
                var3 = var2.message;
                var5 = var3.length;
                var3 = 2;
                var3 = var3 == var5;
                var1 = var4;
                if (!var3) {
                    _fun10710_ip = 165;
                    continue _fun10710
                }
            case 153:
                var3 = var2.message;
                var2 = 1;
                var1 = var3[var2];
            case 165:
                var0 = var1;
            case 168:
                return var0;
        }
    };
    var _closure1_slot9 = var2;
    var4 = function arg0, arg1, arg2, arg3, arg4() {
        _fun10711: for (var _fun10711_ip = 0;;) switch (_fun10711_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var6 = arg2;
                var5 = arg3;
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 0;
                var4 = var2[var8];
                var2 = undefined;
                var7 = var7.bind(var2)(var4);
                var4 = var7.isErrorEvent;
                var4 = var4.bind(var7)(var0);
                if (!var4) {
                    _fun10711_ip = 61;
                    continue _fun10711
                }
            case 50:
                var4 = var0.error;
                if (var4) {
                    _fun10711_ip = 663;
                    continue _fun10711
                }
            case 61:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var7.bind(var2)(var4);
                var4 = var7.isDOMError;
                var4 = var4.bind(var7)(var0);
                if (var4) {
                    _fun10711_ip = 411;
                    continue _fun10711
                }
            case 95:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var7.bind(var2)(var4);
                var4 = var7.isDOMException;
                var4 = var4.bind(var7)(var0);
                if (var4) {
                    _fun10711_ip = 411;
                    continue _fun10711
                }
            case 129:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var7.bind(var2)(var4);
                var4 = var7.isError;
                var4 = var4.bind(var7)(var0);
                if (var4) {
                    _fun10711_ip = 399;
                    continue _fun10711
                }
            case 163:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var7.bind(var2)(var4);
                var4 = var7.isPlainObject;
                var4 = var4.bind(var7)(var0);
                if (var4) {
                    _fun10711_ip = 334;
                    continue _fun10711
                }
            case 197:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var7.bind(var2)(var4);
                var4 = var7.isEvent;
                var4 = var4.bind(var7)(var0);
                if (var4) {
                    _fun10711_ip = 334;
                    continue _fun10711
                }
            case 228:
                var4 = _closure1_slot11;
                var18 = undefined;
                var17 = var3;
                var16 = var0;
                var15 = var6;
                var14 = var5;
                var4 = var18[var4](var17, var16, var15, var14, var13);
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var10 = var7[var8];
                var12 = var9.bind(var2)(var10);
                var11 = var12.addExceptionTypeValue;
                var10 = global;
                var10 = var10.HermesInternal;
                var13 = var10.concat;
                var10 = '';
                var10 = var13.bind(var10)(var0);
                var10 = var11.bind(var12)(var4, var10, var2);
                var7 = var7[var8];
                var10 = var9.bind(var2)(var7);
                var9 = var10.addExceptionMechanism;
                var7 = {};
                var11 = true;
                var7.synthetic = var11;
                var7 = var9.bind(var10)(var4, var7);
                _fun10711_ip = 397;
                continue _fun10711;
            case 334:
                var9 = _closure1_slot4;
                var14 = arg4;
                var18 = undefined;
                var17 = var3;
                var16 = var0;
                var15 = var6;
                var7 = var18[var9](var17, var16, var15, var14, var13);
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var8];
                var11 = var10.bind(var2)(var9);
                var10 = var11.addExceptionMechanism;
                var9 = {};
                var12 = true;
                var9.synthetic = var12;
                var9 = var10.bind(var11)(var7, var9);
                var4 = var7;
            case 397:
                _fun10711_ip = 409;
                continue _fun10711;
            case 399:
                var7 = _closure1_slot5;
                var4 = var7.bind(var2)(var3, var0);
            case 409:
                return var4;
            case 411:
                var4 = 'stack';
                var4 = var4 in var0;
                if (var4) {
                    _fun10711_ip = 574;
                    continue _fun10711
                }
            case 425:
                var12 = var0.name;
                if (var12) {
                    _fun10711_ip = 475;
                    continue _fun10711
                }
            case 433:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var7.bind(var2)(var4);
                var4 = var7.isDOMError;
                var7 = var4.bind(var7)(var0);
                var4 = 'DOMException';
                if (!var7) {
                    _fun10711_ip = 472;
                    continue _fun10711
                }
            case 468:
                var4 = 'DOMError';
            case 472:
                var12 = var4;
            case 475:
                var4 = var0.message;
                var7 = var12;
                if (!var4) {
                    _fun10711_ip = 521;
                    continue _fun10711
                }
            case 486:
                var11 = var0.message;
                var4 = global;
                var4 = var4.HermesInternal;
                var10 = var4.concat;
                var9 = '';
                var4 = ': ';
                var7 = var10.bind(var9)(var12, var4, var11);
            case 521:
                var4 = _closure1_slot11;
                var18 = undefined;
                var17 = var3;
                var16 = var7;
                var15 = var6;
                var14 = var5;
                var4 = var18[var4](var17, var16, var15, var14, var13);
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var6 = var6.bind(var2)(var5);
                var5 = var6.addExceptionTypeValue;
                var5 = var5.bind(var6)(var4, var7);
                _fun10711_ip = 584;
                continue _fun10711;
            case 574:
                var5 = _closure1_slot5;
                var4 = var5.bind(var2)(var3, var0);
            case 584:
                var5 = 'code';
                var5 = var5 in var0;
                if (!var5) {
                    _fun10711_ip = 661;
                    continue _fun10711
                }
            case 595:
                var5 = global;
                var9 = var5.Object;
                var8 = var9.assign;
                var7 = var4.tags;
                var6 = {};
                var11 = var0.code;
                var5 = var5.HermesInternal;
                var10 = var5.concat;
                var5 = '';
                var5 = var10.bind(var5)(var11);
                var6['DOMException.code'] = var5;
                var5 = {};
                var5 = var8.bind(var9)(var5, var7, var6);
                var4.tags = var5;
            case 661:
                return var4;
            case 663:
                var1 = _closure1_slot5;
                var0 = var0.error;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var6 = function arg0, arg1, arg2, arg3() {
        _fun10712: for (var _fun10712_ip = 0;;) switch (_fun10712_ip) {
            case 0:
                var1 = arg1;
                var6 = arg2;
                var0 = {};
                var2 = arg3;
                if (!var2) {
                    _fun10712_ip = 121;
                    continue _fun10712
                }
            case 14:
                if (!var6) {
                    _fun10712_ip = 121;
                    continue _fun10712
                }
            case 17:
                var5 = _closure1_slot6;
                var4 = undefined;
                var3 = arg0;
                var7 = var5.bind(var4)(var3, var6);
                var3 = var7.length;
                if (!var3) {
                    _fun10712_ip = 81;
                    continue _fun10712
                }
            case 43:
                var3 = {};
                var6 = {};
                var6.value = var1;
                var5 = {};
                var5.frames = var7;
                var6.stacktrace = var5;
                var5 = new Array(1);
                var5[0] = var6;
                var3.values = var5;
                var0.exception = var3;
            case 81:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 0;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.addExceptionMechanism;
                var2 = {};
                var5 = true;
                var2.synthetic = var5;
                var2 = var3.bind(var4)(var0, var2);
            case 121:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isParameterizedString;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun10712_ip = 167;
                    continue _fun10712
                }
            case 159:
                var0.message = var1;
                return var0;
            case 167:
                var3 = var1.__sentry_template_string__;
                var2 = var1.__sentry_template_values__;
                var1 = {};
                var1.message = var3;
                var1.params = var2;
                var0.logentry = var1;
                return var0;
        }
    };
    var _closure1_slot11 = var6;
    var6 = function arg0, arg1() {
        _fun10713: for (var _fun10713_ip = 0;;) switch (_fun10713_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var3 = var0.isUnhandledRejection;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 0;
                var5 = var2[var4];
                var2 = undefined;
                var6 = var6.bind(var2)(var5);
                var5 = var6.extractExceptionKeysForMessage;
                var5 = var5.bind(var6)(var1);
                var6 = 'exception';
                if (!var3) {
                    _fun10713_ip = 60;
                    continue _fun10713
                }
            case 54:
                var6 = 'promise rejection';
            case 60:
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var4];
                var7 = var7.bind(var2)(var3);
                var3 = var7.isErrorEvent;
                var3 = var3.bind(var7)(var1);
                if (var3) {
                    _fun10713_ip = 255;
                    continue _fun10713
                }
            case 94:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var3 = var3.bind(var2)(var0);
                var0 = var3.isEvent;
                var0 = var0.bind(var3)(var1);
                if (var0) {
                    _fun10713_ip = 159;
                    continue _fun10713
                }
            case 125:
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = 'Object captured as ';
                var0 = ' with keys: ';
                var0 = var4.bind(var3)(var6, var0, var5);
                _fun10713_ip = 253;
                continue _fun10713;
            case 159:
                var4 = var1;
                var3 = undefined;
            case 164: // try_start_0
                var5 = global;
                var7 = var5.Object;
                var5 = var7.getPrototypeOf;
                var4 = var5.bind(var7)(var4);
                var3 = var4;
                var8 = undefined;
                if (!var4) {
                    _fun10713_ip = 201;
                    continue _fun10713
                }
            case 191:
                var3 = var3.constructor;
                var8 = var3.name;
            case 201: // try_end0
                _fun10713_ip = 207;
                continue _fun10713;
            case 203: // catch_target0
                CatchBlockStart(arg_register = 3);
                var8 = undefined;
            case 207:
                var11 = var1.type;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var14 = 'Event `';
                var12 = '` (type=';
                var10 = ') captured as ';
                var13 = var8;
                var9 = var6;
                var0 = var14[var5](var13, var12, var11, var10, var9, var8);
            case 253:
                _fun10713_ip = 296;
                continue _fun10713;
            case 255:
                var11 = var1.message;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var14 = 'Event `ErrorEvent` captured as ';
                var12 = ' with message `';
                var10 = '`';
                var13 = var6;
                var0 = var14[var4](var13, var12, var11, var10, var9);
            case 296:
                return var0;
        }
    };
    var _closure1_slot12 = var6;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var6 = var6.Symbol;
    var7 = var6.toStringTag;
    var6 = {};
    var10 = 'Module';
    var6.value = var10;
    var6 = var8.bind(var9)(var1, var7, var6);
    var6 = /Minified React error #\d+;/i;
    var _closure1_slot2 = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        _fun10714: for (var _fun10714_ip = 0;;) switch (_fun10714_ip) {
            case 0:
                var1 = arg2;
                var8 = _closure1_slot10;
                var5 = null;
                var2 = var5 == var1;
                var3 = undefined;
                var7 = undefined;
                if (var2) {
                    _fun10714_ip = 29;
                    continue _fun10714
                }
            case 23:
                var7 = var1.syntheticException;
            case 29:
                if (var7) {
                    _fun10714_ip = 34;
                    continue _fun10714
                }
            case 32:
                var7 = undefined;
            case 34:
                var12 = arg0;
                var11 = arg1;
                var9 = arg3;
                var13 = undefined;
                var10 = var7;
                var2 = var13[var8](var12, var11, var10, var9, var8);
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 0;
                var6 = var6[var4];
                var7 = var7.bind(var3)(var6);
                var6 = var7.addExceptionMechanism;
                var6 = var6.bind(var7)(var2);
                var6 = 'error';
                var2.level = var6;
                var5 = var5 != var1;
                if (!var5) {
                    _fun10714_ip = 105;
                    continue _fun10714
                }
            case 99:
                var5 = var1.event_id;
            case 105:
                if (!var5) {
                    _fun10714_ip = 120;
                    continue _fun10714
                }
            case 108:
                var1 = var1.event_id;
                var2.event_id = var1;
            case 120:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var1 = var1.bind(var3)(var0);
                var0 = var1.resolvedSyncPromise;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1.eventFromException = var6;
    var5 = function arg0, arg1() {
        _fun10715: for (var _fun10715_ip = 0;;) switch (_fun10715_ip) {
            case 0:
                var3 = undefined;
                var2 = undefined;
                var1 = arguments.length;
                var0 = 2;
                var1 = var1 > var0;
                var4 = 'info';
                var5 = var4;
                if (!var1) {
                    _fun10715_ip = 39;
                    continue _fun10715
                }
            case 24:
                var1 = arguments[var0];
                var5 = var4;
                if (!(var3 !== var1)) {
                    _fun10715_ip = 39;
                    continue _fun10715
                }
            case 35:
                var5 = arguments[var0];
            case 39:
                var1 = arguments.length;
                var0 = 3;
                var4 = var1 > var0;
                var1 = undefined;
                if (!var4) {
                    _fun10715_ip = 58;
                    continue _fun10715
                }
            case 54:
                var1 = arguments[var0];
            case 58:
                var4 = arguments.length;
                var0 = 4;
                var4 = var4 > var0;
                var9 = undefined;
                if (!var4) {
                    _fun10715_ip = 77;
                    continue _fun10715
                }
            case 73:
                var9 = arguments[var0];
            case 77:
                var8 = _closure1_slot11;
                var4 = null;
                var2 = var4 == var1;
                var7 = undefined;
                if (var2) {
                    _fun10715_ip = 101;
                    continue _fun10715
                }
            case 95:
                var7 = var1.syntheticException;
            case 101:
                if (var7) {
                    _fun10715_ip = 106;
                    continue _fun10715
                }
            case 104:
                var7 = undefined;
            case 106:
                var13 = arg0;
                var12 = arg1;
                var14 = undefined;
                var11 = var7;
                var10 = var9;
                var2 = var14[var8](var13, var12, var11, var10, var9);
                var2.level = var5;
                var4 = var4 != var1;
                if (!var4) {
                    _fun10715_ip = 143;
                    continue _fun10715
                }
            case 137:
                var4 = var1.event_id;
            case 143:
                if (!var4) {
                    _fun10715_ip = 158;
                    continue _fun10715
                }
            case 146:
                var1 = var1.event_id;
                var2.event_id = var1;
            case 158:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.resolvedSyncPromise;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1.eventFromMessage = var5;
    var1.eventFromUnknownInput = var4;
    var1.exceptionFromError = var3;
    var1.extractMessage = var2;
    var1.extractType = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);