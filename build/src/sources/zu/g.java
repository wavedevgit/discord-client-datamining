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
    private final boolean f57186d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSource f57187e;

    /* renamed from: i  reason: collision with root package name */
    private final a f57188i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f57189o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f57190p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f57191q;

    /* renamed from: r  reason: collision with root package name */
    private int f57192r;

    /* renamed from: s  reason: collision with root package name */
    private long f57193s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f57194t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f57195u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f57196v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer f57197w;

    /* renamed from: x  reason: collision with root package name */
    private final Buffer f57198x;

    /* renamed from: y  reason: collision with root package name */
    private c f57199y;

    /* renamed from: z  reason: collision with root package name */
    private final byte[] f57200z;

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
        this.f57186d = z10;
        this.f57187e = source;
        this.f57188i = frameCallback;
        this.f57189o = z11;
        this.f57190p = z12;
        this.f57197w = new Buffer();
        this.f57198x = new Buffer();
        if (z10) {
            bArr = null;
        } else {
            bArr = new byte[4];
        }
        this.f57200z = bArr;
        this.A = z10 ? null : new Buffer.a();
    }

    private final void h() {
        short s10;
        String str;
        long j10 = this.f57193s;
        if (j10 > 0) {
            this.f57187e.e0(this.f57197w, j10);
            if (!this.f57186d) {
                Buffer buffer = this.f57197w;
                Buffer.a aVar = this.A;
                Intrinsics.checkNotNull(aVar);
                buffer.F0(aVar);
                this.A.m(0L);
                f fVar = f.f57185a;
                Buffer.a aVar2 = this.A;
                byte[] bArr = this.f57200z;
                Intrinsics.checkNotNull(bArr);
                fVar.b(aVar2, bArr);
                this.A.close();
            }
        }
        switch (this.f57192r) {
            case 8:
                long size = this.f57197w.size();
                if (size != 1) {
                    if (size != 0) {
                        s10 = this.f57197w.readShort();
                        str = this.f57197w.X1();
                        String a10 = f.f57185a.a(s10);
                        if (a10 != null) {
                            throw new ProtocolException(a10);
                        }
                    } else {
                        s10 = 1005;
                        str = "";
                    }
                    this.f57188i.g(s10, str);
                    this.f57191q = true;
                    return;
                }
                throw new ProtocolException("Malformed close payload length of 1.");
            case 9:
                this.f57188i.d(this.f57197w.M1());
                return;
            case 10:
                this.f57188i.e(this.f57197w.M1());
                return;
            default:
                throw new ProtocolException("Unknown control opcode: " + mu.e.R(this.f57192r));
        }
    }

    private final void i() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        if (!this.f57191q) {
            long h10 = this.f57187e.timeout().h();
            this.f57187e.timeout().b();
            try {
                int d10 = mu.e.d(this.f57187e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f57187e.timeout().g(h10, TimeUnit.NANOSECONDS);
                int i10 = d10 & 15;
                this.f57192r = i10;
                boolean z14 = false;
                if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f57194t = z10;
                if ((d10 & 8) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f57195u = z11;
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
                        if (this.f57189o) {
                            z13 = true;
                        } else {
                            throw new ProtocolException("Unexpected rsv1 flag");
                        }
                    } else {
                        z13 = false;
                    }
                    this.f57196v = z13;
                }
                if ((d10 & 32) == 0) {
                    if ((d10 & 16) == 0) {
                        int d11 = mu.e.d(this.f57187e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                        if ((d11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                            z14 = true;
                        }
                        if (z14 == this.f57186d) {
                            if (this.f57186d) {
                                str = "Server-sent frames must not be masked.";
                            } else {
                                str = "Client-sent frames must be masked.";
                            }
                            throw new ProtocolException(str);
                        }
                        long j10 = d11 & 127;
                        this.f57193s = j10;
                        if (j10 == 126) {
                            this.f57193s = mu.e.e(this.f57187e.readShort(), 65535);
                        } else if (j10 == 127) {
                            long readLong = this.f57187e.readLong();
                            this.f57193s = readLong;
                            if (readLong < 0) {
                                throw new ProtocolException("Frame length 0x" + mu.e.S(this.f57193s) + " > 0x7FFFFFFFFFFFFFFF");
                            }
                        }
                        if (this.f57195u && this.f57193s > 125) {
                            throw new ProtocolException("Control frame must be less than 125B.");
                        }
                        if (z14) {
                            BufferedSource bufferedSource = this.f57187e;
                            byte[] bArr = this.f57200z;
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
                this.f57187e.timeout().g(h10, TimeUnit.NANOSECONDS);
                throw th2;
            }
        }
        throw new IOException("closed");
    }

    private final void m() {
        while (!this.f57191q) {
            long j10 = this.f57193s;
            if (j10 > 0) {
                this.f57187e.e0(this.f57198x, j10);
                if (!this.f57186d) {
                    Buffer buffer = this.f57198x;
                    Buffer.a aVar = this.A;
                    Intrinsics.checkNotNull(aVar);
                    buffer.F0(aVar);
                    this.A.m(this.f57198x.size() - this.f57193s);
                    f fVar = f.f57185a;
                    Buffer.a aVar2 = this.A;
                    byte[] bArr = this.f57200z;
                    Intrinsics.checkNotNull(bArr);
                    fVar.b(aVar2, bArr);
                    this.A.close();
                }
            }
            if (!this.f57194t) {
                p();
                if (this.f57192r != 0) {
                    throw new ProtocolException("Expected continuation opcode. Got: " + mu.e.R(this.f57192r));
                }
            } else {
                return;
            }
        }
        throw new IOException("closed");
    }

    private final void n() {
        int i10 = this.f57192r;
        if (i10 != 1 && i10 != 2) {
            throw new ProtocolException("Unknown opcode: " + mu.e.R(i10));
        }
        m();
        if (this.f57196v) {
            c cVar = this.f57199y;
            if (cVar == null) {
                cVar = new c(this.f57190p);
                this.f57199y = cVar;
            }
            cVar.a(this.f57198x);
        }
        if (i10 == 1) {
            this.f57188i.c(this.f57198x.X1());
        } else {
            this.f57188i.b(this.f57198x.M1());
        }
    }

    private final void p() {
        while (!this.f57191q) {
            i();
            if (this.f57195u) {
                h();
            } else {
                return;
            }
        }
    }

    public final void a() {
        i();
        if (this.f57195u) {
            h();
        } else {
            n();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c cVar = this.f57199y;
        if (cVar != null) {
            cVar.close();
        }
    }
}
