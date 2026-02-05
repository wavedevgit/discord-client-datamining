package pr;

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
    private static final C0573b f46268o = new C0573b(null);

    /* renamed from: p  reason: collision with root package name */
    private static final b f46269p;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f46270d;

    /* renamed from: e  reason: collision with root package name */
    private int f46271e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f46272i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.collections.f implements List, RandomAccess, Serializable, KMutableList {

        /* renamed from: d  reason: collision with root package name */
        private Object[] f46273d;

        /* renamed from: e  reason: collision with root package name */
        private final int f46274e;

        /* renamed from: i  reason: collision with root package name */
        private int f46275i;

        /* renamed from: o  reason: collision with root package name */
        private final a f46276o;

        /* renamed from: p  reason: collision with root package name */
        private final b f46277p;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: pr.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0572a implements ListIterator, KMutableListIterator {

            /* renamed from: d  reason: collision with root package name */
            private final a f46278d;

            /* renamed from: e  reason: collision with root package name */
            private int f46279e;

            /* renamed from: i  reason: collision with root package name */
            private int f46280i;

            /* renamed from: o  reason: collision with root package name */
            private int f46281o;

            public C0572a(a list, int i10) {
                Intrinsics.checkNotNullParameter(list, "list");
                this.f46278d = list;
                this.f46279e = i10;
                this.f46280i = -1;
                this.f46281o = ((AbstractList) list).modCount;
            }

            private final void a() {
                if (((AbstractList) this.f46278d.f46277p).modCount == this.f46281o) {
                    return;
                }
                throw new ConcurrentModificationException();
            }

            @Override // java.util.ListIterator
            public void add(Object obj) {
                a();
                a aVar = this.f46278d;
                int i10 = this.f46279e;
                this.f46279e = i10 + 1;
                aVar.add(i10, obj);
                this.f46280i = -1;
                this.f46281o = ((AbstractList) this.f46278d).modCount;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public boolean hasNext() {
                if (this.f46279e < this.f46278d.f46275i) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator
            public boolean hasPrevious() {
                if (this.f46279e > 0) {
                    return true;
                }
                return false;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public Object next() {
                a();
                if (this.f46279e < this.f46278d.f46275i) {
                    int i10 = this.f46279e;
                    this.f46279e = i10 + 1;
                    this.f46280i = i10;
                    return this.f46278d.f46273d[this.f46278d.f46274e + this.f46280i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int nextIndex() {
                return this.f46279e;
            }

            @Override // java.util.ListIterator
            public Object previous() {
                a();
                int i10 = this.f46279e;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f46279e = i11;
                    this.f46280i = i11;
                    return this.f46278d.f46273d[this.f46278d.f46274e + this.f46280i];
                }
                throw new NoSuchElementException();
            }

            @Override // java.util.ListIterator
            public int previousIndex() {
                return this.f46279e - 1;
            }

            @Override // java.util.ListIterator, java.util.Iterator
            public void remove() {
                a();
                int i10 = this.f46280i;
                if (i10 != -1) {
                    this.f46278d.remove(i10);
                    this.f46279e = this.f46280i;
                    this.f46280i = -1;
                    this.f46281o = ((AbstractList) this.f46278d).modCount;
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
            }

            @Override // java.util.ListIterator
            public void set(Object obj) {
                a();
                int i10 = this.f46280i;
                if (i10 != -1) {
                    this.f46278d.set(i10, obj);
                    return;
                }
                throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
            }
        }

        public a(Object[] backing, int i10, int i11, a aVar, b root) {
            Intrinsics.checkNotNullParameter(backing, "backing");
            Intrinsics.checkNotNullParameter(root, "root");
            this.f46273d = backing;
            this.f46274e = i10;
            this.f46275i = i11;
            this.f46276o = aVar;
            this.f46277p = root;
            ((AbstractList) this).modCount = ((AbstractList) root).modCount;
        }

        private final void i(int i10, Collection collection, int i11) {
            q();
            a aVar = this.f46276o;
            if (aVar == null) {
                this.f46277p.o(i10, collection, i11);
            } else {
                aVar.i(i10, collection, i11);
            }
            this.f46273d = this.f46277p.f46270d;
            this.f46275i += i11;
        }

        private final void j(int i10, Object obj) {
            q();
            a aVar = this.f46276o;
            if (aVar == null) {
                this.f46277p.p(i10, obj);
            } else {
                aVar.j(i10, obj);
            }
            this.f46273d = this.f46277p.f46270d;
            this.f46275i++;
        }

        private final void l() {
            if (((AbstractList) this.f46277p).modCount == ((AbstractList) this).modCount) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        private final void n() {
            if (!p()) {
                return;
            }
            throw new UnsupportedOperationException();
        }

        private final boolean o(List list) {
            boolean h10;
            h10 = pr.c.h(this.f46273d, this.f46274e, this.f46275i, list);
            return h10;
        }

        private final boolean p() {
            return this.f46277p.f46272i;
        }

        private final void q() {
            ((AbstractList) this).modCount++;
        }

        private final Object r(int i10) {
            Object x10;
            q();
            a aVar = this.f46276o;
            if (aVar == null) {
                x10 = this.f46277p.x(i10);
            } else {
                x10 = aVar.r(i10);
            }
            this.f46275i--;
            return x10;
        }

        private final void s(int i10, int i11) {
            if (i11 > 0) {
                q();
            }
            a aVar = this.f46276o;
            if (aVar == null) {
                this.f46277p.y(i10, i11);
            } else {
                aVar.s(i10, i11);
            }
            this.f46275i -= i11;
        }

        private final int t(int i10, int i11, Collection collection, boolean z10) {
            int z11;
            a aVar = this.f46276o;
            if (aVar == null) {
                z11 = this.f46277p.z(i10, i11, collection, z10);
            } else {
                z11 = aVar.t(i10, i11, collection, z10);
            }
            if (z11 > 0) {
                q();
            }
            this.f46275i -= z11;
            return z11;
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean add(Object obj) {
            n();
            l();
            j(this.f46274e + this.f46275i, obj);
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean addAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            n();
            l();
            int size = elements.size();
            i(this.f46274e + this.f46275i, elements, size);
            return size > 0;
        }

        @Override // kotlin.collections.f
        public int b() {
            l();
            return this.f46275i;
        }

        @Override // kotlin.collections.f
        public Object c(int i10) {
            n();
            l();
            kotlin.collections.d.f32022d.b(i10, this.f46275i);
            return r(this.f46274e + i10);
        }

        @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public void clear() {
            n();
            l();
            s(this.f46274e, this.f46275i);
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public boolean equals(Object obj) {
            l();
            if (obj != this) {
                if (!(obj instanceof List) || !o((List) obj)) {
                    return false;
                }
                return true;
            }
            return true;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object get(int i10) {
            l();
            kotlin.collections.d.f32022d.b(i10, this.f46275i);
            return this.f46273d[this.f46274e + i10];
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public int hashCode() {
            int i10;
            l();
            i10 = pr.c.i(this.f46273d, this.f46274e, this.f46275i);
            return i10;
        }

        @Override // java.util.AbstractList, java.util.List
        public int indexOf(Object obj) {
            l();
            for (int i10 = 0; i10 < this.f46275i; i10++) {
                if (Intrinsics.areEqual(this.f46273d[this.f46274e + i10], obj)) {
                    return i10;
                }
            }
            return -1;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean isEmpty() {
            l();
            if (this.f46275i == 0) {
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
            for (int i10 = this.f46275i - 1; i10 >= 0; i10--) {
                if (Intrinsics.areEqual(this.f46273d[this.f46274e + i10], obj)) {
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
            n();
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
            n();
            l();
            if (t(this.f46274e, this.f46275i, elements, false) <= 0) {
                return false;
            }
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean retainAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            n();
            l();
            if (t(this.f46274e, this.f46275i, elements, true) > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractList, java.util.List
        public Object set(int i10, Object obj) {
            n();
            l();
            kotlin.collections.d.f32022d.b(i10, this.f46275i);
            Object[] objArr = this.f46273d;
            int i11 = this.f46274e;
            Object obj2 = objArr[i11 + i10];
            objArr[i11 + i10] = obj;
            return obj2;
        }

        @Override // java.util.AbstractList, java.util.List
        public List subList(int i10, int i11) {
            kotlin.collections.d.f32022d.d(i10, i11, this.f46275i);
            return new a(this.f46273d, this.f46274e + i10, i11 - i10, this, this.f46277p);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray(Object[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            l();
            int length = array.length;
            int i10 = this.f46275i;
            if (length < i10) {
                Object[] objArr = this.f46273d;
                int i11 = this.f46274e;
                Object[] copyOfRange = Arrays.copyOfRange(objArr, i11, i10 + i11, array.getClass());
                Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
                return copyOfRange;
            }
            Object[] objArr2 = this.f46273d;
            int i12 = this.f46274e;
            i.k(objArr2, array, 0, i12, i10 + i12);
            return CollectionsKt.f(this.f46275i, array);
        }

        @Override // java.util.AbstractCollection
        public String toString() {
            String j10;
            l();
            j10 = pr.c.j(this.f46273d, this.f46274e, this.f46275i, this);
            return j10;
        }

        @Override // java.util.AbstractList, java.util.List
        public ListIterator listIterator(int i10) {
            l();
            kotlin.collections.d.f32022d.c(i10, this.f46275i);
            return new C0572a(this, i10);
        }

        @Override // java.util.AbstractList, java.util.List
        public void add(int i10, Object obj) {
            n();
            l();
            kotlin.collections.d.f32022d.c(i10, this.f46275i);
            j(this.f46274e + i10, obj);
        }

        @Override // java.util.AbstractList, java.util.List
        public boolean addAll(int i10, Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            n();
            l();
            kotlin.collections.d.f32022d.c(i10, this.f46275i);
            int size = elements.size();
            i(this.f46274e + i10, elements, size);
            return size > 0;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public Object[] toArray() {
            l();
            Object[] objArr = this.f46273d;
            int i10 = this.f46274e;
            return i.r(objArr, i10, this.f46275i + i10);
        }
    }

    /* renamed from: pr.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0573b {
        public /* synthetic */ C0573b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0573b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements ListIterator, KMutableListIterator {

        /* renamed from: d  reason: collision with root package name */
        private final b f46282d;

        /* renamed from: e  reason: collision with root package name */
        private int f46283e;

        /* renamed from: i  reason: collision with root package name */
        private int f46284i;

        /* renamed from: o  reason: collision with root package name */
        private int f46285o;

        public c(b list, int i10) {
            Intrinsics.checkNotNullParameter(list, "list");
            this.f46282d = list;
            this.f46283e = i10;
            this.f46284i = -1;
            this.f46285o = ((AbstractList) list).modCount;
        }

        private final void a() {
            if (((AbstractList) this.f46282d).modCount == this.f46285o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            a();
            b bVar = this.f46282d;
            int i10 = this.f46283e;
            this.f46283e = i10 + 1;
            bVar.add(i10, obj);
            this.f46284i = -1;
            this.f46285o = ((AbstractList) this.f46282d).modCount;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            if (this.f46283e < this.f46282d.f46271e) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            if (this.f46283e > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public Object next() {
            a();
            if (this.f46283e < this.f46282d.f46271e) {
                int i10 = this.f46283e;
                this.f46283e = i10 + 1;
                this.f46284i = i10;
                return this.f46282d.f46270d[this.f46284i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f46283e;
        }

        @Override // java.util.ListIterator
        public Object previous() {
            a();
            int i10 = this.f46283e;
            if (i10 > 0) {
                int i11 = i10 - 1;
                this.f46283e = i11;
                this.f46284i = i11;
                return this.f46282d.f46270d[this.f46284i];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f46283e - 1;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            a();
            int i10 = this.f46284i;
            if (i10 != -1) {
                this.f46282d.remove(i10);
                this.f46283e = this.f46284i;
                this.f46284i = -1;
                this.f46285o = ((AbstractList) this.f46282d).modCount;
                return;
            }
            throw new IllegalStateException("Call next() or previous() before removing element from the iterator.");
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            a();
            int i10 = this.f46284i;
            if (i10 != -1) {
                this.f46282d.set(i10, obj);
                return;
            }
            throw new IllegalStateException("Call next() or previous() before replacing element from the iterator.");
        }
    }

    static {
        b bVar = new b(0);
        bVar.f46272i = true;
        f46269p = bVar;
    }

    public b() {
        this(0, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void o(int i10, Collection collection, int i11) {
        w();
        v(i10, i11);
        Iterator it = collection.iterator();
        for (int i12 = 0; i12 < i11; i12++) {
            this.f46270d[i10 + i12] = it.next();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void p(int i10, Object obj) {
        w();
        v(i10, 1);
        this.f46270d[i10] = obj;
    }

    private final void r() {
        if (!this.f46272i) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    private final boolean s(List list) {
        boolean h10;
        h10 = pr.c.h(this.f46270d, 0, this.f46271e, list);
        return h10;
    }

    private final void t(int i10) {
        if (i10 >= 0) {
            Object[] objArr = this.f46270d;
            if (i10 > objArr.length) {
                this.f46270d = pr.c.e(this.f46270d, kotlin.collections.d.f32022d.e(objArr.length, i10));
                return;
            }
            return;
        }
        throw new OutOfMemoryError();
    }

    private final void u(int i10) {
        t(this.f46271e + i10);
    }

    private final void v(int i10, int i11) {
        u(i11);
        Object[] objArr = this.f46270d;
        i.k(objArr, objArr, i10 + i11, i10, this.f46271e);
        this.f46271e += i11;
    }

    private final void w() {
        ((AbstractList) this).modCount++;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object x(int i10) {
        w();
        Object[] objArr = this.f46270d;
        Object obj = objArr[i10];
        i.k(objArr, objArr, i10, i10 + 1, this.f46271e);
        pr.c.f(this.f46270d, this.f46271e - 1);
        this.f46271e--;
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void y(int i10, int i11) {
        if (i11 > 0) {
            w();
        }
        Object[] objArr = this.f46270d;
        i.k(objArr, objArr, i10, i10 + i11, this.f46271e);
        Object[] objArr2 = this.f46270d;
        int i12 = this.f46271e;
        pr.c.g(objArr2, i12 - i11, i12);
        this.f46271e -= i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int z(int i10, int i11, Collection collection, boolean z10) {
        int i12 = 0;
        int i13 = 0;
        while (i12 < i11) {
            int i14 = i10 + i12;
            if (collection.contains(this.f46270d[i14]) == z10) {
                Object[] objArr = this.f46270d;
                i12++;
                objArr[i13 + i10] = objArr[i14];
                i13++;
            } else {
                i12++;
            }
        }
        int i15 = i11 - i13;
        Object[] objArr2 = this.f46270d;
        i.k(objArr2, objArr2, i10 + i13, i11 + i10, this.f46271e);
        Object[] objArr3 = this.f46270d;
        int i16 = this.f46271e;
        pr.c.g(objArr3, i16 - i15, i16);
        if (i15 > 0) {
            w();
        }
        this.f46271e -= i15;
        return i15;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        r();
        p(this.f46271e, obj);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        r();
        int size = elements.size();
        o(this.f46271e, elements, size);
        return size > 0;
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f46271e;
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        r();
        kotlin.collections.d.f32022d.b(i10, this.f46271e);
        return x(i10);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        r();
        y(0, this.f46271e);
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public boolean equals(Object obj) {
        if (obj != this) {
            if (!(obj instanceof List) || !s((List) obj)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object get(int i10) {
        kotlin.collections.d.f32022d.b(i10, this.f46271e);
        return this.f46270d[i10];
    }

    @Override // java.util.AbstractList, java.util.Collection, java.util.List
    public int hashCode() {
        int i10;
        i10 = pr.c.i(this.f46270d, 0, this.f46271e);
        return i10;
    }

    @Override // java.util.AbstractList, java.util.List
    public int indexOf(Object obj) {
        for (int i10 = 0; i10 < this.f46271e; i10++) {
            if (Intrinsics.areEqual(this.f46270d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean isEmpty() {
        if (this.f46271e == 0) {
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
        for (int i10 = this.f46271e - 1; i10 >= 0; i10--) {
            if (Intrinsics.areEqual(this.f46270d[i10], obj)) {
                return i10;
            }
        }
        return -1;
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator() {
        return listIterator(0);
    }

    public final List q() {
        r();
        this.f46272i = true;
        if (this.f46271e > 0) {
            return this;
        }
        return f46269p;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean remove(Object obj) {
        r();
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
        r();
        if (z(0, this.f46271e, elements, false) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean retainAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        r();
        if (z(0, this.f46271e, elements, true) <= 0) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        r();
        kotlin.collections.d.f32022d.b(i10, this.f46271e);
        Object[] objArr = this.f46270d;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        return obj2;
    }

    @Override // java.util.AbstractList, java.util.List
    public List subList(int i10, int i11) {
        kotlin.collections.d.f32022d.d(i10, i11, this.f46271e);
        return new a(this.f46270d, i10, i11 - i10, null, this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        int length = array.length;
        int i10 = this.f46271e;
        if (length < i10) {
            Object[] copyOfRange = Arrays.copyOfRange(this.f46270d, 0, i10, array.getClass());
            Intrinsics.checkNotNullExpressionValue(copyOfRange, "copyOfRange(...)");
            return copyOfRange;
        }
        i.k(this.f46270d, array, 0, 0, i10);
        return CollectionsKt.f(this.f46271e, array);
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String j10;
        j10 = pr.c.j(this.f46270d, 0, this.f46271e, this);
        return j10;
    }

    public b(int i10) {
        this.f46270d = pr.c.d(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator(int i10) {
        kotlin.collections.d.f32022d.c(i10, this.f46271e);
        return new c(this, i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        r();
        kotlin.collections.d.f32022d.c(i10, this.f46271e);
        p(i10, obj);
    }

    public /* synthetic */ b(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        r();
        kotlin.collections.d.f32022d.c(i10, this.f46271e);
        int size = elements.size();
        o(i10, elements, size);
        return size > 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray() {
        return i.r(this.f46270d, 0, this.f46271e);
    }
}
