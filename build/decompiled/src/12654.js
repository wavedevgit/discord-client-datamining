// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96911: for (var _fun96911_ip = 0;;) switch (_fun96911_ip) {
        case 0:
            var5 = require;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = 0;
            var2 = var6[var0];
            var0 = undefined;
            var2 = var5.bind(var0)(var2);
            var _closure1_slot2 = var2;
            var2 = global;
            var3 = var2.String;
            var _closure1_slot3 = var3;
            var3 = var2.Object;
            var3 = var3.defineProperty;
            var _closure1_slot4 = var3;
            var3 = 1;
            var4 = var6[var3];
            var8 = var5.bind(var0)(var4);
            var4 = '';
            var7 = var4.slice;
            var7 = var8.bind(var0)(var7);
            var _closure1_slot5 = var7;
            var7 = var6[var3];
            var7 = var5.bind(var0)(var7);
            var4 = var4.replace;
            var4 = var7.bind(var0)(var4);
            var _closure1_slot6 = var4;
            var3 = var6[var3];
            var4 = var5.bind(var0)(var3);
            var3 = new Array(0);
            var3 = var3.join;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 2;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            if (!var3) {
                _fun96911_ip = 182;
                continue _fun96911
            }
        case 155:
            var4 = 3;
            var4 = var6[var4];
            var5 = var5.bind(var0)(var4);
            var4 = function() { // Environment: var1
                var5 = _closure1_slot4;
                var4 = {};
                var1 = 8;
                var4.value = var1;
                var3 = undefined;
                var2 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var0 = 'length';
                var0 = var5.bind(var3)(var2, var0, var4);
                var0 = var0.length;
                var0 = var1 !== var0;
                return var0;
            };
            var4 = var5.bind(var0)(var4);
            var3 = !var4;
        case 182:
            var _closure1_slot8 = var3;
            var4 = var2.String;
            var3 = var2.String;
            var5 = var4.bind(var0)(var3);
            var4 = var5.split;
            var3 = 'String';
            var3 = var4.bind(var5)(var3);
            var _closure1_slot9 = var3;
            var4 = function(arg0, arg1, arg2) { // Environment: var1
                _fun96914: for (var _fun96914_ip = 0;;) switch (_fun96914_ip) {
                    case 0:
                        var7 = arg1;
                        var0 = arg0;
                        var6 = var7;
                        var3 = arg2;
                        var5 = undefined;
                        var2 = undefined;
                        var9 = _closure1_slot5;
                        var4 = _closure1_slot3;
                        var8 = var4.bind(var5)(var7);
                        var7 = 0;
                        var4 = 7;
                        var7 = var9.bind(var5)(var8, var7, var4);
                        var4 = 'Symbol(';
                        if (!(var4 === var7)) {
                            _fun96914_ip = 113;
                            continue _fun96914
                        }
                    case 54:
                        var9 = _closure1_slot6;
                        var7 = _closure1_slot3;
                        var4 = var6;
                        var8 = var7.bind(var5)(var4);
                        var7 = /^Symbol\(([^)]*)\).*$/;
                        var4 = '$1';
                        var7 = var9.bind(var5)(var8, var7, var4);
                        var4 = '[';
                        var7 = var4 + var7;
                        var4 = ']';
                        var6 = var7 + var4;
                    case 113:
                        var4 = var3;
                        if (!var4) {
                            _fun96914_ip = 128;
                            continue _fun96914
                        }
                    case 119:
                        var7 = var3;
                        var4 = var7.getter;
                    case 128:
                        if (!var4) {
                            _fun96914_ip = 144;
                            continue _fun96914
                        }
                    case 131:
                        var7 = var6;
                        var4 = 'get ';
                        var6 = var4 + var7;
                    case 144:
                        var4 = var3;
                        if (!var4) {
                            _fun96914_ip = 159;
                            continue _fun96914
                        }
                    case 150:
                        var7 = var3;
                        var4 = var7.setter;
                    case 159:
                        if (!var4) {
                            _fun96914_ip = 175;
                            continue _fun96914
                        }
                    case 162:
                        var7 = var6;
                        var4 = 'set ';
                        var6 = var4 + var7;
                    case 175:
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var8 = 4;
                        var4 = var4[var8];
                        var7 = var7.bind(var5)(var4);
                        var4 = var0;
                        var10 = 'name';
                        var4 = var7.bind(var5)(var4, var10);
                        var4 = !var4;
                        if (var4) {
                            _fun96914_ip = 261;
                            continue _fun96914
                        }
                    case 214:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var7 = 5;
                        var7 = var11[var7];
                        var7 = var9.bind(var5)(var7);
                        var7 = var7.CONFIGURABLE;
                        if (!var7) {
                            _fun96914_ip = 258;
                            continue _fun96914
                        }
                    case 243:
                        var9 = var0;
                        var11 = var9.name;
                        var9 = var6;
                        var7 = var11 !== var9;
                    case 258:
                        var4 = var7;
                    case 261:
                        if (!var4) {
                            _fun96914_ip = 331;
                            continue _fun96914
                        }
                    case 264:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var4 = 2;
                        var4 = var9[var4];
                        var4 = var7.bind(var5)(var4);
                        if (var4) {
                            _fun96914_ip = 301;
                            continue _fun96914
                        }
                    case 287:
                        var7 = var0;
                        var4 = var6;
                        var7.name = var4;
                        _fun96914_ip = 331;
                        continue _fun96914;
                    case 301:
                        var9 = _closure1_slot4;
                        var7 = var0;
                        var4 = {};
                        var11 = var6;
                        var4.value = var11;
                        var11 = true;
                        var4.configurable = var11;
                        var4 = var9.bind(var5)(var7, var10, var4);
                    case 331:
                        var4 = _closure1_slot8;
                        if (!var4) {
                            _fun96914_ip = 341;
                            continue _fun96914
                        }
                    case 338:
                        var4 = var3;
                    case 341:
                        if (!var4) {
                            _fun96914_ip = 374;
                            continue _fun96914
                        }
                    case 344:
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var8];
                        var10 = var9.bind(var5)(var7);
                        var9 = var3;
                        var7 = 'arity';
                        var4 = var10.bind(var5)(var9, var7);
                    case 374:
                        if (!var4) {
                            _fun96914_ip = 398;
                            continue _fun96914
                        }
                    case 377:
                        var7 = var0;
                        var9 = var7.length;
                        var7 = var3;
                        var7 = var7.arity;
                        var4 = var9 !== var7;
                    case 398:
                        if (!var4) {
                            _fun96914_ip = 434;
                            continue _fun96914
                        }
                    case 401:
                        var10 = _closure1_slot4;
                        var9 = var0;
                        var7 = {};
                        var4 = var3;
                        var4 = var4.arity;
                        var7.value = var4;
                        var4 = 'length';
                        var4 = var10.bind(var5)(var9, var4, var7);
                    case 434: // try_start_0
                        var4 = var3;
                        if (!var4) {
                            _fun96914_ip = 481;
                            continue _fun96914
                        }
                    case 440:
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var8];
                        var9 = var7.bind(var5)(var4);
                        var7 = var3;
                        var4 = 'constructor';
                        var4 = var9.bind(var5)(var7, var4);
                        if (!var4) {
                            _fun96914_ip = 481;
                            continue _fun96914
                        }
                    case 473:
                        var3 = var3.constructor;
                        if (var3) {
                            _fun96914_ip = 503;
                            continue _fun96914
                        }
                    case 481:
                        var3 = var0;
                        var3 = var3.prototype;
                        if (!var3) {
                            _fun96914_ip = 553;
                            continue _fun96914
                        }
                    case 492:
                        var3 = var0;
                        var3.prototype = var5;
                        _fun96914_ip = 553;
                        continue _fun96914;
                    case 503:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 2;
                        var3 = var7[var3];
                        var3 = var4.bind(var5)(var3);
                        if (!var3) {
                            _fun96914_ip = 553;
                            continue _fun96914
                        }
                    case 526:
                        var9 = _closure1_slot4;
                        var7 = var0;
                        var4 = {};
                        var3 = false;
                        var4.writable = var3;
                        var3 = 'prototype';
                        var3 = var9.bind(var5)(var7, var3, var4);
                    case 553: // try_end0
                        _fun96914_ip = 557;
                        continue _fun96914;
                    case 555: // catch_target0
                        CatchBlockStart(arg_register = 3);
                    case 557:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var7 = 6;
                        var7 = var3[var7];
                        var10 = var4.bind(var5)(var7);
                        var9 = var10.enforce;
                        var7 = var0;
                        var7 = var9.bind(var10)(var7);
                        var2 = var7;
                        var3 = var3[var8];
                        var4 = var4.bind(var5)(var3);
                        var3 = 'source';
                        var3 = var4.bind(var5)(var7, var3);
                        if (var3) {
                            _fun96914_ip = 657;
                            continue _fun96914
                        }
                    case 616:
                        var4 = _closure1_slot7;
                        var3 = _closure1_slot9;
                        var7 = var6;
                        var1 = '';
                        var8 = 'string';
                        var7 = typeof var7;
                        if (!(var8 === var7)) {
                            _fun96914_ip = 645;
                            continue _fun96914
                        }
                    case 642:
                        var1 = var6;
                    case 645:
                        var1 = var4.bind(var5)(var3, var1);
                        var2.source = var1;
                    case 657:
                        return var0;
                }
            };
            var3 = arg4;
            var3.exports = var4;
            var2 = var2.Function;
            var2 = var2.prototype;
            var3 = function() {
                _fun96915: for (var _fun96915_ip = 0;;) switch (_fun96915_ip) {
                    case 0:
                        var3 = this;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 7;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var4.bind(var2)(var0);
                        var0 = var0.bind(var2)(var3);
                        if (!var0) {
                            _fun96915_ip = 71;
                            continue _fun96915
                        }
                    case 36:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 6;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.get;
                        var4 = var4.bind(var5)(var3);
                        var0 = var4.source;
                    case 71:
                        if (var0) {
                            _fun96915_ip = 83;
                            continue _fun96915
                        }
                    case 74:
                        var1 = _closure1_slot2;
                        var0 = var1.bind(var2)(var3);
                    case 83:
                        return var0;
                }
            };
            var1 = 'toString';
            var1 = var4.bind(var0)(var3, var1);
            var2.toString = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12655, 12603, 12599, 12600, 12619, 12656, 12657, 12622]);