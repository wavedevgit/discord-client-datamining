// modules/safety_common/SafetyToastsUtils.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyToastType;
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_common/SafetyToastsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: getSafetyToastTypeContent, environment: var1
        _fun51844: for (var _fun51844_ip = 0;;) switch (_fun51844_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot4;
                var3 = var4.getUser;
                var1 = arg1;
                var6 = var3.bind(var4)(var1);
                var4 = _closure1_slot3;
                var3 = var4.getChannel;
                var1 = arg2;
                var9 = var3.bind(var4)(var1);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var5 = undefined;
                var8 = var3.bind(var5)(var1);
                var7 = var8.getName;
                var1 = null;
                var3 = var1 == var9;
                var4 = undefined;
                if (var3) {
                    _fun51844_ip = 85;
                    continue _fun51844
                }
            case 80:
                var4 = var9.guild_id;
            case 85:
                var10 = var1 == var9;
                var3 = undefined;
                if (var10) {
                    _fun51844_ip = 99;
                    continue _fun51844
                }
            case 94:
                var3 = var9.id;
            case 99:
                var4 = var7.bind(var8)(var4, var3, var6);
                if (!(var1 == var4)) {
                    _fun51844_ip = 141;
                    continue _fun51844
                }
            case 110:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 4;
                var1 = var7[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.getGlobalName;
                var4 = var1.bind(var3)(var6);
            case 141:
                var1 = _closure1_slot5;
                var1 = var1.IGNORE_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 1236;
                    continue _fun51844
                }
            case 158:
                var1 = _closure1_slot5;
                var1 = var1.UNIGNORE_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 1170;
                    continue _fun51844
                }
            case 175:
                var1 = _closure1_slot5;
                var1 = var1.BLOCK_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 1104;
                    continue _fun51844
                }
            case 192:
                var1 = _closure1_slot5;
                var1 = var1.UNBLOCK_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 1038;
                    continue _fun51844
                }
            case 209:
                var1 = _closure1_slot5;
                var1 = var1.MUTE_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 972;
                    continue _fun51844
                }
            case 226:
                var1 = _closure1_slot5;
                var1 = var1.UNMUTE_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 906;
                    continue _fun51844
                }
            case 243:
                var1 = _closure1_slot5;
                var1 = var1.REPORT_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 840;
                    continue _fun51844
                }
            case 260:
                var1 = _closure1_slot5;
                var1 = var1.TIGGER_PAWTECT_ERROR;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 783;
                    continue _fun51844
                }
            case 277:
                var1 = _closure1_slot5;
                var1 = var1.TIGGER_PAWTECT_VERIFIED;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 654;
                    continue _fun51844
                }
            case 294:
                var1 = _closure1_slot5;
                var1 = var1.GENERIC_ERROR;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 595;
                    continue _fun51844
                }
            case 311:
                var1 = _closure1_slot5;
                var1 = var1.REPORT_TO_MOD_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 534;
                    continue _fun51844
                }
            case 328:
                var1 = _closure1_slot5;
                var1 = var1.SAFETY_FEEDBACK_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 475;
                    continue _fun51844
                }
            case 345:
                var1 = _closure1_slot5;
                var1 = var1.EXISTING_USER_AGE_GATE_SUCCESS;
                if (!(var1 !== var2)) {
                    _fun51844_ip = 416;
                    continue _fun51844
                }
            case 359:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["+c5xtT"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 416:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["susqq/"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 475:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.TcFR5k;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 534:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var3 = var1.intl;
                var2 = var3.string;
                var6 = _closure1_slot1;
                var1 = 7;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.iBypeZ;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 595:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.zBpoc7;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 654:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 6;
                var1 = var10[var1];
                var6 = var9.bind(var5)(var1);
                var3 = var6.getUpdatedAgeVerificationString;
                var1 = 5;
                var2 = var10[var1];
                var2 = var9.bind(var5)(var2);
                var8 = var2.intl;
                var7 = var8.string;
                var2 = var10[var1];
                var2 = var9.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.XwKo1k;
                var2 = var7.bind(var8)(var2);
                var7 = var10[var1];
                var7 = var9.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var1 = var10[var1];
                var1 = var9.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["7nKAXx"];
                var1 = var7.bind(var8)(var1);
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 783:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.c6kn6F;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 840:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var3 = var7[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.FOptFU;
                var1 = {};
                var1.username = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 906:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var3 = var7[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.tRaBfY;
                var1 = {};
                var1.username = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 972:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var3 = var7[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.X4NtYb;
                var1 = {};
                var1.username = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 1038:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var3 = var7[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.uExcGX;
                var1 = {};
                var1.username = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 1104:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var3 = var7[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.XXPrIs;
                var1 = {};
                var1.username = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 1170:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var3 = var7[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.THExKa;
                var1 = {};
                var1.username = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 1236:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 5;
                var2 = var6[var0];
                var2 = var1.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.t;
                var1 = var0["+joqrP"];
                var0 = {};
                var0.username = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getSafetyToastTypeContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1613, 5878, 3921, 3195, 1234, 4516, 1977, 2]);