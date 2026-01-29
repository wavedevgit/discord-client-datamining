// modules/user_settings/native/design_system/UserSettingsDesignSystemPile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: SampleCard, environment: var1
        _fun88320: for (var _fun88320_ip = 0;;) switch (_fun88320_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.title;
                var7 = var0.noScroll;
                var8 = var0.children;
                var0 = _closure1_slot7;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 6;
                var0 = var11[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var9 = 16;
                var0.spacing = var9;
                var0.children = var8;
                var9 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot6;
                var0 = 7;
                var0 = var11[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var4 = var4.card;
                var0.style = var4;
                var8 = _closure1_slot5;
                var4 = 8;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var11 = 'text-lg/bold';
                var4.variant = var11;
                var4.children = var10;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var9;
                if (var7) {
                    _fun88320_ip = 199;
                    continue _fun88320
                }
            case 172:
                var8 = _closure1_slot5;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = true;
                var6.horizontal = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 199:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
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
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.ScrollView;
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
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var10 = 12;
    var3 = 16;
    var9 = {
        'flexDirection': 'column',
        'gap': 12,
        'padding': 16
    };
    var6.container = var9;
    var9 = {};
    var9.gap = var10;
    var6.card = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var7 = 4;
    var6 = var5[var7];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AvatarSizes;
    var8 = var6.XSMALL;
    var6 = new Array(5);
    var6[0] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.REFRESH_MEDIUM_32;
    var6[1] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.NORMAL;
    var6[2] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.LARGE_48;
    var6[3] = var8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AvatarSizes;
    var7 = var7.XLARGE;
    var6[4] = var7;
    var _closure1_slot8 = var6;
    var7 = 5;
    var6 = var5[var7];
    var6 = var4.bind(var0)(var6);
    var6 = var6.GuildIconSizes;
    var8 = var6.XSMALL;
    var6 = new Array(5);
    var6[0] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.GuildIconSizes;
    var8 = var8.SMALL_32;
    var6[1] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.GuildIconSizes;
    var8 = var8.NORMAL;
    var6[2] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.GuildIconSizes;
    var8 = var8.LARGE;
    var6[3] = var8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.GuildIconSizes;
    var7 = var7.XLARGE;
    var6[4] = var7;
    var _closure1_slot9 = var6;
    var6 = ['Clyde', 'Phibi', 'Cap'];
    var _closure1_slot10 = var6;
    var6 = ['test', 'cats', 'Evil Marcus', 'robot overlords', 'not a bug', 'O M G'];
    var _closure1_slot11 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemPile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: UserSettingsDesignSystemPile, environment: var1
        var0 = _closure1_slot7;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = _closure1_slot6;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var7.container;
        var4.style = var7;
        var8 = _closure1_slot5;
        var10 = _closure1_slot12;
        var7 = {};
        var9 = 'Avatar Pile';
        var7.title = var9;
        var15 = _closure1_slot8;
        var13 = var15.map;
        var9 = function(arg0) { // Environment: var12
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var0 = 6;
            var0 = var12[var0];
            var2 = undefined;
            var0 = var11.bind(var2)(var0);
            var1 = var0.Stack;
            var0 = {};
            var7 = _closure1_slot5;
            var5 = 8;
            var5 = var12[var5];
            var5 = var11.bind(var2)(var5);
            var6 = var5.Text;
            var5 = {
                'variant': 'text-md/medium',
                'color': 'text-subtle'
            };
            var5.children = var4;
            var6 = var7.bind(var2)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var6 = 9;
            var6 = var12[var6];
            var6 = var11.bind(var2)(var6);
            var7 = var6.AvatarPile;
            var6 = {};
            var6.size = var4;
            var10 = _closure1_slot10;
            var6.names = var10;
            var10 = 10;
            var13 = var12[var10];
            var13 = var11.bind(var2)(var13);
            var13 = var13.DEFAULT_AVATARS;
            var13 = var13.length;
            var6.totalCount = var13;
            var10 = var12[var10];
            var10 = var11.bind(var2)(var10);
            var11 = var10.DEFAULT_AVATARS;
            var10 = var11.map;
            var9 = function(arg0, arg1) { // Environment: var9
                var4 = _closure1_slot5;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = {};
                var0 = arg0;
                var1.source = var0;
                var0 = _closure3_slot0;
                var1.size = var0;
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var9 = var10.bind(var11)(var9);
            var6.children = var9;
            var6 = var8.bind(var2)(var7, var6);
            var5[1] = var6;
            var0.children = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var9 = var13.bind(var15)(var9);
        var7.children = var9;
        var8 = var8.bind(var3)(var10, var7);
        var7 = new Array(6);
        var7[0] = var8;
        var9 = _closure1_slot5;
        var8 = {};
        var13 = 'Avatar Pile (with overflow)';
        var8.title = var13;
        var14 = var15.map;
        var13 = function(arg0) { // Environment: var12
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var0 = 6;
            var0 = var12[var0];
            var2 = undefined;
            var0 = var11.bind(var2)(var0);
            var1 = var0.Stack;
            var0 = {};
            var7 = _closure1_slot5;
            var5 = 8;
            var5 = var12[var5];
            var5 = var11.bind(var2)(var5);
            var6 = var5.Text;
            var5 = {
                'variant': 'text-md/medium',
                'color': 'text-subtle'
            };
            var5.children = var4;
            var6 = var7.bind(var2)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var6 = 9;
            var6 = var12[var6];
            var6 = var11.bind(var2)(var6);
            var7 = var6.AvatarPile;
            var6 = {};
            var6.size = var4;
            var10 = _closure1_slot10;
            var6.names = var10;
            var10 = 9500;
            var6.totalCount = var10;
            var10 = 10;
            var10 = var12[var10];
            var10 = var11.bind(var2)(var10);
            var11 = var10.DEFAULT_AVATARS;
            var10 = var11.map;
            var9 = function(arg0, arg1) { // Environment: var9
                var4 = _closure1_slot5;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = {};
                var0 = arg0;
                var1.source = var0;
                var0 = _closure3_slot0;
                var1.size = var0;
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var9 = var10.bind(var11)(var9);
            var6.children = var9;
            var6 = var8.bind(var2)(var7, var6);
            var5[1] = var6;
            var0.children = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var13 = var14.bind(var15)(var13);
        var8.children = var13;
        var8 = var9.bind(var3)(var10, var8);
        var7[1] = var8;
        var9 = _closure1_slot5;
        var8 = {};
        var13 = 'Avatar Duo Pile';
        var8.title = var13;
        var14 = var15.map;
        var13 = function(arg0) { // Environment: var12
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot6;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var0 = 6;
            var0 = var14[var0];
            var2 = undefined;
            var0 = var11.bind(var2)(var0);
            var1 = var0.Stack;
            var0 = {};
            var7 = _closure1_slot5;
            var5 = 8;
            var5 = var14[var5];
            var5 = var11.bind(var2)(var5);
            var6 = var5.Text;
            var5 = {
                'variant': 'text-md/medium',
                'color': 'text-subtle'
            };
            var5.children = var4;
            var6 = var7.bind(var2)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var6 = 11;
            var6 = var14[var6];
            var6 = var11.bind(var2)(var6);
            var7 = var6.AvatarDuoPile;
            var6 = {};
            var6.size = var4;
            var15 = _closure1_slot10;
            var10 = var15.slice;
            var13 = 0;
            var12 = 2;
            var10 = var10.bind(var15)(var13, var12);
            var6.names = var10;
            var10 = 10;
            var10 = var14[var10];
            var10 = var11.bind(var2)(var10);
            var11 = var10.DEFAULT_AVATARS;
            var10 = var11.slice;
            var11 = var10.bind(var11)(var13, var12);
            var10 = var11.map;
            var9 = function(arg0, arg1) { // Environment: var9
                var4 = _closure1_slot5;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = {};
                var0 = arg0;
                var1.source = var0;
                var0 = _closure3_slot0;
                var1.size = var0;
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var9 = var10.bind(var11)(var9);
            var6.children = var9;
            var6 = var8.bind(var2)(var7, var6);
            var5[1] = var6;
            var0.children = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var13 = var14.bind(var15)(var13);
        var8.children = var13;
        var8 = var9.bind(var3)(var10, var8);
        var7[2] = var8;
        var9 = _closure1_slot5;
        var8 = {};
        var13 = 'Avatar Duo Pile (different sizes)';
        var8.title = var13;
        var14 = var15.map;
        var13 = function(arg0) { // Environment: var12
            var4 = arg0;
            var3 = _closure1_slot6;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var0 = 6;
            var0 = var15[var0];
            var2 = undefined;
            var0 = var14.bind(var2)(var0);
            var1 = var0.Stack;
            var0 = {};
            var7 = _closure1_slot5;
            var5 = 8;
            var5 = var15[var5];
            var5 = var14.bind(var2)(var5);
            var6 = var5.Text;
            var5 = {
                'variant': 'text-md/medium',
                'color': 'text-subtle'
            };
            var5.children = var4;
            var6 = var7.bind(var2)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var6 = 11;
            var6 = var15[var6];
            var6 = var14.bind(var2)(var6);
            var7 = var6.AvatarDuoPile;
            var6 = {};
            var9 = new Array(2);
            var9[0] = var4;
            var13 = 4;
            var11 = var15[var13];
            var11 = var14.bind(var2)(var11);
            var11 = var11.AvatarSizes;
            var11 = var11.NORMAL;
            var9[1] = var11;
            var6.size = var9;
            var12 = _closure1_slot10;
            var11 = var12.slice;
            var19 = 0;
            var9 = 2;
            var9 = var11.bind(var12)(var19, var9);
            var6.names = var9;
            var17 = _closure1_slot5;
            var11 = _closure1_slot1;
            var9 = var15[var13];
            var12 = var11.bind(var2)(var9);
            var9 = {};
            var16 = 10;
            var18 = var15[var16];
            var18 = var14.bind(var2)(var18);
            var18 = var18.DEFAULT_AVATARS;
            var18 = var18[var19];
            var9.source = var18;
            var9.size = var4;
            var12 = var17.bind(var2)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot5;
            var10 = var15[var13];
            var11 = var11.bind(var2)(var10);
            var10 = {};
            var16 = var15[var16];
            var16 = var14.bind(var2)(var16);
            var17 = var16.DEFAULT_AVATARS;
            var16 = 1;
            var16 = var17[var16];
            var10.source = var16;
            var13 = var15[var13];
            var13 = var14.bind(var2)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.NORMAL;
            var10.size = var13;
            var10 = var12.bind(var2)(var11, var10);
            var9[1] = var10;
            var6.children = var9;
            var6 = var8.bind(var2)(var7, var6);
            var5[1] = var6;
            var0.children = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var13 = var14.bind(var15)(var13);
        var8.children = var13;
        var8 = var9.bind(var3)(var10, var8);
        var7[3] = var8;
        var9 = _closure1_slot5;
        var8 = {};
        var13 = 'Guild Icon Pile (with overflow)';
        var8.title = var13;
        var15 = _closure1_slot9;
        var14 = var15.map;
        var13 = function(arg0) { // Environment: var12
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot6;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var0 = 6;
            var0 = var11[var0];
            var2 = undefined;
            var0 = var7.bind(var2)(var0);
            var1 = var0.Stack;
            var0 = {};
            var8 = _closure1_slot5;
            var5 = 8;
            var5 = var11[var5];
            var5 = var7.bind(var2)(var5);
            var6 = var5.Text;
            var5 = {
                'variant': 'text-md/medium',
                'color': 'text-subtle'
            };
            var12 = var4.toLowerCase;
            var12 = var12.bind(var4)();
            var5.children = var12;
            var6 = var8.bind(var2)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var6 = 12;
            var6 = var11[var6];
            var6 = var7.bind(var2)(var6);
            var7 = var6.GuildIconPile;
            var6 = {};
            var6.size = var4;
            var11 = _closure1_slot11;
            var6.names = var11;
            var10 = 128;
            var6.totalCount = var10;
            var10 = var11.map;
            var9 = function(arg0, arg1) { // Environment: var9
                var4 = _closure1_slot5;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = {};
                var0 = arg0;
                var1.value = var0;
                var0 = _closure3_slot0;
                var1.size = var0;
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var9 = var10.bind(var11)(var9);
            var6.children = var9;
            var6 = var8.bind(var2)(var7, var6);
            var5[1] = var6;
            var0.children = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var13 = var14.bind(var15)(var13);
        var8.children = var13;
        var8 = var9.bind(var3)(var10, var8);
        var7[4] = var8;
        var9 = _closure1_slot6;
        var8 = {
            'title': 'Weird Piles',
            'noScroll': true
        };
        var14 = _closure1_slot6;
        var13 = _closure1_slot0;
        var15 = _closure1_slot2;
        var11 = 8;
        var11 = var15[var11];
        var11 = var13.bind(var3)(var11);
        var13 = var11.Text;
        var11 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle'
        };
        var15 = ['These examples explore the edge cases of the underlying ', '<Pile>', " component and aren't recommended uses."];
        var11.children = var15;
        var13 = var14.bind(var3)(var13, var11);
        var11 = new Array(2);
        var11[0] = var13;
        var14 = new Array(7);
        var13 = [1, 1];
        var14[0] = var13;
        var13 = [0.5, 0.5];
        var14[1] = var13;
        var13 = [null, 0.5];
        var14[2] = var13;
        var13 = [0.5, null];
        var14[3] = var13;
        var13 = [0, 0.5];
        var14[4] = var13;
        var13 = [0.5, 0];
        var14[5] = var13;
        var13 = [0, 0];
        var14[6] = var13;
        var13 = var14.map;
        var12 = function(arg0) { // Environment: var12
            _fun88331: for (var _fun88331_ip = 0;;) switch (_fun88331_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2[Symbol.iterator];
                    var2 = var0().next;
                    var3 = var2().value;
                    var1 = var0;
                    var4 = undefined;
                    var1 = var1 === var4;
                    var8 = undefined;
                    if (var1) {
                        _fun88331_ip = 29;
                        continue _fun88331
                    }
                case 26:
                    var8 = var3;
                case 29:
                    var7 = undefined;
                    if (var1) {
                        _fun88331_ip = 59;
                        continue _fun88331
                    }
                case 34:
                    var3 = var2().value;
                    var2 = var0;
                    var2 = var2 === var4;
                    var7 = undefined;
                    var1 = var2;
                    if (var2) {
                        _fun88331_ip = 59;
                        continue _fun88331
                    }
                case 53:
                    var7 = var3;
                    var1 = var2;
                case 59:
                    if (var1) {
                        _fun88331_ip = 65;
                        continue _fun88331
                    }
                case 62:
                    var0.return();
                case 65:
                    var3 = _closure1_slot6;
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 6;
                    var0 = var9[var0];
                    var0 = var5.bind(var4)(var0);
                    var2 = var0.Stack;
                    var1 = {};
                    var6 = _closure1_slot6;
                    var0 = 8;
                    var0 = var9[var0];
                    var0 = var5.bind(var4)(var0);
                    var5 = var0.Text;
                    var0 = {
                        'variant': 'text-md/medium',
                        'color': 'text-subtle'
                    };
                    var13 = null;
                    var9 = var13 != var8;
                    var11 = 'null';
                    var14 = var11;
                    if (!var9) {
                        _fun88331_ip = 154;
                        continue _fun88331
                    }
                case 151:
                    var14 = var8;
                case 154:
                    var9 = ['depthX='];
                    var9[1] = var14;
                    var14 = ', depthY=';
                    var9[2] = var14;
                    var13 = var13 != var7;
                    if (!var13) {
                        _fun88331_ip = 188;
                        continue _fun88331
                    }
                case 185:
                    var11 = var7;
                case 188:
                    var9[3] = var11;
                    var0.children = var9;
                    var5 = var6.bind(var4)(var5, var0);
                    var0 = new Array(3);
                    var0[0] = var5;
                    var18 = _closure1_slot5;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 13;
                    var6 = var16[var5];
                    var6 = var15.bind(var4)(var6);
                    var9 = var6.Pile;
                    var6 = {};
                    var17 = 14;
                    var11 = var16[var17];
                    var20 = var15.bind(var4)(var11);
                    var14 = var20.getListSummaryLabel;
                    var13 = _closure1_slot10;
                    var19 = 10;
                    var11 = var16[var19];
                    var11 = var15.bind(var4)(var11);
                    var11 = var11.DEFAULT_AVATARS;
                    var11 = var11.length;
                    var11 = var14.bind(var20)(var13, var11);
                    var6['aria-label'] = var11;
                    var14 = 15;
                    var11 = var16[var14];
                    var11 = var15.bind(var4)(var11);
                    var11 = var11.CutoutShape;
                    var11 = var11.Circle;
                    var6.shape = var11;
                    var13 = 48;
                    var6.size = var13;
                    var11 = 2;
                    var6.gap = var11;
                    var6.depthX = var8;
                    var6.depthY = var7;
                    var19 = var16[var19];
                    var19 = var15.bind(var4)(var19);
                    var21 = var19.DEFAULT_AVATARS;
                    var20 = var21.map;
                    var19 = function(arg0, arg1) { // Environment: var10
                        var4 = _closure1_slot5;
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 4;
                        var1 = var6[var0];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var7 = arg0;
                        var1.source = var7;
                        var5 = _closure1_slot0;
                        var0 = var6[var0];
                        var0 = var5.bind(var3)(var0);
                        var0 = var0.AvatarSizes;
                        var0 = var0.LARGE_48;
                        var1.size = var0;
                        var0 = arg1;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var19 = var20.bind(var21)(var19);
                    var6.children = var19;
                    var6 = var18.bind(var4)(var9, var6);
                    var0[1] = var6;
                    var9 = _closure1_slot5;
                    var5 = var16[var5];
                    var5 = var15.bind(var4)(var5);
                    var6 = var5.Pile;
                    var5 = {};
                    var17 = var16[var17];
                    var19 = var15.bind(var4)(var17);
                    var18 = var19.getListSummaryLabel;
                    var12 = _closure1_slot11;
                    var17 = var12.length;
                    var17 = var18.bind(var19)(var12, var17);
                    var5['aria-label'] = var17;
                    var14 = var16[var14];
                    var14 = var15.bind(var4)(var14);
                    var14 = var14.CutoutShape;
                    var14 = var14.RoundedRect;
                    var5.shape = var14;
                    var5.size = var13;
                    var5.gap = var11;
                    var5.depthX = var8;
                    var5.depthY = var7;
                    var11 = var12.map;
                    var10 = function(arg0, arg1) { // Environment: var10
                        var4 = _closure1_slot5;
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 5;
                        var1 = var6[var0];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var7 = arg0;
                        var1.value = var7;
                        var5 = _closure1_slot0;
                        var0 = var6[var0];
                        var0 = var5.bind(var3)(var0);
                        var0 = var0.GuildIconSizes;
                        var0 = var0.LARGE;
                        var1.size = var0;
                        var0 = arg1;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var10 = var11.bind(var12)(var10);
                    var5.children = var10;
                    var5 = var9.bind(var4)(var6, var5);
                    var0[2] = var5;
                    var1.children = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var5 = '';
                    var0 = ',';
                    var0 = var6.bind(var5)(var8, var0, var7);
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
            }
        };
        var12 = var13.bind(var14)(var12);
        var11[1] = var12;
        var8.children = var11;
        var8 = var9.bind(var3)(var10, var8);
        var7[5] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 5409, 7353, 4033, 4856, 3895, 11391, 1418, 11392, 7765, 7766, 7768, 5414, 2]);