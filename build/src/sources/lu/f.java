package lu;

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
    private final boolean f37280d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37281e;

    /* renamed from: i  reason: collision with root package name */
    private int f37282i;

    /* renamed from: o  reason: collision with root package name */
    private final ReentrantLock f37283o = m0.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final f f37284d;

        /* renamed from: e  reason: collision with root package name */
        private long f37285e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f37286i;

        public a(f fileHandle, long j10) {
            Intrinsics.checkNotNullParameter(fileHandle, "fileHandle");
            this.f37284d = fileHandle;
            this.f37285e = j10;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f37286i) {
                return;
            }
            this.f37286i = true;
            ReentrantLock x10 = this.f37284d.x();
            x10.lock();
            try {
                f fVar = this.f37284d;
                fVar.f37282i--;
                if (this.f37284d.f37282i == 0 && this.f37284d.f37281e) {
                    Unit unit = Unit.f32464a;
                    x10.unlock();
                    this.f37284d.B();
                }
            } finally {
                x10.unlock();
            }
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f37286i) {
                long L = this.f37284d.L(this.f37285e, sink, j10);
                if (L != -1) {
                    this.f37285e += L;
                }
                return L;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Source
        public Timeout timeout() {
            return Timeout.f44313e;
        }
    }

    public f(boolean z10) {
        this.f37280d = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final long L(long j10, Buffer buffer, long j11) {
        int i10;
        if (j11 >= 0) {
            long j12 = j11 + j10;
            long j13 = j10;
            while (true) {
                if (j13 >= j12) {
                    break;
                }
                g0 y12 = buffer.y1(1);
                int E = E(j13, y12.f37300a, y12.f37302c, (int) Math.min(j12 - j13, 8192 - i10));
                if (E == -1) {
                    if (y12.f37301b == y12.f37302c) {
                        buffer.f44296d = y12.b();
                        h0.b(y12);
                    }
                    if (j10 == j13) {
                        return -1L;
                    }
                } else {
                    y12.f37302c += E;
                    long j14 = E;
                    j13 += j14;
                    buffer.Z0(buffer.size() + j14);
                }
            }
            return j13 - j10;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j11).toString());
    }

    protected abstract void B();

    protected abstract int E(long j10, byte[] bArr, int i10, int i11);

    protected abstract long F();

    public final Source N(long j10) {
        ReentrantLock reentrantLock = this.f37283o;
        reentrantLock.lock();
        try {
            if (!this.f37281e) {
                this.f37282i++;
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
        ReentrantLock reentrantLock = this.f37283o;
        reentrantLock.lock();
        try {
            if (this.f37281e) {
                return;
            }
            this.f37281e = true;
            if (this.f37282i != 0) {
                return;
            }
            Unit unit = Unit.f32464a;
            reentrantLock.unlock();
            B();
        } finally {
            reentrantLock.unlock();
        }
    }

    public final long size() {
        ReentrantLock reentrantLock = this.f37283o;
        reentrantLock.lock();
        try {
            if (!this.f37281e) {
                Unit unit = Unit.f32464a;
                reentrantLock.unlock();
                return F();
            }
            throw new IllegalStateException("closed");
        } catch (Throwable th2) {
            reentrantLock.unlock();
            throw th2;
        }
    }

    public final ReentrantLock x() {
        return this.f37283o;
    }
}
