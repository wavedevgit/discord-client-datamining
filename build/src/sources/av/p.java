package av;

import java.io.IOException;
import java.io.InputStream;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Source;
import okio.Timeout;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p implements Source {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f6302d;

    /* renamed from: e  reason: collision with root package name */
    private final Timeout f6303e;

    public p(InputStream input, Timeout timeout) {
        Intrinsics.checkNotNullParameter(input, "input");
        Intrinsics.checkNotNullParameter(timeout, "timeout");
        this.f6302d = input;
        this.f6303e = timeout;
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f6302d.close();
    }

    @Override // okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0L;
        }
        if (i10 >= 0) {
            try {
                this.f6303e.f();
                g0 S0 = sink.S0(1);
                int read = this.f6302d.read(S0.f6262a, S0.f6264c, (int) Math.min(j10, 8192 - S0.f6264c));
                if (read == -1) {
                    if (S0.f6263b == S0.f6264c) {
                        sink.f40580d = S0.b();
                        h0.b(S0);
                        return -1L;
                    }
                    return -1L;
                }
                S0.f6264c += read;
                long j11 = read;
                sink.L0(sink.size() + j11);
                return j11;
            } catch (AssertionError e10) {
                if (x.e(e10)) {
                    throw new IOException(e10);
                }
                throw e10;
            }
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f6303e;
    }

    public String toString() {
        return "source(" + this.f6302d + ')';
    }
}
