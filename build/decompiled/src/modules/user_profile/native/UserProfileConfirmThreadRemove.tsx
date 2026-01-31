// modules/user_profile/native/UserProfileConfirmThreadRemove.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileConfirmThreadRemove.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserProfileConfirmThreadRemove, environment: var1
        _fun72102: for (var _fun72102_ip = 0;;) switch (_fun72102_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.isForumPost;
                var2 = var0.user;
                var7 = var0.onConfirm;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.useName;
                var11 = var0.bind(var1)(var2);
                var2 = _closure1_slot3;
                var6 = _closure1_slot0;
                var9 = 3;
                var0 = var4[var9];
                var0 = var6.bind(var3)(var0);
                var1 = var0.AlertModal;
                var0 = {};
                var15 = 4;
                var4 = var4[var15];
                var4 = var6.bind(var3)(var4);
                var8 = var4.intl;
                var6 = var8.string;
                var12 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var15];
                var4 = var12.bind(var3)(var4);
                var12 = var4.t;
                if (var5) {
                    _fun72102_ip = 141;
                    continue _fun72102
                }
            case 131:
                var4 = var12.ZPm8jN;
                _fun72102_ip = 149;
                continue _fun72102;
            case 141:
                var4 = var12["8sKSjm"];
            case 149:
                var4 = var6.bind(var8)(var4);
                var0.title = var4;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var15];
                var4 = var6.bind(var3)(var4);
                var8 = var4.intl;
                var6 = var8.formatToPlainString;
                var12 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var15];
                var4 = var12.bind(var3)(var4);
                var4 = var4.t;
                if (var5) {
                    _fun72102_ip = 220;
                    continue _fun72102
                }
            case 210:
                var5 = var4["hL+Znb"];
                _fun72102_ip = 228;
                continue _fun72102;
            case 220:
                var5 = var4["6UGfnx"];
            case 228:
                var4 = {};
                var4.user = var11;
                var4 = var6.bind(var8)(var5, var4);
                var0.content = var4;
                var6 = _closure1_slot4;
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 5;
                var4 = var8[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.AlertActions;
                var4 = {};
                var11 = _closure1_slot3;
                var10 = var8[var9];
                var10 = var14.bind(var3)(var10);
                var12 = var10.AlertActionButton;
                var10 = {};
                var13 = 'destructive';
                var10.variant = var13;
                var13 = var8[var15];
                var13 = var14.bind(var3)(var13);
                var17 = var13.intl;
                var16 = var17.string;
                var13 = var8[var15];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.N86XcP;
                var13 = var16.bind(var17)(var13);
                var10.text = var13;
                var10.onPress = var7;
                var7 = 'remove-user-from-thread';
                var10 = var11.bind(var3)(var12, var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var9 = var8[var9];
                var9 = var14.bind(var3)(var9);
                var10 = var9.AlertActionButton;
                var9 = {};
                var12 = 'secondary';
                var9.variant = var12;
                var12 = var8[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var8 = var8[var15];
                var8 = var14.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.yNbnce;
                var8 = var12.bind(var13)(var8);
                var9.text = var8;
                var8 = 'cancel-remove-user-from-thread';
                var8 = var11.bind(var3)(var10, var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.actions = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3195, 3986, 1234, 3986, 2]);