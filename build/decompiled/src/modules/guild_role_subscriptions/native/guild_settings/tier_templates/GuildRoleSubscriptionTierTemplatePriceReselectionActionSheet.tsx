// modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: PriceOptionRow, environment: var1
        _fun117041: for (var _fun117041_ip = 0;;) switch (_fun117041_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.price;
                var7 = var0.selected;
                var4 = var0.onPress;
                var0 = _closure1_slot11;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = var9.rowContainer;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = undefined;
                if (!var7) {
                    _fun117041_ip = 84;
                    continue _fun117041
                }
            case 78:
                var6 = var9.containerSelected;
            case 84:
                var5[1] = var6;
                var0.style = var5;
                var5 = 'radio';
                var0.accessibilityRole = var5;
                var5 = {};
                var5.selected = var7;
                var0.accessibilityState = var5;
                var0.onPress = var4;
                var6 = _closure1_slot9;
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 9;
                var4 = var5[var4];
                var5 = var8.bind(var3)(var4);
                var4 = {};
                var9 = var9.rowStatusIcon;
                var4.style = var9;
                var10 = _closure1_slot2;
                if (var7) {
                    _fun117041_ip = 168;
                    continue _fun117041
                }
            case 159:
                var7 = 11;
                var7 = var10[var7];
                _fun117041_ip = 175;
                continue _fun117041;
            case 168:
                var9 = 10;
                var7 = var10[var9];
            case 175:
                var7 = var8.bind(var3)(var7);
                var4.source = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot9;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 12;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var8 = 13;
                var9 = var14[var8];
                var9 = var13.bind(var3)(var9);
                var11 = var9.intl;
                var10 = var11.format;
                var8 = var14[var8];
                var8 = var13.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8.CgmBaG;
                var8 = {};
                var12 = 14;
                var12 = var14[var12];
                var17 = var13.bind(var3)(var12);
                var16 = var17.formatPrice;
                var12 = _closure1_slot8;
                var12 = var12.USD;
                var12 = var16.bind(var17)(var18, var12);
                var8.price = var12;
                var12 = 15;
                var12 = var14[var12];
                var14 = var13.bind(var3)(var12);
                var13 = var14.formatPlanInterval;
                var12 = {};
                var15 = _closure1_slot7;
                var15 = var15.MONTH;
                var12.interval = var15;
                var15 = 1;
                var12.interval_count = var15;
                var12 = var13.bind(var14)(var12);
                var8.interval = var12;
                var8 = var10.bind(var11)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TouchableOpacity;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionIntervalTypes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CurrencyCodes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = 24;
    var8.padding = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderTopLeftRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderTopRightRadius = var11;
    var3.container = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'flexDirection': 'row',
        'alignSelf': 'stretch',
        'justifyContent': 'flex-start',
        'padding': 12,
        'marginBottom': 12,
        'borderWidth': 1
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_MUTED;
    var8.borderColor = var11;
    var3.rowContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.backgroundColor = var11;
    var3.containerSelected = var8;
    var8 = {
        'height': 20,
        'width': 20,
        'marginRight': 12
    };
    var3.rowStatusIcon = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.confirmButton = var8;
    var8 = {};
    var9 = 'center';
    var8.alignSelf = var9;
    var3.backToTemplates = var8;
    var8 = {};
    var9 = 0.5;
    var8.opacity = var9;
    var3.disabled = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet, environment: var1
        var0 = arg0;
        var28 = var0.selectedTemplate;
        var _closure2_slot0 = var28;
        var1 = var0.handleCreateFromTemplate;
        var _closure2_slot1 = var1;
        var23 = var0.newPricesToPick;
        var _closure2_slot2 = var23;
        var0 = _closure1_slot11;
        var3 = undefined;
        var16 = var0.bind(var3)();
        var12 = _closure1_slot1;
        var21 = _closure1_slot2;
        var0 = 16;
        var0 = var21[var0];
        var0 = var12.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var11 = var0.bottom;
        var1 = _closure1_slot4;
        var0 = var1.useState;
        var29 = 0;
        var2 = var0.bind(var1)(var29);
        var1 = _closure1_slot3;
        var0 = 2;
        var1 = var1.bind(var3)(var2, var0);
        var0 = var1[var29];
        var _closure2_slot3 = var0;
        var0 = 1;
        var0 = var1[var0];
        var _closure2_slot4 = var0;
        var2 = _closure1_slot9;
        var20 = _closure1_slot0;
        var0 = 17;
        var0 = var21[var0];
        var0 = var20.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {
            'backdropOpacity': 0.8,
            'startExpanded': true
        };
        var6 = _closure1_slot9;
        var5 = _closure1_slot6;
        var4 = {};
        var7 = var16.container;
        var4.style = var7;
        var9 = _closure1_slot10;
        var7 = 18;
        var7 = var21[var7];
        var7 = var20.bind(var3)(var7);
        var8 = var7.BottomSheetScrollView;
        var7 = {};
        var10 = {};
        var10.paddingBottom = var11;
        var7.contentContainerStyle = var10;
        var13 = _closure1_slot9;
        var14 = 12;
        var10 = var21[var14];
        var10 = var20.bind(var3)(var10);
        var11 = var10.Text;
        var10 = {
            'variant': 'heading-lg/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var17 = 13;
        var19 = var21[var17];
        var19 = var20.bind(var3)(var19);
        var25 = var19.intl;
        var24 = var25.format;
        var19 = var21[var17];
        var19 = var20.bind(var3)(var19);
        var19 = var19.t;
        var22 = var19["5WZ9Ct"];
        var19 = {};
        var26 = var28.listings;
        var26 = var26[var29];
        var26 = var26.name;
        var19.tierName = var26;
        var19 = var24.bind(var25)(var22, var19);
        var10.children = var19;
        var11 = var13.bind(var3)(var11, var10);
        var10 = new Array(9);
        var10[0] = var11;
        var22 = _closure1_slot9;
        var11 = 19;
        var13 = var21[var11];
        var19 = var12.bind(var3)(var13);
        var13 = {};
        var13.size = var14;
        var13 = var22.bind(var3)(var19, var13);
        var10[1] = var13;
        var22 = _closure1_slot9;
        var13 = var21[var14];
        var13 = var20.bind(var3)(var13);
        var19 = var13.Text;
        var13 = {
            'variant': 'text-sm/normal',
            'color': 'text-default'
        };
        var24 = var21[var17];
        var24 = var20.bind(var3)(var24);
        var27 = var24.intl;
        var26 = var27.format;
        var24 = var21[var17];
        var24 = var20.bind(var3)(var24);
        var24 = var24.t;
        var25 = var24["5i7Uhb"];
        var24 = {};
        var30 = 14;
        var30 = var21[var30];
        var31 = var20.bind(var3)(var30);
        var30 = var31.formatPrice;
        var28 = var28.listings;
        var28 = var28[var29];
        var29 = var28.price_tier;
        var28 = _closure1_slot8;
        var28 = var28.USD;
        var28 = var30.bind(var31)(var29, var28);
        var24.price = var28;
        var24 = var26.bind(var27)(var25, var24);
        var13.children = var24;
        var13 = var22.bind(var3)(var19, var13);
        var10[2] = var13;
        var24 = _closure1_slot9;
        var13 = var21[var11];
        var22 = var12.bind(var3)(var13);
        var13 = {};
        var19 = 24;
        var13.size = var19;
        var13 = var24.bind(var3)(var22, var13);
        var10[3] = var13;
        var22 = var23.map;
        var13 = function(arg0, arg1) { // Environment: var18
            var4 = arg0;
            var6 = arg1;
            var _closure3_slot0 = var6;
            var3 = _closure1_slot9;
            var2 = _closure1_slot12;
            var1 = {};
            var1.price = var4;
            var5 = _closure2_slot3;
            var5 = var6 === var5;
            var1.selected = var5;
            var0 = function() { // Original name: onPress, environment: var0
                var2 = _closure2_slot4;
                var1 = _closure3_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1.onPress = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var13 = var22.bind(var23)(var13);
        var10[4] = var13;
        var23 = _closure1_slot9;
        var13 = var21[var11];
        var22 = var12.bind(var3)(var13);
        var13 = {};
        var24 = 36;
        var13.size = var24;
        var13 = var23.bind(var3)(var22, var13);
        var10[5] = var13;
        var23 = _closure1_slot9;
        var13 = 20;
        var13 = var21[var13];
        var22 = var12.bind(var3)(var13);
        var13 = {};
        var24 = 'Confirm New Price';
        var13.text = var24;
        var24 = var16.confirmButton;
        var13.style = var24;
        var24 = function() { // Original name: onPress, environment: var18
            var3 = _closure2_slot1;
            var2 = {};
            var4 = _closure2_slot0;
            var7 = var2;
            var6 = var4;
            var0 = copyDataProperties(var7, var6);
            var0 = {};
            var5 = var4.listings;
            var4 = 0;
            var6 = var5[var4];
            var7 = var0;
            var4 = copyDataProperties(var7, var6);
            var4 = _closure2_slot2;
            var1 = _closure2_slot3;
            var4 = var4[var1];
            var1 = 'price_tier';
            var0[var1] = var4;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = 'listings';
            var2[var0] = var1;
            var0 = undefined;
            var1 = true;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var13.onPress = var24;
        var13 = var23.bind(var3)(var22, var13);
        var10[6] = var13;
        var13 = _closure1_slot9;
        var11 = var21[var11];
        var12 = var12.bind(var3)(var11);
        var11 = {};
        var11.size = var19;
        var11 = var13.bind(var3)(var12, var11);
        var10[7] = var11;
        var13 = _closure1_slot9;
        var12 = _closure1_slot5;
        var11 = {};
        var18 = function() { // Original name: onPress, environment: var18
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.hideActionSheet;
            var0 = var0.bind(var1)();
            return var0;
        };
        var11.onPress = var18;
        var16 = var16.backToTemplates;
        var11.style = var16;
        var16 = 0.5;
        var11.activeOpacity = var16;
        var16 = _closure1_slot9;
        var14 = var21[var14];
        var14 = var20.bind(var3)(var14);
        var15 = var14.Text;
        var14 = {
            'variant': 'text-sm/semibold',
            'color': 'interactive-text-active'
        };
        var18 = var21[var17];
        var18 = var20.bind(var3)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var17 = var21[var17];
        var17 = var20.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.h26VOI;
        var17 = var18.bind(var19)(var17);
        var14.children = var17;
        var14 = var16.bind(var3)(var15, var14);
        var11.children = var14;
        var11 = var13.bind(var3)(var12, var11);
        var10[8] = var11;
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1615, 483, 33, 1297, 671, 6741, 4667, 14793, 13635, 3900, 1234, 4570, 10729, 1568, 4894, 4896, 9226, 4836, 3237, 2]);