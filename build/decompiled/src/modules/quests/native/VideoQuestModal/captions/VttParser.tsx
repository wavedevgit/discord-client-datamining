// modules/quests/native/VideoQuestModal/captions/VttParser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun84042: for (var _fun84042_ip = 0;;) switch (_fun84042_ip) {
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
            case 72: // try_end0
                _fun84042_ip = 76;
                continue _fun84042;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot6;
        var1 = var2.test;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun84046: for (var _fun84046_ip = 0;;) switch (_fun84046_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = _closure1_slot6;
                var6 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun84046_ip = 126;
                    continue _fun84046
                }
            case 27:
                var1 = global;
                var2 = var1.parseFloat;
                var3 = 1;
                var3 = var6[var3];
                var4 = var0 != var3;
                var0 = '0';
                if (!var4) {
                    _fun84046_ip = 58;
                    continue _fun84046
                }
            case 55:
                var0 = var3;
            case 58:
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var3 = 60;
                var0 = var3 * var0;
                var4 = var1.parseFloat;
                var2 = 2;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var3 * var2;
                var4 = var1.parseFloat;
                var1 = 3;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var0 = var0 * var3;
                var0 = var0 + var2;
                var0 = var0 + var1;
                return var0;
            case 126:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var5[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var3 = var3.Error;
    var4 = var4.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var2 = function arg0, arg1() {
            _fun84048: for (var _fun84048_ip = 0;;) switch (_fun84048_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot1;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var8 = new Array(1);
                    var0 = arg0;
                    var8[0] = var0;
                    var0 = _closure1_slot3;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun84048_ip = 73;
                        continue _fun84048
                    }
                case 60:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun84048_ip = 107;
                    continue _fun84048;
                case 73:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 107:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = arg1;
                    var0.error = var1;
                    var1 = 'ParserError';
                    var0.name = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot0;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var _closure1_slot5 = var3;
    var4 = /([0-9]+)?:?([0-9]{2}):([0-9]{2}\.[0-9]{2,3})/;
    var _closure1_slot6 = var4;
    var4 = 6;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/captions/VttParser.tsx';
    var4 = var5.bind(var6)(var4);
    var2.VttParserError = var3;
    var1 = function arg0() {
        _fun84049: for (var _fun84049_ip = 0;;) switch (_fun84049_ip) {
            case 0:
                var2 = arg0;
                var0 = arguments[1];
                var8 = undefined;
                if (!(var0 === var8)) {
                    _fun84049_ip = 16;
                    continue _fun84049
                }
            case 14:
                var0 = {};
            case 16:
                var1 = var0.meta;
                var4 = var8 !== var1;
                if (!var4) {
                    _fun84049_ip = 32;
                    continue _fun84049
                }
            case 29:
                var4 = var1;
            case 32:
                var0 = var0.strict;
                var1 = var8 === var0;
                if (var1) {
                    _fun84049_ip = 48;
                    continue _fun84049
                }
            case 45:
                var1 = var0;
            case 48:
                var0 = var2.trim;
                var5 = var0.bind(var2)();
                var2 = var5.replace;
                var0 = /\r\n/g;
                var6 = '\n';
                var5 = var2.bind(var5)(var0, var6);
                var2 = var5.replace;
                var0 = /\r/g;
                var5 = var2.bind(var5)(var0, var6);
                var2 = var5.split;
                var0 = '\n\n';
                var5 = var2.bind(var5)(var0);
                var0 = var5.shift;
                var2 = var0.bind(var5)();
                var0 = var2.startsWith;
                var10 = 'WEBVTT';
                var0 = var0.bind(var2)(var10);
                if (var0) {
                    _fun84049_ip = 193;
                    continue _fun84049
                }
            case 158:
                var9 = _closure1_slot5;
                var0 = var9.prototype;
                var7 = Object.create(var0, {
                    constructor: {
                        value: var9
                    }
                });
                var12 = 'Must start with "WEBVTT"';
                var13 = var7;
                var0 = new var13[var9](var12, var11);
                var0 = var0 instanceof Object ? var0 : var7;
                throw var0;
            case 193:
                var0 = var2.split;
                var7 = var0.bind(var2)(var6);
                var2 = 0;
                var9 = var7[var2];
                var0 = var9.replace;
                var6 = '';
                var0 = var0.bind(var9)(var10, var6);
                var9 = var0.length;
                if (!(var9 > var2)) {
                    _fun84049_ip = 262;
                    continue _fun84049
                }
            case 233:
                var10 = var0[var2];
                var9 = ' ';
                if (!(var9 !== var10)) {
                    _fun84049_ip = 262;
                    continue _fun84049
                }
            case 247:
                var9 = var0[var2];
                var0 = '\t';
                if (!(var0 === var9)) {
                    _fun84049_ip = 494;
                    continue _fun84049
                }
            case 262:
                var0 = var5.length;
                if (!(var2 === var0)) {
                    _fun84049_ip = 286;
                    continue _fun84049
                }
            case 271:
                var9 = var7.length;
                var0 = 1;
                if (!(var0 !== var9)) {
                    _fun84049_ip = 460;
                    continue _fun84049
                }
            case 286:
                if (var4) {
                    _fun84049_ip = 344;
                    continue _fun84049
                }
            case 289:
                var9 = var7.length;
                var0 = 1;
                if (!(var9 > var0)) {
                    _fun84049_ip = 344;
                    continue _fun84049
                }
            case 301:
                var0 = var7[var0];
                if (!(var6 !== var0)) {
                    _fun84049_ip = 344;
                    continue _fun84049
                }
            case 309:
                var9 = _closure1_slot5;
                var0 = var9.prototype;
                var6 = Object.create(var0, {
                    constructor: {
                        value: var9
                    }
                });
                var12 = 'Missing blank line after signature';
                var13 = var6;
                var0 = new var13[var9](var12, var11);
                var0 = var0 instanceof Object ? var0 : var6;
                throw var0;
            case 344:
                var0 = function arg0, arg1() {
                    var4 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = new Array(0);
                    var _closure3_slot1 = var1;
                    var3 = var4.map;
                    var2 = function(arg0, arg1) { // Environment: var0
                        _fun84051: for (var _fun84051_ip = 0;;) switch (_fun84051_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = arg1;
                            case 6: // try_start_0
                                var5 = var0;
                                var12 = _closure3_slot0;
                                var0 = var1.split;
                                var11 = '\n';
                                var3 = var0.bind(var1)(var11);
                                var2 = var3.filter;
                                var1 = global;
                                var0 = var1.Boolean;
                                var6 = var2.bind(var3)(var0);
                                var0 = var6.length;
                                var7 = 0;
                                if (!(var0 > var7)) {
                                    _fun84051_ip = 96;
                                    continue _fun84051
                                }
                            case 59:
                                var2 = var6[var7];
                                var0 = var2.trim;
                                var3 = var0.bind(var2)();
                                var2 = var3.startsWith;
                                var0 = 'NOTE';
                                var2 = var2.bind(var3)(var0);
                                var0 = null;
                                if (var2) {
                                    _fun84051_ip = 783;
                                    continue _fun84051
                                }
                            case 96:
                                var2 = var6.length;
                                var4 = 1;
                                if (!(var4 === var2)) {
                                    _fun84051_ip = 187;
                                    continue _fun84051
                                }
                            case 108:
                                var8 = var6[var7];
                                var3 = var8.includes;
                                var2 = '-->';
                                var2 = var3.bind(var8)(var2);
                                if (var2) {
                                    _fun84051_ip = 187;
                                    continue _fun84051
                                }
                            case 131:
                                var8 = _closure1_slot5;
                                var2 = var1.HermesInternal;
                                var9 = var2.concat;
                                var3 = 'Cue identifier cannot be standalone (cue #';
                                var2 = ')';
                                var17 = var9.bind(var3)(var5, var2);
                                var3 = var8.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var8
                                    }
                                });
                                var18 = var3;
                                var2 = new var18[var8](var17, var16);
                                var2 = var2 instanceof Object ? var2 : var3;
                                throw var2;
                            case 187:
                                var2 = var6.length;
                                if (!(var2 > var4)) {
                                    _fun84051_ip = 292;
                                    continue _fun84051
                                }
                            case 196:
                                var3 = var6[var7];
                                var2 = var3.includes;
                                var8 = '-->';
                                var2 = var2.bind(var3)(var8);
                                if (var2) {
                                    _fun84051_ip = 292;
                                    continue _fun84051
                                }
                            case 219:
                                var3 = var6[var4];
                                var2 = var3.includes;
                                var2 = var2.bind(var3)(var8);
                                if (var2) {
                                    _fun84051_ip = 292;
                                    continue _fun84051
                                }
                            case 236:
                                var8 = _closure1_slot5;
                                var2 = var1.HermesInternal;
                                var9 = var2.concat;
                                var3 = 'Cue identifier needs to be followed by timestamp (cue #';
                                var2 = ')';
                                var17 = var9.bind(var3)(var5, var2);
                                var3 = var8.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var8
                                    }
                                });
                                var18 = var3;
                                var2 = new var18[var8](var17, var16);
                                var2 = var2 instanceof Object ? var2 : var3;
                                throw var2;
                            case 292:
                                var2 = var6.length;
                                var2 = var2 > var4;
                                if (!var2) {
                                    _fun84051_ip = 324;
                                    continue _fun84051
                                }
                            case 304:
                                var9 = var6[var4];
                                var8 = var9.includes;
                                var3 = '-->';
                                var2 = var8.bind(var9)(var3);
                            case 324:
                                var10 = '';
                                var9 = var10;
                                if (!var2) {
                                    _fun84051_ip = 344;
                                    continue _fun84051
                                }
                            case 334:
                                var2 = var6.shift;
                                var9 = var2.bind(var6)();
                            case 344:
                                var8 = var6[var7];
                                var3 = var8.split;
                                var2 = ' --> ';
                                var3 = var3.bind(var8)(var2);
                                var8 = var3.length;
                                var2 = 2;
                                if (!(var2 === var8)) {
                                    _fun84051_ip = 727;
                                    continue _fun84051
                                }
                            case 379:
                                var13 = _closure1_slot8;
                                var8 = var3[var7];
                                var14 = undefined;
                                var8 = var13.bind(var14)(var8);
                                if (!var8) {
                                    _fun84051_ip = 727;
                                    continue _fun84051
                                }
                            case 403:
                                var13 = _closure1_slot8;
                                var8 = var3[var4];
                                var8 = var13.bind(var14)(var8);
                                if (!var8) {
                                    _fun84051_ip = 727;
                                    continue _fun84051
                                }
                            case 422:
                                var13 = _closure1_slot9;
                                var7 = var3[var7];
                                var8 = var13.bind(var14)(var7);
                                var7 = var3[var4];
                                var7 = var13.bind(var14)(var7);
                                if (!var12) {
                                    _fun84051_ip = 461;
                                    continue _fun84051
                                }
                            case 447:
                                if (!(!(var8 > var7))) {
                                    _fun84051_ip = 674;
                                    continue _fun84051
                                }
                            case 454:
                                if (!(!(var7 <= var8))) {
                                    _fun84051_ip = 621;
                                    continue _fun84051
                                }
                            case 461:
                                if (var12) {
                                    _fun84051_ip = 521;
                                    continue _fun84051
                                }
                            case 464:
                                if (!(var7 < var8)) {
                                    _fun84051_ip = 521;
                                    continue _fun84051
                                }
                            case 468:
                                var14 = _closure1_slot5;
                                var12 = var1.HermesInternal;
                                var15 = var12.concat;
                                var13 = 'End must be greater or equal to start when not strict (cue #';
                                var12 = ')';
                                var17 = var15.bind(var13)(var5, var12);
                                var13 = var14.prototype;
                                var13 = Object.create(var13, {
                                    constructor: {
                                        value: var14
                                    }
                                });
                                var18 = var13;
                                var12 = new var18[var14](var17, var16);
                                var12 = var12 instanceof Object ? var12 : var13;
                                throw var12;
                            case 521:
                                var12 = var3[var4];
                                var4 = var12.replace;
                                var3 = _closure1_slot6;
                                var4 = var4.bind(var12)(var3, var10);
                                var3 = var4.trim;
                                var4 = var3.bind(var4)();
                                var3 = var6.shift;
                                var3 = var3.bind(var6)();
                                var3 = var6.join;
                                var6 = var3.bind(var6)(var11);
                                var3 = var6.trim;
                                var3 = var3.bind(var6)();
                                var0 = false;
                                if (!(var10 !== var3)) {
                                    _fun84051_ip = 783;
                                    continue _fun84051
                                }
                            case 589:
                                var3 = {};
                                var3.identifier = var9;
                                var3.start = var8;
                                var3.end = var7;
                                var3.text = var6;
                                var3.styles = var4;
                                var0 = var3;
                                _fun84051_ip = 783;
                                continue _fun84051;
                            case 621:
                                var6 = _closure1_slot5;
                                var3 = var1.HermesInternal;
                                var7 = var3.concat;
                                var4 = 'End must be greater than start (cue #';
                                var3 = ')';
                                var17 = var7.bind(var4)(var5, var3);
                                var4 = var6.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var18 = var4;
                                var3 = new var18[var6](var17, var16);
                                var3 = var3 instanceof Object ? var3 : var4;
                                throw var3;
                            case 674:
                                var4 = _closure1_slot5;
                                var2 = var1.HermesInternal;
                                var6 = var2.concat;
                                var3 = 'Start timestamp greater than end (cue #';
                                var2 = ')';
                                var17 = var6.bind(var3)(var5, var2);
                                var3 = var4.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var18 = var3;
                                var2 = new var18[var4](var17, var16);
                                var2 = var2 instanceof Object ? var2 : var3;
                                throw var2;
                            case 727:
                                var3 = _closure1_slot5;
                                var1 = var1.HermesInternal;
                                var4 = var1.concat;
                                var2 = 'Invalid cue timestamp (cue #';
                                var1 = ')';
                                var17 = var4.bind(var2)(var5, var1);
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var18 = var2;
                                var1 = new var18[var3](var17, var16);
                                var1 = var1 instanceof Object ? var1 : var2;
                                throw var1;
                            case 783: // try_end0
                                return var0;
                            case 785: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var1 = _closure3_slot1;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                                var0 = null;
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun84052: for (var _fun84052_ip = 0;;) switch (_fun84052_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                var0 = var0 !== var2;
                                if (!var0) {
                                    _fun84052_ip = 18;
                                    continue _fun84052
                                }
                            case 12:
                                var1 = false;
                                var0 = var1 !== var2;
                            case 18:
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var0);
                    var0 = {};
                    var0.cues = var2;
                    var0.errors = var1;
                    return var0;
                };
                var0 = var0.bind(var8)(var5, var1);
                var5 = var0.cues;
                var0 = var0.errors;
                if (!var1) {
                    _fun84049_ip = 381;
                    continue _fun84049
                }
            case 372:
                var6 = var0.length;
                if (!(!(var6 > var2))) {
                    _fun84049_ip = 454;
                    continue _fun84049
                }
            case 381:
                var6 = null;
                if (!var4) {
                    _fun84049_ip = 398;
                    continue _fun84049
                }
            case 386:
                var3 = function arg0() {
                    _fun84053: for (var _fun84053_ip = 0;;) switch (_fun84053_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = {};
                            var _closure3_slot0 = var1;
                            var3 = var4.slice;
                            var2 = 1;
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var3 = arg0;
                                var1 = var3.indexOf;
                                var0 = ':';
                                var4 = var1.bind(var3)(var0);
                                var1 = var3.slice;
                                var0 = 0;
                                var1 = var1.bind(var3)(var0, var4);
                                var0 = var1.trim;
                                var2 = var0.bind(var1)();
                                var1 = var3.slice;
                                var0 = 1;
                                var0 = var4 + var0;
                                var1 = var1.bind(var3)(var0);
                                var0 = var1.trim;
                                var1 = var0.bind(var1)();
                                var0 = _closure3_slot0;
                                var0[var2] = var1;
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var0);
                            var0 = global;
                            var2 = var0.Object;
                            var0 = var2.keys;
                            var0 = var0.bind(var2)(var1);
                            var2 = var0.length;
                            var0 = 0;
                            var2 = var2 > var0;
                            var0 = null;
                            if (!var2) {
                                _fun84053_ip = 78;
                                continue _fun84053
                            }
                        case 75:
                            var0 = var1;
                        case 78:
                            return var0;
                    }
                };
                var6 = var3.bind(var8)(var7);
            case 398:
                var3 = {};
                var7 = var0.length;
                var7 = var2 === var7;
                var3.valid = var7;
                var3.strict = var1;
                var3.cues = var5;
                var3.errors = var0;
                if (!var4) {
                    _fun84049_ip = 442;
                    continue _fun84049
                }
            case 432:
                var5 = {};
                var5.meta = var6;
                var4 = var5;
            case 442:
                var12 = var3;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                return var3;
            case 454:
                var0 = var0[var2];
                throw var0;
            case 460:
                var0 = {};
                var2 = true;
                var0.valid = var2;
                var0.strict = var1;
                var1 = new Array(0);
                var0.cues = var1;
                var1 = new Array(0);
                var0.errors = var1;
                return var0;
            case 494:
                var2 = _closure1_slot5;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = 'Header comment must start with space or tab';
                var13 = var1;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.parseVtt = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 162, 2]);