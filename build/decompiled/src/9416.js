// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = {};
    var3 = 'function pnpm_useOnProgressChangeTs1(){const{offsetX}=this.__closure;return offsetX.value;}';
    var2.code = var3;
    var _closure1_slot2 = var2;
    var2 = {};
    var3 = 'function pnpm_useOnProgressChangeTs2(_value){const{computedOffsetXValueWithAutoFillData,rawDataLength,size,autoFillData,loop,onProgressChange,isFunc,runOnJS}=this.__closure;let value=computedOffsetXValueWithAutoFillData({value:_value,rawDataLength:rawDataLength,size:size,autoFillData:autoFillData,loop:loop});if(!loop){value=Math.max(-((rawDataLength-1)*size),Math.min(value,0));}let absoluteProgress=Math.abs(value/size);if(value>0)absoluteProgress=rawDataLength-absoluteProgress;if(onProgressChange){if(isFunc)runOnJS(onProgressChange)(value,absoluteProgress);else onProgressChange.value=absoluteProgress;}}';
    var2.code = var3;
    var _closure1_slot3 = var2;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.autoFillData;
        var _closure2_slot0 = var9;
        var10 = var0.loop;
        var _closure2_slot1 = var10;
        var16 = var0.offsetX;
        var _closure2_slot2 = var16;
        var6 = var0.size;
        var _closure2_slot3 = var6;
        var8 = var0.rawDataLength;
        var _closure2_slot4 = var8;
        var7 = var0.onProgressChange;
        var _closure2_slot5 = var7;
        var1 = 'function';
        var0 = typeof var7;
        var15 = var1 === var0;
        var _closure2_slot6 = var15;
        var13 = _closure1_slot0;
        var14 = _closure1_slot1;
        var12 = 0;
        var3 = var14[var12];
        var0 = undefined;
        var5 = var13.bind(var0)(var3);
        var4 = var5.useAnimatedReaction;
        var3 = function() {
            var0 = _closure2_slot2;
            var0 = var0.value;
            return var0;
        };
        var11 = {};
        var11.offsetX = var16;
        var3.__closure = var11;
        var11 = 355184931449.0;
        var3.__workletHash = var11;
        var11 = _closure1_slot2;
        var3.__initData = var11;
        var2 = function arg0() {
            _fun74890: for (var _fun74890_ip = 0;;) switch (_fun74890_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var8 = 1;
                    var1 = var0[var8];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.computedOffsetXValueWithAutoFillData;
                    var3 = {};
                    var1 = arg0;
                    var3.value = var1;
                    var2 = _closure2_slot4;
                    var3.rawDataLength = var2;
                    var2 = _closure2_slot3;
                    var3.size = var2;
                    var2 = _closure2_slot0;
                    var3.autoFillData = var2;
                    var2 = _closure2_slot1;
                    var3.loop = var2;
                    var10 = var5.bind(var6)(var3);
                    var3 = var10;
                    if (var2) {
                        _fun74890_ip = 146;
                        continue _fun74890
                    }
                case 89:
                    var2 = global;
                    var7 = var2.Math;
                    var6 = var7.max;
                    var5 = _closure2_slot4;
                    var5 = var5 - var8;
                    var8 = _closure2_slot3;
                    var5 = -var5;
                    var5 = var5 * var8;
                    var9 = var2.Math;
                    var8 = var9.min;
                    var2 = 0;
                    var2 = var8.bind(var9)(var10, var2);
                    var3 = var6.bind(var7)(var5, var2);
                case 146:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.abs;
                    var2 = _closure2_slot3;
                    var2 = var3 / var2;
                    var7 = var5.bind(var6)(var2);
                    var6 = 0;
                    var2 = var7;
                    if (!(var3 > var6)) {
                        _fun74890_ip = 190;
                        continue _fun74890
                    }
                case 182:
                    var5 = _closure2_slot4;
                    var2 = var5 - var7;
                case 190:
                    var5 = _closure2_slot5;
                    if (!var5) {
                        _fun74890_ip = 253;
                        continue _fun74890
                    }
                case 197:
                    var5 = _closure2_slot6;
                    if (var5) {
                        _fun74890_ip = 216;
                        continue _fun74890
                    }
                case 204:
                    var5 = _closure2_slot5;
                    var5.value = var2;
                    _fun74890_ip = 253;
                    continue _fun74890;
                case 216:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot5;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var0)(var3, var2);
                case 253:
                    return var0;
            }
        };
        var11 = {};
        var16 = 1;
        var16 = var14[var16];
        var16 = var13.bind(var0)(var16);
        var16 = var16.computedOffsetXValueWithAutoFillData;
        var11.computedOffsetXValueWithAutoFillData = var16;
        var11.rawDataLength = var8;
        var11.size = var6;
        var11.autoFillData = var9;
        var11.loop = var10;
        var11.onProgressChange = var7;
        var11.isFunc = var15;
        var12 = var14[var12];
        var12 = var13.bind(var0)(var12);
        var12 = var12.runOnJS;
        var11.runOnJS = var12;
        var2.__closure = var11;
        var11 = 12473781608319.0;
        var2.__workletHash = var11;
        var1 = _closure1_slot3;
        var2.__initData = var1;
        var1 = new Array(5);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var1[3] = var7;
        var1[4] = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.useOnProgressChange = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3682, 9402]);