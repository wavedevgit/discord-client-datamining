// modules/video_calls/native/components/DisconnectRemoteButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/DisconnectRemoteButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun68058: for (var _fun68058_ip = 0;;) switch (_fun68058_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var5 = var0.isSmallSize;
                var1 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 3;
                var0 = var8[var0];
                var3 = undefined;
                var7 = var1.bind(var3)(var0);
                var2 = var7.useStateFromStoresObject;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var4
                    var0 = {};
                    var2 = _closure1_slot4;
                    var1 = var2.getAwaitingRemoteSessionInfo;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var1 = var1 != var3;
                    var0.awaitingRemote = var1;
                    var1 = var2.getRemoteSessionId;
                    var1 = var1.bind(var2)();
                    var0.remoteSessionId = var1;
                    return var0;
                };
                var0 = var2.bind(var7)(var1, var0);
                var1 = var0.remoteSessionId;
                var _closure2_slot1 = var1;
                var7 = var0.awaitingRemote;
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = 4;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PrimaryActionButton;
                var0 = {};
                var8 = _closure1_slot1;
                var10 = _closure1_slot3;
                if (var7) {
                    _fun68058_ip = 140;
                    continue _fun68058
                }
            case 131:
                var7 = 6;
                var7 = var10[var7];
                _fun68058_ip = 147;
                continue _fun68058;
            case 140:
                var9 = 5;
                var7 = var10[var9];
            case 147:
                var7 = var8.bind(var3)(var7);
                var0.source = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 7;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["6vrfgt"];
                var6 = var7.bind(var8)(var6);
                var0.accessibilityLabel = var6;
                var0.isSmallSize = var5;
                var4 = function() {
                    _fun68060: for (var _fun68060_ip = 0;;) switch (_fun68060_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun68060_ip = 50;
                                continue _fun68060
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.disconnectRemote;
                            var1 = var1.bind(var2)();
                            _fun68060_ip = 117;
                            continue _fun68060;
                        case 50:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 8;
                            var1 = var4[var1];
                            var2 = undefined;
                            var6 = var3.bind(var2)(var1);
                            var5 = var6.remoteDisconnect;
                            var1 = _closure2_slot1;
                            var1 = var5.bind(var6)(var1);
                            var1 = 9;
                            var1 = var4[var1];
                            var2 = var3.bind(var2)(var1);
                            var1 = var2.handleDisconnect;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 117:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.DisconnectRemoteButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3478, 33, 566, 7867, 5285, 8421, 1234, 8255, 8163, 2]);