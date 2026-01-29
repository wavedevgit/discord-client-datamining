// modules/game_update/useGameUpdateTime.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_update/useGameUpdateTime.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun118396: for (var _fun118396_ip = 0;;) switch (_fun118396_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.startDate;
                var6 = null;
                if (!(var6 != var5)) {
                    _fun118396_ip = 626;
                    continue _fun118396
                }
            case 18:
                var0 = '';
                if (!(var0 !== var5)) {
                    _fun118396_ip = 626;
                    continue _fun118396
                }
            case 29:
                var10 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 0;
                var1 = var4[var2];
                var7 = undefined;
                var3 = var10.bind(var7)(var1);
                var1 = 'YYYY-MM-DD HH:mm:ss';
                var5 = var3.bind(var7)(var5, var1);
                var8 = _closure1_slot0;
                var1 = 1;
                var3 = var4[var1];
                var11 = var8.bind(var7)(var3);
                var9 = var11.dateFormat;
                var3 = 'MMM D, YYYY';
                var3 = var9.bind(var11)(var5, var3);
                var9 = var4[var2];
                var9 = var10.bind(var7)(var9);
                var10 = var9.bind(var7)();
                var4 = var4[var1];
                var9 = var8.bind(var7)(var4);
                var8 = var9.differenceInCalendarDays;
                var4 = var5.toDate;
                var5 = var4.bind(var5)();
                var4 = var10.toDate;
                var4 = var4.bind(var10)();
                var12 = var8.bind(var9)(var5, var4);
                if (!(var2 !== var12)) {
                    _fun118396_ip = 544;
                    continue _fun118396
                }
            case 160:
                var2 = -1;
                if (!(var2 !== var12)) {
                    _fun118396_ip = 479;
                    continue _fun118396
                }
            case 173:
                if (!(var1 !== var12)) {
                    _fun118396_ip = 411;
                    continue _fun118396
                }
            case 180:
                if (!(!(var12 < var2))) {
                    _fun118396_ip = 290;
                    continue _fun118396
                }
            case 184:
                var4 = var12 > var1;
                if (!var4) {
                    _fun118396_ip = 198;
                    continue _fun118396
                }
            case 191:
                var1 = 60;
                var4 = var12 < var1;
            case 198:
                var1 = 'content-inventory-overlay-text-secondary';
                var2 = null;
                if (!var4) {
                    _fun118396_ip = 607;
                    continue _fun118396
                }
            case 212:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 2;
                var4 = var10[var4];
                var4 = var5.bind(var7)(var4);
                var9 = var4.intl;
                var8 = var9.format;
                var5 = _closure1_slot1;
                var4 = 3;
                var4 = var10[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.a0fXhG;
                var4 = {};
                var4.count = var12;
                var2 = var8.bind(var9)(var5, var4);
                var1 = 'text-link';
                _fun118396_ip = 607;
                continue _fun118396;
            case 290:
                var4 = -14;
                var5 = var12 > var4;
                var4 = 'content-inventory-overlay-text-secondary';
                var2 = null;
                var1 = var4;
                if (!var5) {
                    _fun118396_ip = 607;
                    continue _fun118396
                }
            case 317:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 2;
                var5 = var10[var5];
                var5 = var6.bind(var7)(var5);
                var9 = var5.intl;
                var8 = var9.format;
                var6 = _closure1_slot1;
                var5 = 3;
                var5 = var10[var5];
                var5 = var6.bind(var7)(var5);
                var6 = var5["4Wc+CC"];
                var5 = {};
                var10 = global;
                var11 = var10.Math;
                var10 = var11.abs;
                var10 = var10.bind(var11)(var12);
                var5.count = var10;
                var2 = var8.bind(var9)(var6, var5);
                var1 = var4;
                _fun118396_ip = 607;
                continue _fun118396;
            case 411:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4["EqnX/z"];
                var2 = var5.bind(var6)(var4);
                var1 = 'text-link';
                _fun118396_ip = 607;
                continue _fun118396;
            case 479:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.ZdDLO0;
                var2 = var5.bind(var6)(var4);
                var1 = 'content-inventory-overlay-text-secondary';
                _fun118396_ip = 607;
                continue _fun118396;
            case 544:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 2;
                var4 = var8[var0];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var0 = var8[var0];
                var0 = var6.bind(var7)(var0);
                var0 = var0.t;
                var0 = var0.mbs4NX;
                var2 = var4.bind(var5)(var0);
                var1 = 'text-feedback-positive';
            case 607:
                var0 = {};
                var0.formattedStartDate = var3;
                var0.relativeLabel = var2;
                var0.labelColor = var1;
                return var0;
            case 626:
                var0 = {
                    'formattedStartDate': '',
                    'relativeLabel': null,
                    'labelColor': 'text-muted'
                };
                return var0;
        }
    };
    var2.useGameUpdateTime = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3004, 3091, 1234, 2491, 2]);