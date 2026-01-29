package com.appsflyer.internal;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFb1gSDK {
    @NotNull
    public final String getCurrencyIso4217Code;
    public final int getRevenue;

    public AFb1gSDK(int i10, @NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "");
        this.getRevenue = i10;
        this.getCurrencyIso4217Code = str;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof AFb1gSDK)) {
            return false;
        }
        AFb1gSDK aFb1gSDK = (AFb1gSDK) obj;
        if (this.getRevenue == aFb1gSDK.getRevenue && Intrinsics.areEqual(this.getCurrencyIso4217Code, aFb1gSDK.getCurrencyIso4217Code)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return (Integer.hashCode(this.getRevenue) * 31) + this.getCurrencyIso4217Code.hashCode();
    }

    @NotNull
    public final String toString() {
        int i10 = this.getRevenue;
        String str = this.getCurrencyIso4217Code;
        return "AppSetIdModel(scope=" + i10 + ", id=" + str + ")";
    }
}
