// modules/user_settings/native/quests/QuestBarPreview.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'zIndex': 1000,
        'elevation': 1000,
        'pointerEvents': 'box-none'
    };
    var3.overlay = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'left': null,
        'right': null,
        'zIndex': 1001,
        'elevation': 1001
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.left = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.right = var9;
    var3.questDockContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/quests/QuestBarPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: QuestBarPreview, environment: var1
        _fun83790: for (var _fun83790_ip = 0;;) switch (_fun83790_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.quest;
                var1 = var0.isVisible;
                var0 = _closure1_slot5;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var2 = null;
                var3 = var2 != var13;
                var0 = null;
                if (!var3) {
                    _fun83790_ip = 218;
                    continue _fun83790
                }
            case 42:
                var0 = null;
                if (!var1) {
                    _fun83790_ip = 218;
                    continue _fun83790
                }
            case 50:
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var6.overlay;
                var1.style = var5;
                var5 = {};
                var6 = var6.questDockContainer;
                var5.style = var6;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 5;
                var6 = var12[var6];
                var6 = var11.bind(var4)(var6);
                var7 = var6.QuestDockExternalCoordinationContextProvider;
                var6 = {};
                var9 = _closure1_slot1;
                var8 = 6;
                var8 = var12[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.Provider;
                var8 = {};
                var10 = {};
                var14 = true;
                var10.isVisible = var14;
                var10.quest = var13;
                var8.value = var10;
                var10 = 7;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.QuestDockWithEntranceAnimation;
                var10 = {};
                var10 = var3.bind(var4)(var11, var10);
                var8.children = var10;
                var8 = var3.bind(var4)(var9, var8);
                var6.children = var8;
                var6 = var3.bind(var4)(var7, var6);
                var5.children = var6;
                var5 = var3.bind(var4)(var2, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 218:
                return var0;
        }
    };
    var2.QuestBarPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5220, 10688, 10689, 2]);