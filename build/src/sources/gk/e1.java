package gk;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e1 {

    /* renamed from: f  reason: collision with root package name */
    private static final e1 f25200f = new e1(0, new int[0], new Object[0], false);

    /* renamed from: a  reason: collision with root package name */
    private int f25201a;

    /* renamed from: b  reason: collision with root package name */
    private int[] f25202b;

    /* renamed from: c  reason: collision with root package name */
    private Object[] f25203c;

    /* renamed from: d  reason: collision with root package name */
    private int f25204d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f25205e;

    private e1() {
        this(0, new int[8], new Object[8], true);
    }

    private void b(int i10) {
        int[] iArr = this.f25202b;
        if (i10 > iArr.length) {
            int i11 = this.f25201a;
            int i12 = i11 + (i11 / 2);
            if (i12 >= i10) {
                i10 = i12;
            }
            if (i10 < 8) {
                i10 = 8;
            }
            this.f25202b = Arrays.copyOf(iArr, i10);
            this.f25203c = Arrays.copyOf(this.f25203c, i10);
        }
    }

    public static e1 c() {
        return f25200f;
    }

    private static int d(int[] iArr, int i10) {
        int i11 = 17;
        for (int i12 = 0; i12 < i10; i12++) {
            i11 = (i11 * 31) + iArr[i12];
        }
        return i11;
    }

    private static int e(Object[] objArr, int i10) {
        int i11 = 17;
        for (int i12 = 0; i12 < i10; i12++) {
            i11 = (i11 * 31) + objArr[i12].hashCode();
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static e1 h(e1 e1Var, e1 e1Var2) {
        int i10 = e1Var.f25201a + e1Var2.f25201a;
        int[] copyOf = Arrays.copyOf(e1Var.f25202b, i10);
        System.arraycopy(e1Var2.f25202b, 0, copyOf, e1Var.f25201a, e1Var2.f25201a);
        Object[] copyOf2 = Arrays.copyOf(e1Var.f25203c, i10);
        System.arraycopy(e1Var2.f25203c, 0, copyOf2, e1Var.f25201a, e1Var2.f25201a);
        return new e1(i10, copyOf, copyOf2, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static e1 i() {
        return new e1();
    }

    private static boolean j(Object[] objArr, Object[] objArr2, int i10) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (!objArr[i11].equals(objArr2[i11])) {
                return false;
            }
        }
        return true;
    }

    private static boolean m(int[] iArr, int[] iArr2, int i10) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (iArr[i11] != iArr2[i11]) {
                return false;
            }
        }
        return true;
    }

    void a() {
        if (this.f25205e) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof e1)) {
            return false;
        }
        e1 e1Var = (e1) obj;
        int i10 = this.f25201a;
        if (i10 == e1Var.f25201a && m(this.f25202b, e1Var.f25202b, i10) && j(this.f25203c, e1Var.f25203c, this.f25201a)) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f25205e = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1 g(e1 e1Var) {
        if (e1Var.equals(c())) {
            return this;
        }
        a();
        int i10 = this.f25201a + e1Var.f25201a;
        b(i10);
        System.arraycopy(e1Var.f25202b, 0, this.f25202b, this.f25201a, e1Var.f25201a);
        System.arraycopy(e1Var.f25203c, 0, this.f25203c, this.f25201a, e1Var.f25201a);
        this.f25201a = i10;
        return this;
    }

    public int hashCode() {
        int i10 = this.f25201a;
        return ((((527 + i10) * 31) + d(this.f25202b, i10)) * 31) + e(this.f25203c, this.f25201a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void k(StringBuilder sb2, int i10) {
        for (int i11 = 0; i11 < this.f25201a; i11++) {
            k0.d(sb2, i10, String.valueOf(j1.a(this.f25202b[i11])), this.f25203c[i11]);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(int i10, Object obj) {
        a();
        b(this.f25201a + 1);
        int[] iArr = this.f25202b;
        int i11 = this.f25201a;
        iArr[i11] = i10;
        this.f25203c[i11] = obj;
        this.f25201a = i11 + 1;
    }

    private e1(int i10, int[] iArr, Object[] objArr, boolean z10) {
        this.f25204d = -1;
        this.f25201a = i10;
        this.f25202b = iArr;
        this.f25203c = objArr;
        this.f25205e = z10;
    }
}
