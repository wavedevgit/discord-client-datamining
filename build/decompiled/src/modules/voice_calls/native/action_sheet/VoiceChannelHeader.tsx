// modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var3 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.Permissions;
    var _closure1_slot7 = var3;
    var3 = var1.AnalyticsPages;
    var _closure1_slot8 = var3;
    var1 = var1.InstantInviteSources;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot10 = var3;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var3 = var7.createStyles;
    var1 = {};
    var9 = 'row';
    var8 = {
        'alignSelf': 'stretch',
        'flexDirection': 'row',
        'paddingVertical': 10,
        'paddingHorizontal': 16,
        'alignItems': 'center'
    };
    var1.container = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'space-around',
        'marginHorizontal': 16
    };
    var1.middle = var8;
    var8 = {};
    var8.flexDirection = var9;
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var8.tintColor = var12;
    var1.icons = var8;
    var8 = {
        'fontSize': 12,
        'lineHeight': 16
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var8.color = var10;
    var1.subtitle = var8;
    var8 = {};
    var8.flexDirection = var9;
    var1.subtitleWrapper = var8;
    var1 = var3.bind(var7)(var1);
    var _closure1_slot12 = var1;
    var1 = function arg0() {
        _fun92210: for (var _fun92210_ip = 0;;) switch (_fun92210_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channel;
                var0 = _closure1_slot12;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var11 = 9;
                var0 = var5[var11];
                var1 = var8.bind(var3)(var0);
                var0 = var10.id;
                var0 = var1.bind(var3)(var0);
                var7 = var0.state;
                var2 = _closure1_slot11;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.subtitleWrapper;
                var0.style = var4;
                var12 = _closure1_slot10;
                var4 = 10;
                var4 = var5[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var13 = false;
                var4.useAllAloneText = var13;
                var4.channel = var10;
                var4.voiceState = var7;
                var13 = var9.subtitle;
                var4.style = var13;
                var8 = var12.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var8 = _closure1_slot0;
                var5 = var5[var11];
                var5 = var8.bind(var3)(var5);
                var5 = var5.CallStates;
                var5 = var5.CONNECTED;
                var5 = var7 === var5;
                if (!var5) {
                    _fun92210_ip = 227;
                    continue _fun92210
                }
            case 166:
                var13 = _closure1_slot10;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 11;
                var8 = var14[var8];
                var8 = var12.bind(var3)(var8);
                var12 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'always-white',
                    'children': ' - '
                };
                var14 = var9.subtitle;
                var8.style = var14;
                var5 = var13.bind(var3)(var12, var8);
            case 227:
                var4[1] = var5;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var11];
                var5 = var8.bind(var3)(var5);
                var5 = var5.CallStates;
                var5 = var5.CONNECTED;
                var5 = var7 === var5;
                if (!var5) {
                    _fun92210_ip = 318;
                    continue _fun92210
                }
            case 267:
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 12;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var10 = var10.id;
                var6.channelId = var10;
                var9 = var9.subtitle;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 318:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var3 = function arg0() {
        _fun92211: for (var _fun92211_ip = 0;;) switch (_fun92211_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.channel;
                var _closure2_slot0 = var11;
                var1 = _closure1_slot12;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 13;
                var1 = var6[var2];
                var8 = var7.bind(var3)(var1);
                var5 = var8.useStateFromStores;
                var1 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var3 = _closure2_slot0;
                    var0 = var3.getGuildId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var5.bind(var8)(var4, var1);
                var5 = _closure1_slot1;
                var1 = 14;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)(var11);
                var2 = var6[var2];
                var13 = var7.bind(var3)(var2);
                var12 = var13.useStateFromStores;
                var2 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var2;
                var7 = new Array(1);
                var7[0] = var11;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getSelfEmbeddedActivityForChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var12.bind(var13)(var8, var2, var7);
                var _closure2_slot1 = var2;
                var2 = 15;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var11);
                var8 = null;
                var5 = var8 == var4;
                var17 = undefined;
                if (var5) {
                    _fun92211_ip = 183;
                    continue _fun92211
                }
            case 178:
                var17 = var4.name;
            case 183:
                var6 = _closure1_slot6;
                var5 = var6.can;
                var4 = _closure1_slot7;
                var4 = var4.CREATE_INSTANT_INVITE;
                var4 = var5.bind(var6)(var4, var11);
                var12 = null;
                if (!var4) {
                    _fun92211_ip = 226;
                    continue _fun92211
                }
            case 214:
                var12 = null;
                if (var1) {
                    _fun92211_ip = 226;
                    continue _fun92211
                }
            case 219:
                var12 = function() { // Environment: var0
                    _fun92214: for (var _fun92214_ip = 0;;) switch (_fun92214_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var0 = var2[var0];
                            var4 = undefined;
                            var3 = var1.bind(var4)(var0);
                            var2 = var3.showInstantInviteActionSheet;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var6 = _closure1_slot9;
                            var6 = var6.VOICE_CHANNEL;
                            var0.source = var6;
                            var7 = _closure2_slot1;
                            var6 = null;
                            var6 = var6 == var7;
                            if (var6) {
                                _fun92214_ip = 76;
                                continue _fun92214
                            }
                        case 67:
                            var5 = _closure2_slot1;
                            var4 = var5.applicationId;
                        case 76:
                            var0.targetApplicationId = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
            case 226:
                var1 = var11.isPrivate;
                var1 = var1.bind(var11)();
                var18 = var2;
                if (!var1) {
                    _fun92211_ip = 352;
                    continue _fun92211
                }
            case 242:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 17;
                var4 = var6[var1];
                var4 = var2.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1["8bn8Br"];
                var1 = {};
                var6 = var11.recipients;
                var7 = var6.length;
                var6 = 1;
                var6 = var7 + var6;
                var1.count = var6;
                var18 = var4.bind(var5)(var2, var1);
                var5 = _closure1_slot10;
                var4 = _closure1_slot13;
                var1 = {};
                var1.channel = var11;
                var17 = var5.bind(var3)(var4, var1);
                var12 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.navigateToNewGroupDM;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot8;
                    var0 = var0.CHANNEL_CALL;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 352:
                var2 = _closure1_slot11;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var10.container;
                var0.style = var4;
                var6 = _closure1_slot10;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 19;
                var4 = var14[var7];
                var5 = var13.bind(var3)(var4);
                var4 = {};
                var7 = var14[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.Sizes;
                var7 = var7.MEDIUM;
                var4.size = var7;
                var7 = 20;
                var7 = var14[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.bind(var3)(var11);
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                if (var7) {
                    _fun92211_ip = 464;
                    continue _fun92211
                }
            case 450:
                var7 = 22;
                var7 = var14[var7];
                var7 = var13.bind(var3)(var7);
                _fun92211_ip = 476;
                continue _fun92211;
            case 464:
                var11 = 21;
                var11 = var14[var11];
                var7 = var13.bind(var3)(var11);
            case 476:
                var4.source = var7;
                var7 = true;
                var4.disableColor = var7;
                var7 = var10.icons;
                var4.style = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot3;
                var5 = {};
                var11 = var10.middle;
                var5.style = var11;
                var15 = 'string';
                var11 = typeof var18;
                var13 = var18;
                if (!(var15 === var11)) {
                    _fun92211_ip = 598;
                    continue _fun92211
                }
            case 545:
                var16 = _closure1_slot10;
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 11;
                var11 = var19[var11];
                var11 = var14.bind(var3)(var11);
                var14 = var11.Text;
                var11 = {
                    'lineClamp': 1,
                    'lineBreakMode': 'tail',
                    'variant': 'text-md/semibold',
                    'color': 'always-white'
                };
                var11.children = var18;
                var13 = var16.bind(var3)(var14, var11);
            case 598:
                var11 = new Array(2);
                var11[0] = var13;
                var14 = typeof var17;
                var13 = var17;
                if (!(var15 === var14)) {
                    _fun92211_ip = 669;
                    continue _fun92211
                }
            case 616:
                var16 = _closure1_slot10;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 11;
                var14 = var18[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'lineClamp': 1,
                    'lineBreakMode': 'tail',
                    'variant': 'text-xs/medium',
                    'color': 'always-white'
                };
                var14.children = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 669:
                var11[1] = var13;
                var5.children = var11;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot3;
                var5 = {};
                var10 = var10.icons;
                var5.style = var10;
                var8 = var8 != var12;
                if (!var8) {
                    _fun92211_ip = 734;
                    continue _fun92211
                }
            case 714:
                var11 = _closure1_slot10;
                var10 = _closure1_slot14;
                var9 = {};
                var9.onPress = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 734:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.onPress;
        var0 = _closure1_slot12;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot15;
        var0 = {};
        var0.onPress = var6;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var6 = 23;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var0.iconSource = var6;
        var5 = var5.icons;
        var0.iconStyle = var5;
        var7 = _closure1_slot0;
        var4 = 17;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["6Qgrev"];
        var4 = var5.bind(var6)(var4);
        var0.accessibilityLabel = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var1;
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.onPress;
        var6 = var0.iconStyle;
        var7 = var0.iconSource;
        var10 = var0.accessibilityLabel;
        var5 = var0.style;
        var3 = _closure1_slot10;
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 24;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var11 = 'button';
        var0.accessibilityRole = var11;
        var0.accessibilityLabel = var10;
        var0.onPress = var9;
        var0.style = var5;
        var5 = _closure1_slot1;
        var4 = 19;
        var4 = var8[var4];
        var5 = var5.bind(var2)(var4);
        var4 = {};
        var4.source = var7;
        var4.style = var6;
        var4 = var3.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var1;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.VoiceChannelHeader = var3;
    var2.IconButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1371, 1410, 3093, 660, 33, 1297, 671, 8772, 8773, 3942, 8774, 566, 8514, 4794, 8400, 1234, 3920, 4086, 4584, 11987, 8569, 8717, 4904, 2]);