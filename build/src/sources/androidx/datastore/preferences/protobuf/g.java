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
    public static final g f3716e = new i(y.f3969c);

    /* renamed from: i  reason: collision with root package name */
    private static final f f3717i;

    /* renamed from: o  reason: collision with root package name */
    private static final Comparator f3718o;

    /* renamed from: d  reason: collision with root package name */
    private int f3719d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends c {

        /* renamed from: d  reason: collision with root package name */
        private int f3720d = 0;

        /* renamed from: e  reason: collision with root package name */
        private final int f3721e;

        a() {
            this.f3721e = g.this.size();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f3720d < this.f3721e) {
                return true;
            }
            return false;
        }

        @Override // androidx.datastore.preferences.protobuf.g.InterfaceC0045g
        public byte nextByte() {
            int i10 = this.f3720d;
            if (i10 < this.f3721e) {
                this.f3720d = i10 + 1;
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
            InterfaceC0045g l10 = gVar.l();
            InterfaceC0045g l11 = gVar2.l();
            while (l10.hasNext() && l11.hasNext()) {
                int compare = Integer.compare(g.q(l10.nextByte()), g.q(l11.nextByte()));
                if (compare != 0) {
                    return compare;
                }
            }
            return Integer.compare(gVar.size(), gVar2.size());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class c implements InterfaceC0045g {
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
        private final int f3723q;

        /* renamed from: r  reason: collision with root package name */
        private final int f3724r;

        e(byte[] bArr, int i10, int i11) {
            super(bArr);
            g.e(i10, i10 + i11, bArr.length);
            this.f3723q = i10;
            this.f3724r = i11;
        }

        @Override // androidx.datastore.preferences.protobuf.g.i, androidx.datastore.preferences.protobuf.g
        public byte c(int i10) {
            g.d(i10, size());
            return this.f3725p[this.f3723q + i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g.i, androidx.datastore.preferences.protobuf.g
        byte i(int i10) {
            return this.f3725p[this.f3723q + i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g.i, androidx.datastore.preferences.protobuf.g
        public int size() {
            return this.f3724r;
        }

        @Override // androidx.datastore.preferences.protobuf.g.i
        protected int y() {
            return this.f3723q;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface f {
        byte[] a(byte[] bArr, int i10, int i11);
    }

    /* renamed from: androidx.datastore.preferences.protobuf.g$g  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0045g extends Iterator {
        byte nextByte();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class h extends g {
        h() {
        }

        @Override // java.lang.Iterable
        public /* bridge */ /* synthetic */ Iterator iterator() {
            return super.l();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i extends h {

        /* renamed from: p  reason: collision with root package name */
        protected final byte[] f3725p;

        i(byte[] bArr) {
            bArr.getClass();
            this.f3725p = bArr;
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public byte c(int i10) {
            return this.f3725p[i10];
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
                int o10 = o();
                int o11 = iVar.o();
                if (o10 != 0 && o11 != 0 && o10 != o11) {
                    return false;
                }
                return x(iVar, 0, size());
            }
            return obj.equals(this);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        byte i(int i10) {
            return this.f3725p[i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public final boolean j() {
            int y10 = y();
            return p1.n(this.f3725p, y10, size() + y10);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        protected final int n(int i10, int i11, int i12) {
            return y.i(i10, this.f3725p, y() + i11, i12);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public final g p(int i10, int i11) {
            int e10 = g.e(i10, i11, size());
            if (e10 == 0) {
                return g.f3716e;
            }
            return new e(this.f3725p, y() + i10, e10);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        protected final String s(Charset charset) {
            return new String(this.f3725p, y(), size(), charset);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public int size() {
            return this.f3725p.length;
        }

        @Override // androidx.datastore.preferences.protobuf.g
        final void w(androidx.datastore.preferences.protobuf.f fVar) {
            fVar.a(this.f3725p, y(), size());
        }

        final boolean x(g gVar, int i10, int i11) {
            if (i11 <= gVar.size()) {
                int i12 = i10 + i11;
                if (i12 <= gVar.size()) {
                    if (gVar instanceof i) {
                        i iVar = (i) gVar;
                        byte[] bArr = this.f3725p;
                        byte[] bArr2 = iVar.f3725p;
                        int y10 = y() + i11;
                        int y11 = y();
                        int y12 = iVar.y() + i10;
                        while (y11 < y10) {
                            if (bArr[y11] != bArr2[y12]) {
                                return false;
                            }
                            y11++;
                            y12++;
                        }
                        return true;
                    }
                    return gVar.p(i10, i12).equals(p(0, i11));
                }
                throw new IllegalArgumentException("Ran off end of other: " + i10 + ", " + i11 + ", " + gVar.size());
            }
            throw new IllegalArgumentException("Length too large: " + i11 + size());
        }

        protected int y() {
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
        f3717i = dVar;
        f3718o = new b();
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
        return new i(f3717i.a(bArr, i10, i11));
    }

    public static g h(String str) {
        return new i(str.getBytes(y.f3967a));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int q(byte b10) {
        return b10 & 255;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g u(byte[] bArr) {
        return new i(bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g v(byte[] bArr, int i10, int i11) {
        return new e(bArr, i10, i11);
    }

    public abstract byte c(int i10);

    public abstract boolean equals(Object obj);

    public final int hashCode() {
        int i10 = this.f3719d;
        if (i10 == 0) {
            int size = size();
            i10 = n(size, 0, size);
            if (i10 == 0) {
                i10 = 1;
            }
            this.f3719d = i10;
        }
        return i10;
    }

    abstract byte i(int i10);

    public abstract boolean j();

    public InterfaceC0045g l() {
        return new a();
    }

    protected abstract int n(int i10, int i11, int i12);

    protected final int o() {
        return this.f3719d;
    }

    public abstract g p(int i10, int i11);

    public final String r(Charset charset) {
        if (size() == 0) {
            return "";
        }
        return s(charset);
    }

    protected abstract String s(Charset charset);

    public abstract int size();

    public final String t() {
        return r(y.f3967a);
    }

    public final String toString() {
        return String.format("<ByteString@%s size=%d>", Integer.toHexString(System.identityHashCode(this)), Integer.valueOf(size()));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void w(androidx.datastore.preferences.protobuf.f fVar);
}
