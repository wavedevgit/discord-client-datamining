// modules/multi_account/setUserStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _setUserStatus, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun69615: for (var _fun69615_ip = 0;;) switch (_fun69615_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun69615_ip = 782;
                            continue _fun69615
                        }
                    case 15:
                        var8 = var1.nextStatus;
                        var _closure4_slot0 = var8;
                        var7 = var1.prevStatus;
                        var _closure4_slot1 = var7;
                        var6 = var1.analyticsContext;
                        var11 = var1.durationMillis;
                        var9 = var1.disableTracking;
                        var3 = undefined;
                        if (!(var9 === var3)) {
                            _fun69615_ip = 63;
                            continue _fun69615
                        }
                    case 61:
                        var9 = false;
                    case 63:
                        var _closure4_slot2 = var3;
                        SaveGenerator(address = 71);
                    case 69:
                        return var3;
                    case 71:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun69615_ip = 779;
                            continue _fun69615
                        }
                    case 80:
                        var5 = null;
                        if (!(var5 == var7)) {
                            _fun69615_ip = 110;
                            continue _fun69615
                        }
                    case 86:
                        var10 = _closure1_slot5;
                        var4 = var10.getStatus;
                        var4 = var4.bind(var10)();
                        _closure4_slot1 = var4;
                        var7 = var4;
                    case 110:
                        var4 = var5 != var11;
                        var10 = '0';
                        var13 = var10;
                        if (!var4) {
                            _fun69615_ip = 167;
                            continue _fun69615
                        }
                    case 126:
                        var4 = global;
                        var14 = var4.Date;
                        var12 = var14.now;
                        var12 = var12.bind(var14)();
                        var14 = var12 + var11;
                        var4 = var4.HermesInternal;
                        var12 = var4.concat;
                        var4 = '';
                        var13 = var12.bind(var4)(var14);
                    case 167:
                        _closure4_slot2 = var13;
                        var14 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var12 = 7;
                        var15 = var17[var12];
                        var15 = var14.bind(var3)(var15);
                        var16 = var15.PreloadedUserSettingsActionCreators;
                        var15 = var16.updateAsync;
                        var12 = var17[var12];
                        var12 = var14.bind(var3)(var12);
                        var12 = var12.UserSettingsDelay;
                        var14 = var12.INFREQUENT_USER_ACTION;
                        var12 = 'status';
                        var2 = function(arg0) { // Environment: var2
                            _fun69616: for (var _fun69616_ip = 0;;) switch (_fun69616_ip) {
                                case 0:
                                    var2 = arg0;
                                    var5 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var4 = 8;
                                    var3 = var0[var4];
                                    var0 = undefined;
                                    var3 = var5.bind(var0)(var3);
                                    var8 = var3.StringValue;
                                    var7 = var8.create;
                                    var6 = {};
                                    var5 = _closure4_slot0;
                                    var6.value = var5;
                                    var6 = var7.bind(var8)(var6);
                                    var2.status = var6;
                                    var6 = _closure4_slot2;
                                    var2.statusExpiresAtMs = var6;
                                    var3 = _closure4_slot1;
                                    if (!(var3 === var5)) {
                                        _fun69616_ip = 93;
                                        continue _fun69616
                                    }
                                case 81:
                                    var5 = var2.statusCreatedAtMs;
                                    var3 = null;
                                    if (!(var3 == var5)) {
                                        _fun69616_ip = 171;
                                        continue _fun69616
                                    }
                                case 93:
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var1 = var1[var4];
                                    var1 = var3.bind(var0)(var1);
                                    var4 = var1.UInt64Value;
                                    var3 = var4.create;
                                    var1 = {};
                                    var5 = global;
                                    var7 = var5.Date;
                                    var6 = var7.now;
                                    var7 = var6.bind(var7)();
                                    var5 = var5.HermesInternal;
                                    var6 = var5.concat;
                                    var5 = '';
                                    var5 = var6.bind(var5)(var7);
                                    var1.value = var5;
                                    var1 = var3.bind(var4)(var1);
                                    _fun69616_ip = 177;
                                    continue _fun69616;
                                case 171:
                                    var1 = var2.statusCreatedAtMs;
                                case 177:
                                    var2.statusCreatedAtMs = var1;
                                    return var0;
                            }
                        };
                        var2 = var15.bind(var16)(var12, var2, var14);
                        SaveGenerator(address = 249);
                    case 247:
                        return var2;
                    case 249:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 12);
                        if (var12) {
                            _fun69615_ip = 776;
                            continue _fun69615
                        }
                    case 258:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var12 = 4;
                        var12 = var15[var12];
                        var14 = var14.bind(var3)(var12);
                        var12 = var14.humanizeStatus;
                        var16 = var12.bind(var14)(var8);
                        if (!(var10 !== var13)) {
                            _fun69615_ip = 501;
                            continue _fun69615
                        }
                    case 296:
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 6;
                        var10 = var14[var10];
                        var12 = var12.bind(var3)(var10);
                        var10 = var12.getStatusExpiryParts;
                        var10 = var10.bind(var12)(var13);
                        var12 = var10.kind;
                        var15 = var10.dateString;
                        var17 = var10.timeString;
                        var10 = 'today';
                        if (!(var10 !== var12)) {
                            _fun69615_ip = 429;
                            continue _fun69615
                        }
                    case 352:
                        var12 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var10 = 5;
                        var13 = var18[var10];
                        var13 = var12.bind(var3)(var13);
                        var14 = var13.intl;
                        var13 = var14.formatToPlainString;
                        var10 = var18[var10];
                        var10 = var12.bind(var3)(var10);
                        var10 = var10.t;
                        var12 = var10["J+GJHv"];
                        var10 = {};
                        var10.statusLabel = var16;
                        var10.dateString = var15;
                        var10.timeString = var17;
                        var13 = var13.bind(var14)(var12, var10);
                        _fun69615_ip = 499;
                        continue _fun69615;
                    case 429:
                        var12 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var10 = 5;
                        var14 = var18[var10];
                        var14 = var12.bind(var3)(var14);
                        var15 = var14.intl;
                        var14 = var15.formatToPlainString;
                        var10 = var18[var10];
                        var10 = var12.bind(var3)(var10);
                        var10 = var10.t;
                        var12 = var10["r50t/S"];
                        var10 = {};
                        var10.statusLabel = var16;
                        var10.timeString = var17;
                        var13 = var14.bind(var15)(var12, var10);
                    case 499:
                        _fun69615_ip = 566;
                        continue _fun69615;
                    case 501:
                        var12 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var10 = 5;
                        var14 = var17[var10];
                        var14 = var12.bind(var3)(var14);
                        var15 = var14.intl;
                        var14 = var15.formatToPlainString;
                        var10 = var17[var10];
                        var10 = var12.bind(var3)(var10);
                        var10 = var10.t;
                        var12 = var10.dO2aLi;
                        var10 = {};
                        var10.statusLabel = var16;
                        var13 = var14.bind(var15)(var12, var10);
                    case 566:
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 9;
                        var10 = var14[var10];
                        var10 = var12.bind(var3)(var10);
                        var12 = var10.AccessibilityAnnouncer;
                        var10 = var12.announce;
                        var10 = var10.bind(var12)(var13);
                        if (var9) {
                            _fun69615_ip = 773;
                            continue _fun69615
                        }
                    case 609:
                        var9 = {};
                        var9.next_status = var8;
                        var9.prev_status = var7;
                        var8 = _closure1_slot4;
                        var7 = var8.getGlobalStats;
                        var20 = var7.bind(var8)();
                        var21 = var9;
                        var7 = copyDataProperties(var21, var20);
                        var8 = var9;
                        if (!(var5 != var11)) {
                            _fun69615_ip = 700;
                            continue _fun69615
                        }
                    case 655:
                        var7 = {};
                        var21 = var7;
                        var20 = var9;
                        var9 = copyDataProperties(var21, var20);
                        var9 = var5 != var11;
                        var10 = null;
                        if (!var9) {
                            _fun69615_ip = 686;
                            continue _fun69615
                        }
                    case 676:
                        var9 = 60000;
                        var10 = var11 / var9;
                    case 686:
                        var9 = 'expire_duration_minutes';
                        var7[var9] = var10;
                        var8 = var7;
                    case 700:
                        var7 = var8;
                        if (!(var5 != var6)) {
                            _fun69615_ip = 732;
                            continue _fun69615
                        }
                    case 707:
                        var5 = {};
                        var21 = var5;
                        var20 = var8;
                        var8 = copyDataProperties(var21, var20);
                        var21 = var5;
                        var20 = var6;
                        var6 = copyDataProperties(var21, var20);
                        var7 = var5;
                    case 732:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 10;
                        var5 = var8[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.track;
                        var4 = _closure1_slot6;
                        var4 = var4.USER_STATUS_UPDATED;
                        var4 = var5.bind(var6)(var4, var7);
                    case 773:
                        return var3;
                    case 776:
                        return var2;
                    case 779:
                        return var1;
                    case 782:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/multi_account/setUserStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: setUserStatus, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4658, 5618, 660, 3195, 1234, 8685, 1355, 1342, 3166, 795, 2]);