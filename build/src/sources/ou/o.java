package ou;

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
    private final BufferedSource f44544d;

    /* renamed from: e  reason: collision with root package name */
    private final Inflater f44545e;

    /* renamed from: i  reason: collision with root package name */
    private int f44546i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f44547o;

    public o(BufferedSource source, Inflater inflater) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        this.f44544d = source;
        this.f44545e = inflater;
    }

    private final void k() {
        int i10 = this.f44546i;
        if (i10 == 0) {
            return;
        }
        int remaining = i10 - this.f44545e.getRemaining();
        this.f44546i -= remaining;
        this.f44544d.skip(remaining);
    }

    public final long a(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (!this.f44547o) {
                if (i10 == 0) {
                    return 0L;
                }
                try {
                    g0 y12 = sink.y1(1);
                    h();
                    int inflate = this.f44545e.inflate(y12.f44508a, y12.f44510c, (int) Math.min(j10, 8192 - y12.f44510c));
                    k();
                    if (inflate > 0) {
                        y12.f44510c += inflate;
                        long j11 = inflate;
                        sink.Z0(sink.size() + j11);
                        return j11;
                    }
                    if (y12.f44509b == y12.f44510c) {
                        sink.f44049d = y12.b();
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
        if (this.f44547o) {
            return;
        }
        this.f44545e.end();
        this.f44547o = true;
        this.f44544d.close();
    }

    public final boolean h() {
        if (!this.f44545e.needsInput()) {
            return false;
        }
        if (this.f44544d.o1()) {
            return true;
        }
        g0 g0Var = this.f44544d.f().f44049d;
        Intrinsics.checkNotNull(g0Var);
        int i10 = g0Var.f44510c;
        int i11 = g0Var.f44509b;
        int i12 = i10 - i11;
        this.f44546i = i12;
        this.f44545e.setInput(g0Var.f44508a, i11, i12);
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
            if (this.f44545e.finished() || this.f44545e.needsDictionary()) {
                return -1L;
            }
        } while (!this.f44544d.o1());
        throw new EOFException("source exhausted prematurely");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f44544d.timeout();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public o(Source source, Inflater inflater) {
        this(x.d(source), inflater);
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
    }
}
