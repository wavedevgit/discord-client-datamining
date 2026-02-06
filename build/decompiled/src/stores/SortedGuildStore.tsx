// stores/SortedGuildStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun40249: for (var _fun40249_ip = 0;;) switch (_fun40249_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun40249_ip = 74;
                continue _fun40249;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun40252: for (var _fun40252_ip = 0;;) switch (_fun40252_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40252_ip = 46;
                    continue _fun40252
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40252_ip = 55;
                    continue _fun40252
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40252_ip = 343;
                    continue _fun40252
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40252_ip = 323;
                    continue _fun40252
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40252_ip = 283;
                    continue _fun40252
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40252_ip = 270;
                    continue _fun40252
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun40252_ip = 163;
                    continue _fun40252
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40252_ip = 179;
                    continue _fun40252
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40252_ip = 249;
                    continue _fun40252
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40252_ip = 249;
                    continue _fun40252
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40252_ip = 234;
                    continue _fun40252
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40252_ip = 247;
                    continue _fun40252
                }
            case 234:
                var8 = _closure1_slot25;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40252_ip = 265;
                continue _fun40252;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40252_ip = 283;
                continue _fun40252;
            case 270:
                var6 = _closure1_slot25;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40252_ip = 323;
                    continue _fun40252
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun40252_ip = 330;
                    continue _fun40252
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40253: for (var _fun40253_ip = 0;;) switch (_fun40253_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40253_ip = 56;
                                continue _fun40253
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun40253_ip = 67;
                            continue _fun40253;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        _fun40254: for (var _fun40254_ip = 0;;) switch (_fun40254_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40254_ip = 23;
                    continue _fun40254
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40254_ip = 33;
                    continue _fun40254
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun40254_ip = 70;
                    continue _fun40254
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40254_ip = 55;
                    continue _fun40254
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var1 = function arg0, arg1() {
        _fun40255: for (var _fun40255_ip = 0;;) switch (_fun40255_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var2 = _closure1_slot24;
                var1 = _closure1_slot14;
                var0 = var1.getGuildIds;
                var1 = var0.bind(var1)();
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun40255_ip = 118;
                    continue _fun40255
                }
            case 46:
                var1 = var2.value;
                var7 = var6.bind(var0)(var1);
                var7 = !var7;
                if (var7) {
                    _fun40255_ip = 77;
                    continue _fun40255
                }
            case 62:
                var9 = _closure1_slot9;
                var8 = var9.isLurking;
                var7 = var8.bind(var9)(var1);
            case 77:
                if (var7) {
                    _fun40255_ip = 95;
                    continue _fun40255
                }
            case 80:
                var9 = _closure1_slot13;
                var8 = var9.isCurrentUserGuest;
                var7 = var8.bind(var9)(var1);
            case 95:
                if (var7) {
                    _fun40255_ip = 103;
                    continue _fun40255
                }
            case 98:
                var1 = var5.bind(var0)(var1);
            case 103:
                var7 = var3.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun40255_ip = 46;
                    continue _fun40255
                }
            case 118:
                return var0;
        }
    };
    var _closure1_slot26 = var1;
    var0 = function arg0() {
        _fun40256: for (var _fun40256_ip = 0;;) switch (_fun40256_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.type;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 15;
                var4 = var2[var5];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var4 = var4.GuildsNodeType;
                var4 = var4.FOLDER;
                if (!(var4 !== var3)) {
                    _fun40256_ip = 130;
                    continue _fun40256
                }
            case 49:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var4.bind(var2)(var0);
                var0 = var0.GuildsNodeType;
                var0 = var0.GUILD;
                if (!(var0 !== var3)) {
                    _fun40256_ip = 103;
                    continue _fun40256
                }
            case 82:
                var0 = global;
                var3 = var0.Error;
                var0 = '[SortedGuildStore] Unexpected guilds tree node type.';
                var0 = var3.bind(var2)(var0);
                throw var0;
            case 103:
                var0 = {};
                var0.folderId = var2;
                var3 = var1.id;
                var2 = new Array(1);
                var2[0] = var3;
                var0.guildIds = var2;
                return var0;
            case 130:
                var0 = {};
                var2 = var1.id;
                var0.folderId = var2;
                var2 = var1.name;
                var0.folderName = var2;
                var2 = var1.color;
                var0.folderColor = var2;
                var2 = var1.expanded;
                var0.expanded = var2;
                var3 = var1.children;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.guildIds = var1;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1() {
        _fun40258: for (var _fun40258_ip = 0;;) switch (_fun40258_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var1 = _closure1_slot18;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = 15;
                var3 = var3[var8];
                var4 = undefined;
                var3 = var7.bind(var4)(var3);
                var3 = var3.GuildsTree;
                var7 = var3.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var3
                    }
                });
                var28 = var7;
                var3 = new var28[var3](var27);
                var3 = var3 instanceof Object ? var3 : var7;
                _closure1_slot18 = var3;
                var3 = var6.length;
                var7 = 0;
                if (!(var7 === var3)) {
                    _fun40258_ip = 90;
                    continue _fun40258
                }
            case 78:
                var3 = var5.length;
                if (!(!(var3 > var7))) {
                    _fun40258_ip = 444;
                    continue _fun40258
                }
            case 90:
                var3 = _closure1_slot24;
                var13 = var3.bind(var4)(var6);
                var6 = var13.bind(var4)();
                var3 = var6.done;
                var12 = null;
                var11 = var6;
                var10 = undefined;
                var9 = undefined;
                var6 = undefined;
                if (var3) {
                    _fun40258_ip = 528;
                    continue _fun40258
                }
            case 125:
                var3 = var11.value;
                var14 = var3.guildIds;
                var17 = var14.length;
                var16 = var10;
                var15 = var9;
                var14 = var6;
                if (!(var7 !== var17)) {
                    _fun40258_ip = 415;
                    continue _fun40258
                }
            case 157:
                var17 = var3.folderId;
                if (!(var12 != var17)) {
                    _fun40258_ip = 353;
                    continue _fun40258
                }
            case 170:
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var8];
                var19 = var18.bind(var4)(var17);
                var18 = var19.createFolderNode;
                var21 = _closure1_slot11;
                var20 = var21.isFolderExpanded;
                var17 = var3.folderId;
                var17 = var20.bind(var21)(var17);
                var20 = var18.bind(var19)(var3, var4, var17);
                var18 = _closure1_slot18;
                var17 = var18.addNode;
                var17 = var17.bind(var18)(var20);
                var18 = _closure1_slot24;
                var17 = var3.guildIds;
                var19 = var18.bind(var4)(var17);
                var21 = var19.bind(var4)();
                var17 = var21.done;
                var18 = var21;
                var16 = var20;
                var15 = var18;
                var14 = var19;
                if (var17) {
                    _fun40258_ip = 415;
                    continue _fun40258
                }
            case 278:
                var24 = var18.value;
                var22 = _closure1_slot18;
                var21 = var22.addNode;
                var23 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var8];
                var23 = var23.bind(var4)(var17);
                var17 = var23.createGuildNode;
                var17 = var17.bind(var23)(var24);
                var17 = var21.bind(var22)(var17, var20);
                var21 = var19.bind(var4)();
                var17 = var21.done;
                var18 = var21;
                var16 = var20;
                var15 = var18;
                var14 = var19;
                if (var17) {
                    _fun40258_ip = 415;
                    continue _fun40258
                }
            case 351:
                _fun40258_ip = 278;
                continue _fun40258;
            case 353:
                var18 = _closure1_slot18;
                var17 = var18.addNode;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var8];
                var20 = var20.bind(var4)(var19);
                var19 = var20.createGuildNode;
                var3 = var3.guildIds;
                var3 = var3[var7];
                var3 = var19.bind(var20)(var3);
                var3 = var17.bind(var18)(var3);
                var16 = var10;
                var15 = var9;
                var14 = var6;
            case 415:
                var17 = var13.bind(var4)();
                var3 = var17.done;
                var10 = var16;
                var9 = var15;
                var6 = var14;
                var11 = var17;
                if (var3) {
                    _fun40258_ip = 528;
                    continue _fun40258
                }
            case 439:
                _fun40258_ip = 125;
                continue _fun40258;
            case 444:
                var3 = _closure1_slot24;
                var6 = var3.bind(var4)(var5);
                var5 = var6.bind(var4)();
                var3 = var5.done;
                if (var3) {
                    _fun40258_ip = 528;
                    continue _fun40258
                }
            case 465:
                var12 = var5.value;
                var10 = _closure1_slot18;
                var9 = var10.addNode;
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var11 = var11.bind(var4)(var3);
                var3 = var11.createGuildNode;
                var3 = var3.bind(var11)(var12);
                var3 = var9.bind(var10)(var3);
                var9 = var6.bind(var4)();
                var3 = var9.done;
                var5 = var9;
                if (!var3) {
                    _fun40258_ip = 465;
                    continue _fun40258
                }
            case 528:
                var5 = _closure1_slot24;
                var6 = _closure1_slot18;
                var3 = var6.allNodes;
                var3 = var3.bind(var6)();
                var9 = var5.bind(var4)(var3);
                var5 = var9.bind(var4)();
                var3 = var5.done;
                var6 = null;
                if (var3) {
                    _fun40258_ip = 751;
                    continue _fun40258
                }
            case 568:
                var11 = var5.value;
                var10 = var11.type;
                var12 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var12.bind(var4)(var3);
                var3 = var3.GuildsNodeType;
                var3 = var3.GUILD;
                var3 = var10 === var3;
                if (!var3) {
                    _fun40258_ip = 715;
                    continue _fun40258
                }
            case 614:
                var13 = _closure1_slot9;
                var12 = var13.isLurking;
                var10 = var11.id;
                var10 = var12.bind(var13)(var10);
                if (var10) {
                    _fun40258_ip = 657;
                    continue _fun40258
                }
            case 637:
                var14 = _closure1_slot13;
                var13 = var14.isCurrentUserGuest;
                var12 = var11.id;
                var10 = var13.bind(var14)(var12);
            case 657:
                if (var10) {
                    _fun40258_ip = 712;
                    continue _fun40258
                }
            case 660:
                var14 = _closure1_slot14;
                var13 = var14.getGuild;
                var12 = var11.id;
                var12 = var13.bind(var14)(var12);
                var12 = var6 == var12;
                if (!var12) {
                    _fun40258_ip = 709;
                    continue _fun40258
                }
            case 686:
                var15 = _closure1_slot12;
                var14 = var15.isUnavailable;
                var13 = var11.id;
                var13 = var14.bind(var15)(var13);
                var12 = !var13;
            case 709:
                var10 = var12;
            case 712:
                var3 = var10;
            case 715:
                if (!var3) {
                    _fun40258_ip = 733;
                    continue _fun40258
                }
            case 718:
                var10 = _closure1_slot18;
                var3 = var10.removeNode;
                var3 = var3.bind(var10)(var11);
            case 733:
                var10 = var9.bind(var4)();
                var3 = var10.done;
                var5 = var10;
                if (!var3) {
                    _fun40258_ip = 568;
                    continue _fun40258
                }
            case 751:
                var3 = global;
                var6 = var3.Object;
                var5 = var6.values;
                var3 = _closure1_slot18;
                var3 = var3.nodes;
                var6 = var5.bind(var6)(var3);
                var3 = var6.length;
                var3 = var7 < var3;
                var5 = 0;
                if (!var3) {
                    _fun40258_ip = 882;
                    continue _fun40258
                }
            case 793:
                var10 = var6[var5];
                var9 = var10.type;
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var11.bind(var4)(var3);
                var3 = var3.GuildsNodeType;
                var3 = var3.FOLDER;
                var3 = var9 === var3;
                if (!var3) {
                    _fun40258_ip = 852;
                    continue _fun40258
                }
            case 838:
                var9 = var10.children;
                var9 = var9.length;
                var3 = var7 === var9;
            case 852:
                if (!var3) {
                    _fun40258_ip = 870;
                    continue _fun40258
                }
            case 855:
                var9 = _closure1_slot18;
                var3 = var9.removeNode;
                var3 = var3.bind(var9)(var10);
            case 870:
                var5 = var5 + 1;
                var3 = var6.length;
                if (var5 < var3) {
                    _fun40258_ip = 793;
                    continue _fun40258
                }
            case 882:
                var5 = _closure1_slot26;
                var3 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot18;
                    var1 = var0.nodes;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 == var1;
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    var4 = _closure1_slot18;
                    var3 = var4.addNode;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.createGuildNode;
                    var1 = arg0;
                    var2 = var2.bind(var5)(var1);
                    var0 = _closure1_slot18;
                    var1 = var0.root;
                    var0 = false;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var0 = var5.bind(var4)(var3, var0);
                var3 = _closure1_slot18;
                var0 = var1.version;
                var3.version = var0;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 16;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = _closure1_slot18;
                var0 = var3.bind(var4)(var1, var0);
                if (var0) {
                    _fun40258_ip = 976;
                    continue _fun40258
                }
            case 951:
                var4 = _closure1_slot18;
                var5 = var1.version;
                var3 = 1;
                var3 = var5 + var3;
                var4.version = var3;
                _fun40258_ip = 980;
                continue _fun40258;
            case 976:
                _closure1_slot18 = var1;
            case 980:
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        _fun40261: for (var _fun40261_ip = 0;;) switch (_fun40261_ip) {
            case 0:
                var3 = _closure1_slot28;
                var2 = _closure1_slot10;
                var1 = var2.getGuildFolders;
                var2 = var1.bind(var2)();
                var4 = null;
                if (!(var4 == var2)) {
                    _fun40261_ip = 31;
                    continue _fun40261
                }
            case 27:
                var2 = new Array(0);
            case 31:
                var0 = _closure1_slot10;
                var0 = var0.settings;
                var5 = var0.guildFolders;
                var6 = var4 == var5;
                var1 = undefined;
                var0 = undefined;
                if (var6) {
                    _fun40261_ip = 64;
                    continue _fun40261
                }
            case 58:
                var0 = var5.guildPositions;
            case 64:
                if (!(var4 == var0)) {
                    _fun40261_ip = 72;
                    continue _fun40261
                }
            case 68:
                var0 = new Array(0);
            case 72:
                var0 = var3.bind(var1)(var2, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        _fun40262: for (var _fun40262_ip = 0;;) switch (_fun40262_ip) {
            case 0:
                var2 = _closure1_slot10;
                var0 = var2.getGuildFolders;
                var2 = var0.bind(var2)();
                var0 = _closure1_slot17;
                var5 = null;
                var0 = var5 == var0;
                if (var0) {
                    _fun40262_ip = 65;
                    continue _fun40262
                }
            case 30:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 16;
                var3 = var6[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = _closure1_slot17;
                var3 = var4.bind(var6)(var3, var2);
                var0 = !var3;
            case 65:
                if (!var0) {
                    _fun40262_ip = 137;
                    continue _fun40262
                }
            case 68:
                var4 = _closure1_slot28;
                var _closure1_slot17 = var2;
                if (!(var5 == var2)) {
                    _fun40262_ip = 86;
                    continue _fun40262
                }
            case 80:
                var3 = new Array(0);
                _fun40262_ip = 90;
                continue _fun40262;
            case 86:
                var3 = _closure1_slot17;
            case 90:
                var1 = _closure1_slot10;
                var1 = var1.settings;
                var6 = var1.guildFolders;
                var7 = var5 == var6;
                var2 = undefined;
                var1 = undefined;
                if (var7) {
                    _fun40262_ip = 123;
                    continue _fun40262
                }
            case 117:
                var1 = var6.guildPositions;
            case 123:
                if (!(var5 == var1)) {
                    _fun40262_ip = 131;
                    continue _fun40262
                }
            case 127:
                var1 = new Array(0);
            case 131:
                var0 = var4.bind(var2)(var3, var1);
            case 137:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun40263: for (var _fun40263_ip = 0;;) switch (_fun40263_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.sourceId;
                var6 = var0.targetId;
                var5 = var0.moveToBelow;
                var2 = var0.combine;
                var3 = _closure1_slot18;
                var0 = var3.getNode;
                var4 = var0.bind(var3)(var4);
                var3 = _closure1_slot18;
                var0 = var3.getNode;
                var7 = var0.bind(var3)(var6);
                var11 = null;
                if (!(var11 != var4)) {
                    _fun40263_ip = 480;
                    continue _fun40263
                }
            case 69:
                if (!(var11 != var7)) {
                    _fun40263_ip = 480;
                    continue _fun40263
                }
            case 76:
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var8 = 17;
                var3 = var0[var8];
                var0 = undefined;
                var10 = var6.bind(var0)(var3);
                var3 = var2;
                if (!var2) {
                    _fun40263_ip = 145;
                    continue _fun40263
                }
            case 104:
                var9 = var4.type;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 15;
                var6 = var13[var6];
                var6 = var12.bind(var0)(var6);
                var6 = var6.GuildsNodeType;
                var6 = var6.FOLDER;
                var3 = var9 === var6;
            case 145:
                var9 = !var3;
                var14 = var4.id;
                var6 = global;
                var3 = var6.HermesInternal;
                var13 = var3.concat;
                var12 = "[SORTED GUILDS] Can't combine a folder ";
                var3 = ' with another guilds list item';
                var3 = var13.bind(var12)(var14, var3);
                var3 = var10.bind(var0)(var9, var3);
                var9 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var10 = var9.bind(var0)(var3);
                var3 = var2;
                if (!var3) {
                    _fun40263_ip = 223;
                    continue _fun40263
                }
            case 213:
                var9 = var7.parentId;
                var3 = var11 != var9;
            case 223:
                var9 = !var3;
                var14 = var7.id;
                var3 = var6.HermesInternal;
                var13 = var3.concat;
                var12 = "[SORTED GUILDS] Can't combine with a guild ";
                var3 = " that's already inside of a folder";
                var3 = var13.bind(var12)(var14, var3);
                var3 = var10.bind(var0)(var9, var3);
                var9 = _closure1_slot1;
                var3 = _closure1_slot2;
                var8 = var3[var8];
                var9 = var9.bind(var0)(var8);
                var10 = var4.type;
                var12 = _closure1_slot0;
                var8 = 15;
                var3 = var3[var8];
                var3 = var12.bind(var0)(var3);
                var3 = var3.GuildsNodeType;
                var3 = var3.FOLDER;
                var3 = var10 === var3;
                if (!var3) {
                    _fun40263_ip = 333;
                    continue _fun40263
                }
            case 323:
                var10 = var7.parentId;
                var3 = var11 != var10;
            case 333:
                var13 = var4.id;
                var12 = var7.parentId;
                var6 = var6.HermesInternal;
                var11 = var6.concat;
                var10 = "[SORTED GUILDS] Can't move a folder ";
                var6 = ' to inside of another folder ';
                var6 = var11.bind(var10)(var13, var6, var12);
                var3 = !var3;
                var3 = var9.bind(var0)(var3, var6);
                if (var2) {
                    _fun40263_ip = 405;
                    continue _fun40263
                }
            case 386:
                var3 = _closure1_slot18;
                var2 = var3.moveNextTo;
                var2 = var2.bind(var3)(var4, var7, var5);
                _fun40263_ip = 478;
                continue _fun40263;
            case 405:
                var6 = var7.type;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var3.bind(var0)(var2);
                var2 = var2.GuildsNodeType;
                var2 = var2.FOLDER;
                var3 = var7;
                if (!(var6 !== var2)) {
                    _fun40263_ip = 461;
                    continue _fun40263
                }
            case 446:
                var6 = _closure1_slot18;
                var2 = var6.convertToFolder;
                var3 = var2.bind(var6)(var7);
            case 461:
                var2 = _closure1_slot18;
                var1 = var2.moveInto;
                var1 = var1.bind(var2)(var4, var3, var5);
            case 478:
                return var0;
            case 480:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun40264: for (var _fun40264_ip = 0;;) switch (_fun40264_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.sourceIds;
                var4 = var0.name;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var2 = var3.shift;
                var8 = var2.bind(var3)();
                var5 = null;
                if (!(var5 != var8)) {
                    _fun40264_ip = 106;
                    continue _fun40264
                }
            case 38:
                var7 = _closure1_slot18;
                var6 = var7.getNode;
                var6 = var6.bind(var7)(var8);
                if (!(var5 != var6)) {
                    _fun40264_ip = 102;
                    continue _fun40264
                }
            case 60:
                var5 = _closure1_slot18;
                var2 = var5.convertToFolder;
                var2 = var2.bind(var5)(var6);
                _closure2_slot0 = var2;
                var2.name = var4;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun40265: for (var _fun40265_ip = 0;;) switch (_fun40265_ip) {
                        case 0:
                            var3 = _closure1_slot18;
                            var2 = var3.getNode;
                            var1 = arg0;
                            var4 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun40265_ip = 53;
                                continue _fun40265
                            }
                        case 27:
                            var3 = _closure1_slot18;
                            var2 = var3.moveInto;
                            var1 = _closure2_slot0;
                            var0 = true;
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 102:
                var0 = false;
                return var0;
            case 106:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        _fun40266: for (var _fun40266_ip = 0;;) switch (_fun40266_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.targetId;
                var5 = var4.sourceIds;
                var6 = null;
                var2 = Object.create(var6);
                var3 = 0;
                var2.targetId = var3;
                var2.sourceIds = var3;
                var15 = {};
                var14 = var4;
                var13 = var2;
                var7 = copyDataProperties(var15, var14, var13);
                var0 = undefined;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var9 = _closure1_slot18;
                var4 = var9.getNode;
                var10 = var4.bind(var9)(var8);
                if (!(var6 != var10)) {
                    _fun40266_ip = 503;
                    continue _fun40266
                }
            case 85:
                var9 = var10.type;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 15;
                var4 = var12[var4];
                var4 = var11.bind(var0)(var4);
                var4 = var4.GuildsNodeType;
                var4 = var4.FOLDER;
                if (!(var9 === var4)) {
                    _fun40266_ip = 499;
                    continue _fun40266
                }
            case 129:
                var11 = var7.name;
                var9 = '';
                var4 = undefined;
                if (!(var9 !== var11)) {
                    _fun40266_ip = 149;
                    continue _fun40266
                }
            case 144:
                var4 = var7.name;
            case 149:
                var7 = var10.name;
                if (!(var4 !== var7)) {
                    _fun40266_ip = 241;
                    continue _fun40266
                }
            case 158:
                var9 = _closure1_slot18;
                var7 = var9.cloneNode;
                var9 = var7.bind(var9)(var10);
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 17;
                var7 = var12[var7];
                var12 = var11.bind(var0)(var7);
                var11 = var9.id;
                var7 = var10.id;
                var11 = var11 === var7;
                var7 = '[SORTED GUILDS] Replacement folder node must have same id.';
                var7 = var12.bind(var0)(var11, var7);
                var9.name = var4;
                var7 = _closure1_slot18;
                var4 = var7.replaceNode;
                var4 = var4.bind(var7)(var10, var9);
            case 241:
                var7 = _closure1_slot18;
                var4 = var7.getNode;
                var4 = var4.bind(var7)(var8);
                _closure2_slot0 = var4;
                if (!(var6 != var4)) {
                    _fun40266_ip = 495;
                    continue _fun40266
                }
            case 267:
                var7 = var4.children;
                var6 = var7.map;
                var4 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var6 = var6.bind(var7)(var4);
                var4 = var6.filter;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 18;
                var2 = var8[var2];
                var2 = var7.bind(var0)(var2);
                var2 = var2.isNotNullish;
                var2 = var4.bind(var6)(var2);
                var4 = global;
                var6 = var4.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var16 = var7;
                var15 = var2;
                var6 = new var16[var6](var15, var14);
                var6 = var6 instanceof Object ? var6 : var7;
                _closure2_slot1 = var6;
                var6 = var4.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var16 = var7;
                var15 = var5;
                var6 = new var16[var6](var15, var14);
                var6 = var6 instanceof Object ? var6 : var7;
                _closure2_slot2 = var6;
                var4 = var4.Set;
                var6 = new Array(0);
                var15 = var6;
                var14 = var2;
                var13 = 0;
                var2 = arraySpread(var15, var14, var13);
                var3 = var6.filter;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot2;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var15 = var3.bind(var6)(var2);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var3;
                var2 = new var16[var4](var15, var14);
                var3 = var2 instanceof Object ? var2 : var3;
                var4 = var5.filter;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var5 = var4.bind(var5)(var2);
                var4 = var5.forEach;
                var2 = function(arg0) { // Environment: var1
                    _fun40270: for (var _fun40270_ip = 0;;) switch (_fun40270_ip) {
                        case 0:
                            var3 = _closure1_slot18;
                            var2 = var3.getNode;
                            var1 = arg0;
                            var4 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun40270_ip = 53;
                                continue _fun40270
                            }
                        case 27:
                            var3 = _closure1_slot18;
                            var2 = var3.moveInto;
                            var1 = _closure2_slot0;
                            var0 = true;
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun40271: for (var _fun40271_ip = 0;;) switch (_fun40271_ip) {
                        case 0:
                            var3 = _closure1_slot18;
                            var2 = var3.getNode;
                            var1 = arg0;
                            var4 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun40271_ip = 53;
                                continue _fun40271
                            }
                        case 27:
                            var3 = _closure1_slot18;
                            var2 = var3.moveNextTo;
                            var1 = _closure2_slot0;
                            var0 = true;
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 495:
                var0 = false;
                return var0;
            case 499:
                var0 = false;
                return var0;
            case 503:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun40272: for (var _fun40272_ip = 0;;) switch (_fun40272_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.targetId;
                var1 = _closure1_slot18;
                var0 = var1.getNode;
                var4 = var0.bind(var1)(var4);
                var _closure2_slot0 = var4;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun40272_ip = 167;
                    continue _fun40272
                }
            case 45:
                var5 = var4.type;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var1 = var7[var1];
                var7 = undefined;
                var1 = var6.bind(var7)(var1);
                var1 = var1.GuildsNodeType;
                var1 = var1.FOLDER;
                var1 = var5 === var1;
                if (!var1) {
                    _fun40272_ip = 164;
                    continue _fun40272
                }
            case 91:
                var6 = var4.children;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.filter;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 18;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.isNotNullish;
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun40274: for (var _fun40274_ip = 0;;) switch (_fun40274_ip) {
                        case 0:
                            var3 = _closure1_slot18;
                            var2 = var3.getNode;
                            var1 = arg0;
                            var4 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun40274_ip = 53;
                                continue _fun40274
                            }
                        case 27:
                            var3 = _closure1_slot18;
                            var2 = var3.moveNextTo;
                            var1 = _closure2_slot0;
                            var0 = true;
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1 = undefined;
            case 164:
                var0 = var1;
            case 167:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun40275: for (var _fun40275_ip = 0;;) switch (_fun40275_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var7 = var0.joinedAt;
                var3 = var0.user;
                var2 = _closure1_slot16;
                var0 = var2.getCurrentUser;
                var6 = var0.bind(var2)();
                var2 = _closure1_slot14;
                var0 = var2.getGuild;
                var0 = var0.bind(var2)(var4);
                var4 = null;
                var8 = var4 == var6;
                var2 = undefined;
                var5 = undefined;
                if (var8) {
                    _fun40275_ip = 67;
                    continue _fun40275
                }
            case 62:
                var5 = var6.id;
            case 67:
                var3 = var3.id;
                if (!(var5 === var3)) {
                    _fun40275_ip = 155;
                    continue _fun40275
                }
            case 76:
                if (!(var4 != var0)) {
                    _fun40275_ip = 155;
                    continue _fun40275
                }
            case 80:
                var6 = 'string';
                var5 = typeof var7;
                var3 = var7;
                if (!(var6 === var5)) {
                    _fun40275_ip = 125;
                    continue _fun40275
                }
            case 94:
                var5 = global;
                var5 = var5.Date;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = var6;
                var9 = var7;
                var5 = new var10[var5](var9, var8);
                var3 = var5 instanceof Object ? var5 : var6;
            case 125:
                var0 = var0.joinedAt;
                var0 = var3 !== var0;
                if (!var0) {
                    _fun40275_ip = 142;
                    continue _fun40275
                }
            case 138:
                var0 = var4 != var3;
            case 142:
                if (!var0) {
                    _fun40275_ip = 153;
                    continue _fun40275
                }
            case 145:
                var1 = _closure1_slot29;
                var0 = var1.bind(var2)();
            case 153:
                return var0;
            case 155:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        _fun40276: for (var _fun40276_ip = 0;;) switch (_fun40276_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.folderId;
                var2 = _closure1_slot18;
                var0 = var2.getNode;
                var3 = var0.bind(var2)(var4);
                var2 = _closure1_slot11;
                var0 = var2.isFolderExpanded;
                var2 = var0.bind(var2)(var4);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun40276_ip = 113;
                    continue _fun40276
                }
            case 48:
                var5 = var3.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 15;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var6.bind(var0)(var4);
                var4 = var4.GuildsNodeType;
                var4 = var4.FOLDER;
                if (!(var5 === var4)) {
                    _fun40276_ip = 113;
                    continue _fun40276
                }
            case 91:
                var4 = var3.expanded;
                if (!(var4 !== var2)) {
                    _fun40276_ip = 113;
                    continue _fun40276
                }
            case 101:
                var1 = _closure1_slot39;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
            case 113:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun40277: for (var _fun40277_ip = 0;;) switch (_fun40277_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.folderId;
                var3 = var0.expanded;
                var2 = _closure1_slot18;
                var0 = var2.getNode;
                var2 = var0.bind(var2)(var4);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun40277_ip = 104;
                    continue _fun40277
                }
            case 39:
                var5 = var2.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 15;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var6.bind(var0)(var4);
                var4 = var4.GuildsNodeType;
                var4 = var4.FOLDER;
                if (!(var5 === var4)) {
                    _fun40277_ip = 104;
                    continue _fun40277
                }
            case 82:
                var4 = var2.expanded;
                if (!(var4 !== var3)) {
                    _fun40277_ip = 104;
                    continue _fun40277
                }
            case 92:
                var1 = _closure1_slot39;
                var1 = var1.bind(var0)(var2, var3);
                return var0;
            case 104:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function() {
        _fun40278: for (var _fun40278_ip = 0;;) switch (_fun40278_ip) {
            case 0:
                var2 = _closure1_slot24;
                var1 = _closure1_slot18;
                var0 = var1.allNodes;
                var1 = var0.bind(var1)();
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var2 = var5.bind(var0)();
                var1 = var2.done;
                var4 = false;
                var3 = 15;
                if (var1) {
                    _fun40278_ip = 125;
                    continue _fun40278
                }
            case 45:
                var7 = var2.value;
                var8 = var7.type;
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var9.bind(var0)(var1);
                var1 = var1.GuildsNodeType;
                var1 = var1.FOLDER;
                var1 = var8 === var1;
                if (!var1) {
                    _fun40278_ip = 97;
                    continue _fun40278
                }
            case 91:
                var1 = var7.expanded;
            case 97:
                if (!var1) {
                    _fun40278_ip = 110;
                    continue _fun40278
                }
            case 100:
                var1 = _closure1_slot39;
                var1 = var1.bind(var0)(var7, var4);
            case 110:
                var7 = var5.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun40278_ip = 45;
                    continue _fun40278
                }
            case 125:
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0, arg1() {
        var4 = arg0;
        var2 = _closure1_slot18;
        var0 = var2.cloneNode;
        var3 = var0.bind(var2)(var4);
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 17;
        var2 = var2[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var2);
        var5 = var3.id;
        var2 = var4.id;
        var5 = var5 === var2;
        var2 = '[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.';
        var2 = var6.bind(var0)(var5, var2);
        var2 = arg1;
        var3.expanded = var2;
        var2 = _closure1_slot18;
        var1 = var2.replaceNode;
        var1 = var1.bind(var2)(var4, var3);
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var7 = 2;
    var3 = var5[var7];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var8 = var9.bind(var0)(var3);
    var3 = 13;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 15;
    var9 = var5[var3];
    var9 = var4.bind(var0)(var9);
    var9 = var9.GuildsTree;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var16 = var10;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot18 = var9;
    var9 = 19;
    var10 = var5[var9];
    var12 = var4.bind(var0)(var10);
    var11 = var12.cachedFunction;
    var10 = function(arg0) { // Environment: var6
        var1 = arg0;
        var0 = var1.sortedGuildNodes;
        var2 = var0.bind(var1)();
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.id;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var10 = var11.bind(var12)(var10);
    var _closure1_slot19 = var10;
    var10 = var5[var9];
    var12 = var4.bind(var0)(var10);
    var11 = var12.cachedFunction;
    var10 = function(arg0) { // Environment: var6
        var1 = arg0;
        var0 = var1.getRoots;
        var2 = var0.bind(var1)();
        var1 = var2.map;
        var0 = _closure1_slot27;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var10 = var11.bind(var12)(var10);
    var _closure1_slot20 = var10;
    var10 = var5[var9];
    var12 = var4.bind(var0)(var10);
    var11 = var12.cachedFunction;
    var10 = function(arg0) { // Environment: var6
        var0 = new Array(0);
        var _closure2_slot0 = var0;
        var3 = function arg0() {
            _fun40284: for (var _fun40284_ip = 0;;) switch (_fun40284_ip) {
                case 0:
                    var1 = arg0;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 15;
                    var3 = var0[var6];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.GuildsNodeType;
                    var3 = var3.FOLDER;
                    if (!(var3 !== var4)) {
                        _fun40284_ip = 82;
                        continue _fun40284
                    }
                case 49:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.GuildsNodeType;
                    var3 = var3.GUILD;
                    if (!(var3 === var4)) {
                        _fun40284_ip = 99;
                        continue _fun40284
                    }
                case 82:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var1);
                case 99:
                    var2 = _closure1_slot24;
                    var1 = var1.children;
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun40284_ip = 157;
                        continue _fun40284
                    }
                case 128:
                    var5 = _closure2_slot1;
                    var1 = var2.value;
                    var1 = var5.bind(var0)(var1);
                    var5 = var4.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun40284_ip = 128;
                        continue _fun40284
                    }
                case 157:
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = arg0;
        var2 = var1.root;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var0;
    };
    var10 = var11.bind(var12)(var10);
    var _closure1_slot21 = var10;
    var9 = var5[var9];
    var11 = var4.bind(var0)(var9);
    var10 = var11.cachedFunction;
    var9 = function(arg0) { // Environment: var6
        var0 = arg0;
        var0 = var0.root;
        var2 = var0.children;
        var1 = var2.map;
        var0 = _closure1_slot27;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9 = var10.bind(var11)(var9);
    var _closure1_slot22 = var9;
    var6 = function(arg0) { // Environment: var6
        var3 = function() {
            _fun40287: for (var _fun40287_ip = 0;;) switch (_fun40287_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = {};
                    var6 = _closure1_slot29;
                    var0.CONNECTION_OPEN = var6;
                    var0.OVERLAY_INITIALIZE = var6;
                    var7 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.loadCache;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.CACHE_LOADED = var7;
                    var0.GUILD_CREATE = var6;
                    var0.GUILD_DELETE = var6;
                    var6 = _closure1_slot35;
                    var0.GUILD_MEMBER_ADD = var6;
                    var6 = _closure1_slot30;
                    var0.USER_SETTINGS_PROTO_UPDATE = var6;
                    var6 = _closure1_slot31;
                    var0.GUILD_MOVE_BY_ID = var6;
                    var6 = _closure1_slot32;
                    var0.GUILD_FOLDER_CREATE_LOCAL = var6;
                    var6 = _closure1_slot33;
                    var0.GUILD_FOLDER_EDIT_LOCAL = var6;
                    var6 = _closure1_slot34;
                    var0.GUILD_FOLDER_DELETE_LOCAL = var6;
                    var6 = _closure1_slot36;
                    var0.TOGGLE_GUILD_FOLDER_EXPAND = var6;
                    var6 = _closure1_slot37;
                    var0.SET_GUILD_FOLDER_EXPANDED = var6;
                    var6 = _closure1_slot38;
                    var0.GUILD_FOLDER_COLLAPSE = var6;
                    var9 = new Array(1);
                    var9[0] = var0;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun40287_ip = 197;
                        continue _fun40287
                    }
                case 184:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun40287_ip = 231;
                    continue _fun40287;
                case 197:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 231:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        _fun40289: for (var _fun40289_ip = 0;;) switch (_fun40289_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = var2.readSnapshot;
                                var0 = _closure2_slot0;
                                var0 = var0.LATEST_SNAPSHOT_VERSION;
                                var2 = var1.bind(var2)(var0);
                                var1 = null;
                                var4 = var1 == var2;
                                var0 = undefined;
                                var3 = undefined;
                                if (var4) {
                                    _fun40289_ip = 50;
                                    continue _fun40289
                                }
                            case 44:
                                var3 = var2.tree;
                            case 50:
                                if (!(var1 != var3)) {
                                    _fun40289_ip = 242;
                                    continue _fun40289
                                }
                            case 57:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var4 = 15;
                                var1 = var1[var4];
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.GuildsTree;
                                var2 = var1.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var10 = var2;
                                var1 = new var10[var1](var9);
                                var2 = var1 instanceof Object ? var1 : var2;
                                _closure1_slot18 = var2;
                                var1 = var2.loadSnapshot;
                                var1 = var1.bind(var2)(var3);
                                var2 = _closure1_slot24;
                                var3 = _closure1_slot18;
                                var1 = var3.allNodes;
                                var1 = var1.bind(var3)();
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.bind(var0)();
                                var1 = var2.done;
                                if (var1) {
                                    _fun40289_ip = 242;
                                    continue _fun40289
                                }
                            case 158:
                                var6 = var2.value;
                                var7 = var6.type;
                                var8 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var4];
                                var1 = var8.bind(var0)(var1);
                                var1 = var1.GuildsNodeType;
                                var1 = var1.FOLDER;
                                if (!(var7 === var1)) {
                                    _fun40289_ip = 227;
                                    continue _fun40289
                                }
                            case 201:
                                var8 = _closure1_slot11;
                                var7 = var8.isFolderExpanded;
                                var1 = var6.id;
                                var1 = var7.bind(var8)(var1);
                                var6.expanded = var1;
                            case 227:
                                var6 = var3.bind(var0)();
                                var1 = var6.done;
                                var2 = var6;
                                if (!var1) {
                                    _fun40289_ip = 158;
                                    continue _fun40289
                                }
                            case 242:
                                return var0;
                        }
                    };
                    var0.loadCache = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var8 = this;
            var7 = var8.waitFor;
            var15 = _closure1_slot14;
            var14 = _closure1_slot15;
            var13 = _closure1_slot10;
            var12 = _closure1_slot12;
            var11 = _closure1_slot9;
            var10 = _closure1_slot11;
            var9 = _closure1_slot8;
            var16 = var8;
            var0 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuildsTree';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildFolders';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot20;
            var2 = _closure1_slot18;
            var1 = var2.version;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGuildFolderById';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = var2.getGuildFolders;
            var2 = var1.bind(var2)();
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.folderId;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getFlattenedGuildIds';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot19;
            var2 = _closure1_slot18;
            var1 = var2.version;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getFlattenedGuildFolderList';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot21;
            var2 = _closure1_slot18;
            var1 = var2.version;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getCompatibleGuildFolders';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot22;
            var2 = _closure1_slot18;
            var1 = var2.version;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getFastListGuildFolders';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var0 = var1.getRoots;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'takeSnapshot';
        var4.key = var6;
        var5 = function() {
            var0 = {};
            var1 = _closure2_slot0;
            var1 = var1.LATEST_SNAPSHOT_VERSION;
            var0.version = var1;
            var1 = {};
            var3 = _closure1_slot18;
            var2 = var3.getSnapshot;
            var2 = var2.bind(var3)();
            var1.tree = var2;
            var0.data = var1;
            return var0;
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var8);
    var8 = 'SortedGuildStore';
    var6.displayName = var8;
    var6.LATEST_SNAPSHOT_VERSION = var7;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var16 = var7;
    var6 = new var16[var6](var15);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 20;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'stores/SortedGuildStore.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildsNodeType;
    var2.GuildsNodeType = var3;
    var2.insertUnsortedGuilds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3216, 3094, 1310, 4378, 4002, 1681, 1410, 1218, 4304, 1621, 4379, 644, 44, 1304, 1680, 2]);