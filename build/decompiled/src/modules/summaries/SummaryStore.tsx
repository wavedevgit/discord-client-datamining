// modules/summaries/SummaryStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun73734: for (var _fun73734_ip = 0;;) switch (_fun73734_ip) {
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
                _fun73734_ip = 76;
                continue _fun73734;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot31 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        var3 = _closure1_slot10;
        var2 = var3.getProps;
        var2 = var2.bind(var3)();
        var4 = var2.results;
        var3 = var4.filter;
        var2 = function(arg0) { // Environment: var0
            _fun73738: for (var _fun73738_ip = 0;;) switch (_fun73738_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 16;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.AutocompleterResultTypes;
                    var0 = var0.TEXT_CHANNEL;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun73738_ip = 69;
                        continue _fun73738
                    }
                case 52:
                    var1 = var1.record;
                    var2 = var1.type;
                    var1 = 0;
                    var0 = var1 === var2;
                case 69:
                    return var0;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.record;
            var0 = var0.id;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot29 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.SUMMARY_POLL_INTERVAL;
    var _closure1_slot17 = var1;
    var7 = {};
    var1 = 'fetching';
    var7.FETCHING = var1;
    var1 = 'ok';
    var7.OK = var1;
    var1 = 'error';
    var7.ERROR = var1;
    var _closure1_slot22 = var7;
    var1 = {};
    var _closure1_slot23 = var1;
    var1 = {};
    var _closure1_slot24 = var1;
    var1 = {};
    var _closure1_slot25 = var1;
    var1 = new Array(0);
    var _closure1_slot26 = var1;
    var1 = {};
    var _closure1_slot27 = var1;
    var1 = {
        'status': null,
        'lastRequest': null,
        'lastResponse': null
    };
    var7 = var7.OK;
    var1.status = var7;
    var _closure1_slot28 = var1;
    var1 = new Array(0);
    var _closure1_slot29 = var1;
    var1 = new Array(0);
    var _closure1_slot30 = var1;
    var1 = 20;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun73741: for (var _fun73741_ip = 0;;) switch (_fun73741_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot31;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun73741_ip = 69;
                        continue _fun73741
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun73741_ip = 105;
                    continue _fun73741;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
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
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'getState';
        var4.key = var0;
        var0 = function() {
            var0 = {};
            var1 = _closure1_slot18;
            var0.shouldShowTopicsBar = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(18);
        var0[0] = var4;
        var4 = {};
        var6 = 'initialize';
        var4.key = var6;
        var6 = function arg0() {
            _fun73743: for (var _fun73743_ip = 0;;) switch (_fun73743_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var2 = null;
                    var5 = var2 == var3;
                    var0 = undefined;
                    var1 = undefined;
                    if (var5) {
                        _fun73743_ip = 25;
                        continue _fun73743
                    }
                case 19:
                    var1 = var3.shouldShowTopicsBar;
                case 25:
                    var2 = var2 == var1;
                    if (var2) {
                        _fun73743_ip = 35;
                        continue _fun73743
                    }
                case 32:
                    var2 = var1;
                case 35:
                    var _closure1_slot18 = var2;
                    var11 = var4.waitFor;
                    var19 = _closure1_slot11;
                    var18 = _closure1_slot9;
                    var17 = _closure1_slot12;
                    var16 = _closure1_slot10;
                    var15 = _closure1_slot13;
                    var14 = _closure1_slot14;
                    var13 = _closure1_slot15;
                    var12 = _closure1_slot16;
                    var20 = var4;
                    var2 = var20[var11](var19, var18, var17, var16, var15, var14, var13, var12, var11);
                    var3 = var4.syncWith;
                    var5 = _closure1_slot10;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = _closure1_slot32;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'allSummaries';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'topSummaries';
        var4.key = var6;
        var6 = function() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot23;
            var2 = var2.bind(var3)(var1);
            var1 = var2.flat;
            var3 = var1.bind(var2)();
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                _fun73746: for (var _fun73746_ip = 0;;) switch (_fun73746_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.people;
                        var2 = var0.length;
                        var0 = 1;
                        var0 = var2 > var0;
                        if (!var0) {
                            _fun73746_ip = 143;
                            continue _fun73746
                        }
                    case 24:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 17;
                        var2 = var6[var2];
                        var4 = undefined;
                        var3 = var5.bind(var4)(var2);
                        var2 = var3.extractTimestamp;
                        var1 = var1.endId;
                        var2 = var2.bind(var3)(var1);
                        var1 = global;
                        var1 = var1.Date;
                        var3 = var1.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var3;
                        var1 = new var8[var1](var7);
                        var3 = var1 instanceof Object ? var1 : var3;
                        var1 = var3.getTime;
                        var3 = var1.bind(var3)();
                        var1 = 18;
                        var1 = var6[var1];
                        var1 = var5.bind(var4)(var1);
                        var1 = var1.Millis;
                        var4 = var1.HOUR;
                        var1 = 5;
                        var1 = var1 * var4;
                        var1 = var3 - var1;
                        var0 = var2 > var1;
                    case 143:
                        return var0;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.sort;
            var0 = function(arg0, arg1) { // Environment: var0
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 17;
                var1 = var4[var0];
                var2 = undefined;
                var6 = var3.bind(var2)(var1);
                var5 = var6.extractTimestamp;
                var1 = arg1;
                var1 = var1.endId;
                var1 = var5.bind(var6)(var1);
                var0 = var4[var0];
                var3 = var3.bind(var2)(var0);
                var2 = var3.extractTimestamp;
                var0 = arg0;
                var0 = var0.endId;
                var0 = var2.bind(var3)(var0);
                var0 = var1 - var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'summaries';
        var4.key = var6;
        var6 = function arg0() {
            _fun73748: for (var _fun73748_ip = 0;;) switch (_fun73748_ip) {
                case 0:
                    var2 = _closure1_slot23;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun73748_ip = 24;
                        continue _fun73748
                    }
                case 20:
                    var0 = _closure1_slot30;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'shouldShowTopicsBar';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'findSummary';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun73750: for (var _fun73750_ip = 0;;) switch (_fun73750_ip) {
                case 0:
                    var3 = this;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var2 = var3.summaries;
                    var1 = arg0;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun73750_ip = 55;
                        continue _fun73750
                    }
                case 52:
                    var0 = var1;
                case 55:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'selectedSummary';
        var4.key = var6;
        var6 = function arg0() {
            _fun73752: for (var _fun73752_ip = 0;;) switch (_fun73752_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = _closure1_slot21;
                    var1 = null;
                    var2 = var1 != var0;
                    var0 = null;
                    if (!var2) {
                        _fun73752_ip = 89;
                        continue _fun73752
                    }
                case 24:
                    var2 = _closure1_slot21;
                    var2 = var2.channelId;
                    var0 = null;
                    if (!(var2 === var4)) {
                        _fun73752_ip = 89;
                        continue _fun73752
                    }
                case 39:
                    var2 = _closure1_slot21;
                    var2 = var2.summaryId;
                    var2 = var1 != var2;
                    var0 = null;
                    if (!var2) {
                        _fun73752_ip = 89;
                        continue _fun73752
                    }
                case 58:
                    var2 = var3.findSummary;
                    var5 = _closure1_slot21;
                    var6 = var1 == var5;
                    var1 = undefined;
                    if (var6) {
                        _fun73752_ip = 83;
                        continue _fun73752
                    }
                case 77:
                    var1 = var5.summaryId;
                case 83:
                    var0 = var2.bind(var3)(var4, var1);
                case 89:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'summaryFeedback';
        var4.key = var6;
        var6 = function arg0() {
            _fun73753: for (var _fun73753_ip = 0;;) switch (_fun73753_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var2 = var0 == var1;
                    if (var2) {
                        _fun73753_ip = 28;
                        continue _fun73753
                    }
                case 12:
                    var2 = _closure1_slot25;
                    var1 = var1.id;
                    var0 = var2[var1];
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun73754: for (var _fun73754_ip = 0;;) switch (_fun73754_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun73754_ip = 46;
                        continue _fun73754
                    }
                case 12:
                    var0 = _closure1_slot24;
                    var0 = var0[var4];
                    var5 = var1 == var0;
                    var3 = undefined;
                    if (var5) {
                        _fun73754_ip = 38;
                        continue _fun73754
                    }
                case 32:
                    var3 = var0.fetching;
                case 38:
                    var0 = true;
                    var0 = var0 === var3;
                    _fun73754_ip = 76;
                    continue _fun73754;
                case 46:
                    var3 = _closure1_slot24;
                    var3 = var3[var4];
                    var4 = var1 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun73754_ip = 72;
                        continue _fun73754
                    }
                case 66:
                    var1 = var3.summaryId;
                case 72:
                    var0 = var1 === var2;
                case 76:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'status';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot24;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'shouldFetch';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun73756: for (var _fun73756_ip = 0;;) switch (_fun73756_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var0 = _closure1_slot24;
                    var4 = var0[var5];
                    var2 = _closure1_slot11;
                    var0 = var2.getChannel;
                    var6 = var0.bind(var2)(var5);
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.canSeeChannelSummaries;
                    var2 = var2.bind(var5)(var6);
                    if (var2) {
                        _fun73756_ip = 71;
                        continue _fun73756
                    }
                case 67:
                    var2 = false;
                    return var2;
                case 71:
                    var5 = null;
                    if (!(var5 == var3)) {
                        _fun73756_ip = 146;
                        continue _fun73756
                    }
                case 77:
                    var6 = var5 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun73756_ip = 92;
                        continue _fun73756
                    }
                case 86:
                    var2 = var4.lastReceivedAt;
                case 92:
                    var8 = var5 != var2;
                    var7 = 0;
                    var6 = 0;
                    if (!var8) {
                        _fun73756_ip = 106;
                        continue _fun73756
                    }
                case 103:
                    var6 = var2;
                case 106:
                    var2 = global;
                    var8 = var2.Boolean;
                    var9 = var5 == var4;
                    var2 = undefined;
                    if (var9) {
                        _fun73756_ip = 129;
                        continue _fun73756
                    }
                case 123:
                    var2 = var4.fetching;
                case 129:
                    var2 = var8.bind(var0)(var2);
                    var2 = !var2;
                    if (!var2) {
                        _fun73756_ip = 144;
                        continue _fun73756
                    }
                case 140:
                    var2 = var7 === var6;
                case 144:
                    return var2;
                case 146:
                    var6 = var5 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun73756_ip = 163;
                        continue _fun73756
                    }
                case 155:
                    var2 = var4.summaryIdLastRequestedAt;
                case 163:
                    var7 = var5 != var2;
                    var6 = 0;
                    if (!var7) {
                        _fun73756_ip = 175;
                        continue _fun73756
                    }
                case 172:
                    var6 = var2;
                case 175:
                    var2 = global;
                    var7 = var2.Date;
                    var2 = var7.now;
                    var2 = var2.bind(var7)();
                    var2 = var2 - var6;
                    var5 = var5 == var4;
                    var0 = undefined;
                    if (var5) {
                        _fun73756_ip = 211;
                        continue _fun73756
                    }
                case 205:
                    var0 = var4.summaryId;
                case 211:
                    var0 = var3 !== var0;
                    if (var0) {
                        _fun73756_ip = 226;
                        continue _fun73756
                    }
                case 218:
                    var1 = _closure1_slot17;
                    var0 = var2 > var1;
                case 226:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'channelAffinities';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot26;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'channelAffinitiesById';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'channelAffinitiesStatus';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot28;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'shouldFetchChannelAffinities';
        var4.key = var6;
        var6 = function() {
            _fun73760: for (var _fun73760_ip = 0;;) switch (_fun73760_ip) {
                case 0:
                    var0 = _closure1_slot28;
                    var1 = var0.status;
                    var0 = _closure1_slot22;
                    var0 = var0.FETCHING;
                    var0 = var1 !== var0;
                    if (!var0) {
                        _fun73760_ip = 127;
                        continue _fun73760
                    }
                case 29:
                    var1 = _closure1_slot28;
                    var3 = var1.lastResponse;
                    var1 = null;
                    var1 = var1 != var3;
                    if (!var1) {
                        _fun73760_ip = 124;
                        continue _fun73760
                    }
                case 48:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot28;
                    var3 = var3.lastResponse;
                    var3 = var4 - var3;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 18;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.Millis;
                    var4 = var2.SECOND;
                    var2 = 30;
                    var2 = var2 * var4;
                    var1 = var3 < var2;
                case 124:
                    var0 = !var1;
                case 127:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'defaultChannelIds';
        var4.key = var6;
        var6 = function arg0() {
            _fun73761: for (var _fun73761_ip = 0;;) switch (_fun73761_ip) {
                case 0:
                    var3 = arg0;
                    var4 = var3.withQuickSwitcher;
                    var2 = var3.withChannelAffinities;
                    var1 = var3.withUnreads;
                    var3 = var3.numChannels;
                    var5 = undefined;
                    if (!(var3 === var5)) {
                        _fun73761_ip = 40;
                        continue _fun73761
                    }
                case 37:
                    var3 = 25;
                case 40:
                    var7 = new Array(0);
                    var6 = var7;
                    if (!var4) {
                        _fun73761_ip = 67;
                        continue _fun73761
                    }
                case 50:
                    var5 = var7.concat;
                    var4 = _closure1_slot29;
                    var6 = var5.bind(var7)(var4);
                case 67:
                    var5 = var6;
                    if (!var2) {
                        _fun73761_ip = 107;
                        continue _fun73761
                    }
                case 73:
                    var4 = var6.concat;
                    var8 = _closure1_slot26;
                    var7 = var8.map;
                    var2 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.channel_id;
                        return var0;
                    };
                    var2 = var7.bind(var8)(var2);
                    var5 = var4.bind(var6)(var2);
                case 107:
                    var2 = var5;
                    if (!var1) {
                        _fun73761_ip = 130;
                        continue _fun73761
                    }
                case 113:
                    var4 = var5.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun73763: for (var _fun73763_ip = 0;;) switch (_fun73763_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot11;
                                var0 = var2.getChannel;
                                var2 = var0.bind(var2)(var3);
                                var0 = null;
                                var0 = var0 != var2;
                                if (!var0) {
                                    _fun73763_ip = 53;
                                    continue _fun73763
                                }
                            case 29:
                                var5 = _closure1_slot15;
                                var4 = var5.isChannelMuted;
                                var2 = var2.guild_id;
                                var2 = var4.bind(var5)(var2, var3);
                                var0 = !var2;
                            case 53:
                                if (!var0) {
                                    _fun73763_ip = 71;
                                    continue _fun73763
                                }
                            case 56:
                                var2 = _closure1_slot13;
                                var1 = var2.hasUnread;
                                var0 = var1.bind(var2)(var3);
                            case 71:
                                return var0;
                        }
                    };
                    var2 = var4.bind(var5)(var1);
                case 130:
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot11;
                        var2 = var3.getChannel;
                        var1 = arg0;
                        var3 = var2.bind(var3)(var1);
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 19;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.canSeeChannelSummaries;
                        var0 = false;
                        var0 = var1.bind(var2)(var3, var0, var0);
                        return var0;
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.slice;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'visibleSummaryIndex';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var5;
        var0[17] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SummaryStore';
    var7.persistKey = var1;
    var1 = 21;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = false;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun73767: for (var _fun73767_ip = 0;;) switch (_fun73767_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var5 = _closure1_slot21;
                var1 = null;
                var6 = var1 == var5;
                var0 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun73767_ip = 33;
                    continue _fun73767
                }
            case 28:
                var3 = var5.channelId;
            case 33:
                if (!(var3 !== var4)) {
                    _fun73767_ip = 41;
                    continue _fun73767
                }
            case 37:
                var _closure1_slot21 = var1;
            case 41:
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var8;
    var8 = function() {
        var0 = _closure1_slot18;
        var0 = !var0;
        _closure1_slot18 = var0;
        var0 = undefined;
        return var0;
    };
    var1.TOGGLE_TOPICS_BAR = var8;
    var8 = function arg0() {
        _fun73769: for (var _fun73769_ip = 0;;) switch (_fun73769_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.summary;
                var3 = var0.channelId;
                var5 = var0.error;
                var6 = var0.receivedAt;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var7 = null;
                if (!(var7 != var9)) {
                    _fun73769_ip = 197;
                    continue _fun73769
                }
            case 42:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var1 = var1.bind(var2)(var9);
                var1 = var1.length;
                var10 = 0;
                if (!(var1 > var10)) {
                    _fun73769_ip = 197;
                    continue _fun73769
                }
            case 74:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 22;
                var2 = var11[var2];
                var8 = var8.bind(var0)(var2);
                var2 = var8.createSummaryFromServer;
                var8 = var2.bind(var8)(var9, var3);
                _closure2_slot0 = var8;
                var2 = _closure1_slot23;
                var9 = var2[var3];
                if (!(var7 == var9)) {
                    _fun73769_ip = 129;
                    continue _fun73769
                }
            case 125:
                var9 = new Array(0);
            case 129:
                var2 = new Array(0);
                var14 = var2;
                var13 = var9;
                var12 = 0;
                var9 = arraySpread(var14, var13, var12);
                var9 = var2.findIndex;
                var4 = function(arg0) { // Environment: var4
                    _fun73770: for (var _fun73770_ip = 0;;) switch (_fun73770_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.id;
                            var3 = _closure2_slot0;
                            var0 = null;
                            var3 = var0 == var3;
                            var0 = undefined;
                            if (var3) {
                                _fun73770_ip = 35;
                                continue _fun73770
                            }
                        case 26:
                            var2 = _closure2_slot0;
                            var0 = var2.id;
                        case 35:
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var4 = var9.bind(var2)(var4);
                var9 = -1;
                if (!(!(var4 > var9))) {
                    _fun73769_ip = 185;
                    continue _fun73769
                }
            case 173:
                var9 = var2.push;
                var9 = var9.bind(var2)(var8);
                _fun73769_ip = 189;
                continue _fun73769;
            case 185:
                var2[var4] = var8;
            case 189:
                var1 = _closure1_slot23;
                var1[var3] = var2;
            case 197:
                var2 = {};
                var4 = _closure1_slot24;
                var4 = var4[var3];
                if (!(var7 == var4)) {
                    _fun73769_ip = 226;
                    continue _fun73769
                }
            case 214:
                var7 = {};
                var8 = false;
                var7.fetching = var8;
                var4 = var7;
            case 226:
                var14 = var2;
                var13 = var4;
                var4 = copyDataProperties(var14, var13);
                var4 = 'summaryId';
                var2[var4] = var0;
                var4 = 'summaryIdLastReceivedAt';
                var2[var4] = var6;
                var4 = 'summaryIdError';
                var2[var4] = var5;
                var1 = _closure1_slot24;
                var1[var3] = var2;
                return var0;
        }
    };
    var1.RECEIVE_CHANNEL_SUMMARY = var8;
    var8 = function arg0() {
        _fun73771: for (var _fun73771_ip = 0;;) switch (_fun73771_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var5 = var0.summaryId;
                var4 = var0.requestedAt;
                var1 = _closure1_slot24;
                var0 = {};
                var3 = var1[var2];
                var6 = null;
                if (!(var6 == var3)) {
                    _fun73771_ip = 51;
                    continue _fun73771
                }
            case 39:
                var6 = {};
                var7 = false;
                var6.fetching = var7;
                var3 = var6;
            case 51:
                var9 = var0;
                var8 = var3;
                var3 = copyDataProperties(var9, var8);
                var3 = 'summaryId';
                var0[var3] = var5;
                var3 = 'summaryIdLastRequestedAt';
                var0[var3] = var4;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.REQUEST_CHANNEL_SUMMARY = var8;
    var8 = function arg0() {
        _fun73772: for (var _fun73772_ip = 0;;) switch (_fun73772_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.summaries;
                var3 = var0.channelId;
                var _closure2_slot0 = var3;
                var4 = var0.error;
                var7 = var0.receivedAt;
                var1 = var5.filter;
                var0 = function(arg0) { // Environment: var2
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var5 = var1.bind(var5)(var0);
                var1 = var5.map;
                var0 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.createSummaryFromServer;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var10 = var1.bind(var5)(var0);
                var0 = _closure1_slot21;
                var5 = null;
                if (!(var5 != var0)) {
                    _fun73772_ip = 159;
                    continue _fun73772
                }
            case 78:
                var0 = _closure1_slot21;
                var0 = var0.channelId;
                if (!(var0 === var3)) {
                    _fun73772_ip = 159;
                    continue _fun73772
                }
            case 91:
                var6 = var10.some;
                var0 = function(arg0) { // Environment: var2
                    _fun73775: for (var _fun73775_ip = 0;;) switch (_fun73775_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.id;
                            var2 = _closure1_slot21;
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun73775_ip = 32;
                                continue _fun73775
                            }
                        case 26:
                            var0 = var2.summaryId;
                        case 32:
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var0 = var6.bind(var10)(var0);
                if (var0) {
                    _fun73772_ip = 159;
                    continue _fun73772
                }
            case 112:
                var0 = _closure1_slot23;
                var8 = var0[var3];
                if (!(var5 == var8)) {
                    _fun73772_ip = 128;
                    continue _fun73772
                }
            case 124:
                var8 = new Array(0);
            case 128:
                var6 = var8.find;
                var0 = function(arg0) { // Environment: var2
                    _fun73776: for (var _fun73776_ip = 0;;) switch (_fun73776_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.id;
                            var2 = _closure1_slot21;
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun73776_ip = 32;
                                continue _fun73776
                            }
                        case 26:
                            var0 = var2.summaryId;
                        case 32:
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var0);
                if (!(var5 != var6)) {
                    _fun73772_ip = 159;
                    continue _fun73772
                }
            case 149:
                var0 = var10.push;
                var0 = var0.bind(var10)(var6);
            case 159:
                var6 = _closure1_slot23;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 23;
                var8 = var8[var0];
                var0 = undefined;
                var9 = var9.bind(var0)(var8);
                var8 = var9.sortBy;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.extractTimestamp;
                    var0 = arg0;
                    var0 = var0.startId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var9)(var10, var2);
                var2 = var8.reverse;
                var2 = var2.bind(var8)();
                var6[var3] = var2;
                var2 = {};
                var6 = _closure1_slot24;
                var11 = var6[var3];
                var12 = var2;
                var6 = copyDataProperties(var12, var11);
                var8 = false;
                var6 = 'fetching';
                var2[var6] = var8;
                var6 = 'error';
                var2[var6] = var0;
                var6 = 'lastReceivedAt';
                var2[var6] = var7;
                if (!(var5 != var4)) {
                    _fun73772_ip = 274;
                    continue _fun73772
                }
            case 268:
                var2.error = var4;
            case 274:
                var1 = _closure1_slot24;
                var1[var3] = var2;
                return var0;
        }
    };
    var1.RECEIVE_CHANNEL_SUMMARIES = var8;
    var8 = function arg0() {
        _fun73778: for (var _fun73778_ip = 0;;) switch (_fun73778_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot24;
                var1 = var3.channelId;
                var0 = {};
                var5 = _closure1_slot24;
                var4 = var3.channelId;
                var4 = var5[var4];
                var5 = null;
                if (!(var5 == var4)) {
                    _fun73778_ip = 38;
                    continue _fun73778
                }
            case 36:
                var4 = {};
            case 38:
                var7 = var0;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var5 = true;
                var4 = 'fetching';
                var0[var4] = var5;
                var4 = var3.requestedAt;
                var3 = 'lastRequestedAt';
                var0[var3] = var4;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.REQUEST_CHANNEL_SUMMARIES = var8;
    var8 = function arg0() {
        _fun73779: for (var _fun73779_ip = 0;;) switch (_fun73779_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot19;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun73779_ip = 28;
                    continue _fun73779
                }
            case 16:
                var0 = var3.channelId;
                if (!(var1 != var0)) {
                    _fun73779_ip = 236;
                    continue _fun73779
                }
            case 28:
                var5 = var3.channelId;
                var6 = _closure1_slot19;
                var7 = var1 == var6;
                var0 = undefined;
                var4 = undefined;
                if (var7) {
                    _fun73779_ip = 53;
                    continue _fun73779
                }
            case 48:
                var4 = var6.channelId;
            case 53:
                if (!(var5 === var4)) {
                    _fun73779_ip = 89;
                    continue _fun73779
                }
            case 57:
                var5 = var3.summaryId;
                var6 = _closure1_slot19;
                var7 = var1 == var6;
                var4 = undefined;
                if (var7) {
                    _fun73779_ip = 82;
                    continue _fun73779
                }
            case 76:
                var4 = var6.summaryId;
            case 82:
                if (!(var5 !== var4)) {
                    _fun73779_ip = 232;
                    continue _fun73779
                }
            case 89:
                var4 = var3.channelId;
                var5 = var1 != var4;
                var4 = null;
                if (!var5) {
                    _fun73779_ip = 140;
                    continue _fun73779
                }
            case 103:
                var5 = {};
                var6 = var3.channelId;
                var5.channelId = var6;
                var7 = var3.summaryId;
                var8 = var1 != var7;
                var6 = null;
                if (!var8) {
                    _fun73779_ip = 132;
                    continue _fun73779
                }
            case 129:
                var6 = var7;
            case 132:
                var5.summaryId = var6;
                var4 = var5;
            case 140:
                var _closure1_slot19 = var4;
                if (!(var1 != var4)) {
                    _fun73779_ip = 230;
                    continue _fun73779
                }
            case 148:
                var4 = _closure1_slot19;
                var4 = var4.channelId;
                var3 = var3.channelId;
                if (!(var4 === var3)) {
                    _fun73779_ip = 230;
                    continue _fun73779
                }
            case 166:
                var3 = _closure1_slot19;
                var3 = var3.summaryId;
                if (!(var1 != var3)) {
                    _fun73779_ip = 230;
                    continue _fun73779
                }
            case 180:
                var4 = _closure1_slot23;
                var3 = _closure1_slot19;
                var3 = var3.channelId;
                var5 = var4[var3];
                var3 = var1 == var5;
                var1 = undefined;
                if (var3) {
                    _fun73779_ip = 226;
                    continue _fun73779
                }
            case 206:
                var4 = var5.findIndex;
                var3 = function(arg0) { // Environment: var3
                    _fun73780: for (var _fun73780_ip = 0;;) switch (_fun73780_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.id;
                            var2 = _closure1_slot19;
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun73780_ip = 32;
                                continue _fun73780
                            }
                        case 26:
                            var0 = var2.summaryId;
                        case 32:
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var3);
            case 226:
                var _closure1_slot20 = var1;
            case 230:
                return var0;
            case 232:
                var0 = false;
                return var0;
            case 236:
                var0 = false;
                return var0;
        }
    };
    var1.SET_HIGHLIGHTED_SUMMARY = var8;
    var8 = function arg0() {
        _fun73781: for (var _fun73781_ip = 0;;) switch (_fun73781_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot14;
                var0 = var3.getChannelId;
                var4 = var0.bind(var3)();
                var0 = null;
                if (!(var0 != var4)) {
                    _fun73781_ip = 159;
                    continue _fun73781
                }
            case 35:
                var3 = _closure1_slot19;
                if (!(var0 != var3)) {
                    _fun73781_ip = 70;
                    continue _fun73781
                }
            case 43:
                var3 = _closure1_slot19;
                var3 = var3.channelId;
                if (!(var3 === var4)) {
                    _fun73781_ip = 70;
                    continue _fun73781
                }
            case 56:
                var3 = _closure1_slot19;
                var3 = var3.summaryId;
                if (!(var0 == var3)) {
                    _fun73781_ip = 111;
                    continue _fun73781
                }
            case 70:
                var3 = _closure1_slot23;
                var6 = var3[var4];
                var4 = var0 == var6;
                var3 = undefined;
                if (var4) {
                    _fun73781_ip = 105;
                    continue _fun73781
                }
            case 87:
                var5 = var6.findIndex;
                var4 = function(arg0) { // Environment: var2
                    _fun73783: for (var _fun73783_ip = 0;;) switch (_fun73783_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = _closure2_slot0;
                            var5 = var1.topVisibleMessage;
                            var2 = var1.bottomVisibleMessage;
                            var1 = var0.startId;
                            var4 = var0.endId;
                            var3 = null;
                            var0 = var3 == var5;
                            if (var0) {
                                _fun73783_ip = 47;
                                continue _fun73783
                            }
                        case 43:
                            var0 = var5 > var4;
                        case 47:
                            if (var0) {
                                _fun73783_ip = 54;
                                continue _fun73783
                            }
                        case 50:
                            var0 = var3 == var2;
                        case 54:
                            if (var0) {
                                _fun73783_ip = 61;
                                continue _fun73783
                            }
                        case 57:
                            var0 = var2 < var1;
                        case 61:
                            var0 = !var0;
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var4);
            case 105:
                _closure1_slot20 = var3;
                _fun73781_ip = 159;
                continue _fun73781;
            case 111:
                var4 = _closure1_slot23;
                var3 = _closure1_slot19;
                var3 = var3.channelId;
                var4 = var4[var3];
                var3 = var0 == var4;
                var0 = undefined;
                if (var3) {
                    _fun73781_ip = 155;
                    continue _fun73781
                }
            case 137:
                var3 = var4.findIndex;
                var2 = function(arg0) { // Environment: var2
                    _fun73782: for (var _fun73782_ip = 0;;) switch (_fun73782_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.id;
                            var2 = _closure1_slot19;
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun73782_ip = 32;
                                continue _fun73782
                            }
                        case 26:
                            var0 = var2.summaryId;
                        case 32:
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2);
            case 155:
                _closure1_slot20 = var0;
            case 159:
                var0 = undefined;
                return var0;
        }
    };
    var1.UPDATE_VISIBLE_MESSAGES = var8;
    var8 = function arg0() {
        _fun73784: for (var _fun73784_ip = 0;;) switch (_fun73784_ip) {
            case 0:
                var5 = arg0;
                var6 = var5.channelId;
                var4 = null;
                var1 = var4 == var6;
                var0 = null;
                if (var1) {
                    _fun73784_ip = 117;
                    continue _fun73784
                }
            case 19:
                var2 = _closure1_slot21;
                var8 = var4 == var2;
                var1 = undefined;
                if (var8) {
                    _fun73784_ip = 40;
                    continue _fun73784
                }
            case 35:
                var1 = var2.channelId;
            case 40:
                var1 = var6 !== var1;
                if (var1) {
                    _fun73784_ip = 76;
                    continue _fun73784
                }
            case 47:
                var2 = var5.summaryId;
                var8 = _closure1_slot21;
                var9 = var4 == var8;
                var7 = undefined;
                if (var9) {
                    _fun73784_ip = 72;
                    continue _fun73784
                }
            case 66:
                var7 = var8.summaryId;
            case 72:
                var1 = var2 !== var7;
            case 76:
                if (!var1) {
                    _fun73784_ip = 114;
                    continue _fun73784
                }
            case 79:
                var2 = {};
                var2.channelId = var6;
                var5 = var5.summaryId;
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun73784_ip = 103;
                    continue _fun73784
                }
            case 100:
                var4 = var5;
            case 103:
                var2.summaryId = var4;
                _closure1_slot21 = var2;
                var1 = undefined;
            case 114:
                var0 = var1;
            case 117:
                return var0;
        }
    };
    var1.SET_SELECTED_SUMMARY = var8;
    var8 = function arg0() {
        _fun73785: for (var _fun73785_ip = 0;;) switch (_fun73785_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.summary;
                var2 = var1.rating;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun73785_ip = 39;
                    continue _fun73785
                }
            case 21:
                var3 = _closure1_slot25;
                var1 = var0.id;
                var1 = delete var3[var1];
                _fun73785_ip = 55;
                continue _fun73785;
            case 39:
                var1 = _closure1_slot25;
                var0 = var0.id;
                var1[var0] = var2;
            case 55:
                var0 = undefined;
                return var0;
        }
    };
    var1.SET_SUMMARY_FEEDBACK = var8;
    var8 = function() {
        var1 = {};
        var4 = _closure1_slot28;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = _closure1_slot22;
        var3 = var2.FETCHING;
        var2 = 'status';
        var1[var2] = var3;
        var2 = global;
        var3 = var2.Date;
        var2 = var3.now;
        var3 = var2.bind(var3)();
        var2 = 'lastRequest';
        var1[var2] = var3;
        _closure1_slot28 = var1;
        var0 = undefined;
        return var0;
    };
    var1.REQUEST_CHANNEL_AFFINITIES = var8;
    var8 = function arg0() {
        _fun73787: for (var _fun73787_ip = 0;;) switch (_fun73787_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.affinities;
                var0 = var0.error;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun73787_ip = 149;
                    continue _fun73787
                }
            case 23:
                var0 = var7;
                if (!(var3 == var0)) {
                    _fun73787_ip = 34;
                    continue _fun73787
                }
            case 30:
                var0 = new Array(0);
            case 34:
                _closure1_slot26 = var0;
                var4 = var3 == var7;
                var0 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun73787_ip = 75;
                    continue _fun73787
                }
            case 52:
                var6 = var7.reduce;
                var5 = function(arg0, arg1) { // Environment: var4
                    var0 = arg0;
                    var1 = arg1;
                    var2 = var1.channel_id;
                    var1 = var1.affinity;
                    var0[var2] = var1;
                    return var0;
                };
                var4 = {};
                var1 = var6.bind(var7)(var5, var4);
            case 75:
                if (!(var3 == var1)) {
                    _fun73787_ip = 81;
                    continue _fun73787
                }
            case 79:
                var1 = {};
            case 81:
                _closure1_slot27 = var1;
                var1 = {};
                var8 = _closure1_slot28;
                var9 = var1;
                var3 = copyDataProperties(var9, var8);
                var3 = _closure1_slot22;
                var4 = var3.OK;
                var3 = 'status';
                var1[var3] = var4;
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var4 = var3.bind(var4)();
                var3 = 'lastResponse';
                var1[var3] = var4;
                _closure1_slot28 = var1;
                return var0;
            case 149:
                var0 = new Array(0);
                _closure1_slot26 = var0;
                var0 = {};
                _closure1_slot27 = var0;
                var0 = {};
                var8 = _closure1_slot28;
                var9 = var0;
                var2 = copyDataProperties(var9, var8);
                var2 = _closure1_slot22;
                var3 = var2.ERROR;
                var2 = 'status';
                var0[var2] = var3;
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = 'lastResponse';
                var0[var2] = var3;
                _closure1_slot28 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.RECEIVE_CHANNEL_AFFINITIES = var8;
    var8 = function arg0() {
        var1 = arg0;
        var3 = var1.channelIds;
        var1 = var1.requestedAt;
        var _closure2_slot0 = var1;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun73790: for (var _fun73790_ip = 0;;) switch (_fun73790_ip) {
                case 0:
                    var0 = arg0;
                    var2 = arg1;
                    var1 = _closure1_slot24;
                    var3 = var1[var2];
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun73790_ip = 25;
                        continue _fun73790
                    }
                case 23:
                    var3 = {};
                case 25:
                    var1 = {};
                    var6 = var1;
                    var5 = var3;
                    var3 = copyDataProperties(var6, var5);
                    var4 = true;
                    var3 = 'fetching';
                    var1[var3] = var4;
                    var4 = _closure2_slot0;
                    var3 = 'lastRequestedAt';
                    var1[var3] = var4;
                    var4 = undefined;
                    var3 = 'error';
                    var1[var3] = var4;
                    var0[var2] = var1;
                    return var0;
            }
        };
        var0 = {};
        var2 = var2.bind(var3)(var1, var0);
        var1 = {};
        var4 = _closure1_slot24;
        var5 = var1;
        var3 = copyDataProperties(var5, var4);
        var5 = var1;
        var4 = var2;
        var2 = copyDataProperties(var5, var4);
        _closure1_slot24 = var1;
        var0 = undefined;
        return var0;
    };
    var1.REQUEST_CHANNEL_SUMMARIES_BULK = var8;
    var8 = function arg0() {
        var0 = arg0;
        var6 = var0.summaries;
        var2 = var0.receivedAt;
        var _closure2_slot0 = var2;
        var2 = var0.error;
        var _closure2_slot1 = var2;
        var0 = var0.requestArgs;
        var5 = var0.channelIds;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 23;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.toPairs;
        var7 = var3.bind(var4)(var6);
        var6 = var7.reduce;
        var4 = function(arg0, arg1) { // Environment: var1
            var0 = arg0;
            var6 = _closure1_slot3;
            var5 = undefined;
            var4 = arg1;
            var2 = 2;
            var6 = var6.bind(var5)(var4, var2);
            var2 = 0;
            var2 = var6[var2];
            var _closure3_slot0 = var2;
            var4 = 1;
            var7 = var6[var4];
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 23;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.chain;
            var6 = var7.map;
            var3 = function(arg0) { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 22;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.createSummaryFromServer;
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var3 = var6.bind(var7)(var3);
            var5 = var4.bind(var5)(var3);
            var4 = var5.sortBy;
            var3 = function(arg0) { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.extractTimestamp;
                var0 = arg0;
                var0 = var0.startId;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.takeRight;
            var3 = 75;
            var4 = var4.bind(var5)(var3);
            var3 = var4.reverse;
            var4 = var3.bind(var4)();
            var3 = var4.filter;
            var1 = function(arg0) { // Environment: var1
                var0 = global;
                var2 = var0.Object;
                var1 = var2.keys;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var1 = var0.length;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
            };
            var3 = var3.bind(var4)(var1);
            var1 = var3.value;
            var1 = var1.bind(var3)();
            var0[var2] = var1;
            return var0;
        };
        var3 = {};
        var3 = var6.bind(var7)(var4, var3);
        var _closure2_slot2 = var3;
        var4 = var5.reduce;
        var3 = {};
        var6 = {};
        var3.summariesByChannel = var6;
        var6 = {};
        var3.summaryFetchStatusByChannel = var6;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun73796: for (var _fun73796_ip = 0;;) switch (_fun73796_ip) {
                case 0:
                    var0 = arg0;
                    var3 = arg1;
                    var1 = _closure1_slot24;
                    var5 = var1[var3];
                    var1 = null;
                    if (!(var1 == var5)) {
                        _fun73796_ip = 25;
                        continue _fun73796
                    }
                case 23:
                    var5 = {};
                case 25:
                    var2 = _closure2_slot2;
                    var2 = var2[var3];
                    if (!(var1 != var2)) {
                        _fun73796_ip = 50;
                        continue _fun73796
                    }
                case 40:
                    var1 = var0.summariesByChannel;
                    var1[var3] = var2;
                case 50:
                    var2 = var0.summaryFetchStatusByChannel;
                    var1 = {};
                    var8 = var1;
                    var7 = var5;
                    var5 = copyDataProperties(var8, var7);
                    var6 = false;
                    var5 = 'fetching';
                    var1[var5] = var6;
                    var6 = _closure2_slot1;
                    var5 = 'error';
                    var1[var5] = var6;
                    var5 = _closure2_slot0;
                    var4 = 'lastReceivedAt';
                    var1[var4] = var5;
                    var2[var3] = var1;
                    return var0;
            }
        };
        var3 = var4.bind(var5)(var1, var3);
        var1 = {};
        var8 = _closure1_slot23;
        var9 = var1;
        var4 = copyDataProperties(var9, var8);
        var8 = var3.summariesByChannel;
        var9 = var1;
        var4 = copyDataProperties(var9, var8);
        _closure1_slot23 = var1;
        var1 = {};
        var8 = _closure1_slot24;
        var9 = var1;
        var4 = copyDataProperties(var9, var8);
        var8 = var3.summaryFetchStatusByChannel;
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        _closure1_slot24 = var1;
        return var0;
    };
    var1.RECEIVE_CHANNEL_SUMMARIES_BULK = var8;
    var8 = function arg0() {
        _fun73797: for (var _fun73797_ip = 0;;) switch (_fun73797_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channel_id;
                var _closure2_slot0 = var3;
                var7 = var0.summaries;
                var0 = var0.guild_id;
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var5 = var0.bind(var2)();
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var10 = 23;
                var2 = var0[var10];
                var0 = undefined;
                var6 = var6.bind(var0)(var2);
                var2 = var6.chain;
                var7 = var2.bind(var6)(var7);
                var6 = var7.sortBy;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.extractTimestamp;
                    var0 = arg0;
                    var0 = var0.start_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var6.bind(var7)(var2);
                var6 = var7.filter;
                var2 = function(arg0) { // Environment: var1
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var7 = var6.bind(var7)(var2);
                var6 = var7.map;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.createSummaryFromServer;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var6 = var6.bind(var7)(var2);
                var2 = var6.reverse;
                var6 = var2.bind(var6)();
                var2 = var6.value;
                var9 = var2.bind(var6)();
                var2 = _closure1_slot23;
                var8 = var2[var3];
                var6 = null;
                if (!(var6 == var8)) {
                    _fun73797_ip = 167;
                    continue _fun73797
                }
            case 163:
                var8 = new Array(0);
            case 167:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var7 = var7.bind(var0)(var2);
                var2 = var7.chain;
                var7 = var2.bind(var7)(var9);
                var2 = var7.concat;
                var7 = var2.bind(var7)(var8);
                var2 = var7.sortBy;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.extractTimestamp;
                    var0 = arg0;
                    var0 = var0.startId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var2.bind(var7)(var1);
                var2 = var7.takeRight;
                var1 = 75;
                var7 = var2.bind(var7)(var1);
                var2 = var7.uniqBy;
                var1 = 'id';
                var2 = var2.bind(var7)(var1);
                var1 = var2.reverse;
                var2 = var1.bind(var2)();
                var1 = var2.value;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot23;
                var1[var3] = var2;
                var2 = _closure1_slot24;
                var1 = {};
                var11 = var2[var3];
                var12 = var1;
                var7 = copyDataProperties(var12, var11);
                var7 = 'error';
                var1[var7] = var0;
                var4 = _closure1_slot24;
                var7 = var4[var3];
                var8 = var6 == var7;
                var4 = undefined;
                if (var8) {
                    _fun73797_ip = 328;
                    continue _fun73797
                }
            case 322:
                var4 = var7.fetching;
            case 328:
                var6 = var6 != var4;
                if (!var6) {
                    _fun73797_ip = 338;
                    continue _fun73797
                }
            case 335:
                var6 = var4;
            case 338:
                var4 = 'fetching';
                var1[var4] = var6;
                var4 = 'lastReceivedAt';
                var1[var4] = var5;
                var2[var3] = var1;
                return var0;
        }
    };
    var1.CONVERSATION_SUMMARY_UPDATE = var8;
    var8 = function() {
        var0 = {};
        _closure1_slot23 = var0;
        var0 = {};
        _closure1_slot24 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CLEAR_CONVERSATION_SUMMARIES = var8;
    var3 = function arg0() {
        _fun73803: for (var _fun73803_ip = 0;;) switch (_fun73803_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.summary;
                var1 = var0.channelId;
                var3 = _closure1_slot23;
                var4 = var3[var1];
                var3 = null;
                if (!(var3 == var4)) {
                    _fun73803_ip = 35;
                    continue _fun73803
                }
            case 31:
                var4 = new Array(0);
            case 35:
                var3 = var4.indexOf;
                var2 = var2.summary;
                var3 = var3.bind(var4)(var2);
                var2 = -1;
                if (!(var2 !== var3)) {
                    _fun73803_ip = 85;
                    continue _fun73803
                }
            case 62:
                var0 = _closure1_slot23;
                var2 = var0[var1];
                var1 = var2.splice;
                var0 = 1;
                var0 = var1.bind(var2)(var3, var0);
            case 85:
                var0 = undefined;
                return var0;
        }
    };
    var1.DELETE_SUMMARY = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/summaries/SummaryStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 153, 6, 7, 15, 17, 18, 1590, 6624, 1372, 1410, 3947, 1670, 4303, 1621, 9258, 6625, 21, 667, 9259, 566, 806, 9260, 22, 2]);