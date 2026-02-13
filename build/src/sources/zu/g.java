package zu;

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
    private final boolean f57754d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSource f57755e;

    /* renamed from: i  reason: collision with root package name */
    private final a f57756i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f57757o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f57758p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f57759q;

    /* renamed from: r  reason: collision with root package name */
    private int f57760r;

    /* renamed from: s  reason: collision with root package name */
    private long f57761s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f57762t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f57763u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f57764v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer f57765w;

    /* renamed from: x  reason: collision with root package name */
    private final Buffer f57766x;

    /* renamed from: y  reason: collision with root package name */
    private c f57767y;

    /* renamed from: z  reason: collision with root package name */
    private final byte[] f57768z;

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
        this.f57754d = z10;
        this.f57755e = source;
        this.f57756i = frameCallback;
        this.f57757o = z11;
        this.f57758p = z12;
        this.f57765w = new Buffer();
        this.f57766x = new Buffer();
        if (z10) {
            bArr = null;
        } else {
            bArr = new byte[4];
        }
        this.f57768z = bArr;
        this.A = z10 ? null : new Buffer.a();
    }

    private final void h() {
        short s10;
        String str;
        long j10 = this.f57761s;
        if (j10 > 0) {
            this.f57755e.e0(this.f57765w, j10);
            if (!this.f57754d) {
                Buffer buffer = this.f57765w;
                Buffer.a aVar = this.A;
                Intrinsics.checkNotNull(aVar);
                buffer.F0(aVar);
                this.A.m(0L);
                f fVar = f.f57753a;
                Buffer.a aVar2 = this.A;
                byte[] bArr = this.f57768z;
                Intrinsics.checkNotNull(bArr);
                fVar.b(aVar2, bArr);
                this.A.close();
            }
        }
        switch (this.f57760r) {
            case 8:
                long size = this.f57765w.size();
                if (size != 1) {
                    if (size != 0) {
                        s10 = this.f57765w.readShort();
                        str = this.f57765w.X1();
                        String a10 = f.f57753a.a(s10);
                        if (a10 != null) {
                            throw new ProtocolException(a10);
                        }
                    } else {
                        s10 = 1005;
                        str = "";
                    }
                    this.f57756i.g(s10, str);
                    this.f57759q = true;
                    return;
                }
                throw new ProtocolException("Malformed close payload length of 1.");
            case 9:
                this.f57756i.d(this.f57765w.M1());
                return;
            case 10:
                this.f57756i.e(this.f57765w.M1());
                return;
            default:
                throw new ProtocolException("Unknown control opcode: " + mu.e.R(this.f57760r));
        }
    }

    private final void i() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        if (!this.f57759q) {
            long h10 = this.f57755e.timeout().h();
            this.f57755e.timeout().b();
            try {
                int d10 = mu.e.d(this.f57755e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f57755e.timeout().g(h10, TimeUnit.NANOSECONDS);
                int i10 = d10 & 15;
                this.f57760r = i10;
                boolean z14 = false;
                if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f57762t = z10;
                if ((d10 & 8) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f57763u = z11;
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
                        if (this.f57757o) {
                            z13 = true;
                        } else {
                            throw new ProtocolException("Unexpected rsv1 flag");
                        }
                    } else {
                        z13 = false;
                    }
                    this.f57764v = z13;
                }
                if ((d10 & 32) == 0) {
                    if ((d10 & 16) == 0) {
                        int d11 = mu.e.d(this.f57755e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                        if ((d11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                            z14 = true;
                        }
                        if (z14 == this.f57754d) {
                            if (this.f57754d) {
                                str = "Server-sent frames must not be masked.";
                            } else {
                                str = "Client-sent frames must be masked.";
                            }
                            throw new ProtocolException(str);
                        }
                        long j10 = d11 & 127;
                        this.f57761s = j10;
                        if (j10 == 126) {
                            this.f57761s = mu.e.e(this.f57755e.readShort(), 65535);
                        } else if (j10 == 127) {
                            long readLong = this.f57755e.readLong();
                            this.f57761s = readLong;
                            if (readLong < 0) {
                                throw new ProtocolException("Frame length 0x" + mu.e.S(this.f57761s) + " > 0x7FFFFFFFFFFFFFFF");
                            }
                        }
                        if (this.f57763u && this.f57761s > 125) {
                            throw new ProtocolException("Control frame must be less than 125B.");
                        }
                        if (z14) {
                            BufferedSource bufferedSource = this.f57755e;
                            byte[] bArr = this.f57768z;
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
                this.f57755e.timeout().g(h10, TimeUnit.NANOSECONDS);
                throw th2;
            }
        }
        throw new IOException("closed");
    }

    private final void m() {
        while (!this.f57759q) {
            long j10 = this.f57761s;
            if (j10 > 0) {
                this.f57755e.e0(this.f57766x, j10);
                if (!this.f57754d) {
                    Buffer buffer = this.f57766x;
                    Buffer.a aVar = this.A;
                    Intrinsics.checkNotNull(aVar);
                    buffer.F0(aVar);
                    this.A.m(this.f57766x.size() - this.f57761s);
                    f fVar = f.f57753a;
                    Buffer.a aVar2 = this.A;
                    byte[] bArr = this.f57768z;
                    Intrinsics.checkNotNull(bArr);
                    fVar.b(aVar2, bArr);
                    this.A.close();
                }
            }
            if (!this.f57762t) {
                p();
                if (this.f57760r != 0) {
                    throw new ProtocolException("Expected continuation opcode. Got: " + mu.e.R(this.f57760r));
                }
            } else {
                return;
            }
        }
        throw new IOException("closed");
    }

    private final void n() {
        int i10 = this.f57760r;
        if (i10 != 1 && i10 != 2) {
            throw new ProtocolException("Unknown opcode: " + mu.e.R(i10));
        }
        m();
        if (this.f57764v) {
            c cVar = this.f57767y;
            if (cVar == null) {
                cVar = new c(this.f57758p);
                this.f57767y = cVar;
            }
            cVar.a(this.f57766x);
        }
        if (i10 == 1) {
            this.f57756i.c(this.f57766x.X1());
        } else {
            this.f57756i.b(this.f57766x.M1());
        }
    }

    private final void p() {
        while (!this.f57759q) {
            i();
            if (this.f57763u) {
                h();
            } else {
                return;
            }
        }
    }

    public final void a() {
        i();
        if (this.f57763u) {
            h();
        } else {
            n();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c cVar = this.f57767y;
        if (cVar != null) {
            cVar.close();
        }
    }
}
