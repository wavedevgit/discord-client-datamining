// uikit-native/Autocomplete.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var0 = function(arg0) { // Original name: AutocompleteLabel, environment: var5
        var1 = _closure1_slot10;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 10;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.FormRow;
        var1 = var0.Label;
        var0 = {};
        var4 = var4.leading;
        var0.style = var4;
        var4 = arg0;
        var4 = var4.text;
        var0.text = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var11 = 0;
    var3 = var7[var11];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var3 = var7[var1];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.ChannelTypes;
    var _closure1_slot8 = var4;
    var10 = var3.Fonts;
    var3 = 6;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var13 = var3.AUTOCOMPLETE_ROW_HEIGHT;
    var3 = 7;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var7[var3];
    var9 = var6.bind(var0)(var3);
    var8 = var9.createStyles;
    var4 = {};
    var3 = {};
    var3.height = var13;
    var3.paddingVertical = var11;
    var11 = 9;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var3.backgroundColor = var13;
    var4.row = var3;
    var3 = {};
    var13 = 16;
    var3.fontSize = var13;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_ACTIVE;
    var3.color = var14;
    var10 = var10.PRIMARY_SEMIBOLD;
    var3.fontFamily = var10;
    var4.leading = var3;
    var3 = {};
    var10 = 14;
    var3.fontSize = var10;
    var10 = var7[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var3.color = var10;
    var4.trailing = var3;
    var3 = {};
    var10 = var7[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PRIMARY_400;
    var3.color = var10;
    var4.username = var3;
    var3 = {
        'width': 32,
        'height': 32
    };
    var4.emoji = var3;
    var3 = {};
    var10 = 'contain';
    var3.resizeMode = var10;
    var4.emojiImage = var3;
    var3 = {
        'lineHeight': 32,
        'fontSize': 27,
        'textAlign': 'center'
    };
    var10 = var7[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var3.color = var10;
    var4.emojiText = var3;
    var10 = {
        'width': 56,
        'height': 56,
        'marginHorizontal': 4,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3 = 56;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_NORMAL;
    var10.backgroundColor = var14;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10.borderRadius = var14;
    var4.stickerContainer = var10;
    var10 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var4.commandChoiceLoadingContainer = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_MUTED;
    var10.backgroundColor = var14;
    var10.height = var13;
    var11 = var7[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var10.borderRadius = var11;
    var11 = 'flex-start';
    var10.alignSelf = var11;
    var4.commandChoiceLoadingItem = var10;
    var10 = {};
    var11 = 0.6;
    var10.opacity = var11;
    var4.autocompleteIcon = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = function(arg0) { // Original name: User, environment: var5
        _fun90590: for (var _fun90590_ip = 0;;) switch (_fun90590_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.user;
                var _closure2_slot0 = var8;
                var13 = var1.nick;
                var14 = var1.status;
                var12 = var1.guildId;
                var _closure2_slot1 = var12;
                var5 = var1.onPress;
                var1 = _closure1_slot10;
                var3 = undefined;
                var7 = var1.bind(var3)();
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var10 = var1.bind(var3)(var2);
                var9 = var10.useStateFromStores;
                var11 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var11;
                var0 = function() { // Environment: var0
                    _fun90591: for (var _fun90591_ip = 0;;) switch (_fun90591_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            if (!var2) {
                                _fun90591_ip = 43;
                                continue _fun90591
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.getNickname;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var10 = var9.bind(var10)(var2, var0);
                var2 = _closure1_slot9;
                var0 = 10;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var6 = var7.row;
                var0.DEPRECATED_style = var6;
                var0.onPress = var5;
                var5 = 'menuitem';
                var0.accessibilityRole = var5;
                var9 = _closure1_slot9;
                var6 = _closure1_slot11;
                var5 = {};
                var11 = null;
                if (!(var11 != var13)) {
                    _fun90590_ip = 170;
                    continue _fun90590
                }
            case 167:
                var10 = var13;
            case 170:
                if (!(var11 == var10)) {
                    _fun90590_ip = 205;
                    continue _fun90590
                }
            case 174:
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 12;
                var11 = var15[var11];
                var13 = var13.bind(var3)(var11);
                var11 = var13.getName;
                var10 = var11.bind(var13)(var8);
            case 205:
                var5.text = var10;
                var5 = var9.bind(var3)(var6, var5);
                var0.label = var5;
                var11 = _closure1_slot9;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var13 = 13;
                var6 = var9[var13];
                var10 = var5.bind(var3)(var6);
                var6 = {};
                var6.status = var14;
                var6.user = var8;
                var14 = _closure1_slot0;
                var13 = var9[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.AvatarSizes;
                var13 = var13.SMALL;
                var6.size = var13;
                var6.guildId = var12;
                var12 = true;
                var6.autoStatusCutout = var12;
                var6 = var11.bind(var3)(var10, var6);
                var0.leading = var6;
                var6 = _closure1_slot9;
                var4 = 14;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.user = var8;
                var9 = var7.trailing;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var7.username;
                var8[1] = var9;
                var4.usernameStyle = var8;
                var7 = var7.trailing;
                var4.discriminatorStyle = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4.User = var8;
    var8 = function(arg0) { // Original name: Global, environment: var5
        var0 = arg0;
        var11 = var0.text;
        var7 = var0.description;
        var6 = var0.onPress;
        var3 = _closure1_slot9;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 15;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.onPress = var6;
        var6 = 'menuitem';
        var0.accessibilityRole = var6;
        var10 = _closure1_slot9;
        var9 = _closure1_slot11;
        var6 = {};
        var6.text = var11;
        var6 = var10.bind(var2)(var9, var6);
        var0.label = var6;
        var6 = _closure1_slot9;
        var4 = 16;
        var4 = var8[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.TableRowTrailingText;
        var4 = {};
        var4.text = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.trailing = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var4.Global = var8;
    var8 = function(arg0) { // Original name: Role, environment: var5
        _fun90593: for (var _fun90593_ip = 0;;) switch (_fun90593_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.onPress;
                var9 = var0.showDescription;
                var11 = var0.name;
                var13 = var0.colorString;
                var0 = _closure1_slot10;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 15;
                var0 = var10[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.onPress = var4;
                var4 = 'menuitem';
                var0.accessibilityRole = var4;
                var6 = _closure1_slot9;
                var4 = 10;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.FormRow;
                var5 = var4.Label;
                var4 = {};
                var10 = var7.leading;
                var7 = new Array(2);
                var7[0] = var10;
                var10 = null;
                var12 = var10 != var13;
                var10 = undefined;
                if (!var12) {
                    _fun90593_ip = 148;
                    continue _fun90593
                }
            case 139:
                var12 = {};
                var12.color = var13;
                var10 = var12;
            case 148:
                var7[1] = var10;
                var4.style = var7;
                var7 = global;
                var7 = var7.HermesInternal;
                var10 = var7.concat;
                var7 = '@';
                var7 = var10.bind(var7)(var11);
                var4.text = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.label = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 16;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TableRowTrailingText;
                var4 = {};
                var7 = '';
                if (!var9) {
                    _fun90593_ip = 288;
                    continue _fun90593
                }
            case 231:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 17;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.HrUmDH;
                var7 = var9.bind(var10)(var8);
            case 288:
                var4.text = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4.Role = var8;
    var8 = function(arg0) { // Original name: Channel, environment: var5
        _fun90594: for (var _fun90594_ip = 0;;) switch (_fun90594_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.channel;
                var8 = var0.category;
                var10 = var0.onPress;
                var0 = _closure1_slot10;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = var2.getGuild;
                var0 = var12.getGuildId;
                var0 = var0.bind(var12)();
                var2 = var1.bind(var2)(var0);
                var1 = var12.type;
                var0 = _closure1_slot8;
                var0 = var0.GUILD_CATEGORY;
                if (!(var1 !== var0)) {
                    _fun90594_ip = 109;
                    continue _fun90594
                }
            case 75:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 19;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getChannelIconWithGuild;
                var5 = var0.bind(var1)(var12, var2);
                _fun90594_ip = 129;
                continue _fun90594;
            case 109:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 18;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
            case 129:
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 20;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.source = var5;
                var5 = var7.autocompleteIcon;
                var0.style = var5;
                var6 = var2.bind(var3)(var1, var0);
                var5 = _closure1_slot0;
                var0 = 21;
                var0 = var9[var0];
                var11 = var5.bind(var3)(var0);
                var2 = var11.computeChannelName;
                var1 = _closure1_slot7;
                var0 = _closure1_slot6;
                var12 = var2.bind(var11)(var12, var1, var0);
                var2 = _closure1_slot9;
                var0 = 10;
                var0 = var9[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var0.onPress = var10;
                var10 = 'menuitem';
                var0.accessibilityRole = var10;
                var0.leading = var6;
                var11 = _closure1_slot9;
                var10 = _closure1_slot11;
                var6 = {};
                var6.text = var12;
                var6 = var11.bind(var3)(var10, var6);
                var0.label = var6;
                var6 = _closure1_slot9;
                var4 = 22;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var7 = var7.trailing;
                var4.style = var7;
                var7 = null;
                var7 = var7 != var8;
                if (!var7) {
                    _fun90594_ip = 340;
                    continue _fun90594
                }
            case 335:
                var7 = var8.name;
            case 340:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4.Channel = var8;
    var8 = function(arg0) { // Original name: Emoji, environment: var5
        _fun90595: for (var _fun90595_ip = 0;;) switch (_fun90595_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.name;
                var8 = var0.url;
                var5 = var0.surrogates;
                var6 = var0.onPress;
                var0 = _closure1_slot10;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var0 = '';
                if (!(var0 === var8)) {
                    _fun90595_ip = 123;
                    continue _fun90595
                }
            case 44:
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 24;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.LegacyText;
                var0 = {};
                var11 = var10.emoji;
                var7 = new Array(2);
                var7[0] = var11;
                var11 = var10.emojiText;
                var7[1] = var11;
                var0.style = var7;
                var7 = false;
                var0.allowFontScaling = var7;
                var0.children = var5;
                var5 = var2.bind(var3)(var1, var0);
                _fun90595_ip = 193;
                continue _fun90595;
            case 123:
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 23;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var11 = var10.emoji;
                var7 = new Array(2);
                var7[0] = var11;
                var10 = var10.emojiImage;
                var7[1] = var10;
                var0.style = var7;
                var7 = {};
                var7.uri = var8;
                var0.source = var7;
                var5 = var2.bind(var3)(var1, var0);
            case 193:
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var0.onPress = var6;
                var6 = 'menuitem';
                var0.accessibilityRole = var6;
                var0.leading = var5;
                var6 = _closure1_slot9;
                var5 = _closure1_slot11;
                var4 = {};
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = ':';
                var7 = var8.bind(var7)(var9, var7);
                var4.text = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.label = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4.Emoji = var8;
    var8 = function(arg0) { // Original name: EmojiPremiumUpsell, environment: var5
        var0 = arg0;
        var7 = var0.results;
        var5 = var0.onPress;
        var3 = _closure1_slot9;
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 10;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.FormRow;
        var0 = {};
        var0.onPress = var5;
        var5 = 'menuitem';
        var0.accessibilityRole = var5;
        var6 = _closure1_slot9;
        var5 = _closure1_slot1;
        var4 = 25;
        var4 = var8[var4];
        var5 = var5.bind(var2)(var4);
        var4 = {};
        var4.results = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.label = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var4.EmojiPremiumUpsell = var8;
    var8 = function(arg0) { // Original name: Choice, environment: var5
        var0 = arg0;
        var7 = var0.choice;
        var5 = var0.onPress;
        var3 = _closure1_slot9;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.FormRow;
        var0 = {};
        var0.onPress = var5;
        var5 = 'menuitem';
        var0.accessibilityRole = var5;
        var6 = _closure1_slot9;
        var5 = _closure1_slot11;
        var4 = {};
        var7 = var7.displayName;
        var4.text = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.label = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var4.Choice = var8;
    var8 = function() { // Original name: ChoiceLoading, environment: var5
        var0 = _closure1_slot10;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var4 = _closure1_slot3;
        var2 = var4.useMemo;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 29;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.random;
            var1 = 100;
            var0 = 300;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = new Array(0);
        var11 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot9;
        var1 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 10;
        var0 = var4[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.FormRow;
        var0 = {};
        var4 = var9.row;
        var0.DEPRECATED_style = var4;
        var6 = _closure1_slot9;
        var5 = _closure1_slot4;
        var4 = {};
        var8 = var9.commandChoiceLoadingContainer;
        var4.style = var8;
        var8 = _closure1_slot9;
        var7 = {};
        var10 = var9.commandChoiceLoadingItem;
        var9 = new Array(2);
        var9[0] = var10;
        var10 = {};
        var10.width = var11;
        var9[1] = var10;
        var7.style = var9;
        var7 = var8.bind(var3)(var5, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.leading = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4.ChoiceLoading = var8;
    var8 = function(arg0) { // Original name: Sticker, environment: var5
        var0 = arg0;
        var8 = var0.sticker;
        var6 = var0.onPress;
        var5 = var0.onLongPress;
        var7 = var0.isInteracting;
        var0 = _closure1_slot10;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var1 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 26;
        var0 = var9[var0];
        var2 = var1.bind(var3)(var0);
        var0 = var2.useShouldAnimateSticker;
        var7 = var0.bind(var2)(var7);
        var2 = _closure1_slot9;
        var0 = 27;
        var0 = var9[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var11 = 'menuitem';
        var0.accessibilityRole = var11;
        var10 = var10.stickerContainer;
        var0.style = var10;
        var0.onPress = var6;
        var0.onLongPress = var5;
        var5 = 'box-only';
        var0.pointerEvents = var5;
        var6 = _closure1_slot9;
        var5 = _closure1_slot1;
        var4 = 28;
        var4 = var9[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.sticker = var8;
        var8 = 40;
        var4.size = var8;
        var4.animated = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4.Sticker = var8;
    var5 = function(arg0) { // Original name: Label, environment: var5
        var0 = arg0;
        var7 = var0.label;
        var3 = _closure1_slot9;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.FormRow;
        var0 = {};
        var6 = _closure1_slot9;
        var5 = _closure1_slot11;
        var4 = {};
        var4.text = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.label = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var4.Label = var5;
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/Autocomplete.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.AUTOCOMPLETE_STICKER_NODE_SIZE = var3;
    var2.AUTOCOMPLETE_STICKER_NODE_MARGIN = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 3059, 1613, 660, 9221, 33, 1297, 671, 5339, 566, 3195, 5413, 8161, 4860, 4870, 1234, 6793, 4769, 4045, 4754, 3901, 4666, 4838, 11718, 9316, 4864, 9329, 22, 2]);