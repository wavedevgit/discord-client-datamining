package com.android.billingclient.api;

import android.content.Context;
import android.content.IntentFilter;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f9073a;

    /* renamed from: b  reason: collision with root package name */
    private final a6.k f9074b;

    /* renamed from: c  reason: collision with root package name */
    private final t f9075c;

    /* renamed from: d  reason: collision with root package name */
    private final h0 f9076d = new h0(this, true);

    /* renamed from: e  reason: collision with root package name */
    private final h0 f9077e = new h0(this, false);

    /* renamed from: f  reason: collision with root package name */
    private boolean f9078f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Context context, a6.k kVar, a6.d0 d0Var, a6.x xVar, a6.n nVar, t tVar) {
        this.f9073a = context;
        this.f9074b = kVar;
        this.f9075c = tVar;
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
        return this.f9074b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f() {
        this.f9076d.c(this.f9073a);
        this.f9077e.c(this.f9073a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(boolean z10) {
        IntentFilter intentFilter = new IntentFilter("com.android.vending.billing.PURCHASES_UPDATED");
        IntentFilter intentFilter2 = new IntentFilter("com.android.vending.billing.LOCAL_BROADCAST_PURCHASES_UPDATED");
        intentFilter2.addAction("com.android.vending.billing.ALTERNATIVE_BILLING");
        this.f9078f = z10;
        this.f9077e.a(this.f9073a, intentFilter2);
        if (this.f9078f) {
            this.f9076d.b(this.f9073a, intentFilter, "com.google.android.finsky.permission.PLAY_BILLING_LIBRARY_BROADCAST");
        } else {
            this.f9076d.a(this.f9073a, intentFilter);
        }
    }
}
