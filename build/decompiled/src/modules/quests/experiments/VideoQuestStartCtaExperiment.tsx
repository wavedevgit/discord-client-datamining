// modules/quests/experiments/VideoQuestStartCtaExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var5 = 0;
    var3 = var7[var5];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot2 = var3;
    var4 = {};
    var4.WATCH = var5;
    var3 = 'WATCH';
    var4[var5] = var3;
    var3 = 1;
    var4.WATCH_WITH_TIME = var3;
    var5 = 'WATCH_WITH_TIME';
    var4[var3] = var5;
    var _closure1_slot3 = var4;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.createApexExperiment;
    var3 = {
        'name': '2026-01-video-quest-start-cta',
        'kind': 'user'
    };
    var9 = {
        'enabled': false,
        'variant': null
    };
    var3.defaultConfig = var9;
    var9 = {};
    var10 = {
        'enabled': false,
        'variant': null
    };
    var9[0] = var10;
    var10 = {};
    var10.enabled = var11;
    var12 = var4.WATCH;
    var10.variant = var12;
    var9[1] = var10;
    var10 = {};
    var10.enabled = var11;
    var11 = var4.WATCH_WITH_TIME;
    var10.variant = var11;
    var9[2] = var10;
    var3.variations = var9;
    var3 = var5.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/experiments/VideoQuestStartCtaExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var2.VideoQuestStartCtaExperimentVariant = var4;
    var2.VideoQuestStartCtaExperiment = var3;
    var1 = function arg0() {
        _fun78867: for (var _fun78867_ip = 0;;) switch (_fun78867_ip) {
            case 0:
                var3 = _closure1_slot4;
                var2 = var3.getConfig;
                var0 = {};
                var4 = _closure1_slot2;
                var4 = var4.QUEST_PRIMARY_CTA;
                var0.location = var4;
                var0 = var2.bind(var3)(var0);
                var4 = var0.enabled;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                if (var4) {
                    _fun78867_ip = 103;
                    continue _fun78867
                }
            case 50:
                var4 = 3;
                var5 = var2[var4];
                var7 = undefined;
                var5 = var3.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var2[var4];
                var4 = var3.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.umdNin;
                var4 = var5.bind(var6)(var4);
                return var4;
            case 103:
                var9 = 2;
                var2 = var2[var9];
                var8 = undefined;
                var4 = var3.bind(var8)(var2);
                var3 = var4.getQuestTaskDetails;
                var2 = arg0;
                var7 = var3.bind(var4)(var2);
                var2 = var0.variant;
                var0 = _closure1_slot3;
                var0 = var0.WATCH_WITH_TIME;
                if (!(var2 !== var0)) {
                    _fun78867_ip = 209;
                    continue _fun78867
                }
            case 150:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var2 = var5[var0];
                var2 = var4.bind(var8)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var5[var0];
                var0 = var4.bind(var8)(var0);
                var0 = var0.t;
                var0 = var0["6fpk4L"];
                var0 = var2.bind(var3)(var0);
                _fun78867_ip = 292;
                continue _fun78867;
            case 209:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var2 = var5[var1];
                var2 = var6.bind(var8)(var2);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var1 = var5[var1];
                var1 = var6.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.GNsKiW;
                var1 = {};
                var5 = var5[var9];
                var6 = var6.bind(var8)(var5);
                var5 = var6.formatWatchTaskRemainingTime;
                var5 = var5.bind(var6)(var7);
                var1.remainTime = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 292:
                return var0;
        }
    };
    var2.getVideoQuestStartCtaExperimentText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5223, 1301, 5262, 1234, 2]);