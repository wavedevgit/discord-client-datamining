package du;

import cu.i;
import cu.k;
import java.io.EOFException;
import java.io.IOException;
import java.net.ProtocolException;
import java.net.Proxy;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import lu.l;
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
public final class b implements cu.d {

    /* renamed from: h  reason: collision with root package name */
    public static final d f21060h = new d(null);

    /* renamed from: a  reason: collision with root package name */
    private final OkHttpClient f21061a;

    /* renamed from: b  reason: collision with root package name */
    private final bu.f f21062b;

    /* renamed from: c  reason: collision with root package name */
    private final BufferedSource f21063c;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f21064d;

    /* renamed from: e  reason: collision with root package name */
    private int f21065e;

    /* renamed from: f  reason: collision with root package name */
    private final du.a f21066f;

    /* renamed from: g  reason: collision with root package name */
    private Headers f21067g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final l f21068d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21069e;

        public a() {
            this.f21068d = new l(b.this.f21063c.timeout());
        }

        protected final boolean a() {
            return this.f21069e;
        }

        public final void h() {
            if (b.this.f21065e == 6) {
                return;
            }
            if (b.this.f21065e == 5) {
                b.this.r(this.f21068d);
                b.this.f21065e = 6;
                return;
            }
            throw new IllegalStateException("state: " + b.this.f21065e);
        }

        protected final void l(boolean z10) {
            this.f21069e = z10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                return b.this.f21063c.read(sink, j10);
            } catch (IOException e10) {
                b.this.c().z();
                h();
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f21068d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: du.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0273b implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private final l f21071d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21072e;

        public C0273b() {
            this.f21071d = new l(b.this.f21064d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public synchronized void close() {
            if (this.f21072e) {
                return;
            }
            this.f21072e = true;
            b.this.f21064d.n0("0\r\n\r\n");
            b.this.r(this.f21071d);
            b.this.f21065e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public synchronized void flush() {
            if (this.f21072e) {
                return;
            }
            b.this.f21064d.flush();
        }

        @Override // okio.Sink
        public void t0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f21072e) {
                if (j10 == 0) {
                    return;
                }
                b.this.f21064d.K1(j10);
                b.this.f21064d.n0("\r\n");
                b.this.f21064d.t0(source, j10);
                b.this.f21064d.n0("\r\n");
                return;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f21071d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends a {

        /* renamed from: o  reason: collision with root package name */
        private final HttpUrl f21074o;

        /* renamed from: p  reason: collision with root package name */
        private long f21075p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f21076q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ b f21077r;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(b bVar, HttpUrl url) {
            super();
            Intrinsics.checkNotNullParameter(url, "url");
            this.f21077r = bVar;
            this.f21074o = url;
            this.f21075p = -1L;
            this.f21076q = true;
        }

        private final void n() {
            if (this.f21075p != -1) {
                this.f21077r.f21063c.H0();
            }
            try {
                this.f21075p = this.f21077r.f21063c.m2();
                String obj = StringsKt.k1(this.f21077r.f21063c.H0()).toString();
                if (this.f21075p >= 0 && (obj.length() <= 0 || StringsKt.P(obj, ";", false, 2, null))) {
                    if (this.f21075p == 0) {
                        this.f21076q = false;
                        b bVar = this.f21077r;
                        bVar.f21067g = bVar.f21066f.a();
                        OkHttpClient okHttpClient = this.f21077r.f21061a;
                        Intrinsics.checkNotNull(okHttpClient);
                        CookieJar r10 = okHttpClient.r();
                        HttpUrl httpUrl = this.f21074o;
                        Headers headers = this.f21077r.f21067g;
                        Intrinsics.checkNotNull(headers);
                        cu.e.f(r10, httpUrl, headers);
                        h();
                        return;
                    }
                    return;
                }
                throw new ProtocolException("expected chunk size and optional extensions but was \"" + this.f21075p + obj + '\"');
            } catch (NumberFormatException e10) {
                throw new ProtocolException(e10.getMessage());
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f21076q && !xt.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f21077r.c().z();
                h();
            }
            l(true);
        }

        @Override // du.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (!this.f21076q) {
                        return -1L;
                    }
                    long j11 = this.f21075p;
                    if (j11 == 0 || j11 == -1) {
                        n();
                        if (!this.f21076q) {
                            return -1L;
                        }
                    }
                    long read = super.read(sink, Math.min(j10, this.f21075p));
                    if (read != -1) {
                        this.f21075p -= read;
                        return read;
                    }
                    this.f21077r.c().z();
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
        private long f21078o;

        public e(long j10) {
            super();
            this.f21078o = j10;
            if (j10 == 0) {
                h();
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f21078o != 0 && !xt.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                b.this.c().z();
                h();
            }
            l(true);
        }

        @Override // du.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    long j11 = this.f21078o;
                    if (j11 == 0) {
                        return -1L;
                    }
                    long read = super.read(sink, Math.min(j11, j10));
                    if (read != -1) {
                        long j12 = this.f21078o - read;
                        this.f21078o = j12;
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
        private final l f21080d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21081e;

        public f() {
            this.f21080d = new l(b.this.f21064d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f21081e) {
                return;
            }
            this.f21081e = true;
            b.this.r(this.f21080d);
            b.this.f21065e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            if (this.f21081e) {
                return;
            }
            b.this.f21064d.flush();
        }

        @Override // okio.Sink
        public void t0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f21081e) {
                xt.e.l(source.size(), 0L, j10);
                b.this.f21064d.t0(source, j10);
                return;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f21080d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class g extends a {

        /* renamed from: o  reason: collision with root package name */
        private boolean f21083o;

        public g() {
            super();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (!this.f21083o) {
                h();
            }
            l(true);
        }

        @Override // du.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (this.f21083o) {
                        return -1L;
                    }
                    long read = super.read(sink, j10);
                    if (read == -1) {
                        this.f21083o = true;
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

    public b(OkHttpClient okHttpClient, bu.f connection, BufferedSource source, BufferedSink sink) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f21061a = okHttpClient;
        this.f21062b = connection;
        this.f21063c = source;
        this.f21064d = sink;
        this.f21066f = new du.a(source);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(l lVar) {
        Timeout i10 = lVar.i();
        lVar.j(Timeout.f44313e);
        i10.a();
        i10.b();
    }

    private final boolean s(Request request) {
        return StringsKt.A("chunked", request.f("Transfer-Encoding"), true);
    }

    private final boolean t(Response response) {
        return StringsKt.A("chunked", Response.D0(response, "Transfer-Encoding", null, 2, null), true);
    }

    private final Sink u() {
        if (this.f21065e == 1) {
            this.f21065e = 2;
            return new C0273b();
        }
        throw new IllegalStateException(("state: " + this.f21065e).toString());
    }

    private final Source v(HttpUrl httpUrl) {
        if (this.f21065e == 4) {
            this.f21065e = 5;
            return new c(this, httpUrl);
        }
        throw new IllegalStateException(("state: " + this.f21065e).toString());
    }

    private final Source w(long j10) {
        if (this.f21065e == 4) {
            this.f21065e = 5;
            return new e(j10);
        }
        throw new IllegalStateException(("state: " + this.f21065e).toString());
    }

    private final Sink x() {
        if (this.f21065e == 1) {
            this.f21065e = 2;
            return new f();
        }
        throw new IllegalStateException(("state: " + this.f21065e).toString());
    }

    private final Source y() {
        if (this.f21065e == 4) {
            this.f21065e = 5;
            c().z();
            return new g();
        }
        throw new IllegalStateException(("state: " + this.f21065e).toString());
    }

    public final void A(Headers headers, String requestLine) {
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(requestLine, "requestLine");
        if (this.f21065e == 0) {
            this.f21064d.n0(requestLine).n0("\r\n");
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                this.f21064d.n0(headers.e(i10)).n0(": ").n0(headers.j(i10)).n0("\r\n");
            }
            this.f21064d.n0("\r\n");
            this.f21065e = 1;
            return;
        }
        throw new IllegalStateException(("state: " + this.f21065e).toString());
    }

    @Override // cu.d
    public void a() {
        this.f21064d.flush();
    }

    @Override // cu.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!cu.e.b(response)) {
            return w(0L);
        }
        if (t(response)) {
            return v(response.Z0().n());
        }
        long v10 = xt.e.v(response);
        if (v10 != -1) {
            return w(v10);
        }
        return y();
    }

    @Override // cu.d
    public bu.f c() {
        return this.f21062b;
    }

    @Override // cu.d
    public void cancel() {
        c().d();
    }

    @Override // cu.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!cu.e.b(response)) {
            return 0L;
        }
        if (t(response)) {
            return -1L;
        }
        return xt.e.v(response);
    }

    @Override // cu.d
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

    @Override // cu.d
    public void f(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = i.f19877a;
        Proxy.Type type = c().A().b().type();
        Intrinsics.checkNotNullExpressionValue(type, "connection.route().proxy.type()");
        A(request.h(), iVar.a(request, type));
    }

    @Override // cu.d
    public Response.a g(boolean z10) {
        int i10 = this.f21065e;
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            throw new IllegalStateException(("state: " + this.f21065e).toString());
        }
        try {
            k a10 = k.f19880d.a(this.f21066f.b());
            Response.a k10 = new Response.a().p(a10.f19881a).g(a10.f19882b).m(a10.f19883c).k(this.f21066f.a());
            if (z10 && a10.f19882b == 100) {
                return null;
            }
            int i11 = a10.f19882b;
            if (i11 == 100) {
                this.f21065e = 3;
                return k10;
            } else if (102 <= i11 && i11 < 200) {
                this.f21065e = 3;
                return k10;
            } else {
                this.f21065e = 4;
                return k10;
            }
        } catch (EOFException e10) {
            String q10 = c().A().a().l().q();
            throw new IOException("unexpected end of stream on " + q10, e10);
        }
    }

    @Override // cu.d
    public void h() {
        this.f21064d.flush();
    }

    public final void z(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        long v10 = xt.e.v(response);
        if (v10 == -1) {
            return;
        }
        Source w10 = w(v10);
        xt.e.M(w10, Integer.MAX_VALUE, TimeUnit.MILLISECONDS);
        w10.close();
    }
}
