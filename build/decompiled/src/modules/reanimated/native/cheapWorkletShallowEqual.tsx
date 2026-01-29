// modules/reanimated/native/cheapWorkletShallowEqual.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = {};
    var3 = 'function cheapWorkletShallowEqual_cheapWorkletShallowEqualTsx1(a,b){if(a===b)return true;if(a==null||b==null)return false;for(const key in a){if(a[key]!==b[key])return false;}return true;}';
    var0.code = var3;
    var _closure1_slot0 = var0;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: cheapWorkletShallowEqual, environment: var0
            _fun47110: for (var _fun47110_ip = 0;;) switch (_fun47110_ip) {
                case 0:
                    var8 = arg0;
                    var7 = arg1;
                    if (!(var8 !== var7)) {
                        _fun47110_ip = 67;
                        continue _fun47110
                    }
                case 10:
                    var0 = null;
                    if (!(var0 != var8)) {
                        _fun47110_ip = 63;
                        continue _fun47110
                    }
                case 16:
                    if (!(var0 != var7)) {
                        _fun47110_ip = 63;
                        continue _fun47110
                    }
                case 20:
                    var5 = var8;
                    for (var2 in var5)
                        case 31: {
                            case 40: var0 = var2;
                            var1 = var8[var0];
                            var0 = var7[var0];
                            if (var1 === var0) {
                                _fun47110_ip = 31;
                                continue _fun47110
                            }
                            case 55: var0 = false;
                            return var0;
                        }
                case 59:
                    var0 = true;
                    return var0;
                case 63:
                    var0 = false;
                    return var0;
                case 67:
                    var0 = true;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 760221372005.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot0;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var3.bind(var0)();
    var4 = {};
    var5 = 'function cheapWorkletArrayShallowEqual_cheapWorkletShallowEqualTsx2(a,b){if(a===b)return true;if(a==null||b==null)return false;if(a.length!==b.length)return false;for(let i=0;i<a.length;i++){if(a[i]!==b[i])return false;}return true;}';
    var4.code = var5;
    var _closure1_slot1 = var4;
    var1 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: cheapWorkletArrayShallowEqual, environment: var0
            _fun47112: for (var _fun47112_ip = 0;;) switch (_fun47112_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    if (!(var3 !== var2)) {
                        _fun47112_ip = 88;
                        continue _fun47112
                    }
                case 10:
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun47112_ip = 84;
                        continue _fun47112
                    }
                case 16:
                    if (!(var0 != var2)) {
                        _fun47112_ip = 84;
                        continue _fun47112
                    }
                case 20:
                    var1 = var3.length;
                    var0 = var2.length;
                    if (!(var1 === var0)) {
                        _fun47112_ip = 80;
                        continue _fun47112
                    }
                case 34:
                    var0 = var3.length;
                    var1 = 0;
                    var0 = var1 < var0;
                    if (!var0) {
                        _fun47112_ip = 72;
                        continue _fun47112
                    }
                case 48:
                    var4 = var3[var1];
                    var0 = var2[var1];
                    if (!(var4 === var0)) {
                        _fun47112_ip = 76;
                        continue _fun47112
                    }
                case 60:
                    var1 = var1 + 1;
                    var0 = var3.length;
                    if (var1 < var0) {
                        _fun47112_ip = 48;
                        continue _fun47112
                    }
                case 72:
                    var0 = true;
                    return var0;
                case 76:
                    var0 = false;
                    return var0;
                case 80:
                    var0 = false;
                    return var0;
                case 84:
                    var0 = false;
                    return var0;
                case 88:
                    var0 = true;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 3679738010781.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot1;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var5 = arg6;
    var4 = 0;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reanimated/native/cheapWorkletShallowEqual.tsx';
    var4 = var5.bind(var6)(var4);
    var2.cheapWorkletShallowEqual = var3;
    var2.cheapWorkletArrayShallowEqual = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);