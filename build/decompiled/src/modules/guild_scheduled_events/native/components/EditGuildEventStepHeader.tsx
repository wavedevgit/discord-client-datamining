// modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 'center';
    var8 = {
        'alignItems': 'center',
        'paddingBottom': 24
    };
    var3.header = var8;
    var8 = {
        'marginTop': 8,
        'marginBottom': 8
    };
    var3.headerTitle = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.headerSubtitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun65814: for (var _fun65814_ip = 0;;) switch (_fun65814_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.title;
                var9 = var0.subtitle;
                var0 = _closure1_slot5;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var10.header;
                var0.style = var4;
                var7 = _closure1_slot3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var11 = 4;
                var4 = var4[var11];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var10.headerTitle;
                var4.style = var12;
                var4.children = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var8 = null;
                var7 = var8 != var9;
                var5 = null;
                if (!var7) {
                    _fun65814_ip = 202;
                    continue _fun65814
                }
            case 130:
                var7 = '';
                var5 = null;
                if (!(var7 !== var9)) {
                    _fun65814_ip = 202;
                    continue _fun65814
                }
            case 140:
                var8 = _closure1_slot3;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var11];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var10 = var10.headerSubtitle;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 202:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3932, 2]);