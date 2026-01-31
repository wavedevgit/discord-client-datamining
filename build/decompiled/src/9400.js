// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var6 = var6.DATA_LENGTH;
    var6 = var6.SINGLE_ITEM;
    var _closure1_slot0 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DATA_LENGTH;
    var3 = var3.DOUBLE_ITEM;
    var _closure1_slot1 = var3;
    var3 = {};
    var4 = 'function isAutoFillData_Pnpm_computedWithAutoFillDataTs1(params){return!!params.loop&&!!params.autoFillData;}';
    var3.code = var4;
    var _closure1_slot2 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: isAutoFillData, environment: var0
            _fun74819: for (var _fun74819_ip = 0;;) switch (_fun74819_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.loop;
                    var2 = !var0;
                    var0 = !var2;
                    if (var2) {
                        _fun74819_ip = 30;
                        continue _fun74819
                    }
                case 18:
                    var1 = var1.autoFillData;
                    var1 = !var1;
                    var0 = !var1;
                case 30:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 3243810595903.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function convertToSharedIndex_Pnpm_computedWithAutoFillDataTs2(params){const{isAutoFillData,SINGLE_ITEM,DOUBLE_ITEM}=this.__closure;const{loop:loop,rawDataLength:rawDataLength,index:index,autoFillData:autoFillData}=params;if(isAutoFillData({loop:loop,autoFillData:autoFillData})){switch(rawDataLength){case SINGLE_ITEM:return 0;case DOUBLE_ITEM:return index%2;}}return index;}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: convertToSharedIndex, environment: var0
            _fun74821: for (var _fun74821_ip = 0;;) switch (_fun74821_ip) {
                case 0:
                    var0 = arg0;
                    var6 = var0.loop;
                    var2 = var0.rawDataLength;
                    var1 = var0.index;
                    var3 = var0.autoFillData;
                    var5 = _closure1_slot3;
                    var4 = {};
                    var4.loop = var6;
                    var4.autoFillData = var3;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    if (!var3) {
                        _fun74821_ip = 71;
                        continue _fun74821
                    }
                case 55:
                    var3 = _closure1_slot0;
                    if (!(var3 !== var2)) {
                        _fun74821_ip = 82;
                        continue _fun74821
                    }
                case 63:
                    var0 = _closure1_slot1;
                    if (!(var0 !== var2)) {
                        _fun74821_ip = 73;
                        continue _fun74821
                    }
                case 71:
                    return var1;
                case 73:
                    var0 = 2;
                    var0 = var1 % var0;
                    return var0;
                case 82:
                    var0 = 0;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.isAutoFillData = var3;
        var3 = _closure1_slot0;
        var2.SINGLE_ITEM = var3;
        var3 = _closure1_slot1;
        var2.DOUBLE_ITEM = var3;
        var0.__closure = var2;
        var2 = 6582547575185.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = {};
    var5 = 'function computedOffsetXValueWithAutoFillData_Pnpm_computedWithAutoFillDataTs3(params){const{isAutoFillData,SINGLE_ITEM,DOUBLE_ITEM}=this.__closure;const{rawDataLength:rawDataLength,value:value,size:size,loop:loop,autoFillData:autoFillData}=params;if(isAutoFillData({loop:loop,autoFillData:autoFillData})){switch(rawDataLength){case SINGLE_ITEM:return value%size;case DOUBLE_ITEM:return value%(size*2);}}return value;}';
    var3.code = var5;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: computedOffsetXValueWithAutoFillData, environment: var0
            _fun74823: for (var _fun74823_ip = 0;;) switch (_fun74823_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.rawDataLength;
                    var1 = var2.value;
                    var0 = var2.size;
                    var7 = var2.loop;
                    var4 = var2.autoFillData;
                    var6 = _closure1_slot3;
                    var5 = {};
                    var5.loop = var7;
                    var5.autoFillData = var4;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    if (!var4) {
                        _fun74823_ip = 76;
                        continue _fun74823
                    }
                case 60:
                    var4 = _closure1_slot0;
                    if (!(var4 !== var3)) {
                        _fun74823_ip = 91;
                        continue _fun74823
                    }
                case 68:
                    var2 = _closure1_slot1;
                    if (!(var2 !== var3)) {
                        _fun74823_ip = 78;
                        continue _fun74823
                    }
                case 76:
                    return var1;
                case 78:
                    var2 = 2;
                    var2 = var2 * var0;
                    var2 = var1 % var2;
                    return var2;
                case 91:
                    var0 = var1 % var0;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.isAutoFillData = var3;
        var3 = _closure1_slot0;
        var2.SINGLE_ITEM = var3;
        var3 = _closure1_slot1;
        var2.DOUBLE_ITEM = var3;
        var0.__closure = var2;
        var2 = 4588043425301.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var2.convertToSharedIndex = var4;
    var2.computedOffsetXValueWithAutoFillData = var3;
    var3 = function(arg0) { // Original name: computedRealIndexWithAutoFillData, environment: var1
        _fun74824: for (var _fun74824_ip = 0;;) switch (_fun74824_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.index;
                var2 = var0.dataLength;
                var6 = var0.loop;
                var3 = var0.autoFillData;
                var5 = _closure1_slot3;
                var4 = {};
                var4.loop = var6;
                var4.autoFillData = var3;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                if (!var3) {
                    _fun74824_ip = 71;
                    continue _fun74824
                }
            case 55:
                var3 = _closure1_slot0;
                if (!(var3 !== var2)) {
                    _fun74824_ip = 82;
                    continue _fun74824
                }
            case 63:
                var0 = _closure1_slot1;
                if (!(var0 !== var2)) {
                    _fun74824_ip = 73;
                    continue _fun74824
                }
            case 71:
                return var1;
            case 73:
                var0 = 2;
                var0 = var1 % var0;
                return var0;
            case 82:
                var0 = 1;
                var0 = var1 % var0;
                return var0;
        }
    };
    var2.computedRealIndexWithAutoFillData = var3;
    var1 = function(arg0) { // Original name: computedFillDataWithAutoFillData, environment: var1
        _fun74825: for (var _fun74825_ip = 0;;) switch (_fun74825_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.data;
                var6 = var0.loop;
                var3 = var0.autoFillData;
                var1 = var0.dataLength;
                var5 = _closure1_slot3;
                var4 = {};
                var4.loop = var6;
                var4.autoFillData = var3;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                if (!var3) {
                    _fun74825_ip = 71;
                    continue _fun74825
                }
            case 55:
                var3 = _closure1_slot0;
                if (!(var3 !== var1)) {
                    _fun74825_ip = 116;
                    continue _fun74825
                }
            case 63:
                var0 = _closure1_slot1;
                if (!(var0 !== var1)) {
                    _fun74825_ip = 73;
                    continue _fun74825
                }
            case 71:
                return var2;
            case 73:
                var3 = 0;
                var1 = var2[var3];
                var0 = new Array(4);
                var0[0] = var1;
                var1 = 1;
                var4 = var2[var1];
                var0[1] = var4;
                var3 = var2[var3];
                var0[2] = var3;
                var1 = var2[var1];
                var0[3] = var1;
                return var0;
            case 116:
                var1 = 0;
                var3 = var2[var1];
                var0 = new Array(3);
                var0[0] = var3;
                var3 = var2[var1];
                var0[1] = var3;
                var1 = var2[var1];
                var0[2] = var1;
                return var0;
        }
    };
    var2.computedFillDataWithAutoFillData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9401]);