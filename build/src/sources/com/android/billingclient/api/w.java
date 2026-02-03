package com.android.billingclient.api;

import android.content.Context;
import com.google.android.gms.internal.play_billing.v5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class w {

    /* renamed from: a  reason: collision with root package name */
    private boolean f7746a;

    /* renamed from: b  reason: collision with root package name */
    private xb.h f7747b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(Context context) {
        try {
            zb.t.f(context);
            this.f7747b = zb.t.c().g(com.google.android.datatransport.cct.a.f11234g).a("PLAY_BILLING_LIBRARY", v5.class, xb.c.b("proto"), new xb.g() { // from class: a6.c0
                @Override // xb.g
                public final Object apply(Object obj) {
                    return ((v5) obj).e();
                }
            });
        } catch (Throwable unused) {
            this.f7746a = true;
        }
    }

    public final void a(v5 v5Var) {
        if (this.f7746a) {
            com.google.android.gms.internal.play_billing.a0.i("BillingLogger", "Skipping logging since initialization failed.");
            return;
        }
        try {
            this.f7747b.a(xb.d.e(v5Var));
        } catch (Throwable unused) {
            com.google.android.gms.internal.play_billing.a0.i("BillingLogger", "logging failed.");
        }
    }
}
