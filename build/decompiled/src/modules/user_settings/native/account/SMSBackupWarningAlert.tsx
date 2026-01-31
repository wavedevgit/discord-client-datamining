// modules/user_settings/native/account/SMSBackupWarningAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'center';
    var8.textAlign = var9;
    var3.title = var8;
    var8 = {
        'marginTop': 8,
        'textAlign': 'center',
        'lineHeight': 18
    };
    var3.body = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/SMSBackupWarningAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SMSBackupWarningAlert, environment: var1
        var0 = arg0;
        var0 = var0.onConfirm;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot5;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var1 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 3;
        var0 = var12[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var11 = _closure1_slot0;
        var8 = 4;
        var6 = var12[var8];
        var6 = var11.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var12[var8];
        var6 = var11.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["ETE/oC"];
        var6 = var7.bind(var10)(var6);
        var0.cancelText = var6;
        var6 = var12[var8];
        var6 = var11.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var12[var8];
        var6 = var11.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.N86XcP;
        var6 = var7.bind(var10)(var6);
        var0.confirmText = var6;
        var6 = function() { // Original name: onConfirm, environment: var5
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.close;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.onConfirm = var6;
        var5 = function() { // Original name: onCancel, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.close;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.onCancel = var5;
        var7 = _closure1_slot3;
        var5 = 6;
        var4 = var12[var5];
        var4 = var11.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-lg/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var10 = var9.title;
        var4.style = var10;
        var10 = var12[var8];
        var10 = var11.bind(var3)(var10);
        var14 = var10.intl;
        var13 = var14.string;
        var10 = var12[var8];
        var10 = var11.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.Ed4XQB;
        var10 = var13.bind(var14)(var10);
        var4.children = var10;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var9 = var9.body;
        var5.style = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.EDU2Eg;
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 3896, 1234, 3895, 3900, 2]);