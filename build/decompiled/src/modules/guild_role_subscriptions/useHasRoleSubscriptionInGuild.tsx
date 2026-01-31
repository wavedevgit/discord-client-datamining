// modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun49638: for (var _fun49638_ip = 0;;) switch (_fun49638_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun49638_ip = 46;
                    continue _fun49638
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun49638_ip = 55;
                    continue _fun49638
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun49638_ip = 343;
                    continue _fun49638
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun49638_ip = 323;
                    continue _fun49638
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun49638_ip = 283;
                    continue _fun49638
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun49638_ip = 270;
                    continue _fun49638
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
                    _fun49638_ip = 163;
                    continue _fun49638
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun49638_ip = 179;
                    continue _fun49638
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun49638_ip = 249;
                    continue _fun49638
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun49638_ip = 249;
                    continue _fun49638
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun49638_ip = 234;
                    continue _fun49638
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun49638_ip = 247;
                    continue _fun49638
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun49638_ip = 265;
                continue _fun49638;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun49638_ip = 283;
                continue _fun49638;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun49638_ip = 323;
                    continue _fun49638
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
                    _fun49638_ip = 330;
                    continue _fun49638
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun49639: for (var _fun49639_ip = 0;;) switch (_fun49639_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun49639_ip = 56;
                                continue _fun49639
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
                            _fun49639_ip = 67;
                            continue _fun49639;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun49640: for (var _fun49640_ip = 0;;) switch (_fun49640_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun49640_ip = 23;
                    continue _fun49640
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun49640_ip = 33;
                    continue _fun49640
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
                    _fun49640_ip = 70;
                    continue _fun49640
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun49640_ip = 55;
                    continue _fun49640
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var1 = function arg0, arg1() {
        _fun49641: for (var _fun49641_ip = 0;;) switch (_fun49641_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var0 = arguments[2];
                var4 = arguments[3];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun49641_ip = 63;
                    continue _fun49641
                }
            case 18:
                var1 = null;
                var2 = var1 == var3;
                if (var2) {
                    _fun49641_ip = 60;
                    continue _fun49641
                }
            case 27:
                var8 = _closure1_slot3;
                var7 = var8.getMember;
                var9 = _closure1_slot2;
                var2 = var9.getId;
                var2 = var2.bind(var9)();
                var1 = var7.bind(var8)(var3, var2);
            case 60:
                var0 = var1;
            case 63:
                if (!(var4 === var5)) {
                    _fun49641_ip = 85;
                    continue _fun49641
                }
            case 67:
                var2 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var2;
                var4 = var1;
            case 85:
                var2 = var4;
                var1 = var2[Symbol.iterator];
                var2 = var1().next;
                var7 = var2().value;
                var2 = var1;
                var4 = var2 === var5;
                var2 = undefined;
                if (var4) {
                    _fun49641_ip = 110;
                    continue _fun49641
                }
            case 107:
                var2 = var7;
            case 110:
                if (var4) {
                    _fun49641_ip = 116;
                    continue _fun49641
                }
            case 113:
                var1.return();
            case 116:
                var1 = var2.getGuild;
                var1 = var1.bind(var2)(var3);
                var4 = null;
                if (!(var4 != var1)) {
                    _fun49641_ip = 289;
                    continue _fun49641
                }
            case 135:
                if (!(var4 != var0)) {
                    _fun49641_ip = 289;
                    continue _fun49641
                }
            case 142:
                var7 = var1.features;
                var3 = var7.has;
                var2 = _closure1_slot6;
                var2 = var2.ROLE_SUBSCRIPTIONS_ENABLED;
                var2 = var3.bind(var7)(var2);
                if (!var2) {
                    _fun49641_ip = 289;
                    continue _fun49641
                }
            case 174:
                var1 = _closure1_slot7;
                var0 = var0.roles;
                var3 = var1.bind(var5)(var0);
                var1 = var3.bind(var5)();
                var0 = var1.done;
                var2 = var1;
                var1 = undefined;
                if (var0) {
                    _fun49641_ip = 285;
                    continue _fun49641
                }
            case 206:
                var0 = var2.value;
                var8 = var4 == var6;
                var7 = undefined;
                if (var8) {
                    _fun49641_ip = 224;
                    continue _fun49641
                }
            case 220:
                var7 = var6[var0];
            case 224:
                var8 = var4 == var7;
                var0 = undefined;
                if (var8) {
                    _fun49641_ip = 260;
                    continue _fun49641
                }
            case 233:
                var8 = var7.tags;
                var7 = var4 == var8;
                var1 = var8;
                var0 = undefined;
                if (var7) {
                    _fun49641_ip = 260;
                    continue _fun49641
                }
            case 251:
                var0 = var8.subscription_listing_id;
                var1 = var8;
            case 260:
                if (!(var4 == var0)) {
                    _fun49641_ip = 281;
                    continue _fun49641
                }
            case 264:
                var7 = var3.bind(var5)();
                var0 = var7.done;
                var2 = var7;
                if (var0) {
                    _fun49641_ip = 285;
                    continue _fun49641
                }
            case 279:
                _fun49641_ip = 206;
                continue _fun49641;
            case 281:
                var0 = true;
                return var0;
            case 285:
                var0 = false;
                return var0;
            case 289:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 5;
        var5 = var7[var2];
        var3 = undefined;
        var10 = var4.bind(var3)(var5);
        var9 = var10.useStateFromStores;
        var5 = _closure1_slot2;
        var8 = new Array(2);
        var8[0] = var5;
        var5 = _closure1_slot3;
        var8[1] = var5;
        var5 = function() { // Environment: var0
            _fun49643: for (var _fun49643_ip = 0;;) switch (_fun49643_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    var1 = var0 == var1;
                    if (var1) {
                        _fun49643_ip = 53;
                        continue _fun49643
                    }
                case 16:
                    var4 = _closure1_slot3;
                    var3 = var4.getMember;
                    var2 = _closure2_slot0;
                    var5 = _closure1_slot2;
                    var1 = var5.getId;
                    var1 = var1.bind(var5)();
                    var0 = var3.bind(var4)(var2, var1);
                case 53:
                    return var0;
            }
        };
        var5 = var9.bind(var10)(var8, var5);
        var _closure2_slot1 = var5;
        var2 = var7[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStores;
        var7 = _closure1_slot5;
        var2 = new Array(2);
        var2[0] = var7;
        var1 = _closure1_slot4;
        var2[1] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun49644: for (var _fun49644_ip = 0;;) switch (_fun49644_ip) {
                case 0:
                    var5 = _closure1_slot9;
                    var4 = _closure2_slot0;
                    var2 = null;
                    var6 = var2 != var4;
                    var2 = undefined;
                    if (!var6) {
                        _fun49644_ip = 44;
                        continue _fun49644
                    }
                case 25:
                    var8 = _closure1_slot4;
                    var7 = var8.getRolesSnapshot;
                    var6 = _closure2_slot0;
                    var2 = var7.bind(var8)(var6);
                case 44:
                    var10 = _closure2_slot1;
                    var6 = _closure1_slot5;
                    var0 = new Array(1);
                    var0[0] = var6;
                    var13 = undefined;
                    var12 = var4;
                    var11 = var2;
                    var9 = var0;
                    var0 = var13[var5](var12, var11, var10, var9, var8);
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.computeHasRoleSubscriptionsInGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 1672, 1665, 1410, 660, 566, 2]);