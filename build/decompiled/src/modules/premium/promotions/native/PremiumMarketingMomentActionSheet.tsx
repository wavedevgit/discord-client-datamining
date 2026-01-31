// modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'paddingVertical': 12,
        'paddingHorizontal': 20
    };
    var12 = 'center';
    var3 = 20;
    var10 = 7;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9.borderRadius = var13;
    var6.container = var9;
    var9 = {
        'marginTop': null,
        'width': 335,
        'height': 48
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9.marginTop = var13;
    var6.buttonContainer = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.marginBottom = var13;
    var9.textAlign = var12;
    var6.header = var9;
    var9 = {};
    var9.textAlign = var12;
    var6.body = var9;
    var9 = {
        'height': 188,
        'width': 335
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_24;
    var9.marginBottom = var10;
    var6.image = var9;
    var9 = {
        'bottom': 4294967295,
        'width': 22,
        'height': 16
    };
    var6.nitroWheelIcon = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PremiumMarketingMomentActionSheet, environment: var1
        _fun109819: for (var _fun109819_ip = 0;;) switch (_fun109819_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.markAsDismissed;
                var _closure2_slot0 = var6;
                var15 = var1.bottomSheetData;
                var5 = var1.componentId;
                var1 = _closure1_slot10;
                var3 = undefined;
                var18 = var1.bind(var3)();
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 8;
                var1 = var10[var1];
                var7 = var9.bind(var3)(var1);
                var4 = var7.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var13 = var4.bind(var7)(var2, var1);
                var4 = _closure1_slot3;
                var7 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot7;
                    var1 = var0.PRIMARY;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openUserSettings;
                    var1 = {};
                    var4 = _closure1_slot6;
                    var4 = var4.PREMIUM;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var14 = var7.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot7;
                    var1 = var0.USER_DISMISS;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var8 = _closure1_slot1;
                var0 = 10;
                var0 = var10[var0];
                var1 = var8.bind(var3)(var0);
                var0 = {};
                var2 = 11;
                var6 = var10[var2];
                var6 = var9.bind(var3)(var6);
                var6 = var6.ImpressionTypes;
                var6 = var6.HALFSHEET;
                var0.type = var6;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.ImpressionNames;
                var2 = var2.PREMIUM_MARKETING_COMPONENT;
                var0.name = var2;
                var2 = {};
                var6 = 12;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.MarketingComponentType;
                var6 = var6.MOBILE_BOTTOM_SHEET;
                var2.component_type = var6;
                var2.component_id = var5;
                var0.properties = var2;
                var0 = var1.bind(var3)(var0);
                var2 = _closure1_slot8;
                var0 = 13;
                var0 = var10[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.onDismiss = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot4;
                var4 = {};
                var11 = var18.container;
                var7 = new Array(1);
                var7[0] = var11;
                var4.style = var7;
                var7 = 14;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var11 = {};
                var12 = var15.assetUrl;
                var11.uri = var12;
                var7.source = var11;
                var11 = var18.image;
                var7.style = var11;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(4);
                var7[0] = var8;
                var8 = 15;
                var11 = var10[var8];
                var11 = var9.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'style': null,
                    'color': 'mobile-text-heading-primary',
                    'variant': 'heading-lg/extrabold'
                };
                var19 = var18.header;
                var16 = new Array(1);
                var16[0] = var19;
                var11.style = var16;
                var16 = var15.header;
                var11.children = var16;
                var11 = var2.bind(var3)(var12, var11);
                var7[1] = var11;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'color': 'text-default',
                    'variant': 'text-sm/normal'
                };
                var11 = var18.body;
                var10 = new Array(1);
                var10[0] = var11;
                var8.style = var10;
                var11 = var15.body;
                var10 = new Array(3);
                var10[0] = var11;
                var11 = ' ';
                var10[1] = var11;
                var12 = var15.helpArticleId;
                var11 = '';
                var11 = var11 !== var12;
                if (!var11) {
                    _fun109819_ip = 627;
                    continue _fun109819
                }
            case 529:
                var16 = _closure1_slot0;
                var23 = _closure1_slot2;
                var12 = 16;
                var19 = var23[var12];
                var19 = var16.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.format;
                var12 = var23[var12];
                var12 = var16.bind(var3)(var12);
                var12 = var12.t;
                var16 = var12.mYS7uY;
                var12 = {};
                var22 = _closure1_slot1;
                var21 = 17;
                var21 = var23[var21];
                var23 = var22.bind(var3)(var21);
                var22 = var23.getArticleURL;
                var21 = var15.helpArticleId;
                var21 = var22.bind(var23)(var21);
                var12.helpCenterLink = var21;
                var11 = var19.bind(var20)(var16, var12);
            case 627:
                var10[2] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var9, var8);
                var7[2] = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var18.buttonContainer;
                var11 = new Array(1);
                var11[0] = var12;
                var8.style = var11;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 18;
                var11 = var16[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Button;
                var11 = {
                    'text': null,
                    'size': 'lg',
                    'onPress': null,
                    'icon': null,
                    'iconPosition': 'start',
                    'variant': 'experimental_premium-primary'
                };
                var19 = var15.button;
                var16 = null;
                var20 = var16 == var19;
                var15 = undefined;
                if (var20) {
                    _fun109819_ip = 736;
                    continue _fun109819
                }
            case 730:
                var15 = var19.copy;
            case 736:
                if (!(var16 == var15)) {
                    _fun109819_ip = 795;
                    continue _fun109819
                }
            case 740:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 16;
                var19 = var22[var16];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var16 = var22[var16];
                var16 = var21.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.J61px0;
                var15 = var19.bind(var20)(var16);
            case 795:
                var11.text = var15;
                var11.onPress = var14;
                var16 = _closure1_slot8;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 19;
                var14 = var19[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.NitroWheelIcon;
                var14 = {};
                var20 = var18.nitroWheelIcon;
                var18 = new Array(1);
                var18[0] = var20;
                var14.style = var18;
                var18 = _closure1_slot1;
                var17 = 7;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.unsafe_rawColors;
                var17 = var17.WHITE;
                var14.color = var17;
                var17 = 'custom';
                var14.size = var17;
                var14 = var16.bind(var3)(var15, var14);
                var11.icon = var14;
                var13 = !var13;
                var11.shiny = var13;
                var11 = var10.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 660, 1369, 33, 1297, 671, 566, 5884, 5177, 481, 9389, 4894, 4667, 3900, 1234, 1675, 4043, 5711, 2]);