// modules/voice_calls/native/action_sheet/VoiceMemberList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.title;
        var0 = _closure1_slot25;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot22;
        var1 = _closure1_slot9;
        var0 = {};
        var5 = var7.sectionContainer;
        var0.style = var5;
        var6 = _closure1_slot22;
        var5 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 25;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-xs/bold',
            'color': 'text-default'
        };
        var7 = var7.sectionTitle;
        var4.style = var7;
        var7 = var8.toUpperCase;
        var7 = var7.bind(var8)();
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun91608: for (var _fun91608_ip = 0;;) switch (_fun91608_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.url;
                var2 = undefined;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun91608_ip = 26;
                    continue _fun91608
                }
            case 17:
                var1 = var1.applicationId;
                var0 = var2 !== var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var8 = 2;
    var3 = var5[var8];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot6 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.SectionList;
    var _closure1_slot7 = var11;
    var11 = var3.useWindowDimensions;
    var _closure1_slot8 = var11;
    var3 = var3.View;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticsPages;
    var _closure1_slot16 = var7;
    var7 = var3.InstantInviteSources;
    var _closure1_slot17 = var7;
    var3 = var3.Permissions;
    var _closure1_slot18 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot19 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FORM_ROW_VERTICAL_PADDING;
    var _closure1_slot20 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot21 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot22 = var7;
    var7 = var3.jsxs;
    var _closure1_slot23 = var7;
    var3 = var3.Fragment;
    var _closure1_slot24 = var3;
    var3 = 15;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var7 = var11.createStyles;
    var3 = {};
    var12 = {
        'flex': 1,
        'flexShrink': 1
    };
    var3.container = var12;
    var13 = 16;
    var12 = {
        'paddingTop': 16,
        'paddingHorizontal': 16
    };
    var3.sectionContainer = var12;
    var12 = {};
    var12.lineHeight = var13;
    var3.sectionTitle = var12;
    var12 = {
        'overflow': 'hidden',
        'flexGrow': 1,
        'flexShrink': 1,
        'minHeight': 1
    };
    var3.voiceChannelContainer = var12;
    var12 = {};
    var12.marginLeft = var10;
    var3.headerFormDivider = var12;
    var12 = {};
    var12.marginHorizontal = var13;
    var3.rowFormDivider = var12;
    var3 = var7.bind(var11)(var3);
    var _closure1_slot25 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = var0.channel;
        var3 = _closure1_slot22;
        var1 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 16;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.channel = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot26 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun91610: for (var _fun91610_ip = 0;;) switch (_fun91610_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 17;
                var1 = var5[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.bind(var4)(var0);
                var2 = _closure1_slot0;
                var1 = 18;
                var1 = var5[var1];
                var6 = var2.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot13;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    _fun91611: for (var _fun91611_ip = 0;;) switch (_fun91611_ip) {
                        case 0:
                            var4 = _closure1_slot13;
                            var3 = var4.can;
                            var0 = _closure1_slot18;
                            var2 = var0.CREATE_INSTANT_INVITE;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var0);
                            if (var0) {
                                _fun91611_ip = 53;
                                continue _fun91611
                            }
                        case 39:
                            var2 = _closure2_slot0;
                            var1 = var2.isPrivate;
                            var0 = var1.bind(var2)();
                        case 53:
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var2, var0, var1);
                var0 = null;
                if (var3) {
                    _fun91610_ip = 410;
                    continue _fun91610
                }
            case 107:
                var0 = null;
                if (!var1) {
                    _fun91610_ip = 410;
                    continue _fun91610
                }
            case 115:
                var3 = _closure1_slot23;
                var1 = _closure1_slot6;
                var2 = var1.Fragment;
                var1 = {};
                var7 = _closure1_slot22;
                var6 = _closure1_slot28;
                var5 = {};
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot22;
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var6 = 19;
                var6 = var14[var6];
                var6 = var13.bind(var4)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var15 = _closure1_slot22;
                var16 = 20;
                var10 = var14[var16];
                var10 = var13.bind(var4)(var10);
                var12 = var10.CircularIconButton;
                var11 = {};
                var10 = 21;
                var18 = var14[var10];
                var18 = var13.bind(var4)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var14[var10];
                var18 = var13.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18["6Qgrev"];
                var18 = var19.bind(var20)(var18);
                var11.accessibilityLabel = var18;
                var18 = true;
                var11.accessibilityHidden = var18;
                var18 = _closure1_slot1;
                var17 = 22;
                var17 = var14[var17];
                var17 = var18.bind(var4)(var17);
                var11.source = var17;
                var16 = var14[var16];
                var16 = var13.bind(var4)(var16);
                var16 = var16.CircularIconButton;
                var16 = var16.Sizes;
                var16 = var16.MEDIUM_32;
                var11.size = var16;
                var11 = var15.bind(var4)(var12, var11);
                var6.leading = var11;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["6Qgrev"];
                var10 = var11.bind(var12)(var10);
                var6.label = var10;
                var9 = function() {
                    _fun91612: for (var _fun91612_ip = 0;;) switch (_fun91612_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.isPrivate;
                            var2 = var0.bind(var2)();
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            if (var2) {
                                _fun91612_ip = 79;
                                continue _fun91612
                            }
                        case 31:
                            var2 = 24;
                            var5 = var3[var2];
                            var2 = undefined;
                            var7 = var4.bind(var2)(var5);
                            var6 = var7.showInstantInviteActionSheet;
                            var5 = _closure2_slot0;
                            var2 = {};
                            var8 = _closure1_slot17;
                            var8 = var8.VOICE_CHANNEL;
                            var2.source = var8;
                            var2 = var6.bind(var7)(var5, var2);
                            _fun91612_ip = 124;
                            continue _fun91612;
                        case 79:
                            var2 = 23;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.navigateToNewGroupDM;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = _closure1_slot16;
                            var0 = var0.CHANNEL_CALL;
                            var0 = var2.bind(var3)(var1, var0);
                        case 124:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6.onPress = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 410:
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot27 = var3;
    var3 = function() {
        var1 = _closure1_slot25;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot22;
        var1 = _closure1_slot0;
        var5 = _closure1_slot3;
        var0 = 19;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.FormDivider;
        var0 = {};
        var4 = var4.rowFormDivider;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot28 = var3;
    var3 = function arg0() {
        _fun91614: for (var _fun91614_ip = 0;;) switch (_fun91614_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.section;
                var1 = var0.title;
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun91614_ip = 47;
                    continue _fun91614
                }
            case 22:
                var4 = _closure1_slot22;
                var3 = _closure1_slot33;
                var2 = {};
                var2.title = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 47:
                return var0;
        }
    };
    var _closure1_slot29 = var3;
    var3 = {};
    var3.VOICE = var10;
    var7 = 'VOICE';
    var3[var10] = var7;
    var3.SPECTATING = var9;
    var7 = 'SPECTATING';
    var3[var9] = var7;
    var3.DISCONNECTED = var8;
    var7 = 'DISCONNECTED';
    var3[var8] = var7;
    var _closure1_slot30 = var3;
    var3 = function arg0() {
        _fun91615: for (var _fun91615_ip = 0;;) switch (_fun91615_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot11;
                var2 = var1 instanceof var2;
                if (var2) {
                    _fun91615_ip = 50;
                    continue _fun91615
                }
            case 17:
                var2 = _closure1_slot34;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                if (var0) {
                    _fun91615_ip = 43;
                    continue _fun91615
                }
            case 31:
                var0 = var1.user;
                var0 = var0.id;
                _fun91615_ip = 48;
                continue _fun91615;
            case 43:
                var0 = var1.applicationId;
            case 48:
                _fun91615_ip = 55;
                continue _fun91615;
            case 50:
                var0 = var1.id;
            case 55:
                return var0;
        }
    };
    var _closure1_slot31 = var3;
    var3 = function arg0() {
        _fun91616: for (var _fun91616_ip = 0;;) switch (_fun91616_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.item;
                var6 = var0.channelId;
                var10 = var0.onPressUser;
                var4 = var0.isActionSheet;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 26;
                var2 = var8[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var5.useAnalyticsContext;
                var2 = var2.bind(var5)();
                var _closure2_slot1 = var2;
                var5 = _closure1_slot1;
                var2 = 27;
                var2 = var8[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var2 = var2.analyticsLocations;
                var _closure2_slot2 = var2;
                var2 = _closure1_slot34;
                var2 = var2.bind(var3)(var7);
                if (var2) {
                    _fun91616_ip = 174;
                    continue _fun91616
                }
            case 112:
                var8 = _closure1_slot22;
                var5 = _closure1_slot1;
                var9 = _closure1_slot3;
                var2 = 33;
                var2 = var9[var2];
                var5 = var5.bind(var3)(var2);
                var2 = {};
                var12 = var2;
                var11 = var7;
                var9 = copyDataProperties(var12, var11);
                var9 = 'onPress';
                var2[var9] = var10;
                var9 = 'isActionSheet';
                var2[var9] = var4;
                var2 = var8.bind(var3)(var5, var2);
                return var2;
            case 174:
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var1 = function*(arg0, arg1, arg2) { // Environment: var0
                        var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                            _fun91619: for (var _fun91619_ip = 0;;) switch (_fun91619_ip) {
                                case 0:
                                    StartGenerator();
                                    var4 = arg0;
                                    var3 = arg2;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun91619_ip = 232;
                                        continue _fun91619
                                    }
                                case 16:
                                    var2 = null;
                                    var1 = var2 != var4;
                                    if (!var1) {
                                        _fun91619_ip = 32;
                                        continue _fun91619
                                    }
                                case 25:
                                    var5 = arg1;
                                    var1 = var2 != var5;
                                case 32:
                                    if (!var1) {
                                        _fun91619_ip = 39;
                                        continue _fun91619
                                    }
                                case 35:
                                    var1 = var2 != var3;
                                case 39:
                                    if (!var1) {
                                        _fun91619_ip = 224;
                                        continue _fun91619
                                    }
                                case 45:
                                    var6 = _closure1_slot2;
                                    var7 = _closure1_slot3;
                                    var1 = 28;
                                    var1 = var7[var1];
                                    var5 = undefined;
                                    var6 = var6.bind(var5)(var1);
                                    var1 = var6.dismissGlobalKeyboard;
                                    var1 = var1.bind(var6)();
                                    var6 = _closure1_slot1;
                                    var1 = 29;
                                    var1 = var7[var1];
                                    var9 = var6.bind(var5)(var1);
                                    var8 = var9.selectVoiceChannel;
                                    var1 = var4.id;
                                    var1 = var8.bind(var9)(var1);
                                    var1 = 30;
                                    var1 = var7[var1];
                                    var6 = var6.bind(var5)(var1);
                                    var1 = {};
                                    var3 = var3.applicationId;
                                    var1.applicationId = var3;
                                    var3 = var4.id;
                                    var1.activityChannelId = var3;
                                    var7 = _closure2_slot1;
                                    var7 = var7.location;
                                    var1.locationObject = var7;
                                    var7 = _closure2_slot2;
                                    var1.analyticsLocations = var7;
                                    var1 = var6.bind(var5)(var1);
                                    SaveGenerator(address = 180);
                                case 178:
                                    return var1;
                                case 180:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun91619_ip = 229;
                                        continue _fun91619
                                    }
                                case 186:
                                    var3 = _closure2_slot0;
                                    if (!var3) {
                                        _fun91619_ip = 224;
                                        continue _fun91619
                                    }
                                case 193:
                                    var3 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var2 = 31;
                                    var2 = var6[var2];
                                    var3 = var3.bind(var5)(var2);
                                    var2 = var3.hideVoiceChannelActionSheet;
                                    var2 = var2.bind(var3)(var4);
                                case 224:
                                    var2 = undefined;
                                    return var2;
                                case 229:
                                    return var1;
                                case 232:
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
                var5 = var1.bind(var3)();
                var2 = _closure1_slot22;
                var1 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 32;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.embeddedActivity = var7;
                var0.channelId = var6;
                var0.onItemPress = var5;
                var0.isActionSheet = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot32 = var3;
    var3 = var6.forwardRef;
    var1 = function arg0, arg1() {
        _fun91621: for (var _fun91621_ip = 0;;) switch (_fun91621_ip) {
            case 0:
                var7 = arg0;
                var18 = var7.channel;
                var _closure2_slot0 = var18;
                var0 = var7.isActionSheet;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun91621_ip = 28;
                    continue _fun91621
                }
            case 26:
                var0 = true;
            case 28:
                var _closure2_slot1 = var0;
                var5 = var7.disableFooter;
                if (!(var5 === var4)) {
                    _fun91621_ip = 44;
                    continue _fun91621
                }
            case 42:
                var5 = false;
            case 44:
                var3 = {
                    'channel': 0,
                    'isActionSheet': 0,
                    'disableFooter': 0
                };
                var2 = null;
                var26 = var3;
                var25 = null;
                var1 = silentSetPrototypeOf(var26, var25);
                var6 = 0;
                var26 = {};
                var25 = var7;
                var24 = var3;
                var13 = copyDataProperties(var26, var25, var24);
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var1 = _closure1_slot25;
                var15 = var1.bind(var4)();
                _closure2_slot2 = var15;
                var8 = _closure1_slot1;
                var17 = _closure1_slot3;
                var1 = 27;
                var1 = var17[var1];
                var1 = var8.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var1 = var1.analyticsLocations;
                _closure2_slot3 = var1;
                var3 = _closure1_slot8;
                var3 = var3.bind(var4)();
                var14 = var3.width;
                var7 = global;
                var11 = var7.Math;
                var10 = var11.min;
                var3 = _closure1_slot19;
                var3 = var10.bind(var11)(var14, var3);
                _closure2_slot4 = var3;
                var16 = _closure1_slot0;
                var14 = 18;
                var3 = var17[var14];
                var20 = var16.bind(var4)(var3);
                var19 = var20.useStateFromStores;
                var3 = _closure1_slot15;
                var11 = new Array(1);
                var11[0] = var3;
                var10 = new Array(1);
                var10[0] = var18;
                var3 = function() { // Environment: var12
                    var2 = _closure1_slot15;
                    var1 = var2.getVoiceStatesForChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var19.bind(var20)(var11, var3, var10);
                var3 = 34;
                var3 = var17[var3];
                var3 = var8.bind(var4)(var3);
                var10 = var3.bind(var4)(var18);
                _closure2_slot5 = var10;
                var3 = var17[var14];
                var20 = var16.bind(var4)(var3);
                var19 = var20.useStateFromStoresArray;
                var3 = _closure1_slot12;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var12
                    _fun91623: for (var _fun91623_ip = 0;;) switch (_fun91623_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun91623_ip = 19;
                                continue _fun91623
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun91623_ip = 41;
                            continue _fun91623;
                        case 19:
                            var3 = _closure1_slot12;
                            var2 = var3.getViewerIds;
                            var1 = _closure2_slot5;
                            var0 = var2.bind(var3)(var1);
                        case 41:
                            return var0;
                    }
                };
                var8 = var19.bind(var20)(var8, var3);
                _closure2_slot6 = var8;
                var3 = 23;
                var3 = var17[var3];
                var20 = var16.bind(var4)(var3);
                var19 = var20.useIsModalOpen;
                var3 = 31;
                var3 = var17[var3];
                var22 = var16.bind(var4)(var3);
                var21 = var22.getVoiceChannelKey;
                var3 = var18.id;
                var3 = var21.bind(var22)(var3);
                var3 = var19.bind(var20)(var3);
                var14 = var17[var14];
                var19 = var16.bind(var4)(var14);
                var17 = var19.useStateFromStores;
                var14 = _closure1_slot10;
                var16 = new Array(1);
                var16[0] = var14;
                var14 = function() { // Environment: var12
                    var2 = _closure1_slot10;
                    var1 = var2.getEmbeddedActivitiesForChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var17.bind(var19)(var16, var14);
                var17 = var7.Set;
                var14 = var11.map;
                var7 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var0 = var0.voiceState;
                    var0 = var0.userId;
                    return var0;
                };
                var26 = var14.bind(var11)(var7);
                var14 = var17.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var17
                    }
                });
                var27 = var14;
                var7 = new var27[var17](var26, var25);
                var7 = var7 instanceof Object ? var7 : var14;
                _closure2_slot7 = var7;
                var7 = var18.isPrivate;
                var7 = var7.bind(var18)();
                var20 = new Array(0);
                if (var7) {
                    _fun91621_ip = 487;
                    continue _fun91621
                }
            case 482:
                var7 = var20;
                _fun91621_ip = 512;
                continue _fun91621;
            case 487:
                var19 = var18.recipients;
                var17 = var19.reduce;
                var14 = function(arg0, arg1) { // Environment: var12
                    _fun91626: for (var _fun91626_ip = 0;;) switch (_fun91626_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure1_slot14;
                            var2 = var3.getUser;
                            var1 = arg1;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun91626_ip = 55;
                                continue _fun91626
                            }
                        case 33:
                            var5 = _closure2_slot7;
                            var4 = var5.has;
                            var3 = var2.id;
                            var1 = var4.bind(var5)(var3);
                        case 55:
                            if (var1) {
                                _fun91626_ip = 68;
                                continue _fun91626
                            }
                        case 58:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var2);
                        case 68:
                            return var0;
                    }
                };
                var7 = var17.bind(var19)(var14, var20);
            case 512:
                var14 = new Array(0);
                _closure2_slot8 = var14;
                if (!(var2 != var10)) {
                    _fun91621_ip = 531;
                    continue _fun91621
                }
            case 524:
                if (!(var2 != var8)) {
                    _fun91621_ip = 531;
                    continue _fun91621
                }
            case 528:
                if (var3) {
                    _fun91621_ip = 626;
                    continue _fun91621
                }
            case 531:
                var8 = var14.push;
                var3 = {};
                var10 = _closure1_slot30;
                var10 = var10.VOICE;
                var3.type = var10;
                var3.title = var2;
                var10 = var16.concat;
                var10 = var10.bind(var16)(var11);
                var3.data = var10;
                var3 = var8.bind(var14)(var3);
                var3 = var7.length;
                if (!(var3 > var6)) {
                    _fun91621_ip = 1052;
                    continue _fun91621
                }
            case 587:
                var8 = var14.push;
                var3 = {};
                var10 = _closure1_slot30;
                var10 = var10.DISCONNECTED;
                var3.type = var10;
                var3.title = var2;
                var3.data = var7;
                var3 = var8.bind(var14)(var3);
                _fun91621_ip = 1052;
                continue _fun91621;
            case 626:
                var8 = var11.find;
                var3 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var0 = var0.user;
                    var1 = var0.id;
                    var0 = _closure2_slot5;
                    var0 = var0.ownerId;
                    var0 = var1 === var0;
                    return var0;
                };
                var8 = var8.bind(var11)(var3);
                var10 = var2 == var8;
                var3 = undefined;
                if (var10) {
                    _fun91621_ip = 658;
                    continue _fun91621
                }
            case 652:
                var3 = var8.nick;
            case 658:
                var8 = var2 != var3;
                var22 = '';
                if (!var8) {
                    _fun91621_ip = 672;
                    continue _fun91621
                }
            case 669:
                var22 = var3;
            case 672:
                var8 = _closure1_slot1;
                var10 = _closure1_slot3;
                var3 = 35;
                var3 = var10[var3];
                var10 = var8.bind(var4)(var3);
                var8 = var10.partition;
                var3 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var0 = var0.user;
                    var2 = _closure2_slot6;
                    var1 = var2.includes;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var8.bind(var10)(var11, var3);
                var8 = _closure1_slot4;
                var3 = 2;
                var8 = var8.bind(var4)(var10, var3);
                var10 = var8[var6];
                var3 = 1;
                var11 = var8[var3];
                var3 = var10.length;
                if (!(var3 > var6)) {
                    _fun91621_ip = 842;
                    continue _fun91621
                }
            case 744:
                var8 = var14.push;
                var3 = {};
                var17 = _closure1_slot30;
                var17 = var17.SPECTATING;
                var3.type = var17;
                var19 = _closure1_slot0;
                var23 = _closure1_slot3;
                var17 = 21;
                var20 = var23[var17];
                var20 = var19.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.formatToPlainString;
                var17 = var23[var17];
                var17 = var19.bind(var4)(var17);
                var17 = var17.t;
                var19 = var17.Fb0eT9;
                var17 = {};
                var17.username = var22;
                var17 = var20.bind(var21)(var19, var17);
                var3.title = var17;
                var3.data = var10;
                var3 = var8.bind(var14)(var3);
            case 842:
                var3 = var11.length;
                if (!(var3 > var6)) {
                    _fun91621_ip = 952;
                    continue _fun91621
                }
            case 851:
                var8 = var14.push;
                var3 = {};
                var10 = _closure1_slot30;
                var10 = var10.VOICE;
                var3.type = var10;
                var20 = _closure1_slot0;
                var21 = _closure1_slot3;
                var10 = 21;
                var17 = var21[var10];
                var17 = var20.bind(var4)(var17);
                var19 = var17.intl;
                var17 = var19.string;
                var10 = var21[var10];
                var10 = var20.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.C7iIKB;
                var10 = var17.bind(var19)(var10);
                var3.title = var10;
                var10 = var16.concat;
                var10 = var10.bind(var16)(var11);
                var3.data = var10;
                var3 = var8.bind(var14)(var3);
            case 952:
                var3 = var7.length;
                if (!(var3 > var6)) {
                    _fun91621_ip = 1052;
                    continue _fun91621
                }
            case 961:
                var6 = var14.push;
                var3 = {};
                var8 = _closure1_slot30;
                var8 = var8.DISCONNECTED;
                var3.type = var8;
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var8 = 21;
                var10 = var17[var8];
                var10 = var16.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var17[var8];
                var8 = var16.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.BnSq1I;
                var8 = var10.bind(var11)(var8);
                var3.title = var8;
                var3.data = var7;
                var3 = var6.bind(var14)(var3);
            case 1052:
                var7 = _closure1_slot6;
                var6 = var7.useCallback;
                var8 = var18.id;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var1;
                var1 = function(arg0) { // Environment: var12
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 36;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var1 = 37;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var3 = arg0;
                    var3 = var3.id;
                    var1.userId = var3;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var4 = true;
                    var1.isVoiceContext = var4;
                    var3 = _closure2_slot3;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var6.bind(var7)(var1, var3);
                _closure2_slot9 = var1;
                var6 = var7.useCallback;
                var3 = new Array(3);
                var3[0] = var18;
                var3[1] = var0;
                var3[2] = var1;
                var1 = function(arg0) { // Environment: var12
                    _fun91630: for (var _fun91630_ip = 0;;) switch (_fun91630_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.item;
                            var0 = var0.section;
                            var3 = var0.type;
                            var0 = _closure1_slot30;
                            var0 = var0.VOICE;
                            if (!(var0 !== var3)) {
                                _fun91630_ip = 230;
                                continue _fun91630
                            }
                        case 38:
                            var0 = _closure1_slot30;
                            var0 = var0.SPECTATING;
                            if (!(var0 !== var3)) {
                                _fun91630_ip = 144;
                                continue _fun91630
                            }
                        case 52:
                            var0 = _closure1_slot30;
                            var0 = var0.DISCONNECTED;
                            if (!(var0 !== var3)) {
                                _fun91630_ip = 70;
                                continue _fun91630
                            }
                        case 66:
                            var0 = undefined;
                            return var0;
                        case 70:
                            var5 = _closure1_slot22;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 33;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var3.bind(var4)(var0);
                            var3 = var0.DisconnectedUserRow;
                            var0 = {};
                            var0.user = var1;
                            var7 = _closure2_slot0;
                            var0.channel = var7;
                            var7 = _closure2_slot1;
                            var0.isActionSheet = var7;
                            var6 = _closure2_slot9;
                            var0.onPress = var6;
                            var0 = var5.bind(var4)(var3, var0);
                            return var0;
                        case 144:
                            var5 = _closure1_slot22;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 33;
                            var0 = var4[var0];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var0);
                            var0 = {};
                            var10 = var0;
                            var9 = var1;
                            var6 = copyDataProperties(var10, var9);
                            var8 = _closure2_slot9;
                            var7 = 'onPress';
                            var0[var7] = var8;
                            var8 = true;
                            var7 = 'isSpectating';
                            var0[var7] = var8;
                            var7 = _closure2_slot1;
                            var6 = 'isActionSheet';
                            var0[var6] = var7;
                            var0 = var5.bind(var4)(var3, var0);
                            return var0;
                        case 230:
                            var0 = _closure1_slot11;
                            var3 = var1 instanceof var0;
                            var0 = null;
                            if (var3) {
                                _fun91630_ip = 299;
                                continue _fun91630
                            }
                        case 243:
                            var4 = _closure1_slot22;
                            var3 = _closure1_slot32;
                            var2 = {};
                            var2.item = var1;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var2.channelId = var5;
                            var5 = _closure2_slot9;
                            var2.onPressUser = var5;
                            var1 = _closure2_slot1;
                            var2.isActionSheet = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 299:
                            return var0;
                    }
                };
                var6 = var6.bind(var7)(var1, var3);
                _closure2_slot10 = var6;
                var3 = _closure1_slot22;
                if (var0) {
                    _fun91621_ip = 1276;
                    continue _fun91621
                }
            case 1143:
                var1 = _closure1_slot7;
                var0 = {};
                var7 = arg1;
                var0.ref = var7;
                var0.sections = var14;
                var7 = _closure1_slot29;
                var0.renderSectionHeader = var7;
                var0.renderItem = var6;
                var6 = _closure1_slot31;
                var0.keyExtractor = var6;
                var6 = _closure1_slot28;
                var0.ItemSeparatorComponent = var6;
                var2 = null;
                if (var5) {
                    _fun91621_ip = 1218;
                    continue _fun91621
                }
            case 1198:
                var7 = _closure1_slot22;
                var6 = _closure1_slot27;
                var5 = {};
                var5.channel = var18;
                var2 = var7.bind(var4)(var6, var5);
            case 1218:
                var0.ListFooterComponent = var2;
                var6 = _closure1_slot22;
                var5 = _closure1_slot26;
                var2 = {};
                var2.channel = var18;
                var2 = var6.bind(var4)(var5, var2);
                var0.ListHeaderComponent = var2;
                var2 = false;
                var0.stickySectionHeadersEnabled = var2;
                var26 = var0;
                var25 = var13;
                var2 = copyDataProperties(var26, var25);
                var0 = var3.bind(var4)(var1, var0);
                _fun91621_ip = 1561;
                continue _fun91621;
            case 1276:
                var11 = _closure1_slot0;
                var16 = _closure1_slot3;
                var1 = 38;
                var1 = var16[var1];
                var1 = var11.bind(var4)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var5 = _closure1_slot21;
                var5 = var5.DARK;
                var1.theme = var5;
                var7 = _closure1_slot23;
                var6 = _closure1_slot9;
                var5 = {};
                var8 = var15.container;
                var5.style = var8;
                var17 = _closure1_slot22;
                var8 = 39;
                var8 = var16[var8];
                var8 = var11.bind(var4)(var8);
                var10 = var8.VoiceChannelHeader;
                var8 = {};
                var8.channel = var18;
                var10 = var17.bind(var4)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var17 = _closure1_slot22;
                var10 = 19;
                var10 = var16[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.FormDivider;
                var10 = {};
                var18 = var15.headerFormDivider;
                var10.style = var18;
                var10 = var17.bind(var4)(var11, var10);
                var8[1] = var10;
                var11 = _closure1_slot22;
                var10 = _closure1_slot1;
                var9 = 40;
                var9 = var16[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var16 = true;
                var9.inActionSheet = var16;
                var15 = var15.voiceChannelContainer;
                var9.style = var15;
                var26 = var9;
                var25 = var13;
                var13 = copyDataProperties(var26, var25);
                var15 = function arg0, arg1() {
                    _fun91631: for (var _fun91631_ip = 0;;) switch (_fun91631_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure2_slot8;
                            var0 = var0[var4];
                            var1 = var0.data;
                            var0 = arg1;
                            var3 = var1[var0];
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun91631_ip = 150;
                                continue _fun91631
                            }
                        case 32:
                            var2 = _closure2_slot10;
                            var1 = {};
                            var1.item = var3;
                            var3 = _closure2_slot8;
                            var3 = var3[var4];
                            var1.section = var3;
                            var4 = undefined;
                            var7 = var2.bind(var4)(var1);
                            var3 = _closure1_slot23;
                            var2 = _closure1_slot24;
                            var1 = {};
                            var5 = new Array(2);
                            var5[0] = var7;
                            var8 = _closure1_slot22;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var6 = 19;
                            var6 = var10[var6];
                            var6 = var7.bind(var4)(var6);
                            var7 = var6.FormDivider;
                            var6 = {};
                            var9 = _closure2_slot2;
                            var9 = var9.rowFormDivider;
                            var6.style = var9;
                            var6 = var8.bind(var4)(var7, var6);
                            var5[1] = var6;
                            var1.children = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 150:
                            return var0;
                    }
                };
                var13 = 'renderItem';
                var9[var13] = var15;
                var15 = function arg0, arg1() {
                    _fun91632: for (var _fun91632_ip = 0;;) switch (_fun91632_ip) {
                        case 0:
                            var1 = arg1;
                            var8 = null;
                            if (!(var8 != var1)) {
                                _fun91632_ip = 233;
                                continue _fun91632
                            }
                        case 12:
                            var3 = _closure2_slot8;
                            var0 = arg0;
                            var0 = var3[var0];
                            var0 = var0.data;
                            var1 = var0[var1];
                            if (!(var8 != var1)) {
                                _fun91632_ip = 229;
                                continue _fun91632
                            }
                        case 42:
                            var0 = _closure1_slot20;
                            var6 = 32;
                            var7 = var0 + var6;
                            var0 = _closure1_slot11;
                            var4 = var1 instanceof var0;
                            var0 = var7;
                            if (var4) {
                                _fun91632_ip = 227;
                                continue _fun91632
                            }
                        case 73:
                            var4 = _closure1_slot34;
                            var5 = undefined;
                            var4 = var4.bind(var5)(var1);
                            if (var4) {
                                _fun91632_ip = 192;
                                continue _fun91632
                            }
                        case 87:
                            var4 = var1.voiceState;
                            var1 = var7;
                            if (!(var8 != var4)) {
                                _fun91632_ip = 190;
                                continue _fun91632
                            }
                        case 100:
                            var4 = var4.selfStream;
                            var1 = var7;
                            if (!var4) {
                                _fun91632_ip = 190;
                                continue _fun91632
                            }
                        case 112:
                            var11 = _closure2_slot4;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var4 = 33;
                            var9 = var10[var4];
                            var9 = var8.bind(var5)(var9);
                            var12 = var9.STREAM_PREVIEW_MARGIN;
                            var9 = 2;
                            var9 = var9 * var12;
                            var9 = var11 - var9;
                            var4 = var10[var4];
                            var4 = var8.bind(var5)(var4);
                            var8 = var4.STREAM_PREVIEW_MARGIN;
                            var4 = 0.5625;
                            var4 = var4 * var9;
                            var4 = var4 + var8;
                            var1 = var7 + var4;
                        case 190:
                            _fun91632_ip = 224;
                            continue _fun91632;
                        case 192:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.calculateActivityRowHeight;
                            var2 = _closure2_slot4;
                            var1 = var3.bind(var4)(var2);
                        case 224:
                            var0 = var1;
                        case 227:
                            return var0;
                        case 229:
                            var0 = 0;
                            return var0;
                        case 233:
                            var0 = 0;
                            return var0;
                    }
                };
                var13 = 'itemSize';
                var9[var13] = var15;
                var13 = var14.map;
                var12 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var0 = var0.data;
                    var0 = var0.length;
                    return var0;
                };
                var13 = var13.bind(var14)(var12);
                var12 = 'sections';
                var9[var12] = var13;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1561:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 41;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/action_sheet/VoiceMemberList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1371, 1628, 3714, 3091, 1621, 3526, 660, 4932, 4874, 483, 33, 1297, 11902, 8442, 566, 5378, 11907, 1234, 8646, 3919, 8328, 3941, 8042, 5726, 1582, 4231, 7963, 7876, 11908, 11909, 8593, 22, 3278, 7350, 3159, 11916, 6456, 2]);