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
    private static final byte[] f28022x = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: d  reason: collision with root package name */
    RandomAccessFile f28023d;

    /* renamed from: e  reason: collision with root package name */
    final File f28024e;

    /* renamed from: o  reason: collision with root package name */
    long f28026o;

    /* renamed from: p  reason: collision with root package name */
    int f28027p;

    /* renamed from: q  reason: collision with root package name */
    b f28028q;

    /* renamed from: r  reason: collision with root package name */
    private b f28029r;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f28032u;

    /* renamed from: v  reason: collision with root package name */
    private final int f28033v;

    /* renamed from: w  reason: collision with root package name */
    boolean f28034w;

    /* renamed from: i  reason: collision with root package name */
    final int f28025i = 32;

    /* renamed from: s  reason: collision with root package name */
    private final byte[] f28030s = new byte[32];

    /* renamed from: t  reason: collision with root package name */
    int f28031t = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final File f28035a;

        /* renamed from: b  reason: collision with root package name */
        boolean f28036b = true;

        /* renamed from: c  reason: collision with root package name */
        int f28037c = -1;

        public a(File file) {
            if (file != null) {
                this.f28035a = file;
                return;
            }
            throw new NullPointerException("file == null");
        }

        public d a() {
            RandomAccessFile E0 = d.E0(this.f28035a);
            try {
                return new d(this.f28035a, E0, this.f28036b, this.f28037c);
            } catch (Throwable th2) {
                E0.close();
                throw th2;
            }
        }

        public a b(int i10) {
            this.f28037c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: c  reason: collision with root package name */
        static final b f28038c = new b(0, 0);

        /* renamed from: a  reason: collision with root package name */
        final long f28039a;

        /* renamed from: b  reason: collision with root package name */
        final int f28040b;

        b(long j10, int i10) {
            this.f28039a = j10;
            this.f28040b = i10;
        }

        public String toString() {
            return b.class.getSimpleName() + "[position=" + this.f28039a + ", length=" + this.f28040b + "]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class c implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        int f28041d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f28042e;

        /* renamed from: i  reason: collision with root package name */
        int f28043i;

        c() {
            this.f28042e = d.this.f28028q.f28039a;
            this.f28043i = d.this.f28031t;
        }

        private void a() {
            if (d.this.f28031t == this.f28043i) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public byte[] next() {
            if (!d.this.f28034w) {
                a();
                if (!d.this.isEmpty()) {
                    int i10 = this.f28041d;
                    d dVar = d.this;
                    if (i10 < dVar.f28027p) {
                        try {
                            try {
                                b Y0 = dVar.Y0(this.f28042e);
                                byte[] bArr = new byte[Y0.f28040b];
                                long h22 = d.this.h2(Y0.f28039a + 4);
                                this.f28042e = h22;
                                if (!d.this.X1(h22, bArr, 0, Y0.f28040b)) {
                                    this.f28041d = d.this.f28027p;
                                    return d.f28022x;
                                }
                                this.f28042e = d.this.h2(Y0.f28039a + 4 + Y0.f28040b);
                                this.f28041d++;
                                return bArr;
                            } catch (IOException e10) {
                                throw ((Error) d.P(e10));
                            }
                        } catch (IOException e11) {
                            throw ((Error) d.P(e11));
                        } catch (OutOfMemoryError unused) {
                            d.this.T1();
                            this.f28041d = d.this.f28027p;
                            return d.f28022x;
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
            if (!d.this.f28034w) {
                a();
                if (this.f28041d != d.this.f28027p) {
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
                if (this.f28041d == 1) {
                    try {
                        d.this.A1();
                        this.f28043i = d.this.f28031t;
                        this.f28041d--;
                        return;
                    } catch (IOException e10) {
                        throw ((Error) d.P(e10));
                    }
                }
                throw new UnsupportedOperationException("Removal is only permitted from the head.");
            }
            throw new NoSuchElementException();
        }
    }

    d(File file, RandomAccessFile randomAccessFile, boolean z10, int i10) {
        this.f28024e = file;
        this.f28023d = randomAccessFile;
        this.f28032u = z10;
        this.f28033v = i10;
        d1();
    }

    private void C(long j10) {
        long j11;
        long j12;
        long j13 = j10 + 4;
        long z12 = z1();
        if (z12 < j13) {
            long j14 = this.f28026o;
            do {
                z12 += j14;
                j14 <<= 1;
            } while (z12 < j13);
            b2(j14);
            b bVar = this.f28029r;
            long h22 = h2(bVar.f28039a + 4 + bVar.f28040b);
            if (h22 <= this.f28028q.f28039a) {
                FileChannel channel = this.f28023d.getChannel();
                channel.position(this.f28026o);
                j11 = h22 - 32;
                if (channel.transferTo(32L, j11, channel) != j11) {
                    throw new AssertionError("Copied insufficient number of bytes!");
                }
            } else {
                j11 = 0;
            }
            long j15 = this.f28029r.f28039a;
            long j16 = this.f28028q.f28039a;
            if (j15 < j16) {
                long j17 = (this.f28026o + j15) - 32;
                i2(j14, this.f28027p, j16, j17);
                this.f28029r = new b(j17, this.f28029r.f28040b);
                j12 = j14;
            } else {
                i2(j14, this.f28027p, j16, j15);
                j12 = j14;
            }
            this.f28026o = j12;
            if (this.f28032u) {
                V1(32L, j11);
            }
        }
    }

    static RandomAccessFile E0(File file) {
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
    public void T1() {
        this.f28023d.close();
        this.f28024e.delete();
        this.f28023d = E0(this.f28024e);
        d1();
    }

    private static RandomAccessFile V0(File file) {
        return new RandomAccessFile(file, "rwd");
    }

    private void V1(long j10, long j11) {
        long j12 = j10;
        while (j11 > 0) {
            byte[] bArr = f28022x;
            int min = (int) Math.min(j11, bArr.length);
            a2(j12, bArr, 0, min);
            long j13 = min;
            j11 -= j13;
            j12 += j13;
        }
    }

    private void a2(long j10, byte[] bArr, int i10, int i11) {
        long h22 = h2(j10);
        long j11 = this.f28026o;
        if (i11 + h22 <= j11) {
            this.f28023d.seek(h22);
            this.f28023d.write(bArr, i10, i11);
            return;
        }
        int i12 = (int) (j11 - h22);
        this.f28023d.seek(h22);
        this.f28023d.write(bArr, i10, i12);
        this.f28023d.seek(32L);
        this.f28023d.write(bArr, i10 + i12, i11 - i12);
    }

    private void b2(long j10) {
        this.f28023d.setLength(j10);
        this.f28023d.getChannel().force(true);
    }

    private void d1() {
        this.f28023d.seek(0L);
        this.f28023d.readFully(this.f28030s);
        this.f28026o = x1(this.f28030s, 4);
        this.f28027p = w1(this.f28030s, 12);
        long x12 = x1(this.f28030s, 16);
        long x13 = x1(this.f28030s, 24);
        if (this.f28026o <= this.f28023d.length()) {
            if (this.f28026o > 32) {
                this.f28028q = Y0(x12);
                this.f28029r = Y0(x13);
                return;
            }
            throw new IOException("File is corrupt; length stored in header (" + this.f28026o + ") is invalid.");
        }
        throw new IOException("File is truncated. Expected length: " + this.f28026o + ", Actual length: " + this.f28023d.length());
    }

    private long f2() {
        if (this.f28027p == 0) {
            return 32L;
        }
        b bVar = this.f28029r;
        long j10 = bVar.f28039a;
        long j11 = this.f28028q.f28039a;
        if (j10 >= j11) {
            return (j10 - j11) + 4 + bVar.f28040b + 32;
        }
        return (((j10 + 4) + bVar.f28040b) + this.f28026o) - j11;
    }

    private void i2(long j10, int i10, long j11, long j12) {
        this.f28023d.seek(0L);
        j2(this.f28030s, 0, -2147483647);
        o2(this.f28030s, 4, j10);
        j2(this.f28030s, 12, i10);
        o2(this.f28030s, 16, j11);
        o2(this.f28030s, 24, j12);
        this.f28023d.write(this.f28030s, 0, 32);
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

    private static int w1(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 24) + ((bArr[i10 + 1] & 255) << 16) + ((bArr[i10 + 2] & 255) << 8) + (bArr[i10 + 3] & 255);
    }

    private static long x1(byte[] bArr, int i10) {
        return ((bArr[i10] & 255) << 56) + ((bArr[i10 + 1] & 255) << 48) + ((bArr[i10 + 2] & 255) << 40) + ((bArr[i10 + 3] & 255) << 32) + ((bArr[i10 + 4] & 255) << 24) + ((bArr[i10 + 5] & 255) << 16) + ((bArr[i10 + 6] & 255) << 8) + (bArr[i10 + 7] & 255);
    }

    private long z1() {
        return this.f28026o - f2();
    }

    public void A1() {
        D1(1);
    }

    public void D1(int i10) {
        if (i10 >= 0) {
            if (i10 != 0) {
                if (i10 == this.f28027p) {
                    clear();
                    return;
                } else if (!isEmpty()) {
                    if (i10 <= this.f28027p) {
                        b bVar = this.f28028q;
                        long j10 = bVar.f28039a;
                        int i11 = bVar.f28040b;
                        long j11 = 0;
                        int i12 = 0;
                        long j12 = j10;
                        while (i12 < i10) {
                            j11 += i11 + 4;
                            long h22 = h2(j12 + 4 + i11);
                            if (X1(h22, this.f28030s, 0, 4)) {
                                i11 = w1(this.f28030s, 0);
                                i12++;
                                j12 = h22;
                            } else {
                                return;
                            }
                        }
                        i2(this.f28026o, this.f28027p - i10, j12, this.f28029r.f28039a);
                        this.f28027p -= i10;
                        this.f28031t++;
                        this.f28028q = new b(j12, i11);
                        if (this.f28032u) {
                            V1(j10, j11);
                            return;
                        }
                        return;
                    }
                    throw new IllegalArgumentException("Cannot remove more elements (" + i10 + ") than present in queue (" + this.f28027p + ").");
                } else {
                    throw new NoSuchElementException();
                }
            }
            return;
        }
        throw new IllegalArgumentException("Cannot remove negative (" + i10 + ") number of elements.");
    }

    public boolean J0() {
        if (this.f28033v == -1 || size() != this.f28033v) {
            return false;
        }
        return true;
    }

    boolean X1(long j10, byte[] bArr, int i10, int i11) {
        try {
            long h22 = h2(j10);
            long j11 = this.f28026o;
            if (i11 + h22 <= j11) {
                this.f28023d.seek(h22);
                this.f28023d.readFully(bArr, i10, i11);
                return true;
            }
            int i12 = (int) (j11 - h22);
            this.f28023d.seek(h22);
            this.f28023d.readFully(bArr, i10, i12);
            this.f28023d.seek(32L);
            this.f28023d.readFully(bArr, i10 + i12, i11 - i12);
            return true;
        } catch (EOFException unused) {
            T1();
            return false;
        } catch (IOException e10) {
            throw e10;
        } catch (Throwable unused2) {
            T1();
            return false;
        }
    }

    b Y0(long j10) {
        if (j10 == 0) {
            return b.f28038c;
        }
        if (!X1(j10, this.f28030s, 0, 4)) {
            return b.f28038c;
        }
        return new b(j10, w1(this.f28030s, 0));
    }

    public void clear() {
        if (!this.f28034w) {
            i2(4096L, 0, 0L, 0L);
            if (this.f28032u) {
                this.f28023d.seek(32L);
                this.f28023d.write(f28022x, 0, 4064);
            }
            this.f28027p = 0;
            b bVar = b.f28038c;
            this.f28028q = bVar;
            this.f28029r = bVar;
            if (this.f28026o > 4096) {
                b2(4096L);
            }
            this.f28026o = 4096L;
            this.f28031t++;
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28034w = true;
        this.f28023d.close();
    }

    long h2(long j10) {
        long j11 = this.f28026o;
        if (j10 < j11) {
            return j10;
        }
        return (j10 + 32) - j11;
    }

    public boolean isEmpty() {
        if (this.f28027p == 0) {
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
        long h22;
        long j10;
        if (bArr != null) {
            if ((i10 | i11) >= 0 && i11 <= bArr.length - i10) {
                if (!this.f28034w) {
                    if (J0()) {
                        A1();
                    }
                    C(i11);
                    boolean isEmpty = isEmpty();
                    if (isEmpty) {
                        h22 = 32;
                    } else {
                        h22 = h2(this.f28029r.f28039a + 4 + bVar.f28040b);
                    }
                    b bVar2 = new b(h22, i11);
                    j2(this.f28030s, 0, i11);
                    a2(bVar2.f28039a, this.f28030s, 0, 4);
                    a2(bVar2.f28039a + 4, bArr, i10, i11);
                    if (isEmpty) {
                        j10 = bVar2.f28039a;
                    } else {
                        j10 = this.f28028q.f28039a;
                    }
                    i2(this.f28026o, this.f28027p + 1, j10, bVar2.f28039a);
                    this.f28029r = bVar2;
                    this.f28027p++;
                    this.f28031t++;
                    if (isEmpty) {
                        this.f28028q = bVar2;
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
        return this.f28027p;
    }

    public String toString() {
        return "QueueFile{file=" + this.f28024e + ", zero=" + this.f28032u + ", length=" + this.f28026o + ", size=" + this.f28027p + ", first=" + this.f28028q + ", last=" + this.f28029r + '}';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Throwable P(Throwable th2) {
        throw th2;
    }
}
