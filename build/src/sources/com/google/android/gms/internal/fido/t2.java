package com.google.android.gms.internal.fido;

import java.math.RoundingMode;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t2 extends u2 {

    /* renamed from: b  reason: collision with root package name */
    final q2 f15127b;

    /* renamed from: c  reason: collision with root package name */
    final Character f15128c;

    /* renamed from: d  reason: collision with root package name */
    private volatile u2 f15129d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t2(q2 q2Var, Character ch2) {
        this.f15127b = q2Var;
        if (ch2 != null && q2Var.c('=')) {
            throw new IllegalArgumentException(m0.a("Padding character %s was already in alphabet", ch2));
        }
        this.f15128c = ch2;
    }

    @Override // com.google.android.gms.internal.fido.u2
    void a(Appendable appendable, byte[] bArr, int i10, int i11) {
        int i12 = 0;
        k0.e(0, i11, bArr.length);
        while (i12 < i11) {
            g(appendable, bArr, i12, Math.min(this.f15127b.f15104f, i11 - i12));
            i12 += this.f15127b.f15104f;
        }
    }

    @Override // com.google.android.gms.internal.fido.u2
    final int b(int i10) {
        q2 q2Var = this.f15127b;
        return q2Var.f15103e * w2.a(i10, q2Var.f15104f, RoundingMode.CEILING);
    }

    @Override // com.google.android.gms.internal.fido.u2
    public final u2 c() {
        u2 u2Var = this.f15129d;
        if (u2Var == null) {
            q2 q2Var = this.f15127b;
            q2 b10 = q2Var.b();
            if (b10 == q2Var) {
                u2Var = this;
            } else {
                u2Var = f(b10, this.f15128c);
            }
            this.f15129d = u2Var;
        }
        return u2Var;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof t2) {
            t2 t2Var = (t2) obj;
            if (this.f15127b.equals(t2Var.f15127b) && Objects.equals(this.f15128c, t2Var.f15128c)) {
                return true;
            }
        }
        return false;
    }

    u2 f(q2 q2Var, Character ch2) {
        return new t2(q2Var, ch2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(Appendable appendable, byte[] bArr, int i10, int i11) {
        boolean z10;
        k0.e(i10, i10 + i11, bArr.length);
        int i12 = 0;
        if (i11 <= this.f15127b.f15104f) {
            z10 = true;
        } else {
            z10 = false;
        }
        k0.c(z10);
        long j10 = 0;
        for (int i13 = 0; i13 < i11; i13++) {
            j10 = (j10 | (bArr[i10 + i13] & 255)) << 8;
        }
        int i14 = (i11 + 1) * 8;
        q2 q2Var = this.f15127b;
        while (i12 < i11 * 8) {
            long j11 = j10 >>> ((i14 - q2Var.f15102d) - i12);
            q2 q2Var2 = this.f15127b;
            appendable.append(q2Var2.a(((int) j11) & q2Var2.f15101c));
            i12 += this.f15127b.f15102d;
        }
        if (this.f15128c != null) {
            while (i12 < this.f15127b.f15104f * 8) {
                this.f15128c.getClass();
                appendable.append('=');
                i12 += this.f15127b.f15102d;
            }
        }
    }

    public final int hashCode() {
        Character ch2 = this.f15128c;
        return Objects.hashCode(ch2) ^ this.f15127b.hashCode();
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("BaseEncoding.");
        sb2.append(this.f15127b);
        if (8 % this.f15127b.f15102d != 0) {
            if (this.f15128c == null) {
                sb2.append(".omitPadding()");
            } else {
                sb2.append(".withPadChar('");
                sb2.append(this.f15128c);
                sb2.append("')");
            }
        }
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public t2(String str, String str2, Character ch2) {
        this(new q2(str, str2.toCharArray()), ch2);
    }
}
