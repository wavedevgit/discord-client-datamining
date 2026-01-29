// modules/checkpoint/native/components/screens/CheckpointEndScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun86960: for (var _fun86960_ip = 0;;) switch (_fun86960_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = function(arg0) { // Original name: CardAnimation, environment: var1
                _fun86961: for (var _fun86961_ip = 0;;) switch (_fun86961_ip) {
                    case 0:
                        var1 = arg0;
                        var13 = var1.user;
                        var5 = var1.reducedMotion;
                        var4 = var1.step;
                        var _closure2_slot0 = var4;
                        var7 = _closure1_slot3;
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 13;
                        var1 = var8[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.CheckpointColorContext;
                        var1 = var7.bind(var3)(var1);
                        var7 = 14;
                        var7 = var8[var7];
                        var9 = var2.bind(var3)(var7);
                        var7 = var9.useToken;
                        var1 = var1.primaryColor;
                        var7 = var7.bind(var9)(var1);
                        var1 = 11;
                        var1 = var8[var1];
                        var9 = var2.bind(var3)(var1);
                        var8 = var9.useStateFromStores;
                        var1 = _closure1_slot9;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = function() { // Environment: var0
                            var1 = _closure1_slot9;
                            var0 = var1.getCheckpointData;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var1 = var8.bind(var9)(var2, var1);
                        var2 = var1.cardId;
                        var17 = 0;
                        var11 = 0;
                        if (!(var3 !== var2)) {
                            _fun86961_ip = 154;
                            continue _fun86961
                        }
                    case 151:
                        var11 = var2;
                    case 154:
                        var2 = var1.powerLevel;
                        var14 = 0;
                        if (!(var3 !== var2)) {
                            _fun86961_ip = 169;
                            continue _fun86961
                        }
                    case 166:
                        var14 = var2;
                    case 169:
                        var1 = var1.powerLevelPercentile;
                        var8 = 0;
                        if (!(var3 !== var1)) {
                            _fun86961_ip = 184;
                            continue _fun86961
                        }
                    case 181:
                        var8 = var1;
                    case 184:
                        var2 = _closure1_slot4;
                        var1 = new Array(1);
                        var1[0] = var4;
                        var0 = function() { // Environment: var0
                            _fun86963: for (var _fun86963_ip = 0;;) switch (_fun86963_ip) {
                                case 0:
                                    var3 = _closure2_slot0;
                                    var2 = _closure1_slot11;
                                    var2 = var2.END_REWARD;
                                    if (!(!(var3 <= var2))) {
                                        _fun86963_ip = 66;
                                        continue _fun86963
                                    }
                                case 24:
                                    var2 = _closure2_slot0;
                                    var0 = _closure1_slot11;
                                    var0 = var0.END_CLAIM;
                                    if (!(var2 !== var0)) {
                                        _fun86963_ip = 54;
                                        continue _fun86963
                                    }
                                case 42:
                                    var0 = _closure1_slot15;
                                    var0 = var0.SUMMARY;
                                    _fun86963_ip = 64;
                                    continue _fun86963;
                                case 54:
                                    var2 = _closure1_slot15;
                                    var0 = var2.CLAIM;
                                case 64:
                                    _fun86963_ip = 76;
                                    continue _fun86963;
                                case 66:
                                    var1 = _closure1_slot15;
                                    var0 = var1.REWARD;
                                case 76:
                                    return var0;
                            }
                        };
                        var9 = var2.bind(var3)(var0, var1);
                        var2 = _closure1_slot13;
                        var1 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 15;
                        var0 = var4[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.CheckpointCardRive;
                        var0 = {};
                        var4 = _closure1_slot16;
                        var4 = var4[var11];
                        var0.defaultViewModelInstance = var4;
                        var4 = {};
                        var10 = null;
                        var15 = var10 == var13;
                        var12 = undefined;
                        if (var15) {
                            _fun86961_ip = 287;
                            continue _fun86961
                        }
                    case 267:
                        var16 = var13.id;
                        var15 = var16.substring;
                        var13 = 4;
                        var12 = var15.bind(var16)(var17, var13);
                    case 287:
                        var13 = var10 != var12;
                        var10 = '0000';
                        if (!var13) {
                            _fun86961_ip = 303;
                            continue _fun86961
                        }
                    case 300:
                        var10 = var12;
                    case 303:
                        var4['id#'] = var10;
                        var10 = global;
                        var13 = var10.Math;
                        var12 = var13.round;
                        var14 = var12.bind(var13)(var14);
                        var12 = var10.HermesInternal;
                        var12 = var12.concat;
                        var13 = '';
                        var12 = var12.bind(var13)(var14);
                        var4.LVL = var12;
                        var10 = var10.HermesInternal;
                        var12 = var10.concat;
                        var10 = '/10';
                        var10 = var12.bind(var13)(var11, var10);
                        var4.Outof = var10;
                        var10 = _closure1_slot12;
                        var10 = var10[var11];
                        var4.PersonaName = var10;
                        var4.AnimationState = var9;
                        var4.FillColor = var7;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 16;
                        var6 = var9[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.getCheckpointPowerBarUnits;
                        var6 = var6.bind(var7)(var8);
                        var4.PowerMeter = var6;
                        var4.reducedMotion = var5;
                        var0.dataBinding = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var0 = function(arg0) { // Original name: CardSection, environment: var1
                _fun86964: for (var _fun86964_ip = 0;;) switch (_fun86964_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.step;
                        var1 = var0.onNext;
                        var _closure2_slot0 = var1;
                        var17 = var0.currentUser;
                        var3 = undefined;
                        var _closure2_slot2 = var3;
                        var _closure2_slot3 = var3;
                        var _closure2_slot4 = var3;
                        var _closure2_slot5 = var3;
                        var _closure2_slot6 = var3;
                        var _closure2_slot7 = var3;
                        var _closure2_slot8 = var3;
                        var _closure2_slot9 = var3;
                        var _closure2_slot10 = var3;
                        var _closure2_slot11 = var3;
                        var _closure2_slot12 = var3;
                        var0 = _closure1_slot17;
                        var14 = var0.bind(var3)();
                        var _closure2_slot1 = var14;
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var5 = 11;
                        var0 = var0[var5];
                        var4 = var1.bind(var3)(var0);
                        var2 = var4.useStateFromStores;
                        var0 = _closure1_slot9;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var13
                            var1 = _closure1_slot9;
                            var0 = var1.getCheckpointData;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var0 = var2.bind(var4)(var1, var0);
                        var1 = var0.messages;
                        if (!(var3 === var1)) {
                            _fun86964_ip = 160;
                            continue _fun86964
                        }
                    case 148:
                        var2 = {};
                        var4 = 0;
                        var2.numMessagesSent = var4;
                        var1 = var2;
                    case 160:
                        var20 = var1.numMessagesSent;
                        _closure2_slot2 = var20;
                        var1 = var0.voice;
                        if (!(var3 === var1)) {
                            _fun86964_ip = 192;
                            continue _fun86964
                        }
                    case 180:
                        var2 = {};
                        var4 = 0;
                        var2.totalVoiceMinutes = var4;
                        var1 = var2;
                    case 192:
                        var15 = var1.totalVoiceMinutes;
                        var1 = var0.emojis;
                        if (!(var3 === var1)) {
                            _fun86964_ip = 229;
                            continue _fun86964
                        }
                    case 208:
                        var2 = {};
                        var4 = 0;
                        var2.numEmojisSent = var4;
                        var4 = new Array(0);
                        var2.emojis = var4;
                        var1 = var2;
                    case 229:
                        var12 = var1.numEmojisSent;
                        _closure2_slot3 = var12;
                        var1 = var1.emojis;
                        var2 = var0.guilds;
                        if (!(var3 === var2)) {
                            _fun86964_ip = 269;
                            continue _fun86964
                        }
                    case 255:
                        var4 = {};
                        var7 = new Array(0);
                        var4.guilds = var7;
                        var2 = var4;
                    case 269:
                        var4 = var2.guilds;
                        var0 = var0.applications;
                        if (!(var3 === var0)) {
                            _fun86964_ip = 299;
                            continue _fun86964
                        }
                    case 285:
                        var2 = {};
                        var7 = new Array(0);
                        var2.applications = var7;
                        var0 = var2;
                    case 299:
                        var0 = var0.applications;
                        var7 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 17;
                        var2 = var11[var2];
                        var2 = var7.bind(var3)(var2);
                        var2 = var2.bind(var3)();
                        var9 = var2.insets;
                        var8 = _closure1_slot0;
                        var2 = 16;
                        var2 = var11[var2];
                        var7 = var8.bind(var3)(var2);
                        var2 = var7.getDurationAndUnit;
                        var2 = var2.bind(var7)(var15);
                        var15 = var2.unit;
                        _closure2_slot4 = var15;
                        var19 = var2.duration;
                        _closure2_slot5 = var19;
                        var2 = var11[var5];
                        var18 = var8.bind(var3)(var2);
                        var16 = var18.useStateFromStores;
                        var2 = _closure1_slot6;
                        var7 = new Array(1);
                        var7[0] = var2;
                        var2 = function() { // Environment: var13
                            var0 = _closure1_slot6;
                            var0 = var0.useReducedMotion;
                            return var0;
                        };
                        var16 = var16.bind(var18)(var7, var2);
                        var7 = _closure1_slot3;
                        var2 = 13;
                        var2 = var11[var2];
                        var2 = var8.bind(var3)(var2);
                        var2 = var2.CheckpointColorContext;
                        var2 = var7.bind(var3)(var2);
                        var7 = 14;
                        var7 = var11[var7];
                        var8 = var8.bind(var3)(var7);
                        var7 = var8.useToken;
                        var2 = var2.primaryColor;
                        var22 = var7.bind(var8)(var2);
                        _closure2_slot6 = var22;
                        var2 = var1.length;
                        var18 = 0;
                        var7 = var2 > var18;
                        var2 = null;
                        var11 = null;
                        if (!var7) {
                            _fun86964_ip = 502;
                            continue _fun86964
                        }
                    case 498:
                        var11 = var1[var18];
                    case 502:
                        _closure2_slot7 = var11;
                        var1 = var4.length;
                        var7 = var1 > var18;
                        var1 = null;
                        if (!var7) {
                            _fun86964_ip = 529;
                            continue _fun86964
                        }
                    case 520:
                        var4 = var4[var18];
                        var1 = var4.guild;
                    case 529:
                        _closure2_slot8 = var1;
                        var1 = var0.length;
                        var1 = var1 > var18;
                        var4 = null;
                        if (!var1) {
                            _fun86964_ip = 557;
                            continue _fun86964
                        }
                    case 547:
                        var0 = var0[var18];
                        var4 = var0.game;
                    case 557:
                        _closure2_slot9 = var4;
                        var1 = var2 == var11;
                        var0 = undefined;
                        if (var1) {
                            _fun86964_ip = 575;
                            continue _fun86964
                        }
                    case 570:
                        var0 = var11.id;
                    case 575:
                        var0 = var2 != var0;
                        var7 = undefined;
                        if (!var0) {
                            _fun86964_ip = 650;
                            continue _fun86964
                        }
                    case 584:
                        var1 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var0 = 18;
                        var0 = var8[var0];
                        var8 = var1.bind(var3)(var0);
                        var1 = var8.getEmojiURL;
                        var0 = {};
                        var21 = var11.id;
                        var0.id = var21;
                        var21 = !var16;
                        if (!var21) {
                            _fun86964_ip = 633;
                            continue _fun86964
                        }
                    case 627:
                        var21 = var11.animated;
                    case 633:
                        var0.animated = var21;
                        var21 = 20;
                        var0.size = var21;
                        var7 = var1.bind(var8)(var0);
                    case 650:
                        _closure2_slot10 = var7;
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var0 = var0[var5];
                        var8 = var1.bind(var3)(var0);
                        var5 = var8.useStateFromStores;
                        var0 = _closure1_slot7;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var13
                            _fun86967: for (var _fun86967_ip = 0;;) switch (_fun86967_ip) {
                                case 0:
                                    var2 = _closure1_slot7;
                                    var1 = var2.getGuild;
                                    var4 = _closure2_slot8;
                                    var0 = null;
                                    var4 = var0 == var4;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun86967_ip = 39;
                                        continue _fun86967
                                    }
                                case 30:
                                    var3 = _closure2_slot8;
                                    var0 = var3.id;
                                case 39:
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var5 = var5.bind(var8)(var1, var0);
                        _closure2_slot11 = var5;
                        var1 = var2 != var4;
                        var0 = null;
                        if (!var1) {
                            _fun86964_ip = 779;
                            continue _fun86964
                        }
                    case 714:
                        var1 = var4.icon;
                        var1 = var2 != var1;
                        var0 = null;
                        if (!var1) {
                            _fun86964_ip = 779;
                            continue _fun86964
                        }
                    case 728:
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 18;
                        var1 = var8[var1];
                        var8 = var2.bind(var3)(var1);
                        var2 = var8.getApplicationIconSource;
                        var1 = {};
                        var21 = var4.id;
                        var1.id = var21;
                        var21 = var4.icon;
                        var1.icon = var21;
                        var0 = var2.bind(var8)(var1);
                    case 779:
                        _closure2_slot12 = var0;
                        var1 = _closure1_slot11;
                        var1 = var1.END_CLAIM;
                        var8 = var6 !== var1;
                        var2 = _closure1_slot4;
                        var21 = var14.title;
                        var1 = new Array(15);
                        var1[0] = var21;
                        var21 = var14.statIcon;
                        var1[1] = var21;
                        var21 = var14.textEmoji;
                        var1[2] = var21;
                        var21 = var14.emojiStyles;
                        var1[3] = var21;
                        var21 = var14.emojiWrapper;
                        var1[4] = var21;
                        var1[5] = var22;
                        var1[6] = var20;
                        var1[7] = var19;
                        var1[8] = var15;
                        var1[9] = var12;
                        var1[10] = var11;
                        var1[11] = var7;
                        var1[12] = var5;
                        var1[13] = var4;
                        var1[14] = var0;
                        var0 = function() { // Environment: var13
                            _fun86968: for (var _fun86968_ip = 0;;) switch (_fun86968_ip) {
                                case 0:
                                    var1 = {};
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var0 = 19;
                                    var0 = var6[var0];
                                    var5 = undefined;
                                    var0 = var4.bind(var5)(var0);
                                    var0 = var0.ChatIcon;
                                    var1.icon = var0;
                                    var15 = 20;
                                    var0 = var6[var15];
                                    var0 = var4.bind(var5)(var0);
                                    var8 = var0.intl;
                                    var3 = var8.string;
                                    var2 = _closure1_slot1;
                                    var7 = 21;
                                    var0 = var6[var7];
                                    var0 = var2.bind(var5)(var0);
                                    var0 = var0.wWKySP;
                                    var0 = var3.bind(var8)(var0);
                                    var1.title = var0;
                                    var3 = _closure1_slot13;
                                    var14 = 22;
                                    var0 = var6[var14];
                                    var2 = var2.bind(var5)(var0);
                                    var0 = {
                                        'variant': 'heading-xl/medium',
                                        'adjustsFontSizeToFit': true,
                                        'lineClamp': 1
                                    };
                                    var8 = _closure2_slot2;
                                    var0.children = var8;
                                    var0 = var3.bind(var5)(var2, var0);
                                    var1.content = var0;
                                    var0 = new Array(6);
                                    var0[0] = var1;
                                    var1 = {};
                                    var2 = 23;
                                    var2 = var6[var2];
                                    var2 = var4.bind(var5)(var2);
                                    var2 = var2.MicrophoneIcon;
                                    var1.icon = var2;
                                    var3 = _closure2_slot4;
                                    var2 = 24;
                                    var2 = var6[var2];
                                    var2 = var4.bind(var5)(var2);
                                    var2 = var2.TimeUnits;
                                    var2 = var2.HOURS;
                                    if (!(var3 !== var2)) {
                                        _fun86968_ip = 258;
                                        continue _fun86968
                                    }
                                case 205:
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var3 = var2[var15];
                                    var3 = var4.bind(var5)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var6 = _closure1_slot1;
                                    var2 = var2[var7];
                                    var2 = var6.bind(var5)(var2);
                                    var2 = var2.RmVTph;
                                    var2 = var3.bind(var4)(var2);
                                    _fun86968_ip = 321;
                                    continue _fun86968;
                                case 258:
                                    var6 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var4 = var3[var15];
                                    var4 = var6.bind(var5)(var4);
                                    var8 = var4.intl;
                                    var6 = var8.format;
                                    var4 = _closure1_slot1;
                                    var3 = var3[var7];
                                    var3 = var4.bind(var5)(var3);
                                    var4 = var3.Xu0QsX;
                                    var3 = {};
                                    var9 = _closure2_slot5;
                                    var3.numHours = var9;
                                    var2 = var6.bind(var8)(var4, var3);
                                case 321:
                                    var1.title = var2;
                                    var8 = _closure1_slot13;
                                    var6 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var3 = var2[var14];
                                    var4 = var6.bind(var5)(var3);
                                    var3 = {
                                        'variant': 'heading-xl/medium',
                                        'adjustsFontSizeToFit': true,
                                        'lineClamp': 1
                                    };
                                    var9 = _closure2_slot5;
                                    var3.children = var9;
                                    var3 = var8.bind(var5)(var4, var3);
                                    var1.content = var3;
                                    var0[1] = var1;
                                    var1 = {};
                                    var4 = _closure1_slot0;
                                    var3 = 25;
                                    var3 = var2[var3];
                                    var3 = var4.bind(var5)(var3);
                                    var3 = var3.ReactionIcon;
                                    var1.icon = var3;
                                    var3 = var2[var15];
                                    var3 = var4.bind(var5)(var3);
                                    var9 = var3.intl;
                                    var8 = var9.string;
                                    var3 = var2[var7];
                                    var3 = var6.bind(var5)(var3);
                                    var3 = var3.zcbFu1;
                                    var3 = var8.bind(var9)(var3);
                                    var1.title = var3;
                                    var9 = _closure1_slot13;
                                    var3 = var2[var14];
                                    var8 = var6.bind(var5)(var3);
                                    var3 = {
                                        'variant': 'heading-xl/medium',
                                        'adjustsFontSizeToFit': true,
                                        'lineClamp': 1
                                    };
                                    var12 = _closure2_slot3;
                                    var3.children = var12;
                                    var3 = var9.bind(var5)(var8, var3);
                                    var1.content = var3;
                                    var0[2] = var1;
                                    var1 = {};
                                    var3 = 26;
                                    var3 = var2[var3];
                                    var3 = var4.bind(var5)(var3);
                                    var3 = var3.StarIcon;
                                    var1.icon = var3;
                                    var3 = var2[var15];
                                    var3 = var4.bind(var5)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var2 = var2[var7];
                                    var2 = var6.bind(var5)(var2);
                                    var2 = var2["3sARW7"];
                                    var2 = var3.bind(var4)(var2);
                                    var1.title = var2;
                                    var4 = _closure1_slot14;
                                    var3 = _closure1_slot5;
                                    var2 = {};
                                    var6 = _closure2_slot1;
                                    var8 = var6.title;
                                    var6 = new Array(2);
                                    var6[0] = var8;
                                    var9 = {};
                                    var8 = 8;
                                    var9.marginTop = var8;
                                    var6[1] = var9;
                                    var2.style = var6;
                                    var6 = _closure2_slot7;
                                    var13 = null;
                                    if (!(var13 == var6)) {
                                        _fun86968_ip = 686;
                                        continue _fun86968
                                    }
                                case 627:
                                    var12 = _closure1_slot13;
                                    var9 = _closure1_slot0;
                                    var16 = _closure1_slot2;
                                    var6 = 28;
                                    var6 = var16[var6];
                                    var6 = var9.bind(var5)(var6);
                                    var9 = var6.UnknownGameIcon;
                                    var6 = {};
                                    var16 = _closure2_slot6;
                                    var6.color = var16;
                                    var16 = 'md';
                                    var6.size = var16;
                                    var9 = var12.bind(var5)(var9, var6);
                                    _fun86968_ip = 853;
                                    continue _fun86968;
                                case 686:
                                    var16 = _closure1_slot13;
                                    var12 = _closure1_slot5;
                                    var6 = {};
                                    var17 = _closure2_slot1;
                                    var18 = var17.emojiWrapper;
                                    var17 = new Array(2);
                                    var17[0] = var18;
                                    var18 = {};
                                    var19 = _closure2_slot6;
                                    var18.borderColor = var19;
                                    var17[1] = var18;
                                    var6.style = var17;
                                    var19 = _closure1_slot13;
                                    var18 = _closure1_slot1;
                                    var20 = _closure1_slot2;
                                    var17 = 27;
                                    var17 = var20[var17];
                                    var18 = var18.bind(var5)(var17);
                                    var17 = {};
                                    var20 = _closure2_slot7;
                                    var20 = var20.id;
                                    var21 = var13 == var20;
                                    var20 = '';
                                    if (!var21) {
                                        _fun86968_ip = 788;
                                        continue _fun86968
                                    }
                                case 779:
                                    var21 = _closure2_slot7;
                                    var20 = var21.name;
                                case 788:
                                    var17.name = var20;
                                    var20 = _closure2_slot10;
                                    var17.src = var20;
                                    var20 = _closure2_slot1;
                                    var21 = var20.emojiStyles;
                                    var17.style = var21;
                                    var21 = var20.emojiStyles;
                                    var17.fastImageStyle = var21;
                                    var20 = var20.textEmoji;
                                    var17.textEmojiStyle = var20;
                                    var17 = var19.bind(var5)(var18, var17);
                                    var6.children = var17;
                                    var9 = var16.bind(var5)(var12, var6);
                                case 853:
                                    var6 = new Array(2);
                                    var6[0] = var9;
                                    var17 = _closure1_slot13;
                                    var12 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var9 = var9[var14];
                                    var16 = var12.bind(var5)(var9);
                                    var9 = {};
                                    var12 = 'text-sm/medium';
                                    var9.variant = var12;
                                    var18 = _closure2_slot7;
                                    if (!(var13 != var18)) {
                                        _fun86968_ip = 989;
                                        continue _fun86968
                                    }
                                case 900:
                                    var18 = _closure2_slot7;
                                    var18 = var18.id;
                                    if (!(var13 != var18)) {
                                        _fun86968_ip = 947;
                                        continue _fun86968
                                    }
                                case 913:
                                    var18 = _closure2_slot7;
                                    var20 = var18.name;
                                    var18 = global;
                                    var18 = var18.HermesInternal;
                                    var19 = var18.concat;
                                    var18 = ':';
                                    var18 = var19.bind(var18)(var20, var18);
                                    _fun86968_ip = 987;
                                    continue _fun86968;
                                case 947:
                                    var20 = _closure1_slot1;
                                    var21 = _closure1_slot2;
                                    var19 = 29;
                                    var19 = var21[var19];
                                    var21 = var20.bind(var5)(var19);
                                    var20 = var21.convertSurrogateToName;
                                    var19 = _closure2_slot7;
                                    var19 = var19.name;
                                    var18 = var20.bind(var21)(var19);
                                case 987:
                                    _fun86968_ip = 1041;
                                    continue _fun86968;
                                case 989:
                                    var22 = _closure1_slot0;
                                    var19 = _closure1_slot2;
                                    var20 = var19[var15];
                                    var20 = var22.bind(var5)(var20);
                                    var21 = var20.intl;
                                    var20 = var21.string;
                                    var19 = var19[var15];
                                    var19 = var22.bind(var5)(var19);
                                    var19 = var19.t;
                                    var19 = var19.PoWNfe;
                                    var18 = var20.bind(var21)(var19);
                                case 1041:
                                    var9.children = var18;
                                    var9 = var17.bind(var5)(var16, var9);
                                    var6[1] = var9;
                                    var2.children = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var1.content = var2;
                                    var0[3] = var1;
                                    var1 = {};
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var3 = 30;
                                    var3 = var2[var3];
                                    var3 = var4.bind(var5)(var3);
                                    var3 = var3.GameControllerIcon;
                                    var1.icon = var3;
                                    var3 = var2[var15];
                                    var3 = var4.bind(var5)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var6 = _closure1_slot1;
                                    var2 = var2[var7];
                                    var2 = var6.bind(var5)(var2);
                                    var2 = var2.RbT4Zq;
                                    var2 = var3.bind(var4)(var2);
                                    var1.title = var2;
                                    var4 = _closure1_slot14;
                                    var3 = _closure1_slot5;
                                    var2 = {};
                                    var6 = _closure2_slot1;
                                    var9 = var6.title;
                                    var6 = new Array(2);
                                    var6[0] = var9;
                                    var9 = {};
                                    var9.marginTop = var8;
                                    var6[1] = var9;
                                    var2.style = var6;
                                    var6 = _closure2_slot12;
                                    if (!(var13 == var6)) {
                                        _fun86968_ip = 1259;
                                        continue _fun86968
                                    }
                                case 1203:
                                    var16 = _closure1_slot13;
                                    var9 = _closure1_slot0;
                                    var17 = _closure1_slot2;
                                    var6 = 28;
                                    var6 = var17[var6];
                                    var6 = var9.bind(var5)(var6);
                                    var9 = var6.UnknownGameIcon;
                                    var6 = {};
                                    var17 = _closure2_slot6;
                                    var6.color = var17;
                                    var17 = 'md';
                                    var6.size = var17;
                                    var9 = var16.bind(var5)(var9, var6);
                                    _fun86968_ip = 1313;
                                    continue _fun86968;
                                case 1259:
                                    var17 = _closure1_slot13;
                                    var16 = _closure1_slot1;
                                    var18 = _closure1_slot2;
                                    var6 = 31;
                                    var6 = var18[var6];
                                    var16 = var16.bind(var5)(var6);
                                    var6 = {};
                                    var18 = _closure2_slot12;
                                    var6.source = var18;
                                    var18 = _closure2_slot1;
                                    var18 = var18.statIcon;
                                    var6.style = var18;
                                    var9 = var17.bind(var5)(var16, var6);
                                case 1313:
                                    var6 = new Array(2);
                                    var6[0] = var9;
                                    var17 = _closure1_slot13;
                                    var16 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var9 = var9[var14];
                                    var16 = var16.bind(var5)(var9);
                                    var9 = {};
                                    var9.variant = var12;
                                    var18 = _closure2_slot9;
                                    if (!(var13 == var18)) {
                                        _fun86968_ip = 1410;
                                        continue _fun86968
                                    }
                                case 1356:
                                    var21 = _closure1_slot0;
                                    var18 = _closure1_slot2;
                                    var19 = var18[var15];
                                    var19 = var21.bind(var5)(var19);
                                    var20 = var19.intl;
                                    var19 = var20.string;
                                    var18 = var18[var15];
                                    var18 = var21.bind(var5)(var18);
                                    var18 = var18.t;
                                    var18 = var18.PoWNfe;
                                    var18 = var19.bind(var20)(var18);
                                    _fun86968_ip = 1419;
                                    continue _fun86968;
                                case 1410:
                                    var19 = _closure2_slot9;
                                    var18 = var19.name;
                                case 1419:
                                    var9.children = var18;
                                    var9 = var17.bind(var5)(var16, var9);
                                    var6[1] = var9;
                                    var2.children = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var1.content = var2;
                                    var0[4] = var1;
                                    var1 = {};
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var3 = 32;
                                    var3 = var2[var3];
                                    var3 = var4.bind(var5)(var3);
                                    var3 = var3.ServerIcon;
                                    var1.icon = var3;
                                    var3 = var2[var15];
                                    var3 = var4.bind(var5)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var6 = _closure1_slot1;
                                    var2 = var2[var7];
                                    var2 = var6.bind(var5)(var2);
                                    var2 = var2["8XPMJj"];
                                    var2 = var3.bind(var4)(var2);
                                    var1.title = var2;
                                    var4 = _closure1_slot14;
                                    var3 = _closure1_slot5;
                                    var2 = {};
                                    var6 = _closure2_slot1;
                                    var7 = var6.title;
                                    var6 = new Array(2);
                                    var6[0] = var7;
                                    var7 = {};
                                    var7.marginTop = var8;
                                    var6[1] = var7;
                                    var2.style = var6;
                                    var6 = _closure2_slot11;
                                    if (!(var13 == var6)) {
                                        _fun86968_ip = 1637;
                                        continue _fun86968
                                    }
                                case 1581:
                                    var8 = _closure1_slot13;
                                    var7 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var6 = 28;
                                    var6 = var9[var6];
                                    var6 = var7.bind(var5)(var6);
                                    var7 = var6.UnknownGameIcon;
                                    var6 = {};
                                    var9 = _closure2_slot6;
                                    var6.color = var9;
                                    var9 = 'md';
                                    var6.size = var9;
                                    var7 = var8.bind(var5)(var7, var6);
                                    _fun86968_ip = 1720;
                                    continue _fun86968;
                                case 1637:
                                    var9 = _closure1_slot13;
                                    var8 = _closure1_slot1;
                                    var18 = _closure1_slot2;
                                    var16 = 33;
                                    var6 = var18[var16];
                                    var8 = var8.bind(var5)(var6);
                                    var6 = {};
                                    var17 = _closure2_slot11;
                                    var6.guild = var17;
                                    var17 = _closure1_slot0;
                                    var16 = var18[var16];
                                    var16 = var17.bind(var5)(var16);
                                    var16 = var16.GuildIconSizes;
                                    var16 = var16.XSMALL;
                                    var6.size = var16;
                                    var16 = _closure2_slot1;
                                    var16 = var16.statIcon;
                                    var6.style = var16;
                                    var7 = var9.bind(var5)(var8, var6);
                                case 1720:
                                    var6 = new Array(2);
                                    var6[0] = var7;
                                    var9 = _closure1_slot13;
                                    var8 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var7 = var7[var14];
                                    var8 = var8.bind(var5)(var7);
                                    var7 = {};
                                    var7.variant = var12;
                                    var12 = _closure2_slot11;
                                    if (!(var13 == var12)) {
                                        _fun86968_ip = 1817;
                                        continue _fun86968
                                    }
                                case 1763:
                                    var14 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var12 = var10[var15];
                                    var12 = var14.bind(var5)(var12);
                                    var13 = var12.intl;
                                    var12 = var13.string;
                                    var10 = var10[var15];
                                    var10 = var14.bind(var5)(var10);
                                    var10 = var10.t;
                                    var10 = var10.PoWNfe;
                                    var10 = var12.bind(var13)(var10);
                                    _fun86968_ip = 1826;
                                    continue _fun86968;
                                case 1817:
                                    var11 = _closure2_slot11;
                                    var10 = var11.name;
                                case 1826:
                                    var7.children = var10;
                                    var7 = var9.bind(var5)(var8, var7);
                                    var6[1] = var7;
                                    var2.children = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var1.content = var2;
                                    var0[5] = var1;
                                    return var0;
                            }
                        };
                        var15 = var2.bind(var3)(var0, var1);
                        var2 = _closure1_slot14;
                        var1 = _closure1_slot5;
                        var0 = {};
                        var5 = var14.cardContainer;
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = {};
                        var7 = 0;
                        if (!var8) {
                            _fun86964_ip = 978;
                            continue _fun86964
                        }
                    case 938:
                        var12 = var9.bottom;
                        var19 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var11 = 9;
                        var11 = var20[var11];
                        var11 = var19.bind(var3)(var11);
                        var11 = var11.spacing;
                        var11 = var11.PX_96;
                        var7 = var12 + var11;
                    case 978:
                        var5.paddingBottom = var7;
                        var20 = var9.right;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var7 = 9;
                        var19 = var12[var7];
                        var19 = var11.bind(var3)(var19);
                        var19 = var19.spacing;
                        var19 = var19.PX_24;
                        var19 = var20 + var19;
                        var5.paddingRight = var19;
                        var9 = var9.left;
                        var7 = var12[var7];
                        var7 = var11.bind(var3)(var7);
                        var7 = var7.spacing;
                        var7 = var7.PX_24;
                        var7 = var9 + var7;
                        var5.paddingLeft = var7;
                        var12 = 'auto';
                        var7 = var12;
                        if (!var8) {
                            _fun86964_ip = 1078;
                            continue _fun86964
                        }
                    case 1072:
                        var7 = '100%';
                    case 1078:
                        var5.height = var7;
                        var4[1] = var5;
                        var0.style = var4;
                        var4 = _closure1_slot11;
                        var4 = var4.END_REWARD;
                        var5 = var6 === var4;
                        if (!var5) {
                            _fun86964_ip = 1383;
                            continue _fun86964
                        }
                    case 1110:
                        var8 = _closure1_slot14;
                        var7 = _closure1_slot5;
                        var4 = {};
                        var9 = var14.cardContainerContent;
                        var4.style = var9;
                        var23 = _closure1_slot14;
                        var20 = _closure1_slot5;
                        var9 = {};
                        var11 = var14.title;
                        var9.style = var11;
                        var24 = _closure1_slot13;
                        var29 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var11 = 34;
                        var11 = var21[var11];
                        var11 = var29.bind(var3)(var11);
                        var19 = var11.ExperimentalCheckpointIcon;
                        var11 = {};
                        var25 = 'xs';
                        var11.size = var25;
                        var25 = {};
                        var25.tintColor = var22;
                        var11.style = var25;
                        var11 = var24.bind(var3)(var19, var11);
                        var24 = new Array(2);
                        var24[0] = var11;
                        var27 = _closure1_slot13;
                        var19 = _closure1_slot1;
                        var11 = 22;
                        var25 = var21[var11];
                        var26 = var19.bind(var3)(var25);
                        var25 = {
                            'variant': 'eyebrow',
                            'adjustsFontSizeToFit': true,
                            'lineClamp': 2
                        };
                        var28 = 20;
                        var28 = var21[var28];
                        var28 = var29.bind(var3)(var28);
                        var30 = var28.intl;
                        var29 = var30.string;
                        var28 = 21;
                        var28 = var21[var28];
                        var28 = var19.bind(var3)(var28);
                        var28 = var28.ir6nEQ;
                        var28 = var29.bind(var30)(var28);
                        var25.children = var28;
                        var25 = var27.bind(var3)(var26, var25);
                        var24[1] = var25;
                        var9.children = var24;
                        var20 = var23.bind(var3)(var20, var9);
                        var9 = new Array(2);
                        var9[0] = var20;
                        var20 = _closure1_slot13;
                        var11 = var21[var11];
                        var19 = var19.bind(var3)(var11);
                        var11 = {
                            'variant': 'display-lg',
                            'style': null,
                            'adjustsFontSizeToFit': true,
                            'lineClamp': 2,
                            'children': 'DECO'
                        };
                        var21 = var14.display;
                        var11.style = var21;
                        var11 = var20.bind(var3)(var19, var11);
                        var9[1] = var11;
                        var4.children = var9;
                        var5 = var8.bind(var3)(var7, var4);
                    case 1383:
                        var4 = new Array(4);
                        var4[0] = var5;
                        var8 = _closure1_slot13;
                        var7 = _closure1_slot5;
                        var5 = {};
                        var11 = var14.riveContainer;
                        var9 = new Array(2);
                        var9[0] = var11;
                        var11 = {};
                        var19 = _closure1_slot11;
                        var19 = var19.END_SUMMARY;
                        if (!(var6 === var19)) {
                            _fun86964_ip = 1437;
                            continue _fun86964
                        }
                    case 1431:
                        var12 = '50%';
                    case 1437:
                        var11.maxHeight = var12;
                        var12 = _closure1_slot11;
                        var19 = var12.END_SUMMARY;
                        var12 = '-10%';
                        if (!(var6 === var19)) {
                            _fun86964_ip = 1464;
                            continue _fun86964
                        }
                    case 1462:
                        var12 = 0;
                    case 1464:
                        var11.marginTop = var12;
                        var9[1] = var11;
                        var5.style = var9;
                        var12 = _closure1_slot13;
                        var11 = _closure1_slot18;
                        var9 = {};
                        var9.user = var17;
                        var9.reducedMotion = var16;
                        var9.step = var6;
                        var9 = var12.bind(var3)(var11, var9);
                        var5.children = var9;
                        var5 = var8.bind(var3)(var7, var5);
                        var4[1] = var5;
                        var5 = _closure1_slot11;
                        var5 = var5.END_REWARD;
                        var5 = var6 === var5;
                        if (!var5) {
                            _fun86964_ip = 1705;
                            continue _fun86964
                        }
                    case 1540:
                        var9 = _closure1_slot13;
                        var12 = _closure1_slot1;
                        var21 = _closure1_slot2;
                        var7 = 35;
                        var7 = var21[var7];
                        var8 = var12.bind(var3)(var7);
                        var7 = {};
                        var11 = function() { // Original name: onPress, environment: var13
                            _fun86969: for (var _fun86969_ip = 0;;) switch (_fun86969_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun86969_ip = 23;
                                        continue _fun86969
                                    }
                                case 13:
                                    var1 = _closure2_slot0;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 23:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7.onPress = var11;
                        var11 = {};
                        var16 = '50%';
                        var11.minWidth = var16;
                        var7.style = var11;
                        var16 = _closure1_slot13;
                        var11 = 22;
                        var11 = var21[var11];
                        var12 = var12.bind(var3)(var11);
                        var11 = {};
                        var17 = 'eyebrow';
                        var11.variant = var17;
                        var17 = var14.buttonCTA;
                        var11.style = var17;
                        var20 = _closure1_slot0;
                        var17 = 20;
                        var18 = var21[var17];
                        var18 = var20.bind(var3)(var18);
                        var19 = var18.intl;
                        var18 = var19.string;
                        var17 = var21[var17];
                        var17 = var20.bind(var3)(var17);
                        var17 = var17.t;
                        var17 = var17.dcztdU;
                        var17 = var18.bind(var19)(var17);
                        var11.children = var17;
                        var11 = var16.bind(var3)(var12, var11);
                        var7.children = var11;
                        var5 = var9.bind(var3)(var8, var7);
                    case 1705:
                        var4[2] = var5;
                        var5 = _closure1_slot11;
                        var5 = var5.END_SUMMARY;
                        var5 = var6 === var5;
                        if (!var5) {
                            _fun86964_ip = 2132;
                            continue _fun86964
                        }
                    case 1729:
                        var8 = _closure1_slot14;
                        var7 = _closure1_slot5;
                        var6 = {};
                        var11 = var14.cardContainerContent;
                        var9 = new Array(3);
                        var9[0] = var11;
                        var11 = var14.cardContainerFooter;
                        var9[1] = var11;
                        var11 = {};
                        var12 = 'flex-start';
                        var11.alignItems = var12;
                        var9[2] = var11;
                        var6.style = var9;
                        var16 = _closure1_slot14;
                        var12 = _closure1_slot5;
                        var9 = {};
                        var11 = var14.title;
                        var9.style = var11;
                        var18 = _closure1_slot13;
                        var19 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var11 = 34;
                        var11 = var21[var11];
                        var11 = var19.bind(var3)(var11);
                        var17 = var11.ExperimentalCheckpointIcon;
                        var11 = {};
                        var20 = 'xs';
                        var11.size = var20;
                        var20 = {};
                        var20.tintColor = var22;
                        var11.style = var20;
                        var11 = var18.bind(var3)(var17, var11);
                        var22 = new Array(2);
                        var22[0] = var11;
                        var25 = _closure1_slot13;
                        var20 = _closure1_slot1;
                        var11 = 22;
                        var17 = var21[var11];
                        var24 = var20.bind(var3)(var17);
                        var23 = {
                            'variant': 'eyebrow',
                            'adjustsFontSizeToFit': true,
                            'lineClamp': 2
                        };
                        var18 = 20;
                        var17 = var21[var18];
                        var17 = var19.bind(var3)(var17);
                        var28 = var17.intl;
                        var27 = var28.string;
                        var17 = 21;
                        var26 = var21[var17];
                        var26 = var20.bind(var3)(var26);
                        var26 = var26.ir6nEQ;
                        var26 = var27.bind(var28)(var26);
                        var23.children = var26;
                        var23 = var25.bind(var3)(var24, var23);
                        var22[1] = var23;
                        var9.children = var22;
                        var12 = var16.bind(var3)(var12, var9);
                        var9 = new Array(3);
                        var9[0] = var12;
                        var16 = _closure1_slot13;
                        var11 = var21[var11];
                        var12 = var20.bind(var3)(var11);
                        var11 = {
                            'variant': 'display-lg',
                            'style': null,
                            'adjustsFontSizeToFit': true,
                            'lineClamp': 2
                        };
                        var22 = var14.display;
                        var11.style = var22;
                        var18 = var21[var18];
                        var18 = var19.bind(var3)(var18);
                        var19 = var18.intl;
                        var18 = var19.string;
                        var17 = var21[var17];
                        var17 = var20.bind(var3)(var17);
                        var17 = var17.y4M1na;
                        var17 = var18.bind(var19)(var17);
                        var11.children = var17;
                        var11 = var16.bind(var3)(var12, var11);
                        var9[1] = var11;
                        var12 = _closure1_slot13;
                        var11 = _closure1_slot5;
                        var10 = {};
                        var14 = var14.stats;
                        var10.style = var14;
                        var14 = var15.map;
                        var13 = function(arg0, arg1) { // Environment: var13
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot20;
                            var2 = {};
                            var6 = arg0;
                            var7 = var2;
                            var0 = copyDataProperties(var7, var6);
                            var1 = undefined;
                            var0 = arg1;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                        };
                        var13 = var14.bind(var15)(var13);
                        var10.children = var13;
                        var10 = var12.bind(var3)(var11, var10);
                        var9[2] = var10;
                        var6.children = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 2132:
                        var4[3] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot19 = var0;
            var0 = function(arg0) { // Original name: CheckpointStat, environment: var1
                var0 = arg0;
                var11 = var0.icon;
                var12 = var0.title;
                var5 = var0.content;
                var0 = _closure1_slot17;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot3;
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 13;
                var0 = var13[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.CheckpointColorContext;
                var0 = var1.bind(var3)(var0);
                var1 = 14;
                var1 = var13[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useToken;
                var0 = var0.primaryColor;
                var15 = var1.bind(var2)(var0);
                var2 = _closure1_slot14;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var8.statContainer;
                var0.style = var4;
                var7 = _closure1_slot14;
                var6 = _closure1_slot5;
                var4 = {};
                var8 = var8.title;
                var4.style = var8;
                var10 = _closure1_slot13;
                var8 = {};
                var14 = 'xs';
                var8.size = var14;
                var14 = {};
                var14.tintColor = var15;
                var8.style = var14;
                var10 = var10.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot13;
                var10 = _closure1_slot1;
                var9 = 22;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {
                    'variant': 'eyebrow',
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2,
                    'textBreakStrategy': 'highQuality',
                    'lineBreakStrategyIOS': 'standard'
                };
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot20 = var0;
            var0 = function(arg0) { // Original name: ContentSection, environment: var1
                _fun86972: for (var _fun86972_ip = 0;;) switch (_fun86972_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.step;
                        var13 = var0.currentUser;
                        var0 = _closure1_slot17;
                        var4 = undefined;
                        var22 = var0.bind(var4)();
                        var5 = _closure1_slot3;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 13;
                        var0 = var2[var0];
                        var0 = var1.bind(var4)(var0);
                        var0 = var0.CheckpointColorContext;
                        var0 = var5.bind(var4)(var0);
                        var6 = _closure1_slot1;
                        var5 = 17;
                        var5 = var2[var5];
                        var5 = var6.bind(var4)(var5);
                        var5 = var5.bind(var4)();
                        var7 = var5.insets;
                        var5 = 14;
                        var5 = var2[var5];
                        var6 = var1.bind(var4)(var5);
                        var5 = var6.useToken;
                        var0 = var0.backgroundOverlayColor;
                        var8 = var5.bind(var6)(var0);
                        var0 = 11;
                        var0 = var2[var0];
                        var5 = var1.bind(var4)(var0);
                        var2 = var5.useStateFromStores;
                        var0 = _closure1_slot9;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var0
                            var1 = _closure1_slot9;
                            var0 = var1.getCheckpointData;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var0 = var2.bind(var5)(var1, var0);
                        var12 = var0.avatarDecoration;
                        var0 = _closure1_slot11;
                        var1 = var0.END_CLAIM;
                        var2 = null;
                        var0 = null;
                        if (!(var3 === var1)) {
                            _fun86972_ip = 819;
                            continue _fun86972
                        }
                    case 189:
                        var1 = var2 == var13;
                        var0 = null;
                        if (var1) {
                            _fun86972_ip = 819;
                            continue _fun86972
                        }
                    case 201:
                        var3 = _closure1_slot13;
                        var2 = _closure1_slot5;
                        var1 = {};
                        var6 = var22.contentContainer;
                        var5 = new Array(2);
                        var5[0] = var6;
                        var6 = {};
                        var6.backgroundColor = var8;
                        var8 = var7.bottom;
                        var10 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var7 = 9;
                        var7 = var15[var7];
                        var7 = var10.bind(var4)(var7);
                        var7 = var7.spacing;
                        var7 = var7.PX_96;
                        var7 = var8 + var7;
                        var6.paddingBottom = var7;
                        var5[1] = var6;
                        var1.style = var5;
                        var7 = _closure1_slot14;
                        var6 = _closure1_slot5;
                        var5 = {};
                        var8 = var22.content;
                        var5.style = var8;
                        var16 = _closure1_slot14;
                        var11 = _closure1_slot5;
                        var8 = {};
                        var20 = _closure1_slot13;
                        var18 = 22;
                        var14 = var15[var18];
                        var19 = var10.bind(var4)(var14);
                        var17 = {
                            'variant': 'eyebrow',
                            'style': null,
                            'adjustsFontSizeToFit': true,
                            'lineClamp': 2
                        };
                        var14 = var22.title;
                        var17.style = var14;
                        var14 = _closure1_slot0;
                        var25 = 20;
                        var21 = var15[var25];
                        var21 = var14.bind(var4)(var21);
                        var26 = var21.intl;
                        var24 = var26.string;
                        var23 = 21;
                        var21 = var15[var23];
                        var21 = var10.bind(var4)(var21);
                        var21 = var21.vKovUV;
                        var21 = var24.bind(var26)(var21);
                        var17.children = var21;
                        var19 = var20.bind(var4)(var19, var17);
                        var17 = new Array(4);
                        var17[0] = var19;
                        var21 = _closure1_slot13;
                        var19 = var15[var18];
                        var20 = var10.bind(var4)(var19);
                        var19 = {
                            'variant': 'heading-lg/medium',
                            'adjustsFontSizeToFit': true,
                            'lineClamp': 3
                        };
                        var24 = var15[var25];
                        var24 = var14.bind(var4)(var24);
                        var26 = var24.intl;
                        var24 = var26.string;
                        var23 = var15[var23];
                        var23 = var10.bind(var4)(var23);
                        var23 = var23["94azAy"];
                        var23 = var24.bind(var26)(var23);
                        var19.children = var23;
                        var19 = var21.bind(var4)(var20, var19);
                        var17[1] = var19;
                        var21 = _closure1_slot13;
                        var19 = 36;
                        var19 = var15[var19];
                        var20 = var10.bind(var4)(var19);
                        var19 = {};
                        var22 = var22.button;
                        var19.style = var22;
                        var19 = var21.bind(var4)(var20, var19);
                        var17[2] = var19;
                        var20 = _closure1_slot13;
                        var18 = var15[var18];
                        var19 = var10.bind(var4)(var18);
                        var18 = {
                            'variant': 'heading-sm/medium',
                            'adjustsFontSizeToFit': true,
                            'lineClamp': 1
                        };
                        var21 = var15[var25];
                        var21 = var14.bind(var4)(var21);
                        var24 = var21.intl;
                        var23 = var24.format;
                        var21 = var15[var25];
                        var21 = var14.bind(var4)(var21);
                        var21 = var21.t;
                        var22 = var21.eZSTa5;
                        var21 = {};
                        var26 = global;
                        var28 = var26.Date;
                        var26 = var28.prototype;
                        var27 = Object.create(var26, {
                            constructor: {
                                value: var28
                            }
                        });
                        var30 = '2026-01-15';
                        var31 = var27;
                        var26 = new var31[var28](var30, var29);
                        var28 = var26 instanceof Object ? var26 : var27;
                        var27 = var28.toLocaleDateString;
                        var25 = var15[var25];
                        var25 = var14.bind(var4)(var25);
                        var25 = var25.intl;
                        var26 = var25.currentLocale;
                        var25 = {
                            'month': 'long',
                            'day': 'numeric',
                            'year': 'numeric',
                            'timeZone': 'UTC'
                        };
                        var25 = var27.bind(var28)(var26, var25);
                        var21.date = var25;
                        var21 = var23.bind(var24)(var22, var21);
                        var18.children = var21;
                        var18 = var20.bind(var4)(var19, var18);
                        var17[3] = var18;
                        var8.children = var17;
                        var11 = var16.bind(var4)(var11, var8);
                        var8 = new Array(2);
                        var8[0] = var11;
                        var11 = _closure1_slot13;
                        var9 = 37;
                        var9 = var15[var9];
                        var10 = var10.bind(var4)(var9);
                        var9 = {};
                        var9.user = var13;
                        var13 = 38;
                        var13 = var15[var13];
                        var13 = var14.bind(var4)(var13);
                        var13 = var13.AvatarSizes;
                        var13 = var13.EDIT_AVATAR_DECORATION;
                        var9.size = var13;
                        var9.pendingAvatarDecoration = var12;
                        var9 = var11.bind(var4)(var10, var9);
                        var8[1] = var9;
                        var5.children = var8;
                        var5 = var7.bind(var4)(var6, var5);
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 819:
                        return var0;
                }
            };
            var _closure1_slot21 = var0;
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
            var6 = var3.useContext;
            var _closure1_slot3 = var6;
            var3 = var3.useMemo;
            var _closure1_slot4 = var3;
            var11 = 1;
            var3 = var5[var11];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot5 = var3;
            var9 = 2;
            var3 = var5[var9];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var8 = 3;
            var3 = var5[var8];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.CheckpointPersonas;
            var7 = var3.CheckpointSlides;
            var _closure1_slot10 = var7;
            var7 = var3.CheckpointSteps;
            var _closure1_slot11 = var7;
            var3 = var3.PersonaNames;
            var _closure1_slot12 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot13 = var7;
            var3 = var3.jsxs;
            var _closure1_slot14 = var3;
            var3 = {};
            var3.REWARD = var11;
            var7 = 'REWARD';
            var3[var11] = var7;
            var3.CLAIM = var9;
            var7 = 'CLAIM';
            var3[var9] = var7;
            var3.SUMMARY = var8;
            var7 = 'SUMMARY';
            var3[var8] = var7;
            var _closure1_slot15 = var3;
            var3 = {};
            var8 = var6.ZERO;
            var7 = 'Bonsai';
            var3[var8] = var7;
            var8 = var6.ONE;
            var7 = 'Donut';
            var3[var8] = var7;
            var8 = var6.TWO;
            var7 = 'Capybara';
            var3[var8] = var7;
            var8 = var6.THREE;
            var7 = 'Disco';
            var3[var8] = var7;
            var8 = var6.FOUR;
            var7 = 'Origami';
            var3[var8] = var7;
            var8 = var6.FIVE;
            var7 = 'Snail';
            var3[var8] = var7;
            var8 = var6.SIX;
            var7 = 'Duck';
            var3[var8] = var7;
            var8 = var6.SEVEN;
            var7 = 'Banana';
            var3[var8] = var7;
            var8 = var6.EIGHT;
            var7 = 'Cat';
            var3[var8] = var7;
            var7 = var6.NINE;
            var6 = 'Cassette';
            var3[var7] = var6;
            var _closure1_slot16 = var3;
            var3 = 8;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var12 = '100%';
            var8 = {
                'height': '100%',
                'width': '100%',
                'display': 'flex'
            };
            var3.container = var8;
            var11 = 'center';
            var8 = {
                'display': 'flex',
                'justifyContent': 'space-between',
                'alignItems': 'center',
                'width': '100%',
                'flexGrow': 1
            };
            var3.cardContainer = var8;
            var8 = {
                'width': '100%',
                'flexShrink': 0
            };
            var3.contentContainer = var8;
            var8 = {
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems': 'center',
                'gap': 8
            };
            var3.title = var8;
            var8 = {
                'fontWeight': 800,
                'flexWrap': 'wrap'
            };
            var3.titleText = var8;
            var8 = {};
            var9 = 48;
            var8.lineHeight = var9;
            var9 = 9;
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_4;
            var8.marginTop = var13;
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_24;
            var8.marginBottom = var13;
            var13 = 'uppercase';
            var8.textTransform = var13;
            var3.display = var8;
            var14 = 16;
            var15 = 20;
            var8 = {
                'fontWeight': 800,
                'fontSize': 16,
                'lineHeight': 20,
                'textAlign': 'center'
            };
            var3.buttonCTA = var8;
            var8 = {
                'flexShrink': 0,
                'width': '100%',
                'display': 'flex',
                'alignItems': 'center'
            };
            var3.cardContainerContent = var8;
            var8 = {
                'flexGrow': 1,
                'width': '100%'
            };
            var3.riveContainer = var8;
            var8 = {};
            var8.width = var12;
            var3.cardContainerFooter = var8;
            var8 = {
                'paddingHorizontal': null,
                'paddingTop': null,
                'display': 'flex',
                'flexDirection': 'row',
                'justifyContent': 'space-between'
            };
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_24;
            var8.paddingHorizontal = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_32;
            var8.paddingTop = var12;
            var3.content = var8;
            var8 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_16;
            var8.marginTop = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_12;
            var8.marginBottom = var12;
            var3.button = var8;
            var8 = {
                'display': 'flex',
                'flexDirection': 'row',
                'flexWrap': 'wrap',
                'marginTop': 4294967280
            };
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_16;
            var8.columnGap = var12;
            var3.stats = var8;
            var8 = {
                'flexBasis': '40%',
                'flexGrow': 1
            };
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_12;
            var8.marginBottom = var12;
            var3.statContainer = var8;
            var8 = {
                'width': 24,
                'height': 24
            };
            var13 = 24;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.radii;
            var12 = var12.none;
            var8.borderRadius = var12;
            var3.statIcon = var8;
            var8 = {};
            var12 = 10;
            var16 = var5[var12];
            var17 = var4.bind(var0)(var16);
            var16 = var17.isIOS;
            var16 = var16.bind(var17)();
            if (!var16) {
                _fun86960_ip = 1057;
                continue _fun86960
            }
        case 1054:
            var14 = var15;
        case 1057:
            var8.fontSize = var14;
            var12 = var5[var12];
            var14 = var4.bind(var0)(var12);
            var12 = var14.isIOS;
            var14 = var12.bind(var14)();
            var12 = undefined;
            if (!var14) {
                _fun86960_ip = 1089;
                continue _fun86960
            }
        case 1086:
            var12 = var13;
        case 1089:
            var8.lineHeight = var12;
            var8.textAlign = var11;
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.colors;
            var9 = var9.INTERACTIVE_TEXT_DEFAULT;
            var8.color = var9;
            var3.textEmoji = var8;
            var8 = {
                'width': 20,
                'height': 20
            };
            var3.emojiStyles = var8;
            var8 = {
                'borderWidth': 1,
                'display': 'flex',
                'padding': 1
            };
            var3.emojiWrapper = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot17 = var3;
            var3 = 39;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/checkpoint/native/components/screens/CheckpointEndScreen.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: CheckpointEndScreen, environment: var1
                var0 = arg0;
                var13 = var0.step;
                var12 = var0.onNext;
                var0 = _closure1_slot17;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var2.bind(var5)(var1, var0);
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var0 = 12;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = _closure1_slot10;
                var4 = var4.END;
                var0.slide = var4;
                var4 = true;
                var0.allowFullScreen = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var7.container;
                var4.style = var7;
                var10 = _closure1_slot13;
                var9 = _closure1_slot19;
                var7 = {};
                var7.step = var13;
                var7.onNext = var12;
                var7.currentUser = var11;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot13;
                var9 = _closure1_slot21;
                var8 = {};
                var8.step = var13;
                var8.onNext = var12;
                var8.currentUser = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1410, 1613, 11128, 9119, 33, 1297, 671, 479, 566, 11132, 11130, 3110, 3118, 6806, 4849, 1417, 4794, 1234, 2267, 11137, 10737, 3486, 7636, 8519, 5727, 7803, 3063, 5284, 4660, 5315, 7353, 11177, 11139, 11138, 5692, 5411, 2]);