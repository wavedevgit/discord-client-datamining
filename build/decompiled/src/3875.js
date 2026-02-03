// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34947: for (var _fun34947_ip = 0;;) switch (_fun34947_ip) {
        case 0:
            var6 = require;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var7;
            var0 = function arg0() {
                _fun34948: for (var _fun34948_ip = 0;;) switch (_fun34948_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = var2.getScrollableNode;
                        if (var0) {
                            _fun34948_ip = 36;
                            continue _fun34948
                        }
                    case 12:
                        var1 = var2.getNativeScrollRef;
                        var0 = var2;
                        if (!var1) {
                            _fun34948_ip = 34;
                            continue _fun34948
                        }
                    case 24:
                        var1 = var2.getNativeScrollRef;
                        var0 = var1.bind(var2)();
                    case 34:
                        _fun34948_ip = 46;
                        continue _fun34948;
                    case 36:
                        var1 = var2.getScrollableNode;
                        var0 = var1.bind(var2)();
                    case 46:
                        return var0;
                }
            };
            var _closure1_slot7 = var0;
            var0 = function arg0() {
                _fun34949: for (var _fun34949_ip = 0;;) switch (_fun34949_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure2_slot0 = var0;
                        var4 = _closure1_slot3;
                        var1 = global;
                        var1 = var1.Map;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var6 = var2;
                        var1 = new var6[var1](var5);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.current;
                        var _closure2_slot1 = var2;
                        var4 = _closure1_slot3;
                        var2 = -1;
                        var2 = var4.bind(var1)(var2);
                        var _closure2_slot2 = var2;
                        var0 = _closure1_slot3;
                        var2 = null;
                        var0 = var0.bind(var1)(var2);
                        var1 = var0.current;
                        if (var1) {
                            _fun34949_ip = 130;
                            continue _fun34949
                        }
                    case 98:
                        var1 = function arg0() {
                            _fun34950: for (var _fun34950_ip = 0;;) switch (_fun34950_ip) {
                                case 0:
                                    var3 = arg0;
                                    var _closure3_slot0 = var3;
                                    if (!var3) {
                                        _fun34950_ip = 159;
                                        continue _fun34950
                                    }
                                case 15:
                                    var4 = _closure2_slot2;
                                    var2 = _closure2_slot0;
                                    var5 = undefined;
                                    var2 = var2.bind(var5)(var3);
                                    var4.current = var2;
                                    var4 = _closure2_slot3;
                                    var2 = function() { // Environment: var0
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 3;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.findNodeHandle;
                                        var0 = _closure3_slot0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var4.getTag = var2;
                                    var2 = _closure2_slot3;
                                    var2.current = var3;
                                    var2 = _closure2_slot1;
                                    var2 = var2.size;
                                    if (!var2) {
                                        _fun34950_ip = 159;
                                        continue _fun34950
                                    }
                                case 76:
                                    var3 = _closure2_slot3;
                                    var2 = null;
                                    var4 = var2 == var3;
                                    var3 = undefined;
                                    if (var4) {
                                        _fun34950_ip = 124;
                                        continue _fun34950
                                    }
                                case 91:
                                    var4 = _closure2_slot3;
                                    var4 = var4.getTag;
                                    var4 = var2 == var4;
                                    var3 = undefined;
                                    if (var4) {
                                        _fun34950_ip = 124;
                                        continue _fun34950
                                    }
                                case 110:
                                    var5 = _closure2_slot3;
                                    var4 = var5.getTag;
                                    var3 = var4.bind(var5)();
                                case 124:
                                    var4 = var2 != var3;
                                    var2 = null;
                                    if (!var4) {
                                        _fun34950_ip = 136;
                                        continue _fun34950
                                    }
                                case 133:
                                    var2 = var3;
                                case 136:
                                    var _closure3_slot1 = var2;
                                    var2 = _closure2_slot1;
                                    var1 = var2.forEach;
                                    var0 = function(arg0, arg1) { // Environment: var0
                                        _fun34952: for (var _fun34952_ip = 0;;) switch (_fun34952_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var4 = arg1;
                                                var0 = null;
                                                if (!(var0 != var1)) {
                                                    _fun34952_ip = 18;
                                                    continue _fun34952
                                                }
                                            case 12:
                                                var0 = undefined;
                                                var0 = var1.bind(var0)();
                                            case 18:
                                                var3 = _closure2_slot1;
                                                var2 = var3.set;
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var1 = var4.bind(var0)(var1);
                                                var1 = var2.bind(var3)(var4, var1);
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 159:
                                    var0 = _closure2_slot2;
                                    var0 = var0.current;
                                    return var0;
                            }
                        };
                        var _closure2_slot3 = var1;
                        var3 = function(arg0) { // Environment: var3
                            _fun34953: for (var _fun34953_ip = 0;;) switch (_fun34953_ip) {
                                case 0:
                                    var4 = arg0;
                                    var _closure3_slot0 = var4;
                                    var2 = _closure2_slot3;
                                    var3 = null;
                                    var6 = var3 == var2;
                                    var2 = undefined;
                                    var5 = undefined;
                                    if (var6) {
                                        _fun34953_ip = 62;
                                        continue _fun34953
                                    }
                                case 29:
                                    var6 = _closure2_slot3;
                                    var6 = var6.getTag;
                                    var6 = var3 == var6;
                                    var5 = undefined;
                                    if (var6) {
                                        _fun34953_ip = 62;
                                        continue _fun34953
                                    }
                                case 48:
                                    var7 = _closure2_slot3;
                                    var6 = var7.getTag;
                                    var5 = var6.bind(var7)();
                                case 62:
                                    var6 = var3 != var5;
                                    var3 = null;
                                    if (!var6) {
                                        _fun34953_ip = 74;
                                        continue _fun34953
                                    }
                                case 71:
                                    var3 = var5;
                                case 74:
                                    var3 = var4.bind(var2)(var3);
                                    var2 = _closure2_slot1;
                                    var1 = var2.set;
                                    var1 = var1.bind(var2)(var4, var3);
                                    var0 = function() { // Environment: var0
                                        _fun34954: for (var _fun34954_ip = 0;;) switch (_fun34954_ip) {
                                            case 0:
                                                var4 = _closure2_slot1;
                                                var3 = var4.get;
                                                var2 = _closure3_slot0;
                                                var3 = var3.bind(var4)(var2);
                                                var2 = null;
                                                if (!(var2 != var3)) {
                                                    _fun34954_ip = 36;
                                                    continue _fun34954
                                                }
                                            case 30:
                                                var2 = undefined;
                                                var2 = var3.bind(var2)();
                                            case 36:
                                                var2 = _closure2_slot1;
                                                var1 = var2.delete;
                                                var0 = _closure3_slot0;
                                                var0 = var1.bind(var2)(var0);
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    return var0;
                            }
                        };
                        var1.observe = var3;
                        var1.current = var2;
                        var0.current = var1;
                    case 130:
                        var0 = var0.current;
                        return var0;
                }
            };
            var _closure1_slot8 = var0;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var1);
            var0 = 0;
            var4 = var7[var0];
            var1 = arg2;
            var0 = undefined;
            var1 = var1.bind(var0)(var4);
            var _closure1_slot2 = var1;
            var1 = 1;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var4 = var1.useRef;
            var _closure1_slot3 = var4;
            var1 = var1.useState;
            var _closure1_slot4 = var1;
            var5 = 2;
            var1 = var7[var5];
            var4 = var6.bind(var0)(var1);
            var1 = var4.shouldBeUseWeb;
            var1 = var1.bind(var4)();
            var4 = var7[var5];
            var8 = var6.bind(var0)(var4);
            var4 = var8.isIOS;
            var4 = var4.bind(var8)();
            if (var4) {
                _fun34947_ip = 182;
                continue _fun34947
            }
        case 163:
            var5 = var7[var5];
            var6 = var6.bind(var0)(var5);
            var5 = var6.isMacOS;
            var4 = var5.bind(var6)();
        case 182:
            var _closure1_slot5 = var4;
            var4 = {};
            var5 = 'function pnpm_useAnimatedRefTs1(){const{tagOrWrapper,viewName}=this.__closure;const f=function(){return tagOrWrapper.value;};if(viewName){f.viewName=viewName;}return f;}';
            var4.code = var5;
            var _closure1_slot6 = var4;
            if (var1) {
                _fun34947_ip = 212;
                continue _fun34947
            }
        case 205:
            var1 = function() {
                _fun34957: for (var _fun34957_ip = 0;;) switch (_fun34957_ip) {
                    case 0:
                        var5 = _closure1_slot4;
                        var4 = undefined;
                        var0 = function() { // Environment: var8
                            _fun34958: for (var _fun34958_ip = 0;;) switch (_fun34958_ip) {
                                case 0:
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var0 = 2;
                                    var0 = var3[var0];
                                    var4 = undefined;
                                    var2 = var2.bind(var4)(var0);
                                    var0 = var2.isFabric;
                                    var2 = var0.bind(var2)();
                                    var3 = null;
                                    var0 = null;
                                    if (var2) {
                                        _fun34958_ip = 82;
                                        continue _fun34958
                                    }
                                case 42:
                                    var2 = _closure1_slot5;
                                    var0 = null;
                                    if (!var2) {
                                        _fun34958_ip = 82;
                                        continue _fun34958
                                    }
                                case 51:
                                    var2 = _closure1_slot0;
                                    var5 = _closure1_slot1;
                                    var1 = 4;
                                    var1 = var5[var1];
                                    var2 = var2.bind(var4)(var1);
                                    var1 = var2.makeMutable;
                                    var0 = var1.bind(var2)(var3);
                                case 82:
                                    return var0;
                            }
                        };
                        var0 = var5.bind(var4)(var0);
                        var3 = _closure1_slot2;
                        var2 = 1;
                        var0 = var3.bind(var4)(var0, var2);
                        var1 = 0;
                        var11 = var0[var1];
                        var _closure2_slot0 = var11;
                        var0 = function() { // Environment: var8
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.makeMutable;
                            var0 = null;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0 = var5.bind(var4)(var0);
                        var0 = var3.bind(var4)(var0, var2);
                        var12 = var0[var1];
                        var _closure2_slot1 = var12;
                        var1 = _closure1_slot8;
                        var0 = function(arg0) { // Environment: var8
                            _fun34960: for (var _fun34960_ip = 0;;) switch (_fun34960_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var1 = 2;
                                    var1 = var4[var1];
                                    var5 = undefined;
                                    var2 = var2.bind(var5)(var1);
                                    var1 = var2.isFabric;
                                    var1 = var1.bind(var2)();
                                    if (var1) {
                                        _fun34960_ip = 50;
                                        continue _fun34960
                                    }
                                case 41:
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 3;
                                        var1 = var3[var1];
                                        var4 = undefined;
                                        var2 = var2.bind(var4)(var1);
                                        var1 = var2.findNodeHandle;
                                        var3 = _closure1_slot7;
                                        var0 = arg0;
                                        var0 = var3.bind(var4)(var0);
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    _fun34960_ip = 76;
                                    continue _fun34960;
                                case 50:
                                    var2 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var0 = 5;
                                    var0 = var4[var0];
                                    var0 = var2.bind(var5)(var0);
                                    var1 = var0.getShadowNodeWrapperFromRef;
                                case 76:
                                    var2 = _closure2_slot1;
                                    var1 = var1.bind(var5)(var3);
                                    var2.value = var1;
                                    var1 = _closure2_slot0;
                                    if (!var1) {
                                        _fun34960_ip = 152;
                                        continue _fun34960
                                    }
                                case 101:
                                    var2 = _closure2_slot0;
                                    var4 = null;
                                    var6 = var4 == var3;
                                    var1 = undefined;
                                    if (var6) {
                                        _fun34960_ip = 137;
                                        continue _fun34960
                                    }
                                case 116:
                                    var3 = var3.viewConfig;
                                    var4 = var4 == var3;
                                    var1 = undefined;
                                    if (var4) {
                                        _fun34960_ip = 137;
                                        continue _fun34960
                                    }
                                case 131:
                                    var1 = var3.uiViewClassName;
                                case 137:
                                    if (var1) {
                                        _fun34960_ip = 146;
                                        continue _fun34960
                                    }
                                case 140:
                                    var1 = 'RCTView';
                                case 146:
                                    var2.value = var1;
                                case 152:
                                    var0 = _closure2_slot1;
                                    var0 = var0.value;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var4)(var0);
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var5 = 6;
                        var1 = var1[var5];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.shareableMappingCache;
                        var1 = var2.get;
                        var1 = var1.bind(var2)(var0);
                        if (var1) {
                            _fun34957_ip = 236;
                            continue _fun34957
                        }
                    case 121:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var3 = 7;
                        var3 = var1[var3];
                        var7 = var2.bind(var4)(var3);
                        var6 = var7.makeShareableCloneRecursive;
                        var3 = {};
                        var8 = function() {
                            _fun34962: for (var _fun34962_ip = 0;;) switch (_fun34962_ip) {
                                case 0:
                                    var0 = function() {
                                        var0 = _closure2_slot1;
                                        var0 = var0.value;
                                        return var0;
                                    };
                                    var2 = _closure2_slot0;
                                    if (!var2) {
                                        _fun34962_ip = 27;
                                        continue _fun34962
                                    }
                                case 17:
                                    var1 = _closure2_slot0;
                                    var0.viewName = var1;
                                case 27:
                                    return var0;
                            }
                        };
                        var10 = {};
                        var10.tagOrWrapper = var12;
                        var10.viewName = var11;
                        var8.__closure = var10;
                        var10 = 5138727370224.0;
                        var8.__workletHash = var10;
                        var9 = _closure1_slot6;
                        var8.__initData = var9;
                        var3.__init = var8;
                        var3 = var6.bind(var7)(var3);
                        var1 = var1[var5];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.shareableMappingCache;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var0, var3);
                    case 236:
                        return var0;
                }
            };
            _fun34947_ip = 217;
            continue _fun34947;
        case 212:
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = undefined;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                return var0;
            };
        case 217:
            var2.useAnimatedRef = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3724, 3829, 3758, 3749, 3752, 3751]);