// modules/screen_recording/native/StudyConfig.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = {};
    var _closure1_slot0 = var3;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen_recording/native/StudyConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SURVEY_CONFIGS = var3;
    var3 = function(arg0) { // Original name: getSurveyConfig, environment: var1
        _fun100455: for (var _fun100455_ip = 0;;) switch (_fun100455_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = arg0;
                var1 = var1[var0];
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun100455_ip = 26;
                    continue _fun100455
                }
            case 23:
                var0 = var1;
            case 26:
                return var0;
        }
    };
    var2.getSurveyConfig = var3;
    var3 = function(arg0) { // Original name: getSurveyConfigSafe, environment: var1
        _fun100456: for (var _fun100456_ip = 0;;) switch (_fun100456_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                var2 = var1 == var3;
                var0 = null;
                if (var2) {
                    _fun100456_ip = 50;
                    continue _fun100456
                }
            case 14:
                var2 = '';
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun100456_ip = 50;
                    continue _fun100456
                }
            case 24:
                var2 = _closure1_slot0;
                var2 = var2[var3];
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun100456_ip = 47;
                    continue _fun100456
                }
            case 44:
                var1 = var2;
            case 47:
                var0 = var1;
            case 50:
                return var0;
        }
    };
    var2.getSurveyConfigSafe = var3;
    var1 = function() { // Original name: getAvailableSurveys, environment: var1
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var0 = _closure1_slot0;
        var2 = var1.bind(var2)(var0);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.predicate;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getAvailableSurveys = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);