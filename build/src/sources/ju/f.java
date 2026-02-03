package ju;

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
    private final boolean f32342d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f32343e;

    /* renamed from: i  reason: collision with root package name */
    private int f32344i;

    /* renamed from: o  reason: collision with root package name */
    private final ReentrantLock f32345o = m0.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final f f32346d;

        /* renamed from: e  reason: collision with root package name */
        private long f32347e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f32348i;

        public a(f fileHandle, long j10) {
            Intrinsics.checkNotNullParameter(fileHandle, "fileHandle");
            this.f32346d = fileHandle;
            this.f32347e = j10;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f32348i) {
                return;
            }
            this.f32348i = true;
            ReentrantLock x10 = this.f32346d.x();
            x10.lock();
            try {
                f fVar = this.f32346d;
                fVar.f32344i--;
                if (this.f32346d.f32344i == 0 && this.f32346d.f32343e) {
                    Unit unit = Unit.f33074a;
                    x10.unlock();
                    this.f32346d.B();
                }
            } finally {
                x10.unlock();
            }
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f32348i) {
                long L = this.f32346d.L(this.f32347e, sink, j10);
                if (L != -1) {
                    this.f32347e += L;
                }
                return L;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Source
        public Timeout timeout() {
            return Timeout.f44513e;
        }
    }

    public f(boolean z10) {
        this.f32342d = z10;
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
                int E = E(j13, y12.f32362a, y12.f32364c, (int) Math.min(j12 - j13, 8192 - i10));
                if (E == -1) {
                    if (y12.f32363b == y12.f32364c) {
                        buffer.f44496d = y12.b();
                        h0.b(y12);
                    }
                    if (j10 == j13) {
                        return -1L;
                    }
                } else {
                    y12.f32364c += E;
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
        ReentrantLock reentrantLock = this.f32345o;
        reentrantLock.lock();
        try {
            if (!this.f32343e) {
                this.f32344i++;
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
        ReentrantLock reentrantLock = this.f32345o;
        reentrantLock.lock();
        try {
            if (this.f32343e) {
                return;
            }
            this.f32343e = true;
            if (this.f32344i != 0) {
                return;
            }
            Unit unit = Unit.f33074a;
            reentrantLock.unlock();
            B();
        } finally {
            reentrantLock.unlock();
        }
    }

    public final long size() {
        ReentrantLock reentrantLock = this.f32345o;
        reentrantLock.lock();
        try {
            if (!this.f32343e) {
                Unit unit = Unit.f33074a;
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
        return this.f32345o;
    }
}
