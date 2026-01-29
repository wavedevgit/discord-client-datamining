package ir;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.CollectionToArray;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 implements Collection, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private final long[] f31077d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final long[] f31078d;

        /* renamed from: e  reason: collision with root package name */
        private int f31079e;

        public a(long[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            this.f31078d = array;
        }

        public long a() {
            int i10 = this.f31079e;
            long[] jArr = this.f31078d;
            if (i10 < jArr.length) {
                this.f31079e = i10 + 1;
                return b0.d(jArr[i10]);
            }
            throw new NoSuchElementException(String.valueOf(this.f31079e));
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f31079e < this.f31078d.length) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public /* bridge */ /* synthetic */ Object next() {
            return b0.a(a());
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    private /* synthetic */ c0(long[] jArr) {
        this.f31077d = jArr;
    }

    public static final /* synthetic */ c0 b(long[] jArr) {
        return new c0(jArr);
    }

    public static long[] c(int i10) {
        return d(new long[i10]);
    }

    public static long[] d(long[] storage) {
        Intrinsics.checkNotNullParameter(storage, "storage");
        return storage;
    }

    public static boolean f(long[] jArr, long j10) {
        return kotlin.collections.i.M(jArr, j10);
    }

    /* JADX WARN: Removed duplicated region for block: B:8:0x001c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static boolean g(long[] r4, java.util.Collection r5) {
        /*
            java.lang.String r0 = "elements"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.Iterable r5 = (java.lang.Iterable) r5
            r0 = r5
            java.util.Collection r0 = (java.util.Collection) r0
            boolean r0 = r0.isEmpty()
            r1 = 1
            if (r0 == 0) goto L12
            return r1
        L12:
            java.util.Iterator r5 = r5.iterator()
        L16:
            boolean r0 = r5.hasNext()
            if (r0 == 0) goto L33
            java.lang.Object r0 = r5.next()
            boolean r2 = r0 instanceof ir.b0
            if (r2 == 0) goto L31
            ir.b0 r0 = (ir.b0) r0
            long r2 = r0.h()
            boolean r0 = kotlin.collections.i.M(r4, r2)
            if (r0 == 0) goto L31
            goto L16
        L31:
            r4 = 0
            return r4
        L33:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: ir.c0.g(long[], java.util.Collection):boolean");
    }

    public static boolean h(long[] jArr, Object obj) {
        if (!(obj instanceof c0) || !Intrinsics.areEqual(jArr, ((c0) obj).r())) {
            return false;
        }
        return true;
    }

    public static final long i(long[] jArr, int i10) {
        return b0.d(jArr[i10]);
    }

    public static int k(long[] jArr) {
        return jArr.length;
    }

    public static int m(long[] jArr) {
        return Arrays.hashCode(jArr);
    }

    public static boolean n(long[] jArr) {
        if (jArr.length == 0) {
            return true;
        }
        return false;
    }

    public static Iterator o(long[] jArr) {
        return new a(jArr);
    }

    public static final void p(long[] jArr, int i10, long j10) {
        jArr[i10] = j10;
    }

    public static String q(long[] jArr) {
        return "ULongArray(storage=" + Arrays.toString(jArr) + ')';
    }

    @Override // java.util.Collection
    public /* bridge */ /* synthetic */ boolean add(Object obj) {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.Collection
    public boolean addAll(Collection collection) {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.Collection
    public void clear() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.Collection
    public final /* bridge */ boolean contains(Object obj) {
        if (!(obj instanceof b0)) {
            return false;
        }
        return e(((b0) obj).h());
    }

    @Override // java.util.Collection
    public boolean containsAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return g(this.f31077d, elements);
    }

    public boolean e(long j10) {
        return f(this.f31077d, j10);
    }

    @Override // java.util.Collection
    public boolean equals(Object obj) {
        return h(this.f31077d, obj);
    }

    @Override // java.util.Collection
    public int hashCode() {
        return m(this.f31077d);
    }

    @Override // java.util.Collection
    public boolean isEmpty() {
        return n(this.f31077d);
    }

    @Override // java.util.Collection, java.lang.Iterable
    public Iterator iterator() {
        return o(this.f31077d);
    }

    @Override // java.util.Collection
    /* renamed from: j */
    public int size() {
        return k(this.f31077d);
    }

    public final /* synthetic */ long[] r() {
        return this.f31077d;
    }

    @Override // java.util.Collection
    public boolean remove(Object obj) {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.Collection
    public boolean removeAll(Collection collection) {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.Collection
    public boolean retainAll(Collection collection) {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // java.util.Collection
    public Object[] toArray() {
        return CollectionToArray.toArray(this);
    }

    public String toString() {
        return q(this.f31077d);
    }

    @Override // java.util.Collection
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        return CollectionToArray.toArray(this, array);
    }
}
