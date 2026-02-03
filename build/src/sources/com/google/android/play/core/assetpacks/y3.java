package com.google.android.play.core.assetpacks;

import java.io.File;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16746a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16747b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16748c;

    /* renamed from: d  reason: collision with root package name */
    private final th.r f16749d;

    /* renamed from: e  reason: collision with root package name */
    private final th.r f16750e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y3(n0 n0Var, th.r rVar, r2 r2Var, th.r rVar2, b2 b2Var) {
        this.f16746a = n0Var;
        this.f16749d = rVar;
        this.f16747b = r2Var;
        this.f16750e = rVar2;
        this.f16748c = b2Var;
    }

    public final void b(final v3 v3Var) {
        File u10 = this.f16746a.u(v3Var.f16672b, v3Var.f16707c, v3Var.f16709e);
        if (u10.exists()) {
            File u11 = this.f16746a.u(v3Var.f16672b, v3Var.f16708d, v3Var.f16709e);
            u11.mkdirs();
            if (u10.renameTo(u11)) {
                ((Executor) this.f16750e.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.w3
                    @Override // java.lang.Runnable
                    public final void run() {
                        y3.this.f16746a.b(r1.f16672b, r1.f16708d, v3Var.f16709e);
                    }
                });
                this.f16747b.k(v3Var.f16672b, v3Var.f16708d, v3Var.f16709e);
                this.f16748c.c(v3Var.f16672b);
                ((t4) this.f16749d.a()).b(v3Var.f16671a, v3Var.f16672b);
                return;
            }
            throw new w1(String.format("Cannot promote pack %s from %s to %s", v3Var.f16672b, u10.getAbsolutePath(), u11.getAbsolutePath()), v3Var.f16671a);
        }
        throw new w1(String.format("Cannot find pack files to promote for pack %s at %s", v3Var.f16672b, u10.getAbsolutePath()), v3Var.f16671a);
    }
}
