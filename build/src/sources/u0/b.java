package u0;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMutableCollection;
import kotlin.jvm.internal.markers.KMutableSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements Collection, Set, KMutableCollection, KMutableSet {

    /* renamed from: d  reason: collision with root package name */
    private int[] f49991d;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f49992e;

    /* renamed from: i  reason: collision with root package name */
    private int f49993i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class a extends f {
        public a() {
            super(b.this.f());
        }

        @Override // u0.f
        protected Object a(int i10) {
            return b.this.k(i10);
        }

        @Override // u0.f
        protected void b(int i10) {
            b.this.g(i10);
        }
    }

    public b() {
        this(0, 1, null);
    }

    @Override // java.util.Collection, java.util.Set
    public boolean add(Object obj) {
        int i10;
        int c10;
        int f10 = f();
        boolean z10 = false;
        if (obj == null) {
            c10 = d.d(this);
            i10 = 0;
        } else {
            int hashCode = obj.hashCode();
            i10 = hashCode;
            c10 = d.c(this, obj, hashCode);
        }
        if (c10 >= 0) {
            return false;
        }
        int i11 = ~c10;
        if (f10 >= d().length) {
            int i12 = 8;
            if (f10 >= 8) {
                i12 = (f10 >> 1) + f10;
            } else if (f10 < 4) {
                i12 = 4;
            }
            int[] d10 = d();
            Object[] c11 = c();
            d.a(this, i12);
            if (f10 == f()) {
                if (d().length == 0) {
                    z10 = true;
                }
                if (!z10) {
                    kotlin.collections.i.n(d10, d(), 0, 0, d10.length, 6, null);
                    kotlin.collections.i.p(c11, c(), 0, 0, c11.length, 6, null);
                }
            } else {
                throw new ConcurrentModificationException();
            }
        }
        if (i11 < f10) {
            int i13 = i11 + 1;
            kotlin.collections.i.i(d(), d(), i13, i11, f10);
            kotlin.collections.i.k(c(), c(), i13, i11, f10);
        }
        if (f10 == f() && i11 < d().length) {
            d()[i11] = i10;
            c()[i11] = obj;
            j(f() + 1);
            return true;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Collection, java.util.Set
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        b(f() + elements.size());
        boolean z10 = false;
        for (Object obj : elements) {
            z10 |= add(obj);
        }
        return z10;
    }

    public final void b(int i10) {
        int f10 = f();
        if (d().length < i10) {
            int[] d10 = d();
            Object[] c10 = c();
            d.a(this, i10);
            if (f() > 0) {
                kotlin.collections.i.n(d10, d(), 0, 0, f(), 6, null);
                kotlin.collections.i.p(c10, c(), 0, 0, f(), 6, null);
            }
        }
        if (f() == f10) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    public final Object[] c() {
        return this.f49992e;
    }

    @Override // java.util.Collection, java.util.Set
    public void clear() {
        if (f() != 0) {
            i(v0.a.f50582a);
            h(v0.a.f50584c);
            j(0);
        }
        if (f() == 0) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        if (indexOf(obj) >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Collection, java.util.Set
    public boolean containsAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        for (Object obj : elements) {
            if (!contains(obj)) {
                return false;
            }
        }
        return true;
    }

    public final int[] d() {
        return this.f49991d;
    }

    public int e() {
        return this.f49993i;
    }

    @Override // java.util.Collection, java.util.Set
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Set) || size() != ((Set) obj).size()) {
            return false;
        }
        try {
            int f10 = f();
            for (int i10 = 0; i10 < f10; i10++) {
                if (!((Set) obj).contains(k(i10))) {
                    return false;
                }
            }
            return true;
        } catch (ClassCastException | NullPointerException unused) {
            return false;
        }
    }

    public final int f() {
        return this.f49993i;
    }

    public final Object g(int i10) {
        int i11;
        Object[] objArr;
        int f10 = f();
        Object obj = c()[i10];
        if (f10 <= 1) {
            clear();
            return obj;
        }
        int i12 = f10 - 1;
        int i13 = 8;
        if (d().length > 8 && f() < d().length / 3) {
            if (f() > 8) {
                i13 = f() + (f() >> 1);
            }
            int[] d10 = d();
            Object[] c10 = c();
            d.a(this, i13);
            if (i10 > 0) {
                kotlin.collections.i.n(d10, d(), 0, 0, i10, 6, null);
                objArr = c10;
                kotlin.collections.i.p(objArr, c(), 0, 0, i10, 6, null);
                i11 = i10;
            } else {
                i11 = i10;
                objArr = c10;
            }
            if (i11 < i12) {
                int i14 = i11 + 1;
                kotlin.collections.i.i(d10, d(), i11, i14, f10);
                kotlin.collections.i.k(objArr, c(), i11, i14, f10);
            }
        } else {
            if (i10 < i12) {
                int i15 = i10 + 1;
                kotlin.collections.i.i(d(), d(), i10, i15, f10);
                kotlin.collections.i.k(c(), c(), i10, i15, f10);
            }
            c()[i12] = null;
        }
        if (f10 == f()) {
            j(i12);
            return obj;
        }
        throw new ConcurrentModificationException();
    }

    public final void h(Object[] objArr) {
        Intrinsics.checkNotNullParameter(objArr, "<set-?>");
        this.f49992e = objArr;
    }

    @Override // java.util.Collection, java.util.Set
    public int hashCode() {
        int[] d10 = d();
        int f10 = f();
        int i10 = 0;
        for (int i11 = 0; i11 < f10; i11++) {
            i10 += d10[i11];
        }
        return i10;
    }

    public final void i(int[] iArr) {
        Intrinsics.checkNotNullParameter(iArr, "<set-?>");
        this.f49991d = iArr;
    }

    public final int indexOf(Object obj) {
        if (obj == null) {
            return d.d(this);
        }
        return d.c(this, obj, obj.hashCode());
    }

    @Override // java.util.Collection, java.util.Set
    public boolean isEmpty() {
        if (f() <= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Collection, java.lang.Iterable, java.util.Set
    public Iterator iterator() {
        return new a();
    }

    public final void j(int i10) {
        this.f49993i = i10;
    }

    public final Object k(int i10) {
        return c()[i10];
    }

    @Override // java.util.Collection, java.util.Set
    public boolean remove(Object obj) {
        int indexOf = indexOf(obj);
        if (indexOf >= 0) {
            g(indexOf);
            return true;
        }
        return false;
    }

    @Override // java.util.Collection, java.util.Set
    public boolean removeAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        boolean z10 = false;
        for (Object obj : elements) {
            z10 |= remove(obj);
        }
        return z10;
    }

    @Override // java.util.Collection, java.util.Set
    public boolean retainAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        boolean z10 = false;
        for (int f10 = f() - 1; -1 < f10; f10--) {
            if (!CollectionsKt.d0(elements, c()[f10])) {
                g(f10);
                z10 = true;
            }
        }
        return z10;
    }

    @Override // java.util.Collection, java.util.Set
    public final /* bridge */ int size() {
        return e();
    }

    @Override // java.util.Collection, java.util.Set
    public final Object[] toArray() {
        return kotlin.collections.i.r(this.f49992e, 0, this.f49993i);
    }

    public String toString() {
        if (isEmpty()) {
            return "{}";
        }
        StringBuilder sb2 = new StringBuilder(f() * 14);
        sb2.append('{');
        int f10 = f();
        for (int i10 = 0; i10 < f10; i10++) {
            if (i10 > 0) {
                sb2.append(", ");
            }
            Object k10 = k(i10);
            if (k10 != this) {
                sb2.append(k10);
            } else {
                sb2.append("(this Set)");
            }
        }
        sb2.append('}');
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    public b(int i10) {
        this.f49991d = v0.a.f50582a;
        this.f49992e = v0.a.f50584c;
        if (i10 > 0) {
            d.a(this, i10);
        }
    }

    @Override // java.util.Collection, java.util.Set
    public final Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        Object[] a10 = c.a(array, this.f49993i);
        kotlin.collections.i.k(this.f49992e, a10, 0, 0, this.f49993i);
        Intrinsics.checkNotNull(a10);
        return a10;
    }

    public /* synthetic */ b(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 0 : i10);
    }
}
