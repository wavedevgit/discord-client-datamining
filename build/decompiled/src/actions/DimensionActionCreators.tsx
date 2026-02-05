// actions/DimensionActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var3;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4.value = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var2, var1, var4);
    var1 = {};
    var4 = function arg0, arg1, arg2, arg3, arg4() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var0 = arg3;
        var _closure2_slot3 = var0;
        var0 = arg4;
        var _closure2_slot4 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            _fun72698: for (var _fun72698_ip = 0;;) switch (_fun72698_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.dispatch;
                    var2 = {};
                    var1 = 'UPDATE_CHANNEL_DIMENSIONS';
                    var2.type = var1;
                    var5 = _closure2_slot0;
                    var2.channelId = var5;
                    var5 = _closure2_slot1;
                    var2.scrollTop = var5;
                    var5 = _closure2_slot2;
                    var2.scrollHeight = var5;
                    var5 = _closure2_slot3;
                    var2.offsetHeight = var5;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot4;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun72698_ip = 100;
                        continue _fun72698
                    }
                case 92:
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var0)();
                case 100:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateChannelDimensions = var4;
    var4 = function arg0, arg1() {
        _fun72699: for (var _fun72699_ip = 0;;) switch (_fun72699_ip) {
            case 0:
                var4 = arguments[2];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun72699_ip = 13;
                    continue _fun72699
                }
            case 9:
                var4 = new Array(0);
            case 13:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'UPDATE_CHANNEL_LIST_DIMENSIONS';
                var1.type = var5;
                var5 = arg0;
                var1.guildId = var5;
                var5 = arg1;
                var1.scrollTop = var5;
                var1.channelIds = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.updateChannelListScroll = var4;
    var4 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPDATE_CHANNEL_LIST_DIMENSIONS';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.scrollTo = var4;
        var4 = new Array(0);
        var1.channelIds = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.channelListScrollTo = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {
            'type': 'UPDATE_CHANNEL_LIST_DIMENSIONS',
            'guildId': null,
            'scrollTo': null
        };
        var4 = arg0;
        var1.guildId = var4;
        var4 = new Array(0);
        var1.channelIds = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearChannelListScrollTo = var4;
    var4 = function arg0, arg1() {
        var4 = this;
        var3 = var4.updateChannelDimensions;
        var9 = arg0;
        var5 = arg1;
        var10 = var4;
        var8 = null;
        var7 = null;
        var6 = null;
        var0 = var10[var3](var9, var8, var7, var6, var5, var4);
        var0 = undefined;
        return var0;
    };
    var1.clearChannelDimensions = var4;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPDATE_GUILD_LIST_DIMENSIONS';
        var1.type = var4;
        var4 = arg0;
        var1.scrollTop = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateGuildListScrollTo = var0;
    var0 = 1;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/DimensionActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 2]);