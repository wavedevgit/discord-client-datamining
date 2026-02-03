package com.google.android.gms.internal.fido;

import java.math.RoundingMode;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final String f13696a;

    /* renamed from: b  reason: collision with root package name */
    private final char[] f13697b;

    /* renamed from: c  reason: collision with root package name */
    final int f13698c;

    /* renamed from: d  reason: collision with root package name */
    final int f13699d;

    /* renamed from: e  reason: collision with root package name */
    final int f13700e;

    /* renamed from: f  reason: collision with root package name */
    final int f13701f;

    /* renamed from: g  reason: collision with root package name */
    private final byte[] f13702g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f13703h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public q2(java.lang.String r10, char[] r11) {
        /*
            r9 = this;
            r0 = 128(0x80, float:1.794E-43)
            byte[] r1 = new byte[r0]
            r2 = -1
            java.util.Arrays.fill(r1, r2)
            r3 = 0
            r4 = r3
        La:
            int r5 = r11.length
            if (r4 >= r5) goto L2b
            char r5 = r11[r4]
            r6 = 1
            if (r5 >= r0) goto L14
            r7 = r6
            goto L15
        L14:
            r7 = r3
        L15:
            java.lang.String r8 = "Non-ASCII character: %s"
            com.google.android.gms.internal.fido.k0.d(r7, r8, r5)
            r7 = r1[r5]
            if (r7 != r2) goto L1f
            goto L20
        L1f:
            r6 = r3
        L20:
            java.lang.String r7 = "Duplicate character: %s"
            com.google.android.gms.internal.fido.k0.d(r6, r7, r5)
            byte r6 = (byte) r4
            r1[r5] = r6
            int r4 = r4 + 1
            goto La
        L2b:
            r9.<init>(r10, r11, r1, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.fido.q2.<init>(java.lang.String, char[]):void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final char a(int i10) {
        return this.f13697b[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v10 */
    public final q2 b() {
        int i10;
        boolean z10;
        int i11 = 0;
        int i12 = 0;
        while (true) {
            char[] cArr = this.f13697b;
            if (i12 < cArr.length) {
                if (y.a(cArr[i12])) {
                    int i13 = 0;
                    while (true) {
                        if (i13 < cArr.length) {
                            char c10 = cArr[i13];
                            if (c10 >= 'A' && c10 <= 'Z') {
                                z10 = true;
                                break;
                            }
                            i13++;
                        } else {
                            z10 = false;
                            break;
                        }
                    }
                    k0.g(!z10, "Cannot call upperCase() on a mixed-case alphabet");
                    char[] cArr2 = new char[this.f13697b.length];
                    while (true) {
                        char[] cArr3 = this.f13697b;
                        if (i11 >= cArr3.length) {
                            break;
                        }
                        char c11 = cArr3[i11];
                        if (y.a(c11)) {
                            c11 ^= 32;
                        }
                        cArr2[i11] = (char) c11;
                        i11++;
                    }
                    q2 q2Var = new q2(this.f13696a.concat(".upperCase()"), cArr2);
                    if (this.f13703h && !q2Var.f13703h) {
                        byte[] bArr = q2Var.f13702g;
                        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
                        for (i10 = 65; i10 <= 90; i10++) {
                            int i14 = i10 | 32;
                            byte[] bArr2 = q2Var.f13702g;
                            byte b10 = bArr2[i10];
                            byte b11 = bArr2[i14];
                            if (b10 == -1) {
                                copyOf[i10] = b11;
                            } else {
                                char c12 = (char) i10;
                                char c13 = (char) i14;
                                if (b11 == -1) {
                                    copyOf[i14] = b10;
                                } else {
                                    throw new IllegalStateException(m0.a("Can't ignoreCase() since '%s' and '%s' encode different values", Character.valueOf(c12), Character.valueOf(c13)));
                                }
                            }
                        }
                        return new q2(q2Var.f13696a.concat(".ignoreCase()"), q2Var.f13697b, copyOf, true);
                    }
                    return q2Var;
                }
                i12++;
            } else {
                return this;
            }
        }
    }

    public final boolean c(char c10) {
        byte[] bArr = this.f13702g;
        if (bArr.length > 61 && bArr[61] != -1) {
            return true;
        }
        return false;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof q2) {
            q2 q2Var = (q2) obj;
            if (this.f13703h == q2Var.f13703h && Arrays.equals(this.f13697b, q2Var.f13697b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        boolean z10 = this.f13703h;
        int hashCode = Arrays.hashCode(this.f13697b);
        if (true != z10) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return hashCode + i10;
    }

    public final String toString() {
        return this.f13696a;
    }

    private q2(String str, char[] cArr, byte[] bArr, boolean z10) {
        this.f13696a = str;
        cArr.getClass();
        this.f13697b = cArr;
        try {
            int length = cArr.length;
            int b10 = w2.b(length, RoundingMode.UNNECESSARY);
            this.f13699d = b10;
            int numberOfTrailingZeros = Integer.numberOfTrailingZeros(b10);
            int i10 = 1 << (3 - numberOfTrailingZeros);
            this.f13700e = i10;
            this.f13701f = b10 >> numberOfTrailingZeros;
            this.f13698c = length - 1;
            this.f13702g = bArr;
            boolean[] zArr = new boolean[i10];
            for (int i11 = 0; i11 < this.f13701f; i11++) {
                zArr[w2.a(i11 * 8, this.f13699d, RoundingMode.CEILING)] = true;
            }
            this.f13703h = z10;
        } catch (ArithmeticException e10) {
            int length2 = cArr.length;
            throw new IllegalArgumentException("Illegal alphabet length " + length2, e10);
        }
    }
}
