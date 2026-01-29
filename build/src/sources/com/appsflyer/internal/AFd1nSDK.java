package com.appsflyer.internal;

import android.content.pm.PackageManager;
import android.media.AudioTrack;
import android.os.Build;
import android.view.ViewConfiguration;
import androidx.annotation.NonNull;
import com.appsflyer.AppsFlyerProperties;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.security.SecureRandom;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFd1nSDK implements AFd1mSDK {
    private static int $10 = 0;
    private static int $11 = 1;
    private static char[] component2 = null;
    private static int copy = 1;
    private static char equals;
    private static final int getRevenue;
    private static int hashCode;
    private final AFc1bSDK component1;
    private List<String> getCurrencyIso4217Code = new ArrayList();
    private boolean AFAdRevenueData = true;
    @NonNull
    private final Map<String, Object> getMediationNetwork = new HashMap();
    private SecureRandom component3 = new SecureRandom();
    private boolean areAllFieldsValid = true ^ AppsFlyerProperties.getInstance().getBoolean(AppsFlyerProperties.DPM, false);
    private int getMonetizationNetwork = 0;
    private boolean component4 = false;

    static {
        component2();
        getRevenue = 98166;
        hashCode = (copy + 61) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    public AFd1nSDK(AFc1bSDK aFc1bSDK) {
        this.component1 = aFc1bSDK;
    }

    public static /* synthetic */ Object AFAdRevenueData(Object[] objArr, int i10, int i11, int i12) {
        int i13 = (i10 * (-755)) + (i11 * (-755));
        int i14 = ~((~i10) | (~i11));
        int i15 = i10 | i11;
        int i16 = i13 + (i14 * 1512) + (((~(i15 | i12)) | i14) * (-756)) + ((i15 | (~i12)) * 756);
        if (i16 != 1) {
            if (i16 != 2) {
                if (i16 != 3) {
                    int i17 = hashCode + 43;
                    copy = i17 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    int i18 = i17 % 2;
                    boolean mediationNetwork = ((AFd1nSDK) objArr[0]).component1.component2().getMediationNetwork("participantInProxy", false);
                    copy = (hashCode + 45) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    return Boolean.valueOf(mediationNetwork);
                }
                AFd1nSDK aFd1nSDK = (AFd1nSDK) objArr[0];
                String str = (String) objArr[1];
                String str2 = (String) objArr[2];
                int i19 = copy + 45;
                hashCode = i19 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i19 % 2 == 0) {
                    aFd1nSDK.getCurrencyIso4217Code("server_request", str, str2);
                    return null;
                }
                String[] strArr = new String[0];
                strArr[0] = str2;
                aFd1nSDK.getCurrencyIso4217Code("server_request", str, strArr);
                return null;
            }
            return getRevenue(objArr);
        }
        return getMediationNetwork(objArr);
    }

    private boolean AFInAppEventParameterName() {
        return ((Boolean) AFAdRevenueData(new Object[]{this}, 59516456, -59516456, System.identityHashCode(this))).booleanValue();
    }

    private void AFKeystoreWrapper() {
        AFAdRevenueData(new Object[]{this}, -788691882, 788691884, System.identityHashCode(this));
    }

    /* JADX WARN: Code restructure failed: missing block: B:0:?, code lost:
        r13 = r13;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static void a(byte r12, java.lang.String r13, int r14, java.lang.Object[] r15) {
        /*
            Method dump skipped, instructions count: 244
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFd1nSDK.a(byte, java.lang.String, int, java.lang.Object[]):void");
    }

    private float component1() {
        int i10 = copy + 29;
        hashCode = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            float nextFloat = this.component3.nextFloat();
            int i11 = copy + 123;
            hashCode = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                return nextFloat;
            }
            throw null;
        }
        this.component3.nextFloat();
        throw null;
    }

    static void component2() {
        component2 = new char[]{58256, 58263, 54893, 58257, 54887, 54907, 54888, 58258, 54891};
        equals = (char) 58256;
    }

    private synchronized void component3() {
        int i10 = hashCode;
        copy = (i10 + 109) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (this.component4) {
            copy = (i10 + 103) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return;
        }
        this.component4 = true;
        getCurrencyIso4217Code("r_debugging_on", new SimpleDateFormat("yyyy-MM-dd HH:mm:ssZ", Locale.ENGLISH).format(Long.valueOf(System.currentTimeMillis())), new String[0]);
    }

    private static String component4() {
        int i10 = (copy + 23) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        hashCode = i10;
        int i11 = i10 + 103;
        copy = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 == 0) {
            int i12 = 65 / 0;
        }
        return "6.17.3";
    }

    private boolean copy() {
        if (this.areAllFieldsValid) {
            int i10 = copy;
            hashCode = (i10 + 91) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (!this.AFAdRevenueData) {
                int i11 = i10 + 111;
                hashCode = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i11 % 2 == 0) {
                    if (this.component4) {
                        return true;
                    }
                    return false;
                }
                throw null;
            }
            return true;
        }
        return false;
    }

    private synchronized void copydefault() {
        this.getCurrencyIso4217Code = new ArrayList();
        this.getMonetizationNetwork = 0;
        hashCode = (copy + 43) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @NonNull
    private synchronized Map<String, Object> equals() {
        int i10 = copy + 47;
        hashCode = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            this.getMediationNetwork.put("data", this.getCurrencyIso4217Code);
            copydefault();
        } else {
            this.getMediationNetwork.put("data", this.getCurrencyIso4217Code);
            copydefault();
            throw null;
        }
        return this.getMediationNetwork;
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x0053, code lost:
        if (r6 == null) goto L7;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static /* synthetic */ java.lang.Object getMediationNetwork(java.lang.Object[] r6) {
        /*
            r0 = 0
            r1 = r6[r0]
            com.appsflyer.internal.AFd1nSDK r1 = (com.appsflyer.internal.AFd1nSDK) r1
            r2 = 1
            r2 = r6[r2]
            java.lang.String r2 = (java.lang.String) r2
            r3 = 2
            r6 = r6[r3]
            android.content.pm.PackageManager r6 = (android.content.pm.PackageManager) r6
            int r6 = com.appsflyer.internal.AFd1nSDK.copy
            int r6 = r6 + 61
            int r4 = r6 % 128
            com.appsflyer.internal.AFd1nSDK.hashCode = r4
            int r6 = r6 % r3
            r4 = 0
            if (r6 == 0) goto L3b
            java.util.Map r6 = r1.getMonetizationNetwork(r2)     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFc1bSDK r2 = r1.component1     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFf1cSDK r2 = r2.AFKeystoreWrapper()     // Catch: java.lang.Throwable -> L39
            java.lang.String r2 = r2.getMediationNetwork()     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFc1bSDK r5 = r1.component1     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFd1lSDK r5 = r5.getRevenue()     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFd1oSDK r6 = r5.getMediationNetwork(r6, r2)     // Catch: java.lang.Throwable -> L39
            r2 = 37
            int r2 = r2 / r0
            if (r6 != 0) goto L62
            goto L55
        L39:
            r6 = move-exception
            goto L7d
        L3b:
            java.util.Map r6 = r1.getMonetizationNetwork(r2)     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFc1bSDK r0 = r1.component1     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFf1cSDK r0 = r0.AFKeystoreWrapper()     // Catch: java.lang.Throwable -> L39
            java.lang.String r0 = r0.getMediationNetwork()     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFc1bSDK r2 = r1.component1     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFd1lSDK r2 = r2.getRevenue()     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.AFd1oSDK r6 = r2.getMediationNetwork(r6, r0)     // Catch: java.lang.Throwable -> L39
            if (r6 != 0) goto L62
        L55:
            java.lang.String r6 = "could not send null proxy data"
            java.lang.NullPointerException r0 = new java.lang.NullPointerException     // Catch: java.lang.Throwable -> L39
            java.lang.String r1 = "request was null"
            r0.<init>(r1)     // Catch: java.lang.Throwable -> L39
            com.appsflyer.AFLogger.afErrorLogForExcManagerOnly(r6, r0)     // Catch: java.lang.Throwable -> L39
            return r4
        L62:
            com.appsflyer.internal.AFc1bSDK r0 = r1.component1     // Catch: java.lang.Throwable -> L39
            java.util.concurrent.ExecutorService r0 = r0.getMediationNetwork()     // Catch: java.lang.Throwable -> L39
            com.appsflyer.internal.p r1 = new com.appsflyer.internal.p     // Catch: java.lang.Throwable -> L39
            r1.<init>()     // Catch: java.lang.Throwable -> L39
            r0.execute(r1)     // Catch: java.lang.Throwable -> L39
            int r6 = com.appsflyer.internal.AFd1nSDK.hashCode
            int r6 = r6 + 75
            int r0 = r6 % 128
            com.appsflyer.internal.AFd1nSDK.copy = r0
            int r6 = r6 % r3
            if (r6 == 0) goto L7c
            return r4
        L7c:
            throw r4
        L7d:
            java.lang.String r0 = "could not send proxy data"
            com.appsflyer.AFLogger.afErrorLogForExcManagerOnly(r0, r6)
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFd1nSDK.getMediationNetwork(java.lang.Object[]):java.lang.Object");
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final boolean areAllFieldsValid() {
        int i10 = (copy + 17) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        hashCode = i10;
        boolean z10 = this.component4;
        copy = (i10 + 47) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return z10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x0058, code lost:
        return r0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x0059, code lost:
        getMediationNetwork();
        AFAdRevenueData();
        com.appsflyer.internal.AFd1nSDK.copy = (com.appsflyer.internal.AFd1nSDK.hashCode + 81) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0067, code lost:
        return r0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x0030, code lost:
        if (r0 != false) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x0053, code lost:
        if (r0 != false) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0055, code lost:
        component3();
     */
    @Override // com.appsflyer.internal.AFd1mSDK
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final boolean getCurrencyIso4217Code() {
        /*
            r2 = this;
            int r0 = com.appsflyer.internal.AFd1nSDK.hashCode
            int r0 = r0 + 45
            int r1 = r0 % 128
            com.appsflyer.internal.AFd1nSDK.copy = r1
            int r0 = r0 % 2
            if (r0 != 0) goto L33
            com.appsflyer.internal.AFc1bSDK r0 = r2.component1
            com.appsflyer.internal.AFf1lSDK r0 = r0.component1()
            com.appsflyer.internal.AFf1iSDK r0 = r0.AFAdRevenueData
            com.appsflyer.internal.AFi1wSDK r0 = r0.AFAdRevenueData
            com.appsflyer.internal.AFi1ySDK r0 = getMonetizationNetwork(r0)
            com.appsflyer.internal.AFc1bSDK r1 = r2.component1
            com.appsflyer.internal.AFf1lSDK r1 = r1.component1()
            com.appsflyer.internal.AFf1iSDK r1 = r1.AFAdRevenueData
            com.appsflyer.internal.AFi1wSDK r1 = r1.getMediationNetwork
            com.appsflyer.internal.AFi1ySDK r1 = getMonetizationNetwork(r1)
            boolean r0 = r2.getCurrencyIso4217Code(r0, r1)
            r1 = 94
            int r1 = r1 / 0
            if (r0 == 0) goto L59
            goto L55
        L33:
            com.appsflyer.internal.AFc1bSDK r0 = r2.component1
            com.appsflyer.internal.AFf1lSDK r0 = r0.component1()
            com.appsflyer.internal.AFf1iSDK r0 = r0.AFAdRevenueData
            com.appsflyer.internal.AFi1wSDK r0 = r0.AFAdRevenueData
            com.appsflyer.internal.AFi1ySDK r0 = getMonetizationNetwork(r0)
            com.appsflyer.internal.AFc1bSDK r1 = r2.component1
            com.appsflyer.internal.AFf1lSDK r1 = r1.component1()
            com.appsflyer.internal.AFf1iSDK r1 = r1.AFAdRevenueData
            com.appsflyer.internal.AFi1wSDK r1 = r1.getMediationNetwork
            com.appsflyer.internal.AFi1ySDK r1 = getMonetizationNetwork(r1)
            boolean r0 = r2.getCurrencyIso4217Code(r0, r1)
            if (r0 == 0) goto L59
        L55:
            r2.component3()
            return r0
        L59:
            r2.getMediationNetwork()
            r2.AFAdRevenueData()
            int r1 = com.appsflyer.internal.AFd1nSDK.hashCode
            int r1 = r1 + 81
            int r1 = r1 % 128
            com.appsflyer.internal.AFd1nSDK.copy = r1
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFd1nSDK.getCurrencyIso4217Code():boolean");
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final void getMonetizationNetwork(Throwable th2) {
        String message;
        hashCode = (copy + 21) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Throwable cause = th2.getCause();
        String simpleName = th2.getClass().getSimpleName();
        if (cause == null) {
            message = th2.getMessage();
        } else {
            message = cause.getMessage();
            copy = (hashCode + 61) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        getCurrencyIso4217Code("exception", simpleName, getMediationNetwork(message, cause == null ? th2.getStackTrace() : cause.getStackTrace()));
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final synchronized void getRevenue() {
        hashCode = (copy + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        this.getMediationNetwork.clear();
        this.getCurrencyIso4217Code.clear();
        this.getMonetizationNetwork = 0;
        hashCode = (copy + 125) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final void q_(String str, PackageManager packageManager) {
        AFAdRevenueData(new Object[]{this, str, packageManager}, 389372347, -389372346, System.identityHashCode(this));
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final void getRevenue(String str, String str2) {
        int i10 = copy + 3;
        hashCode = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            String[] strArr = new String[0];
            strArr[0] = str2;
            getCurrencyIso4217Code(null, str, strArr);
        } else {
            getCurrencyIso4217Code(null, str, str2);
        }
        int i11 = hashCode + 61;
        copy = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 == 0) {
            int i12 = 81 / 0;
        }
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final synchronized void AFAdRevenueData() {
        try {
            if (!this.component4 && !this.AFAdRevenueData) {
                int i10 = copy + 93;
                hashCode = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i10 % 2 != 0) {
                    throw null;
                }
                return;
            }
            this.component4 = false;
            this.AFAdRevenueData = false;
            getCurrencyIso4217Code("r_debugging_off", new SimpleDateFormat("yyyy-MM-dd HH:mm:ssZ", Locale.ENGLISH).format(Long.valueOf(System.currentTimeMillis())), new String[0]);
            copy = (hashCode + 41) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private synchronized void getRevenue(String str, String str2, String str3) {
        try {
            Map<String, Object> map = this.getMediationNetwork;
            Object[] objArr = new Object[1];
            a((byte) (114 - (ViewConfiguration.getMaximumDrawingCacheSize() >> 24)), "\u0002\b\u0007\u0003㙰", 6 - (AudioTrack.getMaxVolume() > 0.0f ? 1 : (AudioTrack.getMaxVolume() == 0.0f ? 0 : -1)), objArr);
            map.put(((String) objArr[0]).intern(), Build.BRAND);
            this.getMediationNetwork.put("model", Build.MODEL);
            this.getMediationNetwork.put("platform", "Android");
            this.getMediationNetwork.put("platform_version", Build.VERSION.RELEASE);
            if (str != null) {
                try {
                    hashCode = (copy + 43) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (str.length() > 0) {
                        hashCode = (copy + 45) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        this.getMediationNetwork.put("advertiserId", str);
                    }
                } finally {
                }
            }
            if (str2 != null && str2.length() > 0) {
                this.getMediationNetwork.put("imei", str2);
            }
            if (str3 != null) {
                copy = (hashCode + 49) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (str3.length() > 0) {
                    this.getMediationNetwork.put("android_id", str3);
                    copy = (hashCode + 63) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }
        } catch (Throwable unused) {
        }
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final void getMonetizationNetwork(String str, int i10, String str2) {
        hashCode = (copy + 111) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        getCurrencyIso4217Code("server_response", str, String.valueOf(i10), str2);
        int i11 = hashCode + 5;
        copy = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 == 0) {
            throw null;
        }
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final void getMonetizationNetwork() {
        int i10 = (copy + 83) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        hashCode = i10;
        this.areAllFieldsValid = false;
        copy = (i10 + 99) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    private Map<String, Object> getMonetizationNetwork(String str) {
        hashCode = (copy + 39) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        getMonetizationNetwork(str, this.component1.AFKeystoreWrapper(), this.component1.afInfoLog());
        Map<String, Object> equals2 = equals();
        int i10 = hashCode + 45;
        copy = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            int i11 = 30 / 0;
        }
        return equals2;
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final synchronized void getMediationNetwork() {
        try {
            int i10 = copy + 13;
            hashCode = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                this.AFAdRevenueData = false;
            } else {
                this.AFAdRevenueData = false;
            }
            getRevenue();
            copydefault();
            int i11 = copy + 81;
            hashCode = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                int i12 = 88 / 0;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private synchronized void getMonetizationNetwork(String str, AFf1cSDK aFf1cSDK, AFc1eSDK aFc1eSDK) {
        try {
            AppsFlyerProperties appsFlyerProperties = AppsFlyerProperties.getInstance();
            String string = appsFlyerProperties.getString("remote_debug_static_data");
            this.getMediationNetwork.clear();
            if (string != null) {
                try {
                    this.getMediationNetwork.putAll(AFg1hSDK.getMonetizationNetwork(new JSONObject(string)));
                    copy = (hashCode + 49) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                } catch (Throwable unused) {
                }
            } else {
                getRevenue(this.component1.getCurrencyIso4217Code().component4(), aFf1cSDK.getCurrencyIso4217Code(), aFc1eSDK.AFAdRevenueData);
                StringBuilder sb2 = new StringBuilder("6.17.3.");
                sb2.append(AFa1uSDK.getRevenue);
                getRevenue(sb2.toString(), this.component1.AFKeystoreWrapper().getMediationNetwork(), appsFlyerProperties.getString("KSAppsFlyerId"), AFb1jSDK.getRevenue(this.component1.getCurrencyIso4217Code().getMonetizationNetwork));
                try {
                    int i10 = this.component1.getCurrencyIso4217Code().n_().versionCode;
                    getCurrencyIso4217Code(str, String.valueOf(i10), appsFlyerProperties.getString(AppsFlyerProperties.CHANNEL), appsFlyerProperties.getString("preInstallName"));
                } catch (Throwable unused2) {
                }
                appsFlyerProperties.set("remote_debug_static_data", new JSONObject(this.getMediationNetwork).toString());
            }
            this.getMediationNetwork.put("launch_counter", String.valueOf(this.component1.getCurrencyIso4217Code().getMonetizationNetwork.getMediationNetwork("appsFlyerCount", 0)));
            copy = (hashCode + 17) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x001a, code lost:
        r2 = 1;
        r0 = new java.lang.String[r4.length + 1];
        r0[0] = r3;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0022, code lost:
        if (r2 >= r4.length) goto L9;
     */
    /* JADX WARN: Code restructure failed: missing block: B:13:0x0024, code lost:
        r0[r2] = r4[r2].toString();
        r2 = r2 + 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x002f, code lost:
        r3 = com.appsflyer.internal.AFd1nSDK.copy + 17;
        com.appsflyer.internal.AFd1nSDK.hashCode = r3 % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x0039, code lost:
        if ((r3 % 2) == 0) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x003b, code lost:
        r3 = 26 / 0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x003e, code lost:
        return r0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x0010, code lost:
        if (r4 == null) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:7:0x0013, code lost:
        if (r4 == null) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0019, code lost:
        return new java.lang.String[]{r3};
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.String[] getMediationNetwork(java.lang.String r3, java.lang.StackTraceElement[] r4) {
        /*
            int r0 = com.appsflyer.internal.AFd1nSDK.copy
            int r0 = r0 + 49
            int r1 = r0 % 128
            com.appsflyer.internal.AFd1nSDK.hashCode = r1
            int r0 = r0 % 2
            r1 = 0
            if (r0 == 0) goto L13
            r0 = 54
            int r0 = r0 / r1
            if (r4 != 0) goto L1a
            goto L15
        L13:
            if (r4 != 0) goto L1a
        L15:
            java.lang.String[] r3 = new java.lang.String[]{r3}
            return r3
        L1a:
            int r0 = r4.length
            r2 = 1
            int r0 = r0 + r2
            java.lang.String[] r0 = new java.lang.String[r0]
            r0[r1] = r3
        L21:
            int r3 = r4.length
            if (r2 >= r3) goto L2f
            r3 = r4[r2]
            java.lang.String r3 = r3.toString()
            r0[r2] = r3
            int r2 = r2 + 1
            goto L21
        L2f:
            int r3 = com.appsflyer.internal.AFd1nSDK.copy
            int r3 = r3 + 17
            int r4 = r3 % 128
            com.appsflyer.internal.AFd1nSDK.hashCode = r4
            int r3 = r3 % 2
            if (r3 == 0) goto L3e
            r3 = 26
            int r3 = r3 / r1
        L3e:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFd1nSDK.getMediationNetwork(java.lang.String, java.lang.StackTraceElement[]):java.lang.String[]");
    }

    private synchronized void getRevenue(String str, String str2, String str3, String str4) {
        try {
            hashCode = (copy + 11) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            try {
                this.getMediationNetwork.put("sdk_version", str);
                if (str2 != null) {
                    copy = (hashCode + 109) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (str2.length() > 0) {
                        int i10 = copy + 101;
                        hashCode = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        if (i10 % 2 == 0) {
                            this.getMediationNetwork.put("devkey", str2);
                        } else {
                            this.getMediationNetwork.put("devkey", str2);
                            throw null;
                        }
                    }
                }
                if (str3 != null && str3.length() > 0) {
                    this.getMediationNetwork.put("originalAppsFlyerId", str3);
                }
                if (str4 != null && str4.length() > 0) {
                    this.getMediationNetwork.put("uid", str4);
                }
            } catch (Throwable unused) {
            }
        } finally {
        }
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final void getCurrencyIso4217Code(String str, String... strArr) {
        int i10 = hashCode + 105;
        copy = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            getCurrencyIso4217Code("public_api_call", str, strArr);
            int i11 = 57 / 0;
            return;
        }
        getCurrencyIso4217Code("public_api_call", str, strArr);
    }

    private synchronized void getCurrencyIso4217Code(String str, String str2, String str3, String str4) {
        try {
            copy = (hashCode + 35) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (str != null) {
                try {
                    if (str.length() > 0) {
                        copy = (hashCode + 7) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        this.getMediationNetwork.put("app_id", str);
                    }
                } catch (Throwable unused) {
                    return;
                }
            }
            if (str2 != null && str2.length() > 0) {
                this.getMediationNetwork.put("app_version", str2);
                copy = (hashCode + 77) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            if (str3 != null) {
                hashCode = (copy + 63) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (str3.length() > 0) {
                    copy = (hashCode + 35) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    this.getMediationNetwork.put(AppsFlyerProperties.CHANNEL, str3);
                }
            }
            if (str4 != null && str4.length() > 0) {
                this.getMediationNetwork.put("preInstall", str4);
            }
        } finally {
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x0027, code lost:
        if ((r4 % 2) == 0) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x0029, code lost:
        return false;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x002a, code lost:
        return true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x002c, code lost:
        r4 = r4.equals(r3.component1.getCurrencyIso4217Code().n_().versionName);
        com.appsflyer.internal.AFd1nSDK.copy = (com.appsflyer.internal.AFd1nSDK.hashCode + 123) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x0044, code lost:
        return r4;
     */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x0014, code lost:
        if (com.appsflyer.internal.AFk1xSDK.getMonetizationNetwork(r4) != false) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x001b, code lost:
        if (com.appsflyer.internal.AFk1xSDK.getMonetizationNetwork(r4) != false) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x001d, code lost:
        r4 = com.appsflyer.internal.AFd1nSDK.copy + 29;
        com.appsflyer.internal.AFd1nSDK.hashCode = r4 % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean getMediationNetwork(java.lang.String r4) {
        /*
            r3 = this;
            int r0 = com.appsflyer.internal.AFd1nSDK.hashCode
            int r0 = r0 + 97
            int r1 = r0 % 128
            com.appsflyer.internal.AFd1nSDK.copy = r1
            int r0 = r0 % 2
            r1 = 0
            if (r0 != 0) goto L17
            boolean r0 = com.appsflyer.internal.AFk1xSDK.getMonetizationNetwork(r4)
            r2 = 55
            int r2 = r2 / r1
            if (r0 == 0) goto L2c
            goto L1d
        L17:
            boolean r0 = com.appsflyer.internal.AFk1xSDK.getMonetizationNetwork(r4)
            if (r0 == 0) goto L2c
        L1d:
            int r4 = com.appsflyer.internal.AFd1nSDK.copy
            int r4 = r4 + 29
            int r0 = r4 % 128
            com.appsflyer.internal.AFd1nSDK.hashCode = r0
            int r4 = r4 % 2
            if (r4 == 0) goto L2a
            return r1
        L2a:
            r4 = 1
            return r4
        L2c:
            com.appsflyer.internal.AFc1bSDK r0 = r3.component1
            com.appsflyer.internal.AFc1pSDK r0 = r0.getCurrencyIso4217Code()
            android.content.pm.PackageInfo r0 = r0.n_()
            java.lang.String r0 = r0.versionName
            boolean r4 = r4.equals(r0)
            int r0 = com.appsflyer.internal.AFd1nSDK.hashCode
            int r0 = r0 + 123
            int r0 = r0 % 128
            com.appsflyer.internal.AFd1nSDK.copy = r0
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFd1nSDK.getMediationNetwork(java.lang.String):boolean");
    }

    private boolean getRevenue(@NonNull AFi1ySDK aFi1ySDK, AFi1ySDK aFi1ySDK2) {
        boolean currencyIso4217Code;
        if (aFi1ySDK.equals(aFi1ySDK2)) {
            int i10 = hashCode + 51;
            copy = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                AFInAppEventParameterName();
                throw null;
            }
            currencyIso4217Code = AFInAppEventParameterName();
        } else {
            currencyIso4217Code = getCurrencyIso4217Code(aFi1ySDK.AFAdRevenueData);
            getMonetizationNetwork(currencyIso4217Code);
        }
        int i11 = copy + 61;
        hashCode = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 != 0) {
            int i12 = 53 / 0;
        }
        return currencyIso4217Code;
    }

    private static /* synthetic */ Object getRevenue(Object[] objArr) {
        AFd1nSDK aFd1nSDK = (AFd1nSDK) objArr[0];
        int i10 = hashCode + 33;
        copy = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            aFd1nSDK.component1.component2().getCurrencyIso4217Code("participantInProxy");
            int i11 = 63 / 0;
            return null;
        }
        aFd1nSDK.component1.component2().getCurrencyIso4217Code("participantInProxy");
        return null;
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x001c, code lost:
        if (r4.getMonetizationNetwork >= 98304) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0027, code lost:
        if (r4.getMonetizationNetwork >= 98304) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x002b, code lost:
        r0 = java.lang.System.currentTimeMillis();
        r7 = android.text.TextUtils.join(", ", r7);
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x0035, code lost:
        if (r5 == null) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0037, code lost:
        r3 = new java.lang.StringBuilder();
        r3.append(r0);
        r3.append(" ");
        r3.append(java.lang.Thread.currentThread().getId());
        r3.append(" _/AppsFlyer_6.17.3 [");
        r3.append(r5);
        r3.append("] ");
        r3.append(r6);
        r3.append(" ");
        r3.append(r7);
        r5 = r3.toString();
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x006c, code lost:
        r5 = new java.lang.StringBuilder();
        r5.append(r0);
        r5.append(" ");
        r5.append(java.lang.Thread.currentThread().getId());
        r5.append(" ");
        r5.append(r6);
        r5.append("/AppsFlyer_6.17.3 ");
        r5.append(r7);
        r5 = r5.toString();
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x0098, code lost:
        r6 = r4.getMonetizationNetwork + (r5.length() << 1);
        r7 = com.appsflyer.internal.AFd1nSDK.getRevenue;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x00a3, code lost:
        if (r6 <= r7) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x00a5, code lost:
        r5 = r5.substring(0, (r7 - r4.getMonetizationNetwork) / 2);
        r2 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x00af, code lost:
        r4.getCurrencyIso4217Code.add(r5);
        r4.getMonetizationNetwork += r5.length() << 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x00be, code lost:
        if (r2 == false) goto L25;
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x00c0, code lost:
        r5 = com.appsflyer.internal.AFd1nSDK.hashCode + 101;
        com.appsflyer.internal.AFd1nSDK.copy = r5 % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x00ca, code lost:
        if ((r5 % 2) != 0) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:30:0x00cc, code lost:
        r4.getCurrencyIso4217Code.add("+~+~ The limit has been exceeded, and no more data is available. +~+~");
        r4.getMonetizationNetwork *= 10496;
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x00da, code lost:
        r4.getCurrencyIso4217Code.add("+~+~ The limit has been exceeded, and no more data is available. +~+~");
        r4.getMonetizationNetwork += 138;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x00e7, code lost:
        com.appsflyer.internal.AFd1nSDK.copy = (com.appsflyer.internal.AFd1nSDK.hashCode + 11) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:34:0x00f0, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x00f2, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private synchronized void getCurrencyIso4217Code(java.lang.String r5, java.lang.String r6, java.lang.String... r7) {
        /*
            Method dump skipped, instructions count: 255
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFd1nSDK.getCurrencyIso4217Code(java.lang.String, java.lang.String, java.lang.String[]):void");
    }

    private static AFi1ySDK getMonetizationNetwork(AFi1wSDK aFi1wSDK) {
        AFi1zSDK aFi1zSDK;
        int i10 = hashCode + 65;
        int i11 = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        copy = i11;
        if (i10 % 2 != 0) {
            if (aFi1wSDK != null && (aFi1zSDK = aFi1wSDK.getMonetizationNetwork) != null) {
                return aFi1zSDK.getMediationNetwork;
            }
            hashCode = (i11 + 85) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return null;
        }
        throw null;
    }

    private void getMonetizationNetwork(boolean z10) {
        copy = (hashCode + 47) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        this.component1.component2().getCurrencyIso4217Code("participantInProxy", z10);
        int i10 = copy + 39;
        hashCode = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            throw null;
        }
    }

    @Override // com.appsflyer.internal.AFd1mSDK
    public final void getMonetizationNetwork(String str, String str2) {
        AFAdRevenueData(new Object[]{this, str, str2}, 115232387, -115232384, System.identityHashCode(this));
    }

    private synchronized boolean getCurrencyIso4217Code(AFi1ySDK aFi1ySDK, AFi1ySDK aFi1ySDK2) {
        boolean z10 = true;
        try {
            if (aFi1ySDK == null) {
                int i10 = hashCode + 9;
                copy = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i10 % 2 == 0) {
                    AFAdRevenueData(new Object[]{this}, -788691882, 788691884, System.identityHashCode(this));
                } else {
                    AFAdRevenueData(new Object[]{this}, -788691882, 788691884, System.identityHashCode(this));
                    z10 = false;
                }
                copy = (hashCode + 45) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return z10;
            } else if (!aFi1ySDK.getMonetizationNetwork()) {
                int i11 = hashCode + 99;
                copy = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return i11 % 2 == 0 ? false : false;
            } else if (this.component1.getCurrencyIso4217Code().getMonetizationNetwork.getMediationNetwork("appsFlyerCount", 0) > aFi1ySDK.getCurrencyIso4217Code) {
                copy = (hashCode + 47) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return false;
            } else {
                copy = (hashCode + 25) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (getRevenue(aFi1ySDK, aFi1ySDK2)) {
                    if (getMediationNetwork(aFi1ySDK.getMonetizationNetwork)) {
                        return getCurrencyIso4217Code(aFi1ySDK.component3);
                    }
                    return false;
                }
                return false;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private static boolean getCurrencyIso4217Code(String str) {
        hashCode = (copy + 45) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (AFk1xSDK.getMonetizationNetwork(str)) {
            copy = (hashCode + 43) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return true;
        }
        new AFd1sSDK();
        return AFd1sSDK.getCurrencyIso4217Code(component4(), str);
    }

    private boolean getCurrencyIso4217Code(float f10) {
        int i10 = hashCode;
        copy = (i10 + 39) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        double d10 = f10;
        if (d10 >= 1.0d) {
            return true;
        }
        if (d10 <= 0.0d) {
            int i11 = i10 + 121;
            copy = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return i11 % 2 == 0;
        } else if (component1() <= f10) {
            int i12 = hashCode + 123;
            copy = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return i12 % 2 != 0;
        } else {
            return false;
        }
    }
}
