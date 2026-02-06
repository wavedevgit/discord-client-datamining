// modules/notification_center/useNotificationCenterItemsLoader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var6[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.ReadStateTypes;
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun103381: for (var _fun103381_ip = 0;;) switch (_fun103381_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.isFocused;
                var _closure2_slot0 = var16;
                var20 = var0.navigatedAway;
                var _closure2_slot1 = var20;
                var19 = var0.isDesktop;
                var _closure2_slot2 = var19;
                var13 = var0.withMentions;
                var4 = undefined;
                if (!(var13 === var4)) {
                    _fun103381_ip = 49;
                    continue _fun103381
                }
            case 47:
                var13 = false;
            case 49:
                var _closure2_slot3 = var13;
                var0 = var0.initialPageSize;
                var _closure2_slot4 = var0;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var12 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = 7;
                var1 = var18[var11];
                var6 = var12.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var2
                    var1 = _closure1_slot8;
                    var0 = var1.shouldReload;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var17 = var5.bind(var6)(var3, var1);
                _closure2_slot5 = var17;
                var10 = _closure1_slot5;
                var1 = var10.useRef;
                var3 = false;
                var1 = var1.bind(var10)(var3);
                _closure2_slot6 = var1;
                var1 = var10.useState;
                var5 = var1.bind(var10)(var3);
                var3 = _closure1_slot4;
                var1 = 2;
                var5 = var3.bind(var4)(var5, var1);
                var1 = 0;
                var3 = var5[var1];
                var1 = 1;
                var1 = var5[var1];
                _closure2_slot7 = var1;
                var1 = var18[var11];
                var7 = var12.bind(var4)(var1);
                var6 = var7.useStateFromStoresObject;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var2
                    var0 = {};
                    var1 = _closure1_slot7;
                    var2 = var1.initialized;
                    var0.initialized = var2;
                    var2 = var1.loading;
                    var0.loading = var2;
                    var2 = var1.items;
                    var0.items = var2;
                    var2 = var1.hasMore;
                    var0.hasMore = var2;
                    var2 = var1.cursor;
                    var0.cursor = var2;
                    var1 = var1.errored;
                    var0.errored = var1;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var1);
                var8 = var1.initialized;
                _closure2_slot8 = var8;
                var7 = var1.loading;
                var6 = var1.items;
                _closure2_slot9 = var6;
                var5 = var1.hasMore;
                _closure2_slot10 = var5;
                var14 = var1.cursor;
                _closure2_slot11 = var14;
                var1 = var1.errored;
                _closure2_slot12 = var1;
                var11 = var18[var11];
                var21 = var12.bind(var4)(var11);
                var15 = var21.useStateFromStoresObject;
                var11 = _closure1_slot6;
                var12 = new Array(1);
                var12[0] = var11;
                var11 = function() { // Environment: var2
                    var0 = {};
                    var1 = _closure1_slot6;
                    var2 = var1.everyoneFilter;
                    var0.everyoneFilter = var2;
                    var1 = var1.roleFilter;
                    var0.roleFilter = var1;
                    return var0;
                };
                var11 = var15.bind(var21)(var12, var11);
                var12 = var11.roleFilter;
                _closure2_slot13 = var12;
                var11 = var11.everyoneFilter;
                _closure2_slot14 = var11;
                var22 = var10.useEffect;
                var21 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.setNotificationCenterActive;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.setNotificationCenterActive;
                        var0 = false;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    return var0;
                };
                var15 = new Array(0);
                var15 = var22.bind(var10)(var21, var15);
                var22 = var10.useEffect;
                var21 = new Array(2);
                var21[0] = var16;
                var21[1] = var8;
                var15 = function() { // Environment: var2
                    _fun103387: for (var _fun103387_ip = 0;;) switch (_fun103387_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            if (!var0) {
                                _fun103387_ip = 14;
                                continue _fun103387
                            }
                        case 10:
                            var0 = _closure2_slot0;
                        case 14:
                            if (!var0) {
                                _fun103387_ip = 63;
                                continue _fun103387
                            }
                        case 17:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.ackUserFeature;
                            var0 = _closure1_slot9;
                            var0 = var0.NOTIFICATION_CENTER;
                            var0 = var1.bind(var2)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = var22.bind(var10)(var15, var21);
                var15 = _closure1_slot1;
                var9 = 10;
                var9 = var18[var9];
                var9 = var15.bind(var4)(var9);
                var9 = var9.bind(var4)();
                _closure2_slot15 = var9;
                var18 = var10.useEffect;
                var15 = new Array(5);
                var15[0] = var20;
                var15[1] = var6;
                var15[2] = var19;
                var15[3] = var9;
                var15[4] = var1;
                var9 = function() { // Environment: var2
                    var0 = function() { // Environment: var0
                        _fun103389: for (var _fun103389_ip = 0;;) switch (_fun103389_ip) {
                            case 0:
                                var0 = _closure2_slot2;
                                if (var0) {
                                    _fun103389_ip = 73;
                                    continue _fun103389
                                }
                            case 10:
                                var0 = _closure2_slot1;
                                if (!var0) {
                                    _fun103389_ip = 33;
                                    continue _fun103389
                                }
                            case 17:
                                var1 = _closure2_slot9;
                                var2 = var1.length;
                                var1 = 100;
                                var0 = var2 > var1;
                            case 33:
                                if (!var0) {
                                    _fun103389_ip = 151;
                                    continue _fun103389
                                }
                            case 36:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 8;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.resetNotificationCenter;
                                var0 = var0.bind(var1)();
                                _fun103389_ip = 151;
                                continue _fun103389;
                            case 73:
                                var0 = _closure2_slot15;
                                var2 = undefined;
                                var0 = var0.bind(var2)();
                                var0 = !var0;
                                if (!var0) {
                                    _fun103389_ip = 115;
                                    continue _fun103389
                                }
                            case 89:
                                var1 = _closure2_slot12;
                                if (var1) {
                                    _fun103389_ip = 112;
                                    continue _fun103389
                                }
                            case 96:
                                var3 = _closure2_slot9;
                                var4 = var3.length;
                                var3 = 100;
                                var1 = var4 > var3;
                            case 112:
                                var0 = var1;
                            case 115:
                                if (!var0) {
                                    _fun103389_ip = 151;
                                    continue _fun103389
                                }
                            case 118:
                                var1 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 8;
                                var0 = var3[var0];
                                var1 = var1.bind(var2)(var0);
                                var0 = var1.resetNotificationCenter;
                                var0 = var0.bind(var1)();
                            case 151:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var9 = var18.bind(var10)(var9, var15);
                var15 = var10.useEffect;
                var9 = new Array(7);
                var9[0] = var8;
                var9[1] = var17;
                var9[2] = var16;
                var9[3] = var13;
                var9[4] = var12;
                var9[5] = var11;
                var9[6] = var0;
                var0 = function() { // Environment: var2
                    _fun103390: for (var _fun103390_ip = 0;;) switch (_fun103390_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var0 = !var0;
                            if (var0) {
                                _fun103390_ip = 27;
                                continue _fun103390
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun103390_ip = 24;
                                continue _fun103390
                            }
                        case 20:
                            var1 = _closure2_slot0;
                        case 24:
                            var0 = var1;
                        case 27:
                            if (!var0) {
                                _fun103390_ip = 128;
                                continue _fun103390
                            }
                        case 30:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 8;
                            var1 = var0[var5];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.fetchNotificationCenterItems;
                            var0 = {};
                            var6 = _closure2_slot4;
                            var4 = null;
                            if (!(var4 == var6)) {
                                _fun103390_ip = 88;
                                continue _fun103390
                            }
                        case 73:
                            var6 = _closure2_slot3;
                            var4 = 20;
                            if (!var6) {
                                _fun103390_ip = 86;
                                continue _fun103390
                            }
                        case 83:
                            var4 = var5;
                        case 86:
                            _fun103390_ip = 92;
                            continue _fun103390;
                        case 88:
                            var4 = _closure2_slot4;
                        case 92:
                            var0.limit = var4;
                            var4 = _closure2_slot3;
                            var0.with_mentions = var4;
                            var4 = _closure2_slot13;
                            var0.roles_filter = var4;
                            var3 = _closure2_slot14;
                            var0.everyone_filter = var3;
                            var0 = var1.bind(var2)(var0);
                        case 128:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var15.bind(var10)(var0, var9);
                var9 = var10.useCallback;
                var0 = function() { // Environment: var2
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun103393: for (var _fun103393_ip = 0;;) switch (_fun103393_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun103393_ip = 229;
                                        continue _fun103393
                                    }
                                case 10:
                                    var1 = _closure2_slot6;
                                    var1 = var1.current;
                                    if (var1) {
                                        _fun103393_ip = 32;
                                        continue _fun103393
                                    }
                                case 25:
                                    var3 = _closure2_slot8;
                                    var1 = !var3;
                                case 32:
                                    if (var1) {
                                        _fun103393_ip = 42;
                                        continue _fun103393
                                    }
                                case 35:
                                    var3 = _closure2_slot10;
                                    var1 = !var3;
                                case 42:
                                    if (var1) {
                                        _fun103393_ip = 55;
                                        continue _fun103393
                                    }
                                case 45:
                                    var4 = _closure2_slot11;
                                    var3 = null;
                                    var1 = var3 == var4;
                                case 55:
                                    if (var1) {
                                        _fun103393_ip = 74;
                                        continue _fun103393
                                    }
                                case 58:
                                    var3 = arg0;
                                    var3 = !var3;
                                    if (!var3) {
                                        _fun103393_ip = 71;
                                        continue _fun103393
                                    }
                                case 67:
                                    var3 = _closure2_slot12;
                                case 71:
                                    var1 = var3;
                                case 74:
                                    if (var1) {
                                        _fun103393_ip = 224;
                                        continue _fun103393
                                    }
                                case 80:
                                    var1 = _closure2_slot6;
                                    var3 = true;
                                    var1.current = var3;
                                    var1 = _closure2_slot7;
                                    var4 = undefined;
                                    var1 = var1.bind(var4)(var3);
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var7 = 8;
                                    var1 = var1[var7];
                                    var6 = var3.bind(var4)(var1);
                                    var5 = var6.fetchNotificationCenterItems;
                                    var3 = {};
                                    var1 = _closure2_slot11;
                                    var3.after = var1;
                                    var8 = _closure2_slot3;
                                    var3.with_mentions = var8;
                                    var1 = _closure2_slot13;
                                    var3.roles_filter = var1;
                                    var1 = _closure2_slot14;
                                    var3.everyone_filter = var1;
                                    var1 = 20;
                                    if (!var8) {
                                        _fun103393_ip = 179;
                                        continue _fun103393
                                    }
                                case 176:
                                    var1 = var7;
                                case 179:
                                    var3.limit = var1;
                                    var1 = function() { // Environment: var1
                                        var1 = _closure2_slot6;
                                        var0 = false;
                                        var1.current = var0;
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var1 = var5.bind(var6)(var3, var1);
                                    SaveGenerator(address = 202);
                                case 200:
                                    return var1;
                                case 202:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun103393_ip = 221;
                                        continue _fun103393
                                    }
                                case 208:
                                    var3 = _closure2_slot7;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    _fun103393_ip = 224;
                                    continue _fun103393;
                                case 221:
                                    return var1;
                                case 224:
                                    var1 = undefined;
                                    return var1;
                                case 229:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var4 = var0.bind(var4)();
                var0 = new Array(7);
                var0[0] = var8;
                var0[1] = var5;
                var0[2] = var14;
                var0[3] = var1;
                var0[4] = var13;
                var0[5] = var12;
                var0[6] = var11;
                var4 = var9.bind(var10)(var4, var0);
                var0 = {};
                var0.initialized = var8;
                var0.loading = var7;
                var0.items = var6;
                var0.hasMore = var5;
                var0.loadMore = var4;
                var0.loadingMore = var3;
                var2 = function arg0() {
                    _fun103396: for (var _fun103396_ip = 0;;) switch (_fun103396_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.acked;
                            if (var0) {
                                _fun103396_ip = 20;
                                continue _fun103396
                            }
                        case 12:
                            var0 = true;
                            var1.acked = var0;
                        case 20:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.setReadNotifItemToAcked = var2;
                var0.errored = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/useNotificationCenterItemsLoader.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 8;
    var2.PAGE_SIZE_WITH_MENTIONS = var4;
    var4 = 20;
    var2.PAGE_SIZE = var4;
    var2.useNotificationCenterItemsLoader = var3;
    var1 = function() { // Environment: var1
        var2 = _closure1_slot10;
        var1 = undefined;
        var0 = {
            'isFocused': true,
            'isDesktop': true
        };
        var0 = var2.bind(var1)(var0);
        var4 = var0.initialized;
        var3 = var0.loading;
        var5 = var0.items;
        var2 = var0.hasMore;
        var1 = var0.loadMore;
        var0 = {};
        var0.initialized = var4;
        var0.loading = var3;
        var4 = var5.filter;
        var3 = function(arg0) { // Environment: var3
            var0 = arg0;
            var1 = var0.kind;
            var0 = 'notification-center-item';
            var0 = var0 === var1;
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var0.items = var3;
        var0.hasMore = var2;
        var0.loadMore = var1;
        return var0;
    };
    var2.useDesktopNotificationCenterItemsLoader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 8666, 3970, 13516, 4305, 566, 13518, 4575, 5747, 2]);