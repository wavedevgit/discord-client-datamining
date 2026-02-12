// modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var7 = function() {
        var0 = _closure1_slot7;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var6 = _closure1_slot8;
        var4 = new Array(3);
        var4[0] = var6;
        var8 = _closure1_slot4;
        var7 = _closure1_slot3;
        var6 = {};
        var9 = var9.separator;
        var6.style = var9;
        var6 = var8.bind(var3)(var7, var6);
        var4[1] = var6;
        var5 = _closure1_slot9;
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0 = function arg0() {
        _fun117788: for (var _fun117788_ip = 0;;) switch (_fun117788_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.title;
                var13 = var0.description;
                var0 = _closure1_slot7;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var14.benefitRowContainer;
                var0.style = var4;
                var5 = _closure1_slot10;
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var14.benefitTextContainer;
                var5.style = var8;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                var11 = var9 != var13;
                if (!var11) {
                    _fun117788_ip = 160;
                    continue _fun117788
                }
            case 95:
                var12 = _closure1_slot4;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 7;
                var10 = var15[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'interactive-text-default'
                };
                var14 = var14.benefitDescription;
                var10.style = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 160:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.sectionTitle;
        var5 = var0.children;
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var8 = _closure1_slot4;
        var7 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 8;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var7.bind(var0)(var4);
        var7 = var4.SectionTitle;
        var4 = {};
        var4.children = var9;
        var7 = var8.bind(var0)(var7, var4);
        var4 = new Array(3);
        var4[0] = var7;
        var6 = _closure1_slot11;
        var4[1] = var6;
        var4[2] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.View;
    var _closure1_slot3 = var11;
    var15 = 2;
    var3 = var5[var15];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var9 = var3.Fragment;
    var _closure1_slot5 = var9;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var14 = var4.bind(var0)(var3);
    var10 = var14.createStyles;
    var3 = {};
    var9 = {
        'backgroundColor': null,
        'flex': 1,
        'padding': 16
    };
    var13 = 4;
    var12 = var5[var13];
    var12 = var8.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var3.container = var9;
    var9 = {};
    var12 = var5[var13];
    var12 = var8.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var12;
    var3.subscriptionPlanTextStyle = var9;
    var9 = {
        'color': null,
        'paddingTop': 16,
        'paddingBottom': 24
    };
    var12 = var5[var13];
    var12 = var8.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var9.color = var12;
    var12 = 24;
    var3.descriptionPlanTextStyle = var9;
    var9 = {};
    var9.paddingTop = var12;
    var3.content = var9;
    var9 = {
        'borderBottomWidth': 1,
        'marginLeft': 4294967280,
        'marginRight': 4294967280
    };
    var16 = var5[var13];
    var16 = var8.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_BACKGROUND_HOVER;
    var9.borderColor = var16;
    var3.separator = var9;
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-start'
    };
    var3.benefitRowContainer = var9;
    var9 = {
        'flex': 1,
        'justifyContent': 'center',
        'marginLeft': 16
    };
    var3.benefitTextContainer = var9;
    var9 = {};
    var9.marginTop = var15;
    var3.benefitDescription = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.channelTitle = var9;
    var15 = {};
    var9 = 8;
    var15.marginEnd = var9;
    var3.channelIcon = var15;
    var3 = var10.bind(var14)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var10 = var5[var3];
    var14 = var8.bind(var0)(var10);
    var10 = {};
    var10.size = var12;
    var10 = var6.bind(var0)(var14, var10);
    var _closure1_slot8 = var10;
    var10 = var5[var3];
    var14 = var8.bind(var0)(var10);
    var10 = {};
    var10.size = var12;
    var10 = var6.bind(var0)(var14, var10);
    var _closure1_slot9 = var10;
    var10 = {};
    var14 = 6;
    var14 = var5[var14];
    var15 = var8.bind(var0)(var14);
    var14 = {};
    var14 = var6.bind(var0)(var15, var14);
    var10.children = var14;
    var10 = var6.bind(var0)(var11, var10);
    var _closure1_slot10 = var10;
    var10 = var5[var3];
    var11 = var8.bind(var0)(var10);
    var10 = {};
    var14 = 14;
    var10.size = var14;
    var10 = var6.bind(var0)(var11, var10);
    var _closure1_slot11 = var10;
    var10 = var5[var3];
    var11 = var8.bind(var0)(var10);
    var10 = {};
    var10.size = var13;
    var10 = var6.bind(var0)(var11, var10);
    var _closure1_slot12 = var10;
    var10 = var5[var3];
    var11 = var8.bind(var0)(var10);
    var10 = {};
    var10.size = var12;
    var10 = var6.bind(var0)(var11, var10);
    var _closure1_slot13 = var10;
    var3 = var5[var3];
    var8 = var8.bind(var0)(var3);
    var3 = {};
    var3.size = var9;
    var3 = var6.bind(var0)(var8, var3);
    var _closure1_slot14 = var3;
    var3 = {};
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot15 = var3;
    var3 = {};
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot16 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var14 = var0.template;
        var15 = var0.guildId;
        var12 = var0.handleSelectTemplateInPreview;
        var0 = _closure1_slot7;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var _closure2_slot0 = var11;
        var1 = _closure1_slot1;
        var21 = _closure1_slot2;
        var0 = 9;
        var0 = var21[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var13 = var0.bottom;
        var1 = var14.listings;
        var0 = 0;
        var0 = var1[var0];
        var24 = var0.image;
        var23 = var0.name;
        var28 = var0.channels;
        var20 = var0.additional_perks;
        var25 = var0.role_color;
        var2 = _closure1_slot4;
        var16 = _closure1_slot0;
        var0 = 10;
        var0 = var21[var0];
        var0 = var16.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {
            'scrollable': true,
            'startExpanded': true
        };
        var10 = true;
        var6 = _closure1_slot6;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var11.container;
        var4.style = var7;
        var9 = _closure1_slot4;
        var7 = 11;
        var7 = var21[var7];
        var7 = var16.bind(var3)(var7);
        var8 = var7.GuildRoleSubscriptionTierTemplateBasicInfo;
        var7 = {};
        var7.template = var14;
        var7.handleSelectTemplateInPreview = var12;
        var12 = var11.subscriptionPlanTextStyle;
        var7.subscriptionPlanTextStyle = var12;
        var12 = var11.descriptionPlanTextStyle;
        var7.descriptionTextStyle = var12;
        var7.closeActionSheet = var10;
        var8 = var9.bind(var3)(var8, var7);
        var7 = new Array(3);
        var7[0] = var8;
        var10 = _closure1_slot4;
        var9 = _closure1_slot3;
        var8 = {};
        var12 = var11.separator;
        var8.style = var12;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var10 = _closure1_slot6;
        var8 = 12;
        var8 = var21[var8];
        var8 = var16.bind(var3)(var8);
        var9 = var8.BottomSheetScrollView;
        var8 = {};
        var12 = false;
        var8.scrollsToTop = var12;
        var11 = var11.content;
        var8.style = var11;
        var11 = {};
        var12 = 32;
        var12 = var12 + var13;
        var11.paddingBottom = var12;
        var8.contentContainerStyle = var11;
        var14 = _closure1_slot4;
        var12 = 7;
        var11 = var21[var12];
        var11 = var16.bind(var3)(var11);
        var13 = var11.Text;
        var11 = {
            'variant': 'text-sm/bold',
            'color': 'text-default'
        };
        var19 = {};
        var26 = 'uppercase';
        var19.textTransform = var26;
        var11.style = var19;
        var22 = 13;
        var19 = var21[var22];
        var19 = var16.bind(var3)(var19);
        var29 = var19.intl;
        var27 = var29.string;
        var19 = var21[var22];
        var19 = var16.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.CjC5XZ;
        var19 = var27.bind(var29)(var19);
        var11.children = var19;
        var13 = var14.bind(var3)(var13, var11);
        var11 = new Array(11);
        var11[0] = var13;
        var13 = _closure1_slot12;
        var11[1] = var13;
        var19 = _closure1_slot4;
        var13 = var21[var12];
        var13 = var16.bind(var3)(var13);
        var14 = var13.Text;
        var13 = {
            'variant': 'text-sm/normal',
            'color': 'text-muted'
        };
        var27 = var21[var22];
        var27 = var16.bind(var3)(var27);
        var30 = var27.intl;
        var29 = var30.string;
        var27 = var21[var22];
        var27 = var16.bind(var3)(var27);
        var27 = var27.t;
        var27 = var27.bCb3c8;
        var27 = var29.bind(var30)(var27);
        var13.children = var27;
        var13 = var19.bind(var3)(var14, var13);
        var11[2] = var13;
        var13 = _closure1_slot13;
        var11[3] = var13;
        var14 = _closure1_slot4;
        var12 = var21[var12];
        var12 = var16.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-xs/bold',
            'color': 'text-default'
        };
        var19 = {};
        var19.textTransform = var26;
        var12.style = var19;
        var19 = var21[var22];
        var19 = var16.bind(var3)(var19);
        var27 = var19.intl;
        var26 = var27.string;
        var19 = var21[var22];
        var19 = var16.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.ZKyfEo;
        var19 = var26.bind(var27)(var19);
        var12.children = var19;
        var12 = var14.bind(var3)(var13, var12);
        var11[4] = var12;
        var12 = _closure1_slot14;
        var11[5] = var12;
        var14 = _closure1_slot4;
        var19 = 14;
        var12 = var21[var19];
        var12 = var16.bind(var3)(var12);
        var13 = var12.GuildRoleSubscriptionRolePreview;
        var12 = {};
        var12.roleColor = var25;
        var12.roleImage = var24;
        var12.roleName = var23;
        var12.guildId = var15;
        var12 = var14.bind(var3)(var13, var12);
        var11[6] = var12;
        var12 = _closure1_slot15;
        var11[7] = var12;
        var13 = _closure1_slot4;
        var14 = _closure1_slot18;
        var12 = {};
        var15 = var21[var22];
        var15 = var16.bind(var3)(var15);
        var24 = var15.intl;
        var23 = var24.string;
        var15 = var21[var22];
        var15 = var16.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.Ofvpfs;
        var15 = var23.bind(var24)(var15);
        var12.sectionTitle = var15;
        var25 = _closure1_slot4;
        var15 = 15;
        var23 = var21[var15];
        var23 = var16.bind(var3)(var23);
        var24 = var23.GappedList;
        var23 = {};
        var23.gap = var19;
        var27 = var28.map;
        var26 = function(arg0) { // Environment: var18
            var0 = arg0;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 16;
            var2 = var10[var2];
            var4 = undefined;
            var5 = var8.bind(var4)(var2);
            var3 = var5.getPrivateChannelIconComponent;
            var2 = var0.type;
            var9 = var3.bind(var5)(var2);
            var5 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var11 = _closure2_slot0;
            var6 = var11.channelTitle;
            var2.style = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var11 = var11.channelIcon;
            var6.style = var11;
            var11 = 'xs';
            var6.size = var11;
            var7 = var7.bind(var4)(var9, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot4;
            var7 = 7;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {
                'variant': 'text-md/medium',
                'color': 'mobile-text-heading-primary'
            };
            var10 = var0.name;
            var7.children = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var2.children = var6;
            var5 = var5.bind(var4)(var3, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot17;
            var1 = {};
            var1.title = var5;
            var5 = var0.description;
            var1.description = var5;
            var0 = var0.id;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var26 = var27.bind(var28)(var26);
        var23.children = var26;
        var23 = var25.bind(var3)(var24, var23);
        var12.children = var23;
        var12 = var13.bind(var3)(var14, var12);
        var11[8] = var12;
        var12 = _closure1_slot16;
        var11[9] = var12;
        var13 = _closure1_slot4;
        var12 = {};
        var23 = var21[var22];
        var23 = var16.bind(var3)(var23);
        var24 = var23.intl;
        var23 = var24.string;
        var22 = var21[var22];
        var22 = var16.bind(var3)(var22);
        var22 = var22.t;
        var22 = var22.w7KA8R;
        var22 = var23.bind(var24)(var22);
        var12.sectionTitle = var22;
        var17 = _closure1_slot4;
        var15 = var21[var15];
        var15 = var16.bind(var3)(var15);
        var16 = var15.GappedList;
        var15 = {};
        var15.gap = var19;
        var19 = var20.map;
        var18 = function(arg0, arg1) { // Environment: var18
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 7;
            var0 = var4[var0];
            var4 = undefined;
            var0 = var2.bind(var4)(var0);
            var2 = var0.Text;
            var0 = {
                'variant': 'text-md/medium',
                'color': 'mobile-text-heading-primary'
            };
            var5 = arg0;
            var5 = var5.name;
            var0.children = var5;
            var0 = var3.bind(var4)(var2, var0);
            var3 = _closure1_slot4;
            var2 = _closure1_slot17;
            var1 = {};
            var1.title = var0;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var18 = var19.bind(var20)(var18);
        var15.children = var18;
        var15 = var17.bind(var3)(var16, var15);
        var12.children = var15;
        var12 = var13.bind(var3)(var14, var12);
        var11[10] = var12;
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8880, 13333, 3938, 10688, 1568, 4907, 15022, 4909, 1234, 15023, 9356, 15024, 2]);