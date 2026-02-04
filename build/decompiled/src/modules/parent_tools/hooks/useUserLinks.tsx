// modules/parent_tools/hooks/useUserLinks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var5 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var5.bind(var2)(var3);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getLinkedUsers;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var5.bind(var6)(var3, var2);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure2_slot1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                _fun53950: for (var _fun53950_ip = 0;;) switch (_fun53950_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        var0 = var0 != var1;
                        if (!var0) {
                            _fun53950_ip = 29;
                            continue _fun53950
                        }
                    case 12:
                        var2 = var1.link_status;
                        var1 = _closure2_slot0;
                        var0 = var2 === var1;
                    case 29:
                        return var0;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.sort;
            var1 = function(arg0, arg1) { // Environment: var0
                var0 = global;
                var3 = var0.Date;
                var1 = arg0;
                var4 = var1.updated_at;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var2.getTime;
                var1 = var1.bind(var2)();
                var3 = var0.Date;
                var0 = arg1;
                var4 = var0.updated_at;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = var2;
                var0 = new var5[var3](var4, var3);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var2.getTime;
                var0 = var0.bind(var2)();
                var0 = var1 - var0;
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.user_id;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = null;
                var0 = arg0;
                var0 = var1 != var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var5;
    var3 = function() {
        var2 = _closure1_slot14;
        var0 = _closure1_slot11;
        var1 = var0.ACTIVE;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot15 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var9 = var8[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var9);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var6 = var4.ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER;
    var _closure1_slot6 = var6;
    var6 = var4.FAMILY_CENTER_REQUEST_QR_CODE_URL;
    var _closure1_slot7 = var6;
    var6 = var4.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS;
    var _closure1_slot8 = var6;
    var6 = var4.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS;
    var _closure1_slot9 = var6;
    var6 = var4.PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER;
    var _closure1_slot10 = var6;
    var6 = var4.UserLinkStatus;
    var _closure1_slot11 = var6;
    var4 = var4.UserLinkType;
    var _closure1_slot12 = var4;
    var4 = function arg0() {
        var3 = _closure1_slot14;
        var4 = undefined;
        var2 = arg0;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 4;
        var2 = var5[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useStateFromStoresArray;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot4;
                var1 = var2.getUser;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var1 = null;
            var0 = arg0;
            var0 = var1 != var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot13 = var4;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/parent_tools/hooks/useUserLinks.tsx';
    var6 = var7.bind(var8)(var6);
    var2.useUserIdsForLinkStatus = var5;
    var2.useUsersForLinkStatus = var4;
    var2.useActiveLinkUserIds = var3;
    var3 = function() {
        var2 = _closure1_slot13;
        var0 = _closure1_slot11;
        var1 = var0.ACTIVE;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useActiveLinkUsers = var3;
    var3 = function() { // Environment: var1
        var1 = _closure1_slot15;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var1 = var0.length;
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var2.useHasActiveLinks = var3;
    var3 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getLinkedUsers;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = var4.bind(var5)(var3, var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure2_slot0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun53964: for (var _fun53964_ip = 0;;) switch (_fun53964_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        var0 = var0 != var1;
                        if (!var0) {
                            _fun53964_ip = 35;
                            continue _fun53964
                        }
                    case 12:
                        var3 = var1.link_status;
                        var2 = _closure1_slot11;
                        var2 = var2.ACTIVE;
                        var0 = var3 === var2;
                    case 35:
                        if (!var0) {
                            _fun53964_ip = 61;
                            continue _fun53964
                        }
                    case 38:
                        var2 = var1.link_type;
                        var1 = _closure1_slot12;
                        var1 = var1.PARENT;
                        var0 = var2 === var1;
                    case 61:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useHasActiveParentLinks = var3;
    var3 = function() {
        _fun53965: for (var _fun53965_ip = 0;;) switch (_fun53965_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var3 = var6[var1];
                var4 = undefined;
                var9 = var5.bind(var4)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getLinkCode;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var8.bind(var9)(var7, var3);
                var1 = var6[var1];
                var6 = var5.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var5.bind(var6)(var1, var0);
                var6 = null;
                var5 = var6 == var3;
                var0 = null;
                if (var5) {
                    _fun53965_ip = 127;
                    continue _fun53965
                }
            case 103:
                var5 = var6 == var1;
                var0 = null;
                if (var5) {
                    _fun53965_ip = 127;
                    continue _fun53965
                }
            case 112:
                var2 = _closure1_slot7;
                var1 = var1.id;
                var0 = var2.bind(var4)(var1, var3);
            case 127:
                return var0;
        }
    };
    var2.useUserQRLinkUrl = var3;
    var3 = function() {
        _fun53968: for (var _fun53968_ip = 0;;) switch (_fun53968_ip) {
            case 0:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var1 = var0.bind(var3)();
                var0 = _closure1_slot15;
                var0 = var0.bind(var3)();
                if (var1) {
                    _fun53968_ip = 46;
                    continue _fun53968
                }
            case 40:
                var1 = _closure1_slot9;
                _fun53968_ip = 50;
                continue _fun53968;
            case 46:
                var1 = _closure1_slot8;
            case 50:
                var0 = var0.length;
                var0 = var0 >= var1;
                return var0;
        }
    };
    var2.useHasMaxConnections = var3;
    var3 = function() {
        _fun53969: for (var _fun53969_ip = 0;;) switch (_fun53969_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var2 = var6[var3];
                var4 = undefined;
                var9 = var5.bind(var4)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var1
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var8.bind(var9)(var7, var2);
                var _closure2_slot0 = var2;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getLinkedUsers;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var4.bind(var5)(var3, var0);
                var0 = null;
                var2 = var0 == var2;
                var0 = 0;
                if (var2) {
                    _fun53969_ip = 145;
                    continue _fun53969
                }
            case 107:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.values;
                var3 = var2.bind(var3)(var4);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    _fun53972: for (var _fun53972_ip = 0;;) switch (_fun53972_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun53972_ip = 35;
                                continue _fun53972
                            }
                        case 12:
                            var3 = var1.link_status;
                            var2 = _closure1_slot11;
                            var2 = var2.PENDING;
                            var0 = var3 === var2;
                        case 35:
                            if (!var0) {
                                _fun53972_ip = 62;
                                continue _fun53972
                            }
                        case 38:
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var1 = var1.requestor_id;
                            var0 = var2 !== var1;
                        case 62:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = var1.length;
            case 145:
                return var0;
        }
    };
    var2.usePendingRequestCount = var3;
    var3 = function() {
        var1 = _closure1_slot15;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.length;
        return var0;
    };
    var2.useAcceptedRequestsCount = var3;
    var3 = function arg0() {
        _fun53974: for (var _fun53974_ip = 0;;) switch (_fun53974_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var4 = undefined;
                var6 = var3.bind(var4)(var0);
                var0 = var6.useSelectedTeenId;
                var0 = var0.bind(var6)();
                var _closure2_slot1 = var0;
                var0 = 4;
                var0 = var5[var0];
                var6 = var3.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    _fun53975: for (var _fun53975_ip = 0;;) switch (_fun53975_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            var1 = var0 == var1;
                            if (var1) {
                                _fun53975_ip = 35;
                                continue _fun53975
                            }
                        case 16:
                            var2 = _closure1_slot5;
                            var1 = var2.getRangeStartTimestamp;
                            var0 = var1.bind(var2)();
                        case 35:
                            return var0;
                    }
                };
                var7 = var5.bind(var6)(var3, var0);
                var0 = null;
                var3 = var0 == var7;
                if (var3) {
                    _fun53974_ip = 176;
                    continue _fun53974
                }
            case 97:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 7;
                var2 = var2[var5];
                var4 = var3.bind(var4)(var2);
                var3 = var4.formatUserActivityTimestamp;
                var2 = global;
                var2 = var2.Date;
                var6 = var2.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var6;
                var10 = var7;
                var2 = new var11[var2](var10, var9);
                var6 = var2 instanceof Object ? var2 : var6;
                var2 = var6.getTime;
                var2 = var2.bind(var6)();
                var1 = function() { // Environment: var1
                    var0 = _closure2_slot0;
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var1, var5);
            case 176:
                return var0;
        }
    };
    var2.useActivityWindowTimeStamp = var3;
    var1 = function arg0, arg1() {
        _fun53977: for (var _fun53977_ip = 0;;) switch (_fun53977_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var2.bind(var3)(var1);
                var2 = var4.useStateFromStores;
                var6 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getLinkTimestamp;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var2.bind(var4)(var1, var0);
                var0 = null;
                var1 = var0 != var6;
                if (!var1) {
                    _fun53977_ip = 149;
                    continue _fun53977
                }
            case 71:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.formatLinkTimestamp;
                var1 = global;
                var2 = var1.Date;
                var1 = var2.parse;
                var2 = var1.bind(var2)(var6);
                var1 = _closure1_slot11;
                var6 = var1.PENDING;
                var1 = arg1;
                if (!(var1 !== var6)) {
                    _fun53977_ip = 139;
                    continue _fun53977
                }
            case 133:
                var1 = _closure1_slot6;
                _fun53977_ip = 143;
                continue _fun53977;
            case 139:
                var1 = _closure1_slot10;
            case 143:
                var0 = var3.bind(var4)(var2, var1);
            case 149:
                return var0;
        }
    };
    var2.useLinkTimestampText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 4593, 4594, 632, 6510, 6511, 4658, 2]);