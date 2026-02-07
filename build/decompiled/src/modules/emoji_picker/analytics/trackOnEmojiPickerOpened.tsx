// modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun74563: for (var _fun74563_ip = 0;;) switch (_fun74563_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.intention;
                var15 = var0.containerWidth;
                var12 = var0.rowSize;
                var9 = var0.isBurstReaction;
                var7 = var0.analyticsObject;
                var2 = _closure1_slot5;
                var1 = var2.getChannel;
                var3 = _closure1_slot6;
                var0 = var3.getChannelId;
                var0 = var0.bind(var3)();
                var16 = var1.bind(var2)(var0);
                var5 = null;
                var1 = var5 == var16;
                var0 = undefined;
                var3 = undefined;
                if (var1) {
                    _fun74563_ip = 89;
                    continue _fun74563
                }
            case 79:
                var1 = var16.getGuildId;
                var3 = var1.bind(var16)();
            case 89:
                var1 = _closure1_slot8;
                var1 = var1.REACTION;
                if (!(var8 !== var1)) {
                    _fun74563_ip = 130;
                    continue _fun74563
                }
            case 103:
                var1 = _closure1_slot4;
                var1 = var1.emojiFrecencyWithoutFetchingLatest;
                var2 = var1.frequently;
                var1 = var2.slice;
                var11 = var1.bind(var2)();
                _fun74563_ip = 155;
                continue _fun74563;
            case 130:
                var1 = _closure1_slot4;
                var1 = var1.emojiReactionFrecencyWithoutFetchingLatest;
                var2 = var1.frequently;
                var1 = var2.slice;
                var11 = var1.bind(var2)();
            case 155:
                if (!(var5 == var16)) {
                    _fun74563_ip = 165;
                    continue _fun74563
                }
            case 159:
                var21 = new Array(0);
                _fun74563_ip = 196;
                continue _fun74563;
            case 165:
                var4 = _closure1_slot4;
                var2 = var4.getDisambiguatedEmojiContext;
                var1 = var16.getGuildId;
                var1 = var1.bind(var16)();
                var1 = var2.bind(var4)(var1);
                var21 = var1.favoriteEmojisWithoutFetchingLatest;
            case 196:
                var1 = _closure1_slot8;
                var1 = var1.REACTION;
                if (!(var8 !== var1)) {
                    _fun74563_ip = 228;
                    continue _fun74563
                }
            case 210:
                var1 = _closure1_slot4;
                var1 = var1.emojiFrecencyWithoutFetchingLatest;
                var2 = var1.numFrequentlyItems;
                _fun74563_ip = 244;
                continue _fun74563;
            case 228:
                var1 = _closure1_slot4;
                var1 = var1.emojiReactionFrecencyWithoutFetchingLatest;
                var2 = var1.numFrequentlyItems;
            case 244:
                var1 = var11.slice;
                var4 = 0;
                var17 = var1.bind(var11)(var4, var2);
                if (!(var5 == var3)) {
                    _fun74563_ip = 267;
                    continue _fun74563
                }
            case 261:
                var13 = new Array(0);
                _fun74563_ip = 282;
                continue _fun74563;
            case 267:
                var2 = _closure1_slot4;
                var1 = var2.getGuildEmoji;
                var13 = var1.bind(var2)(var3);
            case 282:
                var3 = _closure1_slot4;
                var2 = var3.getDisambiguatedEmojiContext;
                var11 = var5 == var16;
                var1 = undefined;
                if (var11) {
                    _fun74563_ip = 311;
                    continue _fun74563
                }
            case 301:
                var11 = var16.getGuildId;
                var1 = var11.bind(var16)();
            case 311:
                var1 = var2.bind(var3)(var1);
                var3 = var1.groupedCustomEmojis;
                if (!(var5 == var3)) {
                    _fun74563_ip = 328;
                    continue _fun74563
                }
            case 326:
                var3 = {};
            case 328:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.values;
                var3 = var1.bind(var2)(var3);
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var10
                    var0 = arg1;
                    var1 = var0.length;
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var11 = var2.bind(var3)(var1, var4);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.getTopAndNewlyAddedEmojis;
                var1 = {};
                var14 = var5 == var16;
                var4 = undefined;
                if (var14) {
                    _fun74563_ip = 412;
                    continue _fun74563
                }
            case 402:
                var14 = var16.getGuildId;
                var4 = var14.bind(var16)();
            case 412:
                var1.guildId = var4;
                var1.pickerIntention = var8;
                var1 = var2.bind(var3)(var1);
                var16 = var1.topEmojis;
                var14 = var1.newlyAddedEmojis;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var2 = var4.getEmojiHotrail;
                var1 = {};
                var1.topEmojis = var16;
                var1.newlyAddedEmojis = var14;
                var1.rowSize = var12;
                var1 = var2.bind(var4)(var1);
                var14 = var1.visibleTopEmojis;
                var12 = var1.visibleNewlyAddedEmojis;
                var2 = _closure1_slot1;
                var1 = 9;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot8;
                var1 = var1.REACTION;
                if (!(var8 !== var1)) {
                    _fun74563_ip = 546;
                    continue _fun74563
                }
            case 534:
                var1 = _closure1_slot7;
                var2 = var1.EXPRESSION_PICKER_OPENED;
                _fun74563_ip = 556;
                continue _fun74563;
            case 546:
                var1 = _closure1_slot7;
                var2 = var1.REACTION_PICKER_OPENED;
            case 556:
                var1 = {};
                var1.width = var15;
                var15 = _closure1_slot9;
                var15 = var15.EMOJI;
                var1.tab = var15;
                var15 = false;
                var1.badged = var15;
                var15 = var21.length;
                var1.num_expressions_favorites = var15;
                var16 = var21.filter;
                var15 = function(arg0) { // Environment: var10
                    _fun74565: for (var _fun74565_ip = 0;;) switch (_fun74565_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun74565_ip = 20;
                                continue _fun74565
                            }
                        case 14:
                            var0 = var1.animated;
                        case 20:
                            return var0;
                    }
                };
                var15 = var16.bind(var21)(var15);
                var15 = var15.length;
                var1.num_animated_expressions_favorites = var15;
                var20 = var21.filter;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var15 = 10;
                var16 = var19[var15];
                var16 = var18.bind(var0)(var16);
                var16 = var16.isCustomEmoji;
                var16 = var20.bind(var21)(var16);
                var16 = var16.length;
                var1.num_custom_expressions_favorites = var16;
                var20 = var21.filter;
                var16 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = null;
                    var0 = var0 == var1;
                    return var0;
                };
                var16 = var20.bind(var21)(var16);
                var16 = var16.length;
                var1.num_standard_expressions_favorites = var16;
                var16 = var17.length;
                var1.num_expressions_frecent = var16;
                var20 = var17.filter;
                var16 = function(arg0) { // Environment: var10
                    _fun74567: for (var _fun74567_ip = 0;;) switch (_fun74567_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun74567_ip = 20;
                                continue _fun74567
                            }
                        case 14:
                            var0 = var1.animated;
                        case 20:
                            return var0;
                    }
                };
                var16 = var20.bind(var17)(var16);
                var16 = var16.length;
                var1.num_animated_expressions_frecent = var16;
                var16 = var17.filter;
                var15 = var19[var15];
                var15 = var18.bind(var0)(var15);
                var15 = var15.isCustomEmoji;
                var15 = var16.bind(var17)(var15);
                var15 = var15.length;
                var1.num_custom_expressions_frecent = var15;
                var16 = var17.filter;
                var15 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = null;
                    var0 = var0 == var1;
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var15 = var15.length;
                var1.num_standard_expressions_frecent = var15;
                var13 = var13.length;
                var1.num_current_guild_expressions = var13;
                var1.num_custom_expressions_total = var11;
                var11 = var14.length;
                var1.num_expressions_top_server = var11;
                var13 = var14.filter;
                var11 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var0 = var0.animated;
                    return var0;
                };
                var11 = var13.bind(var14)(var11);
                var11 = var11.length;
                var1.num_animated_expressions_top_server = var11;
                var11 = var12.length;
                var1.num_expressions_newly_added = var11;
                var11 = var12.filter;
                var10 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var0 = var0.animated;
                    return var0;
                };
                var10 = var11.bind(var12)(var10);
                var10 = var10.length;
                var1.num_animated_expressions_newly_added = var10;
                var6 = _closure1_slot8;
                var6 = var6.REACTION;
                var6 = var8 === var6;
                if (!var6) {
                    _fun74563_ip = 937;
                    continue _fun74563
                }
            case 927:
                var8 = {};
                var8.is_burst = var9;
                var6 = var8;
            case 937:
                var23 = var1;
                var22 = var6;
                var6 = copyDataProperties(var23, var22);
                var5 = var5 != var7;
                if (!var5) {
                    _fun74563_ip = 964;
                    continue _fun74563
                }
            case 954:
                var6 = {};
                var6.location_object = var7;
                var5 = var6;
            case 964:
                var23 = var1;
                var22 = var5;
                var5 = copyDataProperties(var23, var22);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ExpressionPickerViewType;
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var3 = _closure1_slot3;
        var2 = var3.useRef;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            _fun74572: for (var _fun74572_ip = 0;;) switch (_fun74572_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.current;
                    var3 = var1.intention;
                    var2 = _closure1_slot8;
                    var2 = var2.REACTION;
                    if (!(var3 === var2)) {
                        _fun74572_ip = 55;
                        continue _fun74572
                    }
                case 35:
                    var2 = _closure1_slot10;
                    var0 = _closure2_slot0;
                    var1 = var0.current;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.useTrackOnEmojiPickerOpenedForReactions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4739, 1372, 1672, 660, 1624, 1565, 7067, 7068, 4302, 3110, 2]);