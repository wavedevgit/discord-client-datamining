// modules/action_sheet/native/components/PublishModal.tsx
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
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ActivityIndicator;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.paddingTop = var9;
    var3.alertContainer = var8;
    var8 = {
        'paddingTop': 62,
        'paddingBottom': 46
    };
    var3.alertLoading = var8;
    var8 = {
        'marginBottom': 16,
        'fontSize': 16,
        'lineHeight': 24
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.DARK_PRIMARY_300_LIGHT_PRIMARY_400;
    var8.color = var9;
    var3.alertBodyText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/action_sheet/native/components/PublishModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun75797: for (var _fun75797_ip = 0;;) switch (_fun75797_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var0 = _closure1_slot7;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var0 = var2.bind(var3)(var0);
                var2 = var0.bind(var3)(var1);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var13 = 0;
                var16 = var1[var13];
                var0 = 1;
                var0 = var1[var0];
                if (var0) {
                    _fun75797_ip = 342;
                    continue _fun75797
                }
            case 78:
                var15 = null;
                var1 = var15 == var16;
                var0 = undefined;
                if (var1) {
                    _fun75797_ip = 95;
                    continue _fun75797
                }
            case 89:
                var0 = var16.guildsFollowing;
            case 95:
                var6 = var15 != var0;
                if (!var6) {
                    _fun75797_ip = 121;
                    continue _fun75797
                }
            case 102:
                var1 = var15 == var16;
                var0 = undefined;
                if (var1) {
                    _fun75797_ip = 117;
                    continue _fun75797
                }
            case 111:
                var0 = var16.guildsFollowing;
            case 117:
                var6 = var0 > var13;
            case 121:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var5.alertContainer;
                var0.style = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 7;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.LegacyText;
                var8 = {};
                var9 = var5.alertBodyText;
                var8.style = var9;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 8;
                var11 = var14[var9];
                var11 = var10.bind(var3)(var11);
                var12 = var11.intl;
                if (var6) {
                    _fun75797_ip = 248;
                    continue _fun75797
                }
            case 207:
                var11 = var12.string;
                var6 = var14[var9];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["8FpqOs"];
                var6 = var11.bind(var12)(var6);
                var8.children = var6;
                var6 = var8;
                _fun75797_ip = 324;
                continue _fun75797;
            case 248:
                var11 = var12.format;
                var9 = var14[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var10 = var9.GCGrNP;
                var9 = {};
                var17 = var15 == var16;
                var14 = undefined;
                if (var17) {
                    _fun75797_ip = 292;
                    continue _fun75797
                }
            case 286:
                var14 = var16.guildsFollowing;
            case 292:
                var15 = var15 != var14;
                var13 = 0;
                if (!var15) {
                    _fun75797_ip = 304;
                    continue _fun75797
                }
            case 301:
                var13 = var14;
            case 304:
                var9.numGuildsFollowing = var13;
                var9 = var11.bind(var12)(var10, var9);
                var8.children = var9;
                var6 = var8;
            case 324:
                var6 = var2.bind(var3)(var7, var6);
                var0.children = var6;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 342:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var5.alertLoading;
                var0.style = var5;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = true;
                var4.animating = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 4867, 9605, 4871, 1234, 2]);