// modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun79471: for (var _fun79471_ip = 0;;) switch (_fun79471_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun79471_ip = 46;
                    continue _fun79471
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun79471_ip = 55;
                    continue _fun79471
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun79471_ip = 345;
                    continue _fun79471
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun79471_ip = 323;
                    continue _fun79471
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun79471_ip = 283;
                    continue _fun79471
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun79471_ip = 270;
                    continue _fun79471
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
                    _fun79471_ip = 163;
                    continue _fun79471
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun79471_ip = 179;
                    continue _fun79471
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun79471_ip = 249;
                    continue _fun79471
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun79471_ip = 249;
                    continue _fun79471
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun79471_ip = 234;
                    continue _fun79471
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun79471_ip = 247;
                    continue _fun79471
                }
            case 234:
                var8 = _closure1_slot25;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun79471_ip = 265;
                continue _fun79471;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun79471_ip = 283;
                continue _fun79471;
            case 270:
                var6 = _closure1_slot25;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun79471_ip = 323;
                    continue _fun79471
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
                    _fun79471_ip = 330;
                    continue _fun79471
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun79472: for (var _fun79472_ip = 0;;) switch (_fun79472_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun79472_ip = 56;
                                continue _fun79472
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
                            _fun79472_ip = 67;
                            continue _fun79472;
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
            case 345:
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
        _fun79473: for (var _fun79473_ip = 0;;) switch (_fun79473_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun79473_ip = 23;
                    continue _fun79473
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun79473_ip = 33;
                    continue _fun79473
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
                    _fun79473_ip = 70;
                    continue _fun79473
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun79473_ip = 55;
                    continue _fun79473
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun79474: for (var _fun79474_ip = 0;;) switch (_fun79474_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.id;
                var17 = var0.override;
                var0 = var0.experiment;
                var1 = _closure1_slot13;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var5 = _closure1_slot7;
                var1 = var5.getId;
                var9 = var1.bind(var5)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 26;
                var1 = var6[var7];
                var8 = var5.bind(var3)(var1);
                var1 = var8.useExperimentAssignment;
                var1 = var1.bind(var8)(var0, var9);
                var7 = var6[var7];
                var8 = var5.bind(var3)(var7);
                var7 = var8.useExperimentServerAssignment;
                var22 = var7.bind(var8)(var0, var9);
                var8 = _closure1_slot1;
                var7 = 17;
                var7 = var6[var7];
                var11 = var8.bind(var3)(var7);
                var9 = var11.sortBy;
                var12 = _closure1_slot6;
                var8 = var12.getRecentExposures;
                var7 = _closure1_slot10;
                var7 = var7.USER;
                var8 = var8.bind(var12)(var7, var13);
                var7 = function(arg0) { // Environment: var2
                    _fun79475: for (var _fun79475_ip = 0;;) switch (_fun79475_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var0 = var3().value;
                            var0 = var1;
                            var5 = undefined;
                            var2 = var0 === var5;
                            var0 = undefined;
                            if (var2) {
                                _fun79475_ip = 49;
                                continue _fun79475
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var1;
                            var3 = var3 === var5;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun79475_ip = 49;
                                continue _fun79475
                            }
                        case 43:
                            var0 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun79475_ip = 55;
                                continue _fun79475
                            }
                        case 52:
                            var1.return();
                        case 55:
                            var0 = -var0;
                            return var0;
                    }
                };
                var8 = var9.bind(var11)(var8, var7);
                var7 = var8.map;
                var2 = function(arg0) { // Environment: var2
                    _fun79476: for (var _fun79476_ip = 0;;) switch (_fun79476_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var3 = var2().value;
                            var1 = var0;
                            var6 = undefined;
                            var1 = var1 === var6;
                            var5 = undefined;
                            if (var1) {
                                _fun79476_ip = 27;
                                continue _fun79476
                            }
                        case 24:
                            var5 = var3;
                        case 27:
                            var3 = undefined;
                            if (var1) {
                                _fun79476_ip = 57;
                                continue _fun79476
                            }
                        case 32:
                            var4 = var2().value;
                            var2 = var0;
                            var2 = var2 === var6;
                            var3 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun79476_ip = 57;
                                continue _fun79476
                            }
                        case 51:
                            var3 = var4;
                            var1 = var2;
                        case 57:
                            if (var1) {
                                _fun79476_ip = 63;
                                continue _fun79476
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var0 = global;
                            var1 = var0.Date;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var11 = var2;
                            var10 = var3;
                            var1 = new var11[var1](var10, var9);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = var2.toLocaleString;
                            var10 = var1.bind(var2)();
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var11 = '';
                            var9 = ' (';
                            var7 = ')';
                            var8 = var5;
                            var0 = var11[var3](var10, var9, var8, var7, var6);
                            return var0;
                    }
                };
                var14 = var7.bind(var8)(var2);
                var2 = var0.system;
                var0 = 21;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ExperimentSystem;
                var0 = var0.LEGACY;
                if (!(var2 !== var0)) {
                    _fun79474_ip = 255;
                    continue _fun79474
                }
            case 214:
                var0 = null;
                var0 = var0 != var1;
                var13 = 'Currently unassigned';
                if (!var0) {
                    _fun79474_ip = 253;
                    continue _fun79474
                }
            case 229:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = 'Currently assigned to variant ';
                var13 = var2.bind(var0)(var1);
            case 253:
                _fun79474_ip = 298;
                continue _fun79474;
            case 255:
                var0 = null;
                var2 = var1;
                if (!(var0 == var2)) {
                    _fun79474_ip = 274;
                    continue _fun79474
                }
            case 264:
                var0 = _closure1_slot9;
                var2 = var0.NOT_ELIGIBLE;
            case 274:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Currently assigned to bucket ';
                var13 = var1.bind(var0)(var2);
            case 298:
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var4.debugContainer;
                var0.style = var4;
                var7 = _closure1_slot11;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 27;
                var4 = var8[var5];
                var4 = var9.bind(var3)(var4);
                var6 = var4.TableRowGroup;
                var4 = {};
                var11 = 'Overview';
                var4.title = var11;
                var11 = _closure1_slot11;
                var12 = 23;
                var8 = var8[var12];
                var8 = var9.bind(var3)(var8);
                var9 = var8.TableRow;
                var8 = {};
                var8.label = var13;
                var16 = null;
                var15 = var16 == var22;
                var13 = undefined;
                if (!var15) {
                    _fun79474_ip = 405;
                    continue _fun79474
                }
            case 399:
                var13 = 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.';
            case 405:
                var8.subLabel = var13;
                var8 = var11.bind(var3)(var9, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(7);
                var4[0] = var6;
                var6 = _closure1_slot16;
                var4[1] = var6;
                var8 = _closure1_slot11;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = var9[var5];
                var6 = var11.bind(var3)(var6);
                var7 = var6.TableRowGroup;
                var6 = {};
                var13 = 'Server Descriptor';
                var6.title = var13;
                var15 = _closure1_slot11;
                var9 = var9[var12];
                var9 = var11.bind(var3)(var9);
                var13 = var9.TableRow;
                var9 = {};
                var19 = var16 == var22;
                var11 = 'None';
                var18 = var11;
                if (var19) {
                    _fun79474_ip = 540;
                    continue _fun79474
                }
            case 516:
                var19 = global;
                var21 = var19.JSON;
                var20 = var21.stringify;
                var19 = 2;
                var18 = var20.bind(var21)(var22, var3, var19);
            case 540:
                var9.label = var18;
                var9 = var15.bind(var3)(var13, var9);
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[2] = var6;
                var6 = _closure1_slot17;
                var4[3] = var6;
                var8 = _closure1_slot11;
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = var9[var5];
                var6 = var13.bind(var3)(var6);
                var7 = var6.TableRowGroup;
                var6 = {};
                var15 = 'Override Descriptor';
                var6.title = var15;
                var15 = _closure1_slot11;
                var9 = var9[var12];
                var9 = var13.bind(var3)(var9);
                var13 = var9.TableRow;
                var9 = {};
                var18 = var16 == var17;
                var16 = var11;
                if (var18) {
                    _fun79474_ip = 672;
                    continue _fun79474
                }
            case 642:
                var18 = global;
                var20 = var18.JSON;
                var19 = var20.stringify;
                var18 = var17.originalDescriptor;
                var17 = 2;
                var16 = var19.bind(var20)(var18, var3, var17);
            case 672:
                var9.label = var16;
                var9 = var15.bind(var3)(var13, var9);
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[4] = var6;
                var6 = _closure1_slot18;
                var4[5] = var6;
                var7 = _closure1_slot11;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = var8[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var13 = 'Recent Exposures';
                var5.title = var13;
                var10 = _closure1_slot11;
                var8 = var8[var12];
                var8 = var9.bind(var3)(var8);
                var9 = var8.TableRow;
                var8 = {};
                var13 = var14.length;
                var12 = 0;
                if (!(var12 !== var13)) {
                    _fun79474_ip = 789;
                    continue _fun79474
                }
            case 775:
                var13 = var14.join;
                var12 = '\n';
                var11 = var13.bind(var14)(var12);
            case 789:
                var8.label = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[6] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun79477: for (var _fun79477_ip = 0;;) switch (_fun79477_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.id;
                var20 = var0.override;
                var0 = _closure1_slot13;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var1 = _closure1_slot6;
                var0 = var1.getLoadedGuildExperiment;
                var25 = var0.bind(var1)(var13);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 17;
                var5 = var1[var0];
                var10 = var2.bind(var3)(var5);
                var7 = var10.sortBy;
                var11 = _closure1_slot6;
                var6 = var11.getRecentExposures;
                var5 = _closure1_slot10;
                var5 = var5.GUILD;
                var6 = var6.bind(var11)(var5, var13);
                var5 = function(arg0) { // Environment: var8
                    _fun79478: for (var _fun79478_ip = 0;;) switch (_fun79478_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var0 = var3().value;
                            var0 = var1;
                            var5 = undefined;
                            var2 = var0 === var5;
                            var0 = undefined;
                            if (var2) {
                                _fun79478_ip = 49;
                                continue _fun79478
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var1;
                            var3 = var3 === var5;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun79478_ip = 49;
                                continue _fun79478
                            }
                        case 43:
                            var0 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun79478_ip = 55;
                                continue _fun79478
                            }
                        case 52:
                            var1.return();
                        case 55:
                            var0 = -var0;
                            return var0;
                    }
                };
                var7 = var7.bind(var10)(var6, var5);
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var8
                    _fun79479: for (var _fun79479_ip = 0;;) switch (_fun79479_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var3 = var2().value;
                            var1 = var0;
                            var6 = undefined;
                            var1 = var1 === var6;
                            var5 = undefined;
                            if (var1) {
                                _fun79479_ip = 27;
                                continue _fun79479
                            }
                        case 24:
                            var5 = var3;
                        case 27:
                            var3 = undefined;
                            if (var1) {
                                _fun79479_ip = 57;
                                continue _fun79479
                            }
                        case 32:
                            var4 = var2().value;
                            var2 = var0;
                            var2 = var2 === var6;
                            var3 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun79479_ip = 57;
                                continue _fun79479
                            }
                        case 51:
                            var3 = var4;
                            var1 = var2;
                        case 57:
                            if (var1) {
                                _fun79479_ip = 63;
                                continue _fun79479
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var0 = global;
                            var1 = var0.Date;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var11 = var2;
                            var10 = var3;
                            var1 = new var11[var1](var10, var9);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = var2.toLocaleString;
                            var10 = var1.bind(var2)();
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var11 = '';
                            var9 = ' (';
                            var7 = ')';
                            var8 = var5;
                            var0 = var11[var3](var10, var9, var8, var7, var6);
                            return var0;
                    }
                };
                var11 = var6.bind(var7)(var5);
                var1 = var1[var0];
                var6 = var2.bind(var3)(var1);
                var5 = var6.sortBy;
                var2 = _closure1_slot8;
                var1 = var2.getGuildsArray;
                var2 = var1.bind(var2)();
                var1 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = var1.toLowerCase;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var5.bind(var6)(var2, var1);
                var1 = {};
                var _closure2_slot0 = var1;
                var24 = new Array(0);
                var2 = _closure1_slot24;
                var10 = var2.bind(var3)(var5);
                var5 = var10.bind(var3)();
                var2 = var5.done;
                var17 = global;
                var7 = '';
                var6 = ': ';
                var12 = 0;
                var18 = null;
                if (var2) {
                    _fun79477_ip = 343;
                    continue _fun79477
                }
            case 218:
                var2 = var5.value;
                var16 = _closure1_slot6;
                var15 = var16.getGuildExperimentDescriptor;
                var14 = var2.id;
                var14 = var15.bind(var16)(var13, var14);
                var15 = var18 == var14;
                var16 = undefined;
                if (var15) {
                    _fun79477_ip = 259;
                    continue _fun79477
                }
            case 253:
                var16 = var14.bucket;
            case 259:
                if (!(var18 == var16)) {
                    _fun79477_ip = 273;
                    continue _fun79477
                }
            case 263:
                var14 = _closure1_slot9;
                var16 = var14.NOT_ELIGIBLE;
            case 273:
                var14 = var16 in var1;
                if (var14) {
                    _fun79477_ip = 284;
                    continue _fun79477
                }
            case 280:
                var1[var16] = var12;
            case 284:
                var14 = var1[var16];
                var14 = var14 + 1;
                var1[var16] = var14;
                var14 = var24.push;
                var15 = var2.name;
                var2 = var17.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var7)(var15, var6, var16);
                var2 = var14.bind(var24)(var2);
                var14 = var10.bind(var3)();
                var2 = var14.done;
                var5 = var14;
                if (!var2) {
                    _fun79477_ip = 218;
                    continue _fun79477
                }
            case 343:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = var7[var0];
                var0 = var2.bind(var3)(var0);
                var1 = var0.bind(var3)(var1);
                var0 = var1.keys;
                var2 = var0.bind(var1)();
                var1 = var2.map;
                var0 = var17.Number;
                var1 = var1.bind(var2)(var0);
                var0 = var1.sort;
                var2 = var0.bind(var1)();
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var8
                    var4 = arg0;
                    var0 = _closure2_slot0;
                    var3 = var0[var4];
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '';
                    var0 = ' guilds are in bucket ';
                    var0 = var2.bind(var1)(var3, var0, var4);
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.join;
                var0 = ', ';
                var21 = var1.bind(var2)(var0);
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var4.debugContainer;
                var0.style = var4;
                var6 = _closure1_slot11;
                var13 = _closure1_slot0;
                var10 = 27;
                var4 = var7[var10];
                var4 = var13.bind(var3)(var4);
                var5 = var4.TableRowGroup;
                var4 = {};
                var14 = 'Overview';
                var4.title = var14;
                var14 = _closure1_slot11;
                var19 = 23;
                var7 = var7[var19];
                var7 = var13.bind(var3)(var7);
                var13 = var7.TableRow;
                var7 = {};
                var15 = var17.HermesInternal;
                var16 = var15.concat;
                var15 = 'Current Assignments: ';
                var15 = var16.bind(var15)(var21);
                var7.label = var15;
                var16 = var18 == var25;
                var15 = null;
                if (!var16) {
                    _fun79477_ip = 556;
                    continue _fun79477
                }
            case 550:
                var15 = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
            case 556:
                var7.subLabel = var15;
                var7 = var14.bind(var3)(var13, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(9);
                var4[0] = var5;
                var5 = _closure1_slot19;
                var4[1] = var5;
                var7 = _closure1_slot11;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = var13[var10];
                var5 = var14.bind(var3)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var15 = 'Guild Assignments';
                var5.title = var15;
                var21 = _closure1_slot11;
                var15 = var13[var19];
                var15 = var14.bind(var3)(var15);
                var16 = var15.TableRow;
                var15 = {};
                var23 = var24.join;
                var22 = '\n';
                var22 = var23.bind(var24)(var22);
                var15.label = var22;
                var15 = var21.bind(var3)(var16, var15);
                var5.children = var15;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var5 = _closure1_slot20;
                var4[3] = var5;
                var7 = _closure1_slot11;
                var5 = var13[var10];
                var5 = var14.bind(var3)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var15 = 'Server Descriptor';
                var5.title = var15;
                var15 = _closure1_slot11;
                var13 = var13[var19];
                var13 = var14.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var22 = var18 == var25;
                var16 = 'None';
                var21 = var16;
                if (var22) {
                    _fun79477_ip = 787;
                    continue _fun79477
                }
            case 765:
                var24 = var17.JSON;
                var23 = var24.stringify;
                var22 = 2;
                var21 = var23.bind(var24)(var25, var3, var22);
            case 787:
                var13.label = var21;
                var13 = var15.bind(var3)(var14, var13);
                var5.children = var13;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var5 = _closure1_slot21;
                var4[5] = var5;
                var7 = _closure1_slot11;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = var13[var10];
                var5 = var14.bind(var3)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var15 = 'Override Descriptor';
                var5.title = var15;
                var15 = _closure1_slot11;
                var13 = var13[var19];
                var13 = var14.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var18 = var18 == var20;
                if (var18) {
                    _fun79477_ip = 908;
                    continue _fun79477
                }
            case 886:
                var19 = var17.JSON;
                var18 = var19.stringify;
                var17 = 2;
                var16 = var18.bind(var19)(var20, var3, var17);
            case 908:
                var13.label = var16;
                var13 = var15.bind(var3)(var14, var13);
                var5.children = var13;
                var5 = var7.bind(var3)(var6, var5);
                var4[6] = var5;
                var5 = _closure1_slot22;
                var4[7] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var10 = 'Recent Exposures';
                var5.title = var10;
                var10 = var11.length;
                if (!(var12 !== var10)) {
                    _fun79477_ip = 1007;
                    continue _fun79477
                }
            case 988:
                var10 = var11.map;
                var8 = function(arg0) { // Environment: var8
                    var4 = arg0;
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableRow;
                    var0 = {};
                    var0.label = var4;
                    var5 = 1;
                    var0.labelLineClamp = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var8 = var10.bind(var11)(var8);
                _fun79477_ip = 1011;
                continue _fun79477;
            case 1007:
                var8 = _closure1_slot23;
            case 1011:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[8] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var1 = function arg0() {
        _fun79483: for (var _fun79483_ip = 0;;) switch (_fun79483_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.experiment;
                var9 = var0.override;
                var10 = var0.id;
                var15 = var0.options;
                var0 = var0.onCopyLink;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot13;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 28;
                var1 = var20[var1];
                var2 = var16.bind(var3)(var1);
                var1 = var2.getURLForExperiment;
                var19 = var1.bind(var2)(var10);
                var _closure2_slot1 = var19;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var19;
                var1[1] = var0;
                var0 = function() { // Environment: var8
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.copy;
                    var2 = _closure2_slot1;
                    var1 = function() { // Environment: var1
                        _fun79485: for (var _fun79485_ip = 0;;) switch (_fun79485_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var0 = 30;
                                var1 = var6[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.open;
                                var1 = {
                                    'key': 'experiment-link-copied',
                                    'content': 'Copied experiment link',
                                    'IconComponent': null,
                                    'iconColor': 'status-positive'
                                };
                                var5 = _closure1_slot0;
                                var4 = 31;
                                var4 = var6[var4];
                                var4 = var5.bind(var0)(var4);
                                var4 = var4.CircleCheckIcon;
                                var1.IconComponent = var4;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure2_slot0;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun79485_ip = 99;
                                    continue _fun79485
                                }
                            case 91:
                                var1 = _closure2_slot0;
                                var1 = var1.bind(var0)();
                            case 99:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var18 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = {};
                var7 = _closure1_slot1;
                var5 = 9;
                var5 = var20[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.spacing;
                var5 = var5.PX_12;
                var4.paddingHorizontal = var5;
                var0.style = var4;
                var7 = _closure1_slot11;
                var12 = 27;
                var4 = var20[var12];
                var4 = var16.bind(var3)(var4);
                var5 = var4.TableRowGroup;
                var4 = {};
                var14 = 'Experiment Assignments';
                var4.title = var14;
                var14 = var15.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    _fun79486: for (var _fun79486_ip = 0;;) switch (_fun79486_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.label;
                            var7 = var0.isDestructive;
                            var0 = var0.onPress;
                            var4 = _closure1_slot11;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 23;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.TableRow;
                            var1 = {};
                            var6 = 'default';
                            if (!var7) {
                                _fun79486_ip = 67;
                                continue _fun79486
                            }
                        case 63:
                            var6 = 'danger';
                        case 67:
                            var1.variant = var6;
                            var1.label = var5;
                            var1.onPress = var0;
                            var0 = arg1;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var8 = var14.bind(var15)(var8);
                var4.children = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var8 = _closure1_slot11;
                var7 = _closure1_slot5;
                var5 = {};
                var13 = var13.copyExperimentLink;
                var5.style = var13;
                var14 = _closure1_slot11;
                var12 = var20[var12];
                var12 = var16.bind(var3)(var12);
                var13 = var12.TableRowGroup;
                var12 = {};
                var15 = 'Share';
                var12.title = var15;
                var17 = _closure1_slot11;
                var15 = 23;
                var15 = var20[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.TableRow;
                var15 = {};
                var20 = 'Copy Link';
                var15.label = var20;
                var15.subLabel = var19;
                var15.onPress = var18;
                var15 = var17.bind(var3)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var5.children = var12;
                var5 = var8.bind(var3)(var7, var5);
                var4[1] = var5;
                var7 = var11.kind;
                var5 = 'guild';
                if (!(var5 !== var7)) {
                    _fun79483_ip = 404;
                    continue _fun79483
                }
            case 372:
                var8 = _closure1_slot11;
                var7 = _closure1_slot26;
                var5 = {};
                var5.id = var10;
                var5.override = var9;
                var5.experiment = var11;
                var5 = var8.bind(var3)(var7, var5);
                _fun79483_ip = 429;
                continue _fun79483;
            case 404:
                var8 = _closure1_slot11;
                var7 = _closure1_slot27;
                var6 = {};
                var6.id = var10;
                var6.override = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 429:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var1;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.id;
        var11 = var0.experiment;
        var10 = var0.override;
        var8 = var0.options;
        var7 = var0.onCopyLink;
        var3 = _closure1_slot11;
        var6 = _closure1_slot0;
        var13 = _closure1_slot2;
        var0 = 32;
        var0 = var13[var0];
        var2 = undefined;
        var0 = var6.bind(var2)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var12 = _closure1_slot11;
        var5 = 33;
        var5 = var13[var5];
        var5 = var6.bind(var2)(var5);
        var6 = var5.BottomSheetTitleHeader;
        var5 = {};
        var13 = var11.title;
        var5.title = var13;
        var5.subtitle = var9;
        var5 = var12.bind(var2)(var6, var5);
        var0.header = var5;
        var6 = _closure1_slot11;
        var5 = _closure1_slot28;
        var4 = {};
        var4.experiment = var11;
        var4.override = var10;
        var4.id = var9;
        var4.options = var8;
        var4.onCopyLink = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = global;
    var9 = var0.Object;
    var4 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 1;
    var4 = var6[var14];
    var3 = arg3;
    var11 = var3.bind(var0)(var4);
    var _closure1_slot4 = var11;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.ExperimentBuckets;
    var _closure1_slot9 = var4;
    var3 = var3.ExperimentTypes;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var9 = var3.jsx;
    var _closure1_slot11 = var9;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var6[var3];
    var10 = var5.bind(var0)(var3);
    var4 = var10.createStyles;
    var3 = {};
    var12 = {};
    var13 = 9;
    var15 = var6[var13];
    var15 = var8.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var15;
    var12.flex = var14;
    var3.container = var12;
    var12 = {};
    var14 = var6[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var12.paddingHorizontal = var14;
    var3.listContainer = var12;
    var12 = {};
    var14 = var6[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var12.paddingVertical = var14;
    var14 = var6[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var12.paddingHorizontal = var14;
    var3.searchBar = var12;
    var12 = {};
    var14 = var6[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var12.marginTop = var14;
    var3.debugContainer = var12;
    var12 = {};
    var13 = var6[var13];
    var13 = var8.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var12.marginTop = var13;
    var3.copyExperimentLink = var12;
    var3 = var4.bind(var10)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var6[var3];
    var4 = var8.bind(var0)(var3);
    var3 = {
        'Illustration': null,
        'title': 'No Experiments',
        'body': 'No experiments are currently running.'
    };
    var10 = 11;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.NoResults;
    var3.Illustration = var10;
    var3 = var9.bind(var0)(var4, var3);
    var _closure1_slot14 = var3;
    var4 = var11.memo;
    var3 = function() { // Environment: var7
        _fun79488: for (var _fun79488_ip = 0;;) switch (_fun79488_ip) {
            case 0:
                var2 = _closure1_slot13;
                var4 = undefined;
                var15 = var2.bind(var4)();
                var5 = _closure1_slot4;
                var3 = var5.useState;
                var2 = '';
                var5 = var3.bind(var5)(var2);
                var3 = _closure1_slot3;
                var2 = 2;
                var3 = var3.bind(var4)(var5, var2);
                var2 = 0;
                var12 = var3[var2];
                var2 = 1;
                var17 = var3[var2];
                var16 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var3 = var16.bind(var4)(var2);
                var2 = var3.useLegacyExperiments;
                var2 = var2.bind(var3)();
                var10 = var2.experiments;
                var _closure2_slot0 = var10;
                var9 = var2.overridesInfo;
                var _closure2_slot1 = var9;
                var2 = 13;
                var2 = var5[var2];
                var3 = var16.bind(var4)(var2);
                var2 = var3.useApexExperiments;
                var2 = var2.bind(var3)();
                var3 = var2.experiments;
                var _closure2_slot2 = var3;
                var2 = var2.overridesInfo;
                var _closure2_slot3 = var2;
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var3;
                var3 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure2_slot0;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var3 = _closure2_slot2;
                    var4 = var0;
                    var1 = copyDataProperties(var4, var3);
                    return var0;
                };
                var3 = var7.bind(var8)(var3, var6);
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure2_slot1;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var3 = _closure2_slot3;
                    var4 = var0;
                    var1 = copyDataProperties(var4, var3);
                    return var0;
                };
                var9 = var7.bind(var8)(var2, var6);
                var _closure2_slot4 = var9;
                var2 = _closure1_slot1;
                var6 = 14;
                var6 = var5[var6];
                var7 = var2.bind(var4)(var6);
                var6 = {};
                var8 = true;
                var6.includeKeyboardHeight = var8;
                var6 = var7.bind(var4)(var6);
                var10 = var6.insets;
                var6 = 15;
                var6 = var5[var6];
                var6 = var2.bind(var4)(var6);
                var11 = var6.bind(var4)();
                var6 = 16;
                var7 = var5[var6];
                var8 = var16.bind(var4)(var7);
                var7 = var8.getBestMatches;
                var13 = var5[var6];
                var14 = var16.bind(var4)(var13);
                var13 = var14.sortEntries;
                var6 = var5[var6];
                var16 = var16.bind(var4)(var6);
                var6 = var16.getEntries;
                var6 = var6.bind(var16)(var3);
                var6 = var13.bind(var14)(var6, var9);
                var12 = var7.bind(var8)(var6, var12);
                var _closure2_slot5 = var12;
                var13 = _closure1_slot4;
                var8 = var13.useMemo;
                var6 = var12.length;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var0 = _closure2_slot5;
                    var1 = var0.length;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var14 = var8.bind(var13)(var6, var7);
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var9;
                var0 = function(arg0, arg1) { // Environment: var0
                    var4 = arg1;
                    var0 = _closure2_slot5;
                    var5 = var0[var4];
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var7 = var5.id;
                    var1.id = var7;
                    var7 = var5.experiment;
                    var1.experiment = var7;
                    var6 = _closure2_slot4;
                    var5 = var5.id;
                    var5 = var6[var5];
                    var1.override = var5;
                    var5 = 0;
                    var5 = var5 === var4;
                    var1.start = var5;
                    var5 = var0.length;
                    var0 = 1;
                    var0 = var5 - var0;
                    var0 = var4 === var0;
                    var1.end = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var9 = var7.bind(var8)(var0, var6);
                var0 = 17;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isEmpty;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun79488_ip = 664;
                    continue _fun79488
                }
            case 442:
                var3 = _closure1_slot12;
                var2 = _closure1_slot5;
                var0 = {};
                var5 = var15.container;
                var0.style = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var15.searchBar;
                var5.style = var8;
                var16 = _closure1_slot11;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 18;
                var8 = var13[var8];
                var8 = var12.bind(var4)(var8);
                var12 = var8.SearchField;
                var8 = {};
                var18 = 'md';
                var8.size = var18;
                var8.onChange = var17;
                var8 = var16.bind(var4)(var12, var8);
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot11;
                var12 = _closure1_slot1;
                var6 = 19;
                var6 = var13[var6];
                var7 = var12.bind(var4)(var6);
                var6 = {};
                var15 = var15.listContainer;
                var6.style = var15;
                var6.sections = var14;
                var14 = 'windowSize';
                var6.estimatedListSize = var14;
                var6.itemSize = var11;
                var11 = var10.bottom;
                var10 = 9;
                var10 = var13[var10];
                var10 = var12.bind(var4)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_16;
                var10 = var11 + var10;
                var6.insetEnd = var10;
                var6.renderItem = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun79488_ip = 668;
                continue _fun79488;
            case 664:
                var0 = _closure1_slot14;
            case 668:
                return var0;
        }
    };
    var3 = var4.bind(var11)(var3);
    var10 = var11.memo;
    var4 = function(arg0) { // Environment: var7
        _fun79493: for (var _fun79493_ip = 0;;) switch (_fun79493_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.id;
                var _closure2_slot0 = var1;
                var5 = var2.override;
                var _closure2_slot1 = var5;
                var9 = var2.experiment;
                var _closure2_slot2 = var9;
                var11 = var2.start;
                var10 = var2.end;
                var7 = _closure1_slot4;
                var6 = var7.useMemo;
                var3 = new Array(1);
                var3[0] = var9;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getExperimentVariantsForDevTools;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var3);
                var _closure2_slot3 = var2;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var3 = new Array(4);
                var3[0] = var1;
                var3[1] = var9;
                var3[2] = var5;
                var3[3] = var2;
                var1 = function() { // Environment: var0
                    var2 = global;
                    var0 = var2.Map;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var13 = var3;
                    var0 = new var13[var0](var12);
                    var4 = var0 instanceof Object ? var0 : var3;
                    var _closure3_slot0 = var4;
                    var5 = _closure2_slot3;
                    var3 = var5.forEach;
                    var0 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var2 = _closure3_slot0;
                        var1 = var2.set;
                        var0 = var3.id;
                        var0 = var1.bind(var2)(var0, var3);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var3.bind(var5)(var0);
                    var6 = new Array(0);
                    var _closure3_slot1 = var6;
                    var3 = var4.forEach;
                    var0 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var _closure4_slot0 = var4;
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var0 = {};
                        var4 = var4.label;
                        var0.label = var4;
                        var3 = function() {
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 21;
                            var2 = var3[var0];
                            var0 = undefined;
                            var7 = var4.bind(var0)(var2);
                            var6 = var7.overrideBucket;
                            var4 = _closure2_slot2;
                            var5 = var4.system;
                            var4 = _closure2_slot0;
                            var2 = _closure4_slot0;
                            var2 = var2.id;
                            var2 = var6.bind(var7)(var5, var4, var2);
                            var2 = _closure1_slot1;
                            var1 = 22;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.hideActionSheet;
                            var1 = 'UserSettingsExperimentBucket';
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0.onPress = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0);
                    var3 = var6.push;
                    var0 = {
                        'label': 'Clear Override',
                        'isDestructive': true
                    };
                    var4 = function() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 21;
                        var2 = var3[var0];
                        var0 = undefined;
                        var7 = var4.bind(var0)(var2);
                        var6 = var7.overrideBucket;
                        var4 = _closure2_slot2;
                        var5 = var4.system;
                        var4 = _closure2_slot0;
                        var2 = null;
                        var2 = var6.bind(var7)(var5, var4, var2);
                        var2 = _closure1_slot1;
                        var1 = 22;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.hideActionSheet;
                        var1 = 'UserSettingsExperimentBucket';
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.onPress = var4;
                    var0 = var3.bind(var6)(var0);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 22;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var8 = var2.Promise;
                    var3 = var8.resolve;
                    var2 = {};
                    var9 = _closure1_slot29;
                    var2.default = var9;
                    var3 = var3.bind(var8)(var2);
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2.id = var8;
                    var8 = _closure2_slot2;
                    var2.experiment = var8;
                    var7 = _closure2_slot1;
                    var2.override = var7;
                    var2.options = var6;
                    var1 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var0 = 'UserSettingsExperimentBucket';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.onCopyLink = var1;
                    var1 = 'UserSettingsExperimentBucket';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var6 = var6.bind(var7)(var1, var3);
                var1 = null;
                var7 = var1 == var5;
                var3 = undefined;
                var1 = undefined;
                if (var7) {
                    _fun79493_ip = 142;
                    continue _fun79493
                }
            case 136:
                var1 = var5.variantId;
            case 142:
                var0 = function arg0, arg1() {
                    _fun79501: for (var _fun79501_ip = 0;;) switch (_fun79501_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = arg1;
                            var _closure3_slot0 = var4;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun79501_ip = 77;
                                continue _fun79501
                            }
                        case 18:
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            if (!(var0 == var1)) {
                                _fun79501_ip = 70;
                                continue _fun79501
                            }
                        case 39:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var2 = 'Unknown (';
                            var0 = ')';
                            var0 = var3.bind(var2)(var4, var0);
                            _fun79501_ip = 75;
                            continue _fun79501;
                        case 70:
                            var0 = var1.label;
                        case 75:
                            return var0;
                        case 77:
                            var0 = 'N/A';
                            return var0;
                    }
                };
                var7 = var0.bind(var3)(var2, var1);
                var2 = _closure1_slot11;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 23;
                var0 = var8[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.start = var11;
                var0.end = var10;
                var9 = var9.title;
                var0.label = var9;
                var9 = 1;
                var0.labelLineClamp = var9;
                var0.onPress = var6;
                var6 = _closure1_slot11;
                var4 = 24;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var10.bind(var11)(var4);
    var _closure1_slot15 = var4;
    var4 = 25;
    var10 = var6[var4];
    var12 = var8.bind(var0)(var10);
    var11 = {};
    var10 = 16;
    var11.size = var10;
    var11 = var9.bind(var0)(var12, var11);
    var _closure1_slot16 = var11;
    var11 = var6[var4];
    var12 = var8.bind(var0)(var11);
    var11 = {};
    var11.size = var10;
    var11 = var9.bind(var0)(var12, var11);
    var _closure1_slot17 = var11;
    var11 = var6[var4];
    var12 = var8.bind(var0)(var11);
    var11 = {};
    var11.size = var10;
    var11 = var9.bind(var0)(var12, var11);
    var _closure1_slot18 = var11;
    var11 = var6[var4];
    var12 = var8.bind(var0)(var11);
    var11 = {};
    var11.size = var10;
    var11 = var9.bind(var0)(var12, var11);
    var _closure1_slot19 = var11;
    var11 = var6[var4];
    var12 = var8.bind(var0)(var11);
    var11 = {};
    var11.size = var10;
    var11 = var9.bind(var0)(var12, var11);
    var _closure1_slot20 = var11;
    var11 = var6[var4];
    var12 = var8.bind(var0)(var11);
    var11 = {};
    var11.size = var10;
    var11 = var9.bind(var0)(var12, var11);
    var _closure1_slot21 = var11;
    var4 = var6[var4];
    var8 = var8.bind(var0)(var4);
    var4 = {};
    var4.size = var10;
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot22 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.TableRow;
    var4 = {};
    var10 = 'none';
    var4.label = var10;
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot23 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ExperimentDetails = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1590, 1216, 1410, 1591, 33, 1297, 671, 8277, 8341, 9827, 9828, 4871, 7886, 10036, 22, 7107, 7889, 3327, 1600, 3279, 4876, 3938, 8880, 10033, 5343, 3325, 5321, 3150, 3272, 4907, 5237, 2]);