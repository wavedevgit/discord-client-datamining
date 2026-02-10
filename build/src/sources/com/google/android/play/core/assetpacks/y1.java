package com.google.android.play.core.assetpacks;

import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y1 {

    /* renamed from: k  reason: collision with root package name */
    private static final yh.k0 f16216k = new yh.k0("ExtractorLooper");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f16217a;

    /* renamed from: b  reason: collision with root package name */
    private final m1 f16218b;

    /* renamed from: c  reason: collision with root package name */
    private final f4 f16219c;

    /* renamed from: d  reason: collision with root package name */
    private final g3 f16220d;

    /* renamed from: e  reason: collision with root package name */
    private final k3 f16221e;

    /* renamed from: f  reason: collision with root package name */
    private final t3 f16222f;

    /* renamed from: g  reason: collision with root package name */
    private final y3 f16223g;

    /* renamed from: h  reason: collision with root package name */
    private final u2 f16224h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f16225i = new AtomicBoolean(false);

    /* renamed from: j  reason: collision with root package name */
    private final yh.r f16226j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y1(r2 r2Var, yh.r rVar, m1 m1Var, f4 f4Var, g3 g3Var, k3 k3Var, t3 t3Var, y3 y3Var, u2 u2Var) {
        this.f16217a = r2Var;
        this.f16226j = rVar;
        this.f16218b = m1Var;
        this.f16219c = f4Var;
        this.f16220d = g3Var;
        this.f16221e = k3Var;
        this.f16222f = t3Var;
        this.f16223g = y3Var;
        this.f16224h = u2Var;
    }

    private final void b(int i10, Exception exc) {
        try {
            this.f16217a.m(i10, 5);
            this.f16217a.n(i10);
        } catch (w1 unused) {
            f16216k.b("Error during error handling: %s", exc.getMessage());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        t2 t2Var;
        yh.k0 k0Var = f16216k;
        k0Var.a("Run extractor loop", new Object[0]);
        if (!this.f16225i.compareAndSet(false, true)) {
            k0Var.e("runLoop already looping; return", new Object[0]);
            return;
        }
        while (true) {
            try {
                t2Var = this.f16224h.a();
            } catch (w1 e10) {
                f16216k.b("Error while getting next extraction task: %s", e10.getMessage());
                if (e10.f16197d >= 0) {
                    ((t4) this.f16226j.a()).a(e10.f16197d);
                    b(e10.f16197d, e10);
                }
                t2Var = null;
            }
            if (t2Var != null) {
                try {
                    if (t2Var instanceof l1) {
                        this.f16218b.a((l1) t2Var);
                    } else if (t2Var instanceof e4) {
                        this.f16219c.a((e4) t2Var);
                    } else if (t2Var instanceof f3) {
                        this.f16220d.a((f3) t2Var);
                    } else if (t2Var instanceof i3) {
                        this.f16221e.b((i3) t2Var);
                    } else if (t2Var instanceof s3) {
                        this.f16222f.a((s3) t2Var);
                    } else if (t2Var instanceof v3) {
                        this.f16223g.b((v3) t2Var);
                    } else {
                        f16216k.b("Unknown task type: %s", t2Var.getClass().getName());
                    }
                } catch (Exception e11) {
                    f16216k.b("Error during extraction task: %s", e11.getMessage());
                    ((t4) this.f16226j.a()).a(t2Var.f16153a);
                    b(t2Var.f16153a, e11);
                }
            } else {
                this.f16225i.set(false);
                return;
            }
        }
    }
}
