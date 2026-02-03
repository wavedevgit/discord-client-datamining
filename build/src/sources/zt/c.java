package zt;

import iu.d;
import java.io.IOException;
import java.net.ProtocolException;
import ju.k;
import ju.x;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final e f56061a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f56062b;

    /* renamed from: c  reason: collision with root package name */
    private final d f56063c;

    /* renamed from: d  reason: collision with root package name */
    private final au.d f56064d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56065e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f56066f;

    /* renamed from: g  reason: collision with root package name */
    private final f f56067g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends ju.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f56068e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f56069i;

        /* renamed from: o  reason: collision with root package name */
        private long f56070o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f56071p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f56072q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f56072q = cVar;
            this.f56068e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f56069i) {
                return iOException;
            }
            this.f56069i = true;
            return this.f56072q.a(this.f56070o, false, true, iOException);
        }

        @Override // ju.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f56071p) {
                return;
            }
            this.f56071p = true;
            long j10 = this.f56068e;
            if (j10 != -1 && this.f56070o != j10) {
                throw new ProtocolException("unexpected end of stream");
            }
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // ju.j, okio.Sink, java.io.Flushable
        public void flush() {
            try {
                super.flush();
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // ju.j, okio.Sink
        public void v0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f56071p) {
                long j11 = this.f56068e;
                if (j11 != -1 && this.f56070o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f56068e + " bytes but received " + (this.f56070o + j10));
                }
                try {
                    super.v0(source, j10);
                    this.f56070o += j10;
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
        private final long f56073d;

        /* renamed from: e  reason: collision with root package name */
        private long f56074e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f56075i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f56076o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f56077p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f56078q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f56078q = cVar;
            this.f56073d = j10;
            this.f56075i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f56076o) {
                return iOException;
            }
            this.f56076o = true;
            if (iOException == null && this.f56075i) {
                this.f56075i = false;
                this.f56078q.i().w(this.f56078q.g());
            }
            return this.f56078q.a(this.f56074e, true, false, iOException);
        }

        @Override // ju.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f56077p) {
                return;
            }
            this.f56077p = true;
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // ju.k, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f56077p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f56075i) {
                        this.f56075i = false;
                        this.f56078q.i().w(this.f56078q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f56074e + read;
                    long j12 = this.f56073d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f56073d + " bytes but received " + j11);
                    }
                    this.f56074e = j11;
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

    public c(e call, okhttp3.e eventListener, d finder, au.d codec) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(eventListener, "eventListener");
        Intrinsics.checkNotNullParameter(finder, "finder");
        Intrinsics.checkNotNullParameter(codec, "codec");
        this.f56061a = call;
        this.f56062b = eventListener;
        this.f56063c = finder;
        this.f56064d = codec;
        this.f56067g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f56066f = true;
        this.f56063c.h(iOException);
        this.f56064d.c().H(this.f56061a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f56062b.s(this.f56061a, iOException);
            } else {
                this.f56062b.q(this.f56061a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f56062b.x(this.f56061a, iOException);
            } else {
                this.f56062b.v(this.f56061a, j10);
            }
        }
        return this.f56061a.t(this, z11, z10, iOException);
    }

    public final void b() {
        this.f56064d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f56065e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f56062b.r(this.f56061a);
        return new a(this, this.f56064d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f56064d.cancel();
        this.f56061a.t(this, true, true, null);
    }

    public final void e() {
        try {
            this.f56064d.a();
        } catch (IOException e10) {
            this.f56062b.s(this.f56061a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f56064d.h();
        } catch (IOException e10) {
            this.f56062b.s(this.f56061a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f56061a;
    }

    public final f h() {
        return this.f56067g;
    }

    public final okhttp3.e i() {
        return this.f56062b;
    }

    public final d j() {
        return this.f56063c;
    }

    public final boolean k() {
        return this.f56066f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f56063c.d().l().i(), this.f56067g.A().a().l().i());
    }

    public final boolean m() {
        return this.f56065e;
    }

    public final d.AbstractC0420d n() {
        this.f56061a.A();
        return this.f56064d.c().x(this);
    }

    public final void o() {
        this.f56064d.c().z();
    }

    public final void p() {
        this.f56061a.t(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String E0 = Response.E0(response, "Content-Type", null, 2, null);
            long d10 = this.f56064d.d(response);
            return new au.h(E0, d10, x.d(new b(this, this.f56064d.b(response), d10)));
        } catch (IOException e10) {
            this.f56062b.x(this.f56061a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f56064d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f56062b.x(this.f56061a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f56062b.y(this.f56061a, response);
    }

    public final void t() {
        this.f56062b.z(this.f56061a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f56062b.u(this.f56061a);
            this.f56064d.f(request);
            this.f56062b.t(this.f56061a, request);
        } catch (IOException e10) {
            this.f56062b.s(this.f56061a, e10);
            u(e10);
            throw e10;
        }
    }
}
