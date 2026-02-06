package com.android.billingclient.api;

import android.content.Context;
import com.google.android.gms.internal.play_billing.v5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class w {

    /* renamed from: a  reason: collision with root package name */
    private boolean f8030a;

    /* renamed from: b  reason: collision with root package name */
    private xb.h f8031b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(Context context) {
        try {
            zb.t.f(context);
            this.f8031b = zb.t.c().g(com.google.android.datatransport.cct.a.f11518g).a("PLAY_BILLING_LIBRARY", v5.class, xb.c.b("proto"), new xb.g() { // from class: a6.c0
                @Override // xb.g
                public final Object apply(Object obj) {
                    return ((v5) obj).e();
                }
            });
        } catch (Throwable unused) {
            this.f8030a = true;
        }
    }

    public final void a(v5 v5Var) {
        if (this.f8030a) {
            com.google.android.gms.internal.play_billing.a0.i("BillingLogger", "Skipping logging since initialization failed.");
            return;
        }
        try {
            this.f8031b.a(xb.d.e(v5Var));
        } catch (Throwable unused) {
            com.google.android.gms.internal.play_billing.a0.i("BillingLogger", "logging failed.");
        }
    }
}
