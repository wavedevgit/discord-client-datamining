package com.google.android.play.core.assetpacks;

import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y1 {

    /* renamed from: k  reason: collision with root package name */
    private static final wh.k0 f16096k = new wh.k0("ExtractorLooper");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f16097a;

    /* renamed from: b  reason: collision with root package name */
    private final m1 f16098b;

    /* renamed from: c  reason: collision with root package name */
    private final f4 f16099c;

    /* renamed from: d  reason: collision with root package name */
    private final g3 f16100d;

    /* renamed from: e  reason: collision with root package name */
    private final k3 f16101e;

    /* renamed from: f  reason: collision with root package name */
    private final t3 f16102f;

    /* renamed from: g  reason: collision with root package name */
    private final y3 f16103g;

    /* renamed from: h  reason: collision with root package name */
    private final u2 f16104h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f16105i = new AtomicBoolean(false);

    /* renamed from: j  reason: collision with root package name */
    private final wh.r f16106j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y1(r2 r2Var, wh.r rVar, m1 m1Var, f4 f4Var, g3 g3Var, k3 k3Var, t3 t3Var, y3 y3Var, u2 u2Var) {
        this.f16097a = r2Var;
        this.f16106j = rVar;
        this.f16098b = m1Var;
        this.f16099c = f4Var;
        this.f16100d = g3Var;
        this.f16101e = k3Var;
        this.f16102f = t3Var;
        this.f16103g = y3Var;
        this.f16104h = u2Var;
    }

    private final void b(int i10, Exception exc) {
        try {
            this.f16097a.m(i10, 5);
            this.f16097a.n(i10);
        } catch (w1 unused) {
            f16096k.b("Error during error handling: %s", exc.getMessage());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        t2 t2Var;
        wh.k0 k0Var = f16096k;
        k0Var.a("Run extractor loop", new Object[0]);
        if (!this.f16105i.compareAndSet(false, true)) {
            k0Var.e("runLoop already looping; return", new Object[0]);
            return;
        }
        while (true) {
            try {
                t2Var = this.f16104h.a();
            } catch (w1 e10) {
                f16096k.b("Error while getting next extraction task: %s", e10.getMessage());
                if (e10.f16077d >= 0) {
                    ((t4) this.f16106j.a()).a(e10.f16077d);
                    b(e10.f16077d, e10);
                }
                t2Var = null;
            }
            if (t2Var != null) {
                try {
                    if (t2Var instanceof l1) {
                        this.f16098b.a((l1) t2Var);
                    } else if (t2Var instanceof e4) {
                        this.f16099c.a((e4) t2Var);
                    } else if (t2Var instanceof f3) {
                        this.f16100d.a((f3) t2Var);
                    } else if (t2Var instanceof i3) {
                        this.f16101e.b((i3) t2Var);
                    } else if (t2Var instanceof s3) {
                        this.f16102f.a((s3) t2Var);
                    } else if (t2Var instanceof v3) {
                        this.f16103g.b((v3) t2Var);
                    } else {
                        f16096k.b("Unknown task type: %s", t2Var.getClass().getName());
                    }
                } catch (Exception e11) {
                    f16096k.b("Error during extraction task: %s", e11.getMessage());
                    ((t4) this.f16106j.a()).a(t2Var.f16033a);
                    b(t2Var.f16033a, e11);
                }
            } else {
                this.f16105i.set(false);
                return;
            }
        }
    }
}
