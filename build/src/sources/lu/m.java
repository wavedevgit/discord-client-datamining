package lu;

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
    private byte f37328d;

    /* renamed from: e  reason: collision with root package name */
    private final f0 f37329e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f37330i;

    /* renamed from: o  reason: collision with root package name */
    private final o f37331o;

    /* renamed from: p  reason: collision with root package name */
    private final CRC32 f37332p;

    public m(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        f0 f0Var = new f0(source);
        this.f37329e = f0Var;
        Inflater inflater = new Inflater(true);
        this.f37330i = inflater;
        this.f37331o = new o((BufferedSource) f0Var, inflater);
        this.f37332p = new CRC32();
    }

    private final void a(String str, int i10, int i11) {
        if (i11 == i10) {
            return;
        }
        throw new IOException(str + ": actual 0x" + StringsKt.t0(okio.b.l(i11), 8, '0') + " != expected 0x" + StringsKt.t0(okio.b.l(i10), 8, '0'));
    }

    private final void h() {
        boolean z10;
        this.f37329e.T0(10L);
        byte D0 = this.f37329e.f37288e.D0(3L);
        if (((D0 >> 1) & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            n(this.f37329e.f37288e, 0L, 10L);
        }
        a("ID1ID2", 8075, this.f37329e.readShort());
        this.f37329e.skip(8L);
        if (((D0 >> 2) & 1) == 1) {
            this.f37329e.T0(2L);
            if (z10) {
                n(this.f37329e.f37288e, 0L, 2L);
            }
            long N0 = this.f37329e.f37288e.N0() & 65535;
            this.f37329e.T0(N0);
            if (z10) {
                n(this.f37329e.f37288e, 0L, N0);
            }
            this.f37329e.skip(N0);
        }
        if (((D0 >> 3) & 1) == 1) {
            long a10 = this.f37329e.a((byte) 0);
            if (a10 != -1) {
                if (z10) {
                    n(this.f37329e.f37288e, 0L, a10 + 1);
                }
                this.f37329e.skip(a10 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (((D0 >> 4) & 1) == 1) {
            long a11 = this.f37329e.a((byte) 0);
            if (a11 != -1) {
                if (z10) {
                    n(this.f37329e.f37288e, 0L, a11 + 1);
                }
                this.f37329e.skip(a11 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (z10) {
            a("FHCRC", this.f37329e.N0(), (short) this.f37332p.getValue());
            this.f37332p.reset();
        }
    }

    private final void l() {
        a("CRC", this.f37329e.Q1(), (int) this.f37332p.getValue());
        a("ISIZE", this.f37329e.Q1(), (int) this.f37330i.getBytesWritten());
    }

    private final void n(Buffer buffer, long j10, long j11) {
        int i10;
        g0 g0Var = buffer.f44296d;
        Intrinsics.checkNotNull(g0Var);
        while (true) {
            int i11 = g0Var.f37302c;
            int i12 = g0Var.f37301b;
            if (j10 < i11 - i12) {
                break;
            }
            j10 -= i11 - i12;
            g0Var = g0Var.f37305f;
            Intrinsics.checkNotNull(g0Var);
        }
        while (j11 > 0) {
            int min = (int) Math.min(g0Var.f37302c - i10, j11);
            this.f37332p.update(g0Var.f37300a, (int) (g0Var.f37301b + j10), min);
            j11 -= min;
            g0Var = g0Var.f37305f;
            Intrinsics.checkNotNull(g0Var);
            j10 = 0;
        }
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f37331o.close();
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
            if (this.f37328d == 0) {
                h();
                this.f37328d = (byte) 1;
            }
            if (this.f37328d == 1) {
                long size = sink.size();
                long read = this.f37331o.read(sink, j10);
                if (read != -1) {
                    n(sink, size, read);
                    return read;
                }
                mVar = this;
                mVar.f37328d = (byte) 2;
            } else {
                mVar = this;
            }
            if (mVar.f37328d == 2) {
                l();
                mVar.f37328d = (byte) 3;
                if (!mVar.f37329e.o1()) {
                    throw new IOException("gzip finished without exhausting source");
                }
            }
            return -1L;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f37329e.timeout();
    }
}
