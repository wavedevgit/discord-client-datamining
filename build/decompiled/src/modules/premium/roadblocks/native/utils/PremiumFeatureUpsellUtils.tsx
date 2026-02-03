// modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun61579: for (var _fun61579_ip = 0;;) switch (_fun61579_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.featureEnabledPredicate;
                var _closure2_slot0 = var2;
                var8 = var1.FeatureExperiment;
                var3 = var1.experimentEnabledPredicate;
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun61579_ip = 38;
                    continue _fun61579
                }
            case 33:
                var3 = function arg0() {
                    var0 = arg0;
                    var0 = var0.enabled;
                    return var0;
                };
            case 38:
                var7 = _closure1_slot3;
                var5 = var7.useContext;
                var9 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 4;
                var4 = var6[var4];
                var4 = var9.bind(var2)(var4);
                var10 = var5.bind(var7)(var4);
                var5 = _closure1_slot0;
                var4 = 5;
                var7 = var6[var4];
                var12 = var5.bind(var2)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var9 = var11.bind(var12)(var9, var7);
                var4 = var6[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.get;
                    var0 = 'premium_roadblocks';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var4.bind(var5)(var1, var0);
                var4 = null;
                var5 = var4 == var8;
                var1 = undefined;
                if (var5) {
                    _fun61579_ip = 219;
                    continue _fun61579
                }
            case 168:
                var7 = var8.useExperiment;
                var6 = {};
                var5 = 'useIsFeatureUpsellEnabled';
                var6.location = var5;
                var5 = {};
                var11 = !var9;
                if (!var11) {
                    _fun61579_ip = 197;
                    continue _fun61579
                }
            case 194:
                var11 = var10;
            case 197:
                var5.autoTrackExposure = var11;
                if (var9) {
                    _fun61579_ip = 208;
                    continue _fun61579
                }
            case 205:
                var9 = !var10;
            case 208:
                var5.disable = var9;
                var1 = var7.bind(var8)(var6, var5);
            case 219:
                if (var0) {
                    _fun61579_ip = 226;
                    continue _fun61579
                }
            case 222:
                var0 = var4 == var1;
            case 226:
                if (var0) {
                    _fun61579_ip = 234;
                    continue _fun61579
                }
            case 229:
                var0 = var3.bind(var2)(var1);
            case 234:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun61583: for (var _fun61583_ip = 0;;) switch (_fun61583_ip) {
            case 0:
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.SoundboardSoundGridSectionType;
                var0 = var0.GUILD;
                var0 = var2 === var0;
                if (!var0) {
                    _fun61583_ip = 69;
                    continue _fun61583
                }
            case 52:
                var1 = var1.guild;
                var2 = var1.id;
                var1 = arg0;
                var0 = var2 !== var1;
            case 69:
                return var0;
        }
    };
    var2.isSoundboardSectionNitroLocked = var3;
    var3 = function() {
        var2 = _closure1_slot6;
        var1 = {};
        var4 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.canUploadLargeFiles;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.featureEnabledPredicate = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 7;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var4 = var4.PremiumFileUploadUpsellExperiment;
        var1.FeatureExperiment = var4;
        var3 = function arg0() {
            var0 = arg0;
            var0 = var0.showInlineUpsell;
            return var0;
        };
        var1.experimentEnabledPredicate = var3;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useIsPremiumFileUploadUpsellEnabled = var3;
    var3 = function() {
        var2 = _closure1_slot6;
        var1 = {};
        var3 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.canUsePremiumAppIcons;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.featureEnabledPredicate = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 7;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = var3.PremiumAppIconsUpsellExperiment;
        var1.FeatureExperiment = var3;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useIsPremiumAppIconUpsellEnabled = var3;
    var1 = function arg0() {
        _fun61589: for (var _fun61589_ip = 0;;) switch (_fun61589_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 8;
                var1 = var1[var4];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.ANIMATED_EMOJIS;
                if (!(var1 !== var5)) {
                    _fun61589_ip = 518;
                    continue _fun61589
                }
            case 47:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var3.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.EMOJIS_EVERYWHERE;
                if (!(var1 !== var5)) {
                    _fun61589_ip = 484;
                    continue _fun61589
                }
            case 83:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var3.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.INCREASED_FILE_UPLOAD_SIZE;
                if (!(var1 !== var5)) {
                    _fun61589_ip = 450;
                    continue _fun61589
                }
            case 119:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var3.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.SOUNDBOARD_EVERYWHERE;
                if (!(var1 !== var5)) {
                    _fun61589_ip = 416;
                    continue _fun61589
                }
            case 155:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var3.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.CLIENT_THEMES;
                if (!(var1 !== var5)) {
                    _fun61589_ip = 382;
                    continue _fun61589
                }
            case 191:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var3.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.APP_ICONS;
                if (!(var1 !== var5)) {
                    _fun61589_ip = 348;
                    continue _fun61589
                }
            case 227:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var3.bind(var2)(var1);
                var1 = var1.EntitlementFeatureNames;
                var1 = var1.SAVED_MESSAGES;
                if (!(var1 !== var5)) {
                    _fun61589_ip = 314;
                    continue _fun61589
                }
            case 260:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var4 = var3.bind(var2)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = 'Missing featureName: ';
                var3 = var3.bind(var1)(var5);
                var1 = false;
                var1 = var4.bind(var2)(var1, var3);
                return var2;
            case 314:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.FOR_LATER;
                return var1;
            case 348:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.APP_ICONS;
                return var1;
            case 382:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.CLIENT_THEMES;
                return var1;
            case 416:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.SOUNDBOARD;
                return var1;
            case 450:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.UPLOAD;
                return var1;
            case 484:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.UpsellTypes;
                var1 = var1.GLOBAL_EMOJI;
                return var1;
            case 518:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.UpsellTypes;
                var0 = var0.ANIMATED_EMOJI;
                return var0;
        }
    };
    var2.getUpsellType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4005, 1621, 4799, 7628, 566, 3109, 7629, 7620, 670, 44, 2]);