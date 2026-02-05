// uikit-native/guild_sidebar/ChannelItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun102081: for (var _fun102081_ip = 0;;) switch (_fun102081_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.muted;
                var6 = var1.selected;
                var2 = var1.unread;
                var5 = var1.locked;
                var4 = var1.channel;
                if (var6) {
                    _fun102081_ip = 259;
                    continue _fun102081
                }
            case 41:
                if (var5) {
                    _fun102081_ip = 223;
                    continue _fun102081
                }
            case 47:
                if (var0) {
                    _fun102081_ip = 187;
                    continue _fun102081
                }
            case 53:
                if (var2) {
                    _fun102081_ip = 92;
                    continue _fun102081
                }
            case 56:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 13;
                var5 = var5[var0];
                var0 = undefined;
                var0 = var6.bind(var0)(var5);
                var0 = var0.ChannelModes;
                var0 = var0.DEFAULT;
                _fun102081_ip = 185;
                continue _fun102081;
            case 92:
                var5 = var1.resolvedUnreadSetting;
                var1 = _closure1_slot12;
                var1 = var1.ALL_MESSAGES;
                if (!(var5 !== var1)) {
                    _fun102081_ip = 148;
                    continue _fun102081
                }
            case 112:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.ChannelModes;
                var1 = var1.UNREAD_LESS_IMPORTANT;
                _fun102081_ip = 182;
                continue _fun102081;
            case 148:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 13;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var5 = var5.ChannelModes;
                var1 = var5.UNREAD_IMPORTANT;
            case 182:
                var0 = var1;
            case 185:
                _fun102081_ip = 221;
                continue _fun102081;
            case 187:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.ChannelModes;
                var0 = var1.MUTED;
            case 221:
                _fun102081_ip = 257;
                continue _fun102081;
            case 223:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.ChannelModes;
                var0 = var1.LOCKED;
            case 257:
                _fun102081_ip = 331;
                continue _fun102081;
            case 259:
                var1 = var4.isGuildVocal;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.ChannelModes;
                if (var1) {
                    _fun102081_ip = 308;
                    continue _fun102081
                }
            case 300:
                var1 = var3.SELECTED;
                _fun102081_ip = 328;
                continue _fun102081;
            case 308:
                if (var2) {
                    _fun102081_ip = 319;
                    continue _fun102081
                }
            case 311:
                var2 = var3.RELEVANT;
                _fun102081_ip = 325;
                continue _fun102081;
            case 319:
                var2 = var3.UNREAD_IMPORTANT;
            case 325:
                var1 = var2;
            case 328:
                var0 = var1;
            case 331:
                return var0;
        }
    };
    var _closure1_slot17 = var1;
    var0 = function arg0() {
        _fun102082: for (var _fun102082_ip = 0;;) switch (_fun102082_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot16;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var6 = var2.channel;
                var11 = var2.locked;
                var1 = var2.isRulesChannel;
                var10 = var2.isChannelLive;
                var5 = var2.selected;
                var12 = var2.mode;
                var4 = var6.type;
                var2 = _closure1_slot9;
                var2 = var2.DM;
                if (!(var4 !== var2)) {
                    _fun102082_ip = 446;
                    continue _fun102082
                }
            case 72:
                var4 = var6.type;
                var2 = _closure1_slot9;
                var2 = var2.GROUP_DM;
                if (!(var4 === var2)) {
                    _fun102082_ip = 172;
                    continue _fun102082
                }
            case 91:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 14;
                var2 = var7[var2];
                var7 = var4.bind(var3)(var2);
                var4 = var7.getChannelIconSource;
                var2 = {};
                var9 = var6.id;
                var2.id = var9;
                var9 = var6.icon;
                var2.icon = var9;
                var9 = var6.getApplicationId;
                var9 = var9.bind(var6)();
                var2.applicationId = var9;
                var9 = 20;
                var2.size = var9;
                var7 = var4.bind(var7)(var2);
                var2 = null;
                if (!(var2 == var7)) {
                    _fun102082_ip = 398;
                    continue _fun102082
                }
            case 172:
                if (var1) {
                    _fun102082_ip = 259;
                    continue _fun102082
                }
            case 175:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 18;
                var2 = var9[var1];
                var15 = var4.bind(var3)(var2);
                var14 = var15.getChannelIcon;
                var2 = {};
                var13 = false;
                var2.isRulesChannel = var13;
                var2.locked = var11;
                var2 = var14.bind(var15)(var6, var2);
                var1 = var9[var1];
                var9 = var4.bind(var3)(var1);
                var4 = var9.getChannelIconComponent;
                var1 = {};
                var1.isRulesChannel = var13;
                var1.locked = var11;
                var11 = var4.bind(var9)(var6, var1);
                var9 = var2;
                _fun102082_ip = 301;
                continue _fun102082;
            case 259:
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 16;
                var1 = var13[var1];
                var9 = var2.bind(var3)(var1);
                var4 = _closure1_slot0;
                var1 = 17;
                var1 = var13[var1];
                var1 = var4.bind(var3)(var1);
                var11 = var1.BookCheckIcon;
            case 301:
                var4 = _closure1_slot13;
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 13;
                var1 = var13[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.BaseChannelIcon;
                var1 = {};
                var1.mode = var12;
                var1.source = var9;
                var1.isChannelLive = var10;
                var9 = undefined;
                if (!var10) {
                    _fun102082_ip = 357;
                    continue _fun102082
                }
            case 351:
                var9 = var8.channelIconLive;
            case 357:
                var1.style = var9;
                var9 = null;
                if (!(var9 == var11)) {
                    _fun102082_ip = 371;
                    continue _fun102082
                }
            case 367:
                var9 = {};
                _fun102082_ip = 380;
                continue _fun102082;
            case 371:
                var10 = {};
                var10.IconComponent = var11;
                var9 = var10;
            case 380:
                var18 = var1;
                var17 = var9;
                var9 = copyDataProperties(var18, var17);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 398:
                var4 = _closure1_slot13;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 15;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var8 = var8.groupDmAvatar;
                var1.style = var8;
                var1.source = var7;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 446:
                var2 = _closure1_slot13;
                var1 = _closure1_slot19;
                var0 = {};
                var4 = var6.getRecipientId;
                var4 = var4.bind(var6)();
                var0.userId = var4;
                var4 = null;
                var4 = var4 != var5;
                if (!var4) {
                    _fun102082_ip = 482;
                    continue _fun102082
                }
            case 479:
                var4 = var5;
            case 482:
                var0.selected = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun102083: for (var _fun102083_ip = 0;;) switch (_fun102083_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.userId;
                var _closure2_slot0 = var9;
                var5 = var0.selected;
                var2 = _closure1_slot16;
                var3 = undefined;
                var6 = var2.bind(var3)();
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 19;
                var4 = var11[var2];
                var13 = var10.bind(var3)(var4);
                var12 = var13.useStateFromStores;
                var4 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var4;
                var7 = new Array(1);
                var7[0] = var9;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot8;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var12.bind(var13)(var8, var4, var7);
                var2 = var11[var2];
                var8 = var10.bind(var3)(var2);
                var7 = var8.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var4 = _closure1_slot6;
                    var2 = var4.getStatus;
                    var3 = _closure2_slot0;
                    var2 = var2.bind(var4)(var3);
                    var0.status = var2;
                    var4 = _closure1_slot6;
                    var2 = var4.isMobileOnline;
                    var2 = var2.bind(var4)(var3);
                    var0.isMobileOnline = var2;
                    var2 = _closure1_slot6;
                    var1 = var2.isVROnline;
                    var1 = var1.bind(var2)(var3);
                    var0.isVROnline = var1;
                    return var0;
                };
                var1 = var7.bind(var8)(var4, var1, var2);
                var8 = var1.status;
                var7 = var1.isMobileOnline;
                var4 = var1.isVROnline;
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var9 = 20;
                var0 = var11[var9];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.user = var12;
                var0.guildId = var3;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.XSMALL_20;
                var0.size = var9;
                var9 = var6.dmAvatar;
                var0.style = var9;
                var0.status = var8;
                var0.isMobileOnline = var7;
                var0.isVROnline = var4;
                var7 = var6.avatarStatus;
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun102083_ip = 260;
                    continue _fun102083
                }
            case 254:
                var5 = var6.avatarStatusSelected;
            case 260:
                var4[1] = var5;
                var0.statusStyle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = ['channel', 'subtitle', 'hideIcon', 'children', 'textStyle', 'channelInfo', 'onPress'];
    var _closure1_slot3 = var0;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var6[var0];
    var0 = undefined;
    var7 = var13.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = arg3;
    var7 = var7.bind(var0)(var8);
    var8 = 2;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.View;
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var13.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var11 = 4;
    var8 = var6[var11];
    var8 = var13.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var13.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var9 = var5.bind(var0)(var8);
    var8 = var9.ChannelTypes;
    var _closure1_slot9 = var8;
    var9 = var9.Routes;
    var _closure1_slot10 = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.StaticChannelRoute;
    var _closure1_slot11 = var9;
    var14 = 8;
    var9 = var6[var14];
    var9 = var5.bind(var0)(var9);
    var9 = var9.UnreadSetting;
    var _closure1_slot12 = var9;
    var9 = 9;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var10 = var9.jsx;
    var _closure1_slot13 = var10;
    var9 = var9.jsxs;
    var _closure1_slot14 = var9;
    var9 = var4.Set;
    var10 = var8.GUILD_VOICE;
    var4 = new Array(2);
    var4[0] = var10;
    var8 = var8.GUILD_STAGE_VOICE;
    var4[1] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var19 = var8;
    var18 = var4;
    var4 = new var19[var9](var18, var17);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 11;
    var15 = var6[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.GREEN_360;
    var10.tintColor = var15;
    var4.channelIconLive = var10;
    var10 = {};
    var10.marginRight = var14;
    var4.dmAvatar = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var12;
    var4.avatarStatus = var10;
    var10 = {
        'width': 20,
        'height': 20,
        'borderRadius': 10,
        'marginRight': 8
    };
    var4.groupDmAvatar = var10;
    var10 = {};
    var10.paddingStart = var11;
    var4.channelInfoContainer = var10;
    var10 = {};
    var11 = 12;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.DARK_393C42_LIGHT_DEE0E4;
    var10.backgroundColor = var11;
    var4.avatarStatusSelected = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun102086: for (var _fun102086_ip = 0;;) switch (_fun102086_ip) {
            case 0:
                var11 = arg0;
                var0 = _closure1_slot16;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var20 = var11.channel;
                var _closure2_slot0 = var20;
                var15 = var11.subtitle;
                var10 = var11.hideIcon;
                var5 = var11.children;
                var14 = var11.textStyle;
                var17 = var11.channelInfo;
                var0 = var11.onPress;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot4;
                var0 = _closure1_slot3;
                var4 = var1.bind(var3)(var11, var0);
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 21;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var20.id;
                var0 = var1.bind(var3)(var0);
                var16 = var0.isSubscriptionGated;
                var19 = var0.needSubscriptionToAccess;
                var _closure2_slot2 = var19;
                var0 = _closure1_slot17;
                var12 = var0.bind(var3)(var11);
                var13 = null;
                if (!(var13 == var17)) {
                    _fun102086_ip = 145;
                    continue _fun102086
                }
            case 140:
                var7 = null;
                if (!var16) {
                    _fun102086_ip = 229;
                    continue _fun102086
                }
            case 145:
                var2 = _closure1_slot14;
                var1 = _closure1_slot5;
                var0 = {};
                var9 = var9.channelInfoContainer;
                var0.style = var9;
                var9 = new Array(2);
                var9[0] = var17;
                var13 = null;
                if (!var16) {
                    _fun102086_ip = 215;
                    continue _fun102086
                }
            case 178:
                var18 = _closure1_slot13;
                var17 = _closure1_slot1;
                var21 = _closure1_slot2;
                var16 = 22;
                var16 = var21[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var16.locked = var19;
                var13 = var18.bind(var3)(var17, var16);
            case 215:
                var9[1] = var13;
                var0.children = var9;
                var7 = var2.bind(var3)(var1, var0);
            case 229:
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 13;
                var0 = var13[var9];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.mode = var12;
                var16 = _closure1_slot0;
                var13 = var13[var9];
                var13 = var16.bind(var3)(var13);
                var13 = var13.ChannelModes;
                var13 = var13.UNREAD_IMPORTANT;
                var13 = var12 === var13;
                if (var13) {
                    _fun102086_ip = 324;
                    continue _fun102086
                }
            case 291:
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var9];
                var16 = var17.bind(var3)(var16);
                var16 = var16.ChannelModes;
                var16 = var16.UNREAD_LESS_IMPORTANT;
                var13 = var12 === var16;
            case 324:
                var0.unread = var13;
                var0.hideIcon = var10;
                var13 = _closure1_slot13;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = var18[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.BaseChannelName;
                var9 = {};
                var9.mode = var12;
                var16 = 23;
                var16 = var18[var16];
                var19 = var17.bind(var3)(var16);
                var18 = var19.computeChannelName;
                var17 = _closure1_slot8;
                var16 = _closure1_slot7;
                var16 = var18.bind(var19)(var20, var17, var16);
                var9.name = var16;
                var9.subtitle = var15;
                var9.textStyle = var14;
                var9 = var13.bind(var3)(var10, var9);
                var0.name = var9;
                var10 = _closure1_slot13;
                var9 = _closure1_slot18;
                var8 = {};
                var24 = var8;
                var23 = var11;
                var11 = copyDataProperties(var24, var23);
                var11 = 'mode';
                var8[var11] = var12;
                var8 = var10.bind(var3)(var9, var8);
                var0.icon = var8;
                var0.channelInfo = var7;
                var6 = function arg0() {
                    _fun102087: for (var _fun102087_ip = 0;;) switch (_fun102087_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun102087_ip = 39;
                                continue _fun102087
                            }
                        case 10:
                            var4 = _closure1_slot15;
                            var2 = var4.has;
                            var1 = _closure2_slot0;
                            var1 = var1.type;
                            var1 = var2.bind(var4)(var1);
                            if (var1) {
                                _fun102087_ip = 65;
                                continue _fun102087
                            }
                        case 39:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun102087_ip = 133;
                                continue _fun102087
                            }
                        case 49:
                            var4 = _closure2_slot1;
                            var2 = undefined;
                            var1 = arg0;
                            var1 = var4.bind(var2)(var1);
                            _fun102087_ip = 133;
                            continue _fun102087;
                        case 65:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 24;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.transitionTo;
                            var5 = _closure1_slot10;
                            var4 = var5.CHANNEL;
                            var3 = _closure2_slot0;
                            var3 = var3.guild_id;
                            var0 = _closure1_slot11;
                            var0 = var0.ROLE_SUBSCRIPTIONS;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                        case 133:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var6;
                var24 = var0;
                var23 = var4;
                var4 = copyDataProperties(var24, var23);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/guild_sidebar/ChannelItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.getChannelMode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 3610, 3100, 1621, 660, 1379, 4304, 33, 1297, 671, 4874, 11714, 1417, 4704, 13313, 4844, 4809, 566, 5456, 4793, 13314, 4794, 1220, 2]);