// modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.Fonts;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var6 = var10.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var3.container = var8;
    var8 = 8;
    var11 = {
        'marginStart': 8,
        'flexGrow': 1
    };
    var3.content = var11;
    var11 = {};
    var14 = 5;
    var12 = var5[var14];
    var18 = var9.bind(var0)(var12);
    var17 = var13.PRIMARY_MEDIUM;
    var12 = 6;
    var15 = var5[var12];
    var15 = var9.bind(var0)(var15);
    var15 = var15.colors;
    var16 = var15.TEXT_MUTED;
    var15 = 16;
    var20 = var18.bind(var0)(var17, var16, var15);
    var21 = var11;
    var16 = copyDataProperties(var21, var20);
    var3.placeholder = var11;
    var11 = {};
    var14 = var5[var14];
    var14 = var9.bind(var0)(var14);
    var13 = var13.PRIMARY_MEDIUM;
    var12 = var5[var12];
    var12 = var9.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var20 = var14.bind(var0)(var13, var12, var15);
    var21 = var11;
    var12 = copyDataProperties(var21, var20);
    var3.text = var11;
    var3 = var6.bind(var10)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var6 = var9.bind(var0)(var3);
    var3 = {};
    var10 = 'contain';
    var3.resizeMode = var10;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var3.source = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot7 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun115768: for (var _fun115768_ip = 0;;) switch (_fun115768_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.emoji;
                var0 = var1.emojiId;
                var1 = var1.emojiName;
                var10 = var2.guildId;
                var _closure2_slot0 = var10;
                var2 = var2.onChange;
                var _closure2_slot1 = var2;
                var2 = _closure1_slot6;
                var3 = undefined;
                var13 = var2.bind(var3)();
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 9;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var8 = var2.bind(var3)();
                var9 = null;
                if (!(var9 == var0)) {
                    _fun115768_ip = 133;
                    continue _fun115768
                }
            case 85:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var7 = var6.bind(var3)(var2);
                var6 = var7.convertSurrogateToName;
                var11 = var9 != var1;
                var2 = '';
                if (!var11) {
                    _fun115768_ip = 125;
                    continue _fun115768
                }
            case 122:
                var2 = var1;
            case 125:
                var1 = false;
                var0 = var6.bind(var7)(var2, var1);
            case 133:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useEmojiByIdOrName;
                var12 = var1.bind(var2)(var10, var0);
                var7 = var0;
                if (!(var9 == var7)) {
                    _fun115768_ip = 178;
                    continue _fun115768
                }
            case 172:
                var6 = _closure1_slot7;
                _fun115768_ip = 218;
                continue _fun115768;
            case 178:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 12;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.guildId = var10;
                var0.id = var7;
                var6 = var2.bind(var3)(var1, var0);
            case 218:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 13;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var11 = var13.container;
                var7 = new Array(2);
                var7[0] = var11;
                var8 = var8.textInput;
                var7[1] = var8;
                var0.style = var7;
                var7 = 'link';
                var0.accessibilityRole = var7;
                var4 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEmojiPickerActionSheet;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = function arg0() {
                        _fun115770: for (var _fun115770_ip = 0;;) switch (_fun115770_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.id;
                                var3 = null;
                                if (!(var3 == var1)) {
                                    _fun115770_ip = 61;
                                    continue _fun115770
                                }
                            case 14:
                                var1 = var0.optionallyDiverseSequence;
                                if (!(var3 != var1)) {
                                    _fun115770_ip = 95;
                                    continue _fun115770
                                }
                            case 24:
                                var2 = _closure2_slot1;
                                if (!(var3 != var2)) {
                                    _fun115770_ip = 95;
                                    continue _fun115770
                                }
                            case 35:
                                var4 = _closure2_slot1;
                                var2 = {};
                                var1 = var0.optionallyDiverseSequence;
                                var2.emojiName = var1;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var2);
                                _fun115770_ip = 95;
                                continue _fun115770;
                            case 61:
                                var2 = _closure2_slot1;
                                if (!(var3 != var2)) {
                                    _fun115770_ip = 95;
                                    continue _fun115770
                                }
                            case 72:
                                var2 = _closure2_slot1;
                                var1 = {};
                                var0 = var0.id;
                                var1.emojiId = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 95:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onPressEmoji = var5;
                    var4 = _closure1_slot3;
                    var4 = var4.GUILD_ROLE_BENEFIT_EMOJI;
                    var1.pickerIntention = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var4 = new Array(3);
                var4[0] = var6;
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var6 = 15;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.LegacyText;
                var6 = {};
                var11 = var13.content;
                var10 = new Array(2);
                var10[0] = var11;
                if (!(var9 == var12)) {
                    _fun115768_ip = 351;
                    continue _fun115768
                }
            case 343:
                var11 = var13.placeholder;
                _fun115768_ip = 356;
                continue _fun115768;
            case 351:
                var11 = var13.text;
            case 356:
                var10[1] = var11;
                var6.style = var10;
                if (!(var9 == var12)) {
                    _fun115768_ip = 427;
                    continue _fun115768
                }
            case 368:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 17;
                var10 = var14[var9];
                var10 = var13.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.gXAN3P;
                var9 = var10.bind(var11)(var9);
                _fun115768_ip = 458;
                continue _fun115768;
            case 427:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 16;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = var11.getAllEmojiNamesString;
                var9 = var10.bind(var11)(var12);
            case 458:
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot4;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 18;
                var5 = var10[var8];
                var6 = var9.bind(var3)(var5);
                var5 = {};
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.Sizes;
                var8 = var8.MEDIUM;
                var5.size = var8;
                var8 = 19;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var5.source = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 1624, 33, 1297, 4689, 671, 5426, 14815, 12625, 3106, 10692, 10691, 6879, 7087, 4852, 3110, 1234, 4092, 10353, 2]);