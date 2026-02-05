// modules/video_calls/native/components/ChannelVoiceChat.tsx
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useIsVoiceChatFocused;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'backgroundColor': null,
        'alignSelf': 'stretch'
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var12 = 'stretch';
    var3.chat = var9;
    var9 = {};
    var9.flex = var13;
    var3.flex = var9;
    var9 = {};
    var13 = 44;
    var9.height = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.chatHeaderSpacer = var9;
    var9 = {
        'flexDirection': 'row',
        'alignSelf': 'stretch',
        'height': 44,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'flex-start',
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'paddingHorizontal': 16
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.chatHeader = var9;
    var9 = {
        'width': 32,
        'height': 32,
        'alignItems': 'flex-start',
        'justifyContent': 'center'
    };
    var3.chatHeaderBackIconContainer = var9;
    var9 = {
        'alignSelf': 'stretch',
        'flex': 1,
        'justifyContent': 'center',
        'marginStart': 16
    };
    var3.chatHeaderTitleContainer = var9;
    var9 = {};
    var9.alignSelf = var12;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.safeAreaTop = var9;
    var9 = {};
    var9.alignSelf = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var3.safeAreaBottom = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun69732: for (var _fun69732_ip = 0;;) switch (_fun69732_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channel;
                var18 = var2.id;
                var _closure2_slot0 = var18;
                var19 = var2.guild_id;
                var _closure2_slot1 = var19;
                var4 = var1.channel;
                var17 = var1.inModal;
                var3 = undefined;
                if (!(var17 === var3)) {
                    _fun69732_ip = 47;
                    continue _fun69732
                }
            case 45:
                var17 = false;
            case 47:
                var1 = _closure1_slot8;
                var16 = var1.bind(var3)();
                var1 = _closure1_slot5;
                var23 = var1.bind(var3)();
                var5 = _closure1_slot3;
                var2 = var5.useEffect;
                var1 = new Array(2);
                var1[0] = var18;
                var1[1] = var19;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fetchMessages;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1.guildId = var5;
                    var4 = _closure2_slot0;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var5)(var0, var1);
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var15 = var0.top;
                var1 = _closure1_slot0;
                var0 = 8;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useVoiceChatNavigationContext;
                var0 = var0.bind(var1)();
                var8 = null;
                var1 = var8 == var0;
                var21 = undefined;
                if (var1) {
                    _fun69732_ip = 172;
                    continue _fun69732
                }
            case 166:
                var21 = var0.openVoice;
            case 172:
                if (!(var8 == var21)) {
                    _fun69732_ip = 202;
                    continue _fun69732
                }
            case 176:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var21 = var0.noop;
            case 202:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsConnectedToVoiceChannel;
                var14 = var0.bind(var1)(var4);
                var1 = _closure1_slot3;
                var0 = var1.useRef;
                var12 = var0.bind(var1)(var8);
                var1 = _closure1_slot1;
                var0 = 11;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var22 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = 'no-hide-descendants';
                if (!var23) {
                    _fun69732_ip = 292;
                    continue _fun69732
                }
            case 286:
                var4 = 'yes';
            case 292:
                var0.importantForAccessibility = var4;
                var4 = !var23;
                var0.accessibilityElementsHidden = var4;
                var4 = var16.chat;
                var0.style = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 12;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var20 = true;
                var4 = {
                    'absolute': true,
                    'tall': true
                };
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var5 = 13;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ChannelContainer;
                var5 = {};
                var5.guildId = var19;
                var5.channelId = var18;
                var9 = null;
                if (var17) {
                    _fun69732_ip = 488;
                    continue _fun69732
                }
            case 410:
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var24 = _closure1_slot2;
                var8 = 14;
                var8 = var24[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var23 = !var23;
                if (!var23) {
                    _fun69732_ip = 444;
                    continue _fun69732
                }
            case 442:
                var23 = undefined;
            case 444:
                var8.hidden = var23;
                var8.animated = var20;
                if (var14) {
                    _fun69732_ip = 471;
                    continue _fun69732
                }
            case 457:
                var14 = 'dark-content';
                var20 = 'dark';
                if (!(var20 === var22)) {
                    _fun69732_ip = 477;
                    continue _fun69732
                }
            case 471:
                var14 = 'light-content';
            case 477:
                var8.barStyle = var14;
                var9 = var11.bind(var3)(var10, var8);
            case 488:
                var8 = new Array(5);
                var8[0] = var9;
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                var9 = {};
                var20 = var16.safeAreaTop;
                var14 = new Array(2);
                var14[0] = var20;
                var20 = {};
                var20.height = var15;
                var22 = undefined;
                if (!var17) {
                    _fun69732_ip = 535;
                    continue _fun69732
                }
            case 531:
                var22 = 'none';
            case 535:
                var20.display = var22;
                var14[1] = var20;
                var9.style = var14;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                var9 = {};
                var20 = var16.chatHeaderSpacer;
                var14 = new Array(2);
                var14[0] = var20;
                var20 = {};
                var22 = undefined;
                if (!var17) {
                    _fun69732_ip = 592;
                    continue _fun69732
                }
            case 588:
                var22 = 'none';
            case 592:
                var20.display = var22;
                var14[1] = var20;
                var9.style = var14;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 15;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.guildId = var19;
                var9.channelId = var18;
                var9.chatInputRef = var12;
                var12 = 'voice-panel';
                var9.screenIndex = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[3] = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var9 = {};
                var14 = var16.chatHeader;
                var12 = new Array(2);
                var12[0] = var14;
                var14 = {};
                var14.top = var15;
                var15 = undefined;
                if (!var17) {
                    _fun69732_ip = 713;
                    continue _fun69732
                }
            case 709:
                var15 = 'none';
            case 713:
                var14.display = var15;
                var12[1] = var14;
                var9.style = var12;
                var15 = _closure1_slot6;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 16;
                var12 = var20[var12];
                var12 = var17.bind(var3)(var12);
                var14 = var12.PressableOpacity;
                var12 = {};
                var22 = 'button';
                var12.accessibilityRole = var22;
                var12.onPress = var21;
                var21 = 17;
                var22 = var20[var21];
                var22 = var17.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var20[var21];
                var21 = var17.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["13/7kX"];
                var21 = var22.bind(var23)(var21);
                var12.accessibilityLabel = var21;
                var21 = var16.chatHeaderBackIconContainer;
                var12.style = var21;
                var24 = _closure1_slot1;
                var23 = 18;
                var21 = var20[var23];
                var22 = var24.bind(var3)(var21);
                var21 = {};
                var25 = 19;
                var25 = var20[var25];
                var25 = var24.bind(var3)(var25);
                var21.source = var25;
                var23 = var20[var23];
                var23 = var24.bind(var3)(var23);
                var23 = var23.Sizes;
                var23 = var23.MEDIUM;
                var21.size = var23;
                var21 = var15.bind(var3)(var22, var21);
                var12.children = var21;
                var14 = var15.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var14 = _closure1_slot4;
                var13 = {};
                var16 = var16.chatHeaderTitleContainer;
                var13.style = var16;
                var16 = 20;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.ChannelTitle;
                var16 = {};
                var16.guildId = var19;
                var16.channelId = var18;
                var16 = var15.bind(var3)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[4] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelVoiceChat.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7904, 33, 1297, 671, 8468, 1568, 8018, 22, 7908, 3246, 8745, 8748, 7912, 9816, 4904, 1234, 4086, 9939, 11901, 2]);