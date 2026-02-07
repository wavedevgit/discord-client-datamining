// modules/launchpad/native/LaunchPadSearchResults.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun110629: for (var _fun110629_ip = 0;;) switch (_fun110629_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.result;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun110629_ip = 588;
                    continue _fun110629
                }
            case 18:
                var3 = var5.type;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 20;
                var2 = var2[var7];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.GUILD;
                if (!(var2 !== var3)) {
                    _fun110629_ip = 560;
                    continue _fun110629
                }
            case 67:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.TEXT_CHANNEL;
                if (!(var2 !== var3)) {
                    _fun110629_ip = 502;
                    continue _fun110629
                }
            case 103:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.GROUP_DM;
                if (!(var2 !== var3)) {
                    _fun110629_ip = 451;
                    continue _fun110629
                }
            case 139:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.VOICE_CHANNEL;
                if (!(var2 !== var3)) {
                    _fun110629_ip = 407;
                    continue _fun110629
                }
            case 175:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.USER;
                if (!(var2 !== var3)) {
                    _fun110629_ip = 352;
                    continue _fun110629
                }
            case 211:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.HEADER;
                if (!(var2 !== var3)) {
                    _fun110629_ip = 302;
                    continue _fun110629
                }
            case 244:
                var6 = _closure1_slot9;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 26;
                var2 = var7[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var7 = 'text-sm/semibold';
                var2.variant = var7;
                var7 = var5.type;
                var2.children = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
            case 302:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 25;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.renderCategoryItem;
                var2 = {};
                var7 = var5.record;
                var7 = var7.text;
                var2.name = var7;
                var2 = var3.bind(var6)(var2);
                return var2;
            case 352:
                var6 = _closure1_slot9;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 24;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = var5.record;
                var2.user = var7;
                var7 = var5.comparator;
                var2.comparator = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
            case 407:
                var6 = _closure1_slot9;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 23;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = var5.record;
                var2.channel = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
            case 451:
                var6 = _closure1_slot9;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 22;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = var5.record;
                var2.channel = var7;
                var7 = true;
                var2.navigationReplace = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
            case 502:
                var6 = _closure1_slot9;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 21;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {
                    'channel': null,
                    'navigationReplace': true,
                    'showGuildBadgeIcon': true
                };
                var7 = var5.record;
                var2.channel = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
            case 560:
                var3 = _closure1_slot9;
                var2 = _closure1_slot14;
                var1 = {};
                var5 = var5.record;
                var1.guild = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 588:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var3 = _closure1_slot9;
        var2 = _closure1_slot15;
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 27;
        var5 = var8[var4];
        var0 = undefined;
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4["zkoeq/"];
        var4 = var5.bind(var6)(var4);
        var1.name = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var12 = 1;
    var3 = var6[var12];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot9 = var4;
    var4 = var3.Fragment;
    var _closure1_slot10 = var4;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = {};
    var4 = 24;
    var3.bottom = var4;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 16;
    var9.minHeight = var10;
    var3.listContainer = var9;
    var10 = 8;
    var9 = {
        'flex': 4294967295,
        'marginTop': 8
    };
    var3.list = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderRadius = var13;
    var3.guildIcon = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.categoryWrapper = var9;
    var9 = {};
    var9.flex = var12;
    var3.pressable = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_BACKGROUND_ACTIVE;
    var9.backgroundColor = var10;
    var3.pressableUnderlayColor = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var13 = var1.guild;
        var _closure2_slot0 = var13;
        var1 = _closure1_slot13;
        var2 = undefined;
        var20 = var1.bind(var2)();
        var14 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 9;
        var1 = var18[var1];
        var1 = var14.bind(var2)(var1);
        var21 = var1.bind(var2)();
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var1 = var13.id;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.transitionToGuild;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5 = var4.bind(var5)(var1, var3);
        var3 = _closure1_slot0;
        var1 = 11;
        var4 = var18[var1];
        var8 = var3.bind(var2)(var4);
        var7 = var8.useStateFromStoresObject;
        var4 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot6;
            var4 = var3.hasUnread;
            var1 = _closure2_slot0;
            var2 = var1.id;
            var2 = var4.bind(var3)(var2);
            var0.unread = var2;
            var4 = var3.getMentionCount;
            var2 = var1.id;
            var2 = var4.bind(var3)(var2);
            var0.mentionCount = var2;
            var2 = var3.getIsMentionLowImportance;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var0.isMentionLowImportance = var1;
            return var0;
        };
        var4 = var7.bind(var8)(var6, var4);
        var22 = var4.unread;
        var17 = var4.mentionCount;
        var15 = var4.isMentionLowImportance;
        var4 = 12;
        var4 = var18[var4];
        var6 = var3.bind(var2)(var4);
        var4 = var6.useFontScale;
        var8 = var4.bind(var6)();
        var1 = var18[var1];
        var6 = var3.bind(var2)(var1);
        var4 = var6.useStateFromStores;
        var7 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot5;
            var0 = var0.locale;
            return var0;
        };
        var16 = var4.bind(var6)(var1, var0);
        var0 = 13;
        var0 = var18[var0];
        var1 = var14.bind(var2)(var0);
        var4 = _closure1_slot9;
        var0 = 14;
        var0 = var18[var0];
        var0 = var3.bind(var2)(var0);
        var3 = var0.PressableHighlight;
        var0 = {};
        var0.onPress = var5;
        var5 = var20.pressableUnderlayColor;
        var5 = var5.backgroundColor;
        var0.underlayColor = var5;
        var6 = var20.pressable;
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var7 = var21.container;
        var7 = var7.borderRadius;
        var6.borderRadius = var7;
        var5[1] = var6;
        var0.style = var5;
        var5 = 15;
        var5 = var18[var5];
        var7 = var14.bind(var2)(var5);
        var9 = _closure1_slot11;
        var6 = _closure1_slot10;
        var5 = {};
        var19 = _closure1_slot9;
        var10 = 16;
        var10 = var18[var10];
        var12 = var14.bind(var2)(var10);
        var10 = {};
        var10.unread = var22;
        var22 = _closure1_slot8;
        var22 = var22.ALL_MESSAGES;
        var10.resolvedUnreadSetting = var22;
        var12 = var19.bind(var2)(var12, var10);
        var10 = new Array(3);
        var10[0] = var12;
        var19 = _closure1_slot9;
        var11 = 17;
        var11 = var18[var11];
        var12 = var14.bind(var2)(var11);
        var11 = {};
        var22 = var21.icon;
        var22 = var22.guildIconSize;
        var11.size = var22;
        var11.guild = var13;
        var22 = var20.guildIcon;
        var20 = new Array(2);
        var20[0] = var22;
        var21 = var21.icon;
        var21 = var21.margin;
        var20[1] = var21;
        var11.style = var20;
        var11 = var19.bind(var2)(var12, var11);
        var10[1] = var11;
        var11 = 18;
        var11 = var18[var11];
        var12 = var14.bind(var2)(var11);
        var11 = {};
        var13 = var13.name;
        var11.name = var13;
        var13 = 19;
        var13 = var18[var13];
        var14 = var14.bind(var2)(var13);
        var13 = {};
        var13.mentionCount = var17;
        var13.locale = var16;
        var13.isMentionLowImportance = var15;
        var13 = var14.bind(var2)(var13);
        var11.mentionBadge = var13;
        var11 = var12.bind(var2)(var11);
        var10[2] = var11;
        var5.children = var10;
        var6 = var9.bind(var2)(var6, var5);
        var5 = {};
        var5.fontScale = var8;
        var5 = var7.bind(var2)(var6, var5);
        var0.children = var5;
        var0 = var4.bind(var2)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var8 = var0.name;
        var7 = var0.onPress;
        var6 = var0.note;
        var1 = _closure1_slot13;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 25;
        var1 = var4[var1];
        var4 = var2.bind(var3)(var1);
        var2 = var4.renderCategoryItem;
        var1 = {};
        var1.name = var8;
        var1.onPress = var7;
        var1.note = var6;
        var4 = var2.bind(var4)(var1);
        var2 = _closure1_slot9;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.categoryWrapper;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun110636: for (var _fun110636_ip = 0;;) switch (_fun110636_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.history;
                var _closure2_slot0 = var4;
                var12 = var1.unreads;
                var _closure2_slot1 = var12;
                var16 = var1.toggleExpandedHistory;
                var _closure2_slot2 = var16;
                var7 = var1.expandedHistory;
                var _closure2_slot3 = var7;
                var9 = var1.selectedGuildId;
                var _closure2_slot4 = var9;
                var1 = _closure1_slot13;
                var3 = undefined;
                var17 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var1 = var8[var1];
                var11 = var2.bind(var3)(var1);
                var6 = var11.useStateFromStores;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    _fun110637: for (var _fun110637_ip = 0;;) switch (_fun110637_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun110637_ip = 17;
                                continue _fun110637
                            }
                        case 13:
                            var2 = undefined;
                            return var2;
                        case 17:
                            var3 = _closure1_slot7;
                            var2 = var3.getGuild;
                            var1 = _closure2_slot4;
                            var1 = var2.bind(var3)(var1);
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun110637_ip = 52;
                                continue _fun110637
                            }
                        case 47:
                            var0 = var1.name;
                        case 52:
                            return var0;
                    }
                };
                var1 = var6.bind(var11)(var5, var1);
                var _closure2_slot5 = var1;
                var13 = _closure1_slot1;
                var5 = 28;
                var5 = var8[var5];
                var5 = var13.bind(var3)(var5);
                var5 = var5.bind(var3)();
                var5 = var5.height;
                var6 = _closure1_slot3;
                var15 = var6.useCallback;
                var14 = new Array(2);
                var14[0] = var4;
                var14[1] = var12;
                var11 = function(arg0, arg1) { // Environment: var0
                    _fun110638: for (var _fun110638_ip = 0;;) switch (_fun110638_ip) {
                        case 0:
                            var4 = arg1;
                            var2 = _closure1_slot16;
                            var1 = {};
                            var3 = 0;
                            var0 = arg0;
                            if (!(var3 !== var0)) {
                                _fun110638_ip = 34;
                                continue _fun110638
                            }
                        case 21:
                            var0 = _closure2_slot1;
                            var0 = var0[var4];
                            _fun110638_ip = 45;
                            continue _fun110638;
                        case 34:
                            var3 = _closure2_slot0;
                            var0 = var3[var4];
                        case 45:
                            var1.result = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var14 = var15.bind(var6)(var11, var14);
                var15 = var6.useCallback;
                var11 = new Array(3);
                var11[0] = var16;
                var11[1] = var7;
                var11[2] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun110639: for (var _fun110639_ip = 0;;) switch (_fun110639_ip) {
                        case 0:
                            var3 = _closure1_slot9;
                            var2 = _closure1_slot15;
                            var1 = 0;
                            var0 = arg0;
                            if (!(var1 !== var0)) {
                                _fun110639_ip = 177;
                                continue _fun110639
                            }
                        case 23:
                            var1 = {};
                            var4 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 == var4)) {
                                _fun110639_ip = 97;
                                continue _fun110639
                            }
                        case 38:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 27;
                            var4 = var9[var0];
                            var6 = undefined;
                            var4 = var7.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var0 = var9[var0];
                            var0 = var7.bind(var6)(var0);
                            var0 = var0.t;
                            var0 = var0.ieCAhD;
                            var0 = var4.bind(var5)(var0);
                            _fun110639_ip = 168;
                            continue _fun110639;
                        case 97:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var4 = 27;
                            var6 = var11[var4];
                            var5 = undefined;
                            var6 = var9.bind(var5)(var6);
                            var7 = var6.intl;
                            var6 = var7.formatToPlainString;
                            var4 = var11[var4];
                            var4 = var9.bind(var5)(var4);
                            var4 = var4.t;
                            var5 = var4["+lFj35"];
                            var4 = {};
                            var8 = _closure2_slot5;
                            var4.guildName = var8;
                            var0 = var6.bind(var7)(var5, var4);
                        case 168:
                            var1.name = var0;
                            _fun110639_ip = 392;
                            continue _fun110639;
                        case 177:
                            var0 = {};
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var14 = 27;
                            var4 = var11[var14];
                            var8 = undefined;
                            var4 = var9.bind(var8)(var4);
                            var6 = var4.intl;
                            var5 = var6.string;
                            var4 = var11[var14];
                            var4 = var9.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4["Xmh+5e"];
                            var4 = var5.bind(var6)(var4);
                            var0.name = var4;
                            var5 = _closure2_slot3;
                            var7 = _closure1_slot9;
                            var6 = 26;
                            var6 = var11[var6];
                            var6 = var9.bind(var8)(var6);
                            var6 = var6.Text;
                            var9 = {
                                'variant': 'text-xs/semibold',
                                'color': 'text-brand'
                            };
                            var13 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var11 = var10[var14];
                            var11 = var13.bind(var8)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var10[var14];
                            var10 = var13.bind(var8)(var10);
                            var10 = var10.t;
                            if (var5) {
                                _fun110639_ip = 350;
                                continue _fun110639
                            }
                        case 328:
                            var5 = var10["/XSoJ+"];
                            var5 = var11.bind(var12)(var5);
                            var9.children = var5;
                            var5 = var9;
                            _fun110639_ip = 370;
                            continue _fun110639;
                        case 350:
                            var10 = var10["3BdvgI"];
                            var10 = var11.bind(var12)(var10);
                            var9.children = var10;
                            var5 = var9;
                        case 370:
                            var5 = var7.bind(var8)(var6, var5);
                            var0.note = var5;
                            var4 = _closure2_slot2;
                            var0.onPress = var4;
                            var1 = var0;
                        case 392:
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var11 = var15.bind(var6)(var1, var11);
                var1 = 9;
                var1 = var8[var1];
                var1 = var13.bind(var3)(var1);
                var16 = var1.bind(var3)();
                var _closure2_slot6 = var16;
                var1 = 12;
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useFontScale;
                var8 = var1.bind(var2)();
                var _closure2_slot7 = var8;
                var2 = var6.useCallback;
                var1 = new Array(4);
                var1[0] = var8;
                var1[1] = var4;
                var1[2] = var12;
                var1[3] = var16;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun110640: for (var _fun110640_ip = 0;;) switch (_fun110640_ip) {
                        case 0:
                            var3 = arg1;
                            var0 = null;
                            var1 = var0 == var3;
                            var2 = 0;
                            var0 = 0;
                            if (var1) {
                                _fun110640_ip = 191;
                                continue _fun110640
                            }
                        case 19:
                            var1 = arg0;
                            if (!(var2 !== var1)) {
                                _fun110640_ip = 39;
                                continue _fun110640
                            }
                        case 26:
                            var1 = _closure2_slot1;
                            var1 = var1[var3];
                            _fun110640_ip = 50;
                            continue _fun110640;
                        case 39:
                            var2 = _closure2_slot0;
                            var1 = var2[var3];
                        case 50:
                            var3 = var1.type;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 20;
                            var1 = var5[var1];
                            var5 = undefined;
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.AutocompleterResultTypes;
                            var1 = var1.VOICE_CHANNEL;
                            if (!(var3 !== var1)) {
                                _fun110640_ip = 130;
                                continue _fun110640
                            }
                        case 96:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 29;
                            var1 = var4[var1];
                            var3 = var3.bind(var5)(var1);
                            var1 = _closure2_slot7;
                            var1 = var3.bind(var5)(var1);
                            _fun110640_ip = 188;
                            continue _fun110640;
                        case 130:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 29;
                            var2 = var4[var2];
                            var4 = var3.bind(var5)(var2);
                            var3 = _closure2_slot7;
                            var3 = var4.bind(var5)(var3);
                            var2 = _closure2_slot6;
                            var2 = var2.voiceUsers;
                            var2 = var2.height;
                            var3 = var3 + var2;
                            var2 = 2;
                            var1 = var3 - var2;
                        case 188:
                            var0 = var1;
                        case 191:
                            return var0;
                    }
                };
                var15 = var2.bind(var6)(var0, var1);
                var0 = global;
                var6 = var0.Math;
                var2 = var6.min;
                var1 = var4.length;
                if (var7) {
                    _fun110636_ip = 354;
                    continue _fun110636
                }
            case 320:
                var13 = var0.Math;
                var8 = var13.max;
                var7 = var12.length;
                var0 = 5;
                var7 = var0 - var7;
                var0 = 2;
                var0 = var8.bind(var13)(var7, var0);
                _fun110636_ip = 359;
                continue _fun110636;
            case 354:
                var0 = var4.length;
            case 359:
                var13 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var17.listContainer;
                var0.style = var6;
                var4 = var4.length;
                var6 = 0;
                if (!(!(var4 > var6))) {
                    _fun110636_ip = 413;
                    continue _fun110636
                }
            case 396:
                var4 = var12.length;
                var6 = var4 > var6;
                var4 = null;
                if (!var6) {
                    _fun110636_ip = 573;
                    continue _fun110636
                }
            case 413:
                var8 = _closure1_slot9;
                var7 = _closure1_slot1;
                var18 = _closure1_slot2;
                var6 = 30;
                var6 = var18[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {
                    'optimizeListItemRender': true,
                    'batchesToRender': 6
                };
                var17 = var17.list;
                var6.style = var17;
                var16 = var16.category;
                var16 = var16.height;
                var6.sectionSize = var16;
                var6.itemSize = var15;
                var6.renderItem = var14;
                var6.renderSection = var11;
                var11 = new Array(2);
                var11[0] = var13;
                var12 = var12.length;
                var11[1] = var12;
                var6.sections = var11;
                var11 = 8;
                var6.sectionFooterSize = var11;
                var6.footerSize = var11;
                var10 = _closure1_slot12;
                var6.scrollIndicatorInsets = var10;
                var6.chunkBase = var5;
                var5 = 'always';
                var6.keyboardShouldPersistTaps = var5;
                var5 = null;
                var10 = var5 != var9;
                var5 = 'default';
                if (!var10) {
                    _fun110636_ip = 566;
                    continue _fun110636
                }
            case 563:
                var5 = var9;
            case 566:
                var4 = var8.bind(var3)(var7, var6, var5);
            case 573:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = var7.memo;
    var1 = function arg0() {
        _fun110641: for (var _fun110641_ip = 0;;) switch (_fun110641_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.results;
                var _closure2_slot0 = var10;
                var1 = var1.query;
                var2 = _closure1_slot13;
                var3 = undefined;
                var14 = var2.bind(var3)();
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 28;
                var4 = var6[var4];
                var4 = var2.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var8 = var4.height;
                var5 = _closure1_slot3;
                var11 = var5.useCallback;
                var7 = new Array(1);
                var7[0] = var10;
                var4 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure1_slot16;
                    var1 = {};
                    var3 = _closure2_slot0;
                    var0 = arg1;
                    var0 = var3[var0];
                    var1.result = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var11.bind(var5)(var4, var7);
                var7 = var5.useRef;
                var4 = null;
                var15 = var7.bind(var5)(var4);
                var _closure2_slot1 = var15;
                var12 = var5.useEffect;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    _fun110643: for (var _fun110643_ip = 0;;) switch (_fun110643_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = var0.current;
                            var3 = null;
                            var0 = var3 == var2;
                            if (var0) {
                                _fun110643_ip = 31;
                                continue _fun110643
                            }
                        case 21:
                            var1 = var2.scrollToTop;
                            var0 = var3 == var1;
                        case 31:
                            if (var0) {
                                _fun110643_ip = 47;
                                continue _fun110643
                            }
                        case 34:
                            var1 = var2.scrollToTop;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var12.bind(var5)(var1, var7);
                var1 = 9;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var13 = var1.bind(var3)();
                var _closure2_slot2 = var13;
                var2 = _closure1_slot0;
                var1 = 12;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useFontScale;
                var6 = var1.bind(var2)();
                var _closure2_slot3 = var6;
                var2 = var5.useCallback;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var10;
                var1[2] = var13;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun110644: for (var _fun110644_ip = 0;;) switch (_fun110644_ip) {
                        case 0:
                            var3 = arg1;
                            var0 = null;
                            var1 = var0 == var3;
                            var0 = 0;
                            if (var1) {
                                _fun110644_ip = 163;
                                continue _fun110644
                            }
                        case 17:
                            var1 = _closure2_slot0;
                            var1 = var1[var3];
                            var4 = var1.type;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 20;
                            var1 = var5[var1];
                            var5 = undefined;
                            var1 = var6.bind(var5)(var1);
                            var1 = var1.AutocompleterResultTypes;
                            var1 = var1.VOICE_CHANNEL;
                            if (!(var4 !== var1)) {
                                _fun110644_ip = 105;
                                continue _fun110644
                            }
                        case 74:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 29;
                            var1 = var6[var1];
                            var4 = var4.bind(var5)(var1);
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var1);
                            _fun110644_ip = 160;
                            continue _fun110644;
                        case 105:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 29;
                            var3 = var6[var3];
                            var4 = var4.bind(var5)(var3);
                            var3 = _closure2_slot3;
                            var3 = var4.bind(var5)(var3);
                            var2 = _closure2_slot2;
                            var2 = var2.voiceUsers;
                            var2 = var2.height;
                            var3 = var3 + var2;
                            var2 = 2;
                            var1 = var3 - var2;
                        case 160:
                            var0 = var1;
                        case 163:
                            return var0;
                    }
                };
                var12 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var14.listContainer;
                var0.style = var5;
                var6 = var10.length;
                var5 = 0;
                var5 = var6 > var5;
                if (!var5) {
                    _fun110641_ip = 400;
                    continue _fun110641
                }
            case 256:
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 30;
                var5 = var16[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {
                    'ref': null,
                    'optimizeListItemRender': true,
                    'batchesToRender': 6
                };
                var5.ref = var15;
                var14 = var14.list;
                var5.style = var14;
                var13 = var13.category;
                var13 = var13.height;
                var5.sectionSize = var13;
                var5.itemSize = var12;
                var12 = _closure1_slot17;
                var5.renderSection = var12;
                var5.renderItem = var11;
                var11 = var10.length;
                var10 = new Array(1);
                var10[0] = var11;
                var5.sections = var10;
                var10 = 16;
                var5.footerSize = var10;
                var9 = _closure1_slot12;
                var5.scrollIndicatorInsets = var9;
                var5.chunkBase = var8;
                var8 = 'always';
                var5.keyboardShouldPersistTaps = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 400:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/LaunchPadSearchResults.tsx';
    var4 = var5.bind(var6)(var4);
    var2.InitialResults = var3;
    var2.SearchResults = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1687, 8709, 1410, 4304, 33, 1297, 671, 14234, 5666, 566, 4090, 14235, 4904, 14236, 14238, 7464, 14239, 14241, 6692, 14242, 14248, 14249, 14251, 13353, 3942, 1234, 1464, 14237, 6523, 2]);