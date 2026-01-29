package com.appsflyer.internal;

import java.util.List;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface AFc1uSDK {
    void getCurrencyIso4217Code();

    boolean getCurrencyIso4217Code(String str);

    @NotNull
    List<AFc1tSDK> getMediationNetwork();

    String getMonetizationNetwork(@NotNull AFc1tSDK aFc1tSDK);

    void getMonetizationNetwork();
}
