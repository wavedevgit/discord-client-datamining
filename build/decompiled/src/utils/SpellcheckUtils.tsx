// utils/SpellcheckUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun59974: for (var _fun59974_ip = 0;;) switch (_fun59974_ip) {
        case 0:
            var5 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var6;
            var0 = function() { // Original name: isElectronBuiltInSpellcheckerSupported, environment: var1
                _fun59975: for (var _fun59975_ip = 0;;) switch (_fun59975_ip) {
                    case 0:
                        var1 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var5 = 1;
                        var0 = var0[var5];
                        var4 = undefined;
                        var0 = var1.bind(var4)(var0);
                        var1 = null;
                        var3 = var1 == var0;
                        var0 = undefined;
                        if (var3) {
                            _fun59975_ip = 59;
                            continue _fun59975
                        }
                    case 36:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var2 = var3.bind(var4)(var2);
                        var0 = var2.spellCheck;
                    case 59:
                        var0 = var1 != var0;
                        return var0;
                }
            };
            var _closure1_slot5 = var0;
            var3 = function() { // Original name: isSupported, environment: var1
                _fun59976: for (var _fun59976_ip = 0;;) switch (_fun59976_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 2;
                        var0 = var2[var0];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var0);
                        var0 = var3.isDesktop;
                        var0 = var0.bind(var3)();
                        if (!var0) {
                            _fun59976_ip = 46;
                            continue _fun59976
                        }
                    case 38:
                        var1 = _closure1_slot5;
                        var0 = var1.bind(var2)();
                    case 46:
                        return var0;
                }
            };
            var0 = function() { // Original name: _setEnabled, environment: var1
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun59979: for (var _fun59979_ip = 0;;) switch (_fun59979_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun59979_ip = 47;
                                    continue _fun59979
                                }
                            case 7:
                                var1 = _closure1_slot4;
                                SaveGenerator(address = 18);
                            case 16:
                                return var1;
                            case 18:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun59979_ip = 44;
                                    continue _fun59979
                                }
                            case 24:
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun59979_ip = 39;
                                    continue _fun59979
                                }
                            case 30:
                                var2 = arg0;
                                var1.enabled = var2;
                            case 39:
                                var2 = undefined;
                                return var2;
                            case 44:
                                return var1;
                            case 47:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot6 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot6 = var0;
            var0 = function() { // Original name: _setLearnedWords, environment: var1
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun59982: for (var _fun59982_ip = 0;;) switch (_fun59982_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun59982_ip = 52;
                                    continue _fun59982
                                }
                            case 7:
                                var1 = _closure1_slot4;
                                SaveGenerator(address = 18);
                            case 16:
                                return var1;
                            case 18:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun59982_ip = 49;
                                    continue _fun59982
                                }
                            case 24:
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun59982_ip = 44;
                                    continue _fun59982
                                }
                            case 30:
                                var3 = var1.setLearnedWords;
                                var2 = arg0;
                                var2 = var3.bind(var1)(var2);
                            case 44:
                                var2 = undefined;
                                return var2;
                            case 49:
                                return var1;
                            case 52:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot7 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot7 = var0;
            var0 = function() { // Original name: _isMisspelled, environment: var1
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun59985: for (var _fun59985_ip = 0;;) switch (_fun59985_ip) {
                            case 0:
                                StartGenerator();
                                var6 = arguments[1];
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun59985_ip = 78;
                                    continue _fun59985
                                }
                            case 10:
                                var1 = undefined;
                                if (!(var6 === var1)) {
                                    _fun59985_ip = 18;
                                    continue _fun59985
                                }
                            case 16:
                                var6 = false;
                            case 18:
                                SaveGenerator(address = 22);
                            case 20:
                                return var1;
                            case 22:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun59985_ip = 75;
                                    continue _fun59985
                                }
                            case 28:
                                var2 = _closure1_slot4;
                                SaveGenerator(address = 39);
                            case 37:
                                return var2;
                            case 39:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun59985_ip = 72;
                                    continue _fun59985
                                }
                            case 45:
                                var3 = null;
                                var3 = var3 != var2;
                                if (!var3) {
                                    _fun59985_ip = 69;
                                    continue _fun59985
                                }
                            case 54:
                                var5 = var2.isMisspelled;
                                var4 = arg0;
                                var3 = var5.bind(var2)(var4, var6);
                            case 69:
                                return var3;
                            case 72:
                                return var2;
                            case 75:
                                return var1;
                            case 78:
                                return var0;
                        }
                    };
                    var1 = var0.next;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot8 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot8 = var0;
            var0 = function() { // Original name: _getCorrections, environment: var1
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun59988: for (var _fun59988_ip = 0;;) switch (_fun59988_ip) {
                            case 0:
                                StartGenerator();
                                var5 = arguments[1];
                                var6 = arguments[2];
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun59988_ip = 106;
                                    continue _fun59988
                                }
                            case 13:
                                var1 = undefined;
                                if (!(var5 === var1)) {
                                    _fun59988_ip = 21;
                                    continue _fun59988
                                }
                            case 19:
                                var5 = false;
                            case 21:
                                if (!(var6 === var1)) {
                                    _fun59988_ip = 28;
                                    continue _fun59988
                                }
                            case 25:
                                var6 = 5;
                            case 28:
                                SaveGenerator(address = 32);
                            case 30:
                                return var1;
                            case 32:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun59988_ip = 103;
                                    continue _fun59988
                                }
                            case 38:
                                var2 = _closure1_slot4;
                                SaveGenerator(address = 49);
                            case 47:
                                return var2;
                            case 49:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun59988_ip = 100;
                                    continue _fun59988
                                }
                            case 55:
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun59988_ip = 93;
                                    continue _fun59988
                                }
                            case 61:
                                var4 = var2.getCorrectionsForMisspelling;
                                var3 = arg0;
                                var5 = var4.bind(var2)(var3, var5);
                                var4 = var5.slice;
                                var3 = 0;
                                var3 = var4.bind(var5)(var3, var6);
                                _fun59988_ip = 97;
                                continue _fun59988;
                            case 93:
                                var3 = new Array(0);
                            case 97:
                                return var3;
                            case 100:
                                return var2;
                            case 103:
                                return var1;
                            case 106:
                                return var0;
                        }
                    };
                    var1 = var0.next;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot9 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot9 = var0;
            var0 = function() { // Original name: _replaceWithCorrection, environment: var1
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun59991: for (var _fun59991_ip = 0;;) switch (_fun59991_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun59991_ip = 52;
                                    continue _fun59991
                                }
                            case 7:
                                var1 = _closure1_slot4;
                                SaveGenerator(address = 18);
                            case 16:
                                return var1;
                            case 18:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun59991_ip = 49;
                                    continue _fun59991
                                }
                            case 24:
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun59991_ip = 44;
                                    continue _fun59991
                                }
                            case 30:
                                var3 = var1.replaceMisspelling;
                                var2 = arg0;
                                var2 = var3.bind(var1)(var2);
                            case 44:
                                var2 = undefined;
                                return var2;
                            case 49:
                                return var1;
                            case 52:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot10 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot10 = var0;
            var0 = function() { // Original name: _setAppLocale, environment: var1
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun59994: for (var _fun59994_ip = 0;;) switch (_fun59994_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun59994_ip = 52;
                                    continue _fun59994
                                }
                            case 7:
                                var1 = _closure1_slot4;
                                SaveGenerator(address = 18);
                            case 16:
                                return var1;
                            case 18:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun59994_ip = 49;
                                    continue _fun59994
                                }
                            case 24:
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun59994_ip = 44;
                                    continue _fun59994
                                }
                            case 30:
                                var3 = var1.setAppLocale;
                                var2 = arg0;
                                var2 = var3.bind(var1)(var2);
                            case 44:
                                var2 = undefined;
                                return var2;
                            case 49:
                                return var1;
                            case 52:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot11 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot11 = var0;
            var0 = global;
            var9 = var0.Object;
            var8 = var9.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var4);
            var0 = 0;
            var4 = var6[var0];
            var0 = undefined;
            var4 = var7.bind(var0)(var4);
            var _closure1_slot3 = var4;
            var7 = var3.bind(var0)();
            var4 = null;
            if (!var7) {
                _fun59974_ip = 174;
                continue _fun59974
            }
        case 152:
            var7 = 3;
            var7 = var6[var7];
            var8 = var5.bind(var0)(var7);
            var7 = var8.install;
            var4 = var7.bind(var8)();
        case 174:
            var _closure1_slot4 = var4;
            var4 = 4;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'utils/SpellcheckUtils.tsx';
            var4 = var5.bind(var6)(var4);
            var2.isSupported = var3;
            var3 = function() { // Original name: setEnabled, environment: var1
                var0 = undefined;
                var3 = _closure1_slot6;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.setEnabled = var3;
            var3 = function() { // Original name: setLearnedWords, environment: var1
                var0 = undefined;
                var3 = _closure1_slot7;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.setLearnedWords = var3;
            var3 = function() { // Original name: isMisspelled, environment: var1
                var0 = undefined;
                var3 = _closure1_slot8;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.isMisspelled = var3;
            var3 = function() { // Original name: getCorrections, environment: var1
                var0 = undefined;
                var3 = _closure1_slot9;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.getCorrections = var3;
            var3 = function() { // Original name: replaceWithCorrection, environment: var1
                var0 = undefined;
                var3 = _closure1_slot10;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.replaceWithCorrection = var3;
            var3 = function() { // Original name: setAppLocale, environment: var1
                var0 = undefined;
                var3 = _closure1_slot11;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.setAppLocale = var3;
            var1 = function(arg0) { // Original name: addResultListener, environment: var1
                _fun60001: for (var _fun60001_ip = 0;;) switch (_fun60001_ip) {
                    case 0:
                        var2 = _closure1_slot5;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun60001_ip = 25;
                            continue _fun60001
                        }
                    case 18:
                        var2 = function() { // Environment: var1
                            var0 = undefined;
                            return var0;
                        };
                        return var2;
                    case 25:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 1;
                        var0 = var4[var0];
                        var0 = var2.bind(var3)(var0);
                        var4 = var0.spellCheck;
                        var3 = var4.on;
                        var2 = 'spellcheck-result';
                        var0 = arg0;
                        var0 = var3.bind(var4)(var2, var0);
                        var2 = null;
                        if (!(var2 == var0)) {
                            _fun60001_ip = 83;
                            continue _fun60001
                        }
                    case 78:
                        var0 = function() { // Environment: var1
                            var0 = undefined;
                            return var0;
                        };
                    case 83:
                        return var0;
                }
            };
            var2.addResultListener = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3033, 478, 7399, 2]);