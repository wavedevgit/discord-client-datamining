package os;

import java.util.Arrays;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n0 {

    /* renamed from: b  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f44535b = AtomicIntegerFieldUpdater.newUpdater(n0.class, "_size$volatile");
    private volatile /* synthetic */ int _size$volatile;

    /* renamed from: a  reason: collision with root package name */
    private o0[] f44536a;

    private final o0[] g() {
        o0[] o0VarArr = this.f44536a;
        if (o0VarArr == null) {
            o0[] o0VarArr2 = new o0[4];
            this.f44536a = o0VarArr2;
            return o0VarArr2;
        } else if (c() >= o0VarArr.length) {
            Object[] copyOf = Arrays.copyOf(o0VarArr, c() * 2);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            o0[] o0VarArr3 = (o0[]) copyOf;
            this.f44536a = o0VarArr3;
            return o0VarArr3;
        } else {
            return o0VarArr;
        }
    }

    private final void k(int i10) {
        f44535b.set(this, i10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:8:0x0028, code lost:
        if (((java.lang.Comparable) r3).compareTo(r4) < 0) goto L7;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void l(int r6) {
        /*
            r5 = this;
        L0:
            int r0 = r6 * 2
            int r1 = r0 + 1
            int r2 = r5.c()
            if (r1 < r2) goto Lb
            goto L3e
        Lb:
            os.o0[] r2 = r5.f44536a
            kotlin.jvm.internal.Intrinsics.checkNotNull(r2)
            int r0 = r0 + 2
            int r3 = r5.c()
            if (r0 >= r3) goto L2b
            r3 = r2[r0]
            kotlin.jvm.internal.Intrinsics.checkNotNull(r3)
            java.lang.Comparable r3 = (java.lang.Comparable) r3
            r4 = r2[r1]
            kotlin.jvm.internal.Intrinsics.checkNotNull(r4)
            int r3 = r3.compareTo(r4)
            if (r3 >= 0) goto L2b
            goto L2c
        L2b:
            r0 = r1
        L2c:
            r1 = r2[r6]
            kotlin.jvm.internal.Intrinsics.checkNotNull(r1)
            java.lang.Comparable r1 = (java.lang.Comparable) r1
            r2 = r2[r0]
            kotlin.jvm.internal.Intrinsics.checkNotNull(r2)
            int r1 = r1.compareTo(r2)
            if (r1 > 0) goto L3f
        L3e:
            return
        L3f:
            r5.n(r6, r0)
            r6 = r0
            goto L0
        */
        throw new UnsupportedOperationException("Method not decompiled: os.n0.l(int):void");
    }

    private final void m(int i10) {
        while (i10 > 0) {
            o0[] o0VarArr = this.f44536a;
            Intrinsics.checkNotNull(o0VarArr);
            int i11 = (i10 - 1) / 2;
            o0 o0Var = o0VarArr[i11];
            Intrinsics.checkNotNull(o0Var);
            o0 o0Var2 = o0VarArr[i10];
            Intrinsics.checkNotNull(o0Var2);
            if (((Comparable) o0Var).compareTo(o0Var2) <= 0) {
                return;
            }
            n(i10, i11);
            i10 = i11;
        }
    }

    private final void n(int i10, int i11) {
        o0[] o0VarArr = this.f44536a;
        Intrinsics.checkNotNull(o0VarArr);
        o0 o0Var = o0VarArr[i11];
        Intrinsics.checkNotNull(o0Var);
        o0 o0Var2 = o0VarArr[i10];
        Intrinsics.checkNotNull(o0Var2);
        o0VarArr[i10] = o0Var;
        o0VarArr[i11] = o0Var2;
        o0Var.setIndex(i10);
        o0Var2.setIndex(i11);
    }

    public final void a(o0 o0Var) {
        o0Var.e(this);
        o0[] g10 = g();
        int c10 = c();
        k(c10 + 1);
        g10[c10] = o0Var;
        o0Var.setIndex(c10);
        m(c10);
    }

    public final o0 b() {
        o0[] o0VarArr = this.f44536a;
        if (o0VarArr != null) {
            return o0VarArr[0];
        }
        return null;
    }

    public final int c() {
        return f44535b.get(this);
    }

    public final boolean e() {
        if (c() == 0) {
            return true;
        }
        return false;
    }

    public final o0 f() {
        o0 b10;
        synchronized (this) {
            b10 = b();
        }
        return b10;
    }

    public final boolean h(o0 o0Var) {
        boolean z10;
        synchronized (this) {
            if (o0Var.a() == null) {
                z10 = false;
            } else {
                i(o0Var.getIndex());
                z10 = true;
            }
        }
        return z10;
    }

    public final o0 i(int i10) {
        o0[] o0VarArr = this.f44536a;
        Intrinsics.checkNotNull(o0VarArr);
        k(c() - 1);
        if (i10 < c()) {
            n(i10, c());
            int i11 = (i10 - 1) / 2;
            if (i10 > 0) {
                o0 o0Var = o0VarArr[i10];
                Intrinsics.checkNotNull(o0Var);
                o0 o0Var2 = o0VarArr[i11];
                Intrinsics.checkNotNull(o0Var2);
                if (((Comparable) o0Var).compareTo(o0Var2) < 0) {
                    n(i10, i11);
                    m(i11);
                }
            }
            l(i10);
        }
        o0 o0Var3 = o0VarArr[c()];
        Intrinsics.checkNotNull(o0Var3);
        o0Var3.e(null);
        o0Var3.setIndex(-1);
        o0VarArr[c()] = null;
        return o0Var3;
    }

    public final o0 j() {
        o0 o0Var;
        synchronized (this) {
            if (c() > 0) {
                o0Var = i(0);
            } else {
                o0Var = null;
            }
        }
        return o0Var;
    }
}
