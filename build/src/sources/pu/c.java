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
    private final boolean f45668d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f45669e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f45670i;

    /* renamed from: o  reason: collision with root package name */
    private final o f45671o;

    public c(boolean z10) {
        this.f45668d = z10;
        Buffer buffer = new Buffer();
        this.f45669e = buffer;
        Inflater inflater = new Inflater(true);
        this.f45670i = inflater;
        this.f45671o = new o((Source) buffer, inflater);
    }

    public final void a(Buffer buffer) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f45669e.size() == 0) {
            if (this.f45668d) {
                this.f45670i.reset();
            }
            this.f45669e.B0(buffer);
            this.f45669e.writeInt(65535);
            long bytesRead = this.f45670i.getBytesRead() + this.f45669e.size();
            do {
                this.f45671o.a(buffer, LongCompanionObject.MAX_VALUE);
            } while (this.f45670i.getBytesRead() < bytesRead);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f45671o.close();
    }
}
