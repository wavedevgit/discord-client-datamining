// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var _closure1_slot0 = var2;
    var0 = function arg0() {
        _fun13771: for (var _fun13771_ip = 0;;) switch (_fun13771_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.length;
                var3 = 0;
                var0 = var3 < var0;
                var1 = undefined;
                if (!var0) {
                    _fun13771_ip = 51;
                    continue _fun13771
                }
            case 22:
                var5 = _closure1_slot4;
                var0 = var4[var3];
                var0 = var5.bind(var1)(var0);
                var4[var3] = var0;
                var3 = var3 + 1;
                var0 = var4.length;
                if (var3 < var0) {
                    _fun13771_ip = 22;
                    continue _fun13771
                }
            case 51:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        _fun13772: for (var _fun13772_ip = 0;;) switch (_fun13772_ip) {
            case 0:
                var1 = arg0;
                var2 = 'string';
                var0 = typeof var1;
                if (!(var2 !== var0)) {
                    _fun13772_ip = 518;
                    continue _fun13772
                }
            case 17:
                var3 = _closure1_slot2;
                var14 = undefined;
                var2 = 1;
                var3 = var3.bind(var14)(var1, var2);
                var4 = 0;
                var3 = var3[var4];
                var5 = _closure1_slot1;
                var5 = var5.Argument;
                if (!(var5 !== var3)) {
                    _fun13772_ip = 502;
                    continue _fun13772
                }
            case 58:
                var5 = _closure1_slot1;
                var5 = var5.Number;
                if (!(var5 !== var3)) {
                    _fun13772_ip = 475;
                    continue _fun13772
                }
            case 75:
                var5 = _closure1_slot1;
                var5 = var5.Date;
                if (!(var5 !== var3)) {
                    _fun13772_ip = 475;
                    continue _fun13772
                }
            case 91:
                var5 = _closure1_slot1;
                var5 = var5.Time;
                if (!(var5 !== var3)) {
                    _fun13772_ip = 475;
                    continue _fun13772
                }
            case 108:
                var5 = _closure1_slot1;
                var5 = var5.Select;
                if (!(var5 !== var3)) {
                    _fun13772_ip = 317;
                    continue _fun13772
                }
            case 125:
                var5 = _closure1_slot1;
                var5 = var5.Plural;
                if (!(var5 !== var3)) {
                    _fun13772_ip = 317;
                    continue _fun13772
                }
            case 142:
                var5 = _closure1_slot1;
                var5 = var5.Pound;
                if (!(var5 !== var3)) {
                    _fun13772_ip = 305;
                    continue _fun13772
                }
            case 159:
                var5 = _closure1_slot1;
                var5 = var5.Tag;
                if (!(var5 !== var3)) {
                    _fun13772_ip = 225;
                    continue _fun13772
                }
            case 173:
                var5 = global;
                var7 = var5.Error;
                var5 = var5.HermesInternal;
                var6 = var5.concat;
                var5 = 'FormatJS keyless JSON encountered an unknown type: ';
                var19 = var6.bind(var5)(var3);
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var20 = var6;
                var5 = new var20[var7](var19, var18);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
            case 225:
                var6 = _closure1_slot2;
                var5 = 4;
                var6 = var6.bind(var14)(var1, var5);
                var9 = var6[var4];
                var8 = var6[var2];
                var5 = 2;
                var7 = var6[var5];
                var5 = 3;
                var6 = var6[var5];
                var5 = _closure1_slot3;
                var5 = var5.bind(var14)(var7);
                var5 = null;
                if (!(var5 != var6)) {
                    _fun13772_ip = 284;
                    continue _fun13772
                }
            case 275:
                var5 = _closure1_slot3;
                var5 = var5.bind(var14)(var6);
            case 284:
                var5 = {};
                var5.type = var9;
                var5.value = var8;
                var5.children = var7;
                var5.control = var6;
                return var5;
            case 305:
                var5 = _closure1_slot0;
                var5 = var5.FORMAT_JS_POUND;
                return var5;
            case 317:
                var6 = _closure1_slot2;
                var5 = 5;
                var5 = var6.bind(var14)(var1, var5);
                var9 = var5[var4];
                var8 = var5[var2];
                var4 = 2;
                var7 = var5[var4];
                var4 = 3;
                var6 = var5[var4];
                var4 = 4;
                var5 = var5[var4];
                var12 = var7;
                for (var4 in var12)
                    case 370: {
                        case 379: var16 = var4;
                        var17 = _closure1_slot3;
                        var15 = var7[var16];
                        var15 = var17.bind(var14)(var15);
                        var15 = {};
                        var17 = var7[var16];
                        var15.value = var17;
                        var7[var16] = var15;
                        _fun13772_ip = 370;
                        continue _fun13772;
                    }
            case 411:
                var0 = _closure1_slot1;
                var0 = var0.Plural;
                if (!(var9 !== var0)) {
                    _fun13772_ip = 446;
                    continue _fun13772
                }
            case 425:
                var0 = {};
                var0.type = var9;
                var0.value = var8;
                var0.options = var7;
                var0.offset = var6;
                _fun13772_ip = 473;
                continue _fun13772;
            case 446:
                var4 = {};
                var4.type = var9;
                var4.value = var8;
                var4.options = var7;
                var4.offset = var6;
                var4.pluralType = var5;
                var0 = var4;
            case 473:
                return var0;
            case 475:
                var0 = {};
                var0.type = var3;
                var4 = var1[var2];
                var0.value = var4;
                var4 = 2;
                var4 = var1[var4];
                var0.style = var4;
                return var0;
            case 502:
                var0 = {};
                var0.type = var3;
                var2 = var1[var2];
                var0.value = var2;
                return var0;
            case 518:
                var0 = {};
                var2 = 0;
                var0.type = var2;
                var0.value = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = arg6;
    var4 = 0;
    var5 = var0[var4];
    var1 = arg1;
    var0 = undefined;
    var1 = var1.bind(var0)(var5);
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var2, var5, var6);
    var2.FormatJsNodeType = var0;
    var2.FORMAT_JS_POUND = var0;
    var5 = function arg0() {
        _fun13773: for (var _fun13773_ip = 0;;) switch (_fun13773_ip) {
            case 0:
                var2 = arg0;
                var3 = 'string';
                var0 = typeof var2;
                if (!(var3 !== var0)) {
                    _fun13773_ip = 108;
                    continue _fun13773
                }
            case 14:
                var0 = 0;
                var1 = var2[var0];
                var1 = typeof var1;
                if (!(var3 !== var1)) {
                    _fun13773_ip = 92;
                    continue _fun13773
                }
            case 27:
                var1 = var2.length;
                if (!(var0 !== var1)) {
                    _fun13773_ip = 90;
                    continue _fun13773
                }
            case 36:
                var1 = global;
                var3 = var1.Array;
                var1 = var3.isArray;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                if (var1) {
                    _fun13773_ip = 77;
                    continue _fun13773
                }
            case 64:
                var3 = _closure1_slot4;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 77:
                var1 = _closure1_slot3;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var2;
            case 90:
                return var2;
            case 92:
                var1 = _closure1_slot3;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var2;
            case 108:
                var1 = _closure1_slot4;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var2.hydrateFormatJsAst = var5;
    var5 = function arg0() {
        _fun13774: for (var _fun13774_ip = 0;;) switch (_fun13774_ip) {
            case 0:
                var2 = arg0;
                var8 = undefined;
                var1 = undefined;
                var4 = undefined;
                var0 = global;
                var5 = var0.Array;
                var3 = var5.isArray;
                var3 = var3.bind(var5)(var2);
                if (var3) {
                    _fun13774_ip = 592;
                    continue _fun13774
                }
            case 33:
                var5 = var2.type;
                var3 = _closure1_slot1;
                var3 = var3.Literal;
                if (!(var3 !== var5)) {
                    _fun13774_ip = 585;
                    continue _fun13774
                }
            case 58:
                var3 = _closure1_slot1;
                var3 = var3.Argument;
                if (!(var3 !== var5)) {
                    _fun13774_ip = 561;
                    continue _fun13774
                }
            case 75:
                var3 = _closure1_slot1;
                var3 = var3.Number;
                if (!(var3 !== var5)) {
                    _fun13774_ip = 528;
                    continue _fun13774
                }
            case 92:
                var3 = _closure1_slot1;
                var3 = var3.Date;
                if (!(var3 !== var5)) {
                    _fun13774_ip = 528;
                    continue _fun13774
                }
            case 108:
                var3 = _closure1_slot1;
                var3 = var3.Time;
                if (!(var3 !== var5)) {
                    _fun13774_ip = 528;
                    continue _fun13774
                }
            case 125:
                var3 = _closure1_slot1;
                var3 = var3.Select;
                if (!(var3 !== var5)) {
                    _fun13774_ip = 403;
                    continue _fun13774
                }
            case 142:
                var3 = _closure1_slot1;
                var3 = var3.Plural;
                if (!(var3 !== var5)) {
                    _fun13774_ip = 258;
                    continue _fun13774
                }
            case 156:
                var3 = _closure1_slot1;
                var3 = var3.Pound;
                if (!(var3 !== var5)) {
                    _fun13774_ip = 243;
                    continue _fun13774
                }
            case 170:
                var3 = _closure1_slot1;
                var3 = var3.Tag;
                if (!(var3 !== var5)) {
                    _fun13774_ip = 186;
                    continue _fun13774
                }
            case 184:
                return var8;
            case 186:
                var5 = var2.type;
                var3 = new Array(4);
                var3[0] = var5;
                var5 = var2.value;
                var3[1] = var5;
                var6 = _closure1_slot5;
                var5 = var2.children;
                var5 = var6.bind(var8)(var5);
                var3[2] = var5;
                var5 = var2.control;
                var5 = var6.bind(var8)(var5);
                var3[3] = var5;
                return var3;
            case 243:
                var5 = var2.type;
                var3 = new Array(1);
                var3[0] = var5;
                return var3;
            case 258:
                var4 = {};
                var6 = var0.Object;
                var5 = var6.entries;
                var3 = var2.options;
                var3 = var5.bind(var6)(var3);
                var10 = var3;
                var5 = var10[Symbol.iterator];
                var10 = var5().next;
                var9 = 2;
                var6 = 0;
                var3 = 1;
            case 296:
                var12 = var10().value;
                var11 = var5;
                if (!(var11 !== var8)) {
                    _fun13774_ip = 355;
                    continue _fun13774
                }
            case 307: // try_start_0
                var11 = _closure1_slot2;
                var11 = var11.bind(var8)(var12, var9);
                var13 = var11[var6];
                var11 = var11[var3];
                var12 = var4;
                var14 = _closure1_slot5;
                var11 = var11.value;
                var11 = var14.bind(var8)(var11);
                var12[var13] = var11;
            case 346: // try_end0
                _fun13774_ip = 296;
                continue _fun13774;
            case 348: // catch_target0
                CatchBlockStart(arg_register = 3);
                var5.return();
                throw var3;
            case 355:
                var5 = var2.type;
                var3 = new Array(5);
                var3[0] = var5;
                var5 = var2.value;
                var3[1] = var5;
                var3[2] = var4;
                var4 = var2.offset;
                var3[3] = var4;
                var4 = var2.pluralType;
                var3[4] = var4;
                return var3;
            case 403:
                var1 = {};
                var4 = var0.Object;
                var3 = var4.entries;
                var0 = var2.options;
                var0 = var3.bind(var4)(var0);
                var6 = var0;
                var3 = var6[Symbol.iterator];
                var6 = var3().next;
                var5 = 2;
                var4 = 0;
                var0 = 1;
            case 441:
                var10 = var6().value;
                var9 = var3;
                if (!(var9 !== var8)) {
                    _fun13774_ip = 500;
                    continue _fun13774
                }
            case 452: // try_start_1
                var9 = _closure1_slot2;
                var9 = var9.bind(var8)(var10, var5);
                var11 = var9[var4];
                var9 = var9[var0];
                var10 = var1;
                var12 = _closure1_slot5;
                var9 = var9.value;
                var9 = var12.bind(var8)(var9);
                var10[var11] = var9;
            case 491: // try_end1
                _fun13774_ip = 441;
                continue _fun13774;
            case 493: // catch_target1
                CatchBlockStart(arg_register = 0);
                var3.return();
                throw var0;
            case 500:
                var3 = var2.type;
                var0 = new Array(3);
                var0[0] = var3;
                var3 = var2.value;
                var0[1] = var3;
                var0[2] = var1;
                return var0;
            case 528:
                var1 = var2.type;
                var0 = new Array(3);
                var0[0] = var1;
                var1 = var2.value;
                var0[1] = var1;
                var1 = var2.style;
                var0[2] = var1;
                return var0;
            case 561:
                var1 = var2.type;
                var0 = new Array(2);
                var0[0] = var1;
                var1 = var2.value;
                var0[1] = var1;
                return var0;
            case 585:
                var0 = var2.value;
                return var0;
            case 592:
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var2.compressFormatJsToAst = var5;
    var5 = function arg0() {
        _fun13776: for (var _fun13776_ip = 0;;) switch (_fun13776_ip) {
            case 0:
                var5 = arg0;
                var4 = 'string';
                var0 = typeof var5;
                var0 = var4 === var0;
                if (var0) {
                    _fun13776_ip = 86;
                    continue _fun13776
                }
            case 17:
                var2 = global;
                var3 = var2.Array;
                var1 = var3.isArray;
                var1 = var1.bind(var3)(var5);
                var3 = !var1;
                var1 = !var3;
                if (var3) {
                    _fun13776_ip = 83;
                    continue _fun13776
                }
            case 44:
                var7 = var2.Array;
                var6 = var7.isArray;
                var3 = 0;
                var2 = var5[var3];
                var2 = var6.bind(var7)(var2);
                if (var2) {
                    _fun13776_ip = 80;
                    continue _fun13776
                }
            case 69:
                var3 = var5[var3];
                var3 = typeof var3;
                var2 = var4 === var3;
            case 80:
                var1 = var2;
            case 83:
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var2.isCompressedAst = var5;
    var6 = {};
    var _closure1_slot1 = var6;
    var2.FormatJsNodeType = var6;
    var6.Literal = var4;
    var3 = 'Literal';
    var6[var4] = var3;
    var4 = 1;
    var6.Argument = var4;
    var3 = 'Argument';
    var6[var4] = var3;
    var4 = 2;
    var6.Number = var4;
    var3 = 'Number';
    var6[var4] = var3;
    var4 = 3;
    var6.Date = var4;
    var3 = 'Date';
    var6[var4] = var3;
    var4 = 4;
    var6.Time = var4;
    var3 = 'Time';
    var6[var4] = var3;
    var4 = 5;
    var6.Select = var4;
    var3 = 'Select';
    var6[var4] = var3;
    var4 = 6;
    var6.Plural = var4;
    var3 = 'Plural';
    var6[var4] = var3;
    var5 = 7;
    var6.Pound = var5;
    var3 = 'Pound';
    var6[var5] = var3;
    var4 = 8;
    var6.Tag = var4;
    var3 = 'Tag';
    var6[var4] = var3;
    var4 = var1.Object;
    var3 = var4.freeze;
    var1 = {};
    var1.type = var5;
    var1 = var3.bind(var4)(var1);
    var2.FORMAT_JS_POUND = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);