// modules/polls/native/PollCreationInputError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 4294967286
    };
    var3.container = var8;
    var8 = {
        'alignSelf': 'center',
        'marginRight': 5
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_FEEDBACK_CRITICAL;
    var8.color = var9;
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/native/PollCreationInputError.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PollCreationInputError, environment: var1
        var1 = arg0;
        var8 = var1.message;
        var _closure2_slot0 = var8;
        var1 = _closure1_slot7;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var4 = _closure1_slot3;
        var2 = var4.useEffect;
        var1 = new Array(1);
        var1[0] = var8;
        var0 = function() { // Environment: var0
            _fun109097: for (var _fun109097_ip = 0;;) switch (_fun109097_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun109097_ip = 28;
                        continue _fun109097
                    }
                case 16:
                    var3 = _closure2_slot0;
                    var2 = '';
                    var1 = var2 !== var3;
                case 28:
                    if (!var1) {
                        _fun109097_ip = 77;
                        continue _fun109097
                    }
                case 31:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.AccessibilityAnnouncer;
                    var1 = var2.announce;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 77:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var10.container;
        var0.style = var4;
        var7 = _closure1_slot5;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var4 = 6;
        var4 = var9[var4];
        var6 = var6.bind(var3)(var4);
        var4 = {
            'width': 16,
            'height': 16
        };
        var10 = var10.icon;
        var4.style = var10;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot0;
        var5 = 7;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-xs/medium',
            'color': 'text-feedback-critical'
        };
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3119, 7101, 3901, 2]);