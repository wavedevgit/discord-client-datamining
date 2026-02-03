// records/TwitchApplicationRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun96026: for (var _fun96026_ip = 0;;) switch (_fun96026_ip) {
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
                _fun96026_ip = 76;
                continue _fun96026;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun96030: for (var _fun96030_ip = 0;;) switch (_fun96030_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var0 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var4, var3);
                    var10 = new Array(1);
                    var10[0] = var2;
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var5)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun96030_ip = 73;
                        continue _fun96030
                    }
                case 60:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var10);
                    _fun96030_ip = 107;
                    continue _fun96030;
                case 73:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var5)(var4);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 107:
                    var0 = var3.bind(var5)(var4, var0);
                    var6 = var2.url;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = 'twitch:';
                    var2 = var4.bind(var3)(var2, var6);
                    var0.id = var2;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var2 = var6[var1];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.JIPtgq;
                    var1 = var2.bind(var3)(var1);
                    var0.name = var1;
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
        var5 = 'getIconURL';
        var4.key = var5;
        var0 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.get;
            var0 = 'twitch';
            var0 = var1.bind(var2)(var0);
            var0 = var0.icon;
            var0 = var0.lightPNG;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/TwitchApplicationRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = 'twitch:';
    var2.TWITCH_APPLICATION_ID_PREFIX = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3455, 1234, 4395, 2]);