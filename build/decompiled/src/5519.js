// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var4 = var4.bind(var0)(var5);
    var7 = var4.PanResponder;
    var5 = var3.Object;
    var4 = var5.keys;
    var6 = var7.create;
    var3 = {};
    var3 = var6.bind(var7)(var3);
    var3 = var3.panHandlers;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot0 = var3;
    var3 = var3.length;
    var _closure1_slot1 = var3;
    var1 = function arg0, arg1, arg2() {
        _fun48902: for (var _fun48902_ip = 0;;) switch (_fun48902_ip) {
            case 0:
                var1 = arg0;
                var17 = arg1;
                var3 = arg2;
                var11 = var17.onPress;
                var12 = var17.disabled;
                var10 = var17.onPressIn;
                var9 = var17.onPressOut;
                var8 = var17.onLongPress;
                var7 = var17.delayPressIn;
                var6 = var17.delayPressOut;
                var5 = var17.delayLongPress;
                var4 = var17.pointerEvents;
                var0 = _closure1_slot1;
                var15 = 0;
                var13 = var15 < var0;
                var14 = false;
                var0 = true;
                var2 = false;
                if (!var13) {
                    _fun48902_ip = 118;
                    continue _fun48902
                }
            case 83:
                var13 = _closure1_slot0;
                var18 = var13[var15];
                var13 = var17[var18];
                if (!var13) {
                    _fun48902_ip = 104;
                    continue _fun48902
                }
            case 98:
                var1[var18] = var13;
                var14 = true;
            case 104:
                var15 = var15 + 1;
                var13 = _closure1_slot1;
                var2 = var14;
                if (var15 < var13) {
                    _fun48902_ip = 83;
                    continue _fun48902
                }
            case 118:
                if (!var4) {
                    _fun48902_ip = 127;
                    continue _fun48902
                }
            case 121:
                var1.pointerEvents = var4;
            case 127:
                var4 = null;
                var4 = var4 != var12;
                if (var4) {
                    _fun48902_ip = 139;
                    continue _fun48902
                }
            case 136:
                var4 = var11;
            case 139:
                if (var4) {
                    _fun48902_ip = 145;
                    continue _fun48902
                }
            case 142:
                var4 = var10;
            case 145:
                if (var4) {
                    _fun48902_ip = 151;
                    continue _fun48902
                }
            case 148:
                var4 = var9;
            case 151:
                if (var4) {
                    _fun48902_ip = 157;
                    continue _fun48902
                }
            case 154:
                var4 = var8;
            case 157:
                if (var4) {
                    _fun48902_ip = 163;
                    continue _fun48902
                }
            case 160:
                var4 = var7;
            case 163:
                if (var4) {
                    _fun48902_ip = 169;
                    continue _fun48902
                }
            case 166:
                var4 = var6;
            case 169:
                if (var4) {
                    _fun48902_ip = 175;
                    continue _fun48902
                }
            case 172:
                var4 = var5;
            case 175:
                if (!var4) {
                    _fun48902_ip = 252;
                    continue _fun48902
                }
            case 178:
                var4 = var3.touchableHandleResponderMove;
                var1.onResponderMove = var4;
                var4 = var3.touchableHandleResponderGrant;
                var1.onResponderGrant = var4;
                var4 = var3.touchableHandleResponderRelease;
                var1.onResponderRelease = var4;
                var4 = var3.touchableHandleResponderTerminate;
                var1.onResponderTerminate = var4;
                var4 = var3.touchableHandleStartShouldSetResponder;
                var1.onStartShouldSetResponder = var4;
                var3 = var3.touchableHandleResponderTerminationRequest;
                var1.onResponderTerminationRequest = var3;
                var2 = true;
            case 252:
                if (!var2) {
                    _fun48902_ip = 261;
                    continue _fun48902
                }
            case 255:
                var1.responsible = var0;
            case 261:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);