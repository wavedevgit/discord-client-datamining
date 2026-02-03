package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a0 extends th.e0 {

    /* renamed from: c  reason: collision with root package name */
    private final th.k0 f15272c = new th.k0("AssetPackExtractionService");

    /* renamed from: d  reason: collision with root package name */
    private final Context f15273d;

    /* renamed from: e  reason: collision with root package name */
    private final n0 f15274e;

    /* renamed from: f  reason: collision with root package name */
    private final k4 f15275f;

    /* renamed from: g  reason: collision with root package name */
    private final p1 f15276g;

    /* renamed from: h  reason: collision with root package name */
    private final m3 f15277h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Context context, n0 n0Var, k4 k4Var, p1 p1Var, m3 m3Var) {
        this.f15273d = context;
        this.f15274e = n0Var;
        this.f15275f = k4Var;
        this.f15276g = p1Var;
        this.f15277h = m3Var;
    }

    private final synchronized void f(Bundle bundle, th.g0 g0Var) {
        this.f15272c.a("updateServiceState AIDL call", new Object[0]);
        if (th.j.b(this.f15273d) && th.j.a(this.f15273d)) {
            int i10 = bundle.getInt("action_type");
            this.f15276g.c(g0Var);
            if (i10 == 1) {
                this.f15277h.b(bundle);
                this.f15275f.h(true);
                this.f15276g.a(this.f15277h.a(bundle));
                this.f15273d.bindService(new Intent(this.f15273d, ExtractionForegroundService.class), this.f15276g, 1);
                return;
            } else if (i10 == 2) {
                this.f15275f.h(false);
                this.f15276g.b();
                return;
            } else {
                this.f15272c.b("Unknown action type received: %d", Integer.valueOf(i10));
                g0Var.g(new Bundle());
                return;
            }
        }
        g0Var.g(new Bundle());
    }

    @Override // th.f0
    public final void I0(Bundle bundle, th.g0 g0Var) {
        f(bundle, g0Var);
    }

    @Override // th.f0
    public final void z0(Bundle bundle, th.g0 g0Var) {
        this.f15272c.a("clearAssetPackStorage AIDL call", new Object[0]);
        if (th.j.b(this.f15273d) && th.j.a(this.f15273d)) {
            this.f15274e.L();
            g0Var.c(new Bundle());
            return;
        }
        g0Var.g(new Bundle());
    }
}
