package ju;

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
    private final BufferedSink f32335d;

    /* renamed from: e  reason: collision with root package name */
    private final Deflater f32336e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f32337i;

    public e(BufferedSink sink, Deflater deflater) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(deflater, "deflater");
        this.f32335d = sink;
        this.f32336e = deflater;
    }

    private final void a(boolean z10) {
        g0 y12;
        int deflate;
        Buffer e10 = this.f32335d.e();
        while (true) {
            y12 = e10.y1(1);
            if (z10) {
                try {
                    Deflater deflater = this.f32336e;
                    byte[] bArr = y12.f32362a;
                    int i10 = y12.f32364c;
                    deflate = deflater.deflate(bArr, i10, 8192 - i10, 2);
                } catch (NullPointerException e11) {
                    throw new IOException("Deflater already closed", e11);
                }
            } else {
                Deflater deflater2 = this.f32336e;
                byte[] bArr2 = y12.f32362a;
                int i11 = y12.f32364c;
                deflate = deflater2.deflate(bArr2, i11, 8192 - i11);
            }
            if (deflate > 0) {
                y12.f32364c += deflate;
                e10.Z0(e10.size() + deflate);
                this.f32335d.e0();
            } else if (this.f32336e.needsInput()) {
                break;
            }
        }
        if (y12.f32363b == y12.f32364c) {
            e10.f44496d = y12.b();
            h0.b(y12);
        }
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f32337i) {
            try {
                h();
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f32336e.end();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            try {
                this.f32335d.close();
            } catch (Throwable th4) {
                if (th == null) {
                    th = th4;
                }
            }
            this.f32337i = true;
            if (th == null) {
                return;
            }
            throw th;
        }
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        a(true);
        this.f32335d.flush();
    }

    public final void h() {
        this.f32336e.finish();
        a(false);
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f32335d.timeout();
    }

    public String toString() {
        return "DeflaterSink(" + this.f32335d + ')';
    }

    @Override // okio.Sink
    public void v0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        while (j10 > 0) {
            g0 g0Var = source.f44496d;
            Intrinsics.checkNotNull(g0Var);
            int min = (int) Math.min(j10, g0Var.f32364c - g0Var.f32363b);
            this.f32336e.setInput(g0Var.f32362a, g0Var.f32363b, min);
            a(false);
            long j11 = min;
            source.Z0(source.size() - j11);
            int i10 = g0Var.f32363b + min;
            g0Var.f32363b = i10;
            if (i10 == g0Var.f32364c) {
                source.f44496d = g0Var.b();
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
