// modules/rpc/server/commands/subscriptions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot5 = var1;
    var1 = {};
    var8 = var3.SUBSCRIBE;
    var6 = {};
    var9 = function arg0() {
        var1 = arg0;
        var2 = var1.server;
        var _closure2_slot0 = var2;
        var2 = var1.socket;
        var _closure2_slot1 = var2;
        var2 = var1.evt;
        var _closure2_slot2 = var2;
        var1 = var1.args;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun98811: for (var _fun98811_ip = 0;;) switch (_fun98811_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98811_ip = 679;
                            continue _fun98811
                        }
                    case 12:
                        var5 = undefined;
                        var _closure4_slot0 = var5;
                        var _closure4_slot1 = var5;
                        var2 = _closure2_slot0;
                        var3 = var2.events;
                        var2 = _closure2_slot2;
                        var8 = var3[var2];
                        var7 = null;
                        if (!(var7 != var8)) {
                            _fun98811_ip = 586;
                            continue _fun98811
                        }
                    case 52:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 3;
                        var2 = var9[var2];
                        var9 = var6.bind(var5)(var2);
                        var2 = _closure2_slot1;
                        var2 = var2.authorization;
                        var6 = var2.scopes;
                        var2 = var8.scope;
                        var2 = var9.bind(var5)(var6, var2);
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        if (var2) {
                            _fun98811_ip = 174;
                            continue _fun98811
                        }
                    case 114:
                        var2 = 2;
                        var2 = var9[var2];
                        var12 = var6.bind(var5)(var2);
                        var11 = {};
                        var2 = _closure1_slot5;
                        var2 = var2.INVALID_PERMISSIONS;
                        var11.errorCode = var2;
                        var2 = var12.prototype;
                        var10 = Object.create(var2, {
                            constructor: {
                                value: var12
                            }
                        });
                        var16 = 'Not authenticated or invalid scope';
                        var18 = var10;
                        var17 = var11;
                        var2 = new var18[var12](var17, var16, var15);
                        var2 = var2 instanceof Object ? var2 : var10;
                        throw var2;
                    case 174:
                        var2 = 4;
                        var2 = var9[var2];
                        var10 = var6.bind(var5)(var2);
                        var9 = var10.track;
                        var2 = _closure1_slot4;
                        var6 = var2.RPC_SUBSCRIPTION_REQUESTED;
                        var2 = {};
                        var11 = _closure2_slot2;
                        var2.event = var11;
                        var11 = var8.scope;
                        var12 = 'object';
                        var11 = typeof var11;
                        if (!(var12 !== var11)) {
                            _fun98811_ip = 237;
                            continue _fun98811
                        }
                    case 229:
                        var11 = var8.scope;
                        _fun98811_ip = 262;
                        continue _fun98811;
                    case 237:
                        var12 = global;
                        var14 = var12.JSON;
                        var13 = var14.stringify;
                        var12 = var8.scope;
                        var11 = var13.bind(var14)(var12);
                    case 262:
                        var2.scope = var11;
                        var11 = _closure2_slot1;
                        var12 = var11.application;
                        var12 = var12.id;
                        var2.application_id = var12;
                        var11 = var11.authorization;
                        var12 = var11.scopes;
                        var11 = var12.toString;
                        var11 = var11.bind(var12)();
                        var2.socket_scope = var11;
                        var2 = var9.bind(var10)(var6, var2);
                        var2 = var8.validation;
                        if (!(var7 != var2)) {
                            _fun98811_ip = 401;
                            continue _fun98811
                        }
                    case 328:
                        var6 = _closure2_slot0;
                        var2 = var6.getJoi;
                        var2 = var2.bind(var6)();
                        SaveGenerator(address = 346);
                    case 344:
                        return var2;
                    case 346:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun98811_ip = 583;
                            continue _fun98811
                        }
                    case 355:
                        var11 = var2.validate;
                        var10 = _closure2_slot3;
                        var6 = var8.validation;
                        var9 = var6.bind(var8)(var2);
                        var6 = {};
                        var12 = false;
                        var6.convert = var12;
                        var6 = var11.bind(var2)(var10, var9, var6);
                        var6 = var6.error;
                        if (!(var7 == var6)) {
                            _fun98811_ip = 515;
                            continue _fun98811
                        }
                    case 401:
                        var7 = var8.handler;
                        var6 = {};
                        var10 = _closure2_slot3;
                        var6.args = var10;
                        var9 = _closure2_slot1;
                        var6.socket = var9;
                        var6 = var7.bind(var8)(var6);
                        _closure4_slot0 = var6;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 5;
                        var6 = var8[var6];
                        var8 = var7.bind(var5)(var6);
                        var7 = var8.getInitialSubscriptionPayload;
                        var6 = _closure2_slot2;
                        var6 = var7.bind(var8)(var9, var6, var10);
                        _closure4_slot1 = var6;
                        var6 = global;
                        var7 = var6.Promise;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var17 = function(arg0) { // Environment: var4
                            var0 = global;
                            var2 = var0.setImmediate;
                            var0 = undefined;
                            var1 = function() { // Environment: var1
                                _fun98813: for (var _fun98813_ip = 0;;) switch (_fun98813_ip) {
                                    case 0:
                                        var7 = _closure2_slot0;
                                        var6 = var7.addSubscription;
                                        var11 = _closure2_slot1;
                                        var10 = _closure2_slot2;
                                        var9 = _closure2_slot3;
                                        var8 = _closure4_slot0;
                                        var12 = var7;
                                        var2 = var12[var6](var11, var10, var9, var8, var7);
                                        var3 = _closure4_slot1;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun98813_ip = 83;
                                            continue _fun98813
                                        }
                                    case 49:
                                        var4 = _closure2_slot0;
                                        var3 = var4.dispatchToSubscriptions;
                                        var2 = _closure2_slot2;
                                        var1 = _closure4_slot1;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var0 = var0.socket;
                                            var1 = var0.id;
                                            var0 = _closure2_slot1;
                                            var0 = var0.id;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var0 = var3.bind(var4)(var2, var0, var1);
                                    case 83:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var1);
                            var2 = {};
                            var1 = _closure2_slot2;
                            var2.evt = var1;
                            var1 = arg0;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var18 = var6;
                        var4 = new var18[var7](var17, var16);
                        var4 = var4 instanceof Object ? var4 : var6;
                        return var4;
                    case 515:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 2;
                        var4 = var7[var4];
                        var7 = var6.bind(var5)(var4);
                        var6 = {};
                        var3 = _closure1_slot5;
                        var3 = var3.INVALID_PAYLOAD;
                        var6.errorCode = var3;
                        var3 = var7.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var7
                            }
                        });
                        var16 = 'Invalid subscription parameters provided';
                        var18 = var4;
                        var17 = var6;
                        var3 = new var18[var7](var17, var16, var15);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 583:
                        return var2;
                    case 586:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 2;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = {};
                        var2 = _closure1_slot5;
                        var2 = var2.INVALID_EVENT;
                        var3.errorCode = var2;
                        var5 = _closure2_slot2;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'Invalid event: ';
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
                    case 679:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var6 = var3.UNSUBSCRIBE;
    var3 = {};
    var7 = function arg0() {
        _fun98815: for (var _fun98815_ip = 0;;) switch (_fun98815_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.server;
                var2 = var0.socket;
                var4 = var0.evt;
                var1 = var0.args;
                var0 = var3.events;
                var5 = var0[var4];
                var0 = null;
                if (!(var0 != var5)) {
                    _fun98815_ip = 65;
                    continue _fun98815
                }
            case 43:
                var0 = var3.removeSubscription;
                var0 = var0.bind(var3)(var2, var4, var1);
                var0 = {};
                var0.evt = var4;
                return var0;
            case 65:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot5;
                var0 = var0.INVALID_EVENT;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid event: ';
                var7 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var9 = var1;
                var8 = var2;
                var0 = new var9[var3](var8, var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/subscriptions.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 7998, 12886, 795, 12887, 2]);