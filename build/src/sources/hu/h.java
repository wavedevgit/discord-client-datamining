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
    private final boolean f28312d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f28313e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f28314i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f28315o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f28316p;

    /* renamed from: q  reason: collision with root package name */
    private final long f28317q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f28318r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f28319s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f28320t;

    /* renamed from: u  reason: collision with root package name */
    private a f28321u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f28322v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f28323w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f28312d = z10;
        this.f28313e = sink;
        this.f28314i = random;
        this.f28315o = z11;
        this.f28316p = z12;
        this.f28317q = j10;
        this.f28318r = new Buffer();
        this.f28319s = sink.e();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f28322v = bArr;
        this.f28323w = z10 ? new Buffer.a() : null;
    }

    private final void h(int i10, ByteString byteString) {
        if (!this.f28320t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f28319s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f28312d) {
                    this.f28319s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f28314i;
                    byte[] bArr = this.f28322v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f28319s.write(this.f28322v);
                    if (G > 0) {
                        long size = this.f28319s.size();
                        this.f28319s.a2(byteString);
                        Buffer buffer = this.f28319s;
                        Buffer.a aVar = this.f28323w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.R0(aVar);
                        this.f28323w.n(size);
                        f.f28296a.b(this.f28323w, this.f28322v);
                        this.f28323w.close();
                    }
                } else {
                    this.f28319s.writeByte(G);
                    this.f28319s.a2(byteString);
                }
                this.f28313e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f44380p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f28296a.c(i10);
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
            this.f28320t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f28321u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void l(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f28320t) {
            this.f28318r.a2(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f28315o && data.G() >= this.f28317q) {
                a aVar = this.f28321u;
                if (aVar == null) {
                    aVar = new a(this.f28316p);
                    this.f28321u = aVar;
                }
                aVar.a(this.f28318r);
                i12 = i10 | 192;
            }
            long size = this.f28318r.size();
            this.f28319s.writeByte(i12);
            if (this.f28312d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f28319s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f28319s.writeByte(i11 | 126);
                this.f28319s.writeShort((int) size);
            } else {
                this.f28319s.writeByte(i11 | 127);
                this.f28319s.c2(size);
            }
            if (this.f28312d) {
                Random random = this.f28314i;
                byte[] bArr = this.f28322v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f28319s.write(this.f28322v);
                if (size > 0) {
                    Buffer buffer = this.f28318r;
                    Buffer.a aVar2 = this.f28323w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.R0(aVar2);
                    this.f28323w.n(0L);
                    f.f28296a.b(this.f28323w, this.f28322v);
                    this.f28323w.close();
                }
            }
            this.f28319s.t0(this.f28318r, size);
            this.f28313e.O();
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
