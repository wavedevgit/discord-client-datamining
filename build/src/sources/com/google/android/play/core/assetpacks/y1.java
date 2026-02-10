package com.google.android.play.core.assetpacks;

import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y1 {

    /* renamed from: k  reason: collision with root package name */
    private static final ai.k0 f16965k = new ai.k0("ExtractorLooper");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f16966a;

    /* renamed from: b  reason: collision with root package name */
    private final m1 f16967b;

    /* renamed from: c  reason: collision with root package name */
    private final f4 f16968c;

    /* renamed from: d  reason: collision with root package name */
    private final g3 f16969d;

    /* renamed from: e  reason: collision with root package name */
    private final k3 f16970e;

    /* renamed from: f  reason: collision with root package name */
    private final t3 f16971f;

    /* renamed from: g  reason: collision with root package name */
    private final y3 f16972g;

    /* renamed from: h  reason: collision with root package name */
    private final u2 f16973h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f16974i = new AtomicBoolean(false);

    /* renamed from: j  reason: collision with root package name */
    private final ai.r f16975j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y1(r2 r2Var, ai.r rVar, m1 m1Var, f4 f4Var, g3 g3Var, k3 k3Var, t3 t3Var, y3 y3Var, u2 u2Var) {
        this.f16966a = r2Var;
        this.f16975j = rVar;
        this.f16967b = m1Var;
        this.f16968c = f4Var;
        this.f16969d = g3Var;
        this.f16970e = k3Var;
        this.f16971f = t3Var;
        this.f16972g = y3Var;
        this.f16973h = u2Var;
    }

    private final void b(int i10, Exception exc) {
        try {
            this.f16966a.m(i10, 5);
            this.f16966a.n(i10);
        } catch (w1 unused) {
            f16965k.b("Error during error handling: %s", exc.getMessage());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        t2 t2Var;
        ai.k0 k0Var = f16965k;
        k0Var.a("Run extractor loop", new Object[0]);
        if (!this.f16974i.compareAndSet(false, true)) {
            k0Var.e("runLoop already looping; return", new Object[0]);
            return;
        }
        while (true) {
            try {
                t2Var = this.f16973h.a();
            } catch (w1 e10) {
                f16965k.b("Error while getting next extraction task: %s", e10.getMessage());
                if (e10.f16946d >= 0) {
                    ((t4) this.f16975j.a()).a(e10.f16946d);
                    b(e10.f16946d, e10);
                }
                t2Var = null;
            }
            if (t2Var != null) {
                try {
                    if (t2Var instanceof l1) {
                        this.f16967b.a((l1) t2Var);
                    } else if (t2Var instanceof e4) {
                        this.f16968c.a((e4) t2Var);
                    } else if (t2Var instanceof f3) {
                        this.f16969d.a((f3) t2Var);
                    } else if (t2Var instanceof i3) {
                        this.f16970e.b((i3) t2Var);
                    } else if (t2Var instanceof s3) {
                        this.f16971f.a((s3) t2Var);
                    } else if (t2Var instanceof v3) {
                        this.f16972g.b((v3) t2Var);
                    } else {
                        f16965k.b("Unknown task type: %s", t2Var.getClass().getName());
                    }
                } catch (Exception e11) {
                    f16965k.b("Error during extraction task: %s", e11.getMessage());
                    ((t4) this.f16975j.a()).a(t2Var.f16902a);
                    b(t2Var.f16902a, e11);
                }
            } else {
                this.f16974i.set(false);
                return;
            }
        }
    }
}
