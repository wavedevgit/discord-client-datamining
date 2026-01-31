// records/SpotifyApplicationRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun92408: for (var _fun92408_ip = 0;;) switch (_fun92408_ip) {
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
                _fun92408_ip = 76;
                continue _fun92408;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = 6;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var5 = var7.get;
    var3 = 'spotify';
    var5 = var5.bind(var7)(var3);
    var _closure1_slot5 = var5;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: SpotifyApplicationRecord, environment: var5
            _fun92412: for (var _fun92412_ip = 0;;) switch (_fun92412_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var9 = new Array(1);
                    var0 = {};
                    var9[0] = var0;
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun92412_ip = 72;
                        continue _fun92412
                    }
                case 59:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun92412_ip = 106;
                    continue _fun92412;
                case 72:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 106:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = 'spotify';
                    var0.id = var2;
                    var1 = _closure1_slot5;
                    var1 = var1.name;
                    var0.name = var1;
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
        var0 = 'getIconURL';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot5;
            var0 = var0.icon;
            var0 = var0.lightPNG;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getWhiteIconURL';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot5;
            var0 = var0.icon;
            var0 = var0.whitePNG;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var1.bind(var0)(var4);
    var1 = var4.prototype;
    var5 = Object.create(var1, {
        constructor: {
            value: var4
        }
    });
    var11 = var5;
    var1 = new var11[var4](var10);
    var1 = var1 instanceof Object ? var1 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = arg1;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'records/SpotifyApplicationRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.SPOTIFY_APPLICATION_ID = var3;
    var2.SpotifyApplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3414, 4359, 2]);