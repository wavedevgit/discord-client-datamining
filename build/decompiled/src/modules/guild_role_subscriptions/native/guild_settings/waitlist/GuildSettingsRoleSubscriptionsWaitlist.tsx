// modules/guild_role_subscriptions/native/guild_settings/waitlist/GuildSettingsRoleSubscriptionsWaitlist.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildSettingsSections;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var9 = 24;
    var8 = {
        'flex': 1,
        'padding': 24
    };
    var3.contentContainer = var8;
    var8 = {
        'resizeMode': 'cover',
        'width': '100%'
    };
    var3.heroImage = var8;
    var8 = {};
    var10 = 8;
    var8.marginTop = var10;
    var3.subtitle = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.actionableNotice = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/waitlist/GuildSettingsRoleSubscriptionsWaitlist.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116695: for (var _fun116695_ip = 0;;) switch (_fun116695_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guild;
                var19 = var0.config;
                var _closure2_slot0 = var19;
                var0 = _closure1_slot9;
                var4 = undefined;
                var20 = var0.bind(var4)();
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var3 = var7.bind(var4)(var0);
                var0 = var3.useNavigation;
                var11 = var0.bind(var3)();
                var _closure2_slot1 = var11;
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var8[var0];
                var5 = var3.bind(var4)(var0);
                var0 = var6.id;
                var5 = var5.bind(var4)(var0);
                var0 = var5.isLoading;
                var15 = var5.creatorMonetizationOnboardingMarketing;
                var10 = _closure1_slot3;
                var9 = var10.useCallback;
                var5 = new Array(2);
                var5[0] = var19;
                var5[1] = var11;
                var2 = function() { // Environment: var2
                    _fun116696: for (var _fun116696_ip = 0;;) switch (_fun116696_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var4 = var0.visibility;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 7;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.GuildRoleSubscriptionSettingsVisibility;
                            var3 = var3.NEEDS_COMMUNITY;
                            if (!(var4 !== var3)) {
                                _fun116696_ip = 70;
                                continue _fun116696
                            }
                        case 54:
                            var4 = _closure2_slot0;
                            var3 = var4.onCtaClicked;
                            var3 = var3.bind(var4)();
                            _fun116696_ip = 94;
                            continue _fun116696;
                        case 70:
                            var3 = _closure2_slot1;
                            var2 = var3.push;
                            var1 = _closure1_slot6;
                            var1 = var1.COMMUNITY;
                            var1 = var2.bind(var3)(var1);
                        case 94:
                            return var0;
                    }
                };
                var18 = var9.bind(var10)(var2, var5);
                var2 = 8;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var5 = 9;
                var9 = var8[var5];
                var9 = var7.bind(var4)(var9);
                var9 = var9.ImpressionTypes;
                var9 = var9.PANE;
                var2.type = var9;
                var5 = var8[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.ImpressionNames;
                var5 = var5.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING;
                var2.name = var5;
                var5 = {};
                var6 = var6.id;
                var5.guild_id = var6;
                var2.properties = var5;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot7;
                if (var0) {
                    _fun116695_ip = 723;
                    continue _fun116695
                }
            case 236:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 11;
                var0 = var16[var0];
                var0 = var14.bind(var4)(var0);
                var2 = var0.SafeAreaPaddingView;
                var0 = {};
                var5 = true;
                var0.bottom = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = _closure1_slot8;
                var8 = _closure1_slot4;
                var7 = {};
                var10 = var20.container;
                var7.style = var10;
                var17 = _closure1_slot1;
                var10 = 12;
                var10 = var16[var10];
                var11 = var17.bind(var4)(var10);
                var10 = {};
                var12 = 13;
                var12 = var16[var12];
                var12 = var17.bind(var4)(var12);
                var10.source = var12;
                var12 = 'scale';
                var10.resizeMethod = var12;
                var12 = var20.heroImage;
                var10.style = var12;
                var11 = var3.bind(var4)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var12 = var20.contentContainer;
                var11.style = var12;
                var13 = 14;
                var12 = var16[var13];
                var12 = var14.bind(var4)(var12);
                var21 = var12.Text;
                var12 = {
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var22 = 15;
                var23 = var16[var22];
                var23 = var14.bind(var4)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var16[var22];
                var23 = var14.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.QYqDQ0;
                var23 = var24.bind(var25)(var23);
                var12.children = var23;
                var21 = var3.bind(var4)(var21, var12);
                var12 = new Array(4);
                var12[0] = var21;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var21 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var23 = var20.subtitle;
                var13.style = var23;
                var23 = var16[var22];
                var23 = var14.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var16[var22];
                var22 = var14.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22["41wkMc"];
                var22 = var23.bind(var24)(var22);
                var13.children = var22;
                var13 = var3.bind(var4)(var21, var13);
                var12[1] = var13;
                var13 = 16;
                var13 = var16[var13];
                var17 = var17.bind(var4)(var13);
                var13 = {};
                var20 = var20.actionableNotice;
                var13.style = var20;
                var20 = var19.ctaLabel;
                var13.ctaLabel = var20;
                var20 = var19.ctaClickable;
                var20 = !var20;
                var13.disabled = var20;
                var19 = var19.noticeText;
                var13.notice = var19;
                var13.onClick = var18;
                var13 = var3.bind(var4)(var17, var13);
                var12[2] = var13;
                var13 = 17;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.MarketingSections;
                var13 = {};
                var13.onboardingMarketing = var15;
                var13 = var3.bind(var4)(var14, var13);
                var12[3] = var13;
                var11.children = var12;
                var11 = var9.bind(var4)(var8, var11);
                var10[1] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun116695_ip = 751;
                continue _fun116695;
            case 723:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 751:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 1469, 14905, 5636, 5216, 481, 14869, 4736, 4704, 14906, 3941, 1234, 14872, 14870, 2]);