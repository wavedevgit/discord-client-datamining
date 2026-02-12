package com.google.android.gms.internal.play_billing;

import java.nio.charset.Charset;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o0 extends n0 {

    /* renamed from: p  reason: collision with root package name */
    protected final byte[] f15022p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(byte[] bArr) {
        super(null);
        bArr.getClass();
        this.f15022p = bArr;
    }

    @Override // com.google.android.gms.internal.play_billing.r0
    public byte b(int i10) {
        return this.f15022p[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.r0
    public byte c(int i10) {
        return this.f15022p[i10];
    }

    @Override // com.google.android.gms.internal.play_billing.r0
    public int d() {
        return this.f15022p.length;
    }

    @Override // com.google.android.gms.internal.play_billing.r0
    protected final int e(int i10, int i11, int i12) {
        return y1.b(i10, this.f15022p, 0, i12);
    }

    @Override // com.google.android.gms.internal.play_billing.r0
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r0) || d() != ((r0) obj).d()) {
            return false;
        }
        if (d() == 0) {
            return true;
        }
        if (obj instanceof o0) {
            o0 o0Var = (o0) obj;
            int l10 = l();
            int l11 = o0Var.l();
            if (l10 != 0 && l11 != 0 && l10 != l11) {
                return false;
            }
            int d10 = d();
            if (d10 <= o0Var.d()) {
                if (d10 <= o0Var.d()) {
                    byte[] bArr = this.f15022p;
                    byte[] bArr2 = o0Var.f15022p;
                    o0Var.q();
                    int i10 = 0;
                    int i11 = 0;
                    while (i10 < d10) {
                        if (bArr[i10] != bArr2[i11]) {
                            return false;
                        }
                        i10++;
                        i11++;
                    }
                    return true;
                }
                throw new IllegalArgumentException("Ran off end of other: 0, " + d10 + ", " + o0Var.d());
            }
            throw new IllegalArgumentException("Length too large: " + d10 + d());
        }
        return obj.equals(this);
    }

    @Override // com.google.android.gms.internal.play_billing.r0
    public final r0 f(int i10, int i11) {
        int k10 = r0.k(0, i11, d());
        if (k10 == 0) {
            return r0.f15040e;
        }
        return new k0(this.f15022p, 0, k10);
    }

    @Override // com.google.android.gms.internal.play_billing.r0
    protected final String g(Charset charset) {
        return new String(this.f15022p, 0, d(), charset);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.r0
    public final void i(g0 g0Var) {
        ((w0) g0Var).A(this.f15022p, 0, d());
    }

    @Override // com.google.android.gms.internal.play_billing.r0
    public final boolean j() {
        return l4.e(this.f15022p, 0, d());
    }

    protected int q() {
        return 0;
    }
}
