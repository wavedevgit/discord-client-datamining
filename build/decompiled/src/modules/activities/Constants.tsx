// modules/activities/Constants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var35 = require;
    var2 = exports;
    var36 = dependencyMap;
    var5 = global;
    var4 = var5.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = 0;
    var3 = var36[var1];
    var0 = undefined;
    var3 = var35.bind(var0)(var3);
    var38 = var3.ChannelTypes;
    var15 = new Array(11);
    var27 = '1037680572660727838';
    var15[0] = var27;
    var26 = '235088799074484224';
    var15[1] = var26;
    var30 = '1007373802981822582';
    var15[2] = var30;
    var29 = '1067803140071620628';
    var15[3] = var29;
    var23 = '1194351737264406548';
    var15[4] = var23;
    var22 = '1245041113882955918';
    var15[5] = var22;
    var21 = '1245040907732910201';
    var15[6] = var21;
    var20 = '1245040436427489471';
    var15[7] = var20;
    var19 = '1208090049871351890';
    var15[8] = var19;
    var25 = '1235205910863806484';
    var15[9] = var25;
    var24 = '1227719606223765687';
    var15[10] = var24;
    var14 = new Array(3);
    var18 = '1247266306231898122';
    var14[0] = var18;
    var17 = '1257458870390099989';
    var14[1] = var17;
    var16 = '1276239071764680926';
    var14[2] = var16;
    var13 = {};
    var3 = 'ADS';
    var13.ADS = var3;
    var3 = 'FAILED_LOAD';
    var13.FAILED_LOAD = var3;
    var3 = 'LAGGING';
    var13.LAGGING = var3;
    var3 = 'CONFUSING';
    var13.CONFUSING = var3;
    var3 = 'NOT_FUN';
    var13.NOT_FUN = var3;
    var3 = 'OTHER';
    var13.OTHER = var3;
    var12 = {};
    var12.PLAY = var1;
    var3 = 'PLAY';
    var12[var1] = var3;
    var37 = 1;
    var12.SPECTATE = var37;
    var3 = 'SPECTATE';
    var12[var37] = var3;
    var11 = {};
    var3 = 'desktop';
    var11.DESKTOP = var3;
    var3 = 'mobile';
    var11.MOBILE = var3;
    var10 = {};
    var3 = 'BETRAYAL_MARKETING_TOOLTIP';
    var10.BETRAYAL_MARKETING_TOOLTIP = var3;
    var3 = 'FISHINGTON_MARKETING_TOOLTIP';
    var10.FISHINGTON_MARKETING_TOOLTIP = var3;
    var3 = 'POKER_MARKETING_TOOLTIP';
    var10.POKER_MARKETING_TOOLTIP = var3;
    var3 = 'YOUTUBE_MARKETING_TOOLTIP';
    var10.YOUTUBE_MARKETING_TOOLTIP = var3;
    var9 = {};
    var9.UNLOCKED = var37;
    var3 = 'UNLOCKED';
    var9[var37] = var3;
    var34 = 2;
    var9.PORTRAIT = var34;
    var4 = 'PORTRAIT';
    var9[var34] = var4;
    var6 = 3;
    var9.LANDSCAPE = var6;
    var3 = 'LANDSCAPE';
    var9[var6] = var3;
    var7 = var5.Set;
    var5 = new Array(4);
    var33 = '755600276941176913';
    var5[0] = var33;
    var32 = '880218832743055411';
    var5[1] = var32;
    var31 = '1050941315912835122';
    var5[2] = var31;
    var28 = '880218394199220334';
    var5[3] = var28;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var44 = var6;
    var43 = var5;
    var5 = new var44[var7](var43, var42);
    var8 = var5 instanceof Object ? var5 : var6;
    var7 = {};
    var7.PORTRAIT = var1;
    var7[var1] = var4;
    var7.LANDSCAPE = var37;
    var7[var37] = var3;
    var6 = {};
    var6.FOCUSED = var1;
    var3 = 'FOCUSED';
    var6[var1] = var3;
    var6.PIP = var37;
    var3 = 'PIP';
    var6[var37] = var3;
    var6.GRID = var34;
    var3 = 'GRID';
    var6[var34] = var3;
    var40 = {
        'label_type': null,
        'release_phase': '',
        'label_from': null,
        'label_until': null
    };
    var3 = var36[var37];
    var3 = var35.bind(var0)(var3);
    var3 = var3.EmbeddedActivityLabelTypes;
    var3 = var3.NONE;
    var40.label_type = var3;
    var3 = new Array(0);
    var40.omit_badge_from_surfaces = var3;
    var5 = {
        'application_id': '',
        'requires_age_gate': false,
        'legacy_responsive_aspect_ratio': false
    };
    var3 = false;
    var4 = var9.UNLOCKED;
    var5.default_orientation_lock_state = var4;
    var4 = var9.UNLOCKED;
    var5.tablet_default_orientation_lock_state = var4;
    var4 = var36[var37];
    var4 = var35.bind(var0)(var4);
    var4 = var4.EmbeddedActivitySupportedPlatforms;
    var39 = var4.WEB;
    var4 = new Array(1);
    var4[0] = var39;
    var5.supported_platforms = var4;
    var4 = {};
    var39 = var36[var37];
    var39 = var35.bind(var0)(var39);
    var39 = var39.EmbeddedActivitySupportedPlatforms;
    var39 = var39.WEB;
    var4[var39] = var40;
    var39 = var36[var37];
    var39 = var35.bind(var0)(var39);
    var39 = var39.EmbeddedActivitySupportedPlatforms;
    var39 = var39.IOS;
    var4[var39] = var40;
    var39 = var36[var37];
    var39 = var35.bind(var0)(var39);
    var39 = var39.EmbeddedActivitySupportedPlatforms;
    var39 = var39.ANDROID;
    var4[var39] = var40;
    var5.client_platform_config = var4;
    var5.has_csp_exception = var3;
    var5.displays_advertisements = var3;
    var3 = new Array(0);
    var5.blocked_locales = var3;
    var3 = new Array(0);
    var5.supported_locales = var3;
    var3 = var38.GUILD_TEXT;
    var4 = new Array(3);
    var4[0] = var3;
    var3 = var38.DM;
    var4[1] = var3;
    var3 = var38.GROUP_DM;
    var4[2] = var3;
    var3 = new Array(1);
    var43 = var3;
    var42 = var4;
    var41 = 0;
    var1 = arraySpread(var43, var42, var41);
    var38 = var38.GUILD_VOICE;
    var3[var1] = var38;
    var1 = var1 + var37;
    var1 = {};
    var37 = 'normal';
    var1.NORMAL = var37;
    var37 = 'full-screen';
    var1.FULL_SCREEN = var37;
    var34 = var36[var34];
    var36 = var35.bind(var0)(var34);
    var35 = var36.fileFinishedImporting;
    var34 = 'modules/activities/Constants.tsx';
    var34 = var35.bind(var36)(var34);
    var34 = 160;
    var2.ACTIVITY_INVITE_COVER_IMAGE_SIZE = var34;
    var34 = /^https?:\\/\\ / ( ? : www\.) ? (twitch\.tv\\ / (. + ) | youtube.com\\ / watch\ ? v = ) / ;
    var2.validStreamURL = var34;
    var34 = '438122941302046720';
    var2.XBOX_ACTIVITY_APPLICATION_ID = var34;
    var34 = '1417273808645259344';
    var2.META_PRESENCE_APPLICATION_ID = var34;
    var34 = '773336526917861400';
    var2.END_GAME_APPLICATION_ID = var34;
    var34 = '814288819477020702';
    var2.FISHINGTON_APPLICATION_ID = var34;
    var2.YOUTUBE_APPLICATION_ID = var33;
    var2.WATCH_YOUTUBE_DEV_APP_ID = var32;
    var2.WATCH_YOUTUBE_QA_APP_ID = var31;
    var31 = '910224161476083792';
    var2.PUTT_PARTY_DEV_APP_ID = var31;
    var31 = '945748195256979606';
    var2.PUTT_PARTY_QA_APP_ID = var31;
    var31 = '1070087967294631976';
    var2.JAM_SPACE_APPLICATION_ID = var31;
    var2.GARTIC_PHONE_APPLICATION_ID = var30;
    var2.GARTIC_PHONE_DEV_APPLICATION_ID = var29;
    var29 = '1039835161136746497';
    var2.COLOR_TOGETHER_APPLICATION_ID = var29;
    var29 = '852509694341283871';
    var2.SPELL_CAST_APPLICATION_ID = var29;
    var29 = '903769130790969345';
    var2.LAND_IO_APPLICATION_ID = var29;
    var2.WATCH_YOUTUBE_PROD_APP_ID = var28;
    var28 = '1078728822972764312';
    var2.KWIM_APPLICATION_ID = var28;
    var28 = '947957217959759964';
    var2.BOBBLE_LEAGUE_APPLICATION_ID = var28;
    var28 = '832013003968348200';
    var2.CHECKERS_IN_THE_PARK_APP_ID = var28;
    var28 = '832012774040141894';
    var2.CHESS_IN_THE_PARK_APP_ID = var28;
    var28 = '832025144389533716';
    var2.BLAZIN_8S_APPLICATION_ID = var28;
    var28 = '755827207812677713';
    var2.POKER_NIGHT_APPLICATION_ID = var28;
    var28 = '879863686565621790';
    var2.LETTER_LEAGUE_APPLICATION_ID = var28;
    var28 = '902271654783242291';
    var2.SKETCH_HEADS_APPLICATION_ID = var28;
    var2.CHEF_SHOWDOWN_APPLICATION_ID = var27;
    var27 = '945737671223947305';
    var2.PUTT_PARTY_PROD_APPLICATION_ID = var27;
    var27 = '1010174316991762534';
    var2.KRUNKER_STAGING_APPLICATION_ID = var27;
    var27 = '1011683823555199066';
    var2.KRUNKER_STRIKE_APPLICATION_ID = var27;
    var27 = '1106787098452832296';
    var2.COLONIST_APPLICATION_ID = var27;
    var27 = '1234546995360694434';
    var2.AM_HARMONY_STG_APPLICATION_ID = var27;
    var27 = '1214629548377768066';
    var2.AM_HARMONY_PRD_APPLICATION_ID = var27;
    var2.RYTHM_APPLICATION_ID = var26;
    var2.PAPERY_MATCH_APPLICATION_ID = var25;
    var25 = '1220052815590723654';
    var2.EXORACER_APPLICATION_ID = var25;
    var25 = '1222080278672179220';
    var2.CLASH_GEM_CARD_PARTY_APPLICATION_ID = var25;
    var2.MAGIC_CIRCLE_APPLICATION_ID = var24;
    var2.DEATH_BY_AI_APPLICATION_ID = var23;
    var2.TINY_ROYALE_APP_1 = var22;
    var2.TINY_ROYALE_APP_2 = var21;
    var2.TINY_ROYALE_APP_3 = var20;
    var2.TINY_ROYALE_APP_4 = var19;
    var2.TWELVE_BULLETS_DEV = var18;
    var2.TWELVE_BULLETS_STG = var17;
    var2.TWELVE_BULLETS_PRD = var16;
    var16 = 'https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu';
    var2.EMBEDDED_ACTIVITY_SURVEY_URL = var16;
    var16 = 'https://discord.com/blog/server-activities-games-voice-watch-together';
    var2.EMBEDDED_ACTIVITIES_BLOG_POST_URL = var16;
    var16 = {
        'SMALL': 64,
        'LARGE': 160
    };
    var2.ImageSizes = var16;
    var16 = ['in_development', 'activities_team', 'employee_release'];
    var2.STAFF_RELEASE_PHASES = var16;
    var2.EXCLUDE_FULL_SCREEN_APPS = var15;
    var2.SHARE_INTERACTION_APPS = var14;
    var2.ActivityFeedbackReasons = var13;
    var2.ActivityIntent = var12;
    var2.ActivityPlatform = var11;
    var2.ActivityTooltipName = var10;
    var2.OrientationLockState = var9;
    var2.APPLICATIONS_WITH_ALLOWED_POPUPS = var8;
    var2.ActivityScreenOrientation = var7;
    var2.ActivityLayoutMode = var6;
    var2.DEFAULT_EMBEDDED_ACTIVITY_CONFIG = var5;
    var2.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES = var4;
    var2.SUPPORTED_ACTIVITIES_CHANNEL_TYPES = var3;
    var3 = function arg0() {
        _fun29703: for (var _fun29703_ip = 0;;) switch (_fun29703_ip) {
            case 0:
                var1 = arg0;
                var0 = 'tiktok';
                if (!(var0 !== var1)) {
                    _fun29703_ip = 67;
                    continue _fun29703
                }
            case 11:
                var0 = 'photos';
                if (!(var0 !== var1)) {
                    _fun29703_ip = 59;
                    continue _fun29703
                }
            case 21:
                var0 = 'snapchat';
                if (!(var0 !== var1)) {
                    _fun29703_ip = 51;
                    continue _fun29703
                }
            case 31:
                var0 = 'instagram';
                if (!(var0 !== var1)) {
                    _fun29703_ip = 43;
                    continue _fun29703
                }
            case 39:
                var0 = undefined;
                return var0;
            case 43:
                var0 = 'instagram://';
                return var0;
            case 51:
                var0 = 'snapchat://';
                return var0;
            case 59:
                var0 = 'photos-redirect://';
                return var0;
            case 67:
                var0 = 'tiktok://';
                return var0;
        }
    };
    var2.getAppIntentScheme = var3;
    var3 = 'https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety';
    var2.PRIVATE_APPS_HELP_ARTICLE = var3;
    var3 = 'disallowed_navigation_error_close_activity';
    var2.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY = var3;
    var3 = 0.5625;
    var2.ACTIVITY_PORTRAIT_ASPECT_RATIO = var3;
    var3 = 1.7777777777777777;
    var2.ACTIVITY_LANDSCAPE_ASPECT_RATIO = var3;
    var2.ActivityPopoutWindowLayouts = var1;
    var1 = 21600000;
    var2.INVITE_EXPIRATION_MS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1645, 2]);