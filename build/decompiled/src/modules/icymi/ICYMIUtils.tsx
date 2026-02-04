// modules/icymi/ICYMIUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        _fun70925: for (var _fun70925_ip = 0;;) switch (_fun70925_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun70925_ip = 46;
                    continue _fun70925
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun70925_ip = 55;
                    continue _fun70925
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun70925_ip = 345;
                    continue _fun70925
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun70925_ip = 323;
                    continue _fun70925
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun70925_ip = 283;
                    continue _fun70925
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun70925_ip = 270;
                    continue _fun70925
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
                    _fun70925_ip = 163;
                    continue _fun70925
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun70925_ip = 179;
                    continue _fun70925
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun70925_ip = 249;
                    continue _fun70925
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun70925_ip = 249;
                    continue _fun70925
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun70925_ip = 234;
                    continue _fun70925
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun70925_ip = 247;
                    continue _fun70925
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun70925_ip = 265;
                continue _fun70925;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun70925_ip = 283;
                continue _fun70925;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun70925_ip = 323;
                    continue _fun70925
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
                    _fun70925_ip = 330;
                    continue _fun70925
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun70926: for (var _fun70926_ip = 0;;) switch (_fun70926_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun70926_ip = 56;
                                continue _fun70926
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
                            _fun70926_ip = 67;
                            continue _fun70926;
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
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun70927: for (var _fun70927_ip = 0;;) switch (_fun70927_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun70927_ip = 23;
                    continue _fun70927
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun70927_ip = 33;
                    continue _fun70927
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
                    _fun70927_ip = 70;
                    continue _fun70927
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun70927_ip = 55;
                    continue _fun70927
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var5 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = 'hydration-';
        var2 = arg0;
        var1 = '-';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot18 = var5;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun70932: for (var _fun70932_ip = 0;;) switch (_fun70932_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var6 = arg1;
                        var5 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun70932_ip = 356;
                            continue _fun70932
                        }
                    case 21:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var4 = _closure1_slot11;
                        var1 = var4.getHydratedItems;
                        var1 = var1.bind(var4)();
                        _closure4_slot0 = var1;
                        var1 = var3.slice;
                        var10 = var1.bind(var3)(var6, var5);
                        var1 = var10.length;
                        var12 = 0;
                        if (!(var12 !== var1)) {
                            _fun70932_ip = 350;
                            continue _fun70932
                        }
                    case 73:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 12;
                        var9 = var4[var1];
                        var11 = var3.bind(var2)(var9);
                        var9 = var11.loadHydratedAttempt;
                        var8 = _closure1_slot18;
                        var8 = var8.bind(var2)(var6, var5);
                        var8 = var9.bind(var11)(var8);
                        var9 = var10.filter;
                        var8 = function(arg0) { // Environment: var7
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var0.id;
                            var1 = var1[var0];
                            var0 = null;
                            var0 = var0 == var1;
                            return var0;
                        };
                        var14 = var9.bind(var10)(var8);
                        var9 = var14.filter;
                        var8 = function(arg0) { // Environment: var7
                            var0 = arg0;
                            var1 = var0.type;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.ICYMIItemTypes;
                            var0 = var0.MESSAGE;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var10 = var9.bind(var14)(var8);
                        var9 = var10.map;
                        var8 = function(arg0) { // Environment: var7
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.data;
                            var2 = var2.channel_id;
                            var0.channel_id = var2;
                            var1 = var1.data;
                            var1 = var1.message_id;
                            var0.message_id = var1;
                            return var0;
                        };
                        var16 = var9.bind(var10)(var8);
                        var9 = var14.map;
                        var8 = function(arg0) { // Environment: var7
                            _fun70936: for (var _fun70936_ip = 0;;) switch (_fun70936_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = var3.type;
                                    var4 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 11;
                                    var0 = var1[var0];
                                    var1 = undefined;
                                    var0 = var4.bind(var1)(var0);
                                    var0 = var0.ICYMIItemTypes;
                                    var0 = var0.MESSAGE;
                                    if (!(var2 !== var0)) {
                                        _fun70936_ip = 55;
                                        continue _fun70936
                                    }
                                case 49:
                                    var0 = new Array(0);
                                    return var0;
                                case 55:
                                    var0 = new Array(0);
                                    var2 = var3.data;
                                    var5 = var2.message_context;
                                    var2 = null;
                                    var6 = var2 == var5;
                                    var4 = undefined;
                                    if (var6) {
                                        _fun70936_ip = 87;
                                        continue _fun70936
                                    }
                                case 81:
                                    var4 = var5.reply_message_id;
                                case 87:
                                    if (!(var2 != var4)) {
                                        _fun70936_ip = 139;
                                        continue _fun70936
                                    }
                                case 91:
                                    var5 = var0.push;
                                    var4 = {};
                                    var6 = var3.data;
                                    var6 = var6.channel_id;
                                    var4.channel_id = var6;
                                    var6 = var3.data;
                                    var6 = var6.message_context;
                                    var6 = var6.reply_message_id;
                                    var4.message_id = var6;
                                    var4 = var5.bind(var0)(var4);
                                case 139:
                                    var4 = var3.data;
                                    var5 = var4.message_context;
                                    var6 = var2 == var5;
                                    var4 = undefined;
                                    if (var6) {
                                        _fun70936_ip = 165;
                                        continue _fun70936
                                    }
                                case 159:
                                    var4 = var5.before_message_id;
                                case 165:
                                    if (!(var2 != var4)) {
                                        _fun70936_ip = 217;
                                        continue _fun70936
                                    }
                                case 169:
                                    var5 = var0.push;
                                    var4 = {};
                                    var6 = var3.data;
                                    var6 = var6.channel_id;
                                    var4.channel_id = var6;
                                    var6 = var3.data;
                                    var6 = var6.message_context;
                                    var6 = var6.before_message_id;
                                    var4.message_id = var6;
                                    var4 = var5.bind(var0)(var4);
                                case 217:
                                    var4 = var3.data;
                                    var4 = var4.message_context;
                                    var5 = var2 == var4;
                                    var1 = undefined;
                                    if (var5) {
                                        _fun70936_ip = 243;
                                        continue _fun70936
                                    }
                                case 237:
                                    var1 = var4.after_message_id;
                                case 243:
                                    if (!(var2 != var1)) {
                                        _fun70936_ip = 295;
                                        continue _fun70936
                                    }
                                case 247:
                                    var2 = var0.push;
                                    var1 = {};
                                    var4 = var3.data;
                                    var4 = var4.channel_id;
                                    var1.channel_id = var4;
                                    var3 = var3.data;
                                    var3 = var3.message_context;
                                    var3 = var3.after_message_id;
                                    var1.message_id = var3;
                                    var1 = var2.bind(var0)(var1);
                                case 295:
                                    return var0;
                            }
                        };
                        var9 = var9.bind(var14)(var8);
                        var8 = var9.flat;
                        var11 = var8.bind(var9)();
                        var9 = var11.filter;
                        var8 = global;
                        var8 = var8.Boolean;
                        var11 = var9.bind(var11)(var8);
                        var9 = var14.filter;
                        var8 = function(arg0) { // Environment: var7
                            var0 = arg0;
                            var1 = var0.type;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.ICYMIItemTypes;
                            var0 = var0.ACTIVITY;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var13 = var9.bind(var14)(var8);
                        var9 = var13.map;
                        var8 = function(arg0) { // Environment: var7
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.data;
                            var2 = var2.user_id;
                            var0.user_id = var2;
                            var1 = var1.data;
                            var1 = var1.content_id;
                            var0.content_id = var1;
                            return var0;
                        };
                        var8 = var9.bind(var13)(var8);
                        var13 = var14.filter;
                        var9 = function(arg0) { // Environment: var7
                            var0 = arg0;
                            var1 = var0.type;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.ICYMIItemTypes;
                            var0 = var0.GENERATED_CANDIDATE;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var13 = var13.bind(var14)(var9);
                        var9 = var13.map;
                        var7 = function(arg0) { // Environment: var7
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.data;
                            var2 = var2.content_id;
                            var0.content_id = var2;
                            var2 = var1.data;
                            var2 = var2.guild_id;
                            var0.guild_id = var2;
                            var1 = var1.data;
                            var1 = var1.channel_id;
                            var0.channel_id = var1;
                            return var0;
                        };
                        var7 = var9.bind(var13)(var7);
                        var1 = var4[var1];
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.fetchHydrated;
                        var1 = {};
                        var9 = new Array(0);
                        var17 = var9;
                        var15 = 0;
                        var15 = arraySpread(var17, var16, var15);
                        var17 = var9;
                        var16 = var11;
                        var10 = arraySpread(var17, var16, var15);
                        var1.messageItems = var9;
                        var1.activityItems = var8;
                        var1.generatedCandidateItems = var7;
                        var1 = var3.bind(var4)(var6, var5, var1);
                        SaveGenerator(address = 344);
                    case 342:
                        return var1;
                    case 344:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun70932_ip = 353;
                            continue _fun70932
                        }
                    case 350:
                        return var2;
                    case 353:
                        return var1;
                    case 356:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun70943: for (var _fun70943_ip = 0;;) switch (_fun70943_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun70943_ip = 137;
                            continue _fun70943
                        }
                    case 10:
                        var3 = _closure1_slot11;
                        var2 = var3.getUnreadDisplayItems;
                        var9 = var2.bind(var3)();
                        var3 = _closure1_slot11;
                        var2 = var3.getReadDisplayItems;
                        var6 = var2.bind(var3)();
                        var3 = _closure1_slot11;
                        var2 = var3.getNextIndexToHydrate;
                        var5 = var2.bind(var3)();
                        var4 = _closure1_slot19;
                        var3 = new Array(0);
                        var8 = 0;
                        var10 = var3;
                        var8 = arraySpread(var10, var9, var8);
                        var10 = var3;
                        var9 = var6;
                        var2 = arraySpread(var10, var9, var8);
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var6.bind(var2)(var1);
                        var1 = var1.ICYMI_PAGE_SIZE;
                        var1 = var5 + var1;
                        var1 = var4.bind(var2)(var3, var5, var1);
                        SaveGenerator(address = 125);
                    case 123:
                        return var1;
                    case 125:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun70943_ip = 134;
                            continue _fun70943
                        }
                    case 131:
                        return var2;
                    case 134:
                        return var1;
                    case 137:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun70946: for (var _fun70946_ip = 0;;) switch (_fun70946_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun70946_ip = 399;
                            continue _fun70946
                        }
                    case 12:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var7 = undefined;
                        var _closure4_slot1 = var7;
                        var _closure4_slot2 = var7;
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = 23;
                        var2 = var1[var4];
                        var5 = var5.bind(var7)(var2);
                        var2 = 22;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var5.bind(var7)(var2, var1);
                        SaveGenerator(address = 74);
                    case 72:
                        return var1;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun70946_ip = 396;
                            continue _fun70946
                        }
                    case 83:
                        var2 = var1.ack;
                        _closure4_slot1 = var2;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = var2[var4];
                        var5 = var5.bind(var7)(var4);
                        var4 = 24;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var7)(var4, var2);
                        SaveGenerator(address = 132);
                    case 130:
                        return var2;
                    case 132:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun70946_ip = 393;
                            continue _fun70946
                        }
                    case 141:
                        var4 = var2.AnalyticsObjectTypes;
                        _closure4_slot2 = var4;
                        var5 = _closure1_slot11;
                        var4 = var5.getDehydratedItems;
                        var5 = var4.bind(var5)();
                        var4 = var5.forEach;
                        var3 = function(arg0) { // Environment: var3
                            _fun70947: for (var _fun70947_ip = 0;;) switch (_fun70947_ip) {
                                case 0:
                                    var1 = arg0;
                                    var4 = var1.type;
                                    var5 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 11;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var3 = var5.bind(var0)(var3);
                                    var3 = var3.ICYMIItemTypes;
                                    var3 = var3.MESSAGE;
                                    var3 = var4 === var3;
                                    if (!var3) {
                                        _fun70947_ip = 77;
                                        continue _fun70947
                                    }
                                case 52:
                                    var4 = var1.data;
                                    var5 = var4.channel_type;
                                    var4 = _closure1_slot13;
                                    var4 = var4.GUILD_ANNOUNCEMENT;
                                    var3 = var5 === var4;
                                case 77:
                                    if (!var3) {
                                        _fun70947_ip = 154;
                                        continue _fun70947
                                    }
                                case 80:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 14;
                                    var4 = var6[var4];
                                    var7 = var5.bind(var0)(var4);
                                    var6 = var7.compare;
                                    var8 = _closure1_slot10;
                                    var5 = var8.ackMessageId;
                                    var4 = var1.data;
                                    var4 = var4.channel_id;
                                    var5 = var5.bind(var8)(var4);
                                    var4 = var1.data;
                                    var4 = var4.message_id;
                                    var5 = var6.bind(var7)(var5, var4);
                                    var4 = 0;
                                    var3 = var5 >= var4;
                                case 154:
                                    if (!var3) {
                                        _fun70947_ip = 258;
                                        continue _fun70947
                                    }
                                case 157:
                                    var5 = _closure4_slot1;
                                    var3 = var1.data;
                                    var4 = var3.channel_id;
                                    var3 = {};
                                    var7 = _closure4_slot0;
                                    var3.object = var7;
                                    var6 = _closure4_slot2;
                                    var6 = var6.ACK_SEMI_AUTOMATIC;
                                    var3.objectType = var6;
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var2 = 14;
                                    var2 = var7[var2];
                                    var6 = var6.bind(var0)(var2);
                                    var2 = var6.atPreviousMillisecond;
                                    var1 = var1.data;
                                    var1 = var1.message_id;
                                    var9 = var2.bind(var6)(var1);
                                    var14 = undefined;
                                    var13 = var4;
                                    var12 = var3;
                                    var11 = true;
                                    var10 = true;
                                    var1 = var14[var5](var13, var12, var11, var10, var9, var8);
                                case 258:
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var10 = 12;
                        var3 = var3[var10];
                        var4 = var4.bind(var7)(var3);
                        var3 = var4.clearReadStates;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 216);
                    case 214:
                        return var3;
                    case 216:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun70946_ip = 390;
                            continue _fun70946
                        }
                    case 225:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var10];
                        var6 = var5.bind(var7)(var4);
                        var5 = var6.fetchDehydrated;
                        var4 = {
                            'isReloading': true,
                            'forceRefresh': true
                        };
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address = 271);
                    case 269:
                        return var4;
                    case 271:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun70946_ip = 387;
                            continue _fun70946
                        }
                    case 277:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var10];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.reloadICYMITab;
                        var5 = var5.bind(var6)();
                        SaveGenerator(address = 308);
                    case 306:
                        return var5;
                    case 308:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun70946_ip = 384;
                            continue _fun70946
                        }
                    case 314:
                        var9 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var10];
                        var9 = var9.bind(var7)(var6);
                        var6 = var9.getGuildChannelScores;
                        var6 = var6.bind(var9)();
                        SaveGenerator(address = 345);
                    case 343:
                        return var6;
                    case 345:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 9);
                        if (var9) {
                            _fun70946_ip = 381;
                            continue _fun70946
                        }
                    case 351:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var9 = var9.bind(var7)(var8);
                        var8 = var9.getRecommendedGuilds;
                        var8 = var8.bind(var9)();
                        return var7;
                    case 381:
                        return var6;
                    case 384:
                        return var5;
                    case 387:
                        return var4;
                    case 390:
                        return var3;
                    case 393:
                        return var2;
                    case 396:
                        return var1;
                    case 399:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var13 = 0;
    var4 = var8[var13];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var8[var12];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var11 = 2;
    var4 = var8[var11];
    var4 = var7.bind(var0)(var4);
    var4 = var4.ThreadChannelRecord;
    var _closure1_slot5 = var4;
    var10 = 3;
    var4 = var8[var10];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var9 = 4;
    var4 = var8[var9];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var6 = var4.ChannelTypes;
    var _closure1_slot13 = var6;
    var4 = var4.GuildNSFWContentLevel;
    var _closure1_slot14 = var4;
    var4 = {};
    var4.UNKNOWN = var13;
    var6 = 'UNKNOWN';
    var4[var13] = var6;
    var4.DEFAULT = var12;
    var6 = 'DEFAULT';
    var4[var12] = var6;
    var4.MORE = var11;
    var6 = 'MORE';
    var4[var11] = var6;
    var4.LESS = var10;
    var6 = 'LESS';
    var4[var10] = var6;
    var4.MUTED = var9;
    var6 = 'MUTED';
    var4[var9] = var6;
    var _closure1_slot15 = var4;
    var6 = 25;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/icymi/ICYMIUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.generateHydrationId = var5;
    var2.ICYMICustomScore = var4;
    var4 = function arg0() {
        _fun70948: for (var _fun70948_ip = 0;;) switch (_fun70948_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.type;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 11;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var6.bind(var4)(var0);
                var0 = var0.ICYMIItemTypes;
                var0 = var0.MESSAGE;
                var0 = var3 === var0;
                if (var0) {
                    _fun70948_ip = 90;
                    continue _fun70948
                }
            case 52:
                var6 = var2.type;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var7.bind(var4)(var3);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.GENERATED_CANDIDATE;
                var0 = var6 === var3;
            case 90:
                if (var0) {
                    _fun70948_ip = 131;
                    continue _fun70948
                }
            case 93:
                var2 = var2.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.GUILD_EVENT;
                var0 = var2 === var1;
            case 131:
                return var0;
        }
    };
    var2.isGuildItem = var4;
    var4 = function arg0() {
        _fun70949: for (var _fun70949_ip = 0;;) switch (_fun70949_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.type;
                var0 = _closure1_slot13;
                var0 = var0.GUILD_FORUM;
                var0 = var1 === var0;
                if (var0) {
                    _fun70949_ip = 72;
                    continue _fun70949
                }
            case 28:
                var4 = var3.type;
                var1 = _closure1_slot13;
                var1 = var1.GUILD_ANNOUNCEMENT;
                var1 = var4 === var1;
                if (var1) {
                    _fun70949_ip = 69;
                    continue _fun70949
                }
            case 50:
                var3 = var3.type;
                var2 = _closure1_slot13;
                var2 = var2.GUILD_TEXT;
                var1 = var3 === var2;
            case 69:
                var0 = var1;
            case 72:
                return var0;
        }
    };
    var2.isChannelCustomScoreEligible = var4;
    var4 = function arg0() {
        _fun70950: for (var _fun70950_ip = 0;;) switch (_fun70950_ip) {
            case 0:
                var1 = arg0;
                var0 = -1.5;
                if (!(!(var1 < var0))) {
                    _fun70950_ip = 72;
                    continue _fun70950
                }
            case 17:
                var0 = 0;
                if (!(!(var1 < var0))) {
                    _fun70950_ip = 57;
                    continue _fun70950
                }
            case 23:
                if (!(!(var1 > var0))) {
                    _fun70950_ip = 42;
                    continue _fun70950
                }
            case 27:
                var0 = _closure1_slot15;
                var0 = var0.DEFAULT;
                _fun70950_ip = 55;
                continue _fun70950;
            case 42:
                var1 = _closure1_slot15;
                var0 = var1.MORE;
            case 55:
                _fun70950_ip = 70;
                continue _fun70950;
            case 57:
                var1 = _closure1_slot15;
                var0 = var1.LESS;
            case 70:
                _fun70950_ip = 85;
                continue _fun70950;
            case 72:
                var1 = _closure1_slot15;
                var0 = var1.MUTED;
            case 85:
                return var0;
        }
    };
    var2.numberToCustomScore = var4;
    var4 = function arg0() {
        _fun70951: for (var _fun70951_ip = 0;;) switch (_fun70951_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot15;
                var2 = var2.MORE;
                if (!(var2 !== var1)) {
                    _fun70951_ip = 68;
                    continue _fun70951
                }
            case 20:
                var2 = _closure1_slot15;
                var2 = var2.LESS;
                if (!(var2 !== var1)) {
                    _fun70951_ip = 60;
                    continue _fun70951
                }
            case 34:
                var0 = _closure1_slot15;
                var0 = var0.MUTED;
                if (!(var0 !== var1)) {
                    _fun70951_ip = 52;
                    continue _fun70951
                }
            case 48:
                var0 = 0;
                return var0;
            case 52:
                var0 = -2;
                return var0;
            case 60:
                var0 = -1;
                return var0;
            case 68:
                var0 = 1;
                return var0;
        }
    };
    var2.customScoreToNumber = var4;
    var2.hydrateItems = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.hydrateNextPage = var3;
    var3 = function arg0() {
        _fun70953: for (var _fun70953_ip = 0;;) switch (_fun70953_ip) {
            case 0:
                var2 = arg0;
                var3 = new Array(0);
                var0 = var2.messages;
                var9 = null;
                if (!(var9 != var0)) {
                    _fun70953_ip = 25;
                    continue _fun70953
                }
            case 19:
                var3 = var2.messages;
            case 25:
                var1 = new Array(0);
                var0 = _closure1_slot16;
                var7 = undefined;
                var6 = var0.bind(var7)(var3);
                var3 = var6.bind(var7)();
                var0 = var3.done;
                var5 = 13;
                var4 = var3;
                var3 = null;
                if (var0) {
                    _fun70953_ip = 156;
                    continue _fun70953
                }
            case 63:
                var0 = var4.value;
                var10 = var0.author;
                if (!(var9 != var10)) {
                    _fun70953_ip = 141;
                    continue _fun70953
                }
            case 78:
                var10 = _closure1_slot6;
                var10 = var0 instanceof var10;
                var11 = var0;
                if (var10) {
                    _fun70953_ip = 120;
                    continue _fun70953
                }
            case 92:
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var5];
                var12 = var12.bind(var7)(var10);
                var10 = var12.createMessageRecord;
                var11 = var10.bind(var12)(var0);
            case 120:
                var10 = var1.push;
                var10 = var10.bind(var1)(var11);
                var0 = var0.author;
                var3 = var0.id;
            case 141:
                var10 = var6.bind(var7)();
                var0 = var10.done;
                var4 = var10;
                if (!var0) {
                    _fun70953_ip = 63;
                    continue _fun70953
                }
            case 156:
                var0 = {};
                var3 = var2.guild_id;
                var0.guild_id = var3;
                var3 = var2.content_id;
                var0.content_id = var3;
                var3 = var2.channel_id;
                var0.channel_id = var3;
                var3 = var2.type;
                var0.type = var3;
                var3 = var2.primary_text;
                var0.primary_text = var3;
                var3 = var2.secondary_text;
                var0.secondary_text = var3;
                var3 = var2.message_ids;
                var0.message_ids = var3;
                var3 = var2.message_scores;
                var0.message_scores = var3;
                var3 = var2.user_ids;
                var0.user_ids = var3;
                var3 = var2.image_urls;
                var0.image_urls = var3;
                var2 = var2.created_at;
                var0.created_at = var2;
                var0.messages = var1;
                return var0;
        }
    };
    var2.createGravityGeneratedCandidateFromServer = var3;
    var3 = function arg0, arg1() {
        _fun70954: for (var _fun70954_ip = 0;;) switch (_fun70954_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var7 = arg1;
                var8 = var0;
                var2 = copyDataProperties(var8, var7);
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 13;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.createMessageRecord;
                var4 = var1.message;
                var5 = var5.bind(var6)(var4);
                var4 = 'message';
                var0[var4] = var5;
                var5 = var1.thread_channel;
                var4 = null;
                var4 = var4 != var5;
                if (!var4) {
                    _fun70954_ip = 107;
                    continue _fun70954
                }
            case 80:
                var5 = _closure1_slot5;
                var4 = var5.fromServer;
                var3 = var1.thread_channel;
                var1 = var1.guild_id;
                var2 = var4.bind(var5)(var3, var1);
            case 107:
                var1 = 'threadChannel';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.createGravityMessageFromServer = var3;
    var3 = function arg0, arg1() {
        _fun70955: for (var _fun70955_ip = 0;;) switch (_fun70955_ip) {
            case 0:
                var3 = _closure1_slot10;
                var2 = var3.getTrackedAckMessageId;
                var0 = arg0;
                var4 = var2.bind(var3)(var0);
                var0 = null;
                var0 = var0 == var4;
                if (var0) {
                    _fun70955_ip = 90;
                    continue _fun70955
                }
            case 30:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 14;
                var2 = var6[var1];
                var3 = undefined;
                var8 = var5.bind(var3)(var2);
                var7 = var8.extractTimestamp;
                var2 = arg1;
                var2 = var7.bind(var8)(var2);
                var1 = var6[var1];
                var3 = var5.bind(var3)(var1);
                var1 = var3.extractTimestamp;
                var1 = var1.bind(var3)(var4);
                var0 = var2 > var1;
            case 90:
                return var0;
        }
    };
    var2.isItemUnreadInChannel = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 15;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot9;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot11;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun70957: for (var _fun70957_ip = 0;;) switch (_fun70957_ip) {
                case 0:
                    var5 = _closure1_slot9;
                    var4 = var5.getMessage;
                    var0 = _closure2_slot0;
                    var2 = var0.getChannelId;
                    var2 = var2.bind(var0)();
                    var0 = var0.id;
                    var0 = var4.bind(var5)(var2, var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun70957_ip = 88;
                        continue _fun70957
                    }
                case 47:
                    var5 = _closure1_slot11;
                    var4 = var5.getHydratedItem;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var4 = var4.bind(var5)(var3);
                    var5 = var2 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun70957_ip = 85;
                        continue _fun70957
                    }
                case 80:
                    var3 = var4.message;
                case 85:
                    var0 = var3;
                case 88:
                    if (!(var2 == var0)) {
                        _fun70957_ip = 96;
                        continue _fun70957
                    }
                case 92:
                    var0 = _closure2_slot0;
                case 96:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGravityMessage = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 15;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot11;
        var2 = new Array(1);
        var2[0] = var5;
        var5 = var1.id;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot11;
            var1 = var2.getHydratedItem;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGravityMessageItem = var3;
    var3 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 15;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var7 = _closure1_slot9;
        var2 = new Array(2);
        var2[0] = var7;
        var1 = _closure1_slot11;
        var2[1] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun70961: for (var _fun70961_ip = 0;;) switch (_fun70961_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var2 = null;
                    var1 = var2 != var0;
                    var0 = null;
                    if (!var1) {
                        _fun70961_ip = 88;
                        continue _fun70961
                    }
                case 18:
                    var7 = _closure1_slot9;
                    var6 = var7.getMessage;
                    var5 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var6.bind(var7)(var5, var1);
                    if (!(var2 == var1)) {
                        _fun70961_ip = 85;
                        continue _fun70961
                    }
                case 49:
                    var5 = _closure1_slot11;
                    var4 = var5.getHydratedItem;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
                    var4 = var2 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun70961_ip = 82;
                        continue _fun70961
                    }
                case 77:
                    var2 = var3.message;
                case 82:
                    var1 = var2;
                case 85:
                    var0 = var1;
                case 88:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useICYMIMessage = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 16;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getICYMIEnabled;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.icymiEnabled = var3;
    var3 = function arg0() {
        _fun70963: for (var _fun70963_ip = 0;;) switch (_fun70963_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.id;
                var0.id = var2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var2 = var2.ICYMIItemTypes;
                var2 = var2.CUSTOM_STATUS;
                var0.type = var2;
                var2 = {};
                var3 = var1.id;
                var2.id = var3;
                var3 = var1.data;
                var3 = var3.user_id;
                var2.author_id = var3;
                var3 = 17;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.ContentInventoryAuthorType;
                var3 = var3.USER;
                var2.author_type = var3;
                var3 = new Array(0);
                var2.traits = var3;
                var3 = new Array(0);
                var2.participants = var3;
                var3 = 18;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.ContentInventoryEntryType;
                var3 = var3.CUSTOM_STATUS;
                var2.content_type = var3;
                var3 = {};
                var4 = 'custom_status_extra';
                var3.type = var4;
                var4 = var1.data;
                var5 = var4.text;
                var4 = null;
                var6 = var4 != var5;
                var4 = '';
                if (!var6) {
                    _fun70963_ip = 196;
                    continue _fun70963
                }
            case 193:
                var4 = var5;
            case 196:
                var3.status = var4;
                var4 = var1.data;
                var4 = var4.emoji_id;
                var3.emoji_id = var4;
                var4 = var1.data;
                var4 = var4.emoji_name;
                var3.emoji_name = var4;
                var4 = var1.data;
                var4 = var4.emoji_animated;
                var3.emoji_animated = var4;
                var4 = var1.data;
                var4 = var4.attachments;
                var3.attachments = var4;
                var2.extra = var3;
                var0.activity = var2;
                var2 = var1.score;
                var0.score = var2;
                var1 = var1.score_components;
                var0.score_components = var1;
                return var0;
        }
    };
    var2.customStatusToContentInventoryEntry = var3;
    var3 = function arg0, arg1, arg2() {
        _fun70964: for (var _fun70964_ip = 0;;) switch (_fun70964_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var1 = arg2;
                var3 = _closure1_slot12;
                var2 = var3.getReadTimestamp;
                var4 = var2.bind(var3)(var6);
                var2 = null;
                if (!(var2 == var4)) {
                    _fun70964_ip = 49;
                    continue _fun70964
                }
            case 33:
                var7 = var2 == var1;
                var3 = undefined;
                if (var7) {
                    _fun70964_ip = 46;
                    continue _fun70964
                }
            case 42:
                var3 = var1[var6];
            case 46:
                var4 = var3;
            case 49:
                var3 = _closure1_slot12;
                var0 = var3.getReadTimestamp;
                var3 = var0.bind(var3)(var5);
                if (!(var2 == var3)) {
                    _fun70964_ip = 84;
                    continue _fun70964
                }
            case 68:
                var6 = var2 == var1;
                var0 = undefined;
                if (var6) {
                    _fun70964_ip = 81;
                    continue _fun70964
                }
            case 77:
                var0 = var1[var5];
            case 81:
                var3 = var0;
            case 84:
                if (!(var2 == var4)) {
                    _fun70964_ip = 97;
                    continue _fun70964
                }
            case 88:
                var1 = var2 == var3;
                var0 = 0;
                if (var1) {
                    _fun70964_ip = 130;
                    continue _fun70964
                }
            case 97:
                var5 = var2 == var4;
                var1 = -1;
                if (var5) {
                    _fun70964_ip = 127;
                    continue _fun70964
                }
            case 110:
                var5 = var2 == var3;
                var2 = 1;
                if (var5) {
                    _fun70964_ip = 124;
                    continue _fun70964
                }
            case 120:
                var2 = var3 - var4;
            case 124:
                var1 = var2;
            case 127:
                var0 = var1;
            case 130:
                return var0;
        }
    };
    var2.compareGravityUnreadIds = var3;
    var3 = function arg0() {
        _fun70965: for (var _fun70965_ip = 0;;) switch (_fun70965_ip) {
            case 0:
                var10 = arg0;
                var2 = _closure1_slot11;
                var1 = var2.getUnreadDisplayItems;
                var16 = var1.bind(var2)();
                var3 = new Array(0);
                var2 = 0;
                var17 = var3;
                var15 = 0;
                var15 = arraySpread(var17, var16, var15);
                var5 = _closure1_slot11;
                var1 = var5.getReadDisplayItems;
                var16 = var1.bind(var5)();
                var17 = var3;
                var1 = arraySpread(var17, var16, var15);
                var5 = null;
                var _closure2_slot0 = var5;
                var1 = var10.length;
                var4 = 1;
                var8 = var1 - var4;
                var7 = 19;
                var6 = undefined;
                var1 = null;
                if (!(var8 >= var2)) {
                    _fun70965_ip = 174;
                    continue _fun70965
                }
            case 87:
                var11 = var10[var8];
                if (!(var5 != var11)) {
                    _fun70965_ip = 165;
                    continue _fun70965
                }
            case 95:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var7];
                var12 = var13.bind(var6)(var12);
                var14 = var12.NON_ELIGIBLE_SCROLL_ITEMS;
                var13 = var14.has;
                var12 = var11.item;
                var12 = var12.data;
                var12 = var12.kind;
                var12 = var13.bind(var14)(var12);
                if (var12) {
                    _fun70965_ip = 165;
                    continue _fun70965
                }
            case 146:
                var11 = var11.item;
                var11 = var11.id;
                _closure2_slot0 = var11;
                var1 = var11;
                _fun70965_ip = 174;
                continue _fun70965;
            case 165:
                var8 = var8 - 1;
                var1 = null;
                if (var8 >= var2) {
                    _fun70965_ip = 87;
                    continue _fun70965
                }
            case 174:
                if (!(var5 != var1)) {
                    _fun70965_ip = 223;
                    continue _fun70965
                }
            case 178:
                var1 = var3.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var1.bind(var3)(var0);
                if (!(!(var0 < var2))) {
                    _fun70965_ip = 217;
                    continue _fun70965
                }
            case 200:
                var1 = var3.slice;
                var0 = var0 + var4;
                var0 = var1.bind(var3)(var2, var0);
                _fun70965_ip = 221;
                continue _fun70965;
            case 217:
                var0 = new Array(0);
            case 221:
                return var0;
            case 223:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.getViewableFeedItemsArray = var3;
    var3 = function arg0() {
        _fun70967: for (var _fun70967_ip = 0;;) switch (_fun70967_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.data;
                var2 = var1.kind;
                var1 = 'message';
                if (!(var1 !== var2)) {
                    _fun70967_ip = 141;
                    continue _fun70967
                }
            case 21:
                var1 = 'generatedCandidate';
                if (!(var1 !== var2)) {
                    _fun70967_ip = 122;
                    continue _fun70967
                }
            case 31:
                var1 = 'forumThread';
                if (!(var1 !== var2)) {
                    _fun70967_ip = 102;
                    continue _fun70967
                }
            case 41:
                var1 = 'guildEvent';
                if (!(var1 !== var2)) {
                    _fun70967_ip = 53;
                    continue _fun70967
                }
            case 49:
                var1 = false;
                return var1;
            case 53:
                var3 = _closure1_slot4;
                var2 = var3.getGuildScheduledEvent;
                var1 = var0.data;
                var1 = var1.eventId;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                var2 = var2 == var1;
                var6 = undefined;
                if (var2) {
                    _fun70967_ip = 98;
                    continue _fun70967
                }
            case 93:
                var6 = var1.guild_id;
            case 98:
                var3 = undefined;
                _fun70967_ip = 158;
                continue _fun70967;
            case 102:
                var1 = var0.data;
                var1 = var1.threadChannel;
                var3 = var1.id;
                var6 = undefined;
                _fun70967_ip = 158;
                continue _fun70967;
            case 122:
                var1 = var0.data;
                var1 = var1.item;
                var3 = var1.channel_id;
                var6 = undefined;
                _fun70967_ip = 158;
                continue _fun70967;
            case 141:
                var0 = var0.data;
                var0 = var0.message;
                var3 = var0.channel_id;
                var6 = undefined;
            case 158:
                var2 = _closure1_slot7;
                var0 = var2.getChannel;
                var3 = var0.bind(var2)(var3);
                var4 = null;
                if (!(var4 != var3)) {
                    _fun70967_ip = 190;
                    continue _fun70967
                }
            case 181:
                var0 = var3.nsfw;
                if (var0) {
                    _fun70967_ip = 297;
                    continue _fun70967
                }
            case 190:
                var5 = var4 == var3;
                var0 = undefined;
                if (var5) {
                    _fun70967_ip = 204;
                    continue _fun70967
                }
            case 199:
                var0 = var3.guild_id;
            case 204:
                if (!(var4 != var0)) {
                    _fun70967_ip = 211;
                    continue _fun70967
                }
            case 208:
                var6 = var0;
            case 211:
                var0 = var4 != var6;
                var3 = null;
                if (!var0) {
                    _fun70967_ip = 234;
                    continue _fun70967
                }
            case 220:
                var5 = _closure1_slot8;
                var0 = var5.getGuild;
                var3 = var0.bind(var5)(var6);
            case 234:
                var0 = var4 == var3;
                var5 = undefined;
                if (var0) {
                    _fun70967_ip = 249;
                    continue _fun70967
                }
            case 243:
                var5 = var3.nsfwLevel;
            case 249:
                var0 = _closure1_slot14;
                var0 = var0.EXPLICIT;
                var0 = var5 === var0;
                if (var0) {
                    _fun70967_ip = 295;
                    continue _fun70967
                }
            case 266:
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun70967_ip = 281;
                    continue _fun70967
                }
            case 275:
                var2 = var3.nsfwLevel;
            case 281:
                var1 = _closure1_slot14;
                var1 = var1.AGE_RESTRICTED;
                var0 = var2 === var1;
            case 295:
                return var0;
            case 297:
                var0 = true;
                return var0;
        }
    };
    var2.isItemNSFW = var3;
    var3 = function arg0() {
        _fun70968: for (var _fun70968_ip = 0;;) switch (_fun70968_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.data;
                var6 = var0.kind;
                var0 = 'end';
                if (!(var0 !== var6)) {
                    _fun70968_ip = 314;
                    continue _fun70968
                }
            case 24:
                var1 = 'loading';
                if (!(var1 !== var6)) {
                    _fun70968_ip = 312;
                    continue _fun70968
                }
            case 35:
                var2 = 'bottomLoading';
                if (!(var2 !== var6)) {
                    _fun70968_ip = 310;
                    continue _fun70968
                }
            case 48:
                var4 = 'message';
                if (!(var4 !== var6)) {
                    _fun70968_ip = 237;
                    continue _fun70968
                }
            case 59:
                var3 = 'guildEvent';
                if (!(var3 !== var6)) {
                    _fun70968_ip = 229;
                    continue _fun70968
                }
            case 70:
                var3 = 'contentInventory';
                if (!(var3 !== var6)) {
                    _fun70968_ip = 158;
                    continue _fun70968
                }
            case 80:
                var3 = 'recommendedGuilds';
                if (!(var3 !== var6)) {
                    _fun70968_ip = 150;
                    continue _fun70968
                }
            case 90:
                var3 = 'forumThread';
                if (!(var3 !== var6)) {
                    _fun70968_ip = 142;
                    continue _fun70968
                }
            case 100:
                var3 = 'generatedCandidate';
                if (!(var3 !== var6)) {
                    _fun70968_ip = 134;
                    continue _fun70968
                }
            case 110:
                var3 = 'icymiHeader';
                if (!(var3 !== var6)) {
                    _fun70968_ip = 126;
                    continue _fun70968
                }
            case 120:
                var3 = 'unknown';
                return var3;
            case 126:
                var3 = 'icymi_header';
                return var3;
            case 134:
                var3 = 'generated_candidate';
                return var3;
            case 142:
                var3 = 'forum_thread';
                return var3;
            case 150:
                var3 = 'recommended_guilds';
                return var3;
            case 158:
                var3 = var5.data;
                var3 = var3.content;
                var7 = var3.content_type;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 18;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.ContentInventoryEntryType;
                var6 = var3.CUSTOM_STATUS;
                var3 = 'hotwheels_gaming_activity';
                if (!(var7 === var6)) {
                    _fun70968_ip = 227;
                    continue _fun70968
                }
            case 221:
                var3 = 'hotwheels_custom_status';
            case 227:
                return var3;
            case 229:
                var3 = 'guild_event';
                return var3;
            case 237:
                var7 = var5.channelType;
                var3 = _closure1_slot13;
                var6 = var3.GUILD_ANNOUNCEMENT;
                var3 = 'announcement';
                if (!(var7 !== var6)) {
                    _fun70968_ip = 308;
                    continue _fun70968
                }
            case 264:
                var5 = var5.data;
                var7 = var5.messageContext;
                var6 = null;
                var8 = var6 == var7;
                var5 = undefined;
                if (var8) {
                    _fun70968_ip = 292;
                    continue _fun70968
                }
            case 286:
                var5 = var7.external_content_application_id;
            case 292:
                var5 = var6 != var5;
                if (!var5) {
                    _fun70968_ip = 305;
                    continue _fun70968
                }
            case 299:
                var4 = 'game_message';
            case 305:
                var3 = var4;
            case 308:
                return var3;
            case 310:
                return var2;
            case 312:
                return var1;
            case 314:
                return var0;
        }
    };
    var2.itemToType = var3;
    var3 = function arg0, arg1() {
        _fun70969: for (var _fun70969_ip = 0;;) switch (_fun70969_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var5 = var3.type;
                var4 = _closure1_slot13;
                var4 = var4.GUILD_ANNOUNCEMENT;
                if (!(var5 !== var4)) {
                    _fun70969_ip = 466;
                    continue _fun70969
                }
            case 33:
                var4 = var3.type;
                var3 = _closure1_slot13;
                var3 = var3.GUILD_FORUM;
                if (!(var4 !== var3)) {
                    _fun70969_ip = 430;
                    continue _fun70969
                }
            case 55:
                var4 = var2.reactions;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun70969_ip = 129;
                    continue _fun70969
                }
            case 67:
                var5 = var2.reactions;
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var1
                    _fun70970: for (var _fun70970_ip = 0;;) switch (_fun70970_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.count_details;
                            var4 = null;
                            var1 = var4 == var0;
                            var0 = 0;
                            if (var1) {
                                _fun70970_ip = 72;
                                continue _fun70970
                            }
                        case 20:
                            var1 = var3.count_details;
                            var5 = var1.burst;
                            var6 = var4 != var5;
                            var1 = 0;
                            if (!var6) {
                                _fun70970_ip = 44;
                                continue _fun70970
                            }
                        case 41:
                            var1 = var5;
                        case 44:
                            var3 = var3.count_details;
                            var3 = var3.normal;
                            var4 = var4 != var3;
                            var2 = 0;
                            if (!var4) {
                                _fun70970_ip = 68;
                                continue _fun70970
                            }
                        case 65:
                            var2 = var3;
                        case 68:
                            var0 = var1 + var2;
                        case 72:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var5 = var4.length;
                var3 = 0;
                if (!(var3 !== var5)) {
                    _fun70969_ip = 129;
                    continue _fun70969
                }
            case 101:
                var3 = var4.reduce;
                var1 = function(arg0, arg1) { // Environment: var1
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var1 + var0;
                    return var0;
                };
                var3 = var3.bind(var4)(var1);
                var1 = 10;
                if (!(!(var3 > var1))) {
                    _fun70969_ip = 394;
                    continue _fun70969
                }
            case 129:
                var1 = var2.attachments;
                var1 = var1.length;
                var8 = 0;
                if (!(!(var1 > var8))) {
                    _fun70969_ip = 236;
                    continue _fun70969
                }
            case 146:
                var1 = var2.embeds;
                var1 = var1.length;
                if (!(!(var1 > var8))) {
                    _fun70969_ip = 197;
                    continue _fun70969
                }
            case 161:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ContentType;
                var1 = var1.INTERESTING;
                _fun70969_ip = 231;
                continue _fun70969;
            case 197:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 11;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.ContentType;
                var1 = var3.LINK;
            case 231:
                _fun70969_ip = 392;
                continue _fun70969;
            case 236:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 20;
                var4 = var4[var3];
                var5 = undefined;
                var7 = var6.bind(var5)(var4);
                var6 = var7.isValidImageAttachment;
                var4 = var2.attachments;
                var4 = var4[var8];
                var7 = var6.bind(var7)(var4);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                if (var7) {
                    _fun70969_ip = 365;
                    continue _fun70969
                }
            case 290:
                var3 = var6[var3];
                var7 = var4.bind(var5)(var3);
                var3 = var7.isValidVideoAttachment;
                var2 = var2.attachments;
                var2 = var2[var8];
                var2 = var3.bind(var7)(var2);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 11;
                var3 = var8[var3];
                var3 = var7.bind(var5)(var3);
                var3 = var3.ContentType;
                if (var2) {
                    _fun70969_ip = 357;
                    continue _fun70969
                }
            case 349:
                var2 = var3.FILE;
                _fun70969_ip = 363;
                continue _fun70969;
            case 357:
                var2 = var3.VIDEO;
            case 363:
                _fun70969_ip = 389;
                continue _fun70969;
            case 365:
                var3 = 11;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.ContentType;
                var2 = var3.IMAGE;
            case 389:
                var1 = var2;
            case 392:
                return var1;
            case 394:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ContentType;
                var1 = var1.POPULAR_MESSAGE;
                return var1;
            case 430:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ContentType;
                var1 = var1.FORUM_POST;
                return var1;
            case 466:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.ContentType;
                var0 = var0.ANNOUNCEMENT;
                return var0;
        }
    };
    var2.determineContentType = var3;
    var3 = function arg0() {
        _fun70972: for (var _fun70972_ip = 0;;) switch (_fun70972_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun70972_ip = 14;
                    continue _fun70972
                }
            case 12:
                var1 = false;
            case 14:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 11;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.POPULAR_MESSAGE;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 1115;
                    continue _fun70972
                }
            case 56:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.IMAGE;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 1056;
                    continue _fun70972
                }
            case 92:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.VIDEO;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 997;
                    continue _fun70972
                }
            case 128:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.LINK;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 938;
                    continue _fun70972
                }
            case 164:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.THREAD;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 879;
                    continue _fun70972
                }
            case 200:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.FORUM_POST;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 820;
                    continue _fun70972
                }
            case 236:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.CHANGED_STATUS;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 761;
                    continue _fun70972
                }
            case 272:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.INTERESTING;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 702;
                    continue _fun70972
                }
            case 308:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.ANNOUNCEMENT;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 625;
                    continue _fun70972
                }
            case 344:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.FILE;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 566;
                    continue _fun70972
                }
            case 380:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.TRENDING_TOPIC;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 507;
                    continue _fun70972
                }
            case 413:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ContentType;
                var2 = var2.PRO_TIP;
                if (!(var2 !== var3)) {
                    _fun70972_ip = 448;
                    continue _fun70972
                }
            case 446:
                return var4;
            case 448:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 21;
                var3 = var7[var2];
                var3 = var6.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["0ktiVd"];
                var2 = var3.bind(var5)(var2);
                return var2;
            case 507:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 21;
                var3 = var7[var2];
                var3 = var6.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["aDAwS+"];
                var2 = var3.bind(var5)(var2);
                return var2;
            case 566:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 21;
                var3 = var7[var2];
                var3 = var6.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.pYrnTY;
                var2 = var3.bind(var5)(var2);
                return var2;
            case 625:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 21;
                var3 = var7[var2];
                var3 = var6.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun70972_ip = 687;
                    continue _fun70972
                }
            case 672:
                var1 = var2["2ih63V"];
                var1 = var3.bind(var5)(var1);
                _fun70972_ip = 700;
                continue _fun70972;
            case 687:
                var2 = var2.E0MW8I;
                var1 = var3.bind(var5)(var2);
            case 700:
                return var1;
            case 702:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["TahE/i"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 761:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.TGrUmi;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 820:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["Q9/6BS"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 879:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.DwLrLK;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 938:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.oj5yvD;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 997:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.swhcPM;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 1056:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.gmOWAo;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 1115:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 21;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["H/2+cl"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.contentTypeToText = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.regenerateFeedAndClearReadStates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3334, 1376, 3101, 1372, 1410, 4249, 3947, 8878, 8886, 660, 6621, 8888, 3972, 21, 566, 8882, 7839, 6840, 8889, 8890, 1234, 4574, 1307, 660, 2]);