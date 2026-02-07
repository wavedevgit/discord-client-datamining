// modules/routing/native/RouteManagerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.matchPath;
        var1 = {
            'path': null,
            'strict': false,
            'exact': false
        };
        var0 = arg1;
        var1.path = var0;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var4 = function arg0() {
        _fun92025: for (var _fun92025_ip = 0;;) switch (_fun92025_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot17;
                var2 = var7.pathname;
                var0 = _closure1_slot16;
                var6 = undefined;
                var8 = var3.bind(var6)(var2, var0);
                var2 = null;
                var3 = var2 == var8;
                var0 = undefined;
                if (var3) {
                    _fun92025_ip = 45;
                    continue _fun92025
                }
            case 39:
                var0 = var8.params;
            case 45:
                if (!(var2 == var0)) {
                    _fun92025_ip = 51;
                    continue _fun92025
                }
            case 49:
                var0 = {};
            case 51:
                var4 = var0.voiceChannelId;
                var3 = var0.voiceGuildId;
                var2 = var0.voiceMessageId;
                var0 = {};
                var5 = _closure1_slot20;
                var1 = {};
                var1.match = var8;
                var1.location = var7;
                var9 = var5.bind(var6)(var1);
                var10 = var0;
                var1 = copyDataProperties(var10, var9);
                var1 = 'voiceChannelId';
                var0[var1] = var4;
                var1 = 'voiceGuildId';
                var0[var1] = var3;
                var1 = 'voiceMessageId';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot18 = var4;
    var0 = function arg0() {
        _fun92026: for (var _fun92026_ip = 0;;) switch (_fun92026_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot7;
                var1 = var2.getChannel;
                var4 = _closure1_slot10;
                var0 = var4.getLastSelectedChannelId;
                var0 = var0.bind(var4)();
                var1 = var1.bind(var2)(var0);
                var4 = null;
                var5 = var4 == var1;
                var2 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun92026_ip = 52;
                    continue _fun92026
                }
            case 47:
                var0 = var1.type;
            case 52:
                if (!(var4 != var0)) {
                    _fun92026_ip = 82;
                    continue _fun92026
                }
            case 56:
                var5 = _closure1_slot6;
                var7 = var4 == var1;
                var0 = undefined;
                if (var7) {
                    _fun92026_ip = 74;
                    continue _fun92026
                }
            case 69:
                var0 = var1.type;
            case 74:
                var0 = var5.bind(var2)(var0);
                if (var0) {
                    _fun92026_ip = 137;
                    continue _fun92026
                }
            case 82:
                var5 = _closure1_slot10;
                var0 = var5.getMostRecentSelectedTextChannelId;
                var0 = var0.bind(var5)(var6);
                if (!(var4 == var0)) {
                    _fun92026_ip = 135;
                    continue _fun92026
                }
            case 103:
                var5 = _closure1_slot9;
                var3 = var5.getDefaultChannel;
                var3 = var3.bind(var5)(var6);
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun92026_ip = 132;
                    continue _fun92026
                }
            case 127:
                var2 = var3.id;
            case 132:
                var0 = var2;
            case 135:
                _fun92026_ip = 142;
                continue _fun92026;
            case 137:
                var0 = var1.id;
            case 142:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var1 = function arg0() {
        _fun92027: for (var _fun92027_ip = 0;;) switch (_fun92027_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.match;
                var1 = var1.location;
                var4 = null;
                if (!(var4 != var0)) {
                    _fun92027_ip = 263;
                    continue _fun92027
                }
            case 23:
                var0 = var0.params;
                var7 = var0.guildId;
                var5 = var0.channelId;
                var3 = var0.messageId;
                var2 = var1.jumpType;
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var10 = 22;
                var0 = var0[var10];
                var8 = undefined;
                var0 = var9.bind(var8)(var0);
                var0 = var0.JumpTypes;
                var0 = var0.INSTANT;
                if (!(var2 !== var0)) {
                    _fun92027_ip = 122;
                    continue _fun92027
                }
            case 91:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var10];
                var0 = var2.bind(var8)(var0);
                var0 = var0.JumpTypes;
                var2 = var0.ANIMATED;
                _fun92027_ip = 151;
                continue _fun92027;
            case 122:
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var10];
                var0 = var9.bind(var8)(var0);
                var0 = var0.JumpTypes;
                var2 = var0.INSTANT;
            case 151:
                var0 = {};
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var9 = 10;
                var10 = var10[var9];
                var11 = var11.bind(var8)(var10);
                var10 = var11.isValidGuildId;
                var10 = var10.bind(var11)(var7);
                if (var10) {
                    _fun92027_ip = 191;
                    continue _fun92027
                }
            case 187:
                var7 = _closure1_slot11;
            case 191:
                var0.guildId = var7;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var7 = var7.bind(var8)(var6);
                var6 = var7.isValidChannelId;
                var6 = var6.bind(var7)(var5);
                var4 = null;
                if (!var6) {
                    _fun92027_ip = 231;
                    continue _fun92027
                }
            case 228:
                var4 = var5;
            case 231:
                var0.channelId = var4;
                var0.messageId = var3;
                var0.jumpType = var2;
                var1 = var1.preserveDrawerState;
                var1 = !var1;
                var1 = !var1;
                var0.preserveDrawerState = var1;
                return var0;
            case 263:
                var0 = {
                    'guildId': null,
                    'channelId': null,
                    'messageId': null,
                    'jumpType': null,
                    'preserveDrawerState': false
                };
                var2 = _closure1_slot11;
                var0.guildId = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.JumpTypes;
                var1 = var1.ANIMATED;
                var0.jumpType = var1;
                return var0;
        }
    };
    var _closure1_slot20 = var1;
    var0 = ['channelId', 'guildId'];
    var _closure1_slot3 = var0;
    var6 = global;
    var11 = var6.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var15 = true;
    var5.value = var15;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var9.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.setVoiceChatDrawerState;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.isGuildSelectableChannelType;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var10 = var5.ME;
    var _closure1_slot11 = var10;
    var13 = var5.Routes;
    var _closure1_slot12 = var13;
    var5 = var5.ChannelTypes;
    var _closure1_slot13 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.VoiceChatDrawerState;
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var8[var5];
    var10 = var9.bind(var0)(var5);
    var5 = var10.prototype;
    var9 = Object.create(var5, {
        constructor: {
            value: var10
        }
    });
    var18 = 'RouteUtils';
    var19 = var9;
    var5 = new var19[var10](var18, var17);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot15 = var5;
    var12 = var13.CHANNEL;
    var9 = 10;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var10 = var5.RouteParam;
    var5 = var10.guildId;
    var11 = var5.bind(var10)();
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var14 = var5.RouteParam;
    var10 = var14.channelId;
    var5 = {};
    var5.optional = var15;
    var10 = var10.bind(var14)(var5);
    var5 = ':messageId?';
    var5 = var12.bind(var13)(var11, var10, var5);
    var12 = var13.VOICE_CHAT_CHANNEL_PARTIAL;
    var10 = var8[var9];
    var10 = var7.bind(var0)(var10);
    var14 = var10.RouteParam;
    var11 = var14.guildId;
    var10 = {};
    var15 = 'voiceGuildId';
    var10.name = var15;
    var11 = var11.bind(var14)(var10);
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var14 = var9.RouteParam;
    var10 = var14.channelId;
    var9 = {};
    var15 = 'voiceChannelId';
    var9.name = var15;
    var10 = var10.bind(var14)(var9);
    var9 = ':voiceMessageId?';
    var10 = var12.bind(var13)(var11, var10, var9);
    var6 = var6.HermesInternal;
    var9 = var6.concat;
    var6 = '';
    var9 = var9.bind(var6)(var5, var10);
    var6 = new Array(2);
    var6[0] = var9;
    var6[1] = var5;
    var _closure1_slot16 = var6;
    var6 = 23;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/routing/native/RouteManagerUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.MAIN_DRAWER_ROUTES = var5;
    var2.extractParamsFromVoiceModalRoute = var4;
    var4 = function arg0() {
        var8 = arg0;
        var0 = _closure1_slot8;
        var4 = var0.lastNonVoiceRoute;
        var3 = _closure1_slot15;
        var2 = var3.log;
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var0 = 'popVoiceRoute: last non-voice route is ';
        var0 = var5.bind(var0)(var4);
        var0 = var2.bind(var3)(var0);
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 12;
        var2 = var3[var0];
        var0 = undefined;
        var7 = var5.bind(var0)(var2);
        var6 = var7.selectChannel;
        var2 = {};
        var2.guildId = var8;
        var5 = _closure1_slot19;
        var5 = var5.bind(var0)(var8);
        var2.channelId = var5;
        var5 = true;
        var2.preserveDrawerState = var5;
        var2 = var6.bind(var7)(var2);
        var2 = _closure1_slot0;
        var1 = 13;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.transitionTo;
        var1 = {};
        var1.preserveDrawerState = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.popVoiceRoute = var4;
    var4 = function arg0, arg1() {
        _fun92029: for (var _fun92029_ip = 0;;) switch (_fun92029_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = _closure1_slot8;
                var13 = var0.defaultRoute;
                var3 = _closure1_slot17;
                var2 = _closure1_slot16;
                var0 = undefined;
                var6 = var3.bind(var0)(var13, var2);
                var3 = null;
                var7 = var3 == var6;
                var2 = undefined;
                if (var7) {
                    _fun92029_ip = 52;
                    continue _fun92029
                }
            case 46:
                var2 = var6.params;
            case 52:
                if (!(var3 == var2)) {
                    _fun92029_ip = 58;
                    continue _fun92029
                }
            case 56:
                var2 = {};
            case 58:
                var10 = var2.voiceChannelId;
                var7 = _closure1_slot15;
                var6 = var7.log;
                var2 = global;
                var3 = var2.HermesInternal;
                var12 = var3.concat;
                var21 = 'transitionToVoiceRoute(<';
                var19 = '>, <';
                var17 = '>), current route ';
                var15 = ' has voiceChannelId ';
                var20 = var5;
                var18 = var4;
                var16 = var13;
                var14 = var10;
                var3 = var21[var12](var20, var19, var18, var17, var16, var15, var14, var13);
                var3 = var6.bind(var7)(var3);
                if (!(var10 === var4)) {
                    _fun92029_ip = 190;
                    continue _fun92029
                }
            case 135:
                var6 = _closure1_slot15;
                var3 = var6.log;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var21 = 'transitionToVoiceRoute -> ';
                var19 = ' === ';
                var17 = '. staying where we are';
                var20 = var10;
                var18 = var4;
                var2 = var21[var9](var20, var19, var18, var17, var16);
                var2 = var3.bind(var6)(var2);
                _fun92029_ip = 243;
                continue _fun92029;
            case 190:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.transitionToGuild;
                var1 = {};
                var6 = true;
                var1.preserveDrawerState = var6;
                var21 = var3;
                var20 = var5;
                var19 = var4;
                var18 = undefined;
                var17 = var1;
                var1 = var21[var2](var20, var19, var18, var17, var16);
            case 243:
                return var0;
        }
    };
    var2.transitionToVoiceRoute = var4;
    var4 = function arg0() {
        _fun92030: for (var _fun92030_ip = 0;;) switch (_fun92030_ip) {
            case 0:
                var6 = arg0;
                var2 = var6.state;
                var1 = _closure1_slot20;
                var0 = {};
                var7 = _closure1_slot17;
                var5 = var6.pathname;
                var3 = _closure1_slot16;
                var9 = undefined;
                var3 = var7.bind(var9)(var5, var3);
                var0.match = var3;
                var0.location = var6;
                var3 = var1.bind(var9)(var0);
                var8 = var3.channelId;
                var5 = var3.guildId;
                var1 = _closure1_slot4;
                var0 = _closure1_slot3;
                var3 = var1.bind(var9)(var3, var0);
                var1 = _closure1_slot7;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var8);
                var7 = null;
                var10 = var7 == var8;
                var0 = null;
                if (var10) {
                    _fun92030_ip = 202;
                    continue _fun92030
                }
            case 102:
                var10 = var7 == var5;
                var0 = null;
                if (var10) {
                    _fun92030_ip = 202;
                    continue _fun92030
                }
            case 111:
                var10 = var7 == var1;
                var11 = undefined;
                if (var10) {
                    _fun92030_ip = 125;
                    continue _fun92030
                }
            case 120:
                var11 = var1.type;
            case 125:
                var10 = _closure1_slot13;
                var10 = var10.GUILD_VOICE;
                if (!(var11 !== var10)) {
                    _fun92030_ip = 169;
                    continue _fun92030
                }
            case 139:
                var10 = var7 == var1;
                var9 = undefined;
                if (var10) {
                    _fun92030_ip = 153;
                    continue _fun92030
                }
            case 148:
                var9 = var1.type;
            case 153:
                var1 = _closure1_slot13;
                var1 = var1.GUILD_STAGE_VOICE;
                var0 = null;
                if (!(var9 === var1)) {
                    _fun92030_ip = 202;
                    continue _fun92030
                }
            case 169:
                var1 = {};
                var14 = var1;
                var13 = var3;
                var3 = copyDataProperties(var14, var13);
                var3 = 'channelId';
                var1[var3] = var8;
                var3 = 'guildId';
                var1[var3] = var5;
                var0 = var1;
            case 202:
                if (!(var7 == var0)) {
                    _fun92030_ip = 208;
                    continue _fun92030
                }
            case 206:
                return var7;
            case 208:
                var1 = _closure1_slot15;
                if (!(var7 != var1)) {
                    _fun92030_ip = 271;
                    continue _fun92030
                }
            case 216:
                var5 = _closure1_slot15;
                var3 = var5.log;
                var1 = global;
                var9 = var1.JSON;
                var8 = var9.stringify;
                var9 = var8.bind(var9)(var0);
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var1 = 'voiceRouteRewriter: has voiceChannelParams = ';
                var1 = var8.bind(var1)(var9);
                var1 = var3.bind(var5)(var1);
            case 271:
                var1 = _closure1_slot8;
                var8 = var1.lastNonVoiceRoute;
                var9 = _closure1_slot12;
                var5 = var9.VOICE_CHAT_CHANNEL_PARTIAL;
                var3 = var0.guildId;
                var1 = var0.channelId;
                var0 = var0.messageId;
                var5 = var5.bind(var9)(var3, var1, var0);
                var1 = global;
                var0 = var1.HermesInternal;
                var3 = var0.concat;
                var0 = '';
                var3 = var3.bind(var0)(var8, var5);
                var5 = var6.pathname;
                var0 = null;
                if (!(var3 !== var5)) {
                    _fun92030_ip = 420;
                    continue _fun92030
                }
            case 348:
                var5 = _closure1_slot15;
                if (!(var7 != var5)) {
                    _fun92030_ip = 406;
                    continue _fun92030
                }
            case 356:
                var5 = _closure1_slot15;
                var4 = var5.log;
                var8 = var6.pathname;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = 'voiceRouteRewriter: rewriting route: ';
                var1 = ' -> ';
                var1 = var7.bind(var6)(var8, var1, var3);
                var1 = var4.bind(var5)(var1);
            case 406:
                var1 = {};
                var1.path = var3;
                var1.state = var2;
                var0 = var1;
            case 420:
                return var0;
        }
    };
    var2.voiceRouteRewriter = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.saveLastRoute;
        var1 = arg0;
        var1 = var1.pathname;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.saveLastRouteListener = var4;
    var4 = function arg0() {
        _fun92032: for (var _fun92032_ip = 0;;) switch (_fun92032_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot17;
                var2 = var6.pathname;
                var1 = _closure1_slot16;
                var0 = undefined;
                var7 = var3.bind(var0)(var2, var1);
                var5 = _closure1_slot7;
                var3 = var5.getChannel;
                var2 = null;
                var8 = var2 == var7;
                var1 = undefined;
                if (var8) {
                    _fun92032_ip = 59;
                    continue _fun92032
                }
            case 48:
                var8 = var7.params;
                var1 = var8.channelId;
            case 59:
                var3 = var3.bind(var5)(var1);
                var1 = var2 == var3;
                var8 = undefined;
                if (var1) {
                    _fun92032_ip = 78;
                    continue _fun92032
                }
            case 73:
                var8 = var3.type;
            case 78:
                var1 = _closure1_slot13;
                var5 = var1.GUILD_VOICE;
                var1 = null;
                if (!(var8 !== var5)) {
                    _fun92032_ip = 144;
                    continue _fun92032
                }
            case 94:
                var8 = var2 == var3;
                var5 = undefined;
                if (var8) {
                    _fun92032_ip = 108;
                    continue _fun92032
                }
            case 103:
                var5 = var3.type;
            case 108:
                var3 = _closure1_slot13;
                var3 = var3.GUILD_STAGE_VOICE;
                var1 = null;
                if (!(var5 !== var3)) {
                    _fun92032_ip = 144;
                    continue _fun92032
                }
            case 124:
                var5 = _closure1_slot20;
                var3 = {};
                var3.match = var7;
                var3.location = var6;
                var1 = var5.bind(var0)(var3);
            case 144:
                if (!(var2 != var1)) {
                    _fun92032_ip = 205;
                    continue _fun92032
                }
            case 148:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.saveLastNonVoiceRoute;
                var6 = _closure1_slot12;
                var5 = var6.CHANNEL;
                var4 = var1.guildId;
                var1 = var1.channelId;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
            case 205:
                return var0;
        }
    };
    var2.saveLastNonVoiceRouteListener = var4;
    var3 = function arg0() {
        _fun92033: for (var _fun92033_ip = 0;;) switch (_fun92033_ip) {
            case 0:
                var13 = arg0;
                var1 = _closure1_slot18;
                var2 = undefined;
                var1 = var1.bind(var2)(var13);
                var9 = null;
                if (!(var9 == var1)) {
                    _fun92033_ip = 27;
                    continue _fun92033
                }
            case 25:
                var1 = {};
            case 27:
                var7 = var1.guildId;
                var6 = var1.channelId;
                var5 = var1.messageId;
                var4 = var1.jumpType;
                var17 = var1.voiceChannelId;
                var16 = var1.voiceGuildId;
                var15 = var1.voiceMessageId;
                var3 = var1.preserveDrawerState;
                if (!(var9 == var17)) {
                    _fun92033_ip = 83;
                    continue _fun92033
                }
            case 76:
                if (!(var9 != var16)) {
                    _fun92033_ip = 862;
                    continue _fun92033
                }
            case 83:
                var10 = _closure1_slot7;
                var1 = var10.getChannel;
                var1 = var1.bind(var10)(var17);
                var _closure2_slot0 = var1;
                var10 = var9 == var1;
                var11 = undefined;
                if (var10) {
                    _fun92033_ip = 115;
                    continue _fun92033
                }
            case 110:
                var11 = var1.type;
            case 115:
                var10 = _closure1_slot13;
                var10 = var10.GUILD_VOICE;
                if (!(var11 !== var10)) {
                    _fun92033_ip = 333;
                    continue _fun92033
                }
            case 132:
                var10 = var9 == var1;
                var11 = undefined;
                if (var10) {
                    _fun92033_ip = 146;
                    continue _fun92033
                }
            case 141:
                var11 = var1.type;
            case 146:
                var10 = _closure1_slot13;
                var10 = var10.GUILD_STAGE_VOICE;
                if (!(var11 !== var10)) {
                    _fun92033_ip = 333;
                    continue _fun92033
                }
            case 163:
                var10 = _closure1_slot15;
                if (!(var9 != var10)) {
                    _fun92033_ip = 860;
                    continue _fun92033
                }
            case 174:
                var12 = _closure1_slot15;
                var11 = var12.log;
                var10 = var9 == var1;
                var23 = undefined;
                if (var10) {
                    _fun92033_ip = 197;
                    continue _fun92033
                }
            case 192:
                var23 = var1.id;
            case 197:
                var10 = global;
                var18 = var10.JSON;
                var14 = var18.stringify;
                var27 = var14.bind(var18)(var13);
                var19 = var10.JSON;
                var18 = var19.stringify;
                var14 = {};
                var14.guildId = var7;
                var14.channelId = var6;
                var14.messageId = var5;
                var14.jumpType = var4;
                var14.preserveDrawerState = var3;
                var14.voiceChannelId = var17;
                var14.voiceGuildId = var16;
                var14.voiceMessageId = var15;
                var25 = var18.bind(var19)(var14);
                var10 = var10.HermesInternal;
                var20 = var10.concat;
                var32 = 'UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id ';
                var30 = ' (voiceChannelId ';
                var28 = ') is not a voice channel! and yet RouteUtils thinks it is! ';
                var10 = ' ';
                var31 = var23;
                var29 = var17;
                var26 = var10;
                var24 = var10;
                var10 = var32[var20](var31, var30, var29, var28, var27, var26, var25, var24, var23);
                var10 = var11.bind(var12)(var10);
                _fun92033_ip = 860;
                continue _fun92033;
            case 333:
                var10 = _closure1_slot15;
                if (!(var9 != var10)) {
                    _fun92033_ip = 470;
                    continue _fun92033
                }
            case 344:
                var12 = _closure1_slot15;
                var11 = var12.verbose;
                var10 = global;
                var18 = var10.JSON;
                var14 = var18.stringify;
                var20 = var14.bind(var18)(var13);
                var19 = var10.JSON;
                var18 = var19.stringify;
                var14 = {};
                var14.guildId = var7;
                var14.channelId = var6;
                var14.messageId = var5;
                var14.jumpType = var4;
                var14.preserveDrawerState = var3;
                var14.voiceChannelId = var17;
                var14.voiceGuildId = var16;
                var14.voiceMessageId = var15;
                var29 = var18.bind(var19)(var14);
                var10 = var10.HermesInternal;
                var18 = var10.concat;
                var32 = 'UpdateSelectedChannelListener -> voice route present! ';
                var10 = ' ';
                var31 = var20;
                var30 = var10;
                var28 = var10;
                var10 = var32[var18](var31, var30, var29, var28, var27);
                var10 = var11.bind(var12)(var10);
            case 470:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 18;
                var10 = var12[var10];
                var11 = var11.bind(var2)(var10);
                var10 = var11.isVoicePanelEnabled;
                var10 = var10.bind(var11)(var1);
                if (var10) {
                    _fun92033_ip = 584;
                    continue _fun92033
                }
            case 504:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 17;
                var10 = var12[var10];
                var14 = var11.bind(var2)(var10);
                var10 = var14.selectGuild;
                var10 = var10.bind(var14)(var16);
                var10 = 12;
                var10 = var12[var10];
                var12 = var11.bind(var2)(var10);
                var11 = var12.selectChannel;
                var10 = {};
                var10.guildId = var16;
                var10.channelId = var17;
                var10.messageId = var15;
                var10.jumpType = var4;
                var14 = true;
                var10.preserveDrawerState = var14;
                var10 = var11.bind(var12)(var10);
            case 584:
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var10 = 19;
                var10 = var11[var10];
                var14 = var18.bind(var2)(var10);
                var12 = var14.isModalOpen;
                var10 = 16;
                var11 = var11[var10];
                var19 = var18.bind(var2)(var11);
                var18 = var19.getVoiceChannelKey;
                var11 = var1.id;
                var11 = var18.bind(var19)(var11);
                var11 = var12.bind(var14)(var11);
                if (var11) {
                    _fun92033_ip = 736;
                    continue _fun92033
                }
            case 646:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var14 = 15;
                var14 = var12[var14];
                var18 = var11.bind(var2)(var14);
                var14 = var18.popAboveKey;
                var19 = _closure1_slot0;
                var10 = var12[var10];
                var20 = var19.bind(var2)(var10);
                var19 = var20.getVoiceChannelKey;
                var10 = var1.id;
                var10 = var19.bind(var20)(var10);
                var10 = var14.bind(var18)(var10);
                var10 = 20;
                var10 = var12[var10];
                var11 = var11.bind(var2)(var10);
                var10 = var11.wait;
                var8 = function() { // Environment: var8
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openGuildVoiceModal;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var10.bind(var11)(var8);
            case 736:
                var8 = var1.isGuildVoice;
                var8 = var8.bind(var1)();
                if (!var8) {
                    _fun92033_ip = 753;
                    continue _fun92033
                }
            case 749:
                var8 = var9 != var15;
            case 753:
                if (var8) {
                    _fun92033_ip = 766;
                    continue _fun92033
                }
            case 756:
                var10 = var1.isGuildStageVoice;
                var8 = var10.bind(var1)();
            case 766:
                if (!var8) {
                    _fun92033_ip = 860;
                    continue _fun92033
                }
            case 769:
                var10 = _closure1_slot5;
                var8 = var1.id;
                var1 = _closure1_slot14;
                var1 = var1.OPEN;
                var1 = var10.bind(var2)(var8, var1);
                var1 = var9 != var16;
                if (!var1) {
                    _fun92033_ip = 805;
                    continue _fun92033
                }
            case 801:
                var1 = var9 != var17;
            case 805:
                if (!var1) {
                    _fun92033_ip = 812;
                    continue _fun92033
                }
            case 808:
                var1 = var9 != var15;
            case 812:
                if (!var1) {
                    _fun92033_ip = 860;
                    continue _fun92033
                }
            case 815:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 21;
                var1 = var10[var1];
                var8 = var8.bind(var2)(var1);
                var1 = var8.jumpToVoiceChannelMessage;
                var32 = var8;
                var31 = var16;
                var30 = var17;
                var29 = var15;
                var28 = var4;
                var1 = var32[var1](var31, var30, var29, var28, var27);
            case 860:
                return var2;
            case 862:
                var1 = _closure1_slot15;
                if (!(var9 != var1)) {
                    _fun92033_ip = 999;
                    continue _fun92033
                }
            case 873:
                var10 = _closure1_slot15;
                var8 = var10.verbose;
                var1 = global;
                var12 = var1.JSON;
                var11 = var12.stringify;
                var14 = var11.bind(var12)(var13);
                var13 = var1.JSON;
                var12 = var13.stringify;
                var11 = {};
                var11.guildId = var7;
                var11.channelId = var6;
                var11.messageId = var5;
                var11.jumpType = var4;
                var11.preserveDrawerState = var3;
                var11.voiceChannelId = var17;
                var11.voiceGuildId = var16;
                var11.voiceMessageId = var15;
                var29 = var12.bind(var13)(var11);
                var1 = var1.HermesInternal;
                var12 = var1.concat;
                var32 = 'UpdateSelectedChannelListener -> no voice route present in ';
                var1 = ' ';
                var31 = var14;
                var30 = var1;
                var28 = var1;
                var1 = var32[var12](var31, var30, var29, var28, var27);
                var1 = var8.bind(var10)(var1);
            case 999:
                var8 = _closure1_slot10;
                var1 = var8.getLastSelectedChannelId;
                var10 = var1.bind(var8)();
                var8 = _closure1_slot7;
                var1 = var8.getChannel;
                var1 = var1.bind(var8)(var10);
                var8 = var9 != var1;
                if (!var8) {
                    _fun92033_ip = 1044;
                    continue _fun92033
                }
            case 1034:
                var10 = var1.isGuildVoice;
                var8 = var10.bind(var1)();
            case 1044:
                if (var8) {
                    _fun92033_ip = 1067;
                    continue _fun92033
                }
            case 1047:
                var9 = var9 != var1;
                if (!var9) {
                    _fun92033_ip = 1064;
                    continue _fun92033
                }
            case 1054:
                var10 = var1.isGuildStageVoice;
                var9 = var10.bind(var1)();
            case 1064:
                var8 = var9;
            case 1067:
                if (!var8) {
                    _fun92033_ip = 1133;
                    continue _fun92033
                }
            case 1070:
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 15;
                var8 = var12[var8];
                var9 = var9.bind(var2)(var8);
                var8 = var9.popWithKey;
                var11 = _closure1_slot0;
                var10 = 16;
                var10 = var12[var10];
                var11 = var11.bind(var2)(var10);
                var10 = var11.getVoiceChannelKey;
                var1 = var1.id;
                var1 = var10.bind(var11)(var1);
                var1 = var8.bind(var9)(var1);
            case 1133:
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 17;
                var0 = var8[var0];
                var9 = var1.bind(var2)(var0);
                var0 = var9.selectGuild;
                var0 = var0.bind(var9)(var7);
                var0 = 12;
                var0 = var8[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.selectChannel;
                var0 = {};
                var0.guildId = var7;
                var0.channelId = var6;
                var0.messageId = var5;
                var0.jumpType = var4;
                var0.preserveDrawerState = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.updateSelectedChannelListener = var3;
    var2.extractParams = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 7953, 1376, 1372, 3218, 1673, 1672, 660, 7954, 3, 3229, 11957, 4231, 1220, 11962, 4561, 7947, 4679, 7951, 3920, 806, 7949, 4253, 2]);