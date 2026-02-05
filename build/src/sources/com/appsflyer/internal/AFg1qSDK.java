package com.appsflyer.internal;

import android.annotation.SuppressLint;
import android.app.UiModeManager;
import android.content.Context;
import android.media.AudioTrack;
import android.os.Build;
import android.os.Environment;
import android.os.StatFs;
import android.os.SystemClock;
import android.provider.Settings;
import android.text.TextUtils;
import com.appsflyer.AFLogger;
import com.appsflyer.AdRevenueScheme;
import com.appsflyer.AppsFlyerProperties;
import com.appsflyer.internal.AFg1sSDK;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import j$.util.DesugarTimeZone;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFg1qSDK implements AFg1rSDK {
    private static int $10 = 0;
    private static int $11 = 1;

    /* renamed from: i  reason: collision with root package name */
    private static int f8243i = 1;

    /* renamed from: w  reason: collision with root package name */
    private static int f8244w;
    @NotNull
    private final AFg1sSDK AFAdRevenueData;
    @NotNull
    private final Lazy AFKeystoreWrapper;
    @NotNull
    private final AFc1pSDK areAllFieldsValid;
    @NotNull
    private final AFc1oSDK component1;
    @NotNull
    private final AFg1vSDK component2;
    @NotNull
    private final AFh1tSDK component3;
    @NotNull
    private final AFi1sSDK component4;
    @NotNull
    private final AFf1cSDK copy;
    @NotNull
    private final Lazy copydefault;
    @NotNull
    private final AFc1gSDK equals;
    @NotNull
    private final AFi1lSDK getCurrencyIso4217Code;
    @NotNull
    private final Context getMediationNetwork;
    @NotNull
    private final AFj1pSDK getMonetizationNetwork;
    @NotNull
    private final String getRevenue;
    @NotNull
    private final AFg1xSDK hashCode;
    @NotNull
    private final AFc1eSDK toString;
    private static char[] AFInAppEventType = {35909, 35928, 35921, 35926, 35927, 35903, 35904, 35924, 35933, 35910, 35931, 35879, 35908, 35905, 35911};
    private static int AFLogger = 1912311267;
    private static boolean AFInAppEventParameterName = true;
    private static boolean registerClient = true;

    public AFg1qSDK(@NotNull String str, @NotNull Context context, @NotNull AFi1lSDK aFi1lSDK, @NotNull AFg1sSDK aFg1sSDK, @NotNull AFj1pSDK aFj1pSDK, @NotNull AFg1vSDK aFg1vSDK, @NotNull AFh1tSDK aFh1tSDK, @NotNull AFc1oSDK aFc1oSDK, @NotNull AFc1pSDK aFc1pSDK, @NotNull AFi1sSDK aFi1sSDK, @NotNull AFf1cSDK aFf1cSDK, @NotNull AFc1gSDK aFc1gSDK, @NotNull AFg1xSDK aFg1xSDK, @NotNull AFc1eSDK aFc1eSDK) {
        Intrinsics.checkNotNullParameter(str, "");
        Intrinsics.checkNotNullParameter(context, "");
        Intrinsics.checkNotNullParameter(aFi1lSDK, "");
        Intrinsics.checkNotNullParameter(aFg1sSDK, "");
        Intrinsics.checkNotNullParameter(aFj1pSDK, "");
        Intrinsics.checkNotNullParameter(aFg1vSDK, "");
        Intrinsics.checkNotNullParameter(aFh1tSDK, "");
        Intrinsics.checkNotNullParameter(aFc1oSDK, "");
        Intrinsics.checkNotNullParameter(aFc1pSDK, "");
        Intrinsics.checkNotNullParameter(aFi1sSDK, "");
        Intrinsics.checkNotNullParameter(aFf1cSDK, "");
        Intrinsics.checkNotNullParameter(aFc1gSDK, "");
        Intrinsics.checkNotNullParameter(aFg1xSDK, "");
        Intrinsics.checkNotNullParameter(aFc1eSDK, "");
        this.getRevenue = str;
        this.getMediationNetwork = context;
        this.getCurrencyIso4217Code = aFi1lSDK;
        this.AFAdRevenueData = aFg1sSDK;
        this.getMonetizationNetwork = aFj1pSDK;
        this.component2 = aFg1vSDK;
        this.component3 = aFh1tSDK;
        this.component1 = aFc1oSDK;
        this.areAllFieldsValid = aFc1pSDK;
        this.component4 = aFi1sSDK;
        this.copy = aFf1cSDK;
        this.equals = aFc1gSDK;
        this.hashCode = aFg1xSDK;
        this.toString = aFc1eSDK;
        this.copydefault = or.l.a(new Function0<AppsFlyerProperties>() { // from class: com.appsflyer.internal.AFg1qSDK.5
            @Override // kotlin.jvm.functions.Function0
            /* renamed from: getCurrencyIso4217Code */
            public final AppsFlyerProperties invoke() {
                return AppsFlyerProperties.getInstance();
            }
        });
        this.AFKeystoreWrapper = or.l.a(new Function0<SimpleDateFormat>() { // from class: com.appsflyer.internal.AFg1qSDK.3
            @Override // kotlin.jvm.functions.Function0
            /* renamed from: AFAdRevenueData */
            public final SimpleDateFormat invoke() {
                return new SimpleDateFormat("yyyy-MM-dd_HHmmssZ", Locale.US);
            }
        });
    }

    private void AFInAppEventParameterName(@NotNull Map<String, Object> map) {
        Intrinsics.checkNotNullParameter(map, "");
        long j10 = this.component3.hashCode;
        if (j10 != 0) {
            f8244w = (f8243i + 41) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            map.put("prev_session_dur", Long.valueOf(j10));
            f8243i = (f8244w + 31) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        f8244w = (f8243i + 111) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    private void AFInAppEventType(@NotNull Map<String, Object> map) {
        getMediationNetwork(new Object[]{this, map}, -2015365334, 2015365335, System.identityHashCode(this));
    }

    private static void AFKeystoreWrapper(@NotNull Map<String, Object> map) {
        int i10 = f8244w + 41;
        f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            Intrinsics.checkNotNullParameter(map, "");
            Object monetizationNetwork = AFa1zSDK.getMonetizationNetwork();
            String revenue = AFa1zSDK.getRevenue();
            if (monetizationNetwork != null && revenue != null && Integer.parseInt(revenue) > 0) {
                f8244w = (f8243i + 57) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                map.put("reinstallCounter", revenue);
                map.put("originalAppsflyerId", monetizationNetwork);
                return;
            }
            return;
        }
        Intrinsics.checkNotNullParameter(map, "");
        AFa1zSDK.getMonetizationNetwork();
        AFa1zSDK.getRevenue();
        throw null;
    }

    private void AFLogger(@NotNull Map<String, Object> map) {
        Intrinsics.checkNotNullParameter(map, "");
        String string = getMonetizationNetwork().getString(AppsFlyerProperties.EXTENSION);
        if (string != null) {
            f8244w = (f8243i + 39) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (string.length() != 0) {
                f8244w = (f8243i + 117) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                map.put(AppsFlyerProperties.EXTENSION, string);
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:24:0x007a  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x0091  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:24:0x007a -> B:20:0x006a). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static void a(java.lang.String r10, java.lang.String r11, int[] r12, int r13, java.lang.Object[] r14) {
        /*
            Method dump skipped, instructions count: 262
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFg1qSDK.a(java.lang.String, java.lang.String, int[], int, java.lang.Object[]):void");
    }

    private void afDebugLog(@NotNull Map<String, Object> map) {
        String str;
        Intrinsics.checkNotNullParameter(map, "");
        if (getMonetizationNetwork().getBoolean(AppsFlyerProperties.COLLECT_FACEBOOK_ATTR_ID, true)) {
            f8243i = (f8244w + 113) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            try {
                this.getMediationNetwork.getPackageManager().getApplicationInfo("com.facebook.katana", 0);
                str = this.areAllFieldsValid.getRevenue(this.getMediationNetwork);
                f8244w = (f8243i + 105) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } catch (Throwable unused) {
                str = null;
            }
            if (str != null) {
                f8244w = (f8243i + 119) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                map.put("fb", str);
            }
        }
    }

    private static long areAllFieldsValid() {
        f8243i = (f8244w + 121) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        long currentTimeMillis = System.currentTimeMillis() - SystemClock.elapsedRealtime();
        f8243i = (f8244w + 3) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return currentTimeMillis;
    }

    private void component1(@NotNull Map<String, Object> map) {
        f8243i = (f8244w + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        AFf1cSDK.getMonetizationNetwork(map, this.areAllFieldsValid);
        int i10 = f8243i + 43;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            throw null;
        }
    }

    private String component2() {
        String string = getMonetizationNetwork().getString(AppsFlyerProperties.AF_STORE_FROM_API);
        if (string == null) {
            f8243i = (f8244w + 75) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            string = getCurrencyIso4217Code("AF_STORE");
        }
        int i10 = f8243i + 95;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            return string;
        }
        throw null;
    }

    private static /* synthetic */ Object component3(Object[] objArr) {
        AFg1qSDK aFg1qSDK = (AFg1qSDK) objArr[0];
        Map map = (Map) objArr[1];
        String str = (String) objArr[2];
        f8243i = (f8244w + 85) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        if (aFg1qSDK.getMonetizationNetwork().getBoolean(AppsFlyerProperties.DEVICE_TRACKING_DISABLED, false)) {
            map.put(AppsFlyerProperties.DEVICE_TRACKING_DISABLED, "true");
            return null;
        }
        String mediationNetwork = aFg1qSDK.copy.getMediationNetwork(aFg1qSDK.component1);
        if (mediationNetwork != null && mediationNetwork.length() != 0) {
            int i10 = f8244w + 87;
            f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                map.put("imei", mediationNetwork);
                int i11 = 7 / 0;
            } else {
                map.put("imei", mediationNetwork);
            }
        }
        String revenue = aFg1qSDK.getRevenue(str);
        if (revenue != null) {
            int i12 = f8244w + 43;
            f8243i = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i12 % 2 == 0) {
                aFg1qSDK.component1.AFAdRevenueData("androidIdCached", revenue);
                map.put("android_id", revenue);
                int i13 = 37 / 0;
            } else {
                aFg1qSDK.component1.AFAdRevenueData("androidIdCached", revenue);
                map.put("android_id", revenue);
            }
        } else {
            AFLogger.afInfoLog("Android ID was not collected.");
        }
        AFb1mSDK currencyIso4217Code = AFb1kSDK.getCurrencyIso4217Code(aFg1qSDK.getMediationNetwork);
        if (currencyIso4217Code != null) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            Boolean bool = currencyIso4217Code.getMediationNetwork;
            Intrinsics.checkNotNullExpressionValue(bool, "");
            linkedHashMap.put("isManual", bool);
            String str2 = currencyIso4217Code.getCurrencyIso4217Code;
            Intrinsics.checkNotNullExpressionValue(str2, "");
            linkedHashMap.put("val", str2);
            Boolean bool2 = currencyIso4217Code.getRevenue;
            if (bool2 != null) {
                linkedHashMap.put("isLat", bool2);
            }
            map.put("oaid", linkedHashMap);
        }
        return null;
    }

    private boolean component4() {
        f8244w = (f8243i + 59) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        boolean parseBoolean = Boolean.parseBoolean(this.component1.getMonetizationNetwork("sentSuccessfully", null));
        f8244w = (f8243i + 69) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return parseBoolean;
    }

    private final void copy(Map<String, Object> map) {
        UiModeManager uiModeManager;
        int i10 = f8244w + 19;
        f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0 && Build.VERSION.SDK_INT < 117) {
            Object systemService = this.getMediationNetwork.getSystemService("uimode");
            uiModeManager = systemService instanceof UiModeManager ? (UiModeManager) systemService : null;
        } else {
            uiModeManager = (UiModeManager) this.getMediationNetwork.getSystemService(UiModeManager.class);
        }
        if (uiModeManager == null || uiModeManager.getCurrentModeType() != 4) {
            return;
        }
        map.put("tv", Boolean.TRUE);
        f8243i = (f8244w + 63) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    private void copydefault(@NotNull Map<String, Object> map) {
        long j10;
        TimeUnit timeUnit;
        long j11;
        Intrinsics.checkNotNullParameter(map, "");
        long currencyIso4217Code = this.component1.getCurrencyIso4217Code("AppsFlyerTimePassedSincePrevLaunch", 0L);
        long currentTimeMillis = System.currentTimeMillis();
        this.component1.getRevenue("AppsFlyerTimePassedSincePrevLaunch", currentTimeMillis);
        if (currencyIso4217Code > 0) {
            int i10 = f8244w + 121;
            f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                timeUnit = TimeUnit.MILLISECONDS;
                j11 = currentTimeMillis % currencyIso4217Code;
            } else {
                timeUnit = TimeUnit.MILLISECONDS;
                j11 = currentTimeMillis - currencyIso4217Code;
            }
            j10 = timeUnit.toSeconds(j11);
        } else {
            f8244w = (f8243i + 13) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            j10 = -1;
        }
        map.put("timepassedsincelastlaunch", String.valueOf(j10));
    }

    private void d(@NotNull Map<String, Object> map) {
        Intrinsics.checkNotNullParameter(map, "");
        if (this.component1.getRevenue("is_stop_tracking_used")) {
            f8243i = (f8244w + 49) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            map.put("istu", String.valueOf(this.component1.getMediationNetwork("is_stop_tracking_used", false)));
            f8243i = (f8244w + 79) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        int i10 = f8243i + 125;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            return;
        }
        throw null;
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x005b, code lost:
        if ((r0 % 2) != 0) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x005d, code lost:
        r4.put("tokenRefreshConfigured", java.lang.Boolean.FALSE);
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0063, code lost:
        r4.put("tokenRefreshConfigured", java.lang.Boolean.FALSE);
     */
    /* JADX WARN: Code restructure failed: missing block: B:13:0x0069, code lost:
        throw null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x002f, code lost:
        if (r0 == false) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x004d, code lost:
        if (r0 == false) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x004f, code lost:
        r0 = com.appsflyer.internal.AFg1qSDK.f8243i + 33;
        com.appsflyer.internal.AFg1qSDK.f8244w = r0 % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void e(@org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> r4) {
        /*
            r3 = this;
            int r0 = com.appsflyer.internal.AFg1qSDK.f8244w
            int r0 = r0 + 5
            int r1 = r0 % 128
            com.appsflyer.internal.AFg1qSDK.f8243i = r1
            int r0 = r0 % 2
            java.lang.String r1 = "didConfigureTokenRefreshService="
            java.lang.String r2 = ""
            if (r0 != 0) goto L32
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r2)
            android.content.Context r0 = r3.getMediationNetwork
            boolean r0 = com.appsflyer.internal.AFg1tSDK.getMediationNetwork(r0)
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            r2.append(r1)
            r2.append(r0)
            java.lang.String r1 = r2.toString()
            com.appsflyer.AFLogger.afDebugLog(r1)
            r1 = 45
            int r1 = r1 / 0
            if (r0 != 0) goto L6a
            goto L4f
        L32:
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r2)
            android.content.Context r0 = r3.getMediationNetwork
            boolean r0 = com.appsflyer.internal.AFg1tSDK.getMediationNetwork(r0)
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            r2.append(r1)
            r2.append(r0)
            java.lang.String r1 = r2.toString()
            com.appsflyer.AFLogger.afDebugLog(r1)
            if (r0 != 0) goto L6a
        L4f:
            int r0 = com.appsflyer.internal.AFg1qSDK.f8243i
            int r0 = r0 + 33
            int r1 = r0 % 128
            com.appsflyer.internal.AFg1qSDK.f8244w = r1
            int r0 = r0 % 2
            java.lang.String r1 = "tokenRefreshConfigured"
            if (r0 != 0) goto L63
            java.lang.Boolean r0 = java.lang.Boolean.FALSE
            r4.put(r1, r0)
            goto L6a
        L63:
            java.lang.Boolean r0 = java.lang.Boolean.FALSE
            r4.put(r1, r0)
            r4 = 0
            throw r4
        L6a:
            com.appsflyer.internal.AFc1oSDK r0 = r3.component1
            boolean r0 = com.appsflyer.internal.AFg1tSDK.getCurrencyIso4217Code(r0)
            java.lang.Boolean r0 = java.lang.Boolean.valueOf(r0)
            java.lang.String r1 = "registeredUninstall"
            r4.put(r1, r0)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFg1qSDK.e(java.util.Map):void");
    }

    /* JADX WARN: Code restructure failed: missing block: B:5:0x0016, code lost:
        if (getMonetizationNetwork().isOtherSdkStringDisabled() == false) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x0021, code lost:
        if (getMonetizationNetwork().isOtherSdkStringDisabled() == false) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0023, code lost:
        r4.put("batteryLevel", java.lang.String.valueOf(r3.AFAdRevenueData.AFAdRevenueData(r3.getMediationNetwork).getRevenue));
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void equals(java.util.Map<java.lang.String, java.lang.Object> r4) {
        /*
            r3 = this;
            int r0 = com.appsflyer.internal.AFg1qSDK.f8244w
            int r0 = r0 + 85
            int r1 = r0 % 128
            com.appsflyer.internal.AFg1qSDK.f8243i = r1
            r1 = 2
            int r0 = r0 % r1
            if (r0 != 0) goto L19
            com.appsflyer.AppsFlyerProperties r0 = r3.getMonetizationNetwork()
            boolean r0 = r0.isOtherSdkStringDisabled()
            int r2 = r1 / 0
            if (r0 != 0) goto L36
            goto L23
        L19:
            com.appsflyer.AppsFlyerProperties r0 = r3.getMonetizationNetwork()
            boolean r0 = r0.isOtherSdkStringDisabled()
            if (r0 != 0) goto L36
        L23:
            com.appsflyer.internal.AFg1sSDK r0 = r3.AFAdRevenueData
            android.content.Context r2 = r3.getMediationNetwork
            com.appsflyer.internal.AFg1sSDK$AFa1uSDK r0 = r0.AFAdRevenueData(r2)
            float r0 = r0.getRevenue
            java.lang.String r2 = "batteryLevel"
            java.lang.String r0 = java.lang.String.valueOf(r0)
            r4.put(r2, r0)
        L36:
            int r4 = com.appsflyer.internal.AFg1qSDK.f8243i
            int r4 = r4 + 69
            int r0 = r4 % 128
            com.appsflyer.internal.AFg1qSDK.f8244w = r0
            int r4 = r4 % r1
            if (r4 != 0) goto L42
            return
        L42:
            r4 = 0
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFg1qSDK.equals(java.util.Map):void");
    }

    @NotNull
    private String getCurrencyIso4217Code(@NotNull SimpleDateFormat simpleDateFormat, int i10) {
        Intrinsics.checkNotNullParameter(simpleDateFormat, "");
        String monetizationNetwork = this.component1.getMonetizationNetwork("appsFlyerFirstInstall", null);
        if (monetizationNetwork == null) {
            int i11 = f8243i + 125;
            f8244w = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0 ? i10 > 1 : i10 > 0) {
                monetizationNetwork = "";
            } else {
                AFLogger.afDebugLog("AppsFlyer: first launch detected");
                String format = simpleDateFormat.format(new Date());
                f8244w = (f8243i + 121) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                monetizationNetwork = format;
            }
            this.component1.AFAdRevenueData("appsFlyerFirstInstall", monetizationNetwork);
            f8243i = (f8244w + 59) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        AFLogger aFLogger = AFLogger.INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.GENERAL;
        AFh1ySDK.i$default(aFLogger, aFg1cSDK, "AppsFlyer: first launch date: " + monetizationNetwork, false, 4, null);
        Intrinsics.checkNotNullExpressionValue(monetizationNetwork, "");
        return monetizationNetwork;
    }

    public static /* synthetic */ Object getMediationNetwork(Object[] objArr, int i10, int i11, int i12) {
        int i13 = (i10 * 50) + (i11 * (-97));
        int i14 = ~i11;
        int i15 = ~i12;
        switch (i13 + (((~(i14 | i15)) | (~(i14 | i10))) * 98) + (((~(i15 | (~i10))) | i14 | (~(i10 | i12))) * (-49)) + (((~(i10 | i11)) | (~(i12 | i14))) * 49)) {
            case 1:
                return AFAdRevenueData(objArr);
            case 2:
                return getMonetizationNetwork(objArr);
            case 3:
                return getRevenue(objArr);
            case 4:
                return getMediationNetwork(objArr);
            case 5:
                return areAllFieldsValid(objArr);
            case 6:
                return component1(objArr);
            case 7:
                return component3(objArr);
            case 8:
                return component2(objArr);
            case 9:
                return component4(objArr);
            case 10:
                return copydefault(objArr);
            case 11:
                AFg1qSDK aFg1qSDK = (AFg1qSDK) objArr[0];
                if (!aFg1qSDK.getMonetizationNetwork().getBoolean(AppsFlyerProperties.COLLECT_ANDROID_ID_FORCE_BY_USER, false)) {
                    f8243i = (f8244w + 57) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (!aFg1qSDK.getMonetizationNetwork().getBoolean(AppsFlyerProperties.COLLECT_IMEI_FORCE_BY_USER, false)) {
                        f8244w = (f8243i + 81) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        AFa1uSDK.getMonetizationNetwork();
                        if (AFa1uSDK.getRevenue(aFg1qSDK.getMediationNetwork)) {
                            f8243i = (f8244w + 59) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                            return Boolean.FALSE;
                        }
                        return Boolean.TRUE;
                    }
                }
                f8244w = (f8243i + 93) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return Boolean.TRUE;
            case 12:
                f8244w = (f8243i + 83) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                Long valueOf = Long.valueOf(((AFg1qSDK) objArr[0]).areAllFieldsValid.n_().firstInstallTime);
                f8243i = (f8244w + 45) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return valueOf;
            default:
                return getCurrencyIso4217Code(objArr);
        }
    }

    private final AppsFlyerProperties getMonetizationNetwork() {
        int i10 = f8243i + 79;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            int i11 = 88 / 0;
            return (AppsFlyerProperties) this.copydefault.getValue();
        }
        return (AppsFlyerProperties) this.copydefault.getValue();
    }

    private void hashCode(@NotNull Map<String, Object> map) {
        int i10 = f8244w + 101;
        f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            Intrinsics.checkNotNullParameter(map, "");
            map.put("is_pc", Boolean.valueOf(this.getMediationNetwork.getApplicationContext().getPackageManager().hasSystemFeature("com.google.android.play.feature.HPE_EXPERIENCE")));
            return;
        }
        Intrinsics.checkNotNullParameter(map, "");
        map.put("is_pc", Boolean.valueOf(this.getMediationNetwork.getApplicationContext().getPackageManager().hasSystemFeature("com.google.android.play.feature.HPE_EXPERIENCE")));
        throw null;
    }

    private void i(@NotNull Map<String, Object> map) {
        AFb1mSDK l_;
        int i10 = f8243i + 57;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            Intrinsics.checkNotNullParameter(map, "");
            l_ = AFb1kSDK.l_(this.getMediationNetwork.getContentResolver());
            int i11 = 54 / 0;
            if (l_ == null) {
                return;
            }
        } else {
            Intrinsics.checkNotNullParameter(map, "");
            l_ = AFb1kSDK.l_(this.getMediationNetwork.getContentResolver());
            if (l_ == null) {
                return;
            }
        }
        f8243i = (f8244w + 97) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        map.put("amazon_aid", l_.getCurrencyIso4217Code);
        map.put("amazon_aid_limit", String.valueOf(l_.getRevenue));
    }

    private void registerClient(@NotNull Map<String, Object> map) {
        f8243i = (f8244w + 51) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        map.put("af_preinstalled", String.valueOf(this.areAllFieldsValid.getMediationNetwork(this.getMediationNetwork)));
        int i10 = f8244w + 91;
        f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return;
        }
        throw null;
    }

    private final void toString(Map<String, Object> map) {
        int i10 = f8243i + 117;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            if (AFg1kSDK.AFAdRevenueData(this.getMediationNetwork)) {
                map.put("inst_app", Boolean.TRUE);
                f8243i = (f8244w + 29) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return;
            }
            return;
        }
        AFg1kSDK.AFAdRevenueData(this.getMediationNetwork);
        throw null;
    }

    private static void unregisterClient(@NotNull Map<String, Object> map) {
        getMediationNetwork(new Object[]{map}, -43428876, 43428885, (int) System.currentTimeMillis());
    }

    private void w(@NotNull Map<String, Object> map) {
        int i10 = f8243i + 31;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            Intrinsics.checkNotNullParameter(map, "");
            String mediationNetwork = this.copy.getMediationNetwork();
            if (mediationNetwork != null && mediationNetwork.length() != 0) {
                int i11 = f8244w + 83;
                f8243i = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i11 % 2 != 0) {
                    map.put("appsflyerKey", mediationNetwork);
                    return;
                } else {
                    map.put("appsflyerKey", mediationNetwork);
                    throw null;
                }
            }
            return;
        }
        Intrinsics.checkNotNullParameter(map, "");
        this.copy.getMediationNetwork();
        throw null;
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void AFAdRevenueData(@NotNull AFh1jSDK aFh1jSDK) {
        boolean z10;
        AFd1aSDK aFd1aSDK;
        Intrinsics.checkNotNullParameter(aFh1jSDK, "");
        if (!this.areAllFieldsValid.component1()) {
            int i10 = f8243i + 37;
            f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                Map<String, Object> monetizationNetwork = AFa1uSDK.getMonetizationNetwork(aFh1jSDK.getCurrencyIso4217Code);
                Intrinsics.checkNotNullExpressionValue(monetizationNetwork, "");
                monetizationNetwork.put("ad_ids_disabled", Boolean.TRUE);
            } else {
                Map<String, Object> monetizationNetwork2 = AFa1uSDK.getMonetizationNetwork(aFh1jSDK.getCurrencyIso4217Code);
                Intrinsics.checkNotNullExpressionValue(monetizationNetwork2, "");
                monetizationNetwork2.put("ad_ids_disabled", Boolean.TRUE);
                throw null;
            }
        } else {
            AFh1pSDK aFh1pSDK = this.areAllFieldsValid.AFAdRevenueData.component2;
            if (aFh1pSDK == null) {
                f8243i = (f8244w + 101) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return;
            }
            String str = aFh1pSDK.component1;
            if (str != null && str.length() != 0) {
                aFh1jSDK.getMonetizationNetwork("gaidError", aFh1pSDK.component1);
            }
            String str2 = aFh1pSDK.getRevenue;
            if (str2 != null) {
                f8243i = (f8244w + 121) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (aFh1pSDK.getMediationNetwork != null) {
                    aFh1jSDK.getMonetizationNetwork("advertiserId", str2);
                    aFh1jSDK.getMonetizationNetwork("advertiserIdEnabled", String.valueOf(aFh1pSDK.getMediationNetwork));
                    aFh1jSDK.getMonetizationNetwork("isGaidWithGps", String.valueOf(aFh1pSDK.getCurrencyIso4217Code));
                }
            }
        }
        AFh1pSDK aFh1pSDK2 = this.areAllFieldsValid.AFAdRevenueData.component2;
        if (aFh1pSDK2 != null) {
            f8243i = (f8244w + 45) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            z10 = Intrinsics.areEqual(aFh1pSDK2.component2, Boolean.TRUE);
        } else {
            z10 = false;
        }
        aFh1jSDK.getMonetizationNetwork("GAID_retry", String.valueOf(z10));
        if (!CollectionsKt.o(AFe1mSDK.CONVERSION, AFe1mSDK.LAUNCH).contains(aFh1jSDK.getCurrencyIso4217Code()) || (aFd1aSDK = this.toString.component4) == null) {
            return;
        }
        int i11 = f8244w + 7;
        f8243i = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 != 0) {
            Map<String, Object> monetizationNetwork3 = AFa1uSDK.getMonetizationNetwork(aFh1jSDK.getCurrencyIso4217Code);
            Intrinsics.checkNotNullExpressionValue(monetizationNetwork3, "");
            monetizationNetwork3.put("fetchAdIdLatency", Long.valueOf(aFd1aSDK.getRevenue));
            int i12 = f8243i + 33;
            f8244w = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i12 % 2 != 0) {
                int i13 = 92 / 0;
                return;
            }
            return;
        }
        Map<String, Object> monetizationNetwork4 = AFa1uSDK.getMonetizationNetwork(aFh1jSDK.getCurrencyIso4217Code);
        Intrinsics.checkNotNullExpressionValue(monetizationNetwork4, "");
        monetizationNetwork4.put("fetchAdIdLatency", Long.valueOf(aFd1aSDK.getRevenue));
        throw null;
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getRevenue(@NotNull Map<String, Object> map) {
        Intrinsics.checkNotNullParameter(map, "");
        AFi1pSDK aFi1pSDK = this.component4.getMediationNetwork;
        AFi1tSDK AFAdRevenueData = aFi1pSDK != null ? aFi1pSDK.AFAdRevenueData() : null;
        if (AFAdRevenueData != null) {
            map.put("network", AFAdRevenueData.getRevenue);
            map.put("ivc", Boolean.valueOf(AFAdRevenueData.getCurrencyIso4217Code()));
            if (!getMonetizationNetwork().getBoolean(AppsFlyerProperties.DISABLE_NETWORK_DATA, false)) {
                f8244w = (f8243i + 89) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                String str = AFAdRevenueData.getCurrencyIso4217Code;
                if (str != null) {
                    map.put("operator", str);
                }
                String str2 = AFAdRevenueData.getMediationNetwork;
                if (str2 != null) {
                    map.put("carrier", str2);
                    return;
                }
            } else {
                f8244w = (f8243i + 95) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            int i10 = f8243i + 7;
            f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                throw null;
            }
        }
    }

    private static /* synthetic */ Object areAllFieldsValid(Object[] objArr) {
        Map map = (Map) objArr[1];
        Intrinsics.checkNotNullParameter(map, "");
        AFh1tSDK aFh1tSDK = ((AFg1qSDK) objArr[0]).component3;
        HashMap hashMap = new HashMap(aFh1tSDK.AFAdRevenueData);
        aFh1tSDK.AFAdRevenueData.clear();
        aFh1tSDK.getCurrencyIso4217Code.getCurrencyIso4217Code("gcd");
        Intrinsics.checkNotNullExpressionValue(hashMap, "");
        if (!hashMap.isEmpty()) {
            int i10 = (f8243i + 111) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            f8244w = i10;
            int i11 = i10 + 31;
            f8243i = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                Map<String, Object> monetizationNetwork = AFa1uSDK.getMonetizationNetwork(map);
                Intrinsics.checkNotNullExpressionValue(monetizationNetwork, "");
                monetizationNetwork.put("gcd", hashMap);
                int i12 = 88 / 0;
                return null;
            }
            Map<String, Object> monetizationNetwork2 = AFa1uSDK.getMonetizationNetwork(map);
            Intrinsics.checkNotNullExpressionValue(monetizationNetwork2, "");
            monetizationNetwork2.put("gcd", hashMap);
            return null;
        }
        f8244w = (f8243i + 29) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return null;
    }

    private static /* synthetic */ Object component4(Object[] objArr) {
        Map map = (Map) objArr[0];
        int i10 = f8243i + 107;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        try {
        } catch (Exception e10) {
            AFLogger.afErrorLog("Exception while collecting display language name. ", e10);
        }
        if (i10 % 2 == 0) {
            Intrinsics.checkNotNullParameter(map, "");
            map.put("lang", Locale.getDefault().getDisplayLanguage());
            try {
                map.put("lang_code", Locale.getDefault().getLanguage());
                f8243i = (f8244w + 51) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } catch (Exception e11) {
                AFLogger.afErrorLog("Exception while collecting display language code. ", e11);
            }
            try {
                map.put(AdRevenueScheme.COUNTRY, Locale.getDefault().getCountry());
                return null;
            } catch (Exception e12) {
                AFLogger.afErrorLog("Exception while collecting country name. ", e12);
                return null;
            }
        }
        Intrinsics.checkNotNullParameter(map, "");
        map.put("lang", Locale.getDefault().getDisplayLanguage());
        throw null;
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getMonetizationNetwork(@NotNull AFh1jSDK aFh1jSDK) {
        f8244w = (f8243i + 21) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(aFh1jSDK, "");
        Map<String, Object> map = aFh1jSDK.getCurrencyIso4217Code;
        if (aFh1jSDK.getMediationNetwork()) {
            String str = aFh1jSDK.areAllFieldsValid;
            AFc1eSDK aFc1eSDK = this.toString;
            getCurrencyIso4217Code(aFh1jSDK, str, aFc1eSDK.getMonetizationNetwork, aFc1eSDK.getCurrencyIso4217Code);
        } else if (!(aFh1jSDK instanceof AFh1fSDK)) {
            Intrinsics.checkNotNullExpressionValue(map, "");
            String str2 = aFh1jSDK.component4;
            Intrinsics.checkNotNullExpressionValue(str2, "");
            getMediationNetwork(new Object[]{this, map, str2}, 1127076864, -1127076862, System.identityHashCode(this));
        }
        if (CollectionsKt.o(AFe1mSDK.CONVERSION, AFe1mSDK.LAUNCH, AFe1mSDK.INAPP).contains(aFh1jSDK.getCurrencyIso4217Code())) {
            Intrinsics.checkNotNullExpressionValue(map, "");
            hashCode(map);
        }
        if (aFh1jSDK.getMonetizationNetwork()) {
            f8243i = (f8244w + 29) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            Intrinsics.checkNotNullExpressionValue(map, "");
            component1(map);
            f8243i = (f8244w + 81) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        Intrinsics.checkNotNullExpressionValue(map, "");
        w(map);
        AFKeystoreWrapper(map);
        getMediationNetwork(new Object[]{this, map}, -2015365334, 2015365335, System.identityHashCode(this));
        AFLogger(map);
        getMediationNetwork(map);
        AFAdRevenueData(map, aFh1jSDK.getMediationNetwork());
        e(map);
        d(map);
        AFAdRevenueData(map, aFh1jSDK);
        map.put("af_events_api", "1");
    }

    private static /* synthetic */ Object component2(Object[] objArr) {
        AFg1qSDK aFg1qSDK = (AFg1qSDK) objArr[0];
        f8244w = (f8243i + 79) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        String monetizationNetwork = aFg1qSDK.component1.getMonetizationNetwork("androidIdCached", null);
        try {
            String string = Settings.Secure.getString(aFg1qSDK.getMediationNetwork.getContentResolver(), "android_id");
            if (string != null) {
                f8244w = (f8243i + 13) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return string;
            }
        } catch (Exception e10) {
            AFLogger.afErrorLog(e10.getMessage(), e10);
        }
        if (monetizationNetwork != null) {
            AFLogger.afDebugLog("use cached AndroidId: " + monetizationNetwork);
            int i10 = f8244w + 3;
            f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                return monetizationNetwork;
            }
            throw null;
        }
        return null;
    }

    private static /* synthetic */ Object component1(Object[] objArr) {
        AFg1qSDK aFg1qSDK = (AFg1qSDK) objArr[0];
        Map map = (Map) objArr[1];
        AFg1sSDK.AFa1uSDK AFAdRevenueData = aFg1qSDK.AFAdRevenueData.AFAdRevenueData(aFg1qSDK.getMediationNetwork);
        float f10 = AFAdRevenueData.getRevenue;
        String str = AFAdRevenueData.AFAdRevenueData;
        map.put("btl", String.valueOf(f10));
        if (str != null) {
            f8243i = (f8244w + 95) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            map.put("btch", str);
        }
        int i10 = f8243i + 31;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            int i11 = 14 / 0;
        }
        return null;
    }

    private final String equals() {
        File AFAdRevenueData = AFAdRevenueData(getMediationNetwork("ro.appsflyer.preinstall.path"));
        if (getMonetizationNetwork(AFAdRevenueData)) {
            AFAdRevenueData = AFAdRevenueData(getCurrencyIso4217Code("AF_PRE_INSTALL_PATH"));
        }
        if (getMonetizationNetwork(AFAdRevenueData)) {
            AFAdRevenueData = AFAdRevenueData("/data/local/tmp/pre_install.appsflyer");
        }
        if (getMonetizationNetwork(AFAdRevenueData)) {
            AFAdRevenueData = AFAdRevenueData("/etc/pre_install.appsflyer");
            f8244w = (f8243i + 51) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        if (getMonetizationNetwork(AFAdRevenueData)) {
            f8243i = (f8244w + 101) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return null;
        }
        String packageName = this.getMediationNetwork.getPackageName();
        Intrinsics.checkNotNullExpressionValue(packageName, "");
        return getMonetizationNetwork(AFAdRevenueData, packageName);
    }

    private final boolean copy() {
        return ((Boolean) getMediationNetwork(new Object[]{this}, -932948428, 932948439, System.identityHashCode(this))).booleanValue();
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x004e, code lost:
        if (r1.toString.equals != null) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:13:0x0062, code lost:
        if (r1.toString.equals != null) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x0064, code lost:
        com.appsflyer.internal.AFg1qSDK.f8244w = (com.appsflyer.internal.AFg1qSDK.f8243i + 93) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        com.appsflyer.internal.AFh1ySDK.i$default(com.appsflyer.AFLogger.INSTANCE, com.appsflyer.internal.AFg1cSDK.APP_SET_ID, "App Set Id was collected, but will not be included in the payload.To prevent collection entirely, call disableAppSetId() before initializing the SDK.", false, 4, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x0078, code lost:
        return null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x0079, code lost:
        com.appsflyer.internal.AFh1ySDK.i$default(com.appsflyer.AFLogger.INSTANCE, com.appsflyer.internal.AFg1cSDK.APP_SET_ID, "App Set ID collection is disabled. Skipping inclusion in the event payload.", false, 4, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0087, code lost:
        return null;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static /* synthetic */ java.lang.Object copydefault(java.lang.Object[] r18) {
        /*
            r0 = 0
            r1 = r18[r0]
            com.appsflyer.internal.AFg1qSDK r1 = (com.appsflyer.internal.AFg1qSDK) r1
            r2 = 1
            r2 = r18[r2]
            java.util.Map r2 = (java.util.Map) r2
            r3 = 2
            r4 = r18[r3]
            com.appsflyer.internal.AFe1mSDK r4 = (com.appsflyer.internal.AFe1mSDK) r4
            java.lang.String r5 = ""
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r5)
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r5)
            java.util.List r5 = copydefault()
            boolean r4 = r5.contains(r4)
            r5 = 0
            if (r4 != 0) goto L23
            return r5
        L23:
            com.appsflyer.internal.AFc1eSDK r4 = r1.toString
            boolean r4 = r4.getMediationNetwork()
            java.lang.String r6 = "app_set_id"
            if (r4 == 0) goto L88
            int r4 = com.appsflyer.internal.AFg1qSDK.f8243i
            int r4 = r4 + 55
            int r7 = r4 % 128
            com.appsflyer.internal.AFg1qSDK.f8244w = r7
            int r4 = r4 % r3
            java.lang.String r3 = "app_set_id_disabled"
            if (r4 == 0) goto L51
            java.lang.Boolean r4 = java.lang.Boolean.TRUE
            kotlin.Pair r3 = or.v.a(r3, r4)
            java.util.Map r3 = kotlin.collections.o0.f(r3)
            r2.put(r6, r3)
            com.appsflyer.internal.AFc1eSDK r1 = r1.toString
            com.appsflyer.internal.AFb1gSDK r1 = r1.equals
            r2 = 15
            int r2 = r2 / r0
            if (r1 == 0) goto L79
            goto L64
        L51:
            java.lang.Boolean r0 = java.lang.Boolean.TRUE
            kotlin.Pair r0 = or.v.a(r3, r0)
            java.util.Map r0 = kotlin.collections.o0.f(r0)
            r2.put(r6, r0)
            com.appsflyer.internal.AFc1eSDK r0 = r1.toString
            com.appsflyer.internal.AFb1gSDK r0 = r0.equals
            if (r0 == 0) goto L79
        L64:
            int r0 = com.appsflyer.internal.AFg1qSDK.f8243i
            int r0 = r0 + 93
            int r0 = r0 % 128
            com.appsflyer.internal.AFg1qSDK.f8244w = r0
            com.appsflyer.AFLogger r6 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r7 = com.appsflyer.internal.AFg1cSDK.APP_SET_ID
            r10 = 4
            r11 = 0
            java.lang.String r8 = "App Set Id was collected, but will not be included in the payload.To prevent collection entirely, call disableAppSetId() before initializing the SDK."
            r9 = 0
            com.appsflyer.internal.AFh1ySDK.i$default(r6, r7, r8, r9, r10, r11)
            return r5
        L79:
            com.appsflyer.AFLogger r12 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r13 = com.appsflyer.internal.AFg1cSDK.APP_SET_ID
            r16 = 4
            r17 = 0
            java.lang.String r14 = "App Set ID collection is disabled. Skipping inclusion in the event payload."
            r15 = 0
            com.appsflyer.internal.AFh1ySDK.i$default(r12, r13, r14, r15, r16, r17)
            return r5
        L88:
            com.appsflyer.internal.AFc1eSDK r0 = r1.toString
            com.appsflyer.internal.AFb1gSDK r0 = r0.equals
            if (r0 == 0) goto Lba
            int r1 = r0.getRevenue
            java.lang.Integer r1 = java.lang.Integer.valueOf(r1)
            java.lang.String r4 = "scope"
            kotlin.Pair r1 = or.v.a(r4, r1)
            java.lang.String r4 = "id"
            java.lang.String r0 = r0.getCurrencyIso4217Code
            kotlin.Pair r0 = or.v.a(r4, r0)
            kotlin.Pair[] r0 = new kotlin.Pair[]{r1, r0}
            java.util.Map r0 = kotlin.collections.o0.m(r0)
            r2.put(r6, r0)
            int r0 = com.appsflyer.internal.AFg1qSDK.f8243i
            int r0 = r0 + 19
            int r1 = r0 % 128
            com.appsflyer.internal.AFg1qSDK.f8244w = r1
            int r0 = r0 % r3
            if (r0 != 0) goto Lb9
            return r5
        Lb9:
            throw r5
        Lba:
            int r0 = com.appsflyer.internal.AFg1qSDK.f8244w
            int r0 = r0 + 103
            int r1 = r0 % 128
            com.appsflyer.internal.AFg1qSDK.f8243i = r1
            int r0 = r0 % r3
            if (r0 == 0) goto Lc6
            return r5
        Lc6:
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFg1qSDK.copydefault(java.lang.Object[]):java.lang.Object");
    }

    private final SimpleDateFormat getMediationNetwork() {
        f8244w = (f8243i + 87) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        SimpleDateFormat simpleDateFormat = (SimpleDateFormat) this.AFKeystoreWrapper.getValue();
        int i10 = f8244w + 45;
        f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return simpleDateFormat;
        }
        throw null;
    }

    private void component2(@NotNull Map<String, ? extends Object> map) {
        getMediationNetwork(new Object[]{this, map}, -2029029470, 2029029475, System.identityHashCode(this));
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getMediationNetwork(@NotNull AFh1jSDK aFh1jSDK) {
        f8244w = (f8243i + 55) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(aFh1jSDK, "");
        Map<String, Object> map = aFh1jSDK.getCurrencyIso4217Code;
        Intrinsics.checkNotNullExpressionValue(map, "");
        AFAdRevenueData(map);
        Map<String, Object> map2 = aFh1jSDK.getCurrencyIso4217Code;
        Intrinsics.checkNotNullExpressionValue(map2, "");
        getCurrencyIso4217Code(map2, aFh1jSDK.component1);
        Map<String, Object> map3 = aFh1jSDK.getCurrencyIso4217Code;
        Intrinsics.checkNotNullExpressionValue(map3, "");
        AFAdRevenueData(map3, aFh1jSDK.component1);
        Map<String, Object> map4 = aFh1jSDK.getCurrencyIso4217Code;
        Intrinsics.checkNotNullExpressionValue(map4, "");
        registerClient(map4);
        Map<String, Object> map5 = aFh1jSDK.getCurrencyIso4217Code;
        Intrinsics.checkNotNullExpressionValue(map5, "");
        afDebugLog(map5);
        Map<String, Object> map6 = aFh1jSDK.getCurrencyIso4217Code;
        Intrinsics.checkNotNullExpressionValue(map6, "");
        AFe1mSDK currencyIso4217Code = aFh1jSDK.getCurrencyIso4217Code();
        Intrinsics.checkNotNullExpressionValue(currencyIso4217Code, "");
        getMediationNetwork(new Object[]{this, map6, currencyIso4217Code}, -1926240735, 1926240745, System.identityHashCode(this));
        int i10 = f8243i + 119;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            throw null;
        }
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getCurrencyIso4217Code(@NotNull Map<String, Object> map, int i10, int i11) {
        boolean z10;
        Intrinsics.checkNotNullParameter(map, "");
        map.put("counter", String.valueOf(i10));
        map.put("iaecounter", String.valueOf(i11));
        if (component4()) {
            f8244w = (f8243i + 61) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            z10 = false;
        } else {
            f8243i = (f8244w + 115) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            z10 = true;
        }
        map.put("isFirstCall", String.valueOf(z10));
        f8243i = (f8244w + 37) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @SuppressLint({"HardwareIds"})
    private final String component1() {
        return (String) getMediationNetwork(new Object[]{this}, 969328908, -969328900, System.identityHashCode(this));
    }

    private static void areAllFieldsValid(@NotNull Map<String, Object> map) {
        f8244w = (f8243i + 59) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        Object[] objArr = new Object[1];
        a(null, "\u008f\u0089\u0087\u0083\u008e", null, (AudioTrack.getMaxVolume() > 0.0f ? 1 : (AudioTrack.getMaxVolume() == 0.0f ? 0 : -1)) + 126, objArr);
        map.put(((String) objArr[0]).intern(), Build.BRAND);
        map.put("device", Build.DEVICE);
        map.put("product", Build.PRODUCT);
        map.put("sdk", String.valueOf(Build.VERSION.SDK_INT));
        map.put("model", Build.MODEL);
        map.put("deviceType", Build.TYPE);
        f8244w = (f8243i + 21) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    private final void component4(Map<String, Object> map) {
        getMediationNetwork(new Object[]{this, map}, -217749996, 217750002, System.identityHashCode(this));
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getRevenue(@NotNull AFh1jSDK aFh1jSDK) {
        int i10 = f8243i + 89;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            Intrinsics.checkNotNullParameter(aFh1jSDK, "");
            Map<String, Object> map = aFh1jSDK.getCurrencyIso4217Code;
            Intrinsics.checkNotNullExpressionValue(map, "");
            map.put("open_referrer", aFh1jSDK.getMediationNetwork);
            String str = aFh1jSDK.component2;
            if (str == null || StringsKt.k0(str)) {
                return;
            }
            int i11 = f8243i + 41;
            f8244w = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                map.put("af_web_referrer", aFh1jSDK.component2);
                return;
            } else {
                map.put("af_web_referrer", aFh1jSDK.component2);
                throw null;
            }
        }
        Intrinsics.checkNotNullParameter(aFh1jSDK, "");
        Map<String, Object> map2 = aFh1jSDK.getCurrencyIso4217Code;
        Intrinsics.checkNotNullExpressionValue(map2, "");
        map2.put("open_referrer", aFh1jSDK.getMediationNetwork);
        throw null;
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x0078, code lost:
        if (r6.areAllFieldsValid.getMonetizationNetwork.getMediationNetwork("appsFlyerCount", 0) <= 2) goto L7;
     */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x007a, code lost:
        r8 = com.appsflyer.internal.AFg1qSDK.f8243i + 85;
        com.appsflyer.internal.AFg1qSDK.f8244w = r8 % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0083, code lost:
        if ((r8 % 2) != 0) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:13:0x0085, code lost:
        r0.putAll(r6.getMonetizationNetwork.AFAdRevenueData());
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x008f, code lost:
        r0.putAll(r6.getMonetizationNetwork.AFAdRevenueData());
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x0099, code lost:
        throw null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:7:0x0061, code lost:
        if (r6.areAllFieldsValid.getMonetizationNetwork.getMediationNetwork("appsFlyerCount", 1) <= 5) goto L7;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void getCurrencyIso4217Code(@org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> r7, boolean r8) {
        /*
            r6 = this;
            java.lang.String r0 = ""
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r7, r0)
            java.util.HashMap r0 = new java.util.HashMap
            r0.<init>()
            java.lang.String r1 = "ro.product.cpu.abi"
            java.lang.String r1 = getMediationNetwork(r1)
            java.lang.String r2 = "cpu_abi"
            r0.put(r2, r1)
            java.lang.String r1 = "ro.product.cpu.abi2"
            java.lang.String r1 = getMediationNetwork(r1)
            java.lang.String r2 = "cpu_abi2"
            r0.put(r2, r1)
            java.lang.String r1 = "os.arch"
            java.lang.String r1 = getMediationNetwork(r1)
            java.lang.String r2 = "arch"
            r0.put(r2, r1)
            java.lang.String r1 = "ro.build.display.id"
            java.lang.String r1 = getMediationNetwork(r1)
            java.lang.String r2 = "build_display_id"
            r0.put(r2, r1)
            if (r8 == 0) goto L9a
            int r8 = com.appsflyer.internal.AFg1qSDK.f8244w
            int r8 = r8 + 41
            int r1 = r8 % 128
            com.appsflyer.internal.AFg1qSDK.f8243i = r1
            r1 = 2
            int r8 = r8 % r1
            java.lang.String r2 = "appsFlyerCount"
            r3 = 217750002(0xcfa99f2, float:3.8611251E-31)
            r4 = -217749996(0xfffffffff3056614, float:-1.0568937E31)
            if (r8 != 0) goto L64
            java.lang.Object[] r8 = new java.lang.Object[]{r6, r0}
            int r5 = java.lang.System.identityHashCode(r6)
            getMediationNetwork(r8, r4, r3, r5)
            com.appsflyer.internal.AFc1pSDK r8 = r6.areAllFieldsValid
            com.appsflyer.internal.AFc1oSDK r8 = r8.getMonetizationNetwork
            r3 = 1
            int r8 = r8.getMediationNetwork(r2, r3)
            r2 = 5
            if (r8 > r2) goto L9a
            goto L7a
        L64:
            java.lang.Object[] r8 = new java.lang.Object[]{r6, r0}
            int r5 = java.lang.System.identityHashCode(r6)
            getMediationNetwork(r8, r4, r3, r5)
            com.appsflyer.internal.AFc1pSDK r8 = r6.areAllFieldsValid
            com.appsflyer.internal.AFc1oSDK r8 = r8.getMonetizationNetwork
            r3 = 0
            int r8 = r8.getMediationNetwork(r2, r3)
            if (r8 > r1) goto L9a
        L7a:
            int r8 = com.appsflyer.internal.AFg1qSDK.f8243i
            int r8 = r8 + 85
            int r2 = r8 % 128
            com.appsflyer.internal.AFg1qSDK.f8244w = r2
            int r8 = r8 % r1
            if (r8 != 0) goto L8f
            com.appsflyer.internal.AFj1pSDK r8 = r6.getMonetizationNetwork
            java.util.Map r8 = r8.AFAdRevenueData()
            r0.putAll(r8)
            goto L9a
        L8f:
            com.appsflyer.internal.AFj1pSDK r7 = r6.getMonetizationNetwork
            java.util.Map r7 = r7.AFAdRevenueData()
            r0.putAll(r7)
            r7 = 0
            throw r7
        L9a:
            com.appsflyer.internal.AFg1vSDK r8 = r6.component2
            android.content.Context r1 = r6.getMediationNetwork
            java.util.Map r8 = r8.getMediationNetwork(r1)
            java.lang.String r1 = "dim"
            r0.put(r1, r8)
            java.lang.String r8 = "deviceData"
            r7.put(r8, r0)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFg1qSDK.getCurrencyIso4217Code(java.util.Map, boolean):void");
    }

    private void component3(@NotNull Map<String, Object> map) {
        getMediationNetwork(new Object[]{this, map}, 1978462197, -1978462194, System.identityHashCode(this));
    }

    @NotNull
    private static String component3() {
        return (String) getMediationNetwork(new Object[0], -879088668, 879088672, (int) System.currentTimeMillis());
    }

    private static /* synthetic */ Object getMediationNetwork(Object[] objArr) {
        StatFs statFs = new StatFs(Environment.getDataDirectory().getAbsolutePath());
        long blockSizeLong = statFs.getBlockSizeLong();
        long availableBlocksLong = statFs.getAvailableBlocksLong() * blockSizeLong;
        long blockCountLong = statFs.getBlockCountLong() * blockSizeLong;
        double pow = Math.pow(2.0d, 20.0d);
        String str = ((long) (availableBlocksLong / pow)) + "/" + ((long) (blockCountLong / pow));
        int i10 = f8244w + 117;
        f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return str;
        }
        throw null;
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getMonetizationNetwork(@NotNull Map<String, Object> map) {
        Object b10;
        f8243i = (f8244w + 27) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        String str = this.toString.getMediationNetwork;
        if (str != null) {
            int i10 = f8243i + 25;
            f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                if (map.get("af_deeplink") != null) {
                    AFLogger.afDebugLog("Skip 'af' payload as deeplink was found by path");
                } else {
                    try {
                        Result.a aVar = Result.f31985e;
                        JSONObject jSONObject = new JSONObject(str);
                        jSONObject.put("isPush", "true");
                        map.put("af_deeplink", jSONObject.toString());
                        b10 = Result.b(Unit.f31988a);
                    } catch (Throwable th2) {
                        Result.a aVar2 = Result.f31985e;
                        b10 = Result.b(kotlin.c.a(th2));
                    }
                    Throwable e10 = Result.e(b10);
                    if (e10 != null) {
                        f8243i = (f8244w + 123) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        AFh1ySDK.e$default(AFLogger.INSTANCE, AFg1cSDK.GENERAL, "Exception while trying to create JSONObject from pushPayload", e10, false, false, false, false, 120, null);
                    }
                    Result.a(b10);
                }
            } else {
                map.get("af_deeplink");
                throw null;
            }
        }
        this.toString.getMediationNetwork = null;
        f8244w = (f8243i + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    private static /* synthetic */ Object getRevenue(Object[] objArr) {
        AFg1qSDK aFg1qSDK = (AFg1qSDK) objArr[0];
        Map map = (Map) objArr[1];
        int i10 = f8243i + 77;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            Intrinsics.checkNotNullParameter(map, "");
            String string = aFg1qSDK.getMonetizationNetwork().getString(AppsFlyerProperties.ONELINK_ID);
            String string2 = aFg1qSDK.getMonetizationNetwork().getString(AppsFlyerProperties.ONELINK_VERSION);
            if (string != null) {
                map.put("onelink_id", string);
            }
            if (string2 != null) {
                map.put("onelink_ver", string2);
                f8244w = (f8243i + 121) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            return null;
        }
        Intrinsics.checkNotNullParameter(map, "");
        aFg1qSDK.getMonetizationNetwork().getString(AppsFlyerProperties.ONELINK_ID);
        aFg1qSDK.getMonetizationNetwork().getString(AppsFlyerProperties.ONELINK_VERSION);
        throw null;
    }

    private static List<AFe1mSDK> copydefault() {
        f8244w = (f8243i + 103) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        List<AFe1mSDK> o10 = CollectionsKt.o(AFe1mSDK.CONVERSION, AFe1mSDK.LAUNCH, AFe1mSDK.INAPP, AFe1mSDK.MANUAL_PURCHASE_VALIDATION, AFe1mSDK.ARS_VALIDATE, AFe1mSDK.PURCHASE_VALIDATE, AFe1mSDK.ADREVENUE);
        f8244w = (f8243i + 67) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return o10;
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getMediationNetwork(@NotNull Map<String, Object> map) {
        f8243i = (f8244w + 77) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        String revenue = AFb1jSDK.getRevenue(this.areAllFieldsValid.getMonetizationNetwork);
        if (revenue != null) {
            map.put("uid", revenue);
            boolean mediationNetwork = this.areAllFieldsValid.getMonetizationNetwork.getMediationNetwork("CUSTOM_INSTALL_ID_APPLIED", false);
            Intrinsics.checkNotNullExpressionValue(Boolean.valueOf(mediationNetwork), "");
            if (mediationNetwork) {
                map.put("custom_install_id", Boolean.TRUE);
                return;
            }
            return;
        }
        int i10 = f8244w + 93;
        f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            throw null;
        }
    }

    private final void getCurrencyIso4217Code(Map<String, Object> map, int i10) {
        f8244w = (f8243i + 75) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        try {
            if (this.areAllFieldsValid.n_().versionCode > this.component1.getMediationNetwork("versionCode", 0)) {
                f8244w = (f8243i + 39) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.component1.getRevenue("versionCode", this.areAllFieldsValid.n_().versionCode);
            }
            map.put("app_version_code", String.valueOf(this.areAllFieldsValid.n_().versionCode));
            map.put("app_version_name", this.areAllFieldsValid.n_().versionName);
            map.put("targetSDKver", Integer.valueOf(this.areAllFieldsValid.getRevenue.getRevenue.getApplicationInfo().targetSdkVersion));
            map.put("date1", getMediationNetwork().format(new Date(((Long) getMediationNetwork(new Object[]{this}, -1521351773, 1521351785, System.identityHashCode(this))).longValue())));
            map.put("date2", getMediationNetwork().format(new Date(this.areAllFieldsValid.n_().lastUpdateTime)));
            Object[] objArr = new Object[1];
            a(null, "\u008d\u0085\u0087\u008c\u008b\u008a\u0089\u0088\u0087\u0086\u0085\u0084\u0083\u0082\u0081", null, 126 - TextUtils.lastIndexOf("", '0', 0), objArr);
            String intern = ((String) objArr[0]).intern();
            SimpleDateFormat mediationNetwork = getMediationNetwork();
            Intrinsics.checkNotNullExpressionValue(mediationNetwork, "");
            map.put(intern, getCurrencyIso4217Code(mediationNetwork, i10));
        } catch (Throwable th2) {
            AFLogger.afErrorLog("Exception while collecting app version data ", th2, true);
        }
    }

    private void AFAdRevenueData(@NotNull Map<String, Object> map, int i10) {
        boolean z10;
        Intrinsics.checkNotNullParameter(map, "");
        String areAllFieldsValid = this.areAllFieldsValid.areAllFieldsValid();
        String AFAdRevenueData = AFAdRevenueData(this.component1, areAllFieldsValid);
        boolean z11 = false;
        if (AFAdRevenueData == null || Intrinsics.areEqual(AFAdRevenueData, areAllFieldsValid)) {
            z10 = false;
        } else {
            f8243i = (f8244w + 17) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            z10 = true;
        }
        if (AFAdRevenueData == null) {
            int i11 = f8243i + 79;
            f8244w = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                throw null;
            }
            if (areAllFieldsValid != null) {
                z11 = true;
            }
        }
        if (z10 || z11) {
            map.put("af_latestchannel", areAllFieldsValid);
        }
        String monetizationNetwork = getMonetizationNetwork(i10);
        if (monetizationNetwork != null) {
            Locale locale = Locale.getDefault();
            Intrinsics.checkNotNullExpressionValue(locale, "");
            Object lowerCase = monetizationNetwork.toLowerCase(locale);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "");
            map.put("af_installstore", lowerCase);
        }
        String AFAdRevenueData2 = AFAdRevenueData(i10);
        if (AFAdRevenueData2 != null) {
            int i12 = f8243i + 11;
            f8244w = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i12 % 2 != 0) {
                Locale locale2 = Locale.getDefault();
                Intrinsics.checkNotNullExpressionValue(locale2, "");
                Object lowerCase2 = AFAdRevenueData2.toLowerCase(locale2);
                Intrinsics.checkNotNullExpressionValue(lowerCase2, "");
                map.put("af_preinstall_name", lowerCase2);
                throw null;
            }
            Locale locale3 = Locale.getDefault();
            Intrinsics.checkNotNullExpressionValue(locale3, "");
            Object lowerCase3 = AFAdRevenueData2.toLowerCase(locale3);
            Intrinsics.checkNotNullExpressionValue(lowerCase3, "");
            map.put("af_preinstall_name", lowerCase3);
        } else {
            f8243i = (f8244w + 77) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        String component2 = component2();
        if (component2 != null) {
            Locale locale4 = Locale.getDefault();
            Intrinsics.checkNotNullExpressionValue(locale4, "");
            Object lowerCase4 = component2.toLowerCase(locale4);
            Intrinsics.checkNotNullExpressionValue(lowerCase4, "");
            map.put("af_currentstore", lowerCase4);
        }
    }

    @SuppressLint({"PrivateApi"})
    private static String getMediationNetwork(String str) {
        f8244w = (f8243i + 95) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        try {
            Object invoke = Class.forName("android.os.SystemProperties").getMethod("get", String.class).invoke(null, str);
            Intrinsics.checkNotNull(invoke, "");
            String str2 = (String) invoke;
            int i10 = f8244w + 69;
            f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                return str2;
            }
            throw null;
        } catch (Throwable th2) {
            AFLogger.afErrorLog(th2.getMessage(), th2);
            return null;
        }
    }

    private final String getRevenue(String str) {
        int i10;
        if (getMonetizationNetwork().getBoolean(AppsFlyerProperties.COLLECT_ANDROID_ID, false) && (str == null || str.length() == 0)) {
            int i11 = f8244w + 39;
            f8243i = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                copy();
                throw null;
            } else if (!copy()) {
                return null;
            } else {
                str = (String) getMediationNetwork(new Object[]{this}, 969328908, -969328900, System.identityHashCode(this));
                i10 = f8243i + 55;
            }
        } else if (str == null) {
            return null;
        } else {
            i10 = f8243i + 85;
        }
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return str;
    }

    private String getRevenue() {
        return (String) getMediationNetwork(new Object[]{this}, -1875348758, 1875348758, System.identityHashCode(this));
    }

    private void getMediationNetwork(@NotNull Map<String, Object> map, @NotNull String str) {
        getMediationNetwork(new Object[]{this, map, str}, 1127076864, -1127076862, System.identityHashCode(this));
    }

    private static /* synthetic */ Object getMonetizationNetwork(Object[] objArr) {
        AFg1qSDK aFg1qSDK = (AFg1qSDK) objArr[0];
        Map map = (Map) objArr[1];
        String str = (String) objArr[2];
        f8243i = (f8244w + 81) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        Intrinsics.checkNotNullParameter(str, "");
        try {
            String monetizationNetwork = aFg1qSDK.component1.getMonetizationNetwork("prev_event_name", null);
            if (monetizationNetwork != null) {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put("prev_event_timestamp", aFg1qSDK.component1.getCurrencyIso4217Code("prev_event_timestamp", -1L));
                jSONObject.put("prev_event_name", monetizationNetwork);
                map.put("prev_event", jSONObject);
            }
            aFg1qSDK.component1.AFAdRevenueData("prev_event_name", str);
            aFg1qSDK.component1.getRevenue("prev_event_timestamp", System.currentTimeMillis());
            int i10 = f8243i + 59;
            f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                return null;
            }
            throw null;
        } catch (Exception e10) {
            AFLogger.afErrorLog("Error while processing previous event.", e10);
            return null;
        }
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getCurrencyIso4217Code(@NotNull AFh1jSDK aFh1jSDK) {
        f8243i = (f8244w + 1) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(aFh1jSDK, "");
        Map<String, Object> map = aFh1jSDK.getCurrencyIso4217Code;
        Intrinsics.checkNotNullExpressionValue(map, "");
        getCurrencyIso4217Code(map, aFh1jSDK.getMediationNetwork());
        areAllFieldsValid(map);
        getMediationNetwork(new Object[]{map}, -43428876, 43428885, (int) System.currentTimeMillis());
        getRevenue(map);
        getMediationNetwork(new Object[]{this, map, this.toString.AFAdRevenueData}, -361587280, 361587287, System.identityHashCode(this));
        i(map);
        map.put("cell", o0.m(or.v.a("mcc", Integer.valueOf(this.getMediationNetwork.getResources().getConfiguration().mcc)), or.v.a("mnc", Integer.valueOf(this.getMediationNetwork.getResources().getConfiguration().mnc))));
        map.put("sig", (String) getMediationNetwork(new Object[]{this}, -1875348758, 1875348758, System.identityHashCode(this)));
        map.put("last_boot_time", Long.valueOf(areAllFieldsValid()));
        map.put("disk", (String) getMediationNetwork(new Object[0], -879088668, 879088672, (int) System.currentTimeMillis()));
        f8243i = (f8244w + 85) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    private final void AFAdRevenueData(Map<String, Object> map) {
        try {
            long longValue = ((Long) getMediationNetwork(new Object[]{this}, -1521351773, 1521351785, System.identityHashCode(this))).longValue();
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd_HHmmssZ", Locale.US);
            simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
            map.put("installDate", simpleDateFormat.format(new Date(longValue)));
            int i10 = f8243i + 15;
            f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                throw null;
            }
        } catch (Exception e10) {
            AFLogger.afErrorLog("Exception while collecting install date. ", e10);
        }
    }

    private String getMonetizationNetwork(int i10) {
        int i11 = f8244w + 57;
        f8243i = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        String str = null;
        if (i11 % 2 == 0) {
            this.component1.getRevenue("INSTALL_STORE");
            throw null;
        } else if (this.component1.getRevenue("INSTALL_STORE")) {
            return this.component1.getMonetizationNetwork("INSTALL_STORE", null);
        } else {
            if (i10 <= 1) {
                str = component2();
            } else {
                int i12 = (f8244w + 117) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                f8243i = i12;
                f8244w = (i12 + 23) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            this.component1.AFAdRevenueData("INSTALL_STORE", str);
            return str;
        }
    }

    private void AFAdRevenueData(@NotNull Map<String, Object> map, boolean z10) {
        f8244w = (f8243i + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        map.put("platformextension", this.getRevenue);
        if (z10) {
            map.put("platform_extension_v2", this.getCurrencyIso4217Code.AFAdRevenueData());
            f8244w = (f8243i + 125) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
    }

    private static void getMonetizationNetwork(@NotNull Map<String, Object> map, String str) {
        f8243i = (f8244w + 43) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        if (str != null) {
            f8243i = (f8244w + 77) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            map.put("phone", str);
            f8244w = (f8243i + 1) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
    }

    private String AFAdRevenueData(int i10) {
        String str;
        f8244w = (f8243i + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        String string = getMonetizationNetwork().getString("preInstallName");
        if (string != null) {
            int i11 = f8244w + 15;
            f8243i = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                int i12 = 12 / 0;
            }
            return string;
        }
        if (this.component1.getRevenue("preInstallName")) {
            str = this.component1.getMonetizationNetwork("preInstallName", null);
        } else {
            if (i10 <= 1) {
                int i13 = f8243i + 99;
                f8244w = i13 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i13 % 2 == 0) {
                    String equals = equals();
                    if (equals == null) {
                        int i14 = f8244w + 19;
                        f8243i = i14 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        if (i14 % 2 != 0) {
                            equals = getCurrencyIso4217Code("AF_PRE_INSTALL_NAME");
                        } else {
                            getCurrencyIso4217Code("AF_PRE_INSTALL_NAME");
                            throw null;
                        }
                    }
                    string = equals;
                } else {
                    equals();
                    throw null;
                }
            }
            if (string != null) {
                this.component1.AFAdRevenueData("preInstallName", string);
            }
            str = string;
        }
        if (str != null) {
            f8243i = (f8244w + 73) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            getMonetizationNetwork().set("preInstallName", str);
        }
        return str;
    }

    private static boolean getMonetizationNetwork(File file) {
        f8244w = (f8243i + 93) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (file == null || !file.exists()) {
            return true;
        }
        f8243i = (f8244w + 39) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:30:0x007f, code lost:
        if (r1 == null) goto L26;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v1, types: [int] */
    /* JADX WARN: Type inference failed for: r1v10 */
    /* JADX WARN: Type inference failed for: r1v2, types: [java.io.Reader] */
    /* JADX WARN: Type inference failed for: r1v6, types: [java.io.Reader] */
    /* JADX WARN: Type inference failed for: r1v9 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.String getMonetizationNetwork(java.io.File r5, java.lang.String r6) {
        /*
            int r0 = com.appsflyer.internal.AFg1qSDK.f8244w
            int r1 = r0 + 87
            int r2 = r1 % 128
            com.appsflyer.internal.AFg1qSDK.f8243i = r2
            int r1 = r1 % 2
            r2 = 0
            if (r1 == 0) goto L92
            if (r5 != 0) goto L1e
            int r0 = r0 + 39
            int r5 = r0 % 128
            com.appsflyer.internal.AFg1qSDK.f8243i = r5
            int r0 = r0 % 2
            if (r0 != 0) goto L1d
            r5 = 58
            int r5 = r5 / 0
        L1d:
            return r2
        L1e:
            java.util.Properties r0 = new java.util.Properties     // Catch: java.lang.Throwable -> L4c java.io.FileNotFoundException -> L66
            r0.<init>()     // Catch: java.lang.Throwable -> L4c java.io.FileNotFoundException -> L66
            java.io.InputStreamReader r1 = new java.io.InputStreamReader     // Catch: java.lang.Throwable -> L4c java.io.FileNotFoundException -> L66
            java.io.FileInputStream r3 = new java.io.FileInputStream     // Catch: java.lang.Throwable -> L4c java.io.FileNotFoundException -> L66
            r3.<init>(r5)     // Catch: java.lang.Throwable -> L4c java.io.FileNotFoundException -> L66
            java.nio.charset.Charset r4 = java.nio.charset.Charset.defaultCharset()     // Catch: java.lang.Throwable -> L4c java.io.FileNotFoundException -> L66
            r1.<init>(r3, r4)     // Catch: java.lang.Throwable -> L4c java.io.FileNotFoundException -> L66
            r0.load(r1)     // Catch: java.lang.Throwable -> L4a java.io.FileNotFoundException -> L67
            java.lang.String r3 = "Found PreInstall property!"
            com.appsflyer.AFLogger.afInfoLog(r3)     // Catch: java.lang.Throwable -> L4a java.io.FileNotFoundException -> L67
            java.lang.String r5 = r0.getProperty(r6)     // Catch: java.lang.Throwable -> L4a java.io.FileNotFoundException -> L67
            r1.close()     // Catch: java.lang.Throwable -> L41
            return r5
        L41:
            r6 = move-exception
            java.lang.String r0 = r6.getMessage()
            com.appsflyer.AFLogger.afErrorLog(r0, r6)
            return r5
        L4a:
            r5 = move-exception
            goto L4e
        L4c:
            r5 = move-exception
            r1 = r2
        L4e:
            java.lang.String r6 = r5.getMessage()     // Catch: java.lang.Throwable -> L64
            com.appsflyer.AFLogger.afErrorLog(r6, r5)     // Catch: java.lang.Throwable -> L64
            if (r1 == 0) goto L82
        L57:
            r1.close()     // Catch: java.lang.Throwable -> L5b
            goto L82
        L5b:
            r5 = move-exception
            java.lang.String r6 = r5.getMessage()
            com.appsflyer.AFLogger.afErrorLog(r6, r5)
            goto L82
        L64:
            r5 = move-exception
            goto L83
        L66:
            r1 = r2
        L67:
            java.lang.String r5 = r5.getAbsolutePath()     // Catch: java.lang.Throwable -> L64
            java.lang.StringBuilder r6 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L64
            r6.<init>()     // Catch: java.lang.Throwable -> L64
            java.lang.String r0 = "PreInstall file wasn't found: "
            r6.append(r0)     // Catch: java.lang.Throwable -> L64
            r6.append(r5)     // Catch: java.lang.Throwable -> L64
            java.lang.String r5 = r6.toString()     // Catch: java.lang.Throwable -> L64
            com.appsflyer.AFLogger.afDebugLog(r5)     // Catch: java.lang.Throwable -> L64
            if (r1 == 0) goto L82
            goto L57
        L82:
            return r2
        L83:
            if (r1 == 0) goto L91
            r1.close()     // Catch: java.lang.Throwable -> L89
            goto L91
        L89:
            r6 = move-exception
            java.lang.String r0 = r6.getMessage()
            com.appsflyer.AFLogger.afErrorLog(r0, r6)
        L91:
            throw r5
        L92:
            throw r2
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFg1qSDK.getMonetizationNetwork(java.io.File, java.lang.String):java.lang.String");
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getCurrencyIso4217Code(@NotNull Map<String, Object> map) {
        String[] strArr;
        f8244w = (f8243i + 15) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(map, "");
        String string = getMonetizationNetwork().getString(AppsFlyerProperties.APP_ID);
        if (string != null) {
            f8243i = (f8244w + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            map.put(AppsFlyerProperties.APP_ID, string);
        }
        String string2 = getMonetizationNetwork().getString(AppsFlyerProperties.CURRENCY_CODE);
        if (string2 != null) {
            if (string2.length() != 3) {
                StringBuilder sb2 = new StringBuilder("WARNING: currency code should be 3 characters!!! '");
                sb2.append(string2);
                sb2.append("' is not a legal value.");
                String obj = sb2.toString();
                Intrinsics.checkNotNullExpressionValue(obj, "");
                AFLogger.afWarnLog(obj);
                f8244w = (f8243i + 87) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            map.put("currency", string2);
        }
        String string3 = getMonetizationNetwork().getString(AppsFlyerProperties.IS_UPDATE);
        if (string3 != null) {
            map.put("isUpdate", string3);
        }
        String string4 = getMonetizationNetwork().getString(AppsFlyerProperties.ADDITIONAL_CUSTOM_DATA);
        if (string4 != null) {
            int i10 = f8244w + 123;
            f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                map.put("customData", string4);
            } else {
                map.put("customData", string4);
                throw null;
            }
        }
        String string5 = getMonetizationNetwork().getString(AppsFlyerProperties.APP_USER_ID);
        if (string5 != null) {
            map.put("appUserId", string5);
        }
        String string6 = getMonetizationNetwork().getString(AppsFlyerProperties.USER_EMAILS);
        if (string6 != null) {
            f8243i = (f8244w + 39) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            map.put("user_emails", string6);
        }
        AFb1uSDK aFb1uSDK = this.toString.getRevenue;
        if (aFb1uSDK == null || (strArr = aFb1uSDK.getMediationNetwork) == null) {
            return;
        }
        int i11 = f8243i + 19;
        f8244w = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 == 0) {
            map.put("sharing_filter", strArr);
        } else {
            map.put("sharing_filter", strArr);
            throw null;
        }
    }

    private void AFAdRevenueData(@NotNull Map<String, Object> map, String str) {
        int i10 = f8244w + 101;
        f8243i = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            Intrinsics.checkNotNullParameter(map, "");
            if (str != null && str.length() != 0) {
                int i11 = f8243i + 17;
                f8244w = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i11 % 2 == 0) {
                    map.put("referrer", str);
                    f8244w = (f8243i + 67) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                } else {
                    map.put("referrer", str);
                    throw null;
                }
            }
            String monetizationNetwork = this.component1.getMonetizationNetwork("extraReferrers", null);
            if (monetizationNetwork != null) {
                map.put("extraReferrers", monetizationNetwork);
            }
            String referrer = getMonetizationNetwork().getReferrer(this.component1);
            if (referrer != null && referrer.length() != 0) {
                int i12 = f8244w + 67;
                f8243i = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i12 % 2 == 0) {
                    int i13 = 10 / 0;
                    if (map.get("referrer") != null) {
                        return;
                    }
                } else if (map.get("referrer") != null) {
                    return;
                }
                map.put("referrer", referrer);
                return;
            }
            f8244w = (f8243i + 17) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return;
        }
        Intrinsics.checkNotNullParameter(map, "");
        throw null;
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final void getMonetizationNetwork(@NotNull Map<String, Object> map, @NotNull AFe1mSDK aFe1mSDK) {
        getMediationNetwork(new Object[]{this, map, aFe1mSDK}, -1926240735, 1926240745, System.identityHashCode(this));
    }

    private static /* synthetic */ Object AFAdRevenueData(Object[] objArr) {
        AFg1qSDK aFg1qSDK = (AFg1qSDK) objArr[0];
        Map map = (Map) objArr[1];
        int i10 = f8243i + 119;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            Intrinsics.checkNotNullParameter(map, "");
            map.putAll(aFg1qSDK.hashCode.getCurrencyIso4217Code());
            int i11 = 68 / 0;
        } else {
            Intrinsics.checkNotNullParameter(map, "");
            map.putAll(aFg1qSDK.hashCode.getCurrencyIso4217Code());
        }
        int i12 = f8243i + 53;
        f8244w = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i12 % 2 != 0) {
            int i13 = 1 / 0;
        }
        return null;
    }

    private static /* synthetic */ Object getCurrencyIso4217Code(Object[] objArr) {
        AFg1qSDK aFg1qSDK = (AFg1qSDK) objArr[0];
        f8243i = (f8244w + 55) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        String N_ = AFj1iSDK.N_(aFg1qSDK.getMediationNetwork.getApplicationContext().getPackageManager(), aFg1qSDK.getMediationNetwork.getApplicationContext().getPackageName());
        int i10 = f8243i + 121;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            int i11 = 27 / 0;
        }
        return N_;
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    public final long getCurrencyIso4217Code() {
        f8244w = (f8243i + 7) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        long currentTimeMillis = System.currentTimeMillis();
        f8243i = (f8244w + 105) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return currentTimeMillis;
    }

    private void getCurrencyIso4217Code(@NotNull AFh1jSDK aFh1jSDK, String str, String str2, AFb1rSDK aFb1rSDK) {
        f8243i = (f8244w + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(aFh1jSDK, "");
        Map<String, Object> map = aFh1jSDK.getCurrencyIso4217Code;
        if (aFh1jSDK.getCurrencyIso4217Code() == AFe1mSDK.CONVERSION) {
            f8243i = (f8244w + 13) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            Intrinsics.checkNotNullExpressionValue(map, "");
            equals(map);
            copy(map);
            toString(map);
            AFa1zSDK.getMonetizationNetwork(this.equals, this.areAllFieldsValid);
            f8243i = (f8244w + 3) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        Intrinsics.checkNotNullExpressionValue(map, "");
        copydefault(map);
        getMediationNetwork(new Object[]{this, map}, 1978462197, -1978462194, System.identityHashCode(this));
        getMediationNetwork(new Object[]{this, map}, -2029029470, 2029029475, System.identityHashCode(this));
        getMonetizationNetwork(map, str2);
        AFAdRevenueData(map, str);
        AFInAppEventParameterName(map);
        if (aFb1rSDK != null) {
            int i10 = f8243i + 9;
            f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                aFb1rSDK.getMonetizationNetwork(map);
                return;
            }
            aFb1rSDK.getMonetizationNetwork(map);
            int i11 = 18 / 0;
        }
    }

    private static String AFAdRevenueData(AFc1oSDK aFc1oSDK, String str) {
        f8244w = (f8243i + 77) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        String monetizationNetwork = aFc1oSDK.getMonetizationNetwork("CACHED_CHANNEL", null);
        if (monetizationNetwork != null) {
            f8243i = (f8244w + 27) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return monetizationNetwork;
        }
        aFc1oSDK.AFAdRevenueData("CACHED_CHANNEL", str);
        return str;
    }

    private static File AFAdRevenueData(String str) {
        if (str != null) {
            try {
                if (StringsKt.k1(str).toString().length() > 0) {
                    return new File(StringsKt.k1(str).toString());
                }
                f8243i = (f8244w + 3) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } catch (Throwable th2) {
                AFLogger.afErrorLog(th2.getMessage(), th2);
            }
        }
        f8244w = (f8243i + 5) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return null;
    }

    private static void AFAdRevenueData(@NotNull Map<String, Object> map, @NotNull AFh1jSDK aFh1jSDK) {
        Intrinsics.checkNotNullParameter(map, "");
        Intrinsics.checkNotNullParameter(aFh1jSDK, "");
        String str = aFh1jSDK.component4;
        if (str != null) {
            map.put("eventName", str);
            Map map2 = aFh1jSDK.AFAdRevenueData;
            if (map2 == null) {
                map2 = new HashMap();
            }
            map.put("eventValue", new JSONObject(map2).toString());
        }
    }

    @Override // com.appsflyer.internal.AFg1rSDK
    @NotNull
    public final Long AFAdRevenueData() {
        return (Long) getMediationNetwork(new Object[]{this}, -1521351773, 1521351785, System.identityHashCode(this));
    }

    private final String getCurrencyIso4217Code(String str) {
        f8244w = (f8243i + 63) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        String monetizationNetwork = this.areAllFieldsValid.getMonetizationNetwork(str);
        int i10 = f8243i + 3;
        f8244w = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            return monetizationNetwork;
        }
        throw null;
    }

    private void getCurrencyIso4217Code(@NotNull Map<String, Object> map, String str) {
        getMediationNetwork(new Object[]{this, map, str}, -361587280, 361587287, System.identityHashCode(this));
    }
}
