package com.appsflyer.internal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFh1gSDK extends AFh1jSDK {
    public final AFe1mSDK toString;

    @Deprecated
    public AFh1gSDK() {
        this.toString = null;
    }

    @Override // com.appsflyer.internal.AFh1jSDK
    public final AFe1mSDK getCurrencyIso4217Code() {
        AFe1mSDK aFe1mSDK = this.toString;
        if (aFe1mSDK != null) {
            return aFe1mSDK;
        }
        return AFe1mSDK.CACHED_EVENT;
    }

    public AFh1gSDK(String str, byte[] bArr, String str2, AFe1mSDK aFe1mSDK) {
        super(null, str, Boolean.FALSE);
        this.getRevenue = str2;
        getMonetizationNetwork(bArr);
        this.toString = aFe1mSDK;
    }
}
