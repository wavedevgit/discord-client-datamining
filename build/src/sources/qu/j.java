package qu;

import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j implements Sink {

    /* renamed from: d  reason: collision with root package name */
    private final Sink f48291d;

    public j(Sink delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f48291d = delegate;
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f48291d.close();
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        this.f48291d.flush();
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f48291d.timeout();
    }

    public String toString() {
        return getClass().getSimpleName() + '(' + this.f48291d + ')';
    }

    @Override // okio.Sink
    public void w0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f48291d.w0(source, j10);
    }
}
