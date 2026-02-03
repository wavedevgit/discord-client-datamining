// modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var _closure2_slot0 = var2;
        var9 = var0.voiceStates;
        var _closure2_slot1 = var9;
        var8 = var2.id;
        var _closure2_slot2 = var8;
        var7 = var2.guild_id;
        var _closure2_slot3 = var7;
        var4 = _closure1_slot8;
        var3 = undefined;
        var5 = var4.bind(var3)();
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 9;
        var4 = var10[var4];
        var11 = var6.bind(var3)(var4);
        var10 = var11.useStateFromStores;
        var4 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var4;
        var2 = var2.id;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var1
            _fun105444: for (var _fun105444_ip = 0;;) switch (_fun105444_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun105444_ip = 47;
                        continue _fun105444
                    }
                case 41:
                    var0 = var1.topic;
                case 47:
                    return var0;
            }
        };
        var10 = var10.bind(var11)(var6, var2, var4);
        var _closure2_slot4 = var10;
        var6 = _closure1_slot3;
        var4 = var6.useMemo;
        var2 = new Array(4);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var1 = function() { // Environment: var1
            _fun105445: for (var _fun105445_ip = 0;;) switch (_fun105445_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun105445_ip = 43;
                        continue _fun105445
                    }
                case 13:
                    var4 = _closure2_slot1;
                    var2 = _closure1_slot6;
                    var1 = function arg0, arg1() {
                        _fun105446: for (var _fun105446_ip = 0;;) switch (_fun105446_ip) {
                            case 0:
                                var9 = arg0;
                                var _closure4_slot0 = var9;
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 5;
                                var2 = var4[var2];
                                var6 = undefined;
                                var4 = var3.bind(var6)(var2);
                                var3 = var4.isLayoutCompact;
                                var2 = arg1;
                                var2 = var3.bind(var4)(var2);
                                if (var2) {
                                    _fun105446_ip = 343;
                                    continue _fun105446
                                }
                            case 54:
                                var5 = function arg0() {
                                    _fun105447: for (var _fun105447_ip = 0;;) switch (_fun105447_ip) {
                                        case 0:
                                            var6 = arg0;
                                            var0 = _closure4_slot0;
                                            var2 = var0[var6];
                                            var5 = null;
                                            var3 = var5 == var2;
                                            var1 = undefined;
                                            var0 = undefined;
                                            if (var3) {
                                                _fun105447_ip = 48;
                                                continue _fun105447
                                            }
                                        case 27:
                                            var2 = var2.member;
                                            var3 = var5 == var2;
                                            var0 = undefined;
                                            if (var3) {
                                                _fun105447_ip = 48;
                                                continue _fun105447
                                            }
                                        case 42:
                                            var0 = var2.nick;
                                        case 48:
                                            if (!(var5 == var0)) {
                                                _fun105447_ip = 108;
                                                continue _fun105447
                                            }
                                        case 52:
                                            var3 = _closure1_slot1;
                                            var7 = _closure1_slot2;
                                            var2 = 6;
                                            var2 = var7[var2];
                                            var3 = var3.bind(var1)(var2);
                                            var2 = var3.getName;
                                            var4 = _closure4_slot0;
                                            var4 = var4[var6];
                                            var5 = var5 == var4;
                                            var1 = undefined;
                                            if (var5) {
                                                _fun105447_ip = 103;
                                                continue _fun105447
                                            }
                                        case 98:
                                            var1 = var4.user;
                                        case 103:
                                            var0 = var2.bind(var3)(var1);
                                        case 108:
                                            return var0;
                                    }
                                };
                                var1 = var9.length;
                                var4 = 0;
                                if (!(var4 !== var1)) {
                                    _fun105446_ip = 339;
                                    continue _fun105446
                                }
                            case 75:
                                var8 = 1;
                                if (!(var8 !== var1)) {
                                    _fun105446_ip = 268;
                                    continue _fun105446
                                }
                            case 85:
                                var10 = 2;
                                if (!(var10 !== var1)) {
                                    _fun105446_ip = 187;
                                    continue _fun105446
                                }
                            case 92:
                                var2 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var1 = 7;
                                var3 = var11[var1];
                                var3 = var2.bind(var6)(var3);
                                var7 = var3.intl;
                                var3 = var7.formatToPlainString;
                                var1 = var11[var1];
                                var1 = var2.bind(var6)(var1);
                                var1 = var1.t;
                                var2 = var1.o2nmbk;
                                var1 = {};
                                var11 = var5.bind(var6)(var4);
                                var1.a = var11;
                                var11 = var5.bind(var6)(var8);
                                var1.b = var11;
                                var9 = var9.length;
                                var9 = var9 - var10;
                                var1.n = var9;
                                var1 = var3.bind(var7)(var2, var1);
                                return var1;
                            case 187:
                                var2 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var1 = 7;
                                var3 = var9[var1];
                                var3 = var2.bind(var6)(var3);
                                var7 = var3.intl;
                                var3 = var7.formatToPlainString;
                                var1 = var9[var1];
                                var1 = var2.bind(var6)(var1);
                                var1 = var1.t;
                                var2 = var1["2efxiV"];
                                var1 = {};
                                var9 = var5.bind(var6)(var4);
                                var1.a = var9;
                                var8 = var5.bind(var6)(var8);
                                var1.b = var8;
                                var1 = var3.bind(var7)(var2, var1);
                                return var1;
                            case 268:
                                var1 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 7;
                                var2 = var7[var0];
                                var2 = var1.bind(var6)(var2);
                                var3 = var2.intl;
                                var2 = var3.formatToPlainString;
                                var0 = var7[var0];
                                var0 = var1.bind(var6)(var0);
                                var0 = var0.t;
                                var1 = var0["/GCyII"];
                                var0 = {};
                                var4 = var5.bind(var6)(var4);
                                var0.a = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            case 339:
                                var0 = null;
                                return var0;
                            case 343:
                                var0 = null;
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var5 = var1.bind(var0)(var4, var2);
                    _fun105445_ip = 47;
                    continue _fun105445;
                case 43:
                    var5 = _closure2_slot4;
                case 47:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.renderChannelSubtitle;
                    var0 = {};
                    var0.subtitle = var5;
                    var5 = false;
                    var0.muted = var5;
                    var4 = _closure1_slot6;
                    var0.layout = var4;
                    var4 = _closure2_slot2;
                    var0.channelId = var4;
                    var3 = _closure2_slot3;
                    var0.guildId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4 = var4.bind(var6)(var1, var2);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.subtitle;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun105448: for (var _fun105448_ip = 0;;) switch (_fun105448_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.channel;
                var14 = var0.users;
                var0 = _closure1_slot8;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var0 = var6[var0];
                var4 = var5.bind(var3)(var0);
                var2 = var4.useStageParticipantsCount;
                var1 = var13.id;
                var0 = 12;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.StageChannelParticipantNamedIndex;
                var0 = var0.AUDIENCE;
                var11 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var8.subtitle;
                var0.style = var4;
                var5 = var14.length;
                var4 = 0;
                var4 = var4 !== var5;
                if (!var4) {
                    _fun105448_ip = 219;
                    continue _fun105448
                }
            case 122:
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.users;
                var5.style = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 13;
                var8 = var15[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.users = var14;
                var14 = 5;
                var8.max = var14;
                var13 = var13.guild_id;
                var8.guildId = var13;
                var12 = _closure1_slot6;
                var8.layout = var12;
                var8.audienceCount = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 219:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANNEL_LIST_SEARCH_LAYOUT;
    var _closure1_slot6 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var3 = {};
    var3.marginTop = var10;
    var6.users = var3;
    var10 = {};
    var3 = 16;
    var10.marginEnd = var3;
    var6.subtitle = var10;
    var10 = {
        'paddingVertical': 4,
        'alignItems': 'center',
        'alignSelf': 'center'
    };
    var6.trailing = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot8 = var6;
    var6 = var7.memo;
    var1 = function arg0() {
        _fun105449: for (var _fun105449_ip = 0;;) switch (_fun105449_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.channel;
                var _closure2_slot0 = var9;
                var8 = var2.voiceStates;
                var1 = var2.speakerVoiceStates;
                var5 = var2.trailing;
                var10 = var2.onPress;
                var _closure2_slot1 = var10;
                var2 = _closure1_slot8;
                var3 = undefined;
                var12 = var2.bind(var3)();
                var2 = var9.isGuildStageVoice;
                var2 = var2.bind(var9)();
                var6 = var8;
                if (!var2) {
                    _fun105449_ip = 73;
                    continue _fun105449
                }
            case 70:
                var6 = var1;
            case 73:
                var2 = var6.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.user;
                    return var0;
                };
                var7 = var2.bind(var6)(var1);
                var6 = _closure1_slot3;
                var2 = var6.useCallback;
                var11 = var9.id;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var10;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 14;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPress = var6;
                var0.channel = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot9;
                var6 = {};
                var6.channel = var9;
                var6.voiceStates = var8;
                var6.users = var7;
                var6 = var11.bind(var3)(var10, var6);
                var0.subtitle = var6;
                var6 = null;
                if (!(var6 == var5)) {
                    _fun105449_ip = 281;
                    continue _fun105449
                }
            case 204:
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var6 = {};
                var12 = var12.trailing;
                var6.style = var12;
                var14 = _closure1_slot7;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 15;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.VocalChannelJoinButton;
                var12 = {};
                var12.channel = var9;
                var12.voiceStates = var8;
                var12 = var14.bind(var3)(var13, var12);
                var6.children = var12;
                var5 = var11.bind(var3)(var10, var6);
            case 281:
                var0.trailing = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot10;
                var4 = {};
                var4.channel = var9;
                var4.voiceStates = var8;
                var4.users = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.extras = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1377, 8914, 33, 8801, 3236, 1234, 1297, 566, 13734, 8410, 5662, 13735, 13737, 11665, 2]);