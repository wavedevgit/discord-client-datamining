package com.appsflyer.internal;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFi1iSDK {
    public final long getCurrencyIso4217Code;
    public final String getMediationNetwork;
    public final String getMonetizationNetwork;
    public final long getRevenue;

    public AFi1iSDK(long j10, long j11, String str, String str2) {
        this.getRevenue = j10;
        this.getCurrencyIso4217Code = j11;
        this.getMonetizationNetwork = str;
        this.getMediationNetwork = str2;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof AFi1iSDK)) {
            return false;
        }
        AFi1iSDK aFi1iSDK = (AFi1iSDK) obj;
        if (this.getRevenue == aFi1iSDK.getRevenue && this.getCurrencyIso4217Code == aFi1iSDK.getCurrencyIso4217Code && Intrinsics.areEqual(this.getMonetizationNetwork, aFi1iSDK.getMonetizationNetwork) && Intrinsics.areEqual(this.getMediationNetwork, aFi1iSDK.getMediationNetwork)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2 = ((Long.hashCode(this.getRevenue) * 31) + Long.hashCode(this.getCurrencyIso4217Code)) * 31;
        String str = this.getMonetizationNetwork;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode2 + hashCode) * 31;
        String str2 = this.getMediationNetwork;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return i11 + i10;
    }

    @NotNull
    public final String toString() {
        long j10 = this.getRevenue;
        long j11 = this.getCurrencyIso4217Code;
        String str = this.getMonetizationNetwork;
        String str2 = this.getMediationNetwork;
        return "PlayIntegrityApiData(piaTimestamp=" + j10 + ", ttrMillis=" + j11 + ", piaToken=" + str + ", errorCode=" + str2 + ")";
    }
}
