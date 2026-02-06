// actions/ChannelFollowerActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot4;
        var4 = var5.CHANNEL_FOLLOWERS;
        var3 = arg1;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.webhook_channel_id = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.createChannelFollower = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun75989: for (var _fun75989_ip = 0;;) switch (_fun75989_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75989_ip = 268;
                            continue _fun75989
                        }
                    case 10:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 3;
                        var3 = var1[var4];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'CHANNEL_FOLLOWER_STATS_FETCH_START';
                        var3.type = var7;
                        var3 = var5.bind(var6)(var3);
                    case 57: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 2;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.get;
                        var3 = {};
                        var10 = _closure1_slot4;
                        var7 = var10.CHANNEL_FOLLOWER_STATS;
                        var9 = _closure2_slot0;
                        var7 = var7.bind(var10)(var9);
                        var3.url = var7;
                        var7 = {};
                        var7.channel_id = var9;
                        var3.body = var7;
                        var7 = true;
                        var3.oldFormErrors = var7;
                        var3.rejectWithError = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 145);
                    case 143:
                        return var3;
                    case 145:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun75989_ip = 210;
                            continue _fun75989
                        }
                    case 151:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var9 = 'CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS';
                        var5.type = var9;
                        var9 = var3.body;
                        var5.stats = var9;
                        var8 = _closure2_slot0;
                        var5.channelId = var8;
                        var5 = var6.bind(var7)(var5);
                    case 208: // try_end0
                        _fun75989_ip = 265;
                        continue _fun75989;
                    case 210:
                        return var3;
                    case 213: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'CHANNEL_FOLLOWER_STATS_FETCH_FAILURE';
                        var2.type = var5;
                        var5 = _closure2_slot0;
                        var2.channelId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 265:
                        return var1;
                    case 268:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchChannelFollowerStats = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED';
        var1.type = var4;
        var4 = arg0;
        var1.messageId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.dismissPublishBump = var6;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.permanentlyHidePublishBump = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ChannelFollowerActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 806, 2]);