// modules/frames/native/FrameWebView.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/native/FrameWebView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = arg0;
        var5 = var2.applicationId;
        var _closure2_slot0 = var5;
        var0 = null;
        var1 = Object.create(var0);
        var0 = 0;
        var1.applicationId = var0;
        var17 = {};
        var16 = var2;
        var15 = var1;
        var4 = copyDataProperties(var17, var16, var15);
        var1 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 2;
        var6 = var10[var0];
        var3 = undefined;
        var7 = var1.bind(var3)(var6);
        var6 = var7.useHasInvalidUrlErrorState;
        var6 = var6.bind(var7)();
        var8 = var6.hasInvalidUrlError;
        var _closure2_slot1 = var8;
        var7 = var6.setHasInvalidUrlError;
        var6 = var6.hadInvalidUrlError;
        var _closure2_slot2 = var6;
        var14 = _closure1_slot3;
        var13 = var14.useEffect;
        var12 = new Array(3);
        var12[0] = var8;
        var12[1] = var6;
        var12[2] = var5;
        var11 = function() { // Environment: var9
            _fun110563: for (var _fun110563_ip = 0;;) switch (_fun110563_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var0 = !var0;
                    if (!var0) {
                        _fun110563_ip = 17;
                        continue _fun110563
                    }
                case 13:
                    var0 = _closure2_slot1;
                case 17:
                    if (!var0) {
                        _fun110563_ip = 30;
                        continue _fun110563
                    }
                case 20:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var0 = var1 != var2;
                case 30:
                    if (!var0) {
                        _fun110563_ip = 79;
                        continue _fun110563
                    }
                case 33:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.leaveFrame;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var0.applicationId = var3;
                    var0 = var1.bind(var2)(var0);
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var11 = var13.bind(var14)(var11, var12);
        var2 = _closure1_slot4;
        var0 = var10[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.BaseActivityWebView;
        var0 = {};
        var10 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.hasFrameId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.hasFrameId = var10;
        var10 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.getOrCreateFrameId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.getOrCreateFrameId = var10;
        var9 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.releaseFrameId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.releaseFrameId = var9;
        var0.hasInvalidUrlError = var8;
        var0.setHasInvalidUrlError = var7;
        var0.hadInvalidUrlError = var6;
        var0.applicationId = var5;
        var17 = var0;
        var16 = var4;
        var4 = copyDataProperties(var17, var16);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 8082, 7942, 2]);