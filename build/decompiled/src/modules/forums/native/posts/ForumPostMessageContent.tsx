// modules/forums/native/posts/ForumPostMessageContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        _fun89674: for (var _fun89674_ip = 0;;) switch (_fun89674_ip) {
            case 0:
                var4 = arg0;
                var3 = arg3;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var2 = var5.scaleTextLineHeight;
                var1 = arg1;
                var0 = arg2;
                var2 = var2.bind(var5)(var1, var0);
                var0 = {};
                var1 = {};
                var5 = 'flex-start';
                var1.alignSelf = var5;
                var0.text = var1;
                var1 = {
                    'flexWrap': 'wrap',
                    'flexDirection': 'row',
                    'alignSelf': 'flex-start',
                    'rowGap': 3,
                    'maxHeight': null,
                    'overflow': 'hidden'
                };
                var5 = null;
                if (!(var5 == var3)) {
                    _fun89674_ip = 94;
                    continue _fun89674
                }
            case 88:
                var2 = var4 * var2;
                _fun89674_ip = 98;
                continue _fun89674;
            case 94:
                var2 = var3 * var4;
            case 98:
                var1.maxHeight = var2;
                var0.container = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/ForumPostMessageContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89675: for (var _fun89675_ip = 0;;) switch (_fun89675_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.messageContent;
                var13 = var0.message;
                var8 = var0.isMessageDeleted;
                var12 = var0.hasUnreads;
                var _closure2_slot0 = var12;
                var11 = var0.messageLoaded;
                var9 = var0.textStyle;
                var _closure2_slot1 = var9;
                var2 = var0.lineClamp;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun89675_ip = 63;
                    continue _fun89675
                }
            case 60:
                var2 = 2;
            case 63:
                var _closure2_slot2 = var2;
                var7 = var0.senderModifier;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var5 = var5.bind(var4)(var0);
                var0 = {};
                var0.message = var13;
                var0.messageLoaded = var11;
                var0.messageContent = var10;
                var0.isMessageDeleted = var8;
                var0.senderModifier = var7;
                var0 = var5.bind(var4)(var0);
                var7 = var0.content;
                _closure2_slot3 = var7;
                var10 = var0.style;
                _closure2_slot4 = var10;
                var11 = var0.variant;
                _closure2_slot5 = var11;
                var13 = _closure1_slot4;
                var0 = var13.useState;
                var8 = var0.bind(var13)();
                var5 = _closure1_slot3;
                var0 = 2;
                var5 = var5.bind(var4)(var8, var0);
                var0 = 0;
                var15 = var5[var0];
                _closure2_slot6 = var15;
                var0 = 1;
                var0 = var5[var0];
                _closure2_slot7 = var0;
                var5 = _closure1_slot0;
                var0 = 7;
                var0 = var6[var0];
                var5 = var5.bind(var4)(var0);
                var0 = var5.useFontScale;
                var18 = var0.bind(var5)();
                var0 = _closure1_slot7;
                var21 = undefined;
                var20 = var2;
                var19 = var11;
                var17 = var15;
                var6 = var21[var0](var20, var19, var18, var17, var16);
                _closure2_slot8 = var6;
                var8 = var13.useMemo;
                var5 = new Array(1);
                var5[0] = var7;
                var0 = function() { // Environment: var3
                    _fun89676: for (var _fun89676_ip = 0;;) switch (_fun89676_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var1 = 'string';
                            var0 = typeof var0;
                            var0 = var1 !== var0;
                            if (!var0) {
                                _fun89676_ip = 31;
                                continue _fun89676
                            }
                        case 21:
                            var3 = _closure2_slot3;
                            var1 = null;
                            var0 = var1 != var3;
                        case 31:
                            if (!var0) {
                                _fun89676_ip = 84;
                                continue _fun89676
                            }
                        case 34:
                            var1 = global;
                            var4 = var1.Array;
                            var3 = var4.isArray;
                            var1 = _closure2_slot3;
                            var1 = var3.bind(var4)(var1);
                            if (var1) {
                                _fun89676_ip = 81;
                                continue _fun89676
                            }
                        case 59:
                            var4 = _closure1_slot4;
                            var3 = var4.isValidElement;
                            var2 = _closure2_slot3;
                            var1 = var3.bind(var4)(var2);
                        case 81:
                            var0 = var1;
                        case 84:
                            return var0;
                    }
                };
                var0 = var8.bind(var13)(var0, var5);
                var14 = var13.useCallback;
                var8 = new Array(1);
                var8[0] = var15;
                var5 = function(arg0) { // Environment: var3
                    _fun89677: for (var _fun89677_ip = 0;;) switch (_fun89677_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun89677_ip = 67;
                                continue _fun89677
                            }
                        case 13:
                            var2 = arg0;
                            var2 = var2.nativeEvent;
                            var2 = var2.lines;
                            if (!(var1 != var2)) {
                                _fun89677_ip = 67;
                                continue _fun89677
                            }
                        case 32:
                            var3 = var2.length;
                            var1 = 0;
                            if (!(var3 > var1)) {
                                _fun89677_ip = 67;
                                continue _fun89677
                            }
                        case 43:
                            var2 = var2[var1];
                            var2 = var2.height;
                            if (!(var2 > var1)) {
                                _fun89677_ip = 67;
                                continue _fun89677
                            }
                        case 56:
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var14.bind(var13)(var5, var8);
                _closure2_slot9 = var14;
                var8 = var13.useMemo;
                var5 = new Array(9);
                var5[0] = var7;
                var5[1] = var11;
                var5[2] = var12;
                var5[3] = var10;
                var5[4] = var9;
                var5[5] = var6;
                var5[6] = var2;
                var5[7] = var15;
                var5[8] = var14;
                var3 = function() { // Environment: var3
                    _fun89678: for (var _fun89678_ip = 0;;) switch (_fun89678_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Array;
                            var2 = var3.isArray;
                            var0 = _closure2_slot3;
                            var0 = var2.bind(var3)(var0);
                            var3 = _closure2_slot3;
                            if (var0) {
                                _fun89678_ip = 37;
                                continue _fun89678
                            }
                        case 32:
                            var0 = var3;
                            _fun89678_ip = 56;
                            continue _fun89678;
                        case 37:
                            var2 = var3.map;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun89679: for (var _fun89679_ip = 0;;) switch (_fun89679_ip) {
                                    case 0:
                                        var7 = arg0;
                                        var6 = arg1;
                                        var1 = typeof var7;
                                        var0 = 'string';
                                        if (!(var0 !== var1)) {
                                            _fun89679_ip = 166;
                                            continue _fun89679
                                        }
                                    case 20:
                                        var0 = 'number';
                                        if (!(var0 !== var1)) {
                                            _fun89679_ip = 166;
                                            continue _fun89679
                                        }
                                    case 31:
                                        var0 = 'boolean';
                                        if (!(var0 !== var1)) {
                                            _fun89679_ip = 166;
                                            continue _fun89679
                                        }
                                    case 42:
                                        var2 = _closure1_slot4;
                                        var1 = var2.isValidElement;
                                        var1 = var1.bind(var2)(var7);
                                        if (!var1) {
                                            _fun89679_ip = 74;
                                            continue _fun89679
                                        }
                                    case 63:
                                        var2 = var7.key;
                                        var1 = null;
                                        if (!(var1 == var2)) {
                                            _fun89679_ip = 100;
                                            continue _fun89679
                                        }
                                    case 74:
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var2 = var1.concat;
                                        var1 = 'element-';
                                        var4 = var2.bind(var1)(var6);
                                        _fun89679_ip = 135;
                                        continue _fun89679;
                                    case 100:
                                        var5 = var7.key;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var3 = var1.concat;
                                        var2 = 'element-';
                                        var1 = '-';
                                        var4 = var3.bind(var2)(var5, var1, var6);
                                    case 135:
                                        var3 = _closure1_slot6;
                                        var0 = _closure1_slot4;
                                        var2 = var0.Fragment;
                                        var1 = {};
                                        var1.children = var7;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2, var1, var4);
                                        return var0;
                                    case 166:
                                        var4 = _closure1_slot6;
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 8;
                                        var0 = var2[var0];
                                        var3 = undefined;
                                        var0 = var1.bind(var3)(var0);
                                        var2 = var0.Text;
                                        var1 = {};
                                        var0 = _closure2_slot5;
                                        var1.variant = var0;
                                        var8 = _closure2_slot0;
                                        var0 = 'text-muted';
                                        if (!var8) {
                                            _fun89679_ip = 232;
                                            continue _fun89679
                                        }
                                    case 226:
                                        var0 = 'text-default';
                                    case 232:
                                        var1.color = var0;
                                        var8 = _closure2_slot4;
                                        var0 = new Array(3);
                                        var0[0] = var8;
                                        var8 = _closure2_slot1;
                                        var0[1] = var8;
                                        var8 = _closure2_slot8;
                                        var8 = var8.text;
                                        var0[2] = var8;
                                        var1.style = var0;
                                        var0 = _closure2_slot2;
                                        var1.lineClamp = var0;
                                        var0 = 'tail';
                                        var1.ellipsizeMode = var0;
                                        var8 = _closure2_slot6;
                                        var0 = null;
                                        var8 = var0 == var8;
                                        var0 = undefined;
                                        if (!var8) {
                                            _fun89679_ip = 310;
                                            continue _fun89679
                                        }
                                    case 306:
                                        var0 = _closure2_slot9;
                                    case 310:
                                        var1.onTextLayout = var0;
                                        var0 = global;
                                        var5 = var0.String;
                                        var5 = var5.bind(var3)(var7);
                                        var1.children = var5;
                                        var0 = var0.HermesInternal;
                                        var5 = var0.concat;
                                        var0 = 'text-';
                                        var0 = var5.bind(var0)(var6);
                                        var0 = var4.bind(var3)(var2, var1, var0);
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var5 = var8.bind(var13)(var3, var5);
                var3 = _closure1_slot6;
                var8 = var2;
                if (var0) {
                    _fun89675_ip = 503;
                    continue _fun89675
                }
            case 402:
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 8;
                var0 = var13[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.Text;
                var0 = {};
                var0.variant = var11;
                var11 = 'text-muted';
                if (!var12) {
                    _fun89675_ip = 448;
                    continue _fun89675
                }
            case 442:
                var11 = 'text-default';
            case 448:
                var0.color = var11;
                var0.lineClamp = var8;
                var8 = 'tail';
                var0.ellipsizeMode = var8;
                var8 = new Array(3);
                var8[0] = var10;
                var8[1] = var9;
                var9 = var6.text;
                var8[2] = var9;
                var0.style = var8;
                var0.children = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun89675_ip = 528;
                continue _fun89675;
            case 503:
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var6.container;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 528:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 7005, 11667, 4091, 3943, 2]);