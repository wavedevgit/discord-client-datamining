// modules/app_launcher/utils/AppLauncherPlayUtils.tsx
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun84047: for (var _fun84047_ip = 0;;) switch (_fun84047_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun84047_ip = 260;
                            continue _fun84047
                        }
                    case 13:
                        var10 = var1.appId;
                        var12 = var1.botId;
                        var9 = var1.analyticsLocations;
                        var8 = var1.customId;
                        var7 = var1.referrerId;
                        var6 = var1.commandOrigin;
                        var5 = undefined;
                        SaveGenerator(address = 55);
                    case 53:
                        return var5;
                    case 55:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun84047_ip = 257;
                            continue _fun84047
                        }
                    case 64:
                        var4 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var2 = 1;
                        var2 = var11[var2];
                        var11 = var4.bind(var5)(var2);
                        var4 = var11.tryLaunchAsFrame;
                        var2 = {};
                        var2.applicationId = var10;
                        var2 = var4.bind(var11)(var2);
                        if (var2) {
                            _fun84047_ip = 233;
                            continue _fun84047
                        }
                    case 110:
                        var4 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 2;
                        var2 = var11[var2];
                        var11 = var4.bind(var5)(var2);
                        var4 = var11.openPrivateChannel;
                        var2 = {};
                        var2.recipientIds = var12;
                        var2 = var4.bind(var11)(var2);
                        SaveGenerator(address = 152);
                    case 150:
                        return var2;
                    case 152:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun84047_ip = 230;
                            continue _fun84047
                        }
                    case 158:
                        var4 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var3 = 3;
                        var3 = var11[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = {};
                        var3.targetApplicationId = var10;
                        var3.channelId = var2;
                        var3.analyticsLocations = var9;
                        var3.customId = var8;
                        var3.referrerId = var7;
                        var3.commandOrigin = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 218);
                    case 216:
                        return var3;
                    case 218:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun84047_ip = 227;
                            continue _fun84047
                        }
                    case 224:
                        return var3;
                    case 227:
                        return var3;
                    case 230:
                        return var2;
                    case 233:
                        var2 = global;
                        var4 = var2.Promise;
                        var3 = var4.resolve;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 257:
                        return var1;
                    case 260:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/utils/AppLauncherPlayUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.launchActivityInBotDM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7947, 3936, 7973, 2]);