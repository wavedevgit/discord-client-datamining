// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16287: for (var _fun16287_ip = 0;;) switch (_fun16287_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var2;
            var17 = function arg0, arg1() {
                _fun16288: for (var _fun16288_ip = 0;;) switch (_fun16288_ip) {
                    case 0:
                        var1 = arg1;
                        var4 = undefined;
                        var5 = undefined;
                        var3 = {};
                        var0 = new Array(0);
                        var3.seen = var0;
                        var2 = _closure1_slot9;
                        var3.stylize = var2;
                        var6 = arguments.length;
                        var2 = 3;
                        if (!(var6 >= var2)) {
                            _fun16288_ip = 53;
                            continue _fun16288
                        }
                    case 40:
                        var6 = 2;
                        var6 = arguments[var6];
                        var3.depth = var6;
                    case 53:
                        var7 = arguments.length;
                        var6 = 4;
                        if (!(var7 >= var6)) {
                            _fun16288_ip = 73;
                            continue _fun16288
                        }
                    case 63:
                        var2 = arguments[var2];
                        var3.colors = var2;
                    case 73:
                        var2 = _closure1_slot14;
                        var2 = var2.bind(var4)(var1);
                        if (var2) {
                            _fun16288_ip = 106;
                            continue _fun16288
                        }
                    case 85:
                        if (!var1) {
                            _fun16288_ip = 112;
                            continue _fun16288
                        }
                    case 88:
                        var5 = _closure1_slot0;
                        var2 = var5._extend;
                        var2 = var2.bind(var5)(var3, var1);
                        _fun16288_ip = 112;
                        continue _fun16288;
                    case 106:
                        var3.showHidden = var1;
                    case 112:
                        var2 = _closure1_slot18;
                        var1 = var3.showHidden;
                        var1 = var2.bind(var4)(var1);
                        if (!var1) {
                            _fun16288_ip = 138;
                            continue _fun16288
                        }
                    case 130:
                        var1 = false;
                        var3.showHidden = var1;
                    case 138:
                        var2 = _closure1_slot18;
                        var1 = var3.depth;
                        var1 = var2.bind(var4)(var1);
                        if (!var1) {
                            _fun16288_ip = 165;
                            continue _fun16288
                        }
                    case 156:
                        var1 = 2;
                        var3.depth = var1;
                    case 165:
                        var2 = _closure1_slot18;
                        var1 = var3.colors;
                        var1 = var2.bind(var4)(var1);
                        if (!var1) {
                            _fun16288_ip = 190;
                            continue _fun16288
                        }
                    case 182:
                        var1 = false;
                        var3.colors = var1;
                    case 190:
                        var2 = _closure1_slot18;
                        var1 = var3.customInspect;
                        var1 = var2.bind(var4)(var1);
                        if (!var1) {
                            _fun16288_ip = 216;
                            continue _fun16288
                        }
                    case 208:
                        var1 = true;
                        var3.customInspect = var1;
                    case 216:
                        var1 = var3.colors;
                        if (!var1) {
                            _fun16288_ip = 234;
                            continue _fun16288
                        }
                    case 224:
                        var1 = _closure1_slot8;
                        var3.stylize = var1;
                    case 234:
                        var2 = _closure1_slot10;
                        var1 = var3.depth;
                        var0 = arg0;
                        var0 = var2.bind(var4)(var3, var0, var1);
                        return var0;
                }
            };
            var _closure1_slot7 = var17;
            var0 = function arg0, arg1() {
                _fun16289: for (var _fun16289_ip = 0;;) switch (_fun16289_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = _closure1_slot7;
                        var2 = var0.styles;
                        var0 = arg1;
                        var5 = var2[var0];
                        var0 = var6;
                        if (!var5) {
                            _fun16289_ip = 98;
                            continue _fun16289
                        }
                    case 29:
                        var3 = _closure1_slot7;
                        var1 = var3.colors;
                        var2 = var1[var5];
                        var1 = 0;
                        var1 = var2[var1];
                        var4 = '\x1b[';
                        var1 = var4 + var1;
                        var2 = 'm';
                        var1 = var1 + var2;
                        var1 = var1 + var6;
                        var3 = var3.colors;
                        var5 = var3[var5];
                        var3 = 1;
                        var3 = var5[var3];
                        var1 = var1 + var4;
                        var1 = var1 + var3;
                        var0 = var1 + var2;
                    case 98:
                        return var0;
                }
            };
            var _closure1_slot8 = var0;
            var0 = function arg0, arg1() {
                var0 = arg0;
                return var0;
            };
            var _closure1_slot9 = var0;
            var0 = function arg0, arg1, arg2() {
                _fun16291: for (var _fun16291_ip = 0;;) switch (_fun16291_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = arg1;
                        var4 = arg2;
                        var _closure2_slot0 = var5;
                        var _closure2_slot1 = var2;
                        var _closure2_slot2 = var4;
                        var0 = var5.customInspect;
                        if (!var0) {
                            _fun16291_ip = 106;
                            continue _fun16291
                        }
                    case 32:
                        if (!var2) {
                            _fun16291_ip = 106;
                            continue _fun16291
                        }
                    case 35:
                        var6 = _closure1_slot23;
                        var0 = var2.inspect;
                        var3 = undefined;
                        var0 = var6.bind(var3)(var0);
                        if (!var0) {
                            _fun16291_ip = 106;
                            continue _fun16291
                        }
                    case 58:
                        var6 = var2.inspect;
                        var0 = _closure1_slot0;
                        var0 = var0.inspect;
                        if (!(var6 !== var0)) {
                            _fun16291_ip = 106;
                            continue _fun16291
                        }
                    case 78:
                        var0 = var2.constructor;
                        if (!var0) {
                            _fun16291_ip = 1228;
                            continue _fun16291
                        }
                    case 89:
                        var0 = var2.constructor;
                        var0 = var0.prototype;
                        if (!(var0 === var2)) {
                            _fun16291_ip = 1228;
                            continue _fun16291
                        }
                    case 106:
                        var0 = _closure1_slot18;
                        var7 = undefined;
                        var0 = var0.bind(var7)(var2);
                        if (var0) {
                            _fun16291_ip = 386;
                            continue _fun16291
                        }
                    case 126:
                        var0 = _closure1_slot17;
                        var0 = var0.bind(var7)(var2);
                        if (var0) {
                            _fun16291_ip = 248;
                            continue _fun16291
                        }
                    case 138:
                        var0 = _closure1_slot16;
                        var0 = var0.bind(var7)(var2);
                        if (var0) {
                            _fun16291_ip = 224;
                            continue _fun16291
                        }
                    case 150:
                        var0 = _closure1_slot14;
                        var0 = var0.bind(var7)(var2);
                        if (var0) {
                            _fun16291_ip = 200;
                            continue _fun16291
                        }
                    case 162:
                        var0 = _closure1_slot15;
                        var8 = var0.bind(var7)(var2);
                        var0 = undefined;
                        if (!var8) {
                            _fun16291_ip = 402;
                            continue _fun16291
                        }
                    case 179:
                        var9 = var5.stylize;
                        var8 = 'null';
                        var0 = var9.bind(var5)(var8, var8);
                        _fun16291_ip = 402;
                        continue _fun16291;
                    case 200:
                        var11 = var5.stylize;
                        var9 = '' + var2;
                        var8 = 'boolean';
                        var0 = var11.bind(var5)(var9, var8);
                        _fun16291_ip = 402;
                        continue _fun16291;
                    case 224:
                        var11 = var5.stylize;
                        var9 = '' + var2;
                        var8 = 'number';
                        var0 = var11.bind(var5)(var9, var8);
                        _fun16291_ip = 402;
                        continue _fun16291;
                    case 248:
                        var8 = global;
                        var9 = var8.JSON;
                        var8 = var9.stringify;
                        var12 = var8.bind(var9)(var2);
                        var11 = var12.replace;
                        var9 = /^"|"$/g;
                        var8 = '';
                        var12 = var11.bind(var12)(var9, var8);
                        var11 = var12.replace;
                        var9 = /'/g;
                        var8 = "\\'";
                        var12 = var11.bind(var12)(var9, var8);
                        var11 = var12.replace;
                        var9 = /\\"/g;
                        var8 = '"';
                        var8 = var11.bind(var12)(var9, var8);
                        var9 = "'";
                        var8 = var9 + var8;
                        var11 = var5.stylize;
                        var9 = var8 + var9;
                        var8 = 'string';
                        var0 = var11.bind(var5)(var9, var8);
                        _fun16291_ip = 402;
                        continue _fun16291;
                    case 386:
                        var9 = var5.stylize;
                        var8 = 'undefined';
                        var0 = var9.bind(var5)(var8, var8);
                    case 402:
                        if (var0) {
                            _fun16291_ip = 1226;
                            continue _fun16291
                        }
                    case 408:
                        var8 = global;
                        var11 = var8.Object;
                        var9 = var11.keys;
                        var11 = var9.bind(var11)(var2);
                        var9 = function arg0() {
                            var3 = arg0;
                            var0 = {};
                            var _closure3_slot0 = var0;
                            var2 = var3.forEach;
                            var1 = function(arg0, arg1) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = true;
                                var0 = arg0;
                                var2[var0] = var1;
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var16 = var9.bind(var7)(var11);
                        var _closure2_slot3 = var16;
                        var9 = var5.showHidden;
                        var15 = var11;
                        if (!var9) {
                            _fun16291_ip = 469;
                            continue _fun16291
                        }
                    case 452:
                        var11 = var8.Object;
                        var9 = var11.getOwnPropertyNames;
                        var15 = var9.bind(var11)(var2);
                    case 469:
                        var9 = _closure1_slot22;
                        var9 = var9.bind(var7)(var2);
                        if (!var9) {
                            _fun16291_ip = 527;
                            continue _fun16291
                        }
                    case 481:
                        var11 = var15.indexOf;
                        var9 = 'message';
                        var9 = var11.bind(var15)(var9);
                        var11 = 0;
                        if (!(!(var9 >= var11))) {
                            _fun16291_ip = 1215;
                            continue _fun16291
                        }
                    case 505:
                        var12 = var15.indexOf;
                        var9 = 'description';
                        var9 = var12.bind(var15)(var9);
                        if (!(!(var9 >= var11))) {
                            _fun16291_ip = 1215;
                            continue _fun16291
                        }
                    case 527:
                        var9 = var15.length;
                        var14 = 0;
                        if (!(var14 === var9)) {
                            _fun16291_ip = 598;
                            continue _fun16291
                        }
                    case 538:
                        var9 = _closure1_slot23;
                        var9 = var9.bind(var7)(var2);
                        if (var9) {
                            _fun16291_ip = 1152;
                            continue _fun16291
                        }
                    case 553:
                        var9 = _closure1_slot19;
                        var9 = var9.bind(var7)(var2);
                        if (var9) {
                            _fun16291_ip = 1108;
                            continue _fun16291
                        }
                    case 568:
                        var9 = _closure1_slot21;
                        var9 = var9.bind(var7)(var2);
                        if (var9) {
                            _fun16291_ip = 1064;
                            continue _fun16291
                        }
                    case 583:
                        var9 = _closure1_slot22;
                        var9 = var9.bind(var7)(var2);
                        if (var9) {
                            _fun16291_ip = 1053;
                            continue _fun16291
                        }
                    case 598:
                        var11 = false;
                        var _closure2_slot4 = var11;
                        var13 = ['{', '}'];
                        var9 = _closure1_slot13;
                        var9 = var9.bind(var7)(var2);
                        if (!var9) {
                            _fun16291_ip = 644;
                            continue _fun16291
                        }
                    case 626:
                        var12 = true;
                        _closure2_slot4 = var12;
                        var13 = ['[', ']'];
                        var11 = true;
                    case 644:
                        var9 = _closure1_slot23;
                        var9 = var9.bind(var7)(var2);
                        var17 = '';
                        var12 = var17;
                        if (!var9) {
                            _fun16291_ip = 704;
                            continue _fun16291
                        }
                    case 663:
                        var9 = var2.name;
                        if (!var9) {
                            _fun16291_ip = 686;
                            continue _fun16291
                        }
                    case 671:
                        var18 = var2.name;
                        var9 = ': ';
                        var17 = var9 + var18;
                    case 686:
                        var9 = ' [Function';
                        var17 = var9 + var17;
                        var9 = ']';
                        var12 = var17 + var9;
                    case 704:
                        var9 = _closure1_slot19;
                        var9 = var9.bind(var7)(var2);
                        if (!var9) {
                            _fun16291_ip = 752;
                            continue _fun16291
                        }
                    case 716:
                        var9 = var8.RegExp;
                        var9 = var9.prototype;
                        var17 = var9.toString;
                        var9 = var17.call;
                        var17 = var9.bind(var17)(var2);
                        var9 = ' ';
                        var12 = var9 + var17;
                    case 752:
                        var9 = _closure1_slot21;
                        var9 = var9.bind(var7)(var2);
                        if (!var9) {
                            _fun16291_ip = 801;
                            continue _fun16291
                        }
                    case 764:
                        var9 = var8.Date;
                        var9 = var9.prototype;
                        var17 = var9.toUTCString;
                        var9 = var17.call;
                        var17 = var9.bind(var17)(var2);
                        var9 = ' ';
                        var12 = var9 + var17;
                    case 801:
                        var9 = _closure1_slot22;
                        var9 = var9.bind(var7)(var2);
                        if (!var9) {
                            _fun16291_ip = 832;
                            continue _fun16291
                        }
                    case 813:
                        var9 = _closure1_slot11;
                        var17 = var9.bind(var7)(var2);
                        var9 = ' ';
                        var12 = var9 + var17;
                    case 832:
                        var9 = var15.length;
                        if (!(var14 === var9)) {
                            _fun16291_ip = 877;
                            continue _fun16291
                        }
                    case 841:
                        if (!var11) {
                            _fun16291_ip = 853;
                            continue _fun16291
                        }
                    case 844:
                        var9 = var2.length;
                        if (!(var14 == var9)) {
                            _fun16291_ip = 877;
                            continue _fun16291
                        }
                    case 853:
                        var9 = var13[var14];
                        var17 = var9 + var12;
                        var9 = 1;
                        var9 = var13[var9];
                        var9 = var17 + var9;
                        _fun16291_ip = 1051;
                        continue _fun16291;
                    case 877:
                        if (!(!(var4 < var14))) {
                            _fun16291_ip = 973;
                            continue _fun16291
                        }
                    case 881:
                        var17 = var5.seen;
                        var14 = var17.push;
                        var14 = var14.bind(var17)(var2);
                        if (var11) {
                            _fun16291_ip = 917;
                            continue _fun16291
                        }
                    case 900:
                        var14 = var15.map;
                        var11 = function(arg0) { // Environment: var10
                            var7 = _closure1_slot12;
                            var13 = _closure2_slot0;
                            var12 = _closure2_slot1;
                            var11 = _closure2_slot2;
                            var10 = _closure2_slot3;
                            var8 = _closure2_slot4;
                            var14 = undefined;
                            var9 = arg0;
                            var0 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
                            return var0;
                        };
                        var11 = var14.bind(var15)(var11);
                        _fun16291_ip = 943;
                        continue _fun16291;
                    case 917:
                        var14 = function arg0, arg1, arg2, arg3, arg4() {
                            _fun16294: for (var _fun16294_ip = 0;;) switch (_fun16294_ip) {
                                case 0:
                                    var13 = arg0;
                                    var12 = arg1;
                                    var11 = arg2;
                                    var10 = arg3;
                                    var3 = arg4;
                                    var _closure3_slot0 = var13;
                                    var _closure3_slot1 = var12;
                                    var _closure3_slot2 = var11;
                                    var _closure3_slot3 = var10;
                                    var0 = new Array(0);
                                    var _closure3_slot4 = var0;
                                    var9 = var12.length;
                                    var8 = 0;
                                    var14 = var8 < var9;
                                    var6 = global;
                                    var5 = undefined;
                                    var2 = '';
                                    if (!var14) {
                                        _fun16294_ip = 152;
                                        continue _fun16294
                                    }
                                case 66:
                                    var15 = _closure1_slot26;
                                    var14 = var6.String;
                                    var14 = var14.bind(var5)(var8);
                                    var15 = var15.bind(var5)(var12, var14);
                                    var16 = var0.push;
                                    var14 = var8;
                                    if (var15) {
                                        _fun16294_ip = 105;
                                        continue _fun16294
                                    }
                                case 98:
                                    var15 = var16.bind(var0)(var2);
                                    _fun16294_ip = 145;
                                    continue _fun16294;
                                case 105:
                                    var17 = _closure1_slot12;
                                    var15 = var6.String;
                                    var19 = var15.bind(var5)(var14);
                                    var24 = undefined;
                                    var23 = var13;
                                    var22 = var12;
                                    var21 = var11;
                                    var20 = var10;
                                    var18 = true;
                                    var15 = var24[var17](var23, var22, var21, var20, var19, var18, var17);
                                    var15 = var16.bind(var0)(var15);
                                case 145:
                                    var8 = var14 + 1;
                                    if (var8 < var9) {
                                        _fun16294_ip = 66;
                                        continue _fun16294
                                    }
                                case 152:
                                    var2 = var3.forEach;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun16295: for (var _fun16295_ip = 0;;) switch (_fun16295_ip) {
                                            case 0:
                                                var9 = arg0;
                                                var1 = var9.match;
                                                var0 = /^\d+$/;
                                                var0 = var1.bind(var9)(var0);
                                                if (var0) {
                                                    _fun16295_ip = 82;
                                                    continue _fun16295
                                                }
                                            case 31:
                                                var2 = _closure3_slot4;
                                                var1 = var2.push;
                                                var8 = _closure1_slot12;
                                                var15 = _closure3_slot0;
                                                var14 = _closure3_slot1;
                                                var13 = _closure3_slot2;
                                                var12 = _closure3_slot3;
                                                var16 = undefined;
                                                var10 = true;
                                                var11 = var9;
                                                var0 = var16[var8](var15, var14, var13, var12, var11, var10, var9);
                                                var0 = var1.bind(var2)(var0);
                                            case 82:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var24 = undefined;
                        var23 = var5;
                        var22 = var2;
                        var21 = var4;
                        var20 = var16;
                        var19 = var15;
                        var11 = var24[var14](var23, var22, var21, var20, var19, var18);
                    case 943:
                        var15 = var5.seen;
                        var14 = var15.pop;
                        var14 = var14.bind(var15)();
                        var10 = function arg0, arg1, arg2() {
                            _fun16297: for (var _fun16297_ip = 0;;) switch (_fun16297_ip) {
                                case 0:
                                    var4 = arg0;
                                    var5 = arg1;
                                    var3 = arg2;
                                    var2 = var4.reduce;
                                    var1 = function(arg0, arg1) { // Environment: var0
                                        var3 = arg1;
                                        var1 = var3.indexOf;
                                        var0 = '\n';
                                        var1 = var1.bind(var3)(var0);
                                        var0 = 0;
                                        var0 = var1 >= var0;
                                        var2 = var3.replace;
                                        var1 = /\u001b\[\d\d?m/g;
                                        var0 = '';
                                        var0 = var2.bind(var3)(var1, var0);
                                        var1 = var0.length;
                                        var0 = arg0;
                                        var1 = var0 + var1;
                                        var0 = 1;
                                        var0 = var1 + var0;
                                        return var0;
                                    };
                                    var0 = 0;
                                    var2 = var2.bind(var4)(var1, var0);
                                    var1 = 60;
                                    if (!(!(var2 > var1))) {
                                        _fun16297_ip = 92;
                                        continue _fun16297
                                    }
                                case 37:
                                    var1 = var3[var0];
                                    var1 = var1 + var5;
                                    var6 = var4.join;
                                    var2 = ', ';
                                    var2 = var6.bind(var4)(var2);
                                    var6 = ' ';
                                    var1 = var1 + var6;
                                    var1 = var1 + var2;
                                    var2 = 1;
                                    var2 = var3[var2];
                                    var1 = var1 + var6;
                                    var1 = var1 + var2;
                                    return var1;
                                case 92:
                                    var1 = var3[var0];
                                    var0 = '';
                                    if (!(var0 !== var5)) {
                                        _fun16297_ip = 114;
                                        continue _fun16297
                                    }
                                case 104:
                                    var2 = '\n ';
                                    var0 = var5 + var2;
                                case 114:
                                    var0 = var1 + var0;
                                    var2 = var4.join;
                                    var1 = ',\n  ';
                                    var1 = var2.bind(var4)(var1);
                                    var2 = ' ';
                                    var0 = var0 + var2;
                                    var0 = var0 + var1;
                                    var1 = 1;
                                    var1 = var3[var1];
                                    var0 = var0 + var2;
                                    var0 = var0 + var1;
                                    return var0;
                            }
                        };
                        var10 = var10.bind(var7)(var11, var12, var13);
                        _fun16291_ip = 1048;
                        continue _fun16291;
                    case 973:
                        var11 = _closure1_slot19;
                        var11 = var11.bind(var7)(var2);
                        var14 = var5.stylize;
                        if (var11) {
                            _fun16291_ip = 1009;
                            continue _fun16291
                        }
                    case 991:
                        var12 = '[Object]';
                        var11 = 'special';
                        var11 = var14.bind(var5)(var12, var11);
                        _fun16291_ip = 1045;
                        continue _fun16291;
                    case 1009:
                        var12 = var8.RegExp;
                        var12 = var12.prototype;
                        var13 = var12.toString;
                        var12 = var13.call;
                        var13 = var12.bind(var13)(var2);
                        var12 = 'regexp';
                        var11 = var14.bind(var5)(var13, var12);
                    case 1045:
                        var10 = var11;
                    case 1048:
                        var9 = var10;
                    case 1051:
                        return var9;
                    case 1053:
                        var9 = _closure1_slot11;
                        var9 = var9.bind(var7)(var2);
                        return var9;
                    case 1064:
                        var11 = var5.stylize;
                        var9 = var8.Date;
                        var9 = var9.prototype;
                        var10 = var9.toString;
                        var9 = var10.call;
                        var10 = var9.bind(var10)(var2);
                        var9 = 'date';
                        var9 = var11.bind(var5)(var10, var9);
                        return var9;
                    case 1108:
                        var10 = var5.stylize;
                        var8 = var8.RegExp;
                        var8 = var8.prototype;
                        var9 = var8.toString;
                        var8 = var9.call;
                        var9 = var8.bind(var9)(var2);
                        var8 = 'regexp';
                        var8 = var10.bind(var5)(var9, var8);
                        return var8;
                    case 1152:
                        var8 = var2.name;
                        var9 = '';
                        if (!var8) {
                            _fun16291_ip = 1179;
                            continue _fun16291
                        }
                    case 1164:
                        var10 = var2.name;
                        var8 = ': ';
                        var9 = var8 + var10;
                    case 1179:
                        var10 = var5.stylize;
                        var8 = '[Function';
                        var9 = var8 + var9;
                        var8 = ']';
                        var9 = var9 + var8;
                        var8 = 'special';
                        var8 = var10.bind(var5)(var9, var8);
                        return var8;
                    case 1215:
                        var6 = _closure1_slot11;
                        var6 = var6.bind(var7)(var2);
                        return var6;
                    case 1226:
                        return var0;
                    case 1228:
                        var0 = var2.inspect;
                        var2 = var0.bind(var2)(var4, var5);
                        var0 = _closure1_slot17;
                        var6 = var0.bind(var3)(var2);
                        var0 = var2;
                        if (var6) {
                            _fun16291_ip = 1266;
                            continue _fun16291
                        }
                    case 1255:
                        var1 = _closure1_slot10;
                        var0 = var1.bind(var3)(var5, var2, var4);
                    case 1266:
                        return var0;
                }
            };
            var _closure1_slot10 = var0;
            var0 = function arg0() {
                var0 = global;
                var0 = var0.Error;
                var0 = var0.prototype;
                var2 = var0.toString;
                var1 = var2.call;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = '[';
                var1 = var0 + var1;
                var0 = ']';
                var0 = var1 + var0;
                return var0;
            };
            var _closure1_slot11 = var0;
            var0 = function arg0, arg1, arg2, arg3, arg4, arg5() {
                _fun16300: for (var _fun16300_ip = 0;;) switch (_fun16300_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = arg1;
                        var10 = arg2;
                        var1 = arg4;
                        var4 = arg5;
                        var3 = global;
                        var6 = var3.Object;
                        var0 = var6.getOwnPropertyDescriptor;
                        var12 = var0.bind(var6)(var2, var1);
                        if (var12) {
                            _fun16300_ip = 53;
                            continue _fun16300
                        }
                    case 40:
                        var0 = {};
                        var2 = var2[var1];
                        var0.value = var2;
                        var12 = var0;
                    case 53:
                        var0 = var12.get;
                        var2 = var12.set;
                        if (var0) {
                            _fun16300_ip = 95;
                            continue _fun16300
                        }
                    case 66:
                        var0 = undefined;
                        if (!var2) {
                            _fun16300_ip = 141;
                            continue _fun16300
                        }
                    case 71:
                        var8 = var5.stylize;
                        var7 = '[Setter]';
                        var6 = 'special';
                        var0 = var8.bind(var5)(var7, var6);
                        _fun16300_ip = 141;
                        continue _fun16300;
                    case 95:
                        var8 = var5.stylize;
                        if (var2) {
                            _fun16300_ip = 122;
                            continue _fun16300
                        }
                    case 104:
                        var6 = '[Getter]';
                        var2 = 'special';
                        var2 = var8.bind(var5)(var6, var2);
                        _fun16300_ip = 138;
                        continue _fun16300;
                    case 122:
                        var7 = '[Getter/Setter]';
                        var6 = 'special';
                        var2 = var8.bind(var5)(var7, var6);
                    case 138:
                        var0 = var2;
                    case 141:
                        var8 = _closure1_slot26;
                        var7 = undefined;
                        var2 = arg3;
                        var8 = var8.bind(var7)(var2, var1);
                        var2 = undefined;
                        if (var8) {
                            _fun16300_ip = 180;
                            continue _fun16300
                        }
                    case 164:
                        var8 = '[';
                        var9 = var8 + var1;
                        var8 = ']';
                        var2 = var9 + var8;
                    case 180:
                        if (var0) {
                            _fun16300_ip = 404;
                            continue _fun16300
                        }
                    case 186:
                        var13 = var5.seen;
                        var9 = var13.indexOf;
                        var8 = var12.value;
                        var9 = var9.bind(var13)(var8);
                        var8 = 0;
                        if (!(!(var9 < var8))) {
                            _fun16300_ip = 241;
                            continue _fun16300
                        }
                    case 214:
                        var13 = var5.stylize;
                        var9 = '[Circular]';
                        var8 = 'special';
                        var8 = var13.bind(var5)(var9, var8);
                        _fun16300_ip = 401;
                        continue _fun16300;
                    case 241:
                        var9 = _closure1_slot15;
                        var9 = var9.bind(var7)(var10);
                        var13 = _closure1_slot10;
                        var12 = var12.value;
                        if (var9) {
                            _fun16300_ip = 278;
                            continue _fun16300
                        }
                    case 262:
                        var9 = 1;
                        var9 = var10 - var9;
                        var9 = var13.bind(var7)(var5, var12, var9);
                        _fun16300_ip = 287;
                        continue _fun16300;
                    case 278:
                        var10 = null;
                        var9 = var13.bind(var7)(var5, var12, var10);
                    case 287:
                        var10 = var9.indexOf;
                        var13 = '\n';
                        var14 = var10.bind(var9)(var13);
                        var10 = -1;
                        var12 = var9;
                        var9 = var12;
                        if (!(var14 > var10)) {
                            _fun16300_ip = 398;
                            continue _fun16300
                        }
                    case 318:
                        var10 = var12.split;
                        var14 = var10.bind(var12)(var13);
                        var12 = var14.map;
                        if (var4) {
                            _fun16300_ip = 362;
                            continue _fun16300
                        }
                    case 336:
                        var10 = function(arg0) { // Environment: var11
                            var1 = '   ';
                            var0 = arg0;
                            var0 = var1 + var0;
                            return var0;
                        };
                        var15 = var12.bind(var14)(var10);
                        var10 = var15.join;
                        var10 = var10.bind(var15)(var13);
                        var10 = var13 + var10;
                        _fun16300_ip = 395;
                        continue _fun16300;
                    case 362:
                        var11 = function(arg0) { // Environment: var11
                            var1 = '  ';
                            var0 = arg0;
                            var0 = var1 + var0;
                            return var0;
                        };
                        var12 = var12.bind(var14)(var11);
                        var11 = var12.join;
                        var13 = var11.bind(var12)(var13);
                        var12 = var13.slice;
                        var11 = 2;
                        var10 = var12.bind(var13)(var11);
                    case 395:
                        var9 = var10;
                    case 398:
                        var8 = var9;
                    case 401:
                        var0 = var8;
                    case 404:
                        var6 = _closure1_slot18;
                        var6 = var6.bind(var7)(var2);
                        if (!var6) {
                            _fun16300_ip = 644;
                            continue _fun16300
                        }
                    case 419:
                        if (!var4) {
                            _fun16300_ip = 453;
                            continue _fun16300
                        }
                    case 422:
                        var6 = var1.match;
                        var4 = /^\d+$/;
                        var4 = var6.bind(var1)(var4);
                        if (var4) {
                            _fun16300_ip = 660;
                            continue _fun16300
                        }
                    case 453:
                        var4 = var3.JSON;
                        var3 = var4.stringify;
                        var1 = '' + var1;
                        var6 = var3.bind(var4)(var1);
                        var3 = var6.match;
                        var1 = /^"([a-zA-Z_][a-zA-Z_0-9]*)"$/;
                        var1 = var3.bind(var6)(var1);
                        if (var1) {
                            _fun16300_ip = 608;
                            continue _fun16300
                        }
                    case 501:
                        var4 = var6.replace;
                        var3 = /'/g;
                        var1 = "\\'";
                        var7 = var4.bind(var6)(var3, var1);
                        var4 = var7.replace;
                        var3 = /\\"/g;
                        var1 = '"';
                        var7 = var4.bind(var7)(var3, var1);
                        var4 = var7.replace;
                        var3 = /(^"|"$)/g;
                        var1 = "'";
                        var4 = var4.bind(var7)(var3, var1);
                        var3 = var5.stylize;
                        var1 = 'string';
                        var2 = var3.bind(var5)(var4, var1);
                        _fun16300_ip = 644;
                        continue _fun16300;
                    case 608:
                        var4 = var6.slice;
                        var3 = 1;
                        var1 = -1;
                        var4 = var4.bind(var6)(var3, var1);
                        var3 = var5.stylize;
                        var1 = 'name';
                        var2 = var3.bind(var5)(var4, var1);
                    case 644:
                        var1 = ': ';
                        var1 = var2 + var1;
                        var1 = var1 + var0;
                        return var1;
                    case 660:
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var16 = function arg0() {
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot13 = var16;
            var15 = function arg0() {
                var1 = 'boolean';
                var0 = arg0;
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
            var _closure1_slot14 = var15;
            var14 = function arg0() {
                var1 = null;
                var0 = arg0;
                var0 = var1 === var0;
                return var0;
            };
            var _closure1_slot15 = var14;
            var13 = function arg0() {
                var1 = 'number';
                var0 = arg0;
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
            var _closure1_slot16 = var13;
            var12 = function arg0() {
                var1 = 'string';
                var0 = arg0;
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
            var _closure1_slot17 = var12;
            var10 = function arg0() {
                var1 = undefined;
                var0 = arg0;
                var0 = var1 === var0;
                return var0;
            };
            var _closure1_slot18 = var10;
            var11 = function arg0() {
                _fun16309: for (var _fun16309_ip = 0;;) switch (_fun16309_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot20;
                        var2 = undefined;
                        var0 = var0.bind(var2)(var3);
                        if (!var0) {
                            _fun16309_ip = 37;
                            continue _fun16309
                        }
                    case 20:
                        var1 = _closure1_slot24;
                        var2 = var1.bind(var2)(var3);
                        var1 = '[object RegExp]';
                        var0 = var1 === var2;
                    case 37:
                        return var0;
                }
            };
            var _closure1_slot19 = var11;
            var7 = function arg0() {
                _fun16310: for (var _fun16310_ip = 0;;) switch (_fun16310_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = 'object';
                        var0 = typeof var2;
                        var0 = var1 === var0;
                        if (!var0) {
                            _fun16310_ip = 23;
                            continue _fun16310
                        }
                    case 17:
                        var1 = null;
                        var0 = var1 !== var2;
                    case 23:
                        return var0;
                }
            };
            var _closure1_slot20 = var7;
            var9 = function arg0() {
                _fun16311: for (var _fun16311_ip = 0;;) switch (_fun16311_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot20;
                        var2 = undefined;
                        var0 = var0.bind(var2)(var3);
                        if (!var0) {
                            _fun16311_ip = 37;
                            continue _fun16311
                        }
                    case 20:
                        var1 = _closure1_slot24;
                        var2 = var1.bind(var2)(var3);
                        var1 = '[object Date]';
                        var0 = var1 === var2;
                    case 37:
                        return var0;
                }
            };
            var _closure1_slot21 = var9;
            var8 = function arg0() {
                _fun16312: for (var _fun16312_ip = 0;;) switch (_fun16312_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot20;
                        var2 = undefined;
                        var0 = var0.bind(var2)(var3);
                        if (!var0) {
                            _fun16312_ip = 55;
                            continue _fun16312
                        }
                    case 20:
                        var1 = _closure1_slot24;
                        var2 = var1.bind(var2)(var3);
                        var1 = '[object Error]';
                        var1 = var1 === var2;
                        if (var1) {
                            _fun16312_ip = 52;
                            continue _fun16312
                        }
                    case 40:
                        var2 = global;
                        var2 = var2.Error;
                        var1 = var3 instanceof var2;
                    case 52:
                        var0 = var1;
                    case 55:
                        return var0;
                }
            };
            var _closure1_slot22 = var8;
            var4 = function arg0() {
                var1 = 'function';
                var0 = arg0;
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
            var _closure1_slot23 = var4;
            var0 = function arg0() {
                var0 = global;
                var0 = var0.Object;
                var0 = var0.prototype;
                var2 = var0.toString;
                var1 = var2.call;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot24 = var0;
            var0 = function arg0() {
                _fun16315: for (var _fun16315_ip = 0;;) switch (_fun16315_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = 10;
                        if (!(!(var3 < var2))) {
                            _fun16315_ip = 22;
                            continue _fun16315
                        }
                    case 10:
                        var0 = var3.toString;
                        var0 = var0.bind(var3)(var2);
                        _fun16315_ip = 42;
                        continue _fun16315;
                    case 22:
                        var1 = var3.toString;
                        var2 = var1.bind(var3)(var2);
                        var1 = '0';
                        var0 = var1 + var2;
                    case 42:
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var0 = function arg0, arg1() {
                var0 = global;
                var0 = var0.Object;
                var0 = var0.prototype;
                var3 = var0.hasOwnProperty;
                var2 = var3.call;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot26 = var0;
            var0 = function arg0, arg1() {
                _fun16317: for (var _fun16317_ip = 0;;) switch (_fun16317_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1;
                        if (var2) {
                            _fun16317_ip = 52;
                            continue _fun16317
                        }
                    case 9:
                        var0 = global;
                        var4 = var0.Error;
                        var0 = var4.prototype;
                        var3 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var5 = 'Promise was rejected with a falsy value';
                        var6 = var3;
                        var0 = new var6[var4](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var0.reason = var1;
                        var2 = var0;
                    case 52:
                        var1 = arg1;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var _closure1_slot27 = var0;
            var3 = global;
            var0 = var3.Object;
            var0 = var0.getOwnPropertyDescriptors;
            if (var0) {
                _fun16287_ip = 226;
                continue _fun16287
            }
        case 221:
            var0 = function arg0() {
                _fun16318: for (var _fun16318_ip = 0;;) switch (_fun16318_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = global;
                        var1 = var4.Object;
                        var0 = var1.keys;
                        var3 = var0.bind(var1)(var5);
                        var0 = {};
                        var1 = var3.length;
                        var2 = 0;
                        var1 = var2 < var1;
                        if (!var1) {
                            _fun16318_ip = 79;
                            continue _fun16318
                        }
                    case 37:
                        var6 = var3[var2];
                        var8 = var4.Object;
                        var7 = var8.getOwnPropertyDescriptor;
                        var1 = var3[var2];
                        var1 = var7.bind(var8)(var5, var1);
                        var0[var6] = var1;
                        var2 = var2 + 1;
                        var1 = var3.length;
                        if (var2 < var1) {
                            _fun16318_ip = 37;
                            continue _fun16318
                        }
                    case 79:
                        return var0;
                }
            };
        case 226:
            var _closure1_slot1 = var0;
            var0 = /%[sdj%]/g;
            var _closure1_slot2 = var0;
            var0 = function(arg0) { // Environment: var1
                _fun16319: for (var _fun16319_ip = 0;;) switch (_fun16319_ip) {
                    case 0:
                        var1 = arg0;
                        var7 = undefined;
                        var8 = undefined;
                        var0 = _closure1_slot17;
                        var0 = var0.bind(var7)(var1);
                        if (var0) {
                            _fun16319_ip = 104;
                            continue _fun16319
                        }
                    case 24:
                        var3 = new Array(0);
                        var2 = 0;
                        var _closure2_slot0 = var2;
                        var0 = arguments.length;
                        if (!(var2 < var0)) {
                            _fun16319_ip = 86;
                            continue _fun16319
                        }
                    case 41:
                        var2 = var3.push;
                        var4 = _closure1_slot7;
                        var0 = _closure2_slot0;
                        var0 = arguments[var0];
                        var0 = var4.bind(var7)(var0);
                        var0 = var2.bind(var3)(var0);
                        var0 = _closure2_slot0;
                        var2 = var0 + 1;
                        _closure2_slot0 = var2;
                        var0 = arguments.length;
                        if (var2 < var0) {
                            _fun16319_ip = 41;
                            continue _fun16319
                        }
                    case 86:
                        var2 = var3.join;
                        var0 = ' ';
                        var0 = var2.bind(var3)(var0);
                        return var0;
                    case 104:
                        var0 = 1;
                        _closure2_slot0 = var0;
                        var8 = arguments;
                        var0 = var8;
                        var _closure2_slot1 = var0;
                        var5 = arguments.length;
                        var _closure2_slot2 = var5;
                        var0 = global;
                        var0 = var0.String;
                        var3 = var0.bind(var7)(var1);
                        var2 = var3.replace;
                        var1 = _closure1_slot2;
                        var0 = function(arg0) { // Environment: var9
                            _fun16320: for (var _fun16320_ip = 0;;) switch (_fun16320_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = '%%';
                                    if (!(var1 !== var0)) {
                                        _fun16320_ip = 199;
                                        continue _fun16320
                                    }
                                case 16:
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot2;
                                    if (!(!(var2 >= var1))) {
                                        _fun16320_ip = 197;
                                        continue _fun16320
                                    }
                                case 34:
                                    var1 = '%s';
                                    if (!(var1 !== var0)) {
                                        _fun16320_ip = 158;
                                        continue _fun16320
                                    }
                                case 44:
                                    var1 = '%d';
                                    if (!(var1 !== var0)) {
                                        _fun16320_ip = 119;
                                        continue _fun16320
                                    }
                                case 54:
                                    var1 = '%j';
                                    if (!(var1 !== var0)) {
                                        _fun16320_ip = 66;
                                        continue _fun16320
                                    }
                                case 64:
                                    return var0;
                                case 66: // try_start_0
                                    var1 = global;
                                    var3 = var1.JSON;
                                    var2 = var3.stringify;
                                    var4 = _closure2_slot1;
                                    var1 = _closure2_slot0;
                                    var1 = parseFloat(var1);
                                    var6 = var1 + 1;
                                    _closure2_slot0 = var6;
                                    var1 = var4[var1];
                                    var1 = var2.bind(var3)(var1);
                                case 107: // try_end0
                                    return var1;
                                case 109: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var1 = '[Circular]';
                                    return var1;
                                case 119:
                                    var1 = global;
                                    var3 = var1.Number;
                                    var2 = _closure2_slot1;
                                    var1 = _closure2_slot0;
                                    var1 = parseFloat(var1);
                                    var4 = var1 + 1;
                                    _closure2_slot0 = var4;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                case 158:
                                    var1 = global;
                                    var3 = var1.String;
                                    var2 = _closure2_slot1;
                                    var1 = _closure2_slot0;
                                    var1 = parseFloat(var1);
                                    var4 = var1 + 1;
                                    _closure2_slot0 = var4;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                case 197:
                                    return var0;
                                case 199:
                                    var0 = '%';
                                    return var0;
                            }
                        };
                        var2 = var2.bind(var3)(var1, var0);
                        var1 = _closure2_slot0;
                        var4 = arguments[var1];
                        var1 = _closure2_slot0;
                        var3 = ' ';
                        var0 = var2;
                        if (!(var1 < var5)) {
                            _fun16319_ip = 268;
                            continue _fun16319
                        }
                    case 185:
                        var1 = _closure1_slot15;
                        var10 = var1.bind(var7)(var4);
                        var1 = var4;
                        if (var10) {
                            _fun16319_ip = 231;
                            continue _fun16319
                        }
                    case 200:
                        var10 = _closure1_slot20;
                        var10 = var10.bind(var7)(var1);
                        if (!var10) {
                            _fun16319_ip = 231;
                            continue _fun16319
                        }
                    case 212:
                        var10 = _closure1_slot7;
                        var10 = var10.bind(var7)(var1);
                        var10 = var3 + var10;
                        var10 = var2 + var10;
                        _fun16319_ip = 239;
                        continue _fun16319;
                    case 231:
                        var1 = var3 + var1;
                        var10 = var2 + var1;
                    case 239:
                        var1 = _closure2_slot0;
                        var1 = var1 + 1;
                        _closure2_slot0 = var1;
                        var4 = arguments[var1];
                        var1 = _closure2_slot0;
                        var2 = var10;
                        var0 = var2;
                        if (var1 < var5) {
                            _fun16319_ip = 185;
                            continue _fun16319
                        }
                    case 268:
                        return var0;
                }
            };
            var2.format = var0;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun16321: for (var _fun16321_ip = 0;;) switch (_fun16321_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure2_slot0 = var0;
                        var2 = arg1;
                        var _closure2_slot1 = var2;
                        var2 = global;
                        var4 = var2.process;
                        var3 = 'undefined';
                        var4 = typeof var4;
                        if (!(var3 !== var4)) {
                            _fun16321_ip = 53;
                            continue _fun16321
                        }
                    case 35:
                        var4 = var2.process;
                        var5 = var4.noDeprecation;
                        var4 = true;
                        if (!(var4 !== var5)) {
                            _fun16321_ip = 86;
                            continue _fun16321
                        }
                    case 53:
                        var2 = var2.process;
                        var2 = typeof var2;
                        if (!(var3 !== var2)) {
                            _fun16321_ip = 79;
                            continue _fun16321
                        }
                    case 66:
                        var2 = false;
                        var _closure2_slot2 = var2;
                        var2 = function() {
                            _fun16323: for (var _fun16323_ip = 0;;) switch (_fun16323_ip) {
                                case 0:
                                    var0 = undefined;
                                    var2 = _closure2_slot2;
                                    if (var2) {
                                        _fun16323_ip = 121;
                                        continue _fun16323
                                    }
                                case 12:
                                    var2 = global;
                                    var3 = var2.process;
                                    var3 = var3.throwDeprecation;
                                    if (var3) {
                                        _fun16323_ip = 89;
                                        continue _fun16323
                                    }
                                case 29:
                                    var3 = var2.process;
                                    var3 = var3.traceDeprecation;
                                    var5 = var2.console;
                                    if (var3) {
                                        _fun16323_ip = 66;
                                        continue _fun16323
                                    }
                                case 50:
                                    var4 = var5.error;
                                    var3 = _closure2_slot1;
                                    var3 = var4.bind(var5)(var3);
                                    _fun16323_ip = 81;
                                    continue _fun16323;
                                case 66:
                                    var4 = var5.trace;
                                    var3 = _closure2_slot1;
                                    var3 = var4.bind(var5)(var3);
                                case 81:
                                    var3 = true;
                                    _closure2_slot2 = var3;
                                    _fun16323_ip = 121;
                                    continue _fun16323;
                                case 89:
                                    var4 = var2.Error;
                                    var7 = _closure2_slot1;
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var8 = var3;
                                    var2 = new var8[var4](var7, var6);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    throw var2;
                                case 121:
                                    var3 = _closure2_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                            }
                        };
                        return var2;
                    case 79:
                        var1 = function() { // Environment: var1
                            var0 = undefined;
                            var4 = _closure1_slot0;
                            var3 = var4.deprecate;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var1;
                    case 86:
                        return var0;
                }
            };
            var2.deprecate = var0;
            var0 = {};
            var _closure1_slot3 = var0;
            var0 = /^$/;
            var _closure1_slot4 = var0;
            var0 = var3.process;
            var0 = var0.env;
            var0 = var0.NODE_DEBUG;
            if (!var0) {
                _fun16287_ip = 489;
                continue _fun16287
            }
        case 318:
            var0 = var3.process;
            var0 = var0.env;
            var20 = var0.NODE_DEBUG;
            var19 = var20.replace;
            var18 = /[|\\{}()[\]^$+?.]/g;
            var0 = '\\$&';
            var20 = var19.bind(var20)(var18, var0);
            var19 = var20.replace;
            var18 = /\*/g;
            var0 = '.*';
            var20 = var19.bind(var20)(var18, var0);
            var19 = var20.replace;
            var18 = /,/g;
            var0 = '$|^';
            var18 = var19.bind(var20)(var18, var0);
            var0 = var18.toUpperCase;
            var18 = var0.bind(var18)();
            var20 = var3.RegExp;
            var0 = '^';
            var19 = var0 + var18;
            var0 = var20.prototype;
            var18 = Object.create(var0, {
                constructor: {
                    value: var20
                }
            });
            var0 = '$';
            var22 = var19 + var0;
            var21 = 'i';
            var23 = var18;
            var0 = new var23[var20](var22, var21, var20);
            var0 = var0 instanceof Object ? var0 : var18;
            _closure1_slot4 = var0;
        case 489:
            var0 = function(arg0) { // Environment: var1
                _fun16324: for (var _fun16324_ip = 0;;) switch (_fun16324_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.toUpperCase;
                        var1 = var0.bind(var1)();
                        var _closure2_slot0 = var1;
                        var3 = _closure1_slot3;
                        var3 = var3[var1];
                        if (var3) {
                            _fun16324_ip = 96;
                            continue _fun16324
                        }
                    case 33:
                        var4 = _closure1_slot4;
                        var3 = var4.test;
                        var3 = var3.bind(var4)(var1);
                        if (var3) {
                            _fun16324_ip = 65;
                            continue _fun16324
                        }
                    case 50:
                        var4 = _closure1_slot3;
                        var3 = function() { // Environment: var2
                            var0 = undefined;
                            return var0;
                        };
                        var4[var1] = var3;
                        _fun16324_ip = 96;
                        continue _fun16324;
                    case 65:
                        var3 = global;
                        var3 = var3.process;
                        var3 = var3.pid;
                        var _closure2_slot1 = var3;
                        var3 = _closure1_slot3;
                        var2 = function() { // Environment: var2
                            var0 = undefined;
                            var1 = undefined;
                            var4 = _closure1_slot0;
                            var3 = var4.format;
                            var2 = var3.apply;
                            var1 = arguments;
                            var7 = var2.bind(var3)(var4, var1);
                            var1 = global;
                            var5 = var1.console;
                            var4 = var5.error;
                            var9 = _closure2_slot0;
                            var8 = _closure2_slot1;
                            var10 = '%s %d: %s';
                            var11 = var5;
                            var1 = var11[var4](var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var3[var1] = var2;
                    case 96:
                        var0 = _closure1_slot3;
                        var0 = var0[var1];
                        return var0;
                }
            };
            var2.debuglog = var0;
            var2.inspect = var17;
            var0 = {};
            var18 = [1, 22];
            var0.bold = var18;
            var18 = [3, 23];
            var0.italic = var18;
            var18 = [4, 24];
            var0.underline = var18;
            var18 = [7, 27];
            var0.inverse = var18;
            var18 = [37, 39];
            var0.white = var18;
            var18 = [90, 39];
            var0.grey = var18;
            var18 = [30, 39];
            var0.black = var18;
            var18 = [34, 39];
            var0.blue = var18;
            var18 = [36, 39];
            var0.cyan = var18;
            var18 = [32, 39];
            var0.green = var18;
            var18 = [35, 39];
            var0.magenta = var18;
            var18 = [31, 39];
            var0.red = var18;
            var18 = [33, 39];
            var0.yellow = var18;
            var17.colors = var0;
            var0 = {
                'special': 'cyan',
                'number': 'yellow',
                'boolean': 'yellow',
                'undefined': 'grey',
                'null': 'bold',
                'string': 'green',
                'date': 'magenta',
                'regexp': 'red'
            };
            var17.styles = var0;
            var0 = 0;
            var17 = var6[var0];
            var0 = undefined;
            var17 = var5.bind(var0)(var17);
            var2.types = var17;
            var2.isArray = var16;
            var2.isBoolean = var15;
            var2.isNull = var14;
            var14 = function arg0() {
                var1 = null;
                var0 = arg0;
                var0 = var1 == var0;
                return var0;
            };
            var2.isNullOrUndefined = var14;
            var2.isNumber = var13;
            var2.isString = var12;
            var12 = function arg0() {
                var1 = 'symbol';
                var0 = arg0;
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
            var2.isSymbol = var12;
            var2.isUndefined = var10;
            var2.isRegExp = var11;
            var10 = var2.types;
            var10.isRegExp = var11;
            var2.isObject = var7;
            var2.isDate = var9;
            var7 = var2.types;
            var7.isDate = var9;
            var2.isError = var8;
            var7 = var2.types;
            var7.isNativeError = var8;
            var2.isFunction = var4;
            var4 = function arg0() {
                _fun16329: for (var _fun16329_ip = 0;;) switch (_fun16329_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = null;
                        var0 = var0 === var2;
                        if (var0) {
                            _fun16329_ip = 23;
                            continue _fun16329
                        }
                    case 12:
                        var3 = 'boolean';
                        var1 = typeof var2;
                        var0 = var3 === var1;
                    case 23:
                        if (var0) {
                            _fun16329_ip = 37;
                            continue _fun16329
                        }
                    case 26:
                        var3 = 'number';
                        var1 = typeof var2;
                        var0 = var3 === var1;
                    case 37:
                        if (var0) {
                            _fun16329_ip = 51;
                            continue _fun16329
                        }
                    case 40:
                        var3 = 'string';
                        var1 = typeof var2;
                        var0 = var3 === var1;
                    case 51:
                        if (var0) {
                            _fun16329_ip = 65;
                            continue _fun16329
                        }
                    case 54:
                        var3 = 'symbol';
                        var1 = typeof var2;
                        var0 = var3 === var1;
                    case 65:
                        if (var0) {
                            _fun16329_ip = 74;
                            continue _fun16329
                        }
                    case 68:
                        var1 = undefined;
                        var0 = var1 === var2;
                    case 74:
                        return var0;
                }
            };
            var2.isPrimitive = var4;
            var4 = 1;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var2.isBuffer = var4;
            var4 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var _closure1_slot5 = var4;
            var4 = function() { // Environment: var1
                var0 = undefined;
                var1 = undefined;
                var2 = global;
                var5 = var2.console;
                var4 = var5.log;
                var2 = var2.Date;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = var3;
                var2 = new var13[var2](var12);
                var9 = var2 instanceof Object ? var2 : var3;
                var6 = _closure1_slot25;
                var3 = var9.getHours;
                var3 = var3.bind(var9)();
                var3 = var6.bind(var0)(var3);
                var7 = new Array(3);
                var7[0] = var3;
                var3 = var9.getMinutes;
                var3 = var3.bind(var9)();
                var3 = var6.bind(var0)(var3);
                var7[1] = var3;
                var3 = var9.getSeconds;
                var3 = var3.bind(var9)();
                var3 = var6.bind(var0)(var3);
                var7[2] = var3;
                var6 = var7.join;
                var3 = ':';
                var3 = var6.bind(var7)(var3);
                var6 = var9.getDate;
                var6 = var6.bind(var9)();
                var7 = new Array(3);
                var7[0] = var6;
                var8 = _closure1_slot5;
                var6 = var9.getMonth;
                var6 = var6.bind(var9)();
                var6 = var8[var6];
                var7[1] = var6;
                var7[2] = var3;
                var6 = var7.join;
                var3 = ' ';
                var3 = var6.bind(var7)(var3);
                var7 = _closure1_slot0;
                var6 = var7.format;
                var2 = var6.apply;
                var1 = arguments;
                var2 = var2.bind(var6)(var7, var1);
                var1 = '%s - %s';
                var1 = var4.bind(var5)(var1, var3, var2);
                return var0;
            };
            var2.log = var4;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var2.inherits = var4;
            var4 = function(arg0, arg1) { // Environment: var1
                _fun16331: for (var _fun16331_ip = 0;;) switch (_fun16331_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = arg1;
                        if (!var4) {
                            _fun16331_ip = 26;
                            continue _fun16331
                        }
                    case 9:
                        var2 = _closure1_slot20;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var4);
                        if (var1) {
                            _fun16331_ip = 28;
                            continue _fun16331
                        }
                    case 26:
                        return var0;
                    case 28:
                        var1 = global;
                        var2 = var1.Object;
                        var1 = var2.keys;
                        var3 = var1.bind(var2)(var4);
                        var1 = var3.length;
                        var1 = parseFloat(var1);
                        var2 = var1 - 1;
                        if (!var1) {
                            _fun16331_ip = 85;
                            continue _fun16331
                        }
                    case 60:
                        var5 = var3[var2];
                        var1 = var3[var2];
                        var1 = var4[var1];
                        var0[var5] = var1;
                        var1 = parseFloat(var2);
                        var2 = var1 - 1;
                        if (var1) {
                            _fun16331_ip = 60;
                            continue _fun16331
                        }
                    case 85:
                        return var0;
                }
            };
            var2._extend = var4;
            var4 = var3.Symbol;
            var6 = 'undefined';
            var5 = typeof var4;
            var4 = undefined;
            if (!(var6 !== var5)) {
                _fun16287_ip = 984;
                continue _fun16287
            }
        case 967:
            var5 = var3.Symbol;
            var3 = 'util.promisify.custom';
            var4 = var5.bind(var0)(var3);
        case 984:
            var _closure1_slot6 = var4;
            var3 = function arg0() {
                _fun16332: for (var _fun16332_ip = 0;;) switch (_fun16332_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var6 = function() {
                            _fun16333: for (var _fun16333_ip = 0;;) switch (_fun16333_ip) {
                                case 0:
                                    var3 = undefined;
                                    var6 = undefined;
                                    var0 = undefined;
                                    var2 = undefined;
                                    var4 = global;
                                    var7 = var4.Promise;
                                    var4 = var7.prototype;
                                    var5 = Object.create(var4, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var10 = function(arg0, arg1) { // Environment: var1
                                        var0 = arg0;
                                        var _closure3_slot0 = var0;
                                        var0 = arg1;
                                        var _closure3_slot1 = var0;
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var11 = var5;
                                    var4 = new var11[var7](var10, var9);
                                    var0 = var4 instanceof Object ? var4 : var5;
                                    var2 = new Array(0);
                                    var4 = arguments.length;
                                    var5 = 0;
                                    var4 = var5 < var4;
                                    if (!var4) {
                                        _fun16333_ip = 86;
                                        continue _fun16333
                                    }
                                case 59:
                                    var8 = var2;
                                    var7 = var8.push;
                                    var4 = arguments[var5];
                                    var4 = var7.bind(var8)(var4);
                                    var5 = var5 + 1;
                                    var4 = arguments.length;
                                    if (var5 < var4) {
                                        _fun16333_ip = 59;
                                        continue _fun16333
                                    }
                                case 86:
                                    var6 = var2;
                                    var5 = var6.push;
                                    var4 = function(arg0, arg1) { // Environment: var1
                                        _fun16335: for (var _fun16335_ip = 0;;) switch (_fun16335_ip) {
                                            case 0:
                                                var2 = arg0;
                                                if (var2) {
                                                    _fun16335_ip = 25;
                                                    continue _fun16335
                                                }
                                            case 9:
                                                var4 = _closure3_slot0;
                                                var3 = undefined;
                                                var1 = arg1;
                                                var1 = var4.bind(var3)(var1);
                                                _fun16335_ip = 36;
                                                continue _fun16335;
                                            case 25:
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 36:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var4 = var5.bind(var6)(var4);
                                case 104: // try_start_0
                                    var6 = _closure2_slot0;
                                    var5 = var6.apply;
                                    var4 = var2;
                                    var2 = this;
                                    var2 = var5.bind(var6)(var2, var4);
                                case 127: // try_end0
                                    _fun16333_ip = 140;
                                    continue _fun16333;
                                case 129: // catch_target0
                                    CatchBlockStart(arg_register = 2);
                                    var1 = _closure3_slot1;
                                    var1 = var1.bind(var3)(var2);
                                case 140:
                                    return var0;
                            }
                        };
                        var3 = 'function';
                        var0 = typeof var2;
                        if (!(var3 === var0)) {
                            _fun16332_ip = 255;
                            continue _fun16332
                        }
                    case 28:
                        var0 = _closure1_slot6;
                        if (!var0) {
                            _fun16332_ip = 49;
                            continue _fun16332
                        }
                    case 38:
                        var0 = _closure1_slot6;
                        var0 = var2[var0];
                        if (var0) {
                            _fun16332_ip = 162;
                            continue _fun16332
                        }
                    case 49:
                        var0 = global;
                        var7 = var0.Object;
                        var5 = var7.setPrototypeOf;
                        var8 = var0.Object;
                        var4 = var8.getPrototypeOf;
                        var4 = var4.bind(var8)(var2);
                        var4 = var5.bind(var7)(var6, var4);
                        var4 = _closure1_slot6;
                        if (!var4) {
                            _fun16332_ip = 131;
                            continue _fun16332
                        }
                    case 93:
                        var8 = var0.Object;
                        var7 = var8.defineProperty;
                        var5 = _closure1_slot6;
                        var4 = {
                            'value': null,
                            'enumerable': false,
                            'writable': false,
                            'configurable': true
                        };
                        var4.value = var6;
                        var4 = var7.bind(var8)(var6, var5, var4);
                    case 131:
                        var5 = var0.Object;
                        var4 = var5.defineProperties;
                        var7 = _closure1_slot1;
                        var0 = undefined;
                        var0 = var7.bind(var0)(var2);
                        var0 = var4.bind(var5)(var6, var0);
                        return var0;
                    case 162:
                        var0 = _closure1_slot6;
                        var0 = var2[var0];
                        var2 = typeof var0;
                        if (!(var3 === var2)) {
                            _fun16332_ip = 219;
                            continue _fun16332
                        }
                    case 177:
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.defineProperty;
                        var2 = _closure1_slot6;
                        var1 = {
                            'value': null,
                            'enumerable': false,
                            'writable': false,
                            'configurable': true
                        };
                        var1.value = var0;
                        var1 = var3.bind(var4)(var0, var2, var1);
                        return var0;
                    case 219:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var12 = 'The "util.promisify.custom" argument must be of type Function';
                        var13 = var1;
                        var0 = new var13[var2](var12, var11);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 255:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var12 = 'The "original" argument must be of type Function';
                        var13 = var1;
                        var0 = new var13[var2](var12, var11);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var2.promisify = var3;
            var3 = var2.promisify;
            var3.custom = var4;
            var1 = function arg0() {
                _fun16336: for (var _fun16336_ip = 0;;) switch (_fun16336_ip) {
                    case 0:
                        var5 = arg0;
                        var _closure2_slot0 = var5;
                        var0 = function() {
                            _fun16337: for (var _fun16337_ip = 0;;) switch (_fun16337_ip) {
                                case 0:
                                    var5 = this;
                                    var0 = undefined;
                                    var6 = undefined;
                                    var4 = new Array(0);
                                    var2 = arguments.length;
                                    var3 = 0;
                                    var2 = var3 < var2;
                                    if (!var2) {
                                        _fun16337_ip = 48;
                                        continue _fun16337
                                    }
                                case 24:
                                    var7 = var4.push;
                                    var2 = arguments[var3];
                                    var2 = var7.bind(var4)(var2);
                                    var3 = var3 + 1;
                                    var2 = arguments.length;
                                    if (var3 < var2) {
                                        _fun16337_ip = 24;
                                        continue _fun16337
                                    }
                                case 48:
                                    var2 = var4.pop;
                                    var2 = var2.bind(var4)();
                                    var _closure3_slot0 = var2;
                                    var3 = 'function';
                                    var2 = typeof var2;
                                    if (!(var3 === var2)) {
                                        _fun16337_ip = 127;
                                        continue _fun16337
                                    }
                                case 73:
                                    var _closure3_slot1 = var5;
                                    var2 = function() {
                                        var0 = undefined;
                                        var3 = _closure3_slot0;
                                        var2 = var3.apply;
                                        var1 = _closure3_slot1;
                                        var0 = arguments;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var _closure3_slot2 = var2;
                                    var3 = _closure2_slot0;
                                    var2 = var3.apply;
                                    var4 = var2.bind(var3)(var5, var4);
                                    var3 = var4.then;
                                    var2 = function(arg0) { // Environment: var1
                                        var0 = global;
                                        var2 = var0.process;
                                        var1 = var2.nextTick;
                                        var5 = _closure3_slot2;
                                        var4 = var5.bind;
                                        var3 = null;
                                        var0 = arg0;
                                        var0 = var4.bind(var5)(var3, var3, var0);
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = global;
                                        var2 = var0.process;
                                        var1 = var2.nextTick;
                                        var6 = _closure1_slot27;
                                        var5 = var6.bind;
                                        var4 = _closure3_slot2;
                                        var3 = null;
                                        var0 = arg0;
                                        var0 = var5.bind(var6)(var3, var0, var4);
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                                case 127:
                                    var0 = global;
                                    var2 = var0.TypeError;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var9 = 'The last argument must be of type Function';
                                    var10 = var1;
                                    var0 = new var10[var2](var9, var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var2 = 'function';
                        var1 = typeof var5;
                        if (!(var2 === var1)) {
                            _fun16336_ip = 96;
                            continue _fun16336
                        }
                    case 25:
                        var1 = global;
                        var4 = var1.Object;
                        var3 = var4.setPrototypeOf;
                        var6 = var1.Object;
                        var2 = var6.getPrototypeOf;
                        var2 = var2.bind(var6)(var5);
                        var2 = var3.bind(var4)(var0, var2);
                        var3 = var1.Object;
                        var2 = var3.defineProperties;
                        var4 = _closure1_slot1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var5);
                        var1 = var2.bind(var3)(var0, var1);
                        return var0;
                    case 96:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var8 = 'The "original" argument must be of type Function';
                        var9 = var1;
                        var0 = new var9[var2](var8, var7);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var2.callbackify = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1391, 1408, 1409]);