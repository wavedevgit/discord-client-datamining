// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var4 = var3.useEffect;
    var _closure1_slot2 = var4;
    var4 = var3.useMemo;
    var _closure1_slot3 = var4;
    var3 = var3.useRef;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'function eulerToQuaternion_Pnpm_useAnimatedSensorTs1(pitch,roll,yaw){const c1=Math.cos(pitch/2);const s1=Math.sin(pitch/2);const c2=Math.cos(roll/2);const s2=Math.sin(roll/2);const c3=Math.cos(yaw/2);const s3=Math.sin(yaw/2);return[s1*c2*c3-c1*s2*s3,c1*s2*c3+s1*c2*s3,c1*c2*s3+s1*s2*c3,c1*c2*c3-s1*s2*s3];}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2) { // Original name: eulerToQuaternion, environment: var0
            var2 = arg0;
            var1 = arg1;
            var8 = arg2;
            var3 = global;
            var6 = var3.Math;
            var5 = var6.cos;
            var0 = 2;
            var4 = var2 / var0;
            var6 = var5.bind(var6)(var4);
            var5 = var3.Math;
            var4 = var5.sin;
            var2 = var2 / var0;
            var4 = var4.bind(var5)(var2);
            var7 = var3.Math;
            var5 = var7.cos;
            var2 = var1 / var0;
            var2 = var5.bind(var7)(var2);
            var7 = var3.Math;
            var5 = var7.sin;
            var1 = var1 / var0;
            var1 = var5.bind(var7)(var1);
            var9 = var3.Math;
            var7 = var9.cos;
            var5 = var8 / var0;
            var5 = var7.bind(var9)(var5);
            var7 = var3.Math;
            var3 = var7.sin;
            var0 = var8 / var0;
            var3 = var3.bind(var7)(var0);
            var0 = var4 * var2;
            var7 = var0 * var5;
            var0 = var6 * var1;
            var0 = var0 * var3;
            var7 = var7 - var0;
            var0 = new Array(4);
            var0[0] = var7;
            var7 = var6 * var1;
            var8 = var7 * var5;
            var7 = var4 * var2;
            var7 = var7 * var3;
            var7 = var8 + var7;
            var0[1] = var7;
            var7 = var6 * var2;
            var8 = var7 * var3;
            var7 = var4 * var1;
            var7 = var7 * var5;
            var7 = var8 + var7;
            var0[2] = var7;
            var2 = var6 * var2;
            var2 = var2 * var5;
            var1 = var4 * var1;
            var1 = var1 * var3;
            var1 = var2 - var1;
            var0[3] = var1;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 14525486759705.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'function adjustRotationToInterfaceOrientation_Pnpm_useAnimatedSensorTs2(data){const{InterfaceOrientation,eulerToQuaternion}=this.__closure;const{interfaceOrientation:interfaceOrientation,pitch:pitch,roll:roll,yaw:yaw}=data;if(interfaceOrientation===InterfaceOrientation.ROTATION_90){data.pitch=roll;data.roll=-pitch;data.yaw=yaw-Math.PI/2;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_270){data.pitch=-roll;data.roll=pitch;data.yaw=yaw+Math.PI/2;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_180){data.pitch*=-1;data.roll*=-1;data.yaw*=-1;}const q=eulerToQuaternion(data.pitch,data.roll,data.yaw);data.qx=q[0];data.qy=q[1];data.qz=q[2];data.qw=q[3];return data;}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: adjustRotationToInterfaceOrientation, environment: var0
            _fun34790: for (var _fun34790_ip = 0;;) switch (_fun34790_ip) {
                case 0:
                    var0 = arg0;
                    var8 = var0.interfaceOrientation;
                    var3 = var0.pitch;
                    var5 = var0.roll;
                    var4 = var0.yaw;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 1;
                    var7 = var6[var1];
                    var6 = undefined;
                    var7 = var9.bind(var6)(var7);
                    var7 = var7.InterfaceOrientation;
                    var7 = var7.ROTATION_90;
                    if (!(var8 !== var7)) {
                        _fun34790_ip = 244;
                        continue _fun34790
                    }
                case 71:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var1];
                    var7 = var9.bind(var6)(var7);
                    var7 = var7.InterfaceOrientation;
                    var7 = var7.ROTATION_270;
                    if (!(var8 !== var7)) {
                        _fun34790_ip = 196;
                        continue _fun34790
                    }
                case 104:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var1];
                    var7 = var9.bind(var6)(var7);
                    var7 = var7.InterfaceOrientation;
                    var7 = var7.ROTATION_180;
                    if (!(var8 === var7)) {
                        _fun34790_ip = 290;
                        continue _fun34790
                    }
                case 140:
                    var7 = var0.pitch;
                    var8 = -1;
                    var7 = var7 * var8;
                    var0.pitch = var7;
                    var7 = var0.roll;
                    var7 = var7 * var8;
                    var0.roll = var7;
                    var7 = var0.yaw;
                    var7 = var7 * var8;
                    var0.yaw = var7;
                    _fun34790_ip = 290;
                    continue _fun34790;
                case 196:
                    var7 = -var5;
                    var0.pitch = var7;
                    var0.roll = var3;
                    var7 = global;
                    var7 = var7.Math;
                    var8 = var7.PI;
                    var7 = 2;
                    var7 = var8 / var7;
                    var7 = var4 + var7;
                    var0.yaw = var7;
                    _fun34790_ip = 290;
                    continue _fun34790;
                case 244:
                    var0.pitch = var5;
                    var3 = -var3;
                    var0.roll = var3;
                    var3 = global;
                    var3 = var3.Math;
                    var5 = var3.PI;
                    var3 = 2;
                    var3 = var5 / var3;
                    var3 = var4 - var3;
                    var0.yaw = var3;
                case 290:
                    var5 = _closure1_slot6;
                    var4 = var0.pitch;
                    var3 = var0.roll;
                    var2 = var0.yaw;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var3 = 0;
                    var3 = var2[var3];
                    var0.qx = var3;
                    var1 = var2[var1];
                    var0.qy = var1;
                    var1 = 2;
                    var1 = var2[var1];
                    var0.qz = var1;
                    var1 = 3;
                    var1 = var2[var1];
                    var0.qw = var1;
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.InterfaceOrientation;
        var2.InterfaceOrientation = var3;
        var3 = _closure1_slot6;
        var2.eulerToQuaternion = var3;
        var0.__closure = var2;
        var2 = 16635654688360.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot8 = var3;
    var3 = {};
    var4 = 'function adjustVectorToInterfaceOrientation_Pnpm_useAnimatedSensorTs3(data){const{InterfaceOrientation}=this.__closure;const{interfaceOrientation:interfaceOrientation,x:x,y:y}=data;if(interfaceOrientation===InterfaceOrientation.ROTATION_90){data.x=-y;data.y=x;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_270){data.x=y;data.y=-x;}else if(interfaceOrientation===InterfaceOrientation.ROTATION_180){data.x*=-1;data.y*=-1;}return data;}';
    var3.code = var4;
    var _closure1_slot9 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: adjustVectorToInterfaceOrientation, environment: var0
            _fun34792: for (var _fun34792_ip = 0;;) switch (_fun34792_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.interfaceOrientation;
                    var1 = var0.x;
                    var2 = var0.y;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var7 = 1;
                    var5 = var5[var7];
                    var6 = undefined;
                    var5 = var8.bind(var6)(var5);
                    var5 = var5.InterfaceOrientation;
                    var5 = var5.ROTATION_90;
                    if (!(var4 !== var5)) {
                        _fun34792_ip = 184;
                        continue _fun34792
                    }
                case 63:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var7];
                    var5 = var8.bind(var6)(var5);
                    var5 = var5.InterfaceOrientation;
                    var5 = var5.ROTATION_270;
                    if (!(var4 !== var5)) {
                        _fun34792_ip = 167;
                        continue _fun34792
                    }
                case 96:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.InterfaceOrientation;
                    var3 = var3.ROTATION_180;
                    if (!(var4 === var3)) {
                        _fun34792_ip = 199;
                        continue _fun34792
                    }
                case 129:
                    var3 = var0.x;
                    var4 = -1;
                    var3 = var3 * var4;
                    var0.x = var3;
                    var3 = var0.y;
                    var3 = var3 * var4;
                    var0.y = var3;
                    _fun34792_ip = 199;
                    continue _fun34792;
                case 167:
                    var0.x = var2;
                    var3 = -var1;
                    var0.y = var3;
                    _fun34792_ip = 199;
                    continue _fun34792;
                case 184:
                    var2 = -var2;
                    var0.x = var2;
                    var0.y = var1;
                case 199:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.InterfaceOrientation;
        var2.InterfaceOrientation = var3;
        var0.__closure = var2;
        var2 = 5352466445526.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot9;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot10 = var3;
    var3 = {};
    var4 = 'function pnpm_useAnimatedSensorTs4(data){const{adjustToInterfaceOrientation,sensorType,SensorType,adjustRotationToInterfaceOrientation,adjustVectorToInterfaceOrientation,sensorData,callMicrotasks}=this.__closure;if(adjustToInterfaceOrientation){if(sensorType===SensorType.ROTATION){data=adjustRotationToInterfaceOrientation(data);}else{data=adjustVectorToInterfaceOrientation(data);}}sensorData.value=data;callMicrotasks();}';
    var3.code = var4;
    var _closure1_slot11 = var3;
    var1 = function(arg0, arg1) { // Original name: useAnimatedSensor, environment: var1
        _fun34793: for (var _fun34793_ip = 0;;) switch (_fun34793_ip) {
            case 0:
                var6 = arg0;
                var8 = arg1;
                var _closure2_slot0 = var6;
                var0 = _closure1_slot4;
                var4 = undefined;
                var0 = var0.bind(var4)(var8);
                var _closure2_slot1 = var0;
                var3 = var0.current;
                var5 = null;
                var9 = var5 == var3;
                var7 = undefined;
                if (var9) {
                    _fun34793_ip = 52;
                    continue _fun34793
                }
            case 46:
                var7 = var3.adjustToInterfaceOrientation;
            case 52:
                var9 = var5 == var8;
                var3 = undefined;
                if (var9) {
                    _fun34793_ip = 67;
                    continue _fun34793
                }
            case 61:
                var3 = var8.adjustToInterfaceOrientation;
            case 67:
                var3 = var7 !== var3;
                if (var3) {
                    _fun34793_ip = 113;
                    continue _fun34793
                }
            case 74:
                var7 = var0.current;
                var10 = var5 == var7;
                var9 = undefined;
                if (var10) {
                    _fun34793_ip = 94;
                    continue _fun34793
                }
            case 88:
                var9 = var7.interval;
            case 94:
                var10 = var5 == var8;
                var7 = undefined;
                if (var10) {
                    _fun34793_ip = 109;
                    continue _fun34793
                }
            case 103:
                var7 = var8.interval;
            case 109:
                var3 = var9 !== var7;
            case 113:
                if (var3) {
                    _fun34793_ip = 155;
                    continue _fun34793
                }
            case 116:
                var9 = var0.current;
                var10 = var5 == var9;
                var7 = undefined;
                if (var10) {
                    _fun34793_ip = 136;
                    continue _fun34793
                }
            case 130:
                var7 = var9.iosReferenceFrame;
            case 136:
                var9 = var5 == var8;
                var5 = undefined;
                if (var9) {
                    _fun34793_ip = 151;
                    continue _fun34793
                }
            case 145:
                var5 = var8.iosReferenceFrame;
            case 151:
                var3 = var7 !== var5;
            case 155:
                if (!var3) {
                    _fun34793_ip = 185;
                    continue _fun34793
                }
            case 158:
                var3 = global;
                var7 = var3.Object;
                var5 = var7.assign;
                var3 = {};
                var3 = var5.bind(var7)(var3, var8);
                var0.current = var3;
            case 185:
                var5 = _closure1_slot3;
                var0 = var0.current;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = global;
                    var3 = var0.Object;
                    var2 = var3.assign;
                    var1 = {
                        'interval': 'auto',
                        'adjustToInterfaceOrientation': true
                    };
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 1;
                    var4 = var4[var0];
                    var0 = undefined;
                    var0 = var5.bind(var0)(var4);
                    var0 = var0.IOSReferenceFrame;
                    var0 = var0.Auto;
                    var1.iosReferenceFrame = var0;
                    var0 = _closure2_slot1;
                    var0 = var0.current;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var5.bind(var4)(var0, var3);
                var _closure2_slot2 = var5;
                var3 = _closure1_slot4;
                var0 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 2;
                var7 = var9[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.initializeSensor;
                var7 = var7.bind(var8)(var6, var5);
                var0.sensor = var7;
                var7 = function() { // Original name: unregister, environment: var1
                    var0 = undefined;
                    return var0;
                };
                var0.unregister = var7;
                var7 = false;
                var0.isAvailable = var7;
                var0.config = var5;
                var0 = var3.bind(var4)(var0);
                var _closure2_slot3 = var0;
                var3 = _closure1_slot2;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun34796: for (var _fun34796_ip = 0;;) switch (_fun34796_ip) {
                        case 0:
                            var5 = _closure2_slot3;
                            var4 = {};
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot1;
                            var2 = 2;
                            var3 = var13[var2];
                            var11 = undefined;
                            var9 = var12.bind(var11)(var3);
                            var6 = var9.initializeSensor;
                            var7 = _closure2_slot0;
                            var3 = _closure2_slot2;
                            var3 = var6.bind(var9)(var7, var3);
                            var4.sensor = var3;
                            var3 = function() { // Original name: unregister, environment: var0
                                var0 = undefined;
                                return var0;
                            };
                            var4.unregister = var3;
                            var3 = false;
                            var4.isAvailable = var3;
                            var6 = _closure2_slot2;
                            var4.config = var6;
                            var5.current = var4;
                            var4 = _closure2_slot3;
                            var4 = var4.current;
                            var10 = var4.sensor;
                            var _closure3_slot0 = var10;
                            var4 = _closure2_slot3;
                            var4 = var4.current;
                            var4 = var4.config;
                            var14 = var4.adjustToInterfaceOrientation;
                            var _closure3_slot1 = var14;
                            var2 = var13[var2];
                            var6 = var12.bind(var11)(var2);
                            var5 = var6.registerSensor;
                            var4 = _closure2_slot2;
                            var2 = function(arg0) { // Original name: pnpm_useAnimatedSensorTs4, environment: var0
                                _fun34798: for (var _fun34798_ip = 0;;) switch (_fun34798_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var2 = _closure3_slot1;
                                        var1 = var5;
                                        if (!var2) {
                                            _fun34798_ip = 87;
                                            continue _fun34798
                                        }
                                    case 16:
                                        var6 = _closure2_slot0;
                                        var7 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var2 = 1;
                                        var2 = var4[var2];
                                        var4 = undefined;
                                        var2 = var7.bind(var4)(var2);
                                        var2 = var2.SensorType;
                                        var2 = var2.ROTATION;
                                        if (!(var6 !== var2)) {
                                            _fun34798_ip = 75;
                                            continue _fun34798
                                        }
                                    case 64:
                                        var2 = _closure1_slot10;
                                        var2 = var2.bind(var4)(var5);
                                        _fun34798_ip = 84;
                                        continue _fun34798;
                                    case 75:
                                        var3 = _closure1_slot8;
                                        var2 = var3.bind(var4)(var5);
                                    case 84:
                                        var1 = var2;
                                    case 87:
                                        var0 = _closure3_slot0;
                                        var0.value = var1;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 3;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.callMicrotasks;
                                        var1 = var1.bind(var2)();
                                        return var0;
                                }
                            };
                            var9 = {};
                            var9.adjustToInterfaceOrientation = var14;
                            var9.sensorType = var7;
                            var14 = 1;
                            var14 = var13[var14];
                            var14 = var12.bind(var11)(var14);
                            var14 = var14.SensorType;
                            var9.SensorType = var14;
                            var14 = _closure1_slot8;
                            var9.adjustRotationToInterfaceOrientation = var14;
                            var14 = _closure1_slot10;
                            var9.adjustVectorToInterfaceOrientation = var14;
                            var9.sensorData = var10;
                            var10 = 3;
                            var10 = var13[var10];
                            var10 = var12.bind(var11)(var10);
                            var10 = var10.callMicrotasks;
                            var9.callMicrotasks = var10;
                            var2.__closure = var9;
                            var9 = 6807952122364.0;
                            var2.__workletHash = var9;
                            var8 = _closure1_slot11;
                            var2.__initData = var8;
                            var4 = var5.bind(var6)(var7, var4, var2);
                            var _closure3_slot2 = var4;
                            var2 = -1;
                            if (!(var2 === var4)) {
                                _fun34796_ip = 336;
                                continue _fun34796
                            }
                        case 299:
                            var2 = _closure2_slot3;
                            var4 = var2.current;
                            var2 = function() { // Environment: var0
                                var0 = undefined;
                                return var0;
                            };
                            var4.unregister = var2;
                            var2 = _closure2_slot3;
                            var2 = var2.current;
                            var2.isAvailable = var3;
                            _fun34796_ip = 373;
                            continue _fun34796;
                        case 336:
                            var2 = _closure2_slot3;
                            var3 = var2.current;
                            var2 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.unregisterSensor;
                                var0 = _closure3_slot2;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3.unregister = var2;
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = true;
                            var2.isAvailable = var1;
                        case 373:
                            var0 = function() { // Environment: var0
                                var0 = _closure2_slot3;
                                var1 = var0.current;
                                var0 = var1.unregister;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0 = var0.current;
                return var0;
        }
    };
    var2.useAnimatedSensor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3705, 3724, 3687]);