package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t3 {

    /* renamed from: c  reason: collision with root package name */
    private static final yh.k0 f16155c = new yh.k0("PatchSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16156a;

    /* renamed from: b  reason: collision with root package name */
    private final yh.r f16157b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t3(n0 n0Var, yh.r rVar) {
        this.f16156a = n0Var;
        this.f16157b = rVar;
    }

    public final void a(s3 s3Var) {
        InputStream gZIPInputStream;
        n0 n0Var = this.f16156a;
        String str = s3Var.f16154b;
        int i10 = s3Var.f16134c;
        long j10 = s3Var.f16135d;
        File u10 = n0Var.u(str, i10, j10);
        File file = new File(n0Var.v(str, i10, j10), s3Var.f16139h);
        try {
            InputStream inputStream = s3Var.f16141j;
            if (s3Var.f16138g != 2) {
                gZIPInputStream = inputStream;
            } else {
                gZIPInputStream = new GZIPInputStream(inputStream, 8192);
            }
            q0 q0Var = new q0(u10, file);
            File C = this.f16156a.C(s3Var.f16154b, s3Var.f16136e, s3Var.f16137f, s3Var.f16139h);
            if (!C.exists()) {
                C.mkdirs();
            }
            b4 b4Var = new b4(this.f16156a, s3Var.f16154b, s3Var.f16136e, s3Var.f16137f, s3Var.f16139h);
            yh.n.a(q0Var, gZIPInputStream, new a2(C, b4Var), s3Var.f16140i);
            b4Var.i(0);
            gZIPInputStream.close();
            f16155c.d("Patching and extraction finished for slice %s of pack %s.", s3Var.f16139h, s3Var.f16154b);
            ((t4) this.f16157b.a()).g(s3Var.f16153a, s3Var.f16154b, s3Var.f16139h, 0);
            try {
                s3Var.f16141j.close();
            } catch (IOException unused) {
                f16155c.e("Could not close file for slice %s of pack %s.", s3Var.f16139h, s3Var.f16154b);
            }
        } catch (IOException e10) {
            f16155c.b("IOException during patching %s.", e10.getMessage());
            throw new w1(String.format("Error patching slice %s of pack %s.", s3Var.f16139h, s3Var.f16154b), e10, s3Var.f16153a);
        }
    }
}
