// modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: toggleDismissibleContentShared, environment: var1
        _fun85877: for (var _fun85877_ip = 0;;) switch (_fun85877_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.overrideDCFLastDCDismissed;
                var5 = arg1;
                var1 = null;
                if (var5) {
                    _fun85877_ip = 45;
                    continue _fun85877
                }
            case 42:
                var1 = var4;
            case 45:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var3 = var3.useCallback;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useToggleDismissibleContentDismissState, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 7;
        var2 = var10[var2];
        var4 = undefined;
        var8 = var3.bind(var4)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot4;
            var0 = var1.getGuildId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var7.bind(var8)(var5, var2);
        var _closure2_slot1 = var5;
        var2 = 8;
        var2 = var10[var2];
        var7 = var3.bind(var4)(var2);
        var3 = var7.UNSAFE_useIsDismissibleContentDismissed;
        var2 = {};
        var9 = _closure1_slot1;
        var8 = 9;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.Millis;
        var8 = var8.WEEK;
        var2.cooldownDurationMs = var8;
        var2.guildId = var5;
        var2 = var3.bind(var7)(var6, var2);
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var2;
        var0 = function() { // Environment: var0
            _fun85880: for (var _fun85880_ip = 0;;) switch (_fun85880_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var3 = 10;
                    var0 = var0[var3];
                    var5 = undefined;
                    var4 = var1.bind(var5)(var0);
                    var2 = var4.isVersionedDismissibleContent;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var4)(var0);
                    if (var0) {
                        _fun85880_ip = 1120;
                        continue _fun85880
                    }
                case 49:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var3];
                    var4 = var2.bind(var5)(var0);
                    var2 = var4.isSnowflakeBoundDismissibleContent;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var4)(var0);
                    if (var0) {
                        _fun85880_ip = 935;
                        continue _fun85880
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var3];
                    var4 = var2.bind(var5)(var0);
                    var2 = var4.isTimeRecurringDismissibleContent;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var4)(var0);
                    if (var0) {
                        _fun85880_ip = 822;
                        continue _fun85880
                    }
                case 125:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var3];
                    var4 = var2.bind(var5)(var0);
                    var2 = var4.isSingleUseGuildDismissibleContent;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var4)(var0);
                    if (var0) {
                        _fun85880_ip = 677;
                        continue _fun85880
                    }
                case 163:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var3];
                    var4 = var2.bind(var5)(var0);
                    var2 = var4.isTimeRecurringGuildDismissibleContent;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var4)(var0);
                    if (var0) {
                        _fun85880_ip = 529;
                        continue _fun85880
                    }
                case 201:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var3];
                    var3 = var2.bind(var5)(var0);
                    var2 = var3.isSnowflakeBoundGuildDismissibleContent;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var0);
                    var11 = _closure2_slot0;
                    if (var0) {
                        _fun85880_ip = 310;
                        continue _fun85880
                    }
                case 240:
                    var0 = _closure2_slot2;
                    var2 = _closure1_slot5;
                    var2 = var2.bind(var5)(var11, var0);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var3 = var3.bind(var5)(var2);
                    if (var0) {
                        _fun85880_ip = 292;
                        continue _fun85880
                    }
                case 277:
                    var0 = var3.addDismissedContent;
                    var0 = var0.bind(var3)(var11);
                    var0 = true;
                    _fun85880_ip = 305;
                    continue _fun85880;
                case 292:
                    var2 = var3.removeDismissedContent;
                    var2 = var2.bind(var3)(var11);
                    var0 = false;
                case 305:
                    _fun85880_ip = 524;
                    continue _fun85880;
                case 310:
                    var10 = _closure2_slot1;
                    var8 = _closure2_slot2;
                    var3 = null;
                    var7 = var3 == var10;
                    var2 = false;
                    if (var7) {
                        _fun85880_ip = 521;
                        continue _fun85880
                    }
                case 332:
                    var3 = var3 != var10;
                    var12 = 1;
                    var7 = var12;
                    if (!var3) {
                        _fun85880_ip = 377;
                        continue _fun85880
                    }
                case 345:
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 4;
                    var3 = var13[var3];
                    var9 = var9.bind(var5)(var3);
                    var3 = var9.getGuildNextNumTimesDismissed;
                    var7 = var3.bind(var9)(var11, var10);
                case 377:
                    var3 = _closure1_slot5;
                    var3 = var3.bind(var5)(var11, var8);
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var3 = 4;
                    var9 = var17[var3];
                    var9 = var16.bind(var5)(var9);
                    if (var8) {
                        _fun85880_ip = 499;
                        continue _fun85880
                    }
                case 410:
                    var8 = var9.UNSAFE_addSnowflakeBoundGuildDismissedContent;
                    var14 = _closure1_slot1;
                    var13 = 6;
                    var13 = var17[var13];
                    var14 = var14.bind(var5)(var13);
                    var13 = var14.fromTimestamp;
                    var15 = global;
                    var18 = var15.Date;
                    var15 = var18.now;
                    var15 = var15.bind(var18)();
                    var3 = var17[var3];
                    var3 = var16.bind(var5)(var3);
                    var3 = var3.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS;
                    var3 = var15 + var3;
                    var21 = var13.bind(var14)(var3);
                    var23 = var9;
                    var22 = var11;
                    var20 = var10;
                    var19 = var7;
                    var3 = var23[var8](var22, var21, var20, var19, var18);
                    var3 = true;
                    _fun85880_ip = 518;
                    continue _fun85880;
                case 499:
                    var8 = var9.UNSAFE_removeSnowflakeBoundGuildDismissedContent;
                    var7 = var7 - var12;
                    var7 = var8.bind(var9)(var11, var10, var7);
                    var3 = false;
                case 518:
                    var2 = var3;
                case 521:
                    var0 = var2;
                case 524:
                    _fun85880_ip = 672;
                    continue _fun85880;
                case 529:
                    var11 = _closure2_slot0;
                    var10 = _closure2_slot1;
                    var3 = _closure2_slot2;
                    var7 = null;
                    var8 = var7 == var10;
                    var2 = false;
                    if (var8) {
                        _fun85880_ip = 669;
                        continue _fun85880
                    }
                case 552:
                    var8 = var7 != var10;
                    var12 = 1;
                    var7 = var12;
                    if (!var8) {
                        _fun85880_ip = 597;
                        continue _fun85880
                    }
                case 565:
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 4;
                    var8 = var13[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.getGuildNextNumTimesDismissed;
                    var7 = var8.bind(var9)(var11, var10);
                case 597:
                    var8 = _closure1_slot5;
                    var8 = var8.bind(var5)(var11, var3);
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 4;
                    var8 = var13[var8];
                    var9 = var9.bind(var5)(var8);
                    if (var3) {
                        _fun85880_ip = 647;
                        continue _fun85880
                    }
                case 630:
                    var3 = var9.UNSAFE_addTimeRecurringGuildDismissedContent;
                    var3 = var3.bind(var9)(var11, var10, var7);
                    var3 = true;
                    _fun85880_ip = 666;
                    continue _fun85880;
                case 647:
                    var8 = var9.UNSAFE_removeTimeRecurringGuildDismissedContent;
                    var7 = var7 - var12;
                    var7 = var8.bind(var9)(var11, var10, var7);
                    var3 = false;
                case 666:
                    var2 = var3;
                case 669:
                    var0 = var2;
                case 672:
                    _fun85880_ip = 820;
                    continue _fun85880;
                case 677:
                    var11 = _closure2_slot0;
                    var10 = _closure2_slot1;
                    var3 = _closure2_slot2;
                    var7 = null;
                    var8 = var7 == var10;
                    var2 = false;
                    if (var8) {
                        _fun85880_ip = 817;
                        continue _fun85880
                    }
                case 700:
                    var8 = var7 != var10;
                    var12 = 1;
                    var7 = var12;
                    if (!var8) {
                        _fun85880_ip = 745;
                        continue _fun85880
                    }
                case 713:
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 4;
                    var8 = var13[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.getGuildNextNumTimesDismissed;
                    var7 = var8.bind(var9)(var11, var10);
                case 745:
                    var8 = _closure1_slot5;
                    var8 = var8.bind(var5)(var11, var3);
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 4;
                    var8 = var13[var8];
                    var9 = var9.bind(var5)(var8);
                    if (var3) {
                        _fun85880_ip = 795;
                        continue _fun85880
                    }
                case 778:
                    var3 = var9.UNSAFE_addGuildDismissedContent;
                    var3 = var3.bind(var9)(var11, var10, var7);
                    var3 = true;
                    _fun85880_ip = 814;
                    continue _fun85880;
                case 795:
                    var8 = var9.UNSAFE_removeGuildDismissedContent;
                    var7 = var7 - var12;
                    var7 = var8.bind(var9)(var11, var10, var7);
                    var3 = false;
                case 814:
                    var2 = var3;
                case 817:
                    var0 = var2;
                case 820:
                    _fun85880_ip = 930;
                    continue _fun85880;
                case 822:
                    var7 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var3 = _closure1_slot5;
                    var3 = var3.bind(var5)(var7, var2);
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    if (var2) {
                        _fun85880_ip = 902;
                        continue _fun85880
                    }
                case 851:
                    var2 = 4;
                    var3 = var8[var2];
                    var9 = var4.bind(var5)(var3);
                    var3 = var9.addTimeRecurringDismissedContent;
                    var2 = var8[var2];
                    var11 = var4.bind(var5)(var2);
                    var10 = var11.getNextNumTimesDismissed;
                    var2 = {};
                    var2 = var10.bind(var11)(var7, var2);
                    var2 = var3.bind(var9)(var7, var2);
                    var2 = true;
                    _fun85880_ip = 927;
                    continue _fun85880;
                case 902:
                    var3 = 5;
                    var3 = var8[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.removeDismissedRecurringContent;
                    var3 = var3.bind(var4)(var7);
                    var2 = false;
                case 927:
                    var0 = var2;
                case 930:
                    _fun85880_ip = 1115;
                    continue _fun85880;
                case 935:
                    var7 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var4 = var4[var2];
                    var9 = var8.bind(var5)(var4);
                    var8 = var9.getNextNumTimesDismissed;
                    var4 = {};
                    var10 = var8.bind(var9)(var7, var4);
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var5)(var7, var3);
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    if (var3) {
                        _fun85880_ip = 1087;
                        continue _fun85880
                    }
                case 998:
                    var3 = var8[var2];
                    var9 = var4.bind(var5)(var3);
                    var3 = var9.addSnowflakeBoundDismissedContent;
                    var12 = _closure1_slot1;
                    var11 = 6;
                    var11 = var8[var11];
                    var12 = var12.bind(var5)(var11);
                    var11 = var12.fromTimestamp;
                    var13 = global;
                    var14 = var13.Date;
                    var13 = var14.now;
                    var13 = var13.bind(var14)();
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS;
                    var2 = var13 + var2;
                    var2 = var11.bind(var12)(var2);
                    var2 = var3.bind(var9)(var7, var2, var10);
                    var2 = true;
                    _fun85880_ip = 1112;
                    continue _fun85880;
                case 1087:
                    var3 = 5;
                    var3 = var8[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.removeDismissedRecurringContent;
                    var3 = var3.bind(var4)(var7);
                    var2 = false;
                case 1112:
                    var0 = var2;
                case 1115:
                    _fun85880_ip = 1260;
                    continue _fun85880;
                case 1120:
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var1 = var3[var1];
                    var8 = var7.bind(var5)(var1);
                    var1 = var8.getVersionedDismissibleContentCurrentVersion;
                    var8 = var1.bind(var8)(var4);
                    var1 = 4;
                    var3 = var3[var1];
                    var9 = var7.bind(var5)(var3);
                    var7 = var9.getNextNumTimesDismissed;
                    var3 = {};
                    var7 = var7.bind(var9)(var4, var3);
                    var3 = _closure1_slot5;
                    var3 = var3.bind(var5)(var4, var2);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    if (var2) {
                        _fun85880_ip = 1232;
                        continue _fun85880
                    }
                case 1206:
                    var1 = var6[var1];
                    var2 = var3.bind(var5)(var1);
                    var1 = var2.addVersionedDismissedContent;
                    var1 = var1.bind(var2)(var4, var8, var7);
                    var1 = true;
                    _fun85880_ip = 1257;
                    continue _fun85880;
                case 1232:
                    var2 = 5;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.removeDismissedRecurringContent;
                    var2 = var2.bind(var3)(var4);
                    var1 = false;
                case 1257:
                    var0 = var1;
                case 1260:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var0, var1);
        var0 = {};
        var0.isDismissed = var2;
        var0.handleToggleDismissState = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3172, 11060, 1370, 1360, 1355, 21, 566, 3171, 667, 1359, 2]);