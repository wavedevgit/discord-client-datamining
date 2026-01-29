package com.google.android.gms.internal.fido;

import java.security.MessageDigest;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n2 extends e2 {

    /* renamed from: a  reason: collision with root package name */
    private final MessageDigest f15071a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15072b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f15073c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n2(MessageDigest messageDigest, int i10, o2 o2Var) {
        this.f15071a = messageDigest;
        this.f15072b = i10;
    }

    private final void d() {
        k0.g(!this.f15073c, "Cannot re-use a Hasher after calling hash() on it");
    }

    @Override // com.google.android.gms.internal.fido.k2
    public final i2 a() {
        d();
        this.f15073c = true;
        int i10 = this.f15072b;
        if (i10 == this.f15071a.getDigestLength()) {
            byte[] digest = this.f15071a.digest();
            int i11 = i2.f15030e;
            return new h2(digest);
        }
        byte[] copyOf = Arrays.copyOf(this.f15071a.digest(), i10);
        int i12 = i2.f15030e;
        return new h2(copyOf);
    }

    @Override // com.google.android.gms.internal.fido.e2
    protected final void c(byte[] bArr, int i10, int i11) {
        d();
        this.f15071a.update(bArr, 0, i11);
    }
}
