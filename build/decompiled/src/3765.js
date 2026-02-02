// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function checkIfConfigIsValid_Pnpm_springUtilsTs1(config){const{logger}=this.__closure;var _config$clamp,_config$clamp2;let errorMessage=\'\';[\'stiffness\',\'damping\',\'dampingRatio\',\'restDisplacementThreshold\',\'restSpeedThreshold\',\'mass\'].forEach(function(prop){const value=config[prop];if(value<=0){errorMessage+=", "+prop+" must be grater than zero but got "+value;}});if(config.duration<0){errorMessage+=", duration can\'t be negative, got "+config.duration;}if((_config$clamp=config.clamp)!==null&&_config$clamp!==void 0&&_config$clamp.min&&(_config$clamp2=config.clamp)!==null&&_config$clamp2!==void 0&&_config$clamp2.max&&config.clamp.min>config.clamp.max){errorMessage+=", clamp.min should be lower than clamp.max, got clamp: {min: "+config.clamp.min+", max: "+config.clamp.max+"} ";}if(errorMessage!==\'\'){logger.warn(\'Invalid spring config\'+errorMessage);}return errorMessage===\'\';}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33768: for (var _fun33768_ip = 0;;) switch (_fun33768_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var1 = '';
                    var _closure3_slot1 = var1;
                    var5 = ['stiffness', 'damping', 'dampingRatio', 'restDisplacementThreshold', 'restSpeedThreshold', 'mass'];
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var0
                        _fun33769: for (var _fun33769_ip = 0;;) switch (_fun33769_ip) {
                            case 0:
                                var6 = arg0;
                                var0 = _closure3_slot0;
                                var5 = var0[var6];
                                var0 = 0;
                                if (!(var5 <= var0)) {
                                    _fun33769_ip = 64;
                                    continue _fun33769
                                }
                            case 20:
                                var2 = _closure3_slot1;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var4 = var0.concat;
                                var3 = ', ';
                                var0 = ' must be grater than zero but got ';
                                var0 = var4.bind(var3)(var6, var0, var5);
                                var0 = var2 + var0;
                                _closure3_slot1 = var0;
                            case 64:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var4 = var2.duration;
                    var3 = 0;
                    if (!(var4 < var3)) {
                        _fun33768_ip = 94;
                        continue _fun33768
                    }
                case 53:
                    var4 = _closure3_slot1;
                    var6 = var2.duration;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var3 = ", duration can't be negative, got ";
                    var3 = var5.bind(var3)(var6);
                    var3 = var4 + var3;
                    _closure3_slot1 = var3;
                case 94:
                    var4 = var2.clamp;
                    var7 = null;
                    var3 = var7 != var4;
                    if (!var3) {
                        _fun33768_ip = 114;
                        continue _fun33768
                    }
                case 109:
                    var3 = var4.min;
                case 114:
                    var4 = undefined;
                    var5 = undefined;
                    if (!var3) {
                        _fun33768_ip = 134;
                        continue _fun33768
                    }
                case 121:
                    var6 = var2.clamp;
                    var3 = var7 != var6;
                    var5 = var6;
                case 134:
                    if (!var3) {
                        _fun33768_ip = 142;
                        continue _fun33768
                    }
                case 137:
                    var3 = var5.max;
                case 142:
                    if (!var3) {
                        _fun33768_ip = 171;
                        continue _fun33768
                    }
                case 145:
                    var5 = var2.clamp;
                    var6 = var5.min;
                    var5 = var2.clamp;
                    var5 = var5.max;
                    var3 = var6 > var5;
                case 171:
                    if (!var3) {
                        _fun33768_ip = 243;
                        continue _fun33768
                    }
                case 174:
                    var3 = _closure3_slot1;
                    var5 = var2.clamp;
                    var13 = var5.min;
                    var2 = var2.clamp;
                    var11 = var2.max;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var14 = ', clamp.min should be lower than clamp.max, got clamp: {min: ';
                    var12 = ', max: ';
                    var10 = '} ';
                    var2 = var14[var7](var13, var12, var11, var10, var9);
                    var2 = var3 + var2;
                    _closure3_slot1 = var2;
                case 243:
                    var2 = _closure3_slot1;
                    if (!(var1 !== var2)) {
                        _fun33768_ip = 304;
                        continue _fun33768
                    }
                case 251:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 2;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.logger;
                    var3 = var4.warn;
                    var5 = _closure3_slot1;
                    var2 = 'Invalid spring config';
                    var2 = var2 + var5;
                    var2 = var3.bind(var4)(var2);
                case 304:
                    var0 = _closure3_slot1;
                    var0 = var1 === var0;
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.logger;
        var2.logger = var3;
        var0.__closure = var2;
        var2 = 16835320063819.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var9 = var3.bind(var0)();
    var3 = {};
    var4 = 'function bisectRoot_Pnpm_springUtilsTs2({min:min,max:max,func:func,maxIterations=20}){const ACCURACY=0.00005;let idx=maxIterations;let current=(max+min)/2;while(Math.abs(func(current))>ACCURACY&&idx>0){idx-=1;if(func(current)<0){min=current;}else{max=current;}current=(min+max)/2;}return current;}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33771: for (var _fun33771_ip = 0;;) switch (_fun33771_ip) {
                case 0:
                    var0 = arg0;
                    var11 = var0.min;
                    var10 = var0.max;
                    var9 = var0.func;
                    var0 = var0.maxIterations;
                    var8 = 20;
                    var7 = undefined;
                    if (!(var7 !== var0)) {
                        _fun33771_ip = 39;
                        continue _fun33771
                    }
                case 36:
                    var8 = var0;
                case 39:
                    var0 = var10 + var11;
                    var6 = 2;
                    var12 = var0 / var6;
                    var5 = global;
                    var2 = var5.Math;
                    var1 = var2.abs;
                    var0 = var9.bind(var7)(var12);
                    var1 = var1.bind(var2)(var0);
                    var4 = 5e-05;
                    var0 = var12;
                    if (!(var1 > var4)) {
                        _fun33771_ip = 181;
                        continue _fun33771
                    }
                case 91:
                    var3 = 0;
                    var2 = 1;
                    var1 = var12;
                    var0 = var1;
                    if (!(var8 > var3)) {
                        _fun33771_ip = 181;
                        continue _fun33771
                    }
                case 106:
                    var8 = var8 - var2;
                    var14 = var9.bind(var7)(var1);
                    var12 = var1;
                    var13 = var12;
                    if (!(var14 < var3)) {
                        _fun33771_ip = 131;
                        continue _fun33771
                    }
                case 125:
                    var11 = var12;
                    var13 = var10;
                case 131:
                    var12 = var11 + var13;
                    var12 = var12 / var6;
                    var16 = var5.Math;
                    var15 = var16.abs;
                    var14 = var9.bind(var7)(var12);
                    var14 = var15.bind(var16)(var14);
                    var0 = var12;
                    if (!(var14 > var4)) {
                        _fun33771_ip = 181;
                        continue _fun33771
                    }
                case 168:
                    var10 = var13;
                    var1 = var12;
                    var0 = var1;
                    if (var8 > var3) {
                        _fun33771_ip = 106;
                        continue _fun33771
                    }
                case 181:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 3467677822604.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var8 = var3.bind(var0)();
    var _closure1_slot6 = var8;
    var3 = {};
    var4 = 'function initialCalculations_Pnpm_springUtilsTs3(mass=0,config){if(config.skipAnimation){return{zeta:0,omega0:0,omega1:0};}if(config.useDuration){const{stiffness:k,dampingRatio:zeta}=config;const omega0=Math.sqrt(k/mass);const omega1=omega0*Math.sqrt(1-zeta**2);return{zeta:zeta,omega0:omega0,omega1:omega1};}else{const{damping:c,mass:m,stiffness:k}=config;const zeta=c/(2*Math.sqrt(k*m));const omega0=Math.sqrt(k/m);const omega1=omega0*Math.sqrt(1-zeta**2);return{zeta:zeta,omega0:omega0,omega1:omega1};}}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var0 = function() {
            _fun33773: for (var _fun33773_ip = 0;;) switch (_fun33773_ip) {
                case 0:
                    var1 = undefined;
                    var0 = undefined;
                    var3 = arguments.length;
                    var2 = 0;
                    var3 = var3 > var2;
                    var4 = 0;
                    if (!var3) {
                        _fun33773_ip = 32;
                        continue _fun33773
                    }
                case 18:
                    var3 = arguments[var2];
                    var4 = 0;
                    if (!(var1 !== var3)) {
                        _fun33773_ip = 32;
                        continue _fun33773
                    }
                case 28:
                    var4 = arguments[var2];
                case 32:
                    var2 = arguments.length;
                    var5 = 1;
                    var2 = var2 > var5;
                    var1 = undefined;
                    if (!var2) {
                        _fun33773_ip = 51;
                        continue _fun33773
                    }
                case 47:
                    var1 = arguments[var5];
                case 51:
                    var0 = var1.skipAnimation;
                    if (var0) {
                        _fun33773_ip = 291;
                        continue _fun33773
                    }
                case 63:
                    var0 = var1.useDuration;
                    if (var0) {
                        _fun33773_ip = 202;
                        continue _fun33773
                    }
                case 75:
                    var3 = var1.damping;
                    var9 = var1.mass;
                    var0 = var1.stiffness;
                    var6 = global;
                    var8 = var6.Math;
                    var7 = var8.sqrt;
                    var2 = var0 * var9;
                    var2 = var7.bind(var8)(var2);
                    var8 = 2;
                    var2 = var8 * var2;
                    var2 = var3 / var2;
                    var7 = var6.Math;
                    var3 = var7.sqrt;
                    var0 = var0 / var9;
                    var3 = var3.bind(var7)(var0);
                    var0 = {};
                    var0.zeta = var2;
                    var0.omega0 = var3;
                    var7 = var6.Math;
                    var6 = var7.sqrt;
                    var11 = var2;
                    var10 = var8;
                    var2 = exponentiationOperator(var11, var10);
                    var2 = var5 - var2;
                    var2 = var6.bind(var7)(var2);
                    var2 = var3 * var2;
                    var0.omega1 = var2;
                    return var0;
                case 202:
                    var0 = var1.stiffness;
                    var6 = var1.dampingRatio;
                    var1 = global;
                    var3 = var1.Math;
                    var2 = var3.sqrt;
                    var0 = var0 / var4;
                    var2 = var2.bind(var3)(var0);
                    var0 = {};
                    var0.zeta = var6;
                    var0.omega0 = var2;
                    var4 = var1.Math;
                    var3 = var4.sqrt;
                    var10 = 2;
                    var11 = var6;
                    var1 = exponentiationOperator(var11, var10);
                    var1 = var5 - var1;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 * var1;
                    var0.omega1 = var1;
                    return var0;
                case 291:
                    var0 = {
                        'zeta': 0,
                        'omega0': 0,
                        'omega1': 0
                    };
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 2372224089792.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var7 = var3.bind(var0)();
    var3 = {};
    var4 = 'function scaleZetaToMatchClamps_Pnpm_springUtilsTs4(animation,clamp){const{zeta:zeta,toValue:toValue,startValue:startValue}=animation;const toValueNum=Number(toValue);if(toValueNum===startValue){return zeta;}const[firstBound,secondBound]=toValueNum-startValue>0?[clamp.min,clamp.max]:[clamp.max,clamp.min];const relativeExtremum1=secondBound!==undefined?Math.abs((secondBound-toValueNum)/(toValueNum-startValue)):undefined;const relativeExtremum2=firstBound!==undefined?Math.abs((firstBound-toValueNum)/(toValueNum-startValue)):undefined;const newZeta1=relativeExtremum1!==undefined?Math.abs(Math.log(relativeExtremum1)/Math.PI):undefined;const newZeta2=relativeExtremum2!==undefined?Math.abs(Math.log(relativeExtremum2)/(2*Math.PI)):undefined;const zetaSatisfyingClamp=[newZeta1,newZeta2].filter(function(x){return x!==undefined;});return Math.max(...zetaSatisfyingClamp,zeta);}';
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun33775: for (var _fun33775_ip = 0;;) switch (_fun33775_ip) {
                case 0:
                    var1 = arg0;
                    var5 = arg1;
                    var0 = var1.zeta;
                    var3 = var1.toValue;
                    var8 = var1.startValue;
                    var2 = global;
                    var1 = var2.Number;
                    var6 = undefined;
                    var3 = var1.bind(var6)(var3);
                    if (!(var3 !== var8)) {
                        _fun33775_ip = 402;
                        continue _fun33775
                    }
                case 46:
                    var1 = var3 - var8;
                    var4 = 0;
                    if (!(!(var1 > var4))) {
                        _fun33775_ip = 80;
                        continue _fun33775
                    }
                case 56:
                    var1 = var5.max;
                    var7 = new Array(2);
                    var7[0] = var1;
                    var1 = var5.min;
                    var7[1] = var1;
                    _fun33775_ip = 105;
                    continue _fun33775;
                case 80:
                    var9 = var5.min;
                    var1 = new Array(2);
                    var1[0] = var9;
                    var5 = var5.max;
                    var1[1] = var5;
                    var7 = var1;
                case 105:
                    var5 = _closure1_slot3;
                    var10 = 2;
                    var5 = var5.bind(var6)(var7, var10);
                    var7 = var5[var4];
                    var4 = 1;
                    var4 = var5[var4];
                    var9 = undefined;
                    if (!(var6 !== var4)) {
                        _fun33775_ip = 167;
                        continue _fun33775
                    }
                case 138:
                    var11 = var2.Math;
                    var5 = var11.abs;
                    var12 = var4 - var3;
                    var4 = var3 - var8;
                    var4 = var12 / var4;
                    var9 = var5.bind(var11)(var4);
                case 167:
                    var11 = undefined;
                    if (!(var6 !== var7)) {
                        _fun33775_ip = 202;
                        continue _fun33775
                    }
                case 173:
                    var5 = var2.Math;
                    var4 = var5.abs;
                    var7 = var7 - var3;
                    var3 = var3 - var8;
                    var3 = var7 / var3;
                    var11 = var4.bind(var5)(var3);
                case 202:
                    var3 = undefined;
                    if (!(var6 !== var9)) {
                        _fun33775_ip = 257;
                        continue _fun33775
                    }
                case 208:
                    var7 = var2.Math;
                    var5 = var7.abs;
                    var8 = var2.Math;
                    var4 = var8.log;
                    var8 = var4.bind(var8)(var9);
                    var4 = var2.Math;
                    var4 = var4.PI;
                    var4 = var8 / var4;
                    var3 = var5.bind(var7)(var4);
                case 257:
                    var5 = new Array(2);
                    var5[0] = var3;
                    var3 = undefined;
                    if (!(var3 !== var11)) {
                        _fun33775_ip = 324;
                        continue _fun33775
                    }
                case 271:
                    var8 = var2.Math;
                    var7 = var8.abs;
                    var9 = var2.Math;
                    var4 = var9.log;
                    var9 = var4.bind(var9)(var11);
                    var4 = var2.Math;
                    var4 = var4.PI;
                    var4 = var10 * var4;
                    var4 = var9 / var4;
                    var3 = var7.bind(var8)(var4);
                case 324:
                    var5[1] = var3;
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var3
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3);
                    var3 = var2.Math;
                    var4 = var3.max;
                    var3 = var4.apply;
                    var2 = var2.Math;
                    var1 = _closure1_slot2;
                    var6 = var1.bind(var6)(var5);
                    var5 = var6.concat;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var1 = var5.bind(var6)(var1);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                case 402:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 5791837772627.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot8;
        var0.__initData = var1;
        return var0;
    };
    var6 = var3.bind(var0)();
    var3 = {};
    var4 = "function calculateNewMassToMatchDuration_Pnpm_springUtilsTs5(x0,config,v0){const{bisectRoot}=this.__closure;if(config.skipAnimation){return 0;}const{stiffness:k,dampingRatio:zeta,restSpeedThreshold:threshold,duration:duration}=config;const durationForMass=function(mass){'worklet';const amplitude=(mass*v0*v0+k*x0*x0)/(Math.exp(1-0.5*zeta)*k);const c=zeta*2*Math.sqrt(k*mass);return 1000*(-2*mass/c)*Math.log(threshold*0.01/amplitude)-duration;};return bisectRoot({min:0,max:100,func:durationForMass});}";
    var3.code = var4;
    var _closure1_slot9 = var3;
    var3 = {};
    var4 = 'function pnpm_springUtilsTs6(mass){const{v0,k,x0,zeta,threshold,duration}=this.__closure;const amplitude=(mass*v0*v0+k*x0*x0)/(Math.exp(1-0.5*zeta)*k);const c=zeta*2*Math.sqrt(k*mass);return 1000*(-2*mass/c)*Math.log(threshold*0.01/amplitude)-duration;}';
    var3.code = var4;
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun33778: for (var _fun33778_ip = 0;;) switch (_fun33778_ip) {
                case 0:
                    var5 = arg0;
                    var1 = arg1;
                    var7 = arg2;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var7;
                    var2 = var1.skipAnimation;
                    if (var2) {
                        _fun33778_ip = 172;
                        continue _fun33778
                    }
                case 31:
                    var6 = var1.stiffness;
                    var _closure3_slot2 = var6;
                    var4 = var1.dampingRatio;
                    var _closure3_slot3 = var4;
                    var3 = var1.restSpeedThreshold;
                    var _closure3_slot4 = var3;
                    var2 = var1.duration;
                    var _closure3_slot5 = var2;
                    var0 = function arg0() {
                        var8 = arg0;
                        var2 = _closure3_slot1;
                        var1 = var8 * var2;
                        var2 = var1 * var2;
                        var1 = _closure3_slot2;
                        var3 = _closure3_slot0;
                        var1 = var1 * var3;
                        var1 = var1 * var3;
                        var3 = var2 + var1;
                        var2 = global;
                        var5 = var2.Math;
                        var4 = var5.exp;
                        var6 = _closure3_slot3;
                        var1 = 0.5;
                        var6 = var1 * var6;
                        var1 = 1;
                        var1 = var1 - var6;
                        var4 = var4.bind(var5)(var1);
                        var1 = _closure3_slot2;
                        var1 = var4 * var1;
                        var6 = var3 / var1;
                        var1 = -2;
                        var3 = var1 * var8;
                        var4 = _closure3_slot3;
                        var1 = 2;
                        var4 = var1 * var4;
                        var7 = var2.Math;
                        var5 = var7.sqrt;
                        var1 = _closure3_slot2;
                        var1 = var1 * var8;
                        var1 = var5.bind(var7)(var1);
                        var1 = var4 * var1;
                        var5 = var2.Math;
                        var4 = var5.log;
                        var7 = _closure3_slot4;
                        var2 = 0.01;
                        var2 = var2 * var7;
                        var2 = var2 / var6;
                        var2 = var4.bind(var5)(var2);
                        var3 = var3 / var1;
                        var1 = 1000;
                        var1 = var3 * var1;
                        var1 = var1 * var2;
                        var0 = _closure3_slot5;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var1 = {};
                    var1.v0 = var7;
                    var1.k = var6;
                    var1.x0 = var5;
                    var1.zeta = var4;
                    var1.threshold = var3;
                    var1.duration = var2;
                    var0.__closure = var1;
                    var1 = 9188609427640.0;
                    var0.__workletHash = var1;
                    var2 = _closure1_slot10;
                    var0.__initData = var2;
                    var2 = _closure1_slot6;
                    var1 = {
                        'min': 0,
                        'max': 100
                    };
                    var1.func = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                case 172:
                    var0 = 0;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot6;
        var2.bisectRoot = var3;
        var0.__closure = var2;
        var2 = 4742488441783.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot9;
        var0.__initData = var1;
        return var0;
    };
    var5 = var3.bind(var0)();
    var3 = {};
    var4 = 'function criticallyDampedSpringCalculations_Pnpm_springUtilsTs7(animation,precalculatedValues){const{toValue:toValue}=animation;const{v0:v0,x0:x0,omega0:omega0,t:t}=precalculatedValues;const criticallyDampedEnvelope=Math.exp(-omega0*t);const criticallyDampedPosition=toValue-criticallyDampedEnvelope*(x0+(v0+omega0*x0)*t);const criticallyDampedVelocity=criticallyDampedEnvelope*(v0*(t*omega0-1)+t*x0*omega0*omega0);return{position:criticallyDampedPosition,velocity:criticallyDampedVelocity};}';
    var3.code = var4;
    var _closure1_slot11 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            var0 = arg1;
            var1 = arg0;
            var7 = var1.toValue;
            var6 = var0.v0;
            var5 = var0.x0;
            var4 = var0.omega0;
            var1 = var0.t;
            var0 = global;
            var3 = var0.Math;
            var2 = var3.exp;
            var0 = -var4;
            var0 = var0 * var1;
            var2 = var2.bind(var3)(var0);
            var0 = {};
            var3 = var4 * var5;
            var3 = var6 + var3;
            var3 = var3 * var1;
            var3 = var5 + var3;
            var3 = var2 * var3;
            var3 = var7 - var3;
            var0.position = var3;
            var7 = var1 * var4;
            var3 = 1;
            var3 = var7 - var3;
            var3 = var6 * var3;
            var1 = var1 * var5;
            var1 = var1 * var4;
            var1 = var1 * var4;
            var1 = var3 + var1;
            var1 = var2 * var1;
            var0.velocity = var1;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 57813752690.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot11;
        var0.__initData = var1;
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = {};
    var10 = 'function underDampedSpringCalculations_Pnpm_springUtilsTs8(animation,precalculatedValues){const{toValue:toValue,current:current,velocity:velocity}=animation;const{zeta:zeta,t:t,omega0:omega0,omega1:omega1}=precalculatedValues;const v0=-velocity;const x0=toValue-current;const sin1=Math.sin(omega1*t);const cos1=Math.cos(omega1*t);const underDampedEnvelope=Math.exp(-zeta*omega0*t);const underDampedFrag1=underDampedEnvelope*(sin1*((v0+zeta*omega0*x0)/omega1)+x0*cos1);const underDampedPosition=toValue-underDampedFrag1;const underDampedVelocity=zeta*omega0*underDampedFrag1-underDampedEnvelope*(cos1*(v0+zeta*omega0*x0)-omega1*x0*sin1);return{position:underDampedPosition,velocity:underDampedVelocity};}';
    var3.code = var10;
    var _closure1_slot12 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            var1 = arg0;
            var3 = arg1;
            var2 = var1.toValue;
            var0 = var1.current;
            var1 = var1.velocity;
            var9 = var3.zeta;
            var11 = var3.t;
            var4 = var3.omega0;
            var6 = var3.omega1;
            var8 = -var1;
            var1 = var2 - var0;
            var0 = global;
            var7 = var0.Math;
            var5 = var7.sin;
            var3 = var6 * var11;
            var5 = var5.bind(var7)(var3);
            var10 = var0.Math;
            var7 = var10.cos;
            var3 = var6 * var11;
            var7 = var7.bind(var10)(var3);
            var10 = var0.Math;
            var3 = var10.exp;
            var0 = -var9;
            var0 = var0 * var4;
            var0 = var0 * var11;
            var3 = var3.bind(var10)(var0);
            var0 = var9 * var4;
            var0 = var0 * var1;
            var0 = var8 + var0;
            var0 = var0 / var6;
            var10 = var5 * var0;
            var0 = var1 * var7;
            var0 = var10 + var0;
            var10 = var3 * var0;
            var0 = {};
            var2 = var2 - var10;
            var0.position = var2;
            var2 = var9 * var4;
            var2 = var2 * var10;
            var4 = var9 * var4;
            var4 = var4 * var1;
            var4 = var8 + var4;
            var4 = var7 * var4;
            var1 = var6 * var1;
            var1 = var1 * var5;
            var1 = var4 - var1;
            var1 = var3 * var1;
            var1 = var2 - var1;
            var0.velocity = var1;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 16542539931641.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot12;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var10 = {};
    var11 = 'function isAnimationTerminatingCalculation_Pnpm_springUtilsTs9(animation,config){const{toValue:toValue,velocity:velocity,startValue:startValue,current:current}=animation;const isOvershooting=config.overshootClamping?current>toValue&&startValue<toValue||current<toValue&&startValue>toValue:false;const isVelocity=Math.abs(velocity)<config.restSpeedThreshold;const isDisplacement=Math.abs(toValue-current)<config.restDisplacementThreshold;return{isOvershooting:isOvershooting,isVelocity:isVelocity,isDisplacement:isDisplacement};}';
    var10.code = var11;
    var _closure1_slot13 = var10;
    var1 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun33785: for (var _fun33785_ip = 0;;) switch (_fun33785_ip) {
                case 0:
                    var0 = arg0;
                    var1 = arg1;
                    var5 = var0.toValue;
                    var7 = var0.velocity;
                    var8 = var0.startValue;
                    var2 = var0.current;
                    var0 = {};
                    var3 = var1.overshootClamping;
                    var4 = !var3;
                    var3 = !var4;
                    if (var4) {
                        _fun33785_ip = 77;
                        continue _fun33785
                    }
                case 46:
                    var4 = var2 > var5;
                    if (!var4) {
                        _fun33785_ip = 57;
                        continue _fun33785
                    }
                case 53:
                    var4 = var8 < var5;
                case 57:
                    if (var4) {
                        _fun33785_ip = 74;
                        continue _fun33785
                    }
                case 60:
                    var6 = var2 < var5;
                    if (!var6) {
                        _fun33785_ip = 71;
                        continue _fun33785
                    }
                case 67:
                    var6 = var8 > var5;
                case 71:
                    var4 = var6;
                case 74:
                    var3 = var4;
                case 77:
                    var0.isOvershooting = var3;
                    var3 = global;
                    var6 = var3.Math;
                    var4 = var6.abs;
                    var6 = var4.bind(var6)(var7);
                    var4 = var1.restSpeedThreshold;
                    var4 = var6 < var4;
                    var0.isVelocity = var4;
                    var4 = var3.Math;
                    var3 = var4.abs;
                    var2 = var5 - var2;
                    var2 = var3.bind(var4)(var2);
                    var1 = var1.restDisplacementThreshold;
                    var1 = var2 < var1;
                    var0.isDisplacement = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 3775628746247.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot13;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.checkIfConfigIsValid = var9;
    var2.bisectRoot = var8;
    var2.initialCalculations = var7;
    var2.scaleZetaToMatchClamps = var6;
    var2.calculateNewMassToMatchDuration = var5;
    var2.criticallyDampedSpringCalculations = var4;
    var2.underDampedSpringCalculations = var3;
    var2.isAnimationTerminatingCalculation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 3686]);