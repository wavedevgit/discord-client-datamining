package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t3 {

    /* renamed from: c  reason: collision with root package name */
    private static final th.k0 f17044c = new th.k0("PatchSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f17045a;

    /* renamed from: b  reason: collision with root package name */
    private final th.r f17046b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t3(n0 n0Var, th.r rVar) {
        this.f17045a = n0Var;
        this.f17046b = rVar;
    }

    public final void a(s3 s3Var) {
        InputStream gZIPInputStream;
        n0 n0Var = this.f17045a;
        String str = s3Var.f17043b;
        int i10 = s3Var.f17023c;
        long j10 = s3Var.f17024d;
        File u10 = n0Var.u(str, i10, j10);
        File file = new File(n0Var.v(str, i10, j10), s3Var.f17028h);
        try {
            InputStream inputStream = s3Var.f17030j;
            if (s3Var.f17027g != 2) {
                gZIPInputStream = inputStream;
            } else {
                gZIPInputStream = new GZIPInputStream(inputStream, 8192);
            }
            q0 q0Var = new q0(u10, file);
            File C = this.f17045a.C(s3Var.f17043b, s3Var.f17025e, s3Var.f17026f, s3Var.f17028h);
            if (!C.exists()) {
                C.mkdirs();
            }
            b4 b4Var = new b4(this.f17045a, s3Var.f17043b, s3Var.f17025e, s3Var.f17026f, s3Var.f17028h);
            th.n.a(q0Var, gZIPInputStream, new a2(C, b4Var), s3Var.f17029i);
            b4Var.i(0);
            gZIPInputStream.close();
            f17044c.d("Patching and extraction finished for slice %s of pack %s.", s3Var.f17028h, s3Var.f17043b);
            ((t4) this.f17046b.a()).g(s3Var.f17042a, s3Var.f17043b, s3Var.f17028h, 0);
            try {
                s3Var.f17030j.close();
            } catch (IOException unused) {
                f17044c.e("Could not close file for slice %s of pack %s.", s3Var.f17028h, s3Var.f17043b);
            }
        } catch (IOException e10) {
            f17044c.b("IOException during patching %s.", e10.getMessage());
            throw new w1(String.format("Error patching slice %s of pack %s.", s3Var.f17028h, s3Var.f17043b), e10, s3Var.f17042a);
        }
    }
}
