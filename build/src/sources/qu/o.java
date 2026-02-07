package qu;

import java.io.EOFException;
import java.io.IOException;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSource;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o implements Source {

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f48308d;

    /* renamed from: e  reason: collision with root package name */
    private final Inflater f48309e;

    /* renamed from: i  reason: collision with root package name */
    private int f48310i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f48311o;

    public o(BufferedSource source, Inflater inflater) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        this.f48308d = source;
        this.f48309e = inflater;
    }

    private final void k() {
        int i10 = this.f48310i;
        if (i10 == 0) {
            return;
        }
        int remaining = i10 - this.f48309e.getRemaining();
        this.f48310i -= remaining;
        this.f48308d.skip(remaining);
    }

    public final long a(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (!this.f48311o) {
                if (i10 == 0) {
                    return 0L;
                }
                try {
                    g0 x12 = sink.x1(1);
                    g();
                    int inflate = this.f48309e.inflate(x12.f48272a, x12.f48274c, (int) Math.min(j10, 8192 - x12.f48274c));
                    k();
                    if (inflate > 0) {
                        x12.f48274c += inflate;
                        long j11 = inflate;
                        sink.Y0(sink.size() + j11);
                        return j11;
                    }
                    if (x12.f48273b == x12.f48274c) {
                        sink.f43203d = x12.b();
                        h0.b(x12);
                    }
                    return 0L;
                } catch (DataFormatException e10) {
                    throw new IOException(e10);
                }
            }
            throw new IllegalStateException("closed");
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f48311o) {
            return;
        }
        this.f48309e.end();
        this.f48311o = true;
        this.f48308d.close();
    }

    public final boolean g() {
        if (!this.f48309e.needsInput()) {
            return false;
        }
        if (this.f48308d.n1()) {
            return true;
        }
        g0 g0Var = this.f48308d.e().f43203d;
        Intrinsics.checkNotNull(g0Var);
        int i10 = g0Var.f48274c;
        int i11 = g0Var.f48273b;
        int i12 = i10 - i11;
        this.f48310i = i12;
        this.f48309e.setInput(g0Var.f48272a, i11, i12);
        return false;
    }

    @Override // okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        do {
            long a10 = a(sink, j10);
            if (a10 > 0) {
                return a10;
            }
            if (this.f48309e.finished() || this.f48309e.needsDictionary()) {
                return -1L;
            }
        } while (!this.f48308d.n1());
        throw new EOFException("source exhausted prematurely");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f48308d.timeout();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public o(Source source, Inflater inflater) {
        this(x.d(source), inflater);
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
    }
}
