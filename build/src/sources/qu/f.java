package qu;

import java.io.Closeable;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48204d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f48205e;

    /* renamed from: i  reason: collision with root package name */
    private int f48206i;

    /* renamed from: o  reason: collision with root package name */
    private final ReentrantLock f48207o = m0.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final f f48208d;

        /* renamed from: e  reason: collision with root package name */
        private long f48209e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f48210i;

        public a(f fileHandle, long j10) {
            Intrinsics.checkNotNullParameter(fileHandle, "fileHandle");
            this.f48208d = fileHandle;
            this.f48209e = j10;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f48210i) {
                return;
            }
            this.f48210i = true;
            ReentrantLock n10 = this.f48208d.n();
            n10.lock();
            try {
                f fVar = this.f48208d;
                fVar.f48206i--;
                if (this.f48208d.f48206i == 0 && this.f48208d.f48205e) {
                    Unit unit = Unit.f32008a;
                    n10.unlock();
                    this.f48208d.p();
                }
            } finally {
                n10.unlock();
            }
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f48210i) {
                long z10 = this.f48208d.z(this.f48209e, sink, j10);
                if (z10 != -1) {
                    this.f48209e += z10;
                }
                return z10;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Source
        public Timeout timeout() {
            return Timeout.f43172e;
        }
    }

    public f(boolean z10) {
        this.f48204d = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final long z(long j10, Buffer buffer, long j11) {
        int i10;
        if (j11 >= 0) {
            long j12 = j11 + j10;
            long j13 = j10;
            while (true) {
                if (j13 >= j12) {
                    break;
                }
                g0 x12 = buffer.x1(1);
                int s10 = s(j13, x12.f48224a, x12.f48226c, (int) Math.min(j12 - j13, 8192 - i10));
                if (s10 == -1) {
                    if (x12.f48225b == x12.f48226c) {
                        buffer.f43155d = x12.b();
                        h0.b(x12);
                    }
                    if (j10 == j13) {
                        return -1L;
                    }
                } else {
                    x12.f48226c += s10;
                    long j14 = s10;
                    j13 += j14;
                    buffer.Y0(buffer.size() + j14);
                }
            }
            return j13 - j10;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j11).toString());
    }

    public final Source C(long j10) {
        ReentrantLock reentrantLock = this.f48207o;
        reentrantLock.lock();
        try {
            if (!this.f48205e) {
                this.f48206i++;
                reentrantLock.unlock();
                return new a(this, j10);
            }
            throw new IllegalStateException("closed");
        } catch (Throwable th2) {
            reentrantLock.unlock();
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
        ReentrantLock reentrantLock = this.f48207o;
        reentrantLock.lock();
        try {
            if (this.f48205e) {
                return;
            }
            this.f48205e = true;
            if (this.f48206i != 0) {
                return;
            }
            Unit unit = Unit.f32008a;
            reentrantLock.unlock();
            p();
        } finally {
            reentrantLock.unlock();
        }
    }

    public final ReentrantLock n() {
        return this.f48207o;
    }

    protected abstract void p();

    protected abstract int s(long j10, byte[] bArr, int i10, int i11);

    public final long size() {
        ReentrantLock reentrantLock = this.f48207o;
        reentrantLock.lock();
        try {
            if (!this.f48205e) {
                Unit unit = Unit.f32008a;
                reentrantLock.unlock();
                return y();
            }
            throw new IllegalStateException("closed");
        } catch (Throwable th2) {
            reentrantLock.unlock();
            throw th2;
        }
    }

    protected abstract long y();
}
