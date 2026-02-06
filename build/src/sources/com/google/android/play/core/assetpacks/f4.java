package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f4 {

    /* renamed from: b  reason: collision with root package name */
    private static final xh.k0 f15750b = new xh.k0("VerifySliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15751a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f4(n0 n0Var) {
        this.f15751a = n0Var;
    }

    private final void b(e4 e4Var, File file) {
        try {
            File B = this.f15751a.B(e4Var.f16014b, e4Var.f15733c, e4Var.f15734d, e4Var.f15735e);
            if (B.exists()) {
                try {
                    if (d3.a(d4.a(file, B)).equals(e4Var.f15736f)) {
                        f15750b.d("Verification of slice %s of pack %s successful.", e4Var.f15735e, e4Var.f16014b);
                        return;
                    }
                    throw new w1(String.format("Verification failed for slice %s.", e4Var.f15735e), e4Var.f16013a);
                } catch (IOException e10) {
                    throw new w1(String.format("Could not digest file during verification for slice %s.", e4Var.f15735e), e10, e4Var.f16013a);
                } catch (NoSuchAlgorithmException e11) {
                    throw new w1("SHA256 algorithm not supported.", e11, e4Var.f16013a);
                }
            }
            throw new w1(String.format("Cannot find metadata files for slice %s.", e4Var.f15735e), e4Var.f16013a);
        } catch (IOException e12) {
            throw new w1(String.format("Could not reconstruct slice archive during verification for slice %s.", e4Var.f15735e), e12, e4Var.f16013a);
        }
    }

    public final void a(e4 e4Var) {
        File C = this.f15751a.C(e4Var.f16014b, e4Var.f15733c, e4Var.f15734d, e4Var.f15735e);
        if (C.exists()) {
            b(e4Var, C);
            File D = this.f15751a.D(e4Var.f16014b, e4Var.f15733c, e4Var.f15734d, e4Var.f15735e);
            if (!D.exists()) {
                D.mkdirs();
            }
            if (C.renameTo(D)) {
                return;
            }
            throw new w1(String.format("Failed to move slice %s after verification.", e4Var.f15735e), e4Var.f16013a);
        }
        throw new w1(String.format("Cannot find unverified files for slice %s.", e4Var.f15735e), e4Var.f16013a);
    }
}
