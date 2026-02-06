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
    public static final g f4045e = new i(y.f4298c);

    /* renamed from: i  reason: collision with root package name */
    private static final f f4046i;

    /* renamed from: o  reason: collision with root package name */
    private static final Comparator f4047o;

    /* renamed from: d  reason: collision with root package name */
    private int f4048d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends c {

        /* renamed from: d  reason: collision with root package name */
        private int f4049d = 0;

        /* renamed from: e  reason: collision with root package name */
        private final int f4050e;

        a() {
            this.f4050e = g.this.size();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f4049d < this.f4050e) {
                return true;
            }
            return false;
        }

        @Override // androidx.datastore.preferences.protobuf.g.InterfaceC0043g
        public byte nextByte() {
            int i10 = this.f4049d;
            if (i10 < this.f4050e) {
                this.f4049d = i10 + 1;
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
            InterfaceC0043g l10 = gVar.l();
            InterfaceC0043g l11 = gVar2.l();
            while (l10.hasNext() && l11.hasNext()) {
                int compare = Integer.compare(g.r(l10.nextByte()), g.r(l11.nextByte()));
                if (compare != 0) {
                    return compare;
                }
            }
            return Integer.compare(gVar.size(), gVar2.size());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class c implements InterfaceC0043g {
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
        private final int f4052q;

        /* renamed from: r  reason: collision with root package name */
        private final int f4053r;

        e(byte[] bArr, int i10, int i11) {
            super(bArr);
            g.e(i10, i10 + i11, bArr.length);
            this.f4052q = i10;
            this.f4053r = i11;
        }

        @Override // androidx.datastore.preferences.protobuf.g.i
        protected int B() {
            return this.f4052q;
        }

        @Override // androidx.datastore.preferences.protobuf.g.i, androidx.datastore.preferences.protobuf.g
        public byte c(int i10) {
            g.d(i10, size());
            return this.f4054p[this.f4052q + i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g.i, androidx.datastore.preferences.protobuf.g
        byte i(int i10) {
            return this.f4054p[this.f4052q + i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g.i, androidx.datastore.preferences.protobuf.g
        public int size() {
            return this.f4053r;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface f {
        byte[] a(byte[] bArr, int i10, int i11);
    }

    /* renamed from: androidx.datastore.preferences.protobuf.g$g  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0043g extends Iterator {
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
        protected final byte[] f4054p;

        i(byte[] bArr) {
            bArr.getClass();
            this.f4054p = bArr;
        }

        final boolean A(g gVar, int i10, int i11) {
            if (i11 <= gVar.size()) {
                int i12 = i10 + i11;
                if (i12 <= gVar.size()) {
                    if (gVar instanceof i) {
                        i iVar = (i) gVar;
                        byte[] bArr = this.f4054p;
                        byte[] bArr2 = iVar.f4054p;
                        int B = B() + i11;
                        int B2 = B();
                        int B3 = iVar.B() + i10;
                        while (B2 < B) {
                            if (bArr[B2] != bArr2[B3]) {
                                return false;
                            }
                            B2++;
                            B3++;
                        }
                        return true;
                    }
                    return gVar.q(i10, i12).equals(q(0, i11));
                }
                throw new IllegalArgumentException("Ran off end of other: " + i10 + ", " + i11 + ", " + gVar.size());
            }
            throw new IllegalArgumentException("Length too large: " + i11 + size());
        }

        protected int B() {
            return 0;
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public byte c(int i10) {
            return this.f4054p[i10];
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
                int p10 = p();
                int p11 = iVar.p();
                if (p10 != 0 && p11 != 0 && p10 != p11) {
                    return false;
                }
                return A(iVar, 0, size());
            }
            return obj.equals(this);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        byte i(int i10) {
            return this.f4054p[i10];
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public final boolean j() {
            int B = B();
            return p1.n(this.f4054p, B, size() + B);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        protected final int o(int i10, int i11, int i12) {
            return y.i(i10, this.f4054p, B() + i11, i12);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public final g q(int i10, int i11) {
            int e10 = g.e(i10, i11, size());
            if (e10 == 0) {
                return g.f4045e;
            }
            return new e(this.f4054p, B() + i10, e10);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        public int size() {
            return this.f4054p.length;
        }

        @Override // androidx.datastore.preferences.protobuf.g
        protected final String t(Charset charset) {
            return new String(this.f4054p, B(), size(), charset);
        }

        @Override // androidx.datastore.preferences.protobuf.g
        final void x(androidx.datastore.preferences.protobuf.f fVar) {
            fVar.a(this.f4054p, B(), size());
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
        f4046i = dVar;
        f4047o = new b();
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
        return new i(f4046i.a(bArr, i10, i11));
    }

    public static g h(String str) {
        return new i(str.getBytes(y.f4296a));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int r(byte b10) {
        return b10 & 255;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g v(byte[] bArr) {
        return new i(bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g w(byte[] bArr, int i10, int i11) {
        return new e(bArr, i10, i11);
    }

    public abstract byte c(int i10);

    public abstract boolean equals(Object obj);

    public final int hashCode() {
        int i10 = this.f4048d;
        if (i10 == 0) {
            int size = size();
            i10 = o(size, 0, size);
            if (i10 == 0) {
                i10 = 1;
            }
            this.f4048d = i10;
        }
        return i10;
    }

    abstract byte i(int i10);

    public abstract boolean j();

    public InterfaceC0043g l() {
        return new a();
    }

    protected abstract int o(int i10, int i11, int i12);

    protected final int p() {
        return this.f4048d;
    }

    public abstract g q(int i10, int i11);

    public final String s(Charset charset) {
        if (size() == 0) {
            return "";
        }
        return t(charset);
    }

    public abstract int size();

    protected abstract String t(Charset charset);

    public final String toString() {
        return String.format("<ByteString@%s size=%d>", Integer.toHexString(System.identityHashCode(this)), Integer.valueOf(size()));
    }

    public final String u() {
        return s(y.f4296a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void x(androidx.datastore.preferences.protobuf.f fVar);
}
