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
    private final boolean f57134d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f57135e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f57136i;

    /* renamed from: o  reason: collision with root package name */
    private final o f57137o;

    public c(boolean z10) {
        this.f57134d = z10;
        Buffer buffer = new Buffer();
        this.f57135e = buffer;
        Inflater inflater = new Inflater(true);
        this.f57136i = inflater;
        this.f57137o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f57135e.size() == 0) {
            if (this.f57134d) {
                this.f57136i.reset();
            }
            this.f57135e.A0(buffer);
            this.f57135e.writeInt(65535);
            long bytesRead = this.f57136i.getBytesRead() + this.f57135e.size();
            do {
                this.f57137o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f57136i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f57137o.close();
    }
}
