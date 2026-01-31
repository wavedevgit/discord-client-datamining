// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = 0;
    var4 = var6[var3];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: InteractionManager, environment: var4
            var3 = this;
            var2 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var2 = var2.bind(var0)(var3, var1);
            var2 = var1.prototype;
            var4 = var2.__init;
            var2 = var4.call;
            var2 = var2.bind(var4)(var3);
            var1 = var1.prototype;
            var2 = var1.__init2;
            var1 = var2.call;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '__init';
        var0.key = var1;
        var1 = function() { // Original name: __init, environment: var4
            var1 = new Array(0);
            var0 = this;
            var0._longestInteractionList = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = '__init2';
        var0.key = var5;
        var5 = function() { // Original name: __init2, environment: var4
            var0 = global;
            var0 = var0.Map;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var1 = var0 instanceof Object ? var0 : var1;
            var0 = this;
            var0._longestInteractionMap = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '_resetInteractions';
        var0.key = var5;
        var5 = function() { // Original name: _resetInteractions, environment: var4
            var1 = this;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var2);
            var2 = var4.getInteractionCount;
            var2 = var2.bind(var4)();
            _closure1_slot4 = var2;
            var3 = var1._longestInteractionList;
            var2 = 0;
            var3.length = var2;
            var2 = var1._longestInteractionMap;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_estimateP98LongestInteraction';
        var0.key = var5;
        var5 = function() { // Original name: _estimateP98LongestInteraction, environment: var4
            var0 = this;
            var1 = global;
            var4 = var1.Math;
            var3 = var4.min;
            var2 = var0._longestInteractionList;
            var5 = var2.length;
            var2 = 1;
            var2 = var5 - var2;
            var6 = var1.Math;
            var5 = var6.floor;
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var7 = 2;
            var8 = var8[var7];
            var7 = undefined;
            var8 = var9.bind(var7)(var8);
            var7 = var8.getInteractionCount;
            var7 = var7.bind(var8)();
            var1 = _closure1_slot4;
            var7 = var7 - var1;
            var1 = 50;
            var1 = var7 / var1;
            var1 = var5.bind(var6)(var1);
            var1 = var3.bind(var4)(var2, var1);
            var0 = var0._longestInteractionList;
            var0 = var0[var1];
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_processEntry';
        var0.key = var5;
        var4 = function(arg0) { // Original name: _processEntry, environment: var4
            _fun10832: for (var _fun10832_ip = 0;;) switch (_fun10832_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var2 = var3._onBeforeProcessingEntry;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun10832_ip = 29;
                        continue _fun10832
                    }
                case 18:
                    var1 = var2.call;
                    var1 = var1.bind(var2)(var3, var4);
                case 29:
                    var1 = var4.interactionId;
                    if (var1) {
                        _fun10832_ip = 57;
                        continue _fun10832
                    }
                case 38:
                    var2 = var4.entryType;
                    var1 = 'first-input';
                    if (!(var1 === var2)) {
                        _fun10832_ip = 464;
                        continue _fun10832
                    }
                case 57:
                    var5 = var3._longestInteractionList;
                    var2 = var5.at;
                    var1 = -1;
                    var2 = var2.bind(var5)(var1);
                    var6 = var3._longestInteractionMap;
                    var5 = var6.get;
                    var1 = var4.interactionId;
                    var1 = var5.bind(var6)(var1);
                    if (var1) {
                        _fun10832_ip = 141;
                        continue _fun10832
                    }
                case 105:
                    var5 = var3._longestInteractionList;
                    var6 = var5.length;
                    var5 = 10;
                    if (!(!(var6 < var5))) {
                        _fun10832_ip = 141;
                        continue _fun10832
                    }
                case 123:
                    var5 = var4.duration;
                    var2 = var2._latency;
                    if (!(var5 > var2)) {
                        _fun10832_ip = 464;
                        continue _fun10832
                    }
                case 141:
                    if (var1) {
                        _fun10832_ip = 219;
                        continue _fun10832
                    }
                case 144:
                    var2 = {};
                    var5 = var4.interactionId;
                    var2.id = var5;
                    var5 = new Array(1);
                    var5[0] = var4;
                    var2.entries = var5;
                    var5 = var4.duration;
                    var2._latency = var5;
                    var7 = var3._longestInteractionMap;
                    var6 = var7.set;
                    var5 = var2.id;
                    var5 = var6.bind(var7)(var5, var2);
                    var6 = var3._longestInteractionList;
                    var5 = var6.push;
                    var5 = var5.bind(var6)(var2);
                    _fun10832_ip = 335;
                    continue _fun10832;
                case 219:
                    var6 = var4.duration;
                    var5 = var1._latency;
                    if (!(!(var6 > var5))) {
                        _fun10832_ip = 307;
                        continue _fun10832
                    }
                case 234:
                    var6 = var4.duration;
                    var5 = var1._latency;
                    var5 = var6 === var5;
                    if (!var5) {
                        _fun10832_ip = 280;
                        continue _fun10832
                    }
                case 252:
                    var7 = var4.startTime;
                    var8 = var1.entries;
                    var6 = 0;
                    var6 = var8[var6];
                    var6 = var6.startTime;
                    var5 = var7 === var6;
                case 280:
                    var2 = var1;
                    if (!var5) {
                        _fun10832_ip = 335;
                        continue _fun10832
                    }
                case 286:
                    var6 = var1.entries;
                    var5 = var6.push;
                    var5 = var5.bind(var6)(var4);
                    var2 = var1;
                    _fun10832_ip = 335;
                    continue _fun10832;
                case 307:
                    var5 = new Array(1);
                    var5[0] = var4;
                    var1.entries = var5;
                    var4 = var4.duration;
                    var1._latency = var4;
                    var2 = var1;
                case 335:
                    var5 = var3._longestInteractionList;
                    var4 = var5.sort;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var0 = arg1;
                        var1 = var0._latency;
                        var0 = arg0;
                        var0 = var0._latency;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    var1 = var3._longestInteractionList;
                    var1 = var1.length;
                    var5 = 10;
                    if (!(var1 > var5)) {
                        _fun10832_ip = 443;
                        continue _fun10832
                    }
                case 377:
                    var4 = var3._longestInteractionList;
                    var1 = var4.splice;
                    var1 = var1.bind(var4)(var5);
                    var5 = var1;
                    var4 = var5[Symbol.iterator];
                    var5 = var4().next;
                    var1 = undefined;
                case 402:
                    var6 = var5().value;
                    var7 = var4;
                    if (!(var7 !== var1)) {
                        _fun10832_ip = 443;
                        continue _fun10832
                    }
                case 413: // try_start_0
                    var8 = var3._longestInteractionMap;
                    var7 = var8.delete;
                    var6 = var6.id;
                    var6 = var7.bind(var8)(var6);
                case 434: // try_end0
                    _fun10832_ip = 402;
                    continue _fun10832;
                case 436: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var4.return();
                    throw var1;
                case 443:
                    var1 = var3._onAfterProcessingINPCandidate;
                    if (!(var0 != var1)) {
                        _fun10832_ip = 464;
                        continue _fun10832
                    }
                case 453:
                    var0 = var1.call;
                    var0 = var0.bind(var1)(var3, var2);
                case 464:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.InteractionManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1054]);