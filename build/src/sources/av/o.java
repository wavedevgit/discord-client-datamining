package av;

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
    private final BufferedSource f6298d;

    /* renamed from: e  reason: collision with root package name */
    private final Inflater f6299e;

    /* renamed from: i  reason: collision with root package name */
    private int f6300i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f6301o;

    public o(BufferedSource source, Inflater inflater) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        this.f6298d = source;
        this.f6299e = inflater;
    }

    private final void i() {
        int i10 = this.f6300i;
        if (i10 == 0) {
            return;
        }
        int remaining = i10 - this.f6299e.getRemaining();
        this.f6300i -= remaining;
        this.f6298d.skip(remaining);
    }

    public final long a(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (!this.f6301o) {
                if (i10 == 0) {
                    return 0L;
                }
                try {
                    g0 S0 = sink.S0(1);
                    h();
                    int inflate = this.f6299e.inflate(S0.f6262a, S0.f6264c, (int) Math.min(j10, 8192 - S0.f6264c));
                    i();
                    if (inflate > 0) {
                        S0.f6264c += inflate;
                        long j11 = inflate;
                        sink.L0(sink.size() + j11);
                        return j11;
                    }
                    if (S0.f6263b == S0.f6264c) {
                        sink.f40581d = S0.b();
                        h0.b(S0);
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
        if (this.f6301o) {
            return;
        }
        this.f6299e.end();
        this.f6301o = true;
        this.f6298d.close();
    }

    public final boolean h() {
        if (!this.f6299e.needsInput()) {
            return false;
        }
        if (this.f6298d.p1()) {
            return true;
        }
        g0 g0Var = this.f6298d.f().f40581d;
        Intrinsics.checkNotNull(g0Var);
        int i10 = g0Var.f6264c;
        int i11 = g0Var.f6263b;
        int i12 = i10 - i11;
        this.f6300i = i12;
        this.f6299e.setInput(g0Var.f6262a, i11, i12);
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
            if (this.f6299e.finished() || this.f6299e.needsDictionary()) {
                return -1L;
            }
        } while (!this.f6298d.p1());
        throw new EOFException("source exhausted prematurely");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f6298d.timeout();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public o(Source source, Inflater inflater) {
        this(x.d(source), inflater);
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
    }
}
