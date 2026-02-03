// modules/parent_tools/FamilyCenterStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun41818: for (var _fun41818_ip = 0;;) switch (_fun41818_ip) {
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
                _fun41818_ip = 74;
                continue _fun41818;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot34 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var9 = function() {
        _fun41821: for (var _fun41821_ip = 0;;) switch (_fun41821_ip) {
            case 0:
                var0 = global;
                var1 = var0.window;
                var3 = null;
                var2 = var3 == var1;
                var5 = undefined;
                if (var2) {
                    _fun41821_ip = 39;
                    continue _fun41821
                }
            case 19:
                var1 = var1.location;
                var2 = var3 == var1;
                var5 = undefined;
                if (var2) {
                    _fun41821_ip = 39;
                    continue _fun41821
                }
            case 33:
                var5 = var1.pathname;
            case 39:
                var2 = _closure1_slot12;
                var2 = var2.FAMILY_CENTER_MY_FAMILY;
                if (!(var5 !== var2)) {
                    _fun41821_ip = 129;
                    continue _fun41821
                }
            case 56:
                var0 = var0.window;
                var5 = var3 == var0;
                var2 = undefined;
                if (var5) {
                    _fun41821_ip = 91;
                    continue _fun41821
                }
            case 71:
                var0 = var0.location;
                var3 = var3 == var0;
                var2 = undefined;
                if (var3) {
                    _fun41821_ip = 91;
                    continue _fun41821
                }
            case 85:
                var2 = var0.pathname;
            case 91:
                var0 = _closure1_slot12;
                var0 = var0.FAMILY_CENTER_SETTINGS;
                if (!(var2 !== var0)) {
                    _fun41821_ip = 117;
                    continue _fun41821
                }
            case 105:
                var0 = _closure1_slot13;
                var0 = var0.ACTIVITY;
                _fun41821_ip = 127;
                continue _fun41821;
            case 117:
                var2 = _closure1_slot13;
                var0 = var2.SETTINGS;
            case 127:
                _fun41821_ip = 139;
                continue _fun41821;
            case 129:
                var1 = _closure1_slot13;
                var0 = var1.REQUESTS;
            case 139:
                return var0;
        }
    };
    var _closure1_slot35 = var9;
    var11 = function() {
        var1 = global;
        var0 = var1.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var9 = var2;
        var0 = new var9[var0](var8);
        var0 = var0 instanceof Object ? var0 : var2;
        var5 = var0.set;
        var3 = _closure1_slot14;
        var4 = var3.USER_ADD;
        var3 = var1.Map;
        var6 = var3.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var3
            }
        });
        var9 = var6;
        var3 = new var9[var3](var8);
        var3 = var3 instanceof Object ? var3 : var6;
        var3 = var5.bind(var0)(var4, var3);
        var5 = var0.set;
        var3 = _closure1_slot14;
        var4 = var3.GUILD_ADD;
        var3 = var1.Map;
        var6 = var3.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var3
            }
        });
        var9 = var6;
        var3 = new var9[var3](var8);
        var3 = var3 instanceof Object ? var3 : var6;
        var3 = var5.bind(var0)(var4, var3);
        var5 = var0.set;
        var3 = _closure1_slot14;
        var4 = var3.USER_INTERACTION;
        var3 = var1.Map;
        var6 = var3.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var3
            }
        });
        var9 = var6;
        var3 = new var9[var3](var8);
        var3 = var3 instanceof Object ? var3 : var6;
        var3 = var5.bind(var0)(var4, var3);
        var5 = var0.set;
        var3 = _closure1_slot14;
        var4 = var3.GUILD_INTERACTION;
        var3 = var1.Map;
        var6 = var3.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var3
            }
        });
        var9 = var6;
        var3 = new var9[var3](var8);
        var3 = var3 instanceof Object ? var3 : var6;
        var3 = var5.bind(var0)(var4, var3);
        var5 = var0.set;
        var3 = _closure1_slot14;
        var4 = var3.USER_CALLED;
        var3 = var1.Map;
        var6 = var3.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var3
            }
        });
        var9 = var6;
        var3 = new var9[var3](var8);
        var3 = var3 instanceof Object ? var3 : var6;
        var3 = var5.bind(var0)(var4, var3);
        var5 = var0.set;
        var3 = _closure1_slot14;
        var4 = var3.TOTAL_VOICE_MINUTES;
        var3 = var1.Map;
        var6 = var3.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var3
            }
        });
        var9 = var6;
        var3 = new var9[var3](var8);
        var3 = var3 instanceof Object ? var3 : var6;
        var3 = var5.bind(var0)(var4, var3);
        var3 = var0.set;
        var2 = _closure1_slot14;
        var2 = var2.PURCHASES;
        var1 = var1.Map;
        var4 = var1.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var1
            }
        });
        var9 = var4;
        var1 = new var9[var1](var8);
        var1 = var1 instanceof Object ? var1 : var4;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot36 = var11;
    var10 = function() {
        var0 = {};
        var2 = _closure1_slot14;
        var3 = var2.USER_ADD;
        var2 = 0;
        var0[var3] = var2;
        var3 = _closure1_slot14;
        var3 = var3.GUILD_ADD;
        var0[var3] = var2;
        var3 = _closure1_slot14;
        var3 = var3.USER_INTERACTION;
        var0[var3] = var2;
        var3 = _closure1_slot14;
        var3 = var3.GUILD_INTERACTION;
        var0[var3] = var2;
        var3 = _closure1_slot14;
        var3 = var3.USER_CALLED;
        var0[var3] = var2;
        var3 = _closure1_slot14;
        var3 = var3.TOTAL_VOICE_MINUTES;
        var0[var3] = var2;
        var1 = _closure1_slot14;
        var1 = var1.PURCHASES;
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot37 = var10;
    var0 = function() {
        _fun41824: for (var _fun41824_ip = 0;;) switch (_fun41824_ip) {
            case 0:
                var4 = arguments[0];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun41824_ip = 13;
                    continue _fun41824
                }
            case 9:
                var4 = new Array(0);
            case 13:
                var1 = var4.length;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun41824_ip = 28;
                    continue _fun41824
                }
            case 24:
                var0 = {};
                _fun41824_ip = 49;
                continue _fun41824;
            case 28:
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    var2 = arg1;
                    var0 = {};
                    var3 = arg0;
                    var4 = var0;
                    var1 = copyDataProperties(var4, var3);
                    var1 = var2.user_id;
                    var0[var1] = var2;
                    return var0;
                };
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 49:
                _closure1_slot17 = var0;
                var1 = true;
                _closure1_slot18 = var1;
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        _fun41826: for (var _fun41826_ip = 0;;) switch (_fun41826_ip) {
            case 0:
                var2 = arg0;
                var0 = undefined;
                if (!(var0 !== var2)) {
                    _fun41826_ip = 16;
                    continue _fun41826
                }
            case 9:
                _closure1_slot20 = var2;
            case 16:
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0, arg1() {
        _fun41827: for (var _fun41827_ip = 0;;) switch (_fun41827_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                if (var0) {
                    _fun41827_ip = 26;
                    continue _fun41827
                }
            case 14:
                var3 = _closure1_slot36;
                var0 = undefined;
                var0 = var3.bind(var0)();
                _fun41827_ip = 30;
                continue _fun41827;
            case 26:
                var0 = _closure1_slot19;
            case 30:
                var _closure2_slot0 = var0;
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun41828: for (var _fun41828_ip = 0;;) switch (_fun41828_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = var4.display_type;
                            var1 = _closure2_slot0;
                            var0 = var1.get;
                            var3 = var0.bind(var1)(var2);
                            var0 = undefined;
                            var1 = var0 === var3;
                            if (var1) {
                                _fun41828_ip = 51;
                                continue _fun41828
                            }
                        case 35:
                            var5 = var3.has;
                            var2 = var4.event_id;
                            var1 = var5.bind(var3)(var2);
                        case 51:
                            if (var1) {
                                _fun41828_ip = 71;
                                continue _fun41828
                            }
                        case 54:
                            var2 = var3.set;
                            var1 = var4.event_id;
                            var1 = var2.bind(var3)(var1, var4);
                        case 71:
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                _closure1_slot19 = var0;
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var3 = var4.reduce;
        var2 = _closure1_slot33;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun41830: for (var _fun41830_ip = 0;;) switch (_fun41830_ip) {
                case 0:
                    var3 = arg1;
                    var0 = {};
                    var7 = arg0;
                    var8 = var0;
                    var1 = copyDataProperties(var8, var7);
                    var2 = var3.id;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 10;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.dangerouslyConstructGuildRecordFromUntypedObject;
                    var7 = var4.bind(var5)(var3);
                    var8 = var1;
                    var4 = copyDataProperties(var8, var7);
                    var3 = var3.approximate_member_count;
                    var4 = null;
                    var5 = var4 != var3;
                    var4 = 0;
                    if (!var5) {
                        _fun41830_ip = 85;
                        continue _fun41830
                    }
                case 82:
                    var4 = var3;
                case 85:
                    var3 = 'approximateMemberCount';
                    var1[var3] = var4;
                    var0[var2] = var1;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0, var2);
        _closure1_slot33 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot41 = var0;
    var0 = function arg0() {
        var3 = arg0;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun41832: for (var _fun41832_ip = 0;;) switch (_fun41832_ip) {
                case 0:
                    var0 = arg0;
                    var3 = arg1;
                    var1 = var3.invoice_items;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun41832_ip = 114;
                        continue _fun41832
                    }
                case 18:
                    var1 = var3.invoice_items;
                    var1 = var1.length;
                    var4 = 0;
                    if (!(var1 > var4)) {
                        _fun41832_ip = 114;
                        continue _fun41832
                    }
                case 35:
                    var1 = var3.invoice_items;
                    var1 = var1[var4];
                    var5 = var1.sku_id;
                    var4 = var1.subscription_plan_id;
                    var1 = var2 == var5;
                    if (!var1) {
                        _fun41832_ip = 68;
                        continue _fun41832
                    }
                case 64:
                    var1 = var2 == var4;
                case 68:
                    if (var1) {
                        _fun41832_ip = 114;
                        continue _fun41832
                    }
                case 71:
                    var2 = var3.id;
                    var1 = {};
                    var1.sku_id = var5;
                    var1.subscription_plan_id = var4;
                    var4 = var3.total;
                    var1.total = var4;
                    var3 = var3.currency;
                    var1.currency = var3;
                    var0[var2] = var1;
                case 114:
                    return var0;
            }
        };
        var0 = {};
        var1 = var2.bind(var3)(var1, var0);
        _closure1_slot31 = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function() {
        var0 = true;
        _closure1_slot24 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot43 = var0;
    var0 = function arg0() {
        _fun41834: for (var _fun41834_ip = 0;;) switch (_fun41834_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.linkedUsers;
                var2 = var0.familyCenterTeenActivity;
                var3 = var0.ageGroup;
                var12 = var2.actions;
                var10 = var2.guilds;
                var11 = var2.totals;
                var1 = var2.teenId;
                var0 = var2.rangeStartId;
                var7 = var2.topUserActivities;
                var6 = var2.topGuildActivities;
                var5 = var2.totalSpendAmount;
                var4 = var2.totalSpendCurrency;
                var9 = var2.invoices;
                _closure1_slot15 = var1;
                _closure1_slot16 = var0;
                var1 = _closure1_slot40;
                var0 = undefined;
                var1 = var1.bind(var0)(var12);
                var1 = _closure1_slot39;
                var1 = var1.bind(var0)(var11);
                var1 = _closure1_slot41;
                var1 = var1.bind(var0)(var10);
                var1 = _closure1_slot38;
                var1 = var1.bind(var0)(var8);
                var1 = null;
                if (!(var1 != var9)) {
                    _fun41834_ip = 145;
                    continue _fun41834
                }
            case 136:
                var8 = _closure1_slot42;
                var8 = var8.bind(var0)(var9);
            case 145:
                _closure1_slot27 = var7;
                _closure1_slot28 = var6;
                _closure1_slot29 = var5;
                _closure1_slot30 = var4;
                var4 = var1 != var3;
                var1 = null;
                if (!var4) {
                    _fun41834_ip = 173;
                    continue _fun41834
                }
            case 170:
                var1 = var3;
            case 173:
                _closure1_slot32 = var1;
                var1 = false;
                _closure1_slot24 = var1;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var4 = var3.bind(var0)(var1);
                var3 = var4.fromTimestamp;
                var1 = global;
                var5 = var1.Date;
                var1 = var5.now;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                _closure1_slot25 = var1;
                var1 = true;
                _closure1_slot23 = var1;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.linkedUsers;
        var1 = _closure1_slot38;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot45 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.linkedUsers;
        var1 = _closure1_slot38;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot46 = var0;
    var0 = function arg0() {
        _fun41837: for (var _fun41837_ip = 0;;) switch (_fun41837_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.familyCenterTeenActivity;
                var0 = undefined;
                if (!(var0 !== var1)) {
                    _fun41837_ip = 207;
                    continue _fun41837
                }
            case 18:
                var10 = var1.actions;
                var9 = var1.totals;
                var8 = var1.guilds;
                var11 = var1.teenId;
                var6 = var1.rangeStartId;
                var5 = var1.topUserActivities;
                var4 = var1.topGuildActivities;
                var3 = var1.totalSpendAmount;
                var2 = var1.totalSpendCurrency;
                var7 = var1.invoices;
                _closure1_slot15 = var11;
                _closure1_slot16 = var6;
                var6 = _closure1_slot40;
                var6 = var6.bind(var0)(var10);
                var6 = _closure1_slot39;
                var6 = var6.bind(var0)(var9);
                var6 = _closure1_slot41;
                var6 = var6.bind(var0)(var8);
                var6 = null;
                if (!(var6 != var7)) {
                    _fun41837_ip = 131;
                    continue _fun41837
                }
            case 122:
                var6 = _closure1_slot42;
                var6 = var6.bind(var0)(var7);
            case 131:
                _closure1_slot27 = var5;
                _closure1_slot28 = var4;
                var4 = false;
                _closure1_slot24 = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 11;
                var4 = var6[var4];
                var6 = var5.bind(var0)(var4);
                var5 = var6.fromTimestamp;
                var4 = global;
                var7 = var4.Date;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                var4 = var5.bind(var6)(var4);
                _closure1_slot25 = var4;
                _closure1_slot29 = var3;
                _closure1_slot30 = var2;
                return var0;
            case 207:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.familyCenterTeenActivity;
        var5 = var0.actions;
        var2 = var0.guilds;
        var4 = _closure1_slot40;
        var0 = undefined;
        var3 = true;
        var3 = var4.bind(var0)(var5, var3);
        var1 = _closure1_slot41;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot48 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.linkedUsers;
        var1 = _closure1_slot38;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot49 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.linkedUsers;
        var1 = _closure1_slot38;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot50 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.linkCode;
        _closure1_slot21 = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot51 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.tab;
        _closure1_slot22 = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot52 = var0;
    var0 = function arg0() {
        _fun41843: for (var _fun41843_ip = 0;;) switch (_fun41843_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.user;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var1 = var2.linked_users;
                if (!(var0 !== var1)) {
                    _fun41843_ip = 166;
                    continue _fun41843
                }
            case 29:
                var5 = _closure1_slot10;
                var4 = var5.getUsers;
                var4 = var4.bind(var5)();
                _closure2_slot0 = var4;
                var5 = var2.linked_users;
                var4 = var5.some;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.user_id;
                    var0 = _closure2_slot0;
                    var1 = var0[var1];
                    var0 = undefined;
                    var0 = var0 === var1;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun41843_ip = 117;
                    continue _fun41843
                }
            case 75:
                var3 = var2.linked_users;
                var4 = var3.length;
                var3 = global;
                var6 = var3.Object;
                var5 = var6.keys;
                var3 = _closure1_slot17;
                var3 = var5.bind(var6)(var3);
                var3 = var3.length;
                if (!(!(var4 > var3))) {
                    _fun41843_ip = 134;
                    continue _fun41843
                }
            case 117:
                var3 = _closure1_slot38;
                var2 = var2.linked_users;
                var2 = var3.bind(var0)(var2);
                _fun41843_ip = 164;
                continue _fun41843;
            case 134:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.fetchLinkedUsers;
                var1 = var1.bind(var2)();
            case 164:
                return var0;
            case 166:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot53 = var0;
    var0 = function arg0() {
        _fun41845: for (var _fun41845_ip = 0;;) switch (_fun41845_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.linkedUsers;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun41845_ip = 31;
                    continue _fun41845
                }
            case 15:
                var1 = _closure1_slot38;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            case 31:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot54 = var0;
    var0 = function arg0() {
        _fun41846: for (var _fun41846_ip = 0;;) switch (_fun41846_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.countryCode;
                var1 = null;
                if (!(var1 != var4)) {
                    _fun41846_ip = 45;
                    continue _fun41846
                }
            case 15:
                var3 = _closure1_slot9;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun41846_ip = 41;
                    continue _fun41846
                }
            case 38:
                var1 = var2;
            case 41:
                _closure1_slot26 = var1;
            case 45:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot55 = var0;
    var0 = function() {
        var3 = null;
        _closure1_slot15 = var3;
        _closure1_slot16 = var3;
        var0 = {};
        _closure1_slot17 = var0;
        var1 = _closure1_slot36;
        var0 = undefined;
        var1 = var1.bind(var0)();
        _closure1_slot19 = var1;
        var1 = _closure1_slot37;
        var1 = var1.bind(var0)();
        _closure1_slot20 = var1;
        var1 = {};
        _closure1_slot33 = var1;
        var1 = false;
        _closure1_slot24 = var1;
        _closure1_slot25 = var3;
        var4 = _closure1_slot35;
        var4 = var4.bind(var0)();
        _closure1_slot22 = var4;
        _closure1_slot18 = var1;
        var4 = new Array(0);
        _closure1_slot27 = var4;
        var4 = new Array(0);
        _closure1_slot28 = var4;
        _closure1_slot29 = var3;
        _closure1_slot30 = var3;
        var4 = {};
        _closure1_slot31 = var4;
        _closure1_slot32 = var3;
        _closure1_slot23 = var1;
        return var0;
    };
    var _closure1_slot56 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var6 = var5[var3];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.getCountryCodeByAlpha2;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var7 = 8;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.FAMILY_CENTER_REFETCH_COOLDOWN;
    var _closure1_slot11 = var8;
    var8 = var7.FAMILY_CENTER_SUB_ROUTES;
    var _closure1_slot12 = var8;
    var8 = var7.FamilyCenterSubPages;
    var _closure1_slot13 = var8;
    var7 = var7.TeenActionDisplayType;
    var _closure1_slot14 = var7;
    var7 = null;
    var _closure1_slot15 = var7;
    var _closure1_slot16 = var7;
    var8 = {};
    var _closure1_slot17 = var8;
    var8 = false;
    var _closure1_slot18 = var8;
    var11 = var11.bind(var0)();
    var _closure1_slot19 = var11;
    var10 = var10.bind(var0)();
    var _closure1_slot20 = var10;
    var _closure1_slot21 = var7;
    var9 = var9.bind(var0)();
    var _closure1_slot22 = var9;
    var _closure1_slot23 = var8;
    var _closure1_slot24 = var8;
    var _closure1_slot25 = var7;
    var _closure1_slot26 = var7;
    var8 = new Array(0);
    var _closure1_slot27 = var8;
    var8 = new Array(0);
    var _closure1_slot28 = var8;
    var _closure1_slot29 = var7;
    var _closure1_slot30 = var7;
    var8 = {};
    var _closure1_slot31 = var8;
    var _closure1_slot32 = var7;
    var7 = {};
    var _closure1_slot33 = var7;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun41849: for (var _fun41849_ip = 0;;) switch (_fun41849_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = {};
                    var6 = _closure1_slot54;
                    var0.CONNECTION_OPEN = var6;
                    var6 = _closure1_slot53;
                    var0.CURRENT_USER_UPDATE = var6;
                    var6 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.loadCache;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.CACHE_LOADED_LAZY = var6;
                    var6 = _closure1_slot44;
                    var0.FAMILY_CENTER_INITIAL_LOAD = var6;
                    var6 = _closure1_slot43;
                    var0.FAMILY_CENTER_FETCH_START = var6;
                    var6 = _closure1_slot45;
                    var0.FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot47;
                    var0.FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot48;
                    var0.FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot46;
                    var0.FAMILY_CENTER_REQUEST_LINK_SUCCESS = var6;
                    var6 = _closure1_slot49;
                    var0.FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS = var6;
                    var6 = _closure1_slot50;
                    var0.FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS = var6;
                    var6 = _closure1_slot51;
                    var0.FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot52;
                    var0.FAMILY_CENTER_HANDLE_TAB_SELECT = var6;
                    var6 = _closure1_slot55;
                    var0.SET_LOCATION_METADATA = var6;
                    var6 = _closure1_slot56;
                    var0.LOGOUT = var6;
                    var9 = new Array(1);
                    var9[0] = var0;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot34;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun41849_ip = 220;
                        continue _fun41849
                    }
                case 207:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun41849_ip = 254;
                    continue _fun41849;
                case 220:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 254:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
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
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot10;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(25);
        var0[0] = var4;
        var4 = {};
        var6 = 'loadCache';
        var4.key = var6;
        var6 = function() {
            _fun41852: for (var _fun41852_ip = 0;;) switch (_fun41852_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.readSnapshot;
                    var0 = _closure2_slot0;
                    var0 = var0.LATEST_SNAPSHOT_VERSION;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun41852_ip = 101;
                        continue _fun41852
                    }
                case 33:
                    var4 = _closure1_slot38;
                    var3 = var0.linkedUsers;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var4 = _closure1_slot41;
                    var3 = var0.guilds;
                    var3 = var4.bind(var2)(var3);
                    var3 = _closure1_slot40;
                    var1 = var0.teenActivity;
                    var1 = var3.bind(var2)(var1);
                    var1 = var0.teenActivityTotals;
                    var0 = function arg0() {
                        var5 = arg0;
                        var4 = var5.reduce;
                        var1 = _closure1_slot37;
                        var0 = undefined;
                        var3 = var1.bind(var0)();
                        var1 = function(arg0, arg1) { // Environment: var1
                            _fun41854: for (var _fun41854_ip = 0;;) switch (_fun41854_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = arg1;
                                    var1 = var3.split;
                                    var0 = ':';
                                    var4 = var1.bind(var3)(var0);
                                    var3 = _closure1_slot8;
                                    var6 = undefined;
                                    var1 = 2;
                                    var4 = var3.bind(var6)(var4, var1);
                                    var1 = 0;
                                    var3 = var4[var1];
                                    var1 = 1;
                                    var5 = var4[var1];
                                    var1 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 13;
                                    var0 = var4[var0];
                                    var1 = var1.bind(var6)(var0);
                                    var0 = var1.displayTypeFromString;
                                    var3 = var0.bind(var1)(var3);
                                    var0 = var2;
                                    if (!(var6 !== var3)) {
                                        _fun41854_ip = 126;
                                        continue _fun41854
                                    }
                                case 89:
                                    var1 = {};
                                    var8 = var1;
                                    var7 = var2;
                                    var2 = copyDataProperties(var8, var7);
                                    var2 = global;
                                    var4 = var2.parseInt;
                                    var2 = 10;
                                    var2 = var4.bind(var6)(var5, var2);
                                    var1[var3] = var2;
                                    var0 = var1;
                                case 126:
                                    return var0;
                            }
                        };
                        var1 = var4.bind(var5)(var1, var3);
                        _closure1_slot20 = var1;
                        return var0;
                    };
                    var0 = var0.bind(var2)(var1);
                case 101:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'takeSnapshot';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = _closure2_slot0;
            var1 = var1.LATEST_SNAPSHOT_VERSION;
            var0.version = var1;
            var1 = {};
            var3 = global;
            var7 = var3.Object;
            var6 = var7.values;
            var4 = _closure1_slot17;
            var4 = var6.bind(var7)(var4);
            var1.linkedUsers = var4;
            var7 = var3.Object;
            var6 = var7.entries;
            var4 = _closure1_slot20;
            var7 = var6.bind(var7)(var4);
            var6 = var7.map;
            var4 = function(arg0) { // Environment: var5
                _fun41856: for (var _fun41856_ip = 0;;) switch (_fun41856_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = var2[Symbol.iterator];
                        var2 = var0().next;
                        var3 = var2().value;
                        var1 = var0;
                        var6 = undefined;
                        var1 = var1 === var6;
                        var4 = undefined;
                        if (var1) {
                            _fun41856_ip = 27;
                            continue _fun41856
                        }
                    case 24:
                        var4 = var3;
                    case 27:
                        var3 = undefined;
                        if (var1) {
                            _fun41856_ip = 57;
                            continue _fun41856
                        }
                    case 32:
                        var5 = var2().value;
                        var2 = var0;
                        var2 = var2 === var6;
                        var3 = undefined;
                        var1 = var2;
                        if (var2) {
                            _fun41856_ip = 57;
                            continue _fun41856
                        }
                    case 51:
                        var3 = var5;
                        var1 = var2;
                    case 57:
                        if (var1) {
                            _fun41856_ip = 63;
                            continue _fun41856
                        }
                    case 60:
                        var0.return();
                    case 63:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '';
                        var0 = ':';
                        var0 = var2.bind(var1)(var4, var0, var3);
                        return var0;
                }
            };
            var4 = var6.bind(var7)(var4);
            var1.teenActivityTotals = var4;
            var4 = new Array(0);
            var _closure3_slot0 = var4;
            var7 = _closure1_slot19;
            var6 = var7.forEach;
            var5 = function(arg0) { // Environment: var5
                var5 = arg0;
                var2 = _closure3_slot0;
                var1 = var2.push;
                var0 = global;
                var4 = var0.Array;
                var3 = var4.from;
                var0 = var5.values;
                var0 = var0.bind(var5)();
                var7 = var3.bind(var4)(var0);
                var0 = new Array(0);
                var6 = 0;
                var8 = var0;
                var3 = arraySpread(var8, var7, var6);
                var8 = var1;
                var7 = var0;
                var6 = var2;
                var0 = apply(var8, var7, var6);
                var0 = undefined;
                return var0;
            };
            var5 = var6.bind(var7)(var5);
            var1.teenActivity = var4;
            var4 = var3.Object;
            var3 = var4.values;
            var2 = _closure1_slot33;
            var2 = var3.bind(var4)(var2);
            var1.guilds = var2;
            var0.data = var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSelectedTeenId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getLinkedUsers';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getLinkTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            _fun41860: for (var _fun41860_ip = 0;;) switch (_fun41860_ip) {
                case 0:
                    var1 = _closure1_slot17;
                    var0 = arg0;
                    var2 = var1[var0];
                    var3 = null;
                    var1 = var3 == var2;
                    var0 = null;
                    if (var1) {
                        _fun41860_ip = 44;
                        continue _fun41860
                    }
                case 25:
                    var1 = var2.updated_at;
                    if (!(var3 == var1)) {
                        _fun41860_ip = 41;
                        continue _fun41860
                    }
                case 35:
                    var1 = var2.created_at;
                case 41:
                    var0 = var1;
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getRangeStartTimestamp';
        var4.key = var6;
        var6 = function() {
            _fun41861: for (var _fun41861_ip = 0;;) switch (_fun41861_ip) {
                case 0:
                    var2 = _closure1_slot16;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun41861_ip = 53;
                        continue _fun41861
                    }
                case 16:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.extractTimestamp;
                    var1 = _closure1_slot16;
                    var0 = var2.bind(var3)(var1);
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getActionsForDisplayType';
        var4.key = var6;
        var6 = function arg0() {
            _fun41862: for (var _fun41862_ip = 0;;) switch (_fun41862_ip) {
                case 0:
                    var2 = _closure1_slot19;
                    var1 = var2.get;
                    var0 = arg0;
                    var4 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 == var4)) {
                        _fun41862_ip = 32;
                        continue _fun41862
                    }
                case 26:
                    var0 = new Array(0);
                    _fun41862_ip = 59;
                    continue _fun41862;
                case 32:
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var0 = var2.bind(var3)(var1);
                case 59:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getTotalForDisplayType';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot20;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getLinkCode';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getGuild';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot33;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getSelectedTab';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getStartId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getIsInitialized';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getAreLinkedUsersProcessed';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getUserCountry';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot26;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'isLoading';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot24;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getTopUserActivities';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getTopGuildActivities';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot28;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getTotalSpendAmount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot29;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getTotalSpendCurrency';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot30;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getPurchaseInfo';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot31;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'getAgeGroup';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot32;
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'canRefetch';
        var4.key = var6;
        var6 = function() {
            _fun41878: for (var _fun41878_ip = 0;;) switch (_fun41878_ip) {
                case 0:
                    var2 = _closure1_slot25;
                    var0 = null;
                    var0 = var0 === var2;
                    if (var0) {
                        _fun41878_ip = 61;
                        continue _fun41878
                    }
                case 16:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.age;
                    var2 = _closure1_slot25;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot11;
                    var0 = var2 > var1;
                case 61:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'isCurrentUserInRestrictedHours';
        var4.key = var6;
        var5 = function() {
            _fun41879: for (var _fun41879_ip = 0;;) switch (_fun41879_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.getIsFamilyCenterV3Enabled;
                    var1 = {};
                    var5 = 'isInRestrictedHours';
                    var1.location = var5;
                    var1 = var2.bind(var3)(var1);
                    if (var1) {
                        _fun41879_ip = 53;
                        continue _fun41879
                    }
                case 49:
                    var1 = false;
                    return var1;
                case 53:
                    var1 = _closure1_slot10;
                    var0 = var1.getCurrentUser;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun41879_ip = 102;
                        continue _fun41879
                    }
                case 77:
                    var3 = var2.restrictedSchedule;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun41879_ip = 102;
                        continue _fun41879
                    }
                case 92:
                    var2 = var3.isInRestrictedHours;
                    var1 = var2.bind(var3)();
                case 102:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun41879_ip = 112;
                        continue _fun41879
                    }
                case 109:
                    var0 = var1;
                case 112:
                    return var0;
            }
        };
        var4.value = var5;
        var0[24] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var6);
    var6 = 'FamilyCenterStore';
    var1.displayName = var6;
    var1.LATEST_SNAPSHOT_VERSION = var3;
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var16 = var3;
    var1 = new var16[var1](var15);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/FamilyCenterStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 3965, 1218, 1621, 4594, 1598, 21, 4595, 4658, 4659, 2]);