// modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx
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
    var12 = 0;
    var6 = var5[var12];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Pressable;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var10.bind(var0)(var3);
    var3 = var6.createAnimatedComponent;
    var3 = var3.bind(var6)(var7);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexShrink': 0,
        'flexGrow': 0
    };
    var3.chevron = var8;
    var8 = {};
    var9 = 5;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var8.gap = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var8.paddingTop = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var8.paddingBottom = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var8.borderBottomColor = var13;
    var8.borderBottomWidth = var11;
    var8.zIndex = var11;
    var3.container = var8;
    var8 = {};
    var8.margin = var12;
    var3.guildBadge = var8;
    var8 = {};
    var8.flexShrink = var11;
    var3.flex = var8;
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.gap = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.header = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.gap = var11;
    var3.subheader = var8;
    var8 = {
        'width': 4,
        'height': 4
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.ellipse = var8;
    var8 = {};
    var9 = 'auto';
    var8.marginLeft = var9;
    var3.connectionIndicator = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelListStickyHeader, environment: var1
        _fun101866: for (var _fun101866_ip = 0;;) switch (_fun101866_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.guild;
                var _closure2_slot0 = var9;
                var7 = var1.showExtraButtons;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun101866_ip = 28;
                    continue _fun101866
                }
            case 26:
                var7 = true;
            case 28:
                var1 = _closure1_slot8;
                var20 = var1.bind(var3)();
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var2.bind(var4)(var0, var1);
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 7;
                var0 = var14[var0];
                var0 = var12.bind(var3)(var0);
                var27 = var0.bind(var3)(var9);
                var15 = _closure1_slot0;
                var0 = 8;
                var0 = var14[var0];
                var2 = var15.bind(var3)(var0);
                var1 = var2.useIOSPressEffects;
                var0 = 4;
                var0 = var1.bind(var2)(var0);
                var10 = var0.onPressIn;
                var5 = var0.onPressOut;
                var13 = var0.pressableStyles;
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var20.container;
                var0.style = var4;
                var8 = _closure1_slot7;
                var4 = {};
                var4.style = var13;
                var4.onPress = var11;
                var4.onPressIn = var10;
                var4.onPressOut = var5;
                var5 = true;
                var4.accessible = var5;
                var5 = 'button';
                var4.accessibilityRole = var5;
                var23 = 9;
                var5 = var14[var23];
                var5 = var15.bind(var3)(var5);
                var11 = var5.intl;
                var10 = var11.string;
                var5 = var14[var23];
                var5 = var15.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["Gpyp/e"];
                var5 = var10.bind(var11)(var5);
                var4.accessibilityHint = var5;
                var5 = {};
                var10 = var20.header;
                var5.style = var10;
                var13 = _closure1_slot5;
                var16 = 10;
                var10 = var14[var16];
                var10 = var15.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'experimental_useNativeText': true,
                    'style': null,
                    'color': 'mobile-text-heading-primary',
                    'variant': 'redesign/heading-18/bold',
                    'lineClamp': 1
                };
                var17 = var20.flex;
                var10.style = var17;
                var17 = var9.name;
                var10.children = var17;
                var11 = var13.bind(var3)(var11, var10);
                var10 = new Array(4);
                var10[0] = var11;
                var11 = 11;
                var11 = var14[var11];
                var17 = var12.bind(var3)(var11);
                var11 = {};
                var11.guild = var9;
                var18 = 12;
                var18 = var14[var18];
                var18 = var12.bind(var3)(var18);
                var18 = var18.Sizes;
                var18 = var18.REFRESH_SMALL_16;
                var11.size = var18;
                var18 = var20.guildBadge;
                var11.style = var18;
                var11 = var13.bind(var3)(var17, var11);
                var10[1] = var11;
                var11 = 13;
                var11 = var14[var11];
                var11 = var15.bind(var3)(var11);
                var15 = var11.ChevronSmallRightIcon;
                var11 = {};
                var17 = 'xxs';
                var11.size = var17;
                var17 = 5;
                var17 = var14[var17];
                var17 = var12.bind(var3)(var17);
                var17 = var17.colors;
                var17 = var17.TEXT_SUBTLE;
                var11.color = var17;
                var17 = var20.chevron;
                var11.style = var17;
                var11 = var13.bind(var3)(var15, var11);
                var10[2] = var11;
                var11 = 14;
                var11 = var14[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var14 = var20.connectionIndicator;
                var11.style = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[3] = var11;
                var5.children = var10;
                var5 = var2.bind(var3)(var1, var5);
                var10 = new Array(2);
                var10[0] = var5;
                var5 = null;
                var12 = var5 != var27;
                var11 = null;
                if (!var12) {
                    _fun101866_ip = 802;
                    continue _fun101866
                }
            case 540:
                var12 = 0;
                var12 = var27 > var12;
                var11 = null;
                if (!var12) {
                    _fun101866_ip = 802;
                    continue _fun101866
                }
            case 554:
                var14 = _closure1_slot6;
                var13 = _closure1_slot4;
                var12 = {};
                var15 = var20.subheader;
                var12.style = var15;
                var18 = _closure1_slot5;
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = var19[var16];
                var15 = var22.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'experimental_useNativeText': true,
                    'color': 'text-muted',
                    'variant': 'text-xs/medium',
                    'lineClamp': 1
                };
                var21 = var19[var23];
                var21 = var22.bind(var3)(var21);
                var26 = var21.intl;
                var25 = var26.format;
                var21 = var19[var23];
                var21 = var22.bind(var3)(var21);
                var21 = var21.t;
                var24 = var21.zRl6XR;
                var21 = {};
                var21.count = var27;
                var21 = var25.bind(var26)(var24, var21);
                var15.children = var21;
                var17 = var18.bind(var3)(var17, var15);
                var15 = new Array(3);
                var15[0] = var17;
                var17 = {};
                var20 = var20.ellipse;
                var17.style = var20;
                var17 = var18.bind(var3)(var13, var17);
                var15[1] = var17;
                var16 = var19[var16];
                var16 = var22.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'experimental_useNativeText': true,
                    'color': 'text-muted',
                    'variant': 'text-xs/medium',
                    'lineClamp': 1
                };
                var20 = var19[var23];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var23];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["1g9A/f"];
                var19 = var20.bind(var21)(var19);
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[2] = var16;
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 802:
                var10[1] = var11;
                var4.children = var10;
                var8 = var2.bind(var3)(var8, var4);
                var4 = new Array(2);
                var4[0] = var8;
                var5 = null;
                if (!var7) {
                    _fun101866_ip = 879;
                    continue _fun101866
                }
            case 829:
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 15;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {
                    'guild': null,
                    'useButtonComponent': true,
                    'useEventsButton': true
                };
                var6.guild = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 879:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3679, 1297, 671, 12526, 13238, 4867, 1234, 3900, 7357, 4045, 7702, 13161, 11626, 2]);