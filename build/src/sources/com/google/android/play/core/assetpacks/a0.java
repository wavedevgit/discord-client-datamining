package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a0 extends yh.e0 {

    /* renamed from: c  reason: collision with root package name */
    private final yh.k0 f15786c = new yh.k0("AssetPackExtractionService");

    /* renamed from: d  reason: collision with root package name */
    private final Context f15787d;

    /* renamed from: e  reason: collision with root package name */
    private final n0 f15788e;

    /* renamed from: f  reason: collision with root package name */
    private final k4 f15789f;

    /* renamed from: g  reason: collision with root package name */
    private final p1 f15790g;

    /* renamed from: h  reason: collision with root package name */
    private final m3 f15791h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Context context, n0 n0Var, k4 k4Var, p1 p1Var, m3 m3Var) {
        this.f15787d = context;
        this.f15788e = n0Var;
        this.f15789f = k4Var;
        this.f15790g = p1Var;
        this.f15791h = m3Var;
    }

    private final synchronized void f(Bundle bundle, yh.g0 g0Var) {
        this.f15786c.a("updateServiceState AIDL call", new Object[0]);
        if (yh.j.b(this.f15787d) && yh.j.a(this.f15787d)) {
            int i10 = bundle.getInt("action_type");
            this.f15790g.c(g0Var);
            if (i10 == 1) {
                this.f15791h.b(bundle);
                this.f15789f.h(true);
                this.f15790g.a(this.f15791h.a(bundle));
                this.f15787d.bindService(new Intent(this.f15787d, ExtractionForegroundService.class), this.f15790g, 1);
                return;
            } else if (i10 == 2) {
                this.f15789f.h(false);
                this.f15790g.b();
                return;
            } else {
                this.f15786c.b("Unknown action type received: %d", Integer.valueOf(i10));
                g0Var.g(new Bundle());
                return;
            }
        }
        g0Var.g(new Bundle());
    }

    @Override // yh.f0
    public final void P0(Bundle bundle, yh.g0 g0Var) {
        f(bundle, g0Var);
    }

    @Override // yh.f0
    public final void U0(Bundle bundle, yh.g0 g0Var) {
        this.f15786c.a("clearAssetPackStorage AIDL call", new Object[0]);
        if (yh.j.b(this.f15787d) && yh.j.a(this.f15787d)) {
            this.f15788e.L();
            g0Var.c(new Bundle());
            return;
        }
        g0Var.g(new Bundle());
    }
}
