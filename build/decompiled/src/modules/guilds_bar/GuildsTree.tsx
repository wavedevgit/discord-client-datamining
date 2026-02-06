// modules/guilds_bar/GuildsTree.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = function() {
        var0 = global;
        var2 = var0.Math;
        var1 = var2.floor;
        var3 = var0.Math;
        var0 = var3.random;
        var3 = var0.bind(var3)();
        var0 = 4294967296.0;
        var0 = var0 * var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var4 = {};
    var3 = 'root';
    var4.ROOT = var3;
    var3 = 'folder';
    var4.FOLDER = var3;
    var3 = 'guild';
    var4.GUILD = var3;
    var _closure1_slot5 = var4;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = {};
            var3 = _closure1_slot5;
            var3 = var3.ROOT;
            var1.type = var3;
            var3 = new Array(0);
            var1.children = var3;
            var2.root = var1;
            var1 = {};
            var2.nodes = var1;
            var1 = 0;
            var2.version = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getSnapshot';
        var0.key = var1;
        var1 = function() {
            _fun40323: for (var _fun40323_ip = 0;;) switch (_fun40323_ip) {
                case 0:
                    var3 = this;
                    var1 = {};
                    var9 = var3.nodes;
                    var5 = undefined;
                    var4 = 'children';
                    var0 = 'childrenIds';
                    for (var6 in var9)
                        case 31: {
                            case 40: var12 = var6;
                            var11 = var3.nodes;
                            var13 = var11[var12];
                            var11 = {};
                            var17 = var11;
                            var16 = var13;
                            var14 = copyDataProperties(var17, var16);
                            var11[var4] = var5;
                            var15 = var13.children;
                            var14 = var15.map;
                            var13 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var13 = var14.bind(var15)(var13);
                            var11[var0] = var13;
                            var1[var12] = var11;
                            _fun40323_ip = 31;
                            continue _fun40323;
                        }
                case 101:
                    var0 = {};
                    var3 = var3.root;
                    var4 = var3.children;
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.rootChildrenIds = var2;
                    var0.nodes = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(15);
        var1[0] = var0;
        var0 = {};
        var5 = 'loadSnapshot';
        var0.key = var5;
        var5 = function arg0() {
            _fun40326: for (var _fun40326_ip = 0;;) switch (_fun40326_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var3.nodes;
                    var1.nodes = var2;
                    var6 = var1.nodes;
                    for (var2 in var6)
                        case 38: {
                            case 47: var9 = var2;
                            var8 = var1.nodes;
                            var8 = var8[var9];
                            var11 = var8.childrenIds;
                            var10 = var11.map;
                            var9 = function(arg0) { // Environment: var0
                                var0 = _closure3_slot0;
                                var1 = var0.nodes;
                                var0 = arg0;
                                var0 = var1[var0];
                                return var0;
                            };
                            var9 = var10.bind(var11)(var9);
                            var8.children = var9;
                            var8 = delete var8.childrenIds;
                            _fun40326_ip = 38;
                            continue _fun40326;
                        }
                case 94:
                    var2 = var1.root;
                    var4 = var3.rootChildrenIds;
                    var3 = var4.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = _closure3_slot0;
                        var1 = var0.nodes;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0);
                    var2.children = var0;
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'moveNextTo';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun40329: for (var _fun40329_ip = 0;;) switch (_fun40329_ip) {
                case 0:
                    var2 = arg0;
                    var10 = arg1;
                    var4 = arguments[2];
                    var0 = this;
                    var9 = undefined;
                    if (!(var4 === var9)) {
                        _fun40329_ip = 20;
                        continue _fun40329
                    }
                case 18:
                    var4 = false;
                case 20:
                    var1 = var0._pluckNode;
                    var1 = var1.bind(var0)(var2);
                    var3 = var10.parentId;
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun40329_ip = 51;
                        continue _fun40329
                    }
                case 43:
                    var1 = var0.root;
                    _fun40329_ip = 67;
                    continue _fun40329;
                case 51:
                    var5 = var0.nodes;
                    var3 = var10.parentId;
                    var1 = var5[var3];
                case 67:
                    var5 = var1.children;
                    var3 = var5.indexOf;
                    var7 = var3.bind(var5)(var10);
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var8 = 2;
                    var3 = var3[var8];
                    var12 = var6.bind(var9)(var3);
                    var6 = var2.type;
                    var3 = _closure1_slot5;
                    var3 = var3.FOLDER;
                    var6 = var6 === var3;
                    if (!var6) {
                        _fun40329_ip = 147;
                        continue _fun40329
                    }
                case 128:
                    var11 = var1.type;
                    var3 = _closure1_slot5;
                    var3 = var3.FOLDER;
                    var6 = var11 === var3;
                case 147:
                    var21 = var2.id;
                    var19 = var1.id;
                    var3 = global;
                    var11 = var3.HermesInternal;
                    var15 = var11.concat;
                    var22 = '[GUILDS TREE] Tried moving a folder (';
                    var20 = ') inside of another folder (';
                    var14 = ')';
                    var18 = var14;
                    var11 = var22[var15](var21, var20, var19, var18, var17);
                    var6 = !var6;
                    var6 = var12.bind(var9)(var6, var11);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var8 = var6.bind(var9)(var5);
                    var6 = 0;
                    var5 = var7 >= var6;
                    var21 = var10.id;
                    var19 = var10.parentId;
                    var3 = var3.HermesInternal;
                    var11 = var3.concat;
                    var22 = '[GUILDS TREE] target node (';
                    var20 = ') did not exist within its specified parent (';
                    var3 = var22[var11](var21, var20, var19, var18, var17);
                    var3 = var8.bind(var9)(var5, var3);
                    var3 = 0;
                    if (!var4) {
                        _fun40329_ip = 277;
                        continue _fun40329
                    }
                case 274:
                    var3 = 1;
                case 277:
                    var20 = var1.children;
                    var4 = new Array(0);
                    var21 = var4;
                    var19 = 0;
                    var5 = arraySpread(var21, var20, var19);
                    var1.children = var4;
                    var5 = var1.children;
                    var4 = var5.splice;
                    var3 = var7 + var3;
                    var3 = var4.bind(var5)(var3, var6, var2);
                    var1 = var1.id;
                    var2.parentId = var1;
                    var1 = var0.version;
                    var1 = var1 + 1;
                    var0.version = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'moveInto';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun40330: for (var _fun40330_ip = 0;;) switch (_fun40330_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var3 = arguments[2];
                    var0 = this;
                    var4 = undefined;
                    if (!(var3 === var4)) {
                        _fun40330_ip = 20;
                        continue _fun40330
                    }
                case 18:
                    var3 = true;
                case 20:
                    var4 = var0._pluckNode;
                    var4 = var4.bind(var0)(var2);
                    var6 = 0;
                    var5 = 0;
                    if (!var3) {
                        _fun40330_ip = 48;
                        continue _fun40330
                    }
                case 38:
                    var3 = var1.children;
                    var5 = var3.length;
                case 48:
                    var8 = var1.children;
                    var3 = new Array(0);
                    var9 = var3;
                    var7 = 0;
                    var4 = arraySpread(var9, var8, var7);
                    var1.children = var3;
                    var4 = var1.children;
                    var3 = var4.splice;
                    var3 = var3.bind(var4)(var5, var6, var2);
                    var1 = var1.id;
                    var2.parentId = var1;
                    var1 = var0.version;
                    var1 = var1 + 1;
                    var0.version = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'addNode';
        var0.key = var5;
        var5 = function arg0() {
            _fun40331: for (var _fun40331_ip = 0;;) switch (_fun40331_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arguments[1];
                    var2 = arguments[2];
                    var1 = this;
                    var7 = undefined;
                    if (!(var3 === var7)) {
                        _fun40331_ip = 24;
                        continue _fun40331
                    }
                case 18:
                    var3 = var1.root;
                case 24:
                    if (!(var2 === var7)) {
                        _fun40331_ip = 30;
                        continue _fun40331
                    }
                case 28:
                    var2 = true;
                case 30:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 2;
                    var9 = var8[var0];
                    var10 = var6.bind(var7)(var9);
                    var9 = var4.type;
                    var5 = _closure1_slot5;
                    var5 = var5.ROOT;
                    var9 = var9 !== var5;
                    var5 = '[GUILDS TREE] Tried adding another root node into the tree';
                    var5 = var10.bind(var7)(var9, var5);
                    var5 = var8[var0];
                    var11 = var6.bind(var7)(var5);
                    var9 = var4.id;
                    var5 = null;
                    var10 = var5 != var9;
                    var9 = '[GUILDS TREE] Tried adding a node without an id';
                    var9 = var11.bind(var7)(var10, var9);
                    var0 = var8[var0];
                    var6 = var6.bind(var7)(var0);
                    var8 = var1.nodes;
                    var0 = var4.id;
                    var0 = var8[var0];
                    var5 = var5 == var0;
                    var10 = var4.id;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var9 = var0.concat;
                    var8 = '[GUILDS TREE] Tried adding a node that already exists (';
                    var0 = ')';
                    var0 = var9.bind(var8)(var10, var0);
                    var0 = var6.bind(var7)(var5, var0);
                    var5 = var1.nodes;
                    var0 = var4.id;
                    var5[var0] = var4;
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                    var0 = var1.moveInto;
                    var0 = var0.bind(var1)(var4, var3, var2);
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'removeNode';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 2;
            var6 = var5[var3];
            var2 = undefined;
            var8 = var4.bind(var2)(var6);
            var6 = var0.root;
            var7 = var1 !== var6;
            var6 = '[GUILDS TREE] Tried removing the root node from the tree';
            var6 = var8.bind(var2)(var7, var6);
            var3 = var5[var3];
            var5 = var4.bind(var2)(var3);
            var4 = var1.id;
            var3 = null;
            var4 = var3 != var4;
            var3 = '[GUILDS TREE] Tried removing a node without an id';
            var3 = var5.bind(var2)(var4, var3);
            var3 = var0._pluckNode;
            var3 = var3.bind(var0)(var1);
            var1.parentId = var2;
            var2 = var0.nodes;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = var0.version;
            var1 = var1 + 1;
            var0.version = var1;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'replaceNode';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun40333: for (var _fun40333_ip = 0;;) switch (_fun40333_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var7 = 2;
                    var6 = var4[var7];
                    var2 = undefined;
                    var11 = var8.bind(var2)(var6);
                    var9 = var1.id;
                    var6 = null;
                    var10 = var6 != var9;
                    var9 = '[GUILDS TREE] Tried replacing a node without an id';
                    var9 = var11.bind(var2)(var10, var9);
                    var4 = var4[var7];
                    var9 = var8.bind(var2)(var4);
                    var4 = var3.id;
                    var8 = var6 != var4;
                    var4 = '[GUILDS TREE] Tried replacing a node with one that does not have an id';
                    var4 = var9.bind(var2)(var8, var4);
                    var4 = var1.parentId;
                    if (!(var6 == var4)) {
                        _fun40333_ip = 105;
                        continue _fun40333
                    }
                case 97:
                    var4 = var0.root;
                    _fun40333_ip = 121;
                    continue _fun40333;
                case 105:
                    var8 = var0.nodes;
                    var6 = var1.parentId;
                    var4 = var8[var6];
                case 121:
                    var8 = var4.children;
                    var6 = var8.indexOf;
                    var8 = var6.bind(var8)(var1);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var9 = var6.bind(var2)(var5);
                    var7 = 0;
                    var6 = var8 >= var7;
                    var18 = var1.id;
                    var16 = var1.parentId;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var12 = var5.concat;
                    var19 = '[GUILDS TREE] existing node (';
                    var17 = ') did not exist within its specified parent (';
                    var15 = ')';
                    var5 = var19[var12](var18, var17, var16, var15, var14);
                    var5 = var9.bind(var2)(var6, var5);
                    var17 = var4.children;
                    var5 = new Array(0);
                    var18 = var5;
                    var16 = 0;
                    var6 = arraySpread(var18, var17, var16);
                    var4.children = var5;
                    var7 = var4.children;
                    var6 = var7.splice;
                    var5 = 1;
                    var5 = var6.bind(var7)(var8, var5, var3);
                    var4 = var4.id;
                    var3.parentId = var4;
                    var1.parentId = var2;
                    var2 = var0.nodes;
                    var1 = var1.id;
                    var1 = delete var2[var1];
                    var2 = var0.nodes;
                    var1 = var3.id;
                    var2[var1] = var3;
                    var1 = var0.version;
                    var1 = var1 + 1;
                    var0.version = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'cloneNode';
        var0.key = var5;
        var5 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.clone;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'convertToFolder';
        var0.key = var5;
        var5 = function arg0() {
            _fun40335: for (var _fun40335_ip = 0;;) switch (_fun40335_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var0 = _closure1_slot6;
                    var6 = undefined;
                    var1 = var0.bind(var6)();
                    var0 = var2.getNode;
                    var0 = var0.bind(var2)(var1);
                    var5 = null;
                    if (!(var5 != var0)) {
                        _fun40335_ip = 62;
                        continue _fun40335
                    }
                case 36:
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var6)();
                    var0 = var2.getNode;
                    var0 = var0.bind(var2)(var7);
                    var1 = var7;
                    if (var5 != var0) {
                        _fun40335_ip = 36;
                        continue _fun40335
                    }
                case 62:
                    var0 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.FOLDER;
                    var0.type = var3;
                    var0.id = var1;
                    var3 = false;
                    var0.expanded = var3;
                    var1 = new Array(0);
                    var0.children = var1;
                    var1 = var2.replaceNode;
                    var1 = var1.bind(var2)(var4, var0);
                    var1 = var2.removeNode;
                    var1 = var1.bind(var2)(var4);
                    var1 = var2.addNode;
                    var1 = var1.bind(var2)(var4, var0, var3);
                    var1 = var2.version;
                    var1 = var1 + 1;
                    var2.version = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'allNodes';
        var0.key = var5;
        var5 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = this;
            var0 = var0.nodes;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getNode';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.nodes;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'getRoots';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.root;
            var0 = var0.children;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'size';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1.allNodes;
            var0 = var0.bind(var1)();
            var0 = var0.length;
            return var0;
        };
        var0.get = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'sortedGuildNodes';
        var0.key = var5;
        var5 = function() {
            var2 = function arg0() {
                _fun40341: for (var _fun40341_ip = 0;;) switch (_fun40341_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.type;
                        var0 = _closure1_slot5;
                        var0 = var0.GUILD;
                        if (!(var1 !== var0)) {
                            _fun40341_ip = 76;
                            continue _fun40341
                        }
                    case 25:
                        var1 = var2.children;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun40341_ip = 70;
                            continue _fun40341
                        }
                    case 36:
                        var3 = var2.children;
                        var1 = var3.map;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.flat;
                        var0 = var0.bind(var1)();
                        _fun40341_ip = 74;
                        continue _fun40341;
                    case 70:
                        var0 = new Array(0);
                    case 74:
                        _fun40341_ip = 87;
                        continue _fun40341;
                    case 76:
                        var1 = new Array(1);
                        var1[0] = var2;
                        var0 = var1;
                    case 87:
                        return var0;
                }
            };
            var _closure3_slot0 = var2;
            var0 = this;
            var1 = var0.root;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = '_pluckNode';
        var0.key = var5;
        var4 = function arg0() {
            _fun40343: for (var _fun40343_ip = 0;;) switch (_fun40343_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1.parentId;
                    var7 = null;
                    if (!(var7 == var0)) {
                        _fun40343_ip = 32;
                        continue _fun40343
                    }
                case 24:
                    var4 = var2.root;
                    _fun40343_ip = 48;
                    continue _fun40343;
                case 32:
                    var5 = var2.nodes;
                    var0 = var1.parentId;
                    var4 = var5[var0];
                case 48:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 2;
                    var5 = var10[var8];
                    var0 = undefined;
                    var14 = var9.bind(var0)(var5);
                    var11 = var7 != var4;
                    var21 = var1.id;
                    var19 = var1.parentId;
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var15 = var6.concat;
                    var13 = '[GUILDS TREE] source node (';
                    var12 = ') had a parent id (';
                    var18 = ") which doesn't exist in the tree";
                    var22 = var13;
                    var20 = var12;
                    var6 = var22[var15](var21, var20, var19, var18, var17);
                    var6 = var14.bind(var0)(var11, var6);
                    var6 = var4.children;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var7 = var7 != var6;
                    var21 = var1.id;
                    var19 = var1.parentId;
                    var5 = var5.HermesInternal;
                    var9 = var5.concat;
                    var18 = ') which contains no children';
                    var22 = var13;
                    var20 = var12;
                    var5 = var22[var9](var21, var20, var19, var18, var17);
                    var5 = var8.bind(var0)(var7, var5);
                    var5 = var6.filter;
                    var3 = function(arg0) { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var3 = var5.bind(var6)(var3);
                    var4.children = var3;
                    var1.parentId = var0;
                    var1 = var2.version;
                    var1 = var1 + 1;
                    var2.version = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[14] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/GuildsTree.tsx';
    var5 = var6.bind(var7)(var5);
    var2.GuildsNodeType = var4;
    var2.GuildsTree = var3;
    var3 = function arg0, arg1() {
        var0 = {};
        var1 = _closure1_slot5;
        var1 = var1.GUILD;
        var0.type = var1;
        var1 = arg0;
        var0.id = var1;
        var1 = arg1;
        var0.parentId = var1;
        var1 = new Array(0);
        var0.children = var1;
        var1 = false;
        var0.unavailable = var1;
        return var0;
    };
    var2.createGuildNode = var3;
    var1 = function arg0, arg1, arg2() {
        _fun40346: for (var _fun40346_ip = 0;;) switch (_fun40346_ip) {
            case 0:
                var3 = arg0;
                var1 = arg2;
                var0 = {};
                var2 = _closure1_slot5;
                var2 = var2.FOLDER;
                var0.type = var2;
                var2 = var3.folderId;
                var0.id = var2;
                var2 = arg1;
                var0.parentId = var2;
                var6 = var3.folderName;
                var2 = null;
                var7 = var2 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun40346_ip = 63;
                    continue _fun40346
                }
            case 60:
                var5 = var6;
            case 63:
                var0.name = var5;
                var5 = var3.folderColor;
                var6 = var2 != var5;
                var4 = undefined;
                if (!var6) {
                    _fun40346_ip = 85;
                    continue _fun40346
                }
            case 82:
                var4 = var5;
            case 85:
                var0.color = var4;
                if (!(var2 == var1)) {
                    _fun40346_ip = 112;
                    continue _fun40346
                }
            case 93:
                var3 = var3.expanded;
                var2 = var2 != var3;
                if (!var2) {
                    _fun40346_ip = 109;
                    continue _fun40346
                }
            case 106:
                var2 = var3;
            case 109:
                var1 = var2;
            case 112:
                var0.expanded = var1;
                var1 = new Array(0);
                var0.children = var1;
                return var0;
        }
    };
    var2.createFolderNode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 44, 22, 2]);