package nu;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.Closeable;
import java.io.IOException;
import java.net.ProtocolException;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Closeable {
    private final Buffer.a A;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f42032d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSource f42033e;

    /* renamed from: i  reason: collision with root package name */
    private final a f42034i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f42035o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f42036p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f42037q;

    /* renamed from: r  reason: collision with root package name */
    private int f42038r;

    /* renamed from: s  reason: collision with root package name */
    private long f42039s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f42040t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f42041u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f42042v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer f42043w;

    /* renamed from: x  reason: collision with root package name */
    private final Buffer f42044x;

    /* renamed from: y  reason: collision with root package name */
    private c f42045y;

    /* renamed from: z  reason: collision with root package name */
    private final byte[] f42046z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a {
        void b(ByteString byteString);

        void c(String str);

        void d(ByteString byteString);

        void e(ByteString byteString);

        void g(int i10, String str);
    }

    public g(boolean z10, BufferedSource source, a frameCallback, boolean z11, boolean z12) {
        byte[] bArr;
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(frameCallback, "frameCallback");
        this.f42032d = z10;
        this.f42033e = source;
        this.f42034i = frameCallback;
        this.f42035o = z11;
        this.f42036p = z12;
        this.f42043w = new Buffer();
        this.f42044x = new Buffer();
        if (z10) {
            bArr = null;
        } else {
            bArr = new byte[4];
        }
        this.f42046z = bArr;
        this.A = z10 ? null : new Buffer.a();
    }

    private final void h() {
        short s10;
        String str;
        long j10 = this.f42039s;
        if (j10 > 0) {
            this.f42033e.b0(this.f42043w, j10);
            if (!this.f42032d) {
                Buffer buffer = this.f42043w;
                Buffer.a aVar = this.A;
                Intrinsics.checkNotNull(aVar);
                buffer.S0(aVar);
                this.A.m(0L);
                f fVar = f.f42031a;
                Buffer.a aVar2 = this.A;
                byte[] bArr = this.f42046z;
                Intrinsics.checkNotNull(bArr);
                fVar.b(aVar2, bArr);
                this.A.close();
            }
        }
        switch (this.f42038r) {
            case 8:
                long size = this.f42043w.size();
                if (size != 1) {
                    if (size != 0) {
                        s10 = this.f42043w.readShort();
                        str = this.f42043w.T1();
                        String a10 = f.f42031a.a(s10);
                        if (a10 != null) {
                            throw new ProtocolException(a10);
                        }
                    } else {
                        s10 = 1005;
                        str = "";
                    }
                    this.f42034i.g(s10, str);
                    this.f42037q = true;
                    return;
                }
                throw new ProtocolException("Malformed close payload length of 1.");
            case 9:
                this.f42034i.d(this.f42043w.L1());
                return;
            case 10:
                this.f42034i.e(this.f42043w.L1());
                return;
            default:
                throw new ProtocolException("Unknown control opcode: " + au.e.R(this.f42038r));
        }
    }

    private final void k() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        if (!this.f42037q) {
            long h10 = this.f42033e.timeout().h();
            this.f42033e.timeout().b();
            try {
                int d10 = au.e.d(this.f42033e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f42033e.timeout().g(h10, TimeUnit.NANOSECONDS);
                int i10 = d10 & 15;
                this.f42038r = i10;
                boolean z14 = false;
                if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f42040t = z10;
                if ((d10 & 8) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f42041u = z11;
                if (z11 && !z10) {
                    throw new ProtocolException("Control frames must be final.");
                }
                if ((d10 & 64) != 0) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                if (i10 != 1 && i10 != 2) {
                    if (z12) {
                        throw new ProtocolException("Unexpected rsv1 flag");
                    }
                } else {
                    if (z12) {
                        if (this.f42035o) {
                            z13 = true;
                        } else {
                            throw new ProtocolException("Unexpected rsv1 flag");
                        }
                    } else {
                        z13 = false;
                    }
                    this.f42042v = z13;
                }
                if ((d10 & 32) == 0) {
                    if ((d10 & 16) == 0) {
                        int d11 = au.e.d(this.f42033e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                        if ((d11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                            z14 = true;
                        }
                        if (z14 == this.f42032d) {
                            if (this.f42032d) {
                                str = "Server-sent frames must not be masked.";
                            } else {
                                str = "Client-sent frames must be masked.";
                            }
                            throw new ProtocolException(str);
                        }
                        long j10 = d11 & 127;
                        this.f42039s = j10;
                        if (j10 == 126) {
                            this.f42039s = au.e.e(this.f42033e.readShort(), 65535);
                        } else if (j10 == 127) {
                            long readLong = this.f42033e.readLong();
                            this.f42039s = readLong;
                            if (readLong < 0) {
                                throw new ProtocolException("Frame length 0x" + au.e.S(this.f42039s) + " > 0x7FFFFFFFFFFFFFFF");
                            }
                        }
                        if (this.f42041u && this.f42039s > 125) {
                            throw new ProtocolException("Control frame must be less than 125B.");
                        }
                        if (z14) {
                            BufferedSource bufferedSource = this.f42033e;
                            byte[] bArr = this.f42046z;
                            Intrinsics.checkNotNull(bArr);
                            bufferedSource.readFully(bArr);
                            return;
                        }
                        return;
                    }
                    throw new ProtocolException("Unexpected rsv3 flag");
                }
                throw new ProtocolException("Unexpected rsv2 flag");
            } catch (Throwable th2) {
                this.f42033e.timeout().g(h10, TimeUnit.NANOSECONDS);
                throw th2;
            }
        }
        throw new IOException("closed");
    }

    private final void m() {
        while (!this.f42037q) {
            long j10 = this.f42039s;
            if (j10 > 0) {
                this.f42033e.b0(this.f42044x, j10);
                if (!this.f42032d) {
                    Buffer buffer = this.f42044x;
                    Buffer.a aVar = this.A;
                    Intrinsics.checkNotNull(aVar);
                    buffer.S0(aVar);
                    this.A.m(this.f42044x.size() - this.f42039s);
                    f fVar = f.f42031a;
                    Buffer.a aVar2 = this.A;
                    byte[] bArr = this.f42046z;
                    Intrinsics.checkNotNull(bArr);
                    fVar.b(aVar2, bArr);
                    this.A.close();
                }
            }
            if (!this.f42040t) {
                y();
                if (this.f42038r != 0) {
                    throw new ProtocolException("Expected continuation opcode. Got: " + au.e.R(this.f42038r));
                }
            } else {
                return;
            }
        }
        throw new IOException("closed");
    }

    private final void o() {
        int i10 = this.f42038r;
        if (i10 != 1 && i10 != 2) {
            throw new ProtocolException("Unknown opcode: " + au.e.R(i10));
        }
        m();
        if (this.f42042v) {
            c cVar = this.f42045y;
            if (cVar == null) {
                cVar = new c(this.f42036p);
                this.f42045y = cVar;
            }
            cVar.a(this.f42044x);
        }
        if (i10 == 1) {
            this.f42034i.c(this.f42044x.T1());
        } else {
            this.f42034i.b(this.f42044x.L1());
        }
    }

    private final void y() {
        while (!this.f42037q) {
            k();
            if (this.f42041u) {
                h();
            } else {
                return;
            }
        }
    }

    public final void a() {
        k();
        if (this.f42041u) {
            h();
        } else {
            o();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c cVar = this.f42045y;
        if (cVar != null) {
            cVar.close();
        }
    }
}
