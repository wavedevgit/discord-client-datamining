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
    private static final List R = cu.e.w(d.f43111i, d.f43113k);
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
    private final Dispatcher f42899d;

    /* renamed from: e  reason: collision with root package name */
    private final bu.f f42900e;

    /* renamed from: i  reason: collision with root package name */
    private final List f42901i;

    /* renamed from: o  reason: collision with root package name */
    private final List f42902o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f42903p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f42904q;

    /* renamed from: r  reason: collision with root package name */
    private final bu.a f42905r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f42906s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f42907t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f42908u;

    /* renamed from: v  reason: collision with root package name */
    private final b f42909v;

    /* renamed from: w  reason: collision with root package name */
    private final bu.h f42910w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f42911x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f42912y;

    /* renamed from: z  reason: collision with root package name */
    private final bu.a f42913z;

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
        this.f42899d = builder.u();
        this.f42900e = builder.r();
        this.f42901i = cu.e.V(builder.A());
        this.f42902o = cu.e.V(builder.C());
        this.f42903p = builder.w();
        this.f42904q = builder.J();
        this.f42905r = builder.l();
        this.f42906s = builder.x();
        this.f42907t = builder.y();
        this.f42908u = builder.t();
        this.f42909v = builder.m();
        this.f42910w = builder.v();
        this.f42911x = builder.F();
        if (builder.F() != null) {
            H = nu.a.f41167a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = nu.a.f41167a;
            }
        }
        this.f42912y = H;
        this.f42913z = builder.G();
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
                        h.a aVar = lu.h.f36777a;
                        X509TrustManager p11 = aVar.g().p();
                        this.C = p11;
                        lu.h g10 = aVar.g();
                        Intrinsics.checkNotNull(p11);
                        this.B = g10.o(p11);
                        c.a aVar2 = ou.c.f43552a;
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
        List list = this.f42901i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f42902o;
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
            throw new IllegalStateException(("Null network interceptor: " + this.f42902o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f42901i).toString());
    }

    public final List A() {
        return this.f42901i;
    }

    public final long B() {
        return this.N;
    }

    public final List D() {
        return this.f42902o;
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
        return this.f42911x;
    }

    public final bu.a J() {
        return this.f42913z;
    }

    public final ProxySelector K() {
        return this.f42912y;
    }

    public final int L() {
        return this.K;
    }

    public final boolean M() {
        return this.f42904q;
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
        return this.f42908u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f42899d;
    }

    public final bu.a i() {
        return this.f42905r;
    }

    public final b j() {
        return this.f42909v;
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
        return this.f42900e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f42908u;
    }

    public final Dispatcher t() {
        return this.f42899d;
    }

    public final bu.h u() {
        return this.f42910w;
    }

    public final e.c v() {
        return this.f42903p;
    }

    public final boolean w() {
        return this.f42906s;
    }

    public final boolean x() {
        return this.f42907t;
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
        private Dispatcher f42914a;

        /* renamed from: b  reason: collision with root package name */
        private bu.f f42915b;

        /* renamed from: c  reason: collision with root package name */
        private final List f42916c;

        /* renamed from: d  reason: collision with root package name */
        private final List f42917d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f42918e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f42919f;

        /* renamed from: g  reason: collision with root package name */
        private bu.a f42920g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f42921h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f42922i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f42923j;

        /* renamed from: k  reason: collision with root package name */
        private b f42924k;

        /* renamed from: l  reason: collision with root package name */
        private bu.h f42925l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f42926m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f42927n;

        /* renamed from: o  reason: collision with root package name */
        private bu.a f42928o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f42929p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f42930q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f42931r;

        /* renamed from: s  reason: collision with root package name */
        private List f42932s;

        /* renamed from: t  reason: collision with root package name */
        private List f42933t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f42934u;

        /* renamed from: v  reason: collision with root package name */
        private bu.c f42935v;

        /* renamed from: w  reason: collision with root package name */
        private ou.c f42936w;

        /* renamed from: x  reason: collision with root package name */
        private int f42937x;

        /* renamed from: y  reason: collision with root package name */
        private int f42938y;

        /* renamed from: z  reason: collision with root package name */
        private int f42939z;

        public Builder() {
            this.f42914a = new Dispatcher();
            this.f42915b = new bu.f();
            this.f42916c = new ArrayList();
            this.f42917d = new ArrayList();
            this.f42918e = cu.e.g(e.f43123b);
            this.f42919f = true;
            bu.a aVar = bu.a.f7101b;
            this.f42920g = aVar;
            this.f42921h = true;
            this.f42922i = true;
            this.f42923j = CookieJar.f42839b;
            this.f42925l = bu.h.f7117b;
            this.f42928o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f42929p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f42932s = aVar2.a();
            this.f42933t = aVar2.b();
            this.f42934u = ou.d.f43553a;
            this.f42935v = bu.c.f7105d;
            this.f42938y = 10000;
            this.f42939z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f42916c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f42917d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f42933t;
        }

        public final Proxy F() {
            return this.f42926m;
        }

        public final bu.a G() {
            return this.f42928o;
        }

        public final ProxySelector H() {
            return this.f42927n;
        }

        public final int I() {
            return this.f42939z;
        }

        public final boolean J() {
            return this.f42919f;
        }

        public final gu.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f42929p;
        }

        public final SSLSocketFactory M() {
            return this.f42930q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f42931r;
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
                    if (!Intrinsics.areEqual(j12, this.f42933t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f42933t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f42939z = cu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = cu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f42916c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f42917d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f42924k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f42937x = cu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f42938y = cu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f42923j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f42914a = dispatcher;
            return this;
        }

        public final Builder i(bu.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f42925l)) {
                this.D = null;
            }
            this.f42925l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f42918e = cu.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f42921h = z10;
            return this;
        }

        public final bu.a l() {
            return this.f42920g;
        }

        public final b m() {
            return this.f42924k;
        }

        public final int n() {
            return this.f42937x;
        }

        public final ou.c o() {
            return this.f42936w;
        }

        public final bu.c p() {
            return this.f42935v;
        }

        public final int q() {
            return this.f42938y;
        }

        public final bu.f r() {
            return this.f42915b;
        }

        public final List s() {
            return this.f42932s;
        }

        public final CookieJar t() {
            return this.f42923j;
        }

        public final Dispatcher u() {
            return this.f42914a;
        }

        public final bu.h v() {
            return this.f42925l;
        }

        public final e.c w() {
            return this.f42918e;
        }

        public final boolean x() {
            return this.f42921h;
        }

        public final boolean y() {
            return this.f42922i;
        }

        public final HostnameVerifier z() {
            return this.f42934u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f42914a = okHttpClient.t();
            this.f42915b = okHttpClient.o();
            CollectionsKt.B(this.f42916c, okHttpClient.A());
            CollectionsKt.B(this.f42917d, okHttpClient.D());
            this.f42918e = okHttpClient.v();
            this.f42919f = okHttpClient.M();
            this.f42920g = okHttpClient.i();
            this.f42921h = okHttpClient.w();
            this.f42922i = okHttpClient.x();
            this.f42923j = okHttpClient.r();
            this.f42924k = okHttpClient.j();
            this.f42925l = okHttpClient.u();
            this.f42926m = okHttpClient.I();
            this.f42927n = okHttpClient.K();
            this.f42928o = okHttpClient.J();
            this.f42929p = okHttpClient.N();
            this.f42930q = okHttpClient.B;
            this.f42931r = okHttpClient.S();
            this.f42932s = okHttpClient.q();
            this.f42933t = okHttpClient.H();
            this.f42934u = okHttpClient.z();
            this.f42935v = okHttpClient.m();
            this.f42936w = okHttpClient.l();
            this.f42937x = okHttpClient.k();
            this.f42938y = okHttpClient.n();
            this.f42939z = okHttpClient.L();
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
