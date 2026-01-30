// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function(arg0) { // Original name: isStateChangeEvent, environment: var3
        var0 = arg0;
        var1 = var0.oldState;
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot7 = var0;
    var4 = function(arg0) { // Original name: onGestureHandlerEvent, environment: var3
        _fun44629: for (var _fun44629_ip = 0;;) switch (_fun44629_ip) {
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
                    _fun44629_ip = 135;
                    continue _fun44629
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
                    _fun44629_ip = 1538;
                    continue _fun44629
                }
            case 88:
                var6 = {};
                var6.nativeEvent = var3;
                var4 = _closure1_slot7;
                var4 = var4.bind(var0)(var3);
                if (var4) {
                    _fun44629_ip = 120;
                    continue _fun44629
                }
            case 107:
                var4 = var7.onGestureEvent;
                var4 = var4.bind(var7)(var6);
                _fun44629_ip = 131;
                continue _fun44629;
            case 120:
                var5 = var7.onGestureStateChange;
                var4 = var5.bind(var7)(var6);
            case 131:
                var4 = undefined;
                return var4;
            case 135:
                var4 = _closure1_slot7;
                var4 = var4.bind(var0)(var3);
                if (var4) {
                    _fun44629_ip = 788;
                    continue _fun44629
                }
            case 150:
                var4 = var3.eventType;
                var8 = null;
                if (!(var8 == var4)) {
                    _fun44629_ip = 348;
                    continue _fun44629
                }
            case 165:
                var4 = var1.handlers;
                var4 = var4.onUpdate;
                if (!(var8 != var4)) {
                    _fun44629_ip = 198;
                    continue _fun44629
                }
            case 181:
                var5 = var1.handlers;
                var4 = var5.onUpdate;
                var4 = var4.bind(var5)(var3);
            case 198:
                var4 = var1.handlers;
                var4 = var4.onChange;
                if (!var4) {
                    _fun44629_ip = 225;
                    continue _fun44629
                }
            case 213:
                var5 = var1.handlers;
                var4 = var5.changeEventCalculator;
            case 225:
                if (!var4) {
                    _fun44629_ip = 1538;
                    continue _fun44629
                }
            case 231:
                var4 = var1.handlers;
                var4 = var4.onChange;
                if (!(var8 != var4)) {
                    _fun44629_ip = 323;
                    continue _fun44629
                }
            case 247:
                var6 = var1.handlers;
                var5 = var6.onChange;
                var4 = var1.handlers;
                var4 = var4.changeEventCalculator;
                var7 = var8 == var4;
                var4 = undefined;
                if (var7) {
                    _fun44629_ip = 318;
                    continue _fun44629
                }
            case 280:
                var10 = var1.handlers;
                var9 = var10.changeEventCalculator;
                var11 = _closure1_slot6;
                var7 = var1.handlers;
                var7 = var7.handlerTag;
                var7 = var11[var7];
                var4 = var9.bind(var10)(var3, var7);
            case 318:
                var4 = var5.bind(var6)(var4);
            case 323:
                var5 = _closure1_slot6;
                var4 = var1.handlers;
                var4 = var4.handlerTag;
                var5[var4] = var3;
                _fun44629_ip = 1538;
                continue _fun44629;
            case 348:
                var6 = _closure1_slot5;
                var5 = var6.has;
                var4 = var3.handlerTag;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun44629_ip = 434;
                    continue _fun44629
                }
            case 371:
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
            case 434:
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
                    _fun44629_ip = 742;
                    continue _fun44629
                }
            case 499:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var4 = var7.bind(var0)(var4);
                var4 = var4.TouchEventType;
                var4 = var4.TOUCHES_MOVE;
                if (!(var4 !== var5)) {
                    _fun44629_ip = 696;
                    continue _fun44629
                }
            case 535:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var4 = var7.bind(var0)(var4);
                var4 = var4.TouchEventType;
                var4 = var4.TOUCHES_UP;
                if (!(var4 !== var5)) {
                    _fun44629_ip = 650;
                    continue _fun44629
                }
            case 568:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var4 = var7.bind(var0)(var4);
                var4 = var4.TouchEventType;
                var4 = var4.TOUCHES_CANCELLED;
                if (!(var4 === var5)) {
                    _fun44629_ip = 1538;
                    continue _fun44629
                }
            case 604:
                var5 = var1.handlers;
                var4 = var8 == var5;
                if (var4) {
                    _fun44629_ip = 627;
                    continue _fun44629
                }
            case 617:
                var7 = var5.onTouchesCancelled;
                var4 = var8 == var7;
            case 627:
                if (var4) {
                    _fun44629_ip = 1538;
                    continue _fun44629
                }
            case 633:
                var4 = var5.onTouchesCancelled;
                var4 = var4.bind(var5)(var3, var6);
                _fun44629_ip = 1538;
                continue _fun44629;
            case 650:
                var5 = var1.handlers;
                var4 = var8 == var5;
                if (var4) {
                    _fun44629_ip = 673;
                    continue _fun44629
                }
            case 663:
                var7 = var5.onTouchesUp;
                var4 = var8 == var7;
            case 673:
                if (var4) {
                    _fun44629_ip = 1538;
                    continue _fun44629
                }
            case 679:
                var4 = var5.onTouchesUp;
                var4 = var4.bind(var5)(var3, var6);
                _fun44629_ip = 1538;
                continue _fun44629;
            case 696:
                var5 = var1.handlers;
                var4 = var8 == var5;
                if (var4) {
                    _fun44629_ip = 719;
                    continue _fun44629
                }
            case 709:
                var7 = var5.onTouchesMove;
                var4 = var8 == var7;
            case 719:
                if (var4) {
                    _fun44629_ip = 1538;
                    continue _fun44629
                }
            case 725:
                var4 = var5.onTouchesMove;
                var4 = var4.bind(var5)(var3, var6);
                _fun44629_ip = 1538;
                continue _fun44629;
            case 742:
                var5 = var1.handlers;
                var4 = var8 == var5;
                if (var4) {
                    _fun44629_ip = 765;
                    continue _fun44629
                }
            case 755:
                var7 = var5.onTouchesDown;
                var4 = var8 == var7;
            case 765:
                if (var4) {
                    _fun44629_ip = 1538;
                    continue _fun44629
                }
            case 771:
                var4 = var5.onTouchesDown;
                var4 = var4.bind(var5)(var3, var6);
                _fun44629_ip = 1538;
                continue _fun44629;
            case 788:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = 2;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.UNDETERMINED;
                if (!(var5 === var4)) {
                    _fun44629_ip = 871;
                    continue _fun44629
                }
            case 830:
                var5 = var3.state;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.BEGAN;
                if (!(var5 !== var4)) {
                    _fun44629_ip = 1503;
                    continue _fun44629
                }
            case 871:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.BEGAN;
                if (!(var5 !== var4)) {
                    _fun44629_ip = 949;
                    continue _fun44629
                }
            case 910:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.UNDETERMINED;
                if (!(var5 === var4)) {
                    _fun44629_ip = 1047;
                    continue _fun44629
                }
            case 949:
                var5 = var3.state;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.ACTIVE;
                if (!(var5 === var4)) {
                    _fun44629_ip = 1047;
                    continue _fun44629
                }
            case 987:
                var4 = var1.handlers;
                var5 = var4.onStart;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44629_ip = 1022;
                    continue _fun44629
                }
            case 1005:
                var5 = var1.handlers;
                var4 = var5.onStart;
                var4 = var4.bind(var5)(var3);
            case 1022:
                var5 = _closure1_slot6;
                var4 = var1.handlers;
                var4 = var4.handlerTag;
                var5[var4] = var3;
                _fun44629_ip = 1538;
                continue _fun44629;
            case 1047:
                var5 = var3.oldState;
                var4 = var3.state;
                if (!(var5 !== var4)) {
                    _fun44629_ip = 1103;
                    continue _fun44629
                }
            case 1062:
                var5 = var3.state;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.END;
                if (!(var5 !== var4)) {
                    _fun44629_ip = 1366;
                    continue _fun44629
                }
            case 1103:
                var5 = var3.state;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.FAILED;
                var4 = var5 !== var4;
                if (!var4) {
                    _fun44629_ip = 1182;
                    continue _fun44629
                }
            case 1144:
                var6 = var3.state;
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var8.bind(var0)(var5);
                var5 = var5.State;
                var5 = var5.CANCELLED;
                var4 = var6 !== var5;
            case 1182:
                if (var4) {
                    _fun44629_ip = 1200;
                    continue _fun44629
                }
            case 1185:
                var6 = var3.oldState;
                var5 = var3.state;
                var4 = var6 === var5;
            case 1200:
                if (var4) {
                    _fun44629_ip = 1538;
                    continue _fun44629
                }
            case 1206:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.ACTIVE;
                if (!(var5 === var4)) {
                    _fun44629_ip = 1283;
                    continue _fun44629
                }
            case 1245:
                var4 = var1.handlers;
                var5 = var4.onEnd;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44629_ip = 1283;
                    continue _fun44629
                }
            case 1263:
                var6 = var1.handlers;
                var5 = var6.onEnd;
                var4 = false;
                var4 = var5.bind(var6)(var3, var4);
            case 1283:
                var4 = var1.handlers;
                var5 = var4.onFinalize;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44629_ip = 1321;
                    continue _fun44629
                }
            case 1301:
                var6 = var1.handlers;
                var5 = var6.onFinalize;
                var4 = false;
                var4 = var5.bind(var6)(var3, var4);
            case 1321:
                var6 = _closure1_slot5;
                var5 = var6.delete;
                var4 = var3.handlerTag;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot6;
                var4 = var1.handlers;
                var4 = var4.handlerTag;
                var5[var4] = var0;
                _fun44629_ip = 1538;
                continue _fun44629;
            case 1366:
                var5 = var3.oldState;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.State;
                var4 = var4.ACTIVE;
                if (!(var5 === var4)) {
                    _fun44629_ip = 1443;
                    continue _fun44629
                }
            case 1405:
                var4 = var1.handlers;
                var5 = var4.onEnd;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44629_ip = 1443;
                    continue _fun44629
                }
            case 1423:
                var6 = var1.handlers;
                var5 = var6.onEnd;
                var4 = true;
                var4 = var5.bind(var6)(var3, var4);
            case 1443:
                var4 = var1.handlers;
                var5 = var4.onFinalize;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun44629_ip = 1481;
                    continue _fun44629
                }
            case 1461:
                var6 = var1.handlers;
                var5 = var6.onFinalize;
                var4 = true;
                var4 = var5.bind(var6)(var3, var4);
            case 1481:
                var4 = _closure1_slot6;
                var2 = var1.handlers;
                var2 = var2.handlerTag;
                var4[var2] = var0;
                _fun44629_ip = 1538;
                continue _fun44629;
            case 1503:
                var2 = var1.handlers;
                var4 = var2.onBegin;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun44629_ip = 1538;
                    continue _fun44629
                }
            case 1521:
                var2 = var1.handlers;
                var1 = var2.onBegin;
                var1 = var1.bind(var2)(var3);
            case 1538:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var1 = function() { // Original name: stopListening, environment: var3
        _fun44630: for (var _fun44630_ip = 0;;) switch (_fun44630_ip) {
            case 0:
                var0 = _closure1_slot3;
                if (!var0) {
                    _fun44630_ip = 30;
                    continue _fun44630
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
                    _fun44630_ip = 57;
                    continue _fun44630
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
    var3 = function() { // Original name: startListening, environment: var3
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 4926, 4928, 4929, 4931]);