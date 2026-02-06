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
    private final BufferedSource f48260d;

    /* renamed from: e  reason: collision with root package name */
    private final Inflater f48261e;

    /* renamed from: i  reason: collision with root package name */
    private int f48262i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f48263o;

    public o(BufferedSource source, Inflater inflater) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        this.f48260d = source;
        this.f48261e = inflater;
    }

    private final void k() {
        int i10 = this.f48262i;
        if (i10 == 0) {
            return;
        }
        int remaining = i10 - this.f48261e.getRemaining();
        this.f48262i -= remaining;
        this.f48260d.skip(remaining);
    }

    public final long a(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (!this.f48263o) {
                if (i10 == 0) {
                    return 0L;
                }
                try {
                    g0 x12 = sink.x1(1);
                    g();
                    int inflate = this.f48261e.inflate(x12.f48224a, x12.f48226c, (int) Math.min(j10, 8192 - x12.f48226c));
                    k();
                    if (inflate > 0) {
                        x12.f48226c += inflate;
                        long j11 = inflate;
                        sink.Y0(sink.size() + j11);
                        return j11;
                    }
                    if (x12.f48225b == x12.f48226c) {
                        sink.f43155d = x12.b();
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
        if (this.f48263o) {
            return;
        }
        this.f48261e.end();
        this.f48263o = true;
        this.f48260d.close();
    }

    public final boolean g() {
        if (!this.f48261e.needsInput()) {
            return false;
        }
        if (this.f48260d.n1()) {
            return true;
        }
        g0 g0Var = this.f48260d.e().f43155d;
        Intrinsics.checkNotNull(g0Var);
        int i10 = g0Var.f48226c;
        int i11 = g0Var.f48225b;
        int i12 = i10 - i11;
        this.f48262i = i12;
        this.f48261e.setInput(g0Var.f48224a, i11, i12);
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
            if (this.f48261e.finished() || this.f48261e.needsDictionary()) {
                return -1L;
            }
        } while (!this.f48260d.n1());
        throw new EOFException("source exhausted prematurely");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f48260d.timeout();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public o(Source source, Inflater inflater) {
        this(x.d(source), inflater);
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
    }
}
