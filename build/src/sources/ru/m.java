package ru;

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
    private byte f49418d;

    /* renamed from: e  reason: collision with root package name */
    private final f0 f49419e;

    /* renamed from: i  reason: collision with root package name */
    private final Inflater f49420i;

    /* renamed from: o  reason: collision with root package name */
    private final o f49421o;

    /* renamed from: p  reason: collision with root package name */
    private final CRC32 f49422p;

    public m(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        f0 f0Var = new f0(source);
        this.f49419e = f0Var;
        Inflater inflater = new Inflater(true);
        this.f49420i = inflater;
        this.f49421o = new o((BufferedSource) f0Var, inflater);
        this.f49422p = new CRC32();
    }

    private final void a(String str, int i10, int i11) {
        if (i11 == i10) {
            return;
        }
        throw new IOException(str + ": actual 0x" + StringsKt.t0(okio.b.l(i11), 8, '0') + " != expected 0x" + StringsKt.t0(okio.b.l(i10), 8, '0'));
    }

    private final void g() {
        boolean z10;
        this.f49419e.Q0(10L);
        byte Z = this.f49419e.f49378e.Z(3L);
        if (((Z >> 1) & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            m(this.f49419e.f49378e, 0L, 10L);
        }
        a("ID1ID2", 8075, this.f49419e.readShort());
        this.f49419e.skip(8L);
        if (((Z >> 2) & 1) == 1) {
            this.f49419e.Q0(2L);
            if (z10) {
                m(this.f49419e.f49378e, 0L, 2L);
            }
            long K0 = this.f49419e.f49378e.K0() & 65535;
            this.f49419e.Q0(K0);
            if (z10) {
                m(this.f49419e.f49378e, 0L, K0);
            }
            this.f49419e.skip(K0);
        }
        if (((Z >> 3) & 1) == 1) {
            long a10 = this.f49419e.a((byte) 0);
            if (a10 != -1) {
                if (z10) {
                    m(this.f49419e.f49378e, 0L, a10 + 1);
                }
                this.f49419e.skip(a10 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (((Z >> 4) & 1) == 1) {
            long a11 = this.f49419e.a((byte) 0);
            if (a11 != -1) {
                if (z10) {
                    m(this.f49419e.f49378e, 0L, a11 + 1);
                }
                this.f49419e.skip(a11 + 1);
            } else {
                throw new EOFException();
            }
        }
        if (z10) {
            a("FHCRC", this.f49419e.K0(), (short) this.f49422p.getValue());
            this.f49422p.reset();
        }
    }

    private final void k() {
        a("CRC", this.f49419e.O1(), (int) this.f49422p.getValue());
        a("ISIZE", this.f49419e.O1(), (int) this.f49420i.getBytesWritten());
    }

    private final void m(Buffer buffer, long j10, long j11) {
        int i10;
        g0 g0Var = buffer.f42330d;
        Intrinsics.checkNotNull(g0Var);
        while (true) {
            int i11 = g0Var.f49392c;
            int i12 = g0Var.f49391b;
            if (j10 < i11 - i12) {
                break;
            }
            j10 -= i11 - i12;
            g0Var = g0Var.f49395f;
            Intrinsics.checkNotNull(g0Var);
        }
        while (j11 > 0) {
            int min = (int) Math.min(g0Var.f49392c - i10, j11);
            this.f49422p.update(g0Var.f49390a, (int) (g0Var.f49391b + j10), min);
            j11 -= min;
            g0Var = g0Var.f49395f;
            Intrinsics.checkNotNull(g0Var);
            j10 = 0;
        }
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f49421o.close();
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
            if (this.f49418d == 0) {
                g();
                this.f49418d = (byte) 1;
            }
            if (this.f49418d == 1) {
                long size = sink.size();
                long read = this.f49421o.read(sink, j10);
                if (read != -1) {
                    m(sink, size, read);
                    return read;
                }
                mVar = this;
                mVar.f49418d = (byte) 2;
            } else {
                mVar = this;
            }
            if (mVar.f49418d == 2) {
                k();
                mVar.f49418d = (byte) 3;
                if (!mVar.f49419e.k1()) {
                    throw new IOException("gzip finished without exhausting source");
                }
            }
            return -1L;
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f49419e.timeout();
    }
}
