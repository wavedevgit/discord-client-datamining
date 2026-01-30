// ../discord_common/js/packages/protos/google/protobuf/timestamp.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun14996: for (var _fun14996_ip = 0;;) switch (_fun14996_ip) {
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
                _fun14996_ip = 74;
                continue _fun14996;
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
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageType;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: Timestamp$Type, environment: var5
            _fun15000: for (var _fun15000_ip = 0;;) switch (_fun15000_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = new Array(2);
                    var5 = {
                        'no': 1,
                        'name': 'seconds',
                        'kind': 'scalar',
                        'T': 3
                    };
                    var0[0] = var5;
                    var5 = {
                        'no': 2,
                        'name': 'nanos',
                        'kind': 'scalar',
                        'T': 5
                    };
                    var0[1] = var5;
                    var8 = ['google.protobuf.Timestamp'];
                    var8[1] = var0;
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun15000_ip = 112;
                        continue _fun15000
                    }
                case 99:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun15000_ip = 146;
                    continue _fun15000;
                case 112:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 146:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'now';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var1 = this;
            var0 = var1.create;
            var0 = var0.bind(var1)();
            var1 = global;
            var3 = var1.Date;
            var2 = var3.now;
            var2 = var2.bind(var3)();
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 6;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var5 = var3.PbLong;
            var4 = var5.from;
            var7 = var1.Math;
            var6 = var7.floor;
            var1 = 1000;
            var3 = var2 / var1;
            var3 = var6.bind(var7)(var3);
            var4 = var4.bind(var5)(var3);
            var3 = var4.toString;
            var3 = var3.bind(var4)();
            var0.seconds = var3;
            var2 = var2 % var1;
            var1 = 1000000;
            var1 = var2 * var1;
            var0.nanos = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'toDate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var3 = global;
            var2 = var3.Date;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var5 = var1.PbLong;
            var4 = var5.from;
            var1 = var0.seconds;
            var4 = var4.bind(var5)(var1);
            var1 = var4.toNumber;
            var4 = var1.bind(var4)();
            var1 = 1000;
            var1 = var1 * var4;
            var4 = var3.Math;
            var3 = var4.ceil;
            var5 = var0.nanos;
            var0 = 1000000;
            var0 = var5 / var0;
            var0 = var3.bind(var4)(var0);
            var6 = var1 + var0;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var7 = var1;
            var0 = new var7[var2](var6, var5);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'fromDate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = arg0;
            var1 = this;
            var0 = var1.create;
            var0 = var0.bind(var1)();
            var1 = var2.getTime;
            var2 = var1.bind(var2)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var5 = var1.PbLong;
            var4 = var5.from;
            var1 = global;
            var7 = var1.Math;
            var6 = var7.floor;
            var1 = 1000;
            var3 = var2 / var1;
            var3 = var6.bind(var7)(var3);
            var4 = var4.bind(var5)(var3);
            var3 = var4.toString;
            var3 = var3.bind(var4)();
            var0.seconds = var3;
            var2 = var2 % var1;
            var1 = 1000000;
            var1 = var2 * var1;
            var0.nanos = var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalJsonWrite';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15004: for (var _fun15004_ip = 0;;) switch (_fun15004_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var9 = 6;
                    var2 = var0[var9];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var3 = var0.PbLong;
                    var2 = var3.from;
                    var0 = var1.seconds;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.toNumber;
                    var2 = var0.bind(var2)();
                    var0 = 1000;
                    var3 = var0 * var2;
                    var0 = global;
                    var5 = var0.Date;
                    var4 = var5.parse;
                    var2 = '0001-01-01T00:00:00Z';
                    var2 = var4.bind(var5)(var2);
                    if (!(!(var3 < var2))) {
                        _fun15004_ip = 413;
                        continue _fun15004
                    }
                case 102:
                    var5 = var0.Date;
                    var4 = var5.parse;
                    var2 = '9999-12-31T23:59:59Z';
                    var2 = var4.bind(var5)(var2);
                    if (!(!(var3 > var2))) {
                        _fun15004_ip = 413;
                        continue _fun15004
                    }
                case 132:
                    var2 = var1.nanos;
                    var8 = 0;
                    if (!(!(var2 < var8))) {
                        _fun15004_ip = 379;
                        continue _fun15004
                    }
                case 147:
                    var2 = var1.nanos;
                    var2 = var2 > var8;
                    var5 = 'Z';
                    var4 = var5;
                    if (!var2) {
                        _fun15004_ip = 321;
                        continue _fun15004
                    }
                case 170:
                    var2 = var1.nanos;
                    var1 = 1000000000;
                    var2 = var2 + var1;
                    var1 = var2.toString;
                    var6 = var1.bind(var2)();
                    var2 = var6.substring;
                    var1 = 1;
                    var7 = var2.bind(var6)(var1);
                    var1 = var7.substring;
                    var6 = 3;
                    var2 = var1.bind(var7)(var6);
                    var1 = '000000';
                    if (!(var1 !== var2)) {
                        _fun15004_ip = 294;
                        continue _fun15004
                    }
                case 233:
                    var1 = var7.substring;
                    var2 = var1.bind(var7)(var9);
                    var1 = '000';
                    if (!(var1 !== var2)) {
                        _fun15004_ip = 268;
                        continue _fun15004
                    }
                case 254:
                    var1 = '.';
                    var1 = var1 + var7;
                    var1 = var1 + var5;
                    _fun15004_ip = 292;
                    continue _fun15004;
                case 268:
                    var2 = var7.substring;
                    var9 = var2.bind(var7)(var8, var9);
                    var2 = '.';
                    var2 = var2 + var9;
                    var1 = var2 + var5;
                case 292:
                    _fun15004_ip = 318;
                    continue _fun15004;
                case 294:
                    var2 = var7.substring;
                    var6 = var2.bind(var7)(var8, var6);
                    var2 = '.';
                    var2 = var2 + var6;
                    var1 = var2 + var5;
                case 318:
                    var4 = var1;
                case 321:
                    var1 = var0.Date;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var12 = var2;
                    var11 = var3;
                    var1 = new var12[var1](var11, var10);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var2.toISOString;
                    var3 = var1.bind(var2)();
                    var2 = var3.replace;
                    var1 = '.000Z';
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                case 379:
                    var3 = var0.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var11 = 'Unable to encode invalid Timestamp to JSON. Nanos must not be negative.';
                    var12 = var2;
                    var1 = new var12[var3](var11, var10);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 413:
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = 'Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.';
                    var12 = var1;
                    var0 = new var12[var2](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15005: for (var _fun15005_ip = 0;;) switch (_fun15005_ip) {
                case 0:
                    var3 = arg0;
                    var1 = arg2;
                    var4 = this;
                    var2 = 'string';
                    var0 = typeof var3;
                    if (!(var2 === var0)) {
                        _fun15005_ip = 549;
                        continue _fun15005
                    }
                case 23:
                    var2 = var3.match;
                    var0 = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/;
                    var9 = var2.bind(var3)(var0);
                    var0 = global;
                    if (var9) {
                        _fun15005_ip = 87;
                        continue _fun15005
                    }
                case 53:
                    var6 = var0.Error;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var12 = 'Unable to parse Timestamp from JSON. Invalid format.';
                    var13 = var5;
                    var2 = new var13[var6](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var5;
                    throw var2;
                case 87:
                    var7 = var0.Date;
                    var6 = var7.parse;
                    var2 = 1;
                    var2 = var9[var2];
                    var8 = '-';
                    var5 = var2 + var8;
                    var2 = 2;
                    var2 = var9[var2];
                    var2 = var5 + var2;
                    var5 = 3;
                    var5 = var9[var5];
                    var2 = var2 + var8;
                    var8 = var2 + var5;
                    var2 = 4;
                    var5 = var9[var2];
                    var2 = 'T';
                    var2 = var8 + var2;
                    var2 = var2 + var5;
                    var5 = 5;
                    var5 = var9[var5];
                    var10 = ':';
                    var2 = var2 + var10;
                    var2 = var2 + var5;
                    var5 = 6;
                    var8 = var9[var5];
                    var2 = var2 + var10;
                    var8 = var2 + var8;
                    var10 = 8;
                    var11 = var9[var10];
                    var2 = 'Z';
                    if (!var11) {
                        _fun15005_ip = 211;
                        continue _fun15005
                    }
                case 207:
                    var2 = var9[var10];
                case 211:
                    var2 = var8 + var2;
                    var7 = var6.bind(var7)(var2);
                    var6 = var0.Number;
                    var2 = var6.isNaN;
                    var2 = var2.bind(var6)(var7);
                    if (var2) {
                        _fun15005_ip = 515;
                        continue _fun15005
                    }
                case 243:
                    var8 = var0.Date;
                    var6 = var8.parse;
                    var2 = '0001-01-01T00:00:00Z';
                    var2 = var6.bind(var8)(var2);
                    if (!(!(var7 < var2))) {
                        _fun15005_ip = 476;
                        continue _fun15005
                    }
                case 273:
                    var8 = var0.Date;
                    var6 = var8.parse;
                    var2 = '9999-12-31T23:59:59Z';
                    var2 = var6.bind(var8)(var2);
                    if (!(!(var7 > var2))) {
                        _fun15005_ip = 476;
                        continue _fun15005
                    }
                case 303:
                    if (var1) {
                        _fun15005_ip = 315;
                        continue _fun15005
                    }
                case 306:
                    var2 = var4.create;
                    var1 = var2.bind(var4)();
                case 315:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.PbLong;
                    var4 = var6.from;
                    var2 = 1000;
                    var2 = var7 / var2;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.toString;
                    var2 = var2.bind(var4)();
                    var1.seconds = var2;
                    var2 = 0;
                    var1.nanos = var2;
                    var2 = 7;
                    var4 = var9[var2];
                    if (!var4) {
                        _fun15005_ip = 474;
                        continue _fun15005
                    }
                case 396:
                    var4 = var0.parseInt;
                    var7 = var9[var2];
                    var6 = '1';
                    var6 = var6 + var7;
                    var8 = '0';
                    var7 = var8.repeat;
                    var2 = var9[var2];
                    var9 = var2.length;
                    var2 = 9;
                    var2 = var2 - var9;
                    var2 = var7.bind(var8)(var2);
                    var2 = var6 + var2;
                    var4 = var4.bind(var5)(var2);
                    var2 = 1000000000;
                    var2 = var4 - var2;
                    var1.nanos = var2;
                case 474:
                    return var1;
                case 476:
                    var1 = var0.globalThis;
                    var4 = var1.Error;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var12 = 'Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.';
                    var13 = var2;
                    var1 = new var13[var4](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 515:
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = 'Unable to parse Timestamp from JSON. Invalid value.';
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 549:
                    var0 = global;
                    var2 = var0.Error;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var0 = var1.typeofJsonValue;
                    var1 = var0.bind(var1)(var3);
                    var0 = 'Unable to parse Timestamp from JSON ';
                    var3 = var0 + var1;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var0 = '.';
                    var12 = var3 + var0;
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15006: for (var _fun15006_ip = 0;;) switch (_fun15006_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'seconds': '0',
                        'nanos': 0
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15006_ip = 118;
                        continue _fun15006
                    }
                case 88:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 118:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15007: for (var _fun15007_ip = 0;;) switch (_fun15007_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15007_ip = 27;
                        continue _fun15007
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15007_ip = 381;
                        continue _fun15007
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun15007_ip = 332;
                        continue _fun15007
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun15007_ip = 308;
                        continue _fun15007
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15007_ip = 228;
                        continue _fun15007
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15007_ip = 363;
                        continue _fun15007
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15007_ip = 193;
                        continue _fun15007
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15007_ip = 363;
                    continue _fun15007;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var1 = var16.int32;
                    var1 = var1.bind(var16)();
                    var0.nanos = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun15007_ip = 363;
                    continue _fun15007;
                case 332:
                    var1 = var16.int64;
                    var19 = var1.bind(var16)();
                    var1 = var19.toString;
                    var1 = var1.bind(var19)();
                    var0.seconds = var1;
                    var18 = var3;
                    var17 = var2;
                case 363:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15007_ip = 82;
                        continue _fun15007
                    }
                case 381:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15008: for (var _fun15008_ip = 0;;) switch (_fun15008_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.seconds;
                    var1 = '0';
                    if (!(var1 !== var2)) {
                        _fun15008_ip = 89;
                        continue _fun15008
                    }
                case 22:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int64;
                    var1 = var4.seconds;
                    var1 = var2.bind(var3)(var1);
                case 89:
                    var2 = var4.nanos;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun15008_ip = 168;
                        continue _fun15008
                    }
                case 101:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 2;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int32;
                    var1 = var4.nanos;
                    var1 = var2.bind(var3)(var1);
                case 168:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15008_ip = 245;
                        continue _fun15008
                    }
                case 183:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15008_ip = 227;
                        continue _fun15008
                    }
                case 190:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 227:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 245:
                    return var0;
            }
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/protos/google/protobuf/timestamp.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Timestamp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1313, 2]);