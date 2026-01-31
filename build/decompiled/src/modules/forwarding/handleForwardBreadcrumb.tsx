// modules/forwarding/handleForwardBreadcrumb.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _handleForwardBreadcrumb, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun88704: for (var _fun88704_ip = 0;;) switch (_fun88704_ip) {
                    case 0:
                        StartGenerator();
                        var12 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun88704_ip = 478;
                            continue _fun88704
                        }
                    case 13:
                        var1 = undefined;
                        var3 = undefined;
                        var2 = undefined;
                        var4 = undefined;
                        var5 = var12.messageReference;
                        var13 = null;
                        if (!(var13 != var5)) {
                            _fun88704_ip = 475;
                            continue _fun88704
                        }
                    case 36:
                        var5 = var12.messageReference;
                        var3 = var5.guild_id;
                        var5 = var12.messageReference;
                        var8 = var5.channel_id;
                        var2 = var8;
                        var5 = var12.messageReference;
                        var9 = var5.message_id;
                        var6 = _closure1_slot4;
                        var5 = var6.getChannel;
                        var5 = var5.bind(var6)(var8);
                        var6 = false;
                        var4 = false;
                        if (!(var13 == var5)) {
                            _fun88704_ip = 278;
                            continue _fun88704
                        }
                    case 101:
                        var5 = var3;
                        if (!(var13 != var5)) {
                            _fun88704_ip = 278;
                            continue _fun88704
                        }
                    case 111:
                        var10 = _closure1_slot5;
                        var8 = var10.getGuild;
                        var5 = var3;
                        var5 = var8.bind(var10)(var5);
                        if (!(var13 == var5)) {
                            _fun88704_ip = 278;
                            continue _fun88704
                        }
                    case 135: // try_start_0
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 4;
                        var5 = var10[var5];
                        var14 = var8.bind(var1)(var5);
                        var11 = var14.startLurking;
                        var10 = var3;
                        var8 = {};
                        var5 = _closure1_slot7;
                        var5 = var5.FORWARD_BREADCRUMB;
                        var8.object = var5;
                        var5 = {};
                        var5.shouldNavigate = var6;
                        var5 = var11.bind(var14)(var10, var8, var5);
                        SaveGenerator(address = 199);
                    case 197:
                        return var5;
                    case 199:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (var8) {
                            _fun88704_ip = 273;
                            continue _fun88704
                        }
                    case 205:
                        var4 = true;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 5;
                        var8 = var11[var8];
                        var11 = var10.bind(var1)(var8);
                        var10 = var11.waitForGuild;
                        var8 = var3;
                        var8 = var10.bind(var11)(var8);
                        SaveGenerator(address = 245);
                    case 243:
                        return var8;
                    case 245:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 10);
                        if (var10) {
                            _fun88704_ip = 270;
                            continue _fun88704
                        }
                    case 251:
                        var14 = _closure1_slot4;
                        var11 = var14.getChannel;
                        var10 = var2;
                        var10 = var11.bind(var14)(var10);
                    case 268: // try_end0
                        _fun88704_ip = 278;
                        continue _fun88704;
                    case 270:
                        return var8;
                    case 273:
                        return var5;
                    case 276: // catch_target0
                        CatchBlockStart(arg_register = 5);
                    case 278:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var5 = 6;
                        var5 = var10[var5];
                        var11 = var8.bind(var1)(var5);
                        var10 = var11.track;
                        var5 = _closure1_slot6;
                        var8 = var5.FORWARD_BREADCRUMB_CLICKED;
                        var5 = {};
                        var16 = _closure1_slot4;
                        var15 = var16.getBasicChannel;
                        var14 = var12.channel_id;
                        var14 = var15.bind(var16)(var14);
                        var15 = var13 == var14;
                        var13 = undefined;
                        if (var15) {
                            _fun88704_ip = 349;
                            continue _fun88704
                        }
                    case 344:
                        var13 = var14.guild_id;
                    case 349:
                        var5.guild_id = var13;
                        var13 = var12.channel_id;
                        var5.channel_id = var13;
                        var12 = var12.id;
                        var5.message_id = var12;
                        var12 = var3;
                        var5.breadcrumb_guild_id = var12;
                        var12 = var2;
                        var5.breadcrumb_channel_id = var12;
                        var5.breadcrumb_message_id = var9;
                        var5.did_lurk = var4;
                        var5 = var10.bind(var11)(var8, var5);
                        var5 = undefined;
                        if (!var4) {
                            _fun88704_ip = 420;
                            continue _fun88704
                        }
                    case 417:
                        var5 = var2;
                    case 420:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = 7;
                        var4 = var10[var4];
                        var4 = var8.bind(var1)(var4);
                        var8 = _closure1_slot8;
                        var7 = var8.CHANNEL;
                        var3 = var7.bind(var8)(var3, var2, var9);
                        var2 = {};
                        var2.navigationReplace = var6;
                        var2.welcomeModalChannelId = var5;
                        var2 = var4.bind(var1)(var3, var2);
                    case 475:
                        return var1;
                    case 478:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var6 = var3.AnalyticsObjects;
    var _closure1_slot7 = var6;
    var3 = var3.Routes;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/handleForwardBreadcrumb.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: handleForwardBreadcrumb, environment: var1
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 1410, 660, 5576, 4642, 795, 5579, 2]);