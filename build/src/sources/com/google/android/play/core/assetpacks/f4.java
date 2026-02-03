package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f4 {

    /* renamed from: b  reason: collision with root package name */
    private static final th.k0 f16408b = new th.k0("VerifySliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16409a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f4(n0 n0Var) {
        this.f16409a = n0Var;
    }

    private final void b(e4 e4Var, File file) {
        try {
            File B = this.f16409a.B(e4Var.f16672b, e4Var.f16391c, e4Var.f16392d, e4Var.f16393e);
            if (B.exists()) {
                try {
                    if (d3.a(d4.a(file, B)).equals(e4Var.f16394f)) {
                        f16408b.d("Verification of slice %s of pack %s successful.", e4Var.f16393e, e4Var.f16672b);
                        return;
                    }
                    throw new w1(String.format("Verification failed for slice %s.", e4Var.f16393e), e4Var.f16671a);
                } catch (IOException e10) {
                    throw new w1(String.format("Could not digest file during verification for slice %s.", e4Var.f16393e), e10, e4Var.f16671a);
                } catch (NoSuchAlgorithmException e11) {
                    throw new w1("SHA256 algorithm not supported.", e11, e4Var.f16671a);
                }
            }
            throw new w1(String.format("Cannot find metadata files for slice %s.", e4Var.f16393e), e4Var.f16671a);
        } catch (IOException e12) {
            throw new w1(String.format("Could not reconstruct slice archive during verification for slice %s.", e4Var.f16393e), e12, e4Var.f16671a);
        }
    }

    public final void a(e4 e4Var) {
        File C = this.f16409a.C(e4Var.f16672b, e4Var.f16391c, e4Var.f16392d, e4Var.f16393e);
        if (C.exists()) {
            b(e4Var, C);
            File D = this.f16409a.D(e4Var.f16672b, e4Var.f16391c, e4Var.f16392d, e4Var.f16393e);
            if (!D.exists()) {
                D.mkdirs();
            }
            if (C.renameTo(D)) {
                return;
            }
            throw new w1(String.format("Failed to move slice %s after verification.", e4Var.f16393e), e4Var.f16671a);
        }
        throw new w1(String.format("Cannot find unverified files for slice %s.", e4Var.f16393e), e4Var.f16671a);
    }
}
