// modules/age_gate/native/components/NsfwGateGuild.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NsfwGateSource;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var3 = var3.HelpdeskArticles;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 16
    };
    var9 = 16;
    var10 = 8;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var3.container = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.header = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 16
    };
    var3.description = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.image = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_gate/native/components/NsfwGateGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var13 = var1.onClose;
        var7 = var1.guildId;
        var _closure2_slot0 = var7;
        var1 = _closure1_slot13;
        var3 = undefined;
        var14 = var1.bind(var3)();
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var8 = 9;
        var1 = var12[var8];
        var1 = var11.bind(var3)(var1);
        var4 = var1.intl;
        var2 = var4.string;
        var1 = var12[var8];
        var1 = var11.bind(var3)(var1);
        var1 = var1.t;
        var1 = var1.vAymlG;
        var17 = var2.bind(var4)(var1);
        var1 = var12[var8];
        var1 = var11.bind(var3)(var1);
        var4 = var1.intl;
        var2 = var4.string;
        var1 = var12[var8];
        var1 = var11.bind(var3)(var1);
        var1 = var1.t;
        var1 = var1.Crj6eC;
        var16 = var2.bind(var4)(var1);
        var1 = var12[var8];
        var1 = var11.bind(var3)(var1);
        var6 = var1.intl;
        var4 = var6.format;
        var1 = var12[var8];
        var1 = var11.bind(var3)(var1);
        var1 = var1.t;
        var2 = var1.Z12LNW;
        var1 = {};
        var10 = _closure1_slot1;
        var9 = 10;
        var9 = var12[var9];
        var18 = var10.bind(var3)(var9);
        var15 = var18.getArticleURL;
        var9 = _closure1_slot10;
        var9 = var9.NSFW_GUILD_GUIDELINES;
        var9 = var15.bind(var18)(var9);
        var1.helpURL = var9;
        var9 = var4.bind(var6)(var2, var1);
        var2 = _closure1_slot7;
        var1 = var2.getCurrentUser;
        var6 = var1.bind(var2)();
        var _closure2_slot1 = var6;
        var4 = _closure1_slot3;
        var2 = var4.useEffect;
        var1 = new Array(2);
        var1[0] = var7;
        var1[1] = var6;
        var0 = function() { // Environment: var0
            _fun72326: for (var _fun72326_ip = 0;;) switch (_fun72326_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.GUILD_NSFW_GATE_VIEWED;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1.guild_id = var6;
                    var6 = _closure2_slot1;
                    var8 = null;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if (var9) {
                        _fun72326_ip = 77;
                        continue _fun72326
                    }
                case 68:
                    var9 = _closure2_slot1;
                    var6 = var9.id;
                case 77:
                    var1.user_id = var6;
                    var11 = _closure1_slot6;
                    var10 = var11.isMember;
                    var9 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var12 = var8 == var6;
                    var6 = undefined;
                    if (var12) {
                        _fun72326_ip = 118;
                        continue _fun72326
                    }
                case 109:
                    var12 = _closure2_slot1;
                    var6 = var12.id;
                case 118:
                    var6 = var10.bind(var11)(var9, var6);
                    var1.is_member = var6;
                    var6 = _closure2_slot1;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if (var8) {
                        _fun72326_ip = 152;
                        continue _fun72326
                    }
                case 142:
                    var7 = _closure2_slot1;
                    var6 = var7.nsfwAllowed;
                case 152:
                    if (!var6) {
                        _fun72326_ip = 185;
                        continue _fun72326
                    }
                case 155:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 12;
                    var7 = var9[var7];
                    var8 = var8.bind(var0)(var7);
                    var7 = var8.getViewNsfwGuildsOrDefault;
                    var6 = var7.bind(var8)();
                case 185:
                    var1.is_user_opted_in_to_age_restricted_servers = var6;
                    var5 = _closure1_slot8;
                    var5 = var5.MODAL;
                    var1.source = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot12;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var14.container;
        var0.style = var4;
        var7 = _closure1_slot11;
        var4 = 13;
        var4 = var12[var4];
        var6 = var10.bind(var3)(var4);
        var4 = {};
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(6);
        var4[0] = var6;
        var6 = _closure1_slot5;
        var5 = {};
        var15 = 14;
        var15 = var12[var15];
        var15 = var10.bind(var3)(var15);
        var5.source = var15;
        var15 = var14.image;
        var5.style = var15;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var5 = 15;
        var6 = var12[var5];
        var6 = var11.bind(var3)(var6);
        var15 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var18 = var14.header;
        var6.style = var18;
        var6.children = var17;
        var6 = var7.bind(var3)(var15, var6);
        var4[2] = var6;
        var6 = var12[var5];
        var6 = var11.bind(var3)(var6);
        var15 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var17 = var14.description;
        var6.style = var17;
        var6.children = var16;
        var6 = var7.bind(var3)(var15, var6);
        var4[3] = var6;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var14 = var14.description;
        var5.style = var14;
        var5.children = var9;
        var5 = var7.bind(var3)(var6, var5);
        var4[4] = var5;
        var9 = 16;
        var5 = var12[var9];
        var6 = var10.bind(var3)(var5);
        var5 = {};
        var5.onPress = var13;
        var13 = {};
        var13.flexGrow = var3;
        var5.style = var13;
        var13 = var12[var9];
        var13 = var10.bind(var3)(var13);
        var13 = var13.Colors;
        var13 = var13.BRAND;
        var5.color = var13;
        var9 = var12[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.Sizes;
        var9 = var9.MEDIUM;
        var5.size = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.gRqiWV;
        var8 = var9.bind(var10)(var8);
        var5.text = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[5] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1672, 1613, 9028, 660, 33, 1297, 671, 1234, 1675, 795, 7949, 7524, 9029, 3932, 4868, 2]);