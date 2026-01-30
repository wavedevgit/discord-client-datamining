package hu;

import iu.o;
import java.io.Closeable;
import java.util.zip.Inflater;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import okio.Buffer;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f28245d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f28246e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f28247i;

    /* renamed from: o  reason: collision with root package name */
    private final o f28248o;

    public c(boolean z10) {
        this.f28245d = z10;
        Buffer buffer = new Buffer();
        this.f28246e = buffer;
        Inflater inflater = new Inflater(true);
        this.f28247i = inflater;
        this.f28248o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f28246e.size() == 0) {
            if (this.f28245d) {
                this.f28247i.reset();
            }
            this.f28246e.y0(buffer);
            this.f28246e.writeInt(65535);
            long bytesRead = this.f28247i.getBytesRead() + this.f28246e.size();
            do {
                this.f28248o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f28247i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28248o.close();
    }
}
