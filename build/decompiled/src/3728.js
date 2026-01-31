// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.isJest;
    var3 = var3.bind(var4)();
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function createMapperRegistry_Pnpm_mappersTs1(){const{IS_JEST,isSharedValue}=this.__closure;const mappers=new Map();let sortedMappers=[];let runRequested=false;let processingMappers=false;function updateMappersOrder(){const pre=new Map();mappers.forEach(function(mapper){if(mapper.outputs){for(const output of mapper.outputs){const preMappers=pre.get(output);if(preMappers===undefined){pre.set(output,[mapper]);}else{preMappers.push(mapper);}}}});const visited=new Set();const newOrder=[];function dfs(mapper){visited.add(mapper);for(const input of mapper.inputs){const preMappers=pre.get(input);if(preMappers){for(const preMapper of preMappers){if(!visited.has(preMapper)){dfs(preMapper);}}}}newOrder.push(mapper);}mappers.forEach(function(mapper){if(!visited.has(mapper)){dfs(mapper);}});sortedMappers=newOrder;}function mapperRun(){runRequested=false;if(processingMappers){return;}try{processingMappers=true;if(mappers.size!==sortedMappers.length){updateMappersOrder();}for(const mapper of sortedMappers){if(mapper.dirty){mapper.dirty=false;mapper.worklet();}}}finally{processingMappers=false;}}function maybeRequestUpdates(){if(IS_JEST){mapperRun();}else if(!runRequested){if(processingMappers){requestAnimationFrame(mapperRun);}else{queueMicrotask(mapperRun);}runRequested=true;}}function extractInputs(inputs,resultArray){if(Array.isArray(inputs)){for(const input of inputs){input&&extractInputs(input,resultArray);}}else if(isSharedValue(inputs)){resultArray.push(inputs);}else if(Object.getPrototypeOf(inputs)===Object.prototype){for(const element of Object.values(inputs)){element&&extractInputs(element,resultArray);}}return resultArray;}return{start:function(mapperID,worklet,inputs,outputs){const mapper={id:mapperID,dirty:true,worklet:worklet,inputs:extractInputs(inputs,[]),outputs:outputs};mappers.set(mapper.id,mapper);sortedMappers=[];for(const sv of mapper.inputs){sv.addListener(mapper.id,function(){mapper.dirty=true;maybeRequestUpdates();});}maybeRequestUpdates();},stop:function(mapperID){const mapper=mappers.get(mapperID);if(mapper){mappers.delete(mapper.id);sortedMappers=[];for(const sv of mapper.inputs){sv.removeListener(mapper.id);}}}};}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function() { // Original name: createMapperRegistry, environment: var0
            var0 = function() { // Original name: updateMappersOrder, environment: var1
                var0 = function(arg0) { // Original name: dfs, environment: var2
                    _fun33537: for (var _fun33537_ip = 0;;) switch (_fun33537_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = undefined;
                            var5 = undefined;
                            var6 = undefined;
                            var4 = _closure4_slot1;
                            var2 = var4.add;
                            var2 = var2.bind(var4)(var3);
                            var7 = var3.inputs;
                            var2 = var7;
                            var4 = var2[Symbol.iterator];
                            var2 = var4().next;
                        case 38:
                            var9 = var2().value;
                            var7 = var4;
                            if (!(var7 !== var0)) {
                                _fun33537_ip = 139;
                                continue _fun33537
                            }
                        case 49: // try_start_1
                            var8 = _closure4_slot0;
                            var7 = var8.get;
                            var7 = var7.bind(var8)(var9);
                            var5 = var7;
                            if (!var7) {
                                _fun33537_ip = 130;
                                continue _fun33537
                            }
                        case 69:
                            var9 = var5;
                            var7 = var9;
                            var8 = var7[Symbol.iterator];
                            var7 = var8().next;
                        case 78:
                            var11 = var7().value;
                            var9 = var8;
                            if (!(var9 !== var0)) {
                                _fun33537_ip = 130;
                                continue _fun33537
                            }
                        case 89: // try_start_0
                            var6 = var11;
                            var10 = _closure4_slot1;
                            var9 = var10.has;
                            var9 = var9.bind(var10)(var11);
                            if (var9) {
                                _fun33537_ip = 121;
                                continue _fun33537
                            }
                        case 109:
                            var10 = _closure4_slot3;
                            var9 = var6;
                            var9 = var10.bind(var0)(var9);
                        case 121: // try_end0
                            _fun33537_ip = 78;
                            continue _fun33537;
                        case 123: // catch_target0
                            CatchBlockStart(arg_register = 7);
                            var8.return();
                            throw var7;
                        case 130: // try_end1
                            _fun33537_ip = 38;
                            continue _fun33537;
                        case 132: // catch_target1
                            CatchBlockStart(arg_register = 2);
                            var4.return();
                            throw var2;
                        case 139:
                            var2 = _closure4_slot2;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                            return var0;
                    }
                };
                var _closure4_slot3 = var0;
                var0 = global;
                var1 = var0.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var3;
                var1 = new var7[var1](var6);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure4_slot0 = var1;
                var5 = _closure3_slot0;
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var2
                    _fun33538: for (var _fun33538_ip = 0;;) switch (_fun33538_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = var1;
                            var0 = undefined;
                            var5 = undefined;
                            var6 = undefined;
                            var1 = var1.outputs;
                            if (!var1) {
                                _fun33538_ip = 130;
                                continue _fun33538
                            }
                        case 21:
                            var1 = var4;
                            var1 = var1.outputs;
                            var3 = var1;
                            var2 = var3[Symbol.iterator];
                            var3 = var2().next;
                        case 39:
                            var9 = var3().value;
                            var7 = var2;
                            if (!(var7 !== var0)) {
                                _fun33538_ip = 130;
                                continue _fun33538
                            }
                        case 50: // try_start_0
                            var5 = var9;
                            var8 = _closure4_slot0;
                            var7 = var8.get;
                            var7 = var7.bind(var8)(var9);
                            var6 = var7;
                            if (!(var0 !== var7)) {
                                _fun33538_ip = 92;
                                continue _fun33538
                            }
                        case 74:
                            var9 = var6;
                            var8 = var9.push;
                            var7 = var4;
                            var7 = var8.bind(var9)(var7);
                            _fun33538_ip = 121;
                            continue _fun33538;
                        case 92:
                            var10 = _closure4_slot0;
                            var9 = var10.set;
                            var8 = var5;
                            var11 = var4;
                            var7 = new Array(1);
                            var7[0] = var11;
                            var7 = var9.bind(var10)(var8, var7);
                        case 121: // try_end0
                            _fun33538_ip = 39;
                            continue _fun33538;
                        case 123: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 130:
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var0 = var0.Set;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var7 = var3;
                var0 = new var7[var0](var6);
                var0 = var0 instanceof Object ? var0 : var3;
                var _closure4_slot1 = var0;
                var0 = new Array(0);
                var _closure4_slot2 = var0;
                var4 = _closure3_slot0;
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun33539: for (var _fun33539_ip = 0;;) switch (_fun33539_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure4_slot1;
                            var1 = var3.has;
                            var1 = var1.bind(var3)(var2);
                            if (var1) {
                                _fun33539_ip = 34;
                                continue _fun33539
                            }
                        case 23:
                            var1 = _closure4_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                _closure3_slot1 = var0;
                var0 = undefined;
                return var0;
            };
            var _closure3_slot4 = var0;
            var0 = function() { // Original name: mapperRun, environment: var1
                _fun33540: for (var _fun33540_ip = 0;;) switch (_fun33540_ip) {
                    case 0:
                        var0 = undefined;
                        var5 = undefined;
                        var2 = false;
                        _closure3_slot2 = var2;
                        var1 = _closure3_slot3;
                        if (var1) {
                            _fun33540_ip = 131;
                            continue _fun33540
                        }
                    case 20: // try_start_1
                        var1 = true;
                        _closure3_slot3 = var1;
                        var1 = _closure3_slot0;
                        var4 = var1.size;
                        var1 = _closure3_slot1;
                        var1 = var1.length;
                        if (!(var4 !== var1)) {
                            _fun33540_ip = 56;
                            continue _fun33540
                        }
                    case 48:
                        var1 = _closure3_slot4;
                        var1 = var1.bind(var0)();
                    case 56:
                        var6 = _closure3_slot1;
                        var1 = var6;
                        var4 = var1[Symbol.iterator];
                        var1 = var4().next;
                    case 66:
                        var6 = var1().value;
                        var7 = var4;
                        if (!(var7 !== var0)) {
                            _fun33540_ip = 117;
                            continue _fun33540
                        }
                    case 77: // try_start_0
                        var5 = var6;
                        var6 = var6.dirty;
                        if (!var6) {
                            _fun33540_ip = 108;
                            continue _fun33540
                        }
                    case 89:
                        var7 = var5;
                        var7.dirty = var2;
                        var6 = var7.worklet;
                        var6 = var6.bind(var7)();
                    case 108: // try_end0
                        _fun33540_ip = 66;
                        continue _fun33540;
                    case 110: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4.return();
                        throw var1;
                    case 117: // try_end1
                        _closure3_slot3 = var2;
                        _fun33540_ip = 131;
                        continue _fun33540;
                    case 123: // catch_target1
                        CatchBlockStart(arg_register = 1);
                        _closure3_slot3 = var2;
                        throw var1;
                    case 131:
                        return var0;
                }
            };
            var _closure3_slot5 = var0;
            var0 = function() { // Original name: maybeRequestUpdates, environment: var1
                _fun33541: for (var _fun33541_ip = 0;;) switch (_fun33541_ip) {
                    case 0:
                        var1 = _closure1_slot3;
                        if (var1) {
                            _fun33541_ip = 73;
                            continue _fun33541
                        }
                    case 13:
                        var1 = _closure3_slot2;
                        if (var1) {
                            _fun33541_ip = 83;
                            continue _fun33541
                        }
                    case 20:
                        var2 = _closure3_slot3;
                        var1 = global;
                        if (var2) {
                            _fun33541_ip = 48;
                            continue _fun33541
                        }
                    case 29:
                        var4 = var1.queueMicrotask;
                        var3 = _closure3_slot5;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        _fun33541_ip = 65;
                        continue _fun33541;
                    case 48:
                        var3 = var1.requestAnimationFrame;
                        var2 = _closure3_slot5;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                    case 65:
                        var1 = true;
                        _closure3_slot2 = var1;
                        _fun33541_ip = 83;
                        continue _fun33541;
                    case 73:
                        var1 = _closure3_slot5;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 83:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot6 = var0;
            var0 = function(arg0, arg1) { // Original name: extractInputs, environment: var1
                _fun33542: for (var _fun33542_ip = 0;;) switch (_fun33542_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = arg1;
                        var4 = undefined;
                        var5 = undefined;
                        var7 = undefined;
                        var2 = global;
                        var6 = var2.Array;
                        var3 = var6.isArray;
                        var3 = var3.bind(var6)(var1);
                        if (var3) {
                            _fun33542_ip = 190;
                            continue _fun33542
                        }
                    case 36:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 1;
                        var3 = var8[var3];
                        var6 = var6.bind(var4)(var3);
                        var3 = var6.isSharedValue;
                        var3 = var3.bind(var6)(var1);
                        if (var3) {
                            _fun33542_ip = 175;
                            continue _fun33542
                        }
                    case 73:
                        var6 = var2.Object;
                        var3 = var6.getPrototypeOf;
                        var6 = var3.bind(var6)(var1);
                        var3 = var2.Object;
                        var3 = var3.prototype;
                        if (!(var6 === var3)) {
                            _fun33542_ip = 241;
                            continue _fun33542
                        }
                    case 108:
                        var3 = var2.Object;
                        var2 = var3.values;
                        var2 = var2.bind(var3)(var1);
                        var6 = var2;
                        var3 = var6[Symbol.iterator];
                        var6 = var3().next;
                    case 133:
                        var8 = var6().value;
                        var9 = var3;
                        if (!(var9 !== var4)) {
                            _fun33542_ip = 241;
                            continue _fun33542
                        }
                    case 144: // try_start_0
                        var7 = var8;
                        if (!var8) {
                            _fun33542_ip = 166;
                            continue _fun33542
                        }
                    case 150:
                        var10 = _closure3_slot7;
                        var9 = var7;
                        var8 = var0;
                        var8 = var10.bind(var4)(var9, var8);
                    case 166: // try_end0
                        _fun33542_ip = 133;
                        continue _fun33542;
                    case 168: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3.return();
                        throw var2;
                    case 175:
                        var3 = var0;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var1);
                        _fun33542_ip = 241;
                        continue _fun33542;
                    case 190:
                        var3 = var1;
                        var2 = var3[Symbol.iterator];
                        var3 = var2().next;
                    case 199:
                        var6 = var3().value;
                        var7 = var2;
                        if (!(var7 !== var4)) {
                            _fun33542_ip = 241;
                            continue _fun33542
                        }
                    case 210: // try_start_1
                        var5 = var6;
                        if (!var6) {
                            _fun33542_ip = 232;
                            continue _fun33542
                        }
                    case 216:
                        var8 = _closure3_slot7;
                        var7 = var5;
                        var6 = var0;
                        var6 = var8.bind(var4)(var7, var6);
                    case 232: // try_end1
                        _fun33542_ip = 199;
                        continue _fun33542;
                    case 234: // catch_target1
                        CatchBlockStart(arg_register = 1);
                        var2.return();
                        throw var1;
                    case 241:
                        return var0;
                }
            };
            var _closure3_slot7 = var0;
            var0 = global;
            var0 = var0.Map;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var3 = var2;
            var0 = new var3[var0](var2);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot0 = var0;
            var0 = new Array(0);
            var _closure3_slot1 = var0;
            var0 = false;
            var _closure3_slot2 = var0;
            var _closure3_slot3 = var0;
            var0 = {};
            var2 = function(arg0, arg1, arg2, arg3) { // Original name: start, environment: var1
                _fun33543: for (var _fun33543_ip = 0;;) switch (_fun33543_ip) {
                    case 0:
                        var0 = undefined;
                        var5 = undefined;
                        var2 = {};
                        var1 = arg0;
                        var2.id = var1;
                        var1 = true;
                        var2.dirty = var1;
                        var1 = arg1;
                        var2.worklet = var1;
                        var7 = _closure3_slot7;
                        var6 = arg2;
                        var3 = new Array(0);
                        var3 = var7.bind(var0)(var6, var3);
                        var2.inputs = var3;
                        var3 = arg3;
                        var2.outputs = var3;
                        var5 = var2;
                        var _closure4_slot0 = var2;
                        var7 = _closure3_slot0;
                        var6 = var7.set;
                        var3 = var2.id;
                        var3 = var6.bind(var7)(var3, var2);
                        var3 = new Array(0);
                        _closure3_slot1 = var3;
                        var6 = var2.inputs;
                        var2 = var6;
                        var3 = var2[Symbol.iterator];
                        var2 = var3().next;
                    case 110:
                        var9 = var2().value;
                        var6 = var3;
                        if (!(var6 !== var0)) {
                            _fun33543_ip = 155;
                            continue _fun33543
                        }
                    case 121: // try_start_0
                        var8 = var9.addListener;
                        var6 = var5;
                        var7 = var6.id;
                        var6 = function() { // Environment: var4
                            var1 = _closure4_slot0;
                            var0 = true;
                            var1.dirty = var0;
                            var1 = _closure3_slot6;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var6 = var8.bind(var9)(var7, var6);
                    case 146: // try_end0
                        _fun33543_ip = 110;
                        continue _fun33543;
                    case 148: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3.return();
                        throw var2;
                    case 155:
                        var1 = _closure3_slot6;
                        var1 = var1.bind(var0)();
                        return var0;
                }
            };
            var0.start = var2;
            var1 = function(arg0) { // Original name: stop, environment: var1
                _fun33545: for (var _fun33545_ip = 0;;) switch (_fun33545_ip) {
                    case 0:
                        var0 = undefined;
                        var3 = undefined;
                        var5 = _closure3_slot0;
                        var2 = var5.get;
                        var1 = arg0;
                        var1 = var2.bind(var5)(var1);
                        var3 = var1;
                        if (!var1) {
                            _fun33545_ip = 111;
                            continue _fun33545
                        }
                    case 30:
                        var6 = _closure3_slot0;
                        var5 = var6.delete;
                        var1 = var3;
                        var2 = var1.id;
                        var2 = var5.bind(var6)(var2);
                        var2 = new Array(0);
                        _closure3_slot1 = var2;
                        var4 = var1.inputs;
                        var1 = var4;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                    case 72:
                        var6 = var1().value;
                        var4 = var2;
                        if (!(var4 !== var0)) {
                            _fun33545_ip = 111;
                            continue _fun33545
                        }
                    case 83: // try_start_0
                        var5 = var6.removeListener;
                        var4 = var3;
                        var4 = var4.id;
                        var4 = var5.bind(var6)(var4);
                    case 102: // try_end0
                        _fun33545_ip = 72;
                        continue _fun33545;
                    case 104: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2.return();
                        throw var1;
                    case 111:
                        return var0;
                }
            };
            var0.stop = var1;
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.IS_JEST = var3;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.isSharedValue;
        var2.isSharedValue = var3;
        var0.__closure = var2;
        var2 = 4849129099287.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var3 = 9999;
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'function pnpm_mappersTs2(){const{createMapperRegistry,mapperID,worklet,inputs,outputs}=this.__closure;let mapperRegistry=global.__mapperRegistry;if(mapperRegistry===undefined){mapperRegistry=global.__mapperRegistry=createMapperRegistry();}mapperRegistry.start(mapperID,worklet,inputs,outputs);}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = 'function pnpm_mappersTs3(){const{mapperID}=this.__closure;const mapperRegistry=global.__mapperRegistry;mapperRegistry===null||mapperRegistry===void 0||mapperRegistry.stop(mapperID);}';
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = function(arg0) { // Original name: startMapper, environment: var1
        _fun33546: for (var _fun33546_ip = 0;;) switch (_fun33546_ip) {
            case 0:
                var9 = arg0;
                var2 = undefined;
                var0 = undefined;
                var _closure2_slot0 = var9;
                var4 = arguments.length;
                var3 = 1;
                if (!(var4 > var3)) {
                    _fun33546_ip = 31;
                    continue _fun33546
                }
            case 23:
                var4 = arguments[var3];
                if (!(var2 === var4)) {
                    _fun33546_ip = 37;
                    continue _fun33546
                }
            case 31:
                var8 = new Array(0);
                _fun33546_ip = 41;
                continue _fun33546;
            case 37:
                var8 = arguments[var3];
            case 41:
                var _closure2_slot1 = var8;
                var4 = arguments.length;
                var6 = 2;
                if (!(var4 > var6)) {
                    _fun33546_ip = 63;
                    continue _fun33546
                }
            case 55:
                var4 = arguments[var6];
                if (!(var2 === var4)) {
                    _fun33546_ip = 69;
                    continue _fun33546
                }
            case 63:
                var7 = new Array(0);
                _fun33546_ip = 73;
                continue _fun33546;
            case 69:
                var7 = arguments[var6];
            case 73:
                var _closure2_slot2 = var7;
                var0 = _closure1_slot6;
                var0 = var0 + var3;
                _closure1_slot6 = var0;
                var _closure2_slot3 = var0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var2)(var3);
                var3 = var4.runOnUI;
                var1 = function() { // Original name: pnpm_mappersTs2, environment: var1
                    _fun33547: for (var _fun33547_ip = 0;;) switch (_fun33547_ip) {
                        case 0:
                            var0 = _closure1_slot0;
                            var6 = var0.__mapperRegistry;
                            var0 = undefined;
                            if (!(var0 === var6)) {
                                _fun33547_ip = 40;
                                continue _fun33547
                            }
                        case 19:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot5;
                            var1 = var1.bind(var0)();
                            var2.__mapperRegistry = var1;
                            var6 = var1;
                        case 40:
                            var5 = var6.start;
                            var10 = _closure2_slot3;
                            var9 = _closure2_slot0;
                            var8 = _closure2_slot1;
                            var7 = _closure2_slot2;
                            var11 = var6;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                            return var0;
                    }
                };
                var6 = {};
                var10 = _closure1_slot5;
                var6.createMapperRegistry = var10;
                var6.mapperID = var0;
                var6.worklet = var9;
                var6.inputs = var8;
                var6.outputs = var7;
                var1.__closure = var6;
                var6 = 1517453109481.0;
                var1.__workletHash = var6;
                var5 = _closure1_slot7;
                var1.__initData = var5;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var2.startMapper = var3;
    var1 = function(arg0) { // Original name: stopMapper, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.runOnUI;
        var1 = function() { // Original name: pnpm_mappersTs3, environment: var1
            _fun33549: for (var _fun33549_ip = 0;;) switch (_fun33549_ip) {
                case 0:
                    var0 = _closure1_slot0;
                    var2 = var0.__mapperRegistry;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun33549_ip = 37;
                        continue _fun33549
                    }
                case 19:
                    var1 = var2.stop;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = {};
        var5.mapperID = var6;
        var1.__closure = var5;
        var5 = 1696829263429.0;
        var1.__workletHash = var5;
        var4 = _closure1_slot8;
        var1.__initData = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var0)();
        return var0;
    };
    var2.stopMapper = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3683, 3729, 3687]);