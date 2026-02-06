// modules/parent_tools/FamilyCenterUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.ACTION_TO_TEXT;
    var _closure1_slot4 = var4;
    var4 = var3.FAMILY_CENTER_ERROR_CODE_TO_FAILURE;
    var _closure1_slot5 = var4;
    var4 = var3.FamilyCenterFailureCode;
    var _closure1_slot6 = var4;
    var4 = var3.TeenActionDisplayType;
    var _closure1_slot7 = var4;
    var4 = var3.UserLinkStatus;
    var _closure1_slot8 = var4;
    var3 = var3.UserLinkType;
    var _closure1_slot9 = var3;
    var4 = function() {
        var0 = global;
        var2 = var0.Map;
        var3 = _closure1_slot4;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot10 = var4;
    var3 = function() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var3 = _closure1_slot3;
        var0 = var3.getLinkedUsers;
        var0 = var0.bind(var3)();
        var2 = var1.bind(var2)(var0);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            _fun42752: for (var _fun42752_ip = 0;;) switch (_fun42752_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.link_status;
                    var0 = _closure1_slot8;
                    var0 = var0.ACTIVE;
                    var0 = var3 === var0;
                    if (!var0) {
                        _fun42752_ip = 49;
                        continue _fun42752
                    }
                case 29:
                    var2 = var2.link_type;
                    var1 = _closure1_slot9;
                    var1 = var1.PARENT;
                    var0 = var2 === var1;
                case 49:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot11 = var3;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/FamilyCenterUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function() { // Environment: var1
        var0 = {};
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var5 = 2;
        var2 = var4[var5];
        var3 = undefined;
        var2 = var6.bind(var3)(var2);
        var9 = var2.intl;
        var8 = var9.string;
        var2 = _closure1_slot1;
        var1 = 3;
        var7 = var4[var1];
        var7 = var2.bind(var3)(var7);
        var7 = var7.VjIAQQ;
        var7 = var8.bind(var9)(var7);
        var0.today = var7;
        var5 = var4[var5];
        var5 = var6.bind(var3)(var5);
        var7 = var5.intl;
        var6 = var7.string;
        var5 = var4[var1];
        var5 = var2.bind(var3)(var5);
        var5 = var5["2a8xHY"];
        var5 = var6.bind(var7)(var5);
        var0.yesterday = var5;
        var1 = var4[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.Xt6oND;
        var0.days = var1;
        return var0;
    };
    var2.getEmptyActivityFormatter = var5;
    var5 = function(arg0) { // Environment: var1
        _fun42754: for (var _fun42754_ip = 0;;) switch (_fun42754_ip) {
            case 0:
                var1 = {};
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 2;
                var2 = var5[var6];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var10 = var2.intl;
                var9 = var10.string;
                var3 = _closure1_slot1;
                var2 = 3;
                var0 = var5[var2];
                var8 = var3.bind(var4)(var0);
                var0 = arg0;
                if (var0) {
                    _fun42754_ip = 150;
                    continue _fun42754
                }
            case 59:
                var0 = var8.g1ZX6m;
                var0 = var9.bind(var10)(var0);
                var1.today = var0;
                var0 = var5[var6];
                var0 = var7.bind(var4)(var0);
                var12 = var0.intl;
                var11 = var12.string;
                var0 = var5[var2];
                var0 = var3.bind(var4)(var0);
                var0 = var0.s3qSVt;
                var0 = var11.bind(var12)(var0);
                var1.yesterday = var0;
                var0 = var5[var2];
                var0 = var3.bind(var4)(var0);
                var0 = var0.f1UJiC;
                var1.days = var0;
                var0 = var1;
                _fun42754_ip = 239;
                continue _fun42754;
            case 150:
                var8 = var8["2AtcIs"];
                var8 = var9.bind(var10)(var8);
                var1.today = var8;
                var6 = var5[var6];
                var6 = var7.bind(var4)(var6);
                var8 = var6.intl;
                var7 = var8.string;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.stOECr;
                var6 = var7.bind(var8)(var6);
                var1.yesterday = var6;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.n8n5Ba;
                var1.days = var2;
                var0 = var1;
            case 239:
                return var0;
        }
    };
    var2.getActivityWindowTimestampFormatter = var5;
    var5 = function(arg0, arg1, arg2) { // Environment: var1
        _fun42755: for (var _fun42755_ip = 0;;) switch (_fun42755_ip) {
            case 0:
                var4 = arg0;
                var9 = arg2;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var1 = var6[var2];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var10 = var1.bind(var3)();
                var8 = var10.diff;
                var1 = var6[var2];
                var1 = var5.bind(var3)(var1);
                var7 = var1.bind(var3)(var4);
                var1 = 's';
                var11 = var8.bind(var10)(var7, var1);
                var1 = arg1;
                var1 = var1.bind(var3)();
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var5 = var2.bind(var3)(var4);
                var4 = var5.format;
                var2 = 'LL';
                var2 = var4.bind(var5)(var2);
                var5 = 86400;
                if (!(!(var11 < var5))) {
                    _fun42755_ip = 240;
                    continue _fun42755
                }
            case 113:
                var2 = 172800;
                if (!(!(var11 < var2))) {
                    _fun42755_ip = 232;
                    continue _fun42755
                }
            case 123:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var4 = var0.intl;
                var3 = var4.formatToPlainString;
                var2 = var1.days;
                var0 = {};
                var6 = global;
                var8 = var6.Math;
                var7 = var8.min;
                var10 = var6.Math;
                var6 = var10.floor;
                var5 = var11 / var5;
                var6 = var6.bind(var10)(var5);
                var5 = null;
                var10 = var5 != var9;
                var5 = 999;
                if (!var10) {
                    _fun42755_ip = 213;
                    continue _fun42755
                }
            case 210:
                var5 = var9;
            case 213:
                var5 = var7.bind(var8)(var6, var5);
                var0.days = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun42755_ip = 238;
                continue _fun42755;
            case 232:
                var0 = var1.yesterday;
            case 238:
                _fun42755_ip = 246;
                continue _fun42755;
            case 240:
                var0 = var1.today;
            case 246:
                return var0;
        }
    };
    var2.formatUserActivityTimestamp = var5;
    var5 = function(arg0, arg1) { // Environment: var1
        _fun42756: for (var _fun42756_ip = 0;;) switch (_fun42756_ip) {
            case 0:
                var3 = arg0;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 4;
                var1 = var6[var0];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var9 = var1.bind(var4)();
                var8 = var9.diff;
                var1 = var6[var0];
                var1 = var5.bind(var4)(var1);
                var7 = var1.bind(var4)(var3);
                var1 = 's';
                var9 = var8.bind(var9)(var7, var1);
                var1 = arg1;
                var1 = var1.bind(var4)();
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var5 = var0.bind(var4)(var3);
                var3 = var5.format;
                var0 = 'LL';
                var8 = var3.bind(var5)(var0);
                var6 = 60;
                if (!(!(var9 < var6))) {
                    _fun42756_ip = 437;
                    continue _fun42756
                }
            case 107:
                var10 = 3600;
                if (!(!(var9 < var10))) {
                    _fun42756_ip = 363;
                    continue _fun42756
                }
            case 120:
                var11 = 86400;
                if (!(!(var9 < var11))) {
                    _fun42756_ip = 289;
                    continue _fun42756
                }
            case 133:
                var0 = 172800;
                if (!(!(var9 < var0))) {
                    _fun42756_ip = 281;
                    continue _fun42756
                }
            case 146:
                var0 = 604800;
                if (!(!(var9 < var0))) {
                    _fun42756_ip = 207;
                    continue _fun42756
                }
            case 156:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 2;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var7 = var0.intl;
                var5 = var7.formatToPlainString;
                var3 = var1.date;
                var0 = {};
                var0.date = var8;
                var0 = var5.bind(var7)(var3, var0);
                _fun42756_ip = 279;
                continue _fun42756;
            case 207:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 2;
                var3 = var7[var3];
                var3 = var5.bind(var4)(var3);
                var8 = var3.intl;
                var7 = var8.formatToPlainString;
                var5 = var1.days;
                var3 = {};
                var12 = global;
                var13 = var12.Math;
                var12 = var13.floor;
                var11 = var9 / var11;
                var11 = var12.bind(var13)(var11);
                var3.count = var11;
                var0 = var7.bind(var8)(var5, var3);
            case 279:
                _fun42756_ip = 287;
                continue _fun42756;
            case 281:
                var0 = var1.yesterday;
            case 287:
                _fun42756_ip = 361;
                continue _fun42756;
            case 289:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 2;
                var3 = var7[var3];
                var3 = var5.bind(var4)(var3);
                var8 = var3.intl;
                var7 = var8.formatToPlainString;
                var5 = var1.hours;
                var3 = {};
                var11 = global;
                var12 = var11.Math;
                var11 = var12.floor;
                var10 = var9 / var10;
                var10 = var11.bind(var12)(var10);
                var3.count = var10;
                var0 = var7.bind(var8)(var5, var3);
            case 361:
                _fun42756_ip = 435;
                continue _fun42756;
            case 363:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var5 = var2.intl;
                var4 = var5.formatToPlainString;
                var3 = var1.minutes;
                var2 = {};
                var7 = global;
                var8 = var7.Math;
                var7 = var8.floor;
                var6 = var9 / var6;
                var6 = var7.bind(var8)(var6);
                var2.count = var6;
                var0 = var4.bind(var5)(var3, var2);
            case 435:
                _fun42756_ip = 443;
                continue _fun42756;
            case 437:
                var0 = var1.seconds;
            case 443:
                return var0;
        }
    };
    var2.formatLinkTimestamp = var5;
    var5 = function(arg0) { // Environment: var1
        _fun42757: for (var _fun42757_ip = 0;;) switch (_fun42757_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.display_type;
                var0 = _closure1_slot7;
                var0 = var0.USER_ADD;
                var0 = var3 === var0;
                if (var0) {
                    _fun42757_ip = 49;
                    continue _fun42757
                }
            case 29:
                var4 = var2.display_type;
                var3 = _closure1_slot7;
                var3 = var3.USER_INTERACTION;
                var0 = var4 === var3;
            case 49:
                if (var0) {
                    _fun42757_ip = 72;
                    continue _fun42757
                }
            case 52:
                var2 = var2.display_type;
                var1 = _closure1_slot7;
                var1 = var1.USER_CALLED;
                var0 = var2 === var1;
            case 72:
                return var0;
        }
    };
    var2.isUserAction = var5;
    var5 = function(arg0) { // Environment: var1
        _fun42758: for (var _fun42758_ip = 0;;) switch (_fun42758_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.display_type;
                var0 = _closure1_slot7;
                var0 = var0.GUILD_ADD;
                var0 = var3 === var0;
                if (var0) {
                    _fun42758_ip = 49;
                    continue _fun42758
                }
            case 29:
                var2 = var2.display_type;
                var1 = _closure1_slot7;
                var1 = var1.GUILD_INTERACTION;
                var0 = var2 === var1;
            case 49:
                return var0;
        }
    };
    var2.isGuildAction = var5;
    var5 = function(arg0) { // Environment: var1
        var0 = arg0;
        var1 = var0.display_type;
        var0 = _closure1_slot7;
        var0 = var0.PURCHASES;
        var0 = var1 === var0;
        return var0;
    };
    var2.isPurchase = var5;
    var5 = function(arg0) { // Environment: var1
        _fun42760: for (var _fun42760_ip = 0;;) switch (_fun42760_ip) {
            case 0:
                var4 = arg0;
                var0 = global;
                var2 = var0.Object;
                var1 = var2.values;
                var0 = _closure1_slot7;
                var3 = var1.bind(var2)(var0);
                var0 = var3.length;
                var2 = 0;
                var0 = var2 < var0;
                if (!var0) {
                    _fun42760_ip = 71;
                    continue _fun42760
                }
            case 42:
                var0 = var3[var2];
                var1 = var0.toString;
                var1 = var1.bind(var0)();
                if (!(var1 !== var4)) {
                    _fun42760_ip = 75;
                    continue _fun42760
                }
            case 59:
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun42760_ip = 42;
                    continue _fun42760
                }
            case 71:
                var1 = undefined;
                return var1;
            case 75:
                return var0;
        }
    };
    var2.displayTypeFromString = var5;
    var5 = function(arg0) { // Environment: var1
        _fun42761: for (var _fun42761_ip = 0;;) switch (_fun42761_ip) {
            case 0:
                var2 = _closure1_slot5;
                var0 = arg0;
                var0 = var0.code;
                var0 = var2[var0];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun42761_ip = 35;
                    continue _fun42761
                }
            case 25:
                var1 = _closure1_slot6;
                var0 = var1.GENERIC_ERROR;
            case 35:
                return var0;
        }
    };
    var2.getFailureCodeForAPIError = var5;
    var5 = function() { // Environment: var1
        _fun42762: for (var _fun42762_ip = 0;;) switch (_fun42762_ip) {
            case 0:
                var1 = _closure1_slot10;
                var0 = undefined;
                var3 = var1.bind(var0)();
                var1 = var3.size;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun42762_ip = 72;
                    continue _fun42762
                }
            case 24:
                var0 = global;
                var2 = var0.Array;
                var1 = var2.from;
                var0 = var3.entries;
                var0 = var0.bind(var3)();
                var2 = var1.bind(var2)(var0);
                var1 = var2.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var2 = 1;
                    var0 = var0[var2];
                    var1 = var0.priority;
                    var0 = arg1;
                    var0 = var0[var2];
                    var0 = var0.priority;
                    var0 = var1 - var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun42762_ip = 76;
                continue _fun42762;
            case 72:
                var0 = new Array(0);
            case 76:
                return var0;
        }
    };
    var2.getSortedActivityTypeConfigs = var5;
    var2.getActivityTypeTextConfigs = var4;
    var4 = function(arg0) { // Environment: var1
        _fun42764: for (var _fun42764_ip = 0;;) switch (_fun42764_ip) {
            case 0:
                var2 = arg0;
                var1 = global;
                var5 = var1.Math;
                var4 = var5.floor;
                var0 = 60;
                var3 = var2 / var0;
                var6 = var4.bind(var5)(var3);
                var5 = var2 % var0;
                var0 = 0;
                if (!(!(var6 > var0))) {
                    _fun42764_ip = 66;
                    continue _fun42764
                }
            case 39:
                var0 = var1.HermesInternal;
                var3 = var0.concat;
                var2 = '';
                var0 = 'm';
                var0 = var3.bind(var2)(var5, var0);
                _fun42764_ip = 101;
                continue _fun42764;
            case 66:
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var11 = '';
                var9 = 'h ';
                var7 = 'm';
                var10 = var6;
                var8 = var5;
                var0 = var11[var4](var10, var9, var8, var7, var6);
            case 101:
                return var0;
        }
    };
    var2.formatTotalTime = var4;
    var4 = function() { // Environment: var1
        _fun42765: for (var _fun42765_ip = 0;;) switch (_fun42765_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getAreLinkedUsersProcessed;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun42765_ip = 56;
                    continue _fun42765
                }
            case 22:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchLinkedUsers;
                var2 = var2.bind(var3)();
                return var1;
            case 56:
                var1 = _closure1_slot3;
                var0 = var1.getLinkedUsers;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.getOrFetchLinkedUsers = var4;
    var2.hasActiveParentLinks = var3;
    var3 = function() { // Environment: var1
        var1 = _closure1_slot11;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var2.isParentallyControlled = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun42767: for (var _fun42767_ip = 0;;) switch (_fun42767_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = 0;
                if (!(var5 > var0)) {
                    _fun42767_ip = 19;
                    continue _fun42767
                }
            case 12:
                if (!(var0 !== var6)) {
                    _fun42767_ip = 180;
                    continue _fun42767
                }
            case 19:
                if (!(var6 > var0)) {
                    _fun42767_ip = 27;
                    continue _fun42767
                }
            case 23:
                if (!(var0 !== var5)) {
                    _fun42767_ip = 106;
                    continue _fun42767
                }
            case 27:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.intl;
                var2 = var3.formatToPlainString;
                var1 = _closure1_slot1;
                var0 = 3;
                var0 = var7[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.IYqGMG;
                var0 = {};
                var0.messageCount = var6;
                var0.callCount = var5;
                var0 = var2.bind(var3)(var1, var0);
                _fun42767_ip = 178;
                continue _fun42767;
            case 106:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var2 = var8[var2];
                var7 = undefined;
                var2 = var3.bind(var7)(var2);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var8[var1];
                var1 = var2.bind(var7)(var1);
                var2 = var1["6X1F0i"];
                var1 = {};
                var1.messageCount = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 178:
                _fun42767_ip = 252;
                continue _fun42767;
            case 180:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var2 = var7[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var2 = var1["L/Cj7S"];
                var1 = {};
                var1.callCount = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 252:
                return var0;
        }
    };
    var2.getTopUserOrGuildDescription = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4594, 4595, 1234, 1858, 3047, 4596, 2]);