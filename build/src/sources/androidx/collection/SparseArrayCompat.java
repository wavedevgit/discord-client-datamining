package androidx.collection;

import java.util.Arrays;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import u0.e;
import u0.u;
import v0.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SparseArrayCompat implements Cloneable {

    /* renamed from: d  reason: collision with root package name */
    public /* synthetic */ boolean f2179d;

    /* renamed from: e  reason: collision with root package name */
    public /* synthetic */ int[] f2180e;

    /* renamed from: i  reason: collision with root package name */
    public /* synthetic */ Object[] f2181i;

    /* renamed from: o  reason: collision with root package name */
    public /* synthetic */ int f2182o;

    public SparseArrayCompat() {
        this(0, 1, null);
    }

    public void a(int i10, Object obj) {
        int i11 = this.f2182o;
        if (i11 != 0 && i10 <= this.f2180e[i11 - 1]) {
            k(i10, obj);
            return;
        }
        if (this.f2179d && i11 >= this.f2180e.length) {
            u.e(this);
        }
        int i12 = this.f2182o;
        if (i12 >= this.f2180e.length) {
            int e10 = a.e(i12 + 1);
            int[] copyOf = Arrays.copyOf(this.f2180e, e10);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f2180e = copyOf;
            Object[] copyOf2 = Arrays.copyOf(this.f2181i, e10);
            Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
            this.f2181i = copyOf2;
        }
        this.f2180e[i12] = i10;
        this.f2181i[i12] = obj;
        this.f2182o = i12 + 1;
    }

    public void b() {
        int i10 = this.f2182o;
        Object[] objArr = this.f2181i;
        for (int i11 = 0; i11 < i10; i11++) {
            objArr[i11] = null;
        }
        this.f2182o = 0;
        this.f2179d = false;
    }

    /* renamed from: c */
    public SparseArrayCompat clone() {
        Object clone = super.clone();
        Intrinsics.checkNotNull(clone, "null cannot be cast to non-null type androidx.collection.SparseArrayCompat<E of androidx.collection.SparseArrayCompat>");
        SparseArrayCompat sparseArrayCompat = (SparseArrayCompat) clone;
        sparseArrayCompat.f2180e = (int[]) this.f2180e.clone();
        sparseArrayCompat.f2181i = (Object[]) this.f2181i.clone();
        return sparseArrayCompat;
    }

    public boolean d(int i10) {
        if (g(i10) >= 0) {
            return true;
        }
        return false;
    }

    public Object e(int i10) {
        return u.c(this, i10);
    }

    public Object f(int i10, Object obj) {
        return u.d(this, i10, obj);
    }

    public int g(int i10) {
        if (this.f2179d) {
            u.e(this);
        }
        return a.a(this.f2180e, this.f2182o, i10);
    }

    public int i(Object obj) {
        if (this.f2179d) {
            u.e(this);
        }
        int i10 = this.f2182o;
        for (int i11 = 0; i11 < i10; i11++) {
            if (this.f2181i[i11] == obj) {
                return i11;
            }
        }
        return -1;
    }

    public int j(int i10) {
        if (this.f2179d) {
            u.e(this);
        }
        return this.f2180e[i10];
    }

    public void k(int i10, Object obj) {
        Object obj2;
        int a10 = a.a(this.f2180e, this.f2182o, i10);
        if (a10 >= 0) {
            this.f2181i[a10] = obj;
            return;
        }
        int i11 = ~a10;
        if (i11 < this.f2182o) {
            Object obj3 = this.f2181i[i11];
            obj2 = u.f50028a;
            if (obj3 == obj2) {
                this.f2180e[i11] = i10;
                this.f2181i[i11] = obj;
                return;
            }
        }
        if (this.f2179d && this.f2182o >= this.f2180e.length) {
            u.e(this);
            i11 = ~a.a(this.f2180e, this.f2182o, i10);
        }
        int i12 = this.f2182o;
        if (i12 >= this.f2180e.length) {
            int e10 = a.e(i12 + 1);
            int[] copyOf = Arrays.copyOf(this.f2180e, e10);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f2180e = copyOf;
            Object[] copyOf2 = Arrays.copyOf(this.f2181i, e10);
            Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
            this.f2181i = copyOf2;
        }
        int i13 = this.f2182o;
        if (i13 - i11 != 0) {
            int[] iArr = this.f2180e;
            int i14 = i11 + 1;
            i.i(iArr, iArr, i14, i11, i13);
            Object[] objArr = this.f2181i;
            i.k(objArr, objArr, i14, i11, this.f2182o);
        }
        this.f2180e[i11] = i10;
        this.f2181i[i11] = obj;
        this.f2182o++;
    }

    public int l() {
        if (this.f2179d) {
            u.e(this);
        }
        return this.f2182o;
    }

    public Object m(int i10) {
        if (this.f2179d) {
            u.e(this);
        }
        Object[] objArr = this.f2181i;
        if (i10 < objArr.length) {
            return objArr[i10];
        }
        e eVar = e.f49995a;
        throw new ArrayIndexOutOfBoundsException();
    }

    public String toString() {
        if (l() <= 0) {
            return "{}";
        }
        StringBuilder sb2 = new StringBuilder(this.f2182o * 28);
        sb2.append('{');
        int i10 = this.f2182o;
        for (int i11 = 0; i11 < i10; i11++) {
            if (i11 > 0) {
                sb2.append(", ");
            }
            sb2.append(j(i11));
            sb2.append('=');
            Object m10 = m(i11);
            if (m10 != this) {
                sb2.append(m10);
            } else {
                sb2.append("(this Map)");
            }
        }
        sb2.append('}');
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    public SparseArrayCompat(int i10) {
        if (i10 == 0) {
            this.f2180e = a.f50582a;
            this.f2181i = a.f50584c;
            return;
        }
        int e10 = a.e(i10);
        this.f2180e = new int[e10];
        this.f2181i = new Object[e10];
    }

    public /* synthetic */ SparseArrayCompat(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }
}
