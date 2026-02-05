// modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var7 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var0;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 5;
        var4 = var9[var3];
        var6 = undefined;
        var12 = var8.bind(var6)(var4);
        var11 = var12.useStateFromStoresArray;
        var4 = _closure1_slot4;
        var10 = new Array(1);
        var10[0] = var4;
        var5 = new Array(1);
        var5[0] = var7;
        var4 = function() { // Environment: var1
            _fun102580: for (var _fun102580_ip = 0;;) switch (_fun102580_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getAppliedGuildBoostsForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun102580_ip = 35;
                        continue _fun102580
                    }
                case 31:
                    var0 = new Array(0);
                case 35:
                    return var0;
            }
        };
        var5 = var11.bind(var12)(var10, var4, var5);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot3;
        var11 = var4.useMemo;
        var10 = new Array(2);
        var10[0] = var5;
        var10[1] = var0;
        var0 = function() { // Environment: var1
            var6 = _closure2_slot2;
            var4 = new Array(0);
            var3 = 0;
            var7 = var4;
            var5 = 0;
            var1 = arraySpread(var7, var6, var5);
            var2 = var4.sort;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun102582: for (var _fun102582_ip = 0;;) switch (_fun102582_ip) {
                    case 0:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 6;
                        var1 = var4[var0];
                        var2 = undefined;
                        var6 = var3.bind(var2)(var1);
                        var5 = var6.extractTimestamp;
                        var1 = arg0;
                        var1 = var1.id;
                        var1 = var5.bind(var6)(var1);
                        var0 = var4[var0];
                        var3 = var3.bind(var2)(var0);
                        var2 = var3.extractTimestamp;
                        var0 = arg1;
                        var0 = var0.id;
                        var0 = var2.bind(var3)(var0);
                        var1 = var1 < var0;
                        var0 = -1;
                        if (!var1) {
                            _fun102582_ip = 88;
                            continue _fun102582
                        }
                    case 85:
                        var0 = 1;
                    case 88:
                        return var0;
                }
            };
            var2 = var2.bind(var4)(var1);
            var1 = var2.slice;
            var0 = _closure2_slot1;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var0 = var11.bind(var4)(var0, var10);
        var _closure2_slot3 = var0;
        var10 = var9[var3];
        var14 = var8.bind(var6)(var10);
        var13 = var14.useStateFromStoresArray;
        var10 = _closure1_slot6;
        var12 = new Array(1);
        var12[0] = var10;
        var11 = new Array(2);
        var11[0] = var7;
        var11[1] = var0;
        var10 = function() { // Environment: var1
            var0 = global;
            var2 = var0.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var2
                }
            });
            var6 = var3;
            var2 = new var6[var2](var5);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure3_slot0 = var2;
            var4 = _closure2_slot3;
            var3 = var4.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun102584: for (var _fun102584_ip = 0;;) switch (_fun102584_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = _closure1_slot6;
                        var3 = var4.getMember;
                        var2 = _closure2_slot0;
                        var1 = var0.userId;
                        var2 = var3.bind(var4)(var2, var1);
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun102584_ip = 62;
                            continue _fun102584
                        }
                    case 40:
                        var2 = _closure3_slot0;
                        var1 = var2.add;
                        var0 = var0.userId;
                        var0 = var1.bind(var2)(var0);
                    case 62:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = var0.Array;
            var0 = var1.from;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var10 = var13.bind(var14)(var12, var10, var11);
        var _closure2_slot4 = var10;
        var13 = var4.useEffect;
        var12 = new Array(2);
        var12[0] = var7;
        var12[1] = var10;
        var11 = function() { // Environment: var1
            _fun102585: for (var _fun102585_ip = 0;;) switch (_fun102585_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var2 > var1)) {
                        _fun102585_ip = 41;
                        continue _fun102585
                    }
                case 18:
                    var2 = _closure2_slot4;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot5;
                        var2 = var3.requestMember;
                        var1 = _closure2_slot0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var11 = var13.bind(var4)(var11, var12);
        var12 = var4.useMemo;
        var11 = new Array(2);
        var11[0] = var7;
        var11[1] = var10;
        var10 = function() { // Environment: var1
            _fun102587: for (var _fun102587_ip = 0;;) switch (_fun102587_ip) {
                case 0:
                    var0 = _closure2_slot4;
                    var1 = var0.length;
                    var0 = 0;
                    if (!(!(var1 > var0))) {
                        _fun102587_ip = 22;
                        continue _fun102587
                    }
                case 18:
                    var0 = {};
                    _fun102587_ip = 40;
                    continue _fun102587;
                case 22:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot4;
                    var1[var3] = var2;
                    var0 = var1;
                case 40:
                    return var0;
            }
        };
        var13 = var12.bind(var4)(var10, var11);
        var10 = 7;
        var10 = var9[var10];
        var12 = var8.bind(var6)(var10);
        var11 = var12.useSubscribeGuildMembers;
        var10 = 'GuildPowerupsRecentActivity';
        var10 = var11.bind(var12)(var13, var10);
        var3 = var9[var3];
        var8 = var8.bind(var6)(var3);
        var6 = var8.useStateFromStores;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var1
            _fun102588: for (var _fun102588_ip = 0;;) switch (_fun102588_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun102588_ip = 41;
                        continue _fun102588
                    }
                case 35:
                    var0 = var1.premiumSubscriberCount;
                case 41:
                    return var0;
            }
        };
        var6 = var6.bind(var8)(var3, var2);
        var _closure2_slot5 = var6;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var5 = var5.length;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun102589: for (var _fun102589_ip = 0;;) switch (_fun102589_ip) {
                case 0:
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot2;
                    var1 = var1.length;
                    if (!(var2 !== var1)) {
                        _fun102589_ip = 60;
                        continue _fun102589
                    }
                case 20:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchAppliedGuildBoostsForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 60:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var1 = global;
        var4 = var1.Date;
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 6;
        var2 = var7[var2];
        var5 = undefined;
        var8 = var3.bind(var5)(var2);
        var3 = var8.extractTimestamp;
        var2 = var6.id;
        var11 = var3.bind(var8)(var2);
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var12 = var3;
        var2 = new var12[var4](var11, var10);
        var2 = var2 instanceof Object ? var2 : var3;
        var4 = _closure1_slot0;
        var3 = 5;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStoresObject;
        var1 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            _fun102591: for (var _fun102591_ip = 0;;) switch (_fun102591_ip) {
                case 0:
                    var6 = _closure1_slot6;
                    var3 = var6.getMember;
                    var1 = _closure2_slot0;
                    var2 = var1.guildId;
                    var0 = var1.userId;
                    var3 = var3.bind(var6)(var2, var0);
                    var0 = {};
                    var5 = var6.getNick;
                    var2 = var1.guildId;
                    var1 = var1.userId;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun102591_ip = 92;
                        continue _fun102591
                    }
                case 66:
                    var4 = _closure2_slot0;
                    var5 = var4.user;
                    var6 = var1 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun102591_ip = 89;
                        continue _fun102591
                    }
                case 84:
                    var4 = var5.username;
                case 89:
                    var2 = var4;
                case 92:
                    var0.username = var2;
                    var4 = var1 == var3;
                    var5 = undefined;
                    if (var4) {
                        _fun102591_ip = 111;
                        continue _fun102591
                    }
                case 105:
                    var5 = var3.colorString;
                case 111:
                    var6 = var1 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun102591_ip = 123;
                        continue _fun102591
                    }
                case 120:
                    var4 = var5;
                case 123:
                    var0.roleColor = var4;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun102591_ip = 143;
                        continue _fun102591
                    }
                case 137:
                    var2 = var3.colorStrings;
                case 143:
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun102591_ip = 155;
                        continue _fun102591
                    }
                case 152:
                    var1 = var2;
                case 155:
                    var0.roleColorStrings = var1;
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var3, var0, var1);
        var0 = {};
        var0.timestamp = var2;
        var2 = var1.username;
        var0.username = var2;
        var2 = var1.roleColor;
        var0.roleColor = var2;
        var1 = var1.roleColorStrings;
        var0.roleColorStrings = var1;
        return var0;
    };
    var2.useGetBoostUserConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 10036, 5667, 1681, 1410, 566, 21, 7765, 6730, 2]);