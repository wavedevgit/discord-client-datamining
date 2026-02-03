package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15455a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f15456b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f15457c;

    /* renamed from: d  reason: collision with root package name */
    private final o3 f15458d;

    /* renamed from: e  reason: collision with root package name */
    private final th.r f15459e;

    /* renamed from: f  reason: collision with root package name */
    private final th.r f15460f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k3(n0 n0Var, th.r rVar, r2 r2Var, th.r rVar2, b2 b2Var, o3 o3Var) {
        this.f15455a = n0Var;
        this.f15459e = rVar;
        this.f15456b = r2Var;
        this.f15460f = rVar2;
        this.f15457c = b2Var;
        this.f15458d = o3Var;
    }

    public final void b(final i3 i3Var) {
        n0 n0Var = this.f15455a;
        String str = i3Var.f15640b;
        int i10 = i3Var.f15405c;
        long j10 = i3Var.f15406d;
        File w10 = n0Var.w(str, i10, j10);
        File y10 = n0Var.y(str, i10, j10);
        if (w10.exists() && y10.exists()) {
            File u10 = this.f15455a.u(i3Var.f15640b, i3Var.f15405c, i3Var.f15406d);
            u10.mkdirs();
            if (w10.renameTo(u10)) {
                new File(this.f15455a.u(i3Var.f15640b, i3Var.f15405c, i3Var.f15406d), "merge.tmp").delete();
                File v10 = this.f15455a.v(i3Var.f15640b, i3Var.f15405c, i3Var.f15406d);
                v10.mkdirs();
                if (y10.renameTo(v10)) {
                    try {
                        this.f15458d.b(i3Var.f15640b, i3Var.f15405c, i3Var.f15406d, i3Var.f15407e);
                        ((Executor) this.f15460f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j3
                            @Override // java.lang.Runnable
                            public final void run() {
                                k3.this.f15455a.b(r1.f15640b, r1.f15405c, i3Var.f15406d);
                            }
                        });
                        this.f15456b.k(i3Var.f15640b, i3Var.f15405c, i3Var.f15406d);
                        this.f15457c.c(i3Var.f15640b);
                        ((t4) this.f15459e.a()).b(i3Var.f15639a, i3Var.f15640b);
                        return;
                    } catch (IOException e10) {
                        throw new w1(String.format("Could not write asset pack version tag for pack %s: %s", i3Var.f15640b, e10.getMessage()), i3Var.f15639a);
                    }
                }
                throw new w1("Cannot move metadata files to final location.", i3Var.f15639a);
            }
            throw new w1("Cannot move merged pack files to final location.", i3Var.f15639a);
        }
        throw new w1(String.format("Cannot find pack files to move for pack %s.", i3Var.f15640b), i3Var.f15639a);
    }
}
