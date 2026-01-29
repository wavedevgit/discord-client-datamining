package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16858a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f16859b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16860c;

    /* renamed from: d  reason: collision with root package name */
    private final o3 f16861d;

    /* renamed from: e  reason: collision with root package name */
    private final th.r f16862e;

    /* renamed from: f  reason: collision with root package name */
    private final th.r f16863f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k3(n0 n0Var, th.r rVar, r2 r2Var, th.r rVar2, b2 b2Var, o3 o3Var) {
        this.f16858a = n0Var;
        this.f16862e = rVar;
        this.f16859b = r2Var;
        this.f16863f = rVar2;
        this.f16860c = b2Var;
        this.f16861d = o3Var;
    }

    public final void b(final i3 i3Var) {
        n0 n0Var = this.f16858a;
        String str = i3Var.f17043b;
        int i10 = i3Var.f16808c;
        long j10 = i3Var.f16809d;
        File w10 = n0Var.w(str, i10, j10);
        File y10 = n0Var.y(str, i10, j10);
        if (w10.exists() && y10.exists()) {
            File u10 = this.f16858a.u(i3Var.f17043b, i3Var.f16808c, i3Var.f16809d);
            u10.mkdirs();
            if (w10.renameTo(u10)) {
                new File(this.f16858a.u(i3Var.f17043b, i3Var.f16808c, i3Var.f16809d), "merge.tmp").delete();
                File v10 = this.f16858a.v(i3Var.f17043b, i3Var.f16808c, i3Var.f16809d);
                v10.mkdirs();
                if (y10.renameTo(v10)) {
                    try {
                        this.f16861d.b(i3Var.f17043b, i3Var.f16808c, i3Var.f16809d, i3Var.f16810e);
                        ((Executor) this.f16863f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j3
                            @Override // java.lang.Runnable
                            public final void run() {
                                k3.this.f16858a.b(r1.f17043b, r1.f16808c, i3Var.f16809d);
                            }
                        });
                        this.f16859b.k(i3Var.f17043b, i3Var.f16808c, i3Var.f16809d);
                        this.f16860c.c(i3Var.f17043b);
                        ((t4) this.f16862e.a()).b(i3Var.f17042a, i3Var.f17043b);
                        return;
                    } catch (IOException e10) {
                        throw new w1(String.format("Could not write asset pack version tag for pack %s: %s", i3Var.f17043b, e10.getMessage()), i3Var.f17042a);
                    }
                }
                throw new w1("Cannot move metadata files to final location.", i3Var.f17042a);
            }
            throw new w1("Cannot move merged pack files to final location.", i3Var.f17042a);
        }
        throw new w1(String.format("Cannot find pack files to move for pack %s.", i3Var.f17043b), i3Var.f17042a);
    }
}
