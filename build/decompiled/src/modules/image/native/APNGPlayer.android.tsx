// modules/image/native/APNGPlayer.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var4 = var7.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var3
        var4 = arg0;
        var2 = var4.onLoad;
        var _closure2_slot0 = var2;
        var5 = null;
        var3 = Object.create(var5);
        var0 = 0;
        var3.onLoad = var0;
        var10 = {};
        var9 = var4;
        var8 = var3;
        var4 = copyDataProperties(var10, var9, var8);
        var7 = _closure1_slot3;
        var3 = var7.useRef;
        var6 = var3.bind(var7)(var5);
        var _closure2_slot1 = var6;
        var5 = var7.useCallback;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function(arg0) { // Environment: var1
            _fun56823: for (var _fun56823_ip = 0;;) switch (_fun56823_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun56823_ip = 38;
                        continue _fun56823
                    }
                case 13:
                    var2 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var1 = var0.url;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 38:
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = var5.bind(var7)(var2, var3);
        var3 = var7.useImperativeHandle;
        var2 = arg1;
        var1 = function() { // Environment: var1
            var0 = {};
            var2 = function() {
                _fun56825: for (var _fun56825_ip = 0;;) switch (_fun56825_ip) {
                    case 0:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun56825_ip = 69;
                            continue _fun56825
                        }
                    case 18:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var2 = var1.Commands;
                        var1 = var2.play;
                        var0 = _closure2_slot1;
                        var0 = var0.current;
                        var0 = var1.bind(var2)(var0);
                    case 69:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.play = var2;
            var2 = function() {
                _fun56826: for (var _fun56826_ip = 0;;) switch (_fun56826_ip) {
                    case 0:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun56826_ip = 69;
                            continue _fun56826
                        }
                    case 18:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var2 = var1.Commands;
                        var1 = var2.pause;
                        var0 = _closure2_slot1;
                        var0 = var0.current;
                        var0 = var1.bind(var2)(var0);
                    case 69:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.pause = var2;
            var2 = function() {
                _fun56827: for (var _fun56827_ip = 0;;) switch (_fun56827_ip) {
                    case 0:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun56827_ip = 103;
                            continue _fun56827
                        }
                    case 18:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var5 = var4[var1];
                        var2 = undefined;
                        var5 = var3.bind(var2)(var5);
                        var8 = var5.Commands;
                        var7 = var8.seek;
                        var0 = _closure2_slot1;
                        var6 = var0.current;
                        var5 = 0;
                        var5 = var7.bind(var8)(var6, var5);
                        var1 = var4[var1];
                        var1 = var3.bind(var2)(var1);
                        var2 = var1.Commands;
                        var1 = var2.pause;
                        var0 = var0.current;
                        var0 = var1.bind(var2)(var0);
                    case 103:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.stop = var2;
            var1 = function arg0() {
                _fun56828: for (var _fun56828_ip = 0;;) switch (_fun56828_ip) {
                    case 0:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun56828_ip = 73;
                            continue _fun56828
                        }
                    case 18:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Commands;
                        var2 = var3.seek;
                        var0 = _closure2_slot1;
                        var1 = var0.current;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                    case 73:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.seek = var1;
            return var0;
        };
        var1 = var3.bind(var7)(var2, var1);
        var3 = _closure1_slot4;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.ref = var6;
        var0.onLoad = var5;
        var10 = var0;
        var9 = var4;
        var4 = copyDataProperties(var10, var9);
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var4.bind(var7)(var1);
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/image/native/APNGPlayer.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Environment: var3
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useRef;
        var1 = false;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot1 = var1;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = function() {
                _fun56831: for (var _fun56831_ip = 0;;) switch (_fun56831_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = null;
                        var1 = var1 == var2;
                        if (var1) {
                            _fun56831_ip = 30;
                            continue _fun56831
                        }
                    case 21:
                        var2 = _closure2_slot1;
                        var1 = var2.current;
                    case 30:
                        if (var1) {
                            _fun56831_ip = 64;
                            continue _fun56831
                        }
                    case 33:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = var2.play;
                        var1 = var1.bind(var2)();
                        var1 = _closure2_slot1;
                        var0 = true;
                        var1.current = var0;
                    case 64:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.play = var2;
            var2 = function() {
                _fun56832: for (var _fun56832_ip = 0;;) switch (_fun56832_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = null;
                        var1 = var1 != var2;
                        if (!var1) {
                            _fun56832_ip = 30;
                            continue _fun56832
                        }
                    case 21:
                        var2 = _closure2_slot1;
                        var1 = var2.current;
                    case 30:
                        if (!var1) {
                            _fun56832_ip = 64;
                            continue _fun56832
                        }
                    case 33:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = var2.pause;
                        var1 = var1.bind(var2)();
                        var1 = _closure2_slot1;
                        var0 = false;
                        var1.current = var0;
                    case 64:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.pause = var2;
            var2 = function() {
                _fun56833: for (var _fun56833_ip = 0;;) switch (_fun56833_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = null;
                        var1 = var1 != var2;
                        if (!var1) {
                            _fun56833_ip = 30;
                            continue _fun56833
                        }
                    case 21:
                        var2 = _closure2_slot1;
                        var1 = var2.current;
                    case 30:
                        if (!var1) {
                            _fun56833_ip = 64;
                            continue _fun56833
                        }
                    case 33:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
                        var1 = _closure2_slot1;
                        var0 = false;
                        var1.current = var0;
                    case 64:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.stop = var2;
            var1 = function arg0() {
                _fun56834: for (var _fun56834_ip = 0;;) switch (_fun56834_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun56834_ip = 41;
                            continue _fun56834
                        }
                    case 18:
                        var0 = _closure2_slot0;
                        var2 = var0.current;
                        var1 = var2.seek;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 41:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.seek = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useAPNGPlayerControls = var3;
    var2.APNGPlayer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 5747, 2]);