package qu;

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
    private final boolean f47282d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSource f47283e;

    /* renamed from: i  reason: collision with root package name */
    private final a f47284i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f47285o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f47286p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f47287q;

    /* renamed from: r  reason: collision with root package name */
    private int f47288r;

    /* renamed from: s  reason: collision with root package name */
    private long f47289s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f47290t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f47291u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f47292v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer f47293w;

    /* renamed from: x  reason: collision with root package name */
    private final Buffer f47294x;

    /* renamed from: y  reason: collision with root package name */
    private c f47295y;

    /* renamed from: z  reason: collision with root package name */
    private final byte[] f47296z;

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
        this.f47282d = z10;
        this.f47283e = source;
        this.f47284i = frameCallback;
        this.f47285o = z11;
        this.f47286p = z12;
        this.f47293w = new Buffer();
        this.f47294x = new Buffer();
        if (z10) {
            bArr = null;
        } else {
            bArr = new byte[4];
        }
        this.f47296z = bArr;
        this.A = z10 ? null : new Buffer.a();
    }

    private final void g() {
        short s10;
        String str;
        long j10 = this.f47289s;
        if (j10 > 0) {
            this.f47283e.e0(this.f47293w, j10);
            if (!this.f47282d) {
                Buffer buffer = this.f47293w;
                Buffer.a aVar = this.A;
                Intrinsics.checkNotNull(aVar);
                buffer.O0(aVar);
                this.A.m(0L);
                f fVar = f.f47281a;
                Buffer.a aVar2 = this.A;
                byte[] bArr = this.f47296z;
                Intrinsics.checkNotNull(bArr);
                fVar.b(aVar2, bArr);
                this.A.close();
            }
        }
        switch (this.f47288r) {
            case 8:
                long size = this.f47293w.size();
                if (size != 1) {
                    if (size != 0) {
                        s10 = this.f47293w.readShort();
                        str = this.f47293w.R1();
                        String a10 = f.f47281a.a(s10);
                        if (a10 != null) {
                            throw new ProtocolException(a10);
                        }
                    } else {
                        s10 = 1005;
                        str = "";
                    }
                    this.f47284i.g(s10, str);
                    this.f47287q = true;
                    return;
                }
                throw new ProtocolException("Malformed close payload length of 1.");
            case 9:
                this.f47284i.d(this.f47293w.I1());
                return;
            case 10:
                this.f47284i.e(this.f47293w.I1());
                return;
            default:
                throw new ProtocolException("Unknown control opcode: " + du.e.R(this.f47288r));
        }
    }

    private final void k() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        if (!this.f47287q) {
            long h10 = this.f47283e.timeout().h();
            this.f47283e.timeout().b();
            try {
                int d10 = du.e.d(this.f47283e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f47283e.timeout().g(h10, TimeUnit.NANOSECONDS);
                int i10 = d10 & 15;
                this.f47288r = i10;
                boolean z14 = false;
                if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f47290t = z10;
                if ((d10 & 8) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f47291u = z11;
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
                        if (this.f47285o) {
                            z13 = true;
                        } else {
                            throw new ProtocolException("Unexpected rsv1 flag");
                        }
                    } else {
                        z13 = false;
                    }
                    this.f47292v = z13;
                }
                if ((d10 & 32) == 0) {
                    if ((d10 & 16) == 0) {
                        int d11 = du.e.d(this.f47283e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                        if ((d11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                            z14 = true;
                        }
                        if (z14 == this.f47282d) {
                            if (this.f47282d) {
                                str = "Server-sent frames must not be masked.";
                            } else {
                                str = "Client-sent frames must be masked.";
                            }
                            throw new ProtocolException(str);
                        }
                        long j10 = d11 & 127;
                        this.f47289s = j10;
                        if (j10 == 126) {
                            this.f47289s = du.e.e(this.f47283e.readShort(), 65535);
                        } else if (j10 == 127) {
                            long readLong = this.f47283e.readLong();
                            this.f47289s = readLong;
                            if (readLong < 0) {
                                throw new ProtocolException("Frame length 0x" + du.e.S(this.f47289s) + " > 0x7FFFFFFFFFFFFFFF");
                            }
                        }
                        if (this.f47291u && this.f47289s > 125) {
                            throw new ProtocolException("Control frame must be less than 125B.");
                        }
                        if (z14) {
                            BufferedSource bufferedSource = this.f47283e;
                            byte[] bArr = this.f47296z;
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
                this.f47283e.timeout().g(h10, TimeUnit.NANOSECONDS);
                throw th2;
            }
        }
        throw new IOException("closed");
    }

    private final void m() {
        while (!this.f47287q) {
            long j10 = this.f47289s;
            if (j10 > 0) {
                this.f47283e.e0(this.f47294x, j10);
                if (!this.f47282d) {
                    Buffer buffer = this.f47294x;
                    Buffer.a aVar = this.A;
                    Intrinsics.checkNotNull(aVar);
                    buffer.O0(aVar);
                    this.A.m(this.f47294x.size() - this.f47289s);
                    f fVar = f.f47281a;
                    Buffer.a aVar2 = this.A;
                    byte[] bArr = this.f47296z;
                    Intrinsics.checkNotNull(bArr);
                    fVar.b(aVar2, bArr);
                    this.A.close();
                }
            }
            if (!this.f47290t) {
                p();
                if (this.f47288r != 0) {
                    throw new ProtocolException("Expected continuation opcode. Got: " + du.e.R(this.f47288r));
                }
            } else {
                return;
            }
        }
        throw new IOException("closed");
    }

    private final void n() {
        int i10 = this.f47288r;
        if (i10 != 1 && i10 != 2) {
            throw new ProtocolException("Unknown opcode: " + du.e.R(i10));
        }
        m();
        if (this.f47292v) {
            c cVar = this.f47295y;
            if (cVar == null) {
                cVar = new c(this.f47286p);
                this.f47295y = cVar;
            }
            cVar.a(this.f47294x);
        }
        if (i10 == 1) {
            this.f47284i.c(this.f47294x.R1());
        } else {
            this.f47284i.b(this.f47294x.I1());
        }
    }

    private final void p() {
        while (!this.f47287q) {
            k();
            if (this.f47291u) {
                g();
            } else {
                return;
            }
        }
    }

    public final void a() {
        k();
        if (this.f47291u) {
            g();
        } else {
            n();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c cVar = this.f47295y;
        if (cVar != null) {
            cVar.close();
        }
    }
}
