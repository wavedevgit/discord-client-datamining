// modules/search/native/components/tabs/pages/ChannelsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: getVoiceStates, environment: var1
        _fun106213: for (var _fun106213_ip = 0;;) switch (_fun106213_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = arg2;
                var3 = var0.isGuildStageVoice;
                var3 = var3.bind(var0)();
                if (!var3) {
                    _fun106213_ip = 25;
                    continue _fun106213
                }
            case 22:
                var1 = var2;
            case 25:
                var0 = var0.id;
                var0 = var1[var0];
                var1 = null;
                if (!(var1 == var0)) {
                    _fun106213_ip = 47;
                    continue _fun106213
                }
            case 40:
                var0 = _closure1_slot6;
            case 47:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.EMPTY_VOICE_STATES;
    var _closure1_slot6 = var7;
    var7 = var3.SearchListItemTypes;
    var _closure1_slot7 = var7;
    var3 = var3.CHANNELS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchResultContentEntityTypes;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: ChannelsScreen, environment: var1
        _fun106214: for (var _fun106214_ip = 0;;) switch (_fun106214_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.searchContext;
                var _closure2_slot0 = var5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 6;
                var6 = var3[var4];
                var4 = undefined;
                var7 = var2.bind(var4)(var6);
                var6 = var7.getSearchContextId;
                var6 = var6.bind(var7)(var5);
                var _closure2_slot1 = var6;
                var7 = 7;
                var6 = var3[var7];
                var11 = var2.bind(var4)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var6;
                var8 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getTextChannels;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var10.bind(var11)(var9, var8);
                var _closure2_slot2 = var11;
                var7 = var3[var7];
                var9 = var2.bind(var4)(var7);
                var8 = var9.useStateFromStores;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getVoiceChannels;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var8.bind(var9)(var7, var6);
                var _closure2_slot3 = var10;
                var7 = _closure1_slot1;
                var6 = 8;
                var6 = var3[var6];
                var8 = var7.bind(var4)(var6);
                var6 = var5.guildId;
                var9 = var8.bind(var4)(var6);
                var _closure2_slot4 = var9;
                var6 = 9;
                var6 = var3[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var5.guildId;
                var12 = var7.bind(var4)(var6);
                var _closure2_slot5 = var12;
                var6 = 10;
                var7 = var3[var6];
                var13 = var2.bind(var4)(var7);
                var8 = var13.useOnPressGuildTextChannel;
                var7 = {};
                var7.searchContext = var5;
                var7 = var8.bind(var13)(var7);
                var _closure2_slot6 = var7;
                var6 = var3[var6];
                var13 = var2.bind(var4)(var6);
                var8 = var13.useOnPressGuildVoiceChannel;
                var6 = {};
                var6.searchContext = var5;
                var6 = var8.bind(var13)(var6);
                var _closure2_slot7 = var6;
                var14 = _closure1_slot5;
                var13 = var14.useState;
                var8 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var13.bind(var14)(var5, var8);
                var _closure2_slot8 = var13;
                var8 = 11;
                var8 = var3[var8];
                var15 = var2.bind(var4)(var8);
                var14 = var15.useFullscreenPlaceholderCount;
                var8 = {};
                var16 = _closure1_slot8;
                var8.placeholderHeight = var16;
                var16 = 1;
                var8.numColumns = var16;
                var16 = var14.bind(var15)(var8);
                var _closure2_slot9 = var16;
                var8 = _closure1_slot3;
                var15 = var8.useCallback;
                var14 = new Array(2);
                var14[0] = var7;
                var14[1] = var5;
                var7 = function(arg0, arg1) { // Environment: var0
                    var5 = arg0;
                    var1 = _closure2_slot6;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var5);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackSearchResultClicked;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1.searchContext = var6;
                    var1.channelId = var5;
                    var5 = arg1;
                    var1.index = var5;
                    var4 = _closure1_slot9;
                    var4 = var4.CHANNEL;
                    var1.entityType = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var15 = var15.bind(var8)(var7, var14);
                var _closure2_slot10 = var15;
                var14 = var8.useCallback;
                var7 = new Array(2);
                var7[0] = var6;
                var7[1] = var5;
                var6 = function(arg0, arg1) { // Environment: var0
                    var5 = arg0;
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var5);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackSearchResultClicked;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1.searchContext = var6;
                    var1.channelId = var5;
                    var5 = arg1;
                    var1.index = var5;
                    var4 = _closure1_slot9;
                    var4 = var4.CHANNEL;
                    var1.entityType = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var14 = var14.bind(var8)(var6, var7);
                var _closure2_slot11 = var14;
                var7 = var8.useMemo;
                var6 = new Array(8);
                var6[0] = var16;
                var6[1] = var15;
                var6[2] = var14;
                var6[3] = var13;
                var6[4] = var12;
                var6[5] = var11;
                var6[6] = var10;
                var6[7] = var9;
                var0 = function() { // Environment: var0
                    _fun106220: for (var _fun106220_ip = 0;;) switch (_fun106220_ip) {
                        case 0:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var6 = 0;
                            var _closure3_slot1 = var6;
                            var2 = _closure2_slot2;
                            var2 = var2.length;
                            if (!(var2 > var6)) {
                                _fun106220_ip = 165;
                                continue _fun106220
                            }
                        case 35:
                            var3 = var0.push;
                            var2 = {};
                            var4 = _closure1_slot7;
                            var4 = var4.SECTION;
                            var2.type = var4;
                            var4 = {};
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var7 = 13;
                            var8 = var12[var7];
                            var10 = undefined;
                            var8 = var11.bind(var10)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var12[var7];
                            var7 = var11.bind(var10)(var7);
                            var7 = var7.t;
                            var7 = var7.nIfr0Y;
                            var7 = var8.bind(var9)(var7);
                            var4.title = var7;
                            var2.props = var4;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot2;
                            var4 = var2.forEach;
                            var3 = function(arg0, arg1) { // Environment: var1
                                var5 = arg0;
                                var2 = _closure3_slot1;
                                var1 = arg1;
                                var1 = var2 + var1;
                                var _closure4_slot0 = var1;
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = {};
                                var3 = _closure1_slot7;
                                var3 = var3.GUILD_TEXT_CHANNEL;
                                var0.type = var3;
                                var3 = {};
                                var6 = var5.channel;
                                var3.channel = var6;
                                var5 = var5.lastMessageId;
                                var3.lastMessageId = var5;
                                var4 = function(arg0) { // Original name: onPress, environment: var4
                                    var3 = _closure2_slot10;
                                    var2 = _closure4_slot0;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var0, var2);
                                    return var0;
                                };
                                var3.onPress = var4;
                                var0.props = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var3 = var4.bind(var2)(var3);
                            var2 = var2.length;
                            var2 = var6 + var2;
                            _closure3_slot1 = var2;
                        case 165:
                            var2 = _closure2_slot3;
                            var2 = var2.length;
                            if (!(var2 > var6)) {
                                _fun106220_ip = 330;
                                continue _fun106220
                            }
                        case 181:
                            var3 = var0.push;
                            var2 = {};
                            var4 = _closure1_slot7;
                            var4 = var4.SECTION;
                            var2.type = var4;
                            var4 = {};
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var8 = 13;
                            var9 = var12[var8];
                            var7 = undefined;
                            var9 = var11.bind(var7)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var12[var8];
                            var8 = var11.bind(var7)(var8);
                            var8 = var8.t;
                            var8 = var8.CYnO4s;
                            var8 = var9.bind(var10)(var8);
                            var4.title = var8;
                            var2.props = var4;
                            var2 = var3.bind(var0)(var2);
                            var4 = _closure2_slot4;
                            var3 = _closure2_slot5;
                            var2 = function(arg0, arg1) { // Original name: createSorter, environment: var1
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = arg1;
                                var _closure4_slot1 = var1;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun106224: for (var _fun106224_ip = 0;;) switch (_fun106224_ip) {
                                        case 0:
                                            var5 = _closure1_slot11;
                                            var0 = arg0;
                                            var0 = var0.channel;
                                            var4 = _closure4_slot0;
                                            var3 = _closure4_slot1;
                                            var1 = undefined;
                                            var2 = var5.bind(var1)(var0, var4, var3);
                                            var0 = arg1;
                                            var0 = var0.channel;
                                            var1 = var5.bind(var1)(var0, var4, var3);
                                            var3 = var2.length;
                                            var0 = var1.length;
                                            var3 = var3 < var0;
                                            var0 = 1;
                                            if (var3) {
                                                _fun106224_ip = 98;
                                                continue _fun106224
                                            }
                                        case 70:
                                            var2 = var2.length;
                                            var1 = var1.length;
                                            var2 = var2 > var1;
                                            var1 = 0;
                                            if (!var2) {
                                                _fun106224_ip = 95;
                                                continue _fun106224
                                            }
                                        case 89:
                                            var1 = -1;
                                        case 95:
                                            var0 = var1;
                                        case 98:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var4 = var2.bind(var7)(var4, var3);
                            var3 = _closure2_slot3;
                            var2 = var3.sort;
                            var3 = var2.bind(var3)(var4);
                            var2 = var3.forEach;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun106225: for (var _fun106225_ip = 0;;) switch (_fun106225_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var2 = _closure3_slot1;
                                        var1 = arg1;
                                        var1 = var2 + var1;
                                        var _closure4_slot0 = var1;
                                        var2 = _closure3_slot0;
                                        var1 = var2.push;
                                        var0 = {};
                                        var3 = _closure1_slot7;
                                        var3 = var3.GUILD_VOICE_CHANNEL;
                                        var0.type = var3;
                                        var3 = {};
                                        var7 = var5.channel;
                                        var3.channel = var7;
                                        var9 = _closure2_slot4;
                                        var7 = var5.channel;
                                        var7 = var7.id;
                                        var9 = var9[var7];
                                        var7 = null;
                                        if (!(var7 == var9)) {
                                            _fun106225_ip = 93;
                                            continue _fun106225
                                        }
                                    case 89:
                                        var9 = _closure1_slot6;
                                    case 93:
                                        var3.voiceStates = var9;
                                        var8 = _closure2_slot5;
                                        var5 = var5.channel;
                                        var5 = var5.id;
                                        var5 = var8[var5];
                                        if (!(var7 == var5)) {
                                            _fun106225_ip = 124;
                                            continue _fun106225
                                        }
                                    case 120:
                                        var5 = _closure1_slot6;
                                    case 124:
                                        var3.speakerVoiceStates = var5;
                                        var4 = function(arg0) { // Original name: onPress, environment: var4
                                            var3 = _closure2_slot11;
                                            var2 = _closure4_slot0;
                                            var1 = undefined;
                                            var0 = arg0;
                                            var0 = var3.bind(var1)(var0, var2);
                                            return var0;
                                        };
                                        var3.onPress = var4;
                                        var0.props = var3;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                        case 330:
                            var1 = _closure2_slot8;
                            if (var1) {
                                _fun106220_ip = 427;
                                continue _fun106220
                            }
                        case 337:
                            var1 = var0.length;
                            if (!(var6 === var1)) {
                                _fun106220_ip = 427;
                                continue _fun106220
                            }
                        case 346:
                            var1 = _closure2_slot9;
                            var1 = var6 < var1;
                            var3 = global;
                            var2 = 'message-placeholder-';
                            var6 = 0;
                            if (!var1) {
                                _fun106220_ip = 427;
                                continue _fun106220
                            }
                        case 370:
                            var7 = var0.push;
                            var1 = {};
                            var8 = _closure1_slot7;
                            var8 = var8.MESSAGE_PLACEHOLDER;
                            var1.type = var8;
                            var8 = var3.HermesInternal;
                            var8 = var8.concat;
                            var8 = var8.bind(var2)(var6);
                            var1.key = var8;
                            var1 = var7.bind(var0)(var1);
                            var6 = var6 + 1;
                            var1 = _closure2_slot9;
                            if (var6 < var1) {
                                _fun106220_ip = 370;
                                continue _fun106220
                            }
                        case 427:
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var0, var6);
                var0 = 14;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.useMessageTabCountsErrorText;
                var0 = {};
                var0.searchContext = var5;
                var5 = var2.bind(var3)(var0);
                var0 = null;
                if (!(var0 == var5)) {
                    _fun106214_ip = 542;
                    continue _fun106214
                }
            case 495:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 16;
                var0 = var7[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var7 = _closure1_slot8;
                var0.estimatedItemSize = var7;
                var0.data = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun106214_ip = 578;
                continue _fun106214;
            case 542:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.text = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 578:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/ChannelsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 13721, 8921, 8857, 8856, 33, 8923, 566, 13283, 13419, 13724, 13728, 8920, 1234, 13779, 13718, 13732, 2]);