// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var3 = 'function omitZero_Pnpm_computeOffsetIfDataChangedTs1(a,b){if(a===0)return 0;return b;}';
    var0.code = var3;
    var _closure1_slot0 = var0;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun75126: for (var _fun75126_ip = 0;;) switch (_fun75126_ip) {
                case 0:
                    var1 = arg1;
                    var2 = arg0;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun75126_ip = 15;
                        continue _fun75126
                    }
                case 12:
                    var0 = var1;
                case 15:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 6139220182928.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot0;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var3.bind(var0)();
    var _closure1_slot1 = var3;
    var4 = {};
    var5 = 'function computeOffsetIfDataChanged_Pnpm_computeOffsetIfDataChangedTs2(params){const{omitZero}=this.__closure;const{direction:direction,handlerOffset:_handlerOffset,size:size,previousLength:previousLength,currentLength:currentLength}=params;let handlerOffset=_handlerOffset;let positionIndex;let round;const isPositive=direction<0;if(isPositive){positionIndex=Math.abs(handlerOffset)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)));}else{positionIndex=(Math.abs(handlerOffset)-size)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)))+1;}const prevOffset=omitZero(previousLength,positionIndex%previousLength);const prevIndex=isPositive?prevOffset:previousLength-prevOffset-1;const changedLength=round*(currentLength-previousLength);const changedOffset=changedLength*size;if(prevIndex>currentLength-1&&currentLength<previousLength){if(isPositive)handlerOffset=(currentLength-1)*size*direction;else handlerOffset=(currentLength-1)*size*-1;}else{handlerOffset+=changedOffset*direction;}return handlerOffset;}';
    var4.code = var5;
    var _closure1_slot2 = var4;
    var1 = function() { // Environment: var1
        var0 = function arg0() {
            _fun75128: for (var _fun75128_ip = 0;;) switch (_fun75128_ip) {
                case 0:
                    var1 = arg0;
                    var3 = var1.direction;
                    var6 = var1.handlerOffset;
                    var4 = var1.size;
                    var0 = var1.previousLength;
                    var5 = var1.currentLength;
                    var1 = 0;
                    var1 = var3 < var1;
                    var8 = global;
                    var7 = var8.Math;
                    var2 = var7.abs;
                    var9 = var2.bind(var7)(var6);
                    if (var1) {
                        _fun75128_ip = 124;
                        continue _fun75128
                    }
                case 60:
                    var2 = var9 - var4;
                    var2 = var2 / var4;
                    var11 = var8.Number;
                    var10 = var11.parseInt;
                    var13 = var8.String;
                    var14 = _closure1_slot1;
                    var7 = var2 / var0;
                    var12 = undefined;
                    var7 = var14.bind(var12)(var0, var7);
                    var7 = var13.bind(var12)(var7);
                    var10 = var10.bind(var11)(var7);
                    var7 = 1;
                    var7 = var10 + var7;
                    _fun75128_ip = 178;
                    continue _fun75128;
                case 124:
                    var9 = var9 / var4;
                    var11 = var8.Number;
                    var10 = var11.parseInt;
                    var13 = var8.String;
                    var14 = _closure1_slot1;
                    var8 = var9 / var0;
                    var12 = undefined;
                    var8 = var14.bind(var12)(var0, var8);
                    var8 = var13.bind(var12)(var8);
                    var7 = var10.bind(var11)(var8);
                    var2 = var9;
                case 178:
                    var9 = _closure1_slot1;
                    var8 = var2 % var0;
                    var2 = undefined;
                    var2 = var9.bind(var2)(var0, var8);
                    var9 = var2;
                    if (var1) {
                        _fun75128_ip = 214;
                        continue _fun75128
                    }
                case 203:
                    var8 = var0 - var2;
                    var2 = 1;
                    var9 = var8 - var2;
                case 214:
                    var2 = 1;
                    var8 = var5 - var2;
                    if (!(var9 > var8)) {
                        _fun75128_ip = 229;
                        continue _fun75128
                    }
                case 225:
                    if (!(!(var5 < var0))) {
                        _fun75128_ip = 251;
                        continue _fun75128
                    }
                case 229:
                    var0 = var5 - var0;
                    var0 = var7 * var0;
                    var0 = var0 * var4;
                    var0 = var0 * var3;
                    var0 = var6 + var0;
                    _fun75128_ip = 281;
                    continue _fun75128;
                case 251:
                    var2 = var5 - var2;
                    var2 = var2 * var4;
                    if (var1) {
                        _fun75128_ip = 274;
                        continue _fun75128
                    }
                case 262:
                    var1 = -1;
                    var1 = var2 * var1;
                    _fun75128_ip = 278;
                    continue _fun75128;
                case 274:
                    var1 = var2 * var3;
                case 278:
                    var0 = var1;
                case 281:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot1;
        var2.omitZero = var3;
        var0.__closure = var2;
        var2 = 15766064123809.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.omitZero = var3;
    var2.computeOffsetIfDataChanged = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);