package y4;

import iu.j;
import java.io.IOException;
import kotlin.jvm.functions.Function1;
import okio.Buffer;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends j {

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f53984e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f53985i;

    public d(Sink sink, Function1 function1) {
        super(sink);
        this.f53984e = function1;
    }

    @Override // iu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        try {
            super.close();
        } catch (IOException e10) {
            this.f53985i = true;
            this.f53984e.invoke(e10);
        }
    }

    @Override // iu.j, okio.Sink, java.io.Flushable
    public void flush() {
        try {
            super.flush();
        } catch (IOException e10) {
            this.f53985i = true;
            this.f53984e.invoke(e10);
        }
    }

    @Override // iu.j, okio.Sink
    public void t0(Buffer buffer, long j10) {
        if (this.f53985i) {
            buffer.skip(j10);
            return;
        }
        try {
            super.t0(buffer, j10);
        } catch (IOException e10) {
            this.f53985i = true;
            this.f53984e.invoke(e10);
        }
    }
}
