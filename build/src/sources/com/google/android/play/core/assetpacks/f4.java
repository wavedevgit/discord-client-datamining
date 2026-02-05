package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f4 {

    /* renamed from: b  reason: collision with root package name */
    private static final wh.k0 f15770b = new wh.k0("VerifySliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15771a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f4(n0 n0Var) {
        this.f15771a = n0Var;
    }

    private final void b(e4 e4Var, File file) {
        try {
            File B = this.f15771a.B(e4Var.f16034b, e4Var.f15753c, e4Var.f15754d, e4Var.f15755e);
            if (B.exists()) {
                try {
                    if (d3.a(d4.a(file, B)).equals(e4Var.f15756f)) {
                        f15770b.d("Verification of slice %s of pack %s successful.", e4Var.f15755e, e4Var.f16034b);
                        return;
                    }
                    throw new w1(String.format("Verification failed for slice %s.", e4Var.f15755e), e4Var.f16033a);
                } catch (IOException e10) {
                    throw new w1(String.format("Could not digest file during verification for slice %s.", e4Var.f15755e), e10, e4Var.f16033a);
                } catch (NoSuchAlgorithmException e11) {
                    throw new w1("SHA256 algorithm not supported.", e11, e4Var.f16033a);
                }
            }
            throw new w1(String.format("Cannot find metadata files for slice %s.", e4Var.f15755e), e4Var.f16033a);
        } catch (IOException e12) {
            throw new w1(String.format("Could not reconstruct slice archive during verification for slice %s.", e4Var.f15755e), e12, e4Var.f16033a);
        }
    }

    public final void a(e4 e4Var) {
        File C = this.f15771a.C(e4Var.f16034b, e4Var.f15753c, e4Var.f15754d, e4Var.f15755e);
        if (C.exists()) {
            b(e4Var, C);
            File D = this.f15771a.D(e4Var.f16034b, e4Var.f15753c, e4Var.f15754d, e4Var.f15755e);
            if (!D.exists()) {
                D.mkdirs();
            }
            if (C.renameTo(D)) {
                return;
            }
            throw new w1(String.format("Failed to move slice %s after verification.", e4Var.f15755e), e4Var.f16033a);
        }
        throw new w1(String.format("Cannot find unverified files for slice %s.", e4Var.f15755e), e4Var.f16033a);
    }
}
