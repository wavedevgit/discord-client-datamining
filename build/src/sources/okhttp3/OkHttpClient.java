package okhttp3;

import gu.h;
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
import ju.c;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.e;
import wt.j;
import wt.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class OkHttpClient implements Cloneable, Call.Factory {
    public static final a P = new a(null);
    private static final List Q = xt.e.w(j.HTTP_2, j.HTTP_1_1);
    private static final List R = xt.e.w(d.f44252i, d.f44254k);
    private final SocketFactory A;
    private final SSLSocketFactory B;
    private final X509TrustManager C;
    private final List D;
    private final List E;
    private final HostnameVerifier F;
    private final wt.c G;
    private final ju.c H;
    private final int I;
    private final int J;
    private final int K;
    private final int L;
    private final int M;
    private final long N;
    private final bu.h O;

    /* renamed from: d  reason: collision with root package name */
    private final Dispatcher f44040d;

    /* renamed from: e  reason: collision with root package name */
    private final wt.f f44041e;

    /* renamed from: i  reason: collision with root package name */
    private final List f44042i;

    /* renamed from: o  reason: collision with root package name */
    private final List f44043o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f44044p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f44045q;

    /* renamed from: r  reason: collision with root package name */
    private final wt.a f44046r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f44047s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f44048t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f44049u;

    /* renamed from: v  reason: collision with root package name */
    private final b f44050v;

    /* renamed from: w  reason: collision with root package name */
    private final wt.h f44051w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f44052x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f44053y;

    /* renamed from: z  reason: collision with root package name */
    private final wt.a f44054z;

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
        this.f44040d = builder.u();
        this.f44041e = builder.r();
        this.f44042i = xt.e.V(builder.A());
        this.f44043o = xt.e.V(builder.C());
        this.f44044p = builder.w();
        this.f44045q = builder.J();
        this.f44046r = builder.l();
        this.f44047s = builder.x();
        this.f44048t = builder.y();
        this.f44049u = builder.t();
        this.f44050v = builder.m();
        this.f44051w = builder.v();
        this.f44052x = builder.F();
        if (builder.F() != null) {
            H = iu.a.f31048a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = iu.a.f31048a;
            }
        }
        this.f44053y = H;
        this.f44054z = builder.G();
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
        bu.h K = builder.K();
        this.O = K == null ? new bu.h() : K;
        List<d> list = s10;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (d dVar : list) {
                if (dVar.f()) {
                    if (builder.M() != null) {
                        this.B = builder.M();
                        ju.c o10 = builder.o();
                        Intrinsics.checkNotNull(o10);
                        this.H = o10;
                        X509TrustManager O = builder.O();
                        Intrinsics.checkNotNull(O);
                        this.C = O;
                        wt.c p10 = builder.p();
                        Intrinsics.checkNotNull(o10);
                        this.G = p10.e(o10);
                    } else {
                        h.a aVar = gu.h.f26650a;
                        X509TrustManager p11 = aVar.g().p();
                        this.C = p11;
                        gu.h g10 = aVar.g();
                        Intrinsics.checkNotNull(p11);
                        this.B = g10.o(p11);
                        c.a aVar2 = ju.c.f32008a;
                        Intrinsics.checkNotNull(p11);
                        ju.c a10 = aVar2.a(p11);
                        this.H = a10;
                        wt.c p12 = builder.p();
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
        this.G = wt.c.f52750d;
        P();
    }

    private final void P() {
        List list = this.f44042i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f44043o;
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
                            if (Intrinsics.areEqual(this.G, wt.c.f52750d)) {
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
            throw new IllegalStateException(("Null network interceptor: " + this.f44043o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f44042i).toString());
    }

    public final List A() {
        return this.f44042i;
    }

    public final long B() {
        return this.N;
    }

    public final List C() {
        return this.f44043o;
    }

    public Builder D() {
        return new Builder(this);
    }

    public WebSocket E(Request request, l listener) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(listener, "listener");
        ku.d dVar = new ku.d(au.e.f6153i, request, listener, new Random(), this.M, null, this.N);
        dVar.o(this);
        return dVar;
    }

    public final int F() {
        return this.M;
    }

    public final List G() {
        return this.E;
    }

    public final Proxy H() {
        return this.f44052x;
    }

    public final wt.a I() {
        return this.f44054z;
    }

    public final ProxySelector J() {
        return this.f44053y;
    }

    public final int K() {
        return this.K;
    }

    public final boolean M() {
        return this.f44045q;
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

    public final int Q() {
        return this.L;
    }

    public final X509TrustManager R() {
        return this.C;
    }

    @Override // okhttp3.Call.Factory
    public Call a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new bu.e(this, request, false);
    }

    public final int b() {
        return this.I;
    }

    public final CookieJar c() {
        return this.f44049u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f44040d;
    }

    public final wt.a i() {
        return this.f44046r;
    }

    public final b j() {
        return this.f44050v;
    }

    public final int k() {
        return this.I;
    }

    public final ju.c l() {
        return this.H;
    }

    public final wt.c m() {
        return this.G;
    }

    public final int o() {
        return this.J;
    }

    public final wt.f p() {
        return this.f44041e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f44049u;
    }

    public final Dispatcher s() {
        return this.f44040d;
    }

    public final wt.h t() {
        return this.f44051w;
    }

    public final e.c u() {
        return this.f44044p;
    }

    public final boolean v() {
        return this.f44047s;
    }

    public final boolean w() {
        return this.f44048t;
    }

    public final bu.h y() {
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
        private bu.h D;

        /* renamed from: a  reason: collision with root package name */
        private Dispatcher f44055a;

        /* renamed from: b  reason: collision with root package name */
        private wt.f f44056b;

        /* renamed from: c  reason: collision with root package name */
        private final List f44057c;

        /* renamed from: d  reason: collision with root package name */
        private final List f44058d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f44059e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f44060f;

        /* renamed from: g  reason: collision with root package name */
        private wt.a f44061g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f44062h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f44063i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f44064j;

        /* renamed from: k  reason: collision with root package name */
        private b f44065k;

        /* renamed from: l  reason: collision with root package name */
        private wt.h f44066l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f44067m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f44068n;

        /* renamed from: o  reason: collision with root package name */
        private wt.a f44069o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f44070p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f44071q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f44072r;

        /* renamed from: s  reason: collision with root package name */
        private List f44073s;

        /* renamed from: t  reason: collision with root package name */
        private List f44074t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f44075u;

        /* renamed from: v  reason: collision with root package name */
        private wt.c f44076v;

        /* renamed from: w  reason: collision with root package name */
        private ju.c f44077w;

        /* renamed from: x  reason: collision with root package name */
        private int f44078x;

        /* renamed from: y  reason: collision with root package name */
        private int f44079y;

        /* renamed from: z  reason: collision with root package name */
        private int f44080z;

        public Builder() {
            this.f44055a = new Dispatcher();
            this.f44056b = new wt.f();
            this.f44057c = new ArrayList();
            this.f44058d = new ArrayList();
            this.f44059e = xt.e.g(e.f44264b);
            this.f44060f = true;
            wt.a aVar = wt.a.f52746b;
            this.f44061g = aVar;
            this.f44062h = true;
            this.f44063i = true;
            this.f44064j = CookieJar.f43980b;
            this.f44066l = wt.h.f52762b;
            this.f44069o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f44070p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f44073s = aVar2.a();
            this.f44074t = aVar2.b();
            this.f44075u = ju.d.f32009a;
            this.f44076v = wt.c.f52750d;
            this.f44079y = 10000;
            this.f44080z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f44057c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f44058d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f44074t;
        }

        public final Proxy F() {
            return this.f44067m;
        }

        public final wt.a G() {
            return this.f44069o;
        }

        public final ProxySelector H() {
            return this.f44068n;
        }

        public final int I() {
            return this.f44080z;
        }

        public final boolean J() {
            return this.f44060f;
        }

        public final bu.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f44070p;
        }

        public final SSLSocketFactory M() {
            return this.f44071q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f44072r;
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
                    if (!Intrinsics.areEqual(j12, this.f44074t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f44074t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44080z = xt.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = xt.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f44057c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f44058d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f44065k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44078x = xt.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44079y = xt.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f44064j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f44055a = dispatcher;
            return this;
        }

        public final Builder i(wt.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f44066l)) {
                this.D = null;
            }
            this.f44066l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f44059e = xt.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f44062h = z10;
            return this;
        }

        public final wt.a l() {
            return this.f44061g;
        }

        public final b m() {
            return this.f44065k;
        }

        public final int n() {
            return this.f44078x;
        }

        public final ju.c o() {
            return this.f44077w;
        }

        public final wt.c p() {
            return this.f44076v;
        }

        public final int q() {
            return this.f44079y;
        }

        public final wt.f r() {
            return this.f44056b;
        }

        public final List s() {
            return this.f44073s;
        }

        public final CookieJar t() {
            return this.f44064j;
        }

        public final Dispatcher u() {
            return this.f44055a;
        }

        public final wt.h v() {
            return this.f44066l;
        }

        public final e.c w() {
            return this.f44059e;
        }

        public final boolean x() {
            return this.f44062h;
        }

        public final boolean y() {
            return this.f44063i;
        }

        public final HostnameVerifier z() {
            return this.f44075u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f44055a = okHttpClient.s();
            this.f44056b = okHttpClient.p();
            CollectionsKt.B(this.f44057c, okHttpClient.A());
            CollectionsKt.B(this.f44058d, okHttpClient.C());
            this.f44059e = okHttpClient.u();
            this.f44060f = okHttpClient.M();
            this.f44061g = okHttpClient.i();
            this.f44062h = okHttpClient.v();
            this.f44063i = okHttpClient.w();
            this.f44064j = okHttpClient.r();
            this.f44065k = okHttpClient.j();
            this.f44066l = okHttpClient.t();
            this.f44067m = okHttpClient.H();
            this.f44068n = okHttpClient.J();
            this.f44069o = okHttpClient.I();
            this.f44070p = okHttpClient.N();
            this.f44071q = okHttpClient.B;
            this.f44072r = okHttpClient.R();
            this.f44073s = okHttpClient.q();
            this.f44074t = okHttpClient.G();
            this.f44075u = okHttpClient.z();
            this.f44076v = okHttpClient.m();
            this.f44077w = okHttpClient.l();
            this.f44078x = okHttpClient.k();
            this.f44079y = okHttpClient.o();
            this.f44080z = okHttpClient.K();
            this.A = okHttpClient.Q();
            this.B = okHttpClient.F();
            this.C = okHttpClient.B();
            this.D = okHttpClient.y();
        }
    }

    public OkHttpClient() {
        this(new Builder());
    }
}
