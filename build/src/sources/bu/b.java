package bu;

import au.i;
import au.k;
import java.io.EOFException;
import java.io.IOException;
import java.net.ProtocolException;
import java.net.Proxy;
import java.util.concurrent.TimeUnit;
import ju.l;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements au.d {

    /* renamed from: h  reason: collision with root package name */
    public static final d f7744h = new d(null);

    /* renamed from: a  reason: collision with root package name */
    private final OkHttpClient f7745a;

    /* renamed from: b  reason: collision with root package name */
    private final zt.f f7746b;

    /* renamed from: c  reason: collision with root package name */
    private final BufferedSource f7747c;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f7748d;

    /* renamed from: e  reason: collision with root package name */
    private int f7749e;

    /* renamed from: f  reason: collision with root package name */
    private final bu.a f7750f;

    /* renamed from: g  reason: collision with root package name */
    private Headers f7751g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final l f7752d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f7753e;

        public a() {
            this.f7752d = new l(b.this.f7747c.timeout());
        }

        protected final boolean a() {
            return this.f7753e;
        }

        public final void h() {
            if (b.this.f7749e == 6) {
                return;
            }
            if (b.this.f7749e == 5) {
                b.this.r(this.f7752d);
                b.this.f7749e = 6;
                return;
            }
            throw new IllegalStateException("state: " + b.this.f7749e);
        }

        protected final void l(boolean z10) {
            this.f7753e = z10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                return b.this.f7747c.read(sink, j10);
            } catch (IOException e10) {
                b.this.c().z();
                h();
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f7752d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: bu.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0131b implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private final l f7755d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f7756e;

        public C0131b() {
            this.f7755d = new l(b.this.f7748d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public synchronized void close() {
            if (this.f7756e) {
                return;
            }
            this.f7756e = true;
            b.this.f7748d.o0("0\r\n\r\n");
            b.this.r(this.f7755d);
            b.this.f7749e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public synchronized void flush() {
            if (this.f7756e) {
                return;
            }
            b.this.f7748d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f7755d;
        }

        @Override // okio.Sink
        public void v0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f7756e) {
                if (j10 == 0) {
                    return;
                }
                b.this.f7748d.K1(j10);
                b.this.f7748d.o0("\r\n");
                b.this.f7748d.v0(source, j10);
                b.this.f7748d.o0("\r\n");
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends a {

        /* renamed from: o  reason: collision with root package name */
        private final HttpUrl f7758o;

        /* renamed from: p  reason: collision with root package name */
        private long f7759p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f7760q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ b f7761r;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(b bVar, HttpUrl url) {
            super();
            Intrinsics.checkNotNullParameter(url, "url");
            this.f7761r = bVar;
            this.f7758o = url;
            this.f7759p = -1L;
            this.f7760q = true;
        }

        private final void n() {
            if (this.f7759p != -1) {
                this.f7761r.f7747c.I0();
            }
            try {
                this.f7759p = this.f7761r.f7747c.m2();
                String obj = StringsKt.k1(this.f7761r.f7747c.I0()).toString();
                if (this.f7759p >= 0 && (obj.length() <= 0 || StringsKt.P(obj, ";", false, 2, null))) {
                    if (this.f7759p == 0) {
                        this.f7760q = false;
                        b bVar = this.f7761r;
                        bVar.f7751g = bVar.f7750f.a();
                        OkHttpClient okHttpClient = this.f7761r.f7745a;
                        Intrinsics.checkNotNull(okHttpClient);
                        CookieJar r10 = okHttpClient.r();
                        HttpUrl httpUrl = this.f7758o;
                        Headers headers = this.f7761r.f7751g;
                        Intrinsics.checkNotNull(headers);
                        au.e.f(r10, httpUrl, headers);
                        h();
                        return;
                    }
                    return;
                }
                throw new ProtocolException("expected chunk size and optional extensions but was \"" + this.f7759p + obj + '\"');
            } catch (NumberFormatException e10) {
                throw new ProtocolException(e10.getMessage());
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f7760q && !vt.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f7761r.c().z();
                h();
            }
            l(true);
        }

        @Override // bu.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (!this.f7760q) {
                        return -1L;
                    }
                    long j11 = this.f7759p;
                    if (j11 == 0 || j11 == -1) {
                        n();
                        if (!this.f7760q) {
                            return -1L;
                        }
                    }
                    long read = super.read(sink, Math.min(j10, this.f7759p));
                    if (read != -1) {
                        this.f7759p -= read;
                        return read;
                    }
                    this.f7761r.c().z();
                    ProtocolException protocolException = new ProtocolException("unexpected end of stream");
                    h();
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
        private long f7762o;

        public e(long j10) {
            super();
            this.f7762o = j10;
            if (j10 == 0) {
                h();
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f7762o != 0 && !vt.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                b.this.c().z();
                h();
            }
            l(true);
        }

        @Override // bu.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    long j11 = this.f7762o;
                    if (j11 == 0) {
                        return -1L;
                    }
                    long read = super.read(sink, Math.min(j11, j10));
                    if (read != -1) {
                        long j12 = this.f7762o - read;
                        this.f7762o = j12;
                        if (j12 == 0) {
                            h();
                        }
                        return read;
                    }
                    b.this.c().z();
                    ProtocolException protocolException = new ProtocolException("unexpected end of stream");
                    h();
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
        private final l f7764d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f7765e;

        public f() {
            this.f7764d = new l(b.this.f7748d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f7765e) {
                return;
            }
            this.f7765e = true;
            b.this.r(this.f7764d);
            b.this.f7749e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            if (this.f7765e) {
                return;
            }
            b.this.f7748d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f7764d;
        }

        @Override // okio.Sink
        public void v0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f7765e) {
                vt.e.l(source.size(), 0L, j10);
                b.this.f7748d.v0(source, j10);
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class g extends a {

        /* renamed from: o  reason: collision with root package name */
        private boolean f7767o;

        public g() {
            super();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (!this.f7767o) {
                h();
            }
            l(true);
        }

        @Override // bu.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (this.f7767o) {
                        return -1L;
                    }
                    long read = super.read(sink, j10);
                    if (read == -1) {
                        this.f7767o = true;
                        h();
                        return -1L;
                    }
                    return read;
                }
                throw new IllegalStateException("closed");
            }
            throw new IllegalArgumentException(("byteCount < 0: " + j10).toString());
        }
    }

    public b(OkHttpClient okHttpClient, zt.f connection, BufferedSource source, BufferedSink sink) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f7745a = okHttpClient;
        this.f7746b = connection;
        this.f7747c = source;
        this.f7748d = sink;
        this.f7750f = new bu.a(source);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(l lVar) {
        Timeout i10 = lVar.i();
        lVar.j(Timeout.f44513e);
        i10.a();
        i10.b();
    }

    private final boolean s(Request request) {
        return StringsKt.A("chunked", request.f("Transfer-Encoding"), true);
    }

    private final boolean t(Response response) {
        return StringsKt.A("chunked", Response.E0(response, "Transfer-Encoding", null, 2, null), true);
    }

    private final Sink u() {
        if (this.f7749e == 1) {
            this.f7749e = 2;
            return new C0131b();
        }
        throw new IllegalStateException(("state: " + this.f7749e).toString());
    }

    private final Source v(HttpUrl httpUrl) {
        if (this.f7749e == 4) {
            this.f7749e = 5;
            return new c(this, httpUrl);
        }
        throw new IllegalStateException(("state: " + this.f7749e).toString());
    }

    private final Source w(long j10) {
        if (this.f7749e == 4) {
            this.f7749e = 5;
            return new e(j10);
        }
        throw new IllegalStateException(("state: " + this.f7749e).toString());
    }

    private final Sink x() {
        if (this.f7749e == 1) {
            this.f7749e = 2;
            return new f();
        }
        throw new IllegalStateException(("state: " + this.f7749e).toString());
    }

    private final Source y() {
        if (this.f7749e == 4) {
            this.f7749e = 5;
            c().z();
            return new g();
        }
        throw new IllegalStateException(("state: " + this.f7749e).toString());
    }

    public final void A(Headers headers, String requestLine) {
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(requestLine, "requestLine");
        if (this.f7749e == 0) {
            this.f7748d.o0(requestLine).o0("\r\n");
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                this.f7748d.o0(headers.e(i10)).o0(": ").o0(headers.j(i10)).o0("\r\n");
            }
            this.f7748d.o0("\r\n");
            this.f7749e = 1;
            return;
        }
        throw new IllegalStateException(("state: " + this.f7749e).toString());
    }

    @Override // au.d
    public void a() {
        this.f7748d.flush();
    }

    @Override // au.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!au.e.b(response)) {
            return w(0L);
        }
        if (t(response)) {
            return v(response.Z0().n());
        }
        long v10 = vt.e.v(response);
        if (v10 != -1) {
            return w(v10);
        }
        return y();
    }

    @Override // au.d
    public zt.f c() {
        return this.f7746b;
    }

    @Override // au.d
    public void cancel() {
        c().d();
    }

    @Override // au.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!au.e.b(response)) {
            return 0L;
        }
        if (t(response)) {
            return -1L;
        }
        return vt.e.v(response);
    }

    @Override // au.d
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

    @Override // au.d
    public void f(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = i.f6113a;
        Proxy.Type type = c().A().b().type();
        Intrinsics.checkNotNullExpressionValue(type, "connection.route().proxy.type()");
        A(request.h(), iVar.a(request, type));
    }

    @Override // au.d
    public Response.a g(boolean z10) {
        int i10 = this.f7749e;
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            throw new IllegalStateException(("state: " + this.f7749e).toString());
        }
        try {
            k a10 = k.f6116d.a(this.f7750f.b());
            Response.a k10 = new Response.a().p(a10.f6117a).g(a10.f6118b).m(a10.f6119c).k(this.f7750f.a());
            if (z10 && a10.f6118b == 100) {
                return null;
            }
            int i11 = a10.f6118b;
            if (i11 == 100) {
                this.f7749e = 3;
                return k10;
            } else if (102 <= i11 && i11 < 200) {
                this.f7749e = 3;
                return k10;
            } else {
                this.f7749e = 4;
                return k10;
            }
        } catch (EOFException e10) {
            String q10 = c().A().a().l().q();
            throw new IOException("unexpected end of stream on " + q10, e10);
        }
    }

    @Override // au.d
    public void h() {
        this.f7748d.flush();
    }

    public final void z(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        long v10 = vt.e.v(response);
        if (v10 == -1) {
            return;
        }
        Source w10 = w(v10);
        vt.e.M(w10, Integer.MAX_VALUE, TimeUnit.MILLISECONDS);
        w10.close();
    }
}
