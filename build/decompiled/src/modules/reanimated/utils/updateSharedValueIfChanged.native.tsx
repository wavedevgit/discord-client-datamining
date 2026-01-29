// modules/reanimated/utils/updateSharedValueIfChanged.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var4 = {};
    var0 = 'function updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1(sharedValue,value){const updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1=this._recur;const{runOnUI}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1)(sharedValue,value);}else{const _sharedValue=sharedValue.get();const newValue={..._sharedValue,...value};for(const key in newValue){if(_sharedValue[key]!==newValue[key]){sharedValue.set(newValue);break;}}}}';
    var4.code = var0;
    var7 = {};
    var0 = 'function updateSharedValueIfChangedNativeTsx2(sharedValue,value){const{runOnUI,updateSharedValueIfChanged}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueIfChanged)(sharedValue,value);}else{const _sharedValue=sharedValue.get();const newValue={..._sharedValue,...value};for(const key in newValue){if(_sharedValue[key]!==newValue[key]){sharedValue.set(newValue);break;}}}}';
    var7.code = var0;
    var3 = function(arg0, arg1) { // Original name: u, environment: var1
        _fun47105: for (var _fun47105_ip = 0;;) switch (_fun47105_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var1 = global;
                var1 = var1._WORKLET;
                if (var1) {
                    _fun47105_ip = 64;
                    continue _fun47105
                }
            case 17:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.runOnUI;
                var1 = _closure1_slot2;
                var1 = var4.bind(var5)(var1);
                var1 = var1.bind(var3)(var2, var0);
                _fun47105_ip = 140;
                continue _fun47105;
            case 64:
                var1 = var2.get;
                var9 = var1.bind(var2)();
                var1 = {};
                var11 = var1;
                var10 = var9;
                var3 = copyDataProperties(var11, var10);
                var11 = var1;
                var10 = var0;
                var0 = copyDataProperties(var11, var10);
                var7 = var1;
                for (var4 in var7)
                    case 106: {
                        case 115: var0 = var4;
                        var3 = var9[var0];
                        var0 = var1[var0];
                        if (var3 === var0) {
                            _fun47105_ip = 106;
                            continue _fun47105
                        }
                        case 130: var0 = var2.set;
                        var0 = var0.bind(var2)(var1);
                    }
            case 140:
                var0 = undefined;
                return var0;
        }
    };
    var9 = {};
    var8 = 0;
    var10 = var6[var8];
    var0 = undefined;
    var10 = var5.bind(var0)(var10);
    var10 = var10.runOnUI;
    var9.runOnUI = var10;
    var9.updateSharedValueIfChanged = var0;
    var3.__closure = var9;
    var9 = 6367316923455.0;
    var3.__workletHash = var9;
    var3.__initData = var7;
    var _closure1_slot2 = var3;
    var7 = {};
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.runOnUI;
    var7.runOnUI = var8;
    var3.__closure = var7;
    var7 = 13662114226774.0;
    var3.__workletHash = var7;
    var3.__initData = var4;
    var4 = {};
    var7 = 'function updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3(sharedValue,value){const updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3=this._recur;const{runOnUI}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3)(sharedValue,value);}else{const _sharedValue=sharedValue.get();if(_sharedValue.length!==value.length){sharedValue.set(value);}for(let i=0;i<value.length;i++){if(_sharedValue[i]!==value[i]){sharedValue.set(value);}}}}';
    var4.code = var7;
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = 'function updateSharedValueIfChangedNativeTsx4(sharedValue,value){const{runOnUI,updateSharedValueArrayIfChanged}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueArrayIfChanged)(sharedValue,value);}else{const _sharedValue=sharedValue.get();if(_sharedValue.length!==value.length){sharedValue.set(value);}for(let i=0;i<value.length;i++){if(_sharedValue[i]!==value[i]){sharedValue.set(value);}}}}';
    var4.code = var7;
    var _closure1_slot4 = var4;
    var1 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: u, environment: var2
            _fun47107: for (var _fun47107_ip = 0;;) switch (_fun47107_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = global;
                    var0 = var0._WORKLET;
                    if (var0) {
                        _fun47107_ip = 67;
                        continue _fun47107
                    }
                case 17:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var0 = var1[var0];
                    var1 = undefined;
                    var5 = var2.bind(var1)(var0);
                    var2 = var5.runOnUI;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var5)(var0);
                    var0 = var0.bind(var1)(var4, var3);
                    _fun47107_ip = 148;
                    continue _fun47107;
                case 67:
                    var0 = var4.get;
                    var2 = var0.bind(var4)();
                    var1 = var2.length;
                    var0 = var3.length;
                    if (!(var1 !== var0)) {
                        _fun47107_ip = 100;
                        continue _fun47107
                    }
                case 90:
                    var0 = var4.set;
                    var0 = var0.bind(var4)(var3);
                case 100:
                    var0 = var3.length;
                    var1 = 0;
                    var0 = var1 < var0;
                    if (!var0) {
                        _fun47107_ip = 148;
                        continue _fun47107
                    }
                case 114:
                    var5 = var2[var1];
                    var0 = var3[var1];
                    if (!(var5 !== var0)) {
                        _fun47107_ip = 136;
                        continue _fun47107
                    }
                case 126:
                    var0 = var4.set;
                    var0 = var0.bind(var4)(var3);
                case 136:
                    var1 = var1 + 1;
                    var0 = var3.length;
                    if (var1 < var0) {
                        _fun47107_ip = 114;
                        continue _fun47107
                    }
                case 148:
                    var0 = undefined;
                    return var0;
            }
        };
        var7 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 0;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.runOnUI;
        var7.runOnUI = var8;
        var7.updateSharedValueArrayIfChanged = var4;
        var0.__closure = var7;
        var7 = 10682766507787.0;
        var0.__workletHash = var7;
        var7 = _closure1_slot4;
        var0.__initData = var7;
        var _closure2_slot0 = var0;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.runOnUI;
        var2.runOnUI = var3;
        var0.__closure = var2;
        var2 = 13887777879519.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reanimated/utils/updateSharedValueIfChanged.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.updateSharedValueArrayIfChanged = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3677, 2]);