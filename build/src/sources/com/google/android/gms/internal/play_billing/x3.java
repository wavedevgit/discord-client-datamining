package com.google.android.gms.internal.play_billing;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x3 {

    /* renamed from: f  reason: collision with root package name */
    private static final x3 f15075f = new x3(0, new int[0], new Object[0], false);

    /* renamed from: a  reason: collision with root package name */
    private int f15076a;

    /* renamed from: b  reason: collision with root package name */
    private int[] f15077b;

    /* renamed from: c  reason: collision with root package name */
    private Object[] f15078c;

    /* renamed from: d  reason: collision with root package name */
    private int f15079d = -1;

    /* renamed from: e  reason: collision with root package name */
    private boolean f15080e;

    private x3(int i10, int[] iArr, Object[] objArr, boolean z10) {
        this.f15076a = i10;
        this.f15077b = iArr;
        this.f15078c = objArr;
        this.f15080e = z10;
    }

    public static x3 c() {
        return f15075f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static x3 e(x3 x3Var, x3 x3Var2) {
        int i10 = x3Var.f15076a + x3Var2.f15076a;
        int[] copyOf = Arrays.copyOf(x3Var.f15077b, i10);
        System.arraycopy(x3Var2.f15077b, 0, copyOf, x3Var.f15076a, x3Var2.f15076a);
        Object[] copyOf2 = Arrays.copyOf(x3Var.f15078c, i10);
        System.arraycopy(x3Var2.f15078c, 0, copyOf2, x3Var.f15076a, x3Var2.f15076a);
        return new x3(i10, copyOf, copyOf2, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static x3 f() {
        return new x3(0, new int[8], new Object[8], true);
    }

    private final void m(int i10) {
        int[] iArr = this.f15077b;
        if (i10 > iArr.length) {
            int i11 = this.f15076a;
            int i12 = i11 + (i11 / 2);
            if (i12 >= i10) {
                i10 = i12;
            }
            if (i10 < 8) {
                i10 = 8;
            }
            this.f15077b = Arrays.copyOf(iArr, i10);
            this.f15078c = Arrays.copyOf(this.f15078c, i10);
        }
    }

    public final int a() {
        int w10;
        int x10;
        int i10;
        int i11 = this.f15079d;
        if (i11 == -1) {
            int i12 = 0;
            for (int i13 = 0; i13 < this.f15076a; i13++) {
                int i14 = this.f15077b[i13];
                int i15 = i14 >>> 3;
                int i16 = i14 & 7;
                if (i16 != 0) {
                    if (i16 != 1) {
                        if (i16 != 2) {
                            if (i16 != 3) {
                                if (i16 == 5) {
                                    ((Integer) this.f15078c[i13]).getClass();
                                    i10 = z0.w(i15 << 3) + 4;
                                } else {
                                    throw new IllegalStateException(a2.a());
                                }
                            } else {
                                int w11 = z0.w(i15 << 3);
                                w10 = w11 + w11;
                                x10 = ((x3) this.f15078c[i13]).a();
                            }
                        } else {
                            int w12 = z0.w(i15 << 3);
                            int d10 = ((r0) this.f15078c[i13]).d();
                            i10 = w12 + z0.w(d10) + d10;
                        }
                    } else {
                        ((Long) this.f15078c[i13]).getClass();
                        i10 = z0.w(i15 << 3) + 8;
                    }
                    i12 += i10;
                } else {
                    int i17 = i15 << 3;
                    long longValue = ((Long) this.f15078c[i13]).longValue();
                    w10 = z0.w(i17);
                    x10 = z0.x(longValue);
                }
                i10 = w10 + x10;
                i12 += i10;
            }
            this.f15079d = i12;
            return i12;
        }
        return i11;
    }

    public final int b() {
        int i10 = this.f15079d;
        if (i10 == -1) {
            int i11 = 0;
            for (int i12 = 0; i12 < this.f15076a; i12++) {
                int w10 = z0.w(8);
                int w11 = z0.w(16) + z0.w(this.f15077b[i12] >>> 3);
                int w12 = z0.w(24);
                int d10 = ((r0) this.f15078c[i12]).d();
                i11 += w10 + w10 + w11 + w12 + z0.w(d10) + d10;
            }
            this.f15079d = i11;
            return i11;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final x3 d(x3 x3Var) {
        if (x3Var.equals(f15075f)) {
            return this;
        }
        g();
        int i10 = this.f15076a + x3Var.f15076a;
        m(i10);
        System.arraycopy(x3Var.f15077b, 0, this.f15077b, this.f15076a, x3Var.f15076a);
        System.arraycopy(x3Var.f15078c, 0, this.f15078c, this.f15076a, x3Var.f15076a);
        this.f15076a = i10;
        return this;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof x3)) {
            return false;
        }
        x3 x3Var = (x3) obj;
        int i10 = this.f15076a;
        if (i10 == x3Var.f15076a) {
            int[] iArr = this.f15077b;
            int[] iArr2 = x3Var.f15077b;
            int i11 = 0;
            while (true) {
                if (i11 < i10) {
                    if (iArr[i11] != iArr2[i11]) {
                        break;
                    }
                    i11++;
                } else {
                    Object[] objArr = this.f15078c;
                    Object[] objArr2 = x3Var.f15078c;
                    int i12 = this.f15076a;
                    for (int i13 = 0; i13 < i12; i13++) {
                        if (objArr[i13].equals(objArr2[i13])) {
                        }
                    }
                    return true;
                }
            }
        }
        return false;
    }

    final void g() {
        if (this.f15080e) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    public final void h() {
        if (this.f15080e) {
            this.f15080e = false;
        }
    }

    public final int hashCode() {
        int i10 = this.f15076a;
        int i11 = i10 + 527;
        int[] iArr = this.f15077b;
        int i12 = 17;
        int i13 = 17;
        for (int i14 = 0; i14 < i10; i14++) {
            i13 = (i13 * 31) + iArr[i14];
        }
        int i15 = ((i11 * 31) + i13) * 31;
        Object[] objArr = this.f15078c;
        int i16 = this.f15076a;
        for (int i17 = 0; i17 < i16; i17++) {
            i12 = (i12 * 31) + objArr[i17].hashCode();
        }
        return i15 + i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void i(StringBuilder sb2, int i10) {
        for (int i11 = 0; i11 < this.f15076a; i11++) {
            x2.b(sb2, i10, String.valueOf(this.f15077b[i11] >>> 3), this.f15078c[i11]);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void j(int i10, Object obj) {
        g();
        m(this.f15076a + 1);
        int[] iArr = this.f15077b;
        int i11 = this.f15076a;
        iArr[i11] = i10;
        this.f15078c[i11] = obj;
        this.f15076a = i11 + 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void k(o4 o4Var) {
        for (int i10 = 0; i10 < this.f15076a; i10++) {
            o4Var.E(this.f15077b[i10] >>> 3, this.f15078c[i10]);
        }
    }

    public final void l(o4 o4Var) {
        if (this.f15076a != 0) {
            for (int i10 = 0; i10 < this.f15076a; i10++) {
                int i11 = this.f15077b[i10];
                Object obj = this.f15078c[i10];
                int i12 = i11 & 7;
                int i13 = i11 >>> 3;
                if (i12 != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 3) {
                                if (i12 == 5) {
                                    o4Var.v(i13, ((Integer) obj).intValue());
                                } else {
                                    throw new RuntimeException(a2.a());
                                }
                            } else {
                                o4Var.s(i13);
                                ((x3) obj).l(o4Var);
                                o4Var.r(i13);
                            }
                        } else {
                            o4Var.e(i13, (r0) obj);
                        }
                    } else {
                        o4Var.I(i13, ((Long) obj).longValue());
                    }
                } else {
                    o4Var.f(i13, ((Long) obj).longValue());
                }
            }
        }
    }
}
