// utils/ChangeLogUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var4 = function(arg0) { // Original name: getDefaultRules, environment: var1
        var0 = {};
        var3 = _closure1_slot13;
        var2 = undefined;
        var1 = arg0;
        var4 = var3.bind(var2)(var1);
        var5 = var0;
        var1 = copyDataProperties(var5, var4);
        return var0;
    };
    var _closure1_slot16 = var4;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var3 = 0;
    var8 = var6[var3];
    var0 = undefined;
    var8 = var7.bind(var0)(var8);
    var8 = var8.defaultRules;
    var8 = var8.lheading;
    var _closure1_slot3 = var8;
    var8 = var6[var3];
    var8 = var7.bind(var0)(var8);
    var8 = var8.defaultRules;
    var8 = var8.heading;
    var _closure1_slot4 = var8;
    var8 = var6[var3];
    var8 = var7.bind(var0)(var8);
    var8 = var8.defaultRules;
    var8 = var8.link;
    var _closure1_slot5 = var8;
    var8 = var6[var3];
    var8 = var7.bind(var0)(var8);
    var8 = var8.defaultRules;
    var8 = var8.image;
    var _closure1_slot6 = var8;
    var8 = var6[var3];
    var8 = var7.bind(var0)(var8);
    var8 = var8.defaultRules;
    var8 = var8.list;
    var _closure1_slot7 = var8;
    var8 = var6[var3];
    var8 = var7.bind(var0)(var8);
    var8 = var8.defaultRules;
    var8 = var8.blockQuote;
    var _closure1_slot8 = var8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.defaultRules;
    var3 = var3.paragraph;
    var _closure1_slot9 = var3;
    var3 = /\{(.+?)}/;
    var _closure1_slot10 = var3;
    var3 = /^\$(\w+?)\$/;
    var _closure1_slot11 = var3;
    var3 = function(arg0) { // Original name: parseWithClassNameExtraction, environment: var1
        _fun55819: for (var _fun55819_ip = 0;;) switch (_fun55819_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.transformUpperCase;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun55819_ip = 19;
                    continue _fun55819
                }
            case 17:
                var1 = false;
            case 19:
                var _closure2_slot0 = var1;
                var0 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun55820: for (var _fun55820_ip = 0;;) switch (_fun55820_ip) {
                        case 0:
                            var4 = arg0;
                            var7 = _closure1_slot10;
                            var2 = var7.exec;
                            var3 = 1;
                            var0 = var4[var3];
                            var6 = var2.bind(var7)(var0);
                            var5 = var4[var3];
                            var2 = var5.replace;
                            var0 = '';
                            var2 = var2.bind(var5)(var7, var0);
                            var0 = _closure2_slot0;
                            var5 = var2;
                            if (!var0) {
                                _fun55820_ip = 70;
                                continue _fun55820
                            }
                        case 60:
                            var0 = var2.toUpperCase;
                            var5 = var0.bind(var2)();
                        case 70:
                            var0 = {};
                            var2 = null;
                            var7 = var2 != var6;
                            if (!var7) {
                                _fun55820_ip = 85;
                                continue _fun55820
                            }
                        case 81:
                            var2 = var6[var3];
                        case 85:
                            var0.className = var2;
                            var2 = 2;
                            var6 = var4[var2];
                            var4 = '=';
                            if (!(var4 === var6)) {
                                _fun55820_ip = 108;
                                continue _fun55820
                            }
                        case 105:
                            var2 = var3;
                        case 108:
                            var0.level = var2;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 0;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.parseInline;
                            var2 = arg1;
                            var1 = arg2;
                            var1 = var3.bind(var4)(var2, var5, var1);
                            var0.content = var1;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = function(arg0) { // Original name: defaultRules, environment: var1
        _fun55821: for (var _fun55821_ip = 0;;) switch (_fun55821_ip) {
            case 0:
                var5 = arg0;
                var0 = {};
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 1;
                var8 = var1[var7];
                var6 = undefined;
                var8 = var4.bind(var6)(var8);
                var11 = var8.baseRules;
                var12 = var0;
                var8 = copyDataProperties(var12, var11);
                var8 = {};
                var11 = _closure1_slot6;
                var12 = var8;
                var9 = copyDataProperties(var12, var11);
                var1 = var1[var7];
                var1 = var4.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.image;
                var4 = 'function';
                var1 = typeof var1;
                if (!(var4 !== var1)) {
                    _fun55821_ip = 121;
                    continue _fun55821
                }
            case 90:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var9.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.image;
                _fun55821_ip = 155;
                continue _fun55821;
            case 121:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var10.bind(var6)(var9);
                var10 = var9.customRules;
                var9 = var10.image;
                var1 = var9.bind(var10)(var5);
            case 155:
                var12 = var8;
                var11 = var1;
                var1 = copyDataProperties(var12, var11);
                var1 = 'image';
                var0[var1] = var8;
                var8 = {};
                var11 = _closure1_slot5;
                var12 = var8;
                var1 = copyDataProperties(var12, var11);
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var9.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.link;
                var1 = typeof var1;
                if (!(var4 !== var1)) {
                    _fun55821_ip = 254;
                    continue _fun55821
                }
            case 223:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var9.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.link;
                _fun55821_ip = 288;
                continue _fun55821;
            case 254:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var10.bind(var6)(var9);
                var10 = var9.customRules;
                var9 = var10.link;
                var1 = var9.bind(var10)(var5);
            case 288:
                var12 = var8;
                var11 = var1;
                var1 = copyDataProperties(var12, var11);
                var1 = 'link';
                var0[var1] = var8;
                var8 = {};
                var11 = _closure1_slot7;
                var12 = var8;
                var1 = copyDataProperties(var12, var11);
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var9.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.list;
                var1 = typeof var1;
                if (!(var4 !== var1)) {
                    _fun55821_ip = 387;
                    continue _fun55821
                }
            case 356:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var9.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.list;
                _fun55821_ip = 421;
                continue _fun55821;
            case 387:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var10.bind(var6)(var9);
                var10 = var9.customRules;
                var9 = var10.list;
                var1 = var9.bind(var10)(var5);
            case 421:
                var12 = var8;
                var11 = var1;
                var1 = copyDataProperties(var12, var11);
                var1 = 'list';
                var0[var1] = var8;
                var8 = {};
                var10 = _closure1_slot1;
                var1 = _closure1_slot2;
                var9 = 2;
                var9 = var1[var9];
                var9 = var10.bind(var6)(var9);
                var9 = var9.order;
                var8.order = var9;
                var9 = function(arg0) { // Original name: match, environment: var2
                    var2 = _closure1_slot11;
                    var1 = var2.exec;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8.match = var9;
                var9 = function(arg0, arg1, arg2) { // Original name: parse, environment: var2
                    _fun55823: for (var _fun55823_ip = 0;;) switch (_fun55823_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg2;
                            var1 = var0.interpolations;
                            var0 = 1;
                            var0 = var3[var0];
                            var1 = var1[var0];
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun55823_ip = 50;
                                continue _fun55823
                            }
                        case 31:
                            var0 = {};
                            var2 = 'interpolation';
                            var0.type = var2;
                            var0.renderer = var1;
                            _fun55823_ip = 73;
                            continue _fun55823;
                        case 50:
                            var1 = {};
                            var2 = 'text';
                            var1.type = var2;
                            var2 = 0;
                            var2 = var3[var2];
                            var1.content = var2;
                            var0 = var1;
                        case 73:
                            return var0;
                    }
                };
                var8.parse = var9;
                var2 = function(arg0) { // Original name: react, environment: var2
                    var1 = arg0;
                    var0 = var1.renderer;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8.react = var2;
                var2 = 'interpolation';
                var0[var2] = var8;
                var2 = {};
                var11 = _closure1_slot3;
                var12 = var2;
                var8 = copyDataProperties(var12, var11);
                var9 = _closure1_slot12;
                var8 = {};
                var10 = true;
                var8.transformUpperCase = var10;
                var9 = var9.bind(var6)(var8);
                var8 = 'parse';
                var2[var8] = var9;
                var8 = _closure1_slot0;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.lheading;
                var1 = typeof var1;
                if (!(var4 !== var1)) {
                    _fun55821_ip = 617;
                    continue _fun55821
                }
            case 586:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.lheading;
                _fun55821_ip = 651;
                continue _fun55821;
            case 617:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var9 = var8.customRules;
                var8 = var9.lheading;
                var1 = var8.bind(var9)(var5);
            case 651:
                var12 = var2;
                var11 = var1;
                var1 = copyDataProperties(var12, var11);
                var1 = 'lheading';
                var0[var1] = var2;
                var2 = {};
                var11 = _closure1_slot4;
                var12 = var2;
                var1 = copyDataProperties(var12, var11);
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.heading;
                var1 = typeof var1;
                if (!(var4 !== var1)) {
                    _fun55821_ip = 750;
                    continue _fun55821
                }
            case 719:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.heading;
                _fun55821_ip = 784;
                continue _fun55821;
            case 750:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var9 = var8.customRules;
                var8 = var9.heading;
                var1 = var8.bind(var9)(var5);
            case 784:
                var12 = var2;
                var11 = var1;
                var1 = copyDataProperties(var12, var11);
                var1 = 'heading';
                var0[var1] = var2;
                var2 = {};
                var11 = _closure1_slot8;
                var12 = var2;
                var1 = copyDataProperties(var12, var11);
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.blockQuote;
                var1 = typeof var1;
                if (!(var4 !== var1)) {
                    _fun55821_ip = 883;
                    continue _fun55821
                }
            case 852:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.blockQuote;
                _fun55821_ip = 917;
                continue _fun55821;
            case 883:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var9 = var8.customRules;
                var8 = var9.blockQuote;
                var1 = var8.bind(var9)(var5);
            case 917:
                var12 = var2;
                var11 = var1;
                var1 = copyDataProperties(var12, var11);
                var1 = 'blockQuote';
                var0[var1] = var2;
                var2 = {};
                var11 = _closure1_slot9;
                var12 = var2;
                var1 = copyDataProperties(var12, var11);
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.paragraph;
                var1 = typeof var1;
                if (!(var4 !== var1)) {
                    _fun55821_ip = 1016;
                    continue _fun55821
                }
            case 985:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var4.bind(var6)(var1);
                var1 = var1.customRules;
                var1 = var1.paragraph;
                _fun55821_ip = 1050;
                continue _fun55821;
            case 1016:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var4.bind(var6)(var3);
                var4 = var3.customRules;
                var3 = var4.paragraph;
                var1 = var3.bind(var4)(var5);
            case 1050:
                var12 = var2;
                var11 = var1;
                var1 = copyDataProperties(var12, var11);
                var1 = 'paragraph';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var3 = function(arg0) { // Original name: specialRules, environment: var1
        _fun55825: for (var _fun55825_ip = 0;;) switch (_fun55825_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var7 = _closure1_slot3;
                var8 = var1;
                var2 = copyDataProperties(var8, var7);
                var4 = _closure1_slot12;
                var2 = {};
                var5 = false;
                var2.transformUpperCase = var5;
                var5 = undefined;
                var4 = var4.bind(var5)(var2);
                var2 = 'parse';
                var1[var2] = var4;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.customRules;
                var2 = var2.lheading;
                var4 = 'function';
                var2 = typeof var2;
                if (!(var4 !== var2)) {
                    _fun55825_ip = 121;
                    continue _fun55825
                }
            case 90:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.customRules;
                var2 = var2.lheading;
                _fun55825_ip = 158;
                continue _fun55825;
            case 121:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var5 = var3.customRules;
                var4 = var5.lheading;
                var3 = arg0;
                var2 = var4.bind(var5)(var3);
            case 158:
                var8 = var1;
                var7 = var2;
                var2 = copyDataProperties(var8, var7);
                var0.lheading = var1;
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = function(arg0) { // Original name: messageRules, environment: var1
        var0 = {};
        var4 = _closure1_slot13;
        var3 = undefined;
        var2 = arg0;
        var6 = var4.bind(var3)(var2);
        var7 = var0;
        var2 = copyDataProperties(var7, var6);
        var5 = {};
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 0;
        var1 = var4[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.defaultRules;
        var6 = var1.newline;
        var7 = var5;
        var1 = copyDataProperties(var7, var6);
        var1 = 'newline';
        var0[var1] = var5;
        var1 = 2;
        var1 = var4[var1];
        var5 = var2.bind(var3)(var1);
        var1 = 'text';
        var0[var1] = var5;
        var1 = 3;
        var1 = var4[var1];
        var5 = var2.bind(var3)(var1);
        var1 = 'list';
        var0[var1] = var5;
        var1 = 4;
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = 'subtext';
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot15 = var3;
    var3 = {};
    var3.getDefaultRules = var4;
    var4 = function(arg0) { // Original name: getSpecialRules, environment: var1
        var3 = arg0;
        var0 = {};
        var4 = _closure1_slot13;
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var6 = var0;
        var4 = copyDataProperties(var6, var5);
        var1 = _closure1_slot14;
        var5 = var1.bind(var2)(var3);
        var6 = var0;
        var1 = copyDataProperties(var6, var5);
        return var0;
    };
    var3.getSpecialRules = var4;
    var4 = function(arg0) { // Original name: getMessageRules, environment: var1
        var0 = {};
        var3 = _closure1_slot15;
        var2 = undefined;
        var1 = arg0;
        var4 = var3.bind(var2)(var1);
        var5 = var0;
        var1 = copyDataProperties(var5, var4);
        return var0;
    };
    var3.getMessageRules = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ChangeLogUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: renderChangelogMessageMarkup, environment: var1
        _fun55829: for (var _fun55829_ip = 0;;) switch (_fun55829_ip) {
            case 0:
                var7 = arg2;
                var0 = {
                    'hasSpoilerEmbeds': false,
                    'hasBailedAst': false
                };
                var5 = false;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.reactParserFor;
                var6 = _closure1_slot16;
                var1 = arg1;
                var1 = var6.bind(var4)(var1);
                var3 = var2.bind(var3)(var1);
                var1 = arg0;
                var2 = var1.content;
                var1 = null;
                if (!(var1 == var7)) {
                    _fun55829_ip = 85;
                    continue _fun55829
                }
            case 81:
                var1 = {};
                _fun55829_ip = 95;
                continue _fun55829;
            case 85:
                var6 = {};
                var6.changeLog = var7;
                var1 = var6;
            case 95:
                var1 = var3.bind(var4)(var2, var5, var1);
                var0.content = var1;
                return var0;
        }
    };
    var2.renderChangelogMessageMarkup = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3105, 6736, 4744, 4760, 4761, 4737, 2]);