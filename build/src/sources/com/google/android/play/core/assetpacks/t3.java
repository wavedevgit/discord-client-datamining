package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t3 {

    /* renamed from: c  reason: collision with root package name */
    private static final ai.k0 f16904c = new ai.k0("PatchSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16905a;

    /* renamed from: b  reason: collision with root package name */
    private final ai.r f16906b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t3(n0 n0Var, ai.r rVar) {
        this.f16905a = n0Var;
        this.f16906b = rVar;
    }

    public final void a(s3 s3Var) {
        InputStream gZIPInputStream;
        n0 n0Var = this.f16905a;
        String str = s3Var.f16903b;
        int i10 = s3Var.f16883c;
        long j10 = s3Var.f16884d;
        File u10 = n0Var.u(str, i10, j10);
        File file = new File(n0Var.v(str, i10, j10), s3Var.f16888h);
        try {
            InputStream inputStream = s3Var.f16890j;
            if (s3Var.f16887g != 2) {
                gZIPInputStream = inputStream;
            } else {
                gZIPInputStream = new GZIPInputStream(inputStream, 8192);
            }
            q0 q0Var = new q0(u10, file);
            File C = this.f16905a.C(s3Var.f16903b, s3Var.f16885e, s3Var.f16886f, s3Var.f16888h);
            if (!C.exists()) {
                C.mkdirs();
            }
            b4 b4Var = new b4(this.f16905a, s3Var.f16903b, s3Var.f16885e, s3Var.f16886f, s3Var.f16888h);
            ai.n.a(q0Var, gZIPInputStream, new a2(C, b4Var), s3Var.f16889i);
            b4Var.i(0);
            gZIPInputStream.close();
            f16904c.d("Patching and extraction finished for slice %s of pack %s.", s3Var.f16888h, s3Var.f16903b);
            ((t4) this.f16906b.a()).g(s3Var.f16902a, s3Var.f16903b, s3Var.f16888h, 0);
            try {
                s3Var.f16890j.close();
            } catch (IOException unused) {
                f16904c.e("Could not close file for slice %s of pack %s.", s3Var.f16888h, s3Var.f16903b);
            }
        } catch (IOException e10) {
            f16904c.b("IOException during patching %s.", e10.getMessage());
            throw new w1(String.format("Error patching slice %s of pack %s.", s3Var.f16888h, s3Var.f16903b), e10, s3Var.f16902a);
        }
    }
}
