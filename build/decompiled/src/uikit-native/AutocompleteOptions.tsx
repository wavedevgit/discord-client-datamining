// uikit-native/AutocompleteOptions.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AutoCompleteResultTypes;
    var _closure1_slot9 = var7;
    var3 = var3.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.MENTION_SENTINEL;
    var _closure1_slot11 = var7;
    var7 = var3.EMOJI_SENTINEL;
    var _closure1_slot12 = var7;
    var7 = var3.CHANNEL_SENTINEL;
    var _closure1_slot13 = var7;
    var3 = var3.COMMAND_SENTINEL;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AutocompleteTypes;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.EmojiIntention;
    var _closure1_slot16 = var7;
    var7 = var3.EMOJI_MAX_LENGTH;
    var _closure1_slot17 = var7;
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot18 = var3;
    var3 = false;
    var _closure1_slot19 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var7 = var8.debounce;
    var3 = 12;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {
        'leading': true,
        'trailing': true
    };
    var3 = var7.bind(var8)(var6, var9, var3);
    var _closure1_slot20 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/AutocompleteOptions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun74738: for (var _fun74738_ip = 0;;) switch (_fun74738_ip) {
            case 0:
                var2 = arguments[1];
                var0 = arguments[2];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun74738_ip = 23;
                    continue _fun74738
                }
            case 21:
                var2 = false;
            case 23:
                var _closure2_slot1 = var2;
                if (!(var0 === var1)) {
                    _fun74738_ip = 33;
                    continue _fun74738
                }
            case 31:
                var0 = true;
            case 33:
                var _closure2_slot2 = var0;
                var0 = {};
                var1 = _closure1_slot15;
                var4 = var1.MENTIONS;
                var2 = {};
                var7 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var7;
                var2.stores = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun74739: for (var _fun74739_ip = 0;;) switch (_fun74739_ip) {
                        case 0:
                            var7 = arg1;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.queryMentionResults;
                            var1 = {};
                            var6 = arg0;
                            var1.query = var6;
                            var6 = _closure2_slot0;
                            var1.channel = var6;
                            var6 = null;
                            var9 = var6 == var7;
                            var8 = undefined;
                            if (var9) {
                                _fun74739_ip = 74;
                                continue _fun74739
                            }
                        case 68:
                            var8 = var7.canMentionEveryone;
                        case 74:
                            var1.canMentionEveryone = var8;
                            var9 = var6 == var7;
                            var8 = undefined;
                            if (var9) {
                                _fun74739_ip = 94;
                                continue _fun74739
                            }
                        case 88:
                            var8 = var7.canMentionHere;
                        case 94:
                            var1.canMentionHere = var8;
                            var9 = var6 == var7;
                            var8 = undefined;
                            if (var9) {
                                _fun74739_ip = 114;
                                continue _fun74739
                            }
                        case 108:
                            var8 = var7.canMentionUsers;
                        case 114:
                            var1.canMentionUsers = var8;
                            var9 = var6 == var7;
                            var8 = undefined;
                            if (var9) {
                                _fun74739_ip = 134;
                                continue _fun74739
                            }
                        case 128:
                            var8 = var7.canMentionRoles;
                        case 134:
                            var1.canMentionRoles = var8;
                            var9 = var6 == var7;
                            var8 = undefined;
                            if (var9) {
                                _fun74739_ip = 154;
                                continue _fun74739
                            }
                        case 148:
                            var8 = var7.canMentionAnyGuildUser;
                        case 154:
                            var1.includeAllGuildUsers = var8;
                            var8 = var6 == var7;
                            var6 = undefined;
                            if (var8) {
                                _fun74739_ip = 174;
                                continue _fun74739
                            }
                        case 168:
                            var6 = var7.canMentionNonMentionableRoles;
                        case 174:
                            var1.includeNonMentionableRoles = var6;
                            var6 = arg2;
                            var1.request = var6;
                            var1 = var4.bind(var5)(var1);
                            var5 = var1.users;
                            var8 = var1.globals;
                            var6 = var1.roles;
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 11;
                            var0 = var4[var0];
                            var1 = var1.bind(var2)(var0);
                            var4 = var5.map;
                            var0 = function(arg0) { // Environment: var3
                                var0 = {};
                                var1 = _closure1_slot9;
                                var1 = var1.USER;
                                var0.type = var1;
                                var2 = arg0;
                                var3 = var0;
                                var1 = copyDataProperties(var3, var2);
                                return var0;
                            };
                            var11 = var4.bind(var5)(var0);
                            var0 = new Array(0);
                            var10 = 0;
                            var12 = var0;
                            var10 = arraySpread(var12, var11, var10);
                            var7 = var8.map;
                            var4 = function(arg0) { // Environment: var3
                                var0 = {};
                                var1 = _closure1_slot9;
                                var1 = var1.GLOBAL;
                                var0.type = var1;
                                var2 = arg0;
                                var3 = var0;
                                var1 = copyDataProperties(var3, var2);
                                return var0;
                            };
                            var11 = var7.bind(var8)(var4);
                            var12 = var0;
                            var10 = arraySpread(var12, var11, var10);
                            var5 = var6.map;
                            var3 = function(arg0) { // Environment: var3
                                var0 = {};
                                var1 = _closure1_slot9;
                                var1 = var1.ROLE;
                                var0.type = var1;
                                var2 = arg0;
                                var3 = var0;
                                var1 = copyDataProperties(var3, var2);
                                return var0;
                            };
                            var11 = var5.bind(var6)(var3);
                            var12 = var0;
                            var3 = arraySpread(var12, var11, var10);
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.value;
                            var0 = var0.bind(var1)();
                            return var0;
                    }
                };
                var2.queryResults = var6;
                var6 = function arg0, arg1() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.matchSentinel;
                    var2 = _closure1_slot11;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var4)(var1, var0, var2);
                    return var0;
                };
                var2.matches = var6;
                var0[var4] = var2;
                var4 = var1.CHANNELS;
                var2 = {};
                var6 = function arg0, arg1() {
                    _fun74744: for (var _fun74744_ip = 0;;) switch (_fun74744_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = arg1;
                            var1 = null;
                            var2 = var1 == var0;
                            var3 = undefined;
                            var4 = undefined;
                            if (var2) {
                                _fun74744_ip = 25;
                                continue _fun74744
                            }
                        case 19:
                            var4 = var0.channelTypes;
                        case 25:
                            if (!(var1 != var0)) {
                                _fun74744_ip = 38;
                                continue _fun74744
                            }
                        case 29:
                            var0 = var0.isActiveApplicationCommand;
                            if (var0) {
                                _fun74744_ip = 92;
                                continue _fun74744
                            }
                        case 38:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = var1.bind(var3)(var0);
                            var1 = var2.queryChannelResults;
                            var0 = {};
                            var0.query = var5;
                            var6 = _closure2_slot0;
                            var0.channel = var6;
                            var0 = var1.bind(var2)(var0);
                            _fun74744_ip = 149;
                            continue _fun74744;
                        case 92:
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 13;
                            var1 = var6[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.queryApplicationCommandChannelResults;
                            var1 = {};
                            var1.query = var5;
                            var5 = _closure2_slot0;
                            var1.channel = var5;
                            var1.channelTypes = var4;
                            var0 = var2.bind(var3)(var1);
                        case 149:
                            var2 = var0.channels;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = {};
                                var3 = _closure1_slot9;
                                var3 = var3.CHANNEL;
                                var0.type = var3;
                                var0.channel = var1;
                                var3 = _closure1_slot6;
                                var2 = var3.getChannel;
                                var1 = var1.parent_id;
                                var1 = var2.bind(var3)(var1);
                                var0.category = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2.queryResults = var6;
                var6 = function arg0, arg1() {
                    _fun74746: for (var _fun74746_ip = 0;;) switch (_fun74746_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = var1.isPrivate;
                            var0 = var0.bind(var1)();
                            var0 = !var0;
                            if (!var0) {
                                _fun74746_ip = 71;
                                continue _fun74746
                            }
                        case 23:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.matchSentinel;
                            var3 = _closure1_slot13;
                            var2 = arg0;
                            var1 = arg1;
                            var0 = var4.bind(var5)(var2, var1, var3);
                        case 71:
                            return var0;
                    }
                };
                var2.matches = var6;
                var0[var4] = var2;
                var4 = var1.EMOJIS_AND_STICKERS;
                var2 = {};
                var6 = function arg0, arg1() {
                    _fun74747: for (var _fun74747_ip = 0;;) switch (_fun74747_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var4 = _closure2_slot2;
                            var11 = 40;
                            if (!var4) {
                                _fun74747_ip = 23;
                                continue _fun74747
                            }
                        case 21:
                            var11 = 0;
                        case 23:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var9 = 13;
                            var4 = var4[var9];
                            var8 = undefined;
                            var7 = var5.bind(var8)(var4);
                            var5 = var7.queryEmojiResults;
                            var4 = {};
                            var4.query = var3;
                            var10 = _closure2_slot0;
                            var4.channel = var10;
                            var10 = _closure1_slot16;
                            var10 = var10.CHAT;
                            var4.intention = var10;
                            var10 = _closure1_slot10;
                            var10 = var10 + var11;
                            var4.maxCount = var10;
                            var4 = var5.bind(var7)(var4);
                            var5 = null;
                            if (!(var5 != var2)) {
                                _fun74747_ip = 164;
                                continue _fun74747
                            }
                        case 108:
                            var2 = var2.includeEmojiPremiumUpsell;
                            if (!var2) {
                                _fun74747_ip = 164;
                                continue _fun74747
                            }
                        case 117:
                            var2 = var4.emojis;
                            var2 = var2.locked;
                            var5 = var2.length;
                            var2 = 0;
                            if (!(var5 > var2)) {
                                _fun74747_ip = 164;
                                continue _fun74747
                            }
                        case 140:
                            var2 = var4.emojis;
                            var2 = var2.unlocked;
                            var5 = var2.length;
                            var2 = 4;
                            if (!(!(var5 < var2))) {
                                _fun74747_ip = 170;
                                continue _fun74747
                            }
                        case 164:
                            var2 = new Array(0);
                            _fun74747_ip = 214;
                            continue _fun74747;
                        case 170:
                            var7 = {};
                            var5 = _closure1_slot9;
                            var5 = var5.EMOJI_PREMIUM_UPSELL;
                            var7.type = var5;
                            var5 = var4.emojis;
                            var5 = var5.locked;
                            var7.results = var5;
                            var5 = new Array(1);
                            var5[0] = var7;
                            var2 = var5;
                        case 214:
                            var5 = new Array(0);
                            var7 = _closure2_slot2;
                            if (!var7) {
                                _fun74747_ip = 344;
                                continue _fun74747
                            }
                        case 225:
                            var7 = _closure1_slot19;
                            if (var7) {
                                _fun74747_ip = 242;
                                continue _fun74747
                            }
                        case 232:
                            var10 = _closure1_slot5;
                            var7 = var10.hasLoadedStickerPacks;
                        case 242:
                            if (var7) {
                                _fun74747_ip = 281;
                                continue _fun74747
                            }
                        case 245:
                            var7 = true;
                            _closure1_slot19 = var7;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var7 = 14;
                            var7 = var11[var7];
                            var10 = var10.bind(var8)(var7);
                            var7 = var10.fetchStickerPacks;
                            var7 = var7.bind(var10)();
                        case 281:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var9];
                            var8 = var7.bind(var8)(var6);
                            var7 = var8.queryStickers;
                            var6 = new Array(1);
                            var6[0] = var3;
                            var0 = _closure2_slot0;
                            var3 = new Array(2);
                            var3[0] = var0;
                            var0 = function(arg0, arg1) { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var0 = var0.StickerSendability;
                                var1 = var0.SENDABLE;
                                var0 = arg1;
                                var0 = var0 === var1;
                                return var0;
                            };
                            var3[1] = var0;
                            var0 = true;
                            var5 = var7.bind(var8)(var6, var0, var3);
                        case 344:
                            var3 = var5.map;
                            var0 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.sticker;
                                var0 = {};
                                var2 = _closure1_slot9;
                                var2 = var2.STICKER;
                                var0.type = var2;
                                var2 = var1.name;
                                var0.name = var2;
                                var0.sticker = var1;
                                return var0;
                            };
                            var13 = var3.bind(var5)(var0);
                            var0 = new Array(0);
                            var12 = 0;
                            var14 = var0;
                            var12 = arraySpread(var14, var13, var12);
                            var4 = var4.emojis;
                            var5 = var4.unlocked;
                            var4 = var5.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun74750: for (var _fun74750_ip = 0;;) switch (_fun74750_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = {};
                                        var1 = _closure1_slot9;
                                        var1 = var1.EMOJI;
                                        var0.type = var1;
                                        var1 = var2.name;
                                        var0.name = var1;
                                        var1 = var2.id;
                                        var3 = null;
                                        if (!(var3 == var1)) {
                                            _fun74750_ip = 49;
                                            continue _fun74750
                                        }
                                    case 42:
                                        var1 = var2.url;
                                        _fun74750_ip = 112;
                                        continue _fun74750;
                                    case 49:
                                        var6 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var4 = 16;
                                        var5 = var5[var4];
                                        var4 = undefined;
                                        var6 = var6.bind(var4)(var5);
                                        var5 = var6.getEmojiURL;
                                        var4 = {};
                                        var8 = var2.id;
                                        var4.id = var8;
                                        var8 = var2.animated;
                                        var4.animated = var8;
                                        var7 = _closure1_slot18;
                                        var4.size = var7;
                                        var1 = var5.bind(var6)(var4);
                                    case 112:
                                        var0.url = var1;
                                        var1 = var2.id;
                                        var3 = var3 == var1;
                                        var1 = undefined;
                                        if (!var3) {
                                            _fun74750_ip = 135;
                                            continue _fun74750
                                        }
                                    case 130:
                                        var1 = var2.surrogates;
                                    case 135:
                                        var0.surrogates = var1;
                                        return var0;
                                }
                            };
                            var13 = var4.bind(var5)(var1);
                            var14 = var0;
                            var12 = arraySpread(var14, var13, var12);
                            var14 = var0;
                            var13 = var2;
                            var1 = arraySpread(var14, var13, var12);
                            return var0;
                    }
                };
                var2.queryResults = var6;
                var6 = function arg0, arg1() {
                    _fun74751: for (var _fun74751_ip = 0;;) switch (_fun74751_ip) {
                        case 0:
                            var4 = arg1;
                            var1 = _closure1_slot12;
                            var0 = arg0;
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun74751_ip = 74;
                                continue _fun74751
                            }
                        case 20:
                            var3 = var4.length;
                            var1 = 2;
                            var3 = var3 < var1;
                            if (var3) {
                                _fun74751_ip = 48;
                                continue _fun74751
                            }
                        case 35:
                            var5 = var4.length;
                            var1 = _closure1_slot17;
                            var3 = var5 > var1;
                        case 48:
                            var1 = !var3;
                            if (var3) {
                                _fun74751_ip = 71;
                                continue _fun74751
                            }
                        case 54:
                            var3 = var4.includes;
                            var2 = _closure1_slot12;
                            var2 = var3.bind(var4)(var2);
                            var1 = !var2;
                        case 71:
                            var0 = var1;
                        case 74:
                            return var0;
                    }
                };
                var2.matches = var6;
                var0[var4] = var2;
                var4 = var1.SLASHES;
                var2 = {};
                var6 = function() {
                    var0 = new Array(0);
                    return var0;
                };
                var2.queryResults = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun74753: for (var _fun74753_ip = 0;;) switch (_fun74753_ip) {
                        case 0:
                            var3 = 0;
                            var0 = arg2;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun74753_ip = 26;
                                continue _fun74753
                            }
                        case 12:
                            var2 = _closure1_slot14;
                            var1 = arg0;
                            var0 = var1 === var2;
                        case 26:
                            if (!var0) {
                                _fun74753_ip = 54;
                                continue _fun74753
                            }
                        case 29:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun74753_ip = 51;
                                continue _fun74753
                            }
                        case 39:
                            var2 = arg1;
                            var2 = var2.length;
                            var1 = var3 === var2;
                        case 51:
                            var0 = !var1;
                        case 54:
                            return var0;
                    }
                };
                var2.matches = var6;
                var0[var4] = var2;
                var4 = var1.SLASHES_DISCOVERY;
                var2 = {};
                var6 = function() {
                    var0 = new Array(0);
                    return var0;
                };
                var2.queryResults = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun74755: for (var _fun74755_ip = 0;;) switch (_fun74755_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun74755_ip = 19;
                                continue _fun74755
                            }
                        case 10:
                            var2 = 0;
                            var1 = arg2;
                            var0 = var2 === var1;
                        case 19:
                            if (!var0) {
                                _fun74755_ip = 36;
                                continue _fun74755
                            }
                        case 22:
                            var2 = _closure1_slot14;
                            var1 = arg0;
                            var0 = var1 === var2;
                        case 36:
                            if (!var0) {
                                _fun74755_ip = 53;
                                continue _fun74755
                            }
                        case 39:
                            var1 = arg1;
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var1 === var2;
                        case 53:
                            return var0;
                    }
                };
                var2.matches = var6;
                var0[var4] = var2;
                var2 = var1.CHOICES;
                var1 = {};
                var6 = _closure1_slot4;
                var4 = new Array(2);
                var4[0] = var6;
                var5 = _closure1_slot3;
                var4[1] = var5;
                var1.stores = var4;
                var4 = function arg0, arg1() {
                    _fun74756: for (var _fun74756_ip = 0;;) switch (_fun74756_ip) {
                        case 0:
                            var8 = arg0;
                            var2 = arg1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun74756_ip = 73;
                                continue _fun74756
                            }
                        case 14:
                            var3 = var2.option;
                            if (!(var1 != var3)) {
                                _fun74756_ip = 73;
                                continue _fun74756
                            }
                        case 24:
                            var3 = var3.autocomplete;
                            if (!var3) {
                                _fun74756_ip = 73;
                                continue _fun74756
                            }
                        case 33:
                            var4 = var1 == var2;
                            var7 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun74756_ip = 50;
                                continue _fun74756
                            }
                        case 44:
                            var3 = var2.activeCommand;
                        case 50:
                            if (!(var1 != var3)) {
                                _fun74756_ip = 73;
                                continue _fun74756
                            }
                        case 54:
                            var4 = var1 == var2;
                            var3 = undefined;
                            if (var4) {
                                _fun74756_ip = 69;
                                continue _fun74756
                            }
                        case 63:
                            var3 = var2.optionValues;
                        case 69:
                            if (!(var1 == var3)) {
                                _fun74756_ip = 171;
                                continue _fun74756
                            }
                        case 73:
                            var3 = var1 == var2;
                            var5 = undefined;
                            var6 = undefined;
                            if (var3) {
                                _fun74756_ip = 90;
                                continue _fun74756
                            }
                        case 84:
                            var6 = var2.choices;
                        case 90:
                            if (!(var1 != var6)) {
                                _fun74756_ip = 165;
                                continue _fun74756
                            }
                        case 94:
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var3 = 13;
                            var3 = var9[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.queryChoiceResults;
                            var3 = {};
                            var3.query = var8;
                            var3.choices = var6;
                            var3 = var4.bind(var5)(var3);
                            var5 = var3.choices;
                            var4 = var5.map;
                            var3 = function(arg0) { // Environment: var0
                                var0 = {};
                                var1 = _closure1_slot9;
                                var1 = var1.CHOICE;
                                var0.type = var1;
                                var1 = arg0;
                                var0.choice = var1;
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            _fun74756_ip = 169;
                            continue _fun74756;
                        case 165:
                            var3 = new Array(0);
                        case 169:
                            return var3;
                        case 171:
                            var9 = _closure1_slot8;
                            var6 = var9.getGuild;
                            var3 = _closure2_slot0;
                            var5 = var3.guild_id;
                            var10 = var6.bind(var9)(var5);
                            var6 = _closure1_slot20;
                            var5 = {};
                            var9 = var2.activeCommand;
                            var5.command = var9;
                            var9 = var2.optionValues;
                            var5.optionValues = var9;
                            var9 = {};
                            var9.channel = var3;
                            var9.guild = var10;
                            var10 = {};
                            var11 = var2.option;
                            var11 = var11.name;
                            var10.name = var11;
                            var10.query = var8;
                            var9.autocomplete = var10;
                            var5.context = var9;
                            var5 = var6.bind(var7)(var5);
                            var6 = _closure1_slot3;
                            var5 = var6.getAutocompleteChoices;
                            var3 = var3.id;
                            var2 = var2.option;
                            var2 = var2.name;
                            var2 = var5.bind(var6)(var3, var2, var8);
                            if (!(var1 != var2)) {
                                _fun74756_ip = 431;
                                continue _fun74756
                            }
                        case 311:
                            var3 = var2.length;
                            var1 = 0;
                            if (!(var1 !== var3)) {
                                _fun74756_ip = 341;
                                continue _fun74756
                            }
                        case 322:
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = {};
                                var1 = _closure1_slot9;
                                var1 = var1.CHOICE;
                                var0.type = var1;
                                var1 = arg0;
                                var0.choice = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun74756_ip = 429;
                            continue _fun74756;
                        case 341:
                            var2 = {};
                            var1 = _closure1_slot9;
                            var1 = var1.LABEL;
                            var2.type = var1;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 17;
                            var3 = var8[var1];
                            var3 = var6.bind(var7)(var3);
                            var5 = var3.intl;
                            var3 = var5.string;
                            var1 = var8[var1];
                            var1 = var6.bind(var7)(var1);
                            var1 = var1.t;
                            var1 = var1["41014u"];
                            var1 = var3.bind(var5)(var1);
                            var2.label = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 429:
                            _fun74756_ip = 489;
                            continue _fun74756;
                        case 431:
                            var1 = global;
                            var3 = var1.Array;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var14 = 4;
                            var15 = var2;
                            var1 = new var15[var3](var14, var13);
                            var3 = var1 instanceof Object ? var1 : var2;
                            var2 = var3.fill;
                            var1 = {};
                            var4 = _closure1_slot9;
                            var4 = var4.CHOICE_LOADING;
                            var1.type = var4;
                            var0 = var2.bind(var3)(var1);
                        case 489:
                            return var0;
                    }
                };
                var1.queryResults = var4;
                var3 = function() {
                    var0 = false;
                    return var0;
                };
                var1.matches = var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.getAutocompleteOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6483, 6484, 5594, 1372, 1681, 1410, 660, 4545, 6723, 9409, 1624, 22, 7987, 5591, 9375, 5611, 1417, 1234, 2]);