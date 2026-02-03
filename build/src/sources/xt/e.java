package xt;

import java.io.IOException;
import ju.j;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e extends j {

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f53827e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f53828i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(Sink delegate, Function1 onException) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(onException, "onException");
        this.f53827e = onException;
    }

    @Override // ju.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f53828i) {
            return;
        }
        try {
            super.close();
        } catch (IOException e10) {
            this.f53828i = true;
            this.f53827e.invoke(e10);
        }
    }

    @Override // ju.j, okio.Sink, java.io.Flushable
    public void flush() {
        if (this.f53828i) {
            return;
        }
        try {
            super.flush();
        } catch (IOException e10) {
            this.f53828i = true;
            this.f53827e.invoke(e10);
        }
    }

    @Override // ju.j, okio.Sink
    public void v0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (this.f53828i) {
            source.skip(j10);
            return;
        }
        try {
            super.v0(source, j10);
        } catch (IOException e10) {
            this.f53828i = true;
            this.f53827e.invoke(e10);
        }
    }
}
