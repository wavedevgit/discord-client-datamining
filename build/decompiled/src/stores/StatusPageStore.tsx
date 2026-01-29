// stores/StatusPageStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun96498: for (var _fun96498_ip = 0;;) switch (_fun96498_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun96498_ip = 76;
                continue _fun96498;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = null;
    var _closure1_slot7 = var1;
    var _closure1_slot8 = var1;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: MaintenanceStore, environment: var5
            _fun96502: for (var _fun96502_ip = 0;;) switch (_fun96502_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96502_ip = 69;
                        continue _fun96502
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96502_ip = 105;
                    continue _fun96502;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var4 = var1.Storage;
            var3 = var4.get;
            var1 = 'MaintenanceStore';
            var1 = var3.bind(var4)(var1);
            _closure1_slot9 = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getIncident';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getScheduledMaintenance';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun96505: for (var _fun96505_ip = 0;;) switch (_fun96505_ip) {
                case 0:
                    var0 = _closure1_slot8;
                    var4 = null;
                    var2 = var4 != var0;
                    var0 = null;
                    if (!var2) {
                        _fun96505_ip = 41;
                        continue _fun96505
                    }
                case 18:
                    var2 = _closure1_slot8;
                    var3 = var2.id;
                    var2 = _closure1_slot9;
                    var0 = null;
                    if (!(var3 !== var2)) {
                        _fun96505_ip = 41;
                        continue _fun96505
                    }
                case 37:
                    var0 = _closure1_slot8;
                case 41:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'MaintenanceStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() { // Original name: handleConnectionOpen, environment: var3
        var0 = null;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleIncident, environment: var3
        var0 = arg0;
        var1 = var0.incident;
        _closure1_slot7 = var1;
        var0 = undefined;
        return var0;
    };
    var1.STATUS_PAGE_INCIDENT = var8;
    var8 = function(arg0) { // Original name: handleScheduledMaintenance, environment: var3
        var0 = arg0;
        var1 = var0.maintenance;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var1.STATUS_PAGE_SCHEDULED_MAINTENANCE = var8;
    var3 = function() { // Original name: handleScheduledMaintenanceAck, environment: var3
        _fun96509: for (var _fun96509_ip = 0;;) switch (_fun96509_ip) {
            case 0:
                var2 = _closure1_slot8;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun96509_ip = 77;
                    continue _fun96509
                }
            case 13:
                var0 = _closure1_slot8;
                var0 = var0.id;
                _closure1_slot9 = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = _closure1_slot9;
                var1 = 'MaintenanceStore';
                var1 = var3.bind(var4)(var1, var2);
                return var0;
            case 77:
                var0 = false;
                return var0;
        }
    };
    var1.STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/StatusPageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 587, 566, 806, 2]);