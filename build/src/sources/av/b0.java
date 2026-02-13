package av;

import java.io.OutputStream;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
import okio.Timeout;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 implements Sink {

    /* renamed from: d  reason: collision with root package name */
    private final OutputStream f6223d;

    /* renamed from: e  reason: collision with root package name */
    private final Timeout f6224e;

    public b0(OutputStream out, Timeout timeout) {
        Intrinsics.checkNotNullParameter(out, "out");
        Intrinsics.checkNotNullParameter(timeout, "timeout");
        this.f6223d = out;
        this.f6224e = timeout;
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f6223d.close();
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        this.f6223d.flush();
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f6224e;
    }

    public String toString() {
        return "sink(" + this.f6223d + ')';
    }

    @Override // okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        while (j10 > 0) {
            this.f6224e.f();
            g0 g0Var = source.f41149d;
            Intrinsics.checkNotNull(g0Var);
            int min = (int) Math.min(j10, g0Var.f6264c - g0Var.f6263b);
            this.f6223d.write(g0Var.f6262a, g0Var.f6263b, min);
            g0Var.f6263b += min;
            long j11 = min;
            j10 -= j11;
            source.L0(source.size() - j11);
            if (g0Var.f6263b == g0Var.f6264c) {
                source.f41149d = g0Var.b();
                h0.b(g0Var);
            }
        }
    }
}
