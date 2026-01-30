// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = module;
    var _closure1_slot0 = var1;
    var1 = function() { // Environment: var0
        _fun13295: for (var _fun13295_ip = 0;;) switch (_fun13295_ip) {
            case 0:
                var3 = this;
                var2 = function(arg0, arg1) { // Original name: MurmurHashV3, environment: var4
                    _fun13296: for (var _fun13296_ip = 0;;) switch (_fun13296_ip) {
                        case 0:
                            var2 = arg0;
                            var7 = arg1;
                            var1 = 'string';
                            var0 = typeof var2;
                            var4 = var2;
                            if (!(var1 === var0)) {
                                _fun13296_ip = 34;
                                continue _fun13296
                            }
                        case 20:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var4 = var1.bind(var0)(var2);
                        case 34:
                            var0 = var4.length;
                            var6 = 3;
                            var18 = var6 & var0;
                            var0 = var4.length;
                            var23 = var0 - var18;
                            var1 = 0;
                            var14 = 255;
                            var17 = 8;
                            var0 = 16;
                            var22 = 24;
                            var5 = 65535;
                            var13 = 3432918353.0;
                            var3 = 4294967295.0;
                            var9 = 15;
                            var11 = 17;
                            var10 = 461845907;
                            var2 = 13;
                            var21 = 19;
                            var20 = 5;
                            var19 = 27492;
                            var16 = 58964;
                            var15 = var7;
                            var12 = 0;
                            var8 = var15;
                            var7 = 0;
                            if (!(var1 < var23)) {
                                _fun13296_ip = 378;
                                continue _fun13296
                            }
                        case 145:
                            var24 = var4[var12];
                            var28 = var14 & var24;
                            var24 = var12 + 1;
                            var25 = var4[var24];
                            var27 = var14 & var25;
                            var24 = var24 + 1;
                            var25 = var4[var24];
                            var26 = var14 & var25;
                            var24 = var24 + 1;
                            var25 = var4[var24];
                            var25 = var14 & var25;
                            var27 = var27 << var17;
                            var27 = var28 | var27;
                            var26 = var26 << var0;
                            var26 = var27 | var26;
                            var25 = var25 << var22;
                            var25 = var26 | var25;
                            var12 = var24 + 1;
                            var26 = var5 & var25;
                            var26 = var26 * var13;
                            var25 = var25 >>> var0;
                            var25 = var25 * var13;
                            var25 = var25 & var5;
                            var25 = var25 << var0;
                            var25 = var26 + var25;
                            var25 = var25 & var3;
                            var26 = var25 << var9;
                            var25 = var25 >>> var11;
                            var25 = var26 | var25;
                            var26 = var5 & var25;
                            var26 = var26 * var10;
                            var25 = var25 >>> var0;
                            var25 = var25 * var10;
                            var25 = var25 & var5;
                            var25 = var25 << var0;
                            var25 = var26 + var25;
                            var25 = var25 & var3;
                            var25 = var15 ^ var25;
                            var26 = var25 << var2;
                            var25 = var25 >>> var21;
                            var25 = var26 | var25;
                            var26 = var5 & var25;
                            var26 = var20 * var26;
                            var25 = var25 >>> var0;
                            var25 = var20 * var25;
                            var25 = var25 & var5;
                            var25 = var25 << var0;
                            var25 = var26 + var25;
                            var25 = var25 & var3;
                            var26 = var5 & var25;
                            var26 = var19 + var26;
                            var25 = var25 >>> var0;
                            var25 = var16 + var25;
                            var25 = var25 & var5;
                            var25 = var25 << var0;
                            var15 = var26 + var25;
                            var8 = var15;
                            var7 = var12;
                            if (var7 < var23) {
                                _fun13296_ip = 145;
                                continue _fun13296
                            }
                        case 378:
                            if (!(var6 !== var18)) {
                                _fun13296_ip = 408;
                                continue _fun13296
                            }
                        case 382:
                            var6 = 2;
                            var16 = 0;
                            if (!(var6 !== var18)) {
                                _fun13296_ip = 431;
                                continue _fun13296
                            }
                        case 391:
                            var15 = 1;
                            var12 = 0;
                            var6 = var8;
                            if (!(var15 !== var18)) {
                                _fun13296_ip = 454;
                                continue _fun13296
                            }
                        case 403:
                            _fun13296_ip = 546;
                            continue _fun13296;
                        case 408:
                            var15 = 2;
                            var15 = var7 + var15;
                            var15 = var4[var15];
                            var15 = var14 & var15;
                            var15 = var15 << var0;
                            var16 = var1 ^ var15;
                        case 431:
                            var15 = 1;
                            var15 = var7 + var15;
                            var15 = var4[var15];
                            var15 = var14 & var15;
                            var15 = var15 << var17;
                            var12 = var16 ^ var15;
                        case 454:
                            var7 = var4[var7];
                            var7 = var14 & var7;
                            var7 = var12 ^ var7;
                            var12 = var5 & var7;
                            var12 = var12 * var13;
                            var7 = var7 >>> var0;
                            var7 = var7 * var13;
                            var7 = var7 & var5;
                            var7 = var7 << var0;
                            var7 = var12 + var7;
                            var7 = var7 & var3;
                            var9 = var7 << var9;
                            var7 = var7 >>> var11;
                            var7 = var9 | var7;
                            var9 = var5 & var7;
                            var9 = var9 * var10;
                            var7 = var7 >>> var0;
                            var7 = var7 * var10;
                            var7 = var7 & var5;
                            var7 = var7 << var0;
                            var7 = var9 + var7;
                            var7 = var7 & var3;
                            var6 = var8 ^ var7;
                        case 546:
                            var4 = var4.length;
                            var6 = var6 ^ var4;
                            var4 = var6 >>> var0;
                            var4 = var6 ^ var4;
                            var7 = 2246822507.0;
                            var6 = var5 & var4;
                            var6 = var7 * var6;
                            var4 = var4 >>> var0;
                            var4 = var7 * var4;
                            var4 = var4 & var5;
                            var4 = var4 << var0;
                            var4 = var6 + var4;
                            var4 = var4 & var3;
                            var2 = var4 >>> var2;
                            var2 = var4 ^ var2;
                            var6 = 3266489909.0;
                            var4 = var5 & var2;
                            var4 = var6 * var4;
                            var2 = var2 >>> var0;
                            var2 = var6 * var2;
                            var2 = var2 & var5;
                            var2 = var2 << var0;
                            var2 = var4 + var2;
                            var2 = var2 & var3;
                            var0 = var2 >>> var0;
                            var0 = var2 ^ var0;
                            var0 = var0 >>> var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var0 = function(arg0) { // Original name: createBuffer, environment: var4
                    var0 = global;
                    var0 = var0.TextEncoder;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var0](var3);
                    var2 = var0 instanceof Object ? var0 : var1;
                    var1 = var2.encode;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var2;
                var0 = function(arg0, arg1) { // Original name: MurmurHashV2, environment: var4
                    _fun13298: for (var _fun13298_ip = 0;;) switch (_fun13298_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = 'string';
                            var0 = typeof var2;
                            var8 = var2;
                            if (!(var1 === var0)) {
                                _fun13298_ip = 31;
                                continue _fun13298
                            }
                        case 17:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var8 = var1.bind(var0)(var2);
                        case 31:
                            var12 = var8.length;
                            var0 = arg1;
                            var6 = var0 ^ var12;
                            var14 = 4;
                            var15 = var12 >= var14;
                            var1 = 0;
                            var7 = 255;
                            var11 = 8;
                            var3 = 16;
                            var10 = 24;
                            var5 = 1540483477;
                            var4 = 65535;
                            var9 = var12;
                            var2 = 0;
                            var13 = var9;
                            var12 = var6;
                            var0 = 0;
                            if (!var15) {
                                _fun13298_ip = 279;
                                continue _fun13298
                            }
                        case 95:
                            var15 = var8[var2];
                            var19 = var7 & var15;
                            var15 = var2 + 1;
                            var16 = var8[var15];
                            var18 = var7 & var16;
                            var15 = var15 + 1;
                            var16 = var8[var15];
                            var17 = var7 & var16;
                            var16 = var15 + 1;
                            var15 = var8[var16];
                            var15 = var7 & var15;
                            var18 = var18 << var11;
                            var18 = var19 | var18;
                            var17 = var17 << var3;
                            var17 = var18 | var17;
                            var15 = var15 << var10;
                            var15 = var17 | var15;
                            var17 = var4 & var15;
                            var17 = var5 * var17;
                            var15 = var15 >>> var3;
                            var15 = var5 * var15;
                            var15 = var15 & var4;
                            var15 = var15 << var3;
                            var19 = var17 + var15;
                            var18 = var4 & var6;
                            var17 = var6 >>> var3;
                            var15 = var19 >>> var10;
                            var15 = var19 ^ var15;
                            var18 = var5 * var18;
                            var17 = var5 * var17;
                            var17 = var17 & var4;
                            var17 = var17 << var3;
                            var17 = var18 + var17;
                            var18 = var4 & var15;
                            var18 = var5 * var18;
                            var15 = var15 >>> var3;
                            var15 = var5 * var15;
                            var15 = var15 & var4;
                            var15 = var15 << var3;
                            var15 = var18 + var15;
                            var6 = var17 ^ var15;
                            var9 = var9 - var14;
                            var2 = var16 + 1;
                            var12 = var6;
                            var0 = var2;
                            var13 = var9;
                            if (var13 >= var14) {
                                _fun13298_ip = 95;
                                continue _fun13298
                            }
                        case 279:
                            var2 = 3;
                            if (!(var2 !== var13)) {
                                _fun13298_ip = 311;
                                continue _fun13298
                            }
                        case 286:
                            var2 = 2;
                            var10 = var12;
                            if (!(var2 !== var13)) {
                                _fun13298_ip = 334;
                                continue _fun13298
                            }
                        case 296:
                            var9 = 1;
                            var6 = var12;
                            var2 = var6;
                            if (!(var9 !== var13)) {
                                _fun13298_ip = 357;
                                continue _fun13298
                            }
                        case 309:
                            _fun13298_ip = 397;
                            continue _fun13298;
                        case 311:
                            var9 = 2;
                            var9 = var0 + var9;
                            var9 = var8[var9];
                            var9 = var7 & var9;
                            var9 = var9 << var3;
                            var10 = var12 ^ var9;
                        case 334:
                            var9 = 1;
                            var9 = var0 + var9;
                            var9 = var8[var9];
                            var9 = var7 & var9;
                            var9 = var9 << var11;
                            var6 = var10 ^ var9;
                        case 357:
                            var0 = var8[var0];
                            var0 = var7 & var0;
                            var0 = var6 ^ var0;
                            var6 = var4 & var0;
                            var6 = var5 * var6;
                            var0 = var0 >>> var3;
                            var0 = var5 * var0;
                            var0 = var0 & var4;
                            var0 = var0 << var3;
                            var2 = var6 + var0;
                        case 397:
                            var0 = 13;
                            var0 = var2 >>> var0;
                            var0 = var2 ^ var0;
                            var2 = var4 & var0;
                            var2 = var5 * var2;
                            var0 = var0 >>> var3;
                            var0 = var5 * var0;
                            var0 = var0 & var4;
                            var0 = var0 << var3;
                            var2 = var2 + var0;
                            var0 = 15;
                            var0 = var2 >>> var0;
                            var0 = var2 ^ var0;
                            var0 = var0 >>> var1;
                            return var0;
                    }
                };
                var2.v2 = var0;
                var2.v3 = var2;
                var5 = _closure1_slot0;
                var0 = undefined;
                if (!(var0 === var5)) {
                    _fun13295_ip = 85;
                    continue _fun13295
                }
            case 56:
                var5 = var3.murmur;
                var _closure2_slot3 = var5;
                var4 = function() { // Environment: var4
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot3;
                    var2.murmur = var1;
                    var0 = _closure2_slot2;
                    return var0;
                };
                var2.noConflict = var4;
                var3.murmur = var2;
                _fun13295_ip = 95;
                continue _fun13295;
            case 85:
                var1 = _closure1_slot0;
                var1.exports = var2;
            case 95:
                return var0;
        }
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);