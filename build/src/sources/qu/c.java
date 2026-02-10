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
    private final e f45678a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f45679b;

    /* renamed from: c  reason: collision with root package name */
    private final d f45680c;

    /* renamed from: d  reason: collision with root package name */
    private final ru.d f45681d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f45682e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f45683f;

    /* renamed from: g  reason: collision with root package name */
    private final f f45684g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends av.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f45685e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f45686i;

        /* renamed from: o  reason: collision with root package name */
        private long f45687o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f45688p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f45689q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f45689q = cVar;
            this.f45685e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f45686i) {
                return iOException;
            }
            this.f45686i = true;
            return this.f45689q.a(this.f45687o, false, true, iOException);
        }

        @Override // av.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f45688p) {
                return;
            }
            this.f45688p = true;
            long j10 = this.f45685e;
            if (j10 != -1 && this.f45687o != j10) {
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
            if (!this.f45688p) {
                long j11 = this.f45685e;
                if (j11 != -1 && this.f45687o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f45685e + " bytes but received " + (this.f45687o + j10));
                }
                try {
                    super.u0(source, j10);
                    this.f45687o += j10;
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
        private final long f45690d;

        /* renamed from: e  reason: collision with root package name */
        private long f45691e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f45692i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f45693o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f45694p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f45695q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f45695q = cVar;
            this.f45690d = j10;
            this.f45692i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f45693o) {
                return iOException;
            }
            this.f45693o = true;
            if (iOException == null && this.f45692i) {
                this.f45692i = false;
                this.f45695q.i().w(this.f45695q.g());
            }
            return this.f45695q.a(this.f45691e, true, false, iOException);
        }

        @Override // av.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f45694p) {
                return;
            }
            this.f45694p = true;
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
            if (!this.f45694p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f45692i) {
                        this.f45692i = false;
                        this.f45695q.i().w(this.f45695q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f45691e + read;
                    long j12 = this.f45690d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f45690d + " bytes but received " + j11);
                    }
                    this.f45691e = j11;
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
        this.f45678a = call;
        this.f45679b = eventListener;
        this.f45680c = finder;
        this.f45681d = codec;
        this.f45684g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f45683f = true;
        this.f45680c.h(iOException);
        this.f45681d.c().H(this.f45678a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f45679b.s(this.f45678a, iOException);
            } else {
                this.f45679b.q(this.f45678a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f45679b.x(this.f45678a, iOException);
            } else {
                this.f45679b.v(this.f45678a, j10);
            }
        }
        return this.f45678a.u(this, z11, z10, iOException);
    }

    public final void b() {
        this.f45681d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f45682e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f45679b.r(this.f45678a);
        return new a(this, this.f45681d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f45681d.cancel();
        this.f45678a.u(this, true, true, null);
    }

    public final void e() {
        try {
            this.f45681d.a();
        } catch (IOException e10) {
            this.f45679b.s(this.f45678a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f45681d.h();
        } catch (IOException e10) {
            this.f45679b.s(this.f45678a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f45678a;
    }

    public final f h() {
        return this.f45684g;
    }

    public final okhttp3.e i() {
        return this.f45679b;
    }

    public final d j() {
        return this.f45680c;
    }

    public final boolean k() {
        return this.f45683f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f45680c.d().l().i(), this.f45684g.A().a().l().i());
    }

    public final boolean m() {
        return this.f45682e;
    }

    public final d.AbstractC0817d n() {
        this.f45678a.A();
        return this.f45681d.c().x(this);
    }

    public final void o() {
        this.f45681d.c().z();
    }

    public final void p() {
        this.f45678a.u(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String Z = Response.Z(response, "Content-Type", null, 2, null);
            long d10 = this.f45681d.d(response);
            return new ru.h(Z, d10, x.d(new b(this, this.f45681d.b(response), d10)));
        } catch (IOException e10) {
            this.f45679b.x(this.f45678a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f45681d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f45679b.x(this.f45678a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f45679b.y(this.f45678a, response);
    }

    public final void t() {
        this.f45679b.z(this.f45678a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f45679b.u(this.f45678a);
            this.f45681d.f(request);
            this.f45679b.t(this.f45678a, request);
        } catch (IOException e10) {
            this.f45679b.s(this.f45678a, e10);
            u(e10);
            throw e10;
        }
    }
}
