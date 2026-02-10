package ju;

import iu.i;
import iu.k;
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
import ru.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements iu.d {

    /* renamed from: h  reason: collision with root package name */
    public static final d f30502h = new d(null);

    /* renamed from: a  reason: collision with root package name */
    private final OkHttpClient f30503a;

    /* renamed from: b  reason: collision with root package name */
    private final hu.f f30504b;

    /* renamed from: c  reason: collision with root package name */
    private final BufferedSource f30505c;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f30506d;

    /* renamed from: e  reason: collision with root package name */
    private int f30507e;

    /* renamed from: f  reason: collision with root package name */
    private final ju.a f30508f;

    /* renamed from: g  reason: collision with root package name */
    private Headers f30509g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final l f30510d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f30511e;

        public a() {
            this.f30510d = new l(b.this.f30505c.timeout());
        }

        protected final boolean a() {
            return this.f30511e;
        }

        public final void g() {
            if (b.this.f30507e == 6) {
                return;
            }
            if (b.this.f30507e == 5) {
                b.this.r(this.f30510d);
                b.this.f30507e = 6;
                return;
            }
            throw new IllegalStateException("state: " + b.this.f30507e);
        }

        protected final void k(boolean z10) {
            this.f30511e = z10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                return b.this.f30505c.read(sink, j10);
            } catch (IOException e10) {
                b.this.c().z();
                g();
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f30510d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ju.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0458b implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private final l f30513d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f30514e;

        public C0458b() {
            this.f30513d = new l(b.this.f30506d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public synchronized void close() {
            if (this.f30514e) {
                return;
            }
            this.f30514e = true;
            b.this.f30506d.q0("0\r\n\r\n");
            b.this.r(this.f30513d);
            b.this.f30507e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public synchronized void flush() {
            if (this.f30514e) {
                return;
            }
            b.this.f30506d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f30513d;
        }

        @Override // okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f30514e) {
                if (j10 == 0) {
                    return;
                }
                b.this.f30506d.H1(j10);
                b.this.f30506d.q0("\r\n");
                b.this.f30506d.u0(source, j10);
                b.this.f30506d.q0("\r\n");
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends a {

        /* renamed from: o  reason: collision with root package name */
        private final HttpUrl f30516o;

        /* renamed from: p  reason: collision with root package name */
        private long f30517p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f30518q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ b f30519r;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(b bVar, HttpUrl url) {
            super();
            Intrinsics.checkNotNullParameter(url, "url");
            this.f30519r = bVar;
            this.f30516o = url;
            this.f30517p = -1L;
            this.f30518q = true;
        }

        private final void m() {
            if (this.f30517p != -1) {
                this.f30519r.f30505c.F0();
            }
            try {
                this.f30517p = this.f30519r.f30505c.m2();
                String obj = StringsKt.k1(this.f30519r.f30505c.F0()).toString();
                if (this.f30517p >= 0 && (obj.length() <= 0 || StringsKt.P(obj, ";", false, 2, null))) {
                    if (this.f30517p == 0) {
                        this.f30518q = false;
                        b bVar = this.f30519r;
                        bVar.f30509g = bVar.f30508f.a();
                        OkHttpClient okHttpClient = this.f30519r.f30503a;
                        Intrinsics.checkNotNull(okHttpClient);
                        CookieJar r10 = okHttpClient.r();
                        HttpUrl httpUrl = this.f30516o;
                        Headers headers = this.f30519r.f30509g;
                        Intrinsics.checkNotNull(headers);
                        iu.e.f(r10, httpUrl, headers);
                        g();
                        return;
                    }
                    return;
                }
                throw new ProtocolException("expected chunk size and optional extensions but was \"" + this.f30517p + obj + '\"');
            } catch (NumberFormatException e10) {
                throw new ProtocolException(e10.getMessage());
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f30518q && !du.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f30519r.c().z();
                g();
            }
            k(true);
        }

        @Override // ju.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (!this.f30518q) {
                        return -1L;
                    }
                    long j11 = this.f30517p;
                    if (j11 == 0 || j11 == -1) {
                        m();
                        if (!this.f30518q) {
                            return -1L;
                        }
                    }
                    long read = super.read(sink, Math.min(j10, this.f30517p));
                    if (read != -1) {
                        this.f30517p -= read;
                        return read;
                    }
                    this.f30519r.c().z();
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
        private long f30520o;

        public e(long j10) {
            super();
            this.f30520o = j10;
            if (j10 == 0) {
                g();
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f30520o != 0 && !du.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                b.this.c().z();
                g();
            }
            k(true);
        }

        @Override // ju.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    long j11 = this.f30520o;
                    if (j11 == 0) {
                        return -1L;
                    }
                    long read = super.read(sink, Math.min(j11, j10));
                    if (read != -1) {
                        long j12 = this.f30520o - read;
                        this.f30520o = j12;
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
        private final l f30522d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f30523e;

        public f() {
            this.f30522d = new l(b.this.f30506d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f30523e) {
                return;
            }
            this.f30523e = true;
            b.this.r(this.f30522d);
            b.this.f30507e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            if (this.f30523e) {
                return;
            }
            b.this.f30506d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f30522d;
        }

        @Override // okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f30523e) {
                du.e.l(source.size(), 0L, j10);
                b.this.f30506d.u0(source, j10);
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class g extends a {

        /* renamed from: o  reason: collision with root package name */
        private boolean f30525o;

        public g() {
            super();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (!this.f30525o) {
                g();
            }
            k(true);
        }

        @Override // ju.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (this.f30525o) {
                        return -1L;
                    }
                    long read = super.read(sink, j10);
                    if (read == -1) {
                        this.f30525o = true;
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

    public b(OkHttpClient okHttpClient, hu.f connection, BufferedSource source, BufferedSink sink) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f30503a = okHttpClient;
        this.f30504b = connection;
        this.f30505c = source;
        this.f30506d = sink;
        this.f30508f = new ju.a(source);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(l lVar) {
        Timeout i10 = lVar.i();
        lVar.j(Timeout.f42347e);
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
        if (this.f30507e == 1) {
            this.f30507e = 2;
            return new C0458b();
        }
        throw new IllegalStateException(("state: " + this.f30507e).toString());
    }

    private final Source v(HttpUrl httpUrl) {
        if (this.f30507e == 4) {
            this.f30507e = 5;
            return new c(this, httpUrl);
        }
        throw new IllegalStateException(("state: " + this.f30507e).toString());
    }

    private final Source w(long j10) {
        if (this.f30507e == 4) {
            this.f30507e = 5;
            return new e(j10);
        }
        throw new IllegalStateException(("state: " + this.f30507e).toString());
    }

    private final Sink x() {
        if (this.f30507e == 1) {
            this.f30507e = 2;
            return new f();
        }
        throw new IllegalStateException(("state: " + this.f30507e).toString());
    }

    private final Source y() {
        if (this.f30507e == 4) {
            this.f30507e = 5;
            c().z();
            return new g();
        }
        throw new IllegalStateException(("state: " + this.f30507e).toString());
    }

    public final void A(Headers headers, String requestLine) {
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(requestLine, "requestLine");
        if (this.f30507e == 0) {
            this.f30506d.q0(requestLine).q0("\r\n");
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                this.f30506d.q0(headers.e(i10)).q0(": ").q0(headers.j(i10)).q0("\r\n");
            }
            this.f30506d.q0("\r\n");
            this.f30507e = 1;
            return;
        }
        throw new IllegalStateException(("state: " + this.f30507e).toString());
    }

    @Override // iu.d
    public void a() {
        this.f30506d.flush();
    }

    @Override // iu.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!iu.e.b(response)) {
            return w(0L);
        }
        if (t(response)) {
            return v(response.W0().n());
        }
        long v10 = du.e.v(response);
        if (v10 != -1) {
            return w(v10);
        }
        return y();
    }

    @Override // iu.d
    public hu.f c() {
        return this.f30504b;
    }

    @Override // iu.d
    public void cancel() {
        c().d();
    }

    @Override // iu.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!iu.e.b(response)) {
            return 0L;
        }
        if (t(response)) {
            return -1L;
        }
        return du.e.v(response);
    }

    @Override // iu.d
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

    @Override // iu.d
    public void f(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = i.f29666a;
        Proxy.Type type = c().A().b().type();
        Intrinsics.checkNotNullExpressionValue(type, "connection.route().proxy.type()");
        A(request.h(), iVar.a(request, type));
    }

    @Override // iu.d
    public Response.a g(boolean z10) {
        int i10 = this.f30507e;
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            throw new IllegalStateException(("state: " + this.f30507e).toString());
        }
        try {
            k a10 = k.f29669d.a(this.f30508f.b());
            Response.a k10 = new Response.a().p(a10.f29670a).g(a10.f29671b).m(a10.f29672c).k(this.f30508f.a());
            if (z10 && a10.f29671b == 100) {
                return null;
            }
            int i11 = a10.f29671b;
            if (i11 == 100) {
                this.f30507e = 3;
                return k10;
            } else if (102 <= i11 && i11 < 200) {
                this.f30507e = 3;
                return k10;
            } else {
                this.f30507e = 4;
                return k10;
            }
        } catch (EOFException e10) {
            String q10 = c().A().a().l().q();
            throw new IOException("unexpected end of stream on " + q10, e10);
        }
    }

    @Override // iu.d
    public void h() {
        this.f30506d.flush();
    }

    public final void z(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        long v10 = du.e.v(response);
        if (v10 == -1) {
            return;
        }
        Source w10 = w(v10);
        du.e.M(w10, Integer.MAX_VALUE, TimeUnit.MILLISECONDS);
        w10.close();
    }
}
