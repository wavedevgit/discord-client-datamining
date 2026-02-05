package ou;

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
    private byte f44536d;

    /* renamed from: e  reason: collision with root package name */
    private final f0 f44537e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f44538i;

    /* renamed from: o  reason: collision with root package name */
    private final o f44539o;

    /* renamed from: p  reason: collision with root package name */
    private final CRC32 f44540p;

    public m(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        f0 f0Var = new f0(source);
        this.f44537e = f0Var;
        Inflater inflater = new Inflater(true);
        this.f44538i = inflater;
        this.f44539o = new o((BufferedSource) f0Var, inflater);
        this.f44540p = new CRC32();
    }

    private final void a(String str, int i10, int i11) {
        if (i11 == i10) {
            return;
        }
        throw new IOException(str + ": actual 0x" + StringsKt.t0(okio.b.l(i11), 8, '0') + " != expected 0x" + StringsKt.t0(okio.b.l(i10), 8, '0'));
    }

    private final void h() {
        boolean z10;
        this.f44537e.U0(10L);
        byte F0 = this.f44537e.f44496e.F0(3L);
        if (((F0 >> 1) & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            m(this.f44537e.f44496e, 0L, 10L);
        }
        a("ID1ID2", 8075, this.f44537e.readShort());
        this.f44537e.skip(8L);
        if (((F0 >> 2) & 1) == 1) {
            this.f44537e.U0(2L);
            if (z10) {
                m(this.f44537e.f44496e, 0L, 2L);
            }
            long O0 = this.f44537e.f44496e.O0() & 65535;
            this.f44537e.U0(O0);
            if (z10) {
                m(this.f44537e.f44496e, 0L, O0);
            }
            this.f44537e.skip(O0);
        }
        if (((F0 >> 3) & 1) == 1) {
            long a10 = this.f44537e.a((byte) 0);
            if (a10 != -1) {
                if (z10) {
                    m(this.f44537e.f44496e, 0L, a10 + 1);
                }
                this.f44537e.skip(a10 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (((F0 >> 4) & 1) == 1) {
            long a11 = this.f44537e.a((byte) 0);
            if (a11 != -1) {
                if (z10) {
                    m(this.f44537e.f44496e, 0L, a11 + 1);
                }
                this.f44537e.skip(a11 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (z10) {
            a("FHCRC", this.f44537e.O0(), (short) this.f44540p.getValue());
            this.f44540p.reset();
        }
    }

    private final void k() {
        a("CRC", this.f44537e.Q1(), (int) this.f44540p.getValue());
        a("ISIZE", this.f44537e.Q1(), (int) this.f44538i.getBytesWritten());
    }

    private final void m(Buffer buffer, long j10, long j11) {
        int i10;
        g0 g0Var = buffer.f44049d;
        Intrinsics.checkNotNull(g0Var);
        while (true) {
            int i11 = g0Var.f44510c;
            int i12 = g0Var.f44509b;
            if (j10 < i11 - i12) {
                break;
            }
            j10 -= i11 - i12;
            g0Var = g0Var.f44513f;
            Intrinsics.checkNotNull(g0Var);
        }
        while (j11 > 0) {
            int min = (int) Math.min(g0Var.f44510c - i10, j11);
            this.f44540p.update(g0Var.f44508a, (int) (g0Var.f44509b + j10), min);
            j11 -= min;
            g0Var = g0Var.f44513f;
            Intrinsics.checkNotNull(g0Var);
            j10 = 0;
        }
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f44539o.close();
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
            if (this.f44536d == 0) {
                h();
                this.f44536d = (byte) 1;
            }
            if (this.f44536d == 1) {
                long size = sink.size();
                long read = this.f44539o.read(sink, j10);
                if (read != -1) {
                    m(sink, size, read);
                    return read;
                }
                mVar = this;
                mVar.f44536d = (byte) 2;
            } else {
                mVar = this;
            }
            if (mVar.f44536d == 2) {
                k();
                mVar.f44536d = (byte) 3;
                if (!mVar.f44537e.o1()) {
                    throw new IOException("gzip finished without exhausting source");
                }
            }
            return -1L;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f44537e.timeout();
    }
}
