// modules/quests/native/VideoQuestModal/captions/VideoQuestCaptionsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/quests/native/VideoQuestModal/captions/VideoQuestCaptionsUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0, arg1) { // Environment: var1
        _fun84057: for (var _fun84057_ip = 0;;) switch (_fun84057_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var0 = var7.length;
                var5 = 1;
                var4 = var0 - var5;
                var2 = global;
                var1 = 2;
                var3 = 0;
                if (!(var3 <= var4)) {
                    _fun84057_ip = 105;
                    continue _fun84057
                }
            case 29:
                var9 = var2.Math;
                var8 = var9.floor;
                var0 = var3 + var4;
                var0 = var0 / var1;
                var9 = var8.bind(var9)(var0);
                var0 = var7[var9];
                var8 = var0.start;
                if (!(var6 >= var8)) {
                    _fun84057_ip = 76;
                    continue _fun84057
                }
            case 67:
                var8 = var0.end;
                if (!(!(var6 <= var8))) {
                    _fun84057_ip = 109;
                    continue _fun84057
                }
            case 76:
                var8 = var0.start;
                if (!(!(var6 < var8))) {
                    _fun84057_ip = 91;
                    continue _fun84057
                }
            case 85:
                var8 = var9 + var5;
                _fun84057_ip = 98;
                continue _fun84057;
            case 91:
                var4 = var9 - var5;
                var8 = var3;
            case 98:
                var3 = var8;
                if (var3 <= var4) {
                    _fun84057_ip = 29;
                    continue _fun84057
                }
            case 105:
                var1 = null;
                return var1;
            case 109:
                return var0;
        }
    };
    var2.findActiveCaption = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);