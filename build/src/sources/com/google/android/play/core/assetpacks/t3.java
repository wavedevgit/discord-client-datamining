package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t3 {

    /* renamed from: c  reason: collision with root package name */
    private static final th.k0 f16673c = new th.k0("PatchSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16674a;

    /* renamed from: b  reason: collision with root package name */
    private final th.r f16675b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t3(n0 n0Var, th.r rVar) {
        this.f16674a = n0Var;
        this.f16675b = rVar;
    }

    public final void a(s3 s3Var) {
        InputStream gZIPInputStream;
        n0 n0Var = this.f16674a;
        String str = s3Var.f16672b;
        int i10 = s3Var.f16652c;
        long j10 = s3Var.f16653d;
        File u10 = n0Var.u(str, i10, j10);
        File file = new File(n0Var.v(str, i10, j10), s3Var.f16657h);
        try {
            InputStream inputStream = s3Var.f16659j;
            if (s3Var.f16656g != 2) {
                gZIPInputStream = inputStream;
            } else {
                gZIPInputStream = new GZIPInputStream(inputStream, 8192);
            }
            q0 q0Var = new q0(u10, file);
            File C = this.f16674a.C(s3Var.f16672b, s3Var.f16654e, s3Var.f16655f, s3Var.f16657h);
            if (!C.exists()) {
                C.mkdirs();
            }
            b4 b4Var = new b4(this.f16674a, s3Var.f16672b, s3Var.f16654e, s3Var.f16655f, s3Var.f16657h);
            th.n.a(q0Var, gZIPInputStream, new a2(C, b4Var), s3Var.f16658i);
            b4Var.i(0);
            gZIPInputStream.close();
            f16673c.d("Patching and extraction finished for slice %s of pack %s.", s3Var.f16657h, s3Var.f16672b);
            ((t4) this.f16675b.a()).g(s3Var.f16671a, s3Var.f16672b, s3Var.f16657h, 0);
            try {
                s3Var.f16659j.close();
            } catch (IOException unused) {
                f16673c.e("Could not close file for slice %s of pack %s.", s3Var.f16657h, s3Var.f16672b);
            }
        } catch (IOException e10) {
            f16673c.b("IOException during patching %s.", e10.getMessage());
            throw new w1(String.format("Error patching slice %s of pack %s.", s3Var.f16657h, s3Var.f16672b), e10, s3Var.f16671a);
        }
    }
}
