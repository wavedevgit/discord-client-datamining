package com.google.android.play.core.assetpacks;

import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y1 {

    /* renamed from: k  reason: collision with root package name */
    private static final th.k0 f17105k = new th.k0("ExtractorLooper");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f17106a;

    /* renamed from: b  reason: collision with root package name */
    private final m1 f17107b;

    /* renamed from: c  reason: collision with root package name */
    private final f4 f17108c;

    /* renamed from: d  reason: collision with root package name */
    private final g3 f17109d;

    /* renamed from: e  reason: collision with root package name */
    private final k3 f17110e;

    /* renamed from: f  reason: collision with root package name */
    private final t3 f17111f;

    /* renamed from: g  reason: collision with root package name */
    private final y3 f17112g;

    /* renamed from: h  reason: collision with root package name */
    private final u2 f17113h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f17114i = new AtomicBoolean(false);

    /* renamed from: j  reason: collision with root package name */
    private final th.r f17115j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y1(r2 r2Var, th.r rVar, m1 m1Var, f4 f4Var, g3 g3Var, k3 k3Var, t3 t3Var, y3 y3Var, u2 u2Var) {
        this.f17106a = r2Var;
        this.f17115j = rVar;
        this.f17107b = m1Var;
        this.f17108c = f4Var;
        this.f17109d = g3Var;
        this.f17110e = k3Var;
        this.f17111f = t3Var;
        this.f17112g = y3Var;
        this.f17113h = u2Var;
    }

    private final void b(int i10, Exception exc) {
        try {
            this.f17106a.m(i10, 5);
            this.f17106a.n(i10);
        } catch (w1 unused) {
            f17105k.b("Error during error handling: %s", exc.getMessage());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        t2 t2Var;
        th.k0 k0Var = f17105k;
        k0Var.a("Run extractor loop", new Object[0]);
        if (!this.f17114i.compareAndSet(false, true)) {
            k0Var.e("runLoop already looping; return", new Object[0]);
            return;
        }
        while (true) {
            try {
                t2Var = this.f17113h.a();
            } catch (w1 e10) {
                f17105k.b("Error while getting next extraction task: %s", e10.getMessage());
                if (e10.f17086d >= 0) {
                    ((t4) this.f17115j.a()).a(e10.f17086d);
                    b(e10.f17086d, e10);
                }
                t2Var = null;
            }
            if (t2Var != null) {
                try {
                    if (t2Var instanceof l1) {
                        this.f17107b.a((l1) t2Var);
                    } else if (t2Var instanceof e4) {
                        this.f17108c.a((e4) t2Var);
                    } else if (t2Var instanceof f3) {
                        this.f17109d.a((f3) t2Var);
                    } else if (t2Var instanceof i3) {
                        this.f17110e.b((i3) t2Var);
                    } else if (t2Var instanceof s3) {
                        this.f17111f.a((s3) t2Var);
                    } else if (t2Var instanceof v3) {
                        this.f17112g.b((v3) t2Var);
                    } else {
                        f17105k.b("Unknown task type: %s", t2Var.getClass().getName());
                    }
                } catch (Exception e11) {
                    f17105k.b("Error during extraction task: %s", e11.getMessage());
                    ((t4) this.f17115j.a()).a(t2Var.f17042a);
                    b(t2Var.f17042a, e11);
                }
            } else {
                this.f17114i.set(false);
                return;
            }
        }
    }
}
