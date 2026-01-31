// modules/messages/native/RingToVoiceBanner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun89162: for (var _fun89162_ip = 0;;) switch (_fun89162_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.recipientUser;
                var _closure2_slot0 = var13;
                var14 = var1.voiceChannel;
                var _closure2_slot1 = var14;
                var1 = _closure1_slot11;
                var4 = undefined;
                var10 = var1.bind(var4)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var17 = var1.bind(var4)(var14);
                var3 = _closure1_slot0;
                var1 = 11;
                var1 = var5[var1];
                var7 = var3.bind(var4)(var1);
                var6 = var7.useCanRing;
                var2 = var14.id;
                var1 = 'RingToVoiceBanner';
                var1 = var6.bind(var7)(var13, var1, var2);
                var _closure2_slot2 = var1;
                var2 = 12;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStoresObject;
                var6 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    _fun89163: for (var _fun89163_ip = 0;;) switch (_fun89163_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            if (!var3) {
                                _fun89163_ip = 25;
                                continue _fun89163
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.id;
                            var1 = null;
                            var3 = var1 != var2;
                        case 25:
                            var1 = null;
                            var2 = null;
                            if (!var3) {
                                _fun89163_ip = 69;
                                continue _fun89163
                            }
                        case 32:
                            var5 = _closure1_slot4;
                            var4 = var5.getParticipant;
                            var3 = _closure2_slot1;
                            var3 = var3.id;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var2 = var4.bind(var5)(var3, var0);
                        case 69:
                            var0 = {};
                            var3 = var1 != var2;
                            var0.userIsInCall = var3;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun89163_ip = 109;
                                continue _fun89163
                            }
                        case 87:
                            var4 = var2.type;
                            var3 = _closure1_slot8;
                            var3 = var3.USER;
                            var1 = var4 === var3;
                        case 109:
                            if (!var1) {
                                _fun89163_ip = 118;
                                continue _fun89163
                            }
                        case 112:
                            var1 = var2.ringing;
                        case 118:
                            var0.isUserRinging = var1;
                            return var0;
                    }
                };
                var2 = var3.bind(var5)(var2, var0);
                var0 = var2.userIsInCall;
                var12 = var2.isUserRinging;
                var1 = !var1;
                if (var1) {
                    _fun89162_ip = 174;
                    continue _fun89162
                }
            case 168:
                var2 = null;
                var1 = var2 == var14;
            case 174:
                if (var1) {
                    _fun89162_ip = 186;
                    continue _fun89162
                }
            case 177:
                if (!var0) {
                    _fun89162_ip = 183;
                    continue _fun89162
                }
            case 180:
                var0 = !var12;
            case 183:
                var1 = var0;
            case 186:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 13;
                var0 = var6[var0];
                var5 = var2.bind(var4)(var0);
                var3 = {};
                var2 = _closure1_slot0;
                var0 = 14;
                var7 = var6[var0];
                var7 = var2.bind(var4)(var7);
                var7 = var7.ImpressionTypes;
                var7 = var7.VIEW;
                var3.type = var7;
                var0 = var6[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.ImpressionNames;
                var0 = var0.RING_TO_GUILD_VC_BANNER_SHOWN;
                var3.name = var0;
                var0 = {};
                var18 = null;
                var6 = var18 == var14;
                var2 = undefined;
                if (var6) {
                    _fun89162_ip = 283;
                    continue _fun89162
                }
            case 278:
                var2 = var14.id;
            case 283:
                var0.voice_channel_id = var2;
                var6 = var18 == var14;
                var2 = undefined;
                if (var6) {
                    _fun89162_ip = 302;
                    continue _fun89162
                }
            case 297:
                var2 = var14.guild_id;
            case 302:
                var0.voice_guild_id = var2;
                var3.properties = var0;
                var2 = {};
                var2.disableTrack = var1;
                var6 = var13.id;
                var0 = new Array(1);
                var0[0] = var6;
                var0 = var5.bind(var4)(var3, var2, var0);
                var0 = null;
                if (var1) {
                    _fun89162_ip = 651;
                    continue _fun89162
                }
            case 347:
                var3 = _closure1_slot10;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var10.ringToVoiceContainer;
                var1.style = var5;
                var7 = _closure1_slot9;
                var11 = _closure1_slot0;
                var19 = _closure1_slot2;
                var21 = 15;
                var5 = var19[var21];
                var5 = var11.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var8 = var10.ringUserBannerText;
                var5.style = var8;
                var8 = 16;
                var15 = var19[var8];
                var15 = var11.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var8 = var19[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var11 = var8.f2tNxH;
                var8 = {};
                var19 = var18 == var13;
                var18 = undefined;
                if (var19) {
                    _fun89162_ip = 483;
                    continue _fun89162
                }
            case 477:
                var18 = var13.globalName;
            case 483:
                var8.username = var18;
                var20 = _closure1_slot9;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var18 = var18[var21];
                var18 = var19.bind(var4)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'text-sm/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var18.children = var17;
                var17 = var14.id;
                var17 = var20.bind(var4)(var19, var18, var17);
                var8.channelName = var17;
                var8 = var15.bind(var16)(var11, var8);
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot9;
                var7 = _closure1_slot3;
                var6 = {};
                var10 = var10.ringToVoiceButtonContainer;
                var6.style = var10;
                var11 = _closure1_slot9;
                var10 = _closure1_slot13;
                var9 = {};
                var9.channel = var14;
                var13 = var13.id;
                var9.recipientUserId = var13;
                var9.isUserRinging = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 651:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun89164: for (var _fun89164_ip = 0;;) switch (_fun89164_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channel;
                var _closure2_slot0 = var2;
                var2 = var1.recipientUserId;
                var _closure2_slot1 = var2;
                var1 = var1.isUserRinging;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 16;
                var5 = var8[var2];
                var3 = undefined;
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun89164_ip = 97;
                    continue _fun89164
                }
            case 82:
                var7 = var2["3Hv9qQ"];
                var9 = var5.bind(var6)(var7);
                _fun89164_ip = 108;
                continue _fun89164;
            case 97:
                var2 = var2.ygslb0;
                var9 = var5.bind(var6)(var2);
            case 108:
                if (var1) {
                    _fun89164_ip = 120;
                    continue _fun89164
                }
            case 111:
                var6 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 17;
                    var2 = var4[var0];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var2);
                    var7 = var8.ring;
                    var3 = _closure2_slot0;
                    var6 = var3.id;
                    var2 = _closure2_slot1;
                    var5 = new Array(1);
                    var5[0] = var2;
                    var2 = 'dm_banner';
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var2 = _closure1_slot0;
                    var1 = 18;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openChannelCallModal;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                _fun89164_ip = 127;
                continue _fun89164;
            case 120:
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.stopRinging;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var4 = _closure2_slot1;
                    var0 = new Array(1);
                    var0[0] = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 127:
                var2 = _closure1_slot9;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 19;
                var0 = var8[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.Button;
                var0 = {
                    'size': 'sm',
                    'variant': 'tertiary'
                };
                var7 = 'sm';
                var0.text = var9;
                var0.onPress = var6;
                var6 = _closure1_slot9;
                var4 = 20;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.VoiceNormalIcon;
                var4 = {};
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.icon = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'overflow': 'hidden',
        'padding': 8,
        'paddingLeft': 16,
        'paddingRight': 16,
        'zIndex': 100,
        'backgroundColor': null,
        'borderBottomWidth': 1
    };
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CHAT_BANNER_BG;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.borderBottomColor = var10;
    var3.ringToVoiceContainer = var9;
    var9 = {
        'flexShrink': 0,
        'marginLeft': 12
    };
    var3.ringToVoiceButtonContainer = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'flex': 1
    };
    var3.ringUserBannerText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun89167: for (var _fun89167_ip = 0;;) switch (_fun89167_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.channel;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 12;
                var2 = var6[var8];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = _closure1_slot6;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var3 = _closure1_slot6;
                    var0 = var3.getVoiceChannelId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var7)(var3, var2);
                var3 = _closure1_slot1;
                var2 = 21;
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useExperiment;
                var2 = {};
                var3 = null;
                var10 = var3 == var5;
                var9 = undefined;
                if (var10) {
                    _fun89167_ip = 117;
                    continue _fun89167
                }
            case 112:
                var9 = var5.guild_id;
            case 117:
                var2.guildId = var9;
                var9 = 'ChatView';
                var2.location = var9;
                var2 = var6.bind(var7)(var2);
                var2 = var2.enabled;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var8 = var7.bind(var4)(var6);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var9;
                var0 = function() { // Environment: var0
                    _fun89169: for (var _fun89169_ip = 0;;) switch (_fun89169_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var4 = var0.type;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 22;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var5.bind(var0)(var3);
                            var0 = var0.ChannelTypes;
                            var3 = var0.DM;
                            var0 = null;
                            if (!(var4 === var3)) {
                                _fun89169_ip = 84;
                                continue _fun89169
                            }
                        case 55:
                            var3 = _closure1_slot7;
                            var2 = var3.getUser;
                            var4 = _closure2_slot0;
                            var1 = var4.getRecipientId;
                            var1 = var1.bind(var4)();
                            var0 = var2.bind(var3)(var1);
                        case 84:
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var6, var0);
                var0 = null;
                if (!var2) {
                    _fun89167_ip = 235;
                    continue _fun89167
                }
            case 191:
                var2 = var3 != var6;
                var0 = null;
                if (!var2) {
                    _fun89167_ip = 235;
                    continue _fun89167
                }
            case 200:
                var2 = var3 != var5;
                var0 = null;
                if (!var2) {
                    _fun89167_ip = 235;
                    continue _fun89167
                }
            case 209:
                var3 = _closure1_slot9;
                var2 = _closure1_slot12;
                var1 = {};
                var1.recipientUser = var6;
                var1.voiceChannel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 235:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/RingToVoiceBanner.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3907, 1372, 1661, 1613, 3482, 33, 1297, 671, 4755, 7989, 566, 5177, 481, 3900, 1234, 7980, 7838, 4043, 4826, 3922, 790, 2]);