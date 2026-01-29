// modules/channel/useVoiceChannelStartTime.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/useVoiceChannelStartTime.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useStartTime, environment: var1
        _fun102980: for (var _fun102980_ip = 0;;) switch (_fun102980_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 3;
                var0 = var4[var0];
                var9 = undefined;
                var8 = var5.bind(var9)(var0);
                var6 = var8.useStateFromStoresObject;
                var0 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = {};
                    var3 = _closure1_slot3;
                    var4 = var3.hasRequestedStartTimes;
                    var2 = _closure2_slot0;
                    var1 = var2.guild_id;
                    var1 = var4.bind(var3)(var1);
                    var0.hasRequestedStartTimes = var1;
                    var1 = var3.getStartTime;
                    var1 = var1.bind(var3)(var2);
                    var0.startTime = var1;
                    return var0;
                };
                var0 = var6.bind(var8)(var3, var0);
                var6 = var0.hasRequestedStartTimes;
                var _closure2_slot1 = var6;
                var0 = var0.startTime;
                var3 = 4;
                var3 = var4[var3];
                var11 = var5.bind(var9)(var3);
                var10 = var11.useVoiceChannelDurationMobileEnabled;
                var8 = var7.guild_id;
                var3 = 'useStartTime';
                var3 = var10.bind(var11)(var8, var3);
                var10 = 5;
                var4 = var4[var10];
                var5 = var5.bind(var9)(var4);
                var4 = var5.isIOS;
                var5 = var4.bind(var5)();
                if (var5) {
                    _fun102980_ip = 166;
                    continue _fun102980
                }
            case 139:
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var10];
                var8 = var8.bind(var9)(var4);
                var4 = var8.isAndroid;
                var5 = var4.bind(var8)();
            case 166:
                if (!var5) {
                    _fun102980_ip = 172;
                    continue _fun102980
                }
            case 169:
                var5 = !var3;
            case 172:
                var _closure2_slot2 = var5;
                var4 = var7.type;
                var3 = _closure1_slot4;
                var3 = var3.GUILD_VOICE;
                var8 = var4 === var3;
                var _closure2_slot3 = var8;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(4);
                var2[0] = var8;
                var7 = var7.guild_id;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() { // Environment: var1
                    _fun102982: for (var _fun102982_ip = 0;;) switch (_fun102982_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun102982_ip = 17;
                                continue _fun102982
                            }
                        case 10:
                            var2 = _closure2_slot3;
                            var1 = !var2;
                        case 17:
                            if (var1) {
                                _fun102982_ip = 24;
                                continue _fun102982
                            }
                        case 20:
                            var1 = _closure2_slot2;
                        case 24:
                            if (var1) {
                                _fun102982_ip = 72;
                                continue _fun102982
                            }
                        case 27:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchChannelInfo;
                            var0 = _closure2_slot0;
                            var0 = var0.guild_id;
                            var0 = var1.bind(var2)(var0);
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useStartTime = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 12436, 660, 566, 12437, 479, 13409, 2]);