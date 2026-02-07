// modules/experiments/ExperimentEmbedUtils.tsx
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
    var _closure1_slot3 = var3;
    var0 = 3;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/ExperimentEmbedUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.EXPERIMENT_EMBED_URL_REGEX = var3;
    var3 = function arg0() {
        var2 = _closure1_slot3;
        var1 = var2.test;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isExperimentEmbedURL = var3;
    var3 = function arg0() {
        _fun28451: for (var _fun28451_ip = 0;;) switch (_fun28451_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = _closure1_slot3;
                var2 = var1.bind(var2)(var0);
                var3 = null;
                var1 = var3 == var2;
                var0 = null;
                if (var1) {
                    _fun28451_ip = 56;
                    continue _fun28451
                }
            case 32:
                var4 = var2.length;
                var1 = 2;
                var1 = var4 < var1;
                var0 = null;
                if (var1) {
                    _fun28451_ip = 56;
                    continue _fun28451
                }
            case 49:
                var1 = 1;
                var0 = var2[var1];
            case 56:
                return var0;
        }
    };
    var2.getExperimentFromEmbedURL = var3;
    var3 = function arg0() {
        _fun28452: for (var _fun28452_ip = 0;;) switch (_fun28452_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = _closure1_slot3;
                var2 = var1.bind(var2)(var0);
                var3 = null;
                var1 = var3 == var2;
                var0 = null;
                if (var1) {
                    _fun28452_ip = 75;
                    continue _fun28452
                }
            case 32:
                var4 = var2.length;
                var1 = 3;
                var1 = var4 < var1;
                var0 = null;
                if (var1) {
                    _fun28452_ip = 75;
                    continue _fun28452
                }
            case 49:
                var1 = global;
                var4 = var1.parseInt;
                var1 = 2;
                var3 = var2[var1];
                var2 = undefined;
                var1 = 10;
                var0 = var4.bind(var2)(var3, var1);
            case 75:
                return var0;
        }
    };
    var2.getExperimentTreatmentFromEmbedURL = var3;
    var3 = function arg0, arg1() {
        _fun28453: for (var _fun28453_ip = 0;;) switch (_fun28453_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun28453_ip = 38;
                    continue _fun28453
                }
            case 12:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'dev://experiment/';
                var0 = var1.bind(var0)(var5);
                _fun28453_ip = 68;
                continue _fun28453;
            case 38:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'dev://experiment/';
                var1 = '/';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 68:
                return var0;
        }
    };
    var2.getURLForExperiment = var3;
    var3 = function arg0, arg1() {
        _fun28454: for (var _fun28454_ip = 0;;) switch (_fun28454_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                var0 = null;
                if (var3) {
                    _fun28454_ip = 191;
                    continue _fun28454
                }
            case 20:
                var3 = var1 == var4;
                var0 = null;
                if (var3) {
                    _fun28454_ip = 191;
                    continue _fun28454
                }
            case 32:
                var7 = var4.system;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = 0;
                var6 = var5[var8];
                var5 = undefined;
                var6 = var9.bind(var5)(var6);
                var6 = var6.ExperimentSystem;
                var6 = var6.LEGACY;
                if (!(var7 !== var6)) {
                    _fun28454_ip = 151;
                    continue _fun28454
                }
            case 78:
                var6 = var4.system;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var7.bind(var5)(var4);
                var4 = var4.ExperimentSystem;
                var4 = var4.APEX;
                var1 = null;
                if (!(var6 === var4)) {
                    _fun28454_ip = 149;
                    continue _fun28454
                }
            case 119:
                var7 = var2.variantId;
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var4 = 'Variant ';
                var1 = var6.bind(var4)(var7);
            case 149:
                _fun28454_ip = 188;
                continue _fun28454;
            case 151:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 1;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getExperimentBucketName;
                var2 = var2.bucket;
                var1 = var3.bind(var4)(var2);
            case 188:
                var0 = var1;
            case 191:
                return var0;
        }
    };
    var2.getExperimentServerAssignmentLabel = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getExperimentVariantsForDevTools;
        var0 = arg0;
        var2 = var1.bind(var2)(var0);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = var1.id;
            var0.id = var2;
            var2 = var1.label;
            var0.label = var2;
            var1 = var1.id;
            var0.value = var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getExperimentBuckets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1600, 3330, 3331, 2]);