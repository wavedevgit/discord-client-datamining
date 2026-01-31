// modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: handleInviteDisabledPress, environment: var1
        var3 = _closure1_slot3;
        var2 = var3.lazy;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var0 = _closure1_slot2;
            var1 = 12;
            var1 = var0[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = 11;
            var1 = var0[var1];
            var0 = var0.paths;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var2.bind(var3)(var0);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 13;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.openAlert;
        var2 = _closure1_slot12;
        var1 = {};
        var2 = var2.bind(var0)(var5, var1);
        var1 = 'invites-disabled';
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: GuildSearchAndInvite, environment: var1
        _fun89766: for (var _fun89766_ip = 0;;) switch (_fun89766_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var _closure2_slot0 = var11;
                var8 = var0.canInvite;
                var _closure2_slot1 = var8;
                var15 = var0.invitesDisabled;
                var _closure2_slot2 = var15;
                var16 = var0.onInvitePress;
                var _closure2_slot3 = var16;
                var9 = var0.onEventsPress;
                var _closure2_slot4 = var9;
                var6 = var0.hasUnreadEvents;
                var _closure2_slot5 = var6;
                var17 = var0.useEventsButton;
                var _closure2_slot6 = var17;
                var0 = var0.useButtonComponent;
                var2 = _closure1_slot14;
                var3 = undefined;
                var12 = var2.bind(var3)(var0);
                var _closure2_slot7 = var12;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var4 = var7.bind(var3)(var2);
                var2 = var4.useNavigation;
                var2 = var2.bind(var4)();
                var _closure2_slot8 = var2;
                var2 = 15;
                var2 = var5[var2];
                var4 = var7.bind(var3)(var2);
                var2 = var4.useGuildSearchContext;
                var2 = var2.bind(var4)(var11);
                var _closure2_slot9 = var2;
                var4 = _closure1_slot1;
                var2 = 16;
                var2 = var5[var2];
                var11 = var4.bind(var3)(var2);
                var2 = function() { // Environment: var1
                    _fun89767: for (var _fun89767_ip = 0;;) switch (_fun89767_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getGuild;
                            var0 = _closure2_slot0;
                            var5 = var3.bind(var4)(var0);
                            var3 = null;
                            var6 = var3 == var5;
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun89767_ip = 63;
                                continue _fun89767
                            }
                        case 37:
                            var7 = var5.features;
                            var6 = var7.has;
                            var5 = _closure1_slot10;
                            var5 = var5.HUB;
                            var4 = var6.bind(var7)(var5);
                        case 63:
                            if (var4) {
                                _fun89767_ip = 72;
                                continue _fun89767
                            }
                        case 66:
                            var8 = new Array(0);
                            _fun89767_ip = 91;
                            continue _fun89767;
                        case 72:
                            var6 = _closure1_slot6;
                            var5 = var6.getDirectoryChannelIds;
                            var4 = _closure2_slot0;
                            var8 = var5.bind(var6)(var4);
                        case 91:
                            var6 = var8.length;
                            var5 = 0;
                            var4 = null;
                            if (!(var5 !== var6)) {
                                _fun89767_ip = 122;
                                continue _fun89767
                            }
                        case 104:
                            var7 = _closure1_slot5;
                            var6 = var7.getChannel;
                            var5 = var8[var5];
                            var4 = var6.bind(var7)(var5);
                        case 122:
                            if (!(var3 == var4)) {
                                _fun89767_ip = 168;
                                continue _fun89767
                            }
                        case 126:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 18;
                            var3 = var6[var3];
                            var6 = var5.bind(var0)(var3);
                            var5 = var6.navigateToSearchWithPrefetch;
                            var3 = _closure2_slot8;
                            var2 = _closure2_slot9;
                            var2 = var5.bind(var6)(var3, var2);
                            _fun89767_ip = 205;
                            continue _fun89767;
                        case 168:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var1.channel = var4;
                            var1 = var2.bind(var3)(var1);
                        case 205:
                            return var0;
                    }
                };
                var11 = var11.bind(var3)(var2);
                var2 = 19;
                var2 = var5[var2];
                var13 = var7.bind(var3)(var2);
                var7 = var13.useIOSPressEffects;
                var2 = 4;
                var2 = var7.bind(var13)(var2);
                var19 = var2.onPressIn;
                var18 = var2.onPressOut;
                var14 = var2.pressableStyles;
                var2 = 20;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var13 = var2.bind(var3)();
                var _closure2_slot10 = var13;
                var7 = _closure1_slot3;
                var5 = var7.useMemo;
                var4 = new Array(4);
                var4[0] = var8;
                var4[1] = var15;
                var4[2] = var13;
                var4[3] = var16;
                var2 = function() { // Environment: var1
                    _fun89768: for (var _fun89768_ip = 0;;) switch (_fun89768_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!var1) {
                                _fun89768_ip = 197;
                                continue _fun89768
                            }
                        case 15:
                            var4 = _closure1_slot12;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 21;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.IconButton;
                            var1 = {};
                            var8 = _closure2_slot10;
                            var7 = 'secondary';
                            if (!var8) {
                                _fun89768_ip = 67;
                                continue _fun89768
                            }
                        case 63:
                            var7 = 'tertiary';
                        case 67:
                            var1.variant = var7;
                            var7 = 'sm';
                            var1.size = var7;
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var7 = 22;
                            var7 = var10[var7];
                            var7 = var8.bind(var3)(var7);
                            var1.icon = var7;
                            var7 = _closure2_slot3;
                            var1.onPress = var7;
                            var7 = _closure1_slot15;
                            var1.onPressDisabled = var7;
                            var9 = _closure1_slot0;
                            var6 = 23;
                            var7 = var10[var6];
                            var7 = var9.bind(var3)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6.VINpSK;
                            var6 = var7.bind(var8)(var6);
                            var1.accessibilityLabel = var6;
                            var5 = _closure2_slot2;
                            var1.disabled = var5;
                            var5 = 2;
                            var1.maxFontSizeMultiplier = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 197:
                            return var0;
                    }
                };
                var7 = var5.bind(var7)(var2, var4);
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var2 = new Array(5);
                var2[0] = var17;
                var2[1] = var13;
                var2[2] = var9;
                var2[3] = var6;
                var6 = var12.badge;
                var2[4] = var6;
                var1 = function() { // Environment: var1
                    _fun89769: for (var _fun89769_ip = 0;;) switch (_fun89769_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = null;
                            if (!var1) {
                                _fun89769_ip = 249;
                                continue _fun89769
                            }
                        case 15:
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot4;
                            var2 = {};
                            var8 = _closure1_slot12;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 21;
                            var5 = var5[var1];
                            var1 = undefined;
                            var5 = var6.bind(var1)(var5);
                            var6 = var5.IconButton;
                            var5 = {};
                            var11 = _closure2_slot10;
                            var9 = 'secondary';
                            if (!var11) {
                                _fun89769_ip = 77;
                                continue _fun89769
                            }
                        case 73:
                            var9 = 'tertiary';
                        case 77:
                            var5.variant = var9;
                            var9 = 'sm';
                            var5.size = var9;
                            var11 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var9 = 24;
                            var9 = var14[var9];
                            var9 = var11.bind(var1)(var9);
                            var5.icon = var9;
                            var13 = _closure1_slot0;
                            var9 = 23;
                            var11 = var14[var9];
                            var11 = var13.bind(var1)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var9 = var14[var9];
                            var9 = var13.bind(var1)(var9);
                            var9 = var9.t;
                            var9 = var9.tlopTM;
                            var9 = var11.bind(var12)(var9);
                            var5.accessibilityLabel = var9;
                            var9 = _closure2_slot4;
                            var5.onPress = var9;
                            var9 = 2;
                            var5.maxFontSizeMultiplier = var9;
                            var6 = var8.bind(var1)(var6, var5);
                            var5 = new Array(2);
                            var5[0] = var6;
                            var6 = _closure2_slot5;
                            if (!var6) {
                                _fun89769_ip = 235;
                                continue _fun89769
                            }
                        case 205:
                            var9 = _closure1_slot12;
                            var8 = _closure1_slot4;
                            var7 = {};
                            var10 = _closure2_slot7;
                            var10 = var10.badge;
                            var7.style = var10;
                            var6 = var9.bind(var1)(var8, var7);
                        case 235:
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 249:
                            return var0;
                    }
                };
                var6 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot13;
                var1 = _closure1_slot4;
                var4 = {};
                var5 = var12.container;
                var4.style = var5;
                var9 = _closure1_slot12;
                if (var0) {
                    _fun89766_ip = 647;
                    continue _fun89766
                }
            case 374:
                var5 = _closure1_slot1;
                var20 = _closure1_slot2;
                var0 = 27;
                var0 = var20[var0];
                var0 = var5.bind(var3)(var0);
                var5 = var0.View;
                var0 = {};
                var17 = var12.search;
                var12 = new Array(2);
                var12[0] = var17;
                var12[1] = var14;
                var0.style = var12;
                var17 = _closure1_slot12;
                var14 = _closure1_slot0;
                var12 = 28;
                var12 = var20[var12];
                var12 = var14.bind(var3)(var12);
                var14 = var12.SearchButtonContent;
                var12 = {};
                var12.onPress = var11;
                var12.onPressIn = var19;
                var12.onPressOut = var18;
                var12 = var17.bind(var3)(var14, var12);
                var0.children = var12;
                var5 = var9.bind(var3)(var5, var0);
                var0 = new Array(2);
                var0[0] = var5;
                var5 = null;
                if (!var8) {
                    _fun89766_ip = 631;
                    continue _fun89766
                }
            case 497:
                var14 = _closure1_slot12;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 21;
                var8 = var20[var8];
                var8 = var19.bind(var3)(var8);
                var12 = var8.IconButton;
                var8 = {};
                var17 = 'tertiary';
                var8.variant = var17;
                var18 = _closure1_slot1;
                var17 = 22;
                var17 = var20[var17];
                var17 = var18.bind(var3)(var17);
                var8.icon = var17;
                var8.onPress = var16;
                var16 = _closure1_slot15;
                var8.onPressDisabled = var16;
                var16 = 23;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.VINpSK;
                var16 = var17.bind(var18)(var16);
                var8.accessibilityLabel = var16;
                var8.disabled = var15;
                var5 = var14.bind(var3)(var12, var8);
            case 631:
                var0[1] = var5;
                var4.children = var0;
                var0 = var4;
                _fun89766_ip = 824;
                continue _fun89766;
            case 647:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 25;
                var5 = var12[var5];
                var5 = var8.bind(var3)(var5);
                var8 = var5.Button;
                var5 = {
                    'variant': null,
                    'grow': true,
                    'shrink': true,
                    'size': 'sm'
                };
                var12 = 'secondary';
                if (!var13) {
                    _fun89766_ip = 698;
                    continue _fun89766
                }
            case 694:
                var12 = 'tertiary';
            case 698:
                var5.variant = var12;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 26;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var5.icon = var12;
                var5.onPress = var11;
                var13 = _closure1_slot0;
                var10 = 23;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["5h0QOP"];
                var10 = var11.bind(var12)(var10);
                var5.text = var10;
                var10 = 2;
                var5.maxFontSizeMultiplier = var10;
                var8 = var9.bind(var3)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                var5[1] = var7;
                var5[2] = var6;
                var4.children = var5;
                var0 = var4;
            case 824:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SEARCH_BAR_MARGIN_BOTTOM;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.GuildFeatures;
    var _closure1_slot10 = var7;
    var3 = var3.InstantInviteSources;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun89770: for (var _fun89770_ip = 0;;) switch (_fun89770_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 10;
                var3 = var3[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_16;
                var1.paddingHorizontal = var3;
                var3 = _closure1_slot9;
                var1.marginBottom = var3;
                var3 = 'row';
                var1.flexDirection = var3;
                var6 = arg0;
                var3 = var5;
                if (!var6) {
                    _fun89770_ip = 96;
                    continue _fun89770
                }
            case 68:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var5];
                var6 = var7.bind(var4)(var6);
                var6 = var6.spacing;
                var3 = var6.PX_12;
            case 96:
                var1.gap = var3;
                var0.container = var1;
                var1 = {};
                var3 = 1;
                var1.flex = var3;
                var0.search = var1;
                var1 = {
                    'position': 'absolute',
                    'right': 0,
                    'top': 0,
                    'width': 8,
                    'height': 8
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.radii;
                var6 = var6.round;
                var1.borderRadius = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BRAND;
                var1.backgroundColor = var2;
                var0.badge = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: ConnectedGuildSearchAndInviteInner, environment: var1
        _fun89771: for (var _fun89771_ip = 0;;) switch (_fun89771_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.guild;
                var _closure2_slot0 = var13;
                var4 = var0.useButtonComponent;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun89771_ip = 28;
                    continue _fun89771
                }
            case 26:
                var4 = false;
            case 28:
                var5 = var0.useEventsButton;
                if (!(var5 === var3)) {
                    _fun89771_ip = 40;
                    continue _fun89771
                }
            case 38:
                var5 = false;
            case 40:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 29;
                var2 = var7[var2];
                var11 = var6.bind(var3)(var2);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var2;
                var8 = new Array(1);
                var8[0] = var13;
                var2 = function() { // Environment: var1
                    var4 = _closure1_slot6;
                    var2 = var4.getChannels;
                    var3 = _closure2_slot0;
                    var1 = var3.id;
                    var2 = var2.bind(var4)(var1);
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var0 = var1.shouldRenderInvite;
                    var0 = var0.bind(var1)(var2, var3);
                    return var0;
                };
                var12 = var10.bind(var11)(var9, var2, var8);
                var2 = _closure1_slot1;
                var8 = 16;
                var8 = var7[var8];
                var8 = var2.bind(var3)(var8);
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot8;
                    var2 = var3.getChannelId;
                    var6 = _closure2_slot0;
                    var0 = var6.id;
                    var9 = var2.bind(var3)(var0);
                    var3 = _closure1_slot6;
                    var2 = var3.getChannels;
                    var0 = var6.id;
                    var8 = var2.bind(var3)(var0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 31;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.handleOpenInviteActionsheet;
                    var1 = _closure1_slot11;
                    var7 = var1.GUILD_HEADER;
                    var11 = var3;
                    var10 = var6;
                    var1 = var11[var2](var10, var9, var8, var7, var6);
                    return var0;
                };
                var10 = var8.bind(var3)(var1);
                var1 = 32;
                var1 = var7[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var6.useShouldShowInvitesDisabledNotif;
                var11 = var1.bind(var6)(var13);
                var1 = 33;
                var1 = var7[var1];
                var6 = var2.bind(var3)(var1);
                var1 = var13.id;
                var6 = var6.bind(var3)(var1);
                var1 = 34;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var13);
                var7 = var1.hasUnread;
                var9 = var1.handlePress;
                var8 = var1.handleLongPress;
                var2 = _closure1_slot12;
                var1 = _closure1_slot16;
                var0 = {};
                var13 = var13.id;
                var0.guildId = var13;
                var0.canInvite = var12;
                var0.invitesDisabled = var11;
                var0.onInvitePress = var10;
                var0.onEventsPress = var9;
                var0.onEventsLongPress = var8;
                var0.hasUnreadEvents = var7;
                if (!var5) {
                    _fun89771_ip = 267;
                    continue _fun89771
                }
            case 264:
                var5 = var6;
            case 267:
                var0.useEventsButton = var5;
                var0.useButtonComponent = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1662, 1410, 1661, 8747, 660, 33, 1297, 671, 11627, 1307, 3988, 1469, 8923, 7497, 8872, 11628, 4867, 8672, 7470, 8593, 1234, 8143, 4043, 6973, 3679, 11640, 566, 8296, 8289, 11641, 11642, 11644, 2]);