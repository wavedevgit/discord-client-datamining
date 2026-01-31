// modules/message_previews/useFormattedMessagePreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function(arg0) { // Original name: isMessageContentPreviewable, environment: var3
        _fun70033: for (var _fun70033_ip = 0;;) switch (_fun70033_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.type;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 4;
                var2 = var2[var4];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.MessageTypes;
                var2 = var2.DEFAULT;
                if (!(var2 !== var1)) {
                    _fun70033_ip = 260;
                    continue _fun70033
                }
            case 52:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.MessageTypes;
                var2 = var2.CHANGELOG;
                if (!(var2 !== var1)) {
                    _fun70033_ip = 260;
                    continue _fun70033
                }
            case 88:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.MessageTypes;
                var2 = var2.REPLY;
                if (!(var2 !== var1)) {
                    _fun70033_ip = 260;
                    continue _fun70033
                }
            case 124:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.MessageTypes;
                var2 = var2.CHAT_INPUT_COMMAND;
                if (!(var2 !== var1)) {
                    _fun70033_ip = 260;
                    continue _fun70033
                }
            case 157:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.MessageTypes;
                var2 = var2.CONTEXT_MENU_COMMAND;
                if (!(var2 !== var1)) {
                    _fun70033_ip = 260;
                    continue _fun70033
                }
            case 190:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.MessageTypes;
                var2 = var2.POLL_RESULT;
                if (!(var2 !== var1)) {
                    _fun70033_ip = 260;
                    continue _fun70033
                }
            case 223:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.MessageTypes;
                var0 = var0.AUTO_MODERATION_ACTION;
                if (!(var0 !== var1)) {
                    _fun70033_ip = 260;
                    continue _fun70033
                }
            case 256:
                var0 = false;
                return var0;
            case 260:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var1 = function(arg0, arg1) { // Original name: formatMessagePreview, environment: var3
        _fun70034: for (var _fun70034_ip = 0;;) switch (_fun70034_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var2 = var4.isBlocked;
                var0 = var4.isIgnored;
                var3 = var4.authorNick;
                if (var2) {
                    _fun70034_ip = 1934;
                    continue _fun70034
                }
            case 33:
                if (var0) {
                    _fun70034_ip = 1861;
                    continue _fun70034
                }
            case 39:
                var2 = _closure1_slot7;
                var0 = undefined;
                var2 = var2.bind(var0)(var7);
                if (!var2) {
                    _fun70034_ip = 76;
                    continue _fun70034
                }
            case 53:
                var2 = function(arg0) { // Original name: formatMessageContentPreview, environment: var2
                    _fun70035: for (var _fun70035_ip = 0;;) switch (_fun70035_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.embeds;
                            var2 = var0.length;
                            var0 = 1;
                            if (!(var0 === var2)) {
                                _fun70035_ip = 74;
                                continue _fun70035
                            }
                        case 23:
                            var0 = var1.embeds;
                            var2 = 0;
                            var0 = var0[var2];
                            var3 = var0.url;
                            var0 = var1.content;
                            if (!(var3 === var0)) {
                                _fun70035_ip = 74;
                                continue _fun70035
                            }
                        case 49:
                            var0 = var1.embeds;
                            var0 = var0[var2];
                            var3 = var0.rawTitle;
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun70035_ip = 1696;
                                continue _fun70035
                            }
                        case 74:
                            var0 = var1.content;
                            var4 = null;
                            if (!(var4 != var0)) {
                                _fun70035_ip = 101;
                                continue _fun70035
                            }
                        case 85:
                            var3 = var1.content;
                            var0 = '';
                            if (!(var0 === var3)) {
                                _fun70035_ip = 1680;
                                continue _fun70035
                            }
                        case 101:
                            var5 = var1.hasFlag;
                            var0 = _closure1_slot6;
                            var0 = var0.IS_VOICE_MESSAGE;
                            var0 = var5.bind(var1)(var0);
                            if (var0) {
                                _fun70035_ip = 1607;
                                continue _fun70035
                            }
                        case 131:
                            var0 = var1.attachments;
                            var0 = var0.length;
                            var7 = 0;
                            if (!(!(var0 > var7))) {
                                _fun70035_ip = 1101;
                                continue _fun70035
                            }
                        case 151:
                            var0 = var1.embeds;
                            var0 = var0.length;
                            if (!(!(var0 > var7))) {
                                _fun70035_ip = 445;
                                continue _fun70035
                            }
                        case 169:
                            var0 = var1.stickerItems;
                            var0 = var0.length;
                            if (!(!(var0 > var7))) {
                                _fun70035_ip = 408;
                                continue _fun70035
                            }
                        case 187:
                            var0 = var1.isPoll;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun70035_ip = 303;
                                continue _fun70035
                            }
                        case 200:
                            var5 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 10;
                            var0 = var8[var0];
                            var11 = undefined;
                            var0 = var5.bind(var11)(var0);
                            var0 = var0.bind(var11)(var1);
                            if (var0) {
                                _fun70035_ip = 232;
                                continue _fun70035
                            }
                        case 230:
                            return var11;
                        case 232:
                            var0 = {};
                            var5 = 'text';
                            var0.type = var5;
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 8;
                            var8 = var12[var5];
                            var8 = var10.bind(var11)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var5 = var12[var5];
                            var5 = var10.bind(var11)(var5);
                            var5 = var5.t;
                            var5 = var5["9ddYKt"];
                            var5 = var8.bind(var9)(var5);
                            var0.text = var5;
                            return var0;
                        case 303:
                            var0 = {};
                            var5 = 'text';
                            var0.type = var5;
                            var8 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 8;
                            var9 = var12[var5];
                            var11 = undefined;
                            var9 = var8.bind(var11)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var5 = var12[var5];
                            var5 = var8.bind(var11)(var5);
                            var5 = var5.t;
                            var8 = var5.ImizdM;
                            var5 = {};
                            var12 = var1.poll;
                            var13 = var4 == var12;
                            if (var13) {
                                _fun70035_ip = 391;
                                continue _fun70035
                            }
                        case 380:
                            var12 = var12.question;
                            var11 = var12.text;
                        case 391:
                            var5.question = var11;
                            var5 = var9.bind(var10)(var8, var5);
                            var0.text = var5;
                            return var0;
                        case 408:
                            var0 = {
                                'type': 'text',
                                'text': null,
                                'trailingIcon': 'sticker'
                            };
                            var5 = var1.stickerItems;
                            var5 = var5[var7];
                            var5 = var5.name;
                            var0.text = var5;
                            return var0;
                        case 445:
                            var8 = var1.embeds;
                            var5 = var8.every;
                            var0 = function(arg0) { // Environment: var6
                                _fun70039: for (var _fun70039_ip = 0;;) switch (_fun70039_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.url;
                                        var0 = null;
                                        var0 = var0 != var2;
                                        if (!var0) {
                                            _fun70039_ip = 58;
                                            continue _fun70039
                                        }
                                    case 17:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 9;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var2 = var3.isImageUrl;
                                        var1 = var1.url;
                                        var0 = var2.bind(var3)(var1);
                                    case 58:
                                        return var0;
                                }
                            };
                            var8 = var5.bind(var8)(var0);
                            var5 = !var8;
                            if (!var5) {
                                _fun70035_ip = 499;
                                continue _fun70035
                            }
                        case 475:
                            var10 = var1.embeds;
                            var9 = var10.every;
                            var0 = function(arg0) { // Environment: var6
                                _fun70040: for (var _fun70040_ip = 0;;) switch (_fun70040_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.url;
                                        var0 = null;
                                        var0 = var0 != var2;
                                        if (!var0) {
                                            _fun70040_ip = 58;
                                            continue _fun70040
                                        }
                                    case 17:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 9;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var2 = var3.isVideoUrl;
                                        var1 = var1.url;
                                        var0 = var2.bind(var3)(var1);
                                    case 58:
                                        return var0;
                                }
                            };
                            var5 = var9.bind(var10)(var0);
                        case 499:
                            var0 = !var8;
                            if (!var0) {
                                _fun70035_ip = 508;
                                continue _fun70035
                            }
                        case 505:
                            var0 = !var5;
                        case 508:
                            if (!var0) {
                                _fun70035_ip = 535;
                                continue _fun70035
                            }
                        case 511:
                            var11 = var1.embeds;
                            var10 = var11.every;
                            var9 = function(arg0) { // Environment: var6
                                _fun70041: for (var _fun70041_ip = 0;;) switch (_fun70041_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.url;
                                        var0 = null;
                                        var0 = var0 != var2;
                                        if (!var0) {
                                            _fun70041_ip = 58;
                                            continue _fun70041
                                        }
                                    case 17:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 9;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var2 = var3.isAudioFile;
                                        var1 = var1.url;
                                        var0 = var2.bind(var3)(var1);
                                    case 58:
                                        return var0;
                                }
                            };
                            var0 = var10.bind(var11)(var9);
                        case 535:
                            if (var8) {
                                _fun70035_ip = 1000;
                                continue _fun70035
                            }
                        case 541:
                            if (var5) {
                                _fun70035_ip = 899;
                                continue _fun70035
                            }
                        case 547:
                            if (var0) {
                                _fun70035_ip = 798;
                                continue _fun70035
                            }
                        case 553:
                            var0 = var1.embeds;
                            var0 = var0.length;
                            if (!(var0 > var7)) {
                                _fun70035_ip = 591;
                                continue _fun70035
                            }
                        case 568:
                            var0 = var1.embeds;
                            var0 = var0[var7];
                            var0 = var0.rawTitle;
                            if (!(var4 == var0)) {
                                _fun70035_ip = 762;
                                continue _fun70035
                            }
                        case 591:
                            var0 = var1.embeds;
                            var0 = var0.length;
                            if (!(var0 > var7)) {
                                _fun70035_ip = 626;
                                continue _fun70035
                            }
                        case 606:
                            var0 = var1.embeds;
                            var0 = var0[var7];
                            var0 = var0.rawDescription;
                            if (!(var4 == var0)) {
                                _fun70035_ip = 726;
                                continue _fun70035
                            }
                        case 626:
                            var0 = {
                                'type': 'text',
                                'text': null,
                                'trailingIcon': 'link'
                            };
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var4 = 8;
                            var8 = var11[var4];
                            var5 = undefined;
                            var8 = var10.bind(var5)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var4 = var11[var4];
                            var4 = var10.bind(var5)(var4);
                            var4 = var4.t;
                            var5 = var4["9XuYjs"];
                            var4 = {};
                            var10 = var1.embeds;
                            var10 = var10.length;
                            var4.count = var10;
                            var4 = var8.bind(var9)(var5, var4);
                            var0.text = var4;
                            _fun70035_ip = 760;
                            continue _fun70035;
                        case 726:
                            var4 = {};
                            var5 = 'markup';
                            var4.type = var5;
                            var5 = var1.embeds;
                            var5 = var5[var7];
                            var5 = var5.rawDescription;
                            var4.markup = var5;
                            var0 = var4;
                        case 760:
                            _fun70035_ip = 796;
                            continue _fun70035;
                        case 762:
                            var4 = {};
                            var5 = 'markup';
                            var4.type = var5;
                            var5 = var1.embeds;
                            var5 = var5[var7];
                            var5 = var5.rawTitle;
                            var4.markup = var5;
                            var0 = var4;
                        case 796:
                            _fun70035_ip = 897;
                            continue _fun70035;
                        case 798:
                            var4 = {
                                'type': 'text',
                                'text': null,
                                'trailingIcon': 'audio'
                            };
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 8;
                            var8 = var11[var5];
                            var7 = undefined;
                            var8 = var10.bind(var7)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var5 = var11[var5];
                            var5 = var10.bind(var7)(var5);
                            var5 = var5.t;
                            var7 = var5.fnO3hK;
                            var5 = {};
                            var10 = var1.embeds;
                            var10 = var10.length;
                            var5.count = var10;
                            var5 = var8.bind(var9)(var7, var5);
                            var4.text = var5;
                            var0 = var4;
                        case 897:
                            _fun70035_ip = 998;
                            continue _fun70035;
                        case 899:
                            var4 = {
                                'type': 'text',
                                'text': null,
                                'trailingIcon': 'video'
                            };
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 8;
                            var8 = var11[var5];
                            var7 = undefined;
                            var8 = var10.bind(var7)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var5 = var11[var5];
                            var5 = var10.bind(var7)(var5);
                            var5 = var5.t;
                            var7 = var5.SJ6pPX;
                            var5 = {};
                            var10 = var1.embeds;
                            var10 = var10.length;
                            var5.count = var10;
                            var5 = var8.bind(var9)(var7, var5);
                            var4.text = var5;
                            var0 = var4;
                        case 998:
                            _fun70035_ip = 1099;
                            continue _fun70035;
                        case 1000:
                            var4 = {
                                'type': 'text',
                                'text': null,
                                'trailingIcon': 'image'
                            };
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 8;
                            var8 = var11[var5];
                            var7 = undefined;
                            var8 = var10.bind(var7)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var5 = var11[var5];
                            var5 = var10.bind(var7)(var5);
                            var5 = var5.t;
                            var7 = var5.h4pFfU;
                            var5 = {};
                            var10 = var1.embeds;
                            var10 = var10.length;
                            var5.count = var10;
                            var5 = var8.bind(var9)(var7, var5);
                            var4.text = var5;
                            var0 = var4;
                        case 1099:
                            return var0;
                        case 1101:
                            var5 = var1.attachments;
                            var4 = var5.every;
                            var0 = function(arg0) { // Environment: var6
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isImageFile;
                                var0 = arg0;
                                var0 = var0.filename;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var5 = var4.bind(var5)(var0);
                            var4 = !var5;
                            if (!var4) {
                                _fun70035_ip = 1155;
                                continue _fun70035
                            }
                        case 1131:
                            var8 = var1.attachments;
                            var7 = var8.every;
                            var0 = function(arg0) { // Environment: var6
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isVideoFile;
                                var0 = arg0;
                                var0 = var0.filename;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var4 = var7.bind(var8)(var0);
                        case 1155:
                            var0 = !var5;
                            if (!var0) {
                                _fun70035_ip = 1164;
                                continue _fun70035
                            }
                        case 1161:
                            var0 = !var4;
                        case 1164:
                            if (!var0) {
                                _fun70035_ip = 1191;
                                continue _fun70035
                            }
                        case 1167:
                            var8 = var1.attachments;
                            var7 = var8.every;
                            var6 = function(arg0) { // Environment: var6
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isAudioFile;
                                var0 = arg0;
                                var0 = var0.filename;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var7.bind(var8)(var6);
                        case 1191:
                            if (var5) {
                                _fun70035_ip = 1506;
                                continue _fun70035
                            }
                        case 1197:
                            if (var4) {
                                _fun70035_ip = 1405;
                                continue _fun70035
                            }
                        case 1203:
                            if (var0) {
                                _fun70035_ip = 1304;
                                continue _fun70035
                            }
                        case 1206:
                            var0 = {
                                'type': 'text',
                                'text': null,
                                'trailingIcon': 'attachment'
                            };
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 8;
                            var6 = var9[var4];
                            var5 = undefined;
                            var6 = var8.bind(var5)(var6);
                            var7 = var6.intl;
                            var6 = var7.formatToPlainString;
                            var4 = var9[var4];
                            var4 = var8.bind(var5)(var4);
                            var4 = var4.t;
                            var5 = var4["89ihS8"];
                            var4 = {};
                            var8 = var1.attachments;
                            var8 = var8.length;
                            var4.count = var8;
                            var4 = var6.bind(var7)(var5, var4);
                            var0.text = var4;
                            _fun70035_ip = 1403;
                            continue _fun70035;
                        case 1304:
                            var4 = {
                                'type': 'text',
                                'text': null,
                                'trailingIcon': 'audio'
                            };
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 8;
                            var7 = var10[var5];
                            var6 = undefined;
                            var7 = var9.bind(var6)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var10[var5];
                            var5 = var9.bind(var6)(var5);
                            var5 = var5.t;
                            var6 = var5.fnO3hK;
                            var5 = {};
                            var9 = var1.attachments;
                            var9 = var9.length;
                            var5.count = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var4.text = var5;
                            var0 = var4;
                        case 1403:
                            _fun70035_ip = 1504;
                            continue _fun70035;
                        case 1405:
                            var4 = {
                                'type': 'text',
                                'text': null,
                                'trailingIcon': 'video'
                            };
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 8;
                            var7 = var10[var5];
                            var6 = undefined;
                            var7 = var9.bind(var6)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var10[var5];
                            var5 = var9.bind(var6)(var5);
                            var5 = var5.t;
                            var6 = var5.SJ6pPX;
                            var5 = {};
                            var9 = var1.attachments;
                            var9 = var9.length;
                            var5.count = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var4.text = var5;
                            var0 = var4;
                        case 1504:
                            _fun70035_ip = 1605;
                            continue _fun70035;
                        case 1506:
                            var4 = {
                                'type': 'text',
                                'text': null,
                                'trailingIcon': 'image'
                            };
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 8;
                            var7 = var10[var5];
                            var6 = undefined;
                            var7 = var9.bind(var6)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var10[var5];
                            var5 = var9.bind(var6)(var5);
                            var5 = var5.t;
                            var6 = var5.h4pFfU;
                            var5 = {};
                            var9 = var1.attachments;
                            var9 = var9.length;
                            var5.count = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var4.text = var5;
                            var0 = var4;
                        case 1605:
                            return var0;
                        case 1607:
                            var0 = {};
                            var4 = 'text';
                            var0.type = var4;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 8;
                            var4 = var8[var3];
                            var6 = undefined;
                            var4 = var7.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var8[var3];
                            var3 = var7.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3.slFYgi;
                            var3 = var4.bind(var5)(var3);
                            var0.text = var3;
                            return var0;
                        case 1680:
                            var0 = {};
                            var3 = 'message';
                            var0.type = var3;
                            var0.message = var1;
                            return var0;
                        case 1696:
                            var0 = {};
                            var3 = 'markup';
                            var0.type = var3;
                            var1 = var1.embeds;
                            var1 = var1[var2];
                            var1 = var1.rawTitle;
                            var0.markup = var1;
                            return var0;
                    }
                };
                var2 = var2.bind(var0)(var7);
                var5 = null;
                if (!(var5 == var2)) {
                    _fun70034_ip = 1836;
                    continue _fun70034
                }
            case 76:
                var14 = var4.currentUserId;
                var10 = var4.authorNick;
                var8 = var4.otherUser;
                var13 = var4.otherUserNick;
                var11 = var4.isCallActive;
                var5 = var7.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var12 = 4;
                var4 = var4[var12];
                var4 = var6.bind(var0)(var4);
                var4 = var4.MessageTypes;
                var4 = var4.RECIPIENT_ADD;
                if (!(var5 === var4)) {
                    _fun70034_ip = 156;
                    continue _fun70034
                }
            case 147:
                var4 = null;
                if (!(var4 == var13)) {
                    _fun70034_ip = 1691;
                    continue _fun70034
                }
            case 156:
                var5 = var7.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var4 = var6.bind(var0)(var4);
                var4 = var4.MessageTypes;
                var4 = var4.RECIPIENT_REMOVE;
                if (!(var5 === var4)) {
                    _fun70034_ip = 203;
                    continue _fun70034
                }
            case 194:
                var6 = null;
                if (!(var6 == var13)) {
                    _fun70034_ip = 1439;
                    continue _fun70034
                }
            case 203:
                var5 = var7.type;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var4 = var9.bind(var0)(var4);
                var4 = var4.MessageTypes;
                var4 = var4.CALL;
                if (!(var5 !== var4)) {
                    _fun70034_ip = 1172;
                    continue _fun70034
                }
            case 244:
                var5 = var7.type;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var4 = var9.bind(var0)(var4);
                var4 = var4.MessageTypes;
                var4 = var4.CHANNEL_NAME_CHANGE;
                if (!(var5 !== var4)) {
                    _fun70034_ip = 1053;
                    continue _fun70034
                }
            case 285:
                var5 = var7.type;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var4 = var9.bind(var0)(var4);
                var4 = var4.MessageTypes;
                var4 = var4.CHANNEL_ICON_CHANGE;
                if (!(var5 !== var4)) {
                    _fun70034_ip = 944;
                    continue _fun70034
                }
            case 326:
                var5 = var7.type;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var4 = var9.bind(var0)(var4);
                var4 = var4.MessageTypes;
                var4 = var4.CHANNEL_PINNED_MESSAGE;
                if (!(var5 !== var4)) {
                    _fun70034_ip = 835;
                    continue _fun70034
                }
            case 367:
                var5 = var7.type;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var4 = var9.bind(var0)(var4);
                var4 = var4.MessageTypes;
                var4 = var4.USER_JOIN;
                if (!(var5 !== var4)) {
                    _fun70034_ip = 716;
                    continue _fun70034
                }
            case 408:
                var5 = var7.type;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var4 = var9.bind(var0)(var4);
                var4 = var4.MessageTypes;
                var4 = var4.THREAD_CREATED;
                if (!(var5 !== var4)) {
                    _fun70034_ip = 576;
                    continue _fun70034
                }
            case 449:
                var9 = var7.type;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var4 = var5.bind(var0)(var4);
                var4 = var4.MessageTypes;
                var5 = var4.PREMIUM_REFERRAL;
                var4 = undefined;
                if (!(var9 === var5)) {
                    _fun70034_ip = 1820;
                    continue _fun70034
                }
            case 492:
                var5 = {};
                var9 = 'text';
                var5.type = var9;
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 8;
                var15 = var17[var9];
                var15 = var12.bind(var0)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var9 = var17[var9];
                var9 = var12.bind(var0)(var9);
                var9 = var9.t;
                var12 = var9.lieTqU;
                var9 = {};
                var9.username = var10;
                var9 = var15.bind(var16)(var12, var9);
                var5.text = var9;
                var4 = var5;
                _fun70034_ip = 1820;
                continue _fun70034;
            case 576:
                var5 = {};
                var9 = 'text';
                var5.type = var9;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = 8;
                var12 = var19[var9];
                var12 = var18.bind(var0)(var12);
                var16 = var12.intl;
                var15 = var16.formatToPlainString;
                var9 = var19[var9];
                var9 = var18.bind(var0)(var9);
                var9 = var9.t;
                var12 = var9.SGaUAU;
                var9 = {};
                var9.actorName = var10;
                var17 = 11;
                var20 = var19[var17];
                var20 = var18.bind(var0)(var20);
                var20 = var20.identity;
                var9.actorHook = var20;
                var20 = var7.content;
                var9.threadName = var20;
                var17 = var19[var17];
                var17 = var18.bind(var0)(var17);
                var17 = var17.identity;
                var9.threadOnClick = var17;
                var9 = var15.bind(var16)(var12, var9);
                var5.text = var9;
                var4 = var5;
                _fun70034_ip = 1820;
                continue _fun70034;
            case 716:
                var5 = {};
                var9 = 'text';
                var5.type = var9;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = 8;
                var9 = var19[var9];
                var9 = var18.bind(var0)(var9);
                var16 = var9.intl;
                var15 = var16.formatToPlainString;
                var12 = _closure1_slot1;
                var9 = 12;
                var9 = var19[var9];
                var17 = var12.bind(var0)(var9);
                var12 = var17.getSystemMessageUserJoin;
                var9 = var7.id;
                var12 = var12.bind(var17)(var9);
                var9 = {};
                var9.username = var10;
                var17 = 11;
                var17 = var19[var17];
                var17 = var18.bind(var0)(var17);
                var17 = var17.identity;
                var9.usernameHook = var17;
                var9 = var15.bind(var16)(var12, var9);
                var5.text = var9;
                var4 = var5;
                _fun70034_ip = 1820;
                continue _fun70034;
            case 835:
                var5 = {};
                var9 = 'text';
                var5.type = var9;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = 8;
                var12 = var19[var9];
                var12 = var18.bind(var0)(var12);
                var16 = var12.intl;
                var15 = var16.formatToPlainString;
                var9 = var19[var9];
                var9 = var18.bind(var0)(var9);
                var9 = var9.t;
                var12 = var9.vfkjqx;
                var9 = {};
                var9.username = var10;
                var17 = 11;
                var17 = var19[var17];
                var17 = var18.bind(var0)(var17);
                var17 = var17.identity;
                var9.usernameHook = var17;
                var9 = var15.bind(var16)(var12, var9);
                var5.text = var9;
                var4 = var5;
                _fun70034_ip = 1820;
                continue _fun70034;
            case 944:
                var5 = {};
                var9 = 'text';
                var5.type = var9;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = 8;
                var12 = var19[var9];
                var12 = var18.bind(var0)(var12);
                var16 = var12.intl;
                var15 = var16.formatToPlainString;
                var9 = var19[var9];
                var9 = var18.bind(var0)(var9);
                var9 = var9.t;
                var12 = var9.OEdU6X;
                var9 = {};
                var9.username = var10;
                var17 = 11;
                var17 = var19[var17];
                var17 = var18.bind(var0)(var17);
                var17 = var17.identity;
                var9.usernameHook = var17;
                var9 = var15.bind(var16)(var12, var9);
                var5.text = var9;
                var4 = var5;
                _fun70034_ip = 1820;
                continue _fun70034;
            case 1053:
                var5 = {};
                var9 = 'text';
                var5.type = var9;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = 8;
                var12 = var19[var9];
                var12 = var18.bind(var0)(var12);
                var16 = var12.intl;
                var15 = var16.formatToPlainString;
                var9 = var19[var9];
                var9 = var18.bind(var0)(var9);
                var9 = var9.t;
                var12 = var9.oItgEw;
                var9 = {};
                var9.username = var10;
                var17 = 11;
                var17 = var19[var17];
                var17 = var18.bind(var0)(var17);
                var17 = var17.identity;
                var9.usernameHook = var17;
                var17 = var7.content;
                var9.channelName = var17;
                var9 = var15.bind(var16)(var12, var9);
                var5.text = var9;
                var4 = var5;
                _fun70034_ip = 1820;
                continue _fun70034;
            case 1172:
                var5 = {};
                var9 = 'text';
                var5.type = var9;
                if (var11) {
                    _fun70034_ip = 1337;
                    continue _fun70034
                }
            case 1188:
                var12 = var7.call;
                var9 = null;
                if (!(var9 != var12)) {
                    _fun70034_ip = 1280;
                    continue _fun70034
                }
            case 1199:
                var9 = var7.call;
                var12 = var9.participants;
                var9 = var12.includes;
                var9 = var9.bind(var12)(var14);
                if (var9) {
                    _fun70034_ip = 1280;
                    continue _fun70034
                }
            case 1223:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 8;
                var12 = var16[var9];
                var12 = var15.bind(var0)(var12);
                var14 = var12.intl;
                var12 = var14.string;
                var9 = var16[var9];
                var9 = var15.bind(var0)(var9);
                var9 = var9.t;
                var9 = var9["2CnhoI"];
                var9 = var12.bind(var14)(var9);
                _fun70034_ip = 1335;
                continue _fun70034;
            case 1280:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = 8;
                var14 = var17[var12];
                var14 = var16.bind(var0)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var17[var12];
                var12 = var16.bind(var0)(var12);
                var12 = var12.t;
                var12 = var12.v05Xd6;
                var9 = var14.bind(var15)(var12);
            case 1335:
                _fun70034_ip = 1392;
                continue _fun70034;
            case 1337:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = 8;
                var14 = var17[var12];
                var14 = var16.bind(var0)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var17[var12];
                var12 = var16.bind(var0)(var12);
                var12 = var12.t;
                var12 = var12["NGg/fm"];
                var9 = var14.bind(var15)(var12);
            case 1392:
                var5.text = var9;
                var9 = undefined;
                if (!var11) {
                    _fun70034_ip = 1407;
                    continue _fun70034
                }
            case 1401:
                var9 = 'text-feedback-positive';
            case 1407:
                var5.color = var9;
                var9 = 'call-ended';
                if (!var11) {
                    _fun70034_ip = 1426;
                    continue _fun70034
                }
            case 1420:
                var9 = 'call-active';
            case 1426:
                var5.trailingIcon = var9;
                var4 = var5;
                _fun70034_ip = 1820;
                continue _fun70034;
            case 1439:
                var5 = {};
                var9 = 'text';
                var5.type = var9;
                var7 = var7.author;
                var7 = var7.id;
                var9 = var6 == var8;
                var6 = undefined;
                if (var9) {
                    _fun70034_ip = 1474;
                    continue _fun70034
                }
            case 1469:
                var6 = var8.id;
            case 1474:
                if (!(var7 !== var6)) {
                    _fun70034_ip = 1592;
                    continue _fun70034
                }
            case 1478:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 8;
                var7 = var14[var6];
                var7 = var12.bind(var0)(var7);
                var9 = var7.intl;
                var8 = var9.formatToPlainString;
                var6 = var14[var6];
                var6 = var12.bind(var0)(var6);
                var6 = var6.t;
                var7 = var6.L2FyVq;
                var6 = {};
                var6.username = var10;
                var11 = 11;
                var15 = var14[var11];
                var15 = var12.bind(var0)(var15);
                var15 = var15.identity;
                var6.usernameHook = var15;
                var6.otherUsername = var13;
                var11 = var14[var11];
                var11 = var12.bind(var0)(var11);
                var11 = var11.identity;
                var6.otherUsernameHook = var11;
                var6 = var8.bind(var9)(var7, var6);
                _fun70034_ip = 1679;
                continue _fun70034;
            case 1592:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 8;
                var8 = var15[var7];
                var8 = var14.bind(var0)(var8);
                var11 = var8.intl;
                var9 = var11.formatToPlainString;
                var7 = var15[var7];
                var7 = var14.bind(var0)(var7);
                var7 = var7.t;
                var8 = var7["5v2xa8"];
                var7 = {};
                var7.username = var10;
                var12 = 11;
                var12 = var15[var12];
                var12 = var14.bind(var0)(var12);
                var12 = var12.identity;
                var7.usernameHook = var12;
                var6 = var9.bind(var11)(var8, var7);
            case 1679:
                var5.text = var6;
                var4 = var5;
                _fun70034_ip = 1820;
                continue _fun70034;
            case 1691:
                var5 = {};
                var6 = 'text';
                var5.type = var6;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 8;
                var7 = var12[var6];
                var7 = var11.bind(var0)(var7);
                var9 = var7.intl;
                var8 = var9.formatToPlainString;
                var6 = var12[var6];
                var6 = var11.bind(var0)(var6);
                var6 = var6.t;
                var7 = var6.MMN2Jq;
                var6 = {};
                var6.username = var10;
                var10 = 11;
                var14 = var12[var10];
                var14 = var11.bind(var0)(var14);
                var14 = var14.identity;
                var6.usernameHook = var14;
                var6.otherUsername = var13;
                var10 = var12[var10];
                var10 = var11.bind(var0)(var10);
                var10 = var10.identity;
                var6.otherUsernameHook = var10;
                var6 = var8.bind(var9)(var7, var6);
                var5.text = var6;
                var4 = var5;
            case 1820:
                var5 = null;
                var5 = var5 != var4;
                var0 = undefined;
                if (!var5) {
                    _fun70034_ip = 1834;
                    continue _fun70034
                }
            case 1831:
                var0 = var4;
            case 1834:
                return var0;
            case 1836:
                var0 = {};
                var22 = var0;
                var21 = var2;
                var2 = copyDataProperties(var22, var21);
                var2 = 'authorLabel';
                var0[var2] = var3;
                return var0;
            case 1861:
                var0 = {};
                var2 = 'text';
                var0.type = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["G7p6v/"];
                var2 = var3.bind(var4)(var2);
                var0.text = var2;
                return var0;
            case 1934:
                var0 = {};
                var2 = 'text';
                var0.type = var2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.XAkOo2;
                var1 = var2.bind(var3)(var1);
                var0.text = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.MessageFlags;
    var _closure1_slot6 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/message_previews/useFormattedMessagePreview.tsx';
    var5 = var6.bind(var7)(var5);
    var2.isMessageContentPreviewable = var4;
    var3 = function(arg0, arg1) { // Original name: useFormattedMessagePreview, environment: var3
        _fun70042: for (var _fun70042_ip = 0;;) switch (_fun70042_ip) {
            case 0:
                var3 = arg0;
                var11 = arg1;
                var _closure2_slot0 = var3;
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var13 = 5;
                var4 = var1[var13];
                var2 = undefined;
                var9 = var10.bind(var2)(var4);
                var7 = var9.useStateFromStoresObject;
                var4 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = var3.author;
                var4 = var4.id;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var8
                    var0 = {};
                    var3 = _closure1_slot4;
                    var4 = var3.isBlocked;
                    var1 = _closure2_slot0;
                    var2 = var1.author;
                    var2 = var2.id;
                    var2 = var4.bind(var3)(var2);
                    var0.isBlocked = var2;
                    var2 = var3.isIgnored;
                    var1 = var1.author;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isIgnored = var1;
                    return var0;
                };
                var4 = var7.bind(var9)(var6, var4, var5);
                var6 = var4.isBlocked;
                var5 = var4.isIgnored;
                var7 = _closure1_slot1;
                var4 = 6;
                var4 = var1[var4];
                var12 = var7.bind(var2)(var4);
                var9 = var11.id;
                var4 = var3.id;
                var4 = var12.bind(var2)(var9, var4);
                var9 = var1[var13];
                var14 = var10.bind(var2)(var9);
                var12 = var14.useStateFromStores;
                var9 = _closure1_slot3;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var8
                    var1 = _closure1_slot3;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var12.bind(var14)(var10, var9);
                var12 = 7;
                var1 = var1[var12];
                var1 = var7.bind(var2)(var1);
                var1 = var1.bind(var2)(var3);
                var9 = var1.nick;
                var1 = var3.author;
                var1 = var1.id;
                if (!(var1 === var10)) {
                    _fun70042_ip = 264;
                    continue _fun70042
                }
            case 209:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 8;
                var7 = var16[var1];
                var7 = var15.bind(var2)(var7);
                var14 = var7.intl;
                var7 = var14.string;
                var1 = var16[var1];
                var1 = var15.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.LuZzxn;
                var9 = var7.bind(var14)(var1);
            case 264:
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var13 = var1[var13];
                var15 = var7.bind(var2)(var13);
                var14 = var15.useStateFromStores;
                var16 = _closure1_slot5;
                var13 = new Array(1);
                var13[0] = var16;
                var8 = function() { // Environment: var8
                    _fun70045: for (var _fun70045_ip = 0;;) switch (_fun70045_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var0 = var0.mentions;
                            var0 = var0.length;
                            var4 = 0;
                            var2 = var0 > var4;
                            var0 = undefined;
                            if (!var2) {
                                _fun70045_ip = 61;
                                continue _fun70045
                            }
                        case 29:
                            var3 = _closure1_slot5;
                            var2 = var3.getUser;
                            var1 = _closure2_slot0;
                            var1 = var1.mentions;
                            var1 = var1[var4];
                            var0 = var2.bind(var3)(var1);
                        case 61:
                            return var0;
                    }
                };
                var8 = var14.bind(var15)(var13, var8);
                var1 = var1[var12];
                var7 = var7.bind(var2)(var1);
                var1 = var7.useNullableUserAuthor;
                var1 = var1.bind(var7)(var8, var11);
                var7 = var1.nick;
                var1 = _closure1_slot8;
                var0 = {};
                var0.message = var3;
                var0.channel = var11;
                var0.currentUserId = var10;
                var0.authorNick = var9;
                var0.otherUser = var8;
                var0.otherUserNick = var7;
                var0.isBlocked = var6;
                var0.isIgnored = var5;
                var0.isCallActive = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.useFormattedMessagePreview = var3;
    var2.formatMessagePreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3059, 1613, 660, 666, 566, 6646, 3942, 1234, 3939, 4246, 22, 6651, 2]);