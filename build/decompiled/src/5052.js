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
    var3 = "function pnpm_useAnimatedSnapPointsTs1(){const{containerHeight,INITIAL_CONTAINER_HEIGHT,INITIAL_SNAP_POINT,snapPoints,normalizeSnapPoint,enableDynamicSizing,handleHeight,INITIAL_HANDLE_HEIGHT,contentHeight,maxDynamicContentSize,dynamicSnapPointIndex}=this.__closure;const isContainerLayoutReady=containerHeight.value!==INITIAL_CONTAINER_HEIGHT;if(!isContainerLayoutReady){return[INITIAL_SNAP_POINT];}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];let _normalizedSnapPoints=_snapPoints.map(function(snapPoint){return normalizeSnapPoint(snapPoint,containerHeight.value);});if(!enableDynamicSizing){return _normalizedSnapPoints;}if(handleHeight.value===INITIAL_HANDLE_HEIGHT){return[INITIAL_SNAP_POINT];}if(contentHeight.value===INITIAL_CONTAINER_HEIGHT){return[INITIAL_SNAP_POINT];}const dynamicSnapPoint=containerHeight.value-Math.min(contentHeight.value+handleHeight.value,maxDynamicContentSize!==undefined?maxDynamicContentSize:containerHeight.value);if(!_normalizedSnapPoints.includes(dynamicSnapPoint)){_normalizedSnapPoints.push(dynamicSnapPoint);}_normalizedSnapPoints=_normalizedSnapPoints.sort(function(a,b){return b-a;});dynamicSnapPointIndex.value=_normalizedSnapPoints.indexOf(dynamicSnapPoint);return _normalizedSnapPoints;}";
    var2.code = var3;
    var _closure1_slot2 = var2;
    var2 = {};
    var3 = "function pnpm_useAnimatedSnapPointsTs2(){const{enableDynamicSizing,snapPoints}=this.__closure;if(enableDynamicSizing){return true;}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];if(_snapPoints.length&&_snapPoints.find(function(snapPoint){return typeof snapPoint==='string';})){return true;}return false;}";
    var2.code = var3;
    var _closure1_slot3 = var2;
    var0 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6() {
        var7 = arg0;
        var16 = arg1;
        var14 = arg2;
        var15 = arg3;
        var8 = arg5;
        var13 = arg6;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var16;
        var _closure2_slot2 = var14;
        var _closure2_slot3 = var15;
        var _closure2_slot4 = var8;
        var _closure2_slot5 = var13;
        var6 = _closure1_slot0;
        var9 = _closure1_slot1;
        var1 = 0;
        var2 = var9[var1];
        var4 = undefined;
        var10 = var6.bind(var4)(var2);
        var3 = var10.useSharedValue;
        var2 = -1;
        var2 = var3.bind(var10)(var2);
        var _closure2_slot6 = var2;
        var3 = var9[var1];
        var12 = var6.bind(var4)(var3);
        var11 = var12.useDerivedValue;
        var10 = function() {
            _fun45435: for (var _fun45435_ip = 0;;) switch (_fun45435_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var6 = var0.value;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var3 = 1;
                    var5 = var2[var3];
                    var2 = undefined;
                    var5 = var7.bind(var2)(var5);
                    var5 = var5.INITIAL_CONTAINER_HEIGHT;
                    if (!(var6 !== var5)) {
                        _fun45435_ip = 404;
                        continue _fun45435
                    }
                case 52:
                    var5 = _closure2_slot0;
                    if (var5) {
                        _fun45435_ip = 65;
                        continue _fun45435
                    }
                case 59:
                    var7 = new Array(0);
                    _fun45435_ip = 97;
                    continue _fun45435;
                case 65:
                    var6 = _closure2_slot0;
                    var5 = 'value';
                    var5 = var5 in var6;
                    var6 = _closure2_slot0;
                    if (var5) {
                        _fun45435_ip = 89;
                        continue _fun45435
                    }
                case 84:
                    var5 = var6;
                    _fun45435_ip = 94;
                    continue _fun45435;
                case 89:
                    var5 = var6.value;
                case 94:
                    var7 = var5;
                case 97:
                    var6 = var7.map;
                    var5 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.normalizeSnapPoint;
                        var0 = _closure2_slot1;
                        var1 = var0.value;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var7 = var6.bind(var7)(var5);
                    var5 = _closure2_slot4;
                    if (var5) {
                        _fun45435_ip = 121;
                        continue _fun45435
                    }
                case 119:
                    return var7;
                case 121:
                    var5 = _closure2_slot3;
                    var6 = var5.value;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var3];
                    var5 = var8.bind(var2)(var5);
                    var5 = var5.INITIAL_HANDLE_HEIGHT;
                    if (!(var6 !== var5)) {
                        _fun45435_ip = 371;
                        continue _fun45435
                    }
                case 160:
                    var5 = _closure2_slot2;
                    var6 = var5.value;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var3];
                    var5 = var8.bind(var2)(var5);
                    var5 = var5.INITIAL_CONTAINER_HEIGHT;
                    if (!(var6 !== var5)) {
                        _fun45435_ip = 338;
                        continue _fun45435
                    }
                case 199:
                    var5 = _closure2_slot1;
                    var6 = var5.value;
                    var5 = global;
                    var10 = var5.Math;
                    var9 = var10.min;
                    var5 = _closure2_slot2;
                    var8 = var5.value;
                    var5 = _closure2_slot3;
                    var5 = var5.value;
                    var8 = var8 + var5;
                    var5 = _closure2_slot5;
                    if (!(var2 === var5)) {
                        _fun45435_ip = 262;
                        continue _fun45435
                    }
                case 251:
                    var5 = _closure2_slot1;
                    var5 = var5.value;
                    _fun45435_ip = 266;
                    continue _fun45435;
                case 262:
                    var5 = _closure2_slot5;
                case 266:
                    var5 = var9.bind(var10)(var8, var5);
                    var6 = var6 - var5;
                    var5 = var7.includes;
                    var5 = var5.bind(var7)(var6);
                    if (var5) {
                        _fun45435_ip = 299;
                        continue _fun45435
                    }
                case 289:
                    var5 = var7.push;
                    var5 = var5.bind(var7)(var6);
                case 299:
                    var5 = var7.sort;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var1 = arg1;
                        var0 = arg0;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var1 = var5.bind(var7)(var1);
                    var5 = _closure2_slot6;
                    var4 = var1.indexOf;
                    var4 = var4.bind(var1)(var6);
                    var5.value = var4;
                    return var1;
                case 338:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var1 = var4.bind(var2)(var1);
                    var4 = var1.INITIAL_SNAP_POINT;
                    var1 = new Array(1);
                    var1[0] = var4;
                    return var1;
                case 371:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var1 = var4.bind(var2)(var1);
                    var4 = var1.INITIAL_SNAP_POINT;
                    var1 = new Array(1);
                    var1[0] = var4;
                    return var1;
                case 404:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var3];
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.INITIAL_SNAP_POINT;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
            }
        };
        var3 = {};
        var3.containerHeight = var16;
        var17 = 1;
        var18 = var9[var17];
        var18 = var6.bind(var4)(var18);
        var18 = var18.INITIAL_CONTAINER_HEIGHT;
        var3.INITIAL_CONTAINER_HEIGHT = var18;
        var18 = var9[var17];
        var18 = var6.bind(var4)(var18);
        var18 = var18.INITIAL_SNAP_POINT;
        var3.INITIAL_SNAP_POINT = var18;
        var3.snapPoints = var7;
        var18 = 2;
        var18 = var9[var18];
        var18 = var6.bind(var4)(var18);
        var18 = var18.normalizeSnapPoint;
        var3.normalizeSnapPoint = var18;
        var3.enableDynamicSizing = var8;
        var3.handleHeight = var15;
        var17 = var9[var17];
        var17 = var6.bind(var4)(var17);
        var17 = var17.INITIAL_HANDLE_HEIGHT;
        var3.INITIAL_HANDLE_HEIGHT = var17;
        var3.contentHeight = var14;
        var3.maxDynamicContentSize = var13;
        var3.dynamicSnapPointIndex = var2;
        var10.__closure = var3;
        var3 = 15015207820492.0;
        var10.__workletHash = var3;
        var3 = _closure1_slot2;
        var10.__initData = var3;
        var3 = new Array(8);
        var3[0] = var7;
        var3[1] = var16;
        var3[2] = var15;
        var3[3] = var14;
        var14 = arg4;
        var3[4] = var14;
        var3[5] = var8;
        var3[6] = var13;
        var3[7] = var2;
        var3 = var11.bind(var12)(var10, var3);
        var1 = var9[var1];
        var4 = var6.bind(var4)(var1);
        var1 = var4.useDerivedValue;
        var0 = function() {
            _fun45438: for (var _fun45438_ip = 0;;) switch (_fun45438_ip) {
                case 0:
                    var0 = _closure2_slot4;
                    if (var0) {
                        _fun45438_ip = 91;
                        continue _fun45438
                    }
                case 10:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun45438_ip = 23;
                        continue _fun45438
                    }
                case 17:
                    var3 = new Array(0);
                    _fun45438_ip = 55;
                    continue _fun45438;
                case 23:
                    var2 = _closure2_slot0;
                    var0 = 'value';
                    var0 = var0 in var2;
                    var1 = _closure2_slot0;
                    if (var0) {
                        _fun45438_ip = 47;
                        continue _fun45438
                    }
                case 42:
                    var0 = var1;
                    _fun45438_ip = 52;
                    continue _fun45438;
                case 47:
                    var0 = var1.value;
                case 52:
                    var3 = var0;
                case 55:
                    var0 = var3.length;
                    var0 = !var0;
                    if (var0) {
                        _fun45438_ip = 86;
                        continue _fun45438
                    }
                case 66:
                    var2 = var3.find;
                    var1 = function(arg0) { // Environment: var1
                        var1 = 'string';
                        var0 = arg0;
                        var0 = typeof var0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0 = !var1;
                case 86:
                    var0 = !var0;
                    return var0;
                case 91:
                    var0 = true;
                    return var0;
            }
        };
        var6 = {};
        var6.enableDynamicSizing = var8;
        var6.snapPoints = var7;
        var0.__closure = var6;
        var6 = 4816362093278.0;
        var0.__workletHash = var6;
        var5 = _closure1_slot3;
        var0.__initData = var5;
        var1 = var1.bind(var4)(var0);
        var0 = new Array(3);
        var0[0] = var3;
        var0[1] = var2;
        var0[2] = var1;
        return var0;
    };
    var1.useAnimatedSnapPoints = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3721, 4939, 4952]);