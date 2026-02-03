package iu;

import java.io.Closeable;
import java.util.zip.Inflater;
import ju.o;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import okio.Buffer;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31174d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f31175e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f31176i;

    /* renamed from: o  reason: collision with root package name */
    private final o f31177o;

    public c(boolean z10) {
        this.f31174d = z10;
        Buffer buffer = new Buffer();
        this.f31175e = buffer;
        Inflater inflater = new Inflater(true);
        this.f31176i = inflater;
        this.f31177o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f31175e.size() == 0) {
            if (this.f31174d) {
                this.f31176i.reset();
            }
            this.f31175e.A0(buffer);
            this.f31175e.writeInt(65535);
            long bytesRead = this.f31176i.getBytesRead() + this.f31175e.size();
            do {
                this.f31177o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f31176i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f31177o.close();
    }
}
