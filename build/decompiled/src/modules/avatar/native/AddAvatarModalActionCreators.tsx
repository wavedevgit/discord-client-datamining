// modules/avatar/native/AddAvatarModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 6;
        var2 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var2);
        var4 = var5.popWithKey;
        var2 = _closure1_slot3;
        var2 = var4.bind(var5)(var2);
        var2 = _closure1_slot0;
        var1 = 9;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.nextOnboardingStep;
        var1 = {};
        var4 = arg0;
        var1.skip = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = var3.ADD_AVATAR_MODAL_KEY;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/avatar/native/AddAvatarModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2() {
        _fun113842: for (var _fun113842_ip = 0;;) switch (_fun113842_ip) {
            case 0:
                var5 = arg0;
                var1 = arg2;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun113842_ip = 147;
                    continue _fun113842
                }
            case 15:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 2;
                var3 = var6[var3];
                var4 = undefined;
                var9 = var7.bind(var4)(var3);
                var8 = var9.track;
                var3 = _closure1_slot4;
                var7 = var3.USER_AVATAR_UPDATED;
                var3 = {};
                var10 = arg1;
                var3.default_avatar_selected = var10;
                var10 = false;
                var3.is_guild_profile = var10;
                var10 = {};
                var11 = 'Onboarding';
                var10.page = var11;
                var3.location = var10;
                var3 = var8.bind(var9)(var7, var3);
                var3 = _closure1_slot0;
                var2 = 3;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.saveAccountRequest;
                var2 = {};
                var6 = var5.imageUri;
                var2.avatar = var6;
                var5 = var5.description;
                var2.avatar_description = var5;
                var2 = var3.bind(var4)(var2);
            case 147:
                if (!(var0 == var1)) {
                    _fun113842_ip = 169;
                    continue _fun113842
                }
            case 151:
                var3 = _closure1_slot5;
                var2 = undefined;
                var0 = false;
                var0 = var3.bind(var2)(var0);
                _fun113842_ip = 175;
                continue _fun113842;
            case 169:
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 175:
                var0 = undefined;
                return var0;
        }
    };
    var2.handlePressNext = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 2;
        var1 = var9[var0];
        var0 = undefined;
        var7 = var2.bind(var0)(var1);
        var6 = var7.track;
        var1 = _closure1_slot4;
        var3 = var1.NUO_TRANSITION;
        var1 = {
            'flow_type': 'Mobile NUX Post Reg',
            'from_step': 'Skip avatar modal',
            'skip_attempt': true
        };
        var1 = var6.bind(var7)(var3, var1);
        var1 = 4;
        var1 = var9[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 5;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var6 = var6.t;
        var6 = var6.DnKHuV;
        var6 = var7.bind(var10)(var6);
        var1.title = var6;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var6 = var6.t;
        var6 = var6["1EPySE"];
        var6 = var7.bind(var10)(var6);
        var1.body = var6;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var6 = var6.t;
        var6 = var6["7eZ3ji"];
        var6 = var7.bind(var10)(var6);
        var1.cancelText = var6;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5.nhJ8OC;
        var5 = var6.bind(var7)(var5);
        var1.confirmText = var5;
        var4 = function() {
            _fun113844: for (var _fun113844_ip = 0;;) switch (_fun113844_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.setPendingAvatar;
                    var4 = null;
                    var1 = var1.bind(var3)(var4);
                    var3 = _closure2_slot0;
                    if (!(var4 == var3)) {
                        _fun113844_ip = 62;
                        continue _fun113844
                    }
                case 49:
                    var3 = _closure1_slot5;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    _fun113844_ip = 73;
                    continue _fun113844;
                case 62:
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                case 73:
                    return var0;
            }
        };
        var1.onConfirm = var4;
        var4 = false;
        var1.hideActionSheet = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.showSkipAvatarModal = var3;
    var1 = function() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var6 = _closure1_slot0;
        var3 = 8;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 7;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot3;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.openAddAvatarModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [14589, 660, 795, 5721, 4003, 1234, 4561, 14590, 1307, 10311, 2]);