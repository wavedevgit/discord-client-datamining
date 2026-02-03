package lr;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.CollectionToArray;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements Collection, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f37137d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final byte[] f37138d;

        /* renamed from: e  reason: collision with root package name */
        private int f37139e;

        public a(byte[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            this.f37138d = array;
        }

        public byte a() {
            int i10 = this.f37139e;
            byte[] bArr = this.f37138d;
            if (i10 < bArr.length) {
                this.f37139e = i10 + 1;
                return x.d(bArr[i10]);
            }
            throw new NoSuchElementException(String.valueOf(this.f37139e));
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37139e < this.f37138d.length) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public /* bridge */ /* synthetic */ Object next() {
            return x.a(a());
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    private /* synthetic */ y(byte[] bArr) {
        this.f37137d = bArr;
    }

    public static final /* synthetic */ y b(byte[] bArr) {
        return new y(bArr);
    }

    public static byte[] c(int i10) {
        return d(new byte[i10]);
    }

    public static byte[] d(byte[] storage) {
        Intrinsics.checkNotNullParameter(storage, "storage");
        return storage;
    }

    public static boolean f(byte[] bArr, byte b10) {
        return kotlin.collections.i.J(bArr, b10);
    }

    /* JADX WARN: Removed duplicated region for block: B:8:0x001c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static boolean g(byte[] r3, java.util.Collection r4) {
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
            boolean r2 = r0 instanceof lr.x
            if (r2 == 0) goto L31
            lr.x r0 = (lr.x) r0
            byte r0 = r0.h()
            boolean r0 = kotlin.collections.i.J(r3, r0)
            if (r0 == 0) goto L31
            goto L16
        L31:
            r3 = 0
            return r3
        L33:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: lr.y.g(byte[], java.util.Collection):boolean");
    }

    public static boolean h(byte[] bArr, Object obj) {
        if (!(obj instanceof y) || !Intrinsics.areEqual(bArr, ((y) obj).r())) {
            return false;
        }
        return true;
    }

    public static final byte i(byte[] bArr, int i10) {
        return x.d(bArr[i10]);
    }

    public static int k(byte[] bArr) {
        return bArr.length;
    }

    public static int m(byte[] bArr) {
        return Arrays.hashCode(bArr);
    }

    public static boolean n(byte[] bArr) {
        if (bArr.length == 0) {
            return true;
        }
        return false;
    }

    public static Iterator o(byte[] bArr) {
        return new a(bArr);
    }

    public static final void p(byte[] bArr, int i10, byte b10) {
        bArr[i10] = b10;
    }

    public static String q(byte[] bArr) {
        return "UByteArray(storage=" + Arrays.toString(bArr) + ')';
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
        if (!(obj instanceof x)) {
            return false;
        }
        return e(((x) obj).h());
    }

    @Override // java.util.Collection
    public boolean containsAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return g(this.f37137d, elements);
    }

    public boolean e(byte b10) {
        return f(this.f37137d, b10);
    }

    @Override // java.util.Collection
    public boolean equals(Object obj) {
        return h(this.f37137d, obj);
    }

    @Override // java.util.Collection
    public int hashCode() {
        return m(this.f37137d);
    }

    @Override // java.util.Collection
    public boolean isEmpty() {
        return n(this.f37137d);
    }

    @Override // java.util.Collection, java.lang.Iterable
    public Iterator iterator() {
        return o(this.f37137d);
    }

    @Override // java.util.Collection
    /* renamed from: j */
    public int size() {
        return k(this.f37137d);
    }

    public final /* synthetic */ byte[] r() {
        return this.f37137d;
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
        return q(this.f37137d);
    }

    @Override // java.util.Collection
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        return CollectionToArray.toArray(this, array);
    }
}
