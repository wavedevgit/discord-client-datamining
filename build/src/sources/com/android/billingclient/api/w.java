package com.android.billingclient.api;

import android.content.Context;
import com.google.android.gms.internal.play_billing.v5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class w {

    /* renamed from: a  reason: collision with root package name */
    private boolean f8747a;

    /* renamed from: b  reason: collision with root package name */
    private yb.h f8748b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(Context context) {
        try {
            ac.t.f(context);
            this.f8748b = ac.t.c().g(com.google.android.datatransport.cct.a.f12235g).a("PLAY_BILLING_LIBRARY", v5.class, yb.c.b("proto"), new yb.g() { // from class: b6.c0
                @Override // yb.g
                public final Object apply(Object obj) {
                    return ((v5) obj).e();
                }
            });
        } catch (Throwable unused) {
            this.f8747a = true;
        }
    }

    public final void a(v5 v5Var) {
        if (this.f8747a) {
            com.google.android.gms.internal.play_billing.a0.i("BillingLogger", "Skipping logging since initialization failed.");
            return;
        }
        try {
            this.f8748b.a(yb.d.e(v5Var));
        } catch (Throwable unused) {
            com.google.android.gms.internal.play_billing.a0.i("BillingLogger", "logging failed.");
        }
    }
}
