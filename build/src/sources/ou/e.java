package ou;

import java.io.IOException;
import java.util.zip.Deflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSink;
import okio.Sink;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements Sink {

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f44481d;

    /* renamed from: e  reason: collision with root package name */
    private final Deflater f44482e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f44483i;

    public e(BufferedSink sink, Deflater deflater) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(deflater, "deflater");
        this.f44481d = sink;
        this.f44482e = deflater;
    }

    private final void a(boolean z10) {
        g0 y12;
        int deflate;
        Buffer f10 = this.f44481d.f();
        while (true) {
            y12 = f10.y1(1);
            if (z10) {
                try {
                    Deflater deflater = this.f44482e;
                    byte[] bArr = y12.f44508a;
                    int i10 = y12.f44510c;
                    deflate = deflater.deflate(bArr, i10, 8192 - i10, 2);
                } catch (NullPointerException e10) {
                    throw new IOException("Deflater already closed", e10);
                }
            } else {
                Deflater deflater2 = this.f44482e;
                byte[] bArr2 = y12.f44508a;
                int i11 = y12.f44510c;
                deflate = deflater2.deflate(bArr2, i11, 8192 - i11);
            }
            if (deflate > 0) {
                y12.f44510c += deflate;
                f10.Z0(f10.size() + deflate);
                this.f44481d.e0();
            } else if (this.f44482e.needsInput()) {
                break;
            }
        }
        if (y12.f44509b == y12.f44510c) {
            f10.f44049d = y12.b();
            h0.b(y12);
        }
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f44483i) {
            try {
                h();
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f44482e.end();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            try {
                this.f44481d.close();
            } catch (Throwable th4) {
                if (th == null) {
                    th = th4;
                }
            }
            this.f44483i = true;
            if (th == null) {
                return;
            }
            throw th;
        }
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        a(true);
        this.f44481d.flush();
    }

    public final void h() {
        this.f44482e.finish();
        a(false);
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f44481d.timeout();
    }

    public String toString() {
        return "DeflaterSink(" + this.f44481d + ')';
    }

    @Override // okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        while (j10 > 0) {
            g0 g0Var = source.f44049d;
            Intrinsics.checkNotNull(g0Var);
            int min = (int) Math.min(j10, g0Var.f44510c - g0Var.f44509b);
            this.f44482e.setInput(g0Var.f44508a, g0Var.f44509b, min);
            a(false);
            long j11 = min;
            source.Z0(source.size() - j11);
            int i10 = g0Var.f44509b + min;
            g0Var.f44509b = i10;
            if (i10 == g0Var.f44510c) {
                source.f44049d = g0Var.b();
                h0.b(g0Var);
            }
            j10 -= j11;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public e(Sink sink, Deflater deflater) {
        this(x.c(sink), deflater);
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(deflater, "deflater");
    }
}
