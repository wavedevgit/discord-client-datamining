// modules/changelog/ChangelogManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun113159: for (var _fun113159_ip = 0;;) switch (_fun113159_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun113159_ip = 76;
                continue _fun113159;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: ChangelogManager, environment: var0
            _fun113163: for (var _fun113163_ip = 0;;) switch (_fun113163_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var7 = var7.bind(var2)(var4, var3);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var3);
                    var3 = _closure1_slot6;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun113163_ip = 86;
                        continue _fun113163
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113163_ip = 120;
                    continue _fun113163;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var3.bind(var2)(var4, var0);
                    var _closure3_slot0 = var0;
                    var3 = {};
                    var4 = function(arg0) { // Original name: POST_CONNECTION_OPEN, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleConnectionOpen;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.POST_CONNECTION_OPEN = var4;
                    var0.actions = var3;
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun113167: for (var _fun113167_ip = 0;;) switch (_fun113167_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun113167_ip = 1063;
                                            continue _fun113167
                                        }
                                    case 10:
                                        var4 = undefined;
                                        var13 = undefined;
                                        var7 = undefined;
                                        var3 = undefined;
                                        var8 = undefined;
                                        var5 = undefined;
                                    case 22: // try_start_0
                                        var6 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var10 = 9;
                                        var1 = var1[var10];
                                        var6 = var6.bind(var4)(var1);
                                        var1 = var6.fetchChangelogConfig;
                                        var1 = var1.bind(var6)();
                                        SaveGenerator(address = 59);
                                    case 57:
                                        return var1;
                                    case 59:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                                        if (var6) {
                                            _fun113167_ip = 969;
                                            continue _fun113167
                                        }
                                    case 68:
                                        var12 = var1.body;
                                        var13 = var12;
                                        var9 = _closure1_slot0;
                                        var15 = _closure1_slot2;
                                        var6 = 10;
                                        var6 = var15[var6];
                                        var9 = var9.bind(var4)(var6);
                                        var6 = var9.getClientVersionForChangelog;
                                        var22 = var6.bind(var9)();
                                        var11 = global;
                                        var9 = var11.Object;
                                        var6 = var9.entries;
                                        var21 = var6.bind(var9)(var12);
                                        var6 = var21.length;
                                        var9 = 0;
                                        var6 = var9 < var6;
                                        var12 = null;
                                        var20 = 2;
                                        var19 = 1;
                                        var18 = 0;
                                        var17 = null;
                                        var16 = 0;
                                        var14 = null;
                                        if (!var6) {
                                            _fun113167_ip = 220;
                                            continue _fun113167
                                        }
                                    case 155:
                                        var23 = var21[var16];
                                        var6 = _closure1_slot9;
                                        var23 = var6.bind(var4)(var23, var20);
                                        var6 = var23[var9];
                                        var23 = var23[var19];
                                        var23 = var23.min_version;
                                        var24 = var23 <= var22;
                                        if (!var24) {
                                            _fun113167_ip = 196;
                                            continue _fun113167
                                        }
                                    case 192:
                                        var24 = var23 > var18;
                                    case 196:
                                        if (!var24) {
                                            _fun113167_ip = 205;
                                            continue _fun113167
                                        }
                                    case 199:
                                        var18 = var23;
                                        var17 = var6;
                                    case 205:
                                        var16 = var16 + 1;
                                        var6 = var21.length;
                                        var14 = var17;
                                        if (var16 < var6) {
                                            _fun113167_ip = 155;
                                            continue _fun113167
                                        }
                                    case 220:
                                        var7 = var14;
                                        var16 = _closure1_slot1;
                                        var6 = 11;
                                        var15 = var15[var6];
                                        var17 = var16.bind(var4)(var15);
                                        var16 = var17.dispatch;
                                        var15 = {};
                                        var18 = 'CHANGE_LOG_SET_CONFIG';
                                        var15.type = var18;
                                        var18 = var1.body;
                                        var15.config = var18;
                                        var15.latestChangelogId = var14;
                                        var15 = var16.bind(var17)(var15);
                                        if (!(var12 != var14)) {
                                            _fun113167_ip = 927;
                                            continue _fun113167
                                        }
                                    case 282:
                                        var14 = var13;
                                        var13 = var7;
                                        var13 = var14[var13];
                                        var14 = var13.show_on_startup;
                                        var13 = true;
                                        if (!(var13 === var14)) {
                                            _fun113167_ip = 885;
                                            continue _fun113167
                                        }
                                    case 309:
                                        var15 = _closure1_slot11;
                                        var13 = var15.lastSeenChangelogId;
                                        var13 = var13.bind(var15)();
                                        var3 = var13;
                                        var14 = var15.lastSeenChangelogDate;
                                        var8 = var14.bind(var15)();
                                        if (!(var12 != var13)) {
                                            _fun113167_ip = 382;
                                            continue _fun113167
                                        }
                                    case 340:
                                        var14 = _closure1_slot1;
                                        var15 = _closure1_slot2;
                                        var13 = 12;
                                        var13 = var15[var13];
                                        var15 = var14.bind(var4)(var13);
                                        var14 = var15.compare;
                                        var13 = var7;
                                        var3 = var14.bind(var15)(var13, var3);
                                        if (!(!(var3 <= var9))) {
                                            _fun113167_ip = 843;
                                            continue _fun113167
                                        }
                                    case 382:
                                        var9 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var10];
                                        var14 = var9.bind(var4)(var3);
                                        var13 = var14.fetchChangelog;
                                        var9 = var7;
                                        var3 = _closure1_slot10;
                                        var3 = var3.locale;
                                        var3 = var13.bind(var14)(var9, var3);
                                        SaveGenerator(address = 428);
                                    case 426:
                                        return var3;
                                    case 428:
                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 9);
                                        if (var9) {
                                            _fun113167_ip = 801;
                                            continue _fun113167
                                        }
                                    case 437:
                                        var5 = var3;
                                        if (!(var12 != var3)) {
                                            _fun113167_ip = 759;
                                            continue _fun113167
                                        }
                                    case 447:
                                        var9 = var8;
                                        if (!(var12 != var9)) {
                                            _fun113167_ip = 680;
                                            continue _fun113167
                                        }
                                    case 457:
                                        var13 = _closure1_slot11;
                                        var9 = var13.lastSeenChangelogDate;
                                        var9 = var9.bind(var13)();
                                        if (!(var12 != var9)) {
                                            _fun113167_ip = 680;
                                            continue _fun113167
                                        }
                                    case 478:
                                        var12 = _closure1_slot11;
                                        var9 = var12.isLocked;
                                        var9 = var9.bind(var12)();
                                        if (var9) {
                                            _fun113167_ip = 638;
                                            continue _fun113167
                                        }
                                    case 498:
                                        var13 = var11.Date;
                                        var9 = var5;
                                        var27 = var9.date;
                                        var12 = var13.prototype;
                                        var12 = Object.create(var12, {
                                            constructor: {
                                                value: var13
                                            }
                                        });
                                        var28 = var12;
                                        var9 = new var28[var13](var27, var26);
                                        var9 = var9 instanceof Object ? var9 : var12;
                                        var12 = var11.Date;
                                        var27 = var8;
                                        var11 = var12.prototype;
                                        var11 = Object.create(var11, {
                                            constructor: {
                                                value: var12
                                            }
                                        });
                                        var28 = var11;
                                        var8 = new var28[var12](var27, var26);
                                        var8 = var8 instanceof Object ? var8 : var11;
                                        if (!(var9 > var8)) {
                                            _fun113167_ip = 596;
                                            continue _fun113167
                                        }
                                    case 566:
                                        var9 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var8 = 13;
                                        var8 = var11[var8];
                                        var9 = var9.bind(var4)(var8);
                                        var8 = var9.openChangelog;
                                        var8 = var8.bind(var9)();
                                    case 596: // try_end0
                                        var9 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var6];
                                        var11 = var9.bind(var4)(var8);
                                        var9 = var11.dispatch;
                                        var8 = {};
                                        var12 = 'CHANGE_LOG_RESOLVED';
                                        var8.type = var12;
                                        var8 = var9.bind(var11)(var8);
                                        return var4;
                                    case 638:
                                        var9 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var6];
                                        var11 = var9.bind(var4)(var8);
                                        var9 = var11.dispatch;
                                        var8 = {};
                                        var12 = 'CHANGE_LOG_RESOLVED';
                                        var8.type = var12;
                                        var8 = var9.bind(var11)(var8);
                                        return var4;
                                    case 680: // try_start_1
                                        var9 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var10];
                                        var9 = var9.bind(var4)(var8);
                                        var8 = var9.markChangelogAsSeen;
                                        var5 = var5.date;
                                        var5 = var8.bind(var9)(var7, var5);
                                    case 715: // try_end1
                                        var8 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var7 = var7[var6];
                                        var9 = var8.bind(var4)(var7);
                                        var8 = var9.dispatch;
                                        var7 = {};
                                        var10 = 'CHANGE_LOG_RESOLVED';
                                        var7.type = var10;
                                        var7 = var8.bind(var9)(var7);
                                        var5 = undefined;
                                        return var5;
                                    case 759:
                                        var7 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var5 = var5[var6];
                                        var8 = var7.bind(var4)(var5);
                                        var7 = var8.dispatch;
                                        var5 = {};
                                        var9 = 'CHANGE_LOG_RESOLVED';
                                        var5.type = var9;
                                        var5 = var7.bind(var8)(var5);
                                        return var4;
                                    case 801:
                                        var7 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var5 = var5[var6];
                                        var8 = var7.bind(var4)(var5);
                                        var7 = var8.dispatch;
                                        var5 = {};
                                        var9 = 'CHANGE_LOG_RESOLVED';
                                        var5.type = var9;
                                        var5 = var7.bind(var8)(var5);
                                        return var3;
                                    case 843:
                                        var5 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var6];
                                        var7 = var5.bind(var4)(var3);
                                        var5 = var7.dispatch;
                                        var3 = {};
                                        var8 = 'CHANGE_LOG_RESOLVED';
                                        var3.type = var8;
                                        var3 = var5.bind(var7)(var3);
                                        return var4;
                                    case 885:
                                        var5 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var6];
                                        var7 = var5.bind(var4)(var3);
                                        var5 = var7.dispatch;
                                        var3 = {};
                                        var8 = 'CHANGE_LOG_RESOLVED';
                                        var3.type = var8;
                                        var3 = var5.bind(var7)(var3);
                                        return var4;
                                    case 927:
                                        var5 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var6];
                                        var6 = var5.bind(var4)(var3);
                                        var5 = var6.dispatch;
                                        var3 = {};
                                        var7 = 'CHANGE_LOG_RESOLVED';
                                        var3.type = var7;
                                        var3 = var5.bind(var6)(var3);
                                        return var4;
                                    case 969:
                                        var3 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var2 = 11;
                                        var2 = var5[var2];
                                        var5 = var3.bind(var4)(var2);
                                        var3 = var5.dispatch;
                                        var2 = {};
                                        var6 = 'CHANGE_LOG_RESOLVED';
                                        var2.type = var6;
                                        var2 = var3.bind(var5)(var2);
                                        return var1;
                                    case 1014: // catch_target0 // catch_target1
                                        CatchBlockStart(arg_register = 1);
                                        var3 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var2 = 11;
                                        var2 = var5[var2];
                                        var4 = var3.bind(var4)(var2);
                                        var3 = var4.dispatch;
                                        var2 = {};
                                        var5 = 'CHANGE_LOG_RESOLVED';
                                        var2.type = var5;
                                        var2 = var3.bind(var4)(var2);
                                        throw var1;
                                    case 1063:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var1 = var1.bind(var2)();
                    var0.handleConnectionOpen = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot8;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot4;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/changelog/ChangelogManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7, 6, 15, 17, 18, 57, 1676, 3900, 6734, 14480, 806, 21, 14482, 4256, 2]);