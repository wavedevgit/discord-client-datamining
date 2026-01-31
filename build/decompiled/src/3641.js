// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun32512: for (var _fun32512_ip = 0;;) switch (_fun32512_ip) {
        case 0:
            var24 = function(arg0) { // Original name: tok, environment: var1
                var2 = _closure1_slot5;
                var0 = _closure1_slot6;
                var1 = parseFloat(var0);
                var0 = var1 + 1;
                _closure1_slot6 = var0;
                var0 = arg0;
                var2[var0] = var1;
                var0 = undefined;
                return var0;
            };
            var16 = function(arg0, arg1) { // Original name: parse, environment: var1
                _fun32514: for (var _fun32514_ip = 0;;) switch (_fun32514_ip) {
                    case 0:
                        var0 = arg1;
                        var2 = arg0;
                        var1 = var0;
                        if (!var0) {
                            _fun32514_ip = 26;
                            continue _fun32514
                        }
                    case 12:
                        var3 = var1;
                        var4 = 'object';
                        var3 = typeof var3;
                        var0 = var4 === var3;
                    case 26:
                        if (var0) {
                            _fun32514_ip = 55;
                            continue _fun32514
                        }
                    case 29:
                        var0 = {};
                        var3 = var1;
                        var3 = !var3;
                        var3 = !var3;
                        var0.loose = var3;
                        var3 = false;
                        var0.includePrerelease = var3;
                        var1 = var0;
                    case 55:
                        var4 = var2;
                        var0 = _closure1_slot10;
                        var4 = var4 instanceof var0;
                        var0 = var2;
                        if (var4) {
                            _fun32514_ip = 213;
                            continue _fun32514
                        }
                    case 78:
                        var5 = 'string';
                        var4 = typeof var0;
                        if (!(var5 === var4)) {
                            _fun32514_ip = 209;
                            continue _fun32514
                        }
                    case 89:
                        var4 = var2;
                        var5 = var4.length;
                        var4 = _closure1_slot2;
                        if (!(!(var5 > var4))) {
                            _fun32514_ip = 205;
                            continue _fun32514
                        }
                    case 105:
                        var4 = var1;
                        var6 = var4.loose;
                        var5 = _closure1_slot4;
                        var4 = _closure1_slot5;
                        if (var6) {
                            _fun32514_ip = 137;
                            continue _fun32514
                        }
                    case 125:
                        var6 = var4.FULL;
                        var6 = var5[var6];
                        _fun32514_ip = 147;
                        continue _fun32514;
                    case 137:
                        var4 = var4.LOOSE;
                        var6 = var5[var4];
                    case 147:
                        var5 = var6.test;
                        var4 = var2;
                        var4 = var5.bind(var6)(var4);
                        if (var4) {
                            _fun32514_ip = 167;
                            continue _fun32514
                        }
                    case 163:
                        var4 = null;
                        return var4;
                    case 167: // try_start_0
                        var4 = _closure1_slot10;
                        var9 = var2;
                        var8 = var1;
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var10 = var2;
                        var1 = new var10[var4](var9, var8, var7);
                        var1 = var1 instanceof Object ? var1 : var2;
                    case 197: // try_end0
                        return var1;
                    case 199: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = null;
                        return var1;
                    case 205:
                        var1 = null;
                        return var1;
                    case 209:
                        var1 = null;
                        return var1;
                    case 213:
                        return var0;
                }
            };
            var _closure1_slot9 = var16;
            var2 = function(arg0, arg1) { // Original name: SemVer, environment: var1
                _fun32515: for (var _fun32515_ip = 0;;) switch (_fun32515_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = arg1;
                        var3 = this;
                        var1 = var2;
                        if (!var2) {
                            _fun32515_ip = 25;
                            continue _fun32515
                        }
                    case 14:
                        var5 = 'object';
                        var4 = typeof var2;
                        var1 = var5 === var4;
                    case 25:
                        var5 = var2;
                        if (var1) {
                            _fun32515_ip = 54;
                            continue _fun32515
                        }
                    case 31:
                        var1 = {};
                        var2 = !var2;
                        var2 = !var2;
                        var1.loose = var2;
                        var2 = false;
                        var1.includePrerelease = var2;
                        var5 = var1;
                    case 54:
                        var1 = _closure1_slot10;
                        var1 = var0 instanceof var1;
                        if (var1) {
                            _fun32515_ip = 122;
                            continue _fun32515
                        }
                    case 68:
                        var6 = 'string';
                        var1 = typeof var0;
                        var4 = var0;
                        if (!(var6 !== var1)) {
                            _fun32515_ip = 147;
                            continue _fun32515
                        }
                    case 82:
                        var1 = global;
                        var7 = var1.TypeError;
                        var1 = 'Invalid Version: ';
                        var13 = var1 + var0;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var14 = var6;
                        var1 = new var14[var7](var13, var12);
                        var1 = var1 instanceof Object ? var1 : var6;
                        throw var1;
                    case 122:
                        var6 = var0.loose;
                        var1 = var5.loose;
                        if (!(var6 !== var1)) {
                            _fun32515_ip = 751;
                            continue _fun32515
                        }
                    case 141:
                        var4 = var0.version;
                    case 147:
                        var6 = var4.length;
                        var1 = _closure1_slot2;
                        if (!(!(var6 > var1))) {
                            _fun32515_ip = 715;
                            continue _fun32515
                        }
                    case 163:
                        var1 = _closure1_slot10;
                        var1 = var3 instanceof var1;
                        if (var1) {
                            _fun32515_ip = 206;
                            continue _fun32515
                        }
                    case 174:
                        var1 = _closure1_slot10;
                        var6 = var1.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var1
                            }
                        });
                        var14 = var6;
                        var13 = var4;
                        var12 = var5;
                        var1 = new var14[var1](var13, var12, var11);
                        var1 = var1 instanceof Object ? var1 : var6;
                        return var1;
                    case 206:
                        var7 = _closure1_slot1;
                        var1 = undefined;
                        var6 = 'SemVer';
                        var6 = var7.bind(var1)(var6, var4, var5);
                        var3.options = var5;
                        var6 = var5.loose;
                        var6 = !var6;
                        var6 = !var6;
                        var3.loose = var6;
                        var6 = var4.trim;
                        var7 = var6.bind(var4)();
                        var6 = var7.match;
                        var5 = var5.loose;
                        var9 = _closure1_slot4;
                        var8 = _closure1_slot5;
                        if (var5) {
                            _fun32515_ip = 292;
                            continue _fun32515
                        }
                    case 280:
                        var5 = var8.FULL;
                        var5 = var9[var5];
                        _fun32515_ip = 302;
                        continue _fun32515;
                    case 292:
                        var8 = var8.LOOSE;
                        var5 = var9[var8];
                    case 302:
                        var5 = var6.bind(var7)(var5);
                        if (var5) {
                            _fun32515_ip = 350;
                            continue _fun32515
                        }
                    case 310:
                        var6 = global;
                        var8 = var6.TypeError;
                        var6 = 'Invalid Version: ';
                        var13 = var6 + var4;
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var8
                            }
                        });
                        var14 = var7;
                        var6 = new var14[var8](var13, var12);
                        var6 = var6 instanceof Object ? var6 : var7;
                        throw var6;
                    case 350:
                        var3.raw = var4;
                        var4 = 1;
                        var4 = var5[var4];
                        var4 = var4 - 0;
                        var3.major = var4;
                        var4 = 2;
                        var4 = var5[var4];
                        var4 = var4 - 0;
                        var3.minor = var4;
                        var4 = 3;
                        var4 = var5[var4];
                        var4 = var4 - 0;
                        var3.patch = var4;
                        var6 = var3.major;
                        var4 = _closure1_slot3;
                        if (!(!(var6 > var4))) {
                            _fun32515_ip = 679;
                            continue _fun32515
                        }
                    case 421:
                        var6 = var3.major;
                        var4 = 0;
                        if (!(!(var6 < var4))) {
                            _fun32515_ip = 679;
                            continue _fun32515
                        }
                    case 436:
                        var7 = var3.minor;
                        var6 = _closure1_slot3;
                        if (!(!(var7 > var6))) {
                            _fun32515_ip = 643;
                            continue _fun32515
                        }
                    case 453:
                        var6 = var3.minor;
                        if (!(!(var6 < var4))) {
                            _fun32515_ip = 643;
                            continue _fun32515
                        }
                    case 466:
                        var6 = var3.patch;
                        var2 = _closure1_slot3;
                        if (!(!(var6 > var2))) {
                            _fun32515_ip = 607;
                            continue _fun32515
                        }
                    case 483:
                        var2 = var3.patch;
                        if (!(!(var2 < var4))) {
                            _fun32515_ip = 607;
                            continue _fun32515
                        }
                    case 493:
                        var2 = 4;
                        var4 = var5[var2];
                        if (var4) {
                            _fun32515_ip = 515;
                            continue _fun32515
                        }
                    case 503:
                        var4 = new Array(0);
                        var3.prerelease = var4;
                        _fun32515_ip = 556;
                        continue _fun32515;
                    case 515:
                        var6 = var5[var2];
                        var4 = var6.split;
                        var2 = '.';
                        var6 = var4.bind(var6)(var2);
                        var4 = var6.map;
                        var2 = function(arg0) { // Environment: var2
                            _fun32516: for (var _fun32516_ip = 0;;) switch (_fun32516_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = /^[0-9]+$/;
                                    var0 = var2.test;
                                    var0 = var0.bind(var2)(var1);
                                    if (!var0) {
                                        _fun32516_ip = 50;
                                        continue _fun32516
                                    }
                                case 30:
                                    var0 = var1 - 0;
                                    var2 = 0;
                                    if (!(var0 >= var2)) {
                                        _fun32516_ip = 50;
                                        continue _fun32516
                                    }
                                case 39:
                                    var2 = _closure1_slot3;
                                    if (!(!(var0 < var2))) {
                                        _fun32516_ip = 52;
                                        continue _fun32516
                                    }
                                case 50:
                                    return var1;
                                case 52:
                                    return var0;
                            }
                        };
                        var2 = var4.bind(var6)(var2);
                        var3.prerelease = var2;
                    case 556:
                        var4 = 5;
                        var2 = var5[var4];
                        if (var2) {
                            _fun32515_ip = 572;
                            continue _fun32515
                        }
                    case 566:
                        var2 = new Array(0);
                        _fun32515_ip = 590;
                        continue _fun32515;
                    case 572:
                        var6 = var5[var4];
                        var5 = var6.split;
                        var4 = '.';
                        var2 = var5.bind(var6)(var4);
                    case 590:
                        var3.build = var2;
                        var2 = var3.format;
                        var2 = var2.bind(var3)();
                        return var1;
                    case 607:
                        var1 = global;
                        var3 = var1.TypeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var13 = 'Invalid patch version';
                        var14 = var2;
                        var1 = new var14[var3](var13, var12);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 643:
                        var1 = global;
                        var3 = var1.TypeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var13 = 'Invalid minor version';
                        var14 = var2;
                        var1 = new var14[var3](var13, var12);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 679:
                        var1 = global;
                        var3 = var1.TypeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var13 = 'Invalid major version';
                        var14 = var2;
                        var1 = new var14[var3](var13, var12);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 715:
                        var1 = global;
                        var3 = var1.TypeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var13 = 'version is longer than 256 characters';
                        var14 = var2;
                        var1 = new var14[var3](var13, var12);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 751:
                        return var0;
                }
            };
            var _closure1_slot10 = var2;
            var15 = function(arg0, arg1) { // Original name: compareIdentifiers, environment: var1
                _fun32517: for (var _fun32517_ip = 0;;) switch (_fun32517_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = arg1;
                        var4 = _closure1_slot7;
                        var3 = var4.test;
                        var5 = var3.bind(var4)(var1);
                        var3 = _closure1_slot7;
                        var2 = var3.test;
                        var2 = var2.bind(var3)(var0);
                        var6 = var5;
                        if (!var6) {
                            _fun32517_ip = 46;
                            continue _fun32517
                        }
                    case 43:
                        var6 = var2;
                    case 46:
                        var4 = var1;
                        var3 = var0;
                        if (!var6) {
                            _fun32517_ip = 61;
                            continue _fun32517
                        }
                    case 55:
                        var4 = var1 - 0;
                        var3 = var0 - 0;
                    case 61:
                        var0 = 0;
                        if (!(var4 !== var3)) {
                            _fun32517_ip = 113;
                            continue _fun32517
                        }
                    case 67:
                        if (!var5) {
                            _fun32517_ip = 79;
                            continue _fun32517
                        }
                    case 70:
                        var1 = -1;
                        if (!var2) {
                            _fun32517_ip = 110;
                            continue _fun32517
                        }
                    case 79:
                        if (!var2) {
                            _fun32517_ip = 88;
                            continue _fun32517
                        }
                    case 82:
                        var2 = 1;
                        if (!var5) {
                            _fun32517_ip = 107;
                            continue _fun32517
                        }
                    case 88:
                        var4 = var4 < var3;
                        var3 = 1;
                        if (!var4) {
                            _fun32517_ip = 104;
                            continue _fun32517
                        }
                    case 98:
                        var3 = -1;
                    case 104:
                        var2 = var3;
                    case 107:
                        var1 = var2;
                    case 110:
                        var0 = var1;
                    case 113:
                        return var0;
                }
            };
            var _closure1_slot11 = var15;
            var14 = function(arg0, arg1, arg2) { // Original name: compare, environment: var1
                var5 = arg2;
                var4 = _closure1_slot10;
                var0 = var4.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = arg0;
                var8 = var1;
                var6 = var5;
                var0 = new var8[var4](var7, var6, var5);
                var2 = var0 instanceof Object ? var0 : var1;
                var1 = var2.compare;
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = arg1;
                var8 = var3;
                var6 = var5;
                var0 = new var8[var4](var7, var6, var5);
                var0 = var0 instanceof Object ? var0 : var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot12 = var14;
            var13 = function(arg0, arg1, arg2) { // Original name: gt, environment: var1
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var1 = var4.bind(var3)(var2, var1, var0);
                var0 = 0;
                var0 = var1 > var0;
                return var0;
            };
            var _closure1_slot13 = var13;
            var12 = function(arg0, arg1, arg2) { // Original name: lt, environment: var1
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var1 = var4.bind(var3)(var2, var1, var0);
                var0 = 0;
                var0 = var1 < var0;
                return var0;
            };
            var _closure1_slot14 = var12;
            var11 = function(arg0, arg1, arg2) { // Original name: eq, environment: var1
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var1 = var4.bind(var3)(var2, var1, var0);
                var0 = 0;
                var0 = var0 === var1;
                return var0;
            };
            var _closure1_slot15 = var11;
            var10 = function(arg0, arg1, arg2) { // Original name: neq, environment: var1
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var1 = var4.bind(var3)(var2, var1, var0);
                var0 = 0;
                var0 = var0 !== var1;
                return var0;
            };
            var _closure1_slot16 = var10;
            var9 = function(arg0, arg1, arg2) { // Original name: gte, environment: var1
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var1 = var4.bind(var3)(var2, var1, var0);
                var0 = 0;
                var0 = var1 >= var0;
                return var0;
            };
            var _closure1_slot17 = var9;
            var8 = function(arg0, arg1, arg2) { // Original name: lte, environment: var1
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var1 = var4.bind(var3)(var2, var1, var0);
                var0 = 0;
                var0 = var1 <= var0;
                return var0;
            };
            var _closure1_slot18 = var8;
            var7 = function(arg0, arg1, arg2, arg3) { // Original name: cmp, environment: var1
                _fun32525: for (var _fun32525_ip = 0;;) switch (_fun32525_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = arg1;
                        var2 = arg2;
                        var4 = arg3;
                        var1 = '===';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 315;
                            continue _fun32525
                        }
                    case 25:
                        var1 = '!==';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 273;
                            continue _fun32525
                        }
                    case 38:
                        var1 = '';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 255;
                            continue _fun32525
                        }
                    case 49:
                        var1 = '=';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 255;
                            continue _fun32525
                        }
                    case 60:
                        var1 = '==';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 255;
                            continue _fun32525
                        }
                    case 73:
                        var1 = '!=';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 237;
                            continue _fun32525
                        }
                    case 86:
                        var1 = '>';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 219;
                            continue _fun32525
                        }
                    case 97:
                        var1 = '>=';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 201;
                            continue _fun32525
                        }
                    case 107:
                        var1 = '<';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 183;
                            continue _fun32525
                        }
                    case 115:
                        var1 = '<=';
                        if (!(var1 !== var3)) {
                            _fun32525_ip = 165;
                            continue _fun32525
                        }
                    case 125:
                        var1 = global;
                        var5 = var1.TypeError;
                        var1 = 'Invalid operator: ';
                        var8 = var1 + var3;
                        var3 = var5.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var9 = var3;
                        var1 = new var9[var5](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var3;
                        throw var1;
                    case 165:
                        var3 = _closure1_slot18;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var0, var2, var4);
                        return var1;
                    case 183:
                        var3 = _closure1_slot14;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var0, var2, var4);
                        return var1;
                    case 201:
                        var3 = _closure1_slot17;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var0, var2, var4);
                        return var1;
                    case 219:
                        var3 = _closure1_slot13;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var0, var2, var4);
                        return var1;
                    case 237:
                        var3 = _closure1_slot16;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var0, var2, var4);
                        return var1;
                    case 255:
                        var3 = _closure1_slot15;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var0, var2, var4);
                        return var1;
                    case 273:
                        var5 = 'object';
                        var1 = typeof var0;
                        var3 = var0;
                        if (!(var5 === var1)) {
                            _fun32525_ip = 293;
                            continue _fun32525
                        }
                    case 287:
                        var3 = var0.version;
                    case 293:
                        var4 = typeof var2;
                        var1 = var2;
                        if (!(var5 === var4)) {
                            _fun32525_ip = 309;
                            continue _fun32525
                        }
                    case 303:
                        var1 = var2.version;
                    case 309:
                        var1 = var3 !== var1;
                        return var1;
                    case 315:
                        var4 = 'object';
                        var3 = typeof var0;
                        var1 = var0;
                        if (!(var4 === var3)) {
                            _fun32525_ip = 335;
                            continue _fun32525
                        }
                    case 329:
                        var1 = var0.version;
                    case 335:
                        var3 = typeof var2;
                        var0 = var2;
                        if (!(var4 === var3)) {
                            _fun32525_ip = 351;
                            continue _fun32525
                        }
                    case 345:
                        var0 = var2.version;
                    case 351:
                        var0 = var1 === var0;
                        return var0;
                }
            };
            var _closure1_slot19 = var7;
            var6 = function(arg0, arg1) { // Original name: Comparator, environment: var1
                _fun32526: for (var _fun32526_ip = 0;;) switch (_fun32526_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = arg1;
                        var4 = this;
                        var1 = var2;
                        if (!var2) {
                            _fun32526_ip = 25;
                            continue _fun32526
                        }
                    case 14:
                        var5 = 'object';
                        var3 = typeof var2;
                        var1 = var5 === var3;
                    case 25:
                        var3 = var2;
                        if (var1) {
                            _fun32526_ip = 54;
                            continue _fun32526
                        }
                    case 31:
                        var1 = {};
                        var2 = !var2;
                        var2 = !var2;
                        var1.loose = var2;
                        var2 = false;
                        var1.includePrerelease = var2;
                        var3 = var1;
                    case 54:
                        var1 = _closure1_slot20;
                        var1 = var0 instanceof var1;
                        var5 = var0;
                        if (!var1) {
                            _fun32526_ip = 101;
                            continue _fun32526
                        }
                    case 71:
                        var6 = var0.loose;
                        var1 = var3.loose;
                        var1 = !var1;
                        var1 = !var1;
                        if (!(var6 !== var1)) {
                            _fun32526_ip = 268;
                            continue _fun32526
                        }
                    case 96:
                        var5 = var0.value;
                    case 101:
                        var1 = _closure1_slot20;
                        var1 = var4 instanceof var1;
                        if (var1) {
                            _fun32526_ip = 144;
                            continue _fun32526
                        }
                    case 112:
                        var1 = _closure1_slot20;
                        var6 = var1.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var6;
                        var10 = var5;
                        var9 = var3;
                        var1 = new var11[var1](var10, var9, var8);
                        var1 = var1 instanceof Object ? var1 : var6;
                        return var1;
                    case 144:
                        var7 = _closure1_slot1;
                        var1 = undefined;
                        var6 = 'comparator';
                        var6 = var7.bind(var1)(var6, var5, var3);
                        var4.options = var3;
                        var3 = var3.loose;
                        var3 = !var3;
                        var3 = !var3;
                        var4.loose = var3;
                        var3 = var4.parse;
                        var3 = var3.bind(var4)(var5);
                        var5 = var4.semver;
                        var3 = _closure1_slot8;
                        if (!(var5 !== var3)) {
                            _fun32526_ip = 240;
                            continue _fun32526
                        }
                    case 210:
                        var5 = var4.operator;
                        var3 = var4.semver;
                        var3 = var3.version;
                        var3 = var5 + var3;
                        var4.value = var3;
                        _fun32526_ip = 250;
                        continue _fun32526;
                    case 240:
                        var3 = '';
                        var4.value = var3;
                    case 250:
                        var3 = _closure1_slot1;
                        var2 = 'comp';
                        var2 = var3.bind(var1)(var2, var4);
                        return var1;
                    case 268:
                        return var0;
                }
            };
            var _closure1_slot20 = var6;
            var5 = function(arg0, arg1) { // Original name: Range, environment: var1
                _fun32527: for (var _fun32527_ip = 0;;) switch (_fun32527_ip) {
                    case 0:
                        var1 = arg0;
                        var5 = arg1;
                        var3 = this;
                        var2 = var5;
                        if (!var5) {
                            _fun32527_ip = 27;
                            continue _fun32527
                        }
                    case 16:
                        var6 = 'object';
                        var4 = typeof var5;
                        var2 = var6 === var4;
                    case 27:
                        var4 = var5;
                        if (var2) {
                            _fun32527_ip = 56;
                            continue _fun32527
                        }
                    case 33:
                        var2 = {};
                        var5 = !var5;
                        var5 = !var5;
                        var2.loose = var5;
                        var5 = false;
                        var2.includePrerelease = var5;
                        var4 = var2;
                    case 56:
                        var5 = _closure1_slot21;
                        var5 = var1 instanceof var5;
                        if (var5) {
                            _fun32527_ip = 335;
                            continue _fun32527
                        }
                    case 73:
                        var5 = _closure1_slot20;
                        var6 = var1 instanceof var5;
                        var5 = _closure1_slot21;
                        if (var6) {
                            _fun32527_ip = 305;
                            continue _fun32527
                        }
                    case 91:
                        var6 = var3 instanceof var5;
                        if (var6) {
                            _fun32527_ip = 130;
                            continue _fun32527
                        }
                    case 98:
                        var6 = _closure1_slot21;
                        var7 = var6.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var6
                            }
                        });
                        var11 = var7;
                        var10 = var1;
                        var9 = var4;
                        var6 = new var11[var6](var10, var9, var8);
                        var6 = var6 instanceof Object ? var6 : var7;
                        return var6;
                    case 130:
                        var3.options = var4;
                        var6 = var4.loose;
                        var6 = !var6;
                        var6 = !var6;
                        var3.loose = var6;
                        var6 = var4.includePrerelease;
                        var6 = !var6;
                        var6 = !var6;
                        var3.includePrerelease = var6;
                        var3.raw = var1;
                        var7 = var1.split;
                        var6 = /\s*\|\|\s*/;
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.map;
                        var6 = function(arg0) { // Environment: var0
                            var3 = arg0;
                            var2 = this;
                            var1 = var2.parseRange;
                            var0 = var3.trim;
                            var0 = var0.bind(var3)();
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var7 = var7.bind(var8)(var6, var3);
                        var6 = var7.filter;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.length;
                            return var0;
                        };
                        var0 = var6.bind(var7)(var0);
                        var3.set = var0;
                        var0 = var3.set;
                        var0 = var0.length;
                        if (var0) {
                            _fun32527_ip = 292;
                            continue _fun32527
                        }
                    case 252:
                        var0 = global;
                        var7 = var0.TypeError;
                        var0 = 'Invalid SemVer Range: ';
                        var10 = var0 + var1;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var11 = var6;
                        var0 = new var11[var7](var10, var9);
                        var0 = var0 instanceof Object ? var0 : var6;
                        throw var0;
                    case 292:
                        var0 = var3.format;
                        var0 = var0.bind(var3)();
                        var0 = undefined;
                        return var0;
                    case 305:
                        var10 = var1.value;
                        var3 = var5.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var11 = var3;
                        var9 = var4;
                        var0 = new var11[var5](var10, var9, var8);
                        var0 = var0 instanceof Object ? var0 : var3;
                        return var0;
                    case 335:
                        var3 = var1.loose;
                        var0 = var4.loose;
                        var0 = !var0;
                        var0 = !var0;
                        if (!(var3 === var0)) {
                            _fun32527_ip = 382;
                            continue _fun32527
                        }
                    case 357:
                        var5 = var1.includePrerelease;
                        var0 = var4.includePrerelease;
                        var0 = !var0;
                        var3 = !var0;
                        var0 = var1;
                        if (!(var5 !== var3)) {
                            _fun32527_ip = 414;
                            continue _fun32527
                        }
                    case 382:
                        var3 = _closure1_slot21;
                        var10 = var1.raw;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var11 = var2;
                        var9 = var4;
                        var1 = new var11[var3](var10, var9, var8);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 414:
                        return var0;
                }
            };
            var _closure1_slot21 = var5;
            var0 = function(arg0, arg1) { // Original name: isSatisfiable, environment: var1
                _fun32530: for (var _fun32530_ip = 0;;) switch (_fun32530_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = arg1;
                        var _closure2_slot0 = var0;
                        var0 = var1.slice;
                        var2 = var0.bind(var1)();
                        var0 = var2.pop;
                        var0 = var0.bind(var2)();
                        var _closure2_slot1 = var0;
                        var1 = var2.length;
                        var0 = true;
                        if (!var1) {
                            _fun32530_ip = 92;
                            continue _fun32530
                        }
                    case 45:
                        var4 = var2.every;
                        var1 = function(arg0) { // Environment: var3
                            var3 = _closure2_slot1;
                            var2 = var3.intersects;
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var4 = var4.bind(var2)(var1);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        _closure2_slot1 = var1;
                        var0 = var4;
                        if (!var4) {
                            _fun32530_ip = 92;
                            continue _fun32530
                        }
                    case 81:
                        var1 = var2.length;
                        var0 = var4;
                        if (var1) {
                            _fun32530_ip = 45;
                            continue _fun32530
                        }
                    case 92:
                        return var0;
                }
            };
            var _closure1_slot22 = var0;
            var0 = function(arg0) { // Original name: isX, environment: var1
                _fun32532: for (var _fun32532_ip = 0;;) switch (_fun32532_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = !var2;
                        if (var0) {
                            _fun32532_ip = 27;
                            continue _fun32532
                        }
                    case 9:
                        var1 = var2.toLowerCase;
                        var3 = var1.bind(var2)();
                        var1 = 'x';
                        var0 = var1 === var3;
                    case 27:
                        if (var0) {
                            _fun32532_ip = 38;
                            continue _fun32532
                        }
                    case 30:
                        var1 = '*';
                        var0 = var1 === var2;
                    case 38:
                        return var0;
                }
            };
            var _closure1_slot23 = var0;
            var0 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) { // Original name: hyphenReplace, environment: var1
                _fun32533: for (var _fun32533_ip = 0;;) switch (_fun32533_ip) {
                    case 0:
                        var10 = arg2;
                        var12 = arg3;
                        var3 = arg8;
                        var4 = arg9;
                        var7 = arg10;
                        var6 = arg11;
                        var1 = _closure1_slot23;
                        var5 = undefined;
                        var8 = var1.bind(var5)(var10);
                        var1 = '';
                        var2 = var1;
                        if (var8) {
                            _fun32533_ip = 129;
                            continue _fun32533
                        }
                    case 42:
                        var8 = _closure1_slot23;
                        var8 = var8.bind(var5)(var12);
                        var9 = '>=';
                        if (var8) {
                            _fun32533_ip = 112;
                            continue _fun32533
                        }
                    case 60:
                        var11 = _closure1_slot23;
                        var8 = arg4;
                        var8 = var11.bind(var5)(var8);
                        if (var8) {
                            _fun32533_ip = 84;
                            continue _fun32533
                        }
                    case 75:
                        var8 = arg1;
                        var8 = var9 + var8;
                        _fun32533_ip = 110;
                        continue _fun32533;
                    case 84:
                        var13 = var9 + var10;
                        var11 = '.';
                        var11 = var13 + var11;
                        var12 = var11 + var12;
                        var11 = '.0';
                        var8 = var12 + var11;
                    case 110:
                        _fun32533_ip = 126;
                        continue _fun32533;
                    case 112:
                        var10 = var9 + var10;
                        var9 = '.0.0';
                        var8 = var10 + var9;
                    case 126:
                        var2 = var8;
                    case 129:
                        var8 = _closure1_slot23;
                        var8 = var8.bind(var5)(var3);
                        if (var8) {
                            _fun32533_ip = 297;
                            continue _fun32533
                        }
                    case 144:
                        var8 = _closure1_slot23;
                        var8 = var8.bind(var5)(var4);
                        if (var8) {
                            _fun32533_ip = 266;
                            continue _fun32533
                        }
                    case 156:
                        var0 = _closure1_slot23;
                        var0 = var0.bind(var5)(var7);
                        if (var0) {
                            _fun32533_ip = 224;
                            continue _fun32533
                        }
                    case 168:
                        var5 = '<=';
                        if (var6) {
                            _fun32533_ip = 186;
                            continue _fun32533
                        }
                    case 177:
                        var0 = arg7;
                        var0 = var5 + var0;
                        _fun32533_ip = 222;
                        continue _fun32533;
                    case 186:
                        var5 = var5 + var3;
                        var8 = '.';
                        var5 = var5 + var8;
                        var5 = var5 + var4;
                        var5 = var5 + var8;
                        var7 = var5 + var7;
                        var5 = '-';
                        var5 = var7 + var5;
                        var0 = var5 + var6;
                    case 222:
                        _fun32533_ip = 264;
                        continue _fun32533;
                    case 224:
                        var5 = '<';
                        var5 = var5 + var3;
                        var6 = var4 - 0;
                        var4 = '.';
                        var5 = var5 + var4;
                        var4 = 1;
                        var4 = var6 + var4;
                        var5 = var5 + var4;
                        var4 = '.0';
                        var0 = var5 + var4;
                    case 264:
                        _fun32533_ip = 294;
                        continue _fun32533;
                    case 266:
                        var5 = var3 - 0;
                        var4 = '<';
                        var3 = 1;
                        var3 = var5 + var3;
                        var4 = var4 + var3;
                        var3 = '.0.0';
                        var0 = var4 + var3;
                    case 294:
                        var1 = var0;
                    case 297:
                        var0 = ' ';
                        var0 = var2 + var0;
                        var1 = var0 + var1;
                        var0 = var1.trim;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var _closure1_slot24 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: testSet, environment: var1
                _fun32534: for (var _fun32534_ip = 0;;) switch (_fun32534_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var0 = var7.length;
                        var5 = 0;
                        var0 = var5 < var0;
                        var1 = 0;
                        if (!var0) {
                            _fun32534_ip = 55;
                            continue _fun32534
                        }
                    case 22:
                        var2 = var7[var1];
                        var0 = var2.test;
                        var0 = var0.bind(var2)(var6);
                        if (var0) {
                            _fun32534_ip = 43;
                            continue _fun32534
                        }
                    case 39:
                        var0 = false;
                        return var0;
                    case 43:
                        var1 = var1 + 1;
                        var0 = var7.length;
                        if (var1 < var0) {
                            _fun32534_ip = 22;
                            continue _fun32534
                        }
                    case 55:
                        var0 = var6.prerelease;
                        var0 = var0.length;
                        if (!var0) {
                            _fun32534_ip = 272;
                            continue _fun32534
                        }
                    case 72:
                        var0 = arg2;
                        var0 = var0.includePrerelease;
                        if (var0) {
                            _fun32534_ip = 272;
                            continue _fun32534
                        }
                    case 87:
                        var0 = var7.length;
                        var0 = var5 < var0;
                        var4 = undefined;
                        var2 = 0;
                        var1 = undefined;
                        if (!var0) {
                            _fun32534_ip = 264;
                            continue _fun32534
                        }
                    case 111:
                        var8 = _closure1_slot1;
                        var0 = var7[var2];
                        var0 = var0.semver;
                        var0 = var8.bind(var4)(var0);
                        var0 = var7[var2];
                        var9 = var0.semver;
                        var0 = _closure1_slot8;
                        var8 = var1;
                        if (!(var9 !== var0)) {
                            _fun32534_ip = 246;
                            continue _fun32534
                        }
                    case 151:
                        var0 = var7[var2];
                        var0 = var0.semver;
                        var0 = var0.prerelease;
                        var0 = var0.length;
                        var8 = var1;
                        if (!(var0 > var5)) {
                            _fun32534_ip = 246;
                            continue _fun32534
                        }
                    case 179:
                        var0 = var7[var2];
                        var10 = var0.semver;
                        var9 = var10.major;
                        var0 = var6.major;
                        var8 = var10;
                        if (!(var9 === var0)) {
                            _fun32534_ip = 246;
                            continue _fun32534
                        }
                    case 208:
                        var9 = var10.minor;
                        var0 = var6.minor;
                        var8 = var10;
                        if (!(var9 === var0)) {
                            _fun32534_ip = 246;
                            continue _fun32534
                        }
                    case 227:
                        var9 = var10.patch;
                        var0 = var6.patch;
                        var8 = var10;
                        if (!(var9 !== var0)) {
                            _fun32534_ip = 268;
                            continue _fun32534
                        }
                    case 246:
                        var2 = var2 + 1;
                        var0 = var7.length;
                        var1 = var8;
                        if (var2 < var0) {
                            _fun32534_ip = 111;
                            continue _fun32534
                        }
                    case 264:
                        var0 = false;
                        return var0;
                    case 268:
                        var0 = true;
                        return var0;
                    case 272:
                        var0 = true;
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var4 = function(arg0, arg1, arg2) { // Original name: satisfies, environment: var1
                _fun32535: for (var _fun32535_ip = 0;;) switch (_fun32535_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = arg1;
                        var2 = arg2;
                    case 9: // try_start_0
                        var5 = _closure1_slot21;
                        var7 = var1;
                        var6 = var2;
                        var3 = var5.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var8 = var3;
                        var2 = new var8[var5](var7, var6, var5);
                        var1 = var2 instanceof Object ? var2 : var3;
                    case 42: // try_end0
                        var2 = var1;
                        var1 = var2.test;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    case 57: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot26 = var4;
            var3 = function(arg0, arg1, arg2, arg3) { // Original name: outside, environment: var1
                _fun32536: for (var _fun32536_ip = 0;;) switch (_fun32536_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg3;
                        var _closure2_slot0 = var1;
                        var5 = _closure1_slot10;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var15 = arg0;
                        var16 = var4;
                        var14 = var1;
                        var3 = new var16[var5](var15, var14, var13);
                        var9 = var3 instanceof Object ? var3 : var4;
                        var5 = _closure1_slot21;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var15 = arg1;
                        var16 = var4;
                        var14 = var1;
                        var3 = new var16[var5](var15, var14, var13);
                        var8 = var3 instanceof Object ? var3 : var4;
                        var3 = '>';
                        if (!(var3 !== var2)) {
                            _fun32536_ip = 155;
                            continue _fun32536
                        }
                    case 83:
                        var7 = '<';
                        if (!(var7 !== var2)) {
                            _fun32536_ip = 127;
                            continue _fun32536
                        }
                    case 91:
                        var2 = global;
                        var5 = var2.TypeError;
                        var2 = var5.prototype;
                        var4 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var15 = 'Must provide a hilo val of "<" or ">"';
                        var16 = var4;
                        var2 = new var16[var5](var15, var14);
                        var2 = var2 instanceof Object ? var2 : var4;
                        throw var2;
                    case 127:
                        var2 = _closure1_slot14;
                        var _closure2_slot1 = var2;
                        var6 = _closure1_slot17;
                        var5 = _closure1_slot13;
                        var _closure2_slot2 = var5;
                        var4 = '<=';
                        _fun32536_ip = 187;
                        continue _fun32536;
                    case 155:
                        var2 = _closure1_slot13;
                        _closure2_slot1 = var2;
                        var6 = _closure1_slot18;
                        var11 = _closure1_slot14;
                        _closure2_slot2 = var11;
                        var4 = '>=';
                        var5 = var11;
                        var7 = var3;
                    case 187:
                        var0 = _closure1_slot26;
                        var3 = undefined;
                        var0 = var0.bind(var3)(var9, var8, var1);
                        if (var0) {
                            _fun32536_ip = 408;
                            continue _fun32536
                        }
                    case 206:
                        var0 = var8.set;
                        var0 = var0.length;
                        var2 = 0;
                        var0 = var2 < var0;
                        var1 = null;
                        if (!var0) {
                            _fun32536_ip = 392;
                            continue _fun32536
                        }
                    case 230:
                        var0 = var8.set;
                        var12 = var0[var2];
                        var _closure2_slot3 = var1;
                        var _closure2_slot4 = var1;
                        var11 = var12.forEach;
                        var0 = function(arg0) { // Environment: var10
                            _fun32537: for (var _fun32537_ip = 0;;) switch (_fun32537_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = var2.semver;
                                    var1 = _closure1_slot8;
                                    if (!(var3 === var1)) {
                                        _fun32537_ip = 50;
                                        continue _fun32537
                                    }
                                case 20:
                                    var3 = _closure1_slot20;
                                    var0 = var3.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var9 = '>=0.0.0';
                                    var10 = var1;
                                    var0 = new var10[var3](var9, var8);
                                    var2 = var0 instanceof Object ? var0 : var1;
                                case 50:
                                    var0 = _closure2_slot3;
                                    if (var0) {
                                        _fun32537_ip = 63;
                                        continue _fun32537
                                    }
                                case 60:
                                    var0 = var2;
                                case 63:
                                    _closure2_slot3 = var0;
                                    var0 = _closure2_slot4;
                                    if (var0) {
                                        _fun32537_ip = 77;
                                        continue _fun32537
                                    }
                                case 74:
                                    var0 = var2;
                                case 77:
                                    _closure2_slot4 = var0;
                                    var6 = _closure2_slot1;
                                    var5 = var2.semver;
                                    var0 = _closure2_slot3;
                                    var4 = var0.semver;
                                    var3 = _closure2_slot0;
                                    var0 = undefined;
                                    var3 = var6.bind(var0)(var5, var4, var3);
                                    if (var3) {
                                        _fun32537_ip = 157;
                                        continue _fun32537
                                    }
                                case 117:
                                    var6 = _closure2_slot2;
                                    var5 = var2.semver;
                                    var3 = _closure2_slot4;
                                    var4 = var3.semver;
                                    var3 = _closure2_slot0;
                                    var3 = var6.bind(var0)(var5, var4, var3);
                                    if (!var3) {
                                        _fun32537_ip = 161;
                                        continue _fun32537
                                    }
                                case 151:
                                    _closure2_slot4 = var2;
                                    _fun32537_ip = 161;
                                    continue _fun32537;
                                case 157:
                                    _closure2_slot3 = var2;
                                case 161:
                                    return var0;
                            }
                        };
                        var0 = var11.bind(var12)(var0);
                        var0 = _closure2_slot3;
                        var0 = var0.operator;
                        if (!(var0 !== var7)) {
                            _fun32536_ip = 404;
                            continue _fun32536
                        }
                    case 279:
                        var0 = _closure2_slot3;
                        var0 = var0.operator;
                        if (!(var0 !== var4)) {
                            _fun32536_ip = 404;
                            continue _fun32536
                        }
                    case 293:
                        var0 = _closure2_slot4;
                        var0 = var0.operator;
                        if (!var0) {
                            _fun32536_ip = 320;
                            continue _fun32536
                        }
                    case 306:
                        var0 = _closure2_slot4;
                        var0 = var0.operator;
                        if (!(var0 === var7)) {
                            _fun32536_ip = 339;
                            continue _fun32536
                        }
                    case 320:
                        var0 = _closure2_slot4;
                        var0 = var0.semver;
                        var0 = var6.bind(var3)(var9, var0);
                        if (var0) {
                            _fun32536_ip = 400;
                            continue _fun32536
                        }
                    case 339:
                        var0 = _closure2_slot4;
                        var0 = var0.operator;
                        if (!(var0 === var4)) {
                            _fun32536_ip = 372;
                            continue _fun32536
                        }
                    case 353:
                        var0 = _closure2_slot4;
                        var0 = var0.semver;
                        var0 = var5.bind(var3)(var9, var0);
                        if (var0) {
                            _fun32536_ip = 396;
                            continue _fun32536
                        }
                    case 372:
                        var2 = var2 + 1;
                        var0 = var8.set;
                        var0 = var0.length;
                        if (var2 < var0) {
                            _fun32536_ip = 230;
                            continue _fun32536
                        }
                    case 392:
                        var0 = true;
                        return var0;
                    case 396:
                        var0 = false;
                        return var0;
                    case 400:
                        var0 = false;
                        return var0;
                    case 404:
                        var0 = false;
                        return var0;
                    case 408:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot27 = var3;
            var0 = arg4;
            var0.exports = var2;
            var _closure1_slot0 = var2;
            var22 = global;
            var0 = var22.process;
            var17 = 'object';
            var0 = typeof var0;
            if (!(var17 === var0)) {
                _fun32512_ip = 291;
                continue _fun32512
            }
        case 210:
            var0 = var22.process;
            var0 = var0.env;
            if (!var0) {
                _fun32512_ip = 291;
                continue _fun32512
            }
        case 225:
            var0 = var22.process;
            var0 = var0.env;
            var0 = var0.NODE_DEBUG;
            if (!var0) {
                _fun32512_ip = 291;
                continue _fun32512
            }
        case 246:
            var18 = /\bsemver\b/i;
            var17 = var18.test;
            var0 = var22.process;
            var0 = var0.env;
            var0 = var0.NODE_DEBUG;
            var0 = var17.bind(var18)(var0);
            if (var0) {
                _fun32512_ip = 298;
                continue _fun32512
            }
        case 291:
            var21 = function() { // Original name: debug, environment: var1
                var0 = undefined;
                return var0;
            };
            _fun32512_ip = 303;
            continue _fun32512;
        case 298:
            var21 = function() { // Original name: debug, environment: var1
                var0 = undefined;
                var2 = undefined;
                var1 = global;
                var3 = var1.Array;
                var3 = var3.prototype;
                var5 = var3.slice;
                var4 = var5.call;
                var2 = arguments;
                var3 = var2;
                var2 = 0;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.unshift;
                var2 = 'SEMVER';
                var2 = var3.bind(var4)(var2);
                var2 = var1.console;
                var3 = var2.log;
                var2 = var3.apply;
                var1 = var1.console;
                var1 = var2.bind(var3)(var1, var4);
                return var0;
            };
        case 303:
            var _closure1_slot1 = var21;
            var0 = '2.0.0';
            var2.SEMVER_SPEC_VERSION = var0;
            var0 = 256;
            var _closure1_slot2 = var0;
            var0 = var22.Number;
            var0 = var0.MAX_SAFE_INTEGER;
            if (var0) {
                _fun32512_ip = 354;
                continue _fun32512
            }
        case 344:
            var0 = 9007199254740991.0;
        case 354:
            var _closure1_slot3 = var0;
            var20 = new Array(0);
            var2.re = var20;
            var _closure1_slot4 = var20;
            var19 = new Array(0);
            var2.src = var19;
            var17 = {};
            var2.tokens = var17;
            var _closure1_slot5 = var17;
            var18 = 0;
            var _closure1_slot6 = var18;
            var0 = undefined;
            var23 = 'NUMERICIDENTIFIER';
            var23 = var24.bind(var0)(var23);
            var25 = var17.NUMERICIDENTIFIER;
            var23 = '0|[1-9]\\d*';
            var19[var25] = var23;
            var23 = 'NUMERICIDENTIFIERLOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.NUMERICIDENTIFIERLOOSE;
            var23 = '[0-9]+';
            var19[var25] = var23;
            var23 = 'NONNUMERICIDENTIFIER';
            var23 = var24.bind(var0)(var23);
            var25 = var17.NONNUMERICIDENTIFIER;
            var23 = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
            var19[var25] = var23;
            var23 = 'MAINVERSION';
            var23 = var24.bind(var0)(var23);
            var25 = var17.MAINVERSION;
            var23 = var17.NUMERICIDENTIFIER;
            var23 = var19[var23];
            var27 = '(';
            var23 = var27 + var23;
            var26 = var17.NUMERICIDENTIFIER;
            var26 = var19[var26];
            var28 = ')\\.(';
            var23 = var23 + var28;
            var23 = var23 + var26;
            var26 = var17.NUMERICIDENTIFIER;
            var26 = var19[var26];
            var23 = var23 + var28;
            var23 = var23 + var26;
            var26 = ')';
            var23 = var23 + var26;
            var19[var25] = var23;
            var23 = 'MAINVERSIONLOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.MAINVERSIONLOOSE;
            var23 = var17.NUMERICIDENTIFIERLOOSE;
            var23 = var19[var23];
            var23 = var27 + var23;
            var27 = var17.NUMERICIDENTIFIERLOOSE;
            var27 = var19[var27];
            var23 = var23 + var28;
            var23 = var23 + var27;
            var27 = var17.NUMERICIDENTIFIERLOOSE;
            var27 = var19[var27];
            var23 = var23 + var28;
            var23 = var23 + var27;
            var23 = var23 + var26;
            var19[var25] = var23;
            var23 = 'PRERELEASEIDENTIFIER';
            var23 = var24.bind(var0)(var23);
            var25 = var17.PRERELEASEIDENTIFIER;
            var23 = var17.NUMERICIDENTIFIER;
            var23 = var19[var23];
            var27 = '(?:';
            var23 = var27 + var23;
            var28 = var17.NONNUMERICIDENTIFIER;
            var28 = var19[var28];
            var29 = '|';
            var23 = var23 + var29;
            var23 = var23 + var28;
            var23 = var23 + var26;
            var19[var25] = var23;
            var23 = 'PRERELEASEIDENTIFIERLOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.PRERELEASEIDENTIFIERLOOSE;
            var23 = var17.NUMERICIDENTIFIERLOOSE;
            var23 = var19[var23];
            var23 = var27 + var23;
            var27 = var17.NONNUMERICIDENTIFIER;
            var27 = var19[var27];
            var23 = var23 + var29;
            var23 = var23 + var27;
            var23 = var23 + var26;
            var19[var25] = var23;
            var23 = 'PRERELEASE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.PRERELEASE;
            var23 = var17.PRERELEASEIDENTIFIER;
            var27 = var19[var23];
            var23 = '(?:-(';
            var23 = var23 + var27;
            var27 = var17.PRERELEASEIDENTIFIER;
            var27 = var19[var27];
            var30 = '(?:\\.';
            var23 = var23 + var30;
            var23 = var23 + var27;
            var27 = ')*))';
            var23 = var23 + var27;
            var19[var25] = var23;
            var23 = 'PRERELEASELOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.PRERELEASELOOSE;
            var23 = var17.PRERELEASEIDENTIFIERLOOSE;
            var28 = var19[var23];
            var23 = '(?:-?(';
            var23 = var23 + var28;
            var28 = var17.PRERELEASEIDENTIFIERLOOSE;
            var28 = var19[var28];
            var23 = var23 + var30;
            var23 = var23 + var28;
            var23 = var23 + var27;
            var19[var25] = var23;
            var23 = 'BUILDIDENTIFIER';
            var23 = var24.bind(var0)(var23);
            var25 = var17.BUILDIDENTIFIER;
            var23 = '[0-9A-Za-z-]+';
            var19[var25] = var23;
            var23 = 'BUILD';
            var23 = var24.bind(var0)(var23);
            var25 = var17.BUILD;
            var23 = var17.BUILDIDENTIFIER;
            var28 = var19[var23];
            var23 = '(?:\\+(';
            var23 = var23 + var28;
            var28 = var17.BUILDIDENTIFIER;
            var28 = var19[var28];
            var23 = var23 + var30;
            var23 = var23 + var28;
            var23 = var23 + var27;
            var19[var25] = var23;
            var23 = 'FULL';
            var23 = var24.bind(var0)(var23);
            var23 = 'FULLPLAIN';
            var23 = var24.bind(var0)(var23);
            var25 = var17.FULLPLAIN;
            var23 = var17.MAINVERSION;
            var27 = var19[var23];
            var23 = 'v?';
            var27 = var23 + var27;
            var23 = var17.PRERELEASE;
            var23 = var19[var23];
            var23 = var27 + var23;
            var27 = var17.BUILD;
            var28 = var19[var27];
            var27 = '?';
            var23 = var23 + var27;
            var23 = var23 + var28;
            var23 = var23 + var27;
            var19[var25] = var23;
            var25 = var17.FULL;
            var23 = var17.FULLPLAIN;
            var23 = var19[var23];
            var32 = '^';
            var23 = var32 + var23;
            var30 = '$';
            var23 = var23 + var30;
            var19[var25] = var23;
            var23 = 'LOOSEPLAIN';
            var23 = var24.bind(var0)(var23);
            var25 = var17.LOOSEPLAIN;
            var23 = var17.MAINVERSIONLOOSE;
            var28 = var19[var23];
            var23 = '[v=\\s]*';
            var28 = var23 + var28;
            var23 = var17.PRERELEASELOOSE;
            var23 = var19[var23];
            var23 = var28 + var23;
            var28 = var17.BUILD;
            var28 = var19[var28];
            var23 = var23 + var27;
            var23 = var23 + var28;
            var23 = var23 + var27;
            var19[var25] = var23;
            var23 = 'LOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.LOOSE;
            var23 = var17.LOOSEPLAIN;
            var23 = var19[var23];
            var23 = var32 + var23;
            var23 = var23 + var30;
            var19[var25] = var23;
            var23 = 'GTLT';
            var23 = var24.bind(var0)(var23);
            var25 = var17.GTLT;
            var23 = '((?:<|>)?=?)';
            var19[var25] = var23;
            var23 = 'XRANGEIDENTIFIERLOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.XRANGEIDENTIFIERLOOSE;
            var23 = var17.NUMERICIDENTIFIERLOOSE;
            var23 = var19[var23];
            var27 = '|x|X|\\*';
            var23 = var23 + var27;
            var19[var25] = var23;
            var23 = 'XRANGEIDENTIFIER';
            var23 = var24.bind(var0)(var23);
            var25 = var17.XRANGEIDENTIFIER;
            var23 = var17.NUMERICIDENTIFIER;
            var23 = var19[var23];
            var23 = var23 + var27;
            var19[var25] = var23;
            var23 = 'XRANGEPLAIN';
            var23 = var24.bind(var0)(var23);
            var25 = var17.XRANGEPLAIN;
            var23 = var17.XRANGEIDENTIFIER;
            var23 = var19[var23];
            var28 = '[v=\\s]*(';
            var23 = var28 + var23;
            var27 = var17.XRANGEIDENTIFIER;
            var27 = var19[var27];
            var34 = ')(?:\\.(';
            var23 = var23 + var34;
            var23 = var23 + var27;
            var27 = var17.XRANGEIDENTIFIER;
            var27 = var19[var27];
            var23 = var23 + var34;
            var23 = var23 + var27;
            var27 = var17.PRERELEASE;
            var27 = var19[var27];
            var33 = ')(?:';
            var23 = var23 + var33;
            var23 = var23 + var27;
            var27 = var17.BUILD;
            var27 = var19[var27];
            var31 = ')?';
            var23 = var23 + var31;
            var23 = var23 + var27;
            var27 = '?)?)?';
            var23 = var23 + var27;
            var19[var25] = var23;
            var23 = 'XRANGEPLAINLOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.XRANGEPLAINLOOSE;
            var23 = var17.XRANGEIDENTIFIERLOOSE;
            var23 = var19[var23];
            var23 = var28 + var23;
            var28 = var17.XRANGEIDENTIFIERLOOSE;
            var28 = var19[var28];
            var23 = var23 + var34;
            var23 = var23 + var28;
            var28 = var17.XRANGEIDENTIFIERLOOSE;
            var28 = var19[var28];
            var23 = var23 + var34;
            var23 = var23 + var28;
            var28 = var17.PRERELEASELOOSE;
            var28 = var19[var28];
            var23 = var23 + var33;
            var23 = var23 + var28;
            var28 = var17.BUILD;
            var28 = var19[var28];
            var23 = var23 + var31;
            var23 = var23 + var28;
            var23 = var23 + var27;
            var19[var25] = var23;
            var23 = 'XRANGE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.XRANGE;
            var23 = var17.GTLT;
            var23 = var19[var23];
            var23 = var32 + var23;
            var27 = var17.XRANGEPLAIN;
            var27 = var19[var27];
            var28 = '\\s*';
            var23 = var23 + var28;
            var23 = var23 + var27;
            var23 = var23 + var30;
            var19[var25] = var23;
            var23 = 'XRANGELOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.XRANGELOOSE;
            var23 = var17.GTLT;
            var23 = var19[var23];
            var23 = var32 + var23;
            var27 = var17.XRANGEPLAINLOOSE;
            var27 = var19[var27];
            var23 = var23 + var28;
            var23 = var23 + var27;
            var23 = var23 + var30;
            var19[var25] = var23;
            var23 = 'COERCE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.COERCE;
            var23 = '(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])';
            var19[var25] = var23;
            var23 = 'COERCERTL';
            var23 = var24.bind(var0)(var23);
            var25 = var17.COERCERTL;
            var31 = var22.RegExp;
            var23 = var17.COERCE;
            var36 = var19[var23];
            var27 = var31.prototype;
            var27 = Object.create(var27, {
                constructor: {
                    value: var31
                }
            });
            var28 = 'g';
            var37 = var27;
            var35 = var28;
            var23 = new var37[var31](var36, var35, var34);
            var23 = var23 instanceof Object ? var23 : var27;
            var20[var25] = var23;
            var23 = 'LONETILDE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.LONETILDE;
            var23 = '(?:~>?)';
            var19[var25] = var23;
            var23 = 'TILDETRIM';
            var23 = var24.bind(var0)(var23);
            var25 = var17.TILDETRIM;
            var23 = var17.LONETILDE;
            var23 = var19[var23];
            var27 = '(\\s*)';
            var23 = var27 + var23;
            var31 = '\\s+';
            var23 = var23 + var31;
            var19[var25] = var23;
            var25 = var17.TILDETRIM;
            var34 = var22.RegExp;
            var23 = var17.TILDETRIM;
            var36 = var19[var23];
            var33 = var34.prototype;
            var33 = Object.create(var33, {
                constructor: {
                    value: var34
                }
            });
            var37 = var33;
            var23 = new var37[var34](var36, var35, var34);
            var23 = var23 instanceof Object ? var23 : var33;
            var20[var25] = var23;
            var23 = 'TILDE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.TILDE;
            var23 = var17.LONETILDE;
            var23 = var19[var23];
            var33 = var32 + var23;
            var23 = var17.XRANGEPLAIN;
            var23 = var19[var23];
            var23 = var33 + var23;
            var23 = var23 + var30;
            var19[var25] = var23;
            var23 = 'TILDELOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.TILDELOOSE;
            var23 = var17.LONETILDE;
            var23 = var19[var23];
            var33 = var32 + var23;
            var23 = var17.XRANGEPLAINLOOSE;
            var23 = var19[var23];
            var23 = var33 + var23;
            var23 = var23 + var30;
            var19[var25] = var23;
            var23 = 'LONECARET';
            var23 = var24.bind(var0)(var23);
            var25 = var17.LONECARET;
            var23 = '(?:\\^)';
            var19[var25] = var23;
            var23 = 'CARETTRIM';
            var23 = var24.bind(var0)(var23);
            var25 = var17.CARETTRIM;
            var23 = var17.LONECARET;
            var23 = var19[var23];
            var23 = var27 + var23;
            var23 = var23 + var31;
            var19[var25] = var23;
            var25 = var17.CARETTRIM;
            var33 = var22.RegExp;
            var23 = var17.CARETTRIM;
            var36 = var19[var23];
            var31 = var33.prototype;
            var31 = Object.create(var31, {
                constructor: {
                    value: var33
                }
            });
            var37 = var31;
            var23 = new var37[var33](var36, var35, var34);
            var23 = var23 instanceof Object ? var23 : var31;
            var20[var25] = var23;
            var23 = 'CARET';
            var23 = var24.bind(var0)(var23);
            var25 = var17.CARET;
            var23 = var17.LONECARET;
            var23 = var19[var23];
            var31 = var32 + var23;
            var23 = var17.XRANGEPLAIN;
            var23 = var19[var23];
            var23 = var31 + var23;
            var23 = var23 + var30;
            var19[var25] = var23;
            var23 = 'CARETLOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.CARETLOOSE;
            var23 = var17.LONECARET;
            var23 = var19[var23];
            var31 = var32 + var23;
            var23 = var17.XRANGEPLAINLOOSE;
            var23 = var19[var23];
            var23 = var31 + var23;
            var23 = var23 + var30;
            var19[var25] = var23;
            var23 = 'COMPARATORLOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.COMPARATORLOOSE;
            var23 = var17.GTLT;
            var23 = var19[var23];
            var23 = var32 + var23;
            var30 = var17.LOOSEPLAIN;
            var31 = var19[var30];
            var30 = '\\s*(';
            var23 = var23 + var30;
            var23 = var23 + var31;
            var31 = ')$|^$';
            var23 = var23 + var31;
            var19[var25] = var23;
            var23 = 'COMPARATOR';
            var23 = var24.bind(var0)(var23);
            var25 = var17.COMPARATOR;
            var23 = var17.GTLT;
            var23 = var19[var23];
            var23 = var32 + var23;
            var32 = var17.FULLPLAIN;
            var32 = var19[var32];
            var23 = var23 + var30;
            var23 = var23 + var32;
            var23 = var23 + var31;
            var19[var25] = var23;
            var23 = 'COMPARATORTRIM';
            var23 = var24.bind(var0)(var23);
            var25 = var17.COMPARATORTRIM;
            var23 = var17.GTLT;
            var23 = var19[var23];
            var23 = var27 + var23;
            var27 = var17.LOOSEPLAIN;
            var27 = var19[var27];
            var23 = var23 + var30;
            var23 = var23 + var27;
            var27 = var17.XRANGEPLAIN;
            var27 = var19[var27];
            var23 = var23 + var29;
            var23 = var23 + var27;
            var23 = var23 + var26;
            var19[var25] = var23;
            var25 = var17.COMPARATORTRIM;
            var27 = var22.RegExp;
            var23 = var17.COMPARATORTRIM;
            var36 = var19[var23];
            var26 = var27.prototype;
            var26 = Object.create(var26, {
                constructor: {
                    value: var27
                }
            });
            var37 = var26;
            var23 = new var37[var27](var36, var35, var34);
            var23 = var23 instanceof Object ? var23 : var26;
            var20[var25] = var23;
            var23 = 'HYPHENRANGE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.HYPHENRANGE;
            var23 = var17.XRANGEPLAIN;
            var23 = var19[var23];
            var27 = '^\\s*(';
            var23 = var27 + var23;
            var26 = var17.XRANGEPLAIN;
            var26 = var19[var26];
            var28 = ')\\s+-\\s+(';
            var23 = var23 + var28;
            var23 = var23 + var26;
            var26 = ')\\s*$';
            var23 = var23 + var26;
            var19[var25] = var23;
            var23 = 'HYPHENRANGELOOSE';
            var23 = var24.bind(var0)(var23);
            var25 = var17.HYPHENRANGELOOSE;
            var23 = var17.XRANGEPLAINLOOSE;
            var23 = var19[var23];
            var23 = var27 + var23;
            var27 = var17.XRANGEPLAINLOOSE;
            var27 = var19[var27];
            var23 = var23 + var28;
            var23 = var23 + var27;
            var23 = var23 + var26;
            var19[var25] = var23;
            var23 = 'STAR';
            var23 = var24.bind(var0)(var23);
            var23 = var17.STAR;
            var17 = '(<|>)?=?\\s*\\*';
            var19[var23] = var17;
            var17 = _closure1_slot6;
            var17 = var18 < var17;
            if (!var17) {
                _fun32512_ip = 2663;
                continue _fun32512
            }
        case 2598:
            var17 = var19[var18];
            var17 = var21.bind(var0)(var18, var17);
            var23 = var20[var18];
            var17 = var18;
            if (var23) {
                _fun32512_ip = 2652;
                continue _fun32512
            }
        case 2618:
            var25 = var22.RegExp;
            var36 = var19[var17];
            var24 = var25.prototype;
            var24 = Object.create(var24, {
                constructor: {
                    value: var25
                }
            });
            var37 = var24;
            var23 = new var37[var25](var36, var35);
            var23 = var23 instanceof Object ? var23 : var24;
            var20[var17] = var23;
        case 2652:
            var18 = var17 + 1;
            var17 = _closure1_slot6;
            if (var18 < var17) {
                _fun32512_ip = 2598;
                continue _fun32512
            }
        case 2663:
            var2.parse = var16;
            var16 = function(arg0, arg1) { // Original name: valid, environment: var1
                _fun32540: for (var _fun32540_ip = 0;;) switch (_fun32540_ip) {
                    case 0:
                        var3 = _closure1_slot9;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var1 = var3.bind(var2)(var1, var0);
                        var0 = null;
                        if (!var1) {
                            _fun32540_ip = 32;
                            continue _fun32540
                        }
                    case 26:
                        var0 = var1.version;
                    case 32:
                        return var0;
                }
            };
            var2.valid = var16;
            var16 = function(arg0, arg1) { // Original name: clean, environment: var1
                _fun32541: for (var _fun32541_ip = 0;;) switch (_fun32541_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot9;
                        var0 = var1.trim;
                        var4 = var0.bind(var1)();
                        var2 = var4.replace;
                        var1 = /^[=v]+/;
                        var0 = '';
                        var2 = var2.bind(var4)(var1, var0);
                        var1 = undefined;
                        var0 = arg1;
                        var1 = var3.bind(var1)(var2, var0);
                        var0 = null;
                        if (!var1) {
                            _fun32541_ip = 71;
                            continue _fun32541
                        }
                    case 65:
                        var0 = var1.version;
                    case 71:
                        return var0;
                }
            };
            var2.clean = var16;
            var2.SemVer = var2;
            var17 = var2.prototype;
            var16 = function() { // Environment: var1
                _fun32542: for (var _fun32542_ip = 0;;) switch (_fun32542_ip) {
                    case 0:
                        var0 = this;
                        var1 = var0.major;
                        var4 = '.';
                        var2 = var1 + var4;
                        var1 = var0.minor;
                        var1 = var2 + var1;
                        var2 = var0.patch;
                        var1 = var1 + var4;
                        var1 = var1 + var2;
                        var0.version = var1;
                        var1 = var0.prerelease;
                        var1 = var1.length;
                        if (!var1) {
                            _fun32542_ip = 100;
                            continue _fun32542
                        }
                    case 60:
                        var2 = var0.version;
                        var3 = var0.prerelease;
                        var1 = var3.join;
                        var3 = var1.bind(var3)(var4);
                        var1 = '-';
                        var1 = var1 + var3;
                        var1 = var2 + var1;
                        var0.version = var1;
                    case 100:
                        var0 = var0.version;
                        return var0;
                }
            };
            var17.format = var16;
            var17 = var2.prototype;
            var16 = function() { // Environment: var1
                var0 = this;
                var0 = var0.version;
                return var0;
            };
            var17.toString = var16;
            var17 = var2.prototype;
            var16 = function(arg0) { // Environment: var1
                _fun32544: for (var _fun32544_ip = 0;;) switch (_fun32544_ip) {
                    case 0:
                        var5 = arg0;
                        var3 = this;
                        var7 = _closure1_slot1;
                        var10 = var3.version;
                        var9 = var3.options;
                        var12 = undefined;
                        var11 = 'SemVer.compare';
                        var8 = var5;
                        var1 = var12[var7](var11, var10, var9, var8, var7);
                        var1 = _closure1_slot10;
                        var2 = var5 instanceof var1;
                        var1 = var5;
                        if (var2) {
                            _fun32544_ip = 84;
                            continue _fun32544
                        }
                    case 52:
                        var4 = _closure1_slot10;
                        var10 = var3.options;
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var12 = var2;
                        var11 = var5;
                        var0 = new var12[var4](var11, var10, var9);
                        var1 = var0 instanceof Object ? var0 : var2;
                    case 84:
                        var0 = var3.compareMain;
                        var0 = var0.bind(var3)(var1);
                        var2 = var1;
                        if (var0) {
                            _fun32544_ip = 112;
                            continue _fun32544
                        }
                    case 101:
                        var1 = var3.comparePre;
                        var0 = var1.bind(var3)(var2);
                    case 112:
                        return var0;
                }
            };
            var17.compare = var16;
            var17 = var2.prototype;
            var16 = function(arg0) { // Environment: var1
                _fun32545: for (var _fun32545_ip = 0;;) switch (_fun32545_ip) {
                    case 0:
                        var6 = arg0;
                        var2 = this;
                        var0 = _closure1_slot10;
                        var0 = var6 instanceof var0;
                        var1 = var6;
                        if (var0) {
                            _fun32545_ip = 54;
                            continue _fun32545
                        }
                    case 22:
                        var5 = _closure1_slot10;
                        var8 = var2.options;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = var4;
                        var9 = var6;
                        var0 = new var10[var5](var9, var8, var7);
                        var1 = var0 instanceof Object ? var0 : var4;
                    case 54:
                        var6 = _closure1_slot11;
                        var5 = var2.major;
                        var0 = var1.major;
                        var4 = undefined;
                        var0 = var6.bind(var4)(var5, var0);
                        if (var0) {
                            _fun32545_ip = 103;
                            continue _fun32545
                        }
                    case 81:
                        var7 = _closure1_slot11;
                        var6 = var2.minor;
                        var5 = var1.minor;
                        var0 = var7.bind(var4)(var6, var5);
                    case 103:
                        if (var0) {
                            _fun32545_ip = 128;
                            continue _fun32545
                        }
                    case 106:
                        var3 = _closure1_slot11;
                        var2 = var2.patch;
                        var1 = var1.patch;
                        var0 = var3.bind(var4)(var2, var1);
                    case 128:
                        return var0;
                }
            };
            var17.compareMain = var16;
            var17 = var2.prototype;
            var16 = function(arg0) { // Environment: var1
                _fun32546: for (var _fun32546_ip = 0;;) switch (_fun32546_ip) {
                    case 0:
                        var4 = arg0;
                        var7 = this;
                        var0 = _closure1_slot10;
                        var0 = var4 instanceof var0;
                        var6 = var4;
                        if (var0) {
                            _fun32546_ip = 54;
                            continue _fun32546
                        }
                    case 22:
                        var3 = _closure1_slot10;
                        var13 = var7.options;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var15 = var2;
                        var14 = var4;
                        var0 = new var15[var3](var14, var13, var12);
                        var6 = var0 instanceof Object ? var0 : var2;
                    case 54:
                        var0 = var7.prerelease;
                        var0 = var0.length;
                        if (!var0) {
                            _fun32546_ip = 90;
                            continue _fun32546
                        }
                    case 68:
                        var0 = var6.prerelease;
                        var0 = var0.length;
                        if (var0) {
                            _fun32546_ip = 90;
                            continue _fun32546
                        }
                    case 82:
                        var0 = -1;
                        return var0;
                    case 90:
                        var0 = var7.prerelease;
                        var0 = var0.length;
                        if (var0) {
                            _fun32546_ip = 123;
                            continue _fun32546
                        }
                    case 104:
                        var0 = var6.prerelease;
                        var0 = var0.length;
                        if (!var0) {
                            _fun32546_ip = 123;
                            continue _fun32546
                        }
                    case 118:
                        var0 = 1;
                        return var0;
                    case 123:
                        var0 = var7.prerelease;
                        var2 = var0.length;
                        var0 = 0;
                        var5 = 0;
                        if (var2) {
                            _fun32546_ip = 159;
                            continue _fun32546
                        }
                    case 141:
                        var2 = var6.prerelease;
                        var2 = var2.length;
                        var5 = 0;
                        if (var2) {
                            _fun32546_ip = 159;
                            continue _fun32546
                        }
                    case 157:
                        return var0;
                    case 159:
                        var2 = var7.prerelease;
                        var4 = var2[var5];
                        var2 = var6.prerelease;
                        var3 = var2[var5];
                        var9 = _closure1_slot1;
                        var2 = undefined;
                        var14 = 'prerelease compare';
                        var15 = undefined;
                        var13 = var5;
                        var12 = var4;
                        var11 = var3;
                        var8 = var15[var9](var14, var13, var12, var11, var10);
                        var9 = var2 === var4;
                        var8 = var5;
                        if (!var9) {
                            _fun32546_ip = 220;
                            continue _fun32546
                        }
                    case 216:
                        if (!(var2 !== var3)) {
                            _fun32546_ip = 264;
                            continue _fun32546
                        }
                    case 220:
                        if (!(var2 !== var3)) {
                            _fun32546_ip = 259;
                            continue _fun32546
                        }
                    case 224:
                        if (var9) {
                            _fun32546_ip = 251;
                            continue _fun32546
                        }
                    case 227:
                        if (!(var4 === var3)) {
                            _fun32546_ip = 239;
                            continue _fun32546
                        }
                    case 231:
                        var5 = var8 + 1;
                        if (var5) {
                            _fun32546_ip = 159;
                            continue _fun32546
                        }
                    case 237:
                        return var2;
                    case 239:
                        var1 = _closure1_slot11;
                        var1 = var1.bind(var2)(var4, var3);
                        return var1;
                    case 251:
                        var1 = -1;
                        return var1;
                    case 259:
                        var1 = 1;
                        return var1;
                    case 264:
                        return var0;
                }
            };
            var17.comparePre = var16;
            var17 = var2.prototype;
            var16 = function(arg0) { // Environment: var1
                _fun32547: for (var _fun32547_ip = 0;;) switch (_fun32547_ip) {
                    case 0:
                        var4 = arg0;
                        var8 = this;
                        var0 = _closure1_slot10;
                        var0 = var4 instanceof var0;
                        var7 = var4;
                        if (var0) {
                            _fun32547_ip = 54;
                            continue _fun32547
                        }
                    case 22:
                        var3 = _closure1_slot10;
                        var14 = var8.options;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var16 = var2;
                        var15 = var4;
                        var0 = new var16[var3](var15, var14, var13);
                        var7 = var0 instanceof Object ? var0 : var2;
                    case 54:
                        var0 = 0;
                        var4 = undefined;
                        var6 = 'prerelease compare';
                        var5 = 0;
                    case 66:
                        var2 = var8.build;
                        var3 = var2[var5];
                        var2 = var7.build;
                        var2 = var2[var5];
                        var9 = _closure1_slot1;
                        var16 = undefined;
                        var15 = var6;
                        var14 = var5;
                        var13 = var3;
                        var12 = var2;
                        var9 = var16[var9](var15, var14, var13, var12, var11);
                        var10 = var4 === var3;
                        var9 = var5;
                        if (!var10) {
                            _fun32547_ip = 122;
                            continue _fun32547
                        }
                    case 118:
                        if (!(var4 !== var2)) {
                            _fun32547_ip = 166;
                            continue _fun32547
                        }
                    case 122:
                        if (!(var4 !== var2)) {
                            _fun32547_ip = 161;
                            continue _fun32547
                        }
                    case 126:
                        if (var10) {
                            _fun32547_ip = 153;
                            continue _fun32547
                        }
                    case 129:
                        if (!(var3 === var2)) {
                            _fun32547_ip = 141;
                            continue _fun32547
                        }
                    case 133:
                        var5 = var9 + 1;
                        if (var5) {
                            _fun32547_ip = 66;
                            continue _fun32547
                        }
                    case 139:
                        return var4;
                    case 141:
                        var1 = _closure1_slot11;
                        var1 = var1.bind(var4)(var3, var2);
                        return var1;
                    case 153:
                        var1 = -1;
                        return var1;
                    case 161:
                        var1 = 1;
                        return var1;
                    case 166:
                        return var0;
                }
            };
            var17.compareBuild = var16;
            var17 = var2.prototype;
            var16 = function(arg0, arg1) { // Environment: var1
                _fun32548: for (var _fun32548_ip = 0;;) switch (_fun32548_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var0 = this;
                        var1 = 'premajor';
                        if (!(var1 !== var2)) {
                            _fun32548_ip = 740;
                            continue _fun32548
                        }
                    case 21:
                        var1 = 'preminor';
                        if (!(var1 !== var2)) {
                            _fun32548_ip = 687;
                            continue _fun32548
                        }
                    case 34:
                        var1 = 'prepatch';
                        if (!(var1 !== var2)) {
                            _fun32548_ip = 639;
                            continue _fun32548
                        }
                    case 47:
                        var1 = 'prerelease';
                        if (!(var1 !== var2)) {
                            _fun32548_ip = 585;
                            continue _fun32548
                        }
                    case 58:
                        var1 = 'major';
                        if (!(var1 !== var2)) {
                            _fun32548_ip = 497;
                            continue _fun32548
                        }
                    case 69:
                        var1 = 'minor';
                        if (!(var1 !== var2)) {
                            _fun32548_ip = 428;
                            continue _fun32548
                        }
                    case 80:
                        var1 = 'patch';
                        if (!(var1 !== var2)) {
                            _fun32548_ip = 381;
                            continue _fun32548
                        }
                    case 91:
                        var1 = 'pre';
                        if (!(var1 !== var2)) {
                            _fun32548_ip = 139;
                            continue _fun32548
                        }
                    case 99:
                        var1 = global;
                        var4 = var1.Error;
                        var1 = 'invalid increment argument: ';
                        var11 = var1 + var2;
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var12 = var2;
                        var1 = new var12[var4](var11, var10);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 139:
                        var1 = var0.prerelease;
                        var1 = var1.length;
                        var2 = 0;
                        if (!(var2 !== var1)) {
                            _fun32548_ip = 265;
                            continue _fun32548
                        }
                    case 156:
                        var1 = var0.prerelease;
                        var1 = var1.length;
                        var1 = var1 - 1;
                        var6 = -2;
                        var5 = 'number';
                        var4 = var1;
                        if (!(var4 >= var2)) {
                            _fun32548_ip = 237;
                            continue _fun32548
                        }
                    case 187:
                        var7 = var0.prerelease;
                        var7 = var7[var1];
                        var8 = typeof var7;
                        var7 = var1;
                        if (!(var5 === var8)) {
                            _fun32548_ip = 227;
                            continue _fun32548
                        }
                    case 207:
                        var9 = var0.prerelease;
                        var8 = var9[var1];
                        var8 = var8 + 1;
                        var9[var1] = var8;
                        var7 = var6;
                    case 227:
                        var1 = var7 - 1;
                        var4 = var1;
                        if (var4 >= var2) {
                            _fun32548_ip = 187;
                            continue _fun32548
                        }
                    case 237:
                        var1 = -1;
                        if (!(var1 === var4)) {
                            _fun32548_ip = 281;
                            continue _fun32548
                        }
                    case 247:
                        var4 = var0.prerelease;
                        var1 = var4.push;
                        var1 = var1.bind(var4)(var2);
                        _fun32548_ip = 281;
                        continue _fun32548;
                    case 265:
                        var1 = [0];
                        var0.prerelease = var1;
                    case 281:
                        if (!var3) {
                            _fun32548_ip = 797;
                            continue _fun32548
                        }
                    case 287:
                        var1 = var0.prerelease;
                        var1 = var1[var2];
                        if (!(var1 !== var3)) {
                            _fun32548_ip = 324;
                            continue _fun32548
                        }
                    case 301:
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        var0.prerelease = var1;
                        _fun32548_ip = 797;
                        continue _fun32548;
                    case 324:
                        var1 = global;
                        var5 = var1.isNaN;
                        var4 = var0.prerelease;
                        var1 = 1;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        if (!var1) {
                            _fun32548_ip = 797;
                            continue _fun32548
                        }
                    case 358:
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        var0.prerelease = var1;
                        _fun32548_ip = 797;
                        continue _fun32548;
                    case 381:
                        var1 = var0.prerelease;
                        var2 = var1.length;
                        var1 = 0;
                        if (!(var1 === var2)) {
                            _fun32548_ip = 413;
                            continue _fun32548
                        }
                    case 398:
                        var1 = var0.patch;
                        var1 = var1 + 1;
                        var0.patch = var1;
                    case 413:
                        var1 = new Array(0);
                        var0.prerelease = var1;
                        _fun32548_ip = 797;
                        continue _fun32548;
                    case 428:
                        var2 = var0.patch;
                        var1 = 0;
                        var2 = var1 === var2;
                        if (!var2) {
                            _fun32548_ip = 458;
                            continue _fun32548
                        }
                    case 443:
                        var4 = var0.prerelease;
                        var4 = var4.length;
                        var2 = var1 !== var4;
                    case 458:
                        if (var2) {
                            _fun32548_ip = 476;
                            continue _fun32548
                        }
                    case 461:
                        var2 = var0.minor;
                        var2 = var2 + 1;
                        var0.minor = var2;
                    case 476:
                        var0.patch = var1;
                        var1 = new Array(0);
                        var0.prerelease = var1;
                        _fun32548_ip = 797;
                        continue _fun32548;
                    case 497:
                        var2 = var0.minor;
                        var1 = 0;
                        var2 = var1 === var2;
                        if (!var2) {
                            _fun32548_ip = 522;
                            continue _fun32548
                        }
                    case 512:
                        var4 = var0.patch;
                        var2 = var1 === var4;
                    case 522:
                        if (!var2) {
                            _fun32548_ip = 540;
                            continue _fun32548
                        }
                    case 525:
                        var4 = var0.prerelease;
                        var4 = var4.length;
                        var2 = var1 !== var4;
                    case 540:
                        if (var2) {
                            _fun32548_ip = 558;
                            continue _fun32548
                        }
                    case 543:
                        var2 = var0.major;
                        var2 = var2 + 1;
                        var0.major = var2;
                    case 558:
                        var0.minor = var1;
                        var0.patch = var1;
                        var1 = new Array(0);
                        var0.prerelease = var1;
                        _fun32548_ip = 797;
                        continue _fun32548;
                    case 585:
                        var1 = var0.prerelease;
                        var2 = var1.length;
                        var1 = 0;
                        if (!(var1 === var2)) {
                            _fun32548_ip = 618;
                            continue _fun32548
                        }
                    case 602:
                        var2 = var0.inc;
                        var1 = 'patch';
                        var1 = var2.bind(var0)(var1, var3);
                    case 618:
                        var2 = var0.inc;
                        var1 = 'pre';
                        var1 = var2.bind(var0)(var1, var3);
                        _fun32548_ip = 797;
                        continue _fun32548;
                    case 639:
                        var2 = var0.prerelease;
                        var1 = 0;
                        var2.length = var1;
                        var2 = var0.inc;
                        var1 = 'patch';
                        var1 = var2.bind(var0)(var1, var3);
                        var2 = var0.inc;
                        var1 = 'pre';
                        var1 = var2.bind(var0)(var1, var3);
                        _fun32548_ip = 797;
                        continue _fun32548;
                    case 687:
                        var2 = var0.prerelease;
                        var1 = 0;
                        var2.length = var1;
                        var0.patch = var1;
                        var1 = var0.minor;
                        var1 = var1 + 1;
                        var0.minor = var1;
                        var2 = var0.inc;
                        var1 = 'pre';
                        var1 = var2.bind(var0)(var1, var3);
                        _fun32548_ip = 797;
                        continue _fun32548;
                    case 740:
                        var2 = var0.prerelease;
                        var1 = 0;
                        var2.length = var1;
                        var0.patch = var1;
                        var0.minor = var1;
                        var1 = var0.major;
                        var1 = var1 + 1;
                        var0.major = var1;
                        var2 = var0.inc;
                        var1 = 'pre';
                        var1 = var2.bind(var0)(var1, var3);
                    case 797:
                        var1 = var0.format;
                        var1 = var1.bind(var0)();
                        var1 = var0.version;
                        var0.raw = var1;
                        return var0;
                }
            };
            var17.inc = var16;
            var16 = function(arg0, arg1, arg2, arg3) { // Original name: inc, environment: var1
                _fun32549: for (var _fun32549_ip = 0;;) switch (_fun32549_ip) {
                    case 0:
                        var4 = arg2;
                        var3 = arg0;
                        var1 = arg1;
                        var2 = var4;
                        var0 = arg3;
                        var5 = 'string';
                        var4 = typeof var4;
                        if (!(var5 === var4)) {
                            _fun32549_ip = 31;
                            continue _fun32549
                        }
                    case 26:
                        var0 = var2;
                        var2 = undefined;
                    case 31: // try_start_0
                        var5 = _closure1_slot10;
                        var7 = var3;
                        var6 = var2;
                        var3 = var5.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var8 = var3;
                        var2 = new var8[var5](var7, var6, var5);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var2 = var3.inc;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = var0.version;
                    case 82: // try_end0
                        return var0;
                    case 84: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = null;
                        return var0;
                }
            };
            var2.inc = var16;
            var16 = function(arg0, arg1) { // Original name: diff, environment: var1
                _fun32550: for (var _fun32550_ip = 0;;) switch (_fun32550_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var4 = _closure1_slot15;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3, var2);
                        if (var4) {
                            _fun32550_ip = 150;
                            continue _fun32550
                        }
                    case 27:
                        var1 = _closure1_slot9;
                        var14 = var1.bind(var0)(var3);
                        var13 = var1.bind(var0)(var2);
                        var1 = var14.prerelease;
                        var1 = var1.length;
                        if (var1) {
                            _fun32550_ip = 75;
                            continue _fun32550
                        }
                    case 55:
                        var1 = var13.prerelease;
                        var1 = var1.length;
                        var2 = '';
                        var0 = undefined;
                        if (!var1) {
                            _fun32550_ip = 83;
                            continue _fun32550
                        }
                    case 75:
                        var2 = 'pre';
                        var0 = 'prerelease';
                    case 83:
                        var11 = var14;
                        var7 = 'patch';
                        var6 = 'minor';
                        var5 = 'major';
                        for (var8 in var11)
                            case 106: {
                                case 115: var1 = var8;
                                if (!(var5 !== var1)) {
                                    _fun32550_ip = 130;
                                    continue _fun32550
                                }
                                case 122: if (!(var6 !== var1)) {
                                    _fun32550_ip = 130;
                                    continue _fun32550
                                }
                                case 126: if (var7 !== var1) {
                                    _fun32550_ip = 106;
                                    continue _fun32550
                                }
                                case 130: var4 = var14[var1];
                                var3 = var13[var1];
                                if (var4 === var3) {
                                    _fun32550_ip = 106;
                                    continue _fun32550
                                }
                                case 142: var1 = var2 + var1;
                                return var1;
                            }
                    case 148:
                        return var0;
                    case 150:
                        var0 = null;
                        return var0;
                }
            };
            var2.diff = var16;
            var2.compareIdentifiers = var15;
            var15 = /^[0-9]+$/;
            var _closure1_slot7 = var15;
            var15 = function(arg0, arg1) { // Original name: rcompareIdentifiers, environment: var1
                var3 = _closure1_slot11;
                var2 = undefined;
                var1 = arg1;
                var0 = arg0;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.rcompareIdentifiers = var15;
            var15 = function(arg0, arg1) { // Original name: major, environment: var1
                var3 = _closure1_slot10;
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
                var0 = var0.major;
                return var0;
            };
            var2.major = var15;
            var15 = function(arg0, arg1) { // Original name: minor, environment: var1
                var3 = _closure1_slot10;
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
                var0 = var0.minor;
                return var0;
            };
            var2.minor = var15;
            var15 = function(arg0, arg1) { // Original name: patch, environment: var1
                var3 = _closure1_slot10;
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
                var0 = var0.patch;
                return var0;
            };
            var2.patch = var15;
            var2.compare = var14;
            var14 = function(arg0, arg1) { // Original name: compareLoose, environment: var1
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = true;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var2.compareLoose = var14;
            var14 = function(arg0, arg1, arg2) { // Original name: compareBuild, environment: var1
                _fun32556: for (var _fun32556_ip = 0;;) switch (_fun32556_ip) {
                    case 0:
                        var4 = arg2;
                        var2 = _closure1_slot10;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = arg0;
                        var7 = var1;
                        var5 = var4;
                        var0 = new var7[var2](var6, var5, var4);
                        var3 = var0 instanceof Object ? var0 : var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = arg1;
                        var7 = var1;
                        var5 = var4;
                        var0 = new var7[var2](var6, var5, var4);
                        var2 = var0 instanceof Object ? var0 : var1;
                        var0 = var3.compare;
                        var0 = var0.bind(var3)(var2);
                        if (var0) {
                            _fun32556_ip = 87;
                            continue _fun32556
                        }
                    case 76:
                        var1 = var3.compareBuild;
                        var0 = var1.bind(var3)(var2);
                    case 87:
                        return var0;
                }
            };
            var2.compareBuild = var14;
            var14 = function(arg0, arg1, arg2) { // Original name: rcompare, environment: var1
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = arg1;
                var1 = arg0;
                var0 = arg2;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var2.rcompare = var14;
            var14 = function(arg0, arg1) { // Original name: sort, environment: var1
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = var2.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    var4 = _closure1_slot0;
                    var3 = var4.compareBuild;
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var4)(var1, var0, var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.sort = var14;
            var14 = function(arg0, arg1) { // Original name: rsort, environment: var1
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = var2.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    var4 = _closure1_slot0;
                    var3 = var4.compareBuild;
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var1, var0, var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.rsort = var14;
            var2.gt = var13;
            var2.lt = var12;
            var2.eq = var11;
            var2.neq = var10;
            var2.gte = var9;
            var2.lte = var8;
            var2.cmp = var7;
            var2.Comparator = var6;
            var7 = {};
            var _closure1_slot8 = var7;
            var8 = var6.prototype;
            var7 = function(arg0) { // Environment: var1
                _fun32562: for (var _fun32562_ip = 0;;) switch (_fun32562_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = this;
                        var0 = var2.options;
                        var3 = var0.loose;
                        var5 = _closure1_slot4;
                        var0 = _closure1_slot5;
                        if (var3) {
                            _fun32562_ip = 42;
                            continue _fun32562
                        }
                    case 30:
                        var3 = var0.COMPARATOR;
                        var3 = var5[var3];
                        _fun32562_ip = 52;
                        continue _fun32562;
                    case 42:
                        var0 = var0.COMPARATORLOOSE;
                        var3 = var5[var0];
                    case 52:
                        var0 = var1.match;
                        var3 = var0.bind(var1)(var3);
                        if (var3) {
                            _fun32562_ip = 106;
                            continue _fun32562
                        }
                    case 66:
                        var0 = global;
                        var5 = var0.TypeError;
                        var0 = 'Invalid comparator: ';
                        var9 = var0 + var1;
                        var1 = var5.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = var1;
                        var0 = new var10[var5](var9, var8);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 106:
                        var6 = 1;
                        var7 = var3[var6];
                        var1 = '';
                        var0 = undefined;
                        var5 = var1;
                        if (!(var0 !== var7)) {
                            _fun32562_ip = 130;
                            continue _fun32562
                        }
                    case 126:
                        var5 = var3[var6];
                    case 130:
                        var2.operator = var5;
                        var6 = var2.operator;
                        var5 = '=';
                        if (!(var5 === var6)) {
                            _fun32562_ip = 156;
                            continue _fun32562
                        }
                    case 150:
                        var2.operator = var1;
                    case 156:
                        var1 = 2;
                        var5 = var3[var1];
                        if (var5) {
                            _fun32562_ip = 178;
                            continue _fun32562
                        }
                    case 166:
                        var5 = _closure1_slot8;
                        var2.semver = var5;
                        _fun32562_ip = 223;
                        continue _fun32562;
                    case 178:
                        var5 = _closure1_slot10;
                        var9 = var3[var1];
                        var1 = var2.options;
                        var8 = var1.loose;
                        var3 = var5.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = var3;
                        var1 = new var10[var5](var9, var8, var7);
                        var1 = var1 instanceof Object ? var1 : var3;
                        var2.semver = var1;
                    case 223:
                        return var0;
                }
            };
            var8.parse = var7;
            var8 = var6.prototype;
            var7 = function() { // Environment: var1
                var0 = this;
                var0 = var0.value;
                return var0;
            };
            var8.toString = var7;
            var8 = var6.prototype;
            var7 = function(arg0) { // Environment: var1
                _fun32564: for (var _fun32564_ip = 0;;) switch (_fun32564_ip) {
                    case 0:
                        var7 = arg0;
                        var0 = this;
                        var1 = var7;
                        var6 = _closure1_slot1;
                        var3 = var0.options;
                        var4 = var3.loose;
                        var5 = undefined;
                        var3 = 'Comparator.test';
                        var3 = var6.bind(var5)(var3, var7, var4);
                        var4 = var0.semver;
                        var3 = _closure1_slot8;
                        if (!(var4 !== var3)) {
                            _fun32564_ip = 150;
                            continue _fun32564
                        }
                    case 55:
                        var4 = var1;
                        var3 = _closure1_slot8;
                        if (!(var4 !== var3)) {
                            _fun32564_ip = 150;
                            continue _fun32564
                        }
                    case 66:
                        var3 = var1;
                        var4 = 'string';
                        var3 = typeof var3;
                        if (!(var4 === var3)) {
                            _fun32564_ip = 112;
                            continue _fun32564
                        }
                    case 80: // try_start_0
                        var7 = _closure1_slot10;
                        var11 = var1;
                        var10 = var0.options;
                        var4 = var7.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var7
                            }
                        });
                        var12 = var4;
                        var3 = new var12[var7](var11, var10, var9);
                        var1 = var3 instanceof Object ? var3 : var4;
                    case 112: // try_end0
                        var4 = _closure1_slot19;
                        var11 = var1;
                        var10 = var0.operator;
                        var9 = var0.semver;
                        var8 = var0.options;
                        var12 = undefined;
                        var0 = var12[var4](var11, var10, var9, var8, var7);
                        return var0;
                    case 144: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                    case 150:
                        var0 = true;
                        return var0;
                }
            };
            var8.test = var7;
            var7 = var6.prototype;
            var6 = function(arg0, arg1) { // Environment: var1
                _fun32565: for (var _fun32565_ip = 0;;) switch (_fun32565_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = arg1;
                        var1 = this;
                        var0 = _closure1_slot20;
                        var0 = var3 instanceof var0;
                        if (var0) {
                            _fun32565_ip = 58;
                            continue _fun32565
                        }
                    case 22:
                        var0 = global;
                        var6 = var0.TypeError;
                        var0 = var6.prototype;
                        var5 = Object.create(var0, {
                            constructor: {
                                value: var6
                            }
                        });
                        var22 = 'a Comparator is required';
                        var23 = var5;
                        var0 = new var23[var6](var22, var21);
                        var0 = var0 instanceof Object ? var0 : var5;
                        throw var0;
                    case 58:
                        var0 = var4;
                        if (!var4) {
                            _fun32565_ip = 75;
                            continue _fun32565
                        }
                    case 64:
                        var6 = 'object';
                        var5 = typeof var4;
                        var0 = var6 === var5;
                    case 75:
                        var5 = var4;
                        if (var0) {
                            _fun32565_ip = 104;
                            continue _fun32565
                        }
                    case 81:
                        var0 = {};
                        var4 = !var4;
                        var4 = !var4;
                        var0.loose = var4;
                        var4 = false;
                        var0.includePrerelease = var4;
                        var5 = var0;
                    case 104:
                        var0 = var1.operator;
                        var4 = '';
                        if (!(var4 !== var0)) {
                            _fun32565_ip = 636;
                            continue _fun32565
                        }
                    case 121:
                        var0 = var3.operator;
                        if (!(var4 !== var0)) {
                            _fun32565_ip = 571;
                            continue _fun32565
                        }
                    case 134:
                        var0 = var1.operator;
                        var13 = '>=';
                        var11 = var13 !== var0;
                        if (!var11) {
                            _fun32565_ip = 167;
                            continue _fun32565
                        }
                    case 153:
                        var6 = var1.operator;
                        var0 = '>';
                        var11 = var0 !== var6;
                    case 167:
                        if (var11) {
                            _fun32565_ip = 200;
                            continue _fun32565
                        }
                    case 170:
                        var0 = var3.operator;
                        var0 = var13 !== var0;
                        if (!var0) {
                            _fun32565_ip = 197;
                            continue _fun32565
                        }
                    case 183:
                        var7 = var3.operator;
                        var6 = '>';
                        var0 = var6 !== var7;
                    case 197:
                        var11 = var0;
                    case 200:
                        var0 = !var11;
                        var6 = var1.operator;
                        var15 = '<=';
                        var6 = var15 !== var6;
                        if (!var6) {
                            _fun32565_ip = 236;
                            continue _fun32565
                        }
                    case 222:
                        var8 = var1.operator;
                        var7 = '<';
                        var6 = var7 !== var8;
                    case 236:
                        if (var6) {
                            _fun32565_ip = 269;
                            continue _fun32565
                        }
                    case 239:
                        var7 = var3.operator;
                        var7 = var15 !== var7;
                        if (!var7) {
                            _fun32565_ip = 266;
                            continue _fun32565
                        }
                    case 252:
                        var9 = var3.operator;
                        var8 = '<';
                        var7 = var8 !== var9;
                    case 266:
                        var6 = var7;
                    case 269:
                        var10 = !var6;
                        var6 = var1.semver;
                        var7 = var6.version;
                        var6 = var3.semver;
                        var6 = var6.version;
                        var8 = var7 === var6;
                        var6 = var1.operator;
                        var6 = var13 !== var6;
                        if (!var6) {
                            _fun32565_ip = 323;
                            continue _fun32565
                        }
                    case 313:
                        var7 = var1.operator;
                        var6 = var15 !== var7;
                    case 323:
                        if (var6) {
                            _fun32565_ip = 352;
                            continue _fun32565
                        }
                    case 326:
                        var7 = var3.operator;
                        var7 = var13 !== var7;
                        if (!var7) {
                            _fun32565_ip = 349;
                            continue _fun32565
                        }
                    case 339:
                        var9 = var3.operator;
                        var7 = var15 !== var9;
                    case 349:
                        var6 = var7;
                    case 352:
                        var9 = !var6;
                        var12 = _closure1_slot19;
                        var22 = var1.semver;
                        var20 = var3.semver;
                        var16 = '<';
                        var23 = undefined;
                        var21 = var16;
                        var19 = var5;
                        var7 = var23[var12](var22, var21, var20, var19, var18);
                        if (!var7) {
                            _fun32565_ip = 420;
                            continue _fun32565
                        }
                    case 390:
                        var6 = var1.operator;
                        var6 = var13 === var6;
                        if (var6) {
                            _fun32565_ip = 417;
                            continue _fun32565
                        }
                    case 403:
                        var14 = var1.operator;
                        var12 = '>';
                        var6 = var12 === var14;
                    case 417:
                        var7 = var6;
                    case 420:
                        if (!var7) {
                            _fun32565_ip = 449;
                            continue _fun32565
                        }
                    case 423:
                        var6 = var3.operator;
                        var6 = var15 === var6;
                        if (var6) {
                            _fun32565_ip = 446;
                            continue _fun32565
                        }
                    case 436:
                        var12 = var3.operator;
                        var6 = var16 === var12;
                    case 446:
                        var7 = var6;
                    case 449:
                        var17 = _closure1_slot19;
                        var22 = var1.semver;
                        var20 = var3.semver;
                        var14 = '>';
                        var23 = undefined;
                        var21 = var14;
                        var19 = var5;
                        var6 = var23[var17](var22, var21, var20, var19, var18);
                        if (!var6) {
                            _fun32565_ip = 510;
                            continue _fun32565
                        }
                    case 484:
                        var12 = var1.operator;
                        var12 = var15 === var12;
                        if (var12) {
                            _fun32565_ip = 507;
                            continue _fun32565
                        }
                    case 497:
                        var15 = var1.operator;
                        var12 = var16 === var15;
                    case 507:
                        var6 = var12;
                    case 510:
                        if (!var6) {
                            _fun32565_ip = 539;
                            continue _fun32565
                        }
                    case 513:
                        var12 = var3.operator;
                        var12 = var13 === var12;
                        if (var12) {
                            _fun32565_ip = 536;
                            continue _fun32565
                        }
                    case 526:
                        var13 = var3.operator;
                        var12 = var14 === var13;
                    case 536:
                        var6 = var12;
                    case 539:
                        if (!var11) {
                            _fun32565_ip = 545;
                            continue _fun32565
                        }
                    case 542:
                        var0 = var10;
                    case 545:
                        if (var0) {
                            _fun32565_ip = 557;
                            continue _fun32565
                        }
                    case 548:
                        if (!var8) {
                            _fun32565_ip = 554;
                            continue _fun32565
                        }
                    case 551:
                        var8 = var9;
                    case 554:
                        var0 = var8;
                    case 557:
                        if (var0) {
                            _fun32565_ip = 563;
                            continue _fun32565
                        }
                    case 560:
                        var0 = var7;
                    case 563:
                        if (var0) {
                            _fun32565_ip = 569;
                            continue _fun32565
                        }
                    case 566:
                        var0 = var6;
                    case 569:
                        return var0;
                    case 571:
                        var0 = var3.value;
                        var0 = var4 === var0;
                        if (var0) {
                            _fun32565_ip = 634;
                            continue _fun32565
                        }
                    case 583:
                        var8 = _closure1_slot21;
                        var22 = var1.value;
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var8
                            }
                        });
                        var23 = var7;
                        var21 = var5;
                        var6 = new var23[var8](var22, var21, var20);
                        var9 = var6 instanceof Object ? var6 : var7;
                        var8 = _closure1_slot26;
                        var7 = var3.semver;
                        var6 = undefined;
                        var0 = var8.bind(var6)(var7, var9, var5);
                    case 634:
                        return var0;
                    case 636:
                        var0 = var1.value;
                        var0 = var4 === var0;
                        if (var0) {
                            _fun32565_ip = 698;
                            continue _fun32565
                        }
                    case 648:
                        var6 = _closure1_slot21;
                        var22 = var3.value;
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var23 = var4;
                        var21 = var5;
                        var3 = new var23[var6](var22, var21, var20);
                        var4 = var3 instanceof Object ? var3 : var4;
                        var3 = _closure1_slot26;
                        var2 = var1.value;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var2, var4, var5);
                    case 698:
                        return var0;
                }
            };
            var7.intersects = var6;
            var2.Range = var5;
            var7 = var5.prototype;
            var6 = function() { // Environment: var1
                var0 = this;
                var3 = var0.set;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = var2.join;
                    var0 = ' ';
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.trim;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.join;
                var1 = '||';
                var2 = var2.bind(var3)(var1);
                var1 = var2.trim;
                var1 = var1.bind(var2)();
                var0.range = var1;
                var0 = var0.range;
                return var0;
            };
            var7.format = var6;
            var7 = var5.prototype;
            var6 = function() { // Environment: var1
                var0 = this;
                var0 = var0.range;
                return var0;
            };
            var7.toString = var6;
            var7 = var5.prototype;
            var6 = function(arg0) { // Environment: var1
                _fun32569: for (var _fun32569_ip = 0;;) switch (_fun32569_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = this;
                        var1 = var3.options;
                        var1 = var1.loose;
                        var2 = var4.trim;
                        var7 = var2.bind(var4)();
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot5;
                        if (var1) {
                            _fun32569_ip = 54;
                            continue _fun32569
                        }
                    case 42:
                        var6 = var2.HYPHENRANGE;
                        var6 = var4[var6];
                        _fun32569_ip = 64;
                        continue _fun32569;
                    case 54:
                        var2 = var2.HYPHENRANGELOOSE;
                        var6 = var4[var2];
                    case 64:
                        var4 = var7.replace;
                        var2 = _closure1_slot24;
                        var7 = var4.bind(var7)(var6, var2);
                        var4 = _closure1_slot1;
                        var8 = undefined;
                        var2 = 'hyphen replace';
                        var2 = var4.bind(var8)(var2, var7);
                        var6 = var7.replace;
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot5;
                        var2 = var2.COMPARATORTRIM;
                        var4 = var4[var2];
                        var2 = '$1$2$3';
                        var7 = var6.bind(var7)(var4, var2);
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot5;
                        var2 = var2.COMPARATORTRIM;
                        var4 = var4[var2];
                        var2 = 'comparator trim';
                        var2 = var6.bind(var8)(var2, var7, var4);
                        var6 = var7.replace;
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot5;
                        var2 = var2.TILDETRIM;
                        var4 = var4[var2];
                        var2 = '$1~';
                        var7 = var6.bind(var7)(var4, var2);
                        var6 = var7.replace;
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot5;
                        var2 = var2.CARETTRIM;
                        var4 = var4[var2];
                        var2 = '$1^';
                        var6 = var6.bind(var7)(var4, var2);
                        var4 = var6.split;
                        var2 = /\s+/;
                        var6 = var4.bind(var6)(var2);
                        var2 = var6.join;
                        var4 = ' ';
                        var2 = var2.bind(var6)(var4);
                        var6 = _closure1_slot4;
                        var5 = _closure1_slot5;
                        if (var1) {
                            _fun32569_ip = 300;
                            continue _fun32569
                        }
                    case 288:
                        var1 = var5.COMPARATOR;
                        var1 = var6[var1];
                        _fun32569_ip = 310;
                        continue _fun32569;
                    case 300:
                        var5 = var5.COMPARATORLOOSE;
                        var1 = var6[var5];
                    case 310:
                        var _closure2_slot0 = var1;
                        var1 = var2.split;
                        var5 = var1.bind(var2)(var4);
                        var2 = var5.map;
                        var1 = function(arg0) { // Environment: var0
                            var0 = this;
                            var3 = var0.options;
                            var2 = function(arg0, arg1) { // Original name: parseComparator, environment: var0
                                var4 = arg0;
                                var5 = arg1;
                                var6 = _closure1_slot1;
                                var3 = undefined;
                                var2 = 'comp';
                                var2 = var6.bind(var3)(var2, var4, var5);
                                var2 = function(arg0, arg1) { // Original name: replaceCarets, environment: var0
                                    var2 = arg0;
                                    var1 = arg1;
                                    var _closure5_slot0 = var1;
                                    var1 = var2.trim;
                                    var3 = var1.bind(var2)();
                                    var2 = var3.split;
                                    var1 = /\s+/;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.map;
                                    var0 = function(arg0) { // Environment: var0
                                        var3 = _closure5_slot0;
                                        var2 = function(arg0, arg1) { // Original name: replaceCaret, environment: var0
                                            _fun32574: for (var _fun32574_ip = 0;;) switch (_fun32574_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var2 = arg1;
                                                    var _closure7_slot0 = var3;
                                                    var6 = _closure1_slot1;
                                                    var5 = undefined;
                                                    var4 = 'caret';
                                                    var4 = var6.bind(var5)(var4, var3, var2);
                                                    var2 = var2.loose;
                                                    var4 = _closure1_slot4;
                                                    var1 = _closure1_slot5;
                                                    if (var2) {
                                                        _fun32574_ip = 63;
                                                        continue _fun32574
                                                    }
                                                case 51:
                                                    var2 = var1.CARET;
                                                    var2 = var4[var2];
                                                    _fun32574_ip = 73;
                                                    continue _fun32574;
                                                case 63:
                                                    var1 = var1.CARETLOOSE;
                                                    var2 = var4[var1];
                                                case 73:
                                                    var1 = var3.replace;
                                                    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
                                                        _fun32575: for (var _fun32575_ip = 0;;) switch (_fun32575_ip) {
                                                            case 0:
                                                                var2 = arg1;
                                                                var7 = arg2;
                                                                var9 = arg3;
                                                                var10 = arg4;
                                                                var6 = _closure1_slot1;
                                                                var18 = _closure7_slot0;
                                                                var3 = undefined;
                                                                var19 = 'caret';
                                                                var17 = arg0;
                                                                var20 = undefined;
                                                                var16 = var2;
                                                                var15 = var7;
                                                                var14 = var9;
                                                                var13 = var10;
                                                                var0 = var20[var6](var19, var18, var17, var16, var15, var14, var13, var12);
                                                                var0 = _closure1_slot23;
                                                                var4 = var0.bind(var3)(var2);
                                                                var0 = '';
                                                                if (var4) {
                                                                    _fun32575_ip = 830;
                                                                    continue _fun32575
                                                                }
                                                            case 74:
                                                                var4 = _closure1_slot23;
                                                                var4 = var4.bind(var3)(var7);
                                                                if (var4) {
                                                                    _fun32575_ip = 786;
                                                                    continue _fun32575
                                                                }
                                                            case 89:
                                                                var4 = _closure1_slot23;
                                                                var4 = var4.bind(var3)(var9);
                                                                if (var4) {
                                                                    _fun32575_ip = 649;
                                                                    continue _fun32575
                                                                }
                                                            case 104:
                                                                var5 = _closure1_slot1;
                                                                if (var10) {
                                                                    _fun32575_ip = 363;
                                                                    continue _fun32575
                                                                }
                                                            case 114:
                                                                var4 = 'no pr';
                                                                var4 = var5.bind(var3)(var4);
                                                                var6 = '0';
                                                                if (!(var6 !== var2)) {
                                                                    _fun32575_ip = 204;
                                                                    continue _fun32575
                                                                }
                                                            case 135:
                                                                var4 = '>=';
                                                                var4 = var4 + var2;
                                                                var8 = '.';
                                                                var4 = var4 + var8;
                                                                var4 = var4 + var7;
                                                                var4 = var4 + var8;
                                                                var8 = var4 + var9;
                                                                var11 = var2 - 0;
                                                                var4 = ' <';
                                                                var8 = var8 + var4;
                                                                var4 = 1;
                                                                var4 = var11 + var4;
                                                                var8 = var8 + var4;
                                                                var4 = '.0.0';
                                                                var4 = var8 + var4;
                                                                _fun32575_ip = 355;
                                                                continue _fun32575;
                                                            case 204:
                                                                if (!(var6 !== var7)) {
                                                                    _fun32575_ip = 282;
                                                                    continue _fun32575
                                                                }
                                                            case 208:
                                                                var6 = '>=';
                                                                var6 = var6 + var2;
                                                                var8 = '.';
                                                                var6 = var6 + var8;
                                                                var6 = var6 + var7;
                                                                var6 = var6 + var8;
                                                                var11 = var6 + var9;
                                                                var6 = ' <';
                                                                var6 = var11 + var6;
                                                                var6 = var6 + var2;
                                                                var11 = var7 - 0;
                                                                var8 = var6 + var8;
                                                                var6 = 1;
                                                                var6 = var11 + var6;
                                                                var8 = var8 + var6;
                                                                var6 = '.0';
                                                                var6 = var8 + var6;
                                                                _fun32575_ip = 352;
                                                                continue _fun32575;
                                                            case 282:
                                                                var8 = '>=';
                                                                var8 = var8 + var2;
                                                                var11 = '.';
                                                                var8 = var8 + var11;
                                                                var8 = var8 + var7;
                                                                var8 = var8 + var11;
                                                                var12 = var8 + var9;
                                                                var8 = ' <';
                                                                var8 = var12 + var8;
                                                                var8 = var8 + var2;
                                                                var8 = var8 + var11;
                                                                var8 = var8 + var7;
                                                                var12 = var9 - 0;
                                                                var11 = var8 + var11;
                                                                var8 = 1;
                                                                var8 = var12 + var8;
                                                                var6 = var11 + var8;
                                                            case 352:
                                                                var4 = var6;
                                                            case 355:
                                                                var0 = var4;
                                                                _fun32575_ip = 830;
                                                                continue _fun32575;
                                                            case 363:
                                                                var4 = 'replaceCaret pr';
                                                                var4 = var5.bind(var3)(var4, var10);
                                                                var5 = '0';
                                                                if (!(var5 !== var2)) {
                                                                    _fun32575_ip = 466;
                                                                    continue _fun32575
                                                                }
                                                            case 385:
                                                                var4 = '>=';
                                                                var4 = var4 + var2;
                                                                var6 = '.';
                                                                var4 = var4 + var6;
                                                                var4 = var4 + var7;
                                                                var4 = var4 + var6;
                                                                var6 = var4 + var9;
                                                                var4 = '-';
                                                                var4 = var6 + var4;
                                                                var6 = var4 + var10;
                                                                var8 = var2 - 0;
                                                                var4 = ' <';
                                                                var6 = var6 + var4;
                                                                var4 = 1;
                                                                var4 = var8 + var4;
                                                                var6 = var6 + var4;
                                                                var4 = '.0.0';
                                                                var4 = var6 + var4;
                                                                _fun32575_ip = 641;
                                                                continue _fun32575;
                                                            case 466:
                                                                if (!(var5 !== var7)) {
                                                                    _fun32575_ip = 556;
                                                                    continue _fun32575
                                                                }
                                                            case 470:
                                                                var5 = '>=';
                                                                var5 = var5 + var2;
                                                                var6 = '.';
                                                                var5 = var5 + var6;
                                                                var5 = var5 + var7;
                                                                var5 = var5 + var6;
                                                                var8 = var5 + var9;
                                                                var5 = '-';
                                                                var5 = var8 + var5;
                                                                var8 = var5 + var10;
                                                                var5 = ' <';
                                                                var5 = var8 + var5;
                                                                var5 = var5 + var2;
                                                                var8 = var7 - 0;
                                                                var6 = var5 + var6;
                                                                var5 = 1;
                                                                var5 = var8 + var5;
                                                                var6 = var6 + var5;
                                                                var5 = '.0';
                                                                var5 = var6 + var5;
                                                                _fun32575_ip = 638;
                                                                continue _fun32575;
                                                            case 556:
                                                                var6 = '>=';
                                                                var6 = var6 + var2;
                                                                var8 = '.';
                                                                var6 = var6 + var8;
                                                                var6 = var6 + var7;
                                                                var6 = var6 + var8;
                                                                var11 = var6 + var9;
                                                                var6 = '-';
                                                                var6 = var11 + var6;
                                                                var10 = var6 + var10;
                                                                var6 = ' <';
                                                                var6 = var10 + var6;
                                                                var6 = var6 + var2;
                                                                var6 = var6 + var8;
                                                                var6 = var6 + var7;
                                                                var9 = var9 - 0;
                                                                var8 = var6 + var8;
                                                                var6 = 1;
                                                                var6 = var9 + var6;
                                                                var5 = var8 + var6;
                                                            case 638:
                                                                var4 = var5;
                                                            case 641:
                                                                var0 = var4;
                                                                _fun32575_ip = 830;
                                                                continue _fun32575;
                                                            case 649:
                                                                var4 = '0';
                                                                if (!(var4 !== var2)) {
                                                                    _fun32575_ip = 717;
                                                                    continue _fun32575
                                                                }
                                                            case 659:
                                                                var4 = '>=';
                                                                var5 = var4 + var2;
                                                                var4 = '.';
                                                                var4 = var5 + var4;
                                                                var5 = var4 + var7;
                                                                var6 = var2 - 0;
                                                                var4 = '.0 <';
                                                                var5 = var5 + var4;
                                                                var4 = 1;
                                                                var4 = var6 + var4;
                                                                var5 = var5 + var4;
                                                                var4 = '.0.0';
                                                                var4 = var5 + var4;
                                                                _fun32575_ip = 781;
                                                                continue _fun32575;
                                                            case 717:
                                                                var5 = '>=';
                                                                var5 = var5 + var2;
                                                                var6 = '.';
                                                                var5 = var5 + var6;
                                                                var8 = var5 + var7;
                                                                var5 = '.0 <';
                                                                var5 = var8 + var5;
                                                                var5 = var5 + var2;
                                                                var7 = var7 - 0;
                                                                var6 = var5 + var6;
                                                                var5 = 1;
                                                                var5 = var7 + var5;
                                                                var6 = var6 + var5;
                                                                var5 = '.0';
                                                                var4 = var6 + var5;
                                                            case 781:
                                                                var0 = var4;
                                                                _fun32575_ip = 830;
                                                                continue _fun32575;
                                                            case 786:
                                                                var4 = '>=';
                                                                var4 = var4 + var2;
                                                                var5 = var2 - 0;
                                                                var2 = '.0.0 <';
                                                                var4 = var4 + var2;
                                                                var2 = 1;
                                                                var2 = var5 + var2;
                                                                var4 = var4 + var2;
                                                                var2 = '.0.0';
                                                                var0 = var4 + var2;
                                                            case 830:
                                                                var2 = _closure1_slot1;
                                                                var1 = 'caret return';
                                                                var1 = var2.bind(var3)(var1, var0);
                                                                return var0;
                                                        }
                                                    };
                                                    var0 = var1.bind(var3)(var2, var0);
                                                    return var0;
                                            }
                                        };
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var2.bind(var1)(var0, var3);
                                        return var0;
                                    };
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.join;
                                    var0 = ' ';
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var4 = var2.bind(var3)(var4, var5);
                                var6 = _closure1_slot1;
                                var2 = 'caret';
                                var2 = var6.bind(var3)(var2, var4);
                                var2 = function(arg0, arg1) { // Original name: replaceTildes, environment: var0
                                    var2 = arg0;
                                    var1 = arg1;
                                    var _closure5_slot0 = var1;
                                    var1 = var2.trim;
                                    var3 = var1.bind(var2)();
                                    var2 = var3.split;
                                    var1 = /\s+/;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.map;
                                    var0 = function(arg0) { // Environment: var0
                                        var3 = _closure5_slot0;
                                        var2 = function(arg0, arg1) { // Original name: replaceTilde, environment: var0
                                            _fun32578: for (var _fun32578_ip = 0;;) switch (_fun32578_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var _closure7_slot0 = var3;
                                                    var1 = arg1;
                                                    var2 = var1.loose;
                                                    var4 = _closure1_slot4;
                                                    var1 = _closure1_slot5;
                                                    if (var2) {
                                                        _fun32578_ip = 44;
                                                        continue _fun32578
                                                    }
                                                case 32:
                                                    var2 = var1.TILDE;
                                                    var2 = var4[var2];
                                                    _fun32578_ip = 54;
                                                    continue _fun32578;
                                                case 44:
                                                    var1 = var1.TILDELOOSE;
                                                    var2 = var4[var1];
                                                case 54:
                                                    var1 = var3.replace;
                                                    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
                                                        _fun32579: for (var _fun32579_ip = 0;;) switch (_fun32579_ip) {
                                                            case 0:
                                                                var2 = arg1;
                                                                var6 = arg2;
                                                                var8 = arg3;
                                                                var7 = arg4;
                                                                var9 = _closure1_slot1;
                                                                var15 = _closure7_slot0;
                                                                var3 = undefined;
                                                                var16 = 'tilde';
                                                                var14 = arg0;
                                                                var17 = undefined;
                                                                var13 = var2;
                                                                var12 = var6;
                                                                var11 = var8;
                                                                var10 = var7;
                                                                var0 = var17[var9](var16, var15, var14, var13, var12, var11, var10, var9);
                                                                var0 = _closure1_slot23;
                                                                var4 = var0.bind(var3)(var2);
                                                                var0 = '';
                                                                if (var4) {
                                                                    _fun32579_ip = 396;
                                                                    continue _fun32579
                                                                }
                                                            case 74:
                                                                var4 = _closure1_slot23;
                                                                var4 = var4.bind(var3)(var6);
                                                                if (var4) {
                                                                    _fun32579_ip = 352;
                                                                    continue _fun32579
                                                                }
                                                            case 89:
                                                                var4 = _closure1_slot23;
                                                                var4 = var4.bind(var3)(var8);
                                                                if (var4) {
                                                                    _fun32579_ip = 286;
                                                                    continue _fun32579
                                                                }
                                                            case 104:
                                                                if (var7) {
                                                                    _fun32579_ip = 184;
                                                                    continue _fun32579
                                                                }
                                                            case 107:
                                                                var4 = '>=';
                                                                var4 = var4 + var2;
                                                                var5 = '.';
                                                                var4 = var4 + var5;
                                                                var4 = var4 + var6;
                                                                var4 = var4 + var5;
                                                                var9 = var4 + var8;
                                                                var4 = ' <';
                                                                var4 = var9 + var4;
                                                                var4 = var4 + var2;
                                                                var9 = var6 - 0;
                                                                var5 = var4 + var5;
                                                                var4 = 1;
                                                                var4 = var9 + var4;
                                                                var5 = var5 + var4;
                                                                var4 = '.0';
                                                                var0 = var5 + var4;
                                                                _fun32579_ip = 396;
                                                                continue _fun32579;
                                                            case 184:
                                                                var5 = _closure1_slot1;
                                                                var4 = 'replaceTilde pr';
                                                                var4 = var5.bind(var3)(var4, var7);
                                                                var4 = '>=';
                                                                var4 = var4 + var2;
                                                                var5 = '.';
                                                                var4 = var4 + var5;
                                                                var4 = var4 + var6;
                                                                var4 = var4 + var5;
                                                                var8 = var4 + var8;
                                                                var4 = '-';
                                                                var4 = var8 + var4;
                                                                var7 = var4 + var7;
                                                                var4 = ' <';
                                                                var4 = var7 + var4;
                                                                var4 = var4 + var2;
                                                                var7 = var6 - 0;
                                                                var5 = var4 + var5;
                                                                var4 = 1;
                                                                var4 = var7 + var4;
                                                                var5 = var5 + var4;
                                                                var4 = '.0';
                                                                var0 = var5 + var4;
                                                                _fun32579_ip = 396;
                                                                continue _fun32579;
                                                            case 286:
                                                                var4 = '>=';
                                                                var4 = var4 + var2;
                                                                var5 = '.';
                                                                var4 = var4 + var5;
                                                                var7 = var4 + var6;
                                                                var4 = '.0 <';
                                                                var4 = var7 + var4;
                                                                var4 = var4 + var2;
                                                                var6 = var6 - 0;
                                                                var5 = var4 + var5;
                                                                var4 = 1;
                                                                var4 = var6 + var4;
                                                                var5 = var5 + var4;
                                                                var4 = '.0';
                                                                var0 = var5 + var4;
                                                                _fun32579_ip = 396;
                                                                continue _fun32579;
                                                            case 352:
                                                                var4 = '>=';
                                                                var4 = var4 + var2;
                                                                var5 = var2 - 0;
                                                                var2 = '.0.0 <';
                                                                var4 = var4 + var2;
                                                                var2 = 1;
                                                                var2 = var5 + var2;
                                                                var4 = var4 + var2;
                                                                var2 = '.0.0';
                                                                var0 = var4 + var2;
                                                            case 396:
                                                                var2 = _closure1_slot1;
                                                                var1 = 'tilde return';
                                                                var1 = var2.bind(var3)(var1, var0);
                                                                return var0;
                                                        }
                                                    };
                                                    var0 = var1.bind(var3)(var2, var0);
                                                    return var0;
                                            }
                                        };
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var2.bind(var1)(var0, var3);
                                        return var0;
                                    };
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.join;
                                    var0 = ' ';
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var2 = var2.bind(var3)(var4, var5);
                                var6 = _closure1_slot1;
                                var4 = 'tildes';
                                var4 = var6.bind(var3)(var4, var2);
                                var0 = function(arg0, arg1) { // Original name: replaceXRanges, environment: var0
                                    var3 = arg0;
                                    var5 = arg1;
                                    var _closure5_slot0 = var5;
                                    var4 = _closure1_slot1;
                                    var2 = undefined;
                                    var1 = 'replaceXRanges';
                                    var1 = var4.bind(var2)(var1, var3, var5);
                                    var2 = var3.split;
                                    var1 = /\s+/;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.map;
                                    var0 = function(arg0) { // Environment: var0
                                        var3 = _closure5_slot0;
                                        var2 = function(arg0, arg1) { // Original name: replaceXRange, environment: var0
                                            _fun32582: for (var _fun32582_ip = 0;;) switch (_fun32582_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var1 = arg1;
                                                    var _closure7_slot1 = var1;
                                                    var2 = var3.trim;
                                                    var3 = var2.bind(var3)();
                                                    var _closure7_slot0 = var3;
                                                    var2 = var1.loose;
                                                    var4 = _closure1_slot4;
                                                    var1 = _closure1_slot5;
                                                    if (var2) {
                                                        _fun32582_ip = 58;
                                                        continue _fun32582
                                                    }
                                                case 46:
                                                    var2 = var1.XRANGE;
                                                    var2 = var4[var2];
                                                    _fun32582_ip = 68;
                                                    continue _fun32582;
                                                case 58:
                                                    var1 = var1.XRANGELOOSE;
                                                    var2 = var4[var1];
                                                case 68:
                                                    var1 = var3.replace;
                                                    var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                                                        _fun32583: for (var _fun32583_ip = 0;;) switch (_fun32583_ip) {
                                                            case 0:
                                                                var0 = arg0;
                                                                var5 = arg1;
                                                                var8 = arg2;
                                                                var2 = arg3;
                                                                var11 = arg4;
                                                                var10 = _closure1_slot1;
                                                                var21 = _closure7_slot0;
                                                                var3 = undefined;
                                                                var22 = 'xRange';
                                                                var15 = arg5;
                                                                var23 = undefined;
                                                                var20 = var0;
                                                                var19 = var5;
                                                                var18 = var8;
                                                                var17 = var2;
                                                                var16 = var11;
                                                                var6 = var23[var10](var22, var21, var20, var19, var18, var17, var16, var15, var14);
                                                                var6 = _closure1_slot23;
                                                                var7 = var6.bind(var3)(var8);
                                                                var10 = var7;
                                                                if (var10) {
                                                                    _fun32583_ip = 83;
                                                                    continue _fun32583
                                                                }
                                                            case 74:
                                                                var6 = _closure1_slot23;
                                                                var10 = var6.bind(var3)(var2);
                                                            case 83:
                                                                var6 = var10;
                                                                if (var6) {
                                                                    _fun32583_ip = 98;
                                                                    continue _fun32583
                                                                }
                                                            case 89:
                                                                var9 = _closure1_slot23;
                                                                var6 = var9.bind(var3)(var11);
                                                            case 98:
                                                                var9 = '=';
                                                                var9 = var9 === var5;
                                                                if (!var9) {
                                                                    _fun32583_ip = 112;
                                                                    continue _fun32583
                                                                }
                                                            case 109:
                                                                var9 = var6;
                                                            case 112:
                                                                if (!var9) {
                                                                    _fun32583_ip = 119;
                                                                    continue _fun32583
                                                                }
                                                            case 115:
                                                                var5 = '';
                                                            case 119:
                                                                var4 = _closure7_slot1;
                                                                var9 = var4.includePrerelease;
                                                                var4 = '';
                                                                if (!var9) {
                                                                    _fun32583_ip = 142;
                                                                    continue _fun32583
                                                                }
                                                            case 136:
                                                                var4 = '-0';
                                                            case 142:
                                                                if (var7) {
                                                                    _fun32583_ip = 460;
                                                                    continue _fun32583
                                                                }
                                                            case 148:
                                                                if (!var5) {
                                                                    _fun32583_ip = 157;
                                                                    continue _fun32583
                                                                }
                                                            case 151:
                                                                if (var6) {
                                                                    _fun32583_ip = 308;
                                                                    continue _fun32583
                                                                }
                                                            case 157:
                                                                if (var10) {
                                                                    _fun32583_ip = 247;
                                                                    continue _fun32583
                                                                }
                                                            case 160:
                                                                if (!var6) {
                                                                    _fun32583_ip = 489;
                                                                    continue _fun32583
                                                                }
                                                            case 166:
                                                                var6 = '>=';
                                                                var6 = var6 + var8;
                                                                var9 = '.';
                                                                var6 = var6 + var9;
                                                                var6 = var6 + var2;
                                                                var7 = '.0';
                                                                var6 = var6 + var7;
                                                                var11 = var6 + var4;
                                                                var6 = ' <';
                                                                var6 = var11 + var6;
                                                                var6 = var6 + var8;
                                                                var11 = var2 - 0;
                                                                var9 = var6 + var9;
                                                                var6 = 1;
                                                                var6 = var11 + var6;
                                                                var6 = var9 + var6;
                                                                var6 = var6 + var7;
                                                                var0 = var6 + var4;
                                                                _fun32583_ip = 489;
                                                                continue _fun32583;
                                                            case 247:
                                                                var6 = '>=';
                                                                var6 = var6 + var8;
                                                                var11 = var8 - 0;
                                                                var7 = '.0.0';
                                                                var6 = var6 + var7;
                                                                var9 = var6 + var4;
                                                                var6 = ' <';
                                                                var9 = var9 + var6;
                                                                var6 = 1;
                                                                var6 = var11 + var6;
                                                                var6 = var9 + var6;
                                                                var6 = var6 + var7;
                                                                var0 = var6 + var4;
                                                                _fun32583_ip = 489;
                                                                continue _fun32583;
                                                            case 308:
                                                                var9 = var2;
                                                                if (!var10) {
                                                                    _fun32583_ip = 316;
                                                                    continue _fun32583
                                                                }
                                                            case 314:
                                                                var9 = 0;
                                                            case 316:
                                                                var2 = '>';
                                                                if (!(var2 !== var5)) {
                                                                    _fun32583_ip = 386;
                                                                    continue _fun32583
                                                                }
                                                            case 324:
                                                                var11 = '<=';
                                                                var6 = var8;
                                                                var7 = var9;
                                                                var2 = var5;
                                                                if (!(var11 === var2)) {
                                                                    _fun32583_ip = 428;
                                                                    continue _fun32583
                                                                }
                                                            case 343:
                                                                if (var10) {
                                                                    _fun32583_ip = 361;
                                                                    continue _fun32583
                                                                }
                                                            case 346:
                                                                var12 = var9 - 0;
                                                                var11 = 1;
                                                                var11 = var12 + var11;
                                                                var12 = var8;
                                                                _fun32583_ip = 374;
                                                                continue _fun32583;
                                                            case 361:
                                                                var14 = var8 - 0;
                                                                var13 = 1;
                                                                var12 = var14 + var13;
                                                                var11 = var9;
                                                            case 374:
                                                                var2 = '<';
                                                                var6 = var12;
                                                                var7 = var11;
                                                                _fun32583_ip = 428;
                                                                continue _fun32583;
                                                            case 386:
                                                                if (var10) {
                                                                    _fun32583_ip = 410;
                                                                    continue _fun32583
                                                                }
                                                            case 389:
                                                                var10 = var9 - 0;
                                                                var9 = 1;
                                                                var7 = var10 + var9;
                                                                var2 = '>=';
                                                                var6 = var8;
                                                                _fun32583_ip = 428;
                                                                continue _fun32583;
                                                            case 410:
                                                                var9 = var8 - 0;
                                                                var8 = 1;
                                                                var6 = var9 + var8;
                                                                var2 = '>=';
                                                                var7 = 0;
                                                            case 428:
                                                                var2 = var2 + var6;
                                                                var6 = '.';
                                                                var2 = var2 + var6;
                                                                var2 = var2 + var7;
                                                                var6 = var2 + var6;
                                                                var2 = 0;
                                                                var2 = var6 + var2;
                                                                var0 = var2 + var4;
                                                                _fun32583_ip = 489;
                                                                continue _fun32583;
                                                            case 460:
                                                                var2 = '>';
                                                                if (!(var2 !== var5)) {
                                                                    _fun32583_ip = 480;
                                                                    continue _fun32583
                                                                }
                                                            case 468:
                                                                var2 = '*';
                                                                var4 = '<';
                                                                if (!(var4 === var5)) {
                                                                    _fun32583_ip = 486;
                                                                    continue _fun32583
                                                                }
                                                            case 480:
                                                                var2 = '<0.0.0-0';
                                                            case 486:
                                                                var0 = var2;
                                                            case 489:
                                                                var2 = _closure1_slot1;
                                                                var1 = 'xRange return';
                                                                var1 = var2.bind(var3)(var1, var0);
                                                                return var0;
                                                        }
                                                    };
                                                    var0 = var1.bind(var3)(var2, var0);
                                                    return var0;
                                            }
                                        };
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var2.bind(var1)(var0, var3);
                                        return var0;
                                    };
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.join;
                                    var0 = ' ';
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var2 = var0.bind(var3)(var2, var5);
                                var4 = _closure1_slot1;
                                var0 = 'xrange';
                                var0 = var4.bind(var3)(var0, var2);
                                var4 = _closure1_slot1;
                                var0 = 'replaceStars';
                                var0 = var4.bind(var3)(var0, var2, var5);
                                var0 = var2.trim;
                                var5 = var0.bind(var2)();
                                var4 = var5.replace;
                                var2 = _closure1_slot4;
                                var0 = _closure1_slot5;
                                var0 = var0.STAR;
                                var2 = var2[var0];
                                var0 = '';
                                var0 = var4.bind(var5)(var2, var0);
                                var2 = _closure1_slot1;
                                var1 = 'stars';
                                var1 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0, var3);
                            return var0;
                        };
                        var2 = var2.bind(var5)(var1, var3);
                        var1 = var2.join;
                        var4 = var1.bind(var2)(var4);
                        var2 = var4.split;
                        var1 = /\s+/;
                        var5 = var2.bind(var4)(var1);
                        var1 = var3.options;
                        var1 = var1.loose;
                        var2 = var5;
                        if (!var1) {
                            _fun32569_ip = 406;
                            continue _fun32569
                        }
                    case 391:
                        var4 = var5.filter;
                        var1 = function(arg0) { // Environment: var0
                            var2 = arg0;
                            var1 = var2.match;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var1);
                    case 406:
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var3 = _closure1_slot20;
                            var0 = this;
                            var4 = var0.options;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var5 = arg0;
                            var6 = var1;
                            var0 = new var6[var3](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0, var3);
                        return var0;
                }
            };
            var7.parseRange = var6;
            var7 = var5.prototype;
            var6 = function(arg0, arg1) { // Environment: var1
                _fun32586: for (var _fun32586_ip = 0;;) switch (_fun32586_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var1 = _closure1_slot21;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun32586_ip = 66;
                            continue _fun32586
                        }
                    case 30:
                        var1 = global;
                        var3 = var1.TypeError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = 'a Range is required';
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 66:
                        var1 = this;
                        var2 = var1.set;
                        var1 = var2.some;
                        var0 = function(arg0) { // Environment: var0
                            _fun32587: for (var _fun32587_ip = 0;;) switch (_fun32587_ip) {
                                case 0:
                                    var5 = arg0;
                                    var _closure3_slot0 = var5;
                                    var4 = _closure1_slot22;
                                    var3 = _closure2_slot1;
                                    var0 = undefined;
                                    var0 = var4.bind(var0)(var5, var3);
                                    if (!var0) {
                                        _fun32587_ip = 59;
                                        continue _fun32587
                                    }
                                case 34:
                                    var2 = _closure2_slot0;
                                    var3 = var2.set;
                                    var2 = var3.some;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun32588: for (var _fun32588_ip = 0;;) switch (_fun32588_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var _closure4_slot0 = var4;
                                                var3 = _closure1_slot22;
                                                var2 = _closure2_slot1;
                                                var0 = undefined;
                                                var0 = var3.bind(var0)(var4, var2);
                                                if (!var0) {
                                                    _fun32588_ip = 57;
                                                    continue _fun32588
                                                }
                                            case 34:
                                                var3 = _closure3_slot0;
                                                var2 = var3.every;
                                                var1 = function(arg0) { // Environment: var1
                                                    var1 = arg0;
                                                    var _closure5_slot0 = var1;
                                                    var2 = _closure4_slot0;
                                                    var1 = var2.every;
                                                    var0 = function(arg0) { // Environment: var0
                                                        var3 = _closure5_slot0;
                                                        var2 = var3.intersects;
                                                        var1 = _closure2_slot1;
                                                        var0 = arg0;
                                                        var0 = var2.bind(var3)(var0, var1);
                                                        return var0;
                                                    };
                                                    var0 = var1.bind(var2)(var0);
                                                    return var0;
                                                };
                                                var0 = var2.bind(var3)(var1);
                                            case 57:
                                                return var0;
                                        }
                                    };
                                    var0 = var2.bind(var3)(var1);
                                case 59:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var7.intersects = var6;
            var6 = function(arg0, arg1) { // Original name: toComparators, environment: var1
                var3 = _closure1_slot21;
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
                var2 = var0.set;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.value;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.join;
                    var2 = ' ';
                    var1 = var0.bind(var1)(var2);
                    var0 = var1.trim;
                    var1 = var0.bind(var1)();
                    var0 = var1.split;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.toComparators = var6;
            var6 = var5.prototype;
            var5 = function(arg0) { // Environment: var1
                _fun32594: for (var _fun32594_ip = 0;;) switch (_fun32594_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = this;
                        var4 = var0;
                        if (var0) {
                            _fun32594_ip = 15;
                            continue _fun32594
                        }
                    case 11:
                        var0 = false;
                        return var0;
                    case 15:
                        var0 = var4;
                        var1 = 'string';
                        var0 = typeof var0;
                        if (!(var1 === var0)) {
                            _fun32594_ip = 64;
                            continue _fun32594
                        }
                    case 29: // try_start_0
                        var3 = _closure1_slot10;
                        var11 = var4;
                        var10 = var5.options;
                        var1 = var3.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = var1;
                        var0 = new var12[var3](var11, var10, var9);
                        var4 = var0 instanceof Object ? var0 : var1;
                    case 64: // try_end0
                        var0 = var5.set;
                        var0 = var0.length;
                        var3 = 0;
                        var0 = var3 < var0;
                        var1 = undefined;
                        if (!var0) {
                            _fun32594_ip = 136;
                            continue _fun32594
                        }
                    case 88:
                        var8 = _closure1_slot25;
                        var0 = var5.set;
                        var7 = var0[var3];
                        var6 = var4;
                        var0 = var5.options;
                        var0 = var8.bind(var1)(var7, var6, var0);
                        if (var0) {
                            _fun32594_ip = 140;
                            continue _fun32594
                        }
                    case 119:
                        var3 = var3 + 1;
                        var0 = var5.set;
                        var0 = var0.length;
                        if (var3 < var0) {
                            _fun32594_ip = 88;
                            continue _fun32594
                        }
                    case 136:
                        var0 = false;
                        return var0;
                    case 140:
                        var0 = true;
                        return var0;
                    case 144: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                }
            };
            var6.test = var5;
            var2.satisfies = var4;
            var4 = function(arg0, arg1, arg2) { // Original name: maxSatisfying, environment: var1
                _fun32595: for (var _fun32595_ip = 0;;) switch (_fun32595_ip) {
                    case 0:
                        var0 = arg2;
                        var2 = arg0;
                        var4 = arg1;
                        var3 = var0;
                        var _closure2_slot0 = var0;
                        var0 = null;
                        var _closure2_slot1 = var0;
                        var _closure2_slot2 = var0;
                    case 28: // try_start_0
                        var6 = _closure1_slot21;
                        var8 = var4;
                        var7 = var3;
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var9 = var4;
                        var3 = new var9[var6](var8, var7, var6);
                        var3 = var3 instanceof Object ? var3 : var4;
                        var _closure2_slot3 = var3;
                    case 65: // try_end0
                        var4 = var2;
                        var3 = var4.forEach;
                        var2 = function(arg0) { // Environment: var1
                            _fun32596: for (var _fun32596_ip = 0;;) switch (_fun32596_ip) {
                                case 0:
                                    var4 = arg0;
                                    var2 = _closure2_slot3;
                                    var0 = var2.test;
                                    var0 = var0.bind(var2)(var4);
                                    if (!var0) {
                                        _fun32596_ip = 100;
                                        continue _fun32596
                                    }
                                case 23:
                                    var0 = _closure2_slot1;
                                    if (!var0) {
                                        _fun32596_ip = 55;
                                        continue _fun32596
                                    }
                                case 30:
                                    var3 = _closure2_slot2;
                                    var2 = var3.compare;
                                    var3 = var2.bind(var3)(var4);
                                    var2 = -1;
                                    var0 = var2 !== var3;
                                case 55:
                                    if (var0) {
                                        _fun32596_ip = 100;
                                        continue _fun32596
                                    }
                                case 58:
                                    var3 = _closure1_slot10;
                                    _closure2_slot1 = var4;
                                    var5 = _closure2_slot0;
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var7 = var2;
                                    var6 = var4;
                                    var0 = new var7[var3](var6, var5, var4);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    _closure2_slot2 = var0;
                                case 100:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var1 = _closure2_slot1;
                        return var1;
                    case 89: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        return var0;
                }
            };
            var2.maxSatisfying = var4;
            var4 = function(arg0, arg1, arg2) { // Original name: minSatisfying, environment: var1
                _fun32597: for (var _fun32597_ip = 0;;) switch (_fun32597_ip) {
                    case 0:
                        var0 = arg2;
                        var2 = arg0;
                        var4 = arg1;
                        var3 = var0;
                        var _closure2_slot0 = var0;
                        var0 = null;
                        var _closure2_slot1 = var0;
                        var _closure2_slot2 = var0;
                    case 28: // try_start_0
                        var6 = _closure1_slot21;
                        var8 = var4;
                        var7 = var3;
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var9 = var4;
                        var3 = new var9[var6](var8, var7, var6);
                        var3 = var3 instanceof Object ? var3 : var4;
                        var _closure2_slot3 = var3;
                    case 65: // try_end0
                        var4 = var2;
                        var3 = var4.forEach;
                        var2 = function(arg0) { // Environment: var1
                            _fun32598: for (var _fun32598_ip = 0;;) switch (_fun32598_ip) {
                                case 0:
                                    var4 = arg0;
                                    var2 = _closure2_slot3;
                                    var0 = var2.test;
                                    var0 = var0.bind(var2)(var4);
                                    if (!var0) {
                                        _fun32598_ip = 97;
                                        continue _fun32598
                                    }
                                case 23:
                                    var0 = _closure2_slot1;
                                    if (!var0) {
                                        _fun32598_ip = 52;
                                        continue _fun32598
                                    }
                                case 30:
                                    var3 = _closure2_slot2;
                                    var2 = var3.compare;
                                    var3 = var2.bind(var3)(var4);
                                    var2 = 1;
                                    var0 = var2 !== var3;
                                case 52:
                                    if (var0) {
                                        _fun32598_ip = 97;
                                        continue _fun32598
                                    }
                                case 55:
                                    var3 = _closure1_slot10;
                                    _closure2_slot1 = var4;
                                    var5 = _closure2_slot0;
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var7 = var2;
                                    var6 = var4;
                                    var0 = new var7[var3](var6, var5, var4);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    _closure2_slot2 = var0;
                                case 97:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var1 = _closure2_slot1;
                        return var1;
                    case 89: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        return var0;
                }
            };
            var2.minSatisfying = var4;
            var4 = function(arg0, arg1) { // Original name: minVersion, environment: var1
                _fun32599: for (var _fun32599_ip = 0;;) switch (_fun32599_ip) {
                    case 0:
                        var5 = _closure1_slot21;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var8 = arg0;
                        var7 = arg1;
                        var9 = var3;
                        var2 = new var9[var5](var8, var7, var6);
                        var4 = var2 instanceof Object ? var2 : var3;
                        var5 = _closure1_slot10;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var8 = '0.0.0';
                        var9 = var3;
                        var2 = new var9[var5](var8, var7);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var _closure2_slot0 = var3;
                        var2 = var4.test;
                        var2 = var2.bind(var4)(var3);
                        if (var2) {
                            _fun32599_ip = 240;
                            continue _fun32599
                        }
                    case 85:
                        var3 = _closure1_slot10;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var8 = '0.0.0-0';
                        var9 = var2;
                        var1 = new var9[var3](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var2;
                        _closure2_slot0 = var1;
                        var2 = var4.test;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var4)(var1);
                        if (var1) {
                            _fun32599_ip = 234;
                            continue _fun32599
                        }
                    case 136:
                        var1 = null;
                        _closure2_slot0 = var1;
                        var2 = var4.set;
                        var2 = var2.length;
                        var3 = 0;
                        var2 = var3 < var2;
                        if (!var2) {
                            _fun32599_ip = 202;
                            continue _fun32599
                        }
                    case 161:
                        var2 = var4.set;
                        var6 = var2[var3];
                        var5 = var6.forEach;
                        var2 = function(arg0) { // Environment: var0
                            _fun32600: for (var _fun32600_ip = 0;;) switch (_fun32600_ip) {
                                case 0:
                                    var0 = arg0;
                                    var4 = _closure1_slot10;
                                    var1 = var0.semver;
                                    var7 = var1.version;
                                    var2 = var4.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var8 = var2;
                                    var1 = new var8[var4](var7, var6);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    var4 = var0.operator;
                                    var2 = '>';
                                    if (!(var2 !== var4)) {
                                        _fun32600_ip = 150;
                                        continue _fun32600
                                    }
                                case 56:
                                    var2 = '';
                                    if (!(var2 !== var4)) {
                                        _fun32600_ip = 215;
                                        continue _fun32600
                                    }
                                case 67:
                                    var2 = '>=';
                                    if (!(var2 !== var4)) {
                                        _fun32600_ip = 215;
                                        continue _fun32600
                                    }
                                case 80:
                                    var2 = '<';
                                    if (!(var2 !== var4)) {
                                        _fun32600_ip = 251;
                                        continue _fun32600
                                    }
                                case 91:
                                    var2 = '<=';
                                    if (!(var2 !== var4)) {
                                        _fun32600_ip = 251;
                                        continue _fun32600
                                    }
                                case 104:
                                    var2 = global;
                                    var4 = var2.Error;
                                    var2 = var0.operator;
                                    var0 = 'Unexpected operation: ';
                                    var7 = var0 + var2;
                                    var2 = var4.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var8 = var2;
                                    var0 = new var8[var4](var7, var6);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    throw var0;
                                case 150:
                                    var0 = var1.prerelease;
                                    var0 = var0.length;
                                    var4 = 0;
                                    if (!(var4 !== var0)) {
                                        _fun32600_ip = 185;
                                        continue _fun32600
                                    }
                                case 167:
                                    var2 = var1.prerelease;
                                    var0 = var2.push;
                                    var0 = var0.bind(var2)(var4);
                                    _fun32600_ip = 200;
                                    continue _fun32600;
                                case 185:
                                    var0 = var1.patch;
                                    var0 = var0 + 1;
                                    var1.patch = var0;
                                case 200:
                                    var0 = var1.format;
                                    var0 = var0.bind(var1)();
                                    var1.raw = var0;
                                case 215:
                                    var2 = _closure2_slot0;
                                    if (!var2) {
                                        _fun32600_ip = 244;
                                        continue _fun32600
                                    }
                                case 225:
                                    var5 = _closure1_slot13;
                                    var4 = _closure2_slot0;
                                    var3 = undefined;
                                    var3 = var5.bind(var3)(var4, var1);
                                    var2 = !var3;
                                case 244:
                                    if (var2) {
                                        _fun32600_ip = 251;
                                        continue _fun32600
                                    }
                                case 247:
                                    _closure2_slot0 = var1;
                                case 251:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var2 = var5.bind(var6)(var2);
                        var3 = var3 + 1;
                        var2 = var4.set;
                        var2 = var2.length;
                        if (var3 < var2) {
                            _fun32599_ip = 161;
                            continue _fun32599
                        }
                    case 202:
                        var2 = _closure2_slot0;
                        if (!var2) {
                            _fun32599_ip = 226;
                            continue _fun32599
                        }
                    case 209:
                        var3 = var4.test;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        if (var2) {
                            _fun32599_ip = 228;
                            continue _fun32599
                        }
                    case 226:
                        return var1;
                    case 228:
                        var1 = _closure2_slot0;
                        return var1;
                    case 234:
                        var1 = _closure2_slot0;
                        return var1;
                    case 240:
                        var0 = _closure2_slot0;
                        return var0;
                }
            };
            var2.minVersion = var4;
            var4 = function(arg0, arg1) { // Original name: validRange, environment: var1
                _fun32601: for (var _fun32601_ip = 0;;) switch (_fun32601_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = arg1;
                    case 6: // try_start_0
                        var4 = _closure1_slot21;
                        var6 = var2;
                        var5 = var1;
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = var2;
                        var1 = new var7[var4](var6, var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var1 = var1.range;
                        var0 = var1;
                        if (var1) {
                            _fun32601_ip = 55;
                            continue _fun32601
                        }
                    case 51:
                        var0 = '*';
                    case 55: // try_end0
                        return var0;
                    case 57: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = null;
                        return var0;
                }
            };
            var2.validRange = var4;
            var4 = function(arg0, arg1, arg2) { // Original name: ltr, environment: var1
                var5 = _closure1_slot27;
                var10 = undefined;
                var9 = arg0;
                var8 = arg1;
                var7 = '<';
                var6 = arg2;
                var0 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
            };
            var2.ltr = var4;
            var4 = function(arg0, arg1, arg2) { // Original name: gtr, environment: var1
                var5 = _closure1_slot27;
                var10 = undefined;
                var9 = arg0;
                var8 = arg1;
                var7 = '>';
                var6 = arg2;
                var0 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
            };
            var2.gtr = var4;
            var2.outside = var3;
            var3 = function(arg0, arg1) { // Original name: prerelease, environment: var1
                _fun32604: for (var _fun32604_ip = 0;;) switch (_fun32604_ip) {
                    case 0:
                        var3 = _closure1_slot9;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var1 = var3.bind(var2)(var1, var0);
                        var0 = null;
                        if (!var1) {
                            _fun32604_ip = 48;
                            continue _fun32604
                        }
                    case 26:
                        var2 = var1.prerelease;
                        var2 = var2.length;
                        var0 = null;
                        if (!var2) {
                            _fun32604_ip = 48;
                            continue _fun32604
                        }
                    case 42:
                        var0 = var1.prerelease;
                    case 48:
                        return var0;
                }
            };
            var2.prerelease = var3;
            var3 = function(arg0, arg1, arg2) { // Original name: intersects, environment: var1
                var4 = arg2;
                var3 = _closure1_slot21;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = arg0;
                var7 = var1;
                var5 = var4;
                var0 = new var7[var3](var6, var5, var4);
                var2 = var0 instanceof Object ? var0 : var1;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = arg1;
                var7 = var1;
                var5 = var4;
                var0 = new var7[var3](var6, var5, var4);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var2.intersects;
                var0 = var0.bind(var2)(var1);
                return var0;
            };
            var2.intersects = var3;
            var1 = function(arg0, arg1) { // Original name: coerce, environment: var1
                _fun32606: for (var _fun32606_ip = 0;;) switch (_fun32606_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = arg1;
                        var1 = _closure1_slot10;
                        var1 = var0 instanceof var1;
                        if (var1) {
                            _fun32606_ip = 475;
                            continue _fun32606
                        }
                    case 23:
                        var3 = 'number';
                        var1 = typeof var0;
                        var12 = var0;
                        if (!(var3 === var1)) {
                            _fun32606_ip = 52;
                            continue _fun32606
                        }
                    case 37:
                        var1 = global;
                        var3 = var1.String;
                        var1 = undefined;
                        var12 = var3.bind(var1)(var0);
                    case 52:
                        var3 = 'string';
                        var1 = typeof var12;
                        if (!(var3 === var1)) {
                            _fun32606_ip = 471;
                            continue _fun32606
                        }
                    case 66:
                        if (var5) {
                            _fun32606_ip = 71;
                            continue _fun32606
                        }
                    case 69:
                        var5 = {};
                    case 71:
                        var1 = var5.rtl;
                        if (var1) {
                            _fun32606_ip = 114;
                            continue _fun32606
                        }
                    case 80:
                        var3 = var12.match;
                        var4 = _closure1_slot4;
                        var1 = _closure1_slot5;
                        var1 = var1.COERCE;
                        var1 = var4[var1];
                        var7 = var3.bind(var12)(var1);
                        _fun32606_ip = 390;
                        continue _fun32606;
                    case 114:
                        var3 = _closure1_slot4;
                        var1 = _closure1_slot5;
                        var1 = var1.COERCERTL;
                        var3 = var3[var1];
                        var1 = var3.exec;
                        var6 = var1.bind(var3)(var12);
                        var8 = null;
                        var11 = 0;
                        var10 = 1;
                        var9 = 2;
                        var1 = null;
                        if (!var6) {
                            _fun32606_ip = 357;
                            continue _fun32606
                        }
                    case 161:
                        var3 = var8;
                        if (!var8) {
                            _fun32606_ip = 207;
                            continue _fun32606
                        }
                    case 167:
                        var13 = var6.index;
                        var4 = var6[var11];
                        var4 = var4.length;
                        var13 = var13 + var4;
                        var14 = var8.index;
                        var4 = var8[var11];
                        var4 = var4.length;
                        var4 = var14 + var4;
                        var3 = var13 === var4;
                    case 207:
                        if (var3) {
                            _fun32606_ip = 213;
                            continue _fun32606
                        }
                    case 210:
                        var8 = var6;
                    case 213:
                        var4 = _closure1_slot4;
                        var3 = _closure1_slot5;
                        var3 = var3.COERCERTL;
                        var4 = var4[var3];
                        var13 = var6.index;
                        var3 = var6[var10];
                        var3 = var3.length;
                        var13 = var13 + var3;
                        var3 = var6[var9];
                        var3 = var3.length;
                        var3 = var13 + var3;
                        var4.lastIndex = var3;
                        var4 = _closure1_slot4;
                        var3 = _closure1_slot5;
                        var3 = var3.COERCERTL;
                        var4 = var4[var3];
                        var3 = var4.exec;
                        var14 = var3.bind(var4)(var12);
                        var13 = var8;
                        var1 = var13;
                        if (!var14) {
                            _fun32606_ip = 357;
                            continue _fun32606
                        }
                    case 306:
                        var8 = var13;
                        var6 = var14;
                        if (!var13) {
                            _fun32606_ip = 161;
                            continue _fun32606
                        }
                    case 318:
                        var4 = var13.index;
                        var3 = var13[var11];
                        var3 = var3.length;
                        var4 = var4 + var3;
                        var3 = var12.length;
                        var8 = var13;
                        var6 = var14;
                        var1 = var8;
                        if (var4 !== var3) {
                            _fun32606_ip = 161;
                            continue _fun32606
                        }
                    case 357:
                        var4 = _closure1_slot4;
                        var3 = _closure1_slot5;
                        var3 = var3.COERCERTL;
                        var4 = var4[var3];
                        var3 = -1;
                        var4.lastIndex = var3;
                        var7 = var1;
                    case 390:
                        var1 = null;
                        if (!(var1 !== var7)) {
                            _fun32606_ip = 469;
                            continue _fun32606
                        }
                    case 396:
                        var4 = _closure1_slot9;
                        var2 = 2;
                        var2 = var7[var2];
                        var6 = '.';
                        var3 = var2 + var6;
                        var2 = 3;
                        var2 = var7[var2];
                        if (var2) {
                            _fun32606_ip = 431;
                            continue _fun32606
                        }
                    case 425:
                        var2 = '0';
                    case 431:
                        var2 = var3 + var2;
                        var3 = 4;
                        var3 = var7[var3];
                        if (var3) {
                            _fun32606_ip = 451;
                            continue _fun32606
                        }
                    case 445:
                        var3 = '0';
                    case 451:
                        var2 = var2 + var6;
                        var3 = var2 + var3;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3, var5);
                        return var2;
                    case 469:
                        return var1;
                    case 471:
                        var1 = null;
                        return var1;
                    case 475:
                        return var0;
                }
            };
            var2.coerce = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);