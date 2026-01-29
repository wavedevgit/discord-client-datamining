package hu;

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
    private final boolean f28296d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f28297e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f28298i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f28299o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f28300p;

    /* renamed from: q  reason: collision with root package name */
    private final long f28301q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f28302r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f28303s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f28304t;

    /* renamed from: u  reason: collision with root package name */
    private a f28305u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f28306v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f28307w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f28296d = z10;
        this.f28297e = sink;
        this.f28298i = random;
        this.f28299o = z11;
        this.f28300p = z12;
        this.f28301q = j10;
        this.f28302r = new Buffer();
        this.f28303s = sink.e();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f28306v = bArr;
        this.f28307w = z10 ? new Buffer.a() : null;
    }

    private final void h(int i10, ByteString byteString) {
        if (!this.f28304t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f28303s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f28296d) {
                    this.f28303s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f28298i;
                    byte[] bArr = this.f28306v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f28303s.write(this.f28306v);
                    if (G > 0) {
                        long size = this.f28303s.size();
                        this.f28303s.a2(byteString);
                        Buffer buffer = this.f28303s;
                        Buffer.a aVar = this.f28307w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.R0(aVar);
                        this.f28307w.n(size);
                        f.f28280a.b(this.f28307w, this.f28306v);
                        this.f28307w.close();
                    }
                } else {
                    this.f28303s.writeByte(G);
                    this.f28303s.a2(byteString);
                }
                this.f28297e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f44364p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f28280a.c(i10);
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
            this.f28304t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f28305u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void l(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f28304t) {
            this.f28302r.a2(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f28299o && data.G() >= this.f28301q) {
                a aVar = this.f28305u;
                if (aVar == null) {
                    aVar = new a(this.f28300p);
                    this.f28305u = aVar;
                }
                aVar.a(this.f28302r);
                i12 = i10 | 192;
            }
            long size = this.f28302r.size();
            this.f28303s.writeByte(i12);
            if (this.f28296d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f28303s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f28303s.writeByte(i11 | 126);
                this.f28303s.writeShort((int) size);
            } else {
                this.f28303s.writeByte(i11 | 127);
                this.f28303s.c2(size);
            }
            if (this.f28296d) {
                Random random = this.f28298i;
                byte[] bArr = this.f28306v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f28303s.write(this.f28306v);
                if (size > 0) {
                    Buffer buffer = this.f28302r;
                    Buffer.a aVar2 = this.f28307w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.R0(aVar2);
                    this.f28307w.n(0L);
                    f.f28280a.b(this.f28307w, this.f28306v);
                    this.f28307w.close();
                }
            }
            this.f28303s.t0(this.f28302r, size);
            this.f28297e.O();
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
