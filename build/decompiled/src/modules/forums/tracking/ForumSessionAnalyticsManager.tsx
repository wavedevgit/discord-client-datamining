// modules/forums/tracking/ForumSessionAnalyticsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var0 = {};
        var1 = arg0;
        var0.channelId = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.v4;
        var1 = var1.bind(var2)();
        var0.sessionId = var1;
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'getForumChannelSessionId';
        var0.key = var4;
        var1 = function arg0() {
            _fun53436: for (var _fun53436_ip = 0;;) switch (_fun53436_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0.session;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun53436_ip = 38;
                        continue _fun53436
                    }
                case 18:
                    var2 = _closure1_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var0.session = var1;
                case 38:
                    var1 = var0.session;
                    var1 = var1.channelId;
                    if (!(var1 !== var3)) {
                        _fun53436_ip = 73;
                        continue _fun53436
                    }
                case 53:
                    var2 = _closure1_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var0.session = var1;
                case 73:
                    var0 = var0.session;
                    var0 = var0.sessionId;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/tracking/ForumSessionAnalyticsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 491, 2]);