// modules/saved_messages/message_reminders/MessageRemindersTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = {};
    var1 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var3 = var0.bind(var1)();
        var2 = var3.add;
        var1 = 30;
        var0 = 'minutes';
        var1 = var2.bind(var3)(var1, var0);
        var0 = var1.toDate;
        var0 = var0.bind(var1)();
        return var0;
    };
    var0.getDueAt = var1;
    var1 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 1;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["OV8l/H"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.getLabel = var1;
    var1 = new Array(5);
    var1[0] = var0;
    var0 = {};
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var3 = var0.bind(var1)();
        var2 = var3.add;
        var1 = 1;
        var0 = 'hour';
        var1 = var2.bind(var3)(var1, var0);
        var0 = var1.toDate;
        var0 = var0.bind(var1)();
        return var0;
    };
    var0.getDueAt = var6;
    var6 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 1;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["zf0R+0"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.getLabel = var6;
    var1[1] = var0;
    var0 = {};
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var3 = var0.bind(var1)();
        var2 = var3.add;
        var1 = 4;
        var0 = 'hour';
        var1 = var2.bind(var3)(var1, var0);
        var0 = var1.toDate;
        var0 = var0.bind(var1)();
        return var0;
    };
    var0.getDueAt = var6;
    var6 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 1;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["5gztZN"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.getLabel = var6;
    var1[2] = var0;
    var0 = {};
    var6 = function() {
        _fun76236: for (var _fun76236_ip = 0;;) switch (_fun76236_ip) {
            case 0:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 0;
                var1 = var6[var0];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var3 = var1.bind(var2)();
                var1 = var3.startOf;
                var4 = 'day';
                var8 = var1.bind(var3)(var4);
                var7 = var8.add;
                var1 = 9;
                var3 = 'hours';
                var3 = var7.bind(var8)(var1, var3);
                var0 = var6[var0];
                var0 = var5.bind(var2)(var0);
                var2 = var0.bind(var2)();
                var0 = var2.hour;
                var0 = var0.bind(var2)();
                if (!(!(var0 >= var1))) {
                    _fun76236_ip = 100;
                    continue _fun76236
                }
            case 88:
                var0 = var3.toDate;
                var0 = var0.bind(var3)();
                _fun76236_ip = 124;
                continue _fun76236;
            case 100:
                var2 = var3.add;
                var1 = 1;
                var2 = var2.bind(var3)(var1, var4);
                var1 = var2.toDate;
                var0 = var1.bind(var2)();
            case 124:
                return var0;
        }
    };
    var0.getDueAt = var6;
    var6 = function() {
        _fun76237: for (var _fun76237_ip = 0;;) switch (_fun76237_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 0;
                var0 = var3[var0];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var2 = var0.bind(var5)();
                var0 = var2.hour;
                var2 = var0.bind(var2)();
                var0 = 9;
                if (!(!(var2 >= var0))) {
                    _fun76237_ip = 104;
                    continue _fun76237
                }
            case 45:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 1;
                var2 = var6[var0];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.FnFI3m;
                var0 = var2.bind(var3)(var0);
                _fun76237_ip = 161;
                continue _fun76237;
            case 104:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["7MKr2P"];
                var0 = var2.bind(var3)(var1);
            case 161:
                return var0;
        }
    };
    var0.getLabel = var6;
    var1[3] = var0;
    var0 = {};
    var6 = function() {
        _fun76238: for (var _fun76238_ip = 0;;) switch (_fun76238_ip) {
            case 0:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var4 = 0;
                var2 = var1[var4];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = var2.bind(var1)();
                var2 = var3.day;
                var6 = var2.bind(var3)();
                if (!(var4 !== var6)) {
                    _fun76238_ip = 139;
                    continue _fun76238
                }
            case 42:
                var5 = 8;
                var3 = 1;
                var2 = var5;
                if (!(var3 === var6)) {
                    _fun76238_ip = 142;
                    continue _fun76238
                }
            case 55:
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var6 = var3[var4];
                var6 = var8.bind(var1)(var6);
                var9 = var6.bind(var1)();
                var7 = var9.startOf;
                var6 = 'day';
                var10 = var7.bind(var9)(var6);
                var9 = var10.add;
                var7 = 9;
                var6 = 'hours';
                var7 = var9.bind(var10)(var7, var6);
                var6 = var7.isAfter;
                var3 = var3[var4];
                var3 = var8.bind(var1)(var3);
                var3 = var3.bind(var1)();
                var3 = var6.bind(var7)(var3);
                var2 = var5;
                if (!var3) {
                    _fun76238_ip = 142;
                    continue _fun76238
                }
            case 139:
                var2 = 1;
            case 142:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var1)(var0);
                var1 = var0.bind(var1)();
                var0 = var1.day;
                var2 = var0.bind(var1)(var2);
                var1 = var2.startOf;
                var0 = 'day';
                var3 = var1.bind(var2)(var0);
                var2 = var3.add;
                var1 = 9;
                var0 = 'hours';
                var1 = var2.bind(var3)(var1, var0);
                var0 = var1.toDate;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var0.getDueAt = var6;
    var5 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 1;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["q+Ls05"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.getLabel = var5;
    var1[4] = var0;
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/message_reminders/MessageRemindersTypes.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MESSAGE_REMINDER_DURATION_ITEMS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3047, 1234, 2]);