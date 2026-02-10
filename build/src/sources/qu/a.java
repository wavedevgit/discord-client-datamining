package qu;

import java.io.Closeable;
import java.util.zip.Deflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f47225d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f47226e;

    /* renamed from: i  reason: collision with root package name */
    private final Deflater f47227i;

    /* renamed from: o  reason: collision with root package name */
    private final ru.e f47228o;

    public a(boolean z10) {
        this.f47225d = z10;
        Buffer buffer = new Buffer();
        this.f47226e = buffer;
        Deflater deflater = new Deflater(-1, true);
        this.f47227i = deflater;
        this.f47228o = new ru.e((Sink) buffer, deflater);
    }

    private final boolean g(Buffer buffer, ByteString byteString) {
        return buffer.r0(buffer.size() - byteString.G(), byteString);
    }

    public final void a(Buffer buffer) {
        ByteString byteString;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f47226e.size() == 0) {
            if (this.f47225d) {
                this.f47227i.reset();
            }
            this.f47228o.u0(buffer, buffer.size());
            this.f47228o.flush();
            Buffer buffer2 = this.f47226e;
            byteString = b.f47229a;
            if (g(buffer2, byteString)) {
                long size = this.f47226e.size() - 4;
                Buffer.a R0 = Buffer.R0(this.f47226e, null, 1, null);
                try {
                    R0.k(size);
                    cs.c.a(R0, null);
                } finally {
                }
            } else {
                this.f47226e.writeByte(0);
            }
            Buffer buffer3 = this.f47226e;
            buffer.u0(buffer3, buffer3.size());
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f47228o.close();
    }
}
