package com.google.android.gms.internal.play_billing;

import kotlin.jvm.internal.ByteCompanionObject;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static int a(byte[] bArr, int i10, d0 d0Var) {
        int h10 = h(bArr, i10, d0Var);
        int i11 = d0Var.f14199a;
        if (i11 >= 0) {
            if (i11 <= bArr.length - h10) {
                if (i11 == 0) {
                    d0Var.f14201c = r0.f14359e;
                    return h10;
                }
                d0Var.f14201c = r0.n(bArr, h10, i11);
                return h10 + i11;
            }
            throw a2.g();
        }
        throw a2.d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int b(byte[] bArr, int i10) {
        int i11 = (bArr[i10 + 1] & 255) << 8;
        return ((bArr[i10 + 3] & 255) << 24) | i11 | (bArr[i10] & 255) | ((bArr[i10 + 2] & 255) << 16);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int c(g3 g3Var, byte[] bArr, int i10, int i11, int i12, d0 d0Var) {
        Object k10 = g3Var.k();
        int l10 = l(k10, g3Var, bArr, i10, i11, i12, d0Var);
        g3Var.b(k10);
        d0Var.f14201c = k10;
        return l10;
    }

    static int d(g3 g3Var, byte[] bArr, int i10, int i11, d0 d0Var) {
        Object k10 = g3Var.k();
        int m10 = m(k10, g3Var, bArr, i10, i11, d0Var);
        g3Var.b(k10);
        d0Var.f14201c = k10;
        return m10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int e(g3 g3Var, int i10, byte[] bArr, int i11, int i12, x1 x1Var, d0 d0Var) {
        int d10 = d(g3Var, bArr, i11, i12, d0Var);
        x1Var.add(d0Var.f14201c);
        while (d10 < i12) {
            int h10 = h(bArr, d10, d0Var);
            if (i10 != d0Var.f14199a) {
                break;
            }
            d10 = d(g3Var, bArr, h10, i12, d0Var);
            x1Var.add(d0Var.f14201c);
        }
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int f(byte[] bArr, int i10, x1 x1Var, d0 d0Var) {
        r1 r1Var = (r1) x1Var;
        int h10 = h(bArr, i10, d0Var);
        int i11 = d0Var.f14199a + h10;
        while (h10 < i11) {
            h10 = h(bArr, h10, d0Var);
            r1Var.e(d0Var.f14199a);
        }
        if (h10 == i11) {
            return h10;
        }
        throw a2.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int g(int i10, byte[] bArr, int i11, int i12, x3 x3Var, d0 d0Var) {
        if ((i10 >>> 3) != 0) {
            int i13 = i10 & 7;
            if (i13 != 0) {
                if (i13 != 1) {
                    if (i13 != 2) {
                        if (i13 != 3) {
                            if (i13 == 5) {
                                x3Var.j(i10, Integer.valueOf(b(bArr, i11)));
                                return i11 + 4;
                            }
                            throw a2.b();
                        }
                        int i14 = (i10 & (-8)) | 4;
                        x3 f10 = x3.f();
                        int i15 = 0;
                        while (true) {
                            if (i11 >= i12) {
                                break;
                            }
                            int h10 = h(bArr, i11, d0Var);
                            i15 = d0Var.f14199a;
                            if (i15 != i14) {
                                i11 = g(i15, bArr, h10, i12, f10, d0Var);
                            } else {
                                i11 = h10;
                                break;
                            }
                        }
                        if (i11 <= i12 && i15 == i14) {
                            x3Var.j(i10, f10);
                            return i11;
                        }
                        throw a2.e();
                    }
                    int h11 = h(bArr, i11, d0Var);
                    int i16 = d0Var.f14199a;
                    if (i16 >= 0) {
                        if (i16 <= bArr.length - h11) {
                            if (i16 == 0) {
                                x3Var.j(i10, r0.f14359e);
                            } else {
                                x3Var.j(i10, r0.n(bArr, h11, i16));
                            }
                            return h11 + i16;
                        }
                        throw a2.g();
                    }
                    throw a2.d();
                }
                x3Var.j(i10, Long.valueOf(n(bArr, i11)));
                return i11 + 8;
            }
            int k10 = k(bArr, i11, d0Var);
            x3Var.j(i10, Long.valueOf(d0Var.f14200b));
            return k10;
        }
        throw a2.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int h(byte[] bArr, int i10, d0 d0Var) {
        int i11 = i10 + 1;
        byte b10 = bArr[i10];
        if (b10 >= 0) {
            d0Var.f14199a = b10;
            return i11;
        }
        return i(b10, bArr, i11, d0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int i(int i10, byte[] bArr, int i11, d0 d0Var) {
        byte b10 = bArr[i11];
        int i12 = i11 + 1;
        int i13 = i10 & 127;
        if (b10 >= 0) {
            d0Var.f14199a = i13 | (b10 << 7);
            return i12;
        }
        int i14 = i13 | ((b10 & ByteCompanionObject.MAX_VALUE) << 7);
        int i15 = i11 + 2;
        byte b11 = bArr[i12];
        if (b11 >= 0) {
            d0Var.f14199a = i14 | (b11 << 14);
            return i15;
        }
        int i16 = i14 | ((b11 & ByteCompanionObject.MAX_VALUE) << 14);
        int i17 = i11 + 3;
        byte b12 = bArr[i15];
        if (b12 >= 0) {
            d0Var.f14199a = i16 | (b12 << 21);
            return i17;
        }
        int i18 = i16 | ((b12 & ByteCompanionObject.MAX_VALUE) << 21);
        int i19 = i11 + 4;
        byte b13 = bArr[i17];
        if (b13 >= 0) {
            d0Var.f14199a = i18 | (b13 << 28);
            return i19;
        }
        int i20 = i18 | ((b13 & ByteCompanionObject.MAX_VALUE) << 28);
        while (true) {
            int i21 = i19 + 1;
            if (bArr[i19] < 0) {
                i19 = i21;
            } else {
                d0Var.f14199a = i20;
                return i21;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int j(int i10, byte[] bArr, int i11, int i12, x1 x1Var, d0 d0Var) {
        r1 r1Var = (r1) x1Var;
        int h10 = h(bArr, i11, d0Var);
        r1Var.e(d0Var.f14199a);
        while (h10 < i12) {
            int h11 = h(bArr, h10, d0Var);
            if (i10 != d0Var.f14199a) {
                break;
            }
            h10 = h(bArr, h11, d0Var);
            r1Var.e(d0Var.f14199a);
        }
        return h10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int k(byte[] bArr, int i10, d0 d0Var) {
        byte b10;
        long j10 = bArr[i10];
        int i11 = i10 + 1;
        if (j10 >= 0) {
            d0Var.f14200b = j10;
            return i11;
        }
        int i12 = i10 + 2;
        byte b11 = bArr[i11];
        long j11 = (j10 & 127) | ((b11 & ByteCompanionObject.MAX_VALUE) << 7);
        int i13 = 7;
        while (b11 < 0) {
            int i14 = i12 + 1;
            i13 += 7;
            j11 |= (b10 & ByteCompanionObject.MAX_VALUE) << i13;
            b11 = bArr[i12];
            i12 = i14;
        }
        d0Var.f14200b = j11;
        return i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int l(Object obj, g3 g3Var, byte[] bArr, int i10, int i11, int i12, d0 d0Var) {
        int y10 = ((y2) g3Var).y(obj, bArr, i10, i11, i12, d0Var);
        d0Var.f14201c = obj;
        return y10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int m(Object obj, g3 g3Var, byte[] bArr, int i10, int i11, d0 d0Var) {
        int i12 = i10 + 1;
        int i13 = bArr[i10];
        if (i13 < 0) {
            i12 = i(i13, bArr, i12, d0Var);
            i13 = d0Var.f14199a;
        }
        int i14 = i12;
        if (i13 >= 0 && i13 <= i11 - i14) {
            int i15 = i14 + i13;
            g3Var.c(obj, bArr, i14, i15, d0Var);
            d0Var.f14201c = obj;
            return i15;
        }
        throw a2.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static long n(byte[] bArr, int i10) {
        return (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16) | ((bArr[i10 + 3] & 255) << 24) | ((bArr[i10 + 4] & 255) << 32) | ((bArr[i10 + 5] & 255) << 40) | ((bArr[i10 + 6] & 255) << 48) | ((bArr[i10 + 7] & 255) << 56);
    }
}
