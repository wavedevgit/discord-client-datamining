// modules/routing/KeybindRouterStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun98652: for (var _fun98652_ip = 0;;) switch (_fun98652_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 1;
                var0 = var0[var7];
                var11 = undefined;
                var8 = var1.bind(var11)(var0);
                var5 = var8.matchPath;
                var1 = null;
                var0 = var1 != var2;
                var6 = '';
                var4 = var6;
                if (!var0) {
                    _fun98652_ip = 53;
                    continue _fun98652
                }
            case 50:
                var4 = var2;
            case 53:
                var0 = {};
                var15 = _closure1_slot2;
                var14 = var15.CHANNEL;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var12 = 2;
                var13 = var9[var12];
                var13 = var10.bind(var11)(var13);
                var16 = var13.RouteParam;
                var13 = var16.guildId;
                var13 = var13.bind(var16)();
                var9 = var9[var12];
                var9 = var10.bind(var11)(var9);
                var16 = var9.RouteParam;
                var10 = var16.channelId;
                var9 = {};
                var17 = true;
                var9.optional = var17;
                var10 = var10.bind(var16)(var9);
                var9 = ':messageId?';
                var9 = var14.bind(var15)(var13, var10, var9);
                var0.path = var9;
                var0 = var5.bind(var8)(var4, var0);
                if (!(var1 == var0)) {
                    _fun98652_ip = 304;
                    continue _fun98652
                }
            case 165:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var5 = var5.bind(var11)(var4);
                var4 = var5.matchPath;
                var7 = var1 != var2;
                if (!var7) {
                    _fun98652_ip = 198;
                    continue _fun98652
                }
            case 195:
                var6 = var2;
            case 198:
                var2 = {};
                var9 = _closure1_slot2;
                var8 = var9.GUILD_BOOSTING_MARKETING;
                var10 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var12];
                var7 = var10.bind(var11)(var7);
                var10 = var7.RouteParam;
                var7 = var10.guildId;
                var7 = var7.bind(var10)();
                var7 = var8.bind(var9)(var7);
                var2.path = var7;
                var5 = var4.bind(var5)(var6, var2);
                if (!(var1 == var5)) {
                    _fun98652_ip = 278;
                    continue _fun98652
                }
            case 262:
                var2 = {
                    'guildId': null,
                    'channelId': null
                };
                _fun98652_ip = 302;
                continue _fun98652;
            case 278:
                var4 = {};
                var5 = var5.params;
                var5 = var5.guildId;
                var4.guildId = var5;
                var4.channelId = var1;
                var2 = var4;
            case 302:
                return var2;
            case 304:
                var0 = var0.params;
                var4 = var0.guildId;
                var2 = var0.channelId;
                var0 = {};
                var5 = _closure1_slot3;
                var3 = null;
                if (!(var4 !== var5)) {
                    _fun98652_ip = 335;
                    continue _fun98652
                }
            case 332:
                var3 = var4;
            case 335:
                var0.guildId = var3;
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun98652_ip = 351;
                    continue _fun98652
                }
            case 348:
                var1 = var2;
            case 351:
                var0.channelId = var1;
                return var0;
        }
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.Routes;
    var _closure1_slot2 = var6;
    var3 = var3.ME;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.createWithEqualityFn;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {
            'path': null,
            'basePath': '/',
            'guildId': null,
            'channelId': null
        };
        var2 = function arg0() {
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot4;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var4 = var3.guildId;
            var _closure3_slot1 = var4;
            var3 = var3.channelId;
            var _closure3_slot2 = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var3 = _closure3_slot0;
                var1.path = var3;
                var3 = _closure3_slot1;
                var1.guildId = var3;
                var0 = _closure3_slot2;
                var1.channelId = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.updatePath = var2;
        var1 = function arg0() {
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot4;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var4 = var3.guildId;
            var _closure3_slot1 = var4;
            var3 = var3.channelId;
            var _closure3_slot2 = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = null;
                var1.path = var0;
                var3 = _closure3_slot1;
                var1.guildId = var3;
                var3 = _closure3_slot2;
                var1.channelId = var3;
                var0 = _closure3_slot0;
                var1.basePath = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.resetPath = var1;
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/routing/KeybindRouterStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3177, 3187, 797, 802, 2]);