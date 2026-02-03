package ku;

import java.io.Closeable;
import java.util.zip.Inflater;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import lu.o;
import okio.Buffer;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f36175d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f36176e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f36177i;

    /* renamed from: o  reason: collision with root package name */
    private final o f36178o;

    public c(boolean z10) {
        this.f36175d = z10;
        Buffer buffer = new Buffer();
        this.f36176e = buffer;
        Inflater inflater = new Inflater(true);
        this.f36177i = inflater;
        this.f36178o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f36176e.size() == 0) {
            if (this.f36175d) {
                this.f36177i.reset();
            }
            this.f36176e.y0(buffer);
            this.f36176e.writeInt(65535);
            long bytesRead = this.f36177i.getBytesRead() + this.f36176e.size();
            do {
                this.f36178o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f36177i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f36178o.close();
    }
}
