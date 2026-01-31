// modules/nameplates/native/NameplateCardPreview.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%',
        'height': '100%'
    };
    var11 = '100%';
    var9 = 3;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingHorizontal = var12;
    var3.nameplatePreviewContainer = var8;
    var8 = {};
    var8.width = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.nameplateContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var9;
    var3.nameplate = var8;
    var8 = {};
    var9 = 0.5;
    var8.opacity = var9;
    var3.purchased = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nameplates/native/NameplateCardPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun75170: for (var _fun75170_ip = 0;;) switch (_fun75170_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.item;
                var5 = var0.isPurchased;
                var16 = var0.animate;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun75170_ip = 28;
                    continue _fun75170
                }
            case 26:
                var16 = false;
            case 28:
                var0 = _closure1_slot6;
                var17 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var8 = var1.bind(var3)(var0);
                var7 = var2.type;
                var1 = _closure1_slot0;
                var0 = 5;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.NAMEPLATE;
                var7 = var7 === var0;
                var0 = 'Item must be Nameplate';
                var0 = var8.bind(var3)(var7, var0);
                var0 = 6;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getNameplateDataFromRecord;
                var18 = var0.bind(var1)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var17.nameplatePreviewContainer;
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun75170_ip = 164;
                    continue _fun75170
                }
            case 158:
                var5 = var17.purchased;
            case 164:
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot4;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 7;
                var4 = var11[var5];
                var4 = var10.bind(var3)(var4);
                var12 = var4.NameplateDummyUserPreview;
                var4 = {
                    'width': 34,
                    'avatarSize': null,
                    'hideAvatar': true
                };
                var9 = 8;
                var8 = var11[var9];
                var8 = var10.bind(var3)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.XSMALL_20;
                var4.avatarSize = var8;
                var14 = {};
                var8 = 0.3;
                var14.opacity = var8;
                var13 = new Array(1);
                var13[0] = var14;
                var4.style = var13;
                var12 = var7.bind(var3)(var12, var4);
                var4 = new Array(5);
                var4[0] = var12;
                var12 = var11[var5];
                var12 = var10.bind(var3)(var12);
                var14 = var12.NameplateDummyUserPreview;
                var12 = {
                    'width': 44,
                    'avatarSize': null,
                    'hideAvatar': true
                };
                var13 = var11[var9];
                var13 = var10.bind(var3)(var13);
                var13 = var13.AvatarSizes;
                var13 = var13.XSMALL_20;
                var12.avatarSize = var13;
                var19 = {};
                var13 = 0.6;
                var19.opacity = var13;
                var15 = new Array(1);
                var15[0] = var19;
                var12.style = var15;
                var12 = var7.bind(var3)(var14, var12);
                var4[1] = var12;
                var12 = _closure1_slot3;
                var6 = {};
                var14 = var17.nameplateContainer;
                var6.style = var14;
                var14 = var11[var5];
                var14 = var10.bind(var3)(var14);
                var15 = var14.NameplateDummyUserPreview;
                var14 = {};
                var19 = 54;
                var14.width = var19;
                var19 = var11[var9];
                var19 = var10.bind(var3)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.XSMALL_20;
                var14.avatarSize = var19;
                var14.nameplate = var18;
                var17 = var17.nameplate;
                var14.style = var17;
                var14.animate = var16;
                var14 = var7.bind(var3)(var15, var14);
                var6.children = var14;
                var6 = var7.bind(var3)(var12, var6);
                var4[2] = var6;
                var6 = var11[var5];
                var6 = var10.bind(var3)(var6);
                var12 = var6.NameplateDummyUserPreview;
                var6 = {
                    'width': 44,
                    'avatarSize': null,
                    'hideAvatar': true
                };
                var14 = var11[var9];
                var14 = var10.bind(var3)(var14);
                var14 = var14.AvatarSizes;
                var14 = var14.XSMALL_20;
                var6.avatarSize = var14;
                var14 = {};
                var14.opacity = var13;
                var13 = new Array(1);
                var13[0] = var14;
                var6.style = var13;
                var6 = var7.bind(var3)(var12, var6);
                var4[3] = var6;
                var5 = var11[var5];
                var5 = var10.bind(var3)(var5);
                var6 = var5.NameplateDummyUserPreview;
                var5 = {
                    'width': 34,
                    'avatarSize': null,
                    'hideAvatar': true
                };
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.XSMALL_20;
                var5.avatarSize = var9;
                var9 = {};
                var9.opacity = var8;
                var8 = new Array(1);
                var8[0] = var9;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 44, 3452, 1634, 6874, 5414, 2]);