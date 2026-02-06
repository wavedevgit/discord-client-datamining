package qu;

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
    private final BufferedSink f48197d;

    /* renamed from: e  reason: collision with root package name */
    private final Deflater f48198e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f48199i;

    public e(BufferedSink sink, Deflater deflater) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(deflater, "deflater");
        this.f48197d = sink;
        this.f48198e = deflater;
    }

    private final void a(boolean z10) {
        g0 x12;
        int deflate;
        Buffer e10 = this.f48197d.e();
        while (true) {
            x12 = e10.x1(1);
            if (z10) {
                try {
                    Deflater deflater = this.f48198e;
                    byte[] bArr = x12.f48224a;
                    int i10 = x12.f48226c;
                    deflate = deflater.deflate(bArr, i10, 8192 - i10, 2);
                } catch (NullPointerException e11) {
                    throw new IOException("Deflater already closed", e11);
                }
            } else {
                Deflater deflater2 = this.f48198e;
                byte[] bArr2 = x12.f48224a;
                int i11 = x12.f48226c;
                deflate = deflater2.deflate(bArr2, i11, 8192 - i11);
            }
            if (deflate > 0) {
                x12.f48226c += deflate;
                e10.Y0(e10.size() + deflate);
                this.f48197d.g0();
            } else if (this.f48198e.needsInput()) {
                break;
            }
        }
        if (x12.f48225b == x12.f48226c) {
            e10.f43155d = x12.b();
            h0.b(x12);
        }
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f48199i) {
            try {
                g();
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f48198e.end();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            try {
                this.f48197d.close();
            } catch (Throwable th4) {
                if (th == null) {
                    th = th4;
                }
            }
            this.f48199i = true;
            if (th == null) {
                return;
            }
            throw th;
        }
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        a(true);
        this.f48197d.flush();
    }

    public final void g() {
        this.f48198e.finish();
        a(false);
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f48197d.timeout();
    }

    public String toString() {
        return "DeflaterSink(" + this.f48197d + ')';
    }

    @Override // okio.Sink
    public void w0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        while (j10 > 0) {
            g0 g0Var = source.f43155d;
            Intrinsics.checkNotNull(g0Var);
            int min = (int) Math.min(j10, g0Var.f48226c - g0Var.f48225b);
            this.f48198e.setInput(g0Var.f48224a, g0Var.f48225b, min);
            a(false);
            long j11 = min;
            source.Y0(source.size() - j11);
            int i10 = g0Var.f48225b + min;
            g0Var.f48225b = i10;
            if (i10 == g0Var.f48226c) {
                source.f43155d = g0Var.b();
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
