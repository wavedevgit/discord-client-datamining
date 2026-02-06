// ../discord_common/js/packages/markup/MarkupASTUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun44391: for (var _fun44391_ip = 0;;) switch (_fun44391_ip) {
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
                _fun44391_ip = 74;
                continue _fun44391;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun44394: for (var _fun44394_ip = 0;;) switch (_fun44394_ip) {
            case 0:
                var3 = arg0;
                var0 = arguments[1];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun44394_ip = 18;
                    continue _fun44394
                }
            case 14:
                var0 = new Array(0);
            case 18:
                var _closure2_slot0 = var0;
                var2 = global;
                var4 = var2.Array;
                var2 = var4.isArray;
                var2 = var2.bind(var4)(var3);
                if (var2) {
                    _fun44394_ip = 107;
                    continue _fun44394
                }
            case 43:
                var2 = var3.content;
                var4 = 'string';
                var2 = typeof var2;
                if (!(var4 !== var2)) {
                    _fun44394_ip = 90;
                    continue _fun44394
                }
            case 59:
                var4 = var3.content;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun44394_ip = 122;
                    continue _fun44394
                }
            case 70:
                var4 = _closure1_slot7;
                var2 = var3.content;
                var2 = var4.bind(var5)(var2, var0);
                _fun44394_ip = 122;
                continue _fun44394;
            case 90:
                var4 = var0.push;
                var2 = var3.content;
                var2 = var4.bind(var0)(var2);
                _fun44394_ip = 122;
                continue _fun44394;
            case 107:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 122:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun44396: for (var _fun44396_ip = 0;;) switch (_fun44396_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun44396_ip = 39;
                    continue _fun44396
                }
            case 27:
                var0 = var3.push;
                var0 = var0.bind(var3)(var2);
                _fun44396_ip = 74;
                continue _fun44396;
            case 39:
                var1 = var2.length;
                var0 = 0;
                var4 = var0 < var1;
                if (!var4) {
                    _fun44396_ip = 74;
                    continue _fun44396
                }
            case 53:
                var5 = var3.push;
                var4 = var2[var0];
                var4 = var5.bind(var3)(var4);
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun44396_ip = 53;
                    continue _fun44396
                }
            case 74:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var6 = {};
    var _closure1_slot5 = var6;
    var1 = var1.Error;
    var3 = var3.bind(var0)(var1);
    var1 = function(arg0) { // Environment: var4
        var4 = function arg0() {
            _fun44398: for (var _fun44398_ip = 0;;) switch (_fun44398_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var6 = global;
                    var0 = var6.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var18 = var1;
                    var0 = new var18[var0](var17);
                    var7 = var0 instanceof Object ? var0 : var1;
                    var10 = new Array(1);
                    var0 = arg0;
                    var10[0] = var0;
                    var0 = var10.length;
                    var9 = 0;
                    var8 = 'items';
                    var1 = 'content';
                    if (!(var0 > var9)) {
                        _fun44398_ip = 322;
                        continue _fun44398
                    }
                case 86:
                    var0 = var10.pop;
                    var12 = var0.bind(var10)();
                    if (!(var3 !== var12)) {
                        _fun44398_ip = 310;
                        continue _fun44398
                    }
                case 103:
                    var11 = var6.Array;
                    var0 = var11.isArray;
                    var0 = var0.bind(var11)(var12);
                    if (var0) {
                        _fun44398_ip = 276;
                        continue _fun44398
                    }
                case 125:
                    var11 = var7.add;
                    var0 = var12.type;
                    var0 = var11.bind(var7)(var0);
                    var0 = var1 in var12;
                    if (!var0) {
                        _fun44398_ip = 168;
                        continue _fun44398
                    }
                case 147:
                    var14 = var6.Array;
                    var13 = var14.isArray;
                    var11 = var12.content;
                    var0 = var13.bind(var14)(var11);
                case 168:
                    if (!var0) {
                        _fun44398_ip = 207;
                        continue _fun44398
                    }
                case 171:
                    var11 = var10.push;
                    var16 = var12.content;
                    var0 = new Array(0);
                    var17 = var0;
                    var15 = 0;
                    var13 = arraySpread(var17, var16, var15);
                    var17 = var11;
                    var16 = var0;
                    var15 = var10;
                    var0 = apply(var17, var16, var15);
                case 207:
                    var0 = var8 in var12;
                    if (!var0) {
                        _fun44398_ip = 235;
                        continue _fun44398
                    }
                case 214:
                    var14 = var6.Array;
                    var13 = var14.isArray;
                    var11 = var12.items;
                    var0 = var13.bind(var14)(var11);
                case 235:
                    if (!var0) {
                        _fun44398_ip = 310;
                        continue _fun44398
                    }
                case 238:
                    var11 = var10.push;
                    var16 = var12.items;
                    var0 = new Array(0);
                    var17 = var0;
                    var15 = 0;
                    var13 = arraySpread(var17, var16, var15);
                    var17 = var11;
                    var16 = var0;
                    var15 = var10;
                    var0 = apply(var17, var16, var15);
                    _fun44398_ip = 310;
                    continue _fun44398;
                case 276:
                    var11 = var10.push;
                    var0 = new Array(0);
                    var17 = var0;
                    var16 = var12;
                    var15 = 0;
                    var12 = arraySpread(var17, var16, var15);
                    var17 = var11;
                    var16 = var0;
                    var15 = var10;
                    var0 = apply(var17, var16, var15);
                case 310:
                    var0 = var10.length;
                    if (var0 > var9) {
                        _fun44398_ip = 86;
                        continue _fun44398
                    }
                case 322:
                    var1 = var6.Array;
                    var0 = var1.from;
                    var1 = var0.bind(var1)(var7);
                    var0 = var2.getMessage;
                    var0 = var0.bind(var2)(var1);
                    var9 = new Array(1);
                    var9[0] = var0;
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun44398_ip = 394;
                        continue _fun44398
                    }
                case 381:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun44398_ip = 426;
                    continue _fun44398;
                case 394:
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 426:
                    var0 = var2.bind(var3)(var4, var0);
                    var0.nodeTypes = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var0 = {};
        var5 = 'getMessage';
        var0.key = var5;
        var1 = function arg0() {
            var2 = arg0;
            var1 = var2.join;
            var0 = ', ';
            var3 = var1.bind(var2)(var0);
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = 'MarkupParserNodeTypeError: Unknown AST node type in "';
            var0 = '" caused rendering failure';
            var0 = var2.bind(var1)(var3, var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 6;
    var5 = var5[var3];
    var3 = arg1;
    var6 = var3.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var3 = '../discord_common/js/packages/markup/MarkupASTUtils.tsx';
    var3 = var5.bind(var6)(var3);
    var3 = 200;
    var2.NUM_MAX_AST_NODES = var3;
    var3 = function arg0() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = arg0;
        var2 = var2.bind(var1)(var0);
        var1 = var2.join;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.astToString = var3;
    var3 = function arg0, arg1() {
        _fun44401: for (var _fun44401_ip = 0;;) switch (_fun44401_ip) {
            case 0:
                var1 = arg0;
                var7 = arg1;
                var6 = arguments[2];
                var _closure2_slot0 = var1;
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun44401_ip = 23;
                    continue _fun44401
                }
            case 21:
                var6 = null;
            case 23:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var7);
                if (var2) {
                    _fun44401_ip = 171;
                    continue _fun44401
                }
            case 47:
                var3 = var7.content;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun44401_ip = 83;
                    continue _fun44401
                }
            case 58:
                var4 = _closure1_slot9;
                var3 = var7.content;
                var3 = var4.bind(var5)(var1, var3, var7);
                var7.content = var3;
            case 83:
                var4 = var7.type;
                var3 = 'inlineCode';
                if (!(var3 === var4)) {
                    _fun44401_ip = 101;
                    continue _fun44401
                }
            case 96:
                var3 = delete var7.validationChildContent;
            case 101:
                var4 = var7.type;
                var3 = 'list';
                if (!(var3 === var4)) {
                    _fun44401_ip = 140;
                    continue _fun44401
                }
            case 114:
                var4 = var7.items;
                var3 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    _fun44402: for (var _fun44402_ip = 0;;) switch (_fun44402_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = global;
                            var1 = var0.Array;
                            var0 = var1.isArray;
                            var1 = var0.bind(var1)(var5);
                            var0 = var5;
                            if (!var1) {
                                _fun44402_ip = 52;
                                continue _fun44402
                            }
                        case 27:
                            var4 = _closure1_slot9;
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var1 = null;
                            var0 = var4.bind(var2)(var3, var5, var1);
                        case 52:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0);
                var7.items = var0;
            case 140:
                var0 = var7;
                if (!(var2 != var6)) {
                    _fun44401_ip = 169;
                    continue _fun44401
                }
            case 147:
                var3 = var7.type;
                var2 = var6.type;
                var0 = var7;
                if (!(var3 === var2)) {
                    _fun44401_ip = 169;
                    continue _fun44401
                }
            case 164:
                var0 = var7.content;
            case 169:
                return var0;
            case 171:
                var4 = var7.length;
                var0 = new Array(0);
                var3 = 0;
                var8 = var3 < var4;
                if (!var8) {
                    _fun44401_ip = 224;
                    continue _fun44401
                }
            case 192:
                var9 = _closure1_slot8;
                var10 = _closure1_slot9;
                var8 = var7[var3];
                var8 = var10.bind(var5)(var1, var8, var6);
                var8 = var9.bind(var5)(var0, var8);
                var3 = var3 + 1;
                if (var3 < var4) {
                    _fun44401_ip = 192;
                    continue _fun44401
                }
            case 224:
                var1 = var1.isSlate;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var2.flattenAst = var3;
    var3 = function arg0() {
        _fun44403: for (var _fun44403_ip = 0;;) switch (_fun44403_ip) {
            case 0:
                var2 = arg0;
                var1 = arguments[1];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun44403_ip = 28;
                    continue _fun44403
                }
            case 14:
                var1 = {
                    'limit': 200,
                    'hasBailedAst': false
                };
            case 28:
                var _closure2_slot0 = var1;
                var3 = global;
                var5 = var3.Array;
                var4 = var5.isArray;
                var4 = var4.bind(var5)(var2);
                if (var4) {
                    _fun44403_ip = 228;
                    continue _fun44403
                }
            case 56:
                var5 = var2.type;
                var4 = 'text';
                if (!(var4 !== var5)) {
                    _fun44403_ip = 303;
                    continue _fun44403
                }
            case 72:
                var5 = var1.limit;
                var4 = 1;
                var4 = var5 - var4;
                var1.limit = var4;
                var5 = var1.limit;
                var4 = 0;
                if (!(!(var5 <= var4))) {
                    _fun44403_ip = 199;
                    continue _fun44403
                }
            case 101:
                var5 = var3.Array;
                var4 = var5.isArray;
                var3 = var2.content;
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun44403_ip = 155;
                    continue _fun44403
                }
            case 125:
                var4 = _closure1_slot10;
                var3 = var2.content;
                var3 = var4.bind(var6)(var3, var1);
                var3 = var3.ast;
                var2.content = var3;
            case 155:
                var4 = var2.type;
                var3 = 'list';
                if (!(var3 === var4)) {
                    _fun44403_ip = 303;
                    continue _fun44403
                }
            case 171:
                var4 = var2.items;
                var3 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot10;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    var0 = var0.ast;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                var2.items = var0;
                _fun44403_ip = 303;
                continue _fun44403;
            case 199:
                var3 = true;
                var1.hasBailedAst = var3;
                var0 = {};
                var4 = _closure1_slot5;
                var0.ast = var4;
                var0.hasBailedAst = var3;
                return var0;
            case 228:
                var5 = var2.length;
                var4 = 0;
                var0 = var4 < var5;
                if (!var0) {
                    _fun44403_ip = 303;
                    continue _fun44403
                }
            case 245:
                var7 = _closure1_slot10;
                var0 = var2[var4];
                var0 = var7.bind(var6)(var0, var1);
                var7 = var0.ast;
                var8 = _closure1_slot5;
                var0 = var4;
                if (!(var7 !== var8)) {
                    _fun44403_ip = 289;
                    continue _fun44403
                }
            case 276:
                var2[var0] = var7;
                var4 = var0 + 1;
                if (var4 < var5) {
                    _fun44403_ip = 245;
                    continue _fun44403
                }
            case 287:
                _fun44403_ip = 303;
                continue _fun44403;
            case 289:
                var3 = true;
                var1.hasBailedAst = var3;
                var2.length = var0;
            case 303:
                var0 = {};
                var0.ast = var2;
                var1 = var1.hasBailedAst;
                var0.hasBailedAst = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var2.constrainAst = var3;
    var3 = function arg0, arg1() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = 0;
        var _closure2_slot2 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun44406: for (var _fun44406_ip = 0;;) switch (_fun44406_ip) {
                case 0:
                    var0 = arg0;
                    var3 = _closure2_slot2;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun44406_ip = 41;
                        continue _fun44406
                    }
                case 16:
                    var4 = _closure2_slot0;
                    var5 = _closure2_slot2;
                    var3 = 1;
                    var3 = var5 - var3;
                    var3 = var4[var3];
                    var2 = var3.endIndex;
                case 41:
                    var3 = _closure2_slot2;
                    var3 = var3 + 1;
                    _closure2_slot2 = var3;
                    var4 = var0.type;
                    var3 = 'spoiler';
                    if (!(var3 !== var4)) {
                        _fun44406_ip = 340;
                        continue _fun44406
                    }
                case 68:
                    var3 = 'u';
                    if (!(var3 !== var4)) {
                        _fun44406_ip = 340;
                        continue _fun44406
                    }
                case 79:
                    var3 = 's';
                    if (!(var3 !== var4)) {
                        _fun44406_ip = 340;
                        continue _fun44406
                    }
                case 90:
                    var3 = 'strong';
                    if (!(var3 !== var4)) {
                        _fun44406_ip = 340;
                        continue _fun44406
                    }
                case 101:
                    var3 = 'em';
                    if (!(var3 !== var4)) {
                        _fun44406_ip = 262;
                        continue _fun44406
                    }
                case 112:
                    var3 = 'customEmoji';
                    if (!(var3 !== var4)) {
                        _fun44406_ip = 262;
                        continue _fun44406
                    }
                case 123:
                    var3 = 'emoji';
                    if (!(var3 !== var4)) {
                        _fun44406_ip = 262;
                        continue _fun44406
                    }
                case 134:
                    var3 = 'inlineCode';
                    if (!(var3 !== var4)) {
                        _fun44406_ip = 262;
                        continue _fun44406
                    }
                case 142:
                    var3 = 'text';
                    if (!(var3 !== var4)) {
                        _fun44406_ip = 220;
                        continue _fun44406
                    }
                case 150:
                    var3 = _closure2_slot1;
                    var3 = var3 + var2;
                    var0.startIndex = var3;
                    var6 = _closure1_slot11;
                    var5 = var0.content;
                    var4 = var0.startIndex;
                    var3 = undefined;
                    var4 = var6.bind(var3)(var5, var4);
                    var5 = var4.length;
                    var3 = 1;
                    var3 = var5 - var3;
                    var3 = var4[var3];
                    var3 = var3.endIndex;
                    var0.endIndex = var3;
                    return var0;
                case 220:
                    var3 = _closure2_slot1;
                    var3 = var3 + var2;
                    var0.startIndex = var3;
                    var4 = var0.startIndex;
                    var3 = var0.content;
                    var3 = var3.length;
                    var3 = var4 + var3;
                    var0.endIndex = var3;
                    return var0;
                case 262:
                    var3 = _closure2_slot1;
                    var3 = var3 + var2;
                    var0.startIndex = var3;
                    var7 = _closure1_slot11;
                    var6 = var0.content;
                    var3 = var0.startIndex;
                    var4 = 1;
                    var5 = var3 + var4;
                    var3 = undefined;
                    var5 = var7.bind(var3)(var6, var5);
                    var3 = var5.length;
                    var3 = var3 - var4;
                    var3 = var5[var3];
                    var3 = var3.endIndex;
                    var3 = var3 + var4;
                    var0.endIndex = var3;
                    return var0;
                case 340:
                    var1 = _closure2_slot1;
                    var1 = var1 + var2;
                    var0.startIndex = var1;
                    var5 = _closure1_slot11;
                    var4 = var0.content;
                    var1 = var0.startIndex;
                    var2 = 2;
                    var3 = var1 + var2;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var4, var3);
                    var4 = var3.length;
                    var1 = 1;
                    var1 = var4 - var1;
                    var1 = var3[var1];
                    var1 = var1.endIndex;
                    var1 = var1 + var2;
                    var0.endIndex = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot11 = var3;
    var2.getIndexedAST = var3;
    var2.MarkupParserNodeTypeError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 162, 2]);