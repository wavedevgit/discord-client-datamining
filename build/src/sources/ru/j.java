package ru;

import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j implements Sink {

    /* renamed from: d  reason: collision with root package name */
    private final Sink f49409d;

    public j(Sink delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f49409d = delegate;
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f49409d.close();
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        this.f49409d.flush();
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f49409d.timeout();
    }

    public String toString() {
        return getClass().getSimpleName() + '(' + this.f49409d + ')';
    }

    @Override // okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f49409d.u0(source, j10);
    }
}
