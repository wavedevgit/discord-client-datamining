// modules/application_commands/ApplicationCommandQueryApi.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun61308: for (var _fun61308_ip = 0;;) switch (_fun61308_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun61308_ip = 46;
                    continue _fun61308
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun61308_ip = 55;
                    continue _fun61308
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun61308_ip = 343;
                    continue _fun61308
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun61308_ip = 323;
                    continue _fun61308
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun61308_ip = 283;
                    continue _fun61308
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun61308_ip = 270;
                    continue _fun61308
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
                    _fun61308_ip = 163;
                    continue _fun61308
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun61308_ip = 179;
                    continue _fun61308
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun61308_ip = 249;
                    continue _fun61308
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun61308_ip = 249;
                    continue _fun61308
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun61308_ip = 234;
                    continue _fun61308
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun61308_ip = 247;
                    continue _fun61308
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun61308_ip = 265;
                continue _fun61308;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun61308_ip = 283;
                continue _fun61308;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun61308_ip = 323;
                    continue _fun61308
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
                    _fun61308_ip = 330;
                    continue _fun61308
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun61309: for (var _fun61309_ip = 0;;) switch (_fun61309_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun61309_ip = 56;
                                continue _fun61309
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
                            _fun61309_ip = 67;
                            continue _fun61309;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun61310: for (var _fun61310_ip = 0;;) switch (_fun61310_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun61310_ip = 23;
                    continue _fun61310
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun61310_ip = 33;
                    continue _fun61310
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
                    _fun61310_ip = 70;
                    continue _fun61310
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun61310_ip = 55;
                    continue _fun61310
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun61311: for (var _fun61311_ip = 0;;) switch (_fun61311_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var6 = null;
                if (!(var6 == var1)) {
                    _fun61311_ip = 22;
                    continue _fun61311
                }
            case 18:
                var3 = undefined;
                return var3;
            case 22:
                var3 = var0.commands;
                var3 = var3[var1];
                if (!(var6 == var3)) {
                    _fun61311_ip = 195;
                    continue _fun61311
                }
            case 39:
                var3 = global;
                var5 = var3.Object;
                var4 = var5.values;
                var3 = var0.commands;
                var4 = var4.bind(var5)(var3);
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    _fun61312: for (var _fun61312_ip = 0;;) switch (_fun61312_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.rootCommand;
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun61312_ip = 25;
                                continue _fun61312
                            }
                        case 20:
                            var1 = var0.id;
                        case 25:
                            var0 = _closure2_slot0;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var3 = var6 == var2;
                var7 = undefined;
                var8 = undefined;
                if (var3) {
                    _fun61311_ip = 95;
                    continue _fun61311
                }
            case 89:
                var8 = var2.rootCommand;
            case 95:
                var3 = var6 != var8;
                var2 = undefined;
                if (!var3) {
                    _fun61311_ip = 193;
                    continue _fun61311
                }
            case 104:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 6;
                var3 = var5[var3];
                var5 = var4.bind(var7)(var3);
                var4 = var5.buildCommand;
                var3 = {};
                var3.rootCommand = var8;
                var3.command = var8;
                var8 = var0.descriptor;
                var8 = var8.application;
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun61311_ip = 170;
                    continue _fun61311
                }
            case 165:
                var7 = var8.id;
            case 170:
                var8 = var6 != var7;
                var6 = '';
                if (!var8) {
                    _fun61311_ip = 184;
                    continue _fun61311
                }
            case 181:
                var6 = var7;
            case 184:
                var3.applicationId = var6;
                var2 = var4.bind(var5)(var3);
            case 193:
                return var2;
            case 195:
                var0 = var0.commands;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun61313: for (var _fun61313_ip = 0;;) switch (_fun61313_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = new Array(0);
                var3 = 0;
                var6 = var3 < var5;
                var1 = undefined;
                if (!var6) {
                    _fun61313_ip = 51;
                    continue _fun61313
                }
            case 24:
                var7 = var0.push;
                var6 = _closure1_slot17;
                var6 = var6.bind(var1)(var3, var4);
                var6 = var7.bind(var0)(var6);
                var3 = var3 + 1;
                if (var3 < var5) {
                    _fun61313_ip = 24;
                    continue _fun61313
                }
            case 51:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        var0 = {
            'type': null,
            'inputType': null,
            'id': null,
            'untranslatedName': '',
            'displayName': '',
            'untranslatedDescription': '',
            'displayDescription': '',
            'applicationId': ''
        };
        var1 = arg1;
        var0.type = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.ApplicationCommandInputType;
        var2 = var2.PLACEHOLDER;
        var0.inputType = var2;
        var2 = global;
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var3 = 'placeholder-';
        var2 = arg0;
        var2 = var4.bind(var3)(var2);
        var0.id = var2;
        var1 = _closure1_slot12;
        var0.section = var1;
        return var0;
    };
    var _closure1_slot17 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var8 = var7.useContextIndexState;
    var _closure1_slot5 = var8;
    var8 = var7.useDiscoveryState;
    var _closure1_slot6 = var8;
    var8 = var7.useQueryState;
    var _closure1_slot7 = var8;
    var7 = var7.useUserIndexState;
    var _closure1_slot8 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BuiltInSectionId;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot11 = var3;
    var3 = {
        'id': 'placeholder-section',
        'type': null,
        'name': ''
    };
    var6 = 11;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ApplicationCommandSectionType;
    var6 = var6.APPLICATION;
    var3.type = var6;
    var _closure1_slot12 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/ApplicationCommandQueryApi.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2() {
        _fun61315: for (var _fun61315_ip = 0;;) switch (_fun61315_ip) {
            case 0:
                var3 = arg1;
                var5 = arg2;
                var _closure2_slot0 = var5;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun61315_ip = 306;
                    continue _fun61315
                }
            case 21:
                var8 = _closure1_slot9;
                var1 = var8.getUserState;
                var1 = var1.bind(var8)();
                var7 = var8.getContextState;
                var6 = arg0;
                var6 = var7.bind(var8)(var6);
                var9 = global;
                var10 = var9.Object;
                var8 = var10.values;
                var11 = var1.result;
                var12 = var4 == var11;
                var1 = undefined;
                var7 = undefined;
                if (var12) {
                    _fun61315_ip = 88;
                    continue _fun61315
                }
            case 82:
                var7 = var11.sections;
            case 88:
                if (!(var4 == var7)) {
                    _fun61315_ip = 94;
                    continue _fun61315
                }
            case 92:
                var7 = {};
            case 94:
                var8 = var8.bind(var10)(var7);
                var7 = var8.concat;
                var10 = var9.Object;
                var9 = var10.values;
                var11 = var6.result;
                var12 = var4 == var11;
                var6 = undefined;
                if (var12) {
                    _fun61315_ip = 136;
                    continue _fun61315
                }
            case 130:
                var6 = var11.sections;
            case 136:
                if (!(var4 == var6)) {
                    _fun61315_ip = 142;
                    continue _fun61315
                }
            case 140:
                var6 = {};
            case 142:
                var6 = var9.bind(var10)(var6);
                var6 = var7.bind(var8)(var6);
                if (!(var4 == var5)) {
                    _fun61315_ip = 240;
                    continue _fun61315
                }
            case 156:
                var5 = _closure1_slot13;
                var10 = var5.bind(var1)(var6);
                var7 = var10.bind(var1)();
                var5 = var7.done;
                var9 = var7;
                if (var5) {
                    _fun61315_ip = 259;
                    continue _fun61315
                }
            case 180:
                var8 = var9.value;
                var5 = _closure1_slot15;
                var7 = var5.bind(var1)(var8, var3);
                if (!(var4 == var7)) {
                    _fun61315_ip = 216;
                    continue _fun61315
                }
            case 199:
                var11 = var10.bind(var1)();
                var5 = var11.done;
                var9 = var11;
                if (var5) {
                    _fun61315_ip = 259;
                    continue _fun61315
                }
            case 214:
                _fun61315_ip = 180;
                continue _fun61315;
            case 216:
                var5 = {};
                var8 = var8.descriptor;
                var8 = var8.application;
                var5.application = var8;
                var5.command = var7;
                return var5;
            case 240:
                var5 = var6.find;
                var2 = function(arg0) { // Environment: var2
                    _fun61316: for (var _fun61316_ip = 0;;) switch (_fun61316_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.descriptor;
                            var0 = var0.application;
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun61316_ip = 30;
                                continue _fun61316
                            }
                        case 25:
                            var1 = var0.id;
                        case 30:
                            var0 = _closure2_slot0;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2);
                if (!(var4 == var2)) {
                    _fun61315_ip = 272;
                    continue _fun61315
                }
            case 259:
                var4 = {};
                var4.application = var1;
                var4.command = var1;
                return var4;
            case 272:
                var0 = _closure1_slot15;
                var1 = var0.bind(var1)(var2, var3);
                var0 = {};
                var2 = var2.descriptor;
                var2 = var2.application;
                var0.application = var2;
                var0.command = var1;
                return var0;
            case 306:
                var0 = {};
                var1 = undefined;
                var0.application = var1;
                var0.command = var1;
                return var0;
        }
    };
    var2.getCachedCommand = var3;
    var3 = function arg0, arg1, arg2() {
        _fun61317: for (var _fun61317_ip = 0;;) switch (_fun61317_ip) {
            case 0:
                var5 = arg2;
                var2 = _closure1_slot9;
                var0 = var2.getUserState;
                var0 = var0.bind(var2)();
                var3 = var2.getContextState;
                var1 = arg0;
                var4 = var3.bind(var2)(var1);
                var1 = var2.getApplicationState;
                var3 = var1.bind(var2)(var5);
                var6 = var0.result;
                var2 = null;
                var7 = var2 == var6;
                var1 = undefined;
                if (var7) {
                    _fun61317_ip = 81;
                    continue _fun61317
                }
            case 62:
                var6 = var6.sections;
                var7 = var2 == var6;
                var1 = undefined;
                if (var7) {
                    _fun61317_ip = 81;
                    continue _fun61317
                }
            case 77:
                var1 = var6[var5];
            case 81:
                if (!(var2 == var1)) {
                    _fun61317_ip = 122;
                    continue _fun61317
                }
            case 85:
                var6 = var4.result;
                var7 = var2 == var6;
                var4 = undefined;
                if (var7) {
                    _fun61317_ip = 119;
                    continue _fun61317
                }
            case 100:
                var6 = var6.sections;
                var7 = var2 == var6;
                var4 = undefined;
                if (var7) {
                    _fun61317_ip = 119;
                    continue _fun61317
                }
            case 115:
                var4 = var6[var5];
            case 119:
                var1 = var4;
            case 122:
                if (!(var2 == var1)) {
                    _fun61317_ip = 163;
                    continue _fun61317
                }
            case 126:
                var4 = var3.result;
                var6 = var2 == var4;
                var3 = undefined;
                if (var6) {
                    _fun61317_ip = 160;
                    continue _fun61317
                }
            case 141:
                var4 = var4.sections;
                var6 = var2 == var4;
                var3 = undefined;
                if (var6) {
                    _fun61317_ip = 160;
                    continue _fun61317
                }
            case 156:
                var3 = var4[var5];
            case 160:
                var1 = var3;
            case 163:
                var2 = var2 == var1;
                var0 = undefined;
                if (var2) {
                    _fun61317_ip = 178;
                    continue _fun61317
                }
            case 172:
                var0 = var1.descriptor;
            case 178:
                return var0;
        }
    };
    var2.getCachedApplicationSection = var3;
    var3 = function arg0, arg1, arg2() {
        var4 = _closure1_slot9;
        var3 = var4.query;
        var2 = {};
        var1 = new Array(1);
        var5 = arg1;
        var1[0] = var5;
        var2.commandTypes = var1;
        var1 = arg2;
        var2.text = var1;
        var1 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 7;
        var5 = var5[var0];
        var0 = undefined;
        var0 = var6.bind(var0)(var5);
        var0 = var0.ScoreMethod;
        var0 = var0.COMMAND_OR_APPLICATION;
        var1.scoreMethod = var0;
        var0 = false;
        var1.allowFetch = var0;
        var0 = arg0;
        var1 = var3.bind(var4)(var0, var2, var1);
        var0 = {};
        var2 = var1.commands;
        var0.commands = var2;
        var1 = var1.descriptors;
        var0.sections = var1;
        return var0;
    };
    var2.getCachedResults = var3;
    var3 = function arg0() {
        _fun61319: for (var _fun61319_ip = 0;;) switch (_fun61319_ip) {
            case 0:
                var3 = _closure1_slot9;
                var0 = var3.getUserState;
                var0 = var0.bind(var3)();
                var2 = var3.getContextState;
                var1 = arg0;
                var2 = var2.bind(var3)(var1);
                var3 = null;
                var5 = var3 == var0;
                var4 = undefined;
                if (var5) {
                    _fun61319_ip = 48;
                    continue _fun61319
                }
            case 42:
                var4 = var0.result;
            case 48:
                var0 = new Array(2);
                var0[0] = var4;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun61319_ip = 71;
                    continue _fun61319
                }
            case 65:
                var1 = var2.result;
            case 71:
                var0[1] = var1;
                return var0;
        }
    };
    var2.getChangeKeys = var3;
    var3 = function arg0, arg1, arg2() {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var0 = function() { // Environment: var0
            var1 = _closure2_slot0;
            var0 = new Array(1);
            var0[0] = var1;
            return var0;
        };
        var0 = var3.bind(var4)(var0, var2);
        var4 = _closure1_slot7;
        var3 = {};
        var3.commandTypes = var0;
        var0 = arg2;
        var3.text = var0;
        var2 = {};
        var0 = false;
        var2.allowFetch = var0;
        var1 = undefined;
        var0 = arg0;
        var1 = var4.bind(var1)(var0, var3, var2);
        var0 = {};
        var2 = var1.commands;
        var0.commands = var2;
        var1 = var1.descriptors;
        var0.sections = var1;
        return var0;
    };
    var2.useCachedResults = var3;
    var3 = function arg0() {
        _fun61322: for (var _fun61322_ip = 0;;) switch (_fun61322_ip) {
            case 0:
                var3 = arg0;
                var7 = var3.context;
                var2 = var3.filters;
                var _closure2_slot0 = var2;
                var1 = var3.options;
                var _closure2_slot1 = var1;
                var9 = var3.allowFetch;
                var11 = undefined;
                var _closure2_slot2 = var11;
                var _closure2_slot3 = var11;
                var _closure2_slot4 = var11;
                var _closure2_slot5 = var11;
                var _closure2_slot6 = var11;
                var _closure2_slot7 = var11;
                var _closure2_slot8 = var11;
                var _closure2_slot9 = var11;
                var5 = var7.type;
                var10 = null;
                var4 = 'channel';
                var3 = null;
                if (!(var4 === var5)) {
                    _fun61322_ip = 96;
                    continue _fun61322
                }
            case 86:
                var4 = var7.channel;
                var3 = var4.guild_id;
            case 96:
                _closure2_slot2 = var3;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 8;
                var5 = var8[var5];
                var12 = var6.bind(var11)(var5);
                var8 = var12.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var8.bind(var12)(var6, var3, var5);
                var5 = _closure1_slot6;
                var3 = {};
                var16 = var3;
                var15 = var1;
                var8 = copyDataProperties(var16, var15);
                var8 = 'allowFetch';
                var3[var8] = var9;
                var17 = undefined;
                var16 = var7;
                var15 = var6;
                var14 = var2;
                var13 = var3;
                var3 = var17[var5](var16, var15, var14, var13, var12);
                var7 = var3.descriptors;
                _closure2_slot3 = var7;
                var8 = var3.commands;
                _closure2_slot4 = var8;
                var6 = var3.sectionedCommands;
                _closure2_slot5 = var6;
                var9 = var3.loading;
                _closure2_slot6 = var9;
                var3 = _closure1_slot3;
                var5 = var3.useState;
                var10 = var5.bind(var3)(var10);
                var5 = _closure1_slot2;
                var4 = 2;
                var10 = var5.bind(var11)(var10, var4);
                var4 = 0;
                var5 = var10[var4];
                _closure2_slot7 = var5;
                var4 = 1;
                var4 = var10[var4];
                _closure2_slot8 = var4;
                var4 = var3.useMemo;
                var10 = var2.commandTypes;
                var2 = new Array(2);
                var2[0] = var10;
                var1 = var1.placeholderCount;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun61324: for (var _fun61324_ip = 0;;) switch (_fun61324_ip) {
                        case 0:
                            var3 = _closure1_slot16;
                            var1 = _closure2_slot1;
                            var4 = var1.placeholderCount;
                            var1 = null;
                            var5 = var1 != var4;
                            var1 = 0;
                            var2 = 0;
                            if (!var5) {
                                _fun61324_ip = 36;
                                continue _fun61324
                            }
                        case 33:
                            var2 = var4;
                        case 36:
                            var0 = _closure2_slot0;
                            var0 = var0.commandTypes;
                            var1 = var0[var1];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var4 = var4.bind(var3)(var1, var2);
                _closure2_slot9 = var4;
                var2 = var3.useMemo;
                var1 = new Array(6);
                var1[0] = var9;
                var1[1] = var8;
                var1[2] = var7;
                var1[3] = var6;
                var1[4] = var5;
                var1[5] = var4;
                var0 = function() { // Environment: var0
                    _fun61325: for (var _fun61325_ip = 0;;) switch (_fun61325_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot6;
                            var0.loading = var3;
                            var3 = _closure2_slot4;
                            var0.commands = var3;
                            var3 = _closure2_slot3;
                            var0.activeSections = var3;
                            var3 = _closure2_slot5;
                            var0.commandsByActiveSection = var3;
                            var3 = _closure2_slot7;
                            var0.filteredSectionId = var3;
                            var3 = false;
                            var0.hasMoreAfter = var3;
                            var3 = _closure2_slot6;
                            if (var3) {
                                _fun61325_ip = 72;
                                continue _fun61325
                            }
                        case 66:
                            var3 = new Array(0);
                            _fun61325_ip = 76;
                            continue _fun61325;
                        case 72:
                            var3 = _closure2_slot9;
                        case 76:
                            var0.placeholders = var3;
                            var3 = _closure2_slot3;
                            var0.sectionDescriptors = var3;
                            var3 = function arg0() {
                                var2 = _closure2_slot8;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.filterSection = var3;
                            var4 = _closure1_slot11;
                            var0.scrollDown = var4;
                            var4 = _closure2_slot7;
                            var5 = null;
                            if (!(var5 != var4)) {
                                _fun61325_ip = 200;
                                continue _fun61325
                            }
                        case 122:
                            var6 = _closure2_slot5;
                            var4 = var6.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.section;
                                var1 = var0.id;
                                var0 = _closure2_slot7;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var6 = var4.bind(var6)(var1);
                            if (!(var5 == var6)) {
                                _fun61325_ip = 151;
                                continue _fun61325
                            }
                        case 145:
                            var1 = new Array(0);
                            _fun61325_ip = 167;
                            continue _fun61325;
                        case 151:
                            var7 = var6.section;
                            var4 = new Array(1);
                            var4[0] = var7;
                            var1 = var4;
                        case 167:
                            var0.activeSections = var1;
                            if (!(var5 == var6)) {
                                _fun61325_ip = 183;
                                continue _fun61325
                            }
                        case 177:
                            var1 = new Array(0);
                            _fun61325_ip = 194;
                            continue _fun61325;
                        case 183:
                            var4 = new Array(1);
                            var4[0] = var6;
                            var1 = var4;
                        case 194:
                            var0.commandsByActiveSection = var1;
                        case 200:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun61325_ip = 429;
                                continue _fun61325
                            }
                        case 210:
                            var1 = _closure2_slot5;
                            var4 = 0;
                            var1 = var1[var4];
                            if (!(var5 == var1)) {
                                _fun61325_ip = 310;
                                continue _fun61325
                            }
                        case 224:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var5 = 9;
                            var6 = var6[var5];
                            var5 = undefined;
                            var5 = var7.bind(var5)(var6);
                            var5 = var5.BUILT_IN_SECTIONS;
                            var3 = _closure1_slot10;
                            var3 = var3.BUILT_IN;
                            var3 = var5[var3];
                            var5 = new Array(1);
                            var5[0] = var3;
                            var0.activeSections = var5;
                            var5 = {};
                            var5.section = var3;
                            var3 = _closure2_slot9;
                            var5.data = var3;
                            var3 = new Array(1);
                            var3[0] = var5;
                            var0.commandsByActiveSection = var3;
                            _fun61325_ip = 395;
                            continue _fun61325;
                        case 310:
                            var3 = {};
                            var5 = var1.section;
                            var3.section = var5;
                            var9 = var1.data;
                            var1 = new Array(0);
                            var10 = var1;
                            var8 = 0;
                            var8 = arraySpread(var10, var9, var8);
                            var9 = _closure2_slot9;
                            var10 = var1;
                            var5 = arraySpread(var10, var9, var8);
                            var3.data = var1;
                            var1 = new Array(1);
                            var1[0] = var3;
                            var6 = _closure2_slot5;
                            var3 = var6.slice;
                            var5 = 1;
                            var9 = var3.bind(var6)(var5);
                            var10 = var1;
                            var8 = var5;
                            var3 = arraySpread(var10, var9, var8);
                            var0.commandsByActiveSection = var1;
                        case 395:
                            var9 = _closure2_slot4;
                            var1 = new Array(0);
                            var10 = var1;
                            var8 = 0;
                            var8 = arraySpread(var10, var9, var8);
                            var9 = _closure2_slot9;
                            var10 = var1;
                            var2 = arraySpread(var10, var9, var8);
                            var0.commands = var1;
                        case 429:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useDiscovery = var3;
    var3 = function arg0, arg1, arg2() {
        _fun61328: for (var _fun61328_ip = 0;;) switch (_fun61328_ip) {
            case 0:
                var0 = arg1;
                var5 = arg2;
                var4 = _closure1_slot9;
                var3 = var4.query;
                var1 = arg0;
                var1 = var3.bind(var4)(var1, var0, var5);
                var6 = var1.descriptors;
                var8 = var1.commands;
                var3 = var1.loading;
                var7 = _closure1_slot16;
                var4 = 0;
                var1 = 0;
                if (!var3) {
                    _fun61328_ip = 78;
                    continue _fun61328
                }
            case 58:
                var5 = var5.placeholderCount;
                var9 = null;
                var9 = var9 != var5;
                var1 = 0;
                if (!var9) {
                    _fun61328_ip = 78;
                    continue _fun61328
                }
            case 75:
                var1 = var5;
            case 78:
                var0 = var0.commandTypes;
                var0 = var0[var4];
                var5 = undefined;
                var9 = var7.bind(var5)(var1, var0);
                var0 = {};
                var1 = var8;
                if (!var3) {
                    _fun61328_ip = 133;
                    continue _fun61328
                }
            case 104:
                var7 = new Array(0);
                var12 = var7;
                var11 = var8;
                var10 = 0;
                var10 = arraySpread(var12, var11, var10);
                var12 = var7;
                var11 = var9;
                var8 = arraySpread(var12, var11, var10);
                var1 = var7;
            case 133:
                var0.commands = var1;
                var1 = var6;
                if (!var3) {
                    _fun61328_ip = 207;
                    continue _fun61328
                }
            case 144:
                var3 = var6.length;
                var1 = var6;
                if (!(var4 === var3)) {
                    _fun61328_ip = 207;
                    continue _fun61328
                }
            case 156:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.BUILT_IN_SECTIONS;
                var2 = _closure1_slot10;
                var2 = var2.BUILT_IN;
                var3 = var3[var2];
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
            case 207:
                var0.sections = var1;
                return var0;
        }
    };
    var2.executeQuery = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var1;
        var7 = _closure1_slot7;
        var6 = {};
        var11 = var6;
        var10 = var1;
        var4 = copyDataProperties(var11, var10);
        var5 = true;
        var4 = 'allowFetch';
        var6[var4] = var5;
        var5 = undefined;
        var4 = arg0;
        var4 = var7.bind(var5)(var4, var2, var6);
        var5 = var4.descriptors;
        var _closure2_slot2 = var5;
        var6 = var4.commands;
        var _closure2_slot3 = var6;
        var7 = var4.loading;
        var _closure2_slot4 = var7;
        var3 = _closure1_slot3;
        var4 = var3.useMemo;
        var8 = var2.commandTypes;
        var2 = new Array(2);
        var2[0] = var8;
        var1 = var1.placeholderCount;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            _fun61330: for (var _fun61330_ip = 0;;) switch (_fun61330_ip) {
                case 0:
                    var3 = _closure1_slot16;
                    var1 = _closure2_slot1;
                    var4 = var1.placeholderCount;
                    var1 = null;
                    var5 = var1 != var4;
                    var1 = 0;
                    var2 = 0;
                    if (!var5) {
                        _fun61330_ip = 36;
                        continue _fun61330
                    }
                case 33:
                    var2 = var4;
                case 36:
                    var0 = _closure2_slot0;
                    var0 = var0.commandTypes;
                    var1 = var0[var1];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4 = var4.bind(var3)(var1, var2);
        var _closure2_slot5 = var4;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun61331: for (var _fun61331_ip = 0;;) switch (_fun61331_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot4;
                    var5 = _closure2_slot3;
                    if (var2) {
                        _fun61331_ip = 21;
                        continue _fun61331
                    }
                case 16:
                    var2 = var5;
                    _fun61331_ip = 51;
                    continue _fun61331;
                case 21:
                    var3 = new Array(0);
                    var6 = 0;
                    var8 = var3;
                    var7 = var5;
                    var6 = arraySpread(var8, var7, var6);
                    var7 = _closure2_slot5;
                    var8 = var3;
                    var4 = arraySpread(var8, var7, var6);
                    var2 = var3;
                case 51:
                    var0.commands = var2;
                    var2 = _closure2_slot4;
                    if (!var2) {
                        _fun61331_ip = 78;
                        continue _fun61331
                    }
                case 63:
                    var2 = _closure2_slot2;
                    var3 = var2.length;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun61331_ip = 84;
                        continue _fun61331
                    }
                case 78:
                    var1 = _closure2_slot2;
                    _fun61331_ip = 140;
                    continue _fun61331;
                case 84:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.BUILT_IN_SECTIONS;
                    var2 = _closure1_slot10;
                    var2 = var2.BUILT_IN;
                    var3 = var3[var2];
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
                case 140:
                    var0.sections = var1;
                    var1 = _closure1_slot11;
                    var0.scrollDown = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useQuery = var3;
    var3 = function arg0, arg1() {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var1 = _closure1_slot8;
        var7 = undefined;
        var6 = true;
        var5 = var1.bind(var7)(var6, var6);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot5;
        var1 = arg0;
        var1 = var3.bind(var7)(var1, var6, var6);
        var _closure2_slot2 = var1;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var6 = var1.result;
        var1 = new Array(3);
        var1[0] = var6;
        var5 = var5.result;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun61333: for (var _fun61333_ip = 0;;) switch (_fun61333_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var6 = null;
                    if (!(var6 != var0)) {
                        _fun61333_ip = 215;
                        continue _fun61333
                    }
                case 16:
                    var1 = _closure1_slot13;
                    var0 = global;
                    var4 = var0.Object;
                    var3 = var4.values;
                    var2 = _closure2_slot1;
                    var8 = var2.result;
                    var9 = var6 == var8;
                    var5 = undefined;
                    var2 = undefined;
                    if (var9) {
                        _fun61333_ip = 63;
                        continue _fun61333
                    }
                case 57:
                    var2 = var8.sections;
                case 63:
                    if (!(var6 == var2)) {
                        _fun61333_ip = 69;
                        continue _fun61333
                    }
                case 67:
                    var2 = {};
                case 69:
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.concat;
                    var8 = var0.Object;
                    var4 = var8.values;
                    var0 = _closure2_slot2;
                    var9 = var0.result;
                    var10 = var6 == var9;
                    var0 = undefined;
                    if (var10) {
                        _fun61333_ip = 115;
                        continue _fun61333
                    }
                case 109:
                    var0 = var9.sections;
                case 115:
                    if (!(var6 == var0)) {
                        _fun61333_ip = 121;
                        continue _fun61333
                    }
                case 119:
                    var0 = {};
                case 121:
                    var0 = var4.bind(var8)(var0);
                    var0 = var2.bind(var3)(var0);
                    var4 = var1.bind(var5)(var0);
                    var1 = var4.bind(var5)();
                    var0 = var1.done;
                    var3 = var1;
                    if (var0) {
                        _fun61333_ip = 215;
                        continue _fun61333
                    }
                case 151:
                    var1 = var3.value;
                    var2 = var1.commands;
                    var0 = _closure2_slot0;
                    var2 = var2[var0];
                    if (!(var6 == var2)) {
                        _fun61333_ip = 191;
                        continue _fun61333
                    }
                case 174:
                    var8 = var4.bind(var5)();
                    var0 = var8.done;
                    var3 = var8;
                    if (var0) {
                        _fun61333_ip = 215;
                        continue _fun61333
                    }
                case 189:
                    _fun61333_ip = 151;
                    continue _fun61333;
                case 191:
                    var0 = {};
                    var0.command = var2;
                    var1 = var1.descriptor;
                    var1 = var1.application;
                    var0.application = var1;
                    return var0;
                case 215:
                    var0 = {};
                    var1 = undefined;
                    var0.command = var1;
                    var0.application = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useCommand = var3;
    var1 = function arg0, arg1, arg2() {
        _fun61334: for (var _fun61334_ip = 0;;) switch (_fun61334_ip) {
            case 0:
                var5 = arg1;
                var4 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var1 = _closure1_slot8;
                var6 = undefined;
                var8 = true;
                var1 = var1.bind(var6)(var8, var8);
                var _closure2_slot2 = var1;
                var7 = _closure1_slot5;
                var3 = arg0;
                var7 = var7.bind(var6)(var3, var8, var8);
                var _closure2_slot3 = var7;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var8 = null;
                var10 = var8 == var1;
                var9 = undefined;
                if (var10) {
                    _fun61334_ip = 81;
                    continue _fun61334
                }
            case 75:
                var9 = var1.result;
            case 81:
                var1 = new Array(4);
                var1[0] = var9;
                var8 = var8 == var7;
                var6 = undefined;
                if (var8) {
                    _fun61334_ip = 104;
                    continue _fun61334
                }
            case 98:
                var6 = var7.result;
            case 104:
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun61335: for (var _fun61335_ip = 0;;) switch (_fun61335_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var0 = var0.result;
                            var6 = null;
                            var3 = var6 == var0;
                            var5 = undefined;
                            var4 = undefined;
                            if (var3) {
                                _fun61335_ip = 51;
                                continue _fun61335
                            }
                        case 28:
                            var3 = var0.sections;
                            var0 = var6 == var3;
                            var4 = undefined;
                            if (var0) {
                                _fun61335_ip = 51;
                                continue _fun61335
                            }
                        case 43:
                            var0 = _closure2_slot0;
                            var4 = var3[var0];
                        case 51:
                            if (!(var6 == var4)) {
                                _fun61335_ip = 91;
                                continue _fun61335
                            }
                        case 55:
                            var0 = _closure2_slot3;
                            var3 = var0.result;
                            var7 = var6 == var3;
                            var0 = undefined;
                            if (var7) {
                                _fun61335_ip = 88;
                                continue _fun61335
                            }
                        case 74:
                            var7 = var3.sections;
                            var3 = _closure2_slot0;
                            var0 = var7[var3];
                        case 88:
                            var4 = var0;
                        case 91:
                            var0 = global;
                            var7 = var0.Object;
                            var3 = var7.values;
                            var8 = var6 == var4;
                            var0 = undefined;
                            if (var8) {
                                _fun61335_ip = 119;
                                continue _fun61335
                            }
                        case 113:
                            var0 = var4.commands;
                        case 119:
                            if (!(var6 == var0)) {
                                _fun61335_ip = 125;
                                continue _fun61335
                            }
                        case 123:
                            var0 = {};
                        case 125:
                            var7 = var3.bind(var7)(var0);
                            var3 = var7.map;
                            var0 = function(arg0) { // Environment: var1
                                _fun61336: for (var _fun61336_ip = 0;;) switch (_fun61336_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = var4.rootCommand;
                                        var1 = null;
                                        var0 = var4;
                                        if (!(var1 != var2)) {
                                            _fun61336_ip = 87;
                                            continue _fun61336
                                        }
                                    case 18:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var1 = 6;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.buildCommand;
                                        var1 = {};
                                        var5 = var4.rootCommand;
                                        var1.rootCommand = var5;
                                        var5 = var4.rootCommand;
                                        var1.command = var5;
                                        var4 = var4.applicationId;
                                        var1.applicationId = var4;
                                        var0 = var2.bind(var3)(var1);
                                    case 87:
                                        return var0;
                                }
                            };
                            var8 = var3.bind(var7)(var0);
                            var7 = var8.reduce;
                            var3 = function(arg0, arg1) { // Environment: var1
                                var0 = arg0;
                                var2 = arg1;
                                var1 = var2.id;
                                var0[var1] = var2;
                                return var0;
                            };
                            var0 = {};
                            var0 = var7.bind(var8)(var3, var0);
                            var _closure3_slot0 = var0;
                            var0 = {};
                            var7 = var6 == var4;
                            var3 = undefined;
                            if (var7) {
                                _fun61335_ip = 199;
                                continue _fun61335
                            }
                        case 179:
                            var4 = var4.descriptor;
                            var6 = var6 == var4;
                            var3 = undefined;
                            if (var6) {
                                _fun61335_ip = 199;
                                continue _fun61335
                            }
                        case 194:
                            var3 = var4.application;
                        case 199:
                            var0.application = var3;
                            var3 = _closure2_slot1;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var1[var0];
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.filter;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 10;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.isNotNullish;
                            var1 = var2.bind(var3)(var1);
                            var0.commands = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useCommandsForApplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 4674, 4545, 660, 4544, 7621, 566, 7622, 1304, 4547, 2]);