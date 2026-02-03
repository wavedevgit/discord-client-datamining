package ju;

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
    private byte f32390d;

    /* renamed from: e  reason: collision with root package name */
    private final f0 f32391e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f32392i;

    /* renamed from: o  reason: collision with root package name */
    private final o f32393o;

    /* renamed from: p  reason: collision with root package name */
    private final CRC32 f32394p;

    public m(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        f0 f0Var = new f0(source);
        this.f32391e = f0Var;
        Inflater inflater = new Inflater(true);
        this.f32392i = inflater;
        this.f32393o = new o((BufferedSource) f0Var, inflater);
        this.f32394p = new CRC32();
    }

    private final void a(String str, int i10, int i11) {
        if (i11 == i10) {
            return;
        }
        throw new IOException(str + ": actual 0x" + StringsKt.t0(okio.b.l(i11), 8, '0') + " != expected 0x" + StringsKt.t0(okio.b.l(i10), 8, '0'));
    }

    private final void h() {
        boolean z10;
        this.f32391e.U0(10L);
        byte G0 = this.f32391e.f32350e.G0(3L);
        if (((G0 >> 1) & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            n(this.f32391e.f32350e, 0L, 10L);
        }
        a("ID1ID2", 8075, this.f32391e.readShort());
        this.f32391e.skip(8L);
        if (((G0 >> 2) & 1) == 1) {
            this.f32391e.U0(2L);
            if (z10) {
                n(this.f32391e.f32350e, 0L, 2L);
            }
            long P0 = this.f32391e.f32350e.P0() & 65535;
            this.f32391e.U0(P0);
            if (z10) {
                n(this.f32391e.f32350e, 0L, P0);
            }
            this.f32391e.skip(P0);
        }
        if (((G0 >> 3) & 1) == 1) {
            long a10 = this.f32391e.a((byte) 0);
            if (a10 != -1) {
                if (z10) {
                    n(this.f32391e.f32350e, 0L, a10 + 1);
                }
                this.f32391e.skip(a10 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (((G0 >> 4) & 1) == 1) {
            long a11 = this.f32391e.a((byte) 0);
            if (a11 != -1) {
                if (z10) {
                    n(this.f32391e.f32350e, 0L, a11 + 1);
                }
                this.f32391e.skip(a11 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (z10) {
            a("FHCRC", this.f32391e.P0(), (short) this.f32394p.getValue());
            this.f32394p.reset();
        }
    }

    private final void l() {
        a("CRC", this.f32391e.Q1(), (int) this.f32394p.getValue());
        a("ISIZE", this.f32391e.Q1(), (int) this.f32392i.getBytesWritten());
    }

    private final void n(Buffer buffer, long j10, long j11) {
        int i10;
        g0 g0Var = buffer.f44496d;
        Intrinsics.checkNotNull(g0Var);
        while (true) {
            int i11 = g0Var.f32364c;
            int i12 = g0Var.f32363b;
            if (j10 < i11 - i12) {
                break;
            }
            j10 -= i11 - i12;
            g0Var = g0Var.f32367f;
            Intrinsics.checkNotNull(g0Var);
        }
        while (j11 > 0) {
            int min = (int) Math.min(g0Var.f32364c - i10, j11);
            this.f32394p.update(g0Var.f32362a, (int) (g0Var.f32363b + j10), min);
            j11 -= min;
            g0Var = g0Var.f32367f;
            Intrinsics.checkNotNull(g0Var);
            j10 = 0;
        }
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f32393o.close();
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
            if (this.f32390d == 0) {
                h();
                this.f32390d = (byte) 1;
            }
            if (this.f32390d == 1) {
                long size = sink.size();
                long read = this.f32393o.read(sink, j10);
                if (read != -1) {
                    n(sink, size, read);
                    return read;
                }
                mVar = this;
                mVar.f32390d = (byte) 2;
            } else {
                mVar = this;
            }
            if (mVar.f32390d == 2) {
                l();
                mVar.f32390d = (byte) 3;
                if (!mVar.f32391e.o1()) {
                    throw new IOException("gzip finished without exhausting source");
                }
            }
            return -1L;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f32391e.timeout();
    }
}
