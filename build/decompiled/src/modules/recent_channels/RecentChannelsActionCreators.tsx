// modules/recent_channels/RecentChannelsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun78174: for (var _fun78174_ip = 0;;) switch (_fun78174_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun78174_ip = 195;
                            continue _fun78174
                        }
                    case 13:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 2;
                        var5 = var7[var1];
                        var2 = undefined;
                        var6 = var4.bind(var2)(var5);
                        var5 = var6.updateUserGuildSettings;
                        var1 = var7[var1];
                        var1 = var4.bind(var2)(var1);
                        var1 = var1.UserSettingsDelay;
                        var4 = var1.INFREQUENT_USER_ACTION;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.Timestamp;
                            var1 = var2.fromDate;
                            var0 = global;
                            var0 = var0.Date;
                            var3 = var0.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var5 = var3;
                            var0 = new var5[var0](var4);
                            var0 = var0 instanceof Object ? var0 : var3;
                            var1 = var1.bind(var2)(var0);
                            var0 = arg0;
                            var0.guildRecentsDismissedAt = var1;
                            var0 = true;
                            return var0;
                        };
                        var1 = var5.bind(var6)(var9, var1, var4);
                        SaveGenerator(address = 85);
                    case 83:
                        return var1;
                    case 85:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun78174_ip = 192;
                            continue _fun78174
                        }
                    case 91:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 4;
                        var4 = var6[var4];
                        var8 = var5.bind(var2)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var10 = 'BULK_CLEAR_RECENTS';
                        var4.type = var10;
                        var4.guildId = var9;
                        var9 = arg1;
                        var4.channelIds = var9;
                        var4 = var7.bind(var8)(var4);
                        var4 = 5;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.track;
                        var3 = _closure1_slot4;
                        var4 = var3.CHANNEL_LIST_UPDATED;
                        var3 = {};
                        var7 = 'recents_dismissed';
                        var3.action_type = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 192:
                        return var1;
                    case 195:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/recent_channels/RecentChannelsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.bulkClearRecents = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 1355, 1341, 806, 795, 2]);