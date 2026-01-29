// ../discord_common/js/shared/utils/PlatformUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = function() { // Original name: isWindows, environment: var1
        var2 = /^win/;
        var1 = var2.test;
        var0 = _closure1_slot1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot2 = var5;
    var4 = function() { // Original name: isDesktop, environment: var1
        _fun6167: for (var _fun6167_ip = 0;;) switch (_fun6167_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = undefined;
                var0 = var1.bind(var0)();
                if (var0) {
                    _fun6167_ip = 18;
                    continue _fun6167
                }
            case 16:
                var0 = false;
            case 18:
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var3 = function() { // Original name: isOculusWeb, environment: var1
        _fun6168: for (var _fun6168_ip = 0;;) switch (_fun6168_ip) {
            case 0:
                var0 = global;
                var0 = var0.navigator;
                var4 = var0.userAgent;
                var1 = null;
                var2 = var1 == var4;
                var0 = undefined;
                if (var2) {
                    _fun6168_ip = 50;
                    continue _fun6168
                }
            case 25:
                var3 = var4.match;
                var2 = /OculusBrowser/i;
                var0 = var3.bind(var4)(var2);
            case 50:
                var0 = var1 != var0;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var6 = true;
    var7.value = var6;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var7 = {};
    var0 = 'WINDOWS';
    var7.WINDOWS = var0;
    var0 = 'OSX';
    var7.OSX = var0;
    var0 = 'LINUX';
    var7.LINUX = var0;
    var0 = 'WEB';
    var7.WEB = var0;
    var _closure1_slot0 = var7;
    var0 = 'android';
    var _closure1_slot1 = var0;
    var8 = arg6;
    var0 = 0;
    var9 = var8[var0];
    var8 = arg1;
    var0 = undefined;
    var10 = var8.bind(var0)(var9);
    var9 = var10.fileFinishedImporting;
    var8 = '../discord_common/js/shared/utils/PlatformUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.PlatformTypes = var7;
    var2.isPlatformEmbedded = var6;
    var2.isWindows = var5;
    var5 = function() { // Original name: isMac, environment: var1
        var0 = false;
        return var0;
    };
    var2.isMac = var5;
    var5 = function() { // Original name: isLinux, environment: var1
        var0 = false;
        return var0;
    };
    var2.isLinux = var5;
    var2.isDesktop = var4;
    var4 = function() { // Original name: isWeb, environment: var1
        var0 = false;
        return var0;
    };
    var2.isWeb = var4;
    var4 = function() { // Original name: isAndroidChrome, environment: var1
        _fun6170: for (var _fun6170_ip = 0;;) switch (_fun6170_ip) {
            case 0:
                var1 = global;
                var0 = var1.navigator;
                var0 = var0.userAgent;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun6170_ip = 66;
                    continue _fun6170
                }
            case 23:
                var1 = var1.navigator;
                var3 = var1.userAgent;
                var1 = var3.toLowerCase;
                var4 = var1.bind(var3)();
                var3 = var4.match;
                var1 = '(android ).+chrome/[.0-9]* mobile';
                var1 = var3.bind(var4)(var1);
                var0 = var2 != var1;
            case 66:
                return var0;
        }
    };
    var2.isAndroidChrome = var4;
    var4 = function() { // Original name: isAndroidWeb, environment: var1
        _fun6171: for (var _fun6171_ip = 0;;) switch (_fun6171_ip) {
            case 0:
                var0 = global;
                var0 = var0.navigator;
                var4 = var0.userAgent;
                var1 = null;
                var2 = var1 == var4;
                var0 = undefined;
                if (var2) {
                    _fun6171_ip = 50;
                    continue _fun6171
                }
            case 25:
                var3 = var4.match;
                var2 = /android/i;
                var0 = var3.bind(var4)(var2);
            case 50:
                var0 = var1 != var0;
                return var0;
        }
    };
    var2.isAndroidWeb = var4;
    var4 = function() { // Original name: isMacWeb, environment: var1
        _fun6172: for (var _fun6172_ip = 0;;) switch (_fun6172_ip) {
            case 0:
                var0 = global;
                var0 = var0.navigator;
                var4 = var0.userAgent;
                var1 = null;
                var2 = var1 == var4;
                var0 = undefined;
                if (var2) {
                    _fun6172_ip = 50;
                    continue _fun6172
                }
            case 25:
                var3 = var4.match;
                var2 = /Macintosh/i;
                var0 = var3.bind(var4)(var2);
            case 50:
                var0 = var1 != var0;
                return var0;
        }
    };
    var2.isMacWeb = var4;
    var4 = function() { // Original name: isAndroid, environment: var1
        var0 = true;
        return var0;
    };
    var2.isAndroid = var4;
    var4 = function() { // Original name: isIOS, environment: var1
        var0 = false;
        return var0;
    };
    var2.isIOS = var4;
    var2.isOculusWeb = var3;
    var3 = function() { // Original name: platformPrefersDeepLink, environment: var1
        var1 = _closure1_slot4;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var2.platformPrefersDeepLink = var3;
    var3 = function() { // Original name: platformSupportsActivityJoin, environment: var1
        _fun6176: for (var _fun6176_ip = 0;;) switch (_fun6176_ip) {
            case 0:
                var0 = _closure1_slot3;
                var2 = undefined;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun6176_ip = 24;
                    continue _fun6176
                }
            case 16:
                var1 = _closure1_slot4;
                var0 = var1.bind(var2)();
            case 24:
                if (var0) {
                    _fun6176_ip = 29;
                    continue _fun6176
                }
            case 27:
                var0 = true;
            case 29:
                return var0;
        }
    };
    var2.platformSupportsActivityJoin = var3;
    var3 = function() { // Original name: getPlatform, environment: var1
        _fun6177: for (var _fun6177_ip = 0;;) switch (_fun6177_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = undefined;
                var0 = var2.bind(var0)();
                var1 = _closure1_slot0;
                if (var0) {
                    _fun6177_ip = 28;
                    continue _fun6177
                }
            case 20:
                var0 = var1.WEB;
                _fun6177_ip = 34;
                continue _fun6177;
            case 28:
                var0 = var1.WINDOWS;
            case 34:
                return var0;
        }
    };
    var2.getPlatform = var3;
    var3 = function() { // Original name: getPlatformName, environment: var1
        var0 = _closure1_slot1;
        return var0;
    };
    var2.getPlatformName = var3;
    var3 = function() { // Original name: getNativePlatform, environment: var1
        _fun6179: for (var _fun6179_ip = 0;;) switch (_fun6179_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = 'ios';
                if (!(var1 !== var2)) {
                    _fun6179_ip = 29;
                    continue _fun6179
                }
            case 15:
                var1 = 'android';
                if (!(var1 !== var2)) {
                    _fun6179_ip = 29;
                    continue _fun6179
                }
            case 23:
                var1 = 'web';
                return var1;
            case 29:
                var0 = _closure1_slot1;
                return var0;
        }
    };
    var2.getNativePlatform = var3;
    var1 = function() { // Original name: getOS, environment: var1
        var0 = global;
        var0 = var0.window;
        var0 = var0.navigator;
        var0 = var0.userAgent;
        var0 = 'android';
        return var0;
    };
    var2.getOS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);