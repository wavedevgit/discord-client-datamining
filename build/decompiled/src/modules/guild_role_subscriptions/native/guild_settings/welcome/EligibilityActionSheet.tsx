// modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
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
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'backgroundColor': null,
        'paddingHorizontal': 0
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {
        'backgroundColor': null,
        'marginHorizontal': 24,
        'marginTop': 16
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.title = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: EligibilityActionSheet, environment: var1
        var1 = arg0;
        var2 = var1.eligibility;
        var7 = var1.onRequireModeratorMFAClick;
        var _closure2_slot0 = var7;
        var1 = _closure1_slot7;
        var3 = undefined;
        var9 = var1.bind(var3)();
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            var0 = {};
            var1 = {};
            var3 = function() { // Original name: onEnableMFAClick, environment: var2
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 5;
                var1 = var3[var0];
                var0 = undefined;
                var6 = var2.bind(var0)(var1);
                var5 = var6.hideActionSheet;
                var1 = 'EligibilityActionSheet';
                var1 = var5.bind(var6)(var1);
                var1 = 6;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.close;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot0;
                var1 = 7;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.openUserSettings;
                var1 = {};
                var4 = _closure1_slot4;
                var4 = var4.ACCOUNT;
                var1.screen = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1.onEnableMFAClick = var3;
            var2 = function() { // Original name: onRequireModeratorMFAClick, environment: var2
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.hideActionSheet;
                var1 = 'EligibilityActionSheet';
                var1 = var2.bind(var3)(var1);
                var1 = _closure2_slot0;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1.onRequireModeratorMFAClick = var2;
            var0.actions = var1;
            var1 = true;
            var0.sortedByIneligible = var1;
            return var0;
        };
        var1 = var5.bind(var6)(var0, var1);
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 8;
        var0 = var10[var0];
        var0 = var6.bind(var3)(var0);
        var8 = var0.bind(var3)(var2, var1);
        var2 = _closure1_slot6;
        var14 = _closure1_slot0;
        var0 = 9;
        var0 = var10[var0];
        var0 = var14.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var5 = true;
        var0.startExpanded = var5;
        var7 = _closure1_slot5;
        var4 = 10;
        var4 = var10[var4];
        var4 = var14.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'heading-lg/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var11 = var9.title;
        var4.style = var11;
        var11 = 11;
        var12 = var10[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var10[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11["3s47iN"];
        var11 = var12.bind(var13)(var11);
        var4.children = var11;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 12;
        var5 = var10[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var9 = var9.container;
        var5.style = var9;
        var5.items = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    var1 = 'EligibilityActionSheet';
    var2.ELIGIBILITY_ACTION_SHEET_KEY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 1297, 671, 3237, 8115, 5883, 14858, 4893, 3901, 1234, 14862, 2]);