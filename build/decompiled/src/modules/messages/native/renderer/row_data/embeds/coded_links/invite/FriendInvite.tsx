// modules/messages/native/renderer/row_data/embeds/coded_links/invite/FriendInvite.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/FriendInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: createFriendInvite, environment: var1
        _fun92316: for (var _fun92316_ip = 0;;) switch (_fun92316_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var5 = undefined;
                var3 = var3.bind(var5)(var0);
                var0 = arg3;
                var0 = var3.bind(var5)(var0);
                var4 = var0.colors;
                var12 = var0.baseColors;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var21 = 4;
                var3 = var0[var21];
                var3 = var7.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.string;
                var0 = var0[var21];
                var0 = var7.bind(var5)(var0);
                var0 = var0.t;
                var7 = arg1;
                if (var7) {
                    _fun92316_ip = 112;
                    continue _fun92316
                }
            case 97:
                var7 = var0.PYJHW6;
                var16 = var3.bind(var6)(var7);
                _fun92316_ip = 125;
                continue _fun92316;
            case 112:
                var0 = var0.eQyu1F;
                var16 = var3.bind(var6)(var0);
            case 125:
                var0 = var2.inviter;
                var3 = null;
                var0 = var3 != var0;
                var11 = '';
                var13 = var11;
                if (!var0) {
                    _fun92316_ip = 158;
                    continue _fun92316
                }
            case 147:
                var0 = var2.inviter;
                var13 = var0.username;
            case 158:
                var0 = var2.inviter;
                var0 = var3 != var0;
                var10 = var11;
                if (!var0) {
                    _fun92316_ip = 211;
                    continue _fun92316
                }
            case 174:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var7 = var6.bind(var5)(var0);
                var6 = var7.getUserTag;
                var0 = var2.inviter;
                var10 = var6.bind(var7)(var0);
            case 211:
                var0 = var2.inviter;
                var6 = var3 != var0;
                if (!var6) {
                    _fun92316_ip = 259;
                    continue _fun92316
                }
            case 224:
                var8 = _closure1_slot4;
                var7 = var8.isFriend;
                var9 = var2.inviter;
                var14 = var3 == var9;
                var0 = undefined;
                if (var14) {
                    _fun92316_ip = 254;
                    continue _fun92316
                }
            case 249:
                var0 = var9.id;
            case 254:
                var6 = var7.bind(var8)(var0);
            case 259:
                var0 = var2.inviter;
                var0 = var3 != var0;
                var9 = var11;
                if (!var0) {
                    _fun92316_ip = 332;
                    continue _fun92316
                }
            case 275:
                var8 = _closure1_slot3;
                var7 = var8.resolveAssetSource;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 6;
                var0 = var15[var0];
                var15 = var14.bind(var5)(var0);
                var14 = var15.getUserAvatarSource;
                var0 = var2.inviter;
                var0 = var14.bind(var15)(var0);
                var0 = var7.bind(var8)(var0);
                var9 = var0.uri;
            case 332:
                var0 = var2.inviter;
                var8 = var3 == var0;
                var7 = undefined;
                if (var8) {
                    _fun92316_ip = 352;
                    continue _fun92316
                }
            case 347:
                var7 = var0.id;
            case 352:
                var0 = arg2;
                if (!(var7 !== var0)) {
                    _fun92316_ip = 459;
                    continue _fun92316
                }
            case 359:
                var17 = var4.acceptLabelGreenColor;
                var15 = var4.acceptLabelGreenBackgroundColor;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = var0[var21];
                var8 = var7.bind(var5)(var8);
                var19 = var8.intl;
                var18 = var19.string;
                var0 = var0[var21];
                var0 = var7.bind(var5)(var0);
                var0 = var0.t;
                if (var6) {
                    _fun92316_ip = 436;
                    continue _fun92316
                }
            case 415:
                var6 = var0.ib7Ng1;
                var14 = var18.bind(var19)(var6);
                var7 = var17;
                var8 = var15;
                var6 = true;
                _fun92316_ip = 525;
                continue _fun92316;
            case 436:
                var0 = var0.xhxnPn;
                var14 = var18.bind(var19)(var0);
                var6 = true;
                var7 = var17;
                var8 = var15;
                _fun92316_ip = 525;
                continue _fun92316;
            case 459:
                var7 = var4.acceptLabelDisabledColor;
                var8 = var4.acceptLabelDisabledBackgroundColor;
                var20 = _closure1_slot0;
                var0 = _closure1_slot2;
                var18 = var0[var21];
                var18 = var20.bind(var5)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var0 = var0[var21];
                var0 = var20.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.ib7Ng1;
                var14 = var18.bind(var19)(var0);
                var6 = false;
            case 525:
                var0 = {};
                var23 = var0;
                var22 = var12;
                var12 = copyDataProperties(var23, var22);
                var15 = 25;
                var12 = 'thumbnailCornerRadius';
                var0[var12] = var15;
                var12 = var3 != var16;
                var15 = undefined;
                if (!var12) {
                    _fun92316_ip = 568;
                    continue _fun92316
                }
            case 558:
                var12 = var16.toUpperCase;
                var15 = var12.bind(var16)();
            case 568:
                var12 = 'headerText';
                var0[var12] = var15;
                var15 = var4.headerColor;
                var12 = 'headerColor';
                var0[var12] = var15;
                var12 = 'acceptLabelText';
                var0[var12] = var14;
                var12 = 'channelIcon';
                var0[var12] = var5;
                var12 = 'titleText';
                var0[var12] = var13;
                var13 = var4.titleColor;
                var12 = 'titleColor';
                var0[var12] = var13;
                var13 = var3 != var9;
                var12 = undefined;
                if (!var13) {
                    _fun92316_ip = 648;
                    continue _fun92316
                }
            case 645:
                var12 = var9;
            case 648:
                var9 = 'thumbnailUrl';
                var0[var9] = var12;
                var9 = 'subtitle';
                var0[var9] = var10;
                var9 = undefined;
                if (!(var11 !== var10)) {
                    _fun92316_ip = 678;
                    continue _fun92316
                }
            case 672:
                var9 = var4.subtitleColor;
            case 678:
                var4 = 'subtitleColor';
                var0[var4] = var9;
                var4 = 'acceptLabelBackgroundColor';
                var0[var4] = var8;
                var4 = 'acceptLabelBorderColor';
                var0[var4] = var5;
                var4 = 'acceptLabelColor';
                var0[var4] = var7;
                var7 = false;
                var4 = 'embedCanBeTapped';
                var0[var4] = var7;
                var4 = 'canBeAccepted';
                var0[var4] = var6;
                var6 = var2.channel;
                var7 = var3 == var6;
                var4 = undefined;
                if (var7) {
                    _fun92316_ip = 761;
                    continue _fun92316
                }
            case 756:
                var4 = var6.name;
            case 761:
                var6 = var3 != var4;
                var5 = undefined;
                if (!var6) {
                    _fun92316_ip = 773;
                    continue _fun92316
                }
            case 770:
                var5 = var4;
            case 773:
                var4 = 'channelName';
                var0[var4] = var5;
                var2 = var2.type;
                if (!(var3 == var2)) {
                    _fun92316_ip = 801;
                    continue _fun92316
                }
            case 791:
                var1 = _closure1_slot5;
                var2 = var1.FRIEND;
            case 801:
                var1 = 'type';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.createFriendInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3059, 3294, 9979, 1234, 3195, 1417, 2]);