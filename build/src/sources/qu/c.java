package qu;

import av.k;
import av.x;
import java.io.IOException;
import java.net.ProtocolException;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.Sink;
import okio.Source;
import zu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final e f46247a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f46248b;

    /* renamed from: c  reason: collision with root package name */
    private final d f46249c;

    /* renamed from: d  reason: collision with root package name */
    private final ru.d f46250d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f46251e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f46252f;

    /* renamed from: g  reason: collision with root package name */
    private final f f46253g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends av.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f46254e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f46255i;

        /* renamed from: o  reason: collision with root package name */
        private long f46256o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f46257p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f46258q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f46258q = cVar;
            this.f46254e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f46255i) {
                return iOException;
            }
            this.f46255i = true;
            return this.f46258q.a(this.f46256o, false, true, iOException);
        }

        @Override // av.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f46257p) {
                return;
            }
            this.f46257p = true;
            long j10 = this.f46254e;
            if (j10 != -1 && this.f46256o != j10) {
                throw new ProtocolException("unexpected end of stream");
            }
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // av.j, okio.Sink, java.io.Flushable
        public void flush() {
            try {
                super.flush();
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // av.j, okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f46257p) {
                long j11 = this.f46254e;
                if (j11 != -1 && this.f46256o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f46254e + " bytes but received " + (this.f46256o + j10));
                }
                try {
                    super.u0(source, j10);
                    this.f46256o += j10;
                    return;
                } catch (IOException e10) {
                    throw a(e10);
                }
            }
            throw new IllegalStateException("closed");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class b extends k {

        /* renamed from: d  reason: collision with root package name */
        private final long f46259d;

        /* renamed from: e  reason: collision with root package name */
        private long f46260e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f46261i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f46262o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f46263p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f46264q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f46264q = cVar;
            this.f46259d = j10;
            this.f46261i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f46262o) {
                return iOException;
            }
            this.f46262o = true;
            if (iOException == null && this.f46261i) {
                this.f46261i = false;
                this.f46264q.i().w(this.f46264q.g());
            }
            return this.f46264q.a(this.f46260e, true, false, iOException);
        }

        @Override // av.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f46263p) {
                return;
            }
            this.f46263p = true;
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // av.k, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f46263p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f46261i) {
                        this.f46261i = false;
                        this.f46264q.i().w(this.f46264q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f46260e + read;
                    long j12 = this.f46259d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f46259d + " bytes but received " + j11);
                    }
                    this.f46260e = j11;
                    if (j11 == j12) {
                        a(null);
                    }
                    return read;
                } catch (IOException e10) {
                    throw a(e10);
                }
            }
            throw new IllegalStateException("closed");
        }
    }

    public c(e call, okhttp3.e eventListener, d finder, ru.d codec) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(eventListener, "eventListener");
        Intrinsics.checkNotNullParameter(finder, "finder");
        Intrinsics.checkNotNullParameter(codec, "codec");
        this.f46247a = call;
        this.f46248b = eventListener;
        this.f46249c = finder;
        this.f46250d = codec;
        this.f46253g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f46252f = true;
        this.f46249c.h(iOException);
        this.f46250d.c().H(this.f46247a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f46248b.s(this.f46247a, iOException);
            } else {
                this.f46248b.q(this.f46247a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f46248b.x(this.f46247a, iOException);
            } else {
                this.f46248b.v(this.f46247a, j10);
            }
        }
        return this.f46247a.u(this, z11, z10, iOException);
    }

    public final void b() {
        this.f46250d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f46251e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f46248b.r(this.f46247a);
        return new a(this, this.f46250d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f46250d.cancel();
        this.f46247a.u(this, true, true, null);
    }

    public final void e() {
        try {
            this.f46250d.a();
        } catch (IOException e10) {
            this.f46248b.s(this.f46247a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f46250d.h();
        } catch (IOException e10) {
            this.f46248b.s(this.f46247a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f46247a;
    }

    public final f h() {
        return this.f46253g;
    }

    public final okhttp3.e i() {
        return this.f46248b;
    }

    public final d j() {
        return this.f46249c;
    }

    public final boolean k() {
        return this.f46252f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f46249c.d().l().i(), this.f46253g.A().a().l().i());
    }

    public final boolean m() {
        return this.f46251e;
    }

    public final d.AbstractC0817d n() {
        this.f46247a.A();
        return this.f46250d.c().x(this);
    }

    public final void o() {
        this.f46250d.c().z();
    }

    public final void p() {
        this.f46247a.u(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String Z = Response.Z(response, "Content-Type", null, 2, null);
            long d10 = this.f46250d.d(response);
            return new ru.h(Z, d10, x.d(new b(this, this.f46250d.b(response), d10)));
        } catch (IOException e10) {
            this.f46248b.x(this.f46247a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f46250d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f46248b.x(this.f46247a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f46248b.y(this.f46247a, response);
    }

    public final void t() {
        this.f46248b.z(this.f46247a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f46248b.u(this.f46247a);
            this.f46250d.f(request);
            this.f46248b.t(this.f46247a, request);
        } catch (IOException e10) {
            this.f46248b.s(this.f46247a, e10);
            u(e10);
            throw e10;
        }
    }
}
