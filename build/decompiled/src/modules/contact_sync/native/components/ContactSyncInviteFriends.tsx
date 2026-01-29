// modules/contact_sync/native/components/ContactSyncInviteFriends.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = 16;
    var9 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'paddingHorizontal': 16
    };
    var6.container = var9;
    var9 = {};
    var9.marginBottom = var3;
    var6.art = var9;
    var9 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var6.title = var9;
    var9 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var6.subtitle = var9;
    var9 = {};
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginHorizontal = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_32;
    var9.paddingBottom = var10;
    var6.button = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/contact_sync/native/components/ContactSyncInviteFriends.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: _default, environment: var1
        var0 = _closure1_slot10;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var0 = 7;
        var0 = var15[var0];
        var4 = var14.bind(var3)(var0);
        var2 = var4.useStateFromStores;
        var0 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var10
            var1 = _closure1_slot4;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var4)(var1, var0);
        var _closure2_slot0 = var0;
        var2 = _closure1_slot8;
        var1 = _closure1_slot9;
        var0 = {};
        var7 = _closure1_slot3;
        var4 = {};
        var6 = var8.container;
        var4.style = var6;
        var6 = _closure1_slot7;
        var12 = _closure1_slot1;
        var5 = 8;
        var5 = var15[var5];
        var9 = var12.bind(var3)(var5);
        var5 = {};
        var11 = var8.art;
        var5.style = var11;
        var11 = 9;
        var11 = var15[var11];
        var11 = var12.bind(var3)(var11);
        var5.source = var11;
        var9 = var6.bind(var3)(var9, var5);
        var5 = new Array(3);
        var5[0] = var9;
        var9 = 10;
        var11 = var15[var9];
        var11 = var14.bind(var3)(var11);
        var13 = var11.Text;
        var12 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var11 = var8.title;
        var12.style = var11;
        var11 = 11;
        var16 = var15[var11];
        var16 = var14.bind(var3)(var16);
        var18 = var16.intl;
        var17 = var18.string;
        var16 = var15[var11];
        var16 = var14.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.ZxBpLf;
        var16 = var17.bind(var18)(var16);
        var12.children = var16;
        var12 = var6.bind(var3)(var13, var12);
        var5[1] = var12;
        var9 = var15[var9];
        var9 = var14.bind(var3)(var9);
        var12 = var9.Text;
        var9 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var13 = var8.subtitle;
        var9.style = var13;
        var13 = var15[var11];
        var13 = var14.bind(var3)(var13);
        var17 = var13.intl;
        var16 = var17.string;
        var13 = var15[var11];
        var13 = var14.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["fXtCJ+"];
        var13 = var16.bind(var17)(var13);
        var9.children = var13;
        var9 = var6.bind(var3)(var12, var9);
        var5[2] = var9;
        var4.children = var5;
        var5 = var2.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var8 = var8.button;
        var5.style = var8;
        var8 = 12;
        var8 = var15[var8];
        var8 = var14.bind(var3)(var8);
        var9 = var8.Button;
        var8 = {
            'variant': 'primary',
            'size': 'lg'
        };
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11["6Qgrev"];
        var11 = var12.bind(var13)(var11);
        var8.text = var11;
        var10 = function() { // Original name: onPress, environment: var10
            _fun81494: for (var _fun81494_ip = 0;;) switch (_fun81494_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 13;
                    var2 = var6[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot5;
                    var3 = var2.FRIEND_ADD_VIEWED;
                    var2 = {};
                    var7 = 'Invite';
                    var2.friend_add_type = var7;
                    var7 = _closure1_slot6;
                    var7 = var7.CONTACT_SYNC_MODAL;
                    var2.source_page = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 11;
                    var4 = var6[var2];
                    var4 = var3.bind(var0)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var6[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.t;
                    var3 = var2["6E9a1J"];
                    var2 = {};
                    var6 = 'https://discord.com/';
                    var2.url = var6;
                    var8 = _closure2_slot0;
                    var6 = null;
                    var8 = var6 != var8;
                    var6 = '';
                    if (!var8) {
                        _fun81494_ip = 187;
                        continue _fun81494
                    }
                case 152:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 14;
                    var8 = var10[var8];
                    var9 = var9.bind(var0)(var8);
                    var8 = var9.getUserTag;
                    var7 = _closure2_slot0;
                    var6 = var8.bind(var9)(var7);
                case 187:
                    var2.username = var6;
                    var5 = var4.bind(var5)(var3, var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.showShareActionSheet;
                    var2 = {};
                    var2.message = var5;
                    var1 = _closure1_slot6;
                    var1 = var1.CONTACT_SYNC_MODAL;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var8.onPress = var10;
        var8 = var6.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 660, 33, 1297, 671, 566, 4660, 10362, 3895, 1234, 4037, 795, 3195, 8230, 2]);