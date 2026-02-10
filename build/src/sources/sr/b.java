package sr;

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
    private static final C0674b f50042o = new C0674b(null);

    /* renamed from: p  reason: collision with root package name */
    private static final b f50043p;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f50044d;

    /* renamed from: e  reason: collision with root package name */
    private int f50045e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f50046i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.collections.f implements List, RandomAccess, Serializable, KMutableList {

        /* renamed from: d  reason: collision with root package name */
        private Object[] f50047d;

        /* renamed from: e  reason: collision with root package name */
        private final int f50048e;

        /* renamed from: i  reason: collision with root package name */
        private int f50049i;

        /* renamed from: o  reason: collision with root package name */
        private final a f50050o;

        /* renamed from: p  reason: collision with root package name */
        private final b f50051p;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: sr.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0673a implements ListIterator, KMutableListIterator {

            /* renamed from: d  reason: collision with root package name */
            private final a f50052d;

            /* renamed from: e  reason: collision with root package name */
            private int f50053e;

            /* renamed from: i  reason: collision with root package name */
            private int f50054i;

            /* renamed from: o  reason: collision with root package name */
            private int f50055o;

            public C0673a(a list, int i10) {
                Intrinsics.checkNotNullParameter(list, "list");
                this.f50052d = list;
                this.f50053e = i10;
                this.f50054i = -1;
                this.f50055o = ((AbstractList) list).modCount;
            }

            private final void a() {
                if (((AbstractList) this.f50052d.f50051p).modCount == this.f50055o) {
                    return;
                }
                throw new ConcurrentModificationException();
            }

            @Override // java.util.ListIterator
            public void add(Object obj) {
                a();
                a aVar = this.f50052d;
                int i10 = this.f50053e;
                this.f50053e = i10 + 1;
                aVar.add(i10, obj);
                this.f50054i = -1;
                this.f50055o = ((AbstractList) this.f50052d).modCount;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public boolean hasNext() {
                if (this.f50053e < this.f50052d.f50049i) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator
            public boolean hasPrevious() {
                if (this.f50053e > 0) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public Object next() {
                a();
                if (this.f50053e < this.f50052d.f50049i) {
                    int i10 = this.f50053e;
                    this.f50053e = i10 + 1;
                    this.f50054i = i10;
                    return this.f50052d.f50047d[this.f50052d.f50048e + this.f50054i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int nextIndex() {
                return this.f50053e;
            }

            @Override // java.util.ListIterator
            public Object previous() {
                a();
                int i10 = this.f50053e;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f50053e = i11;
                    this.f50054i = i11;
                    return this.f50052d.f50047d[this.f50052d.f50048e + this.f50054i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int previousIndex() {
                return this.f50053e - 1;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public void remove() {
                a();
                int i10 = this.f50054i;
                if (i10 != -1) {
                    this.f50052d.remove(i10);
                    this.f50053e = this.f50054i;
                    this.f50054i = -1;
                    this.f50055o = ((AbstractList) this.f50052d).modCount;
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
            }

            @Override // java.util.ListIterator
            public void set(Object obj) {
                a();
                int i10 = this.f50054i;
                if (i10 != -1) {
                    this.f50052d.set(i10, obj);
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
            }
        }

        public a(Object[] backing, int i10, int i11, a aVar, b root) {
            Intrinsics.checkNotNullParameter(backing, "backing");
            Intrinsics.checkNotNullParameter(root, "root");
            this.f50047d = backing;
            this.f50048e = i10;
            this.f50049i = i11;
            this.f50050o = aVar;
            this.f50051p = root;
            ((AbstractList) this).modCount = ((AbstractList) root).modCount;
        }

        private final void i(int i10, Collection collection, int i11) {
            r();
            a aVar = this.f50050o;
            if (aVar == null) {
                this.f50051p.p(i10, collection, i11);
            } else {
                aVar.i(i10, collection, i11);
            }
            this.f50047d = this.f50051p.f50044d;
            this.f50049i += i11;
        }

        private final void j(int i10, Object obj) {
            r();
            a aVar = this.f50050o;
            if (aVar == null) {
                this.f50051p.q(i10, obj);
            } else {
                aVar.j(i10, obj);
            }
            this.f50047d = this.f50051p.f50044d;
            this.f50049i++;
        }

        private final void l() {
            if (((AbstractList) this.f50051p).modCount == ((AbstractList) this).modCount) {
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
            h10 = sr.c.h(this.f50047d, this.f50048e, this.f50049i, list);
            return h10;
        }

        private final boolean q() {
            return this.f50051p.f50046i;
        }

        private final void r() {
            ((AbstractList) this).modCount++;
        }

        private final Object s(int i10) {
            Object A;
            r();
            a aVar = this.f50050o;
            if (aVar == null) {
                A = this.f50051p.A(i10);
            } else {
                A = aVar.s(i10);
            }
            this.f50049i--;
            return A;
        }

        private final void t(int i10, int i11) {
            if (i11 > 0) {
                r();
            }
            a aVar = this.f50050o;
            if (aVar == null) {
                this.f50051p.B(i10, i11);
            } else {
                aVar.t(i10, i11);
            }
            this.f50049i -= i11;
        }

        private final int u(int i10, int i11, Collection collection, boolean z10) {
            int C;
            a aVar = this.f50050o;
            if (aVar == null) {
                C = this.f50051p.C(i10, i11, collection, z10);
            } else {
                C = aVar.u(i10, i11, collection, z10);
            }
            if (C > 0) {
                r();
            }
            this.f50049i -= C;
            return C;
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean add(Object obj) {
            o();
            l();
            j(this.f50048e + this.f50049i, obj);
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean addAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            int size = elements.size();
            i(this.f50048e + this.f50049i, elements, size);
            return size > 0;
        }

        @Override // kotlin.collections.f
        public int b() {
            l();
            return this.f50049i;
        }

        @Override // kotlin.collections.f
        public Object c(int i10) {
            o();
            l();
            kotlin.collections.d.f31799d.b(i10, this.f50049i);
            return s(this.f50048e + i10);
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public void clear() {
            o();
            l();
            t(this.f50048e, this.f50049i);
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
            kotlin.collections.d.f31799d.b(i10, this.f50049i);
            return this.f50047d[this.f50048e + i10];
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public int hashCode() {
            int i10;
            l();
            i10 = sr.c.i(this.f50047d, this.f50048e, this.f50049i);
            return i10;
        }

        @Override // java.util.AbstractList, java.util.List
        public int indexOf(Object obj) {
            l();
            for (int i10 = 0; i10 < this.f50049i; i10++) {
                if (Intrinsics.areEqual(this.f50047d[this.f50048e + i10], obj)) {
                    return i10;
                }
            }
            return -1;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean isEmpty() {
            l();
            if (this.f50049i == 0) {
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
            for (int i10 = this.f50049i - 1; i10 >= 0; i10--) {
                if (Intrinsics.areEqual(this.f50047d[this.f50048e + i10], obj)) {
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
            if (u(this.f50048e, this.f50049i, elements, false) <= 0) {
                return false;
            }
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean retainAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            if (u(this.f50048e, this.f50049i, elements, true) > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object set(int i10, Object obj) {
            o();
            l();
            kotlin.collections.d.f31799d.b(i10, this.f50049i);
            Object[] objArr = this.f50047d;
            int i11 = this.f50048e;
            Object obj2 = objArr[i11 + i10];
            objArr[i11 + i10] = obj;
            return obj2;
        }

        @Override // java.util.AbstractList, java.util.List
        public List subList(int i10, int i11) {
            kotlin.collections.d.f31799d.d(i10, i11, this.f50049i);
            return new a(this.f50047d, this.f50048e + i10, i11 - i10, this, this.f50051p);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray(Object[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            l();
            int length = array.length;
            int i10 = this.f50049i;
            if (length < i10) {
                Object[] objArr = this.f50047d;
                int i11 = this.f50048e;
                Object[] copyOfRange = Arrays.copyOfRange(objArr, i11, i10 + i11, array.getClass());
                Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
                return copyOfRange;
            }
            Object[] objArr2 = this.f50047d;
            int i12 = this.f50048e;
            i.k(objArr2, array, 0, i12, i10 + i12);
            return CollectionsKt.f(this.f50049i, array);
        }

        @Override // java.util.AbstractCollection
        public String toString() {
            String j10;
            l();
            j10 = sr.c.j(this.f50047d, this.f50048e, this.f50049i, this);
            return j10;
        }

        @Override // java.util.AbstractList, java.util.List
        public ListIterator listIterator(int i10) {
            l();
            kotlin.collections.d.f31799d.c(i10, this.f50049i);
            return new C0673a(this, i10);
        }

        @Override // java.util.AbstractList, java.util.List
        public void add(int i10, Object obj) {
            o();
            l();
            kotlin.collections.d.f31799d.c(i10, this.f50049i);
            j(this.f50048e + i10, obj);
        }

        @Override // java.util.AbstractList, java.util.List
        public boolean addAll(int i10, Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            o();
            l();
            kotlin.collections.d.f31799d.c(i10, this.f50049i);
            int size = elements.size();
            i(this.f50048e + i10, elements, size);
            return size > 0;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray() {
            l();
            Object[] objArr = this.f50047d;
            int i10 = this.f50048e;
            return i.r(objArr, i10, this.f50049i + i10);
        }
    }

    /* renamed from: sr.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0674b {
        public /* synthetic */ C0674b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0674b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements ListIterator, KMutableListIterator {

        /* renamed from: d  reason: collision with root package name */
        private final b f50056d;

        /* renamed from: e  reason: collision with root package name */
        private int f50057e;

        /* renamed from: i  reason: collision with root package name */
        private int f50058i;

        /* renamed from: o  reason: collision with root package name */
        private int f50059o;

        public c(b list, int i10) {
            Intrinsics.checkNotNullParameter(list, "list");
            this.f50056d = list;
            this.f50057e = i10;
            this.f50058i = -1;
            this.f50059o = ((AbstractList) list).modCount;
        }

        private final void a() {
            if (((AbstractList) this.f50056d).modCount == this.f50059o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            a();
            b bVar = this.f50056d;
            int i10 = this.f50057e;
            this.f50057e = i10 + 1;
            bVar.add(i10, obj);
            this.f50058i = -1;
            this.f50059o = ((AbstractList) this.f50056d).modCount;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            if (this.f50057e < this.f50056d.f50045e) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            if (this.f50057e > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public Object next() {
            a();
            if (this.f50057e < this.f50056d.f50045e) {
                int i10 = this.f50057e;
                this.f50057e = i10 + 1;
                this.f50058i = i10;
                return this.f50056d.f50044d[this.f50058i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f50057e;
        }

        @Override // java.util.ListIterator
        public Object previous() {
            a();
            int i10 = this.f50057e;
            if (i10 > 0) {
                int i11 = i10 - 1;
                this.f50057e = i11;
                this.f50058i = i11;
                return this.f50056d.f50044d[this.f50058i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f50057e - 1;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            a();
            int i10 = this.f50058i;
            if (i10 != -1) {
                this.f50056d.remove(i10);
                this.f50057e = this.f50058i;
                this.f50058i = -1;
                this.f50059o = ((AbstractList) this.f50056d).modCount;
                return;
            }
            throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            a();
            int i10 = this.f50058i;
            if (i10 != -1) {
                this.f50056d.set(i10, obj);
                return;
            }
            throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
        }
    }

    static {
        b bVar = new b(0);
        bVar.f50046i = true;
        f50043p = bVar;
    }

    public b() {
        this(0, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object A(int i10) {
        x();
        Object[] objArr = this.f50044d;
        Object obj = objArr[i10];
        i.k(objArr, objArr, i10, i10 + 1, this.f50045e);
        sr.c.f(this.f50044d, this.f50045e - 1);
        this.f50045e--;
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void B(int i10, int i11) {
        if (i11 > 0) {
            x();
        }
        Object[] objArr = this.f50044d;
        i.k(objArr, objArr, i10, i10 + i11, this.f50045e);
        Object[] objArr2 = this.f50044d;
        int i12 = this.f50045e;
        sr.c.g(objArr2, i12 - i11, i12);
        this.f50045e -= i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int C(int i10, int i11, Collection collection, boolean z10) {
        int i12 = 0;
        int i13 = 0;
        while (i12 < i11) {
            int i14 = i10 + i12;
            if (collection.contains(this.f50044d[i14]) == z10) {
                Object[] objArr = this.f50044d;
                i12++;
                objArr[i13 + i10] = objArr[i14];
                i13++;
            } else {
                i12++;
            }
        }
        int i15 = i11 - i13;
        Object[] objArr2 = this.f50044d;
        i.k(objArr2, objArr2, i10 + i13, i11 + i10, this.f50045e);
        Object[] objArr3 = this.f50044d;
        int i16 = this.f50045e;
        sr.c.g(objArr3, i16 - i15, i16);
        if (i15 > 0) {
            x();
        }
        this.f50045e -= i15;
        return i15;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void p(int i10, Collection collection, int i11) {
        x();
        w(i10, i11);
        Iterator it = collection.iterator();
        for (int i12 = 0; i12 < i11; i12++) {
            this.f50044d[i10 + i12] = it.next();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void q(int i10, Object obj) {
        x();
        w(i10, 1);
        this.f50044d[i10] = obj;
    }

    private final void s() {
        if (!this.f50046i) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    private final boolean t(List list) {
        boolean h10;
        h10 = sr.c.h(this.f50044d, 0, this.f50045e, list);
        return h10;
    }

    private final void u(int i10) {
        if (i10 >= 0) {
            Object[] objArr = this.f50044d;
            if (i10 > objArr.length) {
                this.f50044d = sr.c.e(this.f50044d, kotlin.collections.d.f31799d.e(objArr.length, i10));
                return;
            }
            return;
        }
        throw new OutOfMemoryError();
    }

    private final void v(int i10) {
        u(this.f50045e + i10);
    }

    private final void w(int i10, int i11) {
        v(i11);
        Object[] objArr = this.f50044d;
        i.k(objArr, objArr, i10 + i11, i10, this.f50045e);
        this.f50045e += i11;
    }

    private final void x() {
        ((AbstractList) this).modCount++;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        s();
        q(this.f50045e, obj);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        int size = elements.size();
        p(this.f50045e, elements, size);
        return size > 0;
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f50045e;
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        s();
        kotlin.collections.d.f31799d.b(i10, this.f50045e);
        return A(i10);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        s();
        B(0, this.f50045e);
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
        kotlin.collections.d.f31799d.b(i10, this.f50045e);
        return this.f50044d[i10];
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public int hashCode() {
        int i10;
        i10 = sr.c.i(this.f50044d, 0, this.f50045e);
        return i10;
    }

    @Override // java.util.AbstractList, java.util.List
    public int indexOf(Object obj) {
        for (int i10 = 0; i10 < this.f50045e; i10++) {
            if (Intrinsics.areEqual(this.f50044d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean isEmpty() {
        if (this.f50045e == 0) {
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
        for (int i10 = this.f50045e - 1; i10 >= 0; i10--) {
            if (Intrinsics.areEqual(this.f50044d[i10], obj)) {
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
        this.f50046i = true;
        if (this.f50045e > 0) {
            return this;
        }
        return f50043p;
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
        if (C(0, this.f50045e, elements, false) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean retainAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        if (C(0, this.f50045e, elements, true) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        s();
        kotlin.collections.d.f31799d.b(i10, this.f50045e);
        Object[] objArr = this.f50044d;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        return obj2;
    }

    @Override // java.util.AbstractList, java.util.List
    public List subList(int i10, int i11) {
        kotlin.collections.d.f31799d.d(i10, i11, this.f50045e);
        return new a(this.f50044d, i10, i11 - i10, null, this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        int length = array.length;
        int i10 = this.f50045e;
        if (length < i10) {
            Object[] copyOfRange = Arrays.copyOfRange(this.f50044d, 0, i10, array.getClass());
            Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
            return copyOfRange;
        }
        i.k(this.f50044d, array, 0, 0, i10);
        return CollectionsKt.f(this.f50045e, array);
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String j10;
        j10 = sr.c.j(this.f50044d, 0, this.f50045e, this);
        return j10;
    }

    public b(int i10) {
        this.f50044d = sr.c.d(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator(int i10) {
        kotlin.collections.d.f31799d.c(i10, this.f50045e);
        return new c(this, i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        s();
        kotlin.collections.d.f31799d.c(i10, this.f50045e);
        q(i10, obj);
    }

    public /* synthetic */ b(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        s();
        kotlin.collections.d.f31799d.c(i10, this.f50045e);
        int size = elements.size();
        p(i10, elements, size);
        return size > 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray() {
        return i.r(this.f50044d, 0, this.f50045e);
    }
}
