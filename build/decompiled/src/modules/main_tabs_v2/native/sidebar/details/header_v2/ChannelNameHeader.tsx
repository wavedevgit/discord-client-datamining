// modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx
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
        _fun107593: for (var _fun107593_ip = 0;;) switch (_fun107593_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.channel;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot15;
                var4 = undefined;
                var5 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var6 = var3[var1];
                var9 = var2.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getUser;
                    var3 = _closure2_slot0;
                    var0 = var3.getRecipientId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var8.bind(var9)(var7, var6);
                var _closure2_slot1 = var11;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var3 = var6.useStateFromStoresObject;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    _fun107595: for (var _fun107595_ip = 0;;) switch (_fun107595_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun107595_ip = 45;
                                continue _fun107595
                            }
                        case 18:
                            var6 = _closure1_slot8;
                            var5 = var6.isMobileOnline;
                            var4 = _closure2_slot1;
                            var4 = var4.id;
                            var1 = var5.bind(var6)(var4);
                        case 45:
                            var0.isMobileOnline = var1;
                            var1 = _closure2_slot1;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun107595_ip = 88;
                                continue _fun107595
                            }
                        case 61:
                            var6 = _closure1_slot8;
                            var5 = var6.isVROnline;
                            var4 = _closure2_slot1;
                            var4 = var4.id;
                            var1 = var5.bind(var6)(var4);
                        case 88:
                            var0.isVROnline = var1;
                            var1 = _closure2_slot1;
                            if (!(var3 == var1)) {
                                _fun107595_ip = 116;
                                continue _fun107595
                            }
                        case 101:
                            var1 = _closure1_slot11;
                            var1 = var1.UNKNOWN;
                            _fun107595_ip = 143;
                            continue _fun107595;
                        case 116:
                            var4 = _closure1_slot8;
                            var3 = var4.getStatus;
                            var2 = _closure2_slot1;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 143:
                            var0.status = var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var6)(var2, var0, var1);
                var7 = var0.isMobileOnline;
                var6 = var0.isVROnline;
                var9 = var0.status;
                var8 = null;
                var1 = var8 == var11;
                var0 = null;
                if (var1) {
                    _fun107593_ip = 288;
                    continue _fun107593
                }
            case 161:
                var3 = _closure1_slot12;
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 12;
                var1 = var13[var10];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var14 = var11.avatarDecoration;
                var1.avatarDecoration = var14;
                var1.user = var11;
                var1.guildId = var4;
                var12 = _closure1_slot0;
                var10 = var13[var10];
                var10 = var12.bind(var4)(var10);
                var10 = var10.AvatarSizes;
                var10 = var10.NORMAL;
                var1.size = var10;
                if (!(var8 != var11)) {
                    _fun107593_ip = 254;
                    continue _fun107593
                }
            case 239:
                var10 = var11.isSystemUser;
                var10 = var10.bind(var11)();
                var8 = null;
                if (var10) {
                    _fun107593_ip = 257;
                    continue _fun107593
                }
            case 254:
                var8 = var9;
            case 257:
                var1.status = var8;
                var1.isMobileOnline = var7;
                var1.isVROnline = var6;
                var5 = var5.statusStyle;
                var1.statusStyle = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 288:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun107596: for (var _fun107596_ip = 0;;) switch (_fun107596_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.channel;
                var _closure2_slot0 = var14;
                var1 = _closure1_slot15;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var _closure2_slot1 = var10;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 13;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var13 = var1.bind(var3)(var14);
                var4 = _closure1_slot0;
                var2 = 11;
                var1 = var5[var2];
                var11 = var4.bind(var3)(var1);
                var9 = var11.useStateFromStores;
                var1 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var1;
                var6 = new Array(1);
                var6[0] = var14;
                var1 = function() { // Environment: var0
                    _fun107597: for (var _fun107597_ip = 0;;) switch (_fun107597_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.isThread;
                            var2 = var0.bind(var2)();
                            var0 = null;
                            if (!var2) {
                                _fun107597_ip = 49;
                                continue _fun107597
                            }
                        case 22:
                            var3 = _closure1_slot5;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot0;
                            var1 = var1.parent_id;
                            var0 = var2.bind(var3)(var1);
                        case 49:
                            return var0;
                    }
                };
                var7 = var9.bind(var11)(var7, var1, var6);
                var _closure2_slot2 = var7;
                var1 = var5[var2];
                var12 = var4.bind(var3)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var1;
                var6 = new Array(1);
                var6[0] = var7;
                var1 = function() { // Environment: var0
                    _fun107598: for (var _fun107598_ip = 0;;) switch (_fun107598_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun107598_ip = 49;
                                continue _fun107598
                            }
                        case 16:
                            var4 = _closure1_slot7;
                            var3 = var4.can;
                            var2 = _closure1_slot10;
                            var2 = var2.VIEW_CHANNEL;
                            var1 = _closure2_slot2;
                            var0 = var3.bind(var4)(var2, var1);
                        case 49:
                            return var0;
                    }
                };
                var1 = var11.bind(var12)(var9, var1, var6);
                var _closure2_slot3 = var1;
                var2 = var5[var2];
                var9 = var4.bind(var3)(var2);
                var6 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = var14.id;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = var14.guild_id;
                var4[1] = var2;
                var2 = function() { // Environment: var0
                    _fun107599: for (var _fun107599_ip = 0;;) switch (_fun107599_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var2 = var3.getGuild;
                            var1 = _closure2_slot0;
                            var1 = var1.guild_id;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun107599_ip = 46;
                                continue _fun107599
                            }
                        case 40:
                            var1 = var2.rulesChannelId;
                        case 46:
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var5 = var6.bind(var9)(var5, var2, var4);
                var _closure2_slot4 = var5;
                var6 = _closure1_slot3;
                var4 = var6.useMemo;
                var2 = new Array(3);
                var2[0] = var14;
                var2[1] = var7;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun107600: for (var _fun107600_ip = 0;;) switch (_fun107600_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun107600_ip = 20;
                                continue _fun107600
                            }
                        case 13:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun107600_ip = 51;
                                continue _fun107600
                            }
                        case 20:
                            var4 = _closure1_slot12;
                            var3 = _closure1_slot17;
                            var2 = {};
                            var0 = _closure2_slot0;
                            var2.channel = var0;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2);
                            _fun107600_ip = 80;
                            continue _fun107600;
                        case 51:
                            var4 = _closure1_slot12;
                            var3 = _closure1_slot16;
                            var2 = {};
                            var1 = _closure2_slot2;
                            var2.channel = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 80:
                            return var0;
                    }
                };
                var9 = var4.bind(var6)(var1, var2);
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var14;
                var1[1] = var5;
                var1[2] = var10;
                var0 = function() { // Environment: var0
                    _fun107601: for (var _fun107601_ip = 0;;) switch (_fun107601_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.isDM;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun107601_ip = 292;
                                continue _fun107601
                            }
                        case 26:
                            var2 = _closure2_slot0;
                            var1 = var2.isGroupDM;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun107601_ip = 182;
                                continue _fun107601
                            }
                        case 46:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 21;
                            var1 = var3[var1];
                            var6 = undefined;
                            var5 = var2.bind(var6)(var1);
                            var3 = var5.getChannelIconComponent;
                            var2 = _closure2_slot0;
                            var1 = {};
                            var7 = _closure2_slot4;
                            var1.isRulesChannel = var7;
                            var9 = var3.bind(var5)(var2, var1);
                            var1 = null;
                            var2 = var1 == var9;
                            if (var2) {
                                _fun107601_ip = 180;
                                continue _fun107601
                            }
                        case 104:
                            var5 = _closure1_slot12;
                            var3 = _closure1_slot4;
                            var2 = {};
                            var8 = _closure2_slot1;
                            var10 = var8.channelIcon;
                            var7 = new Array(2);
                            var7[0] = var10;
                            var8 = var8.channelTypeBox;
                            var7[1] = var8;
                            var2.style = var7;
                            var8 = _closure1_slot12;
                            var7 = {
                                'size': 'md',
                                'color': 'mobile-text-heading-primary'
                            };
                            var7 = var8.bind(var6)(var9, var7);
                            var2.children = var7;
                            var1 = var5.bind(var6)(var3, var2);
                        case 180:
                            return var1;
                        case 182:
                            var5 = _closure1_slot12;
                            var3 = _closure1_slot4;
                            var2 = {};
                            var1 = _closure2_slot1;
                            var1 = var1.channelIcon;
                            var2.style = var1;
                            var8 = _closure1_slot12;
                            var7 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var1 = 20;
                            var6 = var11[var1];
                            var1 = undefined;
                            var7 = var7.bind(var1)(var6);
                            var6 = {};
                            var9 = _closure2_slot0;
                            var6.channel = var9;
                            var10 = _closure1_slot0;
                            var9 = 12;
                            var9 = var11[var9];
                            var9 = var10.bind(var1)(var9);
                            var9 = var9.AvatarSizes;
                            var9 = var9.REFRESH_MEDIUM_32;
                            var6.size = var9;
                            var6 = var8.bind(var1)(var7, var6);
                            var2.children = var6;
                            var1 = var5.bind(var1)(var3, var2);
                            return var1;
                        case 292:
                            var3 = _closure1_slot12;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.channelIcon;
                            var1.style = var5;
                            var6 = _closure1_slot12;
                            var5 = _closure1_slot18;
                            var4 = {};
                            var0 = _closure2_slot0;
                            var4.channel = var0;
                            var0 = undefined;
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var5 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot14;
                var0 = {};
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot4;
                var5 = {};
                var10 = var10.channelData;
                var5.style = var10;
                var10 = var14.isDM;
                var10 = var10.bind(var14)();
                var12 = _closure1_slot12;
                if (var10) {
                    _fun107596_ip = 415;
                    continue _fun107596
                }
            case 364:
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 17;
                var10 = var15[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'redesign/heading-18/bold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail'
                };
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                _fun107596_ip = 488;
                continue _fun107596;
            case 415:
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 22;
                var8 = var15[var8];
                var11 = var11.bind(var3)(var8);
                var8 = {
                    'userId': null,
                    'guildId': null,
                    'userName': null,
                    'variant': 'redesign/heading-18/bold',
                    'defaultColor': 'mobile-text-heading-primary',
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail'
                };
                var15 = var14.getRecipientId;
                var15 = var15.bind(var14)();
                var8.userId = var15;
                var14 = var14.guild_id;
                var8.guildId = var14;
                var8.userName = var13;
                var10 = var12.bind(var3)(var11, var8);
            case 488:
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var7 = var1.channel;
        var _closure2_slot0 = var7;
        var8 = var1.containerStyle;
        var1 = _closure1_slot15;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 23;
        var1 = var9[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var10 = var1.analyticsLocations;
        var _closure2_slot1 = var10;
        var5 = _closure1_slot3;
        var2 = var5.useCallback;
        var1 = new Array(2);
        var1[0] = var7;
        var1[1] = var10;
        var0 = function() { // Environment: var0
            _fun107603: for (var _fun107603_ip = 0;;) switch (_fun107603_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = var1.getRecipientId;
                    var4 = var0.bind(var1)();
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun107603_ip = 81;
                        continue _fun107603
                    }
                case 23:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 24;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.userId = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var0.channelId = var4;
                    var3 = _closure2_slot1;
                    var0.sourceAnalyticsLocations = var3;
                    var0 = var1.bind(var2)(var0);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot12;
        var1 = _closure1_slot0;
        var0 = 16;
        var0 = var9[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var9 = var6.container;
        var6 = new Array(2);
        var6[0] = var9;
        var6[1] = var8;
        var0.style = var6;
        var0.onPress = var5;
        var6 = _closure1_slot12;
        var5 = _closure1_slot19;
        var4 = {};
        var4.channel = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.channel;
        var6 = var0.containerStyle;
        var0 = _closure1_slot15;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var1 = _closure1_slot4;
        var0 = {};
        var8 = var5.container;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var6;
        var0.style = var5;
        var6 = _closure1_slot12;
        var5 = _closure1_slot19;
        var4 = {};
        var4.channel = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Permissions;
    var _closure1_slot10 = var7;
    var3 = var3.StatusTypes;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var7 = var3.jsxs;
    var _closure1_slot13 = var7;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'gap': null,
        'alignItems': 'center'
    };
    var10 = 10;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.gap = var13;
    var3.container = var9;
    var9 = {
        'height': 40,
        'width': 40,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.channelIcon = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9.borderRadius = var13;
    var9.borderWidth = var12;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9.borderColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var13;
    var3.channelTypeBox = var9;
    var9 = {};
    var9.flex = var12;
    var3.channelData = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var3.statusStyle = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.channel;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot1;
        var13 = _closure1_slot2;
        var0 = 13;
        var0 = var13[var0];
        var3 = undefined;
        var2 = var2.bind(var3)(var0);
        var0 = true;
        var12 = var2.bind(var3)(var1, var0);
        var _closure2_slot1 = var12;
        var8 = _closure1_slot0;
        var0 = 14;
        var0 = var13[var0];
        var2 = var8.bind(var3)(var0);
        var0 = var2.useNavigation;
        var0 = var0.bind(var2)();
        var _closure2_slot2 = var0;
        var5 = _closure1_slot3;
        var2 = var5.useCallback;
        var6 = var1.id;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var0;
        var0 = function() { // Environment: var11
            var2 = _closure2_slot2;
            var0 = var2.goBack;
            var0 = var0.bind(var2)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 15;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.transitionToChannel;
            var1 = _closure2_slot0;
            var2 = var1.id;
            var1 = {};
            var5 = true;
            var1.navigationReplace = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot12;
        var0 = 16;
        var0 = var13[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var0.onPress = var5;
        var6 = _closure1_slot12;
        var4 = 17;
        var4 = var13[var4];
        var4 = var8.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-sm/medium',
            'color': 'mobile-text-heading-primary',
            'lineClamp': 1
        };
        var7 = 18;
        var9 = var13[var7];
        var9 = var8.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.format;
        var7 = var13[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.t;
        var8 = var7.YbkB3U;
        var7 = {};
        var7.channelName = var12;
        var11 = function() {
            var3 = _closure1_slot12;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 17;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.Text;
            var0 = {
                'variant': 'text-sm/medium',
                'color': 'text-brand',
                'lineClamp': 1
            };
            var4 = _closure2_slot1;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var7.channelNameHook = var11;
        var7 = var9.bind(var10)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var3;
    var3 = function arg0() {
        _fun107608: for (var _fun107608_ip = 0;;) switch (_fun107608_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.channel;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = undefined;
                var7 = var5.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var0 = function() { // Environment: var0
                    _fun107609: for (var _fun107609_ip = 0;;) switch (_fun107609_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = var1.isPrivate;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            if (!var1) {
                                _fun107609_ip = 73;
                                continue _fun107609
                            }
                        case 22:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 19;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.getPrivateChannelUserTagsString;
                            var2 = _closure2_slot0;
                            var2 = var2.recipients;
                            var1 = _closure1_slot9;
                            var0 = var3.bind(var4)(var2, var1);
                        case 73:
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5, var0, var2);
                var0 = var3.isPrivate;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun107608_ip = 122;
                    continue _fun107608
                }
            case 91:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 19;
                var0 = var6[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.channelTypeString;
                var5 = var0.bind(var2)(var3);
            case 122:
                var3 = null;
                var2 = var3 == var5;
                var0 = null;
                if (var2) {
                    _fun107608_ip = 196;
                    continue _fun107608
                }
            case 133:
                var2 = '';
                var0 = null;
                if (!(var2 !== var5)) {
                    _fun107608_ip = 196;
                    continue _fun107608
                }
            case 143:
                var3 = _closure1_slot12;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 17;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted',
                    'lineClamp': 1
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 196:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun107610: for (var _fun107610_ip = 0;;) switch (_fun107610_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var1 = var0.containerStyle;
                var0 = var5.isDM;
                var0 = var0.bind(var5)();
                var4 = _closure1_slot12;
                if (var0) {
                    _fun107610_ip = 59;
                    continue _fun107610
                }
            case 34:
                var6 = _closure1_slot21;
                var3 = {};
                var3.channel = var5;
                var3.containerStyle = var1;
                var0 = undefined;
                var0 = var4.bind(var0)(var6, var3);
                _fun107610_ip = 82;
                continue _fun107610;
            case 59:
                var3 = _closure1_slot20;
                var2 = {};
                var2.channel = var5;
                var2.containerStyle = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 82:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 3093, 3611, 1621, 660, 33, 1297, 671, 566, 5504, 4794, 1469, 3944, 4904, 3942, 1234, 4236, 9110, 4809, 6992, 5777, 7421, 2]);