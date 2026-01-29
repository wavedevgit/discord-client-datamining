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
    private final boolean f28229d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f28230e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f28231i;

    /* renamed from: o  reason: collision with root package name */
    private final o f28232o;

    public c(boolean z10) {
        this.f28229d = z10;
        Buffer buffer = new Buffer();
        this.f28230e = buffer;
        Inflater inflater = new Inflater(true);
        this.f28231i = inflater;
        this.f28232o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f28230e.size() == 0) {
            if (this.f28229d) {
                this.f28231i.reset();
            }
            this.f28230e.y0(buffer);
            this.f28230e.writeInt(65535);
            long bytesRead = this.f28231i.getBytesRead() + this.f28230e.size();
            do {
                this.f28232o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f28231i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28232o.close();
    }
}
