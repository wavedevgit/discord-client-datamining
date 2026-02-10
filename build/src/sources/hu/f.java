package hu;

import com.facebook.react.uimanager.ViewProps;
import cu.k;
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
import ku.f;
import ku.m;
import ku.n;
import okhttp3.Call;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.g;
import okio.BufferedSink;
import okio.BufferedSource;
import qu.d;
import ru.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends f.c implements cu.e {

    /* renamed from: t  reason: collision with root package name */
    public static final a f26563t = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private final g f26564c;

    /* renamed from: d  reason: collision with root package name */
    private final k f26565d;

    /* renamed from: e  reason: collision with root package name */
    private Socket f26566e;

    /* renamed from: f  reason: collision with root package name */
    private Socket f26567f;

    /* renamed from: g  reason: collision with root package name */
    private okhttp3.g f26568g;

    /* renamed from: h  reason: collision with root package name */
    private cu.j f26569h;

    /* renamed from: i  reason: collision with root package name */
    private ku.f f26570i;

    /* renamed from: j  reason: collision with root package name */
    private BufferedSource f26571j;

    /* renamed from: k  reason: collision with root package name */
    private BufferedSink f26572k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f26573l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f26574m;

    /* renamed from: n  reason: collision with root package name */
    private int f26575n;

    /* renamed from: o  reason: collision with root package name */
    private int f26576o;

    /* renamed from: p  reason: collision with root package name */
    private int f26577p;

    /* renamed from: q  reason: collision with root package name */
    private int f26578q;

    /* renamed from: r  reason: collision with root package name */
    private final List f26579r;

    /* renamed from: s  reason: collision with root package name */
    private long f26580s;

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
        public static final /* synthetic */ int[] f26581a;

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
            f26581a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ cu.c f26582d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ okhttp3.g f26583e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ okhttp3.a f26584i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(cu.c cVar, okhttp3.g gVar, okhttp3.a aVar) {
            super(0);
            this.f26582d = cVar;
            this.f26583e = gVar;
            this.f26584i = aVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public final List invoke() {
            pu.c d10 = this.f26582d.d();
            Intrinsics.checkNotNull(d10);
            return d10.a(this.f26583e.d(), this.f26584i.l().i());
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
            okhttp3.g gVar = f.this.f26568g;
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
    public static final class e extends d.AbstractC0641d {

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ hu.c f26586o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(BufferedSource bufferedSource, BufferedSink bufferedSink, hu.c cVar) {
            super(true, bufferedSource, bufferedSink);
            this.f26586o = cVar;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f26586o.a(-1L, true, true, null);
        }
    }

    public f(g connectionPool, k route) {
        Intrinsics.checkNotNullParameter(connectionPool, "connectionPool");
        Intrinsics.checkNotNullParameter(route, "route");
        this.f26564c = connectionPool;
        this.f26565d = route;
        this.f26578q = 1;
        this.f26579r = new ArrayList();
        this.f26580s = LongCompanionObject.MAX_VALUE;
    }

    private final boolean B(List list) {
        List<k> list2 = list;
        if ((list2 instanceof Collection) && list2.isEmpty()) {
            return false;
        }
        for (k kVar : list2) {
            Proxy.Type type = kVar.b().type();
            Proxy.Type type2 = Proxy.Type.DIRECT;
            if (type == type2 && this.f26565d.b().type() == type2 && Intrinsics.areEqual(this.f26565d.d(), kVar.d())) {
                return true;
            }
        }
        return false;
    }

    private final void F(int i10) {
        Socket socket = this.f26567f;
        Intrinsics.checkNotNull(socket);
        BufferedSource bufferedSource = this.f26571j;
        Intrinsics.checkNotNull(bufferedSource);
        BufferedSink bufferedSink = this.f26572k;
        Intrinsics.checkNotNull(bufferedSink);
        socket.setSoTimeout(0);
        ku.f a10 = new f.a(true, gu.e.f24820i).q(socket, this.f26565d.a().l().i(), bufferedSource, bufferedSink).k(this).l(i10).a();
        this.f26570i = a10;
        this.f26578q = ku.f.N.a().d();
        ku.f.v2(a10, false, null, 3, null);
    }

    private final boolean G(HttpUrl httpUrl) {
        okhttp3.g gVar;
        if (du.e.f20986h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        HttpUrl l10 = this.f26565d.a().l();
        if (httpUrl.o() != l10.o()) {
            return false;
        }
        if (Intrinsics.areEqual(httpUrl.i(), l10.i())) {
            return true;
        }
        if (!this.f26574m && (gVar = this.f26568g) != null) {
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
            pu.d dVar = pu.d.f44558a;
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
        Proxy b10 = this.f26565d.b();
        okhttp3.a a10 = this.f26565d.a();
        Proxy.Type type = b10.type();
        if (type == null) {
            i12 = -1;
        } else {
            i12 = b.f26581a[type.ordinal()];
        }
        if (i12 != 1 && i12 != 2) {
            createSocket = new Socket(b10);
        } else {
            createSocket = a10.j().createSocket();
            Intrinsics.checkNotNull(createSocket);
        }
        this.f26566e = createSocket;
        eVar.j(call, this.f26565d.d(), b10);
        createSocket.setSoTimeout(i11);
        try {
            mu.h.f37655a.g().f(createSocket, this.f26565d.d(), i10);
            try {
                this.f26571j = x.d(x.l(createSocket));
                this.f26572k = x.c(x.h(createSocket));
            } catch (NullPointerException e10) {
                if (!Intrinsics.areEqual(e10.getMessage(), "throw with null exception")) {
                    return;
                }
                throw new IOException(e10);
            }
        } catch (ConnectException e11) {
            ConnectException connectException = new ConnectException("Failed to connect to " + this.f26565d.d());
            connectException.initCause(e11);
            throw connectException;
        }
    }

    private final void i(hu.b bVar) {
        SSLSocket sSLSocket;
        cu.j jVar;
        okhttp3.a a10 = this.f26565d.a();
        SSLSocketFactory k10 = a10.k();
        SSLSocket sSLSocket2 = null;
        String str = null;
        try {
            Intrinsics.checkNotNull(k10);
            Socket createSocket = k10.createSocket(this.f26566e, a10.l().i(), a10.l().o(), true);
            Intrinsics.checkNotNull(createSocket, "null cannot be cast to non-null type javax.net.ssl.SSLSocket");
            sSLSocket = (SSLSocket) createSocket;
        } catch (Throwable th2) {
            th = th2;
        }
        try {
            okhttp3.d a11 = bVar.a(sSLSocket);
            if (a11.h()) {
                mu.h.f37655a.g().e(sSLSocket, a10.l().i(), a10.f());
            }
            sSLSocket.startHandshake();
            SSLSession sslSocketSession = sSLSocket.getSession();
            g.a aVar = okhttp3.g.f42306e;
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
                    throw new SSLPeerUnverifiedException(StringsKt.l("\n              |Hostname " + a10.l().i() + " not verified:\n              |    certificate: " + cu.c.f20259c.a(x509Certificate) + "\n              |    DN: " + x509Certificate.getSubjectDN().getName() + "\n              |    subjectAltNames: " + pu.d.f44558a.a(x509Certificate) + "\n              ", null, 1, null));
                }
                throw new SSLPeerUnverifiedException("Hostname " + a10.l().i() + " not verified (no certificates)");
            }
            cu.c a13 = a10.a();
            Intrinsics.checkNotNull(a13);
            this.f26568g = new okhttp3.g(a12.e(), a12.a(), a12.c(), new c(a13, a12, a10));
            a13.b(a10.l().i(), new d());
            if (a11.h()) {
                str = mu.h.f37655a.g().h(sSLSocket);
            }
            this.f26567f = sSLSocket;
            this.f26571j = x.d(x.l(sSLSocket));
            this.f26572k = x.c(x.h(sSLSocket));
            if (str != null) {
                jVar = cu.j.f20275e.a(str);
            } else {
                jVar = cu.j.HTTP_1_1;
            }
            this.f26569h = jVar;
            mu.h.f37655a.g().b(sSLSocket);
        } catch (Throwable th3) {
            th = th3;
            sSLSocket2 = sSLSocket;
            if (sSLSocket2 != null) {
                mu.h.f37655a.g().b(sSLSocket2);
            }
            if (sSLSocket2 != null) {
                du.e.n(sSLSocket2);
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
                Socket socket = this.f26566e;
                if (socket != null) {
                    du.e.n(socket);
                }
                this.f26566e = null;
                this.f26572k = null;
                this.f26571j = null;
                eVar.h(call, this.f26565d.d(), this.f26565d.b(), null);
            } else {
                return;
            }
        }
    }

    private final Request k(int i10, int i11, Request request, HttpUrl httpUrl) {
        String str = "CONNECT " + du.e.T(httpUrl, true) + " HTTP/1.1";
        while (true) {
            BufferedSource bufferedSource = this.f26571j;
            Intrinsics.checkNotNull(bufferedSource);
            BufferedSink bufferedSink = this.f26572k;
            Intrinsics.checkNotNull(bufferedSink);
            ju.b bVar = new ju.b(null, this, bufferedSource, bufferedSink);
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            bufferedSource.timeout().g(i10, timeUnit);
            bufferedSink.timeout().g(i11, timeUnit);
            bVar.A(request.h(), str);
            bVar.a();
            Response.a g10 = bVar.g(false);
            Intrinsics.checkNotNull(g10);
            Response c10 = g10.r(request).c();
            bVar.z(c10);
            int z10 = c10.z();
            if (z10 != 200) {
                if (z10 == 407) {
                    Request a10 = this.f26565d.a().h().a(this.f26565d, c10);
                    if (a10 != null) {
                        if (StringsKt.A("close", Response.Z(c10, "Connection", null, 2, null), true)) {
                            return a10;
                        }
                        request = a10;
                    } else {
                        throw new IOException("Failed to authenticate with proxy");
                    }
                } else {
                    throw new IOException("Unexpected response code for CONNECT: " + c10.z());
                }
            } else if (bufferedSource.e().k1() && bufferedSink.e().k1()) {
                return null;
            } else {
                throw new IOException("TLS tunnel buffered too many bytes!");
            }
        }
    }

    private final Request l() {
        Request b10 = new Request.Builder().m(this.f26565d.a().l()).g("CONNECT", null).e("Host", du.e.T(this.f26565d.a().l(), true)).e("Proxy-Connection", "Keep-Alive").e("User-Agent", "okhttp/4.12.0").b();
        Request a10 = this.f26565d.a().h().a(this.f26565d, new Response.a().r(b10).p(cu.j.HTTP_1_1).g(407).m("Preemptive Authenticate").b(du.e.f20981c).s(-1L).q(-1L).j("Proxy-Authenticate", "OkHttp-Preemptive").c());
        if (a10 == null) {
            return b10;
        }
        return a10;
    }

    private final void m(hu.b bVar, int i10, Call call, okhttp3.e eVar) {
        if (this.f26565d.a().k() == null) {
            List f10 = this.f26565d.a().f();
            cu.j jVar = cu.j.H2_PRIOR_KNOWLEDGE;
            if (f10.contains(jVar)) {
                this.f26567f = this.f26566e;
                this.f26569h = jVar;
                F(i10);
                return;
            }
            this.f26567f = this.f26566e;
            this.f26569h = cu.j.HTTP_1_1;
            return;
        }
        eVar.C(call);
        i(bVar);
        eVar.B(call, this.f26568g);
        if (this.f26569h == cu.j.HTTP_2) {
            F(i10);
        }
    }

    public k A() {
        return this.f26565d;
    }

    public final void C(long j10) {
        this.f26580s = j10;
    }

    public final void D(boolean z10) {
        this.f26573l = z10;
    }

    public Socket E() {
        Socket socket = this.f26567f;
        Intrinsics.checkNotNull(socket);
        return socket;
    }

    public final synchronized void H(hu.e call, IOException iOException) {
        try {
            Intrinsics.checkNotNullParameter(call, "call");
            if (iOException instanceof n) {
                if (((n) iOException).f35443d == ku.b.REFUSED_STREAM) {
                    int i10 = this.f26577p + 1;
                    this.f26577p = i10;
                    if (i10 > 1) {
                        this.f26573l = true;
                        this.f26575n++;
                    }
                } else if (((n) iOException).f35443d != ku.b.CANCEL || !call.C()) {
                    this.f26573l = true;
                    this.f26575n++;
                }
            } else if (!v() || (iOException instanceof ku.a)) {
                this.f26573l = true;
                if (this.f26576o == 0) {
                    if (iOException != null) {
                        g(call.k(), this.f26565d, iOException);
                    }
                    this.f26575n++;
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // ku.f.c
    public synchronized void a(ku.f connection, m settings) {
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(settings, "settings");
        this.f26578q = settings.d();
    }

    @Override // ku.f.c
    public void b(ku.i stream) {
        Intrinsics.checkNotNullParameter(stream, "stream");
        stream.d(ku.b.REFUSED_STREAM, null);
    }

    public final void d() {
        Socket socket = this.f26566e;
        if (socket != null) {
            du.e.n(socket);
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
        throw new UnsupportedOperationException("Method not decompiled: hu.f.f(int, int, int, int, boolean, okhttp3.Call, okhttp3.e):void");
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
        return this.f26579r;
    }

    public final long o() {
        return this.f26580s;
    }

    public final boolean p() {
        return this.f26573l;
    }

    public final int q() {
        return this.f26575n;
    }

    public okhttp3.g r() {
        return this.f26568g;
    }

    public final synchronized void s() {
        this.f26576o++;
    }

    public final boolean t(okhttp3.a address, List list) {
        Intrinsics.checkNotNullParameter(address, "address");
        if (du.e.f20986h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        } else if (this.f26579r.size() >= this.f26578q || this.f26573l || !this.f26565d.a().d(address)) {
            return false;
        } else {
            if (Intrinsics.areEqual(address.l().i(), A().a().l().i())) {
                return true;
            }
            if (this.f26570i == null || list == null || !B(list) || address.e() != pu.d.f44558a || !G(address.l())) {
                return false;
            }
            try {
                cu.c a10 = address.a();
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
        sb2.append(this.f26565d.a().l().i());
        sb2.append(':');
        sb2.append(this.f26565d.a().l().o());
        sb2.append(", proxy=");
        sb2.append(this.f26565d.b());
        sb2.append(" hostAddress=");
        sb2.append(this.f26565d.d());
        sb2.append(" cipherSuite=");
        okhttp3.g gVar = this.f26568g;
        if (gVar == null || (obj = gVar.a()) == null) {
            obj = ViewProps.NONE;
        }
        sb2.append(obj);
        sb2.append(" protocol=");
        sb2.append(this.f26569h);
        sb2.append('}');
        return sb2.toString();
    }

    public final boolean u(boolean z10) {
        long j10;
        if (du.e.f20986h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        long nanoTime = System.nanoTime();
        Socket socket = this.f26566e;
        Intrinsics.checkNotNull(socket);
        Socket socket2 = this.f26567f;
        Intrinsics.checkNotNull(socket2);
        BufferedSource bufferedSource = this.f26571j;
        Intrinsics.checkNotNull(bufferedSource);
        if (!socket.isClosed() && !socket2.isClosed() && !socket2.isInputShutdown() && !socket2.isOutputShutdown()) {
            ku.f fVar = this.f26570i;
            if (fVar != null) {
                return fVar.W1(nanoTime);
            }
            synchronized (this) {
                j10 = nanoTime - this.f26580s;
            }
            if (j10 >= 10000000000L && z10) {
                return du.e.G(socket2, bufferedSource);
            }
            return true;
        }
        return false;
    }

    public final boolean v() {
        if (this.f26570i != null) {
            return true;
        }
        return false;
    }

    public final iu.d w(OkHttpClient client, iu.g chain) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(chain, "chain");
        Socket socket = this.f26567f;
        Intrinsics.checkNotNull(socket);
        BufferedSource bufferedSource = this.f26571j;
        Intrinsics.checkNotNull(bufferedSource);
        BufferedSink bufferedSink = this.f26572k;
        Intrinsics.checkNotNull(bufferedSink);
        ku.f fVar = this.f26570i;
        if (fVar != null) {
            return new ku.g(client, this, chain, fVar);
        }
        socket.setSoTimeout(chain.k());
        TimeUnit timeUnit = TimeUnit.MILLISECONDS;
        bufferedSource.timeout().g(chain.h(), timeUnit);
        bufferedSink.timeout().g(chain.j(), timeUnit);
        return new ju.b(client, this, bufferedSource, bufferedSink);
    }

    public final d.AbstractC0641d x(hu.c exchange) {
        Intrinsics.checkNotNullParameter(exchange, "exchange");
        Socket socket = this.f26567f;
        Intrinsics.checkNotNull(socket);
        BufferedSource bufferedSource = this.f26571j;
        Intrinsics.checkNotNull(bufferedSource);
        BufferedSink bufferedSink = this.f26572k;
        Intrinsics.checkNotNull(bufferedSink);
        socket.setSoTimeout(0);
        z();
        return new e(bufferedSource, bufferedSink, exchange);
    }

    public final synchronized void y() {
        this.f26574m = true;
    }

    public final synchronized void z() {
        this.f26573l = true;
    }
}
