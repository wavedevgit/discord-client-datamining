package com.android.billingclient.api;

import android.content.Context;
import android.content.IntentFilter;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f8672a;

    /* renamed from: b  reason: collision with root package name */
    private final b6.k f8673b;

    /* renamed from: c  reason: collision with root package name */
    private final t f8674c;

    /* renamed from: d  reason: collision with root package name */
    private final h0 f8675d = new h0(this, true);

    /* renamed from: e  reason: collision with root package name */
    private final h0 f8676e = new h0(this, false);

    /* renamed from: f  reason: collision with root package name */
    private boolean f8677f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Context context, b6.k kVar, b6.d0 d0Var, b6.x xVar, b6.n nVar, t tVar) {
        this.f8672a = context;
        this.f8673b = kVar;
        this.f8674c = tVar;
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
        return this.f8673b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f() {
        this.f8675d.c(this.f8672a);
        this.f8676e.c(this.f8672a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(boolean z10) {
        IntentFilter intentFilter = new IntentFilter("com.android.vending.billing.PURCHASES_UPDATED");
        IntentFilter intentFilter2 = new IntentFilter("com.android.vending.billing.LOCAL_BROADCAST_PURCHASES_UPDATED");
        intentFilter2.addAction("com.android.vending.billing.ALTERNATIVE_BILLING");
        this.f8677f = z10;
        this.f8676e.a(this.f8672a, intentFilter2);
        if (this.f8677f) {
            this.f8675d.b(this.f8672a, intentFilter, "com.google.android.finsky.permission.PLAY_BILLING_LIBRARY_BROADCAST");
        } else {
            this.f8675d.a(this.f8672a, intentFilter);
        }
    }
}
