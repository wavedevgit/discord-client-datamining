// modules/user_settings/native/defs/SelectWebBrowserSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 5;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createRadio;
    var1 = {};
    var9 = function() { // Original name: title, environment: var7
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["C+DkPu"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.WEB_BROWSER;
    var1.parent = var8;
    var8 = function() { // Original name: useWebBrowserSettingValue, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.useBrowserManagerSelectedBrowser;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.useValue = var8;
    var8 = function(arg0) { // Original name: onWebBrowserSettingValueChange, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.browserManagerSelectBrowser;
        var1 = global;
        var4 = var1.Number;
        var1 = arg0;
        var1 = var4.bind(var0)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.onValueChange = var8;
    var7 = function() { // Original name: useWebBrowserSettingOptions, environment: var7
        _fun85014: for (var _fun85014_ip = 0;;) switch (_fun85014_ip) {
            case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var0 = var2[var0];
                var5 = undefined;
                var1 = var4.bind(var5)(var0);
                var0 = var1.useBrowserManagerIsChromeInstalled;
                var1 = var0.bind(var1)();
                var0 = new Array(0);
                var8 = var0.push;
                var7 = {};
                var11 = 2;
                var6 = var2[var11];
                var6 = var4.bind(var5)(var6);
                var10 = var6.intl;
                var9 = var10.string;
                var6 = var2[var11];
                var6 = var4.bind(var5)(var6);
                var6 = var6.t;
                var6 = var6.YayR6P;
                var6 = var9.bind(var10)(var6);
                var7.label = var6;
                var6 = 3;
                var9 = var2[var6];
                var9 = var4.bind(var5)(var9);
                var9 = var9.WebBrowserType;
                var9 = var9.IN_APP;
                var7.value = var9;
                var7 = var8.bind(var0)(var7);
                var8 = 4;
                var2 = var2[var8];
                var4 = var4.bind(var5)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun85014_ip = 250;
                    continue _fun85014
                }
            case 157:
                var4 = var0.push;
                var2 = {};
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var10 = var7[var11];
                var10 = var9.bind(var5)(var10);
                var13 = var10.intl;
                var12 = var13.string;
                var10 = var7[var11];
                var10 = var9.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.kEfv89;
                var10 = var12.bind(var13)(var10);
                var2.label = var10;
                var7 = var7[var6];
                var7 = var9.bind(var5)(var7);
                var7 = var7.WebBrowserType;
                var7 = var7.SAFARI;
                var2.value = var7;
                var2 = var4.bind(var0)(var2);
            case 250:
                if (!var1) {
                    _fun85014_ip = 402;
                    continue _fun85014
                }
            case 256:
                var2 = var0.push;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var7.bind(var5)(var4);
                var4 = var7.isAndroid;
                var4 = var4.bind(var7)();
                var10 = _closure1_slot0;
                var7 = _closure1_slot1;
                var8 = var7[var11];
                var8 = var10.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var11];
                var7 = var10.bind(var5)(var7);
                var7 = var7.t;
                if (var4) {
                    _fun85014_ip = 349;
                    continue _fun85014
                }
            case 334:
                var4 = var7.FfjVVt;
                var4 = var8.bind(var9)(var4);
                _fun85014_ip = 360;
                continue _fun85014;
            case 349:
                var7 = var7.kEfv89;
                var4 = var8.bind(var9)(var7);
            case 360:
                var1.label = var4;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.WebBrowserType;
                var3 = var3.CHROME;
                var1.value = var3;
                var1 = var2.bind(var0)(var1);
            case 402:
                return var0;
        }
    };
    var1.useOptions = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/SelectWebBrowserSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6965, 3235, 1234, 670, 478, 8939, 2]);