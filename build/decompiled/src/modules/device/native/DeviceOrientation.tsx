// modules/device/native/DeviceOrientation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var6 = function(arg0) { // Original name: handleOrientationChange, environment: var1
        _fun62060: for (var _fun62060_ip = 0;;) switch (_fun62060_ip) {
            case 0:
                var3 = arg0;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.isIOS;
                var4 = var4.bind(var5)();
                if (!var4) {
                    _fun62060_ip = 52;
                    continue _fun62060
                }
            case 43:
                var4 = _closure1_slot10;
                var4 = var4.bind(var0)(var3);
            case 52:
                var4 = _closure1_slot8;
                if (!(var4 !== var3)) {
                    _fun62060_ip = 274;
                    continue _fun62060
                }
            case 63:
                _closure1_slot8 = var3;
                var4 = _closure1_slot7;
                var3 = var4.getState;
                var3 = var3.bind(var4)();
                var5 = var3.orientationLock;
                var3 = null;
                var3 = var3 != var5;
                if (!var3) {
                    _fun62060_ip = 110;
                    continue _fun62060
                }
            case 96:
                var6 = _closure1_slot6;
                var4 = var6.includes;
                var3 = var4.bind(var6)(var5);
            case 110:
                var6 = _closure1_slot8;
                var4 = 'LANDSCAPE';
                if (!(var4 === var6)) {
                    _fun62060_ip = 163;
                    continue _fun62060
                }
            case 122:
                if (var3) {
                    _fun62060_ip = 163;
                    continue _fun62060
                }
            case 125:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 4;
                var3 = var7[var3];
                var7 = var6.bind(var0)(var3);
                var6 = var7.batchUpdates;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.LANDSCAPE;
                    var0.orientation = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var6.bind(var7)(var3);
                _fun62060_ip = 274;
                continue _fun62060;
            case 163:
                var6 = _closure1_slot8;
                var3 = 'PORTRAIT';
                var3 = var3 === var6;
                if (var3) {
                    _fun62060_ip = 228;
                    continue _fun62060
                }
            case 178:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 5;
                var6 = var8[var6];
                var7 = var7.bind(var0)(var6);
                var6 = var7.isIpadOS;
                var6 = var6.bind(var7)();
                if (!var6) {
                    _fun62060_ip = 225;
                    continue _fun62060
                }
            case 211:
                var8 = _closure1_slot8;
                var7 = 'PORTRAITUPSIDEDOWN';
                var6 = var7 === var8;
            case 225:
                var3 = var6;
            case 228:
                if (!var3) {
                    _fun62060_ip = 235;
                    continue _fun62060
                }
            case 231:
                var3 = var4 !== var5;
            case 235:
                if (!var3) {
                    _fun62060_ip = 274;
                    continue _fun62060
                }
            case 238:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.PORTRAIT;
                    var0.orientation = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 274:
                return var0;
        }
    };
    var0 = function(arg0) { // Original name: handleDeviceOrientationChange, environment: var1
        _fun62063: for (var _fun62063_ip = 0;;) switch (_fun62063_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var2 = var1.orientationLock;
                var1 = _closure1_slot9;
                if (!var1) {
                    _fun62063_ip = 79;
                    continue _fun62063
                }
            case 33:
                var1 = 'LANDSCAPE';
                if (!(var1 !== var4)) {
                    _fun62063_ip = 65;
                    continue _fun62063
                }
            case 41:
                var3 = 'PORTRAIT';
                if (!(var3 === var4)) {
                    _fun62063_ip = 79;
                    continue _fun62063
                }
            case 49:
                if (!(var3 === var2)) {
                    _fun62063_ip = 79;
                    continue _fun62063
                }
            case 53:
                var4 = _closure1_slot11;
                var3 = undefined;
                var3 = var4.bind(var3)();
                _fun62063_ip = 79;
                continue _fun62063;
            case 65:
                if (!(var1 === var2)) {
                    _fun62063_ip = 79;
                    continue _fun62063
                }
            case 69:
                var1 = _closure1_slot11;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 79:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: consumeUnlockAfterRotationToLockRequest, environment: var1
        var4 = _closure1_slot12;
        var3 = {};
        var1 = false;
        var3.unlockAfterRotatingToPreviousLock = var1;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        _closure1_slot9 = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
    var5 = function(arg0) { // Original name: unlockOrientation, environment: var1
        _fun62065: for (var _fun62065_ip = 0;;) switch (_fun62065_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.unlockAfterRotatingToPreviousLock;
                var3 = _closure1_slot7;
                var0 = var3.getState;
                var0 = var0.bind(var3)();
                var3 = var0.orientationLock;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 3;
                var4 = var0[var6];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.isAndroid;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun62065_ip = 131;
                    continue _fun62065
                }
            case 67:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var5 = var5.bind(var0)(var4);
                var4 = var5.isIOS;
                var4 = var4.bind(var5)();
                if (!var4) {
                    _fun62065_ip = 140;
                    continue _fun62065
                }
            case 97:
                var4 = global;
                var6 = var4.parseInt;
                var4 = _closure1_slot4;
                var5 = var4.Version;
                var4 = 10;
                var5 = var6.bind(var0)(var5, var4);
                var4 = 16;
                if (!(var5 >= var4)) {
                    _fun62065_ip = 140;
                    continue _fun62065
                }
            case 131:
                if (!var1) {
                    _fun62065_ip = 140;
                    continue _fun62065
                }
            case 134:
                var1 = null;
                if (!(var1 == var3)) {
                    _fun62065_ip = 228;
                    continue _fun62065
                }
            case 140:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 6;
                var5 = var4[var1];
                var7 = var3.bind(var0)(var5);
                var6 = var7.ignoreAutoRotate;
                var5 = false;
                var5 = var6.bind(var7)(var5);
                var1 = var4[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.unlockAllOrientations;
                var1 = var1.bind(var3)();
                var3 = _closure1_slot0;
                var1 = 4;
                var1 = var4[var1];
                var4 = var3.bind(var0)(var1);
                var3 = var4.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = null;
                    var0.orientationLock = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                _fun62065_ip = 234;
                continue _fun62065;
            case 228:
                var1 = true;
                _closure1_slot9 = var1;
            case 234:
                return var0;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function(arg0, arg1) { // Original name: lockOrientation, environment: var1
        _fun62067: for (var _fun62067_ip = 0;;) switch (_fun62067_ip) {
            case 0:
                var7 = arg1;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var3 = 6;
                var4 = var0[var3];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.ignoreAutoRotate;
                var4 = null;
                var4 = var4 != var7;
                if (!var4) {
                    _fun62067_ip = 48;
                    continue _fun62067
                }
            case 45:
                var4 = var7;
            case 48:
                var4 = var5.bind(var6)(var4);
                var4 = false;
                _closure1_slot9 = var4;
                var5 = 'LANDSCAPE';
                var4 = arg0;
                if (!(var5 !== var4)) {
                    _fun62067_ip = 131;
                    continue _fun62067
                }
            case 70:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = var6[var3];
                var5 = var5.bind(var0)(var4);
                var4 = var5.lockToPortrait;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot0;
                var4 = 4;
                var4 = var6[var4];
                var6 = var5.bind(var0)(var4);
                var5 = var6.batchUpdates;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = 'PORTRAIT';
                    var0.orientationLock = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                _fun62067_ip = 190;
                continue _fun62067;
            case 131:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = var4[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.lockToLandscapeLeft;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 4;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = 'LANDSCAPE';
                    var0.orientationLock = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 190:
                return var0;
        }
    };
    var _closure1_slot13 = var4;
    var3 = function(arg0) { // Original name: lockOrientationForiOS, environment: var1
        _fun62070: for (var _fun62070_ip = 0;;) switch (_fun62070_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun62070_ip = 83;
                    continue _fun62070
                }
            case 41:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 5;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.isIpadOS;
                var4 = var4.bind(var5)();
                if (!var4) {
                    _fun62070_ip = 80;
                    continue _fun62070
                }
            case 74:
                var5 = null;
                var4 = var5 == var2;
            case 80:
                var3 = var4;
            case 83:
                if (var3) {
                    _fun62070_ip = 95;
                    continue _fun62070
                }
            case 86:
                var1 = _closure1_slot13;
                var1 = var1.bind(var0)(var2);
            case 95:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var13 = 0;
    var8 = var11[var13];
    var7 = arg3;
    var0 = undefined;
    var7 = var7.bind(var0)(var8);
    var _closure1_slot3 = var7;
    var9 = 1;
    var7 = var11[var9];
    var7 = var10.bind(var0)(var7);
    var14 = var7.AppState;
    var7 = var7.Platform;
    var _closure1_slot4 = var7;
    var8 = {};
    var8.PORTRAIT = var13;
    var7 = 'PORTRAIT';
    var8[var13] = var7;
    var8.LANDSCAPE = var9;
    var7 = 'LANDSCAPE';
    var8[var9] = var7;
    var _closure1_slot5 = var8;
    var7 = ['PORTRAIT', 'PORTRAITUPSIDEDOWN'];
    var _closure1_slot6 = var7;
    var7 = 2;
    var7 = var11[var7];
    var13 = var10.bind(var0)(var7);
    var9 = var13.create;
    var7 = function() { // Environment: var1
        var0 = {};
        var1 = _closure1_slot5;
        var1 = var1.PORTRAIT;
        var0.orientation = var1;
        var1 = null;
        var0.orientationLock = var1;
        return var0;
    };
    var7 = var9.bind(var13)(var7);
    var _closure1_slot7 = var7;
    var9 = null;
    var _closure1_slot8 = var9;
    var9 = false;
    var _closure1_slot9 = var9;
    var9 = 6;
    var13 = var11[var9];
    var16 = var12.bind(var0)(var13);
    var15 = var16.addOrientationDegreesChangeListener;
    var13 = function(arg0) { // Original name: handleOrientationDegreesChange, environment: var1
        _fun62072: for (var _fun62072_ip = 0;;) switch (_fun62072_ip) {
            case 0:
                var5 = arg0;
                var0 = 0;
                var1 = var5 >= var0;
                if (!var1) {
                    _fun62072_ip = 19;
                    continue _fun62072
                }
            case 12:
                var0 = 5;
                var1 = var5 <= var0;
            case 19:
                if (var1) {
                    _fun62072_ip = 32;
                    continue _fun62072
                }
            case 22:
                var0 = 355;
                var1 = var5 >= var0;
            case 32:
                var2 = 'PORTRAIT';
                var3 = true;
                var0 = var2;
                if (!(var1 !== var3)) {
                    _fun62072_ip = 136;
                    continue _fun62072
                }
            case 45:
                var1 = 85;
                var1 = var5 >= var1;
                if (!var1) {
                    _fun62072_ip = 62;
                    continue _fun62072
                }
            case 55:
                var4 = 95;
                var1 = var5 <= var4;
            case 62:
                var0 = 'LANDSCAPE-RIGHT';
                if (!(var1 !== var3)) {
                    _fun62072_ip = 136;
                    continue _fun62072
                }
            case 72:
                var1 = 175;
                var1 = var5 >= var1;
                if (!var1) {
                    _fun62072_ip = 89;
                    continue _fun62072
                }
            case 82:
                var4 = 185;
                var1 = var5 <= var4;
            case 89:
                var0 = 'PORTRAITUPSIDEDOWN';
                if (!(var1 !== var3)) {
                    _fun62072_ip = 136;
                    continue _fun62072
                }
            case 99:
                var1 = 265;
                var1 = var5 >= var1;
                if (!var1) {
                    _fun62072_ip = 122;
                    continue _fun62072
                }
            case 112:
                var4 = 275;
                var1 = var5 <= var4;
            case 122:
                var0 = 'LANDSCAPE-LEFT';
                if (!(var1 !== var3)) {
                    _fun62072_ip = 136;
                    continue _fun62072
                }
            case 132:
                var0 = 'UNKNOWN';
            case 136:
                var1 = 'LANDSCAPE-LEFT';
                if (!(var1 !== var0)) {
                    _fun62072_ip = 176;
                    continue _fun62072
                }
            case 146:
                var1 = 'LANDSCAPE-RIGHT';
                if (!(var1 !== var0)) {
                    _fun62072_ip = 176;
                    continue _fun62072
                }
            case 156:
                if (!(var2 === var0)) {
                    _fun62072_ip = 194;
                    continue _fun62072
                }
            case 160:
                var1 = _closure1_slot10;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                _fun62072_ip = 194;
                continue _fun62072;
            case 176:
                var2 = _closure1_slot10;
                var1 = undefined;
                var0 = 'LANDSCAPE';
                var0 = var2.bind(var1)(var0);
            case 194:
                var0 = undefined;
                return var0;
        }
    };
    var13 = var15.bind(var16)(var13);
    var13 = var11[var9];
    var15 = var12.bind(var0)(var13);
    var13 = var15.addOrientationListener;
    var13 = var13.bind(var15)(var6);
    var9 = var11[var9];
    var12 = var12.bind(var0)(var9);
    var9 = var12.getInitialOrientation;
    var9 = var9.bind(var12)();
    var9 = var6.bind(var0)(var9);
    var13 = var14.addEventListener;
    var12 = 'change';
    var9 = function(arg0) { // Original name: applyLockStateOnAppActive, environment: var1
        _fun62073: for (var _fun62073_ip = 0;;) switch (_fun62073_ip) {
            case 0:
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var3 = var1.orientationLock;
                var2 = 'active';
                var1 = arg0;
                var1 = var2 === var1;
                if (!var1) {
                    _fun62073_ip = 43;
                    continue _fun62073
                }
            case 37:
                var2 = null;
                var1 = var2 != var3;
            case 43:
                if (!var1) {
                    _fun62073_ip = 60;
                    continue _fun62073
                }
            case 46:
                var2 = _closure1_slot13;
                var1 = undefined;
                var0 = true;
                var0 = var2.bind(var1)(var3, var0);
            case 60:
                var0 = undefined;
                return var0;
        }
    };
    var9 = var13.bind(var14)(var12, var9);
    var9 = 7;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/device/native/DeviceOrientation.tsx';
    var9 = var10.bind(var11)(var9);
    var2.OrientationType = var8;
    var2.useStore = var7;
    var2.handleOrientationChange = var6;
    var2.unlockOrientation = var5;
    var2.lockOrientation = var4;
    var2.lockOrientationForiOS = var3;
    var3 = function() { // Environment: var1
        _fun62074: for (var _fun62074_ip = 0;;) switch (_fun62074_ip) {
            case 0:
                var3 = _closure1_slot7;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var4 = var2.orientation;
                var5 = var2.orientationLock;
                var2 = null;
                var3 = var2 != var5;
                if (!var3) {
                    _fun62074_ip = 54;
                    continue _fun62074
                }
            case 40:
                var6 = _closure1_slot6;
                var2 = var6.includes;
                var3 = var2.bind(var6)(var5);
            case 54:
                var2 = _closure1_slot5;
                var2 = var2.LANDSCAPE;
                if (!(var4 === var2)) {
                    _fun62074_ip = 76;
                    continue _fun62074
                }
            case 68:
                var2 = 'LANDSCAPE';
                if (!(var2 === var5)) {
                    _fun62074_ip = 187;
                    continue _fun62074
                }
            case 76:
                var2 = _closure1_slot5;
                var2 = var2.PORTRAIT;
                var2 = var4 !== var2;
                if (var2) {
                    _fun62074_ip = 96;
                    continue _fun62074
                }
            case 93:
                var2 = var3;
            case 96:
                if (var2) {
                    _fun62074_ip = 270;
                    continue _fun62074
                }
            case 102:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var6 = var5[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var6);
                var6 = var7.lockToLandscapeLeft;
                var6 = var6.bind(var7)();
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.unlockAllOrientations;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = 4;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.batchUpdates;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.LANDSCAPE;
                    var0.orientation = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                _fun62074_ip = 270;
                continue _fun62074;
            case 187:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var6 = var4[var2];
                var3 = undefined;
                var7 = var5.bind(var3)(var6);
                var6 = var7.lockToPortrait;
                var6 = var6.bind(var7)();
                var2 = var4[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.unlockAllOrientations;
                var2 = var2.bind(var5)();
                var2 = _closure1_slot0;
                var1 = 4;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.batchUpdates;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.PORTRAIT;
                    var0.orientation = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 270:
                var0 = undefined;
                return var0;
        }
    };
    var2.toggleOrientation = var3;
    var3 = function() { // Original name: getOrientation, environment: var1
        var1 = _closure1_slot7;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.orientation;
        return var0;
    };
    var2.getOrientation = var3;
    var3 = function() { // Original name: getOrientationLock, environment: var1
        var1 = _closure1_slot7;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.orientationLock;
        return var0;
    };
    var2.getOrientationLock = var3;
    var3 = function() { // Original name: useOrientation, environment: var1
        var1 = _closure1_slot7;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.orientation;
        return var0;
    };
    var2.useOrientation = var3;
    var3 = function(arg0) { // Original name: useOrientationListener, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot7;
            var1 = var2.subscribe;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useOrientationListener = var3;
    var1 = function() { // Original name: restoreDefaultOrientation, environment: var1
        _fun62082: for (var _fun62082_ip = 0;;) switch (_fun62082_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun62082_ip = 101;
                    continue _fun62082
                }
            case 38:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIpadOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun62082_ip = 101;
                    continue _fun62082
                }
            case 71:
                var3 = _closure1_slot7;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var3 = var2.orientationLock;
                var2 = 'PORTRAIT';
                if (!(var2 === var3)) {
                    _fun62082_ip = 101;
                    continue _fun62082
                }
            case 99:
                return var0;
            case 101:
                var3 = _closure1_slot12;
                var2 = {};
                var4 = false;
                var2.unlockAfterRotatingToPreviousLock = var4;
                var2 = var3.bind(var0)(var2);
                var1 = _closure1_slot14;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var2.restoreDefaultOrientation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 629, 478, 802, 1309, 7778, 2]);