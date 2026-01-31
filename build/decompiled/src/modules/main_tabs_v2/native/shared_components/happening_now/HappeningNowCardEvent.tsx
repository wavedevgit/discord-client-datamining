// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.HAPPENING_NOW_CONTENT_HEIGHT;
    var _closure1_slot8 = var3;
    var8 = var7.HappeningNowCardTrackingType;
    var _closure1_slot9 = var8;
    var8 = var7.HAPPENING_NOW_CARD_HEIGHT;
    var _closure1_slot10 = var8;
    var13 = var7.HAPPENING_NOW_EVENT_BANNER_WIDTH;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot12 = var8;
    var7 = var7.jsxs;
    var _closure1_slot13 = var7;
    var7 = 7;
    var7 = var5[var7];
    var11 = var4.bind(var0)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var15 = 'center';
    var8 = {
        'alignSelf': 'center',
        'flexShrink': 1,
        'marginLeft': 12,
        'gap': 2
    };
    var7.info = var8;
    var12 = {
        'alignSelf': 'center',
        'justifyContent': 'center',
        'flexShrink': 1,
        'flexGrow': 1,
        'backgroundColor': null,
        'height': null,
        'gap': 2,
        'marginRight': 4294967292,
        'paddingLeft': 8,
        'paddingRight': 8
    };
    var8 = 8;
    var16 = var5[var8];
    var16 = var14.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOD_MUTED;
    var12.backgroundColor = var16;
    var12.height = var3;
    var16 = var5[var8];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var12.borderTopRightRadius = var16;
    var16 = var5[var8];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var12.borderBottomRightRadius = var16;
    var7.infoNoImage = var12;
    var12 = {};
    var16 = var5[var8];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var12.borderTopRightRadius = var16;
    var16 = var5[var8];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var12.borderBottomRightRadius = var16;
    var12.alignSelf = var15;
    var12.width = var13;
    var12.height = var3;
    var7.decorationImage = var12;
    var12 = {
        'flexDirection': 'column',
        'gap': 4,
        'position': 'absolute',
        'right': 0,
        'top': 0,
        'bottom': 0,
        'overflow': 'hidden'
    };
    var7.dottedLineContainer = var12;
    var12 = {
        'width': 2,
        'height': 2,
        'backgroundColor': null,
        'opacity': 0.8
    };
    var13 = var5[var8];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_STRONG;
    var12.backgroundColor = var13;
    var7.shortDottedLineSegment = var12;
    var12 = {
        'width': 2,
        'height': 4,
        'backgroundColor': null,
        'opacity': 0.8
    };
    var13 = var5[var8];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_STRONG;
    var12.backgroundColor = var13;
    var7.dottedLineSegment = var12;
    var12 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var7.interestedUsersContainer = var12;
    var12 = {};
    var13 = var5[var8];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var12.tintColor = var13;
    var7.interestedUsersIcon = var12;
    var12 = {
        'backgroundColor': null,
        'flexDirection': 'column',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'height': null,
        'padding': 6
    };
    var13 = var5[var8];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var12.backgroundColor = var13;
    var12.height = var3;
    var13 = var5[var8];
    var13 = var14.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var12.borderTopLeftRadius = var13;
    var13 = var5[var8];
    var13 = var14.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var12.borderBottomLeftRadius = var13;
    var7.ticketContainer = var12;
    var12 = {};
    var13 = 9;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var14 = var13.AVATAR_SIZE_MAP;
    var13 = 10;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.AvatarSizes;
    var13 = var13.XSMALL_20;
    var13 = var14[var13];
    var12.width = var13;
    var7.avatarContainer = var12;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot14 = var7;
    var7 = {};
    var10 = 11;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.CutoutShape;
    var10 = var10.Circle;
    var7.shape = var10;
    var10 = -8;
    var7.x = var10;
    var3 = var3 / var9;
    var3 = var3 - var8;
    var7.y = var3;
    var3 = 16;
    var7.size = var3;
    var3 = new Array(1);
    var3[0] = var7;
    var _closure1_slot15 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        _fun101707: for (var _fun101707_ip = 0;;) switch (_fun101707_ip) {
            case 0:
                var0 = _closure1_slot14;
                var6 = undefined;
                var5 = var0.bind(var6)();
                var0 = new Array(0);
                var1 = _closure1_slot8;
                var4 = 0;
                var1 = var4 <= var1;
                var3 = 8;
                var2 = 0;
                if (!var1) {
                    _fun101707_ip = 96;
                    continue _fun101707
                }
            case 35:
                var8 = var0.push;
                var10 = _closure1_slot12;
                var9 = _closure1_slot4;
                var1 = {};
                if (!(var4 !== var2)) {
                    _fun101707_ip = 62;
                    continue _fun101707
                }
            case 54:
                var11 = var5.dottedLineSegment;
                _fun101707_ip = 68;
                continue _fun101707;
            case 62:
                var11 = var5.shortDottedLineSegment;
            case 68:
                var1.style = var11;
                var1 = var10.bind(var6)(var9, var1, var2);
                var1 = var8.bind(var0)(var1);
                var2 = var2 + var3;
                var1 = _closure1_slot8;
                if (var2 <= var1) {
                    _fun101707_ip = 35;
                    continue _fun101707
                }
            case 96:
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot16 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun101708: for (var _fun101708_ip = 0;;) switch (_fun101708_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.event;
                var _closure2_slot0 = var17;
                var8 = var1.index;
                var _closure2_slot1 = var8;
                var14 = var1.isLive;
                var6 = var1.fullwidth;
                var4 = var1.panelVariant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun101708_ip = 50;
                    continue _fun101708
                }
            case 48:
                var4 = false;
            case 50:
                var _closure2_slot2 = var3;
                var1 = _closure1_slot14;
                var9 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 12;
                var1 = var1[var5];
                var10 = var2.bind(var3)(var1);
                var7 = var10.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var29 = var7.bind(var10)(var2, var1);
                var7 = var17.host_id;
                var10 = null;
                if (!(var10 == var7)) {
                    _fun101708_ip = 133;
                    continue _fun101708
                }
            case 127:
                var7 = var17.creator_id;
            case 133:
                _closure2_slot2 = var7;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 13;
                var1 = var11[var1];
                var12 = var2.bind(var3)(var1);
                var11 = var12.useEnsureHydratedUsers;
                var2 = var17.guild_id;
                if (!(var10 == var7)) {
                    _fun101708_ip = 178;
                    continue _fun101708
                }
            case 172:
                var1 = new Array(0);
                _fun101708_ip = 189;
                continue _fun101708;
            case 178:
                var15 = new Array(1);
                var15[0] = var7;
                var1 = var15;
            case 189:
                var1 = var11.bind(var12)(var2, var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var11 = var2.bind(var3)(var1);
                var5 = var11.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var25 = var5.bind(var11)(var2, var1);
                var1 = var10 != var17;
                var11 = null;
                if (!var1) {
                    _fun101708_ip = 282;
                    continue _fun101708
                }
            case 251:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getNextRecurrenceIdInEvent;
                var11 = var1.bind(var2)(var17);
            case 282:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 15;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var17.guild_id;
                var1 = var17.id;
                var28 = var5.bind(var3)(var2, var1, var11);
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = new Array(3);
                var1[0] = var17;
                var1[1] = var8;
                var1[2] = var7;
                var0 = function() { // Environment: var0
                    _fun101711: for (var _fun101711_ip = 0;;) switch (_fun101711_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.track;
                            var2 = _closure1_slot11;
                            var3 = var2.ACTIVITY_CARD_CLICKED;
                            var2 = {};
                            var7 = _closure2_slot1;
                            var2.order = var7;
                            var7 = _closure2_slot0;
                            var7 = var7.guild_id;
                            var2.guild_id = var7;
                            var7 = _closure1_slot9;
                            var7 = var7.GUILD_EVENT_CARD;
                            var2.type = var7;
                            var8 = _closure2_slot2;
                            var7 = null;
                            var8 = var7 != var8;
                            if (!var8) {
                                _fun101711_ip = 109;
                                continue _fun101711
                            }
                        case 94:
                            var9 = _closure2_slot2;
                            var8 = new Array(1);
                            var8[0] = var9;
                            var7 = var8;
                        case 109:
                            var2.highlighted_user_ids = var7;
                            var4 = _closure2_slot0;
                            var7 = var4.channel_id;
                            var2.destination_channel_id = var7;
                            var2 = var5.bind(var6)(var3, var2);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openGuildEventDetails;
                            var1 = {};
                            var5 = var4.id;
                            var1.eventId = var5;
                            var1.event = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var5 = var2.bind(var5)(var0, var1);
                var0 = var17.image;
                var0 = var10 != var0;
                var8 = null;
                if (!var0) {
                    _fun101708_ip = 428;
                    continue _fun101708
                }
            case 372:
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 18;
                var0 = var11[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.makeSource;
                var7 = _closure1_slot1;
                var0 = 19;
                var0 = var11[var0];
                var7 = var7.bind(var3)(var0);
                var0 = 200;
                var0 = var7.bind(var3)(var17, var0);
                var8 = var1.bind(var2)(var0);
            case 428:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 14;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getEventTimeData;
                var0 = var17.scheduled_start_time;
                var0 = var1.bind(var2)(var0);
                var12 = var0.startDateTimeString;
                var7 = new Array(0);
                var0 = _closure1_slot10;
                var22 = 0;
                var0 = var22 < var0;
                var2 = 8;
                var1 = 0;
                if (!var0) {
                    _fun101708_ip = 542;
                    continue _fun101708
                }
            case 493:
                var11 = var7.push;
                var16 = _closure1_slot12;
                var15 = _closure1_slot4;
                var0 = {};
                var18 = var9.dottedLineSegment;
                var0.style = var18;
                var0 = var16.bind(var3)(var15, var0, var1);
                var0 = var11.bind(var7)(var0);
                var1 = var1 + var2;
                var0 = _closure1_slot10;
                if (var1 < var0) {
                    _fun101708_ip = 493;
                    continue _fun101708
                }
            case 542:
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var15 = 20;
                var0 = var0[var15];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPress = var5;
                var5 = 'stretchy';
                if (!var6) {
                    _fun101708_ip = 585;
                    continue _fun101708
                }
            case 581:
                var5 = 'full';
            case 585:
                var0.width = var5;
                var0.panelVariant = var4;
                var6 = _closure1_slot13;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 11;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var7 = _closure1_slot15;
                var4.cutouts = var7;
                var11 = _closure1_slot4;
                var7 = {};
                var16 = var9.ticketContainer;
                var7.style = var16;
                var18 = _closure1_slot12;
                var16 = {};
                var19 = var9.avatarContainer;
                var16.style = var19;
                var19 = var10 != var25;
                if (!var19) {
                    _fun101708_ip = 753;
                    continue _fun101708
                }
            case 668:
                var23 = _closure1_slot12;
                var21 = _closure1_slot1;
                var26 = _closure1_slot2;
                var24 = 10;
                var20 = var26[var24];
                var21 = var21.bind(var3)(var20);
                var20 = {};
                var20.user = var25;
                var25 = var25.avatarDecoration;
                var20.avatarDecoration = var25;
                var25 = var17.guild_id;
                var20.guildId = var25;
                var25 = _closure1_slot0;
                var24 = var26[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.AvatarSizes;
                var24 = var24.XSMALL_20;
                var20.size = var24;
                var19 = var23.bind(var3)(var21, var20);
            case 753:
                var16.children = var19;
                var18 = var18.bind(var3)(var11, var16);
                var16 = new Array(2);
                var16[0] = var18;
                var20 = _closure1_slot13;
                var19 = _closure1_slot4;
                var18 = {};
                var21 = var9.interestedUsersContainer;
                var18.style = var21;
                var24 = _closure1_slot12;
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 21;
                var21 = var25[var21];
                var21 = var23.bind(var3)(var21);
                var23 = var21.GroupIcon;
                var21 = {};
                var25 = var9.interestedUsersIcon;
                var21.style = var25;
                var25 = 'xxs';
                var21.size = var25;
                var23 = var24.bind(var3)(var23, var21);
                var21 = new Array(2);
                var21[0] = var23;
                var22 = var28 > var22;
                if (!var22) {
                    _fun101708_ip = 939;
                    continue _fun101708
                }
            case 862:
                var25 = _closure1_slot12;
                var27 = _closure1_slot0;
                var30 = _closure1_slot2;
                var23 = 22;
                var23 = var30[var23];
                var23 = var27.bind(var3)(var23);
                var24 = var23.Text;
                var23 = {
                    'color': 'mobile-text-heading-primary',
                    'variant': 'text-xs/semibold'
                };
                var26 = 23;
                var26 = var30[var26];
                var27 = var27.bind(var3)(var26);
                var26 = var27.humanizeValue;
                var26 = var26.bind(var27)(var28, var29);
                var23.children = var26;
                var22 = var25.bind(var3)(var24, var23);
            case 939:
                var21[1] = var22;
                var18.children = var21;
                var18 = var20.bind(var3)(var19, var18);
                var16[1] = var18;
                var7.children = var16;
                var11 = var6.bind(var3)(var11, var7);
                var7 = new Array(2);
                var7[0] = var11;
                var11 = var10 == var8;
                if (!var11) {
                    _fun101708_ip = 1024;
                    continue _fun101708
                }
            case 982:
                var19 = _closure1_slot12;
                var18 = _closure1_slot4;
                var16 = {};
                var20 = var9.dottedLineContainer;
                var16.style = var20;
                var21 = _closure1_slot16;
                var20 = {};
                var20 = var19.bind(var3)(var21, var20);
                var16.children = var20;
                var11 = var19.bind(var3)(var18, var16);
            case 1024:
                var7[1] = var11;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var10 != var8;
                if (!var5) {
                    _fun101708_ip = 1091;
                    continue _fun101708
                }
            case 1053:
                var11 = _closure1_slot12;
                var7 = _closure1_slot5;
                var6 = {};
                var16 = var9.decorationImage;
                var6.style = var16;
                var6.source = var8;
                var16 = 'cover';
                var6.resizeMode = var16;
                var5 = var11.bind(var3)(var7, var6);
            case 1091:
                var4[1] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot4;
                var5 = {};
                if (!(var10 != var8)) {
                    _fun101708_ip = 1117;
                    continue _fun101708
                }
            case 1109:
                var8 = var9.info;
                _fun101708_ip = 1123;
                continue _fun101708;
            case 1117:
                var8 = var9.infoNoImage;
            case 1123:
                var5.style = var8;
                var11 = _closure1_slot12;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var8 = var9[var15];
                var8 = var10.bind(var3)(var8);
                var16 = var8.HappeningNowCardHeader;
                var8 = {
                    'lineClamp': 3,
                    'noMargin': true
                };
                var17 = var17.name;
                var8.children = var17;
                var16 = var11.bind(var3)(var16, var8);
                var8 = new Array(2);
                var8[0] = var16;
                var9 = var9[var15];
                var9 = var10.bind(var3)(var9);
                var10 = var9.HappeningNowCardSubtitle;
                var9 = {};
                var15 = undefined;
                if (!var14) {
                    _fun101708_ip = 1219;
                    continue _fun101708
                }
            case 1213:
                var15 = 'text-feedback-positive';
            case 1219:
                var9.color = var15;
                var15 = undefined;
                if (!var14) {
                    _fun101708_ip = 1234;
                    continue _fun101708
                }
            case 1228:
                var15 = 'text-xs/bold';
            case 1234:
                var9.variant = var15;
                if (!var14) {
                    _fun101708_ip = 1330;
                    continue _fun101708
                }
            case 1241:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 24;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.dI3q4h;
                var14 = var14.bind(var15)(var13);
                var13 = var14.toUpperCase;
                var15 = var13.bind(var14)();
                var13 = global;
                var13 = var13.HermesInternal;
                var14 = var13.concat;
                var13 = '· ';
                var12 = var14.bind(var13)(var15);
            case 1330:
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1676, 1613, 10802, 660, 33, 1297, 671, 5416, 5414, 5419, 566, 13220, 8045, 8135, 795, 8146, 1417, 8134, 10803, 4816, 3900, 1604, 1234, 2]);