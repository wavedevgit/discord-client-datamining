package pu;

import java.io.Closeable;
import java.util.zip.Inflater;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import okio.Buffer;
import okio.Source;
import qu.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f45716d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f45717e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f45718i;

    /* renamed from: o  reason: collision with root package name */
    private final o f45719o;

    public c(boolean z10) {
        this.f45716d = z10;
        Buffer buffer = new Buffer();
        this.f45717e = buffer;
        Inflater inflater = new Inflater(true);
        this.f45718i = inflater;
        this.f45719o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f45717e.size() == 0) {
            if (this.f45716d) {
                this.f45718i.reset();
            }
            this.f45717e.B0(buffer);
            this.f45717e.writeInt(65535);
            long bytesRead = this.f45718i.getBytesRead() + this.f45717e.size();
            do {
                this.f45719o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f45718i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f45719o.close();
    }
}
