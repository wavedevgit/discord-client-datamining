package av;

import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j implements Sink {

    /* renamed from: d  reason: collision with root package name */
    private final Sink f6281d;

    public j(Sink delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f6281d = delegate;
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f6281d.close();
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        this.f6281d.flush();
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f6281d.timeout();
    }

    public String toString() {
        return getClass().getSimpleName() + '(' + this.f6281d + ')';
    }

    @Override // okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f6281d.u0(source, j10);
    }
}
