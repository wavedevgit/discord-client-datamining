// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var10
        _fun48885: for (var _fun48885_ip = 0;;) switch (_fun48885_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot23;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun48885_ip = 51;
                    continue _fun48885
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun48885_ip = 92;
                continue _fun48885;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun48885_ip = 71;
                    continue _fun48885
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var10
        _fun48886: for (var _fun48886_ip = 0;;) switch (_fun48886_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun48886_ip = 74;
                continue _fun48886;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function() { // Original name: missingTag, environment: var10
        var0 = null;
        return var0;
    };
    var _closure1_slot24 = var0;
    var12 = function(arg0) { // Original name: SvgAst, environment: var10
        _fun48890: for (var _fun48890_ip = 0;;) switch (_fun48890_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.ast;
                var8 = var1.override;
                if (var0) {
                    _fun48890_ip = 22;
                    continue _fun48890
                }
            case 18:
                var1 = null;
                return var1;
            case 22:
                var11 = var0.props;
                var0 = var0.children;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.tags;
                var2 = var2.svg;
                var1 = _closure1_slot12;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.children = var0;
                var12 = {};
                var13 = var6;
                var10 = var8;
                var9 = var4;
                var0 = var13[var5](var12, var11, var10, var9, var8);
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var12;
    var11 = function(arg0) { // Original name: SvgXml, environment: var10
        _fun48891: for (var _fun48891_ip = 0;;) switch (_fun48891_ip) {
            case 0:
                var2 = arg0;
                var7 = var2;
                var3 = undefined;
                var0 = undefined;
                var5 = undefined;
                var8 = undefined;
                var1 = undefined;
                var2 = var2.onError;
                if (!(var3 === var2)) {
                    _fun48891_ip = 35;
                    continue _fun48891
                }
            case 28:
                var2 = _closure1_slot13;
            case 35:
                var0 = var2;
                var2 = var7;
                var6 = var2.xml;
                var5 = var6;
                var _closure2_slot0 = var6;
                var8 = var2.override;
                var1 = var2.fallback;
            case 66: // try_start_0
                var6 = _closure1_slot10;
                var9 = var5;
                var5 = new Array(1);
                var5[0] = var9;
                var4 = function() { // Environment: var4
                    _fun48892: for (var _fun48892_ip = 0;;) switch (_fun48892_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 !== var2)) {
                                _fun48892_ip = 31;
                                continue _fun48892
                            }
                        case 13:
                            var3 = _closure1_slot30;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2);
                        case 31:
                            return var0;
                    }
                };
                var6 = var6.bind(var3)(var4, var5);
                var5 = _closure1_slot12;
                var4 = _closure1_slot25;
                var2 = {};
                var2.ast = var6;
                var6 = var8;
                if (var8) {
                    _fun48891_ip = 119;
                    continue _fun48891
                }
            case 116:
                var6 = var7;
            case 119:
                var2.override = var6;
                var2 = var5.bind(var3)(var4, var2);
            case 130: // try_end0
                return var2;
            case 132: // catch_target0
                CatchBlockStart(arg_register = 2);
                var0 = var0.bind(var3)(var2);
                var2 = var1;
                var0 = null;
                var2 = var0 != var2;
                if (!var2) {
                    _fun48891_ip = 154;
                    continue _fun48891
                }
            case 151:
                var0 = var1;
            case 154:
                return var0;
        }
    };
    var _closure1_slot26 = var11;
    var6 = function(arg0) { // Original name: getStyle, environment: var10
        _fun48893: for (var _fun48893_ip = 0;;) switch (_fun48893_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var2 = var3.split;
                var1 = ';';
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.trim;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var2.bind(var3)(var1);
                var7 = var8.length;
                var6 = 0;
                var9 = var6 < var7;
                var5 = ':';
                var4 = 1;
                var2 = undefined;
                var1 = 0;
                if (!var9) {
                    _fun48893_ip = 135;
                    continue _fun48893
                }
            case 64:
                var10 = var8[var1];
                var9 = var10.length;
                if (!(var6 !== var9)) {
                    _fun48893_ip = 128;
                    continue _fun48893
                }
            case 77:
                var9 = var10.split;
                var9 = var9.bind(var10)(var5);
                var12 = var9[var6];
                var11 = var9[var4];
                var10 = _closure1_slot16;
                var9 = var12.trim;
                var9 = var9.bind(var12)();
                var10 = var10.bind(var2)(var9);
                var9 = var11.trim;
                var9 = var9.bind(var11)();
                var0[var10] = var9;
            case 128:
                var1 = var1 + 1;
                if (var1 < var7) {
                    _fun48893_ip = 64;
                    continue _fun48893
                }
            case 135:
                return var0;
        }
    };
    var _closure1_slot27 = var6;
    var5 = function(arg0, arg1) { // Original name: astToReact, environment: var10
        _fun48895: for (var _fun48895_ip = 0;;) switch (_fun48895_ip) {
            case 0:
                var0 = arg0;
                var2 = 'object';
                var1 = typeof var0;
                if (!(var2 !== var1)) {
                    _fun48895_ip = 16;
                    continue _fun48895
                }
            case 14:
                return var0;
            case 16:
                var4 = var0.Tag;
                var6 = var0.props;
                var8 = var0.children;
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun48895_ip = 47;
                    continue _fun48895
                }
            case 41:
                var0 = var6.class;
            case 47:
                if (!var0) {
                    _fun48895_ip = 67;
                    continue _fun48895
                }
            case 50:
                var0 = var6.class;
                var6.className = var0;
                var0 = delete var6.class;
            case 67:
                var3 = _closure1_slot12;
                var1 = global;
                var5 = var1.Object;
                var2 = var5.assign;
                var1 = {};
                var7 = var8.map;
                var0 = _closure1_slot28;
                var0 = var7.bind(var8)(var0);
                var1.children = var0;
                var0 = {};
                var2 = var2.bind(var5)(var0, var6, var1);
                var1 = undefined;
                var0 = arg1;
                var0 = var3.bind(var1)(var4, var2, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var5;
    var0 = function(arg0, arg1) { // Original name: repeat, environment: var10
        _fun48896: for (var _fun48896_ip = 0;;) switch (_fun48896_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var1 = parseFloat(var0);
                var3 = var1 - 1;
                var2 = '';
                var0 = var2;
                if (!var1) {
                    _fun48896_ip = 38;
                    continue _fun48896
                }
            case 22:
                var2 = var2 + var4;
                var1 = parseFloat(var3);
                var3 = var1 - 1;
                var0 = var2;
                if (var1) {
                    _fun48896_ip = 22;
                    continue _fun48896
                }
            case 38:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var1 = function(arg0, arg1) { // Original name: _parse, environment: var10
        _fun48897: for (var _fun48897_ip = 0;;) switch (_fun48897_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var0;
                var5 = function(arg0) { // Original name: error, environment: var1
                    _fun48898: for (var _fun48898_ip = 0;;) switch (_fun48898_ip) {
                        case 0:
                            var8 = _closure2_slot0;
                            var2 = _closure2_slot6;
                            var0 = var8.split;
                            var7 = '\n';
                            var9 = var0.bind(var8)(var7);
                            var6 = var9.length;
                            var3 = 0;
                            var10 = var3 < var6;
                            var1 = var2;
                            var0 = 0;
                            var4 = var1;
                            var5 = 0;
                            if (!var10) {
                                _fun48898_ip = 85;
                                continue _fun48898
                            }
                        case 49:
                            var10 = var9[var0];
                            var10 = var10.length;
                            var5 = var0;
                            var4 = var1;
                            if (!(var4 >= var10)) {
                                _fun48898_ip = 85;
                                continue _fun48898
                            }
                        case 68:
                            var1 = var1 - var10;
                            var0 = var0 + 1;
                            var4 = var1;
                            var5 = var0;
                            if (var5 < var6) {
                                _fun48898_ip = 49;
                                continue _fun48898
                            }
                        case 85:
                            var0 = var8.slice;
                            var10 = var0.bind(var8)(var3, var2);
                            var9 = var10.replace;
                            var6 = _closure1_slot17;
                            var1 = /^\t+/;
                            var9 = var9.bind(var10)(var1, var6);
                            var6 = /(^|\n).*$/;
                            var1 = var6.exec;
                            var1 = var1.bind(var6)(var9);
                            var6 = var1;
                            if (!var6) {
                                _fun48898_ip = 163;
                                continue _fun48898
                            }
                        case 159:
                            var6 = var1[var3];
                        case 163:
                            if (var6) {
                                _fun48898_ip = 170;
                                continue _fun48898
                            }
                        case 166:
                            var6 = '';
                        case 170:
                            var1 = var8.slice;
                            var8 = var1.bind(var8)(var2);
                            var2 = /.*(\n|$)/;
                            var1 = var2.exec;
                            var2 = var1.bind(var2)(var8);
                            var1 = {};
                            var1.line = var5;
                            var1.column = var4;
                            var5 = var2;
                            if (!var5) {
                                _fun48898_ip = 227;
                                continue _fun48898
                            }
                        case 223:
                            var5 = var2[var3];
                        case 227:
                            var4 = _closure1_slot29;
                            var3 = var6.length;
                            var2 = undefined;
                            var0 = ' ';
                            var15 = var4.bind(var2)(var0, var3);
                            var0 = global;
                            var2 = var0.HermesInternal;
                            var3 = var2.concat;
                            var9 = '';
                            var14 = '^';
                            var19 = var9;
                            var18 = var6;
                            var17 = var5;
                            var16 = var7;
                            var2 = var19[var3](var18, var17, var16, var15, var14, var13);
                            var1.snippet = var2;
                            var16 = var1.line;
                            var14 = var1.column;
                            var12 = var1.snippet;
                            var2 = var0.Error;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var18 = arg0;
                            var17 = ' (';
                            var15 = ':';
                            var13 = "). If this is valid SVG, it's probably a bug. Please raise an issue\n\n";
                            var18 = var19[var5](var18, var17, var16, var15, var14, var13, var12, var11);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var19 = var1;
                            var0 = new var19[var2](var18, var17);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var _closure2_slot7 = var5;
                var6 = function() { // Original name: neutral, environment: var1
                    _fun48899: for (var _fun48899_ip = 0;;) switch (_fun48899_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = _closure2_slot2;
                            var0 = var2 < var0;
                            var6 = '';
                            var2 = var6;
                            if (!var0) {
                                _fun48899_ip = 103;
                                continue _fun48899
                            }
                        case 25:
                            var3 = _closure2_slot0;
                            var0 = _closure2_slot6;
                            var5 = var3[var0];
                            var4 = '<';
                            var3 = 1;
                            var0 = var6;
                            var2 = var0;
                            if (!(var4 !== var5)) {
                                _fun48899_ip = 103;
                                continue _fun48899
                            }
                        case 54:
                            var6 = var0 + var5;
                            var7 = _closure2_slot6;
                            var8 = var7 + var3;
                            _closure2_slot6 = var8;
                            var7 = _closure2_slot2;
                            var2 = var6;
                            if (!(var8 < var7)) {
                                _fun48899_ip = 103;
                                continue _fun48899
                            }
                        case 81:
                            var8 = _closure2_slot0;
                            var7 = _closure2_slot6;
                            var5 = var8[var7];
                            var0 = var6;
                            var2 = var0;
                            if (var4 !== var5) {
                                _fun48899_ip = 54;
                                continue _fun48899
                            }
                        case 103:
                            var3 = /\S/;
                            var0 = var3.test;
                            var0 = var0.bind(var3)(var2);
                            var3 = var2;
                            if (!var0) {
                                _fun48899_ip = 147;
                                continue _fun48899
                            }
                        case 133:
                            var2 = _closure2_slot4;
                            var0 = var2.push;
                            var0 = var0.bind(var2)(var3);
                        case 147:
                            var2 = _closure2_slot0;
                            var0 = _closure2_slot6;
                            var2 = var2[var0];
                            var0 = '<';
                            if (!(var0 !== var2)) {
                                _fun48899_ip = 173;
                                continue _fun48899
                            }
                        case 167:
                            var0 = _closure2_slot8;
                            _fun48899_ip = 177;
                            continue _fun48899;
                        case 173:
                            var0 = _closure2_slot9;
                        case 177:
                            return var0;
                    }
                };
                var _closure2_slot8 = var6;
                var2 = function() { // Original name: openingTag, environment: var1
                    _fun48900: for (var _fun48900_ip = 0;;) switch (_fun48900_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot6;
                            var1 = var2[var1];
                            var2 = '?';
                            if (!(var2 !== var1)) {
                                _fun48900_ip = 674;
                                continue _fun48900
                            }
                        case 26:
                            var2 = '!';
                            if (!(var2 === var1)) {
                                _fun48900_ip = 171;
                                continue _fun48900
                            }
                        case 37:
                            var3 = _closure2_slot6;
                            var2 = 1;
                            var7 = var3 + var2;
                            var4 = _closure2_slot0;
                            var3 = var4.slice;
                            var5 = _closure2_slot6;
                            var2 = 3;
                            var2 = var5 + var2;
                            var3 = var3.bind(var4)(var7, var2);
                            var2 = '--';
                            if (!(var2 !== var3)) {
                                _fun48900_ip = 668;
                                continue _fun48900
                            }
                        case 87:
                            var3 = _closure2_slot6;
                            var2 = 8;
                            var6 = var3 + var2;
                            var3 = _closure2_slot0;
                            var2 = var3.slice;
                            var3 = var2.bind(var3)(var7, var6);
                            var2 = '[CDATA[';
                            if (!(var2 !== var3)) {
                                _fun48900_ip = 662;
                                continue _fun48900
                            }
                        case 126:
                            var4 = /doctype/i;
                            var3 = var4.test;
                            var5 = _closure2_slot0;
                            var2 = var5.slice;
                            var2 = var2.bind(var5)(var7, var6);
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun48900_ip = 656;
                                continue _fun48900
                            }
                        case 171:
                            var7 = '/';
                            if (!(var7 !== var1)) {
                                _fun48900_ip = 650;
                                continue _fun48900
                            }
                        case 182:
                            var1 = _closure2_slot13;
                            var5 = undefined;
                            var6 = var1.bind(var5)();
                            var4 = {};
                            var3 = {};
                            var3.tag = var6;
                            var3.props = var4;
                            var1 = new Array(0);
                            var3.children = var1;
                            var1 = _closure2_slot3;
                            var3.parent = var1;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var2 = 9;
                            var2 = var9[var2];
                            var2 = var8.bind(var5)(var2);
                            var2 = var2.tags;
                            var2 = var2[var6];
                            if (var2) {
                                _fun48900_ip = 260;
                                continue _fun48900
                            }
                        case 256:
                            var2 = _closure1_slot24;
                        case 260:
                            var3.Tag = var2;
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun48900_ip = 278;
                                continue _fun48900
                            }
                        case 272:
                            var _closure2_slot1 = var3;
                            _fun48900_ip = 292;
                            continue _fun48900;
                        case 278:
                            var6 = _closure2_slot4;
                            var2 = var6.push;
                            var2 = var2.bind(var6)(var3);
                        case 292:
                            var9 = _closure2_slot6;
                            var8 = _closure2_slot2;
                            var13 = '';
                            var12 = global;
                            var6 = 1;
                            var11 = 'id';
                            var10 = '=';
                            if (!(var9 < var8)) {
                                _fun48900_ip = 510;
                                continue _fun48900
                            }
                        case 324:
                            var14 = _closure1_slot20;
                            var9 = var14.test;
                            var15 = _closure2_slot0;
                            var8 = _closure2_slot6;
                            var8 = var15[var8];
                            var8 = var9.bind(var14)(var8);
                            if (!var8) {
                                _fun48900_ip = 510;
                                continue _fun48900
                            }
                        case 356:
                            var8 = _closure2_slot15;
                            var8 = var8.bind(var5)();
                            var8 = _closure2_slot13;
                            var14 = var8.bind(var5)();
                            if (!var14) {
                                _fun48900_ip = 510;
                                continue _fun48900
                            }
                        case 378:
                            var8 = _closure2_slot15;
                            var8 = var8.bind(var5)();
                            var9 = _closure2_slot0;
                            var8 = _closure2_slot6;
                            var8 = var9[var8];
                            var9 = true;
                            if (!(var10 === var8)) {
                                _fun48900_ip = 482;
                                continue _fun48900
                            }
                        case 404:
                            var8 = _closure2_slot6;
                            var8 = var8 + var6;
                            _closure2_slot6 = var8;
                            var8 = _closure2_slot15;
                            var8 = var8.bind(var5)();
                            var8 = _closure2_slot14;
                            var15 = var8.bind(var5)();
                            var16 = var11 === var14;
                            if (var16) {
                                _fun48900_ip = 453;
                                continue _fun48900
                            }
                        case 439:
                            var17 = var12.isNaN;
                            var8 = var15 - 0;
                            var16 = var17.bind(var5)(var8);
                        case 453:
                            if (var16) {
                                _fun48900_ip = 470;
                                continue _fun48900
                            }
                        case 456:
                            var8 = var15.trim;
                            var8 = var8.bind(var15)();
                            var16 = var13 === var8;
                        case 470:
                            var8 = var15;
                            if (var16) {
                                _fun48900_ip = 479;
                                continue _fun48900
                            }
                        case 476:
                            var8 = var15 - 0;
                        case 479:
                            var9 = var8;
                        case 482:
                            var8 = _closure1_slot16;
                            var8 = var8.bind(var5)(var14);
                            var4[var8] = var9;
                            var9 = _closure2_slot6;
                            var8 = _closure2_slot2;
                            if (var9 < var8) {
                                _fun48900_ip = 324;
                                continue _fun48900
                            }
                        case 510:
                            var8 = var4.style;
                            var10 = 'string';
                            var9 = typeof var8;
                            if (!(var10 === var9)) {
                                _fun48900_ip = 547;
                                continue _fun48900
                            }
                        case 526:
                            var3.styles = var8;
                            var1 = _closure1_slot27;
                            var1 = var1.bind(var5)(var8);
                            var4.style = var1;
                        case 547:
                            var4 = _closure2_slot0;
                            var1 = _closure2_slot6;
                            var4 = var4[var1];
                            var1 = false;
                            if (!(var7 === var4)) {
                                _fun48900_ip = 579;
                                continue _fun48900
                            }
                        case 565:
                            var4 = _closure2_slot6;
                            var4 = var4 + var6;
                            _closure2_slot6 = var4;
                            var1 = true;
                        case 579:
                            var4 = _closure2_slot0;
                            var2 = _closure2_slot6;
                            var4 = var4[var2];
                            var2 = '>';
                            if (!(var2 !== var4)) {
                                _fun48900_ip = 614;
                                continue _fun48900
                            }
                        case 599:
                            var4 = _closure2_slot7;
                            var2 = 'Expected >';
                            var2 = var4.bind(var5)(var2);
                        case 614:
                            if (var1) {
                                _fun48900_ip = 644;
                                continue _fun48900
                            }
                        case 617:
                            _closure2_slot3 = var3;
                            var1 = var3.children;
                            _closure2_slot4 = var1;
                            var2 = _closure2_slot5;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 644:
                            var1 = _closure2_slot8;
                            return var1;
                        case 650:
                            var1 = _closure2_slot12;
                            return var1;
                        case 656:
                            var1 = _closure2_slot8;
                            return var1;
                        case 662:
                            var1 = _closure2_slot11;
                            return var1;
                        case 668:
                            var1 = _closure2_slot10;
                            return var1;
                        case 674:
                            var0 = _closure2_slot8;
                            return var0;
                    }
                };
                var _closure2_slot9 = var2;
                var2 = function() { // Original name: comment, environment: var1
                    _fun48901: for (var _fun48901_ip = 0;;) switch (_fun48901_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var3 = var4.indexOf;
                            var2 = _closure2_slot6;
                            var1 = '-->';
                            var2 = var3.bind(var4)(var1, var2);
                            var1 = ~var2;
                            if (var1) {
                                _fun48901_ip = 52;
                                continue _fun48901
                            }
                        case 35:
                            var4 = _closure2_slot7;
                            var3 = undefined;
                            var1 = 'expected -->';
                            var1 = var4.bind(var3)(var1);
                        case 52:
                            var1 = 2;
                            var1 = var2 + var1;
                            _closure2_slot6 = var1;
                            var0 = _closure2_slot8;
                            return var0;
                    }
                };
                var _closure2_slot10 = var2;
                var2 = function() { // Original name: cdata, environment: var1
                    _fun48902: for (var _fun48902_ip = 0;;) switch (_fun48902_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var3 = var4.indexOf;
                            var2 = _closure2_slot6;
                            var1 = ']]>';
                            var2 = var3.bind(var4)(var1, var2);
                            var1 = ~var2;
                            if (var1) {
                                _fun48902_ip = 52;
                                continue _fun48902
                            }
                        case 35:
                            var4 = _closure2_slot7;
                            var3 = undefined;
                            var1 = 'expected ]]>';
                            var1 = var4.bind(var3)(var1);
                        case 52:
                            var4 = _closure2_slot4;
                            var3 = var4.push;
                            var6 = _closure2_slot0;
                            var5 = var6.slice;
                            var7 = _closure2_slot6;
                            var1 = 7;
                            var1 = var7 + var1;
                            var1 = var5.bind(var6)(var1, var2);
                            var1 = var3.bind(var4)(var1);
                            var1 = 2;
                            var1 = var2 + var1;
                            _closure2_slot6 = var1;
                            var0 = _closure2_slot8;
                            return var0;
                    }
                };
                var _closure2_slot11 = var2;
                var2 = function() { // Original name: closingTag, environment: var1
                    _fun48903: for (var _fun48903_ip = 0;;) switch (_fun48903_ip) {
                        case 0:
                            var1 = _closure2_slot13;
                            var3 = undefined;
                            var8 = var1.bind(var3)();
                            if (var8) {
                                _fun48903_ip = 31;
                                continue _fun48903
                            }
                        case 16:
                            var2 = _closure2_slot7;
                            var1 = 'Expected tag name';
                            var1 = var2.bind(var3)(var1);
                        case 31:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun48903_ip = 51;
                                continue _fun48903
                            }
                        case 38:
                            var2 = _closure2_slot3;
                            var2 = var2.tag;
                            var1 = var8 !== var2;
                        case 51:
                            if (!var1) {
                                _fun48903_ip = 108;
                                continue _fun48903
                            }
                        case 54:
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot3;
                            var10 = var1.tag;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var13 = 'Expected closing tag </';
                            var11 = '> to match opening tag <';
                            var9 = '>';
                            var12 = var8;
                            var1 = var13[var6](var12, var11, var10, var9, var8);
                            var1 = var2.bind(var3)(var1);
                        case 108:
                            var1 = _closure2_slot15;
                            var1 = var1.bind(var3)();
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot6;
                            var2 = var2[var1];
                            var1 = '>';
                            if (!(var1 !== var2)) {
                                _fun48903_ip = 151;
                                continue _fun48903
                            }
                        case 136:
                            var2 = _closure2_slot7;
                            var1 = 'Expected >';
                            var1 = var2.bind(var3)(var1);
                        case 151:
                            var2 = _closure2_slot5;
                            var1 = var2.pop;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot5;
                            var3 = var2.length;
                            var1 = 1;
                            var1 = var3 - var1;
                            var1 = var2[var1];
                            _closure2_slot3 = var1;
                            if (!var1) {
                                _fun48903_ip = 205;
                                continue _fun48903
                            }
                        case 192:
                            var1 = _closure2_slot3;
                            var1 = var1.children;
                            _closure2_slot4 = var1;
                        case 205:
                            var0 = _closure2_slot8;
                            return var0;
                    }
                };
                var _closure2_slot12 = var2;
                var2 = function() { // Original name: getName, environment: var1
                    _fun48904: for (var _fun48904_ip = 0;;) switch (_fun48904_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = _closure2_slot2;
                            var1 = var1 < var0;
                            var7 = '';
                            var0 = var7;
                            if (!var1) {
                                _fun48904_ip = 134;
                                continue _fun48904
                            }
                        case 25:
                            var3 = _closure1_slot18;
                            var1 = var3.test;
                            var4 = _closure2_slot0;
                            var2 = _closure2_slot6;
                            var2 = var4[var2];
                            var1 = var1.bind(var3)(var2);
                            var4 = 1;
                            var3 = var2;
                            var2 = var7;
                            var0 = var2;
                            if (!var1) {
                                _fun48904_ip = 134;
                                continue _fun48904
                            }
                        case 69:
                            var7 = var2 + var3;
                            var1 = _closure2_slot6;
                            var8 = var1 + var4;
                            _closure2_slot6 = var8;
                            var1 = _closure2_slot2;
                            var0 = var7;
                            if (!(var8 < var1)) {
                                _fun48904_ip = 134;
                                continue _fun48904
                            }
                        case 96:
                            var9 = _closure1_slot18;
                            var1 = var9.test;
                            var10 = _closure2_slot0;
                            var8 = _closure2_slot6;
                            var8 = var10[var8];
                            var1 = var1.bind(var9)(var8);
                            var3 = var8;
                            var2 = var7;
                            var0 = var2;
                            if (var1) {
                                _fun48904_ip = 69;
                                continue _fun48904
                            }
                        case 134:
                            return var0;
                    }
                };
                var _closure2_slot13 = var2;
                var2 = function() { // Original name: getAttributeValue, environment: var1
                    _fun48905: for (var _fun48905_ip = 0;;) switch (_fun48905_ip) {
                        case 0:
                            var2 = _closure1_slot21;
                            var1 = var2.test;
                            var3 = _closure2_slot0;
                            var0 = _closure2_slot6;
                            var0 = var3[var0];
                            var0 = var1.bind(var2)(var0);
                            var2 = '';
                            var8 = 1;
                            var7 = '/';
                            var6 = '>';
                            var5 = ' ';
                            var4 = var2;
                            if (var0) {
                                _fun48905_ip = 124;
                                continue _fun48905
                            }
                        case 59:
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot6;
                            var1 = var1[var0];
                            var0 = var4;
                            if (!(var5 !== var1)) {
                                _fun48905_ip = 119;
                                continue _fun48905
                            }
                        case 78:
                            var0 = var4;
                            if (!(var6 !== var1)) {
                                _fun48905_ip = 119;
                                continue _fun48905
                            }
                        case 85:
                            var0 = var4;
                            if (!(var7 !== var1)) {
                                _fun48905_ip = 119;
                                continue _fun48905
                            }
                        case 92:
                            var4 = var4 + var1;
                            var1 = _closure2_slot6;
                            var3 = var1 + var8;
                            _closure2_slot6 = var3;
                            var1 = _closure2_slot2;
                            var0 = var4;
                            if (var3 < var1) {
                                _fun48905_ip = 59;
                                continue _fun48905
                            }
                        case 119:
                            _fun48905_ip = 265;
                            continue _fun48905;
                        case 124:
                            var3 = _closure2_slot0;
                            var1 = _closure2_slot6;
                            var1 = parseFloat(var1);
                            var4 = var1 + 1;
                            _closure2_slot6 = var4;
                            var10 = var3[var1];
                            var3 = _closure2_slot6;
                            var1 = _closure2_slot2;
                            var1 = var3 < var1;
                            var9 = global;
                            var8 = '\\';
                            var5 = var2;
                            var2 = var5;
                            if (!var1) {
                                _fun48905_ip = 259;
                                continue _fun48905
                            }
                        case 173:
                            var3 = _closure2_slot0;
                            var1 = _closure2_slot6;
                            var1 = parseFloat(var1);
                            var4 = var1 + 1;
                            _closure2_slot6 = var4;
                            var12 = var3[var1];
                            var1 = var5;
                            if (!(var12 !== var10)) {
                                _fun48905_ip = 262;
                                continue _fun48905
                            }
                        case 202:
                            var3 = var8 !== var12;
                            if (var3) {
                                _fun48905_ip = 211;
                                continue _fun48905
                            }
                        case 209:
                            var3 = false;
                        case 211:
                            var4 = false;
                            if (var3) {
                                _fun48905_ip = 218;
                                continue _fun48905
                            }
                        case 216:
                            var4 = true;
                        case 218:
                            var3 = var12;
                            if (!var4) {
                                _fun48905_ip = 240;
                                continue _fun48905
                            }
                        case 224:
                            var4 = var9.HermesInternal;
                            var4 = var4.concat;
                            var3 = var4.bind(var8)(var12);
                        case 240:
                            var5 = var5 + var3;
                            var4 = _closure2_slot6;
                            var3 = _closure2_slot2;
                            var2 = var5;
                            if (var4 < var3) {
                                _fun48905_ip = 173;
                                continue _fun48905
                            }
                        case 259:
                            var1 = var2;
                        case 262:
                            var0 = var1;
                        case 265:
                            return var0;
                    }
                };
                var _closure2_slot14 = var2;
                var2 = function() { // Original name: allowSpaces, environment: var1
                    _fun48906: for (var _fun48906_ip = 0;;) switch (_fun48906_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = _closure2_slot2;
                            if (!(var1 < var0)) {
                                _fun48906_ip = 99;
                                continue _fun48906
                            }
                        case 15:
                            var4 = _closure1_slot20;
                            var1 = var4.test;
                            var5 = _closure2_slot0;
                            var0 = _closure2_slot6;
                            var0 = var5[var0];
                            var0 = var1.bind(var4)(var0);
                            var1 = 1;
                            if (!var0) {
                                _fun48906_ip = 99;
                                continue _fun48906
                            }
                        case 50:
                            var0 = _closure2_slot6;
                            var4 = var0 + var1;
                            _closure2_slot6 = var4;
                            var0 = _closure2_slot2;
                            if (!(var4 < var0)) {
                                _fun48906_ip = 99;
                                continue _fun48906
                            }
                        case 70:
                            var5 = _closure1_slot20;
                            var4 = var5.test;
                            var6 = _closure2_slot0;
                            var0 = _closure2_slot6;
                            var0 = var6[var0];
                            var0 = var4.bind(var5)(var0);
                            if (var0) {
                                _fun48906_ip = 50;
                                continue _fun48906
                            }
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot15 = var2;
                var11 = var0.length;
                var _closure2_slot2 = var11;
                var0 = null;
                var _closure2_slot3 = var0;
                var8 = function() { // Original name: metadata, environment: var1
                    _fun48907: for (var _fun48907_ip = 0;;) switch (_fun48907_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var3 = 1;
                            var2 = var1 + var3;
                            var1 = _closure2_slot2;
                            if (!(var2 < var1)) {
                                _fun48907_ip = 245;
                                continue _fun48907
                            }
                        case 25:
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot6;
                            var1 = var2[var1];
                            var2 = '<';
                            if (!(var2 === var1)) {
                                _fun48907_ip = 127;
                                continue _fun48907
                            }
                        case 45:
                            var6 = _closure1_slot18;
                            var5 = var6.test;
                            var7 = _closure2_slot0;
                            var4 = _closure2_slot6;
                            var4 = var4 + var3;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            if (var4) {
                                _fun48907_ip = 245;
                                continue _fun48907
                            }
                        case 84:
                            var5 = _closure1_slot19;
                            var4 = var5.test;
                            var8 = _closure2_slot0;
                            var7 = var8.slice;
                            var6 = _closure2_slot6;
                            var1 = 4;
                            var1 = var6 + var1;
                            var1 = var7.bind(var8)(var6, var1);
                            var1 = var4.bind(var5)(var1);
                            if (var1) {
                                _fun48907_ip = 245;
                                continue _fun48907
                            }
                        case 127:
                            var1 = _closure2_slot6;
                            var1 = var1 + 1;
                            _closure2_slot6 = var1;
                            var4 = var1 + var3;
                            var1 = _closure2_slot2;
                            if (!(var4 < var1)) {
                                _fun48907_ip = 245;
                                continue _fun48907
                            }
                        case 150:
                            var4 = _closure2_slot0;
                            var1 = _closure2_slot6;
                            var1 = var4[var1];
                            if (var2 !== var1) {
                                _fun48907_ip = 127;
                                continue _fun48907
                            }
                        case 166:
                            var6 = _closure1_slot18;
                            var5 = var6.test;
                            var7 = _closure2_slot0;
                            var4 = _closure2_slot6;
                            var4 = var4 + var3;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            if (var4) {
                                _fun48907_ip = 245;
                                continue _fun48907
                            }
                        case 202:
                            var5 = _closure1_slot19;
                            var4 = var5.test;
                            var8 = _closure2_slot0;
                            var7 = var8.slice;
                            var6 = _closure2_slot6;
                            var1 = 4;
                            var1 = var6 + var1;
                            var1 = var7.bind(var8)(var6, var1);
                            var1 = var4.bind(var5)(var1);
                            if (!var1) {
                                _fun48907_ip = 127;
                                continue _fun48907
                            }
                        case 245:
                            var1 = _closure2_slot8;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                    }
                };
                var _closure2_slot4 = var0;
                var3 = new Array(0);
                var _closure2_slot5 = var3;
                var7 = 0;
                var _closure2_slot6 = var7;
                var3 = undefined;
                var10 = 1;
                var9 = 'Unexpected character';
                var2 = var8;
                if (!(var7 < var11)) {
                    _fun48897_ip = 180;
                    continue _fun48897
                }
            case 149:
                if (var8) {
                    _fun48897_ip = 157;
                    continue _fun48897
                }
            case 152:
                var7 = var5.bind(var3)(var9);
            case 157:
                var8 = var8.bind(var3)();
                var7 = _closure2_slot6;
                var7 = var7 + var10;
                _closure2_slot6 = var7;
                var2 = var8;
                if (var7 < var11) {
                    _fun48897_ip = 149;
                    continue _fun48897
                }
            case 180:
                if (!(var2 !== var6)) {
                    _fun48897_ip = 195;
                    continue _fun48897
                }
            case 184:
                var2 = 'Unexpected end of input';
                var2 = var5.bind(var3)(var2);
            case 195:
                var2 = _closure2_slot1;
                if (var2) {
                    _fun48897_ip = 204;
                    continue _fun48897
                }
            case 202:
                return var0;
            case 204:
                var2 = _closure2_slot1;
                if (var4) {
                    _fun48897_ip = 216;
                    continue _fun48897
                }
            case 211:
                var0 = var2;
                _fun48897_ip = 221;
                continue _fun48897;
            case 216:
                var0 = var4.bind(var3)(var2);
            case 221:
                if (var0) {
                    _fun48897_ip = 228;
                    continue _fun48897
                }
            case 224:
                var0 = _closure2_slot1;
            case 228:
                var3 = var0.children;
                var2 = var3.map;
                var1 = _closure1_slot28;
                var1 = var2.bind(var3)(var1);
                var0.children = var1;
                return var0;
        }
    };
    var _closure1_slot30 = var1;
    var7 = global;
    var14 = var7.Object;
    var13 = var14.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var13.bind(var14)(var2, var0, var8);
    var0 = 0;
    var8 = var4[var0];
    var0 = undefined;
    var8 = var9.bind(var0)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var4[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var4[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var4[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var4[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var4[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var4[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var13 = var4[var8];
    var9 = arg3;
    var9 = var9.bind(var0)(var13);
    var8 = var4[var8];
    var9 = var3.bind(var0)(var8);
    var8 = var9.Component;
    var13 = var9.useEffect;
    var _closure1_slot9 = var13;
    var13 = var9.useMemo;
    var _closure1_slot10 = var13;
    var9 = var9.useState;
    var _closure1_slot11 = var9;
    var9 = 8;
    var9 = var4[var9];
    var9 = var3.bind(var0)(var9);
    var9 = var9.jsx;
    var _closure1_slot12 = var9;
    var9 = var7.console;
    var13 = var9.error;
    var9 = var13.bind;
    var7 = var7.console;
    var7 = var9.bind(var13)(var7);
    var _closure1_slot13 = var7;
    var7 = function(arg0) { // Environment: var10
        var3 = function() { // Original name: SvgFromXml, environment: var5
            _fun48909: for (var _fun48909_ip = 0;;) switch (_fun48909_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var3)(var4, var2);
                    var5 = arguments.length;
                    var2 = global;
                    var2 = var2.Array;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var6;
                    var11 = var5;
                    var2 = new var12[var2](var11, var10);
                    var6 = var2 instanceof Object ? var2 : var6;
                    var2 = 0;
                    var8 = var2 < var5;
                    if (!var8) {
                        _fun48909_ip = 85;
                        continue _fun48909
                    }
                case 70:
                    var8 = arguments[var2];
                    var6[var2] = var8;
                    var2 = var2 + 1;
                    if (var2 < var5) {
                        _fun48909_ip = 70;
                        continue _fun48909
                    }
                case 85:
                    var2 = _closure1_slot22;
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var0 = var0.bind(var5)(var6);
                    var0 = var2.bind(var3)(var4, var1, var0);
                    var1 = {};
                    var2 = null;
                    var1.ast = var2;
                    var0.state = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: componentDidMount, environment: var5
            var2 = this;
            var1 = var2.parse;
            var0 = var2.props;
            var0 = var0.xml;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: componentDidUpdate, environment: var5
            _fun48911: for (var _fun48911_ip = 0;;) switch (_fun48911_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var1 = var0.xml;
                    var0 = arg0;
                    var0 = var0.xml;
                    if (!(var1 !== var0)) {
                        _fun48911_ip = 38;
                        continue _fun48911
                    }
                case 27:
                    var0 = var2.parse;
                    var0 = var0.bind(var2)(var1);
                case 38:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'parse';
        var4.key = var6;
        var6 = function(arg0) { // Original name: parse, environment: var5
            _fun48912: for (var _fun48912_ip = 0;;) switch (_fun48912_ip) {
                case 0:
                    var4 = this;
                    var6 = arg0;
                    var0 = undefined;
                    var1 = undefined;
                    var2 = var4.props;
                    var2 = var2.onError;
                    if (!(var0 === var2)) {
                        _fun48912_ip = 32;
                        continue _fun48912
                    }
                case 25:
                    var2 = _closure1_slot13;
                case 32:
                    var1 = var2;
                case 35: // try_start_0
                    var3 = var4.setState;
                    var2 = {};
                    var7 = var6;
                    var5 = null;
                    if (!var7) {
                        _fun48912_ip = 63;
                        continue _fun48912
                    }
                case 51:
                    var7 = _closure1_slot30;
                    var5 = var7.bind(var0)(var6);
                case 63:
                    var2.ast = var5;
                    var2 = var3.bind(var4)(var2);
                case 73: // try_end0
                    _fun48912_ip = 140;
                    continue _fun48912;
                case 75: // catch_target0
                    CatchBlockStart(arg_register = 6);
                    var2 = var1;
                    var1 = global;
                    var5 = var1.Object;
                    var4 = var5.assign;
                    var3 = {};
                    var8 = var6.message;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var1 = "[RNSVG] Couldn't parse SVG, reason: ";
                    var1 = var7.bind(var1)(var8);
                    var3.message = var1;
                    var1 = {};
                    var1 = var4.bind(var5)(var1, var6, var3);
                    var1 = var2.bind(var0)(var1);
                case 140:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: render, environment: var5
            _fun48913: for (var _fun48913_ip = 0;;) switch (_fun48913_ip) {
                case 0:
                    var0 = this;
                    var4 = var0.props;
                    var0 = var0.state;
                    var0 = var0.ast;
                    var3 = _closure1_slot12;
                    var2 = _closure1_slot25;
                    var1 = {};
                    var1.ast = var0;
                    var0 = var4.override;
                    if (var0) {
                        _fun48913_ip = 49;
                        continue _fun48913
                    }
                case 46:
                    var0 = var4;
                case 49:
                    var1.override = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var7.bind(var0)(var8);
    var _closure1_slot14 = var9;
    var7 = function(arg0) { // Environment: var10
        var3 = function() { // Original name: SvgFromUri, environment: var5
            _fun48915: for (var _fun48915_ip = 0;;) switch (_fun48915_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot3;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var3)(var4, var2);
                    var5 = arguments.length;
                    var2 = global;
                    var2 = var2.Array;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var6;
                    var11 = var5;
                    var2 = new var12[var2](var11, var10);
                    var6 = var2 instanceof Object ? var2 : var6;
                    var2 = 0;
                    var8 = var2 < var5;
                    if (!var8) {
                        _fun48915_ip = 85;
                        continue _fun48915
                    }
                case 70:
                    var8 = arguments[var2];
                    var6[var2] = var8;
                    var2 = var2 + 1;
                    if (var2 < var5) {
                        _fun48915_ip = 70;
                        continue _fun48915
                    }
                case 85:
                    var2 = _closure1_slot22;
                    var1 = _closure2_slot1;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var0 = var0.bind(var5)(var6);
                    var0 = var2.bind(var3)(var4, var1, var0);
                    var1 = {};
                    var2 = null;
                    var1.xml = var2;
                    var0.state = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot7;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: componentDidMount, environment: var5
            var2 = this;
            var1 = var2.fetch;
            var0 = var2.props;
            var0 = var0.uri;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var7 = 'componentDidUpdate';
        var4.key = var7;
        var7 = function(arg0) { // Original name: componentDidUpdate, environment: var5
            _fun48917: for (var _fun48917_ip = 0;;) switch (_fun48917_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var1 = var0.uri;
                    var0 = arg0;
                    var0 = var0.uri;
                    if (!(var1 !== var0)) {
                        _fun48917_ip = 36;
                        continue _fun48917
                    }
                case 25:
                    var0 = var2.fetch;
                    var0 = var0.bind(var2)(var1);
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'fetch';
        var4.key = var7;
        var7 = _closure1_slot2;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun48919: for (var _fun48919_ip = 0;;) switch (_fun48919_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun48919_ip = 118;
                            continue _fun48919
                        }
                    case 10:
                        var1 = arg0;
                    case 13: // try_start_0
                        var3 = var4.setState;
                        var2 = {};
                        var6 = var1;
                        var5 = null;
                        if (!var6) {
                            _fun48919_ip = 78;
                            continue _fun48919
                        }
                    case 29:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var6 = 10;
                        var7 = var7[var6];
                        var6 = undefined;
                        var7 = var8.bind(var6)(var7);
                        var6 = var7.fetchText;
                        var1 = var6.bind(var7)(var1);
                        SaveGenerator(address = 69);
                    case 67:
                        return var1;
                    case 69:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        var5 = var1;
                        if (var6) {
                            _fun48919_ip = 90;
                            continue _fun48919
                        }
                    case 78:
                        var2.xml = var5;
                        var2 = var3.bind(var4)(var2);
                    case 88: // try_end0
                        _fun48919_ip = 113;
                        continue _fun48919;
                    case 90:
                        return var1;
                    case 93: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var1 = global;
                        var2 = var1.console;
                        var1 = var2.error;
                        var1 = var1.bind(var2)(var3);
                    case 113:
                        var1 = undefined;
                        return var1;
                    case 118:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var6 = function(arg0) { // Original name: fetch, environment: var5
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: render, environment: var5
            var1 = this;
            var0 = var1.props;
            var1 = var1.state;
            var4 = var1.xml;
            var3 = _closure1_slot12;
            var2 = _closure1_slot14;
            var1 = {};
            var1.xml = var4;
            var1.override = var0;
            var0 = var0.onError;
            var1.onError = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var7.bind(var0)(var8);
    var7 = function(arg0, arg1) { // Original name: upperCase, environment: var10
        var1 = arg1;
        var0 = var1.toUpperCase;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot15 = var7;
    var7 = function(arg0) { // Original name: camelCase, environment: var10
        var3 = arg0;
        var2 = var3.replace;
        var1 = _closure1_slot15;
        var0 = /[:-]([a-z])/g;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var7;
    var13 = function(arg0) { // Original name: toSpaces, environment: var10
        var3 = _closure1_slot29;
        var0 = arg0;
        var2 = var0.length;
        var1 = undefined;
        var0 = '  ';
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var _closure1_slot17 = var13;
    var13 = /[a-zA-Z0-9:_-]/;
    var _closure1_slot18 = var13;
    var13 = /<!--/;
    var _closure1_slot19 = var13;
    var13 = /[\s\t\r\n]/;
    var _closure1_slot20 = var13;
    var13 = /['"]/;
    var _closure1_slot21 = var13;
    var2.SvgAst = var12;
    var2.SvgXml = var11;
    var10 = function(arg0) { // Original name: SvgUri, environment: var10
        _fun48925: for (var _fun48925_ip = 0;;) switch (_fun48925_ip) {
            case 0:
                var6 = arg0;
                var12 = var6.onError;
                var5 = undefined;
                if (!(var5 === var12)) {
                    _fun48925_ip = 24;
                    continue _fun48925
                }
            case 17:
                var12 = _closure1_slot13;
            case 24:
                var _closure2_slot0 = var12;
                var11 = var6.uri;
                var _closure2_slot1 = var11;
                var10 = var6.onLoad;
                var _closure2_slot2 = var10;
                var2 = var6.fallback;
                var15 = _closure1_slot11;
                var1 = null;
                var3 = var15.bind(var5)(var1);
                var14 = _closure1_slot8;
                var13 = 2;
                var8 = var14.bind(var5)(var3, var13);
                var3 = 0;
                var7 = var8[var3];
                var9 = 1;
                var8 = var8[var9];
                var _closure2_slot3 = var8;
                var8 = false;
                var8 = var15.bind(var5)(var8);
                var8 = var14.bind(var5)(var8, var13);
                var3 = var8[var3];
                var _closure2_slot4 = var3;
                var8 = var8[var9];
                var _closure2_slot5 = var8;
                var9 = _closure1_slot9;
                var8 = new Array(3);
                var8[0] = var12;
                var8[1] = var11;
                var8[2] = var10;
                var4 = function() { // Environment: var4
                    _fun48926: for (var _fun48926_ip = 0;;) switch (_fun48926_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun48926_ip = 27;
                                continue _fun48926
                            }
                        case 12:
                            var4 = _closure2_slot3;
                            var3 = undefined;
                            var2 = null;
                            var2 = var4.bind(var3)(var2);
                            _fun48926_ip = 98;
                            continue _fun48926;
                        case 27:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 10;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.fetchText;
                            var1 = _closure2_slot1;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var0
                                _fun48927: for (var _fun48927_ip = 0;;) switch (_fun48927_ip) {
                                    case 0:
                                        var3 = _closure2_slot3;
                                        var0 = undefined;
                                        var2 = arg0;
                                        var2 = var3.bind(var0)(var2);
                                        var2 = _closure2_slot4;
                                        if (!var2) {
                                            _fun48927_ip = 35;
                                            continue _fun48927
                                        }
                                    case 24:
                                        var3 = _closure2_slot5;
                                        var2 = false;
                                        var2 = var3.bind(var0)(var2);
                                    case 35:
                                        var3 = _closure2_slot2;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun48927_ip = 53;
                                            continue _fun48927
                                        }
                                    case 45:
                                        var1 = _closure2_slot2;
                                        var1 = var1.bind(var0)();
                                    case 53:
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.catch;
                            var0 = function(arg0) { // Environment: var0
                                var3 = _closure2_slot0;
                                var0 = undefined;
                                var2 = arg0;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure2_slot5;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 98:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var9.bind(var5)(var4, var8);
                if (var3) {
                    _fun48925_ip = 193;
                    continue _fun48925
                }
            case 160:
                var4 = _closure1_slot12;
                var3 = _closure1_slot26;
                var0 = {};
                var0.xml = var7;
                var0.override = var6;
                var0.fallback = var2;
                var0 = var4.bind(var5)(var3, var0);
                _fun48925_ip = 208;
                continue _fun48925;
            case 193:
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun48925_ip = 205;
                    continue _fun48925
                }
            case 202:
                var1 = var2;
            case 205:
                var0 = var1;
            case 208:
                return var0;
        }
    };
    var2.SvgUri = var10;
    var2.SvgFromXml = var9;
    var2.SvgFromUri = var8;
    var2.camelCase = var7;
    var2.getStyle = var6;
    var2.astToReact = var5;
    var2.parse = var1;
    var1 = 9;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.tags;
    var2.tags = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 57, 31, 33, 5530, 5531]);