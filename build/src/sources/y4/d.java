package y4;

import av.j;
import java.io.IOException;
import kotlin.jvm.functions.Function1;
import okio.Buffer;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends j {

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f55426e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f55427i;

    public d(Sink sink, Function1 function1) {
        super(sink);
        this.f55426e = function1;
    }

    @Override // av.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        try {
            super.close();
        } catch (IOException e10) {
            this.f55427i = true;
            this.f55426e.invoke(e10);
        }
    }

    @Override // av.j, okio.Sink, java.io.Flushable
    public void flush() {
        try {
            super.flush();
        } catch (IOException e10) {
            this.f55427i = true;
            this.f55426e.invoke(e10);
        }
    }

    @Override // av.j, okio.Sink
    public void u0(Buffer buffer, long j10) {
        if (this.f55427i) {
            buffer.skip(j10);
            return;
        }
        try {
            super.u0(buffer, j10);
        } catch (IOException e10) {
            this.f55427i = true;
            this.f55426e.invoke(e10);
        }
    }
}
