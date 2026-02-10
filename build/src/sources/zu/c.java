package zu;

import av.o;
import java.io.Closeable;
import java.util.zip.Inflater;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import okio.Buffer;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f57133d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f57134e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f57135i;

    /* renamed from: o  reason: collision with root package name */
    private final o f57136o;

    public c(boolean z10) {
        this.f57133d = z10;
        Buffer buffer = new Buffer();
        this.f57134e = buffer;
        Inflater inflater = new Inflater(true);
        this.f57135i = inflater;
        this.f57136o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f57134e.size() == 0) {
            if (this.f57133d) {
                this.f57135i.reset();
            }
            this.f57134e.A0(buffer);
            this.f57134e.writeInt(65535);
            long bytesRead = this.f57135i.getBytesRead() + this.f57134e.size();
            do {
                this.f57136o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f57135i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f57136o.close();
    }
}
