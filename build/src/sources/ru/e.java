package ru;

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
    private final BufferedSink f49363d;

    /* renamed from: e  reason: collision with root package name */
    private final Deflater f49364e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f49365i;

    public e(BufferedSink sink, Deflater deflater) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(deflater, "deflater");
        this.f49363d = sink;
        this.f49364e = deflater;
    }

    private final void a(boolean z10) {
        g0 s12;
        int deflate;
        Buffer e10 = this.f49363d.e();
        while (true) {
            s12 = e10.s1(1);
            if (z10) {
                try {
                    Deflater deflater = this.f49364e;
                    byte[] bArr = s12.f49390a;
                    int i10 = s12.f49392c;
                    deflate = deflater.deflate(bArr, i10, 8192 - i10, 2);
                } catch (NullPointerException e11) {
                    throw new IOException("Deflater already closed", e11);
                }
            } else {
                Deflater deflater2 = this.f49364e;
                byte[] bArr2 = s12.f49390a;
                int i11 = s12.f49392c;
                deflate = deflater2.deflate(bArr2, i11, 8192 - i11);
            }
            if (deflate > 0) {
                s12.f49392c += deflate;
                e10.W0(e10.size() + deflate);
                this.f49363d.h0();
            } else if (this.f49364e.needsInput()) {
                break;
            }
        }
        if (s12.f49391b == s12.f49392c) {
            e10.f42330d = s12.b();
            h0.b(s12);
        }
    }

    @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f49365i) {
            try {
                g();
                th = null;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                this.f49364e.end();
            } catch (Throwable th3) {
                if (th == null) {
                    th = th3;
                }
            }
            try {
                this.f49363d.close();
            } catch (Throwable th4) {
                if (th == null) {
                    th = th4;
                }
            }
            this.f49365i = true;
            if (th == null) {
                return;
            }
            throw th;
        }
    }

    @Override // okio.Sink, java.io.Flushable
    public void flush() {
        a(true);
        this.f49363d.flush();
    }

    public final void g() {
        this.f49364e.finish();
        a(false);
    }

    @Override // okio.Sink
    public Timeout timeout() {
        return this.f49363d.timeout();
    }

    public String toString() {
        return "DeflaterSink(" + this.f49363d + ')';
    }

    @Override // okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        while (j10 > 0) {
            g0 g0Var = source.f42330d;
            Intrinsics.checkNotNull(g0Var);
            int min = (int) Math.min(j10, g0Var.f49392c - g0Var.f49391b);
            this.f49364e.setInput(g0Var.f49390a, g0Var.f49391b, min);
            a(false);
            long j11 = min;
            source.W0(source.size() - j11);
            int i10 = g0Var.f49391b + min;
            g0Var.f49391b = i10;
            if (i10 == g0Var.f49392c) {
                source.f42330d = g0Var.b();
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
