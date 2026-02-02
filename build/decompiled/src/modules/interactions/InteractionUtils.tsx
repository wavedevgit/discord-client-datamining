// modules/interactions/InteractionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var10;
    var0 = function arg0, arg1() {
        _fun55986: for (var _fun55986_ip = 0;;) switch (_fun55986_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55986_ip = 46;
                    continue _fun55986
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun55986_ip = 55;
                    continue _fun55986
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun55986_ip = 343;
                    continue _fun55986
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55986_ip = 323;
                    continue _fun55986
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55986_ip = 283;
                    continue _fun55986
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55986_ip = 270;
                    continue _fun55986
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun55986_ip = 163;
                    continue _fun55986
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun55986_ip = 179;
                    continue _fun55986
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55986_ip = 249;
                    continue _fun55986
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55986_ip = 249;
                    continue _fun55986
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55986_ip = 234;
                    continue _fun55986
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55986_ip = 247;
                    continue _fun55986
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun55986_ip = 265;
                continue _fun55986;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun55986_ip = 283;
                continue _fun55986;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun55986_ip = 323;
                    continue _fun55986
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun55986_ip = 330;
                    continue _fun55986
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55987: for (var _fun55987_ip = 0;;) switch (_fun55987_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55987_ip = 56;
                                continue _fun55987
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun55987_ip = 67;
                            continue _fun55987;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun55988: for (var _fun55988_ip = 0;;) switch (_fun55988_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55988_ip = 23;
                    continue _fun55988
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55988_ip = 33;
                    continue _fun55988
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun55988_ip = 70;
                    continue _fun55988
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55988_ip = 55;
                    continue _fun55988
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var7 = function arg0() {
        _fun55989: for (var _fun55989_ip = 0;;) switch (_fun55989_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun55989_ip = 87;
                    continue _fun55989
                }
            case 9:
                var0 = '';
                if (!(var0 !== var2)) {
                    _fun55989_ip = 87;
                    continue _fun55989
                }
            case 17:
                var0 = global;
                var1 = var0.Number;
                var0 = var1.isNaN;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun55989_ip = 87;
                    continue _fun55989
                }
            case 39:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.extractTimestamp;
                var1 = var0.bind(var1)(var2);
                var0 = 900000;
                var0 = var1 + var0;
                _fun55989_ip = 104;
                continue _fun55989;
            case 87:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var0 = var1.bind(var2)();
            case 104:
                return var0;
        }
    };
    var _closure1_slot16 = var7;
    var6 = function arg0() {
        _fun55990: for (var _fun55990_ip = 0;;) switch (_fun55990_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun55990_ip = 87;
                    continue _fun55990
                }
            case 9:
                var0 = '';
                if (!(var0 !== var2)) {
                    _fun55990_ip = 87;
                    continue _fun55990
                }
            case 17:
                var0 = global;
                var1 = var0.Number;
                var0 = var1.isNaN;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun55990_ip = 87;
                    continue _fun55990
                }
            case 39:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.extractTimestamp;
                var1 = var0.bind(var1)(var2);
                var0 = 3000;
                var0 = var1 + var0;
                _fun55990_ip = 104;
                continue _fun55990;
            case 87:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var0 = var1.bind(var2)();
            case 104:
                return var0;
        }
    };
    var _closure1_slot17 = var6;
    var0 = function arg0() {
        _fun55991: for (var _fun55991_ip = 0;;) switch (_fun55991_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun55991_ip = 419;
                    continue _fun55991
                }
            case 12:
                var3 = var1.type;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = 8;
                var4 = var4[var6];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var4 = var4.ComponentType;
                var4 = var4.TEXT_INPUT;
                if (!(var4 !== var3)) {
                    _fun55991_ip = 417;
                    continue _fun55991
                }
            case 61:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.ComponentType;
                var4 = var4.FILE_UPLOAD;
                if (!(var4 !== var3)) {
                    _fun55991_ip = 417;
                    continue _fun55991
                }
            case 97:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.ComponentType;
                var4 = var4.RADIO_GROUP;
                if (!(var4 !== var3)) {
                    _fun55991_ip = 417;
                    continue _fun55991
                }
            case 133:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.ComponentType;
                var4 = var4.CHECKBOX_GROUP;
                if (!(var4 !== var3)) {
                    _fun55991_ip = 417;
                    continue _fun55991
                }
            case 169:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.ComponentType;
                var4 = var4.CHECKBOX;
                if (!(var4 !== var3)) {
                    _fun55991_ip = 417;
                    continue _fun55991
                }
            case 205:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.ComponentType;
                var4 = var4.STRING_SELECT;
                if (!(var4 !== var3)) {
                    _fun55991_ip = 415;
                    continue _fun55991
                }
            case 241:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.ComponentType;
                var4 = var4.USER_SELECT;
                if (!(var4 !== var3)) {
                    _fun55991_ip = 375;
                    continue _fun55991
                }
            case 274:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.ComponentType;
                var4 = var4.ROLE_SELECT;
                if (!(var4 !== var3)) {
                    _fun55991_ip = 375;
                    continue _fun55991
                }
            case 307:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.ComponentType;
                var4 = var4.MENTIONABLE_SELECT;
                if (!(var4 !== var3)) {
                    _fun55991_ip = 375;
                    continue _fun55991
                }
            case 340:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHANNEL_SELECT;
                if (!(var2 !== var3)) {
                    _fun55991_ip = 375;
                    continue _fun55991
                }
            case 373:
                return var0;
            case 375:
                var4 = var1.selectedOptions;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.value;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var4 = var1.type;
                var2.type = var4;
                var2.values = var3;
                return var2;
            case 415:
                return var1;
            case 417:
                return var0;
            case 419:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var15 = 0;
    var3 = var10[var15];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 1;
    var3 = var10[var14];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var13 = 2;
    var3 = var10[var13];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var12 = 3;
    var3 = var10[var12];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var11 = 4;
    var3 = var10[var11];
    var3 = var9.bind(var0)(var3);
    var4 = var3.Endpoints;
    var _closure1_slot7 = var4;
    var4 = var3.AbortCodes;
    var _closure1_slot8 = var4;
    var4 = var3.MessageStates;
    var _closure1_slot9 = var4;
    var3 = var3.MessageFlags;
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun55995: for (var _fun55995_ip = 0;;) switch (_fun55995_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55995_ip = 573;
                            continue _fun55995
                        }
                    case 15:
                        var12 = var1.componentType;
                        var13 = var1.messageId;
                        var14 = var1.messageFlags;
                        var10 = var1.customId;
                        var8 = var1.componentId;
                        var5 = var1.applicationId;
                        var _closure4_slot0 = var5;
                        var15 = var1.channelId;
                        var _closure4_slot1 = var15;
                        var16 = var1.guildId;
                        var _closure4_slot2 = var16;
                        var11 = var1.localState;
                        var4 = undefined;
                        var _closure4_slot3 = var4;
                        SaveGenerator(address = 87);
                    case 85:
                        return var4;
                    case 87:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55995_ip = 570;
                            continue _fun55995
                        }
                    case 96:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.fromTimestamp;
                        var2 = global;
                        var17 = var2.Date;
                        var2 = var17.now;
                        var2 = var2.bind(var17)();
                        var17 = var6.bind(var7)(var2);
                        _closure4_slot3 = var17;
                        var6 = _closure1_slot6;
                        var2 = var6.canQueueInteraction;
                        var2 = var2.bind(var6)(var13, var17);
                        if (!var2) {
                            _fun55995_ip = 561;
                            continue _fun55995
                        }
                    case 175:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var2 = var7[var2];
                        var6 = var6.bind(var4)(var2);
                        var2 = var6.unarchiveThreadIfNecessary;
                        var2 = var2.bind(var6)(var15);
                        SaveGenerator(address = 210);
                    case 208:
                        return var2;
                    case 210:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun55995_ip = 567;
                            continue _fun55995
                        }
                    case 219:
                        var23 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var19 = 7;
                        var6 = var22[var19];
                        var20 = var23.bind(var4)(var6);
                        var7 = var20.addQueued;
                        var6 = {};
                        var6.messageId = var13;
                        var21 = {};
                        var18 = 8;
                        var22 = var22[var18];
                        var22 = var23.bind(var4)(var22);
                        var22 = var22.InteractionTypes;
                        var22 = var22.MESSAGE_COMPONENT;
                        var21.interactionType = var22;
                        var21.applicationId = var5;
                        var21.customId = var10;
                        var21.componentId = var8;
                        var6.data = var21;
                        var21 = function arg0, arg1() {
                            var4 = _closure1_slot11;
                            var3 = _closure4_slot1;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var4.bind(var2)(var3, var1, var0);
                            return var0;
                        };
                        var6.onFailure = var21;
                        var6 = var7.bind(var20)(var17, var6);
                        var6 = null;
                        if (!(var6 != var11)) {
                            _fun55995_ip = 364;
                            continue _fun55995
                        }
                    case 322:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var19];
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.queueInteractionComponentState;
                        var28 = var7;
                        var27 = var13;
                        var26 = var17;
                        var25 = var11;
                        var24 = var8;
                        var6 = var28[var6](var27, var26, var25, var24, var23);
                    case 364:
                        var8 = {};
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var18 = var7[var18];
                        var18 = var6.bind(var4)(var18);
                        var18 = var18.InteractionTypes;
                        var18 = var18.MESSAGE_COMPONENT;
                        var8.type = var18;
                        var8.nonce = var17;
                        var8.guild_id = var16;
                        var8.channel_id = var15;
                        var8.message_flags = var14;
                        var8.message_id = var13;
                        var8.application_id = var5;
                        var13 = _closure1_slot5;
                        var5 = var13.getSessionId;
                        var5 = var5.bind(var13)();
                        var8.session_id = var5;
                        var5 = {};
                        var5.component_type = var12;
                        var5.custom_id = var10;
                        var10 = _closure1_slot18;
                        var26 = var10.bind(var4)(var11);
                        var27 = var5;
                        var10 = copyDataProperties(var27, var26);
                        var8.data = var5;
                        var5 = 9;
                        var5 = var7[var5];
                        var5 = var6.bind(var4)(var5);
                        var7 = var5.HTTP;
                        var6 = var7.post;
                        var5 = {};
                        var9 = _closure1_slot7;
                        var9 = var9.INTERACTIONS;
                        var5.url = var9;
                        var5.body = var8;
                        var8 = 3000;
                        var5.timeout = var8;
                        var8 = false;
                        var5.rejectWithError = var8;
                        var3 = function(arg0) { // Environment: var3
                            var6 = _closure1_slot12;
                            var11 = _closure4_slot3;
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot1;
                            var7 = _closure4_slot2;
                            var0 = undefined;
                            var10 = arg0;
                            var12 = undefined;
                            var1 = var12[var6](var11, var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var3 = var6.bind(var7)(var5, var3);
                        SaveGenerator(address = 555);
                    case 553:
                        return var3;
                    case 555:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun55995_ip = 564;
                            continue _fun55995
                        }
                    case 561:
                        return var4;
                    case 564:
                        return var3;
                    case 567:
                        return var2;
                    case 570:
                        return var1;
                    case 573:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var5 = var3.bind(var0)();
    var3 = function arg0, arg1, arg2() {
        _fun55999: for (var _fun55999_ip = 0;;) switch (_fun55999_ip) {
            case 0:
                var3 = arg1;
                var1 = null;
                var0 = arg2;
                var0 = var1 == var0;
                if (!var0) {
                    _fun55999_ip = 19;
                    continue _fun55999
                }
            case 15:
                var0 = var1 != var3;
            case 19:
                if (!var0) {
                    _fun55999_ip = 62;
                    continue _fun55999
                }
            case 22:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.sendClydeError;
                var0 = arg0;
                var0 = var1.bind(var2)(var0, var3);
            case 62:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var4 = function arg0, arg1, arg2, arg3, arg4() {
        _fun56000: for (var _fun56000_ip = 0;;) switch (_fun56000_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var10 = arg2;
                var8 = arg3;
                var9 = arg4;
                var1 = var0.ok;
                if (var1) {
                    _fun56000_ip = 632;
                    continue _fun56000
                }
            case 27:
                var1 = var0.hasErr;
                if (var1) {
                    _fun56000_ip = 596;
                    continue _fun56000
                }
            case 39:
                var3 = var0.status;
                var1 = 400;
                if (!(var3 >= var1)) {
                    _fun56000_ip = 77;
                    continue _fun56000
                }
            case 54:
                var3 = var0.status;
                var1 = 500;
                if (!(var3 < var1)) {
                    _fun56000_ip = 77;
                    continue _fun56000
                }
            case 69:
                var1 = var0.body;
                if (var1) {
                    _fun56000_ip = 137;
                    continue _fun56000
                }
            case 77:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.setFailed;
                var5 = var0.body;
                var6 = null;
                var6 = var6 == var5;
                if (var6) {
                    _fun56000_ip = 127;
                    continue _fun56000
                }
            case 122:
                var1 = var5.code;
            case 127:
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            case 137:
                var1 = var0.body;
                var4 = var1.code;
                var3 = _closure1_slot8;
                var3 = var3.INVALID_FORM_BODY;
                if (!(var4 === var3)) {
                    _fun56000_ip = 181;
                    continue _fun56000
                }
            case 164:
                var3 = var0.body;
                var3 = var3.errors;
                if (var3) {
                    _fun56000_ip = 387;
                    continue _fun56000
                }
            case 181:
                var3 = var0.body;
                var4 = var3.code;
                var3 = _closure1_slot8;
                var3 = var3.UNKNOWN_INTEGRATION;
                if (!(var4 !== var3)) {
                    _fun56000_ip = 272;
                    continue _fun56000
                }
            case 205:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var5.bind(var3)(var4);
                var6 = var7.setFailed;
                var3 = var0.body;
                var15 = var3.code;
                var3 = var0.body;
                var14 = var3.message;
                var13 = var0.status;
                var17 = var7;
                var16 = var2;
                var3 = var17[var6](var16, var15, var14, var13, var12);
                var3 = undefined;
                _fun56000_ip = 385;
                continue _fun56000;
            case 272:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 12;
                var4 = var6[var4];
                var7 = undefined;
                var6 = var5.bind(var7)(var4);
                var5 = var6.dispatch;
                var4 = {};
                var11 = 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION';
                var4.type = var11;
                var4.applicationId = var10;
                var4.channelId = var8;
                var11 = null;
                var12 = var11 != var9;
                if (!var12) {
                    _fun56000_ip = 331;
                    continue _fun56000
                }
            case 328:
                var11 = var9;
            case 331:
                var4.guildId = var11;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 7;
                var4 = var6[var4];
                var6 = var5.bind(var7)(var4);
                var5 = var6.setFailed;
                var4 = var0.body;
                var4 = var4.message;
                var4 = var5.bind(var6)(var2, var7, var4);
                var3 = undefined;
            case 385:
                return var3;
            case 387:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 11;
                var3 = var4[var3];
                var4 = undefined;
                var5 = var5.bind(var4)(var3);
                var3 = var5.getFirstSkemaError;
                var0 = var0.body;
                var0 = var0.errors;
                var5 = var3.bind(var5)(var0);
                var0 = null;
                var3 = var0 == var5;
                if (var3) {
                    _fun56000_ip = 476;
                    continue _fun56000
                }
            case 440:
                var7 = var5.code;
                var6 = 'INTERACTION_APPLICATION_COMMAND_INVALID_VERSION';
                var6 = var6 !== var7;
                if (!var6) {
                    _fun56000_ip = 473;
                    continue _fun56000
                }
            case 458:
                var11 = var5.code;
                var7 = 'INTERACTION_APPLICATION_COMMAND_INVALID';
                var6 = var7 !== var11;
            case 473:
                var3 = var6;
            case 476:
                if (var3) {
                    _fun56000_ip = 545;
                    continue _fun56000
                }
            case 479:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 12;
                var3 = var7[var3];
                var7 = var6.bind(var4)(var3);
                var6 = var7.dispatch;
                var3 = {};
                var11 = 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION';
                var3.type = var11;
                var3.applicationId = var10;
                var3.channelId = var8;
                var10 = var0 != var9;
                var8 = null;
                if (!var10) {
                    _fun56000_ip = 536;
                    continue _fun56000
                }
            case 533:
                var8 = var9;
            case 536:
                var3.guildId = var8;
                var3 = var6.bind(var7)(var3);
            case 545:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.setFailed;
                var6 = var0 == var5;
                var0 = undefined;
                if (var6) {
                    _fun56000_ip = 585;
                    continue _fun56000
                }
            case 580:
                var0 = var5.message;
            case 585:
                var0 = var1.bind(var3)(var2, var4, var0);
                var0 = undefined;
                return var0;
            case 596:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.setFailed;
                var0 = var0.bind(var1)(var2);
            case 632:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var3 = {};
    var3.SENDING = var15;
    var8 = 'SENDING';
    var3[var15] = var8;
    var3.CREATED = var14;
    var8 = 'CREATED';
    var3[var14] = var8;
    var3.FAILED = var13;
    var8 = 'FAILED';
    var3[var13] = var8;
    var3.TIMED_OUT = var12;
    var8 = 'TIMED_OUT';
    var3[var12] = var8;
    var3.EPHEMERAL_SUCCESS = var11;
    var8 = 'EPHEMERAL_SUCCESS';
    var3[var11] = var8;
    var _closure1_slot13 = var3;
    var8 = 16;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/interactions/InteractionUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.getInteractionTimeoutTimestamp = var7;
    var2.getInteractionInitialResponseDeadlineTimestamp = var6;
    var2.executeMessageComponentInteraction = var5;
    var2.handleInteractionResponse = var4;
    var2.InteractionStatusViewState = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun56001: for (var _fun56001_ip = 0;;) switch (_fun56001_ip) {
            case 0:
                var5 = arg0;
                var9 = arg1;
                var2 = null;
                var0 = var2 == var9;
                var3 = undefined;
                var8 = undefined;
                if (var0) {
                    _fun56001_ip = 24;
                    continue _fun56001
                }
            case 19:
                var8 = var9.state;
            case 24:
                var4 = var5.state;
                var0 = _closure1_slot9;
                var0 = var0.SENT;
                var6 = var4 === var0;
                if (!var6) {
                    _fun56001_ip = 84;
                    continue _fun56001
                }
            case 49:
                var4 = _closure1_slot16;
                var0 = var5.id;
                var4 = var4.bind(var3)(var0);
                var0 = global;
                var7 = var0.Date;
                var0 = var7.now;
                var0 = var0.bind(var7)();
                var6 = var4 < var0;
            case 84:
                var4 = var5.state;
                var0 = _closure1_slot9;
                var0 = var0.SEND_FAILED;
                var4 = var4 === var0;
                if (!var4) {
                    _fun56001_ip = 141;
                    continue _fun56001
                }
            case 106:
                var7 = _closure1_slot17;
                var0 = var5.id;
                var7 = var7.bind(var3)(var0);
                var0 = global;
                var10 = var0.Date;
                var0 = var10.now;
                var0 = var0.bind(var10)();
                var4 = var7 < var0;
            case 141:
                var0 = var2 == var9;
                var7 = undefined;
                if (var0) {
                    _fun56001_ip = 161;
                    continue _fun56001
                }
            case 150:
                var0 = var9.data;
                var7 = var0.interactionType;
            case 161:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 8;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var0 = var0.InteractionTypes;
                var0 = var0.APPLICATION_COMMAND;
                var7 = var7 === var0;
                var0 = var5.isCommandType;
                var0 = var0.bind(var5)();
                if (!var7) {
                    _fun56001_ip = 249;
                    continue _fun56001
                }
            case 210:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 13;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.InteractionState;
                var10 = var10.QUEUED;
                if (!(var8 !== var10)) {
                    _fun56001_ip = 538;
                    continue _fun56001
                }
            case 249:
                if (!var0) {
                    _fun56001_ip = 278;
                    continue _fun56001
                }
            case 252:
                var11 = var5.state;
                var10 = _closure1_slot9;
                var10 = var10.SENDING;
                if (!(var11 === var10)) {
                    _fun56001_ip = 278;
                    continue _fun56001
                }
            case 271:
                if (!(var2 == var9)) {
                    _fun56001_ip = 538;
                    continue _fun56001
                }
            case 278:
                if (!var7) {
                    _fun56001_ip = 320;
                    continue _fun56001
                }
            case 281:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 13;
                var7 = var10[var7];
                var7 = var9.bind(var3)(var7);
                var7 = var7.InteractionState;
                var7 = var7.CREATED;
                if (!(var8 !== var7)) {
                    _fun56001_ip = 526;
                    continue _fun56001
                }
            case 320:
                var8 = var5.hasFlag;
                var7 = _closure1_slot10;
                var7 = var7.LOADING;
                var7 = var8.bind(var5)(var7);
                if (!var7) {
                    _fun56001_ip = 350;
                    continue _fun56001
                }
            case 344:
                if (!var6) {
                    _fun56001_ip = 526;
                    continue _fun56001
                }
            case 350:
                var7 = var5.interaction;
                if (!(var2 != var7)) {
                    _fun56001_ip = 390;
                    continue _fun56001
                }
            case 360:
                var8 = var5.hasFlag;
                var7 = _closure1_slot10;
                var7 = var7.LOADING;
                var7 = var8.bind(var5)(var7);
                if (!var7) {
                    _fun56001_ip = 390;
                    continue _fun56001
                }
            case 384:
                if (var6) {
                    _fun56001_ip = 514;
                    continue _fun56001
                }
            case 390:
                var6 = var5.interaction;
                if (!(var2 != var6)) {
                    _fun56001_ip = 427;
                    continue _fun56001
                }
            case 400:
                var7 = var5.hasFlag;
                var6 = _closure1_slot10;
                var6 = var6.LOADING;
                var6 = var7.bind(var5)(var6);
                if (var6) {
                    _fun56001_ip = 427;
                    continue _fun56001
                }
            case 424:
                if (var4) {
                    _fun56001_ip = 514;
                    continue _fun56001
                }
            case 427:
                if (!var0) {
                    _fun56001_ip = 449;
                    continue _fun56001
                }
            case 430:
                var4 = var5.state;
                var0 = _closure1_slot9;
                var0 = var0.SEND_FAILED;
                if (!(var4 !== var0)) {
                    _fun56001_ip = 502;
                    continue _fun56001
                }
            case 449:
                var0 = var5.interaction;
                var2 = var2 != var0;
                var0 = undefined;
                if (!var2) {
                    _fun56001_ip = 500;
                    continue _fun56001
                }
            case 464:
                var4 = var5.hasFlag;
                var2 = _closure1_slot10;
                var2 = var2.EPHEMERAL;
                var2 = var4.bind(var5)(var2);
                var0 = undefined;
                if (!var2) {
                    _fun56001_ip = 500;
                    continue _fun56001
                }
            case 490:
                var2 = _closure1_slot13;
                var0 = var2.EPHEMERAL_SUCCESS;
            case 500:
                _fun56001_ip = 512;
                continue _fun56001;
            case 502:
                var2 = _closure1_slot13;
                var0 = var2.FAILED;
            case 512:
                _fun56001_ip = 524;
                continue _fun56001;
            case 514:
                var2 = _closure1_slot13;
                var0 = var2.TIMED_OUT;
            case 524:
                _fun56001_ip = 536;
                continue _fun56001;
            case 526:
                var2 = _closure1_slot13;
                var0 = var2.CREATED;
            case 536:
                _fun56001_ip = 548;
                continue _fun56001;
            case 538:
                var1 = _closure1_slot13;
                var0 = var1.SENDING;
            case 548:
                return var0;
        }
    };
    var2.getInteractionStatusViewState = var3;
    var3 = function arg0() {
        _fun56002: for (var _fun56002_ip = 0;;) switch (_fun56002_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.options;
                var2 = null;
                var1 = var2 == var10;
                var5 = undefined;
                var0 = undefined;
                if (var1) {
                    _fun56002_ip = 26;
                    continue _fun56002
                }
            case 21:
                var0 = var10.length;
            case 26:
                var9 = 1;
                var1 = var10;
                if (!(var9 === var0)) {
                    _fun56002_ip = 266;
                    continue _fun56002
                }
            case 39:
                var8 = 0;
                var0 = var10[var8];
                var3 = var0.type;
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 8;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.SUB_COMMAND_GROUP;
                var4 = var10;
                if (!(var3 !== var0)) {
                    _fun56002_ip = 143;
                    continue _fun56002
                }
            case 92:
                var0 = var10[var8];
                var3 = var0.type;
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var11.bind(var5)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.SUB_COMMAND;
                var4 = var10;
                var1 = var4;
                if (!(var3 === var0)) {
                    _fun56002_ip = 266;
                    continue _fun56002
                }
            case 143:
                var0 = var4[var8];
                var10 = var0.options;
                var3 = var2 == var10;
                var0 = undefined;
                if (var3) {
                    _fun56002_ip = 166;
                    continue _fun56002
                }
            case 161:
                var0 = var10.length;
            case 166:
                var1 = var10;
                if (!(var9 === var0)) {
                    _fun56002_ip = 266;
                    continue _fun56002
                }
            case 173:
                var0 = var10[var8];
                var3 = var0.type;
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var11.bind(var5)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.SUB_COMMAND_GROUP;
                var4 = var10;
                if (var3 === var0) {
                    _fun56002_ip = 143;
                    continue _fun56002
                }
            case 218:
                var0 = var10[var8];
                var3 = var0.type;
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var11.bind(var5)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.SUB_COMMAND;
                var4 = var10;
                var1 = var4;
                if (var3 === var0) {
                    _fun56002_ip = 143;
                    continue _fun56002
                }
            case 266:
                var0 = _closure1_slot14;
                if (!(var2 == var1)) {
                    _fun56002_ip = 281;
                    continue _fun56002
                }
            case 277:
                var1 = new Array(0);
            case 281:
                var3 = var0.bind(var5)(var1);
                var1 = var3.bind(var5)();
                var0 = var1.done;
                var2 = 8;
                if (var0) {
                    _fun56002_ip = 365;
                    continue _fun56002
                }
            case 301:
                var0 = var1.value;
                var6 = var0.type;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var7.bind(var5)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.ATTACHMENT;
                if (!(var6 !== var0)) {
                    _fun56002_ip = 361;
                    continue _fun56002
                }
            case 344:
                var6 = var3.bind(var5)();
                var0 = var6.done;
                var1 = var6;
                if (var0) {
                    _fun56002_ip = 365;
                    continue _fun56002
                }
            case 359:
                _fun56002_ip = 301;
                continue _fun56002;
            case 361:
                var0 = false;
                return var0;
            case 365:
                var0 = true;
                return var0;
        }
    };
    var2.canRetryInteractionData = var3;
    var1 = function arg0, arg1() {
        _fun56003: for (var _fun56003_ip = 0;;) switch (_fun56003_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 14;
                var0 = var0[var4];
                var6 = undefined;
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.TIMEOUT;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 1064;
                    continue _fun56003
                }
            case 47:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 1007;
                    continue _fun56003
                }
            case 83:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 950;
                    continue _fun56003
                }
            case 119:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 950;
                    continue _fun56003
                }
            case 155:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 893;
                    continue _fun56003
                }
            case 191:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_UNKNOWN_GUILD;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 893;
                    continue _fun56003
                }
            case 227:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 893;
                    continue _fun56003
                }
            case 263:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 893;
                    continue _fun56003
                }
            case 299:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 836;
                    continue _fun56003
                }
            case 335:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 779;
                    continue _fun56003
                }
            case 371:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 722;
                    continue _fun56003
                }
            case 407:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 722;
                    continue _fun56003
                }
            case 443:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 663;
                    continue _fun56003
                }
            case 479:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 606;
                    continue _fun56003
                }
            case 512:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.ReasonCodes;
                var0 = var0.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION;
                if (!(var0 !== var2)) {
                    _fun56003_ip = 547;
                    continue _fun56003
                }
            case 545:
                return var6;
            case 547:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var2 = var5[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.PrHIM5;
                var0 = var2.bind(var3)(var0);
                return var0;
            case 606:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var2 = var5[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.PtobXW;
                var0 = var2.bind(var3)(var0);
                return var0;
            case 663:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var2 = var5[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.WjNAAA;
                var0 = var2.bind(var3)(var0);
                return var0;
            case 722:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var2 = var5[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.uGDCcw;
                var0 = var2.bind(var3)(var0);
                return var0;
            case 779:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var2 = var5[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.RvkXdb;
                var0 = var2.bind(var3)(var0);
                return var0;
            case 836:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var2 = var5[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0["4WuFRE"];
                var0 = var2.bind(var3)(var0);
                return var0;
            case 893:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var2 = var5[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.j29zCr;
                var0 = var2.bind(var3)(var0);
                return var0;
            case 950:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var2 = var5[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.hHGrWz;
                var0 = var2.bind(var3)(var0);
                return var0;
            case 1007:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var2 = var5[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.GyzcrS;
                var0 = var2.bind(var3)(var0);
                return var0;
            case 1064:
                var3 = _closure1_slot4;
                var2 = var3.getApplication;
                var0 = arg1;
                var5 = var2.bind(var3)(var0);
                var0 = null;
                if (!(var0 == var5)) {
                    _fun56003_ip = 1147;
                    continue _fun56003
                }
            case 1088:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 15;
                var2 = var7[var0];
                var2 = var4.bind(var6)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var7[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0["vGU8+r"];
                var0 = var2.bind(var3)(var0);
                _fun56003_ip = 1217;
                continue _fun56003;
            case 1147:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1.u2D2Uj;
                var1 = {};
                var5 = var5.name;
                var1.applicationName = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1217:
                return var0;
        }
    };
    var2.interactionCallbackErrorReason = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3415, 1216, 6489, 660, 21, 6431, 6757, 1636, 507, 6490, 6758, 806, 3937, 6759, 1234, 2]);