// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = {};
    var3 = 'function valueUnpacker_Pnpm_valueUnpackerTs1(objectToUnpack,category,remoteFunctionName){let workletsCache=global.__workletsCache;let handleCache=global.__handleCache;if(workletsCache===undefined){workletsCache=global.__workletsCache=new Map();handleCache=global.__handleCache=new WeakMap();}const workletHash=objectToUnpack.__workletHash;if(workletHash!==undefined){let workletFun=workletsCache.get(workletHash);if(workletFun===undefined){const initData=objectToUnpack.__initData;if(global.evalWithSourceMap){workletFun=global.evalWithSourceMap(\'(\'+initData.code+\'\\n)\',initData.location,initData.sourceMap);}else if(global.evalWithSourceUrl){workletFun=global.evalWithSourceUrl(\'(\'+initData.code+\'\\n)\',"worklet_"+workletHash);}else{workletFun=eval(\'(\'+initData.code+\'\\n)\');}workletsCache.set(workletHash,workletFun);}const functionInstance=workletFun.bind(objectToUnpack);objectToUnpack._recur=functionInstance;return functionInstance;}else if(objectToUnpack.__init!==undefined){let value=handleCache.get(objectToUnpack);if(value===undefined){value=objectToUnpack.__init();handleCache.set(objectToUnpack,value);}return value;}else if(category===\'RemoteFunction\'){const fun=function(){const label=remoteFunctionName?"function `"+remoteFunctionName+"`":\'anonymous function\';throw new Error("[Reanimated] Tried to synchronously call a non-worklet "+label+" on the UI thread.\\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#tried-to-synchronously-call-a-non-worklet-function-on-the-ui-thread for more details.");};fun.__remoteFunction=objectToUnpack;return fun;}else{throw new Error("[Reanimated] Data type in category \\""+category+"\\" not recognized by value unpacker: \\""+_toString(objectToUnpack)+"\\".");}}';
    var0.code = var3;
    var _closure1_slot1 = var0;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun33319: for (var _fun33319_ip = 0;;) switch (_fun33319_ip) {
                case 0:
                    var1 = arg0;
                    var13 = arg1;
                    var0 = arg2;
                    var _closure3_slot0 = var0;
                    var0 = _closure1_slot0;
                    var5 = var0.__workletsCache;
                    var8 = var0.__handleCache;
                    var0 = undefined;
                    if (!(var0 === var5)) {
                        _fun33319_ip = 116;
                        continue _fun33319
                    }
                case 40:
                    var7 = _closure1_slot0;
                    var3 = global;
                    var4 = var3.Map;
                    var9 = var4.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var4
                        }
                    });
                    var18 = var9;
                    var4 = new var18[var4](var17);
                    var4 = var4 instanceof Object ? var4 : var9;
                    var7.__workletsCache = var4;
                    var3 = var3.WeakMap;
                    var9 = var3.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var3
                        }
                    });
                    var18 = var9;
                    var3 = new var18[var3](var17);
                    var3 = var3 instanceof Object ? var3 : var9;
                    var7.__handleCache = var3;
                    var5 = var4;
                    var8 = var3;
                case 116:
                    var4 = var1.__workletHash;
                    if (!(var0 === var4)) {
                        _fun33319_ip = 280;
                        continue _fun33319
                    }
                case 128:
                    var3 = var1.__init;
                    if (!(var0 === var3)) {
                        _fun33319_ip = 240;
                        continue _fun33319
                    }
                case 138:
                    var3 = 'RemoteFunction';
                    if (!(var3 !== var13)) {
                        _fun33319_ip = 227;
                        continue _fun33319
                    }
                case 148:
                    var3 = global;
                    var9 = var3.Error;
                    var7 = var3._toString;
                    var15 = var7.bind(var0)(var1);
                    var3 = var3.HermesInternal;
                    var11 = var3.concat;
                    var18 = '[Reanimated] Data type in category "';
                    var16 = '" not recognized by value unpacker: "';
                    var14 = '".';
                    var17 = var13;
                    var17 = var18[var11](var17, var16, var15, var14, var13);
                    var7 = var9.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var9
                        }
                    });
                    var18 = var7;
                    var3 = new var18[var9](var17, var16);
                    var3 = var3 instanceof Object ? var3 : var7;
                    throw var3;
                case 227:
                    var2 = function() {
                        _fun33320: for (var _fun33320_ip = 0;;) switch (_fun33320_ip) {
                            case 0:
                                var0 = global;
                                var2 = var0.Error;
                                var3 = _closure3_slot0;
                                var4 = 'anonymous function';
                                if (!var3) {
                                    _fun33320_ip = 55;
                                    continue _fun33320
                                }
                            case 24:
                                var6 = _closure3_slot0;
                                var1 = var0.HermesInternal;
                                var5 = var1.concat;
                                var3 = 'function `';
                                var1 = '`';
                                var4 = var5.bind(var3)(var6, var1);
                            case 55:
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var1 = '[Reanimated] Tried to synchronously call a non-worklet ';
                                var0 = ' on the UI thread.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#tried-to-synchronously-call-a-non-worklet-function-on-the-ui-thread for more details.';
                                var8 = var3.bind(var1)(var4, var0);
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var9 = var1;
                                var0 = new var9[var2](var8, var7);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var2.__remoteFunction = var1;
                    return var2;
                case 240:
                    var2 = var8.get;
                    var2 = var2.bind(var8)(var1);
                    if (!(var0 === var2)) {
                        _fun33319_ip = 278;
                        continue _fun33319
                    }
                case 254:
                    var3 = var1.__init;
                    var3 = var3.bind(var1)();
                    var7 = var8.set;
                    var7 = var7.bind(var8)(var1, var3);
                    var2 = var3;
                case 278:
                    return var2;
                case 280:
                    var2 = var5.get;
                    var2 = var2.bind(var5)(var4);
                    if (!(var0 === var2)) {
                        _fun33319_ip = 485;
                        continue _fun33319
                    }
                case 297:
                    var3 = var1.__initData;
                    var0 = _closure1_slot0;
                    var0 = var0.evalWithSourceMap;
                    var9 = _closure1_slot0;
                    if (var0) {
                        _fun33319_ip = 422;
                        continue _fun33319
                    }
                case 319:
                    var0 = var9.evalWithSourceUrl;
                    if (var0) {
                        _fun33319_ip = 357;
                        continue _fun33319
                    }
                case 328:
                    var7 = var3.code;
                    var0 = '(';
                    var7 = var0 + var7;
                    var0 = '\n)';
                    var0 = var7 + var0;
                    var0 = eval(var0);
                    _fun33319_ip = 420;
                    continue _fun33319;
                case 357:
                    var10 = _closure1_slot0;
                    var8 = var10.evalWithSourceUrl;
                    var7 = var3.code;
                    var6 = '(';
                    var11 = var6 + var7;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var7 = var6.concat;
                    var6 = 'worklet_';
                    var7 = var7.bind(var6)(var4);
                    var6 = '\n)';
                    var6 = var11 + var6;
                    var0 = var8.bind(var10)(var6, var7);
                case 420:
                    _fun33319_ip = 471;
                    continue _fun33319;
                case 422:
                    var8 = var9.evalWithSourceMap;
                    var7 = var3.code;
                    var6 = '(';
                    var10 = var6 + var7;
                    var7 = var3.location;
                    var6 = var3.sourceMap;
                    var3 = '\n)';
                    var3 = var10 + var3;
                    var0 = var8.bind(var9)(var3, var7, var6);
                case 471:
                    var3 = var5.set;
                    var3 = var3.bind(var5)(var4, var0);
                    var2 = var0;
                case 485:
                    var0 = var2.bind;
                    var0 = var0.bind(var2)(var1);
                    var1._recur = var0;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 7175751357828.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot1;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var3.bind(var0)();
    var _closure1_slot2 = var3;
    var4 = 'function pnpm_valueUnpackerTs2(){}';
    var3 = {};
    var3.code = var4;
    var1 = function() {
        var0 = _closure1_slot2;
        var0 = var0.__initData;
        var0 = var0.code;
        return var0;
    };
    var2.getValueUnpackerCode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);