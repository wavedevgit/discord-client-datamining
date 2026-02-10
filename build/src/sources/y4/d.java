package y4;

import java.io.IOException;
import kotlin.jvm.functions.Function1;
import okio.Buffer;
import okio.Sink;
import ru.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends j {

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f55495e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f55496i;

    public d(Sink sink, Function1 function1) {
        super(sink);
        this.f55495e = function1;
    }

    @Override // ru.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        try {
            super.close();
        } catch (IOException e10) {
            this.f55496i = true;
            this.f55495e.invoke(e10);
        }
    }

    @Override // ru.j, okio.Sink, java.io.Flushable
    public void flush() {
        try {
            super.flush();
        } catch (IOException e10) {
            this.f55496i = true;
            this.f55495e.invoke(e10);
        }
    }

    @Override // ru.j, okio.Sink
    public void u0(Buffer buffer, long j10) {
        if (this.f55496i) {
            buffer.skip(j10);
            return;
        }
        try {
            super.u0(buffer, j10);
        } catch (IOException e10) {
            this.f55496i = true;
            this.f55495e.invoke(e10);
        }
    }
}
