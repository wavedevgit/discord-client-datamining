// modules/launchpad/native/LaunchPadPullTabCache.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var8;
    var5 = function() {
        _fun109835: for (var _fun109835_ip = 0;;) switch (_fun109835_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var3 = var0.Storage;
                var2 = var3.get;
                var0 = _closure1_slot6;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun109835_ip = 55;
                    continue _fun109835
                }
            case 51:
                var0 = _closure1_slot4;
            case 55:
                return var0;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.Storage;
        var3 = var4.set;
        var2 = _closure1_slot6;
        var1 = arg0;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot10 = var4;
    var1 = function() {
        _fun109837: for (var _fun109837_ip = 0;;) switch (_fun109837_ip) {
            case 0:
                var4 = arguments[0];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun109837_ip = 20;
                    continue _fun109837
                }
            case 9:
                var1 = _closure1_slot9;
                var4 = var1.bind(var0)();
            case 20:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun109837_ip = 301;
                    continue _fun109837
                }
            case 59:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var6 = var5[var2];
                var7 = var3.bind(var0)(var6);
                var6 = var7.getWindowDimensions;
                var6 = var6.bind(var7)();
                var7 = var6.width;
                var6 = _closure1_slot5;
                var6 = var7 - var6;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getWindowDimensions;
                var2 = var2.bind(var3)();
                var5 = var2.width;
                var2 = _closure1_slot3;
                var3 = var4 + var2;
                var8 = _closure1_slot8;
                var7 = null;
                var9 = var7 == var8;
                var2 = undefined;
                if (var9) {
                    _fun109837_ip = 154;
                    continue _fun109837
                }
            case 149:
                var2 = var8.left;
            case 154:
                var2 = var2 === var6;
                if (!var2) {
                    _fun109837_ip = 183;
                    continue _fun109837
                }
            case 161:
                var9 = _closure1_slot8;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun109837_ip = 179;
                    continue _fun109837
                }
            case 174:
                var8 = var9.right;
            case 179:
                var2 = var8 === var5;
            case 183:
                if (!var2) {
                    _fun109837_ip = 208;
                    continue _fun109837
                }
            case 186:
                var9 = _closure1_slot8;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun109837_ip = 204;
                    continue _fun109837
                }
            case 199:
                var8 = var9.top;
            case 204:
                var2 = var8 === var4;
            case 208:
                if (!var2) {
                    _fun109837_ip = 233;
                    continue _fun109837
                }
            case 211:
                var8 = _closure1_slot8;
                var9 = var7 == var8;
                var7 = undefined;
                if (var9) {
                    _fun109837_ip = 229;
                    continue _fun109837
                }
            case 224:
                var7 = var8.bottom;
            case 229:
                var2 = var7 === var3;
            case 233:
                if (var2) {
                    _fun109837_ip = 301;
                    continue _fun109837
                }
            case 236:
                var2 = {};
                var2.left = var6;
                var2.right = var5;
                var2.top = var4;
                var2.bottom = var3;
                _closure1_slot8 = var2;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.setSystemGestureExclusionRects;
                var4 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
            case 301:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var6 = 0;
    var9 = var8[var6];
    var0 = undefined;
    var9 = var7.bind(var0)(var9);
    var10 = var9.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot3 = var10;
    var10 = var9.LAUNCH_PAD_PULL_TAB_INITIAL_POSITION;
    var _closure1_slot4 = var10;
    var9 = var9.LAUNCH_PAD_PULL_TAB_WIDTH;
    var _closure1_slot5 = var9;
    var9 = 'LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY';
    var _closure1_slot6 = var9;
    var _closure1_slot7 = var6;
    var _closure1_slot8 = var0;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/launchpad/native/LaunchPadPullTabCache.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getLaunchPadPullTabPositionCached = var5;
    var2.setLaunchPadPullTabPositionCached = var4;
    var4 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = global;
        var5 = var3.clearTimeout;
        var4 = _closure1_slot7;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var4 = var3.setTimeout;
        var3 = function() { // Environment: var1
            var3 = _closure1_slot10;
            var2 = _closure2_slot0;
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var1 = _closure1_slot11;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var1 = 300;
        var1 = var4.bind(var0)(var3, var1);
        _closure1_slot7 = var1;
        return var0;
    };
    var2.persistLaunchPadPullTabPosition = var4;
    var3 = function() {
        _fun109840: for (var _fun109840_ip = 0;;) switch (_fun109840_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun109840_ip = 48;
                    continue _fun109840
                }
            case 38:
                var4 = _closure1_slot8;
                var3 = null;
                var2 = var3 != var4;
            case 48:
                if (!var2) {
                    _fun109840_ip = 90;
                    continue _fun109840
                }
            case 51:
                _closure1_slot8 = var0;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.setSystemGestureExclusionRects;
                var1 = new Array(0);
                var1 = var2.bind(var3)(var1);
            case 90:
                return var0;
        }
    };
    var2.clearLaunchPadPullTabExclusionRect = var3;
    var2.setLaunchPadPullTabExclusionRect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9825, 587, 478, 4016, 1464, 2]);