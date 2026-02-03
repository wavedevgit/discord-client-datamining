// lib/spellcheck/LanguageDetector.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            var2 = arg0;
            var1 = arg1;
            var3 = this;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var3, var4);
            var4 = false;
            var3._shouldProcess = var4;
            var3._processing = var4;
            var4 = 5;
            var3._minimumTimeRemaining = var4;
            var3._language = var2;
            var3._languageHint = var2;
            var3._onChange = var1;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'language';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._language;
            return var0;
        };
        var0.get = var1;
        var1 = function arg0() {
            _fun60203: for (var _fun60203_ip = 0;;) switch (_fun60203_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1._language;
                    if (!(var0 !== var2)) {
                        _fun60203_ip = 33;
                        continue _fun60203
                    }
                case 16:
                    var1._language = var2;
                    var0 = var1._onChange;
                    var0 = var0.bind(var1)(var2);
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'languageHint';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0._languageHint = var1;
            var0 = undefined;
            return var0;
        };
        var0.set = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'process';
        var0.key = var5;
        var5 = function arg0() {
            _fun60205: for (var _fun60205_ip = 0;;) switch (_fun60205_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = arg0;
                    var _closure3_slot1 = var1;
                    var1 = var2._processing;
                    if (var1) {
                        _fun60205_ip = 53;
                        continue _fun60205
                    }
                case 25:
                    var1 = true;
                    var2._processing = var1;
                    var1 = global;
                    var2 = var1.requestIdleCallback;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        _fun60206: for (var _fun60206_ip = 0;;) switch (_fun60206_ip) {
                            case 0:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var0 = var2.timeRemaining;
                                var3 = var0.bind(var2)();
                                var2 = _closure3_slot0;
                                var2 = var2._minimumTimeRemaining;
                                if (!(!(var3 <= var2))) {
                                    _fun60206_ip = 126;
                                    continue _fun60206
                                }
                            case 36:
                                var2 = _closure3_slot1;
                                var2 = var2.length;
                                var5 = 256;
                                if (!(var2 > var5)) {
                                    _fun60206_ip = 76;
                                    continue _fun60206
                                }
                            case 55:
                                var4 = _closure3_slot1;
                                var3 = var4.slice;
                                var2 = 0;
                                var2 = var3.bind(var4)(var2, var5);
                                _closure3_slot1 = var2;
                            case 76:
                                var5 = _closure3_slot1;
                                var2 = _closure3_slot0;
                                var4 = var2._languageHint;
                                var3 = function arg0, arg1() {
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = arg1;
                                    var _closure5_slot1 = var1;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var1 = 2;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.ensureModule;
                                    var1 = 'discord_spellcheck';
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.then;
                                    var0 = function() { // Environment: var0
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var1 = 2;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.requireModule;
                                        var1 = 'discord_spellcheck';
                                        var1 = var2.bind(var3)(var1);
                                        var1 = var1.cld;
                                        var _closure6_slot0 = var1;
                                        var1 = global;
                                        var2 = var1.Promise;
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var4 = function(arg0, arg1) { // Environment: var0
                                            var1 = arg0;
                                            var _closure7_slot0 = var1;
                                            var1 = arg1;
                                            var _closure7_slot1 = var1;
                                            var4 = _closure6_slot0;
                                            var3 = var4.detect;
                                            var2 = _closure5_slot0;
                                            var1 = {};
                                            var5 = _closure5_slot1;
                                            var1.httpHint = var5;
                                            var5 = 'UTF8';
                                            var1.encodingHint = var5;
                                            var0 = function(arg0, arg1) { // Environment: var0
                                                _fun60210: for (var _fun60210_ip = 0;;) switch (_fun60210_ip) {
                                                    case 0:
                                                        var0 = arg0;
                                                        var1 = arg1;
                                                        var2 = null;
                                                        if (!(var2 == var0)) {
                                                            _fun60210_ip = 158;
                                                            continue _fun60210
                                                        }
                                                    case 15:
                                                        var2 = var1.reliable;
                                                        if (!var2) {
                                                            _fun60210_ip = 108;
                                                            continue _fun60210
                                                        }
                                                    case 26:
                                                        var3 = var1.languages;
                                                        var2 = 0;
                                                        var3 = var3[var2];
                                                        var4 = var3.percent;
                                                        var3 = 90;
                                                        if (!(!(var4 < var3))) {
                                                            _fun60210_ip = 108;
                                                            continue _fun60210
                                                        }
                                                    case 51:
                                                        var3 = var1.languages;
                                                        var3 = var3[var2];
                                                        var4 = var3.score;
                                                        var3 = 500;
                                                        if (!(!(var4 < var3))) {
                                                            _fun60210_ip = 108;
                                                            continue _fun60210
                                                        }
                                                    case 77:
                                                        var3 = _closure7_slot0;
                                                        var1 = var1.languages;
                                                        var1 = var1[var2];
                                                        var2 = var1.code;
                                                        var1 = undefined;
                                                        var1 = var3.bind(var1)(var2);
                                                        _fun60210_ip = 205;
                                                        continue _fun60210;
                                                    case 108:
                                                        var3 = _closure7_slot1;
                                                        var1 = global;
                                                        var4 = var1.Error;
                                                        var1 = var4.prototype;
                                                        var2 = Object.create(var1, {
                                                            constructor: {
                                                                value: var4
                                                            }
                                                        });
                                                        var5 = 'Not enough reliable text.';
                                                        var6 = var2;
                                                        var1 = new var6[var4](var5, var4);
                                                        var2 = var1 instanceof Object ? var1 : var2;
                                                        var1 = undefined;
                                                        var1 = var3.bind(var1)(var2);
                                                        _fun60210_ip = 205;
                                                        continue _fun60210;
                                                    case 158:
                                                        var2 = _closure7_slot1;
                                                        var1 = global;
                                                        var3 = var1.Error;
                                                        var5 = var0.message;
                                                        var1 = var3.prototype;
                                                        var1 = Object.create(var1, {
                                                            constructor: {
                                                                value: var3
                                                            }
                                                        });
                                                        var6 = var1;
                                                        var0 = new var6[var3](var5, var4);
                                                        var1 = var0 instanceof Object ? var0 : var1;
                                                        var0 = undefined;
                                                        var0 = var2.bind(var0)(var1);
                                                    case 205:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var0 = var3.bind(var4)(var2, var1, var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var5 = var1;
                                        var0 = new var5[var2](var4, var3);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var2 = undefined;
                                var4 = var3.bind(var2)(var5, var4);
                                var3 = var4.then;
                                var2 = function(arg0) { // Environment: var1
                                    var2 = _closure3_slot0;
                                    var0 = arg0;
                                    var2.language = var0;
                                    var1 = var2._processEnd;
                                    var0 = _closure4_slot0;
                                    var0 = var0.didTimeout;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = function() { // Environment: var1
                                    var2 = _closure3_slot0;
                                    var1 = var2._processEnd;
                                    var0 = _closure4_slot0;
                                    var0 = var0.didTimeout;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var2, var1);
                                _fun60206_ip = 140;
                                continue _fun60206;
                            case 126:
                                var1 = _closure3_slot0;
                                var0 = var1._processEnd;
                                var0 = var0.bind(var1)();
                            case 140:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var1)(var0);
                case 53:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_processEnd';
        var0.key = var5;
        var4 = function() {
            _fun60213: for (var _fun60213_ip = 0;;) switch (_fun60213_ip) {
                case 0:
                    var1 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun60213_ip = 14;
                        continue _fun60213
                    }
                case 12:
                    var1 = false;
                case 14:
                    var3 = false;
                    var2._processing = var3;
                    if (!var1) {
                        _fun60213_ip = 40;
                        continue _fun60213
                    }
                case 25:
                    var1 = var2._minimumTimeRemaining;
                    var1 = var1 + 1;
                    var2._minimumTimeRemaining = var1;
                case 40:
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/spellcheck/LanguageDetector.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 7441, 2]);