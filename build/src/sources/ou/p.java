package ou;

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
    private final InputStream f44548d;

    /* renamed from: e  reason: collision with root package name */
    private final Timeout f44549e;

    public p(InputStream input, Timeout timeout) {
        Intrinsics.checkNotNullParameter(input, "input");
        Intrinsics.checkNotNullParameter(timeout, "timeout");
        this.f44548d = input;
        this.f44549e = timeout;
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f44548d.close();
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
                this.f44549e.f();
                g0 y12 = sink.y1(1);
                int read = this.f44548d.read(y12.f44508a, y12.f44510c, (int) Math.min(j10, 8192 - y12.f44510c));
                if (read == -1) {
                    if (y12.f44509b == y12.f44510c) {
                        sink.f44049d = y12.b();
                        h0.b(y12);
                        return -1L;
                    }
                    return -1L;
                }
                y12.f44510c += read;
                long j11 = read;
                sink.Z0(sink.size() + j11);
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
        return this.f44549e;
    }

    public String toString() {
        return "source(" + this.f44548d + ')';
    }
}
