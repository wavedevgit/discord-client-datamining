// modules/icymi/native/ICYMIServerRecommendationRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun104345: for (var _fun104345_ip = 0;;) switch (_fun104345_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.guild;
                var _closure2_slot0 = var7;
                var1 = _closure1_slot17;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var4.bind(var5)(var2, var1);
                var5 = !var8;
                if (!var5) {
                    _fun104345_ip = 109;
                    continue _fun104345
                }
            case 83:
                var4 = var7.features;
                var2 = var4.has;
                var1 = _closure1_slot13;
                var1 = var1.ANIMATED_BANNER;
                var5 = var2.bind(var4)(var1);
            case 109:
                var1 = var7.banner;
                var9 = null;
                var1 = var9 != var1;
                var15 = undefined;
                if (!var1) {
                    _fun104345_ip = 165;
                    continue _fun104345
                }
            case 126:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.getAnimatableSourceWithFallback;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getGuildBannerSource;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var4 = var0.id;
                    var1.id = var4;
                    var0 = var0.banner;
                    var1.banner = var0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var15 = var2.bind(var4)(var5, var1);
            case 165:
                var4 = _closure1_slot5;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fromClientDiscoverableGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var13.bannerImage;
                var0.style = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot1;
                var17 = _closure1_slot2;
                var11 = 14;
                var4 = var17[var11];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var14 = {
                    'shape': null,
                    'x': 8,
                    'y': 46,
                    'width': 56,
                    'height': 56,
                    'cornerRadius': 20
                };
                var16 = _closure1_slot0;
                var11 = var17[var11];
                var11 = var16.bind(var3)(var11);
                var11 = var11.CutoutShape;
                var11 = var11.RoundedRect;
                var14.shape = var11;
                var11 = new Array(1);
                var11[0] = var14;
                var4.cutouts = var11;
                var7 = var7.banner;
                if (!(var9 == var7)) {
                    _fun104345_ip = 355;
                    continue _fun104345
                }
            case 309:
                var11 = _closure1_slot14;
                var9 = _closure1_slot6;
                var7 = {};
                var16 = var13.bannerImage;
                var14 = new Array(2);
                var14[0] = var16;
                var16 = var13.emptyBanner;
                var14[1] = var16;
                var7.style = var14;
                var7 = var11.bind(var3)(var9, var7);
                _fun104345_ip = 409;
                continue _fun104345;
            case 355:
                var14 = _closure1_slot14;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 15;
                var9 = var16[var9];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var16 = var13.bannerImage;
                var9.style = var16;
                var9.source = var15;
                var15 = 'cover';
                var9.resizeMode = var15;
                var7 = var14.bind(var3)(var11, var9);
            case 409:
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot14;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 16;
                var5 = var11[var9];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var13 = var13.guildIcon;
                var5.style = var13;
                var5.guild = var12;
                var10 = _closure1_slot0;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.GuildIconSizes;
                var9 = var9.LARGE;
                var5.size = var9;
                var8 = !var8;
                var5.animate = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun104349: for (var _fun104349_ip = 0;;) switch (_fun104349_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.guild;
                var _closure2_slot0 = var19;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var0 = _closure1_slot17;
                var8 = var0.bind(var3)();
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 11;
                var0 = var15[var0];
                var5 = var9.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var12 = var4.bind(var5)(var2, var0);
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = _closure1_slot4;
                var0 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun104352: for (var _fun104352_ip = 0;;) switch (_fun104352_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun104352_ip = 521;
                                    continue _fun104352
                                }
                            case 10:
                                var2 = _closure2_slot1;
                                var3 = undefined;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var7 = 17;
                                var1 = var5[var7];
                                var10 = var6.bind(var3)(var1);
                                var9 = var10.itemInteracted;
                                var8 = 'recommended_guilds';
                                var1 = 'press_join_guild';
                                var1 = var9.bind(var10)(var8, var8, var1);
                                var1 = var5[var7];
                                var11 = var6.bind(var3)(var1);
                                var10 = var11.feedItemActioned;
                                var9 = {};
                                var1 = _closure2_slot0;
                                var12 = var1.id;
                                var9.itemId = var12;
                                var9.itemType = var8;
                                var12 = {
                                    'actionGestureType': 'press',
                                    'actionTargetElement': 'item_container',
                                    'actionIntentType': 'join',
                                    'actionDestinationType': 'guild'
                                };
                                var9.actionParameters = var12;
                                var9 = var10.bind(var11)(var9);
                                var5 = var5[var7];
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.gravityJoinGuild;
                                var9 = var1.id;
                                var1 = new Array(1);
                                var1[0] = var9;
                                var1 = var5.bind(var6)(var1, var8);
                                SaveGenerator(address = 172);
                            case 170:
                                return var1;
                            case 172:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun104352_ip = 518;
                                    continue _fun104352
                                }
                            case 181:
                                if (var1) {
                                    _fun104352_ip = 298;
                                    continue _fun104352
                                }
                            case 184:
                                var6 = _closure2_slot1;
                                var5 = false;
                                var5 = var6.bind(var3)(var5);
                                var6 = _closure1_slot1;
                                var13 = _closure1_slot2;
                                var5 = 18;
                                var5 = var13[var5];
                                var8 = var6.bind(var3)(var5);
                                var6 = var8.open;
                                var5 = {};
                                var9 = 'RecommeendedServersRow';
                                var5.key = var9;
                                var12 = _closure1_slot0;
                                var9 = 19;
                                var10 = var13[var9];
                                var10 = var12.bind(var3)(var10);
                                var11 = var10.intl;
                                var10 = var11.string;
                                var9 = var13[var9];
                                var9 = var12.bind(var3)(var9);
                                var9 = var9.t;
                                var9 = var9.CG4Hks;
                                var9 = var10.bind(var11)(var9);
                                var5.content = var9;
                                var5 = var6.bind(var8)(var5);
                                var5 = undefined;
                                return var5;
                            case 298:
                                var8 = {};
                                var5 = {};
                                var6 = {};
                                var9 = _closure1_slot11;
                                var9 = var9.ICYMI;
                                var6.page = var9;
                                var9 = _closure1_slot12;
                                var9 = var9.ICYMI_RECOMMENDED_SERVERS;
                                var6.section = var9;
                                var9 = _closure1_slot10;
                                var9 = var9.LIST_ITEM;
                                var6.object = var9;
                                var5.analyticsSource = var6;
                                var8.state = var5;
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var9 = var6[var7];
                                var10 = var5.bind(var3)(var9);
                                var9 = var10.addedRecommendedGuild;
                                var9 = var9.bind(var10)();
                                var7 = var6[var7];
                                var10 = var5.bind(var3)(var7);
                                var9 = var10.fetchDehydrated;
                                var7 = {
                                    'isReloading': true,
                                    'forceRefresh': true
                                };
                                var9 = var9.bind(var10)(var7);
                                var7 = var9.then;
                                var10 = _closure1_slot4;
                                var2 = function*() { // Environment: var2
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun104354: for (var _fun104354_ip = 0;;) switch (_fun104354_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun104354_ip = 125;
                                                    continue _fun104354
                                                }
                                            case 7:
                                                var2 = _closure1_slot1;
                                                var1 = _closure1_slot2;
                                                var6 = 17;
                                                var1 = var1[var6];
                                                var3 = undefined;
                                                var2 = var2.bind(var3)(var1);
                                                var1 = var2.reloadICYMITab;
                                                var1 = var1.bind(var2)();
                                                SaveGenerator(address = 46);
                                            case 44:
                                                return var1;
                                            case 46:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                if (var2) {
                                                    _fun104354_ip = 122;
                                                    continue _fun104354
                                                }
                                            case 52:
                                                var5 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var2 = var2[var6];
                                                var5 = var5.bind(var3)(var2);
                                                var2 = var5.getGuildChannelScores;
                                                var2 = var2.bind(var5)();
                                                SaveGenerator(address = 83);
                                            case 81:
                                                return var2;
                                            case 83:
                                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                                if (var5) {
                                                    _fun104354_ip = 119;
                                                    continue _fun104354
                                                }
                                            case 89:
                                                var5 = _closure1_slot1;
                                                var4 = _closure1_slot2;
                                                var4 = var4[var6];
                                                var5 = var5.bind(var3)(var4);
                                                var4 = var5.getRecommendedGuilds;
                                                var4 = var4.bind(var5)();
                                                return var3;
                                            case 119:
                                                return var2;
                                            case 122:
                                                return var1;
                                            case 125:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var2 = var10.bind(var3)(var2);
                                var2 = var7.bind(var9)(var2);
                                var2 = 20;
                                var2 = var6[var2];
                                var7 = var5.bind(var3)(var2);
                                var6 = var7.transitionToGuildSync;
                                var2 = _closure2_slot0;
                                var5 = var2.id;
                                var2 = {};
                                var16 = var2;
                                var15 = var8;
                                var8 = copyDataProperties(var16, var15);
                                var2 = var6.bind(var7)(var5, var2);
                                SaveGenerator(address = 495);
                            case 493:
                                return var2;
                            case 495:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun104352_ip = 515;
                                    continue _fun104352
                                }
                            case 501:
                                var5 = _closure2_slot1;
                                var4 = false;
                                var4 = var5.bind(var3)(var4);
                                return var3;
                            case 515:
                                return var2;
                            case 518:
                                return var1;
                            case 521:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var0);
                var6 = var19.id;
                var0 = new Array(1);
                var0[0] = var6;
                var11 = var4.bind(var5)(var2, var0);
                var4 = _closure1_slot5;
                var2 = var4.useState;
                var0 = false;
                var4 = var2.bind(var4)(var0);
                var2 = _closure1_slot3;
                var0 = 2;
                var2 = var2.bind(var3)(var4, var0);
                var0 = 0;
                var14 = var2[var0];
                var0 = 1;
                var0 = var2[var0];
                _closure2_slot1 = var0;
                var2 = _closure1_slot15;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var8.featuredServerContainer;
                var0.style = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot18;
                var4 = {};
                var4.guild = var19;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot15;
                var6 = _closure1_slot6;
                var5 = {};
                var10 = var8.featuredServerInnerContainer;
                var5.style = var10;
                var18 = _closure1_slot14;
                var16 = 21;
                var10 = var15[var16];
                var10 = var9.bind(var3)(var10);
                var17 = var10.Text;
                var10 = {
                    'maxFontSizeMultiplier': 1,
                    'lineClamp': 1,
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var20 = var8.featuredServerTitle;
                var10.style = var20;
                var20 = var19.name;
                var10.children = var20;
                var17 = var18.bind(var3)(var17, var10);
                var10 = new Array(2);
                var10[0] = var17;
                var18 = _closure1_slot14;
                var16 = var15[var16];
                var16 = var9.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'maxFontSizeMultiplier': 1,
                    'lineClamp': 3,
                    'variant': 'text-xs/normal',
                    'color': 'text-default'
                };
                var19 = var19.description;
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var10[1] = var16;
                var5.children = var10;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot14;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var8.buttonContainer;
                var5.style = var8;
                var10 = _closure1_slot14;
                var8 = 22;
                var8 = var15[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var8.disabled = var12;
                var8.loading = var14;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 19;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                if (var12) {
                    _fun104349_ip = 487;
                    continue _fun104349
                }
            case 474:
                var12 = var13.VJlc0S;
                var12 = var14.bind(var15)(var12);
                _fun104349_ip = 498;
                continue _fun104349;
            case 487:
                var13 = var13.cEnaWx;
                var12 = var14.bind(var15)(var13);
            case 498:
                var8.text = var12;
                var12 = 'sm';
                var8.size = var12;
                var8.onPress = var11;
                var11 = true;
                var8.grow = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun104355: for (var _fun104355_ip = 0;;) switch (_fun104355_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.discoverableGuilds;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot5;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var5;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun104356: for (var _fun104356_ip = 0;;) switch (_fun104356_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = arg1;
                            var1 = var1[var0];
                            var0 = null;
                            var2 = var0 == var1;
                            if (var2) {
                                _fun104356_ip = 48;
                                continue _fun104356
                            }
                        case 23:
                            var4 = _closure1_slot14;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var2.guild = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 48:
                            return var0;
                    }
                };
                var8 = var3.bind(var4)(var0, var2);
                var3 = var5.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun104355_ip = 213;
                    continue _fun104355
                }
            case 64:
                var4 = _closure1_slot14;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 24;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var9 = var5.length;
                var5 = new Array(1);
                var5[0] = var9;
                var1.sections = var5;
                var5 = 10;
                var9 = var7[var5];
                var9 = var6.bind(var3)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_16;
                var1.insetStart = var9;
                var1.renderItem = var8;
                var8 = 'windowSize';
                var1.estimatedListSize = var8;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.spacing;
                var6 = var5.PX_16;
                var5 = 200;
                var5 = var5 + var6;
                var1.itemSize = var5;
                var5 = true;
                var1.horizontal = var5;
                var5 = 'recommended-servers-list';
                var1.listId = var5;
                var5 = false;
                var1.showsHorizontalScrollIndicator = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 213:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsObjects;
    var _closure1_slot10 = var6;
    var6 = var3.AnalyticsPages;
    var _closure1_slot11 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot12 = var6;
    var3 = var3.GuildFeatures;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var6 = var3.jsxs;
    var _closure1_slot15 = var6;
    var3 = var3.Fragment;
    var _closure1_slot16 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var6 = arg0;
        var0 = {};
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 10;
        var7 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_24;
        var1.marginVertical = var7;
        var0.container = var1;
        var1 = {};
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var1.marginBottom = var7;
        var7 = var6.margin;
        var1.marginHorizontal = var7;
        var0.title = var1;
        var1 = {};
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var1.marginBottom = var7;
        var6 = var6.margin;
        var1.marginHorizontal = var6;
        var0.subtitle = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.marginHorizontal = var6;
        var6 = 36;
        var1.marginTop = var6;
        var0.featuredServerInnerContainer = var1;
        var1 = {};
        var6 = 'absolute';
        var1.position = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.bottom = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.left = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.right = var6;
        var0.buttonContainer = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_8;
        var1.marginBottom = var6;
        var0.featuredServerTitle = var1;
        var1 = {
            'position': 'absolute',
            'top': 50,
            'left': 12
        };
        var0.guildIcon = var1;
        var1 = {
            'height': 72,
            'width': 200
        };
        var0.bannerImage = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_MOD_SUBTLE;
        var1.backgroundColor = var6;
        var0.emptyBanner = var1;
        var1 = {
            'borderRadius': null,
            'backgroundColor': null,
            'height': 244,
            'width': 200,
            'overflow': 'hidden'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.lg;
        var1.borderRadius = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.CARD_BACKGROUND_DEFAULT;
        var1.backgroundColor = var2;
        var0.featuredServerContainer = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ICYMIServerRecommendationRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun104358: for (var _fun104358_ip = 0;;) switch (_fun104358_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStoresArray;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getDiscoverableGuilds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var2.bind(var3)(var1, var0);
                var0 = _closure1_slot17;
                var16 = var0.bind(var4)();
                var2 = var14.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun104358_ip = 419;
                    continue _fun104358
                }
            case 82:
                var3 = _closure1_slot15;
                var2 = _closure1_slot16;
                var1 = {};
                var8 = _closure1_slot6;
                var5 = {};
                var7 = var16.container;
                var5.style = var7;
                var13 = _closure1_slot14;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = 21;
                var10 = var9[var11];
                var10 = var7.bind(var4)(var10);
                var12 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = var16.title;
                var10.style = var15;
                var15 = 19;
                var17 = var9[var15];
                var17 = var7.bind(var4)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var9[var15];
                var17 = var7.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.lv1tce;
                var17 = var18.bind(var19)(var17);
                var10.children = var17;
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(3);
                var10[0] = var12;
                var13 = _closure1_slot14;
                var11 = var9[var11];
                var11 = var7.bind(var4)(var11);
                var12 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'heading-sm/normal',
                    'color': 'text-muted'
                };
                var16 = var16.subtitle;
                var11.style = var16;
                var16 = var9[var15];
                var16 = var7.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var9[var15];
                var15 = var7.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.x4OezN;
                var15 = var16.bind(var17)(var15);
                var11.children = var15;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var13 = _closure1_slot14;
                var12 = _closure1_slot20;
                var11 = {};
                var11.discoverableGuilds = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[2] = var11;
                var5.children = var10;
                var8 = var3.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot14;
                var6 = 23;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Separator;
                var6 = {};
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 419:
                return var0;
        }
    };
    var2.ICYMIServerRecommendationRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1298, 1410, 8878, 660, 33, 13529, 671, 566, 1417, 1598, 5457, 4704, 7396, 8888, 3148, 1234, 4679, 3941, 4084, 13568, 7565, 2]);