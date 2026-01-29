package com.android.billingclient.api;

import android.content.Context;
import com.google.android.gms.internal.play_billing.c6;
import com.google.android.gms.internal.play_billing.k5;
import com.google.android.gms.internal.play_billing.l5;
import com.google.android.gms.internal.play_billing.r4;
import com.google.android.gms.internal.play_billing.u5;
import com.google.android.gms.internal.play_billing.v4;
import com.google.android.gms.internal.play_billing.v5;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v implements t {

    /* renamed from: b  reason: collision with root package name */
    private l5 f9147b;

    /* renamed from: c  reason: collision with root package name */
    private final w f9148c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(Context context, l5 l5Var) {
        this.f9148c = new w(context);
        this.f9147b = l5Var;
    }

    @Override // com.android.billingclient.api.t
    public final void a(v4 v4Var, int i10) {
        try {
            k5 k5Var = (k5) this.f9147b.h();
            k5Var.m(i10);
            this.f9147b = (l5) k5Var.f();
            b(v4Var);
        } catch (Throwable th2) {
            com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to log.", th2);
        }
    }

    @Override // com.android.billingclient.api.t
    public final void b(v4 v4Var) {
        if (v4Var == null) {
            return;
        }
        try {
            u5 F = v5.F();
            F.p(this.f9147b);
            F.o(v4Var);
            this.f9148c.a((v5) F.f());
        } catch (Throwable th2) {
            com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to log.", th2);
        }
    }

    @Override // com.android.billingclient.api.t
    public final void c(c6 c6Var) {
        if (c6Var == null) {
            return;
        }
        try {
            u5 F = v5.F();
            F.p(this.f9147b);
            F.q(c6Var);
            this.f9148c.a((v5) F.f());
        } catch (Throwable th2) {
            com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to log.", th2);
        }
    }

    @Override // com.android.billingclient.api.t
    public final void d(r4 r4Var, int i10) {
        try {
            k5 k5Var = (k5) this.f9147b.h();
            k5Var.m(i10);
            this.f9147b = (l5) k5Var.f();
            e(r4Var);
        } catch (Throwable th2) {
            com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to log.", th2);
        }
    }

    @Override // com.android.billingclient.api.t
    public final void e(r4 r4Var) {
        if (r4Var == null) {
            return;
        }
        try {
            u5 F = v5.F();
            F.p(this.f9147b);
            F.m(r4Var);
            this.f9148c.a((v5) F.f());
        } catch (Throwable th2) {
            com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to log.", th2);
        }
    }
}
