// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun27032: for (var _fun27032_ip = 0;;) switch (_fun27032_ip) {
        case 0:
            var1 = module;
            var5 = this;
            var2 = function() { // Original name: t, environment: var0
                _fun27033: for (var _fun27033_ip = 0;;) switch (_fun27033_ip) {
                    case 0:
                        var9 = undefined;
                        var3 = undefined;
                        var4 = undefined;
                        var6 = undefined;
                        var7 = undefined;
                        var5 = undefined;
                        var14 = undefined;
                        var15 = undefined;
                        var11 = undefined;
                        var18 = undefined;
                        var10 = undefined;
                        var12 = undefined;
                        var2 = /\r\n?/g;
                        var _closure2_slot7 = var2;
                        var2 = /\t/g;
                        var _closure2_slot8 = var2;
                        var2 = /\f/g;
                        var _closure2_slot9 = var2;
                        var2 = function(arg0) { // Original name: preprocess, environment: var1
                            var4 = arg0;
                            var3 = var4.replace;
                            var2 = _closure2_slot7;
                            var1 = '\n';
                            var4 = var3.bind(var4)(var2, var1);
                            var3 = var4.replace;
                            var2 = _closure2_slot9;
                            var1 = '';
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.replace;
                            var1 = _closure2_slot8;
                            var0 = '    ';
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var8 = var2;
                        var _closure2_slot10 = var2;
                        var2 = function(arg0, arg1) { // Original name: populateInitialState, environment: var1
                            _fun27035: for (var _fun27035_ip = 0;;) switch (_fun27035_ip) {
                                case 0:
                                    var0 = arg0;
                                    var7 = arg1;
                                    if (var0) {
                                        _fun27035_ip = 11;
                                        continue _fun27035
                                    }
                                case 9:
                                    var0 = {};
                                case 11:
                                    var1 = null;
                                    if (!(var1 != var7)) {
                                        _fun27035_ip = 83;
                                        continue _fun27035
                                    }
                                case 17:
                                    var5 = var7;
                                    var1 = global;
                                    for (var2 in var5)
                                        case 30: {
                                            case 39: var9 = var2;
                                            var8 = var1.Object;
                                            var8 = var8.prototype;
                                            var10 = var8.hasOwnProperty;
                                            var8 = var10.call;
                                            var8 = var8.bind(var10)(var7, var9);
                                            if (!var8) {
                                                _fun27035_ip = 30;
                                                continue _fun27035
                                            }
                                            case 73: var8 = var7[var9];
                                            var0[var9] = var8;
                                            _fun27035_ip = 30;
                                            continue _fun27035;
                                        }
                                case 83:
                                    return var0;
                            }
                        };
                        var _closure2_slot11 = var2;
                        var0 = function(arg0, arg1) { // Original name: parserFor, environment: var1
                            _fun27036: for (var _fun27036_ip = 0;;) switch (_fun27036_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var2 = arg1;
                                    var _closure3_slot1 = var2;
                                    var2 = global;
                                    var4 = var2.Object;
                                    var3 = var4.keys;
                                    var5 = var3.bind(var4)(var1);
                                    var4 = var5.filter;
                                    var3 = function(arg0) { // Environment: var0
                                        _fun27037: for (var _fun27037_ip = 0;;) switch (_fun27037_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var0 = _closure3_slot0;
                                                var0 = var0[var4];
                                                var2 = null;
                                                if (!(var2 != var0)) {
                                                    _fun27037_ip = 152;
                                                    continue _fun27037
                                                }
                                            case 23:
                                                var1 = var0.match;
                                                if (!(var2 != var1)) {
                                                    _fun27037_ip = 152;
                                                    continue _fun27037
                                                }
                                            case 33:
                                                var5 = var0.order;
                                                var1 = 'number';
                                                var0 = typeof var5;
                                                var0 = var1 === var0;
                                                if (!var0) {
                                                    _fun27037_ip = 68;
                                                    continue _fun27037
                                                }
                                            case 53:
                                                var1 = global;
                                                var2 = var1.isFinite;
                                                var1 = undefined;
                                                var0 = var2.bind(var1)(var5);
                                            case 68:
                                                if (var0) {
                                                    _fun27037_ip = 90;
                                                    continue _fun27037
                                                }
                                            case 71:
                                                var1 = global;
                                                var1 = var1.console;
                                                var2 = 'undefined';
                                                var1 = typeof var1;
                                                var0 = var2 === var1;
                                            case 90:
                                                if (var0) {
                                                    _fun27037_ip = 148;
                                                    continue _fun27037
                                                }
                                            case 93:
                                                var0 = global;
                                                var2 = var0.console;
                                                var1 = var2.warn;
                                                var3 = 'simple-markdown: Invalid order for rule `';
                                                var4 = var3 + var4;
                                                var3 = var0.String;
                                                var0 = undefined;
                                                var3 = var3.bind(var0)(var5);
                                                var0 = '`: ';
                                                var0 = var4 + var0;
                                                var0 = var0 + var3;
                                                var0 = var1.bind(var2)(var0);
                                            case 148:
                                                var0 = true;
                                                return var0;
                                            case 152:
                                                var0 = false;
                                                return var0;
                                        }
                                    };
                                    var6 = var4.bind(var5)(var3);
                                    var _closure3_slot2 = var6;
                                    var4 = var6.sort;
                                    var3 = function(arg0, arg1) { // Environment: var0
                                        _fun27038: for (var _fun27038_ip = 0;;) switch (_fun27038_ip) {
                                            case 0:
                                                var7 = arg0;
                                                var5 = arg1;
                                                var0 = _closure3_slot0;
                                                var3 = var0[var7];
                                                var2 = var0[var5];
                                                var1 = var3.order;
                                                var0 = var2.order;
                                                if (!(var1 === var0)) {
                                                    _fun27038_ip = 108;
                                                    continue _fun27038
                                                }
                                            case 37:
                                                var3 = var3.quality;
                                                var6 = 1;
                                                var4 = var6;
                                                if (!var3) {
                                                    _fun27038_ip = 54;
                                                    continue _fun27038
                                                }
                                            case 52:
                                                var4 = 0;
                                            case 54:
                                                var2 = var2.quality;
                                                var3 = var6;
                                                if (!var2) {
                                                    _fun27038_ip = 68;
                                                    continue _fun27038
                                                }
                                            case 66:
                                                var3 = 0;
                                            case 68:
                                                if (!(var4 === var3)) {
                                                    _fun27038_ip = 102;
                                                    continue _fun27038
                                                }
                                            case 72:
                                                var8 = var7 < var5;
                                                var2 = -1;
                                                if (var8) {
                                                    _fun27038_ip = 100;
                                                    continue _fun27038
                                                }
                                            case 85:
                                                var7 = var7 > var5;
                                                var5 = 0;
                                                if (!var7) {
                                                    _fun27038_ip = 97;
                                                    continue _fun27038
                                                }
                                            case 94:
                                                var5 = var6;
                                            case 97:
                                                var2 = var5;
                                            case 100:
                                                _fun27038_ip = 106;
                                                continue _fun27038;
                                            case 102:
                                                var2 = var4 - var3;
                                            case 106:
                                                return var2;
                                            case 108:
                                                var0 = var1 - var0;
                                                return var0;
                                        }
                                    };
                                    var3 = var4.bind(var6)(var3);
                                    var2 = var2.Map;
                                    var3 = var2.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var11 = var3;
                                    var2 = new var11[var2](var10);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    var _closure3_slot4 = var2;
                                    var5 = new Array(0);
                                    var _closure3_slot5 = var5;
                                    var2 = var6.length;
                                    var4 = 0;
                                    var2 = var4 < var2;
                                    var3 = null;
                                    if (!var2) {
                                        _fun27036_ip = 184;
                                        continue _fun27036
                                    }
                                case 123:
                                    var7 = var6[var4];
                                    var _closure3_slot6 = var7;
                                    var2 = var1[var7];
                                    var9 = var2.requiredFirstCharacters;
                                    if (!(var3 != var9)) {
                                        _fun27036_ip = 162;
                                        continue _fun27036
                                    }
                                case 145:
                                    var8 = var9.map;
                                    var2 = function(arg0) { // Environment: var0
                                        _fun27039: for (var _fun27039_ip = 0;;) switch (_fun27039_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var1 = var2.charCodeAt;
                                                var0 = 0;
                                                var3 = var1.bind(var2)(var0);
                                                var2 = _closure3_slot4;
                                                var1 = var2.has;
                                                var1 = var1.bind(var2)(var3);
                                                if (var1) {
                                                    _fun27039_ip = 55;
                                                    continue _fun27039
                                                }
                                            case 36:
                                                var4 = _closure3_slot4;
                                                var2 = var4.set;
                                                var1 = new Array(0);
                                                var1 = var2.bind(var4)(var3, var1);
                                            case 55:
                                                var2 = _closure3_slot4;
                                                var1 = var2.get;
                                                var2 = var1.bind(var2)(var3);
                                                var1 = var2.push;
                                                var0 = _closure3_slot6;
                                                var0 = var1.bind(var2)(var0);
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var2 = var8.bind(var9)(var2);
                                    _fun27036_ip = 172;
                                    continue _fun27036;
                                case 162:
                                    var2 = var5.push;
                                    var2 = var2.bind(var5)(var7);
                                case 172:
                                    var4 = var4 + 1;
                                    var2 = var6.length;
                                    if (var4 < var2) {
                                        _fun27036_ip = 123;
                                        continue _fun27036
                                    }
                                case 184:
                                    var2 = function(arg0, arg1) { // Original name: nestedParse, environment: var0
                                        _fun27040: for (var _fun27040_ip = 0;;) switch (_fun27040_ip) {
                                            case 0:
                                                var18 = arg0;
                                                var17 = arg1;
                                                var3 = new Array(0);
                                                if (var17) {
                                                    _fun27040_ip = 20;
                                                    continue _fun27040
                                                }
                                            case 13:
                                                var17 = _closure3_slot3;
                                            case 20:
                                                var _closure3_slot3 = var17;
                                                var11 = undefined;
                                                var16 = 0;
                                                var2 = global;
                                                var15 = null;
                                                var14 = -100000;
                                                var13 = 100000;
                                                var12 = '';
                                                var10 = undefined;
                                                var9 = undefined;
                                                var8 = undefined;
                                                var7 = undefined;
                                                var6 = undefined;
                                                var5 = undefined;
                                                var4 = undefined;
                                                if (!var18) {
                                                    _fun27040_ip = 813;
                                                    continue _fun27040
                                                }
                                            case 71:
                                                var20 = _closure3_slot4;
                                                var19 = var20.get;
                                                var1 = var18.charCodeAt;
                                                var1 = var1.bind(var18)(var16);
                                                var1 = var19.bind(var20)(var1);
                                                var36 = new Array(2);
                                                var36[0] = var1;
                                                var1 = _closure3_slot5;
                                                var36[1] = var1;
                                                var1 = var36.length;
                                                var21 = var16 < var1;
                                                var1 = var18;
                                                var29 = var10;
                                                var28 = var9;
                                                var27 = var8;
                                                var26 = var7;
                                                var25 = var6;
                                                var24 = var5;
                                                var22 = var4;
                                                var35 = null;
                                                var34 = null;
                                                var33 = null;
                                                var32 = var14;
                                                var31 = var13;
                                                var30 = 0;
                                                var20 = null;
                                                var23 = null;
                                                var19 = null;
                                                var10 = var29;
                                                var9 = var28;
                                                var8 = var27;
                                                var7 = var26;
                                                var6 = var25;
                                                var5 = var24;
                                                var4 = var22;
                                                if (!var21) {
                                                    _fun27040_ip = 660;
                                                    continue _fun27040
                                                }
                                            case 192:
                                                var44 = var36[var30];
                                                var47 = var35;
                                                var46 = var34;
                                                var45 = var33;
                                                var49 = var32;
                                                var48 = var31;
                                                var42 = var28;
                                                var41 = var27;
                                                var40 = var26;
                                                var39 = var25;
                                                var38 = var24;
                                                var37 = var22;
                                                if (!(var15 != var44)) {
                                                    _fun27040_ip = 579;
                                                    continue _fun27040
                                                }
                                            case 236:
                                                var21 = var44.length;
                                                var21 = var16 < var21;
                                                var57 = var35;
                                                var56 = var34;
                                                var55 = var33;
                                                var54 = var32;
                                                var53 = var31;
                                                var52 = 0;
                                                var51 = var25;
                                                var50 = var24;
                                                var43 = var22;
                                                var47 = var57;
                                                var46 = var56;
                                                var45 = var55;
                                                var49 = var54;
                                                var48 = var53;
                                                var29 = 0;
                                                var42 = var28;
                                                var41 = var27;
                                                var40 = var26;
                                                var39 = var51;
                                                var38 = var50;
                                                var37 = var43;
                                                if (!var21) {
                                                    _fun27040_ip = 579;
                                                    continue _fun27040
                                                }
                                            case 312:
                                                var64 = var44[var52];
                                                var21 = _closure3_slot0;
                                                var63 = var21[var64];
                                                var62 = var63.order;
                                                var39 = var51;
                                                var38 = var50;
                                                var47 = var57;
                                                var46 = var56;
                                                var45 = var55;
                                                var49 = var54;
                                                var29 = var52;
                                                var42 = var64;
                                                var41 = var63;
                                                var40 = var62;
                                                var37 = var43;
                                                var48 = var53;
                                                if (!(!(var62 > var48))) {
                                                    _fun27040_ip = 579;
                                                    continue _fun27040
                                                }
                                            case 373:
                                                var21 = var17.prevCapture;
                                                var58 = var15 == var21;
                                                var21 = var12;
                                                if (var58) {
                                                    _fun27040_ip = 399;
                                                    continue _fun27040
                                                }
                                            case 389:
                                                var58 = var17.prevCapture;
                                                var21 = var58[var16];
                                            case 399:
                                                var58 = var63.match;
                                                var60 = var58.bind(var63)(var1, var17, var21);
                                                var61 = var21;
                                                var69 = var57;
                                                var68 = var56;
                                                var67 = var55;
                                                var66 = var54;
                                                var65 = var53;
                                                if (!var60) {
                                                    _fun27040_ip = 507;
                                                    continue _fun27040
                                                }
                                            case 433:
                                                var58 = var63.quality;
                                                var21 = 0;
                                                if (!var58) {
                                                    _fun27040_ip = 457;
                                                    continue _fun27040
                                                }
                                            case 444:
                                                var58 = var63.quality;
                                                var21 = var58.bind(var63)(var60, var17, var61);
                                            case 457:
                                                var58 = var62 < var53;
                                                if (var58) {
                                                    _fun27040_ip = 468;
                                                    continue _fun27040
                                                }
                                            case 464:
                                                var58 = var21 > var54;
                                            case 468:
                                                var69 = var57;
                                                var68 = var56;
                                                var67 = var55;
                                                var66 = var54;
                                                var65 = var53;
                                                var43 = var21;
                                                if (!var58) {
                                                    _fun27040_ip = 507;
                                                    continue _fun27040
                                                }
                                            case 489:
                                                var69 = var64;
                                                var68 = var63;
                                                var67 = var60;
                                                var66 = var21;
                                                var65 = var62;
                                                var43 = var66;
                                            case 507:
                                                var52 = var52 + 1;
                                                var21 = var44.length;
                                                var57 = var69;
                                                var56 = var68;
                                                var55 = var67;
                                                var54 = var66;
                                                var53 = var65;
                                                var51 = var61;
                                                var50 = var60;
                                                var47 = var57;
                                                var46 = var56;
                                                var45 = var55;
                                                var49 = var54;
                                                var48 = var53;
                                                var42 = var64;
                                                var41 = var63;
                                                var40 = var62;
                                                var39 = var51;
                                                var38 = var50;
                                                var37 = var43;
                                                var29 = var52;
                                                if (var29 < var21) {
                                                    _fun27040_ip = 312;
                                                    continue _fun27040
                                                }
                                            case 579:
                                                var30 = var30 + 1;
                                                var21 = var36.length;
                                                var35 = var47;
                                                var34 = var46;
                                                var33 = var45;
                                                var32 = var49;
                                                var31 = var48;
                                                var28 = var42;
                                                var27 = var41;
                                                var26 = var40;
                                                var25 = var39;
                                                var24 = var38;
                                                var22 = var37;
                                                var20 = var35;
                                                var23 = var34;
                                                var19 = var33;
                                                var11 = var44;
                                                var10 = var29;
                                                var9 = var28;
                                                var8 = var27;
                                                var7 = var26;
                                                var6 = var25;
                                                var5 = var24;
                                                var4 = var22;
                                                if (var30 < var21) {
                                                    _fun27040_ip = 192;
                                                    continue _fun27040
                                                }
                                            case 660:
                                                if (!(var15 != var23)) {
                                                    _fun27040_ip = 849;
                                                    continue _fun27040
                                                }
                                            case 667:
                                                if (!(var15 != var19)) {
                                                    _fun27040_ip = 849;
                                                    continue _fun27040
                                                }
                                            case 674:
                                                var21 = var19.index;
                                                if (var21) {
                                                    _fun27040_ip = 815;
                                                    continue _fun27040
                                                }
                                            case 685:
                                                var22 = var23.parse;
                                                var21 = _closure3_slot7;
                                                var22 = var22.bind(var23)(var19, var21, var17);
                                                var23 = var2.Array;
                                                var21 = var23.isArray;
                                                var21 = var21.bind(var23)(var22);
                                                if (var21) {
                                                    _fun27040_ip = 748;
                                                    continue _fun27040
                                                }
                                            case 721:
                                                var21 = var22.type;
                                                if (!(var15 == var21)) {
                                                    _fun27040_ip = 736;
                                                    continue _fun27040
                                                }
                                            case 730:
                                                var22.type = var20;
                                            case 736:
                                                var20 = var3.push;
                                                var20 = var20.bind(var3)(var22);
                                                _fun27040_ip = 775;
                                                continue _fun27040;
                                            case 748:
                                                var20 = var2.Array;
                                                var20 = var20.prototype;
                                                var21 = var20.push;
                                                var20 = var21.apply;
                                                var20 = var20.bind(var21)(var3, var22);
                                            case 775:
                                                var17.prevCapture = var19;
                                                var20 = var1.substring;
                                                var19 = var17.prevCapture;
                                                var19 = var19[var16];
                                                var19 = var19.length;
                                                var18 = var20.bind(var1)(var19);
                                                if (var18) {
                                                    _fun27040_ip = 71;
                                                    continue _fun27040
                                                }
                                            case 813:
                                                return var3;
                                            case 815:
                                                var5 = var2.Error;
                                                var3 = var5.prototype;
                                                var4 = Object.create(var3, {
                                                    constructor: {
                                                        value: var5
                                                    }
                                                });
                                                var72 = '`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?';
                                                var73 = var4;
                                                var3 = new var73[var5](var72, var71);
                                                var3 = var3 instanceof Object ? var3 : var4;
                                                throw var3;
                                            case 849:
                                                var2 = var2.Error;
                                                var3 = _closure3_slot2;
                                                var4 = var3.length;
                                                var0 = 1;
                                                var0 = var4 - var0;
                                                var3 = var3[var0];
                                                var0 = "Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '";
                                                var3 = var0 + var3;
                                                var0 = "'. It seems to not match the following source:\n";
                                                var0 = var3 + var0;
                                                var72 = var0 + var1;
                                                var1 = var2.prototype;
                                                var1 = Object.create(var1, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var73 = var1;
                                                var0 = new var73[var2](var72, var71);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                throw var0;
                                        }
                                    };
                                    var _closure3_slot7 = var2;
                                    var0 = function(arg0, arg1) { // Original name: outerParse, environment: var0
                                        _fun27041: for (var _fun27041_ip = 0;;) switch (_fun27041_ip) {
                                            case 0:
                                                var5 = arg0;
                                                var6 = _closure2_slot11;
                                                var4 = _closure3_slot1;
                                                var3 = undefined;
                                                var2 = arg1;
                                                var2 = var6.bind(var3)(var2, var4);
                                                _closure3_slot3 = var2;
                                                var2 = var2.inline;
                                                if (var2) {
                                                    _fun27041_ip = 51;
                                                    continue _fun27041
                                                }
                                            case 41:
                                                var4 = _closure3_slot3;
                                                var2 = var4.disableAutoBlockNewlines;
                                            case 51:
                                                var4 = var5;
                                                if (var2) {
                                                    _fun27041_ip = 67;
                                                    continue _fun27041
                                                }
                                            case 57:
                                                var2 = '\n\n';
                                                var4 = var5 + var2;
                                            case 67:
                                                var5 = _closure3_slot3;
                                                var2 = null;
                                                var5.prevCapture = var2;
                                                var2 = _closure3_slot7;
                                                var1 = _closure2_slot10;
                                                var1 = var1.bind(var3)(var4);
                                                var0 = _closure3_slot3;
                                                var0 = var2.bind(var3)(var1, var0);
                                                return var0;
                                        }
                                    };
                                    var2.rules = var1;
                                    var0.rules = var1;
                                    return var0;
                            }
                        };
                        var17 = function(arg0) { // Original name: inlineRegex, environment: var1
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var0 = function(arg0, arg1) { // Original name: match, environment: var0
                                _fun27043: for (var _fun27043_ip = 0;;) switch (_fun27043_ip) {
                                    case 0:
                                        var0 = arg1;
                                        var1 = var0.inline;
                                        var0 = null;
                                        if (!var1) {
                                            _fun27043_ip = 35;
                                            continue _fun27043
                                        }
                                    case 14:
                                        var3 = _closure3_slot0;
                                        var2 = var3.exec;
                                        var1 = arg0;
                                        var0 = var2.bind(var3)(var1);
                                    case 35:
                                        return var0;
                                }
                            };
                            var0.regex = var1;
                            return var0;
                        };
                        var16 = function(arg0) { // Original name: blockRegex, environment: var1
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var0 = function(arg0, arg1) { // Original name: match, environment: var0
                                _fun27045: for (var _fun27045_ip = 0;;) switch (_fun27045_ip) {
                                    case 0:
                                        var0 = arg1;
                                        var1 = var0.inline;
                                        var0 = null;
                                        if (var1) {
                                            _fun27045_ip = 35;
                                            continue _fun27045
                                        }
                                    case 14:
                                        var3 = _closure3_slot0;
                                        var2 = var3.exec;
                                        var1 = arg0;
                                        var0 = var2.bind(var3)(var1);
                                    case 35:
                                        return var0;
                                }
                            };
                            var0.regex = var1;
                            return var0;
                        };
                        var13 = function(arg0) { // Original name: anyScopeRegex, environment: var1
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var0 = function(arg0, arg1) { // Original name: match, environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.exec;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.regex = var1;
                            return var0;
                        };
                        var19 = global;
                        var20 = var19.Symbol;
                        var21 = 'function';
                        var20 = typeof var20;
                        var20 = var21 === var20;
                        if (!var20) {
                            _fun27033_ip = 154;
                            continue _fun27033
                        }
                    case 142:
                        var21 = var19.Symbol;
                        var20 = var21.for;
                    case 154:
                        if (!var20) {
                            _fun27033_ip = 180;
                            continue _fun27033
                        }
                    case 157:
                        var23 = var19.Symbol;
                        var22 = var23.for;
                        var21 = 'react.transitional.element';
                        var20 = var22.bind(var23)(var21);
                    case 180:
                        var2 = var20;
                        if (var20) {
                            _fun27033_ip = 192;
                            continue _fun27033
                        }
                    case 186:
                        var2 = 60103;
                    case 192:
                        var _closure2_slot12 = var2;
                        var2 = function(arg0, arg1, arg2) { // Original name: reactElement, environment: var1
                            _fun27048: for (var _fun27048_ip = 0;;) switch (_fun27048_ip) {
                                case 0:
                                    var3 = arg1;
                                    var0 = {};
                                    var1 = _closure2_slot12;
                                    var0.$$typeof = var1;
                                    var1 = arg0;
                                    var0.type = var1;
                                    var1 = null;
                                    var4 = var1 == var3;
                                    var2 = undefined;
                                    if (var4) {
                                        _fun27048_ip = 38;
                                        continue _fun27048
                                    }
                                case 35:
                                    var2 = var3;
                                case 38:
                                    var0.key = var2;
                                    var0.ref = var1;
                                    var2 = arg2;
                                    var0.props = var2;
                                    var0._owner = var1;
                                    return var0;
                            }
                        };
                        var3 = var2;
                        var _closure2_slot13 = var2;
                        var2 = function(arg0, arg1, arg2, arg3) { // Original name: htmlTag, environment: var1
                            _fun27049: for (var _fun27049_ip = 0;;) switch (_fun27049_ip) {
                                case 0:
                                    var3 = arg0;
                                    var15 = arg2;
                                    var0 = arg3;
                                    if (var15) {
                                        _fun27049_ip = 14;
                                        continue _fun27049
                                    }
                                case 12:
                                    var15 = {};
                                case 14:
                                    var14 = undefined;
                                    var1 = var14 === var0;
                                    if (var1) {
                                        _fun27049_ip = 26;
                                        continue _fun27049
                                    }
                                case 23:
                                    var1 = var0;
                                case 26:
                                    var12 = var15;
                                    var0 = '';
                                    var7 = ' ';
                                    var6 = '="';
                                    var5 = '"';
                                    var4 = global;
                                    var2 = var0;
                                    for (var9 in var12)
                                        case 65: {
                                            var17 = var0;
                                            var2 = var17;
                                            case 80: var18 = var9;
                                            var19 = var15[var18];
                                            var16 = var4.Object;
                                            var16 = var16.prototype;
                                            var20 = var16.hasOwnProperty;
                                            var16 = var20.call;
                                            var16 = var16.bind(var20)(var15, var18);
                                            if (!var16) {
                                                _fun27049_ip = 121;
                                                continue _fun27049
                                            }
                                            case 118: var16 = var19;
                                            case 121: var0 = var17;
                                            if (!var16) {
                                                _fun27049_ip = 65;
                                                continue _fun27049
                                            }
                                            case 127: var16 = _closure2_slot19;
                                            var16 = var16.bind(var14)(var18);
                                            var16 = var7 + var16;
                                            var18 = _closure2_slot19;
                                            var18 = var18.bind(var14)(var19);
                                            var16 = var16 + var6;
                                            var16 = var16 + var18;
                                            var16 = var16 + var5;
                                            var0 = var17 + var16;
                                            _fun27049_ip = 65;
                                            continue _fun27049;
                                        }
                                case 167:
                                    var0 = '<';
                                    var0 = var0 + var3;
                                    var0 = var0 + var2;
                                    var2 = '>';
                                    var4 = var0 + var2;
                                    var0 = var4;
                                    if (!var1) {
                                        _fun27049_ip = 218;
                                        continue _fun27049
                                    }
                                case 193:
                                    var1 = arg1;
                                    var4 = var4 + var1;
                                    var1 = '</';
                                    var1 = var4 + var1;
                                    var1 = var1 + var3;
                                    var0 = var1 + var2;
                                case 218:
                                    return var0;
                            }
                        };
                        var4 = var2;
                        var _closure2_slot14 = var2;
                        var2 = {};
                        var _closure2_slot15 = var2;
                        var2 = function(arg0) { // Original name: sanitizeUrl, environment: var1
                            _fun27050: for (var _fun27050_ip = 0;;) switch (_fun27050_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = var3;
                                    var2 = undefined;
                                    var0 = null;
                                    if (!(var0 != var3)) {
                                        _fun27050_ip = 140;
                                        continue _fun27050
                                    }
                                case 17: // try_start_0
                                    var3 = global;
                                    var6 = var3.URL;
                                    var8 = var1;
                                    var3 = var6.prototype;
                                    var4 = Object.create(var3, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var7 = 'https://localhost';
                                    var9 = var4;
                                    var3 = new var9[var6](var8, var7, var6);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    var5 = var3.protocol;
                                    var2 = var5;
                                    var4 = var5.indexOf;
                                    var3 = 'javascript:';
                                    var4 = var4.bind(var5)(var3);
                                    var3 = 0;
                                    if (!(var3 !== var4)) {
                                        _fun27050_ip = 134;
                                        continue _fun27050
                                    }
                                case 84:
                                    var6 = var2;
                                    var5 = var6.indexOf;
                                    var4 = 'vbscript:';
                                    var4 = var5.bind(var6)(var4);
                                    if (!(var3 !== var4)) {
                                        _fun27050_ip = 134;
                                        continue _fun27050
                                    }
                                case 108:
                                    var5 = var2;
                                    var4 = var5.indexOf;
                                    var2 = 'data:';
                                    var2 = var4.bind(var5)(var2);
                                    if (!(var3 !== var2)) {
                                        _fun27050_ip = 134;
                                        continue _fun27050
                                    }
                                case 132: // try_end0
                                    return var1;
                                case 134:
                                    return var0;
                                case 136: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    return var0;
                                case 140:
                                    return var0;
                            }
                        };
                        var6 = var2;
                        var _closure2_slot16 = var2;
                        var2 = /[<>&"']/g;
                        var _closure2_slot17 = var2;
                        var2 = {
                            '<': '&lt;',
                            '>': '&gt;',
                            '&': '&amp;',
                            '"': '&quot;',
                            "'": '&#x27;',
                            '/': '&#x2F;',
                            '`': '&#96;'
                        };
                        var _closure2_slot18 = var2;
                        var2 = function(arg0) { // Original name: sanitizeText, environment: var1
                            var0 = global;
                            var2 = var0.String;
                            var1 = undefined;
                            var0 = arg0;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.replace;
                            var1 = _closure2_slot17;
                            var0 = function(arg0) { // Environment: var0
                                var1 = _closure2_slot18;
                                var0 = arg0;
                                var0 = var1[var0];
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var7 = var2;
                        var _closure2_slot19 = var2;
                        var2 = /\\([^0-9A-Za-z\s])/g;
                        var _closure2_slot20 = var2;
                        var2 = function(arg0) { // Original name: unescapeUrl, environment: var1
                            var3 = arg0;
                            var2 = var3.replace;
                            var1 = _closure2_slot20;
                            var0 = '$1';
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var5 = var2;
                        var _closure2_slot21 = var2;
                        var2 = function(arg0, arg1, arg2) { // Original name: parseInline, environment: var1
                            _fun27054: for (var _fun27054_ip = 0;;) switch (_fun27054_ip) {
                                case 0:
                                    var2 = arg2;
                                    var1 = var2.inline;
                                    if (var1) {
                                        _fun27054_ip = 14;
                                        continue _fun27054
                                    }
                                case 12:
                                    var1 = false;
                                case 14:
                                    var0 = true;
                                    var2.inline = var0;
                                    var4 = arg0;
                                    var3 = undefined;
                                    var0 = arg1;
                                    var0 = var4.bind(var3)(var0, var2);
                                    var2.inline = var1;
                                    return var0;
                            }
                        };
                        var14 = var2;
                        var _closure2_slot22 = var2;
                        var15 = function(arg0, arg1, arg2) { // Original name: parseCaptureInline, environment: var1
                            var0 = {};
                            var5 = _closure2_slot22;
                            var2 = arg0;
                            var1 = 1;
                            var4 = var2[var1];
                            var3 = undefined;
                            var2 = arg1;
                            var1 = arg2;
                            var1 = var5.bind(var3)(var2, var4, var1);
                            var0.content = var1;
                            return var0;
                        };
                        var11 = function() { // Original name: ignoreCapture, environment: var1
                            var0 = {};
                            return var0;
                        };
                        var21 = var19.RegExp;
                        var2 = var21.prototype;
                        var20 = Object.create(var2, {
                            constructor: {
                                value: var21
                            }
                        });
                        var27 = '^( *)((?:[*+-]|\\d+\\.)) +';
                        var28 = var20;
                        var2 = new var28[var21](var27, var26);
                        var2 = var2 instanceof Object ? var2 : var20;
                        var _closure2_slot23 = var2;
                        var22 = var19.RegExp;
                        var2 = var22.prototype;
                        var20 = Object.create(var2, {
                            constructor: {
                                value: var22
                            }
                        });
                        var27 = '( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\n|$)';
                        var26 = 'gm';
                        var28 = var20;
                        var2 = new var28[var22](var27, var26, var25);
                        var2 = var2 instanceof Object ? var2 : var20;
                        var _closure2_slot24 = var2;
                        var2 = /\n{2,}$/;
                        var _closure2_slot25 = var2;
                        var20 = /^ (?= *`)|(` *) $/g;
                        var _closure2_slot26 = var20;
                        var _closure2_slot27 = var2;
                        var2 = / *\n+$/;
                        var _closure2_slot28 = var2;
                        var21 = var19.RegExp;
                        var2 = var21.prototype;
                        var20 = Object.create(var2, {
                            constructor: {
                                value: var21
                            }
                        });
                        var27 = '^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) )\\n*|\\s*\n*$)';
                        var28 = var20;
                        var2 = new var28[var21](var27, var26);
                        var2 = var2 instanceof Object ? var2 : var20;
                        var _closure2_slot29 = var2;
                        var2 = /(?:^|\n)( *)$/;
                        var _closure2_slot30 = var2;
                        var2 = /^ *\| *| *\| *$/g;
                        var _closure2_slot0 = var2;
                        var2 = / *$/;
                        var _closure2_slot1 = var2;
                        var2 = /^ *-+: *$/;
                        var _closure2_slot2 = var2;
                        var2 = /^ *:-+: *$/;
                        var _closure2_slot3 = var2;
                        var2 = /^ *:-+ *$/;
                        var _closure2_slot4 = var2;
                        var2 = function(arg0) { // Original name: parseTableAlignCapture, environment: var1
                            _fun27057: for (var _fun27057_ip = 0;;) switch (_fun27057_ip) {
                                case 0:
                                    var4 = arg0;
                                    var1 = _closure2_slot2;
                                    var0 = var1.test;
                                    var1 = var0.bind(var1)(var4);
                                    var0 = 'right';
                                    if (var1) {
                                        _fun27057_ip = 77;
                                        continue _fun27057
                                    }
                                case 27:
                                    var3 = _closure2_slot3;
                                    var1 = var3.test;
                                    var3 = var1.bind(var3)(var4);
                                    var1 = 'center';
                                    if (var3) {
                                        _fun27057_ip = 74;
                                        continue _fun27057
                                    }
                                case 48:
                                    var3 = _closure2_slot4;
                                    var2 = var3.test;
                                    var3 = var2.bind(var3)(var4);
                                    var2 = null;
                                    if (!var3) {
                                        _fun27057_ip = 71;
                                        continue _fun27057
                                    }
                                case 67:
                                    var2 = 'left';
                                case 71:
                                    var1 = var2;
                                case 74:
                                    var0 = var1;
                                case 77:
                                    return var0;
                            }
                        };
                        var _closure2_slot5 = var2;
                        var2 = function(arg0, arg1, arg2, arg3) { // Original name: parseTableRow, environment: var1
                            var4 = arg0;
                            var2 = arg2;
                            var0 = arg3;
                            var _closure3_slot0 = var0;
                            var0 = var2.inTable;
                            var3 = true;
                            var2.inTable = var3;
                            var3 = var4.trim;
                            var5 = var3.bind(var4)();
                            var4 = arg1;
                            var3 = undefined;
                            var3 = var4.bind(var3)(var5, var2);
                            var _closure3_slot1 = var3;
                            var2.inTable = var0;
                            var0 = new Array(1);
                            var2 = new Array(0);
                            var0[0] = var2;
                            var _closure3_slot2 = var0;
                            var2 = var3.forEach;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun27059: for (var _fun27059_ip = 0;;) switch (_fun27059_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var4 = arg1;
                                        var0 = var2.type;
                                        var5 = 'tableSeparator';
                                        if (!(var5 !== var0)) {
                                            _fun27059_ip = 162;
                                            continue _fun27059
                                        }
                                    case 24:
                                        var1 = var2.type;
                                        var0 = 'text';
                                        var0 = var0 !== var1;
                                        if (var0) {
                                            _fun27059_ip = 91;
                                            continue _fun27059
                                        }
                                    case 40:
                                        var7 = _closure3_slot1;
                                        var3 = 1;
                                        var1 = var4 + var3;
                                        var7 = var7[var1];
                                        var1 = null;
                                        var1 = var1 != var7;
                                        if (!var1) {
                                            _fun27059_ip = 88;
                                            continue _fun27059
                                        }
                                    case 67:
                                        var6 = _closure3_slot1;
                                        var3 = var4 + var3;
                                        var3 = var6[var3];
                                        var3 = var3.type;
                                        var1 = var5 !== var3;
                                    case 88:
                                        var0 = var1;
                                    case 91:
                                        if (var0) {
                                            _fun27059_ip = 127;
                                            continue _fun27059
                                        }
                                    case 94:
                                        var5 = var2.content;
                                        var3 = var5.replace;
                                        var1 = _closure2_slot1;
                                        var0 = '';
                                        var0 = var3.bind(var5)(var1, var0);
                                        var2.content = var0;
                                    case 127:
                                        var1 = _closure3_slot2;
                                        var3 = var1.length;
                                        var0 = 1;
                                        var0 = var3 - var0;
                                        var1 = var1[var0];
                                        var0 = var1.push;
                                        var0 = var0.bind(var1)(var2);
                                        _fun27059_ip = 228;
                                        continue _fun27059;
                                    case 162:
                                        var1 = _closure3_slot0;
                                        var1 = !var1;
                                        if (var1) {
                                            _fun27059_ip = 207;
                                            continue _fun27059
                                        }
                                    case 175:
                                        var2 = 0;
                                        var2 = var2 !== var4;
                                        if (!var2) {
                                            _fun27059_ip = 204;
                                            continue _fun27059
                                        }
                                    case 184:
                                        var3 = _closure3_slot1;
                                        var5 = var3.length;
                                        var3 = 1;
                                        var3 = var5 - var3;
                                        var2 = var4 !== var3;
                                    case 204:
                                        var1 = var2;
                                    case 207:
                                        if (!var1) {
                                            _fun27059_ip = 228;
                                            continue _fun27059
                                        }
                                    case 210:
                                        var2 = _closure3_slot2;
                                        var1 = var2.push;
                                        var0 = new Array(0);
                                        var0 = var1.bind(var2)(var0);
                                    case 228:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var _closure2_slot6 = var2;
                        var20 = {};
                        var21 = function(arg0) { // Original name: parseTable, environment: var1
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var0 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun27061: for (var _fun27061_ip = 0;;) switch (_fun27061_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var7 = arg1;
                                        var4 = arg2;
                                        var0 = true;
                                        var4.inline = var0;
                                        var3 = _closure2_slot6;
                                        var2 = 1;
                                        var15 = var1[var2];
                                        var6 = _closure3_slot0;
                                        var16 = undefined;
                                        var14 = var7;
                                        var13 = var4;
                                        var12 = var6;
                                        var3 = var16[var3](var15, var14, var13, var12, var11);
                                        var2 = 2;
                                        var11 = var1[var2];
                                        var8 = var11;
                                        if (!var6) {
                                            _fun27061_ip = 85;
                                            continue _fun27061
                                        }
                                    case 66:
                                        var10 = var11.replace;
                                        var9 = _closure2_slot0;
                                        var2 = '';
                                        var8 = var10.bind(var11)(var9, var2);
                                    case 85:
                                        var2 = var8.trim;
                                        var9 = var2.bind(var8)();
                                        var8 = var9.split;
                                        var2 = '|';
                                        var8 = var8.bind(var9)(var2);
                                        var2 = var8.map;
                                        var0 = _closure2_slot5;
                                        var2 = var2.bind(var8)(var0);
                                        var0 = 3;
                                        var15 = var1[var0];
                                        var0 = function(arg0, arg1, arg2, arg3) { // Original name: parseTableCells, environment: var0
                                            var2 = arg0;
                                            var1 = arg1;
                                            var _closure5_slot0 = var1;
                                            var1 = arg2;
                                            var _closure5_slot1 = var1;
                                            var1 = arg3;
                                            var _closure5_slot2 = var1;
                                            var1 = var2.trim;
                                            var3 = var1.bind(var2)();
                                            var2 = var3.split;
                                            var1 = '\n';
                                            var2 = var2.bind(var3)(var1);
                                            var1 = var2.map;
                                            var0 = function(arg0) { // Environment: var0
                                                var5 = _closure2_slot6;
                                                var8 = _closure5_slot0;
                                                var7 = _closure5_slot1;
                                                var6 = _closure5_slot2;
                                                var10 = undefined;
                                                var9 = arg0;
                                                var0 = var10[var5](var9, var8, var7, var6, var5);
                                                return var0;
                                            };
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var16 = undefined;
                                        var14 = var7;
                                        var13 = var4;
                                        var12 = var6;
                                        var1 = var16[var0](var15, var14, var13, var12, var11);
                                        var0 = false;
                                        var4.inline = var0;
                                        var0 = {};
                                        var4 = 'table';
                                        var0.type = var4;
                                        var0.header = var3;
                                        var0.align = var2;
                                        var0.cells = var1;
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var2 = true;
                        var2 = var21.bind(var9)(var2);
                        var20.parseTable = var2;
                        var2 = false;
                        var21 = var21.bind(var9)(var2);
                        var20.parseNpTable = var21;
                        var21 = /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/;
                        var20.TABLE_REGEX = var21;
                        var21 = /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/;
                        var20.NPTABLE_REGEX = var21;
                        var18 = var20;
                        var20 = /mailto:/i;
                        var _closure2_slot31 = var20;
                        var20 = function(arg0, arg1, arg2) { // Original name: parseRef, environment: var1
                            _fun27064: for (var _fun27064_ip = 0;;) switch (_fun27064_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = arg1;
                                    var0 = arg2;
                                    var2 = 2;
                                    var5 = var3[var2];
                                    if (var5) {
                                        _fun27064_ip = 26;
                                        continue _fun27064
                                    }
                                case 19:
                                    var2 = 1;
                                    var5 = var3[var2];
                                case 26:
                                    var4 = var5.replace;
                                    var3 = /\s+/g;
                                    var2 = ' ';
                                    var3 = var4.bind(var5)(var3, var2);
                                    var2 = var3.toLowerCase;
                                    var2 = var2.bind(var3)();
                                    var3 = var1._defs;
                                    if (!var3) {
                                        _fun27064_ip = 122;
                                        continue _fun27064
                                    }
                                case 76:
                                    var3 = var1._defs;
                                    var3 = var3[var2];
                                    if (!var3) {
                                        _fun27064_ip = 122;
                                        continue _fun27064
                                    }
                                case 89:
                                    var3 = var1._defs;
                                    var3 = var3[var2];
                                    var4 = var3.target;
                                    var0.target = var4;
                                    var3 = var3.title;
                                    var0.title = var3;
                                case 122:
                                    var3 = var1._refs;
                                    if (var3) {
                                        _fun27064_ip = 133;
                                        continue _fun27064
                                    }
                                case 131:
                                    var3 = {};
                                case 133:
                                    var1._refs = var3;
                                    var4 = var1._refs;
                                    var3 = var1._refs;
                                    var3 = var3[var2];
                                    if (var3) {
                                        _fun27064_ip = 162;
                                        continue _fun27064
                                    }
                                case 158:
                                    var3 = new Array(0);
                                case 162:
                                    var4[var2] = var3;
                                    var1 = var1._refs;
                                    var2 = var1[var2];
                                    var1 = var2.push;
                                    var1 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot32 = var20;
                        var10 = false;
                    case 737: // try_start_0
                        var22 = var19.RegExp;
                        var20 = var22.prototype;
                        var28 = Object.create(var20, {
                            constructor: {
                                value: var22
                            }
                        });
                        var27 = '(?<=a)';
                        var20 = new var28[var22](var27, var26);
                        var22 = var19.RegExp;
                        var20 = var22.prototype;
                        var28 = Object.create(var20, {
                            constructor: {
                                value: var22
                            }
                        });
                        var27 = '(?<!a)';
                        var20 = new var28[var22](var27, var26);
                        var10 = false;
                    case 789: // try_end0
                        _fun27033_ip = 793;
                        continue _fun27033;
                    case 791: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 793:
                        var21 = 0;
                        var12 = 0;
                        var20 = {};
                        var2 = {};
                        var22 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                            _fun27065: for (var _fun27065_ip = 0;;) switch (_fun27065_ip) {
                                case 0:
                                    var10 = arg0;
                                    var9 = arg1;
                                    var2 = arg2;
                                    var1 = var2.key;
                                    var0 = new Array(0);
                                    var3 = var10.length;
                                    var4 = 0;
                                    var3 = var4 < var3;
                                    var8 = undefined;
                                    var7 = 1;
                                    var6 = 'text';
                                    var5 = 0;
                                    if (!var3) {
                                        _fun27065_ip = 247;
                                        continue _fun27065
                                    }
                                case 46:
                                    var3 = '' + var5;
                                    var2.key = var3;
                                    var12 = var10[var5];
                                    var13 = var12.type;
                                    var3 = var5;
                                    var11 = var12;
                                    if (!(var6 === var13)) {
                                        _fun27065_ip = 213;
                                        continue _fun27065
                                    }
                                case 77:
                                    var14 = {};
                                    var14.type = var6;
                                    var12 = var12.content;
                                    var14.content = var12;
                                    var13 = var5 + var7;
                                    var12 = var10.length;
                                    var3 = var5;
                                    var11 = var14;
                                    if (!(var13 < var12)) {
                                        _fun27065_ip = 213;
                                        continue _fun27065
                                    }
                                case 111:
                                    var12 = var5 + var7;
                                    var12 = var10[var12];
                                    var12 = var12.type;
                                    var13 = var5;
                                    var3 = var13;
                                    var11 = var14;
                                    if (!(var6 === var12)) {
                                        _fun27065_ip = 213;
                                        continue _fun27065
                                    }
                                case 137:
                                    var15 = var14.content;
                                    var12 = var13 + var7;
                                    var12 = var10[var12];
                                    var12 = var12.content;
                                    var12 = var15 + var12;
                                    var14.content = var12;
                                    var15 = var13 + 1;
                                    var16 = var15 + var7;
                                    var12 = var10.length;
                                    var3 = var15;
                                    var11 = var14;
                                    if (!(var16 < var12)) {
                                        _fun27065_ip = 213;
                                        continue _fun27065
                                    }
                                case 187:
                                    var12 = var15 + var7;
                                    var12 = var10[var12];
                                    var12 = var12.type;
                                    var13 = var15;
                                    var3 = var13;
                                    var11 = var14;
                                    if (var6 === var12) {
                                        _fun27065_ip = 137;
                                        continue _fun27065
                                    }
                                case 213:
                                    var12 = var0.push;
                                    var11 = var9.bind(var8)(var11, var2);
                                    var11 = var12.bind(var0)(var11);
                                    var5 = var3 + 1;
                                    var4 = var4 + 1;
                                    var3 = var10.length;
                                    if (var5 < var3) {
                                        _fun27065_ip = 46;
                                        continue _fun27065
                                    }
                                case 247:
                                    var2.key = var1;
                                    return var0;
                            }
                        };
                        var2.react = var22;
                        var22 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                            _fun27066: for (var _fun27066_ip = 0;;) switch (_fun27066_ip) {
                                case 0:
                                    var9 = arg0;
                                    var8 = arg1;
                                    var7 = arg2;
                                    var0 = var9.length;
                                    var6 = 0;
                                    var1 = var6 < var0;
                                    var2 = '';
                                    var5 = undefined;
                                    var4 = 1;
                                    var3 = 'text';
                                    var0 = var2;
                                    if (!var1) {
                                        _fun27066_ip = 228;
                                        continue _fun27066
                                    }
                                case 42:
                                    var11 = var9[var6];
                                    var12 = var11.type;
                                    var1 = var6;
                                    var10 = var11;
                                    if (!(var3 === var12)) {
                                        _fun27066_ip = 200;
                                        continue _fun27066
                                    }
                                case 64:
                                    var13 = {};
                                    var13.type = var3;
                                    var11 = var11.content;
                                    var13.content = var11;
                                    var12 = var6 + var4;
                                    var11 = var9.length;
                                    var1 = var6;
                                    var10 = var13;
                                    if (!(var12 < var11)) {
                                        _fun27066_ip = 200;
                                        continue _fun27066
                                    }
                                case 98:
                                    var11 = var6 + var4;
                                    var11 = var9[var11];
                                    var11 = var11.type;
                                    var12 = var6;
                                    var1 = var12;
                                    var10 = var13;
                                    if (!(var3 === var11)) {
                                        _fun27066_ip = 200;
                                        continue _fun27066
                                    }
                                case 124:
                                    var14 = var13.content;
                                    var11 = var12 + var4;
                                    var11 = var9[var11];
                                    var11 = var11.content;
                                    var11 = var14 + var11;
                                    var13.content = var11;
                                    var14 = var12 + 1;
                                    var15 = var14 + var4;
                                    var11 = var9.length;
                                    var1 = var14;
                                    var10 = var13;
                                    if (!(var15 < var11)) {
                                        _fun27066_ip = 200;
                                        continue _fun27066
                                    }
                                case 174:
                                    var11 = var14 + var4;
                                    var11 = var9[var11];
                                    var11 = var11.type;
                                    var12 = var14;
                                    var1 = var12;
                                    var10 = var13;
                                    if (var3 === var11) {
                                        _fun27066_ip = 124;
                                        continue _fun27066
                                    }
                                case 200:
                                    var10 = var8.bind(var5)(var10, var7);
                                    var2 = var2 + var10;
                                    var6 = var1 + 1;
                                    var1 = var9.length;
                                    var0 = var2;
                                    if (var6 < var1) {
                                        _fun27066_ip = 42;
                                        continue _fun27066
                                    }
                                case 228:
                                    return var0;
                            }
                        };
                        var2.html = var22;
                        var20.Array = var2;
                        var2 = {};
                        var12 = 1;
                        var2.order = var21;
                        var21 = var16;
                        var22 = /^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/;
                        var22 = var21.bind(var9)(var22);
                        var2.match = var22;
                        var22 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                            var2 = arg0;
                            var0 = {};
                            var1 = 1;
                            var1 = var2[var1];
                            var1 = var1.length;
                            var0.level = var1;
                            var5 = _closure2_slot22;
                            var1 = 2;
                            var2 = var2[var1];
                            var1 = var2.trim;
                            var4 = var1.bind(var2)();
                            var3 = undefined;
                            var2 = arg1;
                            var1 = arg2;
                            var1 = var5.bind(var3)(var2, var4, var1);
                            var0.content = var1;
                            return var0;
                        };
                        var2.parse = var22;
                        var22 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                            var0 = arg0;
                            var7 = arg2;
                            var4 = _closure2_slot13;
                            var2 = var0.level;
                            var1 = 'h';
                            var3 = var1 + var2;
                            var2 = var7.key;
                            var1 = {};
                            var6 = var0.content;
                            var5 = arg1;
                            var0 = undefined;
                            var5 = var5.bind(var0)(var6, var7);
                            var1.children = var5;
                            var0 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                        };
                        var2.react = var22;
                        var22 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                            var0 = arg0;
                            var3 = _closure2_slot14;
                            var2 = var0.level;
                            var1 = 'h';
                            var2 = var1 + var2;
                            var5 = var0.content;
                            var4 = arg1;
                            var1 = undefined;
                            var0 = arg2;
                            var0 = var4.bind(var1)(var5, var0);
                            var0 = var3.bind(var1)(var2, var0);
                            return var0;
                        };
                        var2.html = var22;
                        var20.heading = var2;
                        var2 = {
                            'order': 1,
                            'match': null,
                            'parse': null,
                            'react': null,
                            'html': null
                        };
                        var12 = 2;
                        var22 = var18.NPTABLE_REGEX;
                        var22 = var21.bind(var9)(var22);
                        var2.match = var22;
                        var22 = var18.parseNpTable;
                        var2.parse = var22;
                        var20.nptable = var2;
                        var2 = {
                            'order': 2,
                            'match': null,
                            'parse': null,
                            'react': null,
                            'html': null
                        };
                        var22 = 3;
                        var12 = var22;
                        var23 = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/;
                        var23 = var21.bind(var9)(var23);
                        var2.match = var23;
                        var23 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                            _fun27070: for (var _fun27070_ip = 0;;) switch (_fun27070_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = {};
                                    var1 = 'heading';
                                    var0.type = var1;
                                    var1 = 2;
                                    var4 = var2[var1];
                                    var3 = '=';
                                    if (!(var3 === var4)) {
                                        _fun27070_ip = 31;
                                        continue _fun27070
                                    }
                                case 28:
                                    var1 = 1;
                                case 31:
                                    var0.level = var1;
                                    var5 = _closure2_slot22;
                                    var1 = 1;
                                    var4 = var2[var1];
                                    var3 = undefined;
                                    var2 = arg1;
                                    var1 = arg2;
                                    var1 = var5.bind(var3)(var2, var4, var1);
                                    var0.content = var1;
                                    return var0;
                            }
                        };
                        var2.parse = var23;
                        var20.lheading = var2;
                        var2 = {};
                        var23 = 4;
                        var12 = var23;
                        var2.order = var22;
                        var22 = /^( *[-*_]){3,} *(?:\n *)+\n/;
                        var22 = var21.bind(var9)(var22);
                        var2.match = var22;
                        var22 = var11;
                        var2.parse = var22;
                        var24 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                            var4 = _closure2_slot13;
                            var1 = arg2;
                            var3 = var1.key;
                            var2 = _closure2_slot15;
                            var1 = undefined;
                            var0 = 'hr';
                            var0 = var4.bind(var1)(var0, var3, var2);
                            return var0;
                        };
                        var2.react = var24;
                        var24 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                            var0 = '<hr>';
                            return var0;
                        };
                        var2.html = var24;
                        var20.hr = var2;
                        var2 = {};
                        var12 = 5;
                        var2.order = var23;
                        var23 = /^(?:    [^\n]+\n*)+(?:\n *)+\n/;
                        var23 = var21.bind(var9)(var23);
                        var2.match = var23;
                        var23 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                            var0 = {};
                            var1 = undefined;
                            var0.lang = var1;
                            var2 = arg0;
                            var1 = 0;
                            var3 = var2[var1];
                            var2 = var3.replace;
                            var1 = /^    /gm;
                            var4 = '';
                            var3 = var2.bind(var3)(var1, var4);
                            var2 = var3.replace;
                            var1 = /\n+$/;
                            var1 = var2.bind(var3)(var1, var4);
                            var0.content = var1;
                            return var0;
                        };
                        var2.parse = var23;
                        var23 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                            _fun27074: for (var _fun27074_ip = 0;;) switch (_fun27074_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.lang;
                                    var4 = undefined;
                                    var5 = undefined;
                                    if (!var1) {
                                        _fun27074_ip = 32;
                                        continue _fun27074
                                    }
                                case 16:
                                    var2 = var0.lang;
                                    var1 = 'markdown-code-';
                                    var5 = var1 + var2;
                                case 32:
                                    var3 = _closure2_slot13;
                                    var1 = arg2;
                                    var2 = var1.key;
                                    var1 = {};
                                    var7 = _closure2_slot13;
                                    var6 = {};
                                    var6.className = var5;
                                    var0 = var0.content;
                                    var6.children = var0;
                                    var5 = 'code';
                                    var0 = null;
                                    var0 = var7.bind(var4)(var5, var0, var6);
                                    var1.children = var0;
                                    var0 = 'pre';
                                    var0 = var3.bind(var4)(var0, var2, var1);
                                    return var0;
                            }
                        };
                        var2.react = var23;
                        var23 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                            _fun27075: for (var _fun27075_ip = 0;;) switch (_fun27075_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2.lang;
                                    var3 = undefined;
                                    var1 = undefined;
                                    if (!var0) {
                                        _fun27075_ip = 32;
                                        continue _fun27075
                                    }
                                case 16:
                                    var4 = var2.lang;
                                    var0 = 'markdown-code-';
                                    var1 = var0 + var4;
                                case 32:
                                    var5 = _closure2_slot14;
                                    var4 = _closure2_slot19;
                                    var2 = var2.content;
                                    var4 = var4.bind(var3)(var2);
                                    var2 = {};
                                    var2.class = var1;
                                    var1 = 'code';
                                    var2 = var5.bind(var3)(var1, var4, var2);
                                    var1 = _closure2_slot14;
                                    var0 = 'pre';
                                    var0 = var1.bind(var3)(var0, var2);
                                    return var0;
                            }
                        };
                        var2.html = var23;
                        var20.codeBlock = var2;
                        var2 = {
                            'order': 5,
                            'match': null,
                            'parse': null,
                            'react': null,
                            'html': null
                        };
                        var23 = 6;
                        var12 = var23;
                        var24 = /^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/;
                        var24 = var21.bind(var9)(var24);
                        var2.match = var24;
                        var24 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                            _fun27076: for (var _fun27076_ip = 0;;) switch (_fun27076_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = {};
                                    var1 = 'codeBlock';
                                    var0.type = var1;
                                    var1 = 2;
                                    var1 = var2[var1];
                                    if (var1) {
                                        _fun27076_ip = 25;
                                        continue _fun27076
                                    }
                                case 23:
                                    var1 = undefined;
                                case 25:
                                    var0.lang = var1;
                                    var1 = 3;
                                    var1 = var2[var1];
                                    var0.content = var1;
                                    return var0;
                            }
                        };
                        var2.parse = var24;
                        var20.fence = var2;
                        var2 = {};
                        var24 = 7;
                        var12 = var24;
                        var2.order = var23;
                        var23 = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/;
                        var23 = var21.bind(var9)(var23);
                        var2.match = var23;
                        var23 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                            var0 = {};
                            var2 = arg0;
                            var1 = 0;
                            var4 = var2[var1];
                            var3 = var4.replace;
                            var2 = /^ *> ?/gm;
                            var1 = '';
                            var4 = var3.bind(var4)(var2, var1);
                            var3 = arg1;
                            var2 = undefined;
                            var1 = arg2;
                            var1 = var3.bind(var2)(var4, var1);
                            var0.content = var1;
                            return var0;
                        };
                        var2.parse = var23;
                        var23 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                            var6 = arg2;
                            var4 = _closure2_slot13;
                            var3 = var6.key;
                            var2 = {};
                            var0 = arg0;
                            var5 = var0.content;
                            var0 = arg1;
                            var1 = undefined;
                            var0 = var0.bind(var1)(var5, var6);
                            var2.children = var0;
                            var0 = 'blockquote';
                            var0 = var4.bind(var1)(var0, var3, var2);
                            return var0;
                        };
                        var2.react = var23;
                        var23 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                            var3 = _closure2_slot14;
                            var0 = arg0;
                            var4 = var0.content;
                            var1 = arg1;
                            var2 = undefined;
                            var0 = arg2;
                            var1 = var1.bind(var2)(var4, var0);
                            var0 = 'blockquote';
                            var0 = var3.bind(var2)(var0, var1);
                            return var0;
                        };
                        var2.html = var23;
                        var20.blockQuote = var2;
                        var2 = {};
                        var23 = 8;
                        var12 = var23;
                        var2.order = var24;
                        var24 = function(arg0, arg1) { // Original name: match, environment: var1
                            _fun27080: for (var _fun27080_ip = 0;;) switch (_fun27080_ip) {
                                case 0:
                                    var0 = arg1;
                                    var1 = var0.prevCapture;
                                    var4 = null;
                                    var1 = var4 == var1;
                                    var5 = '';
                                    if (var1) {
                                        _fun27080_ip = 34;
                                        continue _fun27080
                                    }
                                case 22:
                                    var2 = var0.prevCapture;
                                    var1 = 0;
                                    var5 = var2[var1];
                                case 34:
                                    var3 = _closure2_slot30;
                                    var2 = var3.exec;
                                    var3 = var2.bind(var3)(var5);
                                    var2 = var0._list;
                                    if (var2) {
                                        _fun27080_ip = 70;
                                        continue _fun27080
                                    }
                                case 61:
                                    var0 = var0.inline;
                                    var2 = !var0;
                                case 70:
                                    var0 = null;
                                    if (!var3) {
                                        _fun27080_ip = 109;
                                        continue _fun27080
                                    }
                                case 75:
                                    var0 = null;
                                    if (!var2) {
                                        _fun27080_ip = 109;
                                        continue _fun27080
                                    }
                                case 80:
                                    var2 = 1;
                                    var3 = var3[var2];
                                    var2 = arg0;
                                    var3 = var3 + var2;
                                    var2 = _closure2_slot29;
                                    var1 = var2.exec;
                                    var0 = var1.bind(var2)(var3);
                                case 109:
                                    return var0;
                            }
                        };
                        var2.match = var24;
                        var24 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                            _fun27081: for (var _fun27081_ip = 0;;) switch (_fun27081_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = arg1;
                                    var _closure3_slot0 = var0;
                                    var0 = arg2;
                                    var _closure3_slot1 = var0;
                                    var0 = 2;
                                    var0 = var3[var0];
                                    var4 = var0.length;
                                    var2 = 1;
                                    var4 = var4 > var2;
                                    var2 = undefined;
                                    if (!var4) {
                                        _fun27081_ip = 46;
                                        continue _fun27081
                                    }
                                case 43:
                                    var2 = var0 - 0;
                                case 46:
                                    var0 = 0;
                                    var7 = var3[var0];
                                    var6 = var7.replace;
                                    var5 = _closure2_slot27;
                                    var3 = '\n';
                                    var5 = var6.bind(var7)(var5, var3);
                                    var3 = var5.match;
                                    var0 = _closure2_slot24;
                                    var3 = var3.bind(var5)(var0);
                                    var _closure3_slot2 = var3;
                                    var0 = false;
                                    var _closure3_slot3 = var0;
                                    var0 = {};
                                    var0.ordered = var4;
                                    var0.start = var2;
                                    var2 = var3.map;
                                    var1 = function(arg0, arg1) { // Environment: var1
                                        _fun27082: for (var _fun27082_ip = 0;;) switch (_fun27082_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var2 = _closure2_slot23;
                                                var0 = var2.exec;
                                                var4 = var0.bind(var2)(var3);
                                                var0 = 0;
                                                var2 = 0;
                                                if (!var4) {
                                                    _fun27082_ip = 37;
                                                    continue _fun27082
                                                }
                                            case 28:
                                                var0 = var4[var0];
                                                var2 = var0.length;
                                            case 37:
                                                var0 = global;
                                                var5 = var0.RegExp;
                                                var0 = '^ {1,';
                                                var4 = var0 + var2;
                                                var0 = var5.prototype;
                                                var2 = Object.create(var0, {
                                                    constructor: {
                                                        value: var5
                                                    }
                                                });
                                                var0 = '}';
                                                var11 = var4 + var0;
                                                var10 = 'gm';
                                                var12 = var2;
                                                var0 = new var12[var5](var11, var10, var9);
                                                var2 = var0 instanceof Object ? var0 : var2;
                                                var0 = var3.replace;
                                                var9 = '';
                                                var3 = var0.bind(var3)(var2, var9);
                                                var2 = var3.replace;
                                                var0 = _closure2_slot23;
                                                var7 = var2.bind(var3)(var0, var9);
                                                var2 = _closure3_slot2;
                                                var3 = var2.length;
                                                var2 = 1;
                                                var3 = var3 - var2;
                                                var2 = arg1;
                                                var2 = var2 === var3;
                                                var3 = var7.indexOf;
                                                var6 = '\n\n';
                                                var4 = var3.bind(var7)(var6);
                                                var3 = -1;
                                                var5 = var3 !== var4;
                                                if (var5) {
                                                    _fun27082_ip = 187;
                                                    continue _fun27082
                                                }
                                            case 177:
                                                if (!var2) {
                                                    _fun27082_ip = 184;
                                                    continue _fun27082
                                                }
                                            case 180:
                                                var2 = _closure3_slot3;
                                            case 184:
                                                var5 = var2;
                                            case 187:
                                                _closure3_slot3 = var5;
                                                var8 = _closure3_slot1;
                                                var3 = var8.inline;
                                                var2 = var8._list;
                                                var4 = true;
                                                var8._list = var4;
                                                var8 = _closure3_slot1;
                                                if (var5) {
                                                    _fun27082_ip = 245;
                                                    continue _fun27082
                                                }
                                            case 222:
                                                var8.inline = var4;
                                                var5 = var7.replace;
                                                var4 = _closure2_slot28;
                                                var5 = var5.bind(var7)(var4, var9);
                                                _fun27082_ip = 268;
                                                continue _fun27082;
                                            case 245:
                                                var4 = false;
                                                var8.inline = var4;
                                                var4 = var7.replace;
                                                var1 = _closure2_slot28;
                                                var5 = var4.bind(var7)(var1, var6);
                                            case 268:
                                                var4 = _closure3_slot0;
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var4.bind(var0)(var5, var1);
                                                var1.inline = var3;
                                                var1._list = var2;
                                                return var0;
                                        }
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var0.items = var1;
                                    return var0;
                            }
                        };
                        var2.parse = var24;
                        var24 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                            _fun27083: for (var _fun27083_ip = 0;;) switch (_fun27083_ip) {
                                case 0:
                                    var5 = arg0;
                                    var1 = arg2;
                                    var2 = arg1;
                                    var _closure3_slot0 = var2;
                                    var _closure3_slot1 = var1;
                                    var2 = var5.ordered;
                                    var4 = 'ul';
                                    if (!var2) {
                                        _fun27083_ip = 40;
                                        continue _fun27083
                                    }
                                case 34:
                                    var4 = 'ol';
                                case 40:
                                    var3 = _closure2_slot13;
                                    var2 = var1.key;
                                    var1 = {};
                                    var6 = var5.start;
                                    var1.start = var6;
                                    var6 = var5.items;
                                    var5 = var6.map;
                                    var0 = function(arg0, arg1) { // Environment: var0
                                        var4 = _closure2_slot13;
                                        var0 = arg1;
                                        var3 = '' + var0;
                                        var2 = {};
                                        var6 = _closure3_slot0;
                                        var5 = _closure3_slot1;
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var6.bind(var1)(var0, var5);
                                        var2.children = var0;
                                        var0 = 'li';
                                        var0 = var4.bind(var1)(var0, var3, var2);
                                        return var0;
                                    };
                                    var0 = var5.bind(var6)(var0);
                                    var1.children = var0;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var4, var2, var1);
                                    return var0;
                            }
                        };
                        var2.react = var24;
                        var24 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                            _fun27085: for (var _fun27085_ip = 0;;) switch (_fun27085_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = arg1;
                                    var _closure3_slot0 = var2;
                                    var2 = arg2;
                                    var _closure3_slot1 = var2;
                                    var3 = var0.items;
                                    var2 = var3.map;
                                    var1 = function(arg0) { // Environment: var1
                                        var3 = _closure2_slot14;
                                        var4 = _closure3_slot0;
                                        var1 = _closure3_slot1;
                                        var2 = undefined;
                                        var0 = arg0;
                                        var1 = var4.bind(var2)(var0, var1);
                                        var0 = 'li';
                                        var0 = var3.bind(var2)(var0, var1);
                                        return var0;
                                    };
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.join;
                                    var1 = '';
                                    var4 = var2.bind(var3)(var1);
                                    var1 = var0.ordered;
                                    var3 = 'ul';
                                    if (!var1) {
                                        _fun27085_ip = 75;
                                        continue _fun27085
                                    }
                                case 69:
                                    var3 = 'ol';
                                case 75:
                                    var2 = {};
                                    var0 = var0.start;
                                    var2.start = var0;
                                    var1 = _closure2_slot14;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var3, var4, var2);
                                    return var0;
                            }
                        };
                        var2.html = var24;
                        var20.list = var2;
                        var2 = {};
                        var24 = 9;
                        var12 = var24;
                        var2.order = var23;
                        var23 = /^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/;
                        var23 = var21.bind(var9)(var23);
                        var2.match = var23;
                        var23 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                            _fun27087: for (var _fun27087_ip = 0;;) switch (_fun27087_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = arg2;
                                    var1 = 1;
                                    var6 = var5[var1];
                                    var3 = var6.replace;
                                    var2 = /\s+/g;
                                    var1 = ' ';
                                    var2 = var3.bind(var6)(var2, var1);
                                    var1 = var2.toLowerCase;
                                    var3 = var1.bind(var2)();
                                    var1 = 2;
                                    var2 = var5[var1];
                                    var _closure3_slot0 = var2;
                                    var1 = 3;
                                    var1 = var5[var1];
                                    var _closure3_slot1 = var1;
                                    var5 = var0._refs;
                                    if (!var5) {
                                        _fun27087_ip = 97;
                                        continue _fun27087
                                    }
                                case 87:
                                    var6 = var0._refs;
                                    var5 = var6[var3];
                                case 97:
                                    if (!var5) {
                                        _fun27087_ip = 125;
                                        continue _fun27087
                                    }
                                case 100:
                                    var5 = var0._refs;
                                    var6 = var5[var3];
                                    var5 = var6.forEach;
                                    var4 = function(arg0) { // Environment: var4
                                        var1 = arg0;
                                        var2 = _closure3_slot0;
                                        var1.target = var2;
                                        var0 = _closure3_slot1;
                                        var1.title = var0;
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var4 = var5.bind(var6)(var4);
                                case 125:
                                    var4 = var0._defs;
                                    if (var4) {
                                        _fun27087_ip = 136;
                                        continue _fun27087
                                    }
                                case 134:
                                    var4 = {};
                                case 136:
                                    var0._defs = var4;
                                    var4 = var0._defs;
                                    var0 = {};
                                    var0.target = var2;
                                    var0.title = var1;
                                    var4[var3] = var0;
                                    var0 = {};
                                    var0.def = var3;
                                    var0.target = var2;
                                    var0.title = var1;
                                    return var0;
                            }
                        };
                        var2.parse = var23;
                        var23 = function() { // Original name: react, environment: var1
                            var0 = null;
                            return var0;
                        };
                        var2.react = var23;
                        var23 = function() { // Original name: html, environment: var1
                            var0 = '';
                            return var0;
                        };
                        var2.html = var23;
                        var20.def = var2;
                        var2 = {};
                        var23 = 10;
                        var12 = var23;
                        var2.order = var24;
                        var24 = var18.TABLE_REGEX;
                        var24 = var21.bind(var9)(var24);
                        var2.match = var24;
                        var18 = var18.parseTable;
                        var2.parse = var18;
                        var18 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                            var3 = arg0;
                            var1 = arg2;
                            var _closure3_slot0 = var3;
                            var0 = arg1;
                            var _closure3_slot1 = var0;
                            var _closure3_slot2 = var1;
                            var0 = function(arg0) { // Original name: getStyle, environment: var2
                                _fun27092: for (var _fun27092_ip = 0;;) switch (_fun27092_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = _closure3_slot0;
                                        var0 = var0.align;
                                        var3 = var0[var2];
                                        var0 = null;
                                        if (!(var0 != var3)) {
                                            _fun27092_ip = 48;
                                            continue _fun27092
                                        }
                                    case 26:
                                        var0 = {};
                                        var1 = _closure3_slot0;
                                        var1 = var1.align;
                                        var1 = var1[var2];
                                        var0.textAlign = var1;
                                        _fun27092_ip = 50;
                                        continue _fun27092;
                                    case 48:
                                        var0 = {};
                                    case 50:
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var0;
                            var5 = var3.header;
                            var4 = var5.map;
                            var0 = function(arg0, arg1) { // Environment: var2
                                var6 = arg1;
                                var4 = _closure2_slot13;
                                var3 = '' + var6;
                                var2 = {};
                                var5 = _closure3_slot3;
                                var1 = undefined;
                                var5 = var5.bind(var1)(var6);
                                var2.style = var5;
                                var5 = 'col';
                                var2.scope = var5;
                                var6 = _closure3_slot1;
                                var5 = _closure3_slot2;
                                var0 = arg0;
                                var0 = var6.bind(var1)(var0, var5);
                                var2.children = var0;
                                var0 = 'th';
                                var0 = var4.bind(var1)(var0, var3, var2);
                                return var0;
                            };
                            var0 = var4.bind(var5)(var0);
                            var4 = var3.cells;
                            var3 = var4.map;
                            var2 = function(arg0, arg1) { // Environment: var2
                                var5 = arg0;
                                var4 = _closure2_slot13;
                                var0 = arg1;
                                var3 = '' + var0;
                                var2 = {};
                                var1 = var5.map;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var6 = arg1;
                                    var4 = _closure2_slot13;
                                    var3 = '' + var6;
                                    var2 = {};
                                    var5 = _closure3_slot3;
                                    var1 = undefined;
                                    var5 = var5.bind(var1)(var6);
                                    var2.style = var5;
                                    var6 = _closure3_slot1;
                                    var5 = _closure3_slot2;
                                    var0 = arg0;
                                    var0 = var6.bind(var1)(var0, var5);
                                    var2.children = var0;
                                    var0 = 'td';
                                    var0 = var4.bind(var1)(var0, var3, var2);
                                    return var0;
                                };
                                var0 = var1.bind(var5)(var0);
                                var2.children = var0;
                                var1 = undefined;
                                var0 = 'tr';
                                var0 = var4.bind(var1)(var0, var3, var2);
                                return var0;
                            };
                            var5 = var3.bind(var4)(var2);
                            var4 = _closure2_slot13;
                            var3 = var1.key;
                            var2 = {};
                            var8 = _closure2_slot13;
                            var7 = {};
                            var10 = {};
                            var10.children = var0;
                            var1 = undefined;
                            var9 = 'tr';
                            var0 = null;
                            var0 = var8.bind(var1)(var9, var0, var10);
                            var7.children = var0;
                            var0 = 'thead';
                            var7 = var8.bind(var1)(var0, var0, var7);
                            var0 = new Array(2);
                            var0[0] = var7;
                            var7 = _closure2_slot13;
                            var6 = {};
                            var6.children = var5;
                            var5 = 'tbody';
                            var5 = var7.bind(var1)(var5, var5, var6);
                            var0[1] = var5;
                            var2.children = var0;
                            var0 = 'table';
                            var0 = var4.bind(var1)(var0, var3, var2);
                            return var0;
                        };
                        var2.react = var18;
                        var18 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var1 = arg2;
                            var _closure3_slot2 = var1;
                            var1 = function(arg0) { // Original name: getStyle, environment: var0
                                _fun27097: for (var _fun27097_ip = 0;;) switch (_fun27097_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = _closure3_slot0;
                                        var0 = var0.align;
                                        var3 = var0[var2];
                                        var0 = null;
                                        var3 = var0 == var3;
                                        var0 = '';
                                        if (var3) {
                                            _fun27097_ip = 65;
                                            continue _fun27097
                                        }
                                    case 33:
                                        var1 = _closure3_slot0;
                                        var1 = var1.align;
                                        var2 = var1[var2];
                                        var1 = 'text-align:';
                                        var2 = var1 + var2;
                                        var1 = ';';
                                        var0 = var2 + var1;
                                    case 65:
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var1;
                            var4 = var2.header;
                            var3 = var4.map;
                            var1 = function(arg0, arg1) { // Environment: var0
                                var4 = _closure2_slot14;
                                var5 = _closure3_slot1;
                                var2 = _closure3_slot2;
                                var3 = undefined;
                                var1 = arg0;
                                var2 = var5.bind(var3)(var1, var2);
                                var1 = {};
                                var5 = _closure3_slot3;
                                var0 = arg1;
                                var0 = var5.bind(var3)(var0);
                                var1.style = var0;
                                var0 = 'col';
                                var1.scope = var0;
                                var0 = 'th';
                                var0 = var4.bind(var3)(var0, var2, var1);
                                return var0;
                            };
                            var4 = var3.bind(var4)(var1);
                            var1 = var4.join;
                            var3 = '';
                            var1 = var1.bind(var4)(var3);
                            var4 = var2.cells;
                            var2 = var4.map;
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var1 = var2.map;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var4 = _closure2_slot14;
                                    var5 = _closure3_slot1;
                                    var2 = _closure3_slot2;
                                    var3 = undefined;
                                    var1 = arg0;
                                    var2 = var5.bind(var3)(var1, var2);
                                    var1 = {};
                                    var5 = _closure3_slot3;
                                    var0 = arg1;
                                    var0 = var5.bind(var3)(var0);
                                    var1.style = var0;
                                    var0 = 'td';
                                    var0 = var4.bind(var3)(var0, var2, var1);
                                    return var0;
                                };
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.join;
                                var0 = '';
                                var3 = var1.bind(var2)(var0);
                                var2 = _closure2_slot14;
                                var1 = undefined;
                                var0 = 'tr';
                                var0 = var2.bind(var1)(var0, var3);
                                return var0;
                            };
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.join;
                            var5 = var0.bind(var2)(var3);
                            var4 = _closure2_slot14;
                            var3 = undefined;
                            var0 = 'tr';
                            var1 = var4.bind(var3)(var0, var1);
                            var0 = 'thead';
                            var1 = var4.bind(var3)(var0, var1);
                            var4 = _closure2_slot14;
                            var0 = 'tbody';
                            var0 = var4.bind(var3)(var0, var5);
                            var2 = _closure2_slot14;
                            var1 = var1 + var0;
                            var0 = 'table';
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2.html = var18;
                        var20.table = var2;
                        var2 = {};
                        var18 = 11;
                        var12 = var18;
                        var2.order = var23;
                        var23 = ['\n'];
                        var2.requiredFirstCharacters = var23;
                        var23 = /^(?:\n *)*\n/;
                        var23 = var21.bind(var9)(var23);
                        var2.match = var23;
                        var2.parse = var22;
                        var22 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                            var0 = '\n';
                            return var0;
                        };
                        var2.react = var22;
                        var22 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                            var0 = '\n';
                            return var0;
                        };
                        var2.html = var22;
                        var20.newline = var2;
                        var2 = {};
                        var12 = 12;
                        var2.order = var18;
                        var18 = /^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/;
                        var18 = var21.bind(var9)(var18);
                        var2.match = var18;
                        var18 = var15;
                        var2.parse = var18;
                        var18 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                            var6 = arg2;
                            var4 = _closure2_slot13;
                            var3 = var6.key;
                            var2 = {};
                            var0 = 'paragraph';
                            var2.className = var0;
                            var0 = arg0;
                            var5 = var0.content;
                            var0 = arg1;
                            var1 = undefined;
                            var0 = var0.bind(var1)(var5, var6);
                            var2.children = var0;
                            var0 = 'div';
                            var0 = var4.bind(var1)(var0, var3, var2);
                            return var0;
                        };
                        var2.react = var18;
                        var18 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                            var4 = _closure2_slot14;
                            var0 = arg0;
                            var2 = var0.content;
                            var1 = arg1;
                            var3 = undefined;
                            var0 = arg2;
                            var2 = var1.bind(var3)(var2, var0);
                            var1 = {};
                            var0 = 'paragraph';
                            var1.class = var0;
                            var0 = 'div';
                            var0 = var4.bind(var3)(var0, var2, var1);
                            return var0;
                        };
                        var2.html = var18;
                        var20.paragraph = var2;
                        var2 = {
                            'order': 12,
                            'requiredFirstCharacters': null,
                            'match': null,
                            'parse': null,
                            'react': null,
                            'html': null
                        };
                        var21 = 13;
                        var12 = var21;
                        var18 = ['\\'];
                        var2.requiredFirstCharacters = var18;
                        var18 = var17;
                        var22 = /^\\([^0-9A-Za-z\s])/;
                        var22 = var18.bind(var9)(var22);
                        var2.match = var22;
                        var22 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                            var0 = {};
                            var1 = 'text';
                            var0.type = var1;
                            var2 = arg0;
                            var1 = 1;
                            var1 = var2[var1];
                            var0.content = var1;
                            return var0;
                        };
                        var2.parse = var22;
                        var20.escape = var2;
                        var2 = {};
                        var12 = 14;
                        var2.order = var21;
                        var21 = function(arg0, arg1) { // Original name: match, environment: var1
                            _fun27106: for (var _fun27106_ip = 0;;) switch (_fun27106_ip) {
                                case 0:
                                    var0 = arg1;
                                    var1 = var0.inTable;
                                    var0 = null;
                                    if (!var1) {
                                        _fun27106_ip = 42;
                                        continue _fun27106
                                    }
                                case 14:
                                    var3 = /^ *\| */;
                                    var2 = var3.exec;
                                    var1 = arg0;
                                    var0 = var2.bind(var3)(var1);
                                case 42:
                                    return var0;
                            }
                        };
                        var2.match = var21;
                        var21 = function() { // Original name: parse, environment: var1
                            var0 = {};
                            var1 = 'tableSeparator';
                            var0.type = var1;
                            return var0;
                        };
                        var2.parse = var21;
                        var21 = function() { // Original name: react, environment: var1
                            var0 = ' | ';
                            return var0;
                        };
                        var2.react = var21;
                        var21 = function() { // Original name: html, environment: var1
                            var0 = ' &vert; ';
                            return var0;
                        };
                        var2.html = var21;
                        var20.tableSeparator = var2;
                        var2 = {
                            'order': 14,
                            'requiredFirstCharacters': null,
                            'match': null,
                            'parse': null,
                            'react': null,
                            'html': null
                        };
                        var12 = 15;
                        var21 = ['<'];
                        var2.requiredFirstCharacters = var21;
                        var21 = /^<([^: >]+:\\/ [ ^ > ] + ) > /;
                var21 = var18.bind(var9)(var21);
                var2.match = var21;
                var21 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                    var2 = arg0;
                    var0 = {};
                    var1 = 'link';
                    var0.type = var1;
                    var4 = {};
                    var1 = 'text';
                    var4.type = var1;
                    var1 = 1;
                    var3 = var2[var1];
                    var4.content = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var0.content = var3;
                    var1 = var2[var1];
                    var0.target = var1;
                    return var0;
                };
                var2.parse = var21;
                var20.autolink = var2;
                var2 = {
                    'order': 15,
                    'match': null,
                    'parse': null,
                    'react': null,
                    'html': null
                };
                var12 = 16;
                var21 = /^<([^ >]+@[^ >]+)>/;
                var21 = var18.bind(var9)(var21);
                var2.match = var21;
                var21 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                    _fun27111: for (var _fun27111_ip = 0;;) switch (_fun27111_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = 1;
                            var2 = var1[var0];
                            var3 = var1[var0];
                            var1 = _closure2_slot31;
                            var0 = var1.test;
                            var0 = var0.bind(var1)(var3);
                            var1 = var3;
                            if (var0) {
                                _fun27111_ip = 47;
                                continue _fun27111
                            }
                        case 37:
                            var0 = 'mailto:';
                            var1 = var0 + var3;
                        case 47:
                            var0 = {};
                            var3 = 'link';
                            var0.type = var3;
                            var3 = {};
                            var4 = 'text';
                            var3.type = var4;
                            var3.content = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var0.content = var2;
                            var0.target = var1;
                            return var0;
                    }
                };
                var2.parse = var21;
                var20.mailto = var2;
                var2 = {
                    'order': 16,
                    'requiredFirstCharacters': null,
                    'match': null,
                    'parse': null,
                    'react': null,
                    'html': null
                };
                var22 = 17;
                var12 = var22;
                var21 = ['h'];
                var2.requiredFirstCharacters = var21;
                var21 = /^(https?:\\/\\ / [ ^ \s < ] + [ ^ < .,: ;
                    "')\]\s])/;
                    var21 = var18.bind(var9)(var21);
                    var2.match = var21;
                    var21 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                        var2 = arg0;
                        var0 = {};
                        var1 = 'link';
                        var0.type = var1;
                        var4 = {};
                        var1 = 'text';
                        var4.type = var1;
                        var1 = 1;
                        var3 = var2[var1];
                        var4.content = var3;
                        var3 = new Array(1);
                        var3[0] = var4;
                        var0.content = var3;
                        var1 = var2[var1];
                        var0.target = var1;
                        var1 = undefined;
                        var0.title = var1;
                        return var0;
                    };
                    var2.parse = var21;
                    var20.url = var2;
                    var2 = {};
                    var21 = 18;
                    var12 = var21;
                    var2.order = var22;
                    var22 = ['['];
                    var2.requiredFirstCharacters = var22;
                    var24 = var19.RegExp;
                    var22 = var24.prototype;
                    var23 = Object.create(var22, {
                        constructor: {
                            value: var24
                        }
                    });
                    var27 = '^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+[\'"]([\\s\\S]*?)[\'"])?\\s*\\)';
                    var28 = var23;
                    var22 = new var28[var24](var27, var26);
                    var22 = var22 instanceof Object ? var22 : var23;
                    var22 = var18.bind(var9)(var22);
                    var2.match = var22;
                    var22 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                        var2 = arg0;
                        var0 = {};
                        var1 = 1;
                        var5 = var2[var1];
                        var3 = arg1;
                        var4 = undefined;
                        var1 = arg2;
                        var1 = var3.bind(var4)(var5, var1);
                        var0.content = var1;
                        var3 = _closure2_slot21;
                        var1 = 2;
                        var1 = var2[var1];
                        var1 = var3.bind(var4)(var1);
                        var0.target = var1;
                        var1 = 3;
                        var1 = var2[var1];
                        var0.title = var1;
                        return var0;
                    };
                    var2.parse = var22;
                    var22 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                        var0 = arg0;
                        var6 = arg2;
                        var4 = _closure2_slot13;
                        var3 = var6.key;
                        var2 = {};
                        var7 = _closure2_slot16;
                        var5 = var0.target;
                        var1 = undefined;
                        var5 = var7.bind(var1)(var5);
                        var2.href = var5;
                        var5 = var0.title;
                        var2.title = var5;
                        var5 = var0.content;
                        var0 = arg1;
                        var0 = var0.bind(var1)(var5, var6);
                        var2.children = var0;
                        var0 = 'a';
                        var0 = var4.bind(var1)(var0, var3, var2);
                        return var0;
                    };
                    var2.react = var22;
                    var22 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                        var0 = arg0;
                        var4 = {};
                        var5 = _closure2_slot16;
                        var2 = var0.target;
                        var3 = undefined;
                        var2 = var5.bind(var3)(var2);
                        var4.href = var2;
                        var2 = var0.title;
                        var4.title = var2;
                        var2 = _closure2_slot14;
                        var5 = var0.content;
                        var1 = arg1;
                        var0 = arg2;
                        var1 = var1.bind(var3)(var5, var0);
                        var0 = 'a';
                        var0 = var2.bind(var3)(var0, var1, var4);
                        return var0;
                    };
                    var2.html = var22;
                    var20.link = var2;
                    var2 = {};
                    var12 = 19;
                    var2.order = var21;
                    var23 = var19.RegExp;
                    var21 = var23.prototype;
                    var22 = Object.create(var21, {
                        constructor: {
                            value: var23
                        }
                    });
                    var27 = '^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+[\'"]([\\s\\S]*?)[\'"])?\\s*\\)';
                    var28 = var22;
                    var21 = new var28[var23](var27, var26);
                    var21 = var21 instanceof Object ? var21 : var22;
                    var21 = var18.bind(var9)(var21);
                    var2.match = var21;
                    var21 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                        var2 = arg0;
                        var0 = {};
                        var1 = 1;
                        var1 = var2[var1];
                        var0.alt = var1;
                        var4 = _closure2_slot21;
                        var1 = 2;
                        var3 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var0.target = var1;
                        var1 = 3;
                        var1 = var2[var1];
                        var0.title = var1;
                        return var0;
                    };
                    var2.parse = var21;
                    var21 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                        var0 = arg0;
                        var4 = _closure2_slot13;
                        var2 = arg2;
                        var3 = var2.key;
                        var2 = {};
                        var6 = _closure2_slot16;
                        var5 = var0.target;
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var2.src = var5;
                        var5 = var0.alt;
                        var2.alt = var5;
                        var0 = var0.title;
                        var2.title = var0;
                        var0 = 'img';
                        var0 = var4.bind(var1)(var0, var3, var2);
                        return var0;
                    };
                    var2.react = var21;
                    var21 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                        var1 = arg0;
                        var5 = {};
                        var3 = _closure2_slot16;
                        var2 = var1.target;
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var5.src = var2;
                        var2 = var1.alt;
                        var5.alt = var2;
                        var1 = var1.title;
                        var5.title = var1;
                        var3 = _closure2_slot14;
                        var9 = 'img';
                        var8 = '';
                        var6 = false;
                        var10 = undefined;
                        var7 = var5;
                        var0 = var10[var3](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var2.html = var21;
                    var20.image = var2;
                    var2 = {
                        'order': 19,
                        'match': null,
                        'parse': null,
                        'react': null,
                        'html': null
                    };
                    var12 = 20;
                    var23 = var19.RegExp;
                    var21 = var23.prototype;
                    var22 = Object.create(var21, {
                        constructor: {
                            value: var23
                        }
                    });
                    var27 = '^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]';
                    var28 = var22;
                    var21 = new var28[var23](var27, var26);
                    var21 = var21 instanceof Object ? var21 : var22;
                    var21 = var18.bind(var9)(var21);
                    var2.match = var21;
                    var21 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                        var4 = arg0;
                        var3 = arg2;
                        var2 = _closure2_slot32;
                        var1 = {};
                        var0 = 'link';
                        var1.type = var0;
                        var0 = 1;
                        var6 = var4[var0];
                        var5 = arg1;
                        var0 = undefined;
                        var5 = var5.bind(var0)(var6, var3);
                        var1.content = var5;
                        var0 = var2.bind(var0)(var4, var3, var1);
                        return var0;
                    };
                    var2.parse = var21;
                    var20.reflink = var2;
                    var2 = {
                        'order': 20,
                        'match': null,
                        'parse': null,
                        'react': null,
                        'html': null
                    };
                    var21 = 21;
                    var12 = var21;
                    var24 = var19.RegExp;
                    var22 = var24.prototype;
                    var23 = Object.create(var22, {
                        constructor: {
                            value: var24
                        }
                    });
                    var27 = '^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]';
                    var28 = var23;
                    var22 = new var28[var24](var27, var26);
                    var22 = var22 instanceof Object ? var22 : var23;
                    var22 = var18.bind(var9)(var22);
                    var2.match = var22;
                    var22 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                        var4 = arg0;
                        var3 = _closure2_slot32;
                        var2 = {};
                        var0 = 'image';
                        var2.type = var0;
                        var0 = 1;
                        var0 = var4[var0];
                        var2.alt = var0;
                        var1 = undefined;
                        var0 = arg2;
                        var0 = var3.bind(var1)(var4, var0, var2);
                        return var0;
                    };
                    var2.parse = var22;
                    var20.refimage = var2;
                    var2 = {};
                    var2.order = var21;
                    var21 = var19.RegExp;
                    var22 = '^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b';
                    if (!var10) {
                        _fun27033_ip = 2353;
                        continue _fun27033
                    }
                    case 2347:
                    var22 = '^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b';
                    case 2353:
                    var10 = var21.prototype;
                    var19 = Object.create(var10, {
                        constructor: {
                            value: var21
                        }
                    });
                    var10 = '|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)';
                    var27 = var22 + var10;
                    var28 = var19;
                    var10 = new var28[var21](var27, var26);
                    var10 = var10 instanceof Object ? var10 : var19;
                    var10 = var18.bind(var9)(var10);
                    var2.match = var10;
                    var10 = function(arg0) { // Original name: quality, environment: var1
                        var1 = arg0;
                        var0 = 0;
                        var0 = var1[var0];
                        var1 = var0.length;
                        var0 = 0.2;
                        var0 = var1 + var0;
                        return var0;
                    };
                    var2.quality = var10;
                    var10 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                        _fun27122: for (var _fun27122_ip = 0;;) switch (_fun27122_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = {};
                                var1 = 2;
                                var4 = var2[var1];
                                if (var4) {
                                    _fun27122_ip = 22;
                                    continue _fun27122
                                }
                            case 15:
                                var1 = 1;
                                var4 = var2[var1];
                            case 22:
                                var3 = arg1;
                                var2 = undefined;
                                var1 = arg2;
                                var1 = var3.bind(var2)(var4, var1);
                                var0.content = var1;
                                return var0;
                        }
                    };
                    var2.parse = var10;
                    var10 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                        var6 = arg2;
                        var4 = _closure2_slot13;
                        var3 = var6.key;
                        var2 = {};
                        var0 = arg0;
                        var5 = var0.content;
                        var0 = arg1;
                        var1 = undefined;
                        var0 = var0.bind(var1)(var5, var6);
                        var2.children = var0;
                        var0 = 'em';
                        var0 = var4.bind(var1)(var0, var3, var2);
                        return var0;
                    };
                    var2.react = var10;
                    var10 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                        var3 = _closure2_slot14;
                        var0 = arg0;
                        var4 = var0.content;
                        var1 = arg1;
                        var2 = undefined;
                        var0 = arg2;
                        var1 = var1.bind(var2)(var4, var0);
                        var0 = 'em';
                        var0 = var3.bind(var2)(var0, var1);
                        return var0;
                    };
                    var2.html = var10;
                    var20.em = var2;
                    var2 = {};
                    var10 = var12;
                    var2.order = var10;
                    var18 = ['*'];
                    var2.requiredFirstCharacters = var18;
                    var18 = /^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/;
                    var18 = var17.bind(var9)(var18);
                    var2.match = var18;
                    var18 = function(arg0) { // Original name: quality, environment: var1
                        var1 = arg0;
                        var0 = 0;
                        var0 = var1[var0];
                        var1 = var0.length;
                        var0 = 0.1;
                        var0 = var1 + var0;
                        return var0;
                    };
                    var2.quality = var18;
                    var2.parse = var15;
                    var18 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                        var6 = arg2;
                        var4 = _closure2_slot13;
                        var3 = var6.key;
                        var2 = {};
                        var0 = arg0;
                        var5 = var0.content;
                        var0 = arg1;
                        var1 = undefined;
                        var0 = var0.bind(var1)(var5, var6);
                        var2.children = var0;
                        var0 = 'strong';
                        var0 = var4.bind(var1)(var0, var3, var2);
                        return var0;
                    };
                    var2.react = var18;
                    var18 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                        var3 = _closure2_slot14;
                        var0 = arg0;
                        var4 = var0.content;
                        var1 = arg1;
                        var2 = undefined;
                        var0 = arg2;
                        var1 = var1.bind(var2)(var4, var0);
                        var0 = 'strong';
                        var0 = var3.bind(var2)(var0, var1);
                        return var0;
                    };
                    var2.html = var18;
                    var20.strong = var2;
                    var2 = {};
                    var18 = parseFloat(var10);
                    var10 = var18 + 1;
                    var12 = var10;
                    var2.order = var18;
                    var18 = ['_'];
                    var2.requiredFirstCharacters = var18;
                    var18 = /^__((?:\\[\s\S]|[^\\])+?)__(?!_)/;
                    var18 = var17.bind(var9)(var18);
                    var2.match = var18;
                    var18 = function(arg0) { // Original name: quality, environment: var1
                        var1 = arg0;
                        var0 = 0;
                        var0 = var1[var0];
                        var0 = var0.length;
                        return var0;
                    };
                    var2.quality = var18;
                    var2.parse = var15;
                    var18 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                        var6 = arg2;
                        var4 = _closure2_slot13;
                        var3 = var6.key;
                        var2 = {};
                        var0 = arg0;
                        var5 = var0.content;
                        var0 = arg1;
                        var1 = undefined;
                        var0 = var0.bind(var1)(var5, var6);
                        var2.children = var0;
                        var0 = 'u';
                        var0 = var4.bind(var1)(var0, var3, var2);
                        return var0;
                    };
                    var2.react = var18;
                    var18 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                        var3 = _closure2_slot14;
                        var0 = arg0;
                        var4 = var0.content;
                        var1 = arg1;
                        var2 = undefined;
                        var0 = arg2;
                        var1 = var1.bind(var2)(var4, var0);
                        var0 = 'u';
                        var0 = var3.bind(var2)(var0, var1);
                        return var0;
                    };
                    var2.html = var18;
                    var20.u = var2;
                    var2 = {};
                    var18 = parseFloat(var10);
                    var10 = var18 + 1;
                    var12 = var10;
                    var2.order = var18;
                    var18 = ['~'];
                    var2.requiredFirstCharacters = var18;
                    var18 = /^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/;
                    var18 = var17.bind(var9)(var18);
                    var2.match = var18;
                    var2.parse = var15;
                    var15 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                        var6 = arg2;
                        var4 = _closure2_slot13;
                        var3 = var6.key;
                        var2 = {};
                        var0 = arg0;
                        var5 = var0.content;
                        var0 = arg1;
                        var1 = undefined;
                        var0 = var0.bind(var1)(var5, var6);
                        var2.children = var0;
                        var0 = 'del';
                        var0 = var4.bind(var1)(var0, var3, var2);
                        return var0;
                    };
                    var2.react = var15;
                    var15 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                        var3 = _closure2_slot14;
                        var0 = arg0;
                        var4 = var0.content;
                        var1 = arg1;
                        var2 = undefined;
                        var0 = arg2;
                        var1 = var1.bind(var2)(var4, var0);
                        var0 = 'del';
                        var0 = var3.bind(var2)(var0, var1);
                        return var0;
                    };
                    var2.html = var15;
                    var20.del = var2;
                    var2 = {};
                    var15 = parseFloat(var10);
                    var10 = var15 + 1;
                    var12 = var10;
                    var2.order = var15;
                    var15 = ['`'];
                    var2.requiredFirstCharacters = var15;
                    var15 = /^(`+)([\s\S]*?[^`])\1(?!`)/;
                    var15 = var17.bind(var9)(var15);
                    var2.match = var15;
                    var15 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                        var0 = {};
                        var2 = arg0;
                        var1 = 2;
                        var4 = var2[var1];
                        var3 = var4.replace;
                        var2 = _closure2_slot26;
                        var1 = '$1';
                        var1 = var3.bind(var4)(var2, var1);
                        var0.content = var1;
                        return var0;
                    };
                    var2.parse = var15;
                    var15 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                        var4 = _closure2_slot13;
                        var0 = arg2;
                        var3 = var0.key;
                        var2 = {};
                        var0 = arg0;
                        var0 = var0.content;
                        var2.children = var0;
                        var1 = undefined;
                        var0 = 'code';
                        var0 = var4.bind(var1)(var0, var3, var2);
                        return var0;
                    };
                    var2.react = var15;
                    var15 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                        var3 = _closure2_slot14;
                        var1 = _closure2_slot19;
                        var0 = arg0;
                        var0 = var0.content;
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = 'code';
                        var0 = var3.bind(var2)(var0, var1);
                        return var0;
                    };
                    var2.html = var15;
                    var20.inlineCode = var2;
                    var2 = {};
                    var15 = parseFloat(var10);
                    var10 = var15 + 1;
                    var12 = var10;
                    var2.order = var15;
                    var15 = [' '];
                    var2.requiredFirstCharacters = var15;
                    var15 = var13;
                    var13 = /^ {2,}\n/;
                    var13 = var15.bind(var9)(var13);
                    var2.match = var13;
                    var2.parse = var11;
                    var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                        var4 = _closure2_slot13;
                        var1 = arg2;
                        var3 = var1.key;
                        var2 = _closure2_slot15;
                        var1 = undefined;
                        var0 = 'br';
                        var0 = var4.bind(var1)(var0, var3, var2);
                        return var0;
                    };
                    var2.react = var11;
                    var11 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                        var0 = '<br>';
                        return var0;
                    };
                    var2.html = var11;
                    var20.br = var2;
                    var2 = {};
                    var10 = parseFloat(var10);
                    var12 = var10 + 1;
                    var2.order = var10;
                    var10 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/;
                    var10 = var15.bind(var9)(var10);
                    var2.match = var10;
                    var10 = function(arg0, arg1, arg2) { // Original name: parse, environment: var1
                        var0 = {};
                        var2 = arg0;
                        var1 = 0;
                        var1 = var2[var1];
                        var0.content = var1;
                        return var0;
                    };
                    var2.parse = var10;
                    var10 = function(arg0, arg1, arg2) { // Original name: react, environment: var1
                        var0 = arg0;
                        var0 = var0.content;
                        return var0;
                    };
                    var2.react = var10;
                    var10 = function(arg0, arg1, arg2) { // Original name: html, environment: var1
                        var2 = _closure2_slot19;
                        var0 = arg0;
                        var1 = var0.content;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.html = var10;
                    var20.text = var2;
                    var _closure2_slot33 = var20;
                    var18 = function(arg0, arg1, arg2) { // Original name: outputFor, environment: var1
                        _fun27141: for (var _fun27141_ip = 0;;) switch (_fun27141_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = arg1;
                                var _closure3_slot0 = var1;
                                var _closure3_slot1 = var3;
                                var2 = arg2;
                                var _closure3_slot2 = var2;
                                if (var3) {
                                    _fun27141_ip = 62;
                                    continue _fun27141
                                }
                            case 26:
                                var2 = global;
                                var5 = var2.Error;
                                var2 = var5.prototype;
                                var4 = Object.create(var2, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var6 = 'simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`';
                                var7 = var4;
                                var2 = new var7[var5](var6, var5);
                                var2 = var2 instanceof Object ? var2 : var4;
                                throw var2;
                            case 62:
                                var1 = var1.Array;
                                if (var1) {
                                    _fun27141_ip = 82;
                                    continue _fun27141
                                }
                            case 70:
                                var2 = _closure2_slot33;
                                var1 = var2.Array;
                            case 82:
                                var1 = var1[var3];
                                if (var1) {
                                    _fun27141_ip = 139;
                                    continue _fun27141
                                }
                            case 89:
                                var2 = global;
                                var4 = var2.Error;
                                var2 = 'simple-markdown: outputFor: to join nodes of type `';
                                var5 = var2 + var3;
                                var2 = var4.prototype;
                                var3 = Object.create(var2, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var2 = '` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.';
                                var6 = var5 + var2;
                                var7 = var3;
                                var2 = new var7[var4](var6, var5);
                                var2 = var2 instanceof Object ? var2 : var3;
                                throw var2;
                            case 139:
                                var _closure3_slot4 = var1;
                                var1 = function(arg0, arg1) { // Original name: nestedOutput, environment: var0
                                    _fun27142: for (var _fun27142_ip = 0;;) switch (_fun27142_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var4 = arg1;
                                            if (var4) {
                                                _fun27142_ip = 16;
                                                continue _fun27142
                                            }
                                        case 9:
                                            var4 = _closure3_slot3;
                                        case 16:
                                            var _closure3_slot3 = var4;
                                            var0 = global;
                                            var2 = var0.Array;
                                            var0 = var2.isArray;
                                            var0 = var0.bind(var2)(var5);
                                            if (var0) {
                                                _fun27142_ip = 78;
                                                continue _fun27142
                                            }
                                        case 44:
                                            var2 = _closure3_slot0;
                                            var0 = var5.type;
                                            var3 = var2[var0];
                                            var0 = _closure3_slot1;
                                            var2 = var3[var0];
                                            var0 = _closure3_slot5;
                                            var0 = var2.bind(var3)(var5, var0, var4);
                                            _fun27142_ip = 95;
                                            continue _fun27142;
                                        case 78:
                                            var3 = _closure3_slot4;
                                            var2 = _closure3_slot5;
                                            var1 = undefined;
                                            var0 = var3.bind(var1)(var5, var2, var4);
                                        case 95:
                                            return var0;
                                    }
                                };
                                var _closure3_slot5 = var1;
                                var0 = function(arg0, arg1) { // Original name: outerOutput, environment: var0
                                    var4 = _closure2_slot11;
                                    var2 = _closure3_slot2;
                                    var3 = undefined;
                                    var1 = arg1;
                                    var2 = var4.bind(var3)(var1, var2);
                                    _closure3_slot3 = var2;
                                    var1 = _closure3_slot5;
                                    var0 = arg0;
                                    var0 = var1.bind(var3)(var0, var2);
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var19 = var0;
                    var2 = var19.bind(var9)(var20);
                    var _closure2_slot34 = var2;
                    var12 = function(arg0, arg1) { // Original name: defaultBlockParse, environment: var1
                        _fun27144: for (var _fun27144_ip = 0;;) switch (_fun27144_ip) {
                            case 0:
                                var3 = arg1;
                                if (var3) {
                                    _fun27144_ip = 8;
                                    continue _fun27144
                                }
                            case 6:
                                var3 = {};
                            case 8:
                                var0 = false;
                                var3.inline = var0;
                                var2 = _closure2_slot34;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0, var3);
                                return var0;
                        }
                    };
                    var _closure2_slot35 = var12;
                    var11 = function(arg0, arg1) { // Original name: defaultImplicitParse, environment: var1
                        _fun27145: for (var _fun27145_ip = 0;;) switch (_fun27145_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = arg1;
                                var4 = _closure2_slot25;
                                var1 = var4.test;
                                var1 = var1.bind(var4)(var3);
                                if (var2) {
                                    _fun27145_ip = 28;
                                    continue _fun27145
                                }
                            case 26:
                                var2 = {};
                            case 28:
                                var1 = !var1;
                                var2.inline = var1;
                                var1 = _closure2_slot34;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var3, var2);
                                return var0;
                        }
                    };
                    var _closure2_slot36 = var11;
                    var0 = 'react';
                    var10 = var18.bind(var9)(var20, var0);
                    var _closure2_slot37 = var10;
                    var0 = 'html';
                    var9 = var18.bind(var9)(var20, var0);
                    var _closure2_slot38 = var9;
                    var13 = function(arg0, arg1) { // Original name: markdownToReact, environment: var1
                        var3 = arg1;
                        var2 = _closure2_slot37;
                        var4 = _closure2_slot35;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0, var3);
                        var0 = var2.bind(var1)(var0, var3);
                        return var0;
                    };
                    var _closure2_slot39 = var13;
                    var0 = {};
                    var0.defaultRules = var20;
                    var0.parserFor = var19;
                    var0.outputFor = var18;
                    var0.inlineRegex = var17;
                    var0.blockRegex = var16;
                    var0.anyScopeRegex = var15;
                    var0.parseInline = var14;
                    var14 = function(arg0, arg1, arg2) { // Original name: parseBlock, environment: var1
                        _fun27147: for (var _fun27147_ip = 0;;) switch (_fun27147_ip) {
                            case 0:
                                var2 = arg2;
                                var1 = var2.inline;
                                if (var1) {
                                    _fun27147_ip = 14;
                                    continue _fun27147
                                }
                            case 12:
                                var1 = false;
                            case 14:
                                var0 = false;
                                var2.inline = var0;
                                var3 = arg1;
                                var0 = '\n\n';
                                var4 = var3 + var0;
                                var3 = arg0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var4, var2);
                                var2.inline = var1;
                                return var0;
                        }
                    };
                    var0.parseBlock = var14;
                    var0.markdownToReact = var13;
                    var13 = function(arg0, arg1) { // Original name: markdownToHtml, environment: var1
                        var3 = arg1;
                        var2 = _closure2_slot38;
                        var4 = _closure2_slot35;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0, var3);
                        var0 = var2.bind(var1)(var0, var3);
                        return var0;
                    };
                    var0.markdownToHtml = var13;
                    var13 = function(arg0) { // Original name: ReactMarkdown, environment: var1
                        _fun27149: for (var _fun27149_ip = 0;;) switch (_fun27149_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = {};
                                var7 = var1;
                                var2 = global;
                                var0 = 'source';
                                for (var3 in var7)
                                    case 22: {
                                        case 31: var10 = var3;
                                        var9 = var0 !== var10;
                                        if (!var9) {
                                            _fun27149_ip = 69;
                                            continue _fun27149
                                        }
                                        case 41: var11 = var2.Object;
                                        var11 = var11.prototype;
                                        var12 = var11.hasOwnProperty;
                                        var11 = var12.call;
                                        var9 = var11.bind(var12)(var1, var10);
                                        case 69: if (!var9) {
                                            _fun27149_ip = 22;
                                            continue _fun27149
                                        }
                                        case 72: var9 = var1[var10];
                                        var4[var10] = var9;
                                        _fun27149_ip = 22;
                                        continue _fun27149;
                                    }
                            case 82:
                                var2 = _closure2_slot39;
                                var1 = var1.source;
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var4.children = var1;
                                var2 = _closure2_slot13;
                                var1 = 'div';
                                var0 = null;
                                var0 = var2.bind(var3)(var1, var0, var4);
                                return var0;
                        }
                    };
                    var0.ReactMarkdown = var13;
                    var0.defaultBlockParse = var12;
                    var12 = function(arg0, arg1) { // Original name: defaultInlineParse, environment: var1
                        _fun27150: for (var _fun27150_ip = 0;;) switch (_fun27150_ip) {
                            case 0:
                                var3 = arg1;
                                if (var3) {
                                    _fun27150_ip = 8;
                                    continue _fun27150
                                }
                            case 6:
                                var3 = {};
                            case 8:
                                var0 = true;
                                var3.inline = var0;
                                var2 = _closure2_slot34;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0, var3);
                                return var0;
                        }
                    };
                    var0.defaultInlineParse = var12;
                    var0.defaultImplicitParse = var11;
                    var0.defaultReactOutput = var10;
                    var0.defaultHtmlOutput = var9;
                    var0.preprocess = var8;
                    var0.sanitizeText = var7;
                    var0.sanitizeUrl = var6;
                    var0.unescapeUrl = var5;
                    var0.htmlTag = var4;
                    var0.reactElement = var3;
                    var0.defaultRawParse = var2;
                    var2 = function(arg0, arg1) { // Original name: ruleOutput, environment: var1
                        _fun27151: for (var _fun27151_ip = 0;;) switch (_fun27151_ip) {
                            case 0:
                                var1 = arg1;
                                var2 = arg0;
                                var _closure3_slot0 = var2;
                                var _closure3_slot1 = var1;
                                if (var1) {
                                    _fun27151_ip = 38;
                                    continue _fun27151
                                }
                            case 19:
                                var2 = global;
                                var2 = var2.console;
                                var3 = 'undefined';
                                var2 = typeof var2;
                                var1 = var3 === var2;
                            case 38:
                                if (var1) {
                                    _fun27151_ip = 65;
                                    continue _fun27151
                                }
                            case 41:
                                var1 = global;
                                var3 = var1.console;
                                var2 = var3.warn;
                                var1 = "simple-markdown ruleOutput should take 'react' or 'html' as the second argument.";
                                var1 = var2.bind(var3)(var1);
                            case 65:
                                var0 = function(arg0, arg1, arg2) { // Original name: nestedRuleOutput, environment: var0
                                    var4 = arg0;
                                    var2 = _closure3_slot0;
                                    var1 = var4.type;
                                    var3 = var2[var1];
                                    var0 = _closure3_slot1;
                                    var2 = var3[var0];
                                    var1 = arg1;
                                    var0 = arg2;
                                    var0 = var2.bind(var3)(var4, var1, var0);
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var0.ruleOutput = var2;
                    var2 = function(arg0) { // Original name: reactFor, environment: var1
                        var0 = arg0;
                        var _closure3_slot0 = var0;
                        var0 = function(arg0, arg1) { // Original name: nestedOutput, environment: var1
                            _fun27154: for (var _fun27154_ip = 0;;) switch (_fun27154_ip) {
                                case 0:
                                    var10 = arg0;
                                    var2 = arg1;
                                    if (var2) {
                                        _fun27154_ip = 11;
                                        continue _fun27154
                                    }
                                case 9:
                                    var2 = {};
                                case 11:
                                    var0 = global;
                                    var1 = var0.Array;
                                    var0 = var1.isArray;
                                    var0 = var0.bind(var1)(var10);
                                    if (var0) {
                                        _fun27154_ip = 54;
                                        continue _fun27154
                                    }
                                case 32:
                                    var3 = _closure3_slot0;
                                    var1 = _closure3_slot1;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var10, var1, var2);
                                    return var0;
                                case 54:
                                    var1 = var2.key;
                                    var0 = new Array(0);
                                    var3 = var10.length;
                                    var9 = 0;
                                    var3 = var9 < var3;
                                    var7 = 1;
                                    var6 = 'string';
                                    var4 = undefined;
                                    var8 = null;
                                    if (!var3) {
                                        _fun27154_ip = 178;
                                        continue _fun27154
                                    }
                                case 91:
                                    var3 = '' + var9;
                                    var2.key = var3;
                                    var11 = _closure3_slot1;
                                    var3 = var10[var9];
                                    var3 = var11.bind(var4)(var3, var2);
                                    var11 = typeof var3;
                                    if (!(var6 === var11)) {
                                        _fun27154_ip = 128;
                                        continue _fun27154
                                    }
                                case 121:
                                    var11 = typeof var8;
                                    if (!(var6 !== var11)) {
                                        _fun27154_ip = 143;
                                        continue _fun27154
                                    }
                                case 128:
                                    var11 = var0.push;
                                    var11 = var11.bind(var0)(var3);
                                    var11 = var3;
                                    _fun27154_ip = 163;
                                    continue _fun27154;
                                case 143:
                                    var3 = var8 + var3;
                                    var12 = var0.length;
                                    var12 = var12 - var7;
                                    var0[var12] = var3;
                                    var11 = var3;
                                case 163:
                                    var9 = var9 + 1;
                                    var3 = var10.length;
                                    var8 = var11;
                                    if (var9 < var3) {
                                        _fun27154_ip = 91;
                                        continue _fun27154
                                    }
                                case 178:
                                    var2.key = var1;
                                    return var0;
                            }
                        };
                        var _closure3_slot1 = var0;
                        return var0;
                    };
                    var0.reactFor = var2;
                    var2 = function(arg0) { // Original name: htmlFor, environment: var1
                        var0 = arg0;
                        var _closure3_slot0 = var0;
                        var0 = function(arg0, arg1) { // Original name: nestedOutput, environment: var1
                            _fun27156: for (var _fun27156_ip = 0;;) switch (_fun27156_ip) {
                                case 0:
                                    var3 = arg0;
                                    var5 = arg1;
                                    var _closure4_slot0 = var5;
                                    if (var5) {
                                        _fun27156_ip = 17;
                                        continue _fun27156
                                    }
                                case 15:
                                    var5 = {};
                                case 17:
                                    _closure4_slot0 = var5;
                                    var0 = global;
                                    var2 = var0.Array;
                                    var0 = var2.isArray;
                                    var0 = var0.bind(var2)(var3);
                                    if (var0) {
                                        _fun27156_ip = 64;
                                        continue _fun27156
                                    }
                                case 42:
                                    var4 = _closure3_slot0;
                                    var2 = _closure3_slot1;
                                    var0 = undefined;
                                    var0 = var4.bind(var0)(var3, var2, var5);
                                    _fun27156_ip = 93;
                                    continue _fun27156;
                                case 64:
                                    var2 = var3.map;
                                    var1 = function(arg0) { // Environment: var1
                                        var3 = _closure3_slot1;
                                        var2 = _closure4_slot0;
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var3.bind(var1)(var0, var2);
                                        return var0;
                                    };
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.join;
                                    var1 = '';
                                    var0 = var2.bind(var3)(var1);
                                case 93:
                                    return var0;
                            }
                        };
                        var _closure3_slot1 = var0;
                        return var0;
                    };
                    var0.htmlFor = var2;
                    var2 = function() { // Original name: defaultParse, environment: var1
                        _fun27158: for (var _fun27158_ip = 0;;) switch (_fun27158_ip) {
                            case 0:
                                var0 = undefined;
                                var1 = global;
                                var2 = var1.console;
                                var3 = 'undefined';
                                var2 = typeof var2;
                                if (!(var3 !== var2)) {
                                    _fun27158_ip = 43;
                                    continue _fun27158
                                }
                            case 21:
                                var3 = var1.console;
                                var2 = var3.warn;
                                var1 = 'defaultParse is deprecated, please use `defaultImplicitParse`';
                                var1 = var2.bind(var3)(var1);
                            case 43:
                                var3 = _closure2_slot36;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = null;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                        }
                    };
                    var0.defaultParse = var2;
                    var1 = function() { // Original name: defaultOutput, environment: var1
                        _fun27159: for (var _fun27159_ip = 0;;) switch (_fun27159_ip) {
                            case 0:
                                var0 = undefined;
                                var1 = global;
                                var2 = var1.console;
                                var3 = 'undefined';
                                var2 = typeof var2;
                                if (!(var3 !== var2)) {
                                    _fun27159_ip = 43;
                                    continue _fun27159
                                }
                            case 21:
                                var3 = var1.console;
                                var2 = var3.warn;
                                var1 = 'defaultOutput is deprecated, please use `defaultReactOutput`';
                                var1 = var2.bind(var3)(var1);
                            case 43:
                                var3 = _closure2_slot37;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = null;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                        }
                    };
                    var0.defaultOutput = var1;
                    return var0;
                }
            };
            var3 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var3 === var0)) {
                _fun27032_ip = 32;
                continue _fun27032
            }
        case 26:
            var0 = undefined;
            if (!(var0 === var1)) {
                _fun27032_ip = 106;
                continue _fun27032
            }
        case 32:
            var3 = global;
            var4 = var3.define;
            var6 = 'function';
            var4 = typeof var4;
            if (!(var6 === var4)) {
                _fun27032_ip = 66;
                continue _fun27032
            }
        case 51:
            var4 = var3.define;
            var4 = var4.amd;
            if (var4) {
                _fun27032_ip = 91;
                continue _fun27032
            }
        case 66:
            if (var5) {
                _fun27032_ip = 75;
                continue _fun27032
            }
        case 69:
            var5 = var3.self;
        case 75:
            var4 = undefined;
            var4 = var2.bind(var4)();
            var5.SimpleMarkdown = var4;
            _fun27032_ip = 116;
            continue _fun27032;
        case 91:
            var4 = var3.define;
            var3 = undefined;
            var3 = var4.bind(var3)(var2);
            _fun27032_ip = 116;
            continue _fun27032;
        case 106:
            var0 = var2.bind(var0)();
            var1.exports = var0;
        case 116:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);