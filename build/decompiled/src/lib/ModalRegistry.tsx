// lib/ModalRegistry.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun110029: for (var _fun110029_ip = 0;;) switch (_fun110029_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun110029_ip = 45;
                    continue _fun110029
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun110029_ip = 54;
                    continue _fun110029
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun110029_ip = 344;
                    continue _fun110029
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun110029_ip = 322;
                    continue _fun110029
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun110029_ip = 282;
                    continue _fun110029
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun110029_ip = 269;
                    continue _fun110029
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
                    _fun110029_ip = 162;
                    continue _fun110029
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun110029_ip = 178;
                    continue _fun110029
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun110029_ip = 248;
                    continue _fun110029
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun110029_ip = 248;
                    continue _fun110029
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun110029_ip = 233;
                    continue _fun110029
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun110029_ip = 246;
                    continue _fun110029
                }
            case 233:
                var8 = _closure1_slot3;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun110029_ip = 264;
                continue _fun110029;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun110029_ip = 282;
                continue _fun110029;
            case 269:
                var6 = _closure1_slot3;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun110029_ip = 322;
                    continue _fun110029
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
                    _fun110029_ip = 329;
                    continue _fun110029
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun110030: for (var _fun110030_ip = 0;;) switch (_fun110030_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun110030_ip = 56;
                                continue _fun110030
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
                            _fun110030_ip = 67;
                            continue _fun110030;
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
    var _closure1_slot2 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun110031: for (var _fun110031_ip = 0;;) switch (_fun110031_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun110031_ip = 23;
                    continue _fun110031
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun110031_ip = 33;
                    continue _fun110031
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
                    _fun110031_ip = 70;
                    continue _fun110031
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun110031_ip = 55;
                    continue _fun110031
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function(arg0) { // Original name: ModalRegistry, environment: var4
            _fun110033: for (var _fun110033_ip = 0;;) switch (_fun110033_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var3 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var2.modals = var5;
                    var1 = global;
                    var3 = var1.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var4;
                    var3 = new var13[var3](var12);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = _closure1_slot2;
                    var6 = var3.bind(var0)(var5);
                    var5 = var6.bind(var0)();
                    var3 = var5.done;
                    if (var3) {
                        _fun110033_ip = 160;
                        continue _fun110033
                    }
                case 83:
                    var8 = _closure1_slot2;
                    var3 = var5.value;
                    var3 = var3.stores;
                    var9 = var8.bind(var0)(var3);
                    var8 = var9.bind(var0)();
                    var3 = var8.done;
                    if (var3) {
                        _fun110033_ip = 145;
                        continue _fun110033
                    }
                case 115:
                    var10 = var8.value;
                    var3 = var4.add;
                    var3 = var3.bind(var4)(var10);
                    var10 = var9.bind(var0)();
                    var3 = var10.done;
                    var8 = var10;
                    if (!var3) {
                        _fun110033_ip = 115;
                        continue _fun110033
                    }
                case 145:
                    var8 = var6.bind(var0)();
                    var3 = var8.done;
                    var5 = var8;
                    if (!var3) {
                        _fun110033_ip = 83;
                        continue _fun110033
                    }
                case 160:
                    var3 = var1.Array;
                    var1 = var3.from;
                    var1 = var1.bind(var3)(var4);
                    var2.stores = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getStores';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.stores;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'getOpenModal';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun110035: for (var _fun110035_ip = 0;;) switch (_fun110035_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.modals;
                    var2 = var3.findIndex;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.isOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var4 = var2.bind(var3)(var1);
                    var1 = -1;
                    if (!(var1 !== var4)) {
                        _fun110035_ip = 195;
                        continue _fun110035
                    }
                case 42:
                    var0 = var0.modals;
                    var2 = var0[var4];
                    var0 = var2.getProps;
                    var3 = null;
                    var0 = var3 == var0;
                    var1 = undefined;
                    if (var0) {
                        _fun110035_ip = 79;
                        continue _fun110035
                    }
                case 69:
                    var0 = var2.getProps;
                    var1 = var0.bind(var2)();
                case 79:
                    if (!(var3 == var1)) {
                        _fun110035_ip = 85;
                        continue _fun110035
                    }
                case 83:
                    var1 = {};
                case 85:
                    var0 = {};
                    var0.key = var4;
                    var4 = var2.getComponent;
                    var4 = var4.bind(var2)();
                    var0.component = var4;
                    var0.props = var1;
                    var1 = var2.closable;
                    var1 = var3 == var1;
                    if (var1) {
                        _fun110035_ip = 129;
                        continue _fun110035
                    }
                case 123:
                    var1 = var2.closable;
                case 129:
                    var0.closable = var1;
                    var1 = var2.backdropInstant;
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun110035_ip = 153;
                        continue _fun110035
                    }
                case 147:
                    var1 = var2.backdropInstant;
                case 153:
                    var0.backdropInstant = var1;
                    var1 = var2.backdropStyle;
                    var0.backdropStyle = var1;
                    var1 = var2.disableAnimation;
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun110035_ip = 188;
                        continue _fun110035
                    }
                case 182:
                    var1 = var2.disableAnimation;
                case 188:
                    var0.disableAnimation = var1;
                    return var0;
                case 195:
                    var0 = null;
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/ModalRegistry.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);