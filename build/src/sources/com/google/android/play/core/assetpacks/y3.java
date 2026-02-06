package com.google.android.play.core.assetpacks;

import java.io.File;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16088a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16089b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16090c;

    /* renamed from: d  reason: collision with root package name */
    private final xh.r f16091d;

    /* renamed from: e  reason: collision with root package name */
    private final xh.r f16092e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y3(n0 n0Var, xh.r rVar, r2 r2Var, xh.r rVar2, b2 b2Var) {
        this.f16088a = n0Var;
        this.f16091d = rVar;
        this.f16089b = r2Var;
        this.f16092e = rVar2;
        this.f16090c = b2Var;
    }

    public final void b(final v3 v3Var) {
        File u10 = this.f16088a.u(v3Var.f16014b, v3Var.f16049c, v3Var.f16051e);
        if (u10.exists()) {
            File u11 = this.f16088a.u(v3Var.f16014b, v3Var.f16050d, v3Var.f16051e);
            u11.mkdirs();
            if (u10.renameTo(u11)) {
                ((Executor) this.f16092e.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.w3
                    @Override // java.lang.Runnable
                    public final void run() {
                        y3.this.f16088a.b(r1.f16014b, r1.f16050d, v3Var.f16051e);
                    }
                });
                this.f16089b.k(v3Var.f16014b, v3Var.f16050d, v3Var.f16051e);
                this.f16090c.c(v3Var.f16014b);
                ((t4) this.f16091d.a()).b(v3Var.f16013a, v3Var.f16014b);
                return;
            }
            throw new w1(String.format("Cannot promote pack %s from %s to %s", v3Var.f16014b, u10.getAbsolutePath(), u11.getAbsolutePath()), v3Var.f16013a);
        }
        throw new w1(String.format("Cannot find pack files to promote for pack %s at %s", v3Var.f16014b, u10.getAbsolutePath()), v3Var.f16013a);
    }
}
