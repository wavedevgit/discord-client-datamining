// modules/guild_sidebar/native/VoiceUsers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: AudienceItem, environment: var1
        _fun102440: for (var _fun102440_ip = 0;;) switch (_fun102440_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.audienceCount;
                var6 = var0.collapsed;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var1 = var0.bind(var3)();
                var0 = _closure1_slot8;
                var11 = var0.bind(var3)(var1);
                var8 = var5;
                if (var6) {
                    _fun102440_ip = 124;
                    continue _fun102440
                }
            case 59:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var2 = var7[var0];
                var2 = var1.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.formatToPlainString;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0["+v2pN2"];
                var0 = {};
                var0.count = var5;
                var8 = var2.bind(var4)(var1, var0);
            case 124:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var11.listeners;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var6) {
                    _fun102440_ip = 159;
                    continue _fun102440
                }
            case 153:
                var5 = var11.listenersPill;
            case 159:
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var6 = var11.listenersIconWrapper;
                var4.style = var6;
                var15 = _closure1_slot5;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 12;
                var9 = var12[var9];
                var9 = var6.bind(var3)(var9);
                var14 = var9.HeadphonesIcon;
                var13 = {
                    'color': 'redesign-channel-name-muted-text',
                    'size': 'custom'
                };
                var9 = 'redesign-channel-name-muted-text';
                var16 = var11.headphonesIcon;
                var13.style = var16;
                var13 = var15.bind(var3)(var14, var13);
                var4.children = var13;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var5 = 13;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var11 = var11.listenersText;
                var5.style = var11;
                var10 = _closure1_slot7;
                var5.variant = var10;
                var5.color = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var7 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 'text-sm/medium';
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun102441: for (var _fun102441_ip = 0;;) switch (_fun102441_ip) {
            case 0:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var4 = arg0;
                if (var4) {
                    _fun102441_ip = 44;
                    continue _fun102441
                }
            case 36:
                var7 = var2.BACKGROUND_BASE_LOWEST;
                _fun102441_ip = 50;
                continue _fun102441;
            case 44:
                var7 = var2.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
            case 50:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.radii;
                var2 = var0.round;
                var0 = {};
                var6 = 4;
                var5 = {
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'padding': 4,
                    'marginTop': 4,
                    'marginLeft': 4294967288
                };
                var0.listeners = var5;
                var5 = {};
                var5.backgroundColor = var7;
                var5.borderRadius = var2;
                var8 = -16;
                var5.marginLeft = var8;
                var9 = 20;
                var5.height = var9;
                var0.listenersPill = var5;
                var5 = {
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'backgroundColor': null,
                    'marginRight': 8,
                    'marginLeft': 4
                };
                var5.backgroundColor = var7;
                var5.borderRadius = var2;
                var2 = _closure1_slot0;
                var1 = 6;
                var7 = var4[var1];
                var8 = var2.bind(var3)(var7);
                var7 = var8.makeSizeStyle;
                var10 = var7.bind(var8)(var9);
                var11 = var5;
                var7 = copyDataProperties(var11, var10);
                var0.listenersIconWrapper = var5;
                var5 = {};
                var5.marginRight = var6;
                var0.listenersText = var5;
                var5 = {};
                var6 = -20;
                var5.marginLeft = var6;
                var0.userCollapsedOverlap = var5;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.makeSizeStyle;
                var1 = 14;
                var1 = var2.bind(var3)(var1);
                var0.headphonesIcon = var1;
                return var0;
        }
    };
    var3 = var6.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun102442: for (var _fun102442_ip = 0;;) switch (_fun102442_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.voiceState;
                var4 = var2.user;
                var _closure2_slot0 = var4;
                var13 = var2.member;
                var10 = var2.voiceState;
                var9 = var1.channel;
                var _closure2_slot1 = var9;
                var11 = var1.collapsed;
                var15 = var1.isFirst;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.bind(var3)();
                var1 = _closure1_slot8;
                var7 = var1.bind(var3)(var2);
                var2 = _closure1_slot0;
                var1 = 8;
                var1 = var6[var1];
                var8 = var2.bind(var3)(var1);
                var6 = var8.useStateFromStoresObject;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var12 = var9.guild_id;
                var1 = new Array(2);
                var1[0] = var12;
                var12 = var4.id;
                var1[1] = var12;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var4 = _closure1_slot4;
                    var6 = var4.getMember;
                    var2 = _closure2_slot1;
                    var5 = var2.guild_id;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var6.bind(var4)(var5, var3);
                    var0.storeMember = var3;
                    var3 = var4.isGuestOrLurker;
                    var2 = var2.guild_id;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.isGuest = var1;
                    return var0;
                };
                var0 = var6.bind(var8)(var2, var0, var1);
                var12 = var0.storeMember;
                var8 = var0.isGuest;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var14 = null;
                var6 = null;
                if (!var11) {
                    _fun102442_ip = 201;
                    continue _fun102442
                }
            case 190:
                var6 = null;
                if (var15) {
                    _fun102442_ip = 201;
                    continue _fun102442
                }
            case 195:
                var6 = var7.userCollapsedOverlap;
            case 201:
                var0.style = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 9;
                var5 = var15[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.user = var4;
                if (!(var14 != var13)) {
                    _fun102442_ip = 242;
                    continue _fun102442
                }
            case 239:
                var12 = var13;
            case 242:
                var5.member = var12;
                var12 = var10.mute;
                var5.mute = var12;
                var12 = var10.deaf;
                var5.deaf = var12;
                var12 = var10.selfVideo;
                var5.selfVideo = var12;
                var12 = var10.selfMute;
                var5.selfMute = var12;
                var12 = var10.selfDeaf;
                var5.selfDeaf = var12;
                var12 = var10.suppress;
                var5.suppress = var12;
                var5.collapsed = var11;
                var10 = var10.sessionId;
                var5.sessionId = var10;
                var5.channel = var9;
                var5.isGuest = var8;
                var4 = var4.id;
                var4 = var7.bind(var3)(var6, var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/VoiceUsers.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: VoiceUsers, environment: var1
        _fun102444: for (var _fun102444_ip = 0;;) switch (_fun102444_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.collapsed;
                var _closure2_slot0 = var10;
                var1 = var0.channel;
                var _closure2_slot1 = var1;
                var12 = var0.voiceStates;
                var11 = var0.audienceCount;
                var1 = var12.length;
                var6 = null;
                var8 = 0;
                var0 = null;
                if (!(var8 !== var1)) {
                    _fun102444_ip = 166;
                    continue _fun102444
                }
            case 51:
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.collapsed = var10;
                var9 = var12.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot9;
                    var2 = {};
                    var2.voiceState = var0;
                    var5 = _closure2_slot1;
                    var2.channel = var5;
                    var1 = _closure2_slot0;
                    var2.collapsed = var1;
                    var5 = 0;
                    var1 = arg1;
                    var1 = var5 === var1;
                    var2.isFirst = var1;
                    var1 = var0.user;
                    var7 = var1.id;
                    var0 = var0.voiceState;
                    var6 = var0.sessionId;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var1 = 'voice-user-item-';
                    var0 = '-';
                    var1 = var5.bind(var1)(var7, var0, var6);
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var9 = var9.bind(var12)(var5);
                var5 = new Array(2);
                var5[0] = var9;
                var6 = var6 != var11;
                if (!var6) {
                    _fun102444_ip = 123;
                    continue _fun102444
                }
            case 119:
                var6 = var11 > var8;
            case 123:
                if (!var6) {
                    _fun102444_ip = 152;
                    continue _fun102444
                }
            case 126:
                var9 = _closure1_slot5;
                var8 = _closure1_slot10;
                var7 = {};
                var7.audienceCount = var11;
                var7.collapsed = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 152:
                var5[1] = var6;
                var1.children = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 166:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0) { // Original name: getAudienceItemHeight, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.scaleTextLineHeight;
        var1 = _closure1_slot7;
        var0 = arg0;
        var3 = var2.bind(var3)(var1, var0);
        var0 = global;
        var2 = var0.Math;
        var1 = var2.max;
        var0 = 20;
        var1 = var1.bind(var2)(var0, var3);
        var0 = 8;
        var0 = var0 + var1;
        return var0;
    };
    var2.getAudienceItemHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1672, 33, 1297, 671, 8744, 8668, 566, 13301, 6937, 1234, 10551, 3895, 13305, 2]);