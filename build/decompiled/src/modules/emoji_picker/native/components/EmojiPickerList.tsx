// modules/emoji_picker/native/components/EmojiPickerList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IMAGE_SIZE;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticsObjects;
    var _closure1_slot5 = var7;
    var7 = var3.AnalyticsPages;
    var _closure1_slot6 = var7;
    var7 = var3.AnalyticsSections;
    var _closure1_slot7 = var7;
    var3 = var3.UpsellTypes;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.EmojiDisabledReasons;
    var _closure1_slot9 = var7;
    var3 = var3.EmojiIntention;
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MIN_MARGIN;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot13 = var7;
    var7 = var3.Fragment;
    var _closure1_slot14 = var7;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun74103: for (var _fun74103_ip = 0;;) switch (_fun74103_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.bottomSheetIndex;
                var16 = var0.categories;
                var23 = var0.categoryIndexActive;
                var15 = var0.emojiPickerListRef;
                var _closure2_slot0 = var15;
                var14 = var0.emojis;
                var21 = var0.channel;
                var _closure2_slot1 = var21;
                var19 = var0.guildId;
                var _closure2_slot2 = var19;
                var22 = var0.onPressEmoji;
                var _closure2_slot3 = var22;
                var8 = var0.onLongPressEmoji;
                var _closure2_slot4 = var8;
                var24 = var0.emojiPickerIntention;
                var _closure2_slot5 = var24;
                var4 = var0.insetBottom;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun74103_ip = 101;
                    continue _fun74103
                }
            case 99:
                var4 = 0;
            case 101:
                var5 = var0.insetTop;
                if (!(var5 === var3)) {
                    _fun74103_ip = 113;
                    continue _fun74103
                }
            case 111:
                var5 = 0;
            case 113:
                var1 = var0.inPortalKeyboard;
                if (!(var1 === var3)) {
                    _fun74103_ip = 125;
                    continue _fun74103
                }
            case 123:
                var1 = false;
            case 125:
                var28 = var0.searchQueryRef;
                var _closure2_slot6 = var28;
                var29 = var0.analyticsObject;
                var11 = var0.messageId;
                var _closure2_slot7 = var11;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 7;
                var2 = var9[var2];
                var10 = var6.bind(var3)(var2);
                var2 = 8;
                var2 = var9[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.EMOJI;
                var2 = var10.bind(var3)(var2);
                var25 = var2.analyticsLocations;
                _closure2_slot8 = var25;
                var2 = 9;
                var2 = var9[var2];
                var2 = var6.bind(var3)(var2);
                var26 = var2.bind(var3)(var1);
                _closure2_slot9 = var26;
                var2 = global;
                var12 = var2.Math;
                var10 = var12.floor;
                var18 = _closure1_slot11;
                var17 = var26 - var18;
                var2 = _closure1_slot4;
                var2 = var2 + var18;
                var2 = var17 / var2;
                var27 = var10.bind(var12)(var2);
                _closure2_slot10 = var27;
                var2 = 10;
                var2 = var9[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.bind(var3)(var19, var24);
                var2 = var2.newlyAddedEmojis;
                var9 = var2.length;
                var6 = 0;
                var9 = var9 > var6;
                var20 = null;
                var12 = var1;
                var1 = null;
                if (!var9) {
                    _fun74103_ip = 356;
                    continue _fun74103
                }
            case 347:
                var2 = var2[var6];
                var1 = var2.id;
            case 356:
                _closure2_slot11 = var1;
                var10 = _closure1_slot3;
                var9 = var10.useEffect;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var19;
                var1 = function() { // Environment: var7
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.updateNewlyAddedLastSeen;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot11;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var9.bind(var10)(var1, var2);
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 12;
                var1 = var10[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var17 = _closure1_slot0;
                var2 = 13;
                var2 = var10[var2];
                var18 = var17.bind(var3)(var2);
                var17 = var18.useTrackOnEmojiPickerOpenedForReactions;
                var2 = {};
                var2.intention = var24;
                var2.rowSize = var27;
                var2.analyticsObject = var29;
                var2 = var17.bind(var18)(var2);
                var2 = 14;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var9 = var2.computeCategories;
                var10 = var2.computeSearchResults;
                if (!(var20 == var14)) {
                    _fun74103_ip = 518;
                    continue _fun74103
                }
            case 494:
                var2 = {};
                var2.categories = var16;
                var2.rowSize = var27;
                var2.isNativeEmojiPickerEnabled = var1;
                var2 = var9.bind(var3)(var2);
                _fun74103_ip = 547;
                continue _fun74103;
            case 518:
                var9 = {};
                var9.emojis = var14;
                var9.rowSize = var27;
                var14 = undefined;
                if (!var1) {
                    _fun74103_ip = 538;
                    continue _fun74103
                }
            case 535:
                var14 = 200;
            case 538:
                var9.limit = var14;
                var2 = var10.bind(var3)(var9);
            case 547:
                var14 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = 15;
                var10 = var9[var10];
                var17 = var14.bind(var3)(var10);
                var16 = var17.usePremiumUpsellConfig;
                var10 = 16;
                var10 = var9[var10];
                var29 = var14.bind(var3)(var10);
                var18 = var29.getUpsellType;
                var10 = 17;
                var10 = var9[var10];
                var10 = var14.bind(var3)(var10);
                var10 = var10.EntitlementFeatureNames;
                var10 = var10.EMOJIS_EVERYWHERE;
                var10 = var18.bind(var29)(var10);
                var10 = var16.bind(var17)(var10);
                var10 = var10.useTier0UpsellContent;
                _closure2_slot12 = var10;
                var16 = _closure1_slot3;
                var18 = var16.useCallback;
                var17 = new Array(7);
                var17[0] = var28;
                var17[1] = var21;
                var17[2] = var24;
                var17[3] = var19;
                var17[4] = var22;
                var17[5] = var25;
                var17[6] = var11;
                var11 = function(arg0, arg1) { // Environment: var7
                    _fun74105: for (var _fun74105_ip = 0;;) switch (_fun74105_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = _closure2_slot6;
                            var9 = null;
                            var2 = var9 == var0;
                            var0 = undefined;
                            var1 = undefined;
                            if (var2) {
                                _fun74105_ip = 32;
                                continue _fun74105
                            }
                        case 23:
                            var2 = _closure2_slot6;
                            var1 = var2.current;
                        case 32:
                            var2 = var9 != var1;
                            var5 = '';
                            if (!var2) {
                                _fun74105_ip = 46;
                                continue _fun74105
                            }
                        case 43:
                            var5 = var1;
                        case 46:
                            var2 = var5.length;
                            var1 = 0;
                            var1 = var2 > var1;
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 18;
                            var2 = var8[var2];
                            var11 = var3.bind(var0)(var2);
                            var10 = var11.triggerHapticFeedback;
                            var3 = _closure1_slot1;
                            var2 = 19;
                            var2 = var8[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.IMPACT_LIGHT;
                            var2 = var10.bind(var11)(var2);
                            var2 = 20;
                            var2 = var8[var2];
                            var8 = var3.bind(var0)(var2);
                            var3 = var8.getEmojiUnavailableReason;
                            var2 = {};
                            var2.emoji = var6;
                            var10 = _closure2_slot1;
                            var2.channel = var10;
                            var10 = _closure2_slot5;
                            var2.intention = var10;
                            var10 = _closure2_slot2;
                            var2.guildId = var10;
                            var3 = var3.bind(var8)(var2);
                            if (!(var9 !== var3)) {
                                _fun74105_ip = 678;
                                continue _fun74105
                            }
                        case 175:
                            var2 = _closure1_slot9;
                            var2 = var2.ROLE_SUBSCRIPTION_LOCKED;
                            if (!(var2 !== var3)) {
                                _fun74105_ip = 595;
                                continue _fun74105
                            }
                        case 192:
                            var2 = _closure1_slot9;
                            var2 = var2.PREMIUM_LOCKED;
                            if (!(var2 !== var3)) {
                                _fun74105_ip = 311;
                                continue _fun74105
                            }
                        case 206:
                            var3 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var2 = 23;
                            var2 = var14[var2];
                            var8 = var3.bind(var0)(var2);
                            var3 = var8.open;
                            var2 = {};
                            var10 = 'EMOJI_PICKER_LIST_PRESS_DISABLED';
                            var2.key = var10;
                            var13 = _closure1_slot0;
                            var10 = 24;
                            var11 = var14[var10];
                            var11 = var13.bind(var0)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var0)(var10);
                            var10 = var10.t;
                            var10 = var10.VsE5yG;
                            var10 = var11.bind(var12)(var10);
                            var2.content = var10;
                            var2 = var3.bind(var8)(var2);
                            _fun74105_ip = 695;
                            continue _fun74105;
                        case 311:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var2 = 15;
                            var2 = var8[var2];
                            var8 = var3.bind(var0)(var2);
                            var3 = var8.handleShowUpsellAlert;
                            var2 = {};
                            var10 = var6.animated;
                            var11 = _closure1_slot8;
                            if (var10) {
                                _fun74105_ip = 360;
                                continue _fun74105
                            }
                        case 352:
                            var10 = var11.GLOBAL_EMOJI;
                            _fun74105_ip = 366;
                            continue _fun74105;
                        case 360:
                            var10 = var11.ANIMATED_EMOJI;
                        case 366:
                            var2.initialUpsellKey = var10;
                            var10 = {};
                            var11 = _closure2_slot1;
                            var12 = var9 == var11;
                            var11 = undefined;
                            if (var12) {
                                _fun74105_ip = 395;
                                continue _fun74105
                            }
                        case 386:
                            var12 = _closure2_slot1;
                            var11 = var12.guild_id;
                        case 395:
                            if (!(var9 == var11)) {
                                _fun74105_ip = 411;
                                continue _fun74105
                            }
                        case 399:
                            var11 = _closure1_slot6;
                            var11 = var11.DM_CHANNEL;
                            _fun74105_ip = 421;
                            continue _fun74105;
                        case 411:
                            var12 = _closure1_slot6;
                            var11 = var12.GUILD_CHANNEL;
                        case 421:
                            var10.page = var11;
                            var11 = _closure1_slot7;
                            var11 = var11.EMOJI_PICKER_POPOUT;
                            var10.section = var11;
                            var11 = _closure1_slot5;
                            var11 = var11.EMOJI;
                            var10.object = var11;
                            var2.analyticsLocation = var10;
                            var10 = _closure2_slot8;
                            var2.analyticsLocations = var10;
                            var10 = {};
                            var12 = _closure2_slot5;
                            var11 = _closure1_slot10;
                            var11 = var11.REACTION;
                            if (!(var12 !== var11)) {
                                _fun74105_ip = 501;
                                continue _fun74105
                            }
                        case 489:
                            var11 = _closure1_slot12;
                            var11 = var11.EMOJI_PICKER_EMOJI_CLICKED;
                            _fun74105_ip = 511;
                            continue _fun74105;
                        case 501:
                            var12 = _closure1_slot12;
                            var11 = var12.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                        case 511:
                            var10.type = var11;
                            var11 = var6.animated;
                            var10.is_animated = var11;
                            var11 = var6.guildId;
                            var11 = var9 != var11;
                            if (!var11) {
                                _fun74105_ip = 569;
                                continue _fun74105
                            }
                        case 538:
                            var13 = var6.guildId;
                            var12 = _closure2_slot1;
                            var14 = var9 == var12;
                            var12 = undefined;
                            if (var14) {
                                _fun74105_ip = 565;
                                continue _fun74105
                            }
                        case 556:
                            var14 = _closure2_slot1;
                            var12 = var14.guild_id;
                        case 565:
                            var11 = var13 !== var12;
                        case 569:
                            var10.is_external = var11;
                            var10.has_search_query = var1;
                            var2.analyticsProperties = var10;
                            var2 = var3.bind(var8)(var2);
                            _fun74105_ip = 695;
                            continue _fun74105;
                        case 595:
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 21;
                            var2 = var8[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.dismissKeyboard;
                            var2 = var2.bind(var3)();
                            var2 = var6.guildId;
                            if (!(var9 != var2)) {
                                _fun74105_ip = 695;
                                continue _fun74105
                            }
                        case 634:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var2 = 22;
                            var2 = var8[var2];
                            var8 = var3.bind(var0)(var2);
                            var3 = var8.handleShowEmojiUpsellAlert;
                            var2 = {};
                            var10 = var6.guildId;
                            var2.guildId = var10;
                            var2 = var3.bind(var8)(var2);
                            _fun74105_ip = 695;
                            continue _fun74105;
                        case 678:
                            var2 = _closure2_slot3;
                            if (!(var9 != var2)) {
                                _fun74105_ip = 695;
                                continue _fun74105
                            }
                        case 686:
                            var2 = _closure2_slot3;
                            var2 = var2.bind(var0)(var6);
                        case 695:
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 25;
                            var2 = var8[var2];
                            var3 = var3.bind(var0)(var2);
                            if (var1) {
                                _fun74105_ip = 857;
                                continue _fun74105
                            }
                        case 721:
                            var2 = var3.trackEmojiSelect;
                            var1 = {};
                            var1.emoji = var6;
                            var8 = _closure2_slot5;
                            var1.pickerIntention = var8;
                            var8 = arg1;
                            var1.category = var8;
                            var8 = {};
                            var10 = _closure2_slot1;
                            var11 = var9 == var10;
                            var10 = undefined;
                            if (var11) {
                                _fun74105_ip = 775;
                                continue _fun74105
                            }
                        case 766:
                            var11 = _closure2_slot1;
                            var10 = var11.guild_id;
                        case 775:
                            if (!(var9 == var10)) {
                                _fun74105_ip = 791;
                                continue _fun74105
                            }
                        case 779:
                            var10 = _closure1_slot6;
                            var10 = var10.DM_CHANNEL;
                            _fun74105_ip = 801;
                            continue _fun74105;
                        case 791:
                            var11 = _closure1_slot6;
                            var10 = var11.GUILD_CHANNEL;
                        case 801:
                            var8.page = var10;
                            var10 = _closure1_slot7;
                            var10 = var10.EMOJI_PICKER_POPOUT;
                            var8.section = var10;
                            var10 = _closure1_slot5;
                            var10 = var10.EMOJI;
                            var8.object = var10;
                            var1.location = var8;
                            var8 = _closure2_slot7;
                            var1.messageId = var8;
                            var1 = var2.bind(var3)(var1);
                            _fun74105_ip = 985;
                            continue _fun74105;
                        case 857:
                            var2 = var3.trackEmojiSearchSelect;
                            var1 = {};
                            var1.emoji = var6;
                            var6 = {};
                            var8 = _closure2_slot1;
                            var10 = var9 == var8;
                            var8 = undefined;
                            if (var10) {
                                _fun74105_ip = 894;
                                continue _fun74105
                            }
                        case 885:
                            var10 = _closure2_slot1;
                            var8 = var10.guild_id;
                        case 894:
                            if (!(var9 == var8)) {
                                _fun74105_ip = 910;
                                continue _fun74105
                            }
                        case 898:
                            var8 = _closure1_slot6;
                            var8 = var8.DM_CHANNEL;
                            _fun74105_ip = 920;
                            continue _fun74105;
                        case 910:
                            var9 = _closure1_slot6;
                            var8 = var9.GUILD_CHANNEL;
                        case 920:
                            var6.page = var8;
                            var8 = _closure1_slot7;
                            var8 = var8.EMOJI_PICKER_POPOUT;
                            var6.section = var8;
                            var7 = _closure1_slot5;
                            var7 = var7.EMOJI;
                            var6.object = var7;
                            var1.location = var6;
                            var1.searchQuery = var5;
                            var5 = _closure2_slot5;
                            var1.intention = var5;
                            var4 = _closure2_slot7;
                            var1.messageId = var4;
                            var1 = var2.bind(var3)(var1);
                        case 985:
                            return var0;
                    }
                };
                var18 = var18.bind(var16)(var11, var17);
                _closure2_slot13 = var18;
                var17 = var16.useCallback;
                var11 = new Array(1);
                var11[0] = var8;
                var8 = function(arg0) { // Environment: var7
                    _fun74106: for (var _fun74106_ip = 0;;) switch (_fun74106_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun74106_ip = 27;
                                continue _fun74106
                            }
                        case 13:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = var17.bind(var16)(var8, var11);
                _closure2_slot14 = var17;
                var8 = _closure1_slot1;
                var11 = 26;
                var11 = var9[var11];
                var22 = var8.bind(var3)(var11);
                var11 = {};
                var11.emojiSections = var2;
                var11.rowSize = var27;
                var11.isNativeEmojiPickerEnabled = var1;
                var22 = var22.bind(var3)(var11);
                var11 = 27;
                var11 = var9[var11];
                var11 = var14.bind(var3)(var11);
                var14 = var11.AnimateEmoji;
                var11 = var14.useSetting;
                var24 = var11.bind(var14)();
                _closure2_slot15 = var24;
                var14 = var16.useCallback;
                var11 = new Array(9);
                var11[0] = var25;
                var11[1] = var18;
                var11[2] = var17;
                var11[3] = var21;
                var11[4] = var27;
                var11[5] = var26;
                var11[6] = var24;
                var11[7] = var15;
                var11[8] = var10;
                var7 = function(arg0) { // Environment: var7
                    _fun74107: for (var _fun74107_ip = 0;;) switch (_fun74107_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.item;
                            var2 = var0.target;
                            var6 = var0.index;
                            var5 = var4.type;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 26;
                            var1 = var1[var8];
                            var3 = undefined;
                            var1 = var7.bind(var3)(var1);
                            var1 = var1.EmojiPickerItemType;
                            var1 = var1.NATIVE_SECTION;
                            if (!(var1 !== var5)) {
                                _fun74107_ip = 861;
                                continue _fun74107
                            }
                        case 68:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var7.bind(var3)(var1);
                            var1 = var1.EmojiPickerItemType;
                            var1 = var1.PLACEHOLDER;
                            if (!(var1 !== var5)) {
                                _fun74107_ip = 861;
                                continue _fun74107
                            }
                        case 104:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var7.bind(var3)(var1);
                            var1 = var1.EmojiPickerItemType;
                            var1 = var1.EMOJI_ROW_SLIM;
                            if (!(var1 !== var5)) {
                                _fun74107_ip = 861;
                                continue _fun74107
                            }
                        case 140:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var7.bind(var3)(var1);
                            var1 = var1.EmojiPickerItemType;
                            var1 = var1.TITLE;
                            if (!(var1 !== var5)) {
                                _fun74107_ip = 752;
                                continue _fun74107
                            }
                        case 176:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var7.bind(var3)(var1);
                            var1 = var1.EmojiPickerItemType;
                            var1 = var1.PREMIUM_INLINE_ROADBLOCK;
                            if (!(var1 !== var5)) {
                                _fun74107_ip = 697;
                                continue _fun74107
                            }
                        case 212:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var7.bind(var3)(var1);
                            var1 = var1.EmojiPickerItemType;
                            var1 = var1.EMOJI_ROW;
                            if (!(var1 !== var5)) {
                                _fun74107_ip = 457;
                                continue _fun74107
                            }
                        case 248:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var7.bind(var3)(var1);
                            var1 = var1.EmojiPickerItemType;
                            var1 = var1.EMOJI_ROW_NSFW;
                            if (!(var1 !== var5)) {
                                _fun74107_ip = 414;
                                continue _fun74107
                            }
                        case 284:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var7.bind(var3)(var1);
                            var1 = var1.EmojiPickerItemType;
                            var1 = var1.FOOTER_UPSELL;
                            var9 = undefined;
                            if (!(var1 === var5)) {
                                _fun74107_ip = 598;
                                continue _fun74107
                            }
                        case 322:
                            var7 = _closure1_slot13;
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 31;
                            var1 = var8[var1];
                            var1 = var5.bind(var3)(var1);
                            var5 = var1.PremiumSearchUpsell;
                            var1 = {};
                            var11 = _closure2_slot1;
                            var10 = null;
                            var11 = var10 == var11;
                            var10 = undefined;
                            if (var11) {
                                _fun74107_ip = 381;
                                continue _fun74107
                            }
                        case 372:
                            var11 = _closure2_slot1;
                            var10 = var11.guild_id;
                        case 381:
                            var1.guildId = var10;
                            var10 = _closure2_slot8;
                            var1.analyticsLocations = var10;
                            var8 = _closure2_slot12;
                            var1.useTier0UpsellContent = var8;
                            var9 = var7.bind(var3)(var5, var1);
                            _fun74107_ip = 598;
                            continue _fun74107;
                        case 414:
                            var7 = _closure1_slot13;
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 28;
                            var1 = var8[var1];
                            var1 = var5.bind(var3)(var1);
                            var5 = var1.NSFWRow;
                            var1 = {};
                            var9 = var7.bind(var3)(var5, var1);
                            _fun74107_ip = 598;
                            continue _fun74107;
                        case 457:
                            var13 = var4.emojis;
                            var12 = var4.emojisDisabled;
                            var11 = var4.footer;
                            var10 = var4.row;
                            var8 = var4.isSectionNitroLocked;
                            var7 = _closure1_slot13;
                            var5 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var1 = 30;
                            var1 = var14[var1];
                            var1 = var5.bind(var3)(var1);
                            var5 = var1.EmojiPickerListRow;
                            var1 = {};
                            var1.emojis = var13;
                            var1.emojisDisabled = var12;
                            var1.category = var11;
                            var12 = _closure2_slot10;
                            var1.rowSize = var12;
                            var12 = _closure2_slot9;
                            var1.containerWidth = var12;
                            var12 = _closure2_slot13;
                            var1.onPressEmoji = var12;
                            var12 = _closure2_slot14;
                            var1.onLongPressEmoji = var12;
                            var11 = _closure2_slot15;
                            var1.animateEmoji = var11;
                            var1.row = var10;
                            var1.isSectionNitroLocked = var8;
                            var9 = var7.bind(var3)(var5, var1);
                        case 598:
                            var7 = _closure1_slot15;
                            var5 = _closure1_slot14;
                            var1 = {};
                            var10 = var4.isSectionNitroLocked;
                            var8 = true;
                            var10 = var8 === var10;
                            if (!var10) {
                                _fun74107_ip = 673;
                                continue _fun74107
                            }
                        case 623:
                            var12 = _closure1_slot13;
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var8 = 32;
                            var8 = var13[var8];
                            var8 = var11.bind(var3)(var8);
                            var11 = var8.PremiumUpsellGradientBackground;
                            var8 = {};
                            var13 = _closure2_slot12;
                            var8.useTier0UpsellContent = var13;
                            var10 = var12.bind(var3)(var11, var8);
                        case 673:
                            var8 = new Array(2);
                            var8[0] = var10;
                            var8[1] = var9;
                            var1.children = var8;
                            var1 = var7.bind(var3)(var5, var1);
                            return var1;
                        case 697:
                            var7 = _closure1_slot13;
                            var5 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 29;
                            var1 = var8[var1];
                            var5 = var5.bind(var3)(var1);
                            var1 = {};
                            var8 = var4.position;
                            var1.position = var8;
                            var8 = _closure2_slot12;
                            var1.useTier0UpsellContent = var8;
                            var1 = var7.bind(var3)(var5, var1);
                            return var1;
                        case 752:
                            var5 = var4.title;
                            var1 = 'StickyHeader';
                            if (!(var1 === var2)) {
                                _fun74107_ip = 794;
                                continue _fun74107
                            }
                        case 765:
                            var1 = _closure2_slot0;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun74107_ip = 794;
                                continue _fun74107
                            }
                        case 783:
                            var1 = var2.onStickyHeaderRendered;
                            var1 = var1.bind(var2)(var6);
                        case 794:
                            var2 = _closure1_slot13;
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 28;
                            var0 = var6[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.Section;
                            var0 = {};
                            var0.label = var5;
                            var4 = var4.isSectionNitroLocked;
                            var0.isSectionNitroLocked = var4;
                            var4 = _closure2_slot12;
                            var0.useTier0UpsellContent = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 861:
                            var0 = null;
                            return var0;
                    }
                };
                var14 = var14.bind(var16)(var7, var11);
                var7 = 33;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.bind(var3)();
                var11 = var7.shouldShowUpsell;
                var16 = var7.onShowNitroUpsell;
                var2 = var2.length;
                if (!(var6 !== var2)) {
                    _fun74103_ip = 1109;
                    continue _fun74103
                }
            case 891:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                if (var1) {
                    _fun74103_ip = 911;
                    continue _fun74103
                }
            case 902:
                var1 = 36;
                var1 = var7[var1];
                _fun74103_ip = 918;
                continue _fun74103;
            case 911:
                var6 = 35;
                var1 = var7[var6];
            case 918:
                var9 = var2.bind(var3)(var1);
                var6 = _closure1_slot15;
                var2 = _closure1_slot14;
                var1 = {};
                var8 = _closure1_slot13;
                var7 = {};
                var7.analyticsLocations = var25;
                var7.animateEmoji = var24;
                var7.bottomSheetIndex = var13;
                var7.categoryIndexActive = var23;
                var7.data = var22;
                if (!(var20 == var19)) {
                    _fun74103_ip = 984;
                    continue _fun74103
                }
            case 967:
                var22 = var20 == var21;
                var20 = undefined;
                if (var22) {
                    _fun74103_ip = 981;
                    continue _fun74103
                }
            case 976:
                var20 = var21.guild_id;
            case 981:
                var19 = var20;
            case 984:
                var7.guildId = var19;
                var7.inPortalKeyboard = var12;
                var7.onPressEmoji = var18;
                var7.onLongPressEmoji = var17;
                var7.onShowNitroUpsell = var16;
                var7.paddingBottom = var4;
                var7.paddingTop = var5;
                var7.ref = var15;
                var7.renderItem = var14;
                var7.useTier0UpsellContent = var10;
                var8 = var8.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot13;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 37;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.bottomSheetIndex = var13;
                var8.inPortalKeyboard = var12;
                var8.shouldShow = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var1.children = var7;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 1109:
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 34;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = true;
                var0.inActionSheet = var6;
                var0.insetTop = var5;
                var0.insetBottom = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 38;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/EmojiPickerList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9316, 660, 1624, 1565, 1623, 33, 5730, 5583, 9317, 7018, 7017, 9318, 9312, 9319, 7632, 7649, 7642, 3279, 3280, 3108, 3718, 9320, 3148, 1234, 7015, 9325, 1348, 9329, 8604, 9330, 9333, 8587, 9335, 9336, 9341, 9343, 9345, 2]);