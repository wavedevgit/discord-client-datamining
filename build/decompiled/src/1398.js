// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16405: for (var _fun16405_ip = 0;;) switch (_fun16405_ip) {
        case 0:
            var4 = global;
            var3 = require;
            var5 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var5;
            var6 = 0;
            var2 = var5[var6];
            var0 = undefined;
            var7 = var3.bind(var0)(var2);
            var2 = 'Object.prototype.toString';
            var2 = var7.bind(var0)(var2);
            var _closure1_slot2 = var2;
            var2 = 1;
            var2 = var5[var2];
            var2 = var3.bind(var0)(var2);
            var2 = var2.bind(var0)();
            var _closure1_slot3 = var2;
            var7 = global;
            var8 = var7.globalThis;
            var9 = 'undefined';
            var8 = typeof var8;
            if (!(var9 !== var8)) {
                _fun16405_ip = 92;
                continue _fun16405
            }
        case 86:
            var4 = var7.globalThis;
        case 92:
            var _closure1_slot4 = var4;
            var4 = 2;
            var4 = var5[var4];
            var4 = var3.bind(var0)(var4);
            var4 = var4.bind(var0)();
            var _closure1_slot5 = var4;
            var7 = var5[var6];
            var8 = var3.bind(var0)(var7);
            var7 = 'String.prototype.slice';
            var7 = var8.bind(var0)(var7);
            var _closure1_slot6 = var7;
            var6 = var5[var6];
            var8 = var3.bind(var0)(var6);
            var7 = 'Array.prototype.indexOf';
            var6 = true;
            var6 = var8.bind(var0)(var7, var6);
            if (var6) {
                _fun16405_ip = 171;
                continue _fun16405
            }
        case 166:
            var6 = function arg0, arg1() {
                _fun16406: for (var _fun16406_ip = 0;;) switch (_fun16406_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var0 = var5.length;
                        var3 = 0;
                        var0 = var3 < var0;
                        var2 = 1;
                        if (!var0) {
                            _fun16406_ip = 47;
                            continue _fun16406
                        }
                    case 23:
                        var1 = var5[var3];
                        var0 = var3;
                        if (!(var1 !== var4)) {
                            _fun16406_ip = 55;
                            continue _fun16406
                        }
                    case 34:
                        var3 = var0 + var2;
                        var1 = var5.length;
                        if (var3 < var1) {
                            _fun16406_ip = 23;
                            continue _fun16406
                        }
                    case 47:
                        var1 = -1;
                        return var1;
                    case 55:
                        return var0;
                }
            };
        case 171:
            var _closure1_slot7 = var6;
            var6 = null;
            var6 = Object.create(var6);
            var _closure1_slot8 = var6;
            if (!var2) {
                _fun16405_ip = 217;
                continue _fun16405
            }
        case 187:
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var0)(var2);
            if (!var2) {
                _fun16405_ip = 217;
                continue _fun16405
            }
        case 202:
            var2 = 4;
            var2 = var5[var2];
            var2 = var3.bind(var0)(var2);
            if (var2) {
                _fun16405_ip = 242;
                continue _fun16405
            }
        case 217:
            var2 = 5;
            var2 = var5[var2];
            var6 = var3.bind(var0)(var2);
            var2 = function(arg0) { // Environment: var1
                _fun16408: for (var _fun16408_ip = 0;;) switch (_fun16408_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = _closure1_slot4;
                        var1 = var1[var3];
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var7 = var2;
                        var1 = new var7[var1](var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var4 = var1.slice;
                        if (var4) {
                            _fun16408_ip = 47;
                            continue _fun16408
                        }
                    case 42:
                        var4 = var1.set;
                    case 47:
                        if (!var4) {
                            _fun16408_ip = 93;
                            continue _fun16408
                        }
                    case 50:
                        var2 = _closure1_slot8;
                        var1 = '$';
                        var1 = var1 + var3;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 6;
                        var0 = var3[var0];
                        var3 = undefined;
                        var0 = var5.bind(var3)(var0);
                        var0 = var0.bind(var3)(var4);
                        var2[var1] = var0;
                    case 93:
                        var0 = undefined;
                        return var0;
                }
            };
            var2 = var6.bind(var0)(var4, var2);
            _fun16405_ip = 265;
            continue _fun16405;
        case 242:
            var2 = 5;
            var2 = var5[var2];
            var3 = var3.bind(var0)(var2);
            var2 = function(arg0) { // Environment: var1
                _fun16407: for (var _fun16407_ip = 0;;) switch (_fun16407_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = _closure1_slot4;
                        var0 = var0[var5];
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var12 = var1;
                        var0 = new var12[var0](var11);
                        var8 = var0 instanceof Object ? var0 : var1;
                        var1 = global;
                        var0 = var1.Symbol;
                        var0 = var0.toStringTag;
                        var0 = var0 in var8;
                        if (!var0) {
                            _fun16407_ip = 245;
                            continue _fun16407
                        }
                    case 58:
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var6 = 4;
                        var0 = var0[var6];
                        var4 = undefined;
                        var0 = var2.bind(var4)(var0);
                        if (!var0) {
                            _fun16407_ip = 245;
                            continue _fun16407
                        }
                    case 86:
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var7 = var0[var6];
                        var7 = var2.bind(var4)(var7);
                        var9 = var7.bind(var4)(var8);
                        var8 = 3;
                        var0 = var0[var8];
                        var2 = var2.bind(var4)(var0);
                        var0 = var1.Symbol;
                        var0 = var0.toStringTag;
                        var2 = var2.bind(var4)(var9, var0);
                        var0 = var2;
                        if (var2) {
                            _fun16407_ip = 199;
                            continue _fun16407
                        }
                    case 144:
                        var0 = var2;
                        if (!var9) {
                            _fun16407_ip = 199;
                            continue _fun16407
                        }
                    case 150:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var6 = var2[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var6.bind(var4)(var9);
                        var2 = var2[var8];
                        var2 = var7.bind(var4)(var2);
                        var1 = var1.Symbol;
                        var1 = var1.toStringTag;
                        var0 = var2.bind(var4)(var6, var1);
                    case 199:
                        var2 = _closure1_slot8;
                        var1 = '$';
                        var1 = var1 + var5;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 6;
                        var3 = var6[var3];
                        var3 = var5.bind(var4)(var3);
                        var0 = var0.get;
                        var0 = var3.bind(var4)(var0);
                        var2[var1] = var0;
                    case 245:
                        var0 = undefined;
                        return var0;
                }
            };
            var2 = var3.bind(var0)(var4, var2);
        case 265:
            var2 = function arg0() {
                _fun16409: for (var _fun16409_ip = 0;;) switch (_fun16409_ip) {
                    case 0:
                        var3 = arg0;
                        if (!var3) {
                            _fun16409_ip = 152;
                            continue _fun16409
                        }
                    case 11:
                        var2 = 'object';
                        var0 = typeof var3;
                        if (!(var2 === var0)) {
                            _fun16409_ip = 152;
                            continue _fun16409
                        }
                    case 25:
                        var2 = _closure1_slot3;
                        if (var2) {
                            _fun16409_ip = 113;
                            continue _fun16409
                        }
                    case 35:
                        var5 = _closure1_slot6;
                        var2 = _closure1_slot2;
                        var6 = undefined;
                        var4 = var2.bind(var6)(var3);
                        var2 = 8;
                        var7 = -1;
                        var5 = var5.bind(var6)(var4, var2, var7);
                        var4 = _closure1_slot7;
                        var2 = _closure1_slot5;
                        var4 = var4.bind(var6)(var2, var5);
                        var2 = var5;
                        if (!(!(var4 > var7))) {
                            _fun16409_ip = 111;
                            continue _fun16409
                        }
                    case 87:
                        var4 = 'Object';
                        var4 = var4 === var5;
                        if (!var4) {
                            _fun16409_ip = 108;
                            continue _fun16409
                        }
                    case 98:
                        var5 = function arg0() {
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = false;
                            var _closure3_slot1 = var1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 5;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = _closure1_slot8;
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun16411: for (var _fun16411_ip = 0;;) switch (_fun16411_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = arg1;
                                        var3 = _closure3_slot1;
                                        if (var3) {
                                            _fun16411_ip = 57;
                                            continue _fun16411
                                        }
                                    case 16: // try_start_0
                                        var3 = var2;
                                        var2 = _closure3_slot0;
                                        var4 = undefined;
                                        var2 = var3.bind(var4)(var2);
                                        var3 = _closure1_slot6;
                                        var2 = var0;
                                        var0 = 1;
                                        var0 = var3.bind(var4)(var2, var0);
                                        _closure3_slot1 = var0;
                                    case 53: // try_end0
                                        _fun16411_ip = 57;
                                        continue _fun16411;
                                    case 55: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                    case 57:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = _closure3_slot1;
                            return var0;
                        };
                        var4 = var5.bind(var6)(var3);
                    case 108:
                        var2 = var4;
                    case 111:
                        return var2;
                    case 113:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 3;
                        var0 = var2[var0];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var0);
                        var0 = null;
                        if (!var4) {
                            _fun16409_ip = 150;
                            continue _fun16409
                        }
                    case 140:
                        var1 = function arg0() {
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = false;
                            var _closure3_slot1 = var1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 5;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = _closure1_slot8;
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun16413: for (var _fun16413_ip = 0;;) switch (_fun16413_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = arg1;
                                        var3 = _closure3_slot1;
                                        if (var3) {
                                            _fun16413_ip = 72;
                                            continue _fun16413
                                        }
                                    case 16: // try_start_0
                                        var3 = var2;
                                        var2 = _closure3_slot0;
                                        var4 = undefined;
                                        var3 = var3.bind(var4)(var2);
                                        var2 = '$';
                                        var3 = var2 + var3;
                                        var2 = var0;
                                        if (!(var3 === var2)) {
                                            _fun16413_ip = 68;
                                            continue _fun16413
                                        }
                                    case 45:
                                        var3 = _closure1_slot6;
                                        var2 = var0;
                                        var0 = 1;
                                        var0 = var3.bind(var4)(var2, var0);
                                        _closure3_slot1 = var0;
                                    case 68: // try_end0
                                        _fun16413_ip = 72;
                                        continue _fun16413;
                                    case 70: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                    case 72:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = _closure3_slot1;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var3);
                    case 150:
                        return var0;
                    case 152:
                        var0 = false;
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [551, 1393, 1399, 519, 523, 1401, 1403]);