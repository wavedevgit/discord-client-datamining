package ru;

import java.io.EOFException;
import java.io.IOException;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSource;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o implements Source {

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f49426d;

    /* renamed from: e  reason: collision with root package name */
    private final Inflater f49427e;

    /* renamed from: i  reason: collision with root package name */
    private int f49428i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f49429o;

    public o(BufferedSource source, Inflater inflater) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        this.f49426d = source;
        this.f49427e = inflater;
    }

    private final void k() {
        int i10 = this.f49428i;
        if (i10 == 0) {
            return;
        }
        int remaining = i10 - this.f49427e.getRemaining();
        this.f49428i -= remaining;
        this.f49426d.skip(remaining);
    }

    public final long a(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (!this.f49429o) {
                if (i10 == 0) {
                    return 0L;
                }
                try {
                    g0 s12 = sink.s1(1);
                    g();
                    int inflate = this.f49427e.inflate(s12.f49390a, s12.f49392c, (int) Math.min(j10, 8192 - s12.f49392c));
                    k();
                    if (inflate > 0) {
                        s12.f49392c += inflate;
                        long j11 = inflate;
                        sink.W0(sink.size() + j11);
                        return j11;
                    }
                    if (s12.f49391b == s12.f49392c) {
                        sink.f42330d = s12.b();
                        h0.b(s12);
                    }
                    return 0L;
                } catch (DataFormatException e10) {
                    throw new IOException(e10);
                }
            }
            throw new IllegalStateException("closed");
        }
        throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f49429o) {
            return;
        }
        this.f49427e.end();
        this.f49429o = true;
        this.f49426d.close();
    }

    public final boolean g() {
        if (!this.f49427e.needsInput()) {
            return false;
        }
        if (this.f49426d.k1()) {
            return true;
        }
        g0 g0Var = this.f49426d.e().f42330d;
        Intrinsics.checkNotNull(g0Var);
        int i10 = g0Var.f49392c;
        int i11 = g0Var.f49391b;
        int i12 = i10 - i11;
        this.f49428i = i12;
        this.f49427e.setInput(g0Var.f49390a, i11, i12);
        return false;
    }

    @Override // okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        do {
            long a10 = a(sink, j10);
            if (a10 > 0) {
                return a10;
            }
            if (this.f49427e.finished() || this.f49427e.needsDictionary()) {
                return -1L;
            }
        } while (!this.f49426d.k1());
        throw new EOFException("source exhausted prematurely");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f49426d.timeout();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public o(Source source, Inflater inflater) {
        this(x.d(source), inflater);
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
    }
}
