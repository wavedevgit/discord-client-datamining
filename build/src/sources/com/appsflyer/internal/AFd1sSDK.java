package com.appsflyer.internal;

import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFd1sSDK {
    public static boolean getCurrencyIso4217Code(@NotNull String str, @NotNull String str2) {
        Intrinsics.checkNotNullParameter(str, "");
        Intrinsics.checkNotNullParameter(str2, "");
        int mediationNetwork = AFk1zSDK.getMediationNetwork(str);
        int mediationNetwork2 = AFk1zSDK.getMediationNetwork(str2);
        Pair<Integer, Integer> currencyIso4217Code = AFd1rSDK.getCurrencyIso4217Code(str2);
        Pair<Integer, Integer> monetizationNetwork = AFd1rSDK.getMonetizationNetwork(str2);
        if (mediationNetwork2 != -1 && currencyIso4217Code == null) {
            if (mediationNetwork2 == mediationNetwork) {
                return true;
            }
            return false;
        } else if (monetizationNetwork != null) {
            if (((Number) monetizationNetwork.c()).intValue() <= mediationNetwork && mediationNetwork <= ((Number) monetizationNetwork.d()).intValue()) {
                return true;
            }
            return false;
        } else if (currencyIso4217Code != null && ((Number) currencyIso4217Code.c()).intValue() <= mediationNetwork && mediationNetwork <= ((Number) currencyIso4217Code.d()).intValue()) {
            return true;
        } else {
            return false;
        }
    }
}
