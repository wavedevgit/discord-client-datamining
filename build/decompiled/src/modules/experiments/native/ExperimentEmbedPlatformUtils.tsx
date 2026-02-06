// modules/experiments/native/ExperimentEmbedPlatformUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var7 = var0.RegExp;
    var0 = var7.prototype;
    var3 = Object.create(var0, {
        constructor: {
            value: var7
        }
    });
    var11 = '^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$';
    var10 = 'i';
    var12 = var3;
    var0 = new var12[var7](var11, var10, var9);
    var3 = var0 instanceof Object ? var0 : var3;
    var0 = 7;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/native/ExperimentEmbedPlatformUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.EXPERIMENT_EMBED_URL_REGEX = var3;
    var1 = function arg0, arg1() {
        _fun79256: for (var _fun79256_ip = 0;;) switch (_fun79256_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = null;
                if (!(var5 != var3)) {
                    _fun79256_ip = 335;
                    continue _fun79256
                }
            case 21:
                var1 = global;
                var2 = var1.Number;
                var1 = var2.isNaN;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun79256_ip = 335;
                    continue _fun79256
                }
            case 46:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 3;
                var2 = var9[var1];
                var1 = undefined;
                var6 = var8.bind(var1)(var2);
                var2 = var6.getLegacyExperiments;
                var6 = var2.bind(var6)();
                var2 = var6.experiments;
                var7 = var6.overridesInfo;
                var6 = 4;
                var6 = var9[var6];
                var8 = var8.bind(var1)(var6);
                var6 = var8.getApexExperiments;
                var6 = var6.bind(var8)();
                var8 = var6.experiments;
                var6 = var6.overridesInfo;
                var2 = var2[var0];
                if (!(var5 == var2)) {
                    _fun79256_ip = 139;
                    continue _fun79256
                }
            case 135:
                var2 = var8[var0];
            case 139:
                if (!(var5 != var2)) {
                    _fun79256_ip = 333;
                    continue _fun79256
                }
            case 146:
                var7 = var7[var0];
                if (!(var5 == var7)) {
                    _fun79256_ip = 158;
                    continue _fun79256
                }
            case 154:
                var7 = var6[var0];
            case 158:
                var8 = var5 != var7;
                var6 = null;
                if (!var8) {
                    _fun79256_ip = 170;
                    continue _fun79256
                }
            case 167:
                var6 = var7;
            case 170:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 5;
                var7 = var9[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.getExperimentBuckets;
                var8 = var7.bind(var8)(var2);
                var7 = var8.find;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var7.bind(var8)(var4);
                if (!(var5 != var4)) {
                    _fun79256_ip = 331;
                    continue _fun79256
                }
            case 222:
                if (!(var5 != var6)) {
                    _fun79256_ip = 241;
                    continue _fun79256
                }
            case 226:
                var7 = var6.variantId;
                var6 = var4.value;
                if (!(var7 !== var6)) {
                    _fun79256_ip = 290;
                    continue _fun79256
                }
            case 241:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 6;
                var6 = var8[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.overrideBucket;
                var6 = var2.system;
                var4 = var4.value;
                var4 = var7.bind(var8)(var6, var0, var4);
                _fun79256_ip = 418;
                continue _fun79256;
            case 290:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.overrideBucket;
                var2 = var2.system;
                var2 = var3.bind(var4)(var2, var0, var5);
                _fun79256_ip = 418;
                continue _fun79256;
            case 331:
                return var1;
            case 333:
                return var1;
            case 335:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 0;
                var3 = var1[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = var4.openLazy;
                var5 = _closure1_slot0;
                var2 = 2;
                var2 = var1[var2];
                var5 = var5.bind(var6)(var2);
                var2 = 1;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var5.bind(var6)(var2, var1);
                var1 = {};
                var1.id = var0;
                var0 = 'ExperimentOverrideSheet';
                var0 = var3.bind(var4)(var2, var0, var1);
            case 418:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleCodedLinkExperimentEmbedTap = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3280, 10103, 1307, 9889, 9890, 3330, 1600, 2]);