package com.appsflyer.internal;

import com.appsflyer.AFLogger;
import com.appsflyer.attribution.AppsFlyerRequestListener;
import com.appsflyer.internal.AFj1qSDK;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Observable;
import java.util.Observer;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nResolveDdlTask.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ResolveDdlTask.kt\ncom/appsflyer/internal/components/queue/tasks/ResolveDdlTask\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,278:1\n1#2:279\n1#2:290\n1603#3,9:280\n1855#3:289\n1856#3:291\n1612#3:292\n1855#3,2:296\n3792#4:293\n4307#4,2:294\n*S KotlinDebug\n*F\n+ 1 ResolveDdlTask.kt\ncom/appsflyer/internal/components/queue/tasks/ResolveDdlTask\n*L\n104#1:290\n104#1:280,9\n104#1:289\n104#1:291\n104#1:292\n202#1:296,2\n197#1:293\n197#1:294,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFf1wSDK extends AFe1eSDK<AFa1mSDK> {
    private int AFInAppEventParameterName;
    private int AFInAppEventType;
    @NotNull
    private final CountDownLatch AFKeystoreWrapper;
    private int AFLogger;
    @NotNull
    private final AFa1pSDK areAllFieldsValid;
    @NotNull
    private final AFj1rSDK copy;
    @NotNull
    private final AFa1rSDK copydefault;
    @NotNull
    private final AFh1tSDK equals;
    @NotNull
    private final AFc1eSDK hashCode;
    @NotNull
    private final List<AFj1qSDK> registerClient;
    @NotNull
    private final AFc1pSDK toString;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class AFa1ySDK {
        public static final /* synthetic */ int[] AFAdRevenueData;
        public static final /* synthetic */ int[] getMonetizationNetwork;

        static {
            int[] iArr = new int[AFe1uSDK.values().length];
            try {
                iArr[AFe1uSDK.SUCCESS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[AFe1uSDK.FAILURE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            AFAdRevenueData = iArr;
            int[] iArr2 = new int[AFj1qSDK.AFa1vSDK.values().length];
            try {
                iArr2[AFj1qSDK.AFa1vSDK.FINISHED.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr2[AFj1qSDK.AFa1vSDK.STARTED.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            getMonetizationNetwork = iArr2;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AFf1wSDK(@NotNull AFa1pSDK aFa1pSDK, @NotNull AFc1bSDK aFc1bSDK) {
        super(AFe1mSDK.DLSDK, new AFe1mSDK[]{AFe1mSDK.RC_CDN, AFe1mSDK.FETCH_ADVERTISING_ID}, aFc1bSDK, "DdlSdk");
        int i10;
        Intrinsics.checkNotNullParameter(aFa1pSDK, "");
        Intrinsics.checkNotNullParameter(aFc1bSDK, "");
        this.areAllFieldsValid = aFa1pSDK;
        this.AFKeystoreWrapper = new CountDownLatch(1);
        this.registerClient = new ArrayList();
        AFc1pSDK currencyIso4217Code = aFc1bSDK.getCurrencyIso4217Code();
        Intrinsics.checkNotNullExpressionValue(currencyIso4217Code, "");
        this.toString = currencyIso4217Code;
        AFc1eSDK afInfoLog = aFc1bSDK.afInfoLog();
        Intrinsics.checkNotNullExpressionValue(afInfoLog, "");
        this.hashCode = afInfoLog;
        AFa1rSDK i11 = aFc1bSDK.i();
        Intrinsics.checkNotNullExpressionValue(i11, "");
        this.copydefault = i11;
        AFh1tSDK component3 = aFc1bSDK.component3();
        Intrinsics.checkNotNullExpressionValue(component3, "");
        this.equals = component3;
        AFj1rSDK AFLogger = aFc1bSDK.AFLogger();
        Intrinsics.checkNotNullExpressionValue(AFLogger, "");
        this.copy = AFLogger;
        AFj1qSDK[] aFj1qSDKArr = (AFj1qSDK[]) AFLogger.getCurrencyIso4217Code.toArray(new AFj1qSDK[0]);
        Intrinsics.checkNotNullExpressionValue(aFj1qSDKArr, "");
        ArrayList<AFj1qSDK> arrayList = new ArrayList();
        for (AFj1qSDK aFj1qSDK : aFj1qSDKArr) {
            if (aFj1qSDK != null && aFj1qSDK.areAllFieldsValid != AFj1qSDK.AFa1vSDK.NOT_STARTED) {
                arrayList.add(aFj1qSDK);
            }
        }
        this.AFLogger = arrayList.size();
        for (final AFj1qSDK aFj1qSDK2 : arrayList) {
            AFj1qSDK.AFa1vSDK aFa1vSDK = aFj1qSDK2.areAllFieldsValid;
            if (aFa1vSDK == null) {
                i10 = -1;
            } else {
                i10 = AFa1ySDK.getMonetizationNetwork[aFa1vSDK.ordinal()];
            }
            if (i10 != 1) {
                if (i10 == 2) {
                    aFj1qSDK2.addObserver(new Observer() { // from class: com.appsflyer.internal.w
                        @Override // java.util.Observer
                        public final void update(Observable observable, Object obj) {
                            AFf1wSDK.getRevenue(AFj1qSDK.this, this, observable, obj);
                        }
                    });
                }
            } else {
                AFh1ySDK.d$default(AFLogger.INSTANCE, AFg1cSDK.DDL, aFj1qSDK2.AFAdRevenueData.get("source") + " referrer collected earlier", false, 4, null);
                Intrinsics.checkNotNullExpressionValue(aFj1qSDK2, "");
                getMonetizationNetwork(aFj1qSDK2);
            }
        }
    }

    private final boolean copy() {
        List list;
        int i10;
        Object obj = this.areAllFieldsValid.getCurrencyIso4217Code.get("referrers");
        if (obj instanceof List) {
            list = (List) obj;
        } else {
            list = null;
        }
        if (list != null) {
            i10 = list.size();
        } else {
            i10 = 0;
        }
        if (i10 >= this.AFLogger || this.areAllFieldsValid.getCurrencyIso4217Code.containsKey("referrers")) {
            return false;
        }
        return true;
    }

    private final void getMonetizationNetwork(AFj1qSDK aFj1qSDK) {
        if (AFAdRevenueData(aFj1qSDK)) {
            this.registerClient.add(aFj1qSDK);
            this.AFKeystoreWrapper.countDown();
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.DDL;
            String simpleName = aFj1qSDK.getClass().getSimpleName();
            AFh1ySDK.d$default(aFLogger, aFg1cSDK, "Added non-organic " + simpleName, false, 4, null);
            return;
        }
        int i10 = this.AFInAppEventParameterName + 1;
        this.AFInAppEventParameterName = i10;
        if (i10 == this.AFLogger) {
            this.AFKeystoreWrapper.countDown();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getRevenue(AFj1qSDK aFj1qSDK, AFf1wSDK aFf1wSDK, Observable observable, Object obj) {
        Intrinsics.checkNotNullParameter(aFf1wSDK, "");
        AFLogger aFLogger = AFLogger.INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.DDL;
        Object obj2 = aFj1qSDK.AFAdRevenueData.get("source");
        AFh1ySDK.d$default(aFLogger, aFg1cSDK, obj2 + " referrer collected via observer", false, 4, null);
        Intrinsics.checkNotNull(observable, "");
        aFf1wSDK.getMonetizationNetwork((AFj1qSDK) observable);
    }

    @Override // com.appsflyer.internal.AFe1eSDK, com.appsflyer.internal.AFe1lSDK
    public final boolean AFAdRevenueData() {
        return false;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected final boolean a_() {
        return false;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    public final /* bridge */ /* synthetic */ AppsFlyerRequestListener areAllFieldsValid() {
        return null;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected final boolean copydefault() {
        return false;
    }

    @Override // com.appsflyer.internal.AFe1eSDK, com.appsflyer.internal.AFe1lSDK
    public final long getCurrencyIso4217Code() {
        return this.copydefault.component2;
    }

    /* JADX WARN: Removed duplicated region for block: B:17:0x0074  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x00b6 A[Catch: Exception -> 0x003b, TryCatch #0 {Exception -> 0x003b, blocks: (B:4:0x000d, B:8:0x0019, B:10:0x002a, B:15:0x006a, B:19:0x0077, B:21:0x007f, B:23:0x0089, B:25:0x00b6, B:27:0x00c8, B:29:0x00dc, B:31:0x00e0, B:33:0x00e6, B:35:0x00ec, B:37:0x010c, B:39:0x011e, B:41:0x0124, B:43:0x013a, B:38:0x0119, B:45:0x013f, B:13:0x003f, B:14:0x0056), top: B:59:0x000d }] */
    @Override // com.appsflyer.internal.AFe1eSDK, com.appsflyer.internal.AFe1lSDK
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final com.appsflyer.internal.AFe1uSDK getMediationNetwork() {
        /*
            Method dump skipped, instructions count: 520
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFf1wSDK.getMediationNetwork():com.appsflyer.internal.AFe1uSDK");
    }

    private static boolean AFAdRevenueData(AFj1qSDK aFj1qSDK) {
        Object obj = aFj1qSDK.AFAdRevenueData.get("click_ts");
        Long l10 = obj instanceof Long ? (Long) obj : null;
        if (l10 != null) {
            if (System.currentTimeMillis() - TimeUnit.SECONDS.toMillis(l10.longValue()) < TimeUnit.DAYS.toMillis(1L)) {
                return true;
            }
        }
        return false;
    }

    private static Map<String, String> getCurrencyIso4217Code(AFb1mSDK aFb1mSDK) {
        String str;
        if (aFb1mSDK == null || (str = aFb1mSDK.getCurrencyIso4217Code) == null) {
            return null;
        }
        Intrinsics.checkNotNullExpressionValue(str, "");
        Boolean bool = aFb1mSDK.getRevenue;
        if (bool == null || !bool.booleanValue()) {
            return o0.m(or.v.a("type", "unhashed"), or.v.a("value", str));
        }
        return null;
    }

    /* JADX WARN: Removed duplicated region for block: B:54:0x0153 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:56:0x010c A[SYNTHETIC] */
    @Override // com.appsflyer.internal.AFe1eSDK
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected final com.appsflyer.internal.AFd1jSDK<com.appsflyer.internal.AFa1mSDK> getRevenue(@org.jetbrains.annotations.NotNull java.lang.String r9) {
        /*
            Method dump skipped, instructions count: 473
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFf1wSDK.getRevenue(java.lang.String):com.appsflyer.internal.AFd1jSDK");
    }
}
