// modules/rtc/hooks/useIsSecureFramesVerified.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/hooks/useIsSecureFramesVerified.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var5 = var1.userId;
        var _closure2_slot0 = var5;
        var9 = var1.channelId;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 3;
        var2 = var7[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var2);
        var6 = var8.useIsSecureFramesUIEnabled;
        var2 = {};
        var2.channelId = var9;
        var6 = var6.bind(var8)(var2);
        var _closure2_slot1 = var6;
        var2 = 4;
        var2 = var7[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStores;
        var7 = _closure1_slot4;
        var2 = new Array(3);
        var2[0] = var7;
        var7 = _closure1_slot2;
        var2[1] = var7;
        var1 = _closure1_slot3;
        var2[2] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun66646: for (var _fun66646_ip = 0;;) switch (_fun66646_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun66646_ip = 20;
                        continue _fun66646
                    }
                case 16:
                    var0 = _closure2_slot1;
                case 20:
                    if (!var0) {
                        _fun66646_ip = 45;
                        continue _fun66646
                    }
                case 23:
                    var4 = _closure1_slot3;
                    var3 = var4.isUserConnected;
                    var2 = _closure2_slot0;
                    var0 = var3.bind(var4)(var2);
                case 45:
                    if (!var0) {
                        _fun66646_ip = 73;
                        continue _fun66646
                    }
                case 48:
                    var3 = _closure1_slot2;
                    var2 = var3.getId;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot0;
                    var0 = var3 !== var2;
                case 73:
                    if (!var0) {
                        _fun66646_ip = 100;
                        continue _fun66646
                    }
                case 76:
                    var3 = _closure1_slot4;
                    var2 = var3.isUserVerified;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 100:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useIsUserSecureFramesVerified = var3;
    var3 = function arg0() {
        var1 = arg0;
        var5 = var1.streamKey;
        var _closure2_slot0 = var5;
        var9 = var1.channelId;
        var4 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 3;
        var2 = var8[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var2);
        var6 = var7.useIsSecureFramesUIEnabled;
        var2 = {};
        var2.channelId = var9;
        var6 = var6.bind(var7)(var2);
        var _closure2_slot1 = var6;
        var2 = 5;
        var2 = var8[var2];
        var7 = var4.bind(var3)(var2);
        var2 = var7.useIsStreamRTCConnectionEmpty;
        var7 = var2.bind(var7)(var5);
        var _closure2_slot2 = var7;
        var2 = 4;
        var2 = var8[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStores;
        var8 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var8;
        var1 = _closure1_slot2;
        var2[1] = var1;
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var0 = function() { // Environment: var0
            _fun66648: for (var _fun66648_ip = 0;;) switch (_fun66648_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (!var0) {
                        _fun66648_ip = 121;
                        continue _fun66648
                    }
                case 10:
                    var0 = _closure2_slot2;
                    if (var0) {
                        _fun66648_ip = 121;
                        continue _fun66648
                    }
                case 17:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun66648_ip = 117;
                        continue _fun66648
                    }
                case 27:
                    var3 = _closure1_slot2;
                    var0 = var3.getId;
                    var3 = var0.bind(var3)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 6;
                    var4 = var4[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.decodeStreamKey;
                    var0 = _closure2_slot0;
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ownerId;
                    var0 = var0 !== var3;
                    if (!var0) {
                        _fun66648_ip = 115;
                        continue _fun66648
                    }
                case 94:
                    var3 = _closure1_slot4;
                    var2 = var3.isStreamVerified;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 115:
                    return var0;
                case 117:
                    var0 = false;
                    return var0;
                case 121:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useIsStreamSecureFramesVerified = var3;
    var1 = function arg0() {
        var1 = arg0;
        var8 = var1.channelId;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 3;
        var2 = var7[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var2);
        var5 = var6.useIsSecureFramesUIEnabled;
        var2 = {};
        var2.channelId = var8;
        var5 = var5.bind(var6)(var2);
        var _closure2_slot0 = var5;
        var2 = 5;
        var2 = var7[var2];
        var6 = var4.bind(var3)(var2);
        var2 = var6.useIsCallRTCConnectionEmpty;
        var6 = var2.bind(var6)();
        var _closure2_slot1 = var6;
        var2 = 4;
        var2 = var7[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun66650: for (var _fun66650_ip = 0;;) switch (_fun66650_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    if (var0) {
                        _fun66650_ip = 17;
                        continue _fun66650
                    }
                case 13:
                    var0 = _closure2_slot1;
                case 17:
                    var0 = !var0;
                    if (!var0) {
                        _fun66650_ip = 42;
                        continue _fun66650
                    }
                case 23:
                    var2 = _closure1_slot4;
                    var1 = var2.isCallVerified;
                    var0 = var1.bind(var2)();
                case 42:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useIsCallSecureFramesVerified = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3518, 8244, 8282, 566, 8287, 3505, 2]);