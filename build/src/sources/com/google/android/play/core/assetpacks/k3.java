package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16719a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16720b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16721c;

    /* renamed from: d  reason: collision with root package name */
    private final o3 f16722d;

    /* renamed from: e  reason: collision with root package name */
    private final ai.r f16723e;

    /* renamed from: f  reason: collision with root package name */
    private final ai.r f16724f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k3(n0 n0Var, ai.r rVar, r2 r2Var, ai.r rVar2, b2 b2Var, o3 o3Var) {
        this.f16719a = n0Var;
        this.f16723e = rVar;
        this.f16720b = r2Var;
        this.f16724f = rVar2;
        this.f16721c = b2Var;
        this.f16722d = o3Var;
    }

    public final void b(final i3 i3Var) {
        n0 n0Var = this.f16719a;
        String str = i3Var.f16904b;
        int i10 = i3Var.f16669c;
        long j10 = i3Var.f16670d;
        File w10 = n0Var.w(str, i10, j10);
        File y10 = n0Var.y(str, i10, j10);
        if (w10.exists() && y10.exists()) {
            File u10 = this.f16719a.u(i3Var.f16904b, i3Var.f16669c, i3Var.f16670d);
            u10.mkdirs();
            if (w10.renameTo(u10)) {
                new File(this.f16719a.u(i3Var.f16904b, i3Var.f16669c, i3Var.f16670d), "merge.tmp").delete();
                File v10 = this.f16719a.v(i3Var.f16904b, i3Var.f16669c, i3Var.f16670d);
                v10.mkdirs();
                if (y10.renameTo(v10)) {
                    try {
                        this.f16722d.b(i3Var.f16904b, i3Var.f16669c, i3Var.f16670d, i3Var.f16671e);
                        ((Executor) this.f16724f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j3
                            @Override // java.lang.Runnable
                            public final void run() {
                                k3.this.f16719a.b(r1.f16904b, r1.f16669c, i3Var.f16670d);
                            }
                        });
                        this.f16720b.k(i3Var.f16904b, i3Var.f16669c, i3Var.f16670d);
                        this.f16721c.c(i3Var.f16904b);
                        ((t4) this.f16723e.a()).b(i3Var.f16903a, i3Var.f16904b);
                        return;
                    } catch (IOException e10) {
                        throw new w1(String.format("Could not write asset pack version tag for pack %s: %s", i3Var.f16904b, e10.getMessage()), i3Var.f16903a);
                    }
                }
                throw new w1("Cannot move metadata files to final location.", i3Var.f16903a);
            }
            throw new w1("Cannot move merged pack files to final location.", i3Var.f16903a);
        }
        throw new w1(String.format("Cannot find pack files to move for pack %s.", i3Var.f16904b), i3Var.f16903a);
    }
}
