// modules/dm_settings_upsell/DmSettingsUpsellManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun113533: for (var _fun113533_ip = 0;;) switch (_fun113533_ip) {
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
                _fun113533_ip = 76;
                continue _fun113533;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var6[var3];
    var4 = var4.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: DmSettingsUpsellManager, environment: var0
            _fun113537: for (var _fun113537_ip = 0;;) switch (_fun113537_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun113537_ip = 84;
                        continue _fun113537
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun113537_ip = 118;
                    continue _fun113537;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handleDmSettingsUpsellShow;
                    var1.DM_SETTINGS_UPSELL_SHOW = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'handleDmSettingsUpsellShow';
        var4.key = var5;
        var0 = function(arg0) { // Original name: value, environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openDmSettingsUpsellModal;
            var1 = arg0;
            var1 = var1.guildId;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dm_settings_upsell/DmSettingsUpsellManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Original name: acknowledgeDmSettingsUpsell, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot8;
        var4 = var5.DM_SETTINGS_UPSELL_ACK;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.acknowledgeDmSettingsUpsell = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 14519, 4262, 507, 2]);