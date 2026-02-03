// modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx
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
        _fun103816: for (var _fun103816_ip = 0;;) switch (_fun103816_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guild;
                var1 = var0.index;
                var0 = _closure1_slot16;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var0 = 3;
                var5 = var1 < var0;
                var2 = _closure1_slot12;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var12.selectedServerIcon;
                var6 = new Array(3);
                var6[0] = var4;
                var4 = null;
                var7 = var4 == var11;
                if (!var7) {
                    _fun103816_ip = 72;
                    continue _fun103816
                }
            case 66:
                var7 = var12.noServerContainer;
            case 72:
                var6[1] = var7;
                var7 = var4 == var11;
                if (!var7) {
                    _fun103816_ip = 86;
                    continue _fun103816
                }
            case 83:
                var7 = !var5;
            case 86:
                if (!var7) {
                    _fun103816_ip = 95;
                    continue _fun103816
                }
            case 89:
                var7 = var12.noServerExtraContainer;
            case 95:
                var6[2] = var7;
                var0.style = var6;
                if (!(var4 == var11)) {
                    _fun103816_ip = 191;
                    continue _fun103816
                }
            case 107:
                var4 = null;
                if (!var5) {
                    _fun103816_ip = 189;
                    continue _fun103816
                }
            case 112:
                var7 = _closure1_slot12;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 12;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ServerIcon;
                var5 = {};
                var8 = 'md';
                var5.size = var8;
                var10 = _closure1_slot1;
                var8 = 10;
                var8 = var13[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.colors;
                var8 = var8.ICON_MUTED;
                var5.color = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 189:
                _fun103816_ip = 266;
                continue _fun103816;
            case 191:
                var7 = _closure1_slot12;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 11;
                var5 = var10[var8];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var12 = var12.guildIconBorder;
                var5.style = var12;
                var5.guild = var11;
                var9 = _closure1_slot0;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.GuildIconSizes;
                var8 = var8.LARGE;
                var5.size = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 266:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun103817: for (var _fun103817_ip = 0;;) switch (_fun103817_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.selectedGuilds;
                var _closure2_slot0 = var7;
                var0 = _closure1_slot16;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var6 = _closure1_slot5;
                var5 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function(arg0, arg1) { // Environment: var1
                    _fun103818: for (var _fun103818_ip = 0;;) switch (_fun103818_ip) {
                        case 0:
                            var4 = arg1;
                            var3 = _closure1_slot12;
                            var2 = _closure1_slot18;
                            var1 = {};
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            var7 = var4 < var0;
                            var0 = undefined;
                            var5 = undefined;
                            if (!var7) {
                                _fun103818_ip = 47;
                                continue _fun103818
                            }
                        case 39:
                            var6 = _closure2_slot0;
                            var5 = var6[var4];
                        case 47:
                            var1.guild = var5;
                            var1.index = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var11 = var5.bind(var6)(var0, var2);
                var5 = _closure1_slot5;
                var2 = var5.useState;
                var0 = var7.length;
                var5 = var2.bind(var5)(var0);
                var2 = _closure1_slot4;
                var0 = 2;
                var2 = var2.bind(var3)(var5, var0);
                var0 = 0;
                var0 = var2[var0];
                var _closure2_slot1 = var0;
                var12 = 1;
                var2 = var2[var12];
                var _closure2_slot2 = var2;
                var6 = _closure1_slot5;
                var5 = var6.useRef;
                var2 = null;
                var9 = var5.bind(var6)(var2);
                var _closure2_slot3 = var9;
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var0;
                var0 = var7.length;
                var2[1] = var0;
                var0 = function() { // Environment: var1
                    _fun103819: for (var _fun103819_ip = 0;;) switch (_fun103819_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.length;
                            if (!(!(var2 < var1))) {
                                _fun103819_ip = 59;
                                continue _fun103819
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.length;
                            if (!(var2 !== var1)) {
                                _fun103819_ip = 132;
                                continue _fun103819
                            }
                        case 37:
                            var3 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var2 = var1.length;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun103819_ip = 132;
                            continue _fun103819;
                        case 59:
                            var1 = _closure2_slot3;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun103819_ip = 112;
                                continue _fun103819
                            }
                        case 74:
                            var2 = var3.scrollToLocation;
                            var1 = {
                                'animated': true,
                                'section': 0
                            };
                            var4 = _closure2_slot0;
                            var4 = var4.length;
                            var1.item = var4;
                            var1 = var2.bind(var3)(var1);
                        case 112:
                            var2 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var1 = var0.length;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var2);
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 13;
                var2 = var13[var0];
                var6 = var10.bind(var3)(var2);
                var2 = var6.useAnimatedStyle;
                var1 = function() {
                    _fun103820: for (var _fun103820_ip = 0;;) switch (_fun103820_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var7 = 14;
                            var1 = var1[var7];
                            var6 = undefined;
                            var8 = var2.bind(var6)(var1);
                            var2 = var8.withTiming;
                            var1 = _closure2_slot0;
                            var1 = var1.length;
                            var3 = 0;
                            var9 = var1 > var3;
                            var1 = 0;
                            if (!var9) {
                                _fun103820_ip = 58;
                                continue _fun103820
                            }
                        case 55:
                            var1 = 1;
                        case 58:
                            var1 = var2.bind(var8)(var1);
                            var0.opacity = var1;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var7];
                            var8 = var2.bind(var6)(var1);
                            var2 = var8.withTiming;
                            var1 = _closure2_slot0;
                            var1 = var1.length;
                            var9 = var1 > var3;
                            var1 = 0;
                            if (!var9) {
                                _fun103820_ip = 111;
                                continue _fun103820
                            }
                        case 107:
                            var1 = _closure1_slot15;
                        case 111:
                            var1 = var2.bind(var8)(var1);
                            var0.height = var1;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var7];
                            var2 = var2.bind(var6)(var1);
                            var1 = var2.withTiming;
                            var5 = _closure2_slot0;
                            var5 = var5.length;
                            var5 = var5 > var3;
                            var3 = 0;
                            if (!var5) {
                                _fun103820_ip = 191;
                                continue _fun103820
                            }
                        case 160:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 10;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.spacing;
                            var3 = var4.PX_24;
                        case 191:
                            var1 = var1.bind(var2)(var3);
                            var0.marginTop = var1;
                            return var0;
                    }
                };
                var14 = {};
                var5 = 14;
                var5 = var13[var5];
                var5 = var10.bind(var3)(var5);
                var5 = var5.withTiming;
                var14.withTiming = var5;
                var14.selectedGuilds = var7;
                var5 = _closure1_slot15;
                var14.SELECTED_SERVER_SIZE_WITH_BORDER = var5;
                var5 = _closure1_slot1;
                var10 = 10;
                var15 = var13[var10];
                var15 = var5.bind(var3)(var15);
                var14.tokens = var15;
                var1.__closure = var14;
                var14 = 12491491924402.0;
                var1.__workletHash = var14;
                var14 = _closure1_slot17;
                var1.__initData = var14;
                var6 = var2.bind(var6)(var1);
                var2 = _closure1_slot12;
                var0 = var13[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var14 = var4.selectedServersRowContainer;
                var4 = new Array(2);
                var4[0] = var14;
                var4[1] = var6;
                var0.style = var4;
                var6 = _closure1_slot12;
                var4 = 15;
                var4 = var13[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.ref = var9;
                var13 = var7.length;
                var9 = 3;
                var13 = var13 >= var9;
                if (!var13) {
                    _fun103817_ip = 388;
                    continue _fun103817
                }
            case 379:
                var7 = var7.length;
                var9 = var7 + var12;
            case 388:
                var7 = new Array(1);
                var7[0] = var9;
                var4.sections = var7;
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var12 = var7[var10];
                var12 = var9.bind(var3)(var12);
                var12 = var12.spacing;
                var12 = var12.PX_24;
                var4.insetStart = var12;
                var12 = var7[var10];
                var12 = var9.bind(var3)(var12);
                var12 = var12.spacing;
                var12 = var12.PX_12;
                var4.insetEnd = var12;
                var4.renderItem = var11;
                var11 = 'windowSize';
                var4.estimatedListSize = var11;
                var8 = _closure1_slot15;
                var7 = var7[var10];
                var7 = var9.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_12;
                var7 = var8 + var7;
                var4.itemSize = var7;
                var7 = true;
                var4.horizontal = var7;
                var7 = 'selected-servers-list';
                var4.listId = var7;
                var7 = false;
                var4.showsHorizontalScrollIndicator = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun103821: for (var _fun103821_ip = 0;;) switch (_fun103821_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.guild;
                var _closure2_slot0 = var12;
                var1 = _closure1_slot16;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot8;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var4.bind(var5)(var2, var1);
                var4 = !var8;
                if (!var4) {
                    _fun103821_ip = 109;
                    continue _fun103821
                }
            case 83:
                var5 = var12.features;
                var2 = var5.has;
                var1 = _closure1_slot11;
                var1 = var1.ANIMATED_BANNER;
                var4 = var2.bind(var5)(var1);
            case 109:
                var1 = var12.banner;
                var9 = null;
                var1 = var9 != var1;
                var15 = undefined;
                if (!var1) {
                    _fun103821_ip = 165;
                    continue _fun103821
                }
            case 126:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 17;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getAnimatableSourceWithFallback;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
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
                var15 = var1.bind(var2)(var4, var0);
            case 165:
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var14.bannerImage;
                var0.style = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 18;
                var4 = var16[var7];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var11 = {
                    'shape': null,
                    'x': 8,
                    'y': 46,
                    'width': 56,
                    'height': 56,
                    'cornerRadius': 20
                };
                var13 = _closure1_slot0;
                var7 = var16[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.CutoutShape;
                var7 = var7.RoundedRect;
                var11.shape = var7;
                var7 = new Array(1);
                var7[0] = var11;
                var4.cutouts = var7;
                var7 = var12.banner;
                if (!(var9 == var7)) {
                    _fun103821_ip = 325;
                    continue _fun103821
                }
            case 279:
                var11 = _closure1_slot12;
                var9 = _closure1_slot6;
                var7 = {};
                var16 = var14.bannerImage;
                var13 = new Array(2);
                var13[0] = var16;
                var16 = var14.emptyBanner;
                var13[1] = var16;
                var7.style = var13;
                var7 = var11.bind(var3)(var9, var7);
                _fun103821_ip = 379;
                continue _fun103821;
            case 325:
                var13 = _closure1_slot12;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 19;
                var9 = var16[var9];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var16 = var14.bannerImage;
                var9.style = var16;
                var9.source = var15;
                var15 = 'cover';
                var9.resizeMode = var15;
                var7 = var13.bind(var3)(var11, var9);
            case 379:
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 11;
                var5 = var11[var9];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var15 = var14.guildIcon;
                var13 = new Array(2);
                var13[0] = var15;
                var14 = var14.guildIconBorder;
                var13[1] = var14;
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
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun103824: for (var _fun103824_ip = 0;;) switch (_fun103824_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.guild;
                var _closure2_slot0 = var14;
                var16 = var1.selected;
                var18 = var1.loading;
                var5 = var1.handlePress;
                var _closure2_slot1 = var5;
                var1 = _closure1_slot16;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var13 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 16;
                var1 = var20[var1];
                var6 = var13.bind(var3)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var15 = var4.bind(var6)(var2, var1);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var14;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var17 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot13;
                var0 = 20;
                var0 = var20[var0];
                var0 = var13.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var4 = var12.pressableUnderlayColor;
                var4 = var4.backgroundColor;
                var0.underlayColor = var4;
                var4 = 50;
                var0.unstable_pressDelay = var4;
                var4 = var12.featuredServerContainer;
                var0.style = var4;
                var0.onPress = var17;
                var6 = _closure1_slot12;
                var5 = _closure1_slot20;
                var4 = {};
                var4.guild = var14;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var12.featuredServerInnerContainer;
                var5.style = var8;
                var11 = _closure1_slot12;
                var9 = 21;
                var8 = var20[var9];
                var8 = var13.bind(var3)(var8);
                var10 = var8.Text;
                var8 = {
                    'maxFontSizeMultiplier': 1,
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var12.featuredServerTitle;
                var8.style = var21;
                var21 = var14.name;
                var8.children = var21;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var11 = _closure1_slot12;
                var9 = var20[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'maxFontSizeMultiplier': 1,
                    'lineClamp': 2,
                    'variant': 'text-xs/normal',
                    'color': 'text-default'
                };
                var14 = var14.description;
                var9.children = var14;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var11 = _closure1_slot12;
                var10 = _closure1_slot6;
                var9 = {};
                var12 = var12.buttonContainer;
                var9.style = var12;
                var14 = _closure1_slot12;
                var12 = 22;
                var12 = var20[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var20 = 'checkbox';
                var12.accessibilityHint = var20;
                var20 = {};
                var20.checked = var16;
                var12.accessibilityState = var20;
                var12.disabled = var15;
                var20 = undefined;
                if (!var16) {
                    _fun103824_ip = 515;
                    continue _fun103824
                }
            case 438:
                var23 = _closure1_slot12;
                var22 = _closure1_slot0;
                var26 = _closure1_slot2;
                var21 = 23;
                var21 = var26[var21];
                var21 = var22.bind(var3)(var21);
                var22 = var21.CircleCheckIcon;
                var21 = {};
                var24 = 'sm';
                var21.size = var24;
                var25 = _closure1_slot1;
                var24 = 10;
                var24 = var26[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.colors;
                var24 = var24.CONTROL_CONNECTED_TEXT_DEFAULT;
                var21.color = var24;
                var20 = var23.bind(var3)(var22, var21);
            case 515:
                var12.icon = var20;
                if (!var15) {
                    _fun103824_ip = 582;
                    continue _fun103824
                }
            case 522:
                if (var18) {
                    _fun103824_ip = 582;
                    continue _fun103824
                }
            case 525:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var18 = 24;
                var20 = var23[var18];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var23[var18];
                var18 = var22.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.cEnaWx;
                var18 = var20.bind(var21)(var18);
                _fun103824_ip = 658;
                continue _fun103824;
            case 582:
                var20 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 24;
                var21 = var23[var19];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var19 = var23[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.t;
                if (var16) {
                    _fun103824_ip = 642;
                    continue _fun103824
                }
            case 629:
                var19 = var20.XqMe3N;
                var19 = var21.bind(var22)(var19);
                _fun103824_ip = 655;
                continue _fun103824;
            case 642:
                var20 = var20["TwueC+"];
                var19 = var21.bind(var22)(var20);
            case 655:
                var18 = var19;
            case 658:
                var12.text = var18;
                var18 = 'sm';
                var12.size = var18;
                var12.onPress = var17;
                if (var15) {
                    _fun103824_ip = 684;
                    continue _fun103824
                }
            case 677:
                var15 = 'active';
                if (var16) {
                    _fun103824_ip = 688;
                    continue _fun103824
                }
            case 684:
                var15 = 'secondary';
            case 688:
                var12.variant = var15;
                var15 = true;
                var12.grow = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.StyleSheet;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var6 = var3.jsxs;
    var _closure1_slot13 = var6;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 50;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var9 = arg0;
        var0 = {};
        var1 = {
            'backgroundColor': null,
            'position': 'relative',
            'flex': 1
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 10;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOWER;
        var1.backgroundColor = var6;
        var6 = 1;
        var8 = var9.margin;
        var1.marginHorizontal = var8;
        var0.container = var1;
        var1 = {};
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var1.paddingTop = var8;
        var0.scrollContentContainer = var1;
        var1 = {
            'position': 'absolute',
            'bottom': 0
        };
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var1.left = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var1.right = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var1.paddingBottom = var8;
        var0.footer = var1;
        var1 = {};
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var1.marginTop = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var1.marginBottom = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var1.marginHorizontal = var8;
        var0.title = var1;
        var1 = {};
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var1.marginHorizontal = var8;
        var0.subtitle = var1;
        var1 = {};
        var8 = _closure1_slot7;
        var8 = var8.hairlineWidth;
        var1.height = var8;
        var8 = '100%';
        var1.width = var8;
        var10 = var5[var2];
        var10 = var4.bind(var3)(var10);
        var10 = var10.colors;
        var10 = var10.BORDER_SUBTLE;
        var1.backgroundColor = var10;
        var0.separator = var1;
        var1 = {};
        var10 = var5[var2];
        var10 = var4.bind(var3)(var10);
        var10 = var10.radii;
        var10 = var10.lg;
        var1.borderRadius = var10;
        var10 = var5[var2];
        var10 = var4.bind(var3)(var10);
        var10 = var10.colors;
        var10 = var10.CARD_BACKGROUND_DEFAULT;
        var1.backgroundColor = var10;
        var10 = 'hidden';
        var1.overflow = var10;
        var10 = var5[var2];
        var10 = var4.bind(var3)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var1.marginHorizontal = var10;
        var10 = var5[var2];
        var10 = var4.bind(var3)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var1.marginVertical = var10;
        var0.featuredServerContainer = var1;
        var1 = {};
        var10 = var5[var2];
        var10 = var4.bind(var3)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_12;
        var1.marginHorizontal = var10;
        var10 = 36;
        var1.marginTop = var10;
        var0.featuredServerInnerContainer = var1;
        var1 = {};
        var10 = var5[var2];
        var10 = var4.bind(var3)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_12;
        var1.marginBottom = var10;
        var9 = var9.margin;
        var1.marginTop = var9;
        var0.buttonContainer = var1;
        var1 = {};
        var9 = var5[var2];
        var9 = var4.bind(var3)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var1.marginBottom = var9;
        var0.featuredServerTitle = var1;
        var1 = {
            'position': 'absolute',
            'top': 50,
            'left': 12
        };
        var0.guildIcon = var1;
        var1 = {
            'height': 73,
            'width': '100%'
        };
        var0.bannerImage = var1;
        var1 = {};
        var9 = var5[var2];
        var9 = var4.bind(var3)(var9);
        var9 = var9.colors;
        var9 = var9.BACKGROUND_MOD_SUBTLE;
        var1.backgroundColor = var9;
        var0.emptyBanner = var1;
        var1 = {};
        var1.flex = var6;
        var9 = var5[var2];
        var9 = var4.bind(var3)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var1.marginHorizontal = var9;
        var0.guildsScrollContainer = var1;
        var1 = {
            'flex': 1,
            'flexDirection': 'column'
        };
        var9 = var5[var2];
        var9 = var4.bind(var3)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_16;
        var1.gap = var9;
        var0.guildsColumn = var1;
        var1 = {};
        var9 = _closure1_slot15;
        var1.height = var9;
        var1.width = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var1.marginBottom = var8;
        var0.selectedServersRowContainer = var1;
        var1 = {
            'flex': 1,
            'width': null,
            'height': null,
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var8 = _closure1_slot15;
        var1.width = var8;
        var7 = _closure1_slot15;
        var1.height = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.colors;
        var7 = var7.BORDER_STRONG;
        var1.borderColor = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.radii;
        var7 = var7.md;
        var1.borderRadius = var7;
        var1.borderWidth = var6;
        var0.selectedServerIcon = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_MOD_MUTED;
        var1.backgroundColor = var6;
        var6 = 'dashed';
        var1.borderStyle = var6;
        var0.noServerContainer = var1;
        var1 = {};
        var6 = 0.4;
        var1.opacity = var6;
        var0.noServerExtraContainer = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.INTERACTIVE_BACKGROUND_ACTIVE;
        var1.backgroundColor = var6;
        var0.pressableUnderlayColor = var1;
        var1 = {};
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.radii;
        var2 = var2.md;
        var1.borderRadius = var2;
        var0.guildIconBorder = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.spacing.PX_24:0)};}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun103828: for (var _fun103828_ip = 0;;) switch (_fun103828_ip) {
            case 0:
                var1 = _closure1_slot16;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var25 = _closure1_slot1;
                var26 = _closure1_slot2;
                var1 = 25;
                var1 = var26[var1];
                var1 = var25.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var10 = var1.bottom;
                var16 = _closure1_slot0;
                var2 = 16;
                var1 = var26[var2];
                var7 = var16.bind(var3)(var1);
                var6 = var7.useStateFromStoresArray;
                var1 = _closure1_slot10;
                var5 = new Array(1);
                var5[0] = var1;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getOnboardingGuilds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var23 = var6.bind(var7)(var5, var4);
                var _closure2_slot0 = var23;
                var4 = var26[var2];
                var7 = var16.bind(var3)(var4);
                var6 = var7.useStateFromStoresArray;
                var5 = new Array(1);
                var5[0] = var1;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getOnboardingCategoryIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var17 = var6.bind(var7)(var5, var4);
                var _closure2_slot1 = var17;
                var2 = var26[var2];
                var5 = var16.bind(var3)(var2);
                var4 = var5.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getCurrentOnboardingGuildOffset;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var4.bind(var5)(var2, var1);
                var _closure2_slot2 = var13;
                var4 = _closure1_slot5;
                var2 = var4.useState;
                var1 = global;
                var1 = var1.Set;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var30 = var5;
                var1 = new var30[var1](var29);
                var1 = var1 instanceof Object ? var1 : var5;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot4;
                var22 = 2;
                var1 = var1.bind(var3)(var2, var22);
                var4 = 0;
                var5 = var1[var4];
                var _closure2_slot3 = var5;
                var6 = 1;
                var1 = var1[var6];
                var _closure2_slot4 = var1;
                var7 = _closure1_slot5;
                var2 = var7.useState;
                var1 = new Array(0);
                var2 = var2.bind(var7)(var1);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var2, var22);
                var15 = var1[var4];
                var1 = var1[var6];
                var _closure2_slot5 = var1;
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var2 = var1.bind(var2)(var4);
                var1 = _closure1_slot4;
                var2 = var1.bind(var3)(var2, var22);
                var1 = var2[var4];
                var _closure2_slot6 = var1;
                var2 = var2[var6];
                var _closure2_slot7 = var2;
                var12 = _closure1_slot5;
                var8 = var12.useCallback;
                var7 = new Array(1);
                var7[0] = var5;
                var2 = function(arg0) { // Environment: var0
                    _fun103832: for (var _fun103832_ip = 0;;) switch (_fun103832_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 26;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var7 = var2.ICYMIAnalytics;
                            var6 = var7.trackFeedOnboardingGuildToggled;
                            var4 = {};
                            var2 = var3.id;
                            var4.guildId = var2;
                            var5 = _closure2_slot3;
                            var9 = var5.has;
                            var8 = var3.id;
                            var8 = var9.bind(var5)(var8);
                            var8 = !var8;
                            var4.toggled = var8;
                            var4 = var6.bind(var7)(var4);
                            var4 = var5.has;
                            var3 = var3.id;
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure2_slot4;
                            if (var3) {
                                _fun103832_ip = 144;
                                continue _fun103832
                            }
                        case 114:
                            var3 = function(arg0) { // Environment: var1
                                var2 = arg0;
                                var1 = var2.add;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                                var0 = global;
                                var0 = var0.Set;
                                var1 = var0.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var4 = var1;
                                var3 = var2;
                                var0 = new var4[var0](var3, var2);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var3 = var4.bind(var0)(var3);
                            var5 = _closure2_slot5;
                            var3 = function(arg0) { // Environment: var1
                                var0 = new Array(1);
                                var4 = arg0;
                                var3 = 0;
                                var5 = var0;
                                var2 = arraySpread(var5, var4, var3);
                                var1 = _closure3_slot0;
                                var0[var2] = var1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var0;
                            };
                            var3 = var5.bind(var0)(var3);
                            _fun103832_ip = 172;
                            continue _fun103832;
                        case 144:
                            var3 = function(arg0) { // Environment: var1
                                var2 = arg0;
                                var1 = var2.delete;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                                var0 = global;
                                var0 = var0.Set;
                                var1 = var0.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var4 = var1;
                                var3 = var2;
                                var0 = new var4[var0](var3, var2);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var3 = var4.bind(var0)(var3);
                            var2 = _closure2_slot5;
                            var1 = function(arg0) { // Environment: var1
                                var2 = arg0;
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = _closure3_slot0;
                                    var1 = var0.id;
                                    var0 = arg0;
                                    var0 = var0.id;
                                    var0 = var1 !== var0;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var0)(var1);
                        case 172:
                            return var0;
                    }
                };
                var7 = var8.bind(var12)(var2, var7);
                var _closure2_slot8 = var7;
                var8 = _closure1_slot5;
                var2 = var8.useState;
                var20 = false;
                var8 = var2.bind(var8)(var20);
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var8, var22);
                var14 = var2[var4];
                var _closure2_slot9 = var14;
                var2 = var2[var6];
                var _closure2_slot10 = var2;
                var12 = _closure1_slot5;
                var8 = var12.useCallback;
                var4 = _closure1_slot3;
                var2 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun103839: for (var _fun103839_ip = 0;;) switch (_fun103839_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun103839_ip = 496;
                                    continue _fun103839
                                }
                            case 10:
                                var3 = _closure2_slot10;
                                var4 = undefined;
                                var2 = true;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var6 = 27;
                                var2 = var2[var6];
                                var7 = var3.bind(var4)(var2);
                                var3 = var7.gravityJoinGuild;
                                var2 = global;
                                var8 = var2.Array;
                                var2 = var8.from;
                                var1 = _closure2_slot3;
                                var2 = var2.bind(var8)(var1);
                                var1 = 'icymi_info_modal';
                                var1 = var3.bind(var7)(var2, var1);
                                SaveGenerator(address = 93);
                            case 91:
                                return var1;
                            case 93:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun103839_ip = 493;
                                    continue _fun103839
                                }
                            case 102:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                if (var1) {
                                    _fun103839_ip = 309;
                                    continue _fun103839
                                }
                            case 116:
                                var7 = 28;
                                var7 = var2[var7];
                                var9 = var3.bind(var4)(var7);
                                var8 = var9.open;
                                var7 = {};
                                var10 = 'ICYMIInfoModal';
                                var7.key = var10;
                                var10 = _closure1_slot0;
                                var11 = 24;
                                var12 = var2[var11];
                                var12 = var10.bind(var4)(var12);
                                var13 = var12.intl;
                                var12 = var13.string;
                                var11 = var2[var11];
                                var11 = var10.bind(var4)(var11);
                                var11 = var11.t;
                                var11 = var11.CG4Hks;
                                var11 = var12.bind(var13)(var11);
                                var7.content = var11;
                                var7 = var8.bind(var9)(var7);
                                var7 = var2[var6];
                                var8 = var3.bind(var4)(var7);
                                var7 = var8.fetchDehydrated;
                                var7 = var7.bind(var8)();
                                var7 = var2[var6];
                                var8 = var3.bind(var4)(var7);
                                var7 = var8.getGuildChannelScores;
                                var7 = var7.bind(var8)();
                                var7 = var2[var6];
                                var8 = var3.bind(var4)(var7);
                                var7 = var8.getRecommendedGuilds;
                                var7 = var7.bind(var8)();
                                var7 = 29;
                                var7 = var2[var7];
                                var9 = var3.bind(var4)(var7);
                                var8 = var9.popWithKey;
                                var7 = 30;
                                var7 = var2[var7];
                                var7 = var10.bind(var4)(var7);
                                var7 = var7.ICYMI_INFO_MODAL_KEY;
                                var7 = var8.bind(var9)(var7);
                                var7 = undefined;
                                return var7;
                            case 309:
                                var2 = var2[var6];
                                var7 = var3.bind(var4)(var2);
                                var3 = var7.fetchDehydrated;
                                var2 = {
                                    'isReloading': true,
                                    'forceRefresh': true
                                };
                                var2 = var3.bind(var7)(var2);
                                SaveGenerator(address = 347);
                            case 345:
                                return var2;
                            case 347:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun103839_ip = 490;
                                    continue _fun103839
                                }
                            case 356:
                                var7 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var7 = var7.bind(var4)(var3);
                                var3 = var7.reloadICYMITab;
                                var3 = var3.bind(var7)();
                                SaveGenerator(address = 387);
                            case 385:
                                return var3;
                            case 387:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun103839_ip = 487;
                                    continue _fun103839
                                }
                            case 393:
                                var7 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var8 = var9[var6];
                                var10 = var7.bind(var4)(var8);
                                var8 = var10.getGuildChannelScores;
                                var8 = var8.bind(var10)();
                                var6 = var9[var6];
                                var8 = var7.bind(var4)(var6);
                                var6 = var8.getRecommendedGuilds;
                                var6 = var6.bind(var8)();
                                var6 = 29;
                                var6 = var9[var6];
                                var7 = var7.bind(var4)(var6);
                                var6 = var7.popWithKey;
                                var8 = _closure1_slot0;
                                var5 = 30;
                                var5 = var9[var5];
                                var5 = var8.bind(var4)(var5);
                                var5 = var5.ICYMI_INFO_MODAL_KEY;
                                var5 = var6.bind(var7)(var5);
                                return var4;
                            case 487:
                                return var3;
                            case 490:
                                return var2;
                            case 493:
                                return var1;
                            case 496:
                                return var0;
                        }
                    };
                    return var0;
                };
                var4 = var4.bind(var3)(var2);
                var2 = new Array(1);
                var2[0] = var5;
                var12 = var8.bind(var12)(var4, var2);
                var8 = _closure1_slot5;
                var4 = var8.useCallback;
                var2 = new Array(4);
                var2[0] = var17;
                var2[1] = var13;
                var2[2] = var1;
                var1 = var23.length;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun103840: for (var _fun103840_ip = 0;;) switch (_fun103840_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot2;
                            if (!(!(var2 > var1))) {
                                _fun103840_ip = 111;
                                continue _fun103840
                            }
                        case 15:
                            var1 = _closure2_slot0;
                            var2 = var1.length;
                            var1 = 150;
                            if (!(!(var2 >= var1))) {
                                _fun103840_ip = 111;
                                continue _fun103840
                            }
                        case 31:
                            var3 = _closure2_slot2;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 30;
                            var2 = var5[var2];
                            var4 = undefined;
                            var2 = var6.bind(var4)(var2);
                            var2 = var2.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
                            var3 = var3 + var2;
                            var2 = _closure2_slot7;
                            var2 = var2.bind(var4)(var3);
                            var2 = _closure1_slot1;
                            var1 = 27;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.fetchPopularGuildsFromCategories;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0, var3);
                        case 111:
                            var0 = undefined;
                            return var0;
                    }
                };
                var21 = var4.bind(var8)(var1, var2);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = new Array(3);
                var1[0] = var14;
                var1[1] = var5;
                var1[2] = var7;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.item;
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot21;
                    var2 = {};
                    var2.guild = var0;
                    var5 = _closure2_slot9;
                    var2.loading = var5;
                    var7 = _closure2_slot3;
                    var6 = var7.has;
                    var5 = var0.id;
                    var5 = var6.bind(var7)(var5);
                    var2.selected = var5;
                    var1 = _closure2_slot8;
                    var2.handlePress = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var19 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot14;
                var0 = {};
                var13 = _closure1_slot12;
                var7 = 21;
                var4 = var26[var7];
                var4 = var16.bind(var3)(var4);
                var8 = var4.Text;
                var4 = {
                    'variant': 'heading-xl/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var11.title;
                var4.style = var17;
                var17 = 24;
                var18 = var26[var17];
                var18 = var16.bind(var3)(var18);
                var27 = var18.intl;
                var24 = var27.string;
                var18 = var26[var17];
                var18 = var16.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["19ldCF"];
                var18 = var24.bind(var27)(var18);
                var4.children = var18;
                var8 = var13.bind(var3)(var8, var4);
                var4 = new Array(6);
                var4[0] = var8;
                var13 = _closure1_slot12;
                var7 = var26[var7];
                var7 = var16.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-muted'
                };
                var18 = var11.subtitle;
                var7.style = var18;
                var18 = var26[var17];
                var18 = var16.bind(var3)(var18);
                var27 = var18.intl;
                var24 = var27.string;
                var18 = var26[var17];
                var18 = var16.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.u0KPUS;
                var18 = var24.bind(var27)(var18);
                var7.children = var18;
                var7 = var13.bind(var3)(var8, var7);
                var4[1] = var7;
                var13 = _closure1_slot12;
                var8 = _closure1_slot19;
                var7 = {};
                var7.selectedGuilds = var15;
                var7 = var13.bind(var3)(var8, var7);
                var4[2] = var7;
                var13 = _closure1_slot12;
                var8 = _closure1_slot6;
                var7 = {};
                var15 = var11.separator;
                var7.style = var15;
                var7 = var13.bind(var3)(var8, var7);
                var4[3] = var7;
                var13 = _closure1_slot12;
                var8 = _closure1_slot6;
                var7 = {};
                var15 = var11.guildsScrollContainer;
                var7.style = var15;
                var18 = _closure1_slot12;
                var15 = 31;
                var15 = var26[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.MasonryFlashList;
                var15 = {};
                var15.data = var23;
                var15.extraData = var5;
                var23 = var11.scrollContentContainer;
                var15.contentContainerStyle = var23;
                var23 = {};
                var24 = 10;
                var24 = var26[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.spacing;
                var24 = var24.PX_72;
                var24 = var24 + var10;
                var23.bottom = var24;
                var15.contentInset = var23;
                var15.numColumns = var22;
                var15.onEndReached = var21;
                var21 = 0.5;
                var15.onEndReachedThreshold = var21;
                var15.showsHorizontalScrollIndicator = var20;
                var15.showsVerticalScrollIndicator = var20;
                var15.renderItem = var19;
                var19 = 229;
                var15.estimatedItemSize = var19;
                var15 = var18.bind(var3)(var16, var15);
                var7.children = var15;
                var7 = var13.bind(var3)(var8, var7);
                var4[4] = var7;
                var5 = var5.size;
                var5 = var5 >= var6;
                if (!var5) {
                    _fun103828_ip = 1144;
                    continue _fun103828
                }
            case 993:
                var8 = _closure1_slot12;
                var7 = _closure1_slot6;
                var6 = {};
                var13 = {};
                var13.marginBottom = var10;
                var10 = new Array(2);
                var10[0] = var13;
                var11 = var11.footer;
                var10[1] = var11;
                var6.style = var10;
                var11 = _closure1_slot12;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 22;
                var9 = var13[var9];
                var9 = var16.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var9.loading = var14;
                var14 = 'lg';
                var9.size = var14;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.K50GHd;
                var13 = var14.bind(var15)(var13);
                var9.text = var13;
                var9.onPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1144:
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1298, 1410, 13548, 660, 33, 13517, 671, 7388, 5353, 3711, 4088, 7557, 566, 1417, 5452, 4699, 4897, 3932, 4075, 3262, 1234, 1568, 8870, 8866, 3139, 4557, 13532, 5748, 2]);