// modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun67858: for (var _fun67858_ip = 0;;) switch (_fun67858_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.participant;
                var _closure2_slot0 = var18;
                var21 = var0.channel;
                var _closure2_slot1 = var21;
                var20 = var0.onGrantRequest;
                var12 = var0.onDenyRequest;
                var0 = _closure1_slot6;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var0 = 6;
                var0 = var17[var0];
                var0 = var14.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.analyticsLocations;
                var _closure2_slot2 = var0;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var13.participantItemContainer;
                var0.style = var4;
                var6 = _closure1_slot5;
                var15 = _closure1_slot0;
                var4 = 7;
                var4 = var17[var4];
                var4 = var15.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var7 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.user;
                    var4 = var4.id;
                    var1.userId = var4;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var4 = true;
                    var1.isVoiceContext = var4;
                    var3 = _closure2_slot2;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var7;
                var7 = var18.user;
                var7 = var7.username;
                var9 = new Array(2);
                var9[0] = var7;
                var22 = 9;
                var7 = var17[var22];
                var8 = var15.bind(var3)(var7);
                var7 = var8.participantMemberInfo;
                var7 = var7.bind(var8)(var18);
                var9[1] = var7;
                var8 = var9.join;
                var7 = ', ';
                var7 = var8.bind(var9)(var7);
                var4.accessibilityLabel = var7;
                var7 = 'button';
                var4.accessibilityRole = var7;
                var7 = var13.touchableContainer;
                var4.style = var7;
                var9 = _closure1_slot4;
                var8 = _closure1_slot3;
                var7 = {};
                var11 = var13.participantAvatarContainer;
                var7.style = var11;
                var16 = _closure1_slot4;
                var19 = 10;
                var11 = var17[var19];
                var14 = var14.bind(var3)(var11);
                var11 = {};
                var23 = var18.user;
                var11.user = var23;
                var21 = var21.guild_id;
                var11.guildId = var21;
                var19 = var17[var19];
                var19 = var15.bind(var3)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.NORMAL;
                var11.size = var19;
                var11 = var16.bind(var3)(var14, var11);
                var7.children = var11;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var11 = _closure1_slot5;
                var9 = _closure1_slot3;
                var8 = {};
                var14 = var13.participantNameplateContainer;
                var8.style = var14;
                var16 = _closure1_slot4;
                var14 = 11;
                var14 = var17[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.LegacyText;
                var14 = {};
                var19 = var13.participantNameplateText;
                var17 = new Array(2);
                var17[0] = var19;
                var19 = {};
                var24 = var18.member;
                var23 = null;
                var25 = var23 == var24;
                var21 = undefined;
                if (var25) {
                    _fun67858_ip = 413;
                    continue _fun67858
                }
            case 407:
                var21 = var24.colorString;
            case 413:
                if (!(var23 == var21)) {
                    _fun67858_ip = 428;
                    continue _fun67858
                }
            case 417:
                var23 = var13.participantNameplateText;
                var21 = var23.color;
            case 428:
                var19.color = var21;
                var17[1] = var19;
                var14.style = var17;
                var17 = 1;
                var14.numberOfLines = var17;
                var17 = var18.user;
                var17 = var17.username;
                var14.children = var17;
                var15 = var16.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var21 = _closure1_slot4;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = 12;
                var16 = var15[var16];
                var16 = var19.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var22 = var15[var22];
                var23 = var19.bind(var3)(var22);
                var22 = var23.participantMemberInfo;
                var22 = var22.bind(var23)(var18);
                var16.children = var22;
                var16 = var21.bind(var3)(var17, var16);
                var14[1] = var16;
                var8.children = var14;
                var8 = var11.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var13.participantActionContainer;
                var5.style = var8;
                var17 = _closure1_slot4;
                var14 = _closure1_slot1;
                var9 = 13;
                var8 = var15[var9];
                var11 = var14.bind(var3)(var8);
                var8 = {};
                var16 = 14;
                var21 = var15[var16];
                var21 = var19.bind(var3)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var15[var16];
                var21 = var19.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.f0T7hI;
                var21 = var22.bind(var23)(var21);
                var8.accessibilityLabel = var21;
                var21 = var13.participantActionIcon;
                var8.containerStyle = var21;
                var21 = 15;
                var21 = var15[var21];
                var21 = var14.bind(var3)(var21);
                var8.source = var21;
                var8.onPress = var20;
                var20 = var18.rtsState;
                var18 = 16;
                var18 = var15[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.RequestToSpeakStates;
                var18 = var18.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                var18 = var20 === var18;
                var8.disabled = var18;
                var11 = var17.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot4;
                var9 = var15[var9];
                var10 = var14.bind(var3)(var9);
                var9 = {};
                var17 = var15[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var15[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.moABMy;
                var16 = var17.bind(var18)(var16);
                var9.accessibilityLabel = var16;
                var13 = var13.participantActionIcon;
                var9.containerStyle = var13;
                var13 = 17;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var9.source = var13;
                var9.onPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var12 = 4;
    var3 = var5[var12];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingVertical': 4,
        'flexDirection': 'column',
        'minHeight': 288,
        'flex': 1
    };
    var3.container = var8;
    var8 = {
        'paddingVertical': 4,
        'flexDirection': 'column',
        'flex': 1
    };
    var3.listContainer = var8;
    var9 = 'center';
    var8 = {
        'padding': 12,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.participantItemContainer = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.touchableContainer = var8;
    var8 = {};
    var8.paddingLeft = var12;
    var3.participantAvatarContainer = var8;
    var8 = {
        'paddingHorizontal': 16,
        'flex': 1
    };
    var3.participantNameplateContainer = var8;
    var8 = {
        'fontSize': 16,
        'fontFamily': null,
        'marginTop': 0,
        'marginBottom': 0
    };
    var10 = var10.PRIMARY_SEMIBOLD;
    var8.fontFamily = var10;
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var12;
    var3.participantNameplateText = var8;
    var8 = {
        'flexDirection': 'row',
        'paddingRight': 4
    };
    var3.participantActionContainer = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var3.participantActionIcon = var8;
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.emptyContainer = var8;
    var8 = {
        'flex': 1,
        'height': 64
    };
    var3.emptyParticipant = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 16,
        'marginBottom': 8
    };
    var3.emptyTitle = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.emptyBody = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun67860: for (var _fun67860_ip = 0;;) switch (_fun67860_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channel;
                var _closure2_slot0 = var0;
                var8 = var1.height;
                var1 = _closure1_slot6;
                var4 = undefined;
                var13 = var1.bind(var4)();
                var _closure2_slot1 = var13;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useSortedRequestToSpeakParticipants;
                var0 = var0.id;
                var3 = var1.bind(var2)(var0);
                var _closure2_slot2 = var3;
                var1 = var3.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun67860_ip = 206;
                    continue _fun67860
                }
            case 87:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 22;
                var0 = var6[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var7 = var13.listContainer;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var7.height = var8;
                var6[1] = var7;
                var0.style = var6;
                var6 = 64;
                var0.itemSize = var6;
                var5 = function arg0, arg1() {
                    _fun67861: for (var _fun67861_ip = 0;;) switch (_fun67861_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var0 = arg1;
                            var0 = var3[var0];
                            var _closure3_slot0 = var0;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun67861_ip = 97;
                                continue _fun67861
                            }
                        case 26:
                            var5 = _closure1_slot4;
                            var4 = _closure1_slot7;
                            var3 = {};
                            var3.participant = var0;
                            var6 = _closure2_slot0;
                            var3.channel = var6;
                            var6 = function() {
                                var1 = _closure3_slot0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 19;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.setUserSuppress;
                                var3 = _closure2_slot0;
                                var1 = var1.user;
                                var2 = var1.id;
                                var1 = false;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var3.onGrantRequest = var6;
                            var2 = function() {
                                var1 = _closure3_slot0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 19;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.setUserSuppress;
                                var3 = _closure2_slot0;
                                var1 = var1.user;
                                var2 = var1.id;
                                var1 = true;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var3.onDenyRequest = var2;
                            var0 = var0.user;
                            var2 = var0.id;
                            var0 = undefined;
                            var0 = var5.bind(var0)(var4, var3, var2);
                            _fun67861_ip = 132;
                            continue _fun67861;
                        case 97:
                            var4 = _closure1_slot4;
                            var3 = _closure1_slot3;
                            var2 = {};
                            var1 = _closure2_slot1;
                            var1 = var1.emptyParticipant;
                            var2.style = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 132:
                            return var0;
                    }
                };
                var0.renderItem = var5;
                var5 = 'always';
                var0.keyboardShouldPersistTaps = var5;
                var5 = var3.length;
                var3 = 1;
                var5 = var5 + var3;
                var3 = new Array(1);
                var3[0] = var5;
                var0.sections = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun67860_ip = 539;
                continue _fun67860;
            case 206:
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var13.container;
                var1.style = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var13.emptyContainer;
                var5.style = var8;
                var11 = _closure1_slot4;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 20;
                var8 = var16[var8];
                var9 = var14.bind(var4)(var8);
                var8 = {};
                var12 = 21;
                var12 = var16[var12];
                var12 = var14.bind(var4)(var12);
                var8.source = var12;
                var9 = var11.bind(var4)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var17 = _closure1_slot4;
                var15 = _closure1_slot0;
                var9 = 12;
                var11 = var16[var9];
                var11 = var15.bind(var4)(var11);
                var14 = var11.Text;
                var11 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var13.emptyTitle;
                var11.style = var12;
                var12 = 14;
                var18 = var16[var12];
                var18 = var15.bind(var4)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var16[var12];
                var18 = var15.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18["7R24mX"];
                var18 = var19.bind(var20)(var18);
                var11.children = var18;
                var11 = var17.bind(var4)(var14, var11);
                var8[1] = var11;
                var11 = _closure1_slot4;
                var9 = var16[var9];
                var9 = var15.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var13 = var13.emptyBody;
                var9.style = var13;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.Rpr2s0;
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 539:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 5721, 4897, 7345, 8423, 5447, 4871, 3932, 8424, 1234, 8425, 4234, 5318, 8405, 5911, 4699, 8426, 6451, 2]);