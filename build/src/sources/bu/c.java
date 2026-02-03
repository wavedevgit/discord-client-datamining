package bu;

import java.io.IOException;
import java.net.ProtocolException;
import kotlin.jvm.internal.Intrinsics;
import ku.d;
import lu.k;
import lu.x;
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
    private final e f6775a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f6776b;

    /* renamed from: c  reason: collision with root package name */
    private final d f6777c;

    /* renamed from: d  reason: collision with root package name */
    private final cu.d f6778d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f6779e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f6780f;

    /* renamed from: g  reason: collision with root package name */
    private final f f6781g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends lu.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f6782e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f6783i;

        /* renamed from: o  reason: collision with root package name */
        private long f6784o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f6785p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f6786q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f6786q = cVar;
            this.f6782e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f6783i) {
                return iOException;
            }
            this.f6783i = true;
            return this.f6786q.a(this.f6784o, false, true, iOException);
        }

        @Override // lu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f6785p) {
                return;
            }
            this.f6785p = true;
            long j10 = this.f6782e;
            if (j10 != -1 && this.f6784o != j10) {
                throw new ProtocolException("unexpected end of stream");
            }
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // lu.j, okio.Sink, java.io.Flushable
        public void flush() {
            try {
                super.flush();
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // lu.j, okio.Sink
        public void t0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f6785p) {
                long j11 = this.f6782e;
                if (j11 != -1 && this.f6784o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f6782e + " bytes but received " + (this.f6784o + j10));
                }
                try {
                    super.t0(source, j10);
                    this.f6784o += j10;
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
        private final long f6787d;

        /* renamed from: e  reason: collision with root package name */
        private long f6788e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f6789i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f6790o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f6791p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f6792q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f6792q = cVar;
            this.f6787d = j10;
            this.f6789i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f6790o) {
                return iOException;
            }
            this.f6790o = true;
            if (iOException == null && this.f6789i) {
                this.f6789i = false;
                this.f6792q.i().w(this.f6792q.g());
            }
            return this.f6792q.a(this.f6788e, true, false, iOException);
        }

        @Override // lu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f6791p) {
                return;
            }
            this.f6791p = true;
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // lu.k, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f6791p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f6789i) {
                        this.f6789i = false;
                        this.f6792q.i().w(this.f6792q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f6788e + read;
                    long j12 = this.f6787d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f6787d + " bytes but received " + j11);
                    }
                    this.f6788e = j11;
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

    public c(e call, okhttp3.e eventListener, d finder, cu.d codec) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(eventListener, "eventListener");
        Intrinsics.checkNotNullParameter(finder, "finder");
        Intrinsics.checkNotNullParameter(codec, "codec");
        this.f6775a = call;
        this.f6776b = eventListener;
        this.f6777c = finder;
        this.f6778d = codec;
        this.f6781g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f6780f = true;
        this.f6777c.h(iOException);
        this.f6778d.c().H(this.f6775a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f6776b.s(this.f6775a, iOException);
            } else {
                this.f6776b.q(this.f6775a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f6776b.x(this.f6775a, iOException);
            } else {
                this.f6776b.v(this.f6775a, j10);
            }
        }
        return this.f6775a.t(this, z11, z10, iOException);
    }

    public final void b() {
        this.f6778d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f6779e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f6776b.r(this.f6775a);
        return new a(this, this.f6778d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f6778d.cancel();
        this.f6775a.t(this, true, true, null);
    }

    public final void e() {
        try {
            this.f6778d.a();
        } catch (IOException e10) {
            this.f6776b.s(this.f6775a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f6778d.h();
        } catch (IOException e10) {
            this.f6776b.s(this.f6775a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f6775a;
    }

    public final f h() {
        return this.f6781g;
    }

    public final okhttp3.e i() {
        return this.f6776b;
    }

    public final d j() {
        return this.f6777c;
    }

    public final boolean k() {
        return this.f6780f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f6777c.d().l().i(), this.f6781g.A().a().l().i());
    }

    public final boolean m() {
        return this.f6779e;
    }

    public final d.AbstractC0460d n() {
        this.f6775a.A();
        return this.f6778d.c().x(this);
    }

    public final void o() {
        this.f6778d.c().z();
    }

    public final void p() {
        this.f6775a.t(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String D0 = Response.D0(response, "Content-Type", null, 2, null);
            long d10 = this.f6778d.d(response);
            return new cu.h(D0, d10, x.d(new b(this, this.f6778d.b(response), d10)));
        } catch (IOException e10) {
            this.f6776b.x(this.f6775a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f6778d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f6776b.x(this.f6775a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f6776b.y(this.f6775a, response);
    }

    public final void t() {
        this.f6776b.z(this.f6775a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f6776b.u(this.f6775a);
            this.f6778d.f(request);
            this.f6776b.t(this.f6775a, request);
        } catch (IOException e10) {
            this.f6776b.s(this.f6775a, e10);
            u(e10);
            throw e10;
        }
    }
}
