// modules/interaction_components/InteractionModalStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun97319: for (var _fun97319_ip = 0;;) switch (_fun97319_ip) {
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
                _fun97319_ip = 76;
                continue _fun97319;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var10 = 0;
    var1 = var6[var10];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var9 = 1;
    var1 = var6[var9];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var8 = 2;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var1.IN_FLIGHT = var10;
    var3 = 'IN_FLIGHT';
    var1[var10] = var3;
    var1.ERRORED = var9;
    var3 = 'ERRORED';
    var1[var9] = var3;
    var1.SUCCEEDED = var8;
    var3 = 'SUCCEEDED';
    var1[var8] = var3;
    var _closure1_slot13 = var1;
    var3 = 10;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun97323: for (var _fun97323_ip = 0;;) switch (_fun97323_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun97323_ip = 69;
                        continue _fun97323
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun97323_ip = 105;
                    continue _fun97323;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'getModalState';
        var4.key = var5;
        var0 = function arg0() {
            _fun97324: for (var _fun97324_ip = 0;;) switch (_fun97324_ip) {
                case 0:
                    var3 = _closure1_slot8;
                    var2 = arg0;
                    var0 = null;
                    if (!(var2 === var3)) {
                        _fun97324_ip = 20;
                        continue _fun97324
                    }
                case 16:
                    var0 = _closure1_slot9;
                case 20:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'InteractionModalStore';
    var8.displayName = var3;
    var3 = 11;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function() {
        var0 = null;
        var _closure1_slot8 = var0;
        var _closure1_slot9 = var0;
        var _closure1_slot10 = var0;
        var _closure1_slot11 = var0;
        var _closure1_slot12 = var0;
        var0 = true;
        return var0;
    };
    var3.LOGOUT = var9;
    var9 = function arg0() {
        _fun97326: for (var _fun97326_ip = 0;;) switch (_fun97326_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.nonce;
                var0 = _closure1_slot12;
                if (!(var2 === var0)) {
                    _fun97326_ip = 79;
                    continue _fun97326
                }
            case 20:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var4 = var5.deleteMessage;
                var3 = _closure1_slot11;
                var2 = _closure1_slot10;
                var0 = true;
                var0 = var4.bind(var5)(var3, var2, var0);
                var0 = null;
                _closure1_slot10 = var0;
                _closure1_slot11 = var0;
                _closure1_slot12 = var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var3.INTERACTION_MODAL_CREATE = var9;
    var9 = function arg0() {
        _fun97327: for (var _fun97327_ip = 0;;) switch (_fun97327_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.nonce;
                var0 = _closure1_slot12;
                if (!(var2 === var0)) {
                    _fun97327_ip = 79;
                    continue _fun97327
                }
            case 20:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var4 = var5.deleteMessage;
                var3 = _closure1_slot11;
                var2 = _closure1_slot10;
                var0 = true;
                var0 = var4.bind(var5)(var3, var2, var0);
                var0 = null;
                _closure1_slot10 = var0;
                _closure1_slot11 = var0;
                _closure1_slot12 = var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var3.INTERACTION_IFRAME_MODAL_CREATE = var9;
    var9 = function arg0() {
        _fun97328: for (var _fun97328_ip = 0;;) switch (_fun97328_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.messageId;
                var1 = var0.nonce;
                var _closure2_slot0 = var1;
                var2 = var0.data;
                var7 = var0.preflight;
                var8 = undefined;
                var _closure2_slot1 = var8;
                var6 = var2.interactionType;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = 5;
                var5 = var5[var10];
                var5 = var9.bind(var8)(var5);
                var5 = var5.InteractionTypes;
                var5 = var5.APPLICATION_COMMAND;
                if (!(var5 !== var6)) {
                    _fun97328_ip = 368;
                    continue _fun97328
                }
            case 85:
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var5 = var9.bind(var8)(var5);
                var5 = var5.InteractionTypes;
                var5 = var5.MODAL_SUBMIT;
                if (!(var5 !== var6)) {
                    _fun97328_ip = 122;
                    continue _fun97328
                }
            case 118:
                var5 = false;
                return var5;
            case 122:
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 6;
                var5 = var9[var5];
                var10 = var6.bind(var8)(var5);
                var6 = _closure1_slot8;
                var5 = null;
                var9 = var5 == var6;
                if (var9) {
                    _fun97328_ip = 173;
                    continue _fun97328
                }
            case 155:
                var11 = _closure1_slot9;
                var6 = _closure1_slot13;
                var6 = var6.ERRORED;
                var9 = var11 === var6;
            case 173:
                if (var9) {
                    _fun97328_ip = 194;
                    continue _fun97328
                }
            case 176:
                var11 = _closure1_slot9;
                var6 = _closure1_slot13;
                var6 = var6.SUCCEEDED;
                var9 = var11 === var6;
            case 194:
                var6 = 'cannot submit multiple modals at once';
                var6 = var10.bind(var8)(var9, var6);
                _closure1_slot8 = var1;
                var6 = _closure1_slot13;
                var6 = var6.IN_FLIGHT;
                _closure1_slot9 = var6;
                var6 = function arg0() {
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        _fun97330: for (var _fun97330_ip = 0;;) switch (_fun97330_ip) {
                            case 0:
                                var3 = _closure1_slot8;
                                var2 = _closure2_slot0;
                                var2 = var3 === var2;
                                if (!var2) {
                                    _fun97330_ip = 39;
                                    continue _fun97330
                                }
                            case 21:
                                var4 = _closure1_slot9;
                                var3 = _closure1_slot13;
                                var3 = var3.IN_FLIGHT;
                                var2 = var4 === var3;
                            case 39:
                                if (!var2) {
                                    _fun97330_ip = 79;
                                    continue _fun97330
                                }
                            case 42:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 7;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.setFailed;
                                var0 = _closure2_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 79:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = arg0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                _closure2_slot1 = var6;
                if (!(var5 == var7)) {
                    _fun97328_ip = 285;
                    continue _fun97328
                }
            case 239:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 8;
                var5 = var10[var5];
                var5 = var9.bind(var8)(var5);
                var5 = var5.Millis;
                var9 = var5.SECOND;
                var5 = 10;
                var5 = var5 * var9;
                var5 = var6.bind(var8)(var5);
                _fun97328_ip = 364;
                continue _fun97328;
            case 285:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 8;
                var5 = var10[var5];
                var5 = var9.bind(var8)(var5);
                var5 = var5.Millis;
                var9 = var5.MINUTE;
                var5 = 2;
                var5 = var5 * var9;
                var5 = var6.bind(var8)(var5);
                var6 = var7.then;
                var5 = function() { // Environment: var4
                    var2 = _closure2_slot1;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var3.bind(var1)(var0);
                    var0 = var0.Millis;
                    var3 = var0.SECOND;
                    var0 = 10;
                    var0 = var0 * var3;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var6 = var6.bind(var7)(var5);
                var5 = var6.catch;
                var4 = function() { // Environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.setFailed;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
            case 364:
                var4 = true;
                return var4;
            case 368:
                _closure1_slot10 = var3;
                var2 = var2.channelId;
                _closure1_slot11 = var2;
                _closure1_slot12 = var1;
                var0 = false;
                return var0;
        }
    };
    var3.INTERACTION_QUEUE = var9;
    var9 = function arg0() {
        _fun97333: for (var _fun97333_ip = 0;;) switch (_fun97333_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.nonce;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun97333_ip = 29;
                    continue _fun97333
                }
            case 18:
                var1 = _closure1_slot8;
                var0 = var2 === var1;
            case 29:
                if (!var0) {
                    _fun97333_ip = 51;
                    continue _fun97333
                }
            case 32:
                var1 = _closure1_slot13;
                var1 = var1.SUCCEEDED;
                _closure1_slot9 = var1;
                var0 = true;
            case 51:
                return var0;
        }
    };
    var3.INTERACTION_SUCCESS = var9;
    var4 = function arg0() {
        _fun97334: for (var _fun97334_ip = 0;;) switch (_fun97334_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.nonce;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun97334_ip = 29;
                    continue _fun97334
                }
            case 18:
                var1 = _closure1_slot8;
                var0 = var2 === var1;
            case 29:
                if (!var0) {
                    _fun97334_ip = 51;
                    continue _fun97334
                }
            case 32:
                var1 = _closure1_slot13;
                var1 = var1.ERRORED;
                _closure1_slot9 = var1;
                var0 = true;
            case 51:
                return var0;
        }
    };
    var3.INTERACTION_FAILURE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/InteractionModalStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.InteractionModalState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1636, 44, 6788, 667, 6521, 566, 806, 2]);