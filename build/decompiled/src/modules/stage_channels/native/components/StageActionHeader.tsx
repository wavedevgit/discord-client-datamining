// modules/stage_channels/native/components/StageActionHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var12;
    var8 = function arg0() {
        var1 = arg0;
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 14;
        var2 = var6[var0];
        var0 = undefined;
        var8 = var3.bind(var0)(var2);
        var7 = var8.track;
        var2 = _closure1_slot10;
        var4 = var2.VIDEO_LAYOUT_TOGGLED;
        var2 = {};
        var9 = 'pop out';
        var2.video_layout = var9;
        var5 = _closure1_slot0;
        var9 = 15;
        var9 = var6[var9];
        var11 = var5.bind(var0)(var9);
        var10 = var11.collectVoiceAnalyticsMetadata;
        var9 = var1.id;
        var12 = var10.bind(var11)(var9);
        var13 = var2;
        var9 = copyDataProperties(var13, var12);
        var2 = var7.bind(var8)(var4, var2);
        var2 = 16;
        var2 = var6[var2];
        var7 = var3.bind(var0)(var2);
        var4 = var7.setHidden;
        var2 = false;
        var2 = var4.bind(var7)(var2);
        var2 = 17;
        var2 = var6[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.popWithKey;
        var4 = 18;
        var4 = var6[var4];
        var5 = var5.bind(var0)(var4);
        var4 = var5.getVoiceChannelKey;
        var1 = var1.id;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot17 = var8;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.channelId;
        var _closure2_slot0 = var1;
        var0 = var0.onOpenRTCDebugOverlay;
        var _closure2_slot1 = var0;
        var0 = _closure1_slot14;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 20;
        var0 = var7[var0];
        var1 = var6.bind(var3)(var0);
        var0 = {};
        var11 = _closure1_slot0;
        var5 = 22;
        var9 = var7[var5];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var5 = var7[var5];
        var5 = var11.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5["lIx5+G"];
        var5 = var9.bind(var10)(var5);
        var0.accessibilityLabel = var5;
        var9 = var8.iconBackground;
        var5 = new Array(2);
        var5[0] = var9;
        var8 = var8.settingsButton;
        var5[1] = var8;
        var0.containerStyle = var5;
        var5 = 33;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var0.source = var5;
        var4 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 34;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openStageSettingsSheet;
            var1 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.onPress = var4;
        var4 = true;
        var0.disableBackground = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var4;
    var3 = function arg0() {
        _fun69078: for (var _fun69078_ip = 0;;) switch (_fun69078_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channelId;
                var _closure2_slot0 = var8;
                var0 = _closure1_slot14;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 19;
                var0 = var9[var1];
                var12 = var3.bind(var4)(var0);
                var11 = var12.useStateFromStores;
                var0 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var0;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var11.bind(var12)(var10, var0, var2);
                var _closure2_slot1 = var0;
                var1 = var9[var1];
                var12 = var3.bind(var4)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot7;
                var10 = new Array(1);
                var10[0] = var1;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var5
                    _fun69080: for (var _fun69080_ip = 0;;) switch (_fun69080_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getGuild;
                            var3 = _closure2_slot1;
                            var0 = null;
                            var5 = var0 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun69080_ip = 39;
                                continue _fun69080
                            }
                        case 30:
                            var4 = _closure2_slot1;
                            var3 = var4.guild_id;
                        case 39:
                            var4 = var0 != var3;
                            var0 = null;
                            if (!var4) {
                                _fun69080_ip = 51;
                                continue _fun69080
                            }
                        case 48:
                            var0 = var3;
                        case 51:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1 = var11.bind(var12)(var10, var1, var2);
                var _closure2_slot2 = var1;
                var2 = 35;
                var2 = var9[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useActiveEvent;
                var2 = var2.bind(var3)(var8);
                var _closure2_slot3 = var2;
                var2 = null;
                var3 = var2 == var0;
                var0 = null;
                if (var3) {
                    _fun69078_ip = 349;
                    continue _fun69078
                }
            case 183:
                var1 = var2 == var1;
                var0 = null;
                if (var1) {
                    _fun69078_ip = 349;
                    continue _fun69078
                }
            case 195:
                var3 = _closure1_slot12;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 20;
                var1 = var8[var1];
                var2 = var9.bind(var4)(var1);
                var1 = {};
                var7 = _closure1_slot0;
                var10 = 22;
                var11 = var8[var10];
                var11 = var7.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var8[var10];
                var10 = var7.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.VINpSK;
                var10 = var11.bind(var12)(var10);
                var1.accessibilityLabel = var10;
                var6 = var6.iconBackground;
                var1.containerStyle = var6;
                var6 = 36;
                var6 = var8[var6];
                var6 = var9.bind(var4)(var6);
                var1.source = var6;
                var6 = 37;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.GroupPlusIcon;
                var1.IconComponent = var6;
                var5 = function() {
                    _fun69081: for (var _fun69081_ip = 0;;) switch (_fun69081_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var0 = var0.vanityURLCode;
                            var7 = null;
                            if (!(var7 == var0)) {
                                _fun69081_ip = 117;
                                continue _fun69081
                            }
                        case 19:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 38;
                            var0 = var3[var0];
                            var5 = undefined;
                            var4 = var2.bind(var5)(var0);
                            var3 = var4.showInstantInviteActionSheet;
                            var2 = _closure2_slot1;
                            var0 = {};
                            var6 = _closure1_slot11;
                            var6 = var6.STAGE_CHANNEL;
                            var0.source = var6;
                            var6 = _closure2_slot3;
                            var8 = var7 == var6;
                            var6 = undefined;
                            if (var8) {
                                _fun69081_ip = 92;
                                continue _fun69081
                            }
                        case 83:
                            var8 = _closure2_slot3;
                            var6 = var8.id;
                        case 92:
                            var7 = var7 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun69081_ip = 104;
                                continue _fun69081
                            }
                        case 101:
                            var5 = var6;
                        case 104:
                            var0.guildScheduledEventId = var5;
                            var0 = var3.bind(var4)(var2, var0);
                            _fun69081_ip = 173;
                            continue _fun69081;
                        case 117:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 38;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.showVanityUrlInviteActionSheet;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot1;
                            var0 = _closure1_slot11;
                            var0 = var0.STAGE_CHANNEL;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 173:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPress = var5;
                var5 = true;
                var1.disableBackground = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 349:
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var1 = function arg0() {
        _fun69082: for (var _fun69082_ip = 0;;) switch (_fun69082_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var0 = _closure1_slot14;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 19;
                var0 = var3[var0];
                var10 = var1.bind(var4)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var5
                    var1 = _closure1_slot9;
                    var0 = var1.isMuted;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var9.bind(var10)(var6, var0);
                var _closure2_slot0 = var6;
                var0 = 39;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useShowStageMusicMuteButton;
                var1 = var0.bind(var1)(var2);
                var0 = null;
                if (!var1) {
                    _fun69082_ip = 280;
                    continue _fun69082
                }
            case 108:
                var3 = _closure1_slot12;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 20;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 22;
                var11 = var13[var9];
                var11 = var10.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var13[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.t;
                if (var6) {
                    _fun69082_ip = 194;
                    continue _fun69082
                }
            case 181:
                var9 = var10.zqxfrf;
                var9 = var11.bind(var12)(var9);
                _fun69082_ip = 205;
                continue _fun69082;
            case 194:
                var10 = var10.ScHlfl;
                var9 = var11.bind(var12)(var10);
            case 205:
                var1.accessibilityLabel = var9;
                var7 = var7.iconBackground;
                var1.containerStyle = var7;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                if (var6) {
                    _fun69082_ip = 240;
                    continue _fun69082
                }
            case 231:
                var6 = 41;
                var6 = var9[var6];
                _fun69082_ip = 247;
                continue _fun69082;
            case 240:
                var8 = 40;
                var6 = var9[var8];
            case 247:
                var6 = var7.bind(var4)(var6);
                var1.source = var6;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 42;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.updateStageMusicMuted;
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onPress = var5;
                var5 = true;
                var1.disableBackground = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 280:
                return var0;
        }
    };
    var _closure1_slot20 = var1;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var6);
    var0 = 0;
    var7 = var12[var0];
    var6 = arg3;
    var0 = undefined;
    var13 = var6.bind(var0)(var7);
    var6 = 1;
    var6 = var12[var6];
    var6 = var11.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var12[var6];
    var6 = var15.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var12[var6];
    var6 = var15.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var16 = 4;
    var6 = var12[var16];
    var6 = var15.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var12[var6];
    var6 = var15.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var12[var6];
    var6 = var15.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var12[var6];
    var6 = var15.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var19 = 8;
    var6 = var12[var19];
    var6 = var11.bind(var0)(var6);
    var7 = var6.AnalyticEvents;
    var _closure1_slot10 = var7;
    var6 = var6.InstantInviteSources;
    var _closure1_slot11 = var6;
    var14 = 9;
    var6 = var12[var14];
    var6 = var11.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot12 = var7;
    var6 = var6.jsxs;
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var12[var6];
    var9 = var11.bind(var0)(var6);
    var7 = var9.createStyles;
    var6 = {};
    var10 = {
        'height': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 12,
        'overflow': 'visible'
    };
    var18 = 11;
    var17 = var12[var18];
    var17 = var11.bind(var0)(var17);
    var17 = var17.NAV_BAR_HEIGHT;
    var10.height = var17;
    var17 = 12;
    var6.header = var10;
    var10 = {
        'marginLeft': 12,
        'flex': 1
    };
    var6.leftTitleContainer = var10;
    var10 = {
        'position': 'relative',
        'flex': 1,
        'justifyContent': 'center'
    };
    var6.titleWrapper = var10;
    var10 = {
        'position': 'absolute',
        'zIndex': 1,
        'left': 0,
        'right': 0,
        'top': 0,
        'bottom': 0
    };
    var6.linearGradient = var10;
    var10 = {};
    var10.width = var0;
    var10.paddingHorizontal = var14;
    var6.navigatorIcon = var10;
    var10 = {
        'width': 36,
        'paddingHorizontal': 0
    };
    var6.defaultNavigatorIcon = var10;
    var10 = {};
    var14 = var12[var17];
    var23 = var11.bind(var0)(var14);
    var22 = var23.hexWithOpacity;
    var14 = 13;
    var20 = var12[var14];
    var20 = var15.bind(var0)(var20);
    var20 = var20.unsafe_rawColors;
    var21 = var20.WHITE;
    var20 = 0.1;
    var21 = var22.bind(var23)(var21, var20);
    var10.backgroundColor = var21;
    var6.iconBackground = var10;
    var10 = {
        'position': 'relative',
        'flexDirection': 'row'
    };
    var6.inviteContainer = var10;
    var10 = {
        'marginTop': null,
        'maxWidth': 140,
        'height': 40,
        'marginLeft': 20
    };
    var18 = var12[var18];
    var18 = var11.bind(var0)(var18);
    var18 = var18.NAV_BAR_HEIGHT;
    var18 = var18 - var19;
    var10.marginTop = var18;
    var6.fullTooltip = var10;
    var10 = {};
    var18 = 'wrap';
    var10.flexWrap = var18;
    var6.labelTooltipStyle = var10;
    var10 = {};
    var17 = var12[var17];
    var19 = var11.bind(var0)(var17);
    var18 = var19.hexWithOpacity;
    var17 = var12[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.WHITE;
    var17 = var18.bind(var19)(var17, var20);
    var10.backgroundColor = var17;
    var6.iconContainer = var10;
    var10 = {};
    var10.marginRight = var16;
    var6.settingsButton = var10;
    var10 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var17 = var12[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_SUBTLE;
    var10.color = var17;
    var6.stageInfo = var10;
    var10 = {};
    var10.marginLeft = var16;
    var6.stageInfoTopic = var10;
    var10 = {
        'marginLeft': 8,
        'marginRight': 4
    };
    var14 = var12[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_SUBTLE;
    var10.tintColor = var14;
    var6.icon = var10;
    var6 = var7.bind(var9)(var6);
    var _closure1_slot14 = var6;
    var7 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot14;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 19;
        var0 = var8[var0];
        var7 = var5.bind(var3)(var0);
        var2 = var7.useStateFromStores;
        var0 = _closure1_slot6;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var9
            var1 = _closure1_slot6;
            var0 = var1.getTotalMentionCount;
            var0 = var0.bind(var1)();
            return var0;
        };
        var7 = var2.bind(var7)(var1, var0);
        var2 = _closure1_slot12;
        var11 = _closure1_slot1;
        var0 = 20;
        var0 = var8[var0];
        var1 = var11.bind(var3)(var0);
        var0 = {};
        var10 = 21;
        var10 = var8[var10];
        var10 = var11.bind(var3)(var10);
        var0.source = var10;
        var10 = 22;
        var11 = var8[var10];
        var11 = var5.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var8[var10];
        var10 = var5.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.cpT0Cq;
        var10 = var11.bind(var12)(var10);
        var0.accessibilityLabel = var10;
        var9 = function() {
            var3 = _closure1_slot17;
            var1 = _closure2_slot0;
            var0 = undefined;
            var3 = var3.bind(var0)(var1);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 23;
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.selectParticipant;
            var2 = var1.id;
            var1 = null;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.onPress = var9;
        var6 = var6.iconContainer;
        var0.containerStyle = var6;
        var6 = true;
        var0.disableBackground = var6;
        var6 = _closure1_slot12;
        var4 = 24;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.MaskedBadge;
        var4 = {};
        var4.value = var7;
        var7 = {};
        var4.maskStyle = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var7;
    var6 = function arg0() {
        _fun69088: for (var _fun69088_ip = 0;;) switch (_fun69088_ip) {
            case 0:
                var1 = arg0;
                var23 = var1.channel;
                var _closure2_slot0 = var23;
                var1 = _closure1_slot14;
                var3 = undefined;
                var19 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 19;
                var5 = var4[var1];
                var9 = var2.bind(var3)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = var23.id;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var8.bind(var9)(var7, var5, var6);
                var5 = 25;
                var7 = var4[var5];
                var10 = var2.bind(var3)(var7);
                var9 = var10.useStageParticipantsCount;
                var8 = var23.id;
                var7 = 26;
                var7 = var4[var7];
                var7 = var2.bind(var3)(var7);
                var7 = var7.StageChannelParticipantNamedIndex;
                var7 = var7.AUDIENCE;
                var13 = var9.bind(var10)(var8, var7);
                var5 = var4[var5];
                var8 = var2.bind(var3)(var5);
                var7 = var8.useActualStageSpeakerCount;
                var5 = var23.id;
                var22 = var7.bind(var8)(var5);
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useStateFromStores;
                var5 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getSelectedParticipant;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot13;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = 'none';
                var0.pointerEvents = var4;
                var4 = var19.leftTitleContainer;
                var0.style = var4;
                var4 = {};
                var5 = var19.titleWrapper;
                var4.style = var5;
                var5 = null;
                var8 = var5 == var7;
                if (!var8) {
                    _fun69088_ip = 342;
                    continue _fun69088
                }
            case 258:
                var10 = _closure1_slot12;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 27;
                var7 = var11[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var11 = var19.linearGradient;
                var7.style = var11;
                var11 = ['#00000000', '#000000'];
                var7.colors = var11;
                var11 = {
                    'x': 0.85,
                    'y': 0
                };
                var7.start = var11;
                var11 = {
                    'x': 1,
                    'y': 0
                };
                var7.end = var11;
                var8 = var10.bind(var3)(var9, var7);
            case 342:
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot12;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var15 = 28;
                var8 = var8[var15];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'color': 'always-white',
                    'variant': 'text-md/semibold'
                };
                var14 = var5 == var6;
                var11 = undefined;
                if (var14) {
                    _fun69088_ip = 408;
                    continue _fun69088
                }
            case 402:
                var11 = var6.topic;
            case 408:
                if (!(var5 == var11)) {
                    _fun69088_ip = 417;
                    continue _fun69088
                }
            case 412:
                var11 = var23.name;
            case 417:
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var7 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var5 = var5 != var6;
                if (!var5) {
                    _fun69088_ip = 866;
                    continue _fun69088
                }
            case 459:
                var8 = _closure1_slot13;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var19.stageInfo;
                var6.style = var9;
                var14 = _closure1_slot12;
                var21 = _closure1_slot1;
                var10 = _closure1_slot2;
                var20 = 29;
                var9 = var10[var20];
                var11 = var21.bind(var3)(var9);
                var9 = {};
                var16 = 30;
                var16 = var10[var16];
                var16 = var21.bind(var3)(var16);
                var9.source = var16;
                var16 = var10[var20];
                var16 = var21.bind(var3)(var16);
                var16 = var16.Sizes;
                var16 = var16.SMALL;
                var9.size = var16;
                var16 = true;
                var9.disableColor = var16;
                var11 = var14.bind(var3)(var11, var9);
                var9 = new Array(6);
                var9[0] = var11;
                var18 = _closure1_slot12;
                var11 = _closure1_slot0;
                var14 = var10[var15];
                var14 = var11.bind(var3)(var14);
                var17 = var14.Text;
                var16 = {};
                var14 = 'text-xs/normal';
                var16.variant = var14;
                var24 = var19.stageInfoTopic;
                var16.style = var24;
                var23 = var23.name;
                var16.children = var23;
                var16 = var18.bind(var3)(var17, var16);
                var9[1] = var16;
                var18 = _closure1_slot12;
                var16 = var10[var20];
                var17 = var21.bind(var3)(var16);
                var16 = {};
                var23 = 31;
                var23 = var10[var23];
                var23 = var21.bind(var3)(var23);
                var16.source = var23;
                var23 = var10[var20];
                var23 = var21.bind(var3)(var23);
                var23 = var23.Sizes;
                var23 = var23.SMALL;
                var16.size = var23;
                var23 = var19.icon;
                var16.style = var23;
                var16 = var18.bind(var3)(var17, var16);
                var9[2] = var16;
                var18 = _closure1_slot12;
                var16 = var10[var15];
                var16 = var11.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {};
                var16.variant = var14;
                var16.children = var22;
                var16 = var18.bind(var3)(var17, var16);
                var9[3] = var16;
                var18 = _closure1_slot12;
                var16 = var10[var20];
                var17 = var21.bind(var3)(var16);
                var16 = {};
                var22 = 32;
                var22 = var10[var22];
                var22 = var21.bind(var3)(var22);
                var16.source = var22;
                var20 = var10[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.Sizes;
                var20 = var20.SMALL;
                var16.size = var20;
                var19 = var19.icon;
                var16.style = var19;
                var16 = var18.bind(var3)(var17, var16);
                var9[4] = var16;
                var12 = _closure1_slot12;
                var10 = var10[var15];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var10.variant = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[5] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 866:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var6;
    var10 = var13.memo;
    var9 = function(arg0) { // Environment: var5
        _fun69091: for (var _fun69091_ip = 0;;) switch (_fun69091_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channel;
                var6 = var0.fullscreenStream;
                var8 = var0.onOpenRTCDebugOverlay;
                var0 = _closure1_slot14;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 43;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var9.id;
                var0 = var1.bind(var3)(var0);
                var1 = null;
                var1 = var1 == var0;
                var7 = undefined;
                if (var1) {
                    _fun69091_ip = 80;
                    continue _fun69091
                }
            case 74:
                var7 = var0.speaker;
            case 80:
                var2 = _closure1_slot13;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var4.header;
                var0.style = var4;
                var4 = 'box-none';
                var0.pointerEvents = var4;
                var11 = _closure1_slot12;
                var10 = _closure1_slot15;
                var4 = {};
                var4.channel = var9;
                var4.fullscreenStream = var6;
                var10 = var11.bind(var3)(var10, var4);
                var4 = new Array(7);
                var4[0] = var10;
                var12 = _closure1_slot12;
                var11 = _closure1_slot16;
                var10 = {};
                var10.channel = var9;
                var10 = var12.bind(var3)(var11, var10);
                var4[1] = var10;
                if (!var7) {
                    _fun69091_ip = 195;
                    continue _fun69091
                }
            case 170:
                var12 = _closure1_slot12;
                var11 = _closure1_slot20;
                var10 = {};
                var13 = var9.id;
                var10.channelId = var13;
                var7 = var12.bind(var3)(var11, var10);
            case 195:
                var4[2] = var7;
                if (!var6) {
                    _fun69091_ip = 244;
                    continue _fun69091
                }
            case 202:
                var11 = _closure1_slot12;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 44;
                var7 = var12[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.GridButton;
                var7 = {};
                var7.channel = var9;
                var6 = var11.bind(var3)(var10, var7);
            case 244:
                var4[3] = var6;
                var10 = _closure1_slot12;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 44;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.CameraButton;
                var6 = {};
                var6 = var10.bind(var3)(var7, var6);
                var4[4] = var6;
                var10 = _closure1_slot12;
                var7 = _closure1_slot19;
                var6 = {};
                var11 = var9.id;
                var6.channelId = var11;
                var6 = var10.bind(var3)(var7, var6);
                var4[5] = var6;
                var7 = _closure1_slot12;
                var6 = _closure1_slot18;
                var5 = {};
                var9 = var9.id;
                var5.channelId = var9;
                var5.onOpenRTCDebugOverlay = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[6] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var9 = var10.bind(var13)(var9);
    var10 = 45;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/stage_channels/native/components/StageActionHeader.tsx';
    var10 = var11.bind(var12)(var10);
    var2.default = var9;
    var2.closeStageModal = var8;
    var2.HideStageChannelCallIcon = var7;
    var2.StageChannelCallHeader = var6;
    var5 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot14;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 19;
        var0 = var8[var0];
        var7 = var5.bind(var3)(var0);
        var2 = var7.useStateFromStores;
        var0 = _closure1_slot6;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var9
            var1 = _closure1_slot6;
            var0 = var1.getTotalMentionCount;
            var0 = var0.bind(var1)();
            return var0;
        };
        var7 = var2.bind(var7)(var1, var0);
        var2 = _closure1_slot12;
        var11 = _closure1_slot1;
        var0 = 20;
        var0 = var8[var0];
        var1 = var11.bind(var3)(var0);
        var0 = {};
        var10 = 21;
        var10 = var8[var10];
        var10 = var11.bind(var3)(var10);
        var0.source = var10;
        var10 = 22;
        var11 = var8[var10];
        var11 = var5.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var8[var10];
        var10 = var5.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.cpT0Cq;
        var10 = var11.bind(var12)(var10);
        var0.accessibilityLabel = var10;
        var9 = function() {
            var3 = _closure1_slot17;
            var1 = _closure2_slot0;
            var0 = undefined;
            var3 = var3.bind(var0)(var1);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 23;
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.selectParticipant;
            var2 = var1.id;
            var1 = null;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.onPress = var9;
        var6 = var6.iconContainer;
        var0.containerStyle = var6;
        var6 = true;
        var0.disableBackground = var6;
        var6 = _closure1_slot12;
        var4 = 24;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.MaskedBadge;
        var4 = {};
        var4.value = var7;
        var7 = {};
        var4.maskStyle = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.HideChannelCallButton = var5;
    var2.StageSettingsButton = var4;
    var2.StageInviteButton = var3;
    var2.MusicMuteButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3948, 1372, 8638, 1410, 1377, 8402, 660, 33, 1297, 4703, 3240, 671, 795, 4302, 7890, 4561, 7876, 566, 8429, 8641, 1234, 7878, 8642, 8410, 5662, 4098, 3941, 4086, 6462, 6454, 8644, 8645, 5912, 8080, 8646, 8647, 8328, 8404, 8412, 8413, 8416, 8648, 8649, 2]);