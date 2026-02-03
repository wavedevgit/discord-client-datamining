package com.android.billingclient.api;

import android.os.Bundle;
import com.android.billingclient.api.BillingResult;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static f0 a(Bundle bundle, String str, String str2) {
        BillingResult billingResult = u.f8759j;
        if (bundle == null) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", String.format("%s got null owned items list", str2));
            return new f0(billingResult, 54);
        }
        int b10 = com.google.android.gms.internal.play_billing.a0.b(bundle, "BillingClient");
        String e10 = com.google.android.gms.internal.play_billing.a0.e(bundle, "BillingClient");
        BillingResult.a c10 = BillingResult.c();
        c10.c(b10);
        c10.b(e10);
        BillingResult a10 = c10.a();
        if (b10 != 0) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", String.format("%s failed. Response code: %s", str2, Integer.valueOf(b10)));
            return new f0(a10, 23);
        } else if (bundle.containsKey("INAPP_PURCHASE_ITEM_LIST") && bundle.containsKey("INAPP_PURCHASE_DATA_LIST") && bundle.containsKey("INAPP_DATA_SIGNATURE_LIST")) {
            ArrayList<String> stringArrayList = bundle.getStringArrayList("INAPP_PURCHASE_ITEM_LIST");
            ArrayList<String> stringArrayList2 = bundle.getStringArrayList("INAPP_PURCHASE_DATA_LIST");
            ArrayList<String> stringArrayList3 = bundle.getStringArrayList("INAPP_DATA_SIGNATURE_LIST");
            if (stringArrayList == null) {
                com.google.android.gms.internal.play_billing.a0.i("BillingClient", String.format("Bundle returned from %s contains null SKUs list.", str2));
                return new f0(billingResult, 56);
            } else if (stringArrayList2 == null) {
                com.google.android.gms.internal.play_billing.a0.i("BillingClient", String.format("Bundle returned from %s contains null purchases list.", str2));
                return new f0(billingResult, 57);
            } else if (stringArrayList3 == null) {
                com.google.android.gms.internal.play_billing.a0.i("BillingClient", String.format("Bundle returned from %s contains null signatures list.", str2));
                return new f0(billingResult, 58);
            } else {
                return new f0(u.f8761l, 1);
            }
        } else {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", String.format("Bundle returned from %s doesn't contain required fields.", str2));
            return new f0(billingResult, 55);
        }
    }
}
