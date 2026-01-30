// modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun102176: for (var _fun102176_ip = 0;;) switch (_fun102176_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun102176_ip = 45;
                    continue _fun102176
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun102176_ip = 54;
                    continue _fun102176
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun102176_ip = 344;
                    continue _fun102176
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun102176_ip = 322;
                    continue _fun102176
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun102176_ip = 282;
                    continue _fun102176
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun102176_ip = 269;
                    continue _fun102176
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
                    _fun102176_ip = 162;
                    continue _fun102176
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun102176_ip = 178;
                    continue _fun102176
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun102176_ip = 248;
                    continue _fun102176
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun102176_ip = 248;
                    continue _fun102176
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun102176_ip = 233;
                    continue _fun102176
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun102176_ip = 246;
                    continue _fun102176
                }
            case 233:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun102176_ip = 264;
                continue _fun102176;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun102176_ip = 282;
                continue _fun102176;
            case 269:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun102176_ip = 322;
                    continue _fun102176
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
                    _fun102176_ip = 329;
                    continue _fun102176
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun102177: for (var _fun102177_ip = 0;;) switch (_fun102177_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun102177_ip = 56;
                                continue _fun102177
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
                            _fun102177_ip = 67;
                            continue _fun102177;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun102178: for (var _fun102178_ip = 0;;) switch (_fun102178_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun102178_ip = 23;
                    continue _fun102178
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun102178_ip = 33;
                    continue _fun102178
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
                    _fun102178_ip = 70;
                    continue _fun102178
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun102178_ip = 55;
                    continue _fun102178
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useFirstGloballyViewbleGuildChannelId, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun102180: for (var _fun102180_ip = 0;;) switch (_fun102180_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun102180_ip = 17;
                        continue _fun102180
                    }
                case 13:
                    var1 = undefined;
                    return var1;
                case 17:
                    var3 = _closure1_slot3;
                    var1 = var3.getSelectableChannels;
                    var0 = _closure2_slot0;
                    var4 = var1.bind(var3)(var0);
                    var0 = _closure1_slot5;
                    var3 = undefined;
                    var7 = var0.bind(var3)(var4);
                    var1 = var7.bind(var3)();
                    var0 = var1.done;
                    var6 = 3;
                    var5 = var1;
                    if (var0) {
                        _fun102180_ip = 146;
                        continue _fun102180
                    }
                case 70:
                    var0 = var5.value;
                    var0 = var0.channel;
                    var9 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var10 = var9.bind(var3)(var1);
                    var9 = var10.canEveryone;
                    var1 = _closure1_slot4;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var9.bind(var10)(var1, var0);
                    if (var1) {
                        _fun102180_ip = 139;
                        continue _fun102180
                    }
                case 122:
                    var9 = var7.bind(var3)();
                    var1 = var9.done;
                    var5 = var9;
                    if (var1) {
                        _fun102180_ip = 146;
                        continue _fun102180
                    }
                case 137:
                    _fun102180_ip = 70;
                    continue _fun102180;
                case 139:
                    var0 = var0.id;
                    return var0;
                case 146:
                    var1 = var2 == var4;
                    var0 = undefined;
                    if (var1) {
                        _fun102180_ip = 180;
                        continue _fun102180
                    }
                case 155:
                    var1 = 0;
                    var1 = var4[var1];
                    var2 = var2 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun102180_ip = 180;
                        continue _fun102180
                    }
                case 170:
                    var1 = var1.channel;
                    var0 = var1.id;
                case 180:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useFirstGloballyViewbleGuildChannelId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1662, 483, 566, 3055, 2]);