// utils/GuildRoleUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var4;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun18978: for (var _fun18978_ip = 0;;) switch (_fun18978_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun18978_ip = 45;
                    continue _fun18978
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun18978_ip = 54;
                    continue _fun18978
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun18978_ip = 342;
                    continue _fun18978
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun18978_ip = 322;
                    continue _fun18978
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun18978_ip = 282;
                    continue _fun18978
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun18978_ip = 269;
                    continue _fun18978
                }
            case 109:
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
                    _fun18978_ip = 162;
                    continue _fun18978
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun18978_ip = 178;
                    continue _fun18978
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun18978_ip = 248;
                    continue _fun18978
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun18978_ip = 248;
                    continue _fun18978
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun18978_ip = 233;
                    continue _fun18978
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun18978_ip = 246;
                    continue _fun18978
                }
            case 233:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun18978_ip = 264;
                continue _fun18978;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun18978_ip = 282;
                continue _fun18978;
            case 269:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun18978_ip = 322;
                    continue _fun18978
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun18978_ip = 329;
                    continue _fun18978
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun18979: for (var _fun18979_ip = 0;;) switch (_fun18979_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun18979_ip = 56;
                                continue _fun18979
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
                            _fun18979_ip = 67;
                            continue _fun18979;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun18980: for (var _fun18980_ip = 0;;) switch (_fun18980_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun18980_ip = 23;
                    continue _fun18980
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun18980_ip = 33;
                    continue _fun18980
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
                    _fun18980_ip = 70;
                    continue _fun18980
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun18980_ip = 55;
                    continue _fun18980
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var3 = function(arg0, arg1) { // Original name: compareGuildRoles, environment: var1
        _fun18981: for (var _fun18981_ip = 0;;) switch (_fun18981_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var5 = var3.guildId;
                var0 = var3.id;
                if (!(var0 !== var5)) {
                    _fun18981_ip = 116;
                    continue _fun18981
                }
            case 20:
                var1 = var2.id;
                var0 = -1;
                if (!(var1 !== var5)) {
                    _fun18981_ip = 114;
                    continue _fun18981
                }
            case 35:
                var4 = var3.position;
                var1 = var2.position;
                if (!(var4 === var1)) {
                    _fun18981_ip = 97;
                    continue _fun18981
                }
            case 49:
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 0;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var4);
                var6 = var7.compare;
                var4 = var3.id;
                var1 = var2.id;
                var1 = var6.bind(var7)(var4, var1);
                _fun18981_ip = 111;
                continue _fun18981;
            case 97:
                var6 = var2.position;
                var4 = var3.position;
                var1 = var6 - var4;
            case 111:
                var0 = var1;
            case 114:
                _fun18981_ip = 177;
                continue _fun18981;
            case 116:
                var4 = var2.id;
                var1 = 1;
                if (!(var4 === var5)) {
                    _fun18981_ip = 174;
                    continue _fun18981
                }
            case 128:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var4 = 0;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.compare;
                var3 = var3.id;
                var2 = var2.id;
                var1 = var4.bind(var5)(var3, var2);
            case 174:
                var0 = var1;
            case 177:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 4;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/GuildRoleUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: sortGuildRoleRecords, environment: var1
        var0 = arg0;
        var2 = var0.sort;
        var1 = _closure1_slot6;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.sortGuildRoleRecords = var4;
    var2.compareGuildRoles = var3;
    var3 = function(arg0, arg1) { // Original name: doesRoleSortHigher, environment: var1
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var1 = var3.bind(var2)(var1, var0);
        var0 = 0;
        var0 = var1 < var0;
        return var0;
    };
    var2.doesRoleSortHigher = var3;
    var3 = function(arg0, arg1) { // Original name: sortInviteRoles, environment: var1
        _fun18984: for (var _fun18984_ip = 0;;) switch (_fun18984_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var3 = var1.position;
                var0 = var2.position;
                if (!(var3 === var0)) {
                    _fun18984_ip = 68;
                    continue _fun18984
                }
            case 20:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 0;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.compare;
                var3 = var1.id;
                var0 = var2.id;
                var0 = var4.bind(var5)(var3, var0);
                _fun18984_ip = 82;
                continue _fun18984;
            case 68:
                var2 = var2.position;
                var1 = var1.position;
                var0 = var2 - var1;
            case 82:
                return var0;
        }
    };
    var2.sortInviteRoles = var3;
    var3 = function(arg0, arg1) { // Original name: inviteRoleToDisplayData, environment: var1
        _fun18985: for (var _fun18985_ip = 0;;) switch (_fun18985_ip) {
            case 0:
                var2 = arg1;
                var0 = {};
                var1 = var2.id;
                var0.id = var1;
                var1 = var2.name;
                var0.name = var1;
                var1 = arg0;
                var0.guildId = var1;
                var5 = var2.color;
                var1 = null;
                var4 = 0;
                var3 = null;
                if (!(var4 !== var5)) {
                    _fun18985_ip = 86;
                    continue _fun18985
                }
            case 45:
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var4 = 1;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.int2hex;
                var4 = var2.color;
                var3 = var5.bind(var6)(var4);
            case 86:
                var0.colorString = var3;
                var3 = var2.colors;
                var4 = var1 != var3;
                var3 = null;
                if (!var4) {
                    _fun18985_ip = 146;
                    continue _fun18985
                }
            case 105:
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var4 = 2;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.extractColorStringsFromServerColors;
                var4 = var2.colors;
                var3 = var5.bind(var6)(var4);
            case 146:
                var0.colorStrings = var3;
                var4 = var2.icon;
                var5 = var1 != var4;
                var3 = null;
                if (!var5) {
                    _fun18985_ip = 168;
                    continue _fun18985
                }
            case 165:
                var3 = var4;
            case 168:
                var0.icon = var3;
                var2 = var2.unicode_emoji;
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun18985_ip = 190;
                    continue _fun18985
                }
            case 187:
                var1 = var2;
            case 190:
                var0.unicodeEmoji = var1;
                return var0;
        }
    };
    var2.inviteRoleToDisplayData = var3;
    var1 = function(arg0, arg1) { // Original name: filterRoleDeletes, environment: var1
        _fun18986: for (var _fun18986_ip = 0;;) switch (_fun18986_ip) {
            case 0:
                var8 = arg0;
                var0 = arg1;
                var3 = arguments[2];
                var4 = arguments[3];
                var7 = undefined;
                if (!(var3 === var7)) {
                    _fun18986_ip = 22;
                    continue _fun18986
                }
            case 18:
                var3 = new Array(0);
            case 22:
                if (!(var4 === var7)) {
                    _fun18986_ip = 30;
                    continue _fun18986
                }
            case 26:
                var4 = new Array(0);
            case 30:
                var2 = var4.length;
                var1 = var3.length;
                var2 = var2 + var1;
                var1 = 0;
                if (!(var2 !== var1)) {
                    _fun18986_ip = 206;
                    continue _fun18986
                }
            case 53:
                var1 = {};
                var13 = var1;
                var12 = var0;
                var2 = copyDataProperties(var13, var12);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun18986_ip = 119;
                    continue _fun18986
                }
            case 71:
                var2 = _closure1_slot4;
                var5 = var2.bind(var7)(var4);
                var4 = var5.bind(var7)();
                var2 = var4.done;
                if (var2) {
                    _fun18986_ip = 119;
                    continue _fun18986
                }
            case 95:
                var2 = var4.value;
                var2 = delete var1[var2];
                var6 = var5.bind(var7)();
                var2 = var6.done;
                var4 = var6;
                if (!var2) {
                    _fun18986_ip = 95;
                    continue _fun18986
                }
            case 119:
                var2 = _closure1_slot4;
                var5 = var2.bind(var7)(var3);
                var3 = var5.bind(var7)();
                var2 = var3.done;
                var4 = 3;
                if (var2) {
                    _fun18986_ip = 204;
                    continue _fun18986
                }
            case 146:
                var11 = var3.value;
                var9 = var11.id;
                var10 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var10 = var10.bind(var7)(var2);
                var2 = var10.fromServer;
                var2 = var2.bind(var10)(var8, var11);
                var1[var9] = var2;
                var9 = var5.bind(var7)();
                var2 = var9.done;
                var3 = var9;
                if (!var2) {
                    _fun18986_ip = 146;
                    continue _fun18986
                }
            case 204:
                return var1;
            case 206:
                return var0;
        }
    };
    var2.filterRoleDeletes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [21, 668, 1668, 1669, 2]);