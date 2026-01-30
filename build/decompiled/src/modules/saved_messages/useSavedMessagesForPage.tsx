// modules/saved_messages/useSavedMessagesForPage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun75847: for (var _fun75847_ip = 0;;) switch (_fun75847_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun75847_ip = 45;
                    continue _fun75847
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun75847_ip = 54;
                    continue _fun75847
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun75847_ip = 344;
                    continue _fun75847
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun75847_ip = 322;
                    continue _fun75847
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun75847_ip = 282;
                    continue _fun75847
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun75847_ip = 269;
                    continue _fun75847
                }
            case 109:
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
                    _fun75847_ip = 162;
                    continue _fun75847
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun75847_ip = 178;
                    continue _fun75847
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun75847_ip = 248;
                    continue _fun75847
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun75847_ip = 248;
                    continue _fun75847
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun75847_ip = 233;
                    continue _fun75847
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun75847_ip = 246;
                    continue _fun75847
                }
            case 233:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun75847_ip = 264;
                continue _fun75847;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun75847_ip = 282;
                continue _fun75847;
            case 269:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun75847_ip = 322;
                    continue _fun75847
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun75847_ip = 329;
                    continue _fun75847
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun75848: for (var _fun75848_ip = 0;;) switch (_fun75848_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun75848_ip = 56;
                                continue _fun75848
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
                            _fun75848_ip = 67;
                            continue _fun75848;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun75849: for (var _fun75849_ip = 0;;) switch (_fun75849_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun75849_ip = 23;
                    continue _fun75849
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun75849_ip = 33;
                    continue _fun75849
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
                    _fun75849_ip = 70;
                    continue _fun75849
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun75849_ip = 55;
                    continue _fun75849
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function() { // Original name: getKeys, environment: var1
        var1 = _closure1_slot4;
        var0 = var1.getSavedMessages;
        var2 = var0.bind(var1)();
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.saveData;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var6 = var4[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/useSavedMessagesForPage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useSavedMessagesForPage, environment: var1
        var6 = _closure1_slot3;
        var2 = var6.useState;
        var0 = _closure1_slot7;
        var5 = var2.bind(var6)(var0);
        var4 = _closure1_slot2;
        var2 = undefined;
        var0 = 2;
        var5 = var4.bind(var2)(var5, var0);
        var0 = 0;
        var0 = var5[var0];
        var4 = 1;
        var4 = var5[var4];
        var _closure2_slot0 = var4;
        var5 = var6.useRef;
        var7 = _closure1_slot4;
        var4 = var7.getIsStale;
        var4 = var4.bind(var7)();
        var4 = var5.bind(var6)(var4);
        var _closure2_slot1 = var4;
        var5 = var6.useEffect;
        var4 = function() { // Environment: var3
            var3 = function() { // Original name: handleChange, environment: var0
                _fun75854: for (var _fun75854_ip = 0;;) switch (_fun75854_ip) {
                    case 0:
                        var2 = _closure1_slot4;
                        var0 = var2.getLastChanged;
                        var2 = var0.bind(var2)();
                        var3 = _closure3_slot0;
                        if (!(var3 !== var2)) {
                            _fun75854_ip = 119;
                            continue _fun75854
                        }
                    case 28:
                        _closure3_slot0 = var2;
                        var2 = _closure2_slot1;
                        var2 = var2.current;
                        if (!var2) {
                            _fun75854_ip = 99;
                            continue _fun75854
                        }
                    case 47:
                        var3 = _closure1_slot4;
                        var2 = var3.getIsStale;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun75854_ip = 99;
                            continue _fun75854
                        }
                    case 64:
                        var3 = _closure2_slot1;
                        var2 = false;
                        var3.current = var2;
                        var3 = _closure2_slot0;
                        var1 = _closure1_slot7;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        var1 = var3.bind(var2)(var1);
                        var1 = undefined;
                        return var1;
                    case 99:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var0 = function(arg0) { // Environment: var0
                            _fun75855: for (var _fun75855_ip = 0;;) switch (_fun75855_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = new Array(0);
                                    var10 = 0;
                                    var12 = var0;
                                    var11 = var5;
                                    var1 = arraySpread(var12, var11, var10);
                                    var3 = _closure1_slot4;
                                    var2 = var3.getSavedMessages;
                                    var6 = var2.bind(var3)();
                                    var2 = global;
                                    var4 = var2.Map;
                                    var3 = var6.map;
                                    var2 = function(arg0) { // Environment: var2
                                        var1 = arg0;
                                        var0 = var1.saveData;
                                        var2 = var0.messageId;
                                        var0 = new Array(2);
                                        var0[0] = var2;
                                        var0[1] = var1;
                                        return var0;
                                    };
                                    var12 = var3.bind(var6)(var2);
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var13 = var3;
                                    var2 = new var13[var4](var12, var11);
                                    var3 = var2 instanceof Object ? var2 : var3;
                                    var2 = _closure1_slot5;
                                    var4 = undefined;
                                    var7 = var2.bind(var4)(var5);
                                    var5 = var7.bind(var4)();
                                    var2 = var5.done;
                                    var6 = 1;
                                    if (var2) {
                                        _fun75855_ip = 187;
                                        continue _fun75855
                                    }
                                case 109:
                                    var2 = var5.value;
                                    var9 = var3.has;
                                    var8 = var2.messageId;
                                    var8 = var9.bind(var3)(var8);
                                    if (var8) {
                                        _fun75855_ip = 157;
                                        continue _fun75855
                                    }
                                case 132:
                                    var9 = var0.splice;
                                    var8 = var0.indexOf;
                                    var8 = var8.bind(var0)(var2);
                                    var8 = var9.bind(var0)(var8, var6);
                                    _fun75855_ip = 172;
                                    continue _fun75855;
                                case 157:
                                    var8 = var3.delete;
                                    var2 = var2.messageId;
                                    var2 = var8.bind(var3)(var2);
                                case 172:
                                    var8 = var7.bind(var4)();
                                    var2 = var8.done;
                                    var5 = var8;
                                    if (!var2) {
                                        _fun75855_ip = 109;
                                        continue _fun75855
                                    }
                                case 187:
                                    var2 = _closure1_slot5;
                                    var1 = var3.values;
                                    var1 = var1.bind(var3)();
                                    var3 = var2.bind(var4)(var1);
                                    var2 = var3.bind(var4)();
                                    var1 = var2.done;
                                    if (var1) {
                                        _fun75855_ip = 253;
                                        continue _fun75855
                                    }
                                case 217:
                                    var1 = var2.value;
                                    var5 = var0.push;
                                    var1 = var1.saveData;
                                    var1 = var5.bind(var0)(var1);
                                    var5 = var3.bind(var4)();
                                    var1 = var5.done;
                                    var2 = var5;
                                    if (!var1) {
                                        _fun75855_ip = 217;
                                        continue _fun75855
                                    }
                                case 253:
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var1)(var0);
                    case 119:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot1 = var3;
            var4 = _closure1_slot4;
            var2 = var4.getLastChanged;
            var2 = var2.bind(var4)();
            var _closure3_slot0 = var2;
            var2 = _closure1_slot4;
            var1 = var2.addChangeListener;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot4;
                var1 = var2.removeChangeListener;
                var0 = _closure3_slot1;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var3 = new Array(0);
        var3 = var5.bind(var6)(var4, var3);
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var4[var1];
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 9584, 9592, 2]);