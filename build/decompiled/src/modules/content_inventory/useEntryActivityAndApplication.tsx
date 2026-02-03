// modules/content_inventory/useEntryActivityAndApplication.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/content_inventory/useEntryActivityAndApplication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62348: for (var _fun62348_ip = 0;;) switch (_fun62348_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 3;
                var0 = var2[var9];
                var8 = undefined;
                var6 = var1.bind(var8)(var0);
                var4 = var6.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var3
                    var2 = _closure1_slot5;
                    var1 = var2.getMatchingActivity;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var4.bind(var6)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 4;
                var0 = var2[var0];
                var1 = var1.bind(var8)(var0);
                var4 = null;
                var0 = var4 == var6;
                var2 = undefined;
                if (var0) {
                    _fun62348_ip = 95;
                    continue _fun62348
                }
            case 89:
                var2 = var6.application_id;
            case 95:
                var0 = new Array(2);
                var0[0] = var2;
                var10 = var7.extra;
                var2 = 'application_id';
                var10 = var2 in var10;
                var2 = undefined;
                if (!var10) {
                    _fun62348_ip = 134;
                    continue _fun62348
                }
            case 122:
                var7 = var7.extra;
                var2 = var7.application_id;
            case 134:
                var0[1] = var2;
                var2 = var1.bind(var8)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var8)(var2, var0);
                var0 = 0;
                var2 = var1[var0];
                var _closure2_slot1 = var2;
                var0 = 1;
                var1 = var1[var0];
                var0 = {};
                var0.activity = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var7 = var7.bind(var8)(var6);
                var6 = var7.useStateFromStores;
                var8 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var8;
                var3 = function() { // Environment: var3
                    _fun62350: for (var _fun62350_ip = 0;;) switch (_fun62350_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var2 = var3.getEmbeddedActivityForUserId;
                            var0 = _closure2_slot0;
                            var1 = var0.author_id;
                            var5 = _closure2_slot1;
                            var0 = null;
                            var5 = var0 == var5;
                            var0 = undefined;
                            if (var5) {
                                _fun62350_ip = 50;
                                continue _fun62350
                            }
                        case 41:
                            var4 = _closure2_slot1;
                            var0 = var4.id;
                        case 50:
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var5, var3);
                var0.embeddedActivity = var3;
                var3 = var1;
                if (!(var4 != var2)) {
                    _fun62348_ip = 240;
                    continue _fun62348
                }
            case 237:
                var3 = var2;
            case 240:
                var0.anyMatchingApplication = var3;
                var0.activityApplication = var2;
                var0.fallbackApplication = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1371, 7827, 566, 6874, 2]);