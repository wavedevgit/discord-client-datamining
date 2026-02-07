// modules/rpc/server/commands/links.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
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
    var14 = var3.RPC_AUTHENTICATED_SCOPE;
    var13 = var3.RPC_EMBEDDED_APP_SCOPE;
    var12 = var3.RPC_SCOPE_CONFIG;
    var3 = 4;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.ApplicationFlags;
    var _closure1_slot6 = var3;
    var3 = var6.PopoutWindowKeys;
    var _closure1_slot7 = var3;
    var3 = var6.RPCCommands;
    var7 = var6.RPCErrors;
    var _closure1_slot8 = var7;
    var7 = var6.UserSettingsSections;
    var _closure1_slot9 = var7;
    var6 = var6.AnalyticEvents;
    var _closure1_slot10 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.AM_HARMONY_PRD_APPLICATION_ID;
    var6 = var6.AM_HARMONY_STG_APPLICATION_ID;
    var7 = var1.Set;
    var1 = new Array(2);
    var1[0] = var8;
    var1[1] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var19 = var6;
    var18 = var1;
    var1 = new var19[var7](var18, var17);
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
    var8 = function arg0() {
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
                _fun98608: for (var _fun98608_ip = 0;;) switch (_fun98608_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98608_ip = 688;
                            continue _fun98608
                        }
                    case 12:
                        var5 = undefined;
                        var11 = undefined;
                        var12 = undefined;
                        var9 = undefined;
                        var _closure4_slot0 = var5;
                        var13 = undefined;
                        var3 = undefined;
                        var _closure4_slot1 = var5;
                        var _closure4_slot2 = var5;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 7;
                        var1 = var7[var1];
                        var8 = var6.bind(var5)(var1);
                        var7 = var8.validatePostMessageTransport;
                        var6 = _closure2_slot0;
                        var6 = var6.transport;
                        var6 = var7.bind(var8)(var6);
                        var7 = _closure1_slot4;
                        var6 = var7.getCurrentEmbeddedActivity;
                        var11 = var6.bind(var7)();
                    case 97: // try_start_0
                        var6 = global;
                        var10 = var6.URL;
                        var17 = _closure2_slot1;
                        var8 = var10.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var10
                            }
                        });
                        var18 = var8;
                        var7 = new var18[var10](var17, var16);
                        var8 = var7 instanceof Object ? var7 : var8;
                        var7 = var8.toString;
                        var7 = var7.bind(var8)();
                        var9 = var7;
                        _closure4_slot0 = var7;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 8;
                        var7 = var10[var7];
                        var7 = var8.bind(var5)(var7);
                        var7 = var7.isPlatformEmbedded;
                        if (!var7) {
                            _fun98608_ip = 253;
                            continue _fun98608
                        }
                    case 174:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 9;
                        var7 = var10[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.shouldOpenActivityInPopoutWindow;
                        var7 = var7.bind(var8)();
                        var14 = null;
                        if (!var7) {
                            _fun98608_ip = 219;
                            continue _fun98608
                        }
                    case 209:
                        var7 = _closure1_slot7;
                        var14 = var7.ACTIVITY_POPOUT;
                    case 219:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 10;
                        var7 = var10[var7];
                        var10 = var8.bind(var5)(var7);
                        var8 = var10.focus;
                        var7 = true;
                        var7 = var8.bind(var10)(var14, var7);
                    case 253:
                        var10 = _closure1_slot5;
                        var8 = var10.getApplication;
                        var7 = _closure2_slot0;
                        var7 = var7.application;
                        var12 = var7;
                        var14 = null;
                        var15 = var14 == var7;
                        var7 = undefined;
                        if (var15) {
                            _fun98608_ip = 291;
                            continue _fun98608
                        }
                    case 286:
                        var7 = var12.id;
                    case 291:
                        var7 = var8.bind(var10)(var7);
                        var3 = var7;
                        _closure4_slot1 = var7;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 11;
                        var7 = var10[var7];
                        var10 = var8.bind(var5)(var7);
                        var8 = var10.getEmbeddedActivityLocationChannelId;
                        var7 = var11;
                        var12 = var14 == var7;
                        var7 = undefined;
                        if (var12) {
                            _fun98608_ip = 346;
                            continue _fun98608
                        }
                    case 341:
                        var7 = var11.location;
                    case 346:
                        var7 = var8.bind(var10)(var7);
                        _closure4_slot2 = var7;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 12;
                        var7 = var10[var7];
                        var10 = var8.bind(var5)(var7);
                        var8 = var10.fetchIsLinkTrusted;
                        var7 = var3;
                        var11 = var14 == var7;
                        var7 = undefined;
                        if (var11) {
                            _fun98608_ip = 398;
                            continue _fun98608
                        }
                    case 393:
                        var7 = var3.id;
                    case 398:
                        var3 = var9;
                        var3 = var8.bind(var10)(var7, var3);
                        SaveGenerator(address = 411);
                    case 409:
                        return var3;
                    case 411:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun98608_ip = 593;
                            continue _fun98608
                        }
                    case 420:
                        if (var3) {
                            _fun98608_ip = 461;
                            continue _fun98608
                        }
                    case 423:
                        var8 = var6.Promise;
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var8
                            }
                        });
                        var17 = function(arg0) { // Environment: var4
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 15;
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
                                _fun98610: for (var _fun98610_ip = 0;;) switch (_fun98610_ip) {
                                    case 0:
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var0 = 13;
                                        var2 = var5[var0];
                                        var0 = undefined;
                                        var6 = var4.bind(var0)(var2);
                                        var2 = _closure4_slot0;
                                        var2 = var6.bind(var0)(var2);
                                        var2 = 14;
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
                                            _fun98610_ip = 94;
                                            continue _fun98610
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
                                _fun98611: for (var _fun98611_ip = 0;;) switch (_fun98611_ip) {
                                    case 0:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 14;
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
                                            _fun98611_ip = 70;
                                            continue _fun98611
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
                            var0 = 16;
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
                        var18 = var7;
                        var4 = new var18[var8](var17, var16);
                        var4 = var4 instanceof Object ? var4 : var7;
                        _fun98608_ip = 590;
                        continue _fun98608;
                    case 461:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 13;
                        var7 = var10[var7];
                        var11 = var8.bind(var5)(var7);
                        var7 = var9;
                        var7 = var11.bind(var5)(var7);
                        var7 = 14;
                        var7 = var10[var7];
                        var11 = var8.bind(var5)(var7);
                        var10 = var11.track;
                        var7 = _closure1_slot10;
                        var8 = var7.RPC_OPEN_EXTERNAL_LINK_CALLED;
                        var7 = {};
                        var12 = _closure2_slot0;
                        var12 = var12.application;
                        var13 = var12;
                        var14 = var14 == var12;
                        var12 = undefined;
                        if (var14) {
                            _fun98608_ip = 544;
                            continue _fun98608
                        }
                    case 539:
                        var12 = var13.id;
                    case 544:
                        var7.application_id = var12;
                        var7.url = var9;
                        var9 = true;
                        var7.opened = var9;
                        var7 = var10.bind(var11)(var8, var7);
                        var8 = var6.Promise;
                        var7 = var8.resolve;
                        var6 = {};
                        var6.opened = var9;
                        var4 = var7.bind(var8)(var6);
                    case 590: // try_end0
                        return var4;
                    case 593:
                        return var3;
                    case 596: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 17;
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
                        var16 = var2.bind(var1)(var5);
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var18 = var2;
                        var17 = var3;
                        var1 = new var18[var4](var17, var16, var15);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 688:
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
    var8 = function arg0() {
        _fun98613: for (var _fun98613_ip = 0;;) switch (_fun98613_ip) {
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
                var2 = _closure1_slot11;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun98613_ip = 161;
                    continue _fun98613
                }
            case 93:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 17;
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
                var1 = 18;
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
    var7 = 19;
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
        _fun98614: for (var _fun98614_ip = 0;;) switch (_fun98614_ip) {
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
                    _fun98614_ip = 298;
                    continue _fun98614
                }
            case 126:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 20;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.hasFlag;
                var2 = var2.application;
                var2 = var2.flags;
                var7 = var4 != var2;
                var4 = 0;
                if (!var7) {
                    _fun98614_ip = 174;
                    continue _fun98614
                }
            case 171:
                var4 = var2;
            case 174:
                var2 = _closure1_slot6;
                var2 = var2.EMBEDDED;
                var2 = var5.bind(var6)(var4, var2);
                if (var2) {
                    _fun98614_ip = 261;
                    continue _fun98614
                }
            case 193:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 17;
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
                    var0 = 21;
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
                        _fun98616: for (var _fun98616_ip = 0;;) switch (_fun98616_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = arg1;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var4 = var3;
                                if (var4) {
                                    _fun98616_ip = 24;
                                    continue _fun98616
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
                var1 = 17;
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
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/links.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1371, 3455, 3357, 660, 3458, 8001, 8003, 478, 8035, 1347, 3083, 12867, 3140, 795, 5941, 12868, 7998, 5973, 12862, 1384, 12869, 2]);