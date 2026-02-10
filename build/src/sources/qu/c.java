package qu;

import java.io.Closeable;
import java.util.zip.Inflater;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import okio.Buffer;
import okio.Source;
import ru.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f47230d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f47231e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f47232i;

    /* renamed from: o  reason: collision with root package name */
    private final o f47233o;

    public c(boolean z10) {
        this.f47230d = z10;
        Buffer buffer = new Buffer();
        this.f47231e = buffer;
        Inflater inflater = new Inflater(true);
        this.f47232i = inflater;
        this.f47233o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f47231e.size() == 0) {
            if (this.f47230d) {
                this.f47232i.reset();
            }
            this.f47231e.z0(buffer);
            this.f47231e.writeInt(65535);
            long bytesRead = this.f47232i.getBytesRead() + this.f47231e.size();
            do {
                this.f47233o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f47232i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f47233o.close();
    }
}
