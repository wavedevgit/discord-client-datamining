// modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun92251: for (var _fun92251_ip = 0;;) switch (_fun92251_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun92251_ip = 46;
                    continue _fun92251
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun92251_ip = 55;
                    continue _fun92251
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun92251_ip = 345;
                    continue _fun92251
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun92251_ip = 323;
                    continue _fun92251
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun92251_ip = 283;
                    continue _fun92251
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun92251_ip = 270;
                    continue _fun92251
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
                    _fun92251_ip = 163;
                    continue _fun92251
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun92251_ip = 179;
                    continue _fun92251
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun92251_ip = 249;
                    continue _fun92251
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun92251_ip = 249;
                    continue _fun92251
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun92251_ip = 234;
                    continue _fun92251
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun92251_ip = 247;
                    continue _fun92251
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun92251_ip = 265;
                continue _fun92251;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun92251_ip = 283;
                continue _fun92251;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun92251_ip = 323;
                    continue _fun92251
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
                    _fun92251_ip = 330;
                    continue _fun92251
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun92252: for (var _fun92252_ip = 0;;) switch (_fun92252_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun92252_ip = 56;
                                continue _fun92252
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
                            _fun92252_ip = 67;
                            continue _fun92252;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun92253: for (var _fun92253_ip = 0;;) switch (_fun92253_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun92253_ip = 23;
                    continue _fun92253
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun92253_ip = 33;
                    continue _fun92253
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
                    _fun92253_ip = 70;
                    continue _fun92253
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun92253_ip = 55;
                    continue _fun92253
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var9 = var0.searchQuery;
        var _closure2_slot0 = var9;
        var1 = var0.selectedUsers;
        var _closure2_slot1 = var1;
        var11 = var0.limit;
        var _closure2_slot2 = var11;
        var2 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 4;
        var0 = var12[var1];
        var10 = undefined;
        var8 = var2.bind(var10)(var0);
        var7 = var8.useStateFromStores;
        var0 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var0;
        var3 = function() { // Environment: var4
            var1 = _closure1_slot6;
            var0 = var1.getRecipientStatus;
            var0 = var0.bind(var1)();
            return var0;
        };
        var3 = var7.bind(var8)(var5, var3);
        var _closure2_slot3 = var3;
        var1 = var12[var1];
        var3 = var2.bind(var10)(var1);
        var2 = var3.useStateFromStores;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var4
            var1 = _closure1_slot6;
            var0 = var1.getReferralsRemaining;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        var _closure2_slot4 = var0;
        var8 = _closure1_slot5;
        var2 = var8.useState;
        var1 = 0;
        var2 = var2.bind(var8)(var1);
        var15 = _closure1_slot4;
        var14 = 2;
        var2 = var15.bind(var10)(var2, var14);
        var3 = var2[var1];
        var _closure2_slot5 = var3;
        var13 = 1;
        var2 = var2[var13];
        var _closure2_slot6 = var2;
        var3 = var8.useState;
        var2 = new Array(0);
        var2 = var3.bind(var8)(var2);
        var2 = var15.bind(var10)(var2, var14);
        var5 = var2[var1];
        var2 = var2[var13];
        var _closure2_slot7 = var2;
        var2 = var8.useState;
        var7 = false;
        var2 = var2.bind(var8)(var7);
        var3 = var15.bind(var10)(var2, var14);
        var2 = var3[var1];
        var _closure2_slot8 = var2;
        var3 = var3[var13];
        var _closure2_slot9 = var3;
        var3 = var8.useState;
        var3 = var3.bind(var8)(var7);
        var7 = var15.bind(var10)(var3, var14);
        var3 = var7[var1];
        var _closure2_slot10 = var3;
        var7 = var7[var13];
        var _closure2_slot11 = var7;
        var16 = var8.useState;
        var7 = global;
        var7 = var7.Map;
        var17 = var7.prototype;
        var17 = Object.create(var17, {
            constructor: {
                value: var7
            }
        });
        var20 = var17;
        var7 = new var20[var7](var19);
        var7 = var7 instanceof Object ? var7 : var17;
        var7 = var16.bind(var8)(var7);
        var7 = var15.bind(var10)(var7, var14);
        var1 = var7[var1];
        var _closure2_slot12 = var1;
        var7 = var7[var13];
        var _closure2_slot13 = var7;
        var7 = _closure1_slot1;
        var6 = 5;
        var6 = var12[var6];
        var12 = var7.bind(var10)(var6);
        var6 = null;
        var7 = var6 != var0;
        var6 = 'Referrals remaining should not be null';
        var6 = var12.bind(var10)(var7, var6);
        var6 = function() { // Environment: var4
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun92259: for (var _fun92259_ip = 0;;) switch (_fun92259_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun92259_ip = 284;
                                continue _fun92259
                            }
                        case 10:
                            var2 = global;
                            var1 = var2.Map;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var19 = var3;
                            var1 = new var19[var1](var18);
                            var6 = var1 instanceof Object ? var1 : var3;
                            var5 = _closure1_slot7;
                            var4 = _closure2_slot3;
                            var1 = undefined;
                            var12 = var5.bind(var1)(var4);
                            var5 = var12.bind(var1)();
                            var4 = var5.done;
                            var11 = 7;
                            var10 = 2;
                            var9 = 0;
                            var8 = 1;
                            var7 = 6;
                            if (var4) {
                                _fun92259_ip = 238;
                                continue _fun92259
                            }
                        case 88:
                            var14 = var5.value;
                            var4 = _closure1_slot4;
                            var4 = var4.bind(var1)(var14, var10);
                            var15 = var4[var9];
                            var14 = var4[var8];
                            var16 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var4 = var16.bind(var1)(var4);
                            var4 = var4.ReferralOfferStatus;
                            var4 = var4.PENDING;
                            if (!(var14 === var4)) {
                                _fun92259_ip = 220;
                                continue _fun92259
                            }
                        case 144:
                            var14 = _closure2_slot12;
                            var4 = var14.has;
                            var4 = var4.bind(var14)(var15);
                            if (var4) {
                                _fun92259_ip = 220;
                                continue _fun92259
                            }
                        case 161:
                            var14 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var11];
                            var14 = var14.bind(var1)(var4);
                            var4 = var14.getUser;
                            var4 = var4.bind(var14)(var15);
                            SaveGenerator(address = 193);
                        case 191:
                            return var4;
                        case 193:
                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 14);
                            if (var14) {
                                _fun92259_ip = 217;
                                continue _fun92259
                            }
                        case 199:
                            var15 = var6.set;
                            var14 = var4.id;
                            var14 = var15.bind(var6)(var14, var4);
                            _fun92259_ip = 220;
                            continue _fun92259;
                        case 217:
                            return var4;
                        case 220:
                            var14 = var12.bind(var1)();
                            var4 = var14.done;
                            var5 = var14;
                            if (!var4) {
                                _fun92259_ip = 88;
                                continue _fun92259
                            }
                        case 238:
                            var4 = _closure2_slot13;
                            var4 = var4.bind(var1)(var6);
                            var3 = _closure2_slot7;
                            var5 = var2.Array;
                            var4 = var5.from;
                            var2 = var6.values;
                            var2 = var2.bind(var6)();
                            var2 = var4.bind(var5)(var2);
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        case 284:
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
        var6 = var6.bind(var10)();
        var7 = function() { // Environment: var4
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun92263: for (var _fun92263_ip = 0;;) switch (_fun92263_ip) {
                        case 0:
                            StartGenerator();
                            var1 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                            if (var3) {
                                _fun92263_ip = 508;
                                continue _fun92263
                            }
                        case 15:
                            var5 = var1;
                            var _closure5_slot0 = var1;
                            var2 = arg1;
                            var1 = undefined;
                            var13 = undefined;
                            var _closure5_slot1 = var1;
                            var14 = undefined;
                            var15 = undefined;
                            var _closure5_slot2 = var1;
                            var6 = _closure2_slot8;
                            if (var6) {
                                _fun92263_ip = 505;
                                continue _fun92263
                            }
                        case 54:
                            var6 = _closure2_slot10;
                            if (var6) {
                                _fun92263_ip = 505;
                                continue _fun92263
                            }
                        case 64:
                            var7 = var5;
                            var6 = null;
                            if (!(var6 != var7)) {
                                _fun92263_ip = 505;
                                continue _fun92263
                            }
                        case 76:
                            var6 = _closure2_slot4;
                            var12 = 0;
                            if (!(var12 !== var6)) {
                                _fun92263_ip = 505;
                                continue _fun92263
                            }
                        case 89: // try_start_0 // try_start_2
                            var7 = _closure2_slot9;
                            var6 = true;
                            var6 = var7.bind(var1)(var6);
                            var7 = _closure2_slot12;
                            var6 = var7.values;
                            var19 = var6.bind(var7)();
                            var6 = new Array(0);
                            var20 = var6;
                            var18 = 0;
                            var7 = arraySpread(var20, var19, var18);
                            _closure5_slot1 = var6;
                            var8 = _closure1_slot7;
                            var7 = _closure2_slot3;
                            var7 = var8.bind(var1)(var7);
                            var14 = var7;
                            var7 = var7.bind(var1)();
                            var13 = var7;
                            var7 = var7.done;
                            var11 = 7;
                            var10 = 2;
                            var9 = 1;
                            var8 = 6;
                            if (var7) {
                                _fun92263_ip = 350;
                                continue _fun92263
                            }
                        case 179:
                            var7 = var13;
                            var16 = var7.value;
                            var7 = _closure1_slot4;
                            var7 = var7.bind(var1)(var16, var10);
                            var15 = var7[var12];
                            var16 = var7[var9];
                            var17 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var8];
                            var7 = var17.bind(var1)(var7);
                            var7 = var7.ReferralOfferStatus;
                            var7 = var7.PENDING;
                            if (!(var16 === var7)) {
                                _fun92263_ip = 329;
                                continue _fun92263
                            }
                        case 238:
                            var17 = _closure2_slot12;
                            var16 = var17.has;
                            var7 = var15;
                            var7 = var16.bind(var17)(var7);
                            if (var7) {
                                _fun92263_ip = 329;
                                continue _fun92263
                            }
                        case 258:
                            var16 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var11];
                            var17 = var16.bind(var1)(var7);
                            var16 = var17.getUser;
                            var7 = var15;
                            var7 = var16.bind(var17)(var7);
                            SaveGenerator(address = 293);
                        case 291:
                            return var7;
                        case 293:
                            ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 16);
                            if (var16) {
                                _fun92263_ip = 315;
                                continue _fun92263
                            }
                        case 299:
                            var17 = _closure5_slot1;
                            var16 = var17.push;
                            var16 = var16.bind(var17)(var7);
                            _fun92263_ip = 329;
                            continue _fun92263;
                        case 315: // try_end0 // try_end2
                            var17 = _closure2_slot9;
                            var16 = false;
                            var16 = var17.bind(var1)(var16);
                            return var7;
                        case 329: // try_start_1 // try_start_3
                            var7 = var14;
                            var7 = var7.bind(var1)();
                            var13 = var7;
                            var7 = var7.done;
                            if (!var7) {
                                _fun92263_ip = 179;
                                continue _fun92263
                            }
                        case 350:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var8 = var7.bind(var1)(var6);
                            var7 = var8.fetchReferralEligibleUsers;
                            var6 = var5;
                            var5 = _closure2_slot0;
                            var2 = var7.bind(var8)(var6, var5, var2);
                            SaveGenerator(address = 391);
                        case 389:
                            return var2;
                        case 391:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                            if (var5) {
                                _fun92263_ip = 450;
                                continue _fun92263
                            }
                        case 397:
                            _closure5_slot2 = var2;
                            var6 = _closure2_slot7;
                            var5 = function(arg0) { // Environment: var4
                                _fun92264: for (var _fun92264_ip = 0;;) switch (_fun92264_ip) {
                                    case 0:
                                        var1 = _closure5_slot2;
                                        var4 = var1.users;
                                        var3 = var4.filter;
                                        var1 = function(arg0) { // Environment: var0
                                            var2 = _closure2_slot1;
                                            var1 = var2.has;
                                            var0 = arg0;
                                            var0 = var0.id;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = !var0;
                                            return var0;
                                        };
                                        var3 = var3.bind(var4)(var1);
                                        var4 = _closure5_slot1;
                                        var1 = var4.filter;
                                        var0 = function(arg0) { // Environment: var0
                                            var2 = _closure2_slot1;
                                            var1 = var2.has;
                                            var0 = arg0;
                                            var0 = var0.id;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = !var0;
                                            return var0;
                                        };
                                        var0 = var1.bind(var4)(var0);
                                        _closure5_slot1 = var0;
                                        var0 = _closure5_slot0;
                                        var5 = 0;
                                        if (!(var5 !== var0)) {
                                            _fun92264_ip = 95;
                                            continue _fun92264
                                        }
                                    case 67:
                                        var0 = new Array(0);
                                        var7 = arg0;
                                        var8 = var0;
                                        var6 = 0;
                                        var6 = arraySpread(var8, var7, var6);
                                        var8 = var0;
                                        var7 = var3;
                                        var1 = arraySpread(var8, var7, var6);
                                        _fun92264_ip = 157;
                                        continue _fun92264;
                                    case 95:
                                        var4 = _closure2_slot1;
                                        var1 = var4.values;
                                        var7 = var1.bind(var4)();
                                        var1 = new Array(0);
                                        var8 = var1;
                                        var6 = 0;
                                        var6 = arraySpread(var8, var7, var6);
                                        var5 = _closure5_slot1;
                                        var2 = var5.values;
                                        var7 = var2.bind(var5)();
                                        var8 = var1;
                                        var6 = arraySpread(var8, var7, var6);
                                        var8 = var1;
                                        var7 = var3;
                                        var2 = arraySpread(var8, var7, var6);
                                        var0 = var1;
                                    case 157:
                                        return var0;
                                }
                            };
                            var5 = var6.bind(var1)(var5);
                            var5 = _closure2_slot13;
                            var4 = function(arg0) { // Environment: var4
                                _fun92267: for (var _fun92267_ip = 0;;) switch (_fun92267_ip) {
                                    case 0:
                                        var0 = global;
                                        var2 = var0.Map;
                                        var0 = var2.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var8 = arg0;
                                        var9 = var1;
                                        var0 = new var9[var2](var8, var7);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        var2 = _closure1_slot7;
                                        var1 = _closure5_slot1;
                                        var4 = undefined;
                                        var3 = var2.bind(var4)(var1);
                                        var2 = var3.bind(var4)();
                                        var1 = var2.done;
                                        if (var1) {
                                            _fun92267_ip = 100;
                                            continue _fun92267
                                        }
                                    case 64:
                                        var6 = var2.value;
                                        var5 = var0.set;
                                        var1 = var6.id;
                                        var1 = var5.bind(var0)(var1, var6);
                                        var5 = var3.bind(var4)();
                                        var1 = var5.done;
                                        var2 = var5;
                                        if (!var1) {
                                            _fun92267_ip = 64;
                                            continue _fun92267
                                        }
                                    case 100:
                                        return var0;
                                }
                            };
                            var4 = var5.bind(var1)(var4);
                            var5 = _closure2_slot6;
                            var4 = var2.nextIndex;
                            var4 = var5.bind(var1)(var4);
                        case 448: // try_end1
                            _fun92263_ip = 477;
                            continue _fun92263;
                        case 450: // try_end3
                            var5 = _closure2_slot9;
                            var4 = false;
                            var4 = var5.bind(var1)(var4);
                            return var2;
                        case 464: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 2);
                            var4 = _closure2_slot11;
                            var2 = true;
                            var2 = var4.bind(var1)(var2);
                        case 477: // try_end4
                            var4 = _closure2_slot9;
                            var2 = false;
                            var2 = var4.bind(var1)(var2);
                            _fun92263_ip = 505;
                            continue _fun92263;
                        case 490: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register = 2);
                            var4 = _closure2_slot9;
                            var3 = false;
                            var3 = var4.bind(var1)(var3);
                            throw var2;
                        case 505:
                            return var1;
                        case 508:
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
        var10 = var7.bind(var10)();
        var _closure2_slot14 = var10;
        var7 = {};
        var7.limit = var11;
        var7.getNextRows = var10;
        var7.getLocalReferrals = var6;
        var _closure2_slot15 = var7;
        var6 = var8.useRef;
        var6 = var6.bind(var8)(var7);
        var _closure2_slot16 = var6;
        var7 = var8.useEffect;
        var6 = function() { // Environment: var4
            var1 = _closure2_slot16;
            var0 = _closure2_slot15;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var6 = var7.bind(var8)(var6);
        var7 = var8.useEffect;
        var6 = new Array(2);
        var6[0] = var9;
        var6[1] = var0;
        var0 = function() { // Environment: var4
            _fun92270: for (var _fun92270_ip = 0;;) switch (_fun92270_ip) {
                case 0:
                    var1 = _closure2_slot16;
                    var1 = var1.current;
                    var3 = var1.getNextRows;
                    var2 = var1.limit;
                    var4 = var1.getLocalReferrals;
                    var0 = _closure2_slot4;
                    var1 = 0;
                    if (!(!(var0 > var1))) {
                        _fun92270_ip = 47;
                        continue _fun92270
                    }
                case 39:
                    var0 = undefined;
                    var0 = var4.bind(var0)();
                    _fun92270_ip = 55;
                    continue _fun92270;
                case 47:
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1, var2);
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var7.bind(var8)(var0, var6);
        var0 = {};
        var0.eligibleUsers = var5;
        var4 = function() {
            var3 = _closure2_slot14;
            var2 = _closure2_slot5;
            var1 = _closure2_slot2;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.fetchUsers = var4;
        var0.hasError = var3;
        var0.isFetching = var2;
        var0.resendUsers = var1;
        return var0;
    };
    var2.useReferralProgramEligibleUsers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 6666, 566, 44, 6667, 6983, 2]);