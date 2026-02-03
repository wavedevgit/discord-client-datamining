// modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var6 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var1 = var3.isConnected;
            var1 = var1.bind(var3)();
            var _closure3_slot0 = var1;
            var2 = function() {
                _fun101430: for (var _fun101430_ip = 0;;) switch (_fun101430_ip) {
                    case 0:
                        var2 = _closure1_slot4;
                        var1 = var2.isConnected;
                        var1 = var1.bind(var2)();
                        var3 = _closure3_slot0;
                        if (!(var3 !== var1)) {
                            _fun101430_ip = 261;
                            continue _fun101430
                        }
                    case 31:
                        _closure3_slot0 = var1;
                        if (!var1) {
                            _fun101430_ip = 261;
                            continue _fun101430
                        }
                    case 41:
                        var2 = _closure1_slot6;
                        var1 = var2.getSortedChannels;
                        var4 = var1.bind(var2)();
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = 2;
                        var3 = var3.bind(var2)(var4, var1);
                        var8 = 0;
                        var1 = var3[var8];
                        var1 = 1;
                        var7 = var3[var1];
                        var3 = new Array(0);
                        var6 = global;
                        var9 = var6.Math;
                        var4 = var9.min;
                        var1 = var7.length;
                        var5 = 20;
                        var1 = var4.bind(var9)(var5, var1);
                        var1 = var8 < var1;
                        var4 = null;
                        if (!var1) {
                            _fun101430_ip = 214;
                            continue _fun101430
                        }
                    case 123:
                        var10 = _closure1_slot5;
                        var9 = var10.getChannel;
                        var1 = var7[var8];
                        var1 = var1.channelId;
                        var10 = var9.bind(var10)(var1);
                        var1 = var4 != var10;
                        if (!var1) {
                            _fun101430_ip = 163;
                            continue _fun101430
                        }
                    case 153:
                        var9 = var10.isGroupDM;
                        var1 = var9.bind(var10)();
                    case 163:
                        if (!var1) {
                            _fun101430_ip = 185;
                            continue _fun101430
                        }
                    case 166:
                        var9 = var3.push;
                        var1 = var7[var8];
                        var1 = var1.channelId;
                        var1 = var9.bind(var3)(var1);
                    case 185:
                        var8 = var8 + 1;
                        var10 = var6.Math;
                        var9 = var10.min;
                        var1 = var7.length;
                        var1 = var9.bind(var10)(var5, var1);
                        if (var8 < var1) {
                            _fun101430_ip = 123;
                            continue _fun101430
                        }
                    case 214:
                        var1 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 5;
                        var0 = var4[var0];
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.dispatch;
                        var0 = {};
                        var4 = 'CALL_CONNECT_MULTIPLE';
                        var0.type = var4;
                        var0.channelIds = var3;
                        var0 = var1.bind(var2)(var0);
                    case 261:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot1 = var2;
            var1 = var3.addChangeListener;
            var1 = var1.bind(var3)(var2);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot4;
                var1 = var2.removeChangeListener;
                var0 = _closure3_slot1;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3474, 1372, 8331, 806, 2]);