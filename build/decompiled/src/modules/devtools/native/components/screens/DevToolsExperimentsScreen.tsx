// modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun78733: for (var _fun78733_ip = 0;;) switch (_fun78733_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun78733_ip = 46;
                    continue _fun78733
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun78733_ip = 55;
                    continue _fun78733
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun78733_ip = 345;
                    continue _fun78733
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun78733_ip = 323;
                    continue _fun78733
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun78733_ip = 283;
                    continue _fun78733
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun78733_ip = 270;
                    continue _fun78733
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
                    _fun78733_ip = 163;
                    continue _fun78733
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun78733_ip = 179;
                    continue _fun78733
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun78733_ip = 249;
                    continue _fun78733
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun78733_ip = 249;
                    continue _fun78733
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun78733_ip = 234;
                    continue _fun78733
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun78733_ip = 247;
                    continue _fun78733
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun78733_ip = 265;
                continue _fun78733;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun78733_ip = 283;
                continue _fun78733;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun78733_ip = 323;
                    continue _fun78733
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
                    _fun78733_ip = 330;
                    continue _fun78733
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun78734: for (var _fun78734_ip = 0;;) switch (_fun78734_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun78734_ip = 56;
                                continue _fun78734
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
                            _fun78734_ip = 67;
                            continue _fun78734;
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
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun78735: for (var _fun78735_ip = 0;;) switch (_fun78735_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun78735_ip = 23;
                    continue _fun78735
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun78735_ip = 33;
                    continue _fun78735
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
                    _fun78735_ip = 70;
                    continue _fun78735
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun78735_ip = 55;
                    continue _fun78735
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun78736: for (var _fun78736_ip = 0;;) switch (_fun78736_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.id;
                var19 = var0.override;
                var0 = var0.experiment;
                var1 = _closure1_slot13;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var5 = _closure1_slot7;
                var1 = var5.getId;
                var9 = var1.bind(var5)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 25;
                var1 = var6[var7];
                var8 = var5.bind(var3)(var1);
                var1 = var8.useExperimentAssignment;
                var1 = var1.bind(var8)(var0, var9);
                var7 = var6[var7];
                var8 = var5.bind(var3)(var7);
                var7 = var8.useExperimentServerAssignment;
                var24 = var7.bind(var8)(var0, var9);
                var8 = _closure1_slot1;
                var7 = 15;
                var7 = var6[var7];
                var11 = var8.bind(var3)(var7);
                var9 = var11.sortBy;
                var12 = _closure1_slot6;
                var8 = var12.getRecentExposures;
                var7 = _closure1_slot10;
                var7 = var7.USER;
                var8 = var8.bind(var12)(var7, var13);
                var7 = function(arg0) { // Environment: var2
                    _fun78737: for (var _fun78737_ip = 0;;) switch (_fun78737_ip) {
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
                                _fun78737_ip = 49;
                                continue _fun78737
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var1;
                            var3 = var3 === var5;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun78737_ip = 49;
                                continue _fun78737
                            }
                        case 43:
                            var0 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun78737_ip = 55;
                                continue _fun78737
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
                    _fun78738: for (var _fun78738_ip = 0;;) switch (_fun78738_ip) {
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
                                _fun78738_ip = 27;
                                continue _fun78738
                            }
                        case 24:
                            var5 = var3;
                        case 27:
                            var3 = undefined;
                            if (var1) {
                                _fun78738_ip = 57;
                                continue _fun78738
                            }
                        case 32:
                            var4 = var2().value;
                            var2 = var0;
                            var2 = var2 === var6;
                            var3 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun78738_ip = 57;
                                continue _fun78738
                            }
                        case 51:
                            var3 = var4;
                            var1 = var2;
                        case 57:
                            if (var1) {
                                _fun78738_ip = 63;
                                continue _fun78738
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
                    _fun78736_ip = 255;
                    continue _fun78736
                }
            case 214:
                var0 = null;
                var0 = var0 != var1;
                var13 = 'Currently unassigned';
                if (!var0) {
                    _fun78736_ip = 253;
                    continue _fun78736
                }
            case 229:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = 'Currently assigned to variant ';
                var13 = var2.bind(var0)(var1);
            case 253:
                _fun78736_ip = 298;
                continue _fun78736;
            case 255:
                var0 = null;
                var2 = var1;
                if (!(var0 == var2)) {
                    _fun78736_ip = 274;
                    continue _fun78736
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
                var5 = 26;
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
                var18 = null;
                var15 = var18 == var24;
                var13 = undefined;
                if (!var15) {
                    _fun78736_ip = 405;
                    continue _fun78736
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
                var9 = _closure1_slot11;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 27;
                var7 = var11[var6];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var13 = 16;
                var7.size = var13;
                var7 = var9.bind(var3)(var8, var7);
                var4[1] = var7;
                var9 = _closure1_slot11;
                var15 = _closure1_slot0;
                var7 = var11[var5];
                var7 = var15.bind(var3)(var7);
                var8 = var7.TableRowGroup;
                var7 = {};
                var16 = 'Server Descriptor';
                var7.title = var16;
                var17 = _closure1_slot11;
                var11 = var11[var12];
                var11 = var15.bind(var3)(var11);
                var16 = var11.TableRow;
                var15 = {};
                var21 = var18 == var24;
                var11 = 'None';
                var20 = var11;
                if (var21) {
                    _fun78736_ip = 571;
                    continue _fun78736
                }
            case 547:
                var21 = global;
                var23 = var21.JSON;
                var22 = var23.stringify;
                var21 = 2;
                var20 = var22.bind(var23)(var24, var3, var21);
            case 571:
                var15.label = var20;
                var15 = var17.bind(var3)(var16, var15);
                var7.children = var15;
                var7 = var9.bind(var3)(var8, var7);
                var4[2] = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = var15[var6];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.size = var13;
                var7 = var9.bind(var3)(var8, var7);
                var4[3] = var7;
                var9 = _closure1_slot11;
                var16 = _closure1_slot0;
                var7 = var15[var5];
                var7 = var16.bind(var3)(var7);
                var8 = var7.TableRowGroup;
                var7 = {};
                var17 = 'Override Descriptor';
                var7.title = var17;
                var17 = _closure1_slot11;
                var15 = var15[var12];
                var15 = var16.bind(var3)(var15);
                var16 = var15.TableRow;
                var15 = {};
                var20 = var18 == var19;
                var18 = var11;
                if (var20) {
                    _fun78736_ip = 728;
                    continue _fun78736
                }
            case 698:
                var20 = global;
                var22 = var20.JSON;
                var21 = var22.stringify;
                var20 = var19.originalDescriptor;
                var19 = 2;
                var18 = var21.bind(var22)(var20, var3, var19);
            case 728:
                var15.label = var18;
                var15 = var17.bind(var3)(var16, var15);
                var7.children = var15;
                var7 = var9.bind(var3)(var8, var7);
                var4[4] = var7;
                var9 = _closure1_slot11;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.size = var13;
                var6 = var9.bind(var3)(var7, var6);
                var4[5] = var6;
                var7 = _closure1_slot11;
                var9 = _closure1_slot0;
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
                    _fun78736_ip = 870;
                    continue _fun78736
                }
            case 856:
                var13 = var14.join;
                var12 = '\n';
                var11 = var13.bind(var14)(var12);
            case 870:
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
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun78739: for (var _fun78739_ip = 0;;) switch (_fun78739_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.id;
                var23 = var0.override;
                var0 = _closure1_slot13;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var1 = _closure1_slot6;
                var0 = var1.getLoadedGuildExperiment;
                var27 = var0.bind(var1)(var12);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 15;
                var5 = var1[var0];
                var10 = var2.bind(var3)(var5);
                var7 = var10.sortBy;
                var11 = _closure1_slot6;
                var6 = var11.getRecentExposures;
                var5 = _closure1_slot10;
                var5 = var5.GUILD;
                var6 = var6.bind(var11)(var5, var12);
                var5 = function(arg0) { // Environment: var8
                    _fun78740: for (var _fun78740_ip = 0;;) switch (_fun78740_ip) {
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
                                _fun78740_ip = 49;
                                continue _fun78740
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var1;
                            var3 = var3 === var5;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun78740_ip = 49;
                                continue _fun78740
                            }
                        case 43:
                            var0 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun78740_ip = 55;
                                continue _fun78740
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
                    _fun78741: for (var _fun78741_ip = 0;;) switch (_fun78741_ip) {
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
                                _fun78741_ip = 27;
                                continue _fun78741
                            }
                        case 24:
                            var5 = var3;
                        case 27:
                            var3 = undefined;
                            if (var1) {
                                _fun78741_ip = 57;
                                continue _fun78741
                            }
                        case 32:
                            var4 = var2().value;
                            var2 = var0;
                            var2 = var2 === var6;
                            var3 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun78741_ip = 57;
                                continue _fun78741
                            }
                        case 51:
                            var3 = var4;
                            var1 = var2;
                        case 57:
                            if (var1) {
                                _fun78741_ip = 63;
                                continue _fun78741
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
                var28 = new Array(0);
                var2 = _closure1_slot15;
                var10 = var2.bind(var3)(var5);
                var5 = var10.bind(var3)();
                var2 = var5.done;
                var20 = global;
                var7 = '';
                var6 = ': ';
                var13 = 0;
                var21 = null;
                if (var2) {
                    _fun78739_ip = 343;
                    continue _fun78739
                }
            case 218:
                var2 = var5.value;
                var16 = _closure1_slot6;
                var15 = var16.getGuildExperimentDescriptor;
                var14 = var2.id;
                var14 = var15.bind(var16)(var12, var14);
                var15 = var21 == var14;
                var16 = undefined;
                if (var15) {
                    _fun78739_ip = 259;
                    continue _fun78739
                }
            case 253:
                var16 = var14.bucket;
            case 259:
                if (!(var21 == var16)) {
                    _fun78739_ip = 273;
                    continue _fun78739
                }
            case 263:
                var14 = _closure1_slot9;
                var16 = var14.NOT_ELIGIBLE;
            case 273:
                var14 = var16 in var1;
                if (var14) {
                    _fun78739_ip = 284;
                    continue _fun78739
                }
            case 280:
                var1[var16] = var13;
            case 284:
                var14 = var1[var16];
                var14 = var14 + 1;
                var1[var16] = var14;
                var14 = var28.push;
                var15 = var2.name;
                var2 = var20.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var7)(var15, var6, var16);
                var2 = var14.bind(var28)(var2);
                var14 = var10.bind(var3)();
                var2 = var14.done;
                var5 = var14;
                if (!var2) {
                    _fun78739_ip = 218;
                    continue _fun78739
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
                var0 = var20.Number;
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
                var18 = var1.bind(var2)(var0);
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var4.debugContainer;
                var0.style = var4;
                var6 = _closure1_slot11;
                var14 = _closure1_slot0;
                var10 = 26;
                var4 = var7[var10];
                var4 = var14.bind(var3)(var4);
                var5 = var4.TableRowGroup;
                var4 = {};
                var12 = 'Overview';
                var4.title = var12;
                var15 = _closure1_slot11;
                var12 = 23;
                var7 = var7[var12];
                var7 = var14.bind(var3)(var7);
                var14 = var7.TableRow;
                var7 = {};
                var16 = var20.HermesInternal;
                var17 = var16.concat;
                var16 = 'Current Assignments: ';
                var16 = var17.bind(var16)(var18);
                var7.label = var16;
                var17 = var21 == var27;
                var16 = null;
                if (!var17) {
                    _fun78739_ip = 556;
                    continue _fun78739
                }
            case 550:
                var16 = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
            case 556:
                var7.subLabel = var16;
                var7 = var15.bind(var3)(var14, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(9);
                var4[0] = var5;
                var17 = _closure1_slot11;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var6 = 27;
                var5 = var16[var6];
                var14 = var7.bind(var3)(var5);
                var5 = {};
                var15 = 16;
                var5.size = var15;
                var5 = var17.bind(var3)(var14, var5);
                var4[1] = var5;
                var18 = _closure1_slot11;
                var17 = _closure1_slot0;
                var5 = var16[var10];
                var5 = var17.bind(var3)(var5);
                var14 = var5.TableRowGroup;
                var5 = {};
                var19 = 'Guild Assignments';
                var5.title = var19;
                var24 = _closure1_slot11;
                var19 = var16[var12];
                var19 = var17.bind(var3)(var19);
                var22 = var19.TableRow;
                var19 = {};
                var26 = var28.join;
                var25 = '\n';
                var25 = var26.bind(var28)(var25);
                var19.label = var25;
                var19 = var24.bind(var3)(var22, var19);
                var5.children = var19;
                var5 = var18.bind(var3)(var14, var5);
                var4[2] = var5;
                var14 = _closure1_slot11;
                var5 = var16[var6];
                var7 = var7.bind(var3)(var5);
                var5 = {};
                var5.size = var15;
                var5 = var14.bind(var3)(var7, var5);
                var4[3] = var5;
                var14 = _closure1_slot11;
                var5 = var16[var10];
                var5 = var17.bind(var3)(var5);
                var7 = var5.TableRowGroup;
                var5 = {};
                var18 = 'Server Descriptor';
                var5.title = var18;
                var18 = _closure1_slot11;
                var16 = var16[var12];
                var16 = var17.bind(var3)(var16);
                var17 = var16.TableRow;
                var16 = {};
                var24 = var21 == var27;
                var19 = 'None';
                var22 = var19;
                if (var24) {
                    _fun78739_ip = 839;
                    continue _fun78739
                }
            case 817:
                var26 = var20.JSON;
                var25 = var26.stringify;
                var24 = 2;
                var22 = var25.bind(var26)(var27, var3, var24);
            case 839:
                var16.label = var22;
                var16 = var18.bind(var3)(var17, var16);
                var5.children = var16;
                var5 = var14.bind(var3)(var7, var5);
                var4[4] = var5;
                var14 = _closure1_slot11;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = var16[var6];
                var7 = var7.bind(var3)(var5);
                var5 = {};
                var5.size = var15;
                var5 = var14.bind(var3)(var7, var5);
                var4[5] = var5;
                var14 = _closure1_slot11;
                var17 = _closure1_slot0;
                var5 = var16[var10];
                var5 = var17.bind(var3)(var5);
                var7 = var5.TableRowGroup;
                var5 = {};
                var18 = 'Override Descriptor';
                var5.title = var18;
                var18 = _closure1_slot11;
                var16 = var16[var12];
                var16 = var17.bind(var3)(var16);
                var17 = var16.TableRow;
                var16 = {};
                var21 = var21 == var23;
                if (var21) {
                    _fun78739_ip = 985;
                    continue _fun78739
                }
            case 963:
                var22 = var20.JSON;
                var21 = var22.stringify;
                var20 = 2;
                var19 = var21.bind(var22)(var23, var3, var20);
            case 985:
                var16.label = var19;
                var16 = var18.bind(var3)(var17, var16);
                var5.children = var16;
                var5 = var14.bind(var3)(var7, var5);
                var4[6] = var5;
                var14 = _closure1_slot11;
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = var5[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.size = var15;
                var6 = var14.bind(var3)(var7, var6);
                var4[7] = var6;
                var7 = _closure1_slot11;
                var6 = _closure1_slot0;
                var5 = var5[var10];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var10 = 'Recent Exposures';
                var5.title = var10;
                var10 = var11.length;
                if (!(var13 !== var10)) {
                    _fun78739_ip = 1109;
                    continue _fun78739
                }
            case 1090:
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
                _fun78739_ip = 1152;
                continue _fun78739;
            case 1109:
                var11 = _closure1_slot11;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var9 = var10.bind(var3)(var9);
                var10 = var9.TableRow;
                var9 = {};
                var12 = 'none';
                var9.label = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1152:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[8] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var1 = function arg0() {
        _fun78745: for (var _fun78745_ip = 0;;) switch (_fun78745_ip) {
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
                        _fun78747: for (var _fun78747_ip = 0;;) switch (_fun78747_ip) {
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
                                    _fun78747_ip = 99;
                                    continue _fun78747
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
                var12 = 26;
                var4 = var20[var12];
                var4 = var16.bind(var3)(var4);
                var5 = var4.TableRowGroup;
                var4 = {};
                var14 = 'Experiment Assignments';
                var4.title = var14;
                var14 = var15.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    _fun78748: for (var _fun78748_ip = 0;;) switch (_fun78748_ip) {
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
                                _fun78748_ip = 67;
                                continue _fun78748
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
                    _fun78745_ip = 404;
                    continue _fun78745
                }
            case 372:
                var8 = _closure1_slot11;
                var7 = _closure1_slot17;
                var5 = {};
                var5.id = var10;
                var5.override = var9;
                var5.experiment = var11;
                var5 = var8.bind(var3)(var7, var5);
                _fun78745_ip = 429;
                continue _fun78745;
            case 404:
                var8 = _closure1_slot11;
                var7 = _closure1_slot18;
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
    var _closure1_slot19 = var1;
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
        var5 = _closure1_slot19;
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
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var4 = var6[var13];
    var3 = arg3;
    var9 = var3.bind(var0)(var4);
    var _closure1_slot4 = var9;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var12.bind(var0)(var3);
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
    var4 = var3.jsx;
    var _closure1_slot11 = var4;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var10 = {};
    var11 = 9;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var14;
    var10.flex = var13;
    var3.container = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10.paddingHorizontal = var13;
    var3.listContainer = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.paddingVertical = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10.paddingHorizontal = var13;
    var3.searchBar = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.marginTop = var13;
    var3.debugContainer = var10;
    var10 = {
        'marginLeft': 20,
        'marginBottom': 20,
        'marginRight': 8,
        'fontFamily': 'monospace'
    };
    var3.debugLine = var10;
    var10 = {
        'marginLeft': 20,
        'marginRight': 8,
        'fontFamily': 'monospace'
    };
    var3.exposure = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10.marginTop = var11;
    var3.copyExperimentLink = var10;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var4 = var9.memo;
    var3 = function() { // Environment: var7
        _fun78750: for (var _fun78750_ip = 0;;) switch (_fun78750_ip) {
            case 0:
                var1 = _closure1_slot13;
                var4 = undefined;
                var15 = var1.bind(var4)();
                var3 = _closure1_slot4;
                var2 = var3.useState;
                var1 = '';
                var3 = var2.bind(var3)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var4)(var3, var1);
                var1 = 0;
                var12 = var2[var1];
                var1 = 1;
                var17 = var2[var1];
                var16 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var2 = var16.bind(var4)(var1);
                var1 = var2.useLegacyExperiments;
                var1 = var1.bind(var2)();
                var10 = var1.experiments;
                var _closure2_slot0 = var10;
                var9 = var1.overridesInfo;
                var _closure2_slot1 = var9;
                var1 = 11;
                var1 = var3[var1];
                var2 = var16.bind(var4)(var1);
                var1 = var2.useApexExperiments;
                var1 = var1.bind(var2)();
                var2 = var1.experiments;
                var _closure2_slot2 = var2;
                var1 = var1.overridesInfo;
                var _closure2_slot3 = var1;
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure2_slot0;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var3 = _closure2_slot2;
                    var4 = var0;
                    var1 = copyDataProperties(var4, var3);
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var6);
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure2_slot1;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var3 = _closure2_slot3;
                    var4 = var0;
                    var1 = copyDataProperties(var4, var3);
                    return var0;
                };
                var9 = var7.bind(var8)(var1, var6);
                var _closure2_slot4 = var9;
                var1 = _closure1_slot1;
                var6 = 12;
                var6 = var3[var6];
                var7 = var1.bind(var4)(var6);
                var6 = {};
                var8 = true;
                var6.includeKeyboardHeight = var8;
                var6 = var7.bind(var4)(var6);
                var10 = var6.insets;
                var6 = 13;
                var6 = var3[var6];
                var6 = var1.bind(var4)(var6);
                var11 = var6.bind(var4)();
                var6 = 14;
                var7 = var3[var6];
                var8 = var16.bind(var4)(var7);
                var7 = var8.getBestMatches;
                var13 = var3[var6];
                var14 = var16.bind(var4)(var13);
                var13 = var14.sortEntries;
                var6 = var3[var6];
                var16 = var16.bind(var4)(var6);
                var6 = var16.getEntries;
                var6 = var6.bind(var16)(var2);
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
                    var2 = _closure1_slot14;
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
                var0 = 15;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isEmpty;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun78750_ip = 664;
                    continue _fun78750
                }
            case 442:
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var3 = var15.container;
                var0.style = var3;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var3 = {};
                var8 = var15.searchBar;
                var3.style = var8;
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
                var3.children = var8;
                var6 = var7.bind(var4)(var6, var3);
                var3 = new Array(2);
                var3[0] = var6;
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
                var3[1] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun78750_ip = 736;
                continue _fun78750;
            case 664:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 16;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {
                    'Illustration': null,
                    'title': 'No Experiments',
                    'body': 'No experiments are currently running.'
                };
                var6 = _closure1_slot0;
                var5 = 17;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.NoResults;
                var1.Illustration = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 736:
                return var0;
        }
    };
    var3 = var4.bind(var9)(var3);
    var8 = var9.memo;
    var4 = function(arg0) { // Environment: var7
        _fun78755: for (var _fun78755_ip = 0;;) switch (_fun78755_ip) {
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
                    var9 = _closure1_slot20;
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
                    _fun78755_ip = 142;
                    continue _fun78755
                }
            case 136:
                var1 = var5.variantId;
            case 142:
                var0 = function arg0, arg1() {
                    _fun78763: for (var _fun78763_ip = 0;;) switch (_fun78763_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = arg1;
                            var _closure3_slot0 = var4;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun78763_ip = 77;
                                continue _fun78763
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
                                _fun78763_ip = 70;
                                continue _fun78763
                            }
                        case 39:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var2 = 'Unknown (';
                            var0 = ')';
                            var0 = var3.bind(var2)(var4, var0);
                            _fun78763_ip = 75;
                            continue _fun78763;
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
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ExperimentDetails = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1590, 1216, 1410, 1591, 33, 1297, 671, 9763, 9764, 4858, 7523, 9987, 22, 7322, 7323, 6973, 7526, 3291, 1600, 3239, 4863, 3902, 9984, 5327, 9228, 3289, 5255, 3109, 3232, 4896, 5176, 2]);