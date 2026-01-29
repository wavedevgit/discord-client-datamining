package iu;

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
    private final BufferedSource f31285d;

    /* renamed from: e  reason: collision with root package name */
    private final Inflater f31286e;

    /* renamed from: i  reason: collision with root package name */
    private int f31287i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f31288o;

    public o(BufferedSource source, Inflater inflater) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        this.f31285d = source;
        this.f31286e = inflater;
    }

    private final void l() {
        int i10 = this.f31287i;
        if (i10 == 0) {
            return;
        }
        int remaining = i10 - this.f31286e.getRemaining();
        this.f31287i -= remaining;
        this.f31285d.skip(remaining);
    }

    public final long a(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (!this.f31288o) {
                if (i10 == 0) {
                    return 0L;
                }
                try {
                    g0 y12 = sink.y1(1);
                    h();
                    int inflate = this.f31286e.inflate(y12.f31249a, y12.f31251c, (int) Math.min(j10, 8192 - y12.f31251c));
                    l();
                    if (inflate > 0) {
                        y12.f31251c += inflate;
                        long j11 = inflate;
                        sink.Y0(sink.size() + j11);
                        return j11;
                    }
                    if (y12.f31250b == y12.f31251c) {
                        sink.f44352d = y12.b();
                        h0.b(y12);
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
        if (this.f31288o) {
            return;
        }
        this.f31286e.end();
        this.f31288o = true;
        this.f31285d.close();
    }

    public final boolean h() {
        if (!this.f31286e.needsInput()) {
            return false;
        }
        if (this.f31285d.o1()) {
            return true;
        }
        g0 g0Var = this.f31285d.e().f44352d;
        Intrinsics.checkNotNull(g0Var);
        int i10 = g0Var.f31251c;
        int i11 = g0Var.f31250b;
        int i12 = i10 - i11;
        this.f31287i = i12;
        this.f31286e.setInput(g0Var.f31249a, i11, i12);
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
            if (this.f31286e.finished() || this.f31286e.needsDictionary()) {
                return -1L;
            }
        } while (!this.f31285d.o1());
        throw new EOFException("source exhausted prematurely");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f31285d.timeout();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public o(Source source, Inflater inflater) {
        this(x.d(source), inflater);
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
    }
}
