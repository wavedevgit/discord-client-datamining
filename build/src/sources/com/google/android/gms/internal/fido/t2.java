package com.google.android.gms.internal.fido;

import java.math.RoundingMode;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t2 extends u2 {

    /* renamed from: b  reason: collision with root package name */
    final q2 f14756b;

    /* renamed from: c  reason: collision with root package name */
    final Character f14757c;

    /* renamed from: d  reason: collision with root package name */
    private volatile u2 f14758d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t2(q2 q2Var, Character ch2) {
        this.f14756b = q2Var;
        if (ch2 != null && q2Var.c('=')) {
            throw new IllegalArgumentException(m0.a("Padding character %s was already in alphabet", ch2));
        }
        this.f14757c = ch2;
    }

    @Override // com.google.android.gms.internal.fido.u2
    void a(Appendable appendable, byte[] bArr, int i10, int i11) {
        int i12 = 0;
        k0.e(0, i11, bArr.length);
        while (i12 < i11) {
            g(appendable, bArr, i12, Math.min(this.f14756b.f14733f, i11 - i12));
            i12 += this.f14756b.f14733f;
        }
    }

    @Override // com.google.android.gms.internal.fido.u2
    final int b(int i10) {
        q2 q2Var = this.f14756b;
        return q2Var.f14732e * w2.a(i10, q2Var.f14733f, RoundingMode.CEILING);
    }

    @Override // com.google.android.gms.internal.fido.u2
    public final u2 c() {
        u2 u2Var = this.f14758d;
        if (u2Var == null) {
            q2 q2Var = this.f14756b;
            q2 b10 = q2Var.b();
            if (b10 == q2Var) {
                u2Var = this;
            } else {
                u2Var = f(b10, this.f14757c);
            }
            this.f14758d = u2Var;
        }
        return u2Var;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof t2) {
            t2 t2Var = (t2) obj;
            if (this.f14756b.equals(t2Var.f14756b) && Objects.equals(this.f14757c, t2Var.f14757c)) {
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
        if (i11 <= this.f14756b.f14733f) {
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
        q2 q2Var = this.f14756b;
        while (i12 < i11 * 8) {
            long j11 = j10 >>> ((i14 - q2Var.f14731d) - i12);
            q2 q2Var2 = this.f14756b;
            appendable.append(q2Var2.a(((int) j11) & q2Var2.f14730c));
            i12 += this.f14756b.f14731d;
        }
        if (this.f14757c != null) {
            while (i12 < this.f14756b.f14733f * 8) {
                this.f14757c.getClass();
                appendable.append('=');
                i12 += this.f14756b.f14731d;
            }
        }
    }

    public final int hashCode() {
        Character ch2 = this.f14757c;
        return Objects.hashCode(ch2) ^ this.f14756b.hashCode();
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("BaseEncoding.");
        sb2.append(this.f14756b);
        if (8 % this.f14756b.f14731d != 0) {
            if (this.f14757c == null) {
                sb2.append(".omitPadding()");
            } else {
                sb2.append(".withPadChar('");
                sb2.append(this.f14757c);
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
