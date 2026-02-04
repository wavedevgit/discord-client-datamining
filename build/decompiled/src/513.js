// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6557: for (var _fun6557_ip = 0;;) switch (_fun6557_ip) {
        case 0:
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
            var0 = global;
            var1 = var0.Object;
            var1 = var1.prototype;
            var1 = var1.hasOwnProperty;
            var _closure1_slot2 = var1;
            var0 = var0.Array;
            var0 = var0.isArray;
            var _closure1_slot3 = var0;
            var0 = new Array(0);
            var6 = 16;
            var5 = '%';
            var4 = 256;
            var3 = '0';
            var1 = '';
            var7 = 0;
        case 83:
            var9 = var0.push;
            var10 = var1;
            if (!(var7 < var6)) {
                _fun6557_ip = 98;
                continue _fun6557
            }
        case 95:
            var10 = var3;
        case 98:
            var8 = var7.toString;
            var8 = var8.bind(var7)(var6);
            var10 = var10 + var8;
            var8 = var10.toUpperCase;
            var8 = var8.bind(var10)();
            var8 = var5 + var8;
            var8 = var9.bind(var0)(var8);
            var7 = var7 + 1;
            if (var7 < var4) {
                _fun6557_ip = 83;
                continue _fun6557
            }
        case 138:
            var _closure1_slot4 = var0;
            var0 = function arg0, arg1() {
                _fun6558: for (var _fun6558_ip = 0;;) switch (_fun6558_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = arg1;
                        if (!var0) {
                            _fun6558_ip = 18;
                            continue _fun6558
                        }
                    case 9:
                        var0 = var0.plainObjects;
                        if (var0) {
                            _fun6558_ip = 22;
                            continue _fun6558
                        }
                    case 18:
                        var0 = {};
                        _fun6558_ip = 27;
                        continue _fun6558;
                    case 22:
                        var1 = null;
                        var0 = Object.create(var1);
                    case 27:
                        var1 = var4.length;
                        var3 = 0;
                        var1 = var3 < var1;
                        var2 = undefined;
                        if (!var1) {
                            _fun6558_ip = 71;
                            continue _fun6558
                        }
                    case 43:
                        var1 = var4[var3];
                        if (!(var2 !== var1)) {
                            _fun6558_ip = 59;
                            continue _fun6558
                        }
                    case 51:
                        var1 = var4[var3];
                        var0[var3] = var1;
                    case 59:
                        var3 = var3 + 1;
                        var1 = var4.length;
                        if (var3 < var1) {
                            _fun6558_ip = 43;
                            continue _fun6558
                        }
                    case 71:
                        return var0;
                }
            };
            var _closure1_slot5 = var0;
            var1 = {};
            var1.arrayToObject = var0;
            var0 = function arg0, arg1() {
                var3 = arg1;
                var _closure2_slot0 = var3;
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var3 = var1.bind(var2)(var3);
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var2 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var1[var2];
                    var0[var2] = var1;
                    return var0;
                };
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.assign = var0;
            var0 = function arg0, arg1() {
                var3 = new Array(0);
                var2 = var3.concat;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.combine = var0;
            var0 = function arg0() {
                _fun6562: for (var _fun6562_ip = 0;;) switch (_fun6562_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = {};
                        var2 = {};
                        var2.o = var0;
                        var1.obj = var2;
                        var2 = 'o';
                        var1.prop = var2;
                        var8 = new Array(1);
                        var8[0] = var1;
                        var12 = new Array(0);
                        var1 = var8.length;
                        var7 = 0;
                        var1 = var7 < var1;
                        var6 = undefined;
                        var11 = global;
                        var10 = -1;
                        var9 = null;
                        var5 = 'object';
                        var4 = 0;
                        var3 = undefined;
                        var2 = undefined;
                        if (!var1) {
                            _fun6562_ip = 234;
                            continue _fun6562
                        }
                    case 76:
                        var1 = var8[var4];
                        var13 = var1.obj;
                        var1 = var1.prop;
                        var15 = var13[var1];
                        var13 = var11.Object;
                        var1 = var13.keys;
                        var14 = var1.bind(var13)(var15);
                        var1 = var14.length;
                        var1 = var7 < var1;
                        var13 = 0;
                        if (!var1) {
                            _fun6562_ip = 219;
                            continue _fun6562
                        }
                    case 126:
                        var17 = var14[var13];
                        var16 = var15[var17];
                        var1 = typeof var16;
                        var1 = var5 === var1;
                        if (!var1) {
                            _fun6562_ip = 148;
                            continue _fun6562
                        }
                    case 144:
                        var1 = var9 !== var16;
                    case 148:
                        if (!var1) {
                            _fun6562_ip = 166;
                            continue _fun6562
                        }
                    case 151:
                        var18 = var12.indexOf;
                        var18 = var18.bind(var12)(var16);
                        var1 = var10 === var18;
                    case 166:
                        if (!var1) {
                            _fun6562_ip = 201;
                            continue _fun6562
                        }
                    case 169:
                        var18 = var8.push;
                        var1 = {};
                        var1.obj = var15;
                        var1.prop = var17;
                        var1 = var18.bind(var8)(var1);
                        var1 = var12.push;
                        var1 = var1.bind(var12)(var16);
                    case 201:
                        var13 = var13 + 1;
                        var1 = var14.length;
                        var3 = var17;
                        var2 = var16;
                        if (var13 < var1) {
                            _fun6562_ip = 126;
                            continue _fun6562
                        }
                    case 219:
                        var4 = var4 + 1;
                        var1 = var8.length;
                        if (var4 < var1) {
                            _fun6562_ip = 76;
                            continue _fun6562
                        }
                    case 234:
                        var1 = var8.length;
                        var5 = 1;
                        var1 = var1 > var5;
                        var3 = undefined;
                        var2 = undefined;
                        if (!var1) {
                            _fun6562_ip = 385;
                            continue _fun6562
                        }
                    case 259:
                        var1 = var8.pop;
                        var10 = var1.bind(var8)();
                        var9 = var10.obj;
                        var1 = var10.prop;
                        var13 = var9[var1];
                        var1 = _closure1_slot3;
                        var1 = var1.bind(var6)(var13);
                        if (!var1) {
                            _fun6562_ip = 376;
                            continue _fun6562
                        }
                    case 297:
                        var9 = new Array(0);
                        var1 = var13.length;
                        var11 = var7 < var1;
                        var12 = 0;
                        var1 = 0;
                        if (!var11) {
                            _fun6562_ip = 354;
                            continue _fun6562
                        }
                    case 317:
                        var11 = var13[var12];
                        if (!(var6 !== var11)) {
                            _fun6562_ip = 339;
                            continue _fun6562
                        }
                    case 325:
                        var14 = var9.push;
                        var11 = var13[var12];
                        var11 = var14.bind(var9)(var11);
                    case 339:
                        var12 = var12 + 1;
                        var11 = var13.length;
                        var1 = var12;
                        if (var1 < var11) {
                            _fun6562_ip = 317;
                            continue _fun6562
                        }
                    case 354:
                        var11 = var10.obj;
                        var10 = var10.prop;
                        var11[var10] = var9;
                        var2 = var1;
                        var3 = var9;
                    case 376:
                        var1 = var8.length;
                        if (var1 > var5) {
                            _fun6562_ip = 259;
                            continue _fun6562
                        }
                    case 385:
                        return var0;
                }
            };
            var1.compact = var0;
            var0 = function arg0, arg1, arg2() {
                _fun6563: for (var _fun6563_ip = 0;;) switch (_fun6563_ip) {
                    case 0:
                        var5 = arg0;
                        var3 = undefined;
                        var0 = undefined;
                        var4 = var5.replace;
                        var2 = /\+/g;
                        var1 = ' ';
                        var0 = var4.bind(var5)(var2, var1);
                        var2 = 'iso-8859-1';
                        var1 = arg2;
                        if (!(var2 !== var1)) {
                            _fun6563_ip = 76;
                            continue _fun6563
                        }
                    case 51: // try_start_0
                        var1 = global;
                        var2 = var1.decodeURIComponent;
                        var1 = var0;
                        var1 = var2.bind(var3)(var1);
                    case 67: // try_end0
                        return var1;
                    case 69: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = var0;
                        return var1;
                    case 76:
                        var3 = var0;
                        var2 = var3.replace;
                        var0 = global;
                        var1 = var0.unescape;
                        var0 = /%[0-9a-f]{2}/gi;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var1.decode = var0;
            var0 = function arg0, arg1, arg2, arg3, arg4() {
                _fun6564: for (var _fun6564_ip = 0;;) switch (_fun6564_ip) {
                    case 0:
                        var0 = arg0;
                        var39 = arg4;
                        var1 = var0.length;
                        var38 = 0;
                        if (!(var38 !== var1)) {
                            _fun6564_ip = 823;
                            continue _fun6564
                        }
                    case 20:
                        var2 = typeof var0;
                        var1 = 'symbol';
                        if (!(var1 !== var2)) {
                            _fun6564_ip = 59;
                            continue _fun6564
                        }
                    case 31:
                        var1 = 'string';
                        var3 = var0;
                        if (!(var1 !== var2)) {
                            _fun6564_ip = 87;
                            continue _fun6564
                        }
                    case 42:
                        var1 = global;
                        var2 = var1.String;
                        var1 = undefined;
                        var3 = var2.bind(var1)(var0);
                        _fun6564_ip = 87;
                        continue _fun6564;
                    case 59:
                        var1 = global;
                        var1 = var1.Symbol;
                        var1 = var1.prototype;
                        var2 = var1.toString;
                        var1 = var2.call;
                        var3 = var1.bind(var2)(var0);
                    case 87:
                        var2 = 'iso-8859-1';
                        var1 = arg2;
                        if (!(var2 !== var1)) {
                            _fun6564_ip = 774;
                            continue _fun6564
                        }
                    case 103:
                        var1 = var3.length;
                        var2 = var38 < var1;
                        var37 = '';
                        var36 = undefined;
                        var35 = 1024;
                        var33 = 6;
                        var32 = 192;
                        var31 = 63;
                        var30 = 128;
                        var29 = 12;
                        var28 = 224;
                        var27 = 1;
                        var26 = 1023;
                        var25 = 65536;
                        var24 = 10;
                        var23 = 240;
                        var22 = 18;
                        var21 = 57344;
                        var20 = 55296;
                        var19 = 2048;
                        var18 = 41;
                        var17 = 40;
                        var16 = 122;
                        var15 = 97;
                        var14 = 90;
                        var13 = 65;
                        var12 = 57;
                        var11 = 48;
                        var10 = 126;
                        var9 = 95;
                        var8 = 46;
                        var7 = 45;
                        var6 = var37;
                        var5 = 0;
                        var4 = undefined;
                        var1 = var6;
                        if (!var2) {
                            _fun6564_ip = 772;
                            continue _fun6564
                        }
                    case 239:
                        var2 = var3.length;
                        var42 = var3;
                        if (!(var2 >= var35)) {
                            _fun6564_ip = 266;
                            continue _fun6564
                        }
                    case 251:
                        var40 = var3.slice;
                        var2 = var5 + var35;
                        var42 = var40.bind(var3)(var5, var2);
                    case 266:
                        var40 = new Array(0);
                        var2 = var42.length;
                        var2 = var38 < var2;
                        var41 = 0;
                        if (!var2) {
                            _fun6564_ip = 739;
                            continue _fun6564
                        }
                    case 287:
                        var2 = var42.charCodeAt;
                        var44 = var2.bind(var42)(var41);
                        var45 = var41;
                        if (!(var7 !== var44)) {
                            _fun6564_ip = 695;
                            continue _fun6564
                        }
                    case 308:
                        if (!(var8 !== var44)) {
                            _fun6564_ip = 695;
                            continue _fun6564
                        }
                    case 315:
                        if (!(var9 !== var44)) {
                            _fun6564_ip = 695;
                            continue _fun6564
                        }
                    case 322:
                        if (!(var10 !== var44)) {
                            _fun6564_ip = 695;
                            continue _fun6564
                        }
                    case 329:
                        if (!(var44 >= var11)) {
                            _fun6564_ip = 340;
                            continue _fun6564
                        }
                    case 333:
                        if (!(!(var44 <= var12))) {
                            _fun6564_ip = 695;
                            continue _fun6564
                        }
                    case 340:
                        if (!(var44 >= var13)) {
                            _fun6564_ip = 351;
                            continue _fun6564
                        }
                    case 344:
                        if (!(!(var44 <= var14))) {
                            _fun6564_ip = 695;
                            continue _fun6564
                        }
                    case 351:
                        if (!(var44 >= var15)) {
                            _fun6564_ip = 362;
                            continue _fun6564
                        }
                    case 355:
                        if (!(!(var44 <= var16))) {
                            _fun6564_ip = 695;
                            continue _fun6564
                        }
                    case 362:
                        var43 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var38];
                        var2 = var43.bind(var36)(var2);
                        var2 = var2.RFC1738;
                        if (!(var39 === var2)) {
                            _fun6564_ip = 403;
                            continue _fun6564
                        }
                    case 389:
                        if (!(var17 !== var44)) {
                            _fun6564_ip = 695;
                            continue _fun6564
                        }
                    case 396:
                        if (!(var18 !== var44)) {
                            _fun6564_ip = 695;
                            continue _fun6564
                        }
                    case 403:
                        if (!(!(var44 < var30))) {
                            _fun6564_ip = 670;
                            continue _fun6564
                        }
                    case 410:
                        if (!(!(var44 < var19))) {
                            _fun6564_ip = 621;
                            continue _fun6564
                        }
                    case 417:
                        if (!(!(var44 < var20))) {
                            _fun6564_ip = 552;
                            continue _fun6564
                        }
                    case 424:
                        if (!(!(var44 >= var21))) {
                            _fun6564_ip = 552;
                            continue _fun6564
                        }
                    case 431:
                        var2 = var45 + var27;
                        var43 = var26 & var44;
                        var46 = var42.charCodeAt;
                        var46 = var46.bind(var42)(var2);
                        var46 = var26 & var46;
                        var43 = var43 << var24;
                        var43 = var43 | var46;
                        var43 = var25 + var43;
                        var47 = var40.length;
                        var49 = _closure1_slot4;
                        var46 = var43 >> var22;
                        var46 = var23 | var46;
                        var48 = var49[var46];
                        var46 = var43 >> var29;
                        var46 = var46 & var31;
                        var46 = var30 | var46;
                        var46 = var49[var46];
                        var48 = var48 + var46;
                        var46 = var43 >> var33;
                        var46 = var46 & var31;
                        var46 = var30 | var46;
                        var46 = var49[var46];
                        var48 = var48 + var46;
                        var46 = var31 & var43;
                        var46 = var30 | var46;
                        var46 = var49[var46];
                        var46 = var48 + var46;
                        var40[var47] = var46;
                        _fun6564_ip = 721;
                        continue _fun6564;
                    case 552:
                        var47 = var40.length;
                        var49 = _closure1_slot4;
                        var46 = var44 >> var29;
                        var46 = var28 | var46;
                        var48 = var49[var46];
                        var46 = var44 >> var33;
                        var46 = var46 & var31;
                        var46 = var30 | var46;
                        var46 = var49[var46];
                        var48 = var48 + var46;
                        var46 = var31 & var44;
                        var46 = var30 | var46;
                        var46 = var49[var46];
                        var46 = var48 + var46;
                        var40[var47] = var46;
                        var2 = var45;
                        var43 = var44;
                        _fun6564_ip = 721;
                        continue _fun6564;
                    case 621:
                        var47 = var40.length;
                        var49 = _closure1_slot4;
                        var46 = var44 >> var33;
                        var46 = var32 | var46;
                        var48 = var49[var46];
                        var46 = var31 & var44;
                        var46 = var30 | var46;
                        var46 = var49[var46];
                        var46 = var48 + var46;
                        var40[var47] = var46;
                        var2 = var45;
                        var43 = var44;
                        _fun6564_ip = 721;
                        continue _fun6564;
                    case 670:
                        var47 = var40.length;
                        var46 = _closure1_slot4;
                        var46 = var46[var44];
                        var40[var47] = var46;
                        var2 = var45;
                        var43 = var44;
                        _fun6564_ip = 721;
                        continue _fun6564;
                    case 695:
                        var47 = var40.length;
                        var46 = var42.charAt;
                        var46 = var46.bind(var42)(var45);
                        var40[var47] = var46;
                        var2 = var45;
                        var43 = var44;
                    case 721:
                        var41 = var2 + 1;
                        var2 = var42.length;
                        var4 = var43;
                        if (var41 < var2) {
                            _fun6564_ip = 287;
                            continue _fun6564
                        }
                    case 739:
                        var2 = var40.join;
                        var2 = var2.bind(var40)(var37);
                        var6 = var6 + var2;
                        var5 = var5 + var35;
                        var2 = var3.length;
                        var1 = var6;
                        if (var5 < var2) {
                            _fun6564_ip = 239;
                            continue _fun6564
                        }
                    case 772:
                        return var1;
                    case 774:
                        var1 = global;
                        var2 = var1.escape;
                        var1 = undefined;
                        var4 = var2.bind(var1)(var3);
                        var3 = var4.replace;
                        var2 = /%u[0-9a-f]{4}/gi;
                        var1 = function(arg0) { // Environment: var1
                            var2 = arg0;
                            var0 = global;
                            var3 = var0.parseInt;
                            var1 = var2.slice;
                            var0 = 2;
                            var2 = var1.bind(var2)(var0);
                            var1 = undefined;
                            var0 = 16;
                            var1 = var3.bind(var1)(var2, var0);
                            var0 = '%26%23';
                            var1 = var0 + var1;
                            var0 = '%3B';
                            var0 = var1 + var0;
                            return var0;
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    case 823:
                        return var0;
                }
            };
            var1.encode = var0;
            var0 = function arg0() {
                _fun6566: for (var _fun6566_ip = 0;;) switch (_fun6566_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = !var4;
                        if (var1) {
                            _fun6566_ip = 20;
                            continue _fun6566
                        }
                    case 9:
                        var2 = 'object';
                        var0 = typeof var4;
                        var1 = var2 !== var0;
                    case 20:
                        var0 = !var1;
                        if (var1) {
                            _fun6566_ip = 70;
                            continue _fun6566
                        }
                    case 26:
                        var1 = var4.constructor;
                        if (!var1) {
                            _fun6566_ip = 45;
                            continue _fun6566
                        }
                    case 34:
                        var2 = var4.constructor;
                        var1 = var2.isBuffer;
                    case 45:
                        if (!var1) {
                            _fun6566_ip = 64;
                            continue _fun6566
                        }
                    case 48:
                        var3 = var4.constructor;
                        var2 = var3.isBuffer;
                        var1 = var2.bind(var3)(var4);
                    case 64:
                        var1 = !var1;
                        var0 = !var1;
                    case 70:
                        return var0;
                }
            };
            var1.isBuffer = var0;
            var0 = function arg0() {
                var0 = global;
                var0 = var0.Object;
                var0 = var0.prototype;
                var2 = var0.toString;
                var1 = var2.call;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = '[object RegExp]';
                var0 = var0 === var1;
                return var0;
            };
            var1.isRegExp = var0;
            var0 = function arg0, arg1() {
                _fun6568: for (var _fun6568_ip = 0;;) switch (_fun6568_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var0 = _closure1_slot3;
                        var4 = undefined;
                        var0 = var0.bind(var4)(var6);
                        if (var0) {
                            _fun6568_ip = 30;
                            continue _fun6568
                        }
                    case 23:
                        var0 = var5.bind(var4)(var6);
                        return var0;
                    case 30:
                        var0 = new Array(0);
                        var1 = var6.length;
                        var3 = 0;
                        var1 = var3 < var1;
                        var2 = 1;
                        if (!var1) {
                            _fun6568_ip = 83;
                            continue _fun6568
                        }
                    case 51:
                        var7 = var0.push;
                        var1 = var6[var3];
                        var1 = var5.bind(var4)(var1);
                        var1 = var7.bind(var0)(var1);
                        var3 = var3 + var2;
                        var1 = var6.length;
                        if (var3 < var1) {
                            _fun6568_ip = 51;
                            continue _fun6568
                        }
                    case 83:
                        return var0;
                }
            };
            var1.maybeMap = var0;
            var0 = function arg0, arg1, arg2() {
                _fun6569: for (var _fun6569_ip = 0;;) switch (_fun6569_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = arg1;
                        var5 = arg2;
                        var _closure2_slot0 = var0;
                        var _closure2_slot1 = var2;
                        var _closure2_slot2 = var5;
                        if (var2) {
                            _fun6569_ip = 28;
                            continue _fun6569
                        }
                    case 26:
                        return var0;
                    case 28:
                        var6 = typeof var2;
                        var4 = 'object';
                        if (!(var4 !== var6)) {
                            _fun6569_ip = 50;
                            continue _fun6569
                        }
                    case 39:
                        var1 = 'function';
                        if (!(var1 === var6)) {
                            _fun6569_ip = 212;
                            continue _fun6569
                        }
                    case 50:
                        if (!var0) {
                            _fun6569_ip = 192;
                            continue _fun6569
                        }
                    case 56:
                        var1 = typeof var0;
                        if (!(var4 === var1)) {
                            _fun6569_ip = 192;
                            continue _fun6569
                        }
                    case 66:
                        var7 = _closure1_slot3;
                        var6 = undefined;
                        var7 = var7.bind(var6)(var0);
                        if (!var7) {
                            _fun6569_ip = 95;
                            continue _fun6569
                        }
                    case 83:
                        var8 = _closure1_slot3;
                        var8 = var8.bind(var6)(var2);
                        var7 = !var8;
                    case 95:
                        var8 = var0;
                        if (!var7) {
                            _fun6569_ip = 111;
                            continue _fun6569
                        }
                    case 101:
                        var7 = _closure1_slot5;
                        var8 = var7.bind(var6)(var0, var5);
                    case 111:
                        var7 = _closure1_slot3;
                        var7 = var7.bind(var6)(var0);
                        if (!var7) {
                            _fun6569_ip = 135;
                            continue _fun6569
                        }
                    case 123:
                        var1 = _closure1_slot3;
                        var1 = var1.bind(var6)(var2);
                        if (var1) {
                            _fun6569_ip = 172;
                            continue _fun6569
                        }
                    case 135:
                        var1 = global;
                        var6 = var1.Object;
                        var1 = var6.keys;
                        var7 = var1.bind(var6)(var2);
                        var6 = var7.reduce;
                        var1 = function(arg0, arg1) { // Environment: var3
                            _fun6571: for (var _fun6571_ip = 0;;) switch (_fun6571_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = arg1;
                                    var3 = _closure2_slot1;
                                    var6 = var3[var2];
                                    var5 = _closure1_slot2;
                                    var4 = var5.call;
                                    var4 = var4.bind(var5)(var0, var2);
                                    if (var4) {
                                        _fun6571_ip = 44;
                                        continue _fun6571
                                    }
                                case 38:
                                    var0[var2] = var6;
                                    _fun6571_ip = 69;
                                    continue _fun6571;
                                case 44:
                                    var5 = _closure1_slot6;
                                    var4 = var0[var2];
                                    var3 = _closure2_slot2;
                                    var1 = undefined;
                                    var1 = var5.bind(var1)(var4, var6, var3);
                                    var0[var2] = var1;
                                case 69:
                                    return var0;
                            }
                        };
                        var1 = var6.bind(var7)(var1, var8);
                        _fun6569_ip = 190;
                        continue _fun6569;
                    case 172:
                        var6 = var2.forEach;
                        var3 = function(arg0, arg1) { // Environment: var3
                            _fun6570: for (var _fun6570_ip = 0;;) switch (_fun6570_ip) {
                                case 0:
                                    var6 = arg0;
                                    var2 = arg1;
                                    var5 = _closure1_slot2;
                                    var4 = var5.call;
                                    var1 = _closure2_slot0;
                                    var4 = var4.bind(var5)(var1, var2);
                                    var1 = _closure2_slot0;
                                    if (var4) {
                                        _fun6570_ip = 44;
                                        continue _fun6570
                                    }
                                case 38:
                                    var1[var2] = var6;
                                    _fun6570_ip = 113;
                                    continue _fun6570;
                                case 44:
                                    var5 = var1[var2];
                                    if (!var5) {
                                        _fun6570_ip = 72;
                                        continue _fun6570
                                    }
                                case 51:
                                    var4 = 'object';
                                    var1 = typeof var5;
                                    if (!(var4 === var1)) {
                                        _fun6570_ip = 72;
                                        continue _fun6570
                                    }
                                case 62:
                                    if (!var6) {
                                        _fun6570_ip = 72;
                                        continue _fun6570
                                    }
                                case 65:
                                    var1 = typeof var6;
                                    if (!(var4 !== var1)) {
                                        _fun6570_ip = 88;
                                        continue _fun6570
                                    }
                                case 72:
                                    var4 = _closure2_slot0;
                                    var1 = var4.push;
                                    var1 = var1.bind(var4)(var6);
                                    _fun6570_ip = 113;
                                    continue _fun6570;
                                case 88:
                                    var1 = _closure2_slot0;
                                    var4 = _closure1_slot6;
                                    var3 = _closure2_slot2;
                                    var0 = undefined;
                                    var0 = var4.bind(var0)(var5, var6, var3);
                                    var1[var2] = var0;
                                case 113:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = var6.bind(var2)(var3);
                        var1 = var0;
                    case 190:
                        return var1;
                    case 192:
                        var3 = new Array(1);
                        var3[0] = var0;
                        var1 = var3.concat;
                        var1 = var1.bind(var3)(var2);
                        return var1;
                    case 212:
                        var6 = _closure1_slot3;
                        var1 = undefined;
                        var1 = var6.bind(var1)(var0);
                        if (var1) {
                            _fun6569_ip = 322;
                            continue _fun6569
                        }
                    case 229:
                        if (!var0) {
                            _fun6569_ip = 308;
                            continue _fun6569
                        }
                    case 232:
                        var1 = typeof var0;
                        if (!(var4 === var1)) {
                            _fun6569_ip = 308;
                            continue _fun6569
                        }
                    case 239:
                        var1 = var5;
                        if (!var1) {
                            _fun6569_ip = 263;
                            continue _fun6569
                        }
                    case 245:
                        var4 = var5.plainObjects;
                        if (var4) {
                            _fun6569_ip = 260;
                            continue _fun6569
                        }
                    case 254:
                        var4 = var5.allowPrototypes;
                    case 260:
                        var1 = var4;
                    case 263:
                        if (var1) {
                            _fun6569_ip = 297;
                            continue _fun6569
                        }
                    case 266:
                        var5 = _closure1_slot2;
                        var4 = var5.call;
                        var3 = global;
                        var3 = var3.Object;
                        var3 = var3.prototype;
                        var3 = var4.bind(var5)(var3, var2);
                        var1 = !var3;
                    case 297:
                        if (!var1) {
                            _fun6569_ip = 332;
                            continue _fun6569
                        }
                    case 300:
                        var1 = true;
                        var0[var2] = var1;
                        _fun6569_ip = 332;
                        continue _fun6569;
                    case 308:
                        var1 = new Array(2);
                        var1[0] = var0;
                        var1[1] = var2;
                        return var1;
                    case 322:
                        var1 = var0.push;
                        var1 = var1.bind(var0)(var2);
                    case 332:
                        return var0;
                }
            };
            var _closure1_slot6 = var0;
            var1.merge = var0;
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [511]);