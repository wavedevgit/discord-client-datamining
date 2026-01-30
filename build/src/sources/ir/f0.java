package ir;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.CollectionToArray;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 implements Collection, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private final short[] f31104d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final short[] f31105d;

        /* renamed from: e  reason: collision with root package name */
        private int f31106e;

        public a(short[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            this.f31105d = array;
        }

        public short a() {
            int i10 = this.f31106e;
            short[] sArr = this.f31105d;
            if (i10 < sArr.length) {
                this.f31106e = i10 + 1;
                return e0.d(sArr[i10]);
            }
            throw new NoSuchElementException(String.valueOf(this.f31106e));
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f31106e < this.f31105d.length) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public /* bridge */ /* synthetic */ Object next() {
            return e0.a(a());
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    private /* synthetic */ f0(short[] sArr) {
        this.f31104d = sArr;
    }

    public static final /* synthetic */ f0 b(short[] sArr) {
        return new f0(sArr);
    }

    public static short[] c(int i10) {
        return d(new short[i10]);
    }

    public static short[] d(short[] storage) {
        Intrinsics.checkNotNullParameter(storage, "storage");
        return storage;
    }

    public static boolean f(short[] sArr, short s10) {
        return kotlin.collections.i.O(sArr, s10);
    }

    /* JADX WARN: Removed duplicated region for block: B:8:0x001c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static boolean g(short[] r3, java.util.Collection r4) {
        /*
            java.lang.String r0 = "elements"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.lang.Iterable r4 = (java.lang.Iterable) r4
            r0 = r4
            java.util.Collection r0 = (java.util.Collection) r0
            boolean r0 = r0.isEmpty()
            r1 = 1
            if (r0 == 0) goto L12
            return r1
        L12:
            java.util.Iterator r4 = r4.iterator()
        L16:
            boolean r0 = r4.hasNext()
            if (r0 == 0) goto L33
            java.lang.Object r0 = r4.next()
            boolean r2 = r0 instanceof ir.e0
            if (r2 == 0) goto L31
            ir.e0 r0 = (ir.e0) r0
            short r0 = r0.h()
            boolean r0 = kotlin.collections.i.O(r3, r0)
            if (r0 == 0) goto L31
            goto L16
        L31:
            r3 = 0
            return r3
        L33:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: ir.f0.g(short[], java.util.Collection):boolean");
    }

    public static boolean h(short[] sArr, Object obj) {
        if (!(obj instanceof f0) || !Intrinsics.areEqual(sArr, ((f0) obj).r())) {
            return false;
        }
        return true;
    }

    public static final short i(short[] sArr, int i10) {
        return e0.d(sArr[i10]);
    }

    public static int k(short[] sArr) {
        return sArr.length;
    }

    public static int m(short[] sArr) {
        return Arrays.hashCode(sArr);
    }

    public static boolean n(short[] sArr) {
        if (sArr.length == 0) {
            return true;
        }
        return false;
    }

    public static Iterator o(short[] sArr) {
        return new a(sArr);
    }

    public static final void p(short[] sArr, int i10, short s10) {
        sArr[i10] = s10;
    }

    public static String q(short[] sArr) {
        return "UShortArray(storage=" + Arrays.toString(sArr) + ')';
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
        if (!(obj instanceof e0)) {
            return false;
        }
        return e(((e0) obj).h());
    }

    @Override // java.util.Collection
    public boolean containsAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return g(this.f31104d, elements);
    }

    public boolean e(short s10) {
        return f(this.f31104d, s10);
    }

    @Override // java.util.Collection
    public boolean equals(Object obj) {
        return h(this.f31104d, obj);
    }

    @Override // java.util.Collection
    public int hashCode() {
        return m(this.f31104d);
    }

    @Override // java.util.Collection
    public boolean isEmpty() {
        return n(this.f31104d);
    }

    @Override // java.util.Collection, java.lang.Iterable
    public Iterator iterator() {
        return o(this.f31104d);
    }

    @Override // java.util.Collection
    /* renamed from: j */
    public int size() {
        return k(this.f31104d);
    }

    public final /* synthetic */ short[] r() {
        return this.f31104d;
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
        return q(this.f31104d);
    }

    @Override // java.util.Collection
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        return CollectionToArray.toArray(this, array);
    }
}
