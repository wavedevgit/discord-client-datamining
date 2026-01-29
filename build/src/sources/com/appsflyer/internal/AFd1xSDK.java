package com.appsflyer.internal;

import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface AFd1xSDK {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface AFa1ySDK {
        void onConfigurationChanged(boolean z10);
    }

    void getCurrencyIso4217Code();

    void getMediationNetwork(AFa1ySDK aFa1ySDK);

    void getRevenue();

    void getRevenue(@NonNull Throwable th2, @NonNull String str);
}
