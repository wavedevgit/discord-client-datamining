// modules/dismissible_content/DismissibleContentShownStateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var0 = function() {
        _fun15661: for (var _fun15661_ip = 0;;) switch (_fun15661_ip) {
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
                _fun15661_ip = 74;
                continue _fun15661;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot22 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.TaskRunner;
    var4 = var1.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var1
        }
    });
    var14 = var4;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot10 = var1;
    var5 = function() {
        var0 = {
            'candidates': null,
            'shownFatigableCandidate': null,
            'prevFatigableCandidate': null
        };
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.candidates = var2;
        var2 = new Array(0);
        var0.recentlyShown = var2;
        var2 = var1.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.currentlyShown = var2;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var4 = var2;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var2;
        var0.currentlyShownGroup = var1;
        var1 = 0;
        var0.lastWinnerTime = var1;
        var1 = false;
        var0.postConnectionOpen = var1;
        return var0;
    };
    var _closure1_slot11 = var5;
    var1 = 8;
    var1 = var8[var1];
    var4 = var7.bind(var0)(var1);
    var1 = var4.createWithEqualityFn;
    var1 = var1.bind(var4)(var5);
    var _closure1_slot12 = var1;
    var1 = false;
    var _closure1_slot13 = var1;
    var1 = function arg0() {
        var1 = arg0;
        var0 = {};
        var7 = var0;
        var6 = var1;
        var2 = copyDataProperties(var7, var6);
        var2 = global;
        var5 = var2.Map;
        var7 = var1.candidates;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var8 = var4;
        var3 = new var8[var5](var7, var6);
        var4 = var3 instanceof Object ? var3 : var4;
        var3 = 'candidates';
        var0[var3] = var4;
        var5 = var2.Set;
        var7 = var1.currentlyShown;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var8 = var4;
        var3 = new var8[var5](var7, var6);
        var4 = var3 instanceof Object ? var3 : var4;
        var3 = 'currentlyShown';
        var0[var3] = var4;
        var3 = var2.Set;
        var7 = var1.currentlyShownGroup;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var8 = var2;
        var1 = new var8[var3](var7, var6);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = 'currentlyShownGroup';
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot14 = var1;
    var1 = function arg0, arg1() {
        _fun15666: for (var _fun15666_ip = 0;;) switch (_fun15666_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun15666_ip = 109;
                    continue _fun15666
                }
            case 12:
                var3 = var2.content;
                if (!(var1 != var3)) {
                    _fun15666_ip = 42;
                    continue _fun15666
                }
            case 21:
                var5 = var0.currentlyShown;
                var4 = var5.delete;
                var3 = var2.content;
                var3 = var4.bind(var5)(var3);
            case 42:
                var3 = var2.groupName;
                if (!(var1 != var3)) {
                    _fun15666_ip = 74;
                    continue _fun15666
                }
            case 52:
                var5 = var0.currentlyShownGroup;
                var4 = var5.delete;
                var3 = var2.groupName;
                var3 = var4.bind(var5)(var3);
            case 74:
                var4 = var0.shownFatigableCandidate;
                var5 = var1 == var4;
                var3 = undefined;
                if (var5) {
                    _fun15666_ip = 94;
                    continue _fun15666
                }
            case 89:
                var3 = var4.content;
            case 94:
                var2 = var2.content;
                if (!(var3 === var2)) {
                    _fun15666_ip = 109;
                    continue _fun15666
                }
            case 103:
                var0.shownFatigableCandidate = var1;
            case 109:
                return var0;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function arg0, arg1() {
        _fun15667: for (var _fun15667_ip = 0;;) switch (_fun15667_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun15667_ip = 287;
                    continue _fun15667
                }
            case 21:
                var6 = var0.currentlyShown;
                var5 = var6.add;
                var4 = var2.content;
                var4 = var5.bind(var6)(var4);
                var5 = var0.recentlyShown;
                var4 = var5.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var1 = var0.content;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var5 = var1.unshift;
                var4 = var2.content;
                var4 = var5.bind(var1)(var4);
                var5 = var1.splice;
                var4 = 5;
                var4 = var5.bind(var1)(var4);
                var0.recentlyShown = var1;
                var1 = var2.groupName;
                if (!(var3 != var1)) {
                    _fun15667_ip = 131;
                    continue _fun15667
                }
            case 109:
                var5 = var0.currentlyShownGroup;
                var4 = var5.add;
                var1 = var2.groupName;
                var1 = var4.bind(var5)(var1);
            case 131:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var6 = var1.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                var5 = var6.has;
                var1 = var2.content;
                var1 = var5.bind(var6)(var1);
                if (var1) {
                    _fun15667_ip = 265;
                    continue _fun15667
                }
            case 180:
                var0.shownFatigableCandidate = var2;
                var1 = var0.prevFatigableCandidate;
                var5 = var3 == var1;
                var4 = undefined;
                if (var5) {
                    _fun15667_ip = 206;
                    continue _fun15667
                }
            case 201:
                var4 = var1.content;
            case 206:
                var1 = var2.content;
                if (!(var4 !== var1)) {
                    _fun15667_ip = 265;
                    continue _fun15667
                }
            case 215:
                var0.prevFatigableCandidate = var2;
                var1 = global;
                var1 = var1.Date;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var4;
                var1 = new var8[var1](var7);
                var4 = var1 instanceof Object ? var1 : var4;
                var1 = var4.getTime;
                var1 = var1.bind(var4)();
                var0.lastWinnerTime = var1;
            case 265:
                var1 = var2.onAdded;
                if (!(var3 != var1)) {
                    _fun15667_ip = 285;
                    continue _fun15667
                }
            case 275:
                var1 = var2.onAdded;
                var1 = var1.bind(var2)();
            case 285:
                return var0;
            case 287:
                return var0;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function arg0, arg1() {
        var0 = arg0;
        var3 = var0.candidates;
        var2 = var3.delete;
        var1 = arg1;
        var1 = var1.content;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot17 = var1;
    var1 = function arg0, arg1() {
        var0 = arg0;
        var3 = _closure1_slot16;
        var4 = _closure1_slot15;
        var1 = var0.shownFatigableCandidate;
        var2 = undefined;
        var1 = var4.bind(var2)(var0, var1);
        var1 = arg1;
        var1 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var1;
    var1 = function arg0() {
        _fun15671: for (var _fun15671_ip = 0;;) switch (_fun15671_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.candidates;
                var2 = var1.size;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun15671_ip = 290;
                    continue _fun15671
                }
            case 23:
                var1 = global;
                var1 = var1.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var2;
                var1 = new var11[var1](var10);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var2.getTime;
                var2 = var1.bind(var2)();
                var1 = var0.lastWinnerTime;
                var2 = var2 - var1;
                var1 = 300000;
                var1 = var2 > var1;
                var2 = var0.prevFatigableCandidate;
                var3 = null;
                var2 = var3 != var2;
                if (!var2) {
                    _fun15671_ip = 123;
                    continue _fun15671
                }
            case 96:
                var6 = var0.candidates;
                var5 = var6.has;
                var4 = var0.prevFatigableCandidate;
                var4 = var4.content;
                var2 = var5.bind(var6)(var4);
            case 123:
                if (!var2) {
                    _fun15671_ip = 136;
                    continue _fun15671
                }
            case 126:
                var4 = var0.shownFatigableCandidate;
                var2 = var3 == var4;
            case 136:
                if (!var2) {
                    _fun15671_ip = 215;
                    continue _fun15671
                }
            case 139:
                if (var1) {
                    _fun15671_ip = 215;
                    continue _fun15671
                }
            case 142:
                var5 = _closure1_slot10;
                var4 = var5.unschedule;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot18;
                var2 = var0.prevFatigableCandidate;
                var6 = var3 != var2;
                var4 = undefined;
                var2 = undefined;
                if (!var6) {
                    _fun15671_ip = 207;
                    continue _fun15671
                }
            case 180:
                var8 = var0.candidates;
                var7 = var8.get;
                var6 = var0.prevFatigableCandidate;
                var6 = var6.content;
                var2 = var7.bind(var8)(var6);
            case 207:
                var2 = var5.bind(var4)(var0, var2);
                _fun15671_ip = 288;
                continue _fun15671;
            case 215:
                var2 = var0.shownFatigableCandidate;
                if (!(var3 != var2)) {
                    _fun15671_ip = 228;
                    continue _fun15671
                }
            case 225:
                if (!var1) {
                    _fun15671_ip = 288;
                    continue _fun15671
                }
            case 228:
                var3 = _closure1_slot10;
                var2 = var3.scheduled;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun15671_ip = 259;
                    continue _fun15671
                }
            case 248:
                var4 = _closure1_slot20;
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
            case 259:
                if (var2) {
                    _fun15671_ip = 288;
                    continue _fun15671
                }
            case 262:
                var4 = _closure1_slot10;
                var3 = var4.schedule;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.batchUpdates;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot12;
                        var1 = var2.setState;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot14;
                            var3 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0);
                            var2 = _closure1_slot18;
                            var1 = function(arg0) { // Environment: var1
                                _fun15675: for (var _fun15675_ip = 0;;) switch (_fun15675_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var _closure6_slot0 = var0;
                                        var3 = var0.candidates;
                                        var2 = var3.keys;
                                        var8 = var2.bind(var3)();
                                        var4 = new Array(0);
                                        var7 = 0;
                                        var9 = var4;
                                        var2 = arraySpread(var9, var8, var7);
                                        var3 = var0.prevFatigableCandidate;
                                        var2 = null;
                                        var2 = var2 !== var3;
                                        if (!var2) {
                                            _fun15675_ip = 79;
                                            continue _fun15675
                                        }
                                    case 52:
                                        var6 = var0.candidates;
                                        var5 = var6.has;
                                        var3 = var0.prevFatigableCandidate;
                                        var3 = var3.content;
                                        var2 = var5.bind(var6)(var3);
                                    case 79:
                                        if (!var2) {
                                            _fun15675_ip = 100;
                                            continue _fun15675
                                        }
                                    case 82:
                                        var3 = var0.candidates;
                                        var5 = var3.size;
                                        var3 = 1;
                                        var2 = var5 > var3;
                                    case 100:
                                        var3 = var4;
                                        if (!var2) {
                                            _fun15675_ip = 121;
                                            continue _fun15675
                                        }
                                    case 106:
                                        var2 = var4.filter;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun15676: for (var _fun15676_ip = 0;;) switch (_fun15676_ip) {
                                                case 0:
                                                    var0 = _closure6_slot0;
                                                    var0 = var0.prevFatigableCandidate;
                                                    var1 = null;
                                                    var2 = var1 == var0;
                                                    var1 = undefined;
                                                    if (var2) {
                                                        _fun15676_ip = 29;
                                                        continue _fun15676
                                                    }
                                                case 24:
                                                    var1 = var0.content;
                                                case 29:
                                                    var0 = arg0;
                                                    var0 = var0 !== var1;
                                                    return var0;
                                            }
                                        };
                                        var3 = var2.bind(var4)(var1);
                                    case 121:
                                        var2 = var0.candidates;
                                        var1 = var2.get;
                                        var0 = global;
                                        var5 = var0.Math;
                                        var4 = var5.floor;
                                        var6 = var0.Math;
                                        var0 = var6.random;
                                        var6 = var0.bind(var6)();
                                        var0 = var3.length;
                                        var0 = var6 * var0;
                                        var0 = var4.bind(var5)(var0);
                                        var0 = var3[var0];
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var1 = var1.bind(var3)(var0);
                            var1 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = 250;
                var1 = var3.bind(var4)(var2, var1);
            case 288:
                return var0;
            case 290:
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var5 = function arg0() {
        _fun15677: for (var _fun15677_ip = 0;;) switch (_fun15677_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var0 = var0.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var4 = var2;
                var0 = new var4[var0](var3);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var2.getTime;
                var2 = var0.bind(var2)();
                var3 = var1.shownFatigableCandidate;
                var0 = null;
                var0 = var0 == var3;
                if (!var0) {
                    _fun15677_ip = 76;
                    continue _fun15677
                }
            case 56:
                var1 = var1.lastWinnerTime;
                var2 = var2 - var1;
                var1 = 3600000;
                var0 = var2 < var1;
            case 76:
                return var0;
        }
    };
    var _closure1_slot20 = var5;
    var4 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 10;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.batchUpdates;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot12;
            var1 = var2.setState;
            var0 = function() { // Environment: var0
                var1 = _closure1_slot11;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var1 = true;
                var0.postConnectionOpen = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot10;
        var1 = var2.unschedule;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot21 = var4;
    var1 = 12;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var9 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun15682: for (var _fun15682_ip = 0;;) switch (_fun15682_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot22;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun15682_ip = 69;
                        continue _fun15682
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun15682_ip = 105;
                    continue _fun15682;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
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
            var3 = this;
            var _closure3_slot0 = var3;
            var1 = var3.waitFor;
            var5 = _closure1_slot8;
            var4 = _closure1_slot9;
            var1 = var1.bind(var3)(var5, var4);
            var2 = var3.syncWith;
            var1 = new Array(2);
            var1[0] = var5;
            var1[1] = var4;
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1.setHasRequiredAction;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'setHasRequiredAction';
        var4.key = var6;
        var5 = function() {
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var1);
            var3 = _closure1_slot8;
            var1 = _closure1_slot9;
            var1 = var4.bind(var0)(var3, var1);
            _closure1_slot13 = var1;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var10 = var1.bind(var0)(var9);
    var1 = 'DismissibleContentShownStateStore';
    var10.displayName = var1;
    var1 = 13;
    var1 = var8[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function() {
        var1 = _closure1_slot21;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_OPEN = var6;
    var6 = function() {
        var1 = _closure1_slot21;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOGOUT = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var14 = var6;
    var12 = var1;
    var1 = new var14[var10](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/dismissible_content/DismissibleContentShownStateStore.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function arg0, arg1() {
        var3 = _closure1_slot12;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var6;
    var6 = function() { // Environment: var3
        var2 = _closure1_slot20;
        var1 = _closure1_slot12;
        var0 = var1.getState;
        var1 = var0.bind(var1)();
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.isInCooldown = var6;
    var2.isStateInCooldown = var5;
    var5 = function(arg0) { // Environment: var3
        var2 = arg0;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 9;
        var5 = var4[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var5);
        var6 = var5.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        var5 = var6.has;
        var2 = var2.content;
        var2 = var5.bind(var6)(var2);
        var _closure2_slot1 = var2;
        var2 = 10;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot12;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                _fun15692: for (var _fun15692_ip = 0;;) switch (_fun15692_ip) {
                    case 0:
                        var1 = _closure1_slot14;
                        var3 = undefined;
                        var0 = arg0;
                        var0 = var1.bind(var3)(var0);
                        var1 = _closure1_slot13;
                        if (var1) {
                            _fun15692_ip = 85;
                            continue _fun15692
                        }
                    case 24:
                        var4 = _closure2_slot1;
                        if (var4) {
                            _fun15692_ip = 71;
                            continue _fun15692
                        }
                    case 34:
                        var4 = _closure1_slot19;
                        var8 = _closure2_slot0;
                        var7 = var0.candidates;
                        var6 = var7.set;
                        var5 = var8.content;
                        var5 = var6.bind(var7)(var5, var8);
                        var4 = var4.bind(var3)(var0);
                        _fun15692_ip = 85;
                        continue _fun15692;
                    case 71:
                        var2 = _closure1_slot16;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var0, var1);
                    case 85:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.addCandidateContent = var5;
    var5 = function(arg0, arg1) { // Environment: var3
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 10;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot12;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                _fun15695: for (var _fun15695_ip = 0;;) switch (_fun15695_ip) {
                    case 0:
                        var1 = _closure1_slot14;
                        var2 = undefined;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var1 = _closure2_slot1;
                        if (var1) {
                            _fun15695_ip = 53;
                            continue _fun15695
                        }
                    case 27:
                        var4 = _closure1_slot15;
                        var6 = _closure1_slot17;
                        var1 = _closure2_slot0;
                        var6 = var6.bind(var2)(var0, var1);
                        var1 = var4.bind(var2)(var0, var1);
                        _fun15695_ip = 86;
                        continue _fun15695;
                    case 53:
                        var1 = _closure1_slot19;
                        var4 = _closure1_slot15;
                        var5 = _closure1_slot17;
                        var3 = _closure2_slot0;
                        var5 = var5.bind(var2)(var0, var3);
                        var3 = var4.bind(var2)(var0, var3);
                        var1 = var1.bind(var2)(var0);
                    case 86:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.removeCandidateContent = var5;
    var5 = function() { // Environment: var3
        _fun15696: for (var _fun15696_ip = 0;;) switch (_fun15696_ip) {
            case 0:
                var1 = _closure1_slot12;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var1 = var0.recentlyShown;
                var0 = 0;
                var1 = var1[var0];
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun15696_ip = 41;
                    continue _fun15696
                }
            case 38:
                var0 = var1;
            case 41:
                return var0;
        }
    };
    var2.getLastShownDismissibleContent = var5;
    var5 = function() { // Environment: var3
        _fun15697: for (var _fun15697_ip = 0;;) switch (_fun15697_ip) {
            case 0:
                var1 = _closure1_slot12;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var2 = var0.shownFatigableCandidate;
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun15697_ip = 39;
                    continue _fun15697
                }
            case 34:
                var1 = var2.content;
            case 39:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun15697_ip = 51;
                    continue _fun15697
                }
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var2.getCurrentFatigableWinner = var5;
    var5 = function(arg0) { // Environment: var3
        var1 = _closure1_slot12;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var2 = var0.currentlyShown;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isContentShown = var5;
    var5 = function(arg0) { // Environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot12;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.currentlyShown;
            var1 = var2.has;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useIsContentShown = var5;
    var5 = function(arg0) { // Environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot12;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot0;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = _closure3_slot0;
                var2 = var0.currentlyShown;
                var1 = var2.has;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useIsAnyContentShown = var5;
    var5 = function(arg0) { // Environment: var3
        var2 = arg0;
        var3 = _closure1_slot12;
        var1 = var3.getState;
        var1 = var1.bind(var3)();
        var1 = var1.currentlyShown;
        var _closure2_slot0 = var1;
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isAnyContentShown = var5;
    var5 = function() { // Environment: var3
        var2 = _closure1_slot12;
        var0 = var2.getState;
        var0 = var0.bind(var2)();
        var5 = var0.currentlyShown;
        var3 = new Array(0);
        var4 = 0;
        var6 = var3;
        var0 = arraySpread(var6, var5, var4);
        var1 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var0 = var1.bind(var3)(var0);
        var1 = var0.length;
        var0 = var2.getState;
        var0 = var0.bind(var2)();
        var0 = var0.currentlyShown;
        var2 = var0.size;
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.getCurrentlyShownCounts = var5;
    var2.reset = var4;
    var3 = function() { // Environment: var3
        var1 = _closure1_slot12;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.postConnectionOpen;
        return var0;
    };
    var2.isPostConnectionOpen = var3;
    var2.dismissibleContentShownStateStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1365, 1366, 1367, 797, 1363, 802, 1368, 566, 806, 2]);