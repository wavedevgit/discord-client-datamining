// polyfillsNative.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96853: for (var _fun96853_ip = 0;;) switch (_fun96853_ip) {
        case 0:
            var7 = global;
            var2 = require;
            var3 = dependencyMap;
            var0 = 0;
            var4 = var3[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var4);
            var4 = 1;
            var4 = var3[var4];
            var4 = var2.bind(var0)(var4);
            var4 = 2;
            var4 = var3[var4];
            var4 = var2.bind(var0)(var4);
            var4 = 3;
            var4 = var3[var4];
            var4 = var2.bind(var0)(var4);
            var4 = global;
            var5 = var4.process;
            var6 = 'undefined';
            var5 = typeof var5;
            if (!(var6 === var5)) {
                _fun96853_ip = 93;
                continue _fun96853
            }
        case 79:
            var6 = var4.window;
            var5 = {};
            var6.process = var5;
        case 93:
            var5 = var4.window;
            var6 = var5.process;
            var5 = var4.setImmediate;
            var6.nextTick = var5;
            var6 = var7.location;
            var5 = null;
            if (!(var5 == var6)) {
                _fun96853_ip = 148;
                continue _fun96853
            }
        case 128:
            var6 = {
                'protocol': 'https:',
                'host': 'discord.com'
            };
            var7.location = var6;
        case 148:
            var6 = var7.self;
            if (var6) {
                _fun96853_ip = 163;
                continue _fun96853
            }
        case 157:
            var7.self = var7;
        case 163:
            var6 = var4.window;
            var6 = var6.crypto;
            if (!(var5 == var6)) {
                _fun96853_ip = 209;
                continue _fun96853
            }
        case 179:
            var6 = 4;
            var6 = var3[var6];
            var6 = var2.bind(var0)(var6);
            var8 = var4.window;
            var6 = var7.crypto;
            var8.crypto = var6;
        case 209:
            var6 = var7.Buffer;
            if (!(var5 == var6)) {
                _fun96853_ip = 243;
                continue _fun96853
            }
        case 219:
            var6 = 5;
            var6 = var3[var6];
            var6 = var2.bind(var0)(var6);
            var6 = var6.Buffer;
            var7.Buffer = var6;
        case 243:
            var6 = var7.__reanimatedWorkletInit;
            if (!(var5 == var6)) {
                _fun96853_ip = 266;
                continue _fun96853
            }
        case 253:
            var6 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var7.__reanimatedWorkletInit = var6;
        case 266:
            var6 = var4.Set;
            var6 = var6.prototype;
            var7 = var4.Map;
            var7 = var7.prototype;
            var1 = function() { // Environment: var1
                var0 = global;
                var2 = var0.Array;
                var1 = var2.from;
                var0 = this;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var7.toJSON = var1;
            var6.toJSON = var1;
            var1 = var4.window;
            var1 = var1.TextEncoder;
            var1 = var5 != var1;
            if (!var1) {
                _fun96853_ip = 342;
                continue _fun96853
            }
        case 326:
            var4 = var4.window;
            var4 = var4.TextDecoder;
            var1 = var5 != var4;
        case 342:
            if (var1) {
                _fun96853_ip = 357;
                continue _fun96853
            }
        case 345:
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var0)(var1);
        case 357:
            var1 = 7;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.fileFinishedImporting;
            var1 = 'polyfillsNative.tsx';
            var1 = var2.bind(var3)(var1);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3, 12655, 12725, 12743, 12746, 488, 1213, 2]);