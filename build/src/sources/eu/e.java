package eu;

import java.io.IOException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
import qu.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e extends j {

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f22195e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f22196i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(Sink delegate, Function1 onException) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(onException, "onException");
        this.f22195e = onException;
    }

    @Override // qu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f22196i) {
            return;
        }
        try {
            super.close();
        } catch (IOException e10) {
            this.f22196i = true;
            this.f22195e.invoke(e10);
        }
    }

    @Override // qu.j, okio.Sink, java.io.Flushable
    public void flush() {
        if (this.f22196i) {
            return;
        }
        try {
            super.flush();
        } catch (IOException e10) {
            this.f22196i = true;
            this.f22195e.invoke(e10);
        }
    }

    @Override // qu.j, okio.Sink
    public void w0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (this.f22196i) {
            source.skip(j10);
            return;
        }
        try {
            super.w0(source, j10);
        } catch (IOException e10) {
            this.f22196i = true;
            this.f22195e.invoke(e10);
        }
    }
}
