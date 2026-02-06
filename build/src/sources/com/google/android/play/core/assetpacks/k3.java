package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15829a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f15830b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f15831c;

    /* renamed from: d  reason: collision with root package name */
    private final o3 f15832d;

    /* renamed from: e  reason: collision with root package name */
    private final xh.r f15833e;

    /* renamed from: f  reason: collision with root package name */
    private final xh.r f15834f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k3(n0 n0Var, xh.r rVar, r2 r2Var, xh.r rVar2, b2 b2Var, o3 o3Var) {
        this.f15829a = n0Var;
        this.f15833e = rVar;
        this.f15830b = r2Var;
        this.f15834f = rVar2;
        this.f15831c = b2Var;
        this.f15832d = o3Var;
    }

    public final void b(final i3 i3Var) {
        n0 n0Var = this.f15829a;
        String str = i3Var.f16014b;
        int i10 = i3Var.f15779c;
        long j10 = i3Var.f15780d;
        File w10 = n0Var.w(str, i10, j10);
        File y10 = n0Var.y(str, i10, j10);
        if (w10.exists() && y10.exists()) {
            File u10 = this.f15829a.u(i3Var.f16014b, i3Var.f15779c, i3Var.f15780d);
            u10.mkdirs();
            if (w10.renameTo(u10)) {
                new File(this.f15829a.u(i3Var.f16014b, i3Var.f15779c, i3Var.f15780d), "merge.tmp").delete();
                File v10 = this.f15829a.v(i3Var.f16014b, i3Var.f15779c, i3Var.f15780d);
                v10.mkdirs();
                if (y10.renameTo(v10)) {
                    try {
                        this.f15832d.b(i3Var.f16014b, i3Var.f15779c, i3Var.f15780d, i3Var.f15781e);
                        ((Executor) this.f15834f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j3
                            @Override // java.lang.Runnable
                            public final void run() {
                                k3.this.f15829a.b(r1.f16014b, r1.f15779c, i3Var.f15780d);
                            }
                        });
                        this.f15830b.k(i3Var.f16014b, i3Var.f15779c, i3Var.f15780d);
                        this.f15831c.c(i3Var.f16014b);
                        ((t4) this.f15833e.a()).b(i3Var.f16013a, i3Var.f16014b);
                        return;
                    } catch (IOException e10) {
                        throw new w1(String.format("Could not write asset pack version tag for pack %s: %s", i3Var.f16014b, e10.getMessage()), i3Var.f16013a);
                    }
                }
                throw new w1("Cannot move metadata files to final location.", i3Var.f16013a);
            }
            throw new w1("Cannot move merged pack files to final location.", i3Var.f16013a);
        }
        throw new w1(String.format("Cannot find pack files to move for pack %s.", i3Var.f16014b), i3Var.f16013a);
    }
}
