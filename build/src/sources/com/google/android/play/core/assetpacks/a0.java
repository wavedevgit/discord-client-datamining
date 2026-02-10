package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a0 extends ai.e0 {

    /* renamed from: c  reason: collision with root package name */
    private final ai.k0 f16535c = new ai.k0("AssetPackExtractionService");

    /* renamed from: d  reason: collision with root package name */
    private final Context f16536d;

    /* renamed from: e  reason: collision with root package name */
    private final n0 f16537e;

    /* renamed from: f  reason: collision with root package name */
    private final k4 f16538f;

    /* renamed from: g  reason: collision with root package name */
    private final p1 f16539g;

    /* renamed from: h  reason: collision with root package name */
    private final m3 f16540h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Context context, n0 n0Var, k4 k4Var, p1 p1Var, m3 m3Var) {
        this.f16536d = context;
        this.f16537e = n0Var;
        this.f16538f = k4Var;
        this.f16539g = p1Var;
        this.f16540h = m3Var;
    }

    private final synchronized void f(Bundle bundle, ai.g0 g0Var) {
        this.f16535c.a("updateServiceState AIDL call", new Object[0]);
        if (ai.j.b(this.f16536d) && ai.j.a(this.f16536d)) {
            int i10 = bundle.getInt("action_type");
            this.f16539g.c(g0Var);
            if (i10 == 1) {
                this.f16540h.b(bundle);
                this.f16538f.h(true);
                this.f16539g.a(this.f16540h.a(bundle));
                this.f16536d.bindService(new Intent(this.f16536d, ExtractionForegroundService.class), this.f16539g, 1);
                return;
            } else if (i10 == 2) {
                this.f16538f.h(false);
                this.f16539g.b();
                return;
            } else {
                this.f16535c.b("Unknown action type received: %d", Integer.valueOf(i10));
                g0Var.g(new Bundle());
                return;
            }
        }
        g0Var.g(new Bundle());
    }

    @Override // ai.f0
    public final void U(Bundle bundle, ai.g0 g0Var) {
        this.f16535c.a("clearAssetPackStorage AIDL call", new Object[0]);
        if (ai.j.b(this.f16536d) && ai.j.a(this.f16536d)) {
            this.f16537e.L();
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
