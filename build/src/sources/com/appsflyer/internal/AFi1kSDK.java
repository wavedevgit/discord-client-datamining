package com.appsflyer.internal;

import android.app.Activity;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface AFi1kSDK {
    @NotNull
    String getCurrencyIso4217Code(Activity activity);

    String getMediationNetwork(Activity activity);

    void getMonetizationNetwork(@NotNull Activity activity);
}
