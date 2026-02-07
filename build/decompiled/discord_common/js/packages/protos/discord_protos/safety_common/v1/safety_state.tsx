// ../discord_common/js/packages/protos/discord_protos/safety_common/v1/safety_state.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var12;
    var0 = function arg0, arg1, arg2() {
        _fun18352: for (var _fun18352_ip = 0;;) switch (_fun18352_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot16;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun18352_ip = 51;
                    continue _fun18352
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun18352_ip = 92;
                continue _fun18352;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun18352_ip = 71;
                    continue _fun18352
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        _fun18353: for (var _fun18353_ip = 0;;) switch (_fun18353_ip) {
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
                _fun18353_ip = 74;
                continue _fun18353;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var16 = 0;
    var3 = var12[var16];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var15 = 1;
    var3 = var12[var15];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 2;
    var3 = var12[var14];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var7 = 3;
    var3 = var12[var7];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var6 = 4;
    var3 = var12[var6];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var5 = 5;
    var3 = var12[var5];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var9 = {};
    var9.REASON_UNSPECIFIED = var16;
    var3 = 'REASON_UNSPECIFIED';
    var9[var16] = var3;
    var9.DISABLED_SUSPICIOUS_ACTIVITY = var15;
    var3 = 'DISABLED_SUSPICIOUS_ACTIVITY';
    var9[var15] = var3;
    var9.SMITE_REMOVE_EMAIL_VERIFICATION = var14;
    var3 = 'SMITE_REMOVE_EMAIL_VERIFICATION';
    var9[var14] = var3;
    var9.USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT = var7;
    var3 = 'USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT';
    var9[var7] = var3;
    var9.ACTIVE_ASSIGNMENT_COMPLETED = var6;
    var3 = 'ACTIVE_ASSIGNMENT_COMPLETED';
    var9[var6] = var3;
    var9.ACTIVE_ASSIGNMENT_CREATED = var5;
    var3 = 'ACTIVE_ASSIGNMENT_CREATED';
    var9[var5] = var3;
    var13 = 6;
    var9.DEFERRED_ASSIGNMENT_CREATED = var13;
    var3 = 'DEFERRED_ASSIGNMENT_CREATED';
    var9[var13] = var3;
    var4 = 7;
    var9.DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE = var4;
    var3 = 'DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE';
    var9[var4] = var3;
    var8 = 8;
    var9.DEFERRED_ASSIGNMENT_CANCELLED = var8;
    var3 = 'DEFERRED_ASSIGNMENT_CANCELLED';
    var9[var8] = var3;
    var8 = 9;
    var9.ASSIGNMENT_STATE_REPAIRED = var8;
    var3 = 'ASSIGNMENT_STATE_REPAIRED';
    var9[var8] = var3;
    var10 = 10;
    var9.MANUAL_PERMANENT_BAN = var10;
    var3 = 'MANUAL_PERMANENT_BAN';
    var9[var10] = var3;
    var8 = 11;
    var9.SAFETY_SYSTEM_UNBAN = var8;
    var3 = 'SAFETY_SYSTEM_UNBAN';
    var9[var8] = var3;
    var8 = 12;
    var9.GENERIC_AUTOMATED_SAFETY_ACTION = var8;
    var3 = 'GENERIC_AUTOMATED_SAFETY_ACTION';
    var9[var8] = var3;
    var8 = 13;
    var9.GENERIC_MANUAL_SAFETY_ACTION = var8;
    var3 = 'GENERIC_MANUAL_SAFETY_ACTION';
    var9[var8] = var3;
    var _closure1_slot8 = var9;
    var8 = {};
    var8.ANNOTATION_UNSPECIFIED = var16;
    var3 = 'ANNOTATION_UNSPECIFIED';
    var8[var16] = var3;
    var8.SPAMMER = var15;
    var3 = 'SPAMMER';
    var8[var15] = var3;
    var8.SELF_DELETED = var14;
    var3 = 'SELF_DELETED';
    var8[var14] = var3;
    var8.SELF_DISABLED = var7;
    var3 = 'SELF_DISABLED';
    var8[var7] = var3;
    var8.UNDERAGE_DELETED = var6;
    var3 = 'UNDERAGE_DELETED';
    var8[var6] = var3;
    var8.SAFETY_POLICY_VIOLATION = var5;
    var3 = 'SAFETY_POLICY_VIOLATION';
    var8[var5] = var3;
    var8.INACTIVITY_DELETED = var13;
    var3 = 'INACTIVITY_DELETED';
    var8[var13] = var3;
    var8.GENERIC_DELETED = var4;
    var3 = 'GENERIC_DELETED';
    var8[var4] = var3;
    var _closure1_slot9 = var8;
    var3 = var12[var13];
    var3 = var11.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot15;
            var0 = ['discord_protos.safety_common.v1.NormalState'];
            var5 = new Array(0);
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun18358: for (var _fun18358_ip = 0;;) switch (_fun18358_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18358_ip = 110;
                        continue _fun18358
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun18359: for (var _fun18359_ip = 0;;) switch (_fun18359_ip) {
                case 0:
                    var0 = arg3;
                    var2 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18359_ip = 21;
                        continue _fun18359
                    }
                case 12:
                    var1 = var2.create;
                    var0 = var1.bind(var2)();
                case 21:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun18360: for (var _fun18360_ip = 0;;) switch (_fun18360_ip) {
                case 0:
                    var0 = arg1;
                    var1 = arg2;
                    var4 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var4)) {
                        _fun18360_ip = 83;
                        continue _fun18360
                    }
                case 18:
                    var1 = 1;
                    if (!(var1 == var4)) {
                        _fun18360_ip = 62;
                        continue _fun18360
                    }
                case 25:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var4 = var1.onWrite;
                case 62:
                    var1 = this;
                    var3 = var1.typeName;
                    var2 = undefined;
                    var1 = arg0;
                    var1 = var4.bind(var2)(var3, var1, var0);
                case 83:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var20 = var4;
    var3 = new var20[var3](var19);
    var7 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot10 = var7;
    var3 = var12[var13];
    var3 = var11.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot15;
            var0 = {
                'no': 1,
                'name': 'restricted_until',
                'kind': 'message'
            };
            var5 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.safety_common.v1.RestrictedState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun18364: for (var _fun18364_ip = 0;;) switch (_fun18364_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18364_ip = 110;
                        continue _fun18364
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun18365: for (var _fun18365_ip = 0;;) switch (_fun18365_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18365_ip = 27;
                        continue _fun18365
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 7;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18365_ip = 392;
                        continue _fun18365
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var5];
                    var25 = var1[var4];
                    if (!(var4 !== var26)) {
                        _fun18365_ip = 304;
                        continue _fun18365
                    }
                case 119:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun18365_ip = 224;
                        continue _fun18365
                    }
                case 129:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun18365_ip = 374;
                        continue _fun18365
                    }
                case 153:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun18365_ip = 189;
                        continue _fun18365
                    }
                case 160:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 189:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18365_ip = 374;
                    continue _fun18365;
                case 224:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 304:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.restrictedUntil;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.restrictedUntil = var1;
                    var19 = var3;
                    var18 = var2;
                case 374:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18365_ip = 85;
                        continue _fun18365
                    }
                case 392:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun18366: for (var _fun18366_ip = 0;;) switch (_fun18366_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.restrictedUntil;
                    if (!var2) {
                        _fun18366_ip = 124;
                        continue _fun18366
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.restrictedUntil;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18366_ip = 198;
                        continue _fun18366
                    }
                case 136:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18366_ip = 180;
                        continue _fun18366
                    }
                case 143:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 180:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 198:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var20 = var4;
    var3 = new var20[var3](var19);
    var6 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot11 = var6;
    var3 = var12[var13];
    var3 = var11.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot15;
            var0 = {
                'no': 1,
                'name': 'action_deferred_until',
                'kind': 'message'
            };
            var5 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.safety_common.v1.DeferredActionState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun18370: for (var _fun18370_ip = 0;;) switch (_fun18370_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18370_ip = 110;
                        continue _fun18370
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun18371: for (var _fun18371_ip = 0;;) switch (_fun18371_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18371_ip = 27;
                        continue _fun18371
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 7;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18371_ip = 392;
                        continue _fun18371
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var5];
                    var25 = var1[var4];
                    if (!(var4 !== var26)) {
                        _fun18371_ip = 304;
                        continue _fun18371
                    }
                case 119:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun18371_ip = 224;
                        continue _fun18371
                    }
                case 129:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun18371_ip = 374;
                        continue _fun18371
                    }
                case 153:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun18371_ip = 189;
                        continue _fun18371
                    }
                case 160:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 189:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18371_ip = 374;
                    continue _fun18371;
                case 224:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 304:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.actionDeferredUntil;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.actionDeferredUntil = var1;
                    var19 = var3;
                    var18 = var2;
                case 374:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18371_ip = 85;
                        continue _fun18371
                    }
                case 392:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun18372: for (var _fun18372_ip = 0;;) switch (_fun18372_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.actionDeferredUntil;
                    if (!var2) {
                        _fun18372_ip = 124;
                        continue _fun18372
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.actionDeferredUntil;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18372_ip = 198;
                        continue _fun18372
                    }
                case 136:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18372_ip = 180;
                        continue _fun18372
                    }
                case 143:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 180:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 198:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var20 = var4;
    var3 = new var20[var3](var19);
    var5 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot12 = var5;
    var3 = var12[var13];
    var3 = var11.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot15;
            var0 = {
                'no': 1,
                'name': 'banned_until',
                'kind': 'message'
            };
            var5 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'classification_types',
                'kind': 'enum',
                'repeat': 1
            };
            var6 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.ClassificationType;
                var0 = ['discord_protos.safety_common.v1.ClassificationType'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var6;
            var5[1] = var0;
            var0 = ['discord_protos.safety_common.v1.TempBannedState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun18377: for (var _fun18377_ip = 0;;) switch (_fun18377_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.classificationTypes = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18377_ip = 119;
                        continue _fun18377
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun18378: for (var _fun18378_ip = 0;;) switch (_fun18378_ip) {
                case 0:
                    var18 = arg0;
                    var17 = arg2;
                    var0 = arg3;
                    var16 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18378_ip = 27;
                        continue _fun18378
                    }
                case 18:
                    var1 = var16.create;
                    var0 = var1.bind(var16)();
                case 27:
                    var2 = var18.pos;
                    var1 = arg1;
                    var15 = var2 + var1;
                    var1 = var18.pos;
                    var1 = var1 < var15;
                    var14 = undefined;
                    var12 = 7;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 1;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18378_ip = 568;
                        continue _fun18378
                    }
                case 87:
                    var1 = var18.tag;
                    var19 = var1.bind(var18)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var14)(var19, var7);
                    var28 = var1[var5];
                    var22 = var1[var6];
                    if (!(var6 !== var28)) {
                        _fun18378_ip = 474;
                        continue _fun18378
                    }
                case 121:
                    if (!(var7 !== var28)) {
                        _fun18378_ip = 319;
                        continue _fun18378
                    }
                case 128:
                    var23 = var17.readUnknownField;
                    if (!(var8 !== var23)) {
                        _fun18378_ip = 239;
                        continue _fun18378
                    }
                case 138:
                    var1 = var18.skip;
                    var1 = var1.bind(var18)(var22);
                    var21 = var4;
                    var20 = var23;
                    var19 = var1;
                    if (!(var9 !== var23)) {
                        _fun18378_ip = 547;
                        continue _fun18378
                    }
                case 165:
                    var25 = var23;
                    if (!(var10 === var23)) {
                        _fun18378_ip = 201;
                        continue _fun18378
                    }
                case 172:
                    var26 = _closure1_slot0;
                    var24 = _closure1_slot1;
                    var24 = var24[var11];
                    var24 = var26.bind(var14)(var24);
                    var24 = var24.UnknownFieldHandler;
                    var25 = var24.onRead;
                case 201:
                    var33 = var16.typeName;
                    var34 = undefined;
                    var32 = var0;
                    var31 = var28;
                    var30 = var22;
                    var29 = var1;
                    var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                    var21 = var4;
                    var20 = var23;
                    var19 = var1;
                    _fun18378_ip = 547;
                    continue _fun18378;
                case 239:
                    var1 = global;
                    var23 = var1.globalThis;
                    var24 = var23.Error;
                    var29 = var16.typeName;
                    var1 = var1.HermesInternal;
                    var26 = var1.concat;
                    var34 = 'Unknown field ';
                    var32 = ' (wire type ';
                    var30 = ') for ';
                    var33 = var28;
                    var31 = var22;
                    var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                    var23 = var24.prototype;
                    var23 = Object.create(var23, {
                        constructor: {
                            value: var24
                        }
                    });
                    var34 = var23;
                    var1 = new var34[var24](var33, var32);
                    var1 = var1 instanceof Object ? var1 : var23;
                    throw var1;
                case 319:
                    var23 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var23.bind(var14)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var22 !== var1)) {
                        _fun18378_ip = 391;
                        continue _fun18378
                    }
                case 351:
                    var23 = var0.classificationTypes;
                    var22 = var23.push;
                    var1 = var18.int32;
                    var1 = var1.bind(var18)();
                    var1 = var22.bind(var23)(var1);
                    var21 = var4;
                    var20 = var3;
                    var19 = var2;
                    _fun18378_ip = 547;
                    continue _fun18378;
                case 391:
                    var1 = var18.int32;
                    var22 = var1.bind(var18)();
                    var1 = var18.pos;
                    var22 = var22 + var1;
                    var1 = var18.pos;
                    var20 = var3;
                    var19 = var2;
                    var21 = var22;
                    if (!(var1 < var21)) {
                        _fun18378_ip = 547;
                        continue _fun18378
                    }
                case 428:
                    var24 = var0.classificationTypes;
                    var23 = var24.push;
                    var1 = var18.int32;
                    var1 = var1.bind(var18)();
                    var1 = var23.bind(var24)(var1);
                    var1 = var18.pos;
                    var21 = var22;
                    var20 = var3;
                    var19 = var2;
                    if (var1 < var22) {
                        _fun18378_ip = 428;
                        continue _fun18378
                    }
                case 472:
                    _fun18378_ip = 547;
                    continue _fun18378;
                case 474:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var12];
                    var1 = var22.bind(var14)(var1);
                    var24 = var1.Timestamp;
                    var23 = var24.internalBinaryRead;
                    var1 = var18.uint32;
                    var32 = var1.bind(var18)();
                    var30 = var0.bannedUntil;
                    var34 = var24;
                    var33 = var18;
                    var31 = var17;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.bannedUntil = var1;
                    var21 = var4;
                    var20 = var3;
                    var19 = var2;
                case 547:
                    var1 = var18.pos;
                    var4 = var21;
                    var3 = var20;
                    var2 = var19;
                    if (var1 < var15) {
                        _fun18378_ip = 87;
                        continue _fun18378
                    }
                case 568:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun18379: for (var _fun18379_ip = 0;;) switch (_fun18379_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.bannedUntil;
                    if (!var2) {
                        _fun18379_ip = 124;
                        continue _fun18379
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.bannedUntil;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var2 = var4.classificationTypes;
                    var2 = var2.length;
                    if (!var2) {
                        _fun18379_ip = 269;
                        continue _fun18379
                    }
                case 141:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.LengthDelimited;
                    var2 = 2;
                    var3 = var5.bind(var0)(var2, var3);
                    var2 = var3.fork;
                    var2 = var2.bind(var3)();
                    var2 = var4.classificationTypes;
                    var2 = var2.length;
                    var3 = 0;
                    var2 = var3 < var2;
                    if (!var2) {
                        _fun18379_ip = 260;
                        continue _fun18379
                    }
                case 221:
                    var5 = var0.int32;
                    var2 = var4.classificationTypes;
                    var2 = var2[var3];
                    var2 = var5.bind(var0)(var2);
                    var3 = var3 + 1;
                    var2 = var4.classificationTypes;
                    var2 = var2.length;
                    if (var3 < var2) {
                        _fun18379_ip = 221;
                        continue _fun18379
                    }
                case 260:
                    var2 = var0.join;
                    var2 = var2.bind(var0)();
                case 269:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18379_ip = 343;
                        continue _fun18379
                    }
                case 281:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18379_ip = 325;
                        continue _fun18379
                    }
                case 288:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 325:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 343:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var20 = var4;
    var3 = new var20[var3](var19);
    var4 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot13 = var4;
    var3 = var12[var13];
    var3 = var11.bind(var0)(var3);
    var14 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot15;
            var0 = {
                'no': 1,
                'name': 'classification_types',
                'kind': 'enum',
                'repeat': 1
            };
            var5 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.ClassificationType;
                var0 = ['discord_protos.safety_common.v1.ClassificationType'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.safety_common.v1.BannedState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun18383: for (var _fun18383_ip = 0;;) switch (_fun18383_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.classificationTypes = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18383_ip = 119;
                        continue _fun18383
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun18384: for (var _fun18384_ip = 0;;) switch (_fun18384_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18384_ip = 27;
                        continue _fun18384
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18384_ip = 480;
                        continue _fun18384
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var6];
                    var21 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun18384_ip = 309;
                        continue _fun18384
                    }
                case 118:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun18384_ip = 229;
                        continue _fun18384
                    }
                case 128:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun18384_ip = 459;
                        continue _fun18384
                    }
                case 155:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun18384_ip = 191;
                        continue _fun18384
                    }
                case 162:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 191:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun18384_ip = 459;
                    continue _fun18384;
                case 229:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 309:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun18384_ip = 378;
                        continue _fun18384
                    }
                case 341:
                    var22 = var0.classificationTypes;
                    var21 = var22.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun18384_ip = 459;
                    continue _fun18384;
                case 378:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun18384_ip = 459;
                        continue _fun18384
                    }
                case 415:
                    var23 = var0.classificationTypes;
                    var22 = var23.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun18384_ip = 415;
                        continue _fun18384
                    }
                case 459:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18384_ip = 84;
                        continue _fun18384
                    }
                case 480:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun18385: for (var _fun18385_ip = 0;;) switch (_fun18385_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.classificationTypes;
                    var1 = var1.length;
                    if (!var1) {
                        _fun18385_ip = 151;
                        continue _fun18385
                    }
                case 23:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.classificationTypes;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun18385_ip = 142;
                        continue _fun18385
                    }
                case 103:
                    var3 = var0.int32;
                    var1 = var4.classificationTypes;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.classificationTypes;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun18385_ip = 103;
                        continue _fun18385
                    }
                case 142:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 151:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18385_ip = 228;
                        continue _fun18385
                    }
                case 166:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18385_ip = 210;
                        continue _fun18385
                    }
                case 173:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 210:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 228:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var14);
    var14 = var3.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var3
        }
    });
    var20 = var14;
    var3 = new var20[var3](var19);
    var3 = var3 instanceof Object ? var3 : var14;
    var _closure1_slot14 = var3;
    var13 = var12[var13];
    var13 = var11.bind(var0)(var13);
    var13 = var13.MessageType;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot15;
            var0 = {
                'no': 101,
                'name': 'normal',
                'kind': 'message',
                'oneof': 'state'
            };
            var5 = function() {
                var0 = _closure1_slot10;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(8);
            var5[0] = var0;
            var0 = {
                'no': 102,
                'name': 'restricted',
                'kind': 'message',
                'oneof': 'state'
            };
            var7 = function() {
                var0 = _closure1_slot11;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 103,
                'name': 'deferred_action',
                'kind': 'message',
                'oneof': 'state'
            };
            var7 = function() {
                var0 = _closure1_slot12;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 104,
                'name': 'temp_banned',
                'kind': 'message',
                'oneof': 'state'
            };
            var7 = function() {
                var0 = _closure1_slot13;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 105,
                'name': 'banned',
                'kind': 'message',
                'oneof': 'state'
            };
            var7 = function() {
                var0 = _closure1_slot14;
                return var0;
            };
            var0.T = var7;
            var5[4] = var0;
            var0 = {
                'no': 1,
                'name': 'reason',
                'kind': 'enum'
            };
            var7 = function() {
                var1 = _closure1_slot8;
                var0 = ['discord_protos.safety_common.v1.SafetyStateReason'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[5] = var0;
            var0 = {
                'no': 2,
                'name': 'annotations',
                'kind': 'enum',
                'repeat': 1
            };
            var7 = function() {
                var1 = _closure1_slot9;
                var0 = ['discord_protos.safety_common.v1.SafetyAnnotations'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[6] = var0;
            var0 = {
                'no': 3,
                'name': 'last_mutation_id',
                'kind': 'message'
            };
            var6 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt64Value;
                return var0;
            };
            var0.T = var6;
            var5[7] = var0;
            var0 = ['discord_protos.safety_common.v1.SafetyState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun18396: for (var _fun18396_ip = 0;;) switch (_fun18396_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var5 = undefined;
                    var1.oneofKind = var5;
                    var0.state = var1;
                    var1 = 0;
                    var0.reason = var1;
                    var1 = new Array(0);
                    var0.annotations = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18396_ip = 137;
                        continue _fun18396
                    }
                case 107:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 137:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun18397: for (var _fun18397_ip = 0;;) switch (_fun18397_ip) {
                case 0:
                    var29 = arg0;
                    var28 = arg2;
                    var0 = arg3;
                    var27 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18397_ip = 27;
                        continue _fun18397
                    }
                case 18:
                    var1 = var27.create;
                    var0 = var1.bind(var27)();
                case 27:
                    var2 = var29.pos;
                    var1 = arg1;
                    var26 = var2 + var1;
                    var1 = var29.pos;
                    var1 = var1 < var26;
                    var25 = undefined;
                    var24 = 'normal';
                    var22 = 'restricted';
                    var21 = 'deferredAction';
                    var20 = 'tempBanned';
                    var19 = 'banned';
                    var18 = 6;
                    var17 = 9;
                    var16 = true;
                    var15 = false;
                    var14 = 'throw';
                    var13 = 3;
                    var12 = 2;
                    var11 = 1;
                    var10 = 105;
                    var9 = 104;
                    var8 = 103;
                    var7 = 102;
                    var6 = 101;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18397_ip = 1061;
                        continue _fun18397
                    }
                case 125:
                    var1 = var29.tag;
                    var30 = var1.bind(var29)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var25)(var30, var12);
                    var39 = var1[var5];
                    var33 = var1[var11];
                    if (!(var6 !== var39)) {
                        _fun18397_ip = 969;
                        continue _fun18397
                    }
                case 159:
                    if (!(var7 !== var39)) {
                        _fun18397_ip = 896;
                        continue _fun18397
                    }
                case 166:
                    if (!(var8 !== var39)) {
                        _fun18397_ip = 820;
                        continue _fun18397
                    }
                case 173:
                    if (!(var9 !== var39)) {
                        _fun18397_ip = 744;
                        continue _fun18397
                    }
                case 180:
                    if (!(var10 !== var39)) {
                        _fun18397_ip = 668;
                        continue _fun18397
                    }
                case 187:
                    if (!(var11 !== var39)) {
                        _fun18397_ip = 638;
                        continue _fun18397
                    }
                case 194:
                    if (!(var12 !== var39)) {
                        _fun18397_ip = 477;
                        continue _fun18397
                    }
                case 201:
                    if (!(var13 !== var39)) {
                        _fun18397_ip = 399;
                        continue _fun18397
                    }
                case 208:
                    var34 = var28.readUnknownField;
                    if (!(var14 !== var34)) {
                        _fun18397_ip = 319;
                        continue _fun18397
                    }
                case 218:
                    var1 = var29.skip;
                    var1 = var1.bind(var29)(var33);
                    var32 = var4;
                    var31 = var34;
                    var30 = var1;
                    if (!(var15 !== var34)) {
                        _fun18397_ip = 1040;
                        continue _fun18397
                    }
                case 245:
                    var36 = var34;
                    if (!(var16 === var34)) {
                        _fun18397_ip = 281;
                        continue _fun18397
                    }
                case 252:
                    var37 = _closure1_slot0;
                    var35 = _closure1_slot1;
                    var35 = var35[var18];
                    var35 = var37.bind(var25)(var35);
                    var35 = var35.UnknownFieldHandler;
                    var36 = var35.onRead;
                case 281:
                    var44 = var27.typeName;
                    var45 = undefined;
                    var43 = var0;
                    var42 = var39;
                    var41 = var33;
                    var40 = var1;
                    var35 = var45[var36](var44, var43, var42, var41, var40, var39);
                    var32 = var4;
                    var31 = var34;
                    var30 = var1;
                    _fun18397_ip = 1040;
                    continue _fun18397;
                case 319:
                    var1 = global;
                    var34 = var1.globalThis;
                    var35 = var34.Error;
                    var40 = var27.typeName;
                    var1 = var1.HermesInternal;
                    var37 = var1.concat;
                    var45 = 'Unknown field ';
                    var43 = ' (wire type ';
                    var41 = ') for ';
                    var44 = var39;
                    var42 = var33;
                    var44 = var45[var37](var44, var43, var42, var41, var40, var39);
                    var34 = var35.prototype;
                    var34 = Object.create(var34, {
                        constructor: {
                            value: var35
                        }
                    });
                    var45 = var34;
                    var1 = new var45[var35](var44, var43);
                    var1 = var1 instanceof Object ? var1 : var34;
                    throw var1;
                case 399:
                    var34 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var17];
                    var1 = var34.bind(var25)(var1);
                    var36 = var1.UInt64Value;
                    var35 = var36.internalBinaryRead;
                    var1 = var29.uint32;
                    var43 = var1.bind(var29)();
                    var41 = var0.lastMutationId;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var1 = var45[var35](var44, var43, var42, var41, var40);
                    var0.lastMutationId = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18397_ip = 1040;
                    continue _fun18397;
                case 477:
                    var34 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var18];
                    var1 = var34.bind(var25)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var33 !== var1)) {
                        _fun18397_ip = 549;
                        continue _fun18397
                    }
                case 509:
                    var34 = var0.annotations;
                    var33 = var34.push;
                    var1 = var29.int32;
                    var1 = var1.bind(var29)();
                    var1 = var33.bind(var34)(var1);
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18397_ip = 1040;
                    continue _fun18397;
                case 549:
                    var1 = var29.int32;
                    var33 = var1.bind(var29)();
                    var1 = var29.pos;
                    var33 = var33 + var1;
                    var1 = var29.pos;
                    var31 = var3;
                    var30 = var2;
                    var32 = var33;
                    if (!(var1 < var32)) {
                        _fun18397_ip = 1040;
                        continue _fun18397
                    }
                case 589:
                    var35 = var0.annotations;
                    var34 = var35.push;
                    var1 = var29.int32;
                    var1 = var1.bind(var29)();
                    var1 = var34.bind(var35)(var1);
                    var1 = var29.pos;
                    var32 = var33;
                    var31 = var3;
                    var30 = var2;
                    if (var1 < var33) {
                        _fun18397_ip = 589;
                        continue _fun18397
                    }
                case 633:
                    _fun18397_ip = 1040;
                    continue _fun18397;
                case 638:
                    var1 = var29.int32;
                    var1 = var1.bind(var29)();
                    var0.reason = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18397_ip = 1040;
                    continue _fun18397;
                case 668:
                    var1 = {};
                    var1.oneofKind = var19;
                    var36 = _closure1_slot14;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.banned;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.banned = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18397_ip = 1040;
                    continue _fun18397;
                case 744:
                    var1 = {};
                    var1.oneofKind = var20;
                    var36 = _closure1_slot13;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.tempBanned;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.tempBanned = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18397_ip = 1040;
                    continue _fun18397;
                case 820:
                    var1 = {};
                    var1.oneofKind = var21;
                    var36 = _closure1_slot12;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.deferredAction;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.deferredAction = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18397_ip = 1040;
                    continue _fun18397;
                case 896:
                    var1 = {};
                    var1.oneofKind = var22;
                    var36 = _closure1_slot11;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.restricted;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.restricted = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18397_ip = 1040;
                    continue _fun18397;
                case 969:
                    var1 = {};
                    var1.oneofKind = var24;
                    var36 = _closure1_slot10;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.normal;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.normal = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                case 1040:
                    var1 = var29.pos;
                    var4 = var32;
                    var3 = var31;
                    var2 = var30;
                    if (var1 < var26) {
                        _fun18397_ip = 125;
                        continue _fun18397
                    }
                case 1061:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun18398: for (var _fun18398_ip = 0;;) switch (_fun18398_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'normal';
                    if (!(var2 === var3)) {
                        _fun18398_ip = 125;
                        continue _fun18398
                    }
                case 28:
                    var6 = _closure1_slot10;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.normal;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 101;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 125:
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'restricted';
                    if (!(var2 === var3)) {
                        _fun18398_ip = 241;
                        continue _fun18398
                    }
                case 144:
                    var6 = _closure1_slot11;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.restricted;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 102;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 241:
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'deferredAction';
                    if (!(var2 === var3)) {
                        _fun18398_ip = 357;
                        continue _fun18398
                    }
                case 260:
                    var6 = _closure1_slot12;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.deferredAction;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 103;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 357:
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'tempBanned';
                    if (!(var2 === var3)) {
                        _fun18398_ip = 473;
                        continue _fun18398
                    }
                case 376:
                    var6 = _closure1_slot13;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.tempBanned;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 104;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 473:
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'banned';
                    if (!(var2 === var3)) {
                        _fun18398_ip = 589;
                        continue _fun18398
                    }
                case 492:
                    var6 = _closure1_slot14;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.banned;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 105;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 589:
                    var2 = var4.reason;
                    var3 = 0;
                    if (!(var3 !== var2)) {
                        _fun18398_ip = 668;
                        continue _fun18398
                    }
                case 601:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.Varint;
                    var2 = 1;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.int32;
                    var2 = var4.reason;
                    var2 = var5.bind(var6)(var2);
                case 668:
                    var2 = var4.annotations;
                    var2 = var2.length;
                    if (!var2) {
                        _fun18398_ip = 813;
                        continue _fun18398
                    }
                case 685:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 2;
                    var5 = var6.bind(var0)(var2, var5);
                    var2 = var5.fork;
                    var2 = var2.bind(var5)();
                    var2 = var4.annotations;
                    var2 = var2.length;
                    var2 = var3 < var2;
                    var3 = 0;
                    if (!var2) {
                        _fun18398_ip = 804;
                        continue _fun18398
                    }
                case 765:
                    var5 = var0.int32;
                    var2 = var4.annotations;
                    var2 = var2[var3];
                    var2 = var5.bind(var0)(var2);
                    var3 = var3 + 1;
                    var2 = var4.annotations;
                    var2 = var2.length;
                    if (var3 < var2) {
                        _fun18398_ip = 765;
                        continue _fun18398
                    }
                case 804:
                    var2 = var0.join;
                    var2 = var2.bind(var0)();
                case 813:
                    var2 = var4.lastMutationId;
                    if (!var2) {
                        _fun18398_ip = 928;
                        continue _fun18398
                    }
                case 822:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 9;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt64Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.lastMutationId;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 928:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18398_ip = 1002;
                        continue _fun18398
                    }
                case 940:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18398_ip = 984;
                        continue _fun18398
                    }
                case 947:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 984:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 1002:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var13);
    var13 = var1.prototype;
    var13 = Object.create(var13, {
        constructor: {
            value: var1
        }
    });
    var20 = var13;
    var1 = new var20[var1](var19);
    var1 = var1 instanceof Object ? var1 : var13;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = '../discord_common/js/packages/protos/discord_protos/safety_common/v1/safety_state.tsx';
    var10 = var11.bind(var12)(var10);
    var2.SafetyStateReason = var9;
    var2.SafetyAnnotations = var8;
    var2.NormalState = var7;
    var2.RestrictedState = var6;
    var2.DeferredActionState = var5;
    var2.TempBannedState = var4;
    var2.BannedState = var3;
    var2.SafetyState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1313, 1341, 1639, 1342, 2]);