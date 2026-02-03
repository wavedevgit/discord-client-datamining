// modules/guild_onboarding_home/native/GuildHomeResources.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun104772: for (var _fun104772_ip = 0;;) switch (_fun104772_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.channelId;
                var _closure2_slot0 = var19;
                var24 = var0.title;
                var9 = var0.icon;
                var28 = var0.description;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var0 = _closure1_slot14;
                var10 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 10;
                var1 = var0[var5];
                var11 = var2.bind(var4)(var1);
                var7 = var11.useStateFromStores;
                var1 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var3
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var7.bind(var11)(var6, var1);
                var _closure2_slot1 = var18;
                var1 = var0[var5];
                var11 = var2.bind(var4)(var1);
                var7 = var11.useStateFromStores;
                var1 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var3
                    var3 = _closure1_slot9;
                    var2 = var3.can;
                    var0 = _closure1_slot10;
                    var1 = var0.VIEW_CHANNEL;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var7.bind(var11)(var6, var1);
                var5 = var0[var5];
                var11 = var2.bind(var4)(var5);
                var7 = var11.useStateFromStores;
                var5 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var3
                    var2 = _closure1_slot8;
                    var1 = var2.getMessages;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var7.bind(var11)(var6, var5);
                var5 = var6.first;
                var12 = var5.bind(var6)();
                var14 = 11;
                var5 = var0[var14];
                var11 = var2.bind(var4)(var5);
                var5 = var11.useForumPostMediaProperties;
                var7 = false;
                var5 = var5.bind(var11)(var12, var7);
                var0 = var0[var14];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useFirstMediaIsEmbed;
                var16 = var0.bind(var2)(var12, var7);
                var0 = null;
                var2 = var0 == var5;
                var7 = undefined;
                if (var2) {
                    _fun104772_ip = 251;
                    continue _fun104772
                }
            case 246:
                var7 = var5.length;
            case 251:
                var2 = 0;
                var7 = var7 > var2;
                var17 = null;
                if (!var7) {
                    _fun104772_ip = 266;
                    continue _fun104772
                }
            case 262:
                var17 = var5[var2];
            case 266:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 12;
                var5 = var13[var7];
                var15 = var11.bind(var4)(var5);
                var11 = var15.useSharedMediaProps;
                var5 = {};
                var5.channel = var18;
                var5.media = var17;
                var5 = var11.bind(var15)(var5);
                var15 = var5.shouldObscure;
                var11 = _closure1_slot1;
                var5 = 13;
                var5 = var13[var5];
                var5 = var11.bind(var4)(var5);
                var31 = var5.bind(var4)(var12);
                var5 = var0 != var18;
                if (!var5) {
                    _fun104772_ip = 356;
                    continue _fun104772
                }
            case 342:
                var11 = var6.first;
                var11 = var11.bind(var6)();
                var5 = var0 == var11;
            case 356:
                if (!var5) {
                    _fun104772_ip = 368;
                    continue _fun104772
                }
            case 359:
                var11 = var6.loadingMore;
                var5 = !var11;
            case 368:
                if (!var5) {
                    _fun104772_ip = 380;
                    continue _fun104772
                }
            case 371:
                var11 = var6.ready;
                var5 = !var11;
            case 380:
                if (!var5) {
                    _fun104772_ip = 392;
                    continue _fun104772
                }
            case 383:
                var6 = var6.hasFetched;
                var5 = !var6;
            case 392:
                _closure2_slot2 = var5;
                var13 = _closure1_slot3;
                var11 = var13.useEffect;
                var6 = new Array(2);
                var6[0] = var19;
                var6[1] = var5;
                var5 = function() { // Environment: var3
                    _fun104776: for (var _fun104776_ip = 0;;) switch (_fun104776_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun104776_ip = 68;
                                continue _fun104776
                            }
                        case 10:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.fetchMessages;
                            var0 = {};
                            var3 = _closure2_slot0;
                            var0.channelId = var3;
                            var0.after = var3;
                            var3 = 5;
                            var0.limit = var3;
                            var0 = var1.bind(var2)(var0);
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var11.bind(var13)(var5, var6);
                var11 = _closure1_slot3;
                var6 = var11.useCallback;
                var5 = new Array(1);
                var5[0] = var18;
                var3 = function() { // Environment: var3
                    _fun104777: for (var _fun104777_ip = 0;;) switch (_fun104777_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun104777_ip = 64;
                                continue _fun104777
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.selectHomeResourceChannel;
                            var0 = _closure2_slot1;
                            var1 = var0.guild_id;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var6.bind(var11)(var3, var5);
                if (!(var0 != var18)) {
                    _fun104772_ip = 1164;
                    continue _fun104772
                }
            case 467:
                if (!var1) {
                    _fun104772_ip = 1164;
                    continue _fun104772
                }
            case 473:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var6 = var3.bind(var4)(var1);
                var3 = var6.getResourceChannelIconURL;
                var1 = {};
                var11 = var18.id;
                var1.channelId = var11;
                var1.icon = var9;
                var6 = var3.bind(var6)(var1);
                var22 = var0 == var28;
                if (var22) {
                    _fun104772_ip = 535;
                    continue _fun104772
                }
            case 526:
                var1 = var28.length;
                var22 = var2 === var1;
            case 535:
                var3 = _closure1_slot13;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var1 = 17;
                var1 = var19[var1];
                var1 = var20.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1.onPress = var5;
                var5 = var10.channelContainer;
                var1.style = var5;
                var13 = _closure1_slot13;
                var11 = _closure1_slot4;
                var5 = {};
                var21 = var10.textContent;
                var5.style = var21;
                var23 = _closure1_slot12;
                var21 = 18;
                var19 = var19[var21];
                var19 = var20.bind(var4)(var19);
                var20 = var19.Text;
                var19 = {
                    'variant': 'heading-md/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var19.children = var24;
                var20 = var23.bind(var4)(var20, var19);
                var19 = new Array(3);
                var19[0] = var20;
                var20 = var22;
                if (!var20) {
                    _fun104772_ip = 664;
                    continue _fun104772
                }
            case 660:
                var20 = var0 != var31;
            case 664:
                if (!var20) {
                    _fun104772_ip = 780;
                    continue _fun104772
                }
            case 667:
                var25 = _closure1_slot12;
                var24 = _closure1_slot0;
                var29 = _closure1_slot2;
                var23 = var29[var21];
                var23 = var24.bind(var4)(var23);
                var24 = var23.Text;
                var23 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default',
                    'style': null,
                    'lineClamp': 3,
                    'ellipsizeMode': 'tail'
                };
                var26 = var10.messageContent;
                var23.style = var26;
                var27 = _closure1_slot1;
                var26 = 19;
                var26 = var29[var26];
                var30 = var27.bind(var4)(var26);
                var29 = var30.parse;
                var27 = {};
                var26 = var18.guild_id;
                var27.guildId = var26;
                var26 = var18.id;
                var27.channelId = var26;
                var26 = true;
                var26 = var29.bind(var30)(var31, var26, var27);
                var23.children = var26;
                var20 = var25.bind(var4)(var24, var23);
            case 780:
                var19[1] = var20;
                var20 = !var22;
                if (var22) {
                    _fun104772_ip = 903;
                    continue _fun104772
                }
            case 790:
                var23 = _closure1_slot12;
                var22 = _closure1_slot0;
                var26 = _closure1_slot2;
                var21 = var26[var21];
                var21 = var22.bind(var4)(var21);
                var22 = var21.Text;
                var21 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default',
                    'style': null,
                    'lineClamp': 3,
                    'ellipsizeMode': 'tail'
                };
                var24 = var10.messageContent;
                var21.style = var24;
                var25 = _closure1_slot1;
                var24 = 19;
                var24 = var26[var24];
                var27 = var25.bind(var4)(var24);
                var26 = var27.parse;
                var25 = {};
                var24 = var18.guild_id;
                var25.guildId = var24;
                var24 = var18.id;
                var25.channelId = var24;
                var24 = true;
                var24 = var26.bind(var27)(var28, var24, var25);
                var21.children = var24;
                var20 = var23.bind(var4)(var22, var21);
            case 903:
                var19[2] = var20;
                var5.children = var19;
                var11 = var13.bind(var4)(var11, var5);
                var5 = new Array(3);
                var5[0] = var11;
                var11 = var0 != var9;
                var9 = null;
                if (!var11) {
                    _fun104772_ip = 978;
                    continue _fun104772
                }
            case 934:
                var11 = var0 != var6;
                var9 = null;
                if (!var11) {
                    _fun104772_ip = 978;
                    continue _fun104772
                }
            case 943:
                var19 = _closure1_slot12;
                var13 = _closure1_slot5;
                var11 = {};
                var20 = {};
                var20.uri = var6;
                var11.source = var20;
                var20 = var10.icon;
                var11.style = var20;
                var9 = var19.bind(var4)(var13, var11);
            case 978:
                var5[1] = var9;
                var9 = var0 != var6;
                var6 = null;
                if (var9) {
                    _fun104772_ip = 1148;
                    continue _fun104772
                }
            case 994:
                var9 = var0 == var12;
                var6 = null;
                if (var9) {
                    _fun104772_ip = 1148;
                    continue _fun104772
                }
            case 1006:
                if (!(var0 != var12)) {
                    _fun104772_ip = 1024;
                    continue _fun104772
                }
            case 1010:
                var9 = var12.blocked;
                var6 = null;
                if (var9) {
                    _fun104772_ip = 1148;
                    continue _fun104772
                }
            case 1024:
                var9 = var0 == var17;
                var6 = null;
                if (var9) {
                    _fun104772_ip = 1148;
                    continue _fun104772
                }
            case 1033:
                var9 = _closure1_slot12;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = var11[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.ForumPostMediaThumbnail;
                var7 = {};
                var7.channel = var18;
                var7.media = var17;
                var7.isEmbed = var16;
                var11 = var11[var14];
                var14 = var13.bind(var4)(var11);
                var13 = var14.getEmbedColor;
                var11 = var0 != var15;
                if (!var11) {
                    _fun104772_ip = 1101;
                    continue _fun104772
                }
            case 1098:
                var11 = var15;
            case 1101:
                var11 = var13.bind(var14)(var12, var11);
                var7.embedLeftBorderColor = var11;
                var13 = var0 == var12;
                var11 = undefined;
                if (var13) {
                    _fun104772_ip = 1126;
                    continue _fun104772
                }
            case 1121:
                var11 = var12.id;
            case 1126:
                var7.firstMessageId = var11;
                var10 = var10.thumbnail;
                var7.containerStyle = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 1148:
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1164:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Permissions;
    var _closure1_slot10 = var6;
    var3 = var3.Routes;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var9 = 8;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingHorizontal': 12,
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {
        'padding': 20,
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var3.emptyStateContainer = var8;
    var8 = {
        'backgroundColor': null,
        'marginBottom': 8,
        'padding': 12,
        'borderRadius': null,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'flex-start'
    };
    var11 = 9;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.channelContainer = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.messageContent = var8;
    var8 = {};
    var8.flex = var10;
    var3.textContent = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.thumbnail = var8;
    var8 = {
        'marginTop': 12,
        'marginBottom': 20
    };
    var3.emptyStateImage = var8;
    var8 = {
        'width': 72,
        'height': 72
    };
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/native/GuildHomeResources.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104778: for (var _fun104778_ip = 0;;) switch (_fun104778_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var0 = _closure1_slot14;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 20;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var8 = var0.bind(var4)(var1);
                var1 = var8.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun104778_ip = 114;
                    continue _fun104778
                }
            case 63:
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var3 = var7.container;
                var0.style = var3;
                var5 = var8.map;
                var3 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot15;
                    var2 = {};
                    var1 = var0.channelId;
                    var2.channelId = var1;
                    var1 = var0.title;
                    var2.title = var1;
                    var1 = var0.icon;
                    var2.icon = var1;
                    var1 = var0.description;
                    var2.description = var1;
                    var5 = var0.channelId;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'resource-';
                    var1 = var1.bind(var0)(var5);
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var3 = var5.bind(var8)(var3);
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun104778_ip = 393;
                continue _fun104778;
            case 114:
                var3 = _closure1_slot13;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var7.emptyStateContainer;
                var1.style = var5;
                var11 = _closure1_slot12;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 18;
                var5 = var13[var5];
                var5 = var12.bind(var4)(var5);
                var8 = var5.Text;
                var5 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var9 = 22;
                var14 = var13[var9];
                var14 = var12.bind(var4)(var14);
                var16 = var14.intl;
                var15 = var16.string;
                var14 = var13[var9];
                var14 = var12.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.owvC9U;
                var14 = var15.bind(var16)(var14);
                var5.children = var14;
                var8 = var11.bind(var4)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                var14 = _closure1_slot12;
                var11 = _closure1_slot5;
                var8 = {};
                var7 = var7.emptyStateImage;
                var8.style = var7;
                var7 = _closure1_slot1;
                var15 = 23;
                var15 = var13[var15];
                var15 = var7.bind(var4)(var15);
                var8.source = var15;
                var8 = var14.bind(var4)(var11, var8);
                var5[1] = var8;
                var8 = _closure1_slot12;
                var6 = 24;
                var6 = var13[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var10 = function() {
                    _fun104779: for (var _fun104779_ip = 0;;) switch (_fun104779_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getDefaultChannel;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun104779_ip = 89;
                                continue _fun104779
                            }
                        case 31:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var5.bind(var1)(var2);
                            var1 = var2.transitionTo;
                            var5 = _closure1_slot11;
                            var4 = var5.CHANNEL;
                            var3 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                        case 89:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6.onPress = var10;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["3iCBUn"];
                var9 = var10.bind(var11)(var9);
                var6.text = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 393:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1662, 4245, 3082, 660, 33, 1297, 671, 566, 8868, 11612, 13665, 6521, 11643, 1417, 4897, 3932, 4776, 13659, 1220, 1234, 13666, 4868, 2]);