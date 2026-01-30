// modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var21 = require;
    var2 = exports;
    var22 = dependencyMap;
    var _closure1_slot0 = var21;
    var _closure1_slot1 = var22;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var22[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var22[var3];
    var3 = var21.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var22[var3];
    var3 = var21.bind(var0)(var3);
    var3 = var3.PriceTierTypes;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49706: for (var _fun49706_ip = 0;;) switch (_fun49706_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49706_ip = 171;
                            continue _fun49706
                        }
                    case 10:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = arg2;
                    case 19: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.patch;
                        var1 = {};
                        var8 = _closure1_slot3;
                        var7 = var8.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                        var5 = var7.bind(var8)(var6, var5);
                        var1.url = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 96);
                    case 94:
                        return var1;
                    case 96:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49706_ip = 110;
                            continue _fun49706
                        }
                    case 102:
                        var2 = var1.body;
                    case 107: // try_end0
                        return var2;
                    case 110:
                        return var1;
                    case 113: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var2;
                        var10 = var3;
                        var1 = new var11[var1](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 171:
                        return var0;
                }
            };
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
    var19 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49710: for (var _fun49710_ip = 0;;) switch (_fun49710_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49710_ip = 167;
                            continue _fun49710
                        }
                    case 10:
                        var5 = arg0;
                        var4 = arg1;
                    case 16: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var7 = _closure1_slot3;
                        var6 = var7.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 92);
                    case 90:
                        return var1;
                    case 92:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49710_ip = 106;
                            continue _fun49710
                        }
                    case 98:
                        var2 = var1.body;
                    case 103: // try_end0
                        return var2;
                    case 106:
                        return var1;
                    case 109: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var9 = var2;
                        var8 = var3;
                        var1 = new var9[var1](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 167:
                        return var0;
                }
            };
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
    var18 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49714: for (var _fun49714_ip = 0;;) switch (_fun49714_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49714_ip = 159;
                            continue _fun49714
                        }
                    case 10:
                        var6 = arg0;
                        var5 = arg1;
                    case 16: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.del;
                        var1 = {};
                        var8 = _closure1_slot3;
                        var7 = var8.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                        var5 = var7.bind(var8)(var6, var5);
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 89);
                    case 87:
                        return var1;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49714_ip = 98;
                            continue _fun49714
                        }
                    case 95: // try_end0
                        return var2;
                    case 98:
                        return var1;
                    case 101: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var2;
                        var10 = var3;
                        var1 = new var11[var1](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 159:
                        return var0;
                }
            };
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
    var17 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49718: for (var _fun49718_ip = 0;;) switch (_fun49718_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49718_ip = 239;
                            continue _fun49718
                        }
                    case 13:
                        var9 = arg0;
                        var6 = arg1;
                        var7 = var4.priceTier;
                        var1 = null;
                        var3 = Object.create(var1);
                        var1 = 0;
                        var3.priceTier = var1;
                        var14 = {};
                        var13 = var4;
                        var12 = var3;
                        var8 = copyDataProperties(var14, var13, var12);
                        var5 = undefined;
                        SaveGenerator(address = 55);
                    case 53:
                        return var5;
                    case 55:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49718_ip = 236;
                            continue _fun49718
                        }
                    case 64: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 3;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {};
                        var11 = _closure1_slot3;
                        var10 = var11.GUILD_ROLE_SUBSCRIPTION_LISTINGS;
                        var6 = var10.bind(var11)(var9, var6);
                        var2.url = var6;
                        var6 = {};
                        var13 = var8;
                        var14 = var6;
                        var8 = copyDataProperties(var14, var13);
                        var8 = var7;
                        var7 = 'price_tier';
                        var6[var7] = var8;
                        var2.body = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 163);
                    case 161:
                        return var2;
                    case 163:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49718_ip = 177;
                            continue _fun49718
                        }
                    case 169:
                        var3 = var2.body;
                    case 174: // try_end0
                        return var3;
                    case 177:
                        return var2;
                    case 180: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.APIError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var15 = var3;
                        var14 = var4;
                        var2 = new var15[var2](var14, var13);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 236:
                        return var1;
                    case 239:
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
    var16 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2, arg3) { // Environment: var0
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun49722: for (var _fun49722_ip = 0;;) switch (_fun49722_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg3;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49722_ip = 243;
                            continue _fun49722
                        }
                    case 13:
                        var10 = arg0;
                        var9 = arg1;
                        var6 = arg2;
                        var7 = var4.priceTier;
                        var1 = null;
                        var3 = Object.create(var1);
                        var1 = 0;
                        var3.priceTier = var1;
                        var15 = {};
                        var14 = var4;
                        var13 = var3;
                        var8 = copyDataProperties(var15, var14, var13);
                        var5 = undefined;
                        SaveGenerator(address = 58);
                    case 56:
                        return var5;
                    case 58:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49722_ip = 240;
                            continue _fun49722
                        }
                    case 67: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 3;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.patch;
                        var2 = {};
                        var12 = _closure1_slot3;
                        var11 = var12.GUILD_ROLE_SUBSCRIPTION_LISTINGS;
                        var6 = var11.bind(var12)(var10, var9, var6);
                        var2.url = var6;
                        var6 = {};
                        var14 = var8;
                        var15 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var8 = var7;
                        var7 = 'price_tier';
                        var6[var7] = var8;
                        var2.body = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 167);
                    case 165:
                        return var2;
                    case 167:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49722_ip = 181;
                            continue _fun49722
                        }
                    case 173:
                        var3 = var2.body;
                    case 178: // try_end0
                        return var3;
                    case 181:
                        return var2;
                    case 184: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.APIError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var16 = var3;
                        var15 = var4;
                        var2 = new var16[var2](var15, var14);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 240:
                        return var1;
                    case 243:
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
    var15 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49726: for (var _fun49726_ip = 0;;) switch (_fun49726_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49726_ip = 231;
                            continue _fun49726
                        }
                    case 13:
                        var7 = arg0;
                        var5 = undefined;
                        if (!(var1 === var5)) {
                            _fun49726_ip = 34;
                            continue _fun49726
                        }
                    case 22:
                        var4 = {};
                        var8 = false;
                        var4.includeSoftDeleted = var8;
                        var1 = var4;
                    case 34:
                        var3 = var1;
                        var6 = undefined;
                        SaveGenerator(address = 43);
                    case 41:
                        return var5;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49726_ip = 228;
                            continue _fun49726
                        }
                    case 52:
                        var2 = {};
                        var4 = var3.includeSoftDeleted;
                        var2.include_soft_deleted = var4;
                        var3 = var3.countryCode;
                        var2.country_code = var3;
                        var6 = var2;
                    case 81: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 3;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var9 = _closure1_slot3;
                        var8 = var9.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                        var7 = var8.bind(var9)(var7);
                        var2.url = var7;
                        var2.query = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 155);
                    case 153:
                        return var2;
                    case 155:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49726_ip = 169;
                            continue _fun49726
                        }
                    case 161:
                        var3 = var2.body;
                    case 166: // try_end0
                        return var3;
                    case 169:
                        return var2;
                    case 172: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.APIError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var11 = var3;
                        var10 = var4;
                        var2 = new var11[var2](var10, var9);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 228:
                        return var1;
                    case 231:
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
    var14 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49730: for (var _fun49730_ip = 0;;) switch (_fun49730_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49730_ip = 98;
                            continue _fun49730
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var6 = _closure1_slot3;
                        var5 = var6.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS;
                        var4 = arg0;
                        var4 = var5.bind(var6)(var4);
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 81);
                    case 79:
                        return var1;
                    case 81:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49730_ip = 95;
                            continue _fun49730
                        }
                    case 87:
                        var2 = var1.body;
                        return var2;
                    case 95:
                        return var1;
                    case 98:
                        return var0;
                }
            };
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
    var13 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49734: for (var _fun49734_ip = 0;;) switch (_fun49734_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49734_ip = 167;
                            continue _fun49734
                        }
                    case 10:
                        var5 = arg0;
                        var4 = arg1;
                    case 16: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.patch;
                        var1 = {};
                        var7 = _closure1_slot3;
                        var6 = var7.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 92);
                    case 90:
                        return var1;
                    case 92:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49734_ip = 106;
                            continue _fun49734
                        }
                    case 98:
                        var2 = var1.body;
                    case 103: // try_end0
                        return var2;
                    case 106:
                        return var1;
                    case 109: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var9 = var2;
                        var8 = var3;
                        var1 = new var9[var1](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 167:
                        return var0;
                }
            };
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
    var12 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49738: for (var _fun49738_ip = 0;;) switch (_fun49738_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49738_ip = 182;
                            continue _fun49738
                        }
                    case 10:
                        var5 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var4 = _closure1_slot3;
                        var4 = var4.PRICE_TIERS;
                        var1.url = var4;
                        var4 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.GUILD_ROLE_SUBSCRIPTIONS;
                        var4.price_tier_type = var6;
                        var4.guild_id = var5;
                        var1.query = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 107);
                    case 105:
                        return var1;
                    case 107:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49738_ip = 121;
                            continue _fun49738
                        }
                    case 113:
                        var2 = var1.body;
                    case 118: // try_end0
                        return var2;
                    case 121:
                        return var1;
                    case 124: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var2;
                        var7 = var3;
                        var1 = new var8[var1](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 182:
                        return var0;
                }
            };
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
    var11 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49742: for (var _fun49742_ip = 0;;) switch (_fun49742_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49742_ip = 224;
                            continue _fun49742
                        }
                    case 13:
                        var8 = arg0;
                        var6 = arg1;
                        var5 = undefined;
                        if (!(var1 === var5)) {
                            _fun49742_ip = 27;
                            continue _fun49742
                        }
                    case 25:
                        var1 = {};
                    case 27:
                        var7 = var1;
                        SaveGenerator(address = 34);
                    case 32:
                        return var5;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49742_ip = 221;
                            continue _fun49742
                        }
                    case 43: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 3;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var10 = _closure1_slot3;
                        var9 = var10.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                        var6 = var9.bind(var10)(var8, var6);
                        var2.url = var6;
                        var6 = {};
                        var8 = var7.includeDraftListings;
                        var6.include_draft_listings = var8;
                        var7 = var7.includeArchivedListings;
                        var6.include_archived_listings = var7;
                        var2.query = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 148);
                    case 146:
                        return var2;
                    case 148:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49742_ip = 162;
                            continue _fun49742
                        }
                    case 154:
                        var3 = var2.body;
                    case 159: // try_end0
                        return var3;
                    case 162:
                        return var2;
                    case 165: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.APIError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var13 = var3;
                        var12 = var4;
                        var2 = new var13[var2](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 221:
                        return var1;
                    case 224:
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
    var10 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49746: for (var _fun49746_ip = 0;;) switch (_fun49746_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49746_ip = 159;
                            continue _fun49746
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var6 = _closure1_slot3;
                        var5 = var6.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING;
                        var4 = var5.bind(var6)(var4);
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49746_ip = 98;
                            continue _fun49746
                        }
                    case 90:
                        var2 = var1.body;
                    case 95: // try_end0
                        return var2;
                    case 98:
                        return var1;
                    case 101: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var2;
                        var7 = var3;
                        var1 = new var8[var1](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 159:
                        return var0;
                }
            };
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
    var9 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49750: for (var _fun49750_ip = 0;;) switch (_fun49750_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49750_ip = 163;
                            continue _fun49750
                        }
                    case 10:
                        var7 = arg0;
                        var6 = arg1;
                        var5 = arg2;
                    case 19: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.del;
                        var1 = {};
                        var9 = _closure1_slot3;
                        var8 = var9.GUILD_ROLE_SUBSCRIPTION_LISTINGS;
                        var5 = var8.bind(var9)(var7, var6, var5);
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 93);
                    case 91:
                        return var1;
                    case 93:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49750_ip = 102;
                            continue _fun49750
                        }
                    case 99: // try_end0
                        return var2;
                    case 102:
                        return var1;
                    case 105: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var13 = var2;
                        var12 = var3;
                        var1 = new var13[var1](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 163:
                        return var0;
                }
            };
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
    var8 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49754: for (var _fun49754_ip = 0;;) switch (_fun49754_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49754_ip = 168;
                            continue _fun49754
                        }
                    case 10:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = arg2;
                    case 19: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var8 = _closure1_slot3;
                        var7 = var8.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 93);
                    case 91:
                        return var1;
                    case 93:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49754_ip = 107;
                            continue _fun49754
                        }
                    case 99:
                        var2 = var1.body;
                    case 104: // try_end0
                        return var2;
                    case 107:
                        return var1;
                    case 110: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var12 = var2;
                        var11 = var3;
                        var1 = new var12[var1](var11, var10);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 168:
                        return var0;
                }
            };
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
    var7 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49758: for (var _fun49758_ip = 0;;) switch (_fun49758_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49758_ip = 159;
                            continue _fun49758
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var6 = _closure1_slot3;
                        var5 = var6.GUILD_ROLE_SUBSCRIPTION_TRIALS;
                        var4 = var5.bind(var6)(var4);
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49758_ip = 98;
                            continue _fun49758
                        }
                    case 90:
                        var2 = var1.body;
                    case 95: // try_end0
                        return var2;
                    case 98:
                        return var1;
                    case 101: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var2;
                        var7 = var3;
                        var1 = new var8[var1](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 159:
                        return var0;
                }
            };
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
    var6 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49762: for (var _fun49762_ip = 0;;) switch (_fun49762_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49762_ip = 171;
                            continue _fun49762
                        }
                    case 10:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = arg2;
                    case 19: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.patch;
                        var1 = {};
                        var8 = _closure1_slot3;
                        var7 = var8.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL;
                        var5 = var7.bind(var8)(var6, var5);
                        var1.url = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 96);
                    case 94:
                        return var1;
                    case 96:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49762_ip = 110;
                            continue _fun49762
                        }
                    case 102:
                        var2 = var1.body;
                    case 107: // try_end0
                        return var2;
                    case 110:
                        return var1;
                    case 113: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var2;
                        var10 = var3;
                        var1 = new var11[var1](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 171:
                        return var0;
                }
            };
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
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun49766: for (var _fun49766_ip = 0;;) switch (_fun49766_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49766_ip = 167;
                            continue _fun49766
                        }
                    case 10:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = arg2;
                    case 19: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var8 = _closure1_slot3;
                        var7 = var8.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 92);
                    case 90:
                        return var1;
                    case 92:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49766_ip = 106;
                            continue _fun49766
                        }
                    case 98:
                        var2 = var1.body;
                    case 103: // try_end0
                        return var2;
                    case 106:
                        return var1;
                    case 109: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var12 = var2;
                        var11 = var3;
                        var1 = new var12[var1](var11, var10);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 167:
                        return var0;
                }
            };
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
    var4 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49770: for (var _fun49770_ip = 0;;) switch (_fun49770_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49770_ip = 193;
                            continue _fun49770
                        }
                    case 13:
                        var7 = arg0;
                        var5 = undefined;
                        if (!(var1 === var5)) {
                            _fun49770_ip = 24;
                            continue _fun49770
                        }
                    case 22:
                        var1 = {};
                    case 24:
                        var6 = var1.signal;
                        SaveGenerator(address = 34);
                    case 32:
                        return var5;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49770_ip = 190;
                            continue _fun49770
                        }
                    case 43: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 3;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var9 = _closure1_slot3;
                        var8 = var9.CREATOR_MONETIZATION_RESTRICTIONS;
                        var7 = var8.bind(var9)(var7);
                        var2.url = var7;
                        var2.signal = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 117);
                    case 115:
                        return var2;
                    case 117:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49770_ip = 131;
                            continue _fun49770
                        }
                    case 123:
                        var3 = var2.body;
                    case 128: // try_end0
                        return var3;
                    case 131:
                        return var2;
                    case 134: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.APIError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var11 = var3;
                        var10 = var4;
                        var2 = new var11[var2](var10, var9);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 190:
                        return var1;
                    case 193:
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
    var3 = var3.bind(var0)();
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49774: for (var _fun49774_ip = 0;;) switch (_fun49774_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49774_ip = 202;
                            continue _fun49774
                        }
                    case 10:
                        var7 = arg0;
                        var4 = undefined;
                        var3 = undefined;
                        var2 = undefined;
                    case 19: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var1 = 3;
                        var1 = var6[var1];
                        var1 = var5.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var5 = var6.get;
                        var1 = {};
                        var9 = _closure1_slot3;
                        var8 = var9.GUILD_DISCOVERY_SLUG;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun49774_ip = 143;
                            continue _fun49774
                        }
                    case 94:
                        var2 = var1;
                        var6 = var1.body;
                        var3 = var6;
                        var5 = null;
                        if (!(var5 == var6)) {
                            _fun49774_ip = 137;
                            continue _fun49774
                        }
                    case 111:
                        var5 = global;
                        var6 = var5.JSON;
                        var5 = var6.parse;
                        var2 = var2.text;
                        var2 = var5.bind(var6)(var2);
                        _fun49774_ip = 140;
                        continue _fun49774;
                    case 137:
                        var2 = var3;
                    case 140: // try_end0
                        return var2;
                    case 143:
                        return var1;
                    case 146: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 4;
                        var1 = var5[var1];
                        var1 = var2.bind(var4)(var1);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var2;
                        var10 = var3;
                        var1 = new var11[var1](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 202:
                        return var0;
                }
            };
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
    var1 = var1.bind(var0)();
    var20 = 5;
    var20 = var22[var20];
    var22 = var21.bind(var0)(var20);
    var21 = var22.fileFinishedImporting;
    var20 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx';
    var20 = var21.bind(var22)(var20);
    var2.updateGuildRoleSubscriptionGroupListing = var19;
    var2.createGuildRoleSubscriptionGroupListing = var18;
    var2.deleteGuildRoleSubscriptionGroupListing = var17;
    var2.createGuildRoleSubscriptionListing = var16;
    var2.updateGuildRoleSubscriptionListing = var15;
    var2.getGuildRoleSubscriptionGroupListingsForGuild = var14;
    var2.getGuildRoleSubscriptionsSettings = var13;
    var2.updateGuildRoleSubscriptionsSettings = var12;
    var2.getPriceTiers = var11;
    var2.getGuildRoleSubscriptionGroupListing = var10;
    var2.getGuildRoleSubscriptionGroupForSubscriptionPlan = var9;
    var2.deleteGuildRoleSubscriptionListing = var8;
    var2.archiveGuildRoleSubscriptionListing = var7;
    var2.getGuildRoleSubscriptionTrials = var6;
    var2.updateGuildRoleSubscriptionsTrial = var5;
    var2.getGuildRoleSubscriptionTrialEligibility = var4;
    var2.getGuildMonetizationRestrictions = var3;
    var2.fetchHighlightedCreatorGuildDetails = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 483, 507, 3309, 2]);