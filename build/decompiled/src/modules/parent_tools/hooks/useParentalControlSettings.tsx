// modules/parent_tools/hooks/useParentalControlSettings.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyToastType;
    var _closure1_slot6 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/hooks/useParentalControlSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        _fun81235: for (var _fun81235_ip = 0;;) switch (_fun81235_ip) {
            case 0:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var1.bind(var4)(var0);
                var0 = var5.useSelectedTeen;
                var10 = var0.bind(var5)();
                var0 = 5;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var3 = var0.ParentalControlledExplicitContent;
                var1 = var3.useControlledSetting;
                var7 = null;
                var5 = var7 == var10;
                var0 = undefined;
                if (var5) {
                    _fun81235_ip = 75;
                    continue _fun81235
                }
            case 70:
                var0 = var10.id;
            case 75:
                var8 = var1.bind(var3)(var0);
                var1 = var7 == var10;
                var0 = null;
                if (var1) {
                    _fun81235_ip = 292;
                    continue _fun81235
                }
            case 92:
                var1 = {};
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var6 = 6;
                var3 = var3[var6];
                var9 = var5.bind(var4)(var3);
                var5 = var9.resolveExplicitContentSettingWithDefaultsForTeen;
                var3 = {};
                var12 = var7 == var10;
                var11 = undefined;
                if (var12) {
                    _fun81235_ip = 136;
                    continue _fun81235
                }
            case 131:
                var11 = var10.id;
            case 136:
                var3.teenId = var11;
                var12 = var7 == var8;
                var11 = undefined;
                if (var12) {
                    _fun81235_ip = 156;
                    continue _fun81235
                }
            case 150:
                var11 = var8.explicitContentNonFriendDm;
            case 156:
                var3.setting = var11;
                var3 = var5.bind(var9)(var3);
                var1.explicitContentNonFriendDm = var3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var6 = var5.bind(var4)(var3);
                var5 = var6.resolveExplicitContentSettingWithDefaultsForTeen;
                var3 = {};
                var11 = var7 == var10;
                var9 = undefined;
                if (var11) {
                    _fun81235_ip = 210;
                    continue _fun81235
                }
            case 205:
                var9 = var10.id;
            case 210:
                var3.teenId = var9;
                var9 = var7 == var8;
                var7 = undefined;
                if (var9) {
                    _fun81235_ip = 230;
                    continue _fun81235
                }
            case 224:
                var7 = var8.explicitContentFriendDm;
            case 230:
                var3.setting = var7;
                var7 = true;
                var3.isFriend = var7;
                var3 = var5.bind(var6)(var3);
                var1.explicitContentFriendDm = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.ExplicitContentRedaction;
                var2 = var2.BLUR;
                var1.explicitContentGuilds = var2;
                var0 = var1;
            case 292:
                return var0;
        }
    };
    var2.useParentalControlledExplicitContentSettings = var3;
    var3 = function() { // Environment: var1
        _fun81236: for (var _fun81236_ip = 0;;) switch (_fun81236_ip) {
            case 0:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 4;
                var0 = var5[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var0 = var3.useSelectedTeen;
                var3 = var0.bind(var3)();
                var0 = 5;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var6 = var0.ParentalControlledGoreContent;
                var5 = var6.useControlledSetting;
                var0 = null;
                var7 = var0 == var3;
                var1 = undefined;
                if (var7) {
                    _fun81236_ip = 75;
                    continue _fun81236
                }
            case 70:
                var1 = var3.id;
            case 75:
                var1 = var5.bind(var6)(var1);
                if (!(var0 != var3)) {
                    _fun81236_ip = 306;
                    continue _fun81236
                }
            case 87:
                if (!(var0 == var1)) {
                    _fun81236_ip = 93;
                    continue _fun81236
                }
            case 91:
                var1 = {};
            case 93:
                var5 = var1.goreContentNonFriendDm;
                var3 = var1.goreContentFriendDm;
                var1 = {};
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 6;
                var6 = var6[var7];
                var8 = var8.bind(var4)(var6);
                var6 = var8.isSetAndNotDefault;
                var6 = var6.bind(var8)(var5);
                if (var6) {
                    _fun81236_ip = 181;
                    continue _fun81236
                }
            case 141:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 8;
                var6 = var9[var6];
                var9 = var8.bind(var4)(var6);
                var8 = var9.resolveGoreSettingWithDefaultsForTeen;
                var6 = {};
                var10 = true;
                var6.isDm = var10;
                var5 = var8.bind(var9)(var6);
            case 181:
                var1.goreContentNonFriendDm = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var6 = var6.bind(var4)(var5);
                var5 = var6.isSetAndNotDefault;
                var5 = var5.bind(var6)(var3);
                if (var5) {
                    _fun81236_ip = 262;
                    continue _fun81236
                }
            case 217:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 8;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.resolveGoreSettingWithDefaultsForTeen;
                var5 = {
                    'isDm': true,
                    'isFriend': true
                };
                var3 = var6.bind(var7)(var5);
            case 262:
                var1.goreContentFriendDm = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.ExplicitContentRedaction;
                var2 = var2.BLUR;
                var1.goreContentGuilds = var2;
                return var1;
            case 306:
                return var0;
        }
    };
    var2.useParentalControlledGoreContentSettings = var3;
    var3 = function() { // Environment: var1
        _fun81237: for (var _fun81237_ip = 0;;) switch (_fun81237_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var4 = var1[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var4);
                var4 = var5.useSelectedTeen;
                var5 = var4.bind(var5)();
                var6 = 5;
                var1 = var1[var6];
                var1 = var2.bind(var0)(var1);
                var7 = var1.ParentalControlledDefaultGuildsRestricted;
                var4 = var7.useControlledSetting;
                var1 = null;
                var8 = var1 == var5;
                var2 = undefined;
                if (var8) {
                    _fun81237_ip = 75;
                    continue _fun81237
                }
            case 70:
                var2 = var5.id;
            case 75:
                var2 = var4.bind(var7)(var2);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var0)(var3);
                var4 = var3.ParentalControlledDefaultGuildsRestrictedV2;
                var3 = var4.useControlledSetting;
                var6 = var1 == var5;
                var0 = undefined;
                if (var6) {
                    _fun81237_ip = 123;
                    continue _fun81237
                }
            case 118:
                var0 = var5.id;
            case 123:
                var0 = var3.bind(var4)(var0);
                if (!(var1 == var0)) {
                    _fun81237_ip = 147;
                    continue _fun81237
                }
            case 132:
                var3 = !var2;
                var1 = !var3;
                if (!var3) {
                    _fun81237_ip = 144;
                    continue _fun81237
                }
            case 141:
                var1 = var2;
            case 144:
                var0 = var1;
            case 147:
                return var0;
        }
    };
    var2.useDefaultGuildsRestricted = var3;
    var3 = function() { // Original name: useAllowFriendsFromMutualGuildsOnlyForTeen, environment: var1
        _fun81238: for (var _fun81238_ip = 0;;) switch (_fun81238_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 4;
                var3 = var6[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var3 = var5.useSelectedTeen;
                var5 = var3.bind(var5)();
                var3 = 5;
                var3 = var6[var3];
                var3 = var4.bind(var2)(var3);
                var4 = var3.ParentalControlledFriendSourceFlags;
                var3 = var4.useControlledSetting;
                var6 = null;
                var6 = var6 == var5;
                if (var6) {
                    _fun81238_ip = 75;
                    continue _fun81238
                }
            case 70:
                var2 = var5.id;
            case 75:
                var4 = var3.bind(var4)(var2);
                var _closure2_slot0 = var4;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.computeFlags;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var0, var1);
                var0 = var1.mutualGuilds;
                if (!var0) {
                    _fun81238_ip = 132;
                    continue _fun81238
                }
            case 123:
                var1 = var1.all;
                var0 = !var1;
            case 132:
                return var0;
        }
    };
    var2.useAllowFriendsFromMutualGuildsOnlyForTeen = var3;
    var3 = function() { // Original name: useIsParentallyControlled, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.useHasActiveParentLinks;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.useIsParentallyControlled = var3;
    var1 = function(arg0) { // Original name: useParentalControlledConsent, environment: var1
        var3 = arg0;
        var2 = function(arg0) { // Original name: useParentalControlledHasConsented, environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var2);
            var2 = var6.useSelectedTeenId;
            var2 = var2.bind(var6)();
            var _closure3_slot1 = var2;
            var2 = 11;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useStateFromStores;
            var4 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = function() { // Environment: var0
                var3 = _closure1_slot5;
                var2 = var3.hasConsented;
                var1 = _closure3_slot1;
                var0 = _closure3_slot0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        var0 = function(arg0) { // Original name: useUpdateParentalControlledConsent, environment: var0
            var4 = arg0;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.useSelectedTeenId;
            var5 = var3.bind(var5)();
            var _closure3_slot1 = var5;
            var3 = _closure1_slot4;
            var2 = var3.useCallback;
            var0 = function() { // Environment: var0
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun81247: for (var _fun81247_ip = 0;;) switch (_fun81247_ip) {
                            case 0:
                                StartGenerator();
                                var5 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun81247_ip = 190;
                                    continue _fun81247
                                }
                            case 13:
                                var1 = undefined;
                                var3 = undefined;
                                var2 = undefined;
                                var7 = _closure3_slot1;
                                var6 = null;
                                if (!(var6 != var7)) {
                                    _fun81247_ip = 187;
                                    continue _fun81247
                                }
                            case 35:
                                if (var5) {
                                    _fun81247_ip = 44;
                                    continue _fun81247
                                }
                            case 38:
                                var6 = new Array(0);
                                _fun81247_ip = 59;
                                continue _fun81247;
                            case 44:
                                var8 = _closure3_slot0;
                                var7 = new Array(1);
                                var7[0] = var8;
                                var6 = var7;
                            case 59:
                                var3 = var6;
                                if (var5) {
                                    _fun81247_ip = 79;
                                    continue _fun81247
                                }
                            case 65:
                                var6 = _closure3_slot0;
                                var5 = new Array(1);
                                var5[0] = var6;
                                _fun81247_ip = 83;
                                continue _fun81247;
                            case 79:
                                var5 = new Array(0);
                            case 83:
                                var2 = var5;
                            case 86: // try_start_0
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var5 = 12;
                                var5 = var7[var5];
                                var6 = var6.bind(var1)(var5);
                                var5 = var6.updateTeenConsents;
                                var4 = _closure3_slot1;
                                var2 = var5.bind(var6)(var4, var3, var2);
                                SaveGenerator(address = 130);
                            case 128:
                                return var2;
                            case 130:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun81247_ip = 138;
                                    continue _fun81247
                                }
                            case 136: // try_end0
                                _fun81247_ip = 187;
                                continue _fun81247;
                            case 138:
                                return var2;
                            case 141: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 13;
                                var3 = var5[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.showFailedToast;
                                var2 = _closure1_slot6;
                                var2 = var2.GENERIC_ERROR;
                                var2 = var3.bind(var4)(var2);
                            case 187:
                                return var1;
                            case 190:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var1 = var0.bind(var1)();
            var0 = new Array(2);
            var0[0] = var5;
            var0[1] = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = var0.bind(var1)(var3);
        var0 = {};
        var0.hasConsented = var2;
        var0.updateConsent = var1;
        return var0;
    };
    var2.useParentalControlledConsent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 4559, 5878, 6472, 10332, 10334, 1311, 4244, 7188, 6470, 566, 4558, 5885, 2]);