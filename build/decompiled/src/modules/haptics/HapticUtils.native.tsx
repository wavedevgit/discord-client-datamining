// modules/haptics/HapticUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun28193: for (var _fun28193_ip = 0;;) switch (_fun28193_ip) {
            case 0:
                var0 = global;
                var2 = var0.parseInt;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var0 = var1[var0];
                var1 = undefined;
                var3 = var3.bind(var1)(var0);
                var0 = var3.getSystemVersion;
                var0 = var0.bind(var3)();
                var1 = var2.bind(var1)(var0);
                var0 = 29;
                var1 = var1 < var0;
                var0 = 'effectTick';
                if (!var1) {
                    _fun28193_ip = 70;
                    continue _fun28193
                }
            case 64:
                var0 = 'impactLight';
            case 70:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 4;
    var3 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var3);
    var6 = var7.fileFinishedImporting;
    var3 = 'modules/haptics/HapticUtils.native.tsx';
    var3 = var6.bind(var7)(var3);
    var3 = 0;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var2.HapticFeedbackTypes = var3;
    var1 = function arg0() {
        _fun28194: for (var _fun28194_ip = 0;;) switch (_fun28194_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var5 = 0;
                var1 = var0[var5];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var1 = var1.IMPACT_LIGHT;
                if (!(var1 !== var2)) {
                    _fun28194_ip = 612;
                    continue _fun28194
                }
            case 40:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var0)(var1);
                var1 = var1.IMPACT_MEDIUM;
                if (!(var1 !== var2)) {
                    _fun28194_ip = 536;
                    continue _fun28194
                }
            case 70:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var0)(var1);
                var1 = var1.IMPACT_HEAVY;
                if (!(var1 !== var2)) {
                    _fun28194_ip = 494;
                    continue _fun28194
                }
            case 100:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var0)(var1);
                var1 = var1.NOTIFICATION_ERROR;
                if (!(var1 !== var2)) {
                    _fun28194_ip = 452;
                    continue _fun28194
                }
            case 130:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var0)(var1);
                var1 = var1.DRAG_AND_DROP_START;
                if (!(var1 !== var2)) {
                    _fun28194_ip = 375;
                    continue _fun28194
                }
            case 160:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var0)(var1);
                var1 = var1.DRAG_AND_DROP_END;
                if (!(var1 !== var2)) {
                    _fun28194_ip = 296;
                    continue _fun28194
                }
            case 187:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var0)(var1);
                var1 = var1.DRAG_AND_DROP_MOVE;
                if (!(var1 === var2)) {
                    _fun28194_ip = 684;
                    continue _fun28194
                }
            case 217:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.trigger;
                var5 = _closure1_slot0;
                var1 = 2;
                var1 = var6[var1];
                var5 = var5.bind(var0)(var1);
                var1 = var5.isAndroid;
                var5 = var1.bind(var5)();
                var1 = 'impactMedium';
                if (!var5) {
                    _fun28194_ip = 286;
                    continue _fun28194
                }
            case 278:
                var5 = _closure1_slot3;
                var1 = var5.bind(var0)();
            case 286:
                var1 = var2.bind(var3)(var1);
                _fun28194_ip = 684;
                continue _fun28194;
            case 296:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.trigger;
                var5 = _closure1_slot0;
                var1 = 2;
                var1 = var6[var1];
                var5 = var5.bind(var0)(var1);
                var1 = var5.isAndroid;
                var5 = var1.bind(var5)();
                var1 = 'notificationSuccess';
                if (!var5) {
                    _fun28194_ip = 365;
                    continue _fun28194
                }
            case 357:
                var5 = _closure1_slot3;
                var1 = var5.bind(var0)();
            case 365:
                var1 = var2.bind(var3)(var1);
                _fun28194_ip = 684;
                continue _fun28194;
            case 375:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.trigger;
                var5 = _closure1_slot0;
                var1 = 2;
                var1 = var6[var1];
                var5 = var5.bind(var0)(var1);
                var1 = var5.isAndroid;
                var5 = var1.bind(var5)();
                var1 = 'impactHeavy';
                if (!var5) {
                    _fun28194_ip = 442;
                    continue _fun28194
                }
            case 436:
                var1 = 'impactMedium';
            case 442:
                var1 = var2.bind(var3)(var1);
                _fun28194_ip = 684;
                continue _fun28194;
            case 452:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.trigger;
                var1 = 'notificationError';
                var1 = var2.bind(var3)(var1);
                _fun28194_ip = 684;
                continue _fun28194;
            case 494:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.trigger;
                var1 = 'impactHeavy';
                var1 = var2.bind(var3)(var1);
                _fun28194_ip = 684;
                continue _fun28194;
            case 536:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.trigger;
                var5 = _closure1_slot0;
                var1 = 2;
                var1 = var6[var1];
                var5 = var5.bind(var0)(var1);
                var1 = var5.isAndroid;
                var5 = var1.bind(var5)();
                var1 = 'impactMedium';
                if (!var5) {
                    _fun28194_ip = 605;
                    continue _fun28194
                }
            case 597:
                var5 = _closure1_slot3;
                var1 = var5.bind(var0)();
            case 605:
                var1 = var2.bind(var3)(var1);
                _fun28194_ip = 684;
                continue _fun28194;
            case 612:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.trigger;
                var5 = _closure1_slot0;
                var1 = 2;
                var1 = var6[var1];
                var5 = var5.bind(var0)(var1);
                var1 = var5.isAndroid;
                var5 = var1.bind(var5)();
                var1 = 'selection';
                if (!var5) {
                    _fun28194_ip = 679;
                    continue _fun28194
                }
            case 671:
                var4 = _closure1_slot3;
                var1 = var4.bind(var0)();
            case 679:
                var1 = var2.bind(var3)(var1);
            case 684:
                return var0;
        }
    };
    var2.triggerHapticFeedback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3271, 3272, 478, 1309, 2]);