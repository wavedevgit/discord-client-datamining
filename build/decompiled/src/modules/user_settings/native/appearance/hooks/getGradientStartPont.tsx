// modules/user_settings/native/appearance/hooks/getGradientStartPont.tsx
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
    var3 = 'function getHorizontalOrVerticalStartPoint_getGradientStartPontTsx1(angle,width,height){switch(angle){case 0:return[-width/2,0];case 90:return[0,-height/2];case 180:return[width/2,0];default:return[0,height/2];}}';
    var0.code = var3;
    var _closure1_slot0 = var0;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2) { // Original name: getHorizontalOrVerticalStartPoint, environment: var0
            _fun84554: for (var _fun84554_ip = 0;;) switch (_fun84554_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = 0;
                    if (!(var1 !== var4)) {
                        _fun84554_ip = 99;
                        continue _fun84554
                    }
                case 15:
                    var3 = 90;
                    if (!(var3 !== var4)) {
                        _fun84554_ip = 73;
                        continue _fun84554
                    }
                case 22:
                    var3 = 180;
                    if (!(var3 !== var4)) {
                        _fun84554_ip = 52;
                        continue _fun84554
                    }
                case 29:
                    var3 = 2;
                    var4 = var2 / var3;
                    var3 = [0];
                    var3[1] = var4;
                    return var3;
                case 52:
                    var3 = 2;
                    var4 = var0 / var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var3[1] = var1;
                    return var3;
                case 73:
                    var3 = -var2;
                    var2 = 2;
                    var3 = var3 / var2;
                    var2 = [0];
                    var2[1] = var3;
                    return var2;
                case 99:
                    var2 = -var0;
                    var0 = 2;
                    var2 = var2 / var0;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 16439230263550.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot0;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var6 = var3.bind(var0)();
    var _closure1_slot1 = var6;
    var3 = {};
    var4 = 'function getStartCornerToIntersect_getGradientStartPontTsx2(angle,width,height){const w=width/2;const h=height/2;if(angle<90){return[-w,-h];}else if(angle<180){return[w,-h];}else if(angle<270){return[w,h];}else{return[-w,h];}}';
    var3.code = var4;
    var _closure1_slot2 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2) { // Original name: getStartCornerToIntersect, environment: var0
            _fun84556: for (var _fun84556_ip = 0;;) switch (_fun84556_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    var2 = 2;
                    var3 = var0 / var2;
                    var0 = arg2;
                    var2 = var0 / var2;
                    var0 = 90;
                    if (!(!(var1 < var0))) {
                        _fun84556_ip = 98;
                        continue _fun84556
                    }
                case 27:
                    var0 = 180;
                    if (!(!(var1 < var0))) {
                        _fun84556_ip = 78;
                        continue _fun84556
                    }
                case 34:
                    var0 = 270;
                    if (!(!(var1 < var0))) {
                        _fun84556_ip = 61;
                        continue _fun84556
                    }
                case 44:
                    var0 = new Array(2);
                    var1 = -var3;
                    var0[0] = var1;
                    var0[1] = var2;
                    _fun84556_ip = 76;
                    continue _fun84556;
                case 61:
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    var0 = var1;
                case 76:
                    _fun84556_ip = 96;
                    continue _fun84556;
                case 78:
                    var1 = new Array(2);
                    var1[0] = var3;
                    var4 = -var2;
                    var1[1] = var4;
                    var0 = var1;
                case 96:
                    _fun84556_ip = 119;
                    continue _fun84556;
                case 98:
                    var1 = new Array(2);
                    var3 = -var3;
                    var1[0] = var3;
                    var2 = -var2;
                    var1[1] = var2;
                    var0 = var1;
                case 119:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 2348332324573.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var5 = var3.bind(var0)();
    var _closure1_slot3 = var5;
    var3 = {};
    var4 = 'function getGradientStartPoint_getGradientStartPontTsx3(angle,width,height){const{getHorizontalOrVerticalStartPoint,getStartCornerToIntersect}=this.__closure;angle=angle%360;if(angle<0){angle+=360;}if(angle%90===0){return getHorizontalOrVerticalStartPoint(angle,width,height);}const slope=Math.tan(angle*Math.PI/180);const perpendicularSlope=-1/slope;const startCorner=getStartCornerToIntersect(angle,width,height);const b=startCorner[1]-perpendicularSlope*startCorner[0];const startX=b/(slope-perpendicularSlope);const startY=slope*startX;return[startX,startY];}';
    var3.code = var4;
    var1 = function(arg0, arg1, arg2) { // Original name: t, environment: var1
        _fun84557: for (var _fun84557_ip = 0;;) switch (_fun84557_ip) {
            case 0:
                var4 = arg1;
                var3 = arg2;
                var0 = arg0;
                var1 = 360;
                var0 = var0 % var1;
                var7 = 0;
                var2 = var0;
                if (!(var2 < var7)) {
                    _fun84557_ip = 32;
                    continue _fun84557
                }
            case 28:
                var2 = var0 + var1;
            case 32:
                var0 = 90;
                var0 = var2 % var0;
                if (!(var0 !== var7)) {
                    _fun84557_ip = 156;
                    continue _fun84557
                }
            case 43:
                var0 = global;
                var5 = var0.Math;
                var1 = var5.tan;
                var0 = var0.Math;
                var0 = var0.PI;
                var6 = var2 * var0;
                var0 = 180;
                var0 = var6 / var0;
                var5 = var1.bind(var5)(var0);
                var0 = -1;
                var0 = var0 / var5;
                var6 = _closure1_slot3;
                var1 = undefined;
                var1 = var6.bind(var1)(var2, var4, var3);
                var6 = 1;
                var6 = var1[var6];
                var1 = var1[var7];
                var1 = var0 * var1;
                var1 = var6 - var1;
                var0 = var5 - var0;
                var1 = var1 / var0;
                var0 = new Array(2);
                var0[0] = var1;
                var1 = var5 * var1;
                var0[1] = var1;
                return var0;
            case 156:
                var1 = _closure1_slot1;
                var0 = undefined;
                var0 = var1.bind(var0)(var2, var4, var3);
                return var0;
        }
    };
    var4 = {};
    var4.getHorizontalOrVerticalStartPoint = var6;
    var4.getStartCornerToIntersect = var5;
    var1.__closure = var4;
    var4 = 11244204401624.0;
    var1.__workletHash = var4;
    var1.__initData = var3;
    var4 = arg6;
    var3 = 0;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/appearance/hooks/getGradientStartPont.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);