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
    private final boolean f45783d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSink f45784e;

    /* renamed from: i  reason: collision with root package name */
    private final Random f45785i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f45786o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f45787p;

    /* renamed from: q  reason: collision with root package name */
    private final long f45788q;

    /* renamed from: r  reason: collision with root package name */
    private final Buffer f45789r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f45790s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f45791t;

    /* renamed from: u  reason: collision with root package name */
    private a f45792u;

    /* renamed from: v  reason: collision with root package name */
    private final byte[] f45793v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer.a f45794w;

    public h(boolean z10, BufferedSink sink, Random random, boolean z11, boolean z12, long j10) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f45783d = z10;
        this.f45784e = sink;
        this.f45785i = random;
        this.f45786o = z11;
        this.f45787p = z12;
        this.f45788q = j10;
        this.f45789r = new Buffer();
        this.f45790s = sink.e();
        if (z10) {
            bArr = new byte[4];
        } else {
            bArr = null;
        }
        this.f45793v = bArr;
        this.f45794w = z10 ? new Buffer.a() : null;
    }

    private final void g(int i10, ByteString byteString) {
        if (!this.f45791t) {
            int G = byteString.G();
            if (G <= 125) {
                this.f45790s.writeByte(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                if (this.f45783d) {
                    this.f45790s.writeByte(G | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    Random random = this.f45785i;
                    byte[] bArr = this.f45793v;
                    Intrinsics.checkNotNull(bArr);
                    random.nextBytes(bArr);
                    this.f45790s.write(this.f45793v);
                    if (G > 0) {
                        long size = this.f45790s.size();
                        this.f45790s.Z1(byteString);
                        Buffer buffer = this.f45790s;
                        Buffer.a aVar = this.f45794w;
                        Intrinsics.checkNotNull(aVar);
                        buffer.L0(aVar);
                        this.f45794w.m(size);
                        f.f45767a.b(this.f45794w, this.f45793v);
                        this.f45794w.close();
                    }
                } else {
                    this.f45790s.writeByte(G);
                    this.f45790s.Z1(byteString);
                }
                this.f45784e.flush();
                return;
            }
            throw new IllegalArgumentException("Payload size must be less than or equal to 125");
        }
        throw new IOException("closed");
    }

    public final void a(int i10, ByteString byteString) {
        ByteString byteString2 = ByteString.f43215p;
        if (i10 != 0 || byteString != null) {
            if (i10 != 0) {
                f.f45767a.c(i10);
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
            this.f45791t = true;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a aVar = this.f45792u;
        if (aVar != null) {
            aVar.close();
        }
    }

    public final void k(int i10, ByteString data) {
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        if (!this.f45791t) {
            this.f45789r.Z1(data);
            int i12 = i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (this.f45786o && data.G() >= this.f45788q) {
                a aVar = this.f45792u;
                if (aVar == null) {
                    aVar = new a(this.f45787p);
                    this.f45792u = aVar;
                }
                aVar.a(this.f45789r);
                i12 = i10 | 192;
            }
            long size = this.f45789r.size();
            this.f45790s.writeByte(i12);
            if (this.f45783d) {
                i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i11 = 0;
            }
            if (size <= 125) {
                this.f45790s.writeByte(i11 | ((int) size));
            } else if (size <= 65535) {
                this.f45790s.writeByte(i11 | 126);
                this.f45790s.writeShort((int) size);
            } else {
                this.f45790s.writeByte(i11 | 127);
                this.f45790s.b2(size);
            }
            if (this.f45783d) {
                Random random = this.f45785i;
                byte[] bArr = this.f45793v;
                Intrinsics.checkNotNull(bArr);
                random.nextBytes(bArr);
                this.f45790s.write(this.f45793v);
                if (size > 0) {
                    Buffer buffer = this.f45789r;
                    Buffer.a aVar2 = this.f45794w;
                    Intrinsics.checkNotNull(aVar2);
                    buffer.L0(aVar2);
                    this.f45794w.m(0L);
                    f.f45767a.b(this.f45794w, this.f45793v);
                    this.f45794w.close();
                }
            }
            this.f45790s.w0(this.f45789r, size);
            this.f45784e.R();
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
