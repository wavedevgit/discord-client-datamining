// lib/guild/GuildChannelSubscriptions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function(arg0) { // Original name: serializeChannelRanges, environment: var1
        var3 = arg0;
        var0 = {};
        var _closure2_slot0 = var0;
        var2 = var3.forEach;
        var1 = function(arg0, arg1) { // Environment: var1
            var2 = _closure2_slot0;
            var1 = arg0;
            var0 = arg1;
            var2[var0] = var1;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function(arg0) { // Original name: GuildChannelSubscriptions, environment: var4
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2._subscriptions = var1;
            var1 = arg0;
            var2._onChange = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var1 = {};
            var0 = this;
            var0._subscriptions = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var3 = this;
            var2 = _closure1_slot4;
            var1 = var3._get;
            var0 = arg0;
            var1 = var1.bind(var3)(var0);
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '_get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun50430: for (var _fun50430_ip = 0;;) switch (_fun50430_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._subscriptions;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun50430_ip = 79;
                        continue _fun50430
                    }
                case 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var1 = {};
                    var2 = 5;
                    var1.max = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = var2;
                    var4 = var1;
                    var1 = new var5[var3](var4, var3);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 79:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var1 = var0._subscriptions;
            var0 = arg0;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'subscribe';
        var0.key = var5;
        var4 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            _fun50432: for (var _fun50432_ip = 0;;) switch (_fun50432_ip) {
                case 0:
                    var4 = arg0;
                    var8 = arg1;
                    var7 = arg2;
                    var3 = this;
                    var0 = var3._get;
                    var6 = var0.bind(var3)(var4);
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 3;
                    var0 = var5[var0];
                    var5 = undefined;
                    var9 = var2.bind(var5)(var0);
                    var2 = var9.isEqual;
                    var0 = var6.get;
                    var0 = var0.bind(var6)(var8);
                    var0 = var2.bind(var9)(var0, var7);
                    var0 = !var0;
                    if (!var0) {
                        _fun50432_ip = 120;
                        continue _fun50432
                    }
                case 76:
                    var2 = var6.set;
                    var2 = var2.bind(var6)(var8, var7);
                    var2 = var3._subscriptions;
                    var2[var4] = var6;
                    var2 = var3._onChange;
                    var1 = _closure1_slot4;
                    var1 = var1.bind(var5)(var6);
                    var1 = var2.bind(var3)(var4, var1);
                    var0 = true;
                case 120:
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/guild/GuildChannelSubscriptions.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = 100;
    var2.MINIMUM_RANGE = var1;
    var1 = new Array(1);
    var3 = [0, 99];
    var1[0] = var3;
    var2.DEFAULT_RANGES = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1386, 22, 2]);