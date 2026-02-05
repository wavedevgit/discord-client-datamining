package or;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.CollectionToArray;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements Collection, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private final int[] f44201d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final int[] f44202d;

        /* renamed from: e  reason: collision with root package name */
        private int f44203e;

        public a(int[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            this.f44202d = array;
        }

        public int a() {
            int i10 = this.f44203e;
            int[] iArr = this.f44202d;
            if (i10 < iArr.length) {
                this.f44203e = i10 + 1;
                return z.d(iArr[i10]);
            }
            throw new NoSuchElementException(String.valueOf(this.f44203e));
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f44203e < this.f44202d.length) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public /* bridge */ /* synthetic */ Object next() {
            return z.a(a());
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    private /* synthetic */ a0(int[] iArr) {
        this.f44201d = iArr;
    }

    public static final /* synthetic */ a0 b(int[] iArr) {
        return new a0(iArr);
    }

    public static int[] c(int i10) {
        return d(new int[i10]);
    }

    public static int[] d(int[] storage) {
        Intrinsics.checkNotNullParameter(storage, "storage");
        return storage;
    }

    public static boolean f(int[] iArr, int i10) {
        return kotlin.collections.i.L(iArr, i10);
    }

    /* JADX WARN: Removed duplicated region for block: B:8:0x001c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static boolean g(int[] r3, java.util.Collection r4) {
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
            boolean r2 = r0 instanceof or.z
            if (r2 == 0) goto L31
            or.z r0 = (or.z) r0
            int r0 = r0.h()
            boolean r0 = kotlin.collections.i.L(r3, r0)
            if (r0 == 0) goto L31
            goto L16
        L31:
            r3 = 0
            return r3
        L33:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: or.a0.g(int[], java.util.Collection):boolean");
    }

    public static boolean h(int[] iArr, Object obj) {
        if (!(obj instanceof a0) || !Intrinsics.areEqual(iArr, ((a0) obj).s())) {
            return false;
        }
        return true;
    }

    public static final int i(int[] iArr, int i10) {
        return z.d(iArr[i10]);
    }

    public static int l(int[] iArr) {
        return iArr.length;
    }

    public static int n(int[] iArr) {
        return Arrays.hashCode(iArr);
    }

    public static boolean o(int[] iArr) {
        if (iArr.length == 0) {
            return true;
        }
        return false;
    }

    public static Iterator p(int[] iArr) {
        return new a(iArr);
    }

    public static final void q(int[] iArr, int i10, int i11) {
        iArr[i10] = i11;
    }

    public static String r(int[] iArr) {
        return "UIntArray(storage=" + Arrays.toString(iArr) + ')';
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
        if (!(obj instanceof z)) {
            return false;
        }
        return e(((z) obj).h());
    }

    @Override // java.util.Collection
    public boolean containsAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return g(this.f44201d, elements);
    }

    public boolean e(int i10) {
        return f(this.f44201d, i10);
    }

    @Override // java.util.Collection
    public boolean equals(Object obj) {
        return h(this.f44201d, obj);
    }

    @Override // java.util.Collection
    public int hashCode() {
        return n(this.f44201d);
    }

    @Override // java.util.Collection
    public boolean isEmpty() {
        return o(this.f44201d);
    }

    @Override // java.util.Collection, java.lang.Iterable
    public Iterator iterator() {
        return p(this.f44201d);
    }

    @Override // java.util.Collection
    /* renamed from: j */
    public int size() {
        return l(this.f44201d);
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

    public final /* synthetic */ int[] s() {
        return this.f44201d;
    }

    @Override // java.util.Collection
    public Object[] toArray() {
        return CollectionToArray.toArray(this);
    }

    public String toString() {
        return r(this.f44201d);
    }

    @Override // java.util.Collection
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        return CollectionToArray.toArray(this, array);
    }
}
