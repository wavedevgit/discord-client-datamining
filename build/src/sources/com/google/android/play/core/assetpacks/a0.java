package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a0 extends wh.e0 {

    /* renamed from: c  reason: collision with root package name */
    private final wh.k0 f15666c = new wh.k0("AssetPackExtractionService");

    /* renamed from: d  reason: collision with root package name */
    private final Context f15667d;

    /* renamed from: e  reason: collision with root package name */
    private final n0 f15668e;

    /* renamed from: f  reason: collision with root package name */
    private final k4 f15669f;

    /* renamed from: g  reason: collision with root package name */
    private final p1 f15670g;

    /* renamed from: h  reason: collision with root package name */
    private final m3 f15671h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Context context, n0 n0Var, k4 k4Var, p1 p1Var, m3 m3Var) {
        this.f15667d = context;
        this.f15668e = n0Var;
        this.f15669f = k4Var;
        this.f15670g = p1Var;
        this.f15671h = m3Var;
    }

    private final synchronized void f(Bundle bundle, wh.g0 g0Var) {
        this.f15666c.a("updateServiceState AIDL call", new Object[0]);
        if (wh.j.b(this.f15667d) && wh.j.a(this.f15667d)) {
            int i10 = bundle.getInt("action_type");
            this.f15670g.c(g0Var);
            if (i10 == 1) {
                this.f15671h.b(bundle);
                this.f15669f.h(true);
                this.f15670g.a(this.f15671h.a(bundle));
                this.f15667d.bindService(new Intent(this.f15667d, ExtractionForegroundService.class), this.f15670g, 1);
                return;
            } else if (i10 == 2) {
                this.f15669f.h(false);
                this.f15670g.b();
                return;
            } else {
                this.f15666c.b("Unknown action type received: %d", Integer.valueOf(i10));
                g0Var.g(new Bundle());
                return;
            }
        }
        g0Var.g(new Bundle());
    }

    @Override // wh.f0
    public final void t(Bundle bundle, wh.g0 g0Var) {
        this.f15666c.a("clearAssetPackStorage AIDL call", new Object[0]);
        if (wh.j.b(this.f15667d) && wh.j.a(this.f15667d)) {
            this.f15668e.L();
            g0Var.c(new Bundle());
            return;
        }
        g0Var.g(new Bundle());
    }

    @Override // wh.f0
    public final void z(Bundle bundle, wh.g0 g0Var) {
        f(bundle, g0Var);
    }
}
