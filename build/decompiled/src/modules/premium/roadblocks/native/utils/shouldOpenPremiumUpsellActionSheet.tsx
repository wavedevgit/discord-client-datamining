// modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _maybeOpenPremiumUpsellActionSheet, environment: var1
        _fun61367: for (var _fun61367_ip = 0;;) switch (_fun61367_ip) {
            case 0:
                var5 = arg1;
                var1 = null;
                var0 = var1 == var5;
                if (var0) {
                    _fun61367_ip = 60;
                    continue _fun61367
                }
            case 12:
                var1 = var1 != var5;
                if (!var1) {
                    _fun61367_ip = 57;
                    continue _fun61367
                }
            case 19:
                var4 = var5.getCurrentConfig;
                var3 = {};
                var2 = 'isUpsellEnabled';
                var3.location = var2;
                var2 = {};
                var6 = true;
                var2.autoTrackExposure = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1 = var2.enabled;
            case 57:
                var0 = var1;
            case 60:
                if (var0) {
                    _fun61367_ip = 86;
                    continue _fun61367
                }
            case 63:
                var3 = _closure1_slot3;
                var2 = var3.get;
                var1 = 'premium_roadblocks';
                var0 = var2.bind(var3)(var1);
            case 86:
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun61367_ip = 130;
                    continue _fun61367
                }
            case 95:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 130:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: maybeOpenPremiumUpsellActionSheet, environment: var1
        _fun61368: for (var _fun61368_ip = 0;;) switch (_fun61368_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.initialUpsellKey;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 2;
                var1 = var1[var5];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.UPLOAD;
                if (!(var1 !== var3)) {
                    _fun61368_ip = 386;
                    continue _fun61368
                }
            case 53:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.GLOBAL_EMOJI;
                if (!(var1 !== var3)) {
                    _fun61368_ip = 343;
                    continue _fun61368
                }
            case 89:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.ANIMATED_EMOJI;
                if (!(var1 !== var3)) {
                    _fun61368_ip = 300;
                    continue _fun61368
                }
            case 125:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.SOUNDBOARD;
                if (!(var1 !== var3)) {
                    _fun61368_ip = 257;
                    continue _fun61368
                }
            case 158:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.APP_ICONS;
                if (!(var1 !== var3)) {
                    _fun61368_ip = 195;
                    continue _fun61368
                }
            case 191:
                var1 = false;
                return var1;
            case 195:
                var4 = _closure1_slot4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var3 = var1.APP_ICONS;
                var1 = 4;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.PremiumAppIconsUpsellExperiment;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            case 257:
                var3 = _closure1_slot4;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.SOUNDBOARD_EVERYWHERE;
                var1 = var3.bind(var2)(var1);
                return var1;
            case 300:
                var3 = _closure1_slot4;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.ANIMATED_EMOJIS;
                var1 = var3.bind(var2)(var1);
                return var1;
            case 343:
                var3 = _closure1_slot4;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.EMOJIS_EVERYWHERE;
                var1 = var3.bind(var2)(var1);
                return var1;
            case 386:
                var1 = _closure1_slot4;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var0 = var3.bind(var2)(var0);
                var0 = var0.EntitlementFeatureNames;
                var0 = var0.INCREASED_FILE_UPLOAD_SIZE;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3964, 7580, 670, 7582, 7591, 2]);