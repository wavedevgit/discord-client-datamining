package okhttp3;

import bu.j;
import bu.l;
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
import lu.h;
import okhttp3.Call;
import okhttp3.e;
import ou.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class OkHttpClient implements Cloneable, Call.Factory {
    public static final a P = new a(null);
    private static final List Q = cu.e.w(j.HTTP_2, j.HTTP_1_1);
    private static final List R = cu.e.w(d.f43159i, d.f43161k);
    private final SocketFactory A;
    private final SSLSocketFactory B;
    private final X509TrustManager C;
    private final List D;
    private final List E;
    private final HostnameVerifier F;
    private final bu.c G;
    private final ou.c H;
    private final int I;
    private final int J;
    private final int K;
    private final int L;
    private final int M;
    private final long N;
    private final gu.h O;

    /* renamed from: d  reason: collision with root package name */
    private final Dispatcher f42947d;

    /* renamed from: e  reason: collision with root package name */
    private final bu.f f42948e;

    /* renamed from: i  reason: collision with root package name */
    private final List f42949i;

    /* renamed from: o  reason: collision with root package name */
    private final List f42950o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f42951p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f42952q;

    /* renamed from: r  reason: collision with root package name */
    private final bu.a f42953r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f42954s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f42955t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f42956u;

    /* renamed from: v  reason: collision with root package name */
    private final b f42957v;

    /* renamed from: w  reason: collision with root package name */
    private final bu.h f42958w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f42959x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f42960y;

    /* renamed from: z  reason: collision with root package name */
    private final bu.a f42961z;

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
        this.f42947d = builder.u();
        this.f42948e = builder.r();
        this.f42949i = cu.e.V(builder.A());
        this.f42950o = cu.e.V(builder.C());
        this.f42951p = builder.w();
        this.f42952q = builder.J();
        this.f42953r = builder.l();
        this.f42954s = builder.x();
        this.f42955t = builder.y();
        this.f42956u = builder.t();
        this.f42957v = builder.m();
        this.f42958w = builder.v();
        this.f42959x = builder.F();
        if (builder.F() != null) {
            H = nu.a.f41215a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = nu.a.f41215a;
            }
        }
        this.f42960y = H;
        this.f42961z = builder.G();
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
        gu.h K = builder.K();
        this.O = K == null ? new gu.h() : K;
        List<d> list = s10;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (d dVar : list) {
                if (dVar.f()) {
                    if (builder.M() != null) {
                        this.B = builder.M();
                        ou.c o10 = builder.o();
                        Intrinsics.checkNotNull(o10);
                        this.H = o10;
                        X509TrustManager O = builder.O();
                        Intrinsics.checkNotNull(O);
                        this.C = O;
                        bu.c p10 = builder.p();
                        Intrinsics.checkNotNull(o10);
                        this.G = p10.e(o10);
                    } else {
                        h.a aVar = lu.h.f36825a;
                        X509TrustManager p11 = aVar.g().p();
                        this.C = p11;
                        lu.h g10 = aVar.g();
                        Intrinsics.checkNotNull(p11);
                        this.B = g10.o(p11);
                        c.a aVar2 = ou.c.f43600a;
                        Intrinsics.checkNotNull(p11);
                        ou.c a10 = aVar2.a(p11);
                        this.H = a10;
                        bu.c p12 = builder.p();
                        Intrinsics.checkNotNull(a10);
                        this.G = p12.e(a10);
                    }
                    Q();
                }
            }
        }
        this.B = null;
        this.H = null;
        this.C = null;
        this.G = bu.c.f7105d;
        Q();
    }

    private final void Q() {
        List list = this.f42949i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f42950o;
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
                            if (Intrinsics.areEqual(this.G, bu.c.f7105d)) {
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
            throw new IllegalStateException(("Null network interceptor: " + this.f42950o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f42949i).toString());
    }

    public final List A() {
        return this.f42949i;
    }

    public final long B() {
        return this.N;
    }

    public final List D() {
        return this.f42950o;
    }

    public Builder E() {
        return new Builder(this);
    }

    public WebSocket F(Request request, l listener) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(listener, "listener");
        pu.d dVar = new pu.d(fu.e.f23765i, request, listener, new Random(), this.M, null, this.N);
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
        return this.f42959x;
    }

    public final bu.a J() {
        return this.f42961z;
    }

    public final ProxySelector K() {
        return this.f42960y;
    }

    public final int L() {
        return this.K;
    }

    public final boolean M() {
        return this.f42952q;
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
        return new gu.e(this, request, false);
    }

    public final int b() {
        return this.I;
    }

    public final CookieJar c() {
        return this.f42956u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f42947d;
    }

    public final bu.a i() {
        return this.f42953r;
    }

    public final b j() {
        return this.f42957v;
    }

    public final int k() {
        return this.I;
    }

    public final ou.c l() {
        return this.H;
    }

    public final bu.c m() {
        return this.G;
    }

    public final int n() {
        return this.J;
    }

    public final bu.f o() {
        return this.f42948e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f42956u;
    }

    public final Dispatcher t() {
        return this.f42947d;
    }

    public final bu.h u() {
        return this.f42958w;
    }

    public final e.c v() {
        return this.f42951p;
    }

    public final boolean w() {
        return this.f42954s;
    }

    public final boolean x() {
        return this.f42955t;
    }

    public final gu.h y() {
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
        private gu.h D;

        /* renamed from: a  reason: collision with root package name */
        private Dispatcher f42962a;

        /* renamed from: b  reason: collision with root package name */
        private bu.f f42963b;

        /* renamed from: c  reason: collision with root package name */
        private final List f42964c;

        /* renamed from: d  reason: collision with root package name */
        private final List f42965d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f42966e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f42967f;

        /* renamed from: g  reason: collision with root package name */
        private bu.a f42968g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f42969h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f42970i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f42971j;

        /* renamed from: k  reason: collision with root package name */
        private b f42972k;

        /* renamed from: l  reason: collision with root package name */
        private bu.h f42973l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f42974m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f42975n;

        /* renamed from: o  reason: collision with root package name */
        private bu.a f42976o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f42977p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f42978q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f42979r;

        /* renamed from: s  reason: collision with root package name */
        private List f42980s;

        /* renamed from: t  reason: collision with root package name */
        private List f42981t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f42982u;

        /* renamed from: v  reason: collision with root package name */
        private bu.c f42983v;

        /* renamed from: w  reason: collision with root package name */
        private ou.c f42984w;

        /* renamed from: x  reason: collision with root package name */
        private int f42985x;

        /* renamed from: y  reason: collision with root package name */
        private int f42986y;

        /* renamed from: z  reason: collision with root package name */
        private int f42987z;

        public Builder() {
            this.f42962a = new Dispatcher();
            this.f42963b = new bu.f();
            this.f42964c = new ArrayList();
            this.f42965d = new ArrayList();
            this.f42966e = cu.e.g(e.f43171b);
            this.f42967f = true;
            bu.a aVar = bu.a.f7101b;
            this.f42968g = aVar;
            this.f42969h = true;
            this.f42970i = true;
            this.f42971j = CookieJar.f42887b;
            this.f42973l = bu.h.f7117b;
            this.f42976o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f42977p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f42980s = aVar2.a();
            this.f42981t = aVar2.b();
            this.f42982u = ou.d.f43601a;
            this.f42983v = bu.c.f7105d;
            this.f42986y = 10000;
            this.f42987z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f42964c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f42965d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f42981t;
        }

        public final Proxy F() {
            return this.f42974m;
        }

        public final bu.a G() {
            return this.f42976o;
        }

        public final ProxySelector H() {
            return this.f42975n;
        }

        public final int I() {
            return this.f42987z;
        }

        public final boolean J() {
            return this.f42967f;
        }

        public final gu.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f42977p;
        }

        public final SSLSocketFactory M() {
            return this.f42978q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f42979r;
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
                    if (!Intrinsics.areEqual(j12, this.f42981t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f42981t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f42987z = cu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = cu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f42964c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f42965d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f42972k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f42985x = cu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f42986y = cu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f42971j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f42962a = dispatcher;
            return this;
        }

        public final Builder i(bu.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f42973l)) {
                this.D = null;
            }
            this.f42973l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f42966e = cu.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f42969h = z10;
            return this;
        }

        public final bu.a l() {
            return this.f42968g;
        }

        public final b m() {
            return this.f42972k;
        }

        public final int n() {
            return this.f42985x;
        }

        public final ou.c o() {
            return this.f42984w;
        }

        public final bu.c p() {
            return this.f42983v;
        }

        public final int q() {
            return this.f42986y;
        }

        public final bu.f r() {
            return this.f42963b;
        }

        public final List s() {
            return this.f42980s;
        }

        public final CookieJar t() {
            return this.f42971j;
        }

        public final Dispatcher u() {
            return this.f42962a;
        }

        public final bu.h v() {
            return this.f42973l;
        }

        public final e.c w() {
            return this.f42966e;
        }

        public final boolean x() {
            return this.f42969h;
        }

        public final boolean y() {
            return this.f42970i;
        }

        public final HostnameVerifier z() {
            return this.f42982u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f42962a = okHttpClient.t();
            this.f42963b = okHttpClient.o();
            CollectionsKt.B(this.f42964c, okHttpClient.A());
            CollectionsKt.B(this.f42965d, okHttpClient.D());
            this.f42966e = okHttpClient.v();
            this.f42967f = okHttpClient.M();
            this.f42968g = okHttpClient.i();
            this.f42969h = okHttpClient.w();
            this.f42970i = okHttpClient.x();
            this.f42971j = okHttpClient.r();
            this.f42972k = okHttpClient.j();
            this.f42973l = okHttpClient.u();
            this.f42974m = okHttpClient.I();
            this.f42975n = okHttpClient.K();
            this.f42976o = okHttpClient.J();
            this.f42977p = okHttpClient.N();
            this.f42978q = okHttpClient.B;
            this.f42979r = okHttpClient.S();
            this.f42980s = okHttpClient.q();
            this.f42981t = okHttpClient.H();
            this.f42982u = okHttpClient.z();
            this.f42983v = okHttpClient.m();
            this.f42984w = okHttpClient.l();
            this.f42985x = okHttpClient.k();
            this.f42986y = okHttpClient.n();
            this.f42987z = okHttpClient.L();
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
