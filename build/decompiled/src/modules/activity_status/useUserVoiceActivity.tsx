// modules/activity_status/useUserVoiceActivity.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activity_status/useUserVoiceActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68665: for (var _fun68665_ip = 0;;) switch (_fun68665_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.userId;
                var _closure2_slot0 = var2;
                var1 = var1.guildId;
                var _closure2_slot1 = var1;
                var6 = undefined;
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var6;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 4;
                var2 = var2[var7];
                var5 = var3.bind(var6)(var2);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun68666: for (var _fun68666_ip = 0;;) switch (_fun68666_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun68666_ip = 21;
                                continue _fun68666
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            if (!(var2 == var0)) {
                                _fun68666_ip = 60;
                                continue _fun68666
                            }
                        case 21:
                            var0 = _closure2_slot0;
                            var2 = var2 != var0;
                            var0 = undefined;
                            if (!var2) {
                                _fun68666_ip = 58;
                                continue _fun68666
                            }
                        case 34:
                            var4 = _closure1_slot4;
                            var3 = var4.getDiscoverableVoiceStateForUser;
                            var2 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2);
                        case 58:
                            _fun68666_ip = 89;
                            continue _fun68666;
                        case 60:
                            var4 = _closure1_slot4;
                            var3 = var4.getDiscoverableVoiceState;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 89:
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3, var2);
                var2 = null;
                var4 = var2 == var3;
                var2 = undefined;
                if (var4) {
                    _fun68665_ip = 102;
                    continue _fun68665
                }
            case 97:
                var2 = var3.channelId;
            case 102:
                _closure2_slot2 = var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = var4[var7];
                var10 = var5.bind(var6)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot2;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    _fun68667: for (var _fun68667_ip = 0;;) switch (_fun68667_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun68667_ip = 17;
                                continue _fun68667
                            }
                        case 13:
                            var1 = undefined;
                            return var1;
                        case 17:
                            var2 = _closure1_slot2;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var8, var2);
                _closure2_slot3 = var2;
                var4 = var4[var7];
                var5 = var5.bind(var6)(var4);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    _fun68668: for (var _fun68668_ip = 0;;) switch (_fun68668_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun68668_ip = 32;
                                continue _fun68668
                            }
                        case 18:
                            var3 = _closure2_slot3;
                            var2 = var3.isPrivate;
                            var0 = var2.bind(var3)();
                        case 32:
                            if (var0) {
                                _fun68668_ip = 68;
                                continue _fun68668
                            }
                        case 35:
                            var4 = _closure1_slot3;
                            var3 = var4.can;
                            var2 = _closure1_slot5;
                            var2 = var2.VIEW_CHANNEL;
                            var1 = _closure2_slot3;
                            var0 = var3.bind(var4)(var2, var1);
                        case 68:
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var1, var0);
                if (var0) {
                    _fun68665_ip = 203;
                    continue _fun68665
                }
            case 199:
                var0 = {};
                _fun68665_ip = 218;
                continue _fun68665;
            case 203:
                var1 = {};
                var1.voiceState = var3;
                var1.voiceChannel = var2;
                var0 = var1;
            case 218:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3093, 3518, 483, 566, 2]);