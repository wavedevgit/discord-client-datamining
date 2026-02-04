package zt;

import java.io.IOException;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import lu.j;
import okio.Buffer;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e extends j {

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f56212e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f56213i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(Sink delegate, Function1 onException) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(onException, "onException");
        this.f56212e = onException;
    }

    @Override // lu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f56213i) {
            return;
        }
        try {
            super.close();
        } catch (IOException e10) {
            this.f56213i = true;
            this.f56212e.invoke(e10);
        }
    }

    @Override // lu.j, okio.Sink, java.io.Flushable
    public void flush() {
        if (this.f56213i) {
            return;
        }
        try {
            super.flush();
        } catch (IOException e10) {
            this.f56213i = true;
            this.f56212e.invoke(e10);
        }
    }

    @Override // lu.j, okio.Sink
    public void t0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (this.f56213i) {
            source.skip(j10);
            return;
        }
        try {
            super.t0(source, j10);
        } catch (IOException e10) {
            this.f56213i = true;
            this.f56212e.invoke(e10);
        }
    }
}
