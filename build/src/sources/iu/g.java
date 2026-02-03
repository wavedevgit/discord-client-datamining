package iu;

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
    private final boolean f31226d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSource f31227e;

    /* renamed from: i  reason: collision with root package name */
    private final a f31228i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f31229o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f31230p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f31231q;

    /* renamed from: r  reason: collision with root package name */
    private int f31232r;

    /* renamed from: s  reason: collision with root package name */
    private long f31233s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f31234t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f31235u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f31236v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer f31237w;

    /* renamed from: x  reason: collision with root package name */
    private final Buffer f31238x;

    /* renamed from: y  reason: collision with root package name */
    private c f31239y;

    /* renamed from: z  reason: collision with root package name */
    private final byte[] f31240z;

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
        this.f31226d = z10;
        this.f31227e = source;
        this.f31228i = frameCallback;
        this.f31229o = z11;
        this.f31230p = z12;
        this.f31237w = new Buffer();
        this.f31238x = new Buffer();
        if (z10) {
            bArr = null;
        } else {
            bArr = new byte[4];
        }
        this.f31240z = bArr;
        this.A = z10 ? null : new Buffer.a();
    }

    private final void B() {
        while (!this.f31231q) {
            l();
            if (this.f31235u) {
                h();
            } else {
                return;
            }
        }
    }

    private final void h() {
        short s10;
        String str;
        long j10 = this.f31233s;
        if (j10 > 0) {
            this.f31227e.b0(this.f31237w, j10);
            if (!this.f31226d) {
                Buffer buffer = this.f31237w;
                Buffer.a aVar = this.A;
                Intrinsics.checkNotNull(aVar);
                buffer.O0(aVar);
                this.A.n(0L);
                f fVar = f.f31225a;
                Buffer.a aVar2 = this.A;
                byte[] bArr = this.f31240z;
                Intrinsics.checkNotNull(bArr);
                fVar.b(aVar2, bArr);
                this.A.close();
            }
        }
        switch (this.f31232r) {
            case 8:
                long size = this.f31237w.size();
                if (size != 1) {
                    if (size != 0) {
                        s10 = this.f31237w.readShort();
                        str = this.f31237w.T1();
                        String a10 = f.f31225a.a(s10);
                        if (a10 != null) {
                            throw new ProtocolException(a10);
                        }
                    } else {
                        s10 = 1005;
                        str = "";
                    }
                    this.f31228i.g(s10, str);
                    this.f31231q = true;
                    return;
                }
                throw new ProtocolException("Malformed close payload length of 1.");
            case 9:
                this.f31228i.d(this.f31237w.L1());
                return;
            case 10:
                this.f31228i.e(this.f31237w.L1());
                return;
            default:
                throw new ProtocolException("Unknown control opcode: " + vt.e.R(this.f31232r));
        }
    }

    private final void l() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        if (!this.f31231q) {
            long h10 = this.f31227e.timeout().h();
            this.f31227e.timeout().b();
            try {
                int d10 = vt.e.d(this.f31227e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f31227e.timeout().g(h10, TimeUnit.NANOSECONDS);
                int i10 = d10 & 15;
                this.f31232r = i10;
                boolean z14 = false;
                if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f31234t = z10;
                if ((d10 & 8) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f31235u = z11;
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
                        if (this.f31229o) {
                            z13 = true;
                        } else {
                            throw new ProtocolException("Unexpected rsv1 flag");
                        }
                    } else {
                        z13 = false;
                    }
                    this.f31236v = z13;
                }
                if ((d10 & 32) == 0) {
                    if ((d10 & 16) == 0) {
                        int d11 = vt.e.d(this.f31227e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                        if ((d11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                            z14 = true;
                        }
                        if (z14 == this.f31226d) {
                            if (this.f31226d) {
                                str = "Server-sent frames must not be masked.";
                            } else {
                                str = "Client-sent frames must be masked.";
                            }
                            throw new ProtocolException(str);
                        }
                        long j10 = d11 & 127;
                        this.f31233s = j10;
                        if (j10 == 126) {
                            this.f31233s = vt.e.e(this.f31227e.readShort(), 65535);
                        } else if (j10 == 127) {
                            long readLong = this.f31227e.readLong();
                            this.f31233s = readLong;
                            if (readLong < 0) {
                                throw new ProtocolException("Frame length 0x" + vt.e.S(this.f31233s) + " > 0x7FFFFFFFFFFFFFFF");
                            }
                        }
                        if (this.f31235u && this.f31233s > 125) {
                            throw new ProtocolException("Control frame must be less than 125B.");
                        }
                        if (z14) {
                            BufferedSource bufferedSource = this.f31227e;
                            byte[] bArr = this.f31240z;
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
                this.f31227e.timeout().g(h10, TimeUnit.NANOSECONDS);
                throw th2;
            }
        }
        throw new IOException("closed");
    }

    private final void n() {
        while (!this.f31231q) {
            long j10 = this.f31233s;
            if (j10 > 0) {
                this.f31227e.b0(this.f31238x, j10);
                if (!this.f31226d) {
                    Buffer buffer = this.f31238x;
                    Buffer.a aVar = this.A;
                    Intrinsics.checkNotNull(aVar);
                    buffer.O0(aVar);
                    this.A.n(this.f31238x.size() - this.f31233s);
                    f fVar = f.f31225a;
                    Buffer.a aVar2 = this.A;
                    byte[] bArr = this.f31240z;
                    Intrinsics.checkNotNull(bArr);
                    fVar.b(aVar2, bArr);
                    this.A.close();
                }
            }
            if (!this.f31234t) {
                B();
                if (this.f31232r != 0) {
                    throw new ProtocolException("Expected continuation opcode. Got: " + vt.e.R(this.f31232r));
                }
            } else {
                return;
            }
        }
        throw new IOException("closed");
    }

    private final void x() {
        int i10 = this.f31232r;
        if (i10 != 1 && i10 != 2) {
            throw new ProtocolException("Unknown opcode: " + vt.e.R(i10));
        }
        n();
        if (this.f31236v) {
            c cVar = this.f31239y;
            if (cVar == null) {
                cVar = new c(this.f31230p);
                this.f31239y = cVar;
            }
            cVar.a(this.f31238x);
        }
        if (i10 == 1) {
            this.f31228i.c(this.f31238x.T1());
        } else {
            this.f31228i.b(this.f31238x.L1());
        }
    }

    public final void a() {
        l();
        if (this.f31235u) {
            h();
        } else {
            x();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c cVar = this.f31239y;
        if (cVar != null) {
            cVar.close();
        }
    }
}
