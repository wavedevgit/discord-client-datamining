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
    public static final d f48955h = new d(null);

    /* renamed from: a  reason: collision with root package name */
    private final OkHttpClient f48956a;

    /* renamed from: b  reason: collision with root package name */
    private final qu.f f48957b;

    /* renamed from: c  reason: collision with root package name */
    private final BufferedSource f48958c;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f48959d;

    /* renamed from: e  reason: collision with root package name */
    private int f48960e;

    /* renamed from: f  reason: collision with root package name */
    private final su.a f48961f;

    /* renamed from: g  reason: collision with root package name */
    private Headers f48962g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final l f48963d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f48964e;

        public a() {
            this.f48963d = new l(b.this.f48958c.timeout());
        }

        protected final boolean a() {
            return this.f48964e;
        }

        public final void h() {
            if (b.this.f48960e == 6) {
                return;
            }
            if (b.this.f48960e == 5) {
                b.this.r(this.f48963d);
                b.this.f48960e = 6;
                return;
            }
            throw new IllegalStateException("state: " + b.this.f48960e);
        }

        protected final void i(boolean z10) {
            this.f48964e = z10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                return b.this.f48958c.read(sink, j10);
            } catch (IOException e10) {
                b.this.c().z();
                h();
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f48963d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: su.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0656b implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private final l f48966d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f48967e;

        public C0656b() {
            this.f48966d = new l(b.this.f48959d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public synchronized void close() {
            if (this.f48967e) {
                return;
            }
            this.f48967e = true;
            b.this.f48959d.q0("0\r\n\r\n");
            b.this.r(this.f48966d);
            b.this.f48960e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public synchronized void flush() {
            if (this.f48967e) {
                return;
            }
            b.this.f48959d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f48966d;
        }

        @Override // okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f48967e) {
                if (j10 == 0) {
                    return;
                }
                b.this.f48959d.L1(j10);
                b.this.f48959d.q0("\r\n");
                b.this.f48959d.u0(source, j10);
                b.this.f48959d.q0("\r\n");
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends a {

        /* renamed from: o  reason: collision with root package name */
        private final HttpUrl f48969o;

        /* renamed from: p  reason: collision with root package name */
        private long f48970p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f48971q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ b f48972r;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(b bVar, HttpUrl url) {
            super();
            Intrinsics.checkNotNullParameter(url, "url");
            this.f48972r = bVar;
            this.f48969o = url;
            this.f48970p = -1L;
            this.f48971q = true;
        }

        private final void m() {
            if (this.f48970p != -1) {
                this.f48972r.f48958c.J0();
            }
            try {
                this.f48970p = this.f48972r.f48958c.r2();
                String obj = StringsKt.k1(this.f48972r.f48958c.J0()).toString();
                if (this.f48970p >= 0 && (obj.length() <= 0 || StringsKt.P(obj, ";", false, 2, null))) {
                    if (this.f48970p == 0) {
                        this.f48971q = false;
                        b bVar = this.f48972r;
                        bVar.f48962g = bVar.f48961f.a();
                        OkHttpClient okHttpClient = this.f48972r.f48956a;
                        Intrinsics.checkNotNull(okHttpClient);
                        CookieJar r10 = okHttpClient.r();
                        HttpUrl httpUrl = this.f48969o;
                        Headers headers = this.f48972r.f48962g;
                        Intrinsics.checkNotNull(headers);
                        ru.e.f(r10, httpUrl, headers);
                        h();
                        return;
                    }
                    return;
                }
                throw new ProtocolException("expected chunk size and optional extensions but was \"" + this.f48970p + obj + '\"');
            } catch (NumberFormatException e10) {
                throw new ProtocolException(e10.getMessage());
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f48971q && !mu.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f48972r.c().z();
                h();
            }
            i(true);
        }

        @Override // su.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (!this.f48971q) {
                        return -1L;
                    }
                    long j11 = this.f48970p;
                    if (j11 == 0 || j11 == -1) {
                        m();
                        if (!this.f48971q) {
                            return -1L;
                        }
                    }
                    long read = super.read(sink, Math.min(j10, this.f48970p));
                    if (read != -1) {
                        this.f48970p -= read;
                        return read;
                    }
                    this.f48972r.c().z();
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
        private long f48973o;

        public e(long j10) {
            super();
            this.f48973o = j10;
            if (j10 == 0) {
                h();
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f48973o != 0 && !mu.e.s(this, 100, TimeUnit.MILLISECONDS)) {
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
                    long j11 = this.f48973o;
                    if (j11 == 0) {
                        return -1L;
                    }
                    long read = super.read(sink, Math.min(j11, j10));
                    if (read != -1) {
                        long j12 = this.f48973o - read;
                        this.f48973o = j12;
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
        private final l f48975d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f48976e;

        public f() {
            this.f48975d = new l(b.this.f48959d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f48976e) {
                return;
            }
            this.f48976e = true;
            b.this.r(this.f48975d);
            b.this.f48960e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            if (this.f48976e) {
                return;
            }
            b.this.f48959d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f48975d;
        }

        @Override // okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f48976e) {
                mu.e.l(source.size(), 0L, j10);
                b.this.f48959d.u0(source, j10);
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class g extends a {

        /* renamed from: o  reason: collision with root package name */
        private boolean f48978o;

        public g() {
            super();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (!this.f48978o) {
                h();
            }
            i(true);
        }

        @Override // su.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (this.f48978o) {
                        return -1L;
                    }
                    long read = super.read(sink, j10);
                    if (read == -1) {
                        this.f48978o = true;
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
        this.f48956a = okHttpClient;
        this.f48957b = connection;
        this.f48958c = source;
        this.f48959d = sink;
        this.f48961f = new su.a(source);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(l lVar) {
        Timeout i10 = lVar.i();
        lVar.j(Timeout.f41166e);
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
        if (this.f48960e == 1) {
            this.f48960e = 2;
            return new C0656b();
        }
        throw new IllegalStateException(("state: " + this.f48960e).toString());
    }

    private final Source v(HttpUrl httpUrl) {
        if (this.f48960e == 4) {
            this.f48960e = 5;
            return new c(this, httpUrl);
        }
        throw new IllegalStateException(("state: " + this.f48960e).toString());
    }

    private final Source w(long j10) {
        if (this.f48960e == 4) {
            this.f48960e = 5;
            return new e(j10);
        }
        throw new IllegalStateException(("state: " + this.f48960e).toString());
    }

    private final Sink x() {
        if (this.f48960e == 1) {
            this.f48960e = 2;
            return new f();
        }
        throw new IllegalStateException(("state: " + this.f48960e).toString());
    }

    private final Source y() {
        if (this.f48960e == 4) {
            this.f48960e = 5;
            c().z();
            return new g();
        }
        throw new IllegalStateException(("state: " + this.f48960e).toString());
    }

    public final void A(Headers headers, String requestLine) {
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(requestLine, "requestLine");
        if (this.f48960e == 0) {
            this.f48959d.q0(requestLine).q0("\r\n");
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                this.f48959d.q0(headers.e(i10)).q0(": ").q0(headers.k(i10)).q0("\r\n");
            }
            this.f48959d.q0("\r\n");
            this.f48960e = 1;
            return;
        }
        throw new IllegalStateException(("state: " + this.f48960e).toString());
    }

    @Override // ru.d
    public void a() {
        this.f48959d.flush();
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
        return this.f48957b;
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
        i iVar = i.f48341a;
        Proxy.Type type = c().A().b().type();
        Intrinsics.checkNotNullExpressionValue(type, "connection.route().proxy.type()");
        A(request.h(), iVar.a(request, type));
    }

    @Override // ru.d
    public Response.a g(boolean z10) {
        int i10 = this.f48960e;
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            throw new IllegalStateException(("state: " + this.f48960e).toString());
        }
        try {
            k a10 = k.f48344d.a(this.f48961f.b());
            Response.a k10 = new Response.a().p(a10.f48345a).g(a10.f48346b).m(a10.f48347c).k(this.f48961f.a());
            if (z10 && a10.f48346b == 100) {
                return null;
            }
            int i11 = a10.f48346b;
            if (i11 == 100) {
                this.f48960e = 3;
                return k10;
            } else if (102 <= i11 && i11 < 200) {
                this.f48960e = 3;
                return k10;
            } else {
                this.f48960e = 4;
                return k10;
            }
        } catch (EOFException e10) {
            String q10 = c().A().a().l().q();
            throw new IOException("unexpected end of stream on " + q10, e10);
        }
    }

    @Override // ru.d
    public void h() {
        this.f48959d.flush();
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
