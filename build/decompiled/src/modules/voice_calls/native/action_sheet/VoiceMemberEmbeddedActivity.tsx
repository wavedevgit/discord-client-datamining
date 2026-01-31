// modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var1 = arg0;
        var0 = 32;
        var2 = var1 - var0;
        var0 = {};
        var0.width = var2;
        var1 = _closure1_slot14;
        var1 = var2 / var1;
        var0.height = var1;
        return var0;
    };
    var _closure1_slot16 = var0;
    var1 = function arg0() {
        var2 = _closure1_slot16;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        var1 = var0.height;
        var0 = 40;
        var1 = var0 + var1;
        var0 = 12;
        var1 = var1 + var0;
        var0 = 16;
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot17 = var1;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var8 = true;
    var4.value = var8;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.getThemedRippleConfig;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.jsx;
    var _closure1_slot10 = var9;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AvatarSizes;
    var13 = var4.XSMALL;
    var _closure1_slot12 = var13;
    var4 = {};
    var4.foreground = var8;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var10 = {
        'width': 32,
        'height': 32,
        'marginRight': 16,
        'borderRadius': 4
    };
    var4 = 1.7777777777777777;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var14 = 'center';
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var4.pressableOpacity = var9;
    var12 = 12;
    var9 = {
        'paddingTop': 12,
        'paddingBottom': 16,
        'flexDirection': 'column',
        'display': 'flex',
        'justifyContent': 'flex-start'
    };
    var4.voiceMemberItemRow = var9;
    var9 = {
        'paddingHorizontal': 16,
        'alignItems': 'center'
    };
    var4.innerRow = var9;
    var9 = {
        'marginBottom': 8,
        'flexDirection': 'row',
        'display': 'flex'
    };
    var4.activityDetails = var9;
    var4.appIcon = var10;
    var9 = {};
    var19 = var9;
    var18 = var10;
    var10 = copyDataProperties(var19, var18);
    var10 = 11;
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var16 = var15.INTERACTIVE_TEXT_DEFAULT;
    var15 = 'tintColor';
    var9[var15] = var16;
    var4.appIconPlaceholder = var9;
    var9 = {
        'flex': 1,
        'paddingRight': 4
    };
    var4.centerGroup = var9;
    var9 = {};
    var15 = 20;
    var9.lineHeight = var15;
    var4.applicationName = var9;
    var9 = {
        'borderRadius': 100,
        'paddingHorizontal': 24,
        'alignSelf': 'center'
    };
    var4.joinButton = var9;
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'display': 'flex',
        'width': '100%',
        'paddingHorizontal': 16
    };
    var4.joinButtonContainer = var9;
    var9 = {};
    var9.justifyContent = var14;
    var4.backgroundImageContainer = var9;
    var9 = {};
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.AVATAR_SIZE_MAP;
    var12 = var12[var13];
    var9.height = var12;
    var4.overflow = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var12;
    var4.overflowBackgroundColor = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var10;
    var4.overflowBackgroundColorActionSheet = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun91583: for (var _fun91583_ip = 0;;) switch (_fun91583_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.embeddedActivity;
                var7 = var0.channelId;
                var _closure2_slot0 = var7;
                var1 = var0.onItemPress;
                var _closure2_slot1 = var1;
                var16 = var0.isActionSheet;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var0 = function() {
                    _fun91584: for (var _fun91584_ip = 0;;) switch (_fun91584_ip) {
                        case 0:
                            var4 = _closure2_slot1;
                            var3 = _closure2_slot3;
                            var0 = _closure2_slot2;
                            var6 = null;
                            var1 = var6 != var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (!var1) {
                                _fun91584_ip = 32;
                                continue _fun91584
                            }
                        case 28:
                            var2 = _closure2_slot2;
                        case 32:
                            var1 = _closure2_slot4;
                            var6 = var6 != var1;
                            var1 = undefined;
                            if (!var6) {
                                _fun91584_ip = 49;
                                continue _fun91584
                            }
                        case 45:
                            var1 = _closure2_slot4;
                        case 49:
                            var1 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                    }
                };
                var _closure2_slot8 = var0;
                var0 = _closure1_slot15;
                var24 = var0.bind(var4)();
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 13;
                var1 = var0[var1];
                var2 = var2.bind(var4)(var1);
                var3 = var5.applicationId;
                var1 = new Array(1);
                var1[0] = var3;
                var3 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 1;
                var2 = var2.bind(var4)(var3, var1);
                var1 = 0;
                var19 = var2[var1];
                _closure2_slot2 = var19;
                var2 = global;
                var6 = var2.Array;
                var3 = var6.from;
                var1 = var5.userIds;
                var6 = var3.bind(var6)(var1);
                var3 = var6.map;
                var1 = function(arg0) { // Environment: var25
                    var2 = _closure1_slot8;
                    var1 = var2.getUser;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var3.bind(var6)(var1);
                var6 = var8.filter;
                var3 = _closure1_slot0;
                var1 = 14;
                var1 = var0[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.isNotNullish;
                var13 = var6.bind(var8)(var1);
                var1 = 15;
                var6 = var0[var1];
                var10 = var3.bind(var4)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var25
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var9.bind(var10)(var8, var6);
                _closure2_slot3 = var6;
                var1 = var0[var1];
                var9 = var3.bind(var4)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var25
                    _fun91587: for (var _fun91587_ip = 0;;) switch (_fun91587_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun91587_ip = 62;
                                continue _fun91587
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.getEmbeddedActivitiesForChannel;
                            var1 = _closure2_slot3;
                            var1 = var1.id;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                _fun91588: for (var _fun91588_ip = 0;;) switch (_fun91588_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.applicationId;
                                        var3 = _closure2_slot2;
                                        var0 = null;
                                        var3 = var0 == var3;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun91588_ip = 35;
                                            continue _fun91588
                                        }
                                    case 26:
                                        var2 = _closure2_slot2;
                                        var0 = var2.id;
                                    case 35:
                                        var0 = var1 === var0;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 62:
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var6, var1);
                _closure2_slot4 = var1;
                var6 = 16;
                var6 = var0[var6];
                var8 = var3.bind(var4)(var6);
                var6 = var8.getEmbeddedActivityLocationGuildId;
                var5 = var5.location;
                var5 = var6.bind(var8)(var5);
                var _closure2_slot5 = var5;
                var18 = 17;
                var0 = var0[var18];
                var6 = var3.bind(var4)(var0);
                var5 = var6.useEmbeddedActivityJoinability;
                var3 = {};
                var8 = _closure1_slot8;
                var0 = var8.getCurrentUser;
                var9 = var0.bind(var8)();
                var0 = null;
                var10 = var0 == var9;
                var8 = undefined;
                if (var10) {
                    _fun91583_ip = 384;
                    continue _fun91583
                }
            case 379:
                var8 = var9.id;
            case 384:
                var3.userId = var8;
                var3.channelId = var7;
                var3.application = var19;
                var17 = var5.bind(var6)(var3);
                _closure2_slot6 = var17;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 18;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var6 = var3.width;
                var5 = var2.Math;
                var3 = var5.min;
                var2 = _closure1_slot9;
                var2 = var3.bind(var5)(var2, var6);
                var3 = _closure1_slot17;
                var10 = var3.bind(var4)(var2);
                if (!(var0 != var19)) {
                    _fun91583_ip = 1409;
                    continue _fun91583
                }
            case 471:
                if (!(var0 != var1)) {
                    _fun91583_ip = 1409;
                    continue _fun91583
                }
            case 478:
                var3 = var19.getIconSource;
                var1 = 32;
                var11 = var3.bind(var19)(var1);
                if (!(var0 == var11)) {
                    _fun91583_ip = 516;
                    continue _fun91583
                }
            case 496:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 19;
                var1 = var5[var1];
                var11 = var3.bind(var4)(var1);
            case 516:
                var26 = var19.name;
                var1 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot6;
                    var1.embeddedActivityJoinability = var4;
                    var3 = _closure2_slot8;
                    var1.handleCanJoin = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                _closure2_slot7 = var1;
                var1 = _closure1_slot16;
                var20 = var1.bind(var4)(var2);
                var3 = _closure1_slot10;
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 21;
                var1 = var15[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var5 = 'button';
                var1.accessibilityRole = var5;
                var22 = 22;
                var5 = var15[var22];
                var5 = var6.bind(var4)(var5);
                var8 = var5.intl;
                var7 = var8.formatToPlainString;
                var5 = var15[var22];
                var5 = var6.bind(var4)(var5);
                var5 = var5.t;
                var6 = var5.Yw5Hr2;
                var5 = {};
                var5.applicationName = var26;
                var5 = var7.bind(var8)(var6, var5);
                var1.accessibilityLabel = var5;
                var5 = _closure1_slot13;
                var1.androidRippleConfig = var5;
                var5 = function() {
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1.onPress = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var24.voiceMemberItemRow;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var9.height = var10;
                var8[1] = var9;
                var5.style = var8;
                var8 = {};
                var10 = var24.innerRow;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var24.activityDetails;
                var9[1] = var10;
                var8.style = var9;
                var10 = _closure1_slot4;
                var9 = {};
                var14 = _closure1_slot1;
                var12 = 19;
                var12 = var15[var12];
                var12 = var14.bind(var4)(var12);
                if (!(var11 !== var12)) {
                    _fun91583_ip = 762;
                    continue _fun91583
                }
            case 754:
                var12 = var24.appIcon;
                _fun91583_ip = 768;
                continue _fun91583;
            case 762:
                var12 = var24.appIconPlaceholder;
            case 768:
                var9.style = var12;
                var9.source = var11;
                var10 = var3.bind(var4)(var10, var9);
                var9 = new Array(3);
                var9[0] = var10;
                var12 = _closure1_slot10;
                var14 = _closure1_slot5;
                var11 = {};
                var10 = var24.centerGroup;
                var11.style = var10;
                var21 = _closure1_slot0;
                var10 = _closure1_slot2;
                var15 = 23;
                var15 = var10[var15];
                var15 = var21.bind(var4)(var15);
                var21 = var15.Text;
                var15 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var27 = var24.applicationName;
                var15.style = var27;
                var15.children = var26;
                var15 = var12.bind(var4)(var21, var15);
                var11.children = var15;
                var11 = var12.bind(var4)(var14, var11);
                var9[1] = var11;
                var11 = _closure1_slot1;
                var14 = 24;
                var10 = var10[var14];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var15 = -6;
                var10.offsetAmount = var15;
                var21 = var24.overflow;
                var15 = new Array(2);
                var15[0] = var21;
                if (var16) {
                    _fun91583_ip = 939;
                    continue _fun91583
                }
            case 931:
                var16 = var24.overflowBackgroundColor;
                _fun91583_ip = 945;
                continue _fun91583;
            case 939:
                var16 = var24.overflowBackgroundColorActionSheet;
            case 945:
                var15[1] = var16;
                var10.overflowStyle = var15;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var14 = var15[var14];
                var14 = var16.bind(var4)(var14);
                var14 = var14.OverflowText;
                var10.overflowComponent = var14;
                var10.items = var13;
                var13 = 5;
                var10.max = var13;
                var13 = function arg0, arg1() {
                    _fun91591: for (var _fun91591_ip = 0;;) switch (_fun91591_ip) {
                        case 0:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var8 = 12;
                            var0 = var0[var8];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = arg0;
                            var0.user = var4;
                            var4 = _closure2_slot5;
                            var0.guildId = var4;
                            var4 = _closure1_slot12;
                            var0.size = var4;
                            var5 = arg1;
                            var4 = undefined;
                            if (var5) {
                                _fun91591_ip = 157;
                                continue _fun91591
                            }
                        case 65:
                            var5 = {};
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var10 = var6[var8];
                            var10 = var7.bind(var2)(var10);
                            var10 = var10.AVATAR_SIZE_MAP;
                            var9 = _closure1_slot12;
                            var10 = var10[var9];
                            var9 = 2;
                            var10 = var10 / var9;
                            var9 = 3;
                            var9 = var10 + var9;
                            var5.radius = var9;
                            var6 = var6[var8];
                            var6 = var7.bind(var2)(var6);
                            var6 = var6.CutoutDirection;
                            var6 = var6.RIGHT;
                            var5.direction = var6;
                            var6 = -6;
                            var5.inset = var6;
                            var4 = var5;
                        case 157:
                            var0.cutout = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var10.renderItem = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[2] = var10;
                var8.children = var9;
                var9 = var7.bind(var4)(var6, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot11;
                var10 = _closure1_slot5;
                var9 = {};
                var13 = var24.innerRow;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var14 = var20.height;
                var13.height = var14;
                var14 = 'center';
                var13.justifyContent = var14;
                var12[1] = var13;
                var9.style = var12;
                var14 = _closure1_slot10;
                var13 = _closure1_slot1;
                var12 = 25;
                var12 = var15[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12.application = var19;
                var19 = {};
                var21 = 'absolute';
                var19.position = var21;
                var21 = var20.width;
                var19.width = var21;
                var20 = var20.height;
                var19.height = var20;
                var12.dimensionsStyle = var19;
                var19 = 8;
                var12.borderRadius = var19;
                var19 = 'contain';
                var12.resizeMode = var19;
                var13 = var14.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var19 = var24.joinButtonContainer;
                var13.style = var19;
                var15 = var15[var18];
                var15 = var16.bind(var4)(var15);
                var15 = var15.EmbeddedActivityJoinability;
                var16 = var15.CAN_JOIN;
                var15 = null;
                if (!(var17 === var16)) {
                    _fun91583_ip = 1359;
                    continue _fun91583
                }
            case 1214:
                var18 = _closure1_slot10;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 26;
                var16 = var21[var19];
                var17 = var20.bind(var4)(var16);
                var16 = {};
                var25 = function() {
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var16.onPress = var25;
                var24 = var24.joinButton;
                var16.style = var24;
                var25 = _closure1_slot0;
                var23 = var21[var22];
                var23 = var25.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var21[var22];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22["4i2vj+"];
                var22 = var23.bind(var24)(var22);
                var16.text = var22;
                var19 = var21[var19];
                var19 = var20.bind(var4)(var19);
                var19 = var19.Colors;
                var19 = var19.GREY;
                var16.color = var19;
                var19 = true;
                var16.shrink = var19;
                var19 = 100;
                var16.cornerRadius = var19;
                var15 = var18.bind(var4)(var17, var16);
            case 1359:
                var13.children = var15;
                var13 = var14.bind(var4)(var10, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1409:
                return var0;
        }
    };
    var2.default = var3;
    var2.calculateActivityRowHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 1372, 1613, 4895, 4837, 33, 5414, 1297, 671, 5416, 6841, 1304, 566, 3040, 7923, 1464, 6805, 7922, 4865, 1234, 3900, 8031, 8029, 4836, 2]);