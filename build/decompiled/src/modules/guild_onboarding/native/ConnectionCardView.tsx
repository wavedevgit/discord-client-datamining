// modules/guild_onboarding/native/ConnectionCardView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.ActivityIndicator;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var8.borderRadius = var12;
    var8.borderWidth = var11;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.padding = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.marginBottom = var12;
    var12 = 'row';
    var8.flexDirection = var12;
    var12 = 'center';
    var8.alignItems = var12;
    var12 = 'space-between';
    var8.justifyContent = var12;
    var3.card = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.marginRight = var12;
    var3.leftContent = var8;
    var8 = {
        'width': 32,
        'height': 32,
        'marginRight': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.marginRight = var12;
    var3.icon = var8;
    var8 = {};
    var8.flex = var11;
    var3.textContent = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.gap = var9;
    var3.connectedStatus = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/ConnectionCardView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ConnectionCardView, environment: var1
        _fun77436: for (var _fun77436_ip = 0;;) switch (_fun77436_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.displayName;
                var19 = var0.description;
                var10 = var0.icon;
                var7 = var0.isLoading;
                var5 = var0.isConnected;
                var9 = var0.canConnect;
                var12 = var0.onConnect;
                var0 = _closure1_slot6;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var11.card;
                var0.style = var4;
                var4 = {};
                var8 = var11.leftContent;
                var4.style = var8;
                var16 = _closure1_slot4;
                var8 = {};
                var13 = var11.icon;
                var8.style = var13;
                var8.children = var10;
                var10 = var16.bind(var3)(var1, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var13 = {};
                var10 = var11.textContent;
                var13.style = var10;
                var15 = _closure1_slot0;
                var14 = _closure1_slot1;
                var10 = 5;
                var14 = var14[var10];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-md/medium',
                    'color': 'text-strong'
                };
                var14.children = var17;
                var15 = var16.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var15 = null;
                var15 = var15 != var19;
                if (!var15) {
                    _fun77436_ip = 209;
                    continue _fun77436
                }
            case 198:
                var17 = var19.length;
                var16 = 0;
                var15 = var17 > var16;
            case 209:
                if (!var15) {
                    _fun77436_ip = 262;
                    continue _fun77436
                }
            case 212:
                var18 = _closure1_slot4;
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var10];
                var16 = var17.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-subtle'
                };
                var16.children = var19;
                var15 = var18.bind(var3)(var17, var16);
            case 262:
                var14[1] = var15;
                var13.children = var14;
                var13 = var2.bind(var3)(var1, var13);
                var8[1] = var13;
                var4.children = var8;
                var8 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var8;
                if (var7) {
                    _fun77436_ip = 605;
                    continue _fun77436
                }
            case 304:
                if (var5) {
                    _fun77436_ip = 424;
                    continue _fun77436
                }
            case 307:
                var8 = _closure1_slot4;
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var5 = 8;
                var5 = var16[var5];
                var5 = var15.bind(var3)(var5);
                var7 = var5.Button;
                var5 = {
                    'variant': 'primary',
                    'size': 'sm'
                };
                var5.onPress = var12;
                var12 = 6;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.S0W8Z5;
                var12 = var13.bind(var14)(var12);
                var5.text = var12;
                var9 = !var9;
                var5.disabled = var9;
                var5 = var8.bind(var3)(var7, var5);
                _fun77436_ip = 603;
                continue _fun77436;
            case 424:
                var9 = _closure1_slot5;
                var8 = _closure1_slot2;
                var7 = {};
                var11 = var11.connectedStatus;
                var7.style = var11;
                var13 = _closure1_slot4;
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var10 = var14[var10];
                var10 = var12.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-feedback-positive'
                };
                var15 = 6;
                var16 = var14[var15];
                var16 = var12.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var14[var15];
                var15 = var12.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["LV+CXH"];
                var15 = var16.bind(var17)(var15);
                var10.children = var15;
                var11 = var13.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = 7;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.CircleCheckIcon;
                var11 = {
                    'size': 'sm',
                    'color': 'status-positive'
                };
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var5 = var9.bind(var3)(var8, var7);
            case 603:
                _fun77436_ip = 629;
                continue _fun77436;
            case 605:
                var8 = _closure1_slot4;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = 'small';
                var6.size = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 629:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3901, 1234, 3230, 4043, 2]);