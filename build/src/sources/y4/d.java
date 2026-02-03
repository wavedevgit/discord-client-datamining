package y4;

import java.io.IOException;
import ju.j;
import kotlin.jvm.functions.Function1;
import okio.Buffer;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends j {

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f53975e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f53976i;

    public d(Sink sink, Function1 function1) {
        super(sink);
        this.f53975e = function1;
    }

    @Override // ju.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        try {
            super.close();
        } catch (IOException e10) {
            this.f53976i = true;
            this.f53975e.invoke(e10);
        }
    }

    @Override // ju.j, okio.Sink, java.io.Flushable
    public void flush() {
        try {
            super.flush();
        } catch (IOException e10) {
            this.f53976i = true;
            this.f53975e.invoke(e10);
        }
    }

    @Override // ju.j, okio.Sink
    public void v0(Buffer buffer, long j10) {
        if (this.f53976i) {
            buffer.skip(j10);
            return;
        }
        try {
            super.v0(buffer, j10);
        } catch (IOException e10) {
            this.f53976i = true;
            this.f53975e.invoke(e10);
        }
    }
}
