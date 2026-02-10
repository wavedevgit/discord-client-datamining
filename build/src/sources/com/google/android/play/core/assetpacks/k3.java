package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15969a;

    /* renamed from: b  reason: collision with root package name */
    private final r2 f15970b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f15971c;

    /* renamed from: d  reason: collision with root package name */
    private final o3 f15972d;

    /* renamed from: e  reason: collision with root package name */
    private final yh.r f15973e;

    /* renamed from: f  reason: collision with root package name */
    private final yh.r f15974f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k3(n0 n0Var, yh.r rVar, r2 r2Var, yh.r rVar2, b2 b2Var, o3 o3Var) {
        this.f15969a = n0Var;
        this.f15973e = rVar;
        this.f15970b = r2Var;
        this.f15974f = rVar2;
        this.f15971c = b2Var;
        this.f15972d = o3Var;
    }

    public final void b(final i3 i3Var) {
        n0 n0Var = this.f15969a;
        String str = i3Var.f16154b;
        int i10 = i3Var.f15919c;
        long j10 = i3Var.f15920d;
        File w10 = n0Var.w(str, i10, j10);
        File y10 = n0Var.y(str, i10, j10);
        if (w10.exists() && y10.exists()) {
            File u10 = this.f15969a.u(i3Var.f16154b, i3Var.f15919c, i3Var.f15920d);
            u10.mkdirs();
            if (w10.renameTo(u10)) {
                new File(this.f15969a.u(i3Var.f16154b, i3Var.f15919c, i3Var.f15920d), "merge.tmp").delete();
                File v10 = this.f15969a.v(i3Var.f16154b, i3Var.f15919c, i3Var.f15920d);
                v10.mkdirs();
                if (y10.renameTo(v10)) {
                    try {
                        this.f15972d.b(i3Var.f16154b, i3Var.f15919c, i3Var.f15920d, i3Var.f15921e);
                        ((Executor) this.f15974f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j3
                            @Override // java.lang.Runnable
                            public final void run() {
                                k3.this.f15969a.b(r1.f16154b, r1.f15919c, i3Var.f15920d);
                            }
                        });
                        this.f15970b.k(i3Var.f16154b, i3Var.f15919c, i3Var.f15920d);
                        this.f15971c.c(i3Var.f16154b);
                        ((t4) this.f15973e.a()).b(i3Var.f16153a, i3Var.f16154b);
                        return;
                    } catch (IOException e10) {
                        throw new w1(String.format("Could not write asset pack version tag for pack %s: %s", i3Var.f16154b, e10.getMessage()), i3Var.f16153a);
                    }
                }
                throw new w1("Cannot move metadata files to final location.", i3Var.f16153a);
            }
            throw new w1("Cannot move merged pack files to final location.", i3Var.f16153a);
        }
        throw new w1(String.format("Cannot find pack files to move for pack %s.", i3Var.f16154b), i3Var.f16153a);
    }
}
