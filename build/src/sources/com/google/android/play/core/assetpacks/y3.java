package com.google.android.play.core.assetpacks;

import java.io.File;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f17117a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f17118b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f17119c;

    /* renamed from: d  reason: collision with root package name */
    private final th.r f17120d;

    /* renamed from: e  reason: collision with root package name */
    private final th.r f17121e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y3(n0 n0Var, th.r rVar, r2 r2Var, th.r rVar2, b2 b2Var) {
        this.f17117a = n0Var;
        this.f17120d = rVar;
        this.f17118b = r2Var;
        this.f17121e = rVar2;
        this.f17119c = b2Var;
    }

    public final void b(final v3 v3Var) {
        File u10 = this.f17117a.u(v3Var.f17043b, v3Var.f17078c, v3Var.f17080e);
        if (u10.exists()) {
            File u11 = this.f17117a.u(v3Var.f17043b, v3Var.f17079d, v3Var.f17080e);
            u11.mkdirs();
            if (u10.renameTo(u11)) {
                ((Executor) this.f17121e.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.w3
                    @Override // java.lang.Runnable
                    public final void run() {
                        y3.this.f17117a.b(r1.f17043b, r1.f17079d, v3Var.f17080e);
                    }
                });
                this.f17118b.k(v3Var.f17043b, v3Var.f17079d, v3Var.f17080e);
                this.f17119c.c(v3Var.f17043b);
                ((t4) this.f17120d.a()).b(v3Var.f17042a, v3Var.f17043b);
                return;
            }
            throw new w1(String.format("Cannot promote pack %s from %s to %s", v3Var.f17043b, u10.getAbsolutePath(), u11.getAbsolutePath()), v3Var.f17042a);
        }
        throw new w1(String.format("Cannot find pack files to promote for pack %s at %s", v3Var.f17043b, u10.getAbsolutePath()), v3Var.f17042a);
    }
}
