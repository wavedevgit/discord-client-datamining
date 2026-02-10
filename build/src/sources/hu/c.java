package hu;

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
import qu.d;
import ru.k;
import ru.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final e f26515a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.e f26516b;

    /* renamed from: c  reason: collision with root package name */
    private final d f26517c;

    /* renamed from: d  reason: collision with root package name */
    private final iu.d f26518d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f26519e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f26520f;

    /* renamed from: g  reason: collision with root package name */
    private final f f26521g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends ru.j {

        /* renamed from: e  reason: collision with root package name */
        private final long f26522e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f26523i;

        /* renamed from: o  reason: collision with root package name */
        private long f26524o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f26525p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f26526q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c cVar, Sink delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f26526q = cVar;
            this.f26522e = j10;
        }

        private final IOException a(IOException iOException) {
            if (this.f26523i) {
                return iOException;
            }
            this.f26523i = true;
            return this.f26526q.a(this.f26524o, false, true, iOException);
        }

        @Override // ru.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f26525p) {
                return;
            }
            this.f26525p = true;
            long j10 = this.f26522e;
            if (j10 != -1 && this.f26524o != j10) {
                throw new ProtocolException("unexpected end of stream");
            }
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // ru.j, okio.Sink, java.io.Flushable
        public void flush() {
            try {
                super.flush();
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // ru.j, okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f26525p) {
                long j11 = this.f26522e;
                if (j11 != -1 && this.f26524o + j10 > j11) {
                    throw new ProtocolException("expected " + this.f26522e + " bytes but received " + (this.f26524o + j10));
                }
                try {
                    super.u0(source, j10);
                    this.f26524o += j10;
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
        private final long f26527d;

        /* renamed from: e  reason: collision with root package name */
        private long f26528e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f26529i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f26530o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f26531p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ c f26532q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(c cVar, Source delegate, long j10) {
            super(delegate);
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            this.f26532q = cVar;
            this.f26527d = j10;
            this.f26529i = true;
            if (j10 == 0) {
                a(null);
            }
        }

        public final IOException a(IOException iOException) {
            if (this.f26530o) {
                return iOException;
            }
            this.f26530o = true;
            if (iOException == null && this.f26529i) {
                this.f26529i = false;
                this.f26532q.i().w(this.f26532q.g());
            }
            return this.f26532q.a(this.f26528e, true, false, iOException);
        }

        @Override // ru.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f26531p) {
                return;
            }
            this.f26531p = true;
            try {
                super.close();
                a(null);
            } catch (IOException e10) {
                throw a(e10);
            }
        }

        @Override // ru.k, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (!this.f26531p) {
                try {
                    long read = delegate().read(sink, j10);
                    if (this.f26529i) {
                        this.f26529i = false;
                        this.f26532q.i().w(this.f26532q.g());
                    }
                    if (read == -1) {
                        a(null);
                        return -1L;
                    }
                    long j11 = this.f26528e + read;
                    long j12 = this.f26527d;
                    if (j12 != -1 && j11 > j12) {
                        throw new ProtocolException("expected " + this.f26527d + " bytes but received " + j11);
                    }
                    this.f26528e = j11;
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

    public c(e call, okhttp3.e eventListener, d finder, iu.d codec) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(eventListener, "eventListener");
        Intrinsics.checkNotNullParameter(finder, "finder");
        Intrinsics.checkNotNullParameter(codec, "codec");
        this.f26515a = call;
        this.f26516b = eventListener;
        this.f26517c = finder;
        this.f26518d = codec;
        this.f26521g = codec.c();
    }

    private final void u(IOException iOException) {
        this.f26520f = true;
        this.f26517c.h(iOException);
        this.f26518d.c().H(this.f26515a, iOException);
    }

    public final IOException a(long j10, boolean z10, boolean z11, IOException iOException) {
        if (iOException != null) {
            u(iOException);
        }
        if (z11) {
            if (iOException != null) {
                this.f26516b.s(this.f26515a, iOException);
            } else {
                this.f26516b.q(this.f26515a, j10);
            }
        }
        if (z10) {
            if (iOException != null) {
                this.f26516b.x(this.f26515a, iOException);
            } else {
                this.f26516b.v(this.f26515a, j10);
            }
        }
        return this.f26515a.u(this, z11, z10, iOException);
    }

    public final void b() {
        this.f26518d.cancel();
    }

    public final Sink c(Request request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f26519e = z10;
        RequestBody c10 = request.c();
        Intrinsics.checkNotNull(c10);
        long contentLength = c10.contentLength();
        this.f26516b.r(this.f26515a);
        return new a(this, this.f26518d.e(request, contentLength), contentLength);
    }

    public final void d() {
        this.f26518d.cancel();
        this.f26515a.u(this, true, true, null);
    }

    public final void e() {
        try {
            this.f26518d.a();
        } catch (IOException e10) {
            this.f26516b.s(this.f26515a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void f() {
        try {
            this.f26518d.h();
        } catch (IOException e10) {
            this.f26516b.s(this.f26515a, e10);
            u(e10);
            throw e10;
        }
    }

    public final e g() {
        return this.f26515a;
    }

    public final f h() {
        return this.f26521g;
    }

    public final okhttp3.e i() {
        return this.f26516b;
    }

    public final d j() {
        return this.f26517c;
    }

    public final boolean k() {
        return this.f26520f;
    }

    public final boolean l() {
        return !Intrinsics.areEqual(this.f26517c.d().l().i(), this.f26521g.A().a().l().i());
    }

    public final boolean m() {
        return this.f26519e;
    }

    public final d.AbstractC0641d n() {
        this.f26515a.A();
        return this.f26518d.c().x(this);
    }

    public final void o() {
        this.f26518d.c().z();
    }

    public final void p() {
        this.f26515a.u(this, true, false, null);
    }

    public final ResponseBody q(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String Z = Response.Z(response, "Content-Type", null, 2, null);
            long d10 = this.f26518d.d(response);
            return new iu.h(Z, d10, x.d(new b(this, this.f26518d.b(response), d10)));
        } catch (IOException e10) {
            this.f26516b.x(this.f26515a, e10);
            u(e10);
            throw e10;
        }
    }

    public final Response.a r(boolean z10) {
        try {
            Response.a g10 = this.f26518d.g(z10);
            if (g10 != null) {
                g10.l(this);
                return g10;
            }
            return g10;
        } catch (IOException e10) {
            this.f26516b.x(this.f26515a, e10);
            u(e10);
            throw e10;
        }
    }

    public final void s(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f26516b.y(this.f26515a, response);
    }

    public final void t() {
        this.f26516b.z(this.f26515a);
    }

    public final void v() {
        a(-1L, true, true, null);
    }

    public final void w(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            this.f26516b.u(this.f26515a);
            this.f26518d.f(request);
            this.f26516b.t(this.f26515a, request);
        } catch (IOException e10) {
            this.f26516b.s(this.f26515a, e10);
            u(e10);
            throw e10;
        }
    }
}
