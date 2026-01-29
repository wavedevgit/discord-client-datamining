// components_native/channel_settings/ChannelSettingsModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = function(arg0, arg1, arg2) { // Original name: getChannelSettingsScreens, environment: var4
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var0 = {};
        var2 = _closure1_slot6;
        var4 = var2.OVERVIEW;
        var2 = {};
        var5 = function(arg0) { // Original name: render, environment: var3
            _fun109130: for (var _fun109130_ip = 0;;) switch (_fun109130_ip) {
                case 0:
                    var5 = arg0;
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.channelId = var4;
                    var4 = null;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun109130_ip = 62;
                        continue _fun109130
                    }
                case 56:
                    var4 = var5.autoFocusElement;
                case 62:
                    var0.autoFocusElement = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var2.render = var5;
        var0[var4] = var2;
        var2 = _closure1_slot6;
        var5 = var2.NOTIFICATIONS;
        var2 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 9;
        var6 = var9[var4];
        var7 = undefined;
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6.h850Ss;
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function() { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot0;
            var0.channelId = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.PINNED_MESSAGES;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6["mp1N/2"];
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function() { // Original name: render, environment: var3
            var8 = {};
            var0 = _closure1_slot7;
            var0 = var0.GUILD_CHANNEL;
            var8.type = var0;
            var1 = _closure2_slot1;
            var8.guildId = var1;
            var1 = _closure2_slot0;
            var8.channelId = var1;
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var0 = _closure2_slot2;
            var0 = var0.pinsScreen;
            var1.style = var0;
            var6 = _closure1_slot10;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var0 = 11;
            var4 = var4[var0];
            var0 = undefined;
            var5 = var5.bind(var0)(var4);
            var4 = {};
            var4.searchContext = var8;
            var7 = _closure1_slot9;
            var7 = var7.PINS;
            var4.tab = var7;
            var7 = true;
            var4.isFocused = var7;
            var4 = var6.bind(var0)(var5, var4);
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.PINNED_CHAT;
        var2 = {};
        var6 = true;
        var2.postponeRender = var6;
        var10 = function() { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 12;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot0;
            var0.channelId = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var10;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.INSTANT_INVITES;
        var2 = {};
        var10 = var9[var4];
        var10 = var8.bind(var7)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var9[var4];
        var10 = var8.bind(var7)(var10);
        var10 = var10.t;
        var10 = var10.ngRFjZ;
        var10 = var11.bind(var12)(var10);
        var2.title = var10;
        var2.postponeRender = var6;
        var10 = function() { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 13;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var10;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.PERMISSIONS;
        var2 = {};
        var10 = var9[var4];
        var10 = var8.bind(var7)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var9[var4];
        var10 = var8.bind(var7)(var10);
        var10 = var10.t;
        var10 = var10.xrmhRX;
        var10 = var11.bind(var12)(var10);
        var2.title = var10;
        var10 = function(arg0) { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 14;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var6 = arg0;
            var7 = var0;
            var4 = copyDataProperties(var7, var6);
            var5 = _closure2_slot0;
            var4 = 'channelId';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var10;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.NEW_PERMISSION;
        var2 = {};
        var10 = var9[var4];
        var10 = var8.bind(var7)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var9[var4];
        var10 = var8.bind(var7)(var10);
        var10 = var10.t;
        var10 = var10.vPHdP5;
        var10 = var11.bind(var12)(var10);
        var2.title = var10;
        var2.postponeRender = var6;
        var6 = function(arg0) { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 15;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot0;
            var0.channelId = var4;
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.PERMISSION_OVERRIDES;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6.D4p9TR;
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function(arg0) { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 16;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot0;
            var0.channelId = var4;
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.INTEGRATIONS;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6.CIsNZw;
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function(arg0) { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 17;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot0;
            var0.channelId = var4;
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.WEBHOOKS;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6.jp25Id;
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function() { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 18;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = _closure2_slot0;
            var0.channelId = var5;
            var4 = _closure1_slot8;
            var4 = var4.INCOMING;
            var0.webhookType = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.EDIT_WEBHOOK;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6["6SE3L3"];
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function(arg0) { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 19;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.EDIT_LINKED_LOBBY;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6.OJknhi;
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function(arg0) { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 20;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.CHANNELS_FOLLOWED;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6.OrV60r;
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function() { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 18;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = _closure2_slot0;
            var0.channelId = var5;
            var4 = _closure1_slot8;
            var4 = var4.CHANNEL_FOLLOWER;
            var0.webhookType = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.CHANGE_CATEGORY;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6["+caQHK"];
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function() { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 21;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot0;
            var0.channelId = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.CHANGE_RTC_REGION;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var11 = var6.intl;
        var10 = var11.string;
        var6 = var9[var4];
        var6 = var8.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6["Ms8bX+"];
        var6 = var10.bind(var11)(var6);
        var2.title = var6;
        var6 = function() { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 22;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot0;
            var0.channelId = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var2 = _closure1_slot6;
        var5 = var2.EDIT_FORUM_TAG;
        var2 = {};
        var6 = function(arg0) { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 23;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot0;
            var0.channelId = var4;
            var5 = arg0;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var6;
        var0[var5] = var2;
        var1 = _closure1_slot6;
        var2 = var1.DEFAULT_FORUM_LAYOUT;
        var1 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var9[var4];
        var4 = var8.bind(var7)(var4);
        var4 = var4.t;
        var4 = var4["kQvoC/"];
        var4 = var5.bind(var6)(var4);
        var1.title = var4;
        var3 = function() { // Original name: render, environment: var3
            var3 = _closure1_slot10;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 24;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot0;
            var0.channelId = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var3;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot12 = var1;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var5 = var7[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var7[var10];
    var3 = var6.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.ChannelSettingsSections;
    var _closure1_slot6 = var5;
    var5 = var3.SearchTypes;
    var _closure1_slot7 = var5;
    var3 = var3.WebhookTypes;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.SearchTabs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var10 = 7;
    var10 = var7[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var3.pinsScreen = var9;
    var3 = var5.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/channel_settings/ChannelSettingsModal.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0) { // Original name: ChannelSettingsModal, environment: var4
        _fun109147: for (var _fun109147_ip = 0;;) switch (_fun109147_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.section;
                var5 = var0.headerStatusBarHeight;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var0 = _closure1_slot11;
                var9 = var0.bind(var4)();
                var _closure2_slot0 = var9;
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var8 = 25;
                var0 = var0[var8];
                var3 = var3.bind(var4)(var0);
                var6 = _closure1_slot5;
                var0 = var6.getChannel;
                var0 = var0.bind(var6)();
                var6 = var3.bind(var4)(var0);
                var0 = null;
                var3 = var0 == var6;
                var12 = undefined;
                if (var3) {
                    _fun109147_ip = 99;
                    continue _fun109147
                }
            case 94:
                var12 = var6.id;
            case 99:
                _closure2_slot1 = var12;
                var3 = var0 == var6;
                var11 = undefined;
                if (var3) {
                    _fun109147_ip = 122;
                    continue _fun109147
                }
            case 112:
                var3 = var6.getGuildId;
                var11 = var3.bind(var6)();
            case 122:
                _closure2_slot2 = var11;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var4)(var3);
                var10 = var3.bind(var4)(var7);
                _closure2_slot3 = var10;
                var8 = _closure1_slot3;
                var13 = var8.useEffect;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var11;
                var3 = function() { // Environment: var2
                    _fun109148: for (var _fun109148_ip = 0;;) switch (_fun109148_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun109148_ip = 24;
                                continue _fun109148
                            }
                        case 16:
                            var1 = _closure2_slot2;
                            var0 = var2 != var1;
                        case 24:
                            if (var0) {
                                _fun109148_ip = 62;
                                continue _fun109148
                            }
                        case 27:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 26;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.close;
                            var0 = var0.bind(var1)();
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var13.bind(var8)(var3, var6);
                var6 = var8.useMemo;
                var3 = new Array(4);
                var3[0] = var12;
                var3[1] = var11;
                var3[2] = var10;
                var3[3] = var9;
                var2 = function() { // Environment: var2
                    _fun109149: for (var _fun109149_ip = 0;;) switch (_fun109149_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun109149_ip = 59;
                                continue _fun109149
                            }
                        case 18:
                            var1 = _closure2_slot2;
                            var1 = var3 != var1;
                            var0 = null;
                            if (!var1) {
                                _fun109149_ip = 59;
                                continue _fun109149
                            }
                        case 31:
                            var7 = _closure1_slot12;
                            var6 = _closure2_slot1;
                            var5 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            var1 = undefined;
                            var0 = var7.bind(var1)(var6, var5, var4);
                        case 59:
                            if (!(var3 != var0)) {
                                _fun109149_ip = 158;
                                continue _fun109149
                            }
                        case 63:
                            var1 = _closure2_slot3;
                            if (!(var3 == var1)) {
                                _fun109149_ip = 86;
                                continue _fun109149
                            }
                        case 71:
                            var1 = _closure1_slot6;
                            var1 = var1.OVERVIEW;
                            _fun109149_ip = 90;
                            continue _fun109149;
                        case 86:
                            var1 = _closure2_slot3;
                        case 90:
                            var2 = var0[var1];
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 27;
                            var3 = var7[var3];
                            var6 = undefined;
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.getHeaderCloseButton;
                            var5 = _closure1_slot1;
                            var1 = 26;
                            var1 = var7[var1];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.close;
                            var1 = var3.bind(var4)(var1);
                            var2.headerLeft = var1;
                        case 158:
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var2, var3);
                var2 = var0 != var6;
                var0 = null;
                if (!var2) {
                    _fun109147_ip = 286;
                    continue _fun109147
                }
            case 233:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 28;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Navigator;
                var1 = {};
                var1.initialRouteName = var7;
                var1.screens = var6;
                var1.headerStatusBarHeight = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 286:
                return var0;
        }
    };
    var2.default = var4;
    var2.useChannelSettingsScreensStyles = var3;
    var2.getChannelSettingsScreens = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6424, 660, 8857, 33, 1297, 671, 14026, 1234, 8697, 13817, 14035, 14036, 14038, 14043, 14044, 14052, 14055, 14062, 14064, 14065, 14066, 14067, 14068, 4884, 6423, 4661, 5744, 2]);