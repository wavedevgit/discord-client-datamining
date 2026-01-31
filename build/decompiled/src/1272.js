// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun13707: for (var _fun13707_ip = 0;;) switch (_fun13707_ip) {
        case 0:
            var7 = require;
            var5 = exports;
            var8 = dependencyMap;
            var0 = this;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var8;
            var2 = var0;
            if (!var0) {
                _fun13707_ip = 34;
                continue _fun13707
            }
        case 28:
            var2 = var0.__createBinding;
        case 34:
            if (var2) {
                _fun13707_ip = 68;
                continue _fun13707
            }
        case 37:
            var3 = global;
            var3 = var3.Object;
            var3 = var3.create;
            if (var3) {
                _fun13707_ip = 60;
                continue _fun13707
            }
        case 53:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun13710: for (var _fun13710_ip = 0;;) switch (_fun13710_ip) {
                    case 0:
                        var2 = arg2;
                        var3 = arg3;
                        var0 = undefined;
                        if (!(var0 === var3)) {
                            _fun13710_ip = 15;
                            continue _fun13710
                        }
                    case 12:
                        var3 = var2;
                    case 15:
                        var1 = arg1;
                        var2 = var1[var2];
                        var1 = arg0;
                        var1[var3] = var2;
                        return var0;
                }
            };
            _fun13707_ip = 65;
            continue _fun13707;
        case 60:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun13708: for (var _fun13708_ip = 0;;) switch (_fun13708_ip) {
                    case 0:
                        var7 = arg1;
                        var6 = arg2;
                        var5 = arg3;
                        var _closure2_slot0 = var7;
                        var _closure2_slot1 = var6;
                        var0 = undefined;
                        if (!(var0 === var5)) {
                            _fun13708_ip = 28;
                            continue _fun13708
                        }
                    case 25:
                        var5 = var6;
                    case 28:
                        var1 = global;
                        var4 = var1.Object;
                        var2 = var4.getOwnPropertyDescriptor;
                        var4 = var2.bind(var4)(var7, var6);
                        var2 = var4;
                        if (!var4) {
                            _fun13708_ip = 94;
                            continue _fun13708
                        }
                    case 54:
                        var6 = 'get';
                        var6 = var6 in var4;
                        if (var6) {
                            _fun13708_ip = 82;
                            continue _fun13708
                        }
                    case 65:
                        var6 = var4.writable;
                        if (var6) {
                            _fun13708_ip = 80;
                            continue _fun13708
                        }
                    case 74:
                        var6 = var4.configurable;
                    case 80:
                        _fun13708_ip = 91;
                        continue _fun13708;
                    case 82:
                        var7 = var7.__esModule;
                        var6 = !var7;
                    case 91:
                        var2 = !var6;
                    case 94:
                        if (var2) {
                            _fun13708_ip = 117;
                            continue _fun13708
                        }
                    case 97:
                        var2 = {};
                        var6 = true;
                        var2.enumerable = var6;
                        var3 = function() { // Original name: get, environment: var3
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var1[var0];
                            return var0;
                        };
                        var2.get = var3;
                        var4 = var2;
                    case 117:
                        var3 = var1.Object;
                        var2 = var3.defineProperty;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1, var5, var4);
                        return var0;
                }
            };
        case 65:
            var2 = var3;
        case 68:
            var _closure1_slot2 = var2;
            var4 = var0;
            if (!var4) {
                _fun13707_ip = 84;
                continue _fun13707
            }
        case 78:
            var4 = var0.__exportStar;
        case 84:
            if (var4) {
                _fun13707_ip = 92;
                continue _fun13707
            }
        case 87:
            var4 = function(arg0, arg1) { // Environment: var1
                _fun13711: for (var _fun13711_ip = 0;;) switch (_fun13711_ip) {
                    case 0:
                        var10 = arg0;
                        var9 = arg1;
                        var7 = var10;
                        var0 = undefined;
                        var2 = global;
                        var1 = 'default';
                        for (var4 in var7)
                            case 28: {
                                case 37: var12 = var4;
                                var11 = var1 === var12;
                                if (var11) {
                                    _fun13711_ip = 75;
                                    continue _fun13711
                                }
                                case 47: var13 = var2.Object;
                                var13 = var13.prototype;
                                var14 = var13.hasOwnProperty;
                                var13 = var14.call;
                                var11 = var13.bind(var14)(var9, var12);
                                case 75: if (var11) {
                                    _fun13711_ip = 28;
                                    continue _fun13711
                                }
                                case 78: var11 = _closure1_slot2;
                                var11 = var11.bind(var0)(var9, var10, var12);
                                _fun13711_ip = 28;
                                continue _fun13711;
                            }
                    case 91:
                        return var0;
                }
            };
        case 92:
            var2 = global;
            var10 = var2.Object;
            var9 = var10.defineProperty;
            var3 = {};
            var6 = true;
            var3.value = var6;
            var0 = '__esModule';
            var0 = var9.bind(var10)(var5, var0, var3);
            var0 = undefined;
            var5.makeDataFormatters = var0;
            var5.dataFormatterCache = var0;
            var5.FormatBuilder = var0;
            var5.bindFormatValues = var0;
            var5.runtimeHashMessageKey = var0;
            var5.IntlManager = var0;
            var5.DEFAULT_LOCALE = var0;
            var5.InternalIntlMessage = var0;
            var5.createLoader = var0;
            var5.loadAllMessagesInLocale = var0;
            var5.waitForAllDefaultIntlMessagesLoaded = var0;
            var5.MessageLoader = var0;
            var5.chainMessagesObjects = var0;
            var5.makeMessagesProxy = var0;
            var11 = var2.Object;
            var10 = var11.defineProperty;
            var9 = {};
            var9.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.makeDataFormatters;
                return var0;
            };
            var9.get = var3;
            var3 = 'makeDataFormatters';
            var3 = var10.bind(var11)(var5, var3, var9);
            var11 = var2.Object;
            var10 = var11.defineProperty;
            var9 = {};
            var9.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.dataFormatterCache;
                return var0;
            };
            var9.get = var3;
            var3 = 'dataFormatterCache';
            var3 = var10.bind(var11)(var5, var3, var9);
            var11 = var2.Object;
            var10 = var11.defineProperty;
            var9 = {};
            var9.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.FormatBuilder;
                return var0;
            };
            var9.get = var3;
            var3 = 'FormatBuilder';
            var3 = var10.bind(var11)(var5, var3, var9);
            var11 = var2.Object;
            var10 = var11.defineProperty;
            var9 = {};
            var9.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.bindFormatValues;
                return var0;
            };
            var9.get = var3;
            var3 = 'bindFormatValues';
            var3 = var10.bind(var11)(var5, var3, var9);
            var3 = 3;
            var3 = var8[var3];
            var3 = var7.bind(var0)(var3);
            var3 = var4.bind(var0)(var3, var5);
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var4.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.runtimeHashMessageKey;
                return var0;
            };
            var4.get = var3;
            var3 = 'runtimeHashMessageKey';
            var3 = var7.bind(var8)(var5, var3, var4);
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var4.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.IntlManager;
                return var0;
            };
            var4.get = var3;
            var3 = 'IntlManager';
            var3 = var7.bind(var8)(var5, var3, var4);
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var4.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.DEFAULT_LOCALE;
                return var0;
            };
            var4.get = var3;
            var3 = 'DEFAULT_LOCALE';
            var3 = var7.bind(var8)(var5, var3, var4);
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var4.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.InternalIntlMessage;
                return var0;
            };
            var4.get = var3;
            var3 = 'InternalIntlMessage';
            var3 = var7.bind(var8)(var5, var3, var4);
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var4.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.createLoader;
                return var0;
            };
            var4.get = var3;
            var3 = 'createLoader';
            var3 = var7.bind(var8)(var5, var3, var4);
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var4.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.loadAllMessagesInLocale;
                return var0;
            };
            var4.get = var3;
            var3 = 'loadAllMessagesInLocale';
            var3 = var7.bind(var8)(var5, var3, var4);
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var4.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.waitForAllDefaultIntlMessagesLoaded;
                return var0;
            };
            var4.get = var3;
            var3 = 'waitForAllDefaultIntlMessagesLoaded';
            var3 = var7.bind(var8)(var5, var3, var4);
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var4.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.MessageLoader;
                return var0;
            };
            var4.get = var3;
            var3 = 'MessageLoader';
            var3 = var7.bind(var8)(var5, var3, var4);
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var4.enumerable = var6;
            var3 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.chainMessagesObjects;
                return var0;
            };
            var4.get = var3;
            var3 = 'chainMessagesObjects';
            var3 = var7.bind(var8)(var5, var3, var4);
            var4 = var2.Object;
            var3 = var4.defineProperty;
            var2 = {};
            var2.enumerable = var6;
            var1 = function() { // Original name: get, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.makeMessagesProxy;
                return var0;
            };
            var2.get = var1;
            var1 = 'makeMessagesProxy';
            var1 = var3.bind(var4)(var5, var1, var2);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1273, 1275, 1276, 1283, 1288, 1290, 1291, 1292, 1293]);