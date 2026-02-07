package rr;

import java.io.Serializable;
import java.util.AbstractList;
import java.util.Arrays;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.NoSuchElementException;
import java.util.RandomAccess;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMutableList;
import kotlin.jvm.internal.markers.KMutableListIterator;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends kotlin.collections.f implements List, RandomAccess, Serializable, KMutableList {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    private static final C0628b f49217o = new C0628b(null);

    /* renamed from: p  reason: collision with root package name */
    private static final b f49218p;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f49219d;

    /* renamed from: e  reason: collision with root package name */
    private int f49220e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f49221i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.collections.f implements List, RandomAccess, Serializable, KMutableList {

        /* renamed from: d  reason: collision with root package name */
        private Object[] f49222d;

        /* renamed from: e  reason: collision with root package name */
        private final int f49223e;

        /* renamed from: i  reason: collision with root package name */
        private int f49224i;

        /* renamed from: o  reason: collision with root package name */
        private final a f49225o;

        /* renamed from: p  reason: collision with root package name */
        private final b f49226p;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: rr.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0627a implements ListIterator, KMutableListIterator {

            /* renamed from: d  reason: collision with root package name */
            private final a f49227d;

            /* renamed from: e  reason: collision with root package name */
            private int f49228e;

            /* renamed from: i  reason: collision with root package name */
            private int f49229i;

            /* renamed from: o  reason: collision with root package name */
            private int f49230o;

            public C0627a(a list, int i10) {
                Intrinsics.checkNotNullParameter(list, "list");
                this.f49227d = list;
                this.f49228e = i10;
                this.f49229i = -1;
                this.f49230o = ((AbstractList) list).modCount;
            }

            private final void a() {
                if (((AbstractList) this.f49227d.f49226p).modCount == this.f49230o) {
                    return;
                }
                throw new ConcurrentModificationException();
            }

            @Override // java.util.ListIterator
            public void add(Object obj) {
                a();
                a aVar = this.f49227d;
                int i10 = this.f49228e;
                this.f49228e = i10 + 1;
                aVar.add(i10, obj);
                this.f49229i = -1;
                this.f49230o = ((AbstractList) this.f49227d).modCount;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public boolean hasNext() {
                if (this.f49228e < this.f49227d.f49224i) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator
            public boolean hasPrevious() {
                if (this.f49228e > 0) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public Object next() {
                a();
                if (this.f49228e < this.f49227d.f49224i) {
                    int i10 = this.f49228e;
                    this.f49228e = i10 + 1;
                    this.f49229i = i10;
                    return this.f49227d.f49222d[this.f49227d.f49223e + this.f49229i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int nextIndex() {
                return this.f49228e;
            }

            @Override // java.util.ListIterator
            public Object previous() {
                a();
                int i10 = this.f49228e;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f49228e = i11;
                    this.f49229i = i11;
                    return this.f49227d.f49222d[this.f49227d.f49223e + this.f49229i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int previousIndex() {
                return this.f49228e - 1;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public void remove() {
                a();
                int i10 = this.f49229i;
                if (i10 != -1) {
                    this.f49227d.remove(i10);
                    this.f49228e = this.f49229i;
                    this.f49229i = -1;
                    this.f49230o = ((AbstractList) this.f49227d).modCount;
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
            }

            @Override // java.util.ListIterator
            public void set(Object obj) {
                a();
                int i10 = this.f49229i;
                if (i10 != -1) {
                    this.f49227d.set(i10, obj);
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
            }
        }

        public a(Object[] backing, int i10, int i11, a aVar, b root) {
            Intrinsics.checkNotNullParameter(backing, "backing");
            Intrinsics.checkNotNullParameter(root, "root");
            this.f49222d = backing;
            this.f49223e = i10;
            this.f49224i = i11;
            this.f49225o = aVar;
            this.f49226p = root;
            ((AbstractList) this).modCount = ((AbstractList) root).modCount;
        }

        private final void i(int i10, Collection collection, int i11) {
            r();
            a aVar = this.f49225o;
            if (aVar == null) {
                this.f49226p.p(i10, collection, i11);
            } else {
                aVar.i(i10, collection, i11);
            }
            this.f49222d = this.f49226p.f49219d;
            this.f49224i += i11;
        }

        private final void j(int i10, Object obj) {
            r();
            a aVar = this.f49225o;
            if (aVar == null) {
                this.f49226p.q(i10, obj);
            } else {
                aVar.j(i10, obj);
            }
            this.f49222d = this.f49226p.f49219d;
            this.f49224i++;
        }

        private final void l() {
            if (((AbstractList) this.f49226p).modCount == ((AbstractList) this).modCount) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        private final void o() {
            if (!q()) {
                return;
            }
            throw new UnsupportedOperationException();
        }

        private final boolean p(List list) {
            boolean h10;
            h10 = rr.c.h(this.f49222d, this.f49223e, this.f49224i, list);
            return h10;
        }

        private final boolean q() {
            return this.f49226p.f49221i;
        }

        private final void r() {
            ((AbstractList) this).modCount++;
        }

        private final Object s(int i10) {
            Object A;
            r();
            a aVar = this.f49225o;
            if (aVar == null) {
                A = this.f49226p.A(i10);
            } else {
                A = aVar.s(i10);
            }
            this.f49224i--;
            return A;
        }

        private final void t(int i10, int i11) {
            if (i11 > 0) {
                r();
            }
            a aVar = this.f49225o;
            if (aVar == null) {
                this.f49226p.B(i10, i11);
            } else {
                aVar.t(i10, i11);
            }
            this.f49224i -= i11;
        }

        private final int u(int i10, int i11, Collection collection, boolean z10) {
            int C;
            a aVar = this.f49225o;
            if (aVar == null) {
                C = this.f49226p.C(i10, i11, collection, z10);
            } else {
                C = aVar.u(i10, i11, collection, z10);
            }
            if (C > 0) {
                r();
            }
            this.f49224i -= C;
            return C;
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean add(Object obj) {
            o();
            l();
            j(this.f49223e + this.f49224i, obj);
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean addAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            int size = elements.size();
            i(this.f49223e + this.f49224i, elements, size);
            return size > 0;
        }

        @Override // kotlin.collections.f
        public int b() {
            l();
            return this.f49224i;
        }

        @Override // kotlin.collections.f
        public Object c(int i10) {
            o();
            l();
            kotlin.collections.d.f32090d.b(i10, this.f49224i);
            return s(this.f49223e + i10);
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public void clear() {
            o();
            l();
            t(this.f49223e, this.f49224i);
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public boolean equals(Object obj) {
            l();
            if (obj != this) {
                if (!(obj instanceof List) || !p((List) obj)) {
                    return false;
                }
                return true;
            }
            return true;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object get(int i10) {
            l();
            kotlin.collections.d.f32090d.b(i10, this.f49224i);
            return this.f49222d[this.f49223e + i10];
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public int hashCode() {
            int i10;
            l();
            i10 = rr.c.i(this.f49222d, this.f49223e, this.f49224i);
            return i10;
        }

        @Override // java.util.AbstractList, java.util.List
        public int indexOf(Object obj) {
            l();
            for (int i10 = 0; i10 < this.f49224i; i10++) {
                if (Intrinsics.areEqual(this.f49222d[this.f49223e + i10], obj)) {
                    return i10;
                }
            }
            return -1;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean isEmpty() {
            l();
            if (this.f49224i == 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
        public Iterator iterator() {
            return listIterator(0);
        }

        @Override // java.util.AbstractList, java.util.List
        public int lastIndexOf(Object obj) {
            l();
            for (int i10 = this.f49224i - 1; i10 >= 0; i10--) {
                if (Intrinsics.areEqual(this.f49222d[this.f49223e + i10], obj)) {
                    return i10;
                }
            }
            return -1;
        }

        @Override // java.util.AbstractList, java.util.List
        public ListIterator listIterator() {
            return listIterator(0);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean remove(Object obj) {
            o();
            l();
            int indexOf = indexOf(obj);
            if (indexOf >= 0) {
                remove(indexOf);
            }
            if (indexOf >= 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean removeAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            if (u(this.f49223e, this.f49224i, elements, false) <= 0) {
                return false;
            }
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean retainAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            if (u(this.f49223e, this.f49224i, elements, true) > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object set(int i10, Object obj) {
            o();
            l();
            kotlin.collections.d.f32090d.b(i10, this.f49224i);
            Object[] objArr = this.f49222d;
            int i11 = this.f49223e;
            Object obj2 = objArr[i11 + i10];
            objArr[i11 + i10] = obj;
            return obj2;
        }

        @Override // java.util.AbstractList, java.util.List
        public List subList(int i10, int i11) {
            kotlin.collections.d.f32090d.d(i10, i11, this.f49224i);
            return new a(this.f49222d, this.f49223e + i10, i11 - i10, this, this.f49226p);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray(Object[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            l();
            int length = array.length;
            int i10 = this.f49224i;
            if (length < i10) {
                Object[] objArr = this.f49222d;
                int i11 = this.f49223e;
                Object[] copyOfRange = Arrays.copyOfRange(objArr, i11, i10 + i11, array.getClass());
                Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
                return copyOfRange;
            }
            Object[] objArr2 = this.f49222d;
            int i12 = this.f49223e;
            i.k(objArr2, array, 0, i12, i10 + i12);
            return CollectionsKt.f(this.f49224i, array);
        }

        @Override // java.util.AbstractCollection
        public String toString() {
            String j10;
            l();
            j10 = rr.c.j(this.f49222d, this.f49223e, this.f49224i, this);
            return j10;
        }

        @Override // java.util.AbstractList, java.util.List
        public ListIterator listIterator(int i10) {
            l();
            kotlin.collections.d.f32090d.c(i10, this.f49224i);
            return new C0627a(this, i10);
        }

        @Override // java.util.AbstractList, java.util.List
        public void add(int i10, Object obj) {
            o();
            l();
            kotlin.collections.d.f32090d.c(i10, this.f49224i);
            j(this.f49223e + i10, obj);
        }

        @Override // java.util.AbstractList, java.util.List
        public boolean addAll(int i10, Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            kotlin.collections.d.f32090d.c(i10, this.f49224i);
            int size = elements.size();
            i(this.f49223e + i10, elements, size);
            return size > 0;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray() {
            l();
            Object[] objArr = this.f49222d;
            int i10 = this.f49223e;
            return i.r(objArr, i10, this.f49224i + i10);
        }
    }

    /* renamed from: rr.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0628b {
        public /* synthetic */ C0628b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0628b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements ListIterator, KMutableListIterator {

        /* renamed from: d  reason: collision with root package name */
        private final b f49231d;

        /* renamed from: e  reason: collision with root package name */
        private int f49232e;

        /* renamed from: i  reason: collision with root package name */
        private int f49233i;

        /* renamed from: o  reason: collision with root package name */
        private int f49234o;

        public c(b list, int i10) {
            Intrinsics.checkNotNullParameter(list, "list");
            this.f49231d = list;
            this.f49232e = i10;
            this.f49233i = -1;
            this.f49234o = ((AbstractList) list).modCount;
        }

        private final void a() {
            if (((AbstractList) this.f49231d).modCount == this.f49234o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            a();
            b bVar = this.f49231d;
            int i10 = this.f49232e;
            this.f49232e = i10 + 1;
            bVar.add(i10, obj);
            this.f49233i = -1;
            this.f49234o = ((AbstractList) this.f49231d).modCount;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            if (this.f49232e < this.f49231d.f49220e) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            if (this.f49232e > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public Object next() {
            a();
            if (this.f49232e < this.f49231d.f49220e) {
                int i10 = this.f49232e;
                this.f49232e = i10 + 1;
                this.f49233i = i10;
                return this.f49231d.f49219d[this.f49233i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f49232e;
        }

        @Override // java.util.ListIterator
        public Object previous() {
            a();
            int i10 = this.f49232e;
            if (i10 > 0) {
                int i11 = i10 - 1;
                this.f49232e = i11;
                this.f49233i = i11;
                return this.f49231d.f49219d[this.f49233i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f49232e - 1;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            a();
            int i10 = this.f49233i;
            if (i10 != -1) {
                this.f49231d.remove(i10);
                this.f49232e = this.f49233i;
                this.f49233i = -1;
                this.f49234o = ((AbstractList) this.f49231d).modCount;
                return;
            }
            throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            a();
            int i10 = this.f49233i;
            if (i10 != -1) {
                this.f49231d.set(i10, obj);
                return;
            }
            throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
        }
    }

    static {
        b bVar = new b(0);
        bVar.f49221i = true;
        f49218p = bVar;
    }

    public b() {
        this(0, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object A(int i10) {
        x();
        Object[] objArr = this.f49219d;
        Object obj = objArr[i10];
        i.k(objArr, objArr, i10, i10 + 1, this.f49220e);
        rr.c.f(this.f49219d, this.f49220e - 1);
        this.f49220e--;
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void B(int i10, int i11) {
        if (i11 > 0) {
            x();
        }
        Object[] objArr = this.f49219d;
        i.k(objArr, objArr, i10, i10 + i11, this.f49220e);
        Object[] objArr2 = this.f49219d;
        int i12 = this.f49220e;
        rr.c.g(objArr2, i12 - i11, i12);
        this.f49220e -= i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int C(int i10, int i11, Collection collection, boolean z10) {
        int i12 = 0;
        int i13 = 0;
        while (i12 < i11) {
            int i14 = i10 + i12;
            if (collection.contains(this.f49219d[i14]) == z10) {
                Object[] objArr = this.f49219d;
                i12++;
                objArr[i13 + i10] = objArr[i14];
                i13++;
            } else {
                i12++;
            }
        }
        int i15 = i11 - i13;
        Object[] objArr2 = this.f49219d;
        i.k(objArr2, objArr2, i10 + i13, i11 + i10, this.f49220e);
        Object[] objArr3 = this.f49219d;
        int i16 = this.f49220e;
        rr.c.g(objArr3, i16 - i15, i16);
        if (i15 > 0) {
            x();
        }
        this.f49220e -= i15;
        return i15;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void p(int i10, Collection collection, int i11) {
        x();
        w(i10, i11);
        Iterator it = collection.iterator();
        for (int i12 = 0; i12 < i11; i12++) {
            this.f49219d[i10 + i12] = it.next();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void q(int i10, Object obj) {
        x();
        w(i10, 1);
        this.f49219d[i10] = obj;
    }

    private final void s() {
        if (!this.f49221i) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    private final boolean t(List list) {
        boolean h10;
        h10 = rr.c.h(this.f49219d, 0, this.f49220e, list);
        return h10;
    }

    private final void u(int i10) {
        if (i10 >= 0) {
            Object[] objArr = this.f49219d;
            if (i10 > objArr.length) {
                this.f49219d = rr.c.e(this.f49219d, kotlin.collections.d.f32090d.e(objArr.length, i10));
                return;
            }
            return;
        }
        throw new OutOfMemoryError();
    }

    private final void v(int i10) {
        u(this.f49220e + i10);
    }

    private final void w(int i10, int i11) {
        v(i11);
        Object[] objArr = this.f49219d;
        i.k(objArr, objArr, i10 + i11, i10, this.f49220e);
        this.f49220e += i11;
    }

    private final void x() {
        ((AbstractList) this).modCount++;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        s();
        q(this.f49220e, obj);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        int size = elements.size();
        p(this.f49220e, elements, size);
        return size > 0;
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f49220e;
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        s();
        kotlin.collections.d.f32090d.b(i10, this.f49220e);
        return A(i10);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        s();
        B(0, this.f49220e);
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public boolean equals(Object obj) {
        if (obj != this) {
            if (!(obj instanceof List) || !t((List) obj)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object get(int i10) {
        kotlin.collections.d.f32090d.b(i10, this.f49220e);
        return this.f49219d[i10];
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public int hashCode() {
        int i10;
        i10 = rr.c.i(this.f49219d, 0, this.f49220e);
        return i10;
    }

    @Override // java.util.AbstractList, java.util.List
    public int indexOf(Object obj) {
        for (int i10 = 0; i10 < this.f49220e; i10++) {
            if (Intrinsics.areEqual(this.f49219d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean isEmpty() {
        if (this.f49220e == 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
    public Iterator iterator() {
        return listIterator(0);
    }

    @Override // java.util.AbstractList, java.util.List
    public int lastIndexOf(Object obj) {
        for (int i10 = this.f49220e - 1; i10 >= 0; i10--) {
            if (Intrinsics.areEqual(this.f49219d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator() {
        return listIterator(0);
    }

    public final List r() {
        s();
        this.f49221i = true;
        if (this.f49220e > 0) {
            return this;
        }
        return f49218p;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean remove(Object obj) {
        s();
        int indexOf = indexOf(obj);
        if (indexOf >= 0) {
            remove(indexOf);
        }
        if (indexOf >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean removeAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        if (C(0, this.f49220e, elements, false) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean retainAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        if (C(0, this.f49220e, elements, true) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        s();
        kotlin.collections.d.f32090d.b(i10, this.f49220e);
        Object[] objArr = this.f49219d;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        return obj2;
    }

    @Override // java.util.AbstractList, java.util.List
    public List subList(int i10, int i11) {
        kotlin.collections.d.f32090d.d(i10, i11, this.f49220e);
        return new a(this.f49219d, i10, i11 - i10, null, this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        int length = array.length;
        int i10 = this.f49220e;
        if (length < i10) {
            Object[] copyOfRange = Arrays.copyOfRange(this.f49219d, 0, i10, array.getClass());
            Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
            return copyOfRange;
        }
        i.k(this.f49219d, array, 0, 0, i10);
        return CollectionsKt.f(this.f49220e, array);
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String j10;
        j10 = rr.c.j(this.f49219d, 0, this.f49220e, this);
        return j10;
    }

    public b(int i10) {
        this.f49219d = rr.c.d(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator(int i10) {
        kotlin.collections.d.f32090d.c(i10, this.f49220e);
        return new c(this, i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        s();
        kotlin.collections.d.f32090d.c(i10, this.f49220e);
        q(i10, obj);
    }

    public /* synthetic */ b(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        kotlin.collections.d.f32090d.c(i10, this.f49220e);
        int size = elements.size();
        p(i10, elements, size);
        return size > 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray() {
        return i.r(this.f49219d, 0, this.f49220e);
    }
}
