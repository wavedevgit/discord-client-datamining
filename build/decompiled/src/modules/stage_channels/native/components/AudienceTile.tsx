// modules/stage_channels/native/components/AudienceTile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var0 = function(arg0) { // Original name: RaisedHandIcon, environment: var4
        _fun69225: for (var _fun69225_ip = 0;;) switch (_fun69225_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.rtsState;
                var0 = _closure1_slot8;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.RequestToSpeakStates;
                var0 = var0.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                var6 = var1 === var0;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                if (var6) {
                    _fun69225_ip = 94;
                    continue _fun69225
                }
            case 86:
                var7 = var0.PRIMARY_800;
                _fun69225_ip = 100;
                continue _fun69225;
            case 94:
                var7 = var0.WHITE;
            case 100:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var9 = var8.raisedHandContainer;
                var5 = new Array(2);
                var5[0] = var9;
                if (!var6) {
                    _fun69225_ip = 133;
                    continue _fun69225
                }
            case 127:
                var6 = var8.activeBackground;
            case 133:
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot6;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 7;
                var4 = var10[var4];
                var5 = var9.bind(var3)(var4);
                var4 = {};
                var8 = var8.raisedHand;
                var4.style = var8;
                var8 = 8;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var4.source = var8;
                var4.color = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var3 = var7[var0];
    var1 = arg3;
    var0 = undefined;
    var8 = var1.bind(var0)(var3);
    var1 = 1;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.useWindowDimensions;
    var _closure1_slot3 = var3;
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot6 = var3;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var7[var1];
    var5 = var6.bind(var0)(var1);
    var3 = var5.createStyles;
    var1 = {};
    var9 = {};
    var10 = 'visible';
    var9.overflow = var10;
    var1.touchableContainer = var9;
    var9 = {};
    var10 = 'center';
    var9.alignItems = var10;
    var1.container = var9;
    var9 = {
        'position': 'relative',
        'padding': 8,
        'paddingTop': 0,
        'paddingBottom': 4
    };
    var1.avatarContainer = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967288,
        'right': 0,
        'height': 24,
        'width': 24,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': 12,
        'borderWidth': 2
    };
    var10 = 5;
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.PRIMARY_800;
    var9.borderColor = var12;
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.backgroundColor = var12;
    var1.raisedHandContainer = var9;
    var9 = {};
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var9.backgroundColor = var12;
    var1.activeBackground = var9;
    var9 = {
        'height': 13,
        'width': 13,
        'alignItems': 'center',
        'justifyContent': 'center',
        'resizeMode': 'contain'
    };
    var1.raisedHand = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var1.nameplateContainer = var9;
    var9 = {};
    var12 = 14;
    var9.fontSize = var12;
    var10 = var7[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9.color = var10;
    var1.usernameText = var9;
    var9 = {};
    var10 = 0.5;
    var9.opacity = var10;
    var1.faded = var9;
    var3 = var3.bind(var5)(var1);
    var _closure1_slot8 = var3;
    var1 = function(arg0) { // Original name: getTileWidthStyle, environment: var4
        var1 = arg0;
        var0 = 46;
        var1 = var1 - var0;
        var0 = 4;
        var0 = var1 / var0;
        return var0;
    };
    var _closure1_slot9 = var1;
    var5 = var8.memo;
    var4 = function(arg0) { // Environment: var4
        _fun69227: for (var _fun69227_ip = 0;;) switch (_fun69227_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channel;
                var _closure2_slot0 = var0;
                var2 = var1.participant;
                var16 = var2.user;
                var _closure2_slot1 = var16;
                var18 = var2.rtsState;
                var12 = var2.blocked;
                var11 = var2.ignored;
                var20 = var1.theme;
                var1 = _closure1_slot8;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)();
                var2 = var1.width;
                var1 = _closure1_slot9;
                var21 = var1.bind(var3)(var2);
                var1 = var0.getGuildId;
                var22 = var1.bind(var0)();
                var _closure2_slot2 = var22;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var1 = var5[var1];
                var9 = var2.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var1;
                var6 = new Array(2);
                var6[0] = var22;
                var1 = var16.id;
                var6[1] = var1;
                var1 = function() { // Environment: var4
                    _fun69228: for (var _fun69228_ip = 0;;) switch (_fun69228_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Boolean;
                            var1 = _closure2_slot2;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun69228_ip = 75;
                                continue _fun69228
                            }
                        case 24:
                            var6 = _closure1_slot5;
                            var5 = var6.getMember;
                            var4 = _closure2_slot2;
                            var0 = _closure2_slot1;
                            var0 = var0.id;
                            var4 = var5.bind(var6)(var4, var0);
                            var5 = var3 == var4;
                            var0 = undefined;
                            if (var5) {
                                _fun69228_ip = 71;
                                continue _fun69228
                            }
                        case 65:
                            var0 = var4.premiumSince;
                        case 71:
                            var1 = var3 != var0;
                        case 75:
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var9 = var8.bind(var9)(var7, var1, var6);
                var1 = 10;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isRequestedToSpeakAll;
                var7 = var1.bind(var2)(var18);
                var2 = _closure1_slot1;
                var1 = 11;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getName;
                var0 = var0.id;
                var14 = var1.bind(var2)(var22, var0, var16);
                var19 = var12;
                if (var12) {
                    _fun69227_ip = 236;
                    continue _fun69227
                }
            case 233:
                var19 = var11;
            case 236:
                var2 = _closure1_slot7;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 12;
                var0 = var6[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.Pressable;
                var0 = {};
                var5 = 13;
                var13 = var6[var5];
                var13 = var8.bind(var3)(var13);
                var17 = var13.intl;
                var13 = var17.formatToPlainString;
                var5 = var6[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var8 = var5.QLMGhv;
                var5 = {};
                var5.name = var14;
                var5 = var13.bind(var17)(var8, var5);
                var0.accessibilityLabel = var5;
                var8 = var15.touchableContainer;
                var5 = new Array(3);
                var5[0] = var8;
                var8 = var15.container;
                var5[1] = var8;
                var8 = {};
                var8.width = var21;
                var5[2] = var8;
                var0.style = var5;
                var5 = 'button';
                var0.accessibilityRole = var5;
                var4 = function() { // Original name: onPress, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showUserProfile;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var1.userId = var5;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = var15.avatarContainer;
                var4.style = var8;
                var13 = _closure1_slot6;
                var8 = _closure1_slot1;
                var23 = 15;
                var6 = var6[var23];
                var8 = var8.bind(var3)(var6);
                var6 = {};
                var6.user = var16;
                var16 = null;
                var24 = var16 != var22;
                var17 = undefined;
                if (!var24) {
                    _fun69227_ip = 440;
                    continue _fun69227
                }
            case 437:
                var17 = var22;
            case 440:
                var6.guildId = var17;
                var22 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var23];
                var17 = var22.bind(var3)(var17);
                var17 = var17.AvatarSizes;
                var17 = var17.LARGE;
                var6.size = var17;
                var17 = var19;
                if (!var19) {
                    _fun69227_ip = 489;
                    continue _fun69227
                }
            case 483:
                var17 = var15.faded;
            case 489:
                var6.style = var17;
                var8 = var13.bind(var3)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                if (!var7) {
                    _fun69227_ip = 531;
                    continue _fun69227
                }
            case 510:
                var17 = _closure1_slot6;
                var13 = _closure1_slot10;
                var8 = {};
                var8.rtsState = var18;
                var7 = var17.bind(var3)(var13, var8);
            case 531:
                var6[1] = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var5 = {};
                var13 = var15.nameplateContainer;
                var8 = new Array(1);
                var8[0] = var13;
                var5.style = var8;
                if (!var12) {
                    _fun69227_ip = 622;
                    continue _fun69227
                }
            case 584:
                var17 = _closure1_slot6;
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 16;
                var8 = var18[var8];
                var8 = var13.bind(var3)(var8);
                var13 = var8.BlockedStatus;
                var8 = {};
                var12 = var17.bind(var3)(var13, var8);
            case 622:
                var8 = new Array(4);
                var8[0] = var12;
                if (!var11) {
                    _fun69227_ip = 671;
                    continue _fun69227
                }
            case 633:
                var17 = _closure1_slot6;
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 16;
                var12 = var18[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.IgnoredStatus;
                var12 = {};
                var11 = var17.bind(var3)(var13, var12);
            case 671:
                var8[1] = var11;
                var13 = _closure1_slot6;
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 17;
                var11 = var17[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.LegacyText;
                var11 = {};
                var17 = var15.usernameText;
                var15 = new Array(3);
                var15[0] = var17;
                var17 = var9;
                if (var9) {
                    _fun69227_ip = 730;
                    continue _fun69227
                }
            case 727:
                var17 = var19;
            case 730:
                if (!var17) {
                    _fun69227_ip = 772;
                    continue _fun69227
                }
            case 733:
                var18 = {};
                var23 = 1;
                var22 = var23;
                if (!var9) {
                    _fun69227_ip = 753;
                    continue _fun69227
                }
            case 744:
                var22 = var23;
                if (!var19) {
                    _fun69227_ip = 753;
                    continue _fun69227
                }
            case 750:
                var22 = 2;
            case 753:
                var19 = 18;
                var19 = var19 * var22;
                var19 = var21 - var19;
                var18.maxWidth = var19;
                var17 = var18;
            case 772:
                var15[1] = var17;
                var16 = var16 != var20;
                if (!var16) {
                    _fun69227_ip = 865;
                    continue _fun69227
                }
            case 783:
                var17 = {};
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 18;
                var18 = var21[var18];
                var19 = var19.bind(var3)(var18);
                var18 = var19.isThemeDark;
                var18 = var18.bind(var19)(var20);
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 5;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.unsafe_rawColors;
                if (var18) {
                    _fun69227_ip = 852;
                    continue _fun69227
                }
            case 844:
                var18 = var19.PRIMARY_860;
                _fun69227_ip = 858;
                continue _fun69227;
            case 852:
                var18 = var19.WHITE;
            case 858:
                var17.color = var18;
                var16 = var17;
            case 865:
                var15[2] = var16;
                var11.style = var15;
                var15 = 1;
                var11.numberOfLines = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var8[2] = var11;
                if (!var9) {
                    _fun69227_ip = 998;
                    continue _fun69227
                }
            case 898:
                var12 = _closure1_slot6;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 7;
                var10 = var15[var13];
                var11 = var14.bind(var3)(var10);
                var10 = {};
                var16 = 19;
                var16 = var15[var16];
                var16 = var14.bind(var3)(var16);
                var10.source = var16;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Sizes;
                var13 = var13.SMALL;
                var10.size = var13;
                var13 = 5;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.GUILD_BOOSTING_PINK;
                var10.color = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 998:
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/native/components/AudienceTile.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useAudienceTileStyles = var3;
    var2.getTileWidthStyle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1672, 33, 1297, 671, 4196, 4039, 6409, 566, 5620, 3915, 4917, 1234, 5869, 5411, 8613, 4832, 3165, 8516, 2]);