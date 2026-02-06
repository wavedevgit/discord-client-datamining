package pu;

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
    private final boolean f45720d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSource f45721e;

    /* renamed from: i  reason: collision with root package name */
    private final a f45722i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f45723o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f45724p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f45725q;

    /* renamed from: r  reason: collision with root package name */
    private int f45726r;

    /* renamed from: s  reason: collision with root package name */
    private long f45727s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f45728t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f45729u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f45730v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer f45731w;

    /* renamed from: x  reason: collision with root package name */
    private final Buffer f45732x;

    /* renamed from: y  reason: collision with root package name */
    private c f45733y;

    /* renamed from: z  reason: collision with root package name */
    private final byte[] f45734z;

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
        this.f45720d = z10;
        this.f45721e = source;
        this.f45722i = frameCallback;
        this.f45723o = z11;
        this.f45724p = z12;
        this.f45731w = new Buffer();
        this.f45732x = new Buffer();
        if (z10) {
            bArr = null;
        } else {
            bArr = new byte[4];
        }
        this.f45734z = bArr;
        this.A = z10 ? null : new Buffer.a();
    }

    private final void g() {
        short s10;
        String str;
        long j10 = this.f45727s;
        if (j10 > 0) {
            this.f45721e.d0(this.f45731w, j10);
            if (!this.f45720d) {
                Buffer buffer = this.f45731w;
                Buffer.a aVar = this.A;
                Intrinsics.checkNotNull(aVar);
                buffer.L0(aVar);
                this.A.m(0L);
                f fVar = f.f45719a;
                Buffer.a aVar2 = this.A;
                byte[] bArr = this.f45734z;
                Intrinsics.checkNotNull(bArr);
                fVar.b(aVar2, bArr);
                this.A.close();
            }
        }
        switch (this.f45726r) {
            case 8:
                long size = this.f45731w.size();
                if (size != 1) {
                    if (size != 0) {
                        s10 = this.f45731w.readShort();
                        str = this.f45731w.S1();
                        String a10 = f.f45719a.a(s10);
                        if (a10 != null) {
                            throw new ProtocolException(a10);
                        }
                    } else {
                        s10 = 1005;
                        str = "";
                    }
                    this.f45722i.g(s10, str);
                    this.f45725q = true;
                    return;
                }
                throw new ProtocolException("Malformed close payload length of 1.");
            case 9:
                this.f45722i.d(this.f45731w.K1());
                return;
            case 10:
                this.f45722i.e(this.f45731w.K1());
                return;
            default:
                throw new ProtocolException("Unknown control opcode: " + cu.e.R(this.f45726r));
        }
    }

    private final void k() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        if (!this.f45725q) {
            long h10 = this.f45721e.timeout().h();
            this.f45721e.timeout().b();
            try {
                int d10 = cu.e.d(this.f45721e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f45721e.timeout().g(h10, TimeUnit.NANOSECONDS);
                int i10 = d10 & 15;
                this.f45726r = i10;
                boolean z14 = false;
                if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f45728t = z10;
                if ((d10 & 8) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f45729u = z11;
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
                        if (this.f45723o) {
                            z13 = true;
                        } else {
                            throw new ProtocolException("Unexpected rsv1 flag");
                        }
                    } else {
                        z13 = false;
                    }
                    this.f45730v = z13;
                }
                if ((d10 & 32) == 0) {
                    if ((d10 & 16) == 0) {
                        int d11 = cu.e.d(this.f45721e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                        if ((d11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                            z14 = true;
                        }
                        if (z14 == this.f45720d) {
                            if (this.f45720d) {
                                str = "Server-sent frames must not be masked.";
                            } else {
                                str = "Client-sent frames must be masked.";
                            }
                            throw new ProtocolException(str);
                        }
                        long j10 = d11 & 127;
                        this.f45727s = j10;
                        if (j10 == 126) {
                            this.f45727s = cu.e.e(this.f45721e.readShort(), 65535);
                        } else if (j10 == 127) {
                            long readLong = this.f45721e.readLong();
                            this.f45727s = readLong;
                            if (readLong < 0) {
                                throw new ProtocolException("Frame length 0x" + cu.e.S(this.f45727s) + " > 0x7FFFFFFFFFFFFFFF");
                            }
                        }
                        if (this.f45729u && this.f45727s > 125) {
                            throw new ProtocolException("Control frame must be less than 125B.");
                        }
                        if (z14) {
                            BufferedSource bufferedSource = this.f45721e;
                            byte[] bArr = this.f45734z;
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
                this.f45721e.timeout().g(h10, TimeUnit.NANOSECONDS);
                throw th2;
            }
        }
        throw new IOException("closed");
    }

    private final void m() {
        while (!this.f45725q) {
            long j10 = this.f45727s;
            if (j10 > 0) {
                this.f45721e.d0(this.f45732x, j10);
                if (!this.f45720d) {
                    Buffer buffer = this.f45732x;
                    Buffer.a aVar = this.A;
                    Intrinsics.checkNotNull(aVar);
                    buffer.L0(aVar);
                    this.A.m(this.f45732x.size() - this.f45727s);
                    f fVar = f.f45719a;
                    Buffer.a aVar2 = this.A;
                    byte[] bArr = this.f45734z;
                    Intrinsics.checkNotNull(bArr);
                    fVar.b(aVar2, bArr);
                    this.A.close();
                }
            }
            if (!this.f45728t) {
                p();
                if (this.f45726r != 0) {
                    throw new ProtocolException("Expected continuation opcode. Got: " + cu.e.R(this.f45726r));
                }
            } else {
                return;
            }
        }
        throw new IOException("closed");
    }

    private final void n() {
        int i10 = this.f45726r;
        if (i10 != 1 && i10 != 2) {
            throw new ProtocolException("Unknown opcode: " + cu.e.R(i10));
        }
        m();
        if (this.f45730v) {
            c cVar = this.f45733y;
            if (cVar == null) {
                cVar = new c(this.f45724p);
                this.f45733y = cVar;
            }
            cVar.a(this.f45732x);
        }
        if (i10 == 1) {
            this.f45722i.c(this.f45732x.S1());
        } else {
            this.f45722i.b(this.f45732x.K1());
        }
    }

    private final void p() {
        while (!this.f45725q) {
            k();
            if (this.f45729u) {
                g();
            } else {
                return;
            }
        }
    }

    public final void a() {
        k();
        if (this.f45729u) {
            g();
        } else {
            n();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c cVar = this.f45733y;
        if (cVar != null) {
            cVar.close();
        }
    }
}
