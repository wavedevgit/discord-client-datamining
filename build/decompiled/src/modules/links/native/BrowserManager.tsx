// modules/links/native/BrowserManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var4 = function() {
        var1 = _closure1_slot5;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.isChromeInstalled;
        return var0;
    };
    var _closure1_slot6 = var4;
    var3 = function() {
        var1 = _closure1_slot5;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.selectedBrowser;
        return var0;
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.NativeModules;
    var _closure1_slot3 = var5;
    var5 = var5.BrowserManager;
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.create;
    var5 = function() { // Environment: var1
        _fun28268: for (var _fun28268_ip = 0;;) switch (_fun28268_ip) {
            case 0:
                var0 = {};
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 2;
                var1 = var1[var5];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun28268_ip = 52;
                    continue _fun28268
                }
            case 40:
                var1 = _closure1_slot4;
                var1 = var1.isChromeInstalled;
                _fun28268_ip = 88;
                continue _fun28268;
            case 52:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 3;
                var3 = var7[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.getConstants;
                var3 = var3.bind(var6)();
                var1 = var3.isChromeInstalled;
            case 88:
                var0.isChromeInstalled = var1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun28268_ip = 135;
                    continue _fun28268
                }
            case 123:
                var1 = _closure1_slot4;
                var1 = var1.selectedBrowser;
                _fun28268_ip = 171;
                continue _fun28268;
            case 135:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 3;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getConstants;
                var2 = var2.bind(var3)();
                var1 = var2.selectedBrowser;
            case 171:
                var0.selectedBrowser = var1;
                return var0;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/links/native/BrowserManager.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function() {
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.isChromeInstalled;
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useBrowserManagerIsChromeInstalled = var5;
    var2.getBrowserManagerIsChromeInstalled = var4;
    var4 = function() {
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.selectedBrowser;
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useBrowserManagerSelectedBrowser = var4;
    var2.getBrowserManagerSelectedBrowser = var3;
    var3 = function arg0() {
        _fun28273: for (var _fun28273_ip = 0;;) switch (_fun28273_ip) {
            case 0:
                var2 = arg0;
                var6 = arguments[1];
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun28273_ip = 23;
                    continue _fun28273
                }
            case 12:
                var0 = _closure1_slot7;
                var6 = var0.bind(var3)();
            case 23:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 4;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.WebBrowserType;
                var1 = var1.SAFARI;
                if (!(var6 !== var1)) {
                    _fun28273_ip = 402;
                    continue _fun28273
                }
            case 65:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.WebBrowserType;
                var1 = var1.CHROME;
                if (!(var6 === var1)) {
                    _fun28273_ip = 112;
                    continue _fun28273
                }
            case 98:
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun28273_ip = 402;
                    continue _fun28273
                }
            case 112:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.WebBrowserType;
                var1 = var1.IN_APP;
                if (!(var6 !== var1)) {
                    _fun28273_ip = 319;
                    continue _fun28273
                }
            case 148:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.WebBrowserType;
                var1 = var1.CHROME;
                if (!(var6 !== var1)) {
                    _fun28273_ip = 233;
                    continue _fun28273
                }
            case 181:
                var1 = global;
                var5 = var1.Error;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = 'Unknown browser type: ';
                var8 = var4.bind(var1)(var6);
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = var4;
                var1 = new var9[var5](var8, var7);
                var1 = var1 instanceof Object ? var1 : var4;
                throw var1;
            case 233:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun28273_ip = 286;
                    continue _fun28273
                }
            case 266:
                var5 = _closure1_slot4;
                var4 = var5.openInChromeURL;
                var1 = true;
                var1 = var4.bind(var5)(var2, var1);
                _fun28273_ip = 317;
                continue _fun28273;
            case 286:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.openInChromeURL;
                var1 = var4.bind(var5)(var2);
            case 317:
                return var1;
            case 319:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun28273_ip = 369;
                    continue _fun28273
                }
            case 352:
                var4 = _closure1_slot4;
                var1 = var4.openInAppURL;
                var1 = var1.bind(var4)(var2);
                _fun28273_ip = 400;
                continue _fun28273;
            case 369:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.openInAppURL;
                var1 = var4.bind(var5)(var2);
            case 400:
                return var1;
            case 402:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.performURLNavigation;
                var0 = var0.bind(var1)(var2);
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.browserManagerOpenUrl = var3;
    var3 = function arg0() {
        _fun28274: for (var _fun28274_ip = 0;;) switch (_fun28274_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun28274_ip = 67;
                    continue _fun28274
                }
            case 41:
                var2 = _closure1_slot3;
                var3 = var2.BrowserManager;
                var2 = var3.selectBrowser;
                var2 = var2.bind(var3)(var4);
                _fun28274_ip = 347;
                continue _fun28274;
            case 67:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 4;
                var2 = var2[var5];
                var2 = var3.bind(var0)(var2);
                var2 = var2.WebBrowserType;
                var2 = var2.SAFARI;
                if (!(var2 !== var4)) {
                    _fun28274_ip = 291;
                    continue _fun28274
                }
            case 106:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var0)(var2);
                var2 = var2.WebBrowserType;
                var2 = var2.IN_APP;
                if (!(var2 !== var4)) {
                    _fun28274_ip = 233;
                    continue _fun28274
                }
            case 139:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var0)(var2);
                var2 = var2.WebBrowserType;
                var2 = var2.CHROME;
                if (!(var2 === var4)) {
                    _fun28274_ip = 347;
                    continue _fun28274
                }
            case 175:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 3;
                var3 = var7[var2];
                var5 = var5.bind(var0)(var3);
                var3 = var5.selectBrowser;
                var6 = _closure1_slot0;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.BrowserType;
                var2 = var2.CHROME;
                var2 = var3.bind(var5)(var2);
                _fun28274_ip = 347;
                continue _fun28274;
            case 233:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 3;
                var3 = var7[var2];
                var5 = var5.bind(var0)(var3);
                var3 = var5.selectBrowser;
                var6 = _closure1_slot0;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.BrowserType;
                var2 = var2.IN_APP;
                var2 = var3.bind(var5)(var2);
                _fun28274_ip = 347;
                continue _fun28274;
            case 291:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 3;
                var3 = var7[var2];
                var5 = var5.bind(var0)(var3);
                var3 = var5.selectBrowser;
                var6 = _closure1_slot0;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.BrowserType;
                var2 = var2.SAFARI;
                var2 = var3.bind(var5)(var2);
            case 347:
                var3 = _closure1_slot5;
                var2 = var3.setState;
                var1 = {};
                var1.selectedBrowser = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.browserManagerSelectBrowser = var3;
    var1 = function() {
        _fun28275: for (var _fun28275_ip = 0;;) switch (_fun28275_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun28275_ip = 60;
                    continue _fun28275
                }
            case 38:
                var1 = _closure1_slot3;
                var2 = var1.BrowserManager;
                var1 = var2.closeBrowser;
                var1 = var1.bind(var2)();
            case 60:
                return var0;
        }
    };
    var2.browserManagerCloseBrowser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 629, 478, 3279, 670, 3146, 2]);