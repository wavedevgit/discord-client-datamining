// modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun115648: for (var _fun115648_ip = 0;;) switch (_fun115648_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var13 = 0;
            var3 = var5[var13];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var9 = 1;
            var6 = var5[var9];
            var3 = metroImportAll;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.View;
            var _closure1_slot5 = var6;
            var6 = var3.Image;
            var _closure1_slot6 = var6;
            var3 = var3.Pressable;
            var _closure1_slot7 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var11 = 4;
            var3 = var5[var11];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot9 = var6;
            var3 = var3.jsxs;
            var _closure1_slot10 = var3;
            var3 = 5;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {};
            var8.flex = var9;
            var3.flex = var8;
            var14 = 'row';
            var15 = 'center';
            var8 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var3.flexCenterRow = var8;
            var8 = {
                'paddingVertical': 4,
                'borderRadius': null,
                'alignItems': 'center',
                'flexDirection': 'row'
            };
            var9 = 6;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.radii;
            var12 = var12.xs;
            var8.borderRadius = var12;
            var3.nameContainer = var8;
            var8 = {};
            var12 = 7;
            var16 = var5[var12];
            var17 = var4.bind(var0)(var16);
            var16 = var17.isAndroid;
            var17 = var16.bind(var17)();
            var16 = var11;
            if (!var17) {
                _fun115648_ip = 317;
                continue _fun115648
            }
        case 315:
            var16 = 0;
        case 317:
            var8.padding = var16;
            var16 = var5[var9];
            var16 = var10.bind(var0)(var16);
            var16 = var16.radii;
            var16 = var16.xs;
            var8.borderRadius = var16;
            var8.alignItems = var15;
            var8.flexDirection = var14;
            var3.activeNameContainer = var8;
            var8 = {
                'marginRight': 8,
                'maxWidth': 150,
                'flexShrink': 1
            };
            var3.usernameContainer = var8;
            var8 = {};
            var14 = 16;
            var8.fontSize = var14;
            var12 = var5[var12];
            var14 = var4.bind(var0)(var12);
            var12 = var14.isAndroid;
            var14 = var12.bind(var14)();
            var12 = undefined;
            if (!var14) {
                _fun115648_ip = 413;
                continue _fun115648
            }
        case 411:
            var12 = 0;
        case 413:
            var8.padding = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
            var8.color = var12;
            var3.emojiText = var8;
            var8 = {};
            var8.width = var11;
            var3.colon = var8;
            var8 = {};
            var11 = 13;
            var8.fontSize = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.TEXT_MUTED;
            var8.color = var11;
            var3.username = var8;
            var8 = {
                'width': 30,
                'height': 30,
                'resizeMode': 'contain'
            };
            var3.emojiImage = var8;
            var8 = {
                'paddingLeft': null,
                'alignItems': 'center',
                'flexDirection': 'row',
                'height': '100%'
            };
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_8;
            var8.paddingLeft = var9;
            var3.overflowIcon = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot11 = var3;
            var3 = 26;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: EmojiRow, environment: var1
                _fun115649: for (var _fun115649_ip = 0;;) switch (_fun115649_ip) {
                    case 0:
                        var0 = arg0;
                        var29 = var0.guildId;
                        var _closure2_slot0 = var29;
                        var30 = var0.emoji;
                        var _closure2_slot1 = var30;
                        var8 = var0.disabled;
                        var3 = undefined;
                        if (!(var8 === var3)) {
                            _fun115649_ip = 37;
                            continue _fun115649
                        }
                    case 35:
                        var8 = false;
                    case 37:
                        var5 = var0.start;
                        var4 = var0.end;
                        var0 = var0.onSelectRolesForEmoji;
                        var _closure2_slot2 = var0;
                        var _closure2_slot3 = var3;
                        var _closure2_slot4 = var3;
                        var _closure2_slot5 = var3;
                        var _closure2_slot6 = var3;
                        var1 = _closure1_slot11;
                        var18 = var1.bind(var3)();
                        var11 = _closure1_slot4;
                        var2 = var11.useState;
                        var1 = var30.name;
                        var1 = var2.bind(var11)(var1);
                        var7 = _closure1_slot3;
                        var6 = 2;
                        var1 = var7.bind(var3)(var1, var6);
                        var2 = 0;
                        var15 = var1[var2];
                        _closure2_slot3 = var15;
                        var22 = 1;
                        var1 = var1[var22];
                        _closure2_slot4 = var1;
                        var9 = var11.useState;
                        var1 = false;
                        var1 = var9.bind(var11)(var1);
                        var1 = var7.bind(var3)(var1, var6);
                        var10 = var1[var2];
                        var1 = var1[var22];
                        _closure2_slot5 = var1;
                        var1 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var24 = 8;
                        var2 = var14[var24];
                        var9 = var1.bind(var3)(var2);
                        var7 = var9.useStateFromStores;
                        var2 = _closure1_slot8;
                        var6 = new Array(1);
                        var6[0] = var2;
                        var2 = function() { // Environment: var16
                            var2 = _closure1_slot8;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var7 = var7.bind(var9)(var6, var2);
                        var2 = 9;
                        var2 = var14[var2];
                        var6 = var1.bind(var3)(var2);
                        var2 = var6.useManageResourcePermissions;
                        var2 = var2.bind(var6)(var7);
                        var2 = var2.canManageGuildExpression;
                        var9 = var2.bind(var3)(var30);
                        var6 = var11.useCallback;
                        var2 = new Array(3);
                        var2[0] = var29;
                        var2[1] = var30;
                        var2[2] = var0;
                        var0 = function() { // Environment: var16
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var4 = _closure2_slot0;
                            var1.guildId = var4;
                            var4 = _closure2_slot1;
                            var1.emoji = var4;
                            var4 = function() { // Original name: onEdit, environment: var4
                                var2 = _closure2_slot5;
                                var0 = undefined;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onEdit = var4;
                            var3 = _closure2_slot2;
                            var1.onSelectRolesForEmoji = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var25 = var6.bind(var11)(var0, var2);
                        _closure2_slot6 = var25;
                        var6 = var11.useCallback;
                        var2 = new Array(1);
                        var2[0] = var25;
                        var0 = function() { // Environment: var16
                            _fun115654: for (var _fun115654_ip = 0;;) switch (_fun115654_ip) {
                                case 0:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 13;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.getIsScreenReaderEnabled;
                                    var2 = var1.bind(var2)();
                                    if (var2) {
                                        _fun115654_ip = 54;
                                        continue _fun115654
                                    }
                                case 41:
                                    var3 = _closure2_slot5;
                                    var2 = true;
                                    var2 = var3.bind(var0)(var2);
                                    _fun115654_ip = 62;
                                    continue _fun115654;
                                case 54:
                                    var1 = _closure2_slot6;
                                    var1 = var1.bind(var0)();
                                case 62:
                                    return var0;
                            }
                        };
                        var7 = var6.bind(var11)(var0, var2);
                        var6 = var11.useCallback;
                        var2 = new Array(1);
                        var2[0] = var25;
                        var0 = function() { // Environment: var16
                            var1 = _closure2_slot6;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var6 = var6.bind(var11)(var0, var2);
                        var2 = _closure1_slot9;
                        var0 = 16;
                        var0 = var14[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.TableRow;
                        var0 = {};
                        var17 = _closure1_slot7;
                        var11 = {};
                        var12 = function() { // Original name: onPress, environment: var16
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 17;
                            var1 = var8[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var5 = 'EMOJI_DISABLED';
                            var1.key = var5;
                            var7 = _closure1_slot0;
                            var4 = 18;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.KUzI73;
                            var4 = var5.bind(var6)(var4);
                            var1.content = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var11.onPress = var12;
                        var12 = var30.available;
                        var11.disabled = var12;
                        var20 = _closure1_slot6;
                        var19 = {};
                        var12 = var18.emojiImage;
                        var19.style = var12;
                        var21 = {};
                        var12 = _closure1_slot1;
                        var23 = 19;
                        var23 = var14[var23];
                        var27 = var12.bind(var3)(var23);
                        var26 = var27.getEmojiURL;
                        var23 = {};
                        var28 = var30.id;
                        var23.id = var28;
                        var28 = var30.animated;
                        var23.animated = var28;
                        var28 = 48;
                        var23.size = var28;
                        var23 = var26.bind(var27)(var23);
                        var21.uri = var23;
                        var19.source = var21;
                        var19 = var2.bind(var3)(var20, var19);
                        var11.children = var19;
                        var11 = var2.bind(var3)(var17, var11);
                        var0.icon = var11;
                        var11 = 20;
                        var11 = var14[var11];
                        var14 = var12.bind(var3)(var11);
                        var12 = var14.getNickname;
                        var11 = var30.user;
                        var27 = var12.bind(var14)(var29, var3, var11);
                        var14 = _closure1_slot10;
                        var12 = _closure1_slot5;
                        var11 = {};
                        var17 = var18.flexCenterRow;
                        var11.style = var17;
                        var19 = {};
                        var17 = var18.usernameContainer;
                        var19.style = var17;
                        var20 = null;
                        var21 = var20 != var27;
                        var17 = null;
                        if (!var21) {
                            _fun115649_ip = 623;
                            continue _fun115649
                        }
                    case 567:
                        var26 = _closure1_slot9;
                        var23 = _closure1_slot0;
                        var28 = _closure1_slot2;
                        var21 = 15;
                        var21 = var28[var21];
                        var21 = var23.bind(var3)(var21);
                        var23 = var21.LegacyText;
                        var21 = {};
                        var21.numberOfLines = var22;
                        var28 = var18.username;
                        var21.style = var28;
                        var21.children = var27;
                        var17 = var26.bind(var3)(var23, var21);
                    case 623:
                        var21 = new Array(2);
                        var21[0] = var17;
                        var23 = _closure1_slot9;
                        var27 = _closure1_slot0;
                        var28 = _closure1_slot2;
                        var17 = 15;
                        var26 = var28[var17];
                        var26 = var27.bind(var3)(var26);
                        var31 = var26.LegacyText;
                        var26 = {};
                        var26.numberOfLines = var22;
                        var22 = var18.username;
                        var26.style = var22;
                        var22 = _closure1_slot1;
                        var32 = 21;
                        var32 = var28[var32];
                        var34 = var22.bind(var3)(var32);
                        var33 = var34.getUserTag;
                        var32 = var30.user;
                        var32 = var33.bind(var34)(var32);
                        var26.children = var32;
                        var26 = var23.bind(var3)(var31, var26);
                        var21[1] = var26;
                        var19.children = var21;
                        var21 = var14.bind(var3)(var12, var19);
                        var19 = new Array(3);
                        var19[0] = var21;
                        var26 = 22;
                        var21 = var28[var26];
                        var22 = var22.bind(var3)(var21);
                        var21 = {};
                        var30 = var30.user;
                        var21.user = var30;
                        var21.guildId = var29;
                        var26 = var28[var26];
                        var26 = var27.bind(var3)(var26);
                        var26 = var26.AvatarSizes;
                        var26 = var26.XSMALL;
                        var21.size = var26;
                        var21 = var23.bind(var3)(var22, var21);
                        var19[1] = var21;
                        var20 = null;
                        if (var8) {
                            _fun115649_ip = 937;
                            continue _fun115649
                        }
                    case 811:
                        var23 = _closure1_slot9;
                        var27 = _closure1_slot0;
                        var28 = _closure1_slot2;
                        var21 = 23;
                        var21 = var28[var21];
                        var21 = var27.bind(var3)(var21);
                        var22 = var21.PressableOpacity;
                        var21 = {};
                        var26 = var18.overflowIcon;
                        var21.style = var26;
                        var21.onPress = var25;
                        var21.hitSlop = var24;
                        var30 = _closure1_slot1;
                        var26 = 24;
                        var24 = var28[var26];
                        var25 = var30.bind(var3)(var24);
                        var24 = {};
                        var29 = 25;
                        var29 = var28[var29];
                        var29 = var30.bind(var3)(var29);
                        var24.source = var29;
                        var26 = var28[var26];
                        var26 = var27.bind(var3)(var26);
                        var26 = var26.IconSizes;
                        var26 = var26.REFRESH_SMALL_16;
                        var24.size = var26;
                        var24 = var23.bind(var3)(var25, var24);
                        var21.children = var24;
                        var20 = var23.bind(var3)(var22, var21);
                    case 937:
                        var19[2] = var20;
                        var11.children = var19;
                        var11 = var14.bind(var3)(var12, var11);
                        var0.trailing = var11;
                        if (!var10) {
                            _fun115649_ip = 965;
                            continue _fun115649
                        }
                    case 959:
                        if (var9) {
                            _fun115649_ip = 1173;
                            continue _fun115649
                        }
                    case 965:
                        var11 = _closure1_slot10;
                        var10 = _closure1_slot5;
                        var9 = {};
                        var12 = var18.nameContainer;
                        var9.style = var12;
                        var20 = _closure1_slot9;
                        var19 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var14 = 14;
                        var12 = var21[var14];
                        var12 = var19.bind(var3)(var12);
                        var22 = var12.Text;
                        var12 = {
                            'style': null,
                            'variant': 'text-md/medium',
                            'color': 'text-muted',
                            'children': ':'
                        };
                        var23 = var18.colon;
                        var12.style = var23;
                        var22 = var20.bind(var3)(var22, var12);
                        var12 = new Array(3);
                        var12[0] = var22;
                        var22 = var21[var14];
                        var22 = var19.bind(var3)(var22);
                        var23 = var22.Text;
                        var22 = {
                            'lineClamp': 1,
                            'style': null,
                            'variant': 'text-md/medium',
                            'color': 'mobile-text-heading-primary'
                        };
                        var24 = var18.emojiText;
                        var22.style = var24;
                        var22.children = var15;
                        var22 = var20.bind(var3)(var23, var22);
                        var12[1] = var22;
                        var14 = var21[var14];
                        var14 = var19.bind(var3)(var14);
                        var19 = var14.Text;
                        var14 = {
                            'style': null,
                            'variant': 'text-md/medium',
                            'color': 'text-muted',
                            'children': ':'
                        };
                        var21 = var18.colon;
                        var14.style = var21;
                        var14 = var20.bind(var3)(var19, var14);
                        var12[2] = var14;
                        var9.children = var12;
                        var9 = var11.bind(var3)(var10, var9);
                        _fun115649_ip = 1301;
                        continue _fun115649;
                    case 1173:
                        var12 = _closure1_slot9;
                        var11 = _closure1_slot5;
                        var10 = {};
                        var14 = var18.activeNameContainer;
                        var10.style = var14;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var13 = var13[var17];
                        var13 = var14.bind(var3)(var13);
                        var14 = var13.TextInput;
                        var13 = {
                            'autoCorrect': false,
                            'numberOfLines': 1,
                            'returnKeyType': 'done',
                            'autoCapitalize': 'none',
                            'autoFocus': true
                        };
                        var17 = function() { // Original name: handleNameBlur, environment: var16
                            _fun115651: for (var _fun115651_ip = 0;;) switch (_fun115651_ip) {
                                case 0:
                                    var2 = _closure2_slot3;
                                    var1 = _closure2_slot1;
                                    var1 = var1.name;
                                    if (!(var2 !== var1)) {
                                        _fun115651_ip = 115;
                                        continue _fun115651
                                    }
                                case 20:
                                    var2 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var1 = 10;
                                    var1 = var7[var1];
                                    var6 = undefined;
                                    var3 = var2.bind(var6)(var1);
                                    var2 = var3.updateEmoji;
                                    var1 = {};
                                    var5 = _closure2_slot0;
                                    var1.guildId = var5;
                                    var5 = _closure2_slot1;
                                    var5 = var5.id;
                                    var1.emojiId = var5;
                                    var5 = _closure1_slot1;
                                    var4 = 11;
                                    var4 = var7[var4];
                                    var6 = var5.bind(var6)(var4);
                                    var5 = var6.sanitizeEmojiName;
                                    var4 = _closure2_slot3;
                                    var4 = var5.bind(var6)(var4);
                                    var1.name = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 115:
                                    var2 = _closure2_slot5;
                                    var0 = undefined;
                                    var1 = false;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var13.onBlur = var17;
                        var19 = var18.emojiText;
                        var17 = new Array(2);
                        var17[0] = var19;
                        var18 = var18.flex;
                        var17[1] = var18;
                        var13.style = var17;
                        var16 = function(arg0) { // Original name: updateName, environment: var16
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var13.onChangeText = var16;
                        var13.value = var15;
                        var13 = var12.bind(var3)(var14, var13);
                        var10.children = var13;
                        var9 = var12.bind(var3)(var11, var10);
                    case 1301:
                        var0.label = var9;
                        var0.disabled = var8;
                        var0.onPress = var7;
                        var0.onLongPress = var6;
                        var0.start = var5;
                        var0.end = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.EmojiRow = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 33, 1297, 671, 478, 566, 8049, 9179, 3067, 14714, 4023, 3895, 4832, 4854, 3107, 1234, 1417, 3915, 3195, 5409, 4858, 4039, 14716, 2]);