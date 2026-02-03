package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.r1;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l1 {

    /* renamed from: f  reason: collision with root package name */
    private static final l1 f3720f = new l1(0, new int[0], new Object[0], false);

    /* renamed from: a  reason: collision with root package name */
    private int f3721a;

    /* renamed from: b  reason: collision with root package name */
    private int[] f3722b;

    /* renamed from: c  reason: collision with root package name */
    private Object[] f3723c;

    /* renamed from: d  reason: collision with root package name */
    private int f3724d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f3725e;

    private l1() {
        this(0, new int[8], new Object[8], true);
    }

    private void b() {
        int i10;
        int i11 = this.f3721a;
        int[] iArr = this.f3722b;
        if (i11 == iArr.length) {
            if (i11 < 4) {
                i10 = 8;
            } else {
                i10 = i11 >> 1;
            }
            int i12 = i11 + i10;
            this.f3722b = Arrays.copyOf(iArr, i12);
            this.f3723c = Arrays.copyOf(this.f3723c, i12);
        }
    }

    private static boolean c(int[] iArr, int[] iArr2, int i10) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (iArr[i11] != iArr2[i11]) {
                return false;
            }
        }
        return true;
    }

    private static boolean d(Object[] objArr, Object[] objArr2, int i10) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (!objArr[i11].equals(objArr2[i11])) {
                return false;
            }
        }
        return true;
    }

    public static l1 e() {
        return f3720f;
    }

    private static int h(int[] iArr, int i10) {
        int i11 = 17;
        for (int i12 = 0; i12 < i10; i12++) {
            i11 = (i11 * 31) + iArr[i12];
        }
        return i11;
    }

    private static int i(Object[] objArr, int i10) {
        int i11 = 17;
        for (int i12 = 0; i12 < i10; i12++) {
            i11 = (i11 * 31) + objArr[i12].hashCode();
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static l1 k(l1 l1Var, l1 l1Var2) {
        int i10 = l1Var.f3721a + l1Var2.f3721a;
        int[] copyOf = Arrays.copyOf(l1Var.f3722b, i10);
        System.arraycopy(l1Var2.f3722b, 0, copyOf, l1Var.f3721a, l1Var2.f3721a);
        Object[] copyOf2 = Arrays.copyOf(l1Var.f3723c, i10);
        System.arraycopy(l1Var2.f3723c, 0, copyOf2, l1Var.f3721a, l1Var2.f3721a);
        return new l1(i10, copyOf, copyOf2, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static l1 l() {
        return new l1();
    }

    private static void p(int i10, Object obj, r1 r1Var) {
        int a10 = q1.a(i10);
        int b10 = q1.b(i10);
        if (b10 != 0) {
            if (b10 != 1) {
                if (b10 != 2) {
                    if (b10 != 3) {
                        if (b10 == 5) {
                            r1Var.c(a10, ((Integer) obj).intValue());
                            return;
                        }
                        throw new RuntimeException(z.d());
                    } else if (r1Var.y() == r1.a.ASCENDING) {
                        r1Var.D(a10);
                        ((l1) obj).q(r1Var);
                        r1Var.I(a10);
                        return;
                    } else {
                        r1Var.I(a10);
                        ((l1) obj).q(r1Var);
                        r1Var.D(a10);
                        return;
                    }
                }
                r1Var.j(a10, (g) obj);
                return;
            }
            r1Var.x(a10, ((Long) obj).longValue());
            return;
        }
        r1Var.A(a10, ((Long) obj).longValue());
    }

    void a() {
        if (this.f3725e) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof l1)) {
            return false;
        }
        l1 l1Var = (l1) obj;
        int i10 = this.f3721a;
        if (i10 == l1Var.f3721a && c(this.f3722b, l1Var.f3722b, i10) && d(this.f3723c, l1Var.f3723c, this.f3721a)) {
            return true;
        }
        return false;
    }

    public int f() {
        int S;
        int i10 = this.f3724d;
        if (i10 != -1) {
            return i10;
        }
        int i11 = 0;
        for (int i12 = 0; i12 < this.f3721a; i12++) {
            int i13 = this.f3722b[i12];
            int a10 = q1.a(i13);
            int b10 = q1.b(i13);
            if (b10 != 0) {
                if (b10 != 1) {
                    if (b10 != 2) {
                        if (b10 != 3) {
                            if (b10 == 5) {
                                S = j.l(a10, ((Integer) this.f3723c[i12]).intValue());
                            } else {
                                throw new IllegalStateException(z.d());
                            }
                        } else {
                            S = (j.P(a10) * 2) + ((l1) this.f3723c[i12]).f();
                        }
                    } else {
                        S = j.f(a10, (g) this.f3723c[i12]);
                    }
                } else {
                    S = j.n(a10, ((Long) this.f3723c[i12]).longValue());
                }
            } else {
                S = j.S(a10, ((Long) this.f3723c[i12]).longValue());
            }
            i11 += S;
        }
        this.f3724d = i11;
        return i11;
    }

    public int g() {
        int i10 = this.f3724d;
        if (i10 != -1) {
            return i10;
        }
        int i11 = 0;
        for (int i12 = 0; i12 < this.f3721a; i12++) {
            i11 += j.D(q1.a(this.f3722b[i12]), (g) this.f3723c[i12]);
        }
        this.f3724d = i11;
        return i11;
    }

    public int hashCode() {
        int i10 = this.f3721a;
        return ((((527 + i10) * 31) + h(this.f3722b, i10)) * 31) + i(this.f3723c, this.f3721a);
    }

    public void j() {
        this.f3725e = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(StringBuilder sb2, int i10) {
        for (int i11 = 0; i11 < this.f3721a; i11++) {
            q0.c(sb2, i10, String.valueOf(q1.a(this.f3722b[i11])), this.f3723c[i11]);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(int i10, Object obj) {
        a();
        b();
        int[] iArr = this.f3722b;
        int i11 = this.f3721a;
        iArr[i11] = i10;
        this.f3723c[i11] = obj;
        this.f3721a = i11 + 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(r1 r1Var) {
        if (r1Var.y() == r1.a.DESCENDING) {
            for (int i10 = this.f3721a - 1; i10 >= 0; i10--) {
                r1Var.b(q1.a(this.f3722b[i10]), this.f3723c[i10]);
            }
            return;
        }
        for (int i11 = 0; i11 < this.f3721a; i11++) {
            r1Var.b(q1.a(this.f3722b[i11]), this.f3723c[i11]);
        }
    }

    public void q(r1 r1Var) {
        if (this.f3721a != 0) {
            if (r1Var.y() == r1.a.ASCENDING) {
                for (int i10 = 0; i10 < this.f3721a; i10++) {
                    p(this.f3722b[i10], this.f3723c[i10], r1Var);
                }
                return;
            }
            for (int i11 = this.f3721a - 1; i11 >= 0; i11--) {
                p(this.f3722b[i11], this.f3723c[i11], r1Var);
            }
        }
    }

    private l1(int i10, int[] iArr, Object[] objArr, boolean z10) {
        this.f3724d = -1;
        this.f3721a = i10;
        this.f3722b = iArr;
        this.f3723c = objArr;
        this.f3725e = z10;
    }
}
