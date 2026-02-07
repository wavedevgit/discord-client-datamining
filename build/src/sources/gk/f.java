package gk;

import java.io.Serializable;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Iterator;
import java.util.Locale;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f implements Iterable, Serializable {

    /* renamed from: e  reason: collision with root package name */
    public static final f f25254e = new i(u.f25414d);

    /* renamed from: i  reason: collision with root package name */
    private static final InterfaceC0340f f25255i;

    /* renamed from: o  reason: collision with root package name */
    private static final Comparator f25256o;

    /* renamed from: d  reason: collision with root package name */
    private int f25257d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends c {

        /* renamed from: d  reason: collision with root package name */
        private int f25258d = 0;

        /* renamed from: e  reason: collision with root package name */
        private final int f25259e;

        a() {
            this.f25259e = f.this.size();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f25258d < this.f25259e) {
                return true;
            }
            return false;
        }

        @Override // gk.f.g
        public byte nextByte() {
            int i10 = this.f25258d;
            if (i10 < this.f25259e) {
                this.f25258d = i10 + 1;
                return f.this.i(i10);
            }
            throw new NoSuchElementException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b implements Comparator {
        b() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(f fVar, f fVar2) {
            g it = fVar.iterator();
            g it2 = fVar2.iterator();
            while (it.hasNext() && it2.hasNext()) {
                int compareTo = Integer.valueOf(f.r(it.nextByte())).compareTo(Integer.valueOf(f.r(it2.nextByte())));
                if (compareTo != 0) {
                    return compareTo;
                }
            }
            return Integer.valueOf(fVar.size()).compareTo(Integer.valueOf(fVar2.size()));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static abstract class c implements g {
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

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class d implements InterfaceC0340f {
        private d() {
        }

        @Override // gk.f.InterfaceC0340f
        public byte[] a(byte[] bArr, int i10, int i11) {
            return Arrays.copyOfRange(bArr, i10, i11 + i10);
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends i {

        /* renamed from: q  reason: collision with root package name */
        private final int f25261q;

        /* renamed from: r  reason: collision with root package name */
        private final int f25262r;

        e(byte[] bArr, int i10, int i11) {
            super(bArr);
            f.e(i10, i10 + i11, bArr.length);
            this.f25261q = i10;
            this.f25262r = i11;
        }

        @Override // gk.f.i
        protected int B() {
            return this.f25261q;
        }

        @Override // gk.f.i, gk.f
        public byte c(int i10) {
            f.d(i10, size());
            return this.f25263p[this.f25261q + i10];
        }

        @Override // gk.f.i, gk.f
        byte i(int i10) {
            return this.f25263p[this.f25261q + i10];
        }

        @Override // gk.f.i, gk.f
        public int size() {
            return this.f25262r;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: gk.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0340f {
        byte[] a(byte[] bArr, int i10, int i11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface g extends Iterator {
        byte nextByte();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static abstract class h extends f {
        h() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class i extends h {

        /* renamed from: p  reason: collision with root package name */
        protected final byte[] f25263p;

        i(byte[] bArr) {
            bArr.getClass();
            this.f25263p = bArr;
        }

        final boolean A(f fVar, int i10, int i11) {
            if (i11 <= fVar.size()) {
                int i12 = i10 + i11;
                if (i12 <= fVar.size()) {
                    if (fVar instanceof i) {
                        i iVar = (i) fVar;
                        byte[] bArr = this.f25263p;
                        byte[] bArr2 = iVar.f25263p;
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
                    return fVar.q(i10, i12).equals(q(0, i11));
                }
                throw new IllegalArgumentException("Ran off end of other: " + i10 + ", " + i11 + ", " + fVar.size());
            }
            throw new IllegalArgumentException("Length too large: " + i11 + size());
        }

        protected int B() {
            return 0;
        }

        @Override // gk.f
        public byte c(int i10) {
            return this.f25263p[i10];
        }

        @Override // gk.f
        public final boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            if (!(obj instanceof f) || size() != ((f) obj).size()) {
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

        @Override // gk.f
        byte i(int i10) {
            return this.f25263p[i10];
        }

        @Override // gk.f
        public final boolean j() {
            int B = B();
            return i1.k(this.f25263p, B, size() + B);
        }

        @Override // gk.f
        protected final int o(int i10, int i11, int i12) {
            return u.h(i10, this.f25263p, B() + i11, i12);
        }

        @Override // gk.f
        public final f q(int i10, int i11) {
            int e10 = f.e(i10, i11, size());
            if (e10 == 0) {
                return f.f25254e;
            }
            return new e(this.f25263p, B() + i10, e10);
        }

        @Override // gk.f
        public int size() {
            return this.f25263p.length;
        }

        @Override // gk.f
        protected final String t(Charset charset) {
            return new String(this.f25263p, B(), size(), charset);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class j implements InterfaceC0340f {
        private j() {
        }

        @Override // gk.f.InterfaceC0340f
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
        InterfaceC0340f dVar;
        if (gk.d.c()) {
            dVar = new j(null);
        } else {
            dVar = new d(null);
        }
        f25255i = dVar;
        f25256o = new b();
    }

    f() {
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

    public static f f(byte[] bArr) {
        return g(bArr, 0, bArr.length);
    }

    public static f g(byte[] bArr, int i10, int i11) {
        e(i10, i10 + i11, bArr.length);
        return new i(f25255i.a(bArr, i10, i11));
    }

    public static f h(String str) {
        return new i(str.getBytes(u.f25412b));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int r(byte b10) {
        return b10 & 255;
    }

    private String v() {
        if (size() <= 50) {
            return b1.a(this);
        }
        return b1.a(q(0, 47)) + "...";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f w(byte[] bArr) {
        return new i(bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f x(byte[] bArr, int i10, int i11) {
        return new e(bArr, i10, i11);
    }

    public abstract byte c(int i10);

    public abstract boolean equals(Object obj);

    public final int hashCode() {
        int i10 = this.f25257d;
        if (i10 == 0) {
            int size = size();
            i10 = o(size, 0, size);
            if (i10 == 0) {
                i10 = 1;
            }
            this.f25257d = i10;
        }
        return i10;
    }

    abstract byte i(int i10);

    public abstract boolean j();

    @Override // java.lang.Iterable
    /* renamed from: l */
    public g iterator() {
        return new a();
    }

    protected abstract int o(int i10, int i11, int i12);

    protected final int p() {
        return this.f25257d;
    }

    public abstract f q(int i10, int i11);

    public final String s(Charset charset) {
        if (size() == 0) {
            return "";
        }
        return t(charset);
    }

    public abstract int size();

    protected abstract String t(Charset charset);

    public final String toString() {
        return String.format(Locale.ROOT, "<ByteString@%s size=%d contents=\"%s\">", Integer.toHexString(System.identityHashCode(this)), Integer.valueOf(size()), v());
    }

    public final String u() {
        return s(u.f25412b);
    }
}
