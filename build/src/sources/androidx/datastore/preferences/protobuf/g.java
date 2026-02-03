package androidx.datastore.preferences.protobuf;

import java.io.Serializable;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g implements Iterable, Serializable {

    /* renamed from: e  reason: collision with root package name */
    public static final g f3635e = new i(y.f3888c);

    /* renamed from: i  reason: collision with root package name */
    private static final f f3636i;

    /* renamed from: o  reason: collision with root package name */
    private static final Comparator f3637o;

    /* renamed from: d  reason: collision with root package name */
    private int f3638d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends c {

        /* renamed from: d  reason: collision with root package name */
        private int f3639d = 0;

        /* renamed from: e  reason: collision with root package name */
        private final int f3640e;

        a() {
            this.f3640e = g.this.size();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f3639d < this.f3640e) {
                return true;
            }
            return false;
        }

        @Override // androidx.datastore.preferences.protobuf.g.InterfaceC0046g
        public byte nextByte() {
            int i10 = this.f3639d;
            if (i10 < this.f3640e) {
                this.f3639d = i10 + 1;
                return g.this.i(i10);
            }
            throw new NoSuchElementException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b implements Comparator {
        b() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(g gVar, g gVar2) {
            InterfaceC0046g k10 = gVar.k();
            InterfaceC0046g k11 = gVar2.k();
            while (k10.hasNext() && k11.hasNext()) {
                int compare = Integer.compare(g.p(k10.nextByte()), g.p(k11.nextByte()));
                if (compare != 0) {
                    return compare;
                }
            }
            return Integer.compare(gVar.size(), gVar2.size());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class c implements InterfaceC0046g {
        c() {
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public final Byte next() {
            return Byte.valueOf(nextByte());
        }

        @Override // java.util.Iterator
        public final void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class d implements f {
        private d() {
        }

        @Override // androidx.datastore.preferences.protobuf.g.f
        public byte[] a(byte[] bArr, int i10, int i11) {
            return Arrays.copyOfRange(bArr, i10, i11 + i10);
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends i {

        /* renamed from: q  reason: collision with root package name */
        private final int f3642q;

        /* renamed from: r  reason: collision with root package name */
        private final int f3643r;

        e(byte[] bArr, int i10, int i11) {
            super(bArr);
            g.e(i10, i10 + i11, bArr.length);
            this.f3642q = i10;
            this.f3643r = i11;
        }

        @Override // androidx.datastore.preferences.protobuf.g.i, androidx.datastore.preferences.protobuf.g
        public byte c(int i10) {
            g.d(i10, size());
            return this.f3644p[this.f3642q + i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g.i, androidx.datastore.preferences.protobuf.g
        byte i(int i10) {
            return this.f3644p[this.f3642q + i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g.i, androidx.datastore.preferences.protobuf.g
        public int size() {
            return this.f3643r;
        }

        @Override // androidx.datastore.preferences.protobuf.g.i
        protected int x() {
            return this.f3642q;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface f {
        byte[] a(byte[] bArr, int i10, int i11);
    }

    /* renamed from: androidx.datastore.preferences.protobuf.g$g  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0046g extends Iterator {
        byte nextByte();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class h extends g {
        h() {
        }

        @Override // java.lang.Iterable
        public /* bridge */ /* synthetic */ Iterator iterator() {
            return super.k();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i extends h {

        /* renamed from: p  reason: collision with root package name */
        protected final byte[] f3644p;

        i(byte[] bArr) {
            bArr.getClass();
            this.f3644p = bArr;
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public byte c(int i10) {
            return this.f3644p[i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public final boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            if (!(obj instanceof g) || size() != ((g) obj).size()) {
                return false;
            }
            if (size() == 0) {
                return true;
            }
            if (obj instanceof i) {
                i iVar = (i) obj;
                int n10 = n();
                int n11 = iVar.n();
                if (n10 != 0 && n11 != 0 && n10 != n11) {
                    return false;
                }
                return w(iVar, 0, size());
            }
            return obj.equals(this);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        byte i(int i10) {
            return this.f3644p[i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public final boolean j() {
            int x10 = x();
            return p1.n(this.f3644p, x10, size() + x10);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        protected final int m(int i10, int i11, int i12) {
            return y.i(i10, this.f3644p, x() + i11, i12);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public final g o(int i10, int i11) {
            int e10 = g.e(i10, i11, size());
            if (e10 == 0) {
                return g.f3635e;
            }
            return new e(this.f3644p, x() + i10, e10);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        protected final String r(Charset charset) {
            return new String(this.f3644p, x(), size(), charset);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public int size() {
            return this.f3644p.length;
        }

        @Override // androidx.datastore.preferences.protobuf.g
        final void v(androidx.datastore.preferences.protobuf.f fVar) {
            fVar.a(this.f3644p, x(), size());
        }

        final boolean w(g gVar, int i10, int i11) {
            if (i11 <= gVar.size()) {
                int i12 = i10 + i11;
                if (i12 <= gVar.size()) {
                    if (gVar instanceof i) {
                        i iVar = (i) gVar;
                        byte[] bArr = this.f3644p;
                        byte[] bArr2 = iVar.f3644p;
                        int x10 = x() + i11;
                        int x11 = x();
                        int x12 = iVar.x() + i10;
                        while (x11 < x10) {
                            if (bArr[x11] != bArr2[x12]) {
                                return false;
                            }
                            x11++;
                            x12++;
                        }
                        return true;
                    }
                    return gVar.o(i10, i12).equals(o(0, i11));
                }
                throw new IllegalArgumentException("Ran off end of other: " + i10 + ", " + i11 + ", " + gVar.size());
            }
            throw new IllegalArgumentException("Length too large: " + i11 + size());
        }

        protected int x() {
            return 0;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class j implements f {
        private j() {
        }

        @Override // androidx.datastore.preferences.protobuf.g.f
        public byte[] a(byte[] bArr, int i10, int i11) {
            byte[] bArr2 = new byte[i11];
            System.arraycopy(bArr, i10, bArr2, 0, i11);
            return bArr2;
        }

        /* synthetic */ j(a aVar) {
            this();
        }
    }

    static {
        f dVar;
        if (androidx.datastore.preferences.protobuf.d.c()) {
            dVar = new j(null);
        } else {
            dVar = new d(null);
        }
        f3636i = dVar;
        f3637o = new b();
    }

    g() {
    }

    static void d(int i10, int i11) {
        if (((i11 - (i10 + 1)) | i10) < 0) {
            if (i10 < 0) {
                throw new ArrayIndexOutOfBoundsException("Index < 0: " + i10);
            }
            throw new ArrayIndexOutOfBoundsException("Index > length: " + i10 + ", " + i11);
        }
    }

    static int e(int i10, int i11, int i12) {
        int i13 = i11 - i10;
        if ((i10 | i11 | i13 | (i12 - i11)) < 0) {
            if (i10 >= 0) {
                if (i11 < i10) {
                    throw new IndexOutOfBoundsException("Beginning index larger than ending index: " + i10 + ", " + i11);
                }
                throw new IndexOutOfBoundsException("End index: " + i11 + " >= " + i12);
            }
            throw new IndexOutOfBoundsException("Beginning index: " + i10 + " < 0");
        }
        return i13;
    }

    public static g f(byte[] bArr) {
        return g(bArr, 0, bArr.length);
    }

    public static g g(byte[] bArr, int i10, int i11) {
        e(i10, i10 + i11, bArr.length);
        return new i(f3636i.a(bArr, i10, i11));
    }

    public static g h(String str) {
        return new i(str.getBytes(y.f3886a));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int p(byte b10) {
        return b10 & 255;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g t(byte[] bArr) {
        return new i(bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g u(byte[] bArr, int i10, int i11) {
        return new e(bArr, i10, i11);
    }

    public abstract byte c(int i10);

    public abstract boolean equals(Object obj);

    public final int hashCode() {
        int i10 = this.f3638d;
        if (i10 == 0) {
            int size = size();
            i10 = m(size, 0, size);
            if (i10 == 0) {
                i10 = 1;
            }
            this.f3638d = i10;
        }
        return i10;
    }

    abstract byte i(int i10);

    public abstract boolean j();

    public InterfaceC0046g k() {
        return new a();
    }

    protected abstract int m(int i10, int i11, int i12);

    protected final int n() {
        return this.f3638d;
    }

    public abstract g o(int i10, int i11);

    public final String q(Charset charset) {
        if (size() == 0) {
            return "";
        }
        return r(charset);
    }

    protected abstract String r(Charset charset);

    public final String s() {
        return q(y.f3886a);
    }

    public abstract int size();

    public final String toString() {
        return String.format("<ByteString@%s size=%d>", Integer.toHexString(System.identityHashCode(this)), Integer.valueOf(size()));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void v(androidx.datastore.preferences.protobuf.f fVar);
}
