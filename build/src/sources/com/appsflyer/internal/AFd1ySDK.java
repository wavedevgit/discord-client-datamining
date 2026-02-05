package com.appsflyer.internal;

import android.os.Build;
import android.view.ViewConfiguration;
import com.appsflyer.AFLogger;
import com.appsflyer.internal.AFd1xSDK;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
import kotlin.Lazy;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFd1ySDK implements AFd1xSDK {
    private static int $10 = 0;
    private static int $11 = 1;
    private static long copy = -1417917781629150226L;
    private static int copydefault = 1;
    private static int equals;
    @NotNull
    private final Lazy AFAdRevenueData;
    @NotNull
    private final Lazy areAllFieldsValid;
    @NotNull
    private final String component1;
    @NotNull
    private final Lazy component2;
    @NotNull
    private final Lazy component3;
    private AFd1xSDK.AFa1ySDK component4;
    @NotNull
    private final Lazy getCurrencyIso4217Code;
    @NotNull
    private final Lazy getMediationNetwork;
    @NotNull
    private final Lazy getMonetizationNetwork;
    @NotNull
    private AFc1bSDK getRevenue;

    public AFd1ySDK(@NotNull AFc1bSDK aFc1bSDK) {
        Intrinsics.checkNotNullParameter(aFc1bSDK, "");
        this.getRevenue = aFc1bSDK;
        this.getCurrencyIso4217Code = or.l.a(new Function0<AFf1lSDK>() { // from class: com.appsflyer.internal.AFd1ySDK.1
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: getCurrencyIso4217Code */
            public final AFf1lSDK invoke() {
                AFf1lSDK component1 = AFd1ySDK.getMonetizationNetwork(AFd1ySDK.this).component1();
                Intrinsics.checkNotNullExpressionValue(component1, "");
                return component1;
            }
        });
        this.getMediationNetwork = or.l.a(new Function0<AFc1pSDK>() { // from class: com.appsflyer.internal.AFd1ySDK.5
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: getMonetizationNetwork */
            public final AFc1pSDK invoke() {
                AFc1pSDK currencyIso4217Code = AFd1ySDK.getMonetizationNetwork(AFd1ySDK.this).getCurrencyIso4217Code();
                Intrinsics.checkNotNullExpressionValue(currencyIso4217Code, "");
                return currencyIso4217Code;
            }
        });
        this.getMonetizationNetwork = or.l.a(new Function0<AFc1oSDK>() { // from class: com.appsflyer.internal.AFd1ySDK.3
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: getMonetizationNetwork */
            public final AFc1oSDK invoke() {
                AFc1oSDK component2 = AFd1ySDK.getMonetizationNetwork(AFd1ySDK.this).component2();
                Intrinsics.checkNotNullExpressionValue(component2, "");
                return component2;
            }
        });
        this.AFAdRevenueData = or.l.a(new Function0<AFf1cSDK>() { // from class: com.appsflyer.internal.AFd1ySDK.9
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: AFAdRevenueData */
            public final AFf1cSDK invoke() {
                AFf1cSDK AFKeystoreWrapper = AFd1ySDK.getMonetizationNetwork(AFd1ySDK.this).AFKeystoreWrapper();
                Intrinsics.checkNotNullExpressionValue(AFKeystoreWrapper, "");
                return AFKeystoreWrapper;
            }
        });
        this.component2 = or.l.a(new Function0<ExecutorService>() { // from class: com.appsflyer.internal.AFd1ySDK.2
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: getCurrencyIso4217Code */
            public final ExecutorService invoke() {
                ExecutorService mediationNetwork = AFd1ySDK.getMonetizationNetwork(AFd1ySDK.this).getMediationNetwork();
                Intrinsics.checkNotNullExpressionValue(mediationNetwork, "");
                return mediationNetwork;
            }
        });
        this.component1 = "6.17.3";
        this.areAllFieldsValid = or.l.a(new Function0<AFd1uSDK>() { // from class: com.appsflyer.internal.AFd1ySDK.4
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: getMediationNetwork */
            public final AFd1uSDK invoke() {
                AFc1gSDK registerClient = AFd1ySDK.getMonetizationNetwork(AFd1ySDK.this).registerClient();
                Intrinsics.checkNotNullExpressionValue(registerClient, "");
                return new AFd1uSDK(registerClient);
            }
        });
        this.component3 = or.l.a(new Function0<AFd1vSDK>() { // from class: com.appsflyer.internal.AFd1ySDK.6
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: AFAdRevenueData */
            public final AFd1vSDK invoke() {
                return new AFd1vSDK(AFd1ySDK.this.AFAdRevenueData());
            }
        });
    }

    private final AFh1aSDK areAllFieldsValid() {
        AFi1zSDK aFi1zSDK;
        int i10 = copydefault + 53;
        equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            AFi1wSDK aFi1wSDK = getMediationNetwork().AFAdRevenueData.AFAdRevenueData;
            if (aFi1wSDK != null && (aFi1zSDK = aFi1wSDK.getMonetizationNetwork) != null) {
                equals = (copydefault + 37) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return aFi1zSDK.getCurrencyIso4217Code;
            }
            int i11 = copydefault + 79;
            equals = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                return null;
            }
            throw null;
        }
        AFi1wSDK aFi1wSDK2 = getMediationNetwork().AFAdRevenueData.AFAdRevenueData;
        throw null;
    }

    private final AFf1cSDK component1() {
        equals = (copydefault + 17) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFf1cSDK aFf1cSDK = (AFf1cSDK) this.AFAdRevenueData.getValue();
        int i10 = copydefault + 113;
        equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            return aFf1cSDK;
        }
        throw null;
    }

    @NotNull
    private AFd1wSDK component2() {
        int i10 = equals + 29;
        copydefault = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return (AFd1wSDK) this.component3.getValue();
        }
        AFd1wSDK aFd1wSDK = (AFd1wSDK) this.component3.getValue();
        throw null;
    }

    private final AFc1oSDK component3() {
        equals = (copydefault + 97) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFc1oSDK aFc1oSDK = (AFc1oSDK) this.getMonetizationNetwork.getValue();
        copydefault = (equals + 29) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return aFc1oSDK;
    }

    private final ExecutorService component4() {
        return (ExecutorService) getRevenue(new Object[]{this}, -1221964614, 1221964616, System.identityHashCode(this));
    }

    private final void copy() {
        String mediationNetwork;
        int i10 = equals + 101;
        copydefault = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            AFh1aSDK areAllFieldsValid = areAllFieldsValid();
            if (areAllFieldsValid != null) {
                if (AFAdRevenueData(areAllFieldsValid)) {
                    int i11 = equals + 23;
                    copydefault = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (i11 % 2 == 0) {
                        mediationNetwork = component1().getMediationNetwork();
                        int i12 = 66 / 0;
                        if (mediationNetwork == null) {
                            return;
                        }
                    } else {
                        mediationNetwork = component1().getMediationNetwork();
                        if (mediationNetwork == null) {
                            return;
                        }
                    }
                    String jSONObject = new JSONObject((Map) getRevenue(new Object[]{getCurrencyIso4217Code(areAllFieldsValid), AFAdRevenueData().getMediationNetwork()}, -1519321264, 1519321264, (int) System.currentTimeMillis())).toString();
                    Intrinsics.checkNotNullExpressionValue(jSONObject, "");
                    Intrinsics.checkNotNullExpressionValue(mediationNetwork, "");
                    getRevenue(new Object[]{this, jSONObject, mediationNetwork}, -1047452469, 1047452473, System.identityHashCode(this));
                    return;
                }
                AFh1ySDK.v$default(AFLogger.INSTANCE, AFg1cSDK.EXCEPTION_MANAGER, "skipping", false, 4, null);
                return;
            }
            return;
        }
        areAllFieldsValid();
        throw null;
    }

    private final synchronized void copydefault() {
        boolean z10;
        try {
            AFh1aSDK areAllFieldsValid = areAllFieldsValid();
            if (areAllFieldsValid != null) {
                if (areAllFieldsValid.getRevenue == -1) {
                    equals = (copydefault + 109) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    component3().getCurrencyIso4217Code("af_send_exc_to_server_window");
                } else if (component3().getCurrencyIso4217Code("af_send_exc_to_server_window", -1L) == -1) {
                    getMediationNetwork(areAllFieldsValid);
                }
                z10 = getMonetizationNetwork(areAllFieldsValid);
            } else {
                z10 = false;
            }
            AFd1xSDK.AFa1ySDK aFa1ySDK = this.component4;
            if (aFa1ySDK != null) {
                int i10 = equals + 67;
                copydefault = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i10 % 2 != 0) {
                    aFa1ySDK.onConfigurationChanged(z10);
                } else {
                    aFa1ySDK.onConfigurationChanged(z10);
                    throw null;
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:32:0x0099, code lost:
        if (r4 != null) goto L29;
     */
    /* JADX WARN: Code restructure failed: missing block: B:38:0x00ac, code lost:
        if (r4 != null) goto L35;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x00b3, code lost:
        if (r4 != null) goto L35;
     */
    /* JADX WARN: Code restructure failed: missing block: B:42:0x00b5, code lost:
        r4 = kotlin.text.StringsKt.toIntOrNull(r4);
     */
    /* JADX WARN: Code restructure failed: missing block: B:43:0x00b9, code lost:
        if (r4 == null) goto L95;
     */
    /* JADX WARN: Code restructure failed: missing block: B:44:0x00bb, code lost:
        r4 = r4.intValue();
     */
    /* JADX WARN: Code restructure failed: missing block: B:88:0x014c, code lost:
        if (r0.intValue() != (-1)) goto L71;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final synchronized void equals() {
        /*
            Method dump skipped, instructions count: 472
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFd1ySDK.equals():void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getCurrencyIso4217Code(AFd1ySDK aFd1ySDK) {
        equals = (copydefault + 119) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(aFd1ySDK, "");
        aFd1ySDK.copy();
        equals = (copydefault + 11) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    private final AFf1lSDK getMediationNetwork() {
        AFf1lSDK aFf1lSDK;
        int i10 = copydefault + 121;
        equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            aFf1lSDK = (AFf1lSDK) this.getCurrencyIso4217Code.getValue();
            int i11 = 71 / 0;
        } else {
            aFf1lSDK = (AFf1lSDK) this.getCurrencyIso4217Code.getValue();
        }
        equals = (copydefault + 31) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return aFf1lSDK;
    }

    public static final /* synthetic */ AFc1bSDK getMonetizationNetwork(AFd1ySDK aFd1ySDK) {
        int i10 = copydefault;
        equals = (i10 + 19) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFc1bSDK aFc1bSDK = aFd1ySDK.getRevenue;
        equals = (i10 + 97) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return aFc1bSDK;
    }

    public static /* synthetic */ Object getRevenue(Object[] objArr, int i10, int i11, int i12) {
        int i13 = (i10 * (-464)) + (i11 * (-929));
        int i14 = ~i10;
        int i15 = i11 | i12;
        int i16 = i13 + (((~i15) | i14) * (-465)) + ((i11 | (~(i12 | i14))) * 930) + ((i14 | i15) * 465);
        if (i16 == 1) {
            final AFd1ySDK aFd1ySDK = (AFd1ySDK) objArr[0];
            copydefault = (equals + 57) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            aFd1ySDK.component4 = (AFd1xSDK.AFa1ySDK) objArr[1];
            ((ExecutorService) getRevenue(new Object[]{aFd1ySDK}, -1221964614, 1221964616, System.identityHashCode(aFd1ySDK))).execute(new Runnable() { // from class: com.appsflyer.internal.r
                @Override // java.lang.Runnable
                public final void run() {
                    AFd1ySDK.getMediationNetwork(AFd1ySDK.this);
                }
            });
            copydefault = (equals + 61) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return null;
        } else if (i16 != 2) {
            if (i16 != 3) {
                if (i16 != 4) {
                    equals = (copydefault + 47) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    Map m10 = o0.m(or.v.a("deviceInfo", (Map) objArr[0]), or.v.a("excs", AFd1tSDK.AFAdRevenueData((List) objArr[1])));
                    copydefault = (equals + 11) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    return m10;
                }
                return getCurrencyIso4217Code(objArr);
            }
            return AFAdRevenueData(objArr);
        } else {
            return getMediationNetwork(objArr);
        }
    }

    @NotNull
    public final AFd1zSDK AFAdRevenueData() {
        equals = (copydefault + 119) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFd1zSDK aFd1zSDK = (AFd1zSDK) this.areAllFieldsValid.getValue();
        int i10 = equals + 95;
        copydefault = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return aFd1zSDK;
        }
        throw null;
    }

    private static /* synthetic */ Object AFAdRevenueData(Object[] objArr) {
        final AFd1ySDK aFd1ySDK = (AFd1ySDK) objArr[0];
        final Throwable th2 = (Throwable) objArr[1];
        final String str = (String) objArr[2];
        int i10 = equals + 121;
        copydefault = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            Intrinsics.checkNotNullParameter(th2, "");
            Intrinsics.checkNotNullParameter(str, "");
            ((ExecutorService) getRevenue(new Object[]{aFd1ySDK}, -1221964614, 1221964616, System.identityHashCode(aFd1ySDK))).execute(new Runnable() { // from class: com.appsflyer.internal.s
                @Override // java.lang.Runnable
                public final void run() {
                    AFd1ySDK.getMediationNetwork(AFd1ySDK.this, th2, str);
                }
            });
            return null;
        }
        Intrinsics.checkNotNullParameter(th2, "");
        Intrinsics.checkNotNullParameter(str, "");
        ((ExecutorService) getRevenue(new Object[]{aFd1ySDK}, -1221964614, 1221964616, System.identityHashCode(aFd1ySDK))).execute(new Runnable() { // from class: com.appsflyer.internal.s
            @Override // java.lang.Runnable
            public final void run() {
                AFd1ySDK.getMediationNetwork(AFd1ySDK.this, th2, str);
            }
        });
        throw null;
    }

    /* JADX WARN: Code restructure failed: missing block: B:0:?, code lost:
        r10 = r10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static void a(java.lang.String r10, int r11, java.lang.Object[] r12) {
        /*
            if (r10 == 0) goto Le
            int r0 = com.appsflyer.internal.AFd1ySDK.$10
            int r0 = r0 + 37
            int r0 = r0 % 128
            com.appsflyer.internal.AFd1ySDK.$11 = r0
            char[] r10 = r10.toCharArray()
        Le:
            char[] r10 = (char[]) r10
            com.appsflyer.internal.AFk1lSDK r0 = new com.appsflyer.internal.AFk1lSDK
            r0.<init>()
            r0.getMonetizationNetwork = r11
            int r11 = r10.length
            long[] r1 = new long[r11]
            r2 = 0
            r0.getRevenue = r2
        L1d:
            int r3 = r0.getRevenue
            int r4 = r10.length
            if (r3 >= r4) goto L43
            int r4 = com.appsflyer.internal.AFd1ySDK.$10
            int r4 = r4 + 29
            int r4 = r4 % 128
            com.appsflyer.internal.AFd1ySDK.$11 = r4
            char r4 = r10[r3]
            long r4 = (long) r4
            long r6 = (long) r3
            int r8 = r0.getMonetizationNetwork
            long r8 = (long) r8
            long r6 = r6 * r8
            long r4 = r4 ^ r6
            long r6 = com.appsflyer.internal.AFd1ySDK.copy
            r8 = -2523060390901184290(0xdcfc49f1357a08de, double:-8.421958473976257E139)
            long r6 = r6 ^ r8
            long r4 = r4 ^ r6
            r1[r3] = r4
            int r3 = r3 + 1
            r0.getRevenue = r3
            goto L1d
        L43:
            char[] r11 = new char[r11]
            r0.getRevenue = r2
        L47:
            int r3 = r0.getRevenue
            int r4 = r10.length
            if (r3 >= r4) goto L5f
            int r4 = com.appsflyer.internal.AFd1ySDK.$10
            int r4 = r4 + 77
            int r4 = r4 % 128
            com.appsflyer.internal.AFd1ySDK.$11 = r4
            r4 = r1[r3]
            int r4 = (int) r4
            char r4 = (char) r4
            r11[r3] = r4
            int r3 = r3 + 1
            r0.getRevenue = r3
            goto L47
        L5f:
            java.lang.String r10 = new java.lang.String
            r10.<init>(r11)
            int r11 = com.appsflyer.internal.AFd1ySDK.$11
            int r11 = r11 + 87
            int r0 = r11 % 128
            com.appsflyer.internal.AFd1ySDK.$10 = r0
            int r11 = r11 % 2
            if (r11 != 0) goto L73
            r12[r2] = r10
            return
        L73:
            r10 = 0
            throw r10
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFd1ySDK.a(java.lang.String, int, java.lang.Object[]):void");
    }

    private static /* synthetic */ Object getMediationNetwork(Object[] objArr) {
        equals = (copydefault + 39) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ExecutorService executorService = (ExecutorService) ((AFd1ySDK) objArr[0]).component2.getValue();
        int i10 = copydefault + 45;
        equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            return executorService;
        }
        throw null;
    }

    private final AFc1pSDK getMonetizationNetwork() {
        AFc1pSDK aFc1pSDK;
        int i10 = copydefault + 49;
        equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            aFc1pSDK = (AFc1pSDK) this.getMediationNetwork.getValue();
            int i11 = 51 / 0;
        } else {
            aFc1pSDK = (AFc1pSDK) this.getMediationNetwork.getValue();
        }
        int i12 = equals + 63;
        copydefault = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i12 % 2 != 0) {
            return aFc1pSDK;
        }
        throw null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getMediationNetwork(AFd1ySDK aFd1ySDK, Throwable th2, String str) {
        copydefault = (equals + 67) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Intrinsics.checkNotNullParameter(aFd1ySDK, "");
        Intrinsics.checkNotNullParameter(th2, "");
        Intrinsics.checkNotNullParameter(str, "");
        AFh1aSDK areAllFieldsValid = aFd1ySDK.areAllFieldsValid();
        if (areAllFieldsValid == null || !aFd1ySDK.getMonetizationNetwork(areAllFieldsValid)) {
            return;
        }
        copydefault = (equals + 33) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        aFd1ySDK.AFAdRevenueData().getRevenue(th2, str);
    }

    private final boolean getMonetizationNetwork(AFh1aSDK aFh1aSDK) {
        int i10 = copydefault + 105;
        equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            long currentTimeMillis = System.currentTimeMillis();
            long currencyIso4217Code = component3().getCurrencyIso4217Code("af_send_exc_to_server_window", -1L);
            if (aFh1aSDK.getMediationNetwork >= TimeUnit.MILLISECONDS.toSeconds(currentTimeMillis)) {
                if (currencyIso4217Code == -1 || currencyIso4217Code < currentTimeMillis) {
                    return false;
                }
                return getRevenue(aFh1aSDK);
            }
            int i11 = equals + 123;
            copydefault = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                return false;
            }
            throw null;
        }
        long currentTimeMillis2 = System.currentTimeMillis();
        component3().getCurrencyIso4217Code("af_send_exc_to_server_window", -1L);
        long j10 = aFh1aSDK.getMediationNetwork;
        TimeUnit.MILLISECONDS.toSeconds(currentTimeMillis2);
        throw null;
    }

    @Override // com.appsflyer.internal.AFd1xSDK
    public final void getCurrencyIso4217Code() {
        int i10 = copydefault + 51;
        equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            ((ExecutorService) getRevenue(new Object[]{this}, -1221964614, 1221964616, System.identityHashCode(this))).execute(new Runnable() { // from class: com.appsflyer.internal.t
                @Override // java.lang.Runnable
                public final void run() {
                    AFd1ySDK.getCurrencyIso4217Code(AFd1ySDK.this);
                }
            });
            equals = (copydefault + 113) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return;
        }
        ((ExecutorService) getRevenue(new Object[]{this}, -1221964614, 1221964616, System.identityHashCode(this))).execute(new Runnable() { // from class: com.appsflyer.internal.t
            @Override // java.lang.Runnable
            public final void run() {
                AFd1ySDK.getCurrencyIso4217Code(AFd1ySDK.this);
            }
        });
        throw null;
    }

    private final boolean AFAdRevenueData(AFh1aSDK aFh1aSDK) {
        long currentTimeMillis = System.currentTimeMillis();
        long currencyIso4217Code = component3().getCurrencyIso4217Code("af_send_exc_to_server_window", -1L);
        if (aFh1aSDK.getMediationNetwork >= TimeUnit.MILLISECONDS.toSeconds(currentTimeMillis) && currencyIso4217Code != -1) {
            int i10 = copydefault + 51;
            equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                throw null;
            }
            if (currencyIso4217Code >= currentTimeMillis) {
                int mediationNetwork = component3().getMediationNetwork("af_send_exc_min", -1);
                if (mediationNetwork != -1 && AFAdRevenueData().AFAdRevenueData() >= mediationNetwork) {
                    return getRevenue(aFh1aSDK);
                }
                int i11 = copydefault + 103;
                equals = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i11 % 2 != 0) {
                    int i12 = 15 / 0;
                }
                return false;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getMediationNetwork(AFd1ySDK aFd1ySDK) {
        int i10 = copydefault + 121;
        equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            Intrinsics.checkNotNullParameter(aFd1ySDK, "");
            aFd1ySDK.equals();
            return;
        }
        Intrinsics.checkNotNullParameter(aFd1ySDK, "");
        aFd1ySDK.equals();
        throw null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getRevenue(AFd1ySDK aFd1ySDK) {
        int i10 = equals + 85;
        copydefault = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            Intrinsics.checkNotNullParameter(aFd1ySDK, "");
            aFd1ySDK.copydefault();
            return;
        }
        Intrinsics.checkNotNullParameter(aFd1ySDK, "");
        aFd1ySDK.copydefault();
        throw null;
    }

    private final Map<String, String> getCurrencyIso4217Code(AFh1aSDK aFh1aSDK) {
        Object[] objArr = new Object[1];
        a("퍒䪹\ue0a7ắ뒸", (ViewConfiguration.getMaximumDrawingCacheSize() >> 24) + 39419, objArr);
        Map<String, String> m10 = o0.m(or.v.a(((String) objArr[0]).intern(), Build.BRAND), or.v.a("model", Build.MODEL), or.v.a("app_id", getMonetizationNetwork().getRevenue.getRevenue.getPackageName()), or.v.a("p_ex", new AFa1ySDK().getMediationNetwork()), or.v.a("api", String.valueOf(Build.VERSION.SDK_INT)), or.v.a("sdk", this.component1), or.v.a("uid", AFb1jSDK.getRevenue(getMonetizationNetwork().getMonetizationNetwork)), or.v.a("exc_config", aFh1aSDK.getMonetizationNetwork()));
        copydefault = (equals + 109) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return m10;
    }

    private final void getMediationNetwork(AFh1aSDK aFh1aSDK) {
        int i10;
        long currentTimeMillis;
        int i11 = equals + 93;
        copydefault = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 == 0) {
            i10 = aFh1aSDK.getCurrencyIso4217Code;
            currentTimeMillis = System.currentTimeMillis() ^ TimeUnit.DAYS.toMillis(aFh1aSDK.getRevenue);
        } else {
            i10 = aFh1aSDK.getCurrencyIso4217Code;
            currentTimeMillis = System.currentTimeMillis() + TimeUnit.DAYS.toMillis(aFh1aSDK.getRevenue);
        }
        AFc1oSDK component3 = component3();
        component3.getRevenue("af_send_exc_to_server_window", currentTimeMillis);
        component3.getRevenue("af_send_exc_min", i10);
    }

    @Override // com.appsflyer.internal.AFd1xSDK
    public final void getRevenue() {
        int i10 = equals + 41;
        copydefault = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            ((ExecutorService) getRevenue(new Object[]{this}, -1221964614, 1221964616, System.identityHashCode(this))).execute(new Runnable() { // from class: com.appsflyer.internal.q
                @Override // java.lang.Runnable
                public final void run() {
                    AFd1ySDK.getRevenue(AFd1ySDK.this);
                }
            });
            int i11 = 23 / 0;
        } else {
            ((ExecutorService) getRevenue(new Object[]{this}, -1221964614, 1221964616, System.identityHashCode(this))).execute(new Runnable() { // from class: com.appsflyer.internal.q
                @Override // java.lang.Runnable
                public final void run() {
                    AFd1ySDK.getRevenue(AFd1ySDK.this);
                }
            });
        }
        equals = (copydefault + 121) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    private final void AFAdRevenueData(String str, String str2) {
        getRevenue(new Object[]{this, str, str2}, -1047452469, 1047452473, System.identityHashCode(this));
    }

    private final boolean getRevenue(AFh1aSDK aFh1aSDK) {
        new AFd1sSDK();
        String str = this.component1;
        String str2 = aFh1aSDK.AFAdRevenueData;
        Intrinsics.checkNotNullExpressionValue(str2, "");
        boolean currencyIso4217Code = AFd1sSDK.getCurrencyIso4217Code(str, str2);
        int i10 = equals + 23;
        copydefault = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return currencyIso4217Code;
        }
        throw null;
    }

    private static Map<String, Object> getRevenue(Map<String, ? extends Object> map, List<AFc1cSDK> list) {
        return (Map) getRevenue(new Object[]{map, list}, -1519321264, 1519321264, (int) System.currentTimeMillis());
    }

    @Override // com.appsflyer.internal.AFd1xSDK
    public final void getRevenue(@NotNull Throwable th2, @NotNull String str) {
        getRevenue(new Object[]{this, th2, str}, 1146782962, -1146782959, System.identityHashCode(this));
    }

    @Override // com.appsflyer.internal.AFd1xSDK
    public final void getMediationNetwork(AFd1xSDK.AFa1ySDK aFa1ySDK) {
        getRevenue(new Object[]{this, aFa1ySDK}, -704073125, 704073126, System.identityHashCode(this));
    }

    private static /* synthetic */ Object getCurrencyIso4217Code(Object[] objArr) {
        String str = (String) objArr[1];
        equals = (copydefault + 41) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        byte[] bytes = str.getBytes(Charsets.UTF_8);
        Intrinsics.checkNotNullExpressionValue(bytes, "");
        ((AFd1ySDK) objArr[0]).component2().getRevenue(bytes, o0.f(or.v.a("Authorization", AFj1bSDK.getRevenue(str, (String) objArr[2]))), 2000);
        int i10 = copydefault + 37;
        equals = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            return null;
        }
        throw null;
    }
}
