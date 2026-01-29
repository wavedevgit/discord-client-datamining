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
    var1 = var4.bind(var0)(var1);
    var14 = var1.RPC_AUTHENTICATED_SCOPE;
    var13 = var1.RPC_EMBEDDED_APP_SCOPE;
    var12 = var1.RPC_SCOPE_CONFIG;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.ApplicationFlags;
    var _closure1_slot5 = var3;
    var3 = var1.PopoutWindowKeys;
    var _closure1_slot6 = var3;
    var3 = var1.RPCCommands;
    var6 = var1.RPCErrors;
    var _closure1_slot7 = var6;
    var6 = var1.UserSettingsSections;
    var _closure1_slot8 = var6;
    var1 = var1.AnalyticEvents;
    var _closure1_slot9 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var15 = var1.AM_HARMONY_PRD_APPLICATION_ID;
    var7 = var1.AM_HARMONY_STG_APPLICATION_ID;
    var1 = 5;
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
    var _closure1_slot10 = var6;
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
    var _closure1_slot11 = var1;
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
    var8 = function(arg0) { // Original name: validation, environment: var10
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
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
    var8 = function(arg0) { // Original name: handler, environment: var10
        _fun98423: for (var _fun98423_ip = 0;;) switch (_fun98423_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.socket;
                var10 = var3;
                var _closure2_slot0 = var3;
                var1 = var1.args;
                var0 = var1.url;
                var4 = undefined;
                var15 = undefined;
                var16 = undefined;
                var5 = undefined;
                var7 = undefined;
                var _closure2_slot1 = var4;
                var11 = undefined;
                var9 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var6 = undefined;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 7;
                var8 = var13[var8];
                var12 = var12.bind(var4)(var8);
                var8 = var12.validatePostMessageTransport;
                var3 = var3.transport;
                var3 = var8.bind(var12)(var3);
                var8 = _closure1_slot3;
                var3 = var8.getCurrentEmbeddedActivity;
                var15 = var3.bind(var8)();
            case 111: // try_start_0
                var3 = global;
                var13 = var3.URL;
                var19 = var0;
                var12 = var13.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var13
                    }
                });
                var20 = var12;
                var8 = new var20[var13](var19, var18);
                var12 = var8 instanceof Object ? var8 : var12;
                var5 = var12;
                var8 = var12.toString;
                var8 = var8.bind(var12)();
                var7 = var8;
                _closure2_slot1 = var8;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 8;
                var8 = var13[var8];
                var8 = var12.bind(var4)(var8);
                var8 = var8.isPlatformEmbedded;
                if (!var8) {
                    _fun98423_ip = 269;
                    continue _fun98423
                }
            case 190:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 9;
                var8 = var13[var8];
                var12 = var12.bind(var4)(var8);
                var8 = var12.shouldOpenActivityInPopoutWindow;
                var8 = var8.bind(var12)();
                var14 = null;
                if (!var8) {
                    _fun98423_ip = 235;
                    continue _fun98423
                }
            case 225:
                var8 = _closure1_slot6;
                var14 = var8.ACTIVITY_POPOUT;
            case 235:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 10;
                var8 = var13[var8];
                var13 = var12.bind(var4)(var8);
                var12 = var13.focus;
                var8 = true;
                var8 = var12.bind(var13)(var14, var8);
            case 269:
                var14 = _closure1_slot4;
                var13 = var14.getApplication;
                var8 = var10;
                var8 = var8.application;
                var16 = var8;
                var12 = null;
                var17 = var12 == var8;
                var8 = undefined;
                if (var17) {
                    _fun98423_ip = 306;
                    continue _fun98423
                }
            case 301:
                var8 = var16.id;
            case 306:
                var8 = var13.bind(var14)(var8);
                var9 = var8;
                _closure2_slot2 = var8;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 11;
                var8 = var14[var8];
                var14 = var13.bind(var4)(var8);
                var13 = var14.getEmbeddedActivityLocationChannelId;
                var8 = var15;
                var16 = var12 == var8;
                var8 = undefined;
                if (var16) {
                    _fun98423_ip = 361;
                    continue _fun98423
                }
            case 356:
                var8 = var15.location;
            case 361:
                var8 = var13.bind(var14)(var8);
                _closure2_slot3 = var8;
                var8 = var9;
                var8 = var12 == var8;
                var13 = undefined;
                if (var8) {
                    _fun98423_ip = 390;
                    continue _fun98423
                }
            case 382:
                var8 = var9;
                var13 = var8.id;
            case 390:
                var8 = undefined;
                if (!(var4 !== var13)) {
                    _fun98423_ip = 415;
                    continue _fun98423
                }
            case 396:
                var14 = _closure1_slot11;
                var13 = var14.get;
                var9 = var9.id;
                var8 = var13.bind(var14)(var9);
            case 415:
                var6 = var8;
                if (!(var4 !== var8)) {
                    _fun98423_ip = 475;
                    continue _fun98423
                }
            case 422:
                var8 = var6;
                var9 = var8.trustedUntilEpochMs;
                var13 = var3.Date;
                var8 = var13.now;
                var8 = var8.bind(var13)();
                if (!(var9 >= var8)) {
                    _fun98423_ip = 475;
                    continue _fun98423
                }
            case 450:
                var8 = var6.trustedHosts;
                var6 = var8.has;
                var5 = var5.host;
                var5 = var6.bind(var8)(var5);
                if (var5) {
                    _fun98423_ip = 513;
                    continue _fun98423
                }
            case 475:
                var6 = var3.Promise;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var19 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 14;
                    var1 = var6[var1];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var1);
                    var2 = var3.handleClick;
                    var1 = {};
                    var8 = _closure2_slot1;
                    var1.href = var8;
                    var8 = true;
                    var1.shouldConfirm = var8;
                    var8 = function() { // Original name: onConfirm, environment: var0
                        _fun98425: for (var _fun98425_ip = 0;;) switch (_fun98425_ip) {
                            case 0:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 12;
                                var2 = var5[var0];
                                var0 = undefined;
                                var6 = var4.bind(var0)(var2);
                                var2 = _closure2_slot1;
                                var2 = var6.bind(var0)(var2);
                                var2 = 13;
                                var2 = var5[var2];
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.track;
                                var1 = _closure1_slot9;
                                var2 = var1.RPC_OPEN_EXTERNAL_LINK_CALLED;
                                var1 = {};
                                var6 = _closure2_slot0;
                                var7 = var6.application;
                                var6 = null;
                                var8 = var6 == var7;
                                var6 = undefined;
                                if (var8) {
                                    _fun98425_ip = 91;
                                    continue _fun98425
                                }
                            case 86:
                                var6 = var7.id;
                            case 91:
                                var1.application_id = var6;
                                var3 = _closure2_slot1;
                                var1.url = var3;
                                var3 = true;
                                var1.opened = var3;
                                var1 = var4.bind(var5)(var2, var1);
                                var2 = _closure3_slot0;
                                var1 = {};
                                var1.opened = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var1.onConfirm = var8;
                    var0 = function() { // Original name: onCancel, environment: var0
                        _fun98426: for (var _fun98426_ip = 0;;) switch (_fun98426_ip) {
                            case 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 13;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.track;
                                var1 = _closure1_slot9;
                                var2 = var1.RPC_OPEN_EXTERNAL_LINK_CALLED;
                                var1 = {};
                                var6 = _closure2_slot0;
                                var7 = var6.application;
                                var6 = null;
                                var8 = var6 == var7;
                                var6 = undefined;
                                if (var8) {
                                    _fun98426_ip = 70;
                                    continue _fun98426
                                }
                            case 65:
                                var6 = var7.id;
                            case 70:
                                var1.application_id = var6;
                                var3 = _closure2_slot1;
                                var1.url = var3;
                                var3 = false;
                                var1.opened = var3;
                                var1 = var4.bind(var5)(var2, var1);
                                var2 = _closure3_slot0;
                                var1 = {};
                                var1.opened = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var1.onCancel = var0;
                    var0 = 15;
                    var0 = var6[var0];
                    var6 = var5.bind(var4)(var0);
                    var5 = var6.getActivitiesModalContextKey;
                    var0 = {};
                    var8 = _closure2_slot2;
                    var0.application = var8;
                    var7 = _closure2_slot3;
                    var0.channelId = var7;
                    var9 = var5.bind(var6)(var0);
                    var13 = var3;
                    var12 = var1;
                    var11 = undefined;
                    var10 = undefined;
                    var0 = var13[var2](var12, var11, var10, var9, var8);
                    return var0;
                };
                var20 = var5;
                var2 = new var20[var6](var19, var18);
                var2 = var2 instanceof Object ? var2 : var5;
                _fun98423_ip = 638;
                continue _fun98423;
            case 513:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 12;
                var5 = var8[var5];
                var9 = var6.bind(var4)(var5);
                var5 = var7;
                var5 = var9.bind(var4)(var5);
                var5 = 13;
                var5 = var8[var5];
                var9 = var6.bind(var4)(var5);
                var8 = var9.track;
                var5 = _closure1_slot9;
                var6 = var5.RPC_OPEN_EXTERNAL_LINK_CALLED;
                var5 = {};
                var10 = var10.application;
                var11 = var10;
                var12 = var12 == var10;
                var10 = undefined;
                if (var12) {
                    _fun98423_ip = 592;
                    continue _fun98423
                }
            case 587:
                var10 = var11.id;
            case 592:
                var5.application_id = var10;
                var5.url = var7;
                var7 = true;
                var5.opened = var7;
                var5 = var8.bind(var9)(var6, var5);
                var6 = var3.Promise;
                var5 = var6.resolve;
                var3 = {};
                var3.opened = var7;
                var2 = var5.bind(var6)(var3);
            case 638: // try_end0
                return var2;
            case 640: // catch_target0
                CatchBlockStart(arg_register = 2);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 16;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var1 = _closure1_slot7;
                var1 = var1.INVALID_COMMAND;
                var2.errorCode = var1;
                var4 = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid URL: ';
                var18 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var20 = var1;
                var19 = var2;
                var0 = new var20[var3](var19, var18, var17);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var8;
    var1[var7] = var6;
    var7 = var3.NAVIGATE_TO_CONNECTIONS;
    var6 = {};
    var8 = function(arg0) { // Original name: validation, environment: var10
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
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
    var8 = function(arg0) { // Original name: handler, environment: var10
        _fun98428: for (var _fun98428_ip = 0;;) switch (_fun98428_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.socket;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
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
                var2 = _closure1_slot10;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun98428_ip = 161;
                    continue _fun98428
                }
            case 93:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var5 = var2.bind(var0)(var1);
                var4 = {};
                var1 = _closure1_slot7;
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
                var1 = 17;
                var1 = var4[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.openUserSettings;
                var1 = {};
                var3 = _closure1_slot8;
                var3 = var3.CONNECTIONS;
                var1.screen = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var6.handler = var8;
    var1[var7] = var6;
    var6 = var3.SHARE_LINK;
    var7 = 18;
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
    var10 = function(arg0) { // Original name: handler, environment: var10
        _fun98429: for (var _fun98429_ip = 0;;) switch (_fun98429_ip) {
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
                var4 = 7;
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
                    _fun98429_ip = 298;
                    continue _fun98429
                }
            case 126:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 19;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.hasFlag;
                var2 = var2.application;
                var2 = var2.flags;
                var7 = var4 != var2;
                var4 = 0;
                if (!var7) {
                    _fun98429_ip = 174;
                    continue _fun98429
                }
            case 171:
                var4 = var2;
            case 174:
                var2 = _closure1_slot5;
                var2 = var2.EMBEDDED;
                var2 = var5.bind(var6)(var4, var2);
                if (var2) {
                    _fun98429_ip = 261;
                    continue _fun98429
                }
            case 193:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 16;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = {};
                var2 = _closure1_slot7;
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
                    var0 = 20;
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
                    var4 = function(arg0, arg1) { // Original name: onShare, environment: var4
                        _fun98431: for (var _fun98431_ip = 0;;) switch (_fun98431_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = arg1;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var4 = var3;
                                if (var4) {
                                    _fun98431_ip = 24;
                                    continue _fun98431
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
                var1 = 16;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot7;
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
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/links.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 3413, 3315, 660, 3416, 3444, 7890, 7892, 478, 7924, 1347, 3040, 3097, 795, 5848, 12795, 7887, 5880, 12790, 1384, 12796, 2]);