// modules/headless_tasks/android/MuteAction.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var3 = dependencyMap;
    var _closure1_slot0 = var2;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var4 = var2.bind(var0)(var4);
    var4 = var4.MuteUntilSeconds;
    var _closure1_slot3 = var4;
    var4 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 1;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.awaitStorage;
            var1 = function() { // Environment: var1
                _fun118597: for (var _fun118597_ip = 0;;) switch (_fun118597_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        var1 = var0.muteTime;
                        var5 = null;
                        var0 = -1;
                        var10 = null;
                        if (!(var0 !== var1)) {
                            _fun118597_ip = 105;
                            continue _fun118597
                        }
                    case 27:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var4.bind(var3)(var1);
                        var4 = var1.bind(var3)();
                        var3 = var4.add;
                        var1 = _closure2_slot0;
                        var1 = var1.muteTime;
                        if (!(var5 == var1)) {
                            _fun118597_ip = 85;
                            continue _fun118597
                        }
                    case 75:
                        var0 = _closure1_slot3;
                        var1 = var0.HOURS_1;
                    case 85:
                        var0 = 'second';
                        var1 = var3.bind(var4)(var1, var0);
                        var0 = var1.toISOString;
                        var10 = var0.bind(var1)();
                    case 105:
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var0 = 3;
                        var3 = var9[var0];
                        var0 = undefined;
                        var7 = var4.bind(var0)(var3);
                        var6 = var7.updateChannelOverrideSettings;
                        var2 = _closure2_slot0;
                        var5 = var2.guildId;
                        var14 = var2.channelId;
                        var3 = {};
                        var2 = true;
                        var3.muted = var2;
                        var8 = {};
                        var11 = _closure1_slot3;
                        var11 = var11.HOURS_1;
                        var8.selected_time_window = var11;
                        var8.end_time = var10;
                        var3.mute_config = var8;
                        var8 = _closure1_slot0;
                        var1 = 4;
                        var1 = var9[var1];
                        var1 = var8.bind(var0)(var1);
                        var1 = var1.NotificationLabels;
                        var12 = var1.Muted;
                        var16 = var7;
                        var15 = var5;
                        var13 = var3;
                        var1 = var16[var6](var15, var14, var13, var12, var11);
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1 = arg4;
    var1.exports = var4;
    var1 = 5;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/headless_tasks/android/MuteAction.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1351, 15071, 3004, 4654, 4651, 2]);