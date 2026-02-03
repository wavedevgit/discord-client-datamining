package ku;

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
    private final boolean f36227d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSource f36228e;

    /* renamed from: i  reason: collision with root package name */
    private final a f36229i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f36230o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f36231p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f36232q;

    /* renamed from: r  reason: collision with root package name */
    private int f36233r;

    /* renamed from: s  reason: collision with root package name */
    private long f36234s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f36235t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f36236u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f36237v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer f36238w;

    /* renamed from: x  reason: collision with root package name */
    private final Buffer f36239x;

    /* renamed from: y  reason: collision with root package name */
    private c f36240y;

    /* renamed from: z  reason: collision with root package name */
    private final byte[] f36241z;

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
        this.f36227d = z10;
        this.f36228e = source;
        this.f36229i = frameCallback;
        this.f36230o = z11;
        this.f36231p = z12;
        this.f36238w = new Buffer();
        this.f36239x = new Buffer();
        if (z10) {
            bArr = null;
        } else {
            bArr = new byte[4];
        }
        this.f36241z = bArr;
        this.A = z10 ? null : new Buffer.a();
    }

    private final void B() {
        while (!this.f36232q) {
            l();
            if (this.f36236u) {
                h();
            } else {
                return;
            }
        }
    }

    private final void h() {
        short s10;
        String str;
        long j10 = this.f36234s;
        if (j10 > 0) {
            this.f36228e.a0(this.f36238w, j10);
            if (!this.f36227d) {
                Buffer buffer = this.f36238w;
                Buffer.a aVar = this.A;
                Intrinsics.checkNotNull(aVar);
                buffer.R0(aVar);
                this.A.n(0L);
                f fVar = f.f36226a;
                Buffer.a aVar2 = this.A;
                byte[] bArr = this.f36241z;
                Intrinsics.checkNotNull(bArr);
                fVar.b(aVar2, bArr);
                this.A.close();
            }
        }
        switch (this.f36233r) {
            case 8:
                long size = this.f36238w.size();
                if (size != 1) {
                    if (size != 0) {
                        s10 = this.f36238w.readShort();
                        str = this.f36238w.T1();
                        String a10 = f.f36226a.a(s10);
                        if (a10 != null) {
                            throw new ProtocolException(a10);
                        }
                    } else {
                        s10 = 1005;
                        str = "";
                    }
                    this.f36229i.g(s10, str);
                    this.f36232q = true;
                    return;
                }
                throw new ProtocolException("Malformed close payload length of 1.");
            case 9:
                this.f36229i.d(this.f36238w.L1());
                return;
            case 10:
                this.f36229i.e(this.f36238w.L1());
                return;
            default:
                throw new ProtocolException("Unknown control opcode: " + xt.e.R(this.f36233r));
        }
    }

    private final void l() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        if (!this.f36232q) {
            long h10 = this.f36228e.timeout().h();
            this.f36228e.timeout().b();
            try {
                int d10 = xt.e.d(this.f36228e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f36228e.timeout().g(h10, TimeUnit.NANOSECONDS);
                int i10 = d10 & 15;
                this.f36233r = i10;
                boolean z14 = false;
                if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f36235t = z10;
                if ((d10 & 8) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f36236u = z11;
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
                        if (this.f36230o) {
                            z13 = true;
                        } else {
                            throw new ProtocolException("Unexpected rsv1 flag");
                        }
                    } else {
                        z13 = false;
                    }
                    this.f36237v = z13;
                }
                if ((d10 & 32) == 0) {
                    if ((d10 & 16) == 0) {
                        int d11 = xt.e.d(this.f36228e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                        if ((d11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                            z14 = true;
                        }
                        if (z14 == this.f36227d) {
                            if (this.f36227d) {
                                str = "Server-sent frames must not be masked.";
                            } else {
                                str = "Client-sent frames must be masked.";
                            }
                            throw new ProtocolException(str);
                        }
                        long j10 = d11 & 127;
                        this.f36234s = j10;
                        if (j10 == 126) {
                            this.f36234s = xt.e.e(this.f36228e.readShort(), 65535);
                        } else if (j10 == 127) {
                            long readLong = this.f36228e.readLong();
                            this.f36234s = readLong;
                            if (readLong < 0) {
                                throw new ProtocolException("Frame length 0x" + xt.e.S(this.f36234s) + " > 0x7FFFFFFFFFFFFFFF");
                            }
                        }
                        if (this.f36236u && this.f36234s > 125) {
                            throw new ProtocolException("Control frame must be less than 125B.");
                        }
                        if (z14) {
                            BufferedSource bufferedSource = this.f36228e;
                            byte[] bArr = this.f36241z;
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
                this.f36228e.timeout().g(h10, TimeUnit.NANOSECONDS);
                throw th2;
            }
        }
        throw new IOException("closed");
    }

    private final void n() {
        while (!this.f36232q) {
            long j10 = this.f36234s;
            if (j10 > 0) {
                this.f36228e.a0(this.f36239x, j10);
                if (!this.f36227d) {
                    Buffer buffer = this.f36239x;
                    Buffer.a aVar = this.A;
                    Intrinsics.checkNotNull(aVar);
                    buffer.R0(aVar);
                    this.A.n(this.f36239x.size() - this.f36234s);
                    f fVar = f.f36226a;
                    Buffer.a aVar2 = this.A;
                    byte[] bArr = this.f36241z;
                    Intrinsics.checkNotNull(bArr);
                    fVar.b(aVar2, bArr);
                    this.A.close();
                }
            }
            if (!this.f36235t) {
                B();
                if (this.f36233r != 0) {
                    throw new ProtocolException("Expected continuation opcode. Got: " + xt.e.R(this.f36233r));
                }
            } else {
                return;
            }
        }
        throw new IOException("closed");
    }

    private final void x() {
        int i10 = this.f36233r;
        if (i10 != 1 && i10 != 2) {
            throw new ProtocolException("Unknown opcode: " + xt.e.R(i10));
        }
        n();
        if (this.f36237v) {
            c cVar = this.f36240y;
            if (cVar == null) {
                cVar = new c(this.f36231p);
                this.f36240y = cVar;
            }
            cVar.a(this.f36239x);
        }
        if (i10 == 1) {
            this.f36229i.c(this.f36239x.T1());
        } else {
            this.f36229i.b(this.f36239x.L1());
        }
    }

    public final void a() {
        l();
        if (this.f36236u) {
            h();
        } else {
            x();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c cVar = this.f36240y;
        if (cVar != null) {
            cVar.close();
        }
    }
}
