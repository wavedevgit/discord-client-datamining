// modules/guild_mod_dash_member_safety/DateUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var3 = function arg0() {
        _fun40554: for (var _fun40554_ip = 0;;) switch (_fun40554_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot3;
                var0 = var0.JOINED_AT;
                if (!(var3 !== var0)) {
                    _fun40554_ip = 42;
                    continue _fun40554
                }
            case 20:
                var0 = _closure1_slot3;
                var2 = var0.ACCOUNT_AGE;
                var0 = undefined;
                if (!(var3 === var2)) {
                    _fun40554_ip = 40;
                    continue _fun40554
                }
            case 36:
                var0 = _closure1_slot5;
            case 40:
                _fun40554_ip = 46;
                continue _fun40554;
            case 42:
                var0 = _closure1_slot4;
            case 46:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var4 = {};
    var7 = 0;
    var4.JOINED_AT = var7;
    var0 = 'JOINED_AT';
    var4[var7] = var0;
    var7 = 1;
    var4.ACCOUNT_AGE = var7;
    var0 = 'ACCOUNT_AGE';
    var4[var7] = var0;
    var _closure1_slot3 = var4;
    var0 = function() {
        var0 = {};
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 0;
        var5 = var4[var1];
        var2 = undefined;
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["FsBhl/"];
        var0.seconds = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["4d1mgT"];
        var0.minutes = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["2wkczD"];
        var0.hours = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["ocdS+f"];
        var0.days = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["az14+h"];
        var0.months = var5;
        var1 = var4[var1];
        var1 = var3.bind(var2)(var1);
        var1 = var1.t;
        var1 = var1["5Gk1ns"];
        var0.years = var1;
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function() {
        var0 = {};
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 0;
        var5 = var4[var1];
        var2 = undefined;
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.JZP2Rs;
        var0.hours = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["3moSHc"];
        var0.days = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["0Ddwr1"];
        var0.months = var5;
        var1 = var4[var1];
        var1 = var3.bind(var2)(var1);
        var1 = var1.t;
        var1 = var1.cR7lcs;
        var0.years = var1;
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = 2;
    var5 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_mod_dash_member_safety/DateUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = {
        'month': 'short',
        'day': 'numeric',
        'year': 'numeric',
        'hour': 'numeric',
        'minute': '2-digit'
    };
    var2.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG = var5;
    var5 = {
        'month': 'short',
        'day': 'numeric',
        'year': 'numeric',
        'hour': 'numeric',
        'minute': '2-digit'
    };
    var2.MEMBER_JOIN_DATE_TOOLTIP_CONFIG = var5;
    var2.MembersTableDateFormats = var4;
    var2.getMembersTableTimestampFormatter = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot6;
        var4 = undefined;
        var1 = arg1;
        var3 = var2.bind(var4)(var1);
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 1;
        var0 = var2[var0];
        var2 = var1.bind(var4)(var0);
        var1 = arg0;
        var0 = false;
        var0 = var2.bind(var4)(var1, var3, var0);
        return var0;
    };
    var2.formatDateRelativeTime = var3;
    var1 = function(arg0) { // Environment: var1
        _fun40558: for (var _fun40558_ip = 0;;) switch (_fun40558_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun40558_ip = 39;
                    continue _fun40558
                }
            case 9:
                var0 = global;
                var0 = var0.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var1;
                var0 = new var5[var0](var4);
                var1 = var0 instanceof Object ? var0 : var1;
                _fun40558_ip = 70;
                continue _fun40558;
            case 39:
                var0 = global;
                var0 = var0.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var2;
                var4 = var3;
                var0 = new var5[var0](var4, var3);
                var1 = var0 instanceof Object ? var0 : var2;
            case 70:
                var0 = var1.getTime;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.getJoinedAtTimestamp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 4391, 2]);