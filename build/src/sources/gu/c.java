package gu;

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
import pu.d;
import qu.k;
import qu.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final e f25604a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f25605b;

    /* renamed from: c  reason: collision with root package name */
    private final d f25606c;

    /* renamed from: d  reason: collision with root package name */
    private final hu.d f25607d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f25608e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f25609f;

    /* renamed from: g  reason: collision with root package name */
    private final f f25610g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends qu.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f25611e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f25612i;

        /* renamed from: o  reason: collision with root package name */
        private long f25613o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f25614p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f25615q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f25615q = cVar;
            this.f25611e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f25612i) {
                return iOException;
            }
            this.f25612i = true;
            return this.f25615q.a(this.f25613o, false, true, iOException);
        }

        @Override // qu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f25614p) {
                return;
            }
            this.f25614p = true;
            long j10 = this.f25611e;
            if (j10 != -1 && this.f25613o != j10) {
                throw new ProtocolException("unexpected end of stream");
            }
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // qu.j, okio.Sink, java.io.Flushable
        public void flush() {
            try {
                super.flush();
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // qu.j, okio.Sink
        public void w0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f25614p) {
                long j11 = this.f25611e;
                if (j11 != -1 && this.f25613o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f25611e + " bytes but received " + (this.f25613o + j10));
                }
                try {
                    super.w0(source, j10);
                    this.f25613o += j10;
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
        private final long f25616d;

        /* renamed from: e  reason: collision with root package name */
        private long f25617e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f25618i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f25619o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f25620p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f25621q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f25621q = cVar;
            this.f25616d = j10;
            this.f25618i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f25619o) {
                return iOException;
            }
            this.f25619o = true;
            if (iOException == null && this.f25618i) {
                this.f25618i = false;
                this.f25621q.i().w(this.f25621q.g());
            }
            return this.f25621q.a(this.f25617e, true, false, iOException);
        }

        @Override // qu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f25620p) {
                return;
            }
            this.f25620p = true;
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // qu.k, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f25620p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f25618i) {
                        this.f25618i = false;
                        this.f25621q.i().w(this.f25621q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f25617e + read;
                    long j12 = this.f25616d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f25616d + " bytes but received " + j11);
                    }
                    this.f25617e = j11;
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

    public c(e call, okhttp3.e eventListener, d finder, hu.d codec) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(eventListener, "eventListener");
        Intrinsics.checkNotNullParameter(finder, "finder");
        Intrinsics.checkNotNullParameter(codec, "codec");
        this.f25604a = call;
        this.f25605b = eventListener;
        this.f25606c = finder;
        this.f25607d = codec;
        this.f25610g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f25609f = true;
        this.f25606c.h(iOException);
        this.f25607d.c().H(this.f25604a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f25605b.s(this.f25604a, iOException);
            } else {
                this.f25605b.q(this.f25604a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f25605b.x(this.f25604a, iOException);
            } else {
                this.f25605b.v(this.f25604a, j10);
            }
        }
        return this.f25604a.u(this, z11, z10, iOException);
    }

    public final void b() {
        this.f25607d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f25608e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f25605b.r(this.f25604a);
        return new a(this, this.f25607d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f25607d.cancel();
        this.f25604a.u(this, true, true, null);
    }

    public final void e() {
        try {
            this.f25607d.a();
        } catch (IOException e10) {
            this.f25605b.s(this.f25604a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f25607d.h();
        } catch (IOException e10) {
            this.f25605b.s(this.f25604a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f25604a;
    }

    public final f h() {
        return this.f25610g;
    }

    public final okhttp3.e i() {
        return this.f25605b;
    }

    public final d j() {
        return this.f25606c;
    }

    public final boolean k() {
        return this.f25609f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f25606c.d().l().i(), this.f25610g.A().a().l().i());
    }

    public final boolean m() {
        return this.f25608e;
    }

    public final d.AbstractC0593d n() {
        this.f25604a.A();
        return this.f25607d.c().x(this);
    }

    public final void o() {
        this.f25607d.c().z();
    }

    public final void p() {
        this.f25604a.u(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String Y = Response.Y(response, "Content-Type", null, 2, null);
            long d10 = this.f25607d.d(response);
            return new hu.h(Y, d10, x.d(new b(this, this.f25607d.b(response), d10)));
        } catch (IOException e10) {
            this.f25605b.x(this.f25604a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f25607d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f25605b.x(this.f25604a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f25605b.y(this.f25604a, response);
    }

    public final void t() {
        this.f25605b.z(this.f25604a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f25605b.u(this.f25604a);
            this.f25607d.f(request);
            this.f25605b.t(this.f25604a, request);
        } catch (IOException e10) {
            this.f25605b.s(this.f25604a, e10);
            u(e10);
            throw e10;
        }
    }
}
