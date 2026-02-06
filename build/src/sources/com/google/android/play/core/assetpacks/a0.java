package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a0 extends xh.e0 {

    /* renamed from: c  reason: collision with root package name */
    private final xh.k0 f15646c = new xh.k0("AssetPackExtractionService");

    /* renamed from: d  reason: collision with root package name */
    private final Context f15647d;

    /* renamed from: e  reason: collision with root package name */
    private final n0 f15648e;

    /* renamed from: f  reason: collision with root package name */
    private final k4 f15649f;

    /* renamed from: g  reason: collision with root package name */
    private final p1 f15650g;

    /* renamed from: h  reason: collision with root package name */
    private final m3 f15651h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Context context, n0 n0Var, k4 k4Var, p1 p1Var, m3 m3Var) {
        this.f15647d = context;
        this.f15648e = n0Var;
        this.f15649f = k4Var;
        this.f15650g = p1Var;
        this.f15651h = m3Var;
    }

    private final synchronized void f(Bundle bundle, xh.g0 g0Var) {
        this.f15646c.a("updateServiceState AIDL call", new Object[0]);
        if (xh.j.b(this.f15647d) && xh.j.a(this.f15647d)) {
            int i10 = bundle.getInt("action_type");
            this.f15650g.c(g0Var);
            if (i10 == 1) {
                this.f15651h.b(bundle);
                this.f15649f.h(true);
                this.f15650g.a(this.f15651h.a(bundle));
                this.f15647d.bindService(new Intent(this.f15647d, ExtractionForegroundService.class), this.f15650g, 1);
                return;
            } else if (i10 == 2) {
                this.f15649f.h(false);
                this.f15650g.b();
                return;
            } else {
                this.f15646c.b("Unknown action type received: %d", Integer.valueOf(i10));
                g0Var.g(new Bundle());
                return;
            }
        }
        g0Var.g(new Bundle());
    }

    @Override // xh.f0
    public final void D(Bundle bundle, xh.g0 g0Var) {
        this.f15646c.a("clearAssetPackStorage AIDL call", new Object[0]);
        if (xh.j.b(this.f15647d) && xh.j.a(this.f15647d)) {
            this.f15648e.L();
            g0Var.c(new Bundle());
            return;
        }
        g0Var.g(new Bundle());
    }

    @Override // xh.f0
    public final void P(Bundle bundle, xh.g0 g0Var) {
        f(bundle, g0Var);
    }
}
