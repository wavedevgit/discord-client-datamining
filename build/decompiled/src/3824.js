// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = {};
    var4 = 'function validateTransformOrigin_Pnpm_processTransformOriginTs1(transformOrigin){if(transformOrigin.length!==3){throw new ReanimatedError(\'Transform origin must have exactly 3 values.\');}const[x,y,z]=transformOrigin;if(!(typeof x===\'number\'||typeof x===\'string\'&&x.endsWith(\'%\'))){throw new ReanimatedError("Transform origin x-position must be a number or a percentage string. Passed value: "+x+".");}if(!(typeof y===\'number\'||typeof y===\'string\'&&y.endsWith(\'%\'))){throw new ReanimatedError("Transform origin y-position must be a number or a percentage string. Passed value: "+y+".");}if(typeof z!==\'number\'){throw new ReanimatedError("Transform origin z-position must be a number. Passed value: "+z+".");}}';
    var3.code = var4;
    var _closure1_slot3 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34154: for (var _fun34154_ip = 0;;) switch (_fun34154_ip) {
                case 0:
                    var4 = arg0;
                    var0 = var4.length;
                    var3 = 3;
                    if (!(var3 === var0)) {
                        _fun34154_ip = 354;
                        continue _fun34154
                    }
                case 18:
                    var1 = _closure1_slot2;
                    var2 = undefined;
                    var4 = var1.bind(var2)(var4, var3);
                    var1 = 0;
                    var10 = var4[var1];
                    var3 = 1;
                    var9 = var4[var3];
                    var1 = 2;
                    var4 = var4[var1];
                    var6 = typeof var10;
                    var5 = 'number';
                    if (!(var5 !== var6)) {
                        _fun34154_ip = 164;
                        continue _fun34154
                    }
                case 64:
                    var1 = 'string';
                    if (!(var1 === var6)) {
                        _fun34154_ip = 90;
                        continue _fun34154
                    }
                case 72:
                    var6 = var10.endsWith;
                    var1 = '%';
                    var1 = var6.bind(var10)(var1);
                    if (var1) {
                        _fun34154_ip = 164;
                        continue _fun34154
                    }
                case 90:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var1 = var6.bind(var2)(var1);
                    var7 = var1.ReanimatedError;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var6 = 'Transform origin x-position must be a number or a percentage string. Passed value: ';
                    var1 = '.';
                    var12 = var8.bind(var6)(var10, var1);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var13 = var6;
                    var1 = new var13[var7](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var6;
                    throw var1;
                case 164:
                    var6 = typeof var9;
                    if (!(var5 !== var6)) {
                        _fun34154_ip = 271;
                        continue _fun34154
                    }
                case 171:
                    var1 = 'string';
                    if (!(var1 === var6)) {
                        _fun34154_ip = 197;
                        continue _fun34154
                    }
                case 179:
                    var6 = var9.endsWith;
                    var1 = '%';
                    var1 = var6.bind(var9)(var1);
                    if (var1) {
                        _fun34154_ip = 271;
                        continue _fun34154
                    }
                case 197:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var1 = var6.bind(var2)(var1);
                    var7 = var1.ReanimatedError;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var6 = 'Transform origin y-position must be a number or a percentage string. Passed value: ';
                    var1 = '.';
                    var12 = var8.bind(var6)(var9, var1);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var13 = var6;
                    var1 = new var13[var7](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var6;
                    throw var1;
                case 271:
                    var1 = typeof var4;
                    if (!(var5 === var1)) {
                        _fun34154_ip = 280;
                        continue _fun34154
                    }
                case 278:
                    return var2;
                case 280:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var3];
                    var0 = var1.bind(var2)(var0);
                    var2 = var0.ReanimatedError;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = 'Transform origin z-position must be a number. Passed value: ';
                    var0 = '.';
                    var12 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 354:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = 'Transform origin must have exactly 3 values.';
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 6034608374885.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'function processTransformOrigin_Pnpm_processTransformOriginTs2(transformOriginIn){const{INDEX_X,INDEX_Z,INDEX_Y,__DEV__,validateTransformOrigin}=this.__closure;let transformOrigin=Array.isArray(transformOriginIn)?transformOriginIn:[\'50%\',\'50%\',0];if(typeof transformOriginIn===\'string\'){const transformOriginString=transformOriginIn;const regex=/(top|bottom|left|right|center|\\d+(?:%|px)|0)/gi;const transformOriginArray=[\'50%\',\'50%\',0];let index=INDEX_X;let matches;while(matches=regex.exec(transformOriginString)){let nextIndex=index+1;const value=matches[0];const valueLower=value.toLowerCase();switch(valueLower){case\'left\':case\'right\':{if(index!==INDEX_X){throw new ReanimatedError("Transform-origin "+value+" can only be used for x-position");}transformOriginArray[INDEX_X]=valueLower===\'left\'?0:\'100%\';break;}case\'top\':case\'bottom\':{if(index===INDEX_Z){throw new ReanimatedError("Transform-origin "+value+" can only be used for y-position");}transformOriginArray[INDEX_Y]=valueLower===\'top\'?0:\'100%\';if(index===INDEX_X){const horizontal=regex.exec(transformOriginString);if(horizontal==null){break;}switch(horizontal===null||horizontal===void 0?void 0:horizontal[0].toLowerCase()){case\'left\':transformOriginArray[INDEX_X]=0;break;case\'right\':transformOriginArray[INDEX_X]=\'100%\';break;case\'center\':transformOriginArray[INDEX_X]=\'50%\';break;default:throw new ReanimatedError("Could not parse transform-origin: "+transformOriginString);}nextIndex=INDEX_Z;}break;}case\'center\':{if(index===INDEX_Z){throw new ReanimatedError("Transform-origin value "+value+" cannot be used for z-position");}transformOriginArray[index]=\'50%\';break;}default:{if(value.endsWith(\'%\')){transformOriginArray[index]=value;}else{const numericValue=parseFloat(value);if(isNaN(numericValue)){throw new ReanimatedError("Invalid numeric value in transform-origin: "+value);}transformOriginArray[index]=numericValue;}break;}}index=nextIndex;}transformOrigin=transformOriginArray;}if(typeof transformOriginIn!==\'string\'&&!Array.isArray(transformOriginIn)){throw new ReanimatedError("Invalid transformOrigin type: "+typeof transformOriginIn);}if(__DEV__){validateTransformOrigin(transformOrigin);}return transformOrigin;}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34156: for (var _fun34156_ip = 0;;) switch (_fun34156_ip) {
                case 0:
                    var7 = arg0;
                    var0 = global;
                    var2 = var0.Array;
                    var1 = var2.isArray;
                    var2 = var1.bind(var2)(var7);
                    var1 = var7;
                    if (var2) {
                        _fun34156_ip = 37;
                        continue _fun34156
                    }
                case 27:
                    var1 = ['50%', '50%', 0];
                case 37:
                    var8 = typeof var7;
                    var2 = 'string';
                    if (!(var2 === var8)) {
                        _fun34156_ip = 794;
                        continue _fun34156
                    }
                case 51:
                    var24 = /(top|bottom|left|right|center|\d+(?:%|px)|0)/gi;
                    var23 = ['50%', '50%', 0];
                    var3 = var24.exec;
                    var6 = var3.bind(var24)(var7);
                    var22 = 0;
                    var3 = undefined;
                    var21 = '100%';
                    var20 = 'left';
                    var19 = 2;
                    var18 = '50%';
                    var17 = 'center';
                    var16 = 'right';
                    var15 = null;
                    var5 = 1;
                    var14 = 'top';
                    var13 = '%';
                    var12 = 'bottom';
                    var11 = 0;
                    var10 = undefined;
                    var9 = undefined;
                    var1 = var23;
                    if (!var6) {
                        _fun34156_ip = 794;
                        continue _fun34156
                    }
                case 149:
                    var25 = var11 + var5;
                    var4 = var6[var22];
                    var26 = var4.toLowerCase;
                    var30 = var26.bind(var4)();
                    if (!(var20 !== var30)) {
                        _fun34156_ip = 736;
                        continue _fun34156
                    }
                case 174:
                    if (!(var16 !== var30)) {
                        _fun34156_ip = 736;
                        continue _fun34156
                    }
                case 181:
                    if (!(var14 !== var30)) {
                        _fun34156_ip = 443;
                        continue _fun34156
                    }
                case 188:
                    if (!(var12 !== var30)) {
                        _fun34156_ip = 443;
                        continue _fun34156
                    }
                case 195:
                    if (!(var17 !== var30)) {
                        _fun34156_ip = 344;
                        continue _fun34156
                    }
                case 202:
                    var26 = var4.endsWith;
                    var26 = var26.bind(var4)(var13);
                    if (var26) {
                        _fun34156_ip = 326;
                        continue _fun34156
                    }
                case 216:
                    var26 = var0.parseFloat;
                    var26 = var26.bind(var3)(var4);
                    var27 = var0.isNaN;
                    var27 = var27.bind(var3)(var26);
                    if (var27) {
                        _fun34156_ip = 256;
                        continue _fun34156
                    }
                case 241:
                    var23[var11] = var26;
                    var28 = var25;
                    var27 = var10;
                    _fun34156_ip = 765;
                    continue _fun34156;
                case 256:
                    var31 = _closure1_slot0;
                    var29 = _closure1_slot1;
                    var29 = var29[var5];
                    var29 = var31.bind(var3)(var29);
                    var32 = var29.ReanimatedError;
                    var29 = var0.HermesInternal;
                    var31 = var29.concat;
                    var29 = 'Invalid numeric value in transform-origin: ';
                    var35 = var31.bind(var29)(var4);
                    var31 = var32.prototype;
                    var31 = Object.create(var31, {
                        constructor: {
                            value: var32
                        }
                    });
                    var36 = var31;
                    var29 = new var36[var32](var35, var34);
                    var29 = var29 instanceof Object ? var29 : var31;
                    throw var29;
                case 326:
                    var23[var11] = var4;
                    var28 = var25;
                    var27 = var10;
                    var26 = var9;
                    _fun34156_ip = 765;
                    continue _fun34156;
                case 344:
                    if (!(var19 !== var11)) {
                        _fun34156_ip = 366;
                        continue _fun34156
                    }
                case 348:
                    var23[var11] = var18;
                    var28 = var25;
                    var27 = var10;
                    var26 = var9;
                    _fun34156_ip = 765;
                    continue _fun34156;
                case 366:
                    var31 = _closure1_slot0;
                    var29 = _closure1_slot1;
                    var29 = var29[var5];
                    var29 = var31.bind(var3)(var29);
                    var32 = var29.ReanimatedError;
                    var29 = var0.HermesInternal;
                    var33 = var29.concat;
                    var31 = 'Transform-origin value ';
                    var29 = ' cannot be used for z-position';
                    var35 = var33.bind(var31)(var4, var29);
                    var31 = var32.prototype;
                    var31 = Object.create(var31, {
                        constructor: {
                            value: var32
                        }
                    });
                    var36 = var31;
                    var29 = new var36[var32](var35, var34);
                    var29 = var29 instanceof Object ? var29 : var31;
                    throw var29;
                case 443:
                    if (!(var19 !== var11)) {
                        _fun34156_ip = 659;
                        continue _fun34156
                    }
                case 450:
                    var29 = var21;
                    if (!(var14 === var30)) {
                        _fun34156_ip = 459;
                        continue _fun34156
                    }
                case 457:
                    var29 = 0;
                case 459:
                    var23[var5] = var29;
                    var28 = var25;
                    var27 = var10;
                    var26 = var9;
                    if (!(var22 === var11)) {
                        _fun34156_ip = 765;
                        continue _fun34156
                    }
                case 479:
                    var29 = var24.exec;
                    var29 = var29.bind(var24)(var7);
                    var28 = var25;
                    var27 = var29;
                    var26 = var9;
                    if (!(var15 != var29)) {
                        _fun34156_ip = 765;
                        continue _fun34156
                    }
                case 506:
                    var32 = var15 == var29;
                    var31 = undefined;
                    if (var32) {
                        _fun34156_ip = 529;
                        continue _fun34156
                    }
                case 515:
                    var33 = var29[var22];
                    var32 = var33.toLowerCase;
                    var31 = var32.bind(var33)();
                case 529:
                    if (!(var20 !== var31)) {
                        _fun34156_ip = 644;
                        continue _fun34156
                    }
                case 533:
                    if (!(var16 !== var31)) {
                        _fun34156_ip = 629;
                        continue _fun34156
                    }
                case 537:
                    if (!(var17 !== var31)) {
                        _fun34156_ip = 611;
                        continue _fun34156
                    }
                case 541:
                    var32 = _closure1_slot0;
                    var31 = _closure1_slot1;
                    var31 = var31[var5];
                    var31 = var32.bind(var3)(var31);
                    var33 = var31.ReanimatedError;
                    var31 = var0.HermesInternal;
                    var32 = var31.concat;
                    var31 = 'Could not parse transform-origin: ';
                    var35 = var32.bind(var31)(var7);
                    var32 = var33.prototype;
                    var32 = Object.create(var32, {
                        constructor: {
                            value: var33
                        }
                    });
                    var36 = var32;
                    var31 = new var36[var33](var35, var34);
                    var31 = var31 instanceof Object ? var31 : var32;
                    throw var31;
                case 611:
                    var23[var22] = var18;
                    var28 = var19;
                    var27 = var29;
                    var26 = var9;
                    _fun34156_ip = 765;
                    continue _fun34156;
                case 629:
                    var23[var22] = var21;
                    var28 = var19;
                    var27 = var29;
                    var26 = var9;
                    _fun34156_ip = 765;
                    continue _fun34156;
                case 644:
                    var23[var22] = var22;
                    var28 = var19;
                    var27 = var29;
                    var26 = var9;
                    _fun34156_ip = 765;
                    continue _fun34156;
                case 659:
                    var31 = _closure1_slot0;
                    var29 = _closure1_slot1;
                    var29 = var29[var5];
                    var29 = var31.bind(var3)(var29);
                    var32 = var29.ReanimatedError;
                    var29 = var0.HermesInternal;
                    var33 = var29.concat;
                    var31 = 'Transform-origin ';
                    var29 = ' can only be used for y-position';
                    var35 = var33.bind(var31)(var4, var29);
                    var31 = var32.prototype;
                    var31 = Object.create(var31, {
                        constructor: {
                            value: var32
                        }
                    });
                    var36 = var31;
                    var29 = new var36[var32](var35, var34);
                    var29 = var29 instanceof Object ? var29 : var31;
                    throw var29;
                case 736:
                    if (!(var22 === var11)) {
                        _fun34156_ip = 882;
                        continue _fun34156
                    }
                case 743:
                    var29 = var21;
                    if (!(var20 === var30)) {
                        _fun34156_ip = 752;
                        continue _fun34156
                    }
                case 750:
                    var29 = 0;
                case 752:
                    var23[var22] = var29;
                    var28 = var25;
                    var27 = var10;
                    var26 = var9;
                case 765:
                    var25 = var24.exec;
                    var6 = var25.bind(var24)(var7);
                    var11 = var28;
                    var10 = var27;
                    var9 = var26;
                    var1 = var23;
                    if (var6) {
                        _fun34156_ip = 149;
                        continue _fun34156
                    }
                case 794:
                    if (!(var2 !== var8)) {
                        _fun34156_ip = 880;
                        continue _fun34156
                    }
                case 798:
                    var6 = var0.Array;
                    var2 = var6.isArray;
                    var2 = var2.bind(var6)(var7);
                    if (var2) {
                        _fun34156_ip = 880;
                        continue _fun34156
                    }
                case 817:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 1;
                    var6 = var6[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var6);
                    var7 = var2.ReanimatedError;
                    var2 = var7.prototype;
                    var6 = Object.create(var2, {
                        constructor: {
                            value: var7
                        }
                    });
                    var2 = 'Invalid transformOrigin type: ';
                    var35 = var2 + var8;
                    var36 = var6;
                    var2 = new var36[var7](var35, var34);
                    var2 = var2 instanceof Object ? var2 : var6;
                    throw var2;
                case 880:
                    return var1;
                case 882:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var5];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ReanimatedError;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = 'Transform-origin ';
                    var0 = ' can only be used for x-position';
                    var35 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var36 = var1;
                    var0 = new var36[var2](var35, var34);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var2 = {
            'INDEX_X': 0,
            'INDEX_Z': 2,
            'INDEX_Y': 1,
            '__DEV__': false
        };
        var3 = _closure1_slot4;
        var2.validateTransformOrigin = var3;
        var0.__closure = var2;
        var2 = 11541675557002.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.processTransformOrigin = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3732]);