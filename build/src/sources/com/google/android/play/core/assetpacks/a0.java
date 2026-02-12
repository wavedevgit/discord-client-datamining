package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a0 extends ai.e0 {

    /* renamed from: c  reason: collision with root package name */
    private final ai.k0 f16536c = new ai.k0("AssetPackExtractionService");

    /* renamed from: d  reason: collision with root package name */
    private final Context f16537d;

    /* renamed from: e  reason: collision with root package name */
    private final n0 f16538e;

    /* renamed from: f  reason: collision with root package name */
    private final k4 f16539f;

    /* renamed from: g  reason: collision with root package name */
    private final p1 f16540g;

    /* renamed from: h  reason: collision with root package name */
    private final m3 f16541h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Context context, n0 n0Var, k4 k4Var, p1 p1Var, m3 m3Var) {
        this.f16537d = context;
        this.f16538e = n0Var;
        this.f16539f = k4Var;
        this.f16540g = p1Var;
        this.f16541h = m3Var;
    }

    private final synchronized void f(Bundle bundle, ai.g0 g0Var) {
        this.f16536c.a("updateServiceState AIDL call", new Object[0]);
        if (ai.j.b(this.f16537d) && ai.j.a(this.f16537d)) {
            int i10 = bundle.getInt("action_type");
            this.f16540g.c(g0Var);
            if (i10 == 1) {
                this.f16541h.b(bundle);
                this.f16539f.h(true);
                this.f16540g.a(this.f16541h.a(bundle));
                this.f16537d.bindService(new Intent(this.f16537d, ExtractionForegroundService.class), this.f16540g, 1);
                return;
            } else if (i10 == 2) {
                this.f16539f.h(false);
                this.f16540g.b();
                return;
            } else {
                this.f16536c.b("Unknown action type received: %d", Integer.valueOf(i10));
                g0Var.g(new Bundle());
                return;
            }
        }
        g0Var.g(new Bundle());
    }

    @Override // ai.f0
    public final void U(Bundle bundle, ai.g0 g0Var) {
        this.f16536c.a("clearAssetPackStorage AIDL call", new Object[0]);
        if (ai.j.b(this.f16537d) && ai.j.a(this.f16537d)) {
            this.f16538e.L();
            g0Var.c(new Bundle());
            return;
        }
        g0Var.g(new Bundle());
    }

    @Override // ai.f0
    public final void Y(Bundle bundle, ai.g0 g0Var) {
        f(bundle, g0Var);
    }
}
