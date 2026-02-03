// modules/links/native/showLongPressURLActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 8;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/links/native/showLongPressURLActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73572: for (var _fun73572_ip = 0;;) switch (_fun73572_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.urlString;
                var _closure2_slot0 = var6;
                var1 = var0.guildId;
                var _closure2_slot1 = var1;
                var3 = var0.channelId;
                var _closure2_slot2 = var3;
                var1 = var0.messageId;
                var _closure2_slot3 = var1;
                var1 = var0.disableHapticFeedback;
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun73572_ip = 58;
                    continue _fun73572
                }
            case 56:
                var1 = false;
            case 58:
                var _closure2_slot4 = var0;
                if (var1) {
                    _fun73572_ip = 119;
                    continue _fun73572
                }
            case 65:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 0;
                var2 = var8[var1];
                var4 = var7.bind(var0)(var2);
                var2 = var4.triggerHapticFeedback;
                var1 = var8[var1];
                var1 = var7.bind(var0)(var1);
                var1 = var1.HapticFeedbackTypes;
                var1 = var1.IMPACT_LIGHT;
                var1 = var2.bind(var4)(var1);
            case 119:
                var8 = new Array(0);
                var2 = var6.match;
                var1 = /^(tel|sms|mailto):([^?;]+)/;
                var1 = var2.bind(var6)(var1);
                _closure2_slot4 = var1;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun73572_ip = 393;
                    continue _fun73572
                }
            case 161:
                var9 = var8.push;
                var4 = {};
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = 1;
                var10 = var10[var12];
                var10 = var11.bind(var0)(var10);
                var13 = var10.intl;
                var11 = var13.string;
                var14 = var1[var12];
                var10 = 'mailto';
                if (!(var10 !== var14)) {
                    _fun73572_ip = 245;
                    continue _fun73572
                }
            case 213:
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var12];
                var10 = var14.bind(var0)(var10);
                var10 = var10.t;
                var10 = var10["3zozoR"];
                _fun73572_ip = 275;
                continue _fun73572;
            case 245:
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var12];
                var14 = var15.bind(var0)(var14);
                var14 = var14.t;
                var10 = var14.ZYLVKo;
            case 275:
                var10 = var11.bind(var13)(var10);
                var4.label = var10;
                var10 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 2;
                    var1 = var3[var4];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var1 = var5.presentLinkCopied;
                    var1 = var1.bind(var5)();
                    var1 = 3;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.copy;
                    var1 = _closure2_slot4;
                    var1 = var1[var4];
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.onPress = var10;
                var4 = var9.bind(var8)(var4);
                var4 = var1[var12];
                var1 = 'tel';
                if (!(var1 === var4)) {
                    _fun73572_ip = 393;
                    continue _fun73572
                }
            case 312:
                var4 = var8.push;
                var1 = {};
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = var7[var12];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var7 = var7[var12];
                var7 = var11.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["+wbjMW"];
                var7 = var9.bind(var10)(var7);
                var1.label = var7;
                var7 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openURL;
                    var6 = _closure2_slot0;
                    var5 = var6.replace;
                    var4 = 'tel:';
                    var1 = 'sms:';
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.onPress = var7;
                var1 = var4.bind(var8)(var1);
            case 393:
                var7 = {};
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = 1;
                var4 = var9[var11];
                var4 = var13.bind(var0)(var4);
                var12 = var4.intl;
                var10 = var12.string;
                var4 = var9[var11];
                var4 = var13.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.wuRE8M;
                var4 = var10.bind(var12)(var4);
                var7.label = var4;
                var4 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openURL;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7.onPress = var4;
                var4 = new Array(3);
                var4[0] = var7;
                var7 = {};
                var10 = var9[var11];
                var10 = var13.bind(var0)(var10);
                var14 = var10.intl;
                var12 = var14.string;
                var10 = var9[var11];
                var10 = var13.bind(var0)(var10);
                var10 = var10.t;
                var10 = var10.WqhZss;
                var10 = var12.bind(var14)(var10);
                var7.label = var10;
                var10 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 2;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.presentLinkCopied;
                    var1 = var1.bind(var4)();
                    var1 = 3;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.copy;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7.onPress = var10;
                var4[1] = var7;
                var16 = 2;
                var18 = var4;
                var17 = var8;
                var7 = arraySpread(var18, var17, var16);
                var8 = {};
                var10 = var9[var11];
                var10 = var13.bind(var0)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var9 = var9[var11];
                var9 = var13.bind(var0)(var9);
                var9 = var9.t;
                var9 = var9.Ej3B3Y;
                var9 = var10.bind(var12)(var9);
                var8.label = var9;
                var9 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.showShareActionSheet;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.url = var1;
                    var1 = 'Share Link';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var8.onPress = var9;
                var4[var7] = var8;
                var7 = var7 + var11;
                if (!(var2 != var3)) {
                    _fun73572_ip = 708;
                    continue _fun73572
                }
            case 628:
                var3 = var4.unshift;
                var2 = {};
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = var7[var11];
                var8 = var10.bind(var0)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var11];
                var7 = var10.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.aW2YlJ;
                var7 = var8.bind(var9)(var7);
                var2.label = var7;
                var5 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot1;
                    var1.guildId = var4;
                    var4 = _closure2_slot2;
                    var1.channelId = var4;
                    var3 = _closure2_slot3;
                    var1.messageId = var3;
                    var3 = {
                        'navigationReplace': true,
                        'safe': true
                    };
                    var1.navigationSettings = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2.onPress = var5;
                var2 = var3.bind(var4)(var2);
            case 708:
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var3 = var10.bind(var0)(var1);
                var2 = var3.showSimpleActionSheet;
                var1 = {};
                var5 = 'LongPressUrl';
                var1.key = var5;
                var5 = {};
                var8 = var7[var11];
                var8 = var10.bind(var0)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var11];
                var7 = var10.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["5oIOLX"];
                var7 = var8.bind(var9)(var7);
                var5.title = var7;
                var5.subtitle = var6;
                var1.header = var5;
                var1.options = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3270, 1234, 3138, 5286, 3135, 8266, 9236, 7724, 2]);