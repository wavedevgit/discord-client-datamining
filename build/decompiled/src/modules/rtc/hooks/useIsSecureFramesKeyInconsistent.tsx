// modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        var1 = arg0;
        var1 = var1.userId;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot4;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.getIsSecureFramesKeyInconsistent;
            var1 = _closure2_slot0;
            var5 = _closure1_slot3;
            var0 = new Array(2);
            var0[0] = var5;
            var4 = _closure1_slot4;
            var0[1] = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var3;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useIsSecureFramesKeyInconsistent = var3;
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.channelId;
        var _closure2_slot0 = var9;
        var5 = var0.userId;
        var _closure2_slot1 = var5;
        var7 = var0.nickname;
        var _closure2_slot2 = var7;
        var6 = var0.onAlertOpen;
        var _closure2_slot3 = var6;
        var4 = _closure1_slot5;
        var3 = {};
        var3.userId = var5;
        var0 = undefined;
        var8 = var4.bind(var0)(var3);
        var _closure2_slot4 = var8;
        var4 = _closure1_slot2;
        var3 = var4.useRef;
        var2 = null;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot5 = var2;
        var3 = var4.useEffect;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() { // Environment: var1
            _fun66802: for (var _fun66802_ip = 0;;) switch (_fun66802_ip) {
                case 0:
                    var2 = _closure2_slot4;
                    if (!var2) {
                        _fun66802_ip = 27;
                        continue _fun66802
                    }
                case 12:
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun66802_ip = 61;
                        continue _fun66802
                    }
                case 27:
                    var2 = global;
                    var5 = var2.clearTimeout;
                    var3 = _closure2_slot5;
                    var4 = var3.current;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = null;
                    var3.current = var2;
                    _fun66802_ip = 100;
                    continue _fun66802;
                case 61:
                    var3 = _closure2_slot5;
                    var2 = global;
                    var6 = var2.setTimeout;
                    var5 = undefined;
                    var4 = function() { // Environment: var0
                        var1 = _closure2_slot3;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 4;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.showSecureFramesKeyInconsistentAlert;
                        var1 = {};
                        var5 = _closure2_slot1;
                        var1.userId = var5;
                        var5 = _closure2_slot0;
                        var1.channelId = var5;
                        var4 = _closure2_slot2;
                        var1.nickname = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var2 = 1000;
                    var2 = var6.bind(var5)(var4, var2);
                    var3.current = var2;
                case 100:
                    var1 = _closure2_slot5;
                    var1 = var1.current;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useAlertIfSecureFramesKeyInconsistent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3479, 3570, 566, 8225, 2]);