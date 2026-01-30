// utils/LibraryApplicationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0) { // Original name: convertToTransitionState, environment: var1
        _fun30725: for (var _fun30725_ip = 0;;) switch (_fun30725_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = null;
                if (var3) {
                    _fun30725_ip = 82;
                    continue _fun30725
                }
            case 14:
                var5 = var2.type;
                var4 = _closure1_slot6;
                var4 = var4.INSTALLING;
                if (!(var5 !== var4)) {
                    _fun30725_ip = 76;
                    continue _fun30725
                }
            case 36:
                var5 = var2.type;
                var4 = _closure1_slot6;
                var4 = var4.UPDATING;
                if (!(var5 !== var4)) {
                    _fun30725_ip = 76;
                    continue _fun30725
                }
            case 55:
                var4 = var2.type;
                var3 = _closure1_slot6;
                var3 = var3.UNINSTALLING;
                var1 = null;
                if (!(var4 === var3)) {
                    _fun30725_ip = 79;
                    continue _fun30725
                }
            case 76:
                var1 = var2;
            case 79:
                var0 = var1;
            case 82:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.LibraryApplicationFlags;
    var _closure1_slot5 = var7;
    var7 = var4.LocalDispatchApplicationStates;
    var _closure1_slot6 = var7;
    var4 = var4.StatusTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/LibraryApplicationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0, arg1) { // Original name: getComboId, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.getComboId = var4;
    var4 = function(arg0) { // Original name: convertComboId, environment: var1
        var2 = arg0;
        var1 = var2.split;
        var0 = ':';
        var3 = var1.bind(var2)(var0);
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = 2;
        var2 = var2.bind(var1)(var3, var0);
        var0 = {};
        var1 = 0;
        var1 = var2[var1];
        var0.applicationId = var1;
        var1 = 1;
        var1 = var2[var1];
        var0.branchId = var1;
        return var0;
    };
    var2.convertComboId = var4;
    var4 = function(arg0, arg1) { // Original name: shouldShareApplicationActivity, environment: var1
        _fun30728: for (var _fun30728_ip = 0;;) switch (_fun30728_ip) {
            case 0:
                var3 = arg1;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 4;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.ShowCurrentGame;
                var0 = var2.getSetting;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun30728_ip = 143;
                    continue _fun30728
                }
            case 47:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var2.bind(var4)(var0);
                var2 = var0.StatusSetting;
                var0 = var2.getSetting;
                var2 = var0.bind(var2)();
                var0 = _closure1_slot7;
                var0 = var0.INVISIBLE;
                if (!(var2 !== var0)) {
                    _fun30728_ip = 143;
                    continue _fun30728
                }
            case 94:
                var2 = var3.getActiveLibraryApplication;
                var0 = arg0;
                var3 = var2.bind(var3)(var0);
                var0 = null;
                var0 = var0 == var3;
                if (var0) {
                    _fun30728_ip = 141;
                    continue _fun30728
                }
            case 117:
                var2 = var3.hasFlag;
                var1 = _closure1_slot5;
                var1 = var1.PRIVATE;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 141:
                return var0;
            case 143:
                var0 = false;
                return var0;
        }
    };
    var2.shouldShareApplicationActivity = var4;
    var4 = function(arg0, arg1) { // Original name: calculateProgressPercentage, environment: var1
        _fun30729: for (var _fun30729_ip = 0;;) switch (_fun30729_ip) {
            case 0:
                var3 = arg1;
                var2 = 100;
                var1 = 0;
                var0 = var2;
                if (!(var1 !== var3)) {
                    _fun30729_ip = 26;
                    continue _fun30729
                }
            case 15:
                var1 = arg0;
                var1 = var1 / var3;
                var0 = var1 * var2;
            case 26:
                return var0;
        }
    };
    var2.calculateProgressPercentage = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: shouldShowGameInLibrary, environment: var1
        _fun30730: for (var _fun30730_ip = 0;;) switch (_fun30730_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun30730_ip = 72;
                    continue _fun30730
                }
            case 12:
                var1 = arg2;
                var1 = var1.enabled;
                var1 = !var1;
                if (var1) {
                    _fun30730_ip = 53;
                    continue _fun30730
                }
            case 26:
                var4 = var3.hasFlag;
                var2 = _closure1_slot5;
                var2 = var2.PRIVATE;
                var2 = var4.bind(var3)(var2);
                var1 = !var2;
            case 53:
                if (!var1) {
                    _fun30730_ip = 69;
                    continue _fun30730
                }
            case 56:
                var2 = var3.isHidden;
                var2 = var2.bind(var3)();
                var1 = !var2;
            case 69:
                var0 = var1;
            case 72:
                return var0;
        }
    };
    var2.shouldShowGameInLibrary = var4;
    var2.convertToTransitionState = var3;
    var3 = function(arg0) { // Original name: getCombinedProgress, environment: var1
        var3 = arg0;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun30732: for (var _fun30732_ip = 0;;) switch (_fun30732_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var0 = _closure1_slot8;
                    var5 = undefined;
                    var2 = var0.bind(var5)(var4);
                    var6 = null;
                    var0 = var3;
                    if (!(var6 != var2)) {
                        _fun30732_ip = 122;
                        continue _fun30732
                    }
                case 29:
                    var4 = var4.type;
                    var1 = _closure1_slot6;
                    var1 = var1.UP_TO_DATE;
                    var0 = var3;
                    if (!(var4 !== var1)) {
                        _fun30732_ip = 122;
                        continue _fun30732
                    }
                case 51:
                    var1 = {};
                    var7 = var3.total;
                    var4 = global;
                    var8 = var4.Number;
                    var6 = var2.total;
                    var6 = var8.bind(var5)(var6);
                    var6 = var7 + var6;
                    var1.total = var6;
                    var3 = var3.progress;
                    var4 = var4.Number;
                    var2 = var2.progress;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3 + var2;
                    var1.progress = var2;
                    var0 = var1;
                case 122:
                    return var0;
            }
        };
        var0 = {
            'total': 0,
            'progress': 0
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getCombinedProgress = var3;
    var1 = function(arg0) { // Original name: isUserEntitledToLibraryApplication, environment: var1
        _fun30733: for (var _fun30733_ip = 0;;) switch (_fun30733_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.isDiscordApplication;
                var0 = var0.bind(var4)();
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun30733_ip = 56;
                    continue _fun30733
                }
            case 22:
                var3 = var4.isEntitled;
                var5 = _closure1_slot3;
                var2 = var5.getCurrentUser;
                var2 = var2.bind(var5)();
                var1 = _closure1_slot4;
                var0 = var3.bind(var4)(var2, var1);
            case 56:
                return var0;
        }
    };
    var2.isUserEntitledToLibraryApplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1613, 3458, 660, 1348, 2]);