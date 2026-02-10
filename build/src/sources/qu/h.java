package qu;

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
    private final boolean f47297d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f47298e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f47299i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f47300o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f47301p;

    /* renamed from: q  reason: collision with root package name */
    private final long f47302q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f47303r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f47304s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f47305t;

    /* renamed from: u  reason: collision with root package name */
    private a f47306u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f47307v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f47308w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f47297d = z10;
        this.f47298e = sink;
        this.f47299i = random;
        this.f47300o = z11;
        this.f47301p = z12;
        this.f47302q = j10;
        this.f47303r = new Buffer();
        this.f47304s = sink.e();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f47307v = bArr;
        this.f47308w = z10 ? new Buffer.a() : null;
    }

    private final void g(int i10, ByteString byteString) {
        if (!this.f47305t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f47304s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f47297d) {
                    this.f47304s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f47299i;
                    byte[] bArr = this.f47307v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f47304s.write(this.f47307v);
                    if (G > 0) {
                        long size = this.f47304s.size();
                        this.f47304s.Y1(byteString);
                        Buffer buffer = this.f47304s;
                        Buffer.a aVar = this.f47308w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.O0(aVar);
                        this.f47308w.m(size);
                        f.f47281a.b(this.f47308w, this.f47307v);
                        this.f47308w.close();
                    }
                } else {
                    this.f47304s.writeByte(G);
                    this.f47304s.Y1(byteString);
                }
                this.f47298e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f42342p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f47281a.c(i10);
            }
            Buffer buffer = new Buffer();
            buffer.writeShort(i10);
            if (byteString != null) {
                buffer.Y1(byteString);
            }
            byteString2 = buffer.I1();
        }
        try {
            g(8, byteString2);
        } finally {
            this.f47305t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f47306u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void k(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f47305t) {
            this.f47303r.Y1(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f47300o && data.G() >= this.f47302q) {
                a aVar = this.f47306u;
                if (aVar == null) {
                    aVar = new a(this.f47301p);
                    this.f47306u = aVar;
                }
                aVar.a(this.f47303r);
                i12 = i10 | 192;
            }
            long size = this.f47303r.size();
            this.f47304s.writeByte(i12);
            if (this.f47297d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f47304s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f47304s.writeByte(i11 | 126);
                this.f47304s.writeShort((int) size);
            } else {
                this.f47304s.writeByte(i11 | 127);
                this.f47304s.a2(size);
            }
            if (this.f47297d) {
                Random random = this.f47299i;
                byte[] bArr = this.f47307v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f47304s.write(this.f47307v);
                if (size > 0) {
                    Buffer buffer = this.f47303r;
                    Buffer.a aVar2 = this.f47308w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.O0(aVar2);
                    this.f47308w.m(0L);
                    f.f47281a.b(this.f47308w, this.f47307v);
                    this.f47308w.close();
                }
            }
            this.f47304s.u0(this.f47303r, size);
            this.f47298e.S();
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
