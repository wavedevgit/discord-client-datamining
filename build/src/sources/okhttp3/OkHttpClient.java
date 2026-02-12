package okhttp3;

import java.net.Proxy;
import java.net.ProxySelector;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import javax.net.SocketFactory;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.X509TrustManager;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lu.j;
import lu.l;
import okhttp3.Call;
import okhttp3.e;
import vu.h;
import yu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class OkHttpClient implements Cloneable, Call.Factory {
    public static final a P = new a(null);
    private static final List Q = mu.e.w(j.HTTP_2, j.HTTP_1_1);
    private static final List R = mu.e.w(d.f40537i, d.f40539k);
    private final SocketFactory A;
    private final SSLSocketFactory B;
    private final X509TrustManager C;
    private final List D;
    private final List E;
    private final HostnameVerifier F;
    private final lu.c G;
    private final yu.c H;
    private final int I;
    private final int J;
    private final int K;
    private final int L;
    private final int M;
    private final long N;
    private final qu.h O;

    /* renamed from: d  reason: collision with root package name */
    private final Dispatcher f40325d;

    /* renamed from: e  reason: collision with root package name */
    private final lu.f f40326e;

    /* renamed from: i  reason: collision with root package name */
    private final List f40327i;

    /* renamed from: o  reason: collision with root package name */
    private final List f40328o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f40329p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f40330q;

    /* renamed from: r  reason: collision with root package name */
    private final lu.a f40331r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f40332s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f40333t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f40334u;

    /* renamed from: v  reason: collision with root package name */
    private final b f40335v;

    /* renamed from: w  reason: collision with root package name */
    private final lu.h f40336w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f40337x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f40338y;

    /* renamed from: z  reason: collision with root package name */
    private final lu.a f40339z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final List a() {
            return OkHttpClient.R;
        }

        public final List b() {
            return OkHttpClient.Q;
        }

        private a() {
        }
    }

    public OkHttpClient(Builder builder) {
        ProxySelector H;
        Intrinsics.checkNotNullParameter(builder, "builder");
        this.f40325d = builder.u();
        this.f40326e = builder.r();
        this.f40327i = mu.e.V(builder.A());
        this.f40328o = mu.e.V(builder.C());
        this.f40329p = builder.w();
        this.f40330q = builder.J();
        this.f40331r = builder.l();
        this.f40332s = builder.x();
        this.f40333t = builder.y();
        this.f40334u = builder.t();
        this.f40335v = builder.m();
        this.f40336w = builder.v();
        this.f40337x = builder.F();
        if (builder.F() != null) {
            H = xu.a.f55166a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = xu.a.f55166a;
            }
        }
        this.f40338y = H;
        this.f40339z = builder.G();
        this.A = builder.L();
        List s10 = builder.s();
        this.D = s10;
        this.E = builder.E();
        this.F = builder.z();
        this.I = builder.n();
        this.J = builder.q();
        this.K = builder.I();
        this.L = builder.N();
        this.M = builder.D();
        this.N = builder.B();
        qu.h K = builder.K();
        this.O = K == null ? new qu.h() : K;
        List<d> list = s10;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (d dVar : list) {
                if (dVar.f()) {
                    if (builder.M() != null) {
                        this.B = builder.M();
                        yu.c o10 = builder.o();
                        Intrinsics.checkNotNull(o10);
                        this.H = o10;
                        X509TrustManager O = builder.O();
                        Intrinsics.checkNotNull(O);
                        this.C = O;
                        lu.c p10 = builder.p();
                        Intrinsics.checkNotNull(o10);
                        this.G = p10.e(o10);
                    } else {
                        h.a aVar = vu.h.f52016a;
                        X509TrustManager p11 = aVar.g().p();
                        this.C = p11;
                        vu.h g10 = aVar.g();
                        Intrinsics.checkNotNull(p11);
                        this.B = g10.o(p11);
                        c.a aVar2 = yu.c.f55844a;
                        Intrinsics.checkNotNull(p11);
                        yu.c a10 = aVar2.a(p11);
                        this.H = a10;
                        lu.c p12 = builder.p();
                        Intrinsics.checkNotNull(a10);
                        this.G = p12.e(a10);
                    }
                    P();
                }
            }
        }
        this.B = null;
        this.H = null;
        this.C = null;
        this.G = lu.c.f36049d;
        P();
    }

    private final void P() {
        List list = this.f40327i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f40328o;
            Intrinsics.checkNotNull(list2, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
            if (!list2.contains(null)) {
                List<d> list3 = this.D;
                if (!(list3 instanceof Collection) || !list3.isEmpty()) {
                    for (d dVar : list3) {
                        if (dVar.f()) {
                            if (this.B != null) {
                                if (this.H != null) {
                                    if (this.C == null) {
                                        throw new IllegalStateException("x509TrustManager == null");
                                    }
                                    return;
                                }
                                throw new IllegalStateException("certificateChainCleaner == null");
                            }
                            throw new IllegalStateException("sslSocketFactory == null");
                        }
                    }
                }
                if (this.B == null) {
                    if (this.H == null) {
                        if (this.C == null) {
                            if (Intrinsics.areEqual(this.G, lu.c.f36049d)) {
                                return;
                            }
                            throw new IllegalStateException("Check failed.");
                        }
                        throw new IllegalStateException("Check failed.");
                    }
                    throw new IllegalStateException("Check failed.");
                }
                throw new IllegalStateException("Check failed.");
            }
            throw new IllegalStateException(("Null network interceptor: " + this.f40328o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f40327i).toString());
    }

    public final List A() {
        return this.f40327i;
    }

    public final long B() {
        return this.N;
    }

    public final List D() {
        return this.f40328o;
    }

    public Builder E() {
        return new Builder(this);
    }

    public WebSocket F(Request request, l listener) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(listener, "listener");
        zu.d dVar = new zu.d(pu.e.f43216i, request, listener, new Random(), this.M, null, this.N);
        dVar.o(this);
        return dVar;
    }

    public final int G() {
        return this.M;
    }

    public final List H() {
        return this.E;
    }

    public final Proxy I() {
        return this.f40337x;
    }

    public final lu.a J() {
        return this.f40339z;
    }

    public final ProxySelector K() {
        return this.f40338y;
    }

    public final int L() {
        return this.K;
    }

    public final boolean M() {
        return this.f40330q;
    }

    public final SocketFactory N() {
        return this.A;
    }

    public final SSLSocketFactory O() {
        SSLSocketFactory sSLSocketFactory = this.B;
        if (sSLSocketFactory != null) {
            return sSLSocketFactory;
        }
        throw new IllegalStateException("CLEARTEXT-only client");
    }

    public final int R() {
        return this.L;
    }

    public final X509TrustManager S() {
        return this.C;
    }

    @Override // okhttp3.Call.Factory
    public Call a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new qu.e(this, request, false);
    }

    public final int b() {
        return this.I;
    }

    public final CookieJar c() {
        return this.f40334u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f40325d;
    }

    public final lu.a h() {
        return this.f40331r;
    }

    public final b j() {
        return this.f40335v;
    }

    public final int k() {
        return this.I;
    }

    public final yu.c l() {
        return this.H;
    }

    public final lu.c m() {
        return this.G;
    }

    public final int n() {
        return this.J;
    }

    public final lu.f o() {
        return this.f40326e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f40334u;
    }

    public final Dispatcher t() {
        return this.f40325d;
    }

    public final lu.h u() {
        return this.f40336w;
    }

    public final e.c v() {
        return this.f40329p;
    }

    public final boolean w() {
        return this.f40332s;
    }

    public final boolean x() {
        return this.f40333t;
    }

    public final qu.h y() {
        return this.O;
    }

    public final HostnameVerifier z() {
        return this.F;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Builder {
        private int A;
        private int B;
        private long C;
        private qu.h D;

        /* renamed from: a  reason: collision with root package name */
        private Dispatcher f40340a;

        /* renamed from: b  reason: collision with root package name */
        private lu.f f40341b;

        /* renamed from: c  reason: collision with root package name */
        private final List f40342c;

        /* renamed from: d  reason: collision with root package name */
        private final List f40343d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f40344e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f40345f;

        /* renamed from: g  reason: collision with root package name */
        private lu.a f40346g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f40347h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f40348i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f40349j;

        /* renamed from: k  reason: collision with root package name */
        private b f40350k;

        /* renamed from: l  reason: collision with root package name */
        private lu.h f40351l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f40352m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f40353n;

        /* renamed from: o  reason: collision with root package name */
        private lu.a f40354o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f40355p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f40356q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f40357r;

        /* renamed from: s  reason: collision with root package name */
        private List f40358s;

        /* renamed from: t  reason: collision with root package name */
        private List f40359t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f40360u;

        /* renamed from: v  reason: collision with root package name */
        private lu.c f40361v;

        /* renamed from: w  reason: collision with root package name */
        private yu.c f40362w;

        /* renamed from: x  reason: collision with root package name */
        private int f40363x;

        /* renamed from: y  reason: collision with root package name */
        private int f40364y;

        /* renamed from: z  reason: collision with root package name */
        private int f40365z;

        public Builder() {
            this.f40340a = new Dispatcher();
            this.f40341b = new lu.f();
            this.f40342c = new ArrayList();
            this.f40343d = new ArrayList();
            this.f40344e = mu.e.g(e.f40549b);
            this.f40345f = true;
            lu.a aVar = lu.a.f36045b;
            this.f40346g = aVar;
            this.f40347h = true;
            this.f40348i = true;
            this.f40349j = CookieJar.f40265b;
            this.f40351l = lu.h.f36061b;
            this.f40354o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f40355p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f40358s = aVar2.a();
            this.f40359t = aVar2.b();
            this.f40360u = yu.d.f55845a;
            this.f40361v = lu.c.f36049d;
            this.f40364y = 10000;
            this.f40365z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f40342c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f40343d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f40359t;
        }

        public final Proxy F() {
            return this.f40352m;
        }

        public final lu.a G() {
            return this.f40354o;
        }

        public final ProxySelector H() {
            return this.f40353n;
        }

        public final int I() {
            return this.f40365z;
        }

        public final boolean J() {
            return this.f40345f;
        }

        public final qu.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f40355p;
        }

        public final SSLSocketFactory M() {
            return this.f40356q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f40357r;
        }

        public final Builder P(List protocols) {
            Intrinsics.checkNotNullParameter(protocols, "protocols");
            List j12 = CollectionsKt.j1(protocols);
            j jVar = j.H2_PRIOR_KNOWLEDGE;
            if (!j12.contains(jVar) && !j12.contains(j.HTTP_1_1)) {
                throw new IllegalArgumentException(("protocols must contain h2_prior_knowledge or http/1.1: " + j12).toString());
            } else if (j12.contains(jVar) && j12.size() > 1) {
                throw new IllegalArgumentException(("protocols containing h2_prior_knowledge cannot use other protocols: " + j12).toString());
            } else if (!j12.contains(j.HTTP_1_0)) {
                Intrinsics.checkNotNull(j12, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Protocol?>");
                if (!j12.contains(null)) {
                    j12.remove(j.SPDY_3);
                    if (!Intrinsics.areEqual(j12, this.f40359t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f40359t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f40365z = mu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = mu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f40342c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f40343d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f40350k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f40363x = mu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f40364y = mu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f40349j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f40340a = dispatcher;
            return this;
        }

        public final Builder i(lu.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f40351l)) {
                this.D = null;
            }
            this.f40351l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f40344e = mu.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f40347h = z10;
            return this;
        }

        public final lu.a l() {
            return this.f40346g;
        }

        public final b m() {
            return this.f40350k;
        }

        public final int n() {
            return this.f40363x;
        }

        public final yu.c o() {
            return this.f40362w;
        }

        public final lu.c p() {
            return this.f40361v;
        }

        public final int q() {
            return this.f40364y;
        }

        public final lu.f r() {
            return this.f40341b;
        }

        public final List s() {
            return this.f40358s;
        }

        public final CookieJar t() {
            return this.f40349j;
        }

        public final Dispatcher u() {
            return this.f40340a;
        }

        public final lu.h v() {
            return this.f40351l;
        }

        public final e.c w() {
            return this.f40344e;
        }

        public final boolean x() {
            return this.f40347h;
        }

        public final boolean y() {
            return this.f40348i;
        }

        public final HostnameVerifier z() {
            return this.f40360u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f40340a = okHttpClient.t();
            this.f40341b = okHttpClient.o();
            CollectionsKt.B(this.f40342c, okHttpClient.A());
            CollectionsKt.B(this.f40343d, okHttpClient.D());
            this.f40344e = okHttpClient.v();
            this.f40345f = okHttpClient.M();
            this.f40346g = okHttpClient.h();
            this.f40347h = okHttpClient.w();
            this.f40348i = okHttpClient.x();
            this.f40349j = okHttpClient.r();
            this.f40350k = okHttpClient.j();
            this.f40351l = okHttpClient.u();
            this.f40352m = okHttpClient.I();
            this.f40353n = okHttpClient.K();
            this.f40354o = okHttpClient.J();
            this.f40355p = okHttpClient.N();
            this.f40356q = okHttpClient.B;
            this.f40357r = okHttpClient.S();
            this.f40358s = okHttpClient.q();
            this.f40359t = okHttpClient.H();
            this.f40360u = okHttpClient.z();
            this.f40361v = okHttpClient.m();
            this.f40362w = okHttpClient.l();
            this.f40363x = okHttpClient.k();
            this.f40364y = okHttpClient.n();
            this.f40365z = okHttpClient.L();
            this.A = okHttpClient.R();
            this.B = okHttpClient.G();
            this.C = okHttpClient.B();
            this.D = okHttpClient.y();
        }
    }

    public OkHttpClient() {
        this(new Builder());
    }
}
