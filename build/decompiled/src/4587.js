// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = module;
    var _closure1_slot0 = var1;
    var1 = global;
    var2 = var1.Math;
    var1 = function(arg0) { // Environment: var0
        _fun42285: for (var _fun42285_ip = 0;;) switch (_fun42285_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var2 = function(arg0, arg1) { // Original name: tinycolor, environment: var3
                    _fun42286: for (var _fun42286_ip = 0;;) switch (_fun42286_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = arg1;
                            var3 = this;
                            if (var4) {
                                _fun42286_ip = 13;
                                continue _fun42286
                            }
                        case 11:
                            var4 = {};
                        case 13:
                            if (var0) {
                                _fun42286_ip = 20;
                                continue _fun42286
                            }
                        case 16:
                            var0 = '';
                        case 20:
                            var1 = _closure2_slot11;
                            var1 = var0 instanceof var1;
                            if (var1) {
                                _fun42286_ip = 342;
                                continue _fun42286
                            }
                        case 37:
                            var1 = _closure2_slot11;
                            var1 = var3 instanceof var1;
                            if (var1) {
                                _fun42286_ip = 80;
                                continue _fun42286
                            }
                        case 48:
                            var1 = _closure2_slot11;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var11 = var2;
                            var10 = var0;
                            var9 = var4;
                            var1 = new var11[var1](var10, var9, var8);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        case 80:
                            var2 = function(arg0) { // Original name: inputToRGB, environment: var1
                                _fun42287: for (var _fun42287_ip = 0;;) switch (_fun42287_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var9 = {
                                            'r': 0,
                                            'g': 0,
                                            'b': 0
                                        };
                                        var7 = 0;
                                        var1 = 'string';
                                        var0 = typeof var4;
                                        var3 = var4;
                                        if (!(var1 === var0)) {
                                            _fun42287_ip = 1132;
                                            continue _fun42287
                                        }
                                    case 32:
                                        var1 = var4.replace;
                                        var0 = _closure2_slot1;
                                        var5 = '';
                                        var4 = var1.bind(var4)(var0, var5);
                                        var1 = var4.replace;
                                        var0 = _closure2_slot2;
                                        var1 = var1.bind(var4)(var0, var5);
                                        var0 = var1.toLowerCase;
                                        var5 = var0.bind(var1)();
                                        var0 = _closure2_slot8;
                                        var0 = var0[var5];
                                        if (var0) {
                                            _fun42287_ip = 125;
                                            continue _fun42287
                                        }
                                    case 90:
                                        var0 = 'transparent';
                                        var0 = var0 == var5;
                                        var1 = var5;
                                        var12 = false;
                                        if (!var0) {
                                            _fun42287_ip = 135;
                                            continue _fun42287
                                        }
                                    case 106:
                                        var0 = {
                                            'r': 0,
                                            'g': 0,
                                            'b': 0,
                                            'a': 0,
                                            'format': 'name'
                                        };
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 125:
                                        var4 = _closure2_slot8;
                                        var1 = var4[var5];
                                        var12 = true;
                                    case 135:
                                        var4 = _closure2_slot10;
                                        var5 = var4.rgb;
                                        var4 = var5.exec;
                                        var4 = var4.bind(var5)(var1);
                                        var14 = var1;
                                        if (var4) {
                                            _fun42287_ip = 1090;
                                            continue _fun42287
                                        }
                                    case 165:
                                        var1 = _closure2_slot10;
                                        var5 = var1.rgba;
                                        var1 = var5.exec;
                                        var5 = var1.bind(var5)(var14);
                                        if (var5) {
                                            _fun42287_ip = 1038;
                                            continue _fun42287
                                        }
                                    case 192:
                                        var1 = _closure2_slot10;
                                        var6 = var1.hsl;
                                        var1 = var6.exec;
                                        var6 = var1.bind(var6)(var14);
                                        if (var6) {
                                            _fun42287_ip = 998;
                                            continue _fun42287
                                        }
                                    case 219:
                                        var1 = _closure2_slot10;
                                        var8 = var1.hsla;
                                        var1 = var8.exec;
                                        var8 = var1.bind(var8)(var14);
                                        if (var8) {
                                            _fun42287_ip = 944;
                                            continue _fun42287
                                        }
                                    case 246:
                                        var1 = _closure2_slot10;
                                        var10 = var1.hsv;
                                        var1 = var10.exec;
                                        var10 = var1.bind(var10)(var14);
                                        if (var10) {
                                            _fun42287_ip = 901;
                                            continue _fun42287
                                        }
                                    case 273:
                                        var1 = _closure2_slot10;
                                        var11 = var1.hsva;
                                        var1 = var11.exec;
                                        var11 = var1.bind(var11)(var14);
                                        if (var11) {
                                            _fun42287_ip = 847;
                                            continue _fun42287
                                        }
                                    case 300:
                                        var1 = _closure2_slot10;
                                        var13 = var1.hex8;
                                        var1 = var13.exec;
                                        var15 = var1.bind(var13)(var14);
                                        if (var15) {
                                            _fun42287_ip = 747;
                                            continue _fun42287
                                        }
                                    case 327:
                                        var1 = _closure2_slot10;
                                        var13 = var1.hex6;
                                        var1 = var13.exec;
                                        var17 = var1.bind(var13)(var14);
                                        if (var17) {
                                            _fun42287_ip = 667;
                                            continue _fun42287
                                        }
                                    case 354:
                                        var1 = _closure2_slot10;
                                        var13 = var1.hex4;
                                        var1 = var13.exec;
                                        var19 = var1.bind(var13)(var14);
                                        if (var19) {
                                            _fun42287_ip = 523;
                                            continue _fun42287
                                        }
                                    case 381:
                                        var1 = _closure2_slot10;
                                        var13 = var1.hex3;
                                        var1 = var13.exec;
                                        var20 = var1.bind(var13)(var14);
                                        var0 = false;
                                        if (!var20) {
                                            _fun42287_ip = 1129;
                                            continue _fun42287
                                        }
                                    case 410:
                                        var1 = {};
                                        var16 = _closure2_slot32;
                                        var13 = 1;
                                        var14 = var20[var13];
                                        var14 = '' + var14;
                                        var13 = var20[var13];
                                        var13 = var14 + var13;
                                        var14 = undefined;
                                        var13 = var16.bind(var14)(var13);
                                        var1.r = var13;
                                        var13 = 2;
                                        var18 = var20[var13];
                                        var18 = '' + var18;
                                        var13 = var20[var13];
                                        var13 = var18 + var13;
                                        var13 = var16.bind(var14)(var13);
                                        var1.g = var13;
                                        var13 = 3;
                                        var18 = var20[var13];
                                        var18 = '' + var18;
                                        var13 = var20[var13];
                                        var13 = var18 + var13;
                                        var13 = var16.bind(var14)(var13);
                                        var1.b = var13;
                                        var13 = 'hex';
                                        if (!var12) {
                                            _fun42287_ip = 511;
                                            continue _fun42287
                                        }
                                    case 507:
                                        var13 = 'name';
                                    case 511:
                                        var1.format = var13;
                                        var0 = var1;
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 523:
                                        var1 = {};
                                        var14 = _closure2_slot32;
                                        var13 = 1;
                                        var16 = var19[var13];
                                        var16 = '' + var16;
                                        var13 = var19[var13];
                                        var13 = var16 + var13;
                                        var16 = undefined;
                                        var13 = var14.bind(var16)(var13);
                                        var1.r = var13;
                                        var13 = 2;
                                        var18 = var19[var13];
                                        var18 = '' + var18;
                                        var13 = var19[var13];
                                        var13 = var18 + var13;
                                        var13 = var14.bind(var16)(var13);
                                        var1.g = var13;
                                        var13 = 3;
                                        var18 = var19[var13];
                                        var18 = '' + var18;
                                        var13 = var19[var13];
                                        var13 = var18 + var13;
                                        var13 = var14.bind(var16)(var13);
                                        var1.b = var13;
                                        var14 = _closure2_slot36;
                                        var13 = 4;
                                        var18 = var19[var13];
                                        var18 = '' + var18;
                                        var13 = var19[var13];
                                        var13 = var18 + var13;
                                        var13 = var14.bind(var16)(var13);
                                        var1.a = var13;
                                        var13 = 'hex8';
                                        if (!var12) {
                                            _fun42287_ip = 655;
                                            continue _fun42287
                                        }
                                    case 651:
                                        var13 = 'name';
                                    case 655:
                                        var1.format = var13;
                                        var0 = var1;
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 667:
                                        var1 = {};
                                        var16 = _closure2_slot32;
                                        var13 = 1;
                                        var13 = var17[var13];
                                        var14 = undefined;
                                        var13 = var16.bind(var14)(var13);
                                        var1.r = var13;
                                        var13 = 2;
                                        var13 = var17[var13];
                                        var13 = var16.bind(var14)(var13);
                                        var1.g = var13;
                                        var13 = 3;
                                        var13 = var17[var13];
                                        var13 = var16.bind(var14)(var13);
                                        var1.b = var13;
                                        var13 = 'hex';
                                        if (!var12) {
                                            _fun42287_ip = 735;
                                            continue _fun42287
                                        }
                                    case 731:
                                        var13 = 'name';
                                    case 735:
                                        var1.format = var13;
                                        var0 = var1;
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 747:
                                        var1 = {};
                                        var16 = _closure2_slot32;
                                        var13 = 1;
                                        var13 = var15[var13];
                                        var14 = undefined;
                                        var13 = var16.bind(var14)(var13);
                                        var1.r = var13;
                                        var13 = 2;
                                        var13 = var15[var13];
                                        var13 = var16.bind(var14)(var13);
                                        var1.g = var13;
                                        var13 = 3;
                                        var13 = var15[var13];
                                        var13 = var16.bind(var14)(var13);
                                        var1.b = var13;
                                        var13 = _closure2_slot36;
                                        var2 = 4;
                                        var2 = var15[var2];
                                        var2 = var13.bind(var14)(var2);
                                        var1.a = var2;
                                        var2 = 'hex8';
                                        if (!var12) {
                                            _fun42287_ip = 835;
                                            continue _fun42287
                                        }
                                    case 831:
                                        var2 = 'name';
                                    case 835:
                                        var1.format = var2;
                                        var0 = var1;
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 847:
                                        var1 = {};
                                        var2 = 1;
                                        var2 = var11[var2];
                                        var1.h = var2;
                                        var2 = 2;
                                        var2 = var11[var2];
                                        var1.s = var2;
                                        var2 = 3;
                                        var2 = var11[var2];
                                        var1.v = var2;
                                        var2 = 4;
                                        var2 = var11[var2];
                                        var1.a = var2;
                                        var0 = var1;
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 901:
                                        var1 = {};
                                        var2 = 1;
                                        var2 = var10[var2];
                                        var1.h = var2;
                                        var2 = 2;
                                        var2 = var10[var2];
                                        var1.s = var2;
                                        var2 = 3;
                                        var2 = var10[var2];
                                        var1.v = var2;
                                        var0 = var1;
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 944:
                                        var1 = {};
                                        var2 = 1;
                                        var2 = var8[var2];
                                        var1.h = var2;
                                        var2 = 2;
                                        var2 = var8[var2];
                                        var1.s = var2;
                                        var2 = 3;
                                        var2 = var8[var2];
                                        var1.l = var2;
                                        var2 = 4;
                                        var2 = var8[var2];
                                        var1.a = var2;
                                        var0 = var1;
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 998:
                                        var1 = {};
                                        var2 = 1;
                                        var2 = var6[var2];
                                        var1.h = var2;
                                        var2 = 2;
                                        var2 = var6[var2];
                                        var1.s = var2;
                                        var2 = 3;
                                        var2 = var6[var2];
                                        var1.l = var2;
                                        var0 = var1;
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 1038:
                                        var1 = {};
                                        var2 = 1;
                                        var2 = var5[var2];
                                        var1.r = var2;
                                        var2 = 2;
                                        var2 = var5[var2];
                                        var1.g = var2;
                                        var2 = 3;
                                        var2 = var5[var2];
                                        var1.b = var2;
                                        var2 = 4;
                                        var2 = var5[var2];
                                        var1.a = var2;
                                        var0 = var1;
                                        _fun42287_ip = 1129;
                                        continue _fun42287;
                                    case 1090:
                                        var1 = {};
                                        var2 = 1;
                                        var2 = var4[var2];
                                        var1.r = var2;
                                        var2 = 2;
                                        var2 = var4[var2];
                                        var1.g = var2;
                                        var2 = 3;
                                        var2 = var4[var2];
                                        var1.b = var2;
                                        var0 = var1;
                                    case 1129:
                                        var3 = var0;
                                    case 1132:
                                        var6 = 1;
                                        var10 = 'object';
                                        var5 = typeof var3;
                                        var2 = var9;
                                        var1 = var6;
                                        var8 = false;
                                        var4 = false;
                                        if (!(var10 === var5)) {
                                            _fun42287_ip = 1812;
                                            continue _fun42287
                                        }
                                    case 1159:
                                        var11 = _closure2_slot37;
                                        var5 = var3.r;
                                        var13 = undefined;
                                        var5 = var11.bind(var13)(var5);
                                        if (!var5) {
                                            _fun42287_ip = 1219;
                                            continue _fun42287
                                        }
                                    case 1181:
                                        var11 = _closure2_slot37;
                                        var5 = var3.g;
                                        var5 = var11.bind(var13)(var5);
                                        if (!var5) {
                                            _fun42287_ip = 1219;
                                            continue _fun42287
                                        }
                                    case 1198:
                                        var11 = _closure2_slot37;
                                        var5 = var3.b;
                                        var5 = var11.bind(var13)(var5);
                                        if (var5) {
                                            _fun42287_ip = 1648;
                                            continue _fun42287
                                        }
                                    case 1219:
                                        var11 = _closure2_slot37;
                                        var5 = var3.h;
                                        var5 = var11.bind(var13)(var5);
                                        if (!var5) {
                                            _fun42287_ip = 1270;
                                            continue _fun42287
                                        }
                                    case 1236:
                                        var11 = _closure2_slot37;
                                        var5 = var3.s;
                                        var5 = var11.bind(var13)(var5);
                                        if (!var5) {
                                            _fun42287_ip = 1270;
                                            continue _fun42287
                                        }
                                    case 1253:
                                        var11 = _closure2_slot37;
                                        var5 = var3.v;
                                        var5 = var11.bind(var13)(var5);
                                        if (var5) {
                                            _fun42287_ip = 1382;
                                            continue _fun42287
                                        }
                                    case 1270:
                                        var11 = _closure2_slot37;
                                        var5 = var3.h;
                                        var11 = var11.bind(var13)(var5);
                                        if (!var11) {
                                            _fun42287_ip = 1301;
                                            continue _fun42287
                                        }
                                    case 1287:
                                        var12 = _closure2_slot37;
                                        var5 = var3.s;
                                        var11 = var12.bind(var13)(var5);
                                    case 1301:
                                        if (!var11) {
                                            _fun42287_ip = 1318;
                                            continue _fun42287
                                        }
                                    case 1304:
                                        var12 = _closure2_slot37;
                                        var5 = var3.l;
                                        var11 = var12.bind(var13)(var5);
                                    case 1318:
                                        var5 = false;
                                        var0 = false;
                                        if (!var11) {
                                            _fun42287_ip = 1777;
                                            continue _fun42287
                                        }
                                    case 1328:
                                        var12 = _closure2_slot34;
                                        var11 = var3.s;
                                        var15 = var12.bind(var13)(var11);
                                        var11 = var3.l;
                                        var14 = var12.bind(var13)(var11);
                                        var12 = var3.h;
                                        var11 = function(arg0, arg1, arg2) { // Original name: hslToRgb, environment: var11
                                            _fun42288: for (var _fun42288_ip = 0;;) switch (_fun42288_ip) {
                                                case 0:
                                                    var9 = function(arg0, arg1, arg2) { // Original name: hue2rgb, environment: var0
                                                        _fun42289: for (var _fun42289_ip = 0;;) switch (_fun42289_ip) {
                                                            case 0:
                                                                var2 = arg0;
                                                                var1 = arg1;
                                                                var3 = arg2;
                                                                var0 = 0;
                                                                var4 = var3;
                                                                if (!(var4 < var0)) {
                                                                    _fun42289_ip = 25;
                                                                    continue _fun42289
                                                                }
                                                            case 18:
                                                                var0 = 1;
                                                                var4 = var3 + var0;
                                                            case 25:
                                                                var0 = 1;
                                                                var3 = var4;
                                                                if (!(var3 > var0)) {
                                                                    _fun42289_ip = 39;
                                                                    continue _fun42289
                                                                }
                                                            case 35:
                                                                var3 = var4 - var0;
                                                            case 39:
                                                                var0 = 0.16666666666666666;
                                                                if (!(!(var3 < var0))) {
                                                                    _fun42289_ip = 115;
                                                                    continue _fun42289
                                                                }
                                                            case 53:
                                                                var4 = 0.5;
                                                                var0 = var1;
                                                                if (!(!(var3 < var4))) {
                                                                    _fun42289_ip = 113;
                                                                    continue _fun42289
                                                                }
                                                            case 70:
                                                                var5 = 0.6666666666666666;
                                                                var4 = var2;
                                                                if (!(var3 < var5)) {
                                                                    _fun42289_ip = 110;
                                                                    continue _fun42289
                                                                }
                                                            case 87:
                                                                var6 = var1 - var2;
                                                                var5 = var5 - var3;
                                                                var6 = var6 * var5;
                                                                var5 = 6;
                                                                var5 = var6 * var5;
                                                                var4 = var2 + var5;
                                                            case 110:
                                                                var0 = var4;
                                                            case 113:
                                                                _fun42289_ip = 134;
                                                                continue _fun42289;
                                                            case 115:
                                                                var4 = var1 - var2;
                                                                var1 = 6;
                                                                var1 = var1 * var4;
                                                                var1 = var1 * var3;
                                                                var0 = var2 + var1;
                                                            case 134:
                                                                return var0;
                                                        }
                                                    };
                                                    var2 = _closure2_slot30;
                                                    var8 = undefined;
                                                    var1 = arg0;
                                                    var0 = 360;
                                                    var10 = var2.bind(var8)(var1, var0);
                                                    var0 = arg1;
                                                    var1 = 100;
                                                    var5 = var2.bind(var8)(var0, var1);
                                                    var0 = arg2;
                                                    var1 = var2.bind(var8)(var0, var1);
                                                    var0 = 0;
                                                    var4 = var1;
                                                    var3 = var4;
                                                    var2 = var3;
                                                    if (!(var0 !== var5)) {
                                                        _fun42288_ip = 156;
                                                        continue _fun42288
                                                    }
                                                case 67:
                                                    var0 = 0.5;
                                                    if (!(!(var1 < var0))) {
                                                        _fun42288_ip = 95;
                                                        continue _fun42288
                                                    }
                                                case 81:
                                                    var6 = var1 + var5;
                                                    var0 = var1 * var5;
                                                    var7 = var6 - var0;
                                                    _fun42288_ip = 106;
                                                    continue _fun42288;
                                                case 95:
                                                    var0 = 1;
                                                    var0 = var0 + var5;
                                                    var7 = var1 * var0;
                                                case 106:
                                                    var0 = 2;
                                                    var0 = var0 * var1;
                                                    var6 = var0 - var7;
                                                    var0 = 0.3333333333333333;
                                                    var1 = var10 + var0;
                                                    var4 = var9.bind(var8)(var6, var7, var1);
                                                    var3 = var9.bind(var8)(var6, var7, var10);
                                                    var0 = var10 - var0;
                                                    var2 = var9.bind(var8)(var6, var7, var0);
                                                case 156:
                                                    var0 = {};
                                                    var1 = 255;
                                                    var4 = var1 * var4;
                                                    var0.r = var4;
                                                    var3 = var1 * var3;
                                                    var0.g = var3;
                                                    var1 = var1 * var2;
                                                    var0.b = var1;
                                                    return var0;
                                            }
                                        };
                                        var9 = var11.bind(var13)(var12, var15, var14);
                                        var5 = true;
                                        var0 = 'hsl';
                                        _fun42287_ip = 1777;
                                        continue _fun42287;
                                    case 1382:
                                        var12 = _closure2_slot34;
                                        var11 = var3.s;
                                        var16 = var12.bind(var13)(var11);
                                        var11 = var3.v;
                                        var17 = var12.bind(var13)(var11);
                                        var12 = var3.h;
                                        var15 = _closure2_slot30;
                                        var11 = 360;
                                        var11 = var15.bind(var13)(var12, var11);
                                        var12 = 6;
                                        var14 = var12 * var11;
                                        var11 = 100;
                                        var16 = var15.bind(var13)(var16, var11);
                                        var17 = var15.bind(var13)(var17, var11);
                                        var15 = _closure2_slot0;
                                        var11 = var15.floor;
                                        var11 = var11.bind(var15)(var14);
                                        var15 = var14 - var11;
                                        var14 = var6 - var16;
                                        var19 = var17 * var14;
                                        var14 = var15 * var16;
                                        var14 = var6 - var14;
                                        var14 = var17 * var14;
                                        var15 = var6 - var15;
                                        var15 = var15 * var16;
                                        var15 = var6 - var15;
                                        var18 = var17 * var15;
                                        var12 = var11 % var12;
                                        var11 = new Array(6);
                                        var11[0] = var17;
                                        var11[1] = var14;
                                        var11[2] = var19;
                                        var11[3] = var19;
                                        var11[4] = var18;
                                        var11[5] = var17;
                                        var16 = var11[var12];
                                        var11 = new Array(6);
                                        var11[0] = var18;
                                        var11[1] = var17;
                                        var11[2] = var17;
                                        var11[3] = var14;
                                        var11[4] = var19;
                                        var11[5] = var19;
                                        var15 = var11[var12];
                                        var11 = new Array(6);
                                        var11[0] = var19;
                                        var11[1] = var19;
                                        var11[2] = var18;
                                        var11[3] = var17;
                                        var11[4] = var17;
                                        var11[5] = var14;
                                        var12 = var11[var12];
                                        var14 = {};
                                        var11 = 255;
                                        var16 = var11 * var16;
                                        var14.r = var16;
                                        var15 = var11 * var15;
                                        var14.g = var15;
                                        var11 = var11 * var12;
                                        var14.b = var11;
                                        var5 = true;
                                        var0 = 'hsv';
                                        var9 = var14;
                                        _fun42287_ip = 1777;
                                        continue _fun42287;
                                    case 1648:
                                        var16 = var3.r;
                                        var15 = var3.g;
                                        var14 = var3.b;
                                        var12 = {};
                                        var10 = _closure2_slot30;
                                        var11 = 255;
                                        var16 = var10.bind(var13)(var16, var11);
                                        var16 = var11 * var16;
                                        var12.r = var16;
                                        var15 = var10.bind(var13)(var15, var11);
                                        var15 = var11 * var15;
                                        var12.g = var15;
                                        var10 = var10.bind(var13)(var14, var11);
                                        var10 = var11 * var10;
                                        var12.b = var10;
                                        var10 = global;
                                        var11 = var10.String;
                                        var10 = var3.r;
                                        var13 = var11.bind(var13)(var10);
                                        var11 = var13.substr;
                                        var10 = -1;
                                        var13 = var11.bind(var13)(var10);
                                        var10 = 'rgb';
                                        var11 = '%';
                                        if (!(var11 === var13)) {
                                            _fun42287_ip = 1769;
                                            continue _fun42287
                                        }
                                    case 1763:
                                        var10 = 'prgb';
                                    case 1769:
                                        var5 = true;
                                        var0 = var10;
                                        var9 = var12;
                                    case 1777:
                                        var11 = var3.hasOwnProperty;
                                        var10 = 'a';
                                        var10 = var11.bind(var3)(var10);
                                        if (!var10) {
                                            _fun42287_ip = 1800;
                                            continue _fun42287
                                        }
                                    case 1795:
                                        var6 = var3.a;
                                    case 1800:
                                        var1 = var6;
                                        var2 = var9;
                                        var8 = var5;
                                        var4 = var0;
                                    case 1812:
                                        var0 = _closure2_slot29;
                                        var5 = undefined;
                                        var1 = var0.bind(var5)(var1);
                                        var0 = {};
                                        var0.ok = var8;
                                        var3 = var3.format;
                                        if (var3) {
                                            _fun42287_ip = 1844;
                                            continue _fun42287
                                        }
                                    case 1841:
                                        var3 = var4;
                                    case 1844:
                                        var0.format = var3;
                                        var8 = _closure2_slot5;
                                        var4 = _closure2_slot6;
                                        var3 = var2.r;
                                        var3 = var4.bind(var5)(var3, var7);
                                        var4 = 255;
                                        var3 = var8.bind(var5)(var4, var3);
                                        var0.r = var3;
                                        var8 = _closure2_slot5;
                                        var9 = _closure2_slot6;
                                        var3 = var2.g;
                                        var3 = var9.bind(var5)(var3, var7);
                                        var3 = var8.bind(var5)(var4, var3);
                                        var0.g = var3;
                                        var3 = _closure2_slot5;
                                        var6 = _closure2_slot6;
                                        var2 = var2.b;
                                        var2 = var6.bind(var5)(var2, var7);
                                        var2 = var3.bind(var5)(var4, var2);
                                        var0.b = var2;
                                        var0.a = var1;
                                        return var0;
                                }
                            };
                            var1 = undefined;
                            var2 = var2.bind(var1)(var0);
                            var3._originalInput = var0;
                            var6 = var2.r;
                            var3._r = var6;
                            var6 = var2.g;
                            var3._g = var6;
                            var6 = var2.b;
                            var3._b = var6;
                            var6 = var2.a;
                            var3._a = var6;
                            var8 = _closure2_slot4;
                            var6 = var3._a;
                            var7 = 100;
                            var6 = var7 * var6;
                            var6 = var8.bind(var1)(var6);
                            var6 = var6 / var7;
                            var3._roundA = var6;
                            var6 = var4.format;
                            if (var6) {
                                _fun42286_ip = 190;
                                continue _fun42286
                            }
                        case 185:
                            var6 = var2.format;
                        case 190:
                            var3._format = var6;
                            var4 = var4.gradientType;
                            var3._gradientType = var4;
                            var4 = var3._r;
                            var6 = 1;
                            if (!(var4 < var6)) {
                                _fun42286_ip = 244;
                                continue _fun42286
                            }
                        case 223:
                            var7 = _closure2_slot4;
                            var4 = var3._r;
                            var4 = var7.bind(var1)(var4);
                            var3._r = var4;
                        case 244:
                            var4 = var3._g;
                            if (!(var4 < var6)) {
                                _fun42286_ip = 275;
                                continue _fun42286
                            }
                        case 254:
                            var7 = _closure2_slot4;
                            var4 = var3._g;
                            var4 = var7.bind(var1)(var4);
                            var3._g = var4;
                        case 275:
                            var4 = var3._b;
                            if (!(var4 < var6)) {
                                _fun42286_ip = 306;
                                continue _fun42286
                            }
                        case 285:
                            var6 = _closure2_slot4;
                            var4 = var3._b;
                            var4 = var6.bind(var1)(var4);
                            var3._b = var4;
                        case 306:
                            var2 = var2.ok;
                            var3._ok = var2;
                            var2 = _closure2_slot3;
                            var2 = parseFloat(var2);
                            var4 = var2 + 1;
                            _closure2_slot3 = var4;
                            var3._tc_id = var2;
                            return var1;
                        case 342:
                            return var0;
                    }
                };
                var _closure2_slot11 = var2;
                var1 = function(arg0, arg1, arg2) { // Original name: rgbToHsl, environment: var3
                    _fun42290: for (var _fun42290_ip = 0;;) switch (_fun42290_ip) {
                        case 0:
                            var3 = _closure2_slot30;
                            var5 = undefined;
                            var1 = arg0;
                            var2 = 255;
                            var4 = var3.bind(var5)(var1, var2);
                            var1 = arg1;
                            var8 = var3.bind(var5)(var1, var2);
                            var1 = arg2;
                            var7 = var3.bind(var5)(var1, var2);
                            var1 = _closure2_slot6;
                            var11 = var1.bind(var5)(var4, var8, var7);
                            var0 = _closure2_slot5;
                            var13 = var0.bind(var5)(var4, var8, var7);
                            var0 = var11 + var13;
                            var10 = 2;
                            var1 = var0 / var10;
                            var0 = var11 == var13;
                            var3 = 0;
                            var2 = 0;
                            if (var0) {
                                _fun42290_ip = 199;
                                continue _fun42290
                            }
                        case 83:
                            var9 = var11 - var13;
                            var0 = 0.5;
                            if (!(!(var1 > var0))) {
                                _fun42290_ip = 111;
                                continue _fun42290
                            }
                        case 101:
                            var0 = var11 + var13;
                            var0 = var9 / var0;
                            _fun42290_ip = 123;
                            continue _fun42290;
                        case 111:
                            var12 = var10 - var11;
                            var12 = var12 - var13;
                            var0 = var9 / var12;
                        case 123:
                            if (!(var4 !== var11)) {
                                _fun42290_ip = 168;
                                continue _fun42290
                            }
                        case 127:
                            if (!(var8 !== var11)) {
                                _fun42290_ip = 154;
                                continue _fun42290
                            }
                        case 131:
                            var5 = undefined;
                            if (!(var7 === var11)) {
                                _fun42290_ip = 189;
                                continue _fun42290
                            }
                        case 137:
                            var11 = var4 - var8;
                            var12 = var11 / var9;
                            var11 = 4;
                            var5 = var12 + var11;
                            _fun42290_ip = 189;
                            continue _fun42290;
                        case 154:
                            var4 = var7 - var4;
                            var4 = var4 / var9;
                            var5 = var4 + var10;
                            _fun42290_ip = 189;
                            continue _fun42290;
                        case 168:
                            var4 = var8 - var7;
                            var4 = var4 / var9;
                            var6 = 0;
                            if (!(var8 < var7)) {
                                _fun42290_ip = 185;
                                continue _fun42290
                            }
                        case 182:
                            var6 = 6;
                        case 185:
                            var5 = var4 + var6;
                        case 189:
                            var4 = 6;
                            var3 = var5 / var4;
                            var2 = var0;
                        case 199:
                            var0 = {};
                            var0.h = var3;
                            var0.s = var2;
                            var0.l = var1;
                            return var0;
                    }
                };
                var _closure2_slot12 = var1;
                var1 = function(arg0, arg1, arg2) { // Original name: rgbToHsv, environment: var3
                    _fun42291: for (var _fun42291_ip = 0;;) switch (_fun42291_ip) {
                        case 0:
                            var5 = _closure2_slot30;
                            var4 = undefined;
                            var0 = arg0;
                            var3 = 255;
                            var0 = var5.bind(var4)(var0, var3);
                            var1 = arg1;
                            var7 = var5.bind(var4)(var1, var3);
                            var1 = arg2;
                            var6 = var5.bind(var4)(var1, var3);
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var4)(var0, var7, var6);
                            var2 = _closure2_slot5;
                            var3 = var2.bind(var4)(var0, var7, var6);
                            var8 = var1 - var3;
                            var5 = 0;
                            var2 = 0;
                            if (!(var5 !== var1)) {
                                _fun42291_ip = 77;
                                continue _fun42291
                            }
                        case 73:
                            var2 = var8 / var1;
                        case 77:
                            var9 = var1 == var3;
                            var3 = 0;
                            if (var9) {
                                _fun42291_ip = 162;
                                continue _fun42291
                            }
                        case 86:
                            if (!(var0 !== var1)) {
                                _fun42291_ip = 134;
                                continue _fun42291
                            }
                        case 90:
                            if (!(var7 !== var1)) {
                                _fun42291_ip = 117;
                                continue _fun42291
                            }
                        case 94:
                            var4 = undefined;
                            if (!(var6 === var1)) {
                                _fun42291_ip = 155;
                                continue _fun42291
                            }
                        case 100:
                            var9 = var0 - var7;
                            var10 = var9 / var8;
                            var9 = 4;
                            var4 = var10 + var9;
                            _fun42291_ip = 155;
                            continue _fun42291;
                        case 117:
                            var0 = var6 - var0;
                            var9 = var0 / var8;
                            var0 = 2;
                            var4 = var9 + var0;
                            _fun42291_ip = 155;
                            continue _fun42291;
                        case 134:
                            var0 = var7 - var6;
                            var0 = var0 / var8;
                            var5 = 0;
                            if (!(var7 < var6)) {
                                _fun42291_ip = 151;
                                continue _fun42291
                            }
                        case 148:
                            var5 = 6;
                        case 151:
                            var4 = var0 + var5;
                        case 155:
                            var0 = 6;
                            var3 = var4 / var0;
                        case 162:
                            var0 = {};
                            var0.h = var3;
                            var0.s = var2;
                            var0.v = var1;
                            return var0;
                    }
                };
                var _closure2_slot13 = var1;
                var1 = function(arg0, arg1, arg2, arg3) { // Original name: rgbToHex, environment: var3
                    _fun42292: for (var _fun42292_ip = 0;;) switch (_fun42292_ip) {
                        case 0:
                            var2 = _closure2_slot33;
                            var4 = _closure2_slot4;
                            var1 = undefined;
                            var3 = arg0;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.toString;
                            var5 = 16;
                            var3 = var3.bind(var4)(var5);
                            var4 = var2.bind(var1)(var3);
                            var3 = new Array(3);
                            var3[0] = var4;
                            var6 = _closure2_slot4;
                            var4 = arg1;
                            var6 = var6.bind(var1)(var4);
                            var4 = var6.toString;
                            var4 = var4.bind(var6)(var5);
                            var4 = var2.bind(var1)(var4);
                            var3[1] = var4;
                            var4 = _closure2_slot4;
                            var0 = arg2;
                            var4 = var4.bind(var1)(var0);
                            var0 = var4.toString;
                            var0 = var0.bind(var4)(var5);
                            var0 = var2.bind(var1)(var0);
                            var3[2] = var0;
                            var0 = arg3;
                            if (!var0) {
                                _fun42292_ip = 225;
                                continue _fun42292
                            }
                        case 115:
                            var4 = 0;
                            var1 = var3[var4];
                            var0 = var1.charAt;
                            var1 = var0.bind(var1)(var4);
                            var5 = var3[var4];
                            var0 = var5.charAt;
                            var2 = 1;
                            var0 = var0.bind(var5)(var2);
                            if (!(var1 == var0)) {
                                _fun42292_ip = 225;
                                continue _fun42292
                            }
                        case 154:
                            var1 = var3[var2];
                            var0 = var1.charAt;
                            var1 = var0.bind(var1)(var4);
                            var5 = var3[var2];
                            var0 = var5.charAt;
                            var0 = var0.bind(var5)(var2);
                            if (!(var1 == var0)) {
                                _fun42292_ip = 225;
                                continue _fun42292
                            }
                        case 188:
                            var1 = 2;
                            var5 = var3[var1];
                            var0 = var5.charAt;
                            var5 = var0.bind(var5)(var4);
                            var6 = var3[var1];
                            var0 = var6.charAt;
                            var0 = var0.bind(var6)(var2);
                            if (!(var5 != var0)) {
                                _fun42292_ip = 241;
                                continue _fun42292
                            }
                        case 225:
                            var5 = var3.join;
                            var0 = '';
                            var0 = var5.bind(var3)(var0);
                            _fun42292_ip = 294;
                            continue _fun42292;
                        case 241:
                            var6 = var3[var4];
                            var5 = var6.charAt;
                            var5 = var5.bind(var6)(var4);
                            var6 = var3[var2];
                            var2 = var6.charAt;
                            var2 = var2.bind(var6)(var4);
                            var2 = var5 + var2;
                            var3 = var3[var1];
                            var1 = var3.charAt;
                            var1 = var1.bind(var3)(var4);
                            var0 = var2 + var1;
                        case 294:
                            return var0;
                    }
                };
                var _closure2_slot14 = var1;
                var1 = function(arg0, arg1, arg2, arg3) { // Original name: rgbaToArgbHex, environment: var3
                    var3 = _closure2_slot33;
                    var4 = _closure2_slot35;
                    var1 = undefined;
                    var2 = arg3;
                    var2 = var4.bind(var1)(var2);
                    var4 = var3.bind(var1)(var2);
                    var2 = new Array(4);
                    var2[0] = var4;
                    var5 = _closure2_slot4;
                    var4 = arg0;
                    var6 = var5.bind(var1)(var4);
                    var4 = var6.toString;
                    var5 = 16;
                    var4 = var4.bind(var6)(var5);
                    var4 = var3.bind(var1)(var4);
                    var2[1] = var4;
                    var6 = _closure2_slot4;
                    var4 = arg1;
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.toString;
                    var4 = var4.bind(var6)(var5);
                    var4 = var3.bind(var1)(var4);
                    var2[2] = var4;
                    var4 = _closure2_slot4;
                    var0 = arg2;
                    var4 = var4.bind(var1)(var0);
                    var0 = var4.toString;
                    var0 = var0.bind(var4)(var5);
                    var0 = var3.bind(var1)(var0);
                    var2[3] = var0;
                    var1 = var2.join;
                    var0 = '';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var _closure2_slot15 = var1;
                var1 = function(arg0, arg1) { // Original name: _desaturate, environment: var3
                    _fun42294: for (var _fun42294_ip = 0;;) switch (_fun42294_ip) {
                        case 0:
                            var0 = arg1;
                            var6 = 0;
                            if (!(var6 !== var0)) {
                                _fun42294_ip = 18;
                                continue _fun42294
                            }
                        case 9:
                            if (var0) {
                                _fun42294_ip = 15;
                                continue _fun42294
                            }
                        case 12:
                            var0 = 10;
                        case 15:
                            var6 = var0;
                        case 18:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var0 = arg0;
                            var4 = var2.bind(var1)(var0);
                            var0 = var4.toHsl;
                            var0 = var0.bind(var4)();
                            var5 = var0.s;
                            var4 = 100;
                            var4 = var6 / var4;
                            var4 = var5 - var4;
                            var0.s = var4;
                            var4 = _closure2_slot31;
                            var3 = var0.s;
                            var3 = var4.bind(var1)(var3);
                            var0.s = var3;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var _closure2_slot16 = var1;
                var1 = function(arg0, arg1) { // Original name: _saturate, environment: var3
                    _fun42295: for (var _fun42295_ip = 0;;) switch (_fun42295_ip) {
                        case 0:
                            var0 = arg1;
                            var6 = 0;
                            if (!(var6 !== var0)) {
                                _fun42295_ip = 18;
                                continue _fun42295
                            }
                        case 9:
                            if (var0) {
                                _fun42295_ip = 15;
                                continue _fun42295
                            }
                        case 12:
                            var0 = 10;
                        case 15:
                            var6 = var0;
                        case 18:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var0 = arg0;
                            var4 = var2.bind(var1)(var0);
                            var0 = var4.toHsl;
                            var0 = var0.bind(var4)();
                            var5 = var0.s;
                            var4 = 100;
                            var4 = var6 / var4;
                            var4 = var5 + var4;
                            var0.s = var4;
                            var4 = _closure2_slot31;
                            var3 = var0.s;
                            var3 = var4.bind(var1)(var3);
                            var0.s = var3;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var _closure2_slot17 = var1;
                var1 = function(arg0) { // Original name: _greyscale, environment: var3
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var0 = arg0;
                    var2 = var2.bind(var1)(var0);
                    var1 = var2.desaturate;
                    var0 = 100;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var _closure2_slot18 = var1;
                var1 = function(arg0, arg1) { // Original name: _lighten, environment: var3
                    _fun42297: for (var _fun42297_ip = 0;;) switch (_fun42297_ip) {
                        case 0:
                            var0 = arg1;
                            var6 = 0;
                            if (!(var6 !== var0)) {
                                _fun42297_ip = 18;
                                continue _fun42297
                            }
                        case 9:
                            if (var0) {
                                _fun42297_ip = 15;
                                continue _fun42297
                            }
                        case 12:
                            var0 = 10;
                        case 15:
                            var6 = var0;
                        case 18:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var0 = arg0;
                            var4 = var2.bind(var1)(var0);
                            var0 = var4.toHsl;
                            var0 = var0.bind(var4)();
                            var5 = var0.l;
                            var4 = 100;
                            var4 = var6 / var4;
                            var4 = var5 + var4;
                            var0.l = var4;
                            var4 = _closure2_slot31;
                            var3 = var0.l;
                            var3 = var4.bind(var1)(var3);
                            var0.l = var3;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var _closure2_slot19 = var1;
                var1 = function(arg0, arg1) { // Original name: _brighten, environment: var3
                    _fun42298: for (var _fun42298_ip = 0;;) switch (_fun42298_ip) {
                        case 0:
                            var0 = arg1;
                            var5 = 0;
                            var3 = 0;
                            if (!(var3 !== var0)) {
                                _fun42298_ip = 20;
                                continue _fun42298
                            }
                        case 11:
                            if (var0) {
                                _fun42298_ip = 17;
                                continue _fun42298
                            }
                        case 14:
                            var0 = 10;
                        case 17:
                            var3 = var0;
                        case 20:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var0 = arg0;
                            var4 = var2.bind(var1)(var0);
                            var0 = var4.toRgb;
                            var0 = var0.bind(var4)();
                            var6 = _closure2_slot6;
                            var8 = _closure2_slot5;
                            var11 = var0.r;
                            var12 = _closure2_slot4;
                            var4 = -var3;
                            var10 = 100;
                            var4 = var4 / var10;
                            var7 = 255;
                            var4 = var4 * var7;
                            var4 = var12.bind(var1)(var4);
                            var4 = var11 - var4;
                            var4 = var8.bind(var1)(var7, var4);
                            var4 = var6.bind(var1)(var5, var4);
                            var0.r = var4;
                            var6 = _closure2_slot6;
                            var8 = _closure2_slot5;
                            var11 = var0.g;
                            var12 = _closure2_slot4;
                            var4 = -var3;
                            var4 = var4 / var10;
                            var4 = var4 * var7;
                            var4 = var12.bind(var1)(var4);
                            var4 = var11 - var4;
                            var4 = var8.bind(var1)(var7, var4);
                            var4 = var6.bind(var1)(var5, var4);
                            var0.g = var4;
                            var4 = _closure2_slot6;
                            var6 = _closure2_slot5;
                            var8 = var0.b;
                            var9 = _closure2_slot4;
                            var3 = -var3;
                            var3 = var3 / var10;
                            var3 = var3 * var7;
                            var3 = var9.bind(var1)(var3);
                            var3 = var8 - var3;
                            var3 = var6.bind(var1)(var7, var3);
                            var3 = var4.bind(var1)(var5, var3);
                            var0.b = var3;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var _closure2_slot20 = var1;
                var1 = function(arg0, arg1) { // Original name: _darken, environment: var3
                    _fun42299: for (var _fun42299_ip = 0;;) switch (_fun42299_ip) {
                        case 0:
                            var0 = arg1;
                            var6 = 0;
                            if (!(var6 !== var0)) {
                                _fun42299_ip = 18;
                                continue _fun42299
                            }
                        case 9:
                            if (var0) {
                                _fun42299_ip = 15;
                                continue _fun42299
                            }
                        case 12:
                            var0 = 10;
                        case 15:
                            var6 = var0;
                        case 18:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var0 = arg0;
                            var4 = var2.bind(var1)(var0);
                            var0 = var4.toHsl;
                            var0 = var0.bind(var4)();
                            var5 = var0.l;
                            var4 = 100;
                            var4 = var6 / var4;
                            var4 = var5 - var4;
                            var0.l = var4;
                            var4 = _closure2_slot31;
                            var3 = var0.l;
                            var3 = var4.bind(var1)(var3);
                            var0.l = var3;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var _closure2_slot21 = var1;
                var1 = function(arg0, arg1) { // Original name: _spin, environment: var3
                    _fun42300: for (var _fun42300_ip = 0;;) switch (_fun42300_ip) {
                        case 0:
                            var3 = _closure2_slot11;
                            var2 = undefined;
                            var1 = arg0;
                            var3 = var3.bind(var2)(var1);
                            var1 = var3.toHsl;
                            var1 = var1.bind(var3)();
                            var4 = var1.h;
                            var3 = arg1;
                            var3 = var4 + var3;
                            var5 = 360;
                            var4 = var3 % var5;
                            var6 = 0;
                            var3 = var4;
                            if (!(var3 < var6)) {
                                _fun42300_ip = 62;
                                continue _fun42300
                            }
                        case 58:
                            var3 = var5 + var4;
                        case 62:
                            var1.h = var3;
                            var0 = _closure2_slot11;
                            var0 = var0.bind(var2)(var1);
                            return var0;
                    }
                };
                var _closure2_slot22 = var1;
                var1 = function(arg0) { // Original name: _complement, environment: var3
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var1)(var0);
                    var0 = var3.toHsl;
                    var0 = var0.bind(var3)();
                    var4 = var0.h;
                    var3 = 180;
                    var4 = var4 + var3;
                    var3 = 360;
                    var3 = var4 % var3;
                    var0.h = var3;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var _closure2_slot23 = var1;
                var1 = function(arg0) { // Original name: _triad, environment: var3
                    var0 = arg0;
                    var3 = _closure2_slot11;
                    var2 = undefined;
                    var4 = var3.bind(var2)(var0);
                    var1 = var4.toHsl;
                    var4 = var1.bind(var4)();
                    var7 = var4.h;
                    var1 = var3.bind(var2)(var0);
                    var0 = new Array(3);
                    var0[0] = var1;
                    var1 = {};
                    var5 = 120;
                    var5 = var7 + var5;
                    var6 = 360;
                    var5 = var5 % var6;
                    var1.h = var5;
                    var5 = var4.s;
                    var1.s = var5;
                    var5 = var4.l;
                    var1.l = var5;
                    var1 = var3.bind(var2)(var1);
                    var0[1] = var1;
                    var1 = {};
                    var5 = 240;
                    var5 = var7 + var5;
                    var5 = var5 % var6;
                    var1.h = var5;
                    var5 = var4.s;
                    var1.s = var5;
                    var4 = var4.l;
                    var1.l = var4;
                    var1 = var3.bind(var2)(var1);
                    var0[2] = var1;
                    return var0;
                };
                var _closure2_slot24 = var1;
                var1 = function(arg0) { // Original name: _tetrad, environment: var3
                    var0 = arg0;
                    var3 = _closure2_slot11;
                    var2 = undefined;
                    var4 = var3.bind(var2)(var0);
                    var1 = var4.toHsl;
                    var4 = var1.bind(var4)();
                    var7 = var4.h;
                    var1 = var3.bind(var2)(var0);
                    var0 = new Array(4);
                    var0[0] = var1;
                    var1 = {};
                    var5 = 90;
                    var5 = var7 + var5;
                    var6 = 360;
                    var5 = var5 % var6;
                    var1.h = var5;
                    var5 = var4.s;
                    var1.s = var5;
                    var5 = var4.l;
                    var1.l = var5;
                    var1 = var3.bind(var2)(var1);
                    var0[1] = var1;
                    var1 = {};
                    var5 = 180;
                    var5 = var7 + var5;
                    var5 = var5 % var6;
                    var1.h = var5;
                    var5 = var4.s;
                    var1.s = var5;
                    var5 = var4.l;
                    var1.l = var5;
                    var1 = var3.bind(var2)(var1);
                    var0[2] = var1;
                    var1 = {};
                    var5 = 270;
                    var5 = var7 + var5;
                    var5 = var5 % var6;
                    var1.h = var5;
                    var5 = var4.s;
                    var1.s = var5;
                    var4 = var4.l;
                    var1.l = var4;
                    var1 = var3.bind(var2)(var1);
                    var0[3] = var1;
                    return var0;
                };
                var _closure2_slot25 = var1;
                var1 = function(arg0) { // Original name: _splitcomplement, environment: var3
                    var0 = arg0;
                    var3 = _closure2_slot11;
                    var2 = undefined;
                    var4 = var3.bind(var2)(var0);
                    var1 = var4.toHsl;
                    var4 = var1.bind(var4)();
                    var7 = var4.h;
                    var1 = var3.bind(var2)(var0);
                    var0 = new Array(3);
                    var0[0] = var1;
                    var1 = {};
                    var5 = 72;
                    var5 = var7 + var5;
                    var6 = 360;
                    var5 = var5 % var6;
                    var1.h = var5;
                    var5 = var4.s;
                    var1.s = var5;
                    var5 = var4.l;
                    var1.l = var5;
                    var1 = var3.bind(var2)(var1);
                    var0[1] = var1;
                    var1 = {};
                    var5 = 216;
                    var5 = var7 + var5;
                    var5 = var5 % var6;
                    var1.h = var5;
                    var5 = var4.s;
                    var1.s = var5;
                    var4 = var4.l;
                    var1.l = var4;
                    var1 = var3.bind(var2)(var1);
                    var0[2] = var1;
                    return var0;
                };
                var _closure2_slot26 = var1;
                var1 = function(arg0, arg1, arg2) { // Original name: _analogous, environment: var3
                    _fun42305: for (var _fun42305_ip = 0;;) switch (_fun42305_ip) {
                        case 0:
                            var7 = arg0;
                            var1 = arg1;
                            var2 = arg2;
                            if (var1) {
                                _fun42305_ip = 15;
                                continue _fun42305
                            }
                        case 12:
                            var1 = 6;
                        case 15:
                            if (var2) {
                                _fun42305_ip = 21;
                                continue _fun42305
                            }
                        case 18:
                            var2 = 30;
                        case 21:
                            var0 = _closure2_slot11;
                            var5 = undefined;
                            var4 = var0.bind(var5)(var7);
                            var3 = var4.toHsl;
                            var4 = var3.bind(var4)();
                            var3 = 360;
                            var2 = var3 / var2;
                            var7 = var0.bind(var5)(var7);
                            var0 = new Array(1);
                            var0[0] = var7;
                            var8 = var4.h;
                            var9 = var2 * var1;
                            var7 = 1;
                            var7 = var9 >> var7;
                            var8 = var8 - var7;
                            var7 = 720;
                            var7 = var8 + var7;
                            var7 = var7 % var3;
                            var4.h = var7;
                            var1 = var1 - 1;
                            if (!var1) {
                                _fun42305_ip = 158;
                                continue _fun42305
                            }
                        case 114:
                            var7 = var4.h;
                            var7 = var7 + var2;
                            var7 = var7 % var3;
                            var4.h = var7;
                            var8 = var0.push;
                            var7 = _closure2_slot11;
                            var7 = var7.bind(var5)(var4);
                            var7 = var8.bind(var0)(var7);
                            var1 = var1 - 1;
                            if (var1) {
                                _fun42305_ip = 114;
                                continue _fun42305
                            }
                        case 158:
                            return var0;
                    }
                };
                var _closure2_slot27 = var1;
                var1 = function(arg0, arg1) { // Original name: _monochromatic, environment: var3
                    _fun42306: for (var _fun42306_ip = 0;;) switch (_fun42306_ip) {
                        case 0:
                            var1 = arg1;
                            if (var1) {
                                _fun42306_ip = 9;
                                continue _fun42306
                            }
                        case 6:
                            var1 = 6;
                        case 9:
                            var2 = _closure2_slot11;
                            var8 = undefined;
                            var0 = arg0;
                            var2 = var2.bind(var8)(var0);
                            var0 = var2.toHsv;
                            var0 = var0.bind(var2)();
                            var7 = var0.h;
                            var6 = var0.s;
                            var5 = var0.v;
                            var0 = new Array(0);
                            var4 = 1;
                            var3 = var4 / var1;
                            var1 = parseFloat(var1);
                            var2 = var1 - 1;
                            if (!var1) {
                                _fun42306_ip = 121;
                                continue _fun42306
                            }
                        case 71:
                            var10 = var0.push;
                            var11 = _closure2_slot11;
                            var1 = {};
                            var1.h = var7;
                            var1.s = var6;
                            var1.v = var5;
                            var1 = var11.bind(var8)(var1);
                            var1 = var10.bind(var0)(var1);
                            var1 = var5 + var3;
                            var5 = var1 % var4;
                            var1 = parseFloat(var2);
                            var2 = var1 - 1;
                            if (var1) {
                                _fun42306_ip = 71;
                                continue _fun42306
                            }
                        case 121:
                            return var0;
                    }
                };
                var _closure2_slot28 = var1;
                var1 = function(arg0) { // Original name: boundAlpha, environment: var3
                    _fun42307: for (var _fun42307_ip = 0;;) switch (_fun42307_ip) {
                        case 0:
                            var1 = global;
                            var3 = var1.parseFloat;
                            var2 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var2)(var0);
                            var1 = var1.isNaN;
                            var1 = var1.bind(var2)(var0);
                            if (var1) {
                                _fun42307_ip = 38;
                                continue _fun42307
                            }
                        case 32:
                            var2 = 0;
                            var1 = var0 < var2;
                        case 38:
                            if (var1) {
                                _fun42307_ip = 48;
                                continue _fun42307
                            }
                        case 41:
                            var2 = 1;
                            var1 = var0 > var2;
                        case 48:
                            if (!var1) {
                                _fun42307_ip = 54;
                                continue _fun42307
                            }
                        case 51:
                            var0 = 1;
                        case 54:
                            return var0;
                    }
                };
                var _closure2_slot29 = var1;
                var1 = function(arg0, arg1) { // Original name: bound01, environment: var3
                    _fun42308: for (var _fun42308_ip = 0;;) switch (_fun42308_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = arg1;
                            var1 = 'string';
                            var0 = typeof var2;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun42308_ip = 45;
                                continue _fun42308
                            }
                        case 20:
                            var5 = var2.indexOf;
                            var3 = '.';
                            var5 = var5.bind(var2)(var3);
                            var3 = -1;
                            var0 = var3 != var5;
                        case 45:
                            if (!var0) {
                                _fun42308_ip = 70;
                                continue _fun42308
                            }
                        case 48:
                            var3 = global;
                            var5 = var3.parseFloat;
                            var3 = undefined;
                            var5 = var5.bind(var3)(var2);
                            var3 = 1;
                            var0 = var3 === var5;
                        case 70:
                            var7 = var2;
                            if (!var0) {
                                _fun42308_ip = 82;
                                continue _fun42308
                            }
                        case 76:
                            var7 = '100%';
                        case 82:
                            var0 = typeof var7;
                            var6 = var1 === var0;
                            if (!var6) {
                                _fun42308_ip = 117;
                                continue _fun42308
                            }
                        case 92:
                            var1 = var7.indexOf;
                            var0 = '%';
                            var1 = var1.bind(var7)(var0);
                            var0 = -1;
                            var6 = var0 != var1;
                        case 117:
                            var5 = _closure2_slot5;
                            var8 = _closure2_slot6;
                            var1 = global;
                            var2 = var1.parseFloat;
                            var3 = undefined;
                            var7 = var2.bind(var3)(var7);
                            var2 = 0;
                            var2 = var8.bind(var3)(var2, var7);
                            var5 = var5.bind(var3)(var4, var2);
                            var2 = var5;
                            if (!var6) {
                                _fun42308_ip = 189;
                                continue _fun42308
                            }
                        case 163:
                            var7 = var1.parseInt;
                            var6 = var5 * var4;
                            var5 = 10;
                            var6 = var7.bind(var3)(var6, var5);
                            var5 = 100;
                            var2 = var6 / var5;
                        case 189:
                            var6 = _closure2_slot0;
                            var5 = var6.abs;
                            var0 = var2 - var4;
                            var5 = var5.bind(var6)(var0);
                            var0 = 1e-06;
                            var5 = var5 < var0;
                            var0 = 1;
                            if (var5) {
                                _fun42308_ip = 247;
                                continue _fun42308
                            }
                        case 228:
                            var2 = var2 % var4;
                            var1 = var1.parseFloat;
                            var1 = var1.bind(var3)(var4);
                            var0 = var2 / var1;
                        case 247:
                            return var0;
                    }
                };
                var _closure2_slot30 = var1;
                var1 = function(arg0) { // Original name: clamp01, environment: var3
                    var3 = _closure2_slot5;
                    var4 = _closure2_slot6;
                    var2 = undefined;
                    var1 = 0;
                    var0 = arg0;
                    var1 = var4.bind(var2)(var1, var0);
                    var0 = 1;
                    var0 = var3.bind(var2)(var0, var1);
                    return var0;
                };
                var _closure2_slot31 = var1;
                var1 = function(arg0) { // Original name: parseIntFromHex, environment: var3
                    var0 = global;
                    var3 = var0.parseInt;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = 16;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var _closure2_slot32 = var1;
                var1 = function(arg0) { // Original name: pad2, environment: var3
                    _fun42311: for (var _fun42311_ip = 0;;) switch (_fun42311_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.length;
                            var0 = 1;
                            if (!(var0 != var1)) {
                                _fun42311_ip = 20;
                                continue _fun42311
                            }
                        case 15:
                            var0 = '' + var2;
                            _fun42311_ip = 30;
                            continue _fun42311;
                        case 20:
                            var1 = '0';
                            var0 = var1 + var2;
                        case 30:
                            return var0;
                    }
                };
                var _closure2_slot33 = var1;
                var1 = function(arg0) { // Original name: convertToPercentage, environment: var3
                    _fun42312: for (var _fun42312_ip = 0;;) switch (_fun42312_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = 1;
                            var0 = var2;
                            if (!(var0 <= var1)) {
                                _fun42312_ip = 28;
                                continue _fun42312
                            }
                        case 13:
                            var1 = 100;
                            var2 = var1 * var2;
                            var1 = '%';
                            var0 = var2 + var1;
                        case 28:
                            return var0;
                    }
                };
                var _closure2_slot34 = var1;
                var1 = function(arg0) { // Original name: convertDecimalToHex, environment: var3
                    var2 = _closure2_slot0;
                    var1 = var2.round;
                    var0 = global;
                    var4 = var0.parseFloat;
                    var3 = undefined;
                    var0 = arg0;
                    var3 = var4.bind(var3)(var0);
                    var0 = 255;
                    var0 = var0 * var3;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.toString;
                    var0 = 16;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var _closure2_slot35 = var1;
                var1 = function(arg0) { // Original name: convertHexToDecimal, environment: var3
                    var2 = _closure2_slot32;
                    var1 = undefined;
                    var0 = arg0;
                    var1 = var2.bind(var1)(var0);
                    var0 = 255;
                    var0 = var1 / var0;
                    return var0;
                };
                var _closure2_slot36 = var1;
                var1 = function(arg0) { // Original name: isValidCSSUnit, environment: var3
                    var0 = _closure2_slot10;
                    var2 = var0.CSS_UNIT;
                    var1 = var2.exec;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                var _closure2_slot37 = var1;
                var1 = /^\s+/;
                var _closure2_slot1 = var1;
                var1 = /\s+$/;
                var _closure2_slot2 = var1;
                var1 = 0;
                var _closure2_slot3 = var1;
                var1 = var0.round;
                var _closure2_slot4 = var1;
                var1 = var0.min;
                var _closure2_slot5 = var1;
                var1 = var0.max;
                var _closure2_slot6 = var1;
                var0 = var0.random;
                var _closure2_slot7 = var0;
                var0 = {};
                var1 = function() { // Original name: isDark, environment: var3
                    var1 = this;
                    var0 = var1.getBrightness;
                    var1 = var0.bind(var1)();
                    var0 = 128;
                    var0 = var1 < var0;
                    return var0;
                };
                var0.isDark = var1;
                var1 = function() { // Original name: isLight, environment: var3
                    var1 = this;
                    var0 = var1.isDark;
                    var0 = var0.bind(var1)();
                    var0 = !var0;
                    return var0;
                };
                var0.isLight = var1;
                var1 = function() { // Original name: isValid, environment: var3
                    var0 = this;
                    var0 = var0._ok;
                    return var0;
                };
                var0.isValid = var1;
                var1 = function() { // Original name: getOriginalInput, environment: var3
                    var0 = this;
                    var0 = var0._originalInput;
                    return var0;
                };
                var0.getOriginalInput = var1;
                var1 = function() { // Original name: getFormat, environment: var3
                    var0 = this;
                    var0 = var0._format;
                    return var0;
                };
                var0.getFormat = var1;
                var1 = function() { // Original name: getAlpha, environment: var3
                    var0 = this;
                    var0 = var0._a;
                    return var0;
                };
                var0.getAlpha = var1;
                var1 = function() { // Original name: getBrightness, environment: var3
                    var1 = this;
                    var0 = var1.toRgb;
                    var1 = var0.bind(var1)();
                    var2 = var1.r;
                    var0 = 299;
                    var2 = var0 * var2;
                    var3 = var1.g;
                    var0 = 587;
                    var0 = var0 * var3;
                    var3 = var1.b;
                    var1 = 114;
                    var1 = var1 * var3;
                    var0 = var2 + var0;
                    var1 = var0 + var1;
                    var0 = 1000;
                    var0 = var1 / var0;
                    return var0;
                };
                var0.getBrightness = var1;
                var1 = function() { // Original name: getLuminance, environment: var3
                    _fun42323: for (var _fun42323_ip = 0;;) switch (_fun42323_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.toRgb;
                            var0 = var0.bind(var1)();
                            var2 = var0.r;
                            var1 = 255;
                            var3 = var2 / var1;
                            var2 = var0.g;
                            var5 = var2 / var1;
                            var0 = var0.b;
                            var4 = var0 / var1;
                            var1 = 0.03928;
                            if (!(!(var3 <= var1))) {
                                _fun42323_ip = 116;
                                continue _fun42323
                            }
                        case 57:
                            var7 = _closure2_slot0;
                            var6 = var7.pow;
                            var0 = 0.055;
                            var2 = var3 + var0;
                            var0 = 1.055;
                            var2 = var2 / var0;
                            var0 = 2.4;
                            var2 = var6.bind(var7)(var2, var0);
                            _fun42323_ip = 130;
                            continue _fun42323;
                        case 116:
                            var0 = 12.92;
                            var2 = var3 / var0;
                        case 130:
                            var0 = 0.2126;
                            var2 = var0 * var2;
                            if (!(!(var5 <= var1))) {
                                _fun42323_ip = 207;
                                continue _fun42323
                            }
                        case 148:
                            var7 = _closure2_slot0;
                            var6 = var7.pow;
                            var0 = 0.055;
                            var3 = var5 + var0;
                            var0 = 1.055;
                            var3 = var3 / var0;
                            var0 = 2.4;
                            var3 = var6.bind(var7)(var3, var0);
                            _fun42323_ip = 221;
                            continue _fun42323;
                        case 207:
                            var0 = 12.92;
                            var3 = var5 / var0;
                        case 221:
                            var0 = 0.7152;
                            var0 = var0 * var3;
                            if (!(!(var4 <= var1))) {
                                _fun42323_ip = 298;
                                continue _fun42323
                            }
                        case 239:
                            var6 = _closure2_slot0;
                            var5 = var6.pow;
                            var1 = 0.055;
                            var3 = var4 + var1;
                            var1 = 1.055;
                            var3 = var3 / var1;
                            var1 = 2.4;
                            var3 = var5.bind(var6)(var3, var1);
                            _fun42323_ip = 312;
                            continue _fun42323;
                        case 298:
                            var1 = 12.92;
                            var3 = var4 / var1;
                        case 312:
                            var1 = 0.0722;
                            var1 = var1 * var3;
                            var0 = var2 + var0;
                            var0 = var0 + var1;
                            return var0;
                    }
                };
                var0.getLuminance = var1;
                var1 = function(arg0) { // Original name: setAlpha, environment: var3
                    var0 = this;
                    var3 = _closure2_slot29;
                    var4 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var4)(var2);
                    var0._a = var2;
                    var3 = _closure2_slot4;
                    var1 = var0._a;
                    var2 = 100;
                    var1 = var2 * var1;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1 / var2;
                    var0._roundA = var1;
                    return var0;
                };
                var0.setAlpha = var1;
                var1 = function() { // Original name: toHsv, environment: var3
                    var1 = this;
                    var5 = _closure2_slot13;
                    var4 = var1._r;
                    var3 = var1._g;
                    var2 = var1._b;
                    var0 = undefined;
                    var2 = var5.bind(var0)(var4, var3, var2);
                    var0 = {};
                    var4 = var2.h;
                    var3 = 360;
                    var3 = var3 * var4;
                    var0.h = var3;
                    var3 = var2.s;
                    var0.s = var3;
                    var2 = var2.v;
                    var0.v = var2;
                    var1 = var1._a;
                    var0.a = var1;
                    return var0;
                };
                var0.toHsv = var1;
                var1 = function() { // Original name: toHsvString, environment: var3
                    _fun42326: for (var _fun42326_ip = 0;;) switch (_fun42326_ip) {
                        case 0:
                            var1 = this;
                            var6 = _closure2_slot13;
                            var4 = var1._r;
                            var3 = var1._g;
                            var0 = var1._b;
                            var5 = undefined;
                            var0 = var6.bind(var5)(var4, var3, var0);
                            var4 = _closure2_slot4;
                            var6 = var0.h;
                            var3 = 360;
                            var3 = var3 * var6;
                            var4 = var4.bind(var5)(var3);
                            var7 = _closure2_slot4;
                            var3 = var0.s;
                            var6 = 100;
                            var3 = var6 * var3;
                            var3 = var7.bind(var5)(var3);
                            var2 = _closure2_slot4;
                            var0 = var0.v;
                            var0 = var6 * var0;
                            var2 = var2.bind(var5)(var0);
                            var5 = var1._a;
                            var0 = 1;
                            if (!(var0 != var5)) {
                                _fun42326_ip = 174;
                                continue _fun42326
                            }
                        case 112:
                            var0 = 'hsva(';
                            var5 = var0 + var4;
                            var0 = ', ';
                            var0 = var5 + var0;
                            var0 = var0 + var3;
                            var5 = '%, ';
                            var0 = var0 + var5;
                            var0 = var0 + var2;
                            var1 = var1._roundA;
                            var0 = var0 + var5;
                            var1 = var0 + var1;
                            var0 = ')';
                            var0 = var1 + var0;
                            _fun42326_ip = 222;
                            continue _fun42326;
                        case 174:
                            var1 = 'hsv(';
                            var4 = var1 + var4;
                            var1 = ', ';
                            var1 = var4 + var1;
                            var3 = var1 + var3;
                            var1 = '%, ';
                            var1 = var3 + var1;
                            var2 = var1 + var2;
                            var1 = '%)';
                            var0 = var2 + var1;
                        case 222:
                            return var0;
                    }
                };
                var0.toHsvString = var1;
                var1 = function() { // Original name: toHsl, environment: var3
                    var1 = this;
                    var5 = _closure2_slot12;
                    var4 = var1._r;
                    var3 = var1._g;
                    var2 = var1._b;
                    var0 = undefined;
                    var2 = var5.bind(var0)(var4, var3, var2);
                    var0 = {};
                    var4 = var2.h;
                    var3 = 360;
                    var3 = var3 * var4;
                    var0.h = var3;
                    var3 = var2.s;
                    var0.s = var3;
                    var2 = var2.l;
                    var0.l = var2;
                    var1 = var1._a;
                    var0.a = var1;
                    return var0;
                };
                var0.toHsl = var1;
                var1 = function() { // Original name: toHslString, environment: var3
                    _fun42328: for (var _fun42328_ip = 0;;) switch (_fun42328_ip) {
                        case 0:
                            var1 = this;
                            var6 = _closure2_slot12;
                            var4 = var1._r;
                            var3 = var1._g;
                            var0 = var1._b;
                            var5 = undefined;
                            var0 = var6.bind(var5)(var4, var3, var0);
                            var4 = _closure2_slot4;
                            var6 = var0.h;
                            var3 = 360;
                            var3 = var3 * var6;
                            var4 = var4.bind(var5)(var3);
                            var7 = _closure2_slot4;
                            var3 = var0.s;
                            var6 = 100;
                            var3 = var6 * var3;
                            var3 = var7.bind(var5)(var3);
                            var2 = _closure2_slot4;
                            var0 = var0.l;
                            var0 = var6 * var0;
                            var2 = var2.bind(var5)(var0);
                            var5 = var1._a;
                            var0 = 1;
                            if (!(var0 != var5)) {
                                _fun42328_ip = 174;
                                continue _fun42328
                            }
                        case 112:
                            var0 = 'hsla(';
                            var5 = var0 + var4;
                            var0 = ', ';
                            var0 = var5 + var0;
                            var0 = var0 + var3;
                            var5 = '%, ';
                            var0 = var0 + var5;
                            var0 = var0 + var2;
                            var1 = var1._roundA;
                            var0 = var0 + var5;
                            var1 = var0 + var1;
                            var0 = ')';
                            var0 = var1 + var0;
                            _fun42328_ip = 222;
                            continue _fun42328;
                        case 174:
                            var1 = 'hsl(';
                            var4 = var1 + var4;
                            var1 = ', ';
                            var1 = var4 + var1;
                            var3 = var1 + var3;
                            var1 = '%, ';
                            var1 = var3 + var1;
                            var2 = var1 + var2;
                            var1 = '%)';
                            var0 = var2 + var1;
                        case 222:
                            return var0;
                    }
                };
                var0.toHslString = var1;
                var1 = function(arg0) { // Original name: toHex, environment: var3
                    var0 = this;
                    var5 = _closure2_slot14;
                    var9 = var0._r;
                    var8 = var0._g;
                    var7 = var0._b;
                    var10 = undefined;
                    var6 = arg0;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0.toHex = var1;
                var1 = function(arg0) { // Original name: toHexString, environment: var3
                    var2 = this;
                    var1 = var2.toHex;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = '#';
                    var0 = var0 + var1;
                    return var0;
                };
                var0.toHexString = var1;
                var1 = function(arg0) { // Original name: toHex8, environment: var3
                    _fun42331: for (var _fun42331_ip = 0;;) switch (_fun42331_ip) {
                        case 0:
                            var0 = this;
                            var5 = var0._r;
                            var8 = var0._g;
                            var6 = var0._b;
                            var4 = var0._a;
                            var2 = _closure2_slot33;
                            var3 = _closure2_slot4;
                            var1 = undefined;
                            var5 = var3.bind(var1)(var5);
                            var3 = var5.toString;
                            var7 = 16;
                            var3 = var3.bind(var5)(var7);
                            var5 = var2.bind(var1)(var3);
                            var3 = new Array(4);
                            var3[0] = var5;
                            var5 = _closure2_slot4;
                            var8 = var5.bind(var1)(var8);
                            var5 = var8.toString;
                            var5 = var5.bind(var8)(var7);
                            var5 = var2.bind(var1)(var5);
                            var3[1] = var5;
                            var5 = _closure2_slot4;
                            var6 = var5.bind(var1)(var6);
                            var5 = var6.toString;
                            var5 = var5.bind(var6)(var7);
                            var5 = var2.bind(var1)(var5);
                            var3[2] = var5;
                            var0 = _closure2_slot35;
                            var0 = var0.bind(var1)(var4);
                            var0 = var2.bind(var1)(var0);
                            var3[3] = var0;
                            var0 = arg0;
                            if (!var0) {
                                _fun42331_ip = 300;
                                continue _fun42331
                            }
                        case 153:
                            var4 = 0;
                            var1 = var3[var4];
                            var0 = var1.charAt;
                            var1 = var0.bind(var1)(var4);
                            var2 = var3[var4];
                            var0 = var2.charAt;
                            var5 = 1;
                            var0 = var0.bind(var2)(var5);
                            if (!(var1 == var0)) {
                                _fun42331_ip = 300;
                                continue _fun42331
                            }
                        case 192:
                            var1 = var3[var5];
                            var0 = var1.charAt;
                            var1 = var0.bind(var1)(var4);
                            var2 = var3[var5];
                            var0 = var2.charAt;
                            var0 = var0.bind(var2)(var5);
                            if (!(var1 == var0)) {
                                _fun42331_ip = 300;
                                continue _fun42331
                            }
                        case 226:
                            var2 = 2;
                            var1 = var3[var2];
                            var0 = var1.charAt;
                            var1 = var0.bind(var1)(var4);
                            var6 = var3[var2];
                            var0 = var6.charAt;
                            var0 = var0.bind(var6)(var5);
                            if (!(var1 == var0)) {
                                _fun42331_ip = 300;
                                continue _fun42331
                            }
                        case 263:
                            var1 = 3;
                            var6 = var3[var1];
                            var0 = var6.charAt;
                            var6 = var0.bind(var6)(var4);
                            var7 = var3[var1];
                            var0 = var7.charAt;
                            var0 = var0.bind(var7)(var5);
                            if (!(var6 != var0)) {
                                _fun42331_ip = 316;
                                continue _fun42331
                            }
                        case 300:
                            var6 = var3.join;
                            var0 = '';
                            var0 = var6.bind(var3)(var0);
                            _fun42331_ip = 388;
                            continue _fun42331;
                        case 316:
                            var7 = var3[var4];
                            var6 = var7.charAt;
                            var6 = var6.bind(var7)(var4);
                            var7 = var3[var5];
                            var5 = var7.charAt;
                            var5 = var5.bind(var7)(var4);
                            var5 = var6 + var5;
                            var6 = var3[var2];
                            var2 = var6.charAt;
                            var2 = var2.bind(var6)(var4);
                            var2 = var5 + var2;
                            var3 = var3[var1];
                            var1 = var3.charAt;
                            var1 = var1.bind(var3)(var4);
                            var0 = var2 + var1;
                        case 388:
                            return var0;
                    }
                };
                var0.toHex8 = var1;
                var1 = function(arg0) { // Original name: toHex8String, environment: var3
                    var2 = this;
                    var1 = var2.toHex8;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = '#';
                    var0 = var0 + var1;
                    return var0;
                };
                var0.toHex8String = var1;
                var1 = function() { // Original name: toRgb, environment: var3
                    var1 = this;
                    var0 = {};
                    var5 = _closure2_slot4;
                    var3 = var1._r;
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var0.r = var3;
                    var5 = _closure2_slot4;
                    var3 = var1._g;
                    var3 = var5.bind(var4)(var3);
                    var0.g = var3;
                    var3 = _closure2_slot4;
                    var2 = var1._b;
                    var2 = var3.bind(var4)(var2);
                    var0.b = var2;
                    var1 = var1._a;
                    var0.a = var1;
                    return var0;
                };
                var0.toRgb = var1;
                var1 = function() { // Original name: toRgbString, environment: var3
                    _fun42334: for (var _fun42334_ip = 0;;) switch (_fun42334_ip) {
                        case 0:
                            var2 = this;
                            var1 = var2._a;
                            var0 = 1;
                            if (!(var0 != var1)) {
                                _fun42334_ip = 121;
                                continue _fun42334
                            }
                        case 15:
                            var3 = _closure2_slot4;
                            var0 = var2._r;
                            var5 = undefined;
                            var3 = var3.bind(var5)(var0);
                            var0 = 'rgba(';
                            var0 = var0 + var3;
                            var4 = _closure2_slot4;
                            var3 = var2._g;
                            var4 = var4.bind(var5)(var3);
                            var3 = ', ';
                            var0 = var0 + var3;
                            var0 = var0 + var4;
                            var4 = _closure2_slot4;
                            var1 = var2._b;
                            var1 = var4.bind(var5)(var1);
                            var0 = var0 + var3;
                            var0 = var0 + var1;
                            var1 = var2._roundA;
                            var0 = var0 + var3;
                            var1 = var0 + var1;
                            var0 = ')';
                            var0 = var1 + var0;
                            _fun42334_ip = 211;
                            continue _fun42334;
                        case 121:
                            var3 = _closure2_slot4;
                            var1 = var2._r;
                            var5 = undefined;
                            var3 = var3.bind(var5)(var1);
                            var1 = 'rgb(';
                            var1 = var1 + var3;
                            var6 = _closure2_slot4;
                            var3 = var2._g;
                            var6 = var6.bind(var5)(var3);
                            var3 = ', ';
                            var1 = var1 + var3;
                            var1 = var1 + var6;
                            var4 = _closure2_slot4;
                            var2 = var2._b;
                            var2 = var4.bind(var5)(var2);
                            var1 = var1 + var3;
                            var2 = var1 + var2;
                            var1 = ')';
                            var0 = var2 + var1;
                        case 211:
                            return var0;
                    }
                };
                var0.toRgbString = var1;
                var1 = function() { // Original name: toPercentageRgb, environment: var3
                    var1 = this;
                    var0 = {};
                    var4 = _closure2_slot4;
                    var8 = _closure2_slot30;
                    var3 = var1._r;
                    var5 = undefined;
                    var7 = 255;
                    var3 = var8.bind(var5)(var3, var7);
                    var6 = 100;
                    var3 = var6 * var3;
                    var4 = var4.bind(var5)(var3);
                    var3 = '%';
                    var4 = var4 + var3;
                    var0.r = var4;
                    var9 = _closure2_slot4;
                    var4 = var1._g;
                    var4 = var8.bind(var5)(var4, var7);
                    var4 = var6 * var4;
                    var4 = var9.bind(var5)(var4);
                    var4 = var4 + var3;
                    var0.g = var4;
                    var4 = _closure2_slot4;
                    var2 = var1._b;
                    var2 = var8.bind(var5)(var2, var7);
                    var2 = var6 * var2;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2 + var3;
                    var0.b = var2;
                    var1 = var1._a;
                    var0.a = var1;
                    return var0;
                };
                var0.toPercentageRgb = var1;
                var1 = function() { // Original name: toPercentageRgbString, environment: var3
                    _fun42336: for (var _fun42336_ip = 0;;) switch (_fun42336_ip) {
                        case 0:
                            var2 = this;
                            var1 = var2._a;
                            var0 = 1;
                            if (!(var0 != var1)) {
                                _fun42336_ip = 167;
                                continue _fun42336
                            }
                        case 18:
                            var3 = _closure2_slot4;
                            var8 = _closure2_slot30;
                            var0 = var2._r;
                            var5 = undefined;
                            var7 = 255;
                            var0 = var8.bind(var5)(var0, var7);
                            var6 = 100;
                            var0 = var6 * var0;
                            var3 = var3.bind(var5)(var0);
                            var0 = 'rgba(';
                            var0 = var0 + var3;
                            var4 = _closure2_slot4;
                            var3 = var2._g;
                            var3 = var8.bind(var5)(var3, var7);
                            var3 = var6 * var3;
                            var4 = var4.bind(var5)(var3);
                            var3 = '%, ';
                            var0 = var0 + var3;
                            var0 = var0 + var4;
                            var4 = _closure2_slot4;
                            var1 = var2._b;
                            var1 = var8.bind(var5)(var1, var7);
                            var1 = var6 * var1;
                            var1 = var4.bind(var5)(var1);
                            var0 = var0 + var3;
                            var0 = var0 + var1;
                            var1 = var2._roundA;
                            var0 = var0 + var3;
                            var1 = var0 + var1;
                            var0 = ')';
                            var0 = var1 + var0;
                            _fun42336_ip = 299;
                            continue _fun42336;
                        case 167:
                            var3 = _closure2_slot4;
                            var8 = _closure2_slot30;
                            var1 = var2._r;
                            var5 = undefined;
                            var7 = 255;
                            var1 = var8.bind(var5)(var1, var7);
                            var6 = 100;
                            var1 = var6 * var1;
                            var3 = var3.bind(var5)(var1);
                            var1 = 'rgb(';
                            var1 = var1 + var3;
                            var9 = _closure2_slot4;
                            var3 = var2._g;
                            var3 = var8.bind(var5)(var3, var7);
                            var3 = var6 * var3;
                            var9 = var9.bind(var5)(var3);
                            var3 = '%, ';
                            var1 = var1 + var3;
                            var1 = var1 + var9;
                            var4 = _closure2_slot4;
                            var2 = var2._b;
                            var2 = var8.bind(var5)(var2, var7);
                            var2 = var6 * var2;
                            var2 = var4.bind(var5)(var2);
                            var1 = var1 + var3;
                            var2 = var1 + var2;
                            var1 = '%)';
                            var0 = var2 + var1;
                        case 299:
                            return var0;
                    }
                };
                var0.toPercentageRgbString = var1;
                var1 = function() { // Original name: toName, environment: var3
                    _fun42337: for (var _fun42337_ip = 0;;) switch (_fun42337_ip) {
                        case 0:
                            var2 = this;
                            var3 = var2._a;
                            var0 = 'transparent';
                            var1 = 0;
                            if (!(var1 !== var3)) {
                                _fun42337_ip = 89;
                                continue _fun42337
                            }
                        case 18:
                            var3 = var2._a;
                            var1 = 1;
                            var3 = var3 < var1;
                            var1 = !var3;
                            if (var3) {
                                _fun42337_ip = 86;
                                continue _fun42337
                            }
                        case 37:
                            var3 = _closure2_slot9;
                            var8 = _closure2_slot14;
                            var12 = var2._r;
                            var11 = var2._g;
                            var10 = var2._b;
                            var13 = undefined;
                            var9 = true;
                            var2 = var13[var8](var12, var11, var10, var9, var8);
                            var2 = var3[var2];
                            if (var2) {
                                _fun42337_ip = 83;
                                continue _fun42337
                            }
                        case 81:
                            var2 = false;
                        case 83:
                            var1 = var2;
                        case 86:
                            var0 = var1;
                        case 89:
                            return var0;
                    }
                };
                var0.toName = var1;
                var1 = function(arg0) { // Original name: toFilter, environment: var3
                    _fun42338: for (var _fun42338_ip = 0;;) switch (_fun42338_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = this;
                            var7 = _closure2_slot15;
                            var13 = var0._r;
                            var12 = var0._g;
                            var11 = var0._b;
                            var10 = var0._a;
                            var9 = undefined;
                            var14 = undefined;
                            var1 = var14[var7](var13, var12, var11, var10, var9);
                            var4 = '#';
                            var2 = var4 + var1;
                            var0 = var0._gradientType;
                            var3 = '';
                            if (!var0) {
                                _fun42338_ip = 71;
                                continue _fun42338
                            }
                        case 65:
                            var3 = 'GradientType = 1, ';
                        case 71:
                            var1 = var2;
                            if (!var6) {
                                _fun42338_ip = 124;
                                continue _fun42338
                            }
                        case 77:
                            var0 = _closure2_slot11;
                            var0 = var0.bind(var9)(var6);
                            var8 = _closure2_slot15;
                            var13 = var0._r;
                            var12 = var0._g;
                            var11 = var0._b;
                            var10 = var0._a;
                            var14 = undefined;
                            var0 = var14[var8](var13, var12, var11, var10, var9);
                            var1 = var4 + var0;
                        case 124:
                            var0 = 'progid:DXImageTransform.Microsoft.gradient(';
                            var3 = var0 + var3;
                            var0 = 'startColorstr=';
                            var0 = var3 + var0;
                            var2 = var0 + var2;
                            var0 = ',endColorstr=';
                            var0 = var2 + var0;
                            var1 = var0 + var1;
                            var0 = ')';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var0.toFilter = var1;
                var1 = function(arg0) { // Original name: toString, environment: var3
                    _fun42339: for (var _fun42339_ip = 0;;) switch (_fun42339_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = this;
                            var1 = !var4;
                            if (var4) {
                                _fun42339_ip = 17;
                                continue _fun42339
                            }
                        case 11:
                            var4 = var3._format;
                        case 17:
                            var2 = var3._a;
                            var0 = 1;
                            var0 = var2 < var0;
                            if (!var0) {
                                _fun42339_ip = 45;
                                continue _fun42339
                            }
                        case 33:
                            var5 = var3._a;
                            var2 = 0;
                            var0 = var5 >= var2;
                        case 45:
                            if (!var1) {
                                _fun42339_ip = 146;
                                continue _fun42339
                            }
                        case 48:
                            if (!var0) {
                                _fun42339_ip = 146;
                                continue _fun42339
                            }
                        case 51:
                            var0 = 'hex';
                            if (!(var0 !== var4)) {
                                _fun42339_ip = 99;
                                continue _fun42339
                            }
                        case 59:
                            var0 = 'hex6';
                            if (!(var0 !== var4)) {
                                _fun42339_ip = 99;
                                continue _fun42339
                            }
                        case 67:
                            var0 = 'hex3';
                            if (!(var0 !== var4)) {
                                _fun42339_ip = 99;
                                continue _fun42339
                            }
                        case 75:
                            var0 = 'hex4';
                            if (!(var0 !== var4)) {
                                _fun42339_ip = 99;
                                continue _fun42339
                            }
                        case 83:
                            var0 = 'hex8';
                            if (!(var0 !== var4)) {
                                _fun42339_ip = 99;
                                continue _fun42339
                            }
                        case 91:
                            var0 = 'name';
                            if (!(var0 === var4)) {
                                _fun42339_ip = 146;
                                continue _fun42339
                            }
                        case 99:
                            var0 = 'name';
                            if (!(var0 === var4)) {
                                _fun42339_ip = 119;
                                continue _fun42339
                            }
                        case 107:
                            var1 = var3._a;
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun42339_ip = 131;
                                continue _fun42339
                            }
                        case 119:
                            var0 = var3.toRgbString;
                            var0 = var0.bind(var3)();
                            _fun42339_ip = 141;
                            continue _fun42339;
                        case 131:
                            var1 = var3.toName;
                            var0 = var1.bind(var3)();
                        case 141:
                            _fun42339_ip = 348;
                            continue _fun42339;
                        case 146:
                            var2 = 'rgb';
                            var1 = false;
                            if (!(var2 === var4)) {
                                _fun42339_ip = 166;
                                continue _fun42339
                            }
                        case 156:
                            var2 = var3.toRgbString;
                            var1 = var2.bind(var3)();
                        case 166:
                            var2 = 'prgb';
                            if (!(var2 === var4)) {
                                _fun42339_ip = 186;
                                continue _fun42339
                            }
                        case 176:
                            var2 = var3.toPercentageRgbString;
                            var1 = var2.bind(var3)();
                        case 186:
                            var2 = 'hex';
                            var2 = var2 !== var4;
                            if (!var2) {
                                _fun42339_ip = 205;
                                continue _fun42339
                            }
                        case 197:
                            var5 = 'hex6';
                            var2 = var5 !== var4;
                        case 205:
                            if (var2) {
                                _fun42339_ip = 218;
                                continue _fun42339
                            }
                        case 208:
                            var2 = var3.toHexString;
                            var1 = var2.bind(var3)();
                        case 218:
                            var2 = 'hex3';
                            if (!(var2 === var4)) {
                                _fun42339_ip = 239;
                                continue _fun42339
                            }
                        case 226:
                            var5 = var3.toHexString;
                            var2 = true;
                            var1 = var5.bind(var3)(var2);
                        case 239:
                            var2 = 'hex4';
                            if (!(var2 === var4)) {
                                _fun42339_ip = 260;
                                continue _fun42339
                            }
                        case 247:
                            var5 = var3.toHex8String;
                            var2 = true;
                            var1 = var5.bind(var3)(var2);
                        case 260:
                            var2 = 'hex8';
                            if (!(var2 === var4)) {
                                _fun42339_ip = 278;
                                continue _fun42339
                            }
                        case 268:
                            var2 = var3.toHex8String;
                            var1 = var2.bind(var3)();
                        case 278:
                            var2 = 'name';
                            if (!(var2 === var4)) {
                                _fun42339_ip = 296;
                                continue _fun42339
                            }
                        case 286:
                            var2 = var3.toName;
                            var1 = var2.bind(var3)();
                        case 296:
                            var2 = 'hsl';
                            if (!(var2 === var4)) {
                                _fun42339_ip = 314;
                                continue _fun42339
                            }
                        case 304:
                            var2 = var3.toHslString;
                            var1 = var2.bind(var3)();
                        case 314:
                            var2 = 'hsv';
                            if (!(var2 === var4)) {
                                _fun42339_ip = 332;
                                continue _fun42339
                            }
                        case 322:
                            var2 = var3.toHsvString;
                            var1 = var2.bind(var3)();
                        case 332:
                            if (var1) {
                                _fun42339_ip = 345;
                                continue _fun42339
                            }
                        case 335:
                            var2 = var3.toHexString;
                            var1 = var2.bind(var3)();
                        case 345:
                            var0 = var1;
                        case 348:
                            return var0;
                    }
                };
                var0.toString = var1;
                var1 = function() { // Original name: clone, environment: var3
                    var1 = this;
                    var2 = _closure2_slot11;
                    var0 = var1.toString;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.clone = var1;
                var1 = function(arg0, arg1) { // Original name: _applyModification, environment: var3
                    var4 = arg0;
                    var0 = this;
                    var3 = var4.apply;
                    var5 = new Array(1);
                    var5[0] = var0;
                    var2 = var5.concat;
                    var1 = new Array(0);
                    var7 = var1.slice;
                    var6 = var7.call;
                    var1 = arg1;
                    var1 = var6.bind(var7)(var1);
                    var2 = var2.bind(var5)(var1);
                    var1 = null;
                    var1 = var3.bind(var4)(var1, var2);
                    var2 = var1._r;
                    var0._r = var2;
                    var2 = var1._g;
                    var0._g = var2;
                    var2 = var1._b;
                    var0._b = var2;
                    var2 = var0.setAlpha;
                    var1 = var1._a;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0._applyModification = var1;
                var1 = function() { // Original name: lighten, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyModification;
                    var1 = _closure2_slot19;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.lighten = var1;
                var1 = function() { // Original name: brighten, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyModification;
                    var1 = _closure2_slot20;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.brighten = var1;
                var1 = function() { // Original name: darken, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyModification;
                    var1 = _closure2_slot21;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.darken = var1;
                var1 = function() { // Original name: desaturate, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyModification;
                    var1 = _closure2_slot16;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.desaturate = var1;
                var1 = function() { // Original name: saturate, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyModification;
                    var1 = _closure2_slot17;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.saturate = var1;
                var1 = function() { // Original name: greyscale, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyModification;
                    var1 = _closure2_slot18;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.greyscale = var1;
                var1 = function() { // Original name: spin, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyModification;
                    var1 = _closure2_slot22;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.spin = var1;
                var1 = function(arg0, arg1) { // Original name: _applyCombination, environment: var3
                    var3 = arg0;
                    var2 = var3.apply;
                    var4 = new Array(1);
                    var0 = this;
                    var4[0] = var0;
                    var1 = var4.concat;
                    var0 = new Array(0);
                    var6 = var0.slice;
                    var5 = var6.call;
                    var0 = arg1;
                    var0 = var5.bind(var6)(var0);
                    var1 = var1.bind(var4)(var0);
                    var0 = null;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0._applyCombination = var1;
                var1 = function() { // Original name: analogous, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyCombination;
                    var1 = _closure2_slot27;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.analogous = var1;
                var1 = function() { // Original name: complement, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyCombination;
                    var1 = _closure2_slot23;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.complement = var1;
                var1 = function() { // Original name: monochromatic, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyCombination;
                    var1 = _closure2_slot28;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.monochromatic = var1;
                var1 = function() { // Original name: splitcomplement, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyCombination;
                    var1 = _closure2_slot26;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.splitcomplement = var1;
                var1 = function() { // Original name: triad, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyCombination;
                    var1 = _closure2_slot24;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.triad = var1;
                var1 = function() { // Original name: tetrad, environment: var3
                    var3 = this;
                    var0 = undefined;
                    var2 = var3._applyCombination;
                    var1 = _closure2_slot25;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.tetrad = var1;
                var2.prototype = var0;
                var0 = function(arg0, arg1) { // Environment: var3
                    _fun42356: for (var _fun42356_ip = 0;;) switch (_fun42356_ip) {
                        case 0:
                            var10 = arg0;
                            var1 = 'object';
                            var0 = typeof var10;
                            var3 = var10;
                            if (!(var1 === var0)) {
                                _fun42356_ip = 100;
                                continue _fun42356
                            }
                        case 17:
                            var9 = {};
                            var7 = var10;
                            var1 = undefined;
                            var0 = 'a';
                            var3 = var9;
                            for (var4 in var7)
                                case 42: {
                                    var3 = var9;
                                    case 54: var12 = var4;
                                    var11 = var10.hasOwnProperty;
                                    var11 = var11.bind(var10)(var12);
                                    if (!var11) {
                                        _fun42356_ip = 42;
                                        continue _fun42356
                                    }
                                    case 71: if (!(var0 !== var12)) {
                                        _fun42356_ip = 90;
                                        continue _fun42356
                                    }
                                    case 75: var13 = _closure2_slot34;
                                    var11 = var10[var12];
                                    var11 = var13.bind(var1)(var11);
                                    _fun42356_ip = 94;
                                    continue _fun42356;
                                    case 90: var11 = var10[var12];
                                    case 94: var9[var12] = var11;
                                    _fun42356_ip = 42;
                                    continue _fun42356;
                                }
                        case 100:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var0 = arg1;
                            var0 = var2.bind(var1)(var3, var0);
                            return var0;
                    }
                };
                var2.fromRatio = var0;
                var0 = function(arg0, arg1) { // Environment: var3
                    _fun42357: for (var _fun42357_ip = 0;;) switch (_fun42357_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = arg1;
                            var1 = !var2;
                            if (var1) {
                                _fun42357_ip = 15;
                                continue _fun42357
                            }
                        case 12:
                            var1 = !var4;
                        case 15:
                            var0 = !var1;
                            if (var1) {
                                _fun42357_ip = 64;
                                continue _fun42357
                            }
                        case 21:
                            var3 = _closure2_slot11;
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var2 = var5.toRgbString;
                            var2 = var2.bind(var5)();
                            var3 = var3.bind(var1)(var4);
                            var1 = var3.toRgbString;
                            var1 = var1.bind(var3)();
                            var0 = var2 == var1;
                        case 64:
                            return var0;
                    }
                };
                var2.equals = var0;
                var0 = function() { // Environment: var3
                    var2 = _closure2_slot11;
                    var1 = var2.fromRatio;
                    var0 = {};
                    var4 = _closure2_slot7;
                    var3 = undefined;
                    var5 = var4.bind(var3)();
                    var0.r = var5;
                    var5 = var4.bind(var3)();
                    var0.g = var5;
                    var3 = var4.bind(var3)();
                    var0.b = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2.random = var0;
                var0 = function(arg0, arg1, arg2) { // Environment: var3
                    _fun42359: for (var _fun42359_ip = 0;;) switch (_fun42359_ip) {
                        case 0:
                            var0 = arg2;
                            var5 = 0;
                            if (!(var5 !== var0)) {
                                _fun42359_ip = 18;
                                continue _fun42359
                            }
                        case 9:
                            if (var0) {
                                _fun42359_ip = 15;
                                continue _fun42359
                            }
                        case 12:
                            var0 = 50;
                        case 15:
                            var5 = var0;
                        case 18:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var0 = arg0;
                            var3 = var2.bind(var1)(var0);
                            var0 = var3.toRgb;
                            var3 = var0.bind(var3)();
                            var0 = arg1;
                            var4 = var2.bind(var1)(var0);
                            var0 = var4.toRgb;
                            var4 = var0.bind(var4)();
                            var0 = 100;
                            var5 = var5 / var0;
                            var0 = {};
                            var7 = var4.r;
                            var6 = var3.r;
                            var6 = var7 - var6;
                            var7 = var6 * var5;
                            var6 = var3.r;
                            var6 = var7 + var6;
                            var0.r = var6;
                            var7 = var4.g;
                            var6 = var3.g;
                            var6 = var7 - var6;
                            var7 = var6 * var5;
                            var6 = var3.g;
                            var6 = var7 + var6;
                            var0.g = var6;
                            var7 = var4.b;
                            var6 = var3.b;
                            var6 = var7 - var6;
                            var7 = var6 * var5;
                            var6 = var3.b;
                            var6 = var7 + var6;
                            var0.b = var6;
                            var6 = var4.a;
                            var4 = var3.a;
                            var4 = var6 - var4;
                            var4 = var4 * var5;
                            var3 = var3.a;
                            var3 = var4 + var3;
                            var0.a = var3;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var2.mix = var0;
                var0 = function(arg0, arg1) { // Environment: var3
                    var4 = _closure2_slot11;
                    var2 = undefined;
                    var1 = arg0;
                    var3 = var4.bind(var2)(var1);
                    var1 = arg1;
                    var6 = var4.bind(var2)(var1);
                    var5 = _closure2_slot0;
                    var2 = var5.max;
                    var0 = var3.getLuminance;
                    var1 = var0.bind(var3)();
                    var0 = var6.getLuminance;
                    var0 = var0.bind(var6)();
                    var0 = var2.bind(var5)(var1, var0);
                    var2 = 0.05;
                    var1 = var0 + var2;
                    var4 = var5.min;
                    var0 = var3.getLuminance;
                    var3 = var0.bind(var3)();
                    var0 = var6.getLuminance;
                    var0 = var0.bind(var6)();
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var0 + var2;
                    var0 = var1 / var0;
                    return var0;
                };
                var2.readability = var0;
                var0 = function(arg0, arg1, arg2) { // Environment: var3
                    _fun42361: for (var _fun42361_ip = 0;;) switch (_fun42361_ip) {
                        case 0:
                            var0 = arg2;
                            var4 = _closure2_slot11;
                            var3 = var4.readability;
                            var2 = arg0;
                            var1 = arg1;
                            var2 = var3.bind(var4)(var2, var1);
                            if (var0) {
                                _fun42361_ip = 45;
                                continue _fun42361
                            }
                        case 31:
                            var0 = {
                                'level': 'AA',
                                'size': 'small'
                            };
                        case 45:
                            var3 = var0.level;
                            if (var3) {
                                _fun42361_ip = 60;
                                continue _fun42361
                            }
                        case 54:
                            var3 = 'AA';
                        case 60:
                            var1 = var3.toUpperCase;
                            var3 = var1.bind(var3)();
                            var1 = var0.size;
                            if (var1) {
                                _fun42361_ip = 82;
                                continue _fun42361
                            }
                        case 78:
                            var1 = 'small';
                        case 82:
                            var0 = var1.toLowerCase;
                            var1 = var0.bind(var1)();
                            var0 = 'AA';
                            var4 = var0 !== var3;
                            if (!var4) {
                                _fun42361_ip = 115;
                                continue _fun42361
                            }
                        case 105:
                            var5 = 'AAA';
                            var4 = var5 !== var3;
                        case 115:
                            if (!var4) {
                                _fun42361_ip = 121;
                                continue _fun42361
                            }
                        case 118:
                            var3 = var0;
                        case 121:
                            var0 = 'small';
                            var4 = var0 !== var1;
                            if (!var4) {
                                _fun42361_ip = 140;
                                continue _fun42361
                            }
                        case 132:
                            var5 = 'large';
                            var4 = var5 !== var1;
                        case 140:
                            if (!var4) {
                                _fun42361_ip = 146;
                                continue _fun42361
                            }
                        case 143:
                            var1 = var0;
                        case 146:
                            var0 = {};
                            var0.level = var3;
                            var0.size = var1;
                            var1 = var0.level;
                            var0 = var0.size;
                            var3 = var1 + var0;
                            var0 = 'AAsmall';
                            if (!(var0 !== var3)) {
                                _fun42361_ip = 232;
                                continue _fun42361
                            }
                        case 182:
                            var0 = 'AAAlarge';
                            if (!(var0 !== var3)) {
                                _fun42361_ip = 232;
                                continue _fun42361
                            }
                        case 192:
                            var0 = 'AAlarge';
                            if (!(var0 !== var3)) {
                                _fun42361_ip = 223;
                                continue _fun42361
                            }
                        case 202:
                            var1 = 'AAAsmall';
                            var0 = false;
                            if (!(var1 === var3)) {
                                _fun42361_ip = 246;
                                continue _fun42361
                            }
                        case 214:
                            var1 = 7;
                            var0 = var2 >= var1;
                            _fun42361_ip = 246;
                            continue _fun42361;
                        case 223:
                            var1 = 3;
                            var0 = var2 >= var1;
                            _fun42361_ip = 246;
                            continue _fun42361;
                        case 232:
                            var1 = 4.5;
                            var0 = var2 >= var1;
                        case 246:
                            return var0;
                    }
                };
                var2.isReadable = var0;
                var0 = function(arg0, arg1, arg2) { // Environment: var3
                    _fun42362: for (var _fun42362_ip = 0;;) switch (_fun42362_ip) {
                        case 0:
                            var5 = arg0;
                            var12 = arg1;
                            var4 = arg2;
                            if (var4) {
                                _fun42362_ip = 14;
                                continue _fun42362
                            }
                        case 12:
                            var4 = {};
                        case 14:
                            var2 = var4.includeFallbackColors;
                            var9 = var4.level;
                            var8 = var4.size;
                            var0 = var12.length;
                            var6 = 0;
                            var3 = var6 < var0;
                            var10 = null;
                            var11 = undefined;
                            var7 = 0;
                            var0 = null;
                            if (!var3) {
                                _fun42362_ip = 111;
                                continue _fun42362
                            }
                        case 56:
                            var14 = _closure2_slot11;
                            var13 = var14.readability;
                            var3 = var12[var6];
                            var3 = var13.bind(var14)(var5, var3);
                            if (!(var3 > var7)) {
                                _fun42362_ip = 96;
                                continue _fun42362
                            }
                        case 80:
                            var14 = _closure2_slot11;
                            var13 = var12[var6];
                            var10 = var14.bind(var11)(var13);
                            var7 = var3;
                        case 96:
                            var6 = var6 + 1;
                            var3 = var12.length;
                            var0 = var10;
                            if (var6 < var3) {
                                _fun42362_ip = 56;
                                continue _fun42362
                            }
                        case 111:
                            var7 = _closure2_slot11;
                            var6 = var7.isReadable;
                            var3 = {};
                            var3.level = var9;
                            var3.size = var8;
                            var6 = var6.bind(var7)(var5, var0, var3);
                            var3 = var0;
                            var0 = var3;
                            if (var6) {
                                _fun42362_ip = 189;
                                continue _fun42362
                            }
                        case 148:
                            var0 = var3;
                            if (!var2) {
                                _fun42362_ip = 189;
                                continue _fun42362
                            }
                        case 154:
                            var2 = false;
                            var4.includeFallbackColors = var2;
                            var3 = _closure2_slot11;
                            var2 = var3.mostReadable;
                            var1 = ['#fff', '#000'];
                            var0 = var2.bind(var3)(var5, var1, var4);
                        case 189:
                            return var0;
                    }
                };
                var2.mostReadable = var0;
                var8 = {
                    'aliceblue': 'f0f8ff',
                    'antiquewhite': 'faebd7',
                    'aqua': '0ff',
                    'aquamarine': '7fffd4',
                    'azure': 'f0ffff',
                    'beige': 'f5f5dc',
                    'bisque': 'ffe4c4',
                    'black': '000',
                    'blanchedalmond': 'ffebcd',
                    'blue': '00f',
                    'blueviolet': '8a2be2',
                    'brown': 'a52a2a',
                    'burlywood': 'deb887',
                    'burntsienna': 'ea7e5d',
                    'cadetblue': '5f9ea0',
                    'chartreuse': '7fff00',
                    'chocolate': 'd2691e',
                    'coral': 'ff7f50',
                    'cornflowerblue': '6495ed',
                    'cornsilk': 'fff8dc',
                    'crimson': 'dc143c',
                    'cyan': '0ff',
                    'darkblue': '00008b',
                    'darkcyan': '008b8b',
                    'darkgoldenrod': 'b8860b',
                    'darkgray': 'a9a9a9',
                    'darkgreen': '006400',
                    'darkgrey': 'a9a9a9',
                    'darkkhaki': 'bdb76b',
                    'darkmagenta': '8b008b',
                    'darkolivegreen': '556b2f',
                    'darkorange': 'ff8c00',
                    'darkorchid': '9932cc',
                    'darkred': '8b0000',
                    'darksalmon': 'e9967a',
                    'darkseagreen': '8fbc8f',
                    'darkslateblue': '483d8b',
                    'darkslategray': '2f4f4f',
                    'darkslategrey': '2f4f4f',
                    'darkturquoise': '00ced1',
                    'darkviolet': '9400d3',
                    'deeppink': 'ff1493',
                    'deepskyblue': '00bfff',
                    'dimgray': '696969',
                    'dimgrey': '696969',
                    'dodgerblue': '1e90ff',
                    'firebrick': 'b22222',
                    'floralwhite': 'fffaf0',
                    'forestgreen': '228b22',
                    'fuchsia': 'f0f',
                    'gainsboro': 'dcdcdc',
                    'ghostwhite': 'f8f8ff',
                    'gold': 'ffd700',
                    'goldenrod': 'daa520',
                    'gray': '808080',
                    'green': '008000',
                    'greenyellow': 'adff2f',
                    'grey': '808080',
                    'honeydew': 'f0fff0',
                    'hotpink': 'ff69b4',
                    'indianred': 'cd5c5c',
                    'indigo': '4b0082',
                    'ivory': 'fffff0',
                    'khaki': 'f0e68c',
                    'lavender': 'e6e6fa',
                    'lavenderblush': 'fff0f5',
                    'lawngreen': '7cfc00',
                    'lemonchiffon': 'fffacd',
                    'lightblue': 'add8e6',
                    'lightcoral': 'f08080',
                    'lightcyan': 'e0ffff',
                    'lightgoldenrodyellow': 'fafad2',
                    'lightgray': 'd3d3d3',
                    'lightgreen': '90ee90',
                    'lightgrey': 'd3d3d3',
                    'lightpink': 'ffb6c1',
                    'lightsalmon': 'ffa07a',
                    'lightseagreen': '20b2aa',
                    'lightskyblue': '87cefa',
                    'lightslategray': '789',
                    'lightslategrey': '789',
                    'lightsteelblue': 'b0c4de',
                    'lightyellow': 'ffffe0',
                    'lime': '0f0',
                    'limegreen': '32cd32',
                    'linen': 'faf0e6',
                    'magenta': 'f0f',
                    'maroon': '800000',
                    'mediumaquamarine': '66cdaa',
                    'mediumblue': '0000cd',
                    'mediumorchid': 'ba55d3',
                    'mediumpurple': '9370db',
                    'mediumseagreen': '3cb371',
                    'mediumslateblue': '7b68ee',
                    'mediumspringgreen': '00fa9a',
                    'mediumturquoise': '48d1cc',
                    'mediumvioletred': 'c71585',
                    'midnightblue': '191970',
                    'mintcream': 'f5fffa',
                    'mistyrose': 'ffe4e1',
                    'moccasin': 'ffe4b5',
                    'navajowhite': 'ffdead',
                    'navy': '000080',
                    'oldlace': 'fdf5e6',
                    'olive': '808000',
                    'olivedrab': '6b8e23',
                    'orange': 'ffa500',
                    'orangered': 'ff4500',
                    'orchid': 'da70d6',
                    'palegoldenrod': 'eee8aa',
                    'palegreen': '98fb98',
                    'paleturquoise': 'afeeee',
                    'palevioletred': 'db7093',
                    'papayawhip': 'ffefd5',
                    'peachpuff': 'ffdab9',
                    'peru': 'cd853f',
                    'pink': 'ffc0cb',
                    'plum': 'dda0dd',
                    'powderblue': 'b0e0e6',
                    'purple': '800080',
                    'rebeccapurple': '663399',
                    'red': 'f00',
                    'rosybrown': 'bc8f8f',
                    'royalblue': '4169e1',
                    'saddlebrown': '8b4513',
                    'salmon': 'fa8072',
                    'sandybrown': 'f4a460',
                    'seagreen': '2e8b57',
                    'seashell': 'fff5ee',
                    'sienna': 'a0522d',
                    'silver': 'c0c0c0',
                    'skyblue': '87ceeb',
                    'slateblue': '6a5acd',
                    'slategray': '708090',
                    'slategrey': '708090',
                    'snow': 'fffafa',
                    'springgreen': '00ff7f',
                    'steelblue': '4682b4',
                    'tan': 'd2b48c',
                    'teal': '008080',
                    'thistle': 'd8bfd8',
                    'tomato': 'ff6347',
                    'turquoise': '40e0d0',
                    'violet': 'ee82ee',
                    'wheat': 'f5deb3',
                    'white': 'fff',
                    'whitesmoke': 'f5f5f5',
                    'yellow': 'ff0',
                    'yellowgreen': '9acd32'
                };
                var2.names = var8;
                var _closure2_slot8 = var8;
                var0 = {};
                var6 = var8;
                for (var1 in var6)
                    case 878: {
                        case 887: var10 = var1;
                        var9 = var8.hasOwnProperty;
                        var9 = var9.bind(var8)(var10);
                        if (!var9) {
                            _fun42285_ip = 878;
                            continue _fun42285
                        }
                        case 904: var9 = var8[var10];
                        var0[var9] = var10;
                        _fun42285_ip = 878;
                        continue _fun42285;
                    }
            case 914:
                var2.hexNames = var0;
                var _closure2_slot9 = var0;
                var0 = {};
                var4 = global;
                var6 = var4.RegExp;
                var1 = var6.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)';
                var12 = var5;
                var1 = new var12[var6](var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                var0.CSS_UNIT = var1;
                var6 = var4.RegExp;
                var1 = var6.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = 'rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?';
                var12 = var5;
                var1 = new var12[var6](var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                var0.rgb = var1;
                var6 = var4.RegExp;
                var1 = var6.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = 'rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?';
                var12 = var5;
                var1 = new var12[var6](var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                var0.rgba = var1;
                var6 = var4.RegExp;
                var1 = var6.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = 'hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?';
                var12 = var5;
                var1 = new var12[var6](var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                var0.hsl = var1;
                var6 = var4.RegExp;
                var1 = var6.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = 'hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?';
                var12 = var5;
                var1 = new var12[var6](var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                var0.hsla = var1;
                var6 = var4.RegExp;
                var1 = var6.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = 'hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?';
                var12 = var5;
                var1 = new var12[var6](var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                var0.hsv = var1;
                var6 = var4.RegExp;
                var1 = var6.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = 'hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?';
                var12 = var5;
                var1 = new var12[var6](var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                var0.hsva = var1;
                var1 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
                var0.hex3 = var1;
                var1 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
                var0.hex6 = var1;
                var1 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
                var0.hex4 = var1;
                var1 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
                var0.hex8 = var1;
                var _closure2_slot10 = var0;
                var5 = _closure1_slot0;
                var0 = undefined;
                if (!(var0 !== var5)) {
                    _fun42285_ip = 1294;
                    continue _fun42285
                }
            case 1282:
                var5 = _closure1_slot0;
                var5 = var5.exports;
                if (var5) {
                    _fun42285_ip = 1360;
                    continue _fun42285
                }
            case 1294:
                var5 = var4.define;
                var6 = 'function';
                var5 = typeof var5;
                if (!(var6 === var5)) {
                    _fun42285_ip = 1326;
                    continue _fun42285
                }
            case 1311:
                var5 = var4.define;
                var5 = var5.amd;
                if (var5) {
                    _fun42285_ip = 1342;
                    continue _fun42285
                }
            case 1326:
                var5 = var4.window;
                var5.tinycolor = var2;
                _fun42285_ip = 1370;
                continue _fun42285;
            case 1342:
                var4 = var4.define;
                var3 = function() { // Environment: var3
                    var0 = _closure2_slot11;
                    return var0;
                };
                var3 = var4.bind(var0)(var3);
                _fun42285_ip = 1370;
                continue _fun42285;
            case 1360:
                var1 = _closure1_slot0;
                var1.exports = var2;
            case 1370:
                return var0;
        }
    };
    var0 = undefined;
    var1 = var1.bind(var0)(var2);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);