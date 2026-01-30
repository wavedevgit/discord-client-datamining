package hu;

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
    private final boolean f28297d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSource f28298e;

    /* renamed from: i  reason: collision with root package name */
    private final a f28299i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f28300o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f28301p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f28302q;

    /* renamed from: r  reason: collision with root package name */
    private int f28303r;

    /* renamed from: s  reason: collision with root package name */
    private long f28304s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f28305t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f28306u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f28307v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer f28308w;

    /* renamed from: x  reason: collision with root package name */
    private final Buffer f28309x;

    /* renamed from: y  reason: collision with root package name */
    private c f28310y;

    /* renamed from: z  reason: collision with root package name */
    private final byte[] f28311z;

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
        this.f28297d = z10;
        this.f28298e = source;
        this.f28299i = frameCallback;
        this.f28300o = z11;
        this.f28301p = z12;
        this.f28308w = new Buffer();
        this.f28309x = new Buffer();
        if (z10) {
            bArr = null;
        } else {
            bArr = new byte[4];
        }
        this.f28311z = bArr;
        this.A = z10 ? null : new Buffer.a();
    }

    private final void B() {
        while (!this.f28302q) {
            l();
            if (this.f28306u) {
                h();
            } else {
                return;
            }
        }
    }

    private final void h() {
        short s10;
        String str;
        long j10 = this.f28304s;
        if (j10 > 0) {
            this.f28298e.a0(this.f28308w, j10);
            if (!this.f28297d) {
                Buffer buffer = this.f28308w;
                Buffer.a aVar = this.A;
                Intrinsics.checkNotNull(aVar);
                buffer.R0(aVar);
                this.A.n(0L);
                f fVar = f.f28296a;
                Buffer.a aVar2 = this.A;
                byte[] bArr = this.f28311z;
                Intrinsics.checkNotNull(bArr);
                fVar.b(aVar2, bArr);
                this.A.close();
            }
        }
        switch (this.f28303r) {
            case 8:
                long size = this.f28308w.size();
                if (size != 1) {
                    if (size != 0) {
                        s10 = this.f28308w.readShort();
                        str = this.f28308w.T1();
                        String a10 = f.f28296a.a(s10);
                        if (a10 != null) {
                            throw new ProtocolException(a10);
                        }
                    } else {
                        s10 = 1005;
                        str = "";
                    }
                    this.f28299i.g(s10, str);
                    this.f28302q = true;
                    return;
                }
                throw new ProtocolException("Malformed close payload length of 1.");
            case 9:
                this.f28299i.d(this.f28308w.L1());
                return;
            case 10:
                this.f28299i.e(this.f28308w.L1());
                return;
            default:
                throw new ProtocolException("Unknown control opcode: " + ut.e.R(this.f28303r));
        }
    }

    private final void l() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        if (!this.f28302q) {
            long h10 = this.f28298e.timeout().h();
            this.f28298e.timeout().b();
            try {
                int d10 = ut.e.d(this.f28298e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f28298e.timeout().g(h10, TimeUnit.NANOSECONDS);
                int i10 = d10 & 15;
                this.f28303r = i10;
                boolean z14 = false;
                if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f28305t = z10;
                if ((d10 & 8) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f28306u = z11;
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
                        if (this.f28300o) {
                            z13 = true;
                        } else {
                            throw new ProtocolException("Unexpected rsv1 flag");
                        }
                    } else {
                        z13 = false;
                    }
                    this.f28307v = z13;
                }
                if ((d10 & 32) == 0) {
                    if ((d10 & 16) == 0) {
                        int d11 = ut.e.d(this.f28298e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                        if ((d11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                            z14 = true;
                        }
                        if (z14 == this.f28297d) {
                            if (this.f28297d) {
                                str = "Server-sent frames must not be masked.";
                            } else {
                                str = "Client-sent frames must be masked.";
                            }
                            throw new ProtocolException(str);
                        }
                        long j10 = d11 & 127;
                        this.f28304s = j10;
                        if (j10 == 126) {
                            this.f28304s = ut.e.e(this.f28298e.readShort(), 65535);
                        } else if (j10 == 127) {
                            long readLong = this.f28298e.readLong();
                            this.f28304s = readLong;
                            if (readLong < 0) {
                                throw new ProtocolException("Frame length 0x" + ut.e.S(this.f28304s) + " > 0x7FFFFFFFFFFFFFFF");
                            }
                        }
                        if (this.f28306u && this.f28304s > 125) {
                            throw new ProtocolException("Control frame must be less than 125B.");
                        }
                        if (z14) {
                            BufferedSource bufferedSource = this.f28298e;
                            byte[] bArr = this.f28311z;
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
                this.f28298e.timeout().g(h10, TimeUnit.NANOSECONDS);
                throw th2;
            }
        }
        throw new IOException("closed");
    }

    private final void n() {
        while (!this.f28302q) {
            long j10 = this.f28304s;
            if (j10 > 0) {
                this.f28298e.a0(this.f28309x, j10);
                if (!this.f28297d) {
                    Buffer buffer = this.f28309x;
                    Buffer.a aVar = this.A;
                    Intrinsics.checkNotNull(aVar);
                    buffer.R0(aVar);
                    this.A.n(this.f28309x.size() - this.f28304s);
                    f fVar = f.f28296a;
                    Buffer.a aVar2 = this.A;
                    byte[] bArr = this.f28311z;
                    Intrinsics.checkNotNull(bArr);
                    fVar.b(aVar2, bArr);
                    this.A.close();
                }
            }
            if (!this.f28305t) {
                B();
                if (this.f28303r != 0) {
                    throw new ProtocolException("Expected continuation opcode. Got: " + ut.e.R(this.f28303r));
                }
            } else {
                return;
            }
        }
        throw new IOException("closed");
    }

    private final void x() {
        int i10 = this.f28303r;
        if (i10 != 1 && i10 != 2) {
            throw new ProtocolException("Unknown opcode: " + ut.e.R(i10));
        }
        n();
        if (this.f28307v) {
            c cVar = this.f28310y;
            if (cVar == null) {
                cVar = new c(this.f28301p);
                this.f28310y = cVar;
            }
            cVar.a(this.f28309x);
        }
        if (i10 == 1) {
            this.f28299i.c(this.f28309x.T1());
        } else {
            this.f28299i.b(this.f28309x.L1());
        }
    }

    public final void a() {
        l();
        if (this.f28306u) {
            h();
        } else {
            x();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c cVar = this.f28310y;
        if (cVar != null) {
            cVar.close();
        }
    }
}
