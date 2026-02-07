// modules/video_calls/native/useOnConnectToConsole.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var3 = function arg0, arg1() {
        _fun67555: for (var _fun67555_ip = 0;;) switch (_fun67555_ip) {
            case 0:
                var1 = arg1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var2 = var7[var2];
                var3 = undefined;
                var5 = var6.bind(var3)(var2);
                var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                var2 = 3;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.DONUT_MOBILE_NUX;
                var2 = var4.bind(var5)(var2);
                var2 = var1.twoWayLink;
                if (!var2) {
                    _fun67555_ip = 123;
                    continue _fun67555
                }
            case 72:
                var2 = var1.revoked;
                if (var2) {
                    _fun67555_ip = 123;
                    continue _fun67555
                }
            case 81:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.beginConsoleTransfer;
                var4 = var1.type;
                var2 = arg0;
                var2 = var5.bind(var6)(var2, var4);
                return var3;
            case 123:
                var4 = var1.type;
                var2 = _closure1_slot5;
                var2 = var2.XBOX;
                if (!(var2 !== var4)) {
                    _fun67555_ip = 229;
                    continue _fun67555
                }
            case 142:
                var2 = _closure1_slot5;
                var2 = var2.PLAYSTATION;
                if (!(var2 !== var4)) {
                    _fun67555_ip = 172;
                    continue _fun67555
                }
            case 156:
                var2 = _closure1_slot5;
                var2 = var2.PLAYSTATION_STAGING;
                if (!(var2 !== var4)) {
                    _fun67555_ip = 172;
                    continue _fun67555
                }
            case 170:
                return var3;
            case 172:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var5.showModal;
                var2 = _closure1_slot4;
                var6 = var2.CHANNEL_CALL;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = var1.type;
                var1 = var4.bind(var5)(var2, var1);
                return var1;
            case 229:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.showModal;
                var0 = _closure1_slot4;
                var3 = var0.CHANNEL_CALL;
                var0 = new Array(1);
                var0[0] = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticsLocations;
    var _closure1_slot4 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/useOnConnectToConsole.tsx';
    var4 = var5.bind(var6)(var4);
    var2.onConnectToConsole = var3;
    var1 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOnConnectToConsole = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 3213, 1358, 5371, 5907, 8365, 2]);