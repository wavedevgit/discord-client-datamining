package fu;

import java.io.IOException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
import ru.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e extends j {

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f23301e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f23302i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(Sink delegate, Function1 onException) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(onException, "onException");
        this.f23301e = onException;
    }

    @Override // ru.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f23302i) {
            return;
        }
        try {
            super.close();
        } catch (IOException e10) {
            this.f23302i = true;
            this.f23301e.invoke(e10);
        }
    }

    @Override // ru.j, okio.Sink, java.io.Flushable
    public void flush() {
        if (this.f23302i) {
            return;
        }
        try {
            super.flush();
        } catch (IOException e10) {
            this.f23302i = true;
            this.f23301e.invoke(e10);
        }
    }

    @Override // ru.j, okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (this.f23302i) {
            source.skip(j10);
            return;
        }
        try {
            super.u0(source, j10);
        } catch (IOException e10) {
            this.f23302i = true;
            this.f23301e.invoke(e10);
        }
    }
}
