package com.google.android.play.core.assetpacks;

import java.io.File;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16108a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16109b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16110c;

    /* renamed from: d  reason: collision with root package name */
    private final wh.r f16111d;

    /* renamed from: e  reason: collision with root package name */
    private final wh.r f16112e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y3(n0 n0Var, wh.r rVar, r2 r2Var, wh.r rVar2, b2 b2Var) {
        this.f16108a = n0Var;
        this.f16111d = rVar;
        this.f16109b = r2Var;
        this.f16112e = rVar2;
        this.f16110c = b2Var;
    }

    public final void b(final v3 v3Var) {
        File u10 = this.f16108a.u(v3Var.f16034b, v3Var.f16069c, v3Var.f16071e);
        if (u10.exists()) {
            File u11 = this.f16108a.u(v3Var.f16034b, v3Var.f16070d, v3Var.f16071e);
            u11.mkdirs();
            if (u10.renameTo(u11)) {
                ((Executor) this.f16112e.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.w3
                    @Override // java.lang.Runnable
                    public final void run() {
                        y3.this.f16108a.b(r1.f16034b, r1.f16070d, v3Var.f16071e);
                    }
                });
                this.f16109b.k(v3Var.f16034b, v3Var.f16070d, v3Var.f16071e);
                this.f16110c.c(v3Var.f16034b);
                ((t4) this.f16111d.a()).b(v3Var.f16033a, v3Var.f16034b);
                return;
            }
            throw new w1(String.format("Cannot promote pack %s from %s to %s", v3Var.f16034b, u10.getAbsolutePath(), u11.getAbsolutePath()), v3Var.f16033a);
        }
        throw new w1(String.format("Cannot find pack files to promote for pack %s at %s", v3Var.f16034b, u10.getAbsolutePath()), v3Var.f16033a);
    }
}
