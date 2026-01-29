// modules/guild_scheduled_events/useCanCreateAnEvent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun65138: for (var _fun65138_ip = 0;;) switch (_fun65138_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun65138_ip = 45;
                    continue _fun65138
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun65138_ip = 54;
                    continue _fun65138
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun65138_ip = 342;
                    continue _fun65138
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun65138_ip = 322;
                    continue _fun65138
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun65138_ip = 282;
                    continue _fun65138
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun65138_ip = 269;
                    continue _fun65138
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
                    _fun65138_ip = 162;
                    continue _fun65138
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun65138_ip = 178;
                    continue _fun65138
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun65138_ip = 248;
                    continue _fun65138
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun65138_ip = 248;
                    continue _fun65138
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun65138_ip = 233;
                    continue _fun65138
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun65138_ip = 246;
                    continue _fun65138
                }
            case 233:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun65138_ip = 264;
                continue _fun65138;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun65138_ip = 282;
                continue _fun65138;
            case 269:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun65138_ip = 322;
                    continue _fun65138
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
                    _fun65138_ip = 329;
                    continue _fun65138
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun65139: for (var _fun65139_ip = 0;;) switch (_fun65139_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun65139_ip = 56;
                                continue _fun65139
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
                            _fun65139_ip = 67;
                            continue _fun65139;
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
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun65140: for (var _fun65140_ip = 0;;) switch (_fun65140_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun65140_ip = 23;
                    continue _fun65140
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun65140_ip = 33;
                    continue _fun65140
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
                    _fun65140_ip = 70;
                    continue _fun65140
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun65140_ip = 55;
                    continue _fun65140
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useCanCreateAnEvent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useCanCreateAnEvent, environment: var1
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var7 = _closure1_slot5;
        var2 = new Array(3);
        var2[0] = var7;
        var7 = _closure1_slot3;
        var2[1] = var7;
        var1 = _closure1_slot6;
        var2[2] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun65142: for (var _fun65142_ip = 0;;) switch (_fun65142_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var3 = var1.bind(var2)(var0);
                    var2 = _closure1_slot6;
                    var1 = var2.can;
                    var0 = _closure1_slot7;
                    var0 = var0.ADMINISTRATOR;
                    var0 = var1.bind(var2)(var0, var3);
                    if (var0) {
                        _fun65142_ip = 265;
                        continue _fun65142
                    }
                case 56:
                    var2 = _closure1_slot6;
                    var1 = var2.can;
                    var0 = _closure1_slot7;
                    var0 = var0.CREATE_EVENTS;
                    var0 = var1.bind(var2)(var0, var3);
                    if (var0) {
                        _fun65142_ip = 265;
                        continue _fun65142
                    }
                case 88:
                    var1 = _closure1_slot8;
                    var3 = _closure1_slot3;
                    var2 = var3.getChannels;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var0 = _closure1_slot4;
                    var0 = var2[var0];
                    var7 = undefined;
                    var6 = var1.bind(var7)(var0);
                    var1 = var6.bind(var7)();
                    var0 = var1.done;
                    var5 = 6;
                    var4 = 1;
                    var3 = 0;
                    var2 = null;
                    if (var0) {
                        _fun65142_ip = 261;
                        continue _fun65142
                    }
                case 148:
                    var0 = var1.value;
                    var12 = var0.channel;
                    var0 = _closure2_slot1;
                    if (!(var2 != var0)) {
                        _fun65142_ip = 179;
                        continue _fun65142
                    }
                case 166:
                    var10 = var12.type;
                    var0 = _closure2_slot1;
                    if (!(var10 === var0)) {
                        _fun65142_ip = 240;
                        continue _fun65142
                    }
                case 179:
                    var10 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var5];
                    var10 = var10.bind(var7)(var0);
                    var0 = var10.attachChannelPermissions;
                    var10 = var0.bind(var10)(var12);
                    var0 = _closure1_slot2;
                    var0 = var0.bind(var7)(var10, var4);
                    var11 = var0[var3];
                    var10 = _closure1_slot6;
                    var0 = var10.can;
                    var0 = var0.bind(var10)(var11, var12);
                    if (var0) {
                        _fun65142_ip = 257;
                        continue _fun65142
                    }
                case 240:
                    var10 = var6.bind(var7)();
                    var0 = var10.done;
                    var1 = var10;
                    if (var0) {
                        _fun65142_ip = 261;
                        continue _fun65142
                    }
                case 255:
                    _fun65142_ip = 148;
                    continue _fun65142;
                case 257:
                    var0 = true;
                    return var0;
                case 261:
                    var0 = false;
                    return var0;
                case 265:
                    var0 = true;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1662, 1410, 3050, 660, 566, 8049, 2]);