// ../discord_common/js/packages/apex/ApexExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/apex/ApexExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: createApexExperimentCommon, environment: var1
        var2 = arg0;
        var3 = arg1;
        var _closure2_slot0 = var3;
        var0 = arg2;
        var _closure2_slot1 = var0;
        var0 = arg3;
        var _closure2_slot2 = var0;
        var0 = var2.name;
        var _closure2_slot3 = var0;
        var0 = var2.kind;
        var _closure2_slot4 = var0;
        var0 = var2.variations;
        var _closure2_slot5 = var0;
        var0 = var2.defaultConfig;
        var _closure2_slot6 = var0;
        var0 = var3.registerExperiment;
        var0 = var0.bind(var3)(var2);
        var0 = {};
        var0.definition = var2;
        var2 = function(arg0) { // Original name: useConfig, environment: var1
            _fun14164: for (var _fun14164_ip = 0;;) switch (_fun14164_ip) {
                case 0:
                    var9 = arg0;
                    var _closure3_slot0 = var9;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot4;
                    var6 = undefined;
                    var13 = var3.bind(var6)(var2, var9);
                    var _closure3_slot1 = var13;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var5 = 2;
                    var2 = var2[var5];
                    var10 = var3.bind(var6)(var2);
                    var8 = var10.useStateFromStoresArray;
                    var2 = _closure2_slot0;
                    var7 = new Array(1);
                    var7[0] = var2;
                    var3 = new Array(1);
                    var3[0] = var13;
                    var2 = function() { // Environment: var1
                        var4 = _closure2_slot0;
                        var3 = var4.getEvaluationAndAssignment;
                        var2 = _closure2_slot4;
                        var1 = _closure3_slot1;
                        var0 = _closure2_slot3;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var3 = var8.bind(var10)(var7, var2, var3);
                    var2 = _closure1_slot2;
                    var3 = var2.bind(var6)(var3, var5);
                    var2 = 0;
                    var12 = var3[var2];
                    var _closure3_slot2 = var12;
                    var2 = 1;
                    var5 = var3[var2];
                    var2 = null;
                    var7 = var2 == var5;
                    var3 = undefined;
                    if (var7) {
                        _fun14164_ip = 137;
                        continue _fun14164
                    }
                case 131:
                    var3 = var5.variantId;
                case 137:
                    var8 = var2 == var5;
                    var7 = undefined;
                    if (var8) {
                        _fun14164_ip = 152;
                        continue _fun14164
                    }
                case 146:
                    var7 = var5.trackedVariantId;
                case 152:
                    var11 = var3;
                    if (!(var2 != var7)) {
                        _fun14164_ip = 162;
                        continue _fun14164
                    }
                case 159:
                    var11 = var7;
                case 162:
                    var _closure3_slot3 = var11;
                    var7 = var2 == var5;
                    var10 = undefined;
                    if (var7) {
                        _fun14164_ip = 181;
                        continue _fun14164
                    }
                case 175:
                    var10 = var5.revision;
                case 181:
                    var _closure3_slot4 = var10;
                    var7 = var2 == var5;
                    var8 = undefined;
                    if (var7) {
                        _fun14164_ip = 200;
                        continue _fun14164
                    }
                case 194:
                    var8 = var5.isOverride;
                case 200:
                    var _closure3_slot5 = var8;
                    var14 = var2 == var5;
                    var7 = undefined;
                    if (var14) {
                        _fun14164_ip = 219;
                        continue _fun14164
                    }
                case 213:
                    var7 = var5.exposureTrackingEnabled;
                case 219:
                    var _closure3_slot6 = var7;
                    var5 = _closure1_slot3;
                    var4 = new Array(7);
                    var4[0] = var13;
                    var4[1] = var12;
                    var4[2] = var11;
                    var4[3] = var10;
                    var9 = var9.location;
                    var4[4] = var9;
                    var4[5] = var8;
                    var4[6] = var7;
                    var1 = function() { // Environment: var1
                        _fun14166: for (var _fun14166_ip = 0;;) switch (_fun14166_ip) {
                            case 0:
                                var1 = _closure3_slot2;
                                var3 = null;
                                var1 = var3 != var1;
                                if (!var1) {
                                    _fun14166_ip = 24;
                                    continue _fun14166
                                }
                            case 16:
                                var2 = _closure3_slot3;
                                var1 = var3 != var2;
                            case 24:
                                if (!var1) {
                                    _fun14166_ip = 35;
                                    continue _fun14166
                                }
                            case 27:
                                var2 = _closure3_slot4;
                                var1 = var3 != var2;
                            case 35:
                                if (!var1) {
                                    _fun14166_ip = 48;
                                    continue _fun14166
                                }
                            case 38:
                                var3 = _closure3_slot5;
                                var2 = false;
                                var1 = var2 === var3;
                            case 48:
                                if (!var1) {
                                    _fun14166_ip = 61;
                                    continue _fun14166
                                }
                            case 51:
                                var3 = _closure3_slot6;
                                var2 = true;
                                var1 = var2 === var3;
                            case 61:
                                if (!var1) {
                                    _fun14166_ip = 117;
                                    continue _fun14166
                                }
                            case 64:
                                var8 = _closure2_slot0;
                                var7 = var8.trackExperimentExposure;
                                var15 = _closure3_slot2;
                                var14 = _closure2_slot3;
                                var2 = _closure3_slot0;
                                var13 = var2.location;
                                var12 = _closure2_slot4;
                                var11 = _closure3_slot4;
                                var10 = _closure3_slot3;
                                var9 = _closure3_slot1;
                                var16 = var8;
                                var0 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8);
                            case 117:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var5.bind(var6)(var1, var4);
                    if (!(var2 != var3)) {
                        _fun14164_ip = 297;
                        continue _fun14164
                    }
                case 279:
                    var1 = _closure2_slot5;
                    var1 = var1[var3];
                    if (!(var2 == var1)) {
                        _fun14164_ip = 295;
                        continue _fun14164
                    }
                case 291:
                    var1 = _closure2_slot6;
                case 295:
                    return var1;
                case 297:
                    var0 = _closure2_slot6;
                    return var0;
            }
        };
        var0.useConfig = var2;
        var1 = function(arg0) { // Original name: getConfig, environment: var1
            _fun14167: for (var _fun14167_ip = 0;;) switch (_fun14167_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure2_slot1;
                    var5 = _closure2_slot4;
                    var6 = undefined;
                    var11 = var2.bind(var6)(var5, var1);
                    var4 = _closure2_slot0;
                    var3 = var4.getEvaluationAndAssignment;
                    var2 = _closure2_slot3;
                    var4 = var3.bind(var4)(var5, var11, var2);
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3.bind(var6)(var4, var2);
                    var2 = 0;
                    var10 = var3[var2];
                    var2 = 1;
                    var4 = var3[var2];
                    var2 = null;
                    var5 = var2 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun14167_ip = 89;
                        continue _fun14167
                    }
                case 83:
                    var3 = var4.variantId;
                case 89:
                    var7 = var2 == var4;
                    var5 = undefined;
                    if (var7) {
                        _fun14167_ip = 104;
                        continue _fun14167
                    }
                case 98:
                    var5 = var4.trackedVariantId;
                case 104:
                    var9 = var3;
                    if (!(var2 != var5)) {
                        _fun14167_ip = 114;
                        continue _fun14167
                    }
                case 111:
                    var9 = var5;
                case 114:
                    var5 = var2 == var4;
                    var8 = undefined;
                    if (var5) {
                        _fun14167_ip = 129;
                        continue _fun14167
                    }
                case 123:
                    var8 = var4.revision;
                case 129:
                    var5 = var2 == var4;
                    var7 = undefined;
                    if (var5) {
                        _fun14167_ip = 144;
                        continue _fun14167
                    }
                case 138:
                    var7 = var4.isOverride;
                case 144:
                    var5 = var2 == var4;
                    var6 = undefined;
                    if (var5) {
                        _fun14167_ip = 159;
                        continue _fun14167
                    }
                case 153:
                    var6 = var4.exposureTrackingEnabled;
                case 159:
                    var4 = var2 != var10;
                    if (!var4) {
                        _fun14167_ip = 170;
                        continue _fun14167
                    }
                case 166:
                    var4 = var2 != var9;
                case 170:
                    if (!var4) {
                        _fun14167_ip = 177;
                        continue _fun14167
                    }
                case 173:
                    var4 = var2 != var8;
                case 177:
                    if (!var4) {
                        _fun14167_ip = 186;
                        continue _fun14167
                    }
                case 180:
                    var5 = false;
                    var4 = var5 === var7;
                case 186:
                    if (!var4) {
                        _fun14167_ip = 195;
                        continue _fun14167
                    }
                case 189:
                    var5 = true;
                    var4 = var5 === var6;
                case 195:
                    if (!var4) {
                        _fun14167_ip = 240;
                        continue _fun14167
                    }
                case 198:
                    var7 = _closure2_slot0;
                    var6 = var7.trackExperimentExposure;
                    var17 = _closure2_slot3;
                    var16 = var1.location;
                    var15 = _closure2_slot4;
                    var19 = var7;
                    var18 = var10;
                    var14 = var8;
                    var13 = var9;
                    var12 = var11;
                    var1 = var19[var6](var18, var17, var16, var15, var14, var13, var12, var11);
                case 240:
                    if (!(var2 != var3)) {
                        _fun14167_ip = 262;
                        continue _fun14167
                    }
                case 244:
                    var1 = _closure2_slot5;
                    var1 = var1[var3];
                    if (!(var2 == var1)) {
                        _fun14167_ip = 260;
                        continue _fun14167
                    }
                case 256:
                    var1 = _closure2_slot6;
                case 260:
                    return var1;
                case 262:
                    var0 = _closure2_slot6;
                    return var0;
            }
        };
        var0.getConfig = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 566, 2]);