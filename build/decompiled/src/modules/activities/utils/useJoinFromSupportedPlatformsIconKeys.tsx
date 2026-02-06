// modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var3 = function arg0() {
        _fun92591: for (var _fun92591_ip = 0;;) switch (_fun92591_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.platforms;
                var2 = var0.currentPlatform;
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var7 = var1;
                var6 = var3;
                var0 = new var7[var0](var6, var5);
                var4 = var0 instanceof Object ? var0 : var1;
                var1 = new Array(0);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun92591_ip = 455;
                    continue _fun92591
                }
            case 59:
                var5 = var3.length;
                var3 = 0;
                if (!(var3 !== var5)) {
                    _fun92591_ip = 455;
                    continue _fun92591
                }
            case 73:
                if (!(var0 != var2)) {
                    _fun92591_ip = 93;
                    continue _fun92591
                }
            case 77:
                var0 = var4.has;
                var0 = var0.bind(var4)(var2);
                if (var0) {
                    _fun92591_ip = 455;
                    continue _fun92591
                }
            case 93:
                var3 = var4.has;
                var0 = _closure1_slot1;
                var0 = var0.ANDROID;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun92591_ip = 142;
                    continue _fun92591
                }
            case 119:
                var3 = var4.has;
                var0 = _closure1_slot1;
                var0 = var0.IOS;
                var0 = var3.bind(var4)(var0);
                if (var0) {
                    _fun92591_ip = 232;
                    continue _fun92591
                }
            case 142:
                var3 = var4.has;
                var0 = _closure1_slot1;
                var0 = var0.ANDROID;
                var0 = var3.bind(var4)(var0);
                if (var0) {
                    _fun92591_ip = 210;
                    continue _fun92591
                }
            case 165:
                var3 = var4.has;
                var0 = _closure1_slot1;
                var0 = var0.IOS;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun92591_ip = 252;
                    continue _fun92591
                }
            case 188:
                var3 = var1.push;
                var0 = _closure1_slot2;
                var0 = var0.IOS;
                var0 = var3.bind(var1)(var0);
                _fun92591_ip = 252;
                continue _fun92591;
            case 210:
                var3 = var1.push;
                var0 = _closure1_slot2;
                var0 = var0.ANDROID;
                var0 = var3.bind(var1)(var0);
                _fun92591_ip = 252;
                continue _fun92591;
            case 232:
                var3 = var1.push;
                var0 = _closure1_slot2;
                var0 = var0.MOBILE;
                var0 = var3.bind(var1)(var0);
            case 252:
                var3 = var4.has;
                var0 = _closure1_slot1;
                var0 = var0.PS4;
                var0 = var3.bind(var4)(var0);
                if (var0) {
                    _fun92591_ip = 295;
                    continue _fun92591
                }
            case 275:
                var5 = var4.has;
                var3 = _closure1_slot1;
                var3 = var3.PS5;
                var0 = var5.bind(var4)(var3);
            case 295:
                if (!var0) {
                    _fun92591_ip = 318;
                    continue _fun92591
                }
            case 298:
                var3 = var1.push;
                var0 = _closure1_slot2;
                var0 = var0.PLAYSTATION;
                var0 = var3.bind(var1)(var0);
            case 318:
                var3 = var4.has;
                var0 = _closure1_slot1;
                var0 = var0.XBOX;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun92591_ip = 361;
                    continue _fun92591
                }
            case 341:
                var3 = var1.push;
                var0 = _closure1_slot2;
                var0 = var0.XBOX;
                var0 = var3.bind(var1)(var0);
            case 361:
                var3 = var4.has;
                var0 = _closure1_slot1;
                var0 = var0.DESKTOP;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun92591_ip = 404;
                    continue _fun92591
                }
            case 384:
                var3 = var1.push;
                var0 = _closure1_slot2;
                var0 = var0.DESKTOP;
                var0 = var3.bind(var1)(var0);
            case 404:
                var3 = var4.has;
                var0 = _closure1_slot1;
                var0 = var0.META_QUEST;
                var3 = var3.bind(var4)(var0);
                var0 = var1;
                if (!var3) {
                    _fun92591_ip = 462;
                    continue _fun92591
                }
            case 430:
                var3 = var1.push;
                var2 = _closure1_slot2;
                var2 = var2.VR;
                var2 = var3.bind(var1)(var2);
                var0 = var1;
                _fun92591_ip = 462;
                continue _fun92591;
            case 455:
                var0 = _closure1_slot3;
            case 462:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var5 = var8[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var6 = var4.ActivityGamePlatforms;
    var _closure1_slot1 = var6;
    var5 = {};
    var4 = 'desktop';
    var5.DESKTOP = var4;
    var4 = 'mobile';
    var5.MOBILE = var4;
    var4 = 'android';
    var5.ANDROID = var4;
    var4 = 'ios';
    var5.IOS = var4;
    var4 = 'playstation';
    var5.PLAYSTATION = var4;
    var4 = 'xbox';
    var5.XBOX = var4;
    var4 = 'vr';
    var5.VR = var4;
    var _closure1_slot2 = var5;
    var4 = {};
    var10 = var6.DESKTOP;
    var9 = var5.DESKTOP;
    var4[var10] = var9;
    var10 = var6.ANDROID;
    var9 = var5.ANDROID;
    var4[var10] = var9;
    var10 = var6.IOS;
    var9 = var5.IOS;
    var4[var10] = var9;
    var10 = var6.XBOX;
    var9 = var5.XBOX;
    var4[var10] = var9;
    var10 = var6.PS4;
    var9 = var5.PLAYSTATION;
    var4[var10] = var9;
    var10 = var6.PS5;
    var9 = var5.PLAYSTATION;
    var4[var10] = var9;
    var9 = var6.SAMSUNG;
    var10 = null;
    var4[var9] = var10;
    var9 = var6.EMBEDDED;
    var4[var9] = var10;
    var9 = var6.META_QUEST;
    var6 = var5.VR;
    var4[var9] = var6;
    var6 = new Array(0);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx';
    var6 = var7.bind(var8)(var6);
    var2.IconKey = var5;
    var2.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = var4;
    var2.getJoinFromSupportedPlatformsIconKeys = var3;
    var1 = function arg0() {
        var1 = arg0;
        var4 = var1.platforms;
        var _closure2_slot0 = var4;
        var5 = var1.currentPlatform;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot0;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = {};
            var3 = _closure2_slot0;
            var1.platforms = var3;
            var0 = _closure2_slot1;
            var1.currentPlatform = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useJoinFromSupportedPlatformsIconKeys = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 2]);