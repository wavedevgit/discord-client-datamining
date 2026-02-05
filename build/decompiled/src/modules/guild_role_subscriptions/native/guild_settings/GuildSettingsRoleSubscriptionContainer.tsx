// modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun116821: for (var _fun116821_ip = 0;;) switch (_fun116821_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.guildId;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot9;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var7 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var3.bind(var5)(var2, var0);
                var0 = null;
                var2 = var0 == var7;
                var3 = undefined;
                if (var2) {
                    _fun116821_ip = 114;
                    continue _fun116821
                }
            case 88:
                var8 = var7.features;
                var5 = var8.has;
                var2 = _closure1_slot6;
                var2 = var2.CREATOR_MONETIZABLE_RESTRICTED;
                var3 = var5.bind(var8)(var2);
            case 114:
                var2 = var0 == var7;
                var5 = undefined;
                if (var2) {
                    _fun116821_ip = 149;
                    continue _fun116821
                }
            case 123:
                var9 = var7.features;
                var8 = var9.has;
                var2 = _closure1_slot6;
                var2 = var2.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING;
                var5 = var8.bind(var9)(var2);
            case 149:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 7;
                var2 = var9[var2];
                var2 = var8.bind(var4)(var2);
                var7 = var2.bind(var4)(var7);
                var10 = var7.resubmittingEnableRequest;
                var9 = var7.resubmissionError;
                var11 = var7.createEnableRequest;
                var2 = var7.resubmittedRequest;
                var8 = var7.requestRejectedNoticeText;
                var12 = var7.reapplyNoticeText;
                if (!(var0 == var9)) {
                    _fun116821_ip = 681;
                    continue _fun116821
                }
            case 217:
                if (!(var0 == var8)) {
                    _fun116821_ip = 642;
                    continue _fun116821
                }
            case 224:
                if (var2) {
                    _fun116821_ip = 550;
                    continue _fun116821
                }
            case 230:
                if (!(var0 == var12)) {
                    _fun116821_ip = 442;
                    continue _fun116821
                }
            case 237:
                var2 = true;
                if (!(var2 !== var5)) {
                    _fun116821_ip = 347;
                    continue _fun116821
                }
            case 243:
                var5 = null;
                if (!(var2 === var3)) {
                    _fun116821_ip = 727;
                    continue _fun116821
                }
            case 252:
                var7 = _closure1_slot7;
                var3 = _closure1_slot1;
                var17 = _closure1_slot2;
                var2 = 9;
                var2 = var17[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var16 = _closure1_slot0;
                var13 = 10;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.rxI9sl;
                var13 = var14.bind(var15)(var13);
                var2.notice = var13;
                var5 = var7.bind(var4)(var3, var2);
                _fun116821_ip = 727;
                continue _fun116821;
            case 347:
                var7 = _closure1_slot7;
                var3 = _closure1_slot1;
                var17 = _closure1_slot2;
                var2 = 9;
                var2 = var17[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var16 = _closure1_slot0;
                var13 = 10;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.e2g9sW;
                var13 = var14.bind(var15)(var13);
                var2.notice = var13;
                var5 = var7.bind(var4)(var3, var2);
                _fun116821_ip = 727;
                continue _fun116821;
            case 442:
                var7 = _closure1_slot7;
                var3 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 9;
                var2 = var16[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.notice = var12;
                var15 = _closure1_slot0;
                var12 = 10;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["YKw/NQ"];
                var12 = var13.bind(var14)(var12);
                var2.ctaLabel = var12;
                var2.onClick = var11;
                var2.submitting = var10;
                var5 = var7.bind(var4)(var3, var2);
                _fun116821_ip = 727;
                continue _fun116821;
            case 550:
                var7 = _closure1_slot7;
                var3 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 9;
                var2 = var14[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var13 = _closure1_slot0;
                var10 = 10;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.MyJpJT;
                var10 = var11.bind(var12)(var10);
                var2.notice = var10;
                var5 = var7.bind(var4)(var3, var2);
                _fun116821_ip = 727;
                continue _fun116821;
            case 642:
                var7 = _closure1_slot7;
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 9;
                var2 = var10[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.notice = var8;
                var5 = var7.bind(var4)(var3, var2);
                _fun116821_ip = 727;
                continue _fun116821;
            case 681:
                var7 = _closure1_slot7;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var8 = var9.getAnyErrorMessage;
                var8 = var8.bind(var9)();
                var2.children = var8;
                var5 = var7.bind(var4)(var3, var2);
            case 727:
                var2 = var0 != var5;
                var0 = null;
                if (!var2) {
                    _fun116821_ip = 766;
                    continue _fun116821
                }
            case 736:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var6.warningBlockContainer;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 766:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun116823: for (var _fun116823_ip = 0;;) switch (_fun116823_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guildId;
                var6 = var0.children;
                var0 = _closure1_slot9;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useGroupListingsFetchContext;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun116823_ip = 107;
                    continue _fun116823
                }
            case 59:
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var3 = var7.spinner;
                var0.style = var3;
                var10 = _closure1_slot7;
                var8 = _closure1_slot3;
                var3 = {};
                var3 = var10.bind(var4)(var8, var3);
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun116823_ip = 168;
                continue _fun116823;
            case 107:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var7.container;
                var1.style = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot10;
                var5 = {};
                var5.guildId = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 168:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot3 = var7;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {
        'marginHorizontal': 16,
        'marginTop': 16
    };
    var3.warningBlockContainer = var8;
    var8 = {};
    var9 = 12;
    var8.marginTop = var9;
    var3.spinner = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var10 = arg0;
        var3 = _closure1_slot7;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 11;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.GroupListingsFetchContextProvider;
        var0 = {};
        var4 = var10.guildId;
        var0.guildId = var4;
        var4 = true;
        var0.refetchOnMount = var4;
        var6 = _closure1_slot7;
        var4 = 12;
        var4 = var8[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.RoleSubscriptionSettingsDisabledContextProvider;
        var4 = {};
        var8 = var10.guildId;
        var4.guildId = var8;
        var9 = _closure1_slot7;
        var8 = _closure1_slot11;
        var7 = {};
        var12 = var7;
        var11 = var10;
        var10 = copyDataProperties(var12, var11);
        var7 = var9.bind(var2)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 660, 33, 1297, 566, 14899, 14014, 14872, 1234, 10827, 14913, 2]);