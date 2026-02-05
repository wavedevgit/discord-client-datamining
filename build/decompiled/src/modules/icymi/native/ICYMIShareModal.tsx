// modules/icymi/native/ICYMIShareModal.tsx
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
        var1 = arg0;
        var20 = var1.render;
        var5 = var1.setUri;
        var _closure2_slot0 = var5;
        var1 = _closure1_slot15;
        var3 = undefined;
        var21 = var1.bind(var3)();
        var4 = _closure1_slot5;
        var2 = var4.useRef;
        var1 = null;
        var10 = var2.bind(var4)(var1);
        var _closure2_slot1 = var10;
        var4 = _closure1_slot5;
        var2 = var4.useEffect;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var0 = global;
            var3 = var0.setTimeout;
            var0 = undefined;
            var2 = function() { // Environment: var1
                _fun104211: for (var _fun104211_ip = 0;;) switch (_fun104211_ip) {
                    case 0:
                        var0 = _closure2_slot1;
                        var2 = var0.current;
                        var4 = null;
                        var1 = var4 == var2;
                        var0 = undefined;
                        if (var1) {
                            _fun104211_ip = 67;
                            continue _fun104211
                        }
                    case 23:
                        var1 = var2.capture;
                        var1 = var4 == var1;
                        var0 = undefined;
                        if (var1) {
                            _fun104211_ip = 67;
                            continue _fun104211
                        }
                    case 38:
                        var1 = var2.capture;
                        var3 = var1.bind(var2)();
                        var2 = var3.then;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1);
                    case 67:
                        return var0;
                }
            };
            var1 = 500;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var4)(var0, var1);
        var14 = _closure1_slot1;
        var19 = _closure1_slot2;
        var0 = 20;
        var0 = var19[var0];
        var0 = var14.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var9 = var0.width;
        var0 = 21;
        var0 = var19[var0];
        var0 = var14.bind(var3)(var0);
        var18 = var0.bind(var3)();
        var15 = _closure1_slot0;
        var0 = 22;
        var0 = var19[var0];
        var1 = var15.bind(var3)(var0);
        var0 = var1.useClientThemesOverride;
        var22 = var0.bind(var1)();
        var2 = _closure1_slot13;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = {
            'position': 'absolute',
            'top': 4294966296,
            'overflow': 'hidden'
        };
        var0.style = var4;
        var6 = _closure1_slot13;
        var5 = _closure1_slot6;
        var4 = {};
        var8 = var21.preview;
        var7 = new Array(2);
        var7[0] = var8;
        var8 = {};
        var8.width = var9;
        var7[1] = var8;
        var4.style = var7;
        var9 = _closure1_slot13;
        var7 = 23;
        var7 = var19[var7];
        var8 = var14.bind(var3)(var7);
        var7 = {};
        var7.ref = var10;
        var10 = {
            'fileName': 'icymi_content',
            'format': 'png',
            'quality': 1
        };
        var7.options = var10;
        var12 = _closure1_slot14;
        var11 = _closure1_slot6;
        var10 = {};
        var13 = var21.base;
        var10.style = var13;
        var16 = _closure1_slot13;
        var13 = 24;
        var13 = var19[var13];
        var14 = var14.bind(var3)(var13);
        var13 = {
            'absolute': true,
            'wide': true,
            'tall': true,
            'mix': true
        };
        var23 = {};
        var24 = 25;
        var25 = var19[var24];
        var25 = var15.bind(var3)(var25);
        var25 = var25.OverlayOpacity;
        var25 = var25.LEVEL_7;
        var23.dark = var25;
        var24 = var19[var24];
        var24 = var15.bind(var3)(var24);
        var24 = var24.OverlayOpacity;
        var24 = var24.LEVEL_8;
        var23.light = var24;
        var13.mixAmount = var23;
        var14 = var16.bind(var3)(var14, var13);
        var13 = new Array(2);
        var13[0] = var14;
        var16 = _closure1_slot13;
        var14 = 26;
        var14 = var19[var14];
        var14 = var15.bind(var3)(var14);
        var15 = var14.ThemeContextProvider;
        var14 = {};
        var14.gradient = var18;
        var19 = _closure1_slot13;
        var18 = _closure1_slot6;
        var17 = {};
        var23 = var21.contentContainer;
        var21 = new Array(2);
        var21[0] = var23;
        var21[1] = var22;
        var17.style = var21;
        var20 = var20.bind(var3)();
        var17.children = var20;
        var17 = var19.bind(var3)(var18, var17);
        var14.children = var17;
        var14 = var16.bind(var3)(var15, var14);
        var13[1] = var14;
        var10.children = var13;
        var10 = var12.bind(var3)(var11, var10);
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun104213: for (var _fun104213_ip = 0;;) switch (_fun104213_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.count;
                var9 = var0.isSending;
                var7 = var0.onSend;
                var _closure2_slot0 = var7;
                var0 = _closure1_slot15;
                var4 = undefined;
                var3 = var0.bind(var4)();
                var _closure2_slot1 = var3;
                var8 = _closure1_slot5;
                var5 = var8.useState;
                var0 = '';
                var8 = var5.bind(var8)(var0);
                var5 = _closure1_slot3;
                var0 = 2;
                var8 = var5.bind(var4)(var8, var0);
                var0 = 0;
                var19 = var8[var0];
                var _closure2_slot2 = var19;
                var5 = 1;
                var18 = var8[var5];
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 27;
                var8 = var12[var8];
                var10 = var10.bind(var4)(var8);
                var8 = {};
                var11 = true;
                var8.includeKeyboardHeight = var11;
                var8 = var10.bind(var4)(var8);
                var8 = var8.insets;
                var _closure2_slot3 = var8;
                var11 = _closure1_slot0;
                var10 = 28;
                var10 = var12[var10];
                var11 = var11.bind(var4)(var10);
                var10 = var11.useShareChatInputActions;
                var10 = var10.bind(var11)(var18);
                var20 = var10.textInputRef;
                var17 = var10.handleSelectionChange;
                var16 = var10.handleMessageFocus;
                var15 = var10.handleMessageBlur;
                var14 = var10.handlePressEmoji;
                var12 = _closure1_slot5;
                var11 = var12.useCallback;
                var10 = new Array(2);
                var10[0] = var19;
                var10[1] = var7;
                var7 = function() { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var11.bind(var12)(var7, var10);
                if (!(!(var1 <= var5))) {
                    _fun104213_ip = 296;
                    continue _fun104213
                }
            case 231:
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 14;
                var10 = var13[var5];
                var10 = var7.bind(var4)(var10);
                var12 = var10.intl;
                var10 = var12.formatToPlainString;
                var5 = var13[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.t;
                var7 = var5.jWtYUm;
                var5 = {};
                var5.count = var1;
                var12 = var10.bind(var12)(var7, var5);
                _fun104213_ip = 351;
                continue _fun104213;
            case 296:
                var13 = _closure1_slot0;
                var21 = _closure1_slot2;
                var5 = 14;
                var7 = var21[var5];
                var7 = var13.bind(var4)(var7);
                var10 = var7.intl;
                var7 = var10.string;
                var5 = var21[var5];
                var5 = var13.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.TXNS7S;
                var12 = var7.bind(var10)(var5);
            case 351:
                var7 = _closure1_slot5;
                var5 = var7.useMemo;
                var10 = var3.footer;
                var3 = new Array(2);
                var3[0] = var10;
                var8 = var8.bottom;
                var3[1] = var8;
                var2 = function() { // Environment: var2
                    var3 = _closure2_slot1;
                    var1 = var3.footer;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var3 = var3.footer;
                    var3 = var3.paddingVertical;
                    var2 = _closure2_slot3;
                    var2 = var2.bottom;
                    var2 = var3 + var2;
                    var1.paddingBottom = var2;
                    var0[1] = var1;
                    return var0;
                };
                var5 = var5.bind(var7)(var2, var3);
                var10 = var0 === var1;
                var0 = null;
                if (var10) {
                    _fun104213_ip = 590;
                    continue _fun104213
                }
            case 408:
                var3 = _closure1_slot14;
                var2 = _closure1_slot6;
                var1 = {};
                var1.style = var5;
                var8 = _closure1_slot13;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 29;
                var5 = var13[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.inputRef = var20;
                var5.text = var19;
                var5.onChange = var18;
                var5.onSelectionChange = var17;
                var5.onFocus = var16;
                var5.onBlur = var15;
                var5.onPressEmoji = var14;
                var5.onSend = var11;
                var5.disabled = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot13;
                var7 = _closure1_slot0;
                var6 = 30;
                var6 = var13[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Button;
                var6 = {
                    'variant': 'primary',
                    'size': 'md'
                };
                var6.text = var12;
                var6.disabled = var10;
                var10 = undefined;
                if (var9) {
                    _fun104213_ip = 561;
                    continue _fun104213
                }
            case 558:
                var10 = var11;
            case 561:
                var6.onPress = var10;
                var6.loading = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 590:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var3 = function arg0() {
        _fun104216: for (var _fun104216_ip = 0;;) switch (_fun104216_ip) {
            case 0:
                var0 = arg0;
                var25 = var0.title;
                var _closure2_slot0 = var25;
                var13 = var0.originDestinationId;
                var1 = var0.linkText;
                var _closure2_slot1 = var1;
                var17 = var0.render;
                var _closure2_slot2 = var17;
                var1 = var0.forwardToChannel;
                var _closure2_slot3 = var1;
                var0 = var0.onShare;
                var _closure2_slot4 = var0;
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = new Array(0);
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var3 = undefined;
                var4 = 2;
                var2 = var0.bind(var3)(var1, var4);
                var21 = 0;
                var0 = var2[var21];
                var _closure2_slot5 = var0;
                var1 = 1;
                var16 = var2[var1];
                var10 = var0.length;
                var6 = _closure1_slot5;
                var2 = var6.useState;
                var0 = false;
                var2 = var2.bind(var6)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var2, var4);
                var9 = var0[var21];
                var0 = var0[var1];
                var _closure2_slot6 = var0;
                var2 = _closure1_slot5;
                var0 = var2.useState;
                var6 = null;
                var2 = var0.bind(var2)(var6);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var2, var4);
                var2 = var0[var21];
                var _closure2_slot7 = var2;
                var15 = var0[var1];
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var20
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 31;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var22 = var2.bind(var4)(var1, var0);
                var0 = function() { // Environment: var20
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun104220: for (var _fun104220_ip = 0;;) switch (_fun104220_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun104220_ip = 256;
                                        continue _fun104220
                                    }
                                case 12:
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var4 = _closure2_slot6;
                                    var2 = undefined;
                                    var1 = true;
                                    var1 = var4.bind(var2)(var1);
                                    var1 = _closure2_slot2;
                                    var5 = null;
                                    var1 = var5 == var1;
                                    if (var1) {
                                        _fun104220_ip = 56;
                                        continue _fun104220
                                    }
                                case 48:
                                    var4 = _closure2_slot7;
                                    var1 = var5 != var4;
                                case 56:
                                    if (!var1) {
                                        _fun104220_ip = 250;
                                        continue _fun104220
                                    }
                                case 62:
                                    var1 = global;
                                    var8 = var1.Promise;
                                    var7 = var8.all;
                                    var10 = _closure2_slot5;
                                    var9 = var10.map;
                                    var11 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var1 = 32;
                                    var1 = var12[var1];
                                    var1 = var11.bind(var2)(var1);
                                    var1 = var1.getOrResolveChannelIdFromDestinationId;
                                    var1 = var9.bind(var10)(var1);
                                    var1 = var7.bind(var8)(var1);
                                    SaveGenerator(address = 128);
                                case 126:
                                    return var1;
                                case 128:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                                    if (var7) {
                                        _fun104220_ip = 253;
                                        continue _fun104220
                                    }
                                case 134:
                                    var8 = var1.map;
                                    var7 = function(arg0) { // Environment: var6
                                        var2 = _closure1_slot7;
                                        var1 = var2.getChannel;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var10 = var8.bind(var1)(var7);
                                    var9 = var10.filter;
                                    var11 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var8 = 33;
                                    var8 = var7[var8];
                                    var8 = var11.bind(var2)(var8);
                                    var8 = var8.isNotNullish;
                                    var9 = var9.bind(var10)(var8);
                                    var8 = var9.forEach;
                                    var6 = function() { // Environment: var6
                                        var3 = _closure1_slot4;
                                        var2 = undefined;
                                        var1 = function*(arg0) { // Environment: var0
                                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                                _fun104224: for (var _fun104224_ip = 0;;) switch (_fun104224_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        var3 = arg0;
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                                        if (var2) {
                                                            _fun104224_ip = 494;
                                                            continue _fun104224
                                                        }
                                                    case 15:
                                                        var _closure8_slot0 = var3;
                                                        var4 = _closure5_slot0;
                                                        var6 = null;
                                                        if (!(var6 != var4)) {
                                                            _fun104224_ip = 57;
                                                            continue _fun104224
                                                        }
                                                    case 32:
                                                        var5 = _closure5_slot0;
                                                        var4 = var5.trim;
                                                        var4 = var4.bind(var5)();
                                                        var5 = var4.length;
                                                        var4 = 0;
                                                        if (!(!(var5 > var4))) {
                                                            _fun104224_ip = 66;
                                                            continue _fun104224
                                                        }
                                                    case 57:
                                                        var7 = _closure2_slot1;
                                                        _fun104224_ip = 107;
                                                        continue _fun104224;
                                                    case 66:
                                                        var9 = _closure5_slot0;
                                                        var8 = _closure2_slot1;
                                                        var2 = global;
                                                        var2 = var2.HermesInternal;
                                                        var5 = var2.concat;
                                                        var4 = '';
                                                        var2 = '\n\n';
                                                        var7 = var5.bind(var4)(var9, var2, var8);
                                                    case 107:
                                                        var5 = _closure1_slot1;
                                                        var4 = _closure1_slot2;
                                                        var2 = 34;
                                                        var4 = var4[var2];
                                                        var2 = undefined;
                                                        var5 = var5.bind(var2)(var4);
                                                        var4 = var5.parse;
                                                        var7 = var4.bind(var5)(var3, var7);
                                                        var4 = _closure2_slot3;
                                                        if (!(var6 != var4)) {
                                                            _fun104224_ip = 169;
                                                            continue _fun104224
                                                        }
                                                    case 155:
                                                        var4 = _closure2_slot3;
                                                        var4 = var4.bind(var2)(var3);
                                                        _fun104224_ip = 488;
                                                        continue _fun104224;
                                                    case 169:
                                                        var4 = _closure2_slot2;
                                                        var4 = var6 != var4;
                                                        if (!var4) {
                                                            _fun104224_ip = 188;
                                                            continue _fun104224
                                                        }
                                                    case 180:
                                                        var5 = _closure2_slot7;
                                                        var4 = var6 != var5;
                                                    case 188:
                                                        var8 = undefined;
                                                        if (!var4) {
                                                            _fun104224_ip = 399;
                                                            continue _fun104224
                                                        }
                                                    case 196:
                                                        var6 = _closure1_slot1;
                                                        var10 = _closure1_slot2;
                                                        var5 = 35;
                                                        var4 = var10[var5];
                                                        var12 = var6.bind(var2)(var4);
                                                        var11 = var12.addFile;
                                                        var4 = {};
                                                        var13 = var3.id;
                                                        var4.channelId = var13;
                                                        var13 = {};
                                                        var14 = _closure2_slot7;
                                                        var13.uri = var14;
                                                        var13.originalUri = var14;
                                                        var15 = _closure1_slot0;
                                                        var14 = 36;
                                                        var14 = var10[var14];
                                                        var16 = var15.bind(var2)(var14);
                                                        var14 = var16.v4;
                                                        var14 = var14.bind(var16)();
                                                        var13.id = var14;
                                                        var14 = 37;
                                                        var14 = var10[var14];
                                                        var14 = var15.bind(var2)(var14);
                                                        var14 = var14.UploadPlatform;
                                                        var14 = var14.REACT_NATIVE;
                                                        var13.platform = var14;
                                                        var4.file = var13;
                                                        var13 = _closure1_slot8;
                                                        var13 = var13.ChannelMessage;
                                                        var4.draftType = var13;
                                                        var4 = var11.bind(var12)(var4);
                                                        var13 = _closure1_slot9;
                                                        var12 = var13.getUploads;
                                                        var11 = var3.id;
                                                        var4 = _closure1_slot8;
                                                        var4 = var4.ChannelMessage;
                                                        var8 = var12.bind(var13)(var11, var4);
                                                        var5 = var10[var5];
                                                        var11 = var6.bind(var2)(var5);
                                                        var10 = var11.clearAll;
                                                        var6 = var3.id;
                                                        var5 = _closure1_slot8;
                                                        var5 = var5.ChannelMessage;
                                                        var5 = var10.bind(var11)(var6, var5);
                                                    case 399:
                                                        var5 = _closure1_slot1;
                                                        var6 = _closure1_slot2;
                                                        var4 = 38;
                                                        var4 = var6[var4];
                                                        var6 = var5.bind(var2)(var4);
                                                        var5 = var6.sendMessage;
                                                        var20 = var3.id;
                                                        var3 = {};
                                                        var9 = _closure1_slot12;
                                                        var9 = var9.ICYMI;
                                                        var3.location = var9;
                                                        var3.attachmentsToUpload = var8;
                                                        var1 = function arg0, arg1, arg2() {
                                                            var2 = _closure1_slot0;
                                                            var1 = _closure1_slot2;
                                                            var0 = 39;
                                                            var1 = var1[var0];
                                                            var0 = undefined;
                                                            var3 = var2.bind(var0)(var1);
                                                            var2 = var3.handleUploadMessageAttachmentsErrors;
                                                            var1 = {};
                                                            var4 = arg0;
                                                            var1.file = var4;
                                                            var5 = _closure8_slot0;
                                                            var4 = var5.getGuildId;
                                                            var4 = var4.bind(var5)();
                                                            var1.guildId = var4;
                                                            var4 = new Array(0);
                                                            var1.analyticsLocations = var4;
                                                            var4 = arg1;
                                                            var1.code = var4;
                                                            var4 = arg2;
                                                            var1.reason = var4;
                                                            var1 = var2.bind(var3)(var1);
                                                            return var0;
                                                        };
                                                        var3.onAttachmentUploadError = var1;
                                                        var18 = false;
                                                        var21 = var6;
                                                        var19 = var7;
                                                        var17 = var3;
                                                        var1 = var21[var5](var20, var19, var18, var17, var16);
                                                        SaveGenerator(address = 482);
                                                    case 480:
                                                        return var1;
                                                    case 482:
                                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                        if (var3) {
                                                            _fun104224_ip = 491;
                                                            continue _fun104224
                                                        }
                                                    case 488:
                                                        return var2;
                                                    case 491:
                                                        return var1;
                                                    case 494:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var1 = var3.bind(var2)(var1);
                                        var _closure6_slot0 = var1;
                                        var0 = function() { // Environment: var0
                                            var0 = undefined;
                                            var3 = _closure6_slot0;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        return var0;
                                    };
                                    var6 = var6.bind(var2)();
                                    var6 = var8.bind(var9)(var6);
                                    var6 = _closure1_slot1;
                                    var4 = 31;
                                    var4 = var7[var4];
                                    var6 = var6.bind(var2)(var4);
                                    var4 = var6.pop;
                                    var4 = var4.bind(var6)();
                                    var4 = _closure2_slot4;
                                    if (!(var5 != var4)) {
                                        _fun104220_ip = 250;
                                        continue _fun104220
                                    }
                                case 242:
                                    var3 = _closure2_slot4;
                                    var3 = var3.bind(var2)();
                                case 250:
                                    return var2;
                                case 253:
                                    return var1;
                                case 256:
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
                var8 = var0.bind(var3)();
                var0 = _closure1_slot15;
                var14 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var24 = _closure1_slot2;
                var0 = 40;
                var0 = var24[var0];
                var0 = var1.bind(var3)(var0);
                var12 = var0.bind(var3)();
                var _closure2_slot8 = var12;
                var0 = 20;
                var0 = var24[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.height;
                var _closure2_slot9 = var0;
                var4 = _closure1_slot5;
                var2 = var4.useMemo;
                var7 = var12.bottom;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var0;
                var0 = function() { // Environment: var20
                    _fun104228: for (var _fun104228_ip = 0;;) switch (_fun104228_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 41;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.isAndroid;
                            var2 = var1.bind(var2)();
                            var1 = '100%';
                            if (!var2) {
                                _fun104228_ip = 66;
                                continue _fun104228
                            }
                        case 46:
                            var3 = _closure2_slot9;
                            var2 = _closure2_slot8;
                            var2 = var2.bottom;
                            var1 = var3 + var2;
                        case 66:
                            var0.height = var1;
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot6;
                var0 = {};
                var0.style = var4;
                var11 = _closure1_slot13;
                var7 = _closure1_slot6;
                var4 = {};
                var14 = var14.headerContainer;
                var4.style = var14;
                var19 = _closure1_slot13;
                var23 = _closure1_slot0;
                var14 = 42;
                var14 = var24[var14];
                var14 = var23.bind(var3)(var14);
                var18 = var14.Header;
                var14 = {};
                var14.title = var25;
                var20 = function() {
                    var3 = _closure1_slot13;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 43;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.GenericHeaderTitle;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.title = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var14.headerTitle = var20;
                var20 = 'center';
                var14.headerTitleAlign = var20;
                var20 = 41;
                var20 = var24[var20];
                var23 = var23.bind(var3)(var20);
                var20 = var23.isIOS;
                var23 = var20.bind(var23)();
                var20 = undefined;
                if (!var23) {
                    _fun104216_ip = 447;
                    continue _fun104216
                }
            case 445:
                var20 = 0;
            case 447:
                var14.headerStatusBarHeight = var20;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 44;
                var20 = var23[var20];
                var21 = var21.bind(var3)(var20);
                var20 = var21.getHeaderCloseButton;
                var20 = var20.bind(var21)(var22);
                var14.headerLeft = var20;
                var14 = var19.bind(var3)(var18, var14);
                var4.children = var14;
                var7 = var11.bind(var3)(var7, var4);
                var4 = new Array(4);
                var4[0] = var7;
                var6 = var6 != var17;
                if (!var6) {
                    _fun104216_ip = 545;
                    continue _fun104216
                }
            case 519:
                var14 = _closure1_slot13;
                var11 = _closure1_slot16;
                var7 = {};
                var7.render = var17;
                var7.setUri = var15;
                var6 = var14.bind(var3)(var11, var7);
            case 545:
                var4[1] = var6;
                var11 = _closure1_slot13;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var6 = 45;
                var6 = var15[var6];
                var7 = var14.bind(var3)(var6);
                var6 = {};
                var17 = _closure1_slot11;
                var17 = var17.TOGGLE;
                var6.rowMode = var17;
                var6.onSelectedDestinationChange = var16;
                var6.originDestination = var13;
                var16 = var12.bottom;
                var12 = 12;
                var13 = var15[var12];
                var13 = var14.bind(var3)(var13);
                var13 = var13.spacing;
                var13 = var13.PX_8;
                var13 = var16 + var13;
                var12 = var15[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.spacing;
                var12 = var12.PX_96;
                var12 = var13 + var12;
                var6.insetEnd = var12;
                var12 = true;
                var6.disableGradient = var12;
                var6.disableStickySections = var12;
                var6 = var11.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot13;
                var6 = _closure1_slot17;
                var5 = {};
                var5.count = var10;
                var5.isSending = var9;
                var5.onSend = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.DraftType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 12;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingHorizontal = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.paddingTop = var13;
    var4.headerContainer = var9;
    var9 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'borderWidth': 1
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9.borderRadius = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_STRONG;
    var9.borderColor = var13;
    var4.preview = var9;
    var9 = {};
    var13 = 0.5;
    var9.opacity = var13;
    var4.loading = var9;
    var9 = {};
    var13 = 'relative';
    var9.position = var13;
    var4.base = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var4.contentContainer = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'flex-end'
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingHorizontal = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.paddingVertical = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.gap = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var9.borderTopWidth = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.borderTopColor = var10;
    var4.footer = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 46;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIShareModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0() {
        _fun104230: for (var _fun104230_ip = 0;;) switch (_fun104230_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.event;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 13;
                var1 = var10[var1];
                var3 = undefined;
                var4 = var9.bind(var3)(var1);
                var2 = var4.SHARE_EVENT_DETAILS_LINK;
                var1 = {};
                var5 = var7.guild_id;
                var1.guildId = var5;
                var5 = var7.id;
                var1.guildEventId = var5;
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot18;
                var0 = {};
                var5 = 14;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["7TVSLK"];
                var5 = var6.bind(var8)(var5);
                var0.title = var5;
                var6 = var7.channel_id;
                var5 = null;
                var6 = var5 != var6;
                var5 = undefined;
                if (!var6) {
                    _fun104230_ip = 167;
                    continue _fun104230
                }
            case 145:
                var6 = {};
                var8 = 'channel';
                var6.type = var8;
                var7 = var7.channel_id;
                var6.id = var7;
                var5 = var6;
            case 167:
                var0.originDestinationId = var5;
                var0.linkText = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildEventShareModal = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.content;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot13;
        var2 = _closure1_slot18;
        var1 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 14;
        var6 = var9[var5];
        var0 = undefined;
        var6 = var8.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5["59CWHK"];
        var5 = var6.bind(var7)(var5);
        var1.title = var5;
        var5 = '';
        var1.linkText = var5;
        var4 = function() { // Environment: var4
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun104234: for (var _fun104234_ip = 0;;) switch (_fun104234_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun104234_ip = 298;
                                continue _fun104234
                            }
                        case 10:
                            var6 = arg0;
                        case 13: // try_start_0
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.sendMessageWithEmbed;
                            var1 = {
                                'channel': null,
                                'content': '',
                                'entry': null,
                                'whenReady': false,
                                'doNotNotifyOnError': true
                            };
                            var1.channel = var6;
                            var6 = _closure2_slot0;
                            var1.entry = var6;
                            var5 = _closure1_slot12;
                            var5 = var5.ICYMI;
                            var1.location = var5;
                            var1 = var3.bind(var4)(var1);
                            SaveGenerator(address = 100);
                        case 98:
                            return var1;
                        case 100:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun104234_ip = 111;
                                continue _fun104234
                            }
                        case 106: // try_end0
                            _fun104234_ip = 293;
                            continue _fun104234;
                        case 111:
                            return var1;
                        case 114: // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var2 = var3;
                            var4 = var3.body;
                            var3 = null;
                            var3 = var3 != var4;
                            var1 = var3;
                            if (!var3) {
                                _fun104234_ip = 163;
                                continue _fun104234
                            }
                        case 136:
                            var2 = var2.body;
                            var3 = var2.code;
                            var2 = _closure1_slot10;
                            var2 = var2.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
                            var1 = var3 === var2;
                        case 163:
                            var4 = var1;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 16;
                            var1 = var3[var1];
                            var9 = undefined;
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var6 = 'FORWARD_CONTENT_INVENTORY_ENTRY_ERROR';
                            var1.key = var6;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 14;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var8.bind(var9)(var5);
                            var5 = var5.t;
                            if (var4) {
                                _fun104234_ip = 271;
                                continue _fun104234
                            }
                        case 256:
                            var4 = var5.F8FvUy;
                            var4 = var6.bind(var7)(var4);
                            _fun104234_ip = 284;
                            continue _fun104234;
                        case 271:
                            var5 = var5.BC5vfD;
                            var4 = var6.bind(var7)(var5);
                        case 284:
                            var1.content = var4;
                            var1 = var2.bind(var3)(var1);
                        case 293:
                            var1 = undefined;
                            return var1;
                        case 298:
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
        var4 = var4.bind(var0)();
        var1.forwardToChannel = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.GameShareModal = var3;
    var1 = function arg0() {
        _fun104236: for (var _fun104236_ip = 0;;) switch (_fun104236_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.item;
                var _closure2_slot0 = var8;
                var4 = var0.onShare;
                var3 = _closure1_slot5;
                var2 = var3.useMemo;
                var0 = var8.guild_id;
                var1 = new Array(3);
                var1[0] = var0;
                var0 = var8.channel_id;
                var1[1] = var0;
                var0 = var8.message_ids;
                var1[2] = var0;
                var0 = function() { // Environment: var5
                    _fun104237: for (var _fun104237_ip = 0;;) switch (_fun104237_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.getChannelPermalink;
                            var0 = _closure2_slot0;
                            var2 = var0.guild_id;
                            var1 = var0.channel_id;
                            var5 = var0.message_ids;
                            var0 = 0;
                            var5 = var5[var0];
                            var0 = null;
                            var6 = var0 != var5;
                            if (!var6) {
                                _fun104237_ip = 72;
                                continue _fun104237
                            }
                        case 69:
                            var0 = var5;
                        case 72:
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var6 = var2.bind(var3)(var0, var1);
                var3 = _closure1_slot13;
                var2 = _closure1_slot18;
                var1 = {};
                var10 = var8.type;
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 18;
                var7 = var7[var0];
                var0 = undefined;
                var7 = var11.bind(var0)(var7);
                var7 = var7.GeneratedCandidateType;
                var7 = var7.TRENDING_TOPIC;
                if (!(var10 !== var7)) {
                    _fun104236_ip = 189;
                    continue _fun104236
                }
            case 130:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 14;
                var10 = var13[var7];
                var10 = var12.bind(var0)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.NPVawp;
                var7 = var10.bind(var11)(var7);
                _fun104236_ip = 246;
                continue _fun104236;
            case 189:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 14;
                var10 = var13[var9];
                var10 = var12.bind(var0)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var0)(var9);
                var9 = var9.t;
                var9 = var9.F2Smni;
                var7 = var10.bind(var11)(var9);
            case 246:
                var1.title = var7;
                var7 = {};
                var9 = 'channel';
                var7.type = var9;
                var8 = var8.channel_id;
                var7.id = var8;
                var1.originDestinationId = var7;
                var1.linkText = var6;
                var5 = function() {
                    var3 = _closure1_slot13;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.item = var4;
                    var4 = true;
                    var0.disableInteractions = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var5;
                var1.onShare = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.GeneratedCandidateShareModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1372, 4000, 3999, 660, 8916, 1346, 33, 1297, 671, 8189, 1234, 13602, 3148, 4236, 6641, 13603, 1464, 3242, 8931, 13610, 8745, 3195, 3159, 4895, 9195, 9204, 4084, 4561, 6643, 1304, 5592, 7629, 491, 4005, 6546, 7630, 1568, 478, 4709, 8922, 4705, 9106, 2]);