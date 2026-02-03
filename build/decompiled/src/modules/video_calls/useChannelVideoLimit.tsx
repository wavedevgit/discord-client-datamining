// modules/video_calls/useChannelVideoLimit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/useChannelVideoLimit.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot2;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun66426: for (var _fun66426_ip = 0;;) switch (_fun66426_ip) {
                case 0:
                    var4 = _closure1_slot3;
                    var3 = var4.countVoiceStatesForChannel;
                    var6 = _closure2_slot0;
                    var2 = var6.id;
                    var4 = var3.bind(var4)(var2);
                    var5 = _closure1_slot2;
                    var3 = var5.getGuild;
                    var2 = var6.getGuildId;
                    var2 = var2.bind(var6)();
                    var2 = var3.bind(var5)(var2);
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun66426_ip = 159;
                        continue _fun66426
                    }
                case 60:
                    var1 = _closure2_slot0;
                    var1 = var1.type;
                    var0 = _closure1_slot4;
                    var0 = var0.GUILD_STAGE_VOICE;
                    if (!(var1 !== var0)) {
                        _fun66426_ip = 127;
                        continue _fun66426
                    }
                case 83:
                    var0 = {};
                    var3 = var2.maxVideoChannelUsers;
                    var1 = 0;
                    var1 = var3 > var1;
                    if (!var1) {
                        _fun66426_ip = 110;
                        continue _fun66426
                    }
                case 100:
                    var3 = var2.maxVideoChannelUsers;
                    var1 = var4 > var3;
                case 110:
                    var0.reachedLimit = var1;
                    var1 = var2.maxVideoChannelUsers;
                    var0.limit = var1;
                    _fun66426_ip = 157;
                    continue _fun66426;
                case 127:
                    var1 = {};
                    var3 = var2.maxStageVideoChannelUsers;
                    var3 = var4 > var3;
                    var1.reachedLimit = var3;
                    var2 = var2.maxStageVideoChannelUsers;
                    var1.limit = var2;
                    var0 = var1;
                case 157:
                    _fun66426_ip = 173;
                    continue _fun66426;
                case 159:
                    var0 = {
                        'reachedLimit': false,
                        'limit': 4294967295
                    };
                case 173:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun66427: for (var _fun66427_ip = 0;;) switch (_fun66427_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot3;
                var3 = var4.countVoiceStatesForChannel;
                var2 = var1.id;
                var4 = var3.bind(var4)(var2);
                var5 = _closure1_slot2;
                var3 = var5.getGuild;
                var2 = var1.getGuildId;
                var2 = var2.bind(var1)();
                var2 = var3.bind(var5)(var2);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun66427_ip = 151;
                    continue _fun66427
                }
            case 56:
                var1 = var1.type;
                var0 = _closure1_slot4;
                var0 = var0.GUILD_STAGE_VOICE;
                if (!(var1 !== var0)) {
                    _fun66427_ip = 119;
                    continue _fun66427
                }
            case 75:
                var0 = {};
                var3 = var2.maxVideoChannelUsers;
                var1 = 0;
                var1 = var3 > var1;
                if (!var1) {
                    _fun66427_ip = 102;
                    continue _fun66427
                }
            case 92:
                var3 = var2.maxVideoChannelUsers;
                var1 = var4 > var3;
            case 102:
                var0.reachedLimit = var1;
                var1 = var2.maxVideoChannelUsers;
                var0.limit = var1;
                _fun66427_ip = 149;
                continue _fun66427;
            case 119:
                var1 = {};
                var3 = var2.maxStageVideoChannelUsers;
                var3 = var4 > var3;
                var1.reachedLimit = var3;
                var2 = var2.maxStageVideoChannelUsers;
                var1.limit = var2;
                var0 = var1;
            case 149:
                _fun66427_ip = 165;
                continue _fun66427;
            case 151:
                var0 = {
                    'reachedLimit': false,
                    'limit': 4294967295
                };
            case 165:
                return var0;
        }
    };
    var2.getChannelVideoLimit = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3526, 660, 566, 2]);