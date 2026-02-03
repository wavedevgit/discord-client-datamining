// modules/hub/HubUpsellManager.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.addPostConnectionCallback;
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildFeatures;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ContentDismissActionType;
    var _closure1_slot7 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun80964: for (var _fun80964_ip = 0;;) switch (_fun80964_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.hasModalOpen;
                var _closure2_slot0 = var2;
                var0 = var0.openModal;
                var _closure2_slot1 = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var4 = var3.ProcessArgs;
                var3 = var4.isDisallowPopupsSet;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun80964_ip = 85;
                    continue _fun80964
                }
            case 69:
                var2 = _closure1_slot3;
                var1 = function() { // Environment: var1
                    _fun80965: for (var _fun80965_ip = 0;;) switch (_fun80965_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.bind(var0)();
                            if (var1) {
                                _fun80965_ip = 405;
                                continue _fun80965
                            }
                        case 35:
                            var3 = _closure1_slot5;
                            var1 = var3.getCurrentUser;
                            var3 = var1.bind(var3)();
                            var4 = null;
                            var1 = var4 != var3;
                            if (!var1) {
                                _fun80965_ip = 143;
                                continue _fun80965
                            }
                        case 57:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var5 = 7;
                            var6 = var11[var5];
                            var6 = var10.bind(var0)(var6);
                            var8 = var6.bind(var0)();
                            var7 = var8.diff;
                            var6 = var11[var5];
                            var6 = var10.bind(var0)(var6);
                            var9 = 8;
                            var9 = var11[var9];
                            var10 = var10.bind(var0)(var9);
                            var9 = var10.extractTimestamp;
                            var3 = var3.id;
                            var3 = var9.bind(var10)(var3);
                            var6 = var6.bind(var0)(var3);
                            var3 = 'days';
                            var3 = var7.bind(var8)(var6, var3);
                            var1 = var3 < var5;
                        case 143:
                            var5 = _closure1_slot4;
                            var3 = var5.getGuildsArray;
                            var6 = var3.bind(var5)();
                            var5 = var6.find;
                            var3 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var2 = var0.features;
                                var1 = var2.has;
                                var0 = _closure1_slot6;
                                var0 = var0.HUB;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = var5.bind(var6)(var3);
                            var4 = var4 != var3;
                            var8 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var5 = 9;
                            var5 = var3[var5];
                            var7 = var8.bind(var0)(var5);
                            var6 = var7.UNSAFE_isDismissibleContentDismissed;
                            var5 = 10;
                            var3 = var3[var5];
                            var3 = var8.bind(var0)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.HUB_BACK_TO_SCHOOL_UPSELL;
                            var3 = var6.bind(var7)(var3);
                            var3 = !var3;
                            if (var1) {
                                _fun80965_ip = 252;
                                continue _fun80965
                            }
                        case 241:
                            var6 = _closure2_slot0;
                            var1 = var6.bind(var0)();
                        case 252:
                            if (var1) {
                                _fun80965_ip = 258;
                                continue _fun80965
                            }
                        case 255:
                            var1 = var4;
                        case 258:
                            if (var1) {
                                _fun80965_ip = 264;
                                continue _fun80965
                            }
                        case 261:
                            var1 = !var3;
                        case 264:
                            var1 = !var1;
                            if (!var1) {
                                _fun80965_ip = 300;
                                continue _fun80965
                            }
                        case 270:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 11;
                            var3 = var6[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.backToSchoolEnabled;
                            var1 = var3.bind(var4)();
                        case 300:
                            if (!var1) {
                                _fun80965_ip = 405;
                                continue _fun80965
                            }
                        case 303:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 11;
                            var3 = var1[var3];
                            var6 = var4.bind(var0)(var3);
                            var4 = var6.trackExposure;
                            var3 = {};
                            var7 = '8b792a_1';
                            var3.location = var7;
                            var3 = var4.bind(var6)(var3);
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var0)();
                            var4 = _closure1_slot0;
                            var2 = 12;
                            var2 = var1[var2];
                            var3 = var4.bind(var0)(var2);
                            var2 = var3.requestMarkDismissibleContentAsShown;
                            var1 = var1[var5];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.DismissibleContent;
                            var1 = var1.HUB_BACK_TO_SCHOOL_UPSELL;
                            var1 = var2.bind(var3)(var1);
                        case 405:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
            case 85:
                return var0;
        }
    };
    var1.init = var6;
    var3 = function() {
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 9;
        var1 = var6[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var1 = 10;
        var1 = var6[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.DismissibleContent;
        var2 = var1.HUB_BACK_TO_SCHOOL_UPSELL;
        var1 = {};
        var5 = _closure1_slot7;
        var5 = var5.AUTO;
        var1.dismissAction = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.hideHubUpsell = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/HubUpsellManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3472, 1410, 1621, 660, 1369, 4017, 1368, 3045, 21, 3212, 1358, 10309, 1360, 2]);