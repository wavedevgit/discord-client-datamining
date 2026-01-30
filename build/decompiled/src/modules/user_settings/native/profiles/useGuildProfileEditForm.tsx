// modules/user_settings/native/profiles/useGuildProfileEditForm.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FormStates;
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/profiles/useGuildProfileEditForm.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useGuildProfileEditForm, environment: var1
        _fun79944: for (var _fun79944_ip = 0;;) switch (_fun79944_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var9 = 7;
                var0 = var3[var9];
                var8 = undefined;
                var5 = var2.bind(var8)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var25 = var4.bind(var5)(var1, var0);
                var _closure2_slot0 = var25;
                var0 = var3[var9];
                var5 = var2.bind(var8)(var0);
                var4 = var5.useStateFromStoresObject;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var0 = {};
                    var2 = _closure1_slot5;
                    var1 = var2.getAllPending;
                    var4 = var1.bind(var2)();
                    var5 = var0;
                    var1 = copyDataProperties(var5, var4);
                    var1 = var2.showNotice;
                    var3 = var1.bind(var2)();
                    var1 = 'hasEdits';
                    var0[var1] = var3;
                    var1 = var2.getErrors;
                    var3 = var1.bind(var2)();
                    var1 = 'errors';
                    var0[var1] = var3;
                    var1 = var2.getGuild;
                    var3 = var1.bind(var2)();
                    var1 = 'guild';
                    var0[var1] = var3;
                    var1 = var2.getSource;
                    var3 = var1.bind(var2)();
                    var1 = 'source';
                    var0[var1] = var3;
                    var1 = var2.getFormState;
                    var2 = var1.bind(var2)();
                    var1 = 'formState';
                    var0[var1] = var2;
                    return var0;
                };
                var5 = var4.bind(var5)(var1, var0);
                var24 = var5.pendingAvatar;
                var _closure2_slot1 = var24;
                var23 = var5.pendingNickname;
                var _closure2_slot2 = var23;
                var19 = var5.pendingBanner;
                var _closure2_slot3 = var19;
                var18 = var5.pendingBio;
                var _closure2_slot4 = var18;
                var17 = var5.pendingPronouns;
                var _closure2_slot5 = var17;
                var16 = var5.pendingThemeColors;
                var _closure2_slot6 = var16;
                var1 = var5.guild;
                var _closure2_slot7 = var1;
                var11 = var5.formState;
                var22 = var5.pendingAvatarDecoration;
                var _closure2_slot8 = var22;
                var15 = var5.pendingProfileEffect;
                var _closure2_slot9 = var15;
                var21 = var5.pendingNameplate;
                var _closure2_slot10 = var21;
                var20 = var5.pendingDisplayNameStyles;
                var _closure2_slot11 = var20;
                var0 = 8;
                var0 = var3[var0];
                var3 = var2.bind(var8)(var0);
                var2 = var3.useGuildAutomodProfileQuarantineErrors;
                var4 = null;
                var7 = var4 == var1;
                var0 = undefined;
                if (var7) {
                    _fun79944_ip = 250;
                    continue _fun79944
                }
            case 245:
                var0 = var1.id;
            case 250:
                var12 = var2.bind(var3)(var0);
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var9];
                var14 = var3.bind(var8)(var2);
                var13 = var14.useStateFromStores;
                var2 = _closure1_slot5;
                var7 = new Array(2);
                var7[0] = var2;
                var2 = _closure1_slot6;
                var7[1] = var2;
                var2 = function() { // Environment: var10
                    _fun79947: for (var _fun79947_ip = 0;;) switch (_fun79947_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var0 = var2.getFormState;
                            var2 = var0.bind(var2)();
                            var0 = _closure1_slot9;
                            var0 = var0.SUBMITTING;
                            var0 = var2 === var0;
                            if (var0) {
                                _fun79947_ip = 44;
                                continue _fun79947
                            }
                        case 34:
                            var1 = _closure1_slot6;
                            var0 = var1.isSubmitting;
                        case 44:
                            return var0;
                    }
                };
                var7 = var13.bind(var14)(var7, var2);
                var2 = {};
                var29 = var2;
                var28 = var12;
                var12 = copyDataProperties(var29, var28);
                var28 = var5.errors;
                var29 = var2;
                var12 = copyDataProperties(var29, var28);
                var27 = _closure1_slot4;
                var14 = var27.useMemo;
                var13 = function() { // Environment: var10
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var3 = var0.DelayedCall;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = 200;
                    var4 = function() { // Environment: var0
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 10;
                        var2 = var5[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.wait;
                        var4 = _closure1_slot0;
                        var1 = 11;
                        var1 = var5[var1];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.resetAllPending;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var6 = var1;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var12 = new Array(0);
                var14 = var14.bind(var27)(var13, var12);
                var _closure2_slot12 = var14;
                var26 = var27.useEffect;
                var13 = new Array(1);
                var13[0] = var14;
                var12 = function() { // Environment: var10
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot12;
                        var0 = var1.cancel;
                        var0 = var0.bind(var1)();
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 10;
                        var2 = var5[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.wait;
                        var4 = _closure1_slot0;
                        var1 = 11;
                        var1 = var5[var1];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.resetAllPending;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var12 = var26.bind(var27)(var12, var13);
                var13 = _closure1_slot1;
                var12 = 12;
                var12 = var0[var12];
                var12 = var13.bind(var8)(var12);
                var12 = var12.bind(var8)();
                var _closure2_slot13 = var12;
                var0 = var0[var9];
                var12 = var3.bind(var8)(var0);
                var9 = var12.useStateFromStores;
                var0 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot13;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var9.bind(var12)(var3, var0);
                var9 = var7;
                if (var9) {
                    _fun79944_ip = 474;
                    continue _fun79944
                }
            case 460:
                var0 = _closure1_slot9;
                var0 = var0.CLOSED;
                var9 = var11 === var0;
            case 474:
                var _closure2_slot14 = var9;
                var0 = {};
                var13 = _closure1_slot4;
                var12 = var13.useCallback;
                var11 = _closure1_slot3;
                var10 = function*() { // Environment: var10
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun79954: for (var _fun79954_ip = 0;;) switch (_fun79954_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun79954_ip = 804;
                                    continue _fun79954
                                }
                            case 10:
                                var1 = _closure2_slot14;
                                if (var1) {
                                    _fun79954_ip = 799;
                                    continue _fun79954
                                }
                            case 23:
                                var1 = _closure2_slot0;
                                var8 = null;
                                if (!(var8 != var1)) {
                                    _fun79954_ip = 799;
                                    continue _fun79954
                                }
                            case 36:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 13;
                                var6 = var3[var1];
                                var7 = undefined;
                                var10 = var2.bind(var7)(var6);
                                var9 = var10.getGuildMemberChangesForUpdateRequest;
                                var6 = {};
                                var11 = _closure2_slot1;
                                var6.pendingAvatar = var11;
                                var11 = _closure2_slot2;
                                var6.pendingNickname = var11;
                                var11 = _closure2_slot8;
                                var6.pendingAvatarDecoration = var11;
                                var11 = _closure2_slot10;
                                var6.pendingNameplate = var11;
                                var11 = _closure2_slot11;
                                var6.pendingDisplayNameStyles = var11;
                                var13 = var9.bind(var10)(var6);
                                var1 = var3[var1];
                                var3 = var2.bind(var7)(var1);
                                var2 = var3.getProfileChangesForUpdateRequest;
                                var1 = {};
                                var6 = _closure2_slot3;
                                var1.pendingBanner = var6;
                                var6 = _closure2_slot4;
                                var1.pendingBio = var6;
                                var6 = _closure2_slot5;
                                var1.pendingPronouns = var6;
                                var6 = _closure2_slot6;
                                var1.pendingThemeColors = var6;
                                var6 = _closure2_slot9;
                                var1.pendingProfileEffect = var6;
                                var11 = var2.bind(var3)(var1);
                                var2 = global;
                                var3 = var2.Object;
                                var1 = var3.keys;
                                var1 = var1.bind(var3)(var13);
                                var1 = var1.length;
                                var6 = 0;
                                var1 = var1 > var6;
                                var15 = true;
                                var9 = true;
                                if (!var1) {
                                    _fun79954_ip = 524;
                                    continue _fun79954
                                }
                            case 225:
                                var3 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var1 = 11;
                                var1 = var10[var1];
                                var10 = var3.bind(var7)(var1);
                                var3 = var10.saveGuildIdentityChanges;
                                var1 = _closure2_slot7;
                                var12 = var8 == var1;
                                var1 = undefined;
                                if (var12) {
                                    _fun79954_ip = 273;
                                    continue _fun79954
                                }
                            case 264:
                                var12 = _closure2_slot7;
                                var1 = var12.id;
                            case 273:
                                var1 = var3.bind(var10)(var1, var13);
                                SaveGenerator(address = 283);
                            case 281:
                                return var1;
                            case 283:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun79954_ip = 796;
                                    continue _fun79954
                                }
                            case 292:
                                var3 = var1.ok;
                                if (!var3) {
                                    _fun79954_ip = 402;
                                    continue _fun79954
                                }
                            case 301:
                                var14 = var1.body;
                                var3 = _closure2_slot1;
                                if (!(var7 !== var3)) {
                                    _fun79954_ip = 402;
                                    continue _fun79954
                                }
                            case 314:
                                var10 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var3 = 14;
                                var3 = var12[var3];
                                var12 = var10.bind(var7)(var3);
                                var10 = var12.trackUserAvatarUpdated;
                                var3 = {};
                                var3.isGuildProfile = var15;
                                var14 = var14.avatar;
                                var3.avatarHash = var14;
                                var13 = var13.avatarId;
                                var3.avatarId = var13;
                                var13 = _closure2_slot1;
                                var14 = var8 == var13;
                                var13 = undefined;
                                if (var14) {
                                    _fun79954_ip = 392;
                                    continue _fun79954
                                }
                            case 382:
                                var14 = _closure2_slot1;
                                var13 = var14.assetOrigin;
                            case 392:
                                var3.avatarAssetOrigin = var13;
                                var3 = var10.bind(var12)(var3);
                            case 402:
                                var3 = var8 != var1;
                                if (!var3) {
                                    _fun79954_ip = 415;
                                    continue _fun79954
                                }
                            case 409:
                                var3 = var1.ok;
                            case 415:
                                if (var3) {
                                    _fun79954_ip = 451;
                                    continue _fun79954
                                }
                            case 418:
                                var12 = var8 == var1;
                                var10 = undefined;
                                if (var12) {
                                    _fun79954_ip = 447;
                                    continue _fun79954
                                }
                            case 427:
                                var12 = var1.body;
                                var13 = var8 == var12;
                                var10 = undefined;
                                if (var13) {
                                    _fun79954_ip = 447;
                                    continue _fun79954
                                }
                            case 441:
                                var10 = var12.avatar;
                            case 447:
                                var3 = var8 == var10;
                            case 451:
                                if (var3) {
                                    _fun79954_ip = 496;
                                    continue _fun79954
                                }
                            case 454:
                                var10 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var3 = 15;
                                var3 = var12[var3];
                                var12 = var10.bind(var7)(var3);
                                var10 = var12.showGenericGuildProfileUpdateFailureToast;
                                var3 = var1.body;
                                var3 = var3.avatar;
                                var3 = var10.bind(var12)(var3);
                            case 496:
                                var3 = var8 == var1;
                                var10 = undefined;
                                if (var3) {
                                    _fun79954_ip = 511;
                                    continue _fun79954
                                }
                            case 505:
                                var10 = var1.ok;
                            case 511:
                                var3 = var8 != var10;
                                if (!var3) {
                                    _fun79954_ip = 521;
                                    continue _fun79954
                                }
                            case 518:
                                var3 = var10;
                            case 521:
                                var9 = var3;
                            case 524:
                                var3 = var2.Object;
                                var2 = var3.keys;
                                var2 = var2.bind(var3)(var11);
                                var2 = var2.length;
                                var3 = var9;
                                if (!(var2 > var6)) {
                                    _fun79954_ip = 773;
                                    continue _fun79954
                                }
                            case 555:
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var2 = 16;
                                var2 = var10[var2];
                                var10 = var6.bind(var7)(var2);
                                var6 = var10.saveProfileChanges;
                                var2 = _closure2_slot7;
                                var12 = var8 == var2;
                                var2 = undefined;
                                if (var12) {
                                    _fun79954_ip = 603;
                                    continue _fun79954
                                }
                            case 594:
                                var12 = _closure2_slot7;
                                var2 = var12.id;
                            case 603:
                                var2 = var6.bind(var10)(var11, var2);
                                SaveGenerator(address = 613);
                            case 611:
                                return var2;
                            case 613:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun79954_ip = 793;
                                    continue _fun79954
                                }
                            case 622:
                                if (!(var8 != var2)) {
                                    _fun79954_ip = 635;
                                    continue _fun79954
                                }
                            case 626:
                                var6 = var2.ok;
                                if (var6) {
                                    _fun79954_ip = 734;
                                    continue _fun79954
                                }
                            case 635:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var6 = 17;
                                var6 = var11[var6];
                                var6 = var10.bind(var7)(var6);
                                var6 = var6.APIError;
                                var10 = var6.prototype;
                                var10 = Object.create(var10, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var18 = var10;
                                var17 = var2;
                                var6 = new var18[var6](var17, var16);
                                var11 = var6 instanceof Object ? var6 : var10;
                                var10 = var11.getFirstFieldErrorMessage;
                                var6 = 'banner';
                                var10 = var10.bind(var11)(var6);
                                if (!(var8 != var10)) {
                                    _fun79954_ip = 734;
                                    continue _fun79954
                                }
                            case 703:
                                var6 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var5 = 15;
                                var5 = var11[var5];
                                var6 = var6.bind(var7)(var5);
                                var5 = var6.showGenericGuildProfileUpdateFailureToast;
                                var5 = var5.bind(var6)(var10);
                            case 734:
                                var5 = var9;
                                var6 = undefined;
                                if (!var9) {
                                    _fun79954_ip = 764;
                                    continue _fun79954
                                }
                            case 742:
                                var9 = var8 == var2;
                                var7 = undefined;
                                if (var9) {
                                    _fun79954_ip = 757;
                                    continue _fun79954
                                }
                            case 751:
                                var7 = var2.ok;
                            case 757:
                                var5 = var8 != var7;
                                var6 = var7;
                            case 764:
                                if (!var5) {
                                    _fun79954_ip = 770;
                                    continue _fun79954
                                }
                            case 767:
                                var5 = var6;
                            case 770:
                                var3 = var5;
                            case 773:
                                if (!var3) {
                                    _fun79954_ip = 790;
                                    continue _fun79954
                                }
                            case 776:
                                var5 = _closure2_slot12;
                                var4 = var5.delay;
                                var4 = var4.bind(var5)();
                            case 790:
                                return var3;
                            case 793:
                                return var2;
                            case 796:
                                return var1;
                            case 799:
                                var1 = undefined;
                                return var1;
                            case 804:
                                return var0;
                        }
                    };
                    return var0;
                };
                var11 = var11.bind(var8)(var10);
                var10 = new Array(14);
                var10[0] = var9;
                var10[1] = var25;
                var10[2] = var24;
                var10[3] = var23;
                var10[4] = var22;
                var10[5] = var21;
                var10[6] = var20;
                var10[7] = var19;
                var10[8] = var18;
                var10[9] = var17;
                var10[10] = var16;
                var10[11] = var15;
                var16 = var4 == var1;
                var15 = undefined;
                if (var16) {
                    _fun79944_ip = 571;
                    continue _fun79944
                }
            case 566:
                var15 = var1.id;
            case 571:
                var10[12] = var15;
                var10[13] = var14;
                var10 = var12.bind(var13)(var11, var10);
                var0.handleSubmit = var10;
                var0.isDisabled = var9;
                var0.isSubmitting = var7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 11;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.resetAllPending;
                var0.resetPending = var6;
                var29 = var0;
                var28 = var5;
                var5 = copyDataProperties(var29, var28);
                if (!(var4 != var1)) {
                    _fun79944_ip = 648;
                    continue _fun79944
                }
            case 645:
                var3 = var1;
            case 648:
                var1 = 'guild';
                var0[var1] = var3;
                var1 = 'errors';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.default = var1;
    var1 = 200;
    var2.RESET_DELAY_MS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 5543, 4622, 1410, 1613, 660, 566, 10039, 3589, 806, 5683, 10143, 6905, 6908, 6910, 5547, 3309, 2]);