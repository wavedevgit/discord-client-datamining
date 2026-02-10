package bs;

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
    private static final C0106b f7471o = new C0106b(null);

    /* renamed from: p  reason: collision with root package name */
    private static final b f7472p;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f7473d;

    /* renamed from: e  reason: collision with root package name */
    private int f7474e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f7475i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.collections.f implements List, RandomAccess, Serializable, KMutableList {

        /* renamed from: d  reason: collision with root package name */
        private Object[] f7476d;

        /* renamed from: e  reason: collision with root package name */
        private final int f7477e;

        /* renamed from: i  reason: collision with root package name */
        private int f7478i;

        /* renamed from: o  reason: collision with root package name */
        private final a f7479o;

        /* renamed from: p  reason: collision with root package name */
        private final b f7480p;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: bs.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0105a implements ListIterator, KMutableListIterator {

            /* renamed from: d  reason: collision with root package name */
            private final a f7481d;

            /* renamed from: e  reason: collision with root package name */
            private int f7482e;

            /* renamed from: i  reason: collision with root package name */
            private int f7483i;

            /* renamed from: o  reason: collision with root package name */
            private int f7484o;

            public C0105a(a list, int i10) {
                Intrinsics.checkNotNullParameter(list, "list");
                this.f7481d = list;
                this.f7482e = i10;
                this.f7483i = -1;
                this.f7484o = ((AbstractList) list).modCount;
            }

            private final void a() {
                if (((AbstractList) this.f7481d.f7480p).modCount == this.f7484o) {
                    return;
                }
                throw new ConcurrentModificationException();
            }

            @Override // java.util.ListIterator
            public void add(Object obj) {
                a();
                a aVar = this.f7481d;
                int i10 = this.f7482e;
                this.f7482e = i10 + 1;
                aVar.add(i10, obj);
                this.f7483i = -1;
                this.f7484o = ((AbstractList) this.f7481d).modCount;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public boolean hasNext() {
                if (this.f7482e < this.f7481d.f7478i) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator
            public boolean hasPrevious() {
                if (this.f7482e > 0) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public Object next() {
                a();
                if (this.f7482e < this.f7481d.f7478i) {
                    int i10 = this.f7482e;
                    this.f7482e = i10 + 1;
                    this.f7483i = i10;
                    return this.f7481d.f7476d[this.f7481d.f7477e + this.f7483i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int nextIndex() {
                return this.f7482e;
            }

            @Override // java.util.ListIterator
            public Object previous() {
                a();
                int i10 = this.f7482e;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f7482e = i11;
                    this.f7483i = i11;
                    return this.f7481d.f7476d[this.f7481d.f7477e + this.f7483i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int previousIndex() {
                return this.f7482e - 1;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public void remove() {
                a();
                int i10 = this.f7483i;
                if (i10 != -1) {
                    this.f7481d.remove(i10);
                    this.f7482e = this.f7483i;
                    this.f7483i = -1;
                    this.f7484o = ((AbstractList) this.f7481d).modCount;
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
            }

            @Override // java.util.ListIterator
            public void set(Object obj) {
                a();
                int i10 = this.f7483i;
                if (i10 != -1) {
                    this.f7481d.set(i10, obj);
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
            }
        }

        public a(Object[] backing, int i10, int i11, a aVar, b root) {
            Intrinsics.checkNotNullParameter(backing, "backing");
            Intrinsics.checkNotNullParameter(root, "root");
            this.f7476d = backing;
            this.f7477e = i10;
            this.f7478i = i11;
            this.f7479o = aVar;
            this.f7480p = root;
            ((AbstractList) this).modCount = ((AbstractList) root).modCount;
        }

        private final void j(int i10, Collection collection, int i11) {
            r();
            a aVar = this.f7479o;
            if (aVar == null) {
                this.f7480p.p(i10, collection, i11);
            } else {
                aVar.j(i10, collection, i11);
            }
            this.f7476d = this.f7480p.f7473d;
            this.f7478i += i11;
        }

        private final void k(int i10, Object obj) {
            r();
            a aVar = this.f7479o;
            if (aVar == null) {
                this.f7480p.q(i10, obj);
            } else {
                aVar.k(i10, obj);
            }
            this.f7476d = this.f7480p.f7473d;
            this.f7478i++;
        }

        private final void l() {
            if (((AbstractList) this.f7480p).modCount == ((AbstractList) this).modCount) {
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
            h10 = bs.c.h(this.f7476d, this.f7477e, this.f7478i, list);
            return h10;
        }

        private final boolean q() {
            return this.f7480p.f7475i;
        }

        private final void r() {
            ((AbstractList) this).modCount++;
        }

        private final Object s(int i10) {
            Object A;
            r();
            a aVar = this.f7479o;
            if (aVar == null) {
                A = this.f7480p.A(i10);
            } else {
                A = aVar.s(i10);
            }
            this.f7478i--;
            return A;
        }

        private final void t(int i10, int i11) {
            if (i11 > 0) {
                r();
            }
            a aVar = this.f7479o;
            if (aVar == null) {
                this.f7480p.B(i10, i11);
            } else {
                aVar.t(i10, i11);
            }
            this.f7478i -= i11;
        }

        private final int u(int i10, int i11, Collection collection, boolean z10) {
            int C;
            a aVar = this.f7479o;
            if (aVar == null) {
                C = this.f7480p.C(i10, i11, collection, z10);
            } else {
                C = aVar.u(i10, i11, collection, z10);
            }
            if (C > 0) {
                r();
            }
            this.f7478i -= C;
            return C;
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean add(Object obj) {
            o();
            l();
            k(this.f7477e + this.f7478i, obj);
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean addAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            int size = elements.size();
            j(this.f7477e + this.f7478i, elements, size);
            return size > 0;
        }

        @Override // kotlin.collections.f
        public int b() {
            l();
            return this.f7478i;
        }

        @Override // kotlin.collections.f
        public Object c(int i10) {
            o();
            l();
            kotlin.collections.d.f32021d.b(i10, this.f7478i);
            return s(this.f7477e + i10);
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public void clear() {
            o();
            l();
            t(this.f7477e, this.f7478i);
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
            kotlin.collections.d.f32021d.b(i10, this.f7478i);
            return this.f7476d[this.f7477e + i10];
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public int hashCode() {
            int i10;
            l();
            i10 = bs.c.i(this.f7476d, this.f7477e, this.f7478i);
            return i10;
        }

        @Override // java.util.AbstractList, java.util.List
        public int indexOf(Object obj) {
            l();
            for (int i10 = 0; i10 < this.f7478i; i10++) {
                if (Intrinsics.areEqual(this.f7476d[this.f7477e + i10], obj)) {
                    return i10;
                }
            }
            return -1;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean isEmpty() {
            l();
            if (this.f7478i == 0) {
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
            for (int i10 = this.f7478i - 1; i10 >= 0; i10--) {
                if (Intrinsics.areEqual(this.f7476d[this.f7477e + i10], obj)) {
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
            if (u(this.f7477e, this.f7478i, elements, false) <= 0) {
                return false;
            }
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean retainAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            if (u(this.f7477e, this.f7478i, elements, true) > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object set(int i10, Object obj) {
            o();
            l();
            kotlin.collections.d.f32021d.b(i10, this.f7478i);
            Object[] objArr = this.f7476d;
            int i11 = this.f7477e;
            Object obj2 = objArr[i11 + i10];
            objArr[i11 + i10] = obj;
            return obj2;
        }

        @Override // java.util.AbstractList, java.util.List
        public List subList(int i10, int i11) {
            kotlin.collections.d.f32021d.d(i10, i11, this.f7478i);
            return new a(this.f7476d, this.f7477e + i10, i11 - i10, this, this.f7480p);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray(Object[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            l();
            int length = array.length;
            int i10 = this.f7478i;
            if (length < i10) {
                Object[] objArr = this.f7476d;
                int i11 = this.f7477e;
                Object[] copyOfRange = Arrays.copyOfRange(objArr, i11, i10 + i11, array.getClass());
                Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
                return copyOfRange;
            }
            Object[] objArr2 = this.f7476d;
            int i12 = this.f7477e;
            i.k(objArr2, array, 0, i12, i10 + i12);
            return CollectionsKt.f(this.f7478i, array);
        }

        @Override // java.util.AbstractCollection
        public String toString() {
            String j10;
            l();
            j10 = bs.c.j(this.f7476d, this.f7477e, this.f7478i, this);
            return j10;
        }

        @Override // java.util.AbstractList, java.util.List
        public ListIterator listIterator(int i10) {
            l();
            kotlin.collections.d.f32021d.c(i10, this.f7478i);
            return new C0105a(this, i10);
        }

        @Override // java.util.AbstractList, java.util.List
        public void add(int i10, Object obj) {
            o();
            l();
            kotlin.collections.d.f32021d.c(i10, this.f7478i);
            k(this.f7477e + i10, obj);
        }

        @Override // java.util.AbstractList, java.util.List
        public boolean addAll(int i10, Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            kotlin.collections.d.f32021d.c(i10, this.f7478i);
            int size = elements.size();
            j(this.f7477e + i10, elements, size);
            return size > 0;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray() {
            l();
            Object[] objArr = this.f7476d;
            int i10 = this.f7477e;
            return i.r(objArr, i10, this.f7478i + i10);
        }
    }

    /* renamed from: bs.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0106b {
        public /* synthetic */ C0106b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0106b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements ListIterator, KMutableListIterator {

        /* renamed from: d  reason: collision with root package name */
        private final b f7485d;

        /* renamed from: e  reason: collision with root package name */
        private int f7486e;

        /* renamed from: i  reason: collision with root package name */
        private int f7487i;

        /* renamed from: o  reason: collision with root package name */
        private int f7488o;

        public c(b list, int i10) {
            Intrinsics.checkNotNullParameter(list, "list");
            this.f7485d = list;
            this.f7486e = i10;
            this.f7487i = -1;
            this.f7488o = ((AbstractList) list).modCount;
        }

        private final void a() {
            if (((AbstractList) this.f7485d).modCount == this.f7488o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            a();
            b bVar = this.f7485d;
            int i10 = this.f7486e;
            this.f7486e = i10 + 1;
            bVar.add(i10, obj);
            this.f7487i = -1;
            this.f7488o = ((AbstractList) this.f7485d).modCount;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            if (this.f7486e < this.f7485d.f7474e) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            if (this.f7486e > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public Object next() {
            a();
            if (this.f7486e < this.f7485d.f7474e) {
                int i10 = this.f7486e;
                this.f7486e = i10 + 1;
                this.f7487i = i10;
                return this.f7485d.f7473d[this.f7487i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f7486e;
        }

        @Override // java.util.ListIterator
        public Object previous() {
            a();
            int i10 = this.f7486e;
            if (i10 > 0) {
                int i11 = i10 - 1;
                this.f7486e = i11;
                this.f7487i = i11;
                return this.f7485d.f7473d[this.f7487i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f7486e - 1;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            a();
            int i10 = this.f7487i;
            if (i10 != -1) {
                this.f7485d.remove(i10);
                this.f7486e = this.f7487i;
                this.f7487i = -1;
                this.f7488o = ((AbstractList) this.f7485d).modCount;
                return;
            }
            throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            a();
            int i10 = this.f7487i;
            if (i10 != -1) {
                this.f7485d.set(i10, obj);
                return;
            }
            throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
        }
    }

    static {
        b bVar = new b(0);
        bVar.f7475i = true;
        f7472p = bVar;
    }

    public b() {
        this(0, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object A(int i10) {
        x();
        Object[] objArr = this.f7473d;
        Object obj = objArr[i10];
        i.k(objArr, objArr, i10, i10 + 1, this.f7474e);
        bs.c.f(this.f7473d, this.f7474e - 1);
        this.f7474e--;
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void B(int i10, int i11) {
        if (i11 > 0) {
            x();
        }
        Object[] objArr = this.f7473d;
        i.k(objArr, objArr, i10, i10 + i11, this.f7474e);
        Object[] objArr2 = this.f7473d;
        int i12 = this.f7474e;
        bs.c.g(objArr2, i12 - i11, i12);
        this.f7474e -= i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int C(int i10, int i11, Collection collection, boolean z10) {
        int i12 = 0;
        int i13 = 0;
        while (i12 < i11) {
            int i14 = i10 + i12;
            if (collection.contains(this.f7473d[i14]) == z10) {
                Object[] objArr = this.f7473d;
                i12++;
                objArr[i13 + i10] = objArr[i14];
                i13++;
            } else {
                i12++;
            }
        }
        int i15 = i11 - i13;
        Object[] objArr2 = this.f7473d;
        i.k(objArr2, objArr2, i10 + i13, i11 + i10, this.f7474e);
        Object[] objArr3 = this.f7473d;
        int i16 = this.f7474e;
        bs.c.g(objArr3, i16 - i15, i16);
        if (i15 > 0) {
            x();
        }
        this.f7474e -= i15;
        return i15;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void p(int i10, Collection collection, int i11) {
        x();
        w(i10, i11);
        Iterator it = collection.iterator();
        for (int i12 = 0; i12 < i11; i12++) {
            this.f7473d[i10 + i12] = it.next();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void q(int i10, Object obj) {
        x();
        w(i10, 1);
        this.f7473d[i10] = obj;
    }

    private final void s() {
        if (!this.f7475i) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    private final boolean t(List list) {
        boolean h10;
        h10 = bs.c.h(this.f7473d, 0, this.f7474e, list);
        return h10;
    }

    private final void u(int i10) {
        if (i10 >= 0) {
            Object[] objArr = this.f7473d;
            if (i10 > objArr.length) {
                this.f7473d = bs.c.e(this.f7473d, kotlin.collections.d.f32021d.e(objArr.length, i10));
                return;
            }
            return;
        }
        throw new OutOfMemoryError();
    }

    private final void v(int i10) {
        u(this.f7474e + i10);
    }

    private final void w(int i10, int i11) {
        v(i11);
        Object[] objArr = this.f7473d;
        i.k(objArr, objArr, i10 + i11, i10, this.f7474e);
        this.f7474e += i11;
    }

    private final void x() {
        ((AbstractList) this).modCount++;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        s();
        q(this.f7474e, obj);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        int size = elements.size();
        p(this.f7474e, elements, size);
        return size > 0;
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f7474e;
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        s();
        kotlin.collections.d.f32021d.b(i10, this.f7474e);
        return A(i10);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        s();
        B(0, this.f7474e);
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
        kotlin.collections.d.f32021d.b(i10, this.f7474e);
        return this.f7473d[i10];
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public int hashCode() {
        int i10;
        i10 = bs.c.i(this.f7473d, 0, this.f7474e);
        return i10;
    }

    @Override // java.util.AbstractList, java.util.List
    public int indexOf(Object obj) {
        for (int i10 = 0; i10 < this.f7474e; i10++) {
            if (Intrinsics.areEqual(this.f7473d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean isEmpty() {
        if (this.f7474e == 0) {
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
        for (int i10 = this.f7474e - 1; i10 >= 0; i10--) {
            if (Intrinsics.areEqual(this.f7473d[i10], obj)) {
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
        this.f7475i = true;
        if (this.f7474e > 0) {
            return this;
        }
        return f7472p;
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
        if (C(0, this.f7474e, elements, false) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean retainAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        if (C(0, this.f7474e, elements, true) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        s();
        kotlin.collections.d.f32021d.b(i10, this.f7474e);
        Object[] objArr = this.f7473d;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        return obj2;
    }

    @Override // java.util.AbstractList, java.util.List
    public List subList(int i10, int i11) {
        kotlin.collections.d.f32021d.d(i10, i11, this.f7474e);
        return new a(this.f7473d, i10, i11 - i10, null, this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        int length = array.length;
        int i10 = this.f7474e;
        if (length < i10) {
            Object[] copyOfRange = Arrays.copyOfRange(this.f7473d, 0, i10, array.getClass());
            Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
            return copyOfRange;
        }
        i.k(this.f7473d, array, 0, 0, i10);
        return CollectionsKt.f(this.f7474e, array);
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String j10;
        j10 = bs.c.j(this.f7473d, 0, this.f7474e, this);
        return j10;
    }

    public b(int i10) {
        this.f7473d = bs.c.d(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator(int i10) {
        kotlin.collections.d.f32021d.c(i10, this.f7474e);
        return new c(this, i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        s();
        kotlin.collections.d.f32021d.c(i10, this.f7474e);
        q(i10, obj);
    }

    public /* synthetic */ b(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        kotlin.collections.d.f32021d.c(i10, this.f7474e);
        int size = elements.size();
        p(i10, elements, size);
        return size > 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray() {
        return i.r(this.f7473d, 0, this.f7474e);
    }
}
