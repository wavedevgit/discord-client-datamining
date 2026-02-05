package gu;

import fu.i;
import fu.k;
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
import ou.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements fu.d {

    /* renamed from: h  reason: collision with root package name */
    public static final d f25384h = new d(null);

    /* renamed from: a  reason: collision with root package name */
    private final OkHttpClient f25385a;

    /* renamed from: b  reason: collision with root package name */
    private final eu.f f25386b;

    /* renamed from: c  reason: collision with root package name */
    private final BufferedSource f25387c;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f25388d;

    /* renamed from: e  reason: collision with root package name */
    private int f25389e;

    /* renamed from: f  reason: collision with root package name */
    private final gu.a f25390f;

    /* renamed from: g  reason: collision with root package name */
    private Headers f25391g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class a implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final l f25392d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f25393e;

        public a() {
            this.f25392d = new l(b.this.f25387c.timeout());
        }

        protected final boolean a() {
            return this.f25393e;
        }

        public final void h() {
            if (b.this.f25389e == 6) {
                return;
            }
            if (b.this.f25389e == 5) {
                b.this.r(this.f25392d);
                b.this.f25389e = 6;
                return;
            }
            throw new IllegalStateException("state: " + b.this.f25389e);
        }

        protected final void k(boolean z10) {
            this.f25393e = z10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                return b.this.f25387c.read(sink, j10);
            } catch (IOException e10) {
                b.this.c().z();
                h();
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f25392d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: gu.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0345b implements Sink {

        /* renamed from: d  reason: collision with root package name */
        private final l f25395d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f25396e;

        public C0345b() {
            this.f25395d = new l(b.this.f25388d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public synchronized void close() {
            if (this.f25396e) {
                return;
            }
            this.f25396e = true;
            b.this.f25388d.o0("0\r\n\r\n");
            b.this.r(this.f25395d);
            b.this.f25389e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public synchronized void flush() {
            if (this.f25396e) {
                return;
            }
            b.this.f25388d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f25395d;
        }

        @Override // okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f25396e) {
                if (j10 == 0) {
                    return;
                }
                b.this.f25388d.K1(j10);
                b.this.f25388d.o0("\r\n");
                b.this.f25388d.u0(source, j10);
                b.this.f25388d.o0("\r\n");
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends a {

        /* renamed from: o  reason: collision with root package name */
        private final HttpUrl f25398o;

        /* renamed from: p  reason: collision with root package name */
        private long f25399p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f25400q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ b f25401r;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(b bVar, HttpUrl url) {
            super();
            Intrinsics.checkNotNullParameter(url, "url");
            this.f25401r = bVar;
            this.f25398o = url;
            this.f25399p = -1L;
            this.f25400q = true;
        }

        private final void m() {
            if (this.f25399p != -1) {
                this.f25401r.f25387c.H0();
            }
            try {
                this.f25399p = this.f25401r.f25387c.m2();
                String obj = StringsKt.k1(this.f25401r.f25387c.H0()).toString();
                if (this.f25399p >= 0 && (obj.length() <= 0 || StringsKt.P(obj, ";", false, 2, null))) {
                    if (this.f25399p == 0) {
                        this.f25400q = false;
                        b bVar = this.f25401r;
                        bVar.f25391g = bVar.f25390f.a();
                        OkHttpClient okHttpClient = this.f25401r.f25385a;
                        Intrinsics.checkNotNull(okHttpClient);
                        CookieJar r10 = okHttpClient.r();
                        HttpUrl httpUrl = this.f25398o;
                        Headers headers = this.f25401r.f25391g;
                        Intrinsics.checkNotNull(headers);
                        fu.e.f(r10, httpUrl, headers);
                        h();
                        return;
                    }
                    return;
                }
                throw new ProtocolException("expected chunk size and optional extensions but was \"" + this.f25399p + obj + '\"');
            } catch (NumberFormatException e10) {
                throw new ProtocolException(e10.getMessage());
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f25400q && !au.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f25401r.c().z();
                h();
            }
            k(true);
        }

        @Override // gu.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (!this.f25400q) {
                        return -1L;
                    }
                    long j11 = this.f25399p;
                    if (j11 == 0 || j11 == -1) {
                        m();
                        if (!this.f25400q) {
                            return -1L;
                        }
                    }
                    long read = super.read(sink, Math.min(j10, this.f25399p));
                    if (read != -1) {
                        this.f25399p -= read;
                        return read;
                    }
                    this.f25401r.c().z();
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
        private long f25402o;

        public e(long j10) {
            super();
            this.f25402o = j10;
            if (j10 == 0) {
                h();
            }
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (this.f25402o != 0 && !au.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                b.this.c().z();
                h();
            }
            k(true);
        }

        @Override // gu.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    long j11 = this.f25402o;
                    if (j11 == 0) {
                        return -1L;
                    }
                    long read = super.read(sink, Math.min(j11, j10));
                    if (read != -1) {
                        long j12 = this.f25402o - read;
                        this.f25402o = j12;
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
        private final l f25404d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f25405e;

        public f() {
            this.f25404d = new l(b.this.f25388d.timeout());
        }

        @Override // okio.Sink, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f25405e) {
                return;
            }
            this.f25405e = true;
            b.this.r(this.f25404d);
            b.this.f25389e = 3;
        }

        @Override // okio.Sink, java.io.Flushable
        public void flush() {
            if (this.f25405e) {
                return;
            }
            b.this.f25388d.flush();
        }

        @Override // okio.Sink
        public Timeout timeout() {
            return this.f25404d;
        }

        @Override // okio.Sink
        public void u0(Buffer source, long j10) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (!this.f25405e) {
                au.e.l(source.size(), 0L, j10);
                b.this.f25388d.u0(source, j10);
                return;
            }
            throw new IllegalStateException("closed");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class g extends a {

        /* renamed from: o  reason: collision with root package name */
        private boolean f25407o;

        public g() {
            super();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (a()) {
                return;
            }
            if (!this.f25407o) {
                h();
            }
            k(true);
        }

        @Override // gu.b.a, okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            if (j10 >= 0) {
                if (!a()) {
                    if (this.f25407o) {
                        return -1L;
                    }
                    long read = super.read(sink, j10);
                    if (read == -1) {
                        this.f25407o = true;
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

    public b(OkHttpClient okHttpClient, eu.f connection, BufferedSource source, BufferedSink sink) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f25385a = okHttpClient;
        this.f25386b = connection;
        this.f25387c = source;
        this.f25388d = sink;
        this.f25390f = new gu.a(source);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(l lVar) {
        Timeout i10 = lVar.i();
        lVar.j(Timeout.f44066e);
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
        if (this.f25389e == 1) {
            this.f25389e = 2;
            return new C0345b();
        }
        throw new IllegalStateException(("state: " + this.f25389e).toString());
    }

    private final Source v(HttpUrl httpUrl) {
        if (this.f25389e == 4) {
            this.f25389e = 5;
            return new c(this, httpUrl);
        }
        throw new IllegalStateException(("state: " + this.f25389e).toString());
    }

    private final Source w(long j10) {
        if (this.f25389e == 4) {
            this.f25389e = 5;
            return new e(j10);
        }
        throw new IllegalStateException(("state: " + this.f25389e).toString());
    }

    private final Sink x() {
        if (this.f25389e == 1) {
            this.f25389e = 2;
            return new f();
        }
        throw new IllegalStateException(("state: " + this.f25389e).toString());
    }

    private final Source y() {
        if (this.f25389e == 4) {
            this.f25389e = 5;
            c().z();
            return new g();
        }
        throw new IllegalStateException(("state: " + this.f25389e).toString());
    }

    public final void A(Headers headers, String requestLine) {
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(requestLine, "requestLine");
        if (this.f25389e == 0) {
            this.f25388d.o0(requestLine).o0("\r\n");
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                this.f25388d.o0(headers.e(i10)).o0(": ").o0(headers.j(i10)).o0("\r\n");
            }
            this.f25388d.o0("\r\n");
            this.f25389e = 1;
            return;
        }
        throw new IllegalStateException(("state: " + this.f25389e).toString());
    }

    @Override // fu.d
    public void a() {
        this.f25388d.flush();
    }

    @Override // fu.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!fu.e.b(response)) {
            return w(0L);
        }
        if (t(response)) {
            return v(response.Z0().n());
        }
        long v10 = au.e.v(response);
        if (v10 != -1) {
            return w(v10);
        }
        return y();
    }

    @Override // fu.d
    public eu.f c() {
        return this.f25386b;
    }

    @Override // fu.d
    public void cancel() {
        c().d();
    }

    @Override // fu.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!fu.e.b(response)) {
            return 0L;
        }
        if (t(response)) {
            return -1L;
        }
        return au.e.v(response);
    }

    @Override // fu.d
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

    @Override // fu.d
    public void f(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = i.f23518a;
        Proxy.Type type = c().A().b().type();
        Intrinsics.checkNotNullExpressionValue(type, "connection.route().proxy.type()");
        A(request.h(), iVar.a(request, type));
    }

    @Override // fu.d
    public Response.a g(boolean z10) {
        int i10 = this.f25389e;
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            throw new IllegalStateException(("state: " + this.f25389e).toString());
        }
        try {
            k a10 = k.f23521d.a(this.f25390f.b());
            Response.a k10 = new Response.a().p(a10.f23522a).g(a10.f23523b).m(a10.f23524c).k(this.f25390f.a());
            if (z10 && a10.f23523b == 100) {
                return null;
            }
            int i11 = a10.f23523b;
            if (i11 == 100) {
                this.f25389e = 3;
                return k10;
            } else if (102 <= i11 && i11 < 200) {
                this.f25389e = 3;
                return k10;
            } else {
                this.f25389e = 4;
                return k10;
            }
        } catch (EOFException e10) {
            String q10 = c().A().a().l().q();
            throw new IOException("unexpected end of stream on " + q10, e10);
        }
    }

    @Override // fu.d
    public void h() {
        this.f25388d.flush();
    }

    public final void z(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        long v10 = au.e.v(response);
        if (v10 == -1) {
            return;
        }
        Source w10 = w(v10);
        au.e.M(w10, Integer.MAX_VALUE, TimeUnit.MILLISECONDS);
        w10.close();
    }
}
