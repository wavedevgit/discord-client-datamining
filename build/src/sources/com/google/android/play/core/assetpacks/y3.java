package com.google.android.play.core.assetpacks;

import java.io.File;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16977a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16978b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16979c;

    /* renamed from: d  reason: collision with root package name */
    private final ai.r f16980d;

    /* renamed from: e  reason: collision with root package name */
    private final ai.r f16981e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y3(n0 n0Var, ai.r rVar, r2 r2Var, ai.r rVar2, b2 b2Var) {
        this.f16977a = n0Var;
        this.f16980d = rVar;
        this.f16978b = r2Var;
        this.f16981e = rVar2;
        this.f16979c = b2Var;
    }

    public final void b(final v3 v3Var) {
        File u10 = this.f16977a.u(v3Var.f16903b, v3Var.f16938c, v3Var.f16940e);
        if (u10.exists()) {
            File u11 = this.f16977a.u(v3Var.f16903b, v3Var.f16939d, v3Var.f16940e);
            u11.mkdirs();
            if (u10.renameTo(u11)) {
                ((Executor) this.f16981e.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.w3
                    @Override // java.lang.Runnable
                    public final void run() {
                        y3.this.f16977a.b(r1.f16903b, r1.f16939d, v3Var.f16940e);
                    }
                });
                this.f16978b.k(v3Var.f16903b, v3Var.f16939d, v3Var.f16940e);
                this.f16979c.c(v3Var.f16903b);
                ((t4) this.f16980d.a()).b(v3Var.f16902a, v3Var.f16903b);
                return;
            }
            throw new w1(String.format("Cannot promote pack %s from %s to %s", v3Var.f16903b, u10.getAbsolutePath(), u11.getAbsolutePath()), v3Var.f16902a);
        }
        throw new w1(String.format("Cannot find pack files to promote for pack %s at %s", v3Var.f16903b, u10.getAbsolutePath()), v3Var.f16902a);
    }
}
