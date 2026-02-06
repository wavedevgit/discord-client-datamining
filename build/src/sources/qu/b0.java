package qu;

import java.io.OutputStream;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
import okio.Timeout;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 implements Sink {

    /* renamed from: d  reason: collision with root package name */
    private final OutputStream f48185d;

    /* renamed from: e  reason: collision with root package name */
    private final Timeout f48186e;

    public b0(OutputStream out, Timeout timeout) {
        Intrinsics.checkNotNullParameter(out, "out");
        Intrinsics.checkNotNullParameter(timeout, "timeout");
        this.f48185d = out;
        this.f48186e = timeout;
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f48185d.close();
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        this.f48185d.flush();
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f48186e;
    }

    public String toString() {
        return "sink(" + this.f48185d + ')';
    }

    @Override // okio.Sink
    public void w0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        while (j10 > 0) {
            this.f48186e.f();
            g0 g0Var = source.f43155d;
            Intrinsics.checkNotNull(g0Var);
            int min = (int) Math.min(j10, g0Var.f48226c - g0Var.f48225b);
            this.f48185d.write(g0Var.f48224a, g0Var.f48225b, min);
            g0Var.f48225b += min;
            long j11 = min;
            j10 -= j11;
            source.Y0(source.size() - j11);
            if (g0Var.f48225b == g0Var.f48226c) {
                source.f43155d = g0Var.b();
                h0.b(g0Var);
            }
        }
    }
}
