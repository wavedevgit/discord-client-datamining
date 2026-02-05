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
    private static final byte[] f28830x = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: d  reason: collision with root package name */
    RandomAccessFile f28831d;

    /* renamed from: e  reason: collision with root package name */
    final File f28832e;

    /* renamed from: o  reason: collision with root package name */
    long f28834o;

    /* renamed from: p  reason: collision with root package name */
    int f28835p;

    /* renamed from: q  reason: collision with root package name */
    b f28836q;

    /* renamed from: r  reason: collision with root package name */
    private b f28837r;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f28840u;

    /* renamed from: v  reason: collision with root package name */
    private final int f28841v;

    /* renamed from: w  reason: collision with root package name */
    boolean f28842w;

    /* renamed from: i  reason: collision with root package name */
    final int f28833i = 32;

    /* renamed from: s  reason: collision with root package name */
    private final byte[] f28838s = new byte[32];

    /* renamed from: t  reason: collision with root package name */
    int f28839t = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final File f28843a;

        /* renamed from: b  reason: collision with root package name */
        boolean f28844b = true;

        /* renamed from: c  reason: collision with root package name */
        int f28845c = -1;

        public a(File file) {
            if (file != null) {
                this.f28843a = file;
                return;
            }
            throw new NullPointerException("file == null");
        }

        public d a() {
            RandomAccessFile C0 = d.C0(this.f28843a);
            try {
                return new d(this.f28843a, C0, this.f28844b, this.f28845c);
            } catch (Throwable th2) {
                C0.close();
                throw th2;
            }
        }

        public a b(int i10) {
            this.f28845c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: c  reason: collision with root package name */
        static final b f28846c = new b(0, 0);

        /* renamed from: a  reason: collision with root package name */
        final long f28847a;

        /* renamed from: b  reason: collision with root package name */
        final int f28848b;

        b(long j10, int i10) {
            this.f28847a = j10;
            this.f28848b = i10;
        }

        public String toString() {
            return b.class.getSimpleName() + "[position=" + this.f28847a + ", length=" + this.f28848b + "]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class c implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        int f28849d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f28850e;

        /* renamed from: i  reason: collision with root package name */
        int f28851i;

        c() {
            this.f28850e = d.this.f28836q.f28847a;
            this.f28851i = d.this.f28839t;
        }

        private void a() {
            if (d.this.f28839t == this.f28851i) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public byte[] next() {
            if (!d.this.f28842w) {
                a();
                if (!d.this.isEmpty()) {
                    int i10 = this.f28849d;
                    d dVar = d.this;
                    if (i10 < dVar.f28835p) {
                        try {
                            try {
                                b Y0 = dVar.Y0(this.f28850e);
                                byte[] bArr = new byte[Y0.f28848b];
                                long f22 = d.this.f2(Y0.f28847a + 4);
                                this.f28850e = f22;
                                if (!d.this.W1(f22, bArr, 0, Y0.f28848b)) {
                                    this.f28849d = d.this.f28835p;
                                    return d.f28830x;
                                }
                                this.f28850e = d.this.f2(Y0.f28847a + 4 + Y0.f28848b);
                                this.f28849d++;
                                return bArr;
                            } catch (IOException e10) {
                                throw ((Error) d.V(e10));
                            }
                        } catch (IOException e11) {
                            throw ((Error) d.V(e11));
                        } catch (OutOfMemoryError unused) {
                            d.this.E1();
                            this.f28849d = d.this.f28835p;
                            return d.f28830x;
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
            if (!d.this.f28842w) {
                a();
                if (this.f28849d != d.this.f28835p) {
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
                if (this.f28849d == 1) {
                    try {
                        d.this.A1();
                        this.f28851i = d.this.f28839t;
                        this.f28849d--;
                        return;
                    } catch (IOException e10) {
                        throw ((Error) d.V(e10));
                    }
                }
                throw new UnsupportedOperationException("Removal is only permitted from the head.");
            }
            throw new NoSuchElementException();
        }
    }

    d(File file, RandomAccessFile randomAccessFile, boolean z10, int i10) {
        this.f28832e = file;
        this.f28831d = randomAccessFile;
        this.f28840u = z10;
        this.f28841v = i10;
        Z0();
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
    public void E1() {
        this.f28831d.close();
        this.f28832e.delete();
        this.f28831d = C0(this.f28832e);
        Z0();
    }

    private void L(long j10) {
        long j11;
        long j12;
        long j13 = j10 + 4;
        long y12 = y1();
        if (y12 < j13) {
            long j14 = this.f28834o;
            do {
                y12 += j14;
                j14 <<= 1;
            } while (y12 < j13);
            b2(j14);
            b bVar = this.f28837r;
            long f22 = f2(bVar.f28847a + 4 + bVar.f28848b);
            if (f22 <= this.f28836q.f28847a) {
                FileChannel channel = this.f28831d.getChannel();
                channel.position(this.f28834o);
                j11 = f22 - 32;
                if (channel.transferTo(32L, j11, channel) != j11) {
                    throw new AssertionError("Copied insufficient number of bytes!");
                }
            } else {
                j11 = 0;
            }
            long j15 = this.f28837r.f28847a;
            long j16 = this.f28836q.f28847a;
            if (j15 < j16) {
                long j17 = (this.f28834o + j15) - 32;
                h2(j14, this.f28835p, j16, j17);
                this.f28837r = new b(j17, this.f28837r.f28848b);
                j12 = j14;
            } else {
                h2(j14, this.f28835p, j16, j15);
                j12 = j14;
            }
            this.f28834o = j12;
            if (this.f28840u) {
                U1(32L, j11);
            }
        }
    }

    private void U1(long j10, long j11) {
        long j12 = j10;
        while (j11 > 0) {
            byte[] bArr = f28830x;
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
        long j11 = this.f28834o;
        if (i11 + f22 <= j11) {
            this.f28831d.seek(f22);
            this.f28831d.write(bArr, i10, i11);
            return;
        }
        int i12 = (int) (j11 - f22);
        this.f28831d.seek(f22);
        this.f28831d.write(bArr, i10, i12);
        this.f28831d.seek(32L);
        this.f28831d.write(bArr, i10 + i12, i11 - i12);
    }

    private void Z0() {
        this.f28831d.seek(0L);
        this.f28831d.readFully(this.f28838s);
        this.f28834o = x1(this.f28838s, 4);
        this.f28835p = e1(this.f28838s, 12);
        long x12 = x1(this.f28838s, 16);
        long x13 = x1(this.f28838s, 24);
        if (this.f28834o <= this.f28831d.length()) {
            if (this.f28834o > 32) {
                this.f28836q = Y0(x12);
                this.f28837r = Y0(x13);
                return;
            }
            throw new IOException("File is corrupt; length stored in header (" + this.f28834o + ") is invalid.");
        }
        throw new IOException("File is truncated. Expected length: " + this.f28834o + ", Actual length: " + this.f28831d.length());
    }

    private void b2(long j10) {
        this.f28831d.setLength(j10);
        this.f28831d.getChannel().force(true);
    }

    private long c2() {
        if (this.f28835p == 0) {
            return 32L;
        }
        b bVar = this.f28837r;
        long j10 = bVar.f28847a;
        long j11 = this.f28836q.f28847a;
        if (j10 >= j11) {
            return (j10 - j11) + 4 + bVar.f28848b + 32;
        }
        return (((j10 + 4) + bVar.f28848b) + this.f28834o) - j11;
    }

    private static int e1(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 24) + ((bArr[i10 + 1] & 255) << 16) + ((bArr[i10 + 2] & 255) << 8) + (bArr[i10 + 3] & 255);
    }

    private void h2(long j10, int i10, long j11, long j12) {
        this.f28831d.seek(0L);
        i2(this.f28838s, 0, -2147483647);
        j2(this.f28838s, 4, j10);
        i2(this.f28838s, 12, i10);
        j2(this.f28838s, 16, j11);
        j2(this.f28838s, 24, j12);
        this.f28831d.write(this.f28838s, 0, 32);
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
        return this.f28834o - c2();
    }

    public void A1() {
        B1(1);
    }

    public void B1(int i10) {
        if (i10 >= 0) {
            if (i10 != 0) {
                if (i10 == this.f28835p) {
                    clear();
                    return;
                } else if (!isEmpty()) {
                    if (i10 <= this.f28835p) {
                        b bVar = this.f28836q;
                        long j10 = bVar.f28847a;
                        int i11 = bVar.f28848b;
                        long j11 = 0;
                        int i12 = 0;
                        long j12 = j10;
                        while (i12 < i10) {
                            j11 += i11 + 4;
                            long f22 = f2(j12 + 4 + i11);
                            if (W1(f22, this.f28838s, 0, 4)) {
                                i11 = e1(this.f28838s, 0);
                                i12++;
                                j12 = f22;
                            } else {
                                return;
                            }
                        }
                        h2(this.f28834o, this.f28835p - i10, j12, this.f28837r.f28847a);
                        this.f28835p -= i10;
                        this.f28839t++;
                        this.f28836q = new b(j12, i11);
                        if (this.f28840u) {
                            U1(j10, j11);
                            return;
                        }
                        return;
                    }
                    throw new IllegalArgumentException("Cannot remove more elements (" + i10 + ") than present in queue (" + this.f28835p + ").");
                } else {
                    throw new NoSuchElementException();
                }
            }
            return;
        }
        throw new IllegalArgumentException("Cannot remove negative (" + i10 + ") number of elements.");
    }

    public boolean D0() {
        if (this.f28841v == -1 || size() != this.f28841v) {
            return false;
        }
        return true;
    }

    boolean W1(long j10, byte[] bArr, int i10, int i11) {
        try {
            long f22 = f2(j10);
            long j11 = this.f28834o;
            if (i11 + f22 <= j11) {
                this.f28831d.seek(f22);
                this.f28831d.readFully(bArr, i10, i11);
                return true;
            }
            int i12 = (int) (j11 - f22);
            this.f28831d.seek(f22);
            this.f28831d.readFully(bArr, i10, i12);
            this.f28831d.seek(32L);
            this.f28831d.readFully(bArr, i10 + i12, i11 - i12);
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
            return b.f28846c;
        }
        if (!W1(j10, this.f28838s, 0, 4)) {
            return b.f28846c;
        }
        return new b(j10, e1(this.f28838s, 0));
    }

    public void clear() {
        if (!this.f28842w) {
            h2(4096L, 0, 0L, 0L);
            if (this.f28840u) {
                this.f28831d.seek(32L);
                this.f28831d.write(f28830x, 0, 4064);
            }
            this.f28835p = 0;
            b bVar = b.f28846c;
            this.f28836q = bVar;
            this.f28837r = bVar;
            if (this.f28834o > 4096) {
                b2(4096L);
            }
            this.f28834o = 4096L;
            this.f28839t++;
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28842w = true;
        this.f28831d.close();
    }

    long f2(long j10) {
        long j11 = this.f28834o;
        if (j10 < j11) {
            return j10;
        }
        return (j10 + 32) - j11;
    }

    public boolean isEmpty() {
        if (this.f28835p == 0) {
            return true;
        }
        return false;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new c();
    }

    public int size() {
        return this.f28835p;
    }

    public String toString() {
        return "QueueFile{file=" + this.f28832e + ", zero=" + this.f28840u + ", length=" + this.f28834o + ", size=" + this.f28835p + ", first=" + this.f28836q + ", last=" + this.f28837r + '}';
    }

    public void y(byte[] bArr, int i10, int i11) {
        b bVar;
        long f22;
        long j10;
        if (bArr != null) {
            if ((i10 | i11) >= 0 && i11 <= bArr.length - i10) {
                if (!this.f28842w) {
                    if (D0()) {
                        A1();
                    }
                    L(i11);
                    boolean isEmpty = isEmpty();
                    if (isEmpty) {
                        f22 = 32;
                    } else {
                        f22 = f2(this.f28837r.f28847a + 4 + bVar.f28848b);
                    }
                    b bVar2 = new b(f22, i11);
                    i2(this.f28838s, 0, i11);
                    Y1(bVar2.f28847a, this.f28838s, 0, 4);
                    Y1(bVar2.f28847a + 4, bArr, i10, i11);
                    if (isEmpty) {
                        j10 = bVar2.f28847a;
                    } else {
                        j10 = this.f28836q.f28847a;
                    }
                    h2(this.f28834o, this.f28835p + 1, j10, bVar2.f28847a);
                    this.f28837r = bVar2;
                    this.f28835p++;
                    this.f28839t++;
                    if (isEmpty) {
                        this.f28836q = bVar2;
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
    public static Throwable V(Throwable th2) {
        throw th2;
    }
}
