// modules/user_settings/native/profiles/useUserProfileEditForm.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FormStates;
    var _closure1_slot7 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/profiles/useUserProfileEditForm.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var8 = 5;
        var1 = var6[var8];
        var4 = undefined;
        var10 = var5.bind(var4)(var1);
        var9 = var10.useStateFromStoresObject;
        var7 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() { // Environment: var0
            var0 = {};
            var2 = _closure1_slot5;
            var1 = var2.getPendingChanges;
            var1 = var1.bind(var2)();
            var0.pendingChanges = var1;
            var1 = var2.getTryItOutChanges;
            var1 = var1.bind(var2)();
            var0.tryItOutChanges = var1;
            var1 = var2.showNotice;
            var1 = var1.bind(var2)();
            var0.hasEdits = var1;
            var1 = var2.getErrors;
            var1 = var1.bind(var2)();
            var0.errors = var1;
            return var0;
        };
        var9 = var9.bind(var10)(var2, var1);
        var2 = var9.pendingChanges;
        var _closure2_slot0 = var2;
        var1 = var9.tryItOutChanges;
        var11 = var9.hasEdits;
        var9 = var9.errors;
        var8 = var6[var8];
        var12 = var5.bind(var4)(var8);
        var10 = var12.useStateFromStores;
        var13 = _closure1_slot6;
        var8 = new Array(2);
        var8[0] = var13;
        var8[1] = var7;
        var7 = function() { // Environment: var0
            _fun57007: for (var _fun57007_ip = 0;;) switch (_fun57007_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var0 = var2.getFormState;
                    var2 = var0.bind(var2)();
                    var0 = _closure1_slot7;
                    var0 = var0.SUBMITTING;
                    var0 = var2 === var0;
                    if (var0) {
                        _fun57007_ip = 44;
                        continue _fun57007
                    }
                case 34:
                    var1 = _closure1_slot6;
                    var0 = var1.isSubmitting;
                case 44:
                    return var0;
            }
        };
        var8 = var10.bind(var12)(var8, var7);
        var _closure2_slot1 = var8;
        var10 = var2.pendingAvatarDecoration;
        var13 = _closure1_slot4;
        var14 = var13.useEffect;
        var12 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.wait;
                var3 = _closure1_slot0;
                var0 = 7;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.resetAllPending;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            return var0;
        };
        var7 = new Array(0);
        var7 = var14.bind(var13)(var12, var7);
        var14 = var13.useCallback;
        var3 = _closure1_slot3;
        var7 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57011: for (var _fun57011_ip = 0;;) switch (_fun57011_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57011_ip = 1175;
                            continue _fun57011
                        }
                    case 10:
                        var1 = undefined;
                        var5 = undefined;
                        var2 = _closure2_slot1;
                        if (var2) {
                            _fun57011_ip = 1172;
                            continue _fun57011
                        }
                    case 27:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 8;
                        var4 = var7[var2];
                        var10 = var3.bind(var1)(var4);
                        var8 = var10.getAccountUpdateForUpdateRequest;
                        var4 = _closure2_slot0;
                        var15 = var8.bind(var10)(var4);
                        var8 = var7[var2];
                        var10 = var3.bind(var1)(var8);
                        var8 = var10.getProfileChangesForUpdateRequest;
                        var11 = var8.bind(var10)(var4);
                        var2 = var7[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getPrimaryGuildChangesForUpdateRequest;
                        var4 = var2.bind(var3)(var4);
                        var5 = true;
                        var7 = global;
                        var3 = var7.Object;
                        var2 = var3.keys;
                        var2 = var2.bind(var3)(var15);
                        var2 = var2.length;
                        var8 = 0;
                        if (!(var2 > var8)) {
                            _fun57011_ip = 521;
                            continue _fun57011
                        }
                    case 139:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var12 = 7;
                        var2 = var2[var12];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.saveAccountChanges;
                        var2 = var2.bind(var3)(var15);
                        SaveGenerator(address = 174);
                    case 172:
                        return var2;
                    case 174:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57011_ip = 1169;
                            continue _fun57011
                        }
                    case 183:
                        var13 = null;
                        if (!(var13 != var2)) {
                            _fun57011_ip = 201;
                            continue _fun57011
                        }
                    case 189:
                        var3 = var2.ok;
                        if (var3) {
                            _fun57011_ip = 351;
                            continue _fun57011
                        }
                    case 201:
                        var10 = var13 == var2;
                        var3 = undefined;
                        if (var10) {
                            _fun57011_ip = 229;
                            continue _fun57011
                        }
                    case 210:
                        var10 = var2.body;
                        var14 = var13 == var10;
                        var3 = undefined;
                        if (var14) {
                            _fun57011_ip = 229;
                            continue _fun57011
                        }
                    case 224:
                        var3 = var10.username;
                    case 229:
                        if (!(var13 == var3)) {
                            _fun57011_ip = 316;
                            continue _fun57011
                        }
                    case 233:
                        var10 = var13 == var2;
                        var3 = undefined;
                        if (var10) {
                            _fun57011_ip = 262;
                            continue _fun57011
                        }
                    case 242:
                        var10 = var2.body;
                        var14 = var13 == var10;
                        var3 = undefined;
                        if (var14) {
                            _fun57011_ip = 262;
                            continue _fun57011
                        }
                    case 256:
                        var3 = var10.avatar;
                    case 262:
                        if (!(var13 != var3)) {
                            _fun57011_ip = 482;
                            continue _fun57011
                        }
                    case 269:
                        var10 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var3 = 11;
                        var3 = var14[var3];
                        var14 = var10.bind(var1)(var3);
                        var10 = var14.showGenericProfileUpdateFailureToast;
                        var3 = var2.body;
                        var3 = var3.avatar;
                        var3 = var10.bind(var14)(var3);
                        _fun57011_ip = 482;
                        continue _fun57011;
                    case 316:
                        var10 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var3 = 10;
                        var3 = var14[var3];
                        var10 = var10.bind(var1)(var3);
                        var3 = var10.showInvalidUsernameToast;
                        var3 = var3.bind(var10)();
                        _fun57011_ip = 482;
                        continue _fun57011;
                    case 351:
                        var16 = var2.body;
                        var3 = _closure2_slot0;
                        var3 = var3.pendingAvatar;
                        if (!(var1 !== var3)) {
                            _fun57011_ip = 455;
                            continue _fun57011
                        }
                    case 370:
                        var10 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var3 = 9;
                        var3 = var14[var3];
                        var14 = var10.bind(var1)(var3);
                        var10 = var14.trackUserAvatarUpdated;
                        var3 = {};
                        var16 = var16.avatar;
                        var3.avatarHash = var16;
                        var15 = var15.avatarId;
                        var3.avatarId = var15;
                        var15 = _closure2_slot0;
                        var16 = var15.pendingAvatar;
                        var17 = var13 == var16;
                        var15 = undefined;
                        if (var17) {
                            _fun57011_ip = 445;
                            continue _fun57011
                        }
                    case 439:
                        var15 = var16.assetOrigin;
                    case 445:
                        var3.avatarAssetOrigin = var15;
                        var3 = var10.bind(var14)(var3);
                    case 455:
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var12];
                        var10 = var10.bind(var1)(var3);
                        var3 = var10.resetPendingAccountChanges;
                        var3 = var3.bind(var10)();
                    case 482:
                        var3 = var5;
                        var10 = undefined;
                        if (!var3) {
                            _fun57011_ip = 512;
                            continue _fun57011
                        }
                    case 490:
                        var14 = var13 == var2;
                        var12 = undefined;
                        if (var14) {
                            _fun57011_ip = 505;
                            continue _fun57011
                        }
                    case 499:
                        var12 = var2.ok;
                    case 505:
                        var3 = var13 != var12;
                        var10 = var12;
                    case 512:
                        if (!var3) {
                            _fun57011_ip = 518;
                            continue _fun57011
                        }
                    case 515:
                        var3 = var10;
                    case 518:
                        var5 = var3;
                    case 521:
                        var10 = var7.Object;
                        var3 = var10.keys;
                        var3 = var3.bind(var10)(var11);
                        var3 = var3.length;
                        if (!(var3 > var8)) {
                            _fun57011_ip = 775;
                            continue _fun57011
                        }
                    case 549:
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var12 = 12;
                        var3 = var3[var12];
                        var10 = var10.bind(var1)(var3);
                        var3 = var10.saveProfileChanges;
                        var3 = var3.bind(var10)(var11);
                        SaveGenerator(address = 584);
                    case 582:
                        return var3;
                    case 584:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 10);
                        if (var10) {
                            _fun57011_ip = 1166;
                            continue _fun57011
                        }
                    case 593:
                        var13 = null;
                        if (!(var13 != var3)) {
                            _fun57011_ip = 608;
                            continue _fun57011
                        }
                    case 599:
                        var10 = var3.ok;
                        if (var10) {
                            _fun57011_ip = 709;
                            continue _fun57011
                        }
                    case 608:
                        var11 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 13;
                        var10 = var14[var10];
                        var10 = var11.bind(var1)(var10);
                        var10 = var10.APIError;
                        var11 = var10.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var10
                            }
                        });
                        var20 = var11;
                        var19 = var3;
                        var10 = new var20[var10](var19, var18);
                        var14 = var10 instanceof Object ? var10 : var11;
                        var11 = var14.getFirstFieldErrorMessage;
                        var10 = 'banner';
                        var14 = var11.bind(var14)(var10);
                        if (!(var13 != var14)) {
                            _fun57011_ip = 736;
                            continue _fun57011
                        }
                    case 676:
                        var11 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var10 = 11;
                        var10 = var15[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.showGenericProfileUpdateFailureToast;
                        var10 = var10.bind(var11)(var14);
                        _fun57011_ip = 736;
                        continue _fun57011;
                    case 709:
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var12];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.resetPendingProfileChanges;
                        var10 = var10.bind(var11)();
                    case 736:
                        var10 = var5;
                        var11 = undefined;
                        if (!var10) {
                            _fun57011_ip = 766;
                            continue _fun57011
                        }
                    case 744:
                        var14 = var13 == var3;
                        var12 = undefined;
                        if (var14) {
                            _fun57011_ip = 759;
                            continue _fun57011
                        }
                    case 753:
                        var12 = var3.ok;
                    case 759:
                        var10 = var13 != var12;
                        var11 = var12;
                    case 766:
                        if (!var10) {
                            _fun57011_ip = 772;
                            continue _fun57011
                        }
                    case 769:
                        var10 = var11;
                    case 772:
                        var5 = var10;
                    case 775:
                        var10 = _closure2_slot0;
                        var10 = var10.pendingLegacyUsernameDisabled;
                        if (!(var1 !== var10)) {
                            _fun57011_ip = 885;
                            continue _fun57011
                        }
                    case 789: // try_start_0
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 14;
                        var10 = var12[var10];
                        var10 = var11.bind(var1)(var10);
                        var11 = var10.LegacyUsernameDisabled;
                        var10 = var11.updateSetting;
                        var9 = _closure2_slot0;
                        var9 = var9.pendingLegacyUsernameDisabled;
                        var9 = var10.bind(var11)(var9);
                        SaveGenerator(address = 840);
                    case 838:
                        return var9;
                    case 840:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                        if (var10) {
                            _fun57011_ip = 878;
                            continue _fun57011
                        }
                    case 846:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 7;
                        var10 = var12[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.resetPendingLegacyUsernameDisabled;
                        var10 = var10.bind(var11)();
                    case 876: // try_end0
                        _fun57011_ip = 885;
                        continue _fun57011;
                    case 878:
                        return var9;
                    case 881: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var5 = false;
                    case 885:
                        var9 = var7.Object;
                        var7 = var9.keys;
                        var7 = var7.bind(var9)(var4);
                        var7 = var7.length;
                        if (!(var7 > var8)) {
                            _fun57011_ip = 1160;
                            continue _fun57011
                        }
                    case 913:
                        var10 = var4.primaryGuildId;
                        if (!(var1 !== var10)) {
                            _fun57011_ip = 1160;
                            continue _fun57011
                        }
                    case 926:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 15;
                        var4 = var8[var4];
                        var8 = var7.bind(var1)(var4);
                        var7 = var8.adoptGuildIdentity;
                        var9 = null;
                        var4 = var9 !== var10;
                        var4 = var7.bind(var8)(var10, var4);
                        SaveGenerator(address = 968);
                    case 966:
                        return var4;
                    case 968:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun57011_ip = 1163;
                            continue _fun57011
                        }
                    case 977:
                        if (!(var9 != var4)) {
                            _fun57011_ip = 990;
                            continue _fun57011
                        }
                    case 981:
                        var7 = var4.ok;
                        if (var7) {
                            _fun57011_ip = 1091;
                            continue _fun57011
                        }
                    case 990:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 13;
                        var7 = var10[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.APIError;
                        var8 = var7.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var7
                            }
                        });
                        var20 = var8;
                        var19 = var4;
                        var7 = new var20[var7](var19, var18);
                        var10 = var7 instanceof Object ? var7 : var8;
                        var8 = var10.getFirstFieldErrorMessage;
                        var7 = 'banner';
                        var10 = var8.bind(var10)(var7);
                        if (!(var9 != var10)) {
                            _fun57011_ip = 1121;
                            continue _fun57011
                        }
                    case 1058:
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 11;
                        var7 = var11[var7];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.showGenericProfileUpdateFailureToast;
                        var7 = var7.bind(var8)(var10);
                        _fun57011_ip = 1121;
                        continue _fun57011;
                    case 1091:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 7;
                        var6 = var8[var6];
                        var7 = var7.bind(var1)(var6);
                        var6 = var7.resetPendingPrimaryGuildChanges;
                        var6 = var6.bind(var7)();
                    case 1121:
                        var6 = var5;
                        var7 = undefined;
                        if (!var6) {
                            _fun57011_ip = 1151;
                            continue _fun57011
                        }
                    case 1129:
                        var10 = var9 == var4;
                        var8 = undefined;
                        if (var10) {
                            _fun57011_ip = 1144;
                            continue _fun57011
                        }
                    case 1138:
                        var8 = var4.ok;
                    case 1144:
                        var6 = var9 != var8;
                        var7 = var8;
                    case 1151:
                        if (!var6) {
                            _fun57011_ip = 1157;
                            continue _fun57011
                        }
                    case 1154:
                        var6 = var7;
                    case 1157:
                        var5 = var6;
                    case 1160:
                        return var5;
                    case 1163:
                        return var4;
                    case 1166:
                        return var3;
                    case 1169:
                        return var2;
                    case 1172:
                        return var1;
                    case 1175:
                        return var0;
                }
            };
            return var0;
        };
        var12 = var3.bind(var4)(var7);
        var7 = new Array(2);
        var7[0] = var8;
        var7[1] = var2;
        var7 = var14.bind(var13)(var12, var7);
        var12 = var13.useCallback;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57013: for (var _fun57013_ip = 0;;) switch (_fun57013_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57013_ip = 138;
                            continue _fun57013
                        }
                    case 10:
                        var1 = _closure2_slot1;
                        if (var1) {
                            _fun57013_ip = 133;
                            continue _fun57013
                        }
                    case 20:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = 7;
                        var1 = var1[var5];
                        var4 = undefined;
                        var6 = var3.bind(var4)(var1);
                        var3 = var6.saveAccountChanges;
                        var1 = {};
                        var7 = _closure2_slot0;
                        var7 = var7.pendingAvatarDecoration;
                        var1.avatarDecoration = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 77);
                    case 75:
                        return var1;
                    case 77:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57013_ip = 130;
                            continue _fun57013
                        }
                    case 83:
                        var3 = null;
                        var3 = var3 != var1;
                        if (!var3) {
                            _fun57013_ip = 98;
                            continue _fun57013
                        }
                    case 92:
                        var3 = var1.ok;
                    case 98:
                        if (!var3) {
                            _fun57013_ip = 133;
                            continue _fun57013
                        }
                    case 101:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.resetPendingAccountChanges;
                        var2 = var2.bind(var3)();
                        _fun57013_ip = 133;
                        continue _fun57013;
                    case 130:
                        return var1;
                    case 133:
                        var1 = undefined;
                        return var1;
                    case 138:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var0);
        var0 = new Array(2);
        var0[0] = var8;
        var14 = var2.pendingAvatarDecoration;
        var0[1] = var14;
        var3 = var12.bind(var13)(var3, var0);
        var0 = {};
        var0.hasEdits = var11;
        var10 = var4 !== var10;
        var0.hasAvatarDecorationEdits = var10;
        var0.errors = var9;
        var0.isSubmitting = var8;
        var0.handleSubmit = var7;
        var0.handleSubmitAvatarDecoration = var3;
        var3 = 7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.resetAllPending;
        var0.resetPending = var3;
        var17 = var0;
        var16 = var2;
        var2 = copyDataProperties(var17, var16);
        var17 = var0;
        var16 = var1;
        var1 = copyDataProperties(var17, var16);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 5583, 4660, 660, 566, 806, 5721, 6942, 6945, 6946, 6947, 5586, 3350, 1348, 6948, 2]);