package iu;

import java.io.OutputStream;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
import okio.Timeout;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 implements Sink {

    /* renamed from: d  reason: collision with root package name */
    private final OutputStream f31226d;

    /* renamed from: e  reason: collision with root package name */
    private final Timeout f31227e;

    public b0(OutputStream out, Timeout timeout) {
        Intrinsics.checkNotNullParameter(out, "out");
        Intrinsics.checkNotNullParameter(timeout, "timeout");
        this.f31226d = out;
        this.f31227e = timeout;
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f31226d.close();
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        this.f31226d.flush();
    }

    @Override // okio.Sink
    public void t0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        while (j10 > 0) {
            this.f31227e.f();
            g0 g0Var = source.f44368d;
            Intrinsics.checkNotNull(g0Var);
            int min = (int) Math.min(j10, g0Var.f31267c - g0Var.f31266b);
            this.f31226d.write(g0Var.f31265a, g0Var.f31266b, min);
            g0Var.f31266b += min;
            long j11 = min;
            j10 -= j11;
            source.Y0(source.size() - j11);
            if (g0Var.f31266b == g0Var.f31267c) {
                source.f44368d = g0Var.b();
                h0.b(g0Var);
            }
        }
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f31227e;
    }

    public String toString() {
        return "sink(" + this.f31226d + ')';
    }
}
