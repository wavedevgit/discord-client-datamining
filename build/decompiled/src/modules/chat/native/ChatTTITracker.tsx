// modules/chat/native/ChatTTITracker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var6 = var3.Fragment;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/ChatTTITracker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89249: for (var _fun89249_ip = 0;;) switch (_fun89249_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.messages;
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {};
                var4 = var6.length;
                var0 = 0;
                var0 = var4 > var0;
                var4 = null;
                if (!var0) {
                    _fun89249_ip = 104;
                    continue _fun89249
                }
            case 40:
                var12 = _closure1_slot3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 1;
                var0 = var9[var0];
                var11 = undefined;
                var0 = var8.bind(var11)(var0);
                var9 = var0.TTIMeasurementView;
                var8 = {};
                var0 = 'cached_messages_tti';
                var8.nativeID = var0;
                var13 = function arg0() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.displayMessagesWithCache;
                    var2 = var3.record;
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var1.timestamp;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8.onMeasurement = var13;
                var4 = var12.bind(var11)(var9, var8, var0);
            case 104:
                var0 = new Array(2);
                var0[0] = var4;
                var4 = var6.hasFetched;
                if (var4) {
                    _fun89249_ip = 143;
                    continue _fun89249
                }
            case 121:
                var8 = var6.ready;
                var4 = null;
                if (!var8) {
                    _fun89249_ip = 207;
                    continue _fun89249
                }
            case 132:
                var6 = var6.cached;
                var4 = null;
                if (var6) {
                    _fun89249_ip = 207;
                    continue _fun89249
                }
            case 143:
                var9 = _closure1_slot3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 1;
                var5 = var7[var5];
                var8 = undefined;
                var5 = var6.bind(var8)(var5);
                var7 = var5.TTIMeasurementView;
                var6 = {};
                var5 = 'latest_messages_tti';
                var6.nativeID = var5;
                var10 = function arg0() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.displayLatestMessages;
                    var2 = var3.record;
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var1.timestamp;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onMeasurement = var10;
                var4 = var9.bind(var8)(var7, var6, var5);
            case 207:
                var0[1] = var4;
                var1.children = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.ChatTTITracker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [33, 9711, 14, 2]);