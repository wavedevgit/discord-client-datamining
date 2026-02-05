// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun46072: for (var _fun46072_ip = 0;;) switch (_fun46072_ip) {
        case 0:
            var3 = global;
            var1 = function arg0() {
                _fun46073: for (var _fun46073_ip = 0;;) switch (_fun46073_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = typeof var0;
                        var1 = !var0;
                        var0 = !var1;
                        if (var1) {
                            _fun46073_ip = 37;
                            continue _fun46073
                        }
                    case 15:
                        var1 = 'object';
                        var1 = var1 === var3;
                        if (var1) {
                            _fun46073_ip = 34;
                            continue _fun46073
                        }
                    case 26:
                        var2 = 'function';
                        var1 = var2 === var3;
                    case 34:
                        var0 = var1;
                    case 37:
                        return var0;
                }
            };
            var _closure1_slot10 = var1;
            var1 = function arg0() {
                _fun46074: for (var _fun46074_ip = 0;;) switch (_fun46074_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = 'number';
                        var1 = typeof var0;
                        if (!(var2 !== var1)) {
                            _fun46074_ip = 261;
                            continue _fun46074
                        }
                    case 17:
                        var1 = function arg0() {
                            _fun46075: for (var _fun46075_ip = 0;;) switch (_fun46075_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = typeof var4;
                                    var0 = 'symbol';
                                    var0 = var0 === var3;
                                    if (var0) {
                                        _fun46075_ip = 65;
                                        continue _fun46075
                                    }
                                case 17:
                                    var2 = !var4;
                                    var1 = !var2;
                                    if (var2) {
                                        _fun46075_ip = 34;
                                        continue _fun46075
                                    }
                                case 26:
                                    var2 = 'object';
                                    var1 = var2 === var3;
                                case 34:
                                    if (!var1) {
                                        _fun46075_ip = 62;
                                        continue _fun46075
                                    }
                                case 37:
                                    var3 = _closure1_slot6;
                                    var2 = var3.call;
                                    var3 = var2.bind(var3)(var4);
                                    var2 = '[object Symbol]';
                                    var1 = var2 == var3;
                                case 62:
                                    var0 = var1;
                                case 65:
                                    return var0;
                            }
                        };
                        var6 = undefined;
                        var1 = var1.bind(var6)(var0);
                        if (var1) {
                            _fun46074_ip = 251;
                            continue _fun46074
                        }
                    case 37:
                        var1 = _closure1_slot10;
                        var1 = var1.bind(var6)(var0);
                        var2 = var0;
                        if (!var1) {
                            _fun46074_ip = 107;
                            continue _fun46074
                        }
                    case 55:
                        var1 = var0.valueOf;
                        var5 = 'function';
                        var4 = typeof var1;
                        var1 = var0;
                        if (!(var5 === var4)) {
                            _fun46074_ip = 83;
                            continue _fun46074
                        }
                    case 74:
                        var4 = var0.valueOf;
                        var1 = var4.bind(var0)();
                    case 83:
                        var4 = _closure1_slot10;
                        var5 = var4.bind(var6)(var1);
                        var4 = var1;
                        var1 = var4;
                        if (!var5) {
                            _fun46074_ip = 104;
                            continue _fun46074
                        }
                    case 101:
                        var1 = '' + var4;
                    case 104:
                        var2 = var1;
                    case 107:
                        var4 = 'string';
                        var1 = typeof var2;
                        if (!(var4 === var1)) {
                            _fun46074_ip = 237;
                            continue _fun46074
                        }
                    case 118:
                        var5 = var2.replace;
                        var4 = _closure1_slot0;
                        var1 = '';
                        var4 = var5.bind(var2)(var4, var1);
                        var5 = _closure1_slot2;
                        var1 = var5.test;
                        var8 = var1.bind(var5)(var4);
                        if (var8) {
                            _fun46074_ip = 203;
                            continue _fun46074
                        }
                    case 154:
                        var5 = _closure1_slot3;
                        var1 = var5.test;
                        var1 = var1.bind(var5)(var4);
                        if (var1) {
                            _fun46074_ip = 203;
                            continue _fun46074
                        }
                    case 171:
                        var5 = _closure1_slot1;
                        var1 = var5.test;
                        var1 = var1.bind(var5)(var4);
                        if (var1) {
                            _fun46074_ip = 193;
                            continue _fun46074
                        }
                    case 188:
                        var1 = var4 - 0;
                        _fun46074_ip = 201;
                        continue _fun46074;
                    case 193:
                        var5 = global;
                        var1 = var5.NaN;
                    case 201:
                        _fun46074_ip = 235;
                        continue _fun46074;
                    case 203:
                        var5 = _closure1_slot4;
                        var3 = var4.slice;
                        var7 = 2;
                        var4 = var3.bind(var4)(var7);
                        var3 = 8;
                        if (!var8) {
                            _fun46074_ip = 229;
                            continue _fun46074
                        }
                    case 226:
                        var3 = var7;
                    case 229:
                        var1 = var5.bind(var6)(var4, var3);
                    case 235:
                        return var1;
                    case 237:
                        var3 = 0;
                        var1 = var2;
                        if (!(var3 !== var1)) {
                            _fun46074_ip = 249;
                            continue _fun46074
                        }
                    case 246:
                        var1 = var2 - 0;
                    case 249:
                        return var1;
                    case 251:
                        var1 = global;
                        var1 = var1.NaN;
                        return var1;
                    case 261:
                        return var0;
                }
            };
            var _closure1_slot11 = var1;
            var1 = /^\s+|\s+$/g;
            var _closure1_slot0 = var1;
            var1 = /^[-+]0x[0-9a-f]+$/i;
            var _closure1_slot1 = var1;
            var1 = /^0b[01]+$/i;
            var _closure1_slot2 = var1;
            var1 = /^0o[0-7]+$/i;
            var _closure1_slot3 = var1;
            var1 = global;
            var2 = var1.parseInt;
            var _closure1_slot4 = var2;
            var4 = 'object';
            var2 = typeof var3;
            var2 = var4 === var2;
            if (!var2) {
                _fun46072_ip = 124;
                continue _fun46072
            }
        case 121:
            var2 = var3;
        case 124:
            if (!var2) {
                _fun46072_ip = 142;
                continue _fun46072
            }
        case 127:
            var6 = var3.Object;
            var5 = var1.Object;
            var2 = var6 === var5;
        case 142:
            if (!var2) {
                _fun46072_ip = 148;
                continue _fun46072
            }
        case 145:
            var2 = var3;
        case 148:
            var3 = var1.self;
            var3 = typeof var3;
            var3 = var4 === var3;
            if (!var3) {
                _fun46072_ip = 170;
                continue _fun46072
            }
        case 164:
            var3 = var1.self;
        case 170:
            if (!var3) {
                _fun46072_ip = 194;
                continue _fun46072
            }
        case 173:
            var4 = var1.self;
            var5 = var4.Object;
            var4 = var1.Object;
            var3 = var5 === var4;
        case 194:
            if (!var3) {
                _fun46072_ip = 203;
                continue _fun46072
            }
        case 197:
            var3 = var1.self;
        case 203:
            if (var2) {
                _fun46072_ip = 209;
                continue _fun46072
            }
        case 206:
            var2 = var3;
        case 209:
            if (var2) {
                _fun46072_ip = 235;
                continue _fun46072
            }
        case 212:
            var5 = var1.Function;
            var4 = undefined;
            var3 = 'return this';
            var3 = var5.bind(var4)(var3);
            var2 = var3.bind(var4)();
        case 235:
            var _closure1_slot5 = var2;
            var2 = var1.Object;
            var2 = var2.prototype;
            var2 = var2.toString;
            var _closure1_slot6 = var2;
            var2 = var1.Math;
            var2 = var2.max;
            var _closure1_slot7 = var2;
            var1 = var1.Math;
            var1 = var1.min;
            var _closure1_slot8 = var1;
            var1 = function() {
                var0 = _closure1_slot5;
                var1 = var0.Date;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                return var0;
            };
            var _closure1_slot9 = var1;
            var1 = function arg0, arg1, arg2() {
                _fun46077: for (var _fun46077_ip = 0;;) switch (_fun46077_ip) {
                    case 0:
                        var4 = arg0;
                        var6 = arg1;
                        var3 = arg2;
                        var _closure2_slot0 = var4;
                        var _closure2_slot1 = var6;
                        var0 = function arg0() {
                            var4 = _closure2_slot2;
                            var3 = _closure2_slot3;
                            var0 = undefined;
                            var _closure2_slot3 = var0;
                            var _closure2_slot2 = var0;
                            var0 = arg0;
                            _closure2_slot8 = var0;
                            var2 = _closure2_slot0;
                            var0 = var2.apply;
                            var0 = var0.bind(var2)(var3, var4);
                            var _closure2_slot5 = var0;
                            return var0;
                        };
                        var _closure2_slot12 = var0;
                        var0 = function arg0() {
                            _fun46079: for (var _fun46079_ip = 0;;) switch (_fun46079_ip) {
                                case 0:
                                    var4 = arg0;
                                    var0 = _closure2_slot7;
                                    var3 = var4 - var0;
                                    var1 = _closure2_slot7;
                                    var0 = undefined;
                                    var0 = var0 === var1;
                                    if (var0) {
                                        _fun46079_ip = 35;
                                        continue _fun46079
                                    }
                                case 27:
                                    var1 = _closure2_slot1;
                                    var0 = var3 >= var1;
                                case 35:
                                    if (var0) {
                                        _fun46079_ip = 44;
                                        continue _fun46079
                                    }
                                case 38:
                                    var1 = 0;
                                    var0 = var3 < var1;
                                case 44:
                                    if (var0) {
                                        _fun46079_ip = 73;
                                        continue _fun46079
                                    }
                                case 47:
                                    var1 = _closure2_slot10;
                                    if (!var1) {
                                        _fun46079_ip = 70;
                                        continue _fun46079
                                    }
                                case 54:
                                    var3 = _closure2_slot8;
                                    var3 = var4 - var3;
                                    var2 = _closure2_slot4;
                                    var1 = var3 >= var2;
                                case 70:
                                    var0 = var1;
                                case 73:
                                    return var0;
                            }
                        };
                        var _closure2_slot13 = var0;
                        var0 = function() {
                            _fun46080: for (var _fun46080_ip = 0;;) switch (_fun46080_ip) {
                                case 0:
                                    var0 = _closure1_slot9;
                                    var2 = undefined;
                                    var1 = var0.bind(var2)();
                                    var3 = _closure2_slot13;
                                    var3 = var3.bind(var2)(var1);
                                    if (var3) {
                                        _fun46080_ip = 104;
                                        continue _fun46080
                                    }
                                case 28:
                                    var3 = global;
                                    var5 = var3.setTimeout;
                                    var4 = _closure2_slot14;
                                    var7 = _closure2_slot1;
                                    var3 = _closure2_slot7;
                                    var3 = var1 - var3;
                                    var8 = var7 - var3;
                                    var7 = _closure2_slot10;
                                    var3 = var8;
                                    if (!var7) {
                                        _fun46080_ip = 92;
                                        continue _fun46080
                                    }
                                case 66:
                                    var7 = _closure1_slot8;
                                    var9 = _closure2_slot4;
                                    var6 = _closure2_slot8;
                                    var6 = var1 - var6;
                                    var6 = var9 - var6;
                                    var3 = var7.bind(var2)(var8, var6);
                                case 92:
                                    var3 = var5.bind(var2)(var4, var3);
                                    var _closure2_slot6 = var3;
                                    return var2;
                                case 104:
                                    var0 = _closure2_slot15;
                                    var0 = var0.bind(var2)(var1);
                                    return var0;
                            }
                        };
                        var _closure2_slot14 = var0;
                        var0 = function arg0() {
                            _fun46081: for (var _fun46081_ip = 0;;) switch (_fun46081_ip) {
                                case 0:
                                    var3 = undefined;
                                    _closure2_slot6 = var3;
                                    var0 = _closure2_slot11;
                                    if (!var0) {
                                        _fun46081_ip = 23;
                                        continue _fun46081
                                    }
                                case 16:
                                    var0 = _closure2_slot2;
                                    if (var0) {
                                        _fun46081_ip = 37;
                                        continue _fun46081
                                    }
                                case 23:
                                    _closure2_slot3 = var3;
                                    _closure2_slot2 = var3;
                                    var0 = _closure2_slot5;
                                    _fun46081_ip = 49;
                                    continue _fun46081;
                                case 37:
                                    var2 = _closure2_slot12;
                                    var1 = arg0;
                                    var0 = var2.bind(var3)(var1);
                                case 49:
                                    return var0;
                            }
                        };
                        var _closure2_slot15 = var0;
                        var0 = function() {
                            _fun46082: for (var _fun46082_ip = 0;;) switch (_fun46082_ip) {
                                case 0:
                                    var3 = undefined;
                                    var4 = undefined;
                                    var0 = _closure1_slot9;
                                    var2 = var0.bind(var3)();
                                    var0 = _closure2_slot13;
                                    var0 = var0.bind(var3)(var2);
                                    var4 = arguments;
                                    _closure2_slot2 = var4;
                                    var4 = this;
                                    _closure2_slot3 = var4;
                                    var _closure2_slot7 = var2;
                                    if (!var0) {
                                        _fun46082_ip = 61;
                                        continue _fun46082
                                    }
                                case 46:
                                    var0 = _closure2_slot6;
                                    if (!(var3 !== var0)) {
                                        _fun46082_ip = 142;
                                        continue _fun46082
                                    }
                                case 54:
                                    var0 = _closure2_slot10;
                                    if (var0) {
                                        _fun46082_ip = 101;
                                        continue _fun46082
                                    }
                                case 61:
                                    var0 = _closure2_slot6;
                                    if (!(var3 === var0)) {
                                        _fun46082_ip = 95;
                                        continue _fun46082
                                    }
                                case 69:
                                    var0 = global;
                                    var4 = var0.setTimeout;
                                    var2 = _closure2_slot14;
                                    var0 = _closure2_slot1;
                                    var0 = var4.bind(var3)(var2, var0);
                                    _closure2_slot6 = var0;
                                case 95:
                                    var0 = _closure2_slot5;
                                    return var0;
                                case 101:
                                    var0 = global;
                                    var4 = var0.setTimeout;
                                    var2 = _closure2_slot14;
                                    var0 = _closure2_slot1;
                                    var0 = var4.bind(var3)(var2, var0);
                                    _closure2_slot6 = var0;
                                    var2 = _closure2_slot12;
                                    var0 = _closure2_slot7;
                                    var0 = var2.bind(var3)(var0);
                                    return var0;
                                case 142:
                                    var2 = _closure2_slot7;
                                    _closure2_slot8 = var2;
                                    var0 = global;
                                    var5 = var0.setTimeout;
                                    var4 = _closure2_slot14;
                                    var0 = _closure2_slot1;
                                    var0 = var5.bind(var3)(var4, var0);
                                    _closure2_slot6 = var0;
                                    var0 = _closure2_slot9;
                                    if (var0) {
                                        _fun46082_ip = 189;
                                        continue _fun46082
                                    }
                                case 183:
                                    var0 = _closure2_slot5;
                                    _fun46082_ip = 198;
                                    continue _fun46082;
                                case 189:
                                    var1 = _closure2_slot12;
                                    var0 = var1.bind(var3)(var2);
                                case 198:
                                    return var0;
                            }
                        };
                        var9 = 0;
                        var _closure2_slot8 = var9;
                        var2 = false;
                        var _closure2_slot9 = var2;
                        var _closure2_slot10 = var2;
                        var2 = true;
                        var _closure2_slot11 = var2;
                        var5 = 'function';
                        var4 = typeof var4;
                        if (!(var5 === var4)) {
                            _fun46077_ip = 251;
                            continue _fun46077
                        }
                    case 96:
                        var4 = _closure1_slot11;
                        var8 = undefined;
                        var7 = var4.bind(var8)(var6);
                        if (var7) {
                            _fun46077_ip = 115;
                            continue _fun46077
                        }
                    case 113:
                        var7 = 0;
                    case 115:
                        _closure2_slot1 = var7;
                        var4 = _closure1_slot10;
                        var4 = var4.bind(var8)(var3);
                        if (!var4) {
                            _fun46077_ip = 227;
                            continue _fun46077
                        }
                    case 131:
                        var4 = var3.leading;
                        var4 = !var4;
                        var4 = !var4;
                        _closure2_slot9 = var4;
                        var4 = 'maxWait';
                        var6 = var4 in var3;
                        _closure2_slot10 = var6;
                        var4 = undefined;
                        if (!var6) {
                            _fun46077_ip = 194;
                            continue _fun46077
                        }
                    case 164:
                        var6 = _closure1_slot7;
                        var10 = _closure1_slot11;
                        var5 = var3.maxWait;
                        var5 = var10.bind(var8)(var5);
                        if (var5) {
                            _fun46077_ip = 188;
                            continue _fun46077
                        }
                    case 186:
                        var5 = 0;
                    case 188:
                        var4 = var6.bind(var8)(var5, var7);
                    case 194:
                        var _closure2_slot4 = var4;
                        var4 = 'trailing';
                        var4 = var4 in var3;
                        var2 = true;
                        if (!var4) {
                            _fun46077_ip = 223;
                            continue _fun46077
                        }
                    case 211:
                        var3 = var3.trailing;
                        var3 = !var3;
                        var2 = !var3;
                    case 223:
                        _closure2_slot11 = var2;
                    case 227:
                        var2 = function() {
                            _fun46083: for (var _fun46083_ip = 0;;) switch (_fun46083_ip) {
                                case 0:
                                    var2 = _closure2_slot6;
                                    var0 = undefined;
                                    if (!(var0 !== var2)) {
                                        _fun46083_ip = 30;
                                        continue _fun46083
                                    }
                                case 13:
                                    var2 = global;
                                    var3 = var2.clearTimeout;
                                    var2 = _closure2_slot6;
                                    var2 = var3.bind(var0)(var2);
                                case 30:
                                    var2 = 0;
                                    _closure2_slot8 = var2;
                                    _closure2_slot6 = var0;
                                    _closure2_slot3 = var0;
                                    _closure2_slot7 = var0;
                                    _closure2_slot2 = var0;
                                    return var0;
                            }
                        };
                        var0.cancel = var2;
                        var1 = function() {
                            _fun46084: for (var _fun46084_ip = 0;;) switch (_fun46084_ip) {
                                case 0:
                                    var0 = _closure2_slot6;
                                    var3 = undefined;
                                    if (!(var3 !== var0)) {
                                        _fun46084_ip = 35;
                                        continue _fun46084
                                    }
                                case 13:
                                    var2 = _closure2_slot15;
                                    var0 = _closure1_slot9;
                                    var0 = var0.bind(var3)();
                                    var0 = var2.bind(var3)(var0);
                                    _fun46084_ip = 39;
                                    continue _fun46084;
                                case 35:
                                    var0 = _closure2_slot5;
                                case 39:
                                    return var0;
                            }
                        };
                        var0.flush = var1;
                        return var0;
                    case 251:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var12 = 'Expected a function';
                        var13 = var1;
                        var0 = new var13[var2](var12, var11);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);