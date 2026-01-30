// modules/user_settings/native/design_system/UserSettingsDesignSystemSheets.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: DemoActionSheet, environment: var1
        _fun88578: for (var _fun88578_ip = 0;;) switch (_fun88578_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var6 = false;
                var1 = var0.bind(var1)(var6);
                var0 = _closure1_slot3;
                var3 = undefined;
                var5 = 2;
                var0 = var0.bind(var3)(var1, var5);
                var2 = 0;
                var13 = var0[var2];
                var1 = 1;
                var24 = var0[var1];
                var4 = _closure1_slot4;
                var0 = var4.useState;
                var4 = var0.bind(var4)(var6);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var5);
                var26 = var0[var2];
                var25 = var0[var1];
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var0 = 'Header title';
                var4 = var4.bind(var6)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var5);
                var27 = var0[var2];
                var22 = var0[var1];
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var0 = 'Header subtitle';
                var4 = var4.bind(var6)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var5);
                var23 = var0[var2];
                var12 = var0[var1];
                var _closure2_slot0 = var12;
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var0 = 'Label';
                var4 = var4.bind(var6)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var5);
                var15 = var0[var2];
                var14 = var0[var1];
                var _closure2_slot1 = var14;
                var2 = _closure1_slot7;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 6;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var6 = _closure1_slot7;
                var4 = 7;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var4.title = var27;
                var8 = '';
                var7 = undefined;
                if (!(var8 !== var23)) {
                    _fun88578_ip = 274;
                    continue _fun88578
                }
            case 271:
                var7 = var23;
            case 274:
                var4.subtitle = var7;
                var7 = var13;
                if (!var7) {
                    _fun88578_ip = 335;
                    continue _fun88578
                }
            case 285:
                var16 = _closure1_slot7;
                var9 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 8;
                var8 = var17[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.ActionSheetHeaderPressableText;
                var8 = {};
                var17 = _closure1_slot6;
                var8.onPress = var17;
                var8.label = var15;
                var7 = var16.bind(var3)(var9, var8);
            case 335:
                var4.trailing = var7;
                var7 = var26;
                if (!var7) {
                    _fun88578_ip = 392;
                    continue _fun88578
                }
            case 346:
                var16 = _closure1_slot7;
                var9 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 9;
                var8 = var17[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.ActionSheetCloseButton;
                var8 = {};
                var17 = _closure1_slot6;
                var8.onPress = var17;
                var7 = var16.bind(var3)(var9, var8);
            case 392:
                var4.leading = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot8;
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 10;
                var4 = var16[var7];
                var4 = var9.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var8 = 24;
                var4.spacing = var8;
                var18 = _closure1_slot8;
                var7 = var16[var7];
                var7 = var9.bind(var3)(var7);
                var17 = var7.Stack;
                var7 = {};
                var21 = _closure1_slot7;
                var8 = 11;
                var19 = var16[var8];
                var19 = var9.bind(var3)(var19);
                var20 = var19.TextInput;
                var19 = {};
                var19.value = var27;
                var19.onChange = var22;
                var22 = 'Title';
                var19.label = var22;
                var20 = var21.bind(var3)(var20, var19);
                var19 = new Array(2);
                var19[0] = var20;
                var22 = _closure1_slot7;
                var20 = var16[var8];
                var20 = var9.bind(var3)(var20);
                var21 = var20.TextInput;
                var20 = {
                    'value': null,
                    'onChange': null,
                    'label': 'Subtitle',
                    'maxLength': 100,
                    'isClearable': true
                };
                var20.value = var23;
                var20.onChange = var12;
                var12 = true;
                var23 = function() { // Original name: onClear, environment: var11
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = '';
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var20.onClear = var23;
                var20 = var22.bind(var3)(var21, var20);
                var19[1] = var20;
                var7.children = var19;
                var17 = var18.bind(var3)(var17, var7);
                var7 = new Array(3);
                var7[0] = var17;
                var19 = _closure1_slot8;
                var21 = 12;
                var17 = var16[var21];
                var17 = var9.bind(var3)(var17);
                var17 = var17.ActionSheetRow;
                var18 = var17.Group;
                var17 = {};
                var23 = _closure1_slot7;
                var20 = var16[var21];
                var20 = var9.bind(var3)(var20);
                var22 = var20.ActionSheetSwitchRow;
                var20 = {};
                var20.value = var26;
                var20.onValueChange = var25;
                var25 = 'Show Leading';
                var20.label = var25;
                var22 = var23.bind(var3)(var22, var20);
                var20 = new Array(2);
                var20[0] = var22;
                var23 = _closure1_slot7;
                var21 = var16[var21];
                var21 = var9.bind(var3)(var21);
                var22 = var21.ActionSheetSwitchRow;
                var21 = {};
                var21.value = var13;
                var21.onValueChange = var24;
                var24 = 'Show Trailing';
                var21.label = var24;
                var21 = var23.bind(var3)(var22, var21);
                var20[1] = var21;
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var7[1] = var17;
                var10 = _closure1_slot7;
                var8 = var16[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.TextInput;
                var8 = {};
                var8.value = var15;
                var8.onChange = var14;
                var14 = 'Trailing';
                var8.label = var14;
                var13 = !var13;
                var8.isDisabled = var13;
                var8.isClearable = var12;
                var11 = function() { // Original name: onClear, environment: var11
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = '';
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var8.onClear = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: DemoPromoSheet, environment: var1
        var3 = _closure1_slot7;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 14;
        var0 = var11[var0];
        var2 = undefined;
        var0 = var10.bind(var2)(var0);
        var1 = var0.PromoSheet;
        var0 = {
            'illustration': null,
            'title': "Here's a Promo Sheet",
            'description': "You can use this to promote new features, products, or anything else you'd like!"
        };
        var7 = _closure1_slot7;
        var6 = _closure1_slot1;
        var5 = 15;
        var5 = var11[var5];
        var6 = var6.bind(var2)(var5);
        var5 = {};
        var5 = var7.bind(var2)(var6, var5);
        var0.illustration = var5;
        var6 = _closure1_slot7;
        var4 = 16;
        var4 = var11[var4];
        var4 = var10.bind(var2)(var4);
        var5 = var4.Button;
        var4 = {};
        var7 = 'lg';
        var4.size = var7;
        var7 = function() { // Original name: onPress, environment: var7
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var0 = 'promo-sheet-demo';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.onPress = var7;
        var7 = 17;
        var8 = var11[var7];
        var8 = var10.bind(var2)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var2)(var7);
        var7 = var7.t;
        var7 = var7.BddRzS;
        var7 = var8.bind(var9)(var7);
        var4.text = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.actions = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': 16,
        'alignItems': 'center'
    };
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function() { // Original name: showDemoPromoSheet, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.openLazy;
        var2 = function() { // Environment: var1
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = _closure1_slot12;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = 'promo-sheet-demo';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot10 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemSheets.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: UserSettingsDesignSystemSheets, environment: var1
        var0 = _closure1_slot9;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var4.container;
        var0.contentContainerStyle = var4;
        var6 = _closure1_slot8;
        var16 = _closure1_slot0;
        var19 = _closure1_slot2;
        var11 = 10;
        var4 = var19[var11];
        var4 = var16.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var10 = _closure1_slot7;
        var8 = 18;
        var7 = var19[var8];
        var7 = var16.bind(var3)(var7);
        var9 = var7.Card;
        var7 = {};
        var14 = _closure1_slot8;
        var12 = var19[var11];
        var12 = var16.bind(var3)(var12);
        var13 = var12.Stack;
        var12 = {};
        var21 = _closure1_slot7;
        var17 = 19;
        var15 = var19[var17];
        var15 = var16.bind(var3)(var15);
        var20 = var15.Text;
        var15 = {
            'variant': 'text-lg/bold',
            'children': 'Action Sheet with Title Header'
        };
        var15 = var21.bind(var3)(var20, var15);
        var20 = new Array(3);
        var20[0] = var15;
        var22 = _closure1_slot7;
        var15 = var19[var17];
        var15 = var16.bind(var3)(var15);
        var21 = var15.Text;
        var15 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'An action sheet with a centered title and subtitle, with optional leading and Trailing elements.'
        };
        var15 = var22.bind(var3)(var21, var15);
        var20[1] = var15;
        var23 = _closure1_slot7;
        var15 = 16;
        var21 = var19[var15];
        var21 = var16.bind(var3)(var21);
        var22 = var21.Button;
        var21 = {};
        var24 = function() { // Original name: onPress, environment: var24
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.openLazy;
            var2 = function() { // Environment: var1
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.resolve;
                var0 = _closure1_slot11;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = 'demo-sheet';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var21.onPress = var24;
        var24 = 'Show Action Sheet';
        var21.text = var24;
        var21 = var23.bind(var3)(var22, var21);
        var20[2] = var21;
        var12.children = var20;
        var12 = var14.bind(var3)(var13, var12);
        var7.children = var12;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var10 = _closure1_slot7;
        var8 = var19[var8];
        var8 = var16.bind(var3)(var8);
        var9 = var8.Card;
        var8 = {};
        var13 = _closure1_slot8;
        var11 = var19[var11];
        var11 = var16.bind(var3)(var11);
        var12 = var11.Stack;
        var11 = {};
        var21 = _closure1_slot7;
        var14 = var19[var17];
        var14 = var16.bind(var3)(var14);
        var20 = var14.Text;
        var14 = {
            'variant': 'text-lg/bold',
            'children': 'Promo Sheet'
        };
        var20 = var21.bind(var3)(var20, var14);
        var14 = new Array(3);
        var14[0] = var20;
        var21 = _closure1_slot7;
        var17 = var19[var17];
        var17 = var16.bind(var3)(var17);
        var20 = var17.Text;
        var17 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'A sheet with an illustration, title, description, and actions.'
        };
        var17 = var21.bind(var3)(var20, var17);
        var14[1] = var17;
        var17 = _closure1_slot7;
        var15 = var19[var15];
        var15 = var16.bind(var3)(var15);
        var16 = var15.Button;
        var15 = {};
        var18 = _closure1_slot10;
        var15.onPress = var18;
        var18 = 'Show Promo Sheet';
        var15.text = var18;
        var15 = var17.bind(var3)(var16, var15);
        var14[2] = var15;
        var11.children = var14;
        var11 = var13.bind(var3)(var12, var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 5170, 5173, 5172, 5171, 4039, 5362, 7695, 3237, 5169, 11417, 4043, 1234, 4862, 3901, 2]);