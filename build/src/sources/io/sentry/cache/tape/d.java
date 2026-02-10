package io.sentry.cache.tape;

import androidx.recyclerview.widget.RecyclerView;
import java.io.Closeable;
import java.io.EOFException;
import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.channels.FileChannel;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements Closeable, Iterable {

    /* renamed from: x  reason: collision with root package name */
    private static final byte[] f28222x = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: d  reason: collision with root package name */
    RandomAccessFile f28223d;

    /* renamed from: e  reason: collision with root package name */
    final File f28224e;

    /* renamed from: o  reason: collision with root package name */
    long f28226o;

    /* renamed from: p  reason: collision with root package name */
    int f28227p;

    /* renamed from: q  reason: collision with root package name */
    b f28228q;

    /* renamed from: r  reason: collision with root package name */
    private b f28229r;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f28232u;

    /* renamed from: v  reason: collision with root package name */
    private final int f28233v;

    /* renamed from: w  reason: collision with root package name */
    boolean f28234w;

    /* renamed from: i  reason: collision with root package name */
    final int f28225i = 32;

    /* renamed from: s  reason: collision with root package name */
    private final byte[] f28230s = new byte[32];

    /* renamed from: t  reason: collision with root package name */
    int f28231t = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final File f28235a;

        /* renamed from: b  reason: collision with root package name */
        boolean f28236b = true;

        /* renamed from: c  reason: collision with root package name */
        int f28237c = -1;

        public a(File file) {
            if (file != null) {
                this.f28235a = file;
                return;
            }
            throw new NullPointerException("file == null");
        }

        public d a() {
            RandomAccessFile C0 = d.C0(this.f28235a);
            try {
                return new d(this.f28235a, C0, this.f28236b, this.f28237c);
            } catch (Throwable th2) {
                C0.close();
                throw th2;
            }
        }

        public a b(int i10) {
            this.f28237c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: c  reason: collision with root package name */
        static final b f28238c = new b(0, 0);

        /* renamed from: a  reason: collision with root package name */
        final long f28239a;

        /* renamed from: b  reason: collision with root package name */
        final int f28240b;

        b(long j10, int i10) {
            this.f28239a = j10;
            this.f28240b = i10;
        }

        public String toString() {
            return b.class.getSimpleName() + "[position=" + this.f28239a + ", length=" + this.f28240b + "]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class c implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        int f28241d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f28242e;

        /* renamed from: i  reason: collision with root package name */
        int f28243i;

        c() {
            this.f28242e = d.this.f28228q.f28239a;
            this.f28243i = d.this.f28231t;
        }

        private void a() {
            if (d.this.f28231t == this.f28243i) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public byte[] next() {
            if (!d.this.f28234w) {
                a();
                if (!d.this.isEmpty()) {
                    int i10 = this.f28241d;
                    d dVar = d.this;
                    if (i10 < dVar.f28227p) {
                        try {
                            try {
                                b W0 = dVar.W0(this.f28242e);
                                byte[] bArr = new byte[W0.f28240b];
                                long g22 = d.this.g2(W0.f28239a + 4);
                                this.f28242e = g22;
                                if (!d.this.W1(g22, bArr, 0, W0.f28240b)) {
                                    this.f28241d = d.this.f28227p;
                                    return d.f28222x;
                                }
                                this.f28242e = d.this.g2(W0.f28239a + 4 + W0.f28240b);
                                this.f28241d++;
                                return bArr;
                            } catch (IOException e10) {
                                throw ((Error) d.Q(e10));
                            }
                        } catch (IOException e11) {
                            throw ((Error) d.Q(e11));
                        } catch (OutOfMemoryError unused) {
                            d.this.S1();
                            this.f28241d = d.this.f28227p;
                            return d.f28222x;
                        }
                    }
                    throw new NoSuchElementException();
                }
                throw new NoSuchElementException();
            }
            throw new IllegalStateException("closed");
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (!d.this.f28234w) {
                a();
                if (this.f28241d != d.this.f28227p) {
                    return true;
                }
                return false;
            }
            throw new IllegalStateException("closed");
        }

        @Override // java.util.Iterator
        public void remove() {
            a();
            if (!d.this.isEmpty()) {
                if (this.f28241d == 1) {
                    try {
                        d.this.w1();
                        this.f28243i = d.this.f28231t;
                        this.f28241d--;
                        return;
                    } catch (IOException e10) {
                        throw ((Error) d.Q(e10));
                    }
                }
                throw new UnsupportedOperationException("Removal is only permitted from the head.");
            }
            throw new NoSuchElementException();
        }
    }

    d(File file, RandomAccessFile randomAccessFile, boolean z10, int i10) {
        this.f28224e = file;
        this.f28223d = randomAccessFile;
        this.f28232u = z10;
        this.f28233v = i10;
        a1();
    }

    private void C(long j10) {
        long j11;
        long j12;
        long j13 = j10 + 4;
        long u12 = u1();
        if (u12 < j13) {
            long j14 = this.f28226o;
            do {
                u12 += j14;
                j14 <<= 1;
            } while (u12 < j13);
            a2(j14);
            b bVar = this.f28229r;
            long g22 = g2(bVar.f28239a + 4 + bVar.f28240b);
            if (g22 <= this.f28228q.f28239a) {
                FileChannel channel = this.f28223d.getChannel();
                channel.position(this.f28226o);
                j11 = g22 - 32;
                if (channel.transferTo(32L, j11, channel) != j11) {
                    throw new AssertionError("Copied insufficient number of bytes!");
                }
            } else {
                j11 = 0;
            }
            long j15 = this.f28229r.f28239a;
            long j16 = this.f28228q.f28239a;
            if (j15 < j16) {
                long j17 = (this.f28226o + j15) - 32;
                h2(j14, this.f28227p, j16, j17);
                this.f28229r = new b(j17, this.f28229r.f28240b);
                j12 = j14;
            } else {
                h2(j14, this.f28227p, j16, j15);
                j12 = j14;
            }
            this.f28226o = j12;
            if (this.f28232u) {
                U1(32L, j11);
            }
        }
    }

    static RandomAccessFile C0(File file) {
        if (!file.exists()) {
            File file2 = new File(file.getPath() + ".tmp");
            RandomAccessFile V0 = V0(file2);
            try {
                V0.setLength(4096L);
                V0.seek(0L);
                V0.writeInt(-2147483647);
                V0.writeLong(4096L);
                V0.close();
                if (!file2.renameTo(file)) {
                    throw new IOException("Rename failed!");
                }
            } catch (Throwable th2) {
                V0.close();
                throw th2;
            }
        }
        return V0(file);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void S1() {
        this.f28223d.close();
        this.f28224e.delete();
        this.f28223d = C0(this.f28224e);
        a1();
    }

    private void U1(long j10, long j11) {
        long j12 = j10;
        while (j11 > 0) {
            byte[] bArr = f28222x;
            int min = (int) Math.min(j11, bArr.length);
            Z1(j12, bArr, 0, min);
            long j13 = min;
            j11 -= j13;
            j12 += j13;
        }
    }

    private static RandomAccessFile V0(File file) {
        return new RandomAccessFile(file, "rwd");
    }

    private void Z1(long j10, byte[] bArr, int i10, int i11) {
        long g22 = g2(j10);
        long j11 = this.f28226o;
        if (i11 + g22 <= j11) {
            this.f28223d.seek(g22);
            this.f28223d.write(bArr, i10, i11);
            return;
        }
        int i12 = (int) (j11 - g22);
        this.f28223d.seek(g22);
        this.f28223d.write(bArr, i10, i12);
        this.f28223d.seek(32L);
        this.f28223d.write(bArr, i10 + i12, i11 - i12);
    }

    private void a1() {
        this.f28223d.seek(0L);
        this.f28223d.readFully(this.f28230s);
        this.f28226o = s1(this.f28230s, 4);
        this.f28227p = r1(this.f28230s, 12);
        long s12 = s1(this.f28230s, 16);
        long s13 = s1(this.f28230s, 24);
        if (this.f28226o <= this.f28223d.length()) {
            if (this.f28226o > 32) {
                this.f28228q = W0(s12);
                this.f28229r = W0(s13);
                return;
            }
            throw new IOException("File is corrupt; length stored in header (" + this.f28226o + ") is invalid.");
        }
        throw new IOException("File is truncated. Expected length: " + this.f28226o + ", Actual length: " + this.f28223d.length());
    }

    private void a2(long j10) {
        this.f28223d.setLength(j10);
        this.f28223d.getChannel().force(true);
    }

    private long e2() {
        if (this.f28227p == 0) {
            return 32L;
        }
        b bVar = this.f28229r;
        long j10 = bVar.f28239a;
        long j11 = this.f28228q.f28239a;
        if (j10 >= j11) {
            return (j10 - j11) + 4 + bVar.f28240b + 32;
        }
        return (((j10 + 4) + bVar.f28240b) + this.f28226o) - j11;
    }

    private void h2(long j10, int i10, long j11, long j12) {
        this.f28223d.seek(0L);
        j2(this.f28230s, 0, -2147483647);
        o2(this.f28230s, 4, j10);
        j2(this.f28230s, 12, i10);
        o2(this.f28230s, 16, j11);
        o2(this.f28230s, 24, j12);
        this.f28223d.write(this.f28230s, 0, 32);
    }

    private static void j2(byte[] bArr, int i10, int i11) {
        bArr[i10] = (byte) (i11 >> 24);
        bArr[i10 + 1] = (byte) (i11 >> 16);
        bArr[i10 + 2] = (byte) (i11 >> 8);
        bArr[i10 + 3] = (byte) i11;
    }

    private static void o2(byte[] bArr, int i10, long j10) {
        bArr[i10] = (byte) (j10 >> 56);
        bArr[i10 + 1] = (byte) (j10 >> 48);
        bArr[i10 + 2] = (byte) (j10 >> 40);
        bArr[i10 + 3] = (byte) (j10 >> 32);
        bArr[i10 + 4] = (byte) (j10 >> 24);
        bArr[i10 + 5] = (byte) (j10 >> 16);
        bArr[i10 + 6] = (byte) (j10 >> 8);
        bArr[i10 + 7] = (byte) j10;
    }

    private static int r1(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 24) + ((bArr[i10 + 1] & 255) << 16) + ((bArr[i10 + 2] & 255) << 8) + (bArr[i10 + 3] & 255);
    }

    private static long s1(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 56) + ((bArr[i10 + 1] & 255) << 48) + ((bArr[i10 + 2] & 255) << 40) + ((bArr[i10 + 3] & 255) << 32) + ((bArr[i10 + 4] & 255) << 24) + ((bArr[i10 + 5] & 255) << 16) + ((bArr[i10 + 6] & 255) << 8) + (bArr[i10 + 7] & 255);
    }

    private long u1() {
        return this.f28226o - e2();
    }

    public boolean J0() {
        if (this.f28233v == -1 || size() != this.f28233v) {
            return false;
        }
        return true;
    }

    b W0(long j10) {
        if (j10 == 0) {
            return b.f28238c;
        }
        if (!W1(j10, this.f28230s, 0, 4)) {
            return b.f28238c;
        }
        return new b(j10, r1(this.f28230s, 0));
    }

    boolean W1(long j10, byte[] bArr, int i10, int i11) {
        try {
            long g22 = g2(j10);
            long j11 = this.f28226o;
            if (i11 + g22 <= j11) {
                this.f28223d.seek(g22);
                this.f28223d.readFully(bArr, i10, i11);
                return true;
            }
            int i12 = (int) (j11 - g22);
            this.f28223d.seek(g22);
            this.f28223d.readFully(bArr, i10, i12);
            this.f28223d.seek(32L);
            this.f28223d.readFully(bArr, i10 + i12, i11 - i12);
            return true;
        } catch (EOFException unused) {
            S1();
            return false;
        } catch (IOException e10) {
            throw e10;
        } catch (Throwable unused2) {
            S1();
            return false;
        }
    }

    public void clear() {
        if (!this.f28234w) {
            h2(4096L, 0, 0L, 0L);
            if (this.f28232u) {
                this.f28223d.seek(32L);
                this.f28223d.write(f28222x, 0, 4064);
            }
            this.f28227p = 0;
            b bVar = b.f28238c;
            this.f28228q = bVar;
            this.f28229r = bVar;
            if (this.f28226o > 4096) {
                a2(4096L);
            }
            this.f28226o = 4096L;
            this.f28231t++;
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28234w = true;
        this.f28223d.close();
    }

    long g2(long j10) {
        long j11 = this.f28226o;
        if (j10 < j11) {
            return j10;
        }
        return (j10 + 32) - j11;
    }

    public boolean isEmpty() {
        if (this.f28227p == 0) {
            return true;
        }
        return false;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new c();
    }

    public void s(byte[] bArr, int i10, int i11) {
        b bVar;
        long g22;
        long j10;
        if (bArr != null) {
            if ((i10 | i11) >= 0 && i11 <= bArr.length - i10) {
                if (!this.f28234w) {
                    if (J0()) {
                        w1();
                    }
                    C(i11);
                    boolean isEmpty = isEmpty();
                    if (isEmpty) {
                        g22 = 32;
                    } else {
                        g22 = g2(this.f28229r.f28239a + 4 + bVar.f28240b);
                    }
                    b bVar2 = new b(g22, i11);
                    j2(this.f28230s, 0, i11);
                    Z1(bVar2.f28239a, this.f28230s, 0, 4);
                    Z1(bVar2.f28239a + 4, bArr, i10, i11);
                    if (isEmpty) {
                        j10 = bVar2.f28239a;
                    } else {
                        j10 = this.f28228q.f28239a;
                    }
                    h2(this.f28226o, this.f28227p + 1, j10, bVar2.f28239a);
                    this.f28229r = bVar2;
                    this.f28227p++;
                    this.f28231t++;
                    if (isEmpty) {
                        this.f28228q = bVar2;
                        return;
                    }
                    return;
                }
                throw new IllegalStateException("closed");
            }
            throw new IndexOutOfBoundsException();
        }
        throw new NullPointerException("data == null");
    }

    public int size() {
        return this.f28227p;
    }

    public String toString() {
        return "QueueFile{file=" + this.f28224e + ", zero=" + this.f28232u + ", length=" + this.f28226o + ", size=" + this.f28227p + ", first=" + this.f28228q + ", last=" + this.f28229r + '}';
    }

    public void w1() {
        z1(1);
    }

    public void z1(int i10) {
        if (i10 >= 0) {
            if (i10 != 0) {
                if (i10 == this.f28227p) {
                    clear();
                    return;
                } else if (!isEmpty()) {
                    if (i10 <= this.f28227p) {
                        b bVar = this.f28228q;
                        long j10 = bVar.f28239a;
                        int i11 = bVar.f28240b;
                        long j11 = 0;
                        int i12 = 0;
                        long j12 = j10;
                        while (i12 < i10) {
                            j11 += i11 + 4;
                            long g22 = g2(j12 + 4 + i11);
                            if (W1(g22, this.f28230s, 0, 4)) {
                                i11 = r1(this.f28230s, 0);
                                i12++;
                                j12 = g22;
                            } else {
                                return;
                            }
                        }
                        h2(this.f28226o, this.f28227p - i10, j12, this.f28229r.f28239a);
                        this.f28227p -= i10;
                        this.f28231t++;
                        this.f28228q = new b(j12, i11);
                        if (this.f28232u) {
                            U1(j10, j11);
                            return;
                        }
                        return;
                    }
                    throw new IllegalArgumentException("Cannot remove more elements (" + i10 + ") than present in queue (" + this.f28227p + ").");
                } else {
                    throw new NoSuchElementException();
                }
            }
            return;
        }
        throw new IllegalArgumentException("Cannot remove negative (" + i10 + ") number of elements.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Throwable Q(Throwable th2) {
        throw th2;
    }
}
