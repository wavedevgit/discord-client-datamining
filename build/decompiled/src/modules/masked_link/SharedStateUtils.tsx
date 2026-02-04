// modules/masked_link/SharedStateUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun87927: for (var _fun87927_ip = 0;;) switch (_fun87927_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 2;
                    var3 = var5[var1];
                    var2 = undefined;
                    var7 = var4.bind(var2)(var3);
                    var6 = var7.getProtocol;
                    var3 = _closure2_slot0;
                    var6 = var6.bind(var7)(var3);
                    var0.protocol = var6;
                    var1 = var5[var1];
                    var2 = var4.bind(var2)(var1);
                    var1 = var2.getHostname;
                    var1 = var1.bind(var2)(var3);
                    var0.hostname = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                var7 = var0.protocol;
                var6 = var0.hostname;
                var2 = var4.substr;
                var1 = var7.length;
                var0 = 2;
                var1 = var2.bind(var4)(var1, var0);
                var3 = '';
                var0 = '//';
                var5 = var3;
                if (!(var0 === var1)) {
                    _fun87927_ip = 94;
                    continue _fun87927
                }
            case 91:
                var5 = var0;
            case 94:
                var0 = {};
                var0.protocol = var7;
                var0.authorityPrefix = var5;
                var0.hostname = var6;
                var2 = var4.replace;
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var3)(var7, var5, var6);
                var1 = var2.bind(var4)(var1, var3);
                var0.theRestOfTheUrl = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/masked_link/SharedStateUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useUrlParts = var3;
    var1 = function arg0() {
        var1 = arg0;
        var15 = var1.url;
        var _closure2_slot0 = var15;
        var14 = var1.trustUrl;
        var _closure2_slot1 = var14;
        var2 = var1.onConfirm;
        var _closure2_slot2 = var2;
        var12 = var1.onCancel;
        var _closure2_slot3 = var12;
        var11 = var1.onClose;
        var _closure2_slot4 = var11;
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var3 = false;
        var5 = var4.bind(var5)(var3);
        var4 = _closure1_slot2;
        var6 = undefined;
        var3 = 2;
        var5 = var4.bind(var6)(var5, var3);
        var3 = 0;
        var4 = var5[var3];
        var _closure2_slot5 = var4;
        var3 = 1;
        var3 = var5[var3];
        var5 = _closure1_slot4;
        var5 = var5.bind(var6)(var15);
        var8 = var5.protocol;
        var7 = var5.authorityPrefix;
        var6 = var5.hostname;
        var5 = var5.theRestOfTheUrl;
        var13 = _closure1_slot3;
        var10 = var13.useCallback;
        var9 = new Array(5);
        var9[0] = var15;
        var9[1] = var4;
        var9[2] = var14;
        var9[3] = var2;
        var9[4] = var11;
        var2 = function() { // Environment: var0
            _fun87930: for (var _fun87930_ip = 0;;) switch (_fun87930_ip) {
                case 0:
                    var1 = _closure2_slot5;
                    if (!var1) {
                        _fun87930_ip = 25;
                        continue _fun87930
                    }
                case 10:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                case 25:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun87930_ip = 45;
                        continue _fun87930
                    }
                case 35:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 45:
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var2 = var10.bind(var13)(var2, var9);
        var10 = _closure1_slot3;
        var9 = var10.useCallback;
        var1 = new Array(2);
        var1[0] = var12;
        var1[1] = var11;
        var0 = function() { // Environment: var0
            _fun87931: for (var _fun87931_ip = 0;;) switch (_fun87931_ip) {
                case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun87931_ip = 23;
                        continue _fun87931
                    }
                case 13:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 23:
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var1 = var9.bind(var10)(var0, var1);
        var0 = {};
        var0.protocol = var8;
        var0.authorityPrefix = var7;
        var0.hostname = var6;
        var0.theRestOfTheUrl = var5;
        var0.shouldTrustUrl = var4;
        var0.setShouldTrustUrl = var3;
        var0.handleConfirm = var2;
        var0.handleCancel = var1;
        return var0;
    };
    var2.useModalState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5893, 2]);