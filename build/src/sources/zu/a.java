package zu;

import java.io.Closeable;
import java.util.zip.Deflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f57128d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f57129e;

    /* renamed from: i  reason: collision with root package name */
    private final Deflater f57130i;

    /* renamed from: o  reason: collision with root package name */
    private final av.e f57131o;

    public a(boolean z10) {
        this.f57128d = z10;
        Buffer buffer = new Buffer();
        this.f57129e = buffer;
        Deflater deflater = new Deflater(-1, true);
        this.f57130i = deflater;
        this.f57131o = new av.e((Sink) buffer, deflater);
    }

    private final boolean h(Buffer buffer, ByteString byteString) {
        return buffer.r0(buffer.size() - byteString.G(), byteString);
    }

    public final void a(Buffer buffer) {
        ByteString byteString;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f57129e.size() == 0) {
            if (this.f57128d) {
                this.f57130i.reset();
            }
            this.f57131o.u0(buffer, buffer.size());
            this.f57131o.flush();
            Buffer buffer2 = this.f57129e;
            byteString = b.f57132a;
            if (h(buffer2, byteString)) {
                long size = this.f57129e.size() - 4;
                Buffer.a G0 = Buffer.G0(this.f57129e, null, 1, null);
                try {
                    G0.i(size);
                    ls.c.a(G0, null);
                } finally {
                }
            } else {
                this.f57129e.writeByte(0);
            }
            Buffer buffer3 = this.f57129e;
            buffer.u0(buffer3, buffer3.size());
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f57131o.close();
    }
}
