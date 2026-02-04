// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = {};
    var0 = "function pnpm_colorsTs1(value){return typeof value==='object'&&value!==null&&!Array.isArray(value);}";
    var3.code = var0;
    var0 = function arg0() {
        _fun34215: for (var _fun34215_ip = 0;;) switch (_fun34215_ip) {
            case 0:
                var3 = arg0;
                var1 = 'object';
                var0 = typeof var3;
                var0 = var1 === var0;
                if (!var0) {
                    _fun34215_ip = 23;
                    continue _fun34215
                }
            case 17:
                var1 = null;
                var0 = var1 !== var3;
            case 23:
                if (!var0) {
                    _fun34215_ip = 47;
                    continue _fun34215
                }
            case 26:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                var0 = !var1;
            case 47:
                return var0;
        }
    };
    var4 = {};
    var0.__closure = var4;
    var4 = 12151866759552.0;
    var0.__workletHash = var4;
    var0.__initData = var3;
    var _closure1_slot2 = var0;
    var0 = {};
    var3 = 'function PlatformColor_Pnpm_colorsTs2(...names){const{IS_IOS}=this.__closure;return IS_IOS?{semantic:names}:{resource_paths:names};}';
    var0.code = var3;
    var _closure1_slot3 = var0;
    var3 = function() { // Environment: var1
        var0 = function() {
            _fun34217: for (var _fun34217_ip = 0;;) switch (_fun34217_ip) {
                case 0:
                    var3 = undefined;
                    var5 = undefined;
                    var1 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var8 = var2;
                    var7 = var1;
                    var0 = new var8[var0](var7, var6);
                    var2 = var0 instanceof Object ? var0 : var2;
                    var4 = 0;
                    var6 = var4 < var1;
                    var0 = 0;
                    if (!var6) {
                        _fun34217_ip = 64;
                        continue _fun34217
                    }
                case 49:
                    var6 = arguments[var0];
                    var2[var0] = var6;
                    var0 = var0 + 1;
                    if (var0 < var1) {
                        _fun34217_ip = 49;
                        continue _fun34217
                    }
                case 64:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var4];
                    var0 = var1.bind(var3)(var0);
                    var0 = var0.IS_IOS;
                    var1 = {};
                    if (var0) {
                        _fun34217_ip = 105;
                        continue _fun34217
                    }
                case 95:
                    var1.resource_paths = var2;
                    var0 = var1;
                    _fun34217_ip = 113;
                    continue _fun34217;
                case 105:
                    var1.semantic = var2;
                    var0 = var1;
                case 113:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 0;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.IS_IOS;
        var2.IS_IOS = var3;
        var0.__closure = var2;
        var2 = 12890406291275.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var9 = var3.bind(var0)();
    var3 = {};
    var4 = 'function isPlatformColorObject_Pnpm_colorsTs3(value){const{isRecord}=this.__closure;return isRecord(value)&&(Array.isArray(value.semantic)||Array.isArray(value.resource_paths));}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34219: for (var _fun34219_ip = 0;;) switch (_fun34219_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot2;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    if (!var0) {
                        _fun34219_ip = 72;
                        continue _fun34219
                    }
                case 20:
                    var3 = global;
                    var5 = var3.Array;
                    var4 = var5.isArray;
                    var1 = var2.semantic;
                    var1 = var4.bind(var5)(var1);
                    if (var1) {
                        _fun34219_ip = 69;
                        continue _fun34219
                    }
                case 47:
                    var4 = var3.Array;
                    var3 = var4.isArray;
                    var2 = var2.resource_paths;
                    var1 = var3.bind(var4)(var2);
                case 69:
                    var0 = var1;
                case 72:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.isRecord = var3;
        var0.__closure = var2;
        var2 = 9660595997722.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function DynamicColorIOS_Pnpm_colorsTs4(tuple){return{dynamic:{light:tuple.light,dark:tuple.dark,highContrastLight:tuple.highContrastLight,highContrastDark:tuple.highContrastDark}};}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            var2 = arg0;
            var0 = {};
            var1 = {};
            var3 = var2.light;
            var1.light = var3;
            var3 = var2.dark;
            var1.dark = var3;
            var3 = var2.highContrastLight;
            var1.highContrastLight = var3;
            var2 = var2.highContrastDark;
            var1.highContrastDark = var2;
            var0.dynamic = var1;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 593421129931.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot6;
        var0.__initData = var1;
        return var0;
    };
    var8 = var3.bind(var0)();
    var3 = {};
    var4 = "function isDynamicColorObjectIOS_Pnpm_colorsTs5(value){const{isRecord}=this.__closure;return isRecord(value)&&isRecord(value.dynamic)&&'light'in value.dynamic&&'dark'in value.dynamic;}";
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34223: for (var _fun34223_ip = 0;;) switch (_fun34223_ip) {
                case 0:
                    var1 = arg0;
                    var0 = _closure1_slot2;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var1);
                    if (!var0) {
                        _fun34223_ip = 35;
                        continue _fun34223
                    }
                case 20:
                    var3 = _closure1_slot2;
                    var2 = var1.dynamic;
                    var0 = var3.bind(var4)(var2);
                case 35:
                    if (!var0) {
                        _fun34223_ip = 52;
                        continue _fun34223
                    }
                case 38:
                    var3 = var1.dynamic;
                    var2 = 'light';
                    var0 = var2 in var3;
                case 52:
                    if (!var0) {
                        _fun34223_ip = 69;
                        continue _fun34223
                    }
                case 55:
                    var2 = var1.dynamic;
                    var1 = 'dark';
                    var0 = var1 in var2;
                case 69:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.isRecord = var3;
        var0.__closure = var2;
        var2 = 1181760541767.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot8 = var3;
    var6 = {};
    var3 = 'function pnpm_colorsTs6(color){return"Invalid color value: "+JSON.stringify(color);}';
    var6.code = var3;
    var5 = {};
    var3 = 'function pnpm_colorsTs7(color){return"Invalid processed color value: "+JSON.stringify(color);}';
    var5.code = var3;
    var4 = {};
    var3 = "function pnpm_colorsTs8(){return'DynamicColorIOS is not available on this platform.';}";
    var4.code = var3;
    var7 = {};
    var3 = function arg0() {
        var0 = global;
        var3 = var0.JSON;
        var2 = var3.stringify;
        var1 = arg0;
        var2 = var2.bind(var3)(var1);
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'Invalid color value: ';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var10 = {};
    var3.__closure = var10;
    var10 = 16453254098770.0;
    var3.__workletHash = var10;
    var3.__initData = var6;
    var7.invalidColor = var3;
    var3 = function arg0() {
        var0 = global;
        var3 = var0.JSON;
        var2 = var3.stringify;
        var1 = arg0;
        var2 = var2.bind(var3)(var1);
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'Invalid processed color value: ';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var6 = {};
    var3.__closure = var6;
    var6 = 8662920964153.0;
    var3.__workletHash = var6;
    var3.__initData = var5;
    var7.invalidProcessedColor = var3;
    var3 = function() {
        var0 = 'DynamicColorIOS is not available on this platform.';
        return var0;
    };
    var5 = {};
    var3.__closure = var5;
    var5 = 13235944247491.0;
    var3.__workletHash = var5;
    var3.__initData = var4;
    var7.dynamicNotAvailableOnPlatform = var3;
    var _closure1_slot9 = var7;
    var3 = {};
    var4 = "function processColorNumber_Pnpm_colorsTs9(value){const{processColorInitially,IS_ANDROID}=this.__closure;let normalizedColor=processColorInitially(value);if(IS_ANDROID&&typeof normalizedColor=='number'){normalizedColor=normalizedColor|0x0;}return normalizedColor;}";
    var3.code = var4;
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34228: for (var _fun34228_ip = 0;;) switch (_fun34228_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 1;
                    var0 = var4[var0];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var0);
                    var1 = var5.processColorInitially;
                    var0 = arg0;
                    var1 = var1.bind(var5)(var0);
                    var0 = 0;
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var2 = var0.IS_ANDROID;
                    if (!var2) {
                        _fun34228_ip = 70;
                        continue _fun34228
                    }
                case 59:
                    var3 = 'number';
                    var0 = typeof var1;
                    var2 = var3 === var0;
                case 70:
                    var0 = var1;
                    if (!var2) {
                        _fun34228_ip = 79;
                        continue _fun34228
                    }
                case 76:
                    var0 = var1 | 0;
                case 79:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 1;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.processColorInitially;
        var2.processColorInitially = var3;
        var3 = 0;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.IS_ANDROID;
        var2.IS_ANDROID = var3;
        var0.__closure = var2;
        var2 = 11813019963227.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot10;
        var0.__initData = var1;
        return var0;
    };
    var6 = var3.bind(var0)();
    var _closure1_slot11 = var6;
    var3 = {};
    var4 = 'function unprocessColorNumber_Pnpm_colorsTs10(value){const a=(value>>>24)/255;const r=value<<8>>>24;const g=value<<16>>>24;const b=value<<24>>>24;return"rgba("+r+","+g+","+b+","+a+")";}';
    var3.code = var4;
    var _closure1_slot12 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            var1 = arg0;
            var0 = 8;
            var4 = var1 << var0;
            var0 = 16;
            var3 = var1 << var0;
            var2 = 24;
            var0 = var1 << var2;
            var1 = var1 >>> var2;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var16 = 'rgba(';
            var15 = var4 >>> var2;
            var4 = ',';
            var13 = var3 >>> var2;
            var11 = var0 >>> var2;
            var0 = 255;
            var9 = var1 / var0;
            var8 = ')';
            var14 = var4;
            var12 = var4;
            var10 = var4;
            var0 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8, var7);
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 5518391320995.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot12;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot13 = var3;
    var3 = ['light', 'dark', 'highContrastLight', 'highContrastDark'];
    var _closure1_slot14 = var3;
    var3 = {};
    var4 = 'function processDynamicColorObjectIOS_Pnpm_colorsTs11(value){const{DynamicColorIOSProperties,processColorNumber}=this.__closure;const result={};for(const property of DynamicColorIOSProperties){if(value.dynamic[property]===undefined){continue;}const processed=processColorNumber(value.dynamic[property]);if(processed===null){return null;}result[property]=processed;}return{dynamic:result};}';
    var3.code = var4;
    var _closure1_slot15 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34232: for (var _fun34232_ip = 0;;) switch (_fun34232_ip) {
                case 0:
                    var6 = arg0;
                    var5 = undefined;
                    var7 = undefined;
                    var8 = undefined;
                    var1 = {};
                    var0 = _closure1_slot14;
                    var3 = var0;
                    var2 = var3[Symbol.iterator];
                    var3 = var2().next;
                    var0 = null;
                case 26:
                    var10 = var3().value;
                    var9 = var2;
                    if (!(var9 !== var5)) {
                        _fun34232_ip = 116;
                        continue _fun34232
                    }
                case 37: // try_start_0
                    var7 = var10;
                    var9 = var6;
                    var9 = var9.dynamic;
                    var9 = var9[var10];
                    if (!(var5 !== var9)) {
                        _fun34232_ip = 102;
                        continue _fun34232
                    }
                case 57:
                    var10 = _closure1_slot11;
                    var9 = var6;
                    var11 = var9.dynamic;
                    var9 = var7;
                    var9 = var11[var9];
                    var9 = var10.bind(var5)(var9);
                    var8 = var9;
                    if (!(var0 !== var9)) {
                        _fun34232_ip = 104;
                        continue _fun34232
                    }
                case 89:
                    var11 = var1;
                    var10 = var7;
                    var9 = var8;
                    var11[var10] = var9;
                case 102: // try_end0
                    _fun34232_ip = 26;
                    continue _fun34232;
                case 104:
                    var2.return();
                    return var0;
                case 109: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var2.return();
                    throw var0;
                case 116:
                    var0 = {};
                    var0.dynamic = var1;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot14;
        var2.DynamicColorIOSProperties = var3;
        var3 = _closure1_slot11;
        var2.processColorNumber = var3;
        var0.__closure = var2;
        var2 = 12385759836493.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot15;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot16 = var3;
    var3 = {};
    var4 = 'function unprocessDynamicColorObjectIOS_Pnpm_colorsTs12(value){const{DynamicColorIOSProperties,unprocessColorNumber}=this.__closure;const result={};for(const property of DynamicColorIOSProperties){if(value.dynamic[property]!==undefined){result[property]=unprocessColorNumber(value.dynamic[property]);}}return{dynamic:result};}';
    var3.code = var4;
    var _closure1_slot17 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34234: for (var _fun34234_ip = 0;;) switch (_fun34234_ip) {
                case 0:
                    var5 = arg0;
                    var4 = undefined;
                    var6 = undefined;
                    var1 = {};
                    var7 = _closure1_slot14;
                    var0 = var7;
                    var2 = var0[Symbol.iterator];
                    var0 = var2().next;
                case 22:
                    var8 = var0().value;
                    var7 = var2;
                    if (!(var7 !== var4)) {
                        _fun34234_ip = 94;
                        continue _fun34234
                    }
                case 33: // try_start_0
                    var6 = var8;
                    var7 = var5;
                    var7 = var7.dynamic;
                    var7 = var7[var8];
                    if (!(var4 !== var7)) {
                        _fun34234_ip = 85;
                        continue _fun34234
                    }
                case 53:
                    var9 = var1;
                    var8 = var6;
                    var10 = _closure1_slot13;
                    var7 = var5;
                    var7 = var7.dynamic;
                    var7 = var7[var8];
                    var7 = var10.bind(var4)(var7);
                    var9[var8] = var7;
                case 85: // try_end0
                    _fun34234_ip = 22;
                    continue _fun34234;
                case 87: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var2.return();
                    throw var0;
                case 94:
                    var0 = {};
                    var0.dynamic = var1;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot14;
        var2.DynamicColorIOSProperties = var3;
        var3 = _closure1_slot13;
        var2.unprocessColorNumber = var3;
        var0.__closure = var2;
        var2 = 3217615757982.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot17;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot18 = var3;
    var3 = {};
    var4 = "function processColor_Pnpm_colorsTs13(value,context){const{processColorNumber,ValueProcessorTarget,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,processDynamicColorObjectIOS}=this.__closure;let result=processColorNumber(value);if(result){return result;}if(result===0){if((context===null||context===void 0?void 0:context.target)===ValueProcessorTarget.CSS&&value==='transparent'){return false;}return result;}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new ReanimatedError(ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}result=processDynamicColorObjectIOS(value);}if(result===null){throw new ReanimatedError(ERROR_MESSAGES.invalidColor(value));}return result;}";
    var3.code = var4;
    var _closure1_slot19 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun34236: for (var _fun34236_ip = 0;;) switch (_fun34236_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var0 = _closure1_slot11;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var3);
                    if (var0) {
                        _fun34236_ip = 307;
                        continue _fun34236
                    }
                case 26:
                    var8 = 0;
                    if (!(var8 !== var0)) {
                        _fun34236_ip = 235;
                        continue _fun34236
                    }
                case 35:
                    var2 = _closure1_slot5;
                    var2 = var2.bind(var5)(var3);
                    if (var2) {
                        _fun34236_ip = 233;
                        continue _fun34236
                    }
                case 50:
                    var2 = _closure1_slot8;
                    var6 = var2.bind(var5)(var3);
                    var2 = var0;
                    if (!var6) {
                        _fun34236_ip = 162;
                        continue _fun34236
                    }
                case 65:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var8];
                    var6 = var7.bind(var5)(var6);
                    var6 = var6.IS_IOS;
                    if (var6) {
                        _fun34236_ip = 153;
                        continue _fun34236
                    }
                case 91:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 3;
                    var6 = var8[var6];
                    var6 = var7.bind(var5)(var6);
                    var8 = var6.ReanimatedError;
                    var7 = _closure1_slot9;
                    var6 = var7.dynamicNotAvailableOnPlatform;
                    var9 = var6.bind(var7)();
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var10 = var7;
                    var6 = new var10[var8](var9, var8);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
                case 153:
                    var6 = _closure1_slot16;
                    var2 = var6.bind(var5)(var3);
                case 162:
                    var6 = null;
                    if (!(var6 !== var2)) {
                        _fun34236_ip = 170;
                        continue _fun34236
                    }
                case 168:
                    return var2;
                case 170:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var7 = var2.ReanimatedError;
                    var6 = _closure1_slot9;
                    var2 = var6.invalidColor;
                    var9 = var2.bind(var6)(var3);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var10 = var6;
                    var2 = new var10[var7](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var6;
                    throw var2;
                case 233:
                    return var3;
                case 235:
                    var2 = null;
                    var6 = var2 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun34236_ip = 252;
                        continue _fun34236
                    }
                case 246:
                    var2 = var4.target;
                case 252:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 2;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.ValueProcessorTarget;
                    var1 = var1.CSS;
                    var1 = var2 !== var1;
                    if (var1) {
                        _fun34236_ip = 299;
                        continue _fun34236
                    }
                case 291:
                    var2 = 'transparent';
                    var1 = var2 !== var3;
                case 299:
                    if (!var1) {
                        _fun34236_ip = 305;
                        continue _fun34236
                    }
                case 302:
                    var1 = var0;
                case 305:
                    return var1;
                case 307:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot11;
        var2.processColorNumber = var3;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 2;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.ValueProcessorTarget;
        var2.ValueProcessorTarget = var3;
        var3 = _closure1_slot5;
        var2.isPlatformColorObject = var3;
        var3 = _closure1_slot8;
        var2.isDynamicColorObjectIOS = var3;
        var3 = 0;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.IS_IOS;
        var2.IS_IOS = var3;
        var3 = _closure1_slot9;
        var2.ERROR_MESSAGES = var3;
        var3 = _closure1_slot16;
        var2.processDynamicColorObjectIOS = var3;
        var0.__closure = var2;
        var2 = 3532980737440.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot19;
        var0.__initData = var1;
        return var0;
    };
    var5 = var3.bind(var0)();
    var _closure1_slot20 = var5;
    var3 = {};
    var4 = "function unprocessColor_Pnpm_colorsTs14(value){const{unprocessColorNumber,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,unprocessDynamicColorObjectIOS}=this.__closure;if(typeof value==='number'){return unprocessColorNumber(value);}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new ReanimatedError(ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}return unprocessDynamicColorObjectIOS(value);}throw new ReanimatedError(ERROR_MESSAGES.invalidProcessedColor(value));}";
    var3.code = var4;
    var _closure1_slot21 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34238: for (var _fun34238_ip = 0;;) switch (_fun34238_ip) {
                case 0:
                    var2 = arg0;
                    var1 = 'number';
                    var0 = typeof var2;
                    if (!(var1 !== var0)) {
                        _fun34238_ip = 207;
                        continue _fun34238
                    }
                case 17:
                    var3 = _closure1_slot5;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    if (var3) {
                        _fun34238_ip = 205;
                        continue _fun34238
                    }
                case 37:
                    var3 = _closure1_slot8;
                    var3 = var3.bind(var1)(var2);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    if (var3) {
                        _fun34238_ip = 112;
                        continue _fun34238
                    }
                case 57:
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var7 = var3.ReanimatedError;
                    var6 = _closure1_slot9;
                    var3 = var6.invalidProcessedColor;
                    var8 = var3.bind(var6)(var2);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var9 = var6;
                    var3 = new var9[var7](var8, var7);
                    var3 = var3 instanceof Object ? var3 : var6;
                    throw var3;
                case 112:
                    var3 = 0;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.IS_IOS;
                    if (var3) {
                        _fun34238_ip = 194;
                        continue _fun34238
                    }
                case 132:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ReanimatedError;
                    var4 = _closure1_slot9;
                    var3 = var4.dynamicNotAvailableOnPlatform;
                    var8 = var3.bind(var4)();
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var9 = var4;
                    var3 = new var9[var5](var8, var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
                case 194:
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                case 205:
                    return var2;
                case 207:
                    var1 = _closure1_slot13;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot13;
        var2.unprocessColorNumber = var3;
        var3 = _closure1_slot5;
        var2.isPlatformColorObject = var3;
        var3 = _closure1_slot8;
        var2.isDynamicColorObjectIOS = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 0;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.IS_IOS;
        var2.IS_IOS = var3;
        var3 = _closure1_slot9;
        var2.ERROR_MESSAGES = var3;
        var3 = _closure1_slot18;
        var2.unprocessDynamicColorObjectIOS = var3;
        var0.__closure = var2;
        var2 = 11221362619601.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot21;
        var0.__initData = var1;
        return var0;
    };
    var4 = var3.bind(var0)();
    var _closure1_slot22 = var4;
    var3 = {};
    var10 = 'function processColorsInProps_Pnpm_colorsTs15(props){const{ColorProperties,processColor}=this.__closure;for(const key in props){if(!ColorProperties.includes(key)){continue;}const value=props[key];props[key]=Array.isArray(value)?value.map(function(c){return processColor(c);}):processColor(value);}}';
    var3.code = var10;
    var _closure1_slot23 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34240: for (var _fun34240_ip = 0;;) switch (_fun34240_ip) {
                case 0:
                    var10 = arg0;
                    var8 = var10;
                    var0 = undefined;
                    var3 = global;
                    var2 = 1;
                    var1 = undefined;
                    for (var5 in var8)
                        case 28: {
                            case 37: var14 = var5;
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var12 = var12[var2];
                            var12 = var13.bind(var0)(var12);
                            var13 = var12.ColorProperties;
                            var12 = var13.includes;
                            var12 = var12.bind(var13)(var14);
                            if (!var12) {
                                _fun34240_ip = 28;
                                continue _fun34240
                            }
                            case 76: var12 = var10[var14];
                            var15 = var3.Array;
                            var13 = var15.isArray;
                            var13 = var13.bind(var15)(var12);
                            if (var13) {
                                _fun34240_ip = 110;
                                continue _fun34240
                            }
                            case 99: var13 = _closure1_slot20;
                            var13 = var13.bind(var0)(var12);
                            _fun34240_ip = 125;
                            continue _fun34240;
                            case 110: var16 = var12.map;
                            var15 = function(arg0) { // Environment: var11
                                var2 = _closure1_slot20;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var13 = var16.bind(var12)(var15);
                            case 125: var10[var14] = var13;
                            var1 = var12;
                            _fun34240_ip = 28;
                            continue _fun34240;
                        }
                case 134:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.ColorProperties;
        var2.ColorProperties = var3;
        var3 = _closure1_slot20;
        var2.processColor = var3;
        var0.__closure = var2;
        var2 = 10982881159897.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot23;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var10 = {};
    var11 = 'function unprocessColorsInProps_Pnpm_colorsTs16(props){const{ColorProperties,unprocessColor}=this.__closure;for(const key in props){if(!ColorProperties.includes(key)){continue;}const value=props[key];props[key]=Array.isArray(value)?value.map(function(c){return unprocessColor(c);}):unprocessColor(value);}}';
    var10.code = var11;
    var _closure1_slot24 = var10;
    var1 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34243: for (var _fun34243_ip = 0;;) switch (_fun34243_ip) {
                case 0:
                    var10 = arg0;
                    var8 = var10;
                    var0 = undefined;
                    var3 = global;
                    var2 = 1;
                    var1 = undefined;
                    for (var5 in var8)
                        case 28: {
                            case 37: var14 = var5;
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var12 = var12[var2];
                            var12 = var13.bind(var0)(var12);
                            var13 = var12.ColorProperties;
                            var12 = var13.includes;
                            var12 = var12.bind(var13)(var14);
                            if (!var12) {
                                _fun34243_ip = 28;
                                continue _fun34243
                            }
                            case 76: var12 = var10[var14];
                            var15 = var3.Array;
                            var13 = var15.isArray;
                            var13 = var13.bind(var15)(var12);
                            if (var13) {
                                _fun34243_ip = 110;
                                continue _fun34243
                            }
                            case 99: var13 = _closure1_slot22;
                            var13 = var13.bind(var0)(var12);
                            _fun34243_ip = 125;
                            continue _fun34243;
                            case 110: var16 = var12.map;
                            var15 = function(arg0) { // Environment: var11
                                var2 = _closure1_slot22;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var13 = var16.bind(var12)(var15);
                            case 125: var10[var14] = var13;
                            var1 = var12;
                            _fun34243_ip = 28;
                            continue _fun34243;
                        }
                case 134:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.ColorProperties;
        var2.ColorProperties = var3;
        var3 = _closure1_slot22;
        var2.unprocessColor = var3;
        var0.__closure = var2;
        var2 = 1282697128442.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot24;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.PlatformColor = var9;
    var2.DynamicColorIOS = var8;
    var2.ERROR_MESSAGES = var7;
    var2.processColorNumber = var6;
    var2.processColor = var5;
    var2.unprocessColor = var4;
    var2.processColorsInProps = var3;
    var2.unprocessColorsInProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3832, 3764, 3833, 3732]);