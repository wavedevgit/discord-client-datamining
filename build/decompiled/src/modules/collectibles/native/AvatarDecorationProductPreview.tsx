// modules/collectibles/native/AvatarDecorationProductPreview.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'position': 'relative',
        'marginHorizontal': null,
        'justifyContent': 'center'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginHorizontal = var11;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.paddingVertical = var11;
    var3.fullSizePreview = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var8.marginBottom = var11;
    var3.profilePreview = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 2,
        'right': 0,
        'borderRadius': null,
        'backgroundColor': null,
        'borderWidth': 1,
        'borderColor': null,
        'width': '70%',
        'padding': 12
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.borderColor = var11;
    var3.chat = var8;
    var8 = {
        'flexDirection': 'row',
        'gap': 10
    };
    var3.messageRow = var8;
    var8 = {};
    var11 = 'column';
    var8.flexDirection = var11;
    var3.messageColumn = var8;
    var8 = {
        'height': 17,
        'flexDirection': 'row',
        'alignItems': 'flex-end'
    };
    var3.messageHeader = var8;
    var8 = {};
    var11 = '95%';
    var8.width = var11;
    var3.messagePreview = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'backgroundColor': null,
        'borderRadius': null,
        'marginTop': 13,
        'height': 32,
        'paddingHorizontal': 7
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_CHAT_INPUT_BACKGROUND;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.chatInput = var8;
    var8 = {
        'height': 20,
        'width': 20
    };
    var3.chatIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/AvatarDecorationProductPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87466: for (var _fun87466_ip = 0;;) switch (_fun87466_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.product;
                var0 = _closure1_slot6;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var5 = var1.bind(var4)(var0);
                var0 = var5.useCurrentUser;
                var13 = var0.bind(var5)();
                var0 = 6;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useShopProductItems;
                var0 = var0.bind(var1)(var2);
                var14 = var0.firstProfileEffect;
                var9 = var0.firstAvatarDecoration;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var3[var0];
                var5 = var2.bind(var4)(var0);
                var1 = var5.useConfig;
                var0 = {};
                var8 = 'AvatarDecorationProductPreview';
                var0.location = var8;
                var1 = var1.bind(var5)(var0);
                var0 = 8;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.calendarFormat;
                    var0 = global;
                    var0 = var0.Date;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var5 = var3;
                    var0 = new var5[var0](var4);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var27 = var2.bind(var4)(var0);
                var0 = null;
                var2 = var0 == var9;
                if (var2) {
                    _fun87466_ip = 1103;
                    continue _fun87466
                }
            case 164:
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var5 = {};
                if (var1) {
                    _fun87466_ip = 916;
                    continue _fun87466
                }
            case 180:
                var1 = var7.container;
                var5.style = var1;
                var1 = 'box-none';
                var5.pointerEvents = var1;
                var17 = _closure1_slot0;
                var22 = _closure1_slot2;
                var25 = 10;
                var1 = var22[var25];
                var1 = var17.bind(var4)(var1);
                var11 = var1.intl;
                var10 = var11.formatToPlainString;
                var1 = var22[var25];
                var1 = var17.bind(var4)(var1);
                var1 = var1.t;
                var8 = var1.Do2lxE;
                var1 = {};
                var12 = var9.label;
                var1.a11y_text = var12;
                var1 = var10.bind(var11)(var8, var1);
                var5.accessibilityLabel = var1;
                var1 = 'image';
                var5.accessibilityRole = var1;
                var10 = _closure1_slot5;
                var8 = _closure1_slot3;
                var1 = {};
                var19 = _closure1_slot4;
                var21 = _closure1_slot1;
                var11 = 12;
                var11 = var22[var11];
                var12 = var21.bind(var4)(var11);
                var11 = {};
                var11.user = var13;
                var15 = true;
                var11.compact = var15;
                var15 = var7.profilePreview;
                var11.style = var15;
                var11.pendingProfileEffectRecord = var14;
                var12 = var19.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var14 = var7.chat;
                var12.style = var14;
                var14 = {};
                var15 = var7.messageRow;
                var14.style = var15;
                var15 = 13;
                var15 = var22[var15];
                var16 = var21.bind(var4)(var15);
                var15 = {
                    'user': null,
                    'pendingAvatarDecoration': null,
                    'size': null,
                    'accessible': false,
                    'importantForAccessibility': 'no',
                    'accessibilityLabel': ''
                };
                var15.user = var13;
                var15.pendingAvatarDecoration = var9;
                var18 = 11;
                var18 = var22[var18];
                var18 = var17.bind(var4)(var18);
                var18 = var18.AvatarSizes;
                var18 = var18.NORMAL;
                var15.size = var18;
                var16 = var19.bind(var4)(var16, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var16 = {};
                var18 = var7.messageColumn;
                var16.style = var18;
                var18 = {};
                var20 = var7.messageHeader;
                var18.style = var20;
                var20 = 14;
                var20 = var22[var20];
                var23 = var21.bind(var4)(var20);
                var20 = {
                    'user': null,
                    'textVariant': 'heading-sm/extrabold',
                    'hideSubname': true
                };
                var20.user = var13;
                var23 = var19.bind(var4)(var23, var20);
                var20 = new Array(2);
                var20[0] = var23;
                var23 = 15;
                var24 = var22[var23];
                var24 = var17.bind(var4)(var24);
                var26 = var24.Text;
                var24 = {
                    'variant': 'text-xxs/normal',
                    'color': 'text-default'
                };
                var24.children = var27;
                var24 = var19.bind(var4)(var26, var24);
                var20[1] = var24;
                var18.children = var20;
                var20 = var10.bind(var4)(var8, var18);
                var18 = new Array(2);
                var18[0] = var20;
                var20 = {};
                var24 = var7.messagePreview;
                var20.style = var24;
                var23 = var22[var23];
                var23 = var17.bind(var4)(var23);
                var24 = var23.Text;
                var23 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default',
                    'lineClamp': 2
                };
                var26 = var22[var25];
                var26 = var17.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var22[var25];
                var25 = var17.bind(var4)(var25);
                var25 = var25.t;
                var25 = var25.d5YwK5;
                var25 = var26.bind(var27)(var25);
                var23.children = var25;
                var23 = var19.bind(var4)(var24, var23);
                var20.children = var23;
                var20 = var19.bind(var4)(var8, var20);
                var18[1] = var20;
                var16.children = var18;
                var16 = var10.bind(var4)(var8, var16);
                var15[1] = var16;
                var14.children = var15;
                var15 = var10.bind(var4)(var8, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var15 = {};
                var16 = var7.chatInput;
                var15.style = var16;
                var16 = 16;
                var16 = var22[var16];
                var16 = var17.bind(var4)(var16);
                var17 = var16.CirclePlusIcon;
                var16 = {};
                var18 = 4;
                var18 = var22[var18];
                var18 = var21.bind(var4)(var18);
                var18 = var18.colors;
                var18 = var18.INTERACTIVE_TEXT_DEFAULT;
                var16.color = var18;
                var18 = var7.chatIcon;
                var16.style = var18;
                var17 = var19.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = 17;
                var17 = var22[var17];
                var18 = var21.bind(var4)(var17);
                var17 = {};
                var20 = 18;
                var20 = var22[var20];
                var20 = var21.bind(var4)(var20);
                var17.source = var20;
                var20 = var7.chatIcon;
                var17.style = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[1] = var17;
                var15.children = var16;
                var15 = var10.bind(var4)(var8, var15);
                var14[1] = var15;
                var12.children = var14;
                var12 = var10.bind(var4)(var8, var12);
                var11[1] = var12;
                var1.children = var11;
                var1 = var10.bind(var4)(var8, var1);
                var5.children = var1;
                var1 = var5;
                _fun87466_ip = 1097;
                continue _fun87466;
            case 916:
                var7 = var7.fullSizePreview;
                var5.style = var7;
                var7 = 'box-none';
                var5.pointerEvents = var7;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 10;
                var8 = var12[var7];
                var8 = var11.bind(var4)(var8);
                var14 = var8.intl;
                var10 = var14.formatToPlainString;
                var7 = var12[var7];
                var7 = var11.bind(var4)(var7);
                var7 = var7.t;
                var8 = var7.Do2lxE;
                var7 = {};
                var15 = var9.label;
                var7.a11y_text = var15;
                var7 = var10.bind(var14)(var8, var7);
                var5.accessibilityLabel = var7;
                var7 = 'image';
                var5.accessibilityRole = var7;
                var8 = _closure1_slot4;
                var7 = _closure1_slot1;
                var10 = 11;
                var6 = var12[var10];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6.user = var13;
                var6.guildId = var4;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.AvatarSizes;
                var10 = var10.GIFT_START;
                var6.size = var10;
                var6.avatarDecoration = var9;
                var9 = true;
                var6.animate = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5.children = var6;
                var1 = var5;
            case 1097:
                var0 = var3.bind(var4)(var2, var1);
            case 1103:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 9478, 6876, 11301, 4923, 3123, 1234, 5447, 6952, 5729, 11302, 3932, 10891, 4077, 7672, 2]);