// modules/qualtrics/QualtricsResponseStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var1);
    var3 = var6.create;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = {};
        var0.responses = var2;
        var2 = {};
        var0.displayedQuestions = var2;
        var2 = function(arg0, arg1, arg2) { // Original name: setResponse, environment: var1
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var0 = arg2;
            var _closure3_slot2 = var0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                var5 = arg0;
                var0 = {};
                var1 = {};
                var6 = var5.responses;
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                var3 = _closure3_slot0;
                var2 = {};
                var5 = var5.responses;
                var6 = var5[var3];
                var7 = var2;
                var5 = copyDataProperties(var7, var6);
                var5 = _closure3_slot1;
                var4 = _closure3_slot2;
                var2[var5] = var4;
                var1[var3] = var2;
                var0.responses = var1;
                return var0;
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.setResponse = var2;
        var2 = function(arg0) { // Original name: getSurveyResponses, environment: var1
            _fun87045: for (var _fun87045_ip = 0;;) switch (_fun87045_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var1 = var0.responses;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun87045_ip = 34;
                        continue _fun87045
                    }
                case 32:
                    var0 = {};
                case 34:
                    return var0;
            }
        };
        var0.getSurveyResponses = var2;
        var2 = function(arg0) { // Original name: clearSurveyResponses, environment: var1
            var0 = arg0;
            var _closure3_slot0 = var0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                var3 = arg0;
                var2 = {};
                var4 = var3.responses;
                var5 = var2;
                var0 = copyDataProperties(var5, var4);
                var0 = _closure3_slot0;
                var1 = delete var2[var0];
                var1 = {};
                var4 = var3.displayedQuestions;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var0 = delete var1[var0];
                var0 = {};
                var0.responses = var2;
                var0.displayedQuestions = var1;
                return var0;
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.clearSurveyResponses = var2;
        var2 = function(arg0, arg1) { // Original name: trackDisplayedQuestions, environment: var1
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                _fun87049: for (var _fun87049_ip = 0;;) switch (_fun87049_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = var4.displayedQuestions;
                        var1 = _closure3_slot0;
                        var5 = var3[var1];
                        var1 = null;
                        if (!(var1 == var5)) {
                            _fun87049_ip = 56;
                            continue _fun87049
                        }
                    case 28:
                        var1 = global;
                        var1 = var1.Set;
                        var3 = var1.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var3;
                        var1 = new var8[var1](var7);
                        var5 = var1 instanceof Object ? var1 : var3;
                    case 56:
                        var1 = global;
                        var1 = var1.Set;
                        var3 = var1.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var3;
                        var7 = var5;
                        var1 = new var8[var1](var7, var6);
                        var3 = var1 instanceof Object ? var1 : var3;
                        var _closure4_slot0 = var3;
                        var5 = _closure3_slot1;
                        var1 = var5.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure4_slot0;
                            var1 = var2.add;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0 = var1.bind(var5)(var0);
                        var0 = {};
                        var1 = {};
                        var6 = var4.displayedQuestions;
                        var7 = var1;
                        var4 = copyDataProperties(var7, var6);
                        var2 = _closure3_slot0;
                        var1[var2] = var3;
                        var0.displayedQuestions = var1;
                        return var0;
                }
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.trackDisplayedQuestions = var2;
        var1 = function(arg0) { // Original name: getDisplayedQuestions, environment: var1
            _fun87051: for (var _fun87051_ip = 0;;) switch (_fun87051_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var1 = var0.displayedQuestions;
                    var0 = arg0;
                    var3 = var1[var0];
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun87051_ip = 38;
                        continue _fun87051
                    }
                case 32:
                    var0 = new Array(0);
                    _fun87051_ip = 56;
                    continue _fun87051;
                case 38:
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.from;
                    var0 = var1.bind(var2)(var3);
                case 56:
                    return var0;
            }
        };
        var0.getDisplayedQuestions = var1;
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/qualtrics/QualtricsResponseStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.useQualtricsResponseStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 2]);