// modules/rpc/server/commands/links.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var9 = global;
    var7 = var9.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var14 = var1.RPC_AUTHENTICATED_SCOPE;
    var13 = var1.RPC_EMBEDDED_APP_SCOPE;
    var12 = var1.RPC_SCOPE_CONFIG;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.ApplicationFlags;
    var _closure1_slot6 = var3;
    var3 = var1.PopoutWindowKeys;
    var _closure1_slot7 = var3;
    var3 = var1.RPCCommands;
    var6 = var1.RPCErrors;
    var _closure1_slot8 = var6;
    var6 = var1.UserSettingsSections;
    var _closure1_slot9 = var6;
    var1 = var1.AnalyticEvents;
    var _closure1_slot10 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var15 = var1.AM_HARMONY_PRD_APPLICATION_ID;
    var7 = var1.AM_HARMONY_STG_APPLICATION_ID;
    var1 = 6;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var8 = var6.DISCORD_WAGONS_APPLICATION_ID;
    var1 = var6.DISCORD_WAGONS_DEV_APPLICATION_ID;
    var16 = var6.DISCORD_WAGONS_QA_APPLICATION_ID;
    var11 = var9.Set;
    var6 = new Array(2);
    var6[0] = var15;
    var6[1] = var7;
    var7 = var11.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var11
        }
    });
    var22 = var7;
    var21 = var6;
    var6 = new var22[var11](var21, var20);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot11 = var6;
    var11 = var9.Set;
    var6 = var11.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var11
        }
    });
    var21 = ['www.nytimes.com', 'apps.apple.com', 'play.google.com'];
    var22 = var7;
    var6 = new var22[var11](var21, var20);
    var11 = var6 instanceof Object ? var6 : var7;
    var7 = var9.Map;
    var6 = new Array(2);
    var6[0] = var1;
    var1 = {};
    var1.trustedHosts = var11;
    var17 = var9.Date;
    var15 = var17.prototype;
    var18 = Object.create(var15, {
        constructor: {
            value: var17
        }
    });
    var15 = '2027-01-15T00:00:00';
    var22 = var18;
    var21 = var15;
    var17 = new var22[var17](var21, var20);
    var18 = var17 instanceof Object ? var17 : var18;
    var17 = var18.valueOf;
    var17 = var17.bind(var18)();
    var1.trustedUntilEpochMs = var17;
    var6[1] = var1;
    var1 = new Array(3);
    var1[0] = var6;
    var6 = new Array(2);
    var6[0] = var16;
    var16 = {};
    var16.trustedHosts = var11;
    var17 = var9.Date;
    var18 = var17.prototype;
    var18 = Object.create(var18, {
        constructor: {
            value: var17
        }
    });
    var22 = var18;
    var17 = new var22[var17](var21, var20);
    var18 = var17 instanceof Object ? var17 : var18;
    var17 = var18.valueOf;
    var17 = var17.bind(var18)();
    var16.trustedUntilEpochMs = var17;
    var6[1] = var16;
    var1[1] = var6;
    var6 = new Array(2);
    var6[0] = var8;
    var8 = {};
    var8.trustedHosts = var11;
    var9 = var9.Date;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var22 = var11;
    var9 = new var22[var9](var21, var20);
    var11 = var9 instanceof Object ? var9 : var11;
    var9 = var11.valueOf;
    var9 = var9.bind(var11)();
    var8.trustedUntilEpochMs = var9;
    var6[1] = var8;
    var1[2] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var22 = var6;
    var21 = var1;
    var1 = new var22[var7](var21, var20);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot12 = var1;
    var1 = {};
    var7 = var3.OPEN_EXTERNAL_LINK;
    var6 = {};
    var8 = {};
    var11 = var12.ANY;
    var9 = new Array(2);
    var9[0] = var14;
    var9[1] = var13;
    var8[var11] = var9;
    var6.scope = var8;
    var8 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var4 = var3.bind(var4)();
        var3 = var4.required;
        var3 = var3.bind(var4)();
        var0.url = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var8;
    var8 = function arg0() {
        var1 = arg0;
        var2 = var1.socket;
        var _closure2_slot0 = var2;
        var1 = var1.args;
        var1 = var1.url;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun98043: for (var _fun98043_ip = 0;;) switch (_fun98043_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98043_ip = 943;
                            continue _fun98043
                        }
                    case 12:
                        var5 = undefined;
                        var16 = undefined;
                        var17 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var _closure4_slot0 = var5;
                        var12 = undefined;
                        var11 = undefined;
                        var _closure4_slot1 = var5;
                        var _closure4_slot2 = var5;
                        var15 = undefined;
                        var9 = undefined;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var1 = var4[var1];
                        var10 = var3.bind(var5)(var1);
                        var4 = var10.validatePostMessageTransport;
                        var3 = _closure2_slot0;
                        var3 = var3.transport;
                        var3 = var4.bind(var10)(var3);
                        var4 = _closure1_slot4;
                        var3 = var4.getCurrentEmbeddedActivity;
                        var16 = var3.bind(var4)();
                    case 103: // try_start_0
                        var4 = global;
                        var13 = var4.URL;
                        var20 = _closure2_slot1;
                        var10 = var13.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var13
                            }
                        });
                        var21 = var10;
                        var3 = new var21[var13](var20, var19);
                        var10 = var3 instanceof Object ? var3 : var10;
                        var7 = var10;
                        var3 = var10.toString;
                        var3 = var3.bind(var10)();
                        var8 = var3;
                        _closure4_slot0 = var3;
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var3 = 9;
                        var3 = var13[var3];
                        var3 = var10.bind(var5)(var3);
                        var3 = var3.isPlatformEmbedded;
                        if (!var3) {
                            _fun98043_ip = 262;
                            continue _fun98043
                        }
                    case 183:
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var3 = 10;
                        var3 = var13[var3];
                        var10 = var10.bind(var5)(var3);
                        var3 = var10.shouldOpenActivityInPopoutWindow;
                        var3 = var3.bind(var10)();
                        var14 = null;
                        if (!var3) {
                            _fun98043_ip = 228;
                            continue _fun98043
                        }
                    case 218:
                        var3 = _closure1_slot7;
                        var14 = var3.ACTIVITY_POPOUT;
                    case 228:
                        var10 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var3 = 11;
                        var3 = var13[var3];
                        var13 = var10.bind(var5)(var3);
                        var10 = var13.focus;
                        var3 = true;
                        var3 = var10.bind(var13)(var14, var3);
                    case 262:
                        var14 = _closure1_slot5;
                        var10 = var14.getApplication;
                        var3 = _closure2_slot0;
                        var3 = var3.application;
                        var17 = var3;
                        var13 = null;
                        var18 = var13 == var3;
                        var3 = undefined;
                        if (var18) {
                            _fun98043_ip = 300;
                            continue _fun98043
                        }
                    case 295:
                        var3 = var17.id;
                    case 300:
                        var3 = var10.bind(var14)(var3);
                        var11 = var3;
                        _closure4_slot1 = var3;
                        var10 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var3 = 12;
                        var3 = var14[var3];
                        var14 = var10.bind(var5)(var3);
                        var10 = var14.getEmbeddedActivityLocationChannelId;
                        var3 = var16;
                        var17 = var13 == var3;
                        var3 = undefined;
                        if (var17) {
                            _fun98043_ip = 355;
                            continue _fun98043
                        }
                    case 350:
                        var3 = var16.location;
                    case 355:
                        var3 = var10.bind(var14)(var3);
                        _closure4_slot2 = var3;
                        var10 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var3 = 13;
                        var3 = var14[var3];
                        var16 = var10.bind(var5)(var3);
                        var14 = var16.fetchIsLinkTrusted;
                        var3 = var11;
                        var3 = var13 == var3;
                        var10 = undefined;
                        if (var3) {
                            _fun98043_ip = 410;
                            continue _fun98043
                        }
                    case 402:
                        var3 = var11;
                        var10 = var3.id;
                    case 410:
                        var3 = var8;
                        var3 = var14.bind(var16)(var10, var3);
                        SaveGenerator(address = 423);
                    case 421:
                        return var3;
                    case 423:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 10);
                        if (var10) {
                            _fun98043_ip = 848;
                            continue _fun98043
                        }
                    case 432:
                        if (var3) {
                            _fun98043_ip = 716;
                            continue _fun98043
                        }
                    case 438:
                        var10 = var11;
                        var10 = var13 == var10;
                        var14 = undefined;
                        if (var10) {
                            _fun98043_ip = 458;
                            continue _fun98043
                        }
                    case 450:
                        var10 = var11;
                        var14 = var10.id;
                    case 458:
                        var10 = undefined;
                        if (!(var5 !== var14)) {
                            _fun98043_ip = 483;
                            continue _fun98043
                        }
                    case 464:
                        var16 = _closure1_slot12;
                        var14 = var16.get;
                        var11 = var11.id;
                        var10 = var14.bind(var16)(var11);
                    case 483:
                        var9 = var10;
                        if (!(var5 !== var10)) {
                            _fun98043_ip = 543;
                            continue _fun98043
                        }
                    case 490:
                        var10 = var9;
                        var11 = var10.trustedUntilEpochMs;
                        var14 = var4.Date;
                        var10 = var14.now;
                        var10 = var10.bind(var14)();
                        if (!(var11 >= var10)) {
                            _fun98043_ip = 543;
                            continue _fun98043
                        }
                    case 518:
                        var10 = var9.trustedHosts;
                        var9 = var10.has;
                        var7 = var7.host;
                        var7 = var9.bind(var10)(var7);
                        if (var7) {
                            _fun98043_ip = 581;
                            continue _fun98043
                        }
                    case 543:
                        var9 = var4.Promise;
                        var7 = var9.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var9
                            }
                        });
                        var20 = function(arg0) { // Environment: var6
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var1 = var6[var1];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var1);
                            var2 = var3.handleClick;
                            var1 = {};
                            var8 = _closure4_slot0;
                            var1.href = var8;
                            var8 = true;
                            var1.shouldConfirm = var8;
                            var8 = function() {
                                _fun98045: for (var _fun98045_ip = 0;;) switch (_fun98045_ip) {
                                    case 0:
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var0 = 14;
                                        var2 = var5[var0];
                                        var0 = undefined;
                                        var6 = var4.bind(var0)(var2);
                                        var2 = _closure4_slot0;
                                        var2 = var6.bind(var0)(var2);
                                        var2 = 15;
                                        var2 = var5[var2];
                                        var5 = var4.bind(var0)(var2);
                                        var4 = var5.track;
                                        var1 = _closure1_slot10;
                                        var2 = var1.RPC_OPEN_EXTERNAL_LINK_CALLED;
                                        var1 = {};
                                        var6 = _closure2_slot0;
                                        var7 = var6.application;
                                        var6 = null;
                                        var8 = var6 == var7;
                                        var6 = undefined;
                                        if (var8) {
                                            _fun98045_ip = 94;
                                            continue _fun98045
                                        }
                                    case 89:
                                        var6 = var7.id;
                                    case 94:
                                        var1.application_id = var6;
                                        var3 = _closure4_slot0;
                                        var1.url = var3;
                                        var3 = true;
                                        var1.opened = var3;
                                        var1 = var4.bind(var5)(var2, var1);
                                        var2 = _closure5_slot0;
                                        var1 = {};
                                        var1.opened = var3;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var1.onConfirm = var8;
                            var0 = function() {
                                _fun98046: for (var _fun98046_ip = 0;;) switch (_fun98046_ip) {
                                    case 0:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 15;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var5 = var3.bind(var0)(var2);
                                        var4 = var5.track;
                                        var1 = _closure1_slot10;
                                        var2 = var1.RPC_OPEN_EXTERNAL_LINK_CALLED;
                                        var1 = {};
                                        var3 = _closure2_slot0;
                                        var6 = var3.application;
                                        var3 = null;
                                        var7 = var3 == var6;
                                        var3 = undefined;
                                        if (var7) {
                                            _fun98046_ip = 70;
                                            continue _fun98046
                                        }
                                    case 65:
                                        var3 = var6.id;
                                    case 70:
                                        var1.application_id = var3;
                                        var3 = _closure4_slot0;
                                        var1.url = var3;
                                        var3 = false;
                                        var1.opened = var3;
                                        var1 = var4.bind(var5)(var2, var1);
                                        var2 = _closure5_slot0;
                                        var1 = {};
                                        var1.opened = var3;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var1.onCancel = var0;
                            var0 = 17;
                            var0 = var6[var0];
                            var6 = var5.bind(var4)(var0);
                            var5 = var6.getActivitiesModalContextKey;
                            var0 = {};
                            var8 = _closure4_slot1;
                            var0.application = var8;
                            var7 = _closure4_slot2;
                            var0.channelId = var7;
                            var9 = var5.bind(var6)(var0);
                            var13 = var3;
                            var12 = var1;
                            var11 = undefined;
                            var10 = undefined;
                            var0 = var13[var2](var12, var11, var10, var9, var8);
                            return var0;
                        };
                        var21 = var7;
                        var6 = new var21[var9](var20, var19);
                        var6 = var6 instanceof Object ? var6 : var7;
                        _fun98043_ip = 713;
                        continue _fun98043;
                    case 581:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 14;
                        var7 = var10[var7];
                        var11 = var9.bind(var5)(var7);
                        var7 = var8;
                        var7 = var11.bind(var5)(var7);
                        var7 = 15;
                        var7 = var10[var7];
                        var14 = var9.bind(var5)(var7);
                        var10 = var14.track;
                        var7 = _closure1_slot10;
                        var9 = var7.RPC_OPEN_EXTERNAL_LINK_CALLED;
                        var7 = {};
                        var11 = _closure2_slot0;
                        var11 = var11.application;
                        var15 = var11;
                        var16 = var13 == var11;
                        var11 = undefined;
                        if (var16) {
                            _fun98043_ip = 664;
                            continue _fun98043
                        }
                    case 659:
                        var11 = var15.id;
                    case 664:
                        var7.application_id = var11;
                        var11 = var8;
                        var7.url = var11;
                        var11 = true;
                        var7.opened = var11;
                        var7 = var10.bind(var14)(var9, var7);
                        var10 = var4.Promise;
                        var9 = var10.resolve;
                        var7 = {};
                        var7.opened = var11;
                        var6 = var9.bind(var10)(var7);
                    case 713: // try_end0
                        return var6;
                    case 716: // try_start_1
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 14;
                        var6 = var9[var6];
                        var10 = var7.bind(var5)(var6);
                        var6 = var8;
                        var6 = var10.bind(var5)(var6);
                        var6 = 15;
                        var6 = var9[var6];
                        var10 = var7.bind(var5)(var6);
                        var9 = var10.track;
                        var6 = _closure1_slot10;
                        var7 = var6.RPC_OPEN_EXTERNAL_LINK_CALLED;
                        var6 = {};
                        var11 = _closure2_slot0;
                        var11 = var11.application;
                        var12 = var11;
                        var13 = var13 == var11;
                        var11 = undefined;
                        if (var13) {
                            _fun98043_ip = 799;
                            continue _fun98043
                        }
                    case 794:
                        var11 = var12.id;
                    case 799:
                        var6.application_id = var11;
                        var6.url = var8;
                        var8 = true;
                        var6.opened = var8;
                        var6 = var9.bind(var10)(var7, var6);
                        var7 = var4.Promise;
                        var6 = var7.resolve;
                        var4 = {};
                        var4.opened = var8;
                        var4 = var6.bind(var7)(var4);
                    case 845: // try_end1
                        return var4;
                    case 848:
                        return var3;
                    case 851: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 18;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = {};
                        var2 = _closure1_slot8;
                        var2 = var2.INVALID_COMMAND;
                        var3.errorCode = var2;
                        var5 = _closure2_slot1;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'Invalid URL: ';
                        var19 = var2.bind(var1)(var5);
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var21 = var2;
                        var20 = var3;
                        var1 = new var21[var4](var20, var19, var18);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 943:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var6.handler = var8;
    var1[var7] = var6;
    var7 = var3.NAVIGATE_TO_CONNECTIONS;
    var6 = {};
    var8 = function arg0() {
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 7;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var8;
    var8 = {};
    var11 = var12.ANY;
    var9 = new Array(1);
    var9[0] = var14;
    var8[var11] = var9;
    var6.scope = var8;
    var8 = function arg0() {
        _fun98048: for (var _fun98048_ip = 0;;) switch (_fun98048_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.socket;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var6 = var5[var2];
                var0 = undefined;
                var8 = var4.bind(var0)(var6);
                var7 = var8.validatePostMessageTransport;
                var6 = var1.transport;
                var6 = var7.bind(var8)(var6);
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.validateApplication;
                var1 = var1.application;
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot11;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun98048_ip = 161;
                    continue _fun98048
                }
            case 93:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 18;
                var1 = var4[var1];
                var5 = var2.bind(var0)(var1);
                var4 = {};
                var1 = _closure1_slot8;
                var1 = var1.UNAUTHORIZED_FOR_APPLICATION;
                var4.errorCode = var1;
                var1 = var5.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = 'Command not available for this application';
                var11 = var2;
                var10 = var4;
                var1 = new var11[var5](var10, var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 161:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 19;
                var1 = var4[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.openUserSettings;
                var1 = {};
                var3 = _closure1_slot9;
                var3 = var3.CONNECTIONS;
                var1.screen = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var6.handler = var8;
    var1[var7] = var6;
    var6 = var3.SHARE_LINK;
    var7 = 20;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createRPCCommand;
    var7 = var3.SHARE_LINK;
    var3 = {};
    var11 = {};
    var13 = var12.ANY;
    var12 = new Array(1);
    var12[0] = var14;
    var11[var13] = var12;
    var3.scope = var11;
    var10 = function arg0() {
        _fun98049: for (var _fun98049_ip = 0;;) switch (_fun98049_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.socket;
                var0 = var0.args;
                var3 = var0.custom_id;
                var _closure2_slot0 = var3;
                var3 = var0.message;
                var _closure2_slot1 = var3;
                var0 = var0.link_id;
                var _closure2_slot2 = var0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 8;
                var7 = var6[var4];
                var3 = undefined;
                var9 = var5.bind(var3)(var7);
                var8 = var9.validatePostMessageTransport;
                var7 = var2.transport;
                var7 = var8.bind(var9)(var7);
                var4 = var6[var4];
                var6 = var5.bind(var3)(var4);
                var5 = var6.validateApplication;
                var4 = var2.application;
                var5 = var5.bind(var6)(var4);
                var _closure2_slot3 = var5;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun98049_ip = 298;
                    continue _fun98049
                }
            case 126:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 21;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.hasFlag;
                var2 = var2.application;
                var2 = var2.flags;
                var7 = var4 != var2;
                var4 = 0;
                if (!var7) {
                    _fun98049_ip = 174;
                    continue _fun98049
                }
            case 171:
                var4 = var2;
            case 174:
                var2 = _closure1_slot6;
                var2 = var2.EMBEDDED;
                var2 = var5.bind(var6)(var4, var2);
                if (var2) {
                    _fun98049_ip = 261;
                    continue _fun98049
                }
            case 193:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 18;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = {};
                var2 = _closure1_slot8;
                var2 = var2.INVALID_COMMAND;
                var5.errorCode = var2;
                var2 = var6.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = 'This application cannot access this API';
                var12 = var4;
                var11 = var5;
                var2 = new var12[var6](var11, var10, var9);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 261:
                var2 = global;
                var4 = var2.Promise;
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openActivityShareLinkModal;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var1.applicationId = var6;
                    var6 = _closure2_slot0;
                    var1.customId = var6;
                    var6 = _closure2_slot2;
                    var1.linkId = var6;
                    var5 = _closure2_slot1;
                    var1.message = var5;
                    var4 = function arg0, arg1() {
                        _fun98051: for (var _fun98051_ip = 0;;) switch (_fun98051_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = arg1;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var4 = var3;
                                if (var4) {
                                    _fun98051_ip = 24;
                                    continue _fun98051
                                }
                            case 21:
                                var4 = var0;
                            case 24:
                                var1.success = var4;
                                var1.didCopyLink = var3;
                                var1.didSendMessage = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var1.onShare = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = var2;
                var1 = new var12[var4](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 298:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 18;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot8;
                var0 = var0.INVALID_COMMAND;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = 'No application.';
                var12 = var1;
                var11 = var2;
                var0 = new var12[var3](var11, var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.handler = var10;
    var3 = var8.bind(var9)(var7, var3);
    var1[var6] = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/links.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1371, 3413, 3315, 660, 3416, 3444, 7892, 7894, 478, 7926, 1347, 3040, 12756, 3097, 795, 5852, 12757, 7889, 5884, 12751, 1384, 12758, 2]);