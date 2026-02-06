// modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'paddingHorizontal': 4,
        'paddingVertical': 8
    };
    var6.header = var3;
    var3 = {
        'lineHeight': 28,
        'textTransform': 'uppercase'
    };
    var6.headerTitle = var3;
    var3 = {};
    var9 = 60;
    var3.width = var9;
    var6.buttonContainer = var3;
    var9 = {};
    var3 = 12;
    var9.marginLeft = var3;
    var6.rightButton = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun65557: for (var _fun65557_ip = 0;;) switch (_fun65557_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.screen;
                var12 = var0.onClose;
                var0 = _closure1_slot7;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 5;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var0 = var0.EditGuildEventScreens;
                var0 = var0.CHANNEL_SELECTOR;
                if (!(var0 !== var2)) {
                    _fun65557_ip = 192;
                    continue _fun65557
                }
            case 67:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var0 = var0.EditGuildEventScreens;
                var0 = var0.DETAILS;
                if (!(var0 !== var2)) {
                    _fun65557_ip = 180;
                    continue _fun65557
                }
            case 100:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var0 = var0.EditGuildEventScreens;
                var0 = var0.PREVIEW;
                if (!(var0 !== var2)) {
                    _fun65557_ip = 168;
                    continue _fun65557
                }
            case 133:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.assertNever;
                var0 = var0.bind(var1)(var2);
                var2 = undefined;
                _fun65557_ip = 202;
                continue _fun65557;
            case 168:
                var2 = [3, 3];
                _fun65557_ip = 202;
                continue _fun65557;
            case 180:
                var2 = [2, 3];
                _fun65557_ip = 202;
                continue _fun65557;
            case 192:
                var2 = [1, 3];
            case 202:
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var20 = var1[var0];
                var0 = 1;
                var19 = var1[var0];
                var2 = _closure1_slot6;
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 7;
                var0 = var13[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = true;
                var0.top = var4;
                var4 = var10.header;
                var0.style = var4;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var4 = {};
                var5 = var10.buttonContainer;
                var4.style = var5;
                var5 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = 8;
                var5 = var13[var5];
                var5 = var17.bind(var3)(var5);
                var8 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-xs/bold',
                    'color': 'text-default'
                };
                var9 = var10.headerTitle;
                var5.style = var9;
                var14 = 9;
                var9 = var13[var14];
                var9 = var17.bind(var3)(var9);
                var18 = var9.intl;
                var16 = var18.format;
                var9 = var13[var14];
                var9 = var17.bind(var3)(var9);
                var9 = var9.t;
                var15 = var9["42HaFY"];
                var9 = {};
                var9.step = var20;
                var9.total = var19;
                var9 = var16.bind(var18)(var15, var9);
                var5.children = var9;
                var5 = var7.bind(var3)(var8, var5);
                var4[1] = var5;
                var5 = {};
                var8 = var10.buttonContainer;
                var5.style = var8;
                var8 = 10;
                var8 = var13[var8];
                var8 = var17.bind(var3)(var8);
                var9 = var8.HeaderActionButton;
                var8 = {};
                var15 = var13[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var13[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.cpT0Cq;
                var14 = var15.bind(var16)(var14);
                var8.accessibilityLabel = var14;
                var8.onPress = var12;
                var12 = _closure1_slot1;
                var11 = 11;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var8.source = var11;
                var10 = var10.rightButton;
                var8.style = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 8129, 1304, 4737, 3943, 1234, 5327, 5328, 2]);