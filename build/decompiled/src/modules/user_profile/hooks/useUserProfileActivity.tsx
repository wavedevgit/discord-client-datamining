// modules/user_profile/hooks/useUserProfileActivity.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
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
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot9 = var3;
    var3 = new Array(0);
    var _closure1_slot10 = var3;
    var3 = new Array(0);
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useUserProfileActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91793: for (var _fun91793_ip = 0;;) switch (_fun91793_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var5 = undefined;
                var7 = var6.bind(var5)(var1);
                var3 = var7.useUserProfileModalRecentActivityExperiment;
                var1 = {};
                var9 = 'useUserProfileActivity';
                var1.location = var9;
                var1 = var3.bind(var7)(var1);
                var1 = var1.recentActivityTabEnabled;
                var _closure2_slot1 = var1;
                var3 = 8;
                var1 = var8[var3];
                var10 = var6.bind(var5)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var9.bind(var10)(var7, var1);
                var _closure2_slot2 = var1;
                var7 = _closure1_slot1;
                var1 = 9;
                var1 = var8[var1];
                var1 = var7.bind(var5)(var1);
                var2 = var1.bind(var5)(var2);
                var1 = var8[var3];
                var10 = var6.bind(var5)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getActivities;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var9.bind(var10)(var7, var1);
                var _closure2_slot3 = var7;
                var1 = var8[var3];
                var11 = var6.bind(var5)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var1;
                var1 = function() { // Environment: var0
                    _fun91796: for (var _fun91796_ip = 0;;) switch (_fun91796_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun91796_ip = 19;
                                continue _fun91796
                            }
                        case 10:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            if (!var2) {
                                _fun91796_ip = 41;
                                continue _fun91796
                            }
                        case 19:
                            var3 = _closure1_slot4;
                            var2 = var3.getUserOutbox;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 41:
                            return var0;
                    }
                };
                var1 = var10.bind(var11)(var9, var1);
                var _closure2_slot4 = var1;
                var9 = var8[var3];
                var12 = var6.bind(var5)(var9);
                var11 = var12.useStateFromStores;
                var9 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getVoiceStateForUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var11.bind(var12)(var10, var9);
                var _closure2_slot5 = var9;
                var3 = var8[var3];
                var11 = var6.bind(var5)(var3);
                var10 = var11.useStateFromStores;
                var3 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = function() { // Environment: var0
                    _fun91798: for (var _fun91798_ip = 0;;) switch (_fun91798_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getChannel;
                            var4 = _closure2_slot5;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun91798_ip = 39;
                                continue _fun91798
                            }
                        case 30:
                            var3 = _closure2_slot5;
                            var0 = var3.channelId;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var9 = var10.bind(var11)(var9, var3);
                var3 = 10;
                var3 = var8[var3];
                var8 = var6.bind(var5)(var3);
                var6 = var8.useCanSeeHangStatus;
                var3 = 'UserProfileActivity';
                var3 = var6.bind(var8)(var3, var9);
                var _closure2_slot6 = var3;
                var4 = _closure1_slot3;
                var6 = new Array(2);
                var6[0] = var7;
                var6[1] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun91800: for (var _fun91800_ip = 0;;) switch (_fun91800_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.type;
                                var2 = _closure1_slot9;
                                var2 = var2.HANG_STATUS;
                                if (!(var1 !== var2)) {
                                    _fun91800_ip = 41;
                                    continue _fun91800
                                }
                            case 25:
                                var0 = _closure1_slot9;
                                var0 = var0.CUSTOM_STATUS;
                                var0 = var1 !== var0;
                                _fun91800_ip = 48;
                                continue _fun91800;
                            case 41:
                                var0 = _closure2_slot6;
                            case 48:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var4.bind(var5)(var3, var6);
                var _closure2_slot7 = var6;
                var3 = new Array(2);
                var3[0] = var6;
                var6 = null;
                var7 = var6 == var1;
                var6 = undefined;
                if (var7) {
                    _fun91793_ip = 394;
                    continue _fun91793
                }
            case 388:
                var6 = var1.entries;
            case 394:
                var3[1] = var6;
                var0 = function() { // Environment: var0
                    _fun91801: for (var _fun91801_ip = 0;;) switch (_fun91801_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var6 = var7.uniqWith;
                            var5 = _closure2_slot7;
                            var3 = function(arg0, arg1) { // Environment: var0
                                _fun91802: for (var _fun91802_ip = 0;;) switch (_fun91802_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = arg1;
                                        var0 = var3.application_id;
                                        var5 = null;
                                        var0 = var5 != var0;
                                        if (!var0) {
                                            _fun91802_ip = 31;
                                            continue _fun91802
                                        }
                                    case 21:
                                        var1 = var2.application_id;
                                        var0 = var5 != var1;
                                    case 31:
                                        if (!var0) {
                                            _fun91802_ip = 50;
                                            continue _fun91802
                                        }
                                    case 34:
                                        var4 = var3.application_id;
                                        var1 = var2.application_id;
                                        var0 = var4 === var1;
                                    case 50:
                                        if (var0) {
                                            _fun91802_ip = 94;
                                            continue _fun91802
                                        }
                                    case 53:
                                        var1 = var3.name;
                                        var1 = var5 != var1;
                                        if (!var1) {
                                            _fun91802_ip = 74;
                                            continue _fun91802
                                        }
                                    case 65:
                                        var4 = var2.name;
                                        var1 = var5 != var4;
                                    case 74:
                                        if (!var1) {
                                            _fun91802_ip = 91;
                                            continue _fun91802
                                        }
                                    case 77:
                                        var3 = var3.name;
                                        var2 = var2.name;
                                        var1 = var3 === var2;
                                    case 91:
                                        var0 = var1;
                                    case 94:
                                        return var0;
                                }
                            };
                            var5 = var6.bind(var7)(var5, var3);
                            var _closure3_slot0 = var5;
                            var6 = _closure2_slot4;
                            var3 = null;
                            var6 = var3 == var6;
                            if (var6) {
                                _fun91801_ip = 97;
                                continue _fun91801
                            }
                        case 70:
                            var4 = _closure2_slot4;
                            var6 = var4.entries;
                            var4 = var6.filter;
                            var0 = function(arg0) { // Environment: var0
                                _fun91803: for (var _fun91803_ip = 0;;) switch (_fun91803_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var _closure4_slot0 = var2;
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var0 = 12;
                                        var0 = var5[var0];
                                        var5 = undefined;
                                        var4 = var4.bind(var5)(var0);
                                        var0 = var4.isEntryLive;
                                        var0 = var0.bind(var4)(var2);
                                        var0 = !var0;
                                        if (!var0) {
                                            _fun91803_ip = 239;
                                            continue _fun91803
                                        }
                                    case 54:
                                        var7 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var6 = 13;
                                        var4 = var4[var6];
                                        var7 = var7.bind(var5)(var4);
                                        var4 = var7.isListenedSessionEntry;
                                        var4 = var4.bind(var7)(var2);
                                        if (var4) {
                                            _fun91803_ip = 179;
                                            continue _fun91803
                                        }
                                    case 88:
                                        var7 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var4 = var4[var6];
                                        var7 = var7.bind(var5)(var4);
                                        var4 = var7.isWatchedMediaEntry;
                                        var4 = var4.bind(var7)(var2);
                                        if (var4) {
                                            _fun91803_ip = 149;
                                            continue _fun91803
                                        }
                                    case 119:
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var6];
                                        var4 = var4.bind(var5)(var1);
                                        var1 = var4.isRecentActivityEntry;
                                        var1 = var1.bind(var4)(var2);
                                        _fun91803_ip = 177;
                                        continue _fun91803;
                                    case 149:
                                        var6 = _closure3_slot0;
                                        var5 = var6.some;
                                        var4 = function(arg0) { // Environment: var3
                                            _fun91805: for (var _fun91805_ip = 0;;) switch (_fun91805_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var0 = null;
                                                    var0 = var0 != var4;
                                                    if (!var0) {
                                                        _fun91805_ip = 56;
                                                        continue _fun91805
                                                    }
                                                case 12:
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot2;
                                                    var1 = 14;
                                                    var2 = var2[var1];
                                                    var1 = undefined;
                                                    var3 = var3.bind(var1)(var2);
                                                    var2 = var3.isMatchingWatchActivity;
                                                    var1 = _closure4_slot0;
                                                    var0 = var2.bind(var3)(var1, var4);
                                                case 56:
                                                    return var0;
                                            }
                                        };
                                        var4 = var5.bind(var6)(var4);
                                        var1 = !var4;
                                    case 177:
                                        _fun91803_ip = 236;
                                        continue _fun91803;
                                    case 179:
                                        var2 = var2.extra;
                                        var2 = var2.entries;
                                        var4 = var2.length;
                                        var2 = 0;
                                        var2 = var4 > var2;
                                        if (!var2) {
                                            _fun91803_ip = 233;
                                            continue _fun91803
                                        }
                                    case 205:
                                        var5 = _closure3_slot0;
                                        var4 = var5.some;
                                        var3 = function(arg0) { // Environment: var3
                                            _fun91804: for (var _fun91804_ip = 0;;) switch (_fun91804_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var0 = null;
                                                    var0 = var0 != var4;
                                                    if (!var0) {
                                                        _fun91804_ip = 56;
                                                        continue _fun91804
                                                    }
                                                case 12:
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot2;
                                                    var1 = 14;
                                                    var2 = var2[var1];
                                                    var1 = undefined;
                                                    var3 = var3.bind(var1)(var2);
                                                    var2 = var3.isMatchingListeningActivity;
                                                    var1 = _closure4_slot0;
                                                    var0 = var2.bind(var3)(var1, var4);
                                                case 56:
                                                    return var0;
                                            }
                                        };
                                        var3 = var4.bind(var5)(var3);
                                        var2 = !var3;
                                    case 233:
                                        var1 = var2;
                                    case 236:
                                        var0 = var1;
                                    case 239:
                                        return var0;
                                }
                            };
                            var1 = var4.bind(var6)(var0);
                        case 97:
                            var0 = {};
                            var6 = var5.length;
                            var4 = 0;
                            if (!(var4 === var6)) {
                                _fun91801_ip = 114;
                                continue _fun91801
                            }
                        case 110:
                            var5 = _closure1_slot10;
                        case 114:
                            var0.live = var5;
                            if (!(var3 != var1)) {
                                _fun91801_ip = 132;
                                continue _fun91801
                            }
                        case 123:
                            var3 = var1.length;
                            if (!(var4 === var3)) {
                                _fun91801_ip = 136;
                                continue _fun91801
                            }
                        case 132:
                            var1 = _closure1_slot11;
                        case 136:
                            var0.recent = var1;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var0, var3);
                var0 = {};
                var4 = var3.live;
                var0.live = var4;
                var3 = var3.recent;
                var0.recent = var3;
                var0.stream = var2;
                var0.outbox = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7896, 1216, 1372, 3612, 3523, 660, 11953, 566, 7789, 7792, 22, 6870, 7856, 7861, 2]);