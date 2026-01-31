// modules/search/native/hooks/useSearchContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0, arg1, arg2) { // Original name: getChannelDetailsSearchContext, environment: var1
        _fun71498: for (var _fun71498_ip = 0;;) switch (_fun71498_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = arg2;
                if (var0) {
                    _fun71498_ip = 75;
                    continue _fun71498
                }
            case 12:
                var0 = null;
                if (!(var0 != var3)) {
                    _fun71498_ip = 47;
                    continue _fun71498
                }
            case 18:
                var0 = {};
                var1 = _closure1_slot5;
                var1 = var1.GUILD_CHANNEL;
                var0.type = var1;
                var0.guildId = var3;
                var0.channelId = var2;
                _fun71498_ip = 73;
                continue _fun71498;
            case 47:
                var1 = {};
                var4 = _closure1_slot5;
                var4 = var4.CHANNEL;
                var1.type = var4;
                var1.channelId = var2;
                var0 = var1;
            case 73:
                _fun71498_ip = 145;
                continue _fun71498;
            case 75:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 3;
                var1 = var6[var1];
                var7 = undefined;
                var6 = var5.bind(var7)(var1);
                var1 = null;
                var5 = var1 != var3;
                var1 = '[useChannelDetailsSearchContext] Thread must have a guild id';
                var1 = var6.bind(var7)(var5, var1);
                var1 = {};
                var4 = _closure1_slot5;
                var4 = var4.THREAD;
                var1.type = var4;
                var1.guildId = var3;
                var1.channelId = var2;
                var0 = var1;
            case 145:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SearchTypes;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useSearchContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: useGuildSearchContext, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var1 = _closure1_slot5;
            var1 = var1.GUILD;
            var0.type = var1;
            var1 = _closure2_slot0;
            var0.guildId = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useGuildSearchContext = var4;
    var4 = function(arg0, arg1) { // Original name: useGuildChannelSearchContext, environment: var1
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var1 = _closure1_slot5;
            var1 = var1.GUILD_CHANNEL;
            var0.type = var1;
            var2 = _closure2_slot0;
            var0.guildId = var2;
            var1 = _closure2_slot1;
            var0.channelId = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useGuildChannelSearchContext = var4;
    var2.getChannelDetailsSearchContext = var3;
    var1 = function(arg0, arg1) { // Original name: useChannelDetailsSearchContext, environment: var1
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var7 = var4.bind(var2)(var3);
        var4 = var7.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun71504: for (var _fun71504_ip = 0;;) switch (_fun71504_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var3 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun71504_ip = 45;
                        continue _fun71504
                    }
                case 35:
                    var2 = var3.isThread;
                    var1 = var2.bind(var3)();
                case 45:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun71504_ip = 55;
                        continue _fun71504
                    }
                case 52:
                    var0 = var1;
                case 55:
                    return var0;
            }
        };
        var4 = var4.bind(var7)(var3, var2);
        var _closure2_slot2 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot6;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = _closure2_slot2;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useChannelDetailsSearchContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 660, 44, 632, 2]);