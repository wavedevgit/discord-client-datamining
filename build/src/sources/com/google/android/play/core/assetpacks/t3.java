package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t3 {

    /* renamed from: c  reason: collision with root package name */
    private static final xh.k0 f16015c = new xh.k0("PatchSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16016a;

    /* renamed from: b  reason: collision with root package name */
    private final xh.r f16017b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t3(n0 n0Var, xh.r rVar) {
        this.f16016a = n0Var;
        this.f16017b = rVar;
    }

    public final void a(s3 s3Var) {
        InputStream gZIPInputStream;
        n0 n0Var = this.f16016a;
        String str = s3Var.f16014b;
        int i10 = s3Var.f15994c;
        long j10 = s3Var.f15995d;
        File u10 = n0Var.u(str, i10, j10);
        File file = new File(n0Var.v(str, i10, j10), s3Var.f15999h);
        try {
            InputStream inputStream = s3Var.f16001j;
            if (s3Var.f15998g != 2) {
                gZIPInputStream = inputStream;
            } else {
                gZIPInputStream = new GZIPInputStream(inputStream, 8192);
            }
            q0 q0Var = new q0(u10, file);
            File C = this.f16016a.C(s3Var.f16014b, s3Var.f15996e, s3Var.f15997f, s3Var.f15999h);
            if (!C.exists()) {
                C.mkdirs();
            }
            b4 b4Var = new b4(this.f16016a, s3Var.f16014b, s3Var.f15996e, s3Var.f15997f, s3Var.f15999h);
            xh.n.a(q0Var, gZIPInputStream, new a2(C, b4Var), s3Var.f16000i);
            b4Var.i(0);
            gZIPInputStream.close();
            f16015c.d("Patching and extraction finished for slice %s of pack %s.", s3Var.f15999h, s3Var.f16014b);
            ((t4) this.f16017b.a()).g(s3Var.f16013a, s3Var.f16014b, s3Var.f15999h, 0);
            try {
                s3Var.f16001j.close();
            } catch (IOException unused) {
                f16015c.e("Could not close file for slice %s of pack %s.", s3Var.f15999h, s3Var.f16014b);
            }
        } catch (IOException e10) {
            f16015c.b("IOException during patching %s.", e10.getMessage());
            throw new w1(String.format("Error patching slice %s of pack %s.", s3Var.f15999h, s3Var.f16014b), e10, s3Var.f16013a);
        }
    }
}
