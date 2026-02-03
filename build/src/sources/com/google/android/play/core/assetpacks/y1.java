package com.google.android.play.core.assetpacks;

import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y1 {

    /* renamed from: k  reason: collision with root package name */
    private static final th.k0 f15702k = new th.k0("ExtractorLooper");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f15703a;

    /* renamed from: b  reason: collision with root package name */
    private final m1 f15704b;

    /* renamed from: c  reason: collision with root package name */
    private final f4 f15705c;

    /* renamed from: d  reason: collision with root package name */
    private final g3 f15706d;

    /* renamed from: e  reason: collision with root package name */
    private final k3 f15707e;

    /* renamed from: f  reason: collision with root package name */
    private final t3 f15708f;

    /* renamed from: g  reason: collision with root package name */
    private final y3 f15709g;

    /* renamed from: h  reason: collision with root package name */
    private final u2 f15710h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f15711i = new AtomicBoolean(false);

    /* renamed from: j  reason: collision with root package name */
    private final th.r f15712j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y1(r2 r2Var, th.r rVar, m1 m1Var, f4 f4Var, g3 g3Var, k3 k3Var, t3 t3Var, y3 y3Var, u2 u2Var) {
        this.f15703a = r2Var;
        this.f15712j = rVar;
        this.f15704b = m1Var;
        this.f15705c = f4Var;
        this.f15706d = g3Var;
        this.f15707e = k3Var;
        this.f15708f = t3Var;
        this.f15709g = y3Var;
        this.f15710h = u2Var;
    }

    private final void b(int i10, Exception exc) {
        try {
            this.f15703a.m(i10, 5);
            this.f15703a.n(i10);
        } catch (w1 unused) {
            f15702k.b("Error during error handling: %s", exc.getMessage());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        t2 t2Var;
        th.k0 k0Var = f15702k;
        k0Var.a("Run extractor loop", new Object[0]);
        if (!this.f15711i.compareAndSet(false, true)) {
            k0Var.e("runLoop already looping; return", new Object[0]);
            return;
        }
        while (true) {
            try {
                t2Var = this.f15710h.a();
            } catch (w1 e10) {
                f15702k.b("Error while getting next extraction task: %s", e10.getMessage());
                if (e10.f15683d >= 0) {
                    ((t4) this.f15712j.a()).a(e10.f15683d);
                    b(e10.f15683d, e10);
                }
                t2Var = null;
            }
            if (t2Var != null) {
                try {
                    if (t2Var instanceof l1) {
                        this.f15704b.a((l1) t2Var);
                    } else if (t2Var instanceof e4) {
                        this.f15705c.a((e4) t2Var);
                    } else if (t2Var instanceof f3) {
                        this.f15706d.a((f3) t2Var);
                    } else if (t2Var instanceof i3) {
                        this.f15707e.b((i3) t2Var);
                    } else if (t2Var instanceof s3) {
                        this.f15708f.a((s3) t2Var);
                    } else if (t2Var instanceof v3) {
                        this.f15709g.b((v3) t2Var);
                    } else {
                        f15702k.b("Unknown task type: %s", t2Var.getClass().getName());
                    }
                } catch (Exception e11) {
                    f15702k.b("Error during extraction task: %s", e11.getMessage());
                    ((t4) this.f15712j.a()).a(t2Var.f15639a);
                    b(t2Var.f15639a, e11);
                }
            } else {
                this.f15711i.set(false);
                return;
            }
        }
    }
}
