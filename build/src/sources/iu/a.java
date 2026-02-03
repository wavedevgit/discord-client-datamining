package iu;

import java.io.Closeable;
import java.util.zip.Deflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31169d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f31170e;

    /* renamed from: i  reason: collision with root package name */
    private final Deflater f31171i;

    /* renamed from: o  reason: collision with root package name */
    private final ju.e f31172o;

    public a(boolean z10) {
        this.f31169d = z10;
        Buffer buffer = new Buffer();
        this.f31170e = buffer;
        Deflater deflater = new Deflater(-1, true);
        this.f31171i = deflater;
        this.f31172o = new ju.e((Sink) buffer, deflater);
    }

    private final boolean h(Buffer buffer, ByteString byteString) {
        return buffer.q0(buffer.size() - byteString.G(), byteString);
    }

    public final void a(Buffer buffer) {
        ByteString byteString;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f31170e.size() == 0) {
            if (this.f31169d) {
                this.f31171i.reset();
            }
            this.f31172o.v0(buffer, buffer.size());
            this.f31172o.flush();
            Buffer buffer2 = this.f31170e;
            byteString = b.f31173a;
            if (h(buffer2, byteString)) {
                long size = this.f31170e.size() - 4;
                Buffer.a V0 = Buffer.V0(this.f31170e, null, 1, null);
                try {
                    V0.l(size);
                    ur.c.a(V0, null);
                } finally {
                }
            } else {
                this.f31170e.writeByte(0);
            }
            Buffer buffer3 = this.f31170e;
            buffer.v0(buffer3, buffer3.size());
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f31172o.close();
    }
}
