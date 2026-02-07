// modules/stickers/native/useStickerPickerListData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var11 = 0;
    var4 = var6[var11];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var10 = 1;
    var1 = var6[var10];
    var1 = var5.bind(var0)(var1);
    var1 = var1.useStickerPickerStore;
    var _closure1_slot4 = var1;
    var8 = 2;
    var1 = var6[var8];
    var1 = var5.bind(var0)(var1);
    var7 = var1.LABEL_HEIGHT;
    var4 = var1.MIN_MARGIN;
    var _closure1_slot5 = var4;
    var4 = var1.ROW_HEIGHT;
    var _closure1_slot6 = var4;
    var1 = var1.STICKER_SIZE;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.PADDING_VERTICAL;
    var1 = {};
    var1.STICKERS = var11;
    var9 = 'STICKERS';
    var1[var11] = var9;
    var1.NSFW = var10;
    var9 = 'NSFW';
    var1[var10] = var9;
    var _closure1_slot8 = var1;
    var4 = var8 * var4;
    var4 = var7 + var4;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/useStickerPickerListData.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var1 = arg0;
        var7 = var1.channel;
        var8 = var1.containerWidth;
        var _closure2_slot0 = var8;
        var5 = var1.searchResults;
        var _closure2_slot1 = var5;
        var6 = var1.stickerFormats;
        var _closure2_slot2 = var6;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 4;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.useStickerCategories;
        var7 = var2.bind(var3)(var7);
        var _closure2_slot3 = var7;
        var3 = _closure1_slot4;
        var2 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.packToScrollTo;
            return var0;
        };
        var4 = var3.bind(var4)(var2);
        var _closure2_slot4 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1[3] = var5;
        var1[4] = var4;
        var0 = function() { // Environment: var0
            _fun75184: for (var _fun75184_ip = 0;;) switch (_fun75184_ip) {
                case 0:
                    var0 = global;
                    var5 = var0.Math;
                    var3 = var5.floor;
                    var2 = _closure2_slot0;
                    var7 = _closure1_slot5;
                    var6 = var2 - var7;
                    var2 = _closure1_slot7;
                    var2 = var2 + var7;
                    var2 = var6 / var2;
                    var3 = var3.bind(var5)(var2);
                    var _closure3_slot0 = var3;
                    var7 = new Array(0);
                    var _closure3_slot1 = var7;
                    var6 = new Array(0);
                    var5 = new Array(0);
                    var _closure3_slot2 = var5;
                    var2 = new Array(0);
                    var _closure3_slot3 = var2;
                    var10 = undefined;
                    var _closure3_slot4 = var10;
                    var9 = function arg0() {
                        _fun75185: for (var _fun75185_ip = 0;;) switch (_fun75185_ip) {
                            case 0:
                                var4 = arg0;
                                var3 = arguments[1];
                                var0 = undefined;
                                if (!(var3 === var0)) {
                                    _fun75185_ip = 16;
                                    continue _fun75185
                                }
                            case 12:
                                var3 = '';
                            case 16:
                                var2 = true;
                                var1 = arguments[2];
                                if (!(var2 !== var1)) {
                                    _fun75185_ip = 142;
                                    continue _fun75185
                                }
                            case 25:
                                var2 = var4.filter;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure2_slot2;
                                    var1 = var2.includes;
                                    var0 = arg0;
                                    var0 = var0.format_type;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var6 = var2.bind(var4)(var1);
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 5;
                                var1 = var4[var1];
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.chunk;
                                var1 = _closure3_slot0;
                                var1 = var4.bind(var5)(var6, var1);
                                var6 = _closure3_slot3;
                                var5 = var6.push;
                                var4 = {};
                                var7 = _closure1_slot8;
                                var7 = var7.STICKERS;
                                var4.type = var7;
                                var4.stickersByRow = var1;
                                var4 = var5.bind(var6)(var4);
                                var4 = _closure3_slot1;
                                var2 = var4.push;
                                var1 = var1.length;
                                var1 = var2.bind(var4)(var1);
                                _fun75185_ip = 204;
                                continue _fun75185;
                            case 142:
                                var5 = _closure3_slot3;
                                var4 = var5.push;
                                var2 = {};
                                var6 = _closure1_slot8;
                                var6 = var6.NSFW;
                                var2.type = var6;
                                var6 = new Array(0);
                                var2.stickersByRow = var6;
                                var2 = var4.bind(var5)(var2);
                                var4 = _closure3_slot1;
                                var2 = var4.push;
                                var1 = 1;
                                var1 = var2.bind(var4)(var1);
                            case 204:
                                var2 = _closure3_slot2;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                        }
                    };
                    var _closure3_slot5 = var9;
                    var11 = _closure2_slot1;
                    var8 = null;
                    if (!(var8 == var11)) {
                        _fun75184_ip = 176;
                        continue _fun75184
                    }
                case 110:
                    var12 = _closure2_slot3;
                    var11 = var12.map;
                    var8 = function(arg0, arg1) { // Environment: var1
                        _fun75187: for (var _fun75187_ip = 0;;) switch (_fun75187_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = _closure2_slot4;
                                var0 = var1.id;
                                if (!(var2 === var0)) {
                                    _fun75187_ip = 29;
                                    continue _fun75187
                                }
                            case 19:
                                var0 = arg1;
                                _closure3_slot4 = var0;
                            case 29:
                                var4 = var1.type;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 7;
                                var3 = var3[var0];
                                var0 = undefined;
                                var3 = var5.bind(var0)(var3);
                                var3 = var3.StickerCategoryTypes;
                                var3 = var3.GUILD;
                                var4 = var4 === var3;
                                if (!var4) {
                                    _fun75187_ip = 114;
                                    continue _fun75187
                                }
                            case 78:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 8;
                                var2 = var5[var2];
                                var5 = var3.bind(var0)(var2);
                                var3 = var5.shouldNSFWGateGuild;
                                var2 = var1.id;
                                var4 = var3.bind(var5)(var2);
                            case 114:
                                var3 = _closure3_slot5;
                                var2 = var1.stickers;
                                var1 = var1.name;
                                var1 = var3.bind(var0)(var2, var1, var4);
                                return var0;
                        }
                    };
                    var8 = var11.bind(var12)(var8);
                    var11 = var6.push;
                    var8 = function arg0() {
                        var2 = arg0;
                        var1 = 0;
                        var _closure4_slot0 = var1;
                        var1 = var2.map;
                        var0 = function(arg0, arg1) { // Environment: var0
                            _fun75189: for (var _fun75189_ip = 0;;) switch (_fun75189_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = 0;
                                    var1 = arg1;
                                    if (!(var0 === var1)) {
                                        _fun75189_ip = 16;
                                        continue _fun75189
                                    }
                                case 12:
                                    if (!(var0 !== var3)) {
                                        _fun75189_ip = 59;
                                        continue _fun75189
                                    }
                                case 16:
                                    var2 = _closure1_slot6;
                                    var2 = var3 * var2;
                                    var1 = _closure1_slot9;
                                    var4 = var2 + var1;
                                    var3 = _closure4_slot0;
                                    var1 = 12;
                                    var1 = var4 + var1;
                                    var1 = var1 + var3;
                                    _closure4_slot0 = var1;
                                    return var1;
                                case 59:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var16 = var8.bind(var10)(var7);
                    var8 = new Array(0);
                    var15 = 0;
                    var17 = var8;
                    var12 = arraySpread(var17, var16, var15);
                    var17 = var11;
                    var16 = var8;
                    var15 = var6;
                    var8 = apply(var17, var16, var15);
                    _fun75184_ip = 241;
                    continue _fun75184;
                case 176:
                    var8 = _closure2_slot1;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var0 = 6;
                    var11 = var14[var0];
                    var11 = var13.bind(var10)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var0 = var14[var0];
                    var0 = var13.bind(var10)(var0);
                    var0 = var0.t;
                    var0 = var0["zkoeq/"];
                    var0 = var11.bind(var12)(var0);
                    var0 = var9.bind(var10)(var8, var0);
                case 241:
                    var0 = {};
                    var0.sections = var7;
                    var0.sectionHeights = var6;
                    var6 = _closure1_slot9;
                    var0.sectionSize = var6;
                    var6 = 12;
                    var0.sectionFooterSize = var6;
                    var0.sectionLabels = var5;
                    var4 = _closure1_slot6;
                    var0.rowHeight = var4;
                    var0.rowSize = var3;
                    var0.rowsBySection = var2;
                    var1 = _closure3_slot4;
                    var0.packToScrollToIndex = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.StickerPickerSectionType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9447, 9360, 1565, 9446, 22, 1234, 4219, 9116, 2]);