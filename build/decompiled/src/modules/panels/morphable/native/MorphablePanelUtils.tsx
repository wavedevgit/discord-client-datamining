// modules/panels/morphable/native/MorphablePanelUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var9[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var4 = var3.MIN_PIP_TOSS_VELOCITY;
    var _closure1_slot0 = var4;
    var3 = var3.PIP_WINDOW_OFFSET;
    var _closure1_slot1 = var3;
    var3 = {};
    var4 = 'function clamp_MorphablePanelUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}';
    var3.code = var4;
    var _closure1_slot2 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2) { // Original name: clamp, environment: var0
            var0 = global;
            var3 = var0.Math;
            var2 = var3.min;
            var5 = var0.Math;
            var4 = var5.max;
            var1 = arg0;
            var0 = arg1;
            var1 = var4.bind(var5)(var1, var0);
            var0 = arg2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 1391695493868.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function calculateXYDiff_MorphablePanelUtilsTsx2(event,initialGestureOffset){const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=initialGestureOffset.get().absoluteYStart-absoluteY;const xDiff=initialGestureOffset.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;return{absoluteX:absoluteX,absoluteY:absoluteY,xDiff:xDiff,yDiff:yDiff,isNotPullDownGesture:isNotPullDownGesture,absoluteMovement:absoluteMovement};}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: calculateXYDiff, environment: var0
            _fun110741: for (var _fun110741_ip = 0;;) switch (_fun110741_ip) {
                case 0:
                    var1 = arg1;
                    var0 = arg0;
                    var0 = var0.changedTouches;
                    var4 = 0;
                    var0 = var0[var4];
                    var5 = var0.absoluteY;
                    var6 = var0.absoluteX;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.absoluteYStart;
                    var3 = var0 - var5;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.absoluteXStart;
                    var7 = var0 - var6;
                    var2 = global;
                    var9 = var2.Math;
                    var8 = var9.max;
                    var1 = var2.Math;
                    var0 = var1.abs;
                    var1 = var0.bind(var1)(var3);
                    var10 = var2.Math;
                    var0 = var10.abs;
                    var0 = var0.bind(var10)(var7);
                    var1 = var8.bind(var9)(var1, var0);
                    var0 = {};
                    var0.absoluteX = var6;
                    var0.absoluteY = var5;
                    var0.xDiff = var7;
                    var0.yDiff = var3;
                    var6 = var2.Math;
                    var5 = var6.abs;
                    var5 = var5.bind(var6)(var7);
                    var6 = var2.Math;
                    var2 = var6.abs;
                    var2 = var2.bind(var6)(var3);
                    var2 = var5 >= var2;
                    if (var2) {
                        _fun110741_ip = 190;
                        continue _fun110741
                    }
                case 186:
                    var2 = var3 > var4;
                case 190:
                    var0.isNotPullDownGesture = var2;
                    var0.absoluteMovement = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 9827767064556.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var6 = var3.bind(var0)();
    var3 = {};
    var4 = 'function getPIPWindowDimensions_MorphablePanelUtilsTsx3(windowDimensions,safeArea,disableHorizontalSafeAreas){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=disableHorizontalSafeAreas?Math.max(safeArea.left,PIP_WINDOW_OFFSET):PIP_WINDOW_OFFSET;const disabledHorizontalSafeAreasRange=windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET);const enabledHorizontalSafeAreasRange=windowDimensions.width-safeArea.left-safeArea.right-PIP_WINDOW_OFFSET*2;const xRange=disableHorizontalSafeAreas?disabledHorizontalSafeAreasRange:enabledHorizontalSafeAreasRange;const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2) { // Original name: getPIPWindowDimensions, environment: var0
            _fun110743: for (var _fun110743_ip = 0;;) switch (_fun110743_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var4 = arg2;
                    if (var4) {
                        _fun110743_ip = 21;
                        continue _fun110743
                    }
                case 15:
                    var7 = _closure1_slot1;
                    _fun110743_ip = 49;
                    continue _fun110743;
                case 21:
                    var0 = global;
                    var8 = var0.Math;
                    var6 = var8.max;
                    var3 = var1.left;
                    var0 = _closure1_slot1;
                    var7 = var6.bind(var8)(var3, var0);
                case 49:
                    var0 = var2.width;
                    var6 = var0 - var7;
                    var3 = global;
                    var10 = var3.Math;
                    var8 = var10.max;
                    var0 = var1.right;
                    var9 = _closure1_slot1;
                    var0 = var8.bind(var10)(var0, var9);
                    var0 = var6 - var0;
                    var8 = var2.width;
                    var6 = var1.left;
                    var8 = var8 - var6;
                    var6 = var1.right;
                    var8 = var8 - var6;
                    var6 = 2;
                    var6 = var6 * var9;
                    var6 = var8 - var6;
                    if (!var4) {
                        _fun110743_ip = 130;
                        continue _fun110743
                    }
                case 127:
                    var6 = var0;
                case 130:
                    var8 = var3.Math;
                    var4 = var8.max;
                    var0 = var1.top;
                    var5 = _closure1_slot1;
                    var4 = var4.bind(var8)(var0, var5);
                    var0 = {};
                    var0.xOffset = var7;
                    var0.yOffset = var4;
                    var0.xRange = var6;
                    var2 = var2.height;
                    var2 = var2 - var4;
                    var4 = var3.Math;
                    var3 = var4.max;
                    var1 = var1.bottom;
                    var1 = var3.bind(var4)(var1, var5);
                    var1 = var2 - var1;
                    var0.yRange = var1;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot1;
        var2.PIP_WINDOW_OFFSET = var3;
        var0.__closure = var2;
        var2 = 4008246762710.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var5 = var3.bind(var0)();
    var _closure1_slot6 = var5;
    var3 = {};
    var4 = "function calculatePIPPositionFromVelocity_MorphablePanelUtilsTsx4({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}";
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: calculatePIPPositionFromVelocity, environment: var0
            _fun110745: for (var _fun110745_ip = 0;;) switch (_fun110745_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.velocityX;
                    var6 = var0.velocityY;
                    var9 = var0.absoluteX;
                    var4 = var0.absoluteY;
                    var8 = var0.windowDimensions;
                    var7 = var0.safeArea;
                    var3 = var0.disableHorizontalSafeAreas;
                    var0 = _closure1_slot6;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var8, var7, var3);
                    var8 = var0.xRange;
                    var3 = var0.yRange;
                    var7 = var0.xOffset;
                    var7 = var9 - var7;
                    var0 = var0.yOffset;
                    var0 = var4 - var0;
                    var9 = global;
                    var12 = var9.Math;
                    var11 = var12.max;
                    var10 = var9.Math;
                    var4 = var10.abs;
                    var10 = var4.bind(var10)(var6);
                    var13 = var9.Math;
                    var4 = var13.abs;
                    var4 = var4.bind(var13)(var2);
                    var10 = var11.bind(var12)(var10, var4);
                    var4 = _closure1_slot0;
                    if (!(!(var10 < var4))) {
                        _fun110745_ip = 249;
                        continue _fun110745
                    }
                case 154:
                    var12 = var6 / var2;
                    var4 = 0;
                    var2 = var2 > var4;
                    var10 = 0;
                    if (!var2) {
                        _fun110745_ip = 172;
                        continue _fun110745
                    }
                case 169:
                    var10 = var8;
                case 172:
                    var2 = var10 - var7;
                    var2 = var12 * var2;
                    var2 = var0 + var2;
                    if (!(var2 >= var4)) {
                        _fun110745_ip = 192;
                        continue _fun110745
                    }
                case 188:
                    if (!(!(var2 <= var3))) {
                        _fun110745_ip = 236;
                        continue _fun110745
                    }
                case 192:
                    var11 = 1;
                    var11 = var11 / var12;
                    var6 = var6 > var4;
                    var4 = 0;
                    if (!var6) {
                        _fun110745_ip = 211;
                        continue _fun110745
                    }
                case 208:
                    var4 = var3;
                case 211:
                    var6 = var4 - var0;
                    var6 = var11 * var6;
                    var6 = var7 + var6;
                    var6 = var6 / var8;
                    var4 = var4 / var3;
                    _fun110745_ip = 478;
                    continue _fun110745;
                case 236:
                    var6 = var10 / var8;
                    var4 = var2 / var3;
                    _fun110745_ip = 478;
                    continue _fun110745;
                case 249:
                    var12 = {};
                    var11 = _closure1_slot3;
                    var2 = 0;
                    var10 = var11.bind(var5)(var7, var2, var8);
                    var12.left = var10;
                    var10 = var8 - var7;
                    var10 = var11.bind(var5)(var10, var2, var8);
                    var12.right = var10;
                    var10 = var11.bind(var5)(var0, var2, var3);
                    var12.top = var10;
                    var10 = var3 - var0;
                    var10 = var11.bind(var5)(var10, var2, var3);
                    var12.bottom = var10;
                    var11 = var9.Math;
                    var10 = var11.min;
                    var13 = var9.Object;
                    var9 = var13.values;
                    var16 = var9.bind(var13)(var12);
                    var9 = new Array(0);
                    var17 = var9;
                    var15 = 0;
                    var13 = arraySpread(var17, var16, var15);
                    var17 = var10;
                    var16 = var9;
                    var15 = var11;
                    var14 = apply(var17, var16, var15);
                    var11 = var12.left;
                    var9 = 'left';
                    var10 = var9;
                    if (!(var11 !== var14)) {
                        _fun110745_ip = 414;
                        continue _fun110745
                    }
                case 378:
                    var13 = var12.top;
                    var11 = 'top';
                    if (!(var13 !== var14)) {
                        _fun110745_ip = 411;
                        continue _fun110745
                    }
                case 391:
                    var13 = var12.right;
                    var12 = 'bottom';
                    if (!(var13 === var14)) {
                        _fun110745_ip = 408;
                        continue _fun110745
                    }
                case 404:
                    var12 = 'right';
                case 408:
                    var11 = var12;
                case 411:
                    var10 = var11;
                case 414:
                    if (!(var9 !== var10)) {
                        _fun110745_ip = 472;
                        continue _fun110745
                    }
                case 418:
                    var9 = 'right';
                    if (!(var9 !== var10)) {
                        _fun110745_ip = 463;
                        continue _fun110745
                    }
                case 426:
                    var9 = 'top';
                    if (!(var9 !== var10)) {
                        _fun110745_ip = 455;
                        continue _fun110745
                    }
                case 434:
                    var9 = 'bottom';
                    var6 = 0;
                    var4 = 0;
                    if (!(var9 === var10)) {
                        _fun110745_ip = 478;
                        continue _fun110745
                    }
                case 446:
                    var6 = var7 / var8;
                    var4 = 1;
                    _fun110745_ip = 478;
                    continue _fun110745;
                case 455:
                    var6 = var7 / var8;
                    var4 = 0;
                    _fun110745_ip = 478;
                    continue _fun110745;
                case 463:
                    var4 = var0 / var3;
                    var6 = 1;
                    _fun110745_ip = 478;
                    continue _fun110745;
                case 472:
                    var4 = var0 / var3;
                    var6 = 0;
                case 478:
                    var0 = {};
                    var3 = _closure1_slot3;
                    var2 = 0;
                    var1 = 1;
                    var6 = var3.bind(var5)(var6, var2, var1);
                    var0.pipX = var6;
                    var1 = var3.bind(var5)(var4, var2, var1);
                    var0.pipY = var1;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot6;
        var2.getPIPWindowDimensions = var3;
        var3 = _closure1_slot0;
        var2.MIN_PIP_TOSS_VELOCITY = var3;
        var3 = _closure1_slot3;
        var2.clamp = var3;
        var0.__closure = var2;
        var2 = 3215524498124.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = {};
    var7 = 'function pipXYtoAbsoluteXY_MorphablePanelUtilsTsx5({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}';
    var3.code = var7;
    var _closure1_slot8 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: pipXYtoAbsoluteXY, environment: var0
            var0 = arg0;
            var6 = var0.pipX;
            var3 = var0.pipY;
            var5 = var0.windowDimensions;
            var4 = var0.safeArea;
            var2 = var0.disableHorizontalSafeAreas;
            var1 = _closure1_slot6;
            var0 = undefined;
            var1 = var1.bind(var0)(var5, var4, var2);
            var5 = var1.xOffset;
            var2 = var1.yOffset;
            var0 = {};
            var4 = var1.xRange;
            var4 = var6 * var4;
            var4 = var5 + var4;
            var0.x = var4;
            var1 = var1.yRange;
            var1 = var3 * var1;
            var1 = var2 + var1;
            var0.y = var1;
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot6;
        var2.getPIPWindowDimensions = var3;
        var0.__closure = var2;
        var2 = 1981621867924.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot8;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot9 = var3;
    var7 = {};
    var10 = 'function getClampedPIPPosition_MorphablePanelUtilsTsx6({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0},disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}';
    var7.code = var10;
    var _closure1_slot10 = var7;
    var1 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: getClampedPIPPosition, environment: var0
            _fun110749: for (var _fun110749_ip = 0;;) switch (_fun110749_ip) {
                case 0:
                    var0 = arg0;
                    var15 = var0.pipX;
                    var14 = var0.pipY;
                    var11 = var0.width;
                    var7 = var0.height;
                    var12 = var0.windowDimensions;
                    var4 = var0.safeArea;
                    var8 = var0.bottomAvoidanceRegion;
                    var6 = undefined;
                    if (!(var8 === var6)) {
                        _fun110749_ip = 51;
                        continue _fun110749
                    }
                case 49:
                    var8 = 0;
                case 51:
                    var9 = var0.topAvoidanceRegion;
                    if (!(var9 === var6)) {
                        _fun110749_ip = 63;
                        continue _fun110749
                    }
                case 61:
                    var9 = 0;
                case 63:
                    var1 = var0.positionOffset;
                    if (!(var1 === var6)) {
                        _fun110749_ip = 83;
                        continue _fun110749
                    }
                case 73:
                    var1 = {
                        'x': 0,
                        'y': 0
                    };
                case 83:
                    var3 = var0.disableHorizontalSafeAreas;
                    var10 = _closure1_slot9;
                    var0 = {};
                    var13 = 1;
                    var5 = -1;
                    if (!(var5 !== var15)) {
                        _fun110749_ip = 114;
                        continue _fun110749
                    }
                case 111:
                    var13 = var15;
                case 114:
                    var0.pipX = var13;
                    var5 = var5 === var14;
                    var13 = 0;
                    if (var5) {
                        _fun110749_ip = 131;
                        continue _fun110749
                    }
                case 128:
                    var13 = var14;
                case 131:
                    var0.pipY = var13;
                    var0.windowDimensions = var12;
                    var0.safeArea = var4;
                    var0.disableHorizontalSafeAreas = var3;
                    var0 = var10.bind(var6)(var0);
                    var14 = var0.x;
                    var13 = var0.y;
                    var0 = 2;
                    var10 = var11 / var0;
                    var10 = var14 - var10;
                    if (var5) {
                        _fun110749_ip = 190;
                        continue _fun110749
                    }
                case 180:
                    var0 = var7 / var0;
                    var5 = var13 - var0;
                    _fun110749_ip = 197;
                    continue _fun110749;
                case 190:
                    var0 = 72;
                    var5 = var13 + var0;
                case 197:
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var6)(var12, var4, var3);
                    var3 = _closure1_slot3;
                    var4 = var0.xOffset;
                    var12 = var0.xOffset;
                    var2 = var0.xRange;
                    var2 = var12 + var2;
                    var2 = var2 - var11;
                    var4 = var3.bind(var6)(var10, var4, var2);
                    var2 = var0.yOffset;
                    var2 = var2 + var9;
                    var9 = var0.yOffset;
                    var0 = var0.yRange;
                    var0 = var9 + var0;
                    var0 = var0 - var8;
                    var0 = var0 - var7;
                    var2 = var3.bind(var6)(var5, var2, var0);
                    var0 = {};
                    var3 = var1.x;
                    var3 = var4 + var3;
                    var0.x = var3;
                    var1 = var1.y;
                    var1 = var2 + var1;
                    var0.y = var1;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot9;
        var2.pipXYtoAbsoluteXY = var3;
        var3 = _closure1_slot6;
        var2.getPIPWindowDimensions = var3;
        var3 = _closure1_slot3;
        var2.clamp = var3;
        var0.__closure = var2;
        var2 = 7754262947803.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot10;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var7 = 1;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/panels/morphable/native/MorphablePanelUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.calculateXYDiff = var6;
    var2.getPIPWindowDimensions = var5;
    var2.calculatePIPPositionFromVelocity = var4;
    var2.pipXYtoAbsoluteXY = var3;
    var2.getClampedPIPPosition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11817, 2]);