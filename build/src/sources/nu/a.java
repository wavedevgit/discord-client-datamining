package nu;

import java.io.Closeable;
import java.util.zip.Deflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f41975d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f41976e;

    /* renamed from: i  reason: collision with root package name */
    private final Deflater f41977i;

    /* renamed from: o  reason: collision with root package name */
    private final ou.e f41978o;

    public a(boolean z10) {
        this.f41975d = z10;
        Buffer buffer = new Buffer();
        this.f41976e = buffer;
        Deflater deflater = new Deflater(-1, true);
        this.f41977i = deflater;
        this.f41978o = new ou.e((Sink) buffer, deflater);
    }

    private final boolean h(Buffer buffer, ByteString byteString) {
        return buffer.q0(buffer.size() - byteString.G(), byteString);
    }

    public final void a(Buffer buffer) {
        ByteString byteString;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f41976e.size() == 0) {
            if (this.f41975d) {
                this.f41977i.reset();
            }
            this.f41978o.u0(buffer, buffer.size());
            this.f41978o.flush();
            Buffer buffer2 = this.f41976e;
            byteString = b.f41979a;
            if (h(buffer2, byteString)) {
                long size = this.f41976e.size() - 4;
                Buffer.a V0 = Buffer.V0(this.f41976e, null, 1, null);
                try {
                    V0.k(size);
                    zr.c.a(V0, null);
                } finally {
                }
            } else {
                this.f41976e.writeByte(0);
            }
            Buffer buffer3 = this.f41976e;
            buffer.u0(buffer3, buffer3.size());
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f41978o.close();
    }
}
