// modules/user_settings/native/defs/SafetyGuildSettingDirectMessages.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.getSelectedGuildId;
    var _closure1_slot4 = var3;
    var1 = var1.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot6 = var1;
    var1 = 12;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.RAQUSN;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var9 = function() {
        _fun88732: for (var _fun88732_ip = 0;;) switch (_fun88732_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.useAllowFriendsFromMutualGuildsOnly;
                var0 = var0.bind(var2)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun88732_ip = 95;
                    continue _fun88732
                }
            case 82:
                var0 = var1.RAQUSN;
                var0 = var2.bind(var3)(var0);
                _fun88732_ip = 108;
                continue _fun88732;
            case 95:
                var1 = var1.PMsfcH;
                var0 = var2.bind(var3)(var1);
            case 108:
                return var0;
        }
    };
    var1.useTitle = var9;
    var9 = function() {
        _fun88733: for (var _fun88733_ip = 0;;) switch (_fun88733_ip) {
            case 0:
                var0 = _closure1_slot5;
                var6 = undefined;
                var0 = var0.bind(var6)();
                var3 = var0.selectedGuildId;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var1 = var1.bind(var6)(var0);
                var0 = var1.useAllowFriendsFromMutualGuildsOnly;
                var1 = var0.bind(var1)();
                var0 = _closure1_slot6;
                if (!(var3 !== var0)) {
                    _fun88733_ip = 134;
                    continue _fun88733
                }
            case 57:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var4 = var7[var0];
                var4 = var3.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var0 = var7[var0];
                var0 = var3.bind(var6)(var0);
                var3 = var0.t;
                if (var1) {
                    _fun88733_ip = 119;
                    continue _fun88733
                }
            case 104:
                var0 = var3.G7c3Xo;
                var0 = var4.bind(var5)(var0);
                _fun88733_ip = 132;
                continue _fun88733;
            case 119:
                var3 = var3.F9WY3f;
                var0 = var4.bind(var5)(var3);
            case 132:
                _fun88733_ip = 210;
                continue _fun88733;
            case 134:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun88733_ip = 194;
                    continue _fun88733
                }
            case 181:
                var1 = var2.wbYDfT;
                var1 = var3.bind(var4)(var1);
                _fun88733_ip = 207;
                continue _fun88733;
            case 194:
                var2 = var2.XXGmuB;
                var1 = var3.bind(var4)(var2);
            case 207:
                var0 = var1;
            case 210:
                return var0;
        }
    };
    var1.useDescription = var9;
    var8 = var8.CONTENT_AND_SOCIAL_DISCORD;
    var1.parent = var8;
    var8 = function() {
        _fun88734: for (var _fun88734_ip = 0;;) switch (_fun88734_ip) {
            case 0:
                var0 = _closure1_slot5;
                var5 = undefined;
                var0 = var0.bind(var5)();
                var3 = var0.selectedGuildId;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 5;
                var0 = var6[var0];
                var1 = var4.bind(var5)(var0);
                var0 = var1.useDefaultGuildsRestricted;
                var0 = var0.bind(var1)();
                var1 = !var0;
                var0 = 6;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var4 = var0.RestrictedGuildIds;
                var0 = var4.useSetting;
                var4 = var0.bind(var4)();
                var0 = var4.includes;
                var0 = var0.bind(var4)(var3);
                var0 = !var0;
                var2 = _closure1_slot6;
                if (!(var3 === var2)) {
                    _fun88734_ip = 104;
                    continue _fun88734
                }
            case 101:
                var0 = var1;
            case 104:
                return var0;
        }
    };
    var1.useValue = var8;
    var8 = function arg0() {
        _fun88735: for (var _fun88735_ip = 0;;) switch (_fun88735_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot4;
                var0 = undefined;
                var4 = var3.bind(var0)();
                var3 = _closure1_slot6;
                if (!(var4 !== var3)) {
                    _fun88735_ip = 136;
                    continue _fun88735
                }
            case 24:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.getSanitizedRestrictedGuilds;
                var6 = var3.bind(var5)();
                if (var1) {
                    _fun88735_ip = 69;
                    continue _fun88735
                }
            case 57:
                var3 = var6.add;
                var3 = var3.bind(var6)(var4);
                _fun88735_ip = 79;
                continue _fun88735;
            case 69:
                var3 = var6.delete;
                var3 = var3.bind(var6)(var4);
            case 79:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.RestrictedGuildIds;
                var3 = var4.updateSetting;
                var2 = global;
                var5 = var2.Array;
                var2 = var5.from;
                var2 = var2.bind(var5)(var6);
                var2 = var3.bind(var4)(var2);
                _fun88735_ip = 153;
                continue _fun88735;
            case 136:
                var2 = !var1;
                var1 = function arg0() {
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 7;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var6.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var10 = _closure1_slot0;
                    var5 = 8;
                    var8 = var7[var5];
                    var8 = var10.bind(var0)(var8);
                    var11 = var8.intl;
                    var9 = var11.string;
                    var8 = var7[var5];
                    var8 = var10.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8.Hq4ApA;
                    var8 = var9.bind(var11)(var8);
                    var1.title = var8;
                    var8 = var7[var5];
                    var8 = var10.bind(var0)(var8);
                    var11 = var8.intl;
                    var9 = var11.string;
                    var8 = var7[var5];
                    var8 = var10.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8.qTCYun;
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
                    var5 = 9;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.Colors;
                    var5 = var5.RED;
                    var1.confirmColor = var5;
                    var5 = function() {
                        _fun88737: for (var _fun88737_ip = 0;;) switch (_fun88737_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 6;
                                var1 = var5[var2];
                                var0 = undefined;
                                var1 = var3.bind(var0)(var1);
                                var7 = var1.DefaultGuildsRestrictedV2;
                                var6 = var7.updateSetting;
                                var1 = _closure3_slot0;
                                var6 = var6.bind(var7)(var1);
                                var2 = var5[var2];
                                var2 = var3.bind(var0)(var2);
                                var3 = var2.RestrictedGuildIds;
                                var2 = var3.updateSetting;
                                if (var1) {
                                    _fun88737_ip = 79;
                                    continue _fun88737
                                }
                            case 73:
                                var1 = new Array(0);
                                _fun88737_ip = 93;
                                continue _fun88737;
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
                    var4 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var3 = var1.DefaultGuildsRestrictedV2;
                        var2 = var3.updateSetting;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1.onCancel = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var1.bind(var0)(var2);
            case 153:
                return var0;
        }
    };
    var1.onValueChange = var8;
    var7 = function() {
        _fun88739: for (var _fun88739_ip = 0;;) switch (_fun88739_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsParentallyControlled;
                var0 = var0.bind(var2)();
                var2 = _closure1_slot5;
                var2 = var2.bind(var3)();
                var2 = var2.selectedGuildId;
                if (!var0) {
                    _fun88739_ip = 60;
                    continue _fun88739
                }
            case 52:
                var1 = _closure1_slot6;
                var0 = var2 === var1;
            case 60:
                return var0;
        }
    };
    var1.useIsDisabled = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/SafetyGuildSettingDirectMessages.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 11503, 7000, 8978, 10412, 11510, 1348, 3994, 1234, 3928, 7220, 11511, 8977, 2]);