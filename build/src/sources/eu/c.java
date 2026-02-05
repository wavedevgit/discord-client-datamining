package eu;

import java.io.IOException;
import java.net.ProtocolException;
import kotlin.jvm.internal.Intrinsics;
import nu.d;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.Sink;
import okio.Source;
import ou.k;
import ou.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final e f21801a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f21802b;

    /* renamed from: c  reason: collision with root package name */
    private final d f21803c;

    /* renamed from: d  reason: collision with root package name */
    private final fu.d f21804d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21805e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f21806f;

    /* renamed from: g  reason: collision with root package name */
    private final f f21807g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends ou.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f21808e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f21809i;

        /* renamed from: o  reason: collision with root package name */
        private long f21810o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f21811p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f21812q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f21812q = cVar;
            this.f21808e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f21809i) {
                return iOException;
            }
            this.f21809i = true;
            return this.f21812q.a(this.f21810o, false, true, iOException);
        }

        @Override // ou.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f21811p) {
                return;
            }
            this.f21811p = true;
            long j10 = this.f21808e;
            if (j10 != -1 && this.f21810o != j10) {
                throw new ProtocolException("unexpected end of stream");
            }
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // ou.j, okio.Sink, java.io.Flushable
        public void flush() {
            try {
                super.flush();
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // ou.j, okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f21811p) {
                long j11 = this.f21808e;
                if (j11 != -1 && this.f21810o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f21808e + " bytes but received " + (this.f21810o + j10));
                }
                try {
                    super.u0(source, j10);
                    this.f21810o += j10;
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
        private final long f21813d;

        /* renamed from: e  reason: collision with root package name */
        private long f21814e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f21815i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f21816o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f21817p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f21818q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f21818q = cVar;
            this.f21813d = j10;
            this.f21815i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f21816o) {
                return iOException;
            }
            this.f21816o = true;
            if (iOException == null && this.f21815i) {
                this.f21815i = false;
                this.f21818q.i().w(this.f21818q.g());
            }
            return this.f21818q.a(this.f21814e, true, false, iOException);
        }

        @Override // ou.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f21817p) {
                return;
            }
            this.f21817p = true;
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // ou.k, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f21817p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f21815i) {
                        this.f21815i = false;
                        this.f21818q.i().w(this.f21818q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f21814e + read;
                    long j12 = this.f21813d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f21813d + " bytes but received " + j11);
                    }
                    this.f21814e = j11;
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

    public c(e call, okhttp3.e eventListener, d finder, fu.d codec) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(eventListener, "eventListener");
        Intrinsics.checkNotNullParameter(finder, "finder");
        Intrinsics.checkNotNullParameter(codec, "codec");
        this.f21801a = call;
        this.f21802b = eventListener;
        this.f21803c = finder;
        this.f21804d = codec;
        this.f21807g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f21806f = true;
        this.f21803c.h(iOException);
        this.f21804d.c().H(this.f21801a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f21802b.s(this.f21801a, iOException);
            } else {
                this.f21802b.q(this.f21801a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f21802b.x(this.f21801a, iOException);
            } else {
                this.f21802b.v(this.f21801a, j10);
            }
        }
        return this.f21801a.t(this, z11, z10, iOException);
    }

    public final void b() {
        this.f21804d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f21805e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f21802b.r(this.f21801a);
        return new a(this, this.f21804d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f21804d.cancel();
        this.f21801a.t(this, true, true, null);
    }

    public final void e() {
        try {
            this.f21804d.a();
        } catch (IOException e10) {
            this.f21802b.s(this.f21801a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f21804d.h();
        } catch (IOException e10) {
            this.f21802b.s(this.f21801a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f21801a;
    }

    public final f h() {
        return this.f21807g;
    }

    public final okhttp3.e i() {
        return this.f21802b;
    }

    public final d j() {
        return this.f21803c;
    }

    public final boolean k() {
        return this.f21806f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f21803c.d().l().i(), this.f21807g.A().a().l().i());
    }

    public final boolean m() {
        return this.f21805e;
    }

    public final d.AbstractC0543d n() {
        this.f21801a.A();
        return this.f21804d.c().x(this);
    }

    public final void o() {
        this.f21804d.c().z();
    }

    public final void p() {
        this.f21801a.t(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String D0 = Response.D0(response, "Content-Type", null, 2, null);
            long d10 = this.f21804d.d(response);
            return new fu.h(D0, d10, x.d(new b(this, this.f21804d.b(response), d10)));
        } catch (IOException e10) {
            this.f21802b.x(this.f21801a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f21804d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f21802b.x(this.f21801a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f21802b.y(this.f21801a, response);
    }

    public final void t() {
        this.f21802b.z(this.f21801a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f21802b.u(this.f21801a);
            this.f21804d.f(request);
            this.f21802b.t(this.f21801a, request);
        } catch (IOException e10) {
            this.f21802b.s(this.f21801a, e10);
            u(e10);
            throw e10;
        }
    }
}
