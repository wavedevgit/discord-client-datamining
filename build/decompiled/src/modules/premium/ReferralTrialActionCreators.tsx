// modules/premium/ReferralTrialActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = function arg0, arg1() {
        _fun55347: for (var _fun55347_ip = 0;;) switch (_fun55347_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55347_ip = 46;
                    continue _fun55347
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun55347_ip = 55;
                    continue _fun55347
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun55347_ip = 343;
                    continue _fun55347
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55347_ip = 323;
                    continue _fun55347
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55347_ip = 283;
                    continue _fun55347
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55347_ip = 270;
                    continue _fun55347
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
                    _fun55347_ip = 163;
                    continue _fun55347
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun55347_ip = 179;
                    continue _fun55347
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55347_ip = 249;
                    continue _fun55347
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55347_ip = 249;
                    continue _fun55347
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55347_ip = 234;
                    continue _fun55347
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55347_ip = 247;
                    continue _fun55347
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun55347_ip = 265;
                continue _fun55347;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun55347_ip = 283;
                continue _fun55347;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun55347_ip = 323;
                    continue _fun55347
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
                    _fun55347_ip = 330;
                    continue _fun55347
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55348: for (var _fun55348_ip = 0;;) switch (_fun55348_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55348_ip = 56;
                                continue _fun55348
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
                            _fun55348_ip = 67;
                            continue _fun55348;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun55349: for (var _fun55349_ip = 0;;) switch (_fun55349_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55349_ip = 23;
                    continue _fun55349
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55349_ip = 33;
                    continue _fun55349
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
                    _fun55349_ip = 70;
                    continue _fun55349
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55349_ip = 55;
                    continue _fun55349
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun55352: for (var _fun55352_ip = 0;;) switch (_fun55352_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        var7 = arg1;
                        var9 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55352_ip = 267;
                            continue _fun55352
                        }
                    case 19:
                        var1 = global;
                        var3 = var1.JSON;
                        var2 = var3.stringify;
                        var1 = {};
                        var1.index = var8;
                        var1.searchQuery = var7;
                        var3 = var2.bind(var3)(var1);
                        var4 = _closure1_slot11;
                        var2 = var4.has;
                        var2 = var2.bind(var4)(var3);
                        if (var2) {
                            _fun55352_ip = 250;
                            continue _fun55352
                        }
                    case 72:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 6;
                        var4 = var4[var2];
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var5 = var2.HTTP;
                        var4 = var5.post;
                        var2 = {};
                        var6 = _closure1_slot9;
                        var6 = var6.GET_REFERRAL_ELIGIBLE_USERS;
                        var2.url = var6;
                        var6 = {};
                        var6.index = var8;
                        var8 = null;
                        var10 = var8 != var9;
                        var8 = 10;
                        if (!var10) {
                            _fun55352_ip = 142;
                            continue _fun55352
                        }
                    case 139:
                        var8 = var9;
                    case 142:
                        var6.limit = var8;
                        var6.search_query = var7;
                        var2.body = var6;
                        var6 = true;
                        var2.oldFormErrors = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 177);
                    case 175:
                        return var2;
                    case 177:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun55352_ip = 247;
                            continue _fun55352
                        }
                    case 183:
                        var4 = var2.body;
                        var8 = var4.users;
                        var5 = var4.next_index;
                        var4 = {};
                        var7 = var8.map;
                        var6 = function(arg0) { // Environment: var6
                            var2 = _closure1_slot6;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = arg0;
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var6 = var7.bind(var8)(var6);
                        var4.users = var6;
                        var4.nextIndex = var5;
                        var6 = _closure1_slot11;
                        var5 = var6.set;
                        var5 = var5.bind(var6)(var3, var4);
                        return var4;
                    case 247:
                        return var2;
                    case 250:
                        var2 = _closure1_slot11;
                        var1 = var2.get;
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    case 267:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun55356: for (var _fun55356_ip = 0;;) switch (_fun55356_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun55356_ip = 388;
                            continue _fun55356
                        }
                    case 10:
                        var4 = undefined;
                        var9 = undefined;
                        var1 = undefined;
                        var10 = undefined;
                        var11 = undefined;
                        var12 = undefined;
                        var13 = undefined;
                        var5 = new Array(0);
                        var2 = global;
                        var2 = var2.Map;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var21 = var3;
                        var2 = new var21[var2](var20);
                        var1 = var2 instanceof Object ? var2 : var3;
                        var6 = _closure1_slot12;
                        var3 = arg0;
                        var3 = var6.bind(var4)(var3);
                        var10 = var3;
                        var3 = var3.bind(var4)();
                        var9 = var3;
                        var3 = var3.done;
                        var8 = 8;
                        var7 = null;
                        var6 = 6;
                        if (var3) {
                            _fun55356_ip = 338;
                            continue _fun55356
                        }
                    case 100:
                        var3 = var9;
                        var11 = var3.value;
                    case 108: // try_start_0
                        var14 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var3 = var14.bind(var4)(var3);
                        var15 = var3.HTTP;
                        var14 = var15.post;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var18 = _closure1_slot9;
                        var17 = var18.CREATE_REFERRAL;
                        var16 = var11;
                        var16 = var17.bind(var18)(var16);
                        var3.url = var16;
                        var3 = var14.bind(var15)(var3);
                        SaveGenerator(address = 179);
                    case 177:
                        return var3;
                    case 179:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 14);
                        if (var14) {
                            _fun55356_ip = 257;
                            continue _fun55356
                        }
                    case 185:
                        var14 = var3.body;
                        var12 = var14;
                        var15 = var7 != var14;
                        var14 = null;
                        if (!var15) {
                            _fun55356_ip = 205;
                            continue _fun55356
                        }
                    case 202:
                        var14 = var12;
                    case 205:
                        var13 = var14;
                        if (!(var7 != var14)) {
                            _fun55356_ip = 228;
                            continue _fun55356
                        }
                    case 212:
                        var16 = var5;
                        var15 = var16.push;
                        var14 = var13;
                        var14 = var15.bind(var16)(var14);
                    case 228:
                        var17 = var1;
                        var16 = var17.set;
                        var15 = var11;
                        var14 = _closure1_slot10;
                        var14 = var14.SUCCESS;
                        var14 = var16.bind(var17)(var15, var14);
                    case 255: // try_end0
                        _fun55356_ip = 317;
                        continue _fun55356;
                    case 257:
                        return var3;
                    case 260: // catch_target0
                        CatchBlockStart(arg_register = 15);
                        var14 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var8];
                        var14 = var14.bind(var4)(var3);
                        var3 = var14.captureException;
                        var3 = var3.bind(var14)(var15);
                        var16 = var1;
                        var15 = var16.set;
                        var14 = var11;
                        var3 = _closure1_slot10;
                        var3 = var3.FAIL;
                        var3 = var15.bind(var16)(var14, var3);
                    case 317:
                        var3 = var10;
                        var3 = var3.bind(var4)();
                        var9 = var3;
                        var3 = var3.done;
                        if (!var3) {
                            _fun55356_ip = 100;
                            continue _fun55356
                        }
                    case 338:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 7;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'CREATE_REFERRALS_SUCCESS';
                        var2.type = var6;
                        var2.userTrialOffers = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 388:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun55359: for (var _fun55359_ip = 0;;) switch (_fun55359_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55359_ip = 321;
                            continue _fun55359
                        }
                    case 10:
                        var9 = arg0;
                        var1 = undefined;
                        var7 = undefined;
                        var3 = undefined;
                    case 19: // try_start_0
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 6;
                        var4 = var8[var4];
                        var4 = var6.bind(var1)(var4);
                        var8 = var4.HTTP;
                        var6 = var8.post;
                        var4 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var11 = _closure1_slot9;
                        var10 = var11.CREATE_REFERRAL;
                        var9 = var10.bind(var11)(var9);
                        var4.url = var9;
                        var4 = var6.bind(var8)(var4);
                        SaveGenerator(address = 93);
                    case 91:
                        return var4;
                    case 93:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun55359_ip = 176;
                            continue _fun55359
                        }
                    case 99:
                        var8 = var4.body;
                        var7 = var8;
                        var6 = null;
                        var8 = var6 != var8;
                        if (!var8) {
                            _fun55359_ip = 119;
                            continue _fun55359
                        }
                    case 116:
                        var6 = var7;
                    case 119:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 7;
                        var5 = var8[var5];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.dispatch;
                        var5 = {};
                        var9 = 'BILLING_CREATE_REFERRAL_SUCCESS';
                        var5.type = var9;
                        var5.userTrialOffer = var6;
                        var5 = var7.bind(var8)(var5);
                        var5 = {};
                        var5.userTrialOffer = var6;
                    case 173: // try_end0
                        return var5;
                    case 176:
                        return var4;
                    case 179: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var2 = var5;
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 7;
                        var6 = var8[var6];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'BILLING_CREATE_REFERRAL_FAIL';
                        var6.type = var9;
                        var6 = var7.bind(var8)(var6);
                        var5 = var5.body;
                        var6 = var5.code;
                        var5 = _closure1_slot8;
                        var5 = var5.INVALID_MESSAGE_SEND_USER;
                        if (!(var6 === var5)) {
                            _fun55359_ip = 318;
                            continue _fun55359
                        }
                    case 253:
                        var6 = _closure1_slot7;
                        var5 = var6.getCurrentlySelectedChannelId;
                        var6 = var5.bind(var6)();
                        var3 = var6;
                        var5 = null;
                        if (!(var5 != var6)) {
                            _fun55359_ip = 318;
                            continue _fun55359
                        }
                    case 276:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 9;
                        var4 = var6[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.sendClydeError;
                        var2 = var2.body;
                        var2 = var2.code;
                        var2 = var4.bind(var5)(var3, var2);
                    case 318:
                        return var1;
                    case 321:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun55362: for (var _fun55362_ip = 0;;) switch (_fun55362_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun55362_ip = 234;
                            continue _fun55362
                        }
                    case 10:
                        var5 = arg0;
                        var1 = undefined;
                        var6 = undefined;
                    case 17: // try_start_0
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var2 = var7[var2];
                        var2 = var4.bind(var1)(var2);
                        var7 = var2.HTTP;
                        var4 = var7.get;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var10 = _closure1_slot9;
                        var9 = var10.REFERRAL_OFFER_ID_RESOLVE;
                        var8 = var5;
                        var8 = var9.bind(var10)(var8);
                        var2.url = var8;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address = 93);
                    case 91:
                        return var2;
                    case 93:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun55362_ip = 176;
                            continue _fun55362
                        }
                    case 99:
                        var7 = var2.body;
                        var6 = var7;
                        var4 = null;
                        var7 = var4 != var7;
                        if (!var7) {
                            _fun55362_ip = 119;
                            continue _fun55362
                        }
                    case 116:
                        var4 = var6;
                    case 119:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 7;
                        var3 = var7[var3];
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var8 = 'BILLING_REFERRAL_RESOLVE_SUCCESS';
                        var3.type = var8;
                        var3.userTrialOffer = var4;
                        var3 = var6.bind(var7)(var3);
                        var3 = {};
                        var3.userTrialOffer = var4;
                    case 173: // try_end0
                        return var3;
                    case 176:
                        return var2;
                    case 179: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 7;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'BILLING_REFERRAL_RESOLVE_FAIL';
                        var2.type = var6;
                        var2.userTrialOfferId = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 234:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var7[var9];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var8 = 2;
    var3 = var7[var8];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var5 = 3;
    var3 = var7[var5];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.AbortCodes;
    var _closure1_slot8 = var4;
    var3 = var3.Endpoints;
    var _closure1_slot9 = var3;
    var4 = {};
    var4.REDEEMED = var9;
    var3 = 'REDEEMED';
    var4[var9] = var3;
    var4.PENDING = var8;
    var3 = 'PENDING';
    var4[var8] = var3;
    var4.CONVERTED = var5;
    var3 = 'CONVERTED';
    var4[var5] = var3;
    var3 = {};
    var3.SUCCESS = var9;
    var5 = 'SUCCESS';
    var3[var9] = var5;
    var3.FAIL = var8;
    var5 = 'FAIL';
    var3[var8] = var5;
    var _closure1_slot10 = var3;
    var5 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var3 = var1.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.cache = var3;
            var3 = var1.Date;
            var1 = var3.now;
            var3 = var1.bind(var3)();
            var1 = 600000;
            var1 = var3 + var1;
            var2.expiration = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'set';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var0 = this;
            var3 = var0.cache;
            var2 = var3.set;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0._checkExpiration;
            var1 = var1.bind(var0)();
            var2 = var0.cache;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0._checkExpiration;
            var1 = var1.bind(var0)();
            var2 = var0.cache;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_checkExpiration';
        var0.key = var5;
        var4 = function() {
            _fun55368: for (var _fun55368_ip = 0;;) switch (_fun55368_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.expiration;
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    if (!(var2 < var1)) {
                        _fun55368_ip = 46;
                        continue _fun55368
                    }
                case 30:
                    var1 = var0.cache;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                case 46:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var5 = var5.bind(var0)();
    var8 = var5.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var5
        }
    });
    var13 = var8;
    var5 = new var13[var5](var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot11 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/ReferralTrialActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ReferralOfferStatus = var4;
    var2.CreateReferralStatus = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchReferralEligibleUsers = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 7;
        var1 = var5[var1];
        var3 = undefined;
        var6 = var2.bind(var3)(var1);
        var2 = var6.dispatch;
        var1 = {};
        var7 = 'BILLING_REFERRALS_REMAINING_FETCH_START';
        var1.type = var7;
        var1 = var2.bind(var6)(var1);
        var2 = _closure1_slot0;
        var1 = 6;
        var1 = var5[var1];
        var1 = var2.bind(var3)(var1);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var4 = _closure1_slot9;
        var4 = var4.GET_REFERRALS_REMAINING;
        var1.url = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            _fun55371: for (var _fun55371_ip = 0;;) switch (_fun55371_ip) {
                case 0:
                    var5 = arg0;
                    var0 = global;
                    var0 = var0.Map;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var13 = var1;
                    var0 = new var13[var0](var12);
                    var6 = var0 instanceof Object ? var0 : var1;
                    var0 = var5.body;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun55371_ip = 116;
                        continue _fun55371
                    }
                case 42:
                    var0 = var5.body;
                    var0 = var0.recipient_status;
                    if (!(var4 != var0)) {
                        _fun55371_ip = 116;
                        continue _fun55371
                    }
                case 57:
                    var0 = var5.body;
                    var3 = var0.recipient_status;
                    for (var0 in var3)
                        case 76: {
                            case 85: var10 = var0;
                            var8 = var5.body;
                            var8 = var8.recipient_status;
                            var9 = var8[var10];
                            var8 = var6.set;
                            var8 = var8.bind(var6)(var10, var9);
                            _fun55371_ip = 76;
                            continue _fun55371;
                        }
                case 116:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var7 = 'BILLING_REFERRALS_REMAINING_FETCH_SUCCESS';
                    var1.type = var7;
                    var7 = var5.body;
                    var8 = var4 != var7;
                    var7 = 0;
                    if (!var8) {
                        _fun55371_ip = 203;
                        continue _fun55371
                    }
                case 172:
                    var8 = var5.body;
                    var8 = var8.referrals_remaining;
                    var8 = var4 != var8;
                    var7 = 0;
                    if (!var8) {
                        _fun55371_ip = 203;
                        continue _fun55371
                    }
                case 192:
                    var8 = var5.body;
                    var7 = var8.referrals_remaining;
                case 203:
                    var1.referrals_remaining = var7;
                    var7 = var5.body;
                    if (!(var4 != var7)) {
                        _fun55371_ip = 232;
                        continue _fun55371
                    }
                case 217:
                    var7 = var5.body;
                    var7 = var7.sent_user_ids;
                    if (!(var4 == var7)) {
                        _fun55371_ip = 238;
                        continue _fun55371
                    }
                case 232:
                    var7 = new Array(0);
                    _fun55371_ip = 249;
                    continue _fun55371;
                case 238:
                    var8 = var5.body;
                    var7 = var8.sent_user_ids;
                case 249:
                    var1.sent_user_ids = var7;
                    var7 = var5.body;
                    var9 = var4 == var7;
                    var8 = undefined;
                    if (var9) {
                        _fun55371_ip = 274;
                        continue _fun55371
                    }
                case 268:
                    var8 = var7.refresh_at;
                case 274:
                    var9 = var4 != var8;
                    var7 = null;
                    if (!var9) {
                        _fun55371_ip = 286;
                        continue _fun55371
                    }
                case 283:
                    var7 = var8;
                case 286:
                    var1.refresh_at = var7;
                    var1.recipient_status = var6;
                    var6 = var5.body;
                    var7 = var4 == var6;
                    var5 = undefined;
                    if (var7) {
                        _fun55371_ip = 316;
                        continue _fun55371
                    }
                case 310:
                    var5 = var6.has_eligible_friends;
                case 316:
                    var4 = var4 != var5;
                    if (!var4) {
                        _fun55371_ip = 326;
                        continue _fun55371
                    }
                case 323:
                    var4 = var5;
                case 326:
                    var1.has_eligible_friends = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0 = function(arg0) { // Environment: var0
            _fun55372: for (var _fun55372_ip = 0;;) switch (_fun55372_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var3 = var0 == var1;
                    var0 = undefined;
                    var2 = undefined;
                    if (var3) {
                        _fun55372_ip = 21;
                        continue _fun55372
                    }
                case 16:
                    var2 = var1.status;
                case 21:
                    var1 = 404;
                    if (!(var1 !== var2)) {
                        _fun55372_ip = 76;
                        continue _fun55372
                    }
                case 31:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'BILLING_REFERRALS_REMAINING_FETCH_FAIL';
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                case 76:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.fetchReferralsRemaining = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createReferralTrials = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createReferralTrial = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.resolveReferralTrialOffer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1628, 1670, 660, 507, 806, 1207, 6550, 2]);