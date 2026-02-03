// utils/EmbedUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun36768: for (var _fun36768_ip = 0;;) switch (_fun36768_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.width;
                var2 = var1.height;
                var1 = 0;
                var0 = var0 > var1;
                if (!var0) {
                    _fun36768_ip = 26;
                    continue _fun36768
                }
            case 22:
                var0 = var2 > var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun36769: for (var _fun36769_ip = 0;;) switch (_fun36769_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.url;
                var8 = var0.proxy_url;
                var7 = var0.width;
                var6 = var0.height;
                var4 = var0.placeholder;
                var3 = var0.placeholder_version;
                var1 = var0.description;
                var5 = var0.flags;
                var2 = var0.content_type;
                var0 = {};
                var0.url = var9;
                var0.proxyURL = var8;
                var0.width = var7;
                var0.height = var6;
                var0.placeholder = var4;
                var0.placeholderVersion = var3;
                var0.description = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var9 = var4.bind(var1)(var3);
                var8 = var9.hasFlag;
                var3 = null;
                var10 = var3 != var5;
                var7 = 0;
                if (!var10) {
                    _fun36769_ip = 130;
                    continue _fun36769
                }
            case 127:
                var7 = var5;
            case 130:
                var6 = _closure1_slot3;
                var6 = var6.IS_ANIMATED;
                var6 = var8.bind(var9)(var7, var6);
                var0.srcIsAnimated = var6;
                var6 = var3 != var5;
                var4 = 0;
                if (!var6) {
                    _fun36769_ip = 163;
                    continue _fun36769
                }
            case 160:
                var4 = var5;
            case 163:
                var0.flags = var4;
                var3 = var3 != var2;
                var1 = undefined;
                if (!var3) {
                    _fun36769_ip = 179;
                    continue _fun36769
                }
            case 176:
                var1 = var2;
            case 179:
                var0.contentType = var1;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var2 = global;
        var5 = var2.URL;
        var1 = var5.prototype;
        var3 = Object.create(var1, {
            constructor: {
                value: var5
            }
        });
        var6 = arg0;
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot1 = var1;
        var3 = var2.Object;
        var2 = var3.keys;
        var3 = var2.bind(var3)(var4);
        var2 = var3.forEach;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var1 = _closure2_slot1;
            var2 = var1.searchParams;
            var1 = var2.set;
            var0 = _closure2_slot0;
            var0 = var0[var3];
            var0 = var1.bind(var2)(var3, var0);
            var0 = undefined;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot17 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var7 = var6.MessageEmbedMediaFlags;
    var _closure1_slot3 = var7;
    var7 = var6.MessageEmbedTypes;
    var _closure1_slot4 = var7;
    var6 = var6.Permissions;
    var _closure1_slot5 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.EMBED_TYPES_WITH_PARSEABLE_FIELDS;
    var _closure1_slot6 = var6;
    var6 = /sketchfab/i;
    var _closure1_slot7 = var6;
    var6 = /^https:\\/\\ / sketchfab\.com / i;
    var _closure1_slot8 = var6;
    var6 = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i;
    var _closure1_slot9 = var6;
    var6 = /^https?:\\/\\ / ( ? : canary\. | ptb\. | www\.) ? discord( ? : app) ? \.com\\ / channels\\ / ([0 - 9] + )\\ / shop$ / ;
    var _closure1_slot10 = var6;
    var6 = /^https?:\\/\\ / ( ? : canary\. | ptb\. | www\.) ? discord( ? : app) ? \.com\\ / channels\\ / ([0 - 9] + )\\ / shop\\ / ([0 - 9] + ) $ / ;
    var _closure1_slot11 = var6;
    var7 = var3.RegExp;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot12 = var3;
    var3 = /^https?:\\/\\ / ( ? : canary\. | ptb\. | www\.) ? discord( ? : app) ? \.com\\ / channels\\ / ([0 - 9] + )\\ / game - shop\\ / ([0 - 9] + )\\ / ([0 - 9] + ) / ;
    var _closure1_slot13 = var3;
    var3 = /^https?:\\/\\ / ( ? : canary\. | ptb\. | www\.) ? discord( ? : app) ? \.com\\ / game - shop\\ / ([0 - 9] + )\\ / ([0 - 9] + ) / ;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/EmbedUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2() {
        _fun36772: for (var _fun36772_ip = 0;;) switch (_fun36772_ip) {
            case 0:
                var12 = arg1;
                var2 = arg2;
                var0 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var6 = undefined;
                var5 = var4.bind(var6)(var1);
                var4 = var5.uniqueId;
                var1 = 'embed_';
                var1 = var4.bind(var5)(var1);
                var0.id = var1;
                var1 = var2.url;
                var0.url = var1;
                var1 = var2.type;
                var0.type = var1;
                var1 = var2.title;
                var0.rawTitle = var1;
                var1 = var2.description;
                var0.rawDescription = var1;
                var1 = var2.reference_id;
                var0.referenceId = var1;
                var1 = var2.flags;
                var0.flags = var1;
                var1 = var2.content_scan_version;
                var0.contentScanVersion = var1;
                var4 = var2.footer;
                var1 = null;
                if (!(var1 != var4)) {
                    _fun36772_ip = 194;
                    continue _fun36772
                }
            case 137:
                var4 = {};
                var5 = var2.footer;
                var5 = var5.text;
                var4.text = var5;
                var5 = var2.footer;
                var5 = var5.icon_url;
                var4.iconURL = var5;
                var5 = var2.footer;
                var5 = var5.proxy_icon_url;
                var4.iconProxyURL = var5;
                var0.footer = var4;
            case 194:
                var4 = var2.author;
                var4 = var1 != var4;
                if (!var4) {
                    _fun36772_ip = 222;
                    continue _fun36772
                }
            case 207:
                var5 = var2.author;
                var5 = var5.name;
                var4 = var1 != var5;
            case 222:
                if (!var4) {
                    _fun36772_ip = 297;
                    continue _fun36772
                }
            case 225:
                var4 = {};
                var5 = var2.author;
                var5 = var5.name;
                var4.name = var5;
                var5 = var2.author;
                var5 = var5.url;
                var4.url = var5;
                var5 = var2.author;
                var5 = var5.icon_url;
                var4.iconURL = var5;
                var5 = var2.author;
                var5 = var5.proxy_icon_url;
                var4.iconProxyURL = var5;
                var0.author = var4;
            case 297:
                var4 = var2.provider;
                var4 = var1 != var4;
                if (!var4) {
                    _fun36772_ip = 325;
                    continue _fun36772
                }
            case 310:
                var5 = var2.provider;
                var5 = var5.name;
                var4 = var1 != var5;
            case 325:
                if (!var4) {
                    _fun36772_ip = 366;
                    continue _fun36772
                }
            case 328:
                var4 = {};
                var5 = var2.provider;
                var5 = var5.name;
                var4.name = var5;
                var5 = var2.provider;
                var5 = var5.url;
                var4.url = var5;
                var0.provider = var4;
            case 366:
                var4 = var2.timestamp;
                if (!(var1 != var4)) {
                    _fun36772_ip = 441;
                    continue _fun36772
                }
            case 376:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 5;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = global;
                var8 = var4.Date;
                var15 = var2.timestamp;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var16 = var7;
                var4 = new var16[var8](var15, var14);
                var4 = var4 instanceof Object ? var4 : var7;
                var4 = var5.bind(var6)(var4);
                var0.timestamp = var4;
            case 441:
                var4 = var2.color;
                if (!(var1 != var4)) {
                    _fun36772_ip = 495;
                    continue _fun36772
                }
            case 450:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var8 = var5.bind(var6)(var4);
                var7 = var8.int2hsl;
                var5 = var2.color;
                var4 = false;
                var4 = var7.bind(var8)(var5, var4);
                var0.color = var4;
            case 495:
                var4 = var2.thumbnail;
                if (!(var1 != var4)) {
                    _fun36772_ip = 600;
                    continue _fun36772
                }
            case 505:
                var5 = _closure1_slot15;
                var4 = var2.thumbnail;
                var4 = var5.bind(var6)(var4);
                if (!var4) {
                    _fun36772_ip = 600;
                    continue _fun36772
                }
            case 523:
                var5 = var0.type;
                var4 = _closure1_slot4;
                var4 = var4.ARTICLE;
                if (!(var4 !== var5)) {
                    _fun36772_ip = 579;
                    continue _fun36772
                }
            case 542:
                var4 = _closure1_slot4;
                var4 = var4.IMAGE;
                if (!(var4 !== var5)) {
                    _fun36772_ip = 579;
                    continue _fun36772
                }
            case 556:
                var5 = _closure1_slot16;
                var4 = var2.thumbnail;
                var4 = var5.bind(var6)(var4);
                var0.thumbnail = var4;
                _fun36772_ip = 600;
                continue _fun36772;
            case 579:
                var5 = _closure1_slot16;
                var4 = var2.thumbnail;
                var4 = var5.bind(var6)(var4);
                var0.image = var4;
            case 600:
                var4 = var2.image;
                var4 = var1 != var4;
                if (!var4) {
                    _fun36772_ip = 628;
                    continue _fun36772
                }
            case 613:
                var7 = _closure1_slot15;
                var5 = var2.image;
                var4 = var7.bind(var6)(var5);
            case 628:
                if (!var4) {
                    _fun36772_ip = 652;
                    continue _fun36772
                }
            case 631:
                var5 = _closure1_slot16;
                var4 = var2.image;
                var4 = var5.bind(var6)(var4);
                var0.image = var4;
            case 652:
                var4 = var2.video;
                if (!(var1 != var4)) {
                    _fun36772_ip = 1060;
                    continue _fun36772
                }
            case 665:
                var4 = var0.thumbnail;
                var4 = var1 == var4;
                if (!var4) {
                    _fun36772_ip = 694;
                    continue _fun36772
                }
            case 678:
                var5 = var2.video;
                var5 = var5.proxy_url;
                var4 = var1 != var5;
            case 694:
                if (!var4) {
                    _fun36772_ip = 712;
                    continue _fun36772
                }
            case 697:
                var7 = _closure1_slot15;
                var5 = var2.video;
                var4 = var7.bind(var6)(var5);
            case 712:
                if (!var4) {
                    _fun36772_ip = 791;
                    continue _fun36772
                }
            case 715:
                var4 = {};
                var5 = var2.video;
                var5 = var5.width;
                var4.width = var5;
                var5 = var2.video;
                var5 = var5.height;
                var4.height = var5;
                var8 = _closure1_slot17;
                var5 = var2.video;
                var7 = var5.proxy_url;
                var5 = {};
                var9 = 'webp';
                var5.format = var9;
                var5 = var8.bind(var6)(var7, var5);
                var4.url = var5;
                var0.thumbnail = var4;
            case 791:
                var4 = var0.thumbnail;
                var4 = var1 != var4;
                if (!var4) {
                    _fun36772_ip = 819;
                    continue _fun36772
                }
            case 804:
                var7 = _closure1_slot15;
                var5 = var2.video;
                var4 = var7.bind(var6)(var5);
            case 819:
                if (!var4) {
                    _fun36772_ip = 1036;
                    continue _fun36772
                }
            case 825:
                var9 = var2.provider;
                var7 = var2.video;
                if (!(var1 != var9)) {
                    _fun36772_ip = 868;
                    continue _fun36772
                }
            case 841:
                var10 = _closure1_slot7;
                var8 = var10.test;
                var5 = var9.name;
                var8 = var8.bind(var10)(var5);
                var5 = false;
                if (var8) {
                    _fun36772_ip = 1033;
                    continue _fun36772
                }
            case 868:
                var11 = _closure1_slot8;
                var10 = var11.test;
                var8 = var7.url;
                var8 = var10.bind(var11)(var8);
                var5 = false;
                if (var8) {
                    _fun36772_ip = 1033;
                    continue _fun36772
                }
            case 895:
                var8 = var7.proxy_url;
                var10 = var1 != var8;
                if (var10) {
                    _fun36772_ip = 937;
                    continue _fun36772
                }
            case 908:
                var11 = /^https:/i;
                var8 = var11.test;
                var7 = var7.url;
                var10 = var8.bind(var11)(var7);
            case 937:
                var8 = var1 != var12;
                if (!var8) {
                    _fun36772_ip = 989;
                    continue _fun36772
                }
            case 944:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 2;
                var7 = var13[var7];
                var11 = var11.bind(var6)(var7);
                var7 = var11.extractTimestamp;
                var11 = var7.bind(var11)(var12);
                var7 = 1492472454139.0;
                var8 = var11 < var7;
            case 989:
                var7 = var10;
                if (!var8) {
                    _fun36772_ip = 1030;
                    continue _fun36772
                }
            case 995:
                var8 = var10;
                if (!var10) {
                    _fun36772_ip = 1005;
                    continue _fun36772
                }
            case 1001:
                var8 = var1 != var9;
            case 1005:
                if (!var8) {
                    _fun36772_ip = 1027;
                    continue _fun36772
                }
            case 1008:
                var11 = _closure1_slot9;
                var10 = var11.test;
                var9 = var9.name;
                var8 = var10.bind(var11)(var9);
            case 1027:
                var7 = var8;
            case 1030:
                var5 = var7;
            case 1033:
                var4 = var5;
            case 1036:
                if (!var4) {
                    _fun36772_ip = 1060;
                    continue _fun36772
                }
            case 1039:
                var5 = _closure1_slot16;
                var4 = var2.video;
                var4 = var5.bind(var6)(var4);
                var0.video = var4;
            case 1060:
                var5 = _closure1_slot6;
                var4 = var5.has;
                var3 = var0.type;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun36772_ip = 1094;
                    continue _fun36772
                }
            case 1082:
                var3 = new Array(0);
                var0.fields = var3;
                _fun36772_ip = 1131;
                continue _fun36772;
            case 1094:
                var3 = var2.fields;
                if (!(var1 == var3)) {
                    _fun36772_ip = 1108;
                    continue _fun36772
                }
            case 1104:
                var3 = new Array(0);
            case 1108:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var3 = var0.name;
                    var2 = var0.value;
                    var1 = var0.inline;
                    var0 = {};
                    var0.rawName = var3;
                    var0.rawValue = var2;
                    var0.inline = var1;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.fields = var1;
            case 1131:
                return var0;
        }
    };
    var2.sanitizeEmbed = var3;
    var3 = function arg0() {
        var3 = arg0;
        var0 = global;
        var0 = var0.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var5 = var2;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var2;
        var _closure2_slot0 = var0;
        var0 = new Array(0);
        var _closure2_slot1 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun36775: for (var _fun36775_ip = 0;;) switch (_fun36775_ip) {
                case 0:
                    var3 = arg0;
                    var0 = var3.url;
                    var4 = null;
                    if (!(var4 == var0)) {
                        _fun36775_ip = 33;
                        continue _fun36775
                    }
                case 14:
                    var1 = _closure2_slot1;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var3);
                    _fun36775_ip = 143;
                    continue _fun36775;
                case 33:
                    var5 = _closure2_slot0;
                    var2 = var5.get;
                    var1 = var3.url;
                    var1 = var2.bind(var5)(var1);
                    if (!(var4 != var1)) {
                        _fun36775_ip = 147;
                        continue _fun36775
                    }
                case 59:
                    var2 = var3.image;
                    if (!(var4 != var2)) {
                        _fun36775_ip = 143;
                        continue _fun36775
                    }
                case 69:
                    var2 = var1.images;
                    if (!(var4 == var2)) {
                        _fun36775_ip = 121;
                        continue _fun36775
                    }
                case 79:
                    var2 = new Array(0);
                    var1.images = var2;
                    var2 = var1.image;
                    if (!(var4 != var2)) {
                        _fun36775_ip = 121;
                        continue _fun36775
                    }
                case 99:
                    var5 = var1.images;
                    var4 = var5.push;
                    var2 = var1.image;
                    var2 = var4.bind(var5)(var2);
                case 121:
                    var4 = var1.images;
                    var2 = var4.push;
                    var1 = var3.image;
                    var1 = var2.bind(var4)(var1);
                case 143:
                    var1 = undefined;
                    return var1;
                case 147:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var0 = var3.url;
                    var0 = var1.bind(var2)(var0, var3);
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.mergeEmbedsOnURL = var3;
    var3 = function arg0() {
        _fun36776: for (var _fun36776_ip = 0;;) switch (_fun36776_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.image;
                var1 = var2.video;
                var6 = var2.type;
                var5 = var2.author;
                var4 = var2.rawTitle;
                var3 = null;
                var0 = var3 != var0;
                if (var0) {
                    _fun36776_ip = 45;
                    continue _fun36776
                }
            case 41:
                var0 = var3 != var1;
            case 45:
                if (!var0) {
                    _fun36776_ip = 102;
                    continue _fun36776
                }
            case 48:
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                var1 = var6 === var1;
                if (var1) {
                    _fun36776_ip = 99;
                    continue _fun36776
                }
            case 68:
                var2 = _closure1_slot4;
                var2 = var2.RICH;
                var2 = var6 !== var2;
                if (!var2) {
                    _fun36776_ip = 89;
                    continue _fun36776
                }
            case 85:
                var2 = var3 == var5;
            case 89:
                if (!var2) {
                    _fun36776_ip = 96;
                    continue _fun36776
                }
            case 92:
                var2 = var3 == var4;
            case 96:
                var1 = var2;
            case 99:
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var2.isEmbedInline = var3;
    var3 = function arg0() {
        _fun36777: for (var _fun36777_ip = 0;;) switch (_fun36777_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var0 = _closure1_slot4;
                var0 = var0.ARTICLE;
                var0 = var1 === var0;
                if (!var0) {
                    _fun36777_ip = 39;
                    continue _fun36777
                }
            case 28:
                var4 = var2.url;
                var1 = null;
                var0 = var1 != var4;
            case 39:
                if (!var0) {
                    _fun36777_ip = 86;
                    continue _fun36777
                }
            case 42:
                var5 = _closure1_slot11;
                var4 = var5.test;
                var1 = var2.url;
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun36777_ip = 83;
                    continue _fun36777
                }
            case 64:
                var4 = _closure1_slot10;
                var3 = var4.test;
                var2 = var2.url;
                var1 = var3.bind(var4)(var2);
            case 83:
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var2.isServerShopArticleEmbed = var3;
    var3 = function arg0() {
        _fun36778: for (var _fun36778_ip = 0;;) switch (_fun36778_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.type;
                var0 = _closure1_slot4;
                var0 = var0.ARTICLE;
                var0 = var3 === var0;
                if (!var0) {
                    _fun36778_ip = 39;
                    continue _fun36778
                }
            case 28:
                var4 = var1.url;
                var3 = null;
                var0 = var3 != var4;
            case 39:
                if (!var0) {
                    _fun36778_ip = 61;
                    continue _fun36778
                }
            case 42:
                var3 = _closure1_slot12;
                var2 = var3.test;
                var1 = var1.url;
                var0 = var2.bind(var3)(var1);
            case 61:
                return var0;
        }
    };
    var2.isCollectiblesShopArticleEmbed = var3;
    var3 = function arg0() {
        _fun36779: for (var _fun36779_ip = 0;;) switch (_fun36779_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var0 = _closure1_slot4;
                var0 = var0.ARTICLE;
                var0 = var1 === var0;
                if (!var0) {
                    _fun36779_ip = 39;
                    continue _fun36779
                }
            case 28:
                var4 = var2.url;
                var1 = null;
                var0 = var1 != var4;
            case 39:
                if (!var0) {
                    _fun36779_ip = 86;
                    continue _fun36779
                }
            case 42:
                var5 = _closure1_slot14;
                var4 = var5.test;
                var1 = var2.url;
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun36779_ip = 83;
                    continue _fun36779
                }
            case 64:
                var4 = _closure1_slot13;
                var3 = var4.test;
                var2 = var2.url;
                var1 = var3.bind(var4)(var2);
            case 83:
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var2.isSocialLayerStorefrontArticleEmbed = var3;
    var3 = function arg0, arg1, arg2() {
        _fun36780: for (var _fun36780_ip = 0;;) switch (_fun36780_ip) {
            case 0:
                var3 = arg1;
                var2 = arg2;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun36780_ip = 16;
                    continue _fun36780
                }
            case 12:
                if (!(var1 == var2)) {
                    _fun36780_ip = 81;
                    continue _fun36780
                }
            case 16:
                var0 = arg0;
                var0 = var0.provider;
                var4 = var1 == var0;
                var1 = undefined;
                if (var4) {
                    _fun36780_ip = 39;
                    continue _fun36780
                }
            case 34:
                var1 = var0.name;
            case 39:
                var0 = 'TikTok';
                if (!(var0 !== var1)) {
                    _fun36780_ip = 65;
                    continue _fun36780
                }
            case 49:
                var0 = {
                    'maxMediaWidth': 400,
                    'maxMediaHeight': 300
                };
                _fun36780_ip = 79;
                continue _fun36780;
            case 65:
                var0 = {
                    'maxMediaWidth': 400,
                    'maxMediaHeight': 450
                };
            case 79:
                _fun36780_ip = 96;
                continue _fun36780;
            case 81:
                var1 = {};
                var1.maxMediaWidth = var3;
                var1.maxMediaHeight = var2;
                var0 = var1;
            case 96:
                return var0;
        }
    };
    var2.getMaxEmbedMediaSize = var3;
    var3 = function arg0, arg1() {
        _fun36781: for (var _fun36781_ip = 0;;) switch (_fun36781_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = var2.isPrivate;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun36781_ip = 46;
                    continue _fun36781
                }
            case 19:
                var1 = var3.can;
                var0 = _closure1_slot5;
                var0 = var0.EMBED_LINKS;
                var0 = var1.bind(var3)(var0, var2);
                _fun36781_ip = 59;
                continue _fun36781;
            case 46:
                var1 = var2.isManaged;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 59:
                return var0;
        }
    };
    var2.canEmbedLinks = var3;
    var1 = function arg0() {
        _fun36782: for (var _fun36782_ip = 0;;) switch (_fun36782_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.content;
                var0 = '';
                var0 = var0 !== var2;
                if (var0) {
                    _fun36782_ip = 43;
                    continue _fun36782
                }
            case 19:
                var3 = var1.messageSnapshots;
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun36783: for (var _fun36783_ip = 0;;) switch (_fun36783_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.message;
                            var2 = var0.content;
                            var0 = '';
                            var0 = var0 !== var2;
                            if (var0) {
                                _fun36783_ip = 46;
                                continue _fun36783
                            }
                        case 24:
                            var1 = var1.message;
                            var1 = var1.attachments;
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 46:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 43:
                return var0;
        }
    };
    var2.shouldStripEmbeds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3998, 21, 1384, 22, 3045, 668, 2]);