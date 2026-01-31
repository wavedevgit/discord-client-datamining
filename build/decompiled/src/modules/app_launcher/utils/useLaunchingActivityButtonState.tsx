// modules/app_launcher/utils/useLaunchingActivityButtonState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/utils/useLaunchingActivityButtonState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useLaunchingActivityButtonState, environment: var1
        _fun107946: for (var _fun107946_ip = 0;;) switch (_fun107946_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.applicationId;
                var _closure2_slot0 = var9;
                var2 = var1.context;
                var _closure2_slot1 = var2;
                var8 = var1.launchingComponentId;
                var7 = var1.onSubmissionComplete;
                var _closure2_slot2 = var7;
                var5 = undefined;
                var _closure2_slot3 = var5;
                var _closure2_slot4 = var5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var6 = var2.bind(var5)(var1);
                var1 = var6.useGetOrFetchApplication;
                var10 = var1.bind(var6)(var9);
                var1 = 4;
                var6 = var3[var1];
                var12 = var2.bind(var5)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var0
                    _fun107947: for (var _fun107947_ip = 0;;) switch (_fun107947_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var2 = var3.getLaunchState;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var6 = var0.type;
                            var5 = 'channel';
                            var0 = undefined;
                            if (!(var5 === var6)) {
                                _fun107947_ip = 53;
                                continue _fun107947
                            }
                        case 39:
                            var4 = _closure2_slot1;
                            var4 = var4.channel;
                            var0 = var4.id;
                        case 53:
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var6 = var11.bind(var12)(var9, var6);
                var1 = var3[var1];
                var9 = var2.bind(var5)(var1);
                var3 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.isLaunchingFrame;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var9)(var2, var1);
                var1 = null;
                if (!(var1 != var10)) {
                    _fun107946_ip = 204;
                    continue _fun107946
                }
            case 170:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 5;
                var2 = var11[var2];
                var9 = var9.bind(var5)(var2);
                var2 = var9.canLaunchFrame;
                var2 = var2.bind(var9)(var10);
                if (var2) {
                    _fun107946_ip = 233;
                    continue _fun107946
                }
            case 204:
                var2 = var1 != var6;
                if (!var2) {
                    _fun107946_ip = 217;
                    continue _fun107946
                }
            case 211:
                var2 = var6.isLaunching;
            case 217:
                if (!var2) {
                    _fun107946_ip = 230;
                    continue _fun107946
                }
            case 220:
                var6 = var6.componentId;
                var2 = var6 === var8;
            case 230:
                var3 = var2;
            case 233:
                _closure2_slot3 = var3;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 6;
                var2 = var8[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.bind(var5)(var3);
                _closure2_slot4 = var2;
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var4 = new Array(3);
                var4[0] = var3;
                var4[1] = var2;
                var4[2] = var7;
                var0 = function() { // Environment: var0
                    _fun107949: for (var _fun107949_ip = 0;;) switch (_fun107949_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var1 = !var1;
                            if (!var1) {
                                _fun107949_ip = 17;
                                continue _fun107949
                            }
                        case 13:
                            var1 = _closure2_slot4;
                        case 17:
                            if (!var1) {
                                _fun107949_ip = 40;
                                continue _fun107949
                            }
                        case 20:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107949_ip = 40;
                                continue _fun107949
                            }
                        case 30:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.submitting = var3;
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun107946_ip = 323;
                    continue _fun107946
                }
            case 320:
                var1 = var2;
            case 323:
                var0.wasSubmitting = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1371, 7878, 6841, 566, 4635, 5268, 2]);