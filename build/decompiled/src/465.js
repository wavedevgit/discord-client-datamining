// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot4;
        var3 = function() { // Original name: Share, environment: var1
            var3 = _closure1_slot3;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'share';
        var0.key = var2;
        var1 = function(arg0) { // Original name: share, environment: var1
            _fun6139: for (var _fun6139_ip = 0;;) switch (_fun6139_ip) {
                case 0:
                    var6 = arg0;
                    var4 = undefined;
                    var2 = undefined;
                    var0 = arguments.length;
                    var1 = 1;
                    if (!(var0 > var1)) {
                        _fun6139_ip = 25;
                        continue _fun6139
                    }
                case 17:
                    var0 = arguments[var1];
                    if (!(var4 === var0)) {
                        _fun6139_ip = 29;
                        continue _fun6139
                    }
                case 25:
                    var0 = {};
                    _fun6139_ip = 33;
                    continue _fun6139;
                case 29:
                    var0 = arguments[var1];
                case 33:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 2;
                    var2 = var2[var7];
                    var8 = var3.bind(var4)(var2);
                    var3 = 'object';
                    var2 = typeof var6;
                    var5 = var3 === var2;
                    if (!var5) {
                        _fun6139_ip = 76;
                        continue _fun6139
                    }
                case 70:
                    var2 = null;
                    var5 = var2 !== var6;
                case 76:
                    var2 = 'Content to share must be a valid object';
                    var2 = var8.bind(var4)(var5, var2);
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var9 = var5.bind(var4)(var2);
                    var2 = var6.url;
                    var8 = 'string';
                    var2 = typeof var2;
                    var5 = var8 === var2;
                    if (var5) {
                        _fun6139_ip = 136;
                        continue _fun6139
                    }
                case 124:
                    var2 = var6.message;
                    var2 = typeof var2;
                    var5 = var8 === var2;
                case 136:
                    var2 = 'At least one of URL or message is required';
                    var2 = var9.bind(var4)(var5, var2);
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var5 = var5.bind(var4)(var2);
                    var2 = typeof var0;
                    var3 = var3 === var2;
                    if (!var3) {
                        _fun6139_ip = 181;
                        continue _fun6139
                    }
                case 175:
                    var2 = null;
                    var3 = var2 !== var0;
                case 181:
                    var2 = 'Options must be a valid object';
                    var2 = var5.bind(var4)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = var2[var7];
                    var11 = var3.bind(var4)(var5);
                    var10 = _closure1_slot1;
                    var5 = 3;
                    var9 = var2[var5];
                    var10 = var10.bind(var4)(var9);
                    var9 = 'ShareModule should be registered on Android.';
                    var9 = var11.bind(var4)(var10, var9);
                    var2 = var2[var7];
                    var7 = var3.bind(var4)(var2);
                    var3 = var6.title;
                    var2 = null;
                    var3 = var2 == var3;
                    if (var3) {
                        _fun6139_ip = 273;
                        continue _fun6139
                    }
                case 261:
                    var2 = var6.title;
                    var2 = typeof var2;
                    var3 = var8 === var2;
                case 273:
                    var2 = 'Invalid title: title should be a string.';
                    var2 = var7.bind(var4)(var3, var2);
                    var3 = {};
                    var2 = var6.title;
                    var3.title = var2;
                    var2 = var6.message;
                    var7 = typeof var2;
                    var2 = undefined;
                    if (!(var8 === var7)) {
                        _fun6139_ip = 315;
                        continue _fun6139
                    }
                case 310:
                    var2 = var6.message;
                case 315:
                    var3.message = var2;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.share;
                    var0 = var0.dialogTitle;
                    var2 = var1.bind(var2)(var3, var0);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var0 = global;
                        var3 = var0.Object;
                        var2 = var3.assign;
                        var1 = {};
                        var0 = null;
                        var1.activityType = var0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 'sharedAction';
    var1.sharedAction = var3;
    var3 = 'dismissedAction';
    var1.dismissedAction = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 44, 466]);