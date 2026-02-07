// modules/emoji_picker/native/components/data/useEmojiPickerData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var10 = 0;
    var7 = var6[var10];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var7);
    var _closure1_slot3 = var1;
    var9 = 1;
    var1 = var6[var9];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = var6[var9];
    var1 = var5.bind(var0)(var1);
    var1 = var1.LoadState;
    var _closure1_slot5 = var1;
    var8 = 2;
    var1 = var6[var8];
    var1 = var5.bind(var0)(var1);
    var1 = var1.EmojiCategoryTypes;
    var _closure1_slot6 = var1;
    var7 = 3;
    var1 = var6[var7];
    var1 = var5.bind(var0)(var1);
    var1 = var1.EmojiPickerRenderingDataType;
    var _closure1_slot7 = var1;
    var1 = {};
    var1.PLACEHOLDER = var10;
    var4 = 'PLACEHOLDER';
    var1[var10] = var4;
    var1.TITLE = var9;
    var4 = 'TITLE';
    var1[var9] = var4;
    var1.EMOJI_ROW = var8;
    var4 = 'EMOJI_ROW';
    var1[var8] = var4;
    var1.EMOJI_ROW_SLIM = var7;
    var4 = 'EMOJI_ROW_SLIM';
    var1[var7] = var4;
    var7 = 4;
    var1.EMOJI_ROW_NSFW = var7;
    var4 = 'EMOJI_ROW_NSFW';
    var1[var7] = var4;
    var7 = 5;
    var1.FOOTER_UPSELL = var7;
    var4 = 'FOOTER_UPSELL';
    var1[var7] = var4;
    var7 = 6;
    var1.PREMIUM_INLINE_ROADBLOCK = var7;
    var4 = 'PREMIUM_INLINE_ROADBLOCK';
    var1[var7] = var4;
    var7 = 7;
    var1.NATIVE_SECTION = var7;
    var4 = 'NATIVE_SECTION';
    var1[var7] = var4;
    var _closure1_slot8 = var1;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/data/useEmojiPickerData.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var1 = arg0;
        var6 = var1.emojiSections;
        var _closure2_slot0 = var6;
        var5 = var1.rowSize;
        var _closure2_slot1 = var5;
        var4 = var1.isNativeEmojiPickerEnabled;
        var _closure2_slot2 = var4;
        var7 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var8 = var7.bind(var2)(var3);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun74620: for (var _fun74620_ip = 0;;) switch (_fun74620_ip) {
                case 0:
                    var0 = _closure1_slot4;
                    var2 = var0.loadState;
                    var0 = _closure1_slot5;
                    var0 = var0.Loaded;
                    var0 = var2 === var0;
                    if (var0) {
                        _fun74620_ip = 44;
                        continue _fun74620
                    }
                case 30:
                    var1 = _closure1_slot5;
                    var1 = var1.MaybeLoaded;
                    var0 = var2 === var1;
                case 44:
                    if (var0) {
                        _fun74620_ip = 57;
                        continue _fun74620
                    }
                case 47:
                    var1 = _closure2_slot2;
                    var0 = !var1;
                case 57:
                    return var0;
            }
        };
        var7 = var7.bind(var8)(var3, var2);
        var _closure2_slot3 = var7;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = _closure1_slot8;
            var2 = var2.PLACEHOLDER;
            var0.type = var2;
            var3 = false;
            var0.isSectionNitroLocked = var3;
            var2 = new Array(1);
            var2[0] = var0;
            var _closure3_slot0 = var2;
            var0 = {};
            var0.data = var2;
            var4 = _closure2_slot1;
            var0.rowSize = var4;
            var4 = new Array(0);
            var0.headerIndices = var4;
            var4 = _closure2_slot3;
            var0.hasGuildData = var4;
            var0.hasSearchData = var3;
            var0.hasSearchUpsell = var3;
            var _closure3_slot1 = var0;
            var3 = _closure2_slot0;
            var2 = var3.forEach;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun74622: for (var _fun74622_ip = 0;;) switch (_fun74622_ip) {
                    case 0:
                        var3 = arg0;
                        var6 = arg1;
                        var0 = var3.isSectionNitroLocked;
                        var5 = true;
                        var7 = var5 === var0;
                        var0 = !var7;
                        var2 = !var0;
                        var1 = var2;
                        if (!var7) {
                            _fun74622_ip = 69;
                            continue _fun74622
                        }
                    case 30:
                        var4 = _closure2_slot0;
                        var0 = 1;
                        var0 = var6 - var0;
                        var4 = var4[var0];
                        var0 = null;
                        var8 = var0 == var4;
                        var0 = undefined;
                        if (var8) {
                            _fun74622_ip = 65;
                            continue _fun74622
                        }
                    case 59:
                        var0 = var4.isSectionNitroLocked;
                    case 65:
                        var1 = var5 !== var0;
                    case 69:
                        if (!var7) {
                            _fun74622_ip = 111;
                            continue _fun74622
                        }
                    case 72:
                        var4 = _closure2_slot0;
                        var0 = 1;
                        var0 = var6 + var0;
                        var4 = var4[var0];
                        var0 = null;
                        var6 = var0 == var4;
                        var0 = undefined;
                        if (var6) {
                            _fun74622_ip = 107;
                            continue _fun74622
                        }
                    case 101:
                        var0 = var4.isSectionNitroLocked;
                    case 107:
                        var2 = var5 !== var0;
                    case 111:
                        var6 = var3.type;
                        var4 = _closure1_slot7;
                        var4 = var4.NATIVE_SECTION;
                        if (!(var6 === var4)) {
                            _fun74622_ip = 184;
                            continue _fun74622
                        }
                    case 133:
                        var8 = _closure3_slot0;
                        var6 = var8.push;
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 5;
                        var4 = var9[var4];
                        var9 = undefined;
                        var4 = var10.bind(var9)(var4);
                        var4 = var4.bind(var9)(var3, var1, var2);
                        var4 = var6.bind(var8)(var4);
                        _fun74622_ip = 867;
                        continue _fun74622;
                    case 184:
                        if (!var1) {
                            _fun74622_ip = 259;
                            continue _fun74622
                        }
                    case 187:
                        var6 = _closure3_slot0;
                        var4 = var6.push;
                        var8 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var1 = 6;
                        var1 = var11[var1];
                        var9 = undefined;
                        var8 = var8.bind(var9)(var1);
                        var10 = _closure1_slot0;
                        var1 = 7;
                        var1 = var11[var1];
                        var1 = var10.bind(var9)(var1);
                        var1 = var1.PremiumUpsellSectionDividerPosition;
                        var1 = var1.START;
                        var1 = var8.bind(var9)(var1);
                        var1 = var4.bind(var6)(var1);
                    case 259:
                        var4 = var3.label;
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun74622_ip = 349;
                            continue _fun74622
                        }
                    case 270:
                        var1 = _closure3_slot0;
                        var8 = var1.push;
                        var6 = {};
                        var9 = _closure1_slot8;
                        var9 = var9.TITLE;
                        var6.type = var9;
                        var9 = var3.label;
                        var6.title = var9;
                        var6.isSectionNitroLocked = var7;
                        var6 = var8.bind(var1)(var6);
                        var4 = _closure3_slot1;
                        var6 = var4.headerIndices;
                        var4 = var6.push;
                        var8 = var1.length;
                        var1 = 1;
                        var1 = var8 - var1;
                        var1 = var4.bind(var6)(var1);
                    case 349:
                        var1 = global;
                        var6 = var1.Math;
                        var4 = var6.ceil;
                        var1 = var3.emojis;
                        var8 = var1.length;
                        var1 = _closure2_slot1;
                        var1 = var8 / var1;
                        var10 = var4.bind(var6)(var1);
                        var9 = 0;
                        var12 = var9 < var10;
                        var8 = 8;
                        var4 = undefined;
                        var6 = 0;
                        if (!var12) {
                            _fun74622_ip = 718;
                            continue _fun74622
                        }
                    case 412:
                        var12 = _closure2_slot2;
                        if (var12) {
                            _fun74622_ip = 581;
                            continue _fun74622
                        }
                    case 422:
                        var13 = var3.type;
                        var12 = _closure1_slot7;
                        var12 = var12.EMOJI;
                        if (!(var13 !== var12)) {
                            _fun74622_ip = 503;
                            continue _fun74622
                        }
                    case 441:
                        var13 = var3.type;
                        var12 = _closure1_slot7;
                        var12 = var12.NSFW;
                        if (!(var13 === var12)) {
                            _fun74622_ip = 708;
                            continue _fun74622
                        }
                    case 463:
                        var14 = _closure3_slot0;
                        var13 = var14.push;
                        var12 = {};
                        var15 = _closure1_slot8;
                        var15 = var15.EMOJI_ROW_NSFW;
                        var12.type = var15;
                        var12.isSectionNitroLocked = var7;
                        var12 = var13.bind(var14)(var12);
                        _fun74622_ip = 708;
                        continue _fun74622;
                    case 503:
                        var14 = _closure3_slot0;
                        var13 = var14.push;
                        var12 = {};
                        var15 = _closure1_slot8;
                        var15 = var15.EMOJI_ROW;
                        var12.type = var15;
                        var12.row = var6;
                        var15 = var3.emojis;
                        var12.emojis = var15;
                        var15 = var3.emojisDisabled;
                        var12.emojisDisabled = var15;
                        var15 = var3.footer;
                        var12.footer = var15;
                        var12.isSectionNitroLocked = var7;
                        var12 = var13.bind(var14)(var12);
                        _fun74622_ip = 708;
                        continue _fun74622;
                    case 581:
                        var12 = var9 === var6;
                        if (!var12) {
                            _fun74622_ip = 607;
                            continue _fun74622
                        }
                    case 588:
                        var14 = var3.type;
                        var13 = _closure1_slot7;
                        var13 = var13.EMOJI;
                        var12 = var14 === var13;
                    case 607:
                        if (!var12) {
                            _fun74622_ip = 708;
                            continue _fun74622
                        }
                    case 610:
                        var13 = _closure3_slot1;
                        var12 = var13.hasSearchData;
                        if (var12) {
                            _fun74622_ip = 643;
                            continue _fun74622
                        }
                    case 623:
                        var15 = var3.footer;
                        var14 = _closure1_slot6;
                        var14 = var14.SEARCH_RESULTS;
                        var12 = var15 === var14;
                    case 643:
                        if (var12) {
                            _fun74622_ip = 666;
                            continue _fun74622
                        }
                    case 646:
                        var15 = var3.footer;
                        var14 = _closure1_slot6;
                        var14 = var14.PREMIUM_UPSELL;
                        var12 = var15 === var14;
                    case 666:
                        var13.hasSearchData = var12;
                        var14 = _closure3_slot0;
                        var13 = var14.push;
                        var15 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var12 = var12[var8];
                        var12 = var15.bind(var4)(var12);
                        var12 = var12.bind(var4)(var3);
                        var12 = var13.bind(var14)(var12);
                    case 708:
                        var6 = var6 + 1;
                        if (var6 < var10) {
                            _fun74622_ip = 412;
                            continue _fun74622
                        }
                    case 718:
                        var6 = var3.footer;
                        var3 = _closure1_slot6;
                        var3 = var3.PREMIUM_UPSELL;
                        if (!(var6 === var3)) {
                            _fun74622_ip = 797;
                            continue _fun74622
                        }
                    case 738:
                        var3 = _closure3_slot1;
                        var3.hasSearchUpsell = var5;
                        var6 = _closure3_slot0;
                        var5 = var6.push;
                        var3 = {};
                        var8 = _closure1_slot8;
                        var8 = var8.FOOTER_UPSELL;
                        var3.type = var8;
                        var8 = _closure1_slot6;
                        var8 = var8.PREMIUM_UPSELL;
                        var3.id = var8;
                        var3.isSectionNitroLocked = var7;
                        var3 = var5.bind(var6)(var3);
                    case 797:
                        if (!var2) {
                            _fun74622_ip = 867;
                            continue _fun74622
                        }
                    case 800:
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 6;
                        var3 = var6[var3];
                        var3 = var5.bind(var4)(var3);
                        var5 = _closure1_slot0;
                        var0 = 7;
                        var0 = var6[var0];
                        var0 = var5.bind(var4)(var0);
                        var0 = var0.PremiumUpsellSectionDividerPosition;
                        var0 = var0.END;
                        var0 = var3.bind(var4)(var0);
                        var0 = var1.bind(var2)(var0);
                    case 867:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.EmojiPickerItemType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4739, 4743, 9368, 566, 9378, 9379, 8654, 9380, 2]);