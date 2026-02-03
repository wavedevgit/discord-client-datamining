package bu;

import com.facebook.react.uimanager.ViewProps;
import eu.f;
import eu.m;
import eu.n;
import java.io.IOException;
import java.net.ConnectException;
import java.net.Proxy;
import java.net.Socket;
import java.security.cert.Certificate;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.TimeUnit;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLPeerUnverifiedException;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.text.StringsKt;
import ku.d;
import lu.x;
import okhttp3.Call;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.g;
import okio.BufferedSink;
import okio.BufferedSource;
import wt.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends f.c implements wt.e {

    /* renamed from: t  reason: collision with root package name */
    public static final a f6823t = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private final g f6824c;

    /* renamed from: d  reason: collision with root package name */
    private final k f6825d;

    /* renamed from: e  reason: collision with root package name */
    private Socket f6826e;

    /* renamed from: f  reason: collision with root package name */
    private Socket f6827f;

    /* renamed from: g  reason: collision with root package name */
    private okhttp3.g f6828g;

    /* renamed from: h  reason: collision with root package name */
    private wt.j f6829h;

    /* renamed from: i  reason: collision with root package name */
    private eu.f f6830i;

    /* renamed from: j  reason: collision with root package name */
    private BufferedSource f6831j;

    /* renamed from: k  reason: collision with root package name */
    private BufferedSink f6832k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f6833l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f6834m;

    /* renamed from: n  reason: collision with root package name */
    private int f6835n;

    /* renamed from: o  reason: collision with root package name */
    private int f6836o;

    /* renamed from: p  reason: collision with root package name */
    private int f6837p;

    /* renamed from: q  reason: collision with root package name */
    private int f6838q;

    /* renamed from: r  reason: collision with root package name */
    private final List f6839r;

    /* renamed from: s  reason: collision with root package name */
    private long f6840s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f6841a;

        static {
            int[] iArr = new int[Proxy.Type.values().length];
            try {
                iArr[Proxy.Type.DIRECT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Proxy.Type.HTTP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f6841a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ wt.c f6842d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ okhttp3.g f6843e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ okhttp3.a f6844i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(wt.c cVar, okhttp3.g gVar, okhttp3.a aVar) {
            super(0);
            this.f6842d = cVar;
            this.f6843e = gVar;
            this.f6844i = aVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public final List invoke() {
            ju.c d10 = this.f6842d.d();
            Intrinsics.checkNotNull(d10);
            return d10.a(this.f6843e.d(), this.f6844i.l().i());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends Lambda implements Function0 {
        d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public final List invoke() {
            okhttp3.g gVar = f.this.f6828g;
            Intrinsics.checkNotNull(gVar);
            List<Certificate> d10 = gVar.d();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(d10, 10));
            for (Certificate certificate : d10) {
                Intrinsics.checkNotNull(certificate, "null cannot be cast to non-null type java.security.cert.X509Certificate");
                arrayList.add((X509Certificate) certificate);
            }
            return arrayList;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends d.AbstractC0460d {

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ bu.c f6846o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(BufferedSource bufferedSource, BufferedSink bufferedSink, bu.c cVar) {
            super(true, bufferedSource, bufferedSink);
            this.f6846o = cVar;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f6846o.a(-1L, true, true, null);
        }
    }

    public f(g connectionPool, k route) {
        Intrinsics.checkNotNullParameter(connectionPool, "connectionPool");
        Intrinsics.checkNotNullParameter(route, "route");
        this.f6824c = connectionPool;
        this.f6825d = route;
        this.f6838q = 1;
        this.f6839r = new ArrayList();
        this.f6840s = LongCompanionObject.MAX_VALUE;
    }

    private final boolean B(List list) {
        List<k> list2 = list;
        if ((list2 instanceof Collection) && list2.isEmpty()) {
            return false;
        }
        for (k kVar : list2) {
            Proxy.Type type = kVar.b().type();
            Proxy.Type type2 = Proxy.Type.DIRECT;
            if (type == type2 && this.f6825d.b().type() == type2 && Intrinsics.areEqual(this.f6825d.d(), kVar.d())) {
                return true;
            }
        }
        return false;
    }

    private final void F(int i10) {
        Socket socket = this.f6827f;
        Intrinsics.checkNotNull(socket);
        BufferedSource bufferedSource = this.f6831j;
        Intrinsics.checkNotNull(bufferedSource);
        BufferedSink bufferedSink = this.f6832k;
        Intrinsics.checkNotNull(bufferedSink);
        socket.setSoTimeout(0);
        eu.f a10 = new f.a(true, au.e.f6153i).q(socket, this.f6825d.a().l().i(), bufferedSource, bufferedSink).k(this).l(i10).a();
        this.f6830i = a10;
        this.f6838q = eu.f.N.a().d();
        eu.f.v2(a10, false, null, 3, null);
    }

    private final boolean G(HttpUrl httpUrl) {
        okhttp3.g gVar;
        if (xt.e.f53574h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        HttpUrl l10 = this.f6825d.a().l();
        if (httpUrl.o() != l10.o()) {
            return false;
        }
        if (Intrinsics.areEqual(httpUrl.i(), l10.i())) {
            return true;
        }
        if (!this.f6834m && (gVar = this.f6828g) != null) {
            Intrinsics.checkNotNull(gVar);
            if (e(httpUrl, gVar)) {
                return true;
            }
        }
        return false;
    }

    private final boolean e(HttpUrl httpUrl, okhttp3.g gVar) {
        List d10 = gVar.d();
        if (!d10.isEmpty()) {
            ju.d dVar = ju.d.f32009a;
            String i10 = httpUrl.i();
            Object obj = d10.get(0);
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.security.cert.X509Certificate");
            if (dVar.e(i10, (X509Certificate) obj)) {
                return true;
            }
        }
        return false;
    }

    private final void h(int i10, int i11, Call call, okhttp3.e eVar) {
        int i12;
        Socket createSocket;
        Proxy b10 = this.f6825d.b();
        okhttp3.a a10 = this.f6825d.a();
        Proxy.Type type = b10.type();
        if (type == null) {
            i12 = -1;
        } else {
            i12 = b.f6841a[type.ordinal()];
        }
        if (i12 != 1 && i12 != 2) {
            createSocket = new Socket(b10);
        } else {
            createSocket = a10.j().createSocket();
            Intrinsics.checkNotNull(createSocket);
        }
        this.f6826e = createSocket;
        eVar.j(call, this.f6825d.d(), b10);
        createSocket.setSoTimeout(i11);
        try {
            gu.h.f26650a.g().f(createSocket, this.f6825d.d(), i10);
            try {
                this.f6831j = x.d(x.l(createSocket));
                this.f6832k = x.c(x.h(createSocket));
            } catch (NullPointerException e10) {
                if (!Intrinsics.areEqual(e10.getMessage(), "throw with null exception")) {
                    return;
                }
                throw new IOException(e10);
            }
        } catch (ConnectException e11) {
            ConnectException connectException = new ConnectException("Failed to connect to " + this.f6825d.d());
            connectException.initCause(e11);
            throw connectException;
        }
    }

    private final void i(bu.b bVar) {
        SSLSocket sSLSocket;
        wt.j jVar;
        okhttp3.a a10 = this.f6825d.a();
        SSLSocketFactory k10 = a10.k();
        SSLSocket sSLSocket2 = null;
        String str = null;
        try {
            Intrinsics.checkNotNull(k10);
            Socket createSocket = k10.createSocket(this.f6826e, a10.l().i(), a10.l().o(), true);
            Intrinsics.checkNotNull(createSocket, "null cannot be cast to non-null type javax.net.ssl.SSLSocket");
            sSLSocket = (SSLSocket) createSocket;
        } catch (Throwable th2) {
            th = th2;
        }
        try {
            okhttp3.d a11 = bVar.a(sSLSocket);
            if (a11.h()) {
                gu.h.f26650a.g().e(sSLSocket, a10.l().i(), a10.f());
            }
            sSLSocket.startHandshake();
            SSLSession sslSocketSession = sSLSocket.getSession();
            g.a aVar = okhttp3.g.f44272e;
            Intrinsics.checkNotNullExpressionValue(sslSocketSession, "sslSocketSession");
            okhttp3.g a12 = aVar.a(sslSocketSession);
            HostnameVerifier e10 = a10.e();
            Intrinsics.checkNotNull(e10);
            if (!e10.verify(a10.l().i(), sslSocketSession)) {
                List d10 = a12.d();
                if (!d10.isEmpty()) {
                    Object obj = d10.get(0);
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.security.cert.X509Certificate");
                    X509Certificate x509Certificate = (X509Certificate) obj;
                    throw new SSLPeerUnverifiedException(StringsKt.l("\n              |Hostname " + a10.l().i() + " not verified:\n              |    certificate: " + wt.c.f52749c.a(x509Certificate) + "\n              |    DN: " + x509Certificate.getSubjectDN().getName() + "\n              |    subjectAltNames: " + ju.d.f32009a.a(x509Certificate) + "\n              ", null, 1, null));
                }
                throw new SSLPeerUnverifiedException("Hostname " + a10.l().i() + " not verified (no certificates)");
            }
            wt.c a13 = a10.a();
            Intrinsics.checkNotNull(a13);
            this.f6828g = new okhttp3.g(a12.e(), a12.a(), a12.c(), new c(a13, a12, a10));
            a13.b(a10.l().i(), new d());
            if (a11.h()) {
                str = gu.h.f26650a.g().h(sSLSocket);
            }
            this.f6827f = sSLSocket;
            this.f6831j = x.d(x.l(sSLSocket));
            this.f6832k = x.c(x.h(sSLSocket));
            if (str != null) {
                jVar = wt.j.f52765e.a(str);
            } else {
                jVar = wt.j.HTTP_1_1;
            }
            this.f6829h = jVar;
            gu.h.f26650a.g().b(sSLSocket);
        } catch (Throwable th3) {
            th = th3;
            sSLSocket2 = sSLSocket;
            if (sSLSocket2 != null) {
                gu.h.f26650a.g().b(sSLSocket2);
            }
            if (sSLSocket2 != null) {
                xt.e.n(sSLSocket2);
            }
            throw th;
        }
    }

    private final void j(int i10, int i11, int i12, Call call, okhttp3.e eVar) {
        Request l10 = l();
        HttpUrl n10 = l10.n();
        for (int i13 = 0; i13 < 21; i13++) {
            h(i10, i11, call, eVar);
            l10 = k(i11, i12, l10, n10);
            if (l10 != null) {
                Socket socket = this.f6826e;
                if (socket != null) {
                    xt.e.n(socket);
                }
                this.f6826e = null;
                this.f6832k = null;
                this.f6831j = null;
                eVar.h(call, this.f6825d.d(), this.f6825d.b(), null);
            } else {
                return;
            }
        }
    }

    private final Request k(int i10, int i11, Request request, HttpUrl httpUrl) {
        String str = "CONNECT " + xt.e.T(httpUrl, true) + " HTTP/1.1";
        while (true) {
            BufferedSource bufferedSource = this.f6831j;
            Intrinsics.checkNotNull(bufferedSource);
            BufferedSink bufferedSink = this.f6832k;
            Intrinsics.checkNotNull(bufferedSink);
            du.b bVar = new du.b(null, this, bufferedSource, bufferedSink);
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            bufferedSource.timeout().g(i10, timeUnit);
            bufferedSink.timeout().g(i11, timeUnit);
            bVar.A(request.h(), str);
            bVar.a();
            Response.a g10 = bVar.g(false);
            Intrinsics.checkNotNull(g10);
            Response c10 = g10.r(request).c();
            bVar.z(c10);
            int L = c10.L();
            if (L != 200) {
                if (L == 407) {
                    Request a10 = this.f6825d.a().h().a(this.f6825d, c10);
                    if (a10 != null) {
                        if (StringsKt.A("close", Response.D0(c10, "Connection", null, 2, null), true)) {
                            return a10;
                        }
                        request = a10;
                    } else {
                        throw new IOException("Failed to authenticate with proxy");
                    }
                } else {
                    throw new IOException("Unexpected response code for CONNECT: " + c10.L());
                }
            } else if (bufferedSource.e().o1() && bufferedSink.e().o1()) {
                return null;
            } else {
                throw new IOException("TLS tunnel buffered too many bytes!");
            }
        }
    }

    private final Request l() {
        Request b10 = new Request.Builder().m(this.f6825d.a().l()).g("CONNECT", null).e("Host", xt.e.T(this.f6825d.a().l(), true)).e("Proxy-Connection", "Keep-Alive").e("User-Agent", "okhttp/4.12.0").b();
        Request a10 = this.f6825d.a().h().a(this.f6825d, new Response.a().r(b10).p(wt.j.HTTP_1_1).g(407).m("Preemptive Authenticate").b(xt.e.f53569c).s(-1L).q(-1L).j("Proxy-Authenticate", "OkHttp-Preemptive").c());
        if (a10 == null) {
            return b10;
        }
        return a10;
    }

    private final void m(bu.b bVar, int i10, Call call, okhttp3.e eVar) {
        if (this.f6825d.a().k() == null) {
            List f10 = this.f6825d.a().f();
            wt.j jVar = wt.j.H2_PRIOR_KNOWLEDGE;
            if (f10.contains(jVar)) {
                this.f6827f = this.f6826e;
                this.f6829h = jVar;
                F(i10);
                return;
            }
            this.f6827f = this.f6826e;
            this.f6829h = wt.j.HTTP_1_1;
            return;
        }
        eVar.C(call);
        i(bVar);
        eVar.B(call, this.f6828g);
        if (this.f6829h == wt.j.HTTP_2) {
            F(i10);
        }
    }

    public k A() {
        return this.f6825d;
    }

    public final void C(long j10) {
        this.f6840s = j10;
    }

    public final void D(boolean z10) {
        this.f6833l = z10;
    }

    public Socket E() {
        Socket socket = this.f6827f;
        Intrinsics.checkNotNull(socket);
        return socket;
    }

    public final synchronized void H(bu.e call, IOException iOException) {
        try {
            Intrinsics.checkNotNullParameter(call, "call");
            if (iOException instanceof n) {
                if (((n) iOException).f22869d == eu.b.REFUSED_STREAM) {
                    int i10 = this.f6837p + 1;
                    this.f6837p = i10;
                    if (i10 > 1) {
                        this.f6833l = true;
                        this.f6835n++;
                    }
                } else if (((n) iOException).f22869d != eu.b.CANCEL || !call.x()) {
                    this.f6833l = true;
                    this.f6835n++;
                }
            } else if (!v() || (iOException instanceof eu.a)) {
                this.f6833l = true;
                if (this.f6836o == 0) {
                    if (iOException != null) {
                        g(call.k(), this.f6825d, iOException);
                    }
                    this.f6835n++;
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // eu.f.c
    public synchronized void a(eu.f connection, m settings) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(settings, "settings");
        this.f6838q = settings.d();
    }

    @Override // eu.f.c
    public void b(eu.i stream) {
        Intrinsics.checkNotNullParameter(stream, "stream");
        stream.d(eu.b.REFUSED_STREAM, null);
    }

    public final void d() {
        Socket socket = this.f6826e;
        if (socket != null) {
            xt.e.n(socket);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:50:0x00fb  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x0102  */
    /* JADX WARN: Removed duplicated region for block: B:56:0x0128  */
    /* JADX WARN: Removed duplicated region for block: B:57:0x012e  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void f(int r13, int r14, int r15, int r16, boolean r17, okhttp3.Call r18, okhttp3.e r19) {
        /*
            Method dump skipped, instructions count: 341
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: bu.f.f(int, int, int, int, boolean, okhttp3.Call, okhttp3.e):void");
    }

    public final void g(OkHttpClient client, k failedRoute, IOException failure) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(failedRoute, "failedRoute");
        Intrinsics.checkNotNullParameter(failure, "failure");
        if (failedRoute.b().type() != Proxy.Type.DIRECT) {
            okhttp3.a a10 = failedRoute.a();
            a10.i().connectFailed(a10.l().t(), failedRoute.b().address(), failure);
        }
        client.y().b(failedRoute);
    }

    public final List n() {
        return this.f6839r;
    }

    public final long o() {
        return this.f6840s;
    }

    public final boolean p() {
        return this.f6833l;
    }

    public final int q() {
        return this.f6835n;
    }

    public okhttp3.g r() {
        return this.f6828g;
    }

    public final synchronized void s() {
        this.f6836o++;
    }

    public final boolean t(okhttp3.a address, List list) {
        Intrinsics.checkNotNullParameter(address, "address");
        if (xt.e.f53574h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        } else if (this.f6839r.size() >= this.f6838q || this.f6833l || !this.f6825d.a().d(address)) {
            return false;
        } else {
            if (Intrinsics.areEqual(address.l().i(), A().a().l().i())) {
                return true;
            }
            if (this.f6830i == null || list == null || !B(list) || address.e() != ju.d.f32009a || !G(address.l())) {
                return false;
            }
            try {
                wt.c a10 = address.a();
                Intrinsics.checkNotNull(a10);
                String i10 = address.l().i();
                okhttp3.g r10 = r();
                Intrinsics.checkNotNull(r10);
                a10.a(i10, r10.d());
                return true;
            } catch (SSLPeerUnverifiedException unused) {
                return false;
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Connection{");
        sb2.append(this.f6825d.a().l().i());
        sb2.append(':');
        sb2.append(this.f6825d.a().l().o());
        sb2.append(", proxy=");
        sb2.append(this.f6825d.b());
        sb2.append(" hostAddress=");
        sb2.append(this.f6825d.d());
        sb2.append(" cipherSuite=");
        okhttp3.g gVar = this.f6828g;
        if (gVar == null || (obj = gVar.a()) == null) {
            obj = ViewProps.NONE;
        }
        sb2.append(obj);
        sb2.append(" protocol=");
        sb2.append(this.f6829h);
        sb2.append('}');
        return sb2.toString();
    }

    public final boolean u(boolean z10) {
        long j10;
        if (xt.e.f53574h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        long nanoTime = System.nanoTime();
        Socket socket = this.f6826e;
        Intrinsics.checkNotNull(socket);
        Socket socket2 = this.f6827f;
        Intrinsics.checkNotNull(socket2);
        BufferedSource bufferedSource = this.f6831j;
        Intrinsics.checkNotNull(bufferedSource);
        if (!socket.isClosed() && !socket2.isClosed() && !socket2.isInputShutdown() && !socket2.isOutputShutdown()) {
            eu.f fVar = this.f6830i;
            if (fVar != null) {
                return fVar.Y1(nanoTime);
            }
            synchronized (this) {
                j10 = nanoTime - this.f6840s;
            }
            if (j10 >= 10000000000L && z10) {
                return xt.e.G(socket2, bufferedSource);
            }
            return true;
        }
        return false;
    }

    public final boolean v() {
        if (this.f6830i != null) {
            return true;
        }
        return false;
    }

    public final cu.d w(OkHttpClient client, cu.g chain) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(chain, "chain");
        Socket socket = this.f6827f;
        Intrinsics.checkNotNull(socket);
        BufferedSource bufferedSource = this.f6831j;
        Intrinsics.checkNotNull(bufferedSource);
        BufferedSink bufferedSink = this.f6832k;
        Intrinsics.checkNotNull(bufferedSink);
        eu.f fVar = this.f6830i;
        if (fVar != null) {
            return new eu.g(client, this, chain, fVar);
        }
        socket.setSoTimeout(chain.k());
        TimeUnit timeUnit = TimeUnit.MILLISECONDS;
        bufferedSource.timeout().g(chain.g(), timeUnit);
        bufferedSink.timeout().g(chain.j(), timeUnit);
        return new du.b(client, this, bufferedSource, bufferedSink);
    }

    public final d.AbstractC0460d x(bu.c exchange) {
        Intrinsics.checkNotNullParameter(exchange, "exchange");
        Socket socket = this.f6827f;
        Intrinsics.checkNotNull(socket);
        BufferedSource bufferedSource = this.f6831j;
        Intrinsics.checkNotNull(bufferedSource);
        BufferedSink bufferedSink = this.f6832k;
        Intrinsics.checkNotNull(bufferedSink);
        socket.setSoTimeout(0);
        z();
        return new e(bufferedSource, bufferedSink, exchange);
    }

    public final synchronized void y() {
        this.f6834m = true;
    }

    public final synchronized void z() {
        this.f6833l = true;
    }
}
