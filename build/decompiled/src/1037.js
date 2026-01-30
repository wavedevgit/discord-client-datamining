// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var3 = var2.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var3 = -1;
    var _closure1_slot2 = var3;
    var2 = var2.Set;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var11 = var3;
    var2 = new var11[var2](var10);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot3 = var2;
    var2 = function(arg0) { // Original name: onVisibilityUpdate, environment: var0
        _fun10756: for (var _fun10756_ip = 0;;) switch (_fun10756_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.type;
                var3 = 'pagehide';
                var0 = var3 === var0;
                if (var0) {
                    _fun10756_ip = 80;
                    continue _fun10756
                }
            case 21:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var1 = var1.WINDOW;
                var1 = var1.document;
                var5 = null;
                var5 = var5 == var1;
                if (var5) {
                    _fun10756_ip = 72;
                    continue _fun10756
                }
            case 66:
                var4 = var1.visibilityState;
            case 72:
                var1 = 'hidden';
                var0 = var1 === var4;
            case 80:
                if (!var0) {
                    _fun10756_ip = 254;
                    continue _fun10756
                }
            case 86:
                var4 = _closure1_slot2;
                var1 = -1;
                if (!(var4 > var1)) {
                    _fun10756_ip = 254;
                    continue _fun10756
                }
            case 106:
                var1 = var2.type;
                var5 = 'visibilitychange';
                if (!(var5 !== var1)) {
                    _fun10756_ip = 130;
                    continue _fun10756
                }
            case 121:
                var1 = var2.type;
                if (!(var3 === var1)) {
                    _fun10756_ip = 166;
                    continue _fun10756
                }
            case 130:
                var1 = _closure1_slot3;
                var4 = var1;
                var3 = var4[Symbol.iterator];
                var4 = var3().next;
                var1 = undefined;
            case 142:
                var6 = var4().value;
                var7 = var3;
                if (!(var7 !== var1)) {
                    _fun10756_ip = 166;
                    continue _fun10756
                }
            case 153: // try_start_0
                var6 = var6.bind(var1)();
            case 157: // try_end0
                _fun10756_ip = 142;
                continue _fun10756;
            case 159: // catch_target0
                CatchBlockStart(arg_register = 1);
                var3.return();
                throw var1;
            case 166:
                var1 = global;
                var4 = var1.isFinite;
                var1 = _closure1_slot2;
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                if (var1) {
                    _fun10756_ip = 254;
                    continue _fun10756
                }
            case 188:
                var4 = var2.type;
                var1 = 0;
                if (!(var5 === var4)) {
                    _fun10756_ip = 205;
                    continue _fun10756
                }
            case 199:
                var1 = var2.timeStamp;
            case 205:
                _closure1_slot2 = var1;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.removePageListener;
                var2 = _closure1_slot4;
                var1 = 'prerenderingchange';
                var0 = true;
                var0 = var3.bind(var4)(var1, var2, var0);
            case 254:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var0 = function() { // Original name: getVisibilityWatcher, environment: var0
        _fun10757: for (var _fun10757_ip = 0;;) switch (_fun10757_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 0;
                var0 = var0[var6];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.WINDOW;
                var0 = var0.document;
                if (!var0) {
                    _fun10757_ip = 413;
                    continue _fun10757
                }
            case 44:
                var0 = _closure1_slot2;
                if (!(var0 < var6)) {
                    _fun10757_ip = 413;
                    continue _fun10757
                }
            case 55:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 2;
                var3 = var0[var3];
                var7 = var2.bind(var4)(var3);
                var3 = var7.getActivationStart;
                var3 = var3.bind(var7)();
                var _closure2_slot0 = var3;
                var0 = var0[var6];
                var0 = var2.bind(var4)(var0);
                var0 = var0.WINDOW;
                var0 = var0.document;
                var2 = var0.prerendering;
                var0 = undefined;
                if (var2) {
                    _fun10757_ip = 188;
                    continue _fun10757
                }
            case 121:
                var2 = global;
                var2 = var2.globalThis;
                var7 = var2.performance;
                var3 = var7.getEntriesByType;
                var2 = 'visibility-state';
                var7 = var3.bind(var7)(var2);
                var3 = var7.filter;
                var2 = function(arg0) { // Environment: var1
                    _fun10758: for (var _fun10758_ip = 0;;) switch (_fun10758_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.name;
                            var0 = 'hidden';
                            var0 = var0 === var2;
                            if (!var0) {
                                _fun10758_ip = 36;
                                continue _fun10758
                            }
                        case 19:
                            var2 = var1.startTime;
                            var1 = _closure2_slot0;
                            var0 = var2 > var1;
                        case 36:
                            return var0;
                    }
                };
                var2 = var3.bind(var7)(var2);
                var2 = var2[var6];
                var3 = null;
                var3 = var3 == var2;
                var0 = undefined;
                if (var3) {
                    _fun10757_ip = 188;
                    continue _fun10757
                }
            case 182:
                var0 = var2.startTime;
            case 188:
                var2 = null;
                if (!(var2 == var0)) {
                    _fun10757_ip = 308;
                    continue _fun10757
                }
            case 194:
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var7.bind(var4)(var3);
                var3 = var3.WINDOW;
                var3 = var3.document;
                var8 = var2 == var3;
                var7 = undefined;
                if (var8) {
                    _fun10757_ip = 238;
                    continue _fun10757
                }
            case 232:
                var7 = var3.visibilityState;
            case 238:
                var3 = 'hidden';
                if (!(var3 === var7)) {
                    _fun10757_ip = 295;
                    continue _fun10757
                }
            case 246:
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var7.bind(var4)(var3);
                var3 = var3.WINDOW;
                var3 = var3.document;
                var7 = var2 != var3;
                var2 = 0;
                if (!var7) {
                    _fun10757_ip = 305;
                    continue _fun10757
                }
            case 284:
                var3 = var3.prerendering;
                var2 = 0;
                if (!var3) {
                    _fun10757_ip = 305;
                    continue _fun10757
                }
            case 295:
                var2 = inf;
            case 305:
                var0 = var2;
            case 308:
                _closure1_slot2 = var0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var6 = var3[var0];
                var9 = var2.bind(var4)(var6);
                var8 = var9.addPageListener;
                var6 = _closure1_slot4;
                var7 = 'visibilitychange';
                var5 = true;
                var7 = var8.bind(var9)(var7, var6, var5);
                var7 = var3[var0];
                var9 = var2.bind(var4)(var7);
                var8 = var9.addPageListener;
                var7 = 'pagehide';
                var7 = var8.bind(var9)(var7, var6, var5);
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.addPageListener;
                var0 = 'prerenderingchange';
                var0 = var2.bind(var3)(var0, var6, var5);
            case 413:
                var0 = {};
                var3 = function() { // Original name: get firstHiddenTime, environment: var1
                    var0 = _closure1_slot2;
                    return var0;
                };
                var2 = 'firstHiddenTime';
                Object.defineProperty(var0, var2, {
                    get: var3,
                    set: var4,
                    enumerable: true
                });
                var1 = function(arg0) { // Original name: onHidden, environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.add;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.onHidden = var1;
                return var0;
        }
    };
    var1.getVisibilityWatcher = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1036, 1038, 1039]);