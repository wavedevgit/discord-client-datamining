package com.google.android.gms.internal.fido;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class t4 extends s4 {

    /* renamed from: i  reason: collision with root package name */
    protected final byte[] f14121i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t4(byte[] bArr) {
        super(null);
        bArr.getClass();
        this.f14121i = bArr;
    }

    @Override // com.google.android.gms.internal.fido.v4
    public byte b(int i10) {
        return this.f14121i[i10];
    }

    @Override // com.google.android.gms.internal.fido.v4
    byte c(int i10) {
        return this.f14121i[i10];
    }

    @Override // com.google.android.gms.internal.fido.v4
    public int d() {
        return this.f14121i.length;
    }

    @Override // com.google.android.gms.internal.fido.v4
    protected void e(byte[] bArr, int i10, int i11, int i12) {
        System.arraycopy(this.f14121i, 0, bArr, 0, i12);
    }

    @Override // com.google.android.gms.internal.fido.v4
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof v4) || d() != ((v4) obj).d()) {
            return false;
        }
        if (d() == 0) {
            return true;
        }
        if (obj instanceof t4) {
            t4 t4Var = (t4) obj;
            int l10 = l();
            int l11 = t4Var.l();
            if (l10 != 0 && l11 != 0 && l10 != l11) {
                return false;
            }
            int d10 = d();
            if (d10 <= t4Var.d()) {
                if (d10 <= t4Var.d()) {
                    byte[] bArr = this.f14121i;
                    byte[] bArr2 = t4Var.f14121i;
                    int p10 = p() + d10;
                    int p11 = p();
                    int p12 = t4Var.p();
                    while (p11 < p10) {
                        if (bArr[p11] != bArr2[p12]) {
                            return false;
                        }
                        p11++;
                        p12++;
                    }
                    return true;
                }
                int d11 = t4Var.d();
                throw new IllegalArgumentException("Ran off end of other: 0, " + d10 + ", " + d11);
            }
            int d12 = d();
            throw new IllegalArgumentException("Length too large: " + d10 + d12);
        }
        return obj.equals(this);
    }

    @Override // com.google.android.gms.internal.fido.v4
    protected final int f(int i10, int i11, int i12) {
        int p10 = p();
        byte[] bArr = z4.f14154a;
        for (int i13 = p10; i13 < p10 + i12; i13++) {
            i10 = (i10 * 31) + this.f14121i[i13];
        }
        return i10;
    }

    @Override // com.google.android.gms.internal.fido.v4
    public final v4 g(int i10, int i11) {
        int j10 = v4.j(i10, i11, d());
        if (j10 == 0) {
            return v4.f14136e;
        }
        return new q4(this.f14121i, p() + i10, j10);
    }

    @Override // com.google.android.gms.internal.fido.v4
    public final InputStream h() {
        return new ByteArrayInputStream(this.f14121i, p(), d());
    }

    @Override // com.google.android.gms.internal.fido.v4
    public final ByteBuffer i() {
        return ByteBuffer.wrap(this.f14121i, p(), d()).asReadOnlyBuffer();
    }

    protected int p() {
        return 0;
    }
}
