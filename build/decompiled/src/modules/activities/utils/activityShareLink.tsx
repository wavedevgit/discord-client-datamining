// modules/activities/utils/activityShareLink.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.parseQuestsEmbedCode;
    var3 = new Array(1);
    var3[0] = var6;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/activityShareLink.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun98157: for (var _fun98157_ip = 0;;) switch (_fun98157_ip) {
            case 0:
                var5 = arg0;
                var1 = false;
                var _closure2_slot0 = var1;
                var4 = var5.replaceAll;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 1;
                var2 = var6[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var3 = var2.URL_REGEX;
                var2 = function(arg0) { // Environment: var0
                    _fun98158: for (var _fun98158_ip = 0;;) switch (_fun98158_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var2 = _closure1_slot3;
                            var1 = var2.some;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = arg0;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                var0 = null;
                                var0 = var0 != var1;
                                return var0;
                            };
                            var1 = var1.bind(var2)(var0);
                            if (!var1) {
                                _fun98158_ip = 46;
                                continue _fun98158
                            }
                        case 37:
                            var0 = true;
                            _closure2_slot0 = var0;
                        case 46:
                            var0 = var3;
                            if (var1) {
                                _fun98158_ip = 75;
                                continue _fun98158
                            }
                        case 52:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = '`';
                            var0 = var2.bind(var1)(var3, var1);
                        case 75:
                            return var0;
                    }
                };
                var5 = var4.bind(var5)(var3, var2);
                var2 = _closure2_slot0;
                var0 = var5;
                if (var2) {
                    _fun98157_ip = 183;
                    continue _fun98157
                }
            case 71:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToMarkdownString;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1.dZJpdG;
                var1 = {};
                var6 = arg1;
                var6 = var6.name;
                var1.applicationName = var6;
                var6 = arg2;
                var1.link = var6;
                var4 = var3.bind(var4)(var2, var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '\n\n';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 183:
                return var0;
        }
    };
    var2.resolveActivityShareMessageContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3324, 1457, 1234, 2]);