// modules/guild_onboarding/native/ConnectionCardView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
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
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var6 = var3.ActivityIndicator;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot3 = var7;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {};
    var11 = 4;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var10.borderRadius = var14;
    var10.borderWidth = var13;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var10.borderColor = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10.padding = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10.marginBottom = var14;
    var14 = 'row';
    var10.flexDirection = var14;
    var14 = 'center';
    var10.alignItems = var14;
    var14 = 'space-between';
    var10.justifyContent = var14;
    var3.card = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10.marginRight = var14;
    var3.leftContent = var10;
    var10 = {
        'width': 32,
        'height': 32,
        'marginRight': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10.marginRight = var14;
    var3.icon = var10;
    var10 = {};
    var10.flex = var13;
    var3.textContent = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10.gap = var11;
    var3.connectedStatus = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var8 = 'small';
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CircleCheckIcon;
    var3 = {
        'size': 'sm',
        'color': 'status-positive'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/ConnectionCardView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78207: for (var _fun78207_ip = 0;;) switch (_fun78207_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.displayName;
                var19 = var0.description;
                var10 = var0.icon;
                var7 = var0.isLoading;
                var5 = var0.isConnected;
                var9 = var0.canConnect;
                var12 = var0.onConnect;
                var0 = _closure1_slot5;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var11.card;
                var0.style = var4;
                var4 = {};
                var8 = var11.leftContent;
                var4.style = var8;
                var16 = _closure1_slot3;
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
                var10 = 6;
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
                    _fun78207_ip = 209;
                    continue _fun78207
                }
            case 198:
                var17 = var19.length;
                var16 = 0;
                var15 = var17 > var16;
            case 209:
                if (!var15) {
                    _fun78207_ip = 262;
                    continue _fun78207
                }
            case 212:
                var18 = _closure1_slot3;
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
                    _fun78207_ip = 571;
                    continue _fun78207
                }
            case 304:
                if (var5) {
                    _fun78207_ip = 424;
                    continue _fun78207
                }
            case 307:
                var8 = _closure1_slot3;
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
                var12 = 7;
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
                _fun78207_ip = 569;
                continue _fun78207;
            case 424:
                var9 = _closure1_slot4;
                var8 = _closure1_slot2;
                var7 = {};
                var11 = var11.connectedStatus;
                var7.style = var11;
                var12 = _closure1_slot3;
                var16 = _closure1_slot0;
                var17 = _closure1_slot1;
                var10 = var17[var10];
                var10 = var16.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-feedback-positive'
                };
                var13 = 7;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["LV+CXH"];
                var13 = var14.bind(var15)(var13);
                var10.children = var13;
                var11 = var12.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = _closure1_slot7;
                var10[1] = var11;
                var7.children = var10;
                var5 = var9.bind(var3)(var8, var7);
            case 569:
                _fun78207_ip = 575;
                continue _fun78207;
            case 571:
                var5 = _closure1_slot6;
            case 575:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3272, 3938, 1234, 4090, 2]);