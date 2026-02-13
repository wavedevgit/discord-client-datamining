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
    private final boolean f57769d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f57770e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f57771i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f57772o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f57773p;

    /* renamed from: q  reason: collision with root package name */
    private final long f57774q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f57775r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f57776s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f57777t;

    /* renamed from: u  reason: collision with root package name */
    private a f57778u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f57779v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f57780w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f57769d = z10;
        this.f57770e = sink;
        this.f57771i = random;
        this.f57772o = z11;
        this.f57773p = z12;
        this.f57774q = j10;
        this.f57775r = new Buffer();
        this.f57776s = sink.f();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f57779v = bArr;
        this.f57780w = z10 ? new Buffer.a() : null;
    }

    private final void h(int i10, ByteString byteString) {
        if (!this.f57777t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f57776s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f57769d) {
                    this.f57776s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f57771i;
                    byte[] bArr = this.f57779v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f57776s.write(this.f57779v);
                    if (G > 0) {
                        long size = this.f57776s.size();
                        this.f57776s.e2(byteString);
                        Buffer buffer = this.f57776s;
                        Buffer.a aVar = this.f57780w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.F0(aVar);
                        this.f57780w.m(size);
                        f.f57753a.b(this.f57780w, this.f57779v);
                        this.f57780w.close();
                    }
                } else {
                    this.f57776s.writeByte(G);
                    this.f57776s.e2(byteString);
                }
                this.f57770e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f41161p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f57753a.c(i10);
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
            this.f57777t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f57778u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void i(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f57777t) {
            this.f57775r.e2(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f57772o && data.G() >= this.f57774q) {
                a aVar = this.f57778u;
                if (aVar == null) {
                    aVar = new a(this.f57773p);
                    this.f57778u = aVar;
                }
                aVar.a(this.f57775r);
                i12 = i10 | 192;
            }
            long size = this.f57775r.size();
            this.f57776s.writeByte(i12);
            if (this.f57769d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f57776s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f57776s.writeByte(i11 | 126);
                this.f57776s.writeShort((int) size);
            } else {
                this.f57776s.writeByte(i11 | 127);
                this.f57776s.B1(size);
            }
            if (this.f57769d) {
                Random random = this.f57771i;
                byte[] bArr = this.f57779v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f57776s.write(this.f57779v);
                if (size > 0) {
                    Buffer buffer = this.f57775r;
                    Buffer.a aVar2 = this.f57780w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.F0(aVar2);
                    this.f57780w.m(0L);
                    f.f57753a.b(this.f57780w, this.f57779v);
                    this.f57780w.close();
                }
            }
            this.f57776s.u0(this.f57775r, size);
            this.f57770e.S();
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
