// modules/saved_messages/native/ForLaterCardHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun76192: for (var _fun76192_ip = 0;;) switch (_fun76192_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channel;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot7;
                var4 = undefined;
                var3 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var7 = var2.bind(var4)(var1);
                var2 = var7.useStateFromStores;
                var8 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var2.bind(var7)(var1, var0);
                var0 = null;
                if (!(var0 == var8)) {
                    _fun76192_ip = 251;
                    continue _fun76192
                }
            case 86:
                if (!(var0 != var5)) {
                    _fun76192_ip = 103;
                    continue _fun76192
                }
            case 90:
                var0 = var5.isGroupDM;
                var0 = var0.bind(var5)();
                if (var0) {
                    _fun76192_ip = 181;
                    continue _fun76192
                }
            case 103:
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var3 = var3.dmIcon;
                var0.style = var3;
                var9 = _closure1_slot5;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var3 = var7.bind(var4)(var3);
                var7 = var3.ChatIcon;
                var3 = {};
                var10 = 'xxs';
                var3.size = var10;
                var3 = var9.bind(var4)(var7, var3);
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun76192_ip = 249;
                continue _fun76192;
            case 181:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 8;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var5;
                var7 = _closure1_slot0;
                var5 = 9;
                var5 = var9[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.AvatarSizes;
                var5 = var5.XSMALL;
                var1.size = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 249:
                _fun76192_ip = 316;
                continue _fun76192;
            case 251:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 7;
                var1 = var7[var5];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.guild = var8;
                var6 = _closure1_slot0;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.GuildIconSizes;
                var5 = var5.XSMALL;
                var1.size = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 316:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun76194: for (var _fun76194_ip = 0;;) switch (_fun76194_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.channel;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot7;
                var3 = undefined;
                var9 = var2.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var8 = var2.bind(var3)(var4);
                var7 = var8.useStateFromStores;
                var10 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var10;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var7.bind(var8)(var4, var0);
                var7 = _closure1_slot1;
                var0 = 11;
                var0 = var6[var0];
                var7 = var7.bind(var3)(var0);
                var0 = false;
                var7 = var7.bind(var3)(var1, var0);
                var0 = 12;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getChannelIconComponentWithGuild;
                var10 = var0.bind(var2)(var1, var4);
                var0 = var1.isPrivate;
                var4 = var0.bind(var1)();
                if (var4) {
                    _fun76194_ip = 144;
                    continue _fun76194
                }
            case 138:
                var0 = null;
                var4 = var0 == var10;
            case 144:
                var0 = var1.isDM;
                var0 = var0.bind(var1)();
                var8 = var7;
                if (!var0) {
                    _fun76194_ip = 224;
                    continue _fun76194
                }
            case 160:
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 13;
                var2 = var11[var0];
                var2 = var1.bind(var3)(var2);
                var6 = var2.intl;
                var2 = var6.formatToPlainString;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.smD7XV;
                var0 = {};
                var0.username = var7;
                var8 = var2.bind(var6)(var1, var0);
            case 224:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var6 = var9.channelNameContainer;
                var0.style = var6;
                var6 = null;
                if (var4) {
                    _fun76194_ip = 279;
                    continue _fun76194
                }
            case 249:
                var7 = _closure1_slot5;
                var4 = {};
                var11 = var9.channelTypeIcon;
                var4.style = var11;
                var11 = 'xxs';
                var4.size = var11;
                var6 = var7.bind(var3)(var10, var4);
            case 279:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 14;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var9 = var9.channelName;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.cardHeader = var8;
    var8 = {
        'borderRadius': null,
        'width': 24,
        'height': 24
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.icon = var8;
    var8 = {};
    var11 = 6;
    var8.padding = var11;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.dmIcon = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexShrink': 1
    };
    var3.channelNameContainer = var8;
    var8 = {};
    var8.flexShrink = var10;
    var3.channelName = var8;
    var8 = {};
    var8.marginRight = var9;
    var3.channelTypeIcon = var8;
    var8 = {
        'marginVertical': 4294967292,
        'marginLeft': 'auto'
    };
    var3.actionsContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/native/ForLaterCardHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76196: for (var _fun76196_ip = 0;;) switch (_fun76196_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var8 = var0.actions;
                var0 = _closure1_slot7;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.cardHeader;
                var0.style = var4;
                var7 = _closure1_slot5;
                var6 = _closure1_slot8;
                var4 = {};
                var4.channel = var11;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var6 = var11.isPrivate;
                var7 = var6.bind(var11)();
                var6 = null;
                if (var7) {
                    _fun76196_ip = 136;
                    continue _fun76196
                }
            case 90:
                var12 = _closure1_slot5;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 5;
                var7 = var13[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.ChevronSmallRightIcon;
                var7 = {};
                var13 = 'xxs';
                var7.size = var13;
                var6 = var12.bind(var3)(var10, var7);
            case 136:
                var4[1] = var6;
                var10 = _closure1_slot5;
                var7 = _closure1_slot9;
                var6 = {};
                var6.channel = var11;
                var6 = var10.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var9 = var9.actionsContainer;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForLaterCardHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1410, 33, 1297, 671, 7740, 566, 7393, 9039, 5452, 4838, 4792, 4807, 1234, 3941, 2]);