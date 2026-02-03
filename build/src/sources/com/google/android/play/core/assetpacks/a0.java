package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a0 extends th.e0 {

    /* renamed from: c  reason: collision with root package name */
    private final th.k0 f16304c = new th.k0("AssetPackExtractionService");

    /* renamed from: d  reason: collision with root package name */
    private final Context f16305d;

    /* renamed from: e  reason: collision with root package name */
    private final n0 f16306e;

    /* renamed from: f  reason: collision with root package name */
    private final k4 f16307f;

    /* renamed from: g  reason: collision with root package name */
    private final p1 f16308g;

    /* renamed from: h  reason: collision with root package name */
    private final m3 f16309h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Context context, n0 n0Var, k4 k4Var, p1 p1Var, m3 m3Var) {
        this.f16305d = context;
        this.f16306e = n0Var;
        this.f16307f = k4Var;
        this.f16308g = p1Var;
        this.f16309h = m3Var;
    }

    private final synchronized void f(Bundle bundle, th.g0 g0Var) {
        this.f16304c.a("updateServiceState AIDL call", new Object[0]);
        if (th.j.b(this.f16305d) && th.j.a(this.f16305d)) {
            int i10 = bundle.getInt("action_type");
            this.f16308g.c(g0Var);
            if (i10 == 1) {
                this.f16309h.b(bundle);
                this.f16307f.h(true);
                this.f16308g.a(this.f16309h.a(bundle));
                this.f16305d.bindService(new Intent(this.f16305d, ExtractionForegroundService.class), this.f16308g, 1);
                return;
            } else if (i10 == 2) {
                this.f16307f.h(false);
                this.f16308g.b();
                return;
            } else {
                this.f16304c.b("Unknown action type received: %d", Integer.valueOf(i10));
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
        this.f16304c.a("clearAssetPackStorage AIDL call", new Object[0]);
        if (th.j.b(this.f16305d) && th.j.a(this.f16305d)) {
            this.f16306e.L();
            g0Var.c(new Bundle());
            return;
        }
        g0Var.g(new Bundle());
    }
}
