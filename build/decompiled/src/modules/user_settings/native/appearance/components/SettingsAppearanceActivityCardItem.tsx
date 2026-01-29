// modules/user_settings/native/appearance/components/SettingsAppearanceActivityCardItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var18 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.HAPPENING_NOW_BADGE_SIZE;
    var14 = var3.HAPPENING_NOW_CARD_HEIGHT;
    var15 = var3.HAPPENING_NOW_CARD_MARGIN_RIGHT;
    var17 = var3.HAPPENING_NOW_CARD_PADDING;
    var16 = var3.HAPPENING_NOW_CARD_PADDING_RIGHT;
    var12 = var3.HAPPENING_NOW_CONTENT_HEIGHT;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var10.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var19 = var5[var9];
    var19 = var10.bind(var0)(var19);
    var19 = var19.radii;
    var19 = var19.lg;
    var8.borderRadius = var19;
    var18 = var18.hairlineWidth;
    var8.borderWidth = var18;
    var8.padding = var17;
    var8.paddingRight = var16;
    var8.marginRight = var15;
    var8.height = var14;
    var14 = 'row';
    var8.flexDirection = var14;
    var14 = 'center';
    var8.alignItems = var14;
    var3.card = var8;
    var8 = var5[var9];
    var8 = var10.bind(var0)(var8);
    var8 = var8.shadows;
    var8 = var8.SHADOW_MEDIUM;
    var3.shadow = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'right': 0
    };
    var3.cardBadgeWrapper = var8;
    var8 = {};
    var8.height = var12;
    var8.minWidth = var12;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var8.marginRight = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var8.borderRadius = var14;
    var14 = 'relative';
    var8.position = var14;
    var3.cardImage = var8;
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': null,
        'height': null,
        'borderTopRightRadius': 15
    };
    var8.width = var13;
    var8.height = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var8.borderBottomLeftRadius = var13;
    var3.cardBadge = var8;
    var8 = {};
    var13 = '100%';
    var8.height = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CARD_SECONDARY_BG;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.cardImageAssetContainer = var8;
    var8 = {};
    var8.width = var12;
    var8.height = var12;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.cardImageAssetBackground = var8;
    var8 = {};
    var8.width = var12;
    var8.height = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var8.borderWidth = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.borderColor = var11;
    var3.cardImageAsset = var8;
    var8 = {};
    var11 = -4;
    var8.marginLeft = var11;
    var3.shiftedAvatar = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginLeft': 4294967292,
        'height': null,
        'minWidth': null,
        'borderRadius': null,
        'paddingHorizontal': 4,
        'paddingTop': 1
    };
    var11 = 9;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var13 = var12.AVATAR_SIZE_MAP;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.AvatarSizes;
    var12 = var12.XSMALL_20;
    var12 = var13[var12];
    var8.height = var12;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.AVATAR_SIZE_MAP;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.AvatarSizes;
    var11 = var11.XSMALL_20;
    var11 = var12[var11];
    var8.minWidth = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.userCounter = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/appearance/components/SettingsAppearanceActivityCardItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ActivityCardItem, environment: var1
        _fun84495: for (var _fun84495_ip = 0;;) switch (_fun84495_ip) {
            case 0:
                var2 = arg0;
                var15 = var2.kind;
                var21 = var2.title;
                var17 = var2.subtitle;
                var19 = var2.image;
                var1 = var2.avatars;
                var12 = var2.animatedStyles;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.locale;
                    return var0;
                };
                var26 = var5.bind(var6)(var4, var2);
                var2 = _closure1_slot8;
                var10 = var2.bind(var3)();
                var _closure2_slot0 = var10;
                var11 = null;
                var4 = var11 == var1;
                var2 = undefined;
                if (var4) {
                    _fun84495_ip = 141;
                    continue _fun84495
                }
            case 125:
                var6 = var1.slice;
                var5 = 0;
                var4 = 3;
                var2 = var6.bind(var1)(var5, var4);
            case 141:
                if (!(var11 == var2)) {
                    _fun84495_ip = 149;
                    continue _fun84495
                }
            case 145:
                var2 = new Array(0);
            case 149:
                _closure2_slot1 = var2;
                var4 = var11 != var1;
                var13 = 0;
                var25 = 0;
                if (!var4) {
                    _fun84495_ip = 178;
                    continue _fun84495
                }
            case 164:
                var5 = var1.length;
                var4 = var2.length;
                var25 = var5 - var4;
            case 178:
                _closure2_slot2 = var25;
                var1 = var11 != var1;
                var18 = null;
                if (!var1) {
                    _fun84495_ip = 208;
                    continue _fun84495
                }
            case 191:
                var1 = var2.map;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun84497: for (var _fun84497_ip = 0;;) switch (_fun84497_ip) {
                        case 0:
                            var4 = arg1;
                            var0 = _closure2_slot1;
                            var1 = var0.length;
                            var0 = 1;
                            var6 = var1 - var0;
                            var3 = _closure1_slot5;
                            var1 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 11;
                            var0 = var7[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var8 = arg0;
                            var0.source = var8;
                            var8 = _closure1_slot0;
                            var15 = 9;
                            var7 = var7[var15];
                            var7 = var8.bind(var2)(var7);
                            var7 = var7.AvatarSizes;
                            var7 = var7.XSMALL_20;
                            var0.size = var7;
                            var9 = var3.bind(var2)(var1, var0);
                            var1 = _closure1_slot3;
                            var0 = {};
                            var7 = 0;
                            var8 = undefined;
                            if (!(var7 !== var4)) {
                                _fun84497_ip = 122;
                                continue _fun84497
                            }
                        case 112:
                            var10 = _closure2_slot0;
                            var8 = var10.shiftedAvatar;
                        case 122:
                            var0.style = var8;
                            if (!(var4 === var6)) {
                                _fun84497_ip = 144;
                                continue _fun84497
                            }
                        case 130:
                            var6 = _closure2_slot2;
                            var5 = var9;
                            if (!(!(var6 <= var7))) {
                                _fun84497_ip = 341;
                                continue _fun84497
                            }
                        case 144:
                            var8 = _closure1_slot5;
                            var7 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var12 = 12;
                            var6 = var10[var12];
                            var7 = var7.bind(var2)(var6);
                            var6 = {};
                            var11 = {};
                            var14 = _closure1_slot0;
                            var12 = var10[var12];
                            var12 = var14.bind(var2)(var12);
                            var12 = var12.CutoutShape;
                            var12 = var12.Circle;
                            var11.shape = var12;
                            var12 = var10[var15];
                            var12 = var14.bind(var2)(var12);
                            var13 = var12.AVATAR_SIZE_MAP;
                            var12 = var10[var15];
                            var12 = var14.bind(var2)(var12);
                            var12 = var12.AvatarSizes;
                            var12 = var12.XSMALL_20;
                            var13 = var13[var12];
                            var12 = 4;
                            var16 = var13 - var12;
                            var13 = 2;
                            var13 = var16 - var13;
                            var11.x = var13;
                            var13 = -2;
                            var11.y = var13;
                            var13 = var10[var15];
                            var13 = var14.bind(var2)(var13);
                            var13 = var13.AVATAR_SIZE_MAP;
                            var10 = var10[var15];
                            var10 = var14.bind(var2)(var10);
                            var10 = var10.AvatarSizes;
                            var10 = var10.XSMALL_20;
                            var10 = var13[var10];
                            var10 = var10 + var12;
                            var11.size = var10;
                            var10 = new Array(1);
                            var10[0] = var11;
                            var6.cutouts = var10;
                            var6.children = var9;
                            var5 = var8.bind(var2)(var7, var6);
                        case 341:
                            var0.children = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                    }
                };
                var18 = var1.bind(var2)(var0);
            case 208:
                var2 = _closure1_slot6;
                var9 = _closure1_slot1;
                var20 = _closure1_slot2;
                var8 = 5;
                var0 = var20[var8];
                var0 = var9.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var5 = var10.card;
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var12.borderStrong;
                var4[1] = var5;
                var5 = var12.bgRaised;
                var4[2] = var5;
                var0.style = var4;
                var16 = _closure1_slot5;
                var6 = _closure1_slot3;
                var4 = {};
                var7 = var10.cardImageAssetContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var10.cardImage;
                var5[1] = var7;
                var4.style = var5;
                var5 = {};
                var7 = var10.cardImageAssetBackground;
                var5.style = var7;
                var7 = 13;
                var7 = var20[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var20 = var10.cardImageAsset;
                var7.style = var20;
                var7.source = var19;
                var7 = var16.bind(var3)(var9, var7);
                var5.children = var7;
                var5 = var16.bind(var3)(var6, var5);
                var4.children = var5;
                var5 = var16.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = {};
                var7 = {};
                var9 = {};
                var20 = 'row';
                var9.flexDirection = var20;
                var7.style = var9;
                var9 = {};
                var19 = {};
                var19.flexDirection = var20;
                var9.style = var19;
                var9.children = var18;
                var16 = var16.bind(var3)(var6, var9);
                var9 = new Array(2);
                var9[0] = var16;
                var11 = null;
                if (!(var25 > var13)) {
                    _fun84495_ip = 609;
                    continue _fun84495
                }
            case 446:
                var18 = _closure1_slot5;
                var16 = _closure1_slot1;
                var27 = _closure1_slot2;
                var13 = var27[var8];
                var13 = var16.bind(var3)(var13);
                var16 = var13.View;
                var13 = {};
                var20 = var10.userCounter;
                var19 = new Array(2);
                var19[0] = var20;
                var20 = var12.bgModStrong;
                var19[1] = var20;
                var13.style = var19;
                var22 = _closure1_slot6;
                var24 = _closure1_slot0;
                var19 = 14;
                var19 = var27[var19];
                var19 = var24.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'animated': true,
                    'variant': 'text-xxs/semibold',
                    'allowFontScaling': false
                };
                var23 = var12.textNormal;
                var19.style = var23;
                var23 = 15;
                var23 = var27[var23];
                var24 = var24.bind(var3)(var23);
                var23 = var24.humanizeValue;
                var24 = var23.bind(var24)(var25, var26);
                var23 = ['+'];
                var23[1] = var24;
                var19.children = var23;
                var19 = var22.bind(var3)(var20, var19);
                var13.children = var19;
                var11 = var18.bind(var3)(var16, var13);
            case 609:
                var9[1] = var11;
                var7.children = var9;
                var7 = var2.bind(var3)(var6, var7);
                var9 = new Array(3);
                var9[0] = var7;
                var7 = _closure1_slot5;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 16;
                var18 = var16[var11];
                var18 = var13.bind(var3)(var18);
                var20 = var18.HappeningNowCardHeader;
                var19 = {};
                var18 = true;
                var19.animated = var18;
                var22 = var12.headerPrimary;
                var19.style = var22;
                var19.children = var21;
                var19 = var7.bind(var3)(var20, var19);
                var9[1] = var19;
                var11 = var16[var11];
                var11 = var13.bind(var3)(var11);
                var13 = var11.HappeningNowCardSubtitle;
                var11 = {};
                var11.animated = var18;
                var18 = var12.headerSecondary;
                var11.style = var18;
                var11.children = var17;
                var11 = var7.bind(var3)(var13, var11);
                var9[2] = var11;
                var5.children = var9;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var6 = _closure1_slot3;
                var5 = {};
                var9 = var10.cardBadgeWrapper;
                var5.style = var9;
                var13 = _closure1_slot1;
                var8 = var16[var8];
                var8 = var13.bind(var3)(var8);
                var9 = var8.View;
                var8 = {};
                var11 = var10.cardBadge;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = var12.bgModSubtle;
                var10[1] = var11;
                var8.style = var10;
                var11 = _closure1_slot7;
                var10 = {};
                var12 = var12.activityIcon;
                var10.style = var12;
                var12 = 6;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Sizes;
                var12 = var12.REFRESH_SMALL_16;
                var10.size = var12;
                var12 = 'stretch';
                var10.resizeMode = var12;
                var12 = 'activity';
                if (!(var12 !== var15)) {
                    _fun84495_ip = 891;
                    continue _fun84495
                }
            case 878:
                var15 = _closure1_slot2;
                var12 = 18;
                var12 = var15[var12];
                _fun84495_ip = 902;
                continue _fun84495;
            case 891:
                var15 = _closure1_slot2;
                var14 = 17;
                var12 = var15[var14];
            case 902:
                var12 = var13.bind(var3)(var12);
                var10.source = var12;
                var10 = var7.bind(var3)(var11, var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1676, 10794, 33, 3677, 4039, 1297, 671, 5411, 632, 5409, 5414, 4660, 3895, 1604, 10795, 10796, 10797, 2]);