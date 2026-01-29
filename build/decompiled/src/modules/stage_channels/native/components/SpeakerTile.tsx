// modules/stage_channels/native/components/SpeakerTile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var11;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var3 = var11[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var12 = var1.bind(var0)(var3);
    var _closure1_slot3 = var12;
    var1 = 1;
    var1 = var11[var1];
    var1 = var10.bind(var0)(var1);
    var3 = var1.useWindowDimensions;
    var _closure1_slot4 = var3;
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var11[var1];
    var1 = var14.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var11[var1];
    var1 = var10.bind(var0)(var1);
    var1 = var1.ParticipantTypes;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var11[var1];
    var1 = var10.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot8 = var3;
    var1 = var1.jsxs;
    var _closure1_slot9 = var1;
    var7 = {};
    var3 = 212;
    var7.FULL = var3;
    var1 = 'FULL';
    var7[var3] = var1;
    var3 = 112;
    var7.HALF = var3;
    var1 = 'HALF';
    var7[var3] = var1;
    var7.THIRD = var3;
    var1 = 'THIRD';
    var7[var3] = var1;
    var1 = var7.FULL;
    var3 = 1.7777777777777777;
    var6 = var1 * var3;
    var _closure1_slot10 = var6;
    var1 = var7.HALF;
    var5 = var1 * var3;
    var _closure1_slot11 = var5;
    var1 = 5;
    var1 = var11[var1];
    var4 = var10.bind(var0)(var1);
    var3 = var4.createStyles;
    var1 = {};
    var9 = {
        'marginHorizontal': 4,
        'marginVertical': 4,
        'alignItems': 'center',
        'flex': 1
    };
    var1.container = var9;
    var9 = {};
    var13 = var7.FULL;
    var9.height = var13;
    var1.full = var9;
    var9 = {};
    var13 = var7.HALF;
    var9.height = var13;
    var1.half = var9;
    var9 = {};
    var13 = var7.THIRD;
    var9.height = var13;
    var1.third = var9;
    var9 = {
        'flex': 1,
        'width': '100%',
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'hidden'
    };
    var13 = 6;
    var15 = var11[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var9.borderRadius = var15;
    var1.avatarContainer = var9;
    var9 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'alignSelf': 'stretch'
    };
    var1.imageBackground = var9;
    var9 = {
        'position': 'absolute',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'bottom': 4,
        'marginHorizontal': 4,
        'paddingVertical': 4,
        'paddingHorizontal': 8,
        'backgroundColor': null,
        'borderRadius': 6
    };
    var15 = 7;
    var15 = var11[var15];
    var18 = var10.bind(var0)(var15);
    var17 = var18.hexWithOpacity;
    var15 = var11[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var16 = var15.BLACK;
    var15 = 0.3;
    var15 = var17.bind(var18)(var16, var15);
    var9.backgroundColor = var15;
    var1.nameplateContainer = var9;
    var9 = {};
    var15 = var11[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var9.color = var15;
    var1.nameplateText = var9;
    var9 = {
        'borderRadius': null,
        'width': 16,
        'height': 16,
        'justifyContent': 'center',
        'alignItems': 'center',
        'marginEnd': 4
    };
    var15 = var11[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var9.borderRadius = var15;
    var1.restricted = var9;
    var9 = {};
    var13 = var11[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var9.backgroundColor = var13;
    var1.blocked = var9;
    var4 = var3.bind(var4)(var1);
    var _closure1_slot12 = var4;
    var3 = function(arg0, arg1) { // Original name: getSizeStyle, environment: var8
        _fun69132: for (var _fun69132_ip = 0;;) switch (_fun69132_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 8;
                var3 = var3[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.StageTileSize;
                var3 = var3.FULL;
                if (!(var3 !== var2)) {
                    _fun69132_ip = 96;
                    continue _fun69132
                }
            case 47:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.StageTileSize;
                var1 = var1.HALF;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 88;
                    continue _fun69132
                }
            case 80:
                var1 = var0.third;
                return var1;
            case 88:
                var1 = var0.half;
                return var1;
            case 96:
                var0 = var0.full;
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: getTileWidthStyle, environment: var8
        _fun69133: for (var _fun69133_ip = 0;;) switch (_fun69133_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.StageTileSize;
                var0 = arg2;
                if (var0) {
                    _fun69133_ip = 90;
                    continue _fun69133
                }
            case 40:
                var0 = var2.THIRD;
                if (!(var4 !== var0)) {
                    _fun69133_ip = 61;
                    continue _fun69133
                }
            case 50:
                var0 = {};
                var1 = 1;
                var0.flex = var1;
                _fun69133_ip = 88;
                continue _fun69133;
            case 61:
                var1 = {};
                var6 = arg1;
                var5 = 36;
                var6 = var6 - var5;
                var5 = 3;
                var5 = var6 / var5;
                var1.maxWidth = var5;
                var0 = var1;
            case 88:
                _fun69133_ip = 120;
                continue _fun69133;
            case 90:
                var1 = {};
                var2 = var2.FULL;
                if (!(var4 !== var2)) {
                    _fun69133_ip = 108;
                    continue _fun69133
                }
            case 102:
                var2 = _closure1_slot11;
                _fun69133_ip = 112;
                continue _fun69133;
            case 108:
                var2 = _closure1_slot10;
            case 112:
                var1.maxWidth = var2;
                var0 = var1;
            case 120:
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var9 = function(arg0, arg1) { // Original name: getImageBackgroundStyle, environment: var8
        _fun69134: for (var _fun69134_ip = 0;;) switch (_fun69134_ip) {
            case 0:
                var1 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.StageTileSize;
                var2 = var0.THIRD;
                var0 = arg0;
                if (!(var0 !== var2)) {
                    _fun69134_ip = 63;
                    continue _fun69134
                }
            case 47:
                var2 = var1.imageBackground;
                var0 = new Array(1);
                var0[0] = var2;
                _fun69134_ip = 94;
                continue _fun69134;
            case 63:
                var2 = var1.imageBackground;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var3 = 12;
                var2.paddingBottom = var3;
                var1[1] = var2;
                var0 = var1;
            case 94:
                return var0;
        }
    };
    var _closure1_slot15 = var9;
    var9 = var12.memo;
    var8 = function(arg0) { // Environment: var8
        _fun69135: for (var _fun69135_ip = 0;;) switch (_fun69135_ip) {
            case 0:
                var2 = arg0;
                var15 = var2.channel;
                var _closure2_slot0 = var15;
                var1 = var2.participant;
                var _closure2_slot1 = var1;
                var22 = var2.size;
                var2 = _closure1_slot12;
                var4 = undefined;
                var14 = var2.bind(var4)();
                var2 = _closure1_slot4;
                var2 = var2.bind(var4)();
                var19 = var2.width;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var2 = var6.useIsScreenLandscape;
                var9 = var2.bind(var6)();
                var16 = var1.user;
                var _closure2_slot2 = var16;
                var18 = var1.blocked;
                var17 = var1.ignored;
                var2 = 10;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var7 = var15.id;
                var2 = new Array(2);
                var2[0] = var7;
                var1 = var1.id;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = var3.getParticipant;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var12 = var5.bind(var6)(var3, var1, var2);
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var5 = var15.id;
                var1 = new Array(2);
                var1[0] = var5;
                var5 = var16.id;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showUserProfile;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var5 = var5.id;
                    var1.userId = var5;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var2.bind(var3)(var0, var1);
                var0 = null;
                if (!(var0 != var12)) {
                    _fun69135_ip = 1090;
                    continue _fun69135
                }
            case 224:
                var2 = var12.type;
                var1 = _closure1_slot7;
                var1 = var1.USER;
                if (!(var2 === var1)) {
                    _fun69135_ip = 1090;
                    continue _fun69135
                }
            case 246:
                var11 = var18;
                if (var18) {
                    _fun69135_ip = 255;
                    continue _fun69135
                }
            case 252:
                var11 = var17;
            case 255:
                var8 = _closure1_slot1;
                var21 = _closure1_slot2;
                var1 = 12;
                var1 = var21[var1];
                var1 = var8.bind(var4)(var1);
                var13 = var1.bind(var4)(var15, var12);
                var3 = _closure1_slot9;
                var20 = _closure1_slot0;
                var1 = 13;
                var1 = var21[var1];
                var1 = var20.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 14;
                var7 = var21[var6];
                var7 = var20.bind(var4)(var7);
                var24 = var7.intl;
                var23 = var24.formatToPlainString;
                var6 = var21[var6];
                var6 = var20.bind(var4)(var6);
                var6 = var6.t;
                var7 = var6.ODlyvk;
                var6 = {};
                var6.name = var13;
                var6 = var23.bind(var24)(var7, var6);
                var1.accessibilityLabel = var6;
                var6 = 'button';
                var1.accessibilityRole = var6;
                var7 = var14.container;
                var6 = new Array(3);
                var6[0] = var7;
                var7 = _closure1_slot13;
                var7 = var7.bind(var4)(var22, var14);
                var6[1] = var7;
                var7 = _closure1_slot14;
                var7 = var7.bind(var4)(var22, var19, var9);
                var6[2] = var7;
                var1.style = var6;
                var1.onPress = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = var14.avatarContainer;
                var5.style = var7;
                var9 = _closure1_slot8;
                var7 = 15;
                var7 = var21[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var19 = _closure1_slot15;
                var19 = var19.bind(var4)(var22, var14);
                var7.style = var19;
                var23 = var16.getAvatarURL;
                var22 = var15.guild_id;
                var19 = 64;
                var19 = var23.bind(var16)(var22, var19);
                var7.url = var19;
                var12 = var12.speaking;
                var7.speaking = var12;
                var12 = true;
                var7.animate = var12;
                var19 = 16;
                var19 = var21[var19];
                var19 = var20.bind(var4)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.XLARGE;
                var7.size = var19;
                var7.isStageCall = var12;
                var12 = var11;
                if (!var11) {
                    _fun69135_ip = 575;
                    continue _fun69135
                }
            case 556:
                var19 = {};
                var20 = 0.5;
                var19.opacity = var20;
                var12 = var19;
            case 575:
                var7.avatarStyle = var12;
                var8 = var9.bind(var4)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var12 = _closure1_slot8;
                var9 = _closure1_slot0;
                var19 = _closure1_slot2;
                var8 = 17;
                var20 = var19[var8];
                var20 = var9.bind(var4)(var20);
                var21 = var20.VoiceStatus;
                var20 = {};
                var22 = var16.id;
                var20.userId = var22;
                var22 = var15.id;
                var20.channelId = var22;
                var20 = var12.bind(var4)(var21, var20);
                var7[1] = var20;
                var8 = var19[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.ModeratorStatus;
                var8 = {};
                var16 = var16.id;
                var8.userId = var16;
                var15 = var15.id;
                var8.channelId = var15;
                var8 = var12.bind(var4)(var9, var8);
                var7[2] = var8;
                var5.children = var7;
                var6 = var3.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot9;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var14.nameplateContainer;
                var6.style = var9;
                if (!var11) {
                    _fun69135_ip = 987;
                    continue _fun69135
                }
            case 743:
                var15 = _closure1_slot9;
                var12 = _closure1_slot5;
                var9 = {};
                var19 = var14.restricted;
                var16 = new Array(2);
                var16[0] = var19;
                var19 = null;
                if (!var18) {
                    _fun69135_ip = 778;
                    continue _fun69135
                }
            case 772:
                var19 = var14.blocked;
            case 778:
                var16[1] = var19;
                var9.style = var16;
                if (!var18) {
                    _fun69135_ip = 889;
                    continue _fun69135
                }
            case 789:
                var20 = _closure1_slot8;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 18;
                var16 = var23[var21];
                var19 = var22.bind(var4)(var16);
                var16 = {};
                var24 = 19;
                var24 = var23[var24];
                var24 = var22.bind(var4)(var24);
                var16.source = var24;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.Sizes;
                var21 = var21.EXTRA_SMALL;
                var16.size = var21;
                var21 = 6;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.unsafe_rawColors;
                var21 = var21.RED_400;
                var16.color = var21;
                var18 = var20.bind(var4)(var19, var16);
            case 889:
                var16 = new Array(2);
                var16[0] = var18;
                if (!var17) {
                    _fun69135_ip = 973;
                    continue _fun69135
                }
            case 900:
                var20 = _closure1_slot8;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 18;
                var18 = var23[var21];
                var19 = var22.bind(var4)(var18);
                var18 = {};
                var24 = 20;
                var24 = var23[var24];
                var24 = var22.bind(var4)(var24);
                var18.source = var24;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.Sizes;
                var21 = var21.EXTRA_SMALL;
                var18.size = var21;
                var17 = var20.bind(var4)(var19, var18);
            case 973:
                var16[1] = var17;
                var9.children = var16;
                var11 = var15.bind(var4)(var12, var9);
            case 987:
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot8;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 21;
                var10 = var15[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'lineClamp': 1,
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'always-white'
                };
                var14 = var14.nameplateText;
                var10.style = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1090:
                return var0;
        }
    };
    var8 = var9.bind(var12)(var8);
    var9 = 22;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/stage_channels/native/components/SpeakerTile.tsx';
    var9 = var10.bind(var11)(var9);
    var2.default = var8;
    var2.SPEAKER_TILE_HEIGHTS = var7;
    var2.LANDSCAPE_MAX_TILE_WIDTH_FULL = var6;
    var2.LANDSCAPE_MAX_TILE_WIDTH = var5;
    var2.useSpeakerTileStyles = var4;
    var2.getSizeStyle = var3;
    var2.getTileWidthStyle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3902, 3482, 33, 1297, 671, 3199, 8612, 5319, 566, 5869, 8597, 4858, 1234, 5696, 5409, 8613, 4039, 8615, 7315, 3895, 2]);