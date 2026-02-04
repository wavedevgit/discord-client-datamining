// modules/user_profile/hooks/native/useUploadAvatar.tsx
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsPages;
    var _closure1_slot6 = var6;
    var6 = var3.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot7 = var6;
    var6 = var3.Base64GIFPrefix;
    var _closure1_slot8 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot9 = var6;
    var3 = var3.UpsellTypes;
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot11 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/native/useUploadAvatar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80360: for (var _fun80360_ip = 0;;) switch (_fun80360_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.isTryItOut;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun80360_ip = 19;
                    continue _fun80360
                }
            case 17:
                var5 = false;
            case 19:
                var _closure2_slot0 = var5;
                var4 = var1.analyticsLocations;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var8 = var6.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var7.bind(var8)(var6, var2);
                _closure2_slot2 = var6;
                var2 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleShowUpsellAlert;
                    var1 = {};
                    var4 = _closure1_slot10;
                    var4 = var4.ANIMATED_AVATAR;
                    var1.initialUpsellKey = var4;
                    var4 = {};
                    var6 = _closure1_slot6;
                    var6 = var6.USER_SETTINGS;
                    var4.page = var6;
                    var6 = _closure1_slot9;
                    var6 = var6.SETTINGS_OVERVIEW;
                    var4.section = var6;
                    var1.analyticsLocation = var4;
                    var4 = {};
                    var5 = _closure1_slot11;
                    var5 = var5.ANIMATED_USER_AVATAR_MODAL;
                    var4.type = var5;
                    var1.analyticsProperties = var4;
                    var4 = _closure2_slot1;
                    var1.analyticsLocations = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var2.bind(var3)(var4, var7);
                _closure2_slot3 = var4;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun80364: for (var _fun80364_ip = 0;;) switch (_fun80364_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun80364_ip = 380;
                                    continue _fun80364
                                }
                            case 10:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 7;
                                var1 = var4[var1];
                                var2 = undefined;
                                var5 = var3.bind(var2)(var1);
                                var1 = var5.hideActionSheet;
                                var1 = var1.bind(var5)();
                                var1 = 8;
                                var1 = var4[var1];
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.openImagePicker;
                                var1 = {};
                                var5 = _closure1_slot7;
                                var1.size = var5;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 82);
                            case 80:
                                return var1;
                            case 82:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun80364_ip = 377;
                                    continue _fun80364
                                }
                            case 91:
                                var12 = var1.base64;
                                var10 = null;
                                if (!(var10 != var12)) {
                                    _fun80364_ip = 374;
                                    continue _fun80364
                                }
                            case 106:
                                var3 = _closure2_slot0;
                                if (var3) {
                                    _fun80364_ip = 151;
                                    continue _fun80364
                                }
                            case 116:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var4 = 9;
                                var4 = var7[var4];
                                var7 = var5.bind(var2)(var4);
                                var5 = var7.canUseAnimatedAvatar;
                                var4 = _closure2_slot2;
                                var3 = var5.bind(var7)(var4);
                            case 151:
                                var5 = var12.match;
                                var4 = global;
                                var11 = var4.RegExp;
                                var7 = _closure1_slot8;
                                var4 = '^';
                                var14 = var4 + var7;
                                var4 = var11.prototype;
                                var7 = Object.create(var4, {
                                    constructor: {
                                        value: var11
                                    }
                                });
                                var13 = 'i';
                                var15 = var7;
                                var4 = new var15[var11](var14, var13, var12);
                                var4 = var4 instanceof Object ? var4 : var7;
                                var4 = var5.bind(var12)(var4);
                                if (!(var10 != var4)) {
                                    _fun80364_ip = 226;
                                    continue _fun80364
                                }
                            case 210:
                                if (var3) {
                                    _fun80364_ip = 226;
                                    continue _fun80364
                                }
                            case 213:
                                var3 = _closure2_slot3;
                                var3 = var3.bind(var2)();
                                _fun80364_ip = 374;
                                continue _fun80364;
                            case 226:
                                var8 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var7 = 10;
                                var3 = var11[var7];
                                var5 = var8.bind(var2)(var3);
                                var4 = var5.createPendingImage;
                                var3 = {};
                                var3.imageUri = var12;
                                var7 = var11[var7];
                                var8 = var8.bind(var2)(var7);
                                var7 = var8.generateAvatarDescription;
                                var7 = var7.bind(var8)();
                                var3.description = var7;
                                var5 = var4.bind(var5)(var3);
                                var3 = _closure2_slot0;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                if (var3) {
                                    _fun80364_ip = 351;
                                    continue _fun80364
                                }
                            case 302:
                                var3 = 12;
                                var3 = var6[var3];
                                var8 = var4.bind(var2)(var3);
                                var7 = var8.setNewPendingAvatar;
                                var3 = _closure2_slot2;
                                var10 = var10 == var3;
                                var3 = undefined;
                                if (var10) {
                                    _fun80364_ip = 343;
                                    continue _fun80364
                                }
                            case 333:
                                var9 = _closure2_slot2;
                                var3 = var9.avatar;
                            case 343:
                                var3 = var7.bind(var8)(var5, var3);
                                _fun80364_ip = 374;
                                continue _fun80364;
                            case 351:
                                var3 = 11;
                                var3 = var6[var3];
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.setTryItOutAvatar;
                                var3 = var3.bind(var4)(var5);
                            case 374:
                                return var2;
                            case 377:
                                return var1;
                            case 380:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = new Array(3);
                var0[0] = var6;
                var0[1] = var5;
                var0[2] = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1621, 660, 1623, 632, 7613, 3278, 4013, 3109, 5723, 5586, 5585, 2]);