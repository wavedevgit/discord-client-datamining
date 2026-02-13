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
    var1 = function arg0, arg1, arg2, arg3() {
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
        var2 = function arg0() {
            _fun14175: for (var _fun14175_ip = 0;;) switch (_fun14175_ip) {
                case 0:
                    var10 = arg0;
                    var _closure3_slot0 = var10;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot4;
                    var7 = undefined;
                    var14 = var3.bind(var7)(var2, var10);
                    var _closure3_slot1 = var14;
                    var2 = 'user';
                    var2 = var3.bind(var7)(var2, var10);
                    var _closure3_slot2 = var2;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var4 = 2;
                    var3 = var3[var4];
                    var9 = var6.bind(var7)(var3);
                    var8 = var9.useStateFromStoresArray;
                    var3 = _closure2_slot0;
                    var6 = new Array(1);
                    var6[0] = var3;
                    var3 = new Array(2);
                    var3[0] = var14;
                    var3[1] = var2;
                    var2 = function() { // Environment: var1
                        var5 = _closure2_slot0;
                        var4 = var5.getEvaluationAndAssignment;
                        var9 = _closure2_slot4;
                        var8 = _closure3_slot1;
                        var7 = _closure2_slot3;
                        var6 = _closure3_slot2;
                        var10 = var5;
                        var0 = var10[var4](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var3 = var8.bind(var9)(var6, var2, var3);
                    var2 = _closure1_slot2;
                    var3 = var2.bind(var7)(var3, var4);
                    var2 = 0;
                    var13 = var3[var2];
                    var _closure3_slot3 = var13;
                    var2 = 1;
                    var6 = var3[var2];
                    var2 = null;
                    var4 = var2 == var6;
                    var3 = undefined;
                    if (var4) {
                        _fun14175_ip = 155;
                        continue _fun14175
                    }
                case 149:
                    var3 = var6.variantId;
                case 155:
                    var8 = var2 == var6;
                    var4 = undefined;
                    if (var8) {
                        _fun14175_ip = 170;
                        continue _fun14175
                    }
                case 164:
                    var4 = var6.trackedVariantId;
                case 170:
                    var12 = var3;
                    if (!(var2 != var4)) {
                        _fun14175_ip = 180;
                        continue _fun14175
                    }
                case 177:
                    var12 = var4;
                case 180:
                    var _closure3_slot4 = var12;
                    var4 = var2 == var6;
                    var11 = undefined;
                    if (var4) {
                        _fun14175_ip = 199;
                        continue _fun14175
                    }
                case 193:
                    var11 = var6.revision;
                case 199:
                    var _closure3_slot5 = var11;
                    var4 = var2 == var6;
                    var9 = undefined;
                    if (var4) {
                        _fun14175_ip = 218;
                        continue _fun14175
                    }
                case 212:
                    var9 = var6.isOverride;
                case 218:
                    var _closure3_slot6 = var9;
                    var4 = var2 == var6;
                    var8 = undefined;
                    if (var4) {
                        _fun14175_ip = 237;
                        continue _fun14175
                    }
                case 231:
                    var8 = var6.exposureTrackingEnabled;
                case 237:
                    var _closure3_slot7 = var8;
                    var15 = var2 == var6;
                    var4 = undefined;
                    if (var15) {
                        _fun14175_ip = 256;
                        continue _fun14175
                    }
                case 250:
                    var4 = var6.useAsEligibility;
                case 256:
                    var _closure3_slot8 = var4;
                    var6 = _closure1_slot3;
                    var5 = new Array(8);
                    var5[0] = var14;
                    var5[1] = var13;
                    var5[2] = var12;
                    var5[3] = var11;
                    var10 = var10.location;
                    var5[4] = var10;
                    var5[5] = var9;
                    var5[6] = var8;
                    var5[7] = var4;
                    var1 = function() { // Environment: var1
                        _fun14177: for (var _fun14177_ip = 0;;) switch (_fun14177_ip) {
                            case 0:
                                var1 = _closure3_slot3;
                                var3 = null;
                                var1 = var3 != var1;
                                if (!var1) {
                                    _fun14177_ip = 24;
                                    continue _fun14177
                                }
                            case 16:
                                var2 = _closure3_slot4;
                                var1 = var3 != var2;
                            case 24:
                                if (!var1) {
                                    _fun14177_ip = 35;
                                    continue _fun14177
                                }
                            case 27:
                                var2 = _closure3_slot5;
                                var1 = var3 != var2;
                            case 35:
                                if (!var1) {
                                    _fun14177_ip = 48;
                                    continue _fun14177
                                }
                            case 38:
                                var3 = _closure3_slot6;
                                var2 = false;
                                var1 = var2 === var3;
                            case 48:
                                if (!var1) {
                                    _fun14177_ip = 61;
                                    continue _fun14177
                                }
                            case 51:
                                var3 = _closure3_slot7;
                                var2 = true;
                                var1 = var2 === var3;
                            case 61:
                                if (!var1) {
                                    _fun14177_ip = 74;
                                    continue _fun14177
                                }
                            case 64:
                                var3 = _closure3_slot8;
                                var2 = true;
                                var1 = var2 !== var3;
                            case 74:
                                if (!var1) {
                                    _fun14177_ip = 130;
                                    continue _fun14177
                                }
                            case 77:
                                var8 = _closure2_slot0;
                                var7 = var8.trackExperimentExposure;
                                var15 = _closure3_slot3;
                                var14 = _closure2_slot3;
                                var2 = _closure3_slot0;
                                var13 = var2.location;
                                var12 = _closure2_slot4;
                                var11 = _closure3_slot5;
                                var10 = _closure3_slot4;
                                var9 = _closure3_slot1;
                                var16 = var8;
                                var0 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8);
                            case 130:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var6.bind(var7)(var1, var5);
                    if (!(var2 != var3)) {
                        _fun14175_ip = 344;
                        continue _fun14175
                    }
                case 320:
                    var1 = true;
                    if (!(var1 !== var4)) {
                        _fun14175_ip = 344;
                        continue _fun14175
                    }
                case 326:
                    var1 = _closure2_slot5;
                    var1 = var1[var3];
                    if (!(var2 == var1)) {
                        _fun14175_ip = 342;
                        continue _fun14175
                    }
                case 338:
                    var1 = _closure2_slot6;
                case 342:
                    return var1;
                case 344:
                    var0 = _closure2_slot6;
                    return var0;
            }
        };
        var0.useConfig = var2;
        var1 = function arg0() {
            _fun14178: for (var _fun14178_ip = 0;;) switch (_fun14178_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure2_slot1;
                    var3 = _closure2_slot4;
                    var4 = undefined;
                    var12 = var2.bind(var4)(var3, var1);
                    var2 = 'guild';
                    var7 = undefined;
                    if (!(var2 === var3)) {
                        _fun14178_ip = 57;
                        continue _fun14178
                    }
                case 32:
                    var5 = _closure2_slot1;
                    var3 = {};
                    var2 = var1.location;
                    var3.location = var2;
                    var2 = 'user';
                    var7 = var5.bind(var4)(var2, var3);
                case 57:
                    var6 = _closure2_slot0;
                    var5 = var6.getEvaluationAndAssignment;
                    var19 = _closure2_slot4;
                    var17 = _closure2_slot3;
                    var20 = var6;
                    var18 = var12;
                    var16 = var7;
                    var5 = var20[var5](var19, var18, var17, var16, var15);
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3.bind(var4)(var5, var2);
                    var2 = 0;
                    var11 = var3[var2];
                    var2 = 1;
                    var5 = var3[var2];
                    var2 = null;
                    var6 = var2 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun14178_ip = 134;
                        continue _fun14178
                    }
                case 128:
                    var3 = var5.variantId;
                case 134:
                    var7 = var2 == var5;
                    var6 = undefined;
                    if (var7) {
                        _fun14178_ip = 149;
                        continue _fun14178
                    }
                case 143:
                    var6 = var5.trackedVariantId;
                case 149:
                    var10 = var3;
                    if (!(var2 != var6)) {
                        _fun14178_ip = 159;
                        continue _fun14178
                    }
                case 156:
                    var10 = var6;
                case 159:
                    var6 = var2 == var5;
                    var9 = undefined;
                    if (var6) {
                        _fun14178_ip = 174;
                        continue _fun14178
                    }
                case 168:
                    var9 = var5.revision;
                case 174:
                    var6 = var2 == var5;
                    var8 = undefined;
                    if (var6) {
                        _fun14178_ip = 189;
                        continue _fun14178
                    }
                case 183:
                    var8 = var5.isOverride;
                case 189:
                    var6 = var2 == var5;
                    var7 = undefined;
                    if (var6) {
                        _fun14178_ip = 204;
                        continue _fun14178
                    }
                case 198:
                    var7 = var5.exposureTrackingEnabled;
                case 204:
                    var6 = var2 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun14178_ip = 219;
                        continue _fun14178
                    }
                case 213:
                    var4 = var5.useAsEligibility;
                case 219:
                    var5 = var2 != var11;
                    if (!var5) {
                        _fun14178_ip = 230;
                        continue _fun14178
                    }
                case 226:
                    var5 = var2 != var10;
                case 230:
                    if (!var5) {
                        _fun14178_ip = 237;
                        continue _fun14178
                    }
                case 233:
                    var5 = var2 != var9;
                case 237:
                    if (!var5) {
                        _fun14178_ip = 246;
                        continue _fun14178
                    }
                case 240:
                    var6 = false;
                    var5 = var6 === var8;
                case 246:
                    if (!var5) {
                        _fun14178_ip = 255;
                        continue _fun14178
                    }
                case 249:
                    var6 = true;
                    var5 = var6 === var7;
                case 255:
                    if (!var5) {
                        _fun14178_ip = 264;
                        continue _fun14178
                    }
                case 258:
                    var6 = true;
                    var5 = var6 !== var4;
                case 264:
                    if (!var5) {
                        _fun14178_ip = 309;
                        continue _fun14178
                    }
                case 267:
                    var8 = _closure2_slot0;
                    var7 = var8.trackExperimentExposure;
                    var18 = _closure2_slot3;
                    var17 = var1.location;
                    var16 = _closure2_slot4;
                    var20 = var8;
                    var19 = var11;
                    var15 = var9;
                    var14 = var10;
                    var13 = var12;
                    var1 = var20[var7](var19, var18, var17, var16, var15, var14, var13, var12);
                case 309:
                    if (!(var2 != var3)) {
                        _fun14178_ip = 337;
                        continue _fun14178
                    }
                case 313:
                    var1 = true;
                    if (!(var1 !== var4)) {
                        _fun14178_ip = 337;
                        continue _fun14178
                    }
                case 319:
                    var1 = _closure2_slot5;
                    var1 = var1[var3];
                    if (!(var2 == var1)) {
                        _fun14178_ip = 335;
                        continue _fun14178
                    }
                case 331:
                    var1 = _closure2_slot6;
                case 335:
                    return var1;
                case 337:
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