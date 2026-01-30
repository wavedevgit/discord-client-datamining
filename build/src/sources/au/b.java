package au;

import iu.l;
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
import zt.i;
import zt.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements zt.d {

    /* renamed from: h  reason: collision with root package name */
    public static final d f6930h = new d(null);

    /* renamed from: a  reason: collision with root package name */
    private final OkHttpClient f6931a;

    /* renamed from: b  reason: collision with root package name */
    private final yt.f f6932b;

    /* renamed from: c  reason: collision with root package name */
    private final BufferedSource f6933c;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f6934d;

    /* renamed from: e  reason: collision with root package name */
    private int f6935e;

    /* renamed from: f  reason: collision with root package name */
    private final au.a f6936f;

    /* renamed from: g  reason: collision with root package name */
    private Headers f6937g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final l f6938d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f6939e;

        public a() {
            this.f6938d = new l(b.this.f6933c.timeout());
        }

        protected final boolean a() {
            return this.f6939e;
        }

        public final void h() {
            if (b.this.f6935e == 6) {
                return;
            }
            if (b.this.f6935e == 5) {
                b.this.r(this.f6938d);
                b.this.f6935e = 6;
                return;
            }
            throw new IllegalStateException("state: " + b.this.f6935e);
        }

        protected final void l(boolean z10) {
            this.f6939e = z10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                return b.this.f6933c.read(sink, j10);
            } catch (IOException e10) {
                b.this.c().z();
                h();
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f6938d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: au.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0102b implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private final l f6941d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f6942e;

        public C0102b() {
            this.f6941d = new l(b.this.f6934d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public synchronized void close() {
            if (this.f6942e) {
                return;
            }
            this.f6942e = true;
            b.this.f6934d.n0("0\r\n\r\n");
            b.this.r(this.f6941d);
            b.this.f6935e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public synchronized void flush() {
            if (this.f6942e) {
                return;
            }
            b.this.f6934d.flush();
        }

        @Override // okio.Sink
        public void t0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f6942e) {
                if (j10 == 0) {
                    return;
                }
                b.this.f6934d.K1(j10);
                b.this.f6934d.n0("\r\n");
                b.this.f6934d.t0(source, j10);
                b.this.f6934d.n0("\r\n");
                return;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f6941d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends a {

        /* renamed from: o  reason: collision with root package name */
        private final HttpUrl f6944o;

        /* renamed from: p  reason: collision with root package name */
        private long f6945p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f6946q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ b f6947r;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(b bVar, HttpUrl url) {
            super();
            Intrinsics.checkNotNullParameter(url, "url");
            this.f6947r = bVar;
            this.f6944o = url;
            this.f6945p = -1L;
            this.f6946q = true;
        }

        private final void n() {
            if (this.f6945p != -1) {
                this.f6947r.f6933c.H0();
            }
            try {
                this.f6945p = this.f6947r.f6933c.m2();
                String obj = StringsKt.k1(this.f6947r.f6933c.H0()).toString();
                if (this.f6945p >= 0 && (obj.length() <= 0 || StringsKt.P(obj, ";", false, 2, null))) {
                    if (this.f6945p == 0) {
                        this.f6946q = false;
                        b bVar = this.f6947r;
                        bVar.f6937g = bVar.f6936f.a();
                        OkHttpClient okHttpClient = this.f6947r.f6931a;
                        Intrinsics.checkNotNull(okHttpClient);
                        CookieJar r10 = okHttpClient.r();
                        HttpUrl httpUrl = this.f6944o;
                        Headers headers = this.f6947r.f6937g;
                        Intrinsics.checkNotNull(headers);
                        zt.e.f(r10, httpUrl, headers);
                        h();
                        return;
                    }
                    return;
                }
                throw new ProtocolException("expected chunk size and optional extensions but was \"" + this.f6945p + obj + '\"');
            } catch (NumberFormatException e10) {
                throw new ProtocolException(e10.getMessage());
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f6946q && !ut.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f6947r.c().z();
                h();
            }
            l(true);
        }

        @Override // au.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (!this.f6946q) {
                        return -1L;
                    }
                    long j11 = this.f6945p;
                    if (j11 == 0 || j11 == -1) {
                        n();
                        if (!this.f6946q) {
                            return -1L;
                        }
                    }
                    long read = super.read(sink, Math.min(j10, this.f6945p));
                    if (read != -1) {
                        this.f6945p -= read;
                        return read;
                    }
                    this.f6947r.c().z();
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
        private long f6948o;

        public e(long j10) {
            super();
            this.f6948o = j10;
            if (j10 == 0) {
                h();
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f6948o != 0 && !ut.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                b.this.c().z();
                h();
            }
            l(true);
        }

        @Override // au.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    long j11 = this.f6948o;
                    if (j11 == 0) {
                        return -1L;
                    }
                    long read = super.read(sink, Math.min(j11, j10));
                    if (read != -1) {
                        long j12 = this.f6948o - read;
                        this.f6948o = j12;
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
        private final l f6950d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f6951e;

        public f() {
            this.f6950d = new l(b.this.f6934d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f6951e) {
                return;
            }
            this.f6951e = true;
            b.this.r(this.f6950d);
            b.this.f6935e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            if (this.f6951e) {
                return;
            }
            b.this.f6934d.flush();
        }

        @Override // okio.Sink
        public void t0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f6951e) {
                ut.e.l(source.size(), 0L, j10);
                b.this.f6934d.t0(source, j10);
                return;
            }
            throw new IllegalStateException("closed");
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f6950d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class g extends a {

        /* renamed from: o  reason: collision with root package name */
        private boolean f6953o;

        public g() {
            super();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (!this.f6953o) {
                h();
            }
            l(true);
        }

        @Override // au.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (this.f6953o) {
                        return -1L;
                    }
                    long read = super.read(sink, j10);
                    if (read == -1) {
                        this.f6953o = true;
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

    public b(OkHttpClient okHttpClient, yt.f connection, BufferedSource source, BufferedSink sink) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f6931a = okHttpClient;
        this.f6932b = connection;
        this.f6933c = source;
        this.f6934d = sink;
        this.f6936f = new au.a(source);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(l lVar) {
        Timeout i10 = lVar.i();
        lVar.j(Timeout.f44385e);
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
        if (this.f6935e == 1) {
            this.f6935e = 2;
            return new C0102b();
        }
        throw new IllegalStateException(("state: " + this.f6935e).toString());
    }

    private final Source v(HttpUrl httpUrl) {
        if (this.f6935e == 4) {
            this.f6935e = 5;
            return new c(this, httpUrl);
        }
        throw new IllegalStateException(("state: " + this.f6935e).toString());
    }

    private final Source w(long j10) {
        if (this.f6935e == 4) {
            this.f6935e = 5;
            return new e(j10);
        }
        throw new IllegalStateException(("state: " + this.f6935e).toString());
    }

    private final Sink x() {
        if (this.f6935e == 1) {
            this.f6935e = 2;
            return new f();
        }
        throw new IllegalStateException(("state: " + this.f6935e).toString());
    }

    private final Source y() {
        if (this.f6935e == 4) {
            this.f6935e = 5;
            c().z();
            return new g();
        }
        throw new IllegalStateException(("state: " + this.f6935e).toString());
    }

    public final void A(Headers headers, String requestLine) {
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(requestLine, "requestLine");
        if (this.f6935e == 0) {
            this.f6934d.n0(requestLine).n0("\r\n");
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                this.f6934d.n0(headers.e(i10)).n0(": ").n0(headers.j(i10)).n0("\r\n");
            }
            this.f6934d.n0("\r\n");
            this.f6935e = 1;
            return;
        }
        throw new IllegalStateException(("state: " + this.f6935e).toString());
    }

    @Override // zt.d
    public void a() {
        this.f6934d.flush();
    }

    @Override // zt.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!zt.e.b(response)) {
            return w(0L);
        }
        if (t(response)) {
            return v(response.Y0().n());
        }
        long v10 = ut.e.v(response);
        if (v10 != -1) {
            return w(v10);
        }
        return y();
    }

    @Override // zt.d
    public yt.f c() {
        return this.f6932b;
    }

    @Override // zt.d
    public void cancel() {
        c().d();
    }

    @Override // zt.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!zt.e.b(response)) {
            return 0L;
        }
        if (t(response)) {
            return -1L;
        }
        return ut.e.v(response);
    }

    @Override // zt.d
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

    @Override // zt.d
    public void f(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = i.f56142a;
        Proxy.Type type = c().A().b().type();
        Intrinsics.checkNotNullExpressionValue(type, "connection.route().proxy.type()");
        A(request.h(), iVar.a(request, type));
    }

    @Override // zt.d
    public Response.a g(boolean z10) {
        int i10 = this.f6935e;
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            throw new IllegalStateException(("state: " + this.f6935e).toString());
        }
        try {
            k a10 = k.f56145d.a(this.f6936f.b());
            Response.a k10 = new Response.a().p(a10.f56146a).g(a10.f56147b).m(a10.f56148c).k(this.f6936f.a());
            if (z10 && a10.f56147b == 100) {
                return null;
            }
            int i11 = a10.f56147b;
            if (i11 == 100) {
                this.f6935e = 3;
                return k10;
            } else if (102 <= i11 && i11 < 200) {
                this.f6935e = 3;
                return k10;
            } else {
                this.f6935e = 4;
                return k10;
            }
        } catch (EOFException e10) {
            String q10 = c().A().a().l().q();
            throw new IOException("unexpected end of stream on " + q10, e10);
        }
    }

    @Override // zt.d
    public void h() {
        this.f6934d.flush();
    }

    public final void z(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        long v10 = ut.e.v(response);
        if (v10 == -1) {
            return;
        }
        Source w10 = w(v10);
        ut.e.M(w10, Integer.MAX_VALUE, TimeUnit.MILLISECONDS);
        w10.close();
    }
}
