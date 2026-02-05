package nu;

import java.io.Closeable;
import java.util.zip.Inflater;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import okio.Buffer;
import okio.Source;
import ou.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f41980d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f41981e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f41982i;

    /* renamed from: o  reason: collision with root package name */
    private final o f41983o;

    public c(boolean z10) {
        this.f41980d = z10;
        Buffer buffer = new Buffer();
        this.f41981e = buffer;
        Inflater inflater = new Inflater(true);
        this.f41982i = inflater;
        this.f41983o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f41981e.size() == 0) {
            if (this.f41980d) {
                this.f41982i.reset();
            }
            this.f41981e.z0(buffer);
            this.f41981e.writeInt(65535);
            long bytesRead = this.f41982i.getBytesRead() + this.f41981e.size();
            do {
                this.f41983o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f41982i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f41983o.close();
    }
}
