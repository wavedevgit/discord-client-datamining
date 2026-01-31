// modules/launchpad/native/shared/VoiceOrStageChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun110114: for (var _fun110114_ip = 0;;) switch (_fun110114_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelName;
                var5 = var0.channel;
                var6 = var0.userCount;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var9 = 12;
                var3 = var1[var9];
                var8 = undefined;
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var1[var9];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.TPPk2T;
                var1 = {};
                var1.channelName = var7;
                var1 = var3.bind(var4)(var2, var1);
                var3 = var5.userLimit;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun110114_ip = 112;
                    continue _fun110114
                }
            case 100:
                var3 = var5.userLimit;
                var2 = 0;
                if (!(!(var3 > var2))) {
                    _fun110114_ip = 188;
                    continue _fun110114
                }
            case 112:
                var2 = 0;
                if (!(var6 > var2)) {
                    _fun110114_ip = 263;
                    continue _fun110114
                }
            case 121:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var9];
                var4 = var3.bind(var8)(var4);
                var10 = var4.intl;
                var4 = var10.formatToPlainString;
                var2 = var2[var9];
                var2 = var3.bind(var8)(var2);
                var2 = var2.t;
                var3 = var2["7yr3Qc"];
                var2 = {};
                var2.channelName = var7;
                var2.userCount = var6;
                var1 = var4.bind(var10)(var3, var2);
                _fun110114_ip = 263;
                continue _fun110114;
            case 188:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = var0[var9];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var0[var9];
                var0 = var2.bind(var8)(var0);
                var0 = var0.t;
                var2 = var0.rhh6Ev;
                var0 = {};
                var0.channelName = var7;
                var0.userCount = var6;
                var5 = var5.userLimit;
                var0.limit = var5;
                var1 = var3.bind(var4)(var2, var0);
            case 263:
                var0 = {
                    'accessible': true,
                    'accessibilityRole': 'button'
                };
                var0.accessibilityLabel = var1;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun110118: for (var _fun110118_ip = 0;;) switch (_fun110118_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun110118_ip = 147;
                            continue _fun110118
                        }
                    case 13:
                        var1 = var4.isGuildStageVoice;
                        var3 = var1.bind(var4)();
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 14;
                        var5 = var1[var2];
                        var2 = undefined;
                        var5 = var6.bind(var2)(var5);
                        if (var3) {
                            _fun110118_ip = 102;
                            continue _fun110118
                        }
                    case 51:
                        var3 = 15;
                        var6 = var1[var3];
                        var3 = var1.paths;
                        var3 = var5.bind(var2)(var6, var3);
                        SaveGenerator(address = 73);
                    case 71:
                        return var3;
                    case 73:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun110118_ip = 99;
                            continue _fun110118
                        }
                    case 79:
                        var7 = var3.openGuildVoiceModal;
                        var6 = 'Channel List';
                        var6 = var7.bind(var2)(var4, var6);
                        _fun110118_ip = 141;
                        continue _fun110118;
                    case 99:
                        return var3;
                    case 102:
                        var3 = 13;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var1 = var5.bind(var2)(var3, var1);
                        SaveGenerator(address = 124);
                    case 122:
                        return var1;
                    case 124:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun110118_ip = 144;
                            continue _fun110118
                        }
                    case 130:
                        var3 = var1.connectAndOpen;
                        var3 = var3.bind(var2)(var4);
                    case 141:
                        return var2;
                    case 144:
                        return var1;
                    case 147:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.useCallback;
            var1 = function() { // Environment: var0
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun110123: for (var _fun110123_ip = 0;;) switch (_fun110123_ip) {
                            case 0:
                                StartGenerator();
                                var4 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun110123_ip = 269;
                                    continue _fun110123
                                }
                            case 15:
                                var _closure6_slot0 = var4;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 16;
                                var2 = var6[var2];
                                var6 = undefined;
                                var7 = var5.bind(var6)(var2);
                                var5 = var7.getChannelRoleSubscriptionStatus;
                                var2 = var4.id;
                                var2 = var5.bind(var7)(var2);
                                var2 = var2.needSubscriptionToAccess;
                                var5 = var4.getGuildId;
                                var5 = var5.bind(var4)();
                                var7 = null;
                                if (!(var7 != var5)) {
                                    _fun110123_ip = 116;
                                    continue _fun110123
                                }
                            case 82:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 17;
                                var7 = var9[var7];
                                var8 = var8.bind(var6)(var7);
                                var7 = var8.shouldShowMembershipVerificationGate;
                                var7 = var7.bind(var8)(var5);
                                if (var7) {
                                    _fun110123_ip = 196;
                                    continue _fun110123
                                }
                            case 116:
                                if (var2) {
                                    _fun110123_ip = 132;
                                    continue _fun110123
                                }
                            case 119:
                                var2 = _closure1_slot20;
                                var2 = var2.bind(var6)(var4);
                                var2 = undefined;
                                _fun110123_ip = 194;
                                continue _fun110123;
                            case 132:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 19;
                                var7 = var9[var7];
                                var8 = var8.bind(var6)(var7);
                                var7 = var8.transitionTo;
                                var11 = _closure1_slot11;
                                var10 = var11.CHANNEL;
                                var9 = var4.guild_id;
                                var4 = _closure1_slot12;
                                var4 = var4.ROLE_SUBSCRIPTIONS;
                                var4 = var10.bind(var11)(var9, var4);
                                var2 = var7.bind(var8)(var4);
                            case 194:
                                _fun110123_ip = 263;
                                continue _fun110123;
                            case 196:
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var4 = 14;
                                var4 = var1[var4];
                                var7 = var7.bind(var6)(var4);
                                var4 = 18;
                                var4 = var1[var4];
                                var1 = var1.paths;
                                var1 = var7.bind(var6)(var4, var1);
                                SaveGenerator(address = 238);
                            case 236:
                                return var1;
                            case 238:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun110123_ip = 266;
                                    continue _fun110123
                                }
                            case 244:
                                var4 = var1.openMemberVerificationModal;
                                var3 = function() { // Environment: var3
                                    var2 = _closure1_slot20;
                                    var1 = _closure6_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var2 = var4.bind(var6)(var5, var3);
                            case 263:
                                return var2;
                            case 266:
                                return var1;
                            case 269:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = undefined;
        var4 = var3.bind(var0)();
        var _closure2_slot1 = var4;
        var0 = {};
        var7 = _closure1_slot4;
        var6 = var7.useCallback;
        var5 = new Array(2);
        var5[0] = var2;
        var5[1] = var4;
        var4 = function() { // Environment: var1
            _fun110126: for (var _fun110126_ip = 0;;) switch (_fun110126_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = var0.guild_id;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun110126_ip = 63;
                        continue _fun110126
                    }
                case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.transitionToGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var2.bind(var3)(var0);
                case 63:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var0.onPress = var4;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var5 = var2.id;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 22;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.openChannelLongPressActionSheet;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.onLongPress = var1;
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getThemedRippleConfig;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 23;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun110128: for (var _fun110128_ip = 0;;) switch (_fun110128_ip) {
            case 0:
                var10 = arg1;
                var0 = {};
                var7 = -2;
                var1 = {
                    'display': 'flex',
                    'flexDirection': 'row',
                    'paddingRight': 16,
                    'marginTop': 4294967294
                };
                var0.voiceUsers = var1;
                var1 = {};
                var8 = 1;
                var1.flex = var8;
                var0.pressable = var1;
                var1 = {
                    'borderRadius': null,
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var9 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 24;
                var3 = var6[var5];
                var4 = undefined;
                var3 = var9.bind(var4)(var3);
                var3 = var3.radii;
                var3 = var3.round;
                var1.borderRadius = var3;
                var3 = 'center';
                var0.joinButton = var1;
                var1 = {
                    'width': 'auto',
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var0.joinButtonContent = var1;
                var1 = {};
                var11 = var6[var5];
                var11 = var9.bind(var4)(var11);
                var11 = var11.colors;
                var11 = var11.BACKGROUND_FEEDBACK_NOTIFICATION;
                var1.backgroundColor = var11;
                var0.joinButtonLive = var1;
                var1 = {};
                var11 = 'uppercase';
                var1.textTransform = var11;
                var0.joinButtonLiveText = var1;
                var1 = {};
                var11 = var6[var5];
                var11 = var9.bind(var4)(var11);
                var11 = var11.colors;
                var11 = var11.STATUS_POSITIVE;
                var1.backgroundColor = var11;
                var0.joinButtonActive = var1;
                var1 = {};
                var6 = var6[var5];
                var6 = var9.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.BACKGROUND_BASE_LOW;
                var1.backgroundColor = var6;
                var9 = arg0;
                var6 = var8;
                if (!var9) {
                    _fun110128_ip = 242;
                    continue _fun110128
                }
            case 240:
                var6 = 0;
            case 242:
                var1.elevation = var6;
                var6 = 4;
                var1.shadowRadius = var6;
                var9 = {
                    'width': 0,
                    'height': 1
                };
                var1.shadowOffset = var9;
                var11 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var5];
                var9 = var11.bind(var4)(var9);
                var9 = var9.colors;
                var9 = var9.BLACK;
                var1.shadowColor = var9;
                var9 = 0.14;
                if (!var10) {
                    _fun110128_ip = 326;
                    continue _fun110128
                }
            case 316:
                var9 = 0.08;
            case 326:
                var1.shadowOpacity = var9;
                var9 = 'rgba(255, 255, 255, 0.14)';
                if (!var10) {
                    _fun110128_ip = 346;
                    continue _fun110128
                }
            case 340:
                var9 = 'rgba(0, 0, 0, 0.08)';
            case 346:
                var1.borderColor = var9;
                var1.borderWidth = var8;
                var0.joinButtonInactive = var1;
                var1 = {
                    'marginRight': 2,
                    'flex': 1,
                    'alignItems': 'center',
                    'justifyContent': 'center'
                };
                var0.joinButtonIconWrapper = var1;
                var1 = {};
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = var10[var5];
                var8 = var9.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.WHITE;
                var1.tintColor = var8;
                var0.joinButtonIconActive = var1;
                var1 = {};
                var8 = var10[var5];
                var8 = var9.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.INTERACTIVE_TEXT_DEFAULT;
                var1.tintColor = var8;
                var0.joinButtonIconInactive = var1;
                var1 = {};
                var9 = _closure1_slot0;
                var8 = 25;
                var8 = var10[var8];
                var9 = var9.bind(var4)(var8);
                var8 = var9.isAndroid;
                var8 = var8.bind(var9)();
                var6 = 0;
                if (!var8) {
                    _fun110128_ip = 490;
                    continue _fun110128
                }
            case 487:
                var6 = var7;
            case 490:
                var1.marginTop = var6;
                var1.alignSelf = var3;
                var0.joinButtonText = var1;
                var1 = {
                    'backgroundColor': null,
                    'width': 8,
                    'height': 8
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.WHITE;
                var1.backgroundColor = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.radii;
                var2 = var2.round;
                var1.borderRadius = var2;
                var0.liveIcon = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = new Array(0);
    var _closure1_slot17 = var3;
    var7 = var6.memo;
    var3 = function arg0() {
        _fun110129: for (var _fun110129_ip = 0;;) switch (_fun110129_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.channel;
                var _closure2_slot0 = var13;
                var31 = var1.subtitle;
                var _closure2_slot1 = var31;
                var7 = var1.voiceStates;
                var2 = undefined;
                if (!(var7 === var2)) {
                    _fun110129_ip = 43;
                    continue _fun110129
                }
            case 36:
                var7 = _closure1_slot17;
            case 43:
                var1 = var1.speakerVoiceStates;
                if (!(var1 === var2)) {
                    _fun110129_ip = 60;
                    continue _fun110129
                }
            case 53:
                var1 = _closure1_slot17;
            case 60:
                var30 = var13.id;
                var29 = var13.guild_id;
                var4 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 26;
                var3 = var12[var3];
                var3 = var4.bind(var2)(var3);
                var11 = var3.bind(var2)();
                var3 = 27;
                var3 = var12[var3];
                var3 = var4.bind(var2)(var3);
                var6 = var3.bind(var2)();
                var5 = _closure1_slot16;
                var9 = _closure1_slot0;
                var3 = 28;
                var3 = var12[var3];
                var8 = var9.bind(var2)(var3);
                var3 = var8.isThemeLight;
                var3 = var3.bind(var8)(var11);
                var11 = var5.bind(var2)(var6, var3);
                var3 = 29;
                var3 = var12[var3];
                var3 = var4.bind(var2)(var3);
                var15 = var3.bind(var2)();
                var3 = 30;
                var3 = var12[var3];
                var4 = var9.bind(var2)(var3);
                var3 = var4.useIsConnectedToVoiceChannel;
                var19 = var3.bind(var4)(var13);
                var3 = 31;
                var3 = var12[var3];
                var5 = var9.bind(var2)(var3);
                var4 = var5.useBaseChannelUnreadBadgeState;
                var3 = !var19;
                var3 = var4.bind(var5)(var13, var3);
                var22 = var3.unread;
                var25 = var3.mentionCount;
                var4 = 32;
                var3 = var12[var4];
                var8 = var9.bind(var2)(var3);
                var6 = var8.useStateFromStores;
                var3 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.resolveUnreadSetting;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var21 = var6.bind(var8)(var5, var3);
                var3 = 33;
                var3 = var12[var3];
                var8 = var9.bind(var2)(var3);
                var6 = var8.useStageParticipantsCount;
                var5 = var13.id;
                var3 = 34;
                var3 = var12[var3];
                var3 = var9.bind(var2)(var3);
                var3 = var3.StageChannelParticipantNamedIndex;
                var3 = var3.AUDIENCE;
                var12 = var6.bind(var8)(var5, var3);
                var3 = var7.length;
                var3 = var12 + var3;
                var8 = 0;
                var5 = null;
                var28 = 0;
                if (!(var5 != var3)) {
                    _fun110129_ip = 345;
                    continue _fun110129
                }
            case 342:
                var28 = var3;
            case 345:
                var3 = _closure1_slot22;
                var26 = var3.bind(var2)(var13);
                var9 = _closure1_slot1;
                var3 = _closure1_slot2;
                var6 = 35;
                var6 = var3[var6];
                var6 = var9.bind(var2)(var6);
                var24 = var6.bind(var2)(var13);
                var14 = _closure1_slot0;
                var6 = 36;
                var9 = var3[var6];
                var17 = var14.bind(var2)(var9);
                var16 = var17.getChannelAccessibilityProps;
                var9 = {};
                var9.channel = var13;
                var9.unread = var22;
                var9.mentionCount = var25;
                var9.userCount = var28;
                var18 = var24.length;
                var9.embeddedActivitiesCount = var18;
                var9 = var16.bind(var17)(var9);
                var3 = var3[var4];
                var18 = var14.bind(var2)(var3);
                var17 = var18.useStateFromStores;
                var3 = _closure1_slot7;
                var16 = new Array(1);
                var16[0] = var3;
                var3 = var13.id;
                var14 = new Array(1);
                var14[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var17.bind(var18)(var16, var3, var14);
                var3 = var5 == var20;
                var32 = undefined;
                if (var3) {
                    _fun110129_ip = 505;
                    continue _fun110129
                }
            case 499:
                var32 = var20.topic;
            case 505:
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var3 = 37;
                var3 = var16[var3];
                var14 = var14.bind(var2)(var3);
                var3 = false;
                var33 = var14.bind(var2)(var13, var3);
                var3 = var13.isGuildStageVoice;
                var3 = var3.bind(var13)();
                var14 = var7;
                if (!var3) {
                    _fun110129_ip = 552;
                    continue _fun110129
                }
            case 549:
                var14 = var1;
            case 552:
                var3 = var14.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.user;
                    return var0;
                };
                var14 = var3.bind(var14)(var1);
                var1 = _closure1_slot1;
                var27 = _closure1_slot2;
                var3 = 38;
                var3 = var27[var3];
                var3 = var1.bind(var2)(var3);
                var35 = var3.bind(var2)();
                var3 = _closure1_slot0;
                var16 = 39;
                var16 = var27[var16];
                var17 = var3.bind(var2)(var16);
                var16 = var17.useFontScale;
                var18 = var16.bind(var17)();
                var4 = var27[var4];
                var23 = var3.bind(var2)(var4);
                var17 = var23.useStateFromStores;
                var4 = _closure1_slot8;
                var16 = new Array(1);
                var16[0] = var4;
                var4 = function() { // Environment: var0
                    var0 = _closure1_slot8;
                    var0 = var0.locale;
                    return var0;
                };
                var23 = var17.bind(var23)(var16, var4);
                var4 = 16;
                var4 = var27[var4];
                var16 = var1.bind(var2)(var4);
                var4 = var13.id;
                var4 = var16.bind(var2)(var4);
                var17 = var4.isSubscriptionGated;
                var16 = var4.needSubscriptionToAccess;
                var36 = _closure1_slot4;
                var34 = var36.useEffect;
                var4 = new Array(2);
                var4[0] = var19;
                var4[1] = var31;
                var0 = function() { // Environment: var0
                    _fun110134: for (var _fun110134_ip = 0;;) switch (_fun110134_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun110134_ip = 31;
                                continue _fun110134
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var3 = 'string';
                            var2 = typeof var2;
                            var1 = var3 !== var2;
                        case 31:
                            if (!var1) {
                                _fun110134_ip = 51;
                                continue _fun110134
                            }
                        case 34:
                            var2 = _closure2_slot1;
                            var3 = var2.type;
                            var2 = 'voice';
                            var1 = var2 === var3;
                        case 51:
                            if (!var1) {
                                _fun110134_ip = 105;
                                continue _fun110134
                            }
                        case 54:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 40;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var2 = var1.messagePreviewASTCache;
                            var1 = var2.del;
                            var0 = _closure2_slot1;
                            var0 = var0.text;
                            var0 = var1.bind(var2)(var0);
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var34.bind(var36)(var0, var4);
                var0 = 41;
                var0 = var27[var0];
                var1 = var1.bind(var2)(var0);
                var4 = _closure1_slot15;
                var0 = 42;
                var0 = var27[var0];
                var0 = var3.bind(var2)(var0);
                var3 = var0.PressableHighlight;
                var0 = {};
                var34 = var11.pressable;
                var27 = new Array(2);
                var27[0] = var34;
                var34 = {};
                var36 = var7.length;
                var37 = var36 > var8;
                var36 = 0;
                if (!var37) {
                    _fun110129_ip = 795;
                    continue _fun110129
                }
            case 792:
                var36 = 6;
            case 795:
                var34.paddingBottom = var36;
                var36 = var15.container;
                var36 = var36.borderRadius;
                var34.borderRadius = var36;
                var27[1] = var34;
                var0.style = var27;
                var0.underlayColor = var35;
                var34 = _closure1_slot13;
                var27 = {};
                var27.color = var35;
                var27 = var34.bind(var2)(var27);
                var0.androidRippleConfig = var27;
                var40 = var0;
                var39 = var26;
                var26 = copyDataProperties(var40, var39);
                var26 = var13.isGuildStageVoice;
                var26 = var26.bind(var13)();
                if (!var26) {
                    _fun110129_ip = 895;
                    continue _fun110129
                }
            case 870:
                var27 = _closure1_slot19;
                var26 = {};
                var26.channelName = var33;
                var26.channel = var13;
                var26.userCount = var28;
                var9 = var27.bind(var2)(var26);
            case 895:
                var40 = var0;
                var39 = var9;
                var9 = copyDataProperties(var40, var39);
                var9 = _closure1_slot1;
                var28 = _closure1_slot2;
                var6 = var28[var6];
                var9 = var9.bind(var2)(var6);
                var6 = {};
                var6.channel = var13;
                var27 = _closure1_slot0;
                var26 = 43;
                var26 = var28[var26];
                var28 = var27.bind(var2)(var26);
                var27 = var28.renderChannelSubtitle;
                var26 = {};
                if (!(var5 != var32)) {
                    _fun110129_ip = 959;
                    continue _fun110129
                }
            case 956:
                var31 = var32;
            case 959:
                var26.subtitle = var31;
                var26.channelId = var30;
                var26.guildId = var29;
                var26.connected = var19;
                var26 = var27.bind(var28)(var26);
                var6.subtitle = var26;
                if (var22) {
                    _fun110129_ip = 994;
                    continue _fun110129
                }
            case 990:
                var22 = var25 > var8;
            case 994:
                var6.unread = var22;
                var6.resolvedUnreadSetting = var21;
                var6.mentionCount = var25;
                var22 = _closure1_slot1;
                var26 = _closure1_slot2;
                var21 = 44;
                var21 = var26[var21];
                var22 = var22.bind(var2)(var21);
                var21 = {};
                var21.mentionCount = var25;
                var21.locale = var23;
                var21 = var22.bind(var2)(var21);
                var6.mentionBadge = var21;
                var20 = var5 != var20;
                var6.live = var20;
                var20 = var24.length;
                if (!(!(var20 > var8))) {
                    _fun110129_ip = 1118;
                    continue _fun110129
                }
            case 1069:
                var22 = _closure1_slot14;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 46;
                var20 = var23[var20];
                var20 = var21.bind(var2)(var20);
                var21 = var20.VocalChannelJoinButton;
                var20 = {};
                var20.channel = var13;
                var20.voiceStates = var7;
                var20 = var22.bind(var2)(var21, var20);
                _fun110129_ip = 1176;
                continue _fun110129;
            case 1118:
                var23 = _closure1_slot14;
                var22 = _closure1_slot1;
                var25 = _closure1_slot2;
                var21 = 45;
                var21 = var25[var21];
                var22 = var22.bind(var2)(var21);
                var21 = {};
                var21.embeddedApps = var24;
                var24 = var15.joinVoiceButton;
                var24 = var24.icon;
                var24 = var24.gameSize;
                var21.size = var24;
                var20 = var23.bind(var2)(var22, var21);
            case 1176:
                var6.end = var20;
                var6.connected = var19;
                var6.fontScale = var18;
                var6.isSubscriptionGated = var17;
                var6.needSubscriptionToAccess = var16;
                var16 = true;
                var6.showGuildBadgeIcon = var16;
                var9 = var9.bind(var2)(var6);
                var6 = new Array(2);
                var6[0] = var9;
                var7 = var7.length;
                var7 = var7 > var8;
                var5 = null;
                if (!var7) {
                    _fun110129_ip = 1342;
                    continue _fun110129
                }
            case 1234:
                var9 = _closure1_slot14;
                var8 = _closure1_slot5;
                var7 = {};
                var16 = var11.voiceUsers;
                var11 = new Array(2);
                var11[0] = var16;
                var15 = var15.voiceUsers;
                var15 = var15.margin;
                var11[1] = var15;
                var7.style = var11;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 47;
                var10 = var15[var10];
                var11 = var11.bind(var2)(var10);
                var10 = {};
                var10.users = var14;
                var14 = 5;
                var10.max = var14;
                var13 = var13.guild_id;
                var10.guildId = var13;
                var10.audienceCount = var12;
                var10 = var9.bind(var2)(var11, var10);
                var7.children = var10;
                var5 = var9.bind(var2)(var8, var7);
            case 1342:
                var6[1] = var5;
                var5 = 'children';
                var0[var5] = var6;
                var0 = var4.bind(var2)(var3, var0);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot18 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.channel;
        var _closure2_slot0 = var7;
        var4 = var0.customSubtitle;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 32;
        var6 = var8[var2];
        var3 = undefined;
        var11 = var5.bind(var3)(var6);
        var10 = var11.useStateFromStores;
        var6 = _closure1_slot10;
        var9 = new Array(1);
        var9[0] = var6;
        var6 = function() { // Environment: var1
            var2 = _closure1_slot10;
            var1 = var2.getVoiceStatesForChannel;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var10.bind(var11)(var9, var6);
        var2 = var8[var2];
        var8 = var5.bind(var3)(var2);
        var5 = var8.useStateFromStoresArray;
        var9 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var9;
        var1 = function() { // Environment: var1
            var6 = _closure1_slot6;
            var2 = var6.getMutableParticipants;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var0 = 34;
            var0 = var5[var0];
            var3 = undefined;
            var0 = var4.bind(var3)(var0);
            var0 = var0.StageChannelParticipantNamedIndex;
            var0 = var0.SPEAKER;
            var2 = var2.bind(var6)(var1, var0);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 34;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.StageChannelParticipantTypes;
                var0 = var0.VOICE;
                var0 = var1 === var0;
                return var0;
            };
            var2 = var1.bind(var2)(var0);
            var1 = var2.map;
            var0 = 48;
            var0 = var5[var0];
            var0 = var4.bind(var3)(var0);
            var0 = var0.transformParticipantToSortedVoiceState;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var5.bind(var8)(var2, var1);
        var2 = _closure1_slot14;
        var1 = _closure1_slot18;
        var0 = {};
        var0.channel = var7;
        var0.voiceStates = var6;
        var0.speakerVoiceStates = var5;
        var0.subtitle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 49;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/shared/VoiceOrStageChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 4209, 1377, 1676, 4267, 3485, 660, 1379, 4837, 33, 1234, 5873, 1307, 7838, 4754, 4787, 7405, 1220, 5577, 14114, 9057, 1297, 671, 478, 3205, 8672, 3165, 14123, 7848, 13134, 566, 8371, 5624, 13371, 14136, 4755, 14132, 4049, 8745, 14124, 4865, 14134, 14130, 13376, 11620, 14139, 13380, 2]);