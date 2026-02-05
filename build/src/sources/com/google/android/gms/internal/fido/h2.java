package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h2 extends i2 implements Serializable {

    /* renamed from: i  reason: collision with root package name */
    final byte[] f14011i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h2(byte[] bArr) {
        bArr.getClass();
        this.f14011i = bArr;
    }

    @Override // com.google.android.gms.internal.fido.i2
    public final int a() {
        byte[] bArr = this.f14011i;
        int length = bArr.length;
        if (length >= 4) {
            return ((bArr[3] & 255) << 24) | (bArr[0] & 255) | ((bArr[1] & 255) << 8) | ((bArr[2] & 255) << 16);
        }
        throw new IllegalStateException(m0.a("HashCode#asInt() requires >= 4 bytes (it only has %s bytes).", Integer.valueOf(length)));
    }

    @Override // com.google.android.gms.internal.fido.i2
    public final int b() {
        return this.f14011i.length * 8;
    }

    @Override // com.google.android.gms.internal.fido.i2
    final boolean c(i2 i2Var) {
        boolean z10;
        if (this.f14011i.length != i2Var.e().length) {
            return false;
        }
        boolean z11 = true;
        int i10 = 0;
        while (true) {
            byte[] bArr = this.f14011i;
            if (i10 < bArr.length) {
                if (bArr[i10] == i2Var.e()[i10]) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                z11 &= z10;
                i10++;
            } else {
                return z11;
            }
        }
    }

    @Override // com.google.android.gms.internal.fido.i2
    public final byte[] d() {
        return (byte[]) this.f14011i.clone();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.i2
    public final byte[] e() {
        return this.f14011i;
    }
}
