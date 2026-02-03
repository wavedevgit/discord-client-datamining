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
    private static final byte[] f29772x = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: d  reason: collision with root package name */
    RandomAccessFile f29773d;

    /* renamed from: e  reason: collision with root package name */
    final File f29774e;

    /* renamed from: o  reason: collision with root package name */
    long f29776o;

    /* renamed from: p  reason: collision with root package name */
    int f29777p;

    /* renamed from: q  reason: collision with root package name */
    b f29778q;

    /* renamed from: r  reason: collision with root package name */
    private b f29779r;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f29782u;

    /* renamed from: v  reason: collision with root package name */
    private final int f29783v;

    /* renamed from: w  reason: collision with root package name */
    boolean f29784w;

    /* renamed from: i  reason: collision with root package name */
    final int f29775i = 32;

    /* renamed from: s  reason: collision with root package name */
    private final byte[] f29780s = new byte[32];

    /* renamed from: t  reason: collision with root package name */
    int f29781t = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final File f29785a;

        /* renamed from: b  reason: collision with root package name */
        boolean f29786b = true;

        /* renamed from: c  reason: collision with root package name */
        int f29787c = -1;

        public a(File file) {
            if (file != null) {
                this.f29785a = file;
                return;
            }
            throw new NullPointerException("file == null");
        }

        public d a() {
            RandomAccessFile I0 = d.I0(this.f29785a);
            try {
                return new d(this.f29785a, I0, this.f29786b, this.f29787c);
            } catch (Throwable th2) {
                I0.close();
                throw th2;
            }
        }

        public a b(int i10) {
            this.f29787c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: c  reason: collision with root package name */
        static final b f29788c = new b(0, 0);

        /* renamed from: a  reason: collision with root package name */
        final long f29789a;

        /* renamed from: b  reason: collision with root package name */
        final int f29790b;

        b(long j10, int i10) {
            this.f29789a = j10;
            this.f29790b = i10;
        }

        public String toString() {
            return b.class.getSimpleName() + "[position=" + this.f29789a + ", length=" + this.f29790b + "]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class c implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        int f29791d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f29792e;

        /* renamed from: i  reason: collision with root package name */
        int f29793i;

        c() {
            this.f29792e = d.this.f29778q.f29789a;
            this.f29793i = d.this.f29781t;
        }

        private void a() {
            if (d.this.f29781t == this.f29793i) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public byte[] next() {
            if (!d.this.f29784w) {
                a();
                if (!d.this.isEmpty()) {
                    int i10 = this.f29791d;
                    d dVar = d.this;
                    if (i10 < dVar.f29777p) {
                        try {
                            try {
                                b Y0 = dVar.Y0(this.f29792e);
                                byte[] bArr = new byte[Y0.f29790b];
                                long f22 = d.this.f2(Y0.f29789a + 4);
                                this.f29792e = f22;
                                if (!d.this.W1(f22, bArr, 0, Y0.f29790b)) {
                                    this.f29791d = d.this.f29777p;
                                    return d.f29772x;
                                }
                                this.f29792e = d.this.f2(Y0.f29789a + 4 + Y0.f29790b);
                                this.f29791d++;
                                return bArr;
                            } catch (IOException e10) {
                                throw ((Error) d.A0(e10));
                            }
                        } catch (IOException e11) {
                            throw ((Error) d.A0(e11));
                        } catch (OutOfMemoryError unused) {
                            d.this.E1();
                            this.f29791d = d.this.f29777p;
                            return d.f29772x;
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
            if (!d.this.f29784w) {
                a();
                if (this.f29791d != d.this.f29777p) {
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
                if (this.f29791d == 1) {
                    try {
                        d.this.A1();
                        this.f29793i = d.this.f29781t;
                        this.f29791d--;
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
        this.f29774e = file;
        this.f29773d = randomAccessFile;
        this.f29782u = z10;
        this.f29783v = i10;
        Z0();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void E1() {
        this.f29773d.close();
        this.f29774e.delete();
        this.f29773d = I0(this.f29774e);
        Z0();
    }

    static RandomAccessFile I0(File file) {
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

    private void L(long j10) {
        long j11;
        long j12;
        long j13 = j10 + 4;
        long y12 = y1();
        if (y12 < j13) {
            long j14 = this.f29776o;
            do {
                y12 += j14;
                j14 <<= 1;
            } while (y12 < j13);
            b2(j14);
            b bVar = this.f29779r;
            long f22 = f2(bVar.f29789a + 4 + bVar.f29790b);
            if (f22 <= this.f29778q.f29789a) {
                FileChannel channel = this.f29773d.getChannel();
                channel.position(this.f29776o);
                j11 = f22 - 32;
                if (channel.transferTo(32L, j11, channel) != j11) {
                    throw new AssertionError("Copied insufficient number of bytes!");
                }
            } else {
                j11 = 0;
            }
            long j15 = this.f29779r.f29789a;
            long j16 = this.f29778q.f29789a;
            if (j15 < j16) {
                long j17 = (this.f29776o + j15) - 32;
                h2(j14, this.f29777p, j16, j17);
                this.f29779r = new b(j17, this.f29779r.f29790b);
                j12 = j14;
            } else {
                h2(j14, this.f29777p, j16, j15);
                j12 = j14;
            }
            this.f29776o = j12;
            if (this.f29782u) {
                U1(32L, j11);
            }
        }
    }

    private void U1(long j10, long j11) {
        long j12 = j10;
        while (j11 > 0) {
            byte[] bArr = f29772x;
            int min = (int) Math.min(j11, bArr.length);
            Y1(j12, bArr, 0, min);
            long j13 = min;
            j11 -= j13;
            j12 += j13;
        }
    }

    private static RandomAccessFile V0(File file) {
        return new RandomAccessFile(file, "rwd");
    }

    private void Y1(long j10, byte[] bArr, int i10, int i11) {
        long f22 = f2(j10);
        long j11 = this.f29776o;
        if (i11 + f22 <= j11) {
            this.f29773d.seek(f22);
            this.f29773d.write(bArr, i10, i11);
            return;
        }
        int i12 = (int) (j11 - f22);
        this.f29773d.seek(f22);
        this.f29773d.write(bArr, i10, i12);
        this.f29773d.seek(32L);
        this.f29773d.write(bArr, i10 + i12, i11 - i12);
    }

    private void Z0() {
        this.f29773d.seek(0L);
        this.f29773d.readFully(this.f29780s);
        this.f29776o = x1(this.f29780s, 4);
        this.f29777p = e1(this.f29780s, 12);
        long x12 = x1(this.f29780s, 16);
        long x13 = x1(this.f29780s, 24);
        if (this.f29776o <= this.f29773d.length()) {
            if (this.f29776o > 32) {
                this.f29778q = Y0(x12);
                this.f29779r = Y0(x13);
                return;
            }
            throw new IOException("File is corrupt; length stored in header (" + this.f29776o + ") is invalid.");
        }
        throw new IOException("File is truncated. Expected length: " + this.f29776o + ", Actual length: " + this.f29773d.length());
    }

    private void b2(long j10) {
        this.f29773d.setLength(j10);
        this.f29773d.getChannel().force(true);
    }

    private long c2() {
        if (this.f29777p == 0) {
            return 32L;
        }
        b bVar = this.f29779r;
        long j10 = bVar.f29789a;
        long j11 = this.f29778q.f29789a;
        if (j10 >= j11) {
            return (j10 - j11) + 4 + bVar.f29790b + 32;
        }
        return (((j10 + 4) + bVar.f29790b) + this.f29776o) - j11;
    }

    private static int e1(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 24) + ((bArr[i10 + 1] & 255) << 16) + ((bArr[i10 + 2] & 255) << 8) + (bArr[i10 + 3] & 255);
    }

    private void h2(long j10, int i10, long j11, long j12) {
        this.f29773d.seek(0L);
        i2(this.f29780s, 0, -2147483647);
        j2(this.f29780s, 4, j10);
        i2(this.f29780s, 12, i10);
        j2(this.f29780s, 16, j11);
        j2(this.f29780s, 24, j12);
        this.f29773d.write(this.f29780s, 0, 32);
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
        return this.f29776o - c2();
    }

    public void A1() {
        B1(1);
    }

    public void B1(int i10) {
        if (i10 >= 0) {
            if (i10 != 0) {
                if (i10 == this.f29777p) {
                    clear();
                    return;
                } else if (!isEmpty()) {
                    if (i10 <= this.f29777p) {
                        b bVar = this.f29778q;
                        long j10 = bVar.f29789a;
                        int i11 = bVar.f29790b;
                        long j11 = 0;
                        int i12 = 0;
                        long j12 = j10;
                        while (i12 < i10) {
                            j11 += i11 + 4;
                            long f22 = f2(j12 + 4 + i11);
                            if (W1(f22, this.f29780s, 0, 4)) {
                                i11 = e1(this.f29780s, 0);
                                i12++;
                                j12 = f22;
                            } else {
                                return;
                            }
                        }
                        h2(this.f29776o, this.f29777p - i10, j12, this.f29779r.f29789a);
                        this.f29777p -= i10;
                        this.f29781t++;
                        this.f29778q = new b(j12, i11);
                        if (this.f29782u) {
                            U1(j10, j11);
                            return;
                        }
                        return;
                    }
                    throw new IllegalArgumentException("Cannot remove more elements (" + i10 + ") than present in queue (" + this.f29777p + ").");
                } else {
                    throw new NoSuchElementException();
                }
            }
            return;
        }
        throw new IllegalArgumentException("Cannot remove negative (" + i10 + ") number of elements.");
    }

    public boolean M0() {
        if (this.f29783v == -1 || size() != this.f29783v) {
            return false;
        }
        return true;
    }

    boolean W1(long j10, byte[] bArr, int i10, int i11) {
        try {
            long f22 = f2(j10);
            long j11 = this.f29776o;
            if (i11 + f22 <= j11) {
                this.f29773d.seek(f22);
                this.f29773d.readFully(bArr, i10, i11);
                return true;
            }
            int i12 = (int) (j11 - f22);
            this.f29773d.seek(f22);
            this.f29773d.readFully(bArr, i10, i12);
            this.f29773d.seek(32L);
            this.f29773d.readFully(bArr, i10 + i12, i11 - i12);
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

    b Y0(long j10) {
        if (j10 == 0) {
            return b.f29788c;
        }
        if (!W1(j10, this.f29780s, 0, 4)) {
            return b.f29788c;
        }
        return new b(j10, e1(this.f29780s, 0));
    }

    public void clear() {
        if (!this.f29784w) {
            h2(4096L, 0, 0L, 0L);
            if (this.f29782u) {
                this.f29773d.seek(32L);
                this.f29773d.write(f29772x, 0, 4064);
            }
            this.f29777p = 0;
            b bVar = b.f29788c;
            this.f29778q = bVar;
            this.f29779r = bVar;
            if (this.f29776o > 4096) {
                b2(4096L);
            }
            this.f29776o = 4096L;
            this.f29781t++;
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29784w = true;
        this.f29773d.close();
    }

    long f2(long j10) {
        long j11 = this.f29776o;
        if (j10 < j11) {
            return j10;
        }
        return (j10 + 32) - j11;
    }

    public boolean isEmpty() {
        if (this.f29777p == 0) {
            return true;
        }
        return false;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new c();
    }

    public int size() {
        return this.f29777p;
    }

    public String toString() {
        return "QueueFile{file=" + this.f29774e + ", zero=" + this.f29782u + ", length=" + this.f29776o + ", size=" + this.f29777p + ", first=" + this.f29778q + ", last=" + this.f29779r + '}';
    }

    public void x(byte[] bArr, int i10, int i11) {
        b bVar;
        long f22;
        long j10;
        if (bArr != null) {
            if ((i10 | i11) >= 0 && i11 <= bArr.length - i10) {
                if (!this.f29784w) {
                    if (M0()) {
                        A1();
                    }
                    L(i11);
                    boolean isEmpty = isEmpty();
                    if (isEmpty) {
                        f22 = 32;
                    } else {
                        f22 = f2(this.f29779r.f29789a + 4 + bVar.f29790b);
                    }
                    b bVar2 = new b(f22, i11);
                    i2(this.f29780s, 0, i11);
                    Y1(bVar2.f29789a, this.f29780s, 0, 4);
                    Y1(bVar2.f29789a + 4, bArr, i10, i11);
                    if (isEmpty) {
                        j10 = bVar2.f29789a;
                    } else {
                        j10 = this.f29778q.f29789a;
                    }
                    h2(this.f29776o, this.f29777p + 1, j10, bVar2.f29789a);
                    this.f29779r = bVar2;
                    this.f29777p++;
                    this.f29781t++;
                    if (isEmpty) {
                        this.f29778q = bVar2;
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
