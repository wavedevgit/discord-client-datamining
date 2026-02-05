package ou;

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
    private final boolean f44488d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f44489e;

    /* renamed from: i  reason: collision with root package name */
    private int f44490i;

    /* renamed from: o  reason: collision with root package name */
    private final ReentrantLock f44491o = m0.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final f f44492d;

        /* renamed from: e  reason: collision with root package name */
        private long f44493e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f44494i;

        public a(f fileHandle, long j10) {
            Intrinsics.checkNotNullParameter(fileHandle, "fileHandle");
            this.f44492d = fileHandle;
            this.f44493e = j10;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f44494i) {
                return;
            }
            this.f44494i = true;
            ReentrantLock o10 = this.f44492d.o();
            o10.lock();
            try {
                f fVar = this.f44492d;
                fVar.f44490i--;
                if (this.f44492d.f44490i == 0 && this.f44492d.f44489e) {
                    Unit unit = Unit.f31988a;
                    o10.unlock();
                    this.f44492d.y();
                }
            } finally {
                o10.unlock();
            }
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f44494i) {
                long L = this.f44492d.L(this.f44493e, sink, j10);
                if (L != -1) {
                    this.f44493e += L;
                }
                return L;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Source
        public Timeout timeout() {
            return Timeout.f44066e;
        }
    }

    public f(boolean z10) {
        this.f44488d = z10;
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
                int E = E(j13, y12.f44508a, y12.f44510c, (int) Math.min(j12 - j13, 8192 - i10));
                if (E == -1) {
                    if (y12.f44509b == y12.f44510c) {
                        buffer.f44049d = y12.b();
                        h0.b(y12);
                    }
                    if (j10 == j13) {
                        return -1L;
                    }
                } else {
                    y12.f44510c += E;
                    long j14 = E;
                    j13 += j14;
                    buffer.Z0(buffer.size() + j14);
                }
            }
            return j13 - j10;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j11).toString());
    }

    protected abstract int E(long j10, byte[] bArr, int i10, int i11);

    protected abstract long F();

    public final Source N(long j10) {
        ReentrantLock reentrantLock = this.f44491o;
        reentrantLock.lock();
        try {
            if (!this.f44489e) {
                this.f44490i++;
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
        ReentrantLock reentrantLock = this.f44491o;
        reentrantLock.lock();
        try {
            if (this.f44489e) {
                return;
            }
            this.f44489e = true;
            if (this.f44490i != 0) {
                return;
            }
            Unit unit = Unit.f31988a;
            reentrantLock.unlock();
            y();
        } finally {
            reentrantLock.unlock();
        }
    }

    public final ReentrantLock o() {
        return this.f44491o;
    }

    public final long size() {
        ReentrantLock reentrantLock = this.f44491o;
        reentrantLock.lock();
        try {
            if (!this.f44489e) {
                Unit unit = Unit.f31988a;
                reentrantLock.unlock();
                return F();
            }
            throw new IllegalStateException("closed");
        } catch (Throwable th2) {
            reentrantLock.unlock();
            throw th2;
        }
    }

    protected abstract void y();
}
