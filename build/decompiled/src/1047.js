// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var3 = this;
            var2 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var2 = var2.bind(var0)(var3, var1);
            var2 = var1.prototype;
            var4 = var2.__init;
            var2 = var4.call;
            var2 = var2.bind(var4)(var3);
            var1 = var1.prototype;
            var2 = var1.__init2;
            var1 = var2.call;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '__init';
        var0.key = var1;
        var1 = function() {
            var1 = 0;
            var0 = this;
            var0._sessionValue = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = '__init2';
        var0.key = var5;
        var5 = function() {
            var1 = new Array(0);
            var0 = this;
            var0._sessionEntries = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '_processEntry';
        var0.key = var5;
        var4 = function arg0() {
            _fun10793: for (var _fun10793_ip = 0;;) switch (_fun10793_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var3.hadRecentInput;
                    if (var0) {
                        _fun10793_ip = 212;
                        continue _fun10793
                    }
                case 18:
                    var1 = var2._sessionEntries;
                    var0 = 0;
                    var0 = var1[var0];
                    var4 = var2._sessionEntries;
                    var1 = var2._sessionEntries;
                    var5 = var1.length;
                    var1 = 1;
                    var1 = var5 - var1;
                    var1 = var4[var1];
                    var4 = var2._sessionValue;
                    if (!var4) {
                        _fun10793_ip = 125;
                        continue _fun10793
                    }
                case 67:
                    if (!var0) {
                        _fun10793_ip = 125;
                        continue _fun10793
                    }
                case 70:
                    if (!var1) {
                        _fun10793_ip = 125;
                        continue _fun10793
                    }
                case 73:
                    var4 = var3.startTime;
                    var1 = var1.startTime;
                    var4 = var4 - var1;
                    var1 = 1000;
                    if (!(var4 < var1)) {
                        _fun10793_ip = 125;
                        continue _fun10793
                    }
                case 99:
                    var1 = var3.startTime;
                    var0 = var0.startTime;
                    var1 = var1 - var0;
                    var0 = 5000;
                    if (!(!(var1 < var0))) {
                        _fun10793_ip = 152;
                        continue _fun10793
                    }
                case 125:
                    var0 = var3.value;
                    var2._sessionValue = var0;
                    var0 = new Array(1);
                    var0[0] = var3;
                    var2._sessionEntries = var0;
                    _fun10793_ip = 189;
                    continue _fun10793;
                case 152:
                    var1 = var2._sessionValue;
                    var0 = var3.value;
                    var0 = var1 + var0;
                    var2._sessionValue = var0;
                    var1 = var2._sessionEntries;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var3);
                case 189:
                    var1 = var2._onAfterProcessingUnexpectedShift;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun10793_ip = 212;
                        continue _fun10793
                    }
                case 201:
                    var0 = var1.call;
                    var0 = var0.bind(var1)(var2, var3);
                case 212:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.LayoutShiftManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7]);