package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f4 {

    /* renamed from: b  reason: collision with root package name */
    private static final th.k0 f15376b = new th.k0("VerifySliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15377a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f4(n0 n0Var) {
        this.f15377a = n0Var;
    }

    private final void b(e4 e4Var, File file) {
        try {
            File B = this.f15377a.B(e4Var.f15640b, e4Var.f15359c, e4Var.f15360d, e4Var.f15361e);
            if (B.exists()) {
                try {
                    if (d3.a(d4.a(file, B)).equals(e4Var.f15362f)) {
                        f15376b.d("Verification of slice %s of pack %s successful.", e4Var.f15361e, e4Var.f15640b);
                        return;
                    }
                    throw new w1(String.format("Verification failed for slice %s.", e4Var.f15361e), e4Var.f15639a);
                } catch (IOException e10) {
                    throw new w1(String.format("Could not digest file during verification for slice %s.", e4Var.f15361e), e10, e4Var.f15639a);
                } catch (NoSuchAlgorithmException e11) {
                    throw new w1("SHA256 algorithm not supported.", e11, e4Var.f15639a);
                }
            }
            throw new w1(String.format("Cannot find metadata files for slice %s.", e4Var.f15361e), e4Var.f15639a);
        } catch (IOException e12) {
            throw new w1(String.format("Could not reconstruct slice archive during verification for slice %s.", e4Var.f15361e), e12, e4Var.f15639a);
        }
    }

    public final void a(e4 e4Var) {
        File C = this.f15377a.C(e4Var.f15640b, e4Var.f15359c, e4Var.f15360d, e4Var.f15361e);
        if (C.exists()) {
            b(e4Var, C);
            File D = this.f15377a.D(e4Var.f15640b, e4Var.f15359c, e4Var.f15360d, e4Var.f15361e);
            if (!D.exists()) {
                D.mkdirs();
            }
            if (C.renameTo(D)) {
                return;
            }
            throw new w1(String.format("Failed to move slice %s after verification.", e4Var.f15361e), e4Var.f15639a);
        }
        throw new w1(String.format("Cannot find unverified files for slice %s.", e4Var.f15361e), e4Var.f15639a);
    }
}
