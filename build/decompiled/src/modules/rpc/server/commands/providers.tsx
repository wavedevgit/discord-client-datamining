// modules/rpc/server/commands/providers.tsx
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
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var9 = var6.bind(var0)(var3);
    var _closure1_slot4 = var9;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.RPC_AUTHENTICATED_SCOPE;
    var10 = var3.RPC_SCOPE_CONFIG;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsLocations;
    var _closure1_slot6 = var6;
    var6 = var3.ComponentActions;
    var _closure1_slot7 = var6;
    var3 = var3.PlatformTypes;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.AM_HARMONY_PRD_APPLICATION_ID;
    var6 = var3.AM_HARMONY_STG_APPLICATION_ID;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var3 = var8.RPCCommands;
    var8 = var8.RPCErrors;
    var _closure1_slot9 = var8;
    var8 = var1.Set;
    var1 = new Array(2);
    var1[0] = var11;
    var1[1] = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var19 = var6;
    var18 = var1;
    var1 = new var19[var8](var18, var17);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot10 = var1;
    var1 = {};
    var8 = var3.GET_PROVIDER_ACCESS_TOKEN;
    var6 = {};
    var11 = {};
    var14 = var10.ANY;
    var13 = new Array(1);
    var13[0] = var12;
    var11[var14] = var13;
    var6.scope = var11;
    var11 = function arg0() {
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
        var5 = var3.bind(var4)();
        var3 = var5.required;
        var3 = var3.bind(var5)();
        var0.provider = var3;
        var3 = var4.string;
        var3 = var3.bind(var4)();
        var0.connection_redirect = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var11;
    var11 = function arg0() {
        _fun98074: for (var _fun98074_ip = 0;;) switch (_fun98074_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.socket;
                var0 = var0.args;
                var5 = var0.provider;
                var _closure2_slot0 = var5;
                var0 = var0.connection_redirect;
                var _closure2_slot1 = var0;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 7;
                var8 = var7[var4];
                var3 = undefined;
                var10 = var6.bind(var3)(var8);
                var9 = var10.validatePostMessageTransport;
                var8 = var2.transport;
                var8 = var9.bind(var10)(var8);
                var4 = var7[var4];
                var6 = var6.bind(var3)(var4);
                var4 = var6.validateApplication;
                var2 = var2.application;
                var6 = var4.bind(var6)(var2);
                var4 = _closure1_slot1;
                var2 = 8;
                var2 = var7[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.get;
                var4 = var2.bind(var4)(var5);
                var _closure2_slot2 = var4;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun98074_ip = 354;
                    continue _fun98074
                }
            case 143:
                var2 = _closure1_slot8;
                var2 = var2.AMAZON_MUSIC;
                if (!(var5 === var2)) {
                    _fun98074_ip = 286;
                    continue _fun98074
                }
            case 160:
                var4 = _closure1_slot10;
                var2 = var4.has;
                var2 = var2.bind(var4)(var6);
                if (var2) {
                    _fun98074_ip = 245;
                    continue _fun98074
                }
            case 177:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var6[var2];
                var7 = var4.bind(var3)(var2);
                var6 = {};
                var2 = _closure1_slot9;
                var2 = var2.UNAUTHORIZED_FOR_APPLICATION;
                var6.errorCode = var2;
                var2 = var7.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = 'Command not available for this application';
                var13 = var4;
                var12 = var6;
                var2 = new var13[var7](var12, var11, var10);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 245:
                var2 = global;
                var4 = var2.Promise;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*(arg0, arg1) { // Environment: var0
                        var1 = function arg0() {
                            _fun98082: for (var _fun98082_ip = 0;;) switch (_fun98082_ip) {
                                case 0:
                                    var1 = _closure2_slot2;
                                    var0 = null;
                                    if (!(var0 != var1)) {
                                        _fun98082_ip = 91;
                                        continue _fun98082
                                    }
                                case 13:
                                    var1 = arg0;
                                    var3 = var1.accounts;
                                    if (!(var0 == var3)) {
                                        _fun98082_ip = 30;
                                        continue _fun98082
                                    }
                                case 26:
                                    var3 = new Array(0);
                                case 30:
                                    var2 = var3.find;
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var1 = var0.type;
                                        var0 = _closure2_slot2;
                                        var0 = var0.type;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    if (!(var0 != var1)) {
                                        _fun98082_ip = 91;
                                        continue _fun98082
                                    }
                                case 53:
                                    var2 = _closure3_slot0;
                                    var0 = {};
                                    var1 = var1.access_token;
                                    var0.access_token = var1;
                                    var1 = undefined;
                                    var0 = var2.bind(var1)(var0);
                                    var0 = _closure4_slot2;
                                    var0 = var0.bind(var1)();
                                case 91:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure4_slot0 = var1;
                        var1 = function() {
                            var2 = _closure1_slot4;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 9;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = {};
                            var1 = _closure1_slot9;
                            var1 = var1.OAUTH2_ERROR;
                            var4.errorCode = var1;
                            var7 = _closure2_slot0;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var3 = 'OAuth2 setup for "';
                            var1 = '" failed';
                            var8 = var6.bind(var3)(var7, var1);
                            var3 = var5.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var10 = var3;
                            var9 = var4;
                            var1 = new var10[var5](var9, var8, var7);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var1 = var2.bind(var0)(var1);
                            var1 = _closure4_slot2;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var _closure4_slot1 = var1;
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 10;
                            var1 = var5[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var1);
                            var6 = var7.unsubscribe;
                            var4 = _closure4_slot0;
                            var3 = 'USER_CONNECTIONS_UPDATE';
                            var3 = var6.bind(var7)(var3, var4);
                            var4 = _closure1_slot0;
                            var3 = 11;
                            var3 = var5[var3];
                            var3 = var4.bind(var0)(var3);
                            var4 = var3.ComponentDispatch;
                            var3 = var4.unsubscribe;
                            var2 = _closure1_slot7;
                            var2 = var2.CONNECTIONS_CALLBACK_ERROR;
                            var1 = _closure4_slot1;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var _closure4_slot2 = var1;
                        var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                            _fun98077: for (var _fun98077_ip = 0;;) switch (_fun98077_ip) {
                                case 0:
                                    StartGenerator();
                                    var4 = arg0;
                                    var1 = arg1;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 7);
                                    if (var7) {
                                        _fun98077_ip = 414;
                                        continue _fun98077
                                    }
                                case 18:
                                    var6 = var4;
                                    var _closure5_slot0 = var4;
                                    var2 = var1;
                                    var _closure5_slot1 = var1;
                                    var1 = undefined;
                                    var3 = undefined;
                                    var8 = undefined;
                                    var10 = function arg0() {
                                        _fun98078: for (var _fun98078_ip = 0;;) switch (_fun98078_ip) {
                                            case 0:
                                                var1 = _closure2_slot2;
                                                var0 = null;
                                                if (!(var0 != var1)) {
                                                    _fun98078_ip = 88;
                                                    continue _fun98078
                                                }
                                            case 13:
                                                var1 = arg0;
                                                var3 = var1.accounts;
                                                if (!(var0 == var3)) {
                                                    _fun98078_ip = 30;
                                                    continue _fun98078
                                                }
                                            case 26:
                                                var3 = new Array(0);
                                            case 30:
                                                var2 = var3.find;
                                                var1 = function(arg0) { // Environment: var1
                                                    var0 = arg0;
                                                    var1 = var0.type;
                                                    var0 = _closure2_slot2;
                                                    var0 = var0.type;
                                                    var0 = var1 === var0;
                                                    return var0;
                                                };
                                                var1 = var2.bind(var3)(var1);
                                                if (!(var0 != var1)) {
                                                    _fun98078_ip = 88;
                                                    continue _fun98078
                                                }
                                            case 53:
                                                var3 = _closure5_slot0;
                                                var2 = {};
                                                var1 = var1.access_token;
                                                var2.access_token = var1;
                                                var1 = undefined;
                                                var2 = var3.bind(var1)(var2);
                                                var0 = _closure5_slot4;
                                                var0 = var0.bind(var1)();
                                            case 88:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure5_slot2 = var10;
                                    var9 = function() {
                                        var3 = _closure5_slot1;
                                        var5 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var0 = 9;
                                        var4 = var4[var0];
                                        var0 = undefined;
                                        var6 = var5.bind(var0)(var4);
                                        var5 = {};
                                        var2 = _closure1_slot9;
                                        var2 = var2.OAUTH2_ERROR;
                                        var5.errorCode = var2;
                                        var8 = _closure2_slot0;
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var7 = var2.concat;
                                        var4 = 'OAuth2 setup for "';
                                        var2 = '" failed';
                                        var9 = var7.bind(var4)(var8, var2);
                                        var4 = var6.prototype;
                                        var4 = Object.create(var4, {
                                            constructor: {
                                                value: var6
                                            }
                                        });
                                        var11 = var4;
                                        var10 = var5;
                                        var2 = new var11[var6](var10, var9, var8);
                                        var2 = var2 instanceof Object ? var2 : var4;
                                        var2 = var3.bind(var0)(var2);
                                        var1 = _closure5_slot4;
                                        var1 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var _closure5_slot3 = var9;
                                    var4 = function() {
                                        var3 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var0 = 10;
                                        var1 = var5[var0];
                                        var0 = undefined;
                                        var7 = var3.bind(var0)(var1);
                                        var6 = var7.unsubscribe;
                                        var4 = _closure5_slot2;
                                        var3 = 'USER_CONNECTIONS_UPDATE';
                                        var3 = var6.bind(var7)(var3, var4);
                                        var4 = _closure1_slot0;
                                        var3 = 11;
                                        var3 = var5[var3];
                                        var3 = var4.bind(var0)(var3);
                                        var4 = var3.ComponentDispatch;
                                        var3 = var4.unsubscribe;
                                        var2 = _closure1_slot7;
                                        var2 = var2.CONNECTIONS_CALLBACK_ERROR;
                                        var1 = _closure5_slot3;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                    };
                                    var _closure5_slot4 = var4;
                                    var13 = _closure1_slot5;
                                    var12 = var13.getAccount;
                                    var11 = _closure2_slot0;
                                    var7 = null;
                                    var11 = var12.bind(var13)(var7, var11);
                                    var3 = var11;
                                    if (!(var7 != var11)) {
                                        _fun98077_ip = 275;
                                        continue _fun98077
                                    }
                                case 109: // try_start_0
                                    var12 = _closure1_slot1;
                                    var13 = _closure1_slot2;
                                    var11 = 13;
                                    var11 = var13[var11];
                                    var13 = var12.bind(var1)(var11);
                                    var12 = var13.refreshAccessToken;
                                    var11 = _closure2_slot2;
                                    var11 = var11.type;
                                    var3 = var3.id;
                                    var3 = var12.bind(var13)(var11, var3);
                                    SaveGenerator(address = 159);
                                case 157:
                                    return var3;
                                case 159:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 11);
                                    if (var11) {
                                        _fun98077_ip = 260;
                                        continue _fun98077
                                    }
                                case 165:
                                    var8 = var3;
                                    if (!(var7 != var3)) {
                                        _fun98077_ip = 192;
                                        continue _fun98077
                                    }
                                case 172:
                                    var7 = var6;
                                    var6 = {};
                                    var6.access_token = var8;
                                    var6 = var7.bind(var1)(var6);
                                case 187: // try_end0
                                    _fun98077_ip = 411;
                                    continue _fun98077;
                                case 192: // try_start_1
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var6 = 9;
                                    var6 = var8[var6];
                                    var11 = var7.bind(var1)(var6);
                                    var8 = {};
                                    var6 = _closure1_slot9;
                                    var6 = var6.OAUTH2_ERROR;
                                    var8.errorCode = var6;
                                    var6 = var11.prototype;
                                    var7 = Object.create(var6, {
                                        constructor: {
                                            value: var11
                                        }
                                    });
                                    var14 = 'Refreshing access token did not return a new access token';
                                    var16 = var7;
                                    var15 = var8;
                                    var6 = new var16[var11](var15, var14, var13);
                                    var6 = var6 instanceof Object ? var6 : var7;
                                    throw var6;
                                case 260: // try_end1
                                    return var3;
                                case 263: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 3);
                                    var2 = var2.bind(var1)(var3);
                                    _fun98077_ip = 411;
                                    continue _fun98077;
                                case 275:
                                    var3 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var2 = 10;
                                    var2 = var6[var2];
                                    var8 = var3.bind(var1)(var2);
                                    var7 = var8.subscribe;
                                    var2 = 'USER_CONNECTIONS_UPDATE';
                                    var2 = var7.bind(var8)(var2, var10);
                                    var7 = _closure1_slot0;
                                    var2 = 11;
                                    var2 = var6[var2];
                                    var2 = var7.bind(var1)(var2);
                                    var8 = var2.ComponentDispatch;
                                    var7 = var8.subscribe;
                                    var2 = _closure1_slot7;
                                    var2 = var2.CONNECTIONS_CALLBACK_ERROR;
                                    var2 = var7.bind(var8)(var2, var9);
                                    var2 = 12;
                                    var2 = var6[var2];
                                    var3 = var3.bind(var1)(var2);
                                    var2 = {};
                                    var6 = _closure2_slot2;
                                    var6 = var6.type;
                                    var2.platformType = var6;
                                    var5 = _closure1_slot6;
                                    var5 = var5.ACTIVITY_RPC;
                                    var2.location = var5;
                                    var4 = _closure2_slot1;
                                    var2.successRedirect = var4;
                                    var2 = var3.bind(var1)(var2);
                                case 411:
                                    return var1;
                                case 414:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var12 = var1.bind(var3)();
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = var2;
                var1 = new var13[var4](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 286:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var4 = {};
                var1 = _closure1_slot9;
                var1 = var1.UNAUTHORIZED_FOR_APPLICATION;
                var4.errorCode = var1;
                var1 = var6.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = 'Command not available for this application';
                var13 = var2;
                var12 = var4;
                var1 = new var13[var6](var12, var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 354:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot9;
                var0 = var0.INVALID_PROVIDER;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var1 = 'Platform not found for provider "';
                var0 = '"';
                var11 = var4.bind(var1)(var5, var0);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = var1;
                var12 = var2;
                var0 = new var13[var3](var12, var11, var10);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var11;
    var1[var8] = var6;
    var6 = var3.MAYBE_GET_PROVIDER_ACCESS_TOKEN;
    var3 = {};
    var8 = {};
    var11 = var10.ANY;
    var10 = new Array(1);
    var10[0] = var12;
    var8[var11] = var10;
    var3.scope = var8;
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
        var0.provider = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.validation = var8;
    var8 = function*(arg0) { // Environment: var7
        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
            _fun98089: for (var _fun98089_ip = 0;;) switch (_fun98089_ip) {
                case 0:
                    StartGenerator();
                    var1 = arg0;
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                    if (var2) {
                        _fun98089_ip = 638;
                        continue _fun98089
                    }
                case 13:
                    var3 = var1.socket;
                    var1 = var1.args;
                    var7 = var1.provider;
                    var5 = undefined;
                    SaveGenerator(address = 37);
                case 35:
                    return var5;
                case 37:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                    if (var2) {
                        _fun98089_ip = 635;
                        continue _fun98089
                    }
                case 46:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var9 = var6[var4];
                    var11 = var8.bind(var5)(var9);
                    var10 = var11.validatePostMessageTransport;
                    var9 = var3.transport;
                    var9 = var10.bind(var11)(var9);
                    var4 = var6[var4];
                    var8 = var8.bind(var5)(var4);
                    var4 = var8.validateApplication;
                    var3 = var3.application;
                    var9 = var4.bind(var8)(var3);
                    var4 = _closure1_slot1;
                    var3 = 8;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.get;
                    var6 = var3.bind(var4)(var7);
                    var4 = null;
                    if (!(var4 != var6)) {
                        _fun98089_ip = 544;
                        continue _fun98089
                    }
                case 146:
                    var3 = _closure1_slot8;
                    var3 = var3.AMAZON_MUSIC;
                    if (!(var7 === var3)) {
                        _fun98089_ip = 476;
                        continue _fun98089
                    }
                case 163:
                    var8 = _closure1_slot10;
                    var3 = var8.has;
                    var3 = var3.bind(var8)(var9);
                    if (var3) {
                        _fun98089_ip = 248;
                        continue _fun98089
                    }
                case 180:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 9;
                    var3 = var9[var3];
                    var10 = var8.bind(var5)(var3);
                    var9 = {};
                    var3 = _closure1_slot9;
                    var3 = var3.UNAUTHORIZED_FOR_APPLICATION;
                    var9.errorCode = var3;
                    var3 = var10.prototype;
                    var8 = Object.create(var3, {
                        constructor: {
                            value: var10
                        }
                    });
                    var12 = 'Command not available for this application';
                    var14 = var8;
                    var13 = var9;
                    var3 = new var14[var10](var13, var12, var11);
                    var3 = var3 instanceof Object ? var3 : var8;
                    throw var3;
                case 248:
                    var8 = _closure1_slot5;
                    var3 = var8.getAccount;
                    var3 = var3.bind(var8)(var4, var7);
                    if (!(var4 != var3)) {
                        _fun98089_ip = 408;
                        continue _fun98089
                    }
                case 271:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 13;
                    var8 = var10[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.refreshAccessToken;
                    var6 = var6.type;
                    var3 = var3.id;
                    var3 = var8.bind(var9)(var6, var3);
                    SaveGenerator(address = 317);
                case 315:
                    return var3;
                case 317:
                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                    if (var6) {
                        _fun98089_ip = 405;
                        continue _fun98089
                    }
                case 323:
                    if (!(var4 != var3)) {
                        _fun98089_ip = 337;
                        continue _fun98089
                    }
                case 327:
                    var4 = {};
                    var4.access_token = var3;
                    return var4;
                case 337:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 9;
                    var4 = var8[var4];
                    var9 = var6.bind(var5)(var4);
                    var8 = {};
                    var4 = _closure1_slot9;
                    var4 = var4.OAUTH2_ERROR;
                    var8.errorCode = var4;
                    var4 = var9.prototype;
                    var6 = Object.create(var4, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = 'Refreshing access token did not return a new access token';
                    var14 = var6;
                    var13 = var8;
                    var4 = new var14[var9](var13, var12, var11);
                    var4 = var4 instanceof Object ? var4 : var6;
                    throw var4;
                case 405:
                    return var3;
                case 408:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var6 = {};
                    var3 = _closure1_slot9;
                    var3 = var3.NO_CONNECTION_FOUND;
                    var6.errorCode = var3;
                    var3 = var8.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var8
                        }
                    });
                    var12 = 'No connection found';
                    var14 = var4;
                    var13 = var6;
                    var3 = new var14[var8](var13, var12, var11);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
                case 476:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var6 = {};
                    var3 = _closure1_slot9;
                    var3 = var3.UNAUTHORIZED_FOR_APPLICATION;
                    var6.errorCode = var3;
                    var3 = var8.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var8
                        }
                    });
                    var12 = 'Command not available for this application';
                    var14 = var4;
                    var13 = var6;
                    var3 = new var14[var8](var13, var12, var11);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
                case 544:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = {};
                    var2 = _closure1_slot9;
                    var2 = var2.INVALID_PROVIDER;
                    var4.errorCode = var2;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var3 = 'Platform not found for provider "';
                    var2 = '"';
                    var12 = var6.bind(var3)(var7, var2);
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var5](var13, var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 635:
                    return var1;
                case 638:
                    return var0;
            }
        };
        var1 = var0.next;
        var1 = var1.bind(var0)();
        return var0;
    };
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var7 = function() { // Environment: var7
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/providers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4515, 3347, 660, 3448, 483, 7925, 7927, 4391, 7922, 806, 1229, 5313, 4517, 2]);