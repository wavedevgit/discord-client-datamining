// modules/dismissible_content/useSelectedDismissibleContentShared.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/dismissible_content/useSelectedDismissibleContentShared.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun52345: for (var _fun52345_ip = 0;;) switch (_fun52345_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var2 = arguments[2];
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var6;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun52345_ip = 27;
                    continue _fun52345
                }
            case 25:
                var2 = false;
            case 27:
                var _closure2_slot2 = var0;
                var7 = !var2;
                if (!var7) {
                    _fun52345_ip = 43;
                    continue _fun52345
                }
            case 37:
                var2 = null;
                var7 = var2 != var5;
            case 43:
                if (!var7) {
                    _fun52345_ip = 88;
                    continue _fun52345
                }
            case 46:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var3 = var2.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                var2 = var3.has;
                var2 = var2.bind(var3)(var5);
                var7 = !var2;
            case 88:
                _closure2_slot2 = var7;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    var0 = function() { // Environment: var0
                        _fun52347: for (var _fun52347_ip = 0;;) switch (_fun52347_ip) {
                            case 0:
                                var1 = _closure2_slot2;
                                if (!var1) {
                                    _fun52347_ip = 74;
                                    continue _fun52347
                                }
                            case 10:
                                var2 = _closure1_slot3;
                                var4 = var2.lastDCDismissed;
                                var2 = _closure2_slot0;
                                var2 = var4 !== var2;
                                if (var2) {
                                    _fun52347_ip = 71;
                                    continue _fun52347
                                }
                            case 34:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var3 = 4;
                                var4 = var4[var3];
                                var3 = undefined;
                                var5 = var5.bind(var3)(var4);
                                var4 = var5.isGuildDismissibleContent;
                                var3 = _closure2_slot0;
                                var2 = var4.bind(var5)(var3);
                            case 71:
                                var1 = var2;
                            case 74:
                                if (!var1) {
                                    _fun52347_ip = 104;
                                    continue _fun52347
                                }
                            case 77:
                                var3 = _closure2_slot1;
                                var0 = _closure1_slot4;
                                var2 = var0.AUTO_DISMISS;
                                var1 = undefined;
                                var0 = true;
                                var0 = var3.bind(var1)(var2, var0);
                            case 104:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useSelectedDismissibleContentShared = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1362, 1369, 1363, 1359, 2]);