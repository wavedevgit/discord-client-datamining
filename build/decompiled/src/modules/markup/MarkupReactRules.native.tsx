// modules/markup/MarkupReactRules.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: MarkupText, environment: var1
        _fun35311: for (var _fun35311_ip = 0;;) switch (_fun35311_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.children;
                var6 = var2.color;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun35311_ip = 25;
                    continue _fun35311
                }
            case 19:
                var6 = 'text-default';
            case 25:
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.children = var0;
                var1.color = var0;
                var10 = {};
                var9 = var2;
                var8 = var1;
                var9 = copyDataProperties(var10, var9, var8);
                var2 = _closure1_slot13;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var7 = 'text-sm/medium';
                var0.variant = var7;
                var0.color = var6;
                var10 = var0;
                var4 = copyDataProperties(var10, var9);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var0 = function(arg0) { // Original name: MarkupLink, environment: var1
        _fun35312: for (var _fun35312_ip = 0;;) switch (_fun35312_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.state;
                var9 = var1.node;
                var _closure2_slot0 = var9;
                var8 = var1.output;
                var7 = var1.styles;
                var1 = _closure1_slot17;
                var4 = undefined;
                var10 = var1.bind(var4)();
                var1 = function() { // Original name: getValidatedUrl, environment: var6
                    _fun35313: for (var _fun35313_ip = 0;;) switch (_fun35313_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.target;
                            var1 = 'string';
                            var0 = typeof var3;
                            if (!(var1 === var0)) {
                                _fun35313_ip = 130;
                                continue _fun35313
                            }
                        case 24:
                            var2 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var5 = 20;
                            var0 = var0[var5];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.safeParseWithQuery;
                            var3 = var0.bind(var2)(var3);
                            var6 = null;
                            var2 = var6 == var3;
                            var0 = null;
                            if (var2) {
                                _fun35313_ip = 128;
                                continue _fun35313
                            }
                        case 71:
                            var2 = var3.protocol;
                            var2 = var6 == var2;
                            var0 = null;
                            if (var2) {
                                _fun35313_ip = 128;
                                continue _fun35313
                            }
                        case 86:
                            var2 = var3.hostname;
                            var2 = var6 == var2;
                            var0 = null;
                            if (var2) {
                                _fun35313_ip = 128;
                                continue _fun35313
                            }
                        case 101:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.format;
                            var0 = var1.bind(var2)(var3);
                        case 128:
                            return var0;
                        case 130:
                            var0 = null;
                            return var0;
                    }
                };
                var _closure2_slot1 = var1;
                var1 = var0.linkVariant;
                var2 = null;
                var2 = var2 != var1;
                var11 = 'text-sm/medium';
                if (!var2) {
                    _fun35312_ip = 76;
                    continue _fun35312
                }
            case 73:
                var11 = var1;
            case 76:
                var3 = _closure1_slot13;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 9;
                var1 = var12[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1.variant = var11;
                var11 = 'link';
                var1.accessibilityRole = var11;
                var7 = var7.link;
                if (var7) {
                    _fun35312_ip = 134;
                    continue _fun35312
                }
            case 128:
                var7 = var10.link;
            case 134:
                var1.style = var7;
                var7 = function(arg0) { // Original name: onPress, environment: var6
                    _fun35314: for (var _fun35314_ip = 0;;) switch (_fun35314_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var5 = var1.bind(var0)();
                            var _closure3_slot0 = var5;
                            var1 = null;
                            if (!(var1 != var5)) {
                                _fun35314_ip = 99;
                                continue _fun35314
                            }
                        case 28:
                            var1 = var2.stopPropagation;
                            var1 = var1.bind(var2)();
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 21;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleClick;
                            var1 = {};
                            var1.href = var5;
                            var5 = function() { // Original name: onConfirm, environment: var4
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 22;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.openURL;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1.onConfirm = var5;
                            var4 = function() { // Original name: trusted, environment: var4
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 23;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isLinkTrusted;
                                var0 = _closure2_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1.trusted = var4;
                            var1 = var2.bind(var3)(var1);
                        case 99:
                            return var0;
                    }
                };
                var1.onPress = var7;
                var6 = function(arg0) { // Original name: onLongPress, environment: var6
                    _fun35317: for (var _fun35317_ip = 0;;) switch (_fun35317_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var3 = var1.bind(var0)();
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun35317_ip = 67;
                                continue _fun35317
                            }
                        case 22:
                            var1 = var2.stopPropagation;
                            var1 = var1.bind(var2)();
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 24;
                            var1 = var4[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var1.urlString = var3;
                            var1 = var2.bind(var0)(var1);
                        case 67:
                            return var0;
                    }
                };
                var1.onLongPress = var6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 25;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.smartOutput;
                var5 = {};
                var15 = var5;
                var14 = var0;
                var10 = copyDataProperties(var15, var14);
                var11 = true;
                var10 = 'inLink';
                var5[var10] = var11;
                var5 = var6.bind(var7)(var9, var8, var5);
                var1.children = var5;
                var0 = var0.key;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: MarkupMention, environment: var1
        _fun35318: for (var _fun35318_ip = 0;;) switch (_fun35318_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.roleStyle;
                var0 = var1.state;
                var9 = var1.node;
                var _closure2_slot0 = var9;
                var8 = var1.output;
                var2 = var1.styles;
                var1 = _closure1_slot17;
                var4 = undefined;
                var1 = var1.bind(var4)();
                var10 = var2.mention;
                if (var10) {
                    _fun35318_ip = 66;
                    continue _fun35318
                }
            case 60:
                var10 = var1.mention;
            case 66:
                var12 = var9.colorString;
                var1 = var12;
                if (!var1) {
                    _fun35318_ip = 86;
                    continue _fun35318
                }
            case 78:
                var3 = 'username';
                var1 = var3 === var7;
            case 86:
                if (!var1) {
                    _fun35318_ip = 170;
                    continue _fun35318
                }
            case 89:
                var1 = {};
                var1.color = var12;
                var11 = var2.mention;
                var3 = null;
                var13 = var3 == var11;
                var2 = undefined;
                if (var13) {
                    _fun35318_ip = 117;
                    continue _fun35318
                }
            case 112:
                var2 = var11.backgroundColor;
            case 117:
                if (!(var3 == var2)) {
                    _fun35318_ip = 163;
                    continue _fun35318
                }
            case 121:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 26;
                var3 = var13[var3];
                var13 = var11.bind(var4)(var3);
                var11 = var13.hexWithOpacity;
                var3 = 0.1;
                var2 = var11.bind(var13)(var12, var3);
            case 163:
                var1.backgroundColor = var2;
                var10 = var1;
            case 170:
                var3 = _closure1_slot14;
                var2 = _closure1_slot19;
                var1 = {};
                var11 = 'button';
                var1.accessibilityRole = var11;
                var1.style = var10;
                var10 = null;
                var11 = var10 == var0;
                var10 = undefined;
                if (var11) {
                    _fun35318_ip = 209;
                    continue _fun35318
                }
            case 203:
                var10 = var0.textColor;
            case 209:
                var1.color = var10;
                var5 = function() { // Original name: onPress, environment: var5
                    _fun35319: for (var _fun35319_ip = 0;;) switch (_fun35319_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.userId;
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun35319_ip = 213;
                                continue _fun35319
                            }
                        case 21:
                            var1 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 14;
                            var0 = var9[var0];
                            var8 = undefined;
                            var2 = var1.bind(var8)(var0);
                            var1 = var2.show;
                            var0 = {};
                            var7 = _closure1_slot0;
                            var4 = 15;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.r0DLNm;
                            var5 = var6.bind(var10)(var5);
                            var0.title = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.Fqqbhg;
                            var5 = var6.bind(var10)(var5);
                            var0.body = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4.BddRzS;
                            var4 = var5.bind(var6)(var4);
                            var0.confirmText = var4;
                            var0 = var1.bind(var2)(var0);
                            _fun35319_ip = 256;
                            continue _fun35319;
                        case 213:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.openPrivateChannel;
                            var0 = {};
                            var0.recipientIds = var3;
                            var0 = var1.bind(var2)(var0);
                        case 256:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPress = var5;
                var5 = 'dot';
                var7 = var5 === var7;
                if (!var7) {
                    _fun35318_ip = 289;
                    continue _fun35318
                }
            case 233:
                var11 = _closure1_slot13;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 27;
                var5 = var13[var5];
                var5 = var10.bind(var4)(var5);
                var10 = var5.RoleDot;
                var5 = {
                    'color': null,
                    'colors': null,
                    'size': 'small'
                };
                var5.color = var12;
                var7 = var11.bind(var4)(var10, var5);
            case 289:
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 25;
                var6 = var10[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.smartOutput;
                var6 = var6.bind(var7)(var9, var8, var0);
                var5[1] = var6;
                var1.children = var5;
                var0 = var0.key;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0) { // Original name: MarkupBlockQuote, environment: var1
        _fun35320: for (var _fun35320_ip = 0;;) switch (_fun35320_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.styles;
                var0 = var1.state;
                var8 = var1.node;
                var7 = var1.output;
                var1 = _closure1_slot17;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var3 = _closure1_slot13;
                var2 = _closure1_slot19;
                var1 = {};
                var6 = var6.blockQuote;
                if (var6) {
                    _fun35320_ip = 64;
                    continue _fun35320
                }
            case 58:
                var6 = var9.blockQuote;
            case 64:
                var1.style = var6;
                var6 = null;
                var9 = var6 == var0;
                var6 = undefined;
                if (var9) {
                    _fun35320_ip = 85;
                    continue _fun35320
                }
            case 79:
                var6 = var0.textColor;
            case 85:
                var1.color = var6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 25;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.smartOutput;
                var5 = var5.bind(var6)(var8, var7, var0);
                var1.children = var5;
                var0 = var0.key;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0) { // Original name: MarkupInlineCode, environment: var1
        _fun35321: for (var _fun35321_ip = 0;;) switch (_fun35321_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.styles;
                var0 = var2.state;
                var8 = var2.node;
                var _closure2_slot0 = var8;
                var7 = var2.output;
                var2 = _closure1_slot17;
                var4 = undefined;
                var2 = var2.bind(var4)();
                var3 = var0.noStyleAndInteraction;
                var10 = !var3;
                if (!var10) {
                    _fun35321_ip = 66;
                    continue _fun35321
                }
            case 57:
                var3 = var0.inLink;
                var10 = !var3;
            case 66:
                var11 = 'text';
                if (!var10) {
                    _fun35321_ip = 77;
                    continue _fun35321
                }
            case 73:
                var11 = 'button';
            case 77:
                var6 = {};
                var1 = var1.inlineCode;
                if (var1) {
                    _fun35321_ip = 94;
                    continue _fun35321
                }
            case 88:
                var1 = var2.inlineCode;
            case 94:
                var14 = var6;
                var13 = var1;
                var1 = copyDataProperties(var14, var13);
                var1 = var0.inLink;
                if (!var1) {
                    _fun35321_ip = 118;
                    continue _fun35321
                }
            case 113:
                var1 = delete var6.color;
            case 118:
                var3 = _closure1_slot13;
                var2 = _closure1_slot19;
                var1 = {};
                var1.accessibilityRole = var11;
                var1.style = var6;
                var6 = null;
                var11 = var6 == var0;
                var6 = undefined;
                if (var11) {
                    _fun35321_ip = 153;
                    continue _fun35321
                }
            case 147:
                var6 = var0.textColor;
            case 153:
                var1.color = var6;
                var6 = undefined;
                if (!var10) {
                    _fun35321_ip = 167;
                    continue _fun35321
                }
            case 162:
                var6 = function() { // Environment: var9
                    _fun35322: for (var _fun35322_ip = 0;;) switch (_fun35322_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var5 = var0.content;
                            var1 = 'string';
                            var0 = typeof var5;
                            if (!(var1 === var0)) {
                                _fun35322_ip = 81;
                                continue _fun35322
                            }
                        case 23:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 16;
                            var0 = var3[var0];
                            var1 = undefined;
                            var4 = var2.bind(var1)(var0);
                            var0 = var4.copy;
                            var0 = var0.bind(var4)(var5);
                            var0 = 17;
                            var0 = var3[var0];
                            var1 = var2.bind(var1)(var0);
                            var0 = var1.presentCopiedToClipboard;
                            var0 = var0.bind(var1)();
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
            case 167:
                var1.onPress = var6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 25;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.smartOutput;
                var5 = var5.bind(var6)(var8, var7, var0);
                var1.children = var5;
                var0 = var0.key;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: MarkupCodeBlock, environment: var1
        _fun35323: for (var _fun35323_ip = 0;;) switch (_fun35323_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.styles;
                var0 = var1.state;
                var8 = var1.node;
                var7 = var1.output;
                var1 = _closure1_slot17;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var3 = _closure1_slot14;
                var2 = _closure1_slot19;
                var1 = {};
                var6 = var6.codeBlock;
                if (var6) {
                    _fun35323_ip = 64;
                    continue _fun35323
                }
            case 58:
                var6 = var9.codeBlock;
            case 64:
                var1.style = var6;
                var6 = null;
                var9 = var6 == var0;
                var6 = undefined;
                if (var9) {
                    _fun35323_ip = 85;
                    continue _fun35323
                }
            case 79:
                var6 = var0.textColor;
            case 85:
                var1.color = var6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 25;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.smartOutput;
                var6 = var5.bind(var6)(var8, var7, var0);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = '\n';
                var5[1] = var6;
                var1.children = var5;
                var0 = var0.key;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: MarkupCustomEmoji, environment: var1
        _fun35324: for (var _fun35324_ip = 0;;) switch (_fun35324_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.styles;
                var1 = var0.state;
                var9 = var0.node;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 28;
                var0 = var3[var0];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var4 = var0.AnimateEmoji;
                var0 = var4.useSetting;
                var7 = var0.bind(var4)();
                var0 = 29;
                var0 = var3[var0];
                var4 = var2.bind(var5)(var0);
                var3 = var4.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot8;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var6 = var3.bind(var4)(var2, var0);
                var0 = var9.src;
                var4 = _closure1_slot13;
                if (var0) {
                    _fun35324_ip = 167;
                    continue _fun35324
                }
            case 116:
                var3 = _closure1_slot19;
                var2 = {};
                var0 = null;
                var11 = var0 == var1;
                var0 = undefined;
                if (var11) {
                    _fun35324_ip = 139;
                    continue _fun35324
                }
            case 133:
                var0 = var1.textColor;
            case 139:
                var2.color = var0;
                var0 = var9.alt;
                var2.children = var0;
                var0 = var1.key;
                var0 = var4.bind(var5)(var3, var2, var0);
                _fun35324_ip = 254;
                continue _fun35324;
            case 167:
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 30;
                var2 = var11[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var8 = var8.emoji;
                if (var8) {
                    _fun35324_ip = 208;
                    continue _fun35324
                }
            case 198:
                var10 = _closure1_slot16;
                var8 = var10.emoji;
            case 208:
                var2.style = var8;
                var8 = {};
                var9 = var9.src;
                var8.uri = var9;
                var2.source = var8;
                var6 = !var6;
                if (!var6) {
                    _fun35324_ip = 237;
                    continue _fun35324
                }
            case 234:
                var6 = var7;
            case 237:
                var2.enableAnimation = var6;
                var1 = var1.key;
                var0 = var4.bind(var5)(var3, var2, var1);
            case 254:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0) { // Original name: MarkupChannelMention, environment: var1
        _fun35326: for (var _fun35326_ip = 0;;) switch (_fun35326_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.state;
                var _closure2_slot0 = var1;
                var14 = var0.node;
                var _closure2_slot1 = var14;
                var13 = var0.output;
                var8 = var0.styles;
                var0 = var0.variants;
                var3 = _closure1_slot17;
                var5 = undefined;
                var9 = var3.bind(var5)();
                var3 = var1.noStyleAndInteraction;
                var10 = 'button';
                if (!var3) {
                    _fun35326_ip = 72;
                    continue _fun35326
                }
            case 68:
                var10 = 'text';
            case 72:
                var6 = _closure1_slot14;
                var4 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 9;
                var3 = var11[var3];
                var3 = var4.bind(var5)(var3);
                var4 = var3.Text;
                var3 = {};
                var12 = var0.channelMentionText;
                var11 = null;
                var15 = var11 != var12;
                var0 = 'text-xs/medium';
                if (!var15) {
                    _fun35326_ip = 127;
                    continue _fun35326
                }
            case 124:
                var0 = var12;
            case 127:
                var3.variant = var0;
                var0 = var9.channelMentionText;
                var3.style = var0;
                var0 = var14.inContent;
                var0 = var11 != var0;
                var12 = null;
                if (!var0) {
                    _fun35326_ip = 168;
                    continue _fun35326
                }
            case 156:
                var0 = var14.inContent;
                var12 = var13.bind(var5)(var0, var1);
            case 168:
                var0 = new Array(3);
                var0[0] = var12;
                var12 = var14.inContent;
                var12 = var11 != var12;
                var11 = null;
                if (!var12) {
                    _fun35326_ip = 387;
                    continue _fun35326
                }
            case 194:
                var16 = _closure1_slot13;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var12 = 31;
                var12 = var19[var12];
                var15 = var18.bind(var5)(var12);
                var12 = {};
                var17 = 11;
                var17 = var19[var17];
                var17 = var18.bind(var5)(var17);
                var17 = var17.colors;
                var17 = var17.MENTION_FOREGROUND;
                var12.themedColor = var17;
                var18 = _closure1_slot4;
                var17 = var18.getFontScale;
                var18 = var17.bind(var18)();
                var17 = 1.25;
                if (!(!(var18 < var17))) {
                    _fun35326_ip = 311;
                    continue _fun35326
                }
            case 276:
                var17 = 2;
                if (!(!(var18 < var17))) {
                    _fun35326_ip = 295;
                    continue _fun35326
                }
            case 283:
                var17 = {
                    'width': 16,
                    'height': 16
                };
                _fun35326_ip = 309;
                continue _fun35326;
            case 295:
                var17 = {
                    'width': 12,
                    'height': 12
                };
            case 309:
                _fun35326_ip = 325;
                continue _fun35326;
            case 311:
                var17 = {
                    'width': 8,
                    'height': 8
                };
            case 325:
                var12.style = var17;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 32;
                var17 = var19[var17];
                var17 = var18.bind(var5)(var17);
                var12.source = var17;
                var17 = 19;
                var17 = var19[var17];
                var17 = var18.bind(var5)(var17);
                var17 = var17.Sizes;
                var17 = var17.CUSTOM;
                var12.size = var17;
                var11 = var16.bind(var5)(var15, var12);
            case 387:
                var0[1] = var11;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 25;
                var11 = var15[var11];
                var12 = var12.bind(var5)(var11);
                var11 = var12.smartOutput;
                var11 = var11.bind(var12)(var14, var13, var1);
                var0[2] = var11;
                var3.children = var0;
                var0 = var1.key;
                var6 = var6.bind(var5)(var4, var3, var0);
                var3 = var1.disablePressableChannelMention;
                var0 = var6;
                if (var3) {
                    _fun35326_ip = 535;
                    continue _fun35326
                }
            case 456:
                var4 = _closure1_slot13;
                var3 = _closure1_slot5;
                var2 = {};
                var2.accessibilityRole = var10;
                var8 = var8.channel;
                if (var8) {
                    _fun35326_ip = 484;
                    continue _fun35326
                }
            case 478:
                var8 = var9.channelMention;
            case 484:
                var2.style = var8;
                var9 = var1.noStyleAndInteraction;
                var8 = 'auto';
                if (!var9) {
                    _fun35326_ip = 505;
                    continue _fun35326
                }
            case 501:
                var8 = 'none';
            case 505:
                var2.pointerEvents = var8;
                var7 = function() { // Original name: onPress, environment: var7
                    _fun35327: for (var _fun35327_ip = 0;;) switch (_fun35327_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.noStyleAndInteraction;
                            var2 = null;
                            var0 = null;
                            if (var3) {
                                _fun35327_ip = 125;
                                continue _fun35327
                            }
                        case 20:
                            var1 = _closure2_slot1;
                            var6 = var1.channelId;
                            var5 = var1.messageId;
                            var1 = var2 != var6;
                            if (!var1) {
                                _fun35327_ip = 123;
                                continue _fun35327
                            }
                        case 41:
                            if (!(var2 == var5)) {
                                _fun35327_ip = 83;
                                continue _fun35327
                            }
                        case 45:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.transitionToChannel;
                            var2 = var2.bind(var3)(var6);
                            _fun35327_ip = 120;
                            continue _fun35327;
                        case 83:
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 12;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var7.bind(var3)(var4);
                            var3 = var4.transitionToMessage;
                            var2 = var3.bind(var4)(var6, var5);
                        case 120:
                            var1 = var2;
                        case 123:
                            var0 = undefined;
                        case 125:
                            return var0;
                    }
                };
                var2.onPress = var7;
                var2.children = var6;
                var1 = var1.key;
                var0 = var4.bind(var5)(var3, var2, var1);
            case 535:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0) { // Original name: MarkupAttachmentLink, environment: var1
        _fun35328: for (var _fun35328_ip = 0;;) switch (_fun35328_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.state;
                var _closure2_slot0 = var1;
                var14 = var0.node;
                var _closure2_slot1 = var14;
                var13 = var0.output;
                var8 = var0.styles;
                var0 = var0.variants;
                var3 = _closure1_slot17;
                var5 = undefined;
                var9 = var3.bind(var5)();
                var3 = var1.noStyleAndInteraction;
                var10 = 'button';
                if (!var3) {
                    _fun35328_ip = 72;
                    continue _fun35328
                }
            case 68:
                var10 = 'text';
            case 72:
                var6 = _closure1_slot14;
                var4 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 9;
                var3 = var11[var3];
                var3 = var4.bind(var5)(var3);
                var4 = var3.Text;
                var3 = {};
                var11 = var0.channelMentionText;
                var0 = null;
                var12 = var0 != var11;
                var0 = 'text-xs/medium';
                if (!var12) {
                    _fun35328_ip = 127;
                    continue _fun35328
                }
            case 124:
                var0 = var11;
            case 127:
                var3.variant = var0;
                var0 = var9.channelMentionText;
                var3.style = var0;
                var12 = _closure1_slot13;
                var17 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 31;
                var0 = var15[var0];
                var11 = var17.bind(var5)(var0);
                var0 = {};
                var16 = 11;
                var16 = var15[var16];
                var16 = var17.bind(var5)(var16);
                var16 = var16.colors;
                var16 = var16.MENTION_FOREGROUND;
                var0.themedColor = var16;
                var16 = 33;
                var16 = var15[var16];
                var16 = var17.bind(var5)(var16);
                var0.source = var16;
                var16 = _closure1_slot18;
                var16 = var16.bind(var5)();
                var0.size = var16;
                var11 = var12.bind(var5)(var11, var0);
                var0 = new Array(2);
                var0[0] = var11;
                var12 = _closure1_slot0;
                var11 = 25;
                var11 = var15[var11];
                var12 = var12.bind(var5)(var11);
                var11 = var12.smartOutput;
                var11 = var11.bind(var12)(var14, var13, var1);
                var0[1] = var11;
                var3.children = var0;
                var0 = var1.key;
                var6 = var6.bind(var5)(var4, var3, var0);
                var3 = var1.disablePressableChannelMention;
                var0 = var6;
                if (var3) {
                    _fun35328_ip = 377;
                    continue _fun35328
                }
            case 298:
                var4 = _closure1_slot13;
                var3 = _closure1_slot5;
                var2 = {};
                var2.accessibilityRole = var10;
                var8 = var8.channel;
                if (var8) {
                    _fun35328_ip = 326;
                    continue _fun35328
                }
            case 320:
                var8 = var9.channelMention;
            case 326:
                var2.style = var8;
                var9 = var1.noStyleAndInteraction;
                var8 = 'auto';
                if (!var9) {
                    _fun35328_ip = 347;
                    continue _fun35328
                }
            case 343:
                var8 = 'none';
            case 347:
                var2.pointerEvents = var8;
                var7 = function(arg0) { // Original name: onPress, environment: var7
                    _fun35329: for (var _fun35329_ip = 0;;) switch (_fun35329_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            var1 = var1.noStyleAndInteraction;
                            if (var1) {
                                _fun35329_ip = 75;
                                continue _fun35329
                            }
                        case 19:
                            var1 = var2.stopPropagation;
                            var1 = var1.bind(var2)();
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.openURL;
                            var0 = _closure2_slot1;
                            var0 = var0.attachmentLink;
                            var0 = var1.bind(var2)(var0);
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.onPress = var7;
                var2.children = var6;
                var1 = var1.key;
                var0 = var4.bind(var5)(var3, var2, var1);
            case 377:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0) { // Original name: MarkupCommandMention, environment: var1
        _fun35330: for (var _fun35330_ip = 0;;) switch (_fun35330_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.state;
                var8 = var1.node;
                var7 = var1.output;
                var5 = var1.styles;
                var2 = _closure1_slot17;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var3 = _closure1_slot13;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 34;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.node = var8;
                var1.output = var7;
                var1.state = var0;
                var5 = var5.mention;
                if (var5) {
                    _fun35330_ip = 94;
                    continue _fun35330
                }
            case 88:
                var5 = var6.mention;
            case 94:
                var1.style = var5;
                var0 = var0.key;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var8 = var6[var0];
    var7 = arg3;
    var0 = undefined;
    var7 = var7.bind(var0)(var8);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.PixelRatio;
    var _closure1_slot4 = var8;
    var8 = var7.Pressable;
    var _closure1_slot5 = var8;
    var8 = var7.View;
    var _closure1_slot6 = var8;
    var7 = var7.Text;
    var _closure1_slot7 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var11.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var11.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var8 = 4;
    var7 = var6[var8];
    var7 = var5.bind(var0)(var7);
    var9 = var7.EMOJI_CHAT_SIZE;
    var7 = var7.GuildFeatures;
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var10 = var7.StaticChannelRoute;
    var _closure1_slot11 = var10;
    var7 = var7.StaticChannelId;
    var _closure1_slot12 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var12 = var7.Fonts;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var10 = var7.jsx;
    var _closure1_slot13 = var10;
    var7 = var7.jsxs;
    var _closure1_slot14 = var7;
    var13 = var4.RegExp;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var16 = var4.ANSI_CONTROL_SEQUENCE_RE;
    var4 = var13.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var13
        }
    });
    var15 = 'g';
    var17 = var7;
    var4 = new var17[var13](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = {};
    var7.width = var9;
    var7.height = var9;
    var9 = 'contain';
    var7.resizeMode = var9;
    var4.emoji = var7;
    var7 = {
        'paddingEnd': 2,
        'paddingBottom': 1
    };
    var4.guildIcon = var7;
    var7 = {};
    var9 = 16;
    var7.paddingTop = var9;
    var4.list = var7;
    var7 = {};
    var7.paddingTop = var8;
    var4.listItem = var7;
    var7 = {};
    var8 = var12.CODE_BOLD;
    var7.fontFamily = var8;
    var4.bullet = var7;
    var7 = {};
    var8 = var12.PRIMARY_BOLD;
    var7.fontFamily = var8;
    var4.strong = var7;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = var12.PRIMARY_BOLD;
    var9.fontFamily = var10;
    var10 = 11;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_LINK;
    var9.color = var13;
    var4.link = var9;
    var9 = {
        'backgroundColor': null,
        'borderRadius': 3,
        'paddingHorizontal': 2,
        'alignItems': 'center'
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MENTION_BACKGROUND;
    var9.backgroundColor = var13;
    var4.channelMention = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MENTION_FOREGROUND;
    var9.color = var13;
    var4.channelMentionText = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_500;
    var9.color = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9.backgroundColor = var13;
    var4.mention = var9;
    var9 = {};
    var13 = var12.CODE_BOLD;
    var9.fontFamily = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var9.color = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var13;
    var4.inlineCode = var9;
    var9 = {};
    var12 = var12.CODE_BOLD;
    var9.fontFamily = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var9.color = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var12;
    var4.codeBlock = var9;
    var9 = {
        'borderLeftWidth': 2,
        'borderLeftColor': null,
        'paddingLeft': 4
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_NORMAL;
    var9.borderLeftColor = var10;
    var4.blockQuote = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = function() { // Original name: getIconSize, environment: var1
        _fun35331: for (var _fun35331_ip = 0;;) switch (_fun35331_ip) {
            case 0:
                var2 = _closure1_slot4;
                var0 = var2.getFontScale;
                var2 = var0.bind(var2)();
                var0 = 1;
                if (!(!(var2 < var0))) {
                    _fun35331_ip = 110;
                    continue _fun35331
                }
            case 24:
                var0 = 1.25;
                if (!(!(var2 < var0))) {
                    _fun35331_ip = 74;
                    continue _fun35331
                }
            case 38:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 19;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.Sizes;
                var0 = var0.SMALL;
                _fun35331_ip = 108;
                continue _fun35331;
            case 74:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.Sizes;
                var0 = var2.EXTRA_SMALL;
            case 108:
                _fun35331_ip = 144;
                continue _fun35331;
            case 110:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Sizes;
                var0 = var1.EXTRA_SMALL_10;
            case 144:
                return var0;
        }
    };
    var _closure1_slot18 = var4;
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupReactRules.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: createRules, environment: var1
        _fun35332: for (var _fun35332_ip = 0;;) switch (_fun35332_ip) {
            case 0:
                var2 = arguments[0];
                var0 = arguments[1];
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun35332_ip = 16;
                    continue _fun35332
                }
            case 14:
                var2 = {};
            case 16:
                var _closure2_slot0 = var2;
                if (!(var0 === var4)) {
                    _fun35332_ip = 26;
                    continue _fun35332
                }
            case 24:
                var0 = {};
            case 26:
                var _closure2_slot1 = var0;
                var0 = function() { // Environment: var3
                    _fun35333: for (var _fun35333_ip = 0;;) switch (_fun35333_ip) {
                        case 0:
                            var1 = arguments[0];
                            var2 = undefined;
                            if (!(var1 === var2)) {
                                _fun35333_ip = 13;
                                continue _fun35333
                            }
                        case 11:
                            var1 = {};
                        case 13:
                            var _closure3_slot0 = var1;
                            var0 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun35334: for (var _fun35334_ip = 0;;) switch (_fun35334_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var8 = arg1;
                                        var1 = arg2;
                                        var0 = var1.noStyleAndInteraction;
                                        var5 = _closure1_slot13;
                                        if (var0) {
                                            _fun35334_ip = 73;
                                            continue _fun35334
                                        }
                                    case 25:
                                        var4 = _closure1_slot20;
                                        var3 = {};
                                        var3.state = var1;
                                        var3.node = var9;
                                        var3.output = var8;
                                        var0 = _closure3_slot0;
                                        var3.styles = var0;
                                        var2 = var1.key;
                                        var0 = undefined;
                                        var0 = var5.bind(var0)(var4, var3, var2);
                                        _fun35334_ip = 151;
                                        continue _fun35334;
                                    case 73:
                                        var4 = _closure1_slot19;
                                        var3 = {};
                                        var2 = null;
                                        var10 = var2 == var1;
                                        var2 = undefined;
                                        var7 = undefined;
                                        if (var10) {
                                            _fun35334_ip = 98;
                                            continue _fun35334
                                        }
                                    case 92:
                                        var7 = var1.textColor;
                                    case 98:
                                        var3.color = var7;
                                        var7 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var6 = 25;
                                        var6 = var10[var6];
                                        var7 = var7.bind(var2)(var6);
                                        var6 = var7.smartOutput;
                                        var6 = var6.bind(var7)(var9, var8, var1);
                                        var3.children = var6;
                                        var1 = var1.key;
                                        var0 = var5.bind(var2)(var4, var3, var1);
                                    case 151:
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var11 = var0.bind(var4)(var2);
                var1 = function() { // Environment: var3
                    _fun35335: for (var _fun35335_ip = 0;;) switch (_fun35335_ip) {
                        case 0:
                            var3 = arguments[0];
                            var1 = arguments[1];
                            var2 = undefined;
                            if (!(var3 === var2)) {
                                _fun35335_ip = 16;
                                continue _fun35335
                            }
                        case 14:
                            var3 = {};
                        case 16:
                            var _closure3_slot0 = var3;
                            if (!(var1 === var2)) {
                                _fun35335_ip = 28;
                                continue _fun35335
                            }
                        case 24:
                            var1 = 'username';
                        case 28:
                            var _closure3_slot1 = var1;
                            var0 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun35336: for (var _fun35336_ip = 0;;) switch (_fun35336_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var8 = arg1;
                                        var1 = arg2;
                                        var0 = var1.noStyleAndInteraction;
                                        var5 = _closure1_slot13;
                                        if (var0) {
                                            _fun35336_ip = 82;
                                            continue _fun35336
                                        }
                                    case 25:
                                        var4 = _closure1_slot21;
                                        var3 = {};
                                        var2 = _closure3_slot1;
                                        var3.roleStyle = var2;
                                        var3.state = var1;
                                        var3.node = var9;
                                        var3.output = var8;
                                        var0 = _closure3_slot0;
                                        var3.styles = var0;
                                        var2 = var1.key;
                                        var0 = undefined;
                                        var0 = var5.bind(var0)(var4, var3, var2);
                                        _fun35336_ip = 160;
                                        continue _fun35336;
                                    case 82:
                                        var4 = _closure1_slot19;
                                        var3 = {};
                                        var2 = null;
                                        var10 = var2 == var1;
                                        var2 = undefined;
                                        var7 = undefined;
                                        if (var10) {
                                            _fun35336_ip = 107;
                                            continue _fun35336
                                        }
                                    case 101:
                                        var7 = var1.textColor;
                                    case 107:
                                        var3.color = var7;
                                        var7 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var6 = 25;
                                        var6 = var10[var6];
                                        var7 = var7.bind(var2)(var6);
                                        var6 = var7.smartOutput;
                                        var6 = var6.bind(var7)(var9, var8, var1);
                                        var3.children = var6;
                                        var1 = var1.key;
                                        var0 = var5.bind(var2)(var4, var3, var1);
                                    case 160:
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = arguments[2];
                var10 = var1.bind(var4)(var2, var0);
                var0 = {};
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 35;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.TEXT;
                var6 = {};
                var8 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35337: for (var _fun35337_ip = 0;;) switch (_fun35337_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg2;
                            var2 = var1.content;
                            var3 = 'string';
                            var2 = typeof var2;
                            if (!(var3 !== var2)) {
                                _fun35337_ip = 112;
                                continue _fun35337
                            }
                        case 22:
                            var5 = _closure1_slot13;
                            var4 = _closure1_slot19;
                            var3 = {};
                            var2 = null;
                            var8 = var2 == var0;
                            var2 = undefined;
                            var7 = undefined;
                            if (var8) {
                                _fun35337_ip = 54;
                                continue _fun35337
                            }
                        case 48:
                            var7 = var0.textColor;
                        case 54:
                            var3.color = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 25;
                            var6 = var8[var6];
                            var8 = var7.bind(var2)(var6);
                            var7 = var8.smartOutput;
                            var6 = arg1;
                            var6 = var7.bind(var8)(var1, var6, var0);
                            var3.children = var6;
                            var0 = var0.key;
                            var0 = var5.bind(var2)(var4, var3, var0);
                            _fun35337_ip = 117;
                            continue _fun35337;
                        case 112:
                            var0 = var1.content;
                        case 117:
                            return var0;
                    }
                };
                var6.react = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.STRIKETHROUGH;
                var6 = {};
                var8 = 36;
                var9 = var5[var8];
                var9 = var2.bind(var4)(var9);
                var12 = var9.DEFAULT_RULES;
                var9 = var5[var1];
                var9 = var2.bind(var4)(var9);
                var9 = var9.AST_KEY;
                var9 = var9.STRIKETHROUGH;
                var14 = var12[var9];
                var15 = var6;
                var9 = copyDataProperties(var15, var14);
                var12 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35338: for (var _fun35338_ip = 0;;) switch (_fun35338_ip) {
                        case 0:
                            var0 = arg2;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var1 = {};
                            var6 = 'line-through';
                            var1.textDecorationLine = var6;
                            var2.style = var1;
                            var1 = null;
                            var7 = var1 == var0;
                            var1 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun35338_ip = 52;
                                continue _fun35338
                            }
                        case 46:
                            var6 = var0.textColor;
                        case 52:
                            var2.color = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 25;
                            var5 = var7[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.smartOutput;
                            var6 = arg0;
                            var5 = arg1;
                            var5 = var7.bind(var8)(var6, var5, var0);
                            var2.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var9 = 'react';
                var6[var9] = var12;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.UNDERLINE;
                var6 = {};
                var12 = var5[var8];
                var12 = var2.bind(var4)(var12);
                var13 = var12.DEFAULT_RULES;
                var12 = var5[var1];
                var12 = var2.bind(var4)(var12);
                var12 = var12.AST_KEY;
                var12 = var12.UNDERLINE;
                var14 = var13[var12];
                var15 = var6;
                var12 = copyDataProperties(var15, var14);
                var12 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35339: for (var _fun35339_ip = 0;;) switch (_fun35339_ip) {
                        case 0:
                            var0 = arg2;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var1 = {};
                            var6 = 'underline';
                            var1.textDecorationLine = var6;
                            var2.style = var1;
                            var1 = null;
                            var7 = var1 == var0;
                            var1 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun35339_ip = 50;
                                continue _fun35339
                            }
                        case 44:
                            var6 = var0.textColor;
                        case 50:
                            var2.color = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 25;
                            var5 = var7[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.smartOutput;
                            var6 = arg0;
                            var5 = arg1;
                            var5 = var7.bind(var8)(var6, var5, var0);
                            var2.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var6[var9] = var12;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.ITALICS;
                var6 = {};
                var12 = var5[var8];
                var12 = var2.bind(var4)(var12);
                var13 = var12.DEFAULT_RULES;
                var12 = var5[var1];
                var12 = var2.bind(var4)(var12);
                var12 = var12.AST_KEY;
                var12 = var12.ITALICS;
                var14 = var13[var12];
                var15 = var6;
                var12 = copyDataProperties(var15, var14);
                var12 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35340: for (var _fun35340_ip = 0;;) switch (_fun35340_ip) {
                        case 0:
                            var0 = arg2;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var7 = {};
                            var1 = _closure2_slot0;
                            var8 = var1.em;
                            var6 = null;
                            var10 = var6 == var8;
                            var1 = undefined;
                            var9 = undefined;
                            if (var10) {
                                _fun35340_ip = 50;
                                continue _fun35340
                            }
                        case 44:
                            var9 = var8.fontStyle;
                        case 50:
                            var10 = var6 != var9;
                            var8 = 'italic';
                            if (!var10) {
                                _fun35340_ip = 64;
                                continue _fun35340
                            }
                        case 61:
                            var8 = var9;
                        case 64:
                            var7.fontStyle = var8;
                            var2.style = var7;
                            var7 = var6 == var0;
                            var6 = undefined;
                            if (var7) {
                                _fun35340_ip = 88;
                                continue _fun35340
                            }
                        case 82:
                            var6 = var0.textColor;
                        case 88:
                            var2.color = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 25;
                            var5 = var7[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.smartOutput;
                            var6 = arg0;
                            var5 = arg1;
                            var5 = var7.bind(var8)(var6, var5, var0);
                            var2.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var6[var9] = var12;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.STRONG;
                var6 = {};
                var12 = var5[var8];
                var12 = var2.bind(var4)(var12);
                var13 = var12.DEFAULT_RULES;
                var12 = var5[var1];
                var12 = var2.bind(var4)(var12);
                var12 = var12.AST_KEY;
                var12 = var12.STRONG;
                var14 = var13[var12];
                var15 = var6;
                var12 = copyDataProperties(var15, var14);
                var12 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35341: for (var _fun35341_ip = 0;;) switch (_fun35341_ip) {
                        case 0:
                            var0 = arg2;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var1 = _closure2_slot0;
                            var1 = var1.strong;
                            if (var1) {
                                _fun35341_ip = 42;
                                continue _fun35341
                            }
                        case 32:
                            var6 = _closure1_slot16;
                            var1 = var6.strong;
                        case 42:
                            var2.style = var1;
                            var1 = null;
                            var7 = var1 == var0;
                            var1 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun35341_ip = 65;
                                continue _fun35341
                            }
                        case 59:
                            var6 = var0.textColor;
                        case 65:
                            var2.color = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 25;
                            var5 = var7[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.smartOutput;
                            var6 = arg0;
                            var5 = arg1;
                            var5 = var7.bind(var8)(var6, var5, var0);
                            var2.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var6[var9] = var12;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.LINK;
                var6 = {};
                var12 = var5[var8];
                var12 = var2.bind(var4)(var12);
                var13 = var12.DEFAULT_RULES;
                var12 = var5[var1];
                var12 = var2.bind(var4)(var12);
                var12 = var12.AST_KEY;
                var12 = var12.LINK;
                var14 = var13[var12];
                var15 = var6;
                var12 = copyDataProperties(var15, var14);
                var6[var9] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.URL;
                var6 = {};
                var12 = var5[var8];
                var12 = var2.bind(var4)(var12);
                var13 = var12.DEFAULT_RULES;
                var12 = var5[var1];
                var12 = var2.bind(var4)(var12);
                var12 = var12.AST_KEY;
                var12 = var12.URL;
                var14 = var13[var12];
                var15 = var6;
                var12 = copyDataProperties(var15, var14);
                var6[var9] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.AUTOLINK;
                var6 = {};
                var12 = var5[var8];
                var12 = var2.bind(var4)(var12);
                var13 = var12.DEFAULT_RULES;
                var12 = var5[var1];
                var12 = var2.bind(var4)(var12);
                var12 = var12.AST_KEY;
                var12 = var12.AUTOLINK;
                var14 = var13[var12];
                var15 = var6;
                var12 = copyDataProperties(var15, var14);
                var6[var9] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.LINE_BREAK;
                var6 = {};
                var11 = var5[var8];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.LINE_BREAK;
                var14 = var12[var11];
                var15 = var6;
                var11 = copyDataProperties(var15, var14);
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35342: for (var _fun35342_ip = 0;;) switch (_fun35342_ip) {
                        case 0:
                            var0 = arg2;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var1 = null;
                            var6 = var1 == var0;
                            var1 = undefined;
                            var5 = undefined;
                            if (var6) {
                                _fun35342_ip = 35;
                                continue _fun35342
                            }
                        case 29:
                            var5 = var0.textColor;
                        case 35:
                            var2.color = var5;
                            var5 = '\n';
                            var2.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var6[var9] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.HIGHLIGHT;
                var6 = {};
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35343: for (var _fun35343_ip = 0;;) switch (_fun35343_ip) {
                        case 0:
                            var0 = arg2;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var1 = null;
                            var7 = var1 == var0;
                            var1 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun35343_ip = 35;
                                continue _fun35343
                            }
                        case 29:
                            var6 = var0.textColor;
                        case 35:
                            var2.color = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 25;
                            var5 = var7[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.smartOutput;
                            var6 = arg0;
                            var5 = arg1;
                            var5 = var7.bind(var8)(var6, var5, var0);
                            var2.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.BLOCK_QUOTE;
                var6 = {};
                var11 = var5[var8];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.BLOCK_QUOTE;
                var14 = var12[var11];
                var15 = var6;
                var11 = copyDataProperties(var15, var14);
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var0 = arg2;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot22;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.styles = var1;
                    var2.state = var0;
                    var1 = arg0;
                    var2.node = var1;
                    var1 = arg1;
                    var2.output = var1;
                    var1 = var0.key;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6[var9] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.PARAGRAPH;
                var6 = {};
                var11 = var5[var8];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.PARAGRAPH;
                var14 = var12[var11];
                var15 = var6;
                var11 = copyDataProperties(var15, var14);
                var12 = 600;
                var11 = 'order';
                var6[var11] = var12;
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35345: for (var _fun35345_ip = 0;;) switch (_fun35345_ip) {
                        case 0:
                            var0 = arg2;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var1 = null;
                            var7 = var1 == var0;
                            var1 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun35345_ip = 35;
                                continue _fun35345
                            }
                        case 29:
                            var6 = var0.textColor;
                        case 35:
                            var2.color = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 25;
                            var5 = var7[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.smartOutput;
                            var6 = arg0;
                            var5 = arg1;
                            var5 = var7.bind(var8)(var6, var5, var0);
                            var2.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var6[var9] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.EMOJI;
                var6 = {};
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35346: for (var _fun35346_ip = 0;;) switch (_fun35346_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot7;
                            var2 = {};
                            var0 = var1.surrogate;
                            if (var0) {
                                _fun35346_ip = 30;
                                continue _fun35346
                            }
                        case 25:
                            var0 = var1.content;
                        case 30:
                            var2.children = var0;
                            var0 = arg2;
                            var1 = var0.key;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                    }
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.CUSTOM_EMOJI;
                var6 = {};
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot25;
                    var1 = {};
                    var0 = arg2;
                    var1.state = var0;
                    var0 = arg0;
                    var1.node = var0;
                    var0 = _closure2_slot0;
                    var1.styles = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.SPOILER;
                var6 = {};
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var0 = arg2;
                    var4 = _closure1_slot13;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 37;
                    var1 = var7[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot0;
                    var8 = var6.spoiler;
                    var1.spoilerStyle = var8;
                    var6 = var6.spoilerRevealed;
                    var1.spoilerRevealedStyle = var6;
                    var6 = _closure1_slot0;
                    var5 = 25;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.smartOutput;
                    var6 = arg0;
                    var5 = arg1;
                    var5 = var7.bind(var8)(var6, var5, var0);
                    var1.children = var5;
                    var0 = var0.key;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.STATIC_ROUTE_LINK;
                var6 = {};
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35349: for (var _fun35349_ip = 0;;) switch (_fun35349_ip) {
                        case 0:
                            var9 = arg0;
                            var0 = arg2;
                            var _closure3_slot0 = var9;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 25;
                            var1 = var1[var8];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.isStaticRouteIconType;
                            var1 = var9.channelId;
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun35349_ip = 60;
                                continue _fun35349
                            }
                        case 56:
                            var1 = null;
                            return var1;
                        case 60:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var3 = 38;
                            var1 = var1[var3];
                            var1 = var2.bind(var4)(var1);
                            var10 = var1.SignPostIcon;
                            var2 = var9.channelId;
                            var1 = _closure1_slot12;
                            var1 = var1.GUILD_HOME;
                            if (!(var1 !== var2)) {
                                _fun35349_ip = 217;
                                continue _fun35349
                            }
                        case 105:
                            var1 = _closure1_slot12;
                            var1 = var1.SERVER_GUIDE;
                            if (!(var1 !== var2)) {
                                _fun35349_ip = 217;
                                continue _fun35349
                            }
                        case 119:
                            var1 = _closure1_slot12;
                            var1 = var1.CHANNEL_BROWSER;
                            if (!(var1 !== var2)) {
                                _fun35349_ip = 189;
                                continue _fun35349
                            }
                        case 133:
                            var1 = _closure1_slot12;
                            var1 = var1.CUSTOMIZE_COMMUNITY;
                            if (!(var1 !== var2)) {
                                _fun35349_ip = 189;
                                continue _fun35349
                            }
                        case 147:
                            var1 = _closure1_slot12;
                            var1 = var1.LINKED_ROLES;
                            if (!(var1 === var2)) {
                                _fun35349_ip = 240;
                                continue _fun35349
                            }
                        case 161:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 40;
                            var1 = var7[var1];
                            var1 = var2.bind(var4)(var1);
                            var10 = var1.LinkIcon;
                            _fun35349_ip = 240;
                            continue _fun35349;
                        case 189:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 39;
                            var1 = var7[var1];
                            var1 = var2.bind(var4)(var1);
                            var10 = var1.ChannelListMagnifyingGlassIcon;
                            _fun35349_ip = 240;
                            continue _fun35349;
                        case 217:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var1 = var2.bind(var4)(var1);
                            var10 = var1.SignPostIcon;
                        case 240:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot19;
                            var1 = {};
                            var7 = 'button';
                            var1.accessibilityRole = var7;
                            var7 = _closure2_slot0;
                            var7 = var7.staticRouteLink;
                            var1.style = var7;
                            var7 = null;
                            var12 = var7 == var0;
                            var7 = undefined;
                            if (var12) {
                                _fun35349_ip = 292;
                                continue _fun35349
                            }
                        case 286:
                            var7 = var0.textColor;
                        case 292:
                            var1.color = var7;
                            var5 = function() { // Original name: onPress, environment: var5
                                _fun35350: for (var _fun35350_ip = 0;;) switch (_fun35350_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var3 = var0.guildId;
                                        var4 = var0.channelId;
                                        var2 = _closure1_slot9;
                                        var1 = var2.getGuild;
                                        var2 = var1.bind(var2)(var3);
                                        var5 = null;
                                        var1 = var5 != var3;
                                        if (!var1) {
                                            _fun35350_ip = 47;
                                            continue _fun35350
                                        }
                                    case 43:
                                        var1 = var5 != var2;
                                    case 47:
                                        if (!var1) {
                                            _fun35350_ip = 76;
                                            continue _fun35350
                                        }
                                    case 50:
                                        var6 = var2.features;
                                        var5 = var6.has;
                                        var2 = _closure1_slot10;
                                        var2 = var2.COMMUNITY;
                                        var1 = var5.bind(var6)(var2);
                                    case 76:
                                        if (!var1) {
                                            _fun35350_ip = 157;
                                            continue _fun35350
                                        }
                                    case 79:
                                        var1 = _closure1_slot12;
                                        var1 = var1.GUILD_HOME;
                                        var1 = var4 !== var1;
                                        if (!var1) {
                                            _fun35350_ip = 110;
                                            continue _fun35350
                                        }
                                    case 96:
                                        var2 = _closure1_slot12;
                                        var2 = var2.SERVER_GUIDE;
                                        var1 = var4 !== var2;
                                    case 110:
                                        if (var1) {
                                            _fun35350_ip = 157;
                                            continue _fun35350
                                        }
                                    case 113:
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 12;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var2 = var4.bind(var1)(var2);
                                        var1 = var2.transitionToStaticChannelRoute;
                                        var0 = _closure1_slot11;
                                        var0 = var0.GUILD_HOME;
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 157:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.onPress = var5;
                            var7 = _closure1_slot13;
                            var5 = {};
                            var11 = _closure2_slot0;
                            var11 = var11.staticRouteLinkIcon;
                            var5.style = var11;
                            var11 = 'sm';
                            var5.size = var11;
                            var7 = var7.bind(var4)(var10, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var8 = var7.bind(var4)(var6);
                            var7 = var8.smartOutput;
                            var6 = arg1;
                            var6 = var7.bind(var8)(var9, var6, var0);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var0.key;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.INLINE_CODE;
                var6 = {};
                var11 = var5[var8];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.INLINE_CODE;
                var14 = var12[var11];
                var15 = var6;
                var11 = copyDataProperties(var15, var14);
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var0 = arg2;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot23;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.styles = var1;
                    var2.state = var0;
                    var1 = arg0;
                    var2.node = var1;
                    var1 = arg1;
                    var2.output = var1;
                    var1 = var0.key;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6[var9] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.CODE_BLOCK;
                var6 = {};
                var11 = var5[var8];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.CODE_BLOCK;
                var14 = var12[var11];
                var15 = var6;
                var11 = copyDataProperties(var15, var14);
                var11 = function(arg0, arg1, arg2) { // Original name: parse, environment: var3
                    _fun35352: for (var _fun35352_ip = 0;;) switch (_fun35352_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 36;
                            var0 = var5[var0];
                            var3 = undefined;
                            var0 = var4.bind(var3)(var0);
                            var2 = var0.DEFAULT_RULES;
                            var0 = 35;
                            var0 = var5[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.AST_KEY;
                            var0 = var0.CODE_BLOCK;
                            var5 = var2[var0];
                            var4 = var5.parse;
                            var3 = arg0;
                            var2 = arg1;
                            var0 = arg2;
                            var0 = var4.bind(var5)(var3, var2, var0);
                            var3 = var0.lang;
                            var2 = var3.toLowerCase;
                            var3 = var2.bind(var3)();
                            var2 = 'ansi';
                            if (!(var2 === var3)) {
                                _fun35352_ip = 138;
                                continue _fun35352
                            }
                        case 107:
                            var4 = var0.content;
                            var3 = var4.replaceAll;
                            var2 = _closure1_slot15;
                            var1 = '';
                            var1 = var3.bind(var4)(var2, var1);
                            var0.content = var1;
                        case 138:
                            return var0;
                    }
                };
                var12 = 'parse';
                var6[var12] = var11;
                var11 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var0 = arg2;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot24;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.styles = var1;
                    var2.state = var0;
                    var1 = arg0;
                    var2.node = var1;
                    var1 = arg1;
                    var2.output = var1;
                    var1 = var0.key;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6[var9] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.MENTION;
                var6 = {};
                var11 = var5[var8];
                var11 = var2.bind(var4)(var11);
                var13 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.MENTION;
                var14 = var13[var11];
                var15 = var6;
                var11 = copyDataProperties(var15, var14);
                var11 = function(arg0, arg1, arg2) { // Original name: parse, environment: var3
                    var0 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 36;
                    var1 = var5[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var3 = var1.DEFAULT_RULES;
                    var1 = 35;
                    var1 = var5[var1];
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.AST_KEY;
                    var1 = var1.MENTION;
                    var1 = var3[var1];
                    var5 = var1.parse;
                    var4 = arg0;
                    var3 = arg1;
                    var1 = arg2;
                    var7 = var5.bind(var2)(var4, var3, var1);
                    var8 = var0;
                    var1 = copyDataProperties(var8, var7);
                    var1 = 'guildId';
                    var0[var1] = var2;
                    return var0;
                };
                var6[var12] = var11;
                var6[var9] = var10;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.CHANNEL_MENTION;
                var6 = {};
                var10 = var5[var8];
                var10 = var2.bind(var4)(var10);
                var11 = var10.DEFAULT_RULES;
                var10 = var5[var1];
                var10 = var2.bind(var4)(var10);
                var10 = var10.AST_KEY;
                var10 = var10.CHANNEL_MENTION;
                var14 = var11[var10];
                var15 = var6;
                var10 = copyDataProperties(var15, var14);
                var10 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var0 = arg2;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot26;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2.styles = var5;
                    var2.state = var0;
                    var5 = arg0;
                    var2.node = var5;
                    var5 = arg1;
                    var2.output = var5;
                    var1 = _closure2_slot1;
                    var2.variants = var1;
                    var1 = var0.key;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6[var9] = var10;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.ATTACHMENT_LINK;
                var6 = {};
                var10 = var5[var8];
                var10 = var2.bind(var4)(var10);
                var11 = var10.DEFAULT_RULES;
                var10 = var5[var1];
                var10 = var2.bind(var4)(var10);
                var10 = var10.AST_KEY;
                var10 = var10.ATTACHMENT_LINK;
                var14 = var11[var10];
                var15 = var6;
                var10 = copyDataProperties(var15, var14);
                var10 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var0 = arg2;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot27;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2.styles = var5;
                    var2.state = var0;
                    var5 = arg0;
                    var2.node = var5;
                    var5 = arg1;
                    var2.output = var5;
                    var1 = _closure2_slot1;
                    var2.variants = var1;
                    var1 = var0.key;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6[var9] = var10;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.SOUNDBOARD;
                var6 = {};
                var10 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var0 = arg2;
                    var4 = _closure1_slot14;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {};
                    var5 = 'text-md/bold';
                    var1.variant = var5;
                    var5 = 25;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.smartOutput;
                    var6 = arg0;
                    var5 = arg1;
                    var6 = var7.bind(var8)(var6, var5, var0);
                    var5 = ['<sound:'];
                    var5[1] = var6;
                    var6 = '>';
                    var5[2] = var6;
                    var1.children = var5;
                    var0 = var0.key;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6.react = var10;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.GUILD;
                var6 = {};
                var10 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35358: for (var _fun35358_ip = 0;;) switch (_fun35358_ip) {
                        case 0:
                            var12 = arg0;
                            var0 = arg2;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 41;
                            var1 = var3[var1];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.isAndroid;
                            var1 = var1.bind(var2)();
                            var6 = 2;
                            if (var1) {
                                _fun35358_ip = 86;
                                continue _fun35358
                            }
                        case 47:
                            var2 = _closure1_slot4;
                            var1 = var2.getFontScale;
                            var2 = var1.bind(var2)();
                            var1 = 1.5;
                            var2 = var2 < var1;
                            var1 = 0;
                            if (!var2) {
                                _fun35358_ip = 83;
                                continue _fun35358
                            }
                        case 80:
                            var1 = 1;
                        case 83:
                            var6 = var1;
                        case 86:
                            var1 = var12.icon;
                            var10 = null;
                            var1 = var10 != var1;
                            var8 = null;
                            if (!var1) {
                                _fun35358_ip = 286;
                                continue _fun35358
                            }
                        case 105:
                            var3 = _closure1_slot13;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var11 = 18;
                            var1 = var1[var11];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var5 = {};
                            var5.top = var6;
                            var1.style = var5;
                            var5 = var12.icon;
                            var1.icon = var5;
                            var6 = _closure1_slot4;
                            var5 = var6.getFontScale;
                            var6 = var5.bind(var6)();
                            var5 = 1;
                            if (!(!(var6 < var5))) {
                                _fun35358_ip = 247;
                                continue _fun35358
                            }
                        case 171:
                            var5 = 1.25;
                            if (!(!(var6 < var5))) {
                                _fun35358_ip = 216;
                                continue _fun35358
                            }
                        case 185:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var11];
                            var5 = var6.bind(var4)(var5);
                            var5 = var5.GuildIconSizes;
                            var5 = var5.XXSMALL;
                            _fun35358_ip = 245;
                            continue _fun35358;
                        case 216:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var6 = var7.bind(var4)(var6);
                            var6 = var6.GuildIconSizes;
                            var5 = var6.XXSMALL_12;
                        case 245:
                            _fun35358_ip = 276;
                            continue _fun35358;
                        case 247:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var6 = var7.bind(var4)(var6);
                            var6 = var6.GuildIconSizes;
                            var5 = var6.XXXSMALL;
                        case 276:
                            var1.size = var5;
                            var8 = var3.bind(var4)(var2, var1);
                        case 286:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot19;
                            var1 = {};
                            var6 = var10 == var0;
                            var5 = undefined;
                            if (var6) {
                                _fun35358_ip = 311;
                                continue _fun35358
                            }
                        case 305:
                            var5 = var0.textColor;
                        case 311:
                            var1.color = var5;
                            var7 = _closure1_slot13;
                            var6 = _closure1_slot6;
                            var5 = {};
                            var11 = _closure1_slot16;
                            var11 = var11.guildIcon;
                            var5.style = var11;
                            var5.children = var8;
                            var6 = var7.bind(var4)(var6, var5);
                            var5 = new Array(2);
                            var5[0] = var6;
                            var8 = _closure1_slot13;
                            var7 = _closure1_slot19;
                            var6 = {};
                            var11 = var10 == var0;
                            var10 = undefined;
                            if (var11) {
                                _fun35358_ip = 382;
                                continue _fun35358
                            }
                        case 376:
                            var10 = var0.textColor;
                        case 382:
                            var6.color = var10;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 25;
                            var9 = var11[var9];
                            var11 = var10.bind(var4)(var9);
                            var10 = var11.smartOutput;
                            var9 = arg1;
                            var9 = var10.bind(var11)(var12, var9, var0);
                            var6.children = var9;
                            var6 = var8.bind(var4)(var7, var6);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var0.key;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var6.react = var10;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.CHANNEL;
                var6 = {};
                var10 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35359: for (var _fun35359_ip = 0;;) switch (_fun35359_ip) {
                        case 0:
                            var9 = arg0;
                            var0 = arg2;
                            var2 = var9.iconType;
                            var5 = null;
                            var3 = var5 != var2;
                            var1 = 'text';
                            var10 = var1;
                            if (!var3) {
                                _fun35359_ip = 31;
                                continue _fun35359
                            }
                        case 28:
                            var10 = var2;
                        case 31:
                            var12 = 2;
                            if (!(var1 === var10)) {
                                _fun35359_ip = 40;
                                continue _fun35359
                            }
                        case 38:
                            var12 = 0;
                        case 40:
                            var3 = _closure1_slot13;
                            var8 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var1 = 31;
                            var1 = var11[var1];
                            var4 = undefined;
                            var2 = var8.bind(var4)(var1);
                            var1 = {};
                            var7 = 11;
                            var7 = var11[var7];
                            var7 = var8.bind(var4)(var7);
                            var7 = var7.colors;
                            var7 = var7.MENTION_FOREGROUND;
                            var1.themedColor = var7;
                            var8 = _closure1_slot0;
                            var7 = 42;
                            var7 = var11[var7];
                            var8 = var8.bind(var4)(var7);
                            var7 = var8.getChannelMentionIcon;
                            var7 = var7.bind(var8)(var10);
                            var1.source = var7;
                            var7 = _closure1_slot18;
                            var7 = var7.bind(var4)();
                            var1.size = var7;
                            var7 = {};
                            var8 = 1;
                            var7.top = var8;
                            var1.style = var7;
                            var10 = var3.bind(var4)(var2, var1);
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot19;
                            var1 = {};
                            var7 = var5 == var0;
                            var5 = undefined;
                            if (var7) {
                                _fun35359_ip = 186;
                                continue _fun35359
                            }
                        case 180:
                            var5 = var0.textColor;
                        case 186:
                            var1.color = var5;
                            var8 = _closure1_slot13;
                            var7 = _closure1_slot6;
                            var5 = {};
                            var11 = {};
                            var11.paddingEnd = var12;
                            var5.style = var11;
                            var5.children = var10;
                            var7 = var8.bind(var4)(var7, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 25;
                            var6 = var8[var6];
                            var8 = var7.bind(var4)(var6);
                            var7 = var8.smartOutput;
                            var6 = arg1;
                            var6 = var7.bind(var8)(var9, var6, var0);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var0.key;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var6.react = var10;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.COMMAND_MENTION;
                var6 = {};
                var10 = var5[var8];
                var10 = var2.bind(var4)(var10);
                var11 = var10.DEFAULT_RULES;
                var10 = var5[var1];
                var10 = var2.bind(var4)(var10);
                var10 = var10.AST_KEY;
                var10 = var10.COMMAND_MENTION;
                var14 = var11[var10];
                var15 = var6;
                var10 = copyDataProperties(var15, var14);
                var10 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var0 = arg2;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot28;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.styles = var1;
                    var2.state = var0;
                    var1 = arg0;
                    var2.node = var1;
                    var1 = arg1;
                    var2.output = var1;
                    var1 = var0.key;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6[var9] = var10;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.TIMESTAMP;
                var6 = {};
                var10 = var5[var8];
                var10 = var2.bind(var4)(var10);
                var11 = var10.DEFAULT_RULES;
                var10 = var5[var1];
                var10 = var2.bind(var4)(var10);
                var10 = var10.AST_KEY;
                var10 = var10.TIMESTAMP;
                var14 = var11[var10];
                var15 = var6;
                var10 = copyDataProperties(var15, var14);
                var10 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var4 = _closure1_slot13;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 43;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var0 = arg0;
                    var1.node = var0;
                    var0 = _closure2_slot0;
                    var0 = var0.timestamp;
                    var1.style = var0;
                    var0 = arg2;
                    var0 = var0.key;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6[var9] = var10;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.LIST;
                var6 = {};
                var8 = var5[var8];
                var8 = var2.bind(var4)(var8);
                var10 = var8.DEFAULT_RULES;
                var8 = var5[var1];
                var8 = var2.bind(var4)(var8);
                var8 = var8.AST_KEY;
                var8 = var8.LIST;
                var14 = var10[var8];
                var15 = var6;
                var8 = copyDataProperties(var15, var14);
                var8 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35362: for (var _fun35362_ip = 0;;) switch (_fun35362_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg2;
                            var _closure3_slot0 = var2;
                            var3 = arg1;
                            var _closure3_slot1 = var3;
                            var _closure3_slot2 = var0;
                            var3 = var0.level;
                            var4 = null;
                            var5 = var4 != var3;
                            var3 = 0;
                            if (!var5) {
                                _fun35362_ip = 46;
                                continue _fun35362
                            }
                        case 40:
                            var3 = var0.level;
                        case 46:
                            var _closure3_slot3 = var3;
                            var3 = var2.start;
                            if (!(var4 == var3)) {
                                _fun35362_ip = 66;
                                continue _fun35362
                            }
                        case 59:
                            var3 = var0.start;
                            _fun35362_ip = 71;
                            continue _fun35362;
                        case 66:
                            var3 = var2.start;
                        case 71:
                            var _closure3_slot4 = var3;
                            var3 = var2.items;
                            var2 = var3.map;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun35363: for (var _fun35363_ip = 0;;) switch (_fun35363_ip) {
                                    case 0:
                                        var15 = arg0;
                                        var8 = arg1;
                                        var _closure4_slot0 = var15;
                                        var0 = _closure3_slot3;
                                        var7 = '⚬ ';
                                        var9 = 0;
                                        if (!(var9 === var0)) {
                                            _fun35363_ip = 170;
                                            continue _fun35363
                                        }
                                    case 34:
                                        var0 = _closure3_slot0;
                                        var0 = var0.ordered;
                                        var1 = 'boolean';
                                        var0 = typeof var0;
                                        if (!(var1 === var0)) {
                                            _fun35363_ip = 78;
                                            continue _fun35363
                                        }
                                    case 55:
                                        var0 = _closure3_slot0;
                                        var0 = var0.ordered;
                                        if (!var0) {
                                            _fun35363_ip = 78;
                                            continue _fun35363
                                        }
                                    case 68:
                                        var1 = _closure3_slot4;
                                        var0 = null;
                                        if (!(var0 == var1)) {
                                            _fun35363_ip = 130;
                                            continue _fun35363
                                        }
                                    case 78:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 41;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        var0 = var1.isAndroid;
                                        var1 = var0.bind(var1)();
                                        var0 = '● ';
                                        if (!var1) {
                                            _fun35363_ip = 128;
                                            continue _fun35363
                                        }
                                    case 122:
                                        var0 = '• ';
                                    case 128:
                                        _fun35363_ip = 167;
                                        continue _fun35363;
                                    case 130:
                                        var1 = _closure3_slot4;
                                        var4 = var1 + var8;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var3 = var1.concat;
                                        var2 = '';
                                        var1 = '. ';
                                        var0 = var3.bind(var2)(var4, var1);
                                    case 167:
                                        var7 = var0;
                                    case 170:
                                        var14 = {};
                                        var0 = _closure3_slot2;
                                        var23 = var14;
                                        var22 = var0;
                                        var1 = copyDataProperties(var23, var22);
                                        var3 = var0.key;
                                        var0 = global;
                                        var1 = var0.HermesInternal;
                                        var2 = var1.concat;
                                        var11 = '';
                                        var1 = '-';
                                        var2 = var2.bind(var11)(var3, var1, var8);
                                        var1 = 'key';
                                        var14[var1] = var2;
                                        var1 = _closure3_slot3;
                                        var10 = 1;
                                        var2 = var1 + var10;
                                        var1 = 'level';
                                        var14[var1] = var2;
                                        var1 = _closure3_slot4;
                                        var18 = null;
                                        if (!(var18 == var1)) {
                                            _fun35363_ip = 264;
                                            continue _fun35363
                                        }
                                    case 258:
                                        var2 = _closure3_slot4;
                                        _fun35363_ip = 272;
                                        continue _fun35363;
                                    case 264:
                                        var1 = _closure3_slot4;
                                        var2 = var1 + var10;
                                    case 272:
                                        var1 = 'start';
                                        var14[var1] = var2;
                                        var _closure4_slot1 = var14;
                                        var4 = _closure1_slot14;
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 9;
                                        var1 = var3[var1];
                                        var3 = undefined;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = var1.Text;
                                        var1 = {};
                                        var12 = _closure1_slot16;
                                        var12 = var12.listItem;
                                        var1.style = var12;
                                        var12 = 'text-sm/medium';
                                        var1.variant = var12;
                                        var17 = _closure1_slot14;
                                        var16 = _closure1_slot19;
                                        var12 = {};
                                        var6 = _closure1_slot16;
                                        var6 = var6.bullet;
                                        var12.style = var6;
                                        var6 = _closure3_slot2;
                                        var18 = var18 == var6;
                                        var6 = undefined;
                                        if (var18) {
                                            _fun35363_ip = 390;
                                            continue _fun35363
                                        }
                                    case 380:
                                        var18 = _closure3_slot2;
                                        var6 = var18.textColor;
                                    case 390:
                                        var12.color = var6;
                                        var6 = _closure3_slot3;
                                        var6 = var6 > var9;
                                        var9 = var11;
                                        if (!var6) {
                                            _fun35363_ip = 429;
                                            continue _fun35363
                                        }
                                    case 408:
                                        var19 = '  ';
                                        var18 = var19.repeat;
                                        var6 = _closure3_slot3;
                                        var9 = var18.bind(var19)(var6);
                                    case 429:
                                        var6 = new Array(2);
                                        var6[0] = var9;
                                        var6[1] = var7;
                                        var12.children = var6;
                                        var6 = _closure3_slot2;
                                        var23 = var6.key;
                                        var6 = var0.HermesInternal;
                                        var18 = var6.concat;
                                        var7 = 'list-';
                                        var6 = '-item-';
                                        var20 = '-bullet';
                                        var24 = var7;
                                        var22 = var6;
                                        var21 = var8;
                                        var9 = var24[var18](var23, var22, var21, var20, var19);
                                        var12 = var17.bind(var3)(var16, var12, var9);
                                        var9 = new Array(3);
                                        var9[0] = var12;
                                        var16 = var0.Array;
                                        var12 = var16.isArray;
                                        var12 = var12.bind(var16)(var15);
                                        if (var12) {
                                            _fun35363_ip = 542;
                                            continue _fun35363
                                        }
                                    case 530:
                                        var12 = _closure3_slot1;
                                        var12 = var12.bind(var3)(var15, var14);
                                        _fun35363_ip = 557;
                                        continue _fun35363;
                                    case 542:
                                        var14 = var15.map;
                                        var13 = function(arg0, arg1) { // Environment: var13
                                            _fun35364: for (var _fun35364_ip = 0;;) switch (_fun35364_ip) {
                                                case 0:
                                                    var10 = arg0;
                                                    var4 = arg1;
                                                    var1 = var10.type;
                                                    var0 = 'list';
                                                    var7 = var0 === var1;
                                                    var0 = 1;
                                                    var2 = var4 + var0;
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.length;
                                                    var6 = var2 === var1;
                                                    var3 = _closure1_slot14;
                                                    var1 = _closure1_slot3;
                                                    var2 = var1.Fragment;
                                                    var1 = {};
                                                    var8 = var7;
                                                    if (!var8) {
                                                        _fun35364_ip = 71;
                                                        continue _fun35364
                                                    }
                                                case 67:
                                                    var8 = '\n';
                                                case 71:
                                                    var5 = new Array(3);
                                                    var5[0] = var8;
                                                    var9 = _closure3_slot1;
                                                    var8 = _closure4_slot1;
                                                    var0 = undefined;
                                                    var8 = var9.bind(var0)(var10, var8);
                                                    var5[1] = var8;
                                                    if (!var6) {
                                                        _fun35364_ip = 108;
                                                        continue _fun35364
                                                    }
                                                case 105:
                                                    var6 = !var7;
                                                case 108:
                                                    if (!var6) {
                                                        _fun35364_ip = 115;
                                                        continue _fun35364
                                                    }
                                                case 111:
                                                    var6 = '\n';
                                                case 115:
                                                    var5[2] = var6;
                                                    var1.children = var5;
                                                    var0 = var3.bind(var0)(var2, var1, var4);
                                                    return var0;
                                            }
                                        };
                                        var12 = var14.bind(var15)(var13);
                                    case 557:
                                        var9[1] = var12;
                                        var12 = _closure3_slot0;
                                        var12 = var12.items;
                                        var13 = var12.length;
                                        var12 = var8 + var10;
                                        var10 = '  ';
                                        if (!(var13 === var12)) {
                                            _fun35363_ip = 593;
                                            continue _fun35363
                                        }
                                    case 590:
                                        var10 = var11;
                                    case 593:
                                        var9[2] = var10;
                                        var1.children = var9;
                                        var5 = _closure3_slot2;
                                        var5 = var5.key;
                                        var0 = var0.HermesInternal;
                                        var0 = var0.concat;
                                        var0 = var0.bind(var7)(var5, var6, var8);
                                        var0 = var4.bind(var3)(var2, var1, var0);
                                        return var0;
                                }
                            };
                            var5 = var2.bind(var3)(var1);
                            var4 = _closure1_slot13;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {};
                            var6 = _closure1_slot16;
                            var6 = var6.list;
                            var1.style = var6;
                            var6 = 'text-sm/medium';
                            var1.variant = var6;
                            var1.children = var5;
                            var6 = var0.key;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = 'list-';
                            var0 = var5.bind(var0)(var6);
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var6[var9] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.HEADING;
                var6 = {};
                var8 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35365: for (var _fun35365_ip = 0;;) switch (_fun35365_ip) {
                        case 0:
                            var8 = arg0;
                            var0 = arg2;
                            var2 = var8.level;
                            var6 = 'heading-xl/bold';
                            var1 = 1;
                            if (!(var1 !== var2)) {
                                _fun35365_ip = 51;
                                continue _fun35365
                            }
                        case 25:
                            var3 = var8.level;
                            var1 = 'heading-md/bold';
                            var2 = 2;
                            if (!(var2 === var3)) {
                                _fun35365_ip = 48;
                                continue _fun35365
                            }
                        case 42:
                            var1 = 'heading-lg/bold';
                        case 48:
                            var6 = var1;
                        case 51:
                            var4 = _closure1_slot14;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {};
                            var1.variant = var6;
                            var7 = var0.forceWhite;
                            var6 = 'text-strong';
                            if (!var7) {
                                _fun35365_ip = 110;
                                continue _fun35365
                            }
                        case 106:
                            var6 = 'white';
                        case 110:
                            var1.color = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 25;
                            var5 = var7[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.smartOutput;
                            var5 = arg1;
                            var6 = var6.bind(var7)(var8, var5, var0);
                            var5 = new Array(2);
                            var5[0] = var6;
                            var6 = '\n';
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var6.react = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.SUBTEXT;
                var6 = {};
                var8 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    var0 = arg2;
                    var4 = _closure1_slot14;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {
                        'variant': 'text-sm/normal',
                        'color': 'text-muted'
                    };
                    var5 = 25;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.smartOutput;
                    var6 = arg0;
                    var5 = arg1;
                    var6 = var7.bind(var8)(var6, var5, var0);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = '\n';
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var0.key;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6.react = var8;
                var0[var7] = var6;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.AST_KEY;
                var2 = var1.SILENT_PREFIX;
                var1 = {};
                var3 = function(arg0, arg1, arg2) { // Original name: react, environment: var3
                    _fun35367: for (var _fun35367_ip = 0;;) switch (_fun35367_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg2;
                            var2 = var1.content;
                            var3 = 'string';
                            var2 = typeof var2;
                            if (!(var3 !== var2)) {
                                _fun35367_ip = 112;
                                continue _fun35367
                            }
                        case 22:
                            var5 = _closure1_slot13;
                            var4 = _closure1_slot19;
                            var3 = {};
                            var2 = null;
                            var8 = var2 == var0;
                            var2 = undefined;
                            var7 = undefined;
                            if (var8) {
                                _fun35367_ip = 54;
                                continue _fun35367
                            }
                        case 48:
                            var7 = var0.textColor;
                        case 54:
                            var3.color = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 25;
                            var6 = var8[var6];
                            var8 = var7.bind(var2)(var6);
                            var7 = var8.smartOutput;
                            var6 = arg1;
                            var6 = var7.bind(var8)(var1, var6, var0);
                            var3.children = var6;
                            var0 = var0.key;
                            var0 = var5.bind(var2)(var4, var3, var0);
                            _fun35367_ip = 117;
                            continue _fun35367;
                        case 112:
                            var0 = var1.content;
                        case 117:
                            return var0;
                    }
                };
                var1.react = var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.default = var4;
    var2.MarkupText = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: plainMentionRenderer, environment: var1
        _fun35368: for (var _fun35368_ip = 0;;) switch (_fun35368_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.content;
                var2 = 'string';
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun35368_ip = 65;
                    continue _fun35368
                }
            case 19:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 25;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.smartOutput;
                var2 = arg1;
                var0 = arg2;
                var0 = var3.bind(var4)(var1, var2, var0);
                _fun35368_ip = 70;
                continue _fun35368;
            case 65:
                var0 = var1.content;
            case 70:
                return var0;
        }
    };
    var2.plainMentionRenderer = var3;
    var1 = function(arg0) { // Original name: plainSpoilerRenderer, environment: var1
        _fun35369: for (var _fun35369_ip = 0;;) switch (_fun35369_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.content;
                var0 = '███';
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun35369_ip = 59;
                    continue _fun35369
                }
            case 25:
                var4 = var1.content;
                var3 = var4.replace;
                var2 = /[^\n]/g;
                var1 = '█';
                var0 = var3.bind(var4)(var2, var1);
            case 59:
                return var0;
        }
    };
    var2.plainSpoilerRenderer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1410, 660, 1379, 483, 33, 3900, 3901, 1297, 671, 3903, 3905, 3962, 1234, 5252, 3106, 7356, 4045, 1457, 5851, 3103, 9659, 9199, 7701, 3199, 8154, 1348, 566, 4666, 4887, 9808, 12252, 7687, 4748, 8754, 8756, 11039, 11004, 3213, 478, 4769, 8757, 2]);