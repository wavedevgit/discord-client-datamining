package a6;

import com.android.billingclient.api.BillingResult;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface c {
    void onBillingServiceDisconnected();

    void onBillingSetupFinished(BillingResult billingResult);
}
