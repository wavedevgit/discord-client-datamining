package com.appsflyer.internal;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFc1vSDK {
    @NotNull
    final List<AFe1mSDK> AFAdRevenueData;
    @NotNull
    final String getCurrencyIso4217Code;
    final int getMediationNetwork;

    /* JADX WARN: Multi-variable type inference failed */
    public AFc1vSDK(@NotNull String str, @NotNull List<? extends AFe1mSDK> list, int i10) {
        Intrinsics.checkNotNullParameter(str, "");
        Intrinsics.checkNotNullParameter(list, "");
        this.getCurrencyIso4217Code = str;
        this.AFAdRevenueData = list;
        this.getMediationNetwork = i10;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof AFc1vSDK)) {
            return false;
        }
        AFc1vSDK aFc1vSDK = (AFc1vSDK) obj;
        if (Intrinsics.areEqual(this.getCurrencyIso4217Code, aFc1vSDK.getCurrencyIso4217Code) && Intrinsics.areEqual(this.AFAdRevenueData, aFc1vSDK.AFAdRevenueData) && this.getMediationNetwork == aFc1vSDK.getMediationNetwork) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return (((this.getCurrencyIso4217Code.hashCode() * 31) + this.AFAdRevenueData.hashCode()) * 31) + Integer.hashCode(this.getMediationNetwork);
    }

    @NotNull
    public final String toString() {
        String str = this.getCurrencyIso4217Code;
        List<AFe1mSDK> list = this.AFAdRevenueData;
        int i10 = this.getMediationNetwork;
        return "StorageConfigTypeEntry(cacheDirName=" + str + ", eventTypes=" + list + ", maxCapacity=" + i10 + ")";
    }
}
