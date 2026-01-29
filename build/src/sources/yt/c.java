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
    private final e f54965a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f54966b;

    /* renamed from: c  reason: collision with root package name */
    private final d f54967c;

    /* renamed from: d  reason: collision with root package name */
    private final zt.d f54968d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54969e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f54970f;

    /* renamed from: g  reason: collision with root package name */
    private final f f54971g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends iu.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f54972e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f54973i;

        /* renamed from: o  reason: collision with root package name */
        private long f54974o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f54975p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f54976q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f54976q = cVar;
            this.f54972e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f54973i) {
                return iOException;
            }
            this.f54973i = true;
            return this.f54976q.a(this.f54974o, false, true, iOException);
        }

        @Override // iu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f54975p) {
                return;
            }
            this.f54975p = true;
            long j10 = this.f54972e;
            if (j10 != -1 && this.f54974o != j10) {
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
            if (!this.f54975p) {
                long j11 = this.f54972e;
                if (j11 != -1 && this.f54974o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f54972e + " bytes but received " + (this.f54974o + j10));
                }
                try {
                    super.t0(source, j10);
                    this.f54974o += j10;
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
        private final long f54977d;

        /* renamed from: e  reason: collision with root package name */
        private long f54978e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f54979i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f54980o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f54981p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f54982q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f54982q = cVar;
            this.f54977d = j10;
            this.f54979i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f54980o) {
                return iOException;
            }
            this.f54980o = true;
            if (iOException == null && this.f54979i) {
                this.f54979i = false;
                this.f54982q.i().w(this.f54982q.g());
            }
            return this.f54982q.a(this.f54978e, true, false, iOException);
        }

        @Override // iu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f54981p) {
                return;
            }
            this.f54981p = true;
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
            if (!this.f54981p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f54979i) {
                        this.f54979i = false;
                        this.f54982q.i().w(this.f54982q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f54978e + read;
                    long j12 = this.f54977d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f54977d + " bytes but received " + j11);
                    }
                    this.f54978e = j11;
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
        this.f54965a = call;
        this.f54966b = eventListener;
        this.f54967c = finder;
        this.f54968d = codec;
        this.f54971g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f54970f = true;
        this.f54967c.h(iOException);
        this.f54968d.c().H(this.f54965a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f54966b.s(this.f54965a, iOException);
            } else {
                this.f54966b.q(this.f54965a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f54966b.x(this.f54965a, iOException);
            } else {
                this.f54966b.v(this.f54965a, j10);
            }
        }
        return this.f54965a.t(this, z11, z10, iOException);
    }

    public final void b() {
        this.f54968d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f54969e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f54966b.r(this.f54965a);
        return new a(this, this.f54968d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f54968d.cancel();
        this.f54965a.t(this, true, true, null);
    }

    public final void e() {
        try {
            this.f54968d.a();
        } catch (IOException e10) {
            this.f54966b.s(this.f54965a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f54968d.h();
        } catch (IOException e10) {
            this.f54966b.s(this.f54965a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f54965a;
    }

    public final f h() {
        return this.f54971g;
    }

    public final okhttp3.e i() {
        return this.f54966b;
    }

    public final d j() {
        return this.f54967c;
    }

    public final boolean k() {
        return this.f54970f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f54967c.d().l().i(), this.f54971g.A().a().l().i());
    }

    public final boolean m() {
        return this.f54969e;
    }

    public final d.AbstractC0367d n() {
        this.f54965a.A();
        return this.f54968d.c().x(this);
    }

    public final void o() {
        this.f54968d.c().z();
    }

    public final void p() {
        this.f54965a.t(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String D0 = Response.D0(response, "Content-Type", null, 2, null);
            long d10 = this.f54968d.d(response);
            return new zt.h(D0, d10, x.d(new b(this, this.f54968d.b(response), d10)));
        } catch (IOException e10) {
            this.f54966b.x(this.f54965a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f54968d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f54966b.x(this.f54965a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f54966b.y(this.f54965a, response);
    }

    public final void t() {
        this.f54966b.z(this.f54965a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f54966b.u(this.f54965a);
            this.f54968d.f(request);
            this.f54966b.t(this.f54965a, request);
        } catch (IOException e10) {
            this.f54966b.s(this.f54965a, e10);
            u(e10);
            throw e10;
        }
    }
}
