// modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: HorizontalAutocompleteOption, environment: var6
        var1 = arg0;
        var7 = var1.children;
        var11 = var1.onPress;
        var1 = _closure1_slot12;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var2 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 12;
        var1 = var10[var4];
        var9 = var2.bind(var3)(var1);
        var5 = var9.useSharedValue;
        var1 = 0;
        var12 = var5.bind(var9)(var1);
        var _closure2_slot0 = var12;
        var5 = _closure1_slot1;
        var1 = 13;
        var1 = var10[var1];
        var9 = var5.bind(var3)(var1);
        var1 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.set;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var1);
            var4 = var5.withTiming;
            var1 = 1;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var9.bind(var3)(var1);
        var1 = var10[var4];
        var2 = var2.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() { // Original name: s, environment: var0
            var0 = {};
            var2 = _closure2_slot0;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.opacity = var1;
            return var0;
        };
        var9 = {};
        var9.opacity = var12;
        var0.__closure = var9;
        var9 = 14159604656069.0;
        var0.__workletHash = var9;
        var9 = _closure1_slot13;
        var0.__initData = var9;
        var9 = var1.bind(var2)(var0);
        var2 = _closure1_slot10;
        var1 = _closure1_slot3;
        var0 = {};
        var0.onPress = var11;
        var6 = _closure1_slot10;
        var4 = var10[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.View;
        var4 = {};
        var10 = var8.horizontalAutocompleteOption;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var4.style = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var9 = 0;
    var3 = var5[var9];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var14 = var1.StyleSheet;
    var3 = var1.TouchableOpacity;
    var _closure1_slot3 = var3;
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var11 = 4;
    var1 = var5[var11];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.ChannelTypes;
    var _closure1_slot9 = var3;
    var15 = var1.Fonts;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var12 = var1.AUTOCOMPLETE_ROW_HEIGHT;
    var10 = 8;
    var1 = var5[var10];
    var1 = var4.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot10 = var3;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var8 = var4.bind(var0)(var1);
    var7 = var8.createStyles;
    var1 = {};
    var3 = {};
    var3.height = var12;
    var3.paddingVertical = var9;
    var12 = 10;
    var9 = var5[var12];
    var9 = var13.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var3.backgroundColor = var9;
    var1.row = var3;
    var16 = 11;
    var3 = var5[var16];
    var18 = var13.bind(var0)(var3);
    var17 = var15.PRIMARY_SEMIBOLD;
    var3 = var5[var12];
    var3 = var13.bind(var0)(var3);
    var3 = var3.colors;
    var9 = var3.INTERACTIVE_TEXT_ACTIVE;
    var3 = 16;
    var3 = var18.bind(var0)(var17, var9, var3);
    var1.leading = var3;
    var3 = {};
    var18 = 14;
    var3.fontSize = var18;
    var9 = var5[var12];
    var9 = var13.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_MUTED;
    var3.color = var9;
    var1.trailing = var3;
    var3 = {
        'width': 32,
        'height': 32
    };
    var1.emoji = var3;
    var3 = {};
    var9 = 'contain';
    var3.resizeMode = var9;
    var1.emojiImage = var3;
    var3 = 27;
    var9 = {
        'lineHeight': 32,
        'fontSize': 27,
        'textAlign': 'center'
    };
    var1.emojiText = var9;
    var9 = {};
    var9.marginLeft = var10;
    var1.emojiName = var9;
    var9 = {};
    var16 = var5[var16];
    var17 = var13.bind(var0)(var16);
    var16 = var15.PRIMARY_SEMIBOLD;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_DEFAULT;
    var20 = var17.bind(var0)(var16, var15, var18);
    var21 = var9;
    var15 = copyDataProperties(var21, var20);
    var1.nickname = var9;
    var9 = {};
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var15;
    var1.status = var9;
    var9 = {
        'paddingHorizontal': 8,
        'flex': 1,
        'flexDirection': 'row',
        'height': 56,
        'alignItems': 'center'
    };
    var14 = var14.hairlineWidth;
    var9.borderRightWidth = var14;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderRightColor = var12;
    var1.horizontalAutocompleteOption = var9;
    var9 = {};
    var9.marginRight = var11;
    var1.roleIcon = var9;
    var9 = {};
    var9.marginLeft = var10;
    var1.channelName = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot12 = var1;
    var1 = {};
    var7 = 'function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}';
    var1.code = var7;
    var _closure1_slot13 = var1;
    var1 = {};
    var7 = function(arg0) { // Original name: User, environment: var6
        _fun74493: for (var _fun74493_ip = 0;;) switch (_fun74493_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.user;
                var12 = var0.nick;
                var9 = var0.status;
                var8 = var0.guildId;
                var4 = var0.onPress;
                var0 = _closure1_slot12;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot14;
                var0 = {};
                var0.onPress = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var10 = 15;
                var4 = var7[var10];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.status = var9;
                var9 = var13.status;
                var4.statusStyle = var9;
                var4.user = var14;
                var9 = _closure1_slot0;
                var10 = var7[var10];
                var10 = var9.bind(var3)(var10);
                var10 = var10.AvatarSizes;
                var10 = var10.SMALL;
                var4.size = var10;
                var4.guildId = var8;
                var8 = true;
                var4.animate = var8;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = {
                    'marginLeft': 8,
                    'height': 56,
                    'flex': 1,
                    'flexDirection': 'column',
                    'justifyContent': 'center'
                };
                var5.style = var8;
                var10 = _closure1_slot10;
                var8 = 16;
                var7 = var7[var8];
                var7 = var9.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {};
                var15 = var13.nickname;
                var13 = new Array(1);
                var13[0] = var15;
                var7.style = var13;
                var13 = 'text-sm/semibold';
                var7.variant = var13;
                var13 = null;
                if (!(var13 == var12)) {
                    _fun74493_ip = 266;
                    continue _fun74493
                }
            case 235:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var13 = 17;
                var13 = var16[var13];
                var15 = var15.bind(var3)(var13);
                var13 = var15.getName;
                var12 = var13.bind(var15)(var14);
            case 266:
                var7.children = var12;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot11;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var12 = _closure1_slot1;
                var11 = 17;
                var11 = var13[var11];
                var13 = var12.bind(var3)(var11);
                var12 = var13.getUserTag;
                var11 = {};
                var15 = 'never';
                var11.decoration = var15;
                var12 = var12.bind(var13)(var14, var11);
                var11 = ['@'];
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.User = var7;
    var7 = function(arg0) { // Original name: Role, environment: var6
        _fun74494: for (var _fun74494_ip = 0;;) switch (_fun74494_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.onPress;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var10 = var1.name;
                var2 = var1.id;
                var _closure2_slot1 = var2;
                var12 = var1.colorString;
                var1 = _closure1_slot12;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 18;
                var1 = var6[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.useStateFromStores;
                var7 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.getRole;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var2.bind(var6)(var1, var0);
                var9 = null;
                var0 = var9 != var6;
                var16 = null;
                if (!var0) {
                    _fun74494_ip = 148;
                    continue _fun74494
                }
            case 113:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getRoleIconData;
                var0 = 30;
                var16 = var1.bind(var2)(var6, var0);
            case 148:
                var2 = _closure1_slot11;
                var1 = _closure1_slot14;
                var0 = {};
                var0.onPress = var4;
                var4 = var9 != var16;
                var6 = null;
                if (!var4) {
                    _fun74494_ip = 289;
                    continue _fun74494
                }
            case 171:
                var11 = _closure1_slot10;
                var7 = _closure1_slot4;
                var4 = {};
                var13 = var8.roleIcon;
                var4.style = var13;
                var15 = _closure1_slot10;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var13 = 20;
                var13 = var17[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var13.name = var10;
                var17 = var16.customIconSrc;
                var18 = var9 != var17;
                var17 = undefined;
                if (!var18) {
                    _fun74494_ip = 251;
                    continue _fun74494
                }
            case 236:
                var18 = {};
                var19 = var16.customIconSrc;
                var18.uri = var19;
                var17 = var18;
            case 251:
                var13.source = var17;
                var16 = var16.unicodeEmoji;
                var13.unicodeEmoji = var16;
                var16 = 24;
                var13.size = var16;
                var13 = var15.bind(var3)(var14, var13);
                var4.children = var13;
                var6 = var11.bind(var3)(var7, var4);
            case 289:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 21;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.LegacyText;
                var5 = {};
                var11 = var8.nickname;
                var8 = new Array(2);
                var8[0] = var11;
                var11 = var9 != var12;
                var9 = undefined;
                if (!var11) {
                    _fun74494_ip = 361;
                    continue _fun74494
                }
            case 352:
                var11 = {};
                var11.color = var12;
                var9 = var11;
            case 361:
                var8[1] = var9;
                var5.style = var8;
                var8 = global;
                var8 = var8.HermesInternal;
                var9 = var8.concat;
                var8 = '@';
                var8 = var9.bind(var8)(var10);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.Role = var7;
    var7 = function(arg0) { // Original name: Channel, environment: var6
        _fun74496: for (var _fun74496_ip = 0;;) switch (_fun74496_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.channel;
                var _closure2_slot0 = var11;
                var4 = var1.onPress;
                var1 = _closure1_slot12;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 18;
                var1 = var6[var1];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var3 = _closure2_slot0;
                    var0 = var3.getGuildId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var0, var1);
                var1 = var11.type;
                var0 = _closure1_slot9;
                var0 = var0.GUILD_CATEGORY;
                if (!(var1 !== var0)) {
                    _fun74496_ip = 144;
                    continue _fun74496
                }
            case 110:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 23;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getChannelIconWithGuild;
                var6 = var0.bind(var1)(var11, var2);
                _fun74496_ip = 164;
                continue _fun74496;
            case 144:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 22;
                var0 = var2[var0];
                var6 = var1.bind(var3)(var0);
            case 164:
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 24;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.source = var6;
                var7 = var2.bind(var3)(var1, var0);
                var6 = _closure1_slot0;
                var0 = 25;
                var0 = var10[var0];
                var8 = var6.bind(var3)(var0);
                var2 = var8.computeChannelName;
                var1 = _closure1_slot8;
                var0 = _closure1_slot7;
                var8 = var2.bind(var8)(var11, var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot14;
                var0 = {};
                var0.onPress = var4;
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot10;
                var5 = 16;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var9 = var9.channelName;
                var5.style = var9;
                var9 = 'text-sm/semibold';
                var5.variant = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.Channel = var7;
    var6 = function(arg0) { // Original name: Emoji, environment: var6
        _fun74498: for (var _fun74498_ip = 0;;) switch (_fun74498_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.name;
                var7 = var0.url;
                var6 = var0.surrogates;
                var4 = var0.onPress;
                var0 = _closure1_slot12;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var0 = '';
                if (!(var0 === var7)) {
                    _fun74498_ip = 123;
                    continue _fun74498
                }
            case 44:
                var2 = _closure1_slot10;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 21;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.LegacyText;
                var0 = {};
                var11 = var8.emoji;
                var9 = new Array(2);
                var9[0] = var11;
                var11 = var8.emojiText;
                var9[1] = var11;
                var0.style = var9;
                var9 = false;
                var0.allowFontScaling = var9;
                var0.children = var6;
                var9 = var2.bind(var3)(var1, var0);
                _fun74498_ip = 193;
                continue _fun74498;
            case 123:
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 26;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var11 = var8.emoji;
                var6 = new Array(2);
                var6[0] = var11;
                var11 = var8.emojiImage;
                var6[1] = var11;
                var0.style = var6;
                var6 = {};
                var6.uri = var7;
                var0.source = var6;
                var9 = var2.bind(var3)(var1, var0);
            case 193:
                var2 = _closure1_slot11;
                var1 = _closure1_slot14;
                var0 = {};
                var0.onPress = var4;
                var7 = _closure1_slot10;
                var6 = _closure1_slot4;
                var4 = {};
                var4.children = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 16;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var8 = var8.emojiName;
                var5.style = var8;
                var8 = 'text-sm/semibold';
                var5.variant = var8;
                var8 = global;
                var8 = var8.HermesInternal;
                var9 = var8.concat;
                var8 = ':';
                var8 = var9.bind(var8)(var10, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.Emoji = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1665, 1410, 3059, 1613, 660, 9221, 33, 1297, 671, 4644, 3679, 4062, 4056, 5413, 3901, 3195, 566, 6696, 6697, 4838, 6793, 4769, 4045, 4754, 4666, 2]);