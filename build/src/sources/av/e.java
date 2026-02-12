package av;

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
    private final BufferedSink f6235d;

    /* renamed from: e  reason: collision with root package name */
    private final Deflater f6236e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f6237i;

    public e(BufferedSink sink, Deflater deflater) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(deflater, "deflater");
        this.f6235d = sink;
        this.f6236e = deflater;
    }

    private final void a(boolean z10) {
        g0 S0;
        int deflate;
        Buffer f10 = this.f6235d.f();
        while (true) {
            S0 = f10.S0(1);
            if (z10) {
                try {
                    Deflater deflater = this.f6236e;
                    byte[] bArr = S0.f6262a;
                    int i10 = S0.f6264c;
                    deflate = deflater.deflate(bArr, i10, 8192 - i10, 2);
                } catch (NullPointerException e10) {
                    throw new IOException("Deflater already closed", e10);
                }
            } else {
                Deflater deflater2 = this.f6236e;
                byte[] bArr2 = S0.f6262a;
                int i11 = S0.f6264c;
                deflate = deflater2.deflate(bArr2, i11, 8192 - i11);
            }
            if (deflate > 0) {
                S0.f6264c += deflate;
                f10.L0(f10.size() + deflate);
                this.f6235d.h0();
            } else if (this.f6236e.needsInput()) {
                break;
            }
        }
        if (S0.f6263b == S0.f6264c) {
            f10.f40581d = S0.b();
            h0.b(S0);
        }
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f6237i) {
            try {
                h();
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f6236e.end();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            try {
                this.f6235d.close();
            } catch (Throwable th4) {
                if (th == null) {
                    th = th4;
                }
            }
            this.f6237i = true;
            if (th == null) {
                return;
            }
            throw th;
        }
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        a(true);
        this.f6235d.flush();
    }

    public final void h() {
        this.f6236e.finish();
        a(false);
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f6235d.timeout();
    }

    public String toString() {
        return "DeflaterSink(" + this.f6235d + ')';
    }

    @Override // okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        while (j10 > 0) {
            g0 g0Var = source.f40581d;
            Intrinsics.checkNotNull(g0Var);
            int min = (int) Math.min(j10, g0Var.f6264c - g0Var.f6263b);
            this.f6236e.setInput(g0Var.f6262a, g0Var.f6263b, min);
            a(false);
            long j11 = min;
            source.L0(source.size() - j11);
            int i10 = g0Var.f6263b + min;
            g0Var.f6263b = i10;
            if (i10 == g0Var.f6264c) {
                source.f40581d = g0Var.b();
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
