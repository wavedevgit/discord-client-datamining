package kotlin.collections;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.NoSuchElementException;
import java.util.RandomAccess;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d extends kotlin.collections.b implements List, KMappedMarker {
    @NotNull

    /* renamed from: d  reason: collision with root package name */
    public static final a f32042d = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(int i10, int i11, int i12) {
            if (i10 >= 0 && i11 <= i12) {
                if (i10 <= i11) {
                    return;
                }
                throw new IllegalArgumentException("startIndex: " + i10 + " > endIndex: " + i11);
            }
            throw new IndexOutOfBoundsException("startIndex: " + i10 + ", endIndex: " + i11 + ", size: " + i12);
        }

        public final void b(int i10, int i11) {
            if (i10 >= 0 && i10 < i11) {
                return;
            }
            throw new IndexOutOfBoundsException("index: " + i10 + ", size: " + i11);
        }

        public final void c(int i10, int i11) {
            if (i10 >= 0 && i10 <= i11) {
                return;
            }
            throw new IndexOutOfBoundsException("index: " + i10 + ", size: " + i11);
        }

        public final void d(int i10, int i11, int i12) {
            if (i10 >= 0 && i11 <= i12) {
                if (i10 <= i11) {
                    return;
                }
                throw new IllegalArgumentException("fromIndex: " + i10 + " > toIndex: " + i11);
            }
            throw new IndexOutOfBoundsException("fromIndex: " + i10 + ", toIndex: " + i11 + ", size: " + i12);
        }

        public final int e(int i10, int i11) {
            int i12 = i10 + (i10 >> 1);
            if (i12 - i11 < 0) {
                i12 = i11;
            }
            return i12 - 2147483639 > 0 ? i11 > 2147483639 ? Integer.MAX_VALUE : 2147483639 : i12;
        }

        public final boolean f(Collection c10, Collection other) {
            Intrinsics.checkNotNullParameter(c10, "c");
            Intrinsics.checkNotNullParameter(other, "other");
            if (c10.size() != other.size()) {
                return false;
            }
            Iterator it = other.iterator();
            for (Object obj : c10) {
                if (!Intrinsics.areEqual(obj, it.next())) {
                    return false;
                }
            }
            return true;
        }

        public final int g(Collection c10) {
            int i10;
            Intrinsics.checkNotNullParameter(c10, "c");
            int i11 = 1;
            for (Object obj : c10) {
                int i12 = i11 * 31;
                if (obj != null) {
                    i10 = obj.hashCode();
                } else {
                    i10 = 0;
                }
                i11 = i12 + i10;
            }
            return i11;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private int f32043d;

        public b() {
        }

        protected final int a() {
            return this.f32043d;
        }

        protected final void b(int i10) {
            this.f32043d = i10;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f32043d < d.this.size()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (hasNext()) {
                d dVar = d.this;
                int i10 = this.f32043d;
                this.f32043d = i10 + 1;
                return dVar.get(i10);
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class c extends b implements ListIterator, KMappedMarker {
        public c(int i10) {
            super();
            d.f32042d.c(i10, d.this.size());
            b(i10);
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            if (a() > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return a();
        }

        @Override // java.util.ListIterator
        public Object previous() {
            if (hasPrevious()) {
                d dVar = d.this;
                b(a() - 1);
                return dVar.get(a());
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return a() - 1;
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    /* renamed from: kotlin.collections.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0454d extends d implements RandomAccess {

        /* renamed from: e  reason: collision with root package name */
        private final d f32046e;

        /* renamed from: i  reason: collision with root package name */
        private final int f32047i;

        /* renamed from: o  reason: collision with root package name */
        private int f32048o;

        public C0454d(d list, int i10, int i11) {
            Intrinsics.checkNotNullParameter(list, "list");
            this.f32046e = list;
            this.f32047i = i10;
            d.f32042d.d(i10, i11, list.size());
            this.f32048o = i11 - i10;
        }

        @Override // kotlin.collections.b
        public int c() {
            return this.f32048o;
        }

        @Override // kotlin.collections.d, java.util.List
        public Object get(int i10) {
            d.f32042d.b(i10, this.f32048o);
            return this.f32046e.get(this.f32047i + i10);
        }
    }

    @Override // java.util.List
    public void add(int i10, Object obj) {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.List
    public boolean addAll(int i10, Collection collection) {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.Collection, java.util.List
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof List)) {
            return false;
        }
        return f32042d.f(this, (Collection) obj);
    }

    @Override // java.util.List
    public abstract Object get(int i10);

    @Override // java.util.Collection, java.util.List
    public int hashCode() {
        return f32042d.g(this);
    }

    @Override // java.util.List
    public int indexOf(Object obj) {
        int i10 = 0;
        for (Object obj2 : this) {
            if (Intrinsics.areEqual(obj2, obj)) {
                return i10;
            }
            i10++;
        }
        return -1;
    }

    @Override // java.util.Collection, java.lang.Iterable, java.util.List
    public Iterator iterator() {
        return new b();
    }

    @Override // java.util.List
    public int lastIndexOf(Object obj) {
        ListIterator listIterator = listIterator(size());
        while (listIterator.hasPrevious()) {
            if (Intrinsics.areEqual(listIterator.previous(), obj)) {
                return listIterator.nextIndex();
            }
        }
        return -1;
    }

    @Override // java.util.List
    public ListIterator listIterator() {
        return new c(0);
    }

    @Override // java.util.List
    public Object remove(int i10) {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.List
    public Object set(int i10, Object obj) {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.List
    public List subList(int i10, int i11) {
        return new C0454d(this, i10, i11);
    }

    @Override // java.util.List
    public ListIterator listIterator(int i10) {
        return new c(i10);
    }
}
