// modules/stage_channels/native/components/GlobalStageChannelStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var0 = function arg0, arg1() {
        _fun68686: for (var _fun68686_ip = 0;;) switch (_fun68686_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = 0;
                if (!(var6 > var0)) {
                    _fun68686_ip = 19;
                    continue _fun68686
                }
            case 12:
                if (!(!(var5 > var0))) {
                    _fun68686_ip = 167;
                    continue _fun68686
                }
            case 19:
                if (!(!(var5 > var0))) {
                    _fun68686_ip = 95;
                    continue _fun68686
                }
            case 23:
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 8;
                var2 = var7[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.format;
                var0 = var7[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.sFzx0G;
                var0 = {};
                var0.number = var6;
                var0 = var2.bind(var3)(var1, var0);
                _fun68686_ip = 165;
                continue _fun68686;
            case 95:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 8;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["0bU4FO"];
                var1 = {};
                var1.number = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 165:
                _fun68686_ip = 241;
                continue _fun68686;
            case 167:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 8;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["cXaoI+"];
                var1 = {};
                var5 = var6 + var5;
                var1.number = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 241:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var1 = function arg0() {
        _fun68687: for (var _fun68687_ip = 0;;) switch (_fun68687_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var _closure2_slot0 = var5;
                var0 = _closure1_slot12;
                var4 = undefined;
                var15 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 11;
                var0 = var1[var0];
                var8 = var2.bind(var4)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = var5.id;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var17
                    var2 = _closure1_slot9;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var7.bind(var8)(var6, var0, var3);
                var _closure2_slot1 = var0;
                var6 = _closure1_slot1;
                var3 = 12;
                var3 = var1[var3];
                var6 = var6.bind(var4)(var3);
                var3 = function() { // Environment: var17
                    _fun68689: for (var _fun68689_ip = 0;;) switch (_fun68689_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var0 = 13;
                            var1 = var8[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.presentLocalNotification;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var4 = 8;
                            var6 = var8[var4];
                            var6 = var5.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.formatToPlainString;
                            var4 = var8[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.t;
                            var5 = var4.sqnsSP;
                            var4 = {};
                            var8 = _closure2_slot0;
                            var8 = var8.name;
                            var4.channelName = var8;
                            var10 = _closure2_slot1;
                            var8 = null;
                            var10 = var8 == var10;
                            var8 = undefined;
                            if (var10) {
                                _fun68689_ip = 125;
                                continue _fun68689
                            }
                        case 115:
                            var9 = _closure2_slot1;
                            var8 = var9.topic;
                        case 125:
                            var4.channelTopic = var8;
                            var4 = var6.bind(var7)(var5, var4);
                            var1.alertBody = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var3 = var6.bind(var4)(var3);
                var7 = _closure1_slot6;
                var6 = var7.useState;
                var3 = false;
                var7 = var6.bind(var7)(var3);
                var6 = _closure1_slot5;
                var3 = 2;
                var6 = var6.bind(var4)(var7, var3);
                var7 = 0;
                var13 = var6[var7];
                var3 = 1;
                var3 = var6[var3];
                var _closure2_slot2 = var3;
                var3 = 14;
                var1 = var1[var3];
                var8 = var2.bind(var4)(var1);
                var2 = var8.useStageBlockedUsersCount;
                var6 = null;
                var9 = var6 == var5;
                var1 = undefined;
                if (var9) {
                    _fun68687_ip = 203;
                    continue _fun68687
                }
            case 198:
                var1 = var5.id;
            case 203:
                var21 = var2.bind(var8)(var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStageIgnoredUsersCount;
                var8 = var6 == var5;
                var1 = undefined;
                if (var8) {
                    _fun68687_ip = 245;
                    continue _fun68687
                }
            case 240:
                var1 = var5.id;
            case 245:
                var19 = var2.bind(var3)(var1);
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 15;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useGetStageRTCPanelHeight;
                var8 = var6 == var5;
                var1 = undefined;
                if (var8) {
                    _fun68687_ip = 290;
                    continue _fun68687
                }
            case 285:
                var1 = var5.id;
            case 290:
                var9 = var2.bind(var3)(var1);
                var1 = function() { // Environment: var17
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun68692: for (var _fun68692_ip = 0;;) switch (_fun68692_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun68692_ip = 292;
                                        continue _fun68692
                                    }
                                case 10:
                                    var1 = _closure2_slot0;
                                    var5 = null;
                                    if (!(var5 != var1)) {
                                        _fun68692_ip = 287;
                                        continue _fun68692
                                    }
                                case 26:
                                    var3 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var1 = 16;
                                    var1 = var6[var1];
                                    var6 = undefined;
                                    var7 = var3.bind(var6)(var1);
                                    var3 = var7.shouldAgeVerifyToSpeakForCurrentUser;
                                    var1 = _closure2_slot0;
                                    var1 = var1.id;
                                    var1 = var3.bind(var7)(var1);
                                    if (var1) {
                                        _fun68692_ip = 221;
                                        continue _fun68692
                                    }
                                case 77:
                                    var3 = _closure2_slot2;
                                    var1 = true;
                                    var1 = var3.bind(var6)(var1);
                                case 88: // try_start_0
                                    var3 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var1 = 19;
                                    var1 = var7[var1];
                                    var8 = var3.bind(var6)(var1);
                                    var3 = var8.audienceAckRequestToSpeak;
                                    var1 = _closure2_slot0;
                                    var7 = false;
                                    var1 = var3.bind(var8)(var1, var7);
                                    SaveGenerator(address = 130);
                                case 128:
                                    return var1;
                                case 130:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun68692_ip = 203;
                                        continue _fun68692
                                    }
                                case 136: // try_end0
                                    var3 = _closure2_slot2;
                                    var3 = var3.bind(var6)(var7);
                                    var7 = _closure1_slot8;
                                    var3 = var7.getKey;
                                    var3 = var3.bind(var7)();
                                    if (!(var5 == var3)) {
                                        _fun68692_ip = 287;
                                        continue _fun68692
                                    }
                                case 166:
                                    var5 = _closure1_slot2;
                                    var7 = _closure1_slot3;
                                    var3 = 20;
                                    var3 = var7[var3];
                                    var7 = var5.bind(var6)(var3);
                                    var5 = var7.openStageChannel;
                                    var3 = _closure2_slot0;
                                    var3 = var5.bind(var7)(var3);
                                    _fun68692_ip = 287;
                                    continue _fun68692;
                                case 203:
                                    return var1;
                                case 206: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot2;
                                    var2 = false;
                                    var2 = var3.bind(var6)(var2);
                                    throw var1;
                                case 221:
                                    var2 = _closure1_slot1;
                                    var7 = _closure1_slot3;
                                    var1 = 17;
                                    var1 = var7[var1];
                                    var3 = var2.bind(var6)(var1);
                                    var2 = var3.showAgeVerificationGetStartedModal;
                                    var1 = {};
                                    var5 = _closure1_slot0;
                                    var4 = 18;
                                    var4 = var7[var4];
                                    var4 = var5.bind(var6)(var4);
                                    var4 = var4.AgeVerificationModalEntryPoint;
                                    var4 = var4.STAGE_CHANNEL_RAISE_HAND;
                                    var1.entryPoint = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 287:
                                    var1 = undefined;
                                    return var1;
                                case 292:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var20 = var1.bind(var4)();
                var1 = var6 == var0;
                var0 = null;
                if (var1) {
                    _fun68687_ip = 1054;
                    continue _fun68687
                }
            case 318:
                var3 = _closure1_slot11;
                var2 = _closure1_slot7;
                var1 = {};
                var8 = var15.invitedContainer;
                var5 = new Array(2);
                var5[0] = var8;
                var8 = {};
                var8.height = var9;
                var5[1] = var8;
                var1.style = var5;
                var9 = _closure1_slot10;
                var8 = _closure1_slot7;
                var5 = {};
                var11 = var15.row;
                var5.style = var11;
                var14 = _closure1_slot10;
                var25 = _closure1_slot0;
                var22 = _closure1_slot3;
                var16 = 21;
                var11 = var22[var16];
                var11 = var25.bind(var4)(var11);
                var12 = var11.LegacyText;
                var11 = {};
                var18 = var15.invitedHeaderText;
                var11.style = var18;
                var18 = 'header';
                var11.accessibilityRole = var18;
                var18 = 8;
                var23 = var22[var18];
                var23 = var25.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var18];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.Ul1RJQ;
                var22 = var23.bind(var24)(var22);
                var11.children = var22;
                var11 = var14.bind(var4)(var12, var11);
                var5.children = var11;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                if (!(!(var21 > var7))) {
                    _fun68687_ip = 516;
                    continue _fun68687
                }
            case 507:
                var7 = var19 > var7;
                var6 = null;
                if (!var7) {
                    _fun68687_ip = 605;
                    continue _fun68687
                }
            case 516:
                var9 = _closure1_slot10;
                var8 = _closure1_slot7;
                var7 = {};
                var11 = var15.row;
                var7.style = var11;
                var14 = _closure1_slot10;
                var12 = _closure1_slot0;
                var11 = _closure1_slot3;
                var11 = var11[var16];
                var11 = var12.bind(var4)(var11);
                var12 = var11.LegacyText;
                var11 = {};
                var16 = var15.blockedUsersText;
                var11.style = var16;
                var16 = _closure1_slot13;
                var16 = var16.bind(var4)(var21, var19);
                var11.children = var16;
                var11 = var14.bind(var4)(var12, var11);
                var7.children = var11;
                var6 = var9.bind(var4)(var8, var7);
            case 605:
                var5[1] = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot7;
                var6 = {};
                var9 = var15.row;
                var6.style = var9;
                var12 = _closure1_slot10;
                var19 = _closure1_slot1;
                var14 = _closure1_slot3;
                var16 = 22;
                var9 = var14[var16];
                var11 = var19.bind(var4)(var9);
                var9 = {};
                var21 = var14[var16];
                var21 = var19.bind(var4)(var21);
                var21 = var21.Colors;
                var21 = var21.WHITE;
                var9.color = var21;
                var21 = var14[var16];
                var21 = var19.bind(var4)(var21);
                var21 = var21.Looks;
                var21 = var21.OUTLINED;
                var9.look = var21;
                var17 = function() {
                    _fun68694: for (var _fun68694_ip = 0;;) switch (_fun68694_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun68694_ip = 56;
                                continue _fun68694
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.audienceAckRequestToSpeak;
                            var1 = _closure2_slot0;
                            var0 = true;
                            var0 = var2.bind(var3)(var1, var0);
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9.onPress = var17;
                var21 = var15.button;
                var17 = new Array(2);
                var17[0] = var21;
                var21 = var15.declineButton;
                var17[1] = var21;
                var9.style = var17;
                var17 = var14[var16];
                var17 = var19.bind(var4)(var17);
                var17 = var17.Sizes;
                var17 = var17.SMALL;
                var9.size = var17;
                var17 = var15.declineButtonText;
                var9.textStyle = var17;
                var17 = _closure1_slot0;
                var21 = var14[var18];
                var21 = var17.bind(var4)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var14[var18];
                var21 = var17.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21["1YDv7a"];
                var21 = var22.bind(var23)(var21);
                var9.text = var21;
                var11 = var12.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot10;
                var10 = var14[var16];
                var11 = var19.bind(var4)(var10);
                var10 = {};
                var21 = var14[var16];
                var21 = var19.bind(var4)(var21);
                var21 = var21.Colors;
                var21 = var21.WHITE;
                var10.color = var21;
                var21 = var14[var16];
                var21 = var19.bind(var4)(var21);
                var21 = var21.Looks;
                var21 = var21.FILLED;
                var10.look = var21;
                var10.onPress = var20;
                var20 = var15.button;
                var10.style = var20;
                var16 = var14[var16];
                var16 = var19.bind(var4)(var16);
                var16 = var16.Sizes;
                var16 = var16.SMALL;
                var10.size = var16;
                var15 = var15.acceptButtonText;
                var10.textStyle = var15;
                var15 = var14[var18];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.MpO0px;
                var14 = var15.bind(var16)(var14);
                var10.text = var14;
                var10.loading = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1054:
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var13 = var4.Fonts;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 10;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.paddingHorizontal = var14;
    var4.invitedContainer = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.marginEnd = var14;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DEFAULT;
    var9.tintColor = var14;
    var4.icon = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.marginEnd = var14;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var9.tintColor = var14;
    var4.activeSpeakerIcon = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.marginEnd = var14;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.GREEN_360;
    var9.tintColor = var14;
    var4.activeStageIcon = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DEFAULT;
    var9.color = var14;
    var14 = 14;
    var9.fontSize = var14;
    var15 = var13.PRIMARY_SEMIBOLD;
    var9.fontFamily = var15;
    var4.topic = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_DEFAULT;
    var9.color = var15;
    var9.fontSize = var14;
    var15 = var13.PRIMARY_MEDIUM;
    var9.fontFamily = var15;
    var4.channel = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var9.color = var15;
    var9.fontSize = var14;
    var13 = var13.PRIMARY_MEDIUM;
    var9.fontFamily = var13;
    var4.invitedHeaderText = var9;
    var9 = {
        'color': null,
        'fontSize': 12,
        'lineHeight': 16
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var9.color = var13;
    var4.blockedUsersText = var9;
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'flexDirection': 'row',
        'paddingHorizontal': null,
        'marginTop': 4294967288
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.paddingHorizontal = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.paddingBottom = var13;
    var4.noticeContainer = var9;
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'flexDirection': 'row',
        'width': '100%'
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.gap = var13;
    var4.row = var9;
    var9 = {};
    var9.flexGrow = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.margin = var12;
    var4.button = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.borderColor = var12;
    var4.declineButton = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.color = var12;
    var4.declineButtonText = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.GREEN_360;
    var9.color = var10;
    var4.acceptButtonText = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/GlobalStageChannelStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun68695: for (var _fun68695_ip = 0;;) switch (_fun68695_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channel;
                var20 = var0.guild;
                var5 = undefined;
                var _closure2_slot0 = var5;
                var0 = _closure1_slot12;
                var19 = var0.bind(var5)();
                var0 = null;
                var1 = var0 == var6;
                var10 = undefined;
                if (var1) {
                    _fun68695_ip = 48;
                    continue _fun68695
                }
            case 43:
                var10 = var6.id;
            case 48:
                _closure2_slot0 = var10;
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var1 = 23;
                var1 = var8[var1];
                var1 = var7.bind(var5)(var1);
                var1 = var1.bind(var5)();
                var4 = 24;
                var4 = var8[var4];
                var4 = var7.bind(var5)(var4);
                var18 = var4.bind(var5)(var10);
                var7 = _closure1_slot0;
                var4 = 11;
                var4 = var8[var4];
                var9 = var7.bind(var5)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = new Array(1);
                var4[0] = var10;
                var3 = function() { // Environment: var3
                    var2 = _closure1_slot9;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var8.bind(var9)(var7, var3, var4);
                if (var18) {
                    _fun68695_ip = 170;
                    continue _fun68695
                }
            case 151:
                if (!(var0 == var4)) {
                    _fun68695_ip = 162;
                    continue _fun68695
                }
            case 155:
                var17 = var19.icon;
                _fun68695_ip = 168;
                continue _fun68695;
            case 162:
                var17 = var19.activeStageIcon;
            case 168:
                _fun68695_ip = 176;
                continue _fun68695;
            case 170:
                var17 = var19.activeSpeakerIcon;
            case 176:
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 25;
                var3 = var8[var3];
                var3 = var7.bind(var5)(var3);
                var8 = var3.bind(var5)();
                if (var18) {
                    _fun68695_ip = 246;
                    continue _fun68695
                }
            case 203:
                if (var1) {
                    _fun68695_ip = 246;
                    continue _fun68695
                }
            case 206:
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var3 = 26;
                var3 = var9[var3];
                var7 = var7.bind(var5)(var3);
                var3 = var7.isThemeDark;
                var3 = var3.bind(var7)(var8);
                var12 = 'dark-content';
                if (!var3) {
                    _fun68695_ip = 252;
                    continue _fun68695
                }
            case 246:
                var12 = 'light-content';
            case 252:
                if (!(var0 != var6)) {
                    _fun68695_ip = 786;
                    continue _fun68695
                }
            case 259:
                if (!(var0 != var20)) {
                    _fun68695_ip = 786;
                    continue _fun68695
                }
            case 266:
                var8 = var20.name;
                var7 = var6.name;
                var3 = global;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var11 = '';
                var21 = ': ';
                var16 = var3.bind(var11)(var8, var21, var7);
                var7 = var0 == var4;
                var3 = undefined;
                if (var7) {
                    _fun68695_ip = 321;
                    continue _fun68695
                }
            case 315:
                var3 = var4.topic;
            case 321:
                var4 = var0 != var3;
                var22 = var11;
                if (!var4) {
                    _fun68695_ip = 334;
                    continue _fun68695
                }
            case 331:
                var22 = var3;
            case 334:
                var4 = var22.length;
                var3 = var16.length;
                var4 = var4 + var3;
                var3 = 50;
                var13 = var4 > var3;
                if (var1) {
                    _fun68695_ip = 764;
                    continue _fun68695
                }
            case 361:
                var4 = _closure1_slot11;
                var3 = _closure1_slot7;
                var1 = {};
                var7 = var19.noticeContainer;
                var1.style = var7;
                var10 = _closure1_slot10;
                var15 = _closure1_slot1;
                var8 = _closure1_slot3;
                var7 = 27;
                var7 = var8[var7];
                var9 = var15.bind(var5)(var7);
                var7 = {};
                var14 = true;
                var7.animated = var14;
                var7.barStyle = var12;
                var9 = var10.bind(var5)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var14 = _closure1_slot10;
                var9 = 28;
                var10 = var8[var9];
                var12 = var15.bind(var5)(var10);
                var10 = {};
                var10.style = var17;
                var9 = var8[var9];
                var9 = var15.bind(var5)(var9);
                var9 = var9.Sizes;
                var9 = var9.REFRESH_SMALL_16;
                var10.size = var9;
                var9 = _closure1_slot0;
                var15 = 29;
                var15 = var8[var15];
                var17 = var9.bind(var5)(var15);
                var15 = var17.getChannelIconWithGuild;
                var15 = var15.bind(var17)(var6, var20);
                var10.source = var15;
                var10 = var14.bind(var5)(var12, var10);
                var7[1] = var10;
                var10 = _closure1_slot11;
                var17 = 21;
                var8 = var8[var17];
                var8 = var9.bind(var5)(var8);
                var9 = var8.LegacyText;
                var8 = {};
                var12 = 1;
                var8.numberOfLines = var12;
                var12 = var11 !== var22;
                if (!var12) {
                    _fun68695_ip = 651;
                    continue _fun68695
                }
            case 561:
                var15 = _closure1_slot11;
                var14 = _closure1_slot0;
                var11 = _closure1_slot3;
                var11 = var11[var17];
                var11 = var14.bind(var5)(var11);
                var14 = var11.LegacyText;
                var11 = {};
                var23 = var19.topic;
                var20 = new Array(2);
                var20[0] = var23;
                var23 = var18;
                if (!var18) {
                    _fun68695_ip = 616;
                    continue _fun68695
                }
            case 610:
                var23 = var19.invitedHeaderText;
            case 616:
                var20[1] = var23;
                var11.style = var20;
                var20 = new Array(2);
                var20[0] = var22;
                if (!var13) {
                    _fun68695_ip = 637;
                    continue _fun68695
                }
            case 635:
                var21 = null;
            case 637:
                var20[1] = var21;
                var11.children = var20;
                var12 = var15.bind(var5)(var14, var11);
            case 651:
                var11 = new Array(2);
                var11[0] = var12;
                var12 = !var13;
                if (var13) {
                    _fun68695_ip = 734;
                    continue _fun68695
                }
            case 665:
                var15 = _closure1_slot10;
                var14 = _closure1_slot0;
                var13 = _closure1_slot3;
                var13 = var13[var17];
                var13 = var14.bind(var5)(var13);
                var14 = var13.LegacyText;
                var13 = {};
                var20 = var19.channel;
                var17 = new Array(2);
                var17[0] = var20;
                if (!var18) {
                    _fun68695_ip = 716;
                    continue _fun68695
                }
            case 710:
                var18 = var19.invitedHeaderText;
            case 716:
                var17[1] = var18;
                var13.style = var17;
                var13.children = var16;
                var12 = var15.bind(var5)(var14, var13);
            case 734:
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var5)(var9, var8);
                var7[2] = var8;
                var1.children = var7;
                var1 = var4.bind(var5)(var3, var1);
                _fun68695_ip = 784;
                continue _fun68695;
            case 764:
                var4 = _closure1_slot10;
                var3 = _closure1_slot14;
                var2 = {};
                var2.channel = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 784:
                return var1;
            case 786:
                return var0;
        }
    };
    var2.default = var3;
    var2.StageChannelRaiseHandAck = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3101, 1377, 660, 33, 1234, 1297, 671, 566, 4064, 8574, 6419, 8462, 4213, 5896, 4521, 5880, 5876, 4841, 4838, 8566, 7954, 3207, 3118, 7854, 4047, 4772, 2]);