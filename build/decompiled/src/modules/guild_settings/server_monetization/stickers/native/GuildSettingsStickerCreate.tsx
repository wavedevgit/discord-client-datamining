// modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var14 = 2;
    var6 = var5[var14];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot6 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.HelpdeskArticles;
    var _closure1_slot10 = var7;
    var3 = var3.UPLOAD_STICKER_SIZE;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot12 = var7;
    var3 = var3.EmojiIntention;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_STICKER_FILE_SIZE;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot15 = var7;
    var7 = var3.Fragment;
    var _closure1_slot16 = var7;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 11;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var3.container = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginBottom = var12;
    var3.title = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginBottom = var12;
    var3.description = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginBottom = var12;
    var3.help = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginTop = var12;
    var3.stack = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND_DEFAULT;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.paddingHorizontal = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.paddingVertical = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.marginBottom = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var12 = 'row';
    var9.flexDirection = var12;
    var12 = 'center';
    var9.alignItems = var12;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.gap = var13;
    var3.emojiPreview = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.marginTop = var13;
    var3.stickerPreviewLabel = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND_DEFAULT;
    var9.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.marginBottom = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_64;
    var13 = var14 * var13;
    var9.height = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_64;
    var13 = var14 * var13;
    var9.width = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9.borderRadius = var13;
    var9.justifyContent = var12;
    var9.alignItems = var12;
    var3.stickerPreview = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_96;
    var9.width = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_96;
    var9.height = var10;
    var3.stickerPreviewImage = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot18 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun115348: for (var _fun115348_ip = 0;;) switch (_fun115348_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.stickerId;
                var _closure2_slot0 = var18;
                var1 = var0.guildId;
                var _closure2_slot1 = var1;
                var0 = var0.onFinish;
                var _closure2_slot2 = var0;
                var3 = undefined;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var0 = _closure1_slot18;
                var17 = var0.bind(var3)();
                var7 = _closure1_slot5;
                var0 = var7.useRef;
                var27 = null;
                var4 = var0.bind(var7)(var27);
                var _closure2_slot3 = var4;
                var0 = var7.useRef;
                var23 = var0.bind(var7)(var27);
                var _closure2_slot4 = var23;
                var0 = var7.useRef;
                var20 = var0.bind(var7)(var27);
                var _closure2_slot5 = var20;
                var0 = var7.useState;
                var0 = var0.bind(var7)(var3);
                var6 = _closure1_slot4;
                var5 = 2;
                var0 = var6.bind(var3)(var0, var5);
                var2 = 0;
                var1 = var0[var2];
                var _closure2_slot6 = var1;
                var1 = 1;
                var22 = var0[var1];
                var _closure2_slot7 = var22;
                var0 = var7.useState;
                var0 = var0.bind(var7)(var3);
                var0 = var6.bind(var3)(var0, var5);
                var8 = var0[var2];
                var _closure2_slot8 = var8;
                var19 = var0[var1];
                var _closure2_slot9 = var19;
                var0 = var7.useState;
                var0 = var0.bind(var7)(var3);
                var0 = var6.bind(var3)(var0, var5);
                var33 = var0[var2];
                var _closure2_slot10 = var33;
                var0 = var0[var1];
                var _closure2_slot11 = var0;
                var0 = var7.useState;
                var0 = var0.bind(var7)(var3);
                var0 = var6.bind(var3)(var0, var5);
                var28 = var0[var2];
                var _closure2_slot12 = var28;
                var0 = var0[var1];
                var _closure2_slot13 = var0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 12;
                var0 = var1[var0];
                var5 = var2.bind(var3)(var0);
                var0 = {};
                var21 = true;
                var0.includeKeyboardHeight = var21;
                var0 = var5.bind(var3)(var0);
                var5 = var0.insets;
                var0 = 13;
                var0 = var1[var0];
                var6 = var2.bind(var3)(var0);
                var0 = {};
                var0.insets = var5;
                var8 = {};
                var8.ref = var23;
                var7 = {};
                var10 = 'toRef';
                var7.type = var10;
                var7.ref = var20;
                var8.offset = var7;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var8.ref = var20;
                var10 = {};
                var11 = 'toBottom';
                var10.type = var11;
                var8.offset = var10;
                var7[1] = var8;
                var0.inputs = var7;
                var0.scrollViewRef = var4;
                var0 = var6.bind(var3)(var0);
                var16 = var0.onFocus;
                var0 = 14;
                var1 = var1[var0];
                var2 = var2.bind(var3)(var1);
                var6 = var27 != var18;
                var1 = undefined;
                if (!var6) {
                    _fun115348_ip = 425;
                    continue _fun115348
                }
            case 410:
                var7 = _closure1_slot9;
                var6 = var7.getStickerById;
                var1 = var6.bind(var7)(var18);
            case 425:
                var35 = var2.bind(var3)(var1);
                _closure2_slot14 = var35;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = var6[var0];
                var1 = var7.bind(var3)(var0);
                var0 = function() { // Environment: var12
                    _fun115349: for (var _fun115349_ip = 0;;) switch (_fun115349_ip) {
                        case 0:
                            var0 = _closure2_slot14;
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun115349_ip = 17;
                                continue _fun115349
                            }
                        case 13:
                            var0 = undefined;
                            return var0;
                        case 17:
                            var0 = _closure2_slot14;
                            var0 = var0.tags;
                            var1 = var3 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun115349_ip = 64;
                                continue _fun115349
                            }
                        case 36:
                            var5 = _closure1_slot8;
                            var2 = var5.getCustomEmojiById;
                            var1 = _closure2_slot14;
                            var1 = var1.tags;
                            var0 = var2.bind(var5)(var1);
                        case 64:
                            if (!(var3 == var0)) {
                                _fun115349_ip = 264;
                                continue _fun115349
                            }
                        case 71:
                            var1 = _closure2_slot14;
                            var1 = var1.tags;
                            var2 = var3 != var1;
                            var1 = undefined;
                            var6 = undefined;
                            if (!var2) {
                                _fun115349_ip = 195;
                                continue _fun115349
                            }
                        case 92:
                            var7 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var8 = 15;
                            var2 = var2[var8];
                            var9 = var7.bind(var1)(var2);
                            var7 = var9.hasSurrogates;
                            var2 = _closure2_slot14;
                            var2 = var2.tags;
                            var2 = var7.bind(var9)(var2);
                            if (var2) {
                                _fun115349_ip = 151;
                                continue _fun115349
                            }
                        case 139:
                            var2 = _closure2_slot14;
                            var2 = var2.tags;
                            _fun115349_ip = 192;
                            continue _fun115349;
                        case 151:
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var8];
                            var8 = var7.bind(var1)(var5);
                            var7 = var8.convertSurrogateToName;
                            var4 = _closure2_slot14;
                            var5 = var4.tags;
                            var4 = false;
                            var2 = var7.bind(var8)(var5, var4);
                        case 192:
                            var6 = var2;
                        case 195:
                            var4 = var3 != var6;
                            var2 = undefined;
                            if (!var4) {
                                _fun115349_ip = 250;
                                continue _fun115349
                            }
                        case 204:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 15;
                            var4 = var7[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.getByName;
                            var4 = var4.bind(var5)(var6);
                            var5 = var3 != var4;
                            var2 = undefined;
                            if (!var5) {
                                _fun115349_ip = 250;
                                continue _fun115349
                            }
                        case 247:
                            var2 = var4;
                        case 250:
                            var3 = var3 != var2;
                            var1 = undefined;
                            if (!var3) {
                                _fun115349_ip = 262;
                                continue _fun115349
                            }
                        case 259:
                            var1 = var2;
                        case 262:
                            return var1;
                        case 264:
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
                _closure2_slot15 = var0;
                var13 = function() {
                    _fun115350: for (var _fun115350_ip = 0;;) switch (_fun115350_ip) {
                        case 0:
                            var0 = arguments[0];
                            var3 = undefined;
                            if (!(var0 === var3)) {
                                _fun115350_ip = 11;
                                continue _fun115350
                            }
                        case 9:
                            var0 = true;
                        case 11:
                            var1 = _closure2_slot14;
                            var5 = null;
                            if (!(var5 == var1)) {
                                _fun115350_ip = 165;
                                continue _fun115350
                            }
                        case 27:
                            var1 = _closure2_slot6;
                            var1 = var5 != var1;
                            if (var0) {
                                _fun115350_ip = 96;
                                continue _fun115350
                            }
                        case 38:
                            var0 = var1;
                            if (!var1) {
                                _fun115350_ip = 72;
                                continue _fun115350
                            }
                        case 44:
                            var2 = _closure2_slot6;
                            var2 = var5 == var2;
                            var6 = undefined;
                            if (var2) {
                                _fun115350_ip = 66;
                                continue _fun115350
                            }
                        case 57:
                            var2 = _closure2_slot6;
                            var6 = var2.length;
                        case 66:
                            var2 = 0;
                            var0 = var6 > var2;
                        case 72:
                            if (!var0) {
                                _fun115350_ip = 83;
                                continue _fun115350
                            }
                        case 75:
                            var2 = _closure2_slot10;
                            var0 = var5 != var2;
                        case 83:
                            if (!var0) {
                                _fun115350_ip = 94;
                                continue _fun115350
                            }
                        case 86:
                            var2 = _closure2_slot12;
                            var0 = var5 != var2;
                        case 94:
                            _fun115350_ip = 163;
                            continue _fun115350;
                        case 96:
                            if (!var1) {
                                _fun115350_ip = 127;
                                continue _fun115350
                            }
                        case 99:
                            var2 = _closure2_slot6;
                            var2 = var5 == var2;
                            var3 = undefined;
                            if (var2) {
                                _fun115350_ip = 121;
                                continue _fun115350
                            }
                        case 112:
                            var2 = _closure2_slot6;
                            var3 = var2.length;
                        case 121:
                            var2 = 0;
                            var1 = var3 > var2;
                        case 127:
                            if (var1) {
                                _fun115350_ip = 138;
                                continue _fun115350
                            }
                        case 130:
                            var2 = _closure2_slot10;
                            var1 = var5 != var2;
                        case 138:
                            if (var1) {
                                _fun115350_ip = 149;
                                continue _fun115350
                            }
                        case 141:
                            var2 = _closure2_slot12;
                            var1 = var5 != var2;
                        case 149:
                            if (var1) {
                                _fun115350_ip = 160;
                                continue _fun115350
                            }
                        case 152:
                            var2 = _closure2_slot8;
                            var1 = var5 != var2;
                        case 160:
                            var0 = var1;
                        case 163:
                            _fun115350_ip = 262;
                            continue _fun115350;
                        case 165:
                            var1 = _closure2_slot6;
                            var1 = var5 != var1;
                            if (!var1) {
                                _fun115350_ip = 193;
                                continue _fun115350
                            }
                        case 176:
                            var3 = _closure2_slot6;
                            var2 = _closure2_slot14;
                            var2 = var2.name;
                            var1 = var3 !== var2;
                        case 193:
                            if (var1) {
                                _fun115350_ip = 259;
                                continue _fun115350
                            }
                        case 196:
                            var2 = _closure2_slot8;
                            var3 = var5 == var2;
                            if (var3) {
                                _fun115350_ip = 224;
                                continue _fun115350
                            }
                        case 207:
                            var6 = _closure2_slot8;
                            var2 = _closure2_slot14;
                            var2 = var2.description;
                            var3 = var6 === var2;
                        case 224:
                            var2 = !var3;
                            if (!var3) {
                                _fun115350_ip = 256;
                                continue _fun115350
                            }
                        case 230:
                            var3 = _closure2_slot12;
                            var3 = var5 != var3;
                            if (!var3) {
                                _fun115350_ip = 253;
                                continue _fun115350
                            }
                        case 241:
                            var5 = _closure2_slot12;
                            var4 = _closure2_slot15;
                            var3 = var5 !== var4;
                        case 253:
                            var2 = var3;
                        case 256:
                            var1 = var2;
                        case 259:
                            var0 = var1;
                        case 262:
                            return var0;
                    }
                };
                _closure2_slot16 = var13;
                var1 = function() { // Environment: var12
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun115353: for (var _fun115353_ip = 0;;) switch (_fun115353_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun115353_ip = 197;
                                        continue _fun115353
                                    }
                                case 10:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = undefined;
                                case 16: // try_start_0
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var2 = 16;
                                    var2 = var7[var2];
                                    var7 = var6.bind(var1)(var2);
                                    var6 = var7.openImagePicker;
                                    var2 = {};
                                    var5 = _closure1_slot11;
                                    var2.size = var5;
                                    var5 = 'image/png';
                                    var2.preferredMimeType = var5;
                                    var2 = var6.bind(var7)(var2);
                                    SaveGenerator(address = 75);
                                case 73:
                                    return var2;
                                case 75:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun115353_ip = 156;
                                        continue _fun115353
                                    }
                                case 81:
                                    var7 = var2.base64;
                                    var3 = var7;
                                    var4 = var2.mimeType;
                                    var6 = null;
                                    if (!(var6 != var7)) {
                                        _fun115353_ip = 120;
                                        continue _fun115353
                                    }
                                case 102:
                                    if (!(var5 === var4)) {
                                        _fun115353_ip = 120;
                                        continue _fun115353
                                    }
                                case 106:
                                    var4 = _closure2_slot11;
                                    var3 = var4.bind(var1)(var3);
                                case 118: // try_end0
                                    _fun115353_ip = 194;
                                    continue _fun115353;
                                case 120: // try_start_1
                                    var3 = global;
                                    var5 = var3.Error;
                                    var3 = var5.prototype;
                                    var4 = Object.create(var3, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var9 = 'Invalid image type, only PNG is supported.';
                                    var10 = var4;
                                    var3 = new var10[var5](var9, var8);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    throw var3;
                                case 156: // try_end1
                                    return var2;
                                case 159: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 2);
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 17;
                                    var2 = var4[var2];
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.showGuildSettingsStickerError;
                                    var2 = var2.bind(var3)();
                                case 194:
                                    return var1;
                                case 197:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var26 = var1.bind(var3)();
                var1 = function() { // Environment: var12
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun115357: for (var _fun115357_ip = 0;;) switch (_fun115357_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun115357_ip = 517;
                                        continue _fun115357
                                    }
                                case 10:
                                    var1 = undefined;
                                    var9 = undefined;
                                case 14: // try_start_0
                                    var2 = _closure2_slot0;
                                    var8 = null;
                                    if (!(var8 != var2)) {
                                        _fun115357_ip = 226;
                                        continue _fun115357
                                    }
                                case 30:
                                    var2 = _closure2_slot6;
                                    if (!(var8 != var2)) {
                                        _fun115357_ip = 223;
                                        continue _fun115357
                                    }
                                case 41:
                                    var2 = _closure2_slot12;
                                    if (!(var8 != var2)) {
                                        _fun115357_ip = 223;
                                        continue _fun115357
                                    }
                                case 52:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 18;
                                    var2 = var6[var2];
                                    var10 = var5.bind(var1)(var2);
                                    var7 = var10.updateGuildSticker;
                                    var6 = _closure2_slot1;
                                    var5 = _closure2_slot0;
                                    var2 = {};
                                    var11 = _closure2_slot6;
                                    var2.name = var11;
                                    var11 = _closure2_slot12;
                                    var11 = var11.id;
                                    if (!(var8 == var11)) {
                                        _fun115357_ip = 123;
                                        continue _fun115357
                                    }
                                case 112:
                                    var11 = _closure2_slot12;
                                    var11 = var11.name;
                                    _fun115357_ip = 132;
                                    continue _fun115357;
                                case 123:
                                    var12 = _closure2_slot12;
                                    var11 = var12.id;
                                case 132:
                                    var2.tags = var11;
                                    var11 = _closure2_slot8;
                                    var12 = var8 != var11;
                                    var11 = '';
                                    if (!var12) {
                                        _fun115357_ip = 156;
                                        continue _fun115357
                                    }
                                case 152:
                                    var11 = _closure2_slot8;
                                case 156:
                                    var2.description = var11;
                                    var2 = var7.bind(var10)(var6, var5, var2);
                                    SaveGenerator(address = 171);
                                case 169:
                                    return var2;
                                case 171:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun115357_ip = 220;
                                        continue _fun115357
                                    }
                                case 177:
                                    var5 = _closure2_slot2;
                                    var5 = var5.bind(var1)();
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 17;
                                    var3 = var6[var3];
                                    var5 = var5.bind(var1)(var3);
                                    var3 = var5.showGuildSettingsStickerSuccess;
                                    var3 = var3.bind(var5)();
                                    _fun115357_ip = 471;
                                    continue _fun115357;
                                case 220: // try_end0
                                    return var2;
                                case 223:
                                    return var1;
                                case 226: // try_start_1
                                    var2 = _closure2_slot6;
                                    if (!(var8 != var2)) {
                                        _fun115357_ip = 476;
                                        continue _fun115357
                                    }
                                case 237:
                                    var2 = _closure2_slot12;
                                    if (!(var8 != var2)) {
                                        _fun115357_ip = 476;
                                        continue _fun115357
                                    }
                                case 248:
                                    var2 = _closure2_slot10;
                                    if (!(var8 != var2)) {
                                        _fun115357_ip = 476;
                                        continue _fun115357
                                    }
                                case 259:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 18;
                                    var2 = var6[var2];
                                    var6 = var5.bind(var1)(var2);
                                    var5 = var6.createGuildSticker;
                                    var2 = {};
                                    var7 = _closure2_slot1;
                                    var2.guildId = var7;
                                    var7 = _closure2_slot6;
                                    var2.name = var7;
                                    var7 = _closure2_slot12;
                                    var10 = var8 == var7;
                                    var7 = undefined;
                                    if (var10) {
                                        _fun115357_ip = 328;
                                        continue _fun115357
                                    }
                                case 319:
                                    var10 = _closure2_slot12;
                                    var7 = var10.id;
                                case 328:
                                    var9 = var7;
                                    if (!(var8 == var7)) {
                                        _fun115357_ip = 359;
                                        continue _fun115357
                                    }
                                case 335:
                                    var7 = _closure2_slot12;
                                    var10 = var8 == var7;
                                    var7 = undefined;
                                    if (var10) {
                                        _fun115357_ip = 357;
                                        continue _fun115357
                                    }
                                case 348:
                                    var10 = _closure2_slot12;
                                    var7 = var10.name;
                                case 357:
                                    _fun115357_ip = 362;
                                    continue _fun115357;
                                case 359:
                                    var7 = var9;
                                case 362:
                                    var2.tags = var7;
                                    var7 = _closure2_slot8;
                                    var8 = var8 != var7;
                                    var7 = '';
                                    if (!var8) {
                                        _fun115357_ip = 386;
                                        continue _fun115357
                                    }
                                case 382:
                                    var7 = _closure2_slot8;
                                case 386:
                                    var2.description = var7;
                                    var7 = _closure2_slot10;
                                    var2.uri = var7;
                                    var7 = 'image/png';
                                    var2.mimeType = var7;
                                    var7 = 'mobile';
                                    var2.platform = var7;
                                    var2 = var5.bind(var6)(var2);
                                    SaveGenerator(address = 427);
                                case 425:
                                    return var2;
                                case 427:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun115357_ip = 473;
                                        continue _fun115357
                                    }
                                case 433:
                                    var4 = _closure2_slot2;
                                    var4 = var4.bind(var1)();
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var3 = 17;
                                    var3 = var5[var3];
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.showGuildSettingsStickerSuccess;
                                    var3 = var3.bind(var4)();
                                case 471: // try_end1
                                    _fun115357_ip = 514;
                                    continue _fun115357;
                                case 473:
                                    return var2;
                                case 476:
                                    return var1;
                                case 479: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 2);
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 17;
                                    var2 = var4[var2];
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.showGuildSettingsStickerError;
                                    var2 = var2.bind(var3)();
                                case 514:
                                    return var1;
                                case 517:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var15 = var1.bind(var3)();
                var8 = _closure1_slot5;
                var10 = var8.useImperativeHandle;
                var2 = arg1;
                var1 = function() { // Environment: var12
                    var0 = {};
                    var1 = _closure2_slot16;
                    var0.hasUnsavedChanges = var1;
                    return var0;
                };
                var1 = var10.bind(var8)(var2, var1);
                var2 = var8.useEffect;
                var1 = new Array(3);
                var1[0] = var18;
                var1[1] = var35;
                var1[2] = var0;
                var0 = function() { // Environment: var12
                    _fun115360: for (var _fun115360_ip = 0;;) switch (_fun115360_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var1 = var0 != var1;
                            if (!var1) {
                                _fun115360_ip = 24;
                                continue _fun115360
                            }
                        case 16:
                            var2 = _closure2_slot14;
                            var1 = var0 != var2;
                        case 24:
                            if (!var1) {
                                _fun115360_ip = 161;
                                continue _fun115360
                            }
                        case 30:
                            var2 = _closure2_slot13;
                            var1 = _closure2_slot15;
                            var4 = undefined;
                            var1 = var2.bind(var4)(var1);
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot14;
                            var1 = var1.name;
                            var1 = var2.bind(var4)(var1);
                            var2 = _closure2_slot9;
                            var1 = _closure2_slot14;
                            var1 = var1.description;
                            var1 = var2.bind(var4)(var1);
                            var1 = _closure2_slot4;
                            var4 = var1.current;
                            if (!(var0 != var4)) {
                                _fun115360_ip = 114;
                                continue _fun115360
                            }
                        case 94:
                            var2 = var4.setText;
                            var1 = _closure2_slot14;
                            var1 = var1.name;
                            var1 = var2.bind(var4)(var1);
                        case 114:
                            var1 = _closure2_slot5;
                            var2 = var1.current;
                            if (!(var0 != var2)) {
                                _fun115360_ip = 161;
                                continue _fun115360
                            }
                        case 127:
                            var1 = var2.setText;
                            var3 = _closure2_slot14;
                            var3 = var3.description;
                            var4 = var0 != var3;
                            var0 = '';
                            if (!var4) {
                                _fun115360_ip = 156;
                                continue _fun115360
                            }
                        case 153:
                            var0 = var3;
                        case 156:
                            var0 = var1.bind(var2)(var0);
                        case 161:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var8)(var0, var1);
                var2 = _closure1_slot17;
                var1 = _closure1_slot7;
                var0 = {};
                var0.ref = var4;
                var4 = var17.container;
                var0.style = var4;
                var4 = 'always';
                var0.keyboardShouldPersistTaps = var4;
                var4 = {};
                var34 = 11;
                var8 = var6[var34];
                var8 = var7.bind(var3)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var4.paddingHorizontal = var8;
                var6 = var6[var34];
                var6 = var7.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var5 = var5.bottom;
                var5 = var6 + var5;
                var4.paddingBottom = var5;
                var0.contentContainerStyle = var4;
                var4 = var27 == var18;
                var5 = null;
                if (!var4) {
                    _fun115348_ip = 1214;
                    continue _fun115348
                }
            case 670:
                var7 = _closure1_slot17;
                var6 = _closure1_slot16;
                var4 = {};
                var14 = _closure1_slot15;
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var10 = 19;
                var8 = var31[var10];
                var8 = var30.bind(var3)(var8);
                var11 = var8.Text;
                var8 = {};
                var24 = 'heading-md/semibold';
                var8.variant = var24;
                var24 = var17.title;
                var8.style = var24;
                var24 = 20;
                var25 = var31[var24];
                var25 = var30.bind(var3)(var25);
                var32 = var25.intl;
                var29 = var32.string;
                var25 = var31[var24];
                var25 = var30.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25["9N2OWD"];
                var25 = var29.bind(var32)(var25);
                var8.children = var25;
                var11 = var14.bind(var3)(var11, var8);
                var8 = new Array(4);
                var8[0] = var11;
                var11 = var31[var10];
                var11 = var30.bind(var3)(var11);
                var25 = var11.Text;
                var11 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var29 = var17.description;
                var11.style = var29;
                var29 = var31[var24];
                var29 = var30.bind(var3)(var29);
                var37 = var29.intl;
                var36 = var37.format;
                var29 = var31[var24];
                var29 = var30.bind(var3)(var29);
                var29 = var29.t;
                var32 = var29.hxLviw;
                var29 = {};
                var38 = 21;
                var38 = var31[var38];
                var41 = var30.bind(var3)(var38);
                var40 = var41.formatKbSize;
                var39 = _closure1_slot14;
                var38 = {};
                var38.useKibibytes = var21;
                var38 = var40.bind(var41)(var39, var38);
                var29.fileSize = var38;
                var29 = var36.bind(var37)(var32, var29);
                var11.children = var29;
                var11 = var14.bind(var3)(var25, var11);
                var8[1] = var11;
                var10 = var31[var10];
                var10 = var30.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var25 = var17.help;
                var10.style = var25;
                var25 = var31[var24];
                var25 = var30.bind(var3)(var25);
                var36 = var25.intl;
                var32 = var36.format;
                var25 = var31[var24];
                var25 = var30.bind(var3)(var25);
                var25 = var25.t;
                var29 = var25.UBj0aX;
                var25 = {};
                var38 = _closure1_slot1;
                var37 = 22;
                var37 = var31[var37];
                var39 = var38.bind(var3)(var37);
                var38 = var39.getArticleURL;
                var37 = _closure1_slot10;
                var37 = var37.STICKERS_UPLOAD;
                var37 = var38.bind(var39)(var37);
                var25.articleUrl = var37;
                var25 = var32.bind(var36)(var29, var25);
                var10.children = var25;
                var10 = var14.bind(var3)(var11, var10);
                var8[2] = var10;
                var10 = 23;
                var10 = var31[var10];
                var10 = var30.bind(var3)(var10);
                var11 = var10.Button;
                var10 = {};
                var25 = var31[var24];
                var25 = var30.bind(var3)(var25);
                var29 = var25.intl;
                var25 = var29.string;
                var24 = var31[var24];
                var24 = var30.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.O1REe1;
                var24 = var25.bind(var29)(var24);
                var10.text = var24;
                var10.onPress = var26;
                var24 = var27 != var18;
                var10.disabled = var24;
                var24 = var27 == var18;
                var25 = 'secondary';
                var18 = var25;
                if (!var24) {
                    _fun115348_ip = 1190;
                    continue _fun115348
                }
            case 1176:
                var24 = var27 == var33;
                var18 = var25;
                if (!var24) {
                    _fun115348_ip = 1190;
                    continue _fun115348
                }
            case 1186:
                var18 = 'primary';
            case 1190:
                var10.variant = var18;
                var10 = var14.bind(var3)(var11, var10);
                var8[3] = var10;
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 1214:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot17;
                var31 = _closure1_slot0;
                var25 = _closure1_slot2;
                var5 = 24;
                var5 = var25[var5];
                var5 = var31.bind(var3)(var5);
                var6 = var5.Stack;
                var5 = {};
                var8 = var17.stack;
                var5.style = var8;
                var14 = _closure1_slot15;
                var29 = 19;
                var8 = var25[var29];
                var8 = var31.bind(var3)(var8);
                var10 = var8.Text;
                var8 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var11 = var17.stickerPreviewLabel;
                var8.style = var11;
                var18 = 20;
                var11 = var25[var18];
                var11 = var31.bind(var3)(var11);
                var30 = var11.intl;
                var24 = var30.string;
                var11 = var25[var18];
                var11 = var31.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.gjdiKE;
                var11 = var24.bind(var30)(var11);
                var8.children = var11;
                var10 = var14.bind(var3)(var10, var8);
                var8 = new Array(7);
                var8[0] = var10;
                var24 = 25;
                var10 = var25[var24];
                var10 = var31.bind(var3)(var10);
                var11 = var10.PressableHighlight;
                var10 = {};
                var30 = var17.stickerPreview;
                var10.style = var30;
                var30 = var27 != var35;
                var10.disabled = var30;
                var10.onPress = var26;
                var26 = 'button';
                var10.accessibilityRole = var26;
                var26 = var25[var18];
                var26 = var31.bind(var3)(var26);
                var30 = var26.intl;
                var26 = var30.string;
                var25 = var25[var18];
                var25 = var31.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.O1REe1;
                var25 = var26.bind(var30)(var25);
                var10.accessibilityLabel = var25;
                if (!(var27 == var35)) {
                    _fun115348_ip = 1576;
                    continue _fun115348
                }
            case 1478:
                if (!(var27 == var33)) {
                    _fun115348_ip = 1530;
                    continue _fun115348
                }
            case 1482:
                var30 = _closure1_slot15;
                var26 = _closure1_slot0;
                var31 = _closure1_slot2;
                var25 = 27;
                var25 = var31[var25];
                var25 = var26.bind(var3)(var25);
                var26 = var25.StickerPlusIcon;
                var25 = {};
                var31 = 'lg';
                var25.size = var31;
                var25 = var30.bind(var3)(var26, var25);
                _fun115348_ip = 1574;
                continue _fun115348;
            case 1530:
                var31 = _closure1_slot15;
                var30 = _closure1_slot6;
                var26 = {};
                var32 = {};
                var32.uri = var33;
                var26.source = var32;
                var32 = var17.stickerPreviewImage;
                var26.style = var32;
                var32 = 'contain';
                var26.resizeMode = var32;
                var25 = var31.bind(var3)(var30, var26);
            case 1574:
                _fun115348_ip = 1642;
                continue _fun115348;
            case 1576:
                var31 = _closure1_slot15;
                var33 = _closure1_slot1;
                var32 = _closure1_slot2;
                var26 = 26;
                var26 = var32[var26];
                var30 = var33.bind(var3)(var26);
                var26 = {};
                var26.sticker = var35;
                var32 = var32[var34];
                var32 = var33.bind(var3)(var32);
                var32 = var32.spacing;
                var32 = var32.PX_96;
                var26.size = var32;
                var26.animated = var21;
                var25 = var31.bind(var3)(var30, var26);
            case 1642:
                var10.children = var25;
                var10 = var14.bind(var3)(var11, var10);
                var8[1] = var10;
                var26 = _closure1_slot15;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var14 = var10[var29];
                var14 = var11.bind(var3)(var14);
                var25 = var14.Text;
                var14 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var30 = var17.stickerPreviewLabel;
                var14.style = var30;
                var30 = var10[var18];
                var30 = var11.bind(var3)(var30);
                var32 = var30.intl;
                var31 = var32.string;
                var30 = var10[var18];
                var30 = var11.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30["3BQmiC"];
                var30 = var31.bind(var32)(var30);
                var14.children = var30;
                var14 = var26.bind(var3)(var25, var14);
                var8[2] = var14;
                var14 = _closure1_slot17;
                var10 = var10[var24];
                var10 = var11.bind(var3)(var10);
                var11 = var10.PressableHighlight;
                var10 = {};
                var17 = var17.emojiPreview;
                var10.style = var17;
                var17 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEmojiPickerActionSheet;
                    var1 = {};
                    var4 = _closure1_slot13;
                    var4 = var4.GUILD_STICKER_RELATED_EMOJI;
                    var1.pickerIntention = var4;
                    var5 = _closure2_slot1;
                    var1.guildId = var5;
                    var4 = _closure2_slot13;
                    var1.onPressEmoji = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10.onPress = var17;
                if (!(var27 == var28)) {
                    _fun115348_ip = 1867;
                    continue _fun115348
                }
            case 1812:
                var25 = _closure1_slot15;
                var24 = _closure1_slot0;
                var26 = _closure1_slot2;
                var17 = 31;
                var17 = var26[var17];
                var17 = var24.bind(var3)(var17);
                var24 = var17.ReactionIcon;
                var17 = {
                    'size': 'md',
                    'color': 'text-subtle'
                };
                var24 = var25.bind(var3)(var24, var17);
                _fun115348_ip = 2023;
                continue _fun115348;
            case 1867:
                var26 = _closure1_slot15;
                var25 = _closure1_slot1;
                var30 = _closure1_slot2;
                var17 = 29;
                var17 = var30[var17];
                var25 = var25.bind(var3)(var17);
                var17 = {};
                var30 = {
                    'width': 24,
                    'height': 24
                };
                var17.fastImageStyle = var30;
                var30 = var28.id;
                if (!(var27 != var30)) {
                    _fun115348_ip = 1928;
                    continue _fun115348
                }
            case 1921:
                var30 = var28.name;
                _fun115348_ip = 1933;
                continue _fun115348;
            case 1928:
                var30 = var28.surrogates;
            case 1933:
                var17.name = var30;
                var30 = var28.id;
                var31 = var27 != var30;
                var30 = undefined;
                if (!var31) {
                    _fun115348_ip = 2012;
                    continue _fun115348
                }
            case 1951:
                var32 = _closure1_slot1;
                var33 = _closure1_slot2;
                var31 = 30;
                var31 = var33[var31];
                var33 = var32.bind(var3)(var31);
                var32 = var33.getEmojiURL;
                var31 = {};
                var34 = var28.id;
                var31.id = var34;
                var34 = var28.animated;
                var31.animated = var34;
                var34 = _closure1_slot12;
                var31.size = var34;
                var30 = var32.bind(var33)(var31);
            case 2012:
                var17.src = var30;
                var24 = var26.bind(var3)(var25, var17);
            case 2023:
                var17 = new Array(2);
                var17[0] = var24;
                var26 = _closure1_slot15;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var29];
                var24 = var25.bind(var3)(var24);
                var25 = var24.Text;
                var24 = {
                    'variant': 'text-md/semibold',
                    'color': 'input-placeholder-text-default'
                };
                if (!(var27 == var28)) {
                    _fun115348_ip = 2131;
                    continue _fun115348
                }
            case 2075:
                var31 = _closure1_slot0;
                var27 = _closure1_slot2;
                var29 = var27[var18];
                var29 = var31.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var27 = var27[var18];
                var27 = var31.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27.QTK0TJ;
                var27 = var29.bind(var30)(var27);
                _fun115348_ip = 2159;
                continue _fun115348;
            case 2131:
                var30 = var28.name;
                var28 = global;
                var28 = var28.HermesInternal;
                var29 = var28.concat;
                var28 = ':';
                var27 = var29.bind(var28)(var30, var28);
            case 2159:
                var24.children = var27;
                var24 = var26.bind(var3)(var25, var24);
                var17[1] = var24;
                var10.children = var17;
                var10 = var14.bind(var3)(var11, var10);
                var8[3] = var10;
                var11 = _closure1_slot15;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 32;
                var9 = var14[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.TextInput;
                var9 = {};
                var9.ref = var23;
                var23 = var14[var18];
                var23 = var17.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var14[var18];
                var23 = var17.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23["0VRh6n"];
                var23 = var24.bind(var25)(var23);
                var9.label = var23;
                var23 = var14[var18];
                var23 = var17.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var14[var18];
                var23 = var17.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23["3fGttT"];
                var23 = var24.bind(var25)(var23);
                var9.placeholder = var23;
                var9.onChange = var22;
                var9.onFocus = var16;
                var12 = function() {
                    _fun115362: for (var _fun115362_ip = 0;;) switch (_fun115362_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var3 = var0.current;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun115362_ip = 28;
                                continue _fun115362
                            }
                        case 18:
                            var2 = var3.focus;
                            var2 = var2.bind(var3)();
                        case 28:
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            if (!(var0 != var2)) {
                                _fun115362_ip = 61;
                                continue _fun115362
                            }
                        case 41:
                            var1 = var2.scrollToEnd;
                            var0 = {};
                            var3 = true;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9.onSubmitEditing = var12;
                var12 = false;
                var9.isDisabled = var12;
                var9.isClearable = var21;
                var21 = 'next';
                var9.returnKeyType = var21;
                var21 = 'submit';
                var9.submitBehavior = var21;
                var9 = var11.bind(var3)(var10, var9);
                var8[4] = var9;
                var9 = 33;
                var9 = var14[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.TextArea;
                var9 = {};
                var9.ref = var20;
                var20 = 100;
                var9.maxLength = var20;
                var20 = var14[var18];
                var20 = var17.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var14[var18];
                var20 = var17.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.uGccej;
                var20 = var21.bind(var22)(var20);
                var9.label = var20;
                var20 = var14[var18];
                var20 = var17.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var14[var18];
                var20 = var17.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.zwR0fa;
                var20 = var21.bind(var22)(var20);
                var9.placeholder = var20;
                var9.onChange = var19;
                var9.onFocus = var16;
                var9 = var11.bind(var3)(var10, var9);
                var8[5] = var9;
                var9 = 23;
                var9 = var14[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var9.onPress = var15;
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["R3BPH+"];
                var14 = var15.bind(var16)(var14);
                var9.text = var14;
                var15 = var13.bind(var3)(var12);
                var14 = 'secondary';
                if (!var15) {
                    _fun115348_ip = 2627;
                    continue _fun115348
                }
            case 2623:
                var14 = 'primary';
            case 2627:
                var9.variant = var14;
                var13 = var13.bind(var3)(var12);
                var13 = !var13;
                var9.disabled = var13;
                var9.loading = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[6] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 34;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 4700, 5556, 660, 1616, 1352, 33, 1297, 671, 4856, 9559, 4891, 3063, 3972, 14688, 9319, 3900, 1234, 3316, 1675, 4043, 4039, 4865, 9331, 14689, 6951, 5731, 1417, 7638, 5363, 5350, 2]);