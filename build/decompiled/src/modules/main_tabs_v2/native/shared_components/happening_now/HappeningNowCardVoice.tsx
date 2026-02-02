// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 17;
        var2 = var7[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var2);
        var6 = var8.useVoiceUserAffinitySortType;
        var2 = 'useVoiceChannelUsers';
        var6 = var6.bind(var8)(var2);
        var _closure2_slot1 = var6;
        var2 = 18;
        var2 = var7[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStoresArray;
        var7 = _closure1_slot7;
        var2 = new Array(3);
        var2[0] = var7;
        var7 = _closure1_slot6;
        var2[1] = var7;
        var1 = _closure1_slot5;
        var2[2] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var5 = var5.channelId;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot7;
            var3 = var4.getVoiceStatesForChannel;
            var2 = _closure2_slot0;
            var2 = var2.channelId;
            var3 = var3.bind(var4)(var2);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var4 = var2.bind(var5)(var3);
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var0
                var2 = _closure1_slot6;
                var1 = var2.getUser;
                var0 = arg0;
                var0 = var0.userId;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var1 = 20;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var3 = var2.bind(var3)(var1);
            var2 = var3.orderBy;
            var1 = new Array(1);
            var0 = function(arg0) { // Environment: var0
                _fun101698: for (var _fun101698_ip = 0;;) switch (_fun101698_ip) {
                    case 0:
                        var2 = _closure1_slot5;
                        var1 = var2.getUserAffinity;
                        var0 = arg0;
                        var0 = var0.id;
                        var3 = var1.bind(var2)(var0);
                        var1 = _closure2_slot1;
                        var0 = 'vc_probability';
                        if (!(var0 !== var1)) {
                            _fun101698_ip = 74;
                            continue _fun101698
                        }
                    case 43:
                        var0 = null;
                        var2 = var0 == var3;
                        var1 = undefined;
                        if (var2) {
                            _fun101698_ip = 60;
                            continue _fun101698
                        }
                    case 54:
                        var1 = var3.communicationProbability;
                    case 60:
                        var2 = var0 != var1;
                        var0 = 0;
                        if (!var2) {
                            _fun101698_ip = 72;
                            continue _fun101698
                        }
                    case 69:
                        var0 = var1;
                    case 72:
                        _fun101698_ip = 106;
                        continue _fun101698;
                    case 74:
                        var1 = null;
                        var4 = var1 == var3;
                        var2 = undefined;
                        if (var4) {
                            _fun101698_ip = 91;
                            continue _fun101698
                        }
                    case 85:
                        var2 = var3.vcProbability;
                    case 91:
                        var3 = var1 != var2;
                        var1 = 0;
                        if (!var3) {
                            _fun101698_ip = 103;
                            continue _fun101698
                        }
                    case 100:
                        var1 = var2;
                    case 103:
                        var0 = var1;
                    case 106:
                        return var0;
                }
            };
            var1[0] = var0;
            var0 = ['desc'];
            var1 = var2.bind(var3)(var1, var0);
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot13 = var3;
    var1 = function arg0, arg1() {
        _fun101699: for (var _fun101699_ip = 0;;) switch (_fun101699_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var2 = var1.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun101699_ip = 376;
                    continue _fun101699
                }
            case 20:
                var7 = 1;
                if (!(var7 !== var2)) {
                    _fun101699_ip = 330;
                    continue _fun101699
                }
            case 30:
                var9 = 2;
                if (!(var9 !== var2)) {
                    _fun101699_ip = 192;
                    continue _fun101699
                }
            case 40:
                var3 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 22;
                var5 = var13[var2];
                var11 = undefined;
                var5 = var3.bind(var11)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var13[var2];
                var2 = var3.bind(var11)(var2);
                var2 = var2.t;
                var3 = var2.pjxkCI;
                var2 = {};
                var10 = _closure1_slot1;
                var8 = 21;
                var12 = var13[var8];
                var16 = var10.bind(var11)(var12);
                var15 = var16.getName;
                var14 = var1[var0];
                var12 = null;
                var14 = var15.bind(var16)(var4, var12, var14);
                var2.user1 = var14;
                var8 = var13[var8];
                var11 = var10.bind(var11)(var8);
                var10 = var11.getName;
                var8 = var1[var7];
                var8 = var10.bind(var11)(var4, var12, var8);
                var2.user2 = var8;
                var8 = var1.length;
                var8 = var8 - var9;
                var2.extras = var8;
                var2 = var5.bind(var6)(var3, var2);
                return var2;
            case 192:
                var3 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 22;
                var5 = var12[var2];
                var11 = undefined;
                var5 = var3.bind(var11)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var12[var2];
                var2 = var3.bind(var11)(var2);
                var2 = var2.t;
                var3 = var2["4SM/RX"];
                var2 = {};
                var9 = _closure1_slot1;
                var8 = 21;
                var10 = var12[var8];
                var15 = var9.bind(var11)(var10);
                var14 = var15.getName;
                var13 = var1[var0];
                var10 = null;
                var13 = var14.bind(var15)(var4, var10, var13);
                var2.user1 = var13;
                var8 = var12[var8];
                var9 = var9.bind(var11)(var8);
                var8 = var9.getName;
                var7 = var1[var7];
                var7 = var8.bind(var9)(var4, var10, var7);
                var2.user2 = var7;
                var2 = var5.bind(var6)(var3, var2);
                return var2;
            case 330:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 21;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.getName;
                var1 = var1[var0];
                var0 = null;
                var0 = var2.bind(var3)(var4, var0, var1);
                return var0;
            case 376:
                var0 = '';
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var5);
    var0 = 0;
    var8 = var7[var0];
    var5 = arg3;
    var0 = undefined;
    var8 = var5.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var12 = 1;
    var5 = var7[var12];
    var5 = var6.bind(var0)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.HappeningNowCardTrackingType;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.jsx;
    var _closure1_slot10 = var9;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var10 = var6.bind(var0)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var11.flexShrink = var12;
    var5.content = var11;
    var11 = {};
    var12 = 12;
    var11.marginRight = var12;
    var5.avatars = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot12 = var5;
    var5 = var8.memo;
    var4 = function(arg0) { // Environment: var4
        _fun101700: for (var _fun101700_ip = 0;;) switch (_fun101700_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.guildId;
                var _closure2_slot0 = var18;
                var8 = var1.index;
                var _closure2_slot1 = var8;
                var14 = var1.voiceState;
                var _closure2_slot2 = var14;
                var7 = var1.fullwidth;
                var5 = var1.panelVariant;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun101700_ip = 53;
                    continue _fun101700
                }
            case 51:
                var5 = false;
            case 53:
                var _closure2_slot3 = var4;
                var2 = _closure1_slot12;
                var11 = var2.bind(var4)();
                var2 = _closure1_slot13;
                var17 = var2.bind(var4)(var14);
                _closure2_slot3 = var17;
                var2 = _closure1_slot14;
                var16 = var2.bind(var4)(var17, var18);
                var6 = _closure1_slot3;
                var3 = var6.useCallback;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var18;
                var8 = var14.channelId;
                var2[2] = var8;
                var2[3] = var17;
                var0 = function() { // Environment: var0
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var4 = var2[var0];
                    var0 = undefined;
                    var7 = var5.bind(var0)(var4);
                    var6 = var7.track;
                    var4 = _closure1_slot9;
                    var5 = var4.ACTIVITY_CARD_CLICKED;
                    var4 = {};
                    var9 = _closure2_slot1;
                    var4.order = var9;
                    var9 = _closure2_slot0;
                    var4.guild_id = var9;
                    var9 = _closure1_slot8;
                    var9 = var9.VOICE_CARD;
                    var4.type = var9;
                    var9 = _closure2_slot2;
                    var9 = var9.channelId;
                    var4.destination_channel_id = var9;
                    var10 = _closure2_slot3;
                    var9 = var10.map;
                    var8 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var8 = var9.bind(var10)(var8);
                    var4.highlighted_user_ids = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = _closure1_slot0;
                    var3 = 11;
                    var3 = var2[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = 10;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var4.bind(var0)(var3, var2);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun101703: for (var _fun101703_ip = 0;;) switch (_fun101703_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.default;
                                var1 = _closure2_slot2;
                                var2 = var1.channelId;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun101703_ip = 45;
                                    continue _fun101703
                                }
                            case 26:
                                var0 = _closure2_slot2;
                                var2 = var0.channelId;
                                var1 = undefined;
                                var0 = true;
                                var0 = var3.bind(var1)(var2, var0);
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = var3.bind(var6)(var0, var2);
                var2 = var17.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun101700_ip = 422;
                    continue _fun101700
                }
            case 152:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var10 = 13;
                var0 = var0[var10];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.onPress = var6;
                var6 = 'large';
                if (!var7) {
                    _fun101700_ip = 193;
                    continue _fun101700
                }
            case 189:
                var6 = 'full';
            case 193:
                var0.width = var6;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 14;
                var6 = var15[var6];
                var6 = var12.bind(var4)(var6);
                var6 = var6.VoiceNormalIcon;
                var0.IconComponent = var6;
                var0.panelVariant = var5;
                var13 = _closure1_slot10;
                var9 = _closure1_slot4;
                var6 = {};
                var7 = var11.avatars;
                var6.style = var7;
                var8 = _closure1_slot1;
                var7 = 15;
                var7 = var15[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.guildId = var18;
                var7.users = var17;
                var7 = var13.bind(var4)(var8, var7);
                var6.children = var7;
                var7 = var13.bind(var4)(var9, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var8 = _closure1_slot11;
                var7 = {};
                var11 = var11.content;
                var7.style = var11;
                var10 = var15[var10];
                var10 = var12.bind(var4)(var10);
                var11 = var10.HappeningNowCardHeader;
                var10 = {};
                var17 = 2;
                var10.lineClamp = var17;
                var10.children = var16;
                var11 = var13.bind(var4)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = 16;
                var11 = var15[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.HappeningNowVoiceCardSubtitle;
                var11 = {};
                var11.voiceState = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var7 = var8.bind(var4)(var9, var7);
                var6[1] = var7;
                var0.children = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun101700_ip = 465;
                continue _fun101700;
            case 422:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.HappeningNowCardPlaceholder;
                var1 = {};
                var1.panelVariant = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 465:
                return var0;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useVoiceChannelUsers = var3;
    var2.formatVoiceActivityTitle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6937, 1613, 3482, 10804, 660, 33, 1297, 795, 7930, 1307, 13202, 10805, 4828, 11883, 13212, 13219, 566, 22, 1304, 3922, 1234, 2]);