// modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun114738: for (var _fun114738_ip = 0;;) switch (_fun114738_ip) {
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
                _fun114738_ip = 76;
                continue _fun114738;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot40 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun114741: for (var _fun114741_ip = 0;;) switch (_fun114741_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun114741_ip = 46;
                    continue _fun114741
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun114741_ip = 55;
                    continue _fun114741
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun114741_ip = 345;
                    continue _fun114741
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun114741_ip = 323;
                    continue _fun114741
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun114741_ip = 283;
                    continue _fun114741
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun114741_ip = 270;
                    continue _fun114741
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
                    _fun114741_ip = 163;
                    continue _fun114741
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun114741_ip = 179;
                    continue _fun114741
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun114741_ip = 249;
                    continue _fun114741
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun114741_ip = 249;
                    continue _fun114741
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun114741_ip = 234;
                    continue _fun114741
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun114741_ip = 247;
                    continue _fun114741
                }
            case 234:
                var8 = _closure1_slot42;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun114741_ip = 265;
                continue _fun114741;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun114741_ip = 283;
                continue _fun114741;
            case 270:
                var6 = _closure1_slot42;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun114741_ip = 323;
                    continue _fun114741
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
                    _fun114741_ip = 330;
                    continue _fun114741
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun114742: for (var _fun114742_ip = 0;;) switch (_fun114742_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun114742_ip = 56;
                                continue _fun114742
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
                            _fun114742_ip = 67;
                            continue _fun114742;
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
    var _closure1_slot41 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun114743: for (var _fun114743_ip = 0;;) switch (_fun114743_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun114743_ip = 23;
                    continue _fun114743
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun114743_ip = 33;
                    continue _fun114743
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
                    _fun114743_ip = 70;
                    continue _fun114743
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun114743_ip = 55;
                    continue _fun114743
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function(arg0) { // Original name: transformEntries, environment: var3
        var3 = arg0;
        var0 = new Array(0);
        var _closure2_slot0 = var0;
        var2 = 0;
        var _closure2_slot1 = var2;
        var2 = var3.reverse;
        var3 = var2.bind(var3)();
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun114745: for (var _fun114745_ip = 0;;) switch (_fun114745_ip) {
                case 0:
                    var3 = arg0;
                    var6 = new Array(0);
                    var0 = var3.reason;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun114745_ip = 74;
                        continue _fun114745
                    }
                case 19:
                    var1 = var6.push;
                    var7 = _closure1_slot8;
                    var0 = _closure1_slot17;
                    var21 = var0.REASON;
                    var19 = var3.reason;
                    var2 = var7.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var7
                        }
                    });
                    var22 = var2;
                    var20 = null;
                    var0 = new var22[var7](var21, var20, var19, var18);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var0 = var1.bind(var6)(var0);
                case 74:
                    var0 = var3.changes;
                    var0 = var4 != var0;
                    var1 = null;
                    var8 = null;
                    var7 = null;
                    if (!var0) {
                        _fun114745_ip = 332;
                        continue _fun114745
                    }
                case 96:
                    var2 = _closure1_slot41;
                    var0 = var3.changes;
                    var12 = undefined;
                    var11 = var2.bind(var12)(var0);
                    var2 = var11.bind(var12)();
                    var0 = var2.done;
                    var10 = null;
                    var9 = null;
                    var5 = null;
                    var1 = null;
                    var8 = null;
                    var7 = null;
                    if (var0) {
                        _fun114745_ip = 332;
                        continue _fun114745
                    }
                case 143:
                    var0 = var2.value;
                    var17 = _closure1_slot8;
                    var21 = var0.key;
                    var20 = var0.old_value;
                    var19 = var0.new_value;
                    var14 = var17.prototype;
                    var14 = Object.create(var14, {
                        constructor: {
                            value: var17
                        }
                    });
                    var22 = var14;
                    var0 = new var22[var17](var21, var20, var19, var18);
                    var0 = var0 instanceof Object ? var0 : var14;
                    var14 = var6.push;
                    var14 = var14.bind(var6)(var0);
                    var18 = var0.key;
                    var14 = _closure1_slot17;
                    var17 = var14.NAME;
                    var16 = var0;
                    var15 = var9;
                    var14 = var5;
                    if (!(var18 !== var17)) {
                        _fun114745_ip = 296;
                        continue _fun114745
                    }
                case 231:
                    var18 = var0.key;
                    var17 = _closure1_slot17;
                    var17 = var17.TYPE;
                    var16 = var10;
                    var15 = var9;
                    var14 = var0;
                    if (!(var18 !== var17)) {
                        _fun114745_ip = 296;
                        continue _fun114745
                    }
                case 259:
                    var18 = var0.key;
                    var17 = _closure1_slot17;
                    var17 = var17.TITLE;
                    var16 = var10;
                    var15 = var9;
                    var14 = var5;
                    if (!(var18 === var17)) {
                        _fun114745_ip = 296;
                        continue _fun114745
                    }
                case 287:
                    var16 = var10;
                    var15 = var0;
                    var14 = var5;
                case 296:
                    var17 = var11.bind(var12)();
                    var0 = var17.done;
                    var10 = var16;
                    var9 = var15;
                    var5 = var14;
                    var2 = var17;
                    var1 = var10;
                    var8 = var9;
                    var7 = var5;
                    if (!var0) {
                        _fun114745_ip = 143;
                        continue _fun114745
                    }
                case 332:
                    var5 = var3.action_type;
                    var2 = _closure1_slot14;
                    var2 = var2.MEMBER_PRUNE;
                    if (!(var5 === var2)) {
                        _fun114745_ip = 464;
                        continue _fun114745
                    }
                case 355:
                    var2 = var4 != var3;
                    var5 = 1;
                    var10 = var5;
                    if (!var2) {
                        _fun114745_ip = 415;
                        continue _fun114745
                    }
                case 368:
                    var2 = var3.options;
                    var2 = var4 != var2;
                    var10 = var5;
                    if (!var2) {
                        _fun114745_ip = 415;
                        continue _fun114745
                    }
                case 383:
                    var2 = var3.options;
                    var2 = var2.delete_member_days;
                    var2 = var4 != var2;
                    var10 = var5;
                    if (!var2) {
                        _fun114745_ip = 415;
                        continue _fun114745
                    }
                case 404:
                    var2 = var3.options;
                    var10 = var2.delete_member_days;
                case 415:
                    var9 = _closure1_slot8;
                    var2 = _closure1_slot17;
                    var21 = var2.PRUNE_DELETE_DAYS;
                    var5 = var9.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var9
                        }
                    });
                    var22 = var5;
                    var20 = null;
                    var19 = var10;
                    var2 = new var22[var9](var21, var20, var19, var18);
                    var5 = var2 instanceof Object ? var2 : var5;
                    var2 = var6.push;
                    var2 = var2.bind(var6)(var5);
                case 464:
                    var5 = var3.action_type;
                    var2 = _closure1_slot14;
                    var2 = var2.AUTO_MODERATION_BLOCK_MESSAGE;
                    if (!(var5 === var2)) {
                        _fun114745_ip = 565;
                        continue _fun114745
                    }
                case 484:
                    var5 = var3.options;
                    var9 = var4 == var5;
                    var2 = undefined;
                    if (var9) {
                        _fun114745_ip = 504;
                        continue _fun114745
                    }
                case 498:
                    var2 = var5.auto_moderation_rule_name;
                case 504:
                    if (!(var4 != var2)) {
                        _fun114745_ip = 565;
                        continue _fun114745
                    }
                case 508:
                    var5 = var6.push;
                    var11 = _closure1_slot8;
                    var2 = _closure1_slot17;
                    var21 = var2.AUTO_MODERATION_TRIGGERED_RULE_NAME;
                    var2 = var3.options;
                    var19 = var2.auto_moderation_rule_name;
                    var9 = var11.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var11
                        }
                    });
                    var22 = var9;
                    var20 = null;
                    var2 = new var22[var11](var21, var20, var19, var18);
                    var2 = var2 instanceof Object ? var2 : var9;
                    var2 = var5.bind(var6)(var2);
                case 565:
                    var5 = var3.action_type;
                    var2 = _closure1_slot14;
                    var2 = var2.VOICE_CHANNEL_STATUS_CREATE;
                    var2 = var5 === var2;
                    if (!var2) {
                        _fun114745_ip = 611;
                        continue _fun114745
                    }
                case 588:
                    var9 = var3.options;
                    var10 = var4 == var9;
                    var5 = undefined;
                    if (var10) {
                        _fun114745_ip = 607;
                        continue _fun114745
                    }
                case 602:
                    var5 = var9.status;
                case 607:
                    var2 = var4 != var5;
                case 611:
                    if (!var2) {
                        _fun114745_ip = 670;
                        continue _fun114745
                    }
                case 614:
                    var5 = var6.push;
                    var11 = _closure1_slot8;
                    var2 = _closure1_slot17;
                    var21 = var2.STATUS;
                    var2 = var3.options;
                    var19 = var2.status;
                    var9 = var11.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var11
                        }
                    });
                    var22 = var9;
                    var20 = null;
                    var2 = new var22[var11](var21, var20, var19, var18);
                    var2 = var2 instanceof Object ? var2 : var9;
                    var2 = var5.bind(var6)(var2);
                case 670:
                    var5 = _closure1_slot7;
                    var2 = {};
                    var9 = var3.id;
                    var2.id = var9;
                    var9 = var3.action_type;
                    var2.action = var9;
                    var9 = var3.target_id;
                    var2.targetId = var9;
                    var9 = var3.user_id;
                    var2.userId = var9;
                    var2.changes = var6;
                    var3 = var3.options;
                    var2.options = var3;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var22 = var3;
                    var21 = var2;
                    var2 = new var22[var5](var21, var20);
                    var6 = var2 instanceof Object ? var2 : var3;
                    var5 = _closure2_slot0;
                    var3 = 0;
                    var5 = var5[var3];
                    var11 = _closure2_slot1;
                    var9 = var4 != var5;
                    if (!var9) {
                        _fun114745_ip = 791;
                        continue _fun114745
                    }
                case 777:
                    var12 = var5.action;
                    var10 = var6.action;
                    var9 = var12 === var10;
                case 791:
                    if (!var9) {
                        _fun114745_ip = 810;
                        continue _fun114745
                    }
                case 794:
                    var12 = var5.targetId;
                    var10 = var6.targetId;
                    var9 = var12 === var10;
                case 810:
                    if (!var9) {
                        _fun114745_ip = 827;
                        continue _fun114745
                    }
                case 813:
                    var12 = var5.userId;
                    var10 = var6.userId;
                    var9 = var12 === var10;
                case 827:
                    if (!var9) {
                        _fun114745_ip = 874;
                        continue _fun114745
                    }
                case 830:
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var10 = 13;
                    var12 = var12[var10];
                    var10 = undefined;
                    var14 = var13.bind(var10)(var12);
                    var13 = var14.isEqual;
                    var12 = var5.options;
                    var10 = var6.options;
                    var9 = var13.bind(var14)(var12, var10);
                case 874:
                    if (!var9) {
                        _fun114745_ip = 912;
                        continue _fun114745
                    }
                case 877:
                    var14 = var6.timestampStart;
                    var13 = var14.diff;
                    var12 = var5.timestampStart;
                    var10 = 'minutes';
                    var12 = var13.bind(var14)(var12, var10);
                    var10 = 30;
                    var9 = var12 < var10;
                case 912:
                    if (!var9) {
                        _fun114745_ip = 922;
                        continue _fun114745
                    }
                case 915:
                    var10 = 50;
                    var9 = var11 < var10;
                case 922:
                    if (!var9) {
                        _fun114745_ip = 945;
                        continue _fun114745
                    }
                case 925:
                    var11 = var6.targetType;
                    var10 = _closure1_slot16;
                    var10 = var10.INVITE;
                    var9 = var11 !== var10;
                case 945:
                    if (!var9) {
                        _fun114745_ip = 967;
                        continue _fun114745
                    }
                case 948:
                    var11 = var6.action;
                    var10 = _closure1_slot14;
                    var10 = var10.MESSAGE_DELETE;
                    var9 = var11 !== var10;
                case 967:
                    if (!var9) {
                        _fun114745_ip = 989;
                        continue _fun114745
                    }
                case 970:
                    var11 = var6.action;
                    var10 = _closure1_slot14;
                    var10 = var10.MESSAGE_BULK_DELETE;
                    var9 = var11 !== var10;
                case 989:
                    if (!var9) {
                        _fun114745_ip = 1011;
                        continue _fun114745
                    }
                case 992:
                    var11 = var6.action;
                    var10 = _closure1_slot14;
                    var10 = var10.MESSAGE_PIN;
                    var9 = var11 !== var10;
                case 1011:
                    if (!var9) {
                        _fun114745_ip = 1033;
                        continue _fun114745
                    }
                case 1014:
                    var11 = var6.action;
                    var10 = _closure1_slot14;
                    var10 = var10.MESSAGE_UNPIN;
                    var9 = var11 !== var10;
                case 1033:
                    if (!var9) {
                        _fun114745_ip = 1055;
                        continue _fun114745
                    }
                case 1036:
                    var11 = var6.action;
                    var10 = _closure1_slot14;
                    var10 = var10.MEMBER_MOVE;
                    var9 = var11 !== var10;
                case 1055:
                    if (!var9) {
                        _fun114745_ip = 1077;
                        continue _fun114745
                    }
                case 1058:
                    var11 = var6.action;
                    var10 = _closure1_slot14;
                    var10 = var10.MEMBER_DISCONNECT;
                    var9 = var11 !== var10;
                case 1077:
                    if (!var9) {
                        _fun114745_ip = 1099;
                        continue _fun114745
                    }
                case 1080:
                    var11 = var6.action;
                    var10 = _closure1_slot14;
                    var10 = var10.BOT_ADD;
                    var9 = var11 !== var10;
                case 1099:
                    if (!var9) {
                        _fun114745_ip = 1121;
                        continue _fun114745
                    }
                case 1102:
                    var11 = var6.action;
                    var10 = _closure1_slot14;
                    var10 = var10.APPLICATION_COMMAND_PERMISSION_UPDATE;
                    var9 = var11 !== var10;
                case 1121:
                    if (!var9) {
                        _fun114745_ip = 1143;
                        continue _fun114745
                    }
                case 1124:
                    var11 = var6.action;
                    var10 = _closure1_slot14;
                    var10 = var10.MEMBER_PRUNE;
                    var9 = var11 !== var10;
                case 1143:
                    if (var9) {
                        _fun114745_ip = 1415;
                        continue _fun114745
                    }
                case 1149:
                    var10 = var6.actionType;
                    var9 = _closure1_slot15;
                    var9 = var9.DELETE;
                    if (!(var10 === var9)) {
                        _fun114745_ip = 1392;
                        continue _fun114745
                    }
                case 1172:
                    if (!(var4 == var1)) {
                        _fun114745_ip = 1183;
                        continue _fun114745
                    }
                case 1176:
                    if (!(var4 != var8)) {
                        _fun114745_ip = 1392;
                        continue _fun114745
                    }
                case 1183:
                    var11 = var4 == var1;
                    var10 = undefined;
                    var9 = undefined;
                    if (var11) {
                        _fun114745_ip = 1200;
                        continue _fun114745
                    }
                case 1194:
                    var9 = var1.oldValue;
                case 1200:
                    if (!(var4 == var9)) {
                        _fun114745_ip = 1222;
                        continue _fun114745
                    }
                case 1204:
                    var11 = var4 == var8;
                    var1 = undefined;
                    if (var11) {
                        _fun114745_ip = 1219;
                        continue _fun114745
                    }
                case 1213:
                    var1 = var8.oldValue;
                case 1219:
                    var9 = var1;
                case 1222:
                    var8 = var6.targetType;
                    var1 = _closure1_slot16;
                    var1 = var1.CHANNEL;
                    var1 = var8 !== var1;
                    if (!var1) {
                        _fun114745_ip = 1265;
                        continue _fun114745
                    }
                case 1245:
                    var11 = var6.targetType;
                    var8 = _closure1_slot16;
                    var8 = var8.CHANNEL_OVERWRITE;
                    var1 = var11 !== var8;
                case 1265:
                    if (var1) {
                        _fun114745_ip = 1272;
                        continue _fun114745
                    }
                case 1268:
                    var1 = var4 === var7;
                case 1272:
                    if (var1) {
                        _fun114745_ip = 1293;
                        continue _fun114745
                    }
                case 1275:
                    var8 = _closure1_slot9;
                    var7 = var7.oldValue;
                    var7 = var8.bind(var10)(var7);
                    var1 = !var7;
                case 1293:
                    var8 = var9;
                    if (var1) {
                        _fun114745_ip = 1321;
                        continue _fun114745
                    }
                case 1299:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var1 = '#';
                    var8 = var7.bind(var1)(var9);
                case 1321:
                    var7 = _closure1_slot38;
                    var1 = var6.targetType;
                    var1 = var7[var1];
                    if (!(var4 != var1)) {
                        _fun114745_ip = 1365;
                        continue _fun114745
                    }
                case 1339:
                    var4 = _closure1_slot38;
                    var1 = var6.targetType;
                    var4 = var4[var1];
                    var1 = var6.targetId;
                    var4[var1] = var8;
                    _fun114745_ip = 1392;
                    continue _fun114745;
                case 1365:
                    var4 = _closure1_slot38;
                    var1 = var6.targetType;
                    var0 = {};
                    var7 = var6.targetId;
                    var0[var7] = var8;
                    var4[var1] = var0;
                case 1392:
                    _closure2_slot1 = var3;
                    var1 = _closure2_slot0;
                    var0 = var1.unshift;
                    var0 = var0.bind(var1)(var6);
                    var0 = undefined;
                    return var0;
                case 1415:
                    var1 = _closure2_slot0;
                    var4 = var5.merge;
                    var0 = {};
                    var20 = var5.changes;
                    var7 = new Array(0);
                    var21 = var7;
                    var19 = 0;
                    var19 = arraySpread(var21, var20, var19);
                    var20 = var6.changes;
                    var21 = var7;
                    var8 = arraySpread(var21, var20, var19);
                    var0.changes = var7;
                    var6 = var6.timestampStart;
                    var0.timestampEnd = var6;
                    var0 = var4.bind(var5)(var0);
                    var1[var3] = var0;
                    var0 = _closure2_slot1;
                    var0 = parseFloat(var0);
                    var1 = var0 + 1;
                    _closure2_slot1 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot43 = var0;
    var8 = function(arg0) { // Original name: handleSettingsSetSection, environment: var3
        _fun114746: for (var _fun114746_ip = 0;;) switch (_fun114746_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.section;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var3 = _closure1_slot19;
                var3 = var3.AUDIT_LOG;
                if (!(var4 === var3)) {
                    _fun114746_ip = 193;
                    continue _fun114746
                }
            case 40:
                var5 = _closure1_slot11;
                var4 = var5.getMembers;
                var3 = _closure1_slot21;
                var4 = var4.bind(var5)(var3);
                var6 = _closure1_slot13;
                var5 = var6.getGuild;
                var3 = _closure1_slot21;
                var3 = var5.bind(var6)(var3);
                _closure2_slot0 = var3;
                var5 = _closure1_slot21;
                var3 = null;
                var5 = var3 != var5;
                var3 = undefined;
                if (!var5) {
                    _fun114746_ip = 115;
                    continue _fun114746
                }
            case 96:
                var7 = _closure1_slot12;
                var6 = var7.getUnsafeMutableRoles;
                var5 = _closure1_slot21;
                var3 = var6.bind(var7)(var5);
            case 115:
                _closure2_slot1 = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 13;
                var3 = var6[var3];
                var3 = var5.bind(var0)(var3);
                var5 = var3.bind(var0)(var4);
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = var1.roles;
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        _fun114748: for (var _fun114748_ip = 0;;) switch (_fun114748_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun114748_ip = 17;
                                    continue _fun114748
                                }
                            case 13:
                                var2 = undefined;
                                return var2;
                            case 17:
                                var2 = _closure3_slot0;
                                var3 = var2.userId;
                                var2 = _closure2_slot0;
                                var2 = var2.ownerId;
                                if (!(var3 !== var2)) {
                                    _fun114748_ip = 95;
                                    continue _fun114748
                                }
                            case 43:
                                var2 = _closure2_slot1;
                                var2 = var0 == var2;
                                var4 = undefined;
                                var3 = undefined;
                                if (var2) {
                                    _fun114748_ip = 69;
                                    continue _fun114748
                                }
                            case 58:
                                var2 = _closure2_slot1;
                                var1 = arg0;
                                var3 = var2[var1];
                            case 69:
                                var0 = var0 != var3;
                                if (!var0) {
                                    _fun114748_ip = 93;
                                    continue _fun114748
                                }
                            case 76:
                                var2 = _closure1_slot10;
                                var1 = _closure1_slot20;
                                var0 = var2.bind(var4)(var3, var1);
                            case 93:
                                return var0;
                            case 95:
                                var0 = true;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.userId;
                    return var0;
                };
                var3 = var3.bind(var4)(var1);
                var1 = var3.value;
                var1 = var1.bind(var3)();
                _closure1_slot24 = var1;
                return var0;
            case 193:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot44 = var8;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var9 = var5[var7];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot7 = var9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AuditLogChange;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.isGuildSelectableChannelType;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.hasAnyPermission;
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.AuditLogActions;
    var _closure1_slot14 = var9;
    var10 = var7.AuditLogActionTypes;
    var _closure1_slot15 = var10;
    var10 = var7.AuditLogTargetTypes;
    var _closure1_slot16 = var10;
    var10 = var7.AuditLogChangeKeys;
    var _closure1_slot17 = var10;
    var10 = var7.AUDIT_LOG_PAGE_LIMIT;
    var _closure1_slot18 = var10;
    var10 = var7.GuildSettingsSections;
    var _closure1_slot19 = var10;
    var7 = var7.Permissions;
    var10 = 12;
    var12 = var5[var10];
    var10 = arg3;
    var24 = var10.bind(var0)(var12);
    var23 = var24.combine;
    var37 = var7.KICK_MEMBERS;
    var36 = var7.BAN_MEMBERS;
    var35 = var7.ADMINISTRATOR;
    var34 = var7.MANAGE_CHANNELS;
    var33 = var7.MANAGE_GUILD;
    var32 = var7.MANAGE_MESSAGES;
    var31 = var7.MANAGE_NICKNAMES;
    var30 = var7.MANAGE_ROLES;
    var29 = var7.MANAGE_WEBHOOKS;
    var28 = var7.MANAGE_GUILD_EXPRESSIONS;
    var27 = var7.MOVE_MEMBERS;
    var26 = var7.MUTE_MEMBERS;
    var25 = var7.DEAFEN_MEMBERS;
    var38 = var24;
    var7 = var38[var23](var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24);
    var _closure1_slot20 = var7;
    var7 = null;
    var _closure1_slot21 = var7;
    var10 = new Array(0);
    var _closure1_slot22 = var10;
    var10 = new Array(0);
    var _closure1_slot23 = var10;
    var10 = new Array(0);
    var _closure1_slot24 = var10;
    var10 = new Array(0);
    var _closure1_slot25 = var10;
    var10 = new Array(0);
    var _closure1_slot26 = var10;
    var10 = new Array(0);
    var _closure1_slot27 = var10;
    var10 = new Array(0);
    var _closure1_slot28 = var10;
    var10 = new Array(0);
    var _closure1_slot29 = var10;
    var _closure1_slot30 = var11;
    var10 = false;
    var _closure1_slot31 = var10;
    var _closure1_slot32 = var10;
    var _closure1_slot33 = var11;
    var _closure1_slot34 = var10;
    var _closure1_slot35 = var7;
    var9 = var9.ALL;
    var _closure1_slot36 = var9;
    var _closure1_slot37 = var7;
    var7 = {};
    var _closure1_slot38 = var7;
    var _closure1_slot39 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GuildSettingsAuditLogStore, environment: var5
            _fun114751: for (var _fun114751_ip = 0;;) switch (_fun114751_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot40;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun114751_ip = 69;
                        continue _fun114751
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun114751_ip = 105;
                    continue _fun114751;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot13;
            var1 = _closure1_slot12;
            var0 = _closure1_slot11;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(19);
        var0[0] = var4;
        var4 = {};
        var6 = 'logs';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot22;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'integrations';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot23;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'webhooks';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot25;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'guildScheduledEvents';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot26;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'automodRules';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot27;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'threads';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot28;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'applicationCommands';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot29;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isInitialLoading';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot30;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isLoading';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot31;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isLoadingNextPage';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot32;
            return var0;
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'hasOlderLogs';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot33;
            return var0;
        };
        var4.get = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'hasError';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot34;
            return var0;
        };
        var4.get = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'userIds';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot24;
            return var0;
        };
        var4.get = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'userIdFilter';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot35;
            return var0;
        };
        var4.get = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'targetIdFilter';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot37;
            return var0;
        };
        var4.get = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'actionFilter';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot36;
            return var0;
        };
        var4.get = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'deletedTargets';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot38;
            return var0;
        };
        var4.get = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'groupedFetchCount';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot39;
            return var0;
        };
        var4.get = var5;
        var0[18] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildSettingsAuditLogStore';
    var7.displayName = var1;
    var1 = 15;
    var1 = var5[var1];
    var37 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() { // Original name: handleStartFetchingLogs, environment: var3
        var0 = true;
        _closure1_slot31 = var0;
        var0 = undefined;
        return var0;
    };
    var1.AUDIT_LOG_FETCH_START = var9;
    var9 = function(arg0) { // Original name: handleFetchedLogs, environment: var3
        _fun114772: for (var _fun114772_ip = 0;;) switch (_fun114772_ip) {
            case 0:
                var3 = arg0;
                var0 = 0;
                _closure1_slot39 = var0;
                var1 = false;
                _closure1_slot30 = var1;
                _closure1_slot31 = var1;
                var0 = true;
                _closure1_slot33 = var0;
                _closure1_slot34 = var1;
                var5 = _closure1_slot43;
                var4 = var3.logs;
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                _closure1_slot22 = var4;
                var4 = var3.integrations;
                _closure1_slot23 = var4;
                var4 = var3.webhooks;
                _closure1_slot25 = var4;
                var4 = var3.guildScheduledEvents;
                _closure1_slot26 = var4;
                var4 = var3.automodRules;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun114772_ip = 99;
                    continue _fun114772
                }
            case 95:
                var4 = new Array(0);
            case 99:
                _closure1_slot27 = var4;
                var4 = var3.threads;
                _closure1_slot28 = var4;
                var4 = var3.applicationCommands;
                _closure1_slot29 = var4;
                var3 = var3.logs;
                var4 = var3.length;
                var3 = _closure1_slot18;
                if (!(var4 < var3)) {
                    _fun114772_ip = 146;
                    continue _fun114772
                }
            case 142:
                _closure1_slot33 = var1;
            case 146:
                return var0;
        }
    };
    var1.AUDIT_LOG_FETCH_SUCCESS = var9;
    var9 = function() { // Original name: handleFetchedLogsFail, environment: var3
        var0 = false;
        _closure1_slot31 = var0;
        var0 = true;
        _closure1_slot34 = var0;
        var0 = new Array(0);
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var1.AUDIT_LOG_FETCH_FAIL = var9;
    var9 = function(arg0) { // Original name: handleStartFetchNextPage, environment: var3
        _fun114774: for (var _fun114774_ip = 0;;) switch (_fun114774_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.isGroupedFetch;
                var2 = true;
                _closure1_slot32 = var2;
                if (!var0) {
                    _fun114774_ip = 32;
                    continue _fun114774
                }
            case 21:
                var0 = _closure1_slot39;
                var0 = var0 + 1;
                _closure1_slot39 = var0;
            case 32:
                var0 = undefined;
                return var0;
        }
    };
    var1.AUDIT_LOG_FETCH_NEXT_PAGE_START = var9;
    var9 = function(arg0) { // Original name: handleFetchedNextPage, environment: var3
        _fun114775: for (var _fun114775_ip = 0;;) switch (_fun114775_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.logs;
                var8 = var0.integrations;
                var7 = var0.webhooks;
                var6 = var0.guildScheduledEvents;
                var5 = var0.automodRules;
                var4 = var0.threads;
                var2 = var0.applicationCommands;
                var0 = false;
                _closure1_slot32 = var0;
                _closure1_slot23 = var8;
                _closure1_slot25 = var7;
                _closure1_slot26 = var6;
                _closure1_slot27 = var5;
                _closure1_slot28 = var4;
                _closure1_slot29 = var2;
                var2 = var3.length;
                var4 = 0;
                var2 = var4 === var2;
                if (var2) {
                    _fun114775_ip = 105;
                    continue _fun114775
                }
            case 92:
                var6 = var3.length;
                var5 = _closure1_slot18;
                var2 = var6 < var5;
            case 105:
                if (!var2) {
                    _fun114775_ip = 112;
                    continue _fun114775
                }
            case 108:
                _closure1_slot33 = var0;
            case 112:
                var0 = var3.length;
                if (!(var0 > var4)) {
                    _fun114775_ip = 163;
                    continue _fun114775
                }
            case 121:
                var2 = _closure1_slot43;
                var0 = undefined;
                var3 = var2.bind(var0)(var3);
                var11 = _closure1_slot22;
                var0 = new Array(0);
                var12 = var0;
                var10 = 0;
                var10 = arraySpread(var12, var11, var10);
                var12 = var0;
                var11 = var3;
                var2 = arraySpread(var12, var11, var10);
                _closure1_slot22 = var0;
            case 163:
                var0 = undefined;
                return var0;
        }
    };
    var1.AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS = var9;
    var9 = function() { // Original name: handleFetchNextPageFail, environment: var3
        var0 = false;
        _closure1_slot32 = var0;
        var0 = undefined;
        return var0;
    };
    var1.AUDIT_LOG_FETCH_NEXT_PAGE_FAIL = var9;
    var9 = function(arg0) { // Original name: handleFilterByAction, environment: var3
        var0 = arg0;
        var1 = var0.action;
        _closure1_slot36 = var1;
        var0 = undefined;
        return var0;
    };
    var1.AUDIT_LOG_FILTER_BY_ACTION = var9;
    var9 = function(arg0) { // Original name: handleFilterByUser, environment: var3
        var0 = arg0;
        var1 = var0.userId;
        _closure1_slot35 = var1;
        var0 = undefined;
        return var0;
    };
    var1.AUDIT_LOG_FILTER_BY_USER = var9;
    var9 = function(arg0) { // Original name: handleFilterByTarget, environment: var3
        var0 = arg0;
        var1 = var0.targetId;
        _closure1_slot37 = var1;
        var0 = undefined;
        return var0;
    };
    var1.AUDIT_LOG_FILTER_BY_TARGET = var9;
    var1.GUILD_SETTINGS_SET_SECTION = var8;
    var8 = function(arg0) { // Original name: handleSettingsInit, environment: var3
        var0 = arg0;
        var2 = var0.guildId;
        var0 = var0.section;
        _closure1_slot21 = var2;
        var2 = null;
        _closure1_slot37 = var2;
        var2 = _closure1_slot44;
        var1 = {};
        var1.section = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1.GUILD_SETTINGS_INIT = var8;
    var3 = function() { // Original name: handleSettingsClose, environment: var3
        var0 = new Array(0);
        _closure1_slot22 = var0;
        var0 = new Array(0);
        _closure1_slot24 = var0;
        var0 = _closure1_slot14;
        var0 = var0.ALL;
        _closure1_slot36 = var0;
        var0 = null;
        _closure1_slot35 = var0;
        _closure1_slot37 = var0;
        var0 = {};
        _closure1_slot38 = var0;
        var0 = 0;
        _closure1_slot39 = var0;
        var0 = true;
        _closure1_slot30 = var0;
        var0 = new Array(0);
        _closure1_slot23 = var0;
        var0 = new Array(0);
        _closure1_slot25 = var0;
        var0 = new Array(0);
        _closure1_slot26 = var0;
        var0 = new Array(0);
        _closure1_slot27 = var0;
        var0 = new Array(0);
        _closure1_slot28 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_SETTINGS_CLOSE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var38 = var3;
    var36 = var1;
    var1 = new var38[var7](var37, var36, var35);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 14644, 1376, 1666, 1672, 1665, 1410, 660, 484, 22, 566, 806, 2]);