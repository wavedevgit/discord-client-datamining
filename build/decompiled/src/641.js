// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: createDFS, environment: var0
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var0 = arg3;
        var _closure2_slot3 = var0;
        var0 = new Array(0);
        var _closure2_slot4 = var0;
        var0 = {};
        var _closure2_slot5 = var0;
        var0 = {};
        var _closure2_slot6 = var0;
        var0 = {};
        var _closure2_slot7 = var0;
        var0 = function(arg0) { // Original name: DFS, environment: var1
            _fun7285: for (var _fun7285_ip = 0;;) switch (_fun7285_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure2_slot5;
                    var2 = true;
                    var0[var3] = var2;
                    var4 = _closure2_slot4;
                    var0 = var4.push;
                    var0 = var0.bind(var4)(var3);
                    var0 = _closure2_slot7;
                    var0[var3] = var2;
                    var0 = _closure2_slot0;
                    var0 = var0[var3];
                    var0 = var0.length;
                    var6 = 0;
                    var4 = var6 < var0;
                    var0 = undefined;
                    var5 = 0;
                    if (!var4) {
                        _fun7285_ip = 183;
                        continue _fun7285
                    }
                case 64:
                    var4 = _closure2_slot0;
                    var4 = var4[var3];
                    var8 = var4[var5];
                    var4 = _closure2_slot5;
                    var4 = var4[var8];
                    if (var4) {
                        _fun7285_ip = 98;
                        continue _fun7285
                    }
                case 87:
                    var4 = _closure2_slot8;
                    var4 = var4.bind(var0)(var8);
                    _fun7285_ip = 163;
                    continue _fun7285;
                case 98:
                    var4 = _closure2_slot7;
                    var4 = var4[var8];
                    if (!var4) {
                        _fun7285_ip = 163;
                        continue _fun7285
                    }
                case 109:
                    var7 = _closure2_slot4;
                    var4 = var7.push;
                    var4 = var4.bind(var7)(var8);
                    var4 = _closure2_slot3;
                    if (var4) {
                        _fun7285_ip = 163;
                        continue _fun7285
                    }
                case 130:
                    var8 = _closure1_slot1;
                    var9 = _closure2_slot4;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var10 = var7;
                    var4 = new var10[var8](var9, var8);
                    var4 = var4 instanceof Object ? var4 : var7;
                    throw var4;
                case 163:
                    var5 = var5 + 1;
                    var4 = _closure2_slot0;
                    var4 = var4[var3];
                    var4 = var4.length;
                    if (var5 < var4) {
                        _fun7285_ip = 64;
                        continue _fun7285
                    }
                case 183:
                    var5 = _closure2_slot4;
                    var4 = var5.pop;
                    var4 = var4.bind(var5)();
                    var4 = _closure2_slot7;
                    var4 = delete var4[var3];
                    var4 = _closure2_slot1;
                    if (!var4) {
                        _fun7285_ip = 229;
                        continue _fun7285
                    }
                case 212:
                    var5 = _closure2_slot0;
                    var5 = var5[var3];
                    var5 = var5.length;
                    var4 = var6 !== var5;
                case 229:
                    if (var4) {
                        _fun7285_ip = 240;
                        continue _fun7285
                    }
                case 232:
                    var5 = _closure2_slot6;
                    var4 = var5[var3];
                case 240:
                    if (var4) {
                        _fun7285_ip = 265;
                        continue _fun7285
                    }
                case 243:
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var4 = var4.bind(var5)(var3);
                    var1 = _closure2_slot6;
                    var1[var3] = var2;
                case 265:
                    return var0;
            }
        };
        var _closure2_slot8 = var0;
        return var0;
    };
    var _closure1_slot2 = var2;
    var3 = function(arg0) { // Original name: DepGraph, environment: var0
        _fun7286: for (var _fun7286_ip = 0;;) switch (_fun7286_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = {};
                var1.nodes = var0;
                var0 = {};
                var1.outgoingEdges = var0;
                var0 = {};
                var1.incomingEdges = var0;
                var0 = var2;
                if (!var0) {
                    _fun7286_ip = 47;
                    continue _fun7286
                }
            case 35:
                var2 = var2.circular;
                var2 = !var2;
                var0 = !var2;
            case 47:
                var1.circular = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.DepGraph = var3;
    var _closure1_slot0 = var3;
    var2 = {};
    var4 = function() { // Original name: size, environment: var0
        var0 = global;
        var2 = var0.Object;
        var1 = var2.keys;
        var0 = this;
        var0 = var0.nodes;
        var0 = var1.bind(var2)(var0);
        var0 = var0.length;
        return var0;
    };
    var2.size = var4;
    var4 = function(arg0, arg1) { // Original name: addNode, environment: var0
        _fun7288: for (var _fun7288_ip = 0;;) switch (_fun7288_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var1 = this;
                var0 = undefined;
                var2 = undefined;
                var4 = var1.hasNode;
                var4 = var4.bind(var1)(var3);
                if (var4) {
                    _fun7288_ip = 80;
                    continue _fun7288
                }
            case 26:
                var4 = var1.nodes;
                var7 = arguments.length;
                var6 = 2;
                var2 = var3;
                if (!(var6 === var7)) {
                    _fun7288_ip = 48;
                    continue _fun7288
                }
            case 45:
                var2 = var5;
            case 48:
                var4[var3] = var2;
                var4 = var1.outgoingEdges;
                var2 = new Array(0);
                var4[var3] = var2;
                var2 = var1.incomingEdges;
                var1 = new Array(0);
                var2[var3] = var1;
            case 80:
                return var0;
        }
    };
    var2.addNode = var4;
    var4 = function(arg0) { // Original name: removeNode, environment: var0
        _fun7289: for (var _fun7289_ip = 0;;) switch (_fun7289_ip) {
            case 0:
                var3 = arg0;
                var1 = this;
                var _closure2_slot0 = var3;
                var2 = var1.hasNode;
                var2 = var2.bind(var1)(var3);
                if (!var2) {
                    _fun7289_ip = 94;
                    continue _fun7289
                }
            case 25:
                var2 = var1.nodes;
                var2 = delete var2[var3];
                var2 = var1.outgoingEdges;
                var2 = delete var2[var3];
                var2 = var1.incomingEdges;
                var2 = delete var2[var3];
                var3 = var1.incomingEdges;
                var2 = new Array(2);
                var2[0] = var3;
                var1 = var1.outgoingEdges;
                var2[1] = var1;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var1 = global;
                    var2 = var1.Object;
                    var1 = var2.keys;
                    var3 = var1.bind(var2)(var3);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var0
                        _fun7291: for (var _fun7291_ip = 0;;) switch (_fun7291_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = _closure3_slot0;
                                var4 = var2[var1];
                                var3 = var4.indexOf;
                                var2 = _closure2_slot0;
                                var3 = var3.bind(var4)(var2);
                                var2 = 0;
                                if (!(var3 >= var2)) {
                                    _fun7291_ip = 61;
                                    continue _fun7291
                                }
                            case 38:
                                var0 = _closure3_slot0;
                                var2 = var0[var1];
                                var1 = var2.splice;
                                var0 = 1;
                                var0 = var1.bind(var2)(var3, var0);
                            case 61:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = this;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 94:
                var0 = undefined;
                return var0;
        }
    };
    var2.removeNode = var4;
    var4 = function(arg0) { // Original name: hasNode, environment: var0
        var0 = this;
        var2 = var0.nodes;
        var1 = var2.hasOwnProperty;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.hasNode = var4;
    var4 = function(arg0) { // Original name: getNodeData, environment: var0
        _fun7293: for (var _fun7293_ip = 0;;) switch (_fun7293_ip) {
            case 0:
                var1 = arg0;
                var0 = this;
                var2 = var0.hasNode;
                var2 = var2.bind(var0)(var1);
                if (var2) {
                    _fun7293_ip = 59;
                    continue _fun7293
                }
            case 19:
                var2 = global;
                var4 = var2.Error;
                var2 = 'Node does not exist: ';
                var5 = var2 + var1;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 59:
                var0 = var0.nodes;
                var0 = var0[var1];
                return var0;
        }
    };
    var2.getNodeData = var4;
    var4 = function(arg0, arg1) { // Original name: setNodeData, environment: var0
        _fun7294: for (var _fun7294_ip = 0;;) switch (_fun7294_ip) {
            case 0:
                var2 = arg0;
                var0 = this;
                var1 = var0.hasNode;
                var1 = var1.bind(var0)(var2);
                if (var1) {
                    _fun7294_ip = 59;
                    continue _fun7294
                }
            case 19:
                var1 = global;
                var4 = var1.Error;
                var1 = 'Node does not exist: ';
                var5 = var1 + var2;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 59:
                var1 = var0.nodes;
                var0 = arg1;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var2.setNodeData = var4;
    var4 = function(arg0, arg1) { // Original name: addDependency, environment: var0
        _fun7295: for (var _fun7295_ip = 0;;) switch (_fun7295_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = this;
                var3 = var0.hasNode;
                var3 = var3.bind(var0)(var2);
                if (var3) {
                    _fun7295_ip = 62;
                    continue _fun7295
                }
            case 22:
                var3 = global;
                var5 = var3.Error;
                var3 = 'Node does not exist: ';
                var6 = var3 + var2;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = var4;
                var3 = new var7[var5](var6, var5);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
            case 62:
                var3 = var0.hasNode;
                var3 = var3.bind(var0)(var1);
                if (var3) {
                    _fun7295_ip = 116;
                    continue _fun7295
                }
            case 76:
                var3 = global;
                var5 = var3.Error;
                var3 = 'Node does not exist: ';
                var6 = var3 + var1;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = var4;
                var3 = new var7[var5](var6, var5);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
            case 116:
                var3 = var0.outgoingEdges;
                var4 = var3[var2];
                var3 = var4.indexOf;
                var3 = var3.bind(var4)(var1);
                var4 = -1;
                if (!(var4 === var3)) {
                    _fun7295_ip = 167;
                    continue _fun7295
                }
            case 147:
                var3 = var0.outgoingEdges;
                var5 = var3[var2];
                var3 = var5.push;
                var3 = var3.bind(var5)(var1);
            case 167:
                var3 = var0.incomingEdges;
                var5 = var3[var1];
                var3 = var5.indexOf;
                var3 = var3.bind(var5)(var2);
                if (!(var4 === var3)) {
                    _fun7295_ip = 212;
                    continue _fun7295
                }
            case 192:
                var0 = var0.incomingEdges;
                var1 = var0[var1];
                var0 = var1.push;
                var0 = var0.bind(var1)(var2);
            case 212:
                var0 = true;
                return var0;
        }
    };
    var2.addDependency = var4;
    var4 = function(arg0, arg1) { // Original name: removeDependency, environment: var0
        _fun7296: for (var _fun7296_ip = 0;;) switch (_fun7296_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var1 = this;
                var0 = var1.hasNode;
                var3 = var0.bind(var1)(var7);
                var0 = undefined;
                var4 = undefined;
                if (!var3) {
                    _fun7296_ip = 56;
                    continue _fun7296
                }
            case 26:
                var5 = var1.outgoingEdges;
                var6 = var5[var7];
                var5 = var6.indexOf;
                var5 = var5.bind(var6)(var2);
                var6 = 0;
                var3 = var5 >= var6;
                var4 = var5;
            case 56:
                if (!var3) {
                    _fun7296_ip = 84;
                    continue _fun7296
                }
            case 59:
                var3 = var1.outgoingEdges;
                var6 = var3[var7];
                var5 = var6.splice;
                var3 = 1;
                var3 = var5.bind(var6)(var4, var3);
            case 84:
                var3 = var1.hasNode;
                var3 = var3.bind(var1)(var2);
                if (!var3) {
                    _fun7296_ip = 128;
                    continue _fun7296
                }
            case 98:
                var5 = var1.incomingEdges;
                var6 = var5[var2];
                var5 = var6.indexOf;
                var5 = var5.bind(var6)(var7);
                var6 = 0;
                var3 = var5 >= var6;
                var4 = var5;
            case 128:
                if (!var3) {
                    _fun7296_ip = 156;
                    continue _fun7296
                }
            case 131:
                var1 = var1.incomingEdges;
                var3 = var1[var2];
                var2 = var3.splice;
                var1 = 1;
                var1 = var2.bind(var3)(var4, var1);
            case 156:
                return var0;
        }
    };
    var2.removeDependency = var4;
    var4 = function() { // Original name: clone, environment: var0
        var2 = this;
        var _closure2_slot0 = var2;
        var0 = _closure1_slot0;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var6 = var3;
        var0 = new var6[var0](var5);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure2_slot1 = var0;
        var3 = global;
        var4 = var3.Object;
        var3 = var4.keys;
        var2 = var2.nodes;
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = arg0;
            var1 = _closure2_slot1;
            var4 = var1.nodes;
            var0 = _closure2_slot0;
            var3 = var0.nodes;
            var3 = var3[var2];
            var4[var2] = var3;
            var5 = var1.outgoingEdges;
            var3 = var0.outgoingEdges;
            var6 = var3[var2];
            var3 = var6.slice;
            var4 = 0;
            var3 = var3.bind(var6)(var4);
            var5[var2] = var3;
            var1 = var1.incomingEdges;
            var0 = var0.incomingEdges;
            var3 = var0[var2];
            var0 = var3.slice;
            var0 = var0.bind(var3)(var4);
            var1[var2] = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clone = var4;
    var4 = function(arg0, arg1) { // Original name: dependenciesOf, environment: var0
        _fun7299: for (var _fun7299_ip = 0;;) switch (_fun7299_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = var1.hasNode;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun7299_ip = 59;
                    continue _fun7299
                }
            case 19:
                var0 = global;
                var4 = var0.Error;
                var0 = 'Node does not exist: ';
                var10 = var0 + var2;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var0 = new var11[var4](var10, var9);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 59:
                var0 = new Array(0);
                var6 = _closure1_slot2;
                var10 = var1.outgoingEdges;
                var7 = var1.circular;
                var3 = undefined;
                var9 = arg1;
                var11 = undefined;
                var8 = var0;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                var1 = var1.bind(var3)(var2);
                var1 = var0.indexOf;
                var3 = var1.bind(var0)(var2);
                var1 = 0;
                if (!(var3 >= var1)) {
                    _fun7299_ip = 133;
                    continue _fun7299
                }
            case 118:
                var2 = var0.splice;
                var1 = 1;
                var1 = var2.bind(var0)(var3, var1);
            case 133:
                return var0;
        }
    };
    var2.dependenciesOf = var4;
    var4 = function(arg0, arg1) { // Original name: dependantsOf, environment: var0
        _fun7300: for (var _fun7300_ip = 0;;) switch (_fun7300_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = var1.hasNode;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun7300_ip = 59;
                    continue _fun7300
                }
            case 19:
                var0 = global;
                var4 = var0.Error;
                var0 = 'Node does not exist: ';
                var10 = var0 + var2;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var0 = new var11[var4](var10, var9);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 59:
                var0 = new Array(0);
                var6 = _closure1_slot2;
                var10 = var1.incomingEdges;
                var7 = var1.circular;
                var3 = undefined;
                var9 = arg1;
                var11 = undefined;
                var8 = var0;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                var1 = var1.bind(var3)(var2);
                var1 = var0.indexOf;
                var3 = var1.bind(var0)(var2);
                var1 = 0;
                if (!(var3 >= var1)) {
                    _fun7300_ip = 133;
                    continue _fun7300
                }
            case 118:
                var2 = var0.splice;
                var1 = 1;
                var1 = var2.bind(var0)(var3, var1);
            case 133:
                return var0;
        }
    };
    var2.dependantsOf = var4;
    var4 = function(arg0) { // Original name: overallOrder, environment: var0
        _fun7301: for (var _fun7301_ip = 0;;) switch (_fun7301_ip) {
            case 0:
                var2 = this;
                var _closure2_slot0 = var2;
                var0 = new Array(0);
                var3 = global;
                var5 = var3.Object;
                var4 = var5.keys;
                var3 = var2.nodes;
                var4 = var4.bind(var5)(var3);
                var5 = var4.length;
                var3 = 0;
                if (!(var3 !== var5)) {
                    _fun7301_ip = 157;
                    continue _fun7301
                }
            case 47:
                var7 = _closure1_slot2;
                var13 = var2.outgoingEdges;
                var10 = var2.circular;
                var12 = false;
                var11 = new Array(0);
                var14 = undefined;
                var3 = var14[var7](var13, var12, var11, var10, var9);
                var _closure2_slot1 = var3;
                var5 = var4.forEach;
                var3 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = var5.bind(var4)(var3);
                var13 = var2.outgoingEdges;
                var10 = var2.circular;
                var12 = arg0;
                var14 = undefined;
                var11 = var0;
                var2 = var14[var7](var13, var12, var11, var10, var9);
                var _closure2_slot2 = var2;
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var1 = var0.incomingEdges;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var0 === var1;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 157:
                return var0;
        }
    };
    var2.overallOrder = var4;
    var3.prototype = var2;
    var3 = function(arg0) { // Environment: var0
        _fun7305: for (var _fun7305_ip = 0;;) switch (_fun7305_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = ' -> ';
                var1 = var1.bind(var2)(var0);
                var0 = 'Dependency Cycle Found: ';
                var8 = var0 + var1;
                var1 = global;
                var0 = var1.Error;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var3;
                var0 = new var9[var0](var8, var7);
                var0 = var0 instanceof Object ? var0 : var3;
                var0.cyclePath = var2;
                var4 = var1.Object;
                var3 = var4.setPrototypeOf;
                var6 = var1.Object;
                var5 = var6.getPrototypeOf;
                var2 = this;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var0, var2);
                var2 = var1.Error;
                var2 = var2.captureStackTrace;
                if (!var2) {
                    _fun7305_ip = 140;
                    continue _fun7305
                }
            case 115:
                var3 = var1.Error;
                var2 = var3.captureStackTrace;
                var1 = _closure1_slot1;
                var1 = var2.bind(var3)(var0, var1);
            case 140:
                return var0;
        }
    };
    var1.DepGraphCycleError = var3;
    var _closure1_slot1 = var3;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.create;
    var1 = var0.Error;
    var2 = var1.prototype;
    var1 = {};
    var6 = {
        'value': null,
        'enumerable': false,
        'writable': true,
        'configurable': true
    };
    var7 = var0.Error;
    var6.value = var7;
    var1.constructor = var6;
    var1 = var4.bind(var5)(var2, var1);
    var3.prototype = var1;
    var2 = var0.Object;
    var1 = var2.setPrototypeOf;
    var0 = var0.Error;
    var0 = var1.bind(var2)(var3, var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);