package nu;

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
    private final boolean f42047d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f42048e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f42049i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f42050o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f42051p;

    /* renamed from: q  reason: collision with root package name */
    private final long f42052q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f42053r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f42054s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f42055t;

    /* renamed from: u  reason: collision with root package name */
    private a f42056u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f42057v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f42058w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f42047d = z10;
        this.f42048e = sink;
        this.f42049i = random;
        this.f42050o = z11;
        this.f42051p = z12;
        this.f42052q = j10;
        this.f42053r = new Buffer();
        this.f42054s = sink.f();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f42057v = bArr;
        this.f42058w = z10 ? new Buffer.a() : null;
    }

    private final void h(int i10, ByteString byteString) {
        if (!this.f42055t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f42054s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f42047d) {
                    this.f42054s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f42049i;
                    byte[] bArr = this.f42057v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f42054s.write(this.f42057v);
                    if (G > 0) {
                        long size = this.f42054s.size();
                        this.f42054s.a2(byteString);
                        Buffer buffer = this.f42054s;
                        Buffer.a aVar = this.f42058w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.S0(aVar);
                        this.f42058w.m(size);
                        f.f42031a.b(this.f42058w, this.f42057v);
                        this.f42058w.close();
                    }
                } else {
                    this.f42054s.writeByte(G);
                    this.f42054s.a2(byteString);
                }
                this.f42048e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f44061p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f42031a.c(i10);
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
            this.f42055t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f42056u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void k(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f42055t) {
            this.f42053r.a2(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f42050o && data.G() >= this.f42052q) {
                a aVar = this.f42056u;
                if (aVar == null) {
                    aVar = new a(this.f42051p);
                    this.f42056u = aVar;
                }
                aVar.a(this.f42053r);
                i12 = i10 | 192;
            }
            long size = this.f42053r.size();
            this.f42054s.writeByte(i12);
            if (this.f42047d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f42054s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f42054s.writeByte(i11 | 126);
                this.f42054s.writeShort((int) size);
            } else {
                this.f42054s.writeByte(i11 | 127);
                this.f42054s.c2(size);
            }
            if (this.f42047d) {
                Random random = this.f42049i;
                byte[] bArr = this.f42057v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f42054s.write(this.f42057v);
                if (size > 0) {
                    Buffer buffer = this.f42053r;
                    Buffer.a aVar2 = this.f42058w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.S0(aVar2);
                    this.f42058w.m(0L);
                    f.f42031a.b(this.f42058w, this.f42057v);
                    this.f42058w.close();
                }
            }
            this.f42054s.u0(this.f42053r, size);
            this.f42048e.O();
            return;
        }
        throw new IOException("closed");
    }

    public final void m(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        h(9, payload);
    }

    public final void o(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        h(10, payload);
    }
}
