package jr;

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
    private static final C0428b f32425o = new C0428b(null);

    /* renamed from: p  reason: collision with root package name */
    private static final b f32426p;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f32427d;

    /* renamed from: e  reason: collision with root package name */
    private int f32428e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f32429i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.collections.f implements List, RandomAccess, Serializable, KMutableList {

        /* renamed from: d  reason: collision with root package name */
        private Object[] f32430d;

        /* renamed from: e  reason: collision with root package name */
        private final int f32431e;

        /* renamed from: i  reason: collision with root package name */
        private int f32432i;

        /* renamed from: o  reason: collision with root package name */
        private final a f32433o;

        /* renamed from: p  reason: collision with root package name */
        private final b f32434p;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: jr.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0427a implements ListIterator, KMutableListIterator {

            /* renamed from: d  reason: collision with root package name */
            private final a f32435d;

            /* renamed from: e  reason: collision with root package name */
            private int f32436e;

            /* renamed from: i  reason: collision with root package name */
            private int f32437i;

            /* renamed from: o  reason: collision with root package name */
            private int f32438o;

            public C0427a(a list, int i10) {
                Intrinsics.checkNotNullParameter(list, "list");
                this.f32435d = list;
                this.f32436e = i10;
                this.f32437i = -1;
                this.f32438o = ((AbstractList) list).modCount;
            }

            private final void a() {
                if (((AbstractList) this.f32435d.f32434p).modCount == this.f32438o) {
                    return;
                }
                throw new ConcurrentModificationException();
            }

            @Override // java.util.ListIterator
            public void add(Object obj) {
                a();
                a aVar = this.f32435d;
                int i10 = this.f32436e;
                this.f32436e = i10 + 1;
                aVar.add(i10, obj);
                this.f32437i = -1;
                this.f32438o = ((AbstractList) this.f32435d).modCount;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public boolean hasNext() {
                if (this.f32436e < this.f32435d.f32432i) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator
            public boolean hasPrevious() {
                if (this.f32436e > 0) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public Object next() {
                a();
                if (this.f32436e < this.f32435d.f32432i) {
                    int i10 = this.f32436e;
                    this.f32436e = i10 + 1;
                    this.f32437i = i10;
                    return this.f32435d.f32430d[this.f32435d.f32431e + this.f32437i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int nextIndex() {
                return this.f32436e;
            }

            @Override // java.util.ListIterator
            public Object previous() {
                a();
                int i10 = this.f32436e;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f32436e = i11;
                    this.f32437i = i11;
                    return this.f32435d.f32430d[this.f32435d.f32431e + this.f32437i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int previousIndex() {
                return this.f32436e - 1;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public void remove() {
                a();
                int i10 = this.f32437i;
                if (i10 != -1) {
                    this.f32435d.remove(i10);
                    this.f32436e = this.f32437i;
                    this.f32437i = -1;
                    this.f32438o = ((AbstractList) this.f32435d).modCount;
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
            }

            @Override // java.util.ListIterator
            public void set(Object obj) {
                a();
                int i10 = this.f32437i;
                if (i10 != -1) {
                    this.f32435d.set(i10, obj);
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
            }
        }

        public a(Object[] backing, int i10, int i11, a aVar, b root) {
            Intrinsics.checkNotNullParameter(backing, "backing");
            Intrinsics.checkNotNullParameter(root, "root");
            this.f32430d = backing;
            this.f32431e = i10;
            this.f32432i = i11;
            this.f32433o = aVar;
            this.f32434p = root;
            ((AbstractList) this).modCount = ((AbstractList) root).modCount;
        }

        private final void i(int i10, Collection collection, int i11) {
            p();
            a aVar = this.f32433o;
            if (aVar == null) {
                this.f32434p.n(i10, collection, i11);
            } else {
                aVar.i(i10, collection, i11);
            }
            this.f32430d = this.f32434p.f32427d;
            this.f32432i += i11;
        }

        private final void j(int i10, Object obj) {
            p();
            a aVar = this.f32433o;
            if (aVar == null) {
                this.f32434p.o(i10, obj);
            } else {
                aVar.j(i10, obj);
            }
            this.f32430d = this.f32434p.f32427d;
            this.f32432i++;
        }

        private final void k() {
            if (((AbstractList) this.f32434p).modCount == ((AbstractList) this).modCount) {
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
            h10 = jr.c.h(this.f32430d, this.f32431e, this.f32432i, list);
            return h10;
        }

        private final boolean o() {
            return this.f32434p.f32429i;
        }

        private final void p() {
            ((AbstractList) this).modCount++;
        }

        private final Object q(int i10) {
            Object w10;
            p();
            a aVar = this.f32433o;
            if (aVar == null) {
                w10 = this.f32434p.w(i10);
            } else {
                w10 = aVar.q(i10);
            }
            this.f32432i--;
            return w10;
        }

        private final void r(int i10, int i11) {
            if (i11 > 0) {
                p();
            }
            a aVar = this.f32433o;
            if (aVar == null) {
                this.f32434p.x(i10, i11);
            } else {
                aVar.r(i10, i11);
            }
            this.f32432i -= i11;
        }

        private final int s(int i10, int i11, Collection collection, boolean z10) {
            int y10;
            a aVar = this.f32433o;
            if (aVar == null) {
                y10 = this.f32434p.y(i10, i11, collection, z10);
            } else {
                y10 = aVar.s(i10, i11, collection, z10);
            }
            if (y10 > 0) {
                p();
            }
            this.f32432i -= y10;
            return y10;
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean add(Object obj) {
            m();
            k();
            j(this.f32431e + this.f32432i, obj);
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean addAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            m();
            k();
            int size = elements.size();
            i(this.f32431e + this.f32432i, elements, size);
            return size > 0;
        }

        @Override // kotlin.collections.f
        public int b() {
            k();
            return this.f32432i;
        }

        @Override // kotlin.collections.f
        public Object c(int i10) {
            m();
            k();
            kotlin.collections.d.f33332d.b(i10, this.f32432i);
            return q(this.f32431e + i10);
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public void clear() {
            m();
            k();
            r(this.f32431e, this.f32432i);
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
            kotlin.collections.d.f33332d.b(i10, this.f32432i);
            return this.f32430d[this.f32431e + i10];
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public int hashCode() {
            int i10;
            k();
            i10 = jr.c.i(this.f32430d, this.f32431e, this.f32432i);
            return i10;
        }

        @Override // java.util.AbstractList, java.util.List
        public int indexOf(Object obj) {
            k();
            for (int i10 = 0; i10 < this.f32432i; i10++) {
                if (Intrinsics.areEqual(this.f32430d[this.f32431e + i10], obj)) {
                    return i10;
                }
            }
            return -1;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean isEmpty() {
            k();
            if (this.f32432i == 0) {
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
            for (int i10 = this.f32432i - 1; i10 >= 0; i10--) {
                if (Intrinsics.areEqual(this.f32430d[this.f32431e + i10], obj)) {
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
            if (s(this.f32431e, this.f32432i, elements, false) <= 0) {
                return false;
            }
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean retainAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            m();
            k();
            if (s(this.f32431e, this.f32432i, elements, true) > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object set(int i10, Object obj) {
            m();
            k();
            kotlin.collections.d.f33332d.b(i10, this.f32432i);
            Object[] objArr = this.f32430d;
            int i11 = this.f32431e;
            Object obj2 = objArr[i11 + i10];
            objArr[i11 + i10] = obj;
            return obj2;
        }

        @Override // java.util.AbstractList, java.util.List
        public List subList(int i10, int i11) {
            kotlin.collections.d.f33332d.d(i10, i11, this.f32432i);
            return new a(this.f32430d, this.f32431e + i10, i11 - i10, this, this.f32434p);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray(Object[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            k();
            int length = array.length;
            int i10 = this.f32432i;
            if (length < i10) {
                Object[] objArr = this.f32430d;
                int i11 = this.f32431e;
                Object[] copyOfRange = Arrays.copyOfRange(objArr, i11, i10 + i11, array.getClass());
                Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
                return copyOfRange;
            }
            Object[] objArr2 = this.f32430d;
            int i12 = this.f32431e;
            i.k(objArr2, array, 0, i12, i10 + i12);
            return CollectionsKt.f(this.f32432i, array);
        }

        @Override // java.util.AbstractCollection
        public String toString() {
            String j10;
            k();
            j10 = jr.c.j(this.f32430d, this.f32431e, this.f32432i, this);
            return j10;
        }

        @Override // java.util.AbstractList, java.util.List
        public ListIterator listIterator(int i10) {
            k();
            kotlin.collections.d.f33332d.c(i10, this.f32432i);
            return new C0427a(this, i10);
        }

        @Override // java.util.AbstractList, java.util.List
        public void add(int i10, Object obj) {
            m();
            k();
            kotlin.collections.d.f33332d.c(i10, this.f32432i);
            j(this.f32431e + i10, obj);
        }

        @Override // java.util.AbstractList, java.util.List
        public boolean addAll(int i10, Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            m();
            k();
            kotlin.collections.d.f33332d.c(i10, this.f32432i);
            int size = elements.size();
            i(this.f32431e + i10, elements, size);
            return size > 0;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray() {
            k();
            Object[] objArr = this.f32430d;
            int i10 = this.f32431e;
            return i.r(objArr, i10, this.f32432i + i10);
        }
    }

    /* renamed from: jr.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0428b {
        public /* synthetic */ C0428b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0428b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements ListIterator, KMutableListIterator {

        /* renamed from: d  reason: collision with root package name */
        private final b f32439d;

        /* renamed from: e  reason: collision with root package name */
        private int f32440e;

        /* renamed from: i  reason: collision with root package name */
        private int f32441i;

        /* renamed from: o  reason: collision with root package name */
        private int f32442o;

        public c(b list, int i10) {
            Intrinsics.checkNotNullParameter(list, "list");
            this.f32439d = list;
            this.f32440e = i10;
            this.f32441i = -1;
            this.f32442o = ((AbstractList) list).modCount;
        }

        private final void a() {
            if (((AbstractList) this.f32439d).modCount == this.f32442o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            a();
            b bVar = this.f32439d;
            int i10 = this.f32440e;
            this.f32440e = i10 + 1;
            bVar.add(i10, obj);
            this.f32441i = -1;
            this.f32442o = ((AbstractList) this.f32439d).modCount;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            if (this.f32440e < this.f32439d.f32428e) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            if (this.f32440e > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public Object next() {
            a();
            if (this.f32440e < this.f32439d.f32428e) {
                int i10 = this.f32440e;
                this.f32440e = i10 + 1;
                this.f32441i = i10;
                return this.f32439d.f32427d[this.f32441i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f32440e;
        }

        @Override // java.util.ListIterator
        public Object previous() {
            a();
            int i10 = this.f32440e;
            if (i10 > 0) {
                int i11 = i10 - 1;
                this.f32440e = i11;
                this.f32441i = i11;
                return this.f32439d.f32427d[this.f32441i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f32440e - 1;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            a();
            int i10 = this.f32441i;
            if (i10 != -1) {
                this.f32439d.remove(i10);
                this.f32440e = this.f32441i;
                this.f32441i = -1;
                this.f32442o = ((AbstractList) this.f32439d).modCount;
                return;
            }
            throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            a();
            int i10 = this.f32441i;
            if (i10 != -1) {
                this.f32439d.set(i10, obj);
                return;
            }
            throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
        }
    }

    static {
        b bVar = new b(0);
        bVar.f32429i = true;
        f32426p = bVar;
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
            this.f32427d[i10 + i12] = it.next();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void o(int i10, Object obj) {
        v();
        u(i10, 1);
        this.f32427d[i10] = obj;
    }

    private final void q() {
        if (!this.f32429i) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    private final boolean r(List list) {
        boolean h10;
        h10 = jr.c.h(this.f32427d, 0, this.f32428e, list);
        return h10;
    }

    private final void s(int i10) {
        if (i10 >= 0) {
            Object[] objArr = this.f32427d;
            if (i10 > objArr.length) {
                this.f32427d = jr.c.e(this.f32427d, kotlin.collections.d.f33332d.e(objArr.length, i10));
                return;
            }
            return;
        }
        throw new OutOfMemoryError();
    }

    private final void t(int i10) {
        s(this.f32428e + i10);
    }

    private final void u(int i10, int i11) {
        t(i11);
        Object[] objArr = this.f32427d;
        i.k(objArr, objArr, i10 + i11, i10, this.f32428e);
        this.f32428e += i11;
    }

    private final void v() {
        ((AbstractList) this).modCount++;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object w(int i10) {
        v();
        Object[] objArr = this.f32427d;
        Object obj = objArr[i10];
        i.k(objArr, objArr, i10, i10 + 1, this.f32428e);
        jr.c.f(this.f32427d, this.f32428e - 1);
        this.f32428e--;
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void x(int i10, int i11) {
        if (i11 > 0) {
            v();
        }
        Object[] objArr = this.f32427d;
        i.k(objArr, objArr, i10, i10 + i11, this.f32428e);
        Object[] objArr2 = this.f32427d;
        int i12 = this.f32428e;
        jr.c.g(objArr2, i12 - i11, i12);
        this.f32428e -= i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int y(int i10, int i11, Collection collection, boolean z10) {
        int i12 = 0;
        int i13 = 0;
        while (i12 < i11) {
            int i14 = i10 + i12;
            if (collection.contains(this.f32427d[i14]) == z10) {
                Object[] objArr = this.f32427d;
                i12++;
                objArr[i13 + i10] = objArr[i14];
                i13++;
            } else {
                i12++;
            }
        }
        int i15 = i11 - i13;
        Object[] objArr2 = this.f32427d;
        i.k(objArr2, objArr2, i10 + i13, i11 + i10, this.f32428e);
        Object[] objArr3 = this.f32427d;
        int i16 = this.f32428e;
        jr.c.g(objArr3, i16 - i15, i16);
        if (i15 > 0) {
            v();
        }
        this.f32428e -= i15;
        return i15;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        q();
        o(this.f32428e, obj);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        q();
        int size = elements.size();
        n(this.f32428e, elements, size);
        return size > 0;
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f32428e;
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        q();
        kotlin.collections.d.f33332d.b(i10, this.f32428e);
        return w(i10);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        q();
        x(0, this.f32428e);
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
        kotlin.collections.d.f33332d.b(i10, this.f32428e);
        return this.f32427d[i10];
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public int hashCode() {
        int i10;
        i10 = jr.c.i(this.f32427d, 0, this.f32428e);
        return i10;
    }

    @Override // java.util.AbstractList, java.util.List
    public int indexOf(Object obj) {
        for (int i10 = 0; i10 < this.f32428e; i10++) {
            if (Intrinsics.areEqual(this.f32427d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean isEmpty() {
        if (this.f32428e == 0) {
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
        for (int i10 = this.f32428e - 1; i10 >= 0; i10--) {
            if (Intrinsics.areEqual(this.f32427d[i10], obj)) {
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
        this.f32429i = true;
        if (this.f32428e > 0) {
            return this;
        }
        return f32426p;
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
        if (y(0, this.f32428e, elements, false) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean retainAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        q();
        if (y(0, this.f32428e, elements, true) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        q();
        kotlin.collections.d.f33332d.b(i10, this.f32428e);
        Object[] objArr = this.f32427d;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        return obj2;
    }

    @Override // java.util.AbstractList, java.util.List
    public List subList(int i10, int i11) {
        kotlin.collections.d.f33332d.d(i10, i11, this.f32428e);
        return new a(this.f32427d, i10, i11 - i10, null, this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        int length = array.length;
        int i10 = this.f32428e;
        if (length < i10) {
            Object[] copyOfRange = Arrays.copyOfRange(this.f32427d, 0, i10, array.getClass());
            Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
            return copyOfRange;
        }
        i.k(this.f32427d, array, 0, 0, i10);
        return CollectionsKt.f(this.f32428e, array);
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String j10;
        j10 = jr.c.j(this.f32427d, 0, this.f32428e, this);
        return j10;
    }

    public b(int i10) {
        this.f32427d = jr.c.d(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator(int i10) {
        kotlin.collections.d.f33332d.c(i10, this.f32428e);
        return new c(this, i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        q();
        kotlin.collections.d.f33332d.c(i10, this.f32428e);
        o(i10, obj);
    }

    public /* synthetic */ b(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        q();
        kotlin.collections.d.f33332d.c(i10, this.f32428e);
        int size = elements.size();
        n(i10, elements, size);
        return size > 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray() {
        return i.r(this.f32427d, 0, this.f32428e);
    }
}
