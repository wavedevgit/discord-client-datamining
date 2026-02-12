// modules/user_profile/native/UserProfileActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68871: for (var _fun68871_ip = 0;;) switch (_fun68871_ip) {
        case 0:
            var4 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var5;
            var0 = function arg0() {
                _fun68872: for (var _fun68872_ip = 0;;) switch (_fun68872_ip) {
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
                            _fun68872_ip = 55;
                            continue _fun68872
                        }
                    case 45:
                        var0 = var1.trim;
                        var6 = var0.bind(var1)();
                    case 55:
                        var1 = var2 == var6;
                        var0 = null;
                        if (var1) {
                            _fun68872_ip = 135;
                            continue _fun68872
                        }
                    case 64:
                        var1 = '';
                        var0 = null;
                        if (!(var1 !== var6)) {
                            _fun68872_ip = 135;
                            continue _fun68872
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
            var0 = function arg0() {
                _fun68873: for (var _fun68873_ip = 0;;) switch (_fun68873_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.href;
                        var _closure2_slot0 = var3;
                        var1 = var0.children;
                        var2 = null;
                        var0 = var1;
                        if (!(var2 != var3)) {
                            _fun68873_ip = 73;
                            continue _fun68873
                        }
                    case 29:
                        var4 = _closure1_slot19;
                        var3 = _closure1_slot4;
                        var2 = {};
                        var6 = 'link';
                        var2.accessibilityRole = var6;
                        var5 = function() {
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
                    case 73:
                        return var0;
                }
            };
            var _closure1_slot24 = var0;
            var0 = function arg0() {
                _fun68875: for (var _fun68875_ip = 0;;) switch (_fun68875_ip) {
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
                            _fun68875_ip = 1122;
                            continue _fun68875
                        }
                    case 181:
                        var25 = null;
                        if (!(var25 != var21)) {
                            _fun68875_ip = 218;
                            continue _fun68875
                        }
                    case 187:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 19;
                        var4 = var7[var4];
                        var4 = var6.bind(var3)(var4);
                        var4 = var4.bind(var3)(var13);
                        if (var4) {
                            _fun68875_ip = 878;
                            continue _fun68875
                        }
                    case 218:
                        if (!(var25 == var21)) {
                            _fun68875_ip = 471;
                            continue _fun68875
                        }
                    case 225:
                        var12 = _closure1_slot19;
                        if (var8) {
                            _fun68875_ip = 406;
                            continue _fun68875
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
                            _fun68875_ip = 378;
                            continue _fun68875
                        }
                    case 370:
                        var17 = var18.BLACK;
                        _fun68875_ip = 384;
                        continue _fun68875;
                    case 378:
                        var17 = var18.WHITE;
                    case 384:
                        var7.color = var17;
                        var7 = var16.bind(var3)(var15, var7);
                        var4.children = var7;
                        var4 = var12.bind(var3)(var6, var4);
                        _fun68875_ip = 466;
                        continue _fun68875;
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
                        _fun68875_ip = 873;
                        continue _fun68875;
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
                            _fun68875_ip = 531;
                            continue _fun68875
                        }
                    case 523:
                        var16 = var14.imageAspectRatio;
                        _fun68875_ip = 537;
                        continue _fun68875;
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
                            _fun68875_ip = 576;
                            continue _fun68875
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
                            _fun68875_ip = 859;
                            continue _fun68875
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
                            _fun68875_ip = 750;
                            continue _fun68875
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
                        _fun68875_ip = 1119;
                        continue _fun68875;
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
                        var15 = function() {
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
                    case 1119:
                        var5 = var4;
                    case 1122:
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
                            _fun68875_ip = 1445;
                            continue _fun68875
                        }
                    case 1180:
                        if (!var8) {
                            _fun68875_ip = 1332;
                            continue _fun68875
                        }
                    case 1186:
                        var12 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var8 = 28;
                        var8 = var16[var8];
                        var8 = var12.bind(var3)(var8);
                        var8 = var8.bind(var3)(var13);
                        if (var8) {
                            _fun68875_ip = 1332;
                            continue _fun68875
                        }
                    case 1214:
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
                        _fun68875_ip = 1443;
                        continue _fun68875;
                    case 1332:
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
                            _fun68875_ip = 1418;
                            continue _fun68875
                        }
                    case 1399:
                        var21 = var13.details;
                        var22 = null;
                        if (!(var22 == var21)) {
                            _fun68875_ip = 1416;
                            continue _fun68875
                        }
                    case 1411:
                        var21 = var13.name;
                    case 1416:
                        _fun68875_ip = 1423;
                        continue _fun68875;
                    case 1418:
                        var21 = var13.name;
                    case 1423:
                        var18.children = var21;
                        var18 = var20.bind(var3)(var19, var18);
                        var8.children = var18;
                        var12 = var17.bind(var3)(var16, var8);
                    case 1443:
                        _fun68875_ip = 1537;
                        continue _fun68875;
                    case 1445:
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
                        var21 = function() {
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
                    case 1537:
                        var8 = new Array(4);
                        var8[0] = var12;
                        var11 = function() { // Environment: var11
                            _fun68878: for (var _fun68878_ip = 0;;) switch (_fun68878_ip) {
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
                                        _fun68878_ip = 270;
                                        continue _fun68878
                                    }
                                case 47:
                                    var2 = var0.details;
                                    var1 = _closure2_slot3;
                                    if (!var1) {
                                        _fun68878_ip = 139;
                                        continue _fun68878
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
                                        _fun68878_ip = 139;
                                        continue _fun68878
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
                                    _fun68878_ip = 201;
                                    continue _fun68878;
                                case 139:
                                    var3 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 28;
                                    var1 = var6[var1];
                                    var3 = var3.bind(var4)(var1);
                                    var1 = _closure2_slot1;
                                    var1 = var3.bind(var4)(var1);
                                    if (var1) {
                                        _fun68878_ip = 186;
                                        continue _fun68878
                                    }
                                case 171:
                                    var3 = _closure2_slot1;
                                    var6 = var3.state;
                                    var3 = null;
                                    var1 = var3 == var6;
                                case 186:
                                    var10 = var2;
                                    if (var1) {
                                        _fun68878_ip = 201;
                                        continue _fun68878
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
                                        _fun68878_ip = 296;
                                        continue _fun68878
                                    }
                                case 286:
                                    var0 = var1.trim;
                                    var9 = var0.bind(var1)();
                                case 296:
                                    var1 = var2 == var9;
                                    var0 = null;
                                    if (var1) {
                                        _fun68878_ip = 425;
                                        continue _fun68878
                                    }
                                case 305:
                                    var1 = '';
                                    var0 = null;
                                    if (!(var1 !== var9)) {
                                        _fun68878_ip = 425;
                                        continue _fun68878
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
                                    var8 = function() {
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
                                case 425:
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
                            _fun68875_ip = 2152;
                            continue _fun68875
                        }
                    case 1592:
                        var16 = var13.type;
                        var12 = _closure1_slot14;
                        var12 = var12.WATCHING;
                        var11 = null;
                        if (!(var16 !== var12)) {
                            _fun68875_ip = 2152;
                            continue _fun68875
                        }
                    case 1616:
                        var16 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var17 = 28;
                        var12 = var12[var17];
                        var12 = var16.bind(var3)(var12);
                        var12 = var12.bind(var3)(var13);
                        if (!var12) {
                            _fun68875_ip = 1690;
                            continue _fun68875
                        }
                    case 1644:
                        var16 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var12 = 30;
                        var12 = var18[var12];
                        var12 = var16.bind(var3)(var12);
                        var12 = var12.bind(var3)(var13);
                        if (var12) {
                            _fun68875_ip = 1690;
                            continue _fun68875
                        }
                    case 1672:
                        var12 = var13.party;
                        var12 = var15 != var12;
                        var11 = null;
                        if (var12) {
                            _fun68875_ip = 2152;
                            continue _fun68875
                        }
                    case 1690:
                        var16 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var12 = var12[var17];
                        var12 = var16.bind(var3)(var12);
                        var12 = var12.bind(var3)(var13);
                        if (var12) {
                            _fun68875_ip = 1819;
                            continue _fun68875
                        }
                    case 1715:
                        var17 = _closure1_slot19;
                        var16 = _closure1_slot24;
                        var12 = {};
                        var19 = var13.assets;
                        var20 = var15 == var19;
                        var18 = undefined;
                        if (var20) {
                            _fun68875_ip = 1746;
                            continue _fun68875
                        }
                    case 1740:
                        var18 = var19.large_url;
                    case 1746:
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
                            _fun68875_ip = 1794;
                            continue _fun68875
                        }
                    case 1788:
                        var21 = var22.large_text;
                    case 1794:
                        var18.children = var21;
                        var18 = var20.bind(var3)(var19, var18);
                        var12.children = var18;
                        var11 = var17.bind(var3)(var16, var12);
                        _fun68875_ip = 2152;
                        continue _fun68875;
                    case 1819:
                        var16 = var13.party;
                        var17 = var15 == var16;
                        var12 = undefined;
                        if (var17) {
                            _fun68875_ip = 1839;
                            continue _fun68875
                        }
                    case 1834:
                        var12 = var16.size;
                    case 1839:
                        var12 = var15 != var12;
                        if (!var12) {
                            _fun68875_ip = 1869;
                            continue _fun68875
                        }
                    case 1846:
                        var15 = var13.party;
                        var15 = var15.size;
                        var16 = var15.length;
                        var15 = 2;
                        var12 = var16 >= var15;
                    case 1869:
                        var17 = '';
                        if (!var12) {
                            _fun68875_ip = 2087;
                            continue _fun68875
                        }
                    case 1879:
                        var12 = var13.party;
                        var12 = var12.size;
                        var20 = 1;
                        var12 = var12[var20];
                        var21 = 0;
                        if (!(var21 !== var12)) {
                            _fun68875_ip = 2004;
                            continue _fun68875
                        }
                    case 1903:
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
                        _fun68875_ip = 2084;
                        continue _fun68875;
                    case 2004:
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
                    case 2084:
                        var17 = var12;
                    case 2087:
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
                    case 2152:
                        var8[2] = var11;
                        var9 = var9.bot;
                        var9 = !var9;
                        if (!var9) {
                            _fun68875_ip = 2215;
                            continue _fun68875
                        }
                    case 2168:
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
                    case 2215:
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
            var0 = function arg0() {
                _fun68880: for (var _fun68880_ip = 0;;) switch (_fun68880_ip) {
                    case 0:
                        var0 = arg0;
                        var17 = var0.user;
                        var _closure2_slot0 = var17;
                        var9 = var0.currentUser;
                        var23 = var0.activity;
                        var _closure2_slot1 = var23;
                        var22 = var0.voiceChannel;
                        var _closure2_slot2 = var22;
                        var19 = var0.style;
                        var4 = undefined;
                        var _closure2_slot5 = var4;
                        var0 = _closure1_slot22;
                        var24 = var0.bind(var4)();
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 32;
                        var0 = var6[var0];
                        var0 = var2.bind(var4)(var0);
                        var29 = var0.bind(var4)(var23);
                        var1 = _closure1_slot0;
                        var3 = 33;
                        var0 = var6[var3];
                        var7 = var1.bind(var4)(var0);
                        var5 = var7.useStateFromStores;
                        var0 = _closure1_slot13;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var20
                            _fun68881: for (var _fun68881_ip = 0;;) switch (_fun68881_ip) {
                                case 0:
                                    var2 = _closure1_slot13;
                                    var1 = var2.isInChannel;
                                    var4 = _closure2_slot2;
                                    var0 = null;
                                    var4 = var0 == var4;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun68881_ip = 40;
                                        continue _fun68881
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
                        var1 = var23.type;
                        var0 = _closure1_slot14;
                        var0 = var0.HANG_STATUS;
                        var16 = var1 === var0;
                        var _closure2_slot4 = var16;
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
                        var18 = null;
                        var7 = var18 == var22;
                        var6 = undefined;
                        if (var7) {
                            _fun68880_ip = 239;
                            continue _fun68880
                        }
                    case 234:
                        var6 = var22.id;
                    case 239:
                        var0.voiceChannelId = var6;
                        var0.user = var17;
                        var0.activity = var23;
                        var0.analyticsLocations = var5;
                        var13 = var2.bind(var4)(var0);
                        _closure2_slot5 = var13;
                        var8 = _closure1_slot19;
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var15 = 37;
                        var6 = var0[var15];
                        var6 = var2.bind(var4)(var6);
                        var7 = var6.WatchActivityButton;
                        var6 = {};
                        var6.activity = var23;
                        var6.onAction = var13;
                        var12 = var8.bind(var4)(var7, var6);
                        var8 = _closure1_slot19;
                        var6 = var0[var15];
                        var6 = var2.bind(var4)(var6);
                        var7 = var6.JoinActivityButton;
                        var6 = {};
                        var6.user = var17;
                        var6.currentUser = var9;
                        var6.activity = var23;
                        var6.application = var4;
                        var6.onAction = var13;
                        var11 = var8.bind(var4)(var7, var6);
                        var8 = _closure1_slot19;
                        var6 = var0[var15];
                        var6 = var2.bind(var4)(var6);
                        var7 = var6.PlayOnSpotifyButton;
                        var6 = {};
                        var6.activity = var23;
                        var6.onAction = var13;
                        var10 = var8.bind(var4)(var7, var6);
                        var7 = _closure1_slot1;
                        var6 = 38;
                        var6 = var0[var6];
                        var7 = var7.bind(var4)(var6);
                        var6 = {};
                        var8 = var17.id;
                        var6.userId = var8;
                        var6.onAction = var13;
                        var6 = var7.bind(var4)(var6);
                        var6 = var0[var3];
                        var25 = var2.bind(var4)(var6);
                        var8 = var25.useStateFromStores;
                        var6 = _closure1_slot9;
                        var7 = new Array(3);
                        var7[0] = var6;
                        var6 = _closure1_slot13;
                        var7[1] = var6;
                        var6 = _closure1_slot8;
                        var7[2] = var6;
                        var6 = function() { // Environment: var20
                            _fun68882: for (var _fun68882_ip = 0;;) switch (_fun68882_ip) {
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
                                        _fun68882_ip = 89;
                                        continue _fun68882
                                    }
                                case 40:
                                    var2 = _closure2_slot4;
                                    var6 = null;
                                    var1 = null;
                                    if (!var2) {
                                        _fun68882_ip = 87;
                                        continue _fun68882
                                    }
                                case 51:
                                    var5 = _closure1_slot9;
                                    var3 = var5.getGuild;
                                    var2 = _closure2_slot2;
                                    var6 = var6 == var2;
                                    var2 = undefined;
                                    if (var6) {
                                        _fun68882_ip = 82;
                                        continue _fun68882
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
                                        _fun68882_ip = 133;
                                        continue _fun68882
                                    }
                                case 123:
                                    var7 = _closure2_slot1;
                                    var1 = var7.session_id;
                                case 133:
                                    var1 = var5.bind(var6)(var2, var1);
                                    var2 = var3 == var1;
                                    var6 = undefined;
                                    if (var2) {
                                        _fun68882_ip = 153;
                                        continue _fun68882
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
                                        _fun68882_ip = 195;
                                        continue _fun68882
                                    }
                                case 185:
                                    var3 = var4.getGuildId;
                                    var0 = var3.bind(var4)();
                                case 195:
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var28 = var8.bind(var25)(var7, var6);
                        var0 = var0[var3];
                        var6 = var2.bind(var4)(var0);
                        var3 = var6.useStateFromStores;
                        var0 = _closure1_slot7;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var0 = function() { // Environment: var20
                            _fun68883: for (var _fun68883_ip = 0;;) switch (_fun68883_ip) {
                                case 0:
                                    var0 = _closure2_slot1;
                                    var2 = var0.application_id;
                                    var0 = null;
                                    if (!(var0 == var2)) {
                                        _fun68883_ip = 66;
                                        continue _fun68883
                                    }
                                case 19:
                                    var2 = _closure2_slot1;
                                    var2 = var2.name;
                                    var2 = var0 != var2;
                                    var0 = null;
                                    if (!var2) {
                                        _fun68883_ip = 64;
                                        continue _fun68883
                                    }
                                case 37:
                                    var4 = _closure1_slot7;
                                    var3 = var4.getApplicationByName;
                                    var2 = _closure2_slot1;
                                    var2 = var2.name;
                                    var0 = var3.bind(var4)(var2);
                                case 64:
                                    _fun68883_ip = 94;
                                    continue _fun68883;
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
                        var26 = var3.bind(var6)(var2, var0);
                        var3 = var23.type;
                        var0 = _closure1_slot14;
                        var2 = var0.CUSTOM_STATUS;
                        var0 = null;
                        if (!(var3 !== var2)) {
                            _fun68880_ip = 1526;
                            continue _fun68880
                        }
                    case 557:
                        var3 = var23.type;
                        var2 = _closure1_slot14;
                        var2 = var2.HANG_STATUS;
                        if (!(var3 === var2)) {
                            _fun68880_ip = 588;
                            continue _fun68880
                        }
                    case 576:
                        var2 = var18 == var22;
                        var0 = null;
                        if (var2) {
                            _fun68880_ip = 1526;
                            continue _fun68880
                        }
                    case 588:
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
                        var5 = 39;
                        var5 = var8[var5];
                        var6 = var6.bind(var4)(var5);
                        var5 = {};
                        var25 = var24.card;
                        var8 = new Array(2);
                        var8[0] = var25;
                        var8[1] = var19;
                        var5.style = var8;
                        var8 = var29.text;
                        var5.title = var8;
                        var8 = var24.cardTitle;
                        var5.titleStyle = var8;
                        var8 = var29.platformIcon;
                        var8 = var18 != var8;
                        if (!var8) {
                            _fun68880_ip = 835;
                            continue _fun68880
                        }
                    case 701:
                        var27 = _closure1_slot19;
                        var25 = _closure1_slot1;
                        var33 = _closure1_slot2;
                        var31 = 40;
                        var19 = var33[var31];
                        var25 = var25.bind(var4)(var19);
                        var19 = {};
                        var30 = var24.cardTitleIcon;
                        var19.style = var30;
                        var32 = _closure1_slot0;
                        var30 = 23;
                        var30 = var33[var30];
                        var32 = var32.bind(var4)(var30);
                        var30 = var32.makeSource;
                        var33 = var29.platformIcon;
                        var34 = var18 == var33;
                        var29 = undefined;
                        if (var34) {
                            _fun68880_ip = 780;
                            continue _fun68880
                        }
                    case 774:
                        var29 = var33.whitePNG;
                    case 780:
                        var29 = var30.bind(var32)(var29);
                        var19.source = var29;
                        var30 = _closure1_slot0;
                        var29 = _closure1_slot2;
                        var29 = var29[var31];
                        var29 = var30.bind(var4)(var29);
                        var29 = var29.IconSizes;
                        var29 = var29.SMALL_14;
                        var19.size = var29;
                        var29 = true;
                        var19.disableColor = var29;
                        var8 = var27.bind(var4)(var25, var19);
                    case 835:
                        var5.titleIcon = var8;
                        var25 = _closure1_slot19;
                        var19 = _closure1_slot25;
                        var8 = {};
                        var8.user = var17;
                        var8.activity = var23;
                        var8.application = var26;
                        var8.onAction = var13;
                        var19 = var25.bind(var4)(var19, var8);
                        var8 = new Array(4);
                        var8[0] = var19;
                        var25 = _closure1_slot1;
                        var26 = _closure1_slot2;
                        var19 = 41;
                        var19 = var26[var19];
                        var19 = var25.bind(var4)(var19);
                        var25 = var19.bind(var4)(var23);
                        var19 = null;
                        if (!var25) {
                            _fun68880_ip = 968;
                            continue _fun68880
                        }
                    case 912:
                        var25 = var23.timestamps;
                        var30 = var25.start;
                        var29 = var25.end;
                        var27 = _closure1_slot19;
                        var26 = _closure1_slot1;
                        var31 = _closure1_slot2;
                        var25 = 42;
                        var25 = var31[var25];
                        var26 = var26.bind(var4)(var25);
                        var25 = {};
                        var25.start = var30;
                        var25.end = var29;
                        var19 = var27.bind(var4)(var26, var25);
                    case 968:
                        var8[1] = var19;
                        var25 = var18 == var22;
                        var19 = null;
                        if (var25) {
                            _fun68880_ip = 1045;
                            continue _fun68880
                        }
                    case 981:
                        var25 = var18 == var28;
                        var19 = null;
                        if (var25) {
                            _fun68880_ip = 1045;
                            continue _fun68880
                        }
                    case 990:
                        var27 = _closure1_slot19;
                        var26 = _closure1_slot1;
                        var29 = _closure1_slot2;
                        var25 = 43;
                        var25 = var29[var25];
                        var26 = var26.bind(var4)(var25);
                        var25 = {};
                        var25.guild = var28;
                        var25.channel = var22;
                        var25.onAction = var13;
                        var28 = var24.voiceChannelDivider;
                        var25.style = var28;
                        var19 = var27.bind(var4)(var26, var25);
                    case 1045:
                        var8[2] = var19;
                        var25 = _closure1_slot1;
                        var26 = _closure1_slot2;
                        var19 = 44;
                        var19 = var26[var19];
                        var19 = var25.bind(var4)(var19);
                        var19 = var19.bind(var4)(var23);
                        if (var19) {
                            _fun68880_ip = 1448;
                            continue _fun68880
                        }
                    case 1080:
                        var25 = _closure1_slot1;
                        var26 = _closure1_slot2;
                        var19 = 45;
                        var19 = var26[var19];
                        var19 = var25.bind(var4)(var19);
                        var19 = var19.bind(var4)(var23);
                        if (var19) {
                            _fun68880_ip = 1392;
                            continue _fun68880
                        }
                    case 1111:
                        var19 = var17.id;
                        var17 = var9.id;
                        var9 = null;
                        if (!(var19 !== var17)) {
                            _fun68880_ip = 1390;
                            continue _fun68880
                        }
                    case 1130:
                        var19 = _closure1_slot1;
                        var25 = _closure1_slot2;
                        var17 = 19;
                        var17 = var25[var17];
                        var17 = var19.bind(var4)(var17);
                        var17 = var17.bind(var4)(var23);
                        if (var17) {
                            _fun68880_ip = 1387;
                            continue _fun68880
                        }
                    case 1161:
                        var19 = _closure1_slot1;
                        var25 = _closure1_slot2;
                        var17 = 30;
                        var17 = var25[var17];
                        var17 = var19.bind(var4)(var17);
                        var17 = var17.bind(var4)(var23);
                        if (var17) {
                            _fun68880_ip = 1384;
                            continue _fun68880
                        }
                    case 1192:
                        var19 = _closure1_slot1;
                        var25 = _closure1_slot2;
                        var17 = 46;
                        var17 = var25[var17];
                        var17 = var19.bind(var4)(var17);
                        var17 = var17.bind(var4)(var23);
                        if (var17) {
                            _fun68880_ip = 1381;
                            continue _fun68880
                        }
                    case 1223:
                        if (!var16) {
                            _fun68880_ip = 1230;
                            continue _fun68880
                        }
                    case 1226:
                        if (!(var18 == var22)) {
                            _fun68880_ip = 1322;
                            continue _fun68880
                        }
                    case 1230:
                        var16 = var23.buttons;
                        var17 = var18 != var16;
                        var16 = null;
                        if (!var17) {
                            _fun68880_ip = 1320;
                            continue _fun68880
                        }
                    case 1245:
                        var17 = var23.buttons;
                        var19 = var17.length;
                        var17 = 0;
                        var17 = var19 > var17;
                        var16 = null;
                        if (!var17) {
                            _fun68880_ip = 1320;
                            continue _fun68880
                        }
                    case 1267:
                        var19 = _closure1_slot19;
                        var18 = _closure1_slot6;
                        var17 = {};
                        var24 = var24.customButtons;
                        var17.style = var24;
                        var25 = var23.buttons;
                        var24 = var25.map;
                        var23 = function(arg0, arg1) { // Environment: var20
                            var4 = arg1;
                            var3 = _closure1_slot19;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 37;
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
                        var17.children = var23;
                        var16 = var19.bind(var4)(var18, var17);
                    case 1320:
                        _fun68880_ip = 1378;
                        continue _fun68880;
                    case 1322:
                        var19 = _closure1_slot19;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var17 = var17[var15];
                        var17 = var18.bind(var4)(var17);
                        var18 = var17.VoiceChannelButtons;
                        var17 = {};
                        var17.channel = var22;
                        var17.isInChannel = var21;
                        var20 = function arg0() {
                            _fun68884: for (var _fun68884_ip = 0;;) switch (_fun68884_ip) {
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
                                        _fun68884_ip = 133;
                                        continue _fun68884
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
                        var17.onAction = var20;
                        var16 = var19.bind(var4)(var18, var17);
                    case 1378:
                        var12 = var16;
                    case 1381:
                        var11 = var12;
                    case 1384:
                        var10 = var11;
                    case 1387:
                        var9 = var10;
                    case 1390:
                        _fun68880_ip = 1446;
                        continue _fun68880;
                    case 1392:
                        var12 = _closure1_slot19;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var15];
                        var10 = var11.bind(var4)(var10);
                        var11 = var10.ConnectPlatformButton;
                        var10 = {};
                        var16 = _closure1_slot17;
                        var16 = var16.PLAYSTATION;
                        var10.type = var16;
                        var10.onAction = var13;
                        var9 = var12.bind(var4)(var11, var10);
                    case 1446:
                        _fun68880_ip = 1502;
                        continue _fun68880;
                    case 1448:
                        var12 = _closure1_slot19;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var15];
                        var10 = var11.bind(var4)(var10);
                        var11 = var10.ConnectPlatformButton;
                        var10 = {};
                        var14 = _closure1_slot17;
                        var14 = var14.XBOX;
                        var10.type = var14;
                        var10.onAction = var13;
                        var9 = var12.bind(var4)(var11, var10);
                    case 1502:
                        var8[3] = var9;
                        var5.children = var8;
                        var5 = var7.bind(var4)(var6, var5);
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 1526:
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = function arg0() {
                _fun68886: for (var _fun68886_ip = 0;;) switch (_fun68886_ip) {
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
                            _fun68888: for (var _fun68888_ip = 0;;) switch (_fun68888_ip) {
                                case 0:
                                    var2 = _closure1_slot13;
                                    var1 = var2.isInChannel;
                                    var4 = _closure2_slot3;
                                    var0 = null;
                                    var4 = var0 == var4;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun68888_ip = 40;
                                        continue _fun68888
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
                                _fun68891: for (var _fun68891_ip = 0;;) switch (_fun68891_ip) {
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
                                            _fun68891_ip = 64;
                                            continue _fun68891
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
                            _fun68892: for (var _fun68892_ip = 0;;) switch (_fun68892_ip) {
                                case 0:
                                    var2 = _closure2_slot2;
                                    var0 = null;
                                    var4 = var0 == var2;
                                    var3 = undefined;
                                    if (var4) {
                                        _fun68892_ip = 28;
                                        continue _fun68892
                                    }
                                case 18:
                                    var4 = _closure2_slot2;
                                    var3 = var4.application_id;
                                case 28:
                                    if (!(var0 == var3)) {
                                        _fun68892_ip = 92;
                                        continue _fun68892
                                    }
                                case 32:
                                    var3 = _closure2_slot2;
                                    var3 = var0 == var3;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun68892_ip = 54;
                                        continue _fun68892
                                    }
                                case 45:
                                    var3 = _closure2_slot2;
                                    var2 = var3.name;
                                case 54:
                                    var2 = var0 != var2;
                                    var0 = null;
                                    if (!var2) {
                                        _fun68892_ip = 90;
                                        continue _fun68892
                                    }
                                case 63:
                                    var4 = _closure1_slot7;
                                    var3 = var4.getApplicationByName;
                                    var2 = _closure2_slot2;
                                    var2 = var2.name;
                                    var0 = var3.bind(var4)(var2);
                                case 90:
                                    _fun68892_ip = 120;
                                    continue _fun68892;
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
                            _fun68886_ip = 391;
                            continue _fun68886
                        }
                    case 386:
                        var5 = var14.id;
                    case 391:
                        var1.voiceChannelId = var5;
                        var1.user = var21;
                        var1.stream = var25;
                        var1.analyticsLocations = var4;
                        var12 = var2.bind(var3)(var1);
                        _closure2_slot4 = var12;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 38;
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
                        var4 = 39;
                        var4 = var7[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var11 = var17.card;
                        var7 = new Array(2);
                        var7[0] = var11;
                        var7[1] = var10;
                        var4.style = var7;
                        if (!(var8 == var22)) {
                            _fun68886_ip = 590;
                            continue _fun68886
                        }
                    case 533:
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
                        _fun68886_ip = 657;
                        continue _fun68886;
                    case 590:
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
                    case 657:
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
                        var23 = function() {
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
                            _fun68886_ip = 944;
                            continue _fun68886
                        }
                    case 919:
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var11 = 30;
                        var11 = var16[var11];
                        var11 = var15.bind(var3)(var11);
                        var10 = var11.bind(var3)(var20);
                    case 944:
                        if (!var10) {
                            _fun68886_ip = 981;
                            continue _fun68886
                        }
                    case 947:
                        var16 = _closure1_slot19;
                        var15 = _closure1_slot25;
                        var11 = {};
                        var11.user = var21;
                        var11.activity = var20;
                        var11.application = var19;
                        var11.onAction = var12;
                        var10 = var16.bind(var3)(var15, var11);
                    case 981:
                        var7[1] = var10;
                        var10 = var8 != var18;
                        if (!var10) {
                            _fun68886_ip = 996;
                            continue _fun68886
                        }
                    case 992:
                        var10 = var8 != var14;
                    case 996:
                        if (!var10) {
                            _fun68886_ip = 1054;
                            continue _fun68886
                        }
                    case 999:
                        var16 = _closure1_slot19;
                        var15 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var11 = 43;
                        var11 = var19[var11];
                        var15 = var15.bind(var3)(var11);
                        var11 = {};
                        var11.guild = var18;
                        var11.channel = var14;
                        var11.onAction = var12;
                        var17 = var17.voiceChannelDivider;
                        var11.style = var17;
                        var10 = var16.bind(var3)(var15, var11);
                    case 1054:
                        var7[2] = var10;
                        var8 = var8 != var14;
                        if (!var8) {
                            _fun68886_ip = 1117;
                            continue _fun68886
                        }
                    case 1065:
                        var11 = _closure1_slot19;
                        var10 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var9 = 37;
                        var9 = var15[var9];
                        var9 = var10.bind(var3)(var9);
                        var10 = var9.VoiceChannelButtons;
                        var9 = {};
                        var9.channel = var14;
                        var9.isInChannel = var13;
                        var9.onAction = var12;
                        var8 = var11.bind(var3)(var10, var9);
                    case 1117:
                        var7[3] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot27 = var0;
            var0 = function arg0() {
                _fun68894: for (var _fun68894_ip = 0;;) switch (_fun68894_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.user;
                        var10 = var0.channel;
                        var _closure2_slot0 = var10;
                        var9 = var0.isInChannel;
                        var6 = var0.style;
                        var11 = _closure1_slot19;
                        var1 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 55;
                        var2 = var4[var0];
                        var3 = undefined;
                        var8 = var1.bind(var3)(var2);
                        var2 = {
                            'channel': null,
                            'size': 'sm',
                            'color': 'mobile-text-heading-primary'
                        };
                        var2.channel = var10;
                        var29 = var11.bind(var3)(var8, var2);
                        var8 = _closure1_slot19;
                        var0 = var4[var0];
                        var2 = var1.bind(var3)(var0);
                        var0 = {
                            'channel': null,
                            'size': 'sm',
                            'color': 'mobile-text-heading-primary'
                        };
                        var0.channel = var10;
                        var23 = var8.bind(var3)(var2, var0);
                        var0 = _closure1_slot22;
                        var30 = var0.bind(var3)();
                        var0 = 56;
                        var0 = var4[var0];
                        var0 = var1.bind(var3)(var0);
                        var14 = var0.bind(var3)(var10);
                        var0 = 57;
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
                            _fun68896: for (var _fun68896_ip = 0;;) switch (_fun68896_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var0 = var2.isPrivate;
                                    var0 = var0.bind(var2)();
                                    if (var0) {
                                        _fun68896_ip = 53;
                                        continue _fun68896
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
                        var0 = 38;
                        var0 = var4[var0];
                        var2 = var1.bind(var3)(var0);
                        var0 = {};
                        var7 = var7.id;
                        var0.userId = var7;
                        var0.onAction = var8;
                        var0 = var2.bind(var3)(var0);
                        var2 = _closure1_slot20;
                        var0 = 39;
                        var0 = var4[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var7 = var30.card;
                        var4 = new Array(2);
                        var4[0] = var7;
                        var4[1] = var6;
                        var0.style = var4;
                        var4 = var10.isDM;
                        var4 = var4.bind(var10)();
                        if (var4) {
                            _fun68894_ip = 553;
                            continue _fun68894
                        }
                    case 457:
                        var4 = var10.isGroupDM;
                        var4 = var4.bind(var10)();
                        if (var4) {
                            _fun68894_ip = 553;
                            continue _fun68894
                        }
                    case 470:
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
                            _fun68894_ip = 540;
                            continue _fun68894
                        }
                    case 527:
                        var4 = var6.msxteM;
                        var4 = var7.bind(var11)(var4);
                        _fun68894_ip = 551;
                        continue _fun68894;
                    case 540:
                        var6 = var6.QygGCN;
                        var4 = var7.bind(var11)(var6);
                    case 551:
                        _fun68894_ip = 608;
                        continue _fun68894;
                    case 553:
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
                    case 608:
                        var0.title = var4;
                        var4 = var30.cardTitle;
                        var0.titleStyle = var4;
                        var7 = _closure1_slot20;
                        var6 = _closure1_slot6;
                        var4 = {};
                        var11 = var30.body;
                        var4.style = var11;
                        var13 = _closure1_slot19;
                        var12 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var11 = 58;
                        var11 = var16[var11];
                        var12 = var12.bind(var3)(var11);
                        var11 = {};
                        var11.users = var14;
                        var16 = null;
                        var17 = var16 == var27;
                        var14 = undefined;
                        if (var17) {
                            _fun68894_ip = 689;
                            continue _fun68894
                        }
                    case 684:
                        var14 = var27.id;
                    case 689:
                        var11.guildId = var14;
                        var12 = var13.bind(var3)(var12, var11);
                        var11 = new Array(2);
                        var11[0] = var12;
                        var14 = _closure1_slot20;
                        var13 = _closure1_slot6;
                        var12 = {};
                        var17 = var30.voiceCallContent;
                        var12.style = var17;
                        if (var15) {
                            _fun68894_ip = 830;
                            continue _fun68894
                        }
                    case 730:
                        var18 = _closure1_slot20;
                        var17 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var15 = 15;
                        var15 = var19[var15];
                        var15 = var17.bind(var3)(var15);
                        var17 = var15.Text;
                        var15 = {
                            'variant': 'text-md/semibold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var22 = _closure1_slot19;
                        var21 = _closure1_slot6;
                        var19 = {};
                        var24 = var30.voiceCallNameIconWrapper;
                        var19.style = var24;
                        var19.children = var23;
                        var21 = var22.bind(var3)(var21, var19);
                        var19 = new Array(2);
                        var19[0] = var21;
                        var19[1] = var25;
                        var15.children = var19;
                        var17 = var18.bind(var3)(var17, var15);
                        _fun68894_ip = 1061;
                        continue _fun68894;
                    case 830:
                        var19 = _closure1_slot19;
                        var22 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var15 = 59;
                        var15 = var24[var15];
                        var15 = var22.bind(var3)(var15);
                        var18 = var15.PressableOpacity;
                        var15 = {};
                        var21 = 'button';
                        var15.accessibilityRole = var21;
                        var23 = _closure1_slot1;
                        var21 = 60;
                        var21 = var24[var21];
                        var23 = var23.bind(var3)(var21);
                        var21 = {};
                        var21.channel = var10;
                        var21 = var23.bind(var3)(var21);
                        var15.accessibilityLabel = var21;
                        var21 = 20;
                        var23 = var24[var21];
                        var23 = var22.bind(var3)(var23);
                        var26 = var23.intl;
                        var23 = var26.string;
                        var21 = var24[var21];
                        var21 = var22.bind(var3)(var21);
                        var21 = var21.t;
                        var21 = var21["9C444m"];
                        var21 = var23.bind(var26)(var21);
                        var15.accessibilityHint = var21;
                        var21 = function() {
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
                        var21 = var24[var21];
                        var21 = var22.bind(var3)(var21);
                        var22 = var21.Text;
                        var21 = {
                            'variant': 'text-md/semibold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var28 = _closure1_slot19;
                        var26 = _closure1_slot6;
                        var24 = {};
                        var30 = var30.voiceCallNameIconWrapper;
                        var24.style = var30;
                        var24.children = var29;
                        var26 = var28.bind(var3)(var26, var24);
                        var24 = new Array(2);
                        var24[0] = var26;
                        var24[1] = var25;
                        var21.children = var24;
                        var21 = var23.bind(var3)(var22, var21);
                        var15.children = var21;
                        var17 = var19.bind(var3)(var18, var15);
                    case 1061:
                        var15 = new Array(2);
                        var15[0] = var17;
                        var17 = var16 == var27;
                        var16 = null;
                        if (var17) {
                            _fun68894_ip = 1355;
                            continue _fun68894
                        }
                    case 1081:
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
                        var20 = function() {
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
                    case 1355:
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
                        var5 = 37;
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
            var3 = var12.bind(var0)(var3);
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
            var3 = var12.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot11 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot12 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
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
            var10 = 12;
            var3 = var5[var10];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {};
            var8.gap = var10;
            var3.card = var8;
            var8 = {};
            var8.marginBottom = var13;
            var3.cardTitle = var8;
            var8 = {};
            var11 = 13;
            var9 = var5[var11];
            var9 = var12.bind(var0)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_SUBTLE;
            var8.tintColor = var9;
            var3.cardTitleIcon = var8;
            var9 = 16;
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
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
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
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
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
            var8 = {
                'borderTopWidth': 1,
                'borderTopColor': null,
                'paddingTop': 12
            };
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
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
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.xs;
            var8.borderRadius = var14;
            var3.streamPreview = var8;
            var8 = {
                'height': 16,
                'paddingHorizontal': 6
            };
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_FEEDBACK_CRITICAL;
            var8.backgroundColor = var14;
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
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
            var11 = var5[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.BORDER_SUBTLE;
            var8.borderTopColor = var11;
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
            var11 = 14;
            var11 = var5[var11];
            var12 = var4.bind(var0)(var11);
            var11 = var12.isAndroid;
            var11 = var11.bind(var12)();
            if (!var11) {
                _fun68871_ip = 1024;
                continue _fun68871
            }
        case 1021:
            var9 = var10;
        case 1024:
            var8.height = var9;
            var3.voiceCallNameIconWrapper = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot22 = var3;
            var3 = 69;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/user_profile/native/UserProfileActivity.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun68899: for (var _fun68899_ip = 0;;) switch (_fun68899_ip) {
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
                            _fun68900: for (var _fun68900_ip = 0;;) switch (_fun68900_ip) {
                                case 0:
                                    var0 = _closure2_slot6;
                                    var4 = null;
                                    var0 = var4 != var0;
                                    if (!var0) {
                                        _fun68900_ip = 64;
                                        continue _fun68900
                                    }
                                case 16:
                                    var3 = _closure1_slot13;
                                    var2 = var3.getCurrentClientVoiceChannelId;
                                    var5 = _closure2_slot2;
                                    var5 = var4 != var5;
                                    var4 = null;
                                    if (!var5) {
                                        _fun68900_ip = 46;
                                        continue _fun68900
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
                            _fun68901: for (var _fun68901_ip = 0;;) switch (_fun68901_ip) {
                                case 0:
                                    var2 = _closure2_slot9;
                                    if (var2) {
                                        _fun68901_ip = 39;
                                        continue _fun68901
                                    }
                                case 13:
                                    var3 = _closure1_slot11;
                                    var2 = var3.getStatus;
                                    var0 = _closure2_slot0;
                                    var0 = var0.id;
                                    var2 = var2.bind(var3)(var0);
                                    _fun68901_ip = 53;
                                    continue _fun68901;
                                case 39:
                                    var3 = _closure1_slot12;
                                    var0 = var3.getStatus;
                                    var2 = var0.bind(var3)();
                                case 53:
                                    var0 = _closure1_slot18;
                                    var0 = var0.OFFLINE;
                                    var0 = var2 === var0;
                                    if (var0) {
                                        _fun68901_ip = 84;
                                        continue _fun68901
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
                            _fun68899_ip = 319;
                            continue _fun68899
                        }
                    case 307:
                        var0 = null;
                        if (!(var0 != var7)) {
                            _fun68899_ip = 319;
                            continue _fun68899
                        }
                    case 313:
                        if (var6) {
                            _fun68899_ip = 706;
                            continue _fun68899
                        }
                    case 319:
                        var0 = null;
                        if (var1) {
                            _fun68899_ip = 704;
                            continue _fun68899
                        }
                    case 327:
                        var14 = var5;
                        if (!(var0 != var18)) {
                            _fun68899_ip = 351;
                            continue _fun68899
                        }
                    case 334:
                        var2 = var5.filter;
                        var1 = function(arg0) { // Environment: var11
                            var1 = _closure2_slot7;
                            var0 = arg0;
                            var0 = var0 !== var1;
                            return var0;
                        };
                        var14 = var2.bind(var5)(var1);
                    case 351:
                        var20 = function arg0() {
                            _fun68903: for (var _fun68903_ip = 0;;) switch (_fun68903_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = _closure2_slot5;
                                    var7 = null;
                                    if (!(var7 != var0)) {
                                        _fun68903_ip = 37;
                                        continue _fun68903
                                    }
                                case 16:
                                    var0 = _closure2_slot5;
                                    var3 = var0.channelId;
                                    var0 = var2.id;
                                    if (!(var3 !== var0)) {
                                        _fun68903_ip = 193;
                                        continue _fun68903
                                    }
                                case 37:
                                    var0 = _closure2_slot7;
                                    if (!(var7 == var0)) {
                                        _fun68903_ip = 111;
                                        continue _fun68903
                                    }
                                case 45:
                                    var0 = _closure2_slot10;
                                    if (!(var7 == var0)) {
                                        _fun68903_ip = 111;
                                        continue _fun68903
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
                                    _fun68903_ip = 191;
                                    continue _fun68903;
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
                                        _fun68903_ip = 155;
                                        continue _fun68903
                                    }
                                case 149:
                                    var6 = _closure2_slot10;
                                    _fun68903_ip = 159;
                                    continue _fun68903;
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
                                    _fun68903_ip = 254;
                                    continue _fun68903;
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
                            _fun68899_ip = 592;
                            continue _fun68899
                        }
                    case 378:
                        if (var6) {
                            _fun68899_ip = 449;
                            continue _fun68899
                        }
                    case 381:
                        var16 = _closure1_slot19;
                        var15 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var6 = 39;
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
                        _fun68899_ip = 589;
                        continue _fun68899;
                    case 449:
                        var17 = _closure1_slot20;
                        var22 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var15 = 39;
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
                    case 589:
                        var13 = var6;
                    case 592:
                        var6 = new Array(3);
                        var6[0] = var13;
                        var13 = var0 != var19;
                        if (!var13) {
                            _fun68899_ip = 630;
                            continue _fun68899
                        }
                    case 607:
                        var16 = var19.channelId;
                        var17 = var0 == var7;
                        var15 = undefined;
                        if (var17) {
                            _fun68899_ip = 626;
                            continue _fun68899
                        }
                    case 621:
                        var15 = var7.id;
                    case 626:
                        var13 = var16 !== var15;
                    case 630:
                        if (!var13) {
                            _fun68899_ip = 667;
                            continue _fun68899
                        }
                    case 633:
                        var17 = _closure1_slot19;
                        var16 = _closure1_slot27;
                        var15 = {};
                        var15.user = var10;
                        var15.stream = var19;
                        var15.activity = var18;
                        var15.style = var12;
                        var13 = var17.bind(var3)(var16, var15);
                    case 667:
                        var6[1] = var13;
                        var13 = var14.map;
                        var11 = function(arg0, arg1) { // Environment: var11
                            _fun68904: for (var _fun68904_ip = 0;;) switch (_fun68904_ip) {
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
                                        _fun68904_ip = 67;
                                        continue _fun68904
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
                    case 704:
                        return var0;
                    case 706:
                        var2 = _closure1_slot19;
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var0 = 39;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3451, 1372, 1410, 3093, 3607, 5716, 3518, 660, 33, 1297, 671, 478, 3938, 5967, 8511, 3161, 5731, 1234, 8517, 5426, 1417, 7668, 8479, 8520, 3207, 8466, 8477, 5729, 8521, 8540, 566, 5785, 5639, 8544, 8546, 8550, 8439, 4092, 8527, 8551, 8553, 8515, 8516, 5795, 795, 8557, 8558, 5298, 8559, 4237, 8141, 3279, 8476, 8554, 4768, 8562, 4880, 8295, 4567, 7916, 5674, 7977, 8563, 8565, 8566, 8567, 2]);