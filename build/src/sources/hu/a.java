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
    private final boolean f28224d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f28225e;

    /* renamed from: i  reason: collision with root package name */
    private final Deflater f28226i;

    /* renamed from: o  reason: collision with root package name */
    private final iu.e f28227o;

    public a(boolean z10) {
        this.f28224d = z10;
        Buffer buffer = new Buffer();
        this.f28225e = buffer;
        Deflater deflater = new Deflater(-1, true);
        this.f28226i = deflater;
        this.f28227o = new iu.e((Sink) buffer, deflater);
    }

    private final boolean h(Buffer buffer, ByteString byteString) {
        return buffer.p0(buffer.size() - byteString.G(), byteString);
    }

    public final void a(Buffer buffer) {
        ByteString byteString;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f28225e.size() == 0) {
            if (this.f28224d) {
                this.f28226i.reset();
            }
            this.f28227o.t0(buffer, buffer.size());
            this.f28227o.flush();
            Buffer buffer2 = this.f28225e;
            byteString = b.f28228a;
            if (h(buffer2, byteString)) {
                long size = this.f28225e.size() - 4;
                Buffer.a U0 = Buffer.U0(this.f28225e, null, 1, null);
                try {
                    U0.l(size);
                    tr.c.a(U0, null);
                } finally {
                }
            } else {
                this.f28225e.writeByte(0);
            }
            Buffer buffer3 = this.f28225e;
            buffer.t0(buffer3, buffer3.size());
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28227o.close();
    }
}
