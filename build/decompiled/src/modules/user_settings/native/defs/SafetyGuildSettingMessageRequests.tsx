// modules/user_settings/native/defs/SafetyGuildSettingMessageRequests.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: showMessageRequestRestrictionModal, environment: var8
        var0 = arg0;
        var _closure2_slot0 = var0;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 6;
        var1 = var7[var0];
        var0 = undefined;
        var3 = var6.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var10 = _closure1_slot0;
        var5 = 7;
        var8 = var7[var5];
        var8 = var10.bind(var0)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var7[var5];
        var8 = var10.bind(var0)(var8);
        var8 = var8.t;
        var8 = var8.yAfu1p;
        var8 = var9.bind(var11)(var8);
        var1.title = var8;
        var8 = var7[var5];
        var8 = var10.bind(var0)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var7[var5];
        var8 = var10.bind(var0)(var8);
        var8 = var8.t;
        var8 = var8.Ry2z74;
        var8 = var9.bind(var11)(var8);
        var1.body = var8;
        var8 = var7[var5];
        var8 = var10.bind(var0)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var7[var5];
        var8 = var10.bind(var0)(var8);
        var8 = var8.t;
        var8 = var8.p89ACt;
        var8 = var9.bind(var11)(var8);
        var1.confirmText = var8;
        var8 = var7[var5];
        var8 = var10.bind(var0)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var5 = var7[var5];
        var5 = var10.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5.gm1Vej;
        var5 = var8.bind(var9)(var5);
        var1.cancelText = var5;
        var5 = 8;
        var5 = var7[var5];
        var5 = var6.bind(var0)(var5);
        var5 = var5.Colors;
        var5 = var5.RED;
        var1.confirmColor = var5;
        var5 = function() { // Original name: onConfirm, environment: var4
            _fun88801: for (var _fun88801_ip = 0;;) switch (_fun88801_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var1 = var5[var2];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var7 = var1.MessageRequestRestrictedDefault;
                    var6 = var7.updateSetting;
                    var1 = _closure2_slot0;
                    var6 = var6.bind(var7)(var1);
                    var2 = var5[var2];
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.MessageRequestRestrictedGuildIds;
                    var2 = var3.updateSetting;
                    if (var1) {
                        _fun88801_ip = 79;
                        continue _fun88801
                    }
                case 73:
                    var1 = new Array(0);
                    _fun88801_ip = 93;
                    continue _fun88801;
                case 79:
                    var5 = _closure1_slot3;
                    var4 = var5.getGuildIds;
                    var1 = var4.bind(var5)();
                case 93:
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1.onConfirm = var5;
        var4 = function() { // Original name: onCancel, environment: var4
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.MessageRequestRestrictedDefault;
            var2 = var3.updateSetting;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1.onCancel = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot8 = var1;
    var9 = function() { // Original name: useIsDisabled, environment: var8
        _fun88803: for (var _fun88803_ip = 0;;) switch (_fun88803_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 13;
                var0 = var7[var0];
                var5 = undefined;
                var1 = var6.bind(var5)(var0);
                var0 = var1.useDefaultGuildsRestricted;
                var2 = var0.bind(var1)();
                var0 = _closure1_slot5;
                var0 = var0.bind(var5)();
                var4 = var0.selectedGuildId;
                var0 = 5;
                var0 = var7[var0];
                var0 = var6.bind(var5)(var0);
                var1 = var0.RestrictedGuildIds;
                var0 = var1.useSetting;
                var1 = var0.bind(var1)();
                var0 = var1.includes;
                var1 = var0.bind(var1)(var4);
                var0 = 14;
                var0 = var7[var0];
                var5 = var6.bind(var5)(var0);
                var0 = var5.useIsParentallyControlled;
                var0 = var0.bind(var5)();
                var5 = _closure1_slot7;
                var5 = var4 !== var5;
                if (var5) {
                    _fun88803_ip = 123;
                    continue _fun88803
                }
            case 120:
                var5 = !var0;
            case 123:
                var0 = !var5;
                if (!var5) {
                    _fun88803_ip = 143;
                    continue _fun88803
                }
            case 129:
                var3 = _closure1_slot7;
                if (!(var4 === var3)) {
                    _fun88803_ip = 140;
                    continue _fun88803
                }
            case 137:
                var1 = var2;
            case 140:
                var0 = var1;
            case 143:
                return var0;
        }
    };
    var _closure1_slot9 = var9;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.getSelectedGuildId;
    var _closure1_slot4 = var4;
    var3 = var3.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var10 = var3.MobileSetting;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createToggle;
    var3 = {};
    var11 = function() { // Original name: title, environment: var8
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 7;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["3o2ojh"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.title = var11;
    var11 = function() { // Original name: useDescription, environment: var8
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 7;
        var2 = var8[var0];
        var7 = undefined;
        var2 = var1.bind(var7)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var8[var0];
        var0 = var1.bind(var7)(var0);
        var0 = var0.t;
        var1 = var0.wkm9a3;
        var0 = {};
        var6 = _closure1_slot1;
        var5 = 16;
        var5 = var8[var5];
        var6 = var6.bind(var7)(var5);
        var5 = var6.getArticleURL;
        var4 = _closure1_slot6;
        var4 = var4.MESSAGE_REQUESTS;
        var4 = var5.bind(var6)(var4);
        var0.helpdeskArticle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.useDescription = var11;
    var10 = var10.CONTENT_AND_SOCIAL_DISCORD;
    var3.parent = var10;
    var10 = function() { // Original name: useValue, environment: var8
        _fun88806: for (var _fun88806_ip = 0;;) switch (_fun88806_ip) {
            case 0:
                var0 = _closure1_slot5;
                var6 = undefined;
                var0 = var0.bind(var6)();
                var4 = var0.selectedGuildId;
                var0 = _closure1_slot9;
                var0 = var0.bind(var6)();
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var2 = var7[var1];
                var2 = var5.bind(var6)(var2);
                var8 = var2.MessageRequestRestrictedDefault;
                var2 = var8.useSetting;
                var2 = var2.bind(var8)();
                var2 = !var2;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var5 = var1.MessageRequestRestrictedGuildIds;
                var1 = var5.useSetting;
                var5 = var1.bind(var5)();
                var1 = var5.includes;
                var1 = var1.bind(var5)(var4);
                var1 = !var1;
                var0 = !var0;
                if (!var0) {
                    _fun88806_ip = 124;
                    continue _fun88806
                }
            case 110:
                var3 = _closure1_slot7;
                if (!(var4 === var3)) {
                    _fun88806_ip = 121;
                    continue _fun88806
                }
            case 118:
                var1 = var2;
            case 121:
                var0 = var1;
            case 124:
                return var0;
        }
    };
    var3.useValue = var10;
    var3.useIsDisabled = var9;
    var8 = function(arg0) { // Original name: onAllowMessageRequestsFromServerMembersValueChange, environment: var8
        _fun88807: for (var _fun88807_ip = 0;;) switch (_fun88807_ip) {
            case 0:
                var0 = arg0;
                if (var0) {
                    _fun88807_ip = 115;
                    continue _fun88807
                }
            case 6:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var1 = var2.shouldAgeVerifyForDMDefaultOff;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun88807_ip = 115;
                    continue _fun88807
                }
            case 44:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var3 = var2.bind(var6)(var1);
                var2 = var3.showAgeVerificationGetStartedModal;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = 11;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.AgeVerificationModalEntryPoint;
                var4 = var4.MESSAGE_REQUESTS_SETTINGS;
                var1.entryPoint = var4;
                var1 = var2.bind(var3)(var1);
                _fun88807_ip = 260;
                continue _fun88807;
            case 115:
                var3 = _closure1_slot4;
                var2 = undefined;
                var4 = var3.bind(var2)();
                var3 = _closure1_slot7;
                if (!(var4 !== var3)) {
                    _fun88807_ip = 248;
                    continue _fun88807
                }
            case 136:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 12;
                var3 = var6[var3];
                var5 = var5.bind(var2)(var3);
                var3 = var5.getSanitizedMessageRequestRestrictedGuilds;
                var7 = var3.bind(var5)();
                if (var0) {
                    _fun88807_ip = 181;
                    continue _fun88807
                }
            case 169:
                var3 = var7.add;
                var3 = var3.bind(var7)(var4);
                _fun88807_ip = 191;
                continue _fun88807;
            case 181:
                var3 = var7.delete;
                var3 = var3.bind(var7)(var4);
            case 191:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var3 = var4.bind(var2)(var3);
                var5 = var3.MessageRequestRestrictedGuildIds;
                var4 = var5.updateSetting;
                var3 = global;
                var6 = var3.Array;
                var3 = var6.from;
                var3 = var3.bind(var6)(var7);
                var3 = var4.bind(var5)(var3);
                _fun88807_ip = 260;
                continue _fun88807;
            case 248:
                var1 = _closure1_slot8;
                var0 = !var0;
                var0 = var1.bind(var2)(var0);
            case 260:
                var0 = undefined;
                return var0;
        }
    };
    var3.onValueChange = var8;
    var3 = var4.bind(var7)(var3);
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/SafetyGuildSettingMessageRequests.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.showMessageRequestRestrictionModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 11469, 6965, 660, 8940, 1348, 3956, 1234, 3891, 11479, 5890, 4512, 7185, 11476, 10325, 8939, 1675, 2]);