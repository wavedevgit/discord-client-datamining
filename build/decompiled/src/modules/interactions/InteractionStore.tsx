// modules/interactions/InteractionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function() {
        _fun54054: for (var _fun54054_ip = 0;;) switch (_fun54054_ip) {
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
            case 70: // try_end0
                _fun54054_ip = 74;
                continue _fun54054;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun54057: for (var _fun54057_ip = 0;;) switch (_fun54057_ip) {
            case 0:
                var2 = arg0;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun54057_ip = 61;
                    continue _fun54057
                }
            case 9:
                var1 = _closure1_slot13;
                var3 = var1[var2];
                if (!(var4 != var3)) {
                    _fun54057_ip = 57;
                    continue _fun54057
                }
            case 24:
                var1 = var3.onSuccess;
                if (!(var4 != var1)) {
                    _fun54057_ip = 44;
                    continue _fun54057
                }
            case 34:
                var1 = var3.onSuccess;
                var1 = var1.bind(var3)();
            case 44:
                var1 = _closure1_slot21;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            case 57:
                var0 = false;
                return var0;
            case 61:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun54058: for (var _fun54058_ip = 0;;) switch (_fun54058_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot18;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun54058_ip = 30;
                    continue _fun54058
                }
            case 20:
                var3 = _closure1_slot18;
                var3 = delete var3[var2];
                _fun54058_ip = 120;
                continue _fun54058;
            case 30:
                var3 = _closure1_slot13;
                var3 = var3[var2];
                var4 = _closure1_slot13;
                var4 = delete var4[var2];
                var4 = _closure1_slot15;
                var4 = var4[var2];
                if (!(var1 != var4)) {
                    _fun54058_ip = 66;
                    continue _fun54058
                }
            case 58:
                var1 = _closure1_slot14;
                var1 = delete var1[var4];
            case 66:
                var1 = _closure1_slot15;
                var1 = delete var1[var2];
                var1 = _closure1_slot18;
                var0 = {};
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var0.insertedAt = var5;
                var0.nonce = var2;
                var0.messageId = var4;
                var0.interaction = var3;
                var1[var2] = var0;
            case 120:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var4 = 5;
    var1 = var7[var4];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var3 = var7[var1];
    var3 = var8.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.MINUTE;
    var3 = var4 * var3;
    var _closure1_slot11 = var3;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.Millis;
    var4 = var1.SECOND;
    var1 = 10;
    var1 = var1 * var4;
    var _closure1_slot12 = var1;
    var4 = {};
    var _closure1_slot13 = var4;
    var4 = {};
    var _closure1_slot14 = var4;
    var4 = {};
    var _closure1_slot15 = var4;
    var _closure1_slot16 = var0;
    var _closure1_slot17 = var0;
    var4 = {};
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.Store;
    var4 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun54060: for (var _fun54060_ip = 0;;) switch (_fun54060_ip) {
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
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54060_ip = 69;
                        continue _fun54060
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54060_ip = 105;
                    continue _fun54060;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot9;
            var0 = _closure1_slot10;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getInteraction';
        var4.key = var6;
        var6 = function arg0() {
            _fun54062: for (var _fun54062_ip = 0;;) switch (_fun54062_ip) {
                case 0:
                    var2 = _closure1_slot14;
                    var0 = arg0;
                    var0 = var0.id;
                    var2 = var2[var0];
                    var0 = null;
                    var3 = var0 != var2;
                    if (!var3) {
                        _fun54062_ip = 36;
                        continue _fun54062
                    }
                case 28:
                    var1 = _closure1_slot13;
                    var0 = var1[var2];
                case 36:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMessageInteractionStates';
        var4.key = var6;
        var6 = function() {
            _fun54063: for (var _fun54063_ip = 0;;) switch (_fun54063_ip) {
                case 0:
                    var0 = {};
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.entries;
                    var1 = _closure1_slot13;
                    var8 = var2.bind(var3)(var1);
                    var1 = var8.length;
                    var7 = 0;
                    var1 = var7 < var1;
                    var6 = undefined;
                    var5 = 2;
                    var4 = 1;
                    var3 = null;
                    var2 = 0;
                    if (!var1) {
                        _fun54063_ip = 109;
                        continue _fun54063
                    }
                case 54:
                    var10 = var8[var2];
                    var1 = _closure1_slot8;
                    var1 = var1.bind(var6)(var10, var5);
                    var11 = var1[var7];
                    var1 = var1[var4];
                    var10 = _closure1_slot15;
                    var10 = var10[var11];
                    if (!(var3 != var10)) {
                        _fun54063_ip = 97;
                        continue _fun54063
                    }
                case 88:
                    var1 = var1.state;
                    var0[var10] = var1;
                case 97:
                    var2 = var2 + 1;
                    var1 = var8.length;
                    if (var2 < var1) {
                        _fun54063_ip = 54;
                        continue _fun54063
                    }
                case 109:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'canQueueInteraction';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun54064: for (var _fun54064_ip = 0;;) switch (_fun54064_ip) {
                case 0:
                    var4 = arg1;
                    var1 = _closure1_slot14;
                    var0 = arg0;
                    var5 = var1[var0];
                    var3 = null;
                    var0 = var3 != var5;
                    if (!var0) {
                        _fun54064_ip = 38;
                        continue _fun54064
                    }
                case 26:
                    var1 = _closure1_slot13;
                    var1 = var1[var5];
                    var0 = var3 != var1;
                case 38:
                    if (!var0) {
                        _fun54064_ip = 92;
                        continue _fun54064
                    }
                case 41:
                    var1 = _closure1_slot13;
                    var1 = var1[var5];
                    var5 = var1.state;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 9;
                    var6 = var6[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var6);
                    var1 = var1.InteractionState;
                    var1 = var1.FAILED;
                    var0 = var5 !== var1;
                case 92:
                    if (var0) {
                        _fun54064_ip = 164;
                        continue _fun54064
                    }
                case 95:
                    var1 = _closure1_slot13;
                    var1 = var1[var4];
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun54064_ip = 161;
                        continue _fun54064
                    }
                case 110:
                    var3 = _closure1_slot13;
                    var3 = var3[var4];
                    var3 = var3.state;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.InteractionState;
                    var2 = var2.FAILED;
                    var1 = var3 !== var2;
                case 161:
                    var0 = var1;
                case 164:
                    var0 = !var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getIFrameModalApplicationId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getIFrameModalKey';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 'InteractionStore';
    var9.displayName = var4;
    var4 = 13;
    var4 = var7[var4];
    var13 = var8.bind(var0)(var4);
    var4 = {};
    var10 = function() {
        var1 = {};
        _closure1_slot13 = var1;
        var1 = {};
        _closure1_slot14 = var1;
        var1 = {};
        _closure1_slot15 = var1;
        var1 = {};
        _closure1_slot18 = var1;
        var1 = global;
        var3 = var1.setInterval;
        var2 = _closure1_slot11;
        var0 = undefined;
        var1 = function() { // Environment: var1
            _fun54068: for (var _fun54068_ip = 0;;) switch (_fun54068_ip) {
                case 0:
                    var0 = global;
                    var2 = var0.Date;
                    var1 = var2.now;
                    var8 = var1.bind(var2)();
                    var2 = var0.Object;
                    var1 = var2.entries;
                    var0 = _closure1_slot18;
                    var6 = var1.bind(var2)(var0);
                    var0 = var6.length;
                    var5 = 0;
                    var1 = var5 < var0;
                    var0 = undefined;
                    var4 = 2;
                    var3 = 1;
                    var2 = 0;
                    if (!var1) {
                        _fun54068_ip = 125;
                        continue _fun54068
                    }
                case 65:
                    var9 = var6[var2];
                    var1 = _closure1_slot8;
                    var1 = var1.bind(var0)(var9, var4);
                    var9 = var1[var5];
                    var1 = var1[var3];
                    var1 = var1.insertedAt;
                    var10 = var8 - var1;
                    var1 = _closure1_slot12;
                    if (!(var10 > var1)) {
                        _fun54068_ip = 113;
                        continue _fun54068
                    }
                case 105:
                    var1 = _closure1_slot18;
                    var1 = delete var1[var9];
                case 113:
                    var2 = var2 + 1;
                    var1 = var6.length;
                    if (var2 < var1) {
                        _fun54068_ip = 65;
                        continue _fun54068
                    }
                case 125:
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var4.LOGOUT = var10;
    var10 = function arg0() {
        _fun54069: for (var _fun54069_ip = 0;;) switch (_fun54069_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.nonce;
                var1 = var0.messageId;
                var8 = var0.data;
                var7 = var0.onCreate;
                var6 = var0.onCancel;
                var5 = var0.onSuccess;
                var4 = var0.onFailure;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun54069_ip = 68;
                    continue _fun54069
                }
            case 49:
                var2 = _closure1_slot14;
                var2[var1] = var3;
                var0 = _closure1_slot15;
                var0[var3] = var1;
            case 68:
                var2 = _closure1_slot13;
                var1 = {};
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 9;
                var9 = var9[var0];
                var0 = undefined;
                var9 = var10.bind(var0)(var9);
                var9 = var9.InteractionState;
                var9 = var9.QUEUED;
                var1.state = var9;
                var1.data = var8;
                var1.onCreate = var7;
                var1.onCancel = var6;
                var1.onSuccess = var5;
                var1.onFailure = var4;
                var2[var3] = var1;
                return var0;
        }
    };
    var4.INTERACTION_QUEUE = var10;
    var10 = function arg0() {
        _fun54070: for (var _fun54070_ip = 0;;) switch (_fun54070_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.nonce;
                var3 = var0.interactionId;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun54070_ip = 141;
                    continue _fun54070
                }
            case 21:
                var0 = _closure1_slot13;
                var2 = var0[var2];
                if (!(var4 != var2)) {
                    _fun54070_ip = 137;
                    continue _fun54070
                }
            case 36:
                var7 = var2.state;
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 9;
                var5 = var0[var6];
                var0 = undefined;
                var5 = var8.bind(var0)(var5);
                var5 = var5.InteractionState;
                var5 = var5.QUEUED;
                if (!(var7 === var5)) {
                    _fun54070_ip = 137;
                    continue _fun54070
                }
            case 79:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var5.bind(var0)(var1);
                var1 = var1.InteractionState;
                var1 = var1.CREATED;
                var2.state = var1;
                var1 = var2.onCreate;
                if (!(var4 != var1)) {
                    _fun54070_ip = 135;
                    continue _fun54070
                }
            case 124:
                var1 = var2.onCreate;
                var1 = var1.bind(var2)(var3);
            case 135:
                return var0;
            case 137:
                var0 = false;
                return var0;
            case 141:
                var0 = false;
                return var0;
        }
    };
    var4.INTERACTION_CREATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.nonce;
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var4.INTERACTION_SUCCESS = var10;
    var10 = function arg0() {
        _fun54072: for (var _fun54072_ip = 0;;) switch (_fun54072_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.nonce;
                var7 = var0.errorCode;
                var6 = var0.errorMessage;
                var4 = var0.status;
                var3 = var0.reasonCode;
                var8 = null;
                if (!(var8 != var2)) {
                    _fun54072_ip = 239;
                    continue _fun54072
                }
            case 41:
                var0 = _closure1_slot13;
                var5 = var0[var2];
                if (!(var8 != var5)) {
                    _fun54072_ip = 235;
                    continue _fun54072
                }
            case 59:
                var0 = var5.onFailure;
                if (!(var8 != var0)) {
                    _fun54072_ip = 94;
                    continue _fun54072
                }
            case 69:
                var0 = var5.onFailure;
                var14 = var5;
                var13 = var7;
                var12 = var6;
                var11 = var4;
                var10 = var3;
                var0 = var14[var0](var13, var12, var11, var10, var9);
            case 94:
                var0 = var5.data;
                var4 = var0.interactionType;
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var8.bind(var0)(var3);
                var3 = var3.InteractionTypes;
                var3 = var3.APPLICATION_COMMAND;
                if (!(var4 !== var3)) {
                    _fun54072_ip = 224;
                    continue _fun54072
                }
            case 143:
                var4 = _closure1_slot13;
                var3 = {};
                var13 = var3;
                var12 = var5;
                var5 = copyDataProperties(var13, var12);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var5 = var8.bind(var0)(var5);
                var5 = var5.InteractionState;
                var8 = var5.FAILED;
                var5 = 'state';
                var3[var5] = var8;
                var5 = 'errorCode';
                var3[var5] = var7;
                var5 = 'errorMessage';
                var3[var5] = var6;
                var4[var2] = var3;
                _fun54072_ip = 233;
                continue _fun54072;
            case 224:
                var1 = _closure1_slot21;
                var1 = var1.bind(var0)(var2);
            case 233:
                return var0;
            case 235:
                var0 = false;
                return var0;
            case 239:
                var0 = false;
                return var0;
        }
    };
    var4.INTERACTION_FAILURE = var10;
    var10 = function arg0() {
        _fun54073: for (var _fun54073_ip = 0;;) switch (_fun54073_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.message;
                var1 = var0.nonce;
                var4 = null;
                if (!(var4 != var1)) {
                    _fun54073_ip = 84;
                    continue _fun54073
                }
            case 20:
                var3 = _closure1_slot13;
                var2 = var0.nonce;
                var3 = var3[var2];
                if (!(var4 != var3)) {
                    _fun54073_ip = 80;
                    continue _fun54073
                }
            case 41:
                var2 = var3.onSuccess;
                if (!(var4 != var2)) {
                    _fun54073_ip = 61;
                    continue _fun54073
                }
            case 51:
                var2 = var3.onSuccess;
                var2 = var2.bind(var3)();
            case 61:
                var2 = _closure1_slot21;
                var1 = var0.nonce;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 80:
                var0 = false;
                return var0;
            case 84:
                var0 = false;
                return var0;
        }
    };
    var4.MESSAGE_CREATE = var10;
    var10 = function arg0() {
        _fun54074: for (var _fun54074_ip = 0;;) switch (_fun54074_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = _closure1_slot10;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var2);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun54074_ip = 167;
                    continue _fun54074
                }
            case 34:
                var0 = global;
                var2 = var0.Object;
                var1 = var2.entries;
                var0 = _closure1_slot13;
                var7 = var1.bind(var2)(var0);
                var0 = var7.length;
                var6 = 0;
                var1 = var6 < var0;
                var0 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 9;
                var2 = 0;
                if (!var1) {
                    _fun54074_ip = 165;
                    continue _fun54074
                }
            case 84:
                var9 = var7[var2];
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var9, var5);
                var9 = var1[var6];
                var1 = var1[var4];
                var10 = var1.state;
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var11.bind(var0)(var1);
                var1 = var1.InteractionState;
                var1 = var1.FAILED;
                if (!(var10 === var1)) {
                    _fun54074_ip = 153;
                    continue _fun54074
                }
            case 144:
                var1 = _closure1_slot21;
                var1 = var1.bind(var0)(var9);
            case 153:
                var2 = var2 + 1;
                var1 = var7.length;
                if (var2 < var1) {
                    _fun54074_ip = 84;
                    continue _fun54074
                }
            case 165:
                return var0;
            case 167:
                var0 = false;
                return var0;
        }
    };
    var4.CHANNEL_SELECT = var10;
    var10 = function arg0() {
        var1 = arg0;
        var0 = var1.application;
        var2 = var1.nonce;
        var1 = var0.id;
        _closure1_slot17 = var1;
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var4.INTERACTION_IFRAME_MODAL_CREATE = var10;
    var10 = function() {
        var0 = undefined;
        _closure1_slot16 = var0;
        _closure1_slot17 = var0;
        return var0;
    };
    var4.INTERACTION_IFRAME_MODAL_CLOSE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var1 = var0.modalKey;
        _closure1_slot16 = var1;
        var0 = undefined;
        return var0;
    };
    var4.INTERACTION_IFRAME_MODAL_KEY_CREATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.nonce;
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var4.INTERACTION_MODAL_CREATE = var10;
    var5 = function arg0() {
        _fun54079: for (var _fun54079_ip = 0;;) switch (_fun54079_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.participants;
                var4 = _closure1_slot9;
                var2 = var4.getSessionId;
                var2 = var2.bind(var4)();
                var _closure2_slot0 = var2;
                var2 = var4.getId;
                var2 = var2.bind(var4)();
                var _closure2_slot1 = var2;
                var2 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    _fun54080: for (var _fun54080_ip = 0;;) switch (_fun54080_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.user_id;
                            var0 = _closure2_slot1;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun54080_ip = 37;
                                continue _fun54080
                            }
                        case 23:
                            var2 = var2.session_id;
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 37:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun54079_ip = 241;
                    continue _fun54079
                }
            case 70:
                var0 = var3.nonce;
                if (!(var2 != var0)) {
                    _fun54079_ip = 241;
                    continue _fun54079
                }
            case 83:
                var4 = _closure1_slot18;
                var0 = var3.nonce;
                var0 = var4[var0];
                if (!(var2 != var0)) {
                    _fun54079_ip = 114;
                    continue _fun54079
                }
            case 101:
                var4 = var0.messageId;
                var0 = var0.interaction;
                _fun54079_ip = 142;
                continue _fun54079;
            case 114:
                var6 = _closure1_slot15;
                var5 = var3.nonce;
                var4 = var6[var5];
                var7 = _closure1_slot13;
                var5 = var3.nonce;
                var0 = var7[var5];
            case 142:
                var5 = var2 != var0;
                if (!var5) {
                    _fun54079_ip = 153;
                    continue _fun54079
                }
            case 149:
                var5 = var2 != var4;
            case 153:
                if (!var5) {
                    _fun54079_ip = 241;
                    continue _fun54079
                }
            case 156:
                var6 = _closure1_slot21;
                var5 = var3.nonce;
                var3 = undefined;
                var5 = var6.bind(var3)(var5);
                var2 = var2 != var4;
                if (!var2) {
                    _fun54079_ip = 193;
                    continue _fun54079
                }
            case 180:
                var6 = var0.data;
                var5 = 'channelId';
                var2 = var5 in var6;
            case 193:
                if (!var2) {
                    _fun54079_ip = 241;
                    continue _fun54079
                }
            case 196:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.deleteMessage;
                var0 = var0.data;
                var1 = var0.channelId;
                var0 = true;
                var0 = var2.bind(var3)(var1, var4, var0);
            case 241:
                var0 = undefined;
                return var0;
        }
    };
    var4.EMBEDDED_ACTIVITY_UPDATE_V2 = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/interactions/InteractionStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.STALE_INTERACTION_INTERVAL = var3;
    var2.STALE_INTERACTION_DURATION = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1216, 1372, 667, 3976, 1645, 6526, 566, 806, 2]);