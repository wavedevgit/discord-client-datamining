// modules/forums/native/posts/hooks/useNativeForumPostContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageFlags;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'italic';
    var8.fontStyle = var9;
    var3.italics = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/hooks/useNativeForumPostContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90161: for (var _fun90161_ip = 0;;) switch (_fun90161_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.message;
                var3 = var1.messageContent;
                var7 = var1.messageLoaded;
                var0 = var1.isMessageDeleted;
                var9 = var1.senderModifier;
                var1 = _closure1_slot4;
                var6 = undefined;
                var1 = var1.bind(var6)();
                if (var0) {
                    _fun90161_ip = 977;
                    continue _fun90161
                }
            case 51:
                var0 = null;
                if (!(var0 != var10)) {
                    _fun90161_ip = 88;
                    continue _fun90161
                }
            case 57:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 3;
                var4 = var8[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.bind(var6)(var10);
                if (var4) {
                    _fun90161_ip = 949;
                    continue _fun90161
                }
            case 88:
                var5 = var0 != var10;
                if (!var5) {
                    _fun90161_ip = 101;
                    continue _fun90161
                }
            case 95:
                var5 = var10.blocked;
            case 101:
                var8 = var0 != var10;
                if (!var8) {
                    _fun90161_ip = 114;
                    continue _fun90161
                }
            case 108:
                var8 = var10.ignored;
            case 114:
                var4 = 'blocked';
                var4 = var4 === var9;
                if (var5) {
                    _fun90161_ip = 799;
                    continue _fun90161
                }
            case 128:
                if (var4) {
                    _fun90161_ip = 799;
                    continue _fun90161
                }
            case 134:
                if (var8) {
                    _fun90161_ip = 799;
                    continue _fun90161
                }
            case 140:
                var8 = 'ignored';
                if (!(var8 !== var9)) {
                    _fun90161_ip = 799;
                    continue _fun90161
                }
            case 151:
                var9 = var0 == var10;
                var8 = undefined;
                if (var9) {
                    _fun90161_ip = 165;
                    continue _fun90161
                }
            case 160:
                var8 = var10.content;
            case 165:
                var9 = var0 == var8;
                if (var9) {
                    _fun90161_ip = 194;
                    continue _fun90161
                }
            case 172:
                var8 = var0 == var10;
                var11 = undefined;
                if (var8) {
                    _fun90161_ip = 186;
                    continue _fun90161
                }
            case 181:
                var11 = var10.content;
            case 186:
                var8 = '';
                var9 = var8 === var11;
            case 194:
                if (var9) {
                    _fun90161_ip = 201;
                    continue _fun90161
                }
            case 197:
                var9 = var0 == var3;
            case 201:
                if (var9) {
                    _fun90161_ip = 212;
                    continue _fun90161
                }
            case 204:
                var8 = '';
                var9 = var8 === var3;
            case 212:
                if (var9) {
                    _fun90161_ip = 250;
                    continue _fun90161
                }
            case 215:
                var8 = global;
                var11 = var8.Array;
                var8 = var11.isArray;
                var8 = var8.bind(var11)(var3);
                if (!var8) {
                    _fun90161_ip = 247;
                    continue _fun90161
                }
            case 236:
                var12 = var3.length;
                var11 = 0;
                var8 = var11 === var12;
            case 247:
                var9 = var8;
            case 250:
                var8 = null;
                if (!var7) {
                    _fun90161_ip = 768;
                    continue _fun90161
                }
            case 258:
                if (!(var0 != var10)) {
                    _fun90161_ip = 710;
                    continue _fun90161
                }
            case 265:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 4;
                var7 = var12[var7];
                var11 = var11.bind(var6)(var7);
                var7 = var11.getMessageStickers;
                var7 = var7.bind(var11)(var10);
                var7 = var7.length;
                var11 = 0;
                if (!(!(var7 > var11))) {
                    _fun90161_ip = 653;
                    continue _fun90161
                }
            case 310:
                var7 = var10.interaction;
                if (!(var0 != var7)) {
                    _fun90161_ip = 336;
                    continue _fun90161
                }
            case 320:
                var12 = var10.content;
                var7 = '';
                if (!(var7 !== var12)) {
                    _fun90161_ip = 596;
                    continue _fun90161
                }
            case 336:
                var12 = var10.hasFlag;
                var7 = _closure1_slot3;
                var7 = var7.IS_VOICE_MESSAGE;
                var7 = var12.bind(var10)(var7);
                if (var7) {
                    _fun90161_ip = 539;
                    continue _fun90161
                }
            case 363:
                var12 = var10.hasFlag;
                var7 = _closure1_slot3;
                var7 = var7.IS_COMPONENTS_V2;
                var7 = var12.bind(var10)(var7);
                if (var7) {
                    _fun90161_ip = 482;
                    continue _fun90161
                }
            case 387:
                var7 = var10.embeds;
                var7 = var7.length;
                var7 = var7 > var11;
                if (var7) {
                    _fun90161_ip = 420;
                    continue _fun90161
                }
            case 405:
                var10 = var10.attachments;
                var10 = var10.length;
                var7 = var10 > var11;
            case 420:
                var0 = null;
                if (!var7) {
                    _fun90161_ip = 480;
                    continue _fun90161
                }
            case 425:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 2;
                var10 = var13[var7];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.JAKsM8;
                var0 = var10.bind(var11)(var7);
            case 480:
                _fun90161_ip = 537;
                continue _fun90161;
            case 482:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 2;
                var10 = var13[var7];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.Xxm5i3;
                var0 = var10.bind(var11)(var7);
            case 537:
                _fun90161_ip = 594;
                continue _fun90161;
            case 539:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 2;
                var10 = var13[var7];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7["6bhHrc"];
                var0 = var10.bind(var11)(var7);
            case 594:
                _fun90161_ip = 651;
                continue _fun90161;
            case 596:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 2;
                var10 = var13[var7];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7["2v7kfl"];
                var0 = var10.bind(var11)(var7);
            case 651:
                _fun90161_ip = 708;
                continue _fun90161;
            case 653:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 2;
                var10 = var13[var7];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7["7K5Lma"];
                var0 = var10.bind(var11)(var7);
            case 708:
                _fun90161_ip = 765;
                continue _fun90161;
            case 710:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 2;
                var10 = var13[var7];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.mE3KJN;
                var0 = var10.bind(var11)(var7);
            case 765:
                var8 = var0;
            case 768:
                var0 = {
                    'content': null,
                    'style': null,
                    'variant': 'text-sm/medium'
                };
                var7 = var3;
                if (!var9) {
                    _fun90161_ip = 791;
                    continue _fun90161
                }
            case 788:
                var7 = var8;
            case 791:
                var0.content = var7;
                return var0;
            case 799:
                var0 = {};
                if (var5) {
                    _fun90161_ip = 866;
                    continue _fun90161
                }
            case 804:
                if (var4) {
                    _fun90161_ip = 866;
                    continue _fun90161
                }
            case 807:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.yWK7ZM;
                var4 = var5.bind(var7)(var4);
                _fun90161_ip = 923;
                continue _fun90161;
            case 866:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 2;
                var7 = var10[var5];
                var7 = var9.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var10[var5];
                var5 = var9.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.Lkp2fB;
                var4 = var7.bind(var8)(var5);
            case 923:
                var0.content = var4;
                var4 = var1.italics;
                var0.style = var4;
                var4 = 'text-sm/normal';
                var0.variant = var4;
                return var0;
            case 949:
                var0 = {};
                var0.content = var3;
                var3 = var1.italics;
                var0.style = var3;
                var3 = 'text-sm/normal';
                var0.variant = var3;
                return var0;
            case 977:
                var0 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.U8Rr2l;
                var2 = var3.bind(var4)(var2);
                var0.content = var2;
                var1 = var1.italics;
                var0.style = var1;
                var1 = 'text-sm/normal';
                var0.variant = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1297, 1234, 6740, 3998, 2]);