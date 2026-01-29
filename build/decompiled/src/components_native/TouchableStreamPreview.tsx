// components_native/TouchableStreamPreview.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'borderRadius': 5,
        'overflow': 'hidden'
    };
    var3.touchable = var8;
    var8 = {};
    var16 = var9.absoluteFillObject;
    var17 = var8;
    var9 = copyDataProperties(var17, var16);
    var10 = 'center';
    var9 = 'alignItems';
    var8[var9] = var10;
    var9 = 'justifyContent';
    var8[var9] = var10;
    var9 = 12;
    var9 = var5[var9];
    var14 = var4.bind(var0)(var9);
    var13 = var14.hexWithOpacity;
    var10 = 13;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var12 = var9.PRIMARY_700;
    var9 = 0.7;
    var12 = var13.bind(var14)(var12, var9);
    var9 = 'backgroundColor';
    var8[var9] = var12;
    var3.ctaWrapper = var8;
    var8 = {
        'height': 40,
        'paddingHorizontal': 16,
        'borderRadius': 20,
        'backgroundColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 20;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PRIMARY_500;
    var8.backgroundColor = var10;
    var3.ctaBackground = var8;
    var8 = {};
    var8.lineHeight = var9;
    var3.ctaText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = function(arg0) { // Original name: StreamPreviewContainer, environment: var1
        _fun69178: for (var _fun69178_ip = 0;;) switch (_fun69178_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.style;
                var12 = var2.disableTransition;
                var _closure2_slot0 = var12;
                var1 = var2.onPress;
                var _closure2_slot1 = var1;
                var6 = var2.stream;
                var _closure2_slot2 = var6;
                var2 = var2.channel;
                var _closure2_slot3 = var2;
                var4 = _closure1_slot14;
                var3 = undefined;
                var10 = var4.bind(var3)();
                var17 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 14;
                var4 = var5[var4];
                var13 = var17.bind(var3)(var4);
                var11 = var13.isChannelFull;
                var4 = _closure1_slot11;
                var9 = _closure1_slot9;
                var13 = var11.bind(var13)(var2, var4, var9);
                var14 = 15;
                var9 = var5[var14];
                var16 = var17.bind(var3)(var9);
                var15 = var16.useStateFromStores;
                var9 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var9;
                var9 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getRemoteSessionId;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var9 = var15.bind(var16)(var11, var9);
                var11 = var5[var14];
                var18 = var17.bind(var3)(var11);
                var16 = var18.useStateFromStores;
                var11 = _closure1_slot10;
                var15 = new Array(1);
                var15[0] = var11;
                var11 = function() { // Environment: var0
                    var3 = _closure1_slot10;
                    var2 = var3.can;
                    var0 = _closure1_slot12;
                    var1 = var0.CONNECT;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = !var0;
                    return var0;
                };
                var11 = var16.bind(var18)(var15, var11);
                var15 = var5[var14];
                var18 = var17.bind(var3)(var15);
                var16 = var18.useStateFromStores;
                var15 = new Array(1);
                var15[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.isInChannel;
                    var0 = _closure2_slot3;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var16.bind(var18)(var15, var4);
                var14 = var5[var14];
                var18 = var17.bind(var3)(var14);
                var16 = var18.useStateFromStores;
                var14 = _closure1_slot6;
                var15 = new Array(2);
                var15[0] = var14;
                var14 = _closure1_slot7;
                var15[1] = var14;
                var2 = var2.id;
                var14 = new Array(2);
                var14[0] = var2;
                var2 = var6.ownerId;
                var14[1] = var2;
                var2 = function() { // Environment: var0
                    _fun69182: for (var _fun69182_ip = 0;;) switch (_fun69182_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = var0.ownerId;
                            var4 = _closure1_slot7;
                            var0 = var4.getId;
                            var0 = var0.bind(var4)();
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun69182_ip = 61;
                                continue _fun69182
                            }
                        case 37:
                            var3 = _closure1_slot6;
                            var2 = var3.isSelfStreamHidden;
                            var1 = _closure2_slot3;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 61:
                            return var0;
                    }
                };
                var2 = var16.bind(var18)(var15, var2, var14);
                var14 = 16;
                var15 = var5[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var5 = var5[var14];
                var5 = var17.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["7Xq/nV"];
                var5 = var15.bind(var16)(var5);
                if (var9) {
                    _fun69178_ip = 488;
                    continue _fun69178
                }
            case 342:
                var15 = var4;
                if (var15) {
                    _fun69178_ip = 351;
                    continue _fun69178
                }
            case 348:
                var15 = var2;
            case 351:
                var9 = var5;
                var4 = false;
                if (var15) {
                    _fun69178_ip = 544;
                    continue _fun69178
                }
            case 362:
                if (var13) {
                    _fun69178_ip = 426;
                    continue _fun69178
                }
            case 365:
                var2 = false;
                if (!var11) {
                    _fun69178_ip = 424;
                    continue _fun69178
                }
            case 370:
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var13 = var11[var14];
                var13 = var16.bind(var3)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var11 = var11[var14];
                var11 = var16.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.TVBCKZ;
                var5 = var13.bind(var15)(var11);
                var2 = true;
            case 424:
                _fun69178_ip = 480;
                continue _fun69178;
            case 426:
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var13 = var11[var14];
                var13 = var16.bind(var3)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var11 = var11[var14];
                var11 = var16.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.rZfiNq;
                var5 = var13.bind(var15)(var11);
                var2 = true;
            case 480:
                var9 = var5;
                var4 = var2;
                _fun69178_ip = 544;
                continue _fun69178;
            case 488:
                var13 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = var2[var14];
                var5 = var13.bind(var3)(var5);
                var11 = var5.intl;
                var5 = var11.string;
                var2 = var2[var14];
                var2 = var13.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.gcnYT2;
                var9 = var5.bind(var11)(var2);
                var4 = true;
            case 544:
                var11 = _closure1_slot3;
                var5 = var11.useCallback;
                var2 = new Array(3);
                var2[0] = var6;
                var2[1] = var12;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun69183: for (var _fun69183_ip = 0;;) switch (_fun69183_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 17;
                            var1 = var6[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var1);
                            var4 = var7.selectVoiceChannel;
                            var5 = _closure2_slot2;
                            var3 = var5.channelId;
                            var3 = var4.bind(var7)(var3);
                            var4 = _closure1_slot0;
                            var3 = 18;
                            var3 = var6[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.watchStream;
                            var3 = var3.bind(var4)(var5);
                            var3 = _closure2_slot0;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            if (var3) {
                                _fun69183_ip = 113;
                                continue _fun69183
                            }
                        case 90:
                            var3 = 19;
                            var3 = var5[var3];
                            var6 = var4.bind(var0)(var3);
                            var3 = _closure2_slot2;
                            var3 = var6.bind(var0)(var3);
                            _fun69183_ip = 135;
                            continue _fun69183;
                        case 113:
                            var3 = 20;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.rebuildRTCActiveChannels;
                            var3 = var3.bind(var4)();
                        case 135:
                            var4 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 20;
                            var3 = var8[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.selectParticipant;
                            var7 = _closure2_slot2;
                            var3 = var7.channelId;
                            var6 = _closure1_slot0;
                            var2 = 21;
                            var2 = var8[var2];
                            var6 = var6.bind(var0)(var2);
                            var2 = var6.encodeStreamKey;
                            var2 = var2.bind(var6)(var7);
                            var2 = var4.bind(var5)(var3, var2);
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun69183_ip = 221;
                                continue _fun69183
                            }
                        case 213:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 221:
                            return var0;
                    }
                };
                var5 = var5.bind(var11)(var1, var2);
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 22;
                var2 = var11[var2];
                var2 = var1.bind(var3)(var2);
                var0 = function() { // Environment: var0
                    _fun69184: for (var _fun69184_ip = 0;;) switch (_fun69184_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = var2.isGuildStageVoice;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun69184_ip = 70;
                                continue _fun69184
                            }
                        case 20:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.watchStream;
                            var1 = _closure2_slot2;
                            var0 = {};
                            var4 = true;
                            var0.noFocus = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 70:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                var2 = _closure1_slot13;
                var0 = 23;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.stream = var6;
                var0.ctaText = var9;
                var12 = var10.touchable;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var8;
                var0.style = var6;
                var0.onPress = var5;
                var0.disabled = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var6 = var10.ctaWrapper;
                var4.style = var6;
                var6 = {};
                var8 = var10.ctaBackground;
                var6.style = var8;
                var8 = _closure1_slot0;
                var7 = 24;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'always-white'
                };
                var10 = var10.ctaText;
                var7.style = var10;
                var7.children = var9;
                var7 = var2.bind(var3)(var8, var7);
                var6.children = var7;
                var6 = var2.bind(var3)(var5, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/TouchableStreamPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: VoiceChannelSettingsStreamPreview, environment: var1
        _fun69185: for (var _fun69185_ip = 0;;) switch (_fun69185_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 15;
                var7 = var6[var2];
                var4 = undefined;
                var10 = var3.bind(var4)(var7);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = var3.getStreamForUser;
                    var0 = _closure2_slot0;
                    var1 = var0.userId;
                    var0 = var0.guildId;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7 = var9.bind(var10)(var8, var7);
                var _closure2_slot1 = var7;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var8 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var0
                    _fun69187: for (var _fun69187_ip = 0;;) switch (_fun69187_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun69187_ip = 42;
                                continue _fun69187
                            }
                        case 16:
                            var3 = _closure1_slot8;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot1;
                            var1 = var1.channelId;
                            var0 = var2.bind(var3)(var1);
                        case 42:
                            return var0;
                    }
                };
                var6 = var3.bind(var6)(var2, var0);
                var3 = null;
                var2 = var3 == var7;
                var0 = null;
                if (var2) {
                    _fun69185_ip = 171;
                    continue _fun69185
                }
            case 118:
                var2 = var3 == var6;
                var0 = null;
                if (var2) {
                    _fun69185_ip = 171;
                    continue _fun69185
                }
            case 127:
                var3 = _closure1_slot13;
                var2 = _closure1_slot15;
                var1 = {};
                var12 = var1;
                var11 = var5;
                var5 = copyDataProperties(var12, var11);
                var5 = 'stream';
                var1[var5] = var7;
                var5 = 'channel';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 171:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3478, 3671, 1216, 1372, 1410, 3050, 3480, 660, 33, 1297, 3199, 671, 4194, 566, 1234, 4189, 7973, 7976, 7838, 3464, 4056, 8623, 3895, 2]);