package iu;

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
    private byte f31293d;

    /* renamed from: e  reason: collision with root package name */
    private final f0 f31294e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f31295i;

    /* renamed from: o  reason: collision with root package name */
    private final o f31296o;

    /* renamed from: p  reason: collision with root package name */
    private final CRC32 f31297p;

    public m(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        f0 f0Var = new f0(source);
        this.f31294e = f0Var;
        Inflater inflater = new Inflater(true);
        this.f31295i = inflater;
        this.f31296o = new o((BufferedSource) f0Var, inflater);
        this.f31297p = new CRC32();
    }

    private final void a(String str, int i10, int i11) {
        if (i11 == i10) {
            return;
        }
        throw new IOException(str + ": actual 0x" + StringsKt.t0(okio.b.l(i11), 8, '0') + " != expected 0x" + StringsKt.t0(okio.b.l(i10), 8, '0'));
    }

    private final void h() {
        boolean z10;
        this.f31294e.T0(10L);
        byte E0 = this.f31294e.f31253e.E0(3L);
        if (((E0 >> 1) & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            n(this.f31294e.f31253e, 0L, 10L);
        }
        a("ID1ID2", 8075, this.f31294e.readShort());
        this.f31294e.skip(8L);
        if (((E0 >> 2) & 1) == 1) {
            this.f31294e.T0(2L);
            if (z10) {
                n(this.f31294e.f31253e, 0L, 2L);
            }
            long N0 = this.f31294e.f31253e.N0() & 65535;
            this.f31294e.T0(N0);
            if (z10) {
                n(this.f31294e.f31253e, 0L, N0);
            }
            this.f31294e.skip(N0);
        }
        if (((E0 >> 3) & 1) == 1) {
            long a10 = this.f31294e.a((byte) 0);
            if (a10 != -1) {
                if (z10) {
                    n(this.f31294e.f31253e, 0L, a10 + 1);
                }
                this.f31294e.skip(a10 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (((E0 >> 4) & 1) == 1) {
            long a11 = this.f31294e.a((byte) 0);
            if (a11 != -1) {
                if (z10) {
                    n(this.f31294e.f31253e, 0L, a11 + 1);
                }
                this.f31294e.skip(a11 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (z10) {
            a("FHCRC", this.f31294e.N0(), (short) this.f31297p.getValue());
            this.f31297p.reset();
        }
    }

    private final void l() {
        a("CRC", this.f31294e.Q1(), (int) this.f31297p.getValue());
        a("ISIZE", this.f31294e.Q1(), (int) this.f31295i.getBytesWritten());
    }

    private final void n(Buffer buffer, long j10, long j11) {
        int i10;
        g0 g0Var = buffer.f44368d;
        Intrinsics.checkNotNull(g0Var);
        while (true) {
            int i11 = g0Var.f31267c;
            int i12 = g0Var.f31266b;
            if (j10 < i11 - i12) {
                break;
            }
            j10 -= i11 - i12;
            g0Var = g0Var.f31270f;
            Intrinsics.checkNotNull(g0Var);
        }
        while (j11 > 0) {
            int min = (int) Math.min(g0Var.f31267c - i10, j11);
            this.f31297p.update(g0Var.f31265a, (int) (g0Var.f31266b + j10), min);
            j11 -= min;
            g0Var = g0Var.f31270f;
            Intrinsics.checkNotNull(g0Var);
            j10 = 0;
        }
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f31296o.close();
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
            if (this.f31293d == 0) {
                h();
                this.f31293d = (byte) 1;
            }
            if (this.f31293d == 1) {
                long size = sink.size();
                long read = this.f31296o.read(sink, j10);
                if (read != -1) {
                    n(sink, size, read);
                    return read;
                }
                mVar = this;
                mVar.f31293d = (byte) 2;
            } else {
                mVar = this;
            }
            if (mVar.f31293d == 2) {
                l();
                mVar.f31293d = (byte) 3;
                if (!mVar.f31294e.o1()) {
                    throw new IOException("gzip finished without exhausting source");
                }
            }
            return -1L;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f31294e.timeout();
    }
}
