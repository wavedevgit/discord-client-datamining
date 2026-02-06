// modules/interaction_components/InteractionModalManager.tsx
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
        _fun113492: for (var _fun113492_ip = 0;;) switch (_fun113492_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun113492_ip = 76;
                continue _fun113492;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun113497: for (var _fun113497_ip = 0;;) switch (_fun113497_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113497_ip = 151;
                            continue _fun113497
                        }
                    case 13:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 9;
                        var4 = var1[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = 8;
                        var4 = var1[var4];
                        var1 = var1.paths;
                        var1 = var5.bind(var2)(var4, var1);
                        SaveGenerator(address = 60);
                    case 58:
                        return var1;
                    case 60:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun113497_ip = 148;
                            continue _fun113497
                        }
                    case 66:
                        var4 = var1.openInteractionModal;
                        var4 = var4.bind(var2)(var7);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 10;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.track;
                        var3 = _closure1_slot10;
                        var4 = var3.OPEN_MODAL;
                        var3 = {};
                        var8 = 'interaction_modal';
                        var3.type = var8;
                        var7 = var7.application;
                        var7 = var7.id;
                        var3.application_id = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 148:
                        return var1;
                    case 151:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun113499: for (var _fun113499_ip = 0;;) switch (_fun113499_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var7 = var7.bind(var1)(var4, var3);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var1)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun113499_ip = 86;
                        continue _fun113499
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113499_ip = 120;
                    continue _fun113499;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var1)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var3.bind(var1)(var4, var0);
                    var _closure3_slot0 = var0;
                    var0.iframeModalOpenTimeMs = var1;
                    var1 = {};
                    var3 = function arg0() {
                        var2 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot12;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        var1 = !var1;
                        return var0;
                    };
                    var1.INTERACTION_MODAL_CREATE = var3;
                    var3 = function arg0() {
                        var5 = arg0;
                        var1 = _closure3_slot0;
                        var0 = global;
                        var2 = var0.Date;
                        var0 = var2.now;
                        var0 = var0.bind(var2)();
                        var1.iframeModalOpenTimeMs = var0;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 11;
                        var2 = var4[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.bind(var0)(var5);
                        var2 = 10;
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.track;
                        var1 = _closure1_slot10;
                        var2 = var1.OPEN_MODAL;
                        var1 = {};
                        var6 = 'interaction_iframe_modal';
                        var1.type = var6;
                        var5 = var5.application;
                        var5 = var5.id;
                        var1.application_id = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1.INTERACTION_IFRAME_MODAL_CREATE = var3;
                    var3 = function arg0() {
                        _fun113503: for (var _fun113503_ip = 0;;) switch (_fun113503_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = var1.iframeModalOpenTimeMs;
                                var0 = null;
                                var2 = var0 != var3;
                                var0 = undefined;
                                var6 = undefined;
                                if (!var2) {
                                    _fun113503_ip = 47;
                                    continue _fun113503
                                }
                            case 26:
                                var2 = global;
                                var4 = var2.Date;
                                var2 = var4.now;
                                var2 = var2.bind(var4)();
                                var6 = var2 - var3;
                            case 47:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 10;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.track;
                                var2 = _closure1_slot10;
                                var3 = var2.MODAL_DISMISSED;
                                var2 = {};
                                var7 = 'interaction_iframe_modal';
                                var2.type = var7;
                                var7 = arg0;
                                var7 = var7.applicationId;
                                var2.application_id = var7;
                                var2.duration_open_ms = var6;
                                var2 = var4.bind(var5)(var3, var2);
                                var1.iframeModalOpenTimeMs = var0;
                                return var0;
                        }
                    };
                    var1.INTERACTION_IFRAME_MODAL_CLOSE = var3;
                    var2 = function arg0() {
                        _fun113504: for (var _fun113504_ip = 0;;) switch (_fun113504_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.application;
                                var4 = _closure1_slot9;
                                var2 = var4.getIFrameModalApplicationId;
                                var3 = var2.bind(var4)();
                                var2 = var4.getIFrameModalKey;
                                var2 = var2.bind(var4)();
                                var1 = var1.id;
                                var1 = var1 === var3;
                                if (!var1) {
                                    _fun113504_ip = 57;
                                    continue _fun113504
                                }
                            case 51:
                                var4 = null;
                                var1 = var4 != var3;
                            case 57:
                                if (!var1) {
                                    _fun113504_ip = 88;
                                    continue _fun113504
                                }
                            case 60:
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var0 = var1[var0];
                                var1 = undefined;
                                var0 = var4.bind(var1)(var0);
                                var0 = var0.bind(var1)(var3, var2);
                            case 88:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.RPC_APP_DISCONNECTED = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/InteractionModalManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = 'interaction_iframe_modal';
    var2.INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 5, 6549, 660, 14573, 1307, 795, 14584, 14587, 4300, 2]);