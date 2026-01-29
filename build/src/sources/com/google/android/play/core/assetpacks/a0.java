package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a0 extends th.e0 {

    /* renamed from: c  reason: collision with root package name */
    private final th.k0 f16675c = new th.k0("AssetPackExtractionService");

    /* renamed from: d  reason: collision with root package name */
    private final Context f16676d;

    /* renamed from: e  reason: collision with root package name */
    private final n0 f16677e;

    /* renamed from: f  reason: collision with root package name */
    private final k4 f16678f;

    /* renamed from: g  reason: collision with root package name */
    private final p1 f16679g;

    /* renamed from: h  reason: collision with root package name */
    private final m3 f16680h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Context context, n0 n0Var, k4 k4Var, p1 p1Var, m3 m3Var) {
        this.f16676d = context;
        this.f16677e = n0Var;
        this.f16678f = k4Var;
        this.f16679g = p1Var;
        this.f16680h = m3Var;
    }

    private final synchronized void f(Bundle bundle, th.g0 g0Var) {
        this.f16675c.a("updateServiceState AIDL call", new Object[0]);
        if (th.j.b(this.f16676d) && th.j.a(this.f16676d)) {
            int i10 = bundle.getInt("action_type");
            this.f16679g.c(g0Var);
            if (i10 == 1) {
                this.f16680h.b(bundle);
                this.f16678f.h(true);
                this.f16679g.a(this.f16680h.a(bundle));
                this.f16676d.bindService(new Intent(this.f16676d, ExtractionForegroundService.class), this.f16679g, 1);
                return;
            } else if (i10 == 2) {
                this.f16678f.h(false);
                this.f16679g.b();
                return;
            } else {
                this.f16675c.b("Unknown action type received: %d", Integer.valueOf(i10));
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
        this.f16675c.a("clearAssetPackStorage AIDL call", new Object[0]);
        if (th.j.b(this.f16676d) && th.j.a(this.f16676d)) {
            this.f16677e.L();
            g0Var.c(new Bundle());
            return;
        }
        g0Var.g(new Bundle());
    }
}
