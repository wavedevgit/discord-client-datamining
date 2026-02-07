package pu;

import java.io.Closeable;
import java.util.zip.Deflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f45711d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f45712e;

    /* renamed from: i  reason: collision with root package name */
    private final Deflater f45713i;

    /* renamed from: o  reason: collision with root package name */
    private final qu.e f45714o;

    public a(boolean z10) {
        this.f45711d = z10;
        Buffer buffer = new Buffer();
        this.f45712e = buffer;
        Deflater deflater = new Deflater(-1, true);
        this.f45713i = deflater;
        this.f45714o = new qu.e((Sink) buffer, deflater);
    }

    private final boolean g(Buffer buffer, ByteString byteString) {
        return buffer.s0(buffer.size() - byteString.G(), byteString);
    }

    public final void a(Buffer buffer) {
        ByteString byteString;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (this.f45712e.size() == 0) {
            if (this.f45711d) {
                this.f45713i.reset();
            }
            this.f45714o.w0(buffer, buffer.size());
            this.f45714o.flush();
            Buffer buffer2 = this.f45712e;
            byteString = b.f45715a;
            if (g(buffer2, byteString)) {
                long size = this.f45712e.size() - 4;
                Buffer.a O0 = Buffer.O0(this.f45712e, null, 1, null);
                try {
                    O0.k(size);
                    bs.c.a(O0, null);
                } finally {
                }
            } else {
                this.f45712e.writeByte(0);
            }
            Buffer buffer3 = this.f45712e;
            buffer.w0(buffer3, buffer3.size());
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f45714o.close();
    }
}
