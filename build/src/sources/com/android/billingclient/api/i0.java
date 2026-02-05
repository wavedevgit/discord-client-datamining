package com.android.billingclient.api;

import android.content.Context;
import android.content.IntentFilter;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f8055a;

    /* renamed from: b  reason: collision with root package name */
    private final a6.k f8056b;

    /* renamed from: c  reason: collision with root package name */
    private final t f8057c;

    /* renamed from: d  reason: collision with root package name */
    private final h0 f8058d = new h0(this, true);

    /* renamed from: e  reason: collision with root package name */
    private final h0 f8059e = new h0(this, false);

    /* renamed from: f  reason: collision with root package name */
    private boolean f8060f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Context context, a6.k kVar, a6.d0 d0Var, a6.x xVar, a6.n nVar, t tVar) {
        this.f8055a = context;
        this.f8056b = kVar;
        this.f8057c = tVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ a6.x a(i0 i0Var) {
        i0Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ a6.n e(i0 i0Var) {
        i0Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final a6.k d() {
        return this.f8056b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f() {
        this.f8058d.c(this.f8055a);
        this.f8059e.c(this.f8055a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(boolean z10) {
        IntentFilter intentFilter = new IntentFilter("com.android.vending.billing.PURCHASES_UPDATED");
        IntentFilter intentFilter2 = new IntentFilter("com.android.vending.billing.LOCAL_BROADCAST_PURCHASES_UPDATED");
        intentFilter2.addAction("com.android.vending.billing.ALTERNATIVE_BILLING");
        this.f8060f = z10;
        this.f8059e.a(this.f8055a, intentFilter2);
        if (this.f8060f) {
            this.f8058d.b(this.f8055a, intentFilter, "com.google.android.finsky.permission.PLAY_BILLING_LIBRARY_BROADCAST");
        } else {
            this.f8058d.a(this.f8055a, intentFilter);
        }
    }
}
