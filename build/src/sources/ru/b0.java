package ru;

import java.io.OutputStream;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
import okio.Timeout;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 implements Sink {

    /* renamed from: d  reason: collision with root package name */
    private final OutputStream f49351d;

    /* renamed from: e  reason: collision with root package name */
    private final Timeout f49352e;

    public b0(OutputStream out, Timeout timeout) {
        Intrinsics.checkNotNullParameter(out, "out");
        Intrinsics.checkNotNullParameter(timeout, "timeout");
        this.f49351d = out;
        this.f49352e = timeout;
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f49351d.close();
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        this.f49351d.flush();
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f49352e;
    }

    public String toString() {
        return "sink(" + this.f49351d + ')';
    }

    @Override // okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        while (j10 > 0) {
            this.f49352e.f();
            g0 g0Var = source.f42330d;
            Intrinsics.checkNotNull(g0Var);
            int min = (int) Math.min(j10, g0Var.f49392c - g0Var.f49391b);
            this.f49351d.write(g0Var.f49390a, g0Var.f49391b, min);
            g0Var.f49391b += min;
            long j11 = min;
            j10 -= j11;
            source.W0(source.size() - j11);
            if (g0Var.f49391b == g0Var.f49392c) {
                source.f42330d = g0Var.b();
                h0.b(g0Var);
            }
        }
    }
}
