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
    private final boolean f57702d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f57703e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f57704i;

    /* renamed from: o  reason: collision with root package name */
    private final o f57705o;

    public c(boolean z10) {
        this.f57702d = z10;
        Buffer buffer = new Buffer();
        this.f57703e = buffer;
        Inflater inflater = new Inflater(true);
        this.f57704i = inflater;
        this.f57705o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f57703e.size() == 0) {
            if (this.f57702d) {
                this.f57704i.reset();
            }
            this.f57703e.A0(buffer);
            this.f57703e.writeInt(65535);
            long bytesRead = this.f57704i.getBytesRead() + this.f57703e.size();
            do {
                this.f57705o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f57704i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f57705o.close();
    }
}
