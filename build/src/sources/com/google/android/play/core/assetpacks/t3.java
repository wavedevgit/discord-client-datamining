package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t3 {

    /* renamed from: c  reason: collision with root package name */
    private static final wh.k0 f16035c = new wh.k0("PatchSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16036a;

    /* renamed from: b  reason: collision with root package name */
    private final wh.r f16037b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t3(n0 n0Var, wh.r rVar) {
        this.f16036a = n0Var;
        this.f16037b = rVar;
    }

    public final void a(s3 s3Var) {
        InputStream gZIPInputStream;
        n0 n0Var = this.f16036a;
        String str = s3Var.f16034b;
        int i10 = s3Var.f16014c;
        long j10 = s3Var.f16015d;
        File u10 = n0Var.u(str, i10, j10);
        File file = new File(n0Var.v(str, i10, j10), s3Var.f16019h);
        try {
            InputStream inputStream = s3Var.f16021j;
            if (s3Var.f16018g != 2) {
                gZIPInputStream = inputStream;
            } else {
                gZIPInputStream = new GZIPInputStream(inputStream, 8192);
            }
            q0 q0Var = new q0(u10, file);
            File C = this.f16036a.C(s3Var.f16034b, s3Var.f16016e, s3Var.f16017f, s3Var.f16019h);
            if (!C.exists()) {
                C.mkdirs();
            }
            b4 b4Var = new b4(this.f16036a, s3Var.f16034b, s3Var.f16016e, s3Var.f16017f, s3Var.f16019h);
            wh.n.a(q0Var, gZIPInputStream, new a2(C, b4Var), s3Var.f16020i);
            b4Var.i(0);
            gZIPInputStream.close();
            f16035c.d("Patching and extraction finished for slice %s of pack %s.", s3Var.f16019h, s3Var.f16034b);
            ((t4) this.f16037b.a()).g(s3Var.f16033a, s3Var.f16034b, s3Var.f16019h, 0);
            try {
                s3Var.f16021j.close();
            } catch (IOException unused) {
                f16035c.e("Could not close file for slice %s of pack %s.", s3Var.f16019h, s3Var.f16034b);
            }
        } catch (IOException e10) {
            f16035c.b("IOException during patching %s.", e10.getMessage());
            throw new w1(String.format("Error patching slice %s of pack %s.", s3Var.f16019h, s3Var.f16034b), e10, s3Var.f16033a);
        }
    }
}
