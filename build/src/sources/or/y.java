package or;

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
    private final byte[] f44249d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final byte[] f44250d;

        /* renamed from: e  reason: collision with root package name */
        private int f44251e;

        public a(byte[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            this.f44250d = array;
        }

        public byte a() {
            int i10 = this.f44251e;
            byte[] bArr = this.f44250d;
            if (i10 < bArr.length) {
                this.f44251e = i10 + 1;
                return x.d(bArr[i10]);
            }
            throw new NoSuchElementException(String.valueOf(this.f44251e));
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f44251e < this.f44250d.length) {
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
        this.f44249d = bArr;
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
            boolean r2 = r0 instanceof or.x
            if (r2 == 0) goto L31
            or.x r0 = (or.x) r0
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
        throw new UnsupportedOperationException("Method not decompiled: or.y.g(byte[], java.util.Collection):boolean");
    }

    public static boolean h(byte[] bArr, Object obj) {
        if (!(obj instanceof y) || !Intrinsics.areEqual(bArr, ((y) obj).s())) {
            return false;
        }
        return true;
    }

    public static final byte i(byte[] bArr, int i10) {
        return x.d(bArr[i10]);
    }

    public static int l(byte[] bArr) {
        return bArr.length;
    }

    public static int n(byte[] bArr) {
        return Arrays.hashCode(bArr);
    }

    public static boolean o(byte[] bArr) {
        if (bArr.length == 0) {
            return true;
        }
        return false;
    }

    public static Iterator p(byte[] bArr) {
        return new a(bArr);
    }

    public static final void q(byte[] bArr, int i10, byte b10) {
        bArr[i10] = b10;
    }

    public static String r(byte[] bArr) {
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
        return g(this.f44249d, elements);
    }

    public boolean e(byte b10) {
        return f(this.f44249d, b10);
    }

    @Override // java.util.Collection
    public boolean equals(Object obj) {
        return h(this.f44249d, obj);
    }

    @Override // java.util.Collection
    public int hashCode() {
        return n(this.f44249d);
    }

    @Override // java.util.Collection
    public boolean isEmpty() {
        return o(this.f44249d);
    }

    @Override // java.util.Collection, java.lang.Iterable
    public Iterator iterator() {
        return p(this.f44249d);
    }

    @Override // java.util.Collection
    /* renamed from: j */
    public int size() {
        return l(this.f44249d);
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

    public final /* synthetic */ byte[] s() {
        return this.f44249d;
    }

    @Override // java.util.Collection
    public Object[] toArray() {
        return CollectionToArray.toArray(this);
    }

    public String toString() {
        return r(this.f44249d);
    }

    @Override // java.util.Collection
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        return CollectionToArray.toArray(this, array);
    }
}
