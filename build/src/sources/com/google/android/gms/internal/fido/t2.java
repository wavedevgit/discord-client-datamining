package com.google.android.gms.internal.fido;

import java.math.RoundingMode;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t2 extends u2 {

    /* renamed from: b  reason: collision with root package name */
    final q2 f14081b;

    /* renamed from: c  reason: collision with root package name */
    final Character f14082c;

    /* renamed from: d  reason: collision with root package name */
    private volatile u2 f14083d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t2(q2 q2Var, Character ch2) {
        this.f14081b = q2Var;
        if (ch2 != null && q2Var.c('=')) {
            throw new IllegalArgumentException(m0.a("Padding character %s was already in alphabet", ch2));
        }
        this.f14082c = ch2;
    }

    @Override // com.google.android.gms.internal.fido.u2
    void a(Appendable appendable, byte[] bArr, int i10, int i11) {
        int i12 = 0;
        k0.e(0, i11, bArr.length);
        while (i12 < i11) {
            g(appendable, bArr, i12, Math.min(this.f14081b.f14058f, i11 - i12));
            i12 += this.f14081b.f14058f;
        }
    }

    @Override // com.google.android.gms.internal.fido.u2
    final int b(int i10) {
        q2 q2Var = this.f14081b;
        return q2Var.f14057e * w2.a(i10, q2Var.f14058f, RoundingMode.CEILING);
    }

    @Override // com.google.android.gms.internal.fido.u2
    public final u2 c() {
        u2 u2Var = this.f14083d;
        if (u2Var == null) {
            q2 q2Var = this.f14081b;
            q2 b10 = q2Var.b();
            if (b10 == q2Var) {
                u2Var = this;
            } else {
                u2Var = f(b10, this.f14082c);
            }
            this.f14083d = u2Var;
        }
        return u2Var;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof t2) {
            t2 t2Var = (t2) obj;
            if (this.f14081b.equals(t2Var.f14081b) && Objects.equals(this.f14082c, t2Var.f14082c)) {
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
        if (i11 <= this.f14081b.f14058f) {
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
        q2 q2Var = this.f14081b;
        while (i12 < i11 * 8) {
            long j11 = j10 >>> ((i14 - q2Var.f14056d) - i12);
            q2 q2Var2 = this.f14081b;
            appendable.append(q2Var2.a(((int) j11) & q2Var2.f14055c));
            i12 += this.f14081b.f14056d;
        }
        if (this.f14082c != null) {
            while (i12 < this.f14081b.f14058f * 8) {
                this.f14082c.getClass();
                appendable.append('=');
                i12 += this.f14081b.f14056d;
            }
        }
    }

    public final int hashCode() {
        Character ch2 = this.f14082c;
        return Objects.hashCode(ch2) ^ this.f14081b.hashCode();
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("BaseEncoding.");
        sb2.append(this.f14081b);
        if (8 % this.f14081b.f14056d != 0) {
            if (this.f14082c == null) {
                sb2.append(".omitPadding()");
            } else {
                sb2.append(".withPadChar('");
                sb2.append(this.f14082c);
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
