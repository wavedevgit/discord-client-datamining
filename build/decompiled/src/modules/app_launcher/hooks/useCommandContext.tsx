// modules/app_launcher/hooks/useCommandContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var3 = function(arg0) { // Original name: getCommandContext, environment: var1
        _fun90234: for (var _fun90234_ip = 0;;) switch (_fun90234_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.type;
                var0 = 'contextless';
                if (!(var0 !== var2)) {
                    _fun90234_ip = 62;
                    continue _fun90234
                }
            case 18:
                var0 = {};
                var2 = var1.channel;
                var0.channel = var2;
                var3 = _closure1_slot1;
                var2 = var3.getGuild;
                var1 = var1.channel;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                var0.guild = var1;
                _fun90234_ip = 77;
                continue _fun90234;
            case 62:
                var1 = {};
                var2 = undefined;
                var1.channel = var2;
                var1.guild = var2;
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var6 = var5[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = arg2;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/hooks/useCommandContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getCommandContext = var3;
    var1 = function(arg0) { // Original name: useCommandContext, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useCommandContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 2]);