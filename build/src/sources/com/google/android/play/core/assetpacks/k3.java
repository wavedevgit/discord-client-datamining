package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16487a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16488b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16489c;

    /* renamed from: d  reason: collision with root package name */
    private final o3 f16490d;

    /* renamed from: e  reason: collision with root package name */
    private final th.r f16491e;

    /* renamed from: f  reason: collision with root package name */
    private final th.r f16492f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k3(n0 n0Var, th.r rVar, r2 r2Var, th.r rVar2, b2 b2Var, o3 o3Var) {
        this.f16487a = n0Var;
        this.f16491e = rVar;
        this.f16488b = r2Var;
        this.f16492f = rVar2;
        this.f16489c = b2Var;
        this.f16490d = o3Var;
    }

    public final void b(final i3 i3Var) {
        n0 n0Var = this.f16487a;
        String str = i3Var.f16672b;
        int i10 = i3Var.f16437c;
        long j10 = i3Var.f16438d;
        File w10 = n0Var.w(str, i10, j10);
        File y10 = n0Var.y(str, i10, j10);
        if (w10.exists() && y10.exists()) {
            File u10 = this.f16487a.u(i3Var.f16672b, i3Var.f16437c, i3Var.f16438d);
            u10.mkdirs();
            if (w10.renameTo(u10)) {
                new File(this.f16487a.u(i3Var.f16672b, i3Var.f16437c, i3Var.f16438d), "merge.tmp").delete();
                File v10 = this.f16487a.v(i3Var.f16672b, i3Var.f16437c, i3Var.f16438d);
                v10.mkdirs();
                if (y10.renameTo(v10)) {
                    try {
                        this.f16490d.b(i3Var.f16672b, i3Var.f16437c, i3Var.f16438d, i3Var.f16439e);
                        ((Executor) this.f16492f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j3
                            @Override // java.lang.Runnable
                            public final void run() {
                                k3.this.f16487a.b(r1.f16672b, r1.f16437c, i3Var.f16438d);
                            }
                        });
                        this.f16488b.k(i3Var.f16672b, i3Var.f16437c, i3Var.f16438d);
                        this.f16489c.c(i3Var.f16672b);
                        ((t4) this.f16491e.a()).b(i3Var.f16671a, i3Var.f16672b);
                        return;
                    } catch (IOException e10) {
                        throw new w1(String.format("Could not write asset pack version tag for pack %s: %s", i3Var.f16672b, e10.getMessage()), i3Var.f16671a);
                    }
                }
                throw new w1("Cannot move metadata files to final location.", i3Var.f16671a);
            }
            throw new w1("Cannot move merged pack files to final location.", i3Var.f16671a);
        }
        throw new w1(String.format("Cannot find pack files to move for pack %s.", i3Var.f16672b), i3Var.f16671a);
    }
}
