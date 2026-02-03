package com.android.billingclient.api;

import android.os.Bundle;
import com.android.billingclient.api.BillingResult;
import com.google.android.gms.internal.play_billing.g6;
import org.json.JSONException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class q extends g6 {

    /* renamed from: c  reason: collision with root package name */
    final a6.d f8743c;

    /* renamed from: d  reason: collision with root package name */
    final t f8744d;

    /* renamed from: e  reason: collision with root package name */
    final int f8745e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q(a6.d dVar, t tVar, int i10, a6.r rVar) {
        this.f8743c = dVar;
        this.f8744d = tVar;
        this.f8745e = i10;
    }

    @Override // com.google.android.gms.internal.play_billing.h6
    public final void H0(Bundle bundle) {
        if (bundle == null) {
            t tVar = this.f8744d;
            BillingResult billingResult = u.f8759j;
            tVar.d(s.a(63, 13, billingResult), this.f8745e);
            this.f8743c.onBillingConfigResponse(billingResult, null);
            return;
        }
        int b10 = com.google.android.gms.internal.play_billing.a0.b(bundle, "BillingClient");
        String e10 = com.google.android.gms.internal.play_billing.a0.e(bundle, "BillingClient");
        BillingResult.a c10 = BillingResult.c();
        c10.c(b10);
        c10.b(e10);
        if (b10 != 0) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "getBillingConfig() failed. Response code: " + b10);
            BillingResult a10 = c10.a();
            this.f8744d.d(s.a(23, 13, a10), this.f8745e);
            this.f8743c.onBillingConfigResponse(a10, null);
        } else if (!bundle.containsKey("BILLING_CONFIG")) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "getBillingConfig() returned a bundle with neither an error nor a billing config response");
            c10.c(6);
            BillingResult a11 = c10.a();
            this.f8744d.d(s.a(64, 13, a11), this.f8745e);
            this.f8743c.onBillingConfigResponse(a11, null);
        } else {
            try {
                this.f8743c.onBillingConfigResponse(c10.a(), new BillingConfig(bundle.getString("BILLING_CONFIG")));
            } catch (JSONException e11) {
                com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Got a JSON exception trying to decode BillingConfig. \n Exception: ", e11);
                t tVar2 = this.f8744d;
                BillingResult billingResult2 = u.f8759j;
                tVar2.d(s.a(65, 13, billingResult2), this.f8745e);
                this.f8743c.onBillingConfigResponse(billingResult2, null);
            }
        }
    }
}
