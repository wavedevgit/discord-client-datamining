// modules/dismissible_content/DCFEventStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun15624: for (var _fun15624_ip = 0;;) switch (_fun15624_ip) {
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
            case 70: // try_end0
                _fun15624_ip = 74;
                continue _fun15624;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var9 = 0;
    var1 = var5[var9];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var8 = 1;
    var1 = var5[var8];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var7 = 2;
    var1 = var5[var7];
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
    var1 = {};
    var1.DC_SHOWN = var9;
    var3 = 'DC_SHOWN';
    var1[var9] = var3;
    var1.DC_SHOW_REQUEST = var8;
    var3 = 'DC_SHOW_REQUEST';
    var1[var8] = var3;
    var1.DC_DISMISSED = var7;
    var3 = 'DC_DISMISSED';
    var1[var7] = var3;
    var _closure1_slot5 = var1;
    var3 = new Array(0);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: DCFEventStore, environment: var0
            _fun15628: for (var _fun15628_ip = 0;;) switch (_fun15628_ip) {
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
                        _fun15628_ip = 69;
                        continue _fun15628
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun15628_ip = 105;
                    continue _fun15628;
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
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'getDCFEvents';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'DCFEventStore';
    var7.displayName = var3;
    var3 = 6;
    var3 = var5[var3];
    var12 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function() { // Original name: LOGOUT, environment: var4
        var0 = new Array(0);
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var3.LOGOUT = var8;
    var8 = function(arg0) { // Original name: DCF_EVENT_LOGGED, environment: var4
        var0 = arg0;
        var1 = var0.eventType;
        var0 = var0.dismissibleContent;
        var0 = undefined;
        return var0;
    };
    var3.DCF_EVENT_LOGGED = var8;
    var8 = function(arg0) { // Original name: DCF_HANDLE_DC_DISMISSED, environment: var4
        var0 = arg0;
        var0 = var0.dismissibleContent;
        var0 = _closure1_slot5;
        var0 = var0.DC_DISMISSED;
        var0 = undefined;
        return var0;
    };
    var3.DCF_HANDLE_DC_DISMISSED = var8;
    var4 = function(arg0) { // Original name: DCF_HANDLE_DC_SHOWN, environment: var4
        var0 = arg0;
        var0 = var0.dismissibleContent;
        var0 = _closure1_slot5;
        var0 = var0.DC_SHOWN;
        var0 = undefined;
        return var0;
    };
    var3.DCF_HANDLE_DC_SHOWN = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var7](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/DCFEventStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.DCFEventTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);