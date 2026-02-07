// modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = _closure1_slot10;
        var3 = undefined;
        var21 = var0.bind(var3)();
        var16 = _closure1_slot0;
        var13 = _closure1_slot2;
        var0 = 14;
        var0 = var13[var0];
        var4 = var16.bind(var3)(var0);
        var2 = var4.useAgeSpecificText;
        var11 = 15;
        var0 = var13[var11];
        var0 = var16.bind(var3)(var0);
        var6 = var0.intl;
        var5 = var6.string;
        var12 = _closure1_slot1;
        var0 = 16;
        var1 = var13[var0];
        var1 = var12.bind(var3)(var1);
        var1 = var1.n6LOrh;
        var1 = var5.bind(var6)(var1);
        var5 = var13[var11];
        var5 = var16.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var0 = var13[var0];
        var0 = var12.bind(var3)(var0);
        var0 = var0.JNLpDZ;
        var0 = var5.bind(var6)(var0);
        var20 = var2.bind(var4)(var1, var0);
        var0 = 17;
        var0 = var13[var0];
        var0 = var12.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var _closure2_slot0 = var0;
        var0 = 18;
        var0 = var13[var0];
        var1 = var16.bind(var3)(var0);
        var0 = var1.getSortedActivityTypeConfigs;
        var18 = var0.bind(var1)();
        var2 = _closure1_slot6;
        var0 = 19;
        var0 = var13[var0];
        var0 = var16.bind(var3)(var0);
        var1 = var0.ModalScreen;
        var0 = {};
        var6 = _closure1_slot5;
        var4 = 20;
        var4 = var13[var4];
        var4 = var16.bind(var3)(var4);
        var5 = var4.ModalContent;
        var4 = {};
        var10 = _closure1_slot6;
        var9 = _closure1_slot4;
        var7 = {};
        var14 = var21.container;
        var7.style = var14;
        var19 = _closure1_slot5;
        var14 = 13;
        var14 = var13[var14];
        var14 = var16.bind(var3)(var14);
        var17 = var14.Text;
        var14 = {
            'style': null,
            'variant': 'text-lg/bold',
            'color': 'mobile-text-heading-primary'
        };
        var21 = var21.groupHeader;
        var14.style = var21;
        var14.children = var20;
        var17 = var19.bind(var3)(var17, var14);
        var14 = new Array(2);
        var14[0] = var17;
        var17 = var18.map;
        var15 = function(arg0) { // Environment: var15
            _fun82869: for (var _fun82869_ip = 0;;) switch (_fun82869_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2[Symbol.iterator];
                    var2 = var0().next;
                    var5 = var2().value;
                    var1 = var0;
                    var4 = undefined;
                    var1 = var1 === var4;
                    var3 = undefined;
                    if (var1) {
                        _fun82869_ip = 27;
                        continue _fun82869
                    }
                case 24:
                    var3 = var5;
                case 27:
                    var7 = undefined;
                    if (var1) {
                        _fun82869_ip = 57;
                        continue _fun82869
                    }
                case 32:
                    var5 = var2().value;
                    var2 = var0;
                    var2 = var2 === var4;
                    var7 = undefined;
                    var1 = var2;
                    if (var2) {
                        _fun82869_ip = 57;
                        continue _fun82869
                    }
                case 51:
                    var7 = var5;
                    var1 = var2;
                case 57:
                    if (var1) {
                        _fun82869_ip = 63;
                        continue _fun82869
                    }
                case 60:
                    var0.return();
                case 63:
                    var2 = _closure1_slot5;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var5 = _closure1_slot7;
                    var5 = var5[var3];
                    var0.IconComponent = var5;
                    var5 = var7.tooltipHeader;
                    var5 = var5.bind(var7)();
                    var0.header = var5;
                    var6 = var7.tooltipDescription;
                    var9 = _closure2_slot0;
                    var5 = null;
                    var9 = var5 != var9;
                    var5 = undefined;
                    if (!var9) {
                        _fun82869_ip = 130;
                        continue _fun82869
                    }
                case 126:
                    var5 = _closure2_slot0;
                case 130:
                    var5 = var6.bind(var7)(var5);
                    var0.description = var5;
                    var0 = var2.bind(var4)(var1, var0, var3);
                    return var0;
            }
        };
        var15 = var17.bind(var18)(var15);
        var14[1] = var15;
        var7.children = var14;
        var7 = var10.bind(var3)(var9, var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot5;
        var5 = 21;
        var5 = var13[var5];
        var5 = var16.bind(var3)(var5);
        var6 = var5.ModalFooter;
        var5 = {};
        var10 = _closure1_slot5;
        var8 = 22;
        var8 = var13[var8];
        var8 = var16.bind(var3)(var8);
        var9 = var8.Button;
        var8 = {};
        var14 = 'primary';
        var8.variant = var14;
        var14 = var13[var11];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var11 = var13[var11];
        var11 = var16.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11["NX+WJN"];
        var11 = var14.bind(var15)(var11);
        var8.text = var11;
        var11 = 23;
        var11 = var13[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.pop;
        var8.onPress = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TeenActionDisplayType;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = {};
    var8 = var6.USER_INTERACTION;
    var7 = 4;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ChatIcon;
    var3[var8] = var7;
    var8 = var6.USER_CALLED;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PhoneIcon;
    var3[var8] = var7;
    var8 = var6.USER_ADD;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.FriendsIcon;
    var3[var8] = var7;
    var8 = var6.GUILD_ADD;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ServerGridIcon;
    var3[var8] = var7;
    var8 = var6.GUILD_INTERACTION;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ThreadIcon;
    var3[var8] = var7;
    var8 = var6.PURCHASES;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CreditCardIcon;
    var3[var8] = var7;
    var7 = var6.TOTAL_VOICE_MINUTES;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ClockIcon;
    var3[var7] = var6;
    var _closure1_slot7 = var3;
    var3 = 11;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var11 = {
        'display': 'flex',
        'flexDirection': 'row',
        'width': '100%',
        'alignItems': 'center'
    };
    var9 = 12;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var11.marginBottom = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var11.paddingVertical = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var11.paddingHorizontal = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var11.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var11.borderRadius = var13;
    var6.row = var11;
    var11 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var11.backgroundColor = var13;
    var6.primary = var11;
    var11 = {};
    var11.flexShrink = var12;
    var6.content = var11;
    var11 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': 40,
        'height': 40,
        'backgroundColor': null,
        'borderRadius': null,
        'flexShrink': 0
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var11.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var11.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var11.marginRight = var12;
    var6.iconContainer = var11;
    var11 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var11.backgroundColor = var12;
    var6.iconContainerAccent = var11;
    var11 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var11.marginBottom = var12;
    var6.header = var11;
    var11 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_BRAND;
    var11.tintColor = var12;
    var6.icon = var11;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var6 = function arg0() {
        var0 = arg0;
        var16 = var0.header;
        var12 = var0.description;
        var9 = var0.IconComponent;
        var0 = _closure1_slot8;
        var3 = undefined;
        var17 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var17.row;
        var0.style = var4;
        var6 = _closure1_slot5;
        var5 = _closure1_slot4;
        var4 = {};
        var7 = var17.iconContainer;
        var4.style = var7;
        var8 = _closure1_slot5;
        var7 = {};
        var10 = var17.icon;
        var7.style = var10;
        var7 = var8.bind(var3)(var9, var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot6;
        var6 = _closure1_slot4;
        var5 = {};
        var8 = var17.content;
        var5.style = var8;
        var15 = _closure1_slot5;
        var10 = _closure1_slot0;
        var13 = _closure1_slot2;
        var9 = 13;
        var8 = var13[var9];
        var8 = var10.bind(var3)(var8);
        var14 = var8.Text;
        var8 = {
            'style': null,
            'variant': 'text-sm/bold',
            'color': 'mobile-text-heading-primary'
        };
        var17 = var17.header;
        var8.style = var17;
        var8.children = var16;
        var14 = var15.bind(var3)(var14, var8);
        var8 = new Array(2);
        var8[0] = var14;
        var11 = _closure1_slot5;
        var9 = var13[var9];
        var9 = var10.bind(var3)(var9);
        var10 = var9.Text;
        var9 = {
            'variant': 'text-xs/medium',
            'color': 'text-default'
        };
        var9.children = var12;
        var9 = var11.bind(var3)(var10, var9);
        var8[1] = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'paddingHorizontal': null,
        'width': '100%'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var8.marginBottom = var9;
    var3.groupHeader = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = function() { // Environment: var1
            var1 = function() {
                var0 = {};
                var1 = {};
                var3 = true;
                var1.headerShown = var3;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 24;
                var4 = var8[var4];
                var7 = undefined;
                var5 = var5.bind(var7)(var4);
                var4 = var5.getHeaderCloseButton;
                var6 = _closure1_slot1;
                var3 = 23;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.pop;
                var3 = var4.bind(var5)(var3);
                var1.headerLeft = var3;
                var3 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var3;
                var2 = function() {
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot11;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var1.render = var2;
                var0.DATA_TOOLTIP = var1;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var1 = new Array(0);
        var4 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot5;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 25;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.Modal;
        var0 = {};
        var5 = 'DATA_TOOLTIP';
        var0.initialRouteName = var5;
        var0.screens = var4;
        var4 = 15;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["13/7kX"];
        var4 = var5.bind(var6)(var4);
        var0.headerBackTitle = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4594, 33, 4840, 10560, 3151, 10065, 4842, 10562, 3275, 1297, 671, 3942, 10559, 1234, 1860, 6577, 4658, 6506, 6507, 10554, 4084, 4561, 4705, 7573, 2]);