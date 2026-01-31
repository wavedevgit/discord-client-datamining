// modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
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
    var10 = var3.Fonts;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var3.container = var8;
    var8 = {
        'marginStart': 8,
        'flexGrow': 1
    };
    var3.content = var8;
    var8 = {};
    var11 = 5;
    var9 = var5[var11];
    var16 = var13.bind(var0)(var9);
    var15 = var10.PRIMARY_MEDIUM;
    var9 = 6;
    var12 = var5[var9];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var14 = var12.TEXT_MUTED;
    var12 = 16;
    var18 = var16.bind(var0)(var15, var14, var12);
    var19 = var8;
    var14 = copyDataProperties(var19, var18);
    var3.placeholder = var8;
    var8 = {};
    var11 = var5[var11];
    var11 = var13.bind(var0)(var11);
    var10 = var10.PRIMARY_MEDIUM;
    var9 = var5[var9];
    var9 = var13.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_DEFAULT;
    var18 = var11.bind(var0)(var10, var9, var12);
    var19 = var8;
    var9 = copyDataProperties(var19, var18);
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: FormEmojiPicker, environment: var1
        _fun116848: for (var _fun116848_ip = 0;;) switch (_fun116848_ip) {
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
                var2 = 7;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var8 = var2.bind(var3)();
                var9 = null;
                if (!(var9 == var0)) {
                    _fun116848_ip = 133;
                    continue _fun116848
                }
            case 85:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var7 = var6.bind(var3)(var2);
                var6 = var7.convertSurrogateToName;
                var11 = var9 != var1;
                var2 = '';
                if (!var11) {
                    _fun116848_ip = 125;
                    continue _fun116848
                }
            case 122:
                var2 = var1;
            case 125:
                var1 = false;
                var0 = var6.bind(var7)(var2, var1);
            case 133:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useEmojiByIdOrName;
                var12 = var1.bind(var2)(var10, var0);
                var7 = var0;
                if (!(var9 == var7)) {
                    _fun116848_ip = 230;
                    continue _fun116848
                }
            case 172:
                var2 = _closure1_slot4;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 11;
                var0 = var14[var0];
                var1 = var11.bind(var3)(var0);
                var0 = {};
                var6 = 'contain';
                var0.resizeMode = var6;
                var6 = 12;
                var6 = var14[var6];
                var6 = var11.bind(var3)(var6);
                var0.source = var6;
                var6 = var2.bind(var3)(var1, var0);
                _fun116848_ip = 270;
                continue _fun116848;
            case 230:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 10;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.guildId = var10;
                var0.id = var7;
                var6 = var2.bind(var3)(var1, var0);
            case 270:
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
                var4 = function() { // Original name: onPress, environment: var4
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
                    var5 = function(arg0) { // Original name: onPressEmoji, environment: var5
                        _fun116850: for (var _fun116850_ip = 0;;) switch (_fun116850_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.id;
                                var3 = null;
                                if (!(var3 == var1)) {
                                    _fun116850_ip = 61;
                                    continue _fun116850
                                }
                            case 14:
                                var1 = var0.optionallyDiverseSequence;
                                if (!(var3 != var1)) {
                                    _fun116850_ip = 95;
                                    continue _fun116850
                                }
                            case 24:
                                var2 = _closure2_slot1;
                                if (!(var3 != var2)) {
                                    _fun116850_ip = 95;
                                    continue _fun116850
                                }
                            case 35:
                                var4 = _closure2_slot1;
                                var2 = {};
                                var1 = var0.optionallyDiverseSequence;
                                var2.emojiName = var1;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var2);
                                _fun116850_ip = 95;
                                continue _fun116850;
                            case 61:
                                var2 = _closure2_slot1;
                                if (!(var3 != var2)) {
                                    _fun116850_ip = 95;
                                    continue _fun116850
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
                    _fun116848_ip = 403;
                    continue _fun116848
                }
            case 395:
                var11 = var13.placeholder;
                _fun116848_ip = 408;
                continue _fun116848;
            case 403:
                var11 = var13.text;
            case 408:
                var10[1] = var11;
                var6.style = var10;
                if (!(var9 == var12)) {
                    _fun116848_ip = 479;
                    continue _fun116848
                }
            case 420:
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
                _fun116848_ip = 510;
                continue _fun116848;
            case 479:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 16;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = var11.getAllEmojiNamesString;
                var9 = var10.bind(var11)(var12);
            case 510:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 1616, 33, 1297, 4645, 671, 12518, 3063, 10739, 10738, 4667, 14865, 6741, 6951, 4839, 3067, 1234, 4045, 8405, 2]);