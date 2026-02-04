// modules/emoji_picker/EmojiPickerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var0 = function arg0, arg1() {
        _fun57360: for (var _fun57360_ip = 0;;) switch (_fun57360_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun57360_ip = 46;
                    continue _fun57360
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun57360_ip = 55;
                    continue _fun57360
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun57360_ip = 343;
                    continue _fun57360
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun57360_ip = 323;
                    continue _fun57360
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun57360_ip = 283;
                    continue _fun57360
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun57360_ip = 270;
                    continue _fun57360
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun57360_ip = 163;
                    continue _fun57360
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun57360_ip = 179;
                    continue _fun57360
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun57360_ip = 249;
                    continue _fun57360
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun57360_ip = 249;
                    continue _fun57360
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun57360_ip = 234;
                    continue _fun57360
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun57360_ip = 247;
                    continue _fun57360
                }
            case 234:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun57360_ip = 265;
                continue _fun57360;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun57360_ip = 283;
                continue _fun57360;
            case 270:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun57360_ip = 323;
                    continue _fun57360
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun57360_ip = 330;
                    continue _fun57360
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun57361: for (var _fun57361_ip = 0;;) switch (_fun57361_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun57361_ip = 56;
                                continue _fun57361
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun57361_ip = 67;
                            continue _fun57361;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun57362: for (var _fun57362_ip = 0;;) switch (_fun57362_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun57362_ip = 23;
                    continue _fun57362
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun57362_ip = 33;
                    continue _fun57362
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun57362_ip = 70;
                    continue _fun57362
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun57362_ip = 55;
                    continue _fun57362
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var5 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 24;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.FrecencyUserSettingsActionCreators;
            var1 = var2.loadIfNecessary;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresArray;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getDisambiguatedEmojiContext;
            var0 = _closure2_slot0;
            var1 = var1.bind(var2)(var0);
            var0 = var1.getFrequentlyUsedEmojisWithoutFetchingLatest;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var5;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 24;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.FrecencyUserSettingsActionCreators;
            var1 = var2.loadIfNecessary;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresArray;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getDisambiguatedEmojiContext;
            var0 = _closure2_slot0;
            var1 = var1.bind(var2)(var0);
            var0 = var1.getFrequentlyUsedReactionEmojisWithoutFetchingLatest;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var4;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 24;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.FrecencyUserSettingsActionCreators;
            var1 = var2.loadIfNecessary;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresArray;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getDisambiguatedEmojiContext;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.favoriteEmojisWithoutFetchingLatest;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var10 = var9[var0];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var10);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var10 = var6.EmojiCategories;
    var _closure1_slot8 = var10;
    var10 = var6.EmojiCategoryTypes;
    var _closure1_slot9 = var10;
    var6 = var6.EmojiSubCategory;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var10 = var6.AnalyticEvents;
    var _closure1_slot11 = var10;
    var10 = var6.AnalyticsPages;
    var _closure1_slot12 = var10;
    var10 = var6.AnalyticsSections;
    var _closure1_slot13 = var10;
    var10 = var6.AutoCompleteResultTypes;
    var _closure1_slot14 = var10;
    var6 = var6.SearchTypes;
    var _closure1_slot15 = var6;
    var6 = 7;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var10 = var6.isExternalEmojiAllowedForIntention;
    var _closure1_slot16 = var10;
    var6 = var6.EmojiIntention;
    var _closure1_slot17 = var6;
    var6 = 8;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.ExpressionPickerViewType;
    var _closure1_slot18 = var6;
    var6 = 9;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.PremiumUpsellTypes;
    var _closure1_slot19 = var6;
    var6 = 22;
    var6 = var9[var6];
    var12 = var8.bind(var0)(var6);
    var11 = var12.throttle;
    var6 = 23;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.Millis;
    var10 = var6.HALF_SECOND;
    var7 = function(arg0) { // Environment: var1
        var0 = arg0;
        var6 = var0.emojiSuggestions;
        var5 = var0.analyticsLocation;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 20;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot11;
        var2 = var1.AUTO_SUGGEST_DISPLAYED;
        var1 = {};
        var7 = _closure1_slot14;
        var7 = var7.EMOJI;
        var1.suggestion_type = var7;
        var7 = var6.results;
        var7 = var7.length;
        var1.suggestion_quantity = var7;
        var9 = var6.results;
        var8 = var9.filter;
        var7 = function(arg0) { // Environment: var7
            var0 = arg0;
            var0 = var0.emoji;
            var1 = var0.id;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var7 = var8.bind(var9)(var7);
        var7 = var7.length;
        var1.custom_quantity = var7;
        var6 = var6.loadId;
        var1.load_id = var6;
        var1.location = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var6 = {
        'leading': false,
        'trailing': true
    };
    var6 = var11.bind(var12)(var7, var10, var6);
    var7 = 25;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/emoji_picker/EmojiPickerUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function(arg0, arg1) { // Environment: var1
        _fun57374: for (var _fun57374_ip = 0;;) switch (_fun57374_ip) {
            case 0:
                var13 = arg0;
                var15 = arg1;
                var14 = arguments[2];
                var4 = arguments[3];
                var _closure2_slot0 = var13;
                var _closure2_slot1 = var15;
                var5 = undefined;
                if (!(var14 === var5)) {
                    _fun57374_ip = 52;
                    continue _fun57374
                }
            case 28:
                var1 = null;
                var2 = var1 == var15;
                var1 = undefined;
                if (var2) {
                    _fun57374_ip = 49;
                    continue _fun57374
                }
            case 39:
                var2 = var15.getGuildId;
                var1 = var2.bind(var15)();
            case 49:
                var14 = var1;
            case 52:
                var _closure2_slot2 = var14;
                if (!(var4 === var5)) {
                    _fun57374_ip = 62;
                    continue _fun57374
                }
            case 60:
                var4 = false;
            case 62:
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var5;
                var _closure2_slot6 = var5;
                var _closure2_slot7 = var5;
                var _closure2_slot8 = var5;
                var _closure2_slot9 = var5;
                var _closure2_slot10 = var5;
                var _closure2_slot11 = var5;
                var _closure2_slot12 = var5;
                var3 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 10;
                var2 = var17[var2];
                var6 = var3.bind(var5)(var2);
                var2 = var6.maybeFetchTopEmojisByGuild;
                var2 = var2.bind(var6)(var14);
                var2 = _closure1_slot16;
                var6 = var2.bind(var5)(var13);
                _closure2_slot4 = var6;
                var2 = _closure1_slot22;
                var8 = var2.bind(var5)(var14);
                _closure2_slot5 = var8;
                var2 = _closure1_slot23;
                var9 = var2.bind(var5)(var14);
                _closure2_slot6 = var9;
                var2 = _closure1_slot24;
                var7 = var2.bind(var5)(var14);
                _closure2_slot7 = var7;
                var10 = _closure1_slot1;
                var2 = 11;
                var2 = var17[var2];
                var2 = var10.bind(var5)(var2);
                var2 = var2.bind(var5)(var14, var13);
                var12 = var2.topEmojis;
                var11 = var2.newlyAddedEmojis;
                var2 = 12;
                var2 = var17[var2];
                var10 = var10.bind(var5)(var2);
                var2 = {};
                var2.topEmojis = var12;
                var2.newlyAddedEmojis = var11;
                var2 = var10.bind(var5)(var2);
                var11 = var2.allEmojis;
                _closure2_slot8 = var11;
                var2 = 13;
                var10 = var17[var2];
                var19 = var3.bind(var5)(var10);
                var18 = var19.useStateFromStores;
                var10 = _closure1_slot4;
                var16 = new Array(1);
                var16[0] = var10;
                var12 = new Array(1);
                var12[0] = var14;
                var10 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getDisambiguatedEmojiContext;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var18.bind(var19)(var16, var10, var12);
                _closure2_slot9 = var16;
                var10 = var17[var2];
                var19 = var3.bind(var5)(var10);
                var18 = var19.useStateFromStores;
                var10 = _closure1_slot5;
                var12 = new Array(1);
                var12[0] = var10;
                var10 = function() { // Environment: var0
                    _fun57376: for (var _fun57376_ip = 0;;) switch (_fun57376_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot2;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun57376_ip = 40;
                                continue _fun57376
                            }
                        case 35:
                            var0 = var1.name;
                        case 40:
                            return var0;
                    }
                };
                var10 = var18.bind(var19)(var12, var10);
                _closure2_slot10 = var10;
                var2 = var17[var2];
                var19 = var3.bind(var5)(var2);
                var18 = var19.useStateFromStores;
                var2 = _closure1_slot7;
                var12 = new Array(1);
                var12[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var18 = var18.bind(var19)(var12, var2);
                var2 = 14;
                var2 = var17[var2];
                var12 = var3.bind(var5)(var2);
                var2 = var12.isPremium;
                var12 = var2.bind(var12)(var18);
                _closure2_slot11 = var12;
                var2 = 15;
                var2 = var17[var2];
                var5 = var3.bind(var5)(var2);
                var3 = var5.useSoundmojiEmojiPickerSectionExperiment;
                var2 = {};
                var17 = 'useEmojiCategories';
                var2.location = var17;
                var5 = var3.bind(var5)(var2);
                _closure2_slot12 = var5;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(13);
                var1[0] = var16;
                var1[1] = var15;
                var1[2] = var14;
                var1[3] = var13;
                var1[4] = var12;
                var1[5] = var11;
                var1[6] = var10;
                var1[7] = var9;
                var1[8] = var8;
                var1[9] = var7;
                var1[10] = var6;
                var1[11] = var5;
                var1[12] = var4;
                var0 = function() { // Environment: var0
                    _fun57378: for (var _fun57378_ip = 0;;) switch (_fun57378_ip) {
                        case 0:
                            var3 = _closure2_slot9;
                            var2 = var3.getGroupedCustomEmoji;
                            var18 = var2.bind(var3)();
                            var4 = _closure1_slot6;
                            var3 = var4.getFlattenedGuildIds;
                            var4 = var3.bind(var4)();
                            var17 = new Array(0);
                            var _closure3_slot0 = var17;
                            var5 = {};
                            var3 = _closure1_slot9;
                            var6 = var3.SOUNDMOJI;
                            var5.type = var6;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 16;
                            var7 = var10[var6];
                            var16 = undefined;
                            var7 = var9.bind(var16)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var16)(var6);
                            var6 = var6.t;
                            var6 = var6.f0Ezmv;
                            var6 = var7.bind(var8)(var6);
                            var5.name = var6;
                            var6 = _closure1_slot8;
                            var6 = var6.SOUNDMOJI;
                            var5.id = var6;
                            var6 = false;
                            var5.isNitroLocked = var6;
                            var15 = function arg0() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getEmojiUnavailableReasons;
                                var0 = {};
                                var3 = arg0;
                                var0.categoryEmojis = var3;
                                var4 = _closure2_slot1;
                                var0.channel = var4;
                                var4 = _closure2_slot2;
                                var0.guildId = var4;
                                var3 = _closure2_slot0;
                                var0.intention = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var _closure3_slot1 = var15;
                            var14 = var3.GUILD;
                            var3 = _closure1_slot20;
                            var13 = var3.bind(var16)(var4);
                            var4 = var13.bind(var16)();
                            var3 = var4.done;
                            var12 = null;
                            var11 = 0;
                            var10 = var4;
                            var9 = undefined;
                            var8 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var4 = undefined;
                            if (var3) {
                                _fun57378_ip = 571;
                                continue _fun57378
                            }
                        case 200:
                            var20 = var10.value;
                            var3 = _closure1_slot9;
                            var3 = var3.GUILD;
                            var27 = undefined;
                            if (!(var14 === var3)) {
                                _fun57378_ip = 235;
                                continue _fun57378
                            }
                        case 221:
                            var19 = _closure1_slot5;
                            var3 = var19.getGuild;
                            var27 = var3.bind(var19)(var20);
                        case 235:
                            var22 = var8;
                            var21 = var7;
                            var20 = var6;
                            var19 = var4;
                            if (!(var12 != var27)) {
                                _fun57378_ip = 541;
                                continue _fun57378
                            }
                        case 254:
                            var3 = var12 == var18;
                            var26 = undefined;
                            if (var3) {
                                _fun57378_ip = 272;
                                continue _fun57378
                            }
                        case 263:
                            var3 = var27.id;
                            var26 = var18[var3];
                        case 272:
                            var9 = var26;
                            var22 = var8;
                            var21 = var7;
                            var20 = var6;
                            var19 = var4;
                            if (!(var12 != var26)) {
                                _fun57378_ip = 541;
                                continue _fun57378
                            }
                        case 294:
                            var3 = var26.length;
                            var9 = var26;
                            var22 = var8;
                            var21 = var7;
                            var20 = var6;
                            var19 = var4;
                            if (!(var11 !== var3)) {
                                _fun57378_ip = 541;
                                continue _fun57378
                            }
                        case 321:
                            var23 = var15.bind(var16)(var26);
                            var25 = var23.emojisDisabled;
                            var3 = var23.emojisUnfiltered;
                            var24 = var23.emojisPremiumLockedCount;
                            var23 = var23.emojiNitroLocked;
                            var3 = var3.length;
                            var9 = var26;
                            var22 = var25;
                            var21 = var24;
                            var20 = var23;
                            var19 = var4;
                            if (!(var11 !== var3)) {
                                _fun57378_ip = 541;
                                continue _fun57378
                            }
                        case 377:
                            var3 = _closure1_slot9;
                            var28 = var3.GUILD;
                            var3 = null;
                            if (!(var14 === var28)) {
                                _fun57378_ip = 456;
                                continue _fun57378
                            }
                        case 393:
                            var28 = {};
                            var29 = _closure1_slot9;
                            var29 = var29.GUILD;
                            var28.type = var29;
                            var28.guild = var27;
                            var29 = _closure2_slot11;
                            var29 = !var29;
                            if (!var29) {
                                _fun57378_ip = 426;
                                continue _fun57378
                            }
                        case 423:
                            var29 = var23;
                        case 426:
                            if (!var29) {
                                _fun57378_ip = 438;
                                continue _fun57378
                            }
                        case 429:
                            var30 = var26.length;
                            var29 = var24 === var30;
                        case 438:
                            var28.isNitroLocked = var29;
                            var28.emojis = var26;
                            var28.emojisDisabled = var25;
                            var3 = var28;
                        case 456:
                            var9 = var26;
                            var22 = var25;
                            var21 = var24;
                            var20 = var23;
                            var19 = var3;
                            if (!(var12 != var3)) {
                                _fun57378_ip = 541;
                                continue _fun57378
                            }
                        case 475:
                            var28 = var27.id;
                            var27 = _closure2_slot2;
                            if (!(var28 !== var27)) {
                                _fun57378_ip = 515;
                                continue _fun57378
                            }
                        case 488:
                            var27 = var17.push;
                            var27 = var27.bind(var17)(var3);
                            var9 = var26;
                            var22 = var25;
                            var21 = var24;
                            var20 = var23;
                            var19 = var3;
                            _fun57378_ip = 541;
                            continue _fun57378;
                        case 515:
                            var27 = var17.unshift;
                            var27 = var27.bind(var17)(var3);
                            var9 = var26;
                            var22 = var25;
                            var21 = var24;
                            var20 = var23;
                            var19 = var3;
                        case 541:
                            var23 = var13.bind(var16)();
                            var3 = var23.done;
                            var8 = var22;
                            var7 = var21;
                            var6 = var20;
                            var4 = var19;
                            var10 = var23;
                            if (!var3) {
                                _fun57378_ip = 200;
                                continue _fun57378
                            }
                        case 571:
                            var2 = _closure1_slot4;
                            var3 = var2.categories;
                            var2 = var3.reduce;
                            var4 = _closure2_slot12;
                            if (!var4) {
                                _fun57378_ip = 601;
                                continue _fun57378
                            }
                        case 594:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun57378_ip = 607;
                                continue _fun57378
                            }
                        case 601:
                            var1 = new Array(0);
                            _fun57378_ip = 618;
                            continue _fun57378;
                        case 607:
                            var4 = new Array(1);
                            var4[0] = var5;
                            var1 = var4;
                        case 618:
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun57380: for (var _fun57380_ip = 0;;) switch (_fun57380_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var6 = arg1;
                                        var1 = _closure1_slot8;
                                        var1 = var1.TOP_GUILD_EMOJI;
                                        if (!(var6 !== var1)) {
                                            _fun57380_ip = 580;
                                            continue _fun57380
                                        }
                                    case 26:
                                        var1 = _closure1_slot8;
                                        var1 = var1.RECENT;
                                        if (!(var6 !== var1)) {
                                            _fun57380_ip = 363;
                                            continue _fun57380
                                        }
                                    case 43:
                                        var1 = _closure1_slot8;
                                        var1 = var1.FAVORITES;
                                        if (!(var6 !== var1)) {
                                            _fun57380_ip = 197;
                                            continue _fun57380
                                        }
                                    case 60:
                                        var1 = _closure1_slot8;
                                        var1 = var1.CUSTOM;
                                        if (!(var6 !== var1)) {
                                            _fun57380_ip = 120;
                                            continue _fun57380
                                        }
                                    case 74:
                                        var2 = var0.push;
                                        var1 = {};
                                        var3 = _closure1_slot9;
                                        var3 = var3.UNICODE;
                                        var1.type = var3;
                                        var1.id = var6;
                                        var1.name = var6;
                                        var3 = false;
                                        var1.isNitroLocked = var3;
                                        var1 = var2.bind(var0)(var1);
                                        _fun57380_ip = 751;
                                        continue _fun57380;
                                    case 120:
                                        var4 = _closure3_slot0;
                                        var2 = _closure2_slot4;
                                        if (var2) {
                                            _fun57380_ip = 158;
                                            continue _fun57380
                                        }
                                    case 137:
                                        var3 = _closure3_slot0;
                                        var2 = var3.filter;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun57381: for (var _fun57381_ip = 0;;) switch (_fun57381_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = var1.type;
                                                    var0 = _closure1_slot9;
                                                    var0 = var0.GUILD;
                                                    var0 = var2 === var0;
                                                    if (!var0) {
                                                        _fun57381_ip = 49;
                                                        continue _fun57381
                                                    }
                                                case 28:
                                                    var1 = var1.guild;
                                                    var2 = var1.id;
                                                    var1 = _closure2_slot2;
                                                    var0 = var2 === var1;
                                                case 49:
                                                    return var0;
                                            }
                                        };
                                        var4 = var2.bind(var3)(var1);
                                    case 158:
                                        var2 = var0.push;
                                        var1 = new Array(0);
                                        var13 = 0;
                                        var15 = var1;
                                        var14 = var4;
                                        var3 = arraySpread(var15, var14, var13);
                                        var15 = var2;
                                        var14 = var1;
                                        var13 = var0;
                                        var1 = apply(var15, var14, var13);
                                        _fun57380_ip = 751;
                                        continue _fun57380;
                                    case 197:
                                        var2 = _closure3_slot1;
                                        var1 = _closure2_slot7;
                                        var11 = undefined;
                                        var1 = var2.bind(var11)(var1);
                                        var3 = var1.emojisDisabled;
                                        var4 = var1.emojisUnfiltered;
                                        var1 = null;
                                        if (!(var1 != var4)) {
                                            _fun57380_ip = 361;
                                            continue _fun57380
                                        }
                                    case 239:
                                        var2 = var4.length;
                                        var1 = 0;
                                        if (!(var1 !== var2)) {
                                            _fun57380_ip = 361;
                                            continue _fun57380
                                        }
                                    case 250:
                                        var2 = var0.push;
                                        var1 = {};
                                        var7 = _closure1_slot9;
                                        var7 = var7.FAVORITES;
                                        var1.type = var7;
                                        var1.id = var6;
                                        var10 = _closure1_slot0;
                                        var12 = _closure1_slot2;
                                        var7 = 16;
                                        var8 = var12[var7];
                                        var8 = var10.bind(var11)(var8);
                                        var9 = var8.intl;
                                        var8 = var9.string;
                                        var7 = var12[var7];
                                        var7 = var10.bind(var11)(var7);
                                        var7 = var7.t;
                                        var7 = var7.y3LQCG;
                                        var7 = var8.bind(var9)(var7);
                                        var1.name = var7;
                                        var7 = false;
                                        var1.isNitroLocked = var7;
                                        var1.emojis = var4;
                                        var1.emojisDisabled = var3;
                                        var1 = var2.bind(var0)(var1);
                                        _fun57380_ip = 751;
                                        continue _fun57380;
                                    case 361:
                                        return var0;
                                    case 363:
                                        var1 = _closure1_slot17;
                                        var2 = var1.REACTION;
                                        var4 = new Array(2);
                                        var4[0] = var2;
                                        var1 = var1.DEFAULT_REACT_EMOJI;
                                        var4[1] = var1;
                                        var3 = var4.includes;
                                        var2 = _closure2_slot0;
                                        var2 = var3.bind(var4)(var2);
                                        if (var2) {
                                            _fun57380_ip = 417;
                                            continue _fun57380
                                        }
                                    case 411:
                                        var2 = _closure2_slot5;
                                        _fun57380_ip = 421;
                                        continue _fun57380;
                                    case 417:
                                        var2 = _closure2_slot6;
                                    case 421:
                                        var1 = _closure3_slot1;
                                        var11 = undefined;
                                        var1 = var1.bind(var11)(var2);
                                        var3 = var1.emojisDisabled;
                                        var4 = var1.emojisUnfiltered;
                                        var1 = null;
                                        if (!(var1 != var4)) {
                                            _fun57380_ip = 578;
                                            continue _fun57380
                                        }
                                    case 456:
                                        var2 = var4.length;
                                        var1 = 0;
                                        if (!(var1 !== var2)) {
                                            _fun57380_ip = 578;
                                            continue _fun57380
                                        }
                                    case 467:
                                        var2 = var0.push;
                                        var1 = {};
                                        var7 = _closure1_slot9;
                                        var7 = var7.RECENT;
                                        var1.type = var7;
                                        var1.id = var6;
                                        var10 = _closure1_slot0;
                                        var12 = _closure1_slot2;
                                        var7 = 16;
                                        var8 = var12[var7];
                                        var8 = var10.bind(var11)(var8);
                                        var9 = var8.intl;
                                        var8 = var9.string;
                                        var7 = var12[var7];
                                        var7 = var10.bind(var11)(var7);
                                        var7 = var7.t;
                                        var7 = var7["5TvaSm"];
                                        var7 = var8.bind(var9)(var7);
                                        var1.name = var7;
                                        var7 = false;
                                        var1.isNitroLocked = var7;
                                        var1.emojis = var4;
                                        var1.emojisDisabled = var3;
                                        var1 = var2.bind(var0)(var1);
                                        _fun57380_ip = 751;
                                        continue _fun57380;
                                    case 578:
                                        return var0;
                                    case 580:
                                        var2 = _closure3_slot1;
                                        var1 = _closure2_slot8;
                                        var10 = undefined;
                                        var1 = var2.bind(var10)(var1);
                                        var3 = var1.emojisDisabled;
                                        var4 = var1.emojisUnfiltered;
                                        var1 = null;
                                        if (!(var1 != var4)) {
                                            _fun57380_ip = 753;
                                            continue _fun57380
                                        }
                                    case 622:
                                        var2 = var4.length;
                                        var1 = 0;
                                        if (!(var1 !== var2)) {
                                            _fun57380_ip = 753;
                                            continue _fun57380
                                        }
                                    case 633:
                                        var2 = var0.push;
                                        var1 = {};
                                        var7 = _closure1_slot9;
                                        var7 = var7.TOP_GUILD_EMOJI;
                                        var1.type = var7;
                                        var1.id = var6;
                                        var6 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var5 = 16;
                                        var7 = var11[var5];
                                        var7 = var6.bind(var10)(var7);
                                        var8 = var7.intl;
                                        var7 = var8.formatToPlainString;
                                        var5 = var11[var5];
                                        var5 = var6.bind(var10)(var5);
                                        var5 = var5.t;
                                        var6 = var5.W6Wi1X;
                                        var5 = {};
                                        var9 = _closure2_slot10;
                                        var5.guildName = var9;
                                        var5 = var7.bind(var8)(var6, var5);
                                        var1.name = var5;
                                        var5 = false;
                                        var1.isNitroLocked = var5;
                                        var1.emojis = var4;
                                        var1.emojisDisabled = var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 751:
                                        return var0;
                                    case 753:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useEmojiCategories = var7;
    var7 = function() { // Environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 18;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getCategories;
        var2 = var0.bind(var1)();
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = _closure1_slot9;
            var2 = var2.UNICODE;
            var0.type = var2;
            var0.id = var1;
            var0.name = var1;
            var1 = false;
            var0.isNitroLocked = var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getUnicodeEmojiCategories = var7;
    var7 = function(arg0) { // Environment: var1
        _fun57384: for (var _fun57384_ip = 0;;) switch (_fun57384_ip) {
            case 0:
                var7 = arg0;
                var5 = null;
                var2 = var5 == var7;
                var0 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun57384_ip = 26;
                    continue _fun57384
                }
            case 16:
                var2 = var7.getGuildId;
                var1 = var2.bind(var7)();
            case 26:
                var8 = var5 != var1;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot11;
                var2 = var1.PREMIUM_PROMOTION_OPENED;
                var1 = {};
                var9 = _closure1_slot12;
                if (var8) {
                    _fun57384_ip = 85;
                    continue _fun57384
                }
            case 77:
                var8 = var9.DM_CHANNEL;
                _fun57384_ip = 91;
                continue _fun57384;
            case 85:
                var8 = var9.GUILD_CHANNEL;
            case 91:
                var1.location_page = var8;
                if (!(var5 == var7)) {
                    _fun57384_ip = 112;
                    continue _fun57384
                }
            case 100:
                var5 = _closure1_slot13;
                var5 = var5.CUSTOM_STATUS_MODAL;
                _fun57384_ip = 122;
                continue _fun57384;
            case 112:
                var6 = _closure1_slot13;
                var5 = var6.EMOJI_PICKER_POPOUT;
            case 122:
                var1.location_section = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackPremiumSettingsPaneOpened = var7;
    var7 = function(arg0, arg1) { // Environment: var1
        _fun57385: for (var _fun57385_ip = 0;;) switch (_fun57385_ip) {
            case 0:
                var7 = arg1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 20;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot11;
                var2 = var1.SEARCH_STARTED;
                var1 = {};
                var5 = null;
                if (!(var5 != var7)) {
                    _fun57385_ip = 66;
                    continue _fun57385
                }
            case 52:
                var5 = _closure1_slot17;
                var5 = var5.REACTION;
                if (!(var7 !== var5)) {
                    _fun57385_ip = 78;
                    continue _fun57385
                }
            case 66:
                var5 = _closure1_slot15;
                var5 = var5.EMOJI;
                _fun57385_ip = 88;
                continue _fun57385;
            case 78:
                var6 = _closure1_slot15;
                var5 = var6.EMOJI_REACTION;
            case 88:
                var1.search_type = var5;
                var5 = arg0;
                var1.location = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackEmojiSearchStart = var7;
    var7 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
        _fun57386: for (var _fun57386_ip = 0;;) switch (_fun57386_ip) {
            case 0:
                var7 = arg4;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 20;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot11;
                var2 = var1.SEARCH_RESULT_VIEWED;
                var1 = {};
                var5 = null;
                if (!(var5 != var7)) {
                    _fun57386_ip = 66;
                    continue _fun57386
                }
            case 52:
                var5 = _closure1_slot17;
                var5 = var5.REACTION;
                if (!(var7 !== var5)) {
                    _fun57386_ip = 78;
                    continue _fun57386
                }
            case 66:
                var5 = _closure1_slot15;
                var5 = var5.EMOJI;
                _fun57386_ip = 88;
                continue _fun57386;
            case 78:
                var6 = _closure1_slot15;
                var5 = var6.EMOJI_REACTION;
            case 88:
                var1.search_type = var5;
                var5 = arg0;
                var1.total_results = var5;
                var5 = arg1;
                var1.num_results_locked = var5;
                var5 = arg3;
                var1.query = var5;
                var5 = arg2;
                var1.location = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackEmojiSearchResultsViewed = var7;
    var7 = function(arg0) { // Environment: var1
        _fun57387: for (var _fun57387_ip = 0;;) switch (_fun57387_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.emoji;
                var9 = var0.emojiSuggestions;
                var10 = var0.searchQuery;
                var11 = var0.isLocked;
                var14 = var0.location;
                var15 = var0.intention;
                var6 = var0.index;
                var5 = var0.messageId;
                var13 = var12.uniqueName;
                var8 = null;
                if (!(var8 == var13)) {
                    _fun57387_ip = 67;
                    continue _fun57387
                }
            case 62:
                var13 = var12.name;
            case 67:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 21;
                var2 = var4[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.match;
                var17 = var2.bind(var3)(var15);
                var16 = var17.with;
                var2 = _closure1_slot17;
                var15 = var2.REACTION;
                var3 = function() { // Environment: var7
                    var0 = _closure1_slot15;
                    var0 = var0.EMOJI_REACTION;
                    return var0;
                };
                var16 = var16.bind(var17)(var15, var3);
                var15 = var16.with;
                var3 = var2.AUTO_SUGGESTION;
                var2 = function() { // Environment: var7
                    var0 = _closure1_slot15;
                    var0 = var0.EMOJI_AUTO_SUGGESTION;
                    return var0;
                };
                var15 = var15.bind(var16)(var3, var2);
                var3 = var15.otherwise;
                var2 = function() { // Environment: var7
                    var0 = _closure1_slot15;
                    var0 = var0.EMOJI;
                    return var0;
                };
                var15 = var3.bind(var15)(var2);
                var3 = _closure1_slot1;
                var2 = 20;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot11;
                var2 = var1.SEARCH_RESULT_SELECTED;
                var1 = {};
                var1.search_type = var15;
                var1.location = var14;
                var14 = var12.guildId;
                var1.expression_guild_id = var14;
                var14 = var12.id;
                var1.emoji_id = var14;
                var1.emoji_name = var13;
                var13 = var12.id;
                var13 = var8 != var13;
                var1.is_custom = var13;
                var12 = var12.animated;
                var1.is_animated = var12;
                var1.is_locked = var11;
                var1.query = var10;
                var1.index_num = var6;
                var10 = var8 == var9;
                var6 = undefined;
                if (var10) {
                    _fun57387_ip = 296;
                    continue _fun57387
                }
            case 290:
                var6 = var9.loadId;
            case 296:
                var1.load_id = var6;
                var10 = var8 == var9;
                var6 = undefined;
                if (var10) {
                    _fun57387_ip = 330;
                    continue _fun57387
                }
            case 310:
                var10 = var9.results;
                var11 = var8 == var10;
                var6 = undefined;
                if (var11) {
                    _fun57387_ip = 330;
                    continue _fun57387
                }
            case 325:
                var6 = var10.length;
            case 330:
                var1.total_results = var6;
                var10 = var8 == var9;
                var6 = undefined;
                if (var10) {
                    _fun57387_ip = 389;
                    continue _fun57387
                }
            case 344:
                var10 = var9.results;
                var8 = var8 == var10;
                var6 = undefined;
                if (var8) {
                    _fun57387_ip = 389;
                    continue _fun57387
                }
            case 359:
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.emoji;
                    var0 = var0.id;
                    return var0;
                };
                var9 = var9.bind(var10)(var8);
                var8 = var9.filter;
                var7 = function(arg0) { // Environment: var7
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var6 = var8.bind(var9)(var7);
            case 389:
                var1.emoji_suggestion_ids = var6;
                var1.message_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackEmojiSearchSelect = var7;
    var7 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 20;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot11;
        var2 = var1.SEARCH_RESULT_EMPTY;
        var1 = {};
        var5 = _closure1_slot15;
        var5 = var5.EMOJI;
        var1.search_type = var5;
        var5 = arg1;
        var1.query = var5;
        var5 = arg0;
        var1.location = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackEmojiSearchEmpty = var7;
    var7 = function(arg0) { // Environment: var1
        _fun57394: for (var _fun57394_ip = 0;;) switch (_fun57394_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.emoji;
                var10 = var0.subCategory;
                var5 = var0.position;
                var7 = var0.newlyAddedHighlight;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 20;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot11;
                var2 = var1.EXPRESSION_PICKER_EXPRESSION_FOCUS;
                var1 = {};
                var8 = null;
                var9 = var8 == var10;
                var8 = undefined;
                if (var9) {
                    _fun57394_ip = 89;
                    continue _fun57394
                }
            case 80:
                var9 = var10.toString;
                var8 = var9.bind(var10)();
            case 89:
                var1.expression_section = var8;
                var1.newly_added_highlight = var7;
                var7 = var6.id;
                var1.emoji_id = var7;
                var7 = var6.name;
                var1.emoji_name = var7;
                var6 = var6.animated;
                var1.emoji_animated = var6;
                var1.emoji_position = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackEmojiFocus = var7;
    var7 = function(arg0) { // Environment: var1
        _fun57395: for (var _fun57395_ip = 0;;) switch (_fun57395_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.emoji;
                var14 = var1.location;
                var3 = var1.pickerIntention;
                var10 = var1.category;
                var11 = var1.subCategory;
                var0 = undefined;
                if (!(var11 === var0)) {
                    _fun57395_ip = 51;
                    continue _fun57395
                }
            case 38:
                var2 = _closure1_slot10;
                var11 = var2.NONE;
            case 51:
                var8 = var1.position;
                var7 = var1.newlyAddedHighlight;
                var6 = var1.isBurstReaction;
                var5 = var1.messageId;
                var2 = _closure1_slot17;
                var2 = var2.REACTION;
                if (!(var2 !== var3)) {
                    _fun57395_ip = 128;
                    continue _fun57395
                }
            case 90:
                var2 = _closure1_slot17;
                var2 = var2.STATUS;
                if (!(var2 !== var3)) {
                    _fun57395_ip = 116;
                    continue _fun57395
                }
            case 104:
                var2 = _closure1_slot19;
                var15 = var2.EMOJI_PICKER_EMOJI_CLICKED;
                _fun57395_ip = 152;
                continue _fun57395;
            case 116:
                var2 = _closure1_slot19;
                var15 = var2.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                _fun57395_ip = 152;
                continue _fun57395;
            case 128:
                var3 = _closure1_slot19;
                if (var6) {
                    _fun57395_ip = 143;
                    continue _fun57395
                }
            case 135:
                var2 = var3.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                _fun57395_ip = 149;
                continue _fun57395;
            case 143:
                var2 = var3.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED;
            case 149:
                var15 = var2;
            case 152:
                var13 = var12.uniqueName;
                var9 = null;
                if (!(var9 == var13)) {
                    _fun57395_ip = 169;
                    continue _fun57395
                }
            case 164:
                var13 = var12.name;
            case 169:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot11;
                var2 = var1.EXPRESSION_PICKER_EXPRESSION_SELECTED;
                var1 = {};
                var1.type = var15;
                var1.location = var14;
                var14 = var12.id;
                var1.expression_id = var14;
                var1.expression_name = var13;
                var13 = var12.guildId;
                var1.expression_guild_id = var13;
                var13 = var12.id;
                var13 = var9 != var13;
                var1.is_custom = var13;
                var12 = var12.animated;
                var1.is_animated = var12;
                var1.expression_picker_section = var10;
                var10 = var9 == var11;
                var9 = undefined;
                if (var10) {
                    _fun57395_ip = 290;
                    continue _fun57395
                }
            case 281:
                var10 = var11.toString;
                var9 = var10.bind(var11)();
            case 290:
                var1.expression_section = var9;
                var1.emoji_position = var8;
                var1.newly_added_highlight = var7;
                var1.is_burst = var6;
                var1.message_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackEmojiSelect = var7;
    var7 = function(arg0) { // Environment: var1
        _fun57396: for (var _fun57396_ip = 0;;) switch (_fun57396_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.emoji;
                var9 = var0.location;
                var6 = var5.uniqueName;
                var7 = null;
                if (!(var7 == var6)) {
                    _fun57396_ip = 31;
                    continue _fun57396
                }
            case 26:
                var6 = var5.name;
            case 31:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 20;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot11;
                var2 = var1.EXPRESSION_FAVORITED;
                var1 = {};
                var1.location = var9;
                var8 = _closure1_slot18;
                var8 = var8.EMOJI;
                var1.expression_type = var8;
                var8 = var5.id;
                var1.expression_id = var8;
                var1.expression_name = var6;
                var6 = var5.guildId;
                var1.expression_guild_id = var6;
                var6 = var5.id;
                var6 = var7 != var6;
                var1.is_custom = var6;
                var5 = var5.animated;
                var1.is_animated = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackEmojiFavorited = var7;
    var2.throttledTrackEmojiAutoSuggestDisplayed = var6;
    var6 = function(arg0, arg1) { // Environment: var1
        _fun57397: for (var _fun57397_ip = 0;;) switch (_fun57397_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var3 = var0.type;
                var1 = _closure1_slot9;
                var1 = var1.GUILD;
                if (!(var3 !== var1)) {
                    _fun57397_ip = 35;
                    continue _fun57397
                }
            case 28:
                var0 = var0.id;
                _fun57397_ip = 56;
                continue _fun57397;
            case 35:
                var1 = null;
                var3 = var1 != var2;
                var1 = '';
                if (!var3) {
                    _fun57397_ip = 53;
                    continue _fun57397
                }
            case 48:
                var1 = var2.name;
            case 53:
                var0 = var1;
            case 56:
                return var0;
        }
    };
    var2.getAriaIdForEmojiCategory = var6;
    var6 = function(arg0, arg1) { // Environment: var1
        _fun57398: for (var _fun57398_ip = 0;;) switch (_fun57398_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var2 = _closure1_slot8;
                var2 = var2.TOP_GUILD_EMOJI;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 961;
                    continue _fun57398
                }
            case 26:
                var2 = _closure1_slot8;
                var2 = var2.RECENT;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 902;
                    continue _fun57398
                }
            case 43:
                var2 = _closure1_slot8;
                var2 = var2.FAVORITES;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 843;
                    continue _fun57398
                }
            case 60:
                var2 = _closure1_slot8;
                var2 = var2.ACTIVITY;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 782;
                    continue _fun57398
                }
            case 77:
                var2 = _closure1_slot8;
                var2 = var2.FLAGS;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 721;
                    continue _fun57398
                }
            case 94:
                var2 = _closure1_slot8;
                var2 = var2.FOOD;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 660;
                    continue _fun57398
                }
            case 111:
                var2 = _closure1_slot8;
                var2 = var2.NATURE;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 599;
                    continue _fun57398
                }
            case 128:
                var2 = _closure1_slot8;
                var2 = var2.OBJECTS;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 538;
                    continue _fun57398
                }
            case 145:
                var2 = _closure1_slot8;
                var2 = var2.PEOPLE;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 477;
                    continue _fun57398
                }
            case 162:
                var2 = _closure1_slot8;
                var2 = var2.SYMBOLS;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 416;
                    continue _fun57398
                }
            case 179:
                var2 = _closure1_slot8;
                var2 = var2.TRAVEL;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 355;
                    continue _fun57398
                }
            case 196:
                var2 = _closure1_slot8;
                var2 = var2.PREMIUM_UPSELL;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 294;
                    continue _fun57398
                }
            case 210:
                var2 = _closure1_slot8;
                var2 = var2.SOUNDMOJI;
                if (!(var2 !== var1)) {
                    _fun57398_ip = 235;
                    continue _fun57398
                }
            case 224:
                var2 = null;
                if (!(var2 != var4)) {
                    _fun57398_ip = 233;
                    continue _fun57398
                }
            case 230:
                var1 = var4;
            case 233:
                return var1;
            case 235:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.f0Ezmv;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 294:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.pAF6xE;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 355:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.w33hIP;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 416:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.QXMYAb;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 477:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.GX594D;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 538:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.gWm7Mk;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 599:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.egIBDH;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 660:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.ldm9aY;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 721:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.vvaizu;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 782:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.O783tR;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 843:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.y3LQCG;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 902:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["5TvaSm"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 961:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 16;
                var2 = var6[var0];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var5.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.W6Wi1X;
                var0 = {};
                var0.guildName = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getStringForEmojiCategory = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        var13 = arg0;
        var12 = arg1;
        var11 = arg2;
        var9 = arg3;
        var _closure2_slot0 = var13;
        var _closure2_slot1 = var12;
        var _closure2_slot2 = var11;
        var _closure2_slot3 = var9;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 24;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.FrecencyUserSettingsActionCreators;
            var1 = var2.loadIfNecessary;
            var1 = var1.bind(var2)();
            return var0;
        };
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var1);
        var1 = _closure1_slot16;
        var7 = undefined;
        var10 = var1.bind(var7)(var11);
        var _closure2_slot4 = var10;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 13;
        var3 = var8[var1];
        var5 = var6.bind(var7)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(5);
        var2[0] = var13;
        var2[1] = var12;
        var2[2] = var11;
        var2[3] = var10;
        var2[4] = var9;
        var1 = var8[var1];
        var1 = var6.bind(var7)(var1);
        var14 = var1.statesWillNeverBeEqual;
        var16 = function() { // Environment: var0
            _fun57401: for (var _fun57401_ip = 0;;) switch (_fun57401_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.replace;
                    var0 = /^:/;
                    var1 = '';
                    var3 = var2.bind(var3)(var0, var1);
                    var2 = var3.replace;
                    var0 = /:$/;
                    var5 = var2.bind(var3)(var0, var1);
                    var0 = null;
                    if (!(var1 !== var5)) {
                        _fun57401_ip = 134;
                        continue _fun57401
                    }
                case 67:
                    var3 = _closure1_slot4;
                    var2 = var3.searchWithoutFetchingLatest;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.channel = var6;
                    var1.query = var5;
                    var5 = 0;
                    var1.count = var5;
                    var5 = _closure2_slot2;
                    var1.intention = var5;
                    var5 = _closure2_slot4;
                    var1.includeExternalGuilds = var5;
                    var4 = _closure2_slot3;
                    var1.showOnlyUnicode = var4;
                    var0 = var2.bind(var3)(var1);
                case 134:
                    return var0;
            }
        };
        var18 = var5;
        var17 = var3;
        var15 = var2;
        var0 = var18[var4](var17, var16, var15, var14, var13);
        return var0;
    };
    var2.useEmojiSearchResults = var6;
    var2.useFrequentlyUsedEmojis = var5;
    var2.useFrequentlyUsedReactionEmojis = var4;
    var2.useFavoriteEmojis = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 24;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.FrecencyUserSettingsActionCreators;
            var1 = var2.loadIfNecessary;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun57404: for (var _fun57404_ip = 0;;) switch (_fun57404_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun57404_ip = 53;
                        continue _fun57404
                    }
                case 16:
                    var4 = _closure1_slot4;
                    var3 = var4.getDisambiguatedEmojiContext;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.isFavoriteEmojiWithoutFetchingLatest;
                    var1 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1);
                case 53:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsFavoriteEmoji = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 24;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.FrecencyUserSettingsActionCreators;
            var1 = var2.loadIfNecessary;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresArray;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getDisambiguatedEmojiContext;
            var0 = _closure2_slot0;
            var1 = var1.bind(var2)(var0);
            var0 = var1.getEmojiInPriorityOrderWithoutFetchingLatest;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useEmojiInPriorityOrder = var3;
    var3 = function arg0, arg1, arg2() {
        _fun57408: for (var _fun57408_ip = 0;;) switch (_fun57408_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun57408_ip = 108;
                    continue _fun57408
                }
            case 17:
                var2 = var5.map;
                var1 = function(arg0) { // Environment: var0
                    _fun57409: for (var _fun57409_ip = 0;;) switch (_fun57409_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.id;
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun57409_ip = 20;
                                continue _fun57409
                            }
                        case 14:
                            var0 = var1.uniqueName;
                        case 20:
                            if (!(var2 == var0)) {
                                _fun57409_ip = 29;
                                continue _fun57409
                            }
                        case 24:
                            var0 = var1.name;
                        case 29:
                            return var0;
                    }
                };
                var1 = var2.bind(var5)(var1);
                var2 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var2 = var2.bind(var4)(var0);
                var0 = var1.includes;
                var0 = var0.bind(var1)(var3);
                if (var0) {
                    _fun57408_ip = 96;
                    continue _fun57408
                }
            case 63:
                var0 = var2.includes;
                var0 = var0.bind(var2)(var3);
                var2 = _closure1_slot10;
                if (var0) {
                    _fun57408_ip = 88;
                    continue _fun57408
                }
            case 80:
                var0 = var2.NONE;
                _fun57408_ip = 94;
                continue _fun57408;
            case 88:
                var0 = var2.NEWLY_ADDED_EMOJI;
            case 94:
                _fun57408_ip = 106;
                continue _fun57408;
            case 96:
                var1 = _closure1_slot10;
                var0 = var1.TOP_GUILD_EMOJI;
            case 106:
                return var0;
            case 108:
                var0 = _closure1_slot10;
                var0 = var0.NONE;
                return var0;
        }
    };
    var2.getEmojiSubCategory = var3;
    var1 = function arg0, arg1() {
        _fun57411: for (var _fun57411_ip = 0;;) switch (_fun57411_ip) {
            case 0:
                var0 = _closure1_slot17;
                var2 = var0.REACTION;
                var0 = arg0;
                if (!(var0 !== var2)) {
                    _fun57411_ip = 79;
                    continue _fun57411
                }
            case 20:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 16;
                var2 = var6[var0];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.KgK5qg;
                var0 = var2.bind(var3)(var0);
                _fun57411_ip = 162;
                continue _fun57411;
            case 79:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var2 = var1.t;
                var1 = arg1;
                if (var1) {
                    _fun57411_ip = 146;
                    continue _fun57411
                }
            case 131:
                var1 = var2["6any2A"];
                var1 = var3.bind(var4)(var1);
                _fun57411_ip = 159;
                continue _fun57411;
            case 146:
                var2 = var2["h7ES+n"];
                var1 = var3.bind(var4)(var2);
            case 159:
                var0 = var1;
            case 162:
                return var0;
        }
    };
    var2.getSearchPlaceholder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4737, 1410, 4376, 1621, 4741, 660, 1624, 1565, 1623, 6996, 6998, 6999, 566, 1638, 7000, 1234, 3108, 3104, 795, 4302, 3459, 22, 667, 1355, 2]);