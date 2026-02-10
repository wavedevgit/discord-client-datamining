package com.google.android.gms.internal.fido;

import java.security.MessageDigest;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n2 extends e2 {

    /* renamed from: a  reason: collision with root package name */
    private final MessageDigest f14165a;

    /* renamed from: b  reason: collision with root package name */
    private final int f14166b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f14167c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n2(MessageDigest messageDigest, int i10, o2 o2Var) {
        this.f14165a = messageDigest;
        this.f14166b = i10;
    }

    private final void d() {
        k0.g(!this.f14167c, "Cannot re-use a Hasher after calling hash() on it");
    }

    @Override // com.google.android.gms.internal.fido.k2
    public final i2 a() {
        d();
        this.f14167c = true;
        int i10 = this.f14166b;
        if (i10 == this.f14165a.getDigestLength()) {
            byte[] digest = this.f14165a.digest();
            int i11 = i2.f14124e;
            return new h2(digest);
        }
        byte[] copyOf = Arrays.copyOf(this.f14165a.digest(), i10);
        int i12 = i2.f14124e;
        return new h2(copyOf);
    }

    @Override // com.google.android.gms.internal.fido.e2
    protected final void c(byte[] bArr, int i10, int i11) {
        d();
        this.f14165a.update(bArr, 0, i11);
    }
}
