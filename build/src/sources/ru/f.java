package ru;

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
    private final boolean f49370d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f49371e;

    /* renamed from: i  reason: collision with root package name */
    private int f49372i;

    /* renamed from: o  reason: collision with root package name */
    private final ReentrantLock f49373o = m0.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final f f49374d;

        /* renamed from: e  reason: collision with root package name */
        private long f49375e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f49376i;

        public a(f fileHandle, long j10) {
            Intrinsics.checkNotNullParameter(fileHandle, "fileHandle");
            this.f49374d = fileHandle;
            this.f49375e = j10;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f49376i) {
                return;
            }
            this.f49376i = true;
            ReentrantLock n10 = this.f49374d.n();
            n10.lock();
            try {
                f fVar = this.f49374d;
                fVar.f49372i--;
                if (this.f49374d.f49372i == 0 && this.f49374d.f49371e) {
                    Unit unit = Unit.f31765a;
                    n10.unlock();
                    this.f49374d.p();
                }
            } finally {
                n10.unlock();
            }
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f49376i) {
                long z10 = this.f49374d.z(this.f49375e, sink, j10);
                if (z10 != -1) {
                    this.f49375e += z10;
                }
                return z10;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Source
        public Timeout timeout() {
            return Timeout.f42347e;
        }
    }

    public f(boolean z10) {
        this.f49370d = z10;
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
                g0 s12 = buffer.s1(1);
                int s10 = s(j13, s12.f49390a, s12.f49392c, (int) Math.min(j12 - j13, 8192 - i10));
                if (s10 == -1) {
                    if (s12.f49391b == s12.f49392c) {
                        buffer.f42330d = s12.b();
                        h0.b(s12);
                    }
                    if (j10 == j13) {
                        return -1L;
                    }
                } else {
                    s12.f49392c += s10;
                    long j14 = s10;
                    j13 += j14;
                    buffer.W0(buffer.size() + j14);
                }
            }
            return j13 - j10;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j11).toString());
    }

    public final Source C(long j10) {
        ReentrantLock reentrantLock = this.f49373o;
        reentrantLock.lock();
        try {
            if (!this.f49371e) {
                this.f49372i++;
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
        ReentrantLock reentrantLock = this.f49373o;
        reentrantLock.lock();
        try {
            if (this.f49371e) {
                return;
            }
            this.f49371e = true;
            if (this.f49372i != 0) {
                return;
            }
            Unit unit = Unit.f31765a;
            reentrantLock.unlock();
            p();
        } finally {
            reentrantLock.unlock();
        }
    }

    public final ReentrantLock n() {
        return this.f49373o;
    }

    protected abstract void p();

    protected abstract int s(long j10, byte[] bArr, int i10, int i11);

    public final long size() {
        ReentrantLock reentrantLock = this.f49373o;
        reentrantLock.lock();
        try {
            if (!this.f49371e) {
                Unit unit = Unit.f31765a;
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
