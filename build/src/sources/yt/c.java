package yt;

import hu.d;
import iu.k;
import iu.x;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final e f54981a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f54982b;

    /* renamed from: c  reason: collision with root package name */
    private final d f54983c;

    /* renamed from: d  reason: collision with root package name */
    private final zt.d f54984d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54985e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f54986f;

    /* renamed from: g  reason: collision with root package name */
    private final f f54987g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends iu.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f54988e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f54989i;

        /* renamed from: o  reason: collision with root package name */
        private long f54990o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f54991p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f54992q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f54992q = cVar;
            this.f54988e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f54989i) {
                return iOException;
            }
            this.f54989i = true;
            return this.f54992q.a(this.f54990o, false, true, iOException);
        }

        @Override // iu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f54991p) {
                return;
            }
            this.f54991p = true;
            long j10 = this.f54988e;
            if (j10 != -1 && this.f54990o != j10) {
                throw new ProtocolException("unexpected end of stream");
            }
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // iu.j, okio.Sink, java.io.Flushable
        public void flush() {
            try {
                super.flush();
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // iu.j, okio.Sink
        public void t0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f54991p) {
                long j11 = this.f54988e;
                if (j11 != -1 && this.f54990o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f54988e + " bytes but received " + (this.f54990o + j10));
                }
                try {
                    super.t0(source, j10);
                    this.f54990o += j10;
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
        private final long f54993d;

        /* renamed from: e  reason: collision with root package name */
        private long f54994e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f54995i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f54996o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f54997p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f54998q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f54998q = cVar;
            this.f54993d = j10;
            this.f54995i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f54996o) {
                return iOException;
            }
            this.f54996o = true;
            if (iOException == null && this.f54995i) {
                this.f54995i = false;
                this.f54998q.i().w(this.f54998q.g());
            }
            return this.f54998q.a(this.f54994e, true, false, iOException);
        }

        @Override // iu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f54997p) {
                return;
            }
            this.f54997p = true;
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // iu.k, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f54997p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f54995i) {
                        this.f54995i = false;
                        this.f54998q.i().w(this.f54998q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f54994e + read;
                    long j12 = this.f54993d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f54993d + " bytes but received " + j11);
                    }
                    this.f54994e = j11;
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

    public c(e call, okhttp3.e eventListener, d finder, zt.d codec) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(eventListener, "eventListener");
        Intrinsics.checkNotNullParameter(finder, "finder");
        Intrinsics.checkNotNullParameter(codec, "codec");
        this.f54981a = call;
        this.f54982b = eventListener;
        this.f54983c = finder;
        this.f54984d = codec;
        this.f54987g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f54986f = true;
        this.f54983c.h(iOException);
        this.f54984d.c().H(this.f54981a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f54982b.s(this.f54981a, iOException);
            } else {
                this.f54982b.q(this.f54981a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f54982b.x(this.f54981a, iOException);
            } else {
                this.f54982b.v(this.f54981a, j10);
            }
        }
        return this.f54981a.t(this, z11, z10, iOException);
    }

    public final void b() {
        this.f54984d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f54985e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f54982b.r(this.f54981a);
        return new a(this, this.f54984d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f54984d.cancel();
        this.f54981a.t(this, true, true, null);
    }

    public final void e() {
        try {
            this.f54984d.a();
        } catch (IOException e10) {
            this.f54982b.s(this.f54981a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f54984d.h();
        } catch (IOException e10) {
            this.f54982b.s(this.f54981a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f54981a;
    }

    public final f h() {
        return this.f54987g;
    }

    public final okhttp3.e i() {
        return this.f54982b;
    }

    public final d j() {
        return this.f54983c;
    }

    public final boolean k() {
        return this.f54986f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f54983c.d().l().i(), this.f54987g.A().a().l().i());
    }

    public final boolean m() {
        return this.f54985e;
    }

    public final d.AbstractC0367d n() {
        this.f54981a.A();
        return this.f54984d.c().x(this);
    }

    public final void o() {
        this.f54984d.c().z();
    }

    public final void p() {
        this.f54981a.t(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String D0 = Response.D0(response, "Content-Type", null, 2, null);
            long d10 = this.f54984d.d(response);
            return new zt.h(D0, d10, x.d(new b(this, this.f54984d.b(response), d10)));
        } catch (IOException e10) {
            this.f54982b.x(this.f54981a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f54984d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f54982b.x(this.f54981a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f54982b.y(this.f54981a, response);
    }

    public final void t() {
        this.f54982b.z(this.f54981a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f54982b.u(this.f54981a);
            this.f54984d.f(request);
            this.f54982b.t(this.f54981a, request);
        } catch (IOException e10) {
            this.f54982b.s(this.f54981a, e10);
            u(e10);
            throw e10;
        }
    }
}
