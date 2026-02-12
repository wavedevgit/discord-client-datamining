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
    private final e f45679a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f45680b;

    /* renamed from: c  reason: collision with root package name */
    private final d f45681c;

    /* renamed from: d  reason: collision with root package name */
    private final ru.d f45682d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f45683e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f45684f;

    /* renamed from: g  reason: collision with root package name */
    private final f f45685g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends av.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f45686e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f45687i;

        /* renamed from: o  reason: collision with root package name */
        private long f45688o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f45689p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f45690q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f45690q = cVar;
            this.f45686e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f45687i) {
                return iOException;
            }
            this.f45687i = true;
            return this.f45690q.a(this.f45688o, false, true, iOException);
        }

        @Override // av.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f45689p) {
                return;
            }
            this.f45689p = true;
            long j10 = this.f45686e;
            if (j10 != -1 && this.f45688o != j10) {
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
            if (!this.f45689p) {
                long j11 = this.f45686e;
                if (j11 != -1 && this.f45688o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f45686e + " bytes but received " + (this.f45688o + j10));
                }
                try {
                    super.u0(source, j10);
                    this.f45688o += j10;
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
        private final long f45691d;

        /* renamed from: e  reason: collision with root package name */
        private long f45692e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f45693i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f45694o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f45695p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f45696q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f45696q = cVar;
            this.f45691d = j10;
            this.f45693i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f45694o) {
                return iOException;
            }
            this.f45694o = true;
            if (iOException == null && this.f45693i) {
                this.f45693i = false;
                this.f45696q.i().w(this.f45696q.g());
            }
            return this.f45696q.a(this.f45692e, true, false, iOException);
        }

        @Override // av.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f45695p) {
                return;
            }
            this.f45695p = true;
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
            if (!this.f45695p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f45693i) {
                        this.f45693i = false;
                        this.f45696q.i().w(this.f45696q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f45692e + read;
                    long j12 = this.f45691d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f45691d + " bytes but received " + j11);
                    }
                    this.f45692e = j11;
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
        this.f45679a = call;
        this.f45680b = eventListener;
        this.f45681c = finder;
        this.f45682d = codec;
        this.f45685g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f45684f = true;
        this.f45681c.h(iOException);
        this.f45682d.c().H(this.f45679a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f45680b.s(this.f45679a, iOException);
            } else {
                this.f45680b.q(this.f45679a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f45680b.x(this.f45679a, iOException);
            } else {
                this.f45680b.v(this.f45679a, j10);
            }
        }
        return this.f45679a.u(this, z11, z10, iOException);
    }

    public final void b() {
        this.f45682d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f45683e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f45680b.r(this.f45679a);
        return new a(this, this.f45682d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f45682d.cancel();
        this.f45679a.u(this, true, true, null);
    }

    public final void e() {
        try {
            this.f45682d.a();
        } catch (IOException e10) {
            this.f45680b.s(this.f45679a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f45682d.h();
        } catch (IOException e10) {
            this.f45680b.s(this.f45679a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f45679a;
    }

    public final f h() {
        return this.f45685g;
    }

    public final okhttp3.e i() {
        return this.f45680b;
    }

    public final d j() {
        return this.f45681c;
    }

    public final boolean k() {
        return this.f45684f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f45681c.d().l().i(), this.f45685g.A().a().l().i());
    }

    public final boolean m() {
        return this.f45683e;
    }

    public final d.AbstractC0817d n() {
        this.f45679a.A();
        return this.f45682d.c().x(this);
    }

    public final void o() {
        this.f45682d.c().z();
    }

    public final void p() {
        this.f45679a.u(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String Z = Response.Z(response, "Content-Type", null, 2, null);
            long d10 = this.f45682d.d(response);
            return new ru.h(Z, d10, x.d(new b(this, this.f45682d.b(response), d10)));
        } catch (IOException e10) {
            this.f45680b.x(this.f45679a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f45682d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f45680b.x(this.f45679a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f45680b.y(this.f45679a, response);
    }

    public final void t() {
        this.f45680b.z(this.f45679a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f45680b.u(this.f45679a);
            this.f45682d.f(request);
            this.f45680b.t(this.f45679a, request);
        } catch (IOException e10) {
            this.f45680b.s(this.f45679a, e10);
            u(e10);
            throw e10;
        }
    }
}
