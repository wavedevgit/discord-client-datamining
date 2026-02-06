package com.android.billingclient.api;

import android.content.Context;
import android.content.IntentFilter;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f7954a;

    /* renamed from: b  reason: collision with root package name */
    private final a6.k f7955b;

    /* renamed from: c  reason: collision with root package name */
    private final t f7956c;

    /* renamed from: d  reason: collision with root package name */
    private final h0 f7957d = new h0(this, true);

    /* renamed from: e  reason: collision with root package name */
    private final h0 f7958e = new h0(this, false);

    /* renamed from: f  reason: collision with root package name */
    private boolean f7959f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Context context, a6.k kVar, a6.d0 d0Var, a6.x xVar, a6.n nVar, t tVar) {
        this.f7954a = context;
        this.f7955b = kVar;
        this.f7956c = tVar;
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
        return this.f7955b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f() {
        this.f7957d.c(this.f7954a);
        this.f7958e.c(this.f7954a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(boolean z10) {
        IntentFilter intentFilter = new IntentFilter("com.android.vending.billing.PURCHASES_UPDATED");
        IntentFilter intentFilter2 = new IntentFilter("com.android.vending.billing.LOCAL_BROADCAST_PURCHASES_UPDATED");
        intentFilter2.addAction("com.android.vending.billing.ALTERNATIVE_BILLING");
        this.f7959f = z10;
        this.f7958e.a(this.f7954a, intentFilter2);
        if (this.f7959f) {
            this.f7957d.b(this.f7954a, intentFilter, "com.google.android.finsky.permission.PLAY_BILLING_LIBRARY_BROADCAST");
        } else {
            this.f7957d.a(this.f7954a, intentFilter);
        }
    }
}
