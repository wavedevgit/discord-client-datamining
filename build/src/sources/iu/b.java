package iu;

import hu.i;
import hu.k;
import java.io.EOFException;
import java.io.IOException;
import java.net.ProtocolException;
import java.net.Proxy;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okhttp3.CookieJar;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.Sink;
import okio.Source;
import okio.Timeout;
import qu.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements hu.d {

    /* renamed from: h  reason: collision with root package name */
    public static final d f29388h = new d(null);

    /* renamed from: a  reason: collision with root package name */
    private final OkHttpClient f29389a;

    /* renamed from: b  reason: collision with root package name */
    private final gu.f f29390b;

    /* renamed from: c  reason: collision with root package name */
    private final BufferedSource f29391c;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f29392d;

    /* renamed from: e  reason: collision with root package name */
    private int f29393e;

    /* renamed from: f  reason: collision with root package name */
    private final iu.a f29394f;

    /* renamed from: g  reason: collision with root package name */
    private Headers f29395g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final l f29396d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f29397e;

        public a() {
            this.f29396d = new l(b.this.f29391c.timeout());
        }

        protected final boolean a() {
            return this.f29397e;
        }

        public final void g() {
            if (b.this.f29393e == 6) {
                return;
            }
            if (b.this.f29393e == 5) {
                b.this.r(this.f29396d);
                b.this.f29393e = 6;
                return;
            }
            throw new IllegalStateException("state: " + b.this.f29393e);
        }

        protected final void k(boolean z10) {
            this.f29397e = z10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                return b.this.f29391c.read(sink, j10);
            } catch (IOException e10) {
                b.this.c().z();
                g();
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f29396d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: iu.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0411b implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private final l f29399d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f29400e;

        public C0411b() {
            this.f29399d = new l(b.this.f29392d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public synchronized void close() {
            if (this.f29400e) {
                return;
            }
            this.f29400e = true;
            b.this.f29392d.q0("0\r\n\r\n");
            b.this.r(this.f29399d);
            b.this.f29393e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public synchronized void flush() {
            if (this.f29400e) {
                return;
            }
            b.this.f29392d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f29399d;
        }

        @Override // okio.Sink
        public void w0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f29400e) {
                if (j10 == 0) {
                    return;
                }
                b.this.f29392d.J1(j10);
                b.this.f29392d.q0("\r\n");
                b.this.f29392d.w0(source, j10);
                b.this.f29392d.q0("\r\n");
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends a {

        /* renamed from: o  reason: collision with root package name */
        private final HttpUrl f29402o;

        /* renamed from: p  reason: collision with root package name */
        private long f29403p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f29404q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ b f29405r;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(b bVar, HttpUrl url) {
            super();
            Intrinsics.checkNotNullParameter(url, "url");
            this.f29405r = bVar;
            this.f29402o = url;
            this.f29403p = -1L;
            this.f29404q = true;
        }

        private final void m() {
            if (this.f29403p != -1) {
                this.f29405r.f29391c.H0();
            }
            try {
                this.f29403p = this.f29405r.f29391c.m2();
                String obj = StringsKt.k1(this.f29405r.f29391c.H0()).toString();
                if (this.f29403p >= 0 && (obj.length() <= 0 || StringsKt.P(obj, ";", false, 2, null))) {
                    if (this.f29403p == 0) {
                        this.f29404q = false;
                        b bVar = this.f29405r;
                        bVar.f29395g = bVar.f29394f.a();
                        OkHttpClient okHttpClient = this.f29405r.f29389a;
                        Intrinsics.checkNotNull(okHttpClient);
                        CookieJar r10 = okHttpClient.r();
                        HttpUrl httpUrl = this.f29402o;
                        Headers headers = this.f29405r.f29395g;
                        Intrinsics.checkNotNull(headers);
                        hu.e.f(r10, httpUrl, headers);
                        g();
                        return;
                    }
                    return;
                }
                throw new ProtocolException("expected chunk size and optional extensions but was \"" + this.f29403p + obj + '\"');
            } catch (NumberFormatException e10) {
                throw new ProtocolException(e10.getMessage());
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f29404q && !cu.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f29405r.c().z();
                g();
            }
            k(true);
        }

        @Override // iu.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (!this.f29404q) {
                        return -1L;
                    }
                    long j11 = this.f29403p;
                    if (j11 == 0 || j11 == -1) {
                        m();
                        if (!this.f29404q) {
                            return -1L;
                        }
                    }
                    long read = super.read(sink, Math.min(j10, this.f29403p));
                    if (read != -1) {
                        this.f29403p -= read;
                        return read;
                    }
                    this.f29405r.c().z();
                    ProtocolException protocolException = new ProtocolException("unexpected end of stream");
                    g();
                    throw protocolException;
                }
                throw new IllegalStateException("closed");
            }
            throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {
        public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private d() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class e extends a {

        /* renamed from: o  reason: collision with root package name */
        private long f29406o;

        public e(long j10) {
            super();
            this.f29406o = j10;
            if (j10 == 0) {
                g();
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f29406o != 0 && !cu.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                b.this.c().z();
                g();
            }
            k(true);
        }

        @Override // iu.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    long j11 = this.f29406o;
                    if (j11 == 0) {
                        return -1L;
                    }
                    long read = super.read(sink, Math.min(j11, j10));
                    if (read != -1) {
                        long j12 = this.f29406o - read;
                        this.f29406o = j12;
                        if (j12 == 0) {
                            g();
                        }
                        return read;
                    }
                    b.this.c().z();
                    ProtocolException protocolException = new ProtocolException("unexpected end of stream");
                    g();
                    throw protocolException;
                }
                throw new IllegalStateException("closed");
            }
            throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class f implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private final l f29408d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f29409e;

        public f() {
            this.f29408d = new l(b.this.f29392d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f29409e) {
                return;
            }
            this.f29409e = true;
            b.this.r(this.f29408d);
            b.this.f29393e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            if (this.f29409e) {
                return;
            }
            b.this.f29392d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f29408d;
        }

        @Override // okio.Sink
        public void w0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f29409e) {
                cu.e.l(source.size(), 0L, j10);
                b.this.f29392d.w0(source, j10);
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class g extends a {

        /* renamed from: o  reason: collision with root package name */
        private boolean f29411o;

        public g() {
            super();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (!this.f29411o) {
                g();
            }
            k(true);
        }

        @Override // iu.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (this.f29411o) {
                        return -1L;
                    }
                    long read = super.read(sink, j10);
                    if (read == -1) {
                        this.f29411o = true;
                        g();
                        return -1L;
                    }
                    return read;
                }
                throw new IllegalStateException("closed");
            }
            throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
        }
    }

    public b(OkHttpClient okHttpClient, gu.f connection, BufferedSource source, BufferedSink sink) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f29389a = okHttpClient;
        this.f29390b = connection;
        this.f29391c = source;
        this.f29392d = sink;
        this.f29394f = new iu.a(source);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(l lVar) {
        Timeout i10 = lVar.i();
        lVar.j(Timeout.f43220e);
        i10.a();
        i10.b();
    }

    private final boolean s(Request request) {
        return StringsKt.A("chunked", request.f("Transfer-Encoding"), true);
    }

    private final boolean t(Response response) {
        return StringsKt.A("chunked", Response.Y(response, "Transfer-Encoding", null, 2, null), true);
    }

    private final Sink u() {
        if (this.f29393e == 1) {
            this.f29393e = 2;
            return new C0411b();
        }
        throw new IllegalStateException(("state: " + this.f29393e).toString());
    }

    private final Source v(HttpUrl httpUrl) {
        if (this.f29393e == 4) {
            this.f29393e = 5;
            return new c(this, httpUrl);
        }
        throw new IllegalStateException(("state: " + this.f29393e).toString());
    }

    private final Source w(long j10) {
        if (this.f29393e == 4) {
            this.f29393e = 5;
            return new e(j10);
        }
        throw new IllegalStateException(("state: " + this.f29393e).toString());
    }

    private final Sink x() {
        if (this.f29393e == 1) {
            this.f29393e = 2;
            return new f();
        }
        throw new IllegalStateException(("state: " + this.f29393e).toString());
    }

    private final Source y() {
        if (this.f29393e == 4) {
            this.f29393e = 5;
            c().z();
            return new g();
        }
        throw new IllegalStateException(("state: " + this.f29393e).toString());
    }

    public final void A(Headers headers, String requestLine) {
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(requestLine, "requestLine");
        if (this.f29393e == 0) {
            this.f29392d.q0(requestLine).q0("\r\n");
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                this.f29392d.q0(headers.e(i10)).q0(": ").q0(headers.j(i10)).q0("\r\n");
            }
            this.f29392d.q0("\r\n");
            this.f29393e = 1;
            return;
        }
        throw new IllegalStateException(("state: " + this.f29393e).toString());
    }

    @Override // hu.d
    public void a() {
        this.f29392d.flush();
    }

    @Override // hu.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!hu.e.b(response)) {
            return w(0L);
        }
        if (t(response)) {
            return v(response.Y0().n());
        }
        long v10 = cu.e.v(response);
        if (v10 != -1) {
            return w(v10);
        }
        return y();
    }

    @Override // hu.d
    public gu.f c() {
        return this.f29390b;
    }

    @Override // hu.d
    public void cancel() {
        c().d();
    }

    @Override // hu.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!hu.e.b(response)) {
            return 0L;
        }
        if (t(response)) {
            return -1L;
        }
        return cu.e.v(response);
    }

    @Override // hu.d
    public Sink e(Request request, long j10) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (request.c() != null && request.c().isDuplex()) {
            throw new ProtocolException("Duplex connections are not supported for HTTP/1");
        }
        if (s(request)) {
            return u();
        }
        if (j10 != -1) {
            return x();
        }
        throw new IllegalStateException("Cannot stream a request body without chunked encoding or a known content length!");
    }

    @Override // hu.d
    public void f(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = i.f26561a;
        Proxy.Type type = c().A().b().type();
        Intrinsics.checkNotNullExpressionValue(type, "connection.route().proxy.type()");
        A(request.h(), iVar.a(request, type));
    }

    @Override // hu.d
    public Response.a g(boolean z10) {
        int i10 = this.f29393e;
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            throw new IllegalStateException(("state: " + this.f29393e).toString());
        }
        try {
            k a10 = k.f26564d.a(this.f29394f.b());
            Response.a k10 = new Response.a().p(a10.f26565a).g(a10.f26566b).m(a10.f26567c).k(this.f29394f.a());
            if (z10 && a10.f26566b == 100) {
                return null;
            }
            int i11 = a10.f26566b;
            if (i11 == 100) {
                this.f29393e = 3;
                return k10;
            } else if (102 <= i11 && i11 < 200) {
                this.f29393e = 3;
                return k10;
            } else {
                this.f29393e = 4;
                return k10;
            }
        } catch (EOFException e10) {
            String q10 = c().A().a().l().q();
            throw new IOException("unexpected end of stream on " + q10, e10);
        }
    }

    @Override // hu.d
    public void h() {
        this.f29392d.flush();
    }

    public final void z(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        long v10 = cu.e.v(response);
        if (v10 == -1) {
            return;
        }
        Source w10 = w(v10);
        cu.e.M(w10, Integer.MAX_VALUE, TimeUnit.MILLISECONDS);
        w10.close();
    }
}
