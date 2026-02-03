package com.google.android.play.core.assetpacks;

import java.io.File;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15714a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f15715b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f15716c;

    /* renamed from: d  reason: collision with root package name */
    private final th.r f15717d;

    /* renamed from: e  reason: collision with root package name */
    private final th.r f15718e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y3(n0 n0Var, th.r rVar, r2 r2Var, th.r rVar2, b2 b2Var) {
        this.f15714a = n0Var;
        this.f15717d = rVar;
        this.f15715b = r2Var;
        this.f15718e = rVar2;
        this.f15716c = b2Var;
    }

    public final void b(final v3 v3Var) {
        File u10 = this.f15714a.u(v3Var.f15640b, v3Var.f15675c, v3Var.f15677e);
        if (u10.exists()) {
            File u11 = this.f15714a.u(v3Var.f15640b, v3Var.f15676d, v3Var.f15677e);
            u11.mkdirs();
            if (u10.renameTo(u11)) {
                ((Executor) this.f15718e.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.w3
                    @Override // java.lang.Runnable
                    public final void run() {
                        y3.this.f15714a.b(r1.f15640b, r1.f15676d, v3Var.f15677e);
                    }
                });
                this.f15715b.k(v3Var.f15640b, v3Var.f15676d, v3Var.f15677e);
                this.f15716c.c(v3Var.f15640b);
                ((t4) this.f15717d.a()).b(v3Var.f15639a, v3Var.f15640b);
                return;
            }
            throw new w1(String.format("Cannot promote pack %s from %s to %s", v3Var.f15640b, u10.getAbsolutePath(), u11.getAbsolutePath()), v3Var.f15639a);
        }
        throw new w1(String.format("Cannot find pack files to promote for pack %s at %s", v3Var.f15640b, u10.getAbsolutePath()), v3Var.f15639a);
    }
}
