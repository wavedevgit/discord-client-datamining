package av;

import java.io.EOFException;
import java.io.IOException;
import java.util.zip.CRC32;
import java.util.zip.Inflater;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okio.Buffer;
import okio.BufferedSource;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements Source {

    /* renamed from: d  reason: collision with root package name */
    private byte f6290d;

    /* renamed from: e  reason: collision with root package name */
    private final f0 f6291e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f6292i;

    /* renamed from: o  reason: collision with root package name */
    private final o f6293o;

    /* renamed from: p  reason: collision with root package name */
    private final CRC32 f6294p;

    public m(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        f0 f0Var = new f0(source);
        this.f6291e = f0Var;
        Inflater inflater = new Inflater(true);
        this.f6292i = inflater;
        this.f6293o = new o((BufferedSource) f0Var, inflater);
        this.f6294p = new CRC32();
    }

    private final void a(String str, int i10, int i11) {
        if (i11 == i10) {
            return;
        }
        throw new IOException(str + ": actual 0x" + StringsKt.t0(okio.b.l(i11), 8, '0') + " != expected 0x" + StringsKt.t0(okio.b.l(i10), 8, '0'));
    }

    private final void h() {
        boolean z10;
        this.f6291e.U0(10L);
        byte Z = this.f6291e.f6250e.Z(3L);
        if (((Z >> 1) & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            m(this.f6291e.f6250e, 0L, 10L);
        }
        a("ID1ID2", 8075, this.f6291e.readShort());
        this.f6291e.skip(8L);
        if (((Z >> 2) & 1) == 1) {
            this.f6291e.U0(2L);
            if (z10) {
                m(this.f6291e.f6250e, 0L, 2L);
            }
            long M0 = this.f6291e.f6250e.M0() & 65535;
            this.f6291e.U0(M0);
            if (z10) {
                m(this.f6291e.f6250e, 0L, M0);
            }
            this.f6291e.skip(M0);
        }
        if (((Z >> 3) & 1) == 1) {
            long a10 = this.f6291e.a((byte) 0);
            if (a10 != -1) {
                if (z10) {
                    m(this.f6291e.f6250e, 0L, a10 + 1);
                }
                this.f6291e.skip(a10 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (((Z >> 4) & 1) == 1) {
            long a11 = this.f6291e.a((byte) 0);
            if (a11 != -1) {
                if (z10) {
                    m(this.f6291e.f6250e, 0L, a11 + 1);
                }
                this.f6291e.skip(a11 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (z10) {
            a("FHCRC", this.f6291e.M0(), (short) this.f6294p.getValue());
            this.f6294p.reset();
        }
    }

    private final void i() {
        a("CRC", this.f6291e.U1(), (int) this.f6294p.getValue());
        a("ISIZE", this.f6291e.U1(), (int) this.f6292i.getBytesWritten());
    }

    private final void m(Buffer buffer, long j10, long j11) {
        int i10;
        g0 g0Var = buffer.f40580d;
        Intrinsics.checkNotNull(g0Var);
        while (true) {
            int i11 = g0Var.f6264c;
            int i12 = g0Var.f6263b;
            if (j10 < i11 - i12) {
                break;
            }
            j10 -= i11 - i12;
            g0Var = g0Var.f6267f;
            Intrinsics.checkNotNull(g0Var);
        }
        while (j11 > 0) {
            int min = (int) Math.min(g0Var.f6264c - i10, j11);
            this.f6294p.update(g0Var.f6262a, (int) (g0Var.f6263b + j10), min);
            j11 -= min;
            g0Var = g0Var.f6267f;
            Intrinsics.checkNotNull(g0Var);
            j10 = 0;
        }
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f6293o.close();
    }

    @Override // okio.Source
    public long read(Buffer sink, long j10) {
        m mVar;
        Intrinsics.checkNotNullParameter(sink, "sink");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (i10 == 0) {
                return 0L;
            }
            if (this.f6290d == 0) {
                h();
                this.f6290d = (byte) 1;
            }
            if (this.f6290d == 1) {
                long size = sink.size();
                long read = this.f6293o.read(sink, j10);
                if (read != -1) {
                    m(sink, size, read);
                    return read;
                }
                mVar = this;
                mVar.f6290d = (byte) 2;
            } else {
                mVar = this;
            }
            if (mVar.f6290d == 2) {
                i();
                mVar.f6290d = (byte) 3;
                if (!mVar.f6291e.p1()) {
                    throw new IOException("gzip finished without exhausting source");
                }
            }
            return -1L;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f6291e.timeout();
    }
}
