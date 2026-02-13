package av;

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
    private final boolean f6242d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f6243e;

    /* renamed from: i  reason: collision with root package name */
    private int f6244i;

    /* renamed from: o  reason: collision with root package name */
    private final ReentrantLock f6245o = m0.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final f f6246d;

        /* renamed from: e  reason: collision with root package name */
        private long f6247e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f6248i;

        public a(f fileHandle, long j10) {
            Intrinsics.checkNotNullParameter(fileHandle, "fileHandle");
            this.f6246d = fileHandle;
            this.f6247e = j10;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f6248i) {
                return;
            }
            this.f6248i = true;
            ReentrantLock n10 = this.f6246d.n();
            n10.lock();
            try {
                f fVar = this.f6246d;
                fVar.f6244i--;
                if (this.f6246d.f6244i == 0 && this.f6246d.f6243e) {
                    Unit unit = Unit.f32556a;
                    n10.unlock();
                    this.f6246d.p();
                }
            } finally {
                n10.unlock();
            }
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f6248i) {
                long z10 = this.f6246d.z(this.f6247e, sink, j10);
                if (z10 != -1) {
                    this.f6247e += z10;
                }
                return z10;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Source
        public Timeout timeout() {
            return Timeout.f41166e;
        }
    }

    public f(boolean z10) {
        this.f6242d = z10;
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
                g0 S0 = buffer.S0(1);
                int s10 = s(j13, S0.f6262a, S0.f6264c, (int) Math.min(j12 - j13, 8192 - i10));
                if (s10 == -1) {
                    if (S0.f6263b == S0.f6264c) {
                        buffer.f41149d = S0.b();
                        h0.b(S0);
                    }
                    if (j10 == j13) {
                        return -1L;
                    }
                } else {
                    S0.f6264c += s10;
                    long j14 = s10;
                    j13 += j14;
                    buffer.L0(buffer.size() + j14);
                }
            }
            return j13 - j10;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j11).toString());
    }

    public final Source C(long j10) {
        ReentrantLock reentrantLock = this.f6245o;
        reentrantLock.lock();
        try {
            if (!this.f6243e) {
                this.f6244i++;
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
        ReentrantLock reentrantLock = this.f6245o;
        reentrantLock.lock();
        try {
            if (this.f6243e) {
                return;
            }
            this.f6243e = true;
            if (this.f6244i != 0) {
                return;
            }
            Unit unit = Unit.f32556a;
            reentrantLock.unlock();
            p();
        } finally {
            reentrantLock.unlock();
        }
    }

    public final ReentrantLock n() {
        return this.f6245o;
    }

    protected abstract void p();

    protected abstract int s(long j10, byte[] bArr, int i10, int i11);

    public final long size() {
        ReentrantLock reentrantLock = this.f6245o;
        reentrantLock.lock();
        try {
            if (!this.f6243e) {
                Unit unit = Unit.f32556a;
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
