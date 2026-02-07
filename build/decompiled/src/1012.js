// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = 'info';
    var1.DEFAULT_BREADCRUMB_LEVEL = var2;
    var0 = function arg0() {
        _fun10353: for (var _fun10353_ip = 0;;) switch (_fun10353_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.type;
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10353_ip = 32;
                    continue _fun10353
                }
            case 21:
                var2 = var1.type;
                var0.type = var2;
            case 32:
                var2 = var1.level;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10353_ip = 92;
                    continue _fun10353
                }
            case 45:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.severityLevelFromString;
                var2 = var1.level;
                var2 = var4.bind(var5)(var2);
                var0.level = var2;
            case 92:
                var2 = var1.event_id;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10353_ip = 117;
                    continue _fun10353
                }
            case 105:
                var2 = var1.event_id;
                var0.event_id = var2;
            case 117:
                var2 = var1.category;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10353_ip = 142;
                    continue _fun10353
                }
            case 130:
                var2 = var1.category;
                var0.category = var2;
            case 142:
                var2 = var1.message;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10353_ip = 165;
                    continue _fun10353
                }
            case 154:
                var2 = var1.message;
                var0.message = var2;
            case 165:
                var2 = var1.data;
                var4 = 'object';
                var2 = typeof var2;
                var2 = var4 === var2;
                if (!var2) {
                    _fun10353_ip = 195;
                    continue _fun10353
                }
            case 184:
                var5 = var1.data;
                var4 = null;
                var2 = var4 !== var5;
            case 195:
                if (!var2) {
                    _fun10353_ip = 209;
                    continue _fun10353
                }
            case 198:
                var2 = var1.data;
                var0.data = var2;
            case 209:
                var2 = var1.timestamp;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10353_ip = 279;
                    continue _fun10353
                }
            case 222:
                var2 = global;
                var4 = var2.Date;
                var3 = var4.parse;
                var1 = var1.timestamp;
                var3 = var3.bind(var4)(var1);
                var1 = 1000;
                var1 = var3 / var1;
                var3 = var2.isNaN;
                var2 = undefined;
                var2 = var3.bind(var2)(var1);
                if (var2) {
                    _fun10353_ip = 279;
                    continue _fun10353
                }
            case 273:
                var0.timestamp = var1;
            case 279:
                return var0;
        }
    };
    var1.breadcrumbFromObject = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);