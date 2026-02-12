package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t3 {

    /* renamed from: c  reason: collision with root package name */
    private static final ai.k0 f16905c = new ai.k0("PatchSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16906a;

    /* renamed from: b  reason: collision with root package name */
    private final ai.r f16907b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t3(n0 n0Var, ai.r rVar) {
        this.f16906a = n0Var;
        this.f16907b = rVar;
    }

    public final void a(s3 s3Var) {
        InputStream gZIPInputStream;
        n0 n0Var = this.f16906a;
        String str = s3Var.f16904b;
        int i10 = s3Var.f16884c;
        long j10 = s3Var.f16885d;
        File u10 = n0Var.u(str, i10, j10);
        File file = new File(n0Var.v(str, i10, j10), s3Var.f16889h);
        try {
            InputStream inputStream = s3Var.f16891j;
            if (s3Var.f16888g != 2) {
                gZIPInputStream = inputStream;
            } else {
                gZIPInputStream = new GZIPInputStream(inputStream, 8192);
            }
            q0 q0Var = new q0(u10, file);
            File C = this.f16906a.C(s3Var.f16904b, s3Var.f16886e, s3Var.f16887f, s3Var.f16889h);
            if (!C.exists()) {
                C.mkdirs();
            }
            b4 b4Var = new b4(this.f16906a, s3Var.f16904b, s3Var.f16886e, s3Var.f16887f, s3Var.f16889h);
            ai.n.a(q0Var, gZIPInputStream, new a2(C, b4Var), s3Var.f16890i);
            b4Var.i(0);
            gZIPInputStream.close();
            f16905c.d("Patching and extraction finished for slice %s of pack %s.", s3Var.f16889h, s3Var.f16904b);
            ((t4) this.f16907b.a()).g(s3Var.f16903a, s3Var.f16904b, s3Var.f16889h, 0);
            try {
                s3Var.f16891j.close();
            } catch (IOException unused) {
                f16905c.e("Could not close file for slice %s of pack %s.", s3Var.f16889h, s3Var.f16904b);
            }
        } catch (IOException e10) {
            f16905c.b("IOException during patching %s.", e10.getMessage());
            throw new w1(String.format("Error patching slice %s of pack %s.", s3Var.f16889h, s3Var.f16904b), e10, s3Var.f16903a);
        }
    }
}
