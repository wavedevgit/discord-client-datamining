package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s2 extends t2 {
    private s2(q2 q2Var, Character ch2) {
        super(q2Var, ch2);
        char[] cArr;
        cArr = q2Var.f14091b;
        k0.c(cArr.length == 64);
    }

    @Override // com.google.android.gms.internal.fido.t2, com.google.android.gms.internal.fido.u2
    final void a(Appendable appendable, byte[] bArr, int i10, int i11) {
        int i12 = 0;
        k0.e(0, i11, bArr.length);
        for (int i13 = i11; i13 >= 3; i13 -= 3) {
            int i14 = ((bArr[i12 + 1] & 255) << 8) | ((bArr[i12] & 255) << 16) | (bArr[i12 + 2] & 255);
            appendable.append(this.f14118b.a(i14 >>> 18));
            appendable.append(this.f14118b.a((i14 >>> 12) & 63));
            appendable.append(this.f14118b.a((i14 >>> 6) & 63));
            appendable.append(this.f14118b.a(i14 & 63));
            i12 += 3;
        }
        if (i12 < i11) {
            g(appendable, bArr, i12, i11 - i12);
        }
    }

    @Override // com.google.android.gms.internal.fido.t2
    final u2 f(q2 q2Var, Character ch2) {
        return new s2(q2Var, ch2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s2(String str, String str2, Character ch2) {
        this(new q2(str, str2.toCharArray()), ch2);
    }
}
