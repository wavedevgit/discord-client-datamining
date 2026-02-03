package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t3 {

    /* renamed from: c  reason: collision with root package name */
    private static final th.k0 f15641c = new th.k0("PatchSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15642a;

    /* renamed from: b  reason: collision with root package name */
    private final th.r f15643b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t3(n0 n0Var, th.r rVar) {
        this.f15642a = n0Var;
        this.f15643b = rVar;
    }

    public final void a(s3 s3Var) {
        InputStream gZIPInputStream;
        n0 n0Var = this.f15642a;
        String str = s3Var.f15640b;
        int i10 = s3Var.f15620c;
        long j10 = s3Var.f15621d;
        File u10 = n0Var.u(str, i10, j10);
        File file = new File(n0Var.v(str, i10, j10), s3Var.f15625h);
        try {
            InputStream inputStream = s3Var.f15627j;
            if (s3Var.f15624g != 2) {
                gZIPInputStream = inputStream;
            } else {
                gZIPInputStream = new GZIPInputStream(inputStream, 8192);
            }
            q0 q0Var = new q0(u10, file);
            File C = this.f15642a.C(s3Var.f15640b, s3Var.f15622e, s3Var.f15623f, s3Var.f15625h);
            if (!C.exists()) {
                C.mkdirs();
            }
            b4 b4Var = new b4(this.f15642a, s3Var.f15640b, s3Var.f15622e, s3Var.f15623f, s3Var.f15625h);
            th.n.a(q0Var, gZIPInputStream, new a2(C, b4Var), s3Var.f15626i);
            b4Var.i(0);
            gZIPInputStream.close();
            f15641c.d("Patching and extraction finished for slice %s of pack %s.", s3Var.f15625h, s3Var.f15640b);
            ((t4) this.f15643b.a()).g(s3Var.f15639a, s3Var.f15640b, s3Var.f15625h, 0);
            try {
                s3Var.f15627j.close();
            } catch (IOException unused) {
                f15641c.e("Could not close file for slice %s of pack %s.", s3Var.f15625h, s3Var.f15640b);
            }
        } catch (IOException e10) {
            f15641c.b("IOException during patching %s.", e10.getMessage());
            throw new w1(String.format("Error patching slice %s of pack %s.", s3Var.f15625h, s3Var.f15640b), e10, s3Var.f15639a);
        }
    }
}
