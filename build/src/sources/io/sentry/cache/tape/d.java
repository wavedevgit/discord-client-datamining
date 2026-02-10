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
    private static final byte[] f29157x = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: d  reason: collision with root package name */
    RandomAccessFile f29158d;

    /* renamed from: e  reason: collision with root package name */
    final File f29159e;

    /* renamed from: o  reason: collision with root package name */
    long f29161o;

    /* renamed from: p  reason: collision with root package name */
    int f29162p;

    /* renamed from: q  reason: collision with root package name */
    b f29163q;

    /* renamed from: r  reason: collision with root package name */
    private b f29164r;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f29167u;

    /* renamed from: v  reason: collision with root package name */
    private final int f29168v;

    /* renamed from: w  reason: collision with root package name */
    boolean f29169w;

    /* renamed from: i  reason: collision with root package name */
    final int f29160i = 32;

    /* renamed from: s  reason: collision with root package name */
    private final byte[] f29165s = new byte[32];

    /* renamed from: t  reason: collision with root package name */
    int f29166t = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final File f29170a;

        /* renamed from: b  reason: collision with root package name */
        boolean f29171b = true;

        /* renamed from: c  reason: collision with root package name */
        int f29172c = -1;

        public a(File file) {
            if (file != null) {
                this.f29170a = file;
                return;
            }
            throw new NullPointerException("file == null");
        }

        public d a() {
            RandomAccessFile H0 = d.H0(this.f29170a);
            try {
                return new d(this.f29170a, H0, this.f29171b, this.f29172c);
            } catch (Throwable th2) {
                H0.close();
                throw th2;
            }
        }

        public a b(int i10) {
            this.f29172c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: c  reason: collision with root package name */
        static final b f29173c = new b(0, 0);

        /* renamed from: a  reason: collision with root package name */
        final long f29174a;

        /* renamed from: b  reason: collision with root package name */
        final int f29175b;

        b(long j10, int i10) {
            this.f29174a = j10;
            this.f29175b = i10;
        }

        public String toString() {
            return b.class.getSimpleName() + "[position=" + this.f29174a + ", length=" + this.f29175b + "]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class c implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        int f29176d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f29177e;

        /* renamed from: i  reason: collision with root package name */
        int f29178i;

        c() {
            this.f29177e = d.this.f29163q.f29174a;
            this.f29178i = d.this.f29166t;
        }

        private void a() {
            if (d.this.f29166t == this.f29178i) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public byte[] next() {
            if (!d.this.f29169w) {
                a();
                if (!d.this.isEmpty()) {
                    int i10 = this.f29176d;
                    d dVar = d.this;
                    if (i10 < dVar.f29162p) {
                        try {
                            try {
                                b O0 = dVar.O0(this.f29177e);
                                byte[] bArr = new byte[O0.f29175b];
                                long Y1 = d.this.Y1(O0.f29174a + 4);
                                this.f29177e = Y1;
                                if (!d.this.z1(Y1, bArr, 0, O0.f29175b)) {
                                    this.f29176d = d.this.f29162p;
                                    return d.f29157x;
                                }
                                this.f29177e = d.this.Y1(O0.f29174a + 4 + O0.f29175b);
                                this.f29176d++;
                                return bArr;
                            } catch (IOException e10) {
                                throw ((Error) d.Q(e10));
                            }
                        } catch (IOException e11) {
                            throw ((Error) d.Q(e11));
                        } catch (OutOfMemoryError unused) {
                            d.this.w1();
                            this.f29176d = d.this.f29162p;
                            return d.f29157x;
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
            if (!d.this.f29169w) {
                a();
                if (this.f29176d != d.this.f29162p) {
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
                if (this.f29176d == 1) {
                    try {
                        d.this.b1();
                        this.f29178i = d.this.f29166t;
                        this.f29176d--;
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
        this.f29159e = file;
        this.f29158d = randomAccessFile;
        this.f29167u = z10;
        this.f29168v = i10;
        S0();
    }

    private void B1(long j10, byte[] bArr, int i10, int i11) {
        long Y1 = Y1(j10);
        long j11 = this.f29161o;
        if (i11 + Y1 <= j11) {
            this.f29158d.seek(Y1);
            this.f29158d.write(bArr, i10, i11);
            return;
        }
        int i12 = (int) (j11 - Y1);
        this.f29158d.seek(Y1);
        this.f29158d.write(bArr, i10, i12);
        this.f29158d.seek(32L);
        this.f29158d.write(bArr, i10 + i12, i11 - i12);
    }

    private void C(long j10) {
        long j11;
        long j12;
        long j13 = j10 + 4;
        long a12 = a1();
        if (a12 < j13) {
            long j14 = this.f29161o;
            do {
                a12 += j14;
                j14 <<= 1;
            } while (a12 < j13);
            E1(j14);
            b bVar = this.f29164r;
            long Y1 = Y1(bVar.f29174a + 4 + bVar.f29175b);
            if (Y1 <= this.f29163q.f29174a) {
                FileChannel channel = this.f29158d.getChannel();
                channel.position(this.f29161o);
                j11 = Y1 - 32;
                if (channel.transferTo(32L, j11, channel) != j11) {
                    throw new AssertionError("Copied insufficient number of bytes!");
                }
            } else {
                j11 = 0;
            }
            long j15 = this.f29164r.f29174a;
            long j16 = this.f29163q.f29174a;
            if (j15 < j16) {
                long j17 = (this.f29161o + j15) - 32;
                a2(j14, this.f29162p, j16, j17);
                this.f29164r = new b(j17, this.f29164r.f29175b);
                j12 = j14;
            } else {
                a2(j14, this.f29162p, j16, j15);
                j12 = j14;
            }
            this.f29161o = j12;
            if (this.f29167u) {
                x1(32L, j11);
            }
        }
    }

    private void E1(long j10) {
        this.f29158d.setLength(j10);
        this.f29158d.getChannel().force(true);
    }

    static RandomAccessFile H0(File file) {
        if (!file.exists()) {
            File file2 = new File(file.getPath() + ".tmp");
            RandomAccessFile N0 = N0(file2);
            try {
                N0.setLength(4096L);
                N0.seek(0L);
                N0.writeInt(-2147483647);
                N0.writeLong(4096L);
                N0.close();
                if (!file2.renameTo(file)) {
                    throw new IOException("Rename failed!");
                }
            } catch (Throwable th2) {
                N0.close();
                throw th2;
            }
        }
        return N0(file);
    }

    private static RandomAccessFile N0(File file) {
        return new RandomAccessFile(file, "rwd");
    }

    private long P1() {
        if (this.f29162p == 0) {
            return 32L;
        }
        b bVar = this.f29164r;
        long j10 = bVar.f29174a;
        long j11 = this.f29163q.f29174a;
        if (j10 >= j11) {
            return (j10 - j11) + 4 + bVar.f29175b + 32;
        }
        return (((j10 + 4) + bVar.f29175b) + this.f29161o) - j11;
    }

    private void S0() {
        this.f29158d.seek(0L);
        this.f29158d.readFully(this.f29165s);
        this.f29161o = Z0(this.f29165s, 4);
        this.f29162p = V0(this.f29165s, 12);
        long Z0 = Z0(this.f29165s, 16);
        long Z02 = Z0(this.f29165s, 24);
        if (this.f29161o <= this.f29158d.length()) {
            if (this.f29161o > 32) {
                this.f29163q = O0(Z0);
                this.f29164r = O0(Z02);
                return;
            }
            throw new IOException("File is corrupt; length stored in header (" + this.f29161o + ") is invalid.");
        }
        throw new IOException("File is truncated. Expected length: " + this.f29161o + ", Actual length: " + this.f29158d.length());
    }

    private static int V0(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 24) + ((bArr[i10 + 1] & 255) << 16) + ((bArr[i10 + 2] & 255) << 8) + (bArr[i10 + 3] & 255);
    }

    private static long Z0(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 56) + ((bArr[i10 + 1] & 255) << 48) + ((bArr[i10 + 2] & 255) << 40) + ((bArr[i10 + 3] & 255) << 32) + ((bArr[i10 + 4] & 255) << 24) + ((bArr[i10 + 5] & 255) << 16) + ((bArr[i10 + 6] & 255) << 8) + (bArr[i10 + 7] & 255);
    }

    private long a1() {
        return this.f29161o - P1();
    }

    private void a2(long j10, int i10, long j11, long j12) {
        this.f29158d.seek(0L);
        c2(this.f29165s, 0, -2147483647);
        f2(this.f29165s, 4, j10);
        c2(this.f29165s, 12, i10);
        f2(this.f29165s, 16, j11);
        f2(this.f29165s, 24, j12);
        this.f29158d.write(this.f29165s, 0, 32);
    }

    private static void c2(byte[] bArr, int i10, int i11) {
        bArr[i10] = (byte) (i11 >> 24);
        bArr[i10 + 1] = (byte) (i11 >> 16);
        bArr[i10 + 2] = (byte) (i11 >> 8);
        bArr[i10 + 3] = (byte) i11;
    }

    private static void f2(byte[] bArr, int i10, long j10) {
        bArr[i10] = (byte) (j10 >> 56);
        bArr[i10 + 1] = (byte) (j10 >> 48);
        bArr[i10 + 2] = (byte) (j10 >> 40);
        bArr[i10 + 3] = (byte) (j10 >> 32);
        bArr[i10 + 4] = (byte) (j10 >> 24);
        bArr[i10 + 5] = (byte) (j10 >> 16);
        bArr[i10 + 6] = (byte) (j10 >> 8);
        bArr[i10 + 7] = (byte) j10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void w1() {
        this.f29158d.close();
        this.f29159e.delete();
        this.f29158d = H0(this.f29159e);
        S0();
    }

    private void x1(long j10, long j11) {
        long j12 = j10;
        while (j11 > 0) {
            byte[] bArr = f29157x;
            int min = (int) Math.min(j11, bArr.length);
            B1(j12, bArr, 0, min);
            long j13 = min;
            j11 -= j13;
            j12 += j13;
        }
    }

    public boolean L0() {
        if (this.f29168v == -1 || size() != this.f29168v) {
            return false;
        }
        return true;
    }

    b O0(long j10) {
        if (j10 == 0) {
            return b.f29173c;
        }
        if (!z1(j10, this.f29165s, 0, 4)) {
            return b.f29173c;
        }
        return new b(j10, V0(this.f29165s, 0));
    }

    long Y1(long j10) {
        long j11 = this.f29161o;
        if (j10 < j11) {
            return j10;
        }
        return (j10 + 32) - j11;
    }

    public void b1() {
        f1(1);
    }

    public void clear() {
        if (!this.f29169w) {
            a2(4096L, 0, 0L, 0L);
            if (this.f29167u) {
                this.f29158d.seek(32L);
                this.f29158d.write(f29157x, 0, 4064);
            }
            this.f29162p = 0;
            b bVar = b.f29173c;
            this.f29163q = bVar;
            this.f29164r = bVar;
            if (this.f29161o > 4096) {
                E1(4096L);
            }
            this.f29161o = 4096L;
            this.f29166t++;
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29169w = true;
        this.f29158d.close();
    }

    public void f1(int i10) {
        if (i10 >= 0) {
            if (i10 != 0) {
                if (i10 == this.f29162p) {
                    clear();
                    return;
                } else if (!isEmpty()) {
                    if (i10 <= this.f29162p) {
                        b bVar = this.f29163q;
                        long j10 = bVar.f29174a;
                        int i11 = bVar.f29175b;
                        long j11 = 0;
                        int i12 = 0;
                        long j12 = j10;
                        while (i12 < i10) {
                            j11 += i11 + 4;
                            long Y1 = Y1(j12 + 4 + i11);
                            if (z1(Y1, this.f29165s, 0, 4)) {
                                i11 = V0(this.f29165s, 0);
                                i12++;
                                j12 = Y1;
                            } else {
                                return;
                            }
                        }
                        a2(this.f29161o, this.f29162p - i10, j12, this.f29164r.f29174a);
                        this.f29162p -= i10;
                        this.f29166t++;
                        this.f29163q = new b(j12, i11);
                        if (this.f29167u) {
                            x1(j10, j11);
                            return;
                        }
                        return;
                    }
                    throw new IllegalArgumentException("Cannot remove more elements (" + i10 + ") than present in queue (" + this.f29162p + ").");
                } else {
                    throw new NoSuchElementException();
                }
            }
            return;
        }
        throw new IllegalArgumentException("Cannot remove negative (" + i10 + ") number of elements.");
    }

    public boolean isEmpty() {
        if (this.f29162p == 0) {
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
        long Y1;
        long j10;
        if (bArr != null) {
            if ((i10 | i11) >= 0 && i11 <= bArr.length - i10) {
                if (!this.f29169w) {
                    if (L0()) {
                        b1();
                    }
                    C(i11);
                    boolean isEmpty = isEmpty();
                    if (isEmpty) {
                        Y1 = 32;
                    } else {
                        Y1 = Y1(this.f29164r.f29174a + 4 + bVar.f29175b);
                    }
                    b bVar2 = new b(Y1, i11);
                    c2(this.f29165s, 0, i11);
                    B1(bVar2.f29174a, this.f29165s, 0, 4);
                    B1(bVar2.f29174a + 4, bArr, i10, i11);
                    if (isEmpty) {
                        j10 = bVar2.f29174a;
                    } else {
                        j10 = this.f29163q.f29174a;
                    }
                    a2(this.f29161o, this.f29162p + 1, j10, bVar2.f29174a);
                    this.f29164r = bVar2;
                    this.f29162p++;
                    this.f29166t++;
                    if (isEmpty) {
                        this.f29163q = bVar2;
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
        return this.f29162p;
    }

    public String toString() {
        return "QueueFile{file=" + this.f29159e + ", zero=" + this.f29167u + ", length=" + this.f29161o + ", size=" + this.f29162p + ", first=" + this.f29163q + ", last=" + this.f29164r + '}';
    }

    boolean z1(long j10, byte[] bArr, int i10, int i11) {
        try {
            long Y1 = Y1(j10);
            long j11 = this.f29161o;
            if (i11 + Y1 <= j11) {
                this.f29158d.seek(Y1);
                this.f29158d.readFully(bArr, i10, i11);
                return true;
            }
            int i12 = (int) (j11 - Y1);
            this.f29158d.seek(Y1);
            this.f29158d.readFully(bArr, i10, i12);
            this.f29158d.seek(32L);
            this.f29158d.readFully(bArr, i10 + i12, i11 - i12);
            return true;
        } catch (EOFException unused) {
            w1();
            return false;
        } catch (IOException e10) {
            throw e10;
        } catch (Throwable unused2) {
            w1();
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Throwable Q(Throwable th2) {
        throw th2;
    }
}
