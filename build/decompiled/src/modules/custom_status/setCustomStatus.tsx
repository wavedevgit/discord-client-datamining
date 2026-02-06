// modules/custom_status/setCustomStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun57392: for (var _fun57392_ip = 0;;) switch (_fun57392_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var3 = var2 == var1;
                var0 = null;
                if (var3) {
                    _fun57392_ip = 39;
                    continue _fun57392
                }
            case 14:
                var1 = var1.id;
                var2 = var2 != var1;
                var1 = 'unicode';
                if (!var2) {
                    _fun57392_ip = 36;
                    continue _fun57392
                }
            case 32:
                var1 = 'custom';
            case 36:
                var0 = var1;
            case 39:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ClearAfterValues;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/setCustomStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57393: for (var _fun57393_ip = 0;;) switch (_fun57393_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.text;
                var14 = var0.emojiInfo;
                var12 = var0.clearAfter;
                var16 = var0.analyticsContext;
                var4 = var0.createdAtMs;
                var7 = var0.prompt;
                var5 = var0.analyticsLocations;
                var0 = var1.trim;
                var9 = var0.bind(var1)();
                var0 = var9.length;
                var8 = 0;
                if (!(!(var0 > var8))) {
                    _fun57393_ip = 115;
                    continue _fun57393
                }
            case 65:
                var0 = null;
                if (!(var0 == var14)) {
                    _fun57393_ip = 115;
                    continue _fun57393
                }
            case 71:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.CustomStatusSetting;
                var0 = var1.updateSetting;
                var0 = var0.bind(var1)(var2);
                return var0;
            case 115:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var0 = var2[var0];
                var6 = undefined;
                var0 = var1.bind(var6)(var0);
                var2 = var0.CustomStatusSetting;
                var1 = var2.updateSetting;
                var0 = {};
                var3 = var9.length;
                var8 = var3 > var8;
                var11 = '';
                var3 = var11;
                if (!var8) {
                    _fun57393_ip = 176;
                    continue _fun57393
                }
            case 173:
                var3 = var9;
            case 176:
                var0.text = var3;
                var8 = null;
                var10 = var8 != var12;
                var15 = '0';
                var3 = var15;
                if (!var10) {
                    _fun57393_ip = 304;
                    continue _fun57393
                }
            case 198:
                var10 = _closure1_slot3;
                var10 = var10.DONT_CLEAR;
                var3 = var15;
                if (!(var12 !== var10)) {
                    _fun57393_ip = 304;
                    continue _fun57393
                }
            case 215:
                var10 = global;
                var17 = var10.String;
                var18 = _closure1_slot1;
                var21 = _closure1_slot2;
                var10 = 3;
                var10 = var21[var10];
                var10 = var18.bind(var6)(var10);
                var20 = var10.bind(var6)();
                var19 = var20.add;
                var10 = 4;
                var10 = var21[var10];
                var10 = var18.bind(var6)(var10);
                var18 = var10.bind(var6)(var12);
                var10 = 'ms';
                var18 = var19.bind(var20)(var18, var10);
                var10 = var18.toDate;
                var18 = var10.bind(var18)();
                var10 = var18.getTime;
                var10 = var10.bind(var18)();
                var3 = var17.bind(var6)(var10);
            case 304:
                var0.expiresAtMs = var3;
                var10 = var8 != var14;
                var3 = var15;
                if (!var10) {
                    _fun57393_ip = 339;
                    continue _fun57393
                }
            case 319:
                var10 = var14.id;
                var10 = var8 != var10;
                var3 = var15;
                if (!var10) {
                    _fun57393_ip = 339;
                    continue _fun57393
                }
            case 334:
                var3 = var14.id;
            case 339:
                var0.emojiId = var3;
                var10 = var8 != var14;
                var3 = var11;
                if (!var10) {
                    _fun57393_ip = 359;
                    continue _fun57393
                }
            case 354:
                var3 = var14.name;
            case 359:
                var0.emojiName = var3;
                var10 = global;
                var3 = var10.String;
                if (!(var8 == var4)) {
                    _fun57393_ip = 420;
                    continue _fun57393
                }
            case 376:
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var15 = 3;
                var15 = var18[var15];
                var15 = var17.bind(var6)(var15);
                var17 = var15.bind(var6)();
                var15 = var17.toDate;
                var17 = var15.bind(var17)();
                var15 = var17.getTime;
                var4 = var15.bind(var17)();
            case 420:
                var3 = var3.bind(var6)(var4);
                var0.createdAtMs = var3;
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var4 = var2.bind(var6)(var1);
                var3 = var4.track;
                var1 = _closure1_slot4;
                var2 = var1.CUSTOM_STATUS_UPDATED;
                var1 = {};
                var17 = var8 != var16;
                var15 = null;
                if (!var17) {
                    _fun57393_ip = 486;
                    continue _fun57393
                }
            case 481:
                var15 = var16.location;
            case 486:
                var1.location = var15;
                var13 = _closure1_slot5;
                var13 = var13.bind(var6)(var14);
                var1.emoji_type = var13;
                var9 = var9.length;
                var1.text_len = var9;
                var13 = var8 != var12;
                var9 = null;
                if (!var13) {
                    _fun57393_ip = 543;
                    continue _fun57393
                }
            case 527:
                var10 = var10.HermesInternal;
                var10 = var10.concat;
                var9 = var10.bind(var11)(var12);
            case 543:
                var1.clear_after = var9;
                var8 = var8 == var7;
                var6 = undefined;
                if (var8) {
                    _fun57393_ip = 564;
                    continue _fun57393
                }
            case 559:
                var6 = var7.value;
            case 564:
                var1.prompt_type = var6;
                var1.location_stack = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7009, 660, 1348, 3047, 7015, 795, 2]);