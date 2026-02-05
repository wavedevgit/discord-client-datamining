package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15849a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f15850b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f15851c;

    /* renamed from: d  reason: collision with root package name */
    private final o3 f15852d;

    /* renamed from: e  reason: collision with root package name */
    private final wh.r f15853e;

    /* renamed from: f  reason: collision with root package name */
    private final wh.r f15854f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k3(n0 n0Var, wh.r rVar, r2 r2Var, wh.r rVar2, b2 b2Var, o3 o3Var) {
        this.f15849a = n0Var;
        this.f15853e = rVar;
        this.f15850b = r2Var;
        this.f15854f = rVar2;
        this.f15851c = b2Var;
        this.f15852d = o3Var;
    }

    public final void b(final i3 i3Var) {
        n0 n0Var = this.f15849a;
        String str = i3Var.f16034b;
        int i10 = i3Var.f15799c;
        long j10 = i3Var.f15800d;
        File w10 = n0Var.w(str, i10, j10);
        File y10 = n0Var.y(str, i10, j10);
        if (w10.exists() && y10.exists()) {
            File u10 = this.f15849a.u(i3Var.f16034b, i3Var.f15799c, i3Var.f15800d);
            u10.mkdirs();
            if (w10.renameTo(u10)) {
                new File(this.f15849a.u(i3Var.f16034b, i3Var.f15799c, i3Var.f15800d), "merge.tmp").delete();
                File v10 = this.f15849a.v(i3Var.f16034b, i3Var.f15799c, i3Var.f15800d);
                v10.mkdirs();
                if (y10.renameTo(v10)) {
                    try {
                        this.f15852d.b(i3Var.f16034b, i3Var.f15799c, i3Var.f15800d, i3Var.f15801e);
                        ((Executor) this.f15854f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j3
                            @Override // java.lang.Runnable
                            public final void run() {
                                k3.this.f15849a.b(r1.f16034b, r1.f15799c, i3Var.f15800d);
                            }
                        });
                        this.f15850b.k(i3Var.f16034b, i3Var.f15799c, i3Var.f15800d);
                        this.f15851c.c(i3Var.f16034b);
                        ((t4) this.f15853e.a()).b(i3Var.f16033a, i3Var.f16034b);
                        return;
                    } catch (IOException e10) {
                        throw new w1(String.format("Could not write asset pack version tag for pack %s: %s", i3Var.f16034b, e10.getMessage()), i3Var.f16033a);
                    }
                }
                throw new w1("Cannot move metadata files to final location.", i3Var.f16033a);
            }
            throw new w1("Cannot move merged pack files to final location.", i3Var.f16033a);
        }
        throw new w1(String.format("Cannot find pack files to move for pack %s.", i3Var.f16034b), i3Var.f16033a);
    }
}
