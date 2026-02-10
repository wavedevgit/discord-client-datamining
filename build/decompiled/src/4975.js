// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.oldState;
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot7 = var0;
    var4 = function arg0() {
        _fun44860: for (var _fun44860_ip = 0;;) switch (_fun44860_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 1;
                var1 = var0[var6];
                var0 = undefined;
                var5 = var4.bind(var0)(var1);
                var4 = var5.findHandler;
                var1 = var3.handlerTag;
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun44860_ip = 134;
                    continue _fun44860
                }
            case 48:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var6 = var5.bind(var0)(var4);
                var5 = var6.findOldGestureHandler;
                var4 = var3.handlerTag;
                var7 = var5.bind(var6)(var4);
                if (!var7) {
                    _fun44860_ip = 1537;
                    continue _fun44860
                }
            case 88:
                var6 = {};
                var6.nativeEvent = var3;
                var4 = _closure1_slot7;
                var4 = var4.bind(var0)(var3);
                if (var4) {
                    _fun44860_ip = 119;
                    continue _fun44860
                }
            case 106:
                var4 = var7.onGestureEvent;
                var4 = var4.bind(var7)(var6);
                _fun44860_ip = 130;
                continue _fun44860;
            case 119:
                var5 = var7.onGestureStateChange;
                var4 = var5.bind(var7)(var6);
            case 130:
                var4 = undefined;
                return var4;
            case 134:
                var4 = _closure1_slot7;
                var4 = var4.bind(var0)(var3);
                if (var4) {
                    _fun44860_ip = 787;
                    continue _fun44860
                }
            case 149:
                var4 = var3.eventType;
                var8 = null;
                if (!(var8 == var4)) {
                    _fun44860_ip = 347;
                    continue _fun44860
                }
            case 164:
                var4 = var1.handlers;
                var4 = var4.onUpdate;
                if (!(var8 != var4)) {
                    _fun44860_ip = 197;
                    continue _fun44860
                }
            case 180:
                var5 = var1.handlers;
                var4 = var5.onUpdate;
                var4 = var4.bind(var5)(var3);
            case 197:
                var4 = var1.handlers;
                var4 = var4.onChange;
                if (!var4) {
                    _fun44860_ip = 224;
                    continue _fun44860
                }
            case 212:
                var5 = var1.handlers;
                var4 = var5.changeEventCalculator;
            case 224:
                if (!var4) {
                    _fun44860_ip = 1537;
                    continue _fun44860
                }
            case 230:
                var4 = var1.handlers;
                var4 = var4.onChange;
                if (!(var8 != var4)) {
                    _fun44860_ip = 322;
                    continue _fun44860
                }
            case 246:
                var6 = var1.handlers;
                var5 = var6.onChange;
                var4 = var1.handlers;
                var4 = var4.changeEventCalculator;
                var7 = var8 == var4;
                var4 = undefined;
                if (var7) {
                    _fun44860_ip = 317;
                    continue _fun44860
                }
            case 279:
                var10 = var1.handlers;
                var9 = var10.changeEventCalculator;
                var11 = _closure1_slot6;
                var7 = var1.handlers;
                var7 = var7.handlerTag;
                var7 = var11[var7];
                var4 = var9.bind(var10)(var3, var7);
            case 317:
                var4 = var5.bind(var6)(var4);
            case 322:
                var5 = _closure1_slot6;
                var4 = var1.handlers;
                var4 = var4.handlerTag;
                var5[var4] = var3;
                _fun44860_ip = 1537;
                continue _fun44860;
            case 347:
                var6 = _closure1_slot5;
                var5 = var6.has;
                var4 = var3.handlerTag;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun44860_ip = 433;
                    continue _fun44860
                }
            case 370:
                var7 = _closure1_slot5;
                var6 = var7.set;
                var5 = var3.handlerTag;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 3;
                var4 = var10[var4];
                var4 = var9.bind(var0)(var4);
                var10 = var4.GestureStateManager;
                var9 = var10.create;
                var4 = var3.handlerTag;
                var4 = var9.bind(var10)(var4);
                var4 = var6.bind(var7)(var5, var4);
            case 433:
                var6 = _closure1_slot5;
                var5 = var6.get;
                var4 = var3.handlerTag;
                var6 = var5.bind(var6)(var4);
                var5 = var3.eventType;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var9 = 4;
                var4 = var4[var9];
                var4 = var7.bind(var0)(var4);
                var4 = var4.TouchEventType;
                var4 = var4.TOUCHES_DOWN;
                if (!(var4 !== var5)) {
                    _fun44860_ip = 741;
                    continue _fun44860
                }
            case 498:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var4 = var7.bind(var0)(var4);
                var4 = var4.TouchEventType;
                var4 = var4.TOUCHES_MOVE;
                if (!(var4 !== var5)) {
                    _fun44860_ip = 695;
                    continue _fun44860
                }
            case 534:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var4 = var7.bind(var0)(var4);
                var4 = var4.TouchEventType;
                var4 = var4.TOUCHES_UP;
                if (!(var4 !== var5)) {
                    _fun44860_ip = 649;
                    continue _fun44860
                }
            case 567:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var4 = var7.bind(var0)(var4);
                var4 = var4.TouchEventType;
                var4 = var4.TOUCHES_CANCELLED;
                if (!(var4 === var5)) {
                    _fun44860_ip = 1537;
                    continue _fun44860
                }
            case 603:
                var5 = var1.handlers;
                var4 = var8 == var5;
                if (var4) {
                    _fun44860_ip = 626;
                    continue _fun44860
                }
            case 616:
                var7 = var5.onTouchesCancelled;
                var4 = var8 == var7;
            case 626:
                if (var4) {
                    _fun44860_ip = 1537;
                    continue _fun44860
                }
            case 632:
                var4 = var5.onTouchesCancelled;
                var4 = var4.bind(var5)(var3, var6);
                _fun44860_ip = 1537;
                continue _fun44860;
            case 649:
                var5 = var1.handlers;
                var4 = var8 == var5;
                if (var4) {
                    _fun44860_ip = 672;
                    continue _fun44860
                }
            case 662:
                var7 = var5.onTouchesUp;
                var4 = var8 == var7;
            case 672:
                if (var4) {
                    _fun44860_ip = 1537;
                    continue _fun44860
                }
            case 678:
                var4 = var5.onTouchesUp;
                var4 = var4.bind(var5)(var3, var6);
                _fun44860_ip = 1537;
                continue _fun44860;
            case 695:
                var5 = var1.handlers;
                var4 = var8 == var5;
                if (var4) {
                    _fun44860_ip = 718;
                    continue _fun44860
                }
            case 708:
                var7 = var5.onTouchesMove;
                var4 = var8 == var7;
            case 718:
                if (var4) {
                    _fun44860_ip = 1537;
                    continue _fun44860
                }
            case 724:
                var4 = var5.onTouchesMove;
                var4 = var4.bind(var5)(var3, var6);
                _fun44860_ip = 1537;
                continue _fun44860;
            case 741:
                var5 = var1.handlers;
                var4 = var8 == var5;
                if (var4) {
                    _fun44860_ip = 764;
                    continue _fun44860
                }
            case 754:
                var7 = var5.onTouchesDown;
                var4 = var8 == var7;
            case 764:
                if (var4) {
                    _fun44860_ip = 1537;
                    continue _fun44860
                }
            case 770:
                var4 = var5.onTouchesDown;
                var4 = var4.bind(var5)(var3, var6);
                _fun44860_ip = 1537;
                continue _fun44860;
            case 787:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = 2;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.UNDETERMINED;
                if (!(var5 === var4)) {
                    _fun44860_ip = 870;
                    continue _fun44860
                }
            case 829:
                var5 = var3.state;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.BEGAN;
                if (!(var5 !== var4)) {
                    _fun44860_ip = 1502;
                    continue _fun44860
                }
            case 870:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.BEGAN;
                if (!(var5 !== var4)) {
                    _fun44860_ip = 948;
                    continue _fun44860
                }
            case 909:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.UNDETERMINED;
                if (!(var5 === var4)) {
                    _fun44860_ip = 1046;
                    continue _fun44860
                }
            case 948:
                var5 = var3.state;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.ACTIVE;
                if (!(var5 === var4)) {
                    _fun44860_ip = 1046;
                    continue _fun44860
                }
            case 986:
                var4 = var1.handlers;
                var5 = var4.onStart;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44860_ip = 1021;
                    continue _fun44860
                }
            case 1004:
                var5 = var1.handlers;
                var4 = var5.onStart;
                var4 = var4.bind(var5)(var3);
            case 1021:
                var5 = _closure1_slot6;
                var4 = var1.handlers;
                var4 = var4.handlerTag;
                var5[var4] = var3;
                _fun44860_ip = 1537;
                continue _fun44860;
            case 1046:
                var5 = var3.oldState;
                var4 = var3.state;
                if (!(var5 !== var4)) {
                    _fun44860_ip = 1102;
                    continue _fun44860
                }
            case 1061:
                var5 = var3.state;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.END;
                if (!(var5 !== var4)) {
                    _fun44860_ip = 1365;
                    continue _fun44860
                }
            case 1102:
                var5 = var3.state;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.FAILED;
                var4 = var5 !== var4;
                if (!var4) {
                    _fun44860_ip = 1181;
                    continue _fun44860
                }
            case 1143:
                var6 = var3.state;
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var8.bind(var0)(var5);
                var5 = var5.State;
                var5 = var5.CANCELLED;
                var4 = var6 !== var5;
            case 1181:
                if (var4) {
                    _fun44860_ip = 1199;
                    continue _fun44860
                }
            case 1184:
                var6 = var3.oldState;
                var5 = var3.state;
                var4 = var6 === var5;
            case 1199:
                if (var4) {
                    _fun44860_ip = 1537;
                    continue _fun44860
                }
            case 1205:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.ACTIVE;
                if (!(var5 === var4)) {
                    _fun44860_ip = 1282;
                    continue _fun44860
                }
            case 1244:
                var4 = var1.handlers;
                var5 = var4.onEnd;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44860_ip = 1282;
                    continue _fun44860
                }
            case 1262:
                var6 = var1.handlers;
                var5 = var6.onEnd;
                var4 = false;
                var4 = var5.bind(var6)(var3, var4);
            case 1282:
                var4 = var1.handlers;
                var5 = var4.onFinalize;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44860_ip = 1320;
                    continue _fun44860
                }
            case 1300:
                var6 = var1.handlers;
                var5 = var6.onFinalize;
                var4 = false;
                var4 = var5.bind(var6)(var3, var4);
            case 1320:
                var6 = _closure1_slot5;
                var5 = var6.delete;
                var4 = var3.handlerTag;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot6;
                var4 = var1.handlers;
                var4 = var4.handlerTag;
                var5[var4] = var0;
                _fun44860_ip = 1537;
                continue _fun44860;
            case 1365:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.ACTIVE;
                if (!(var5 === var4)) {
                    _fun44860_ip = 1442;
                    continue _fun44860
                }
            case 1404:
                var4 = var1.handlers;
                var5 = var4.onEnd;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44860_ip = 1442;
                    continue _fun44860
                }
            case 1422:
                var6 = var1.handlers;
                var5 = var6.onEnd;
                var4 = true;
                var4 = var5.bind(var6)(var3, var4);
            case 1442:
                var4 = var1.handlers;
                var5 = var4.onFinalize;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44860_ip = 1480;
                    continue _fun44860
                }
            case 1460:
                var6 = var1.handlers;
                var5 = var6.onFinalize;
                var4 = true;
                var4 = var5.bind(var6)(var3, var4);
            case 1480:
                var4 = _closure1_slot6;
                var2 = var1.handlers;
                var2 = var2.handlerTag;
                var4[var2] = var0;
                _fun44860_ip = 1537;
                continue _fun44860;
            case 1502:
                var2 = var1.handlers;
                var4 = var2.onBegin;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun44860_ip = 1537;
                    continue _fun44860
                }
            case 1520:
                var2 = var1.handlers;
                var1 = var2.onBegin;
                var1 = var1.bind(var2)(var3);
            case 1537:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var1 = function() {
        _fun44861: for (var _fun44861_ip = 0;;) switch (_fun44861_ip) {
            case 0:
                var0 = _closure1_slot3;
                if (!var0) {
                    _fun44861_ip = 30;
                    continue _fun44861
                }
            case 10:
                var2 = _closure1_slot3;
                var0 = var2.remove;
                var0 = var0.bind(var2)();
                var0 = null;
                _closure1_slot3 = var0;
            case 30:
                var0 = _closure1_slot4;
                if (!var0) {
                    _fun44861_ip = 57;
                    continue _fun44861
                }
            case 37:
                var2 = _closure1_slot4;
                var0 = var2.remove;
                var0 = var0.bind(var2)();
                var0 = null;
                _closure1_slot4 = var0;
            case 57:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var6 = var6[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var6 = var6.DeviceEventEmitter;
    var _closure1_slot2 = var6;
    var6 = null;
    var _closure1_slot3 = var6;
    var _closure1_slot4 = var6;
    var5 = var5.Map;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var14 = var6;
    var5 = new var14[var5](var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot5 = var5;
    var5 = new Array(0);
    var _closure1_slot6 = var5;
    var2.onGestureHandlerEvent = var4;
    var3 = function() {
        var1 = _closure1_slot9;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var5 = _closure1_slot2;
        var3 = var5.addListener;
        var4 = _closure1_slot8;
        var1 = 'onGestureHandlerEvent';
        var1 = var3.bind(var5)(var1, var4);
        _closure1_slot3 = var1;
        var3 = var5.addListener;
        var1 = 'onGestureHandlerStateChange';
        var1 = var3.bind(var5)(var1, var4);
        _closure1_slot4 = var1;
        return var0;
    };
    var2.startListening = var3;
    var2.stopListening = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 4976, 4978, 4979, 4981]);