package hu;

import java.io.Closeable;
import java.util.zip.Deflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f28240d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f28241e;

    /* renamed from: i  reason: collision with root package name */
    private final Deflater f28242i;

    /* renamed from: o  reason: collision with root package name */
    private final iu.e f28243o;

    public a(boolean z10) {
        this.f28240d = z10;
        Buffer buffer = new Buffer();
        this.f28241e = buffer;
        Deflater deflater = new Deflater(-1, true);
        this.f28242i = deflater;
        this.f28243o = new iu.e((Sink) buffer, deflater);
    }

    private final boolean h(Buffer buffer, ByteString byteString) {
        return buffer.p0(buffer.size() - byteString.G(), byteString);
    }

    public final void a(Buffer buffer) {
        ByteString byteString;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f28241e.size() == 0) {
            if (this.f28240d) {
                this.f28242i.reset();
            }
            this.f28243o.t0(buffer, buffer.size());
            this.f28243o.flush();
            Buffer buffer2 = this.f28241e;
            byteString = b.f28244a;
            if (h(buffer2, byteString)) {
                long size = this.f28241e.size() - 4;
                Buffer.a U0 = Buffer.U0(this.f28241e, null, 1, null);
                try {
                    U0.l(size);
                    tr.c.a(U0, null);
                } finally {
                }
            } else {
                this.f28241e.writeByte(0);
            }
            Buffer buffer3 = this.f28241e;
            buffer.t0(buffer3, buffer3.size());
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28243o.close();
    }
}
