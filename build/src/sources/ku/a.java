package ku;

import java.io.Closeable;
import java.util.zip.Deflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f36170d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f36171e;

    /* renamed from: i  reason: collision with root package name */
    private final Deflater f36172i;

    /* renamed from: o  reason: collision with root package name */
    private final lu.e f36173o;

    public a(boolean z10) {
        this.f36170d = z10;
        Buffer buffer = new Buffer();
        this.f36171e = buffer;
        Deflater deflater = new Deflater(-1, true);
        this.f36172i = deflater;
        this.f36173o = new lu.e((Sink) buffer, deflater);
    }

    private final boolean h(Buffer buffer, ByteString byteString) {
        return buffer.p0(buffer.size() - byteString.G(), byteString);
    }

    public final void a(Buffer buffer) {
        ByteString byteString;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f36171e.size() == 0) {
            if (this.f36170d) {
                this.f36172i.reset();
            }
            this.f36173o.t0(buffer, buffer.size());
            this.f36173o.flush();
            Buffer buffer2 = this.f36171e;
            byteString = b.f36174a;
            if (h(buffer2, byteString)) {
                long size = this.f36171e.size() - 4;
                Buffer.a V0 = Buffer.V0(this.f36171e, null, 1, null);
                try {
                    V0.l(size);
                    wr.c.a(V0, null);
                } finally {
                }
            } else {
                this.f36171e.writeByte(0);
            }
            Buffer buffer3 = this.f36171e;
            buffer.t0(buffer3, buffer3.size());
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f36173o.close();
    }
}
