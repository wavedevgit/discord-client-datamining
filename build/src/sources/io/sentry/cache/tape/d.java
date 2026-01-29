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
    private static final byte[] f29829x = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: d  reason: collision with root package name */
    RandomAccessFile f29830d;

    /* renamed from: e  reason: collision with root package name */
    final File f29831e;

    /* renamed from: o  reason: collision with root package name */
    long f29833o;

    /* renamed from: p  reason: collision with root package name */
    int f29834p;

    /* renamed from: q  reason: collision with root package name */
    b f29835q;

    /* renamed from: r  reason: collision with root package name */
    private b f29836r;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f29839u;

    /* renamed from: v  reason: collision with root package name */
    private final int f29840v;

    /* renamed from: w  reason: collision with root package name */
    boolean f29841w;

    /* renamed from: i  reason: collision with root package name */
    final int f29832i = 32;

    /* renamed from: s  reason: collision with root package name */
    private final byte[] f29837s = new byte[32];

    /* renamed from: t  reason: collision with root package name */
    int f29838t = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final File f29842a;

        /* renamed from: b  reason: collision with root package name */
        boolean f29843b = true;

        /* renamed from: c  reason: collision with root package name */
        int f29844c = -1;

        public a(File file) {
            if (file != null) {
                this.f29842a = file;
                return;
            }
            throw new NullPointerException("file == null");
        }

        public d a() {
            RandomAccessFile C0 = d.C0(this.f29842a);
            try {
                return new d(this.f29842a, C0, this.f29843b, this.f29844c);
            } catch (Throwable th2) {
                C0.close();
                throw th2;
            }
        }

        public a b(int i10) {
            this.f29844c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: c  reason: collision with root package name */
        static final b f29845c = new b(0, 0);

        /* renamed from: a  reason: collision with root package name */
        final long f29846a;

        /* renamed from: b  reason: collision with root package name */
        final int f29847b;

        b(long j10, int i10) {
            this.f29846a = j10;
            this.f29847b = i10;
        }

        public String toString() {
            return b.class.getSimpleName() + "[position=" + this.f29846a + ", length=" + this.f29847b + "]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class c implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        int f29848d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f29849e;

        /* renamed from: i  reason: collision with root package name */
        int f29850i;

        c() {
            this.f29849e = d.this.f29835q.f29846a;
            this.f29850i = d.this.f29838t;
        }

        private void a() {
            if (d.this.f29838t == this.f29850i) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public byte[] next() {
            if (!d.this.f29841w) {
                a();
                if (!d.this.isEmpty()) {
                    int i10 = this.f29848d;
                    d dVar = d.this;
                    if (i10 < dVar.f29834p) {
                        try {
                            try {
                                b X0 = dVar.X0(this.f29849e);
                                byte[] bArr = new byte[X0.f29847b];
                                long f22 = d.this.f2(X0.f29846a + 4);
                                this.f29849e = f22;
                                if (!d.this.W1(f22, bArr, 0, X0.f29847b)) {
                                    this.f29848d = d.this.f29834p;
                                    return d.f29829x;
                                }
                                this.f29849e = d.this.f2(X0.f29846a + 4 + X0.f29847b);
                                this.f29848d++;
                                return bArr;
                            } catch (IOException e10) {
                                throw ((Error) d.A0(e10));
                            }
                        } catch (IOException e11) {
                            throw ((Error) d.A0(e11));
                        } catch (OutOfMemoryError unused) {
                            d.this.E1();
                            this.f29848d = d.this.f29834p;
                            return d.f29829x;
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
            if (!d.this.f29841w) {
                a();
                if (this.f29848d != d.this.f29834p) {
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
                if (this.f29848d == 1) {
                    try {
                        d.this.A1();
                        this.f29850i = d.this.f29838t;
                        this.f29848d--;
                        return;
                    } catch (IOException e10) {
                        throw ((Error) d.A0(e10));
                    }
                }
                throw new UnsupportedOperationException("Removal is only permitted from the head.");
            }
            throw new NoSuchElementException();
        }
    }

    d(File file, RandomAccessFile randomAccessFile, boolean z10, int i10) {
        this.f29831e = file;
        this.f29830d = randomAccessFile;
        this.f29839u = z10;
        this.f29840v = i10;
        Y0();
    }

    static RandomAccessFile C0(File file) {
        if (!file.exists()) {
            File file2 = new File(file.getPath() + ".tmp");
            RandomAccessFile U0 = U0(file2);
            try {
                U0.setLength(4096L);
                U0.seek(0L);
                U0.writeInt(-2147483647);
                U0.writeLong(4096L);
                U0.close();
                if (!file2.renameTo(file)) {
                    throw new IOException("Rename failed!");
                }
            } catch (Throwable th2) {
                U0.close();
                throw th2;
            }
        }
        return U0(file);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void E1() {
        this.f29830d.close();
        this.f29831e.delete();
        this.f29830d = C0(this.f29831e);
        Y0();
    }

    private void L(long j10) {
        long j11;
        long j12;
        long j13 = j10 + 4;
        long y12 = y1();
        if (y12 < j13) {
            long j14 = this.f29833o;
            do {
                y12 += j14;
                j14 <<= 1;
            } while (y12 < j13);
            b2(j14);
            b bVar = this.f29836r;
            long f22 = f2(bVar.f29846a + 4 + bVar.f29847b);
            if (f22 <= this.f29835q.f29846a) {
                FileChannel channel = this.f29830d.getChannel();
                channel.position(this.f29833o);
                j11 = f22 - 32;
                if (channel.transferTo(32L, j11, channel) != j11) {
                    throw new AssertionError("Copied insufficient number of bytes!");
                }
            } else {
                j11 = 0;
            }
            long j15 = this.f29836r.f29846a;
            long j16 = this.f29835q.f29846a;
            if (j15 < j16) {
                long j17 = (this.f29833o + j15) - 32;
                h2(j14, this.f29834p, j16, j17);
                this.f29836r = new b(j17, this.f29836r.f29847b);
                j12 = j14;
            } else {
                h2(j14, this.f29834p, j16, j15);
                j12 = j14;
            }
            this.f29833o = j12;
            if (this.f29839u) {
                U1(32L, j11);
            }
        }
    }

    private static RandomAccessFile U0(File file) {
        return new RandomAccessFile(file, "rwd");
    }

    private void U1(long j10, long j11) {
        long j12 = j10;
        while (j11 > 0) {
            byte[] bArr = f29829x;
            int min = (int) Math.min(j11, bArr.length);
            Y1(j12, bArr, 0, min);
            long j13 = min;
            j11 -= j13;
            j12 += j13;
        }
    }

    private void Y0() {
        this.f29830d.seek(0L);
        this.f29830d.readFully(this.f29837s);
        this.f29833o = x1(this.f29837s, 4);
        this.f29834p = d1(this.f29837s, 12);
        long x12 = x1(this.f29837s, 16);
        long x13 = x1(this.f29837s, 24);
        if (this.f29833o <= this.f29830d.length()) {
            if (this.f29833o > 32) {
                this.f29835q = X0(x12);
                this.f29836r = X0(x13);
                return;
            }
            throw new IOException("File is corrupt; length stored in header (" + this.f29833o + ") is invalid.");
        }
        throw new IOException("File is truncated. Expected length: " + this.f29833o + ", Actual length: " + this.f29830d.length());
    }

    private void Y1(long j10, byte[] bArr, int i10, int i11) {
        long f22 = f2(j10);
        long j11 = this.f29833o;
        if (i11 + f22 <= j11) {
            this.f29830d.seek(f22);
            this.f29830d.write(bArr, i10, i11);
            return;
        }
        int i12 = (int) (j11 - f22);
        this.f29830d.seek(f22);
        this.f29830d.write(bArr, i10, i12);
        this.f29830d.seek(32L);
        this.f29830d.write(bArr, i10 + i12, i11 - i12);
    }

    private void b2(long j10) {
        this.f29830d.setLength(j10);
        this.f29830d.getChannel().force(true);
    }

    private long c2() {
        if (this.f29834p == 0) {
            return 32L;
        }
        b bVar = this.f29836r;
        long j10 = bVar.f29846a;
        long j11 = this.f29835q.f29846a;
        if (j10 >= j11) {
            return (j10 - j11) + 4 + bVar.f29847b + 32;
        }
        return (((j10 + 4) + bVar.f29847b) + this.f29833o) - j11;
    }

    private static int d1(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 24) + ((bArr[i10 + 1] & 255) << 16) + ((bArr[i10 + 2] & 255) << 8) + (bArr[i10 + 3] & 255);
    }

    private void h2(long j10, int i10, long j11, long j12) {
        this.f29830d.seek(0L);
        i2(this.f29837s, 0, -2147483647);
        j2(this.f29837s, 4, j10);
        i2(this.f29837s, 12, i10);
        j2(this.f29837s, 16, j11);
        j2(this.f29837s, 24, j12);
        this.f29830d.write(this.f29837s, 0, 32);
    }

    private static void i2(byte[] bArr, int i10, int i11) {
        bArr[i10] = (byte) (i11 >> 24);
        bArr[i10 + 1] = (byte) (i11 >> 16);
        bArr[i10 + 2] = (byte) (i11 >> 8);
        bArr[i10 + 3] = (byte) i11;
    }

    private static void j2(byte[] bArr, int i10, long j10) {
        bArr[i10] = (byte) (j10 >> 56);
        bArr[i10 + 1] = (byte) (j10 >> 48);
        bArr[i10 + 2] = (byte) (j10 >> 40);
        bArr[i10 + 3] = (byte) (j10 >> 32);
        bArr[i10 + 4] = (byte) (j10 >> 24);
        bArr[i10 + 5] = (byte) (j10 >> 16);
        bArr[i10 + 6] = (byte) (j10 >> 8);
        bArr[i10 + 7] = (byte) j10;
    }

    private static long x1(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 56) + ((bArr[i10 + 1] & 255) << 48) + ((bArr[i10 + 2] & 255) << 40) + ((bArr[i10 + 3] & 255) << 32) + ((bArr[i10 + 4] & 255) << 24) + ((bArr[i10 + 5] & 255) << 16) + ((bArr[i10 + 6] & 255) << 8) + (bArr[i10 + 7] & 255);
    }

    private long y1() {
        return this.f29833o - c2();
    }

    public void A1() {
        B1(1);
    }

    public void B1(int i10) {
        if (i10 >= 0) {
            if (i10 != 0) {
                if (i10 == this.f29834p) {
                    clear();
                    return;
                } else if (!isEmpty()) {
                    if (i10 <= this.f29834p) {
                        b bVar = this.f29835q;
                        long j10 = bVar.f29846a;
                        int i11 = bVar.f29847b;
                        long j11 = 0;
                        int i12 = 0;
                        long j12 = j10;
                        while (i12 < i10) {
                            j11 += i11 + 4;
                            long f22 = f2(j12 + 4 + i11);
                            if (W1(f22, this.f29837s, 0, 4)) {
                                i11 = d1(this.f29837s, 0);
                                i12++;
                                j12 = f22;
                            } else {
                                return;
                            }
                        }
                        h2(this.f29833o, this.f29834p - i10, j12, this.f29836r.f29846a);
                        this.f29834p -= i10;
                        this.f29838t++;
                        this.f29835q = new b(j12, i11);
                        if (this.f29839u) {
                            U1(j10, j11);
                            return;
                        }
                        return;
                    }
                    throw new IllegalArgumentException("Cannot remove more elements (" + i10 + ") than present in queue (" + this.f29834p + ").");
                } else {
                    throw new NoSuchElementException();
                }
            }
            return;
        }
        throw new IllegalArgumentException("Cannot remove negative (" + i10 + ") number of elements.");
    }

    public boolean M0() {
        if (this.f29840v == -1 || size() != this.f29840v) {
            return false;
        }
        return true;
    }

    boolean W1(long j10, byte[] bArr, int i10, int i11) {
        try {
            long f22 = f2(j10);
            long j11 = this.f29833o;
            if (i11 + f22 <= j11) {
                this.f29830d.seek(f22);
                this.f29830d.readFully(bArr, i10, i11);
                return true;
            }
            int i12 = (int) (j11 - f22);
            this.f29830d.seek(f22);
            this.f29830d.readFully(bArr, i10, i12);
            this.f29830d.seek(32L);
            this.f29830d.readFully(bArr, i10 + i12, i11 - i12);
            return true;
        } catch (EOFException unused) {
            E1();
            return false;
        } catch (IOException e10) {
            throw e10;
        } catch (Throwable unused2) {
            E1();
            return false;
        }
    }

    b X0(long j10) {
        if (j10 == 0) {
            return b.f29845c;
        }
        if (!W1(j10, this.f29837s, 0, 4)) {
            return b.f29845c;
        }
        return new b(j10, d1(this.f29837s, 0));
    }

    public void clear() {
        if (!this.f29841w) {
            h2(4096L, 0, 0L, 0L);
            if (this.f29839u) {
                this.f29830d.seek(32L);
                this.f29830d.write(f29829x, 0, 4064);
            }
            this.f29834p = 0;
            b bVar = b.f29845c;
            this.f29835q = bVar;
            this.f29836r = bVar;
            if (this.f29833o > 4096) {
                b2(4096L);
            }
            this.f29833o = 4096L;
            this.f29838t++;
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29841w = true;
        this.f29830d.close();
    }

    long f2(long j10) {
        long j11 = this.f29833o;
        if (j10 < j11) {
            return j10;
        }
        return (j10 + 32) - j11;
    }

    public boolean isEmpty() {
        if (this.f29834p == 0) {
            return true;
        }
        return false;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new c();
    }

    public int size() {
        return this.f29834p;
    }

    public String toString() {
        return "QueueFile{file=" + this.f29831e + ", zero=" + this.f29839u + ", length=" + this.f29833o + ", size=" + this.f29834p + ", first=" + this.f29835q + ", last=" + this.f29836r + '}';
    }

    public void x(byte[] bArr, int i10, int i11) {
        b bVar;
        long f22;
        long j10;
        if (bArr != null) {
            if ((i10 | i11) >= 0 && i11 <= bArr.length - i10) {
                if (!this.f29841w) {
                    if (M0()) {
                        A1();
                    }
                    L(i11);
                    boolean isEmpty = isEmpty();
                    if (isEmpty) {
                        f22 = 32;
                    } else {
                        f22 = f2(this.f29836r.f29846a + 4 + bVar.f29847b);
                    }
                    b bVar2 = new b(f22, i11);
                    i2(this.f29837s, 0, i11);
                    Y1(bVar2.f29846a, this.f29837s, 0, 4);
                    Y1(bVar2.f29846a + 4, bArr, i10, i11);
                    if (isEmpty) {
                        j10 = bVar2.f29846a;
                    } else {
                        j10 = this.f29835q.f29846a;
                    }
                    h2(this.f29833o, this.f29834p + 1, j10, bVar2.f29846a);
                    this.f29836r = bVar2;
                    this.f29834p++;
                    this.f29838t++;
                    if (isEmpty) {
                        this.f29835q = bVar2;
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Throwable A0(Throwable th2) {
        throw th2;
    }
}
