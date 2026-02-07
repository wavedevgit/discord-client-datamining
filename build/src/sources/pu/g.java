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
    private final boolean f45768d;

    /* renamed from: e  reason: collision with root package name */
    private final BufferedSource f45769e;

    /* renamed from: i  reason: collision with root package name */
    private final a f45770i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f45771o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f45772p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f45773q;

    /* renamed from: r  reason: collision with root package name */
    private int f45774r;

    /* renamed from: s  reason: collision with root package name */
    private long f45775s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f45776t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f45777u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f45778v;

    /* renamed from: w  reason: collision with root package name */
    private final Buffer f45779w;

    /* renamed from: x  reason: collision with root package name */
    private final Buffer f45780x;

    /* renamed from: y  reason: collision with root package name */
    private c f45781y;

    /* renamed from: z  reason: collision with root package name */
    private final byte[] f45782z;

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
        this.f45768d = z10;
        this.f45769e = source;
        this.f45770i = frameCallback;
        this.f45771o = z11;
        this.f45772p = z12;
        this.f45779w = new Buffer();
        this.f45780x = new Buffer();
        if (z10) {
            bArr = null;
        } else {
            bArr = new byte[4];
        }
        this.f45782z = bArr;
        this.A = z10 ? null : new Buffer.a();
    }

    private final void g() {
        short s10;
        String str;
        long j10 = this.f45775s;
        if (j10 > 0) {
            this.f45769e.d0(this.f45779w, j10);
            if (!this.f45768d) {
                Buffer buffer = this.f45779w;
                Buffer.a aVar = this.A;
                Intrinsics.checkNotNull(aVar);
                buffer.L0(aVar);
                this.A.m(0L);
                f fVar = f.f45767a;
                Buffer.a aVar2 = this.A;
                byte[] bArr = this.f45782z;
                Intrinsics.checkNotNull(bArr);
                fVar.b(aVar2, bArr);
                this.A.close();
            }
        }
        switch (this.f45774r) {
            case 8:
                long size = this.f45779w.size();
                if (size != 1) {
                    if (size != 0) {
                        s10 = this.f45779w.readShort();
                        str = this.f45779w.S1();
                        String a10 = f.f45767a.a(s10);
                        if (a10 != null) {
                            throw new ProtocolException(a10);
                        }
                    } else {
                        s10 = 1005;
                        str = "";
                    }
                    this.f45770i.g(s10, str);
                    this.f45773q = true;
                    return;
                }
                throw new ProtocolException("Malformed close payload length of 1.");
            case 9:
                this.f45770i.d(this.f45779w.K1());
                return;
            case 10:
                this.f45770i.e(this.f45779w.K1());
                return;
            default:
                throw new ProtocolException("Unknown control opcode: " + cu.e.R(this.f45774r));
        }
    }

    private final void k() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        if (!this.f45773q) {
            long h10 = this.f45769e.timeout().h();
            this.f45769e.timeout().b();
            try {
                int d10 = cu.e.d(this.f45769e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f45769e.timeout().g(h10, TimeUnit.NANOSECONDS);
                int i10 = d10 & 15;
                this.f45774r = i10;
                boolean z14 = false;
                if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f45776t = z10;
                if ((d10 & 8) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f45777u = z11;
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
                        if (this.f45771o) {
                            z13 = true;
                        } else {
                            throw new ProtocolException("Unexpected rsv1 flag");
                        }
                    } else {
                        z13 = false;
                    }
                    this.f45778v = z13;
                }
                if ((d10 & 32) == 0) {
                    if ((d10 & 16) == 0) {
                        int d11 = cu.e.d(this.f45769e.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                        if ((d11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                            z14 = true;
                        }
                        if (z14 == this.f45768d) {
                            if (this.f45768d) {
                                str = "Server-sent frames must not be masked.";
                            } else {
                                str = "Client-sent frames must be masked.";
                            }
                            throw new ProtocolException(str);
                        }
                        long j10 = d11 & 127;
                        this.f45775s = j10;
                        if (j10 == 126) {
                            this.f45775s = cu.e.e(this.f45769e.readShort(), 65535);
                        } else if (j10 == 127) {
                            long readLong = this.f45769e.readLong();
                            this.f45775s = readLong;
                            if (readLong < 0) {
                                throw new ProtocolException("Frame length 0x" + cu.e.S(this.f45775s) + " > 0x7FFFFFFFFFFFFFFF");
                            }
                        }
                        if (this.f45777u && this.f45775s > 125) {
                            throw new ProtocolException("Control frame must be less than 125B.");
                        }
                        if (z14) {
                            BufferedSource bufferedSource = this.f45769e;
                            byte[] bArr = this.f45782z;
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
                this.f45769e.timeout().g(h10, TimeUnit.NANOSECONDS);
                throw th2;
            }
        }
        throw new IOException("closed");
    }

    private final void m() {
        while (!this.f45773q) {
            long j10 = this.f45775s;
            if (j10 > 0) {
                this.f45769e.d0(this.f45780x, j10);
                if (!this.f45768d) {
                    Buffer buffer = this.f45780x;
                    Buffer.a aVar = this.A;
                    Intrinsics.checkNotNull(aVar);
                    buffer.L0(aVar);
                    this.A.m(this.f45780x.size() - this.f45775s);
                    f fVar = f.f45767a;
                    Buffer.a aVar2 = this.A;
                    byte[] bArr = this.f45782z;
                    Intrinsics.checkNotNull(bArr);
                    fVar.b(aVar2, bArr);
                    this.A.close();
                }
            }
            if (!this.f45776t) {
                p();
                if (this.f45774r != 0) {
                    throw new ProtocolException("Expected continuation opcode. Got: " + cu.e.R(this.f45774r));
                }
            } else {
                return;
            }
        }
        throw new IOException("closed");
    }

    private final void n() {
        int i10 = this.f45774r;
        if (i10 != 1 && i10 != 2) {
            throw new ProtocolException("Unknown opcode: " + cu.e.R(i10));
        }
        m();
        if (this.f45778v) {
            c cVar = this.f45781y;
            if (cVar == null) {
                cVar = new c(this.f45772p);
                this.f45781y = cVar;
            }
            cVar.a(this.f45780x);
        }
        if (i10 == 1) {
            this.f45770i.c(this.f45780x.S1());
        } else {
            this.f45770i.b(this.f45780x.K1());
        }
    }

    private final void p() {
        while (!this.f45773q) {
            k();
            if (this.f45777u) {
                g();
            } else {
                return;
            }
        }
    }

    public final void a() {
        k();
        if (this.f45777u) {
            g();
        } else {
            n();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c cVar = this.f45781y;
        if (cVar != null) {
            cVar.close();
        }
    }
}
