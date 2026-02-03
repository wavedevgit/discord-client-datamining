package mr;

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
    private static final C0492b f39071o = new C0492b(null);

    /* renamed from: p  reason: collision with root package name */
    private static final b f39072p;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f39073d;

    /* renamed from: e  reason: collision with root package name */
    private int f39074e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f39075i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.collections.f implements List, RandomAccess, Serializable, KMutableList {

        /* renamed from: d  reason: collision with root package name */
        private Object[] f39076d;

        /* renamed from: e  reason: collision with root package name */
        private final int f39077e;

        /* renamed from: i  reason: collision with root package name */
        private int f39078i;

        /* renamed from: o  reason: collision with root package name */
        private final a f39079o;

        /* renamed from: p  reason: collision with root package name */
        private final b f39080p;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: mr.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0491a implements ListIterator, KMutableListIterator {

            /* renamed from: d  reason: collision with root package name */
            private final a f39081d;

            /* renamed from: e  reason: collision with root package name */
            private int f39082e;

            /* renamed from: i  reason: collision with root package name */
            private int f39083i;

            /* renamed from: o  reason: collision with root package name */
            private int f39084o;

            public C0491a(a list, int i10) {
                Intrinsics.checkNotNullParameter(list, "list");
                this.f39081d = list;
                this.f39082e = i10;
                this.f39083i = -1;
                this.f39084o = ((AbstractList) list).modCount;
            }

            private final void a() {
                if (((AbstractList) this.f39081d.f39080p).modCount == this.f39084o) {
                    return;
                }
                throw new ConcurrentModificationException();
            }

            @Override // java.util.ListIterator
            public void add(Object obj) {
                a();
                a aVar = this.f39081d;
                int i10 = this.f39082e;
                this.f39082e = i10 + 1;
                aVar.add(i10, obj);
                this.f39083i = -1;
                this.f39084o = ((AbstractList) this.f39081d).modCount;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public boolean hasNext() {
                if (this.f39082e < this.f39081d.f39078i) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator
            public boolean hasPrevious() {
                if (this.f39082e > 0) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public Object next() {
                a();
                if (this.f39082e < this.f39081d.f39078i) {
                    int i10 = this.f39082e;
                    this.f39082e = i10 + 1;
                    this.f39083i = i10;
                    return this.f39081d.f39076d[this.f39081d.f39077e + this.f39083i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int nextIndex() {
                return this.f39082e;
            }

            @Override // java.util.ListIterator
            public Object previous() {
                a();
                int i10 = this.f39082e;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f39082e = i11;
                    this.f39083i = i11;
                    return this.f39081d.f39076d[this.f39081d.f39077e + this.f39083i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int previousIndex() {
                return this.f39082e - 1;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public void remove() {
                a();
                int i10 = this.f39083i;
                if (i10 != -1) {
                    this.f39081d.remove(i10);
                    this.f39082e = this.f39083i;
                    this.f39083i = -1;
                    this.f39084o = ((AbstractList) this.f39081d).modCount;
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
            }

            @Override // java.util.ListIterator
            public void set(Object obj) {
                a();
                int i10 = this.f39083i;
                if (i10 != -1) {
                    this.f39081d.set(i10, obj);
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
            }
        }

        public a(Object[] backing, int i10, int i11, a aVar, b root) {
            Intrinsics.checkNotNullParameter(backing, "backing");
            Intrinsics.checkNotNullParameter(root, "root");
            this.f39076d = backing;
            this.f39077e = i10;
            this.f39078i = i11;
            this.f39079o = aVar;
            this.f39080p = root;
            ((AbstractList) this).modCount = ((AbstractList) root).modCount;
        }

        private final void i(int i10, Collection collection, int i11) {
            p();
            a aVar = this.f39079o;
            if (aVar == null) {
                this.f39080p.n(i10, collection, i11);
            } else {
                aVar.i(i10, collection, i11);
            }
            this.f39076d = this.f39080p.f39073d;
            this.f39078i += i11;
        }

        private final void j(int i10, Object obj) {
            p();
            a aVar = this.f39079o;
            if (aVar == null) {
                this.f39080p.o(i10, obj);
            } else {
                aVar.j(i10, obj);
            }
            this.f39076d = this.f39080p.f39073d;
            this.f39078i++;
        }

        private final void k() {
            if (((AbstractList) this.f39080p).modCount == ((AbstractList) this).modCount) {
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
            h10 = mr.c.h(this.f39076d, this.f39077e, this.f39078i, list);
            return h10;
        }

        private final boolean o() {
            return this.f39080p.f39075i;
        }

        private final void p() {
            ((AbstractList) this).modCount++;
        }

        private final Object q(int i10) {
            Object w10;
            p();
            a aVar = this.f39079o;
            if (aVar == null) {
                w10 = this.f39080p.w(i10);
            } else {
                w10 = aVar.q(i10);
            }
            this.f39078i--;
            return w10;
        }

        private final void r(int i10, int i11) {
            if (i11 > 0) {
                p();
            }
            a aVar = this.f39079o;
            if (aVar == null) {
                this.f39080p.x(i10, i11);
            } else {
                aVar.r(i10, i11);
            }
            this.f39078i -= i11;
        }

        private final int s(int i10, int i11, Collection collection, boolean z10) {
            int y10;
            a aVar = this.f39079o;
            if (aVar == null) {
                y10 = this.f39080p.y(i10, i11, collection, z10);
            } else {
                y10 = aVar.s(i10, i11, collection, z10);
            }
            if (y10 > 0) {
                p();
            }
            this.f39078i -= y10;
            return y10;
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean add(Object obj) {
            m();
            k();
            j(this.f39077e + this.f39078i, obj);
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean addAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            m();
            k();
            int size = elements.size();
            i(this.f39077e + this.f39078i, elements, size);
            return size > 0;
        }

        @Override // kotlin.collections.f
        public int b() {
            k();
            return this.f39078i;
        }

        @Override // kotlin.collections.f
        public Object c(int i10) {
            m();
            k();
            kotlin.collections.d.f32498d.b(i10, this.f39078i);
            return q(this.f39077e + i10);
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public void clear() {
            m();
            k();
            r(this.f39077e, this.f39078i);
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
            kotlin.collections.d.f32498d.b(i10, this.f39078i);
            return this.f39076d[this.f39077e + i10];
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public int hashCode() {
            int i10;
            k();
            i10 = mr.c.i(this.f39076d, this.f39077e, this.f39078i);
            return i10;
        }

        @Override // java.util.AbstractList, java.util.List
        public int indexOf(Object obj) {
            k();
            for (int i10 = 0; i10 < this.f39078i; i10++) {
                if (Intrinsics.areEqual(this.f39076d[this.f39077e + i10], obj)) {
                    return i10;
                }
            }
            return -1;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean isEmpty() {
            k();
            if (this.f39078i == 0) {
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
            for (int i10 = this.f39078i - 1; i10 >= 0; i10--) {
                if (Intrinsics.areEqual(this.f39076d[this.f39077e + i10], obj)) {
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
            if (s(this.f39077e, this.f39078i, elements, false) <= 0) {
                return false;
            }
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean retainAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            m();
            k();
            if (s(this.f39077e, this.f39078i, elements, true) > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object set(int i10, Object obj) {
            m();
            k();
            kotlin.collections.d.f32498d.b(i10, this.f39078i);
            Object[] objArr = this.f39076d;
            int i11 = this.f39077e;
            Object obj2 = objArr[i11 + i10];
            objArr[i11 + i10] = obj;
            return obj2;
        }

        @Override // java.util.AbstractList, java.util.List
        public List subList(int i10, int i11) {
            kotlin.collections.d.f32498d.d(i10, i11, this.f39078i);
            return new a(this.f39076d, this.f39077e + i10, i11 - i10, this, this.f39080p);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray(Object[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            k();
            int length = array.length;
            int i10 = this.f39078i;
            if (length < i10) {
                Object[] objArr = this.f39076d;
                int i11 = this.f39077e;
                Object[] copyOfRange = Arrays.copyOfRange(objArr, i11, i10 + i11, array.getClass());
                Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
                return copyOfRange;
            }
            Object[] objArr2 = this.f39076d;
            int i12 = this.f39077e;
            i.k(objArr2, array, 0, i12, i10 + i12);
            return CollectionsKt.f(this.f39078i, array);
        }

        @Override // java.util.AbstractCollection
        public String toString() {
            String j10;
            k();
            j10 = mr.c.j(this.f39076d, this.f39077e, this.f39078i, this);
            return j10;
        }

        @Override // java.util.AbstractList, java.util.List
        public ListIterator listIterator(int i10) {
            k();
            kotlin.collections.d.f32498d.c(i10, this.f39078i);
            return new C0491a(this, i10);
        }

        @Override // java.util.AbstractList, java.util.List
        public void add(int i10, Object obj) {
            m();
            k();
            kotlin.collections.d.f32498d.c(i10, this.f39078i);
            j(this.f39077e + i10, obj);
        }

        @Override // java.util.AbstractList, java.util.List
        public boolean addAll(int i10, Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            m();
            k();
            kotlin.collections.d.f32498d.c(i10, this.f39078i);
            int size = elements.size();
            i(this.f39077e + i10, elements, size);
            return size > 0;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray() {
            k();
            Object[] objArr = this.f39076d;
            int i10 = this.f39077e;
            return i.r(objArr, i10, this.f39078i + i10);
        }
    }

    /* renamed from: mr.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0492b {
        public /* synthetic */ C0492b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0492b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements ListIterator, KMutableListIterator {

        /* renamed from: d  reason: collision with root package name */
        private final b f39085d;

        /* renamed from: e  reason: collision with root package name */
        private int f39086e;

        /* renamed from: i  reason: collision with root package name */
        private int f39087i;

        /* renamed from: o  reason: collision with root package name */
        private int f39088o;

        public c(b list, int i10) {
            Intrinsics.checkNotNullParameter(list, "list");
            this.f39085d = list;
            this.f39086e = i10;
            this.f39087i = -1;
            this.f39088o = ((AbstractList) list).modCount;
        }

        private final void a() {
            if (((AbstractList) this.f39085d).modCount == this.f39088o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            a();
            b bVar = this.f39085d;
            int i10 = this.f39086e;
            this.f39086e = i10 + 1;
            bVar.add(i10, obj);
            this.f39087i = -1;
            this.f39088o = ((AbstractList) this.f39085d).modCount;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            if (this.f39086e < this.f39085d.f39074e) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            if (this.f39086e > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public Object next() {
            a();
            if (this.f39086e < this.f39085d.f39074e) {
                int i10 = this.f39086e;
                this.f39086e = i10 + 1;
                this.f39087i = i10;
                return this.f39085d.f39073d[this.f39087i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f39086e;
        }

        @Override // java.util.ListIterator
        public Object previous() {
            a();
            int i10 = this.f39086e;
            if (i10 > 0) {
                int i11 = i10 - 1;
                this.f39086e = i11;
                this.f39087i = i11;
                return this.f39085d.f39073d[this.f39087i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f39086e - 1;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            a();
            int i10 = this.f39087i;
            if (i10 != -1) {
                this.f39085d.remove(i10);
                this.f39086e = this.f39087i;
                this.f39087i = -1;
                this.f39088o = ((AbstractList) this.f39085d).modCount;
                return;
            }
            throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            a();
            int i10 = this.f39087i;
            if (i10 != -1) {
                this.f39085d.set(i10, obj);
                return;
            }
            throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
        }
    }

    static {
        b bVar = new b(0);
        bVar.f39075i = true;
        f39072p = bVar;
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
            this.f39073d[i10 + i12] = it.next();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void o(int i10, Object obj) {
        v();
        u(i10, 1);
        this.f39073d[i10] = obj;
    }

    private final void q() {
        if (!this.f39075i) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    private final boolean r(List list) {
        boolean h10;
        h10 = mr.c.h(this.f39073d, 0, this.f39074e, list);
        return h10;
    }

    private final void s(int i10) {
        if (i10 >= 0) {
            Object[] objArr = this.f39073d;
            if (i10 > objArr.length) {
                this.f39073d = mr.c.e(this.f39073d, kotlin.collections.d.f32498d.e(objArr.length, i10));
                return;
            }
            return;
        }
        throw new OutOfMemoryError();
    }

    private final void t(int i10) {
        s(this.f39074e + i10);
    }

    private final void u(int i10, int i11) {
        t(i11);
        Object[] objArr = this.f39073d;
        i.k(objArr, objArr, i10 + i11, i10, this.f39074e);
        this.f39074e += i11;
    }

    private final void v() {
        ((AbstractList) this).modCount++;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object w(int i10) {
        v();
        Object[] objArr = this.f39073d;
        Object obj = objArr[i10];
        i.k(objArr, objArr, i10, i10 + 1, this.f39074e);
        mr.c.f(this.f39073d, this.f39074e - 1);
        this.f39074e--;
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void x(int i10, int i11) {
        if (i11 > 0) {
            v();
        }
        Object[] objArr = this.f39073d;
        i.k(objArr, objArr, i10, i10 + i11, this.f39074e);
        Object[] objArr2 = this.f39073d;
        int i12 = this.f39074e;
        mr.c.g(objArr2, i12 - i11, i12);
        this.f39074e -= i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int y(int i10, int i11, Collection collection, boolean z10) {
        int i12 = 0;
        int i13 = 0;
        while (i12 < i11) {
            int i14 = i10 + i12;
            if (collection.contains(this.f39073d[i14]) == z10) {
                Object[] objArr = this.f39073d;
                i12++;
                objArr[i13 + i10] = objArr[i14];
                i13++;
            } else {
                i12++;
            }
        }
        int i15 = i11 - i13;
        Object[] objArr2 = this.f39073d;
        i.k(objArr2, objArr2, i10 + i13, i11 + i10, this.f39074e);
        Object[] objArr3 = this.f39073d;
        int i16 = this.f39074e;
        mr.c.g(objArr3, i16 - i15, i16);
        if (i15 > 0) {
            v();
        }
        this.f39074e -= i15;
        return i15;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        q();
        o(this.f39074e, obj);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        q();
        int size = elements.size();
        n(this.f39074e, elements, size);
        return size > 0;
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f39074e;
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        q();
        kotlin.collections.d.f32498d.b(i10, this.f39074e);
        return w(i10);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        q();
        x(0, this.f39074e);
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
        kotlin.collections.d.f32498d.b(i10, this.f39074e);
        return this.f39073d[i10];
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public int hashCode() {
        int i10;
        i10 = mr.c.i(this.f39073d, 0, this.f39074e);
        return i10;
    }

    @Override // java.util.AbstractList, java.util.List
    public int indexOf(Object obj) {
        for (int i10 = 0; i10 < this.f39074e; i10++) {
            if (Intrinsics.areEqual(this.f39073d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean isEmpty() {
        if (this.f39074e == 0) {
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
        for (int i10 = this.f39074e - 1; i10 >= 0; i10--) {
            if (Intrinsics.areEqual(this.f39073d[i10], obj)) {
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
        this.f39075i = true;
        if (this.f39074e > 0) {
            return this;
        }
        return f39072p;
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
        if (y(0, this.f39074e, elements, false) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean retainAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        q();
        if (y(0, this.f39074e, elements, true) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        q();
        kotlin.collections.d.f32498d.b(i10, this.f39074e);
        Object[] objArr = this.f39073d;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        return obj2;
    }

    @Override // java.util.AbstractList, java.util.List
    public List subList(int i10, int i11) {
        kotlin.collections.d.f32498d.d(i10, i11, this.f39074e);
        return new a(this.f39073d, i10, i11 - i10, null, this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        int length = array.length;
        int i10 = this.f39074e;
        if (length < i10) {
            Object[] copyOfRange = Arrays.copyOfRange(this.f39073d, 0, i10, array.getClass());
            Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
            return copyOfRange;
        }
        i.k(this.f39073d, array, 0, 0, i10);
        return CollectionsKt.f(this.f39074e, array);
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String j10;
        j10 = mr.c.j(this.f39073d, 0, this.f39074e, this);
        return j10;
    }

    public b(int i10) {
        this.f39073d = mr.c.d(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator(int i10) {
        kotlin.collections.d.f32498d.c(i10, this.f39074e);
        return new c(this, i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        q();
        kotlin.collections.d.f32498d.c(i10, this.f39074e);
        o(i10, obj);
    }

    public /* synthetic */ b(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        q();
        kotlin.collections.d.f32498d.c(i10, this.f39074e);
        int size = elements.size();
        n(i10, elements, size);
        return size > 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray() {
        return i.r(this.f39073d, 0, this.f39074e);
    }
}
