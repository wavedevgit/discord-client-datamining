// modules/icymi/native/ICYMIShared.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var0 = function arg0() {
        _fun103973: for (var _fun103973_ip = 0;;) switch (_fun103973_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 9;
                var1 = var1[var5];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var1.ContentType;
                var1 = var1.POPULAR_MESSAGE;
                if (!(var1 !== var3)) {
                    _fun103973_ip = 325;
                    continue _fun103973
                }
            case 47:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ContentType;
                var1 = var1.IMAGE;
                if (!(var1 !== var3)) {
                    _fun103973_ip = 297;
                    continue _fun103973
                }
            case 83:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ContentType;
                var1 = var1.VIDEO;
                if (!(var1 !== var3)) {
                    _fun103973_ip = 269;
                    continue _fun103973
                }
            case 119:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ContentType;
                var1 = var1.TRENDING_TOPIC;
                if (!(var1 !== var3)) {
                    _fun103973_ip = 241;
                    continue _fun103973
                }
            case 152:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ContentType;
                var1 = var1.PRO_TIP;
                if (!(var1 !== var3)) {
                    _fun103973_ip = 213;
                    continue _fun103973
                }
            case 185:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.LightbulbIcon;
                return var1;
            case 213:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.LightbulbIcon;
                return var1;
            case 241:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.FireIcon;
                return var1;
            case 269:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.CirclePlayIcon;
                return var1;
            case 297:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.ImageIcon;
                return var1;
            case 325:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.FireIcon;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var7 = function arg0, arg1, arg2() {
        _fun103974: for (var _fun103974_ip = 0;;) switch (_fun103974_ip) {
            case 0:
                var8 = arg0;
                var4 = arg2;
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var4;
                var0 = global;
                var5 = var0.setTimeout;
                var0 = undefined;
                var3 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.ack;
                    var12 = _closure2_slot0;
                    var3 = {};
                    var7 = _closure1_slot12;
                    var7 = var7.ICYMI;
                    var3.page = var7;
                    var7 = _closure1_slot10;
                    var7 = var7.ACK_MESSAGE_VIEWED;
                    var3.object = var7;
                    var2 = _closure1_slot11;
                    var2 = var2.ACK_SEMI_AUTOMATIC;
                    var3.objectType = var2;
                    var8 = _closure2_slot1;
                    var13 = var6;
                    var11 = var3;
                    var10 = true;
                    var9 = true;
                    var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                    return var0;
                };
                var2 = 1500;
                var2 = var5.bind(var0)(var3, var2);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var6 = var5.bind(var0)(var3);
                var7 = _closure1_slot17;
                var5 = var7.CHANNEL;
                var3 = arg1;
                var5 = var5.bind(var7)(var3, var8, var4);
                var3 = {
                    'openChannel': true,
                    'navigationReplace': false
                };
                var3 = var6.bind(var0)(var5, var3);
                var3 = null;
                if (!(var3 != var4)) {
                    _fun103974_ip = 156;
                    continue _fun103974
                }
            case 114:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 16;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.runAfterInteractions;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 17;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fetchMessages;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.channelId = var4;
                    var4 = _closure1_slot14;
                    var1.limit = var4;
                    var4 = {};
                    var6 = _closure2_slot1;
                    var4.messageId = var6;
                    var6 = true;
                    var4.flash = var6;
                    var6 = _closure1_slot0;
                    var5 = 18;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.JumpTypes;
                    var5 = var5.ANIMATED;
                    var4.jumpType = var5;
                    var1.jump = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = 150;
                var1 = var3.bind(var4)(var2, var1);
            case 156:
                return var0;
        }
    };
    var _closure1_slot24 = var7;
    var6 = function() {
        var1 = _closure1_slot21;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot18;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.separator;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot25 = var6;
    var5 = function arg0() {
        _fun103978: for (var _fun103978_ip = 0;;) switch (_fun103978_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.length;
                var1 = 20;
                var0 = var4;
                if (!(var2 > var1)) {
                    _fun103978_ip = 63;
                    continue _fun103978
                }
            case 18:
                var3 = var4.slice;
                var2 = 0;
                var1 = 17;
                var4 = var3.bind(var4)(var2, var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '...';
                var0 = var3.bind(var2)(var4, var1);
            case 63:
                return var0;
        }
    };
    var _closure1_slot26 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var11 = var0.guild;
        var10 = var0.author;
        var0 = _closure1_slot21;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var2 = _closure1_slot18;
        var1 = _closure1_slot28;
        var0 = {};
        var0.guild = var11;
        var6 = _closure1_slot18;
        var5 = _closure1_slot1;
        var9 = _closure1_slot2;
        var7 = 22;
        var4 = var9[var7];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var13 = true;
        var4.animate = var13;
        var12 = var12.authorIcon;
        var4.style = var12;
        var11 = var11.id;
        var4.guildId = var11;
        var4.user = var10;
        var8 = _closure1_slot0;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.AvatarSizes;
        var7 = var7.XSMALL;
        var4.size = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.icon = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot27 = var0;
    var4 = function arg0() {
        var0 = arg0;
        var14 = var0.guild;
        var5 = var0.icon;
        var3 = _closure1_slot19;
        var2 = _closure1_slot4;
        var1 = {};
        var0 = {
            'width': 40,
            'height': 40
        };
        var1.style = var0;
        var7 = _closure1_slot18;
        var9 = _closure1_slot1;
        var13 = _closure1_slot2;
        var10 = 23;
        var4 = var13[var10];
        var0 = undefined;
        var6 = var9.bind(var0)(var4);
        var4 = {};
        var11 = {
            'shape': null,
            'x': 16,
            'y': 14,
            'size': 32
        };
        var12 = _closure1_slot0;
        var10 = var13[var10];
        var10 = var12.bind(var0)(var10);
        var10 = var10.CutoutShape;
        var10 = var10.Circle;
        var11.shape = var10;
        var10 = new Array(1);
        var10[0] = var11;
        var4.cutouts = var10;
        var10 = _closure1_slot18;
        var11 = 24;
        var8 = var13[var11];
        var9 = var9.bind(var0)(var8);
        var8 = {};
        var8.guild = var14;
        var11 = var13[var11];
        var11 = var12.bind(var0)(var11);
        var11 = var11.GuildIconSizes;
        var11 = var11.NORMAL;
        var8.size = var11;
        var8 = var10.bind(var0)(var9, var8);
        var4.children = var8;
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot28 = var4;
    var3 = function arg0() {
        _fun103981: for (var _fun103981_ip = 0;;) switch (_fun103981_ip) {
            case 0:
                var0 = arg0;
                var27 = var0.guild;
                var _closure2_slot0 = var27;
                var1 = var0.channel;
                var _closure2_slot1 = var1;
                var38 = var0.timestamp;
                var32 = var0.hideTimestamp;
                var5 = var0.children;
                var15 = var0.avatar;
                var33 = var0.title;
                var25 = var0.subtitle;
                var1 = var0.id;
                var _closure2_slot2 = var1;
                var1 = var0.type;
                var _closure2_slot3 = var1;
                var9 = var0.onHeaderPress;
                var8 = var0.onHeaderLongPress;
                var30 = var0.disableInteractions;
                var0 = _closure1_slot21;
                var3 = undefined;
                var26 = var0.bind(var3)();
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 25;
                var0 = var4[var0];
                var1 = var6.bind(var3)(var0);
                var0 = var1.useFontScale;
                var12 = var0.bind(var1)();
                var2 = _closure1_slot19;
                var1 = _closure1_slot20;
                var0 = {};
                var7 = _closure1_slot18;
                var24 = 26;
                var4 = var4[var24];
                var4 = var6.bind(var3)(var4);
                var6 = var4.PressableHighlight;
                var4 = {};
                var4.onPress = var9;
                var4.onLongPress = var8;
                var8 = var26.content;
                var4.style = var8;
                var10 = _closure1_slot18;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = 1.8;
                if (!(!(var12 > var11))) {
                    _fun103981_ip = 220;
                    continue _fun103981
                }
            case 212:
                var11 = var26.channelNameAndAccessory;
                _fun103981_ip = 226;
                continue _fun103981;
            case 220:
                var11 = var26.channelNameAndAccessoryLarge;
            case 226:
                var8.style = var11;
                var13 = _closure1_slot19;
                var12 = _closure1_slot4;
                var11 = {};
                var14 = var26.header;
                var11.style = var14;
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot19;
                var16 = _closure1_slot4;
                var15 = {};
                var18 = var26.headerInfo;
                var15.style = var18;
                var20 = _closure1_slot19;
                var19 = _closure1_slot4;
                var18 = {};
                var21 = var26.title;
                var18.style = var21;
                var28 = _closure1_slot19;
                var23 = _closure1_slot4;
                var21 = {};
                var31 = var26.titleLeft;
                var21.style = var31;
                var31 = new Array(2);
                var31[0] = var33;
                var32 = !var32;
                if (!var32) {
                    _fun103981_ip = 406;
                    continue _fun103981
                }
            case 330:
                var35 = _closure1_slot18;
                var37 = _closure1_slot0;
                var39 = _closure1_slot2;
                var33 = 27;
                var33 = var39[var33];
                var33 = var37.bind(var3)(var33);
                var34 = var33.Text;
                var33 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var36 = 28;
                var36 = var39[var36];
                var37 = var37.bind(var3)(var36);
                var36 = var37.getRelativeTimestamp;
                var36 = var36.bind(var37)(var38);
                var33.children = var36;
                var32 = var35.bind(var3)(var34, var33);
            case 406:
                var31[1] = var32;
                var21.children = var31;
                var23 = var28.bind(var3)(var23, var21);
                var21 = new Array(2);
                var21[0] = var23;
                var28 = null;
                var23 = null;
                if (var30) {
                    _fun103981_ip = 587;
                    continue _fun103981
                }
            case 438:
                var27 = var28 == var27;
                var23 = null;
                if (var27) {
                    _fun103981_ip = 587;
                    continue _fun103981
                }
            case 450:
                var28 = _closure1_slot18;
                var30 = _closure1_slot0;
                var34 = _closure1_slot2;
                var24 = var34[var24];
                var24 = var30.bind(var3)(var24);
                var27 = var24.PressableOpacity;
                var24 = {};
                var29 = function() {
                    _fun103982: for (var _fun103982_ip = 0;;) switch (_fun103982_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 29;
                            var0 = var2[var0];
                            var4 = undefined;
                            var2 = var1.bind(var4)(var0);
                            var1 = var2.openDetailsActionSheet;
                            var0 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var0.guildId = var5;
                            var6 = _closure2_slot1;
                            var5 = null;
                            var5 = var5 == var6;
                            if (var5) {
                                _fun103982_ip = 71;
                                continue _fun103982
                            }
                        case 62:
                            var5 = _closure2_slot1;
                            var4 = var5.id;
                        case 71:
                            var0.channelId = var4;
                            var4 = _closure2_slot2;
                            var0.id = var4;
                            var3 = _closure2_slot3;
                            var0.type = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var24.onPress = var29;
                var29 = var26.subtitleTrailing;
                var24.style = var29;
                var29 = 8;
                var24.hitSlop = var29;
                var31 = _closure1_slot18;
                var29 = 30;
                var29 = var34[var29];
                var29 = var30.bind(var3)(var29);
                var30 = var29.MoreHorizontalIcon;
                var29 = {};
                var33 = _closure1_slot1;
                var32 = 21;
                var32 = var34[var32];
                var32 = var33.bind(var3)(var32);
                var32 = var32.colors;
                var32 = var32.ICON_MUTED;
                var29.color = var32;
                var32 = 'sm';
                var29.size = var32;
                var29 = var31.bind(var3)(var30, var29);
                var24.children = var29;
                var23 = var28.bind(var3)(var27, var24);
            case 587:
                var21[1] = var23;
                var18.children = var21;
                var19 = var20.bind(var3)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var21 = _closure1_slot18;
                var20 = _closure1_slot4;
                var19 = {};
                var23 = var26.subTitleContainer;
                var19.style = var23;
                var24 = _closure1_slot18;
                var23 = _closure1_slot4;
                var22 = {};
                var26 = var26.subtitle;
                var22.style = var26;
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var18[1] = var19;
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var3;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var12 = var10[var0];
    var8 = arg3;
    var0 = undefined;
    var8 = var8.bind(var0)(var12);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.View;
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.AnalyticsObjects;
    var _closure1_slot10 = var11;
    var11 = var8.AnalyticsObjectTypes;
    var _closure1_slot11 = var11;
    var11 = var8.AnalyticsPages;
    var _closure1_slot12 = var11;
    var11 = var8.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot13 = var11;
    var11 = var8.MAX_MESSAGES_FOR_JUMP;
    var _closure1_slot14 = var11;
    var11 = var8.MessageFlags;
    var _closure1_slot15 = var11;
    var11 = var8.Permissions;
    var _closure1_slot16 = var11;
    var8 = var8.Routes;
    var _closure1_slot17 = var8;
    var8 = 8;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.jsx;
    var _closure1_slot18 = var11;
    var11 = var8.jsxs;
    var _closure1_slot19 = var11;
    var8 = var8.Fragment;
    var _closure1_slot20 = var8;
    var8 = 19;
    var8 = var10[var8];
    var12 = var9.bind(var0)(var8);
    var11 = var12.createICYMIStyles;
    var8 = function(arg0) { // Environment: var1
        _fun103983: for (var _fun103983_ip = 0;;) switch (_fun103983_ip) {
            case 0:
                var7 = arg0;
                var0 = {};
                var1 = {
                    'flex': 1,
                    'marginTop': null,
                    'overflow': 'hidden'
                };
                var6 = 1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var9 = 20;
                var3 = var3[var9];
                var4 = undefined;
                var5 = var5.bind(var4)(var3);
                var3 = var5.isAndroid;
                var8 = var3.bind(var5)();
                var5 = 0;
                if (!var8) {
                    _fun103983_ip = 68;
                    continue _fun103983
                }
            case 62:
                var5 = -2;
            case 68:
                var1.marginTop = var5;
                var0.simplePostContent = var1;
                var1 = {
                    'flex': 1,
                    'marginTop': null,
                    'overflow': 'hidden'
                };
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var8 = var8.bind(var4)(var5);
                var5 = var8.isAndroid;
                var5 = var5.bind(var8)();
                var3 = 0;
                if (!var5) {
                    _fun103983_ip = 131;
                    continue _fun103983
                }
            case 125:
                var3 = -2;
            case 131:
                var1.marginTop = var3;
                var3 = var7.margin;
                var1.paddingTop = var3;
                var0.content = var1;
                var1 = {
                    'position': 'absolute',
                    'right': 4294967292,
                    'bottom': 4294967294,
                    'padding': 4
                };
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 21;
                var8 = var5[var2];
                var8 = var3.bind(var4)(var8);
                var8 = var8.radii;
                var8 = var8.round;
                var1.borderRadius = var8;
                var8 = var5[var2];
                var8 = var3.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
                var1.backgroundColor = var8;
                var0.insetIconWrapper = var1;
                var1 = {
                    'position': 'absolute',
                    'right': 4294967292,
                    'bottom': 4294967294
                };
                var0.authorIcon = var1;
                var1 = {};
                var8 = var5[var2];
                var8 = var3.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.TEXT_MUTED;
                var1.tintColor = var8;
                var0.moreDetailsIcon = var1;
                var1 = {
                    'flexDirection': 'row',
                    'justifyContent': 'space-between',
                    'alignItems': 'center'
                };
                var8 = var7.margin;
                var1.paddingBottom = var8;
                var8 = var7.margin;
                var1.marginHorizontal = var8;
                var0.channelNameAndAccessory = var1;
                var1 = {};
                var8 = 'column';
                var1.flexDirection = var8;
                var8 = var7.margin;
                var1.paddingBottom = var8;
                var8 = var7.margin;
                var1.marginHorizontal = var8;
                var0.channelNameAndAccessoryLarge = var1;
                var1 = {
                    'flexDirection': 'row',
                    'flexGrow': 1
                };
                var0.header = var1;
                var1 = {
                    'flexGrow': 1,
                    'flexShrink': 1
                };
                var7 = var7.margin;
                var1.marginLeft = var7;
                var0.headerInfo = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'space-between',
                    'marginBottom': 2
                };
                var0.title = var1;
                var1 = {
                    'flexShrink': 1,
                    'flexGrow': 0,
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 6
                };
                var0.titleLeft = var1;
                var1 = {
                    'flexDirection': 'row',
                    'justifyContent': 'space-between'
                };
                var7 = var5[var2];
                var7 = var3.bind(var4)(var7);
                var7 = var7.radii;
                var7 = var7.sm;
                var1.borderRadius = var7;
                var0.subTitleContainer = var1;
                var1 = {
                    'flexShrink': 1,
                    'flexGrow': 0,
                    'width': '100%'
                };
                var0.subtitle = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var7 = var5[var2];
                var7 = var3.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_4;
                var1.gap = var7;
                var0.genContentSubtitle = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 2,
                    'flex': 1
                };
                var0.genContentSubtitleChannel = var1;
                var1 = {};
                var1.paddingVertical = var6;
                var0.subtitleTrailing = var1;
                var1 = {
                    'height': 1,
                    'width': '100%'
                };
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.BORDER_SUBTLE;
                var1.backgroundColor = var6;
                var0.separator = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var0.eventsSubtitle = var1;
                var1 = {
                    'padding': 8,
                    'backgroundColor': null,
                    'borderRadius': null,
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 8
                };
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
                var1.backgroundColor = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.radii;
                var6 = var6.md;
                var1.borderRadius = var6;
                var0.comments = var1;
                var1 = {
                    'flexGrow': 1,
                    'flexShrink': 1,
                    'marginRight': 12
                };
                var0.recentCommentText = var1;
                var1 = {
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 2,
                    'justifySelf': 'end'
                };
                var0.commentCount = var1;
                var1 = {
                    'width': 20,
                    'height': 20
                };
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.INTERACTIVE_TEXT_DEFAULT;
                var1.tintColor = var6;
                var0.commentsIcon = var1;
                var1 = {};
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.TEXT_MUTED;
                var1.tintColor = var2;
                var0.chevron = var1;
                return var0;
        }
    };
    var8 = var11.bind(var12)(var8);
    var _closure1_slot21 = var8;
    var8 = {};
    var11 = 'function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}';
    var8.code = var11;
    var _closure1_slot22 = var8;
    var8 = 51;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/icymi/native/ICYMIShared.tsx';
    var8 = var9.bind(var10)(var8);
    var2.navigateToPost = var7;
    var2.Separator = var6;
    var2.truncateUsername = var5;
    var2.CutoutGuildIcon = var4;
    var2.GuildContentPost = var3;
    var3 = function arg0() {
        _fun103984: for (var _fun103984_ip = 0;;) switch (_fun103984_ip) {
            case 0:
                var1 = arg0;
                var21 = var1.guild;
                var _closure2_slot0 = var21;
                var8 = var1.channel;
                var _closure2_slot1 = var8;
                var14 = var1.author;
                var _closure2_slot2 = var14;
                var9 = var1.timestamp;
                var4 = var1.children;
                var5 = var1.id;
                var _closure2_slot3 = var5;
                var16 = var1.mentioned;
                var7 = var1.onHeaderPress;
                var6 = var1.onHeaderLongPress;
                var1 = _closure1_slot21;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 31;
                var1 = var10[var1];
                var11 = var2.bind(var3)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var2 = var3.getMember;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure2_slot2;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var10.bind(var11)(var2, var1);
                var1 = null;
                var10 = var1 == var2;
                var20 = undefined;
                if (var10) {
                    _fun103984_ip = 151;
                    continue _fun103984
                }
            case 145:
                var20 = var2.colorString;
            case 151:
                if (!(var1 == var20)) {
                    _fun103984_ip = 159;
                    continue _fun103984
                }
            case 155:
                var20 = _closure1_slot13;
            case 159:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = 32;
                var1 = var18[var1];
                var11 = var17.bind(var3)(var1);
                var10 = var11.useName;
                var2 = var21.id;
                var1 = var8.id;
                var15 = var10.bind(var11)(var2, var1, var14);
                var10 = _closure1_slot3;
                var2 = var10.useCallback;
                var11 = var14.id;
                var1 = new Array(3);
                var1[0] = var11;
                var11 = var8.id;
                var1[1] = var11;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 33;
                    var3 = var4[var1];
                    var0 = undefined;
                    var9 = var2.bind(var0)(var3);
                    var6 = var9.itemInteracted;
                    var8 = _closure2_slot3;
                    var7 = 'announcement';
                    var5 = 'open_profile';
                    var5 = var6.bind(var9)(var8, var7, var5);
                    var1 = var4[var1];
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.feedItemActioned;
                    var1 = {};
                    var1.itemId = var8;
                    var1.itemType = var7;
                    var7 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'item_header',
                        'actionIntentType': 'open',
                        'actionDestinationType': 'user'
                    };
                    var1.actionParameters = var7;
                    var1 = var5.bind(var6)(var1);
                    var1 = 34;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.id;
                    var1.userId = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var1.channelId = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13 = var2.bind(var10)(var0, var1);
                var2 = _closure1_slot18;
                var1 = _closure1_slot29;
                var0 = {};
                var0.guild = var21;
                var0.channel = var8;
                var0.timestamp = var9;
                var11 = _closure1_slot18;
                var10 = _closure1_slot27;
                var9 = {};
                var9.guild = var21;
                var9.author = var14;
                var9 = var11.bind(var3)(var10, var9);
                var0.avatar = var9;
                var14 = _closure1_slot18;
                var11 = 27;
                var9 = var18[var11];
                var9 = var17.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var22 = {};
                var23 = 225;
                var22.maxWidth = var23;
                var9.style = var22;
                var21 = var21.name;
                var9.children = var21;
                var8 = var8.id;
                var8 = var14.bind(var3)(var10, var9, var8);
                var0.title = var8;
                var10 = _closure1_slot19;
                var8 = var18[var11];
                var8 = var17.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'lineClamp': 2,
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var12 = var12.subtitle;
                var8.style = var12;
                var14 = _closure1_slot18;
                var11 = var18[var11];
                var11 = var17.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {};
                var21 = 'text-md/semibold';
                var11.variant = var21;
                var11.onPress = var13;
                var13 = {};
                var13.color = var20;
                var11.style = var13;
                var13 = _closure1_slot26;
                var15 = var13.bind(var3)(var15);
                var13 = ' ';
                var15 = var15 + var13;
                var11.children = var15;
                var12 = var14.bind(var3)(var12, var11);
                var11 = new Array(3);
                var11[0] = var12;
                var15 = _closure1_slot18;
                var12 = 35;
                var12 = var18[var12];
                var12 = var17.bind(var3)(var12);
                var14 = var12.AnnouncementsIcon;
                var12 = {};
                var20 = 'sm';
                var12.size = var20;
                var20 = _closure1_slot1;
                var19 = 21;
                var19 = var18[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.colors;
                var19 = var19.TEXT_SUBTLE;
                var12.color = var19;
                var12 = var15.bind(var3)(var14, var12);
                var11[1] = var12;
                var12 = 36;
                var12 = var18[var12];
                var15 = var17.bind(var3)(var12);
                var14 = var15.contentTypeToText;
                var12 = 9;
                var12 = var18[var12];
                var12 = var17.bind(var3)(var12);
                var12 = var12.ContentType;
                var12 = var12.ANNOUNCEMENT;
                var12 = var14.bind(var15)(var12, var16);
                var12 = var13 + var12;
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var0.subtitle = var8;
                var0.onHeaderPress = var7;
                var0.onHeaderLongPress = var6;
                var0.id = var5;
                var5 = 'announcement';
                var0.type = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.AnnouncementContentPost = var3;
    var3 = function arg0() {
        _fun103987: for (var _fun103987_ip = 0;;) switch (_fun103987_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guild;
                var _closure2_slot0 = var10;
                var8 = var0.channel;
                var _closure2_slot1 = var8;
                var4 = var0.children;
                var7 = var0.event;
                var _closure2_slot2 = var7;
                var6 = var0.type;
                var _closure2_slot3 = var6;
                var5 = var0.onHeaderPress;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot21;
                var12 = var0.bind(var3)();
                var15 = var7.host_id;
                var11 = null;
                if (!(var11 == var15)) {
                    _fun103987_ip = 96;
                    continue _fun103987
                }
            case 90:
                var15 = var7.creator_id;
            case 96:
                _closure2_slot4 = var15;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 37;
                var0 = var9[var0];
                var13 = var2.bind(var3)(var0);
                var9 = var13.useEnsureHydratedUsers;
                var2 = var7.guild_id;
                if (!(var11 == var15)) {
                    _fun103987_ip = 141;
                    continue _fun103987
                }
            case 135:
                var0 = new Array(0);
                _fun103987_ip = 152;
                continue _fun103987;
            case 141:
                var14 = new Array(1);
                var14[0] = var15;
                var0 = var14;
            case 152:
                var0 = var9.bind(var13)(var2, var0);
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 31;
                var13 = var9[var0];
                var16 = var2.bind(var3)(var13);
                var15 = var16.useStateFromStores;
                var13 = _closure1_slot9;
                var14 = new Array(1);
                var14[0] = var13;
                var13 = function() { // Environment: var1
                    var2 = _closure1_slot9;
                    var1 = var2.getUser;
                    var0 = _closure2_slot4;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var15.bind(var16)(var14, var13);
                _closure2_slot5 = var18;
                var0 = var9[var0];
                var13 = var2.bind(var3)(var0);
                var9 = var13.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    _fun103989: for (var _fun103989_ip = 0;;) switch (_fun103989_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun103989_ip = 48;
                                continue _fun103989
                            }
                        case 16:
                            var4 = _closure1_slot7;
                            var3 = var4.getMember;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var1 = _closure2_slot4;
                            var0 = var3.bind(var4)(var2, var1);
                        case 48:
                            return var0;
                    }
                };
                var0 = var9.bind(var13)(var2, var0);
                _closure2_slot6 = var0;
                var13 = _closure1_slot3;
                var9 = var13.useCallback;
                var2 = new Array(5);
                var2[0] = var18;
                var15 = var11 == var8;
                var14 = undefined;
                if (var15) {
                    _fun103987_ip = 286;
                    continue _fun103987
                }
            case 281:
                var14 = var8.id;
            case 286:
                var2[1] = var14;
                var14 = var7.id;
                var2[2] = var14;
                var15 = var11 == var0;
                var14 = undefined;
                if (var15) {
                    _fun103987_ip = 314;
                    continue _fun103987
                }
            case 308:
                var14 = var0.highestRoleId;
            case 314:
                var2[3] = var14;
                var2[4] = var6;
                var1 = function() { // Environment: var1
                    _fun103990: for (var _fun103990_ip = 0;;) switch (_fun103990_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun103990_ip = 221;
                                continue _fun103990
                            }
                        case 16:
                            var1 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 33;
                            var6 = var3[var0];
                            var2 = undefined;
                            var11 = var1.bind(var2)(var6);
                            var10 = var11.itemInteracted;
                            var8 = _closure2_slot2;
                            var9 = var8.id;
                            var7 = _closure2_slot3;
                            var6 = 'open_profile';
                            var6 = var10.bind(var11)(var9, var7, var6);
                            var0 = var3[var0];
                            var7 = var1.bind(var2)(var0);
                            var6 = var7.feedItemActioned;
                            var0 = {};
                            var8 = var8.id;
                            var0.itemId = var8;
                            var8 = 'guild_event';
                            var0.itemType = var8;
                            var8 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'item_header',
                                'actionIntentType': 'open',
                                'actionDestinationType': 'user'
                            };
                            var0.actionParameters = var8;
                            var0 = var6.bind(var7)(var0);
                            var0 = 34;
                            var0 = var3[var0];
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var3 = _closure2_slot5;
                            var3 = var3.id;
                            var0.userId = var3;
                            var3 = _closure2_slot6;
                            var6 = var5 == var3;
                            var3 = undefined;
                            if (var6) {
                                _fun103990_ip = 185;
                                continue _fun103990
                            }
                        case 175:
                            var6 = _closure2_slot6;
                            var3 = var6.highestRoleId;
                        case 185:
                            var0.roleId = var3;
                            var3 = _closure2_slot1;
                            var5 = var5 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun103990_ip = 212;
                                continue _fun103990
                            }
                        case 203:
                            var4 = _closure2_slot1;
                            var3 = var4.id;
                        case 212:
                            var0.channelId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 221:
                            var0 = undefined;
                            return var0;
                    }
                };
                var22 = var9.bind(var13)(var1, var2);
                var1 = var11 == var0;
                var23 = undefined;
                if (var1) {
                    _fun103987_ip = 350;
                    continue _fun103987
                }
            case 344:
                var23 = var0.colorString;
            case 350:
                if (!(var11 == var23)) {
                    _fun103987_ip = 358;
                    continue _fun103987
                }
            case 354:
                var23 = _closure1_slot13;
            case 358:
                var0 = var7.host_id;
                var16 = var11 != var0;
                var2 = _closure1_slot18;
                var1 = _closure1_slot29;
                var0 = {};
                var0.guild = var10;
                var0.channel = var8;
                var8 = 0;
                var0.timestamp = var8;
                var8 = true;
                var0.hideTimestamp = var8;
                if (!(var11 == var18)) {
                    _fun103987_ip = 471;
                    continue _fun103987
                }
            case 404:
                var13 = _closure1_slot18;
                var9 = _closure1_slot1;
                var19 = _closure1_slot2;
                var14 = 24;
                var8 = var19[var14];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.guild = var10;
                var15 = _closure1_slot0;
                var14 = var19[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.GuildIconSizes;
                var14 = var14.NORMAL;
                var8.size = var14;
                var8 = var13.bind(var3)(var9, var8);
                _fun103987_ip = 496;
                continue _fun103987;
            case 471:
                var14 = _closure1_slot18;
                var13 = _closure1_slot27;
                var9 = {};
                var9.guild = var10;
                var9.author = var18;
                var8 = var14.bind(var3)(var13, var9);
            case 496:
                var0.avatar = var8;
                var19 = _closure1_slot18;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var15 = 27;
                var13 = var8[var15];
                var13 = var9.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var20 = {};
                var21 = 225;
                var20.maxWidth = var21;
                var13.style = var20;
                var10 = var10.name;
                var13.children = var10;
                var10 = var7.id;
                var10 = var19.bind(var3)(var14, var13, var10);
                var0.title = var10;
                var10 = _closure1_slot18;
                var8 = var8[var15];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'lineClamp': 2,
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var12 = var12.subtitle;
                var8.style = var12;
                var13 = _closure1_slot19;
                var12 = _closure1_slot20;
                if (!(var11 == var18)) {
                    _fun103987_ip = 801;
                    continue _fun103987
                }
            case 642:
                var11 = {};
                var20 = _closure1_slot18;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var14 = 38;
                var14 = var25[var14];
                var14 = var24.bind(var3)(var14);
                var19 = var14.CalendarIcon;
                var14 = {};
                var21 = 'sm';
                var14.size = var21;
                var26 = _closure1_slot1;
                var21 = 21;
                var21 = var25[var21];
                var21 = var26.bind(var3)(var21);
                var21 = var21.colors;
                var21 = var21.TEXT_SUBTLE;
                var14.color = var21;
                var19 = var20.bind(var3)(var19, var14);
                var14 = new Array(2);
                var14[0] = var19;
                var19 = 39;
                var20 = var25[var19];
                var20 = var24.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var25[var19];
                var19 = var24.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.T7MIsc;
                var20 = var20.bind(var21)(var19);
                var19 = ' ';
                var19 = var19 + var20;
                var14[1] = var19;
                var11.children = var14;
                _fun103987_ip = 1062;
                continue _fun103987;
            case 801:
                var14 = {};
                var21 = _closure1_slot18;
                var20 = _closure1_slot0;
                var24 = _closure1_slot2;
                var15 = var24[var15];
                var15 = var20.bind(var3)(var15);
                var19 = var15.Text;
                var15 = {};
                var25 = 'text-md/semibold';
                var15.variant = var25;
                var15.onPress = var22;
                var22 = {};
                var22.color = var23;
                var15.style = var22;
                var22 = _closure1_slot26;
                var18 = var18.username;
                var22 = var22.bind(var3)(var18);
                var18 = ' ';
                var22 = var22 + var18;
                var15.children = var22;
                var19 = var21.bind(var3)(var19, var15);
                var15 = new Array(3);
                var15[0] = var19;
                var21 = _closure1_slot18;
                var19 = 38;
                var19 = var24[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.CalendarIcon;
                var19 = {};
                var22 = 'sm';
                var19.size = var22;
                var23 = _closure1_slot1;
                var22 = 21;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.colors;
                var22 = var22.TEXT_SUBTLE;
                var19.color = var22;
                var19 = var21.bind(var3)(var20, var19);
                var15[1] = var19;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 39;
                var19 = var22[var17];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var17 = var22[var17];
                var17 = var21.bind(var3)(var17);
                var17 = var17.t;
                if (var16) {
                    _fun103987_ip = 1034;
                    continue _fun103987
                }
            case 1015:
                var16 = var17.Vu15se;
                var16 = var19.bind(var20)(var16);
                var16 = var18 + var16;
                _fun103987_ip = 1051;
                continue _fun103987;
            case 1034:
                var17 = var17["42OrO4"];
                var17 = var19.bind(var20)(var17);
                var16 = var18 + var17;
            case 1051:
                var15[2] = var16;
                var14.children = var15;
                var11 = var14;
            case 1062:
                var11 = var13.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var0.subtitle = var8;
                var7 = var7.id;
                var0.id = var7;
                var0.type = var6;
                var0.onHeaderPress = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildEventPost = var3;
    var3 = function arg0() {
        _fun103991: for (var _fun103991_ip = 0;;) switch (_fun103991_ip) {
            case 0:
                var2 = arg0;
                var22 = var2.guild;
                var _closure2_slot0 = var22;
                var9 = var2.channel;
                var _closure2_slot1 = var9;
                var10 = var2.timestamp;
                var13 = var2.author;
                var _closure2_slot2 = var13;
                var1 = var2.message;
                var _closure2_slot3 = var1;
                var4 = var2.children;
                var6 = var2.id;
                var _closure2_slot4 = var6;
                var5 = var2.type;
                var _closure2_slot5 = var5;
                var8 = var2.onHeaderPress;
                var7 = var2.onHeaderLongPress;
                var11 = _closure1_slot3;
                var3 = var11.useMemo;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.determineContentType;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var16 = var3.bind(var11)(var1, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 31;
                var1 = var3[var1];
                var3 = undefined;
                var12 = var2.bind(var3)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var2 = var3.getMember;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure2_slot2;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var11.bind(var12)(var2, var1);
                var1 = null;
                var11 = var1 == var2;
                var23 = undefined;
                if (var11) {
                    _fun103991_ip = 189;
                    continue _fun103991
                }
            case 183:
                var23 = var2.colorString;
            case 189:
                if (!(var1 == var23)) {
                    _fun103991_ip = 197;
                    continue _fun103991
                }
            case 193:
                var23 = _closure1_slot13;
            case 197:
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 32;
                var1 = var17[var1];
                var12 = var15.bind(var3)(var1);
                var11 = var12.useName;
                var2 = var22.id;
                var1 = var9.id;
                var21 = var11.bind(var12)(var2, var1, var13);
                var1 = _closure1_slot23;
                var19 = var1.bind(var3)(var16);
                var2 = _closure1_slot3;
                var11 = var2.useCallback;
                var12 = var13.id;
                var1 = new Array(4);
                var1[0] = var12;
                var12 = var9.id;
                var1[1] = var12;
                var1[2] = var6;
                var1[3] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 33;
                    var3 = var4[var1];
                    var0 = undefined;
                    var9 = var2.bind(var0)(var3);
                    var8 = var9.itemInteracted;
                    var7 = _closure2_slot4;
                    var6 = _closure2_slot5;
                    var5 = 'open_profile';
                    var5 = var8.bind(var9)(var7, var6, var5);
                    var1 = var4[var1];
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.feedItemActioned;
                    var1 = {};
                    var1.itemId = var7;
                    var7 = 'message';
                    var1.itemType = var7;
                    var7 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'item_header',
                        'actionIntentType': 'open',
                        'actionDestinationType': 'user'
                    };
                    var1.actionParameters = var7;
                    var1 = var5.bind(var6)(var1);
                    var1 = 34;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.id;
                    var1.userId = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var1.channelId = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var14 = var11.bind(var2)(var0, var1);
                var1 = var2.useContext;
                var0 = 40;
                var0 = var17[var0];
                var0 = var15.bind(var3)(var0);
                var0 = var0.ICYMIContext;
                var0 = var1.bind(var2)(var0);
                var18 = var0.margin;
                var2 = _closure1_slot18;
                var1 = _closure1_slot29;
                var0 = {};
                var0.guild = var22;
                var0.channel = var9;
                var0.timestamp = var10;
                var12 = _closure1_slot18;
                var11 = _closure1_slot27;
                var10 = {};
                var10.guild = var22;
                var10.author = var13;
                var10 = var12.bind(var3)(var11, var10);
                var0.avatar = var10;
                var13 = _closure1_slot18;
                var12 = 27;
                var10 = var17[var12];
                var10 = var15.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var24 = {};
                var25 = 225;
                var24.maxWidth = var25;
                var10.style = var24;
                var22 = var22.name;
                var10.children = var22;
                var9 = var9.id;
                var9 = var13.bind(var3)(var11, var10, var9);
                var0.title = var9;
                var11 = _closure1_slot19;
                var9 = var17[var12];
                var9 = var15.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'lineClamp': 2,
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var13 = {};
                var13.marginRight = var18;
                var9.style = var13;
                var18 = _closure1_slot18;
                var12 = var17[var12];
                var12 = var15.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {};
                var22 = {};
                var22.color = var23;
                var12.style = var22;
                var12.onPress = var14;
                var14 = 'text-md/semibold';
                var12.variant = var14;
                var14 = _closure1_slot26;
                var21 = var14.bind(var3)(var21);
                var14 = ' ';
                var21 = var21 + var14;
                var12.children = var21;
                var13 = var18.bind(var3)(var13, var12);
                var12 = new Array(3);
                var12[0] = var13;
                var18 = _closure1_slot18;
                var13 = {};
                var21 = 'sm';
                var13.size = var21;
                var21 = _closure1_slot1;
                var20 = 21;
                var20 = var17[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.colors;
                var20 = var20.TEXT_SUBTLE;
                var13.color = var20;
                var13 = var18.bind(var3)(var19, var13);
                var12[1] = var13;
                var13 = 36;
                var13 = var17[var13];
                var15 = var15.bind(var3)(var13);
                var13 = var15.contentTypeToText;
                var13 = var13.bind(var15)(var16);
                var13 = var14 + var13;
                var12[2] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var0.subtitle = var9;
                var0.onHeaderPress = var8;
                var0.onHeaderLongPress = var7;
                var0.id = var6;
                var0.type = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.MessageContentPost = var3;
    var3 = function arg0() {
        var2 = arg0;
        var8 = var2.guild;
        var _closure2_slot0 = var8;
        var19 = var2.channel;
        var _closure2_slot1 = var19;
        var4 = var2.children;
        var5 = var2.id;
        var _closure2_slot2 = var5;
        var9 = var2.timestamp;
        var1 = var2.type;
        var _closure2_slot3 = var1;
        var7 = var2.onHeaderPress;
        var6 = var2.onHeaderLongPress;
        var2 = _closure1_slot21;
        var3 = undefined;
        var15 = var2.bind(var3)();
        var10 = _closure1_slot3;
        var11 = var10.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            _fun103996: for (var _fun103996_ip = 0;;) switch (_fun103996_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var4 = 9;
                    var0 = var0[var4];
                    var3 = undefined;
                    var0 = var5.bind(var3)(var0);
                    var0 = var0.GeneratedCandidateType;
                    var0 = var0.PRO_TIP;
                    if (!(var2 !== var0)) {
                        _fun103996_ip = 79;
                        continue _fun103996
                    }
                case 48:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var4];
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.ContentType;
                    var0 = var0.TRENDING_TOPIC;
                    _fun103996_ip = 108;
                    continue _fun103996;
                case 79:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var4];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.ContentType;
                    var0 = var1.PRO_TIP;
                case 108:
                    return var0;
            }
        };
        var24 = var11.bind(var10)(var1, var2);
        var2 = var10.useCallback;
        var11 = var19.id;
        var1 = new Array(3);
        var1[0] = var11;
        var11 = var8.id;
        var1[1] = var11;
        var1[2] = var5;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 33;
            var1 = var5[var3];
            var0 = undefined;
            var10 = var4.bind(var0)(var1);
            var9 = var10.itemInteracted;
            var7 = _closure2_slot2;
            var6 = 'generated_candidate';
            var8 = 'open_channel';
            var8 = var9.bind(var10)(var7, var6, var8);
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.feedItemActioned;
            var3 = {};
            var3.itemId = var7;
            var3.itemType = var6;
            var6 = {
                'actionGestureType': 'press',
                'actionTargetElement': 'item_header',
                'actionIntentType': 'navigate',
                'actionDestinationType': 'channel'
            };
            var3.actionParameters = var6;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot24;
            var2 = _closure2_slot1;
            var2 = var2.id;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var3.bind(var0)(var2, var1, var0);
            return var0;
        };
        var20 = var2.bind(var10)(var0, var1);
        var0 = _closure1_slot23;
        var21 = var0.bind(var3)(var24);
        var2 = _closure1_slot18;
        var1 = _closure1_slot29;
        var0 = {};
        var0.guild = var8;
        var0.channel = var19;
        var0.timestamp = var9;
        var11 = _closure1_slot18;
        var10 = _closure1_slot28;
        var9 = {};
        var9.guild = var8;
        var14 = _closure1_slot18;
        var13 = _closure1_slot4;
        var12 = {};
        var16 = var15.insetIconWrapper;
        var12.style = var16;
        var17 = _closure1_slot18;
        var16 = {
            'size': 'xs',
            'color': 'text-brand'
        };
        var16 = var17.bind(var3)(var21, var16);
        var12.children = var16;
        var12 = var14.bind(var3)(var13, var12);
        var9.icon = var12;
        var9 = var11.bind(var3)(var10, var9);
        var0.avatar = var9;
        var11 = _closure1_slot18;
        var17 = _closure1_slot0;
        var22 = _closure1_slot2;
        var16 = 27;
        var9 = var22[var16];
        var9 = var17.bind(var3)(var9);
        var10 = var9.Text;
        var9 = {
            'style': null,
            'lineClamp': 1,
            'variant': 'text-sm/medium',
            'color': 'text-muted'
        };
        var12 = {};
        var13 = 225;
        var12.maxWidth = var13;
        var9.style = var12;
        var21 = 1;
        var8 = var8.name;
        var9.children = var8;
        var8 = var19.id;
        var8 = var11.bind(var3)(var10, var9, var8);
        var0.title = var8;
        var10 = _closure1_slot19;
        var9 = _closure1_slot4;
        var8 = {};
        var11 = var15.genContentSubtitle;
        var8.style = var11;
        var13 = _closure1_slot18;
        var11 = var22[var16];
        var11 = var17.bind(var3)(var11);
        var12 = var11.Text;
        var11 = {
            'variant': 'text-md/medium',
            'color': 'text-brand'
        };
        var14 = 36;
        var14 = var22[var14];
        var23 = var17.bind(var3)(var14);
        var14 = var23.contentTypeToText;
        var14 = var14.bind(var23)(var24);
        var11.children = var14;
        var12 = var13.bind(var3)(var12, var11);
        var11 = new Array(3);
        var11[0] = var12;
        var14 = _closure1_slot18;
        var12 = var22[var16];
        var12 = var17.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/medium',
            'color': 'text-default'
        };
        var23 = 39;
        var24 = var22[var23];
        var24 = var17.bind(var3)(var24);
        var25 = var24.intl;
        var24 = var25.string;
        var23 = var22[var23];
        var23 = var17.bind(var3)(var23);
        var23 = var23.t;
        var23 = var23.CHUAYk;
        var23 = var24.bind(var25)(var23);
        var12.children = var23;
        var12 = var14.bind(var3)(var13, var12);
        var11[1] = var12;
        var14 = _closure1_slot19;
        var13 = _closure1_slot4;
        var12 = {};
        var15 = var15.genContentSubtitleChannel;
        var12.style = var15;
        var24 = _closure1_slot18;
        var15 = 41;
        var15 = var22[var15];
        var15 = var17.bind(var3)(var15);
        var23 = var15.TextIcon;
        var15 = {
            'size': 'xs',
            'color': 'mobile-text-heading-primary'
        };
        var23 = var24.bind(var3)(var23, var15);
        var15 = new Array(2);
        var15[0] = var23;
        var18 = _closure1_slot18;
        var16 = var22[var16];
        var16 = var17.bind(var3)(var16);
        var17 = var16.Text;
        var16 = {
            'variant': 'text-md/semibold',
            'onPress': null,
            'style': null,
            'lineClamp': 1,
            'ellipsizeMode': 'tail'
        };
        var16.onPress = var20;
        var20 = {};
        var20.flex = var21;
        var16.style = var20;
        var19 = var19.name;
        var16.children = var19;
        var16 = var18.bind(var3)(var17, var16);
        var15[1] = var16;
        var12.children = var15;
        var12 = var14.bind(var3)(var13, var12);
        var11[2] = var12;
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var0.subtitle = var8;
        var0.onHeaderPress = var7;
        var0.onHeaderLongPress = var6;
        var0.id = var5;
        var5 = 'generated_candidate';
        var0.type = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.GeneratedCandidateContentPost = var3;
    var3 = function arg0() {
        _fun103998: for (var _fun103998_ip = 0;;) switch (_fun103998_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.children;
                var8 = var0.hideDivider;
                var0 = var0.highlight;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun103998_ip = 30;
                    continue _fun103998
                }
            case 28:
                var0 = false;
            case 30:
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot21;
                var11 = var2.bind(var3)();
                var4 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 42;
                var2 = var15[var2];
                var2 = var4.bind(var3)(var2);
                var12 = var2.bind(var3)();
                var16 = _closure1_slot0;
                var2 = 43;
                var2 = var15[var2];
                var9 = var16.bind(var3)(var2);
                var6 = var9.useToken;
                var2 = 21;
                var5 = var15[var2];
                var5 = var4.bind(var3)(var5);
                var5 = var5.colors;
                var5 = var5.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
                var14 = var6.bind(var9)(var5, var12);
                _closure2_slot1 = var14;
                var5 = 44;
                var5 = var15[var5];
                var6 = var16.bind(var3)(var5);
                var5 = var6.hexWithOpacity;
                var2 = var15[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.unsafe_rawColors;
                var4 = var2.BRAND_360;
                var2 = 0.25;
                var12 = var5.bind(var6)(var4, var2);
                _closure2_slot2 = var12;
                var13 = 45;
                var2 = var15[var13];
                var5 = var16.bind(var3)(var2);
                var4 = var5.useSharedValue;
                var2 = 0;
                var6 = var4.bind(var5)(var2);
                _closure2_slot3 = var6;
                var2 = var15[var13];
                var5 = var16.bind(var3)(var2);
                var4 = var5.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 45;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.interpolateColor;
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var6 = _closure2_slot1;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var1 = _closure2_slot2;
                    var2[1] = var1;
                    var1 = [0, 1];
                    var1 = var4.bind(var5)(var3, var1, var2);
                    var0.backgroundColor = var1;
                    return var0;
                };
                var9 = {};
                var15 = var15[var13];
                var15 = var16.bind(var3)(var15);
                var15 = var15.interpolateColor;
                var9.interpolateColor = var15;
                var9.progress = var6;
                var9.bgColor = var14;
                var9.bgColorHighlighted = var12;
                var2.__closure = var9;
                var9 = 11116019021445.0;
                var2.__workletHash = var9;
                var9 = _closure1_slot22;
                var2.__initData = var9;
                var12 = var4.bind(var5)(var2);
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var6;
                var1 = function() { // Environment: var1
                    _fun104000: for (var _fun104000_ip = 0;;) switch (_fun104000_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun104000_ip = 157;
                                continue _fun104000
                            }
                        case 13:
                            var2 = _closure2_slot3;
                            var1 = var2.set;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 45;
                            var0 = var11[var6];
                            var9 = undefined;
                            var5 = var10.bind(var9)(var0);
                            var4 = var5.withSequence;
                            var0 = 46;
                            var3 = var11[var0];
                            var13 = var10.bind(var9)(var3);
                            var12 = var13.withTiming;
                            var7 = {};
                            var8 = 500;
                            var7.duration = var8;
                            var3 = 1;
                            var3 = var12.bind(var13)(var3, var7);
                            var6 = var11[var6];
                            var7 = var10.bind(var9)(var6);
                            var6 = var7.withDelay;
                            var0 = var11[var0];
                            var11 = var10.bind(var9)(var0);
                            var10 = var11.withTiming;
                            var9 = {};
                            var0 = 350;
                            var9.duration = var0;
                            var0 = 0;
                            var0 = var10.bind(var11)(var0, var9);
                            var0 = var6.bind(var7)(var8, var0);
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                        case 157:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot19;
                var1 = _closure1_slot20;
                var4 = {};
                var9 = _closure1_slot18;
                if (var0) {
                    _fun103998_ip = 440;
                    continue _fun103998
                }
            case 372:
                var5 = _closure1_slot4;
                var0 = {};
                var6 = var11.simplePostContent;
                var0.style = var6;
                var0.children = var10;
                var5 = var9.bind(var3)(var5, var0);
                var0 = new Array(2);
                var0[0] = var5;
                var5 = null;
                if (var8) {
                    _fun103998_ip = 427;
                    continue _fun103998
                }
            case 411:
                var15 = _closure1_slot18;
                var14 = _closure1_slot25;
                var6 = {};
                var5 = var15.bind(var3)(var14, var6);
            case 427:
                var0[1] = var5;
                var4.children = var0;
                var0 = var4;
                _fun103998_ip = 536;
                continue _fun103998;
            case 440:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var13];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var13 = var11.simplePostContent;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var5.style = var11;
                var5.children = var10;
                var6 = var9.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = null;
                if (var8) {
                    _fun103998_ip = 525;
                    continue _fun103998
                }
            case 509:
                var9 = _closure1_slot18;
                var8 = _closure1_slot25;
                var7 = {};
                var6 = var9.bind(var3)(var8, var7);
            case 525:
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 536:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SimplePost = var3;
    var1 = function arg0() {
        _fun104001: for (var _fun104001_ip = 0;;) switch (_fun104001_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guild;
                var5 = var0.parentMessage;
                var _closure2_slot0 = var5;
                var4 = var0.onPress;
                var6 = var0.style;
                var0 = var0.inForum;
                var2 = _closure1_slot21;
                var3 = undefined;
                var12 = var2.bind(var3)();
                var8 = null;
                var2 = var8 != var0;
                if (!var2) {
                    _fun104001_ip = 61;
                    continue _fun104001
                }
            case 58:
                var2 = var0;
            case 61:
                var0 = function arg0, arg1, arg2() {
                    var4 = arg0;
                    var7 = arg1;
                    var8 = arg2;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var7;
                    var _closure3_slot2 = var8;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var3 = var6.useStateFromStoresObject;
                    var1 = _closure1_slot6;
                    var2 = new Array(2);
                    var2[0] = var1;
                    var1 = _closure1_slot5;
                    var2[1] = var1;
                    var1 = function() { // Environment: var0
                        _fun104003: for (var _fun104003_ip = 0;;) switch (_fun104003_ip) {
                            case 0:
                                var0 = {};
                                var6 = _closure1_slot6;
                                var5 = var6.getChannel;
                                var3 = _closure3_slot1;
                                var4 = var3.id;
                                var4 = var5.bind(var6)(var4);
                                var0.thread = var4;
                                var5 = _closure1_slot5;
                                var4 = var5.getCount;
                                var3 = var3.id;
                                var4 = var4.bind(var5)(var3);
                                var3 = null;
                                var5 = var3 != var4;
                                var3 = 0;
                                if (!var5) {
                                    _fun104003_ip = 70;
                                    continue _fun104003
                                }
                            case 67:
                                var3 = var4;
                            case 70:
                                var0.messageCount = var3;
                                var3 = _closure1_slot5;
                                var2 = var3.getMostRecentMessage;
                                var1 = _closure3_slot1;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                var0.mostRecentMessage = var1;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var6)(var2, var1);
                    var3 = var1.thread;
                    var2 = var1.messageCount;
                    var1 = var1.mostRecentMessage;
                    var6 = _closure1_slot3;
                    var5 = var6.useEffect;
                    var9 = var4.id;
                    var4 = new Array(3);
                    var4[0] = var9;
                    var4[1] = var8;
                    var4[2] = var7;
                    var0 = function() { // Environment: var0
                        _fun104004: for (var _fun104004_ip = 0;;) switch (_fun104004_ip) {
                            case 0:
                                var4 = _closure3_slot1;
                                var3 = var4.hasFlag;
                                var2 = _closure1_slot15;
                                var2 = var2.HAS_THREAD;
                                var2 = var3.bind(var4)(var2);
                                if (var2) {
                                    _fun104004_ip = 38;
                                    continue _fun104004
                                }
                            case 34:
                                var2 = _closure3_slot2;
                            case 38:
                                if (!var2) {
                                    _fun104004_ip = 71;
                                    continue _fun104004
                                }
                            case 41:
                                var5 = _closure1_slot5;
                                var4 = var5.getMostRecentMessage;
                                var3 = _closure3_slot1;
                                var3 = var3.id;
                                var4 = var4.bind(var5)(var3);
                                var3 = null;
                                var2 = var3 == var4;
                            case 71:
                                if (!var2) {
                                    _fun104004_ip = 174;
                                    continue _fun104004
                                }
                            case 74:
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 47;
                                var3 = var4[var1];
                                var1 = undefined;
                                var7 = var2.bind(var1)(var3);
                                var6 = var7.preload;
                                var3 = _closure3_slot0;
                                var5 = var3.id;
                                var3 = _closure3_slot1;
                                var0 = var3.id;
                                var0 = var6.bind(var7)(var5, var0);
                                var0 = 17;
                                var0 = var4[var0];
                                var2 = var2.bind(var1)(var0);
                                var1 = var2.fetchMessages;
                                var0 = {
                                    'channelId': null,
                                    'isPreload': true,
                                    'limit': 25
                                };
                                var3 = var3.id;
                                var0.channelId = var3;
                                var0 = var1.bind(var2)(var0);
                            case 174:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var5.bind(var6)(var0, var4);
                    var0 = {};
                    var0.thread = var3;
                    var0.messageCount = var2;
                    var0.mostRecentMessage = var1;
                    return var0;
                };
                var2 = var0.bind(var3)(var7, var5, var2);
                var7 = var2.thread;
                var0 = var2.messageCount;
                var14 = var2.mostRecentMessage;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 31;
                var2 = var10[var2];
                var10 = var5.bind(var3)(var2);
                var5 = var10.useStateFromStores;
                var11 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot8;
                    var2 = var3.canWithPartialContext;
                    var0 = _closure1_slot16;
                    var1 = var0.VIEW_CHANNEL;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var0.channelId = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var5.bind(var10)(var2, var1);
                if (var1) {
                    _fun104001_ip = 148;
                    continue _fun104001
                }
            case 146:
                return var8;
            case 148:
                if (!(var8 != var7)) {
                    _fun104001_ip = 709;
                    continue _fun104001
                }
            case 155:
                if (!(var8 != var14)) {
                    _fun104001_ip = 709;
                    continue _fun104001
                }
            case 162:
                var1 = 99;
                var1 = var0 > var1;
                var18 = '99+';
                if (var1) {
                    _fun104001_ip = 181;
                    continue _fun104001
                }
            case 178:
                var18 = var0;
            case 181:
                var2 = _closure1_slot19;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 26;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var11 = var12.comments;
                var10 = new Array(2);
                var10[0] = var11;
                var10[1] = var6;
                var0.style = var10;
                var0.onPress = var4;
                var11 = _closure1_slot18;
                var10 = _closure1_slot1;
                var13 = 22;
                var5 = var5[var13];
                var10 = var10.bind(var3)(var5);
                var5 = {};
                var15 = var8 == var14;
                var8 = undefined;
                if (var15) {
                    _fun104001_ip = 276;
                    continue _fun104001
                }
            case 270:
                var8 = var14.author;
            case 276:
                var5.user = var8;
                var7 = var7.guild_id;
                var5.guildId = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var13 = var7[var13];
                var13 = var8.bind(var3)(var13);
                var13 = var13.AvatarSizes;
                var13 = var13.XSMALL;
                var5.size = var13;
                var10 = var11.bind(var3)(var10, var5);
                var5 = new Array(3);
                var5[0] = var10;
                var10 = _closure1_slot18;
                var13 = 27;
                var7 = var7[var13];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-sm/semibold',
                    'lineClamp': 1
                };
                var11 = var12.recentCommentText;
                var7.style = var11;
                var11 = var14.content;
                var15 = var11.length;
                var11 = 0;
                if (!(!(var15 > var11))) {
                    _fun104001_ip = 456;
                    continue _fun104001
                }
            case 397:
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 39;
                var15 = var19[var11];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var11 = var19[var11];
                var11 = var17.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["6kp9H2"];
                var11 = var15.bind(var16)(var11);
                _fun104001_ip = 495;
                continue _fun104001;
            case 456:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var15 = 50;
                var15 = var17[var15];
                var17 = var16.bind(var3)(var15);
                var16 = var17.parseInlineReply;
                var15 = var14.content;
                var14 = true;
                var11 = var16.bind(var17)(var15, var14);
            case 495:
                var7.children = var11;
                var7 = var10.bind(var3)(var8, var7);
                var5[1] = var7;
                var10 = _closure1_slot19;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = var12.commentCount;
                var7.style = var11;
                var17 = _closure1_slot18;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 48;
                var11 = var16[var11];
                var11 = var14.bind(var3)(var11);
                var15 = var11.ChatIcon;
                var11 = {};
                var19 = var12.commentsIcon;
                var11.style = var19;
                var15 = var17.bind(var3)(var15, var11);
                var11 = new Array(3);
                var11[0] = var15;
                var17 = _closure1_slot18;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var15 = var13.Text;
                var13 = {
                    'variant': 'text-sm/bold',
                    'color': 'interactive-text-default'
                };
                var13.children = var18;
                var13 = var17.bind(var3)(var15, var13);
                var11[1] = var13;
                var15 = _closure1_slot18;
                var13 = 49;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.ChevronSmallRightIcon;
                var13 = {};
                var16 = var12.chevron;
                var13.style = var16;
                var16 = 'xxs';
                var13.size = var16;
                var13 = var15.bind(var3)(var14, var13);
                var11[2] = var13;
                var7.children = var11;
                var7 = var10.bind(var3)(var8, var7);
                var5[2] = var7;
                var0.children = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 709:
                var2 = _closure1_slot19;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 26;
                var0 = var13[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var7 = var12.comments;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.onPress = var4;
                var6 = _closure1_slot18;
                var4 = 27;
                var4 = var13[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-muted',
                    'lineClamp': 1
                };
                var7 = var12.recentCommentText;
                var4.style = var7;
                var7 = 39;
                var8 = var13[var7];
                var8 = var10.bind(var3)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var7 = var13[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.VMWjXW;
                var7 = var8.bind(var11)(var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot19;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var12.commentCount;
                var5.style = var8;
                var14 = _closure1_slot18;
                var8 = 48;
                var8 = var13[var8];
                var8 = var10.bind(var3)(var8);
                var11 = var8.ChatIcon;
                var8 = {};
                var15 = var12.commentsIcon;
                var8.style = var15;
                var11 = var14.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot18;
                var9 = 49;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.ChevronSmallRightIcon;
                var9 = {};
                var12 = var12.chevron;
                var9.style = var12;
                var12 = 'xxs';
                var9.size = var12;
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
    var2.ThreadAsComments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6473, 1372, 1681, 3091, 1621, 660, 33, 6621, 7411, 4851, 8853, 13479, 4574, 5617, 5851, 6526, 4251, 13529, 478, 671, 5452, 5457, 7396, 4090, 4902, 3941, 4222, 13569, 8949, 566, 3961, 8888, 7353, 4857, 8887, 13260, 8184, 1234, 13530, 4846, 3246, 3151, 3240, 3720, 4097, 3945, 4838, 7743, 4781, 2]);