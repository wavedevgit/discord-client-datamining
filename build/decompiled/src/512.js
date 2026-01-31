// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var2 = var0.Object;
    var2 = var2.prototype;
    var2 = var2.hasOwnProperty;
    var _closure1_slot2 = var2;
    var0 = var0.Array;
    var0 = var0.isArray;
    var _closure1_slot3 = var0;
    var2 = {
        'allowDots': false,
        'allowEmptyArrays': false,
        'allowPrototypes': false,
        'allowSparse': false,
        'arrayLimit': 20,
        'charset': 'utf-8',
        'charsetSentinel': false,
        'comma': false,
        'decodeDotInKeys': false,
        'decoder': null,
        'delimiter': '&',
        'depth': 5,
        'duplicates': 'combine',
        'ignoreQueryPrefix': false,
        'interpretNumericEntities': false,
        'parameterLimit': 1000,
        'parseArrays': true,
        'plainObjects': false,
        'strictDepth': false,
        'strictNullHandling': false,
        'throwOnLimitExceeded': false
    };
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.decode;
    var2.decoder = var3;
    var _closure1_slot4 = var2;
    var2 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /&#(\d+);/g;
        var0 = function(arg0, arg1) { // Environment: var0
            var0 = global;
            var2 = var0.String;
            var1 = var2.fromCharCode;
            var5 = var0.parseInt;
            var4 = undefined;
            var3 = arg1;
            var0 = 10;
            var0 = var5.bind(var4)(var3, var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var2;
    var2 = function arg0, arg1, arg2() {
        _fun6550: for (var _fun6550_ip = 0;;) switch (_fun6550_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                if (!var2) {
                    _fun6550_ip = 54;
                    continue _fun6550
                }
            case 9:
                var3 = 'string';
                var1 = typeof var2;
                if (!(var3 === var1)) {
                    _fun6550_ip = 54;
                    continue _fun6550
                }
            case 20:
                var1 = var0.comma;
                if (!var1) {
                    _fun6550_ip = 54;
                    continue _fun6550
                }
            case 29:
                var3 = var2.indexOf;
                var1 = ',';
                var4 = var3.bind(var2)(var1);
                var3 = -1;
                if (!(!(var4 > var3))) {
                    _fun6550_ip = 169;
                    continue _fun6550
                }
            case 54:
                var3 = var0.throwOnLimitExceeded;
                if (!var3) {
                    _fun6550_ip = 76;
                    continue _fun6550
                }
            case 63:
                var4 = var0.arrayLimit;
                var3 = arg2;
                if (!(!(var3 >= var4))) {
                    _fun6550_ip = 78;
                    continue _fun6550
                }
            case 76:
                return var2;
            case 78:
                var3 = global;
                var4 = var3.RangeError;
                var5 = var0.arrayLimit;
                var3 = 'Array limit exceeded. Only ';
                var6 = var3 + var5;
                var3 = var0.arrayLimit;
                var5 = 's';
                var0 = 1;
                if (!(var0 === var3)) {
                    _fun6550_ip = 123;
                    continue _fun6550
                }
            case 119:
                var5 = '';
            case 123:
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var0 = ' element';
                var0 = var6 + var0;
                var5 = var0 + var5;
                var0 = ' allowed in an array.';
                var7 = var5 + var0;
                var8 = var3;
                var0 = new var8[var4](var7, var6);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 169:
                var0 = var2.split;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var _closure1_slot6 = var2;
    var2 = function arg0, arg1, arg2, arg3() {
        _fun6551: for (var _fun6551_ip = 0;;) switch (_fun6551_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = arg2;
                if (var6) {
                    _fun6551_ip = 16;
                    continue _fun6551
                }
            case 12:
                var1 = undefined;
                return var1;
            case 16:
                var1 = var0.allowDots;
                var4 = var6;
                if (!var1) {
                    _fun6551_ip = 59;
                    continue _fun6551
                }
            case 28:
                var3 = var6.replace;
                var2 = /\.([^.[]+)/g;
                var1 = '[$1]';
                var4 = var3.bind(var6)(var2, var1);
            case 59:
                var12 = /(\[[^[\]]*])/g;
                var1 = var0.depth;
                var21 = 0;
                var1 = var1 > var21;
                if (!var1) {
                    _fun6551_ip = 113;
                    continue _fun6551
                }
            case 88:
                var3 = /(\[[^[\]]*])/;
                var2 = var3.exec;
                var1 = var2.bind(var3)(var4);
            case 113:
                var3 = var4;
                if (!var1) {
                    _fun6551_ip = 135;
                    continue _fun6551
                }
            case 119:
                var6 = var4.slice;
                var2 = var1.index;
                var3 = var6.bind(var4)(var21, var2);
            case 135:
                var20 = new Array(0);
                if (!var3) {
                    _fun6551_ip = 208;
                    continue _fun6551
                }
            case 142:
                var2 = var0.plainObjects;
                if (var2) {
                    _fun6551_ip = 198;
                    continue _fun6551
                }
            case 151:
                var7 = _closure1_slot2;
                var6 = var7.call;
                var2 = global;
                var2 = var2.Object;
                var2 = var2.prototype;
                var2 = var6.bind(var7)(var2, var3);
                if (!var2) {
                    _fun6551_ip = 198;
                    continue _fun6551
                }
            case 185:
                var2 = var0.allowPrototypes;
                if (var2) {
                    _fun6551_ip = 198;
                    continue _fun6551
                }
            case 194:
                var2 = undefined;
                return var2;
            case 198:
                var2 = var20.push;
                var2 = var2.bind(var20)(var3);
            case 208:
                var2 = var0.depth;
                if (!(var2 > var21)) {
                    _fun6551_ip = 413;
                    continue _fun6551
                }
            case 221:
                var2 = var12.exec;
                var13 = var2.bind(var12)(var4);
                var11 = null;
                var1 = var13;
                if (!(var11 !== var13)) {
                    _fun6551_ip = 413;
                    continue _fun6551
                }
            case 244:
                var2 = var0.depth;
                var2 = var21 < var2;
                var10 = 1;
                var8 = global;
                var7 = -1;
                var6 = var13;
                var3 = 0;
                var1 = var6;
                if (!var2) {
                    _fun6551_ip = 413;
                    continue _fun6551
                }
            case 282:
                var3 = var3 + var10;
                var2 = var0.plainObjects;
                if (var2) {
                    _fun6551_ip = 352;
                    continue _fun6551
                }
            case 295:
                var15 = _closure1_slot2;
                var14 = var15.call;
                var2 = var8.Object;
                var13 = var2.prototype;
                var16 = var6[var10];
                var2 = var16.slice;
                var2 = var2.bind(var16)(var10, var7);
                var2 = var14.bind(var15)(var13, var2);
                if (!var2) {
                    _fun6551_ip = 352;
                    continue _fun6551
                }
            case 339:
                var2 = var0.allowPrototypes;
                if (var2) {
                    _fun6551_ip = 352;
                    continue _fun6551
                }
            case 348:
                var2 = undefined;
                return var2;
            case 352:
                var13 = var20.push;
                var2 = var6[var10];
                var2 = var13.bind(var20)(var2);
                var2 = var0.depth;
                var1 = var6;
                if (!(var2 > var21)) {
                    _fun6551_ip = 413;
                    continue _fun6551
                }
            case 379:
                var2 = var12.exec;
                var13 = var2.bind(var12)(var4);
                var1 = var13;
                if (!(var11 !== var13)) {
                    _fun6551_ip = 413;
                    continue _fun6551
                }
            case 397:
                var2 = var0.depth;
                var6 = var13;
                var1 = var6;
                if (var3 < var2) {
                    _fun6551_ip = 282;
                    continue _fun6551
                }
            case 413:
                if (!var1) {
                    _fun6551_ip = 472;
                    continue _fun6551
                }
            case 416:
                var3 = var0.strictDepth;
                var2 = true;
                if (!(var2 !== var3)) {
                    _fun6551_ip = 1082;
                    continue _fun6551
                }
            case 431:
                var2 = var20.push;
                var3 = var4.slice;
                var1 = var1.index;
                var3 = var3.bind(var4)(var1);
                var1 = '[';
                var3 = var1 + var3;
                var1 = ']';
                var1 = var3 + var1;
                var1 = var2.bind(var20)(var1);
            case 472:
                var1 = var20.length;
                var1 = var1 > var21;
                var4 = 0;
                if (!var1) {
                    _fun6551_ip = 589;
                    continue _fun6551
                }
            case 486:
                var2 = var20.length;
                var1 = 1;
                var1 = var2 - var1;
                var2 = var20[var1];
                var1 = '[]';
                var4 = 0;
                if (!(var1 === var2)) {
                    _fun6551_ip = 589;
                    continue _fun6551
                }
            case 514:
                var2 = var20.slice;
                var1 = -1;
                var3 = var2.bind(var20)(var21, var1);
                var2 = var3.join;
                var1 = '';
                var2 = var2.bind(var3)(var1);
                var1 = global;
                var3 = var1.Array;
                var1 = var3.isArray;
                var3 = var1.bind(var3)(var5);
                var1 = 0;
                if (!var3) {
                    _fun6551_ip = 586;
                    continue _fun6551
                }
            case 568:
                var3 = var5[var2];
                var1 = 0;
                if (!var3) {
                    _fun6551_ip = 586;
                    continue _fun6551
                }
            case 577:
                var2 = var5[var2];
                var1 = var2.length;
            case 586:
                var4 = var1;
            case 589:
                var2 = arg3;
                var1 = var5;
                if (var2) {
                    _fun6551_ip = 614;
                    continue _fun6551
                }
            case 598:
                var3 = _closure1_slot6;
                var2 = undefined;
                var1 = var3.bind(var2)(var5, var0, var4);
            case 614:
                var2 = var20.length;
                var19 = 1;
                var18 = var2 - var19;
                var17 = undefined;
                var15 = null;
                var14 = '';
                var13 = '__proto__';
                var12 = global;
                var11 = 10;
                var10 = '.';
                var9 = -1;
                var8 = ']';
                var7 = '[';
                var6 = '[]';
                var5 = var1;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                var1 = var5;
                if (!(var18 >= var21)) {
                    _fun6551_ip = 1080;
                    continue _fun6551
                }
            case 689:
                var30 = var20[var18];
                if (!(var6 === var30)) {
                    _fun6551_ip = 709;
                    continue _fun6551
                }
            case 697:
                var22 = var0.parseArrays;
                if (var22) {
                    _fun6551_ip = 978;
                    continue _fun6551
                }
            case 709:
                var22 = var0.plainObjects;
                if (var22) {
                    _fun6551_ip = 722;
                    continue _fun6551
                }
            case 718:
                var29 = {};
                _fun6551_ip = 725;
                continue _fun6551;
            case 722:
                var29 = Object.create(var15);
            case 725:
                var22 = var30.charAt;
                var22 = var22.bind(var30)(var21);
                var28 = var30;
                if (!(var7 === var22)) {
                    _fun6551_ip = 781;
                    continue _fun6551
                }
            case 743:
                var23 = var30.charAt;
                var22 = var30.length;
                var22 = var22 - var19;
                var22 = var23.bind(var30)(var22);
                var28 = var30;
                if (!(var8 === var22)) {
                    _fun6551_ip = 781;
                    continue _fun6551
                }
            case 770:
                var22 = var30.slice;
                var28 = var22.bind(var30)(var19, var9);
            case 781:
                var22 = var0.decodeDotInKeys;
                var23 = var28;
                if (!var22) {
                    _fun6551_ip = 818;
                    continue _fun6551
                }
            case 793:
                var24 = var28.replace;
                var22 = /%2E/g;
                var23 = var24.bind(var28)(var22, var10);
            case 818:
                var22 = var12.parseInt;
                var26 = var22.bind(var17)(var23, var11);
                var22 = var0.parseArrays;
                var27 = var23;
                if (var22) {
                    _fun6551_ip = 866;
                    continue _fun6551
                }
            case 842:
                if (!(var14 === var27)) {
                    _fun6551_ip = 866;
                    continue _fun6551
                }
            case 846:
                var22 = {};
                var22[0] = var5;
                var25 = var28;
                var24 = var27;
                var23 = var26;
                _fun6551_ip = 1055;
                continue _fun6551;
            case 866:
                var31 = var12.isNaN;
                var31 = var31.bind(var17)(var26);
                if (var31) {
                    _fun6551_ip = 944;
                    continue _fun6551
                }
            case 880:
                if (!(var30 !== var27)) {
                    _fun6551_ip = 944;
                    continue _fun6551
                }
            case 884:
                var30 = var12.String;
                var30 = var30.bind(var17)(var26);
                if (!(var30 === var27)) {
                    _fun6551_ip = 944;
                    continue _fun6551
                }
            case 899:
                if (!(var26 >= var21)) {
                    _fun6551_ip = 944;
                    continue _fun6551
                }
            case 903:
                var30 = var0.parseArrays;
                if (!var30) {
                    _fun6551_ip = 944;
                    continue _fun6551
                }
            case 912:
                var30 = var0.arrayLimit;
                if (!(var26 <= var30)) {
                    _fun6551_ip = 944;
                    continue _fun6551
                }
            case 922:
                var30 = new Array(0);
                var30[var26] = var5;
                var22 = var30;
                var25 = var28;
                var24 = var27;
                var23 = var26;
                _fun6551_ip = 1055;
                continue _fun6551;
            case 944:
                var22 = var29;
                var25 = var28;
                var24 = var27;
                var23 = var26;
                if (!(var13 !== var27)) {
                    _fun6551_ip = 1055;
                    continue _fun6551
                }
            case 960:
                var29[var27] = var5;
                var22 = var29;
                var25 = var28;
                var24 = var27;
                var23 = var26;
                _fun6551_ip = 1055;
                continue _fun6551;
            case 978:
                var26 = var0.allowEmptyArrays;
                if (!var26) {
                    _fun6551_ip = 1004;
                    continue _fun6551
                }
            case 987:
                if (!(var14 !== var5)) {
                    _fun6551_ip = 1039;
                    continue _fun6551
                }
            case 991:
                var26 = var0.strictNullHandling;
                if (!var26) {
                    _fun6551_ip = 1004;
                    continue _fun6551
                }
            case 1000:
                if (!(var15 !== var5)) {
                    _fun6551_ip = 1039;
                    continue _fun6551
                }
            case 1004:
                var27 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var21];
                var28 = var27.bind(var17)(var26);
                var27 = var28.combine;
                var26 = new Array(0);
                var26 = var27.bind(var28)(var26, var5);
                _fun6551_ip = 1043;
                continue _fun6551;
            case 1039:
                var26 = new Array(0);
            case 1043:
                var22 = var26;
                var25 = var4;
                var24 = var3;
                var23 = var2;
            case 1055:
                var18 = var18 - 1;
                var5 = var22;
                var4 = var25;
                var3 = var24;
                var2 = var23;
                var1 = var5;
                if (var18 >= var21) {
                    _fun6551_ip = 689;
                    continue _fun6551
                }
            case 1080:
                return var1;
            case 1082:
                var1 = global;
                var2 = var1.RangeError;
                var1 = var0.depth;
                var0 = 'Input depth exceeded depth option of ';
                var3 = var0 + var1;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var0 = ' and strictDepth is true';
                var34 = var3 + var0;
                var35 = var1;
                var0 = new var35[var2](var34, var33);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot7 = var2;
    var2 = function(arg0, arg1) { // Environment: var1
        _fun6552: for (var _fun6552_ip = 0;;) switch (_fun6552_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                if (var3) {
                    _fun6552_ip = 21;
                    continue _fun6552
                }
            case 9:
                var0 = _closure1_slot4;
                _fun6552_ip = 1092;
                continue _fun6552;
            case 21:
                var1 = var3.allowEmptyArrays;
                var10 = undefined;
                if (!(var10 !== var1)) {
                    _fun6552_ip = 53;
                    continue _fun6552
                }
            case 33:
                var1 = var3.allowEmptyArrays;
                var2 = 'boolean';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun6552_ip = 1522;
                    continue _fun6552
                }
            case 53:
                var1 = var3.decodeDotInKeys;
                if (!(var10 !== var1)) {
                    _fun6552_ip = 83;
                    continue _fun6552
                }
            case 63:
                var1 = var3.decodeDotInKeys;
                var2 = 'boolean';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun6552_ip = 1486;
                    continue _fun6552
                }
            case 83:
                var2 = var3.decoder;
                var1 = null;
                if (!(var1 !== var2)) {
                    _fun6552_ip = 125;
                    continue _fun6552
                }
            case 95:
                var1 = var3.decoder;
                if (!(var10 !== var1)) {
                    _fun6552_ip = 125;
                    continue _fun6552
                }
            case 105:
                var1 = var3.decoder;
                var2 = 'function';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun6552_ip = 1450;
                    continue _fun6552
                }
            case 125:
                var1 = var3.charset;
                if (!(var10 !== var1)) {
                    _fun6552_ip = 170;
                    continue _fun6552
                }
            case 135:
                var2 = var3.charset;
                var1 = 'utf-8';
                if (!(var1 !== var2)) {
                    _fun6552_ip = 170;
                    continue _fun6552
                }
            case 151:
                var2 = var3.charset;
                var1 = 'iso-8859-1';
                if (!(var1 === var2)) {
                    _fun6552_ip = 1414;
                    continue _fun6552
                }
            case 170:
                var1 = var3.throwOnLimitExceeded;
                if (!(var10 !== var1)) {
                    _fun6552_ip = 200;
                    continue _fun6552
                }
            case 180:
                var1 = var3.throwOnLimitExceeded;
                var2 = 'boolean';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun6552_ip = 1378;
                    continue _fun6552
                }
            case 200:
                var1 = var3.charset;
                if (!(var10 !== var1)) {
                    _fun6552_ip = 218;
                    continue _fun6552
                }
            case 210:
                var7 = var3.charset;
                _fun6552_ip = 231;
                continue _fun6552;
            case 218:
                var1 = _closure1_slot4;
                var7 = var1.charset;
            case 231:
                var1 = var3.duplicates;
                if (!(var10 !== var1)) {
                    _fun6552_ip = 249;
                    continue _fun6552
                }
            case 241:
                var2 = var3.duplicates;
                _fun6552_ip = 262;
                continue _fun6552;
            case 249:
                var1 = _closure1_slot4;
                var2 = var1.duplicates;
            case 262:
                var1 = 'combine';
                if (!(var1 !== var2)) {
                    _fun6552_ip = 289;
                    continue _fun6552
                }
            case 270:
                var1 = 'first';
                if (!(var1 !== var2)) {
                    _fun6552_ip = 289;
                    continue _fun6552
                }
            case 278:
                var1 = 'last';
                if (!(var1 === var2)) {
                    _fun6552_ip = 1342;
                    continue _fun6552
                }
            case 289:
                var1 = {};
                var5 = var3.allowDots;
                if (!(var10 !== var5)) {
                    _fun6552_ip = 315;
                    continue _fun6552
                }
            case 301:
                var5 = var3.allowDots;
                var5 = !var5;
                var5 = !var5;
                _fun6552_ip = 346;
                continue _fun6552;
            case 315:
                var8 = var3.decodeDotInKeys;
                var6 = true;
                var6 = var6 === var8;
                if (var6) {
                    _fun6552_ip = 343;
                    continue _fun6552
                }
            case 330:
                var8 = _closure1_slot4;
                var6 = var8.allowDots;
            case 343:
                var5 = var6;
            case 346:
                var1.allowDots = var5;
                var6 = var3.allowEmptyArrays;
                var5 = 'boolean';
                var6 = typeof var6;
                if (!(var5 !== var6)) {
                    _fun6552_ip = 383;
                    continue _fun6552
                }
            case 368:
                var6 = _closure1_slot4;
                var6 = var6.allowEmptyArrays;
                _fun6552_ip = 395;
                continue _fun6552;
            case 383:
                var8 = var3.allowEmptyArrays;
                var8 = !var8;
                var6 = !var8;
            case 395:
                var1.allowEmptyArrays = var6;
                var6 = var3.allowPrototypes;
                var6 = typeof var6;
                if (!(var5 !== var6)) {
                    _fun6552_ip = 428;
                    continue _fun6552
                }
            case 413:
                var6 = _closure1_slot4;
                var6 = var6.allowPrototypes;
                _fun6552_ip = 434;
                continue _fun6552;
            case 428:
                var6 = var3.allowPrototypes;
            case 434:
                var1.allowPrototypes = var6;
                var6 = var3.allowSparse;
                var6 = typeof var6;
                if (!(var5 !== var6)) {
                    _fun6552_ip = 467;
                    continue _fun6552
                }
            case 452:
                var6 = _closure1_slot4;
                var6 = var6.allowSparse;
                _fun6552_ip = 473;
                continue _fun6552;
            case 467:
                var6 = var3.allowSparse;
            case 473:
                var1.allowSparse = var6;
                var8 = var3.arrayLimit;
                var6 = 'number';
                var8 = typeof var8;
                if (!(var6 !== var8)) {
                    _fun6552_ip = 510;
                    continue _fun6552
                }
            case 495:
                var8 = _closure1_slot4;
                var8 = var8.arrayLimit;
                _fun6552_ip = 516;
                continue _fun6552;
            case 510:
                var8 = var3.arrayLimit;
            case 516:
                var1.arrayLimit = var8;
                var1.charset = var7;
                var7 = var3.charsetSentinel;
                var7 = typeof var7;
                if (!(var5 !== var7)) {
                    _fun6552_ip = 554;
                    continue _fun6552
                }
            case 539:
                var7 = _closure1_slot4;
                var7 = var7.charsetSentinel;
                _fun6552_ip = 560;
                continue _fun6552;
            case 554:
                var7 = var3.charsetSentinel;
            case 560:
                var1.charsetSentinel = var7;
                var7 = var3.comma;
                var7 = typeof var7;
                if (!(var5 !== var7)) {
                    _fun6552_ip = 593;
                    continue _fun6552
                }
            case 578:
                var7 = _closure1_slot4;
                var7 = var7.comma;
                _fun6552_ip = 599;
                continue _fun6552;
            case 593:
                var7 = var3.comma;
            case 599:
                var1.comma = var7;
                var7 = var3.decodeDotInKeys;
                var7 = typeof var7;
                if (!(var5 !== var7)) {
                    _fun6552_ip = 632;
                    continue _fun6552
                }
            case 617:
                var7 = _closure1_slot4;
                var7 = var7.decodeDotInKeys;
                _fun6552_ip = 638;
                continue _fun6552;
            case 632:
                var7 = var3.decodeDotInKeys;
            case 638:
                var1.decodeDotInKeys = var7;
                var7 = var3.decoder;
                var8 = 'function';
                var7 = typeof var7;
                if (!(var8 !== var7)) {
                    _fun6552_ip = 675;
                    continue _fun6552
                }
            case 660:
                var7 = _closure1_slot4;
                var7 = var7.decoder;
                _fun6552_ip = 681;
                continue _fun6552;
            case 675:
                var7 = var3.decoder;
            case 681:
                var1.decoder = var7;
                var7 = var3.delimiter;
                var8 = 'string';
                var7 = typeof var7;
                if (!(var8 !== var7)) {
                    _fun6552_ip = 757;
                    continue _fun6552
                }
            case 703:
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var8 = 0;
                var8 = var11[var8];
                var10 = var9.bind(var10)(var8);
                var9 = var10.isRegExp;
                var8 = var3.delimiter;
                var8 = var9.bind(var10)(var8);
                if (var8) {
                    _fun6552_ip = 757;
                    continue _fun6552
                }
            case 745:
                var7 = _closure1_slot4;
                var7 = var7.delimiter;
                _fun6552_ip = 763;
                continue _fun6552;
            case 757:
                var7 = var3.delimiter;
            case 763:
                var1.delimiter = var7;
                var7 = var3.depth;
                var7 = typeof var7;
                if (!(var6 !== var7)) {
                    _fun6552_ip = 808;
                    continue _fun6552
                }
            case 781:
                var8 = var3.depth;
                var7 = false;
                if (!(var7 !== var8)) {
                    _fun6552_ip = 808;
                    continue _fun6552
                }
            case 793:
                var7 = _closure1_slot4;
                var7 = var7.depth;
                _fun6552_ip = 817;
                continue _fun6552;
            case 808:
                var8 = var3.depth;
                var7 = var8 - 0;
            case 817:
                var1.depth = var7;
                var1.duplicates = var2;
                var7 = var3.ignoreQueryPrefix;
                var2 = true;
                var2 = var2 === var7;
                var1.ignoreQueryPrefix = var2;
                var2 = var3.interpretNumericEntities;
                var2 = typeof var2;
                if (!(var5 !== var2)) {
                    _fun6552_ip = 872;
                    continue _fun6552
                }
            case 857:
                var2 = _closure1_slot4;
                var2 = var2.interpretNumericEntities;
                _fun6552_ip = 878;
                continue _fun6552;
            case 872:
                var2 = var3.interpretNumericEntities;
            case 878:
                var1.interpretNumericEntities = var2;
                var2 = var3.parameterLimit;
                var2 = typeof var2;
                if (!(var6 !== var2)) {
                    _fun6552_ip = 911;
                    continue _fun6552
                }
            case 896:
                var2 = _closure1_slot4;
                var2 = var2.parameterLimit;
                _fun6552_ip = 917;
                continue _fun6552;
            case 911:
                var2 = var3.parameterLimit;
            case 917:
                var1.parameterLimit = var2;
                var6 = var3.parseArrays;
                var2 = false;
                var2 = var2 !== var6;
                var1.parseArrays = var2;
                var2 = var3.plainObjects;
                var2 = typeof var2;
                if (!(var5 !== var2)) {
                    _fun6552_ip = 967;
                    continue _fun6552
                }
            case 952:
                var2 = _closure1_slot4;
                var2 = var2.plainObjects;
                _fun6552_ip = 973;
                continue _fun6552;
            case 967:
                var2 = var3.plainObjects;
            case 973:
                var1.plainObjects = var2;
                var2 = var3.strictDepth;
                var2 = typeof var2;
                if (!(var5 !== var2)) {
                    _fun6552_ip = 1006;
                    continue _fun6552
                }
            case 991:
                var2 = _closure1_slot4;
                var2 = var2.strictDepth;
                _fun6552_ip = 1018;
                continue _fun6552;
            case 1006:
                var6 = var3.strictDepth;
                var6 = !var6;
                var2 = !var6;
            case 1018:
                var1.strictDepth = var2;
                var2 = var3.strictNullHandling;
                var2 = typeof var2;
                if (!(var5 !== var2)) {
                    _fun6552_ip = 1051;
                    continue _fun6552
                }
            case 1036:
                var2 = _closure1_slot4;
                var2 = var2.strictNullHandling;
                _fun6552_ip = 1057;
                continue _fun6552;
            case 1051:
                var2 = var3.strictNullHandling;
            case 1057:
                var1.strictNullHandling = var2;
                var2 = var3.throwOnLimitExceeded;
                var2 = typeof var2;
                var2 = var5 === var2;
                if (!var2) {
                    _fun6552_ip = 1084;
                    continue _fun6552
                }
            case 1078:
                var2 = var3.throwOnLimitExceeded;
            case 1084:
                var1.throwOnLimitExceeded = var2;
                var0 = var1;
            case 1092:
                var1 = '';
                if (!(var1 !== var4)) {
                    _fun6552_ip = 1322;
                    continue _fun6552
                }
            case 1103:
                var1 = null;
                if (!(var1 != var4)) {
                    _fun6552_ip = 1322;
                    continue _fun6552
                }
            case 1112:
                var3 = 'string';
                var2 = typeof var4;
                var10 = var3 === var2;
                var9 = var4;
                if (!var10) {
                    _fun6552_ip = 1144;
                    continue _fun6552
                }
            case 1129:
                var3 = function arg0, arg1() {
                    _fun6553: for (var _fun6553_ip = 0;;) switch (_fun6553_ip) {
                        case 0:
                            var5 = arg0;
                            var28 = arg1;
                            var _closure3_slot0 = var28;
                            var27 = null;
                            var0 = Object.create(var27);
                            var1 = var28.ignoreQueryPrefix;
                            var4 = var5;
                            if (!var1) {
                                _fun6553_ip = 58;
                                continue _fun6553
                            }
                        case 29:
                            var3 = var5.replace;
                            var2 = /^\?/;
                            var1 = '';
                            var4 = var3.bind(var5)(var2, var1);
                        case 58:
                            var3 = var4.replace;
                            var2 = /%5B/gi;
                            var1 = '[';
                            var4 = var3.bind(var4)(var2, var1);
                            var3 = var4.replace;
                            var2 = /%5D/gi;
                            var1 = ']';
                            var5 = var3.bind(var4)(var2, var1);
                            var3 = var28.parameterLimit;
                            var26 = undefined;
                            var2 = inf;
                            var1 = undefined;
                            if (!(var3 !== var2)) {
                                _fun6553_ip = 146;
                                continue _fun6553
                            }
                        case 140:
                            var1 = var28.parameterLimit;
                        case 146:
                            var4 = var5.split;
                            var3 = var28.delimiter;
                            var6 = var28.throwOnLimitExceeded;
                            var2 = var1;
                            if (!var6) {
                                _fun6553_ip = 176;
                                continue _fun6553
                            }
                        case 169:
                            var6 = 1;
                            var2 = var1 + var6;
                        case 176:
                            var25 = var4.bind(var5)(var3, var2);
                            var2 = var28.throwOnLimitExceeded;
                            if (!var2) {
                                _fun6553_ip = 203;
                                continue _fun6553
                            }
                        case 191:
                            var2 = var25.length;
                            if (!(!(var2 > var1))) {
                                _fun6553_ip = 950;
                                continue _fun6553
                            }
                        case 203:
                            var12 = var28.charset;
                            var _closure3_slot1 = var12;
                            var2 = var28.charsetSentinel;
                            var24 = -1;
                            var23 = var24;
                            var22 = var12;
                            if (!var2) {
                                _fun6553_ip = 384;
                                continue _fun6553
                            }
                        case 237:
                            var2 = var25.length;
                            var11 = 0;
                            var2 = var11 < var2;
                            var10 = 'utf-8';
                            var9 = 'iso-8859-1';
                            var8 = 'utf8=%26%2310003%3B';
                            var7 = 'utf8=%E2%9C%93';
                            var6 = 'utf8=';
                            var5 = 0;
                            var4 = var24;
                            var3 = var12;
                            var23 = var4;
                            var22 = var3;
                            if (!var2) {
                                _fun6553_ip = 384;
                                continue _fun6553
                            }
                        case 295:
                            var12 = var25[var5];
                            var2 = var12.indexOf;
                            var13 = var2.bind(var12)(var6);
                            var2 = var5;
                            var12 = var3;
                            if (!(var11 === var13)) {
                                _fun6553_ip = 363;
                                continue _fun6553
                            }
                        case 320:
                            var13 = var25[var5];
                            if (!(var7 !== var13)) {
                                _fun6553_ip = 345;
                                continue _fun6553
                            }
                        case 328:
                            var13 = var25[var5];
                            if (!(var8 === var13)) {
                                _fun6553_ip = 352;
                                continue _fun6553
                            }
                        case 336:
                            _closure3_slot1 = var9;
                            var3 = var9;
                            _fun6553_ip = 352;
                            continue _fun6553;
                        case 345:
                            _closure3_slot1 = var10;
                            var3 = var10;
                        case 352:
                            var2 = var25.length;
                            var12 = var3;
                            var4 = var5;
                        case 363:
                            var5 = var2 + 1;
                            var2 = var25.length;
                            var3 = var12;
                            var23 = var4;
                            var22 = var3;
                            if (var5 < var2) {
                                _fun6553_ip = 295;
                                continue _fun6553
                            }
                        case 384:
                            var2 = var25.length;
                            var21 = 0;
                            var2 = var21 < var2;
                            var19 = 'last';
                            var18 = 'combine';
                            var17 = '[]=';
                            var16 = global;
                            var3 = 'iso-8859-1';
                            var15 = var3 === var22;
                            var14 = 'key';
                            var13 = '';
                            var12 = 1;
                            var11 = '=';
                            var10 = ']=';
                            var9 = 0;
                            var8 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var4 = undefined;
                            var3 = undefined;
                            if (!var2) {
                                _fun6553_ip = 948;
                                continue _fun6553
                            }
                        case 465:
                            if (!(var9 !== var23)) {
                                _fun6553_ip = 933;
                                continue _fun6553
                            }
                        case 472:
                            var32 = var25[var9];
                            var2 = var32.indexOf;
                            var31 = var2.bind(var32)(var10);
                            if (!(var24 !== var31)) {
                                _fun6553_ip = 497;
                                continue _fun6553
                            }
                        case 491:
                            var30 = var31 + var12;
                            _fun6553_ip = 508;
                            continue _fun6553;
                        case 497:
                            var2 = var32.indexOf;
                            var30 = var2.bind(var32)(var11);
                        case 508:
                            if (!(var24 !== var30)) {
                                _fun6553_ip = 646;
                                continue _fun6553
                            }
                        case 515:
                            var34 = var28.decoder;
                            var2 = var32.slice;
                            var42 = var2.bind(var32)(var21, var30);
                            var2 = _closure1_slot4;
                            var41 = var2.decoder;
                            var43 = var28;
                            var40 = var22;
                            var39 = var14;
                            var33 = var43[var34](var42, var41, var40, var39, var38);
                            var34 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var21];
                            var36 = var34.bind(var26)(var2);
                            var35 = var36.maybeMap;
                            var37 = _closure1_slot6;
                            var34 = var32.slice;
                            var2 = var30 + var12;
                            var34 = var34.bind(var32)(var2);
                            var38 = _closure1_slot3;
                            var2 = var0[var33];
                            var38 = var38.bind(var26)(var2);
                            var2 = 0;
                            if (!var38) {
                                _fun6553_ip = 623;
                                continue _fun6553
                            }
                        case 614:
                            var38 = var0[var33];
                            var2 = var38.length;
                        case 623:
                            var34 = var37.bind(var26)(var34, var28, var2);
                            var2 = function(arg0) { // Environment: var29
                                var5 = _closure3_slot0;
                                var4 = var5.decoder;
                                var1 = _closure1_slot4;
                                var8 = var1.decoder;
                                var7 = _closure3_slot1;
                                var9 = arg0;
                                var6 = 'value';
                                var10 = var5;
                                var0 = var10[var4](var9, var8, var7, var6, var5);
                                return var0;
                            };
                            var35 = var35.bind(var36)(var34, var2);
                            var34 = var33;
                            _fun6553_ip = 698;
                            continue _fun6553;
                        case 646:
                            var33 = var28.decoder;
                            var2 = _closure1_slot4;
                            var41 = var2.decoder;
                            var43 = var28;
                            var42 = var32;
                            var40 = var22;
                            var39 = var14;
                            var33 = var43[var33](var42, var41, var40, var39, var38);
                            var36 = var28.strictNullHandling;
                            var2 = var13;
                            if (!var36) {
                                _fun6553_ip = 692;
                                continue _fun6553
                            }
                        case 690:
                            var2 = null;
                        case 692:
                            var35 = var2;
                            var34 = var33;
                        case 698:
                            var2 = var35;
                            if (!var35) {
                                _fun6553_ip = 710;
                                continue _fun6553
                            }
                        case 704:
                            var2 = var28.interpretNumericEntities;
                        case 710:
                            if (!var2) {
                                _fun6553_ip = 716;
                                continue _fun6553
                            }
                        case 713:
                            var2 = var15;
                        case 716:
                            var36 = var35;
                            if (!var2) {
                                _fun6553_ip = 742;
                                continue _fun6553
                            }
                        case 722:
                            var33 = _closure1_slot5;
                            var2 = var16.String;
                            var2 = var2.bind(var26)(var35);
                            var36 = var33.bind(var26)(var2);
                        case 742:
                            var2 = var32.indexOf;
                            var2 = var2.bind(var32)(var17);
                            var33 = var36;
                            if (!(var2 > var24)) {
                                _fun6553_ip = 789;
                                continue _fun6553
                            }
                        case 760:
                            var2 = _closure1_slot3;
                            var35 = var2.bind(var26)(var36);
                            var2 = var36;
                            if (!var35) {
                                _fun6553_ip = 786;
                                continue _fun6553
                            }
                        case 775:
                            var35 = new Array(1);
                            var35[0] = var36;
                            var2 = var35;
                        case 786:
                            var33 = var2;
                        case 789:
                            var35 = _closure1_slot2;
                            var2 = var35.call;
                            var2 = var2.bind(var35)(var0, var34);
                            if (!var2) {
                                _fun6553_ip = 817;
                                continue _fun6553
                            }
                        case 807:
                            var35 = var28.duplicates;
                            if (!(var18 !== var35)) {
                                _fun6553_ip = 878;
                                continue _fun6553
                            }
                        case 817:
                            var35 = var2;
                            if (!var2) {
                                _fun6553_ip = 833;
                                continue _fun6553
                            }
                        case 823:
                            var36 = var28.duplicates;
                            var35 = var19 !== var36;
                        case 833:
                            var8 = var34;
                            var7 = var33;
                            var6 = var32;
                            var5 = var31;
                            var4 = var30;
                            var3 = var2;
                            if (var35) {
                                _fun6553_ip = 933;
                                continue _fun6553
                            }
                        case 854:
                            var0[var34] = var33;
                            var8 = var34;
                            var7 = var33;
                            var6 = var32;
                            var5 = var31;
                            var4 = var30;
                            var3 = var2;
                            _fun6553_ip = 933;
                            continue _fun6553;
                        case 878:
                            var36 = _closure1_slot0;
                            var35 = _closure1_slot1;
                            var35 = var35[var21];
                            var37 = var36.bind(var26)(var35);
                            var36 = var37.combine;
                            var35 = var0[var34];
                            var35 = var36.bind(var37)(var35, var33);
                            var0[var34] = var35;
                            var8 = var34;
                            var7 = var33;
                            var6 = var32;
                            var5 = var31;
                            var4 = var30;
                            var3 = var2;
                        case 933:
                            var9 = var9 + 1;
                            var2 = var25.length;
                            if (var9 < var2) {
                                _fun6553_ip = 465;
                                continue _fun6553
                            }
                        case 948:
                            return var0;
                        case 950:
                            var0 = global;
                            var2 = var0.RangeError;
                            var0 = 'Parameter limit exceeded. Only ';
                            var4 = var0 + var1;
                            var3 = 's';
                            var0 = 1;
                            if (!(var0 === var1)) {
                                _fun6553_ip = 983;
                                continue _fun6553
                            }
                        case 979:
                            var3 = '';
                        case 983:
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var0 = ' parameter';
                            var0 = var4 + var0;
                            var3 = var0 + var3;
                            var0 = ' allowed.';
                            var42 = var3 + var0;
                            var43 = var1;
                            var0 = new var43[var2](var42, var41);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var2 = undefined;
                var9 = var3.bind(var2)(var4, var0);
            case 1144:
                var2 = var0.plainObjects;
                if (var2) {
                    _fun6552_ip = 1157;
                    continue _fun6552
                }
            case 1153:
                var4 = {};
                _fun6552_ip = 1160;
                continue _fun6552;
            case 1157:
                var4 = Object.create(var1);
            case 1160:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var8 = var1.bind(var2)(var9);
                var1 = var8.length;
                var6 = 0;
                var1 = var6 < var1;
                var5 = undefined;
                var7 = var4;
                var3 = 0;
                var4 = var7;
                if (!var1) {
                    _fun6552_ip = 1277;
                    continue _fun6552
                }
            case 1205:
                var12 = var8[var3];
                var11 = _closure1_slot7;
                var15 = var9[var12];
                var17 = undefined;
                var16 = var12;
                var14 = var0;
                var13 = var10;
                var12 = var17[var11](var16, var15, var14, var13, var12);
                var11 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var11 = var11.bind(var5)(var1);
                var1 = var11.merge;
                var7 = var1.bind(var11)(var7, var12, var0);
                var3 = var3 + 1;
                var1 = var8.length;
                var4 = var7;
                if (var3 < var1) {
                    _fun6552_ip = 1205;
                    continue _fun6552
                }
            case 1277:
                var7 = var0.allowSparse;
                var3 = true;
                var1 = var4;
                if (!(var3 !== var7)) {
                    _fun6552_ip = 1320;
                    continue _fun6552
                }
            case 1292:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.compact;
                var1 = var2.bind(var3)(var4);
            case 1320:
                return var1;
            case 1322:
                var0 = var0.plainObjects;
                if (var0) {
                    _fun6552_ip = 1335;
                    continue _fun6552
                }
            case 1331:
                var0 = {};
                _fun6552_ip = 1340;
                continue _fun6552;
            case 1335:
                var1 = null;
                var0 = Object.create(var1);
            case 1340:
                return var0;
            case 1342:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = 'The duplicates option must be either combine, first, or last';
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1378:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = '`throwOnLimitExceeded` option must be a boolean';
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1414:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = 'The charset option must be either utf-8, iso-8859-1, or undefined';
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1450:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = 'Decoder has to be a function.';
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1486:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = '`decodeDotInKeys` option can only be `true` or `false`, when provided';
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1522:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = '`allowEmptyArrays` option can only be `true` or `false`, when provided';
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [513]);