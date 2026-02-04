// uikit-native/guild_sidebar/VoiceChannelUserLimit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': 16,
        'width': 16,
        'marginRight': 4
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CHANNELS_DEFAULT;
    var9.tintColor = var12;
    var3.videoIcon = var9;
    var9 = {
        'backgroundColor': null,
        'alignItems': 'center',
        'flexDirection': 'row',
        'borderRadius': 10,
        'overflow': 'hidden'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var3.wrapper = var9;
    var9 = {
        'height': 20,
        'flexDirection': 'row',
        'paddingLeft': 6,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var3.left = var9;
    var9 = {
        'borderTopWidth': 20,
        'borderBottomWidth': 0,
        'borderTopColor': 'transparent',
        'borderBottomColor': 'transparent',
        'borderRightWidth': 6,
        'borderRightColor': null,
        'paddingRight': 2
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var9.borderRightColor = var12;
    var3.mid = var9;
    var9 = {
        'height': 20,
        'flexDirection': 'row',
        'paddingRight': 6,
        'paddingLeft': 2,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var10;
    var3.right = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun102066: for (var _fun102066_ip = 0;;) switch (_fun102066_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.users;
                var11 = var0.total;
                var6 = var0.videoLimit;
                var0 = _closure1_slot6;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var14.wrapper;
                var0.style = var4;
                var4 = {};
                var7 = var14.left;
                var4.style = var7;
                var7 = null;
                if (!var6) {
                    _fun102066_ip = 153;
                    continue _fun102066
                }
            case 70:
                var9 = _closure1_slot4;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 5;
                var6 = var15[var10];
                var8 = var12.bind(var3)(var6);
                var6 = {};
                var16 = 6;
                var16 = var15[var16];
                var16 = var12.bind(var3)(var16);
                var6.source = var16;
                var10 = var15[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.Sizes;
                var10 = var10.REFRESH_SMALL_16;
                var6.size = var10;
                var10 = var14.videoIcon;
                var6.style = var10;
                var7 = var9.bind(var3)(var8, var6);
            case 153:
                var6 = new Array(2);
                var6[0] = var7;
                var7 = _closure1_slot4;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 7;
                var12 = var10[var8];
                var12 = var9.bind(var3)(var12);
                var16 = var12.Text;
                var15 = {
                    'variant': 'text-xs/medium',
                    'lineClamp': 1,
                    'color': 'channels-default'
                };
                var12 = var13.toString;
                var18 = var12.bind(var13)();
                var17 = var18.padStart;
                var13 = 2;
                var12 = '0';
                var17 = var17.bind(var18)(var13, var12);
                var15.children = var17;
                var15 = var7.bind(var3)(var16, var15);
                var6[1] = var15;
                var4.children = var6;
                var6 = var2.bind(var3)(var1, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var6 = _closure1_slot3;
                var5 = {};
                var15 = var14.mid;
                var5.style = var15;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var5 = {};
                var14 = var14.right;
                var5.style = var14;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/medium',
                    'lineClamp': 1,
                    'color': 'channels-default'
                };
                var10 = var11.toString;
                var11 = var10.bind(var11)();
                var10 = var11.padStart;
                var10 = var10.bind(var11)(var13, var12);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/guild_sidebar/VoiceChannelUserLimit.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4086, 11917, 3941, 2]);