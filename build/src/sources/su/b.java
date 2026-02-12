package su;

import av.l;
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
import ru.i;
import ru.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements ru.d {

    /* renamed from: h  reason: collision with root package name */
    public static final d f48387h = new d(null);

    /* renamed from: a  reason: collision with root package name */
    private final OkHttpClient f48388a;

    /* renamed from: b  reason: collision with root package name */
    private final qu.f f48389b;

    /* renamed from: c  reason: collision with root package name */
    private final BufferedSource f48390c;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f48391d;

    /* renamed from: e  reason: collision with root package name */
    private int f48392e;

    /* renamed from: f  reason: collision with root package name */
    private final su.a f48393f;

    /* renamed from: g  reason: collision with root package name */
    private Headers f48394g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final l f48395d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f48396e;

        public a() {
            this.f48395d = new l(b.this.f48390c.timeout());
        }

        protected final boolean a() {
            return this.f48396e;
        }

        public final void h() {
            if (b.this.f48392e == 6) {
                return;
            }
            if (b.this.f48392e == 5) {
                b.this.r(this.f48395d);
                b.this.f48392e = 6;
                return;
            }
            throw new IllegalStateException("state: " + b.this.f48392e);
        }

        protected final void i(boolean z10) {
            this.f48396e = z10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                return b.this.f48390c.read(sink, j10);
            } catch (IOException e10) {
                b.this.c().z();
                h();
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f48395d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: su.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0656b implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private final l f48398d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f48399e;

        public C0656b() {
            this.f48398d = new l(b.this.f48391d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public synchronized void close() {
            if (this.f48399e) {
                return;
            }
            this.f48399e = true;
            b.this.f48391d.q0("0\r\n\r\n");
            b.this.r(this.f48398d);
            b.this.f48392e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public synchronized void flush() {
            if (this.f48399e) {
                return;
            }
            b.this.f48391d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f48398d;
        }

        @Override // okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f48399e) {
                if (j10 == 0) {
                    return;
                }
                b.this.f48391d.L1(j10);
                b.this.f48391d.q0("\r\n");
                b.this.f48391d.u0(source, j10);
                b.this.f48391d.q0("\r\n");
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends a {

        /* renamed from: o  reason: collision with root package name */
        private final HttpUrl f48401o;

        /* renamed from: p  reason: collision with root package name */
        private long f48402p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f48403q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ b f48404r;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(b bVar, HttpUrl url) {
            super();
            Intrinsics.checkNotNullParameter(url, "url");
            this.f48404r = bVar;
            this.f48401o = url;
            this.f48402p = -1L;
            this.f48403q = true;
        }

        private final void m() {
            if (this.f48402p != -1) {
                this.f48404r.f48390c.J0();
            }
            try {
                this.f48402p = this.f48404r.f48390c.r2();
                String obj = StringsKt.k1(this.f48404r.f48390c.J0()).toString();
                if (this.f48402p >= 0 && (obj.length() <= 0 || StringsKt.P(obj, ";", false, 2, null))) {
                    if (this.f48402p == 0) {
                        this.f48403q = false;
                        b bVar = this.f48404r;
                        bVar.f48394g = bVar.f48393f.a();
                        OkHttpClient okHttpClient = this.f48404r.f48388a;
                        Intrinsics.checkNotNull(okHttpClient);
                        CookieJar r10 = okHttpClient.r();
                        HttpUrl httpUrl = this.f48401o;
                        Headers headers = this.f48404r.f48394g;
                        Intrinsics.checkNotNull(headers);
                        ru.e.f(r10, httpUrl, headers);
                        h();
                        return;
                    }
                    return;
                }
                throw new ProtocolException("expected chunk size and optional extensions but was \"" + this.f48402p + obj + '\"');
            } catch (NumberFormatException e10) {
                throw new ProtocolException(e10.getMessage());
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f48403q && !mu.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f48404r.c().z();
                h();
            }
            i(true);
        }

        @Override // su.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (!this.f48403q) {
                        return -1L;
                    }
                    long j11 = this.f48402p;
                    if (j11 == 0 || j11 == -1) {
                        m();
                        if (!this.f48403q) {
                            return -1L;
                        }
                    }
                    long read = super.read(sink, Math.min(j10, this.f48402p));
                    if (read != -1) {
                        this.f48402p -= read;
                        return read;
                    }
                    this.f48404r.c().z();
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
        private long f48405o;

        public e(long j10) {
            super();
            this.f48405o = j10;
            if (j10 == 0) {
                h();
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f48405o != 0 && !mu.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                b.this.c().z();
                h();
            }
            i(true);
        }

        @Override // su.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    long j11 = this.f48405o;
                    if (j11 == 0) {
                        return -1L;
                    }
                    long read = super.read(sink, Math.min(j11, j10));
                    if (read != -1) {
                        long j12 = this.f48405o - read;
                        this.f48405o = j12;
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
        private final l f48407d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f48408e;

        public f() {
            this.f48407d = new l(b.this.f48391d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f48408e) {
                return;
            }
            this.f48408e = true;
            b.this.r(this.f48407d);
            b.this.f48392e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            if (this.f48408e) {
                return;
            }
            b.this.f48391d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f48407d;
        }

        @Override // okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f48408e) {
                mu.e.l(source.size(), 0L, j10);
                b.this.f48391d.u0(source, j10);
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class g extends a {

        /* renamed from: o  reason: collision with root package name */
        private boolean f48410o;

        public g() {
            super();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (!this.f48410o) {
                h();
            }
            i(true);
        }

        @Override // su.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (this.f48410o) {
                        return -1L;
                    }
                    long read = super.read(sink, j10);
                    if (read == -1) {
                        this.f48410o = true;
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

    public b(OkHttpClient okHttpClient, qu.f connection, BufferedSource source, BufferedSink sink) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f48388a = okHttpClient;
        this.f48389b = connection;
        this.f48390c = source;
        this.f48391d = sink;
        this.f48393f = new su.a(source);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(l lVar) {
        Timeout i10 = lVar.i();
        lVar.j(Timeout.f40598e);
        i10.a();
        i10.b();
    }

    private final boolean s(Request request) {
        return StringsKt.A("chunked", request.f("Transfer-Encoding"), true);
    }

    private final boolean t(Response response) {
        return StringsKt.A("chunked", Response.Z(response, "Transfer-Encoding", null, 2, null), true);
    }

    private final Sink u() {
        if (this.f48392e == 1) {
            this.f48392e = 2;
            return new C0656b();
        }
        throw new IllegalStateException(("state: " + this.f48392e).toString());
    }

    private final Source v(HttpUrl httpUrl) {
        if (this.f48392e == 4) {
            this.f48392e = 5;
            return new c(this, httpUrl);
        }
        throw new IllegalStateException(("state: " + this.f48392e).toString());
    }

    private final Source w(long j10) {
        if (this.f48392e == 4) {
            this.f48392e = 5;
            return new e(j10);
        }
        throw new IllegalStateException(("state: " + this.f48392e).toString());
    }

    private final Sink x() {
        if (this.f48392e == 1) {
            this.f48392e = 2;
            return new f();
        }
        throw new IllegalStateException(("state: " + this.f48392e).toString());
    }

    private final Source y() {
        if (this.f48392e == 4) {
            this.f48392e = 5;
            c().z();
            return new g();
        }
        throw new IllegalStateException(("state: " + this.f48392e).toString());
    }

    public final void A(Headers headers, String requestLine) {
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(requestLine, "requestLine");
        if (this.f48392e == 0) {
            this.f48391d.q0(requestLine).q0("\r\n");
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                this.f48391d.q0(headers.e(i10)).q0(": ").q0(headers.k(i10)).q0("\r\n");
            }
            this.f48391d.q0("\r\n");
            this.f48392e = 1;
            return;
        }
        throw new IllegalStateException(("state: " + this.f48392e).toString());
    }

    @Override // ru.d
    public void a() {
        this.f48391d.flush();
    }

    @Override // ru.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!ru.e.b(response)) {
            return w(0L);
        }
        if (t(response)) {
            return v(response.O0().n());
        }
        long v10 = mu.e.v(response);
        if (v10 != -1) {
            return w(v10);
        }
        return y();
    }

    @Override // ru.d
    public qu.f c() {
        return this.f48389b;
    }

    @Override // ru.d
    public void cancel() {
        c().d();
    }

    @Override // ru.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!ru.e.b(response)) {
            return 0L;
        }
        if (t(response)) {
            return -1L;
        }
        return mu.e.v(response);
    }

    @Override // ru.d
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

    @Override // ru.d
    public void f(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = i.f47773a;
        Proxy.Type type = c().A().b().type();
        Intrinsics.checkNotNullExpressionValue(type, "connection.route().proxy.type()");
        A(request.h(), iVar.a(request, type));
    }

    @Override // ru.d
    public Response.a g(boolean z10) {
        int i10 = this.f48392e;
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            throw new IllegalStateException(("state: " + this.f48392e).toString());
        }
        try {
            k a10 = k.f47776d.a(this.f48393f.b());
            Response.a k10 = new Response.a().p(a10.f47777a).g(a10.f47778b).m(a10.f47779c).k(this.f48393f.a());
            if (z10 && a10.f47778b == 100) {
                return null;
            }
            int i11 = a10.f47778b;
            if (i11 == 100) {
                this.f48392e = 3;
                return k10;
            } else if (102 <= i11 && i11 < 200) {
                this.f48392e = 3;
                return k10;
            } else {
                this.f48392e = 4;
                return k10;
            }
        } catch (EOFException e10) {
            String q10 = c().A().a().l().q();
            throw new IOException("unexpected end of stream on " + q10, e10);
        }
    }

    @Override // ru.d
    public void h() {
        this.f48391d.flush();
    }

    public final void z(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        long v10 = mu.e.v(response);
        if (v10 == -1) {
            return;
        }
        Source w10 = w(v10);
        mu.e.M(w10, Integer.MAX_VALUE, TimeUnit.MILLISECONDS);
        w10.close();
    }
}
