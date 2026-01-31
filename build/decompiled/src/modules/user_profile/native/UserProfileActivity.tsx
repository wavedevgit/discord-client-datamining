// modules/user_profile/native/UserProfileActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun62184: for (var _fun62184_ip = 0;;) switch (_fun62184_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = function(arg0) { // Original name: ActivityCardText, environment: var1
                _fun62185: for (var _fun62185_ip = 0;;) switch (_fun62185_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = var4.children;
                        var2 = null;
                        var3 = Object.create(var2);
                        var0 = 0;
                        var3.children = var0;
                        var9 = {};
                        var8 = var4;
                        var7 = var3;
                        var5 = copyDataProperties(var9, var8, var7);
                        var3 = 'string';
                        var0 = typeof var1;
                        var6 = var1;
                        if (!(var3 === var0)) {
                            _fun62185_ip = 55;
                            continue _fun62185
                        }
                    case 45:
                        var0 = var1.trim;
                        var6 = var0.bind(var1)();
                    case 55:
                        var1 = var2 == var6;
                        var0 = null;
                        if (var1) {
                            _fun62185_ip = 135;
                            continue _fun62185
                        }
                    case 64:
                        var1 = '';
                        var0 = null;
                        if (!(var1 !== var6)) {
                            _fun62185_ip = 135;
                            continue _fun62185
                        }
                    case 74:
                        var4 = _closure1_slot19;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.Text;
                        var1 = {};
                        var9 = var1;
                        var8 = var5;
                        var5 = copyDataProperties(var9, var8);
                        var5 = 'children';
                        var1[var5] = var6;
                        var0 = var4.bind(var3)(var2, var1);
                    case 135:
                        return var0;
                }
            };
            var _closure1_slot23 = var0;
            var0 = function(arg0) { // Original name: MaybeLink, environment: var1
                _fun62186: for (var _fun62186_ip = 0;;) switch (_fun62186_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.href;
                        var _closure2_slot0 = var3;
                        var1 = var0.children;
                        var2 = null;
                        var0 = var1;
                        if (!(var2 != var3)) {
                            _fun62186_ip = 71;
                            continue _fun62186
                        }
                    case 29:
                        var4 = _closure1_slot19;
                        var3 = _closure1_slot4;
                        var2 = {};
                        var6 = 'link';
                        var2.accessibilityRole = var6;
                        var5 = function() { // Original name: onPress, environment: var5
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.handleClick;
                            var0 = {};
                            var3 = _closure2_slot0;
                            var0.href = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2.onPress = var5;
                        var2.children = var1;
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2);
                    case 71:
                        return var0;
                }
            };
            var _closure1_slot24 = var0;
            var0 = function(arg0) { // Original name: ActivityCardBody, environment: var1
                _fun62188: for (var _fun62188_ip = 0;;) switch (_fun62188_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.user;
                        var _closure2_slot0 = var9;
                        var13 = var0.activity;
                        var _closure2_slot1 = var13;
                        var5 = var0.application;
                        var0 = var0.onAction;
                        var _closure2_slot2 = var0;
                        var0 = _closure1_slot22;
                        var3 = undefined;
                        var14 = var0.bind(var3)();
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 17;
                        var0 = var2[var0];
                        var4 = var1.bind(var3)(var0);
                        var0 = var4.useImageForActivity;
                        var0 = var0.bind(var4)(var13, var5);
                        var21 = var0.largeImage;
                        var27 = var0.smallImage;
                        var0 = 18;
                        var0 = var2[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.useThemeContext;
                        var0 = var0.bind(var1)();
                        var19 = var0.theme;
                        var1 = var13.type;
                        var0 = _closure1_slot14;
                        var0 = var0.HANG_STATUS;
                        var8 = var1 === var0;
                        var _closure2_slot3 = var8;
                        var2 = _closure1_slot20;
                        var1 = _closure1_slot6;
                        var0 = {};
                        var4 = var14.body;
                        var0.style = var4;
                        var4 = var9.bot;
                        var5 = !var4;
                        if (!var5) {
                            _fun62188_ip = 1120;
                            continue _fun62188
                        }
                    case 181:
                        var25 = null;
                        if (!(var25 != var21)) {
                            _fun62188_ip = 218;
                            continue _fun62188
                        }
                    case 187:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 19;
                        var4 = var7[var4];
                        var4 = var6.bind(var3)(var4);
                        var4 = var4.bind(var3)(var13);
                        if (var4) {
                            _fun62188_ip = 878;
                            continue _fun62188
                        }
                    case 218:
                        if (!(var25 == var21)) {
                            _fun62188_ip = 471;
                            continue _fun62188
                        }
                    case 225:
                        var12 = _closure1_slot19;
                        if (var8) {
                            _fun62188_ip = 406;
                            continue _fun62188
                        }
                    case 235:
                        var6 = _closure1_slot6;
                        var4 = {};
                        var15 = var14.imageContainer;
                        var7 = new Array(2);
                        var7[0] = var15;
                        var15 = var14.imageAspectRatio;
                        var7[1] = var15;
                        var4.style = var7;
                        var16 = _closure1_slot19;
                        var18 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var7 = 26;
                        var7 = var20[var7];
                        var7 = var18.bind(var3)(var7);
                        var15 = var7.UnknownGameIcon;
                        var7 = {};
                        var17 = 'custom';
                        var7.size = var17;
                        var17 = var14.largeImage;
                        var7.style = var17;
                        var17 = 27;
                        var17 = var20[var17];
                        var18 = var18.bind(var3)(var17);
                        var17 = var18.isThemeDark;
                        var17 = var17.bind(var18)(var19);
                        var19 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var18 = 13;
                        var18 = var20[var18];
                        var18 = var19.bind(var3)(var18);
                        var18 = var18.colors;
                        if (var17) {
                            _fun62188_ip = 378;
                            continue _fun62188
                        }
                    case 370:
                        var17 = var18.BLACK;
                        _fun62188_ip = 384;
                        continue _fun62188;
                    case 378:
                        var17 = var18.WHITE;
                    case 384:
                        var7.color = var17;
                        var7 = var16.bind(var3)(var15, var7);
                        var4.children = var7;
                        var4 = var12.bind(var3)(var6, var4);
                        _fun62188_ip = 466;
                        continue _fun62188;
                    case 406:
                        var7 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var6 = 25;
                        var6 = var15[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = {};
                        var15 = var9.id;
                        var6.userId = var15;
                        var15 = 24;
                        var6.size = var15;
                        var15 = var14.smallImage;
                        var6.emojiStyle = var15;
                        var6.hangStatusActivity = var13;
                        var4 = var12.bind(var3)(var7, var6);
                    case 466:
                        _fun62188_ip = 873;
                        continue _fun62188;
                    case 471:
                        var12 = _closure1_slot20;
                        var7 = _closure1_slot6;
                        var6 = {};
                        var16 = var14.imageContainer;
                        var15 = new Array(2);
                        var15[0] = var16;
                        var17 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var16 = 24;
                        var16 = var18[var16];
                        var16 = var17.bind(var3)(var16);
                        var16 = var16.bind(var3)(var13);
                        if (var16) {
                            _fun62188_ip = 531;
                            continue _fun62188
                        }
                    case 523:
                        var16 = var14.imageAspectRatio;
                        _fun62188_ip = 537;
                        continue _fun62188;
                    case 531:
                        var16 = var14.crunchyrollImageAspectRatio;
                    case 537:
                        var15[1] = var16;
                        var6.style = var15;
                        var17 = _closure1_slot19;
                        var16 = _closure1_slot24;
                        var15 = {};
                        var19 = var13.assets;
                        var20 = var25 == var19;
                        var18 = undefined;
                        if (var20) {
                            _fun62188_ip = 576;
                            continue _fun62188
                        }
                    case 570:
                        var18 = var19.large_url;
                    case 576:
                        var15.href = var18;
                        var20 = _closure1_slot19;
                        var19 = _closure1_slot1;
                        var22 = _closure1_slot2;
                        var24 = 22;
                        var18 = var22[var24];
                        var19 = var19.bind(var3)(var18);
                        var18 = {};
                        var23 = _closure1_slot0;
                        var30 = 23;
                        var22 = var22[var30];
                        var26 = var23.bind(var3)(var22);
                        var23 = var26.makeSource;
                        var22 = var21.src;
                        var22 = var23.bind(var26)(var22);
                        var18.source = var22;
                        var22 = var21.alt;
                        var18.alt = var22;
                        var22 = var14.largeImage;
                        var18.style = var22;
                        var18 = var20.bind(var3)(var19, var18);
                        var15.children = var18;
                        var16 = var17.bind(var3)(var16, var15);
                        var15 = new Array(2);
                        var15[0] = var16;
                        var16 = var25 != var27;
                        if (!var16) {
                            _fun62188_ip = 859;
                            continue _fun62188
                        }
                    case 699:
                        var19 = _closure1_slot19;
                        var18 = _closure1_slot6;
                        var17 = {};
                        var20 = var14.smallImageBackground;
                        var17.style = var20;
                        var23 = _closure1_slot19;
                        var22 = _closure1_slot24;
                        var20 = {};
                        var26 = var13.assets;
                        var28 = var25 == var26;
                        var25 = undefined;
                        if (var28) {
                            _fun62188_ip = 750;
                            continue _fun62188
                        }
                    case 744:
                        var25 = var26.small_url;
                    case 750:
                        var20.href = var25;
                        var26 = _closure1_slot19;
                        var25 = _closure1_slot1;
                        var28 = _closure1_slot2;
                        var24 = var28[var24];
                        var25 = var25.bind(var3)(var24);
                        var24 = {};
                        var29 = _closure1_slot0;
                        var28 = var28[var30];
                        var30 = var29.bind(var3)(var28);
                        var29 = var30.makeSource;
                        var28 = var27.src;
                        var28 = var29.bind(var30)(var28);
                        var24.source = var28;
                        var27 = var27.alt;
                        var24.alt = var27;
                        var27 = var14.smallImage;
                        var24.style = var27;
                        var24 = var26.bind(var3)(var25, var24);
                        var20.children = var24;
                        var20 = var23.bind(var3)(var22, var20);
                        var17.children = var20;
                        var16 = var19.bind(var3)(var18, var17);
                    case 859:
                        var15[1] = var16;
                        var6.children = var15;
                        var4 = var12.bind(var3)(var7, var6);
                    case 873:
                        _fun62188_ip = 1117;
                        continue _fun62188;
                    case 878:
                        var12 = _closure1_slot19;
                        var7 = _closure1_slot5;
                        var6 = {};
                        var15 = 'button';
                        var6.accessibilityRole = var15;
                        var15 = var21.alt;
                        var6.accessibilityLabel = var15;
                        var23 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var15 = 20;
                        var16 = var24[var15];
                        var16 = var23.bind(var3)(var16);
                        var17 = var16.intl;
                        var16 = var17.string;
                        var15 = var24[var15];
                        var15 = var23.bind(var3)(var15);
                        var15 = var15.t;
                        var15 = var15.sjjOk2;
                        var15 = var16.bind(var17)(var15);
                        var6.accessibilityHint = var15;
                        var15 = function() { // Original name: onPress, environment: var11
                            var3 = _closure2_slot2;
                            var2 = {};
                            var0 = 'OPEN_SPOTIFY_ALBUM';
                            var2.action = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 21;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.openAlbum;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var6.onPress = var15;
                        var17 = _closure1_slot19;
                        var16 = _closure1_slot6;
                        var15 = {};
                        var19 = var14.imageContainer;
                        var18 = new Array(2);
                        var18[0] = var19;
                        var19 = var14.imageAspectRatio;
                        var18[1] = var19;
                        var15.style = var18;
                        var20 = _closure1_slot19;
                        var19 = _closure1_slot1;
                        var18 = 22;
                        var18 = var24[var18];
                        var19 = var19.bind(var3)(var18);
                        var18 = {};
                        var22 = 23;
                        var22 = var24[var22];
                        var24 = var23.bind(var3)(var22);
                        var23 = var24.makeSource;
                        var22 = var21.src;
                        var22 = var23.bind(var24)(var22);
                        var18.source = var22;
                        var21 = var21.alt;
                        var18.alt = var21;
                        var21 = var14.largeImage;
                        var18.style = var21;
                        var18 = var20.bind(var3)(var19, var18);
                        var15.children = var18;
                        var15 = var17.bind(var3)(var16, var15);
                        var6.children = var15;
                        var4 = var12.bind(var3)(var7, var6);
                    case 1117:
                        var5 = var4;
                    case 1120:
                        var4 = new Array(2);
                        var4[0] = var5;
                        var7 = _closure1_slot20;
                        var6 = _closure1_slot6;
                        var5 = {};
                        var12 = var14.content;
                        var5.style = var12;
                        var16 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var15 = 19;
                        var12 = var12[var15];
                        var12 = var16.bind(var3)(var12);
                        var12 = var12.bind(var3)(var13);
                        if (var12) {
                            _fun62188_ip = 1443;
                            continue _fun62188
                        }
                    case 1178:
                        if (!var8) {
                            _fun62188_ip = 1330;
                            continue _fun62188
                        }
                    case 1184:
                        var12 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var8 = 28;
                        var8 = var16[var8];
                        var8 = var12.bind(var3)(var8);
                        var8 = var8.bind(var3)(var13);
                        if (var8) {
                            _fun62188_ip = 1330;
                            continue _fun62188
                        }
                    case 1212:
                        var16 = _closure1_slot19;
                        var12 = _closure1_slot24;
                        var8 = {};
                        var17 = var13.details_url;
                        var8.href = var17;
                        var19 = _closure1_slot19;
                        var18 = _closure1_slot23;
                        var17 = {};
                        var20 = 'text-md/semibold';
                        var17.variant = var20;
                        var23 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var20 = 20;
                        var21 = var24[var20];
                        var21 = var23.bind(var3)(var21);
                        var22 = var21.intl;
                        var21 = var22.string;
                        var20 = var24[var20];
                        var20 = var23.bind(var3)(var20);
                        var20 = var20.t;
                        var20 = var20["74vS/x"];
                        var20 = var21.bind(var22)(var20);
                        var17.children = var20;
                        var17 = var19.bind(var3)(var18, var17);
                        var8.children = var17;
                        var12 = var16.bind(var3)(var12, var8);
                        _fun62188_ip = 1441;
                        continue _fun62188;
                    case 1330:
                        var17 = _closure1_slot19;
                        var16 = _closure1_slot24;
                        var8 = {};
                        var18 = var13.details_url;
                        var8.href = var18;
                        var20 = _closure1_slot19;
                        var19 = _closure1_slot23;
                        var18 = {};
                        var21 = 'text-md/semibold';
                        var18.variant = var21;
                        var22 = _closure1_slot1;
                        var23 = _closure1_slot2;
                        var21 = 28;
                        var21 = var23[var21];
                        var21 = var22.bind(var3)(var21);
                        var21 = var21.bind(var3)(var13);
                        if (var21) {
                            _fun62188_ip = 1416;
                            continue _fun62188
                        }
                    case 1397:
                        var21 = var13.details;
                        var22 = null;
                        if (!(var22 == var21)) {
                            _fun62188_ip = 1414;
                            continue _fun62188
                        }
                    case 1409:
                        var21 = var13.name;
                    case 1414:
                        _fun62188_ip = 1421;
                        continue _fun62188;
                    case 1416:
                        var21 = var13.name;
                    case 1421:
                        var18.children = var21;
                        var18 = var20.bind(var3)(var19, var18);
                        var8.children = var18;
                        var12 = var17.bind(var3)(var16, var8);
                    case 1441:
                        _fun62188_ip = 1533;
                        continue _fun62188;
                    case 1443:
                        var17 = _closure1_slot19;
                        var16 = _closure1_slot23;
                        var8 = {};
                        var18 = 'text-md/semibold';
                        var8.variant = var18;
                        var20 = _closure1_slot19;
                        var19 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var18 = 21;
                        var18 = var21[var18];
                        var18 = var19.bind(var3)(var18);
                        var19 = var18.SpotifyTrack;
                        var18 = {};
                        var21 = var13.details;
                        var18.text = var21;
                        var18.activity = var13;
                        var21 = function() { // Original name: onPress, environment: var11
                            var2 = _closure2_slot2;
                            var1 = {};
                            var0 = 'OPEN_SPOTIFY_TRACK';
                            var1.action = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var18.onPress = var21;
                        var18 = var20.bind(var3)(var19, var18);
                        var8.children = var18;
                        var12 = var17.bind(var3)(var16, var8);
                    case 1533:
                        var8 = new Array(4);
                        var8[0] = var12;
                        var11 = function() { // Environment: var11
                            _fun62191: for (var _fun62191_ip = 0;;) switch (_fun62191_ip) {
                                case 0:
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 19;
                                    var0 = var2[var0];
                                    var4 = undefined;
                                    var1 = var1.bind(var4)(var0);
                                    var0 = _closure2_slot1;
                                    var1 = var1.bind(var4)(var0);
                                    var0 = _closure2_slot1;
                                    if (var1) {
                                        _fun62191_ip = 270;
                                        continue _fun62191
                                    }
                                case 47:
                                    var2 = var0.details;
                                    var1 = _closure2_slot3;
                                    if (!var1) {
                                        _fun62191_ip = 139;
                                        continue _fun62191
                                    }
                                case 60:
                                    var3 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 28;
                                    var1 = var6[var1];
                                    var3 = var3.bind(var4)(var1);
                                    var1 = _closure2_slot1;
                                    var1 = var3.bind(var4)(var1);
                                    if (var1) {
                                        _fun62191_ip = 139;
                                        continue _fun62191
                                    }
                                case 92:
                                    var3 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var1 = 29;
                                    var1 = var6[var1];
                                    var7 = var3.bind(var4)(var1);
                                    var6 = var7.getHangStatusText;
                                    var1 = _closure2_slot0;
                                    var3 = var1.id;
                                    var1 = _closure2_slot1;
                                    var10 = var6.bind(var7)(var3, var1);
                                    _fun62191_ip = 201;
                                    continue _fun62191;
                                case 139:
                                    var3 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 28;
                                    var1 = var6[var1];
                                    var3 = var3.bind(var4)(var1);
                                    var1 = _closure2_slot1;
                                    var1 = var3.bind(var4)(var1);
                                    if (var1) {
                                        _fun62191_ip = 186;
                                        continue _fun62191
                                    }
                                case 171:
                                    var3 = _closure2_slot1;
                                    var6 = var3.state;
                                    var3 = null;
                                    var1 = var3 == var6;
                                case 186:
                                    var10 = var2;
                                    if (var1) {
                                        _fun62191_ip = 201;
                                        continue _fun62191
                                    }
                                case 192:
                                    var1 = _closure2_slot1;
                                    var10 = var1.state;
                                case 201:
                                    var3 = _closure1_slot19;
                                    var2 = _closure1_slot24;
                                    var1 = {};
                                    var6 = _closure2_slot1;
                                    var6 = var6.state_url;
                                    var1.href = var6;
                                    var9 = _closure1_slot19;
                                    var7 = _closure1_slot23;
                                    var6 = {
                                        'variant': 'text-xs/medium',
                                        'lineClamp': 1
                                    };
                                    var6.children = var10;
                                    var6 = var9.bind(var4)(var7, var6);
                                    var1.children = var6;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var1;
                                case 270:
                                    var1 = var0.state;
                                    var2 = null;
                                    var0 = var2 == var1;
                                    var9 = undefined;
                                    if (var0) {
                                        _fun62191_ip = 296;
                                        continue _fun62191
                                    }
                                case 286:
                                    var0 = var1.trim;
                                    var9 = var0.bind(var1)();
                                case 296:
                                    var1 = var2 == var9;
                                    var0 = null;
                                    if (var1) {
                                        _fun62191_ip = 423;
                                        continue _fun62191
                                    }
                                case 305:
                                    var1 = '';
                                    var0 = null;
                                    if (!(var1 !== var9)) {
                                        _fun62191_ip = 423;
                                        continue _fun62191
                                    }
                                case 315:
                                    var3 = _closure1_slot19;
                                    var2 = _closure1_slot23;
                                    var1 = {
                                        'variant': 'text-xs/medium',
                                        'lineClamp': 1
                                    };
                                    var7 = _closure1_slot19;
                                    var6 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var5 = 21;
                                    var5 = var10[var5];
                                    var5 = var6.bind(var4)(var5);
                                    var6 = var5.SpotifyArtists;
                                    var5 = {};
                                    var5.artists = var9;
                                    var9 = _closure2_slot1;
                                    var5.activity = var9;
                                    var8 = _closure2_slot0;
                                    var8 = var8.id;
                                    var5.userId = var8;
                                    var8 = function() { // Original name: onPress, environment: var8
                                        var2 = _closure2_slot2;
                                        var1 = {};
                                        var0 = 'OPEN_SPOTIFY_ARTIST';
                                        var1.action = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var5.onPress = var8;
                                    var5 = var7.bind(var4)(var6, var5);
                                    var1.children = var5;
                                    var0 = var3.bind(var4)(var2, var1);
                                case 423:
                                    return var0;
                            }
                        };
                        var11 = var11.bind(var3)();
                        var8[1] = var11;
                        var12 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var11 = var11[var15];
                        var11 = var12.bind(var3)(var11);
                        var12 = var11.bind(var3)(var13);
                        var15 = null;
                        var11 = null;
                        if (var12) {
                            _fun62188_ip = 2146;
                            continue _fun62188
                        }
                    case 1586:
                        var16 = var13.type;
                        var12 = _closure1_slot14;
                        var12 = var12.WATCHING;
                        var11 = null;
                        if (!(var16 !== var12)) {
                            _fun62188_ip = 2146;
                            continue _fun62188
                        }
                    case 1610:
                        var16 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var17 = 28;
                        var12 = var12[var17];
                        var12 = var16.bind(var3)(var12);
                        var12 = var12.bind(var3)(var13);
                        if (!var12) {
                            _fun62188_ip = 1684;
                            continue _fun62188
                        }
                    case 1638:
                        var16 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var12 = 30;
                        var12 = var18[var12];
                        var12 = var16.bind(var3)(var12);
                        var12 = var12.bind(var3)(var13);
                        if (var12) {
                            _fun62188_ip = 1684;
                            continue _fun62188
                        }
                    case 1666:
                        var12 = var13.party;
                        var12 = var15 != var12;
                        var11 = null;
                        if (var12) {
                            _fun62188_ip = 2146;
                            continue _fun62188
                        }
                    case 1684:
                        var16 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var12 = var12[var17];
                        var12 = var16.bind(var3)(var12);
                        var12 = var12.bind(var3)(var13);
                        if (var12) {
                            _fun62188_ip = 1813;
                            continue _fun62188
                        }
                    case 1709:
                        var17 = _closure1_slot19;
                        var16 = _closure1_slot24;
                        var12 = {};
                        var19 = var13.assets;
                        var20 = var15 == var19;
                        var18 = undefined;
                        if (var20) {
                            _fun62188_ip = 1740;
                            continue _fun62188
                        }
                    case 1734:
                        var18 = var19.large_url;
                    case 1740:
                        var12.href = var18;
                        var20 = _closure1_slot19;
                        var19 = _closure1_slot23;
                        var18 = {
                            'variant': 'text-xs/medium',
                            'lineClamp': 1
                        };
                        var22 = var13.assets;
                        var23 = var15 == var22;
                        var21 = undefined;
                        if (var23) {
                            _fun62188_ip = 1788;
                            continue _fun62188
                        }
                    case 1782:
                        var21 = var22.large_text;
                    case 1788:
                        var18.children = var21;
                        var18 = var20.bind(var3)(var19, var18);
                        var12.children = var18;
                        var11 = var17.bind(var3)(var16, var12);
                        _fun62188_ip = 2146;
                        continue _fun62188;
                    case 1813:
                        var16 = var13.party;
                        var17 = var15 == var16;
                        var12 = undefined;
                        if (var17) {
                            _fun62188_ip = 1833;
                            continue _fun62188
                        }
                    case 1828:
                        var12 = var16.size;
                    case 1833:
                        var12 = var15 != var12;
                        if (!var12) {
                            _fun62188_ip = 1863;
                            continue _fun62188
                        }
                    case 1840:
                        var15 = var13.party;
                        var15 = var15.size;
                        var16 = var15.length;
                        var15 = 2;
                        var12 = var16 >= var15;
                    case 1863:
                        var17 = '';
                        if (!var12) {
                            _fun62188_ip = 2081;
                            continue _fun62188
                        }
                    case 1873:
                        var12 = var13.party;
                        var12 = var12.size;
                        var20 = 1;
                        var12 = var12[var20];
                        var21 = 0;
                        if (!(var21 !== var12)) {
                            _fun62188_ip = 1998;
                            continue _fun62188
                        }
                    case 1897:
                        var15 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var12 = 20;
                        var16 = var19[var12];
                        var16 = var15.bind(var3)(var16);
                        var18 = var16.intl;
                        var16 = var18.formatToPlainString;
                        var12 = var19[var12];
                        var12 = var15.bind(var3)(var12);
                        var12 = var12.t;
                        var15 = var12["u//9By"];
                        var12 = {};
                        var19 = var13.party;
                        var19 = var19.size;
                        var19 = var19[var21];
                        var12.count = var19;
                        var19 = var13.party;
                        var19 = var19.size;
                        var19 = var19[var20];
                        var12.max = var19;
                        var12 = var16.bind(var18)(var15, var12);
                        _fun62188_ip = 2078;
                        continue _fun62188;
                    case 1998:
                        var16 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var15 = 20;
                        var18 = var20[var15];
                        var18 = var16.bind(var3)(var18);
                        var19 = var18.intl;
                        var18 = var19.formatToPlainString;
                        var15 = var20[var15];
                        var15 = var16.bind(var3)(var15);
                        var15 = var15.t;
                        var16 = var15.IM4J4e;
                        var15 = {};
                        var20 = var13.party;
                        var20 = var20.size;
                        var20 = var20[var21];
                        var15.count = var20;
                        var12 = var18.bind(var19)(var16, var15);
                    case 2078:
                        var17 = var12;
                    case 2081:
                        var16 = _closure1_slot19;
                        var15 = _closure1_slot23;
                        var12 = {
                            'variant': 'text-xs/medium',
                            'lineClamp': 1
                        };
                        var18 = var13.state;
                        var19 = new Array(2);
                        var19[0] = var18;
                        var19[1] = var17;
                        var18 = var19.join;
                        var17 = ' ';
                        var17 = var18.bind(var19)(var17);
                        var12.children = var17;
                        var11 = var16.bind(var3)(var15, var12);
                    case 2146:
                        var8[2] = var11;
                        var9 = var9.bot;
                        var9 = !var9;
                        if (!var9) {
                            _fun62188_ip = 2209;
                            continue _fun62188
                        }
                    case 2162:
                        var12 = _closure1_slot19;
                        var11 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var10 = 31;
                        var10 = var15[var10];
                        var11 = var11.bind(var3)(var10);
                        var10 = {};
                        var14 = var14.badges;
                        var10.style = var14;
                        var10.activity = var13;
                        var9 = var12.bind(var3)(var11, var10);
                    case 2209:
                        var8[3] = var9;
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var0 = function(arg0) { // Original name: ActivityCard, environment: var1
                _fun62193: for (var _fun62193_ip = 0;;) switch (_fun62193_ip) {
                    case 0:
                        var0 = arg0;
                        var19 = var0.user;
                        var _closure2_slot0 = var19;
                        var18 = var0.currentUser;
                        var16 = var0.activity;
                        var _closure2_slot1 = var16;
                        var22 = var0.voiceChannel;
                        var _closure2_slot2 = var22;
                        var9 = var0.style;
                        var4 = undefined;
                        var _closure2_slot5 = var4;
                        var0 = _closure1_slot22;
                        var23 = var0.bind(var4)();
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 32;
                        var0 = var6[var0];
                        var0 = var2.bind(var4)(var0);
                        var24 = var0.bind(var4)(var16);
                        var1 = _closure1_slot0;
                        var3 = 33;
                        var0 = var6[var3];
                        var7 = var1.bind(var4)(var0);
                        var5 = var7.useStateFromStores;
                        var0 = _closure1_slot13;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var20
                            _fun62194: for (var _fun62194_ip = 0;;) switch (_fun62194_ip) {
                                case 0:
                                    var2 = _closure1_slot13;
                                    var1 = var2.isInChannel;
                                    var4 = _closure2_slot2;
                                    var0 = null;
                                    var4 = var0 == var4;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun62194_ip = 40;
                                        continue _fun62194
                                    }
                                case 31:
                                    var3 = _closure2_slot2;
                                    var0 = var3.id;
                                case 40:
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var21 = var5.bind(var7)(var1, var0);
                        var _closure2_slot3 = var21;
                        var1 = var16.type;
                        var0 = _closure1_slot14;
                        var0 = var0.HANG_STATUS;
                        var10 = var1 === var0;
                        var _closure2_slot4 = var10;
                        var1 = 34;
                        var0 = var6[var1];
                        var5 = var2.bind(var4)(var0);
                        var0 = 35;
                        var0 = var6[var0];
                        var0 = var2.bind(var4)(var0);
                        var0 = var0.USER_PROFILE_LIVE_ACTIVITY_CARD;
                        var0 = var5.bind(var4)(var0);
                        var5 = var0.analyticsLocations;
                        var0 = 36;
                        var0 = var6[var0];
                        var2 = var2.bind(var4)(var0);
                        var0 = {};
                        var6 = 'live';
                        var0.display = var6;
                        var12 = null;
                        var7 = var12 == var22;
                        var6 = undefined;
                        if (var7) {
                            _fun62193_ip = 237;
                            continue _fun62193
                        }
                    case 232:
                        var6 = var22.id;
                    case 237:
                        var0.voiceChannelId = var6;
                        var0.user = var19;
                        var0.activity = var16;
                        var0.analyticsLocations = var5;
                        var13 = var2.bind(var4)(var0);
                        _closure2_slot5 = var13;
                        var6 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var2 = 37;
                        var2 = var0[var2];
                        var6 = var6.bind(var4)(var2);
                        var2 = {};
                        var7 = var19.id;
                        var2.userId = var7;
                        var2.onAction = var13;
                        var2 = var6.bind(var4)(var2);
                        var2 = _closure1_slot0;
                        var6 = var0[var3];
                        var11 = var2.bind(var4)(var6);
                        var8 = var11.useStateFromStores;
                        var6 = _closure1_slot9;
                        var7 = new Array(3);
                        var7[0] = var6;
                        var6 = _closure1_slot13;
                        var7[1] = var6;
                        var6 = _closure1_slot8;
                        var7[2] = var6;
                        var6 = function() { // Environment: var20
                            _fun62195: for (var _fun62195_ip = 0;;) switch (_fun62195_ip) {
                                case 0:
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 30;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = _closure2_slot1;
                                    var1 = var2.bind(var0)(var1);
                                    if (var1) {
                                        _fun62195_ip = 89;
                                        continue _fun62195
                                    }
                                case 40:
                                    var2 = _closure2_slot4;
                                    var6 = null;
                                    var1 = null;
                                    if (!var2) {
                                        _fun62195_ip = 87;
                                        continue _fun62195
                                    }
                                case 51:
                                    var5 = _closure1_slot9;
                                    var3 = var5.getGuild;
                                    var2 = _closure2_slot2;
                                    var6 = var6 == var2;
                                    var2 = undefined;
                                    if (var6) {
                                        _fun62195_ip = 82;
                                        continue _fun62195
                                    }
                                case 73:
                                    var6 = _closure2_slot2;
                                    var2 = var6.guild_id;
                                case 82:
                                    var1 = var3.bind(var5)(var2);
                                case 87:
                                    return var1;
                                case 89:
                                    var6 = _closure1_slot13;
                                    var5 = var6.getVoiceStateForSession;
                                    var1 = _closure2_slot0;
                                    var2 = var1.id;
                                    var1 = _closure2_slot1;
                                    var3 = null;
                                    var8 = var3 == var1;
                                    var1 = undefined;
                                    if (var8) {
                                        _fun62195_ip = 133;
                                        continue _fun62195
                                    }
                                case 123:
                                    var7 = _closure2_slot1;
                                    var1 = var7.session_id;
                                case 133:
                                    var1 = var5.bind(var6)(var2, var1);
                                    var2 = var3 == var1;
                                    var6 = undefined;
                                    if (var2) {
                                        _fun62195_ip = 153;
                                        continue _fun62195
                                    }
                                case 148:
                                    var6 = var1.channelId;
                                case 153:
                                    var2 = _closure1_slot9;
                                    var1 = var2.getGuild;
                                    var5 = _closure1_slot8;
                                    var4 = var5.getChannel;
                                    var4 = var4.bind(var5)(var6);
                                    var3 = var3 == var4;
                                    var0 = undefined;
                                    if (var3) {
                                        _fun62195_ip = 195;
                                        continue _fun62195
                                    }
                                case 185:
                                    var3 = var4.getGuildId;
                                    var0 = var3.bind(var4)();
                                case 195:
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var25 = var8.bind(var11)(var7, var6);
                        var0 = var0[var3];
                        var6 = var2.bind(var4)(var0);
                        var3 = var6.useStateFromStores;
                        var0 = _closure1_slot7;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var0 = function() { // Environment: var20
                            _fun62196: for (var _fun62196_ip = 0;;) switch (_fun62196_ip) {
                                case 0:
                                    var0 = _closure2_slot1;
                                    var2 = var0.application_id;
                                    var0 = null;
                                    if (!(var0 == var2)) {
                                        _fun62196_ip = 66;
                                        continue _fun62196
                                    }
                                case 19:
                                    var2 = _closure2_slot1;
                                    var2 = var2.name;
                                    var2 = var0 != var2;
                                    var0 = null;
                                    if (!var2) {
                                        _fun62196_ip = 64;
                                        continue _fun62196
                                    }
                                case 37:
                                    var4 = _closure1_slot7;
                                    var3 = var4.getApplicationByName;
                                    var2 = _closure2_slot1;
                                    var2 = var2.name;
                                    var0 = var3.bind(var4)(var2);
                                case 64:
                                    _fun62196_ip = 94;
                                    continue _fun62196;
                                case 66:
                                    var3 = _closure1_slot7;
                                    var2 = var3.getApplication;
                                    var1 = _closure2_slot1;
                                    var1 = var1.application_id;
                                    var0 = var2.bind(var3)(var1);
                                case 94:
                                    return var0;
                            }
                        };
                        var17 = var3.bind(var6)(var2, var0);
                        var3 = var16.type;
                        var0 = _closure1_slot14;
                        var2 = var0.CUSTOM_STATUS;
                        var0 = null;
                        if (!(var3 !== var2)) {
                            _fun62193_ip = 1552;
                            continue _fun62193
                        }
                    case 424:
                        var3 = var16.type;
                        var2 = _closure1_slot14;
                        var2 = var2.HANG_STATUS;
                        if (!(var3 === var2)) {
                            _fun62193_ip = 455;
                            continue _fun62193
                        }
                    case 443:
                        var2 = var12 == var22;
                        var0 = null;
                        if (var2) {
                            _fun62193_ip = 1552;
                            continue _fun62193
                        }
                    case 455:
                        var3 = _closure1_slot19;
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = var8[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.AnalyticsLocationProvider;
                        var1 = {};
                        var1.value = var5;
                        var7 = _closure1_slot20;
                        var6 = _closure1_slot1;
                        var5 = 38;
                        var5 = var8[var5];
                        var6 = var6.bind(var4)(var5);
                        var5 = {};
                        var11 = var23.card;
                        var8 = new Array(2);
                        var8[0] = var11;
                        var8[1] = var9;
                        var5.style = var8;
                        var8 = var24.text;
                        var5.title = var8;
                        var8 = var23.cardTitle;
                        var5.titleStyle = var8;
                        var8 = var24.platformIcon;
                        var8 = var12 != var8;
                        if (!var8) {
                            _fun62193_ip = 702;
                            continue _fun62193
                        }
                    case 568:
                        var15 = _closure1_slot19;
                        var11 = _closure1_slot1;
                        var29 = _closure1_slot2;
                        var27 = 39;
                        var9 = var29[var27];
                        var11 = var11.bind(var4)(var9);
                        var9 = {};
                        var26 = var23.cardTitleIcon;
                        var9.style = var26;
                        var28 = _closure1_slot0;
                        var26 = 23;
                        var26 = var29[var26];
                        var28 = var28.bind(var4)(var26);
                        var26 = var28.makeSource;
                        var29 = var24.platformIcon;
                        var30 = var12 == var29;
                        var24 = undefined;
                        if (var30) {
                            _fun62193_ip = 647;
                            continue _fun62193
                        }
                    case 641:
                        var24 = var29.whitePNG;
                    case 647:
                        var24 = var26.bind(var28)(var24);
                        var9.source = var24;
                        var26 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var24 = var24[var27];
                        var24 = var26.bind(var4)(var24);
                        var24 = var24.IconSizes;
                        var24 = var24.SMALL_14;
                        var9.size = var24;
                        var24 = true;
                        var9.disableColor = var24;
                        var8 = var15.bind(var4)(var11, var9);
                    case 702:
                        var5.titleIcon = var8;
                        var11 = _closure1_slot19;
                        var9 = _closure1_slot25;
                        var8 = {};
                        var8.user = var19;
                        var8.activity = var16;
                        var8.application = var17;
                        var8.onAction = var13;
                        var9 = var11.bind(var4)(var9, var8);
                        var8 = new Array(4);
                        var8[0] = var9;
                        var11 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var9 = 40;
                        var9 = var15[var9];
                        var9 = var11.bind(var4)(var9);
                        var11 = var9.bind(var4)(var16);
                        var9 = null;
                        if (!var11) {
                            _fun62193_ip = 835;
                            continue _fun62193
                        }
                    case 779:
                        var11 = var16.timestamps;
                        var27 = var11.start;
                        var26 = var11.end;
                        var24 = _closure1_slot19;
                        var15 = _closure1_slot1;
                        var28 = _closure1_slot2;
                        var11 = 41;
                        var11 = var28[var11];
                        var15 = var15.bind(var4)(var11);
                        var11 = {};
                        var11.start = var27;
                        var11.end = var26;
                        var9 = var24.bind(var4)(var15, var11);
                    case 835:
                        var8[1] = var9;
                        var11 = var12 == var22;
                        var9 = null;
                        if (var11) {
                            _fun62193_ip = 912;
                            continue _fun62193
                        }
                    case 848:
                        var11 = var12 == var25;
                        var9 = null;
                        if (var11) {
                            _fun62193_ip = 912;
                            continue _fun62193
                        }
                    case 857:
                        var24 = _closure1_slot19;
                        var15 = _closure1_slot1;
                        var26 = _closure1_slot2;
                        var11 = 42;
                        var11 = var26[var11];
                        var15 = var15.bind(var4)(var11);
                        var11 = {};
                        var11.guild = var25;
                        var11.channel = var22;
                        var11.onAction = var13;
                        var25 = var23.voiceChannelDivider;
                        var11.style = var25;
                        var9 = var24.bind(var4)(var15, var11);
                    case 912:
                        var8[2] = var9;
                        var11 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var9 = 43;
                        var9 = var15[var9];
                        var9 = var11.bind(var4)(var9);
                        var9 = var9.bind(var4)(var16);
                        if (var9) {
                            _fun62193_ip = 1471;
                            continue _fun62193
                        }
                    case 947:
                        var11 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var9 = 45;
                        var9 = var15[var9];
                        var9 = var11.bind(var4)(var9);
                        var9 = var9.bind(var4)(var16);
                        if (var9) {
                            _fun62193_ip = 1412;
                            continue _fun62193
                        }
                    case 978:
                        var15 = var19.id;
                        var11 = var18.id;
                        var9 = null;
                        if (!(var15 !== var11)) {
                            _fun62193_ip = 1410;
                            continue _fun62193
                        }
                    case 997:
                        var15 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var11 = 19;
                        var11 = var24[var11];
                        var11 = var15.bind(var4)(var11);
                        var11 = var11.bind(var4)(var16);
                        if (var11) {
                            _fun62193_ip = 1359;
                            continue _fun62193
                        }
                    case 1028:
                        var15 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var11 = 30;
                        var11 = var24[var11];
                        var11 = var15.bind(var4)(var11);
                        var11 = var11.bind(var4)(var16);
                        if (var11) {
                            _fun62193_ip = 1296;
                            continue _fun62193
                        }
                    case 1059:
                        var15 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var11 = 46;
                        var11 = var24[var11];
                        var11 = var15.bind(var4)(var11);
                        var11 = var11.bind(var4)(var16);
                        if (var11) {
                            _fun62193_ip = 1246;
                            continue _fun62193
                        }
                    case 1090:
                        if (!var10) {
                            _fun62193_ip = 1097;
                            continue _fun62193
                        }
                    case 1093:
                        if (!(var12 == var22)) {
                            _fun62193_ip = 1187;
                            continue _fun62193
                        }
                    case 1097:
                        var10 = var16.buttons;
                        var11 = var12 != var10;
                        var10 = null;
                        if (!var11) {
                            _fun62193_ip = 1185;
                            continue _fun62193
                        }
                    case 1112:
                        var11 = var16.buttons;
                        var15 = var11.length;
                        var11 = 0;
                        var11 = var15 > var11;
                        var10 = null;
                        if (!var11) {
                            _fun62193_ip = 1185;
                            continue _fun62193
                        }
                    case 1134:
                        var15 = _closure1_slot19;
                        var12 = _closure1_slot6;
                        var11 = {};
                        var23 = var23.customButtons;
                        var11.style = var23;
                        var25 = var16.buttons;
                        var24 = var25.map;
                        var23 = function(arg0, arg1) { // Environment: var20
                            var4 = arg1;
                            var3 = _closure1_slot19;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 44;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.CustomActivityButton;
                            var0 = {};
                            var0.index = var4;
                            var6 = _closure2_slot0;
                            var0.user = var6;
                            var6 = _closure2_slot1;
                            var0.activity = var6;
                            var5 = _closure2_slot5;
                            var0.onAction = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                        };
                        var23 = var24.bind(var25)(var23);
                        var11.children = var23;
                        var10 = var15.bind(var4)(var12, var11);
                    case 1185:
                        _fun62193_ip = 1244;
                        continue _fun62193;
                    case 1187:
                        var15 = _closure1_slot19;
                        var12 = _closure1_slot0;
                        var23 = _closure1_slot2;
                        var11 = 44;
                        var11 = var23[var11];
                        var11 = var12.bind(var4)(var11);
                        var12 = var11.VoiceChannelButtons;
                        var11 = {};
                        var11.channel = var22;
                        var11.isInChannel = var21;
                        var20 = function(arg0) { // Original name: onAction, environment: var20
                            _fun62197: for (var _fun62197_ip = 0;;) switch (_fun62197_ip) {
                                case 0:
                                    var2 = _closure2_slot5;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var2.bind(var0)(var1);
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var2 = 47;
                                    var2 = var8[var2];
                                    var4 = var7.bind(var0)(var2);
                                    var3 = var4.track;
                                    var1 = _closure1_slot15;
                                    var2 = var1.HANG_STATUS_CTA_CLICKED;
                                    var1 = {};
                                    var6 = 'UserProfilePopout';
                                    var1.source = var6;
                                    var6 = 48;
                                    var6 = var8[var6];
                                    var7 = var7.bind(var0)(var6);
                                    var6 = _closure2_slot2;
                                    var6 = var6.id;
                                    var9 = var7.bind(var0)(var6);
                                    var10 = var1;
                                    var6 = copyDataProperties(var10, var9);
                                    var6 = _closure2_slot0;
                                    var7 = var6.id;
                                    var6 = 'other_user_id';
                                    var1[var6] = var7;
                                    var5 = _closure2_slot3;
                                    var6 = 'join';
                                    if (!var5) {
                                        _fun62197_ip = 133;
                                        continue _fun62197
                                    }
                                case 129:
                                    var6 = 'open';
                                case 133:
                                    var5 = 'cta_type';
                                    var1[var5] = var6;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                            }
                        };
                        var11.onAction = var20;
                        var10 = var15.bind(var4)(var12, var11);
                    case 1244:
                        _fun62193_ip = 1294;
                        continue _fun62193;
                    case 1246:
                        var15 = _closure1_slot19;
                        var12 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var11 = 44;
                        var11 = var20[var11];
                        var11 = var12.bind(var4)(var11);
                        var12 = var11.WatchActivityButton;
                        var11 = {};
                        var11.activity = var16;
                        var11.onAction = var13;
                        var10 = var15.bind(var4)(var12, var11);
                    case 1294:
                        _fun62193_ip = 1357;
                        continue _fun62193;
                    case 1296:
                        var15 = _closure1_slot19;
                        var12 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var11 = 44;
                        var11 = var20[var11];
                        var11 = var12.bind(var4)(var11);
                        var12 = var11.JoinActivityButton;
                        var11 = {};
                        var11.user = var19;
                        var11.currentUser = var18;
                        var11.activity = var16;
                        var11.application = var17;
                        var11.onAction = var13;
                        var10 = var15.bind(var4)(var12, var11);
                    case 1357:
                        _fun62193_ip = 1407;
                        continue _fun62193;
                    case 1359:
                        var15 = _closure1_slot19;
                        var12 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var11 = 44;
                        var11 = var17[var11];
                        var11 = var12.bind(var4)(var11);
                        var12 = var11.PlayOnSpotifyButton;
                        var11 = {};
                        var11.activity = var16;
                        var11.onAction = var13;
                        var10 = var15.bind(var4)(var12, var11);
                    case 1407:
                        var9 = var10;
                    case 1410:
                        _fun62193_ip = 1469;
                        continue _fun62193;
                    case 1412:
                        var12 = _closure1_slot19;
                        var11 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var10 = 44;
                        var10 = var15[var10];
                        var10 = var11.bind(var4)(var10);
                        var11 = var10.ConnectPlatformButton;
                        var10 = {};
                        var15 = _closure1_slot17;
                        var15 = var15.PLAYSTATION;
                        var10.type = var15;
                        var10.onAction = var13;
                        var9 = var12.bind(var4)(var11, var10);
                    case 1469:
                        _fun62193_ip = 1528;
                        continue _fun62193;
                    case 1471:
                        var12 = _closure1_slot19;
                        var11 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var10 = 44;
                        var10 = var15[var10];
                        var10 = var11.bind(var4)(var10);
                        var11 = var10.ConnectPlatformButton;
                        var10 = {};
                        var14 = _closure1_slot17;
                        var14 = var14.XBOX;
                        var10.type = var14;
                        var10.onAction = var13;
                        var9 = var12.bind(var4)(var11, var10);
                    case 1528:
                        var8[3] = var9;
                        var5.children = var8;
                        var5 = var7.bind(var4)(var6, var5);
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 1552:
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = function(arg0) { // Original name: StreamActivityCard, environment: var1
                _fun62199: for (var _fun62199_ip = 0;;) switch (_fun62199_ip) {
                    case 0:
                        var0 = arg0;
                        var21 = var0.user;
                        var _closure2_slot0 = var21;
                        var25 = var0.stream;
                        var _closure2_slot1 = var25;
                        var20 = var0.activity;
                        var _closure2_slot2 = var20;
                        var10 = var0.style;
                        var3 = undefined;
                        var _closure2_slot4 = var3;
                        var0 = _closure1_slot22;
                        var17 = var0.bind(var3)();
                        var1 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 33;
                        var2 = var5[var0];
                        var7 = var1.bind(var3)(var2);
                        var6 = var7.useStateFromStores;
                        var2 = _closure1_slot8;
                        var4 = new Array(1);
                        var4[0] = var2;
                        var2 = function() { // Environment: var23
                            var2 = _closure1_slot8;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot1;
                            var0 = var0.channelId;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var14 = var6.bind(var7)(var4, var2);
                        var _closure2_slot3 = var14;
                        var2 = var5[var0];
                        var7 = var1.bind(var3)(var2);
                        var6 = var7.useStateFromStores;
                        var2 = _closure1_slot13;
                        var4 = new Array(1);
                        var4[0] = var2;
                        var2 = function() { // Environment: var23
                            _fun62201: for (var _fun62201_ip = 0;;) switch (_fun62201_ip) {
                                case 0:
                                    var2 = _closure1_slot13;
                                    var1 = var2.isInChannel;
                                    var4 = _closure2_slot3;
                                    var0 = null;
                                    var4 = var0 == var4;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun62201_ip = 40;
                                        continue _fun62201
                                    }
                                case 31:
                                    var3 = _closure2_slot3;
                                    var0 = var3.id;
                                case 40:
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var13 = var6.bind(var7)(var4, var2);
                        var2 = var5[var0];
                        var7 = var1.bind(var3)(var2);
                        var6 = var7.useStateFromStores;
                        var2 = _closure1_slot9;
                        var4 = new Array(1);
                        var4[0] = var2;
                        var2 = function() { // Environment: var23
                            var2 = _closure1_slot9;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot1;
                            var0 = var0.guildId;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var18 = var6.bind(var7)(var4, var2);
                        var2 = var5[var0];
                        var7 = var1.bind(var3)(var2);
                        var6 = var7.useStateFromStores;
                        var2 = _closure1_slot11;
                        var4 = new Array(1);
                        var4[0] = var2;
                        var2 = function() { // Environment: var23
                            var3 = _closure1_slot11;
                            var2 = var3.findActivity;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var0 = function(arg0) { // Environment: var0
                                _fun62204: for (var _fun62204_ip = 0;;) switch (_fun62204_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var4 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 28;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var0 = var4.bind(var2)(var0);
                                        var0 = var0.bind(var2)(var3);
                                        if (!var0) {
                                            _fun62204_ip = 64;
                                            continue _fun62204
                                        }
                                    case 36:
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var1 = 49;
                                        var1 = var5[var1];
                                        var1 = var4.bind(var2)(var1);
                                        var1 = var1.bind(var2)(var3);
                                        var0 = !var1;
                                    case 64:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var22 = var6.bind(var7)(var4, var2);
                        var0 = var5[var0];
                        var6 = var1.bind(var3)(var0);
                        var4 = var6.useStateFromStores;
                        var0 = _closure1_slot7;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var0 = function() { // Environment: var23
                            _fun62205: for (var _fun62205_ip = 0;;) switch (_fun62205_ip) {
                                case 0:
                                    var2 = _closure2_slot2;
                                    var0 = null;
                                    var4 = var0 == var2;
                                    var3 = undefined;
                                    if (var4) {
                                        _fun62205_ip = 28;
                                        continue _fun62205
                                    }
                                case 18:
                                    var4 = _closure2_slot2;
                                    var3 = var4.application_id;
                                case 28:
                                    if (!(var0 == var3)) {
                                        _fun62205_ip = 92;
                                        continue _fun62205
                                    }
                                case 32:
                                    var3 = _closure2_slot2;
                                    var3 = var0 == var3;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun62205_ip = 54;
                                        continue _fun62205
                                    }
                                case 45:
                                    var3 = _closure2_slot2;
                                    var2 = var3.name;
                                case 54:
                                    var2 = var0 != var2;
                                    var0 = null;
                                    if (!var2) {
                                        _fun62205_ip = 90;
                                        continue _fun62205
                                    }
                                case 63:
                                    var4 = _closure1_slot7;
                                    var3 = var4.getApplicationByName;
                                    var2 = _closure2_slot2;
                                    var2 = var2.name;
                                    var0 = var3.bind(var4)(var2);
                                case 90:
                                    _fun62205_ip = 120;
                                    continue _fun62205;
                                case 92:
                                    var3 = _closure1_slot7;
                                    var2 = var3.getApplication;
                                    var1 = _closure2_slot2;
                                    var1 = var1.application_id;
                                    var0 = var2.bind(var3)(var1);
                                case 120:
                                    return var0;
                            }
                        };
                        var19 = var4.bind(var6)(var2, var0);
                        var0 = 50;
                        var0 = var5[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.useCanWatchStream;
                        var2 = var0.bind(var1)(var14);
                        var1 = _closure1_slot3;
                        var0 = 1;
                        var1 = var1.bind(var3)(var2, var0);
                        var0 = 0;
                        var24 = var1[var0];
                        var2 = _closure1_slot1;
                        var0 = 34;
                        var1 = var5[var0];
                        var4 = var2.bind(var3)(var1);
                        var1 = 35;
                        var1 = var5[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.USER_PROFILE_LIVE_ACTIVITY_CARD;
                        var1 = var4.bind(var3)(var1);
                        var4 = var1.analyticsLocations;
                        var1 = 36;
                        var1 = var5[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = 'live';
                        var1.display = var5;
                        var8 = null;
                        var6 = var8 == var14;
                        var5 = undefined;
                        if (var6) {
                            _fun62199_ip = 381;
                            continue _fun62199
                        }
                    case 376:
                        var5 = var14.id;
                    case 381:
                        var1.voiceChannelId = var5;
                        var1.user = var21;
                        var1.stream = var25;
                        var1.analyticsLocations = var4;
                        var12 = var2.bind(var3)(var1);
                        _closure2_slot4 = var12;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 37;
                        var1 = var7[var1];
                        var2 = var5.bind(var3)(var1);
                        var1 = {};
                        var6 = var21.id;
                        var1.userId = var6;
                        var1.onAction = var12;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure1_slot19;
                        var1 = _closure1_slot0;
                        var0 = var7[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.AnalyticsLocationProvider;
                        var0 = {};
                        var0.value = var4;
                        var6 = _closure1_slot20;
                        var4 = 38;
                        var4 = var7[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var11 = var17.card;
                        var7 = new Array(2);
                        var7[0] = var11;
                        var7[1] = var10;
                        var4.style = var7;
                        if (!(var8 == var22)) {
                            _fun62199_ip = 580;
                            continue _fun62199
                        }
                    case 523:
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var7 = 20;
                        var10 = var16[var7];
                        var10 = var15.bind(var3)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var7 = var16[var7];
                        var7 = var15.bind(var3)(var7);
                        var7 = var7.t;
                        var7 = var7["Jpkr/q"];
                        var7 = var10.bind(var11)(var7);
                        _fun62199_ip = 647;
                        continue _fun62199;
                    case 580:
                        var11 = _closure1_slot0;
                        var26 = _closure1_slot2;
                        var10 = 20;
                        var15 = var26[var10];
                        var15 = var11.bind(var3)(var15);
                        var16 = var15.intl;
                        var15 = var16.formatToPlainString;
                        var10 = var26[var10];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.t;
                        var11 = var10["4CQq9Q"];
                        var10 = {};
                        var22 = var22.name;
                        var10.name = var22;
                        var7 = var15.bind(var16)(var11, var10);
                    case 647:
                        var4.title = var7;
                        var7 = var17.cardTitle;
                        var4.titleStyle = var7;
                        var11 = _closure1_slot19;
                        var10 = _closure1_slot6;
                        var7 = {};
                        var15 = var17.liveIndicator;
                        var7.style = var15;
                        var27 = _closure1_slot19;
                        var16 = _closure1_slot0;
                        var26 = _closure1_slot2;
                        var15 = 15;
                        var15 = var26[var15];
                        var15 = var16.bind(var3)(var15);
                        var22 = var15.Text;
                        var15 = {
                            'variant': 'eyebrow',
                            'color': 'always-white'
                        };
                        var28 = var17.liveIndicatorText;
                        var15.style = var28;
                        var28 = 20;
                        var29 = var26[var28];
                        var29 = var16.bind(var3)(var29);
                        var30 = var29.intl;
                        var29 = var30.string;
                        var28 = var26[var28];
                        var28 = var16.bind(var3)(var28);
                        var28 = var28.t;
                        var28 = var28.dI3q4h;
                        var28 = var29.bind(var30)(var28);
                        var15.children = var28;
                        var15 = var27.bind(var3)(var22, var15);
                        var7.children = var15;
                        var7 = var11.bind(var3)(var10, var7);
                        var4.titleIcon = var7;
                        var11 = _closure1_slot19;
                        var10 = _closure1_slot6;
                        var7 = {};
                        var15 = var17.streamPreview;
                        var7.style = var15;
                        var22 = _closure1_slot19;
                        var15 = 51;
                        var15 = var26[var15];
                        var15 = var16.bind(var3)(var15);
                        var16 = var15.VoicePanelStreamPreview;
                        var15 = {};
                        var15.mode = var3;
                        var15.stream = var25;
                        var24 = !var24;
                        var15.disabled = var24;
                        var23 = function() { // Original name: onPress, environment: var23
                            var2 = _closure2_slot4;
                            var1 = {};
                            var0 = 'PRESS_IMAGE';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var5 = 52;
                            var5 = var3[var5];
                            var7 = var2.bind(var0)(var5);
                            var6 = var7.selectVoiceChannel;
                            var5 = _closure2_slot1;
                            var4 = var5.channelId;
                            var4 = var6.bind(var7)(var4);
                            var4 = _closure1_slot0;
                            var1 = 53;
                            var1 = var3[var1];
                            var4 = var4.bind(var0)(var1);
                            var1 = var4.watchStreamAndTransitionToStream;
                            var1 = var1.bind(var4)(var5);
                            var1 = 54;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                        };
                        var15.onPress = var23;
                        var15 = var22.bind(var3)(var16, var15);
                        var7.children = var15;
                        var10 = var11.bind(var3)(var10, var7);
                        var7 = new Array(4);
                        var7[0] = var10;
                        var10 = var8 != var20;
                        if (!var10) {
                            _fun62199_ip = 932;
                            continue _fun62199
                        }
                    case 907:
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var11 = 30;
                        var11 = var16[var11];
                        var11 = var15.bind(var3)(var11);
                        var10 = var11.bind(var3)(var20);
                    case 932:
                        if (!var10) {
                            _fun62199_ip = 969;
                            continue _fun62199
                        }
                    case 935:
                        var16 = _closure1_slot19;
                        var15 = _closure1_slot25;
                        var11 = {};
                        var11.user = var21;
                        var11.activity = var20;
                        var11.application = var19;
                        var11.onAction = var12;
                        var10 = var16.bind(var3)(var15, var11);
                    case 969:
                        var7[1] = var10;
                        var10 = var8 != var18;
                        if (!var10) {
                            _fun62199_ip = 984;
                            continue _fun62199
                        }
                    case 980:
                        var10 = var8 != var14;
                    case 984:
                        if (!var10) {
                            _fun62199_ip = 1042;
                            continue _fun62199
                        }
                    case 987:
                        var16 = _closure1_slot19;
                        var15 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var11 = 42;
                        var11 = var19[var11];
                        var15 = var15.bind(var3)(var11);
                        var11 = {};
                        var11.guild = var18;
                        var11.channel = var14;
                        var11.onAction = var12;
                        var17 = var17.voiceChannelDivider;
                        var11.style = var17;
                        var10 = var16.bind(var3)(var15, var11);
                    case 1042:
                        var7[2] = var10;
                        var8 = var8 != var14;
                        if (!var8) {
                            _fun62199_ip = 1105;
                            continue _fun62199
                        }
                    case 1053:
                        var11 = _closure1_slot19;
                        var10 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var9 = 44;
                        var9 = var15[var9];
                        var9 = var10.bind(var3)(var9);
                        var10 = var9.VoiceChannelButtons;
                        var9 = {};
                        var9.channel = var14;
                        var9.isInChannel = var13;
                        var9.onAction = var12;
                        var8 = var11.bind(var3)(var10, var9);
                    case 1105:
                        var7[3] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot27 = var0;
            var0 = function(arg0) { // Original name: VoiceCallActivityCard, environment: var1
                _fun62207: for (var _fun62207_ip = 0;;) switch (_fun62207_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.user;
                        var10 = var0.channel;
                        var _closure2_slot0 = var10;
                        var9 = var0.isInChannel;
                        var6 = var0.style;
                        var0 = _closure1_slot22;
                        var3 = undefined;
                        var29 = var0.bind(var3)();
                        var1 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 55;
                        var0 = var4[var0];
                        var0 = var1.bind(var3)(var0);
                        var14 = var0.bind(var3)(var10);
                        var0 = 56;
                        var0 = var4[var0];
                        var0 = var1.bind(var3)(var0);
                        var25 = var0.bind(var3)(var10);
                        var2 = _closure1_slot0;
                        var0 = 33;
                        var8 = var4[var0];
                        var13 = var2.bind(var3)(var8);
                        var12 = var13.useStateFromStores;
                        var8 = _closure1_slot9;
                        var11 = new Array(1);
                        var11[0] = var8;
                        var8 = function() { // Environment: var20
                            var2 = _closure1_slot9;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot0;
                            var0 = var0.guild_id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var27 = var12.bind(var13)(var11, var8);
                        var _closure2_slot1 = var27;
                        var0 = var4[var0];
                        var11 = var2.bind(var3)(var0);
                        var8 = var11.useStateFromStores;
                        var0 = _closure1_slot10;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var0 = function() { // Environment: var20
                            _fun62209: for (var _fun62209_ip = 0;;) switch (_fun62209_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var0 = var2.isPrivate;
                                    var0 = var0.bind(var2)();
                                    if (var0) {
                                        _fun62209_ip = 53;
                                        continue _fun62209
                                    }
                                case 20:
                                    var4 = _closure1_slot10;
                                    var3 = var4.can;
                                    var2 = _closure1_slot16;
                                    var2 = var2.CONNECT;
                                    var1 = _closure2_slot0;
                                    var0 = var3.bind(var4)(var2, var1);
                                case 53:
                                    return var0;
                            }
                        };
                        var15 = var8.bind(var11)(var2, var0);
                        var0 = 34;
                        var0 = var4[var0];
                        var2 = var1.bind(var3)(var0);
                        var0 = 35;
                        var0 = var4[var0];
                        var0 = var1.bind(var3)(var0);
                        var0 = var0.USER_PROFILE_VOICE_ACTIVITY_CARD;
                        var0 = var2.bind(var3)(var0);
                        var8 = var0.analyticsLocations;
                        var0 = var0.newestAnalyticsLocation;
                        var _closure2_slot2 = var0;
                        var0 = 36;
                        var0 = var4[var0];
                        var2 = var1.bind(var3)(var0);
                        var0 = {};
                        var11 = 'voice';
                        var0.display = var11;
                        var11 = {};
                        var12 = 'VOICE';
                        var11.type = var12;
                        var0.activity = var11;
                        var11 = var10.id;
                        var0.voiceChannelId = var11;
                        var0.user = var7;
                        var0.analyticsLocations = var8;
                        var8 = var2.bind(var3)(var0);
                        var _closure2_slot3 = var8;
                        var0 = 37;
                        var0 = var4[var0];
                        var2 = var1.bind(var3)(var0);
                        var0 = {};
                        var7 = var7.id;
                        var0.userId = var7;
                        var0.onAction = var8;
                        var0 = var2.bind(var3)(var0);
                        var2 = _closure1_slot20;
                        var0 = 38;
                        var0 = var4[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var7 = var29.card;
                        var4 = new Array(2);
                        var4[0] = var7;
                        var4[1] = var6;
                        var0.style = var4;
                        var4 = var10.isDM;
                        var4 = var4.bind(var10)();
                        if (var4) {
                            _fun62207_ip = 468;
                            continue _fun62207
                        }
                    case 372:
                        var4 = var10.isGroupDM;
                        var4 = var4.bind(var10)();
                        if (var4) {
                            _fun62207_ip = 468;
                            continue _fun62207
                        }
                    case 385:
                        var4 = var10.isGuildStageVoice;
                        var4 = var4.bind(var10)();
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var6 = 20;
                        var7 = var13[var6];
                        var7 = var12.bind(var3)(var7);
                        var11 = var7.intl;
                        var7 = var11.string;
                        var6 = var13[var6];
                        var6 = var12.bind(var3)(var6);
                        var6 = var6.t;
                        if (var4) {
                            _fun62207_ip = 455;
                            continue _fun62207
                        }
                    case 442:
                        var4 = var6.msxteM;
                        var4 = var7.bind(var11)(var4);
                        _fun62207_ip = 466;
                        continue _fun62207;
                    case 455:
                        var6 = var6.QygGCN;
                        var4 = var7.bind(var11)(var6);
                    case 466:
                        _fun62207_ip = 523;
                        continue _fun62207;
                    case 468:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var6 = 20;
                        var7 = var13[var6];
                        var7 = var12.bind(var3)(var7);
                        var11 = var7.intl;
                        var7 = var11.string;
                        var6 = var13[var6];
                        var6 = var12.bind(var3)(var6);
                        var6 = var6.t;
                        var6 = var6["9FaEzi"];
                        var4 = var7.bind(var11)(var6);
                    case 523:
                        var0.title = var4;
                        var4 = var29.cardTitle;
                        var0.titleStyle = var4;
                        var7 = _closure1_slot20;
                        var6 = _closure1_slot6;
                        var4 = {};
                        var11 = var29.body;
                        var4.style = var11;
                        var13 = _closure1_slot19;
                        var12 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var11 = 57;
                        var11 = var16[var11];
                        var12 = var12.bind(var3)(var11);
                        var11 = {};
                        var11.users = var14;
                        var16 = null;
                        var17 = var16 == var27;
                        var14 = undefined;
                        if (var17) {
                            _fun62207_ip = 604;
                            continue _fun62207
                        }
                    case 599:
                        var14 = var27.id;
                    case 604:
                        var11.guildId = var14;
                        var12 = var13.bind(var3)(var12, var11);
                        var11 = new Array(2);
                        var11[0] = var12;
                        var14 = _closure1_slot20;
                        var13 = _closure1_slot6;
                        var12 = {};
                        var17 = var29.voiceCallContent;
                        var12.style = var17;
                        if (var15) {
                            _fun62207_ip = 794;
                            continue _fun62207
                        }
                    case 648:
                        var18 = _closure1_slot20;
                        var17 = _closure1_slot0;
                        var28 = _closure1_slot2;
                        var15 = 15;
                        var15 = var28[var15];
                        var15 = var17.bind(var3)(var15);
                        var17 = var15.Text;
                        var15 = {
                            'variant': 'text-md/semibold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var22 = _closure1_slot19;
                        var21 = _closure1_slot6;
                        var19 = {};
                        var23 = var29.voiceCallNameIconWrapper;
                        var19.style = var23;
                        var26 = _closure1_slot19;
                        var24 = _closure1_slot1;
                        var23 = 58;
                        var23 = var28[var23];
                        var24 = var24.bind(var3)(var23);
                        var23 = {
                            'channel': null,
                            'size': 'sm',
                            'color': 'mobile-text-heading-primary'
                        };
                        var23.channel = var10;
                        var23 = var26.bind(var3)(var24, var23);
                        var19.children = var23;
                        var21 = var22.bind(var3)(var21, var19);
                        var19 = new Array(2);
                        var19[0] = var21;
                        var19[1] = var25;
                        var15.children = var19;
                        var17 = var18.bind(var3)(var17, var15);
                        _fun62207_ip = 1065;
                        continue _fun62207;
                    case 794:
                        var19 = _closure1_slot19;
                        var22 = _closure1_slot0;
                        var32 = _closure1_slot2;
                        var15 = 59;
                        var15 = var32[var15];
                        var15 = var22.bind(var3)(var15);
                        var18 = var15.PressableOpacity;
                        var15 = {};
                        var21 = 'button';
                        var15.accessibilityRole = var21;
                        var30 = _closure1_slot1;
                        var21 = 60;
                        var21 = var32[var21];
                        var23 = var30.bind(var3)(var21);
                        var21 = {};
                        var21.channel = var10;
                        var21 = var23.bind(var3)(var21);
                        var15.accessibilityLabel = var21;
                        var21 = 20;
                        var23 = var32[var21];
                        var23 = var22.bind(var3)(var23);
                        var24 = var23.intl;
                        var23 = var24.string;
                        var21 = var32[var21];
                        var21 = var22.bind(var3)(var21);
                        var21 = var21.t;
                        var21 = var21["9C444m"];
                        var21 = var23.bind(var24)(var21);
                        var15.accessibilityHint = var21;
                        var21 = function() { // Original name: onPress, environment: var20
                            var3 = _closure2_slot3;
                            var2 = {};
                            var0 = 'OPEN_VOICE_CHANNEL';
                            var2.action = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 54;
                            var3 = var4[var3];
                            var6 = var5.bind(var0)(var3);
                            var3 = var6.hideActionSheet;
                            var3 = var3.bind(var6)();
                            var3 = 61;
                            var3 = var4[var3];
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.popAll;
                            var3 = var3.bind(var5)();
                            var3 = _closure1_slot0;
                            var2 = 62;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.openGuildVoiceModal;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var15.onPress = var21;
                        var23 = _closure1_slot20;
                        var21 = 15;
                        var21 = var32[var21];
                        var21 = var22.bind(var3)(var21);
                        var22 = var21.Text;
                        var21 = {
                            'variant': 'text-md/semibold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var28 = _closure1_slot19;
                        var26 = _closure1_slot6;
                        var24 = {};
                        var29 = var29.voiceCallNameIconWrapper;
                        var24.style = var29;
                        var31 = _closure1_slot19;
                        var29 = 58;
                        var29 = var32[var29];
                        var30 = var30.bind(var3)(var29);
                        var29 = {
                            'channel': null,
                            'size': 'sm',
                            'color': 'mobile-text-heading-primary'
                        };
                        var29.channel = var10;
                        var29 = var31.bind(var3)(var30, var29);
                        var24.children = var29;
                        var26 = var28.bind(var3)(var26, var24);
                        var24 = new Array(2);
                        var24[0] = var26;
                        var24[1] = var25;
                        var21.children = var24;
                        var21 = var23.bind(var3)(var22, var21);
                        var15.children = var21;
                        var17 = var19.bind(var3)(var18, var15);
                    case 1065:
                        var15 = new Array(2);
                        var15[0] = var17;
                        var17 = var16 == var27;
                        var16 = null;
                        if (var17) {
                            _fun62207_ip = 1357;
                            continue _fun62207
                        }
                    case 1085:
                        var19 = _closure1_slot19;
                        var24 = _closure1_slot0;
                        var28 = _closure1_slot2;
                        var17 = 59;
                        var17 = var28[var17];
                        var17 = var24.bind(var3)(var17);
                        var18 = var17.PressableOpacity;
                        var17 = {};
                        var21 = 'button';
                        var17.accessibilityRole = var21;
                        var23 = 20;
                        var21 = var28[var23];
                        var21 = var24.bind(var3)(var21);
                        var25 = var21.intl;
                        var22 = var25.string;
                        var21 = var28[var23];
                        var21 = var24.bind(var3)(var21);
                        var21 = var21.t;
                        var21 = var21.KLOhbO;
                        var21 = var22.bind(var25)(var21);
                        var17.accessibilityHint = var21;
                        var21 = var28[var23];
                        var21 = var24.bind(var3)(var21);
                        var26 = var21.intl;
                        var25 = var26.formatToPlainString;
                        var21 = var28[var23];
                        var21 = var24.bind(var3)(var21);
                        var21 = var21.t;
                        var22 = var21["hq/Qze"];
                        var21 = {};
                        var29 = var27.name;
                        var21.guildName = var29;
                        var21 = var25.bind(var26)(var22, var21);
                        var17.accessibilityLabel = var21;
                        var20 = function() { // Original name: onPress, environment: var20
                            var3 = _closure2_slot3;
                            var1 = {};
                            var0 = 'OPEN_VOICE_GUILD';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 63;
                            var4 = var3[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.transitionToGuild;
                            var2 = _closure2_slot1;
                            var2 = var2.id;
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure1_slot1;
                            var1 = 64;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.bind(var0)();
                            var1 = 54;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                        };
                        var17.onPress = var20;
                        var22 = _closure1_slot19;
                        var20 = 15;
                        var20 = var28[var20];
                        var20 = var24.bind(var3)(var20);
                        var21 = var20.Text;
                        var20 = {};
                        var25 = 'text-xs/medium';
                        var20.variant = var25;
                        var25 = var28[var23];
                        var25 = var24.bind(var3)(var25);
                        var26 = var25.intl;
                        var25 = var26.format;
                        var23 = var28[var23];
                        var23 = var24.bind(var3)(var23);
                        var23 = var23.t;
                        var24 = var23["hq/Qze"];
                        var23 = {};
                        var27 = var27.name;
                        var23.guildName = var27;
                        var23 = var25.bind(var26)(var24, var23);
                        var20.children = var23;
                        var20 = var22.bind(var3)(var21, var20);
                        var17.children = var20;
                        var16 = var19.bind(var3)(var18, var17);
                    case 1357:
                        var15[1] = var16;
                        var12.children = var15;
                        var12 = var14.bind(var3)(var13, var12);
                        var11[1] = var12;
                        var4.children = var11;
                        var6 = var7.bind(var3)(var6, var4);
                        var4 = new Array(2);
                        var4[0] = var6;
                        var7 = _closure1_slot19;
                        var6 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 44;
                        var5 = var11[var5];
                        var5 = var6.bind(var3)(var5);
                        var6 = var5.VoiceChannelButtons;
                        var5 = {};
                        var5.channel = var10;
                        var5.isInChannel = var9;
                        var5.onAction = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot28 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var13 = 0;
            var3 = var5[var13];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var14 = 1;
            var6 = var5[var14];
            var3 = arg3;
            var3 = var3.bind(var0)(var6);
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.TouchableOpacity;
            var _closure1_slot4 = var6;
            var6 = var3.TouchableWithoutFeedback;
            var _closure1_slot5 = var6;
            var3 = var3.View;
            var _closure1_slot6 = var3;
            var3 = 3;
            var3 = var5[var3];
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
            var3 = var10.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot11 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot12 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot13 = var3;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.ActivityTypes;
            var _closure1_slot14 = var6;
            var6 = var3.AnalyticEvents;
            var _closure1_slot15 = var6;
            var6 = var3.Permissions;
            var _closure1_slot16 = var6;
            var6 = var3.PlatformTypes;
            var _closure1_slot17 = var6;
            var3 = var3.StatusTypes;
            var _closure1_slot18 = var3;
            var3 = 11;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot19 = var6;
            var6 = var3.jsxs;
            var _closure1_slot20 = var6;
            var3 = var3.Fragment;
            var _closure1_slot21 = var3;
            var12 = 12;
            var3 = var5[var12];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {};
            var8.gap = var12;
            var3.card = var8;
            var8 = {};
            var8.marginBottom = var13;
            var3.cardTitle = var8;
            var8 = {};
            var9 = 13;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.TEXT_SUBTLE;
            var8.tintColor = var11;
            var3.cardTitleIcon = var8;
            var11 = 16;
            var8 = {
                'flexDirection': 'row',
                'alignItems': 'center',
                'gap': 16
            };
            var3.body = var8;
            var8 = {};
            var8.flex = var14;
            var3.content = var8;
            var8 = {};
            var14 = 'relative';
            var8.position = var14;
            var3.imageContainer = var8;
            var8 = {
                'width': 60,
                'maxHeight': 60,
                'aspectRatio': '1 / 1'
            };
            var3.imageAspectRatio = var8;
            var8 = {
                'width': 60,
                'maxHeight': 100,
                'aspectRatio': '2 / 3'
            };
            var3.crunchyrollImageAspectRatio = var8;
            var8 = {
                'borderRadius': null,
                'width': '100%',
                'height': '100%'
            };
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.xs;
            var8.borderRadius = var14;
            var3.largeImage = var8;
            var8 = {
                'borderRadius': 16,
                'position': 'absolute',
                'right': 4294967292,
                'bottom': 4294967292
            };
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_BASE_LOW;
            var8.backgroundColor = var14;
            var3.smallImageBackground = var8;
            var8 = {
                'width': 24,
                'height': 24,
                'borderRadius': 12
            };
            var3.smallImage = var8;
            var8 = {
                'marginTop': 4,
                'flexDirection': 'row',
                'flexWrap': 'wrap',
                'columnGap': 8,
                'rowGap': 0
            };
            var3.badges = var8;
            var8 = {};
            var8.marginTop = var11;
            var3.timebar = var8;
            var8 = {
                'borderTopWidth': 1,
                'borderTopColor': null,
                'paddingTop': 12
            };
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BORDER_SUBTLE;
            var8.borderTopColor = var14;
            var3.voiceChannelDivider = var8;
            var8 = {
                'flexDirection': 'column',
                'gap': 8
            };
            var3.customButtons = var8;
            var8 = {
                'aspectRatio': 1.7777777777777777,
                'borderRadius': null,
                'overflow': 'hidden'
            };
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.xs;
            var8.borderRadius = var14;
            var3.streamPreview = var8;
            var8 = {
                'height': 16,
                'paddingHorizontal': 6
            };
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_FEEDBACK_CRITICAL;
            var8.backgroundColor = var14;
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.sm;
            var8.borderRadius = var14;
            var3.liveIndicator = var8;
            var8 = {};
            var14 = 'uppercase';
            var8.textTransform = var14;
            var3.liveIndicatorText = var8;
            var8 = {};
            var8.padding = var13;
            var3.voiceActivityCard = var8;
            var8 = {
                'padding': 0,
                'marginBottom': 4294967280
            };
            var3.voiceSettings = var8;
            var8 = {
                'borderTopWidth': 1,
                'borderTopColor': null,
                'paddingTop': 16,
                'marginTop': 4,
                'marginHorizontal': 4294967268,
                'paddingHorizontal': 28
            };
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BORDER_SUBTLE;
            var8.borderTopColor = var13;
            var3.voiceSettingsDivider = var8;
            var8 = {
                'flex': 1,
                'gap': 4
            };
            var3.voiceCallContent = var8;
            var8 = {
                'width': 22,
                'height': null,
                'justifyContent': 'center'
            };
            var13 = 14;
            var13 = var5[var13];
            var14 = var4.bind(var0)(var13);
            var13 = var14.isAndroid;
            var13 = var13.bind(var14)();
            if (!var13) {
                _fun62184_ip = 1025;
                continue _fun62184
            }
        case 1022:
            var11 = var12;
        case 1025:
            var8.height = var11;
            var3.voiceCallNameIconWrapper = var8;
            var8 = {};
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.radii;
            var9 = var9.xl;
            var8.borderRadius = var9;
            var3.guildIcon = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot22 = var3;
            var3 = 69;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/user_profile/native/UserProfileActivity.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: UserProfileActivity, environment: var1
                _fun62212: for (var _fun62212_ip = 0;;) switch (_fun62212_ip) {
                    case 0:
                        var0 = arg0;
                        var10 = var0.user;
                        var _closure2_slot0 = var10;
                        var9 = var0.currentUser;
                        var _closure2_slot1 = var9;
                        var2 = var0.guildId;
                        var _closure2_slot2 = var2;
                        var12 = var0.style;
                        var _closure2_slot3 = var12;
                        var0 = _closure1_slot22;
                        var3 = undefined;
                        var8 = var0.bind(var3)();
                        var _closure2_slot4 = var8;
                        var1 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var0 = 65;
                        var0 = var13[var0];
                        var5 = var1.bind(var3)(var0);
                        var0 = var10.id;
                        var0 = var5.bind(var3)(var0);
                        var5 = var0.live;
                        var19 = var0.stream;
                        var _closure2_slot5 = var19;
                        var0 = 66;
                        var0 = var13[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var6 = var10.id;
                        var0.userId = var6;
                        var0.guildId = var2;
                        var0 = var1.bind(var3)(var0);
                        var7 = var0.voiceChannel;
                        var _closure2_slot6 = var7;
                        var18 = var0.voiceActivity;
                        var _closure2_slot7 = var18;
                        var2 = _closure1_slot0;
                        var0 = 33;
                        var1 = var13[var0];
                        var15 = var2.bind(var3)(var1);
                        var14 = var15.useStateFromStores;
                        var1 = _closure1_slot13;
                        var6 = new Array(1);
                        var6[0] = var1;
                        var1 = function() { // Environment: var11
                            _fun62213: for (var _fun62213_ip = 0;;) switch (_fun62213_ip) {
                                case 0:
                                    var0 = _closure2_slot6;
                                    var4 = null;
                                    var0 = var4 != var0;
                                    if (!var0) {
                                        _fun62213_ip = 64;
                                        continue _fun62213
                                    }
                                case 16:
                                    var3 = _closure1_slot13;
                                    var2 = var3.getCurrentClientVoiceChannelId;
                                    var5 = _closure2_slot2;
                                    var5 = var4 != var5;
                                    var4 = null;
                                    if (!var5) {
                                        _fun62213_ip = 46;
                                        continue _fun62213
                                    }
                                case 42:
                                    var4 = _closure2_slot2;
                                case 46:
                                    var2 = var2.bind(var3)(var4);
                                    var1 = _closure2_slot6;
                                    var1 = var1.id;
                                    var0 = var2 === var1;
                                case 64:
                                    return var0;
                            }
                        };
                        var6 = var14.bind(var15)(var6, var1);
                        var _closure2_slot8 = var6;
                        var14 = var10.id;
                        var1 = var9.id;
                        var1 = var14 === var1;
                        var _closure2_slot9 = var1;
                        var0 = var13[var0];
                        var15 = var2.bind(var3)(var0);
                        var14 = var15.useStateFromStores;
                        var0 = _closure1_slot12;
                        var1 = new Array(2);
                        var1[0] = var0;
                        var0 = _closure1_slot11;
                        var1[1] = var0;
                        var0 = function() { // Environment: var11
                            _fun62214: for (var _fun62214_ip = 0;;) switch (_fun62214_ip) {
                                case 0:
                                    var2 = _closure2_slot9;
                                    if (var2) {
                                        _fun62214_ip = 39;
                                        continue _fun62214
                                    }
                                case 13:
                                    var3 = _closure1_slot11;
                                    var2 = var3.getStatus;
                                    var0 = _closure2_slot0;
                                    var0 = var0.id;
                                    var2 = var2.bind(var3)(var0);
                                    _fun62214_ip = 53;
                                    continue _fun62214;
                                case 39:
                                    var3 = _closure1_slot12;
                                    var0 = var3.getStatus;
                                    var2 = var0.bind(var3)();
                                case 53:
                                    var0 = _closure1_slot18;
                                    var0 = var0.OFFLINE;
                                    var0 = var2 === var0;
                                    if (var0) {
                                        _fun62214_ip = 84;
                                        continue _fun62214
                                    }
                                case 70:
                                    var1 = _closure1_slot18;
                                    var1 = var1.INVISIBLE;
                                    var0 = var2 === var1;
                                case 84:
                                    return var0;
                            }
                        };
                        var1 = var14.bind(var15)(var1, var0);
                        var0 = 67;
                        var0 = var13[var0];
                        var13 = var2.bind(var3)(var0);
                        var2 = var13.useHangStatusActivity;
                        var0 = var10.id;
                        var0 = var2.bind(var13)(var0);
                        var _closure2_slot10 = var0;
                        if (!var1) {
                            _fun62212_ip = 315;
                            continue _fun62212
                        }
                    case 303:
                        var0 = null;
                        if (!(var0 != var7)) {
                            _fun62212_ip = 315;
                            continue _fun62212
                        }
                    case 309:
                        if (var6) {
                            _fun62212_ip = 696;
                            continue _fun62212
                        }
                    case 315:
                        var0 = null;
                        if (var1) {
                            _fun62212_ip = 694;
                            continue _fun62212
                        }
                    case 323:
                        var14 = var5;
                        if (!(var0 != var18)) {
                            _fun62212_ip = 345;
                            continue _fun62212
                        }
                    case 330:
                        var2 = var5.filter;
                        var1 = function(arg0) { // Environment: var11
                            var1 = _closure2_slot7;
                            var0 = arg0;
                            var0 = var0 !== var1;
                            return var0;
                        };
                        var14 = var2.bind(var5)(var1);
                    case 345:
                        var20 = function(arg0) { // Original name: renderVoiceActivityCard, environment: var11
                            _fun62216: for (var _fun62216_ip = 0;;) switch (_fun62216_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = _closure2_slot5;
                                    var7 = null;
                                    if (!(var7 != var0)) {
                                        _fun62216_ip = 37;
                                        continue _fun62216
                                    }
                                case 16:
                                    var0 = _closure2_slot5;
                                    var3 = var0.channelId;
                                    var0 = var2.id;
                                    if (!(var3 !== var0)) {
                                        _fun62216_ip = 193;
                                        continue _fun62216
                                    }
                                case 37:
                                    var0 = _closure2_slot7;
                                    if (!(var7 == var0)) {
                                        _fun62216_ip = 111;
                                        continue _fun62216
                                    }
                                case 45:
                                    var0 = _closure2_slot10;
                                    if (!(var7 == var0)) {
                                        _fun62216_ip = 111;
                                        continue _fun62216
                                    }
                                case 53:
                                    var5 = _closure1_slot19;
                                    var4 = _closure1_slot28;
                                    var3 = {};
                                    var0 = _closure2_slot0;
                                    var3.user = var0;
                                    var3.channel = var2;
                                    var0 = _closure2_slot8;
                                    var3.isInChannel = var0;
                                    var0 = _closure2_slot4;
                                    var0 = var0.voiceActivityCard;
                                    var3.style = var0;
                                    var0 = undefined;
                                    var0 = var5.bind(var0)(var4, var3);
                                    _fun62216_ip = 191;
                                    continue _fun62216;
                                case 111:
                                    var5 = _closure1_slot19;
                                    var4 = _closure1_slot26;
                                    var3 = {};
                                    var6 = _closure2_slot0;
                                    var3.user = var6;
                                    var6 = _closure2_slot1;
                                    var3.currentUser = var6;
                                    var6 = _closure2_slot7;
                                    if (!(var7 == var6)) {
                                        _fun62216_ip = 155;
                                        continue _fun62216
                                    }
                                case 149:
                                    var6 = _closure2_slot10;
                                    _fun62216_ip = 159;
                                    continue _fun62216;
                                case 155:
                                    var6 = _closure2_slot7;
                                case 159:
                                    var3.activity = var6;
                                    var3.voiceChannel = var2;
                                    var2 = _closure2_slot4;
                                    var2 = var2.voiceActivityCard;
                                    var3.style = var2;
                                    var2 = undefined;
                                    var0 = var5.bind(var2)(var4, var3);
                                case 191:
                                    _fun62216_ip = 254;
                                    continue _fun62216;
                                case 193:
                                    var4 = _closure1_slot19;
                                    var3 = _closure1_slot27;
                                    var2 = {};
                                    var5 = _closure2_slot0;
                                    var2.user = var5;
                                    var5 = _closure2_slot5;
                                    var2.stream = var5;
                                    var5 = _closure2_slot7;
                                    var2.activity = var5;
                                    var1 = _closure2_slot4;
                                    var1 = var1.voiceActivityCard;
                                    var2.style = var1;
                                    var1 = undefined;
                                    var0 = var4.bind(var1)(var3, var2);
                                case 254:
                                    return var0;
                            }
                        };
                        var5 = _closure1_slot20;
                        var2 = _closure1_slot21;
                        var1 = {};
                        var13 = var0 != var7;
                        if (!var13) {
                            _fun62212_ip = 584;
                            continue _fun62212
                        }
                    case 370:
                        if (var6) {
                            _fun62212_ip = 441;
                            continue _fun62212
                        }
                    case 373:
                        var16 = _closure1_slot19;
                        var15 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var6 = 38;
                        var6 = var17[var6];
                        var15 = var15.bind(var3)(var6);
                        var6 = {};
                        var21 = var8.card;
                        var17 = new Array(2);
                        var17[0] = var21;
                        var17[1] = var12;
                        var6.style = var17;
                        var17 = var20.bind(var3)(var7);
                        var6.children = var17;
                        var6 = var16.bind(var3)(var15, var6);
                        _fun62212_ip = 581;
                        continue _fun62212;
                    case 441:
                        var17 = _closure1_slot20;
                        var22 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var15 = 38;
                        var15 = var24[var15];
                        var16 = var22.bind(var3)(var15);
                        var15 = {};
                        var23 = var8.card;
                        var21 = new Array(2);
                        var21[0] = var23;
                        var21[1] = var12;
                        var15.style = var21;
                        var21 = var20.bind(var3)(var7);
                        var20 = new Array(2);
                        var20[0] = var21;
                        var23 = _closure1_slot19;
                        var21 = 68;
                        var21 = var24[var21];
                        var22 = var22.bind(var3)(var21);
                        var21 = {};
                        var21.user = var10;
                        var21.currentUser = var9;
                        var21.channel = var7;
                        var25 = var8.voiceSettings;
                        var24 = new Array(2);
                        var24[0] = var25;
                        var25 = var8.voiceSettingsDivider;
                        var24[1] = var25;
                        var21.style = var24;
                        var21 = var23.bind(var3)(var22, var21);
                        var20[1] = var21;
                        var15.children = var20;
                        var6 = var17.bind(var3)(var16, var15);
                    case 581:
                        var13 = var6;
                    case 584:
                        var6 = new Array(3);
                        var6[0] = var13;
                        var13 = var0 != var19;
                        if (!var13) {
                            _fun62212_ip = 622;
                            continue _fun62212
                        }
                    case 599:
                        var16 = var19.channelId;
                        var17 = var0 == var7;
                        var15 = undefined;
                        if (var17) {
                            _fun62212_ip = 618;
                            continue _fun62212
                        }
                    case 613:
                        var15 = var7.id;
                    case 618:
                        var13 = var16 !== var15;
                    case 622:
                        if (!var13) {
                            _fun62212_ip = 659;
                            continue _fun62212
                        }
                    case 625:
                        var17 = _closure1_slot19;
                        var16 = _closure1_slot27;
                        var15 = {};
                        var15.user = var10;
                        var15.stream = var19;
                        var15.activity = var18;
                        var15.style = var12;
                        var13 = var17.bind(var3)(var16, var15);
                    case 659:
                        var6[1] = var13;
                        var13 = var14.map;
                        var11 = function(arg0, arg1) { // Environment: var11
                            _fun62217: for (var _fun62217_ip = 0;;) switch (_fun62217_ip) {
                                case 0:
                                    var0 = arg0;
                                    var4 = arg1;
                                    var3 = _closure1_slot19;
                                    var2 = _closure1_slot26;
                                    var1 = {};
                                    var6 = _closure2_slot0;
                                    var1.user = var6;
                                    var6 = _closure2_slot1;
                                    var1.currentUser = var6;
                                    var1.activity = var0;
                                    var5 = _closure2_slot3;
                                    var1.style = var5;
                                    var0 = var0.application_id;
                                    var5 = null;
                                    if (!(var5 != var0)) {
                                        _fun62217_ip = 67;
                                        continue _fun62217
                                    }
                                case 64:
                                    var4 = var0;
                                case 67:
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1, var4);
                                    return var0;
                            }
                        };
                        var11 = var13.bind(var14)(var11);
                        var6[2] = var11;
                        var1.children = var6;
                        var1 = var5.bind(var3)(var2, var1);
                        return var1;
                    case 694:
                        return var0;
                    case 696:
                        var2 = _closure1_slot19;
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var0 = 38;
                        var0 = var11[var0];
                        var1 = var5.bind(var3)(var0);
                        var0 = {};
                        var13 = var8.card;
                        var6 = new Array(2);
                        var6[0] = var13;
                        var6[1] = var12;
                        var0.style = var6;
                        var6 = _closure1_slot19;
                        var4 = 68;
                        var4 = var11[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var4.user = var10;
                        var4.currentUser = var9;
                        var4.channel = var7;
                        var9 = var8.voiceSettings;
                        var7 = new Array(2);
                        var7[0] = var9;
                        var8 = var8.voiceSettingsDivider;
                        var7[1] = var8;
                        var4.style = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3413, 1372, 1410, 3050, 3569, 5619, 3480, 660, 33, 1297, 671, 478, 3900, 5852, 7790, 3118, 5634, 1234, 7802, 4667, 1417, 7742, 7749, 7805, 3165, 7733, 7747, 5632, 7806, 7826, 566, 5688, 5541, 7830, 7832, 7701, 4045, 7812, 7833, 7835, 7800, 11874, 7801, 5698, 795, 11878, 11879, 5231, 11880, 4195, 7975, 3237, 7836, 4755, 11881, 7744, 4865, 7837, 4525, 7838, 5577, 7901, 11882, 11884, 11885, 11886, 2]);