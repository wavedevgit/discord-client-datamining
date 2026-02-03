package ku;

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
    private final boolean f36242d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f36243e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f36244i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f36245o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f36246p;

    /* renamed from: q  reason: collision with root package name */
    private final long f36247q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f36248r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f36249s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f36250t;

    /* renamed from: u  reason: collision with root package name */
    private a f36251u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f36252v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f36253w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f36242d = z10;
        this.f36243e = sink;
        this.f36244i = random;
        this.f36245o = z11;
        this.f36246p = z12;
        this.f36247q = j10;
        this.f36248r = new Buffer();
        this.f36249s = sink.e();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f36252v = bArr;
        this.f36253w = z10 ? new Buffer.a() : null;
    }

    private final void h(int i10, ByteString byteString) {
        if (!this.f36250t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f36249s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f36242d) {
                    this.f36249s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f36244i;
                    byte[] bArr = this.f36252v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f36249s.write(this.f36252v);
                    if (G > 0) {
                        long size = this.f36249s.size();
                        this.f36249s.a2(byteString);
                        Buffer buffer = this.f36249s;
                        Buffer.a aVar = this.f36253w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.R0(aVar);
                        this.f36253w.n(size);
                        f.f36226a.b(this.f36253w, this.f36252v);
                        this.f36253w.close();
                    }
                } else {
                    this.f36249s.writeByte(G);
                    this.f36249s.a2(byteString);
                }
                this.f36243e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f44308p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f36226a.c(i10);
            }
            Buffer buffer = new Buffer();
            buffer.writeShort(i10);
            if (byteString != null) {
                buffer.a2(byteString);
            }
            byteString2 = buffer.L1();
        }
        try {
            h(8, byteString2);
        } finally {
            this.f36250t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f36251u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void l(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f36250t) {
            this.f36248r.a2(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f36245o && data.G() >= this.f36247q) {
                a aVar = this.f36251u;
                if (aVar == null) {
                    aVar = new a(this.f36246p);
                    this.f36251u = aVar;
                }
                aVar.a(this.f36248r);
                i12 = i10 | 192;
            }
            long size = this.f36248r.size();
            this.f36249s.writeByte(i12);
            if (this.f36242d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f36249s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f36249s.writeByte(i11 | 126);
                this.f36249s.writeShort((int) size);
            } else {
                this.f36249s.writeByte(i11 | 127);
                this.f36249s.c2(size);
            }
            if (this.f36242d) {
                Random random = this.f36244i;
                byte[] bArr = this.f36252v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f36249s.write(this.f36252v);
                if (size > 0) {
                    Buffer buffer = this.f36248r;
                    Buffer.a aVar2 = this.f36253w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.R0(aVar2);
                    this.f36253w.n(0L);
                    f.f36226a.b(this.f36253w, this.f36252v);
                    this.f36253w.close();
                }
            }
            this.f36249s.t0(this.f36248r, size);
            this.f36243e.O();
            return;
        }
        throw new IOException("closed");
    }

    public final void n(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        h(9, payload);
    }

    public final void x(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        h(10, payload);
    }
}
