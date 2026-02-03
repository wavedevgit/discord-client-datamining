package iu;

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
    private final boolean f31241d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f31242e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f31243i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f31244o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f31245p;

    /* renamed from: q  reason: collision with root package name */
    private final long f31246q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f31247r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f31248s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f31249t;

    /* renamed from: u  reason: collision with root package name */
    private a f31250u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f31251v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f31252w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f31241d = z10;
        this.f31242e = sink;
        this.f31243i = random;
        this.f31244o = z11;
        this.f31245p = z12;
        this.f31246q = j10;
        this.f31247r = new Buffer();
        this.f31248s = sink.e();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f31251v = bArr;
        this.f31252w = z10 ? new Buffer.a() : null;
    }

    private final void h(int i10, ByteString byteString) {
        if (!this.f31249t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f31248s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f31241d) {
                    this.f31248s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f31243i;
                    byte[] bArr = this.f31251v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f31248s.write(this.f31251v);
                    if (G > 0) {
                        long size = this.f31248s.size();
                        this.f31248s.a2(byteString);
                        Buffer buffer = this.f31248s;
                        Buffer.a aVar = this.f31252w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.O0(aVar);
                        this.f31252w.n(size);
                        f.f31225a.b(this.f31252w, this.f31251v);
                        this.f31252w.close();
                    }
                } else {
                    this.f31248s.writeByte(G);
                    this.f31248s.a2(byteString);
                }
                this.f31242e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f44508p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f31225a.c(i10);
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
            this.f31249t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f31250u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void l(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f31249t) {
            this.f31247r.a2(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f31244o && data.G() >= this.f31246q) {
                a aVar = this.f31250u;
                if (aVar == null) {
                    aVar = new a(this.f31245p);
                    this.f31250u = aVar;
                }
                aVar.a(this.f31247r);
                i12 = i10 | 192;
            }
            long size = this.f31247r.size();
            this.f31248s.writeByte(i12);
            if (this.f31241d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f31248s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f31248s.writeByte(i11 | 126);
                this.f31248s.writeShort((int) size);
            } else {
                this.f31248s.writeByte(i11 | 127);
                this.f31248s.c2(size);
            }
            if (this.f31241d) {
                Random random = this.f31243i;
                byte[] bArr = this.f31251v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f31248s.write(this.f31251v);
                if (size > 0) {
                    Buffer buffer = this.f31247r;
                    Buffer.a aVar2 = this.f31252w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.O0(aVar2);
                    this.f31252w.n(0L);
                    f.f31225a.b(this.f31252w, this.f31251v);
                    this.f31252w.close();
                }
            }
            this.f31248s.v0(this.f31247r, size);
            this.f31242e.O();
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
