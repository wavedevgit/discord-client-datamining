// modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getGuildAcronym;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot10 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun92428: for (var _fun92428_ip = 0;;) switch (_fun92428_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = '/';
                var4 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var3 = undefined;
                var0 = 2;
                var1 = var1.bind(var3)(var4, var0);
                var0 = 0;
                var4 = var1[var0];
                var0 = 1;
                var5 = var1[var0];
                var1 = _closure1_slot6;
                var0 = var1.getChannel;
                var7 = var0.bind(var1)(var5);
                var1 = _closure1_slot7;
                var0 = var1.getGuild;
                var8 = var0.bind(var1)(var4);
                var0 = null;
                if (!(var0 != var7)) {
                    _fun92428_ip = 850;
                    continue _fun92428
                }
            case 85:
                var1 = var7.isGuildVocal;
                var1 = var1.bind(var7)();
                if (!var1) {
                    _fun92428_ip = 850;
                    continue _fun92428
                }
            case 101:
                if (!(var0 != var8)) {
                    _fun92428_ip = 850;
                    continue _fun92428
                }
            case 108:
                var5 = _closure1_slot8;
                var4 = var5.can;
                var1 = _closure1_slot9;
                var1 = var1.VIEW_CHANNEL;
                var1 = var4.bind(var5)(var1, var7);
                if (!var1) {
                    _fun92428_ip = 850;
                    continue _fun92428
                }
            case 140:
                var5 = _closure1_slot8;
                var4 = var5.can;
                var1 = _closure1_slot9;
                var1 = var1.CONNECT;
                var1 = var4.bind(var5)(var1, var7);
                if (!var1) {
                    _fun92428_ip = 850;
                    continue _fun92428
                }
            case 172:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = arg1;
                var1 = var4.bind(var3)(var1);
                var4 = var1.colors;
                var9 = var1.baseColors;
                var5 = var0 == var8;
                var1 = undefined;
                if (var5) {
                    _fun92428_ip = 225;
                    continue _fun92428
                }
            case 220:
                var1 = var8.icon;
            case 225:
                if (!(var0 == var1)) {
                    _fun92428_ip = 251;
                    continue _fun92428
                }
            case 229:
                var1 = var0 != var8;
                var6 = undefined;
                if (!var1) {
                    _fun92428_ip = 247;
                    continue _fun92428
                }
            case 238:
                var1 = _closure1_slot5;
                var6 = var1.bind(var3)(var8);
            case 247:
                var5 = undefined;
                _fun92428_ip = 336;
                continue _fun92428;
            case 251:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 9;
                var1 = var11[var1];
                var11 = var10.bind(var3)(var1);
                var10 = var11.getGuildIconURL;
                var1 = {};
                var13 = var0 == var8;
                var12 = undefined;
                if (var13) {
                    _fun92428_ip = 293;
                    continue _fun92428
                }
            case 288:
                var12 = var8.id;
            case 293:
                var1.id = var12;
                var13 = var0 == var8;
                var12 = undefined;
                if (var13) {
                    _fun92428_ip = 311;
                    continue _fun92428
                }
            case 306:
                var12 = var8.icon;
            case 311:
                var1.icon = var12;
                var12 = true;
                var1.canAnimate = var12;
                var12 = 128;
                var1.size = var12;
                var5 = var10.bind(var11)(var1);
                var6 = undefined;
            case 336:
                var1 = {};
                var16 = var1;
                var15 = var9;
                var9 = copyDataProperties(var16, var15);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 10;
                var9 = var11[var9];
                var10 = var10.bind(var3)(var9);
                var9 = var10.isAndroid;
                var9 = var9.bind(var10)();
                var10 = undefined;
                if (!var9) {
                    _fun92428_ip = 387;
                    continue _fun92428
                }
            case 383:
                var10 = '';
            case 387:
                var9 = 'headerText';
                var1[var9] = var10;
                var10 = var4.headerColor;
                var9 = 'headerColor';
                var1[var9] = var10;
                var9 = var7.isGuildStageVoice;
                var11 = var9.bind(var7)();
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var9 = 11;
                var12 = var10[var9];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var10[var9];
                var10 = var14.bind(var3)(var10);
                var10 = var10.t;
                if (var11) {
                    _fun92428_ip = 481;
                    continue _fun92428
                }
            case 468:
                var11 = var10.gpqgah;
                var11 = var12.bind(var13)(var11);
                _fun92428_ip = 492;
                continue _fun92428;
            case 481:
                var10 = var10["7vb2cc"];
                var11 = var12.bind(var13)(var10);
            case 492:
                var10 = 'acceptLabelText';
                var1[var10] = var11;
                var10 = 'onlineText';
                var1[var10] = var3;
                var10 = 'memberText';
                var1[var10] = var3;
                var12 = _closure1_slot4;
                var11 = var12.resolveAssetSource;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 12;
                var10 = var14[var10];
                var13 = var13.bind(var3)(var10);
                var10 = var13.getChannelIcon;
                var10 = var10.bind(var13)(var7);
                var10 = var11.bind(var12)(var10);
                var12 = var0 == var10;
                var11 = undefined;
                if (var12) {
                    _fun92428_ip = 581;
                    continue _fun92428
                }
            case 576:
                var11 = var10.uri;
            case 581:
                var10 = 'channelIcon';
                var1[var10] = var11;
                var10 = var7.name;
                var7 = 'titleText';
                var1[var7] = var10;
                var10 = var4.titleColor;
                var7 = 'titleColor';
                var1[var7] = var10;
                var10 = var0 != var5;
                var7 = undefined;
                if (!var10) {
                    _fun92428_ip = 631;
                    continue _fun92428
                }
            case 628:
                var7 = var5;
            case 631:
                var5 = 'thumbnailUrl';
                var1[var5] = var7;
                var5 = 'thumbnailText';
                var1[var5] = var6;
                var5 = 'subtitleColor';
                var1[var5] = var3;
                var6 = var4.acceptLabelGreenBackgroundColor;
                var5 = 'acceptLabelBackgroundColor';
                var1[var5] = var6;
                var5 = 'acceptLabelBorderColor';
                var1[var5] = var3;
                var5 = var4.acceptLabelGreenColor;
                var4 = 'acceptLabelColor';
                var1[var4] = var5;
                var5 = true;
                var4 = 'embedCanBeTapped';
                var1[var4] = var5;
                var5 = false;
                var4 = 'canBeAccepted';
                var1[var4] = var5;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = var4[var9];
                var6 = var5.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var4 = var4[var9];
                var4 = var5.bind(var3)(var4);
                var4 = var4.t;
                var5 = var4["2wimj5"];
                var4 = {};
                var8 = var8.name;
                var4.guildName = var8;
                var5 = var6.bind(var7)(var5, var4);
                var4 = 'channelName';
                var1[var4] = var5;
                var5 = '';
                var4 = 'subtitle';
                var1[var4] = var5;
                var2 = _closure1_slot10;
                var4 = var2.GUILD;
                var2 = 'type';
                var1[var2] = var4;
                var2 = 'inviteSplash';
                var1[var2] = var3;
                return var1;
            case 850:
                return var0;
        }
    };
    var2.createVoiceChannelLinkEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 27, 1416, 1372, 1410, 3091, 660, 3335, 10080, 1417, 478, 1234, 4807, 2]);