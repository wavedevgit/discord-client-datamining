// modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun116814: for (var _fun116814_ip = 0;;) switch (_fun116814_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.emoji;
                var10 = var0.children;
                var12 = var0.contentStyle;
                var16 = var0.guildId;
                var7 = var0.isInteractive;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun116814_ip = 39;
                    continue _fun116814
                }
            case 37:
                var7 = true;
            case 39:
                var0 = _closure1_slot7;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var11.container;
                var0.style = var4;
                var8 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var9 = var11.emojiContainer;
                var4.style = var9;
                var14 = _closure1_slot5;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 5;
                var9 = var17[var9];
                var13 = var13.bind(var3)(var9);
                var9 = {};
                var9.guildId = var16;
                var9.id = var15;
                var9 = var14.bind(var3)(var13, var9);
                var4.children = var9;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var9 = _closure1_slot5;
                var8 = _closure1_slot3;
                var5 = {};
                var13 = var11.benefitColumn;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var5.style = var11;
                var5.children = var10;
                var5 = var9.bind(var3)(var8, var5);
                var4[1] = var5;
                var5 = true;
                var5 = var5 === var7;
                if (!var5) {
                    _fun116814_ip = 250;
                    continue _fun116814
                }
            case 202:
                var8 = _closure1_slot5;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 6;
                var6 = var11[var6];
                var7 = var10.bind(var3)(var6);
                var6 = {};
                var9 = 7;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var6.source = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 250:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun116815: for (var _fun116815_ip = 0;;) switch (_fun116815_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.benefit;
                var6 = var0.children;
                var7 = var0.guildId;
                var4 = var0.isInteractive;
                var1 = _closure1_slot7;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var1 = var2.description;
                var9 = null;
                var1 = var9 != var1;
                var5 = null;
                if (!var1) {
                    _fun116815_ip = 124;
                    continue _fun116815
                }
            case 54:
                var10 = _closure1_slot5;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 8;
                var1 = var12[var1];
                var1 = var8.bind(var3)(var1);
                var8 = var1.Text;
                var1 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-default'
                };
                var11 = var11.benefitDescription;
                var1.style = var11;
                var11 = var2.description;
                var1.children = var11;
                var5 = var10.bind(var3)(var8, var1);
            case 124:
                var8 = var2.emoji_id;
                if (!(var9 == var8)) {
                    _fun116815_ip = 194;
                    continue _fun116815
                }
            case 134:
                var1 = var2.emoji_name;
                var9 = var9 != var1;
                var1 = '';
                if (!var9) {
                    _fun116815_ip = 191;
                    continue _fun116815
                }
            case 151:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 9;
                var9 = var11[var9];
                var11 = var10.bind(var3)(var9);
                var10 = var11.convertSurrogateToName;
                var9 = var2.emoji_name;
                var2 = false;
                var1 = var10.bind(var11)(var9, var2);
            case 191:
                var8 = var1;
            case 194:
                var2 = _closure1_slot6;
                var1 = _closure1_slot8;
                var0 = {};
                var0.emoji = var8;
                var0.guildId = var7;
                var0.isInteractive = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun116816: for (var _fun116816_ip = 0;;) switch (_fun116816_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.benefit;
                var6 = var0.guildId;
                var5 = var0.isInteractive;
                var0 = _closure1_slot7;
                var4 = undefined;
                var16 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.useChannelWithTemplateFallback;
                var0 = var7.ref_id;
                var12 = var2.bind(var3)(var0);
                var0 = null;
                var2 = var0 != var12;
                var11 = null;
                if (!var2) {
                    _fun116816_ip = 112;
                    continue _fun116816
                }
            case 81:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 11;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getChannelIcon;
                var11 = var2.bind(var3)(var12);
            case 112:
                if (!(var0 != var12)) {
                    _fun116816_ip = 325;
                    continue _fun116816
                }
            case 119:
                var3 = _closure1_slot5;
                var2 = _closure1_slot9;
                var0 = {};
                var0.benefit = var7;
                var0.guildId = var6;
                var0.isInteractive = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var16.channelRow;
                var5.style = var8;
                var10 = _closure1_slot5;
                var15 = _closure1_slot1;
                var13 = _closure1_slot2;
                var14 = 6;
                var8 = var13[var14];
                var9 = var15.bind(var4)(var8);
                var8 = {};
                var16 = var16.channelIcon;
                var8.style = var16;
                var14 = var13[var14];
                var14 = var15.bind(var4)(var14);
                var14 = var14.Sizes;
                var14 = var14.CUSTOM;
                var8.size = var14;
                var8.source = var11;
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot5;
                var10 = _closure1_slot0;
                var9 = 8;
                var9 = var13[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var12.name;
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun116816_ip = 452;
                continue _fun116816;
            case 325:
                var3 = _closure1_slot5;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 8;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var5 = 12;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.bz1PZX;
                var8 = var6.bind(var7)(var5);
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var6 = '[';
                var5 = ']';
                var5 = var7.bind(var6)(var8, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 452:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.benefit;
        var5 = var0.guildId;
        var4 = var0.isInteractive;
        var3 = _closure1_slot5;
        var2 = _closure1_slot9;
        var1 = {};
        var1.benefit = var7;
        var1.guildId = var5;
        var1.isInteractive = var4;
        var6 = _closure1_slot5;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 8;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var7 = var7.name;
        var4.children = var7;
        var4 = var6.bind(var0)(var5, var4);
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.benefit;
        var5 = var0.guildId;
        var4 = var0.isInteractive;
        var0 = _closure1_slot7;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot8;
        var0 = {};
        var6 = var13.id;
        var0.emoji = var6;
        var0.guildId = var5;
        var5 = var8.emojiRow;
        var0.contentStyle = var5;
        var0.isInteractive = var4;
        var11 = _closure1_slot5;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 8;
        var4 = var9[var5];
        var4 = var6.bind(var3)(var4);
        var10 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-md/medium',
            'color': 'text-muted',
            'children': ':'
        };
        var12 = var8.emojiColons;
        var4.style = var12;
        var10 = var11.bind(var3)(var10, var4);
        var4 = new Array(3);
        var4[0] = var10;
        var12 = _closure1_slot5;
        var10 = var9[var5];
        var10 = var6.bind(var3)(var10);
        var11 = var10.Text;
        var10 = {
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var13 = var13.name;
        var10.children = var13;
        var10 = var12.bind(var3)(var11, var10);
        var4[1] = var10;
        var7 = _closure1_slot5;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-md/medium',
            'color': 'text-muted',
            'children': ':'
        };
        var8 = var8.emojiColons;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-start'
    };
    var3.container = var8;
    var8 = {
        'width': 24,
        'height': 24,
        'alignSelf': 'flex-start',
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginEnd': 16
    };
    var3.emojiContainer = var8;
    var8 = {
        'flexDirection': 'column',
        'flexGrow': 1,
        'flex': 1,
        'alignItems': 'flex-start',
        'justifyContent': 'center'
    };
    var3.benefitColumn = var8;
    var8 = {
        'flex': 1,
        'marginTop': 2
    };
    var3.benefitDescription = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.channelRow = var8;
    var8 = {
        'width': 16,
        'height': 16,
        'marginEnd': 8
    };
    var3.channelIcon = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    };
    var3.emojiRow = var8;
    var8 = {};
    var8.paddingHorizontal = var9;
    var3.emojiColons = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116819: for (var _fun116819_ip = 0;;) switch (_fun116819_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.benefit;
                var5 = var0.guildId;
                var1 = var0.isInteractive;
                var0 = 'roles';
                var0 = var0 in var6;
                if (var0) {
                    _fun116819_ip = 122;
                    continue _fun116819
                }
            case 34:
                var3 = var6.ref_type;
                var0 = _closure1_slot4;
                var0 = var0.CHANNEL;
                if (!(var3 !== var0)) {
                    _fun116819_ip = 88;
                    continue _fun116819
                }
            case 54:
                var7 = _closure1_slot5;
                var4 = _closure1_slot11;
                var3 = {};
                var3.benefit = var6;
                var3.guildId = var5;
                var3.isInteractive = var1;
                var0 = undefined;
                var0 = var7.bind(var0)(var4, var3);
                _fun116819_ip = 120;
                continue _fun116819;
            case 88:
                var8 = _closure1_slot5;
                var7 = _closure1_slot10;
                var4 = {};
                var4.benefit = var6;
                var4.guildId = var5;
                var4.isInteractive = var1;
                var3 = undefined;
                var0 = var8.bind(var3)(var7, var4);
            case 120:
                _fun116819_ip = 154;
                continue _fun116819;
            case 122:
                var4 = _closure1_slot5;
                var3 = _closure1_slot12;
                var2 = {};
                var2.benefit = var6;
                var2.guildId = var5;
                var2.isInteractive = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 154:
                return var0;
        }
    };
    var2.GuildRoleSubscriptionBenefitPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5630, 33, 1297, 10816, 4077, 8439, 3932, 3095, 10809, 4802, 1234, 2]);