package com.google.android.play.core.assetpacks;

import java.io.File;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16978a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16979b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16980c;

    /* renamed from: d  reason: collision with root package name */
    private final ai.r f16981d;

    /* renamed from: e  reason: collision with root package name */
    private final ai.r f16982e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y3(n0 n0Var, ai.r rVar, r2 r2Var, ai.r rVar2, b2 b2Var) {
        this.f16978a = n0Var;
        this.f16981d = rVar;
        this.f16979b = r2Var;
        this.f16982e = rVar2;
        this.f16980c = b2Var;
    }

    public final void b(final v3 v3Var) {
        File u10 = this.f16978a.u(v3Var.f16904b, v3Var.f16939c, v3Var.f16941e);
        if (u10.exists()) {
            File u11 = this.f16978a.u(v3Var.f16904b, v3Var.f16940d, v3Var.f16941e);
            u11.mkdirs();
            if (u10.renameTo(u11)) {
                ((Executor) this.f16982e.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.w3
                    @Override // java.lang.Runnable
                    public final void run() {
                        y3.this.f16978a.b(r1.f16904b, r1.f16940d, v3Var.f16941e);
                    }
                });
                this.f16979b.k(v3Var.f16904b, v3Var.f16940d, v3Var.f16941e);
                this.f16980c.c(v3Var.f16904b);
                ((t4) this.f16981d.a()).b(v3Var.f16903a, v3Var.f16904b);
                return;
            }
            throw new w1(String.format("Cannot promote pack %s from %s to %s", v3Var.f16904b, u10.getAbsolutePath(), u11.getAbsolutePath()), v3Var.f16903a);
        }
        throw new w1(String.format("Cannot find pack files to promote for pack %s at %s", v3Var.f16904b, u10.getAbsolutePath()), v3Var.f16903a);
    }
}
