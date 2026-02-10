package zu;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.Closeable;
import java.io.IOException;
import java.util.Random;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSink;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f57200d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f57201e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f57202i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f57203o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f57204p;

    /* renamed from: q  reason: collision with root package name */
    private final long f57205q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f57206r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f57207s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f57208t;

    /* renamed from: u  reason: collision with root package name */
    private a f57209u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f57210v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f57211w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f57200d = z10;
        this.f57201e = sink;
        this.f57202i = random;
        this.f57203o = z11;
        this.f57204p = z12;
        this.f57205q = j10;
        this.f57206r = new Buffer();
        this.f57207s = sink.f();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f57210v = bArr;
        this.f57211w = z10 ? new Buffer.a() : null;
    }

    private final void h(int i10, ByteString byteString) {
        if (!this.f57208t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f57207s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f57200d) {
                    this.f57207s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f57202i;
                    byte[] bArr = this.f57210v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f57207s.write(this.f57210v);
                    if (G > 0) {
                        long size = this.f57207s.size();
                        this.f57207s.e2(byteString);
                        Buffer buffer = this.f57207s;
                        Buffer.a aVar = this.f57211w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.F0(aVar);
                        this.f57211w.m(size);
                        f.f57184a.b(this.f57211w, this.f57210v);
                        this.f57211w.close();
                    }
                } else {
                    this.f57207s.writeByte(G);
                    this.f57207s.e2(byteString);
                }
                this.f57201e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f40592p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f57184a.c(i10);
            }
            Buffer buffer = new Buffer();
            buffer.writeShort(i10);
            if (byteString != null) {
                buffer.e2(byteString);
            }
            byteString2 = buffer.M1();
        }
        try {
            h(8, byteString2);
        } finally {
            this.f57208t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f57209u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void i(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f57208t) {
            this.f57206r.e2(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f57203o && data.G() >= this.f57205q) {
                a aVar = this.f57209u;
                if (aVar == null) {
                    aVar = new a(this.f57204p);
                    this.f57209u = aVar;
                }
                aVar.a(this.f57206r);
                i12 = i10 | 192;
            }
            long size = this.f57206r.size();
            this.f57207s.writeByte(i12);
            if (this.f57200d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f57207s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f57207s.writeByte(i11 | 126);
                this.f57207s.writeShort((int) size);
            } else {
                this.f57207s.writeByte(i11 | 127);
                this.f57207s.B1(size);
            }
            if (this.f57200d) {
                Random random = this.f57202i;
                byte[] bArr = this.f57210v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f57207s.write(this.f57210v);
                if (size > 0) {
                    Buffer buffer = this.f57206r;
                    Buffer.a aVar2 = this.f57211w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.F0(aVar2);
                    this.f57211w.m(0L);
                    f.f57184a.b(this.f57211w, this.f57210v);
                    this.f57211w.close();
                }
            }
            this.f57207s.u0(this.f57206r, size);
            this.f57201e.S();
            return;
        }
        throw new IOException("closed");
    }

    public final void m(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        h(9, payload);
    }

    public final void n(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        h(10, payload);
    }
}
