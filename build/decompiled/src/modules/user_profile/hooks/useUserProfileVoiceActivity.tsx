// modules/user_profile/hooks/useUserProfileVoiceActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useUserProfileVoiceActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91756: for (var _fun91756_ip = 0;;) switch (_fun91756_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.userId;
                var _closure2_slot0 = var4;
                var3 = var1.guildId;
                var5 = undefined;
                var _closure2_slot1 = var5;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var2 = var2.bind(var5)(var1);
                var1 = {};
                var1.userId = var4;
                var1.guildId = var3;
                var1 = var2.bind(var5)(var1);
                var3 = var1.voiceState;
                var2 = var1.voiceChannel;
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun91756_ip = 91;
                    continue _fun91756
                }
            case 86:
                var1 = var2.id;
            case 91:
                _closure2_slot1 = var1;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var1 = var7[var1];
                var5 = var4.bind(var5)(var1);
                var4 = var5.useStateFromStores;
                var7 = _closure1_slot3;
                var1 = new Array(2);
                var1[0] = var7;
                var6 = _closure1_slot4;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    _fun91757: for (var _fun91757_ip = 0;;) switch (_fun91757_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun91757_ip = 21;
                                continue _fun91757
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            if (!(var0 == var2)) {
                                _fun91757_ip = 25;
                                continue _fun91757
                            }
                        case 21:
                            var2 = undefined;
                            return var2;
                        case 25:
                            var4 = _closure1_slot3;
                            var3 = var4.findActivity;
                            var2 = _closure2_slot0;
                            var1 = function(arg0) { // Environment: var1
                                _fun91758: for (var _fun91758_ip = 0;;) switch (_fun91758_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 4;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var3 = var4.bind(var1)(var3);
                                        var3 = var3.bind(var1)(var2);
                                        if (var3) {
                                            _fun91758_ip = 40;
                                            continue _fun91758
                                        }
                                    case 36:
                                        var3 = false;
                                        return var3;
                                    case 40:
                                        var5 = _closure1_slot4;
                                        var4 = var5.getVoiceStateForSession;
                                        var3 = _closure2_slot0;
                                        var2 = var2.session_id;
                                        var2 = var4.bind(var5)(var3, var2);
                                        var3 = null;
                                        var3 = var3 == var2;
                                        var1 = undefined;
                                        if (var3) {
                                            _fun91758_ip = 85;
                                            continue _fun91758
                                        }
                                    case 80:
                                        var1 = var2.channelId;
                                    case 85:
                                        var0 = _closure2_slot1;
                                        var0 = var1 === var0;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var2 = var0 != var1;
                            var0 = undefined;
                            if (!var2) {
                                _fun91757_ip = 69;
                                continue _fun91757
                            }
                        case 66:
                            var0 = var1;
                        case 69:
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var0);
                var0 = {};
                var0.voiceState = var3;
                var0.voiceChannel = var2;
                var0.voiceActivity = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3610, 3521, 7764, 566, 5670, 2]);