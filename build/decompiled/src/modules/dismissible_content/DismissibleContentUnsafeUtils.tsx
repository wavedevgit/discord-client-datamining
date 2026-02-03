// modules/dismissible_content/DismissibleContentUnsafeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun27727: for (var _fun27727_ip = 0;;) switch (_fun27727_ip) {
            case 0:
                var2 = arg0;
                var1 = arguments[1];
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun27727_ip = 14;
                    continue _fun27727
                }
            case 12:
                var1 = {};
            case 14:
                var0 = var1.bypassNewUserCheck;
                if (!(var0 === var3)) {
                    _fun27727_ip = 26;
                    continue _fun27727
                }
            case 24:
                var0 = false;
            case 26:
                var8 = var1.cooldownDurationMs;
                if (!(var8 === var3)) {
                    _fun27727_ip = 71;
                    continue _fun27727
                }
            case 36:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.Millis;
                var8 = var4.WEEK;
            case 71:
                var10 = var1.guildId;
                if (var0) {
                    _fun27727_ip = 120;
                    continue _fun27727
                }
            case 79:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.disableNewUserDismissibleContent;
                var0 = var0.bind(var1)(var2);
                if (!var0) {
                    _fun27727_ip = 120;
                    continue _fun27727
                }
            case 116:
                var0 = true;
                return var0;
            case 120:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 5;
                var1 = var1[var5];
                var4 = var4.bind(var3)(var1);
                var1 = var4.isVersionedDismissibleContent;
                var6 = var1.bind(var4)(var2);
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                if (var6) {
                    _fun27727_ip = 592;
                    continue _fun27727
                }
            case 168:
                var6 = var4[var5];
                var7 = var1.bind(var3)(var6);
                var6 = var7.isSnowflakeBoundDismissibleContent;
                var6 = var6.bind(var7)(var2);
                if (var6) {
                    _fun27727_ip = 526;
                    continue _fun27727
                }
            case 194:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var5];
                var7 = var7.bind(var3)(var6);
                var6 = var7.isTimeRecurringDismissibleContent;
                var9 = var6.bind(var7)(var2);
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                if (var9) {
                    _fun27727_ip = 487;
                    continue _fun27727
                }
            case 236:
                var9 = var7[var5];
                var11 = var6.bind(var3)(var9);
                var9 = var11.isSingleUseGuildDismissibleContent;
                var12 = var9.bind(var11)(var2);
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                if (var12) {
                    _fun27727_ip = 461;
                    continue _fun27727
                }
            case 270:
                var12 = var11[var5];
                var13 = var9.bind(var3)(var12);
                var12 = var13.isTimeRecurringGuildDismissibleContent;
                var14 = var12.bind(var13)(var2);
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                if (var14) {
                    _fun27727_ip = 435;
                    continue _fun27727
                }
            case 304:
                var5 = var13[var5];
                var14 = var12.bind(var3)(var5);
                var5 = var14.isSnowflakeBoundGuildDismissibleContent;
                var5 = var5.bind(var14)(var2);
                if (var5) {
                    _fun27727_ip = 401;
                    continue _fun27727
                }
            case 327:
                var5 = _closure1_slot4;
                var5 = var5.settings;
                var14 = var5.userContent;
                var5 = null;
                var15 = var5 == var14;
                var16 = undefined;
                if (var15) {
                    _fun27727_ip = 360;
                    continue _fun27727
                }
            case 354:
                var16 = var14.dismissedContents;
            case 360:
                var5 = var5 != var16;
                if (!var5) {
                    _fun27727_ip = 399;
                    continue _fun27727
                }
            case 367:
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var14 = 8;
                var14 = var17[var14];
                var15 = var15.bind(var3)(var14);
                var14 = var15.hasBit;
                var5 = var14.bind(var15)(var16, var2);
            case 399:
                return var5;
            case 401:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 6;
                var5 = var15[var5];
                var14 = var14.bind(var3)(var5);
                var5 = var14.UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed;
                var5 = var5.bind(var14)(var2, var10);
                return var5;
            case 435:
                var5 = 6;
                var5 = var13[var5];
                var12 = var12.bind(var3)(var5);
                var5 = var12.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed;
                var5 = var5.bind(var12)(var2, var10);
                return var5;
            case 461:
                var5 = 6;
                var5 = var11[var5];
                var9 = var9.bind(var3)(var5);
                var5 = var9.UNSAFE_isSingleUseGuildDismissibleContentDismissed;
                var5 = var5.bind(var9)(var2, var10);
                return var5;
            case 487:
                var5 = 6;
                var5 = var7[var5];
                var7 = var6.bind(var3)(var5);
                var6 = var7.isTimeRecurringDismissibleContentDismissed;
                var5 = {};
                var5.cooldownDurationMs = var8;
                var5 = var6.bind(var7)(var2, var5);
                var5 = var5.isDismissed;
                return var5;
            case 526:
                var5 = _closure1_slot8;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var7 = var6.bind(var3)(var0);
                var6 = var7.fromTimestamp;
                var0 = global;
                var8 = var0.Date;
                var0 = var8.now;
                var0 = var0.bind(var8)();
                var0 = var6.bind(var7)(var0);
                var0 = var5.bind(var3)(var2, var0);
                var0 = var0.isDismissed;
                return var0;
            case 592:
                var0 = 6;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isVersionedDismissibleContentDismissed;
                var0 = var0.bind(var1)(var2);
                var0 = var0.isDismissed;
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun27730: for (var _fun27730_ip = 0;;) switch (_fun27730_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var6 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun27730_ip = 167;
                            continue _fun27730
                        }
                    case 16:
                        var2 = undefined;
                        if (!(var6 === var2)) {
                            _fun27730_ip = 24;
                            continue _fun27730
                        }
                    case 22:
                        var6 = {};
                    case 24:
                        SaveGenerator(address = 28);
                    case 26:
                        return var2;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun27730_ip = 164;
                            continue _fun27730
                        }
                    case 37:
                        var5 = _closure1_slot6;
                        var3 = {};
                        var8 = true;
                        var3.bypassNewUserCheck = var8;
                        var3 = var5.bind(var2)(var7, var3);
                        if (var3) {
                            _fun27730_ip = 161;
                            continue _fun27730
                        }
                    case 62:
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var8 = 6;
                        var3 = var9[var8];
                        var10 = var5.bind(var2)(var3);
                        var3 = var10.markDismissibleContentAsDismissedPreProcessing;
                        var3 = var3.bind(var10)(var7, var6);
                        var3 = 10;
                        var3 = var9[var3];
                        var5 = var5.bind(var2)(var3);
                        var3 = var5.addDismissedContent;
                        var3 = var3.bind(var5)(var7);
                        SaveGenerator(address = 121);
                    case 119:
                        return var3;
                    case 121:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun27730_ip = 158;
                            continue _fun27730
                        }
                    case 127:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.markDismissibleContentAsDismissedPostProcessing;
                        var4 = var4.bind(var5)(var7, var6);
                        _fun27730_ip = 161;
                        continue _fun27730;
                    case 158:
                        return var3;
                    case 161:
                        return var2;
                    case 164:
                        return var1;
                    case 167:
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
    var3 = function arg0, arg1() {
        _fun27731: for (var _fun27731_ip = 0;;) switch (_fun27731_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = var1.disableNewUserDismissibleContent;
                var0 = var0.bind(var1)(var4);
                if (var0) {
                    _fun27731_ip = 157;
                    continue _fun27731
                }
            case 42:
                var0 = _closure1_slot4;
                var0 = var0.settings;
                var0 = var0.userContent;
                var2 = null;
                var6 = var2 == var0;
                var1 = undefined;
                if (var6) {
                    _fun27731_ip = 94;
                    continue _fun27731
                }
            case 69:
                var0 = var0.recurringDismissibleContentStates;
                var0 = var0[var4];
                var4 = var2 == var0;
                var1 = undefined;
                if (var4) {
                    _fun27731_ip = 94;
                    continue _fun27731
                }
            case 88:
                var1 = var0.lastDismissedObjectId;
            case 94:
                var0 = {};
                var2 = var2 != var1;
                if (!var2) {
                    _fun27731_ip = 145;
                    continue _fun27731
                }
            case 103:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.compare;
                var3 = arg1;
                var4 = var4.bind(var5)(var3, var1);
                var3 = 1;
                var2 = var3 !== var4;
            case 145:
                var0.isDismissed = var2;
                var0.lastDismissedSnowflakeId = var1;
                return var0;
            case 157:
                var0 = {
                    'isDismissed': true,
                    'lastDismissedSnowflakeId': null
                };
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun27734: for (var _fun27734_ip = 0;;) switch (_fun27734_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var6 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun27734_ip = 145;
                            continue _fun27734
                        }
                    case 16:
                        var3 = undefined;
                        if (!(var6 === var3)) {
                            _fun27734_ip = 24;
                            continue _fun27734
                        }
                    case 22:
                        var6 = {};
                    case 24:
                        SaveGenerator(address = 28);
                    case 26:
                        return var3;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun27734_ip = 142;
                            continue _fun27734
                        }
                    case 34:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var8 = 6;
                        var9 = var2[var8];
                        var10 = var5.bind(var3)(var9);
                        var9 = var10.markDismissibleContentAsDismissedPreProcessing;
                        var9 = var9.bind(var10)(var7, var6);
                        var2 = var2[var8];
                        var10 = var5.bind(var3)(var2);
                        var9 = var10.UNSAFE_addGuildDismissedContent;
                        var5 = arg1;
                        var2 = 1;
                        var2 = var9.bind(var10)(var7, var5, var2);
                        SaveGenerator(address = 101);
                    case 99:
                        return var2;
                    case 101:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun27734_ip = 139;
                            continue _fun27734
                        }
                    case 107:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.markDismissibleContentAsDismissedPostProcessing;
                        var4 = var4.bind(var5)(var7, var6);
                        return var3;
                    case 139:
                        return var2;
                    case 142:
                        return var1;
                    case 145:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun27737: for (var _fun27737_ip = 0;;) switch (_fun27737_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var9 = arg1;
                        var5 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun27737_ip = 144;
                            continue _fun27737
                        }
                    case 19:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var7 = 6;
                        var8 = var1[var7];
                        var2 = undefined;
                        var10 = var4.bind(var2)(var8);
                        var8 = var10.getGuildNextNumTimesDismissed;
                        var8 = var8.bind(var10)(var6, var9);
                        var10 = var1[var7];
                        var11 = var4.bind(var2)(var10);
                        var10 = var11.markDismissibleContentAsDismissedPreProcessing;
                        var10 = var10.bind(var11)(var6, var5);
                        var1 = var1[var7];
                        var4 = var4.bind(var2)(var1);
                        var1 = var4.UNSAFE_addTimeRecurringGuildDismissedContent;
                        var1 = var1.bind(var4)(var6, var9, var8);
                        SaveGenerator(address = 103);
                    case 101:
                        return var1;
                    case 103:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun27737_ip = 141;
                            continue _fun27737
                        }
                    case 109:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.markDismissibleContentAsDismissedPostProcessing;
                        var3 = var3.bind(var4)(var6, var5);
                        return var2;
                    case 141:
                        return var1;
                    case 144:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun27740: for (var _fun27740_ip = 0;;) switch (_fun27740_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var10 = arg2;
                        var5 = arg3;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun27740_ip = 153;
                            continue _fun27740
                        }
                    case 19:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var7 = 6;
                        var8 = var1[var7];
                        var2 = undefined;
                        var9 = var4.bind(var2)(var8);
                        var8 = var9.getGuildNextNumTimesDismissed;
                        var12 = var8.bind(var9)(var6, var10);
                        var8 = var1[var7];
                        var11 = var4.bind(var2)(var8);
                        var8 = var11.markDismissibleContentAsDismissedPreProcessing;
                        var8 = var8.bind(var11)(var6, var5);
                        var1 = var1[var7];
                        var8 = var4.bind(var2)(var1);
                        var4 = var8.UNSAFE_addSnowflakeBoundGuildDismissedContent;
                        var14 = arg1;
                        var16 = var8;
                        var15 = var6;
                        var13 = var10;
                        var1 = var16[var4](var15, var14, var13, var12, var11);
                        SaveGenerator(address = 112);
                    case 110:
                        return var1;
                    case 112:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun27740_ip = 150;
                            continue _fun27740
                        }
                    case 118:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.markDismissibleContentAsDismissedPostProcessing;
                        var3 = var3.bind(var4)(var6, var5);
                        return var2;
                    case 150:
                        return var1;
                    case 153:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/dismissible_content/DismissibleContentUnsafeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.UNSAFE_isDismissibleContentDismissed = var4;
    var4 = function arg0() {
        _fun27741: for (var _fun27741_ip = 0;;) switch (_fun27741_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun27741_ip = 20;
                    continue _fun27741
                }
            case 18:
                var1 = {};
            case 20:
                var _closure2_slot1 = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.useStateFromStores;
                var5 = _closure1_slot4;
                var1 = new Array(2);
                var1[0] = var5;
                var4 = _closure1_slot5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.UNSAFE_useIsDismissibleContentDismissed = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.UNSAFE_markDismissibleContentAsDismissed = var4;
    var2.UNSAFE_isSnowflakeBoundDismissibleContentDismissed = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1310, 3204, 667, 3226, 1359, 1360, 21, 1357, 566, 1355, 2]);