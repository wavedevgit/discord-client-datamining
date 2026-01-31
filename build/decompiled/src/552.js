// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6650: for (var _fun6650_ip = 0;;) switch (_fun6650_ip) {
        case 0:
            var6 = require;
            var7 = dependencyMap;
            var0 = global;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var7;
            var0 = function arg0, arg1() {
                _fun6651: for (var _fun6651_ip = 0;;) switch (_fun6651_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = arg1;
                        var1 = inf;
                        if (!(var2 !== var1)) {
                            _fun6651_ip = 342;
                            continue _fun6651
                        }
                    case 23:
                        var1 = -inf;
                        if (!(var2 !== var1)) {
                            _fun6651_ip = 342;
                            continue _fun6651
                        }
                    case 40:
                        if (!(var2 == var2)) {
                            _fun6651_ip = 342;
                            continue _fun6651
                        }
                    case 47:
                        if (!var2) {
                            _fun6651_ip = 73;
                            continue _fun6651
                        }
                    case 50:
                        var1 = -1000;
                        if (!(var2 > var1)) {
                            _fun6651_ip = 73;
                            continue _fun6651
                        }
                    case 60:
                        var1 = 1000;
                        if (!(!(var2 < var1))) {
                            _fun6651_ip = 342;
                            continue _fun6651
                        }
                    case 73:
                        var5 = _closure1_slot18;
                        var4 = var5.call;
                        var3 = /e/;
                        var3 = var4.bind(var5)(var3, var0);
                        if (var3) {
                            _fun6651_ip = 342;
                            continue _fun6651
                        }
                    case 111:
                        var5 = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                        var4 = 'number';
                        var3 = typeof var2;
                        if (!(var4 === var3)) {
                            _fun6651_ip = 176;
                            continue _fun6651
                        }
                    case 136:
                        var3 = 0;
                        if (!(!(var2 < var3))) {
                            _fun6651_ip = 155;
                            continue _fun6651
                        }
                    case 142:
                        var4 = _closure1_slot22;
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        _fun6651_ip = 172;
                        continue _fun6651;
                    case 155:
                        var7 = _closure1_slot22;
                        var6 = -var2;
                        var3 = undefined;
                        var3 = var7.bind(var3)(var6);
                        var4 = -var3;
                    case 172:
                        if (!(var4 === var2)) {
                            _fun6651_ip = 200;
                            continue _fun6651
                        }
                    case 176:
                        var6 = _closure1_slot15;
                        var3 = var6.call;
                        var2 = '$&_';
                        var2 = var3.bind(var6)(var0, var5, var2);
                        return var2;
                    case 200:
                        var2 = global;
                        var3 = var2.String;
                        var2 = undefined;
                        var4 = var3.bind(var2)(var4);
                        var6 = _closure1_slot14;
                        var3 = var6.call;
                        var7 = var4.length;
                        var2 = 1;
                        var2 = var7 + var2;
                        var8 = var3.bind(var6)(var0, var2);
                        var3 = _closure1_slot15;
                        var2 = var3.call;
                        var7 = '$&_';
                        var3 = var2.bind(var3)(var4, var5, var7);
                        var2 = '.';
                        var2 = var3 + var2;
                        var6 = _closure1_slot15;
                        var5 = var6.call;
                        var4 = _closure1_slot15;
                        var3 = var4.call;
                        var1 = /([0-9]{3})/g;
                        var4 = var3.bind(var4)(var8, var1, var7);
                        var3 = /_$/;
                        var1 = '';
                        var1 = var5.bind(var6)(var4, var3, var1);
                        var1 = var2 + var1;
                        return var1;
                    case 342:
                        return var0;
                }
            };
            var _closure1_slot34 = var0;
            var0 = function arg0, arg1, arg2() {
                _fun6652: for (var _fun6652_ip = 0;;) switch (_fun6652_ip) {
                    case 0:
                        var0 = arg1;
                        var1 = arg2;
                        var1 = var1.quoteStyle;
                        if (var1) {
                            _fun6652_ip = 18;
                            continue _fun6652
                        }
                    case 15:
                        var1 = var0;
                    case 18:
                        var0 = _closure1_slot31;
                        var1 = var0[var1];
                        var0 = arg0;
                        var0 = var1 + var0;
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var _closure1_slot35 = var0;
            var0 = function arg0() {
                var4 = _closure1_slot15;
                var3 = var4.call;
                var0 = global;
                var2 = var0.String;
                var1 = undefined;
                var0 = arg0;
                var2 = var2.bind(var1)(var0);
                var1 = /"/g;
                var0 = '&quot;';
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
            var _closure1_slot36 = var0;
            var0 = function arg0() {
                _fun6654: for (var _fun6654_ip = 0;;) switch (_fun6654_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure1_slot27;
                        var0 = !var0;
                        if (var0) {
                            _fun6654_ip = 61;
                            continue _fun6654
                        }
                    case 16:
                        var2 = 'object';
                        var1 = typeof var4;
                        var1 = var2 === var1;
                        if (!var1) {
                            _fun6654_ip = 58;
                            continue _fun6654
                        }
                    case 30:
                        var2 = _closure1_slot27;
                        var2 = var2 in var4;
                        if (var2) {
                            _fun6654_ip = 55;
                            continue _fun6654
                        }
                    case 41:
                        var3 = _closure1_slot27;
                        var4 = var4[var3];
                        var3 = undefined;
                        var2 = var3 !== var4;
                    case 55:
                        var1 = var2;
                    case 58:
                        var0 = !var1;
                    case 61:
                        return var0;
                }
            };
            var _closure1_slot37 = var0;
            var0 = function arg0() {
                _fun6655: for (var _fun6655_ip = 0;;) switch (_fun6655_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot42;
                        var2 = undefined;
                        var4 = var0.bind(var2)(var3);
                        var0 = '[object Array]';
                        var0 = var0 === var4;
                        if (!var0) {
                            _fun6655_ip = 37;
                            continue _fun6655
                        }
                    case 28:
                        var1 = _closure1_slot37;
                        var0 = var1.bind(var2)(var3);
                    case 37:
                        return var0;
                }
            };
            var _closure1_slot38 = var0;
            var0 = function arg0() {
                _fun6656: for (var _fun6656_ip = 0;;) switch (_fun6656_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot42;
                        var2 = undefined;
                        var4 = var0.bind(var2)(var3);
                        var0 = '[object RegExp]';
                        var0 = var0 === var4;
                        if (!var0) {
                            _fun6656_ip = 37;
                            continue _fun6656
                        }
                    case 28:
                        var1 = _closure1_slot37;
                        var0 = var1.bind(var2)(var3);
                    case 37:
                        return var0;
                }
            };
            var _closure1_slot39 = var0;
            var8 = function arg0() {
                _fun6657: for (var _fun6657_ip = 0;;) switch (_fun6657_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot26;
                        var0 = var1;
                        if (var3) {
                            _fun6657_ip = 89;
                            continue _fun6657
                        }
                    case 16:
                        var4 = 'symbol';
                        var3 = typeof var0;
                        if (!(var4 !== var3)) {
                            _fun6657_ip = 85;
                            continue _fun6657
                        }
                    case 27:
                        var3 = var1;
                        if (!var3) {
                            _fun6657_ip = 81;
                            continue _fun6657
                        }
                    case 33:
                        var3 = var1;
                        var4 = 'object';
                        var3 = typeof var3;
                        if (!(var4 === var3)) {
                            _fun6657_ip = 81;
                            continue _fun6657
                        }
                    case 47:
                        var3 = _closure1_slot25;
                        if (!var3) {
                            _fun6657_ip = 81;
                            continue _fun6657
                        }
                    case 54: // try_start_0
                        var4 = _closure1_slot25;
                        var3 = var4.call;
                        var2 = var1;
                        var2 = var3.bind(var4)(var2);
                    case 71: // try_end0
                        var2 = true;
                        return var2;
                    case 75: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var2 = false;
                        return var2;
                    case 81:
                        var2 = false;
                        return var2;
                    case 85:
                        var2 = true;
                        return var2;
                    case 89:
                        if (!var0) {
                            _fun6657_ip = 106;
                            continue _fun6657
                        }
                    case 92:
                        var2 = var1;
                        var3 = 'object';
                        var2 = typeof var2;
                        var0 = var3 === var2;
                    case 106:
                        if (!var0) {
                            _fun6657_ip = 124;
                            continue _fun6657
                        }
                    case 109:
                        var2 = var1;
                        var1 = global;
                        var1 = var1.Symbol;
                        var0 = var2 instanceof var1;
                    case 124:
                        return var0;
                }
            };
            var _closure1_slot40 = var8;
            var0 = function arg0, arg1() {
                var3 = _closure1_slot33;
                var2 = var3.call;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot41 = var0;
            var0 = function arg0() {
                var2 = _closure1_slot11;
                var1 = var2.call;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot42 = var0;
            var0 = function arg0, arg1() {
                _fun6660: for (var _fun6660_ip = 0;;) switch (_fun6660_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = arg1;
                        var0 = var2.indexOf;
                        if (var0) {
                            _fun6660_ip = 57;
                            continue _fun6660
                        }
                    case 15:
                        var4 = var2.length;
                        var3 = 0;
                        var0 = var3 < var4;
                        if (!var0) {
                            _fun6660_ip = 47;
                            continue _fun6660
                        }
                    case 29:
                        var5 = var2[var3];
                        var0 = var3;
                        if (!(var5 !== var1)) {
                            _fun6660_ip = 55;
                            continue _fun6660
                        }
                    case 40:
                        var3 = var0 + 1;
                        if (var3 < var4) {
                            _fun6660_ip = 29;
                            continue _fun6660
                        }
                    case 47:
                        var3 = -1;
                        return var3;
                    case 55:
                        return var0;
                    case 57:
                        var0 = var2.indexOf;
                        var0 = var0.bind(var2)(var1);
                        return var0;
                }
            };
            var _closure1_slot43 = var0;
            var0 = function arg0, arg1() {
                _fun6661: for (var _fun6661_ip = 0;;) switch (_fun6661_ip) {
                    case 0:
                        var8 = arg0;
                        var5 = arg1;
                        var1 = var8.length;
                        var0 = var5.maxStringLength;
                        if (!(!(var1 > var0))) {
                            _fun6661_ip = 128;
                            continue _fun6661
                        }
                    case 21:
                        var2 = _closure1_slot32;
                        var1 = var5.quoteStyle;
                        if (var1) {
                            _fun6661_ip = 41;
                            continue _fun6661
                        }
                    case 37:
                        var1 = 'single';
                    case 41:
                        var9 = var2[var1];
                        var1 = 0;
                        var9.lastIndex = var1;
                        var3 = _closure1_slot35;
                        var6 = _closure1_slot15;
                        var4 = var6.call;
                        var7 = _closure1_slot15;
                        var2 = var7.call;
                        var1 = '\\$1';
                        var2 = var2.bind(var7)(var8, var9, var1);
                        var1 = _closure1_slot45;
                        var0 = /[\x00-\x1f]/g;
                        var2 = var4.bind(var6)(var2, var0, var1);
                        var1 = undefined;
                        var0 = 'single';
                        var0 = var3.bind(var1)(var2, var0, var5);
                        return var0;
                    case 128:
                        var1 = var8.length;
                        var0 = var5.maxStringLength;
                        var3 = var1 - var0;
                        var2 = '';
                        var0 = 1;
                        if (!(var3 > var0)) {
                            _fun6661_ip = 158;
                            continue _fun6661
                        }
                    case 154:
                        var2 = 's';
                    case 158:
                        var4 = _closure1_slot44;
                        var7 = _closure1_slot14;
                        var6 = var7.call;
                        var1 = var5.maxStringLength;
                        var0 = 0;
                        var1 = var6.bind(var7)(var8, var0, var1);
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1, var5);
                        var0 = '... ';
                        var3 = var0 + var3;
                        var0 = ' more character';
                        var0 = var3 + var0;
                        var0 = var0 + var2;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var _closure1_slot44 = var0;
            var0 = function arg0() {
                _fun6662: for (var _fun6662_ip = 0;;) switch (_fun6662_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.charCodeAt;
                        var0 = 0;
                        var6 = var1.bind(var2)(var0);
                        var0 = {
                            8: 'b',
                            9: 't',
                            10: 'n',
                            12: 'f',
                            13: 'r'
                        };
                        var2 = var0[var6];
                        if (var2) {
                            _fun6662_ip = 96;
                            continue _fun6662
                        }
                    case 33:
                        var5 = 16;
                        var0 = var6 < var5;
                        var3 = '';
                        if (!var0) {
                            _fun6662_ip = 53;
                            continue _fun6662
                        }
                    case 47:
                        var3 = '0';
                    case 53:
                        var4 = _closure1_slot16;
                        var1 = var4.call;
                        var0 = var6.toString;
                        var0 = var0.bind(var6)(var5);
                        var1 = var1.bind(var4)(var0);
                        var0 = '\\x';
                        var0 = var0 + var3;
                        var0 = var0 + var1;
                        _fun6662_ip = 104;
                        continue _fun6662;
                    case 96:
                        var1 = '\\';
                        var0 = var1 + var2;
                    case 104:
                        return var0;
                }
            };
            var _closure1_slot45 = var0;
            var0 = function arg0() {
                var1 = 'Object(';
                var0 = arg0;
                var1 = var1 + var0;
                var0 = ')';
                var0 = var1 + var0;
                return var0;
            };
            var _closure1_slot46 = var0;
            var0 = function arg0() {
                var1 = arg0;
                var0 = ' { ? }';
                var0 = var1 + var0;
                return var0;
            };
            var _closure1_slot47 = var0;
            var0 = function arg0, arg1, arg2, arg3() {
                _fun6665: for (var _fun6665_ip = 0;;) switch (_fun6665_ip) {
                    case 0:
                        var5 = arg2;
                        var4 = arg3;
                        var1 = arg0;
                        var0 = ' (';
                        var1 = var1 + var0;
                        var0 = arg1;
                        var2 = var1 + var0;
                        if (var4) {
                            _fun6665_ip = 55;
                            continue _fun6665
                        }
                    case 32:
                        var6 = _closure1_slot20;
                        var3 = var6.call;
                        var1 = ', ';
                        var1 = var3.bind(var6)(var5, var1);
                        _fun6665_ip = 67;
                        continue _fun6665;
                    case 55:
                        var3 = _closure1_slot49;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var5, var4);
                    case 67:
                        var0 = ') {';
                        var0 = var2 + var0;
                        var1 = var0 + var1;
                        var0 = '}';
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var _closure1_slot48 = var0;
            var0 = function arg0, arg1() {
                _fun6666: for (var _fun6666_ip = 0;;) switch (_fun6666_ip) {
                    case 0:
                        var6 = arg0;
                        var1 = arg1;
                        var2 = var6.length;
                        var0 = 0;
                        if (!(var0 !== var2)) {
                            _fun6666_ip = 87;
                            continue _fun6666
                        }
                    case 17:
                        var0 = var1.prev;
                        var2 = '\n';
                        var3 = var2 + var0;
                        var0 = var1.base;
                        var3 = var3 + var0;
                        var5 = _closure1_slot20;
                        var4 = var5.call;
                        var0 = ',';
                        var0 = var0 + var3;
                        var0 = var4.bind(var5)(var6, var0);
                        var0 = var3 + var0;
                        var1 = var1.prev;
                        var0 = var0 + var2;
                        var0 = var0 + var1;
                        return var0;
                    case 87:
                        var0 = '';
                        return var0;
                }
            };
            var _closure1_slot49 = var0;
            var0 = function arg0, arg1() {
                _fun6667: for (var _fun6667_ip = 0;;) switch (_fun6667_ip) {
                    case 0:
                        var9 = arg0;
                        var8 = arg1;
                        var0 = _closure1_slot38;
                        var6 = undefined;
                        var16 = var0.bind(var6)(var9);
                        var0 = new Array(0);
                        if (!var16) {
                            _fun6667_ip = 101;
                            continue _fun6667
                        }
                    case 27:
                        var1 = var9.length;
                        var0.length = var1;
                        var1 = var9.length;
                        var3 = 0;
                        var1 = var3 < var1;
                        var2 = '';
                        if (!var1) {
                            _fun6667_ip = 101;
                            continue _fun6667
                        }
                    case 56:
                        var1 = _closure1_slot41;
                        var5 = var1.bind(var6)(var9, var3);
                        var1 = var3;
                        var4 = var2;
                        if (!var5) {
                            _fun6667_ip = 85;
                            continue _fun6667
                        }
                    case 75:
                        var5 = var9[var1];
                        var4 = var8.bind(var6)(var5, var9);
                    case 85:
                        var0[var1] = var4;
                        var3 = var1 + 1;
                        var1 = var9.length;
                        if (var3 < var1) {
                            _fun6667_ip = 56;
                            continue _fun6667
                        }
                    case 101:
                        var1 = _closure1_slot24;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 !== var1)) {
                            _fun6667_ip = 122;
                            continue _fun6667
                        }
                    case 116:
                        var5 = new Array(0);
                        _fun6667_ip = 131;
                        continue _fun6667;
                    case 122:
                        var1 = _closure1_slot24;
                        var5 = var1.bind(var6)(var9);
                    case 131:
                        var1 = _closure1_slot26;
                        var15 = undefined;
                        if (!var1) {
                            _fun6667_ip = 194;
                            continue _fun6667
                        }
                    case 140:
                        var10 = {};
                        var1 = var5.length;
                        var4 = 0;
                        var1 = var4 < var1;
                        var3 = '$';
                        var15 = var10;
                        if (!var1) {
                            _fun6667_ip = 194;
                            continue _fun6667
                        }
                    case 163:
                        var1 = var5[var4];
                        var11 = var3 + var1;
                        var1 = var5[var4];
                        var10[var11] = var1;
                        var4 = var4 + 1;
                        var1 = var5.length;
                        var15 = var10;
                        if (var4 < var1) {
                            _fun6667_ip = 163;
                            continue _fun6667
                        }
                    case 194:
                        var13 = var9;
                        var4 = ': ';
                        var3 = '$';
                        var1 = global;
                        for (var10 in var13)
                            case 220: {
                                case 232: var17 = var10;
                                var18 = _closure1_slot41;
                                var18 = var18.bind(var6)(var9, var17);
                                if (!var18) {
                                    _fun6667_ip = 220;
                                    continue _fun6667
                                }
                                case 248: var18 = var16;
                                if (!var18) {
                                    _fun6667_ip = 280;
                                    continue _fun6667
                                }
                                case 254: var20 = var1.String;
                                var19 = var1.Number;
                                var19 = var19.bind(var6)(var17);
                                var19 = var20.bind(var6)(var19);
                                var18 = var19 === var17;
                                case 280: if (!var18) {
                                    _fun6667_ip = 292;
                                    continue _fun6667
                                }
                                case 283: var19 = var9.length;
                                var18 = var17 < var19;
                                case 292: if (var18) {
                                    _fun6667_ip = 323;
                                    continue _fun6667
                                }
                                case 295: var19 = _closure1_slot26;
                                if (!var19) {
                                    _fun6667_ip = 320;
                                    continue _fun6667
                                }
                                case 302: var20 = var3 + var17;
                                var21 = var15[var20];
                                var20 = var1.Symbol;
                                var19 = var21 instanceof var20;
                                case 320: var18 = var19;
                                case 323: if (var18) {
                                    _fun6667_ip = 220;
                                    continue _fun6667
                                }
                                case 326: var20 = _closure1_slot18;
                                var19 = var20.call;
                                var18 = /[^\w$]/;
                                var19 = var19.bind(var20)(var18, var17);
                                var18 = var0.push;
                                if (var19) {
                                    _fun6667_ip = 391;
                                    continue _fun6667
                                }
                                case 363: var20 = var17 + var4;
                                var19 = var9[var17];
                                var19 = var8.bind(var6)(var19, var9);
                                var19 = var20 + var19;
                                var19 = var18.bind(var0)(var19);
                                _fun6667_ip = 220;
                                continue _fun6667;
                                case 391: var19 = var8.bind(var6)(var17, var9);
                                var19 = var19 + var4;
                                var17 = var9[var17];
                                var17 = var8.bind(var6)(var17, var9);
                                var17 = var19 + var17;
                                var17 = var18.bind(var0)(var17);
                                _fun6667_ip = 220;
                                continue _fun6667;
                            }
                    case 425:
                        var1 = _closure1_slot24;
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun6667_ip = 539;
                            continue _fun6667
                        }
                    case 436:
                        var1 = var5.length;
                        var4 = 0;
                        var1 = var4 < var1;
                        var3 = '[';
                        var2 = ']: ';
                        if (!var1) {
                            _fun6667_ip = 539;
                            continue _fun6667
                        }
                    case 460:
                        var11 = _closure1_slot28;
                        var10 = var11.call;
                        var1 = var5[var4];
                        var1 = var10.bind(var11)(var9, var1);
                        if (!var1) {
                            _fun6667_ip = 527;
                            continue _fun6667
                        }
                    case 482:
                        var10 = var0.push;
                        var1 = var5[var4];
                        var1 = var8.bind(var6)(var1);
                        var1 = var3 + var1;
                        var11 = var5[var4];
                        var11 = var9[var11];
                        var11 = var8.bind(var6)(var11, var9);
                        var1 = var1 + var2;
                        var1 = var1 + var11;
                        var1 = var10.bind(var0)(var1);
                    case 527:
                        var4 = var4 + 1;
                        var1 = var5.length;
                        if (var4 < var1) {
                            _fun6667_ip = 460;
                            continue _fun6667
                        }
                    case 539:
                        return var0;
                }
            };
            var _closure1_slot50 = var0;
            var1 = global;
            var0 = var1.Map;
            var4 = 'function';
            var0 = typeof var0;
            var0 = var4 === var0;
            if (!var0) {
                _fun6650_ip = 208;
                continue _fun6650
            }
        case 197:
            var3 = var1.Map;
            var0 = var3.prototype;
        case 208:
            var3 = var1.Object;
            var5 = var3.getOwnPropertyDescriptor;
            var3 = null;
            var9 = null;
            if (!var5) {
                _fun6650_ip = 265;
                continue _fun6650
            }
        case 227:
            var9 = null;
            if (!var0) {
                _fun6650_ip = 265;
                continue _fun6650
            }
        case 232:
            var12 = var1.Object;
            var11 = var12.getOwnPropertyDescriptor;
            var5 = var1.Map;
            var10 = var5.prototype;
            var5 = 'size';
            var9 = var11.bind(var12)(var10, var5);
        case 265:
            var5 = null;
            if (!var0) {
                _fun6650_ip = 294;
                continue _fun6650
            }
        case 270:
            var5 = null;
            if (!var9) {
                _fun6650_ip = 294;
                continue _fun6650
            }
        case 275:
            var10 = var9.get;
            var10 = typeof var10;
            var5 = null;
            if (!(var4 === var10)) {
                _fun6650_ip = 294;
                continue _fun6650
            }
        case 289:
            var5 = var9.get;
        case 294:
            var _closure1_slot3 = var5;
            if (!var0) {
                _fun6650_ip = 317;
                continue _fun6650
            }
        case 301:
            var5 = var1.Map;
            var5 = var5.prototype;
            var0 = var5.forEach;
        case 317:
            var _closure1_slot4 = var0;
            var0 = var1.Set;
            var0 = typeof var0;
            var0 = var4 === var0;
            if (!var0) {
                _fun6650_ip = 347;
                continue _fun6650
            }
        case 336:
            var5 = var1.Set;
            var0 = var5.prototype;
        case 347:
            var5 = var1.Object;
            var5 = var5.getOwnPropertyDescriptor;
            var9 = null;
            if (!var5) {
                _fun6650_ip = 402;
                continue _fun6650
            }
        case 364:
            var9 = null;
            if (!var0) {
                _fun6650_ip = 402;
                continue _fun6650
            }
        case 369:
            var12 = var1.Object;
            var11 = var12.getOwnPropertyDescriptor;
            var5 = var1.Set;
            var10 = var5.prototype;
            var5 = 'size';
            var9 = var11.bind(var12)(var10, var5);
        case 402:
            var5 = null;
            if (!var0) {
                _fun6650_ip = 431;
                continue _fun6650
            }
        case 407:
            var5 = null;
            if (!var9) {
                _fun6650_ip = 431;
                continue _fun6650
            }
        case 412:
            var10 = var9.get;
            var10 = typeof var10;
            var5 = null;
            if (!(var4 === var10)) {
                _fun6650_ip = 431;
                continue _fun6650
            }
        case 426:
            var5 = var9.get;
        case 431:
            var _closure1_slot5 = var5;
            if (!var0) {
                _fun6650_ip = 454;
                continue _fun6650
            }
        case 438:
            var5 = var1.Set;
            var5 = var5.prototype;
            var0 = var5.forEach;
        case 454:
            var _closure1_slot6 = var0;
            var0 = var1.WeakMap;
            var5 = typeof var0;
            var0 = null;
            if (!(var4 === var5)) {
                _fun6650_ip = 505;
                continue _fun6650
            }
        case 473:
            var5 = var1.WeakMap;
            var5 = var5.prototype;
            var0 = null;
            if (!var5) {
                _fun6650_ip = 505;
                continue _fun6650
            }
        case 489:
            var5 = var1.WeakMap;
            var5 = var5.prototype;
            var0 = var5.has;
        case 505:
            var _closure1_slot7 = var0;
            var0 = var1.WeakSet;
            var5 = typeof var0;
            var0 = null;
            if (!(var4 === var5)) {
                _fun6650_ip = 556;
                continue _fun6650
            }
        case 524:
            var5 = var1.WeakSet;
            var5 = var5.prototype;
            var0 = null;
            if (!var5) {
                _fun6650_ip = 556;
                continue _fun6650
            }
        case 540:
            var5 = var1.WeakSet;
            var5 = var5.prototype;
            var0 = var5.has;
        case 556:
            var _closure1_slot8 = var0;
            var0 = var1.WeakRef;
            var5 = typeof var0;
            var0 = null;
            if (!(var4 === var5)) {
                _fun6650_ip = 608;
                continue _fun6650
            }
        case 575:
            var5 = var1.WeakRef;
            var5 = var5.prototype;
            var0 = null;
            if (!var5) {
                _fun6650_ip = 608;
                continue _fun6650
            }
        case 591:
            var5 = var1.WeakRef;
            var5 = var5.prototype;
            var0 = var5.deref;
        case 608:
            var _closure1_slot9 = var0;
            var0 = var1.Boolean;
            var0 = var0.prototype;
            var0 = var0.valueOf;
            var _closure1_slot10 = var0;
            var0 = var1.Object;
            var0 = var0.prototype;
            var0 = var0.toString;
            var _closure1_slot11 = var0;
            var0 = var1.Function;
            var0 = var0.prototype;
            var0 = var0.toString;
            var _closure1_slot12 = var0;
            var0 = var1.String;
            var0 = var0.prototype;
            var0 = var0.match;
            var _closure1_slot13 = var0;
            var0 = var1.String;
            var0 = var0.prototype;
            var0 = var0.slice;
            var _closure1_slot14 = var0;
            var0 = var1.String;
            var0 = var0.prototype;
            var0 = var0.replace;
            var _closure1_slot15 = var0;
            var0 = var1.String;
            var0 = var0.prototype;
            var0 = var0.toUpperCase;
            var _closure1_slot16 = var0;
            var0 = var1.String;
            var0 = var0.prototype;
            var0 = var0.toLowerCase;
            var _closure1_slot17 = var0;
            var0 = var1.RegExp;
            var0 = var0.prototype;
            var0 = var0.test;
            var _closure1_slot18 = var0;
            var0 = var1.Array;
            var0 = var0.prototype;
            var0 = var0.concat;
            var _closure1_slot19 = var0;
            var0 = var1.Array;
            var0 = var0.prototype;
            var0 = var0.join;
            var _closure1_slot20 = var0;
            var0 = var1.Array;
            var0 = var0.prototype;
            var0 = var0.slice;
            var _closure1_slot21 = var0;
            var0 = var1.Math;
            var0 = var0.floor;
            var _closure1_slot22 = var0;
            var0 = var1.BigInt;
            var5 = typeof var0;
            var0 = null;
            if (!(var4 === var5)) {
                _fun6650_ip = 902;
                continue _fun6650
            }
        case 886:
            var5 = var1.BigInt;
            var5 = var5.prototype;
            var0 = var5.valueOf;
        case 902:
            var _closure1_slot23 = var0;
            var0 = var1.Object;
            var0 = var0.getOwnPropertySymbols;
            var _closure1_slot24 = var0;
            var0 = var1.Symbol;
            var5 = typeof var0;
            var0 = null;
            if (!(var4 === var5)) {
                _fun6650_ip = 977;
                continue _fun6650
            }
        case 936:
            var5 = var1.Symbol;
            var5 = var5.iterator;
            var9 = 'symbol';
            var5 = typeof var5;
            var0 = null;
            if (!(var9 === var5)) {
                _fun6650_ip = 977;
                continue _fun6650
            }
        case 961:
            var5 = var1.Symbol;
            var5 = var5.prototype;
            var0 = var5.toString;
        case 977:
            var _closure1_slot25 = var0;
            var0 = var1.Symbol;
            var0 = typeof var0;
            var0 = var4 === var0;
            if (!var0) {
                _fun6650_ip = 1019;
                continue _fun6650
            }
        case 996:
            var5 = var1.Symbol;
            var5 = var5.iterator;
            var9 = 'object';
            var5 = typeof var5;
            var0 = var9 === var5;
        case 1019:
            var _closure1_slot26 = var0;
            var0 = var1.Symbol;
            var5 = typeof var0;
            var0 = null;
            if (!(var4 === var5)) {
                _fun6650_ip = 1078;
                continue _fun6650
            }
        case 1037:
            var5 = var1.Symbol;
            var5 = var5.toStringTag;
            var0 = null;
            if (!var5) {
                _fun6650_ip = 1078;
                continue _fun6650
            }
        case 1054:
            var5 = var1.Symbol;
            var5 = var5.toStringTag;
            var5 = var1.Symbol;
            var0 = var5.toStringTag;
        case 1078:
            var _closure1_slot27 = var0;
            var0 = var1.Object;
            var0 = var0.prototype;
            var0 = var0.propertyIsEnumerable;
            var _closure1_slot28 = var0;
            var0 = var1.Reflect;
            var0 = typeof var0;
            if (!(var4 !== var0)) {
                _fun6650_ip = 1129;
                continue _fun6650
            }
        case 1115:
            var0 = var1.Object;
            var0 = var0.getPrototypeOf;
            _fun6650_ip = 1141;
            continue _fun6650;
        case 1129:
            var4 = var1.Reflect;
            var0 = var4.getPrototypeOf;
        case 1141:
            if (var0) {
                _fun6650_ip = 1179;
                continue _fun6650
            }
        case 1144:
            var4 = new Array(0);
            var9 = var4.__proto__;
            var4 = var1.Array;
            var5 = var4.prototype;
            var4 = null;
            if (!(var9 === var5)) {
                _fun6650_ip = 1176;
                continue _fun6650
            }
        case 1171:
            var4 = function(arg0) { // Environment: var2
                var0 = arg0;
                var0 = var0.__proto__;
                return var0;
            };
        case 1176:
            var0 = var4;
        case 1179:
            var _closure1_slot29 = var0;
            var5 = 0;
            var4 = var7[var5];
            var0 = undefined;
            var4 = var6.bind(var0)(var4);
            var4 = var4.custom;
            var8 = var8.bind(var0)(var4);
            var4 = null;
            if (!var8) {
                _fun6650_ip = 1227;
                continue _fun6650
            }
        case 1212:
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var4 = var5.custom;
        case 1227:
            var _closure1_slot30 = var4;
            var4 = Object.create(var3);
            var5 = '"';
            var4.double = var5;
            var5 = "'";
            var4.single = var5;
            var _closure1_slot31 = var4;
            var3 = Object.create(var3);
            var4 = /(["\\])/g;
            var3.double = var4;
            var4 = /(['\\])/g;
            var3.single = var4;
            var _closure1_slot32 = var3;
            var4 = function arg0, arg1, arg2, arg3() {
                _fun6669: for (var _fun6669_ip = 0;;) switch (_fun6669_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = arg1;
                        var11 = arg2;
                        var _closure2_slot0 = var1;
                        var _closure2_slot1 = var11;
                        var0 = arg3;
                        var _closure2_slot2 = var0;
                        var7 = function arg0, arg1, arg2() {
                            _fun6670: for (var _fun6670_ip = 0;;) switch (_fun6670_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = arg1;
                                    if (!var2) {
                                        _fun6670_ip = 47;
                                        continue _fun6670
                                    }
                                case 9:
                                    var4 = _closure1_slot21;
                                    var3 = var4.call;
                                    var1 = _closure2_slot2;
                                    var1 = var3.bind(var4)(var1);
                                    _closure2_slot2 = var1;
                                    var0 = var1.push;
                                    var0 = var0.bind(var1)(var2);
                                case 47:
                                    var0 = arg2;
                                    if (var0) {
                                        _fun6670_ip = 93;
                                        continue _fun6670
                                    }
                                case 53:
                                    var4 = _closure1_slot51;
                                    var10 = _closure2_slot3;
                                    var2 = _closure2_slot1;
                                    var1 = 1;
                                    var9 = var2 + var1;
                                    var8 = _closure2_slot2;
                                    var12 = undefined;
                                    var11 = var5;
                                    var0 = var12[var4](var11, var10, var9, var8, var7);
                                    return var0;
                                case 93:
                                    var4 = {};
                                    var1 = _closure2_slot3;
                                    var1 = var1.depth;
                                    var4.depth = var1;
                                    var7 = _closure1_slot41;
                                    var6 = _closure2_slot3;
                                    var3 = undefined;
                                    var2 = 'quoteStyle';
                                    var2 = var7.bind(var3)(var6, var2);
                                    if (!var2) {
                                        _fun6670_ip = 155;
                                        continue _fun6670
                                    }
                                case 139:
                                    var2 = _closure2_slot3;
                                    var2 = var2.quoteStyle;
                                    var4.quoteStyle = var2;
                                case 155:
                                    var2 = _closure1_slot51;
                                    var6 = _closure2_slot1;
                                    var1 = 1;
                                    var9 = var6 + var1;
                                    var8 = _closure2_slot2;
                                    var12 = undefined;
                                    var11 = var5;
                                    var10 = var4;
                                    var0 = var12[var2](var11, var10, var9, var8, var7);
                                    return var0;
                            }
                        };
                        var _closure2_slot6 = var7;
                        if (var2) {
                            _fun6669_ip = 40;
                            continue _fun6669
                        }
                    case 38:
                        var2 = {};
                    case 40:
                        var _closure2_slot3 = var2;
                        var6 = _closure1_slot41;
                        var3 = undefined;
                        var5 = 'quoteStyle';
                        var5 = var6.bind(var3)(var2, var5);
                        if (!var5) {
                            _fun6669_ip = 125;
                            continue _fun6669
                        }
                    case 66:
                        var8 = _closure1_slot41;
                        var6 = _closure1_slot31;
                        var5 = var2.quoteStyle;
                        var5 = var8.bind(var3)(var6, var5);
                        if (var5) {
                            _fun6669_ip = 125;
                            continue _fun6669
                        }
                    case 89:
                        var5 = global;
                        var8 = var5.TypeError;
                        var5 = var8.prototype;
                        var6 = Object.create(var5, {
                            constructor: {
                                value: var8
                            }
                        });
                        var27 = 'option "quoteStyle" must be "single" or "double"';
                        var28 = var6;
                        var5 = new var28[var8](var27, var26);
                        var5 = var5 instanceof Object ? var5 : var6;
                        throw var5;
                    case 125:
                        var6 = _closure1_slot41;
                        var5 = 'maxStringLength';
                        var5 = var6.bind(var3)(var2, var5);
                        if (!var5) {
                            _fun6669_ip = 217;
                            continue _fun6669
                        }
                    case 142:
                        var5 = var2.maxStringLength;
                        var6 = 'number';
                        var5 = typeof var5;
                        if (!(var6 !== var5)) {
                            _fun6669_ip = 173;
                            continue _fun6669
                        }
                    case 159:
                        var6 = var2.maxStringLength;
                        var5 = null;
                        var5 = var5 !== var6;
                        _fun6669_ip = 211;
                        continue _fun6669;
                    case 173:
                        var8 = var2.maxStringLength;
                        var6 = 0;
                        var6 = var8 < var6;
                        if (!var6) {
                            _fun6669_ip = 208;
                            continue _fun6669
                        }
                    case 188:
                        var9 = var2.maxStringLength;
                        var8 = inf;
                        var6 = var9 !== var8;
                    case 208:
                        var5 = var6;
                    case 211:
                        if (var5) {
                            _fun6669_ip = 3799;
                            continue _fun6669
                        }
                    case 217:
                        var6 = _closure1_slot41;
                        var5 = 'customInspect';
                        var5 = var6.bind(var3)(var2, var5);
                        var13 = !var5;
                        if (var13) {
                            _fun6669_ip = 243;
                            continue _fun6669
                        }
                    case 237:
                        var13 = var2.customInspect;
                    case 243:
                        var6 = 'boolean';
                        var5 = typeof var13;
                        if (!(var6 !== var5)) {
                            _fun6669_ip = 265;
                            continue _fun6669
                        }
                    case 254:
                        var5 = 'symbol';
                        if (!(var5 === var13)) {
                            _fun6669_ip = 3763;
                            continue _fun6669
                        }
                    case 265:
                        var8 = _closure1_slot41;
                        var5 = 'indent';
                        var5 = var8.bind(var3)(var2, var5);
                        if (!var5) {
                            _fun6669_ip = 387;
                            continue _fun6669
                        }
                    case 282:
                        var8 = var2.indent;
                        var5 = null;
                        if (!(var5 !== var8)) {
                            _fun6669_ip = 387;
                            continue _fun6669
                        }
                    case 294:
                        var8 = var2.indent;
                        var5 = '\t';
                        if (!(var5 !== var8)) {
                            _fun6669_ip = 387;
                            continue _fun6669
                        }
                    case 308:
                        var5 = global;
                        var10 = var5.parseInt;
                        var9 = var2.indent;
                        var8 = 10;
                        var9 = var10.bind(var3)(var9, var8);
                        var8 = var2.indent;
                        if (!(var9 === var8)) {
                            _fun6669_ip = 353;
                            continue _fun6669
                        }
                    case 341:
                        var9 = var2.indent;
                        var8 = 0;
                        if (!(!(var9 > var8))) {
                            _fun6669_ip = 387;
                            continue _fun6669
                        }
                    case 353:
                        var9 = var5.TypeError;
                        var5 = var9.prototype;
                        var8 = Object.create(var5, {
                            constructor: {
                                value: var9
                            }
                        });
                        var27 = 'option "indent" must be "\\t", an integer > 0, or `null`';
                        var28 = var8;
                        var5 = new var28[var9](var27, var26);
                        var5 = var5 instanceof Object ? var5 : var8;
                        throw var5;
                    case 387:
                        var8 = _closure1_slot41;
                        var5 = 'numericSeparator';
                        var5 = var8.bind(var3)(var2, var5);
                        if (!var5) {
                            _fun6669_ip = 420;
                            continue _fun6669
                        }
                    case 404:
                        var5 = var2.numericSeparator;
                        var5 = typeof var5;
                        if (!(var6 === var5)) {
                            _fun6669_ip = 3727;
                            continue _fun6669
                        }
                    case 420:
                        var5 = var2.numericSeparator;
                        if (!(var3 !== var1)) {
                            _fun6669_ip = 3721;
                            continue _fun6669
                        }
                    case 433:
                        var12 = null;
                        if (!(var12 !== var1)) {
                            _fun6669_ip = 3715;
                            continue _fun6669
                        }
                    case 442:
                        var8 = typeof var1;
                        if (!(var6 !== var8)) {
                            _fun6669_ip = 3702;
                            continue _fun6669
                        }
                    case 452:
                        var15 = 'string';
                        if (!(var15 !== var8)) {
                            _fun6669_ip = 3690;
                            continue _fun6669
                        }
                    case 463:
                        var14 = 'number';
                        if (!(var14 !== var8)) {
                            _fun6669_ip = 3621;
                            continue _fun6669
                        }
                    case 474:
                        var6 = 'bigint';
                        if (!(var6 !== var8)) {
                            _fun6669_ip = 3582;
                            continue _fun6669
                        }
                    case 485:
                        var6 = var2.depth;
                        var10 = 5;
                        if (!(var3 !== var6)) {
                            _fun6669_ip = 504;
                            continue _fun6669
                        }
                    case 498:
                        var10 = var2.depth;
                    case 504:
                        if (!(var3 === var11)) {
                            _fun6669_ip = 516;
                            continue _fun6669
                        }
                    case 508:
                        var6 = 0;
                        _closure2_slot1 = var6;
                        var11 = 0;
                    case 516:
                        if (!(var11 >= var10)) {
                            _fun6669_ip = 537;
                            continue _fun6669
                        }
                    case 520:
                        var6 = 0;
                        if (!(var10 > var6)) {
                            _fun6669_ip = 537;
                            continue _fun6669
                        }
                    case 526:
                        var6 = 'object';
                        if (!(var6 !== var8)) {
                            _fun6669_ip = 3556;
                            continue _fun6669
                        }
                    case 537:
                        var6 = var2.indent;
                        var18 = '\t';
                        if (!(var18 !== var6)) {
                            _fun6669_ip = 630;
                            continue _fun6669
                        }
                    case 551:
                        var6 = var2.indent;
                        var9 = typeof var6;
                        var6 = null;
                        if (!(var14 === var9)) {
                            _fun6669_ip = 680;
                            continue _fun6669
                        }
                    case 566:
                        var14 = var2.indent;
                        var9 = 0;
                        var9 = var14 > var9;
                        var6 = null;
                        if (!var9) {
                            _fun6669_ip = 680;
                            continue _fun6669
                        }
                    case 583:
                        var17 = _closure1_slot20;
                        var16 = var17.call;
                        var9 = global;
                        var14 = var9.Array;
                        var19 = var2.indent;
                        var9 = 1;
                        var9 = var19 + var9;
                        var14 = var14.bind(var3)(var9);
                        var9 = ' ';
                        var18 = var16.bind(var17)(var14, var9);
                    case 630:
                        var9 = {};
                        var9.base = var18;
                        var17 = _closure1_slot20;
                        var16 = var17.call;
                        var14 = global;
                        var19 = var14.Array;
                        var14 = 1;
                        var14 = var11 + var14;
                        var14 = var19.bind(var3)(var14);
                        var14 = var16.bind(var17)(var14, var18);
                        var9.prev = var14;
                        var6 = var9;
                    case 680:
                        var9 = _closure2_slot2;
                        if (!(var3 !== var9)) {
                            _fun6669_ip = 716;
                            continue _fun6669
                        }
                    case 688:
                        var14 = _closure1_slot43;
                        var9 = _closure2_slot2;
                        var14 = var14.bind(var3)(var9, var1);
                        var9 = 0;
                        if (!(var14 >= var9)) {
                            _fun6669_ip = 724;
                            continue _fun6669
                        }
                    case 708:
                        var9 = '[Circular]';
                        return var9;
                    case 716:
                        var9 = new Array(0);
                        _closure2_slot2 = var9;
                    case 724:
                        var18 = 'function';
                        if (!(var18 === var8)) {
                            _fun6669_ip = 932;
                            continue _fun6669
                        }
                    case 735:
                        var9 = _closure1_slot39;
                        var9 = var9.bind(var3)(var1);
                        if (var9) {
                            _fun6669_ip = 932;
                            continue _fun6669
                        }
                    case 750:
                        var9 = var1.name;
                        if (var9) {
                            _fun6669_ip = 815;
                            continue _fun6669
                        }
                    case 758:
                        var17 = _closure1_slot13;
                        var16 = var17.call;
                        var14 = _closure1_slot12;
                        var9 = var14.call;
                        var14 = var9.bind(var14)(var1);
                        var9 = /^function\s*([\w$]+)/;
                        var14 = var16.bind(var17)(var14, var9);
                        var12 = null;
                        if (!var14) {
                            _fun6669_ip = 820;
                            continue _fun6669
                        }
                    case 806:
                        var9 = 1;
                        var12 = var14[var9];
                        _fun6669_ip = 820;
                        continue _fun6669;
                    case 815:
                        var12 = var1.name;
                    case 820:
                        var9 = _closure1_slot50;
                        var19 = var9.bind(var3)(var1, var7);
                        var14 = ' (anonymous)';
                        if (!var12) {
                            _fun6669_ip = 849;
                            continue _fun6669
                        }
                    case 839:
                        var9 = ': ';
                        var14 = var9 + var12;
                    case 849:
                        var12 = var19.length;
                        var9 = 0;
                        var9 = var12 > var9;
                        var12 = '';
                        if (!var9) {
                            _fun6669_ip = 908;
                            continue _fun6669
                        }
                    case 867:
                        var17 = _closure1_slot20;
                        var16 = var17.call;
                        var9 = ', ';
                        var16 = var16.bind(var17)(var19, var9);
                        var9 = ' { ';
                        var16 = var9 + var16;
                        var9 = ' }';
                        var12 = var16 + var9;
                    case 908:
                        var9 = '[Function';
                        var14 = var9 + var14;
                        var9 = ']';
                        var9 = var14 + var9;
                        var9 = var9 + var12;
                        return var9;
                    case 932:
                        var9 = _closure1_slot40;
                        var9 = var9.bind(var3)(var1);
                        if (var9) {
                            _fun6669_ip = 3452;
                            continue _fun6669
                        }
                    case 947:
                        var9 = false;
                        if (!var1) {
                            _fun6669_ip = 1028;
                            continue _fun6669
                        }
                    case 952:
                        var12 = 'object';
                        var9 = false;
                        if (!(var12 === var8)) {
                            _fun6669_ip = 1028;
                            continue _fun6669
                        }
                    case 962:
                        var12 = global;
                        var16 = var12.HTMLElement;
                        var17 = 'undefined';
                        var16 = typeof var16;
                        if (!(var17 !== var16)) {
                            _fun6669_ip = 996;
                            continue _fun6669
                        }
                    case 981:
                        var12 = var12.HTMLElement;
                        var12 = var1 instanceof var12;
                        var9 = true;
                        if (var12) {
                            _fun6669_ip = 1028;
                            continue _fun6669
                        }
                    case 996:
                        var12 = var1.nodeName;
                        var12 = typeof var12;
                        var12 = var15 === var12;
                        if (!var12) {
                            _fun6669_ip = 1025;
                            continue _fun6669
                        }
                    case 1012:
                        var15 = var1.getAttribute;
                        var15 = typeof var15;
                        var12 = var18 === var15;
                    case 1025:
                        var9 = var12;
                    case 1028:
                        if (var9) {
                            _fun6669_ip = 3200;
                            continue _fun6669
                        }
                    case 1034:
                        var9 = _closure1_slot38;
                        var9 = var9.bind(var3)(var1);
                        if (var9) {
                            _fun6669_ip = 3031;
                            continue _fun6669
                        }
                    case 1049:
                        var9 = _closure1_slot42;
                        var12 = var9.bind(var3)(var1);
                        var9 = '[object Error]';
                        var9 = var9 === var12;
                        if (!var9) {
                            _fun6669_ip = 1078;
                            continue _fun6669
                        }
                    case 1069:
                        var12 = _closure1_slot37;
                        var9 = var12.bind(var3)(var1);
                    case 1078:
                        if (var9) {
                            _fun6669_ip = 2751;
                            continue _fun6669
                        }
                    case 1084:
                        var16 = 'object';
                        if (!(var16 === var8)) {
                            _fun6669_ip = 1166;
                            continue _fun6669
                        }
                    case 1092:
                        if (!var13) {
                            _fun6669_ip = 1166;
                            continue _fun6669
                        }
                    case 1095:
                        var9 = _closure1_slot30;
                        if (!var9) {
                            _fun6669_ip = 1142;
                            continue _fun6669
                        }
                    case 1102:
                        var9 = _closure1_slot30;
                        var9 = var1[var9];
                        var9 = typeof var9;
                        if (!(var18 === var9)) {
                            _fun6669_ip = 1142;
                            continue _fun6669
                        }
                    case 1117:
                        var15 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var12 = 0;
                        var9 = var9[var12];
                        var9 = var15.bind(var3)(var9);
                        if (var9) {
                            _fun6669_ip = 2715;
                            continue _fun6669
                        }
                    case 1142:
                        var9 = 'symbol';
                        if (!(var9 !== var13)) {
                            _fun6669_ip = 1166;
                            continue _fun6669
                        }
                    case 1150:
                        var9 = var1.inspect;
                        var9 = typeof var9;
                        if (!(var18 !== var9)) {
                            _fun6669_ip = 2703;
                            continue _fun6669
                        }
                    case 1166:
                        var13 = var1;
                        var15 = _closure1_slot3;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1262;
                            continue _fun6669
                        }
                    case 1178:
                        var15 = var13;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1262;
                            continue _fun6669
                        }
                    case 1186:
                        var15 = var13;
                        var15 = typeof var15;
                        var9 = false;
                        if (!(var16 === var15)) {
                            _fun6669_ip = 1262;
                            continue _fun6669
                        }
                    case 1198: // try_start_4
                        var19 = _closure1_slot3;
                        var17 = var19.call;
                        var15 = var13;
                        var15 = var17.bind(var19)(var15);
                    case 1215: // try_start_0
                        var19 = _closure1_slot5;
                        var17 = var19.call;
                        var15 = var13;
                        var15 = var17.bind(var19)(var15);
                    case 1232: // try_end0
                        var15 = var13;
                        var13 = global;
                        var13 = var13.Map;
                        var13 = var15 instanceof var13;
                    case 1247: // try_end4
                        var9 = var13;
                        _fun6669_ip = 1262;
                        continue _fun6669;
                    case 1252: // try_start_5 // catch_target0
                        CatchBlockStart(arg_register = 13);
                    case 1254: // try_end5
                        var9 = true;
                        _fun6669_ip = 1262;
                        continue _fun6669;
                    case 1258: // catch_target4 // catch_target5
                        CatchBlockStart(arg_register = 13);
                        var9 = false;
                    case 1262:
                        if (var9) {
                            _fun6669_ip = 2632;
                            continue _fun6669
                        }
                    case 1268:
                        var13 = var1;
                        var15 = _closure1_slot5;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1364;
                            continue _fun6669
                        }
                    case 1280:
                        var15 = var13;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1364;
                            continue _fun6669
                        }
                    case 1288:
                        var15 = var13;
                        var15 = typeof var15;
                        var9 = false;
                        if (!(var16 === var15)) {
                            _fun6669_ip = 1364;
                            continue _fun6669
                        }
                    case 1300: // try_start_6
                        var19 = _closure1_slot5;
                        var17 = var19.call;
                        var15 = var13;
                        var15 = var17.bind(var19)(var15);
                    case 1317: // try_start_1
                        var19 = _closure1_slot3;
                        var17 = var19.call;
                        var15 = var13;
                        var15 = var17.bind(var19)(var15);
                    case 1334: // try_end1
                        var15 = var13;
                        var13 = global;
                        var13 = var13.Set;
                        var13 = var15 instanceof var13;
                    case 1349: // try_end6
                        var9 = var13;
                        _fun6669_ip = 1364;
                        continue _fun6669;
                    case 1354: // try_start_7 // catch_target1
                        CatchBlockStart(arg_register = 13);
                    case 1356: // try_end7
                        var9 = true;
                        _fun6669_ip = 1364;
                        continue _fun6669;
                    case 1360: // catch_target6 // catch_target7
                        CatchBlockStart(arg_register = 13);
                        var9 = false;
                    case 1364:
                        if (var9) {
                            _fun6669_ip = 2561;
                            continue _fun6669
                        }
                    case 1370:
                        var13 = var1;
                        var15 = _closure1_slot7;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1476;
                            continue _fun6669
                        }
                    case 1382:
                        var15 = var13;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1476;
                            continue _fun6669
                        }
                    case 1390:
                        var15 = var13;
                        var15 = typeof var15;
                        var9 = false;
                        if (!(var16 === var15)) {
                            _fun6669_ip = 1476;
                            continue _fun6669
                        }
                    case 1402: // try_start_8
                        var20 = _closure1_slot7;
                        var19 = var20.call;
                        var17 = var13;
                        var15 = _closure1_slot7;
                        var15 = var19.bind(var20)(var17, var15);
                    case 1424: // try_start_2
                        var20 = _closure1_slot8;
                        var19 = var20.call;
                        var17 = var13;
                        var15 = _closure1_slot8;
                        var15 = var19.bind(var20)(var17, var15);
                    case 1446: // try_end2
                        var15 = var13;
                        var13 = global;
                        var13 = var13.WeakMap;
                        var13 = var15 instanceof var13;
                    case 1461: // try_end8
                        var9 = var13;
                        _fun6669_ip = 1476;
                        continue _fun6669;
                    case 1466: // try_start_9 // catch_target2
                        CatchBlockStart(arg_register = 13);
                    case 1468: // try_end9
                        var9 = true;
                        _fun6669_ip = 1476;
                        continue _fun6669;
                    case 1472: // catch_target8 // catch_target9
                        CatchBlockStart(arg_register = 13);
                        var9 = false;
                    case 1476:
                        if (var9) {
                            _fun6669_ip = 2546;
                            continue _fun6669
                        }
                    case 1482:
                        var13 = var1;
                        var15 = _closure1_slot8;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1588;
                            continue _fun6669
                        }
                    case 1494:
                        var15 = var13;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1588;
                            continue _fun6669
                        }
                    case 1502:
                        var15 = var13;
                        var15 = typeof var15;
                        var9 = false;
                        if (!(var16 === var15)) {
                            _fun6669_ip = 1588;
                            continue _fun6669
                        }
                    case 1514: // try_start_10
                        var20 = _closure1_slot8;
                        var19 = var20.call;
                        var17 = var13;
                        var15 = _closure1_slot8;
                        var15 = var19.bind(var20)(var17, var15);
                    case 1536: // try_start_3
                        var20 = _closure1_slot7;
                        var19 = var20.call;
                        var17 = var13;
                        var15 = _closure1_slot7;
                        var15 = var19.bind(var20)(var17, var15);
                    case 1558: // try_end3
                        var15 = var13;
                        var13 = global;
                        var13 = var13.WeakSet;
                        var13 = var15 instanceof var13;
                    case 1573: // try_end10
                        var9 = var13;
                        _fun6669_ip = 1588;
                        continue _fun6669;
                    case 1578: // try_start_11 // catch_target3
                        CatchBlockStart(arg_register = 13);
                    case 1580: // try_end11
                        var9 = true;
                        _fun6669_ip = 1588;
                        continue _fun6669;
                    case 1584: // catch_target10 // catch_target11
                        CatchBlockStart(arg_register = 13);
                        var9 = false;
                    case 1588:
                        if (var9) {
                            _fun6669_ip = 2531;
                            continue _fun6669
                        }
                    case 1594:
                        var13 = var1;
                        var15 = _closure1_slot9;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1648;
                            continue _fun6669
                        }
                    case 1606:
                        var15 = var13;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1648;
                            continue _fun6669
                        }
                    case 1614:
                        var15 = var13;
                        var15 = typeof var15;
                        var9 = false;
                        if (!(var16 === var15)) {
                            _fun6669_ip = 1648;
                            continue _fun6669
                        }
                    case 1626: // try_start_12
                        var17 = _closure1_slot9;
                        var15 = var17.call;
                        var13 = var15.bind(var17)(var13);
                    case 1640: // try_end12
                        var9 = true;
                        _fun6669_ip = 1648;
                        continue _fun6669;
                    case 1644: // catch_target12
                        CatchBlockStart(arg_register = 13);
                        var9 = false;
                    case 1648:
                        if (var9) {
                            _fun6669_ip = 2516;
                            continue _fun6669
                        }
                    case 1654:
                        var9 = _closure1_slot42;
                        var13 = var9.bind(var3)(var1);
                        var9 = '[object Number]';
                        var9 = var9 === var13;
                        if (!var9) {
                            _fun6669_ip = 1683;
                            continue _fun6669
                        }
                    case 1674:
                        var13 = _closure1_slot37;
                        var9 = var13.bind(var3)(var1);
                    case 1683:
                        if (var9) {
                            _fun6669_ip = 2487;
                            continue _fun6669
                        }
                    case 1689:
                        var13 = var1;
                        var9 = false;
                        if (!var1) {
                            _fun6669_ip = 1740;
                            continue _fun6669
                        }
                    case 1697:
                        var15 = var13;
                        var15 = typeof var15;
                        var9 = false;
                        if (!(var16 === var15)) {
                            _fun6669_ip = 1740;
                            continue _fun6669
                        }
                    case 1709:
                        var15 = _closure1_slot23;
                        var9 = false;
                        if (!var15) {
                            _fun6669_ip = 1740;
                            continue _fun6669
                        }
                    case 1718: // try_start_13
                        var16 = _closure1_slot23;
                        var15 = var16.call;
                        var13 = var15.bind(var16)(var13);
                    case 1732: // try_end13
                        var9 = true;
                        _fun6669_ip = 1740;
                        continue _fun6669;
                    case 1736: // catch_target13
                        CatchBlockStart(arg_register = 13);
                        var9 = false;
                    case 1740:
                        if (var9) {
                            _fun6669_ip = 2457;
                            continue _fun6669
                        }
                    case 1746:
                        var9 = _closure1_slot42;
                        var13 = var9.bind(var3)(var1);
                        var9 = '[object Boolean]';
                        var9 = var9 === var13;
                        if (!var9) {
                            _fun6669_ip = 1775;
                            continue _fun6669
                        }
                    case 1766:
                        var13 = _closure1_slot37;
                        var9 = var13.bind(var3)(var1);
                    case 1775:
                        if (var9) {
                            _fun6669_ip = 2432;
                            continue _fun6669
                        }
                    case 1781:
                        var9 = _closure1_slot42;
                        var13 = var9.bind(var3)(var1);
                        var9 = '[object String]';
                        var13 = var9 === var13;
                        if (!var13) {
                            _fun6669_ip = 1810;
                            continue _fun6669
                        }
                    case 1801:
                        var9 = _closure1_slot37;
                        var13 = var9.bind(var3)(var1);
                    case 1810:
                        var9 = global;
                        if (var13) {
                            _fun6669_ip = 2405;
                            continue _fun6669
                        }
                    case 1818:
                        var13 = var9.window;
                        var15 = 'undefined';
                        var13 = typeof var13;
                        if (!(var15 !== var13)) {
                            _fun6669_ip = 1847;
                            continue _fun6669
                        }
                    case 1834:
                        var13 = var9.window;
                        if (!(var1 !== var13)) {
                            _fun6669_ip = 2397;
                            continue _fun6669
                        }
                    case 1847:
                        var13 = var9.globalThis;
                        var13 = typeof var13;
                        if (!(var15 !== var13)) {
                            _fun6669_ip = 1873;
                            continue _fun6669
                        }
                    case 1860:
                        var13 = var9.globalThis;
                        if (!(var1 !== var13)) {
                            _fun6669_ip = 2389;
                            continue _fun6669
                        }
                    case 1873:
                        var13 = _closure1_slot0;
                        if (!(var3 !== var13)) {
                            _fun6669_ip = 1892;
                            continue _fun6669
                        }
                    case 1881:
                        var13 = _closure1_slot0;
                        if (!(var1 !== var13)) {
                            _fun6669_ip = 2389;
                            continue _fun6669
                        }
                    case 1892:
                        var13 = _closure1_slot42;
                        var15 = var13.bind(var3)(var1);
                        var13 = '[object Date]';
                        var13 = var13 === var15;
                        if (!var13) {
                            _fun6669_ip = 1921;
                            continue _fun6669
                        }
                    case 1912:
                        var15 = _closure1_slot37;
                        var13 = var15.bind(var3)(var1);
                    case 1921:
                        if (var13) {
                            _fun6669_ip = 2376;
                            continue _fun6669
                        }
                    case 1927:
                        var13 = _closure1_slot39;
                        var13 = var13.bind(var3)(var1);
                        if (var13) {
                            _fun6669_ip = 2376;
                            continue _fun6669
                        }
                    case 1942:
                        var13 = _closure1_slot50;
                        var17 = var13.bind(var3)(var1, var7);
                        var13 = _closure1_slot29;
                        if (var13) {
                            _fun6669_ip = 1989;
                            continue _fun6669
                        }
                    case 1959:
                        var13 = var9.Object;
                        var16 = var1 instanceof var13;
                        if (var16) {
                            _fun6669_ip = 1987;
                            continue _fun6669
                        }
                    case 1972:
                        var15 = var1.constructor;
                        var13 = var9.Object;
                        var16 = var15 === var13;
                    case 1987:
                        _fun6669_ip = 2013;
                        continue _fun6669;
                    case 1989:
                        var13 = _closure1_slot29;
                        var15 = var13.bind(var3)(var1);
                        var13 = var9.Object;
                        var13 = var13.prototype;
                        var16 = var15 === var13;
                    case 2013:
                        var13 = var9.Object;
                        var13 = var1 instanceof var13;
                        var23 = 'null prototype';
                        if (!var13) {
                            _fun6669_ip = 2036;
                            continue _fun6669
                        }
                    case 2032:
                        var23 = '';
                    case 2036:
                        if (var16) {
                            _fun6669_ip = 2108;
                            continue _fun6669
                        }
                    case 2039:
                        var13 = _closure1_slot27;
                        if (!var13) {
                            _fun6669_ip = 2108;
                            continue _fun6669
                        }
                    case 2046:
                        var13 = var9.Object;
                        var13 = var13.bind(var3)(var1);
                        if (!(var13 === var1)) {
                            _fun6669_ip = 2108;
                            continue _fun6669
                        }
                    case 2061:
                        var13 = _closure1_slot27;
                        var13 = var13 in var1;
                        if (!var13) {
                            _fun6669_ip = 2108;
                            continue _fun6669
                        }
                    case 2072:
                        var21 = _closure1_slot14;
                        var20 = var21.call;
                        var13 = _closure1_slot42;
                        var19 = var13.bind(var3)(var1);
                        var15 = 8;
                        var13 = -1;
                        var22 = var20.bind(var21)(var19, var15, var13);
                        _fun6669_ip = 2122;
                        continue _fun6669;
                    case 2108:
                        var13 = '';
                        if (!var23) {
                            _fun6669_ip = 2119;
                            continue _fun6669
                        }
                    case 2115:
                        var13 = 'Object';
                    case 2119:
                        var22 = var13;
                    case 2122:
                        var15 = '';
                        var13 = var15;
                        if (var16) {
                            _fun6669_ip = 2186;
                            continue _fun6669
                        }
                    case 2132:
                        var16 = var1.constructor;
                        var16 = typeof var16;
                        var13 = var15;
                        if (!(var18 === var16)) {
                            _fun6669_ip = 2186;
                            continue _fun6669
                        }
                    case 2147:
                        var16 = var1.constructor;
                        var18 = var16.name;
                        var16 = var15;
                        if (!var18) {
                            _fun6669_ip = 2183;
                            continue _fun6669
                        }
                    case 2163:
                        var18 = var1.constructor;
                        var19 = var18.name;
                        var18 = ' ';
                        var16 = var19 + var18;
                    case 2183:
                        var13 = var16;
                    case 2186:
                        if (var22) {
                            _fun6669_ip = 2192;
                            continue _fun6669
                        }
                    case 2189:
                        if (!var23) {
                            _fun6669_ip = 2265;
                            continue _fun6669
                        }
                    case 2192:
                        var20 = _closure1_slot20;
                        var19 = var20.call;
                        var21 = _closure1_slot19;
                        var18 = var21.call;
                        if (var22) {
                            _fun6669_ip = 2217;
                            continue _fun6669
                        }
                    case 2213:
                        var22 = new Array(0);
                    case 2217:
                        if (var23) {
                            _fun6669_ip = 2224;
                            continue _fun6669
                        }
                    case 2220:
                        var23 = new Array(0);
                    case 2224:
                        var16 = new Array(0);
                        var18 = var18.bind(var21)(var16, var22, var23);
                        var16 = ': ';
                        var18 = var19.bind(var20)(var18, var16);
                        var16 = '[';
                        var18 = var16 + var18;
                        var16 = '] ';
                        var15 = var18 + var16;
                    case 2265:
                        var16 = var13 + var15;
                        var15 = var17.length;
                        var13 = 0;
                        if (!(var13 !== var15)) {
                            _fun6669_ip = 2364;
                            continue _fun6669
                        }
                    case 2280:
                        if (var6) {
                            _fun6669_ip = 2330;
                            continue _fun6669
                        }
                    case 2283:
                        var18 = _closure1_slot20;
                        var15 = var18.call;
                        var13 = ', ';
                        var15 = var15.bind(var18)(var17, var13);
                        var13 = '{ ';
                        var13 = var16 + var13;
                        var15 = var13 + var15;
                        var13 = ' }';
                        var13 = var15 + var13;
                        _fun6669_ip = 2362;
                        continue _fun6669;
                    case 2330:
                        var15 = _closure1_slot49;
                        var17 = var15.bind(var3)(var17, var6);
                        var15 = '{';
                        var15 = var16 + var15;
                        var17 = var15 + var17;
                        var15 = '}';
                        var13 = var17 + var15;
                    case 2362:
                        _fun6669_ip = 2374;
                        continue _fun6669;
                    case 2364:
                        var15 = '{}';
                        var13 = var16 + var15;
                    case 2374:
                        return var13;
                    case 2376:
                        var13 = var9.String;
                        var13 = var13.bind(var3)(var1);
                        return var13;
                    case 2389:
                        var13 = '{ [object globalThis] }';
                        return var13;
                    case 2397:
                        var13 = '{ [object Window] }';
                        return var13;
                    case 2405:
                        var13 = _closure1_slot46;
                        var9 = var9.String;
                        var9 = var9.bind(var3)(var1);
                        var9 = var7.bind(var3)(var9);
                        var9 = var13.bind(var3)(var9);
                        return var9;
                    case 2432:
                        var13 = _closure1_slot46;
                        var15 = _closure1_slot10;
                        var9 = var15.call;
                        var9 = var9.bind(var15)(var1);
                        var9 = var13.bind(var3)(var9);
                        return var9;
                    case 2457:
                        var13 = _closure1_slot46;
                        var15 = _closure1_slot23;
                        var9 = var15.call;
                        var9 = var9.bind(var15)(var1);
                        var9 = var7.bind(var3)(var9);
                        var9 = var13.bind(var3)(var9);
                        return var9;
                    case 2487:
                        var13 = _closure1_slot46;
                        var9 = global;
                        var9 = var9.Number;
                        var9 = var9.bind(var3)(var1);
                        var9 = var7.bind(var3)(var9);
                        var9 = var13.bind(var3)(var9);
                        return var9;
                    case 2516:
                        var13 = _closure1_slot47;
                        var9 = 'WeakRef';
                        var9 = var13.bind(var3)(var9);
                        return var9;
                    case 2531:
                        var13 = _closure1_slot47;
                        var9 = 'WeakSet';
                        var9 = var13.bind(var3)(var9);
                        return var9;
                    case 2546:
                        var13 = _closure1_slot47;
                        var9 = 'WeakMap';
                        var9 = var13.bind(var3)(var9);
                        return var9;
                    case 2561:
                        var16 = new Array(0);
                        var _closure2_slot5 = var16;
                        var9 = _closure1_slot6;
                        if (!var9) {
                            _fun6669_ip = 2596;
                            continue _fun6669
                        }
                    case 2576:
                        var15 = _closure1_slot6;
                        var13 = var15.call;
                        var9 = function(arg0) { // Environment: var4
                            var3 = _closure2_slot5;
                            var2 = var3.push;
                            var5 = _closure2_slot6;
                            var4 = _closure2_slot0;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var5.bind(var0)(var1, var4);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var9 = var13.bind(var15)(var1, var9);
                    case 2596:
                        var15 = _closure1_slot48;
                        var13 = _closure1_slot5;
                        var9 = var13.call;
                        var26 = var9.bind(var13)(var1);
                        var27 = 'Set';
                        var28 = undefined;
                        var25 = var16;
                        var24 = var6;
                        var9 = var28[var15](var27, var26, var25, var24, var23);
                        return var9;
                    case 2632:
                        var15 = new Array(0);
                        var _closure2_slot4 = var15;
                        var9 = _closure1_slot4;
                        if (!var9) {
                            _fun6669_ip = 2667;
                            continue _fun6669
                        }
                    case 2647:
                        var13 = _closure1_slot4;
                        var9 = var13.call;
                        var4 = function(arg0, arg1) { // Environment: var4
                            var3 = _closure2_slot4;
                            var2 = var3.push;
                            var6 = _closure2_slot6;
                            var5 = _closure2_slot0;
                            var0 = undefined;
                            var4 = arg1;
                            var1 = true;
                            var4 = var6.bind(var0)(var4, var5, var1);
                            var1 = ' => ';
                            var4 = var4 + var1;
                            var1 = arg0;
                            var1 = var6.bind(var0)(var1, var5);
                            var1 = var4 + var1;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var9.bind(var13)(var1, var4);
                    case 2667:
                        var13 = _closure1_slot48;
                        var9 = _closure1_slot3;
                        var4 = var9.call;
                        var26 = var4.bind(var9)(var1);
                        var27 = 'Map';
                        var28 = undefined;
                        var25 = var15;
                        var24 = var6;
                        var4 = var28[var13](var27, var26, var25, var24, var23);
                        return var4;
                    case 2703:
                        var4 = var1.inspect;
                        var4 = var4.bind(var1)();
                        return var4;
                    case 2715:
                        var9 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var12];
                        var9 = var9.bind(var3)(var4);
                        var4 = {};
                        var10 = var10 - var11;
                        var4.depth = var10;
                        var4 = var9.bind(var3)(var1, var4);
                        return var4;
                    case 2751:
                        var4 = _closure1_slot50;
                        var15 = var4.bind(var3)(var1, var7);
                        var10 = global;
                        var4 = var10.Error;
                        var4 = var4.prototype;
                        var11 = 'cause';
                        var4 = var11 in var4;
                        if (var4) {
                            _fun6669_ip = 2920;
                            continue _fun6669
                        }
                    case 2788:
                        var4 = var11 in var1;
                        if (!var4) {
                            _fun6669_ip = 2920;
                            continue _fun6669
                        }
                    case 2798:
                        var9 = _closure1_slot28;
                        var4 = var9.call;
                        var4 = var4.bind(var9)(var1, var11);
                        if (var4) {
                            _fun6669_ip = 2920;
                            continue _fun6669
                        }
                    case 2816:
                        var4 = var10.String;
                        var9 = var4.bind(var3)(var1);
                        var4 = '{ [';
                        var11 = var4 + var9;
                        var13 = _closure1_slot20;
                        var12 = var13.call;
                        var16 = _closure1_slot19;
                        var9 = var16.call;
                        var4 = var1.cause;
                        var17 = var7.bind(var3)(var4);
                        var4 = '[cause]: ';
                        var4 = var4 + var17;
                        var9 = var9.bind(var16)(var4, var15);
                        var4 = ', ';
                        var9 = var12.bind(var13)(var9, var4);
                        var4 = '] ';
                        var4 = var11 + var4;
                        var9 = var4 + var9;
                        var4 = ' }';
                        var4 = var9 + var4;
                        _fun6669_ip = 3029;
                        continue _fun6669;
                    case 2920:
                        var11 = var15.length;
                        var9 = 0;
                        if (!(var9 !== var11)) {
                            _fun6669_ip = 2999;
                            continue _fun6669
                        }
                    case 2931:
                        var9 = var10.String;
                        var11 = var9.bind(var3)(var1);
                        var9 = '{ [';
                        var12 = var9 + var11;
                        var13 = _closure1_slot20;
                        var11 = var13.call;
                        var9 = ', ';
                        var11 = var11.bind(var13)(var15, var9);
                        var9 = '] ';
                        var9 = var12 + var9;
                        var11 = var9 + var11;
                        var9 = ' }';
                        var9 = var11 + var9;
                        _fun6669_ip = 3026;
                        continue _fun6669;
                    case 2999:
                        var10 = var10.String;
                        var11 = var10.bind(var3)(var1);
                        var10 = '[';
                        var11 = var10 + var11;
                        var10 = ']';
                        var9 = var11 + var10;
                    case 3026:
                        var4 = var9;
                    case 3029:
                        return var4;
                    case 3031:
                        var4 = var1.length;
                        var13 = 0;
                        if (!(var13 !== var4)) {
                            _fun6669_ip = 3192;
                            continue _fun6669
                        }
                    case 3045:
                        var4 = _closure1_slot50;
                        var10 = var4.bind(var3)(var1, var7);
                        if (!var6) {
                            _fun6669_ip = 3149;
                            continue _fun6669
                        }
                    case 3058:
                        var4 = var10.length;
                        var7 = var13 < var4;
                        var11 = '\n';
                        var9 = 0;
                        var4 = true;
                        if (!var7) {
                            _fun6669_ip = 3118;
                            continue _fun6669
                        }
                    case 3078:
                        var15 = _closure1_slot43;
                        var7 = var10[var9];
                        var7 = var15.bind(var3)(var7, var11);
                        var7 = var7 >= var13;
                        var4 = false;
                        if (var7) {
                            _fun6669_ip = 3118;
                            continue _fun6669
                        }
                    case 3101:
                        var9 = var9 + 1;
                        var7 = var10.length;
                        var7 = var9 < var7;
                        var4 = true;
                        if (var7) {
                            _fun6669_ip = 3078;
                            continue _fun6669
                        }
                    case 3118:
                        if (var4) {
                            _fun6669_ip = 3149;
                            continue _fun6669
                        }
                    case 3121:
                        var4 = _closure1_slot49;
                        var6 = var4.bind(var3)(var10, var6);
                        var4 = '[';
                        var6 = var4 + var6;
                        var4 = ']';
                        var4 = var6 + var4;
                        _fun6669_ip = 3190;
                        continue _fun6669;
                    case 3149:
                        var9 = _closure1_slot20;
                        var7 = var9.call;
                        var6 = ', ';
                        var7 = var7.bind(var9)(var10, var6);
                        var6 = '[ ';
                        var7 = var6 + var7;
                        var6 = ' ]';
                        var4 = var7 + var6;
                    case 3190:
                        return var4;
                    case 3192:
                        var4 = '[]';
                        return var4;
                    case 3200:
                        var9 = _closure1_slot17;
                        var7 = var9.call;
                        var4 = global;
                        var10 = var4.String;
                        var6 = var1.nodeName;
                        var6 = var10.bind(var3)(var6);
                        var7 = var7.bind(var9)(var6);
                        var6 = '<';
                        var6 = var6 + var7;
                        var14 = var1.attributes;
                        if (var14) {
                            _fun6669_ip = 3254;
                            continue _fun6669
                        }
                    case 3250:
                        var14 = new Array(0);
                    case 3254:
                        var7 = var14.length;
                        var13 = 0;
                        var7 = var13 < var7;
                        var12 = ' ';
                        var11 = 'double';
                        var10 = '=';
                        var9 = var6;
                        var6 = var9;
                        if (!var7) {
                            _fun6669_ip = 3357;
                            continue _fun6669
                        }
                    case 3288:
                        var7 = var14[var13];
                        var7 = var7.name;
                        var7 = var12 + var7;
                        var16 = _closure1_slot35;
                        var17 = _closure1_slot36;
                        var15 = var14[var13];
                        var15 = var15.value;
                        var15 = var17.bind(var3)(var15);
                        var15 = var16.bind(var3)(var15, var11, var2);
                        var7 = var7 + var10;
                        var7 = var7 + var15;
                        var9 = var9 + var7;
                        var13 = var13 + 1;
                        var7 = var14.length;
                        var6 = var9;
                        if (var13 < var7) {
                            _fun6669_ip = 3288;
                            continue _fun6669
                        }
                    case 3357:
                        var7 = '>';
                        var10 = var6 + var7;
                        var9 = var1.childNodes;
                        if (!var9) {
                            _fun6669_ip = 3385;
                            continue _fun6669
                        }
                    case 3374:
                        var6 = var1.childNodes;
                        var9 = var6.length;
                    case 3385:
                        var6 = var10;
                        if (!var9) {
                            _fun6669_ip = 3401;
                            continue _fun6669
                        }
                    case 3391:
                        var9 = '...';
                        var6 = var10 + var9;
                    case 3401:
                        var10 = _closure1_slot17;
                        var9 = var10.call;
                        var11 = var4.String;
                        var4 = var1.nodeName;
                        var4 = var11.bind(var3)(var4);
                        var9 = var9.bind(var10)(var4);
                        var4 = '</';
                        var4 = var4 + var9;
                        var4 = var4 + var7;
                        var4 = var6 + var4;
                        return var4;
                    case 3452:
                        var4 = _closure1_slot26;
                        if (var4) {
                            _fun6669_ip = 3475;
                            continue _fun6669
                        }
                    case 3459:
                        var6 = _closure1_slot25;
                        var4 = var6.call;
                        var7 = var4.bind(var6)(var1);
                        _fun6669_ip = 3524;
                        continue _fun6669;
                    case 3475:
                        var11 = _closure1_slot15;
                        var10 = var11.call;
                        var4 = global;
                        var4 = var4.String;
                        var9 = var4.bind(var3)(var1);
                        var6 = /^(Symbol\(.*\))_[^)]*$/;
                        var4 = '$1';
                        var7 = var10.bind(var11)(var9, var6, var4);
                    case 3524:
                        var6 = 'object';
                        var4 = var7;
                        if (!(var6 === var8)) {
                            _fun6669_ip = 3554;
                            continue _fun6669
                        }
                    case 3535:
                        var6 = _closure1_slot26;
                        var4 = var7;
                        if (var6) {
                            _fun6669_ip = 3554;
                            continue _fun6669
                        }
                    case 3545:
                        var6 = _closure1_slot46;
                        var4 = var6.bind(var3)(var7);
                    case 3554:
                        return var4;
                    case 3556:
                        var4 = _closure1_slot38;
                        var6 = var4.bind(var3)(var1);
                        var4 = '[Object]';
                        if (!var6) {
                            _fun6669_ip = 3580;
                            continue _fun6669
                        }
                    case 3574:
                        var4 = '[Array]';
                    case 3580:
                        return var4;
                    case 3582:
                        var4 = global;
                        var4 = var4.String;
                        var6 = var4.bind(var3)(var1);
                        var4 = 'n';
                        var7 = var6 + var4;
                        var4 = var7;
                        if (!var5) {
                            _fun6669_ip = 3619;
                            continue _fun6669
                        }
                    case 3609:
                        var6 = _closure1_slot34;
                        var4 = var6.bind(var3)(var1, var7);
                    case 3619:
                        return var4;
                    case 3621:
                        var6 = 0;
                        if (!(var6 !== var1)) {
                            _fun6669_ip = 3658;
                            continue _fun6669
                        }
                    case 3627:
                        var4 = global;
                        var4 = var4.String;
                        var7 = var4.bind(var3)(var1);
                        var4 = var7;
                        if (!var5) {
                            _fun6669_ip = 3656;
                            continue _fun6669
                        }
                    case 3646:
                        var5 = _closure1_slot34;
                        var4 = var5.bind(var3)(var1, var7);
                    case 3656:
                        return var4;
                    case 3658:
                        var4 = inf;
                        var5 = var4 / var1;
                        var4 = '-0';
                        if (!(var5 > var6)) {
                            _fun6669_ip = 3688;
                            continue _fun6669
                        }
                    case 3682:
                        var4 = '0';
                    case 3688:
                        return var4;
                    case 3690:
                        var0 = _closure1_slot44;
                        var0 = var0.bind(var3)(var1, var2);
                        return var0;
                    case 3702:
                        var0 = 'false';
                        if (!var1) {
                            _fun6669_ip = 3713;
                            continue _fun6669
                        }
                    case 3709:
                        var0 = 'true';
                    case 3713:
                        return var0;
                    case 3715:
                        var0 = 'null';
                        return var0;
                    case 3721:
                        var0 = 'undefined';
                        return var0;
                    case 3727:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var27 = 'option "numericSeparator", if provided, must be `true` or `false`';
                        var28 = var1;
                        var0 = new var28[var2](var27, var26);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 3763:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var27 = 'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`';
                        var28 = var1;
                        var0 = new var28[var2](var27, var26);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 3799:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var27 = 'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`';
                        var28 = var1;
                        var0 = new var28[var2](var27, var26);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot51 = var4;
            var3 = arg4;
            var3.exports = var4;
            var1 = var1.Object;
            var1 = var1.prototype;
            var1 = var1.hasOwnProperty;
            if (var1) {
                _fun6650_ip = 1344;
                continue _fun6650
            }
        case 1339:
            var1 = function(arg0) { // Environment: var2
                var1 = arg0;
                var0 = this;
                var0 = var1 in var0;
                return var0;
            };
        case 1344:
            var _closure1_slot33 = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [553]);