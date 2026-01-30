// modules/activities/handleUsePrimaryEntryPointAppCommand.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() { // Original name: _handleUsePrimaryEntryPointAppCommand, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64049: for (var _fun64049_ip = 0;;) switch (_fun64049_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                        if (var5) {
                            _fun64049_ip = 183;
                            continue _fun64049
                        }
                    case 15:
                        var2 = var1;
                        var _closure4_slot0 = var1;
                        var7 = undefined;
                        var _closure4_slot1 = var7;
                        var4 = undefined;
                        var5 = var1.targetApplicationId;
                        var1 = null;
                        if (!(var1 != var5)) {
                            _fun64049_ip = 178;
                            continue _fun64049
                        }
                    case 45:
                        var1 = false;
                        var4 = false;
                    case 49: // try_start_0
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var6 = 3;
                        var6 = var9[var6];
                        var8 = var8.bind(var7)(var6);
                        var6 = var2.targetApplicationId;
                        var2 = var2.channelId;
                        var2 = var8.bind(var7)(var6, var2);
                        SaveGenerator(address = 93);
                    case 91:
                        return var2;
                    case 93:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun64049_ip = 170;
                            continue _fun64049
                        }
                    case 99:
                        _closure4_slot1 = var2;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var8 = 4;
                        var6 = var6[var8];
                        var9 = var9.bind(var7)(var6);
                        var6 = var9.shouldOpenActivityInPopoutWindow;
                        var4 = var6.bind(var9)();
                    case 133: // try_end0
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var5 = var5[var8];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.wrapPreemptiveActivityPopout;
                        var3 = function() { // Environment: var3
                            var2 = {};
                            var3 = _closure4_slot0;
                            var4 = var2;
                            var1 = copyDataProperties(var4, var3);
                            var1 = _closure4_slot1;
                            var0 = 'targetApplication';
                            var2[var0] = var1;
                            var1 = function() { // Original name: handleUsePrimaryEntryPointAppCommandInternal, environment: var0
                                var0 = undefined;
                                var3 = _closure1_slot8;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var3 = var5.bind(var6)(var4, var3);
                        return var3;
                    case 170:
                        return var2;
                    case 173: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        return var1;
                    case 178:
                        var1 = false;
                        return var1;
                    case 183:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() { // Original name: _handleUsePrimaryEntryPointAppCommandInternal, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64054: for (var _fun64054_ip = 0;;) switch (_fun64054_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64054_ip = 369;
                            continue _fun64054
                        }
                    case 13:
                        var20 = var1.targetApplication;
                        var15 = var1.locationObject;
                        var21 = var1.channelId;
                        var14 = var1.analyticsLocations;
                        var18 = var1.componentId;
                        var17 = var1.commandOrigin;
                        var16 = var1.sectionName;
                        var13 = var1.source;
                        var12 = var1.onExecutedCallback;
                        var11 = var1.referrerId;
                        var10 = var1.customId;
                        var9 = var1.inviterUserId;
                        var8 = var1.onConfirmActivityLaunchChecksAlertOpen;
                        var7 = undefined;
                        SaveGenerator(address = 95);
                    case 93:
                        return var7;
                    case 95:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64054_ip = 366;
                            continue _fun64054
                        }
                    case 104:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 5;
                        var3 = var5[var3];
                        var3 = var4.bind(var7)(var3);
                        var19 = var3.bind(var7)();
                        var4 = _closure1_slot6;
                        var3 = var4.getCurrentUser;
                        var5 = var3.bind(var4)();
                        var6 = null;
                        var3 = var6 != var21;
                        if (!var3) {
                            _fun64054_ip = 360;
                            continue _fun64054
                        }
                    case 156:
                        var22 = _closure1_slot5;
                        var4 = var22.getChannel;
                        var4 = var4.bind(var22)(var21);
                        var4 = var6 != var4;
                        if (!var4) {
                            _fun64054_ip = 357;
                            continue _fun64054
                        }
                    case 180:
                        var5 = var6 != var5;
                        if (!var5) {
                            _fun64054_ip = 191;
                            continue _fun64054
                        }
                    case 187:
                        var5 = var6 != var20;
                    case 191:
                        if (!var5) {
                            _fun64054_ip = 354;
                            continue _fun64054
                        }
                    case 197:
                        var23 = _closure1_slot2;
                        var22 = _closure1_slot3;
                        var6 = 6;
                        var6 = var22[var6];
                        var24 = var23.bind(var7)(var6);
                        var23 = var24.markActivityUsed;
                        var6 = var20.id;
                        var6 = var23.bind(var24)(var6);
                        var6 = _closure1_slot0;
                        var2 = 7;
                        var2 = var22[var2];
                        var7 = var6.bind(var7)(var2);
                        var6 = var7.runPrimaryAppCommandOrJoinEmbeddedActivity;
                        var2 = {};
                        var2.channelId = var21;
                        var20 = var20.id;
                        var2.applicationId = var20;
                        var20 = true;
                        var2.isStart = var20;
                        var2.embeddedActivitiesManager = var19;
                        var2.componentId = var18;
                        var2.commandOrigin = var17;
                        var2.sectionName = var16;
                        var2.locationObject = var15;
                        var2.analyticsLocations = var14;
                        var2.source = var13;
                        var2.onExecutedCallback = var12;
                        var2.referrerId = var11;
                        var2.customId = var10;
                        var2.inviterUserId = var9;
                        var2.onConfirmActivityLaunchChecksAlertOpen = var8;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 345);
                    case 343:
                        return var2;
                    case 345:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        var5 = var2;
                        if (var6) {
                            _fun64054_ip = 363;
                            continue _fun64054
                        }
                    case 354:
                        var4 = var5;
                    case 357:
                        var3 = var4;
                    case 360:
                        return var3;
                    case 363:
                        return var2;
                    case 366:
                        return var1;
                    case 369:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/handleUsePrimaryEntryPointAppCommand.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: handleUsePrimaryEntryPointAppCommand, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 1613, 7930, 7927, 7905, 7942, 7875, 2]);