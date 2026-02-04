// modules/activities/useIsActivityFocused.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        _fun62869: for (var _fun62869_ip = 0;;) switch (_fun62869_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var1 = var0.ChannelRTCStore;
                var2 = var0.EmbeddedActivitiesStore;
                var0 = var1.getSelectedParticipant;
                var1 = var0.bind(var1)(var3);
                var0 = var2.getCurrentEmbeddedActivity;
                var6 = var0.bind(var2)();
                var7 = null;
                var0 = var7 != var1;
                if (!var0) {
                    _fun62869_ip = 54;
                    continue _fun62869
                }
            case 50:
                var0 = var7 != var6;
            case 54:
                if (!var0) {
                    _fun62869_ip = 131;
                    continue _fun62869
                }
            case 57:
                var2 = var1.id;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var5 = undefined;
                var4 = var3.bind(var5)(var1);
                var3 = var4.getEmbeddedActivityParticipantId;
                var1 = {};
                var8 = var6.applicationId;
                var1.applicationId = var8;
                var7 = var7 == var6;
                if (var7) {
                    _fun62869_ip = 117;
                    continue _fun62869
                }
            case 111:
                var5 = var6.compositeInstanceId;
            case 117:
                var1.instanceId = var5;
                var1 = var3.bind(var4)(var1);
                var0 = var2 === var1;
            case 131:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useIsActivityFocused.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot2;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = {};
            var3 = _closure2_slot0;
            var1.channelId = var3;
            var3 = _closure1_slot2;
            var1.ChannelRTCStore = var3;
            var0 = _closure1_slot3;
            var1.EmbeddedActivitiesStore = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.isActivityFocused = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3948, 1371, 3953, 566, 2]);