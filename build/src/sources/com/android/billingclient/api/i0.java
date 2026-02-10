package com.android.billingclient.api;

import android.content.Context;
import android.content.IntentFilter;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f8671a;

    /* renamed from: b  reason: collision with root package name */
    private final b6.k f8672b;

    /* renamed from: c  reason: collision with root package name */
    private final t f8673c;

    /* renamed from: d  reason: collision with root package name */
    private final h0 f8674d = new h0(this, true);

    /* renamed from: e  reason: collision with root package name */
    private final h0 f8675e = new h0(this, false);

    /* renamed from: f  reason: collision with root package name */
    private boolean f8676f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Context context, b6.k kVar, b6.d0 d0Var, b6.x xVar, b6.n nVar, t tVar) {
        this.f8671a = context;
        this.f8672b = kVar;
        this.f8673c = tVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ b6.x a(i0 i0Var) {
        i0Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ b6.n e(i0 i0Var) {
        i0Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final b6.k d() {
        return this.f8672b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f() {
        this.f8674d.c(this.f8671a);
        this.f8675e.c(this.f8671a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(boolean z10) {
        IntentFilter intentFilter = new IntentFilter("com.android.vending.billing.PURCHASES_UPDATED");
        IntentFilter intentFilter2 = new IntentFilter("com.android.vending.billing.LOCAL_BROADCAST_PURCHASES_UPDATED");
        intentFilter2.addAction("com.android.vending.billing.ALTERNATIVE_BILLING");
        this.f8676f = z10;
        this.f8675e.a(this.f8671a, intentFilter2);
        if (this.f8676f) {
            this.f8674d.b(this.f8671a, intentFilter, "com.google.android.finsky.permission.PLAY_BILLING_LIBRARY_BROADCAST");
        } else {
            this.f8674d.a(this.f8671a, intentFilter);
        }
    }
}
