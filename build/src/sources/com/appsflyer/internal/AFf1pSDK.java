package com.appsflyer.internal;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import androidx.annotation.NonNull;
import com.appsflyer.AFLogger;
import com.appsflyer.internal.components.network.http.ResponseNetwork;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFf1pSDK extends AFf1uSDK {
    private static int $10 = 0;
    private static int $11 = 1;
    private static int AFInAppEventParameterName = 1760829264;
    private static int AFInAppEventType = 2059786070;
    private static byte[] AFKeystoreWrapper = {-102, 97, -125, 124, 108};
    private static short[] AFLogger = null;

    /* renamed from: d  reason: collision with root package name */
    private static int f7852d = 0;
    private static int registerClient = -1524191679;
    private static int unregisterClient = 1;
    private final AFc1pSDK copydefault;
    private final AFg1rSDK equals;
    private final String hashCode;
    private final AFc1gSDK toString;

    public AFf1pSDK(@NonNull String str, @NonNull AFc1bSDK aFc1bSDK) {
        super(new AFg1uSDK(), aFc1bSDK, str);
        this.copydefault = aFc1bSDK.getCurrencyIso4217Code();
        this.toString = aFc1bSDK.registerClient();
        this.hashCode = str;
        this.equals = aFc1bSDK.component4();
    }

    /* JADX WARN: Removed duplicated region for block: B:31:0x00c7  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static void a(int r13, byte r14, short r15, int r16, int r17, java.lang.Object[] r18) {
        /*
            Method dump skipped, instructions count: 270
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFf1pSDK.a(int, byte, short, int, int, java.lang.Object[]):void");
    }

    private void equals() {
        unregisterClient = (f7852d + 41) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFf1uSDK) this).areAllFieldsValid.getCurrencyIso4217Code("sentRegisterRequestToAF", true);
        AFLogger.afDebugLog("[register] Successfully registered for Uninstall Tracking");
        unregisterClient = (f7852d + 9) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    public static /* synthetic */ Object getMediationNetwork(Object[] objArr, int i10, int i11, int i12) {
        int i13 = ~i11;
        int i14 = (i10 * 319) + (i11 * (-317)) + (((~((~i10) | i12)) | i13) * (-318));
        int i15 = ~(i13 | i12);
        int i16 = ~i12;
        return (i14 + ((i15 | (~((i16 | i10) | i11))) * 318)) + (((~((i10 | i11) | i12)) | (~((i13 | i16) | i10))) * 318) != 1 ? getMonetizationNetwork(objArr) : getMediationNetwork(objArr);
    }

    private static /* synthetic */ Object getMonetizationNetwork(Object[] objArr) {
        PackageManager packageManager = (PackageManager) objArr[1];
        ApplicationInfo applicationInfo = ((AFf1pSDK) objArr[0]).copydefault.n_().applicationInfo;
        if (applicationInfo == null) {
            int i10 = unregisterClient + 103;
            f7852d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                return "";
            }
            throw null;
        }
        String charSequence = packageManager.getApplicationLabel(applicationInfo).toString();
        int i11 = f7852d + 73;
        unregisterClient = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 != 0) {
            return charSequence;
        }
        throw null;
    }

    @NonNull
    private String s_(PackageManager packageManager) {
        return (String) getMediationNetwork(new Object[]{this, packageManager}, -182789500, 182789500, System.identityHashCode(this));
    }

    @Override // com.appsflyer.internal.AFf1uSDK
    protected final void AFAdRevenueData(AFh1jSDK aFh1jSDK) {
        int i10 = unregisterClient + 29;
        f7852d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            return;
        }
        throw null;
    }

    @Override // com.appsflyer.internal.AFf1uSDK
    protected final void areAllFieldsValid(AFh1jSDK aFh1jSDK) {
        int i10 = unregisterClient + 23;
        f7852d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            String component4 = this.copydefault.component4();
            if (component4 != null) {
                aFh1jSDK.getMonetizationNetwork("advertiserId", component4);
                unregisterClient = (f7852d + 35) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return;
            }
            return;
        }
        this.copydefault.component4();
        throw null;
    }

    @Override // com.appsflyer.internal.AFf1uSDK, com.appsflyer.internal.AFe1eSDK
    protected final boolean copydefault() {
        return ((Boolean) getMediationNetwork(new Object[]{this}, 222839034, -222839033, System.identityHashCode(this))).booleanValue();
    }

    @Override // com.appsflyer.internal.AFf1uSDK
    protected final void getCurrencyIso4217Code(AFh1jSDK aFh1jSDK) {
        f7852d = (unregisterClient + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.internal.AFe1eSDK, com.appsflyer.internal.AFe1lSDK
    public final void getRevenue() {
        f7852d = (unregisterClient + 55) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        super.getRevenue();
        ResponseNetwork responseNetwork = ((AFe1eSDK) this).component3;
        if (responseNetwork != null && responseNetwork.isSuccessful()) {
            equals();
        }
        unregisterClient = (f7852d + 49) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x0034, code lost:
        if (r11.getRevenue() != false) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0036, code lost:
        r13.getMonetizationNetwork("app_version_code", java.lang.Integer.toString(r12.copydefault.n_().versionCode));
        r13.getMonetizationNetwork("app_version_name", r12.copydefault.n_().versionName);
        r13.getMonetizationNetwork("app_name", (java.lang.String) getMediationNetwork(new java.lang.Object[]{r12, r2.getPackageManager()}, -182789500, 182789500, java.lang.System.identityHashCode(r12)));
        r13.getMonetizationNetwork("installDate", com.appsflyer.internal.AFa1uSDK.getMediationNetwork(new java.text.SimpleDateFormat("yyyy-MM-dd_HHmmssZ", java.util.Locale.US), r12.copydefault.n_().firstInstallTime));
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x008c, code lost:
        r0 = move-exception;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x008d, code lost:
        com.appsflyer.AFLogger.afErrorLog("Exception while collecting application version info.", r0);
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x0184, code lost:
        com.appsflyer.AFLogger.afInfoLog("CustomerUserId not set, Tracking is disabled", true);
     */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x0190, code lost:
        throw new java.lang.IllegalStateException("CustomerUserId not set, register is not sent");
     */
    /* JADX WARN: Code restructure failed: missing block: B:39:0x0198, code lost:
        throw new java.lang.IllegalStateException("Context is not provided, can't send register request");
     */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x001b, code lost:
        if (r0 != null) goto L5;
     */
    /* JADX WARN: Code restructure failed: missing block: B:6:0x001d, code lost:
        r11 = r2;
        r2 = r0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x002c, code lost:
        if (r0 != null) goto L5;
     */
    /* JADX WARN: Removed duplicated region for block: B:25:0x00ff  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x010e  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x016b  */
    /* JADX WARN: Removed duplicated region for block: B:44:? A[RETURN, SYNTHETIC] */
    @Override // com.appsflyer.internal.AFf1uSDK
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void getMediationNetwork(com.appsflyer.internal.AFh1jSDK r13) {
        /*
            Method dump skipped, instructions count: 409
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFf1pSDK.getMediationNetwork(com.appsflyer.internal.AFh1jSDK):void");
    }

    @Override // com.appsflyer.internal.AFf1uSDK
    protected final void getMonetizationNetwork(AFh1jSDK aFh1jSDK) {
        unregisterClient = (f7852d + 103) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.internal.AFf1uSDK
    protected final void getRevenue(AFh1jSDK aFh1jSDK) {
        int i10 = unregisterClient + 7;
        f7852d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            throw null;
        }
    }

    private static /* synthetic */ Object getMediationNetwork(Object[] objArr) {
        AFf1pSDK aFf1pSDK = (AFf1pSDK) objArr[0];
        int i10 = (f7852d + 35) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        unregisterClient = i10;
        int i11 = i10 + 69;
        f7852d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 != 0) {
            int i12 = 75 / 0;
            return Boolean.FALSE;
        }
        return Boolean.FALSE;
    }
}
