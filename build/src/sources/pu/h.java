package pu;

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
    private final boolean f45735d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f45736e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f45737i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f45738o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f45739p;

    /* renamed from: q  reason: collision with root package name */
    private final long f45740q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f45741r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f45742s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f45743t;

    /* renamed from: u  reason: collision with root package name */
    private a f45744u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f45745v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f45746w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f45735d = z10;
        this.f45736e = sink;
        this.f45737i = random;
        this.f45738o = z11;
        this.f45739p = z12;
        this.f45740q = j10;
        this.f45741r = new Buffer();
        this.f45742s = sink.e();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f45745v = bArr;
        this.f45746w = z10 ? new Buffer.a() : null;
    }

    private final void g(int i10, ByteString byteString) {
        if (!this.f45743t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f45742s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f45735d) {
                    this.f45742s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f45737i;
                    byte[] bArr = this.f45745v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f45742s.write(this.f45745v);
                    if (G > 0) {
                        long size = this.f45742s.size();
                        this.f45742s.Z1(byteString);
                        Buffer buffer = this.f45742s;
                        Buffer.a aVar = this.f45746w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.L0(aVar);
                        this.f45746w.m(size);
                        f.f45719a.b(this.f45746w, this.f45745v);
                        this.f45746w.close();
                    }
                } else {
                    this.f45742s.writeByte(G);
                    this.f45742s.Z1(byteString);
                }
                this.f45736e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f43167p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f45719a.c(i10);
            }
            Buffer buffer = new Buffer();
            buffer.writeShort(i10);
            if (byteString != null) {
                buffer.Z1(byteString);
            }
            byteString2 = buffer.K1();
        }
        try {
            g(8, byteString2);
        } finally {
            this.f45743t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f45744u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void k(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f45743t) {
            this.f45741r.Z1(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f45738o && data.G() >= this.f45740q) {
                a aVar = this.f45744u;
                if (aVar == null) {
                    aVar = new a(this.f45739p);
                    this.f45744u = aVar;
                }
                aVar.a(this.f45741r);
                i12 = i10 | 192;
            }
            long size = this.f45741r.size();
            this.f45742s.writeByte(i12);
            if (this.f45735d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f45742s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f45742s.writeByte(i11 | 126);
                this.f45742s.writeShort((int) size);
            } else {
                this.f45742s.writeByte(i11 | 127);
                this.f45742s.b2(size);
            }
            if (this.f45735d) {
                Random random = this.f45737i;
                byte[] bArr = this.f45745v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f45742s.write(this.f45745v);
                if (size > 0) {
                    Buffer buffer = this.f45741r;
                    Buffer.a aVar2 = this.f45746w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.L0(aVar2);
                    this.f45746w.m(0L);
                    f.f45719a.b(this.f45746w, this.f45745v);
                    this.f45746w.close();
                }
            }
            this.f45742s.w0(this.f45741r, size);
            this.f45736e.R();
            return;
        }
        throw new IOException("closed");
    }

    public final void m(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        g(9, payload);
    }

    public final void n(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        g(10, payload);
    }
}
