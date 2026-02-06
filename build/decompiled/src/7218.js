// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
            var1 = exports;
            var0 = function arg0, arg1() {
                _fun58951: for (var _fun58951_ip = 0;;) switch (_fun58951_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.length;
                        var7 = 1;
                        var6 = var1 - var7;
                        var5 = 0;
                        var3 = '..';
                        var4 = '.';
                        var2 = 0;
                        var1 = 0;
                        if (!(var6 >= var1)) {
                            _fun58951_ip = 115;
                            continue _fun58951
                        }
                    case 35:
                        var8 = var0[var6];
                        if (!(var4 !== var8)) {
                            _fun58951_ip = 87;
                            continue _fun58951
                        }
                    case 43:
                        if (!(var3 !== var8)) {
                            _fun58951_ip = 70;
                            continue _fun58951
                        }
                    case 47:
                        var8 = var2;
                        if (!var2) {
                            _fun58951_ip = 102;
                            continue _fun58951
                        }
                    case 53:
                        var9 = var0.splice;
                        var9 = var9.bind(var0)(var6, var7);
                        var8 = var2 - 1;
                        _fun58951_ip = 102;
                        continue _fun58951;
                    case 70:
                        var9 = var0.splice;
                        var9 = var9.bind(var0)(var6, var7);
                        var8 = var2 + 1;
                        _fun58951_ip = 102;
                        continue _fun58951;
                    case 87:
                        var9 = var0.splice;
                        var9 = var9.bind(var0)(var6, var7);
                        var8 = var2;
                    case 102:
                        var6 = var6 - 1;
                        var2 = var8;
                        var1 = var2;
                        if (var6 >= var5) {
                            _fun58951_ip = 35;
                            continue _fun58951
                        }
                    case 115:
                        var2 = arg1;
                        if (!var2) {
                            _fun58951_ip = 150;
                            continue _fun58951
                        }
                    case 121:
                        var1 = parseFloat(var1);
                        var2 = var1 - 1;
                        if (!var1) {
                            _fun58951_ip = 150;
                            continue _fun58951
                        }
                    case 130:
                        var1 = var0.unshift;
                        var1 = var1.bind(var0)(var3);
                        var1 = parseFloat(var2);
                        var2 = var1 - 1;
                        if (var1) {
                            _fun58951_ip = 130;
                            continue _fun58951
                        }
                    case 150:
                        return var0;
                }
            };
            var _closure1_slot1 = var0;
            var0 = function arg0() {
                _fun58952: for (var _fun58952_ip = 0;;) switch (_fun58952_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3.length;
                        var0 = 1024;
                        var2 = var3;
                        if (!(var1 > var0)) {
                            _fun58952_ip = 61;
                            continue _fun58952
                        }
                    case 21:
                        var1 = var3.slice;
                        var0 = -1024;
                        var3 = var1.bind(var3)(var0);
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '<truncated>';
                        var2 = var1.bind(var0)(var3);
                    case 61:
                        var1 = _closure1_slot0;
                        var0 = var1.exec;
                        var3 = var0.bind(var1)(var2);
                        if (var3) {
                            _fun58952_ip = 88;
                            continue _fun58952
                        }
                    case 82:
                        var0 = new Array(0);
                        _fun58952_ip = 101;
                        continue _fun58952;
                    case 88:
                        var2 = var3.slice;
                        var1 = 1;
                        var0 = var2.bind(var3)(var1);
                    case 101:
                        return var0;
                }
            };
            var _closure1_slot2 = var0;
            var0 = function() {
                _fun58953: for (var _fun58953_ip = 0;;) switch (_fun58953_ip) {
                    case 0:
                        var5 = undefined;
                        var11 = undefined;
                        var1 = arguments.length;
                        var0 = 1;
                        var10 = var1 - var0;
                        var1 = '';
                        var2 = false;
                        var9 = -1;
                        var8 = global;
                        var3 = '/';
                        var7 = 0;
                        var4 = var1;
                        var6 = var4;
                        var0 = false;
                        if (!(var10 >= var9)) {
                            _fun58953_ip = 148;
                            continue _fun58953
                        }
                    case 46:
                        var15 = var3;
                        if (!(var10 >= var7)) {
                            _fun58953_ip = 78;
                            continue _fun58953
                        }
                    case 53:
                        var12 = undefined;
                        if (!(!(var10 < var7))) {
                            _fun58953_ip = 75;
                            continue _fun58953
                        }
                    case 59:
                        var13 = arguments.length;
                        var13 = var13 <= var10;
                        var12 = undefined;
                        if (var13) {
                            _fun58953_ip = 75;
                            continue _fun58953
                        }
                    case 71:
                        var12 = arguments[var10];
                    case 75:
                        var15 = var12;
                    case 78:
                        var13 = var4;
                        if (!var15) {
                            _fun58953_ip = 117;
                            continue _fun58953
                        }
                    case 84:
                        var12 = var8.HermesInternal;
                        var12 = var12.concat;
                        var13 = var12.bind(var1)(var15, var3, var4);
                        var12 = var15.charAt;
                        var12 = var12.bind(var15)(var7);
                        var2 = var3 === var12;
                    case 117:
                        var10 = var10 - 1;
                        var12 = var2;
                        var6 = var13;
                        var0 = var12;
                        if (!(var10 >= var9)) {
                            _fun58953_ip = 148;
                            continue _fun58953
                        }
                    case 133:
                        var4 = var13;
                        var2 = var12;
                        var6 = var4;
                        var0 = var2;
                        if (!var0) {
                            _fun58953_ip = 46;
                            continue _fun58953
                        }
                    case 148:
                        if (!var0) {
                            _fun58953_ip = 154;
                            continue _fun58953
                        }
                    case 151:
                        var1 = var3;
                    case 154:
                        var4 = _closure1_slot1;
                        var2 = var6.split;
                        var7 = var2.bind(var6)(var3);
                        var6 = var7.filter;
                        var2 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        var2 = var6.bind(var7)(var2);
                        var0 = !var0;
                        var0 = var4.bind(var5)(var2, var0);
                        var0 = var2.join;
                        var0 = var0.bind(var2)(var3);
                        var0 = var1 + var0;
                        if (var0) {
                            _fun58953_ip = 218;
                            continue _fun58953
                        }
                    case 214:
                        var0 = '.';
                    case 218:
                        return var0;
                }
            };
            var _closure1_slot3 = var0;
            var3 = function arg0() {
                _fun58955: for (var _fun58955_ip = 0;;) switch (_fun58955_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = var3.length;
                        var7 = 0;
                        var0 = var7 < var0;
                        var2 = 0;
                        if (!var0) {
                            _fun58955_ip = 64;
                            continue _fun58955
                        }
                    case 19:
                        var0 = var3[var7];
                        var4 = '';
                        var1 = 0;
                        var2 = 0;
                        if (!(var4 === var0)) {
                            _fun58955_ip = 64;
                            continue _fun58955
                        }
                    case 35:
                        var5 = var1 + 1;
                        var0 = var3.length;
                        var2 = var5;
                        if (!(var5 < var0)) {
                            _fun58955_ip = 64;
                            continue _fun58955
                        }
                    case 50:
                        var0 = var3[var5];
                        var1 = var5;
                        var2 = var1;
                        if (var4 === var0) {
                            _fun58955_ip = 35;
                            continue _fun58955
                        }
                    case 64:
                        var0 = var3.length;
                        var4 = 1;
                        var8 = var0 - var4;
                        var0 = var8;
                        if (!(var8 >= var7)) {
                            _fun58955_ip = 125;
                            continue _fun58955
                        }
                    case 83:
                        var1 = var3[var8];
                        var6 = '';
                        var5 = var8;
                        var0 = var5;
                        if (!(var6 === var1)) {
                            _fun58955_ip = 125;
                            continue _fun58955
                        }
                    case 101:
                        var8 = var5 - 1;
                        var0 = var8;
                        if (!(var8 >= var7)) {
                            _fun58955_ip = 125;
                            continue _fun58955
                        }
                    case 111:
                        var1 = var3[var8];
                        var5 = var8;
                        var0 = var5;
                        if (var6 === var1) {
                            _fun58955_ip = 101;
                            continue _fun58955
                        }
                    case 125:
                        if (!(!(var2 > var0))) {
                            _fun58955_ip = 150;
                            continue _fun58955
                        }
                    case 129:
                        var1 = var3.slice;
                        var0 = var0 - var2;
                        var0 = var0 + var4;
                        var0 = var1.bind(var3)(var2, var0);
                        _fun58955_ip = 154;
                        continue _fun58955;
                    case 150:
                        var0 = new Array(0);
                    case 154:
                        return var0;
                }
            };
            var _closure1_slot4 = var3;
            var3 = function arg0() {
                _fun58956: for (var _fun58956_ip = 0;;) switch (_fun58956_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = _closure1_slot6;
                        var6 = undefined;
                        var3 = var1.bind(var6)(var4);
                        var2 = var4.slice;
                        var1 = -1;
                        var1 = var2.bind(var4)(var1);
                        var2 = '/';
                        var1 = var2 === var1;
                        var5 = _closure1_slot1;
                        var0 = var4.split;
                        var7 = var0.bind(var4)(var2);
                        var4 = var7.filter;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        var4 = var4.bind(var7)(var0);
                        var0 = !var3;
                        var0 = var5.bind(var6)(var4, var0);
                        var0 = var4.join;
                        var0 = var0.bind(var4)(var2);
                        var4 = var0;
                        if (var0) {
                            _fun58956_ip = 100;
                            continue _fun58956
                        }
                    case 97:
                        var4 = var3;
                    case 100:
                        if (var4) {
                            _fun58956_ip = 107;
                            continue _fun58956
                        }
                    case 103:
                        var0 = '.';
                    case 107:
                        var4 = var0;
                        if (!var0) {
                            _fun58956_ip = 116;
                            continue _fun58956
                        }
                    case 113:
                        var4 = var1;
                    case 116:
                        var1 = var0;
                        if (!var4) {
                            _fun58956_ip = 126;
                            continue _fun58956
                        }
                    case 122:
                        var1 = var0 + var2;
                    case 126:
                        var0 = '';
                        if (!var3) {
                            _fun58956_ip = 136;
                            continue _fun58956
                        }
                    case 133:
                        var0 = var2;
                    case 136:
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var _closure1_slot5 = var3;
            var4 = function arg0() {
                var2 = arg0;
                var1 = var2.charAt;
                var0 = 0;
                var1 = var1.bind(var2)(var0);
                var0 = '/';
                var0 = var0 === var1;
                return var0;
            };
            var _closure1_slot6 = var4;
            var5 = global;
            var8 = var5.Object;
            var7 = var8.defineProperty;
            var6 = {};
            var5 = true;
            var6.value = var5;
            var5 = '__esModule';
            var5 = var7.bind(var8)(var1, var5, var6);
            var5 = /^(\S+:\\|\\/ ? )([\s\ S] * ? )(( ? : \. {
                1,
                2
            } | [ ^ \/\\]+?|)(\.[^.\/\\]*|))(?:[\/\\]*)$/;
                var _closure1_slot0 = var5;
                var5 = function arg0, arg1() {
                    _fun58959: for (var _fun58959_ip = 0;;) switch (_fun58959_ip) {
                        case 0:
                            var1 = arg1;
                            var3 = _closure1_slot2;
                            var2 = undefined;
                            var0 = arg0;
                            var2 = var3.bind(var2)(var0);
                            var0 = 2;
                            var4 = var2[var0];
                            if (var4) {
                                _fun58959_ip = 34;
                                continue _fun58959
                            }
                        case 30:
                            var4 = '';
                        case 34:
                            var2 = var1;
                            if (!var2) {
                                _fun58959_ip = 69;
                                continue _fun58959
                            }
                        case 40:
                            var3 = var4.slice;
                            var5 = var1.length;
                            var0 = -1;
                            var0 = var0 * var5;
                            var0 = var3.bind(var4)(var0);
                            var2 = var0 === var1;
                        case 69:
                            var0 = var4;
                            if (!var2) {
                                _fun58959_ip = 102;
                                continue _fun58959
                            }
                        case 75:
                            var3 = var4.slice;
                            var2 = var4.length;
                            var1 = var1.length;
                            var2 = var2 - var1;
                            var1 = 0;
                            var0 = var3.bind(var4)(var1, var2);
                        case 102:
                            return var0;
                    }
                };
                var1.basename = var5;
                var5 = function arg0() {
                    _fun58960: for (var _fun58960_ip = 0;;) switch (_fun58960_ip) {
                        case 0:
                            var2 = _closure1_slot2;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            var6 = 0;
                            var2 = var0[var6];
                            if (var2) {
                                _fun58960_ip = 30;
                                continue _fun58960
                            }
                        case 26:
                            var2 = '';
                        case 30:
                            var7 = 1;
                            var5 = var0[var7];
                            if (var2) {
                                _fun58960_ip = 47;
                                continue _fun58960
                            }
                        case 40:
                            var0 = '.';
                            if (!var5) {
                                _fun58960_ip = 77;
                                continue _fun58960
                            }
                        case 47:
                            var1 = var5;
                            if (!var1) {
                                _fun58960_ip = 73;
                                continue _fun58960
                            }
                        case 53:
                            var4 = var5.slice;
                            var3 = var5.length;
                            var3 = var3 - var7;
                            var1 = var4.bind(var5)(var6, var3);
                        case 73:
                            var0 = var2 + var1;
                        case 77:
                            return var0;
                    }
                };
                var1.dirname = var5;
                var1.isAbsolute = var4;
                var4 = function() {
                    _fun58961: for (var _fun58961_ip = 0;;) switch (_fun58961_ip) {
                        case 0:
                            var2 = undefined;
                            var3 = undefined;
                            var1 = arguments.length;
                            var0 = global;
                            var0 = var0.Array;
                            var4 = var0.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var7 = var4;
                            var6 = var1;
                            var0 = new var7[var0](var6, var5);
                            var4 = var0 instanceof Object ? var0 : var4;
                            var0 = 0;
                            var5 = var0 < var1;
                            if (!var5) {
                                _fun58961_ip = 62;
                                continue _fun58961
                            }
                        case 47:
                            var5 = arguments[var0];
                            var4[var0] = var5;
                            var0 = var0 + 1;
                            if (var0 < var1) {
                                _fun58961_ip = 47;
                                continue _fun58961
                            }
                        case 62:
                            var1 = _closure1_slot5;
                            var3 = var4.join;
                            var0 = '/';
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1.join = var4;
                var1.normalizePath = var3;
                var2 = function arg0, arg1() {
                    _fun58962: for (var _fun58962_ip = 0;;) switch (_fun58962_ip) {
                        case 0:
                            var2 = _closure1_slot3;
                            var3 = undefined;
                            var1 = arg0;
                            var5 = var2.bind(var3)(var1);
                            var1 = var5.slice;
                            var4 = 1;
                            var5 = var1.bind(var5)(var4);
                            var1 = arg1;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.slice;
                            var4 = var1.bind(var2)(var4);
                            var1 = _closure1_slot4;
                            var0 = var5.split;
                            var2 = '/';
                            var0 = var0.bind(var5)(var2);
                            var7 = var1.bind(var3)(var0);
                            var0 = var4.split;
                            var0 = var0.bind(var4)(var2);
                            var5 = var1.bind(var3)(var0);
                            var0 = global;
                            var4 = var0.Math;
                            var3 = var4.min;
                            var1 = var7.length;
                            var0 = var5.length;
                            var1 = var3.bind(var4)(var1, var0);
                            var0 = 0;
                            var3 = var0 < var1;
                            var4 = var1;
                            if (!var3) {
                                _fun58962_ip = 152;
                                continue _fun58962
                            }
                        case 127:
                            var6 = var7[var0];
                            var3 = var5[var0];
                            var4 = var0;
                            if (!(var6 === var3)) {
                                _fun58962_ip = 152;
                                continue _fun58962
                            }
                        case 142:
                            var0 = var0 + 1;
                            var4 = var1;
                            if (var0 < var4) {
                                _fun58962_ip = 127;
                                continue _fun58962
                            }
                        case 152:
                            var3 = new Array(0);
                            var0 = var7.length;
                            var6 = '..';
                            var1 = var4;
                            if (!(var1 < var0)) {
                                _fun58962_ip = 196;
                                continue _fun58962
                            }
                        case 174:
                            var0 = var3.push;
                            var0 = var0.bind(var3)(var6);
                            var1 = var1 + 1;
                            var0 = var7.length;
                            if (var1 < var0) {
                                _fun58962_ip = 174;
                                continue _fun58962
                            }
                        case 196:
                            var1 = var3.concat;
                            var0 = var5.slice;
                            var0 = var0.bind(var5)(var4);
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.join;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var1.relative = var2;
                var1.resolve = var0;
                var0 = undefined;
                return var0;
            })(undefined, undefined, undefined, undefined, undefined, undefined, []);