// modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.applicationId;
        var2 = var0.channelId;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 7;
        var0 = var7[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var6 = var0.bind(var3)(var5, var2);
        var2 = _closure1_slot5;
        var5 = 8;
        var0 = var7[var5];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.users = var6;
        var6 = 5;
        var0.max = var6;
        var6 = _closure1_slot0;
        var4 = 9;
        var4 = var7[var4];
        var4 = var6.bind(var3)(var4);
        var4 = var4.AvatarSizes;
        var4 = var4.REFRESH_MEDIUM_32;
        var0.avatarSize = var4;
        var4 = true;
        var0.withPlusCount = var4;
        var4 = {};
        var4.marginBottom = var5;
        var0.style = var4;
        var4 = {};
        var5 = -8;
        var4.inset = var5;
        var0.cutout = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'backgroundColor': 'rgba(0,0,0,0.4)',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.ongoingActivityContainer = var9;
    var9 = {
        'paddingHorizontal': 12,
        'paddingVertical': 4,
        'borderRadius': null,
        'backgroundColor': null,
        'marginBottom': 8
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var12 = 6;
    var12 = var5[var12];
    var15 = var4.bind(var0)(var12);
    var14 = var15.hexWithOpacity;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var13 = var12.BLACK;
    var12 = 0.64;
    var12 = var14.bind(var15)(var13, var12);
    var9.backgroundColor = var12;
    var3.overlayActivityName = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var10;
    var3.overlayActivityNameText = var9;
    var9 = {};
    var10 = 'transparent';
    var9.color = var10;
    var3.loadingTextColor = var9;
    var9 = {
        'flex': 1,
        'flexShrink': 1,
        'flexGrow': 0,
        'justifyContent': 'center',
        'alignItems': 'center',
        'top': 4294967284
    };
    var3.ellipsis = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Ellipsis;
    var3 = {
        'variant': 'active',
        'size': 'md'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111994: for (var _fun111994_ip = 0;;) switch (_fun111994_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channelId;
                var8 = var0.applicationId;
                var11 = var0.applicationName;
                var12 = var0.submitting;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun111994_ip = 33;
                    continue _fun111994
                }
            case 31:
                var12 = false;
            case 33:
                var0 = _closure1_slot7;
                var13 = var0.bind(var3)();
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 11;
                var0 = var15[var0];
                var2 = var7.bind(var3)(var0);
                var1 = var2.useLoadingStyles;
                var0 = 'md';
                var2 = var1.bind(var2)(var12, var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var0 = var1[var0];
                var0 = 1;
                var14 = var1[var0];
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var13.ongoingActivityContainer;
                var0.style = var4;
                var4 = {};
                var6 = var13.overlayActivityName;
                var4.style = var6;
                var10 = _closure1_slot5;
                var6 = 12;
                var6 = var15[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-md/semibold',
                    'style': null,
                    'lineClamp': 2
                };
                if (var12) {
                    _fun111994_ip = 184;
                    continue _fun111994
                }
            case 176:
                var15 = var13.overlayActivityNameText;
                _fun111994_ip = 190;
                continue _fun111994;
            case 184:
                var15 = var13.loadingTextColor;
            case 190:
                var6.style = var15;
                var6.children = var11;
                var7 = var10.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var11 = _closure1_slot5;
                var10 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = 13;
                var7 = var15[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.View;
                var7 = {};
                var15 = var13.ellipsis;
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var7.style = var13;
                if (!var12) {
                    _fun111994_ip = 274;
                    continue _fun111994
                }
            case 270:
                var12 = _closure1_slot8;
            case 274:
                var7.children = var12;
                var7 = var11.bind(var3)(var10, var7);
                var6[1] = var7;
                var4.children = var6;
                var6 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot9;
                var5 = {};
                var5.channelId = var9;
                var5.applicationId = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 3241, 14309, 9895, 5514, 4108, 4101, 4852, 3717, 2]);