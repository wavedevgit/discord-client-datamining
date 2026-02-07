package ni;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.RandomAccess;
import ni.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s extends q implements List, RandomAccess {

    /* renamed from: e  reason: collision with root package name */
    private static final u0 f40886e = new b(k0.f40844p, 0);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends q.a {
        public a() {
            this(4);
        }

        @Override // ni.q.b
        /* renamed from: h */
        public a a(Object obj) {
            super.d(obj);
            return this;
        }

        public a i(Object... objArr) {
            super.e(objArr);
            return this;
        }

        public a j(Iterable iterable) {
            super.b(iterable);
            return this;
        }

        public s k() {
            this.f40878c = true;
            return s.i(this.f40876a, this.f40877b);
        }

        a(int i10) {
            super(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends ni.a {

        /* renamed from: i  reason: collision with root package name */
        private final s f40887i;

        b(s sVar, int i10) {
            super(sVar.size(), i10);
            this.f40887i = sVar;
        }

        @Override // ni.a
        protected Object a(int i10) {
            return this.f40887i.get(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends s {

        /* renamed from: i  reason: collision with root package name */
        final transient int f40888i;

        /* renamed from: o  reason: collision with root package name */
        final transient int f40889o;

        c(int i10, int i11) {
            this.f40888i = i10;
            this.f40889o = i11;
        }

        @Override // ni.s, java.util.List
        /* renamed from: A */
        public s subList(int i10, int i11) {
            mi.m.n(i10, i11, this.f40889o);
            s sVar = s.this;
            int i12 = this.f40888i;
            return sVar.subList(i10 + i12, i11 + i12);
        }

        @Override // ni.q
        Object[] d() {
            return s.this.d();
        }

        @Override // ni.q
        int e() {
            return s.this.f() + this.f40888i + this.f40889o;
        }

        @Override // ni.q
        int f() {
            return s.this.f() + this.f40888i;
        }

        @Override // ni.q
        boolean g() {
            return true;
        }

        @Override // java.util.List
        public Object get(int i10) {
            mi.m.h(i10, this.f40889o);
            return s.this.get(i10 + this.f40888i);
        }

        @Override // ni.s, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
        public /* bridge */ /* synthetic */ Iterator iterator() {
            return super.iterator();
        }

        @Override // ni.s, java.util.List
        public /* bridge */ /* synthetic */ ListIterator listIterator() {
            return super.listIterator();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public int size() {
            return this.f40889o;
        }

        @Override // ni.s, java.util.List
        public /* bridge */ /* synthetic */ ListIterator listIterator(int i10) {
            return super.listIterator(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s h(Object[] objArr) {
        return i(objArr, objArr.length);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s i(Object[] objArr, int i10) {
        if (i10 == 0) {
            return t();
        }
        return new k0(objArr, i10);
    }

    public static a j() {
        return new a();
    }

    private static s l(Object... objArr) {
        return h(h0.b(objArr));
    }

    public static s o(Collection collection) {
        if (collection instanceof q) {
            s b10 = ((q) collection).b();
            if (b10.g()) {
                return h(b10.toArray());
            }
            return b10;
        }
        return l(collection.toArray());
    }

    public static s p(Object[] objArr) {
        if (objArr.length == 0) {
            return t();
        }
        return l((Object[]) objArr.clone());
    }

    public static s t() {
        return k0.f40844p;
    }

    public static s u(Object obj) {
        return l(obj);
    }

    public static s v(Object obj, Object obj2) {
        return l(obj, obj2);
    }

    public static s w(Object obj, Object obj2, Object obj3) {
        return l(obj, obj2, obj3);
    }

    public static s x(Object obj, Object obj2, Object obj3, Object obj4, Object obj5) {
        return l(obj, obj2, obj3, obj4, obj5);
    }

    @Override // java.util.List
    /* renamed from: A */
    public s subList(int i10, int i11) {
        mi.m.n(i10, i11, size());
        int i12 = i11 - i10;
        if (i12 == size()) {
            return this;
        }
        if (i12 == 0) {
            return t();
        }
        return B(i10, i11);
    }

    s B(int i10, int i11) {
        return new c(i10, i11 - i10);
    }

    @Override // java.util.List
    public final void add(int i10, Object obj) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.List
    public final boolean addAll(int i10, Collection collection) {
        throw new UnsupportedOperationException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.q
    public int c(Object[] objArr, int i10) {
        int size = size();
        for (int i11 = 0; i11 < size; i11++) {
            objArr[i10 + i11] = get(i11);
        }
        return i10 + size;
    }

    @Override // ni.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        if (indexOf(obj) >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Collection, java.util.List
    public boolean equals(Object obj) {
        return y.c(this, obj);
    }

    @Override // java.util.Collection, java.util.List
    public int hashCode() {
        int size = size();
        int i10 = 1;
        for (int i11 = 0; i11 < size; i11++) {
            i10 = ~(~((i10 * 31) + get(i11).hashCode()));
        }
        return i10;
    }

    @Override // java.util.List
    public int indexOf(Object obj) {
        if (obj == null) {
            return -1;
        }
        return y.d(this, obj);
    }

    @Override // java.util.List
    public int lastIndexOf(Object obj) {
        if (obj == null) {
            return -1;
        }
        return y.f(this, obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
    /* renamed from: q */
    public t0 iterator() {
        return listIterator();
    }

    @Override // java.util.List
    /* renamed from: r */
    public u0 listIterator() {
        return listIterator(0);
    }

    @Override // java.util.List
    public final Object remove(int i10) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.List
    /* renamed from: s */
    public u0 listIterator(int i10) {
        mi.m.l(i10, size());
        if (isEmpty()) {
            return f40886e;
        }
        return new b(this, i10);
    }

    @Override // java.util.List
    public final Object set(int i10, Object obj) {
        throw new UnsupportedOperationException();
    }

    @Override // ni.q
    public final s b() {
        return this;
    }
}
