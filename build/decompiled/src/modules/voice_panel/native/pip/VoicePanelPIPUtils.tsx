// modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var13;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var7
        _fun111413: for (var _fun111413_ip = 0;;) switch (_fun111413_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun111413_ip = 45;
                    continue _fun111413
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun111413_ip = 54;
                    continue _fun111413
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun111413_ip = 344;
                    continue _fun111413
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun111413_ip = 322;
                    continue _fun111413
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun111413_ip = 282;
                    continue _fun111413
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun111413_ip = 269;
                    continue _fun111413
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
                    _fun111413_ip = 162;
                    continue _fun111413
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun111413_ip = 178;
                    continue _fun111413
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun111413_ip = 248;
                    continue _fun111413
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun111413_ip = 248;
                    continue _fun111413
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun111413_ip = 233;
                    continue _fun111413
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun111413_ip = 246;
                    continue _fun111413
                }
            case 233:
                var8 = _closure1_slot27;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun111413_ip = 264;
                continue _fun111413;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun111413_ip = 282;
                continue _fun111413;
            case 269:
                var6 = _closure1_slot27;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun111413_ip = 322;
                    continue _fun111413
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
                    _fun111413_ip = 329;
                    continue _fun111413
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun111414: for (var _fun111414_ip = 0;;) switch (_fun111414_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun111414_ip = 56;
                                continue _fun111414
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
                            _fun111414_ip = 67;
                            continue _fun111414;
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
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var7
        _fun111415: for (var _fun111415_ip = 0;;) switch (_fun111415_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun111415_ip = 23;
                    continue _fun111415
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun111415_ip = 33;
                    continue _fun111415
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
                    _fun111415_ip = 70;
                    continue _fun111415
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun111415_ip = 55;
                    continue _fun111415
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var13[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var13[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var13[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var4 = var3.SECONDARY_PIP_TOP_MARGIN;
    var _closure1_slot5 = var4;
    var3 = var3.VoicePanelModes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var4 = var3.VoicePanelPIPModes;
    var _closure1_slot7 = var4;
    var10 = var3.PIPReferenceDimensions;
    var _closure1_slot8 = var10;
    var9 = var3.SquarePIPReferenceDimensions;
    var _closure1_slot9 = var9;
    var8 = var3.SquareActivityPIPReferenceDimensions;
    var _closure1_slot10 = var8;
    var3 = 5;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var4 = var3.MIN_PIP_TOSS_VELOCITY;
    var _closure1_slot12 = var4;
    var3 = var3.PIP_WINDOW_OFFSET;
    var _closure1_slot13 = var3;
    var1 = var1.Set;
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var18 = var3;
    var1 = new var18[var1](var17);
    var1 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot14 = var1;
    var1 = {};
    var3 = 'function clamp_VoicePanelPIPUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}';
    var1.code = var3;
    var _closure1_slot15 = var1;
    var1 = function() { // Environment: var7
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
        var1 = 10301627783217.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot15;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot16 = var1;
    var1 = {};
    var3 = 'function getPIPWindowDimensions_VoicePanelPIPUtilsTsx2(windowDimensions,safeArea){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=Math.max(safeArea.left,PIP_WINDOW_OFFSET);const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET),yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}';
    var1.code = var3;
    var _closure1_slot17 = var1;
    var1 = function() { // Environment: var7
        var0 = function(arg0, arg1) { // Original name: getPIPWindowDimensions, environment: var0
            var2 = arg0;
            var1 = arg1;
            var3 = global;
            var6 = var3.Math;
            var4 = var6.max;
            var0 = var1.left;
            var5 = _closure1_slot13;
            var7 = var4.bind(var6)(var0, var5);
            var6 = var3.Math;
            var4 = var6.max;
            var0 = var1.top;
            var4 = var4.bind(var6)(var0, var5);
            var0 = {};
            var0.xOffset = var7;
            var0.yOffset = var4;
            var6 = var2.width;
            var7 = var6 - var7;
            var9 = var3.Math;
            var8 = var9.max;
            var6 = var1.right;
            var6 = var8.bind(var9)(var6, var5);
            var6 = var7 - var6;
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
        };
        var2 = {};
        var3 = _closure1_slot13;
        var2.PIP_WINDOW_OFFSET = var3;
        var0.__closure = var2;
        var2 = 10369369214675.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot17;
        var0.__initData = var1;
        return var0;
    };
    var6 = var1.bind(var0)();
    var _closure1_slot18 = var6;
    var1 = {};
    var3 = 'function pipXYtoAbsoluteXY_VoicePanelPIPUtilsTsx3({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}';
    var1.code = var3;
    var _closure1_slot19 = var1;
    var1 = function() { // Environment: var7
        var0 = function(arg0) { // Original name: pipXYtoAbsoluteXY, environment: var0
            var0 = arg0;
            var6 = var0.pipX;
            var3 = var0.pipY;
            var4 = var0.windowDimensions;
            var2 = var0.safeArea;
            var1 = _closure1_slot18;
            var0 = undefined;
            var1 = var1.bind(var0)(var4, var2);
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
        var3 = _closure1_slot18;
        var2.getPIPWindowDimensions = var3;
        var0.__closure = var2;
        var2 = 13405407399530.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot19;
        var0.__initData = var1;
        return var0;
    };
    var5 = var1.bind(var0)();
    var _closure1_slot20 = var5;
    var1 = {};
    var3 = 'function getClampedPIPPosition_VoicePanelPIPUtilsTsx4({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0}}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}';
    var1.code = var3;
    var _closure1_slot21 = var1;
    var1 = function() { // Environment: var7
        var0 = function(arg0) { // Original name: getClampedPIPPosition, environment: var0
            _fun111423: for (var _fun111423_ip = 0;;) switch (_fun111423_ip) {
                case 0:
                    var0 = arg0;
                    var14 = var0.pipX;
                    var13 = var0.pipY;
                    var11 = var0.width;
                    var7 = var0.height;
                    var4 = var0.windowDimensions;
                    var3 = var0.safeArea;
                    var8 = var0.bottomAvoidanceRegion;
                    var6 = undefined;
                    if (!(var8 === var6)) {
                        _fun111423_ip = 51;
                        continue _fun111423
                    }
                case 49:
                    var8 = 0;
                case 51:
                    var9 = var0.topAvoidanceRegion;
                    if (!(var9 === var6)) {
                        _fun111423_ip = 63;
                        continue _fun111423
                    }
                case 61:
                    var9 = 0;
                case 63:
                    var1 = var0.positionOffset;
                    if (!(var1 === var6)) {
                        _fun111423_ip = 83;
                        continue _fun111423
                    }
                case 73:
                    var1 = {
                        'x': 0,
                        'y': 0
                    };
                case 83:
                    var10 = _closure1_slot20;
                    var0 = {};
                    var12 = 1;
                    var5 = -1;
                    if (!(var5 !== var14)) {
                        _fun111423_ip = 108;
                        continue _fun111423
                    }
                case 105:
                    var12 = var14;
                case 108:
                    var0.pipX = var12;
                    var5 = var5 === var13;
                    var12 = 0;
                    if (var5) {
                        _fun111423_ip = 125;
                        continue _fun111423
                    }
                case 122:
                    var12 = var13;
                case 125:
                    var0.pipY = var12;
                    var0.windowDimensions = var4;
                    var0.safeArea = var3;
                    var0 = var10.bind(var6)(var0);
                    var13 = var0.x;
                    var12 = var0.y;
                    var0 = 2;
                    var10 = var11 / var0;
                    var10 = var13 - var10;
                    if (var5) {
                        _fun111423_ip = 179;
                        continue _fun111423
                    }
                case 169:
                    var0 = var7 / var0;
                    var5 = var12 - var0;
                    _fun111423_ip = 186;
                    continue _fun111423;
                case 179:
                    var0 = 72;
                    var5 = var12 + var0;
                case 186:
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var6)(var4, var3);
                    var3 = _closure1_slot16;
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
        var3 = _closure1_slot20;
        var2.pipXYtoAbsoluteXY = var3;
        var3 = _closure1_slot18;
        var2.getPIPWindowDimensions = var3;
        var3 = _closure1_slot16;
        var2.clamp = var3;
        var0.__closure = var2;
        var2 = 10462021389431.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot21;
        var0.__initData = var1;
        return var0;
    };
    var4 = var1.bind(var0)();
    var1 = {};
    var3 = "function calculatePIPPositionFromVelocity_VoicePanelPIPUtilsTsx5({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}";
    var1.code = var3;
    var _closure1_slot22 = var1;
    var1 = function() { // Environment: var7
        var0 = function(arg0) { // Original name: calculatePIPPositionFromVelocity, environment: var0
            _fun111425: for (var _fun111425_ip = 0;;) switch (_fun111425_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.velocityX;
                    var6 = var0.velocityY;
                    var9 = var0.absoluteX;
                    var4 = var0.absoluteY;
                    var7 = var0.windowDimensions;
                    var3 = var0.safeArea;
                    var0 = _closure1_slot18;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var7, var3);
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
                    var4 = _closure1_slot12;
                    if (!(!(var10 < var4))) {
                        _fun111425_ip = 242;
                        continue _fun111425
                    }
                case 147:
                    var12 = var6 / var2;
                    var4 = 0;
                    var2 = var2 > var4;
                    var10 = 0;
                    if (!var2) {
                        _fun111425_ip = 165;
                        continue _fun111425
                    }
                case 162:
                    var10 = var8;
                case 165:
                    var2 = var10 - var7;
                    var2 = var12 * var2;
                    var2 = var0 + var2;
                    if (!(var2 >= var4)) {
                        _fun111425_ip = 185;
                        continue _fun111425
                    }
                case 181:
                    if (!(!(var2 <= var3))) {
                        _fun111425_ip = 229;
                        continue _fun111425
                    }
                case 185:
                    var11 = 1;
                    var11 = var11 / var12;
                    var6 = var6 > var4;
                    var4 = 0;
                    if (!var6) {
                        _fun111425_ip = 204;
                        continue _fun111425
                    }
                case 201:
                    var4 = var3;
                case 204:
                    var6 = var4 - var0;
                    var6 = var11 * var6;
                    var6 = var7 + var6;
                    var6 = var6 / var8;
                    var4 = var4 / var3;
                    _fun111425_ip = 471;
                    continue _fun111425;
                case 229:
                    var6 = var10 / var8;
                    var4 = var2 / var3;
                    _fun111425_ip = 471;
                    continue _fun111425;
                case 242:
                    var12 = {};
                    var11 = _closure1_slot16;
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
                        _fun111425_ip = 407;
                        continue _fun111425
                    }
                case 371:
                    var13 = var12.top;
                    var11 = 'top';
                    if (!(var13 !== var14)) {
                        _fun111425_ip = 404;
                        continue _fun111425
                    }
                case 384:
                    var13 = var12.right;
                    var12 = 'bottom';
                    if (!(var13 === var14)) {
                        _fun111425_ip = 401;
                        continue _fun111425
                    }
                case 397:
                    var12 = 'right';
                case 401:
                    var11 = var12;
                case 404:
                    var10 = var11;
                case 407:
                    if (!(var9 !== var10)) {
                        _fun111425_ip = 465;
                        continue _fun111425
                    }
                case 411:
                    var9 = 'right';
                    if (!(var9 !== var10)) {
                        _fun111425_ip = 456;
                        continue _fun111425
                    }
                case 419:
                    var9 = 'top';
                    if (!(var9 !== var10)) {
                        _fun111425_ip = 448;
                        continue _fun111425
                    }
                case 427:
                    var9 = 'bottom';
                    var6 = 0;
                    var4 = 0;
                    if (!(var9 === var10)) {
                        _fun111425_ip = 471;
                        continue _fun111425
                    }
                case 439:
                    var6 = var7 / var8;
                    var4 = 1;
                    _fun111425_ip = 471;
                    continue _fun111425;
                case 448:
                    var6 = var7 / var8;
                    var4 = 0;
                    _fun111425_ip = 471;
                    continue _fun111425;
                case 456:
                    var4 = var0 / var3;
                    var6 = 1;
                    _fun111425_ip = 471;
                    continue _fun111425;
                case 465:
                    var4 = var0 / var3;
                    var6 = 0;
                case 471:
                    var0 = {};
                    var3 = _closure1_slot16;
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
        var3 = _closure1_slot18;
        var2.getPIPWindowDimensions = var3;
        var3 = _closure1_slot12;
        var2.MIN_PIP_TOSS_VELOCITY = var3;
        var3 = _closure1_slot16;
        var2.clamp = var3;
        var0.__closure = var2;
        var2 = 14615762848981.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot22;
        var0.__initData = var1;
        return var0;
    };
    var3 = var1.bind(var0)();
    var1 = 9;
    var14 = var13[var1];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xl;
    var _closure1_slot23 = var14;
    var1 = var13[var1];
    var1 = var11.bind(var0)(var1);
    var1 = var1.radii;
    var1 = var1.lg;
    var _closure1_slot24 = var1;
    var1 = {};
    var11 = 'function getVoicePanelPIPBorderRadius_VoicePanelPIPUtilsTsx6(width,height){const{SquareActivityPIPReferenceDimensions,lg,xl}=this.__closure;if(width<=SquareActivityPIPReferenceDimensions.width&&height<=SquareActivityPIPReferenceDimensions.height){return lg;}return xl;}';
    var1.code = var11;
    var _closure1_slot25 = var1;
    var1 = function() { // Environment: var7
        var0 = function(arg0, arg1) { // Original name: getVoicePanelPIPBorderRadius, environment: var0
            _fun111427: for (var _fun111427_ip = 0;;) switch (_fun111427_ip) {
                case 0:
                    var0 = _closure1_slot10;
                    var2 = var0.width;
                    var0 = arg0;
                    if (!(var0 <= var2)) {
                        _fun111427_ip = 35;
                        continue _fun111427
                    }
                case 19:
                    var0 = _closure1_slot10;
                    var2 = var0.height;
                    var0 = arg1;
                    if (!(!(var0 <= var2))) {
                        _fun111427_ip = 41;
                        continue _fun111427
                    }
                case 35:
                    var0 = _closure1_slot23;
                    _fun111427_ip = 45;
                    continue _fun111427;
                case 41:
                    var0 = _closure1_slot24;
                case 45:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot10;
        var2.SquareActivityPIPReferenceDimensions = var3;
        var3 = _closure1_slot24;
        var2.lg = var3;
        var3 = _closure1_slot23;
        var2.xl = var3;
        var0.__closure = var2;
        var2 = 16698745361037.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot25;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var11 = 10;
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var2.PIPReferenceDimensions = var10;
    var2.SquarePIPReferenceDimensions = var9;
    var2.SquareActivityPIPReferenceDimensions = var8;
    var8 = function(arg0, arg1, arg2, arg3) { // Original name: computePIPSize, environment: var7
        _fun111428: for (var _fun111428_ip = 0;;) switch (_fun111428_ip) {
            case 0:
                var2 = arg0;
                var0 = arg2;
                var3 = var2.width;
                var1 = var2.height;
                var4 = arg1;
                if (var4) {
                    _fun111428_ip = 189;
                    continue _fun111428
                }
            case 25:
                if (!(var3 !== var1)) {
                    _fun111428_ip = 189;
                    continue _fun111428
                }
            case 32:
                if (!(!(var3 >= var1))) {
                    _fun111428_ip = 111;
                    continue _fun111428
                }
            case 36:
                if (var0) {
                    _fun111428_ip = 53;
                    continue _fun111428
                }
            case 42:
                var3 = _closure1_slot8;
                var3 = var3.height;
                _fun111428_ip = 62;
                continue _fun111428;
            case 53:
                var1 = _closure1_slot10;
                var3 = var1.height;
            case 62:
                var1 = global;
                var6 = var1.Math;
                var5 = var6.max;
                var4 = var2.width;
                var1 = var2.height;
                var4 = var4 / var1;
                var1 = 0.5;
                var1 = var5.bind(var6)(var1, var4);
                var1 = var3 * var1;
                _fun111428_ip = 215;
                continue _fun111428;
            case 111:
                if (var0) {
                    _fun111428_ip = 128;
                    continue _fun111428
                }
            case 117:
                var4 = _closure1_slot8;
                var4 = var4.width;
                _fun111428_ip = 137;
                continue _fun111428;
            case 128:
                var5 = _closure1_slot10;
                var4 = var5.width;
            case 137:
                var5 = global;
                var7 = var5.Math;
                var6 = var7.max;
                var5 = var2.height;
                var2 = var2.width;
                var5 = var5 / var2;
                var2 = 0.5;
                var2 = var6.bind(var7)(var2, var5);
                var3 = var4 * var2;
                var1 = var4;
                _fun111428_ip = 215;
                continue _fun111428;
            case 189:
                if (var0) {
                    _fun111428_ip = 201;
                    continue _fun111428
                }
            case 195:
                var0 = _closure1_slot9;
                _fun111428_ip = 205;
                continue _fun111428;
            case 201:
                var0 = _closure1_slot10;
            case 205:
                var1 = var0.width;
                var3 = var0.height;
            case 215:
                var0 = {};
                var0.width = var1;
                var0.height = var3;
                var2 = arg3;
                var1 = var3;
                if (!var2) {
                    _fun111428_ip = 252;
                    continue _fun111428
                }
            case 234:
                var2 = 2;
                var3 = var2 * var3;
                var2 = _closure1_slot5;
                var1 = var3 + var2;
            case 252:
                var0.containerHeight = var1;
                return var0;
        }
    };
    var2.computePIPSize = var8;
    var8 = function(arg0) { // Original name: computePIPParticipantToShow, environment: var7
        _fun111429: for (var _fun111429_ip = 0;;) switch (_fun111429_ip) {
            case 0:
                var2 = arg0;
                var11 = var2.channelId;
                var7 = var2.panelMode;
                var12 = var2.lastParticipantId;
                var9 = var2.speakingUserId;
                var13 = var2.focusedParticipantId;
                var8 = var2.blockList;
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun111429_ip = 53;
                    continue _fun111429
                }
            case 46:
                var8 = _closure1_slot14;
            case 53:
                var6 = var2.showSecondaryPIP;
                var4 = _closure1_slot4;
                var2 = var4.getId;
                var4 = var2.bind(var4)();
                var5 = null;
                var10 = var5 != var13;
                var2 = undefined;
                if (!var10) {
                    _fun111429_ip = 103;
                    continue _fun111429
                }
            case 87:
                var14 = _closure1_slot2;
                var10 = var14.getParticipant;
                var2 = var10.bind(var14)(var11, var13);
            case 103:
                var10 = _closure1_slot6;
                var10 = var10.PANEL;
                if (!(var7 === var10)) {
                    _fun111429_ip = 124;
                    continue _fun111429
                }
            case 117:
                if (!(var5 != var2)) {
                    _fun111429_ip = 1293;
                    continue _fun111429
                }
            case 124:
                var10 = _closure1_slot6;
                var10 = var10.PANEL;
                if (!(var7 === var10)) {
                    _fun111429_ip = 314;
                    continue _fun111429
                }
            case 141:
                if (!(var5 != var13)) {
                    _fun111429_ip = 314;
                    continue _fun111429
                }
            case 148:
                var10 = var5 == var2;
                var14 = undefined;
                if (var10) {
                    _fun111429_ip = 162;
                    continue _fun111429
                }
            case 157:
                var14 = var2.type;
            case 162:
                var10 = _closure1_slot11;
                var10 = var10.STREAM;
                if (!(var14 === var10)) {
                    _fun111429_ip = 314;
                    continue _fun111429
                }
            case 179:
                var10 = var5 == var2;
                var14 = undefined;
                if (var10) {
                    _fun111429_ip = 194;
                    continue _fun111429
                }
            case 188:
                var14 = var2.userVideo;
            case 194:
                var10 = true;
                if (!(var10 === var14)) {
                    _fun111429_ip = 314;
                    continue _fun111429
                }
            case 200:
                var14 = var8.has;
                var10 = var2.user;
                var10 = var10.id;
                var10 = var14.bind(var8)(var10);
                if (var10) {
                    _fun111429_ip = 314;
                    continue _fun111429
                }
            case 223:
                var15 = _closure1_slot2;
                var14 = var15.getParticipant;
                var10 = var2.user;
                var10 = var10.id;
                var14 = var14.bind(var15)(var11, var10);
                if (!(var5 != var14)) {
                    _fun111429_ip = 314;
                    continue _fun111429
                }
            case 253:
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var10 = 7;
                var10 = var16[var10];
                var15 = var15.bind(var0)(var10);
                var10 = var15.canRenderParticipantVideo;
                var10 = var10.bind(var15)(var14);
                if (!var10) {
                    _fun111429_ip = 314;
                    continue _fun111429
                }
            case 287:
                var10 = {};
                var14 = var14.id;
                var10.id = var14;
                var14 = _closure1_slot11;
                var14 = var14.USER;
                var10.type = var14;
                return var10;
            case 314:
                if (!(var5 != var13)) {
                    _fun111429_ip = 352;
                    continue _fun111429
                }
            case 318:
                if (!(var5 != var2)) {
                    _fun111429_ip = 352;
                    continue _fun111429
                }
            case 322:
                var10 = var8.has;
                var10 = var10.bind(var8)(var13);
                if (var10) {
                    _fun111429_ip = 352;
                    continue _fun111429
                }
            case 335:
                var10 = {};
                var10.id = var13;
                var13 = var2.type;
                var10.type = var13;
                return var10;
            case 352:
                var10 = var5 == var2;
                var13 = undefined;
                if (var10) {
                    _fun111429_ip = 366;
                    continue _fun111429
                }
            case 361:
                var13 = var2.type;
            case 366:
                var10 = _closure1_slot11;
                var10 = var10.ACTIVITY;
                if (!(var13 !== var10)) {
                    _fun111429_ip = 514;
                    continue _fun111429
                }
            case 383:
                if (var6) {
                    _fun111429_ip = 514;
                    continue _fun111429
                }
            case 389:
                var10 = _closure1_slot26;
                var13 = _closure1_slot2;
                var6 = var13.getActivityParticipants;
                var6 = var6.bind(var13)(var11);
                var13 = var10.bind(var0)(var6);
                var10 = var13.bind(var0)();
                var6 = var10.done;
                if (var6) {
                    _fun111429_ip = 514;
                    continue _fun111429
                }
            case 427:
                var14 = var10.value;
                var16 = var14.participants;
                var15 = var16.some;
                var6 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isActivityParticipantCurrentUserCurrentSession;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var15.bind(var16)(var6);
                if (!var6) {
                    _fun111429_ip = 499;
                    continue _fun111429
                }
            case 459:
                var15 = var8.has;
                var6 = var14.id;
                var6 = var15.bind(var8)(var6);
                if (var6) {
                    _fun111429_ip = 499;
                    continue _fun111429
                }
            case 477:
                var6 = {};
                var15 = var14.id;
                var6.id = var15;
                var14 = var14.type;
                var6.type = var14;
                return var6;
            case 499:
                var14 = var13.bind(var0)();
                var6 = var14.done;
                var10 = var14;
                if (!var6) {
                    _fun111429_ip = 427;
                    continue _fun111429
                }
            case 514:
                var10 = _closure1_slot26;
                var13 = _closure1_slot2;
                var6 = var13.getStreamParticipants;
                var6 = var6.bind(var13)(var11);
                var13 = var10.bind(var0)(var6);
                var10 = var13.bind(var0)();
                var6 = var10.done;
                if (var6) {
                    _fun111429_ip = 651;
                    continue _fun111429
                }
            case 550:
                var14 = var10.value;
                var15 = var8.has;
                var6 = var14.id;
                var6 = var15.bind(var8)(var6);
                if (var6) {
                    _fun111429_ip = 636;
                    continue _fun111429
                }
            case 573:
                var17 = _closure1_slot3;
                var16 = var17.getActiveStreamForUser;
                var6 = var14.user;
                var15 = var6.id;
                var6 = var14.stream;
                var6 = var6.guildId;
                var6 = var16.bind(var17)(var15, var6);
                if (!(var5 != var6)) {
                    _fun111429_ip = 636;
                    continue _fun111429
                }
            case 614:
                var6 = {};
                var15 = var14.id;
                var6.id = var15;
                var14 = var14.type;
                var6.type = var14;
                return var6;
            case 636:
                var14 = var13.bind(var0)();
                var6 = var14.done;
                var10 = var14;
                if (!var6) {
                    _fun111429_ip = 550;
                    continue _fun111429
                }
            case 651:
                if (!(var5 != var9)) {
                    _fun111429_ip = 710;
                    continue _fun111429
                }
            case 655:
                var6 = var8.has;
                var6 = var6.bind(var8)(var9);
                if (var6) {
                    _fun111429_ip = 710;
                    continue _fun111429
                }
            case 668:
                var10 = _closure1_slot2;
                var6 = var10.getParticipant;
                var6 = var6.bind(var10)(var11, var9);
                if (!(var5 != var6)) {
                    _fun111429_ip = 710;
                    continue _fun111429
                }
            case 688:
                var6 = {};
                var6.id = var9;
                var9 = _closure1_slot11;
                var9 = var9.USER;
                var6.type = var9;
                return var6;
            case 710:
                var9 = var5 != var12;
                var6 = undefined;
                if (!var9) {
                    _fun111429_ip = 735;
                    continue _fun111429
                }
            case 719:
                var10 = _closure1_slot2;
                var9 = var10.getParticipant;
                var6 = var9.bind(var10)(var11, var12);
            case 735:
                if (!(var5 != var6)) {
                    _fun111429_ip = 981;
                    continue _fun111429
                }
            case 742:
                var10 = var8.has;
                var9 = var6.id;
                var9 = var10.bind(var8)(var9);
                if (var9) {
                    _fun111429_ip = 981;
                    continue _fun111429
                }
            case 763:
                var10 = var6.type;
                var9 = _closure1_slot11;
                var9 = var9.STREAM;
                if (!(var9 !== var10)) {
                    _fun111429_ip = 884;
                    continue _fun111429
                }
            case 782:
                var9 = _closure1_slot11;
                var9 = var9.ACTIVITY;
                if (!(var9 !== var10)) {
                    _fun111429_ip = 835;
                    continue _fun111429
                }
            case 796:
                var9 = _closure1_slot11;
                var9 = var9.USER;
                if (!(var9 === var10)) {
                    _fun111429_ip = 981;
                    continue _fun111429
                }
            case 813:
                var9 = {};
                var10 = var6.id;
                var9.id = var10;
                var10 = var6.type;
                var9.type = var10;
                return var9;
            case 835:
                var10 = var6.participants;
                var9 = var10.some;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isActivityParticipantCurrentUserCurrentSession;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var9.bind(var10)(var1);
                if (!var1) {
                    _fun111429_ip = 981;
                    continue _fun111429
                }
            case 862:
                var1 = {};
                var9 = var6.id;
                var1.id = var9;
                var9 = var6.type;
                var1.type = var9;
                return var1;
            case 884:
                var12 = _closure1_slot3;
                var10 = var12.getActiveStreamForUser;
                var1 = var6.user;
                var9 = var1.id;
                var1 = var6.stream;
                var1 = var1.guildId;
                var1 = var10.bind(var12)(var9, var1);
                if (!(var5 != var1)) {
                    _fun111429_ip = 981;
                    continue _fun111429
                }
            case 925:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var1 = 7;
                var1 = var10[var1];
                var9 = var9.bind(var0)(var1);
                var1 = var9.canRenderParticipantVideo;
                var1 = var1.bind(var9)(var6);
                if (!var1) {
                    _fun111429_ip = 981;
                    continue _fun111429
                }
            case 959:
                var1 = {};
                var9 = var6.id;
                var1.id = var9;
                var6 = var6.type;
                var1.type = var6;
                return var1;
            case 981:
                var6 = _closure1_slot2;
                var1 = var6.getParticipant;
                var6 = var1.bind(var6)(var11, var4);
                var1 = var8.has;
                var1 = var1.bind(var8)(var4);
                if (var1) {
                    _fun111429_ip = 1070;
                    continue _fun111429
                }
            case 1010:
                if (!(var5 != var6)) {
                    _fun111429_ip = 1070;
                    continue _fun111429
                }
            case 1014:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var1 = 7;
                var1 = var10[var1];
                var9 = var9.bind(var0)(var1);
                var1 = var9.canRenderParticipantVideo;
                var1 = var1.bind(var9)(var6);
                if (!var1) {
                    _fun111429_ip = 1070;
                    continue _fun111429
                }
            case 1048:
                var1 = {};
                var1.id = var4;
                var9 = _closure1_slot11;
                var9 = var9.USER;
                var1.type = var9;
                return var1;
            case 1070:
                var9 = _closure1_slot26;
                var10 = _closure1_slot2;
                var1 = var10.getVideoParticipants;
                var1 = var1.bind(var10)(var11);
                var11 = var9.bind(var0)(var1);
                var9 = var11.bind(var0)();
                var1 = var9.done;
                var10 = 7;
                if (var1) {
                    _fun111429_ip = 1200;
                    continue _fun111429
                }
            case 1109:
                var12 = var9.value;
                var13 = var8.has;
                var1 = var12.id;
                var1 = var13.bind(var8)(var1);
                if (var1) {
                    _fun111429_ip = 1185;
                    continue _fun111429
                }
            case 1132:
                var13 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var10];
                var13 = var13.bind(var0)(var1);
                var1 = var13.canRenderParticipantVideo;
                var1 = var1.bind(var13)(var12);
                if (!var1) {
                    _fun111429_ip = 1185;
                    continue _fun111429
                }
            case 1163:
                var1 = {};
                var13 = var12.id;
                var1.id = var13;
                var12 = var12.type;
                var1.type = var12;
                return var1;
            case 1185:
                var12 = var11.bind(var0)();
                var1 = var12.done;
                var9 = var12;
                if (!var1) {
                    _fun111429_ip = 1109;
                    continue _fun111429
                }
            case 1200:
                var1 = var8.has;
                var8 = var1.bind(var8)(var4);
                var1 = undefined;
                if (var8) {
                    _fun111429_ip = 1291;
                    continue _fun111429
                }
            case 1215:
                var6 = var5 == var6;
                var1 = undefined;
                if (var6) {
                    _fun111429_ip = 1291;
                    continue _fun111429
                }
            case 1224:
                var6 = _closure1_slot6;
                var6 = var6.PANEL;
                if (!(var7 === var6)) {
                    _fun111429_ip = 1268;
                    continue _fun111429
                }
            case 1238:
                var6 = var5 == var2;
                var5 = undefined;
                if (var6) {
                    _fun111429_ip = 1252;
                    continue _fun111429
                }
            case 1247:
                var5 = var2.type;
            case 1252:
                var2 = _closure1_slot11;
                var2 = var2.ACTIVITY;
                var1 = undefined;
                if (!(var5 === var2)) {
                    _fun111429_ip = 1291;
                    continue _fun111429
                }
            case 1268:
                var2 = {};
                var2.id = var4;
                var3 = _closure1_slot11;
                var3 = var3.USER;
                var2.type = var3;
                var1 = var2;
            case 1291:
                return var1;
            case 1293:
                return var0;
        }
    };
    var2.computePIPParticipantToShow = var8;
    var7 = function(arg0) { // Original name: getPIPMode, environment: var7
        _fun111432: for (var _fun111432_ip = 0;;) switch (_fun111432_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.channelId;
                var0 = var1.connected;
                var7 = var1.manuallyFocusedId;
                var3 = var1.mode;
                var4 = var1.selfHasVideo;
                var1 = undefined;
                if (var0) {
                    _fun111432_ip = 38;
                    continue _fun111432
                }
            case 36:
                return var1;
            case 38:
                var5 = null;
                var0 = var5 != var7;
                var2 = undefined;
                if (!var0) {
                    _fun111432_ip = 68;
                    continue _fun111432
                }
            case 49:
                var6 = _closure1_slot2;
                var0 = var6.getParticipant;
                var2 = var0.bind(var6)(var8, var7);
            case 68:
                var6 = _closure1_slot6;
                var6 = var6.PANEL;
                if (!(var3 === var6)) {
                    _fun111432_ip = 404;
                    continue _fun111432
                }
            case 88:
                if (!(var5 != var2)) {
                    _fun111432_ip = 404;
                    continue _fun111432
                }
            case 95:
                var7 = var2.type;
                var6 = _closure1_slot11;
                var6 = var6.ACTIVITY;
                if (!(var7 !== var6)) {
                    _fun111432_ip = 468;
                    continue _fun111432
                }
            case 117:
                var7 = var2.type;
                var6 = _closure1_slot11;
                var6 = var6.STREAM;
                if (!(var7 === var6)) {
                    _fun111432_ip = 220;
                    continue _fun111432
                }
            case 136:
                var6 = var2.userVideo;
                if (!var6) {
                    _fun111432_ip = 220;
                    continue _fun111432
                }
            case 145:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 7;
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.canRenderParticipantVideo;
                var11 = _closure1_slot2;
                var10 = var11.getParticipant;
                var9 = var2.user;
                var9 = var9.id;
                var9 = var10.bind(var11)(var8, var9);
                var10 = var5 != var9;
                var5 = undefined;
                if (!var10) {
                    _fun111432_ip = 209;
                    continue _fun111432
                }
            case 206:
                var5 = var9;
            case 209:
                var5 = var6.bind(var7)(var5);
                if (var5) {
                    _fun111432_ip = 456;
                    continue _fun111432
                }
            case 220:
                if (var4) {
                    _fun111432_ip = 225;
                    continue _fun111432
                }
            case 223:
                return var1;
            case 225:
                var6 = var2.id;
                var7 = _closure1_slot4;
                var5 = var7.getId;
                var5 = var5.bind(var7)();
                if (!(var6 === var5)) {
                    _fun111432_ip = 444;
                    continue _fun111432
                }
            case 251:
                var6 = _closure1_slot26;
                var7 = _closure1_slot2;
                var5 = var7.getVideoParticipants;
                var5 = var5.bind(var7)(var8);
                var8 = var6.bind(var1)(var5);
                var6 = var8.bind(var1)();
                var5 = var6.done;
                var7 = 7;
                if (var5) {
                    _fun111432_ip = 378;
                    continue _fun111432
                }
            case 290:
                var10 = var6.value;
                var9 = var10.id;
                var11 = _closure1_slot4;
                var5 = var11.getId;
                var5 = var5.bind(var11)();
                if (!(var9 !== var5)) {
                    _fun111432_ip = 349;
                    continue _fun111432
                }
            case 318:
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var9 = var9.bind(var1)(var5);
                var5 = var9.canRenderParticipantVideo;
                var5 = var5.bind(var9)(var10);
                if (var5) {
                    _fun111432_ip = 366;
                    continue _fun111432
                }
            case 349:
                var9 = var8.bind(var1)();
                var5 = var9.done;
                var6 = var9;
                if (var5) {
                    _fun111432_ip = 378;
                    continue _fun111432
                }
            case 364:
                _fun111432_ip = 290;
                continue _fun111432;
            case 366:
                var5 = _closure1_slot7;
                var5 = var5.IN_PANEL;
                return var5;
            case 378:
                if (!var4) {
                    _fun111432_ip = 404;
                    continue _fun111432
                }
            case 381:
                var4 = var2.id;
                var5 = _closure1_slot4;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                if (!(var4 === var2)) {
                    _fun111432_ip = 432;
                    continue _fun111432
                }
            case 404:
                var2 = _closure1_slot6;
                var2 = var2.PIP;
                var1 = undefined;
                if (!(var3 === var2)) {
                    _fun111432_ip = 430;
                    continue _fun111432
                }
            case 420:
                var2 = _closure1_slot7;
                var1 = var2.IN_APP;
            case 430:
                return var1;
            case 432:
                var1 = _closure1_slot7;
                var1 = var1.IN_PANEL;
                return var1;
            case 444:
                var1 = _closure1_slot7;
                var1 = var1.IN_PANEL;
                return var1;
            case 456:
                var1 = _closure1_slot7;
                var1 = var1.IN_PANEL;
                return var1;
            case 468:
                var0 = _closure1_slot7;
                var0 = var0.IN_PANEL;
                return var0;
        }
    };
    var2.getPIPMode = var7;
    var2.getPIPWindowDimensions = var6;
    var2.pipXYtoAbsoluteXY = var5;
    var2.getClampedPIPPosition = var4;
    var2.calculatePIPPositionFromVelocity = var3;
    var2.getVoicePanelPIPBorderRadius = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3908, 3673, 1216, 11838, 14283, 3482, 11839, 8008, 12624, 671, 2]);