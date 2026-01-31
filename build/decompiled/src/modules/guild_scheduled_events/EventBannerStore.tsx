// modules/guild_scheduled_events/EventBannerStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun110666: for (var _fun110666_ip = 0;;) switch (_fun110666_ip) {
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
                _fun110666_ip = 76;
                continue _fun110666;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildScheduledEventStatus;
    var _closure1_slot5 = var1;
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: EventBannerStore, environment: var5
            _fun110670: for (var _fun110670_ip = 0;;) switch (_fun110670_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun110670_ip = 69;
                        continue _fun110670
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun110670_ip = 105;
                    continue _fun110670;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun110671: for (var _fun110671_ip = 0;;) switch (_fun110671_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun110671_ip = 28;
                        continue _fun110671
                    }
                case 9:
                    var1 = var1.dismissedEventIds;
                    if (!(var0 == var1)) {
                        _fun110671_ip = 21;
                        continue _fun110671
                    }
                case 19:
                    var1 = {};
                case 21:
                    _closure1_slot6 = var1;
                case 28:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'isEventDismissed';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot6;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure1_slot6;
            var0.dismissedEventIds = var1;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'EventBannerStore';
    var7.displayName = var1;
    var1 = 'EventBanner';
    var7.persistKey = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleDismiss, environment: var3
        var0 = arg0;
        var3 = var0.eventId;
        var1 = {};
        var4 = _closure1_slot6;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = true;
        var1[var3] = var2;
        _closure1_slot6 = var1;
        var0 = undefined;
        return var0;
    };
    var1.EVENT_BANNER_DISMISS = var8;
    var8 = function(arg0) { // Original name: handleEventUpdate, environment: var3
        _fun110675: for (var _fun110675_ip = 0;;) switch (_fun110675_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildScheduledEvent;
                var3 = var2.status;
                var0 = _closure1_slot5;
                var0 = var0.CANCELED;
                if (!(var3 !== var0)) {
                    _fun110675_ip = 50;
                    continue _fun110675
                }
            case 31:
                var3 = var2.status;
                var0 = _closure1_slot5;
                var0 = var0.COMPLETED;
                if (!(var3 === var0)) {
                    _fun110675_ip = 103;
                    continue _fun110675
                }
            case 50:
                var3 = _closure1_slot6;
                var0 = var2.id;
                var3 = var3[var0];
                var0 = null;
                if (!(var0 != var3)) {
                    _fun110675_ip = 99;
                    continue _fun110675
                }
            case 69:
                var0 = {};
                var4 = _closure1_slot6;
                var5 = var0;
                var3 = copyDataProperties(var5, var4);
                var2 = var2.id;
                var2 = delete var0[var2];
                _closure1_slot6 = var0;
                var0 = undefined;
                return var0;
            case 99:
                var0 = false;
                return var0;
            case 103:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_SCHEDULED_EVENT_UPDATE = var8;
    var3 = function(arg0) { // Original name: handleEventDelete, environment: var3
        _fun110676: for (var _fun110676_ip = 0;;) switch (_fun110676_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildScheduledEvent;
                var3 = _closure1_slot6;
                var0 = var2.id;
                var3 = var3[var0];
                var0 = null;
                if (!(var0 != var3)) {
                    _fun110676_ip = 61;
                    continue _fun110676
                }
            case 31:
                var0 = {};
                var4 = _closure1_slot6;
                var5 = var0;
                var3 = copyDataProperties(var5, var4);
                var2 = var2.id;
                var2 = delete var0[var2];
                _closure1_slot6 = var0;
                var0 = undefined;
                return var0;
            case 61:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_SCHEDULED_EVENT_DELETE = var3;
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
    var3 = 'modules/guild_scheduled_events/EventBannerStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1378, 566, 806, 2]);