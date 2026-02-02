// utils/InstantInviteUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        _fun67142: for (var _fun67142_ip = 0;;) switch (_fun67142_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun67142_ip = 46;
                    continue _fun67142
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun67142_ip = 55;
                    continue _fun67142
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun67142_ip = 345;
                    continue _fun67142
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun67142_ip = 323;
                    continue _fun67142
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun67142_ip = 283;
                    continue _fun67142
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun67142_ip = 270;
                    continue _fun67142
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
                    _fun67142_ip = 163;
                    continue _fun67142
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun67142_ip = 179;
                    continue _fun67142
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun67142_ip = 249;
                    continue _fun67142
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun67142_ip = 249;
                    continue _fun67142
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun67142_ip = 234;
                    continue _fun67142
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun67142_ip = 247;
                    continue _fun67142
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun67142_ip = 265;
                continue _fun67142;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun67142_ip = 283;
                continue _fun67142;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun67142_ip = 323;
                    continue _fun67142
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
                    _fun67142_ip = 330;
                    continue _fun67142
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun67143: for (var _fun67143_ip = 0;;) switch (_fun67143_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun67143_ip = 56;
                                continue _fun67143
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
                            _fun67143_ip = 67;
                            continue _fun67143;
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
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun67144: for (var _fun67144_ip = 0;;) switch (_fun67144_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun67144_ip = 23;
                    continue _fun67144
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun67144_ip = 33;
                    continue _fun67144
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
                    _fun67144_ip = 70;
                    continue _fun67144
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun67144_ip = 55;
                    continue _fun67144
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var8[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var8[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var8[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var8[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.ChannelTypes;
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.InviteTargetTypes;
    var _closure1_slot11 = var1;
    var4 = {};
    var1 = 'GROUP_DM';
    var4.GROUP_DM = var1;
    var1 = 'DM';
    var4.DM = var1;
    var1 = 'FRIEND';
    var4.FRIEND = var1;
    var1 = 'CHANNEL';
    var4.CHANNEL = var1;
    var _closure1_slot12 = var4;
    var1 = function arg0, arg1() {
        _fun67145: for (var _fun67145_ip = 0;;) switch (_fun67145_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun67145_ip = 34;
                    continue _fun67145
                }
            case 12:
                var3 = _closure1_slot5;
                var2 = var3.isMember;
                var1 = arg1;
                var0 = var2.bind(var3)(var4, var1);
            case 34:
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function arg0() {
        _fun67146: for (var _fun67146_ip = 0;;) switch (_fun67146_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.omitUserIds;
                var17 = var0.maxRowsWithoutQuery;
                var16 = var0.omitGuildId;
                var15 = var0.shownUserIds;
                var14 = var0.rows;
                var13 = var0.counts;
                var12 = var0.includeGroupDms;
                var11 = var0.limit;
                var2 = _closure1_slot17;
                var1 = _closure1_slot9;
                var0 = var1.getPrivateChannelIds;
                var1 = var0.bind(var1)();
                var0 = undefined;
                var9 = var2.bind(var0)(var1);
                var2 = var9.bind(var0)();
                var1 = var2.done;
                var8 = 0;
                var7 = false;
                var6 = null;
                var5 = var2;
                var4 = 0;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun67146_ip = 582;
                    continue _fun67146
                }
            case 110:
                var20 = var5.value;
                if (!(var6 != var17)) {
                    _fun67146_ip = 135;
                    continue _fun67146
                }
            case 119:
                if (!(var17 > var8)) {
                    _fun67146_ip = 135;
                    continue _fun67146
                }
            case 123:
                var1 = var14.length;
                if (!(!(var1 >= var17))) {
                    _fun67146_ip = 582;
                    continue _fun67146
                }
            case 135:
                if (!(var6 != var11)) {
                    _fun67146_ip = 146;
                    continue _fun67146
                }
            case 139:
                if (!(!(var4 >= var11))) {
                    _fun67146_ip = 582;
                    continue _fun67146
                }
            case 146:
                var19 = _closure1_slot4;
                var1 = var19.getChannel;
                var23 = var1.bind(var19)(var20);
                var21 = var4;
                var20 = var3;
                var19 = var2;
                if (!(var6 != var23)) {
                    _fun67146_ip = 555;
                    continue _fun67146
                }
            case 176:
                var1 = var23.isPrivate;
                var1 = var1.bind(var23)();
                var21 = var4;
                var20 = var3;
                var19 = var2;
                if (!var1) {
                    _fun67146_ip = 555;
                    continue _fun67146
                }
            case 201:
                if (!var12) {
                    _fun67146_ip = 226;
                    continue _fun67146
                }
            case 204:
                var22 = var23.type;
                var1 = _closure1_slot10;
                var1 = var1.GROUP_DM;
                if (!(var22 !== var1)) {
                    _fun67146_ip = 496;
                    continue _fun67146
                }
            case 226:
                var24 = _closure1_slot6;
                var22 = var24.lastMessageId;
                var1 = var23.id;
                var1 = var22.bind(var24)(var1);
                var21 = var4;
                var20 = var3;
                var19 = var2;
                if (!(var6 != var1)) {
                    _fun67146_ip = 555;
                    continue _fun67146
                }
            case 262:
                var1 = var23.getRecipientId;
                var22 = var1.bind(var23)();
                var21 = var4;
                var20 = var22;
                var19 = var2;
                if (!(var6 != var22)) {
                    _fun67146_ip = 555;
                    continue _fun67146
                }
            case 288:
                var1 = var18.has;
                var1 = var1.bind(var18)(var22);
                var21 = var4;
                var20 = var22;
                var19 = var2;
                if (var1) {
                    _fun67146_ip = 555;
                    continue _fun67146
                }
            case 313:
                var1 = var15.has;
                var1 = var1.bind(var15)(var22);
                var21 = var4;
                var20 = var22;
                var19 = var2;
                if (var1) {
                    _fun67146_ip = 555;
                    continue _fun67146
                }
            case 338:
                var24 = _closure1_slot8;
                var1 = var24.getUser;
                var1 = var1.bind(var24)(var22);
                var21 = var4;
                var20 = var22;
                var19 = var1;
                if (!(var6 != var1)) {
                    _fun67146_ip = 555;
                    continue _fun67146
                }
            case 369:
                var24 = var1.bot;
                var21 = var4;
                var20 = var22;
                var19 = var1;
                if (var24) {
                    _fun67146_ip = 555;
                    continue _fun67146
                }
            case 390:
                var25 = _closure1_slot13;
                var24 = var1.id;
                var24 = var25.bind(var0)(var16, var24);
                var21 = var4;
                var20 = var22;
                var19 = var1;
                if (var24) {
                    _fun67146_ip = 555;
                    continue _fun67146
                }
            case 420:
                var25 = var15.add;
                var24 = var1.id;
                var24 = var25.bind(var15)(var24);
                var25 = var14.push;
                var24 = {};
                var26 = _closure1_slot12;
                var26 = var26.DM;
                var24.type = var26;
                var24.item = var1;
                var24.isSuggested = var7;
                var24 = var25.bind(var14)(var24);
                var24 = var13.numDms;
                var24 = var24 + 1;
                var13.numDms = var24;
                var21 = var4 + 1;
                var20 = var22;
                var19 = var1;
                _fun67146_ip = 555;
                continue _fun67146;
            case 496:
                var22 = var14.push;
                var1 = {};
                var24 = _closure1_slot12;
                var24 = var24.GROUP_DM;
                var1.type = var24;
                var1.item = var23;
                var1.isSuggested = var7;
                var1 = var22.bind(var14)(var1);
                var1 = var13.numGroupDms;
                var1 = var1 + 1;
                var13.numGroupDms = var1;
                var21 = var4 + 1;
                var20 = var3;
                var19 = var2;
            case 555:
                var22 = var9.bind(var0)();
                var1 = var22.done;
                var4 = var21;
                var3 = var20;
                var2 = var19;
                var5 = var22;
                if (!var1) {
                    _fun67146_ip = 110;
                    continue _fun67146
                }
            case 582:
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var1 = {};
    var9 = 10;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_30_MINUTES;
    var6 = var5.value;
    var5 = {
        'value': 30,
        'type': 'minutes'
    };
    var1[var6] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_1_HOUR;
    var6 = var5.value;
    var5 = {
        'value': 1,
        'type': 'hours'
    };
    var1[var6] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_6_HOURS;
    var6 = var5.value;
    var5 = {
        'value': 6,
        'type': 'hours'
    };
    var1[var6] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_12_HOURS;
    var10 = var5.value;
    var6 = 12;
    var5 = {
        'value': 12,
        'type': 'hours'
    };
    var1[var10] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_1_DAY;
    var10 = var5.value;
    var5 = {
        'value': 1,
        'type': 'days'
    };
    var1[var10] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_7_DAYS;
    var10 = var5.value;
    var5 = {
        'value': 7,
        'type': 'days'
    };
    var1[var10] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_14_DAYS;
    var10 = var5.value;
    var5 = {
        'value': 14,
        'type': 'days'
    };
    var1[var10] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_30_DAYS;
    var10 = var5.value;
    var5 = {
        'value': 30,
        'type': 'days'
    };
    var1[var10] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_60_DAYS;
    var10 = var5.value;
    var5 = {
        'value': 60,
        'type': 'days'
    };
    var1[var10] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_FOREVER;
    var10 = var5.value;
    var5 = {
        'value': 0,
        'type': 'never'
    };
    var1[var10] = var5;
    var _closure1_slot15 = var1;
    var1 = var8[var9];
    var1 = var7.bind(var0)(var1);
    var5 = var1.INVITE_OPTIONS_14_DAYS;
    var1 = new Array(3);
    var1[0] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_30_DAYS;
    var1[1] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.INVITE_OPTIONS_60_DAYS;
    var1[2] = var5;
    var _closure1_slot16 = var1;
    var5 = {};
    var10 = function arg0() {
        _fun67147: for (var _fun67147_ip = 0;;) switch (_fun67147_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var6 = var2.MAX_AGE_OPTIONS;
                var2 = new Array(0);
                var5 = 0;
                var7 = var2;
                var5 = arraySpread(var7, var6, var5);
                var6 = _closure1_slot16;
                var7 = var2;
                var1 = arraySpread(var7, var6, var5);
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun67147_ip = 86;
                    continue _fun67147
                }
            case 84:
                var0 = null;
            case 86:
                return var0;
        }
    };
    var5.getMaxAgeOptionByValue = var10;
    var10 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.MAX_AGE_OPTIONS;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun67150: for (var _fun67150_ip = 0;;) switch (_fun67150_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot16;
                    var0 = var1.includes;
                    var0 = var0.bind(var1)(var2);
                    var0 = !var0;
                    if (var0) {
                        _fun67150_ip = 95;
                        continue _fun67150
                    }
                case 26:
                    var1 = _closure2_slot0;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    if (var4) {
                        _fun67150_ip = 92;
                        continue _fun67150
                    }
                case 44:
                    var3 = _closure2_slot0;
                    var4 = var3.includeExperimentalValues;
                    var3 = var6 == var4;
                    var1 = undefined;
                    if (var3) {
                        _fun67150_ip = 92;
                        continue _fun67150
                    }
                case 63:
                    var3 = var4.includes;
                    var3 = var6 == var3;
                    var1 = undefined;
                    if (var3) {
                        _fun67150_ip = 92;
                        continue _fun67150
                    }
                case 77:
                    var3 = var4.includes;
                    var2 = var2.value;
                    var1 = var3.bind(var4)(var2);
                case 92:
                    var0 = var1;
                case 95:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var5.getMaxAgeOptions = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.MAX_USES_OPTIONS;
    var5.getMaxUsesOptions = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_FOREVER;
    var5.INVITE_OPTIONS_FOREVER = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_1_DAY;
    var5.INVITE_OPTIONS_1_DAY = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_7_DAYS;
    var5.INVITE_OPTIONS_7_DAYS = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_14_DAYS;
    var5.INVITE_OPTIONS_14_DAYS = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_30_DAYS;
    var5.INVITE_OPTIONS_30_DAYS = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_60_DAYS;
    var5.INVITE_OPTIONS_60_DAYS = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_12_HOURS;
    var5.INVITE_OPTIONS_12_HOURS = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_6_HOURS;
    var5.INVITE_OPTIONS_6_HOURS = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_8_HOURS;
    var5.INVITE_OPTIONS_8_HOURS = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_1_HOUR;
    var5.INVITE_OPTIONS_1_HOUR = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_30_MINUTES;
    var5.INVITE_OPTIONS_30_MINUTES = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_UNLIMITED;
    var5.INVITE_OPTIONS_UNLIMITED = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_ONCE;
    var5.INVITE_OPTIONS_ONCE = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_5_TIMES;
    var5.INVITE_OPTIONS_5_TIMES = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_10_TIMES;
    var5.INVITE_OPTIONS_10_TIMES = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_25_TIMES;
    var5.INVITE_OPTIONS_25_TIMES = var10;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var10 = var10.INVITE_OPTIONS_50_TIMES;
    var5.INVITE_OPTIONS_50_TIMES = var10;
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var9 = var9.INVITE_OPTIONS_100_TIMES;
    var5.INVITE_OPTIONS_100_TIMES = var9;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/InstantInviteUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.RowTypes = var4;
    var4 = function arg0() {
        _fun67151: for (var _fun67151_ip = 0;;) switch (_fun67151_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.query;
                var4 = var1.inviteTargetType;
                var9 = var1.omitUserIds;
                var5 = var1.suggestedUserIds;
                var6 = var1.suggestedChannelIds;
                var8 = var1.maxRowsWithoutQuery;
                var7 = var1.omitGuildId;
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var24 = var2;
                var1 = new var24[var1](var23);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = new Array(0);
                var1 = {
                    'numFriends': 0,
                    'numDms': 0,
                    'numGroupDms': 0,
                    'numGuildMembers': 0,
                    'numChannels': 0
                };
                var16 = 0;
                var11 = '';
                if (!(var11 !== var10)) {
                    _fun67151_ip = 313;
                    continue _fun67151
                }
            case 106:
                var14 = {};
                var14.query = var10;
                var14.rows = var2;
                var14.counts = var1;
                var10 = _closure1_slot11;
                var10 = var10.EMBEDDED_APPLICATION;
                if (!(var4 === var10)) {
                    _fun67151_ip = 175;
                    continue _fun67151
                }
            case 140:
                var12 = {};
                var23 = var12;
                var22 = var14;
                var10 = copyDataProperties(var23, var22);
                var10 = 'inviteTargetType';
                var12[var10] = var4;
                var11 = function(arg0) { // Environment: var0
                    _fun67152: for (var _fun67152_ip = 0;;) switch (_fun67152_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = var1.query;
                            var2 = var1.rows;
                            var _closure3_slot0 = var2;
                            var2 = var1.counts;
                            var _closure3_slot1 = var2;
                            var3 = var1.inviteTargetType;
                            var2 = _closure1_slot11;
                            var2 = var2.EMBEDDED_APPLICATION;
                            if (!(var3 === var2)) {
                                _fun67152_ip = 122;
                                continue _fun67152
                            }
                        case 54:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.queryChannels;
                            var1 = {};
                            var1.query = var5;
                            var5 = 3;
                            var1.limit = var5;
                            var1.guildId = var4;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var5 = var0.record;
                                var4 = var0.score;
                                var3 = _closure3_slot0;
                                var2 = var3.push;
                                var1 = {};
                                var6 = _closure1_slot12;
                                var6 = var6.CHANNEL;
                                var1.type = var6;
                                var1.item = var5;
                                var5 = false;
                                var1.isSuggested = var5;
                                var1.score = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot1;
                                var0 = var1.numChannels;
                                var0 = var0 + 1;
                                var1.numChannels = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 122:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = undefined;
                var10 = var11.bind(var10)(var12);
            case 175:
                var15 = {};
                var23 = var15;
                var22 = var14;
                var10 = copyDataProperties(var23, var22);
                var13 = 'omitUserIds';
                var15[var13] = var9;
                var12 = 'shownUserIds';
                var15[var12] = var3;
                var10 = 'suggestedUserIds';
                var15[var10] = var5;
                var10 = function(arg0) { // Environment: var0
                    _fun67154: for (var _fun67154_ip = 0;;) switch (_fun67154_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = var1.query;
                            var2 = var1.rows;
                            var _closure3_slot0 = var2;
                            var2 = var1.counts;
                            var _closure3_slot1 = var2;
                            var11 = var1.omitUserIds;
                            var10 = var1.shownUserIds;
                            var _closure3_slot2 = var10;
                            var6 = var1.suggestedUserIds;
                            var9 = null;
                            if (!(var9 != var6)) {
                                _fun67154_ip = 254;
                                continue _fun67154
                            }
                        case 62:
                            var4 = new Array(0);
                            var2 = _closure1_slot17;
                            var3 = undefined;
                            var8 = var2.bind(var3)(var6);
                            var6 = var8.bind(var3)();
                            var2 = var6.done;
                            var7 = var6;
                            var6 = undefined;
                            if (var2) {
                                _fun67154_ip = 187;
                                continue _fun67154
                            }
                        case 97:
                            var14 = var7.value;
                            var2 = var11.has;
                            var2 = var2.bind(var11)(var14);
                            var12 = var6;
                            if (var2) {
                                _fun67154_ip = 169;
                                continue _fun67154
                            }
                        case 118:
                            var2 = var10.has;
                            var2 = var2.bind(var10)(var14);
                            var12 = var6;
                            if (var2) {
                                _fun67154_ip = 169;
                                continue _fun67154
                            }
                        case 134:
                            var13 = _closure1_slot8;
                            var2 = var13.getUser;
                            var2 = var2.bind(var13)(var14);
                            var12 = var2;
                            if (!(var9 != var2)) {
                                _fun67154_ip = 169;
                                continue _fun67154
                            }
                        case 156:
                            var13 = var4.push;
                            var13 = var13.bind(var4)(var2);
                            var12 = var2;
                        case 169:
                            var13 = var8.bind(var3)();
                            var2 = var13.done;
                            var6 = var12;
                            var7 = var13;
                            if (!var2) {
                                _fun67154_ip = 97;
                                continue _fun67154
                            }
                        case 187:
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 9;
                            var1 = var6[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.queryMemberList;
                            var1 = {};
                            var1.query = var5;
                            var1.members = var4;
                            var4 = 10;
                            var1.limit = var4;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var5 = var0.record;
                                var4 = var0.score;
                                var3 = _closure3_slot2;
                                var2 = var3.add;
                                var1 = var5.id;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure3_slot0;
                                var2 = var3.push;
                                var1 = {};
                                var6 = _closure1_slot12;
                                var6 = var6.FRIEND;
                                var1.type = var6;
                                var1.item = var5;
                                var5 = true;
                                var1.isSuggested = var5;
                                var1.score = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot1;
                                var0 = var1.numFriends;
                                var0 = var0 + 1;
                                var1.numFriends = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 254:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = undefined;
                var10 = var10.bind(var11)(var15);
                var15 = {};
                var23 = var15;
                var22 = var14;
                var10 = copyDataProperties(var23, var22);
                var15[var13] = var9;
                var15[var12] = var3;
                var10 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var5 = var0.query;
                    var2 = var0.omitUserIds;
                    var _closure3_slot0 = var2;
                    var2 = var0.shownUserIds;
                    var _closure3_slot1 = var2;
                    var2 = var0.rows;
                    var _closure3_slot2 = var2;
                    var0 = var0.counts;
                    var _closure3_slot3 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.queryDMUsers;
                    var2 = {};
                    var2.query = var5;
                    var5 = 50;
                    var2.limit = var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun67157: for (var _fun67157_ip = 0;;) switch (_fun67157_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.record;
                                var4 = var0.score;
                                var3 = _closure3_slot0;
                                var2 = var3.has;
                                var1 = var5.id;
                                var1 = var2.bind(var3)(var1);
                                if (var1) {
                                    _fun67157_ip = 206;
                                    continue _fun67157
                                }
                            case 43:
                                var3 = _closure3_slot1;
                                var2 = var3.has;
                                var1 = var5.id;
                                var1 = var2.bind(var3)(var1);
                                if (var1) {
                                    _fun67157_ip = 206;
                                    continue _fun67157
                                }
                            case 68:
                                var3 = _closure1_slot4;
                                var2 = var3.getDMFromUserId;
                                var1 = var5.id;
                                var8 = var2.bind(var3)(var1);
                                var3 = null;
                                var1 = var3 != var8;
                                if (!var1) {
                                    _fun67157_ip = 119;
                                    continue _fun67157
                                }
                            case 100:
                                var7 = _closure1_slot6;
                                var2 = var7.lastMessageId;
                                var2 = var2.bind(var7)(var8);
                                var1 = var3 != var2;
                            case 119:
                                if (!var1) {
                                    _fun67157_ip = 206;
                                    continue _fun67157
                                }
                            case 122:
                                var3 = _closure3_slot1;
                                var2 = var3.add;
                                var1 = var5.id;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure3_slot2;
                                var2 = var3.push;
                                var1 = {};
                                var6 = _closure1_slot12;
                                var6 = var6.DM;
                                var1.type = var6;
                                var1.item = var5;
                                var5 = false;
                                var1.isSuggested = var5;
                                var1.score = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot3;
                                var0 = var1.numDms;
                                var0 = var0 + 1;
                                var1.numDms = var0;
                            case 206:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var10.bind(var11)(var15);
                var10 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var5 = var0.query;
                    var2 = var0.rows;
                    var _closure3_slot0 = var2;
                    var0 = var0.counts;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.queryGroupDMs;
                    var2 = {
                        'query': null,
                        'limit': 50,
                        'fuzzy': false
                    };
                    var2.query = var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var5 = var0.record;
                        var4 = var0.score;
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var6 = _closure1_slot12;
                        var6 = var6.GROUP_DM;
                        var1.type = var6;
                        var1.item = var5;
                        var5 = false;
                        var1.isSuggested = var5;
                        var1.score = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = _closure3_slot1;
                        var0 = var1.numGroupDms;
                        var0 = var0 + 1;
                        var1.numGroupDms = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var10.bind(var11)(var14);
                var10 = {};
                var23 = var10;
                var22 = var14;
                var14 = copyDataProperties(var23, var22);
                var10[var13] = var9;
                var10[var12] = var3;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var5 = var0.query;
                    var2 = var0.rows;
                    var _closure3_slot0 = var2;
                    var2 = var0.counts;
                    var _closure3_slot1 = var2;
                    var2 = var0.omitUserIds;
                    var _closure3_slot2 = var2;
                    var0 = var0.shownUserIds;
                    var _closure3_slot3 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.queryFriends;
                    var2 = {
                        'query': null,
                        'limit': 500,
                        '_fuzzy': false
                    };
                    var2.query = var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun67161: for (var _fun67161_ip = 0;;) switch (_fun67161_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.record;
                                var4 = var0.score;
                                var3 = _closure3_slot2;
                                var2 = var3.has;
                                var1 = var5.id;
                                var1 = var2.bind(var3)(var1);
                                if (var1) {
                                    _fun67161_ip = 59;
                                    continue _fun67161
                                }
                            case 40:
                                var6 = _closure3_slot3;
                                var3 = var6.has;
                                var2 = var5.id;
                                var1 = var3.bind(var6)(var2);
                            case 59:
                                if (var1) {
                                    _fun67161_ip = 149;
                                    continue _fun67161
                                }
                            case 62:
                                var3 = _closure3_slot3;
                                var2 = var3.add;
                                var1 = var5.id;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure3_slot0;
                                var2 = var3.push;
                                var1 = {};
                                var6 = _closure1_slot12;
                                var6 = var6.FRIEND;
                                var1.type = var6;
                                var1.item = var5;
                                var5 = false;
                                var1.isSuggested = var5;
                                var1.score = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot1;
                                var0 = var1.numFriends;
                                var0 = var0 + 1;
                                var1.numFriends = var0;
                            case 149:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var0.bind(var11)(var10);
                _fun67151_ip = 1183;
                continue _fun67151;
            case 313:
                var0 = {};
                var0.omitUserIds = var9;
                var0.maxRowsWithoutQuery = var8;
                var0.omitGuildId = var7;
                var0.shownUserIds = var3;
                var0.rows = var2;
                var0.counts = var1;
                var3 = _closure1_slot11;
                var3 = var3.EMBEDDED_APPLICATION;
                if (!(var4 === var3)) {
                    _fun67151_ip = 595;
                    continue _fun67151
                }
            case 365:
                var4 = _closure1_slot14;
                var3 = {};
                var23 = var3;
                var22 = var0;
                var7 = copyDataProperties(var23, var22);
                var8 = false;
                var7 = 'includeGroupDms';
                var3[var7] = var8;
                var8 = 1;
                var7 = 'limit';
                var3[var7] = var8;
                var12 = undefined;
                var3 = var4.bind(var12)(var3);
                var3 = {};
                var23 = var3;
                var22 = var0;
                var4 = copyDataProperties(var23, var22);
                var4 = 'suggestedChannelIds';
                var3[var4] = var6;
                var4 = var3.suggestedChannelIds;
                var11 = var3.maxRowsWithoutQuery;
                var10 = var3.rows;
                var9 = var3.counts;
                var8 = null;
                if (!(var8 != var4)) {
                    _fun67151_ip = 595;
                    continue _fun67151
                }
            case 467:
                var3 = _closure1_slot17;
                var7 = var3.bind(var12)(var4);
                var4 = var7.bind(var12)();
                var3 = var4.done;
                var6 = true;
                if (var3) {
                    _fun67151_ip = 595;
                    continue _fun67151
                }
            case 490:
                var14 = var4.value;
                if (!(var8 != var11)) {
                    _fun67151_ip = 512;
                    continue _fun67151
                }
            case 499:
                if (!(var11 > var16)) {
                    _fun67151_ip = 512;
                    continue _fun67151
                }
            case 503:
                var3 = var10.length;
                if (!(!(var3 >= var11))) {
                    _fun67151_ip = 595;
                    continue _fun67151
                }
            case 512:
                var13 = _closure1_slot4;
                var3 = var13.getChannel;
                var14 = var3.bind(var13)(var14);
                if (!(var8 != var14)) {
                    _fun67151_ip = 580;
                    continue _fun67151
                }
            case 530:
                var13 = var10.push;
                var3 = {};
                var17 = _closure1_slot12;
                var17 = var17.CHANNEL;
                var3.type = var17;
                var3.item = var14;
                var3.isSuggested = var6;
                var3 = var13.bind(var10)(var3);
                var3 = var9.numChannels;
                var3 = var3 + 1;
                var9.numChannels = var3;
            case 580:
                var13 = var7.bind(var12)();
                var3 = var13.done;
                var4 = var13;
                if (!var3) {
                    _fun67151_ip = 490;
                    continue _fun67151
                }
            case 595:
                var3 = {};
                var23 = var3;
                var22 = var0;
                var4 = copyDataProperties(var23, var22);
                var4 = 'suggestedUserIds';
                var3[var4] = var5;
                var17 = var3.omitUserIds;
                var4 = var3.suggestedUserIds;
                var13 = var3.maxRowsWithoutQuery;
                var12 = var3.omitGuildId;
                var11 = var3.shownUserIds;
                var10 = var3.rows;
                var9 = var3.counts;
                var14 = null;
                if (!(var14 != var4)) {
                    _fun67151_ip = 892;
                    continue _fun67151
                }
            case 667:
                var3 = _closure1_slot17;
                var8 = undefined;
                var7 = var3.bind(var8)(var4);
                var4 = var7.bind(var8)();
                var3 = var4.done;
                var6 = true;
                var5 = var4;
                var4 = undefined;
                if (var3) {
                    _fun67151_ip = 892;
                    continue _fun67151
                }
            case 700:
                var20 = var5.value;
                if (!(var14 != var13)) {
                    _fun67151_ip = 725;
                    continue _fun67151
                }
            case 709:
                if (!(var13 > var16)) {
                    _fun67151_ip = 725;
                    continue _fun67151
                }
            case 713:
                var3 = var10.length;
                if (!(!(var3 >= var13))) {
                    _fun67151_ip = 892;
                    continue _fun67151
                }
            case 725:
                var3 = var17.has;
                var3 = var3.bind(var17)(var20);
                var18 = var4;
                if (var3) {
                    _fun67151_ip = 871;
                    continue _fun67151
                }
            case 744:
                var3 = var11.has;
                var3 = var3.bind(var11)(var20);
                var18 = var4;
                if (var3) {
                    _fun67151_ip = 871;
                    continue _fun67151
                }
            case 760:
                var19 = _closure1_slot8;
                var3 = var19.getUser;
                var3 = var3.bind(var19)(var20);
                var19 = var14 == var3;
                if (var19) {
                    _fun67151_ip = 797;
                    continue _fun67151
                }
            case 782:
                var21 = _closure1_slot13;
                var20 = var3.id;
                var19 = var21.bind(var8)(var12, var20);
            case 797:
                var18 = var3;
                if (var19) {
                    _fun67151_ip = 871;
                    continue _fun67151
                }
            case 803:
                var20 = var11.add;
                var19 = var3.id;
                var19 = var20.bind(var11)(var19);
                var20 = var10.push;
                var19 = {};
                var21 = _closure1_slot12;
                var21 = var21.FRIEND;
                var19.type = var21;
                var19.item = var3;
                var19.isSuggested = var6;
                var19 = var20.bind(var10)(var19);
                var19 = var9.numFriends;
                var19 = var19 + 1;
                var9.numFriends = var19;
                var18 = var3;
            case 871:
                var19 = var7.bind(var8)();
                var3 = var19.done;
                var4 = var18;
                var5 = var19;
                if (!var3) {
                    _fun67151_ip = 700;
                    continue _fun67151
                }
            case 892:
                var4 = _closure1_slot14;
                var3 = {};
                var23 = var3;
                var22 = var0;
                var5 = copyDataProperties(var23, var22);
                var6 = true;
                var5 = 'includeGroupDms';
                var3[var5] = var6;
                var13 = undefined;
                var3 = var4.bind(var13)(var3);
                var12 = var0.omitUserIds;
                var11 = var0.maxRowsWithoutQuery;
                var10 = var0.omitGuildId;
                var9 = var0.shownUserIds;
                var8 = var0.rows;
                var7 = var0.counts;
                var3 = _closure1_slot17;
                var4 = _closure1_slot7;
                var0 = var4.getFriendIDs;
                var0 = var0.bind(var4)();
                var6 = var3.bind(var13)(var0);
                var3 = var6.bind(var13)();
                var0 = var3.done;
                var5 = false;
                var4 = var3;
                var3 = undefined;
                if (var0) {
                    _fun67151_ip = 1183;
                    continue _fun67151
                }
            case 1009:
                var19 = var4.value;
                if (!(var14 != var11)) {
                    _fun67151_ip = 1034;
                    continue _fun67151
                }
            case 1018:
                if (!(var11 > var16)) {
                    _fun67151_ip = 1034;
                    continue _fun67151
                }
            case 1022:
                var0 = var8.length;
                if (!(!(var0 >= var11))) {
                    _fun67151_ip = 1183;
                    continue _fun67151
                }
            case 1034:
                var0 = var12.has;
                var0 = var0.bind(var12)(var19);
                var17 = var3;
                if (var0) {
                    _fun67151_ip = 1162;
                    continue _fun67151
                }
            case 1050:
                var0 = var9.has;
                var0 = var0.bind(var9)(var19);
                var17 = var3;
                if (var0) {
                    _fun67151_ip = 1162;
                    continue _fun67151
                }
            case 1066:
                var18 = _closure1_slot8;
                var0 = var18.getUser;
                var0 = var0.bind(var18)(var19);
                var18 = var14 == var0;
                if (var18) {
                    _fun67151_ip = 1103;
                    continue _fun67151
                }
            case 1088:
                var20 = _closure1_slot13;
                var19 = var0.id;
                var18 = var20.bind(var13)(var10, var19);
            case 1103:
                var17 = var0;
                if (var18) {
                    _fun67151_ip = 1162;
                    continue _fun67151
                }
            case 1109:
                var19 = var8.push;
                var18 = {};
                var20 = _closure1_slot12;
                var20 = var20.FRIEND;
                var18.type = var20;
                var18.item = var0;
                var18.isSuggested = var5;
                var18 = var19.bind(var8)(var18);
                var18 = var7.numFriends;
                var18 = var18 + 1;
                var7.numFriends = var18;
                var17 = var0;
            case 1162:
                var18 = var6.bind(var13)();
                var0 = var18.done;
                var3 = var17;
                var4 = var18;
                if (!var0) {
                    _fun67151_ip = 1009;
                    continue _fun67151
                }
            case 1183:
                var0 = {};
                var0.rows = var2;
                var0.counts = var1;
                return var0;
        }
    };
    var2.generateRowsForQuery = var4;
    var4 = function arg0, arg1() {
        _fun67162: for (var _fun67162_ip = 0;;) switch (_fun67162_ip) {
            case 0:
                var7 = arg1;
                var2 = new Array(0);
                var1 = new Array(0);
                var3 = _closure1_slot17;
                var5 = undefined;
                var0 = arg0;
                var4 = var3.bind(var5)(var0);
                var3 = var4.bind(var5)();
                var0 = var3.done;
                if (var0) {
                    _fun67162_ip = 184;
                    continue _fun67162
                }
            case 43:
                var8 = var3.value;
                var9 = var8.type;
                var0 = _closure1_slot12;
                var0 = var0.FRIEND;
                if (!(var0 !== var9)) {
                    _fun67162_ip = 121;
                    continue _fun67162
                }
            case 67:
                var0 = _closure1_slot12;
                var0 = var0.DM;
                if (!(var0 !== var9)) {
                    _fun67162_ip = 121;
                    continue _fun67162
                }
            case 81:
                var0 = _closure1_slot12;
                var0 = var0.CHANNEL;
                if (!(var0 !== var9)) {
                    _fun67162_ip = 109;
                    continue _fun67162
                }
            case 95:
                var0 = _closure1_slot12;
                var0 = var0.GROUP_DM;
                if (!(var0 === var9)) {
                    _fun67162_ip = 166;
                    continue _fun67162
                }
            case 109:
                var0 = var1.push;
                var0 = var0.bind(var1)(var8);
                _fun67162_ip = 166;
                continue _fun67162;
            case 121:
                var0 = var8.item;
                var9 = _closure1_slot13;
                var0 = var0.id;
                var0 = var9.bind(var5)(var7, var0);
                if (var0) {
                    _fun67162_ip = 156;
                    continue _fun67162
                }
            case 144:
                var0 = var1.push;
                var0 = var0.bind(var1)(var8);
                _fun67162_ip = 166;
                continue _fun67162;
            case 156:
                var0 = var2.push;
                var0 = var0.bind(var2)(var8);
            case 166:
                var8 = var4.bind(var5)();
                var0 = var8.done;
                var3 = var8;
                if (!var0) {
                    _fun67162_ip = 43;
                    continue _fun67162
                }
            case 184:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var2.groupInviteSuggestions = var4;
    var4 = function arg0, arg1() {
        _fun67163: for (var _fun67163_ip = 0;;) switch (_fun67163_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var1 = _closure1_slot17;
                var2 = _closure1_slot9;
                var0 = var2.getPrivateChannelIds;
                var0 = var0.bind(var2)();
                var6 = undefined;
                var5 = var1.bind(var6)(var0);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var0 = null;
                var4 = var2;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun67163_ip = 271;
                    continue _fun67163
                }
            case 58:
                var11 = var4.value;
                var10 = _closure1_slot4;
                var1 = var10.getChannel;
                var12 = var1.bind(var10)(var11);
                var11 = var3;
                var10 = var2;
                if (!(var0 != var12)) {
                    _fun67163_ip = 247;
                    continue _fun67163
                }
            case 90:
                var1 = var12.isDM;
                var1 = var1.bind(var12)();
                var11 = var3;
                var10 = var2;
                if (!var1) {
                    _fun67163_ip = 247;
                    continue _fun67163
                }
            case 112:
                var14 = _closure1_slot6;
                var13 = var14.lastMessageId;
                var1 = var12.id;
                var1 = var13.bind(var14)(var1);
                var11 = var3;
                var10 = var2;
                if (!(var0 != var1)) {
                    _fun67163_ip = 247;
                    continue _fun67163
                }
            case 142:
                var1 = var12.getRecipientId;
                var13 = var1.bind(var12)();
                var10 = var2;
                var11 = var13;
                if (!(var0 != var11)) {
                    _fun67163_ip = 247;
                    continue _fun67163
                }
            case 162:
                var1 = var9.has;
                var1 = var1.bind(var9)(var13);
                var11 = var13;
                var10 = var2;
                if (var1) {
                    _fun67163_ip = 247;
                    continue _fun67163
                }
            case 181:
                var12 = _closure1_slot8;
                var1 = var12.getUser;
                var1 = var1.bind(var12)(var13);
                var11 = var13;
                var10 = var1;
                if (!(var0 != var1)) {
                    _fun67163_ip = 247;
                    continue _fun67163
                }
            case 206:
                var12 = var1.bot;
                var11 = var13;
                var10 = var1;
                if (var12) {
                    _fun67163_ip = 247;
                    continue _fun67163
                }
            case 221:
                var14 = _closure1_slot13;
                var12 = var1.id;
                var12 = var14.bind(var6)(var8, var12);
                var11 = var13;
                var10 = var1;
                if (var12) {
                    _fun67163_ip = 247;
                    continue _fun67163
                }
            case 245:
                return var1;
            case 247:
                var12 = var5.bind(var6)();
                var1 = var12.done;
                var3 = var11;
                var2 = var10;
                var4 = var12;
                if (!var1) {
                    _fun67163_ip = 58;
                    continue _fun67163
                }
            case 271:
                return var0;
        }
    };
    var2.getMostRecentDMedUser = var4;
    var4 = function arg0() {
        _fun67164: for (var _fun67164_ip = 0;;) switch (_fun67164_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channel;
                var3 = var1.inviteTargetType;
                var5 = var1.applicationId;
                var1 = _closure1_slot11;
                var1 = var1.EMBEDDED_APPLICATION;
                if (!(var3 === var1)) {
                    _fun67164_ip = 155;
                    continue _fun67164
                }
            case 36:
                var1 = null;
                if (!(var1 != var0)) {
                    _fun67164_ip = 155;
                    continue _fun67164
                }
            case 42:
                var1 = _closure1_slot17;
                var3 = _closure1_slot3;
                var2 = var3.getEmbeddedActivitiesForChannel;
                var0 = var0.id;
                var0 = var2.bind(var3)(var0);
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = var3.bind(var4)();
                var0 = var1.done;
                var2 = var1;
                if (var0) {
                    _fun67164_ip = 155;
                    continue _fun67164
                }
            case 88:
                var0 = var2.value;
                var1 = var0.applicationId;
                if (!(var1 !== var5)) {
                    _fun67164_ip = 119;
                    continue _fun67164
                }
            case 102:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (var1) {
                    _fun67164_ip = 155;
                    continue _fun67164
                }
            case 117:
                _fun67164_ip = 88;
                continue _fun67164;
            case 119:
                var1 = global;
                var2 = var1.Set;
                var7 = var0.userIds;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 155:
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var1;
                var0 = new var8[var0](var7);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getUsersAlreadyJoined = var4;
    var4 = function arg0, arg1() {
        _fun67165: for (var _fun67165_ip = 0;;) switch (_fun67165_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.parseInt;
                var5 = undefined;
                var1 = arg1;
                var0 = 10;
                var8 = var2.bind(var5)(var1, var0);
                var0 = 0;
                var0 = var0 === var8;
                var2 = _closure1_slot15;
                var4 = var2[var3];
                var9 = var4.value;
                var2 = var2[var3];
                var3 = var2.type;
                var2 = 'minutes';
                if (!(var2 !== var3)) {
                    _fun67165_ip = 402;
                    continue _fun67165
                }
            case 67:
                var2 = 'hours';
                if (!(var2 !== var3)) {
                    _fun67165_ip = 304;
                    continue _fun67165
                }
            case 78:
                var2 = 'days';
                if (!(var2 !== var3)) {
                    _fun67165_ip = 206;
                    continue _fun67165
                }
            case 86:
                var2 = 'never';
                if (!(var2 !== var3)) {
                    _fun67165_ip = 102;
                    continue _fun67165
                }
            case 96:
                var2 = '';
                return var2;
            case 102:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 11;
                var2 = var10[var3];
                var2 = var7.bind(var5)(var2);
                var6 = var2.intl;
                if (var0) {
                    _fun67165_ip = 172;
                    continue _fun67165
                }
            case 130:
                var11 = var6.formatToPlainString;
                var2 = var10[var3];
                var2 = var7.bind(var5)(var2);
                var2 = var2.t;
                var4 = var2.yJnTxI;
                var2 = {};
                var2.numUses = var8;
                var2 = var11.bind(var6)(var4, var2);
                _fun67165_ip = 204;
                continue _fun67165;
            case 172:
                var4 = var6.string;
                var3 = var10[var3];
                var3 = var7.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.QrHBnC;
                var2 = var4.bind(var6)(var3);
            case 204:
                return var2;
            case 206:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var6 = var4[var2];
                var6 = var3.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var2 = var4[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.t;
                if (var0) {
                    _fun67165_ip = 281;
                    continue _fun67165
                }
            case 253:
                var4 = var3.TfuB9B;
                var2 = {};
                var2.numDays = var9;
                var2.numUses = var8;
                var2 = var6.bind(var7)(var4, var2);
                _fun67165_ip = 302;
                continue _fun67165;
            case 281:
                var4 = var3.T96qss;
                var3 = {};
                var3.numDays = var9;
                var2 = var6.bind(var7)(var4, var3);
            case 302:
                return var2;
            case 304:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var6 = var4[var2];
                var6 = var3.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var2 = var4[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.t;
                if (var0) {
                    _fun67165_ip = 379;
                    continue _fun67165
                }
            case 351:
                var4 = var3.NgZgAB;
                var2 = {};
                var2.numHours = var9;
                var2.numUses = var8;
                var2 = var6.bind(var7)(var4, var2);
                _fun67165_ip = 400;
                continue _fun67165;
            case 379:
                var4 = var3.ZVdJMy;
                var3 = {};
                var3.numHours = var9;
                var2 = var6.bind(var7)(var4, var3);
            case 400:
                return var2;
            case 402:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                if (var0) {
                    _fun67165_ip = 472;
                    continue _fun67165
                }
            case 430:
                var7 = var3.formatToPlainString;
                var0 = var6[var1];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var2 = var0.eDRWJK;
                var0 = {};
                var0.numUses = var8;
                var0 = var7.bind(var3)(var2, var0);
                _fun67165_ip = 504;
                continue _fun67165;
            case 472:
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["/WbTXD"];
                var0 = var2.bind(var3)(var1);
            case 504:
                return var0;
        }
    };
    var2.maxAgeString = var4;
    var3 = function arg0, arg1() {
        _fun67166: for (var _fun67166_ip = 0;;) switch (_fun67166_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun67166_ip = 359;
                    continue _fun67166
                }
            case 15:
                var1 = _closure1_slot15;
                var3 = var1[var2];
                var5 = var3.value;
                var1 = var1[var2];
                var2 = var1.type;
                var1 = 'minutes';
                if (!(var1 !== var2)) {
                    _fun67166_ip = 285;
                    continue _fun67166
                }
            case 51:
                var1 = 'hours';
                if (!(var1 !== var2)) {
                    _fun67166_ip = 211;
                    continue _fun67166
                }
            case 62:
                var1 = 'days';
                if (!(var1 !== var2)) {
                    _fun67166_ip = 137;
                    continue _fun67166
                }
            case 70:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.RHbY6K;
                var1 = {};
                var1.link = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 137:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.gLIlkb;
                var1 = {};
                var1.numDays = var5;
                var1.link = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 211:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["3d9BlG"];
                var1 = {};
                var1.numHours = var5;
                var1.link = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 285:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var2 = var7[var0];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var7[var0];
                var0 = var6.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.N3VHkw;
                var0 = {};
                var0.numMinutes = var5;
                var0.link = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 359:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var2 = var6[var0];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var5.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.RHbY6K;
                var0 = {};
                var0.link = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.urgentShareMessageString = var3;
    var2.EXPERIMENTAL_MAX_AGE_OPTIONS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 1372, 1672, 3908, 3061, 1613, 8294, 660, 3296, 5555, 8298, 1234, 2]);