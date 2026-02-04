// modules/message_request/native/MessageRequestRowSenderDetails.tsx
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var10 = 2;
    var3 = var5[var10];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 5;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var14 = var11.AVATAR_SIZE_MAP;
    var11 = 6;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.AvatarSizes;
    var12 = var12.NORMAL;
    var12 = var14[var12];
    var12 = var12 / var10;
    var8.borderRadius = var12;
    var12 = 7;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var14;
    var3.avatar = var8;
    var8 = {
        'marginRight': 16,
        'alignItems': 'flex-start',
        'height': '100%'
    };
    var3.avatarContainer = var8;
    var8 = {
        'marginRight': 8,
        'justifyContent': 'flex-start',
        'alignItems': 'flex-start',
        'flex': 1
    };
    var3.detailsContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.messageDetails = var8;
    var8 = {};
    var8.flexShrink = var9;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var12;
    var3.username = var8;
    var8 = {};
    var8.marginHorizontal = var11;
    var3.timestampSeparator = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.messagePreview = var8;
    var8 = {};
    var8.flexShrink = var9;
    var3.usernameTextContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/native/MessageRequestRowSenderDetails.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109497: for (var _fun109497_ip = 0;;) switch (_fun109497_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.channel;
                var23 = var1.otherUser;
                var _closure2_slot0 = var23;
                var1 = _closure1_slot8;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 8;
                var2 = var11[var2];
                var5 = var1.bind(var3)(var2);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    _fun109498: for (var _fun109498_ip = 0;;) switch (_fun109498_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun109498_ip = 83;
                                continue _fun109498
                            }
                        case 13:
                            var5 = _closure1_slot4;
                            var4 = var5.getNickname;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var4.bind(var5)(var1);
                            if (!(var0 == var1)) {
                                _fun109498_ip = 81;
                                continue _fun109498
                            }
                        case 44:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 9;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.getGlobalName;
                            var2 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2);
                        case 81:
                            return var1;
                        case 83:
                            return var0;
                    }
                };
                var18 = var4.bind(var5)(var2, var0);
                var0 = 10;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useMessageRequestRelativeTimestampText;
                var17 = var0.bind(var1)(var12);
                var0 = global;
                var4 = var0.Math;
                var2 = var4.floor;
                var1 = var0.Math;
                var0 = var1.random;
                var5 = var0.bind(var1)();
                var8 = _closure1_slot1;
                var0 = 11;
                var1 = var11[var0];
                var1 = var8.bind(var3)(var1);
                var1 = var1.DEFAULT_AVATARS;
                var1 = var1.length;
                var1 = var5 * var1;
                var1 = var2.bind(var4)(var1);
                var0 = var11[var0];
                var0 = var8.bind(var3)(var0);
                var0 = var0.DEFAULT_AVATARS;
                var10 = var0[var1];
                var2 = _closure1_slot6;
                var1 = _closure1_slot7;
                var0 = {};
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var13.avatarContainer;
                var4.style = var7;
                var7 = 6;
                var7 = var11[var7];
                var8 = var8.bind(var3)(var7);
                var16 = null;
                if (!(var16 == var23)) {
                    _fun109497_ip = 258;
                    continue _fun109497
                }
            case 239:
                var7 = {};
                var11 = var13.avatar;
                var7.avatarStyle = var11;
                var7.source = var10;
                _fun109497_ip = 309;
                continue _fun109497;
            case 258:
                var10 = {};
                var11 = var13.avatar;
                var10.avatarStyle = var11;
                var10.user = var23;
                var10.guildId = var3;
                var11 = true;
                var10.disablePlaceholder = var11;
                var14 = var16 == var23;
                var11 = undefined;
                if (var14) {
                    _fun109497_ip = 301;
                    continue _fun109497
                }
            case 295:
                var11 = var23.avatarDecoration;
            case 301:
                var10.avatarDecoration = var11;
                var7 = var10;
            case 309:
                var7 = var6.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var13.detailsContainer;
                var5.style = var8;
                var8 = {};
                var10 = var13.messageDetails;
                var8.style = var10;
                var19 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = 12;
                var10 = var14[var15];
                var10 = var19.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var20 = var13.usernameTextContainer;
                var10.style = var20;
                var20 = _closure1_slot5;
                var14 = var14[var15];
                var14 = var19.bind(var3)(var14);
                var19 = var14.Text;
                var14 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var13.username;
                var14.style = var21;
                var21 = var18;
                if (!(var16 == var21)) {
                    _fun109497_ip = 479;
                    continue _fun109497
                }
            case 462:
                var24 = var16 == var23;
                var22 = undefined;
                if (var24) {
                    _fun109497_ip = 476;
                    continue _fun109497
                }
            case 471:
                var22 = var23.username;
            case 476:
                var21 = var22;
            case 479:
                if (!(var16 == var21)) {
                    _fun109497_ip = 538;
                    continue _fun109497
                }
            case 483:
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var22 = 13;
                var24 = var27[var22];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var22 = var27[var22];
                var22 = var26.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["30mdIx"];
                var21 = var24.bind(var25)(var22);
            case 538:
                var14.children = var21;
                var19 = var20.bind(var3)(var19, var14);
                var14 = new Array(2);
                var14[0] = var19;
                var16 = var16 != var18;
                if (!var16) {
                    _fun109497_ip = 650;
                    continue _fun109497
                }
            case 563:
                var20 = _closure1_slot6;
                var22 = _closure1_slot0;
                var24 = _closure1_slot2;
                var18 = var24[var15];
                var18 = var22.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var21 = 9;
                var21 = var24[var21];
                var22 = var22.bind(var3)(var21);
                var21 = var22.getUserTag;
                var22 = var21.bind(var22)(var23);
                var21 = [' '];
                var21[1] = var22;
                var18.children = var21;
                var16 = var20.bind(var3)(var19, var18);
            case 650:
                var14[1] = var16;
                var10.children = var14;
                var11 = var7.bind(var3)(var11, var10);
                var10 = new Array(3);
                var10[0] = var11;
                var11 = _closure1_slot5;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var18 = var14[var15];
                var18 = var16.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted',
                    'children': '·'
                };
                var20 = var13.timestampSeparator;
                var18.style = var20;
                var18 = var11.bind(var3)(var19, var18);
                var10[1] = var18;
                var15 = var14[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'variant': 'text-xs/semibold',
                    'color': 'text-muted'
                };
                var15.children = var17;
                var15 = var11.bind(var3)(var16, var15);
                var10[2] = var15;
                var8.children = var10;
                var10 = var7.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var10 = _closure1_slot1;
                var9 = 14;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = var13.messagePreview;
                var9.style = var13;
                var9.channel = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3100, 33, 1297, 5454, 5452, 671, 566, 3236, 14087, 1418, 3941, 1234, 14089, 2]);