package kr;

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
    private static final C0459b f36344o = new C0459b(null);

    /* renamed from: p  reason: collision with root package name */
    private static final b f36345p;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f36346d;

    /* renamed from: e  reason: collision with root package name */
    private int f36347e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f36348i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.collections.f implements List, RandomAccess, Serializable, KMutableList {

        /* renamed from: d  reason: collision with root package name */
        private Object[] f36349d;

        /* renamed from: e  reason: collision with root package name */
        private final int f36350e;

        /* renamed from: i  reason: collision with root package name */
        private int f36351i;

        /* renamed from: o  reason: collision with root package name */
        private final a f36352o;

        /* renamed from: p  reason: collision with root package name */
        private final b f36353p;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: kr.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0458a implements ListIterator, KMutableListIterator {

            /* renamed from: d  reason: collision with root package name */
            private final a f36354d;

            /* renamed from: e  reason: collision with root package name */
            private int f36355e;

            /* renamed from: i  reason: collision with root package name */
            private int f36356i;

            /* renamed from: o  reason: collision with root package name */
            private int f36357o;

            public C0458a(a list, int i10) {
                Intrinsics.checkNotNullParameter(list, "list");
                this.f36354d = list;
                this.f36355e = i10;
                this.f36356i = -1;
                this.f36357o = ((AbstractList) list).modCount;
            }

            private final void a() {
                if (((AbstractList) this.f36354d.f36353p).modCount == this.f36357o) {
                    return;
                }
                throw new ConcurrentModificationException();
            }

            @Override // java.util.ListIterator
            public void add(Object obj) {
                a();
                a aVar = this.f36354d;
                int i10 = this.f36355e;
                this.f36355e = i10 + 1;
                aVar.add(i10, obj);
                this.f36356i = -1;
                this.f36357o = ((AbstractList) this.f36354d).modCount;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public boolean hasNext() {
                if (this.f36355e < this.f36354d.f36351i) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator
            public boolean hasPrevious() {
                if (this.f36355e > 0) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public Object next() {
                a();
                if (this.f36355e < this.f36354d.f36351i) {
                    int i10 = this.f36355e;
                    this.f36355e = i10 + 1;
                    this.f36356i = i10;
                    return this.f36354d.f36349d[this.f36354d.f36350e + this.f36356i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int nextIndex() {
                return this.f36355e;
            }

            @Override // java.util.ListIterator
            public Object previous() {
                a();
                int i10 = this.f36355e;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f36355e = i11;
                    this.f36356i = i11;
                    return this.f36354d.f36349d[this.f36354d.f36350e + this.f36356i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int previousIndex() {
                return this.f36355e - 1;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public void remove() {
                a();
                int i10 = this.f36356i;
                if (i10 != -1) {
                    this.f36354d.remove(i10);
                    this.f36355e = this.f36356i;
                    this.f36356i = -1;
                    this.f36357o = ((AbstractList) this.f36354d).modCount;
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
            }

            @Override // java.util.ListIterator
            public void set(Object obj) {
                a();
                int i10 = this.f36356i;
                if (i10 != -1) {
                    this.f36354d.set(i10, obj);
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
            }
        }

        public a(Object[] backing, int i10, int i11, a aVar, b root) {
            Intrinsics.checkNotNullParameter(backing, "backing");
            Intrinsics.checkNotNullParameter(root, "root");
            this.f36349d = backing;
            this.f36350e = i10;
            this.f36351i = i11;
            this.f36352o = aVar;
            this.f36353p = root;
            ((AbstractList) this).modCount = ((AbstractList) root).modCount;
        }

        private final void i(int i10, Collection collection, int i11) {
            p();
            a aVar = this.f36352o;
            if (aVar == null) {
                this.f36353p.n(i10, collection, i11);
            } else {
                aVar.i(i10, collection, i11);
            }
            this.f36349d = this.f36353p.f36346d;
            this.f36351i += i11;
        }

        private final void j(int i10, Object obj) {
            p();
            a aVar = this.f36352o;
            if (aVar == null) {
                this.f36353p.o(i10, obj);
            } else {
                aVar.j(i10, obj);
            }
            this.f36349d = this.f36353p.f36346d;
            this.f36351i++;
        }

        private final void k() {
            if (((AbstractList) this.f36353p).modCount == ((AbstractList) this).modCount) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        private final void m() {
            if (!o()) {
                return;
            }
            throw new UnsupportedOperationException();
        }

        private final boolean n(List list) {
            boolean h10;
            h10 = kr.c.h(this.f36349d, this.f36350e, this.f36351i, list);
            return h10;
        }

        private final boolean o() {
            return this.f36353p.f36348i;
        }

        private final void p() {
            ((AbstractList) this).modCount++;
        }

        private final Object q(int i10) {
            Object w10;
            p();
            a aVar = this.f36352o;
            if (aVar == null) {
                w10 = this.f36353p.w(i10);
            } else {
                w10 = aVar.q(i10);
            }
            this.f36351i--;
            return w10;
        }

        private final void r(int i10, int i11) {
            if (i11 > 0) {
                p();
            }
            a aVar = this.f36352o;
            if (aVar == null) {
                this.f36353p.x(i10, i11);
            } else {
                aVar.r(i10, i11);
            }
            this.f36351i -= i11;
        }

        private final int s(int i10, int i11, Collection collection, boolean z10) {
            int y10;
            a aVar = this.f36352o;
            if (aVar == null) {
                y10 = this.f36353p.y(i10, i11, collection, z10);
            } else {
                y10 = aVar.s(i10, i11, collection, z10);
            }
            if (y10 > 0) {
                p();
            }
            this.f36351i -= y10;
            return y10;
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean add(Object obj) {
            m();
            k();
            j(this.f36350e + this.f36351i, obj);
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean addAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            m();
            k();
            int size = elements.size();
            i(this.f36350e + this.f36351i, elements, size);
            return size > 0;
        }

        @Override // kotlin.collections.f
        public int b() {
            k();
            return this.f36351i;
        }

        @Override // kotlin.collections.f
        public Object c(int i10) {
            m();
            k();
            kotlin.collections.d.f33108d.b(i10, this.f36351i);
            return q(this.f36350e + i10);
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public void clear() {
            m();
            k();
            r(this.f36350e, this.f36351i);
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public boolean equals(Object obj) {
            k();
            if (obj != this) {
                if (!(obj instanceof List) || !n((List) obj)) {
                    return false;
                }
                return true;
            }
            return true;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object get(int i10) {
            k();
            kotlin.collections.d.f33108d.b(i10, this.f36351i);
            return this.f36349d[this.f36350e + i10];
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public int hashCode() {
            int i10;
            k();
            i10 = kr.c.i(this.f36349d, this.f36350e, this.f36351i);
            return i10;
        }

        @Override // java.util.AbstractList, java.util.List
        public int indexOf(Object obj) {
            k();
            for (int i10 = 0; i10 < this.f36351i; i10++) {
                if (Intrinsics.areEqual(this.f36349d[this.f36350e + i10], obj)) {
                    return i10;
                }
            }
            return -1;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean isEmpty() {
            k();
            if (this.f36351i == 0) {
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
            k();
            for (int i10 = this.f36351i - 1; i10 >= 0; i10--) {
                if (Intrinsics.areEqual(this.f36349d[this.f36350e + i10], obj)) {
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
            m();
            k();
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
            m();
            k();
            if (s(this.f36350e, this.f36351i, elements, false) <= 0) {
                return false;
            }
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean retainAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            m();
            k();
            if (s(this.f36350e, this.f36351i, elements, true) > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object set(int i10, Object obj) {
            m();
            k();
            kotlin.collections.d.f33108d.b(i10, this.f36351i);
            Object[] objArr = this.f36349d;
            int i11 = this.f36350e;
            Object obj2 = objArr[i11 + i10];
            objArr[i11 + i10] = obj;
            return obj2;
        }

        @Override // java.util.AbstractList, java.util.List
        public List subList(int i10, int i11) {
            kotlin.collections.d.f33108d.d(i10, i11, this.f36351i);
            return new a(this.f36349d, this.f36350e + i10, i11 - i10, this, this.f36353p);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray(Object[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            k();
            int length = array.length;
            int i10 = this.f36351i;
            if (length < i10) {
                Object[] objArr = this.f36349d;
                int i11 = this.f36350e;
                Object[] copyOfRange = Arrays.copyOfRange(objArr, i11, i10 + i11, array.getClass());
                Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
                return copyOfRange;
            }
            Object[] objArr2 = this.f36349d;
            int i12 = this.f36350e;
            i.k(objArr2, array, 0, i12, i10 + i12);
            return CollectionsKt.f(this.f36351i, array);
        }

        @Override // java.util.AbstractCollection
        public String toString() {
            String j10;
            k();
            j10 = kr.c.j(this.f36349d, this.f36350e, this.f36351i, this);
            return j10;
        }

        @Override // java.util.AbstractList, java.util.List
        public ListIterator listIterator(int i10) {
            k();
            kotlin.collections.d.f33108d.c(i10, this.f36351i);
            return new C0458a(this, i10);
        }

        @Override // java.util.AbstractList, java.util.List
        public void add(int i10, Object obj) {
            m();
            k();
            kotlin.collections.d.f33108d.c(i10, this.f36351i);
            j(this.f36350e + i10, obj);
        }

        @Override // java.util.AbstractList, java.util.List
        public boolean addAll(int i10, Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            m();
            k();
            kotlin.collections.d.f33108d.c(i10, this.f36351i);
            int size = elements.size();
            i(this.f36350e + i10, elements, size);
            return size > 0;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray() {
            k();
            Object[] objArr = this.f36349d;
            int i10 = this.f36350e;
            return i.r(objArr, i10, this.f36351i + i10);
        }
    }

    /* renamed from: kr.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0459b {
        public /* synthetic */ C0459b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0459b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements ListIterator, KMutableListIterator {

        /* renamed from: d  reason: collision with root package name */
        private final b f36358d;

        /* renamed from: e  reason: collision with root package name */
        private int f36359e;

        /* renamed from: i  reason: collision with root package name */
        private int f36360i;

        /* renamed from: o  reason: collision with root package name */
        private int f36361o;

        public c(b list, int i10) {
            Intrinsics.checkNotNullParameter(list, "list");
            this.f36358d = list;
            this.f36359e = i10;
            this.f36360i = -1;
            this.f36361o = ((AbstractList) list).modCount;
        }

        private final void a() {
            if (((AbstractList) this.f36358d).modCount == this.f36361o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            a();
            b bVar = this.f36358d;
            int i10 = this.f36359e;
            this.f36359e = i10 + 1;
            bVar.add(i10, obj);
            this.f36360i = -1;
            this.f36361o = ((AbstractList) this.f36358d).modCount;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            if (this.f36359e < this.f36358d.f36347e) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            if (this.f36359e > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public Object next() {
            a();
            if (this.f36359e < this.f36358d.f36347e) {
                int i10 = this.f36359e;
                this.f36359e = i10 + 1;
                this.f36360i = i10;
                return this.f36358d.f36346d[this.f36360i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f36359e;
        }

        @Override // java.util.ListIterator
        public Object previous() {
            a();
            int i10 = this.f36359e;
            if (i10 > 0) {
                int i11 = i10 - 1;
                this.f36359e = i11;
                this.f36360i = i11;
                return this.f36358d.f36346d[this.f36360i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f36359e - 1;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            a();
            int i10 = this.f36360i;
            if (i10 != -1) {
                this.f36358d.remove(i10);
                this.f36359e = this.f36360i;
                this.f36360i = -1;
                this.f36361o = ((AbstractList) this.f36358d).modCount;
                return;
            }
            throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            a();
            int i10 = this.f36360i;
            if (i10 != -1) {
                this.f36358d.set(i10, obj);
                return;
            }
            throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
        }
    }

    static {
        b bVar = new b(0);
        bVar.f36348i = true;
        f36345p = bVar;
    }

    public b() {
        this(0, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void n(int i10, Collection collection, int i11) {
        v();
        u(i10, i11);
        Iterator it = collection.iterator();
        for (int i12 = 0; i12 < i11; i12++) {
            this.f36346d[i10 + i12] = it.next();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void o(int i10, Object obj) {
        v();
        u(i10, 1);
        this.f36346d[i10] = obj;
    }

    private final void q() {
        if (!this.f36348i) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    private final boolean r(List list) {
        boolean h10;
        h10 = kr.c.h(this.f36346d, 0, this.f36347e, list);
        return h10;
    }

    private final void s(int i10) {
        if (i10 >= 0) {
            Object[] objArr = this.f36346d;
            if (i10 > objArr.length) {
                this.f36346d = kr.c.e(this.f36346d, kotlin.collections.d.f33108d.e(objArr.length, i10));
                return;
            }
            return;
        }
        throw new OutOfMemoryError();
    }

    private final void t(int i10) {
        s(this.f36347e + i10);
    }

    private final void u(int i10, int i11) {
        t(i11);
        Object[] objArr = this.f36346d;
        i.k(objArr, objArr, i10 + i11, i10, this.f36347e);
        this.f36347e += i11;
    }

    private final void v() {
        ((AbstractList) this).modCount++;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object w(int i10) {
        v();
        Object[] objArr = this.f36346d;
        Object obj = objArr[i10];
        i.k(objArr, objArr, i10, i10 + 1, this.f36347e);
        kr.c.f(this.f36346d, this.f36347e - 1);
        this.f36347e--;
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void x(int i10, int i11) {
        if (i11 > 0) {
            v();
        }
        Object[] objArr = this.f36346d;
        i.k(objArr, objArr, i10, i10 + i11, this.f36347e);
        Object[] objArr2 = this.f36346d;
        int i12 = this.f36347e;
        kr.c.g(objArr2, i12 - i11, i12);
        this.f36347e -= i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int y(int i10, int i11, Collection collection, boolean z10) {
        int i12 = 0;
        int i13 = 0;
        while (i12 < i11) {
            int i14 = i10 + i12;
            if (collection.contains(this.f36346d[i14]) == z10) {
                Object[] objArr = this.f36346d;
                i12++;
                objArr[i13 + i10] = objArr[i14];
                i13++;
            } else {
                i12++;
            }
        }
        int i15 = i11 - i13;
        Object[] objArr2 = this.f36346d;
        i.k(objArr2, objArr2, i10 + i13, i11 + i10, this.f36347e);
        Object[] objArr3 = this.f36346d;
        int i16 = this.f36347e;
        kr.c.g(objArr3, i16 - i15, i16);
        if (i15 > 0) {
            v();
        }
        this.f36347e -= i15;
        return i15;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        q();
        o(this.f36347e, obj);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        q();
        int size = elements.size();
        n(this.f36347e, elements, size);
        return size > 0;
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f36347e;
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        q();
        kotlin.collections.d.f33108d.b(i10, this.f36347e);
        return w(i10);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        q();
        x(0, this.f36347e);
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public boolean equals(Object obj) {
        if (obj != this) {
            if (!(obj instanceof List) || !r((List) obj)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object get(int i10) {
        kotlin.collections.d.f33108d.b(i10, this.f36347e);
        return this.f36346d[i10];
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public int hashCode() {
        int i10;
        i10 = kr.c.i(this.f36346d, 0, this.f36347e);
        return i10;
    }

    @Override // java.util.AbstractList, java.util.List
    public int indexOf(Object obj) {
        for (int i10 = 0; i10 < this.f36347e; i10++) {
            if (Intrinsics.areEqual(this.f36346d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean isEmpty() {
        if (this.f36347e == 0) {
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
        for (int i10 = this.f36347e - 1; i10 >= 0; i10--) {
            if (Intrinsics.areEqual(this.f36346d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator() {
        return listIterator(0);
    }

    public final List p() {
        q();
        this.f36348i = true;
        if (this.f36347e > 0) {
            return this;
        }
        return f36345p;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean remove(Object obj) {
        q();
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
        q();
        if (y(0, this.f36347e, elements, false) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean retainAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        q();
        if (y(0, this.f36347e, elements, true) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        q();
        kotlin.collections.d.f33108d.b(i10, this.f36347e);
        Object[] objArr = this.f36346d;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        return obj2;
    }

    @Override // java.util.AbstractList, java.util.List
    public List subList(int i10, int i11) {
        kotlin.collections.d.f33108d.d(i10, i11, this.f36347e);
        return new a(this.f36346d, i10, i11 - i10, null, this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        int length = array.length;
        int i10 = this.f36347e;
        if (length < i10) {
            Object[] copyOfRange = Arrays.copyOfRange(this.f36346d, 0, i10, array.getClass());
            Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
            return copyOfRange;
        }
        i.k(this.f36346d, array, 0, 0, i10);
        return CollectionsKt.f(this.f36347e, array);
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String j10;
        j10 = kr.c.j(this.f36346d, 0, this.f36347e, this);
        return j10;
    }

    public b(int i10) {
        this.f36346d = kr.c.d(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator(int i10) {
        kotlin.collections.d.f33108d.c(i10, this.f36347e);
        return new c(this, i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        q();
        kotlin.collections.d.f33108d.c(i10, this.f36347e);
        o(i10, obj);
    }

    public /* synthetic */ b(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        q();
        kotlin.collections.d.f33108d.c(i10, this.f36347e);
        int size = elements.size();
        n(i10, elements, size);
        return size > 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray() {
        return i.r(this.f36346d, 0, this.f36347e);
    }
}
