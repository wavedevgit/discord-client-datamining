package com.google.android.play.core.assetpacks;

import java.io.File;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16228a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16229b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16230c;

    /* renamed from: d  reason: collision with root package name */
    private final yh.r f16231d;

    /* renamed from: e  reason: collision with root package name */
    private final yh.r f16232e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y3(n0 n0Var, yh.r rVar, r2 r2Var, yh.r rVar2, b2 b2Var) {
        this.f16228a = n0Var;
        this.f16231d = rVar;
        this.f16229b = r2Var;
        this.f16232e = rVar2;
        this.f16230c = b2Var;
    }

    public final void b(final v3 v3Var) {
        File u10 = this.f16228a.u(v3Var.f16154b, v3Var.f16189c, v3Var.f16191e);
        if (u10.exists()) {
            File u11 = this.f16228a.u(v3Var.f16154b, v3Var.f16190d, v3Var.f16191e);
            u11.mkdirs();
            if (u10.renameTo(u11)) {
                ((Executor) this.f16232e.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.w3
                    @Override // java.lang.Runnable
                    public final void run() {
                        y3.this.f16228a.b(r1.f16154b, r1.f16190d, v3Var.f16191e);
                    }
                });
                this.f16229b.k(v3Var.f16154b, v3Var.f16190d, v3Var.f16191e);
                this.f16230c.c(v3Var.f16154b);
                ((t4) this.f16231d.a()).b(v3Var.f16153a, v3Var.f16154b);
                return;
            }
            throw new w1(String.format("Cannot promote pack %s from %s to %s", v3Var.f16154b, u10.getAbsolutePath(), u11.getAbsolutePath()), v3Var.f16153a);
        }
        throw new w1(String.format("Cannot find pack files to promote for pack %s at %s", v3Var.f16154b, u10.getAbsolutePath()), v3Var.f16153a);
    }
}
