// modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var1;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun101219: for (var _fun101219_ip = 0;;) switch (_fun101219_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun101219_ip = 321;
                            continue _fun101219
                        }
                    case 10:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = 7;
                        var2 = var1[var4];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var2);
                        var2 = 6;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var5.bind(var3)(var2, var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun101219_ip = 318;
                            continue _fun101219
                        }
                    case 66:
                        var7 = var1.default;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = var2[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = 8;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address = 110);
                    case 108:
                        return var2;
                    case 110:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun101219_ip = 315;
                            continue _fun101219
                        }
                    case 119:
                        var5 = var2.default;
                        var6 = var7.acknowledgeTooltip;
                        var4 = _closure1_slot5;
                        var4 = var4.GUILD_TOOLTIP;
                        var4 = var6.bind(var7)(var4);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var6 = var6.bind(var3)(var4);
                        var4 = var6.isAtGuildCapAndNonPremium;
                        var4 = var4.bind(var6)();
                        if (var4) {
                            _fun101219_ip = 190;
                            continue _fun101219
                        }
                    case 178:
                        var4 = var5.openCreateGuildModal;
                        var4 = var4.bind(var5)();
                        _fun101219_ip = 312;
                        continue _fun101219;
                    case 190:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = 10;
                        var4 = var10[var4];
                        var6 = var9.bind(var3)(var4);
                        var5 = var6.handleShowUpsellAlert;
                        var4 = {};
                        var7 = _closure1_slot6;
                        var7 = var7.GUILD_CAP;
                        var4.initialUpsellKey = var7;
                        var7 = {};
                        var11 = _closure1_slot4;
                        var11 = var11.CREATE_JOIN_GUILD_MODAL;
                        var7.page = var11;
                        var4.analyticsLocation = var7;
                        var7 = 11;
                        var7 = var10[var7];
                        var7 = var9.bind(var3)(var7);
                        var9 = var7.NEW_GUILD_BUTTON;
                        var7 = new Array(1);
                        var7[0] = var9;
                        var4.analyticsLocations = var7;
                        var7 = {};
                        var8 = _closure1_slot7;
                        var8 = var8.GUILD_CAP_MODAL_UPSELL;
                        var7.type = var8;
                        var4.analyticsProperties = var7;
                        var4 = var5.bind(var6)(var4);
                    case 312:
                        return var3;
                    case 315:
                        return var2;
                    case 318:
                        return var1;
                    case 321:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var11 = 0;
    var4 = var6[var11];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var7 = var4.bind(var0)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.AnalyticsPages;
    var _closure1_slot4 = var8;
    var8 = var4.TooltipNames;
    var _closure1_slot5 = var8;
    var4 = var4.UpsellTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {};
    var10.marginTop = var11;
    var4.marginOverrides = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var3 = function() {
        var3 = _closure1_slot8;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 12;
        var0 = var9[var0];
        var2 = undefined;
        var1 = var6.bind(var2)(var0);
        var0 = {};
        var5 = 13;
        var5 = var9[var5];
        var5 = var6.bind(var2)(var5);
        var0.iconSource = var5;
        var5 = _closure1_slot10;
        var0.onPress = var5;
        var8 = _closure1_slot0;
        var5 = 14;
        var6 = var9[var5];
        var6 = var8.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.l5WIbf;
        var5 = var6.bind(var7)(var5);
        var0.accessibilityLabel = var5;
        var4 = _closure1_slot9;
        var4 = var4.marginOverrides;
        var0.style = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.handleCreateJoinGuildPress = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 660, 1623, 33, 8653, 1307, 10267, 10105, 7632, 5583, 13205, 13206, 1234, 2]);