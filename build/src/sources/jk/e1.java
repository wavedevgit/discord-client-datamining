package jk;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e1 {

    /* renamed from: f  reason: collision with root package name */
    private static final e1 f31566f = new e1(0, new int[0], new Object[0], false);

    /* renamed from: a  reason: collision with root package name */
    private int f31567a;

    /* renamed from: b  reason: collision with root package name */
    private int[] f31568b;

    /* renamed from: c  reason: collision with root package name */
    private Object[] f31569c;

    /* renamed from: d  reason: collision with root package name */
    private int f31570d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f31571e;

    private e1() {
        this(0, new int[8], new Object[8], true);
    }

    private void b(int i10) {
        int[] iArr = this.f31568b;
        if (i10 > iArr.length) {
            int i11 = this.f31567a;
            int i12 = i11 + (i11 / 2);
            if (i12 >= i10) {
                i10 = i12;
            }
            if (i10 < 8) {
                i10 = 8;
            }
            this.f31568b = Arrays.copyOf(iArr, i10);
            this.f31569c = Arrays.copyOf(this.f31569c, i10);
        }
    }

    public static e1 c() {
        return f31566f;
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
        int i10 = e1Var.f31567a + e1Var2.f31567a;
        int[] copyOf = Arrays.copyOf(e1Var.f31568b, i10);
        System.arraycopy(e1Var2.f31568b, 0, copyOf, e1Var.f31567a, e1Var2.f31567a);
        Object[] copyOf2 = Arrays.copyOf(e1Var.f31569c, i10);
        System.arraycopy(e1Var2.f31569c, 0, copyOf2, e1Var.f31567a, e1Var2.f31567a);
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
        if (this.f31571e) {
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
        int i10 = this.f31567a;
        if (i10 == e1Var.f31567a && m(this.f31568b, e1Var.f31568b, i10) && j(this.f31569c, e1Var.f31569c, this.f31567a)) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f31571e = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1 g(e1 e1Var) {
        if (e1Var.equals(c())) {
            return this;
        }
        a();
        int i10 = this.f31567a + e1Var.f31567a;
        b(i10);
        System.arraycopy(e1Var.f31568b, 0, this.f31568b, this.f31567a, e1Var.f31567a);
        System.arraycopy(e1Var.f31569c, 0, this.f31569c, this.f31567a, e1Var.f31567a);
        this.f31567a = i10;
        return this;
    }

    public int hashCode() {
        int i10 = this.f31567a;
        return ((((527 + i10) * 31) + d(this.f31568b, i10)) * 31) + e(this.f31569c, this.f31567a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void k(StringBuilder sb2, int i10) {
        for (int i11 = 0; i11 < this.f31567a; i11++) {
            k0.d(sb2, i10, String.valueOf(j1.a(this.f31568b[i11])), this.f31569c[i11]);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(int i10, Object obj) {
        a();
        b(this.f31567a + 1);
        int[] iArr = this.f31568b;
        int i11 = this.f31567a;
        iArr[i11] = i10;
        this.f31569c[i11] = obj;
        this.f31567a = i11 + 1;
    }

    private e1(int i10, int[] iArr, Object[] objArr, boolean z10) {
        this.f31570d = -1;
        this.f31567a = i10;
        this.f31568b = iArr;
        this.f31569c = objArr;
        this.f31571e = z10;
    }
}
