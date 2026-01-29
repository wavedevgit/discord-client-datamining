// modules/messages/native/renderer/transformMessageComponents.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: transformToRowGeneratedComponent, environment: var3
        _fun56094: for (var _fun56094_ip = 0;;) switch (_fun56094_ip) {
            case 0:
                var21 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var21;
                var _closure2_slot1 = var5;
                var7 = function(arg0) { // Original name: getChildComponent, environment: var1
                    _fun56095: for (var _fun56095_ip = 0;;) switch (_fun56095_ip) {
                        case 0:
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var1 = var3.bind(var1)(var2, var0);
                            var0 = null;
                            var2 = var0 == var1;
                            if (var2) {
                                _fun56095_ip = 37;
                                continue _fun56095
                            }
                        case 34:
                            var0 = var1;
                        case 37:
                            return var0;
                    }
                };
                var _closure2_slot7 = var7;
                var4 = var21.message;
                var _closure2_slot2 = var4;
                var3 = var21.interaction;
                var14 = var21.guildId;
                var10 = var21.shouldDisableInteractiveComponents;
                var16 = var21.shouldObscureSpoiler;
                var _closure2_slot3 = var16;
                var15 = var21.enabledContentHarmTypeFlags;
                var _closure2_slot4 = var15;
                var0 = var21.shouldShowMosaicMediaDescriptions;
                var _closure2_slot5 = var0;
                var11 = var21.shouldAgeVerify;
                var _closure2_slot6 = var11;
                var12 = var21.colors;
                var8 = var21.markdownConfigs;
                var13 = var5.type;
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 5;
                var2 = var2[var9];
                var6 = undefined;
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.ACTION_ROW;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 3761;
                    continue _fun56094
                }
            case 153:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.BUTTON;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 3594;
                    continue _fun56094
                }
            case 189:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.STRING_SELECT;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 3428;
                    continue _fun56094
                }
            case 225:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.USER_SELECT;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 3252;
                    continue _fun56094
                }
            case 261:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.ROLE_SELECT;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 3252;
                    continue _fun56094
                }
            case 297:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.MENTIONABLE_SELECT;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 3252;
                    continue _fun56094
                }
            case 333:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHANNEL_SELECT;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 3252;
                    continue _fun56094
                }
            case 369:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.SECTION;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 3103;
                    continue _fun56094
                }
            case 405:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.TEXT_DISPLAY;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 3053;
                    continue _fun56094
                }
            case 441:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.THUMBNAIL;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 2590;
                    continue _fun56094
                }
            case 477:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.MEDIA_GALLERY;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 2494;
                    continue _fun56094
                }
            case 513:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.FILE;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 2069;
                    continue _fun56094
                }
            case 549:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.SEPARATOR;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 2067;
                    continue _fun56094
                }
            case 585:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.TEXT_INPUT;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 2063;
                    continue _fun56094
                }
            case 621:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CONTENT_INVENTORY_ENTRY;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 1994;
                    continue _fun56094
                }
            case 657:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CONTAINER;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 1754;
                    continue _fun56094
                }
            case 693:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.LABEL;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 1750;
                    continue _fun56094
                }
            case 729:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.FILE_UPLOAD;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 1750;
                    continue _fun56094
                }
            case 765:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHECKPOINT_CARD;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 897;
                    continue _fun56094
                }
            case 798:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.RADIO_GROUP;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 893;
                    continue _fun56094
                }
            case 831:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var17.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHECKBOX_GROUP;
                if (!(var2 !== var13)) {
                    _fun56094_ip = 893;
                    continue _fun56094
                }
            case 864:
                var13 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var13.bind(var6)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHECKBOX;
            case 893:
                var2 = null;
                return var2;
            case 897:
                var23 = var5.checkpointData;
                var13 = _closure1_slot4;
                var2 = _closure1_slot3;
                var18 = var13.bind(var6)(var5, var2);
                var19 = global;
                var2 = var19.Intl;
                var25 = var2.NumberFormat;
                var13 = _closure1_slot0;
                var22 = _closure1_slot2;
                var20 = 7;
                var2 = var22[var20];
                var2 = var13.bind(var6)(var2);
                var2 = var2.intl;
                var33 = var2.currentLocale;
                var2 = var25.prototype;
                var17 = Object.create(var2, {
                    constructor: {
                        value: var25
                    }
                });
                var32 = {
                    'notation': 'compact',
                    'compactDisplay': 'short'
                };
                var34 = var17;
                var2 = new var34[var25](var33, var32, var31);
                var27 = var2 instanceof Object ? var2 : var17;
                var2 = 17;
                var2 = var22[var2];
                var2 = var13.bind(var6)(var2);
                var25 = var2.CheckpointExperiment;
                var17 = var25.getConfig;
                var2 = {};
                var24 = 'transformMessageComponents';
                var2.location = var24;
                var2 = var17.bind(var25)(var2);
                var17 = var2.enabled;
                var2 = 18;
                var2 = var22[var2];
                var2 = var13.bind(var6)(var2);
                var22 = var2.CheckpointCardExperiment;
                var13 = var22.getConfig;
                var2 = {};
                var2.location = var24;
                var2 = var13.bind(var22)(var2);
                var2 = var2.enabled;
                if (var2) {
                    _fun56094_ip = 1134;
                    continue _fun56094
                }
            case 1085:
                var2 = {};
                var22 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var9];
                var13 = var22.bind(var6)(var13);
                var13 = var13.ComponentType;
                var13 = var13.UNKNOWN;
                var2.type = var13;
                var13 = var5.id;
                var2.id = var13;
                _fun56094_ip = 1748;
                continue _fun56094;
            case 1134:
                var13 = {};
                var33 = var13;
                var32 = var18;
                var18 = copyDataProperties(var33, var32);
                var18 = {};
                var33 = var18;
                var32 = var23;
                var22 = copyDataProperties(var33, var32);
                var24 = var23.cardId;
                var22 = var24.toString;
                var24 = var22.bind(var24)();
                var22 = 'cardId';
                var18[var22] = var24;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var22 = 19;
                var24 = var24[var22];
                var26 = var25.bind(var6)(var24);
                var25 = var26.getCardAssetUrl;
                var24 = var23.cardId;
                var25 = var25.bind(var26)(var24);
                var24 = 'cardAssetUrl';
                var18[var24] = var25;
                var24 = var4.author;
                var25 = var24.id;
                var24 = 'authorId';
                var18[var24] = var25;
                var26 = var27.format;
                var29 = var23.powerLevel;
                var25 = null;
                var30 = var25 != var29;
                var24 = 0;
                if (!var30) {
                    _fun56094_ip = 1273;
                    continue _fun56094
                }
            case 1270:
                var24 = var29;
            case 1273:
                var26 = var26.bind(var27)(var24);
                var24 = 'powerLevel';
                var18[var24] = var26;
                var27 = var19.Math;
                var26 = var27.min;
                var24 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var22];
                var24 = var24.bind(var6)(var19);
                var19 = var24.getCheckpointPowerBarUnits;
                var29 = var23.powerLevelPercentile;
                var30 = var25 != var29;
                var28 = 0;
                if (!var30) {
                    _fun56094_ip = 1339;
                    continue _fun56094
                }
            case 1336:
                var28 = var29;
            case 1339:
                var24 = var19.bind(var24)(var28);
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var19 = 20;
                var19 = var29[var19];
                var28 = var28.bind(var6)(var19);
                var19 = var28.isIOS;
                var28 = var19.bind(var28)();
                var19 = 10;
                if (!var28) {
                    _fun56094_ip = 1383;
                    continue _fun56094
                }
            case 1380:
                var19 = 9;
            case 1383:
                var24 = var26.bind(var27)(var24, var19);
                var19 = 'powerLevelUnits';
                var18[var19] = var24;
                var26 = _closure1_slot0;
                var19 = _closure1_slot2;
                var22 = var19[var22];
                var27 = var26.bind(var6)(var22);
                var24 = var27.getVoiceDurationString;
                var22 = var23.totalVoiceMinutes;
                var24 = var24.bind(var27)(var22);
                var22 = 'voiceString';
                var18[var22] = var24;
                var27 = var23.numEmojisSent;
                var24 = var27.toLocaleString;
                var22 = var19[var20];
                var22 = var26.bind(var6)(var22);
                var22 = var22.intl;
                var22 = var22.currentLocale;
                var24 = var24.bind(var27)(var22);
                var22 = 'reactionString';
                var18[var22] = var24;
                var24 = var23.numMessagesSent;
                var22 = var24.toLocaleString;
                var19 = var19[var20];
                var19 = var26.bind(var6)(var19);
                var19 = var19.intl;
                var19 = var19.currentLocale;
                var22 = var22.bind(var24)(var19);
                var19 = 'messagesString';
                var18[var19] = var22;
                var19 = var23.topEmoji;
                var19 = var25 != var19;
                var22 = undefined;
                if (!var19) {
                    _fun56094_ip = 1649;
                    continue _fun56094
                }
            case 1556:
                var19 = {};
                var32 = var23.topEmoji;
                var33 = var19;
                var24 = copyDataProperties(var33, var32);
                var24 = var23.topEmoji;
                var24 = var24.emojiId;
                var25 = var25 == var24;
                var24 = undefined;
                if (!var25) {
                    _fun56094_ip = 1635;
                    continue _fun56094
                }
            case 1592:
                var26 = _closure1_slot1;
                var27 = _closure1_slot2;
                var25 = 21;
                var25 = var27[var25];
                var26 = var26.bind(var6)(var25);
                var25 = var26.convertSurrogateToName;
                var23 = var23.topEmoji;
                var23 = var23.emojiName;
                var24 = var25.bind(var26)(var23);
            case 1635:
                var23 = 'emojiSurrogateName';
                var19[var23] = var24;
                var22 = var19;
            case 1649:
                var19 = 'topEmoji';
                var18[var19] = var22;
                var19 = undefined;
                if (!var17) {
                    _fun56094_ip = 1727;
                    continue _fun56094
                }
            case 1663:
                var17 = {};
                var22 = _closure1_slot0;
                var25 = _closure1_slot2;
                var20 = var25[var20];
                var20 = var22.bind(var6)(var20);
                var23 = var20.intl;
                var22 = var23.string;
                var24 = _closure1_slot1;
                var20 = 22;
                var20 = var25[var20];
                var20 = var24.bind(var6)(var20);
                var20 = var20.r8GEbK;
                var20 = var22.bind(var23)(var20);
                var17.ariaDescription = var20;
                var19 = var17;
            case 1727:
                var17 = 'clickable';
                var18[var17] = var19;
                var17 = 'checkpointData';
                var13[var17] = var18;
                var2 = var13;
            case 1748:
                return var2;
            case 1750:
                var2 = null;
                return var2;
            case 1754:
                var2 = {};
                var33 = var2;
                var32 = var5;
                var13 = copyDataProperties(var33, var32);
                var18 = var5.components;
                var17 = var18.map;
                var13 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var18 = var17.bind(var18)(var13);
                var17 = var18.filter;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 4;
                var13 = var20[var13];
                var13 = var19.bind(var6)(var13);
                var13 = var13.isNotNullish;
                var17 = var17.bind(var18)(var13);
                var13 = 'components';
                var2[var13] = var17;
                var17 = var5.accentColor;
                var13 = null;
                var17 = var13 != var17;
                var18 = null;
                if (!var17) {
                    _fun56094_ip = 1864;
                    continue _fun56094
                }
            case 1849:
                var19 = _closure1_slot5;
                var17 = var5.accentColor;
                var18 = var19.bind(var6)(var17);
            case 1864:
                var17 = 'accentColor';
                var2[var17] = var18;
                var18 = var5.spoiler;
                var17 = 'isSpoiler';
                var2[var17] = var18;
                var17 = var5.spoiler;
                var18 = null;
                if (!var17) {
                    _fun56094_ip = 1956;
                    continue _fun56094
                }
            case 1899:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var17 = 7;
                var19 = var23[var17];
                var19 = var22.bind(var6)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var17 = var23[var17];
                var17 = var22.bind(var6)(var17);
                var17 = var17.t;
                var17 = var17.C8ci33;
                var18 = var19.bind(var20)(var17);
            case 1956:
                var17 = 'spoilerDescription';
                var2[var17] = var18;
                var12 = var12.embedBackgroundColor;
                var17 = var13 != var12;
                var13 = null;
                if (!var17) {
                    _fun56094_ip = 1983;
                    continue _fun56094
                }
            case 1980:
                var13 = var12;
            case 1983:
                var12 = 'themedBackgroundColor';
                var2[var12] = var13;
                return var2;
            case 1994:
                var2 = {};
                var12 = var5.type;
                var2.type = var12;
                var12 = var5.id;
                var2.id = var12;
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = 16;
                var12 = var17[var12];
                var17 = var13.bind(var6)(var12);
                var13 = var17.transformToRowGeneratedContentInventoryEntryComponent;
                var12 = {};
                var12.component = var5;
                var12.message = var4;
                var12 = var13.bind(var17)(var12);
                var2.contentInventoryEntry = var12;
                return var2;
            case 2063:
                var2 = null;
                return var2;
            case 2067:
                return var5;
            case 2069:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 12;
                var2 = var13[var2];
                var17 = var12.bind(var6)(var2);
                var13 = var17.getUnfurledMediaItemObscurityProps;
                var2 = {};
                var24 = 'file';
                var2.type = var24;
                var12 = var5.file;
                var2.mediaItem = var12;
                var19 = var5.spoiler;
                var12 = null;
                var18 = var12 != var19;
                if (!var18) {
                    _fun56094_ip = 2134;
                    continue _fun56094
                }
            case 2131:
                var18 = var19;
            case 2134:
                var2.isSpoilered = var18;
                var18 = var4.author;
                var18 = var18.bot;
                var2.isAuthorBot = var18;
                var2.shouldObscureSpoiler = var16;
                var2.shouldAgeVerify = var11;
                var2.enabledContentHarmTypeFlags = var15;
                var2 = var13.bind(var17)(var2);
                var22 = var2.isSpoiler;
                var20 = var2.spoilerDescription;
                var13 = var2.isObscured;
                var18 = var2.obscureDescription;
                var19 = var2.obscureAwaitingScan;
                var17 = var13;
                if (!var13) {
                    _fun56094_ip = 2242;
                    continue _fun56094
                }
            case 2212:
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var2 = 14;
                var2 = var25[var2];
                var23 = var23.bind(var6)(var2);
                var2 = var23.isVerifiedTeen;
                var17 = var2.bind(var23)();
            case 2242:
                var2 = {};
                var33 = var2;
                var32 = var5;
                var23 = copyDataProperties(var33, var32);
                var25 = _closure1_slot11;
                var23 = var5.file;
                var23 = var25.bind(var6)(var23, var21);
                var2[var24] = var23;
                var24 = var5.name;
                if (!(var12 == var24)) {
                    _fun56094_ip = 2341;
                    continue _fun56094
                }
            case 2284:
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var23 = 7;
                var25 = var28[var23];
                var25 = var27.bind(var6)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var23 = var28[var23];
                var23 = var27.bind(var6)(var23);
                var23 = var23.t;
                var23 = var23.GnuJ5u;
                var24 = var25.bind(var26)(var23);
            case 2341:
                var23 = 'name';
                var2[var23] = var24;
                var24 = _closure1_slot1;
                var25 = _closure1_slot2;
                var23 = 15;
                var23 = var25[var23];
                var24 = var24.bind(var6)(var23);
                var23 = var24.filesize;
                var25 = var5.size;
                var26 = var12 != var25;
                var12 = 0;
                if (!var26) {
                    _fun56094_ip = 2393;
                    continue _fun56094
                }
            case 2390:
                var12 = var25;
            case 2393:
                var23 = var23.bind(var24)(var12);
                var12 = 'size';
                var2[var12] = var23;
                var12 = 'isSpoiler';
                var2[var12] = var22;
                var12 = 'spoilerDescription';
                var2[var12] = var20;
                var12 = 'isObscure';
                var2[var12] = var13;
                var12 = 'isObscureAwaitingScan';
                var2[var12] = var19;
                var12 = 'obscureDescription';
                var2[var12] = var18;
                var18 = var13;
                if (!var18) {
                    _fun56094_ip = 2465;
                    continue _fun56094
                }
            case 2462:
                var18 = var11;
            case 2465:
                var12 = 'verifyAge';
                var2[var12] = var18;
                var12 = 'obscureHideControls';
                var2[var12] = var17;
                var12 = 'obscureIsOpaque';
                var2[var12] = var13;
                return var2;
            case 2494:
                var13 = var5.items;
                var12 = var13.map;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun56102: for (var _fun56102_ip = 0;;) switch (_fun56102_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = _closure1_slot10;
                            var0 = var6.media;
                            var7 = undefined;
                            var5 = var1.bind(var7)(var0);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var0 = var2[var0];
                            var9 = var3.bind(var7)(var0);
                            var1 = var9.getUnfurledMediaItemObscurityProps;
                            var0 = {};
                            var8 = 13;
                            var2 = var2[var8];
                            var2 = var3.bind(var7)(var2);
                            var2 = var2.MediaGalleryItemType;
                            var3 = var2.IMAGE;
                            var2 = 'image';
                            if (!(var5 !== var3)) {
                                _fun56102_ip = 127;
                                continue _fun56102
                            }
                        case 83:
                            var10 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var8];
                            var3 = var10.bind(var7)(var3);
                            var3 = var3.MediaGalleryItemType;
                            var10 = var3.VIDEO;
                            var3 = 'generic';
                            if (!(var5 === var10)) {
                                _fun56102_ip = 124;
                                continue _fun56102
                            }
                        case 120:
                            var3 = 'video';
                        case 124:
                            var2 = var3;
                        case 127:
                            var0.type = var2;
                            var2 = var6.media;
                            var0.mediaItem = var2;
                            var10 = var6.spoiler;
                            var3 = null;
                            var2 = var3 != var10;
                            if (!var2) {
                                _fun56102_ip = 160;
                                continue _fun56102
                            }
                        case 157:
                            var2 = var10;
                        case 160:
                            var0.isSpoilered = var2;
                            var10 = _closure2_slot2;
                            var10 = var10.author;
                            var10 = var10.bot;
                            var0.isAuthorBot = var10;
                            var10 = _closure2_slot3;
                            var0.shouldObscureSpoiler = var10;
                            var10 = _closure2_slot4;
                            var0.enabledContentHarmTypeFlags = var10;
                            var10 = _closure2_slot6;
                            var0.shouldAgeVerify = var10;
                            var0 = var1.bind(var9)(var0);
                            var14 = var0.isSpoiler;
                            var13 = var0.spoilerDescription;
                            var9 = var0.isObscured;
                            var11 = var0.obscureDescription;
                            var12 = var0.obscureAwaitingScan;
                            var10 = var9;
                            if (!var9) {
                                _fun56102_ip = 287;
                                continue _fun56102
                            }
                        case 257:
                            var1 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var0 = 14;
                            var0 = var15[var0];
                            var1 = var1.bind(var7)(var0);
                            var0 = var1.isVerifiedTeen;
                            var10 = var0.bind(var1)();
                        case 287:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var8];
                            var0 = var1.bind(var7)(var0);
                            var0 = var0.MediaGalleryItemType;
                            var0 = var0.VIDEO;
                            var15 = undefined;
                            if (!(var5 === var0)) {
                                _fun56102_ip = 425;
                                continue _fun56102
                            }
                        case 322:
                            var0 = var6.media;
                            var16 = var0.proxyUrl;
                            var1 = _closure1_slot1;
                            var17 = _closure1_slot2;
                            var0 = 27;
                            var0 = var17[var0];
                            var1 = var1.bind(var7)(var0);
                            var0 = var1.toURLSafe;
                            var16 = var0.bind(var1)(var16);
                            var1 = var3 == var16;
                            var0 = null;
                            if (var1) {
                                _fun56102_ip = 410;
                                continue _fun56102
                            }
                        case 374:
                            var19 = var16.searchParams;
                            var18 = var19.set;
                            var17 = 'format';
                            var1 = 'webp';
                            var1 = var18.bind(var19)(var17, var1);
                            var1 = var16.toString;
                            var0 = var1.bind(var16)();
                        case 410:
                            var1 = var3 == var0;
                            var15 = var0;
                            var0 = null;
                            if (var1) {
                                _fun56102_ip = 996;
                                continue _fun56102
                            }
                        case 425:
                            var1 = {};
                            var24 = var1;
                            var23 = var6;
                            var16 = copyDataProperties(var24, var23);
                            var17 = _closure1_slot11;
                            var16 = var6.media;
                            var6 = _closure2_slot0;
                            var16 = var17.bind(var7)(var16, var6);
                            var6 = 'media';
                            var1[var6] = var16;
                            var6 = 'mediaType';
                            var1[var6] = var5;
                            var6 = 'videoPreviewUrl';
                            var1[var6] = var15;
                            var6 = 'isSpoiler';
                            var1[var6] = var14;
                            var6 = 'spoilerDescription';
                            var1[var6] = var13;
                            var6 = 'isObscure';
                            var1[var6] = var9;
                            var6 = 'isObscureAwaitingScan';
                            var1[var6] = var12;
                            var6 = 'obscureDescription';
                            var1[var6] = var11;
                            var11 = var9;
                            if (!var11) {
                                _fun56102_ip = 545;
                                continue _fun56102
                            }
                        case 541:
                            var11 = _closure2_slot6;
                        case 545:
                            var6 = 'verifyAge';
                            var1[var6] = var11;
                            var6 = 'obscureHideControls';
                            var1[var6] = var10;
                            var6 = 'obscureIsOpaque';
                            var1[var6] = var9;
                            var9 = _closure2_slot5;
                            var6 = 'showDescription';
                            var1[var6] = var9;
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var6 = var9.bind(var7)(var6);
                            var6 = var6.MediaGalleryItemType;
                            var6 = var6.VIDEO;
                            if (!(var5 !== var6)) {
                                _fun56102_ip = 675;
                                continue _fun56102
                            }
                        case 618:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 7;
                            var9 = var12[var6];
                            var9 = var11.bind(var7)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var12[var6];
                            var6 = var11.bind(var7)(var6);
                            var6 = var6.t;
                            var6 = var6.IPzNKE;
                            var9 = var9.bind(var10)(var6);
                            _fun56102_ip = 730;
                            continue _fun56102;
                        case 675:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 7;
                            var10 = var13[var6];
                            var10 = var12.bind(var7)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var6 = var13[var6];
                            var6 = var12.bind(var7)(var6);
                            var6 = var6.t;
                            var6 = var6["BEWw/7"];
                            var9 = var10.bind(var11)(var6);
                        case 730:
                            var6 = 'descriptionHint';
                            var1[var6] = var9;
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var6 = var9.bind(var7)(var6);
                            var6 = var6.MediaGalleryItemType;
                            var6 = var6.VIDEO;
                            if (!(var5 !== var6)) {
                                _fun56102_ip = 831;
                                continue _fun56102
                            }
                        case 774:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 7;
                            var9 = var12[var6];
                            var9 = var11.bind(var7)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var12[var6];
                            var6 = var11.bind(var7)(var6);
                            var6 = var6.t;
                            var6 = var6.fKyfca;
                            var9 = var9.bind(var10)(var6);
                            _fun56102_ip = 886;
                            continue _fun56102;
                        case 831:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 7;
                            var10 = var13[var6];
                            var10 = var12.bind(var7)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var6 = var13[var6];
                            var6 = var12.bind(var7)(var6);
                            var6 = var6.t;
                            var6 = var6["/SCpvi"];
                            var9 = var10.bind(var11)(var6);
                        case 886:
                            var6 = 'accessibilityRole';
                            var1[var6] = var9;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var8];
                            var4 = var6.bind(var7)(var4);
                            var4 = var4.MediaGalleryItemType;
                            var4 = var4.VIDEO;
                            var3 = null;
                            if (!(var5 === var4)) {
                                _fun56102_ip = 984;
                                continue _fun56102
                            }
                        case 930:
                            var4 = _closure2_slot2;
                            var24 = var4.id;
                            var2 = _closure2_slot1;
                            var22 = var2.id;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var25 = '';
                            var23 = '_MediaGallery(';
                            var21 = ')_';
                            var20 = arg1;
                            var3 = var25[var7](var24, var23, var22, var21, var20, var19);
                        case 984:
                            var2 = 'portalId';
                            var1[var2] = var3;
                            var0 = var1;
                        case 996:
                            return var0;
                    }
                };
                var13 = var12.bind(var13)(var2);
                var12 = var13.filter;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 4;
                var2 = var18[var2];
                var2 = var17.bind(var6)(var2);
                var2 = var2.isNotNullish;
                var17 = var12.bind(var13)(var2);
                var13 = var17.length;
                var12 = 0;
                var2 = null;
                if (!(var12 !== var13)) {
                    _fun56094_ip = 2588;
                    continue _fun56094
                }
            case 2564:
                var12 = {};
                var33 = var12;
                var32 = var5;
                var13 = copyDataProperties(var33, var32);
                var13 = 'items';
                var12[var13] = var17;
                var2 = var12;
            case 2588:
                return var2;
            case 2590:
                var12 = _closure1_slot10;
                var2 = var5.media;
                var19 = var12.bind(var6)(var2);
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 12;
                var2 = var20[var2];
                var13 = var18.bind(var6)(var2);
                var12 = var13.getUnfurledMediaItemObscurityProps;
                var2 = {};
                var17 = 13;
                var17 = var20[var17];
                var17 = var18.bind(var6)(var17);
                var17 = var17.MediaGalleryItemType;
                var18 = var17.IMAGE;
                var17 = 'generic';
                if (!(var19 === var18)) {
                    _fun56094_ip = 2669;
                    continue _fun56094
                }
            case 2665:
                var17 = 'image';
            case 2669:
                var2.type = var17;
                var17 = var5.media;
                var2.mediaItem = var17;
                var18 = var5.spoiler;
                var17 = null;
                var17 = var17 != var18;
                if (!var17) {
                    _fun56094_ip = 2702;
                    continue _fun56094
                }
            case 2699:
                var17 = var18;
            case 2702:
                var2.isSpoilered = var17;
                var17 = var4.author;
                var17 = var17.bot;
                var2.isAuthorBot = var17;
                var2.shouldObscureSpoiler = var16;
                var2.shouldAgeVerify = var11;
                var2.enabledContentHarmTypeFlags = var15;
                var2 = var12.bind(var13)(var2);
                var19 = var2.isSpoiler;
                var18 = var2.spoilerDescription;
                var12 = var2.isObscured;
                var16 = var2.obscureDescription;
                var17 = var2.obscureAwaitingScan;
                var13 = var12;
                if (!var12) {
                    _fun56094_ip = 2810;
                    continue _fun56094
                }
            case 2780:
                var15 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 14;
                var2 = var20[var2];
                var15 = var15.bind(var6)(var2);
                var2 = var15.isVerifiedTeen;
                var13 = var2.bind(var15)();
            case 2810:
                var2 = {};
                var33 = var2;
                var32 = var5;
                var15 = copyDataProperties(var33, var32);
                var20 = _closure1_slot11;
                var15 = var5.media;
                var20 = var20.bind(var6)(var15, var21);
                var15 = 'media';
                var2[var15] = var20;
                var15 = 'isSpoiler';
                var2[var15] = var19;
                var15 = 'spoilerDescription';
                var2[var15] = var18;
                var15 = 'isObscure';
                var2[var15] = var12;
                var15 = 'isObscureAwaitingScan';
                var2[var15] = var17;
                var15 = 'obscureDescription';
                var2[var15] = var16;
                var15 = var12;
                if (!var15) {
                    _fun56094_ip = 2905;
                    continue _fun56094
                }
            case 2902:
                var15 = var11;
            case 2905:
                var11 = 'verifyAge';
                var2[var11] = var15;
                var11 = 'obscureHideControls';
                var2[var11] = var13;
                var11 = 'obscureIsOpaque';
                var2[var11] = var12;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 7;
                var12 = var16[var11];
                var12 = var15.bind(var6)(var12);
                var17 = var12.intl;
                var13 = var17.string;
                var12 = var16[var11];
                var12 = var15.bind(var6)(var12);
                var12 = var12.t;
                var12 = var12.IPzNKE;
                var13 = var13.bind(var17)(var12);
                var12 = 'descriptionHint';
                var2[var12] = var13;
                var12 = var16[var11];
                var12 = var15.bind(var6)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var16[var11];
                var11 = var15.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11.fKyfca;
                var12 = var12.bind(var13)(var11);
                var11 = 'accessibilityRole';
                var2[var11] = var12;
                return var2;
            case 3053:
                var2 = {};
                var33 = var2;
                var32 = var5;
                var11 = copyDataProperties(var33, var32);
                var13 = _closure1_slot12;
                var12 = var8.textDisplayComponent;
                var11 = var4.id;
                var8 = var5.content;
                var11 = var13.bind(var6)(var12, var11, var8);
                var8 = 'content';
                var2[var8] = var11;
                return var2;
            case 3103:
                var2 = var5.accessory;
                var13 = var7.bind(var6)(var2);
                var2 = null;
                var7 = var2 == var13;
                if (var7) {
                    _fun56094_ip = 3250;
                    continue _fun56094
                }
            case 3126:
                var7 = {};
                var33 = var7;
                var32 = var5;
                var8 = copyDataProperties(var33, var32);
                var12 = var5.components;
                var11 = var12.map;
                var8 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var16 = var11.bind(var12)(var8);
                var15 = var16.filter;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 4;
                var8 = var12[var8];
                var8 = var11.bind(var6)(var8);
                var8 = var8.isNotNullish;
                var15 = var15.bind(var16)(var8);
                var8 = 'components';
                var7[var8] = var15;
                var8 = 'accessory';
                var7[var8] = var13;
                var8 = 6;
                var8 = var12[var8];
                var11 = var11.bind(var6)(var8);
                var8 = var11.getLayoutComponentErrorText;
                var11 = var8.bind(var11)(var3, var4, var5);
                var8 = 'errorText';
                var7[var8] = var11;
                var2 = var7;
            case 3250:
                return var2;
            case 3252:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 10;
                var2 = var12[var2];
                var11 = var8.bind(var6)(var2);
                var7 = var11.getInitialSnowflakeSelectOptions;
                var2 = var4.id;
                var11 = var7.bind(var11)(var5, var2, var14);
                var2 = {};
                var33 = var2;
                var32 = var5;
                var7 = copyDataProperties(var33, var32);
                var7 = 8;
                var7 = var12[var7];
                var13 = var8.bind(var6)(var7);
                var7 = var13.getActionComponentState;
                var13 = var7.bind(var13)(var3, var5, var10);
                var7 = 'state';
                var2[var7] = var13;
                var7 = 11;
                var7 = var12[var7];
                var13 = var8.bind(var6)(var7);
                var7 = var13.transformSearchableSelectOptions;
                var13 = var7.bind(var13)(var11, var14);
                var7 = 'selectedOptions';
                var2[var7] = var13;
                var7 = 6;
                var7 = var12[var7];
                var8 = var8.bind(var6)(var7);
                var7 = var8.getSelectPlaceholder;
                var8 = var7.bind(var8)(var5);
                var7 = 'placeholder';
                var2[var7] = var8;
                var8 = _closure1_slot9;
                var7 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.label;
                    return var0;
                };
                var8 = var8.bind(var6)(var5, var11, var7);
                var7 = 'accessibilityLabel';
                var2[var7] = var8;
                return var2;
            case 3428:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 9;
                var2 = var12[var2];
                var11 = var8.bind(var6)(var2);
                var7 = var11.getInitialStringSelectOptions;
                var2 = var4.id;
                var11 = var7.bind(var11)(var5, var2);
                var7 = var11.map;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = _closure2_slot1;
                    var2 = var1.options;
                    var1 = var2.findIndex;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.value;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var7.bind(var11)(var2);
                var2 = {};
                var33 = var2;
                var32 = var5;
                var7 = copyDataProperties(var33, var32);
                var7 = 8;
                var7 = var12[var7];
                var13 = var8.bind(var6)(var7);
                var7 = var13.getActionComponentState;
                var13 = var7.bind(var13)(var3, var5, var10);
                var7 = 'state';
                var2[var7] = var13;
                var7 = 'selectedOptions';
                var2[var7] = var11;
                var7 = 6;
                var7 = var12[var7];
                var8 = var8.bind(var6)(var7);
                var7 = var8.getSelectPlaceholder;
                var8 = var7.bind(var8)(var5);
                var7 = 'placeholder';
                var2[var7] = var8;
                var8 = _closure1_slot9;
                var7 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot1;
                    var1 = var0.options;
                    var0 = arg0;
                    var0 = var1[var0];
                    var0 = var0.label;
                    return var0;
                };
                var8 = var8.bind(var6)(var5, var11, var7);
                var7 = 'accessibilityLabel';
                var2[var7] = var8;
                return var2;
            case 3594:
                var7 = var5.style;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var8.bind(var6)(var2);
                var2 = var2.ButtonStyle;
                var2 = var2.PREMIUM;
                if (!(var7 !== var2)) {
                    _fun56094_ip = 3639;
                    continue _fun56094
                }
            case 3632:
                var8 = var5.label;
                _fun56094_ip = 3696;
                continue _fun56094;
            case 3639:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 7;
                var7 = var12[var2];
                var7 = var11.bind(var6)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var2 = var12[var2];
                var2 = var11.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.CHa0vN;
                var8 = var7.bind(var9)(var2);
            case 3696:
                var2 = {};
                var33 = var2;
                var32 = var5;
                var7 = copyDataProperties(var33, var32);
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 8;
                var7 = var11[var7];
                var9 = var9.bind(var6)(var7);
                var7 = var9.getActionComponentState;
                var9 = var7.bind(var9)(var3, var5, var10);
                var7 = 'state';
                var2[var7] = var9;
                var7 = 'label';
                var2[var7] = var8;
                return var2;
            case 3761:
                var7 = var5.components;
                var2 = var7.map;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var8 = var2.bind(var7)(var1);
                var1 = var8.filter;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var0 = var2.bind(var6)(var0);
                var0 = var0.isNotNullish;
                var8 = var1.bind(var8)(var0);
                var0 = {};
                var33 = var0;
                var32 = var5;
                var1 = copyDataProperties(var33, var32);
                var1 = 'components';
                var0[var1] = var8;
                var1 = 6;
                var1 = var7[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.getLayoutComponentErrorText;
                var2 = var1.bind(var2)(var3, var4, var5);
                var1 = 'errorText';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: getSelectAccessibilityLabel, environment: var3
        _fun56104: for (var _fun56104_ip = 0;;) switch (_fun56104_ip) {
            case 0:
                var2 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun56104_ip = 119;
                    continue _fun56104
                }
            case 9:
                var1 = var2.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun56104_ip = 119;
                    continue _fun56104
                }
            case 20:
                var1 = var2.map;
                var0 = arg2;
                var6 = var1.bind(var2)(var0);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var2 = var5[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var5[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0["I/ROH+"];
                var0 = {};
                var5 = var6.join;
                var4 = ',';
                var4 = var5.bind(var6)(var4);
                var0.selections = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 119:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var1 = undefined;
                var3 = var5.bind(var1)(var0);
                var2 = var3.getSelectPlaceholder;
                var0 = arg0;
                var4 = var2.bind(var3)(var0);
                var0 = 7;
                var2 = var6[var0];
                var2 = var5.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var5.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0["3aednA"];
                var0 = {};
                var0.placeholder = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var1 = function(arg0) { // Original name: getUnfurledMediaItemType, environment: var3
        _fun56105: for (var _fun56105_ip = 0;;) switch (_fun56105_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.width;
                var1 = var0.height;
                var6 = var0.contentType;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun56105_ip = 109;
                    continue _fun56105
                }
            case 25:
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun56105_ip = 109;
                    continue _fun56105
                }
            case 31:
                if (!(var2 != var1)) {
                    _fun56105_ip = 109;
                    continue _fun56105
                }
            case 35:
                if (!(var1 > var0)) {
                    _fun56105_ip = 109;
                    continue _fun56105
                }
            case 39:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 23;
                var1 = var1[var4];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.isImageContentType;
                var5 = var1.bind(var3)(var6);
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                if (var5) {
                    _fun56105_ip = 182;
                    continue _fun56105
                }
            case 86:
                var4 = var3[var4];
                var5 = var1.bind(var2)(var4);
                var4 = var5.isVideoContentType;
                var4 = var4.bind(var5)(var6);
                if (var4) {
                    _fun56105_ip = 148;
                    continue _fun56105
                }
            case 109:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 13;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var4 = var4.MediaGalleryItemType;
                var4 = var4.VISUAL_PLACEHOLDER;
                return var4;
            case 148:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 13;
                var0 = var5[var0];
                var0 = var4.bind(var2)(var0);
                var0 = var0.MediaGalleryItemType;
                var0 = var0.VIDEO;
                return var0;
            case 182:
                var0 = 13;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.MediaGalleryItemType;
                var0 = var0.IMAGE;
                return var0;
        }
    };
    var _closure1_slot10 = var1;
    var0 = function(arg0, arg1) { // Original name: transformUnfurledMediaItem, environment: var3
        _fun56106: for (var _fun56106_ip = 0;;) switch (_fun56106_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var0 = _closure1_slot10;
                var4 = undefined;
                var5 = var0.bind(var4)(var6);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 13;
                var0 = var11[var0];
                var0 = var10.bind(var4)(var0);
                var0 = var0.MediaGalleryItemType;
                var3 = var0.IMAGE;
                var0 = {};
                var15 = var0;
                var14 = var6;
                var7 = copyDataProperties(var15, var14);
                var7 = 24;
                var7 = var11[var7];
                var9 = var10.bind(var4)(var7);
                var8 = var9.hasFlag;
                var7 = var6.flags;
                var6 = 25;
                var6 = var11[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.UnfurledMediaItemFlags;
                var6 = var6.IS_ANIMATED;
                var7 = var8.bind(var9)(var7, var6);
                var6 = 'srcIsAnimated';
                var0[var6] = var7;
                var6 = var1.shouldShowMedia;
                if (var6) {
                    _fun56106_ip = 149;
                    continue _fun56106
                }
            case 135:
                var6 = 0;
                var0.height = var6;
                var0.width = var6;
            case 149:
                if (!(var5 === var3)) {
                    _fun56106_ip = 252;
                    continue _fun56106
                }
            case 153:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 26;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.getImageSrc;
                var4 = var0.proxyUrl;
                var7 = var0.width;
                var8 = null;
                var9 = var8 != var7;
                var2 = 0;
                if (!var9) {
                    _fun56106_ip = 204;
                    continue _fun56106
                }
            case 201:
                var2 = var7;
            case 204:
                var7 = var0.height;
                var8 = var8 != var7;
                var3 = 0;
                if (!var8) {
                    _fun56106_ip = 221;
                    continue _fun56106
                }
            case 218:
                var3 = var7;
            case 221:
                var1 = var1.shouldAutoPlayGifs;
                var12 = !var1;
                var16 = var6;
                var15 = var4;
                var14 = var2;
                var13 = var3;
                var1 = var16[var5](var15, var14, var13, var12, var11);
                var0.proxyUrl = var1;
            case 252:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: renderMarkdownText, environment: var3
        _fun56107: for (var _fun56107_ip = 0;;) switch (_fun56107_ip) {
            case 0:
                var1 = arg0;
                var7 = arg2;
                var12 = var1.type;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var13 = '';
                var2 = '-';
                var10 = arg1;
                var11 = var2;
                var9 = var2;
                var8 = var7;
                var4 = var13[var4](var12, var11, var10, var9, var8, var7);
                var3 = _closure1_slot7;
                var0 = var3.get;
                var0 = var0.bind(var3)(var4);
                var3 = null;
                if (!(var3 == var0)) {
                    _fun56107_ip = 140;
                    continue _fun56107
                }
            case 71:
                var6 = {};
                var11 = var1.parserState;
                var12 = var6;
                var1 = copyDataProperties(var12, var11);
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 30;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.parseToAST;
                var1 = true;
                var1 = var3.bind(var5)(var7, var1, var6);
                var3 = _closure1_slot7;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                return var1;
            case 140:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = ['checkpointData'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var9.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.processColor;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
    var _closure1_slot6 = var4;
    var4 = 28;
    var4 = var6[var4];
    var8 = var9.bind(var0)(var4);
    var4 = {
        'max': inf,
        'maxAge': null,
        'updateAgeOnGet': true
    };
    var7 = 29;
    var7 = var6[var7];
    var7 = var9.bind(var0)(var7);
    var7 = var7.Millis;
    var9 = var7.MINUTE;
    var7 = 15;
    var7 = var7 * var9;
    var4.maxAge = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var13 = var7;
    var12 = var4;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/transformMessageComponents.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: transformMessageComponents, environment: var3
        _fun56108: for (var _fun56108_ip = 0;;) switch (_fun56108_ip) {
            case 0:
                var3 = arg0;
                var5 = {};
                var0 = 'textDisplayComponent';
                var5.type = var0;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var4 = undefined;
                var8 = var6.bind(var4)(var2);
                var7 = var8.getInitialParserStateFromMessage;
                var6 = var3.message;
                var2 = _closure1_slot6;
                var2 = var7.bind(var8)(var6, var2);
                var5.parserState = var2;
                var2 = {};
                var10 = var2;
                var9 = var3;
                var6 = copyDataProperties(var10, var9);
                var6 = {};
                var6.textDisplayComponent = var5;
                var5 = 'markdownConfigs';
                var2[var5] = var6;
                var _closure2_slot0 = var2;
                var5 = var3.message;
                var2 = var5.getContentMessage;
                var2 = var2.bind(var5)();
                var5 = null;
                if (!(var5 == var2)) {
                    _fun56108_ip = 126;
                    continue _fun56108
                }
            case 121:
                var2 = var3.message;
            case 126:
                var3 = var2.components;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot8;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.filter;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 4;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.isNotNullish;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.getUnfurledMediaItemType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 27, 6779, 6741, 1304, 1636, 3928, 1234, 6780, 6785, 6786, 6788, 6755, 6791, 4206, 3963, 6792, 6804, 6805, 6806, 479, 3063, 2267, 3933, 1384, 3932, 6743, 1457, 1386, 667, 4737, 2]);