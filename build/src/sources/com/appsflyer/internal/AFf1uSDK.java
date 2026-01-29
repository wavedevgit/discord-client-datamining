package com.appsflyer.internal;

import androidx.annotation.NonNull;
import com.appsflyer.attribution.AppsFlyerRequestListener;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AFf1uSDK extends AFe1eSDK<String> {
    private static final AFe1mSDK[] AFLogger = {AFe1mSDK.DLSDK, AFe1mSDK.ONELINK, AFe1mSDK.REGISTER};
    private final AFf1gSDK AFInAppEventType;
    protected final AFc1oSDK areAllFieldsValid;
    protected final AFg1rSDK copy;
    private final AFe1ySDK copydefault;
    private final AFf1lSDK equals;
    @NonNull
    private final AFc1pSDK hashCode;
    private final AFc1gSDK registerClient;
    private final AFh1jSDK toString;

    public AFf1uSDK(@NonNull AFh1jSDK aFh1jSDK, @NonNull AFc1bSDK aFc1bSDK) {
        this(aFh1jSDK, aFc1bSDK, null);
    }

    protected void AFAdRevenueData(AFh1jSDK aFh1jSDK) {
        this.copy.getMediationNetwork(aFh1jSDK);
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected final AppsFlyerRequestListener areAllFieldsValid() {
        return this.toString.getMonetizationNetwork;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected boolean copydefault() {
        return true;
    }

    protected void getCurrencyIso4217Code(AFh1jSDK aFh1jSDK) {
        this.copy.getCurrencyIso4217Code(aFh1jSDK);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: Removed duplicated region for block: B:30:0x009c A[Catch: all -> 0x0058, TryCatch #1 {all -> 0x0058, blocks: (B:7:0x001e, B:9:0x0024, B:11:0x0054, B:14:0x005d, B:16:0x0063, B:17:0x006c, B:19:0x0077, B:24:0x0083, B:27:0x008b, B:28:0x0096, B:30:0x009c, B:32:0x00b6, B:34:0x00bb, B:36:0x00d0, B:37:0x00d7, B:39:0x00db, B:42:0x00e2, B:43:0x00e9, B:33:0x00b9, B:44:0x00ec, B:46:0x00f6, B:47:0x0103, B:2:0x0000), top: B:51:0x0000 }] */
    /* JADX WARN: Removed duplicated region for block: B:46:0x00f6 A[Catch: all -> 0x0058, TryCatch #1 {all -> 0x0058, blocks: (B:7:0x001e, B:9:0x0024, B:11:0x0054, B:14:0x005d, B:16:0x0063, B:17:0x006c, B:19:0x0077, B:24:0x0083, B:27:0x008b, B:28:0x0096, B:30:0x009c, B:32:0x00b6, B:34:0x00bb, B:36:0x00d0, B:37:0x00d7, B:39:0x00db, B:42:0x00e2, B:43:0x00e9, B:33:0x00b9, B:44:0x00ec, B:46:0x00f6, B:47:0x0103, B:2:0x0000), top: B:51:0x0000 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void getMediationNetwork(com.appsflyer.internal.AFh1jSDK r9) {
        /*
            Method dump skipped, instructions count: 284
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFf1uSDK.getMediationNetwork(com.appsflyer.internal.AFh1jSDK):void");
    }

    protected void getMonetizationNetwork(AFh1jSDK aFh1jSDK) {
        this.copy.getMonetizationNetwork(aFh1jSDK);
    }

    protected void getRevenue(AFh1jSDK aFh1jSDK) {
        this.copy.getCurrencyIso4217Code(aFh1jSDK.getCurrencyIso4217Code);
    }

    public AFf1uSDK(@NonNull AFh1jSDK aFh1jSDK, @NonNull AFc1bSDK aFc1bSDK, String str) {
        super(aFh1jSDK.getCurrencyIso4217Code(), new AFe1mSDK[]{AFe1mSDK.RC_CDN, AFe1mSDK.FETCH_ADVERTISING_ID}, aFc1bSDK, str);
        this.toString = aFh1jSDK;
        this.copydefault = aFc1bSDK.AFInAppEventParameterName();
        this.areAllFieldsValid = aFc1bSDK.component2();
        this.equals = aFc1bSDK.component1();
        this.registerClient = aFc1bSDK.registerClient();
        this.hashCode = aFc1bSDK.getCurrencyIso4217Code();
        this.copy = aFc1bSDK.component4();
        this.AFInAppEventType = aFc1bSDK.force();
        for (AFe1mSDK aFe1mSDK : AFLogger) {
            if (this.getCurrencyIso4217Code == aFe1mSDK) {
                return;
            }
        }
        int i10 = this.toString.component1;
        AFe1mSDK aFe1mSDK2 = this.getCurrencyIso4217Code;
        if (i10 <= 0) {
            AFe1mSDK aFe1mSDK3 = AFe1mSDK.CONVERSION;
            if (aFe1mSDK2 != aFe1mSDK3) {
                this.getMediationNetwork.add(aFe1mSDK3);
                return;
            }
            return;
        }
        this.getRevenue.add(AFe1mSDK.CONVERSION);
    }

    protected void areAllFieldsValid(AFh1jSDK aFh1jSDK) {
        this.copy.AFAdRevenueData(aFh1jSDK);
    }

    /* JADX WARN: Removed duplicated region for block: B:64:0x0123  */
    /* JADX WARN: Removed duplicated region for block: B:67:0x012a  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x0145  */
    /* JADX WARN: Removed duplicated region for block: B:75:0x015c  */
    @Override // com.appsflyer.internal.AFe1eSDK
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected final com.appsflyer.internal.AFd1jSDK<java.lang.String> getRevenue(@androidx.annotation.NonNull java.lang.String r21) {
        /*
            Method dump skipped, instructions count: 358
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFf1uSDK.getRevenue(java.lang.String):com.appsflyer.internal.AFd1jSDK");
    }
}
