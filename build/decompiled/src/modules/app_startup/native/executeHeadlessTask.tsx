// modules/app_startup/native/executeHeadlessTask.tsx
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun118194: for (var _fun118194_ip = 0;;) switch (_fun118194_ip) {
                    case 0:
                        StartGenerator();
                        var17 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118194_ip = 2274;
                            continue _fun118194
                        }
                    case 13:
                        var13 = var17;
                        var11 = arg1;
                        var10 = arg2;
                        var8 = undefined;
                        var2 = undefined;
                        var5 = undefined;
                        var12 = undefined;
                        var3 = undefined;
                        var9 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var1 = 5;
                        var1 = var14[var1];
                        var15 = var9.bind(var8)(var1);
                        var4 = global;
                        var1 = var4.HermesInternal;
                        var7 = var1.concat;
                        var1 = 'Task ';
                        var28 = var7.bind(var1)(var17);
                        var7 = var15.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var15
                            }
                        });
                        var29 = var7;
                        var1 = new var29[var15](var28, var27);
                        var2 = var1 instanceof Object ? var1 : var7;
                        var7 = var4.Date;
                        var1 = var7.now;
                        var5 = var1.bind(var7)();
                        var7 = 6;
                        var1 = var14[var7];
                        var15 = var9.bind(var8)(var1);
                        var9 = var15.addBreadcrumb;
                        var1 = {};
                        var16 = 'Executing headless task.';
                        var1.message = var16;
                        var16 = {};
                        var16.name = var17;
                        var1.data = var16;
                        var1 = var9.bind(var15)(var1);
                        var9 = _closure1_slot2;
                        var1 = 7;
                        var1 = var14[var1];
                        var9 = var9.bind(var8)(var1);
                        var1 = var9.recordStartHeadlessTask;
                        var1 = var1.bind(var9)();
                        var9 = _closure1_slot0;
                        var1 = 8;
                        var1 = var14[var1];
                        var9 = var9.bind(var8)(var1);
                        var1 = var9.closeFastConnectSocket;
                        var1 = var1.bind(var9)();
                        var14 = false;
                        var12 = false;
                    case 215: // try_start_0
                        var9 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var15 = 9;
                        var1 = var1[var15];
                        var1 = var9.bind(var8)(var1);
                        var1 = var1.wasEverActive;
                        if (var1) {
                            _fun118194_ip = 275;
                            continue _fun118194
                        }
                    case 244:
                        var9 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var1 = var1[var15];
                        var1 = var9.bind(var8)(var1);
                        var9 = var1.extraProperties;
                        var1 = true;
                        var9.headless_task_ran = var1;
                    case 275:
                        var1 = _closure1_slot5;
                        var9 = var1.currentState;
                        var1 = 'active';
                        if (!(var1 !== var9)) {
                            _fun118194_ip = 345;
                            continue _fun118194
                        }
                    case 293:
                        var15 = var2;
                        var9 = var15.log;
                        var1 = 'Pausing socket in headless task because app state is not active';
                        var1 = var9.bind(var15)(var1);
                        var9 = _closure1_slot2;
                        var15 = _closure1_slot3;
                        var1 = 10;
                        var1 = var15[var1];
                        var15 = var9.bind(var8)(var1);
                        var9 = var15.setIsPaused;
                        var1 = true;
                        var1 = var9.bind(var15)(var1);
                    case 345:
                        var9 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var15 = 11;
                        var1 = var1[var15];
                        var17 = var9.bind(var8)(var1);
                        var16 = var17.track;
                        var1 = _closure1_slot9;
                        var9 = var1.HEADLESS_TASK_INVOKED;
                        var1 = {};
                        var18 = _closure1_slot5;
                        var18 = var18.currentState;
                        var1.client_app_state = var18;
                        var18 = var13;
                        var1.name = var18;
                        var1 = var16.bind(var17)(var9, var1);
                        var1 = _closure1_slot7;
                        var1 = var1.bind(var8)();
                        SaveGenerator(address = 422);
                    case 420:
                        return var1;
                    case 422:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 9);
                        if (var9) {
                            _fun118194_ip = 1637;
                            continue _fun118194
                        }
                    case 431:
                        var17 = var2;
                        var16 = var17.log;
                        var9 = 'initHeadlessTask completed';
                        var9 = var16.bind(var17)(var9);
                        var9 = _closure1_slot8;
                        var9 = var9.promise;
                        SaveGenerator(address = 464);
                    case 462:
                        return var9;
                    case 464:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 16);
                        if (var16) {
                            _fun118194_ip = 1316;
                            continue _fun118194
                        }
                    case 473:
                        var18 = var2;
                        var17 = var18.log;
                        var16 = 'Flux Initialized';
                        var16 = var17.bind(var18)(var16);
                        var17 = _closure1_slot6;
                        var16 = var17.isAuthenticated;
                        var16 = var16.bind(var17)();
                        if (var16) {
                            _fun118194_ip = 530;
                            continue _fun118194
                        }
                    case 509:
                        var18 = var2;
                        var17 = var18.log;
                        var16 = 'Analytics Init skipped; not authenticated';
                        var16 = var17.bind(var18)(var16);
                        _fun118194_ip = 631;
                        continue _fun118194;
                    case 530:
                        var17 = _closure1_slot0;
                        var18 = _closure1_slot3;
                        var16 = 12;
                        var16 = var18[var16];
                        var16 = var17.bind(var8)(var16);
                        var18 = var16.AnalyticsActionHandlers;
                        var17 = var18.handleConnectionOpen;
                        var16 = {};
                        var20 = _closure1_slot6;
                        var19 = var20.getAnalyticsToken;
                        var19 = var19.bind(var20)();
                        var16.analyticsToken = var19;
                        var19 = {};
                        var21 = _closure1_slot6;
                        var20 = var21.getId;
                        var20 = var20.bind(var21)();
                        var19.id = var20;
                        var16.user = var19;
                        var16 = var17.bind(var18)(var16);
                        var18 = var2;
                        var17 = var18.log;
                        var16 = 'Analytics Initialized';
                        var16 = var17.bind(var18)(var16);
                    case 631:
                        var11 = var11.bind(var8)();
                        var10 = var11.bind(var8)(var10);
                        SaveGenerator(address = 644);
                    case 642:
                        return var10;
                    case 644:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 11);
                        if (var11) {
                            _fun118194_ip = 995;
                            continue _fun118194
                        }
                    case 653:
                        var20 = true;
                        var12 = true;
                        var17 = var2;
                        var16 = var17.log;
                        var11 = 'Task completed successfully';
                        var11 = var16.bind(var17)(var11);
                    case 676: // try_end0
                        var16 = var4.Date;
                        var11 = var16.now;
                        var16 = var11.bind(var16)();
                        var11 = var5;
                        var11 = var16 - var11;
                        var17 = _closure1_slot1;
                        var16 = _closure1_slot3;
                        var18 = var16[var7];
                        var23 = var17.bind(var8)(var18);
                        var19 = var23.addBreadcrumb;
                        var18 = {};
                        var21 = 'Finished headless task.';
                        var18.message = var21;
                        var24 = {};
                        var22 = var13;
                        var24.name = var22;
                        var21 = var12;
                        var24.success = var21;
                        var25 = 'ms';
                        var25 = var11 + var25;
                        var24.duration = var25;
                        var18.data = var24;
                        var18 = var19.bind(var23)(var18);
                        var23 = var2;
                        var19 = var23.log;
                        var18 = 'Unpausing socket';
                        var18 = var19.bind(var23)(var18);
                        var19 = _closure1_slot2;
                        var18 = 10;
                        var18 = var16[var18];
                        var19 = var19.bind(var8)(var18);
                        var18 = var19.setIsPaused;
                        var18 = var18.bind(var19)(var14);
                        var16 = var16[var15];
                        var19 = var17.bind(var8)(var16);
                        var18 = var19.track;
                        var16 = _closure1_slot9;
                        var17 = var16.HEADLESS_TASK_COMPLETED;
                        var16 = {};
                        var23 = _closure1_slot5;
                        var23 = var23.currentState;
                        var16.client_app_state = var23;
                        var16.name = var22;
                        var16.success = var21;
                        var16.duration_ms = var11;
                        var11 = {};
                        var11.flush = var20;
                        var3 = var18.bind(var19)(var17, var16, var11);
                    case 886: // try_start_1
                        var17 = var4.Promise;
                        var16 = var17.race;
                        var18 = var3;
                        var11 = new Array(2);
                        var11[0] = var18;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot3;
                        var18 = 13;
                        var18 = var20[var18];
                        var20 = var19.bind(var8)(var18);
                        var19 = var20.timeoutPromise;
                        var18 = 1500;
                        var18 = var19.bind(var20)(var18);
                        var11[1] = var18;
                        var11 = var16.bind(var17)(var11);
                        SaveGenerator(address = 959);
                    case 957:
                        return var11;
                    case 959:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 16);
                        if (var16) {
                            _fun118194_ip = 967;
                            continue _fun118194
                        }
                    case 965: // try_end1
                        _fun118194_ip = 992;
                        continue _fun118194;
                    case 967:
                        return var11;
                    case 970: // catch_target1
                        CatchBlockStart(arg_register = 18);
                        var17 = var2;
                        var16 = var17.warn;
                        var11 = 'Failed to submit analytics';
                        var11 = var16.bind(var17)(var11, var18);
                    case 992:
                        return var8;
                    case 995:
                        var16 = var4.Date;
                        var11 = var16.now;
                        var16 = var11.bind(var16)();
                        var11 = var5;
                        var11 = var16 - var11;
                        var17 = _closure1_slot1;
                        var16 = _closure1_slot3;
                        var18 = var16[var7];
                        var22 = var17.bind(var8)(var18);
                        var19 = var22.addBreadcrumb;
                        var18 = {};
                        var20 = 'Finished headless task.';
                        var18.message = var20;
                        var23 = {};
                        var21 = var13;
                        var23.name = var21;
                        var20 = var12;
                        var23.success = var20;
                        var24 = 'ms';
                        var24 = var11 + var24;
                        var23.duration = var24;
                        var18.data = var23;
                        var18 = var19.bind(var22)(var18);
                        var22 = var2;
                        var19 = var22.log;
                        var18 = 'Unpausing socket';
                        var18 = var19.bind(var22)(var18);
                        var19 = _closure1_slot2;
                        var18 = 10;
                        var18 = var16[var18];
                        var19 = var19.bind(var8)(var18);
                        var18 = var19.setIsPaused;
                        var18 = var18.bind(var19)(var14);
                        var16 = var16[var15];
                        var19 = var17.bind(var8)(var16);
                        var18 = var19.track;
                        var16 = _closure1_slot9;
                        var17 = var16.HEADLESS_TASK_COMPLETED;
                        var16 = {};
                        var22 = _closure1_slot5;
                        var22 = var22.currentState;
                        var16.client_app_state = var22;
                        var16.name = var21;
                        var16.success = var20;
                        var16.duration_ms = var11;
                        var11 = {};
                        var20 = true;
                        var11.flush = var20;
                        var3 = var18.bind(var19)(var17, var16, var11);
                    case 1207: // try_start_2
                        var17 = var4.Promise;
                        var16 = var17.race;
                        var18 = var3;
                        var11 = new Array(2);
                        var11[0] = var18;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot3;
                        var18 = 13;
                        var18 = var20[var18];
                        var20 = var19.bind(var8)(var18);
                        var19 = var20.timeoutPromise;
                        var18 = 1500;
                        var18 = var19.bind(var20)(var18);
                        var11[1] = var18;
                        var11 = var16.bind(var17)(var11);
                        SaveGenerator(address = 1280);
                    case 1278:
                        return var11;
                    case 1280:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 16);
                        if (var16) {
                            _fun118194_ip = 1288;
                            continue _fun118194
                        }
                    case 1286: // try_end2
                        _fun118194_ip = 1313;
                        continue _fun118194;
                    case 1288:
                        return var11;
                    case 1291: // catch_target2
                        CatchBlockStart(arg_register = 18);
                        var17 = var2;
                        var16 = var17.warn;
                        var11 = 'Failed to submit analytics';
                        var11 = var16.bind(var17)(var11, var18);
                    case 1313:
                        return var10;
                    case 1316:
                        var11 = var4.Date;
                        var10 = var11.now;
                        var11 = var10.bind(var11)();
                        var10 = var5;
                        var10 = var11 - var10;
                        var16 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var17 = var11[var7];
                        var21 = var16.bind(var8)(var17);
                        var18 = var21.addBreadcrumb;
                        var17 = {};
                        var19 = 'Finished headless task.';
                        var17.message = var19;
                        var22 = {};
                        var20 = var13;
                        var22.name = var20;
                        var19 = var12;
                        var22.success = var19;
                        var23 = 'ms';
                        var23 = var10 + var23;
                        var22.duration = var23;
                        var17.data = var22;
                        var17 = var18.bind(var21)(var17);
                        var21 = var2;
                        var18 = var21.log;
                        var17 = 'Unpausing socket';
                        var17 = var18.bind(var21)(var17);
                        var18 = _closure1_slot2;
                        var17 = 10;
                        var17 = var11[var17];
                        var18 = var18.bind(var8)(var17);
                        var17 = var18.setIsPaused;
                        var17 = var17.bind(var18)(var14);
                        var11 = var11[var15];
                        var18 = var16.bind(var8)(var11);
                        var17 = var18.track;
                        var11 = _closure1_slot9;
                        var16 = var11.HEADLESS_TASK_COMPLETED;
                        var11 = {};
                        var21 = _closure1_slot5;
                        var21 = var21.currentState;
                        var11.client_app_state = var21;
                        var11.name = var20;
                        var11.success = var19;
                        var11.duration_ms = var10;
                        var10 = {};
                        var19 = true;
                        var10.flush = var19;
                        var3 = var17.bind(var18)(var16, var11, var10);
                    case 1528: // try_start_3
                        var16 = var4.Promise;
                        var11 = var16.race;
                        var17 = var3;
                        var10 = new Array(2);
                        var10[0] = var17;
                        var18 = _closure1_slot0;
                        var19 = _closure1_slot3;
                        var17 = 13;
                        var17 = var19[var17];
                        var19 = var18.bind(var8)(var17);
                        var18 = var19.timeoutPromise;
                        var17 = 1500;
                        var17 = var18.bind(var19)(var17);
                        var10[1] = var17;
                        var10 = var11.bind(var16)(var10);
                        SaveGenerator(address = 1601);
                    case 1599:
                        return var10;
                    case 1601:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 11);
                        if (var11) {
                            _fun118194_ip = 1609;
                            continue _fun118194
                        }
                    case 1607: // try_end3
                        _fun118194_ip = 1634;
                        continue _fun118194;
                    case 1609:
                        return var10;
                    case 1612: // catch_target3
                        CatchBlockStart(arg_register = 17);
                        var16 = var2;
                        var11 = var16.warn;
                        var10 = 'Failed to submit analytics';
                        var10 = var11.bind(var16)(var10, var17);
                    case 1634:
                        return var9;
                    case 1637:
                        var10 = var4.Date;
                        var9 = var10.now;
                        var10 = var9.bind(var10)();
                        var9 = var5;
                        var9 = var10 - var9;
                        var11 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var16 = var10[var7];
                        var20 = var11.bind(var8)(var16);
                        var19 = var20.addBreadcrumb;
                        var16 = {};
                        var17 = 'Finished headless task.';
                        var16.message = var17;
                        var21 = {};
                        var18 = var13;
                        var21.name = var18;
                        var17 = var12;
                        var21.success = var17;
                        var22 = 'ms';
                        var22 = var9 + var22;
                        var21.duration = var22;
                        var16.data = var21;
                        var16 = var19.bind(var20)(var16);
                        var20 = var2;
                        var19 = var20.log;
                        var16 = 'Unpausing socket';
                        var16 = var19.bind(var20)(var16);
                        var19 = _closure1_slot2;
                        var16 = 10;
                        var16 = var10[var16];
                        var19 = var19.bind(var8)(var16);
                        var16 = var19.setIsPaused;
                        var16 = var16.bind(var19)(var14);
                        var10 = var10[var15];
                        var16 = var11.bind(var8)(var10);
                        var15 = var16.track;
                        var10 = _closure1_slot9;
                        var11 = var10.HEADLESS_TASK_COMPLETED;
                        var10 = {};
                        var19 = _closure1_slot5;
                        var19 = var19.currentState;
                        var10.client_app_state = var19;
                        var10.name = var18;
                        var10.success = var17;
                        var10.duration_ms = var9;
                        var9 = {};
                        var17 = true;
                        var9.flush = var17;
                        var3 = var15.bind(var16)(var11, var10, var9);
                    case 1849: // try_start_4
                        var11 = var4.Promise;
                        var10 = var11.race;
                        var15 = var3;
                        var9 = new Array(2);
                        var9[0] = var15;
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot3;
                        var15 = 13;
                        var15 = var17[var15];
                        var17 = var16.bind(var8)(var15);
                        var16 = var17.timeoutPromise;
                        var15 = 1500;
                        var15 = var16.bind(var17)(var15);
                        var9[1] = var15;
                        var9 = var10.bind(var11)(var9);
                        SaveGenerator(address = 1922);
                    case 1920:
                        return var9;
                    case 1922:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                        if (var10) {
                            _fun118194_ip = 1930;
                            continue _fun118194
                        }
                    case 1928: // try_end4
                        _fun118194_ip = 1955;
                        continue _fun118194;
                    case 1930:
                        return var9;
                    case 1933: // catch_target4
                        CatchBlockStart(arg_register = 15);
                        var11 = var2;
                        var10 = var11.warn;
                        var9 = 'Failed to submit analytics';
                        var9 = var10.bind(var11)(var9, var15);
                    case 1955:
                        return var1;
                    case 1958: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var10 = var4.Date;
                        var9 = var10.now;
                        var9 = var9.bind(var10)();
                        var5 = var9 - var5;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var7 = var10[var7];
                        var15 = var9.bind(var8)(var7);
                        var11 = var15.addBreadcrumb;
                        var7 = {};
                        var16 = 'Finished headless task.';
                        var7.message = var16;
                        var16 = {};
                        var16.name = var13;
                        var16.success = var12;
                        var17 = 'ms';
                        var17 = var5 + var17;
                        var16.duration = var17;
                        var7.data = var16;
                        var7 = var11.bind(var15)(var7);
                        var15 = var2;
                        var11 = var15.log;
                        var7 = 'Unpausing socket';
                        var7 = var11.bind(var15)(var7);
                        var11 = _closure1_slot2;
                        var7 = 10;
                        var7 = var10[var7];
                        var11 = var11.bind(var8)(var7);
                        var7 = var11.setIsPaused;
                        var7 = var7.bind(var11)(var14);
                        var7 = 11;
                        var7 = var10[var7];
                        var11 = var9.bind(var8)(var7);
                        var10 = var11.track;
                        var7 = _closure1_slot9;
                        var9 = var7.HEADLESS_TASK_COMPLETED;
                        var7 = {};
                        var14 = _closure1_slot5;
                        var14 = var14.currentState;
                        var7.client_app_state = var14;
                        var7.name = var13;
                        var7.success = var12;
                        var7.duration_ms = var5;
                        var5 = {};
                        var12 = true;
                        var5.flush = var12;
                        var3 = var10.bind(var11)(var9, var7, var5);
                    case 2166: // try_start_5
                        var5 = var4.Promise;
                        var4 = var5.race;
                        var7 = var3;
                        var3 = new Array(2);
                        var3[0] = var7;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var6 = 13;
                        var6 = var9[var6];
                        var8 = var7.bind(var8)(var6);
                        var7 = var8.timeoutPromise;
                        var6 = 1500;
                        var6 = var7.bind(var8)(var6);
                        var3[1] = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 2239);
                    case 2237:
                        return var3;
                    case 2239:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun118194_ip = 2247;
                            continue _fun118194
                        }
                    case 2245: // try_end5
                        _fun118194_ip = 2272;
                        continue _fun118194;
                    case 2247:
                        return var3;
                    case 2250: // catch_target5
                        CatchBlockStart(arg_register = 5);
                        var4 = var2;
                        var3 = var4.warn;
                        var2 = 'Failed to submit analytics';
                        var2 = var3.bind(var4)(var2, var5);
                    case 2272:
                        throw var1;
                    case 2274:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppState;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.initHeadlessTask;
    var _closure1_slot7 = var6;
    var3 = var3.applicationReady;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_startup/native/executeHeadlessTask.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 1216, 14385, 660, 3, 1207, 659, 25, 14, 12403, 795, 481, 3630, 2]);