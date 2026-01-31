// modules/parent_tools/FamilyCenterActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun41780: for (var _fun41780_ip = 0;;) switch (_fun41780_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41780_ip = 129;
                            continue _fun41780
                        }
                    case 12:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var5 = global;
                        var3 = var5.Set;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var3
                            }
                        });
                        var9 = var4;
                        var3 = new var9[var3](var8);
                        var7 = var3 instanceof Object ? var3 : var4;
                        _closure4_slot0 = var7;
                        var4 = var6.forEach;
                        var3 = function(arg0) { // Environment: var1
                            _fun41781: for (var _fun41781_ip = 0;;) switch (_fun41781_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.invoice_items;
                                    var2 = null;
                                    if (!(var2 != var1)) {
                                        _fun41781_ip = 75;
                                        continue _fun41781
                                    }
                                case 15:
                                    var1 = var0.invoice_items;
                                    var3 = var1.length;
                                    var1 = 0;
                                    if (!(var3 > var1)) {
                                        _fun41781_ip = 75;
                                        continue _fun41781
                                    }
                                case 32:
                                    var0 = var0.invoice_items;
                                    var0 = var0[var1];
                                    var1 = var0.sku_id;
                                    if (!(var2 != var1)) {
                                        _fun41781_ip = 75;
                                        continue _fun41781
                                    }
                                case 52:
                                    var2 = _closure4_slot0;
                                    var1 = var2.add;
                                    var0 = var0.sku_id;
                                    var0 = var1.bind(var2)(var0);
                                case 75:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var6)(var3);
                        var4 = var5.Promise;
                        var3 = var4.all;
                        var6 = var5.Array;
                        var5 = var6.from;
                        var6 = var5.bind(var6)(var7);
                        var5 = var6.map;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.maybeFetchCollectiblesProduct;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var5.bind(var6)(var1);
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 117);
                    case 115:
                        return var1;
                    case 117:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun41780_ip = 126;
                            continue _fun41780
                        }
                    case 123:
                        return var2;
                    case 126:
                        return var1;
                    case 129:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun41785: for (var _fun41785_ip = 0;;) switch (_fun41785_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41785_ip = 125;
                            continue _fun41785
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.patch;
                        var1 = {};
                        var5 = _closure1_slot7;
                        var5 = var5.FAMILY_CENTER_LINKED_USERS;
                        var1.url = var5;
                        var5 = {};
                        var6 = arg0;
                        var5.linked_user_id = var6;
                        var6 = arg1;
                        var5.link_status = var6;
                        var1.body = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.then;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.body;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS';
                            var1.type = var4;
                            var1.linkedUsers = var0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 113);
                    case 111:
                        return var1;
                    case 113:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun41785_ip = 122;
                            continue _fun41785
                        }
                    case 119:
                        return var2;
                    case 122:
                        return var1;
                    case 125:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun41789: for (var _fun41789_ip = 0;;) switch (_fun41789_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41789_ip = 121;
                            continue _fun41789
                        }
                    case 12:
                        var _closure4_slot0 = var7;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.del;
                        var3 = {};
                        var6 = _closure1_slot7;
                        var6 = var6.FAMILY_CENTER_LINKED_USERS;
                        var3.url = var6;
                        var6 = {};
                        var6.linked_user_id = var7;
                        var3.body = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.then;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.body;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS';
                            var1.type = var4;
                            var1.linkedUsers = var0;
                            var4 = _closure4_slot0;
                            var1.deletedUserId = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 109);
                    case 107:
                        return var1;
                    case 109:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun41789_ip = 118;
                            continue _fun41789
                        }
                    case 115:
                        return var2;
                    case 118:
                        return var1;
                    case 121:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41793: for (var _fun41793_ip = 0;;) switch (_fun41793_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41793_ip = 102;
                            continue _fun41793
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.get;
                        var1 = {};
                        var5 = _closure1_slot7;
                        var5 = var5.FAMILY_CENTER_LINK_CODE;
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.then;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.body;
                            var0 = var0.link_code;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS';
                            var1.type = var4;
                            var1.linkCode = var0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 90);
                    case 88:
                        return var1;
                    case 90:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun41793_ip = 99;
                            continue _fun41793
                        }
                    case 96:
                        return var2;
                    case 99:
                        return var1;
                    case 102:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41797: for (var _fun41797_ip = 0;;) switch (_fun41797_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41797_ip = 86;
                            continue _fun41797
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var5 = _closure1_slot7;
                        var5 = var5.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS;
                        var1.url = var5;
                        var5 = true;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 74);
                    case 72:
                        return var1;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun41797_ip = 83;
                            continue _fun41797
                        }
                    case 80:
                        return var2;
                    case 83:
                        return var1;
                    case 86:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.FamilyCenterAction;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot6 = var4;
    var3 = var3.Endpoints;
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = function() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41800: for (var _fun41800_ip = 0;;) switch (_fun41800_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41800_ip = 610;
                            continue _fun41800
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var10 = 5;
                        var1 = var3[var10];
                        var6 = undefined;
                        var5 = var2.bind(var6)(var1);
                        var2 = var5.dispatch;
                        var1 = {};
                        var7 = 'FAMILY_CENTER_FETCH_START';
                        var1.type = var7;
                        var1 = var2.bind(var5)(var1);
                        var2 = _closure1_slot0;
                        var1 = 6;
                        var1 = var3[var1];
                        var1 = var2.bind(var6)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var5 = _closure1_slot7;
                        var5 = var5.FAMILY_CENTER_TEEN_ACTIVITY_ME;
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 114);
                    case 112:
                        return var1;
                    case 114:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41800_ip = 607;
                            continue _fun41800
                        }
                    case 123:
                        var2 = var1.body;
                        var11 = var2.teen_audit_log;
                        var9 = var2.linked_users;
                        var8 = var2.users;
                        var7 = var2.age_group;
                        var3 = {};
                        var5 = null;
                        var12 = var5 == var11;
                        var2 = undefined;
                        if (var12) {
                            _fun41800_ip = 173;
                            continue _fun41800
                        }
                    case 167:
                        var2 = var11.teen_user_id;
                    case 173:
                        var3.teenId = var2;
                        var12 = var5 == var11;
                        var2 = undefined;
                        if (var12) {
                            _fun41800_ip = 193;
                            continue _fun41800
                        }
                    case 187:
                        var2 = var11.range_start_id;
                    case 193:
                        var3.rangeStartId = var2;
                        var12 = var5 == var11;
                        var2 = undefined;
                        if (var12) {
                            _fun41800_ip = 213;
                            continue _fun41800
                        }
                    case 207:
                        var2 = var11.totals;
                    case 213:
                        if (!(var5 == var2)) {
                            _fun41800_ip = 219;
                            continue _fun41800
                        }
                    case 217:
                        var2 = {};
                    case 219:
                        var3.totals = var2;
                        var12 = var5 == var11;
                        var2 = undefined;
                        if (var12) {
                            _fun41800_ip = 239;
                            continue _fun41800
                        }
                    case 233:
                        var2 = var11.actions;
                    case 239:
                        if (!(var5 == var2)) {
                            _fun41800_ip = 247;
                            continue _fun41800
                        }
                    case 243:
                        var2 = new Array(0);
                    case 247:
                        var3.actions = var2;
                        var12 = var5 == var11;
                        var2 = undefined;
                        if (var12) {
                            _fun41800_ip = 267;
                            continue _fun41800
                        }
                    case 261:
                        var2 = var11.users;
                    case 267:
                        if (!(var5 == var2)) {
                            _fun41800_ip = 275;
                            continue _fun41800
                        }
                    case 271:
                        var2 = new Array(0);
                    case 275:
                        var3.users = var2;
                        var12 = var5 == var11;
                        var2 = undefined;
                        if (var12) {
                            _fun41800_ip = 295;
                            continue _fun41800
                        }
                    case 289:
                        var2 = var11.guilds;
                    case 295:
                        if (!(var5 == var2)) {
                            _fun41800_ip = 303;
                            continue _fun41800
                        }
                    case 299:
                        var2 = new Array(0);
                    case 303:
                        var3.guilds = var2;
                        var12 = var5 == var11;
                        var2 = undefined;
                        if (var12) {
                            _fun41800_ip = 323;
                            continue _fun41800
                        }
                    case 317:
                        var2 = var11.top_user_activities;
                    case 323:
                        if (!(var5 == var2)) {
                            _fun41800_ip = 331;
                            continue _fun41800
                        }
                    case 327:
                        var2 = new Array(0);
                    case 331:
                        var3.topUserActivities = var2;
                        var12 = var5 == var11;
                        var2 = undefined;
                        if (var12) {
                            _fun41800_ip = 351;
                            continue _fun41800
                        }
                    case 345:
                        var2 = var11.top_guild_activities;
                    case 351:
                        if (!(var5 == var2)) {
                            _fun41800_ip = 359;
                            continue _fun41800
                        }
                    case 355:
                        var2 = new Array(0);
                    case 359:
                        var3.topGuildActivities = var2;
                        var2 = var5 == var11;
                        var12 = undefined;
                        if (var2) {
                            _fun41800_ip = 394;
                            continue _fun41800
                        }
                    case 373:
                        var2 = var11.total_spend;
                        var13 = var5 == var2;
                        var12 = undefined;
                        if (var13) {
                            _fun41800_ip = 394;
                            continue _fun41800
                        }
                    case 388:
                        var12 = var2.amount;
                    case 394:
                        var13 = var5 != var12;
                        var2 = null;
                        if (!var13) {
                            _fun41800_ip = 406;
                            continue _fun41800
                        }
                    case 403:
                        var2 = var12;
                    case 406:
                        var3.totalSpendAmount = var2;
                        var2 = var5 == var11;
                        var12 = undefined;
                        if (var2) {
                            _fun41800_ip = 441;
                            continue _fun41800
                        }
                    case 420:
                        var2 = var11.total_spend;
                        var13 = var5 == var2;
                        var12 = undefined;
                        if (var13) {
                            _fun41800_ip = 441;
                            continue _fun41800
                        }
                    case 435:
                        var12 = var2.currency;
                    case 441:
                        var13 = var5 != var12;
                        var2 = null;
                        if (!var13) {
                            _fun41800_ip = 453;
                            continue _fun41800
                        }
                    case 450:
                        var2 = var12;
                    case 453:
                        var3.totalSpendCurrency = var2;
                        var12 = var5 == var11;
                        var2 = undefined;
                        if (var12) {
                            _fun41800_ip = 473;
                            continue _fun41800
                        }
                    case 467:
                        var2 = var11.invoices;
                    case 473:
                        if (!(var5 == var2)) {
                            _fun41800_ip = 481;
                            continue _fun41800
                        }
                    case 477:
                        var2 = new Array(0);
                    case 481:
                        var3.invoices = var2;
                        var2 = var3.invoices;
                        var2 = var5 != var2;
                        if (!var2) {
                            _fun41800_ip = 516;
                            continue _fun41800
                        }
                    case 499:
                        var5 = var3.invoices;
                        var11 = var5.length;
                        var5 = 0;
                        var2 = var11 > var5;
                    case 516:
                        if (!var2) {
                            _fun41800_ip = 544;
                            continue _fun41800
                        }
                    case 519:
                        var5 = _closure1_slot8;
                        var2 = var3.invoices;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 538);
                    case 536:
                        return var2;
                    case 538:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun41800_ip = 604;
                            continue _fun41800
                        }
                    case 544:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var10];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var10 = 'FAMILY_CENTER_INITIAL_LOAD';
                        var4.type = var10;
                        var4.familyCenterTeenActivity = var3;
                        var4.linkedUsers = var9;
                        var4.users = var8;
                        var4.ageGroup = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 604:
                        return var2;
                    case 607:
                        return var1;
                    case 610:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.initialPageLoad = var4;
    var4 = function() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41803: for (var _fun41803_ip = 0;;) switch (_fun41803_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41803_ip = 167;
                            continue _fun41803
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {};
                        var6 = _closure1_slot7;
                        var6 = var6.FAMILY_CENTER_LINKED_USERS;
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 76);
                    case 74:
                        return var1;
                    case 76:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41803_ip = 164;
                            continue _fun41803
                        }
                    case 82:
                        var4 = var1.body;
                        var2 = {};
                        var6 = var4.linked_users;
                        var2.linkedUsers = var6;
                        var4 = var4.users;
                        var2.users = var4;
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS';
                        var3.type = var6;
                        var8 = var3;
                        var7 = var2;
                        var6 = copyDataProperties(var8, var7);
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 164:
                        return var1;
                    case 167:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.fetchLinkedUsers = var4;
    var4 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41806: for (var _fun41806_ip = 0;;) switch (_fun41806_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41806_ip = 194;
                            continue _fun41806
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.post;
                        var1 = {};
                        var6 = _closure1_slot7;
                        var6 = var6.FAMILY_CENTER_LINKED_USERS;
                        var1.url = var6;
                        var6 = {};
                        var8 = _closure2_slot0;
                        var6.recipient_id = var8;
                        var7 = _closure2_slot1;
                        var6.code = var7;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 103);
                    case 101:
                        return var1;
                    case 103:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41806_ip = 191;
                            continue _fun41806
                        }
                    case 109:
                        var4 = var1.body;
                        var2 = {};
                        var6 = var4.linked_users;
                        var2.linkedUsers = var6;
                        var4 = var4.users;
                        var2.users = var4;
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'FAMILY_CENTER_REQUEST_LINK_SUCCESS';
                        var3.type = var6;
                        var10 = var3;
                        var9 = var2;
                        var6 = copyDataProperties(var10, var9);
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 191:
                        return var1;
                    case 194:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.requestLink = var4;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41809: for (var _fun41809_ip = 0;;) switch (_fun41809_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41809_ip = 481;
                            continue _fun41809
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var7 = 5;
                        var1 = var3[var7];
                        var6 = undefined;
                        var5 = var2.bind(var6)(var1);
                        var2 = var5.dispatch;
                        var1 = {};
                        var8 = 'FAMILY_CENTER_FETCH_START';
                        var1.type = var8;
                        var1 = var2.bind(var5)(var1);
                        var5 = _closure1_slot7;
                        var2 = var5.FAMILY_CENTER_TEEN_ACTIVITY;
                        var1 = _closure2_slot0;
                        var5 = var2.bind(var5)(var1);
                        var2 = _closure1_slot0;
                        var1 = 6;
                        var1 = var3[var1];
                        var1 = var2.bind(var6)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 126);
                    case 124:
                        return var1;
                    case 126:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41809_ip = 478;
                            continue _fun41809
                        }
                    case 135:
                        var2 = var1.body;
                        var8 = var2.teen_audit_log;
                        var3 = {};
                        var2 = var8.teen_user_id;
                        var3.teenId = var2;
                        var2 = var8.range_start_id;
                        var3.rangeStartId = var2;
                        var2 = var8.totals;
                        var3.totals = var2;
                        var2 = var8.actions;
                        var3.actions = var2;
                        var2 = var8.users;
                        var3.users = var2;
                        var2 = var8.guilds;
                        var3.guilds = var2;
                        var2 = var8.top_user_activities;
                        var5 = null;
                        if (!(var5 == var2)) {
                            _fun41809_ip = 230;
                            continue _fun41809
                        }
                    case 226:
                        var2 = new Array(0);
                    case 230:
                        var3.topUserActivities = var2;
                        var2 = var8.top_guild_activities;
                        if (!(var5 == var2)) {
                            _fun41809_ip = 249;
                            continue _fun41809
                        }
                    case 245:
                        var2 = new Array(0);
                    case 249:
                        var3.topGuildActivities = var2;
                        var2 = var5 == var8;
                        var9 = undefined;
                        if (var2) {
                            _fun41809_ip = 284;
                            continue _fun41809
                        }
                    case 263:
                        var2 = var8.total_spend;
                        var10 = var5 == var2;
                        var9 = undefined;
                        if (var10) {
                            _fun41809_ip = 284;
                            continue _fun41809
                        }
                    case 278:
                        var9 = var2.amount;
                    case 284:
                        var10 = var5 != var9;
                        var2 = null;
                        if (!var10) {
                            _fun41809_ip = 296;
                            continue _fun41809
                        }
                    case 293:
                        var2 = var9;
                    case 296:
                        var3.totalSpendAmount = var2;
                        var2 = var5 == var8;
                        var9 = undefined;
                        if (var2) {
                            _fun41809_ip = 331;
                            continue _fun41809
                        }
                    case 310:
                        var2 = var8.total_spend;
                        var10 = var5 == var2;
                        var9 = undefined;
                        if (var10) {
                            _fun41809_ip = 331;
                            continue _fun41809
                        }
                    case 325:
                        var9 = var2.currency;
                    case 331:
                        var10 = var5 != var9;
                        var2 = null;
                        if (!var10) {
                            _fun41809_ip = 343;
                            continue _fun41809
                        }
                    case 340:
                        var2 = var9;
                    case 343:
                        var3.totalSpendCurrency = var2;
                        var9 = var5 == var8;
                        var2 = undefined;
                        if (var9) {
                            _fun41809_ip = 363;
                            continue _fun41809
                        }
                    case 357:
                        var2 = var8.invoices;
                    case 363:
                        if (!(var5 == var2)) {
                            _fun41809_ip = 371;
                            continue _fun41809
                        }
                    case 367:
                        var2 = new Array(0);
                    case 371:
                        var3.invoices = var2;
                        var2 = var3.invoices;
                        if (!var2) {
                            _fun41809_ip = 402;
                            continue _fun41809
                        }
                    case 385:
                        var5 = var3.invoices;
                        var8 = var5.length;
                        var5 = 0;
                        var2 = var8 > var5;
                    case 402:
                        if (!var2) {
                            _fun41809_ip = 430;
                            continue _fun41809
                        }
                    case 405:
                        var5 = _closure1_slot8;
                        var2 = var3.invoices;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 424);
                    case 422:
                        return var2;
                    case 424:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun41809_ip = 475;
                            continue _fun41809
                        }
                    case 430:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS';
                        var4.type = var7;
                        var4.familyCenterTeenActivity = var3;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 475:
                        return var2;
                    case 478:
                        return var1;
                    case 481:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.fetchTeenActivity = var4;
    var4 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41812: for (var _fun41812_ip = 0;;) switch (_fun41812_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41812_ip = 461;
                            continue _fun41812
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var10 = _closure1_slot7;
                        var9 = var10.FAMILY_CENTER_TEEN_ACTIVITY_MORE;
                        var16 = _closure2_slot0;
                        var15 = _closure2_slot1;
                        var14 = _closure2_slot2;
                        var13 = _closure2_slot3;
                        var17 = var10;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 102);
                    case 100:
                        return var1;
                    case 102:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41812_ip = 458;
                            continue _fun41812
                        }
                    case 111:
                        var2 = var1.body;
                        var2 = var2.teen_audit_log;
                        var6 = {};
                        var3 = var2.teen_user_id;
                        var6.teenId = var3;
                        var3 = var2.range_start_id;
                        var6.rangeStartId = var3;
                        var3 = var2.actions;
                        var6.actions = var3;
                        var3 = var2.users;
                        var6.users = var3;
                        var3 = var2.guilds;
                        var6.guilds = var3;
                        var3 = var2.top_user_activities;
                        var4 = null;
                        if (!(var4 == var3)) {
                            _fun41812_ip = 195;
                            continue _fun41812
                        }
                    case 191:
                        var3 = new Array(0);
                    case 195:
                        var6.topUserActivities = var3;
                        var3 = var2.top_guild_activities;
                        if (!(var4 == var3)) {
                            _fun41812_ip = 214;
                            continue _fun41812
                        }
                    case 210:
                        var3 = new Array(0);
                    case 214:
                        var6.topGuildActivities = var3;
                        var3 = var4 == var2;
                        var7 = undefined;
                        if (var3) {
                            _fun41812_ip = 249;
                            continue _fun41812
                        }
                    case 228:
                        var3 = var2.total_spend;
                        var8 = var4 == var3;
                        var7 = undefined;
                        if (var8) {
                            _fun41812_ip = 249;
                            continue _fun41812
                        }
                    case 243:
                        var7 = var3.amount;
                    case 249:
                        var8 = var4 != var7;
                        var3 = null;
                        if (!var8) {
                            _fun41812_ip = 261;
                            continue _fun41812
                        }
                    case 258:
                        var3 = var7;
                    case 261:
                        var6.totalSpendAmount = var3;
                        var3 = var4 == var2;
                        var7 = undefined;
                        if (var3) {
                            _fun41812_ip = 296;
                            continue _fun41812
                        }
                    case 275:
                        var3 = var2.total_spend;
                        var8 = var4 == var3;
                        var7 = undefined;
                        if (var8) {
                            _fun41812_ip = 296;
                            continue _fun41812
                        }
                    case 290:
                        var7 = var3.currency;
                    case 296:
                        var8 = var4 != var7;
                        var3 = null;
                        if (!var8) {
                            _fun41812_ip = 308;
                            continue _fun41812
                        }
                    case 305:
                        var3 = var7;
                    case 308:
                        var6.totalSpendCurrency = var3;
                        var7 = var4 == var2;
                        var3 = undefined;
                        if (var7) {
                            _fun41812_ip = 328;
                            continue _fun41812
                        }
                    case 322:
                        var3 = var2.invoices;
                    case 328:
                        if (!(var4 == var3)) {
                            _fun41812_ip = 336;
                            continue _fun41812
                        }
                    case 332:
                        var3 = new Array(0);
                    case 336:
                        var6.invoices = var3;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 7;
                        var3 = var7[var3];
                        var10 = var4.bind(var5)(var3);
                        var9 = var10.track;
                        var3 = _closure1_slot6;
                        var8 = var3.FAMILY_CENTER_ACTION;
                        var3 = {};
                        var12 = _closure1_slot5;
                        var12 = var12.LoadMore;
                        var3.action = var12;
                        var12 = _closure2_slot0;
                        var3.selected_teen_id = var12;
                        var11 = _closure2_slot1;
                        var3.action_display_type = var11;
                        var3 = var9.bind(var10)(var8, var3);
                        var3 = 5;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS';
                        var3.type = var7;
                        var3.familyCenterTeenActivity = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 458:
                        return var1;
                    case 461:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.fetchMoreTeenActivity = var4;
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'FAMILY_CENTER_HANDLE_TAB_SELECT';
        var1.type = var4;
        var4 = arg0;
        var1.tab = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.selectTab = var4;
    var4 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var5 = _closure1_slot7;
        var4 = var5.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS;
        var4 = var4.bind(var5)(var6);
        var1.url = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.body;
            var5 = var0.settings;
            var4 = var0.consents;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS';
            var1.type = var6;
            var6 = _closure2_slot0;
            var1.userId = var6;
            var1.settings = var5;
            var1.consents = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.fetchTeenSettingsAndConsents = var4;
    var4 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun41818: for (var _fun41818_ip = 0;;) switch (_fun41818_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41818_ip = 375;
                            continue _fun41818
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var6 = 8;
                        var5 = var1[var6];
                        var2 = undefined;
                        var8 = var4.bind(var2)(var5);
                        var5 = var8.getProtoFieldClass;
                        var13 = 9;
                        var1 = var1[var13];
                        var1 = var4.bind(var2)(var1);
                        var4 = var1.PreloadedUserSettings;
                        var1 = _closure2_slot1;
                        var11 = var5.bind(var8)(var4, var1);
                        var5 = _closure1_slot4;
                        var4 = var5.getSettings;
                        var1 = _closure2_slot0;
                        var5 = var4.bind(var5)(var1);
                        var1 = null;
                        var4 = var1 == var5;
                        var10 = undefined;
                        if (var4) {
                            _fun41818_ip = 110;
                            continue _fun41818
                        }
                    case 102:
                        var4 = _closure2_slot1;
                        var10 = var5[var4];
                    case 110:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var6 = var4[var6];
                        var9 = var5.bind(var2)(var6);
                        var8 = var9.createModifiedProto;
                        var17 = _closure2_slot2;
                        var4 = var4[var13];
                        var4 = var5.bind(var2)(var4);
                        var15 = var4.PreloadedUserSettings;
                        var14 = _closure2_slot1;
                        var19 = var9;
                        var18 = var10;
                        var16 = var11;
                        var11 = var19[var8](var18, var17, var16, var15, var14, var13);
                        if (!(var1 != var11)) {
                            _fun41818_ip = 369;
                            continue _fun41818
                        }
                    case 176:
                        var12 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 6;
                        var1 = var8[var1];
                        var1 = var12.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.patch;
                        var1 = {};
                        var10 = _closure1_slot7;
                        var9 = var10.FAMILY_CENTER_TEEN_SETTINGS;
                        var6 = _closure2_slot0;
                        var6 = var9.bind(var10)(var6);
                        var1.url = var6;
                        var6 = {};
                        var9 = 10;
                        var9 = var8[var9];
                        var10 = var12.bind(var2)(var9);
                        var9 = var10.protoToB64;
                        var8 = var8[var13];
                        var8 = var12.bind(var2)(var8);
                        var8 = var8.PreloadedUserSettings;
                        var8 = var9.bind(var10)(var8, var11);
                        var6.settings = var8;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 297);
                    case 295:
                        return var1;
                    case 297:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun41818_ip = 372;
                            continue _fun41818
                        }
                    case 303:
                        var4 = var1.body;
                        var6 = var4.settings;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS';
                        var3.type = var8;
                        var7 = _closure2_slot0;
                        var3.userId = var7;
                        var3.settings = var6;
                        var3 = var4.bind(var5)(var3);
                    case 369:
                        return var2;
                    case 372:
                        return var1;
                    case 375:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.updateTeenSettings = var4;
    var4 = function arg0, arg1, arg2() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var5 = _closure1_slot7;
        var4 = var5.FAMILY_CENTER_TEEN_CONSENTS;
        var4 = var4.bind(var5)(var6);
        var1.url = var4;
        var4 = {};
        var5 = arg1;
        var4.grant = var5;
        var5 = arg2;
        var4.revoke = var5;
        var1.body = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var4 = var0.body;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS';
            var1.type = var5;
            var5 = _closure2_slot0;
            var1.userId = var5;
            var1.consents = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.updateTeenConsents = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/FamilyCenterActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateLinkForUserId = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.removeLinkForUserId = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getLinkCodeForCurrentUser = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.shareIarWithParents = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4560, 4558, 660, 4561, 806, 507, 795, 1356, 1311, 1344, 2]);