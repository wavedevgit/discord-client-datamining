// modules/system_date_format/SystemDateFormatter.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun27152: for (var _fun27152_ip = 0;;) switch (_fun27152_ip) {
        case 0:
            var3 = global;
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var1 = {};
            var8 = true;
            var1.value = var8;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var1 = var1.NativeModules;
            var6 = var3.__DiscordCreateDateFormatter;
            var7 = null;
            if (!(var7 == var6)) {
                _fun27152_ip = 188;
                continue _fun27152
            }
        case 75:
            var6 = 1;
            var6 = var5[var6];
            var9 = var4.bind(var0)(var6);
            var6 = var9.isAndroid;
            var6 = var6.bind(var9)();
            if (var6) {
                _fun27152_ip = 110;
                continue _fun27152
            }
        case 100:
            var9 = var1.DateFormatUtils;
            _fun27152_ip = 125;
            continue _fun27152;
        case 110:
            var1 = 2;
            var6 = var5[var1];
            var1 = metroImportDefault;
            var9 = var1.bind(var0)(var6);
        case 125:
            var1 = var7 == var9;
            var6 = undefined;
            if (var1) {
                _fun27152_ip = 159;
                continue _fun27152
            }
        case 134:
            var1 = var9.activate;
            var1 = var7 == var1;
            var6 = undefined;
            if (var1) {
                _fun27152_ip = 159;
                continue _fun27152
            }
        case 149:
            var1 = var9.activate;
            var6 = var1.bind(var9)();
        case 159:
            var1 = undefined;
            if (!(var8 === var6)) {
                _fun27152_ip = 186;
                continue _fun27152
            }
        case 165:
            var6 = var3.__DiscordCreateDateFormatter;
            var6 = var7 != var6;
            var1 = undefined;
            if (!var6) {
                _fun27152_ip = 186;
                continue _fun27152
            }
        case 180:
            var1 = var3.__DiscordCreateDateFormatter;
        case 186:
            _fun27152_ip = 194;
            continue _fun27152;
        case 188:
            var1 = var3.__DiscordCreateDateFormatter;
        case 194:
            var3 = 3;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/system_date_format/SystemDateFormatter.native.tsx';
            var3 = var4.bind(var5)(var3);
            var2.makeFormatter = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 3139, 2]);