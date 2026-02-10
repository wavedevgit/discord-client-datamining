package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16718a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16719b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16720c;

    /* renamed from: d  reason: collision with root package name */
    private final o3 f16721d;

    /* renamed from: e  reason: collision with root package name */
    private final ai.r f16722e;

    /* renamed from: f  reason: collision with root package name */
    private final ai.r f16723f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k3(n0 n0Var, ai.r rVar, r2 r2Var, ai.r rVar2, b2 b2Var, o3 o3Var) {
        this.f16718a = n0Var;
        this.f16722e = rVar;
        this.f16719b = r2Var;
        this.f16723f = rVar2;
        this.f16720c = b2Var;
        this.f16721d = o3Var;
    }

    public final void b(final i3 i3Var) {
        n0 n0Var = this.f16718a;
        String str = i3Var.f16903b;
        int i10 = i3Var.f16668c;
        long j10 = i3Var.f16669d;
        File w10 = n0Var.w(str, i10, j10);
        File y10 = n0Var.y(str, i10, j10);
        if (w10.exists() && y10.exists()) {
            File u10 = this.f16718a.u(i3Var.f16903b, i3Var.f16668c, i3Var.f16669d);
            u10.mkdirs();
            if (w10.renameTo(u10)) {
                new File(this.f16718a.u(i3Var.f16903b, i3Var.f16668c, i3Var.f16669d), "merge.tmp").delete();
                File v10 = this.f16718a.v(i3Var.f16903b, i3Var.f16668c, i3Var.f16669d);
                v10.mkdirs();
                if (y10.renameTo(v10)) {
                    try {
                        this.f16721d.b(i3Var.f16903b, i3Var.f16668c, i3Var.f16669d, i3Var.f16670e);
                        ((Executor) this.f16723f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j3
                            @Override // java.lang.Runnable
                            public final void run() {
                                k3.this.f16718a.b(r1.f16903b, r1.f16668c, i3Var.f16669d);
                            }
                        });
                        this.f16719b.k(i3Var.f16903b, i3Var.f16668c, i3Var.f16669d);
                        this.f16720c.c(i3Var.f16903b);
                        ((t4) this.f16722e.a()).b(i3Var.f16902a, i3Var.f16903b);
                        return;
                    } catch (IOException e10) {
                        throw new w1(String.format("Could not write asset pack version tag for pack %s: %s", i3Var.f16903b, e10.getMessage()), i3Var.f16902a);
                    }
                }
                throw new w1("Cannot move metadata files to final location.", i3Var.f16902a);
            }
            throw new w1("Cannot move merged pack files to final location.", i3Var.f16902a);
        }
        throw new w1(String.format("Cannot find pack files to move for pack %s.", i3Var.f16903b), i3Var.f16902a);
    }
}
